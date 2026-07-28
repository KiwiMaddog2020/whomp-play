/* THE WHOMP LAB — THE SHELL.
 *
 * A pane bar and one live pane. MAP is v1; CAST, FX, PALETTE and ROSTER are on
 * the bar as disabled stubs marked "soon" — visible on purpose, because a pane
 * bar with one item on it does not tell anybody what this thing is going to be.
 *
 * The shell owns exactly three things: which pane is mounted, the keyboard
 * routing (a pane gets first refusal on every key), and the resize seam. Panes
 * own everything else.
 *
 * Classic script AND valid ES module (no import/export) — see lab/README.md.
 */
(function (root) {
  'use strict';
  const NS = (root.WhompLab = root.WhompLab || {});

  const PANES = [
    { id: 'map', label: 'MAP', ready: true, blurb: 'the island, derived' },
    { id: 'cast', label: 'CAST', ready: false, blurb: 'villagers, NPCs, routes' },
    { id: 'fx', label: 'FX', ready: false, blurb: 'particles, beats, sfx' },
    { id: 'palette', label: 'PALETTE', ready: false, blurb: 'world colour sets' },
    { id: 'roster', label: 'ROSTER', ready: false, blurb: 'characters + innates' },
  ];

  function boot() {
    const bar = document.getElementById('pane-bar');
    const host = document.getElementById('pane-host');
    if (!bar || !host) return;

    bar.innerHTML = '<span class="brand">THE WHOMP LAB</span>' + PANES.map((p) =>
      '<button class="pane-tab' + (p.ready ? '' : ' soon') + '" data-pane="' + p.id + '"'
      + (p.ready ? '' : ' disabled aria-disabled="true"')
      + ' title="' + p.blurb + '">' + p.label
      + (p.ready ? '' : '<span class="soon-tag">soon</span>') + '</button>').join('')
      + '<span class="bar-spacer"></span>'
      + '<span class="bar-note" id="bar-note"></span>';

    let active = null;

    function mount(id) {
      const def = PANES.find((p) => p.id === id);
      if (!def || !def.ready) return;
      for (const el of bar.querySelectorAll('.pane-tab')) {
        el.classList.toggle('on', el.dataset.pane === id);
      }
      if (id === 'map') {
        active = NS.map.createMapPane(host, {});
        // Reachable from the console on purpose: this is a lab, and being able
        // to poke `WhompLab.pane.view` or dump `WhompLab.pane.annot.state` is
        // half of what makes a dev tool a dev tool.
        NS.pane = active;
        document.getElementById('bar-note').textContent =
          root.__WHOMP_HUBMAP__.version + ' · ' + root.__WHOMP_HUBMAP__.counts.total + ' elements';
      }
    }

    bar.addEventListener('click', (ev) => {
      const tab = ev.target.closest('.pane-tab');
      if (tab && !tab.disabled) mount(tab.dataset.pane);
    });

    // KEYBOARD FIRST, and never while a note is being typed: a tool letter typed
    // into a text area must be a letter.
    root.addEventListener('keydown', (ev) => {
      const t = ev.target;
      if (t && (t.tagName === 'TEXTAREA' || t.tagName === 'INPUT')) {
        if (ev.key === 'Escape') t.blur();
        return;
      }
      if (ev.metaKey || ev.ctrlKey || ev.altKey) return;
      if (active && active.onKey && active.onKey(ev)) ev.preventDefault();
    });

    root.addEventListener('resize', () => { if (active && active.resize) active.resize(); });

    mount('map');
  }

  NS.shell = { PANES, boot };
  // The selftest imports these files into node, where there is no document.
  if (typeof document === 'undefined') return;
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }
})(globalThis);
