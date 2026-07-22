import {
  THREE,
  capsule,
  createCharacterRoot,
  glossy,
  glow,
  mesh,
  pivot,
  roundedBox,
  satin,
  toon,
} from './common.js';

const HALF_PI = Math.PI * 0.5;
const THREAD_UP = new THREE.Vector3(0, 1, 0);

function makePerformerShell() {
  const profile = [
    new THREE.Vector2(0, -0.68),
    new THREE.Vector2(0.28, -0.68),
    new THREE.Vector2(0.38, -0.61),
    new THREE.Vector2(0.42, -0.42),
    new THREE.Vector2(0.35, -0.08),
    new THREE.Vector2(0.34, 0.24),
    new THREE.Vector2(0.44, 0.53),
    new THREE.Vector2(0.39, 0.66),
    new THREE.Vector2(0.26, 0.7),
    new THREE.Vector2(0, 0.7),
  ];
  return new THREE.LatheGeometry(profile, 48);
}

function makeLapelGeometry(mirror = false) {
  const direction = mirror ? -1 : 1;
  const shape = new THREE.Shape();
  shape.moveTo(0, 0.32);
  shape.lineTo(direction * 0.23, 0.19);
  shape.lineTo(direction * 0.14, -0.29);
  shape.lineTo(direction * 0.025, -0.06);
  shape.closePath();
  const geometry = new THREE.ExtrudeGeometry(shape, {
    depth: 0.045,
    bevelEnabled: true,
    bevelSegments: 4,
    bevelSize: 0.014,
    bevelThickness: 0.012,
    curveSegments: 8,
  });
  geometry.center();
  return geometry;
}

function addArm(parent, side, materials, geometries) {
  const label = side < 0 ? 'left' : 'right';
  const shoulder = pivot(parent, `puppeteer:${label}Arm`, [side * 0.39, 1.93, 0]);
  mesh(
    shoulder,
    geometries.shoulder,
    materials.gold,
    [0, 0, 0],
    [1.18, 0.72, 1.05],
    [0, 0, side * 0.08],
    `${label}Epaulet`,
  );
  mesh(
    shoulder,
    geometries.upperArm,
    materials.coat,
    [0, -0.29, 0],
    [1, 1, 0.92],
    [0, 0, 0],
    `${label}UpperSleeve`,
  );

  const elbow = pivot(shoulder, `puppeteer:${label}Elbow`, [0, -0.59, 0]);
  mesh(elbow, geometries.elbow, materials.porcelainShade, [0, 0, 0], [1, 0.88, 1], [0, 0, 0], `${label}ElbowJoint`);
  mesh(
    elbow,
    geometries.forearm,
    materials.coatLight,
    [0, -0.265, 0],
    [0.98, 1, 0.9],
    [0, 0, 0],
    `${label}LowerSleeve`,
  );

  const wrist = pivot(elbow, `puppeteer:${label}Wrist`, [0, -0.52, 0]);
  mesh(wrist, geometries.cuff, materials.gold, [0, -0.015, 0], [1, 1, 1], [0, 0, 0], `${label}Cuff`);

  const hand = pivot(wrist, `puppeteer:${label}Hand`, [0, -0.06, 0]);
  mesh(hand, geometries.palm, materials.porcelain, [0, -0.095, 0], [0.9, 1.12, 0.68], [0, 0, 0], `${label}Palm`);
  for (let finger = -1; finger <= 1; finger += 1) {
    mesh(
      hand,
      geometries.finger,
      materials.porcelain,
      [finger * 0.043, -0.22 - Math.abs(finger) * 0.006, -0.002],
      [finger === 0 ? 1 : 0.88, finger === 0 ? 1.08 : 0.96, 0.92],
      [0, 0, finger * -0.035],
      `${label}Finger${finger + 2}`,
    );
  }
  mesh(
    hand,
    geometries.finger,
    materials.porcelain,
    [side * -0.075, -0.13, -0.018],
    [0.84, 0.72, 0.84],
    [0, 0, side * -0.84],
    `${label}Thumb`,
  );

  return { shoulder, elbow, wrist, hand };
}

function addLeg(parent, side, materials, geometries) {
  const label = side < 0 ? 'left' : 'right';
  const hip = pivot(parent, `puppeteer:${label}Leg`, [side * 0.17, 0.82, 0.005]);
  mesh(hip, geometries.hip, materials.gold, [0, 0, 0], [1, 0.85, 1], [0, 0, 0], `${label}HipJoint`);
  mesh(
    hip,
    geometries.thigh,
    materials.trouser,
    [0, -0.235, 0],
    [0.98, 1, 0.9],
    [0, 0, 0],
    `${label}Thigh`,
  );

  const knee = pivot(hip, `puppeteer:${label}Knee`, [0, -0.44, 0]);
  mesh(knee, geometries.knee, materials.porcelainShade, [0, 0, 0], [1, 0.82, 1], [0, 0, 0], `${label}KneeCap`);
  mesh(
    knee,
    geometries.shin,
    materials.trouser,
    [0, -0.19, 0],
    [0.92, 1, 0.86],
    [0, 0, 0],
    `${label}Shin`,
  );

  const ankle = pivot(knee, `puppeteer:${label}Ankle`, [0, -0.345, 0]);
  mesh(
    ankle,
    geometries.boot,
    materials.boot,
    [0, -0.07, -0.075],
    [1, 1, 1],
    [0.04, 0, 0],
    `${label}Boot`,
  );
  mesh(
    ankle,
    geometries.toe,
    materials.gold,
    [0, -0.095, -0.215],
    [0.86, 0.72, 0.82],
    [-HALF_PI, 0, 0],
    `${label}BootTip`,
  );

  return { hip, knee, ankle };
}

function addSpoolFrame(parent, materials, sphereGeometry) {
  const frame = pivot(parent, 'puppeteer:spoolFrame', [0, 1.72, 0.31]);
  mesh(
    frame,
    new THREE.TorusGeometry(0.49, 0.035, 12, 52, Math.PI),
    materials.gold,
    [0, 0.05, 0.015],
    [1, 1.08, 1],
    [0, 0, 0],
    'spoolShoulderArch',
  );
  mesh(frame, capsule(0.035, 0.49, 12), materials.gold, [-0.49, -0.2, 0.015], [1, 1, 1], [0, 0, 0], 'spoolLeftRail');
  mesh(frame, capsule(0.035, 0.49, 12), materials.gold, [0.49, -0.2, 0.015], [1, 1, 1], [0, 0, 0], 'spoolRightRail');

  const reel = pivot(frame, 'puppeteer:spoolReel', [0, -0.02, 0.11]);
  const axleGeometry = new THREE.CylinderGeometry(0.205, 0.205, 0.19, 40, 1, false);
  const flangeGeometry = new THREE.CylinderGeometry(0.3, 0.3, 0.035, 48, 1, false);
  mesh(reel, axleGeometry, materials.threadDark, [0, 0, 0], [1, 1, 1], [HALF_PI, 0, 0], 'spoolAxle');
  mesh(reel, flangeGeometry, materials.gold, [0, 0, -0.105], [1, 1, 1], [HALF_PI, 0, 0], 'spoolFrontFlange');
  mesh(reel, flangeGeometry, materials.gold, [0, 0, 0.105], [1, 1, 1], [HALF_PI, 0, 0], 'spoolRearFlange');
  for (let turn = -2; turn <= 2; turn += 1) {
    mesh(
      reel,
      new THREE.TorusGeometry(0.22 + (turn % 2) * 0.008, 0.014, 8, 36),
      materials.threadGlow,
      [0, 0, turn * 0.031],
      [1, 1, 1],
      [0, 0, 0],
      `spoolThread${turn + 3}`,
    );
  }
  for (let spoke = 0; spoke < 6; spoke += 1) {
    mesh(
      reel,
      capsule(0.018, 0.19, 8),
      materials.porcelainShade,
      [0, 0, 0.128],
      [1, 1, 1],
      [0, 0, spoke * Math.PI / 3],
      `spoolSpoke${spoke}`,
    );
  }
  mesh(reel, sphereGeometry, materials.gem, [0, 0, 0.15], [0.075, 0.075, 0.045], [0, 0, 0], 'spoolHubGem');
  return { frame, reel };
}

function addPuppet(parent, materials) {
  const puppet = pivot(parent, 'puppeteer:marionette', [0.91, 0.105, -0.17]);
  const sphere = new THREE.SphereGeometry(1, 24, 18);
  const joint = new THREE.SphereGeometry(0.055, 18, 14);
  const smallLimb = capsule(0.04, 0.105, 14);
  const handGeometry = new THREE.SphereGeometry(0.046, 18, 14);

  const body = pivot(puppet, 'puppeteer:marionetteBody', [0, 0.47, 0]);
  mesh(body, roundedBox(0.27, 0.3, 0.18, 0.075, 5), materials.puppetCoat, [0, 0, 0], [1, 1, 1], [0, 0, 0], 'marionetteCoat');
  mesh(body, new THREE.ConeGeometry(0.21, 0.24, 32, 1, false), materials.puppetCoatDark, [0, -0.205, 0.025], [1, 1, 0.9], [0, 0, 0], 'marionetteCoatSkirt');
  mesh(body, new THREE.TorusGeometry(0.118, 0.025, 10, 36), materials.gold, [0, 0.14, 0], [1, 0.72, 1], [HALF_PI, 0, 0], 'marionetteCollar');
  mesh(body, sphere, materials.gold, [0, 0.035, -0.105], [0.025, 0.025, 0.018], [0, 0, 0], 'marionetteButtonTop');
  mesh(body, sphere, materials.gold, [0, -0.045, -0.11], [0.025, 0.025, 0.018], [0, 0, 0], 'marionetteButtonBottom');

  const head = pivot(puppet, 'puppeteer:marionetteHead', [0, 0.76, -0.005]);
  mesh(head, sphere, materials.puppetWood, [0, 0, 0], [0.145, 0.155, 0.132], [0, 0, 0], 'marionetteHeadShell');
  mesh(head, sphere, materials.maskInk, [-0.053, 0.02, -0.126], [0.022, 0.03, 0.012], [0, 0, -0.08], 'marionetteLeftEye');
  mesh(head, sphere, materials.maskInk, [0.053, 0.02, -0.126], [0.022, 0.03, 0.012], [0, 0, 0.08], 'marionetteRightEye');
  mesh(head, new THREE.TorusGeometry(0.044, 0.008, 8, 24, Math.PI * 0.72), materials.maskInk, [0, -0.037, -0.13], [1, 0.82, 1], [0, 0, Math.PI * 0.14], 'marionetteSmile');
  mesh(head, new THREE.ConeGeometry(0.085, 0.21, 24), materials.puppetCoat, [-0.075, 0.19, 0.02], [1, 1, 0.9], [0, 0, 0.49], 'marionetteLeftCap');
  mesh(head, new THREE.ConeGeometry(0.085, 0.21, 24), materials.puppetCoatDark, [0.075, 0.19, 0.02], [1, 1, 0.9], [0, 0, -0.49], 'marionetteRightCap');
  mesh(head, sphere, materials.gold, [-0.148, 0.23, 0.02], [0.036, 0.036, 0.036], [0, 0, 0], 'marionetteLeftBell');
  mesh(head, sphere, materials.gold, [0.148, 0.23, 0.02], [0.036, 0.036, 0.036], [0, 0, 0], 'marionetteRightBell');

  function puppetArm(side) {
    const label = side < 0 ? 'left' : 'right';
    const shoulder = pivot(puppet, `puppeteer:marionette${label}Arm`, [side * 0.16, 0.575, 0]);
    mesh(shoulder, joint, materials.gold, [0, 0, 0], [1, 1, 1], [0, 0, 0], `marionette${label}Shoulder`);
    mesh(shoulder, smallLimb, materials.puppetWood, [0, -0.105, 0], [1, 1, 1], [0, 0, 0], `marionette${label}UpperArm`);
    const elbow = pivot(shoulder, `puppeteer:marionette${label}Elbow`, [0, -0.205, 0]);
    mesh(elbow, joint, materials.gold, [0, 0, 0], [0.82, 0.82, 0.82], [0, 0, 0], `marionette${label}ElbowJoint`);
    mesh(elbow, smallLimb, materials.puppetWood, [0, -0.105, 0], [0.9, 0.92, 0.9], [0, 0, 0], `marionette${label}Forearm`);
    const hand = pivot(elbow, `puppeteer:marionette${label}Hand`, [0, -0.205, 0]);
    mesh(hand, handGeometry, materials.puppetWood, [0, 0, 0], [1, 0.86, 0.72], [0, 0, 0], `marionette${label}HandMesh`);
    return { shoulder, elbow, hand };
  }

  function puppetLeg(side) {
    const label = side < 0 ? 'left' : 'right';
    const hip = pivot(puppet, `puppeteer:marionette${label}Leg`, [side * 0.075, 0.315, 0.015]);
    mesh(hip, joint, materials.gold, [0, 0, 0], [0.9, 0.9, 0.9], [0, 0, 0], `marionette${label}Hip`);
    mesh(hip, smallLimb, materials.puppetWood, [0, -0.105, 0], [1, 1, 1], [0, 0, 0], `marionette${label}Thigh`);
    const knee = pivot(hip, `puppeteer:marionette${label}Knee`, [0, -0.205, 0]);
    mesh(knee, joint, materials.gold, [0, 0, 0], [0.82, 0.82, 0.82], [0, 0, 0], `marionette${label}KneeJoint`);
    mesh(knee, smallLimb, materials.puppetWood, [0, -0.09, 0], [0.9, 0.82, 0.9], [0, 0, 0], `marionette${label}Shin`);
    mesh(knee, roundedBox(0.105, 0.07, 0.165, 0.028, 4), materials.boot, [0, -0.18, -0.04], [1, 1, 1], [0, 0, 0], `marionette${label}Shoe`);
    return { hip, knee };
  }

  const leftArm = puppetArm(-1);
  const rightArm = puppetArm(1);
  const leftLeg = puppetLeg(-1);
  const rightLeg = puppetLeg(1);
  const crownTarget = pivot(head, 'puppeteer:marionetteCrownTarget', [0, 0.21, 0]);
  const waistTarget = pivot(body, 'puppeteer:marionetteWaistTarget', [0, -0.03, 0.085]);

  return { puppet, body, head, leftArm, rightArm, leftLeg, rightLeg, crownTarget, waistTarget };
}

function addController(hand, materials) {
  const controller = pivot(hand, 'puppeteer:controller', [0, -0.245, -0.012]);
  controller.rotation.set(0.06, -0.12, 0.04);
  mesh(controller, new THREE.CylinderGeometry(0.026, 0.026, 0.48, 16), materials.gold, [0, 0, 0], [1, 1, 1], [0, 0, HALF_PI], 'controllerCrossbar');
  mesh(controller, new THREE.CylinderGeometry(0.022, 0.022, 0.32, 16), materials.porcelainShade, [0, 0, 0], [1, 1, 1], [HALF_PI, 0, 0], 'controllerDepthbar');
  mesh(controller, new THREE.SphereGeometry(0.04, 18, 14), materials.gem, [0, 0, 0], [1, 1, 1], [0, 0, 0], 'controllerGem');

  const anchors = [
    pivot(controller, 'puppeteer:controllerLeftAnchor', [-0.22, 0, 0]),
    pivot(controller, 'puppeteer:controllerRightAnchor', [0.22, 0, 0]),
    pivot(controller, 'puppeteer:controllerFrontAnchor', [0, 0, -0.14]),
    pivot(controller, 'puppeteer:controllerRearAnchor', [0, 0, 0.14]),
  ];
  return { controller, anchors };
}

function addThreadRig(model, root, anchors, targets, material) {
  const geometry = new THREE.CylinderGeometry(0.0065, 0.0065, 1, 8, 1, false);
  const threads = anchors.map((anchor, index) => {
    const thread = mesh(model, geometry, material, [0, 0, 0], [1, 1, 1], [0, 0, 0], `puppeteer:thread${index + 1}`);
    thread.castShadow = false;
    thread.receiveShadow = false;
    thread.renderOrder = 4;
    return { anchor, target: targets[index], mesh: thread };
  });
  const start = new THREE.Vector3();
  const end = new THREE.Vector3();
  const delta = new THREE.Vector3();

  function update() {
    root.updateMatrixWorld(true);
    for (const thread of threads) {
      start.set(0, 0, 0);
      thread.anchor.localToWorld(start);
      model.worldToLocal(start);
      end.set(0, 0, 0);
      thread.target.localToWorld(end);
      model.worldToLocal(end);
      delta.subVectors(end, start);
      const length = Math.max(0.001, delta.length());
      thread.mesh.position.copy(start).addScaledVector(delta, 0.5);
      thread.mesh.scale.set(1, length, 1);
      thread.mesh.quaternion.setFromUnitVectors(THREAD_UP, delta.multiplyScalar(1 / length));
    }
  }

  return { threads, update };
}

export function buildPuppeteerPrototype() {
  const { root, model, shadow } = createCharacterRoot('puppeteer');
  shadow.position.x = 0.18;

  const materials = {
    porcelain: glossy(0xf6eee9, { roughness: 0.25, metalness: 0.02, clearcoat: 0.88, clearcoatRoughness: 0.13 }),
    porcelainShade: glossy(0xc9c2da, { roughness: 0.31, metalness: 0.045, clearcoat: 0.64 }),
    coat: satin(0x4a205f, { roughness: 0.38, metalness: 0.08 }),
    coatLight: satin(0x713b84, { roughness: 0.4, metalness: 0.065 }),
    trouser: toon(0x271b3c),
    boot: glossy(0x171324, { roughness: 0.2, metalness: 0.13, clearcoat: 0.9 }),
    gold: glossy(0xf3bd63, { roughness: 0.23, metalness: 0.52, clearcoat: 0.78 }),
    maskInk: glossy(0x171224, { roughness: 0.2, metalness: 0.06, clearcoat: 0.85 }),
    gem: glossy(0x69f4e3, { roughness: 0.14, metalness: 0.14, clearcoat: 1, emissive: 0x174c4b, emissiveIntensity: 0.72 }),
    threadDark: satin(0x3a174e, { roughness: 0.46, metalness: 0.05 }),
    threadGlow: glow(0xdca0ff, 0.86),
    puppetWood: glossy(0xe4a36f, { roughness: 0.37, metalness: 0.025, clearcoat: 0.58 }),
    puppetCoat: glossy(0xd84c71, { roughness: 0.31, metalness: 0.055, clearcoat: 0.7 }),
    puppetCoatDark: satin(0x63205f, { roughness: 0.42, metalness: 0.05 }),
  };

  const sphere = new THREE.SphereGeometry(1, 32, 24);
  const geometries = {
    shoulder: new THREE.SphereGeometry(0.16, 26, 20),
    upperArm: capsule(0.13, 0.33, 24),
    elbow: new THREE.SphereGeometry(0.115, 24, 18),
    forearm: capsule(0.105, 0.31, 22),
    cuff: new THREE.CylinderGeometry(0.135, 0.11, 0.1, 28),
    palm: capsule(0.085, 0.12, 20),
    finger: capsule(0.024, 0.13, 14),
    hip: new THREE.SphereGeometry(0.13, 24, 18),
    thigh: capsule(0.115, 0.24, 22),
    knee: new THREE.SphereGeometry(0.11, 24, 18),
    shin: capsule(0.098, 0.17, 22),
    boot: roundedBox(0.25, 0.18, 0.39, 0.075, 6),
    toe: new THREE.ConeGeometry(0.105, 0.2, 30),
  };

  const performer = pivot(model, 'puppeteer:performer');
  const torso = pivot(performer, 'puppeteer:torso', [0, 1.48, 0]);
  mesh(torso, makePerformerShell(), materials.coat, [0, 0, 0], [1, 1, 0.94], [0, 0, 0], 'taperedRingmasterCoat');
  mesh(torso, roundedBox(0.31, 0.8, 0.065, 0.085, 6), materials.porcelain, [0, -0.04, -0.356], [1, 1, 1], [0, 0, 0], 'porcelainWaistcoat');
  mesh(torso, makeLapelGeometry(false), materials.coatLight, [0.09, 0.19, -0.405], [1, 1, 1], [0, 0, 0], 'rightLapel');
  mesh(torso, makeLapelGeometry(true), materials.coatLight, [-0.09, 0.19, -0.405], [1, 1, 1], [0, 0, 0], 'leftLapel');
  mesh(torso, new THREE.TorusGeometry(0.345, 0.035, 12, 44), materials.gold, [0, -0.23, 0], [1, 1, 0.95], [HALF_PI, 0, 0], 'waistFiligree');
  mesh(torso, sphere, materials.gem, [0, -0.23, -0.375], [0.075, 0.075, 0.035], [0, 0, 0], 'waistGem');
  mesh(torso, roundedBox(0.26, 0.72, 0.1, 0.09, 5), materials.coatLight, [-0.14, -0.67, 0.22], [1, 1, 1], [0.08, 0, -0.1], 'leftCoatTail');
  mesh(torso, roundedBox(0.26, 0.72, 0.1, 0.09, 5), materials.coatLight, [0.14, -0.67, 0.22], [1, 1, 1], [0.08, 0, 0.1], 'rightCoatTail');

  const neck = pivot(performer, 'puppeteer:neck', [0, 2.16, 0]);
  mesh(neck, capsule(0.115, 0.12, 22), materials.porcelainShade, [0, 0.02, 0], [1, 1, 1], [0, 0, 0], 'porcelainNeck');
  mesh(neck, new THREE.TorusGeometry(0.255, 0.065, 14, 44), materials.gold, [0, -0.03, 0], [1.32, 0.74, 1], [HALF_PI, 0, 0], 'ringmasterCollar');

  const head = pivot(performer, 'puppeteer:head', [0, 2.46, -0.015]);
  mesh(head, sphere, materials.maskInk, [0, 0, 0], [0.405, 0.46, 0.315], [0, 0, 0], 'smoothHood');
  mesh(head, sphere, materials.porcelain, [0, -0.015, -0.304], [0.292, 0.335, 0.038], [0, 0, 0], 'insetPorcelainMask');
  mesh(head, roundedBox(0.065, 0.105, 0.018, 0.025, 5), materials.maskInk, [-0.092, 0.047, -0.342], [1, 1, 1], [0, 0, -0.1], 'leftMaskEye');
  mesh(head, roundedBox(0.065, 0.105, 0.018, 0.025, 5), materials.maskInk, [0.092, 0.047, -0.342], [1, 1, 1], [0, 0, 0.1], 'rightMaskEye');
  mesh(head, sphere, materials.gem, [-0.092, 0.055, -0.355], [0.016, 0.025, 0.012], [0, 0, 0], 'leftEyeGleam');
  mesh(head, sphere, materials.gem, [0.092, 0.055, -0.355], [0.016, 0.025, 0.012], [0, 0, 0], 'rightEyeGleam');
  mesh(head, new THREE.TorusGeometry(0.052, 0.009, 8, 28, Math.PI * 0.72), materials.maskInk, [0, -0.102, -0.348], [1, 0.78, 1], [0, 0, Math.PI * 0.14], 'etchedMaskSmile');
  mesh(head, sphere, materials.gold, [0, 0.175, -0.342], [0.035, 0.05, 0.016], [0, 0, 0], 'maskCrest');

  const hat = pivot(head, 'puppeteer:hat', [0.045, 0.43, 0.015]);
  hat.rotation.set(-0.05, 0, -0.13);
  mesh(hat, new THREE.CylinderGeometry(0.31, 0.31, 0.055, 44), materials.coatLight, [0, 0, 0], [1, 1, 0.88], [0, 0, 0], 'topHatBrim');
  mesh(hat, new THREE.CylinderGeometry(0.22, 0.255, 0.34, 40), materials.maskInk, [0, 0.185, 0], [1, 1, 0.9], [0, 0, 0], 'topHatCrown');
  mesh(hat, new THREE.CylinderGeometry(0.228, 0.258, 0.075, 40), materials.gold, [0, 0.055, 0], [1, 1, 0.91], [0, 0, 0], 'topHatBand');
  mesh(hat, sphere, materials.gem, [0.2, 0.065, -0.04], [0.05, 0.05, 0.03], [0, 0, 0], 'topHatPin');

  const leftArm = addArm(performer, -1, materials, geometries);
  const rightArm = addArm(performer, 1, materials, geometries);
  const leftLeg = addLeg(performer, -1, materials, geometries);
  const rightLeg = addLeg(performer, 1, materials, geometries);
  const spool = addSpoolFrame(performer, materials, sphere);
  const controller = addController(rightArm.hand, materials);
  const marionette = addPuppet(model, materials);
  const threadRig = addThreadRig(
    model,
    root,
    controller.anchors,
    [marionette.leftArm.hand, marionette.rightArm.hand, marionette.crownTarget, marionette.waistTarget],
    materials.threadGlow,
  );

  function animate(time, mode) {
    const walking = mode === 'walk' ? 1 : 0;
    const casting = mode === 'ability' ? 1 : 0;
    const stride = Math.sin(time * 6.05);
    const puppetStride = Math.sin(time * 6.05 - 0.82);
    const breath = Math.sin(time * 1.72);
    const fingerWork = Math.sin(time * 3.15);
    const controlWave = Math.sin(time * 2.35);
    const puppetWave = Math.sin(time * 2.35 - 0.92);
    const controlLift = Math.pow(0.5 - 0.5 * Math.cos(time * 2.35), 1.25);
    const puppetLift = Math.pow(0.5 - 0.5 * Math.cos(time * 2.35 - 0.92), 1.25);

    performer.position.y = breath * 0.012 + walking * (0.024 + Math.abs(stride) * 0.026);
    performer.rotation.x = casting * -0.055;
    performer.rotation.z = walking * stride * 0.026 + casting * -0.025;
    torso.rotation.y = breath * 0.012 + casting * controlWave * 0.035;
    head.rotation.x = -0.025 + breath * 0.015 + casting * (-0.08 + controlLift * 0.06);
    head.rotation.y = walking * stride * -0.055 + casting * (0.13 + controlWave * 0.05);
    head.rotation.z = walking * stride * -0.018 + casting * 0.045;
    hat.rotation.z = -0.13 + breath * 0.008;

    leftArm.shoulder.rotation.x = 0.17 + walking * stride * 0.34 + casting * (0.22 + controlWave * 0.06);
    leftArm.shoulder.rotation.z = -0.21 + casting * (-0.78 - controlLift * 0.16);
    leftArm.elbow.rotation.x = -0.12 + walking * Math.max(0, -stride) * -0.22 + casting * 0.08;
    leftArm.elbow.rotation.z = 0.08 + casting * (0.31 + controlLift * 0.08);
    leftArm.wrist.rotation.x = -0.08 + casting * controlWave * 0.15;
    leftArm.wrist.rotation.z = -0.06 + fingerWork * 0.025 + casting * -0.18;

    rightArm.shoulder.rotation.x = 0.27 - walking * stride * 0.12 + casting * (0.2 + controlLift * 0.12);
    rightArm.shoulder.rotation.z = 0.4 + casting * (0.5 + controlLift * 0.14);
    rightArm.elbow.rotation.x = -0.16 + walking * Math.max(0, stride) * -0.09 + casting * (0.1 + controlWave * 0.04);
    rightArm.elbow.rotation.z = -0.12 + casting * (-0.23 - controlLift * 0.08);
    rightArm.wrist.rotation.x = 0.06 + fingerWork * 0.04 + casting * controlWave * 0.24;
    rightArm.wrist.rotation.y = -0.08 + casting * controlWave * 0.16;
    rightArm.wrist.rotation.z = 0.03 + casting * (controlWave * 0.17 - 0.08);
    controller.controller.rotation.x = 0.06 + casting * controlWave * 0.08;
    controller.controller.rotation.y = -0.12 + casting * controlWave * 0.12;
    controller.controller.rotation.z = 0.04 + fingerWork * 0.018 + casting * controlWave * 0.1;

    leftLeg.hip.rotation.x = walking * -stride * 0.47;
    rightLeg.hip.rotation.x = walking * stride * 0.47;
    leftLeg.hip.rotation.z = -0.025;
    rightLeg.hip.rotation.z = 0.025;
    leftLeg.knee.rotation.x = -0.055 - walking * Math.max(0, stride) * 0.52;
    rightLeg.knee.rotation.x = -0.055 - walking * Math.max(0, -stride) * 0.52;
    leftLeg.ankle.rotation.x = walking * Math.max(0, stride) * 0.22;
    rightLeg.ankle.rotation.x = walking * Math.max(0, -stride) * 0.22;

    spool.reel.rotation.z = time * (casting ? 0.72 : walking ? 0.38 : 0.19);
    spool.frame.rotation.y = walking * stride * -0.018;

    marionette.puppet.position.x = 0.91 + walking * puppetStride * 0.035 + casting * (0.08 + puppetLift * 0.12);
    marionette.puppet.position.y = 0.105
      + Math.sin(time * 1.72 - 0.38) * 0.012
      + walking * (0.025 + Math.abs(puppetStride) * 0.075)
      + casting * (0.035 + puppetLift * 0.3);
    marionette.puppet.position.z = -0.17 + walking * puppetStride * 0.022 + casting * (-0.08 - puppetLift * 0.15);
    marionette.puppet.rotation.x = walking * puppetStride * 0.04 + casting * puppetWave * 0.12;
    marionette.puppet.rotation.y = walking * puppetStride * 0.09 + casting * (puppetWave * 0.24);
    marionette.puppet.rotation.z = walking * puppetStride * -0.075 + casting * (puppetWave * 0.28 - puppetLift * 0.08);
    marionette.body.rotation.z = walking * puppetStride * 0.04 + casting * puppetWave * -0.11;
    marionette.head.rotation.x = -0.04 + walking * puppetStride * -0.055 + casting * puppetWave * -0.15;
    marionette.head.rotation.y = walking * puppetStride * 0.08 + casting * puppetWave * 0.22;
    marionette.head.rotation.z = walking * puppetStride * 0.055 + casting * puppetWave * 0.1;

    marionette.leftArm.shoulder.rotation.x = 0.1 + walking * puppetStride * 0.35 + casting * (-0.2 - puppetLift * 0.52);
    marionette.leftArm.shoulder.rotation.z = -0.32 + casting * (-0.6 - puppetLift * 0.24);
    marionette.leftArm.elbow.rotation.x = -0.24 - walking * Math.max(0, puppetStride) * 0.32 + casting * -0.18;
    marionette.leftArm.elbow.rotation.z = 0.12 + casting * puppetWave * 0.16;
    marionette.rightArm.shoulder.rotation.x = -0.05 - walking * puppetStride * 0.35 + casting * (-0.3 - puppetLift * 0.38);
    marionette.rightArm.shoulder.rotation.z = 0.32 + casting * (0.58 + puppetLift * 0.28);
    marionette.rightArm.elbow.rotation.x = -0.24 - walking * Math.max(0, -puppetStride) * 0.32 + casting * -0.22;
    marionette.rightArm.elbow.rotation.z = -0.12 + casting * puppetWave * -0.16;

    marionette.leftLeg.hip.rotation.x = walking * -puppetStride * 0.66 + casting * (0.22 + puppetWave * 0.16);
    marionette.rightLeg.hip.rotation.x = walking * puppetStride * 0.66 + casting * (-0.28 - puppetWave * 0.18);
    marionette.leftLeg.hip.rotation.z = -0.055 + casting * -0.18;
    marionette.rightLeg.hip.rotation.z = 0.055 + casting * 0.18;
    marionette.leftLeg.knee.rotation.x = -0.08 - walking * Math.max(0, puppetStride) * 0.72 - casting * puppetLift * 0.34;
    marionette.rightLeg.knee.rotation.x = -0.08 - walking * Math.max(0, -puppetStride) * 0.72 - casting * puppetLift * 0.42;

    const shadowPulse = 1 - walking * Math.abs(stride) * 0.035 - casting * controlLift * 0.055;
    shadow.scale.set(1.62 * shadowPulse, 1.22 * shadowPulse, 1);
    threadRig.update();
  }

  animate(0, 'idle');
  return { root, animate };
}
