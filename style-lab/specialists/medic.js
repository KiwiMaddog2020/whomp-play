import {
  THREE,
  animateStandardLocomotion,
  capsule,
  createCharacterRoot,
  glossy,
  glow,
  mesh,
  pivot,
  roundedBox,
  satin,
} from './common.js';

const COLORS = Object.freeze({
  shell: 0xe7eee9,
  warmShell: 0xd8e1dc,
  mint: 0x37bfa1,
  mintDark: 0x187a70,
  coral: 0xf26f6f,
  ink: 0x142634,
  joint: 0x45606a,
  sole: 0x263b44,
  light: 0xa8fff0,
  amber: 0xffce65,
});

const MEDIC_LOCOMOTION = Object.freeze({
  walkRate: 7.05,
  armSwing: 0.46,
  legSwing: 0.5,
  kneeFlex: 0.58,
  bodyRoll: 0.028,
  abilityLean: 0,
  leftAbilityArm: 0,
  rightAbilityArm: 0,
});

const TRIAGE_CYCLE_SECONDS = 3.6;

function smoothStep(edge0, edge1, value) {
  const normalized = Math.min(1, Math.max(0, (value - edge0) / (edge1 - edge0)));
  return normalized * normalized * (3 - 2 * normalized);
}

function makeArm(parent, side, materials) {
  const shoulder = pivot(parent, side < 0 ? 'medic:leftArm' : 'medic:rightArm', [side * 0.47, 1.5, 0]);
  mesh(shoulder, new THREE.SphereGeometry(0.15, 28, 18), materials.mint, [0, 0, 0], [1.05, 0.95, 1]);
  mesh(shoulder, capsule(0.115, 0.23), materials.shell, [0, -0.2, 0], [1, 1, 1], [0, 0, side * 0.04]);

  const forearm = pivot(shoulder, side < 0 ? 'medic:leftForearm' : 'medic:rightForearm', [0, -0.43, 0]);
  mesh(forearm, new THREE.SphereGeometry(0.115, 24, 16), materials.joint, [0, 0, 0]);
  mesh(forearm, capsule(0.105, 0.2), materials.shell, [0, -0.18, 0]);
  mesh(forearm, new THREE.CylinderGeometry(0.135, 0.12, 0.08, 30), materials.mint, [0, -0.3, 0]);
  mesh(forearm, new THREE.SphereGeometry(0.145, 28, 18), materials.glove, [0, -0.42, -0.01], [1.05, 0.9, 0.94]);
  mesh(forearm, capsule(0.052, 0.065, 18), materials.glove, [side * -0.105, -0.4, -0.07], [1, 1, 1], [-0.35, 0, side * 0.85]);

  let scanner = null;
  let lens = null;
  if (side < 0) {
    scanner = pivot(forearm, 'medic:scanner', [0, -0.26, -0.13]);
    mesh(scanner, roundedBox(0.22, 0.28, 0.08, 0.055), materials.ink, [0, 0, 0], [1, 1, 1], [0, 0, 0]);
    lens = mesh(scanner, new THREE.SphereGeometry(0.073, 24, 16), materials.scanner, [0, 0.045, -0.065], [1, 0.72, 0.3]);
    lens.castShadow = false;
  }
  return { shoulder, forearm, scanner, lens };
}

function makeLeg(parent, side, materials) {
  const hip = pivot(parent, side < 0 ? 'medic:leftLeg' : 'medic:rightLeg', [side * 0.2, 0.76, 0]);
  hip.userData.baseY = hip.position.y;
  mesh(hip, new THREE.SphereGeometry(0.14, 26, 16), materials.joint, [0, 0, 0]);
  mesh(hip, capsule(0.125, 0.2), materials.warmShell, [0, -0.18, 0]);
  const shin = pivot(hip, side < 0 ? 'medic:leftShin' : 'medic:rightShin', [0, -0.39, 0]);
  mesh(shin, new THREE.SphereGeometry(0.12, 24, 16), materials.joint, [0, 0, 0]);
  mesh(shin, new THREE.CylinderGeometry(0.13, 0.17, 0.23, 30), materials.mintDark, [0, -0.13, 0]);
  mesh(shin, new THREE.TorusGeometry(0.165, 0.034, 10, 34), materials.mint, [0, -0.22, 0], [1, 1, 1], [Math.PI / 2, 0, 0]);
  mesh(shin, capsule(0.18, 0.3), materials.boot, [0, -0.34, -0.1], [1.08, 0.92, 1.12], [Math.PI / 2, 0, 0]);
  mesh(shin, capsule(0.185, 0.32), materials.sole, [0, -0.47, -0.1], [1.1, 0.3, 1.13], [Math.PI / 2, 0, 0]);
  mesh(shin, new THREE.SphereGeometry(0.13, 24, 16), materials.coral, [side * 0.11, -0.34, -0.27], [0.42, 0.8, 0.36]);
  return { hip, shin };
}

export function buildMedicPrototype() {
  const { root, model, shadow } = createCharacterRoot('medic');
  const materials = {
    shell: satin(COLORS.shell, { roughness: 0.42 }),
    warmShell: satin(COLORS.warmShell, { roughness: 0.5 }),
    mint: satin(COLORS.mint, { roughness: 0.38, metalness: 0.08 }),
    mintDark: satin(COLORS.mintDark, { roughness: 0.5 }),
    coral: satin(COLORS.coral, { roughness: 0.42 }),
    ink: glossy(COLORS.ink, { roughness: 0.12, clearcoat: 0.92 }),
    joint: satin(COLORS.joint, { roughness: 0.76 }),
    sole: satin(COLORS.sole, { roughness: 0.82 }),
    glove: satin(0xf7fbf8, { roughness: 0.56 }),
    boot: satin(0xc9d8d3, { roughness: 0.58 }),
    scanner: glow(COLORS.light, 0.94),
    core: glow(COLORS.light, 0.94),
    amber: glow(COLORS.amber, 0.92),
  };

  const body = model;
  body.name = 'medic:dedicatedBody';
  // The feet-height anchor is corrected after shared locomotion so the planted
  // boot stays close to the stage instead of the whole rig floating mid-stride.
  body.userData.baseY = 0.33;

  const torsoProfile = [
    new THREE.Vector2(0, -0.53),
    new THREE.Vector2(0.08, -0.55),
    new THREE.Vector2(0.29, -0.51),
    new THREE.Vector2(0.43, -0.36),
    new THREE.Vector2(0.49, -0.1),
    new THREE.Vector2(0.46, 0.17),
    new THREE.Vector2(0.36, 0.36),
    new THREE.Vector2(0.22, 0.48),
    new THREE.Vector2(0.09, 0.53),
    new THREE.Vector2(0, 0.51),
  ];
  const torsoGeometry = new THREE.LatheGeometry(torsoProfile, 52);
  torsoGeometry.computeVertexNormals();
  mesh(body, torsoGeometry, materials.shell, [0, 1.25, 0], [1.02, 1, 0.86], [0, 0, 0], 'medic:teardropTorso');
  mesh(body, new THREE.TorusGeometry(0.37, 0.055, 14, 48), materials.mint, [0, 1.42, -0.34], [1, 0.74, 1], [Math.PI / 2, 0, 0]);

  const core = pivot(body, 'medic:healingCore', [0, 1.22, -0.425]);
  mesh(core, new THREE.CylinderGeometry(0.18, 0.18, 0.055, 38), materials.ink, [0, 0, 0], [1, 1, 1], [Math.PI / 2, 0, 0]);
  const coreLight = mesh(core, new THREE.SphereGeometry(0.125, 30, 20), materials.core, [0, 0, -0.045], [1, 1, 0.28]);
  const coreRing = mesh(core, new THREE.TorusGeometry(0.16, 0.024, 10, 44), materials.mint, [0, 0, -0.074]);
  mesh(core, roundedBox(0.21, 0.075, 0.035, 0.03), materials.mintDark, [0, 0, -0.09]);
  mesh(core, roundedBox(0.075, 0.21, 0.035, 0.03), materials.mintDark, [0, 0, -0.09]);

  const neck = pivot(body, 'medic:neck', [0, 1.67, 0]);
  mesh(neck, new THREE.CylinderGeometry(0.24, 0.28, 0.18, 36), materials.joint, [0, 0, 0]);
  mesh(neck, new THREE.TorusGeometry(0.29, 0.047, 12, 44), materials.mint, [0, 0.04, 0], [1, 1, 1], [Math.PI / 2, 0, 0]);

  const head = pivot(neck, 'medic:head', [0, 0.42, 0]);
  mesh(head, new THREE.SphereGeometry(0.43, 48, 32), materials.shell, [0, 0, 0], [1.04, 0.9, 0.94], [0, 0, 0], 'medic:helmet');
  mesh(head, new THREE.SphereGeometry(0.31, 42, 28), materials.ink, [0, -0.01, -0.32], [0.91, 0.7, 0.19], [0, 0, 0], 'medic:insetFaceplate');
  const leftEye = mesh(
    head,
    capsule(0.028, 0.055, 16),
    materials.core,
    [-0.105, 0.015, -0.382],
    [1, 1, 0.55],
    [0, 0, 0],
    'medic:eye',
  );
  const rightEye = mesh(
    head,
    capsule(0.028, 0.055, 16),
    materials.core,
    [0.105, 0.015, -0.382],
    [1, 1, 0.55],
    [0, 0, 0],
    'medic:eye',
  );
  mesh(head, new THREE.CapsuleGeometry(0.018, 0.07, 6, 16), materials.amber, [0, -0.11, -0.383], [1, 1, 0.5], [0, 0, Math.PI / 2]);
  mesh(head, new THREE.SphereGeometry(0.06, 20, 14), glossy(0xa9fff1, { roughness: 0.08 }), [-0.16, 0.16, -0.38], [1, 0.32, 0.12]);

  for (const side of [-1, 1]) {
    mesh(head, new THREE.CylinderGeometry(0.105, 0.105, 0.08, 32), materials.joint, [side * 0.405, 0, 0], [1, 1, 1], [0, 0, Math.PI / 2]);
    mesh(head, new THREE.CylinderGeometry(0.066, 0.066, 0.087, 28), side < 0 ? materials.coral : materials.mint, [side * 0.425, 0, 0], [1, 1, 1], [0, 0, Math.PI / 2]);
  }
  const antenna = pivot(head, 'medic:antenna', [0.25, 0.35, 0.04]);
  mesh(antenna, capsule(0.025, 0.2, 16), materials.joint, [0, 0.1, 0], [1, 1, 1], [0, 0, -0.22]);
  const antennaLight = mesh(antenna, new THREE.SphereGeometry(0.065, 24, 16), materials.coral, [0.045, 0.245, 0]);

  const left = makeArm(body, -1, materials);
  const right = makeArm(body, 1, materials);
  const leftLeg = makeLeg(body, -1, materials);
  const rightLeg = makeLeg(body, 1, materials);

  const pack = pivot(body, 'medic:aidPack', [0.28, 1.27, 0.38]);
  mesh(pack, roundedBox(0.48, 0.58, 0.25, 0.1), materials.mintDark, [0, 0, 0]);
  mesh(pack, roundedBox(0.34, 0.38, 0.07, 0.075), materials.shell, [0, 0.01, 0.15]);
  mesh(pack, new THREE.TorusGeometry(0.13, 0.025, 10, 36), materials.coral, [0, 0.02, 0.205]);
  mesh(pack, roundedBox(0.18, 0.06, 0.035, 0.02), materials.coral, [0, 0.02, 0.225]);
  mesh(pack, roundedBox(0.06, 0.18, 0.035, 0.02), materials.coral, [0, 0.02, 0.225]);
  mesh(pack, new THREE.TorusGeometry(0.17, 0.035, 10, 34, Math.PI), materials.joint, [0, 0.32, 0], [1, 1, 1], [0, 0, Math.PI]);
  mesh(pack, new THREE.SphereGeometry(0.035, 16, 10), materials.joint, [-0.17, 0.32, 0]);
  mesh(pack, new THREE.SphereGeometry(0.035, 16, 10), materials.joint, [0.17, 0.32, 0]);
  const canister = mesh(pack, new THREE.CapsuleGeometry(0.085, 0.28, 8, 24), materials.coral, [0.29, -0.05, 0.02]);
  canister.rotation.z = -0.04;
  mesh(pack, new THREE.CylinderGeometry(0.05, 0.06, 0.07, 24), materials.joint, [0.29, 0.17, 0.02]);

  const rig = {
    body,
    shadow,
    leftArm: left.shoulder,
    rightArm: right.shoulder,
    leftForearm: left.forearm,
    rightForearm: right.forearm,
    leftLeg: leftLeg.hip,
    rightLeg: rightLeg.hip,
    leftShin: leftLeg.shin,
    rightShin: rightLeg.shin,
  };

  return {
    root,
    animate(time, mode) {
      const state = animateStandardLocomotion(rig, time, mode, MEDIC_LOCOMOTION);
      const phase = (time % TRIAGE_CYCLE_SECONDS) / TRIAGE_CYCLE_SECONDS;
      const deploy = state.ability
        * smoothStep(0.02, 0.17, phase)
        * (1 - smoothStep(0.86, 0.99, phase));
      const scan = deploy * (1 - smoothStep(0.42, 0.58, phase));
      const treatment = deploy * smoothStep(0.42, 0.62, phase);
      const scanSweep = scan * Math.sin(phase * Math.PI * 7);
      const treatmentPulse = treatment * (0.82 + Math.sin(time * 12.4) * 0.18);
      const abilityPulse = scan * 0.28 + treatmentPulse * 0.72;

      // Give this compact rig a subtler weight transfer than the shared gait so
      // its broad rescue boots remain visibly planted throughout triage.
      body.position.y = body.userData.baseY
        + state.idle * 0.006
        + state.walk * (-0.025 + Math.abs(state.stride) * 0.004)
        - deploy * 0.002;
      body.position.x = -scan * 0.045 + treatment * 0.025;
      body.rotation.x = deploy * (-0.035 + treatment * 0.06);
      body.rotation.y = scanSweep * 0.018;
      body.rotation.z = state.walk * state.stride * MEDIC_LOCOMOTION.bodyRoll
        - scan * 0.042
        + treatment * 0.018;

      // Stage one: transfer weight to the left boot and sight the scanner.
      left.shoulder.rotation.x += deploy * (0.9 + scan * 0.12);
      left.shoulder.rotation.y = -scan * 0.12 + scanSweep * 0.035;
      left.shoulder.rotation.z = scan * 0.08;
      left.forearm.rotation.x += deploy * (0.58 + scan * 0.12);
      left.forearm.rotation.y = scanSweep * 0.045;
      left.forearm.rotation.z = -scan * 0.055;

      // Stage two: the free hand braces the scanner as the aid pack discharges.
      right.shoulder.rotation.x += deploy * (0.67 + treatment * 0.12);
      right.shoulder.rotation.y = treatment * -0.2;
      right.shoulder.rotation.z = deploy * -0.58 + treatment * -0.12;
      right.forearm.rotation.x += deploy * 0.23 + treatment * 0.28;
      right.forearm.rotation.y = treatment * -0.16;
      right.forearm.rotation.z = treatment * 0.08;

      leftLeg.hip.rotation.z = deploy * -0.035;
      rightLeg.hip.rotation.z = deploy * 0.055;
      leftLeg.hip.rotation.x += deploy * -0.075;
      rightLeg.hip.rotation.x += deploy * 0.12;
      leftLeg.shin.rotation.x += deploy * 0.07;
      rightLeg.shin.rotation.x += deploy * -0.12;

      head.rotation.y = Math.sin(time * 0.85) * 0.045 + state.walk * state.stride * 0.025;
      head.rotation.x = scan * 0.055 - treatment * 0.025;
      head.rotation.y += scanSweep * 0.04;
      head.rotation.z = state.walk * -state.stride * 0.02 + scan * 0.035;
      antenna.rotation.z = -0.12 + Math.sin(time * 2.1) * 0.035 + state.walk * state.stride * 0.07;
      antennaLight.scale.setScalar(1 + abilityPulse * 0.24);
      coreLight.scale.set(1 + abilityPulse * 0.34, 1 + abilityPulse * 0.34, 0.28);
      coreRing.scale.setScalar(1 + abilityPulse * 0.16);
      if (left.scanner && left.lens) {
        left.scanner.rotation.x = deploy * (-0.18 + treatment * 0.12);
        left.scanner.rotation.y = scanSweep * -0.055;
        left.scanner.rotation.z = scan * -0.04 + treatment * 0.065;
        left.lens.scale.set(1 + abilityPulse * 0.16, 0.72 + abilityPulse * 0.12, 0.3);
      }
      pack.rotation.x = -scan * 0.055 + treatment * 0.11;
      pack.rotation.y = treatment * -0.045;
      pack.rotation.z = state.walk * -state.stride * 0.025 - scan * 0.025 + treatment * 0.06;
      canister.position.y = -0.05 - treatment * 0.018;
      canister.rotation.x = state.walk * state.stride * 0.035 + treatment * 0.22;
      canister.rotation.y = treatment * 0.08;
      canister.rotation.z = -0.04 + treatment * 0.16;
      const blink = Math.sin(time * 0.73) > 0.992 ? 0.14 : 1;
      const focusScaleX = 1 - scan * 0.12 - treatment * 0.06;
      const focusScaleY = blink * (1 - scan * 0.46 - treatment * 0.2);
      leftEye.scale.x = focusScaleX;
      leftEye.scale.y = focusScaleY;
      rightEye.scale.x = focusScaleX;
      rightEye.scale.y = focusScaleY;
      leftEye.rotation.z = scan * -0.16 + treatment * -0.08;
      rightEye.rotation.z = scan * 0.16 + treatment * 0.08;
    },
  };
}
