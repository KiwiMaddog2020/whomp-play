# THE WHOMP LAB

An in-repo, static, dev-facing tool. Not a shipped surface: `bin/deploy-play.sh`
copies `style-lab` into `dist`, and deliberately does not copy this.

```
open lab/index.html          # double-click works, no server needed
npx vite                     # then http://localhost:5199/lab/
node lab/selftest.mjs        # 45 headless checks
```

## What it is

A pane bar over one live pane.

| Pane | State | What it is for |
|---|---|---|
| **MAP** | live | the whole island, derived from the game's own placement modules |
| CAST | soon | villagers, NPCs, routes |
| FX | soon | particles, beats, sfx |
| PALETTE | soon | world colour sets |
| ROSTER | soon | characters + innates |

The four stubs are on the bar and disabled on purpose. A pane bar with one item
on it does not tell anybody what the thing is going to be.

## THE MAP IS DERIVED, NEVER DRAWN

`lab/data/hubmap.json` is assembled from the real modules — `hubZones`,
`hubDistrictLayout`, `hearthwickPlan`, `hubStatueLayout`, `hubDressing`,
`crashSite`, `hubBuilder`, `hubBuildingCollision` — by
`tests/hubMapExport.test.ts`, and pinned there by deep equality. Nothing in
`lab/` authors a position. Move a house in the game and the test goes red until
the map moves with it.

```
# after any placement change
MAP_EXPORT_WRITE=1 npx vitest run --configLoader runner tests/hubMapExport.test.ts
```

The failure message says exactly that, so you never have to remember it.

**137 elements** across seven layers: districts 9, portals 12, gates 8, village
45, paths 16, statues 19, landmarks 28. Every element has a stable id —
`site:tailor`, `gate:frostGate`, `portal:ember:0`, `path:ring-lane`,
`claim:worked-orchard` — so an annotation's `ref` still means something after
the map is regenerated.

### Coordinates

World metres, `+x` east and `+z` south (so north is `-z`), which is what the
game modules use; the JSON restates it in its own `convention` block. `yaw` is
radians about `+Y` under THREE's `rotateY`, which sends a shape's local `+X` to
world `(cos yaw, -sin yaw)`.

The village is authored in its own frame and transformed on export:

```
world = (HEARTHWICK_PLACEMENT.cx + lz, HEARTHWICK_PLACEMENT.cz - lx)   # yaw PI/2
worldYaw = localYaw + PI/2
```

The exporter asserts its transform against `hearthwick.ts`'s own
`hearthwickHomeFootprints` rather than trusting it, and the selftest re-checks
the well: local `(-0.889, -2.443)` lands at world `(-84.443, 0.889)`, inside the
village plate.

### Two data files, one serialization

`data/hubmap.json` is the reviewable pinned artifact and what the node selftest
reads. `data/hubmap.js` is the same bytes wrapped in `globalThis.__WHOMP_HUBMAP__ =`
and is what the page actually loads, because `fetch()` cannot read a sibling
file over `file://` in any Chromium browser. Both are written from one
serialization in the same test run and both are pinned, so they cannot drift.

## NOT IN v1

Stated rather than silently missing. Everything below exists in the game and is
exported; none of it is on the map yet.

**Dressing and small props** — the whole class:

- lamp and lantern posts (`HUB_PLAZA_LAMP_RING` / `hubPlazaLampPositions`,
  `STARWATCH_LAMP_LOCAL`, `EMBER_LANTERN_LOCAL`, `FROST_LAMP_PQ`)
- the campfire keeper's bench and wood pile (`KEEPER_BENCH`, `KEEPER_WOOD_PILE`)
  and the hearth fire pit (`HUB_FIRE_PIT`)
- the shop signpost (`SHOP_SIGNPOST`)
- the hearth socket framing props (`HEARTH_PLINTH_PLATE`, the offering cairns)
- Hearthwick's boundary fence and its two cart-gate leaves (`HEARTHWICK_FENCE`,
  `hearthwickGateLeaves`)
- all scatter: rocks, tufts, cactus, scree, trees, motes, ground decals

**Other structure not yet layered in:**

- **Elevation.** The map is a plan projection at one level. The Ember floor sits
  at `-4.5` m and the Starwatch deck at `+5.0`; neither is drawn or shaded, so
  two elements that overlap on this map may be nine metres apart vertically.
- **Terrain shape.** District bounds are the authored rects. Frostreach's arm is
  its AABB (`FROST_ARM_BOUNDS`), not its real ribbed diagonal outline, and the
  plaza disc's actual island seam is not drawn.
- **Frostreach's contents** — the three dormant sockets (`FROST_SOCKET_PQ`) and
  the overlook.
- **Rim bridges** between the lobes.
- **Walk-up anchors / interactables** — shop, arsenal forge, plaque, trophy
  obelisk, daily obelisk (`hubBuilder`'s `ZONE` table), the hub hill and the
  launch pad.
- **The ghost pup zone, South Commons, the rim islets and the rooftop run.**
- **Interior furniture.** The four enterable rooms are drawn as the AABB of
  their own wall solids; nothing inside them is.
- **Villager routes** and NPC stations.
- **Statue identities** — the roster arc is 11 plinths, not 11 named characters.

## THE MAP PANE

| Key | |
|---|---|
| `V` | select — drag pans, click picks |
| `C` | circle — drag from the centre |
| `A` | arrow — drag tail to head |
| `F` | freehand |
| `T` | text note — click, then type in the side panel |
| `Z` | undo the last mark |
| `Esc` | clear the selection |
| `0` | fit the island |
| `1`–`7` | toggle a layer |

Wheel zooms, anchored on the cursor. No dialogs anywhere.

**Picking is smallest-area-first.** Every portal, statue and house stands inside
a district, so a first-hit-wins pick would only ever return `district:hearth`.
Click an element and the side panel shows its id, coordinates, shape and meta;
any mark made while it is selected carries `ref: "<element id>"`.

**THE TAPE** is the right-hand log: an ordered, timestamped record of the
session — tool switches, selections, marks, notes, undos, sends. It is a replay,
not a survivor list, so an undone mark keeps its line and gains an undo line.

## SEND TO FABLE

POSTs to `https://whomp-feedback.kevinmadson3.workers.dev/report`:

```jsonc
{
  "kind": "mapnote",
  "text": "{\"mapVersion\":…,\"buildSha\":…,\"createdAt\":…,\"marks\":[…],\"tape\":[…]}",
  "context": { "version": "lab-1", "ua": "map-lab" },
  "screenshotB64": "data:image/jpeg;base64,…"   // the current view, marks drawn
}
```

Marks are in world metres, rounded to millimetres. `buildSha` comes from
`/version.json` when the lab is served from a deploy root that publishes one,
and is `dev` otherwise — which is the honest label off a `file://` open or the
vite dev server. The worker caps `text` at 32k; if a session ever gets near it
the tape is dropped before any mark is, because the marks are the report.

Sent and failed states show in the side panel. **Copy JSON** and **download
PNG** are in the toolbar at all times and are the documented fallback on a
failed send. Clipboard access is origin-gated and `file://` has no origin, so
copy falls back to opening the JSON in a new tab.

## Why classic scripts and not module scripts

`type="module"` and `fetch()` are both blocked from a `file://` origin in every
Chromium browser, so a module-loaded lab would only ever open through a dev
server — and the brief for this tool is that double-clicking the file works.

Every `lab/*.js` file is therefore written with **no `import` or `export`
statements**, attaching to a `globalThis.WhompLab` namespace from an IIFE. A
file with no import/export is simultaneously a valid classic script (what
`index.html` loads) and a valid ES module (what `lab/selftest.mjs` imports into
node). One source of truth per file, no build step, no bundler, no dependency.

| File | |
|---|---|
| `index.html` | the page; loads five classic scripts in order |
| `lab.css` | hub-at-night, sampled from `hub.ts`'s `HUB_PALETTE` |
| `view.js` | the pan/zoom camera. Pure arithmetic, no DOM |
| `annotate.js` | marks, the tape, the send. **Pane-agnostic — keep it that way** |
| `map.js` | the MAP pane |
| `lab.js` | the shell: pane bar, mounting, keyboard routing |
| `selftest.mjs` | 45 headless checks |
| `data/hubmap.json` | GENERATED. Do not edit |
| `data/hubmap.js` | GENERATED. Do not edit |

`WhompLab.pane` is the mounted pane, on purpose: poking `WhompLab.pane.view` or
dumping `WhompLab.pane.annot.state` from the console is half of what makes a dev
tool a dev tool.

## Adding a pane

`annotate.js` holds no map concepts. A new pane hands it four seams —
`getScale()`, `hitTest(x, z)`, `getScreenshot()`, `onChange()` — and gets marks,
ids, notes, the tape, undo, the payload and the send for free. If you find
yourself wanting to put something map-shaped into `annotate.js`, that is the
signal it belongs in the pane instead.
