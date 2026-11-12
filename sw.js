'use strict';

/* Qalcurate service worker — caches the app shell so the UI itself loads
   offline. Recording data lives in IndexedDB (handled in app.js), not here. */

const CACHE_NAME = 'qalcurate-shell-v7';
const CORE_ASSETS = [
  './',
  './index.html',
  './base.css',
  './style.css',
  './app.js',
  './manifest.json',
  './assets/icons/icon-192.png',
  './assets/icons/icon-512.png',
  './assets/icons/icon-512-maskable.png',
  './assets/icons/apple-touch-icon.png',
  './assets/icons/favicon-32.png',
  './assets/brand/qalcurate-logo-white.svg',
  './assets/brand/qalcurate-mobile-dark-v2.png',
  './assets/brand/favicon.svg',
  './assets/fonts/InterVariable.woff2',
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then((cache) => cache.addAll(CORE_ASSETS))
      .then(() => self.skipWaiting())
      .catch(() => {
        /* if precaching a font/CDN asset fails, don't block install */
      })
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  const req = event.request;

  // Never intercept non-GET requests (e.g. the POST to the configured webhook) —
  // those must always go straight to the network.
  if (req.method !== 'GET') return;

  let url;
  try {
    url = new URL(req.url);
  } catch (e) {
    return;
  }

  const isSameOrigin = url.origin === self.location.origin;

  // HTML, scripts, styles and the manifest: network first so a redeploy is
  // picked up on the next start; the cache is only the offline fallback.
  const isShellCode =
    req.mode === 'navigate' || /\.(?:html|js|css|json)$/.test(url.pathname) || url.pathname.endsWith('/');
  if (isSameOrigin && isShellCode) {
    event.respondWith(
      fetch(req, { cache: 'no-cache' })
        .then((res) => {
          if (res && res.ok) {
            const clone = res.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(req, clone));
          }
          return res;
        })
        .catch(() => caches.match(req).then((cached) => cached || caches.match('./index.html')))
    );
    return;
  }

  if (isSameOrigin) {
    // Fonts, icons, images: cache-first for instant offline load, refresh cache in background.
    event.respondWith(
      caches.match(req).then((cached) => {
        const networkFetch = fetch(req)
          .then((res) => {
            if (res && res.ok) {
              const clone = res.clone();
              caches.open(CACHE_NAME).then((cache) => cache.put(req, clone));
            }
            return res;
          })
          .catch(() => cached);
        return cached || networkFetch;
      })
    );
    return;
  }

  // Cross-origin (fonts, etc.): network-first, fall back to cache when offline.
  event.respondWith(
    fetch(req)
      .then((res) => {
        if (res && res.ok) {
          const clone = res.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(req, clone));
        }
        return res;
      })
      .catch(() => caches.match(req))
  );
});
