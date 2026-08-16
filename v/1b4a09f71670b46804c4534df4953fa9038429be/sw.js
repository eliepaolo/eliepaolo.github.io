// Service Worker intentionally disabled.
// Caching is handled via versioned path deploy.
// This file exists only to prevent old service worker registrations.

self.addEventListener("install", (event) => {
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener("fetch", () => {
  // Do nothing. Always let network handle requests.
});