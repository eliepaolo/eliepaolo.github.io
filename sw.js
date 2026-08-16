// Kill switch: this file is deployed to the site root so it can replace
// ANY previously installed service worker (including old cache-first
// versions), even though the app itself is served from /v/<sha>/ paths.
// Cache busting is handled entirely via those versioned paths, so no
// service worker is needed going forward. This one clears old caches,
// reloads any open tabs so they pick up fresh content immediately, then
// removes itself.

self.addEventListener("install", () => {
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) => Promise.all(keys.map((key) => caches.delete(key))))
      .then(() => self.clients.claim())
      .then(() => self.clients.matchAll({ type: "window" }))
      .then((clients) =>
        Promise.all(
          clients.map((client) => client.navigate(client.url).catch(() => {}))
        )
      )
      .then(() => self.registration.unregister())
  );
});