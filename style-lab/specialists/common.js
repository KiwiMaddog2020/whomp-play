import * as THREE from 'three';

export { THREE };

const rampBytes = new Uint8Array([36, 36, 92, 92, 166, 166, 232, 232]);
export const toonRamp = new THREE.DataTexture(rampBytes, 4, 1, THREE.RedFormat);
toonRamp.needsUpdate = true;
toonRamp.minFilter = THREE.NearestFilter;
toonRamp.magFilter = THREE.NearestFilter;

export function toon(color, options = {}) {
  return new THREE.MeshToonMaterial({
    color,
    gradientMap: toonRamp,
    emissive: options.emissive ?? 0x000000,
    emissiveIntensity: options.emissiveIntensity ?? 0,
    transparent: options.transparent ?? false,
    opacity: options.opacity ?? 1,
  });
}

export function satin(color, options = {}) {
  return new THREE.MeshStandardMaterial({
    color,
    roughness: options.roughness ?? 0.48,
    metalness: options.metalness ?? 0.055,
    emissive: options.emissive ?? 0x000000,
    emissiveIntensity: options.emissiveIntensity ?? 0,
  });
}

export function glossy(color, options = {}) {
  return new THREE.MeshPhysicalMaterial({
    color,
    roughness: options.roughness ?? 0.22,
    metalness: options.metalness ?? 0.08,
    clearcoat: options.clearcoat ?? 0.72,
    clearcoatRoughness: options.clearcoatRoughness ?? 0.16,
    transparent: options.transparent ?? false,
    opacity: options.opacity ?? 1,
    transmission: options.transmission ?? 0,
    thickness: options.thickness ?? 0,
  });
}

export function glow(color, opacity = 1) {
  return new THREE.MeshBasicMaterial({
    color,
    transparent: opacity < 1,
    opacity,
    depthWrite: opacity >= 1,
    blending: opacity < 1 ? THREE.AdditiveBlending : THREE.NormalBlending,
  });
}

export function mesh(
  parent,
  geometry,
  material,
  position = [0, 0, 0],
  scale = [1, 1, 1],
  rotation = [0, 0, 0],
  name = '',
) {
  const value = new THREE.Mesh(geometry, material);
  value.position.set(...position);
  value.scale.set(...scale);
  value.rotation.set(...rotation);
  value.name = name;
  value.castShadow = true;
  value.receiveShadow = true;
  parent.add(value);
  return value;
}

export function pivot(parent, name, position = [0, 0, 0]) {
  const value = new THREE.Group();
  value.name = name;
  value.position.set(...position);
  parent.add(value);
  return value;
}

export function capsule(radius, length, segments = 28) {
  return new THREE.CapsuleGeometry(radius, length, 10, segments);
}

export function roundedBox(width, height, depth, radius = 0.08, segments = 5) {
  const shape = new THREE.Shape();
  const x = -width / 2;
  const y = -height / 2;
  const r = Math.min(radius, width / 2, height / 2);
  shape.moveTo(x + r, y);
  shape.lineTo(x + width - r, y);
  shape.quadraticCurveTo(x + width, y, x + width, y + r);
  shape.lineTo(x + width, y + height - r);
  shape.quadraticCurveTo(x + width, y + height, x + width - r, y + height);
  shape.lineTo(x + r, y + height);
  shape.quadraticCurveTo(x, y + height, x, y + height - r);
  shape.lineTo(x, y + r);
  shape.quadraticCurveTo(x, y, x + r, y);
  const geometry = new THREE.ExtrudeGeometry(shape, {
    depth,
    bevelEnabled: true,
    bevelSegments: segments,
    steps: 1,
    bevelSize: Math.min(r * 0.55, depth * 0.28),
    bevelThickness: Math.min(r * 0.45, depth * 0.24),
    curveSegments: 12,
  });
  geometry.center();
  return geometry;
}

export function makeContactShadow(parent, radius = 0.72) {
  const material = new THREE.MeshBasicMaterial({
    color: 0x01030a,
    transparent: true,
    opacity: 0.34,
    depthWrite: false,
  });
  const shadow = mesh(
    parent,
    new THREE.CircleGeometry(radius, 64),
    material,
    [0, 0.012, 0],
    [1.18, 1.18, 1.18],
    [-Math.PI / 2, 0, 0],
    'contactShadow',
  );
  shadow.castShadow = false;
  shadow.receiveShadow = false;
  return shadow;
}

export function createCharacterRoot(name) {
  const root = new THREE.Group();
  root.name = `${name}:root`;
  const model = pivot(root, `${name}:model`, [0, 0.12, 0]);
  const shadow = makeContactShadow(root);
  return { root, model, shadow };
}

export function animateStandardLocomotion(rig, time, mode, tuning = {}) {
  const stride = Math.sin(time * (tuning.walkRate ?? 6.2));
  const liftL = Math.max(0, Math.sin(time * (tuning.walkRate ?? 6.2) + Math.PI));
  const liftR = Math.max(0, Math.sin(time * (tuning.walkRate ?? 6.2)));
  const walk = mode === 'walk' ? 1 : 0;
  const ability = mode === 'ability' ? 1 : 0;
  const idle = Math.sin(time * 1.8);
  const state = rig.locomotionState ?? (rig.locomotionState = {
    stride: 0,
    walk: 0,
    ability: 0,
    idle: 0,
  });
  state.stride = stride;
  state.walk = walk;
  state.ability = ability;
  state.idle = idle;

  if (rig.body) {
    const bodyBaseY = rig.body.userData.baseY ?? rig.body.position.y;
    // Keep one boot planted through the walk cycle. The old positive-only bob
    // lifted the whole rig while the stepping leg rose, making compact bodies
    // visibly hover above the pedestal.
    rig.body.position.y = bodyBaseY + idle * 0.012 + walk * (-0.012 + Math.abs(stride) * 0.012);
    rig.body.rotation.z = walk * stride * (tuning.bodyRoll ?? 0.035);
    rig.body.rotation.x = ability * (tuning.abilityLean ?? -0.08);
  }
  if (rig.leftArm) rig.leftArm.rotation.x = walk * stride * (tuning.armSwing ?? 0.55) + ability * (tuning.leftAbilityArm ?? -0.55);
  if (rig.rightArm) rig.rightArm.rotation.x = walk * -stride * (tuning.armSwing ?? 0.55) + ability * (tuning.rightAbilityArm ?? -0.55);
  if (rig.leftLeg) {
    rig.leftLeg.rotation.x = walk * -stride * (tuning.legSwing ?? 0.48);
    rig.leftLeg.position.y = (rig.leftLeg.userData.baseY ?? rig.leftLeg.position.y) + walk * liftL * 0.045;
  }
  if (rig.rightLeg) {
    rig.rightLeg.rotation.x = walk * stride * (tuning.legSwing ?? 0.48);
    rig.rightLeg.position.y = (rig.rightLeg.userData.baseY ?? rig.rightLeg.position.y) + walk * liftR * 0.045;
  }
  if (rig.leftForearm) rig.leftForearm.rotation.x = (tuning.elbowRest ?? -0.24) + walk * Math.max(0, stride) * -0.35;
  if (rig.rightForearm) rig.rightForearm.rotation.x = (tuning.elbowRest ?? -0.24) + walk * Math.max(0, -stride) * -0.35;
  if (rig.leftShin) rig.leftShin.rotation.x = -0.06 - walk * liftL * (tuning.kneeFlex ?? 0.52);
  if (rig.rightShin) rig.rightShin.rotation.x = -0.06 - walk * liftR * (tuning.kneeFlex ?? 0.52);
  if (rig.shadow) {
    const squash = 1 - walk * Math.abs(stride) * 0.055 - ability * 0.08;
    rig.shadow.scale.set(1.18 * squash, 1.18 * squash, 1.18 * squash);
  }
  return state;
}

export function setupStage(host, accent = 0x53e7ff) {
  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.08;
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFShadowMap;
  host.prepend(renderer.domElement);

  const scene = new THREE.Scene();
  scene.fog = new THREE.Fog(0x10162a, 8.5, 14);
  scene.add(new THREE.HemisphereLight(0xdaedff, 0x171222, 1.72));
  const key = new THREE.DirectionalLight(0xffefd5, 3.15);
  key.position.set(-3.8, 6.2, -4.6);
  key.castShadow = true;
  key.shadow.mapSize.set(1024, 1024);
  scene.add(key);
  const rim = new THREE.PointLight(accent, 32, 9, 2);
  rim.position.set(3.1, 3.4, 3.4);
  scene.add(rim);

  const pedestalMaterial = satin(0x202a45, { roughness: 0.72, metalness: 0.08 });
  const pedestal = mesh(scene, new THREE.CylinderGeometry(1.42, 1.66, 0.16, 72), pedestalMaterial, [0, -0.08, 0]);
  pedestal.receiveShadow = true;
  const ring = mesh(
    scene,
    new THREE.TorusGeometry(1.19, 0.024, 10, 80),
    glow(accent, 0.62),
    [0, 0.014, 0],
    [1, 1, 1],
    [Math.PI / 2, 0, 0],
  );
  ring.castShadow = false;

  const camera = new THREE.PerspectiveCamera(34, 1, 0.1, 60);
  return { host, renderer, scene, camera, width: 0, height: 0 };
}

export const VIEW_CAMERA = Object.freeze({
  front: { position: [0, 2.35, -6.35], lookAt: [0, 1.35, 0] },
  profile: { position: [6.1, 2.45, 0], lookAt: [0, 1.35, 0] },
  rear: { position: [0, 2.4, 6.35], lookAt: [0, 1.35, 0] },
  gameplay: { position: [4.5, 4.6, 6.9], lookAt: [0, 1.12, 0] },
});

export function applyView(camera, view) {
  const spec = VIEW_CAMERA[view] ?? VIEW_CAMERA.gameplay;
  camera.position.set(...spec.position);
  camera.lookAt(...spec.lookAt);
}

export function resizeStage(stage) {
  const width = Math.max(1, stage.host.clientWidth);
  const height = Math.max(1, stage.host.clientHeight);
  if (stage.width === width && stage.height === height) return false;
  stage.width = width;
  stage.height = height;
  stage.renderer.setSize(width, height, false);
  stage.camera.aspect = width / height;
  stage.camera.updateProjectionMatrix();
  return true;
}
