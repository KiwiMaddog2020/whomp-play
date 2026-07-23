/* WHOMP service worker — app-shell precache + runtime caching.
 *
 * VERSION is stamped per deploy by bin/deploy-play.sh (sed on the
 * 0.4.0-aa745d2 placeholder in dist/sw.js). The stamp is what makes a
 * new deploy's sw.js byte-different, which is what makes the browser install
 * a NEW worker; that worker deliberately parks in `waiting` (NO skipWaiting
 * on install) until the page's 'UPDATE READY — RESTART' toast posts
 * SKIP_WAITING (src/core/pwa.ts). Swapping caches mid-session under a
 * running game is how saves and lazy chunks get corrupted; parking is the
 * feature, not a bug.
 *
 * Strategy (per the ratified spec):
 *  - install: precache the app shell (./, index.html, manifest).
 *  - fetch, same-origin GET only:
 *      · assets/ (Vite content-hashed, immutable) → cache-first;
 *      · everything else (index.html, version.json, manifest, audio, icons)
 *        → network-first with cache fallback, so navigations always try for
 *        the newest deploy but the installed app still boots offline.
 *  - activate: drop every whomp-* cache that isn't this version's.
 */

const VERSION = '0.4.0-aa745d2';
const CACHE = `whomp-${VERSION}`;
const SHELL = ['./', './index.html', './manifest.webmanifest'];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE).then((cache) => cache.addAll(SHELL)),
  );
  // NO skip-waiting call here — see header. The page decides when to swap.
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) =>
        Promise.all(
          keys.filter((k) => k.startsWith('whomp-') && k !== CACHE).map((k) => caches.delete(k)),
        ),
      )
      .then(() => self.clients.claim()),
  );
});

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') self.skipWaiting();
});

self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return;

  // Vite content-hashed build output — immutable, cache-first.
  if (url.pathname.includes('/assets/')) {
    event.respondWith(
      (async () => {
        const hit = await caches.match(req);
        if (hit) return hit;
        const res = await fetch(req);
        if (res.ok) {
          try {
            const cache = await caches.open(CACHE);
            await cache.put(req, res.clone());
          } catch {
            // A cache quota/permission failure must not hide a valid response.
          }
        }
        return res;
      })(),
    );
    return;
  }

  // Shell + version.json + audio + icons — network-first, cache fallback.
  event.respondWith(
    (async () => {
      try {
        const res = await fetch(req);
        if (res.ok) {
          try {
            const cache = await caches.open(CACHE);
            await cache.put(req, res.clone());
          } catch {
            // A cache quota/permission failure must not hide a valid response.
          }
        }
        return res;
      } catch {
        const hit = await caches.match(req);
        if (hit) return hit;
        // Offline navigation to a path we never cached → serve the shell.
        if (req.mode === 'navigate') return caches.match('./index.html');
        return Response.error();
      }
    })(),
  );
});
