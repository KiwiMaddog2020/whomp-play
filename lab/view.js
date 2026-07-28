/* THE WHOMP LAB — the pan/zoom camera, and nothing else.
 *
 * Pure arithmetic over world metres and CSS pixels. No DOM, no canvas, no map
 * knowledge, so lab/selftest.mjs can import this straight into node and hold the
 * world -> screen -> world round trip to identity.
 *
 * NORTH IS UP AND STAYS UP. The world is +x east / +z south (see hubmap.json's
 * `convention`), and screen y grows downward, so the mapping is a pure scale with
 * no flip: world +z is screen down is SOUTH. A rotate control would be the first
 * thing to break every "the barn is north-west of the green" note in the tape,
 * so there isn't one.
 *
 * THIS FILE IS BOTH a classic script (it is loaded by a plain <script src> tag so
 * the lab opens over file://) and a valid ES module (no import/export statements,
 * so node can import it and read the namespace off globalThis). See lab/README.md.
 */
(function (root) {
  'use strict';
  const NS = (root.WhompLab = root.WhompLab || {});

  const MIN_SCALE = 0.35;   // px per metre — the whole 232 m island in a laptop pane
  const MAX_SCALE = 40;     // px per metre — a doorway fills the pane

  const clamp = (v, lo, hi) => (v < lo ? lo : v > hi ? hi : v);

  /** A camera over the world plane.
   *  `cx, cz` is the world point at the centre of the viewport;
   *  `scale` is CSS pixels per world metre. */
  function createView(opts) {
    const o = opts || {};
    const view = {
      width: o.width || 800,
      height: o.height || 600,
      cx: o.cx || 0,
      cz: o.cz || 0,
      scale: clamp(o.scale || 3, MIN_SCALE, MAX_SCALE),
    };

    view.resize = function (width, height) {
      view.width = width;
      view.height = height;
      return view;
    };

    view.toScreen = function (x, z, out) {
      const p = out || { px: 0, py: 0 };
      p.px = view.width * 0.5 + (x - view.cx) * view.scale;
      p.py = view.height * 0.5 + (z - view.cz) * view.scale;
      return p;
    };

    view.toWorld = function (px, py, out) {
      const p = out || { x: 0, z: 0 };
      p.x = view.cx + (px - view.width * 0.5) / view.scale;
      p.z = view.cz + (py - view.height * 0.5) / view.scale;
      return p;
    };

    /** Metres per pixel — the currency every hit-test tolerance is quoted in. */
    view.metresPerPixel = function () {
      return 1 / view.scale;
    };

    view.panByPixels = function (dxPx, dyPx) {
      view.cx -= dxPx / view.scale;
      view.cz -= dyPx / view.scale;
      return view;
    };

    /** Zoom ANCHORED ON THE CURSOR: the world point under (px, py) does not move.
     *  Anything else makes a wheel feel like it is fighting you. */
    view.zoomAt = function (px, py, factor) {
      const before = view.toWorld(px, py);
      view.scale = clamp(view.scale * factor, MIN_SCALE, MAX_SCALE);
      const after = view.toWorld(px, py);
      view.cx += before.x - after.x;
      view.cz += before.z - after.z;
      return view;
    };

    /** Frame a world AABB with `pad` pixels of margin on every side.
     *
     *  THE MAX() ON THE AVAILABLE SPACE IS LOAD-BEARING. Called before the pane
     *  has been laid out, `width - pad*2` is zero or negative, which makes the
     *  computed scale zero or negative, which the clamp turns into MIN_SCALE —
     *  and the lab opens showing the whole island as a 30-pixel smudge. Seen on
     *  the very first boot of this file. The caller is also expected not to fit
     *  until it has a real viewport (map.js only fits once its stage measures
     *  above 50 px), but a camera should not be able to produce a nonsense
     *  scale on its own regardless of who called it. */
    view.fit = function (bounds, pad) {
      const m = pad === undefined ? 24 : pad;
      const w = Math.max(1e-6, bounds.maxX - bounds.minX);
      const h = Math.max(1e-6, bounds.maxZ - bounds.minZ);
      view.cx = (bounds.minX + bounds.maxX) * 0.5;
      view.cz = (bounds.minZ + bounds.maxZ) * 0.5;
      view.scale = clamp(
        Math.min(Math.max(1, view.width - m * 2) / w, Math.max(1, view.height - m * 2) / h),
        MIN_SCALE, MAX_SCALE,
      );
      return view;
    };

    /** Centre on a world point without changing zoom. */
    view.centerOn = function (x, z) {
      view.cx = x;
      view.cz = z;
      return view;
    };

    return view;
  }

  /** THE GRID STEP LADDER. A grid is only useful if the reader can name the
   *  spacing without measuring it, so the step is always 1/2/5 x 10^n metres and
   *  never anything else. Picked so lines land 60-150 px apart at any zoom. */
  const GRID_STEPS = [1, 2, 5, 10, 20, 50, 100];

  function gridStepM(scale, targetPx) {
    const target = targetPx || 90;
    for (let i = 0; i < GRID_STEPS.length; i++) {
      if (GRID_STEPS[i] * scale >= target) return GRID_STEPS[i];
    }
    return GRID_STEPS[GRID_STEPS.length - 1];
  }

  NS.view = { createView, gridStepM, MIN_SCALE, MAX_SCALE, GRID_STEPS };
})(globalThis);
