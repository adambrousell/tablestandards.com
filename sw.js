// River Pointe Inn shift report — service worker
// Bump CACHE (e.g. rpi-v2) whenever you deploy a new rpi.html so devices refresh the cached shell.
const CACHE = 'rpi-v1';
const ASSETS = [
  '/rpi.html',
  '/manifest.webmanifest',
  '/icon-192.png',
  '/icon-512.png',
  '/apple-touch-icon.png'
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE).then((c) => c.addAll(ASSETS)).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (e) => {
  const req = e.request;
  if (req.method !== 'GET') return;                 // never intercept POST/DELETE (shift + notes saves)
  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return;  // let the Worker API, Google Fonts, weather.gov go straight to network

  const isShell = req.mode === 'navigate' || ASSETS.includes(url.pathname);
  if (!isShell) return;

  // Network-first so your frequent updates land when online; fall back to cache when offline.
  e.respondWith(
    fetch(req)
      .then((res) => {
        const copy = res.clone();
        caches.open(CACHE).then((c) => c.put(req, copy));
        return res;
      })
      .catch(() => caches.match(req).then((m) => m || caches.match('/rpi.html')))
  );
});
