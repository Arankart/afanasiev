'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "91cb1bfb7c0a804b31cf91894e919fad",
"assets/assets/images/apd/apd_behindScene_01.png": "6cf4a10909237fbd17225f53e98c1734",
"assets/assets/images/apd/apd_behindScene_02.png": "861692029ee1902d88cc989ed77b6054",
"assets/assets/images/apd/apd_styleframe_01.jpg": "8f75afd0b46f94ec5f0db9257f949db5",
"assets/assets/images/apd/apd_styleframe_02.jpg": "bd377811e9078aa0a294b4af76e349f3",
"assets/assets/images/apd/apd_styleframe_03.jpg": "881fe4bbf088696212544209c1675234",
"assets/assets/images/apd/apd_styleframe_04.jpg": "ffd0cda94731853c9923afd6b62ec757",
"assets/assets/images/apd/apd_styleframe_05.jpg": "04363846878a2c5d963c5a422c4db80d",
"assets/assets/images/apd/apd_styleframe_06.jpg": "5fe27bbb81c637964c5205662ecd0529",
"assets/assets/images/apd/apd_styleframe_07.jpg": "f2f0c20122d291ec605ade19347d07bd",
"assets/assets/images/avatarka.png": "4107911394a325a5dc49719d0863302a",
"assets/assets/images/eg/eg_image_site.png": "ac6a5a1ee698ead7e515397d9ffd8131",
"assets/assets/images/headphones/headphones_styleframe_01.jpg": "835a095ba07e12d14f870e003124edc8",
"assets/assets/images/headphones/headphones_styleframe_02.jpg": "e5fed4ffe937184b853c476025b126ad",
"assets/assets/images/headphones/headphones_styleframe_03.jpg": "27adccbbf534054ce3e5802d791503c8",
"assets/assets/images/headphones/headphones_styleframe_04.jpg": "c6d0d01760a819e9a8a3de8ca040acbf",
"assets/assets/images/headphones/hp_storyboard_page01.jpg": "462e59728b776dbcdda3b7d775a30b9e",
"assets/assets/images/headphones/hp_storyboard_page02.jpg": "649f09fcf5cbd11c1ba65c7feb55074c",
"assets/assets/images/headphones/hp_storyboard_page03.jpg": "71b0745f9b19ce52f001ac41a83156f4",
"assets/assets/images/keys.png": "e86855a849315df302697cbc1ff2c6a9",
"assets/assets/images/password.png": "e7808b61ca764b3872d02cdd27dfdd09",
"assets/assets/images/pomodorchik/interface.png": "dbc487adb94a8f027d2658b9589a3a78",
"assets/assets/images/pomodorchik.png": "a3ea5d992a54600ec736451f9f5cdb2d",
"assets/assets/images/sber/sber_styleframe_01.jpg": "97f775aedf6ff0324271e27ad24f404d",
"assets/assets/images/sber/sber_styleframe_02.jpg": "17dfa6050955659cdea233f096868536",
"assets/assets/images/sber/sber_styleframe_03.jpg": "16107f44f316055d3691452bc14cde32",
"assets/assets/images/sber/sber_styleframe_04.jpg": "425b1f9e858bf58449cc3e4b5cdbcad0",
"assets/assets/images/tabata/image_site.png": "2f1a3d8e536699a71fcfde5d1b2a4c11",
"assets/assets/images/timer.png": "ee24d05858165c647ad9d865b545ebaf",
"assets/assets/images/ubrir/ubrir_behindScene_01.jpg": "183212c0157448880276fe33ebb4e474",
"assets/assets/images/ubrir/ubrir_behindScene_02.jpg": "853032a63fdb03e9101aff6e4f49dd55",
"assets/assets/images/ubrir/ubrir_refs_01.png": "56e23445ed1a921f8d9cdea85f773660",
"assets/assets/images/ubrir/ubrir_storyboard.jpg": "acb720dec8f555514efc670162f1f4ec",
"assets/assets/images/ubrir/ubrir_styleframe_01.jpg": "510264c0d65fe2683eec86bd3832fc0d",
"assets/assets/images/ubrir/ubrir_styleframe_02.jpg": "5bfadcb6d85025c2e7a7dc8b1cbf7adc",
"assets/assets/images/ubrir/ubrir_styleframe_03.jpg": "d9de6f6e27f990641454f047f31d953e",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "22eb4c43f1ae68c4b3cdf9b699d4635c",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/youtube_player_iframe/assets/player.html": "dc7a0426386dc6fd0e4187079900aea8",
"assets/shaders/ink_sparkle.frag": "5dcc6206b32d2298a422964fe0eae629",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"icons/Icon-192.png": "091bfd41bb93e3f67df3d414ea59b72d",
"icons/Icon-512.png": "4b6ce5530e7d678f61e19c05b22f741d",
"icons/Icon-maskable-192.png": "091bfd41bb93e3f67df3d414ea59b72d",
"icons/Icon-maskable-512.png": "4b6ce5530e7d678f61e19c05b22f741d",
"index.html": "16e4d68e47b798e0297dca75e8869987",
"/": "16e4d68e47b798e0297dca75e8869987",
"main.dart.js": "538ba6c25decdfdef8c040139da5a28a",
"manifest.json": "47a196d493cf7f9d50a9816ef20b4abe",
"version.json": "4a7e0e9d633080f5c87ca527ed90d4ee"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
