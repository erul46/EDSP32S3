const CACHE_NAME = 'elkasari-dsp-s3-v1';
const CORE_ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './dlms240-192.png'
];

// Install: pre-cache aset inti secara aman (tidak gagal meski salah satu nama file berbeda)
self.addEventListener('install', (event) => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) =>
      Promise.allSettled(
        CORE_ASSETS.map((url) =>
          fetch(url, { cache: 'no-cache' })
            .then((res) => (res && res.ok ? cache.put(url, res) : null))
            .catch(() => null)
        )
      )
    )
  );
});

// Activate: bersihkan cache versi lama
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys.map((key) => (key !== CACHE_NAME ? caches.delete(key) : null))
      )
    ).then(() => self.clients.claim())
  );
});

// Fetch: Network-First untuk same-origin agar update otomatis saat online,
// lalu fallback ke cache lokal saat berada di lapangan tanpa sinyal internet.
self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET') return;

  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return;

  event.respondWith(
    fetch(req)
      .then((res) => {
        if (res && res.status === 200) {
          const clone = res.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(req, clone));
        }
        return res;
      })
      .catch(() =>
        caches.match(req).then((cached) => {
          if (cached) return cached;
          if (req.mode === 'navigate') {
            return caches.match('./index.html').then((f) => f || caches.match('./'));
          }
          return new Response('Offline', { status: 503, statusText: 'Offline' });
        })
      )
  );
});