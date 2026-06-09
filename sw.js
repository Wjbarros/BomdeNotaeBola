const CACHE_NAME = 'bom-de-nota-v1';
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
];

// Instalação e Cache dos arquivos
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(assets);
    })
  );
});

// Resposta mesmo em modo Offline
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});