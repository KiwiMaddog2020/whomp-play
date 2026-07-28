/* THE WHOMP LAB — SELFTEST.
 *
 *     node lab/selftest.mjs
 *
 * There is no browser in this build lane, so "I opened it and it looked right"
 * is not available. This is the substitute: it imports the lab's own pure
 * modules and the committed map INTO NODE and checks the things a broken lab
 * would get wrong before anything is drawn.
 *
 * It works because every lab/*.js file is written with no import/export
 * statements, which makes each one both a classic script (what index.html
 * loads, so file:// works) and a valid ES module (what this file imports).
 *
 * It does NOT replace looking at the page. It replaces shipping a page that was
 * never going to work.
 */

import { readFileSync } from 'node:fs';

const here = new URL('./', import.meta.url);
const load = (p) => JSON.parse(readFileSync(new URL(p, here), 'utf8'));

await import('./view.js');
await import('./annotate.js');
await import('./map.js');
await import('./lab.js');

const { view: viewNS, annotate, map: mapNS, shell } = globalThis.WhompLab;
const hubmap = load('./data/hubmap.json');

let failures = 0;
let checks = 0;

function ok(name, cond, detail) {
  checks += 1;
  if (cond) {
    console.log('  ok   ' + name + (detail ? '   ' + detail : ''));
  } else {
    failures += 1;
    console.log('  FAIL ' + name + (detail ? '   ' + detail : ''));
  }
}

function near(a, b, tol) {
  return Math.abs(a - b) <= tol;
}

console.log('THE WHOMP LAB — selftest');

// ── 1. THE MAP LOADED AND IS NOT A STUB ──────────────────────────────────────

console.log('\nmap data');
ok('element count > 40', hubmap.elements.length > 40, hubmap.elements.length + ' elements');
ok('every layer is populated',
  hubmap.layers.every((l) => l === 'labels' || (hubmap.counts[l] || 0) > 0),
  JSON.stringify(hubmap.counts));
ok('ids are unique and stable',
  new Set(hubmap.elements.map((e) => e.id)).size === hubmap.elements.length);
ok('every element has finite coordinates',
  hubmap.elements.every((e) => Number.isFinite(e.x) && Number.isFinite(e.z)));

// The script-tag twin the page actually loads must be the same map.
const twin = readFileSync(new URL('./data/hubmap.js', here), 'utf8');
const twinJson = JSON.parse(twin.slice(twin.indexOf('=') + 1).trim().replace(/;\s*$/, ''));
ok('data/hubmap.js mirrors data/hubmap.json',
  JSON.stringify(twinJson) === JSON.stringify(hubmap));

// ── 2. THE HEARTHWICK TRANSFORM LANDED ───────────────────────────────────────
// The well is authored in village-local metres and has to come out inside the
// village plate. If the frame transform were wrong by a sign or a swap, this is
// the check that would catch it: the plate is a 59 x 49.6 m rectangle turned
// PI/2 out of world axes, so a mis-transformed well misses it by tens of metres.

console.log('\nhearthwick frame');
const well = hubmap.elements.find((e) => e.id === 'village:well');
const plate = hubmap.elements.find((e) => e.id === 'village:plate');
ok('the well is on the map', !!well, well ? well.x.toFixed(3) + ', ' + well.z.toFixed(3) : 'missing');
ok('the plate is on the map', !!plate);
ok('the well lands inside the village plate',
  !!well && !!plate && mapNS.pointInRect(plate, well.x, well.z),
  'well (' + well.x + ', ' + well.z + ') in plate centred (' + plate.x + ', ' + plate.z + ')');

// The documented transform, checked against the exported numbers rather than
// re-derived: world = (cx + lz, cz - lx) with cx -82, cz 0 and the authored
// local well at (-0.889, -2.443).
ok('the well matches world = (cx + lz, cz - lx)',
  near(well.x, -82 + -2.443, 1e-6) && near(well.z, 0 - -0.889, 1e-6),
  'expected (-84.443, 0.889)');

const tailor = hubmap.elements.find((e) => e.id === 'site:tailor');
ok('the tailor stands inside the plate', mapNS.pointInRect(plate, tailor.x, tailor.z),
  tailor.x.toFixed(3) + ', ' + tailor.z.toFixed(3));
ok('every village home is inside the plate',
  hubmap.elements.filter((e) => e.kind === 'home').every((e) => mapNS.pointInRect(plate, e.x, e.z)));

// ── 3. THE CAMERA IS AN IDENTITY ─────────────────────────────────────────────

console.log('\nview transform');
const view = viewNS.createView({ width: 1280, height: 720, scale: 3.7, cx: -12.5, cz: 33.25 });
let worstRound = 0;
for (const sample of [[0, 0], [-84.443, 0.889], [78, -24], [-110.4, 40.4], [32.5, -31], [116, 116]]) {
  const s = view.toScreen(sample[0], sample[1]);
  const w = view.toWorld(s.px, s.py);
  worstRound = Math.max(worstRound, Math.abs(w.x - sample[0]), Math.abs(w.z - sample[1]));
}
ok('world -> screen -> world is identity within 1e-6', worstRound < 1e-6,
  'worst drift ' + worstRound.toExponential(2) + ' m');

// Cursor-anchored zoom: the world point under the cursor must not move.
const anchorBefore = view.toWorld(300, 190);
view.zoomAt(300, 190, 2.4);
const anchorAfter = view.toWorld(300, 190);
ok('zoom is anchored on the cursor',
  near(anchorBefore.x, anchorAfter.x, 1e-9) && near(anchorBefore.z, anchorAfter.z, 1e-9));

view.fit(hubmap.bounds, 30);
const nw = view.toScreen(hubmap.bounds.minX, hubmap.bounds.minZ);
const se = view.toScreen(hubmap.bounds.maxX, hubmap.bounds.maxZ);
ok('fit() frames the whole island',
  nw.px >= -0.001 && nw.py >= -0.001 && se.px <= view.width + 0.001 && se.py <= view.height + 0.001,
  'nw ' + nw.px.toFixed(1) + ',' + nw.py.toFixed(1) + '  se ' + se.px.toFixed(1) + ',' + se.py.toFixed(1));

ok('north is up (a smaller z is a smaller screen y)',
  view.toScreen(0, -50).py < view.toScreen(0, 50).py);

ok('the grid step ladder is 1/2/5 decades',
  viewNS.GRID_STEPS.every((s) => [1, 2, 5].includes(s / Math.pow(10, Math.floor(Math.log10(s))))));

// ── 4. THE ANNOTATOR'S PURE HALF ─────────────────────────────────────────────

console.log('\nannotate');
ok('mark ids start at A1', annotate.nextMarkId([], 0) === 'A1');
ok('mark ids never reuse a retired number',
  annotate.nextMarkId([], 4) === 'A5', 'after four issued and all undone');
ok('mark ids track the highest live mark',
  annotate.nextMarkId([{ id: 'A1' }, { id: 'A7' }], 0) === 'A8');

const circle = { id: 'A1', tool: 'circle', cx: -84.4, cz: 0.9, r: 3, note: 'well coping', ref: 'village:well', createdAt: 'x' };
const arrow = { id: 'A2', tool: 'arrow', x0: 0, z0: 0, x1: 10, z1: -20, note: '', ref: '', createdAt: 'x' };
const scrawl = { id: 'A3', tool: 'freehand', pts: [[0, 0], [1, 1], [2, 2]], note: '', ref: '', createdAt: 'x' };
ok('a circle centroid is its centre',
  annotate.markCentroid(circle).x === -84.4 && annotate.markCentroid(circle).z === 0.9);
ok('an arrow centroid is its midpoint',
  annotate.markCentroid(arrow).x === 5 && annotate.markCentroid(arrow).z === -10);
ok('a freehand centroid is its mean',
  annotate.markCentroid(scrawl).x === 1 && annotate.markCentroid(scrawl).z === 1);
ok('a zero-extent mark is discarded', !annotate.markIsSubstantial({ tool: 'circle', r: 0.01 }, 0.25));
ok('a real mark survives', annotate.markIsSubstantial(circle, 0.25));

const wire = annotate.serializeMarks([circle, arrow, scrawl]);
ok('marks serialize in world units with their ref',
  wire[0].circle[0] === -84.4 && wire[0].ref === 'village:well' && wire[0].at.length === 2,
  JSON.stringify(wire[0]));
ok('serialized marks stay small', JSON.stringify(wire).length < 600, JSON.stringify(wire).length + ' bytes');

// A straight line of 200 points must collapse to its two endpoints; a corner
// must survive. This is what keeps a long freehand inside the worker's 32k cap.
const straight = Array.from({ length: 200 }, (_, i) => [i * 0.1, 0]);
ok('freehand simplification collapses a straight run',
  annotate.simplifyPath(straight, 0.05).length === 2,
  annotate.simplifyPath(straight, 0.05).length + ' points from 200');
ok('freehand simplification keeps a corner',
  annotate.simplifyPath([[0, 0], [5, 0], [5, 5]], 0.05).length === 3);

ok('tape time is mm:ss', annotate.formatTapeTime(0) === '00:00' && annotate.formatTapeTime(91000) === '01:31');
ok('every tool has a distinct one-key binding',
  new Set(annotate.TOOLS.map((t) => t.key)).size === annotate.TOOLS.length,
  annotate.TOOLS.map((t) => t.key).join(' '));
ok('the send endpoint is the deployed worker',
  annotate.DEFAULT_ENDPOINT === 'https://whomp-feedback.kevinmadson3.workers.dev/report');

// The annotator itself runs headless — it takes no DOM, only callbacks.
const annot = annotate.createAnnotator({ paneId: 'map', getScale: () => 0.25, hitTest: () => 'site:tailor' });
annot.setTool('circle');
annot.setSelection('site:tailor');
annot.pointerDown({ x: -60, z: 10 });
annot.pointerMove({ x: -56, z: 10 });
annot.pointerUp({ x: -56, z: 10 });
annot.setNote('A1', 'the tailor eave clips the lane');
const body = annot.reportBody({ mapVersion: hubmap.version, buildSha: 'deadbee' });
ok('the annotator runs with no DOM at all', annot.state.marks.length === 1);
ok('a mark made while selected carries the ref', annot.state.marks[0].ref === 'site:tailor');
ok('the report body is the shape the worker accepts',
  body.kind === 'mapnote' && typeof body.text === 'string'
  && body.context.version === 'lab-1' && body.context.ua === 'map-lab',
  JSON.stringify(body.context));
const parsed = JSON.parse(body.text);
ok('the report text carries mapVersion, buildSha, createdAt and marks',
  parsed.mapVersion === hubmap.version && parsed.buildSha === 'deadbee'
  && typeof parsed.createdAt === 'string' && Array.isArray(parsed.marks) && parsed.marks.length === 1);
ok('the report text is under the worker 32k cap', body.text.length < 32000, body.text.length + ' bytes');
annot.undo();
ok('undo removes the mark and keeps the tape',
  annot.state.marks.length === 0 && annot.state.tape.some((e) => e.kind === 'undo'));

// ── 5. PICKING ───────────────────────────────────────────────────────────────

console.log('\npicking');
const emberPortal = hubmap.elements.find((e) => e.id === 'portal:ember:0');
ok('a portal is hit at its own centre', mapNS.hitElement(emberPortal, emberPortal.x, emberPortal.z, 0.1));
ok('a portal is missed well outside its dais',
  !mapNS.hitElement(emberPortal, emberPortal.x + 20, emberPortal.z, 0.1));
const emberDistrict = hubmap.elements.find((e) => e.id === 'district:ember');
ok('the portal is smaller than the district it stands in',
  mapNS.areaOf(emberPortal) < mapNS.areaOf(emberDistrict),
  'so smallest-first picking returns the portal, not the district');
const ringLane = hubmap.elements.find((e) => e.id === 'path:ring-lane');
ok('the ring lane polyline is hit on the lane',
  mapNS.distanceToPolyline(ringLane, ringLane.pts[0][0], ringLane.pts[0][1]) < 1e-6);
ok('a rotated village rect hit-tests in its own frame',
  mapNS.pointInRect(tailor, tailor.x, tailor.z) && !mapNS.pointInRect(tailor, tailor.x + 40, tailor.z));

// ── 6. THE SHELL ─────────────────────────────────────────────────────────────

console.log('\nshell');
ok('MAP is the only live pane in v1',
  shell.PANES.filter((p) => p.ready).map((p) => p.id).join() === 'map');
ok('CAST / FX / PALETTE / ROSTER are on the bar as stubs',
  shell.PANES.filter((p) => !p.ready).map((p) => p.id).join() === 'cast,fx,palette,roster');
ok('every lab layer toggle maps to a real layer or is virtual',
  mapNS.LAYERS.every((l) => l.virtual === true || hubmap.layers.includes(l.id)));

console.log('\n' + (failures === 0 ? 'PASS' : 'FAIL') + ' — ' + (checks - failures) + '/' + checks + ' checks');
if (failures > 0) throw new Error(failures + ' selftest check(s) failed');
