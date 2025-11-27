self.addEventListener("install", event => {
  self.skipWaiting();
});

self.addEventListener("activate", event => {
  // PWA ready
});

self.addEventListener("fetch", event => {
  // Required for PWA install prompt
});
