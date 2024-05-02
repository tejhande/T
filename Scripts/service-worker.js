const cacheName = 'offline-cache';
const offlineURL = 'assets/off.html';

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(cacheName)
      .then((cache) => cache.add(offlineURL))
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        if (response) {
          return response;
        }
        return caches.match(offlineURL);
      })
  );
});