'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "56673aacef2e8ae5f5c4c2a17253d080",
"index.html": "73af88ca72e3b315d5be6a49c38452ae",
"/": "73af88ca72e3b315d5be6a49c38452ae",
"loader.css": "3ed0540af717cd56f01a37a08f714759",
"main.dart.js": "64f34f84615a3830f929597729848487",
"README.md": "a7f801b4c2190dfe4ec4b0a55e45cb1e",
"favicon.png": "6c3a2a8bab9155811014ca68143566a7",
"_config.yml": "932865e374757d33e321eeb2d5e88b6b",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "f72b1fb8e2ea7901f25ad4e33e0f71f2",
".git/config": "7f8d60da42ca14660c888341a046d194",
".git/objects/0c/380b09ecdeb21a590b32e8a9f4911f89b89ee0": "1964c49bc411a33651021643ac9b323f",
".git/objects/3e/3d90ae51e50f9ea5a5525c4f6552c1a3f4356d": "b7768ca9e046c43fc372d362099fb38d",
".git/objects/50/c334b52ba1fc6f006ec89e6c377f09fc539ce3": "c74d7db32d01122b30176c4b0ef599a6",
".git/objects/50/2fc80f181779eddb0ef21f7ddbd71be73790ea": "8b1a0b389066647e54a6e50776b3dc99",
".git/objects/57/f177227cd18a377d0946081431df45d90b0107": "98f5ff45ccd5722d57034f80890ff713",
".git/objects/9b/83566f9120e0193502379221c7ac9917ff21a9": "30363aef5fff4aae7eb10f3e5b88d565",
".git/objects/04/daa3272e9258c570c22c3ca7a9bd10440dc30e": "7908546019140c4734cc909aca816971",
".git/objects/04/ab9de314acda5a8aab5ecdbed0053e5f01c650": "1eaab9b15c086701edcf088f150b52d6",
".git/objects/04/36a893afec8da98042084f12d9d98db3b58417": "8fefe4be6565b0b26b4b34292e82c1da",
".git/objects/6a/c488c87801d75a3cde20c2dbe6067f840f4140": "7ed67bb641061caf9b27cc95fc8c81c3",
".git/objects/3d/a429fa9a6a87800f6e1d032af5c0e5321772be": "8378dc51e618f0e2a3dd2e26385f83f0",
".git/objects/0b/f2d97e94f4997c67945857a219535f7646557d": "26f1c50a14ee9684ebaa3c509bae480c",
".git/objects/60/c616458b0a6023154b30648fa988e6253de9a7": "b3247017d957c9eeb75c17396aee8432",
".git/objects/9d/e769b44923c294a39462a63d2b04e4594dc2af": "337282ea2702ffd94417bdd99e4ef259",
".git/objects/9d/01207100acbc64df64c7f22cf61a72c329ac64": "9e17bd57e6c17cd1ed553f9ab609599a",
".git/objects/a3/872a0e52c257a4586b4acc25b33160752a4339": "73fef1b01472870edc0240850f4a23c7",
".git/objects/b2/e7fda0395d23eb45c5ed90bcfe50b63cc1386b": "2ca19776bb0969c9ee40565c30e70411",
".git/objects/ad/a695010a439d0ebba3acb8b15d27ff884530b1": "92421b63c62e0001edafecd22489fea8",
".git/objects/b3/41224243e75959fb696a152302109a33cde883": "7c3b832bbb865338ecc164a476afa060",
".git/objects/da/e7b254777a1d2313a6f759bf0b298edf26f594": "0e6d336d10de016ba4ebd331ea29bb34",
".git/objects/b4/c674ce06a3bfb998385cc6b827e9a43b18dada": "d9d0033c4325f4087a7810988b36afc5",
".git/objects/a2/daff17c5ea62828651efafa94859b1c030a8d2": "204673f52ad524c2b7b2b4da4bf2b654",
".git/objects/d6/20f4d09151169f5d18201c684ebf94b65e76fe": "1a5f2336fd2e088f4c0a8f820a929b74",
".git/objects/d8/eff0fb769b09582f266cca9ff30cda9715d382": "d4a9559bf8afa76b1282b680632a4f7a",
".git/objects/d8/519d0bd8de7cb7cdeb66bddba7abca1df03f8c": "ad95bb6e101560b5653ac6871047a3c2",
".git/objects/ab/819fb50cbc9b84cf7e08ab068429ca3e033729": "62da9ad9e6f0d41ab63db59c82e5c882",
".git/objects/e5/07657de7cf260231796d6eed4391e6f742f132": "0e976e9e6d4cc91f7c071994e451c248",
".git/objects/c0/13e27b98f29ee7e400d3900a475f9e32f6903c": "84b7dae5eded8d82df3bd6a050309a36",
".git/objects/ee/ab284ef294d68ebb2698c969bce08bbda80c2a": "72f6f710a2efb90fbb0c5365e81d85a1",
".git/objects/e3/638110668b72a9865382daeb3c389761fc9441": "bb1180c3fab2e36bbbe50a884d8785e9",
".git/objects/e3/f08690be4222227b7f540af7477cfb5d32f652": "43e833c85f815943c2b87ae9be88d128",
".git/objects/cf/ce12c91fc135b46644606963372035f042eb43": "50fbad923532930d33615176fc4cb969",
".git/objects/ca/2a4fd7fcbe1c72da5eb7e3340785132a79814f": "5578c6f6e418a896a855f35ef6812950",
".git/objects/e4/6a6fb9a1ae2622a6e4dc6c6b39fb7f93261510": "f3adf20d4b8c52c3015c0c1c78fe6ce3",
".git/objects/fe/e9db1dd24a9e025d9ba32958916f5ae81578aa": "a1822be9ab72d1bf82faa4ca74919a02",
".git/objects/c1/4f9719b9a11999d559a4cbaa8022d8288ad625": "2b5a27d9c6833ca6ae1f44036c0f7578",
".git/objects/20/26e8961aad2a931dfc4e54e9d41717d729a07d": "959d893198bcccf3d3df560fc64e8f2e",
".git/objects/18/e11f72f7741e5bdc924ed48561f515e9cb1a11": "8a22822e7fd5a9d6909c3b8ed1944d6c",
".git/objects/4b/44d981d7ed98234d6a4beae8115de924f6180d": "0d2ef7cfb52251a5b9aa82bab2f42272",
".git/objects/pack/pack-7388ab4153a63f1694601bd2bcf3f4c19b24ab45.pack": "08e14a4eaf00e55fc328e6fcba12ae87",
".git/objects/pack/pack-7388ab4153a63f1694601bd2bcf3f4c19b24ab45.idx": "4696747692f43f8e57f2ab63fb77b12d",
".git/objects/11/d09bfe55eaeb82429670eaeb48cc8f91e2cd3b": "9003baa3cd3de2892a530fd869946946",
".git/objects/29/d7d74e2c9e3efd6462a16a3f120ea71ad7318e": "a2e11816ec701bea745bc856f1304314",
".git/objects/7c/5490ff7c638b92c59742dbfe6f823bce752c11": "9aee7671799e914bf8fc195ca73f69ee",
".git/objects/89/55aeb6163ff6d3fd5538f760336501b9bdd476": "d6878046fe42004058b991d9d506b180",
".git/objects/1f/fe13a04878b83a935f998775a1225c1075726b": "d004635cc9d78a00718762a3d2f41a57",
".git/objects/73/f3e5a7977747a5b36c7b6af60fc7a7465e8109": "27d7c2aa79eba31bd4c7dce0a56baa38",
".git/objects/74/310cc9ea88f071da4833d5ab1db4e300e15cff": "f6f8d48883c13ae9e4a46846341e6194",
".git/objects/10/fbde75db13cf8dfb5d2faf4ff536eb88d5ca1c": "f5a241c0fed1db594e7a43de98d1fdfc",
".git/objects/21/47de929f8d62a9c81c9dbe8ad4ccd8ce304395": "44d0d8675ef0f498ac2d30371039ae9a",
".git/objects/81/690b47e2439d3fa1bba08b897b2400cc691aab": "a90ee29389362b4c375622122ff8f57a",
".git/objects/2a/535818109f04770f389501791eb6b20050d458": "e2be111b02bac75f4b1d69f929d6763e",
".git/objects/2f/1b29794b4109cb8ecff2525d1dcbf8a7f62b7b": "183f74ca335a69253933d27f2723ddf5",
".git/objects/88/7b9b1ef3ff864f7fca489d9dac72a7ea9ab79d": "980293add7d4d3346440ad76595a3434",
".git/objects/9f/e447c39b19bfd86edadfa9f5608457427d000d": "9458713371925dd34de10003937c9e34",
".git/objects/38/34828fbc1b47b7724fcacd956bd8f6cd2817d0": "381e94ebc236ac4e84e6c396f4858339",
".git/objects/00/e5630ff70849b38058451208b0cf8c9f4d3fa8": "c18f5605486d9f2e15753f2370077be4",
".git/objects/9a/856fd6704600c0e079f9608eb4ac32919f1410": "292a92a163d80db3bbd9bef095aa4ab5",
".git/objects/98/6b36456788346f01710bcfb10872822fafd4e8": "b8ac87d4dbbbc992144552f6e16369c8",
".git/objects/30/2e5b79c148b28aaec0ced8185616d8ec7e065e": "c541669605dac9e4a9078652e14ab95f",
".git/objects/30/5dbe2b402062d6c7fe30564cff76050a9d85de": "bd1abd783a0a0eaf1bcdc04fab69ae5e",
".git/objects/5b/cfbe29058a163c270a75b47cdee85038e70989": "ad1a24026f36ae04fdf00468e8add586",
".git/objects/37/4615206a22fb59a26c290a6dfd76bce6b8a120": "1510d118c46149f597b1d99a9ac010a8",
".git/objects/08/6a49b1019334c2cf00822ad41ec00bf920f855": "1ee95e077daea5729b7100a5b9f9c389",
".git/objects/99/69e91fc0accecd0b8f239e87ca8b73bbdf1825": "7e0cd85495317d0642952ec50d37e246",
".git/objects/97/ef912c33b1cb032210bc45053548e01069a1cc": "45b1890698b786974273c7dfa311e510",
".git/objects/63/313ac041a2806d507f01aa96104b4aedc1e054": "a4846751ff39c85e0245935a4ade8b73",
".git/objects/a7/f5231c6ae6a29374d8be0b5dfb6e4a6d84eda6": "a1abba20abc84f7e855eeab4188faaed",
".git/objects/b8/290b1832e74897b9475a569c7cf15b45652cf7": "71e9eabe2b115ba63af87211439a0d8f",
".git/objects/a9/8c81976c8e0fcc57edbd42bfb48a2ebdf6424d": "2d2286d6571568bfc753e4ece9024038",
".git/objects/b7/0101a3a45bd22c4b6f1824830b7ce3fa12de29": "3d3992d2471498bb3c2a58bfcc267b88",
".git/objects/a8/281d1bd4724c5fe7a604130c216a5a3ca04dcb": "5174fd01cef5784a6a14021f1f962b59",
".git/objects/de/716bb8289784f598706e22c31a8f292ac530b6": "b794e8518b159c4f8b5253de00c6ed11",
".git/objects/cd/a47c4f649958d8d2ff333a9e4e76bbf0d7bab6": "32d1fd0d75939314fede31b37d22e889",
".git/objects/cc/bfaf339fd3411cf8f4ddef4b52dd5a111e6bc8": "e3191d33d8c2415feac6f39c2eded380",
".git/objects/f0/cfa6af0233aca78debe2777ce8610c83249411": "32ad35aa1208011c6a70fe30459eb9cd",
".git/objects/fa/757b14f25f14a15dd464e19a995a182f1ce434": "f64c92bc0eac37da8a4517cd93d0017e",
".git/objects/f8/cc0d326215e971a9f7cdb31e00f63bb195a183": "51ca01be3fbc8cabc9de5a7d2ad0ad2c",
".git/objects/e0/daf39406437d378401098ca184ab9af0029de6": "3a7fbd1565d8754e96d651679755d131",
".git/objects/2c/48095e810960d5f80bfb7e8fb3ebd8412a698e": "19543cd2c0f6f33e28d859cf2870ff8f",
".git/objects/77/5456b45706f46894e70b4ea45de21e0b88d163": "a7b0803846614249ba8f3c0996ad6f9c",
".git/objects/70/416b647c6d52656672547fca8cd2f50117ab1f": "d317cf8e28bd172ff35e746d1fa0b99e",
".git/objects/4f/352ad34da2245aac8ba8e6eaba436c257eb706": "abcb559d5558940cbb609b55dbfa0e61",
".git/objects/8c/048bdd3e86a2ce488cd513d00d57bc71bff06e": "f8625d5040d9fd38dc6a54895bee539c",
".git/objects/76/038d4f92077e79541aaed0546263a32596e912": "4674bbcca76ffaa847934f9cd58c587d",
".git/objects/2e/71390d59d8bdaf7ad2f2f3f16bf6ca506be366": "6f03424044216c1059fb6960f99e7bf7",
".git/objects/78/8cbf5f0586798f7c4e34041b45e1ae41249889": "a704ca8bed0e16bc69ff859aba1691e0",
".git/objects/7a/2c060964229a5eee8a80fe013b247da1b8fafe": "6a6900dbe56a9d1672b5270516324bc3",
".git/objects/8e/c26bd01472bda1ef1bd81774b5014328eb1435": "f537f461995c3d00f72f513fb91f5cac",
".git/objects/25/cd9a7f921674e487771497fb5781549612e93d": "10ca43e8fc6bf9205b52b2c0e38dd07e",
".git/objects/25/cdaad917d8c7298ad1efbce3fbd5ab90cee4fa": "3f3d45f5341affa32d575794ef2d3f1d",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "797f2368904430e73419c57b2eb84141",
".git/logs/refs/heads/main": "797f2368904430e73419c57b2eb84141",
".git/logs/refs/remotes/origin/HEAD": "92543d52672227ad7dc3d46ea247a311",
".git/logs/refs/remotes/origin/main": "d8e3166ad46819afe2e34d5874e09d6f",
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
".git/refs/heads/main": "5d853720964a20e03ba3242870474c27",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "5d853720964a20e03ba3242870474c27",
".git/index": "0e282a2e0a8ecd8daa6edfa6a4cc1220",
".git/packed-refs": "a4caf01c107899140da5124366d28cd2",
".git/COMMIT_EDITMSG": "79bec8fff3dfd2a9f651c4999648fe88",
".git/FETCH_HEAD": "c8ab5422dd80f5ddd0ac96c318e33c1a",
"assets/AssetManifest.json": "38adea194529cec367d5975ebf9ba4c7",
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
"assets/assets/design.png": "6aaec412d8837ac9a83f03f453877606",
"assets/assets/person_small.png": "4607a89fefbdde9629eff6bd1230eebe",
"assets/assets/brand2.png": "91c6d8820e35e10e39757e0de6ac4345",
"assets/assets/m1.png": "c1277ed25c8f37d9dfad2fb9f69e4d8e",
"assets/assets/brand1.png": "f3a3a0de79048e1f14aac62ec76609b8",
"assets/assets/brand5.png": "fc57e9a9ff95830ea207e2452ffd4bd6",
"assets/assets/socialbg.png": "8ed118bcd777b4c6cf90c142eb98a96c",
"assets/assets/flutter_anim.json": "cb9a5c57016ad6e845311fdd2a328b9e",
"assets/assets/python.png": "7c561f00353ee0ce2dd0e74c917630f3",
"assets/assets/brand4.png": "e9441e9a5d26e508f592aa31b9febff6",
"assets/assets/mainbg.jpg": "00e6c4f16e6286ed69c99859d2ac8d65",
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
"assets/assets/mainback.png": "6fba69bc8829e696aa3be78c11b8ecb7",
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
"assets/assets/rashid2.png": "684696acbc2662f8f01376012babaa84"
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
