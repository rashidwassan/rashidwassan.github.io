'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "firebase-debug.log": "00ff5b60e463f2cf439de805b1d2914c",
"version.json": "ae56372b22a2b4c0bf915692893749b6",
"index.html": "293da489e7f7b50139685e9f56206450",
"/": "293da489e7f7b50139685e9f56206450",
"CNAME": "be1efa8c544a5bfbbcde1085904b25b0",
"loader.css": "3ed0540af717cd56f01a37a08f714759",
"main.dart.js": "5cb905d25205241d993a0d3132e8f8dd",
"404.html": "0a27a4163254fc8fce870c8cc3a3f94f",
"README.md": "a7f801b4c2190dfe4ec4b0a55e45cb1e",
"favicon.png": "6c3a2a8bab9155811014ca68143566a7",
"_config.yml": "932865e374757d33e321eeb2d5e88b6b",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
".github/workflows/firebase-hosting-pull-request.yml": "8ca73b72569a7db027074be9e1e8ee47",
".github/workflows/firebase-hosting-merge.yml": "abf736dc96927e1ebe23c82ec3ec826d",
"manifest.json": "f72b1fb8e2ea7901f25ad4e33e0f71f2",
".git/ORIG_HEAD": "83cec12139776d3ecad3ef4bb9ddc8bb",
".git/config": "642d2d80a77e462707f6dcf4dc64d2eb",
".git/objects/95/8a4c3d911fe2cae5ebcee15731703324dadef7": "28a417a03a424d28ccede37c1c58289d",
".git/objects/59/d49215a3f20f54824f5f2c1016dd206e93ecac": "3b4b072f5a4eef04ebf61c050bb2f809",
".git/objects/3b/a999d35b08b2ed7c515329ca4055cbe701c704": "1ded6c0bce0cf5fb0694810fb62396fd",
".git/objects/34/5a731fe139e89fea8e50803801aec79a338a04": "e5542c07f1f86cd32fee27cc09c5246f",
".git/objects/5f/1f8f77b7115d2f9f8158fb0416a46559774f1c": "d0fa97f3fec01ab9db656f18fd4fc8dd",
".git/objects/bb/d11e0884b7658b7d636938e23ff7a8f4d70c8e": "0f1ebc010d3889f603458d553f08cec2",
".git/objects/b3/37fff445db84866d523656c7bbc26c1a8ae116": "2c1b843f7bbda6c2fd35698bd43e3960",
".git/objects/e5/297665694862cc3c84cd283a907cfe1dd52a91": "70d4b52d647c5a32ec19fc3ac5aa0a2b",
".git/objects/e2/cf8de09bbf983fcc4e89ea1fbe88ee563f7bbe": "ab4a043215d6b78a688d4fa4bf5ccad3",
".git/objects/eb/f7231680ef5d47e46856ab505bae1215414ef8": "8ee3a531b84fb378bf5826306f9d2d11",
".git/objects/ee/cbfd65f227733b234eac335cb667c1362cddd4": "fb3d2f165305d2a09246e4f56eea3493",
".git/objects/e4/8b29a5c06ffb373a94ade04a41d311245392cc": "f4e4d5b2d16bb34f32603632c22d9676",
".git/objects/fb/bccb37138de32047a64ddfa2b24c92c40c0a7a": "ad2df12c76a962d37550d8c67c677030",
".git/objects/pack/pack-59e64eabb948658b33475420fdc55f335639b036.idx": "8737b14dfd4f5d4993c999f0249cd837",
".git/objects/pack/pack-59e64eabb948658b33475420fdc55f335639b036.pack": "4fd889db1401f26c4fd580501815d561",
".git/objects/7c/1ca8809388e24088c80f9e52ec03c6b02c701b": "2b7f3826f10420922a85a1705758e1a3",
".git/objects/7c/c5f679b49c5759762957866b97f7a33f568324": "d479946f8dfb82345c6b92cd2e68b9de",
".git/objects/45/2de890f90a3894986a0d498875e211fc0867c0": "a9a27968e3649b92ada916d7a1e78408",
".git/objects/87/bb40987db3ecca806556c528b4021b6e12fc5d": "21221d6a200d9421e45d66d561036bf3",
".git/objects/1a/bff4a1732a813b45eaf23f2b21f331cf0b30e8": "9e650e25a270c34b28e043c0d299ca3f",
".git/objects/19/35a0345592af9fa2c5de3bf91398b52bc032ad": "0872437cbd07a1e7d8a1fef87ddb6ee1",
".git/objects/2a/aa7438e7158a12e793672816633c8f8acbab52": "816aed6aed39c62a381cf5b574a5de67",
".git/objects/2f/b4629caa0e50148e2f7714aea3984fc1e10564": "4456f0e344fbfc5c10c478b9d6ff2a36",
".git/objects/43/1ac6d7ab8d0b197804e623cc718c9b5a76db0e": "1f33a6baeafcc9d7f6f6d611d412f4ad",
".git/objects/6b/3111b94fd277794c61e60fb0cbe4f2973d0690": "863be4b13a709b54b530f79e706c6282",
".git/objects/3f/61aa729a8a7cc7b072fb8fd1c0abac766ee36c": "572263468109deabf017883db586bd42",
".git/objects/30/b31628373f50f6a8a9896425044617ce04b84b": "391b0e54e3dcd05fcfce097a03390d73",
".git/objects/30/f53144f9fa5a90356a49e843fa381fd36ee326": "a5125a26e51103f0d7a341e0f513ddd4",
".git/objects/01/7841562c2078fa68095ee393aeb5406e7d73c4": "afc1a392638ab3b32d0116296c475e19",
".git/objects/6c/91f2ba8c838d898aac0545672c5837b4582d18": "7592a76164abc5d4b2a4ce9da4454f6b",
".git/objects/64/c3befcc709ec088bdf355309f792832e4fc92a": "8d6eb08051d03a4447e1745174baf78a",
".git/objects/b1/72ba5539ebbff1820da3bc28c7809088ce8f0c": "ddc7a045f9a5439e484a1a2dcd1bd61a",
".git/objects/dc/60c3c5beaaed9d621f800d5a882dd1710ea6d4": "a69cc045f1caa083ace7fadb18d7649a",
".git/objects/d5/0aa5200f2181f800d05c970c45f42e99867bde": "fe74e73dbd59d63f12b1f8ff85314977",
".git/objects/b9/b1ac0a56f59ab0fff0eab141457b34118a3bbe": "9d0edd448539bbf414023a0d931f555c",
".git/objects/a1/b93bba641ff9ba534f96586297a9e462f5a538": "071d8c5ed33f235da7ff8597fccc21ab",
".git/objects/cd/0619889c37c70b26f8ffab8a324207c391378d": "fc456b356da51e92ecf833ec6a1849b4",
".git/objects/cc/5553a65433e208605a638fc544a668e16d95e4": "b5998aff3e0729b774c981214c4e21db",
".git/objects/f9/7f4b3b3cc1be3ffdb7e7813934bc71746dc3a4": "3936eff668ca63fac9eca034ab95dc76",
".git/objects/f0/8739824f300f769a0341d272245aa3532ffc24": "eee06501f64965d232d3d2e617bf2c6d",
".git/objects/2c/9eab6e144f22bc32a0403aad7f3e1cfb455d54": "f224e5341aaf45dd1b8ef2baa3eeda7e",
".git/objects/2d/97d6339492e236424f39e6125a1e71b058b274": "61f1123f7363f56247b639dd4cb9ed26",
".git/objects/41/5dbd7f2a241e37dadfa751d0acd062d8fff0f3": "8435e2796149525cb4f736049b51d37f",
".git/objects/84/88d258c08430e3f8ec60792e11f7ee38d231e6": "4dcdcbe03fdb094e49b0d8f00a40b46e",
".git/objects/4a/d41dc34621d9f372468c9000e1b5e1ad9b7f55": "1340a2686241faf55a2bca76778af6a1",
".git/objects/8d/65fc3d7ad3d8b4410aad8f3b9af9eea8d76675": "c2b628a7e5c06265c450c381630e2e35",
".git/objects/76/23bd52a23aadfe40d79de6f238ec4d23494b2b": "2a5cf9104725b2d495dd7dc228f32b51",
".git/objects/76/f5f6d5c668c3f7a7f9dfb462fc2915bde6a4de": "1004dd4c2dcdb7c152db33098bd267e1",
".git/objects/78/979e35388b564af72c0e08fcd36a8dd0c56b2d": "55635a331ce6711e8e8b2f17bc4e5a45",
".git/objects/7a/0ccf36f69c6aef8a0d0f29218e8db1f8ddb71c": "563f9fbce9211f624fef16879b9b6c14",
".git/objects/25/a823da0d496a782314751052849e69f6e7aec8": "486ef9ac2fc0a52e97208764bda39123",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "dc5c53e844ab0f7fa967ad8a0dffbc3a",
".git/logs/refs/heads/main": "dc5c53e844ab0f7fa967ad8a0dffbc3a",
".git/logs/refs/remotes/origin/HEAD": "4604583010a65dc88b62e9b6d23bf3fa",
".git/logs/refs/remotes/origin/main": "203de73696df58079797fda684f2cfba",
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
".git/refs/heads/main": "a2eccdb11d02247ead54e4b5eb568e48",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "a2eccdb11d02247ead54e4b5eb568e48",
".git/index": "6742cefaa99f51721b893fe29d363f4c",
".git/packed-refs": "067ba6cee17936eb8a0199d714173286",
".git/COMMIT_EDITMSG": "b5f05a8d6b27ada0aaac0eb6d204efcb",
".git/FETCH_HEAD": "615737a795ad27f28898721139cdc732",
"assets/AssetManifest.json": "a92d1b3f361116f0675624e25236e560",
"assets/NOTICES": "20aadce474ba2efe2efdf23bf26f7c2b",
"assets/FontManifest.json": "f912066375868f387015b88c7f915e6b",
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
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "aa1ec80f1b30a51d64c72f669c1326a7",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "5178af1d278432bec8fc830d50996d6f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "b37ae0f14cbc958316fac4635383b6e8",
"assets/packages/neon/lib/fonts/LasEnter/LasEnter.ttf": "c161024b53fd9d99a60fa0ebc0a587fb",
"assets/packages/neon/lib/fonts/Samarin/Samarin.ttf": "e86112fa7734f71b0292102dfb322181",
"assets/packages/neon/lib/fonts/Beon/Beon.otf": "725bc066722fdfc327f582568e8ce97e",
"assets/packages/neon/lib/fonts/Night-Club-70s/Night-Club-70s-Regular.ttf": "2f52ea89848cc22583a19a3517387465",
"assets/packages/neon/lib/fonts/Night-Club-70s/Night-Club-70s-Bold.ttf": "c06f06e0a1b9e7bdb9ece19e455ae9cb",
"assets/packages/neon/lib/fonts/Automania/Automania.ttf": "3baf3e2ca3c97dc06fcd1332b7fa0d73",
"assets/packages/neon/lib/fonts/TextMeOne/TextMeOne-Regular.ttf": "475b539094d914ff68e420b4571c96c3",
"assets/packages/neon/lib/fonts/Cyberpunk/Cyberpunk.ttf": "9deb7d5fae2c035eb8b7d35f62169309",
"assets/packages/neon/lib/fonts/Monoton/Monoton-Regular.ttf": "f6aa15866bffca161454d7554a004259",
"assets/packages/neon/lib/fonts/Membra/Membra.ttf": "e378d80f5875e9095843e141e283897e",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/assets/anim/web_anim.json": "497c27dfd7bae0375decc1aee9428735",
"assets/assets/anim/splash_anim.json": "2b302330f291094aa061d76fcf1ae187",
"assets/assets/anim/skill.json": "9ba26f8894283abc136f17a59fb56e96",
"assets/assets/design.png": "6aaec412d8837ac9a83f03f453877606",
"assets/assets/images/rashid.png": "da298c3627d34607f7403ef53e1b2e62",
"assets/assets/images/rashid2.png": "e2d9199fa9dc67d30ec8bc6c822f367f",
"assets/assets/keyless/4.png": "02338493e361faf8de9130f457a6ed3c",
"assets/assets/keyless/2.png": "531b03d09ab463426839eae897fd44a1",
"assets/assets/keyless/3.png": "63e5af39a94a0b8ee9df8574f2f1e5ee",
"assets/assets/keyless/1.png": "1e9a5209c2d4842511f9bf84fb3f4241",
"assets/assets/keyless/0.png": "7b4375ab3ed31460957d975c64c718f7",
"assets/assets/lgn/4.png": "99a1393b9d189836cbf42d288043a4f9",
"assets/assets/lgn/2.png": "2853167b68c45f5c5f84157bcef9169c",
"assets/assets/lgn/3.png": "4643232572a9e6278d481ed802ccd14b",
"assets/assets/lgn/1.png": "b6f9f39a18ba5304425b5a1b96092b31",
"assets/assets/lgn/0.png": "84ce46717a94bc837f2c58695c6138c4",
"assets/assets/promote.png": "2bd8adcad79a4ebb80888d1a0583b3c4",
"assets/assets/projectSnapshots/keyless/4.png": "02338493e361faf8de9130f457a6ed3c",
"assets/assets/projectSnapshots/keyless/2.png": "531b03d09ab463426839eae897fd44a1",
"assets/assets/projectSnapshots/keyless/3.png": "63e5af39a94a0b8ee9df8574f2f1e5ee",
"assets/assets/projectSnapshots/keyless/1.png": "1e9a5209c2d4842511f9bf84fb3f4241",
"assets/assets/projectSnapshots/keyless/0.png": "7b4375ab3ed31460957d975c64c718f7",
"assets/assets/projectSnapshots/lgn/4.png": "99a1393b9d189836cbf42d288043a4f9",
"assets/assets/projectSnapshots/lgn/2.png": "2853167b68c45f5c5f84157bcef9169c",
"assets/assets/projectSnapshots/lgn/3.png": "4643232572a9e6278d481ed802ccd14b",
"assets/assets/projectSnapshots/lgn/1.png": "b6f9f39a18ba5304425b5a1b96092b31",
"assets/assets/projectSnapshots/lgn/0.png": "84ce46717a94bc837f2c58695c6138c4",
"assets/assets/projectSnapshots/reapet/4.png": "7b068d58730b6524e47325ea01f33cfe",
"assets/assets/projectSnapshots/reapet/2.png": "f11d1c20f6bfb8d22b165df830515fc5",
"assets/assets/projectSnapshots/reapet/3.png": "68c0c1f4b292e277732eb4daa2b976a9",
"assets/assets/projectSnapshots/reapet/1.png": "0aae0cef2e2a06bd33b7ff0a35cf4011",
"assets/assets/projectSnapshots/reapet/0.png": "37a153bfa1b0ef473565873c5025522f",
"assets/assets/projectSnapshots/labouronline/4.png": "08371a2c95f6ed7a46a9f7d4c497fa07",
"assets/assets/projectSnapshots/labouronline/2.png": "59826a8b9b5e1bf82cb67a57751d0240",
"assets/assets/projectSnapshots/labouronline/3.png": "189da8ea1404496a1b5ad7c44811d5a8",
"assets/assets/projectSnapshots/labouronline/1.png": "3b024ea8055e615da7e3d2e0be311175",
"assets/assets/projectSnapshots/labouronline/0.png": "8b8945e82b368e6c7bc607b8075a093b",
"assets/assets/projectSnapshots/chatapp/4.png": "49bf3380c54eaf649448e0c8c082f54f",
"assets/assets/projectSnapshots/chatapp/2.png": "af38bb3513701d1da9886b674a41cffc",
"assets/assets/projectSnapshots/chatapp/3.png": "9708113b4abf15c3838c4a4f17919295",
"assets/assets/projectSnapshots/chatapp/1.png": "12ee484488947a963575c4ed58083e7c",
"assets/assets/projectSnapshots/chatapp/0.png": "c238711e3b11d3a4b8a247dc18f7a879",
"assets/assets/develop.png": "471c2c94d5d04112086eba9fd78c6809",
"assets/assets/laptop.png": "fb49e3c0c36437239db5f8c114b03062",
"assets/assets/icons/beared.png": "7436d11465ac245681a738960abc293d",
"assets/assets/icons/girl_glasses.png": "0d1f417a1b265f613108183f68956d80",
"assets/assets/icons/girl.png": "e451dcc8be564ee50b69a0a7816ea384",
"assets/assets/icons/pk.jpeg": "e810db6cec572f6de10b5654ffc7a8fe",
"assets/assets/icons/adult.png": "05b5de864e2c67c41ca9e5f56fe0e5f6",
"assets/assets/icons/boy.png": "468febea2a014e126641eb05c0e15739",
"assets/assets/reapet/4.png": "7b068d58730b6524e47325ea01f33cfe",
"assets/assets/reapet/2.png": "f11d1c20f6bfb8d22b165df830515fc5",
"assets/assets/reapet/3.png": "68c0c1f4b292e277732eb4daa2b976a9",
"assets/assets/reapet/1.png": "0aae0cef2e2a06bd33b7ff0a35cf4011",
"assets/assets/reapet/0.png": "37a153bfa1b0ef473565873c5025522f",
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
"assets/assets/fonts/Gilroy-Light.otf": "c62aded729bf7146d491275e5019d7fc",
"assets/assets/fonts/Gilroy-ExtraBold.otf": "0f6e082f42f5247d82c3ade9c2a8f928",
"canvaskit/canvaskit.js": "62b9906717d7215a6ff4cc24efbd1b5c",
"canvaskit/profiling/canvaskit.js": "3783918f48ef691e230156c251169480",
"canvaskit/profiling/canvaskit.wasm": "6d1b0fc1ec88c3110db88caa3393c580",
"canvaskit/canvaskit.wasm": "b179ba02b7a9f61ebc108f82c5a1ecdb"
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
