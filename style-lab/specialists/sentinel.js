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

function beveledPlate(points, depth, bevel = 0.035) {
  const shape = new THREE.Shape();
  shape.moveTo(points[0][0], points[0][1]);
  for (let index = 1; index < points.length; index += 1) {
    shape.lineTo(points[index][0], points[index][1]);
  }
  shape.closePath();

  const geometry = new THREE.ExtrudeGeometry(shape, {
    depth,
    steps: 1,
    bevelEnabled: true,
    bevelSegments: 5,
    bevelSize: bevel,
    bevelThickness: Math.min(bevel, depth * 0.34),
    curveSegments: 12,
  });
  geometry.center();
  geometry.computeVertexNormals();
  return geometry;
}

function addBand(parent, radius, tube, material, position, rotation, name, arc = Math.PI * 2) {
  return mesh(
    parent,
    new THREE.TorusGeometry(radius, tube, 12, 56, arc),
    material,
    position,
    [1, 1, 1],
    rotation,
    name,
  );
}

/**
 * Original Sentinel concept rig. Front is local -Z.
 *
 * The silhouette is deliberately asymmetric: a high shield-side collar and broad
 * integrated aegis oppose a compact right gauntlet, while the reactor spine gives
 * the elevated rear/gameplay views their own unmistakable read.
 */
export function buildSentinelPrototype() {
  const { root, model, shadow } = createCharacterRoot('sentinel');
  shadow.scale.set(1.16, 1.16, 1.16);

  const armorBlue = satin(0x287bbd, { roughness: 0.31, metalness: 0.22 });
  const armorLight = glossy(0x9ce7ed, { roughness: 0.2, metalness: 0.13 });
  const armorDeep = satin(0x153f70, { roughness: 0.38, metalness: 0.24 });
  const underSuit = toon(0x18223c);
  const jointDark = glossy(0x131b2c, { roughness: 0.32, metalness: 0.32 });
  const ivory = satin(0xf2ead7, { roughness: 0.42, metalness: 0.04 });
  const warmMetal = glossy(0xf1b958, { roughness: 0.24, metalness: 0.42 });
  const visor = glossy(0x132d4c, { roughness: 0.11, metalness: 0.16 });
  const eyeGlow = glow(0x7dffff);
  const coreGlow = glow(0x54e8ff);
  const shieldFieldMaterial = glow(0x5beeff, 0.01);
  shieldFieldMaterial.depthWrite = false;

  const sphere32 = new THREE.SphereGeometry(1, 32, 22);
  const sphere24 = new THREE.SphereGeometry(1, 24, 18);
  const jointGeometry = new THREE.SphereGeometry(0.145, 24, 18);
  const upperLimbGeometry = capsule(0.13, 0.25, 24);
  const shinGeometry = capsule(0.14, 0.27, 24);
  const upperArmGeometry = capsule(0.125, 0.23, 24);
  const forearmGeometry = capsule(0.14, 0.26, 24);
  const smallBoltGeometry = new THREE.CylinderGeometry(0.04, 0.04, 0.035, 20);

  const body = pivot(model, 'sentinel:body', [0, 1.02, 0]);

  // A compact bell-shaped chassis: broad enough to feel protective, short enough
  // that the planted limbs stay readable from WHOMP's elevated gameplay camera.
  mesh(
    body,
    capsule(0.43, 0.36, 36),
    armorDeep,
    [0, 0.27, 0.025],
    [1.08, 1.02, 0.72],
    [0, 0, 0],
    'sentinel:torso-shell',
  );
  mesh(
    body,
    roundedBox(0.72, 0.54, 0.16, 0.14, 6),
    armorBlue,
    [0, 0.29, -0.285],
    [1, 1, 1],
    [0, 0, 0],
    'sentinel:breastplate',
  );
  mesh(
    body,
    beveledPlate([
      [-0.24, 0.17],
      [-0.31, -0.08],
      [-0.15, -0.24],
      [0.15, -0.24],
      [0.31, -0.08],
      [0.24, 0.17],
    ], 0.07, 0.022),
    ivory,
    [0, 0.29, -0.395],
    [1, 1, 1],
    [0, 0, 0],
    'sentinel:chest-keystone',
  );
  const chestCore = mesh(
    body,
    new THREE.OctahedronGeometry(0.105, 2),
    coreGlow,
    [0, 0.3, -0.448],
    [0.72, 1, 0.34],
    [0, 0, Math.PI / 4],
    'sentinel:chest-core',
  );
  chestCore.castShadow = false;

  const waist = pivot(body, 'sentinel:waist', [0, -0.1, 0.02]);
  mesh(waist, new THREE.CylinderGeometry(0.34, 0.4, 0.24, 36), underSuit, [0, 0, 0], [1, 1, 0.82], [0, 0, 0], 'sentinel:waist-seal');
  addBand(waist, 0.365, 0.045, warmMetal, [0, 0.07, 0], [Math.PI / 2, 0, 0], 'sentinel:waist-band');
  mesh(
    waist,
    roundedBox(0.7, 0.24, 0.48, 0.1, 5),
    armorBlue,
    [0, -0.12, 0.015],
    [1, 1, 1],
    [0, 0, 0],
    'sentinel:hip-guard',
  );

  // The collar is deliberately offset toward the shield shoulder. Its pieces overlap
  // the torso and neck instead of hovering, preserving a single assembled silhouette.
  mesh(
    body,
    roundedBox(0.56, 0.22, 0.4, 0.1, 5),
    armorLight,
    [-0.12, 0.67, 0.03],
    [1, 1, 1],
    [0, 0.08, -0.05],
    'sentinel:offset-collar-base',
  );
  mesh(
    body,
    beveledPlate([
      [-0.2, -0.24],
      [-0.19, 0.18],
      [-0.05, 0.31],
      [0.15, 0.14],
      [0.2, -0.2],
    ], 0.16, 0.028),
    armorBlue,
    [-0.31, 0.79, 0.11],
    [1, 1, 1],
    [0.04, -0.08, -0.1],
    'sentinel:high-aegis-collar',
  );
  mesh(
    body,
    roundedBox(0.25, 0.3, 0.2, 0.08, 5),
    armorDeep,
    [0.26, 0.73, 0.08],
    [1, 1, 1],
    [0.02, -0.08, 0.07],
    'sentinel:low-collar',
  );

  const head = pivot(body, 'sentinel:head', [0.045, 0.87, -0.035]);
  mesh(head, capsule(0.12, 0.08, 24), jointDark, [0, -0.11, 0.02], [1, 1, 1], [0, 0, 0], 'sentinel:neck');
  mesh(
    head,
    sphere32,
    ivory,
    [0, 0.15, 0],
    [0.34, 0.32, 0.3],
    [0, 0, 0],
    'sentinel:helmet-shell',
  );
  mesh(
    head,
    sphere32,
    visor,
    [0, 0.13, -0.264],
    [0.255, 0.19, 0.055],
    [0, 0, 0],
    'sentinel:flush-visor',
  );
  mesh(
    head,
    roundedBox(0.31, 0.105, 0.1, 0.045, 5),
    armorBlue,
    [-0.035, 0.325, -0.08],
    [1, 1, 1],
    [-0.08, 0, -0.07],
    'sentinel:helmet-brow',
  );
  mesh(
    head,
    roundedBox(0.11, 0.052, 0.026, 0.022, 5),
    eyeGlow,
    [-0.095, 0.165, -0.321],
    [1, 1, 1],
    [0, 0, -0.12],
    'sentinel:left-eye',
  ).castShadow = false;
  mesh(
    head,
    roundedBox(0.11, 0.052, 0.026, 0.022, 5),
    eyeGlow,
    [0.095, 0.165, -0.321],
    [1, 1, 1],
    [0, 0, 0.12],
    'sentinel:right-eye',
  ).castShadow = false;
  mesh(
    head,
    roundedBox(0.08, 0.025, 0.02, 0.01, 4),
    warmMetal,
    [0, 0.06, -0.323],
    [1, 1, 1],
    [0, 0, 0],
    'sentinel:calm-mouth-light',
  ).castShadow = false;
  mesh(head, sphere24, armorDeep, [-0.31, 0.17, 0.015], [0.07, 0.16, 0.19], [0, 0, 0], 'sentinel:left-temple-cap');
  mesh(head, sphere24, armorBlue, [0.31, 0.17, 0.015], [0.065, 0.13, 0.17], [0, 0, 0], 'sentinel:right-temple-cap');

  // Rear reactor spine: connected to the chassis, visually useful from the default
  // elevated rear camera, and unlike any front-facing shield ornament.
  const reactor = pivot(body, 'sentinel:reactor', [0.09, 0.32, 0.335]);
  mesh(reactor, roundedBox(0.42, 0.62, 0.17, 0.11, 6), armorDeep, [0, 0, 0], [1, 1, 1], [0, 0, 0], 'sentinel:reactor-backplate');
  mesh(reactor, new THREE.CylinderGeometry(0.18, 0.18, 0.095, 36), armorLight, [0, 0.05, 0.12], [1, 1, 1], [Math.PI / 2, 0, 0], 'sentinel:reactor-halo');
  const rearCore = mesh(reactor, new THREE.CylinderGeometry(0.115, 0.115, 0.11, 32), coreGlow, [0, 0.05, 0.175], [1, 1, 1], [Math.PI / 2, 0, 0], 'sentinel:rear-core');
  rearCore.castShadow = false;
  mesh(
    reactor,
    beveledPlate([[-0.12, -0.17], [-0.08, 0.18], [0, 0.34], [0.08, 0.18], [0.12, -0.17]], 0.1, 0.018),
    warmMetal,
    [0, 0.31, 0.08],
    [0.82, 0.82, 0.82],
    [0, 0, 0],
    'sentinel:reactor-fin',
  );
  addBand(reactor, 0.235, 0.025, warmMetal, [0, 0.05, 0.185], [0, 0, 0], 'sentinel:reactor-ring');

  const pelvis = pivot(model, 'sentinel:pelvis', [0, 1.05, 0.02]);
  mesh(pelvis, roundedBox(0.66, 0.28, 0.45, 0.1, 5), armorDeep, [0, 0, 0], [1, 1, 1], [0, 0, 0], 'sentinel:pelvis-shell');

  function buildLeg(side, name) {
    const hip = pivot(pelvis, `sentinel:${name}-leg`, [side * 0.245, -0.055, 0]);
    hip.userData.baseY = hip.position.y;
    mesh(hip, jointGeometry, jointDark, [0, -0.01, 0], [1, 1, 1], [0, 0, 0], `sentinel:${name}-hip-joint`);
    mesh(hip, upperLimbGeometry, underSuit, [0, -0.245, 0], [1, 1, 1], [0, 0, 0], `sentinel:${name}-upper-leg`);
    mesh(
      hip,
      roundedBox(0.3, 0.32, 0.32, 0.095, 5),
      armorBlue,
      [0, -0.23, -0.01],
      [1, 1, 1],
      [0.03, 0, side * -0.035],
      `sentinel:${name}-thigh-guard`,
    );
    const shin = pivot(hip, `sentinel:${name}-shin`, [0, -0.47, 0.005]);
    mesh(shin, jointGeometry, jointDark, [0, 0, 0], [0.9, 0.9, 0.9], [0, 0, 0], `sentinel:${name}-knee`);
    mesh(shin, shinGeometry, armorLight, [0, -0.24, 0], [1.03, 1, 0.95], [0, 0, 0], `sentinel:${name}-greave`);
    const foot = pivot(shin, `sentinel:${name}-foot`, [0, -0.46, -0.065]);
    mesh(
      foot,
      roundedBox(0.34, 0.2, 0.48, 0.1, 6),
      armorDeep,
      [0, -0.015, -0.075],
      [1, 1, 1],
      [0.015, 0, side * 0.025],
      `sentinel:${name}-boot`,
    );
    mesh(
      foot,
      roundedBox(0.25, 0.07, 0.25, 0.03, 4),
      warmMetal,
      [0, -0.095, -0.155],
      [1, 1, 1],
      [0, 0, 0],
      `sentinel:${name}-boot-sole`,
    );
    return { hip, shin, foot };
  }

  const leftLeg = buildLeg(-1, 'left');
  const rightLeg = buildLeg(1, 'right');

  function buildArm(side, name, shieldSide) {
    const shoulder = pivot(body, `sentinel:${name}-arm`, [side * 0.5, 0.52, 0.015]);
    mesh(shoulder, jointGeometry, jointDark, [0, 0, 0], [1, 1, 1], [0, 0, 0], `sentinel:${name}-shoulder-joint`);
    mesh(shoulder, upperArmGeometry, underSuit, [0, -0.22, 0], [1, 1, 1], [0, 0, 0], `sentinel:${name}-upper-arm`);
    mesh(
      shoulder,
      sphere24,
      shieldSide ? armorLight : armorBlue,
      [side * 0.03, -0.035, 0],
      shieldSide ? [0.27, 0.22, 0.3] : [0.23, 0.19, 0.26],
      [0, 0, 0],
      `sentinel:${name}-pauldron`,
    );
    if (shieldSide) {
      mesh(
        shoulder,
        beveledPlate([[-0.2, -0.2], [-0.18, 0.16], [0, 0.25], [0.2, 0.12], [0.18, -0.2]], 0.16, 0.025),
        armorBlue,
        [side * 0.08, 0.02, 0.04],
        [1, 1, 1],
        [0.04, side * 0.08, side * 0.13],
        `sentinel:${name}-aegis-pauldron`,
      );
    }

    const forearm = pivot(shoulder, `sentinel:${name}-forearm`, [0, -0.43, 0]);
    mesh(forearm, jointGeometry, jointDark, [0, 0, 0], [0.88, 0.88, 0.88], [0, 0, 0], `sentinel:${name}-elbow`);
    mesh(forearm, forearmGeometry, shieldSide ? armorDeep : armorBlue, [0, -0.24, 0], [1.05, 1, 1], [0, 0, 0], `sentinel:${name}-forearm-shell`);
    const hand = pivot(forearm, `sentinel:${name}-hand`, [0, -0.48, -0.015]);
    mesh(hand, sphere24, jointDark, [0, 0, 0], [0.14, 0.16, 0.14], [0, 0, 0], `sentinel:${name}-hand-core`);
    mesh(hand, roundedBox(0.25, 0.19, 0.24, 0.07, 5), ivory, [0, -0.025, -0.035], [1, 1, 1], [0, 0, 0], `sentinel:${name}-gauntlet`);
    return { shoulder, forearm, hand };
  }

  const leftArm = buildArm(-1, 'left', true);
  const rightArm = buildArm(1, 'right', false);

  const shieldMount = pivot(leftArm.forearm, 'sentinel:shield-mount', [-0.035, -0.24, -0.145]);
  const shieldPoints = [
    [-0.38, 0.39],
    [-0.19, 0.53],
    [0.25, 0.46],
    [0.4, 0.2],
    [0.32, -0.33],
    [0, -0.55],
    [-0.31, -0.31],
  ];
  mesh(
    shieldMount,
    beveledPlate(shieldPoints, 0.13, 0.04),
    armorDeep,
    [0, 0, 0],
    [1, 1, 1],
    [0, 0, 0],
    'sentinel:integrated-shield-back',
  );
  mesh(
    shieldMount,
    beveledPlate(shieldPoints, 0.075, 0.03),
    armorLight,
    [0, 0, -0.09],
    [0.87, 0.87, 0.87],
    [0, 0, 0],
    'sentinel:integrated-shield-face',
  );
  mesh(
    shieldMount,
    beveledPlate([[-0.13, 0.22], [0.1, 0.27], [0.19, 0.03], [0, -0.27], [-0.18, -0.04]], 0.05, 0.018),
    warmMetal,
    [-0.01, 0, -0.145],
    [1, 1, 1],
    [0, 0, 0],
    'sentinel:shield-keystone',
  );
  mesh(
    shieldMount,
    beveledPlate(shieldPoints, 0.025, 0.025),
    shieldFieldMaterial,
    [0, 0, -0.19],
    [1.09, 1.09, 1.09],
    [0, 0, 0],
    'sentinel:shield-field',
  ).castShadow = false;
  for (const [x, y] of [[-0.24, 0.24], [0.24, 0.2], [-0.18, -0.27], [0.17, -0.29]]) {
    mesh(
      shieldMount,
      smallBoltGeometry,
      warmMetal,
      [x, y, -0.166],
      [1, 1, 1],
      [Math.PI / 2, 0, 0],
      'sentinel:shield-rivet',
    );
  }

  // Compact right-side counterweight keeps the profile/rear views balanced without
  // erasing the shield-first asymmetry.
  mesh(
    rightArm.forearm,
    roundedBox(0.32, 0.36, 0.3, 0.1, 5),
    armorLight,
    [0, -0.25, -0.015],
    [1, 1, 1],
    [0, 0, 0],
    'sentinel:right-bracer',
  );
  mesh(
    rightArm.forearm,
    new THREE.CylinderGeometry(0.075, 0.075, 0.08, 24),
    coreGlow,
    [0, -0.24, -0.185],
    [1, 1, 1],
    [Math.PI / 2, 0, 0],
    'sentinel:right-bracer-light',
  ).castShadow = false;

  const base = {
    bodyY: body.position.y,
    headY: head.position.y,
    leftHipY: leftLeg.hip.position.y,
    rightHipY: rightLeg.hip.position.y,
    shadowX: shadow.scale.x,
    shadowY: shadow.scale.y,
    shadowZ: shadow.scale.z,
  };

  function animate(time, mode) {
    const isWalk = mode === 'walk' ? 1 : 0;
    const isAbility = mode === 'ability' ? 1 : 0;
    const stride = Math.sin(time * 6.35);
    const step = Math.abs(Math.sin(time * 6.35));
    const leftLift = Math.max(0, stride);
    const rightLift = Math.max(0, -stride);
    const idleBreath = Math.sin(time * 1.7);
    const headScan = Math.sin(time * 0.76);
    const bracePulse = 0.5 + 0.5 * Math.sin(time * 3.2);
    const reactorPulse = 0.5 + 0.5 * Math.sin(time * 2.35 + 0.6);

    // Reset and recompose every pose so switching preview modes never leaves stale
    // rotations behind. The animation loop creates no vectors, arrays, or materials.
    model.position.y = 0.12;
    model.rotation.set(0, 0, 0);
    body.position.y = base.bodyY + idleBreath * 0.012 + isWalk * (0.018 + step * 0.028) - isAbility * 0.055;
    body.rotation.set(
      isAbility * (-0.105 - bracePulse * 0.015),
      isWalk * stride * 0.018,
      isWalk * stride * 0.032 + isAbility * -0.018,
    );

    head.position.y = base.headY + idleBreath * 0.006;
    head.rotation.set(
      -idleBreath * 0.015 + isAbility * -0.07,
      headScan * 0.07 * (1 - isAbility) + isAbility * 0.08,
      -isWalk * stride * 0.018,
    );

    leftLeg.hip.position.y = base.leftHipY + isWalk * leftLift * 0.035;
    rightLeg.hip.position.y = base.rightHipY + isWalk * rightLift * 0.035;
    leftLeg.hip.rotation.set(-isWalk * stride * 0.43 + isAbility * 0.12, 0, isAbility * -0.115);
    rightLeg.hip.rotation.set(isWalk * stride * 0.43 + isAbility * 0.18, 0, isAbility * 0.115);
    leftLeg.shin.rotation.set(-0.035 - isWalk * leftLift * 0.62 + isAbility * 0.28, 0, 0);
    rightLeg.shin.rotation.set(-0.035 - isWalk * rightLift * 0.62 + isAbility * 0.28, 0, 0);
    leftLeg.foot.rotation.set(isWalk * leftLift * 0.43 - isAbility * 0.16, 0, 0);
    rightLeg.foot.rotation.set(isWalk * rightLift * 0.43 - isAbility * 0.16, 0, 0);

    leftArm.shoulder.rotation.set(
      -isWalk * stride * 0.2 + isAbility * 0.48,
      isAbility * -0.08,
      isAbility * 0.54,
    );
    leftArm.forearm.rotation.set(
      -0.16 - isWalk * Math.max(0, -stride) * 0.16 + isAbility * -0.42,
      isAbility * 0.05,
      isAbility * -0.2,
    );
    leftArm.hand.rotation.set(isAbility * 0.1, 0, 0);
    shieldMount.rotation.set(
      0.04 - isAbility * 0.15,
      -0.03 + isAbility * -0.06,
      -0.04 + isWalk * stride * 0.018 + isAbility * -0.08,
    );

    rightArm.shoulder.rotation.set(
      isWalk * stride * 0.42 + isAbility * 0.38,
      isAbility * 0.06,
      isAbility * -0.58,
    );
    rightArm.forearm.rotation.set(
      -0.16 - isWalk * Math.max(0, stride) * 0.25 + isAbility * -0.58,
      isAbility * -0.08,
      isAbility * 0.2,
    );
    rightArm.hand.rotation.set(isAbility * -0.12, 0, isAbility * 0.08);

    const shieldEnergy = isAbility * (0.24 + bracePulse * 0.3);
    shieldFieldMaterial.opacity = Math.max(0.01, shieldEnergy);
    shieldMount.scale.setScalar(1 + isAbility * bracePulse * 0.025);

    rearCore.scale.setScalar(0.94 + reactorPulse * 0.1 + isAbility * bracePulse * 0.12);
    chestCore.scale.set(0.72 + bracePulse * isAbility * 0.08, 1 + bracePulse * isAbility * 0.08, 0.34);

    const shadowSquash = 1 - isWalk * step * 0.045 + isAbility * 0.06;
    shadow.scale.set(base.shadowX * shadowSquash, base.shadowY * shadowSquash, base.shadowZ * shadowSquash);
  }

  animate(0, 'idle');
  return { root, animate };
}
