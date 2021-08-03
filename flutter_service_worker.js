'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "c442cf15f61f5f4eb0931ac9eb5e50d6",
"index.html": "44008e1b8974ef4eb92c4b06d4917610",
"/": "44008e1b8974ef4eb92c4b06d4917610",
"loader.css": "3ed0540af717cd56f01a37a08f714759",
"main.dart.js": "111d16ce692ed57c0a979f3f2dfab2b9",
"README.md": "a7f801b4c2190dfe4ec4b0a55e45cb1e",
"favicon.png": "6c3a2a8bab9155811014ca68143566a7",
"_config.yml": "932865e374757d33e321eeb2d5e88b6b",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "76858bfccb016815b5d8257df072ea5f",
".git/ORIG_HEAD": "a5d7cd2d075d24948ef5ff3559777fb5",
".git/config": "fdb5b7e26e840e824027abe3cf828fd4",
".git/objects/59/2ce804a1b305b555a7366dff7ff2caca8202fa": "0688126d1998a779b8c3e7967bf53b94",
".git/objects/0c/25dc07c35330c2a2e6179756d068888d61dd2b": "ee10e6bb6df2d59ebf1baf2a761405ad",
".git/objects/66/96e9a63cace439bccf1e8d525e95aaa90552df": "3d3e013d902f536da6722bc356dc8c04",
".git/objects/66/d50d7471e380eb5ba1d50e92a57a2972792764": "3183eb4485acc1c238954fb4261e8f05",
".git/objects/50/08ddfcf53c02e82d7eee2e57c38e5672ef89f6": "d18c553584a7393b594e374cfe29b727",
".git/objects/68/68f7bb64ba71b131690286ddc82aa0f542293e": "b6aeab417f5d5ef28ea070a09b61c7e0",
".git/objects/3b/fb0510f572a87af26abd365194e843ca3e1980": "dd1ef08c394f38ce5e6aa8cc22a4b095",
".git/objects/6f/7831ebb7bff97cb2258b3f36b8db4c0c5422f5": "7ec84e3e0b089b9aba0531b8b137e9b2",
".git/objects/6f/6aa82e44f4e9209584b28e12e38308a0720f1e": "1185dc3ca2d0188ea85b7bac3aaa6a19",
".git/objects/6f/50ea4a7dd3126c7069513c5d6fd65b3c4b5dfd": "af722f470868fb1b6245f2c98e04804d",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/35/acda2fa1196aad98c2adf4378a7611dd713aa3": "b485406370fdb56248ec4e5fc074fb65",
".git/objects/35/c9d326836068337cb23ec27e8f5ae04ec524e7": "a021712cc451613c227dae5cfa27fe0e",
".git/objects/3c/26716316b6837aa74df8fd44149aabb6f7ce5e": "349e479d40278aa9da9958fcc60b336d",
".git/objects/3c/8c34e56e7f9015ad1fed63badcbe236796eb4e": "c03a6be76f928bfb1957a7bb565c82c0",
".git/objects/3d/ef81158603b4461a7a62986ab5fa19d318669f": "c6156099129538a1ecdad53c5157e582",
".git/objects/67/2360e198e0cbc19cd80ab2b561c289f187ce20": "963f834873e35fca3b4097361521f79d",
".git/objects/67/06fdaf2cad1fc2bb93379e3b9557844c054fa2": "d0ddcd906b2eebc082257c8b33360881",
".git/objects/67/bd84202ad5b2e307d3b6fac1731c2a5d963e0b": "aa161ace139f434c81be219b6f6205e5",
".git/objects/0b/dd56c32f19ceb3ae9751f412c65a043dda7a8b": "eeed86c5ccac304777974c1cb9f6b483",
".git/objects/94/8f0a5d26e899539e7821aa5a500932f76ba582": "e9093d046b81c96e5fd46a48a0b68b11",
".git/objects/94/8b5b8e6dbfdf3a8e719b0a24c532bd100200f9": "d80e93fcaf3eaa7a2973429700dc106e",
".git/objects/5f/72e9127ffaae2a500cd9d950067f46c21b277c": "9334d3373cb9fc449377becf4cba5477",
".git/objects/33/eba8b192384487f04951539f13bf1f8dd9f9cb": "8b147483b254a82db0bcaf9f71cd7f6b",
".git/objects/05/8a3610801e23a9ede4a9fdfd7efa9ecbe93b68": "813fb106fa7525d88e3367eeb48b4584",
".git/objects/9d/55ef3a3d620753936d0cfb88e83879f794a7bb": "7f40ffb457138ff8be44438ca6d027b8",
".git/objects/9d/ac2e8deed1ee63b7fb59fbfc7e2f7dc551eac5": "d6837eb3c5a58c3e9be54d2fd83273a0",
".git/objects/9c/0a7053621b248d8b6589dcaa0854ef49c33985": "c72629fe202c40d86f72d1ab31b1fc05",
".git/objects/9c/fd72c278f2be85e3cccc9178c6714182e182d3": "fc6b314e19480635c4d217ac19a051c5",
".git/objects/9c/0f3bcb182187ec9588813be6b7dc7a95d3f2fd": "c74dd4b62b1417b5e11a2d5b1df228a2",
".git/objects/9c/68cb387ed6ca3b44215e074bc661e7e81fddcc": "31342b5264b05c7b978e0f1d86170c6e",
".git/objects/a3/09313d5fb20765dff1d8f41dbd72c558097611": "ce77a88cc2b115d907f98afb245fa5f6",
".git/objects/a3/46aa8e6921b06cd16f39acafae1b5c0da4deb8": "a1d1837e21b85005411c04a98343fd0c",
".git/objects/ac/b2b9dca28cdec4f5c992eae185f0d5f112bf09": "ace0909968f2f5524c49ef37337768bd",
".git/objects/bb/112bc12ed11c0419ae96a116d1e340b2c04207": "5776e668cc75455ec41eb2b4b2e73674",
".git/objects/df/7b2e3a9b9bc1d1e2db6528cd582ab227322548": "26b6a7735782fc8c37e8e307d9fbaf7a",
".git/objects/da/28adb7a0c61514bfe500e3313cad331942b355": "8308a58c672e4e07c11e51b19b4ede80",
".git/objects/b4/360bca3b7b5a872237b6b846e29b9fb80215f2": "e943112ef3db73bea841a14d7d6d306f",
".git/objects/b4/0d62befe3b4b318dc00b16bec506479432bbe5": "00c7925819dcecb88a5cd408ab7039d8",
".git/objects/a5/e7fa719b56215f181810e2c1cf1238676e0076": "da06d98e81b3d1987c2d7d1c46ee118e",
".git/objects/bd/1bf9cff018ed08cbc642c0e25e3f77b7180756": "40eb91df56ee999f37a7b3f46a43f956",
".git/objects/d1/ac29457faa3725d75ee6bda3882c937cab8c38": "5596a2638a1456a02e3bff4fbccfca9b",
".git/objects/d6/9a26309cc458df58242c0eec8ea4760a8586ab": "98e9024d50f239ffbb2f4d6a894844ba",
".git/objects/d6/e3daf477dd75ad494c8539210c419d72bde2d2": "6aa85c831bb6da1f91fb98f4d4bc88ab",
".git/objects/d6/be99268666d5b51057e8aba3910e07524e7cbe": "ba80b72dca421d225c6accc553538737",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/f4/452928a74c82d052b4f79db2845f6545d0f51c": "a152716a099c2969b8ef1e211f3651a6",
".git/objects/c7/11f651a73a9e201a32b6c97ddcf995dbf8b9c1": "699e8a323dbc48187f762fc8a056fdcf",
".git/objects/c7/ad645a4f38f08e5242ce3f5b2f60292979275e": "5ac4b4ccd2113fc77357e0c02d396029",
".git/objects/c7/418817439b2f071c93a4a6cee831e996123c0b": "a973381dec3e0988db3e91122a03c303",
".git/objects/c0/c58500ceaf7056e8f48b46e7cb68c3501dfadb": "ae061c2603d5bf0eb291fbde8e1f023a",
".git/objects/ee/325c6c45db122308b5d7a4ceec263449f26a24": "fe27848d1176ff84965c803d5000a25b",
".git/objects/fc/849e17759fffc4068be7bd1b0c06984ef7fb34": "a739c1e59ab8e64be3a33b3e823cd3ae",
".git/objects/fc/963dfe2292c4e241afb5950e063414d544c093": "8cd8693ced3c797431323a7707d38029",
".git/objects/f5/ec356039d9ce7f83820b56c8c7e665acdaeac2": "529f820affe986807c4f7e8197565931",
".git/objects/f5/eaf7eb1511bd9532cebfae70e47524663de109": "50b1229f40423533da8629dc65d38889",
".git/objects/cf/e2d9f8fd1f1602ac2944104150deb151250322": "138cd42be5f7f5389f94211921b22a97",
".git/objects/cf/498ab40dcb7644fb76a46e5360a04c223acad4": "856ddc8c56cb51f6841ca072fa2200ed",
".git/objects/ca/77ffd59f04ec3f7499db4508c77c58d1c022cc": "2e2bf0259180b3b8940491a4c9aff774",
".git/objects/e4/ae46c6286b2d6c6676b0c3192fc92876778498": "c1fb9fd9132eb732a1d95b1d7a283648",
".git/objects/c8/df92b853992397794e13e57140bbab28367e15": "4e587a7e4ba7acfc9ac1796c5c862e78",
".git/objects/4e/bde8895ec8c6c54e4774cb27a14ca0f2b6772f": "3608d483bb1e9cc12fb51de658181090",
".git/objects/4e/f63e304fe3ee84dc1e41bdc4ec09ee95230b4b": "66604821b33151d3b575756f3abb359b",
".git/objects/4e/34e6e5d5e5ad88ddabeff3d6851da9b044769c": "b76b7508c938c199ab23268695916e80",
".git/objects/4e/334b9459b7ff268a618963e564942a32fb93ab": "68c984783f79195a604b22a68e36de94",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/18/a93efc90708eaff4f5ebb97f10ccfeb533451e": "5fe72ef2528726af665fac610654754d",
".git/objects/4b/80f4bddc474aaf8f7971390fa7b241f58906b4": "464876a7ae9ca38502137839e7a1e946",
".git/objects/29/6a7cbed95da465eafd0390246913212bdd923e": "353e55cce030b649071fb16dccf158c6",
".git/objects/29/efc236cf857320331b363f8454e0cd4dadc4ba": "0f51e288c0a850ede1f5a6cbd10d5163",
".git/objects/7c/5b119fd53f62837839fcb31db0b9ca87008306": "b0aeb9366109314e68ccc294aa22007a",
".git/objects/16/304f588c4539b5d417aa45fa998dbd4e43b2f8": "accc5a886eacd9b27bf52dfd32fef0da",
".git/objects/89/cffdd9365400b00b1b1ea7dd4a46cb787d713b": "628d00cc7e745f1d955d5ecc1a5185e7",
".git/objects/73/8652a11e9c4e9f5e9e82c306001ff0721a15de": "ee8f3732cdafc548e43dd660c354c4e3",
".git/objects/74/2ce786a9c067b09db59df9959717813bf72888": "ed268d1a8829432f9acee2f534f0ce54",
".git/objects/1a/2b3b0a12232a0de2508dbfc7d9aadedf461b35": "980bbb189eb1aadbd5748d1d6b0c754c",
".git/objects/1a/1e13d2b0d1877dbc8c8ff76543804a20fa5226": "14101df10771dd7146d8a5dc8542f46c",
".git/objects/28/54bfdb693fb94901511e420dfa278efe56c1e0": "735a85b64331de35fbde54d18f8ffa68",
".git/objects/17/9cc7ea56762a3632aa1de474f902d9f9fd478a": "0a846dba5a7b55faf034c847897f389d",
".git/objects/7b/63fcb9353ad3c55c0b9536296127573e6ddee7": "c0f04062130ca9511312fae5f241d662",
".git/objects/8a/451e254ee32ebe06171a55db9e137d193a9918": "aae5de5dd539db5f8e6dc25e0bb9eb77",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/f907f5db36f18a5997c732e3b1f3480707df1c": "b113ebbb9057e3bd8595fa89b142da40",
".git/objects/7e/ce3282a4f7824b249d9e568819d98bd2fa3da6": "8c71b613b9912dfd1fdf473a52e99214",
".git/objects/4c/681ad5b4c650bd26c2bf1bfcebf1ec3205566b": "203b0388c6d8f3eb8dade7311ec42b23",
".git/objects/4c/62b13cb4b69ec4ce608d2bffab6d951656f177": "faf3558de6ae4a0d488c74979d80d509",
".git/objects/26/dcc07d84607b9c3fb7eab72f9e695b5c7318c3": "2e2cb7ec37e3eeda456024c2a9c038b9",
".git/objects/21/41e0912ec28f19dd28015787ba3958926dcdf2": "9052f96a22583d93cf97f4082243f975",
".git/objects/75/9c747fc295ec56322b098dcd62074ae0fe339d": "26f97eae8f72458cfda9448524b5cafc",
".git/objects/75/014007886eacc0f873aa3ec5f8cf4436f37b2a": "b32931dabd4425f1130906981bab08c0",
".git/objects/86/aaee2f065b5815212d7992003b376994f6bf3b": "0a0d944e386cf843b59a62bbb4f11862",
".git/objects/86/b012abb3b05ff35accfa244eb4ff1badf9fb69": "601138bcde97807a6b49654007ae8ece",
".git/objects/2a/bf03542c17e6f7a7806a226c3be732b51c5a40": "4593012a42df8795cd0ae089a5b7aaaf",
".git/objects/2f/2ce6eda1cdc42692b16f7c2f8527d5a0f6b238": "40dfca8c01b8a027085743f3a285b3a1",
".git/objects/43/e86e016dcc57c7fb468b00933b8cb19d8d3c06": "052284ed1c9459a49ffbba4e174b797d",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/6b/57c80c095e649e04a9ffcc3b224e9975c8b3e6": "731e02d7105205bb738f7e5cd4ca74a3",
".git/objects/07/737fc16049e23d8261e83493131705c380eb6f": "7d7180868899c93ac301deecc5a13df2",
".git/objects/00/3cedfefb18058d0b3ebf086c647e48a632d712": "1f263a06ffc62f2c559ffac1aee527d8",
".git/objects/6e/cb68683477ecc5aed38ec3fc8910d9bb66276c": "8081799c6f0d89b405c8cca2b18cd6da",
".git/objects/31/726c6d4aff01b9bf3fef56b2275c65024ffd54": "0b3c4d0f12e6d0c2e223835b2c9909c2",
".git/objects/62/f722a0b781c02ec3b53f53d0eb99b33de9b623": "0e9bd9cc2d925edb6f1a32ec9e6d0bf5",
".git/objects/3a/658d7a3ce181b266beebe73814d558de7e985d": "f681c4e273c5df8b6a63942ad7c55c1e",
".git/objects/30/f368698babdce24c3823eba86f9e6d51c67517": "61411c1390c0df2e357a03a735cc134b",
".git/objects/5e/d4cdab7f26ff9a65b9b57fab024fe8912a1d9d": "b1f29768217bb5c016f63fb415778f2b",
".git/objects/08/37393157ad6bc190e7cfd3a067a2bc7673ef5a": "453dcac694bb48a369ee3bd71ed5d44f",
".git/objects/6d/99a38febd45cd4e20730751ef9cb2acb44a70a": "0884d1019d0a8266f514ab21cd0b3e9f",
".git/objects/01/5abee43e4b9b309904cc5acb99a3227d5162ce": "f97ab2b36d1132b9fa0bccb44fce1dcd",
".git/objects/6c/ce217ddc2efe3411dc9fa34e294e48e4cdf4f5": "8a6cc32e7f23f25e611213b06bb38448",
".git/objects/6c/7ff757acf11d0f4dbcf653b5dc590125fe7352": "968d21643bb88d2c7de590326a4281aa",
".git/objects/99/0cbe3dbbaca19d276b49a21056e39187fbd95e": "f0e0c89dce62c5239cecfd4de56b4751",
".git/objects/99/97a825019662e446ec6ce806622aead454c569": "ae59904808ef880ac8e7af219e11f07c",
".git/objects/99/f75b243fe6be68c8a66935796a91b7c0a6417b": "e5ebe209ceeb6ca4b941e087617b7fc2",
".git/objects/97/ab37067ab4ed102a51264fde142bc8d81d10d0": "b9c2f3e15963066ca0e6e45d46eb9546",
".git/objects/97/8a1871f1e16bfb22ec8a2d88a1821fb542cf52": "fb8eda27e47ff35e45190b51829791a2",
".git/objects/0f/fe00b92b2e2d21c1f33024760f685cbb7ffdb8": "6655e717f185770489b36816ed0d52de",
".git/objects/64/f80465dc6e9e213e660fe3907968729dac2921": "3048cf24ca417995569e2427838ce5b0",
".git/objects/bf/ab254081c104926b7675144da0f06087599949": "4b160ab08a0e191be50ae5f8138067aa",
".git/objects/a0/72db43b2cfaada17bdd61417c373c3c225e0db": "5963ce738dd3002b9e086e2d2a613f39",
".git/objects/b8/d706311155ca3a47709c5796eaf87a74ec638c": "be00220db5e66a6d66fab4098f677d3d",
".git/objects/dd/8f3008ebef94a0d63093f7544a5954f5e5009f": "21a860df8ddcfb999ceb0052df05ed8d",
".git/objects/dc/faa60ea5b61aee20ac88b5e3bc1c517460bac4": "2fb9d616e9fe334e9c738bd66725fdb3",
".git/objects/b6/3a14d6aeec11bce432820914e73db28e489634": "5396eaefc7f924544faf65ad35982038",
".git/objects/d5/81fc932e0206237c15905a114ae7eeeddf95fc": "ee91a1a843d28de1ea2e4789e17e2187",
".git/objects/d5/dde290bbafeb3fbf48362c0802f59ba294df5a": "d36fb766812cb02408f38ad67d0749fe",
".git/objects/af/1bb5098ac7e819a8eaebca129135f2cdf3944b": "31abe68411b03d0e2492230aa0b6e65a",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/db/ff88b405f0b95c5eb19ac0d5cced8779a9cd71": "d767388edec75b1aeae03d2fe064ef36",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/b0/801867ccd384289e3a50b941e52909c80d56da": "bad7e26fc26cf4bd6d90e3c8e4233adf",
".git/objects/b9/6e38d43259e226642d4da9b8a7a85b74438d57": "8bbbb5e1569e2a185c84f97b7831b326",
".git/objects/b9/98efeb5ee211c6f0244634e95083802743048d": "9ac3099633b4f9fb8d1f4ec362c50a10",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/ef/3f8ebaef559456e2563fa71f4a150ef925d7b5": "dfd7c24c1bc1ed6e10430311d482c709",
".git/objects/ea/5ff226c06aa3e4c9a47cbe0d37571f2dc17ad3": "d020acf3aae8c75467ae32a351af1636",
".git/objects/ea/8271f701a424d39d1b0d7a7bc6bae669e862a7": "6b30fe7c359af7bf3329fc7befde291a",
".git/objects/ea/199831c22c0bfbdf15d61b14cdcad3202fb5db": "c0acc1879ef097788286f4d97d368059",
".git/objects/e6/930e4f541a18910c7068fbcf42294c37a879e5": "fee465a0454ce153decb1c075c88071e",
".git/objects/f9/784d425ed2aa832e818a4a05193266d3d65e6d": "fd6784f99d5e610c1bfc1fe4d006be36",
".git/objects/e8/e2519f9c42eb76498ea1e49d420ef6e4680cba": "3997a4d7b8a55b1201a14f4d57fee7db",
".git/objects/e8/69d56ba2e1d3f6653bfe4cdfe1c1f83f686848": "2dafb2b78018551e6ace1783f8b75d08",
".git/objects/fa/b15daf8c27f1c67699b457fcfce14a4e575c2f": "b2f951faa535774a1b04fc5d6a6f2cd7",
".git/objects/c5/79e6fb62b5c48a1838b21a16da99434f578c7a": "a27b0f51d6dfa3c6c38aec1e2fe5316d",
".git/objects/c5/d104eb87e448bc41526ddeccda11bf23d58877": "ecf57144acfb6ab909b79b71a460fd58",
".git/objects/c2/2baf4d12091e9d1c5b38e5dca7bcc666b16767": "610799af89246a7db6bff77a3d4b1e6a",
".git/objects/c2/f0e2740ffcf3ade0c9861633f6c7f00de9b7d8": "179bba5358302cb73f914f983b0b3beb",
".git/objects/c2/5fd1d60302d3422e0321c1b6941bdcef0c58c4": "74a6dc70f038eb01b5498556f4af2c44",
".git/objects/f6/8211730793ab23ee071c7ea1aa90a866c0caeb": "fe31512366452f4a55a3d8caf17ed618",
".git/objects/e9/c462b8775ce7e7434fb2b6251c85d8397c19ef": "35728c7362fdd591c617dcdb507d120b",
".git/objects/e7/70dc9fa2da8482b61f2b067a34625d23ec6465": "e5b3bdabecb0643ee806dccea42be9b0",
".git/objects/cb/787ea9a0aa128c5ae8f3ff1d97013e0b3a00ca": "29d8ed8b74d44926b4d1dd5331c33c68",
".git/objects/f8/b94433a9ff0c181b2f2d43ef001f2a185cacc2": "ac561e8a5722a842e34e6e2b201bd651",
".git/objects/e0/a23299040f463c1c6fb8443dc1cbd49104fdef": "4fb4c3bf5428dac42f98f863c2aa1e17",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/2d/4f19061a834cb06e069a750bc8365f54e07547": "f9fdf3d02ebc57a08e8d02546622e223",
".git/objects/1b/93e9eba7badfe24113b2df4ce44056f0fe0a0a": "f9c09aa0c1d7c5d57d6aacf76da5f2db",
".git/objects/77/ebf8eb7c970f1c64464acefdbaa3ebd69fda09": "1b6de86e61c3ac8bf08b654104959d04",
".git/objects/70/15564ad166a3e9d88c82f17829f0cc01ebe29a": "b0b4eb8e40c5eaa3b07c9dcc175a4ab8",
".git/objects/4a/52b1b3dc0e226b4cd84f712552886a29e49bf4": "75da0ec6c5d44af2054b6ce86d29d714",
".git/objects/24/5dadfe519dfbb35dd515d6020b40eadc475144": "7144c427cc429f313871219f1a7b534f",
".git/objects/24/92c44a2de20b40ee64b10d8da1f8129227c78f": "073501c68e94efcd253bfbbb74e814d3",
".git/objects/23/7e7c0c17574c461b0f1f4a37d778cc1f9adfa1": "9a10eca2291f30a5e4b7180c985b9daf",
".git/objects/4f/8c711accad71c0c804efdb10eca1ceeaa074b1": "b15862c829dc7f5a900003a562027302",
".git/objects/15/98827043b650e2cfe996584584bf91c82c0b4a": "b982c2602ba98af7c43cd0f7f1173ee7",
".git/objects/15/6075b402b57db5c1b057ffd56b624ac817e8f2": "47d9ddf66f691687c1e02217fee6bb4d",
".git/objects/12/e7aa196ddd31351da4a5a4b559eb681de2245f": "8924ca981ed34d4de4bd8f6fe86d259d",
".git/objects/12/9a973a43c50143784749c2ebd736ee2b97170a": "fac4344a46001c47d8ad944958c9e24b",
".git/objects/8c/473f975bffd658a7cc31806b6049494dd6731e": "e6fa571da008df433db609737164c7b3",
".git/objects/85/a1cc2646cf6f3388272d91d5bd33ed6afdb67c": "b02c36993922167c857bc8ee14ddd9fb",
".git/objects/85/bb808e3a200aef43a0c7141e1dc05d99df03bc": "6cb89c0ef686a18151e96d12abbf8378",
".git/objects/85/c705061d33f6fea0a54c25d4506ba08980f317": "7eeeb31a5a425e0c5328737a41371b50",
".git/objects/1c/8cf5d767a7d9ac27f197cdf34db036c17ada93": "ad091f5b41c3e9eac1421c8f82c9da66",
".git/objects/1c/8f5e910bfb1a4a2871eeedc6eae01ca25e7ce1": "7d52f9ae3b3fac811829018aea2c668f",
".git/objects/49/385edc3c27fd5a6b6c5b4310df75e23deabff1": "f798158b2e250e4f44acf14fd440bd74",
".git/objects/2e/5659d50dc43094c52e2490550dc80ed91d367a": "e2581ac28fe4fec4b603ce56cdd33c36",
".git/objects/2b/371d82fe1cc176c2cb9ec7157a546c52d63a57": "5966be79124c41782321d6401e16611e",
".git/objects/8b/1ed963acc144c32be3eca1b9972a23d2b4b8c4": "fa8176d8d434d773c4feaf34860c9c0f",
".git/objects/13/1f87eaea45988776a54702fa6ac6412bb2d9b2": "1138faa7d1853b090738a6638a9bb4c5",
".git/objects/13/cbad4843adfa43611b0a0b7b43369f941cfa96": "c9b0462cf88d3b16cd8787ba5ce512f3",
".git/objects/7a/be03edf6ad69dad07abcb72ef34019fb64292b": "36498a4a203335be478ae94ad91e96df",
".git/objects/7a/cf5f2166efd9236dcee26dab6ad48af8581c39": "90267c365abc34232a3380c9cd59013a",
".git/objects/14/fc1bd6ef53a1c24a128408ca358818ae93fff4": "6f3ad44e4ee118902a52e95b20f576ff",
".git/objects/14/daec8e17d98c530b9fe20087e96add85f7c8a0": "82ab5ea6bc77b82409806a1199304c88",
".git/objects/25/0019d38fb1dddd749a56a0d342c2a9dfc693a6": "1e702fc4f4262bca9d8f9fa8b968a069",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "bf82af1c5738482bfd3f4197b68b8ca1",
".git/logs/refs/heads/main": "ceb2dc69f45c647f3374661689d7faf3",
".git/logs/refs/remotes/origin/main": "f632339dff02bb37b008435f33b0f4b5",
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
".git/refs/heads/main": "028780304b5fa0e26f3f62abf56f1584",
".git/refs/remotes/origin/main": "028780304b5fa0e26f3f62abf56f1584",
".git/index": "5cf5b69e3e90571a3df86ba2c6c582bb",
".git/COMMIT_EDITMSG": "e2c39d199ff257797d86cdc565899a02",
".git/FETCH_HEAD": "6d1a6d657290a69c6b8e5afe9b312975",
"assets/AssetManifest.json": "00eebc641d71783b4ec3097b87ed5369",
"assets/NOTICES": "c264b0c8a3070f36e1efca2325e053eb",
"assets/FontManifest.json": "fcd02b9f4c98888f27e5610dbf880526",
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
"assets/fonts/Lato-Bold.ttf": "85d339d916479f729938d2911b85bf1f",
"assets/fonts/Oswald-Bold.ttf": "e991dea9f65ce799dd72095ab7ad6e88",
"assets/fonts/Lato-Regular.ttf": "2d36b1a925432bae7f3c53a340868c6e",
"assets/fonts/Oswald-Regular.ttf": "e1996192b98a516646ff9a8c0c0ca90c",
"assets/fonts/Lato-Light.ttf": "2fe27d9d10cdfccb1baef28a45d5ba90",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/fonts/Oswald-Light.ttf": "4be970a1b24aa834afff4b16842c8981",
"assets/assets/rashid.png": "0eebf82b6035fa9866bfe4d9d9207930",
"assets/assets/brand3.png": "c0915a84744f3481a2105c5aea6727e0",
"assets/assets/email.png": "5eb3c4b86aafbee72b8c471b29413a50",
"assets/assets/mappin.png": "9cc090022ae31337336d2024160714b8",
"assets/assets/design.png": "6aaec412d8837ac9a83f03f453877606",
"assets/assets/person_small.png": "5a9529faba3a9713f28a3b28bf70459a",
"assets/assets/brand2.png": "91c6d8820e35e10e39757e0de6ac4345",
"assets/assets/m1.png": "c1277ed25c8f37d9dfad2fb9f69e4d8e",
"assets/assets/brand1.png": "f3a3a0de79048e1f14aac62ec76609b8",
"assets/assets/brand5.png": "fc57e9a9ff95830ea207e2452ffd4bd6",
"assets/assets/flutter_anim.json": "cb9a5c57016ad6e845311fdd2a328b9e",
"assets/assets/python.png": "7c561f00353ee0ce2dd0e74c917630f3",
"assets/assets/brand4.png": "e9441e9a5d26e508f592aa31b9febff6",
"assets/assets/male.png": "a687ddbf4597360c3b9e293a58b1d829",
"assets/assets/promote.png": "2bd8adcad79a4ebb80888d1a0583b3c4",
"assets/assets/f3.png": "4449e8de5f626780bc536bf266428d6e",
"assets/assets/female.png": "29c52b49d99a5de88d34ab04aafe3f59",
"assets/assets/quote.png": "1a0aa9a06293ac5689bc32012e0e13e6",
"assets/assets/develop.png": "471c2c94d5d04112086eba9fd78c6809",
"assets/assets/macos.png": "3b8f0870a696a4c4ebb8a5be863d44da",
"assets/assets/laptop.png": "fb49e3c0c36437239db5f8c114b03062",
"assets/assets/reapet/r2.png": "f588edff0368e8f48d97b69887bf8dfb",
"assets/assets/reapet/r3.png": "36c8d9c9f17cdb8b177a0c4215326ed6",
"assets/assets/reapet/r1.png": "23095eb23882bc2e9f648fb0d9b9bedc",
"assets/assets/reapet/r4.png": "46c2b161c085aad0df0b02b1824e4410",
"assets/assets/reapet/r5.png": "60dabe8b960fe046f51b20176a86cedf",
"assets/assets/heart.json": "7814d2e455346dbdd7f457f30b008746",
"assets/assets/phone.png": "45903a1ffa9ede882171aca9f71c4c29",
"assets/assets/ios.png": "81d2827c6edd709125123112dde38f6c",
"assets/assets/write.png": "dc4f0d3df06d5fc9b13b9168b88e2560",
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
