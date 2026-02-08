const CACHE_NAME = 'vdc-safety-v1.26';
const ASSETS = [
  './index.html',
  './manifest.json',
  './ppe.dat',
  'https://cdn.jsdelivr.net/npm/onnxruntime-web/dist/ort.min.js'
];

// Cài đặt và lưu trữ vào Cache
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
});

// Trả về dữ liệu từ Cache khi không có mạng
self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((res) => res || fetch(e.request))
  );
});
