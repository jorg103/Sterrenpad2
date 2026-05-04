// Sterrenpad Service Worker
// Zorgt dat de app ook zonder internet werkt!

const CACHE_NAME = 'sterrenpad-v1';
const ASSETS = [
  '/index.html',
  '/manifest.json',
  '/icon-192.png',
  '/icon-512.png',
  'https://fonts.googleapis.com/css2?family=Fredoka+One&family=Nunito:wght@400;600;700;800&display=swap'
];

// Installeer: sla alles op in de cache
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(ASSETS).catch(() => {
        // Fonts kunnen falen zonder internet bij eerste install, dat is OK
        return cache.addAll(['/index.html', '/manifest.json']);
      });
    })
  );
  self.skipWaiting();
});

// Activeer: verwijder oude caches
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k))
      )
    )
  );
  self.clients.claim();
});

// Fetch: serveer uit cache, val terug op netwerk
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(cached => {
      if (cached) return cached;
      return fetch(event.request).then(response => {
        // Sla nieuwe responses op in cache
        if (response && response.status === 200) {
          const clone = response.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
        }
        return response;
      }).catch(() => {
        // Geen internet én niet in cache: toon de app zelf
        return caches.match('/index.html');
      });
    })
  );
});
