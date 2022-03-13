self.addEventListener("install", e =>{
    e.waitUntil(
        caches.open("static").then(cache =>{
            return cache.addAll(["./","./style.css","./img/author.png"]);
        })
    )
});

self.addEventListener("fetch", f=>{
    f.respondWith(
        caches.match(f.request).then(response =>{
            return response || fetch(f.request);
        })
    )
});