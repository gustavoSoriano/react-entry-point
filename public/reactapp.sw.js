let	identification = 'reactapp.sw'
let	version        = 1
let	currentId      = identification	+ '-' + version
let	lastId         = identification + '-' + (version - 1)
let	urls           = ['/', 'static/js/bundle.js', '/static/js/1.chunk.js', '/static/js/main.chunk.js', 'favicon.ico', 'manifest.json', 'favicon.png', 'splash.png']

self.addEventListener("install", () => {
    console.log(`ServiceWorker v. ${identification}-${version} - Instalado com sucesso!`)
}) 

self.addEventListener("activate", () => {
    caches.open(currentId).then(cache => {
        cache.addAll(urls).then( () => {
            let [ _name, _version ] = lastId.split("-")

            for(let i = _version; i>=0; i--) 
            {
                caches.delete( `${_name}-${i}` )
                console.log( 'delete: ', `${_name}-${i}` )
            }
        })
    })
})

self.addEventListener("fetch",	event => {
    event.respondWith(
        caches.match(event.request).then( fileCache => {
            return fileCache ? fileCache : fetch(event.request)
        })
    )
})