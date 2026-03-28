self.addEventListener("install", e=>{
caches.open("isky").then(cache=>{
cache.addAll(["Index.html"]);
});
});

self.addEventListener("fetch", e=>{
e.respondWith(
caches.match(e.request).then(r=>r||fetch(e.request))
);
});
