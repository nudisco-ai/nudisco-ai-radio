/* Retirement script for previously registered Radio app shell workers only. No caching, no fetch handler. */
'use strict';
self.addEventListener('install', event => event.waitUntil(self.skipWaiting()));
self.addEventListener('activate', event => event.waitUntil((async () => {
  try { await Promise.all((await caches.keys()).filter(k => /^nudisco-radio-app-shell-v\d+$/.test(k)).map(k => caches.delete(k))); }
  finally { await self.registration.unregister(); }
})()));
