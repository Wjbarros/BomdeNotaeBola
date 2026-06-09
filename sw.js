const CACHE_NAME = 'bom-de-nota-v2';
const assets = [
  '/',
  '/index.html',
  '/painel.html',
  '/cadastro.html',
  '/recuperar.html',
  '/nova-senha.html',
  '/style.css',
  '/Imagens/Capa.jpg',
  '/Imagens/Fundo_Tela.png',
  '/Imagens/Banner.png',
  '/Imagens/icon-192.png',
  '/Imagens/icon-512.png',
];
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(assets);
    })
  );
});
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});