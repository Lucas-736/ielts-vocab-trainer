/* 雅思刷词 PWA Service Worker */
const CACHE = "ielts-vocab-v6";
const ASSETS = [
  "./",
  "./index.html",
  "./words.js",
  "./manifest.webmanifest",
  "./icons/icon-192.png",
  "./icons/icon-180.png",
  "./icons/icon-512.png"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE).then((cache) => cache.addAll(ASSETS)).then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

/** 页面与代码走「网络优先」，图标等静态资源走「缓存优先」 */
function isAppShell(req) {
  if (req.mode === "navigate") return true;
  const path = new URL(req.url).pathname;
  return /\.(html|js|webmanifest)$/.test(path) || path.endsWith("/");
}

function putInCache(req, res) {
  if (res && res.ok && new URL(req.url).origin === self.location.origin) {
    const clone = res.clone();
    caches.open(CACHE).then((cache) => cache.put(req, clone));
  }
  return res;
}

self.addEventListener("fetch", (event) => {
  const req = event.request;
  if (req.method !== "GET") return;

  if (isAppShell(req)) {
    // 网络优先：发版后刷新一次即可看到新内容；断网时回落到缓存
    event.respondWith(
      fetch(req)
        .then((res) => putInCache(req, res))
        .catch(() => caches.match(req).then((c) => c || caches.match("./index.html")))
    );
    return;
  }

  // 其余资源：缓存优先 + 后台更新
  event.respondWith(
    caches.match(req).then((cached) =>
      cached || fetch(req).then((res) => putInCache(req, res))
    )
  );
});
