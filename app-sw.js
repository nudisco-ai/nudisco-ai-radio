/* Online-first app shell, no audio or playlist caching. Scope: app.html only. */
'use strict';
const name='nudisco-radio-app-shell-v23';
const shell=['app.html','app.css','app.js','app.webmanifest','app-icon-180.png','app-icon-192.png','app-icon-512.png','player.js','player.css','receiver.webp'];
const paths=new Set(shell.map(p=>new URL(p,self.location.href).pathname));
self.addEventListener('install',e=>e.waitUntil(caches.open(name).then(c=>c.addAll(shell.map(p=>new Request(new URL(p,self.location.href),{cache:'reload'}))))));
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k.startsWith('nudisco-radio-app-shell-')&&k!==name).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',e=>{
  const r=e.request,u=new URL(r.url);
  if(r.method!=='GET'||u.origin!==self.location.origin||!paths.has(u.pathname))return;
  e.respondWith((async()=>{
    const cache=await caches.open(name);
    try{const response=await fetch(r,{cache:'no-cache'});if(response.ok)await cache.put(r,response.clone());return response;}
    catch{const hit=await cache.match(r,{ignoreSearch:true});return hit||Response.error();}
  })());
});
