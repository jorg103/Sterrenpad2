// TitansPad Service Worker - minimaal, geen caching
// Zorgt dat de app altijd de nieuwste versie laadt

self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', event => {
  // Verwijder ALLE oude caches
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

// Altijd netwerk gebruiken, nooit cache
self.addEventListener('fetch', event => {
  event.respondWith(fetch(event.request));
});
