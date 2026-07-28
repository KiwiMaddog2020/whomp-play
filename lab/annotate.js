/* THE WHOMP LAB — ANNOTATE, TAPE, SEND. Pane-agnostic on purpose.
 *
 * This module knows about MARKS (circle / arrow / freehand / text note), THE TAPE
 * (an ordered, timestamped log of everything that happened this session) and THE
 * SEND (a POST to the feedback worker with a screenshot). It knows NOTHING about
 * maps, districts, layers, or hubmap.json. The MAP pane is its first consumer;
 * CAST / FX / PALETTE / ROSTER are meant to be its next ones, and none of them
 * should have to touch this file.
 *
 * THE FOUR SEAMS a pane hands in:
 *   getScale()      metres (or whatever the pane's world unit is) per pixel, so
 *                   a "6 pixel" tolerance can be quoted in world units.
 *   hitTest(x, z)   the pane's own picking. Returns a stable element id or null.
 *                   A mark made while something is picked carries `ref`.
 *   getScreenshot() a data URL of the current view WITH annotations drawn.
 *   onChange()      re-render, however the pane wants to.
 *
 * EVERY MARK IS STORED IN WORLD UNITS. Not pixels, not normalized view space. A
 * note taken at one zoom has to still point at the same doorway at another zoom
 * and in the next session, and the only coordinate that survives that is the one
 * the game itself uses.
 *
 * Classic script AND valid ES module (no import/export) — see lab/README.md.
 */
(function (root) {
  'use strict';
  const NS = (root.WhompLab = root.WhompLab || {});

  /** One-key tools. The key IS the identity: this is a keyboard-first tool and a
   *  toolbar button is just a second way to press the same key. */
  const TOOLS = [
    { id: 'select', key: 'v', label: 'Select', hint: 'pan + pick elements' },
    { id: 'circle', key: 'c', label: 'Circle', hint: 'drag from centre' },
    { id: 'arrow', key: 'a', label: 'Arrow', hint: 'drag tail to head' },
    { id: 'freehand', key: 'f', label: 'Freehand', hint: 'draw a lasso or scrawl' },
    { id: 'text', key: 't', label: 'Text', hint: 'click, then type the note' },
  ];

  const TOOL_BY_KEY = {};
  for (const t of TOOLS) TOOL_BY_KEY[t.key] = t.id;

  // ── PURE HELPERS (node imports these directly; see lab/selftest.mjs) ────────

  /** A1, A2, A3... MONOTONIC ACROSS UNDO. If a mark is deleted and the next one
   *  reuses its name, then a note that says "A3 is the wrong door" means two
   *  different things depending on when you read it. So the counter only ever
   *  goes up: the highest number ever issued, plus one. */
  function nextMarkId(marks, issued) {
    let high = issued || 0;
    for (const m of marks) {
      const n = parseInt(String(m.id).slice(1), 10);
      if (Number.isFinite(n) && n > high) high = n;
    }
    return 'A' + (high + 1);
  }

  /** A mark's representative world point — what a label hangs off and what the
   *  payload quotes so a reader can jump straight to it. */
  function markCentroid(mark) {
    switch (mark.tool) {
      case 'circle': return { x: mark.cx, z: mark.cz };
      case 'arrow': return { x: (mark.x0 + mark.x1) * 0.5, z: (mark.z0 + mark.z1) * 0.5 };
      case 'text': return { x: mark.x, z: mark.z };
      case 'freehand': {
        let sx = 0, sz = 0;
        const pts = mark.pts || [];
        if (pts.length === 0) return { x: 0, z: 0 };
        for (const p of pts) { sx += p[0]; sz += p[1]; }
        return { x: sx / pts.length, z: sz / pts.length };
      }
      default: return { x: 0, z: 0 };
    }
  }

  /** A mark is worth keeping only if it has extent or something to say. Kills the
   *  accidental single-pixel circle a mis-click leaves behind. */
  function markIsSubstantial(mark, minWorld) {
    const min = minWorld === undefined ? 0.25 : minWorld;
    switch (mark.tool) {
      case 'circle': return mark.r >= min;
      case 'arrow': return Math.hypot(mark.x1 - mark.x0, mark.z1 - mark.z0) >= min;
      case 'freehand': return (mark.pts || []).length >= 2;
      case 'text': return true;
      default: return false;
    }
  }

  const round = (v, dp) => {
    const f = Math.pow(10, dp === undefined ? 3 : dp);
    return Math.round(v * f) / f || 0;
  };

  /** The wire shape of the marks array. Rounded to millimetres, because the
   *  worker caps the text field at 32k and 17 significant digits of float noise
   *  is the fastest way to spend that budget on nothing. */
  function serializeMarks(marks) {
    return marks.map((m) => {
      const c = markCentroid(m);
      const out = {
        id: m.id,
        tool: m.tool,
        at: [round(c.x), round(c.z)],
        note: m.note || '',
        ref: m.ref || '',
        createdAt: m.createdAt,
      };
      if (m.tool === 'circle') out.circle = [round(m.cx), round(m.cz), round(m.r)];
      if (m.tool === 'arrow') out.arrow = [round(m.x0), round(m.z0), round(m.x1), round(m.z1)];
      if (m.tool === 'freehand') out.path = m.pts.map((p) => [round(p[0], 2), round(p[1], 2)]);
      return out;
    });
  }

  /** mm:ss since the session started. The tape is a replay, so elapsed reads
   *  better than a wall clock. */
  function formatTapeTime(ms) {
    const s = Math.max(0, Math.floor(ms / 1000));
    return String(Math.floor(s / 60)).padStart(2, '0') + ':' + String(s % 60).padStart(2, '0');
  }

  /** Douglas-Peucker, so a 900-point freehand scrawl does not eat the 32k text
   *  cap on its own. Tolerance is in world units. */
  function simplifyPath(pts, tol) {
    if (pts.length < 3) return pts.slice();
    const keep = new Array(pts.length).fill(false);
    keep[0] = true;
    keep[pts.length - 1] = true;
    const stack = [[0, pts.length - 1]];
    while (stack.length > 0) {
      const seg = stack.pop();
      const a = pts[seg[0]], b = pts[seg[1]];
      const dx = b[0] - a[0], dz = b[1] - a[1];
      const len2 = dx * dx + dz * dz;
      let worst = -1, worstD = tol;
      for (let i = seg[0] + 1; i < seg[1]; i++) {
        const p = pts[i];
        let t = len2 === 0 ? 0 : ((p[0] - a[0]) * dx + (p[1] - a[1]) * dz) / len2;
        t = t < 0 ? 0 : t > 1 ? 1 : t;
        const d = Math.hypot(p[0] - (a[0] + dx * t), p[1] - (a[1] + dz * t));
        if (d > worstD) { worstD = d; worst = i; }
      }
      if (worst >= 0) {
        keep[worst] = true;
        stack.push([seg[0], worst], [worst, seg[1]]);
      }
    }
    return pts.filter((_, i) => keep[i]);
  }

  // ── THE ANNOTATOR ──────────────────────────────────────────────────────────

  const DEFAULT_ENDPOINT = 'https://whomp-feedback.kevinmadson3.workers.dev/report';

  function createAnnotator(opts) {
    const o = opts || {};
    const getScale = o.getScale || (() => 1);
    const hitTest = o.hitTest || (() => null);
    const getScreenshot = o.getScreenshot || (() => null);
    const onChange = o.onChange || (() => {});
    const endpoint = o.endpoint || DEFAULT_ENDPOINT;
    const paneId = o.paneId || 'pane';

    const startedAt = Date.now();
    const state = {
      tool: 'select',
      marks: [],
      tape: [],
      issued: 0,
      selectedRef: null,
      activeMarkId: null,
      draft: null,
      status: { kind: 'idle', text: '' },
    };

    function tape(kind, text) {
      state.tape.push({ t: Date.now() - startedAt, kind, text });
    }

    tape('session', paneId + ' pane opened');

    function setTool(id) {
      if (!TOOLS.some((t) => t.id === id) || state.tool === id) return;
      state.tool = id;
      state.draft = null;
      tape('tool', id);
      onChange();
    }

    function setSelection(ref) {
      if (state.selectedRef === ref) return;
      state.selectedRef = ref;
      if (ref) tape('select', ref);
      onChange();
    }

    function markById(id) {
      return state.marks.find((m) => m.id === id) || null;
    }

    function setNote(id, note) {
      const m = markById(id);
      if (!m) return;
      const was = m.note || '';
      m.note = note;
      // One tape line per note, rewritten in place while you are still typing it:
      // a keystroke-per-line tape is a keylogger, not a replay.
      if (m.tapeIndex !== undefined && state.tape[m.tapeIndex] && state.tape[m.tapeIndex].kind === 'note') {
        state.tape[m.tapeIndex].text = m.id + ' — ' + note;
      } else if (note !== was && note !== '') {
        m.tapeIndex = state.tape.length;
        tape('note', m.id + ' — ' + note);
      }
      onChange();
    }

    function commit(mark) {
      if (!markIsSubstantial(mark, getScale() * 4)) {
        state.draft = null;
        onChange();
        return null;
      }
      mark.id = nextMarkId(state.marks, state.issued);
      state.issued = parseInt(mark.id.slice(1), 10);
      mark.createdAt = new Date().toISOString();
      mark.ref = state.selectedRef || '';
      state.marks.push(mark);
      state.activeMarkId = mark.id;
      state.draft = null;
      const c = markCentroid(mark);
      tape('mark', mark.id + ' ' + mark.tool
        + ' at ' + c.x.toFixed(1) + ', ' + c.z.toFixed(1)
        + (mark.ref ? ' → ' + mark.ref : ''));
      onChange();
      return mark;
    }

    /** POINTER SEAM. The pane owns the DOM events (it also needs them for pan and
     *  hover) and forwards world coordinates here. Returning true means "this was
     *  mine" — the pane must not also pan on it. */
    function pointerDown(p) {
      if (state.tool === 'select') return false;
      if (state.tool === 'text') {
        const m = commit({ tool: 'text', x: p.x, z: p.z, note: '' });
        if (m) state.wantsNoteFocus = true;
        return true;
      }
      if (state.tool === 'circle') state.draft = { tool: 'circle', cx: p.x, cz: p.z, r: 0 };
      else if (state.tool === 'arrow') state.draft = { tool: 'arrow', x0: p.x, z0: p.z, x1: p.x, z1: p.z };
      else if (state.tool === 'freehand') state.draft = { tool: 'freehand', pts: [[p.x, p.z]] };
      onChange();
      return true;
    }

    function pointerMove(p) {
      const d = state.draft;
      if (!d) return false;
      if (d.tool === 'circle') d.r = Math.hypot(p.x - d.cx, p.z - d.cz);
      else if (d.tool === 'arrow') { d.x1 = p.x; d.z1 = p.z; }
      else if (d.tool === 'freehand') {
        const last = d.pts[d.pts.length - 1];
        if (Math.hypot(p.x - last[0], p.z - last[1]) > getScale() * 2) d.pts.push([p.x, p.z]);
      }
      onChange();
      return true;
    }

    function pointerUp() {
      const d = state.draft;
      if (!d) return false;
      if (d.tool === 'freehand') d.pts = simplifyPath(d.pts, getScale() * 1.5);
      commit(d);
      return true;
    }

    /** Z. Undo removes the last mark; the tape KEEPS the line and adds the undo,
     *  because the tape is a record of the session, not of the survivors. */
    function undo() {
      const m = state.marks.pop();
      if (!m) return null;
      if (state.activeMarkId === m.id) state.activeMarkId = null;
      tape('undo', 'removed ' + m.id);
      onChange();
      return m;
    }

    function clearMarks() {
      if (state.marks.length === 0) return;
      tape('undo', 'cleared ' + state.marks.length + ' marks');
      state.marks = [];
      state.activeMarkId = null;
      onChange();
    }

    // ── THE PAYLOAD ──────────────────────────────────────────────────────────

    function payload(meta) {
      const m = meta || {};
      return {
        mapVersion: m.mapVersion || 'unknown',
        buildSha: m.buildSha || 'dev',
        createdAt: new Date().toISOString(),
        pane: paneId,
        marks: serializeMarks(state.marks),
        tape: state.tape.map((e) => ({ t: e.t, kind: e.kind, text: e.text })),
      };
    }

    /** The body the deployed worker already accepts (kind 'mapnote' is live).
     *  `text` is the whole payload as a string, capped at the worker's 32k. */
    function reportBody(meta) {
      const p = payload(meta);
      let text = JSON.stringify(p);
      if (text.length > 32000) {
        // Drop the tape before dropping a single mark: the marks ARE the report.
        text = JSON.stringify({ ...p, tape: [], tapeDropped: p.tape.length });
      }
      return {
        kind: 'mapnote',
        text,
        context: { version: 'lab-1', ua: 'map-lab' },
      };
    }

    function setStatus(kind, text) {
      state.status = { kind, text };
      onChange();
    }

    async function send(meta) {
      if (state.marks.length === 0) {
        setStatus('error', 'nothing to send — make a mark first');
        return { ok: false, reason: 'empty' };
      }
      setStatus('sending', 'sending…');
      const body = reportBody(meta);
      const shot = getScreenshot();
      if (shot) body.screenshotB64 = shot;
      try {
        const res = await fetch(endpoint, {
          method: 'POST',
          headers: { 'content-type': 'application/json' },
          body: JSON.stringify(body),
        });
        if (!res.ok) {
          setStatus('error', 'failed — HTTP ' + res.status + ' (copy JSON / download PNG still work)');
          tape('send', 'FAILED http ' + res.status);
          return { ok: false, status: res.status };
        }
        setStatus('sent', 'sent ' + state.marks.length + ' mark' + (state.marks.length === 1 ? '' : 's') + ' to Fable');
        tape('send', 'sent ' + state.marks.length + ' marks');
        return { ok: true, status: res.status };
      } catch (err) {
        setStatus('error', 'failed — ' + (err && err.message ? err.message : 'network')
          + ' (copy JSON / download PNG still work)');
        tape('send', 'FAILED ' + (err && err.message ? err.message : 'network'));
        return { ok: false, reason: 'network' };
      }
    }

    return {
      TOOLS,
      state,
      paneId,
      startedAt,
      setTool,
      setSelection,
      setNote,
      markById,
      pointerDown,
      pointerMove,
      pointerUp,
      undo,
      clearMarks,
      payload,
      reportBody,
      setStatus,
      send,
      toolForKey: (k) => TOOL_BY_KEY[String(k).toLowerCase()] || null,
      elapsed: () => Date.now() - startedAt,
    };
  }

  // ── DRAWING ────────────────────────────────────────────────────────────────
  // Screen-space rendering of world-space marks. Lives here rather than in the
  // pane so every future pane draws an arrow the same way.

  const MARK_COLOR = '#ffb454';
  const MARK_ACTIVE = '#2fe0ff';

  function drawMarks(ctx, view, annot) {
    const marks = annot.state.marks.slice();
    if (annot.state.draft) marks.push({ ...annot.state.draft, id: '·' });
    for (const m of marks) {
      const active = m.id === annot.state.activeMarkId;
      ctx.save();
      ctx.strokeStyle = active ? MARK_ACTIVE : MARK_COLOR;
      ctx.fillStyle = ctx.strokeStyle;
      ctx.lineWidth = active ? 2.5 : 2;
      ctx.lineJoin = 'round';
      ctx.lineCap = 'round';
      if (m.tool === 'circle') {
        const c = view.toScreen(m.cx, m.cz);
        ctx.beginPath();
        ctx.arc(c.px, c.py, Math.max(2, m.r * view.scale), 0, Math.PI * 2);
        ctx.stroke();
      } else if (m.tool === 'arrow') {
        const a = view.toScreen(m.x0, m.z0);
        const b = view.toScreen(m.x1, m.z1);
        ctx.beginPath();
        ctx.moveTo(a.px, a.py);
        ctx.lineTo(b.px, b.py);
        ctx.stroke();
        const ang = Math.atan2(b.py - a.py, b.px - a.px);
        const head = 11;
        ctx.beginPath();
        ctx.moveTo(b.px, b.py);
        ctx.lineTo(b.px - Math.cos(ang - 0.42) * head, b.py - Math.sin(ang - 0.42) * head);
        ctx.lineTo(b.px - Math.cos(ang + 0.42) * head, b.py - Math.sin(ang + 0.42) * head);
        ctx.closePath();
        ctx.fill();
      } else if (m.tool === 'freehand') {
        ctx.beginPath();
        for (let i = 0; i < m.pts.length; i++) {
          const p = view.toScreen(m.pts[i][0], m.pts[i][1]);
          if (i === 0) ctx.moveTo(p.px, p.py); else ctx.lineTo(p.px, p.py);
        }
        ctx.stroke();
      } else if (m.tool === 'text') {
        const p = view.toScreen(m.x, m.z);
        ctx.beginPath();
        ctx.moveTo(p.px, p.py - 7);
        ctx.lineTo(p.px + 6, p.py + 4);
        ctx.lineTo(p.px - 6, p.py + 4);
        ctx.closePath();
        ctx.fill();
      }
      if (m.id && m.id !== '·') {
        const c = markCentroid(m);
        const p = view.toScreen(c.x, c.z);
        const label = m.id + (m.note ? '  ' + m.note.slice(0, 40) : '');
        ctx.font = '600 11px ui-monospace, SFMono-Regular, Menlo, monospace';
        const w = ctx.measureText(label).width;
        ctx.fillStyle = 'rgba(12,8,28,0.82)';
        ctx.fillRect(p.px + 8, p.py - 17, w + 8, 15);
        ctx.fillStyle = active ? MARK_ACTIVE : MARK_COLOR;
        ctx.fillText(label, p.px + 12, p.py - 6);
      }
      ctx.restore();
    }
  }

  NS.annotate = {
    TOOLS,
    createAnnotator,
    drawMarks,
    nextMarkId,
    markCentroid,
    markIsSubstantial,
    serializeMarks,
    formatTapeTime,
    simplifyPath,
    DEFAULT_ENDPOINT,
  };
})(globalThis);
