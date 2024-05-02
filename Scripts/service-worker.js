const CACHE_NAME = 'offline-cache';
const OFFLINE_URL = 'assets/off.html';

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function(cache) {
      return cache.add(new Request(OFFLINE_URL, {cache: 'reload'}));
    })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    fetch(event.request).catch(function() {
      return caches.match(OFFLINE_URL);
    })
  );
});
