/* WHOMP service worker — app-shell precache + runtime caching.
 *
 * CHANNEL and VERSION are stamped by vite.config.ts on the
 * stable/0.6.1-0cb53bbe placeholders in dist/sw.js. The stamp makes a
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
 *      · version.json → network-only/no-store (the in-session update signal);
 *      · everything else (index.html, manifest, audio, icons)
 *        → network-first with cache fallback, so navigations always try for
 *        the newest deploy but the installed app still boots offline.
 *  - activate: drop only this channel's older caches. Never touch another
 *    channel namespace, even if a development shell hosts both on one origin.
 */

const CHANNEL = 'stable';
const VERSION = '0.6.1-0cb53bbe';
const CACHE_PREFIX = `whomp-${CHANNEL}-`;
const CACHE = `${CACHE_PREFIX}${VERSION}`;
const SHELL = ['./', './index.html', './manifest.webmanifest'];

async function openOwnCache() {
  try {
    return await caches.open(CACHE);
  } catch {
    return null;
  }
}

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
          keys.filter((k) => k.startsWith(CACHE_PREFIX) && k !== CACHE).map((k) => caches.delete(k)),
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
        const cache = await openOwnCache();
        const hit = cache ? await cache.match(req) : undefined;
        if (hit) return hit;
        const res = await fetch(req);
        if (res.ok) {
          try {
            await cache?.put(req, res.clone());
          } catch {
            // A cache quota/permission failure must not hide a valid response.
          }
        }
        return res;
      })(),
    );
    return;
  }

  // Build identity probe for long-running tabs. Never cache it: stale
  // version.json would hide the deploy that should trigger registration.update().
  if (url.pathname.endsWith('/version.json')) {
    event.respondWith(
      fetch(new Request(req, { cache: 'no-store' })).catch(() => Response.error()),
    );
    return;
  }

  // Shell + audio + icons — network-first, cache fallback.
  event.respondWith(
    (async () => {
      try {
        const res = await fetch(req);
        if (res.ok) {
          try {
            const cache = await openOwnCache();
            await cache?.put(req, res.clone());
          } catch {
            // A cache quota/permission failure must not hide a valid response.
          }
        }
        return res;
      } catch {
        const cache = await openOwnCache();
        const hit = cache ? await cache.match(req) : undefined;
        if (hit) return hit;
        // Offline navigation to a path we never cached → serve the shell.
        if (req.mode === 'navigate' && cache) {
          const shell = await cache.match('./index.html');
          if (shell) return shell;
        }
        return Response.error();
      }
    })(),
  );
});
