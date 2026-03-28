self.addEventListener("install", e=>{
caches.open("isky").then(cache=>{
cache.addAll(["index.html"]);
});
});
