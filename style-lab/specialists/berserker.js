import {
  THREE,
  capsule,
  createCharacterRoot,
  glossy,
  mesh,
  pivot,
  roundedBox,
  satin,
  toon,
} from './common.js';

const clamp01 = (value) => Math.min(1, Math.max(0, value));
const smooth = (value) => {
  const t = clamp01(value);
  return t * t * (3 - 2 * t);
};

function taperedTube(points, startRadius, endRadius, tubularSegments = 28, radialSegments = 12) {
  const curve = new THREE.CatmullRomCurve3(points, false, 'centripetal');
  const frames = curve.computeFrenetFrames(tubularSegments, false);
  const positions = [];
  const indices = [];

  for (let segment = 0; segment <= tubularSegments; segment += 1) {
    const t = segment / tubularSegments;
    const center = curve.getPointAt(t);
    const radius = THREE.MathUtils.lerp(startRadius, endRadius, smooth(t));
    const normal = frames.normals[segment];
    const binormal = frames.binormals[segment];

    for (let side = 0; side < radialSegments; side += 1) {
      const angle = (side / radialSegments) * Math.PI * 2;
      const cos = Math.cos(angle);
      const sin = Math.sin(angle);
      positions.push(
        center.x + radius * (cos * normal.x + sin * binormal.x),
        center.y + radius * (cos * normal.y + sin * binormal.y),
        center.z + radius * (cos * normal.z + sin * binormal.z),
      );
    }
  }

  for (let segment = 0; segment < tubularSegments; segment += 1) {
    for (let side = 0; side < radialSegments; side += 1) {
      const nextSide = (side + 1) % radialSegments;
      const a = segment * radialSegments + side;
      const b = (segment + 1) * radialSegments + side;
      const c = (segment + 1) * radialSegments + nextSide;
      const d = segment * radialSegments + nextSide;
      indices.push(a, b, d, b, c, d);
    }
  }

  const startCenter = positions.length / 3;
  const start = curve.getPointAt(0);
  positions.push(start.x, start.y, start.z);
  const endCenter = positions.length / 3;
  const end = curve.getPointAt(1);
  positions.push(end.x, end.y, end.z);
  for (let side = 0; side < radialSegments; side += 1) {
    const nextSide = (side + 1) % radialSegments;
    const endOffset = tubularSegments * radialSegments;
    indices.push(startCenter, nextSide, side);
    indices.push(endCenter, endOffset + side, endOffset + nextSide);
  }

  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
  geometry.setIndex(indices);
  geometry.computeVertexNormals();
  geometry.computeBoundingSphere();
  return geometry;
}

/**
 * Original ram-bruiser concept body. Front is local -Z.
 */
export function buildBerserkerPrototype() {
  const { root, model, shadow } = createCharacterRoot('berserker');
  model.scale.setScalar(0.86);

  const iron = satin(0x211b29, { roughness: 0.42, metalness: 0.28 });
  const ironLight = satin(0x413344, { roughness: 0.5, metalness: 0.2 });
  const crimson = glossy(0xb72840, { roughness: 0.29, metalness: 0.17, clearcoat: 0.48 });
  const scarlet = glossy(0xf04d55, { roughness: 0.25, metalness: 0.1, clearcoat: 0.68 });
  const oxblood = toon(0x701d32);
  const brass = satin(0xd99a42, { roughness: 0.33, metalness: 0.58 });
  const horn = satin(0xf0d39d, { roughness: 0.61, metalness: 0.02 });
  const sole = toon(0x120f18);
  const visor = glossy(0x100f1b, { roughness: 0.12, metalness: 0.14, clearcoat: 0.92 });
  const rageGlow = satin(0xff7a42, {
    roughness: 0.25,
    metalness: 0.12,
    emissive: 0xff351f,
    emissiveIntensity: 0.72,
  });
  const eyeGlow = satin(0xffd275, {
    roughness: 0.18,
    emissive: 0xff6a2f,
    emissiveIntensity: 1.28,
  });

  const sphere = new THREE.SphereGeometry(1, 40, 28);
  const detailSphere = new THREE.SphereGeometry(1, 28, 20);
  const jointSphere = new THREE.SphereGeometry(1, 24, 18);
  const upperArmGeometry = capsule(0.29, 0.28, 30);
  const forearmGeometry = capsule(0.36, 0.32, 34);
  const thighGeometry = capsule(0.28, 0.24, 30);
  const shinGeometry = capsule(0.255, 0.2, 28);
  const chestPlateGeometry = capsule(0.36, 0.67, 38);
  const pauldronGeometry = new THREE.SphereGeometry(1, 34, 24);
  const elbowGeometry = new THREE.CylinderGeometry(0.145, 0.145, 0.11, 24, 1, false);
  const bootGeometry = roundedBox(0.56, 0.34, 0.7, 0.14, 6);
  const toeGeometry = roundedBox(0.48, 0.19, 0.3, 0.09, 5);
  const fistGeometry = roundedBox(0.68, 0.42, 0.52, 0.14, 6);
  const rearPlateGeometry = roundedBox(0.91, 0.44, 0.18, 0.13, 5);
  const browGeometry = roundedBox(0.67, 0.15, 0.21, 0.07, 5);
  const visorGeometry = roundedBox(0.54, 0.3, 0.09, 0.1, 6);
  const trimGeometry = roundedBox(0.41, 0.065, 0.065, 0.025, 3);
  const knuckleGeometry = new THREE.SphereGeometry(0.11, 22, 16);
  const reactorRingGeometry = new THREE.TorusGeometry(0.225, 0.057, 14, 52);
  const reactorCoreGeometry = new THREE.CylinderGeometry(0.145, 0.145, 0.065, 36);
  const rageGemGeometry = new THREE.OctahedronGeometry(0.23, 2);

  const body = pivot(model, 'berserker:body');

  // Compact hips and chest overlap into a single forward wedge rather than reading as stacked toys.
  mesh(body, sphere, iron, [0, 0.91, 0.035], [0.69, 0.41, 0.5], [0, 0, 0], 'pelvisCore');
  mesh(body, sphere, oxblood, [0, 1.06, -0.18], [0.67, 0.35, 0.39], [0.08, 0, 0], 'abdominalArmor');
  mesh(body, new THREE.TorusGeometry(0.54, 0.09, 14, 54), brass, [0, 0.96, 0], [1.12, 1, 0.88], [Math.PI / 2, 0, 0], 'beltRim');
  mesh(body, sphere, iron, [0, 1.57, 0.02], [0.95, 0.67, 0.59], [0, 0, 0], 'chestCore');
  mesh(
    body,
    chestPlateGeometry,
    crimson,
    [0, 1.61, -0.47],
    [1.06, 0.92, 0.54],
    [0, 0, Math.PI / 2],
    'breastplate',
  );
  mesh(body, rageGemGeometry, rageGlow, [0, 1.56, -0.615], [0.62, 1, 0.28], [0, 0, 0], 'rageGem');
  mesh(body, trimGeometry, brass, [-0.23, 1.65, -0.625], [1, 1, 1], [0, 0, -0.34], 'leftChestTrim');
  mesh(body, trimGeometry, brass, [0.23, 1.65, -0.625], [1, 1, 1], [0, 0, 0.34], 'rightChestTrim');
  mesh(body, detailSphere, ironLight, [0, 1.96, 0.01], [0.63, 0.22, 0.49], [0, 0, 0], 'protectiveCollar');

  // Rear reactor and segmented spine make the elevated gameplay view as intentional as the front.
  mesh(body, rearPlateGeometry, crimson, [0, 1.61, 0.51], [1, 1, 1], [0, 0, 0], 'rearYoke');
  mesh(body, reactorRingGeometry, brass, [0, 1.62, 0.625], [1, 1, 1], [0, 0, 0], 'rageReactorRim');
  const reactorCore = mesh(
    body,
    reactorCoreGeometry,
    rageGlow,
    [0, 1.62, 0.665],
    [1, 1, 1],
    [Math.PI / 2, 0, 0],
    'rageReactorCore',
  );
  mesh(body, roundedBox(0.32, 0.48, 0.15, 0.08, 5), oxblood, [0, 1.05, 0.48], [1, 1, 1], [0.1, 0, 0], 'rearSpineGuard');
  for (let index = 0; index < 3; index += 1) {
    mesh(
      body,
      detailSphere,
      brass,
      [0, 1.18 + index * 0.16, 0.578],
      [0.09, 0.06, 0.045],
      [0, 0, 0],
      `spineRivet${index + 1}`,
    );
  }

  const head = pivot(body, 'berserker:head', [0, 2.08, -0.035]);
  mesh(head, sphere, iron, [0, 0, 0.01], [0.45, 0.405, 0.425], [0, 0, 0], 'helmetShell');
  mesh(head, sphere, crimson, [0, 0.135, 0.055], [0.41, 0.31, 0.39], [-0.06, 0, 0], 'helmetCrown');
  mesh(head, browGeometry, scarlet, [0, 0.16, -0.325], [1, 1, 1], [-0.11, 0, 0], 'helmetBrow');
  mesh(head, visorGeometry, visor, [0, -0.025, -0.393], [1, 1, 1], [-0.03, 0, 0], 'recessedVisor');
  mesh(head, detailSphere, ironLight, [-0.315, -0.055, -0.3], [0.15, 0.21, 0.135], [0, 0, 0], 'leftCheekGuard');
  mesh(head, detailSphere, ironLight, [0.315, -0.055, -0.3], [0.15, 0.21, 0.135], [0, 0, 0], 'rightCheekGuard');
  mesh(head, detailSphere, eyeGlow, [-0.135, 0.005, -0.452], [0.075, 0.046, 0.025], [0, 0, -0.08], 'leftEye');
  mesh(head, detailSphere, eyeGlow, [0.135, 0.005, -0.452], [0.075, 0.046, 0.025], [0, 0, 0.08], 'rightEye');
  mesh(head, roundedBox(0.17, 0.34, 0.34, 0.07, 5), crimson, [0, 0.285, 0.005], [1, 1, 1], [-0.1, 0, 0], 'helmetCrest');

  for (const side of [-1, 1]) {
    mesh(
      head,
      jointSphere,
      brass,
      [side * 0.375, 0.13, 0.045],
      [0.17, 0.18, 0.175],
      [0, 0, 0],
      side < 0 ? 'leftHornSocket' : 'rightHornSocket',
    );
    const hornPath = [
      new THREE.Vector3(side * 0.38, 0.15, 0.045),
      new THREE.Vector3(side * 0.54, 0.235, 0.095),
      new THREE.Vector3(side * 0.7, 0.17, 0.13),
      new THREE.Vector3(side * 0.8, 0.035, 0.03),
      new THREE.Vector3(side * 0.85, -0.095, -0.185),
    ];
    mesh(
      head,
      taperedTube(hornPath, 0.13, 0.018),
      horn,
      [0, 0, 0],
      [1, 1, 1],
      [0, 0, 0],
      side < 0 ? 'leftSweptHorn' : 'rightSweptHorn',
    );
  }

  const arms = [];
  const buildArm = (side) => {
    const label = side < 0 ? 'left' : 'right';
    const arm = pivot(body, `berserker:${label}Arm`, [side * 0.78, 1.8, 0.015]);
    arm.rotation.z = side * -0.13;

    mesh(arm, upperArmGeometry, ironLight, [0, -0.31, 0.025], [1, 1, 1], [0, 0, 0], `${label}UpperArm`);
    const pauldron = mesh(
      arm,
      pauldronGeometry,
      crimson,
      [side * 0.035, -0.035, 0.015],
      [0.46, 0.34, 0.45],
      [0, 0, side * -0.09],
      `${label}Pauldron`,
    );
    mesh(
      arm,
      detailSphere,
      scarlet,
      [side * 0.1, -0.04, -0.335],
      [0.26, 0.1, 0.08],
      [0, 0, side * -0.1],
      `${label}PauldronBrow`,
    );

    const forearm = pivot(arm, `berserker:${label}Forearm`, [0, -0.61, -0.015]);
    forearm.rotation.x = 0.43;
    mesh(
      forearm,
      forearmGeometry,
      iron,
      [0, -0.35, 0],
      [1.12, 1.03, 0.98],
      [0, 0, 0],
      `${label}ForearmCore`,
    );
    mesh(
      forearm,
      forearmGeometry,
      crimson,
      [0, -0.33, -0.205],
      [0.92, 0.88, 0.47],
      [0.03, 0, 0],
      `${label}ForearmPlate`,
    );
    mesh(
      forearm,
      elbowGeometry,
      brass,
      [side * 0.355, -0.025, 0],
      [1, 1, 1],
      [0, 0, Math.PI / 2],
      `${label}ElbowCap`,
    );
    const fist = pivot(forearm, `berserker:${label}Fist`, [0, -0.72, -0.035]);
    mesh(fist, fistGeometry, ironLight, [0, 0, 0], [1, 1, 1], [0, 0, 0], `${label}FistCore`);
    mesh(fist, roundedBox(0.61, 0.26, 0.14, 0.07, 5), scarlet, [0, 0.015, -0.285], [1, 1, 1], [0, 0, 0], `${label}KnuckleGuard`);
    for (let index = 0; index < 3; index += 1) {
      mesh(
        fist,
        knuckleGeometry,
        brass,
        [(index - 1) * 0.19, 0.015, -0.365],
        [0.88, 0.74, 0.56],
        [0, 0, 0],
        `${label}Knuckle${index + 1}`,
      );
    }
    mesh(fist, trimGeometry, rageGlow, [0, -0.12, -0.355], [0.88, 0.72, 0.62], [0, 0, 0], `${label}RageSeam`);

    const value = { arm, forearm, fist, pauldron, side };
    arms.push(value);
    return value;
  };

  buildArm(-1);
  buildArm(1);

  const legs = [];
  const buildLeg = (side) => {
    const label = side < 0 ? 'left' : 'right';
    const leg = pivot(body, `berserker:${label}Leg`, [side * 0.43, 1.02, 0.055]);
    leg.rotation.z = side * 0.105;
    mesh(leg, thighGeometry, ironLight, [0, -0.23, 0], [1, 1, 1], [0, 0, 0], `${label}Thigh`);
    mesh(leg, detailSphere, crimson, [0, -0.43, -0.235], [0.28, 0.2, 0.15], [0.1, 0, 0], `${label}KneeGuard`);

    const shin = pivot(leg, `berserker:${label}Shin`, [0, -0.49, 0]);
    mesh(shin, shinGeometry, iron, [0, -0.23, 0.015], [1.08, 1, 1], [0, 0, 0], `${label}ShinCore`);
    mesh(shin, shinGeometry, crimson, [0, -0.22, -0.17], [0.83, 0.78, 0.49], [0.02, 0, 0], `${label}Greave`);

    const foot = pivot(shin, `berserker:${label}Foot`, [0, -0.375, -0.135]);
    mesh(foot, bootGeometry, sole, [0, 0, 0], [1, 1, 1], [0, 0, 0], `${label}Boot`);
    mesh(foot, toeGeometry, crimson, [0, 0.025, -0.39], [1, 1, 1], [-0.07, 0, 0], `${label}ToeArmor`);
    mesh(foot, roundedBox(0.4, 0.09, 0.55, 0.035, 3), ironLight, [0, -0.19, -0.025], [1, 1, 1], [0, 0, 0], `${label}BootSole`);
    mesh(foot, jointSphere, brass, [side * 0.25, 0.06, 0.025], [0.075, 0.075, 0.075], [0, 0, 0], `${label}BootRivet`);

    const value = { leg, shin, foot, side };
    legs.push(value);
    return value;
  };

  buildLeg(-1);
  buildLeg(1);

  const animate = (time, mode) => {
    const walk = mode === 'walk' ? 1 : 0;
    const ability = mode === 'ability' ? 1 : 0;
    const idle = 1 - walk - ability;
    const stride = Math.sin(time * 5.15);
    const strideQuarter = Math.sin(time * 5.15 + Math.PI / 2);
    const leftLift = Math.max(0, -stride);
    const rightLift = Math.max(0, stride);
    const breath = Math.sin(time * 1.62);
    const phase = (time * 0.55) % 1;
    const stance = ability * smooth(phase / 0.2) * (1 - smooth((phase - 0.88) / 0.1));
    const coil = ability * smooth(phase / 0.28) * (1 - smooth((phase - 0.48) / 0.12));
    const drive = ability * smooth((phase - 0.49) / 0.085) * (1 - smooth((phase - 0.72) / 0.13));
    const recoil = ability * smooth((phase - 0.72) / 0.065) * (1 - smooth((phase - 0.91) / 0.075));
    const supportSettle = ability * Math.sin(clamp01(phase / 0.28) * Math.PI) * (phase < 0.28 ? 1 : 0);
    const impact = ability * Math.sin(clamp01((phase - 0.5) / 0.19) * Math.PI) * (phase < 0.69 ? 1 : 0);
    const walkBob = walk * (0.014 + Math.abs(strideQuarter) * 0.023);
    const abilitySink = coil * 0.16 + drive * 0.075 - recoil * 0.035;

    body.position.y = idle * breath * 0.009 + walkBob - abilitySink;
    body.position.z = -coil * 0.075 - drive * 0.46 + recoil * 0.115;
    body.rotation.x = -coil * 0.29 - drive * 0.31 + recoil * 0.14;
    body.rotation.y = walk * stride * 0.025;
    body.rotation.z = walk * strideQuarter * 0.042 + impact * Math.sin(time * 48) * 0.014;

    head.position.y = 2.08 - coil * 0.09 - drive * 0.055 + idle * breath * 0.005;
    head.position.z = -0.035 - coil * 0.105 - drive * 0.09 + recoil * 0.045;
    head.rotation.x = coil * 0.15 + drive * 0.09 - recoil * 0.08;
    head.rotation.y = walk * stride * -0.025 + (1 - walk - ability) * Math.sin(time * 0.72) * 0.025;
    head.rotation.z = walk * strideQuarter * -0.018;

    for (const armRig of arms) {
      const sideStride = stride * armRig.side;
      const lead = armRig.side > 0 ? 1 : 0;
      const guard = 1 - lead;
      armRig.arm.position.y = 1.8 + lead * drive * 0.035 - guard * coil * 0.025;
      armRig.arm.position.z = 0.015
        - lead * (coil * 0.065 + drive * 0.24 - recoil * 0.1)
        + guard * (coil * 0.025 - drive * 0.025);
      armRig.arm.rotation.x = walk * sideStride * 0.17
        + lead * (stance * 0.38 + coil * 0.25 + drive * 0.38 - recoil * 0.21)
        + guard * (stance * 0.27 + coil * 0.34 + drive * 0.12 - recoil * 0.12);
      armRig.arm.rotation.y = armRig.side * (-coil * 0.1 - drive * (lead ? 0.13 : 0.045) + recoil * 0.06);
      armRig.arm.rotation.z = armRig.side * (-0.13 + stance * 0.04)
        + lead * (-coil * 0.055 - drive * 0.075)
        + guard * coil * 0.035
        + walk * sideStride * 0.025;
      armRig.forearm.rotation.x = 0.43
        + walk * Math.max(0, sideStride) * 0.12
        + lead * (coil * 0.4 + drive * 0.38 - recoil * 0.24)
        + guard * (coil * 0.56 + drive * 0.18 - recoil * 0.16);
      armRig.forearm.rotation.y = armRig.side * (coil * 0.075 + drive * (lead ? 0.11 : 0.035));
      armRig.forearm.rotation.z = walk * sideStride * 0.018;
      armRig.fist.position.y = -0.72 + lead * drive * 0.045;
      armRig.fist.position.z = -0.035 - lead * drive * 0.13 + guard * coil * 0.025;
      armRig.fist.rotation.x = -coil * (lead ? 0.1 : 0.045) + impact * (lead ? 0.065 : 0.025) + recoil * 0.06;
      armRig.fist.rotation.z = armRig.side * (-coil * 0.035 - drive * (lead ? 0.055 : 0.018));
      armRig.pauldron.rotation.x = walk * sideStride * 0.06 - coil * 0.055 - drive * (lead ? 0.08 : 0.035) + recoil * 0.035;
    }

    for (const legRig of legs) {
      const sideStride = stride * legRig.side;
      const lift = legRig.side < 0 ? leftLift : rightLift;
      const lead = legRig.side > 0 ? 1 : 0;
      const support = 1 - lead;
      // Torso motion is cancelled at the hips. The support boot stays planted while
      // the leading boot rolls onto its toe during the charge.
      legRig.leg.position.y = 1.02
        + walk * (lift * 0.19 + Math.abs(sideStride) * 0.035 - walkBob)
        + abilitySink
        + lead * (coil * 0.255 + drive * 0.315 + recoil * 0.075)
        + support * (coil * 0.09 + drive * 0.05 + recoil * 0.018 + supportSettle * 0.014);
      legRig.leg.position.z = 0.055
        + lead * (-stance * 0.13 - drive * 0.12 + recoil * 0.045)
        + support * (stance * 0.12 + drive * 0.06 - recoil * 0.035);
      legRig.leg.rotation.x = walk * sideStride * -0.31
        + lead * (stance * 0.2 + drive * 0.17 - recoil * 0.09)
        + support * (-stance * 0.14 - drive * 0.11 + recoil * 0.055);
      legRig.leg.rotation.z = legRig.side * (0.105 + stance * 0.04) + walk * strideQuarter * legRig.side * 0.012;
      legRig.shin.rotation.x = -walk * lift * 0.4
        + lead * (-coil * 0.14 - drive * 0.18 + recoil * 0.1)
        + support * (coil * 0.055 + drive * 0.1 - recoil * 0.045);
      legRig.foot.rotation.x = walk * lift * 0.17
        + lead * (-coil * 0.27 - drive * 0.34 + recoil * 0.15)
        + support * (drive * 0.025 - recoil * 0.02);
      legRig.foot.rotation.z = walk * sideStride * 0.018;
    }

    const power = 0.68 + coil * 1.05 + drive * 1.7 + recoil * 0.35 + Math.max(0, breath) * idle * 0.06;
    rageGlow.emissiveIntensity = power;
    eyeGlow.emissiveIntensity = 1.2 + coil * 0.72 + drive * 1.3 + recoil * 0.25;
    reactorCore.rotation.z = time * (0.24 + ability * 0.55);

    const shadowScale = 1.18 - walk * Math.abs(stride) * 0.045 + coil * 0.05 + drive * 0.1;
    shadow.scale.set(shadowScale * (1 + drive * 0.1), shadowScale * (1 + drive * 0.24), shadowScale);
    shadow.position.z = -drive * 0.15 + recoil * 0.04;
    shadow.material.opacity = 0.34 + coil * 0.035 + drive * 0.045;
  };

  // Set a stable first frame so the model is correct before requestAnimationFrame begins.
  animate(0, 'idle');
  return { root, animate };
}
