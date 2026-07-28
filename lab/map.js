/* THE WHOMP LAB — THE MAP PANE.
 *
 * Draws lab/data/hubmap.json, which is DERIVED from the game's own placement
 * modules by tests/hubMapExport.test.ts. Nothing in this file authors a
 * position; if a shape is in the wrong place on screen it is either a bug here
 * or the island really is like that, and the second one is the whole point.
 *
 * Everything annotation-shaped (marks, the tape, the send) belongs to
 * lab/annotate.js and is only wired in from here.
 *
 * Classic script AND valid ES module (no import/export) — see lab/README.md.
 */
(function (root) {
  'use strict';
  const NS = (root.WhompLab = root.WhompLab || {});

  // ── PALETTE ────────────────────────────────────────────────────────────────
  // Sampled from the game: hub.ts's HUB_PALETTE is bg 0x241a48 (deep violet,
  // which doubles as its fog) with gem 0x2fe0ff (kit cyan) as the accent on
  // every portal, plinth and compass. The lab reads as the hub at night, one
  // step darker so white text sits comfortably on it.
  const C = {
    bg: '#150f2c',
    grid: 'rgba(143,127,214,0.10)',
    gridMajor: 'rgba(143,127,214,0.22)',
    cyan: '#2fe0ff',
    violet: '#8f7fd6',
    district: 'rgba(143,127,214,0.55)',
    districtFill: 'rgba(76,63,104,0.16)',
    village: '#57a24c',
    villageFaint: 'rgba(87,162,76,0.35)',
    claimCommons: 'rgba(143,214,160,0.30)',
    claimParcel: 'rgba(230,200,120,0.30)',
    claimWorked: 'rgba(160,120,80,0.38)',
    path: '#d8c9a0',
    portal: '#2fe0ff',
    gate: '#ff7a3c',
    statue: '#ffcf3f',
    landmark: '#ff6fd8',
    text: '#e9e4ff',
    dim: 'rgba(233,228,255,0.45)',
    hover: '#ffffff',
    select: '#2fe0ff',
  };

  const LAYERS = [
    { id: 'districts', label: 'districts', key: '1' },
    { id: 'village', label: 'village', key: '2' },
    { id: 'paths', label: 'paths', key: '3' },
    { id: 'portals', label: 'portals + gates', key: '4', also: ['gates'] },
    { id: 'statues', label: 'statues', key: '5' },
    { id: 'landmarks', label: 'landmarks', key: '6' },
    { id: 'labels', label: 'labels', key: '7', virtual: true },
  ];

  const colorFor = (el) => {
    if (el.layer === 'districts') return C.district;
    if (el.layer === 'portals') return C.portal;
    if (el.layer === 'gates') return C.gate;
    if (el.layer === 'statues') return C.statue;
    if (el.layer === 'landmarks') return C.landmark;
    if (el.layer === 'paths') return C.path;
    if (el.kind === 'claim-commons') return C.claimCommons;
    if (el.kind === 'claim-parcel') return C.claimParcel;
    if (el.kind === 'claim-worked') return C.claimWorked;
    return C.village;
  };

  // ── GEOMETRY (picking + drawing share these) ───────────────────────────────

  /** A rect's four world corners, honouring its yaw. */
  function rectCorners(el) {
    const c = Math.cos(el.yaw || 0), s = Math.sin(el.yaw || 0);
    const hx = (el.w || 0) * 0.5, hz = (el.h || 0) * 0.5;
    // THREE's rotateY sends local +X to (cos, -sin) and local +Z to (sin, cos).
    const ax = { x: c, z: -s }, az = { x: s, z: c };
    const signs = [[-1, -1], [1, -1], [1, 1], [-1, 1]];
    return signs.map((g) => ({
      x: el.x + ax.x * hx * g[0] + az.x * hz * g[1],
      z: el.z + ax.z * hx * g[0] + az.z * hz * g[1],
    }));
  }

  function pointInRect(el, x, z) {
    const c = Math.cos(el.yaw || 0), s = Math.sin(el.yaw || 0);
    const dx = x - el.x, dz = z - el.z;
    // Inverse rotation: project onto the rect's own axes.
    const lx = dx * c - dz * s;
    const lz = dx * s + dz * c;
    return Math.abs(lx) <= (el.w || 0) * 0.5 && Math.abs(lz) <= (el.h || 0) * 0.5;
  }

  function distanceToPolyline(el, x, z) {
    const pts = el.pts || [];
    const n = el.closed ? pts.length : pts.length - 1;
    let best = Infinity;
    for (let i = 0; i < n; i++) {
      const a = pts[i], b = pts[(i + 1) % pts.length];
      const dx = b[0] - a[0], dz = b[1] - a[1];
      const len2 = dx * dx + dz * dz;
      let t = len2 === 0 ? 0 : ((x - a[0]) * dx + (z - a[1]) * dz) / len2;
      t = t < 0 ? 0 : t > 1 ? 1 : t;
      const d = Math.hypot(x - (a[0] + dx * t), z - (a[1] + dz * t));
      if (d < best) best = d;
    }
    return best;
  }

  /** Rough plan area, in m2. THE PICK ORDER IS SMALLEST-FIRST, which is the only
   *  order that works: every portal, statue and house stands inside a district,
   *  so a first-hit-wins pick would only ever return "district:hearth". */
  function areaOf(el) {
    if (el.shape === 'circle') return Math.PI * el.r * el.r - (el.rIn ? Math.PI * el.rIn * el.rIn : 0);
    if (el.shape === 'rect') return (el.w || 0) * (el.h || 0);
    if (el.shape === 'polyline') return 4 + (el.pts ? el.pts.length : 0);
    return 1;
  }

  function hitElement(el, x, z, tolM) {
    switch (el.shape) {
      case 'point':
        return Math.hypot(x - el.x, z - el.z) <= tolM * 2;
      case 'circle': {
        const d = Math.hypot(x - el.x, z - el.z);
        if (el.rIn !== undefined) {
          // A band is hit on the band, not in the hole it surrounds.
          return d <= el.r + tolM && d >= el.rIn - tolM;
        }
        return d <= el.r + tolM;
      }
      case 'rect':
        return pointInRect(el, x, z) || pointInRect({ ...el, w: el.w + tolM * 2, h: el.h + tolM * 2 }, x, z);
      case 'polyline': {
        const half = el.meta && el.meta.halfWidth ? el.meta.halfWidth : 0;
        return distanceToPolyline(el, x, z) <= Math.max(half, tolM);
      }
      default:
        return false;
    }
  }

  // ── THE PANE ───────────────────────────────────────────────────────────────

  function createMapPane(host, deps) {
    const map = (root.__WHOMP_HUBMAP__ || (deps && deps.hubmap));
    if (!map) throw new Error('lab/map.js: hubmap data not loaded (expected data/hubmap.js before map.js)');

    host.innerHTML = ''
      + '<div class="pane-map">'
      + '  <div class="map-stage"><canvas id="map-canvas"></canvas>'
      + '    <div class="map-hud" id="map-hud"></div>'
      + '    <div class="map-scale" id="map-scale"></div>'
      + '  </div>'
      + '  <aside class="side">'
      + '    <section class="side-block" id="side-selection"></section>'
      + '    <section class="side-block" id="side-note"></section>'
      + '    <section class="side-block side-grow"><h3>the tape</h3><ol class="tape" id="tape"></ol></section>'
      + '    <section class="side-block" id="side-status"></section>'
      + '  </aside>'
      + '</div>';

    const canvas = host.querySelector('#map-canvas');
    const stage = host.querySelector('.map-stage');
    const ctx = canvas.getContext('2d');
    const view = NS.view.createView({ width: 900, height: 600, scale: 3 });

    const layerOn = {};
    for (const l of LAYERS) layerOn[l.id] = true;

    const pane = {
      id: 'map',
      view,
      elements: map.elements,
      hovered: null,
      selected: null,
      buildSha: 'dev',
    };

    // Elements sorted smallest-first once, so picking is a single linear scan.
    const pickOrder = map.elements.slice().sort((a, b) => areaOf(a) - areaOf(b));
    const byId = new Map(map.elements.map((e) => [e.id, e]));

    function layerVisible(layer) {
      if (layer === 'gates') return layerOn.portals;
      return layerOn[layer] !== false;
    }

    function pick(x, z) {
      const tol = view.metresPerPixel() * 5;
      for (const el of pickOrder) {
        if (!layerVisible(el.layer)) continue;
        if (hitElement(el, x, z, tol)) return el;
      }
      return null;
    }

    const annot = NS.annotate.createAnnotator({
      paneId: 'map',
      getScale: () => view.metresPerPixel(),
      hitTest: (x, z) => {
        const el = pick(x, z);
        return el ? el.id : null;
      },
      getScreenshot: () => canvas.toDataURL('image/jpeg', 0.85),
      onChange: () => scheduleRender(),
    });
    pane.annot = annot;

    // ── RENDER ───────────────────────────────────────────────────────────────

    let pendingFrame = 0;
    function scheduleRender() {
      if (pendingFrame) return;
      pendingFrame = requestAnimationFrame(() => {
        pendingFrame = 0;
        render();
      });
    }

    /** The first fit has to wait for a REAL viewport. A stylesheet that has not
     *  applied yet, or a pane mounted into a zero-height host, gives clientWidth
     *  0 — and fitting against that pins the camera at its minimum zoom and
     *  opens the lab on a 30-pixel smudge of an island. So the auto-fit is armed
     *  once and fires on the first measurement worth trusting. */
    let fitted = false;

    function resize() {
      const dpr = Math.min(root.devicePixelRatio || 1, 2);
      const w = stage.clientWidth, h = stage.clientHeight;
      canvas.width = Math.max(1, Math.round(w * dpr));
      canvas.height = Math.max(1, Math.round(h * dpr));
      canvas.style.width = w + 'px';
      canvas.style.height = h + 'px';
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      view.resize(w, h);
      if (!fitted && w > 50 && h > 50) {
        view.fit(map.bounds, 30);
        fitted = true;
      }
      scheduleRender();
    }

    function drawGrid() {
      const step = NS.view.gridStepM(view.scale);
      const tl = view.toWorld(0, 0);
      const br = view.toWorld(view.width, view.height);
      ctx.lineWidth = 1;
      for (let x = Math.ceil(tl.x / step) * step; x <= br.x; x += step) {
        const p = view.toScreen(x, 0);
        ctx.strokeStyle = x % (step * 5) === 0 ? C.gridMajor : C.grid;
        ctx.beginPath();
        ctx.moveTo(Math.round(p.px) + 0.5, 0);
        ctx.lineTo(Math.round(p.px) + 0.5, view.height);
        ctx.stroke();
      }
      for (let z = Math.ceil(tl.z / step) * step; z <= br.z; z += step) {
        const p = view.toScreen(0, z);
        ctx.strokeStyle = z % (step * 5) === 0 ? C.gridMajor : C.grid;
        ctx.beginPath();
        ctx.moveTo(0, Math.round(p.py) + 0.5);
        ctx.lineTo(view.width, Math.round(p.py) + 0.5);
        ctx.stroke();
      }
      // The world origin: hub spawn, the point every district table hangs off.
      const o = view.toScreen(0, 0);
      ctx.strokeStyle = 'rgba(47,224,255,0.35)';
      ctx.beginPath();
      ctx.moveTo(o.px - 9, o.py); ctx.lineTo(o.px + 9, o.py);
      ctx.moveTo(o.px, o.py - 9); ctx.lineTo(o.px, o.py + 9);
      ctx.stroke();
      host.querySelector('#map-scale').textContent =
        step + ' m grid · ' + view.scale.toFixed(2) + ' px/m';
    }

    function traceShape(el) {
      ctx.beginPath();
      if (el.shape === 'circle') {
        const c = view.toScreen(el.x, el.z);
        ctx.arc(c.px, c.py, Math.max(1, el.r * view.scale), 0, Math.PI * 2);
        if (el.rIn !== undefined) {
          ctx.moveTo(c.px + el.rIn * view.scale, c.py);
          ctx.arc(c.px, c.py, Math.max(0.5, el.rIn * view.scale), 0, Math.PI * 2, true);
        }
      } else if (el.shape === 'rect') {
        const cs = rectCorners(el);
        for (let i = 0; i < cs.length; i++) {
          const p = view.toScreen(cs[i].x, cs[i].z);
          if (i === 0) ctx.moveTo(p.px, p.py); else ctx.lineTo(p.px, p.py);
        }
        ctx.closePath();
      } else if (el.shape === 'polyline') {
        const pts = el.pts || [];
        for (let i = 0; i < pts.length; i++) {
          const p = view.toScreen(pts[i][0], pts[i][1]);
          if (i === 0) ctx.moveTo(p.px, p.py); else ctx.lineTo(p.px, p.py);
        }
        if (el.closed) ctx.closePath();
      } else {
        const p = view.toScreen(el.x, el.z);
        ctx.moveTo(p.px + 4, p.py);
        ctx.arc(p.px, p.py, 4, 0, Math.PI * 2);
      }
    }

    function drawElement(el) {
      const isHover = pane.hovered && pane.hovered.id === el.id;
      const isSel = pane.selected && pane.selected.id === el.id;
      const base = colorFor(el);
      ctx.save();
      if (el.layer === 'paths') {
        // A lane is drawn at its REAL width, so "the street is wider than the
        // gate" is something you can see rather than something you read.
        const half = (el.meta && el.meta.halfWidth) || 0.5;
        ctx.strokeStyle = isSel ? C.select : isHover ? C.hover : base;
        ctx.globalAlpha = isSel || isHover ? 0.95 : 0.5;
        ctx.lineWidth = Math.max(1, half * 2 * view.scale);
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';
        if (el.kind === 'path-spur') ctx.setLineDash([4, 5]);
        traceShape(el);
        ctx.stroke();
      } else if (el.shape === 'point') {
        const p = view.toScreen(el.x, el.z);
        ctx.fillStyle = isSel ? C.select : isHover ? C.hover : base;
        ctx.beginPath();
        ctx.arc(p.px, p.py, isSel || isHover ? 5 : 3, 0, Math.PI * 2);
        ctx.fill();
        if (el.yaw !== undefined) {
          // Facing tick: which way the arch, door or portal is turned.
          ctx.strokeStyle = ctx.fillStyle;
          ctx.lineWidth = 1.5;
          ctx.beginPath();
          ctx.moveTo(p.px, p.py);
          ctx.lineTo(p.px + Math.sin(el.yaw) * 12, p.py + Math.cos(el.yaw) * 12);
          ctx.stroke();
        }
      } else {
        const fill = el.layer === 'districts' ? C.districtFill
          : el.layer === 'village' && el.kind.startsWith('claim-') ? base
            : null;
        traceShape(el);
        if (fill) {
          ctx.globalAlpha = isHover || isSel ? 0.35 : 0.16;
          ctx.fillStyle = fill;
          ctx.fill('evenodd');
        }
        ctx.globalAlpha = isSel || isHover ? 1 : 0.75;
        ctx.strokeStyle = isSel ? C.select : isHover ? C.hover : base;
        ctx.lineWidth = isSel ? 2.5 : 1.25;
        if (el.layer === 'districts') ctx.setLineDash([6, 4]);
        ctx.stroke();
      }
      ctx.restore();
    }

    /** LABELS ARE PLACED, NOT SPRAYED. Anything smaller than 14 px on screen is
     *  unreadable at that zoom and would only make a thicket, so it is dropped;
     *  the rest claim a screen row so two labels never stack on each other. */
    function drawLabels(visible) {
      const rows = [];
      ctx.font = '500 11px ui-monospace, SFMono-Regular, Menlo, monospace';
      ctx.textBaseline = 'middle';
      const candidates = visible
        .filter((el) => el.label && el.layer !== 'paths')
        .sort((a, b) => areaOf(b) - areaOf(a));
      for (const el of candidates) {
        const screenSize = el.shape === 'circle' ? el.r * 2 * view.scale
          : el.shape === 'rect' ? Math.min(el.w, el.h) * view.scale
            : 16;
        if (screenSize < 14) continue;
        const p = view.toScreen(el.x, el.z);
        if (p.px < -60 || p.px > view.width + 60 || p.py < -20 || p.py > view.height + 20) continue;
        const w = ctx.measureText(el.label).width;
        const box = { x0: p.px - w * 0.5 - 3, x1: p.px + w * 0.5 + 3, y0: p.py - 7, y1: p.py + 7 };
        let clash = false;
        for (const r of rows) {
          if (box.x0 < r.x1 && box.x1 > r.x0 && box.y0 < r.y1 && box.y1 > r.y0) { clash = true; break; }
        }
        if (clash) continue;
        rows.push(box);
        ctx.fillStyle = 'rgba(21,15,44,0.72)';
        ctx.fillRect(box.x0, box.y0, box.x1 - box.x0, box.y1 - box.y0);
        ctx.fillStyle = pane.selected && pane.selected.id === el.id ? C.select : C.dim;
        ctx.textAlign = 'center';
        ctx.fillText(el.label, p.px, p.py);
      }
      ctx.textAlign = 'left';
    }

    const DRAW_ORDER = ['districts', 'village', 'paths', 'landmarks', 'portals', 'gates', 'statues'];

    function render() {
      ctx.fillStyle = C.bg;
      ctx.fillRect(0, 0, view.width, view.height);
      drawGrid();
      const visible = [];
      for (const layer of DRAW_ORDER) {
        if (!layerVisible(layer)) continue;
        for (const el of map.elements) {
          if (el.layer !== layer) continue;
          visible.push(el);
          drawElement(el);
        }
      }
      if (layerOn.labels) drawLabels(visible);
      NS.annotate.drawMarks(ctx, view, annot);
      renderHud();
      renderSide();
    }

    // ── HUD + SIDE PANEL ─────────────────────────────────────────────────────

    function renderHud() {
      const tools = NS.annotate.TOOLS.map((t) =>
        '<button class="chip' + (annot.state.tool === t.id ? ' on' : '') + '" data-tool="' + t.id
        + '" title="' + t.hint + '"><kbd>' + t.key.toUpperCase() + '</kbd>' + t.label + '</button>').join('');
      const layers = LAYERS.map((l) =>
        '<button class="chip' + (layerOn[l.id] ? ' on' : '') + '" data-layer="' + l.id
        + '"><kbd>' + l.key + '</kbd>' + l.label + '</button>').join('');
      host.querySelector('#map-hud').innerHTML = ''
        + '<div class="hud-row">' + tools
        + '<span class="hud-sep"></span>'
        + '<button class="chip" data-act="undo"><kbd>Z</kbd>undo</button>'
        + '<button class="chip" data-act="fit"><kbd>0</kbd>fit</button>'
        + '</div>'
        + '<div class="hud-row">' + layers + '</div>'
        + '<div class="hud-row">'
        + '<button class="chip send" data-act="send">send to Fable</button>'
        + '<button class="chip" data-act="copy">copy JSON</button>'
        + '<button class="chip" data-act="png">download PNG</button>'
        + '</div>';
    }

    function esc(s) {
      return String(s).replace(/[&<>"]/g, (c) =>
        ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
    }

    function renderSide() {
      const sel = pane.selected;
      const selHtml = sel
        ? '<h3>selected</h3>'
          + '<div class="kv"><code>' + esc(sel.id) + '</code></div>'
          + '<div class="kv"><span>' + esc(sel.kind) + '</span><span>' + esc(sel.layer) + '</span></div>'
          + '<div class="kv"><span>x</span><b>' + sel.x.toFixed(2) + '</b><span>z</span><b>' + sel.z.toFixed(2) + '</b></div>'
          + (sel.r !== undefined ? '<div class="kv"><span>r</span><b>' + sel.r + ' m</b></div>' : '')
          + (sel.w !== undefined ? '<div class="kv"><span>w×h</span><b>' + sel.w + ' × ' + sel.h + ' m</b>'
            + '<span>yaw</span><b>' + (sel.yaw || 0).toFixed(3) + '</b></div>' : '')
          + (sel.meta ? '<div class="meta">' + Object.keys(sel.meta)
            .filter((k) => sel.meta[k] !== '' && sel.meta[k] !== -1)
            .map((k) => '<span>' + esc(k) + '</span><b>' + esc(sel.meta[k]) + '</b>').join('') + '</div>' : '')
        : '<h3>selected</h3><p class="hint">click an element. new marks will carry its id as <code>ref</code>.</p>';
      host.querySelector('#side-selection').innerHTML = selHtml;

      const active = annot.state.activeMarkId ? annot.markById(annot.state.activeMarkId) : null;
      host.querySelector('#side-note').innerHTML = ''
        + '<h3>marks <span class="count">' + annot.state.marks.length + '</span></h3>'
        + (active
          ? '<div class="kv"><code>' + esc(active.id) + '</code><span>' + esc(active.tool) + '</span>'
            + (active.ref ? '<span>ref</span><code>' + esc(active.ref) + '</code>' : '') + '</div>'
            + '<textarea id="note-input" rows="3" placeholder="what is wrong here?">' + esc(active.note || '') + '</textarea>'
          : '<p class="hint">no mark selected. press <kbd>C</kbd> <kbd>A</kbd> <kbd>F</kbd> <kbd>T</kbd> and drag.</p>')
        + '<ul class="marklist">' + annot.state.marks.map((m) =>
          '<li' + (active && active.id === m.id ? ' class="on"' : '') + ' data-mark="' + m.id + '">'
          + '<code>' + esc(m.id) + '</code> ' + esc(m.tool)
          + (m.ref ? ' <em>' + esc(m.ref) + '</em>' : '')
          + (m.note ? '<span>' + esc(m.note) + '</span>' : '') + '</li>').join('') + '</ul>';

      host.querySelector('#tape').innerHTML = annot.state.tape.map((e) =>
        '<li class="t-' + e.kind + '"><time>' + NS.annotate.formatTapeTime(e.t) + '</time>'
        + esc(e.text) + '</li>').join('');
      const tapeEl = host.querySelector('#tape');
      tapeEl.scrollTop = tapeEl.scrollHeight;

      const st = annot.state.status;
      host.querySelector('#side-status').innerHTML =
        '<div class="status ' + st.kind + '">' + esc(st.text || (map.version + ' · ' + pane.buildSha)) + '</div>';

      if (annot.state.wantsNoteFocus) {
        annot.state.wantsNoteFocus = false;
        const input = host.querySelector('#note-input');
        if (input) input.focus();
      }
    }

    // ── INPUT ────────────────────────────────────────────────────────────────

    let dragging = null;
    const worldOf = (ev) => {
      const rect = canvas.getBoundingClientRect();
      return view.toWorld(ev.clientX - rect.left, ev.clientY - rect.top);
    };

    canvas.addEventListener('pointerdown', (ev) => {
      // Capture keeps a drag alive when the cursor leaves the canvas, but it
      // throws NotFoundError for any pointerId the browser does not consider
      // active (synthetic events, some remote-control and accessibility paths).
      // An uncaught throw here aborts the handler and the whole pane stops
      // responding to clicks, which is a bad trade for a nice-to-have.
      try { canvas.setPointerCapture(ev.pointerId); } catch { /* drag still works */ }
      const w = worldOf(ev);
      if (annot.pointerDown(w)) { dragging = { kind: 'mark' }; return; }
      dragging = { kind: 'pan', px: ev.clientX, py: ev.clientY, moved: 0, world: w };
    });

    canvas.addEventListener('pointermove', (ev) => {
      const w = worldOf(ev);
      if (dragging && dragging.kind === 'mark') { annot.pointerMove(w); return; }
      if (dragging && dragging.kind === 'pan') {
        const dx = ev.clientX - dragging.px, dy = ev.clientY - dragging.py;
        dragging.moved += Math.abs(dx) + Math.abs(dy);
        dragging.px = ev.clientX; dragging.py = ev.clientY;
        view.panByPixels(dx, dy);
        scheduleRender();
        return;
      }
      const hit = pick(w.x, w.z);
      if ((hit && hit.id) !== (pane.hovered && pane.hovered.id)) {
        pane.hovered = hit;
        canvas.style.cursor = hit ? 'pointer' : (annot.state.tool === 'select' ? 'grab' : 'crosshair');
        scheduleRender();
      }
    });

    canvas.addEventListener('pointerup', (ev) => {
      const w = worldOf(ev);
      if (dragging && dragging.kind === 'mark') { annot.pointerUp(w); dragging = null; return; }
      // A pan that never moved is a click, and a click selects.
      if (dragging && dragging.kind === 'pan' && dragging.moved < 4) {
        const hit = pick(w.x, w.z);
        pane.selected = hit;
        annot.setSelection(hit ? hit.id : null);
      }
      dragging = null;
      scheduleRender();
    });

    canvas.addEventListener('wheel', (ev) => {
      ev.preventDefault();
      const rect = canvas.getBoundingClientRect();
      view.zoomAt(ev.clientX - rect.left, ev.clientY - rect.top, Math.exp(-ev.deltaY * 0.0016));
      scheduleRender();
    }, { passive: false });

    host.addEventListener('click', (ev) => {
      const chip = ev.target.closest('[data-tool],[data-layer],[data-act],[data-mark]');
      if (!chip) return;
      if (chip.dataset.tool) annot.setTool(chip.dataset.tool);
      else if (chip.dataset.layer) { layerOn[chip.dataset.layer] = !layerOn[chip.dataset.layer]; scheduleRender(); }
      else if (chip.dataset.mark) { annot.state.activeMarkId = chip.dataset.mark; scheduleRender(); }
      else if (chip.dataset.act) act(chip.dataset.act);
    });

    host.addEventListener('input', (ev) => {
      if (ev.target.id === 'note-input' && annot.state.activeMarkId) {
        annot.setNote(annot.state.activeMarkId, ev.target.value);
      }
    });

    function downloadPng() {
      const a = document.createElement('a');
      a.href = canvas.toDataURL('image/png');
      a.download = 'whomp-map-' + new Date().toISOString().replace(/[:.]/g, '-') + '.png';
      a.click();
    }

    async function copyJson() {
      const text = JSON.stringify(annot.payload({ mapVersion: map.version, buildSha: pane.buildSha }), null, 2);
      try {
        await navigator.clipboard.writeText(text);
        annot.setStatus('sent', 'copied ' + annot.state.marks.length + ' marks to the clipboard');
      } catch {
        // Clipboard is origin-gated and file:// has no origin, so the fallback
        // is not decoration — it is the only path that works off a double-click.
        const w = root.open('', '_blank');
        if (w) { w.document.body.style.whiteSpace = 'pre'; w.document.body.textContent = text; }
        annot.setStatus('idle', 'clipboard blocked — opened the JSON in a new tab');
      }
    }

    function act(name) {
      if (name === 'undo') annot.undo();
      else if (name === 'fit') { view.fit(map.bounds, 30); scheduleRender(); }
      else if (name === 'png') downloadPng();
      else if (name === 'copy') copyJson();
      else if (name === 'send') annot.send({ mapVersion: map.version, buildSha: pane.buildSha });
    }

    pane.onKey = function (ev) {
      const k = ev.key.toLowerCase();
      const tool = annot.toolForKey(k);
      if (tool) { annot.setTool(tool); return true; }
      if (k === 'z') { annot.undo(); return true; }
      if (k === '0') { view.fit(map.bounds, 30); scheduleRender(); return true; }
      if (k === 'escape') {
        pane.selected = null;
        annot.setSelection(null);
        annot.state.activeMarkId = null;
        scheduleRender();
        return true;
      }
      const layer = LAYERS.find((l) => l.key === k);
      if (layer) { layerOn[layer.id] = !layerOn[layer.id]; scheduleRender(); return true; }
      return false;
    };

    pane.resize = resize;
    pane.render = scheduleRender;
    pane.pick = pick;

    // The published build sha, when there is one. Over file:// this fetch fails
    // by design and 'dev' is the honest label.
    fetch('/version.json', { cache: 'no-store' })
      .then((r) => (r.ok ? r.json() : null))
      .then((v) => { if (v && v.sha) { pane.buildSha = v.sha; scheduleRender(); } })
      .catch(() => {});

    // The stage is flex-sized, so a window resize is not the only thing that
    // changes it — so is the stylesheet landing after the script ran.
    if (typeof ResizeObserver === 'function') {
      new ResizeObserver(() => resize()).observe(stage);
    }
    resize();
    return pane;
  }

  NS.map = { createMapPane, LAYERS, rectCorners, pointInRect, distanceToPolyline, areaOf, hitElement, C };
})(globalThis);
