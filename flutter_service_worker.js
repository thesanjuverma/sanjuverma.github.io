'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "1cab2a196520047b0a3752b7624e43af",
"version.json": "009c9e65172e010890f7f65fde438006",
"index.html": "740aa97026a3c804d93df31af164232c",
"/": "740aa97026a3c804d93df31af164232c",
"main.dart.js": "308577d4d36de53d48888043d0629457",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"favicon.png": "5abeb06b80cbc6a257751b10b7a560aa",
"main.dart.mjs": "017e1811cf8e4cf0cf2bd456a4f6764b",
"icons/favicon-16x16.png": "5abeb06b80cbc6a257751b10b7a560aa",
"icons/mstile-310x310.png": "85792a870f56945ca33ba2f2669355c1",
"icons/mstile-144x144.png": "193ae5a9af3b82090aab609d2c939d25",
"icons/safari-pinned-tab.svg": "c7bf3fbab41e1a3093a19b486d70cb40",
"icons/favicon.ico": "2d0eb1b70647ce8fab1f08ef04558ec3",
"icons/android-chrome-192x192.png": "0e830ee304f6bc2aee393972a933033d",
"icons/apple-touch-icon.png": "268643f53b325554b4a843ab95aa0e0f",
"icons/mstile-70x70.png": "3985b4608959d7defa9affba291a28da",
"icons/mstile-310x150.png": "d20044f9106d48888340d4d51b1ece11",
"icons/android-chrome-512x512.png": "d56f1cf2eb86c39ae36f4e8ee3fce8b9",
"icons/mstile-150x150.png": "4e38d8419423982317f36bb6566dfcef",
"icons/browserconfig.xml": "a493ba0aa0b8ec8068d786d7248bb92c",
"icons/favicon-32x32.png": "2cf6cc0306bd584155a68aaa05456fff",
"manifest.json": "5f60098caa6a557af5f9f96f73df4bc2",
"main.dart.wasm": "f4e6ea5fc83284e3880fbb625878ac0f",
".git/config": "f2504bd16b94b26002d819e0d8036a85",
".git/objects/0d/16100cdd45a0be453110882d0b0605cb796270": "d9838a1e23c743e94574d0b7d6b89e21",
".git/objects/0d/f7dd6cb6b2781cc35fc3ea9919147ae32b3d9c": "34f4f94431135c5772b3d24ec6aaac95",
".git/objects/59/62efb2dffef4c259bda261b128fcab4b659c34": "11e1a7683fedc73b6a0da57ee3c6a112",
".git/objects/66/cc3f7c557f0f202a3bbc2939d8799b7c770b94": "0f5f906f89ed29080d63e1efdfdc7b95",
".git/objects/50/280a9a54598e93e7b6e896af4a6f37b4847ac3": "fdac47b89bf83f76867e3165e3776694",
".git/objects/68/dc59c3de8f4cfb3b7280c96188522c7297eafc": "0de9c94a1ba9504ad545ab0646366410",
".git/objects/68/34881a4c383da49fb7284cf4d5c3066a3f3263": "a10f647b7f1b7d54358ec3ecbc31c0bd",
".git/objects/57/3fcd1de0e20b2f875ba26cb50b488db250bbb0": "0ae8f83f3da93eebbdaf6f3de6b2dd7e",
".git/objects/57/cd7d463a7bd6bccf4969a277e9d58149536a70": "a3eda80420cfa0a3298eeaebecb1b172",
".git/objects/6f/50fcbd01697098ce6b4fea09bf2e08ebe133d4": "6033b71911519fd9059533e742698ecd",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "4f8558ca16d04c4f28116d3292ae263d",
".git/objects/35/086542f511c3f324e6b69be0655d0c03a07a31": "144f1ceb8fe89d1d29c089216b3f5cd5",
".git/objects/94/0552788a01d57fe3e199a650a6ab0c9ff834df": "7c2b28bbb89c6227d22e123a8ad636bc",
".git/objects/5a/a03dfa65a494becda7a16c22ff945a4218241c": "cd3d7a188428b737bfa491239ee1b8ec",
".git/objects/9c/a8e9fb656a36d317e2fd65529a51afcb6ee238": "61ba71dcf6665b8d667aca05158378f7",
".git/objects/d0/23371979cf1e985205df19078051c10de0a82d": "700b71074bad7afee32068791dec7442",
".git/objects/d0/7a6ba1581f2af9a5110abd5e6879860eb7e1c8": "d77bb4945ac80bae6bcf6e4dd8a0af1a",
".git/objects/b3/cf44c8326c759620dd565feec4bfa8b3d8cb4c": "82a41a37f161150a401a8f7a394d83b1",
".git/objects/b3/930d0f047184047cb81d620436d91653438b8b": "9d09645a75a5ad76ac1f24061e4d2c60",
".git/objects/da/fd65422747502c19b5c74b4230282644d2169c": "d8a62caf99a372ff6c7692e143787ce3",
".git/objects/d8/9711af201994fb8b714d0c54ad4842b0f6a829": "7d95d65164a85a7158bf7009074e65b8",
".git/objects/c9/60c9eafa2a875595648c5d3c0af7e1d7b20957": "bf478c08e684e2b3efb40981097fb986",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/ca/8482c88c44dcfdf9ead9d3726df9574ac9775c": "81cbf504c8b90bc81a07b514349a4ac5",
".git/objects/c6/e2c573bce6324f345757aada2488ff301ed3d9": "1631be3a0a13f2c390ed0ad85d49491d",
".git/objects/7c/09d499f23e8c9cfadbd067e09e62b423cd8b4a": "4f5d6ea007527788d254cd3ceeb9b8a8",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/1a/80bac4da4afbfc638ac3213eba5a43987886f6": "e0f57b60bbdef9a2d85770e792c0b68a",
".git/objects/8f/638e4122c1503b2eb43908e84cf77f253fb06a": "4485132de63869f89b23f5ca36c093b9",
".git/objects/8f/cfc4c950da22289d73bf4854e78b27c1e2dcd0": "814998e0c36771a5145f81c49abd1a80",
".git/objects/26/2ba22dcce0abb1d72a1d33ac4a894b7cb459b8": "32fdcdf5bf4dae51426c469fb13bceca",
".git/objects/21/8efc477d945d4df7eb33d47992be6751db072a": "a5c62fd359c9a399e63781b8c52fef52",
".git/objects/81/4bc64977ddbafcc7e94d7cf7aa44680c7be7cf": "ad7f29c44fd89b892f93bd9cd83795dd",
".git/objects/44/a8b8e41b111fcf913a963e318b98e7f6976886": "5014fdb68f6b941b7c134a717a3a2bc6",
".git/objects/44/5f9441416f05fe1489c06ebd4ae32f2b2abef5": "270ecb8c0635415ab73132e09b2a41b2",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "5f118419157d9534688915220cc803f7",
".git/objects/6e/cfdaf4cb6081a99ee6c83b172155899f2ff343": "d2691f7c8175a7770266142a159a359a",
".git/objects/65/c4ced66692546a6f41e635560995020c1d8194": "4520e978d60e4aca86c7ad91a6514556",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "ab6f2f6356cba61e57d5c10c2e18739d",
".git/objects/98/d6a8ce7de462ec59f766c66c8a37dc875c542f": "759d5c48d0652ea22df4df1d5ca93b74",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "ecbde07c564dabbec0f249821051b8af",
".git/objects/08/32d0db2def1613c1c45aa4fe9156a1c6b7d589": "e05df183e5eeaddf39672a2516f9c41d",
".git/objects/01/850b0744ef26882064608224a9773a21f4034a": "3ba1c4f13545913f004876fc70274471",
".git/objects/6c/4d5c535747269f322625d60877f594eccc7900": "ffccb64f4b6512e24103a94d598092dc",
".git/objects/39/c1d3dd28bd9607c5d157120141b6e3a77a5a62": "0d9db298e5812e088e5c552e5f7216af",
".git/objects/63/2ea81f052b45185dd7effdc299adfc5dc5ca4f": "6584551ad792ce1a6b354798e9084701",
".git/objects/90/268395c1f5f1f3e7548f44c82064b4190ae274": "b8289ea9bf7fc6a6cef24b81f443c2fd",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "fc109675cdf1233dd6599a4c3c0a7a69",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/dd/34b007f9e49bd877589675525a7b5c64674120": "fede1439dc06855072b113d8b19f7673",
".git/objects/f0/9aa8cb827b9115b6911dedb681e2a40146b11a": "ebba2946e23821e40303bd21b4152d96",
".git/objects/f0/77b6c1abe49ac8017c2ce138c8712f1f5bab2c": "794ed720c46f3d0dd559034dfc92e7c8",
".git/objects/fa/01e917987523976fc9dc4c1af689643f56ba6a": "2a69900f3484daed3a1179e4eb0426e8",
".git/objects/c5/4a194d797ebb0957956723ce611d2c214be84d": "9e65c8e43c87b4b88381b5d02af8284b",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "36a4a870d8d9c1c623d8e1be329049da",
".git/objects/4f/4e73795f7d911cfbfc055480cffd511c213012": "13822fb82bacc475ff659edc23a55bc8",
".git/objects/15/ac43c9d786533f9948f89b6210039e8dc71995": "d511451dabf90c8e93352e1fa06552ab",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/82/d38744b2470aef3097c310226be38fe2e8b201": "f549f36fcedd22fb92daee3afc686956",
".git/objects/2e/5d657b528b02a54e0ae65354b3ac5d78dbde8d": "33388f2413e4fce3176e464ab751d910",
".git/objects/13/06b46760feffb193e0b2b756f6798c763e2b25": "284e160f36f3cff0572975b3d53e2c89",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "ee4138f19821c90a06e09bde3fc1e6ed",
".git/logs/refs/heads/main": "ee4138f19821c90a06e09bde3fc1e6ed",
".git/logs/refs/remotes/origin/main": "4423022da3eab7c20342f21f7d45f339",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "d742e34cbe815c646f44f6f0379a0690",
".git/refs/remotes/origin/main": "d742e34cbe815c646f44f6f0379a0690",
".git/index": "f585b131d41fa06f2ea264e5a9fbabd7",
".git/COMMIT_EDITMSG": "f846fda66964c9ee4c47dba32c0442f9",
"assets/AssetManifest.json": "da8692e63c24e8c5df2de2d25b742921",
"assets/NOTICES": "50f48b1e58f5cab3641b079c814249cb",
"assets/FontManifest.json": "a700c9d49dad08a34825431753736022",
"assets/AssetManifest.bin.json": "097be9d37d4d80fcb75c578d0c5c403d",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "08f872e0af809219816d7b0bfb1fb2e5",
"assets/fonts/MaterialIcons-Regular.otf": "0db35ae7a415370b89e807027510caf0",
"assets/assets/images/background.svg": "6bb930c2d8c7a168255a5ad125e18332",
"assets/assets/fonts/GloriaHallelujahRegular.ttf": "88f5925529f9048eb49ac81f5360a2a3",
"assets/assets/fonts/BubblegumSansRegular.ttf": "53260708b907e34954e9bc59abc9e521",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"main.dart.wasm",
"main.dart.mjs",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
