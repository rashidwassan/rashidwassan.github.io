'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "c442cf15f61f5f4eb0931ac9eb5e50d6",
"index.html": "60d311fbab6038f78be28948e87811ad",
"/": "60d311fbab6038f78be28948e87811ad",
"loader.css": "3ed0540af717cd56f01a37a08f714759",
"main.dart.js": "3885e1f62a495ec55032aaa30d3d01be",
"README.md": "a7f801b4c2190dfe4ec4b0a55e45cb1e",
"favicon.png": "6c3a2a8bab9155811014ca68143566a7",
"_config.yml": "932865e374757d33e321eeb2d5e88b6b",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "76858bfccb016815b5d8257df072ea5f",
".git/config": "7f8d60da42ca14660c888341a046d194",
".git/objects/0c/cf12e58fb4a80706936e656adb5294046ec87c": "3130ce3a3736f6a00ce5b0adc729f3c0",
".git/objects/57/f68b08816fd4ead9ba3cf71372988fb7e74a2b": "2efe5f2db59ffb5991801bc5634e559f",
".git/objects/69/f871cf090ef2f37aa01836248e0b11cf4361be": "603a22cd4b002e90c791905ed2ba4fc5",
".git/objects/93/c5c2b43408097cd0731725f64b830326e4aba4": "be1bc3e11d0c0b656515e7f4197a90d5",
".git/objects/34/bcd41115f059607b1ee37ab3fa13ec78a89e12": "150e0fdd326568ca9afba6eff2fa8e9c",
".git/objects/a3/275b6c4d200b1937d28f967c6e4947b196e8dd": "ebcfd2f34b203beff47096d8e9d6585f",
".git/objects/b2/4cec5d79aee9b9cd9e98063123d2ea4ee41a9d": "c2a02fff32ff43fb936d82135930dd04",
".git/objects/d0/40b9997820a6fad050ecb2a82ec48f85ed6bfe": "e4a51c90619056ab0871a78c733bd9d2",
".git/objects/ab/3cfb8a5707fa1470eed99cd7ac38f9ace7a15d": "abdecd6f093e025f22974158e0e4e57a",
".git/objects/f2/261cddbad427d0061948c6855ce27c852042d8": "8b740fbee40dfd98ef632456407adc5c",
".git/objects/f5/7c8a8022cfcec3a6f7fb465472bdd0b2b17ded": "00eba444274792493657e4f5a3723522",
".git/objects/c8/5cc743207ce580a3d4047c3198685f369e3877": "96524bb8ddbed163c4cc1019092f004f",
".git/objects/fb/dcc7731cd109ec5e9ad819dfac5e50925fdef1": "b8ce98ec65dcd147260107f147b24778",
".git/objects/pack/pack-28fb587fd12c934fab7b8b523f73804627e785cb.pack": "328be3486be696b4deae2b6d861b7a47",
".git/objects/pack/pack-28fb587fd12c934fab7b8b523f73804627e785cb.idx": "9611d3aba53895d3dd165f461a9c406f",
".git/objects/87/7d1c78d52a99bb6fb16fe42acee3a4ab335a75": "a71e57b7bf493da858a069e67605ac91",
".git/objects/28/4fca53c804c6379141e83a64ece30c208151a9": "7aaff0d3c87cb1d31e3d93a5111c4114",
".git/objects/8a/96890a5ab1489bf1ce0568d36d557476409e0f": "2368c466c462fa7c400f8b565c24713a",
".git/objects/4c/506d26746758075c51a5946e7e1db8d597a487": "96c8e4cdc8b764ada196671229d30d77",
".git/objects/4c/5aff64613879dacc58eab5ccc5873fc4e2c15d": "cc87d35130d4164c79d7625f603f1760",
".git/objects/75/41dd04c0ab60b9f19683a5a243f0ed37c5bf9f": "64ab79477c7448548281d6f6aabdd70d",
".git/objects/6e/47e1d15562328733cad2e25311b28d7b8d5b6d": "2d11c5ace5ff6671aed96c2f38fccba2",
".git/objects/3f/cba4d87b65e4b7c4871cc4160aca53b5c76c10": "2120f12af744d26ced53c3e29ffe7c6f",
".git/objects/08/19264144d6a189aac54036e2a359fdb7696dbf": "92a1272697ebd8e8828980bccd9688af",
".git/objects/0a/c83ee8c81b5932b09512392408cbcc583fe9ac": "2c9d7384bd22e5e879082868fa55dd6e",
".git/objects/b8/2044897cb4ca7276c62cdd31b4642639861d7b": "7632aefdc3d9f020d7b2725c48622a3c",
".git/objects/c4/319bf498ec925fa39db7e999823bb904f48b3a": "ef1432b34ff444424d4f7cee3d82aa48",
".git/objects/cc/c6cd82d1a68d820502ff60f57095192ba937a7": "e96f96a6941aeae74366875f450c7680",
".git/objects/e8/3c7e5700c87fb6357693cf1b4cb7dc14794d38": "e750e350ee4b316db6bb102d8261c496",
".git/objects/e0/e9124d0ad1e55138852d10e62e1c3551c986e3": "4e5bfa23711bcff0bce11b7cfffc7b10",
".git/objects/85/3b031bb5b88a862983dec6c8d4f2d25b91ba79": "b03106a6888583c1b8441c9339167f08",
".git/objects/1c/fde8bf231db5fb267f6c454c61608efb59106f": "5efd185fc5b349dfa641ca0f187e86dd",
".git/objects/82/726a65546e5f7b58b5dfe4fa8f641679768442": "c7cb43116911123623109dfabc3d5545",
".git/objects/25/548e71a8bfe20ba35482a51d9c365b77438e4e": "8908de0936eb3adcef3686ad2f0f8bed",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "f88da8e05639e918f2cd584270762e47",
".git/logs/refs/heads/main": "f88da8e05639e918f2cd584270762e47",
".git/logs/refs/remotes/origin/HEAD": "ac88740d1cff9c915c2186a9e06f1d90",
".git/logs/refs/remotes/origin/main": "783f72ce6eb2413b452b96c8e9d776a1",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "9903e4bf75fba6eb566d9734b9bd3254",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "9903e4bf75fba6eb566d9734b9bd3254",
".git/index": "790a1275e4afeb745ad14b11c1ecf18b",
".git/packed-refs": "fea09f134d6c2dc5b4053b69fc9cd64a",
".git/COMMIT_EDITMSG": "5fafb7093c5993cc6f13409937453bc2",
".git/FETCH_HEAD": "4dd44aaa3aa8e5934b2b3aef798bef5a",
"assets/AssetManifest.json": "ed9b81e84dba4263e756971ea369f22f",
"assets/NOTICES": "6680cef5ad28109cf0fe846ca4f5ed2b",
"assets/FontManifest.json": "07488861e82cd8684be0da1a38dbb65e",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/flutter_icons/fonts/Octicons.ttf": "73b8cff012825060b308d2162f31dbb2",
"assets/packages/flutter_icons/fonts/Feather.ttf": "6beba7e6834963f7f171d3bdd075c915",
"assets/packages/flutter_icons/fonts/Entypo.ttf": "744ce60078c17d86006dd0edabcd59a7",
"assets/packages/flutter_icons/fonts/FontAwesome5_Brands.ttf": "c39278f7abfc798a241551194f55e29f",
"assets/packages/flutter_icons/fonts/MaterialCommunityIcons.ttf": "3c851d60ad5ef3f2fe43ebd263490d78",
"assets/packages/flutter_icons/fonts/AntDesign.ttf": "3a2ba31570920eeb9b1d217cabe58315",
"assets/packages/flutter_icons/fonts/Foundation.ttf": "e20945d7c929279ef7a6f1db184a4470",
"assets/packages/flutter_icons/fonts/weathericons.ttf": "4618f0de2a818e7ad3fe880e0b74d04a",
"assets/packages/flutter_icons/fonts/Ionicons.ttf": "b2e0fc821c6886fb3940f85a3320003e",
"assets/packages/flutter_icons/fonts/FontAwesome5_Solid.ttf": "b70cea0339374107969eb53e5b1f603f",
"assets/packages/flutter_icons/fonts/FontAwesome5_Regular.ttf": "f6c6f6c8cb7784254ad00056f6fbd74e",
"assets/packages/flutter_icons/fonts/FontAwesome.ttf": "b06871f281fee6b241d60582ae9369b9",
"assets/packages/flutter_icons/fonts/Zocial.ttf": "5cdf883b18a5651a29a4d1ef276d2457",
"assets/packages/flutter_icons/fonts/EvilIcons.ttf": "140c53a7643ea949007aa9a282153849",
"assets/packages/flutter_icons/fonts/SimpleLineIcons.ttf": "d2285965fe34b05465047401b8595dd0",
"assets/packages/flutter_icons/fonts/MaterialIcons.ttf": "a37b0c01c0baf1888ca812cc0508f6e2",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "ffed6899ceb84c60a1efa51c809a57e4",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "eaed33dc9678381a55cb5c13edaf241d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "3241d1d9c15448a4da96df05f3292ffe",
"assets/fonts/Lato-Bold.ttf": "85d339d916479f729938d2911b85bf1f",
"assets/fonts/Oswald-Bold.ttf": "e991dea9f65ce799dd72095ab7ad6e88",
"assets/fonts/Lato-Regular.ttf": "2d36b1a925432bae7f3c53a340868c6e",
"assets/fonts/Oswald-Regular.ttf": "e1996192b98a516646ff9a8c0c0ca90c",
"assets/fonts/Lato-Light.ttf": "2fe27d9d10cdfccb1baef28a45d5ba90",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/fonts/Oswald-Light.ttf": "4be970a1b24aa834afff4b16842c8981",
"assets/assets/rashid.png": "0bb93c0d0cdecc7ce7fbb56ac6074c6f",
"assets/assets/brand3.png": "c0915a84744f3481a2105c5aea6727e0",
"assets/assets/email.png": "5eb3c4b86aafbee72b8c471b29413a50",
"assets/assets/mappin.png": "9cc090022ae31337336d2024160714b8",
"assets/assets/design.png": "6aaec412d8837ac9a83f03f453877606",
"assets/assets/person_small.png": "4607a89fefbdde9629eff6bd1230eebe",
"assets/assets/brand2.png": "91c6d8820e35e10e39757e0de6ac4345",
"assets/assets/m1.png": "c1277ed25c8f37d9dfad2fb9f69e4d8e",
"assets/assets/brand1.png": "f3a3a0de79048e1f14aac62ec76609b8",
"assets/assets/brand5.png": "fc57e9a9ff95830ea207e2452ffd4bd6",
"assets/assets/flutter_anim.json": "cb9a5c57016ad6e845311fdd2a328b9e",
"assets/assets/python.png": "7c561f00353ee0ce2dd0e74c917630f3",
"assets/assets/brand4.png": "e9441e9a5d26e508f592aa31b9febff6",
"assets/assets/keyless/4.png": "02338493e361faf8de9130f457a6ed3c",
"assets/assets/keyless/2.png": "531b03d09ab463426839eae897fd44a1",
"assets/assets/keyless/3.png": "63e5af39a94a0b8ee9df8574f2f1e5ee",
"assets/assets/keyless/1.png": "1e9a5209c2d4842511f9bf84fb3f4241",
"assets/assets/keyless/0.png": "7b4375ab3ed31460957d975c64c718f7",
"assets/assets/anims/menu.json": "63827132db22469dccfa8222325d3bd2",
"assets/assets/lgn/4.png": "99a1393b9d189836cbf42d288043a4f9",
"assets/assets/lgn/2.png": "2853167b68c45f5c5f84157bcef9169c",
"assets/assets/lgn/3.png": "4643232572a9e6278d481ed802ccd14b",
"assets/assets/lgn/1.png": "b6f9f39a18ba5304425b5a1b96092b31",
"assets/assets/lgn/0.png": "84ce46717a94bc837f2c58695c6138c4",
"assets/assets/pk.jpeg": "e810db6cec572f6de10b5654ffc7a8fe",
"assets/assets/promote.png": "2bd8adcad79a4ebb80888d1a0583b3c4",
"assets/assets/f3.png": "4449e8de5f626780bc536bf266428d6e",
"assets/assets/drawerbg.png": "bc4e28016e2477071b9c4ae754293279",
"assets/assets/quote.png": "1a0aa9a06293ac5689bc32012e0e13e6",
"assets/assets/develop.png": "471c2c94d5d04112086eba9fd78c6809",
"assets/assets/macos.png": "3b8f0870a696a4c4ebb8a5be863d44da",
"assets/assets/laptop.png": "fb49e3c0c36437239db5f8c114b03062",
"assets/assets/reapet/4.png": "7b068d58730b6524e47325ea01f33cfe",
"assets/assets/reapet/2.png": "f11d1c20f6bfb8d22b165df830515fc5",
"assets/assets/reapet/3.png": "68c0c1f4b292e277732eb4daa2b976a9",
"assets/assets/reapet/1.png": "0aae0cef2e2a06bd33b7ff0a35cf4011",
"assets/assets/reapet/0.png": "37a153bfa1b0ef473565873c5025522f",
"assets/assets/heart.json": "7814d2e455346dbdd7f457f30b008746",
"assets/assets/phone.png": "45903a1ffa9ede882171aca9f71c4c29",
"assets/assets/ios.png": "81d2827c6edd709125123112dde38f6c",
"assets/assets/labouronline/4.png": "08371a2c95f6ed7a46a9f7d4c497fa07",
"assets/assets/labouronline/2.png": "59826a8b9b5e1bf82cb67a57751d0240",
"assets/assets/labouronline/3.png": "189da8ea1404496a1b5ad7c44811d5a8",
"assets/assets/labouronline/1.png": "3b024ea8055e615da7e3d2e0be311175",
"assets/assets/labouronline/0.png": "8b8945e82b368e6c7bc607b8075a093b",
"assets/assets/camera_lens.png": "f23224ee9f0b3f8b602dda9fdb98db99",
"assets/assets/chatapp/4.png": "49bf3380c54eaf649448e0c8c082f54f",
"assets/assets/chatapp/2.png": "af38bb3513701d1da9886b674a41cffc",
"assets/assets/chatapp/3.png": "9708113b4abf15c3838c4a4f17919295",
"assets/assets/chatapp/1.png": "12ee484488947a963575c4ed58083e7c",
"assets/assets/chatapp/0.png": "c238711e3b11d3a4b8a247dc18f7a879",
"assets/assets/write.png": "dc4f0d3df06d5fc9b13b9168b88e2560",
"assets/assets/rashid2.png": "684696acbc2662f8f01376012babaa84",
"assets/assets/whatsapp.png": "426617ad28567da23a2346566d84b5a6"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
