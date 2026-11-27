"use strict";

const byId = id => document.getElementById(id);
byId("year").textContent = new Date().getFullYear();
const audio = byId("audio");
const musicTitle = "nudisco ai lofi";
const originalSoundPalette = [
  {
    "id": "station-sound-little-constellation",
    "title": "little constellation",
    "duration": 3.2,
    "sha": "ea8e2e72565c0b66e28b474862b4d9404b76661748a7c62d9485e7774003b2d9"
  },
  {
    "id": "station-sound-cosmic-drift",
    "title": "cosmic drift",
    "duration": 6.5,
    "sha": "e6042db6fb1fc6870bd07146559d980daca7ac8f0b7a24cece8c6e82f892033a"
  },
  {
    "id": "station-sound-station-ambience",
    "title": "station ambience",
    "duration": 12.0,
    "sha": "a8f58afdfc1eda4e8026dc36d8c476127f0ffe6523a326ee04b800eac20ed6a6"
  },
  {
    "id": "station-sound-quiet-transition",
    "title": "quiet transition",
    "duration": 6.0,
    "sha": "6a865eb045c8574244d17bf42dbed1736cdda236a6006bee718e7dee95280ef8"
  }
];
const solfeggioSoundPalette = [
  {
    "id": "station-sound-grounding",
    "title": "grounding",
    "duration": 8.0,
    "sha": "cb7e7cb3e5a94a9c0e15d5c195ac0a68ee3482fbfd5f2515447d41b830dd84cf"
  },
  {
    "id": "station-sound-quiet-harmony",
    "title": "quiet harmony",
    "duration": 9.0,
    "sha": "55e13f8b458c64ad20b3a987d8787320c798c1428f31c752fc6eaacd9df8fe14"
  },
  {
    "id": "station-sound-friendship",
    "title": "friendship",
    "duration": 4.0,
    "sha": "f2c97b856cb264edebd0a45bc01732e741f236c44125a0c5ccd0ffd8baa217cd"
  },
  {
    "id": "station-sound-cosmic-stillness",
    "title": "cosmic stillness",
    "duration": 12.0,
    "sha": "184b038ec18114dc5e505c6d98f607ee1bdadd34a7d54eeb4ec30f7dec52bcf5"
  }
];
const stationSoundPalette = [...originalSoundPalette, ...solfeggioSoundPalette];
const introSoundPalette = [
  {
    "id": "station-sound-station-ambience-intro",
    "title": "station ambience intro",
    "duration": 3.6,
    "sha": "ed2b4ce19353720dd45844f2d772bc78484a703e37169c6bbf23f0beb6e5a18d"
  },
  {
    "id": "station-sound-little-constellation-intro",
    "title": "little constellation intro",
    "duration": 5.3,
    "sha": "e6d02827c3a2ed1053cfb4d0bc8e8520b285ae68e51963f0c2aab310910069ac"
  },
  {
    "id": "station-sound-cosmic-drift-intro",
    "title": "cosmic drift intro",
    "duration": 3.4,
    "sha": "4d51f72d6d33ed0ad63eb3f233219cb4b4807d0769010899993fe59a8c8a1c1b"
  },
  {
    "id": "station-sound-quiet-transition-intro",
    "title": "quiet transition intro",
    "duration": 3.05,
    "sha": "c9ba914c98e1848bc214d60c370b5c7d95d2d0e61a78d85bd24bc3f276acf206"
  },
  {
    "id": "station-sound-grounding-intro",
    "title": "grounding intro",
    "duration": 3.2,
    "sha": "9e249186f057c3a705e1a8b347dd64a5f2f188b91aef664709a362b7fc09af0c"
  },
  {
    "id": "station-sound-quiet-harmony-intro",
    "title": "quiet harmony intro",
    "duration": 3.6,
    "sha": "5dc0c7330b178af050fda39f156b6d369330f62259b16a55cf6041a62102362f"
  },
  {
    "id": "station-sound-friendship-intro",
    "title": "friendship intro",
    "duration": 2.6,
    "sha": "fa6841726a5af03fd5be459d06ca93c9e090a619c4bac46bd9da8b794cc2aa96"
  },
  {
    "id": "station-sound-cosmic-stillness-intro",
    "title": "cosmic stillness intro",
    "duration": 4.0,
    "sha": "530cb3190421d65699f84e8c9e7851166196d949409b14c54725b8de98a7e1fd"
  }
];
const expansionSoundPalette = [
  {
    "id": "station-sound-glimmer",
    "title": "glimmer",
    "duration": 4.4,
    "sha": "68f3e6ea09cc06620c2312c7b296e9564f40e5a94ac5380929c3f030ea2a466e"
  },
  {
    "id": "station-sound-magnificence",
    "title": "great and powerful",
    "duration": 5.0,
    "sha": "9f0a61365911e76fe98941e790e12b11864c91d129dc3a73e0f267cdef49c18e"
  },
  {
    "id": "station-sound-ancient-harmony",
    "title": "ancient harmony",
    "duration": 5.8,
    "sha": "1eeb68a32ef5eb40be067589139eda54140ce08d0c9d538e17d681f3ea636841"
  },
  {
    "id": "station-sound-enchanted-library",
    "title": "enchanted library",
    "duration": 4.8,
    "sha": "68276bbbfc8d7c0e0a0d32a633cd6da16dc956b83575a250ec807a9324aae135"
  },
  {
    "id": "station-sound-silver-sigil",
    "title": "silver sigil",
    "duration": 5.6,
    "sha": "4d2ce18b21c8e4d64c6a153bd8c4ecc47dc765b165df70cae55d3568a82a771f"
  },
  {
    "id": "station-sound-through-the-portal",
    "title": "through the portal",
    "duration": 5.2,
    "sha": "07b2d2cc7ba80df6d98576522e8766427cbc70f1ca49411d551eb714e6943e99"
  },
  {
    "id": "station-sound-corvid-sanctuary",
    "title": "corvid sanctuary",
    "duration": 5.6,
    "sha": "6d3dbd8a8aadfd5503d77b7c73ff50c7744902dd6ebc44c9eb44e66c1e63ef8d"
  },
  {
    "id": "station-sound-cosmic-garden",
    "title": "cosmic garden",
    "duration": 5.0,
    "sha": "c417e434d77ac8ec25c2701a99712721aacf2226d149668db99aec46e29d8718"
  }
];
const expansionIntroPalette = [
  {
    "id": "station-sound-glimmer-intro",
    "title": "glimmer intro",
    "duration": 2.8,
    "sha": "643aa69b63a1fff634c5b5e751ec4f7280d76ac73cd1b64d5d66411f2fd91478"
  },
  {
    "id": "station-sound-magnificence-intro",
    "title": "great and powerful intro",
    "duration": 3.2,
    "sha": "faaf894b8aaccee7bea9d7fdd1ba6cbafb1c7a9caea62d7bddb781146e5c9398"
  },
  {
    "id": "station-sound-ancient-harmony-intro",
    "title": "ancient harmony intro",
    "duration": 3.6,
    "sha": "b06fa12126bde4cc294b470dbb339853a1687d0d3f1f098025729dc6a876e808"
  },
  {
    "id": "station-sound-enchanted-library-intro",
    "title": "enchanted library intro",
    "duration": 2.8,
    "sha": "656354d3da38a27c116ea4ffc74ff37fb047362c88198636fc7f18c0ffd0ea69"
  },
  {
    "id": "station-sound-silver-sigil-intro",
    "title": "silver sigil intro",
    "duration": 3.4,
    "sha": "0c5398c54a005841526e9bf1cb36c3ce4303663c5335b055b6bcd5d60e53972a"
  },
  {
    "id": "station-sound-through-the-portal-intro",
    "title": "through the portal intro",
    "duration": 3.4,
    "sha": "ea827323a6f6d660018b757570210485fa90481010bc75f6e8aebc24377d34ea"
  },
  {
    "id": "station-sound-corvid-sanctuary-intro",
    "title": "corvid sanctuary intro",
    "duration": 3.2,
    "sha": "3f627e99ea6aff6141bbb3e30053a7cb98df24305b7bb2b18ea3ba729fbddc99"
  },
  {
    "id": "station-sound-cosmic-garden-intro",
    "title": "cosmic garden intro",
    "duration": 3.0,
    "sha": "66fd3ede970e1a12214ee5cec5079c3fb0cff23e9b6fec76547c17aa7cf606d6"
  }
];
const auditionSoundPalette = [
  {
    "id": "station-sound-violet-reverie",
    "title": "violet reverie",
    "duration": 5.4,
    "sha": "348eaf9bfcabbb6074ea46af9cfa934a9fb3c9f6ac1bca42fef1d312fa3481a3"
  },
  {
    "id": "station-sound-crystal-snowfall",
    "title": "crystal snowfall",
    "duration": 5.8,
    "sha": "8ef5eedff53315413d324d395b45c35fc8d47864295c8e05af653e2292fc451d"
  },
  {
    "id": "station-sound-velvet-curtain",
    "title": "velvet curtain",
    "duration": 5.4,
    "sha": "a2b6e41174ea752c5c3eb66c6a4c427627ec27e2df4c80588767405ce1886743"
  },
  {
    "id": "station-sound-silver-flourish",
    "title": "silver flourish",
    "duration": 5.8,
    "sha": "1f43ac51825fe37a4628d911a00a54b1770fb2153107a685f4fea8d7c985f8fd"
  },
  {
    "id": "station-sound-moonlit-pages",
    "title": "moonlit pages",
    "duration": 6.2,
    "sha": "04a605523f140390f5544333d4024c7024c5bb4342459705ae6990f3357b25bc"
  },
  {
    "id": "station-sound-everfree-twilight",
    "title": "everfree twilight",
    "duration": 6.6,
    "sha": "23ee9aebb8e973eed8db5685a75728e02335d8faa399dd3869919dd2347639f7"
  },
  {
    "id": "station-sound-echoes-of-antiquity",
    "title": "echoes of antiquity",
    "duration": 6.4,
    "sha": "53861c0c854bc1d5736375e92eb6bd44e98e8235a59ac09325f9a54f206fc245"
  },
  {
    "id": "station-sound-fourth-dimensional-signal",
    "title": "fourth dimensional signal",
    "duration": 6.4,
    "sha": "8b5d7723561190befd1fd75d5fd4683d6ead0e7db8cfa1fbe22428a6866de834"
  }
];
const auditionIntroPalette = [
  {
    "id": "station-sound-violet-reverie-intro",
    "title": "violet reverie intro",
    "duration": 3.35,
    "sha": "db1360def48f7e345799883cfddfd59f00d1e421049c2484eada000563af83d5"
  },
  {
    "id": "station-sound-crystal-snowfall-intro",
    "title": "crystal snowfall intro",
    "duration": 3.6,
    "sha": "62819aaafab71ebcb5a427f77173aaf4430d9efe161784c0e0669bcac9e08e17"
  },
  {
    "id": "station-sound-velvet-curtain-intro",
    "title": "velvet curtain intro",
    "duration": 3.35,
    "sha": "89cac83b43b25ff8469bf91939e93c222100bd56dbafaccdde01a38812b089ca"
  },
  {
    "id": "station-sound-silver-flourish-intro",
    "title": "silver flourish intro",
    "duration": 3.6,
    "sha": "2e1ffa84222d717b9fc376d80446f231e7c8e5fd7fe8965335cc369038731879"
  },
  {
    "id": "station-sound-moonlit-pages-intro",
    "title": "moonlit pages intro",
    "duration": 3.84,
    "sha": "1b2907d5a24a83c1d9ee0fa0e3a05f73127d0a9944992891cf022a8aaec40036"
  },
  {
    "id": "station-sound-everfree-twilight-intro",
    "title": "everfree twilight intro",
    "duration": 4.09,
    "sha": "37eb9b7f525d8a71174c676b32e71f96d0a87279536f5f6fbca7b5c3df1ba104"
  },
  {
    "id": "station-sound-echoes-of-antiquity-intro",
    "title": "echoes of antiquity intro",
    "duration": 3.97,
    "sha": "c2143abd2f671d3f1fc7b8e50aaa854110646e466ac88cc195019dde0a4a12b6"
  },
  {
    "id": "station-sound-fourth-dimensional-signal-intro",
    "title": "fourth dimensional signal intro",
    "duration": 3.97,
    "sha": "33248e66ea439b83ff21f6cdedb12f43449456af1384cd7ed79a3d8df2fc847a"
  }
];
// Editorial sound cues: known passages, not a rotating sound lottery.
// Default to the familiar lofi theme; custom paired recordings take precedence.
const editorialSoundCues = {
  "custom-a9a18b9c61625d48a1e02f21860a811a": ["quiet-harmony", "quiet-transition"],
  "custom-82a3ca62db4f53caab08f9d4818e03fa": ["friendship"],
  "custom-20887a87483e57c4ad1889cb30e0b99a": ["little-constellation"],
  "custom-9315a98a84c355348330aadb0756186b": ["quiet-harmony", "quiet-transition"],
  "custom-077f9e5888115661b4b0bb205a020023": ["friendship"],
  "custom-a00b0bcee27f5b72a7c164e4d1cd1765": ["quiet-harmony", "quiet-transition"],
  "custom-66584f775cff5810beaa5e7a11a879d8": ["cosmic-drift"],
  "custom-d8647292c66e5c518623a8c6b65e0d45": ["quiet-harmony", "quiet-transition"],
  "custom-455e0a1512ec5e5ab094c0e1c2923061": ["cosmic-drift"],
  "custom-ce9c24ef89c3559aba8c7a99164b33d3": ["quiet-harmony", "quiet-transition"],
  "custom-8cce7fc6483454d08e819b11291b8ba3": ["quiet-harmony", "quiet-transition"],
  "custom-f74799acbf3c57f780c0cbf832dfbbc0": ["cosmic-drift"],
  "custom-ad439f19c7165103a70117bc7a197708": ["friendship"],
  "custom-fff92760b3f450ee8cbc743ade21b056": ["little-constellation"],
  "custom-ebe28907c17750da9d1beba7aff88b2c": ["friendship"],
  "custom-baf88973b09d51ca93939ea22faeb868": ["quiet-harmony", "quiet-transition"],
  "custom-a2b1932ced055cd6ab24c2c72d9f154d": ["quiet-harmony", "quiet-transition"],
  "custom-522dd44da5195c5db83e066092fd8448": ["friendship"],
  "custom-189fce236a6852f8b00ef3da22a65e37": ["quiet-harmony", "quiet-transition"],
  "custom-f5be4bfe6ad3565b8cf2a766cd34697a": ["friendship"],
  "custom-0b848e87f566507e8e6b0f1f62968eb4": ["little-constellation"],
  "custom-365de3f971ba5f259fcaca8f57d5c880": ["quiet-harmony", "quiet-transition"],
  "custom-0d20c8d0de195afa995fdb85a43c18f0": ["friendship"],
  "custom-7c5359e51a025388a3149fef9d16e91d": ["quiet-harmony", "quiet-transition"],
  "custom-56e979e4ca325da3b2ca3f07c074e477": ["quiet-harmony", "quiet-transition"],
  "custom-d27b69ebb808518981a4db78057579bd": ["quiet-harmony", "quiet-transition"],
  "custom-0bb28eef3816503c987cb7583a6039d9": ["friendship"],
  "custom-455c2c77034b58dcb8d674507e47c8d1": ["cosmic-drift"],
  "custom-2bfb55c33a94503b8c0021759e3cdea4": ["quiet-harmony", "quiet-transition"],
  "custom-0ee2433f74d65b018c6e0c3910a1c3cd": ["friendship"],
  "custom-6a5885ec568c53d999784369778c95d5": ["quiet-harmony", "quiet-transition"],
  "custom-e0e98f77ea2053d4baedf58fa1bd2892": ["quiet-harmony", "quiet-transition"],
  "custom-61f9b7cadf745a16abda638ff12a2ff6": ["quiet-harmony", "quiet-transition"],
  "custom-2fba38e49717524d82071f815f2d8fc6": ["quiet-harmony", "quiet-transition"],
  "custom-0e32ff7ee5795e85a2d34a080689f582": ["little-constellation"],
  "custom-a543810ae49f578b9641bf678be518ee": ["quiet-harmony", "quiet-transition"],
  "custom-63c6b25bbb785f45a487fd3a67f81c01": ["quiet-harmony", "quiet-transition"],
  "custom-93a64384a97052058b50eb70080bbc17": ["quiet-harmony", "quiet-transition"],
  "custom-7c825b65381a5dcaab860c9f58873f80": ["quiet-harmony", "quiet-transition"],
  "custom-a6c2d6019f09549abf889e4a96b59392": ["friendship"],
  "custom-c4643f05f4e55b039e7c88937f796ad8": ["cosmic-drift"],
  "custom-6281fea6dd965d3db92a4d1c65553229": ["quiet-harmony", "quiet-transition"],
  "custom-f7e1e67942d153b8919752d4104ac9d6": ["quiet-harmony", "quiet-transition"],
  "custom-df743f2784c95ecc9f73d751f82e0f77": ["little-constellation"],
  "custom-64a0ed96312254bf8c9f6f6d5e872d9c": ["friendship"],
  "custom-7fecba604b5d52bf8c86f05e293b49b3": ["quiet-harmony", "quiet-transition"],
  "custom-76476e9c5a5255549d605c38ca7d7a7e": ["friendship"],
  "custom-c5af481c71485dd6ab8d8a4ee6e69e14": ["quiet-harmony", "quiet-transition"],
  "custom-8a02333dee9357e3b647b14b142617d4": ["quiet-harmony", "quiet-transition"],
  "custom-4e709d53646e58eabac1b49b696cf0db": ["quiet-harmony", "quiet-transition"],
  "custom-1af2f2e1086d56f1a58e4cf531978bf9": ["quiet-harmony", "quiet-transition"],
  "custom-874901edba5758bb8bc7f7140a8ee3a6": ["quiet-harmony", "quiet-transition"],
  "custom-8dcd5d73a40a5cc7b92595adb269f244": ["friendship"],
  "custom-4f259fcf035154609897d25c4c637be1": ["cosmic-drift"],
  "custom-c8fd22f75f485f46b0f029d93682fe03": ["friendship"],
  "custom-0a567e40ae5e592bbeea5205d95b6311": ["cosmic-drift"],
  "custom-0b9e0c441eb3558ab8d7d54f5034e423": ["cosmic-stillness", "cosmic-drift"],
  "custom-780e8bbe5a9955c7b46724a80aa52676": ["cosmic-drift"],
  "custom-f3043f8fe28a5d2ab38113e52427f9f5": ["cosmic-stillness", "cosmic-drift"],
  "custom-ed299bd0f5f35c339772283c2f9eafc7": ["cosmic-stillness", "cosmic-drift"],
  "custom-564c562369945d3b90b8fe1f0cb30a9e": ["grounding", "quiet-transition"],
  "custom-a316c82e9e1f53d095efeadadd6e9187": ["grounding", "quiet-transition"],
  "custom-8f86c3b679865e1bb7107fc004c9c3bf": ["grounding", "quiet-transition"],
  "custom-e0e9fad163665f9ca41b28cc4936b225": ["grounding", "quiet-transition"],
  "custom-aa7362f4e7265f338b4e0b433b396951": ["grounding", "quiet-transition"],
  "custom-ca7ffd3ed81756a0b24aa52292392335": ["quiet-transition"],
  "custom-2272e754b41c55efa55e92d3260b8d06": ["quiet-transition"],
  "custom-2b8cfe291010534c9daf18573c0a8f9e": ["quiet-transition"],
  "custom-50aaa1ce96555b249bae1488b8fd0001": ["quiet-transition"],
  "custom-981ddc8587285c42823c60419b05983e": ["quiet-transition"],
  "custom-2fdb3ab32c915fed867a477d98b50a6b": ["quiet-transition"],
  "friendship": ["friendship"],
  "read-links": ["station-ambience"],
  "booth-wave": ["little-constellation"],
  "corvid-line": ["grounding", "quiet-transition"],
  "feature-breezies": ["friendship"],
  "feature-twilight-letters": ["friendship"],
  "feature-card-artist": ["quiet-transition"],
  "feature-second-raven": ["quiet-transition"],
  "feature-biscuit-note": ["little-constellation"],
};
let soundBoundary = 0, previousBoundaryHadCue = false;
const lastCueBoundary = new Map();
const expansionCueChoices = Object.freeze({
  "custom-9c316d9f69e356ed9b7da99d863b4a57": [
    "glimmer"
  ],
  "custom-77a0a64cf53f524385e6e837970e68c1": [
    "glimmer"
  ],
  "custom-b1dab4516fcb50cb9e2ce14e1f4d31d9": [
    "glimmer"
  ],
  "custom-5fde513972eb5bed98b46acb22d9f9de": [
    "glimmer"
  ],
  "custom-559f1d1887f150a08ee1911e0d1cb56d": [
    "glimmer"
  ],
  "custom-6078cadbfbfa524caf5514c532f8a6cd": [
    "glimmer"
  ],
  "custom-cad3a20a85485e77b6a9abe9c49dc3d0": [
    "glimmer"
  ],
  "custom-f5824cc8da5d538eb98b6909fc52ebd5": [
    "glimmer"
  ],
  "custom-1a269679cea158a299b7e818f496da09": [
    "glimmer"
  ],
  "custom-b8487c8bd4ad5882a35da15320116df2": [
    "glimmer"
  ],
  "custom-8aa6763a31fd50428947d6e989e1bce8": [
    "glimmer"
  ],
  "custom-d16d2e63271955ff9db63fca7e257090": [
    "glimmer"
  ],
  "custom-b510c8a9a94e5563b4efded5329b4cdd": [
    "glimmer"
  ],
  "custom-d1a434290b285c34b633860f020ba439": [
    "glimmer"
  ],
  "custom-50174a1d7ce75200a38af77a18329eb8": [
    "glimmer"
  ],
  "custom-36668d392d815552a9fae2e67836f73e": [
    "glimmer"
  ],
  "custom-ff827e53070f5d668f59df5e30124972": [
    "glimmer"
  ],
  "custom-b002f172aafd53ad9059c76e24122f0d": [
    "glimmer"
  ],
  "custom-ff6d0494aa9c59e08e5fa4473cd40985": [
    "glimmer"
  ],
  "custom-9de18ee946d557d3afa53146fd5f2d3d": [
    "glimmer"
  ],
  "custom-1df85308d307576ab7176bfa022aa3f3": [
    "glimmer"
  ],
  "custom-b1a5e88bd5cc5ddaaf1772d60461c6a4": [
    "glimmer"
  ],
  "custom-656ad87e8fc85f769a98b44030b54237": [
    "glimmer"
  ],
  "custom-63e01d6e017155058745ff24c219534f": [
    "glimmer"
  ],
  "custom-8b1c083c16da59b8b3e8ed9d0c0e0bdc": [
    "glimmer"
  ],
  "custom-9c04f6b5db1c58dbb1c4aa48f53b44ef": [
    "glimmer"
  ],
  "custom-a9ceb5b9d9ce5135bdb04b68c86c29be": [
    "glimmer"
  ],
  "custom-c21faea8771f579285dd5385df22d559": [
    "glimmer"
  ],
  "custom-9440d18ef1d05e2fb6b0cf0d3ae3be03": [
    "glimmer"
  ],
  "custom-912f695d1b035edd9093fdde339a0d53": [
    "glimmer"
  ],
  "custom-83a14fded46a574f8d31a97ab9a3c514": [
    "glimmer"
  ],
  "custom-d8658fb24b435c1ea65aa05637d9df5d": [
    "glimmer"
  ],
  "custom-560d9882c83457169b87509bbce4e1e9": [
    "glimmer"
  ],
  "custom-96bfee47c1ce5034a67ba2e8e446d8e5": [
    "glimmer"
  ],
  "custom-3356414231e051d89fad54b4127101cc": [
    "glimmer"
  ],
  "custom-d7c7f8f2185551888ab8e2496a1d677a": [
    "glimmer"
  ],
  "custom-05f654c6378a59e4a4a94f1763534f49": [
    "glimmer"
  ],
  "custom-b1f71af449405682b6cc727ae930d6e0": [
    "glimmer"
  ],
  "custom-7f64ba1706ab50bc9316218d30c10ec7": [
    "glimmer"
  ],
  "custom-0ade2d378d35553d87c32e0d8d2d5f0b": [
    "glimmer"
  ],
  "custom-0bb014d4857455888564fc71c0df172e": [
    "glimmer"
  ],
  "custom-294bc4d08f185ddca23662cd20419458": [
    "glimmer"
  ],
  "custom-0915588ca6525771b6e1af697576273d": [
    "magnificence"
  ],
  "custom-93079f6bb6ed548383ea0afe325b5191": [
    "magnificence"
  ],
  "custom-bbbe675e4db9519db8794bc822233992": [
    "magnificence"
  ],
  "custom-2c1f9ba457615b32b48ebdc865f52612": [
    "magnificence"
  ],
  "custom-d09bcb238cf158dbaa11609e0eff0170": [
    "magnificence"
  ],
  "custom-7e5a4311adb15e03a02e72ccf526464a": [
    "magnificence"
  ],
  "custom-ef697f40c1df5347b5b5976c70924089": [
    "magnificence"
  ],
  "custom-6a4a4514b0ba5be09c695e6ed26cc41b": [
    "magnificence"
  ],
  "custom-a2a257b3bf9f561fa63441073b830181": [
    "magnificence"
  ],
  "custom-eb83a0ab04c452bcaad6a34729caa843": [
    "magnificence"
  ],
  "custom-343d6736b3805943a8c425843d24cb82": [
    "magnificence"
  ],
  "custom-ca77ccf5b8ac58dca27461a45d840314": [
    "magnificence"
  ],
  "custom-3ca2656cf707534197b7a02776f8c8c1": [
    "magnificence"
  ],
  "custom-c23856b9d62a548d8523cfd6f3dc1626": [
    "magnificence"
  ],
  "custom-9baace3cdcab54f6b0e80da6dfd58e6b": [
    "magnificence"
  ],
  "custom-04fb16bb626454c8a9eafaf81b3d500e": [
    "magnificence"
  ],
  "custom-e040407bc16d509292234ae2a572e364": [
    "magnificence"
  ],
  "custom-aae47698189359519a81ae5dd2d22194": [
    "magnificence"
  ],
  "custom-836818618b005ad49444b33cbaee4738": [
    "magnificence"
  ],
  "custom-3c28949c957450059d0a56caa184a682": [
    "magnificence"
  ],
  "custom-37ac6944df0f5f92b5dab8ed206fea2b": [
    "magnificence"
  ],
  "custom-b28e109ed4b05fee8f6e979c2dca20b2": [
    "magnificence"
  ],
  "custom-1e7f3fbaea8050f8bd197c2f5a39bea4": [
    "magnificence"
  ],
  "custom-2214f61a7ac45d9d86d8c5a58f63300b": [
    "magnificence"
  ],
  "custom-c85ccc55c1945372bb0b5b6ffb044abd": [
    "magnificence"
  ],
  "custom-fba8d7b143b559f780fbde5c54308e10": [
    "magnificence"
  ],
  "custom-e08247aee15d5062b3343920821ba061": [
    "magnificence"
  ],
  "custom-df853c4fdefa56ca921bd8079b0cd427": [
    "magnificence"
  ],
  "custom-bbeedb862fe65aaca4a5f15fcc73a876": [
    "magnificence"
  ],
  "custom-c3baf718edb35f87a75c057804c472c6": [
    "magnificence"
  ],
  "custom-1dc6e7c98e3d58d1a071c9bbd2738299": [
    "magnificence"
  ],
  "custom-93d27f71c2ae5428846037adee9073e3": [
    "magnificence"
  ],
  "custom-1e22a50331035c0d97e8791268c2c191": [
    "magnificence"
  ],
  "custom-b064527525c55fb4a9ae8049fb275d26": [
    "magnificence"
  ],
  "custom-3b179671dd645690a077c01bb2e17d44": [
    "magnificence"
  ],
  "custom-4bf85a4bc84a502498766fd7e7cdce06": [
    "magnificence"
  ],
  "custom-8189fd6a1e845ea6b707b542453d74c5": [
    "magnificence"
  ],
  "custom-fd451d49f9505213b01482ffb3b09c81": [
    "magnificence"
  ],
  "custom-e637f2ab3f6a5131a13039628e4b6841": [
    "magnificence"
  ],
  "custom-be8333ce85cd52bfb708d4fd52a033f5": [
    "magnificence"
  ],
  "custom-18e497683f4953c3a3931425a633595e": [
    "magnificence"
  ],
  "custom-d2070394f40e5a96932f8e0259dd62b7": [
    "magnificence"
  ],
  "custom-57d4b8d8ee3b563eb6a6a10052d0750b": [
    "ancient-harmony",
    "silver-sigil"
  ],
  "custom-d5cb7ebe2f9659c8a9bd6a89eaf230f6": [
    "enchanted-library",
    "ancient-harmony"
  ],
  "custom-3ce2613b265d5897b8a1c29c9e27ce8a": [
    "ancient-harmony",
    "silver-sigil"
  ],
  "custom-d0dbc3f4cac2507594f4e1324f65d1be": [
    "enchanted-library",
    "ancient-harmony"
  ],
  "custom-a3f5b7b412925b2980ff2cd81b9b53fe": [
    "ancient-harmony",
    "silver-sigil"
  ],
  "custom-b1c5117880685151a66a601a1c91d24f": [
    "enchanted-library",
    "ancient-harmony"
  ],
  "custom-d36511a3036c507083296416bf38c7ef": [
    "ancient-harmony",
    "silver-sigil"
  ],
  "custom-3cfe8a5f9b875ceda45e1ec370b1dd6b": [
    "enchanted-library",
    "ancient-harmony"
  ],
  "custom-0f8da78bbbe45ab0a0b52bcd123adb9c": [
    "ancient-harmony",
    "silver-sigil"
  ],
  "custom-07f533ae1d075c6480e6bdd0cd902919": [
    "enchanted-library",
    "ancient-harmony"
  ],
  "custom-d61a39f959eb53448e904d277e75d962": [
    "ancient-harmony",
    "silver-sigil"
  ],
  "custom-506f2dc16fdc51349c8642c0cd7c5924": [
    "enchanted-library",
    "ancient-harmony"
  ],
  "custom-7f1f9bd1498954daacc623c02a4c92f2": [
    "ancient-harmony",
    "silver-sigil"
  ],
  "custom-914144ee17fc5a209d6e3dc196f93b5e": [
    "enchanted-library",
    "ancient-harmony"
  ],
  "custom-2c2097b6476558fbadef822fffc72b8a": [
    "ancient-harmony",
    "silver-sigil"
  ],
  "custom-7f1ead92d2e85bbe84dedc81da41c1aa": [
    "enchanted-library",
    "ancient-harmony"
  ],
  "custom-3d25f429efd3501482ffd4060827a4c0": [
    "ancient-harmony",
    "silver-sigil"
  ],
  "custom-4e5bf30477d55165968544adcfca6131": [
    "enchanted-library",
    "ancient-harmony"
  ],
  "custom-fd7306c40c2957fe8fcf8413caf5f60b": [
    "ancient-harmony",
    "silver-sigil"
  ],
  "custom-17f32d2ec6605a5d9afe4d3f4539eeea": [
    "enchanted-library",
    "ancient-harmony"
  ],
  "custom-c319b709d9fa5643937edf3f01e9cb67": [
    "ancient-harmony",
    "silver-sigil"
  ],
  "custom-0ac4a0f2745756a1b0fff5cd0a14bc39": [
    "enchanted-library",
    "ancient-harmony"
  ],
  "custom-801e7e891f5155c3b443fddd835d8e84": [
    "ancient-harmony",
    "silver-sigil"
  ],
  "custom-52424f2d680c54ceb9b6584f6d07fe3e": [
    "enchanted-library",
    "ancient-harmony"
  ],
  "custom-f7d744dc7a30550eb6d07152e126f200": [
    "ancient-harmony",
    "silver-sigil"
  ],
  "custom-31a436ae4abc5925812f3afaacf0a90f": [
    "enchanted-library",
    "ancient-harmony"
  ],
  "custom-6bee7f7176e356cb94331cd4e7613a4a": [
    "ancient-harmony",
    "silver-sigil"
  ],
  "custom-89b8c2b6410c5071a261219f1e57241f": [
    "enchanted-library",
    "ancient-harmony"
  ],
  "custom-f6696e0dbdd953b1897c77b58bfaa08b": [
    "ancient-harmony",
    "silver-sigil"
  ],
  "custom-3c5254774e5052fa8cf1316ce8b10509": [
    "enchanted-library",
    "ancient-harmony"
  ],
  "custom-0ec111156bbc5ef7baefea5a3ee82125": [
    "ancient-harmony",
    "silver-sigil"
  ],
  "custom-cd425a08143556b680ec83f456886392": [
    "enchanted-library",
    "ancient-harmony"
  ],
  "custom-70c300e84cf95e5faf110c209c4c29c3": [
    "ancient-harmony",
    "silver-sigil"
  ],
  "custom-51ca9f6d3bc656c8ba22ae65b5757663": [
    "enchanted-library",
    "ancient-harmony"
  ],
  "custom-a3d38dfe8fcc51388fa08bcee58aec2a": [
    "ancient-harmony",
    "silver-sigil"
  ],
  "custom-6f423d5b4e4e5d139fde858b38f0c4a1": [
    "enchanted-library",
    "ancient-harmony"
  ],
  "custom-205a6e176435575db188633c5833770c": [
    "ancient-harmony",
    "silver-sigil"
  ],
  "custom-546f613675fe5e7fb75b3b9869241384": [
    "enchanted-library",
    "ancient-harmony"
  ],
  "custom-bd774b058bea5b219b0660194c5d6aa6": [
    "ancient-harmony",
    "silver-sigil"
  ],
  "custom-ba7cebac077652f08a454879b12a935c": [
    "enchanted-library",
    "ancient-harmony"
  ],
  "custom-c4e2b2205d1254b8a56aa1b176824a84": [
    "ancient-harmony",
    "silver-sigil"
  ],
  "custom-eae80cf7069651eeae8e89e49e1e7747": [
    "enchanted-library",
    "ancient-harmony"
  ],
  "custom-e7ce5e3820215e2b9fd7a80d363b5a9a": [
    "ancient-harmony",
    "silver-sigil"
  ],
  "custom-3ec971f5964055d5b199dd70619df92d": [
    "enchanted-library",
    "ancient-harmony"
  ],
  "custom-8031d74502975ddeba092de598a2bae5": [
    "ancient-harmony",
    "silver-sigil"
  ],
  "custom-bfd0671a1cc4595680436b0973c85308": [
    "enchanted-library",
    "ancient-harmony"
  ],
  "custom-2d0cfc962220566d96a16be5a381ec9e": [
    "ancient-harmony",
    "silver-sigil"
  ],
  "custom-5ea829e2c6e5524fbce296bb57743e93": [
    "enchanted-library",
    "ancient-harmony"
  ],
  "custom-83c45c516e445687b0d1e6c95aff29f8": [
    "ancient-harmony",
    "silver-sigil"
  ],
  "custom-9d39828d34685a0a80d0750a3b19368b": [
    "enchanted-library",
    "ancient-harmony"
  ],
  "custom-d7d4c3f217105b03ac3671cbfab22b84": [
    "ancient-harmony",
    "silver-sigil"
  ],
  "custom-083f7845ce8c5421835ea83ebc08b7f2": [
    "enchanted-library",
    "ancient-harmony"
  ],
  "custom-c6cb1aa4192c5baca1664a19f1ec032d": [
    "ancient-harmony",
    "silver-sigil"
  ],
  "custom-6b9694ed2c665961b95a24fe7547991f": [
    "enchanted-library",
    "ancient-harmony"
  ],
  "custom-1dc3f5dcfcb95f11a56ff346fd80b3f4": [
    "ancient-harmony",
    "silver-sigil"
  ],
  "custom-6d33b5d3d27a5fe3986df0df6852f682": [
    "enchanted-library",
    "ancient-harmony"
  ],
  "custom-d03a91b29c6e54dcb6c2e4da02734a12": [
    "ancient-harmony",
    "silver-sigil"
  ],
  "custom-9e2b653d7ab05a8d8cfc384bf42fc5e9": [
    "enchanted-library",
    "ancient-harmony"
  ],
  "custom-39c44a83003058d7a1ccfd72a7bdc611": [
    "ancient-harmony",
    "silver-sigil"
  ],
  "custom-402ebc668aa05ecfb651554704a1329d": [
    "enchanted-library",
    "ancient-harmony"
  ],
  "custom-f1cd798f3fbc585992d4e680ccacf572": [
    "ancient-harmony",
    "silver-sigil"
  ],
  "custom-c62677f622a754489606c643a09ebe5e": [
    "enchanted-library",
    "ancient-harmony"
  ],
  "custom-d44596bc31275e768d93b043bc4f3f95": [
    "ancient-harmony",
    "silver-sigil"
  ],
  "custom-a8b66794d38052f2931e66f38653af5a": [
    "enchanted-library",
    "ancient-harmony"
  ],
  "custom-8e2ff2a9254153c9a671ed594b3c91db": [
    "ancient-harmony",
    "silver-sigil"
  ],
  "custom-05a122b1b4d959198f492adb761e074f": [
    "enchanted-library",
    "ancient-harmony"
  ],
  "custom-67adaa05200458ad91865e12728c3795": [
    "ancient-harmony",
    "silver-sigil"
  ],
  "custom-d7e38a57d01155078f23726a7e1a4456": [
    "enchanted-library",
    "ancient-harmony"
  ],
  "custom-dac4090575395c6b9c45a6b66305788c": [
    "ancient-harmony",
    "silver-sigil"
  ],
  "custom-512bbae8cd4c5d97b0aa20ab3d311eea": [
    "enchanted-library",
    "ancient-harmony"
  ],
  "custom-a98b44d6fc9c58e1a40c72a27a9b78fe": [
    "ancient-harmony",
    "silver-sigil"
  ],
  "custom-40522b957d975bb5a779bb1cfaba8a4f": [
    "enchanted-library",
    "ancient-harmony"
  ],
  "custom-9fcce14e1cab5131a0ac0682e865d925": [
    "ancient-harmony",
    "silver-sigil"
  ],
  "custom-b46bec15e05152d6820fd5c169fd3510": [
    "enchanted-library",
    "ancient-harmony"
  ],
  "custom-bf3af83e56835ebba115497d08daf747": [
    "ancient-harmony",
    "silver-sigil"
  ],
  "custom-26de40078e975d52bb2525a27cc611a0": [
    "enchanted-library",
    "ancient-harmony"
  ],
  "custom-e234e9db6dfd5f89a53585e59f9d6349": [
    "ancient-harmony",
    "silver-sigil"
  ],
  "custom-0478044743055ef29ba05a281b5c395c": [
    "enchanted-library",
    "ancient-harmony"
  ],
  "custom-9490e7f20f1051449b77980524981c47": [
    "ancient-harmony",
    "silver-sigil"
  ],
  "custom-804c578ab5ef5bb4981a2b3159013ca9": [
    "enchanted-library",
    "ancient-harmony"
  ],
  "custom-dbc4ce49f8b7515481db09c7883e2804": [
    "ancient-harmony",
    "silver-sigil"
  ],
  "custom-77f6232678c4565097b5cee8cc9bc393": [
    "enchanted-library",
    "ancient-harmony"
  ],
  "custom-316bad49acc75feb989d2779b15e0434": [
    "ancient-harmony",
    "silver-sigil"
  ],
  "custom-f4b281d0b6f1596eb16e63f939757fe3": [
    "enchanted-library",
    "ancient-harmony"
  ],
  "custom-623c78919a2357798bd1744cc482668f": [
    "ancient-harmony",
    "silver-sigil"
  ],
  "custom-3edeb24b409057348d8402c7e8905c04": [
    "enchanted-library",
    "ancient-harmony"
  ],
  "custom-277c58f0fb3f58dabe64bb2ca2284575": [
    "ancient-harmony",
    "silver-sigil"
  ],
  "custom-6743fbd8f4375e7983aca6de4c27eaae": [
    "enchanted-library",
    "ancient-harmony"
  ],
  "custom-b47db31e579e523183c343ac6b77e5c6": [
    "ancient-harmony",
    "silver-sigil"
  ],
  "custom-34b49a0d80d85c8ca09a30afebe0e645": [
    "enchanted-library",
    "ancient-harmony"
  ],
  "custom-3ede7b6cc76d51b3b8278ea911dad8c8": [
    "ancient-harmony",
    "silver-sigil"
  ],
  "custom-01da73545ae05905af8db9c3d9c41654": [
    "enchanted-library",
    "ancient-harmony"
  ],
  "custom-68ade42b862a589aaffac1355f1d7759": [
    "ancient-harmony",
    "silver-sigil"
  ],
  "custom-07927df5fcc456c688692148a04a99aa": [
    "enchanted-library",
    "ancient-harmony"
  ],
  "custom-4c88f39c9a595b8f8a88b09e246234d6": [
    "ancient-harmony",
    "silver-sigil"
  ],
  "custom-69e653822be451599ad1c6603f462b6b": [
    "enchanted-library",
    "ancient-harmony"
  ],
  "custom-8aba1b12e0af546bb81be03dd36c37c1": [
    "ancient-harmony",
    "silver-sigil"
  ],
  "custom-876288c2678e5ce09e32df63548d05eb": [
    "enchanted-library",
    "ancient-harmony"
  ],
  "custom-ff1108cb492459c492d6f7b2f88e4485": [
    "ancient-harmony",
    "silver-sigil"
  ],
  "custom-0cab4d2fe6ed559f95fbc4bbd67a9f4d": [
    "enchanted-library",
    "ancient-harmony"
  ],
  "custom-cab2c69039aa5edc94c1fcd99d3c1e65": [
    "ancient-harmony",
    "silver-sigil"
  ],
  "custom-cc20c31f3d9554ea8d58aa562f948680": [
    "enchanted-library",
    "ancient-harmony"
  ],
  "custom-2cfab3cfb3bf5443beecf68f9335e040": [
    "ancient-harmony",
    "silver-sigil"
  ],
  "custom-3c7ff8f972bf5e898259d6a39da16e7b": [
    "enchanted-library",
    "ancient-harmony"
  ],
  "custom-6be9a4186d205c23bda5052895660604": [
    "ancient-harmony",
    "silver-sigil"
  ],
  "custom-9cddf8ec9bdf538da6ba850d45f91b9b": [
    "enchanted-library",
    "ancient-harmony"
  ],
  "custom-14c49caaf6ba5758b8630fe4a4115b19": [
    "ancient-harmony",
    "silver-sigil"
  ],
  "custom-46d9046bc2535344ac0408be671e9c61": [
    "enchanted-library",
    "ancient-harmony"
  ],
  "custom-7aa1a4f7a5305a23bc72968a6778fa21": [
    "ancient-harmony",
    "silver-sigil"
  ],
  "custom-d344e13ca1a85742bea9bccd9d4fb9c6": [
    "enchanted-library",
    "ancient-harmony"
  ],
  "custom-d2c8b16f0a7a54dca293e5a57903b5fa": [
    "ancient-harmony",
    "silver-sigil"
  ],
  "custom-f4ca79b9f05e55a5b925a030899db94e": [
    "enchanted-library",
    "ancient-harmony"
  ],
  "custom-f11793645d2754e49865c850a1663d68": [
    "ancient-harmony",
    "silver-sigil"
  ],
  "custom-8e7dde837fc85287ae8e408f338e176b": [
    "enchanted-library",
    "ancient-harmony"
  ],
  "custom-7a1b8a18de215db3b1cb6a7fe0f06b7c": [
    "ancient-harmony",
    "silver-sigil"
  ],
  "custom-e10921e3c6a654a9abb3738ee1000fb2": [
    "enchanted-library",
    "ancient-harmony"
  ],
  "custom-b94d89071897534193054229d388d652": [
    "ancient-harmony",
    "silver-sigil"
  ],
  "custom-b7f5a891452058d98e3b6321381fd6ac": [
    "enchanted-library",
    "ancient-harmony"
  ],
  "custom-66bcc3f7a5a0566496d7f0e6a1f08672": [
    "ancient-harmony",
    "silver-sigil"
  ],
  "custom-eabcf996cf37584d8f86feb2ae4139a4": [
    "enchanted-library",
    "ancient-harmony"
  ],
  "custom-ec212120d5135ccdb6d1094d8c4d4187": [
    "ancient-harmony",
    "silver-sigil"
  ],
  "custom-1f63d32882cf58d3926263bb8d29845c": [
    "enchanted-library",
    "ancient-harmony"
  ],
  "custom-b29c5e487df953e8a99bd31173b39d3d": [
    "ancient-harmony",
    "silver-sigil"
  ],
  "custom-329c33ce087b5b309ddcdbed165aae0a": [
    "enchanted-library",
    "ancient-harmony"
  ],
  "custom-a7182532a4165a799f2b6ee508d3eec2": [
    "ancient-harmony",
    "silver-sigil"
  ],
  "custom-4e6870c8b7185b94949f15b03be25560": [
    "enchanted-library",
    "ancient-harmony"
  ],
  "custom-a4196df79daa5b7c99d42c9df2c53d84": [
    "ancient-harmony",
    "silver-sigil"
  ],
  "custom-fc5ea174ef6457a997e0650e92f7db25": [
    "enchanted-library",
    "ancient-harmony"
  ],
  "custom-448beec1557853f0a3d5fc0a0478f9bc": [
    "ancient-harmony",
    "silver-sigil"
  ],
  "custom-9b70e22844915364af8b78dd37a6b6db": [
    "enchanted-library",
    "ancient-harmony"
  ],
  "custom-bf85a84a1b165cdba01c17406cb06db7": [
    "ancient-harmony",
    "silver-sigil"
  ],
  "custom-4d4b7be726a55ee0bf59a0e1da979f8c": [
    "enchanted-library",
    "ancient-harmony"
  ],
  "custom-d251ecd1f31e5901815dc6e0f0281027": [
    "ancient-harmony",
    "silver-sigil"
  ],
  "custom-b5eeea553889573391d6c1b008df45a7": [
    "enchanted-library",
    "ancient-harmony"
  ],
  "custom-421eaa847cf6546bb0ea756120a47f94": [
    "ancient-harmony",
    "silver-sigil"
  ],
  "custom-3a1e1bfe985c571f9608bd1102dee9d0": [
    "enchanted-library",
    "ancient-harmony"
  ],
  "custom-81860eb2bcf559ad87325109e64f8250": [
    "ancient-harmony",
    "silver-sigil"
  ],
  "custom-b9997cd9924a5ba7a90be5bb68b5cb46": [
    "enchanted-library",
    "ancient-harmony"
  ],
  "custom-3db9181fb16c5275a5a0fc515769c87b": [
    "ancient-harmony",
    "silver-sigil"
  ],
  "custom-c3e805ebe6115c2bbc07af3ad446cf08": [
    "enchanted-library",
    "ancient-harmony"
  ],
  "custom-e08e759a2b3d5ef58c1df2f83c9ee0eb": [
    "ancient-harmony",
    "silver-sigil"
  ],
  "custom-be9e4a827e47585f812c5c6cd2cd4999": [
    "enchanted-library",
    "ancient-harmony"
  ],
  "custom-c92464ba300656408cc0e3fcf098988e": [
    "ancient-harmony",
    "silver-sigil"
  ],
  "custom-c9f19ad36ad2523aa8167dcec506cc0d": [
    "enchanted-library",
    "ancient-harmony"
  ],
  "custom-d3ef5ce5a8ab5e88a221769885184ba6": [
    "ancient-harmony",
    "silver-sigil"
  ],
  "custom-7ff0861e02ff5a5eade24909e2d61de1": [
    "enchanted-library",
    "ancient-harmony"
  ],
  "custom-e7b4bb7762c758e4913383b137ea56ea": [
    "ancient-harmony",
    "silver-sigil"
  ],
  "custom-0e1b8a4a07ab5ccfba396afe46687b67": [
    "enchanted-library",
    "ancient-harmony"
  ],
  "custom-c0a30e6e8eab58f897de484bb9d9f94a": [
    "ancient-harmony",
    "silver-sigil"
  ],
  "custom-10fca05158425e97952c344efde76df0": [
    "enchanted-library",
    "ancient-harmony"
  ],
  "custom-c8bfacbe5d3059afa0315622265886ee": [
    "ancient-harmony",
    "silver-sigil"
  ],
  "custom-1ec75e0da12057e88da1d208905a1a78": [
    "enchanted-library",
    "ancient-harmony"
  ],
  "custom-f55adf56c584500a9d2fba61ead96580": [
    "ancient-harmony",
    "silver-sigil"
  ],
  "custom-fc1794cfe08c55cb94f42f76efff8f8b": [
    "enchanted-library",
    "ancient-harmony"
  ],
  "custom-593e9ac5a942526eacc184015083e210": [
    "ancient-harmony",
    "silver-sigil"
  ],
  "custom-c9a5408a93655a828aae7c8294d5ac8d": [
    "enchanted-library",
    "ancient-harmony"
  ],
  "custom-710e432b8ffe5a2a9c501e6d56461e99": [
    "ancient-harmony",
    "silver-sigil"
  ],
  "custom-00138f99b86a529fb69a4a64d1a0cf20": [
    "enchanted-library",
    "ancient-harmony"
  ],
  "custom-e184fd0a89495e469ce5487780daf773": [
    "ancient-harmony",
    "silver-sigil"
  ],
  "custom-24e46b3cbec65e54b9819e6dc6c24601": [
    "enchanted-library",
    "ancient-harmony"
  ],
  "custom-4dbc521346c154179363609923dfae2d": [
    "ancient-harmony",
    "silver-sigil"
  ],
  "custom-f40a4379b7035405aeed69a7fbe50133": [
    "enchanted-library",
    "ancient-harmony"
  ],
  "custom-1883188b3aaf568dbad47414fe61a960": [
    "through-the-portal",
    "enchanted-library",
    "quiet-transition"
  ],
  "custom-88bdad7bd73656b6a2772ef551b5b073": [
    "through-the-portal",
    "enchanted-library",
    "quiet-transition"
  ],
  "custom-f01cc06dc5b3544eaab4edf980fa7882": [
    "through-the-portal",
    "enchanted-library",
    "quiet-transition"
  ],
  "custom-03723679ddee59fca33c6aec51144536": [
    "through-the-portal",
    "enchanted-library",
    "quiet-transition"
  ],
  "custom-15296da538255f109dd9ab7f09ab3d12": [
    "through-the-portal",
    "enchanted-library",
    "quiet-transition"
  ],
  "custom-8bb8ff81f29a50c9b6df3e99aa7cbcaa": [
    "through-the-portal",
    "enchanted-library",
    "quiet-transition"
  ],
  "custom-088db1a7e8bc59e1941dd0d0c64ad885": [
    "cosmic-garden",
    "through-the-portal",
    "quiet-transition"
  ],
  "custom-9157337de93056c2ba6a44597b60a583": [
    "through-the-portal",
    "enchanted-library",
    "quiet-transition"
  ],
  "custom-4d36e706d15359f6b2a2eea6c6135622": [
    "through-the-portal",
    "enchanted-library",
    "quiet-transition"
  ],
  "custom-2168747410c556819538d425fe14782f": [
    "cosmic-garden",
    "through-the-portal",
    "quiet-transition"
  ],
  "custom-2b9fea361e925f668d0a8a0fb3afb080": [
    "through-the-portal",
    "enchanted-library",
    "quiet-transition"
  ],
  "custom-f6bbc03c15df5f658469b62c1972eb86": [
    "through-the-portal",
    "enchanted-library",
    "quiet-transition"
  ],
  "custom-01552fb2983c5c2db294f15374af75f2": [
    "through-the-portal",
    "enchanted-library",
    "quiet-transition"
  ],
  "custom-900b3a21ee515207bd67ea2e3304e591": [
    "through-the-portal",
    "enchanted-library",
    "quiet-transition"
  ],
  "custom-2a29041884465906838632e126f7317a": [
    "cosmic-garden",
    "through-the-portal",
    "quiet-transition"
  ],
  "custom-6f3da61a15b358d0884452a38e10a24a": [
    "through-the-portal",
    "enchanted-library",
    "quiet-transition"
  ],
  "custom-a56734d643b05f60b8017799b7ff94ab": [
    "through-the-portal",
    "enchanted-library",
    "quiet-transition"
  ],
  "custom-93d239d7ee2e59dba44262a6f843627b": [
    "cosmic-garden",
    "through-the-portal",
    "quiet-transition"
  ],
  "custom-498a3bf0ac335fde8b88374406a2c3bd": [
    "cosmic-garden",
    "through-the-portal",
    "quiet-transition"
  ],
  "custom-4e4e6bcbac5c514cbb25ac8d48053638": [
    "cosmic-garden",
    "through-the-portal",
    "quiet-transition"
  ],
  "custom-3085908eab1a56ea96620367ff37b4e7": [
    "through-the-portal",
    "enchanted-library",
    "quiet-transition"
  ]
});
function soundChoices(track) {
  const text = track.announcement_text || "";
  if (/^(?:a line from|from) the prayer of the corvid circle\b/i.test(text.trim()) && /\bamen[.!]?\s*$/i.test(text))
    return ["corvid-sanctuary", "grounding", "quiet-transition"];
  if (Object.hasOwn(expansionCueChoices, track.id)) return expansionCueChoices[track.id];
  if (typeof isStory === "function" && isStory(track)) return ["quiet-transition"];
  const group = Object.hasOwn(passageGroups, track.id) ? passageGroups[track.id] : null;
  if (group === "observatory") return track.duration >= 90 ? ["silver-sigil", "cosmic-stillness", "cosmic-drift"] : ["silver-sigil", "cosmic-drift"];
  if (group === "arcana") return ["enchanted-library", "quiet-transition"];
  const assigned = Object.hasOwn(editorialSoundCues, track.id) ? editorialSoundCues[track.id] : null;
  if (assigned) {
    // Reserve the longest stillness cue for a substantial completed passage.
    return track.duration >= 90 ? assigned : assigned.filter(name => name !== "cosmic-stillness");
  }
  // Known research families provide a conservative fallback for catalog revisions.
  if (group === "harmony") return ["quiet-harmony", "quiet-transition"];
  if (group === "observatory") return track.duration >= 90 ? ["cosmic-stillness", "cosmic-drift"] : ["cosmic-drift"];
  if (group === "arcana" || group === "equestria") return ["quiet-transition"];
  return []; // unknown or separately authored material keeps the station theme
}
// Only these established reading families gain the approved alternatives.
const auditionChoices = Object.freeze({
  glimmer:["violet-reverie", "crystal-snowfall"],
  magnificence:["velvet-curtain", "silver-flourish"],
  "chronicles-wisdom":["moonlit-pages"],
  "chronicles-history":["echoes-of-antiquity"],
  arcana:["moonlit-pages"],
  equestria:["everfree-twilight"],
  observatory:["fourth-dimensional-signal"],
  harmony:["fourth-dimensional-signal"]
});
function contextualSoundChoices(track, station) {
  const base = soundChoices(track);
  const alternatives = auditionChoices[hostGroup(track)] || [];
  if (!alternatives.length || !station.auditionSounds?.length) return base;
  const present = alternatives.filter(name => station.auditionSounds.some(t=>t.id === "station-sound-" + name));
  // Equal chance among available contextual identities, old and new.
  return present.length ? shuffledCopy([...new Set([...base, ...present])]) : base;
}
function soundAfterSpeech(track, station) {
  if (track.excerpt_id) return station.excerpts.get(track.excerpt_id);
  const theme = station.music;
  if (!theme || !["intermission", "feature_intermission"].includes(track.kind) || isAside(track) || isSegue(track)) return theme;
  const available = [...(station.sounds || []), ...(station.solfeggioSounds || []), ...(station.expansionSounds || []), ...(station.auditionSounds || [])];
  if (!available.length) return theme; // retain speech-only and older playlist behavior
  soundBoundary++;
  // At least one theme boundary between added sounds, and at least three
  // intervening eligible boundaries before the same sound can recur.
  if (previousBoundaryHadCue) { previousBoundaryHadCue = false; return theme; }
  for (const name of contextualSoundChoices(track, station)) {
    const id = "station-sound-" + name;
    const candidate = available.find(t => t.id === id);
    if (!candidate || soundBoundary - (lastCueBoundary.get(id) ?? -Infinity) < 4) continue;
    lastCueBoundary.set(id, soundBoundary);
    previousBoundaryHadCue = true;
    return candidate;
  }
  return theme;
}
const originalSite = "https://nudisco-ai.whoismister-e.workers.dev";
const openingWords = "this is nudisco ai astra, speaking with kokoro.";
const noticeWords = "there is difficult material attached to this post. you can visit the site to view it.";
const friendshipWords = "you're listening to nudisco ai radio. remember that friendship is magic.";
const longReadingSeconds = 180;
const minimumFeatureSpacing = 4;
const asideIds = new Set([
  "custom-824b58372013504b843abd9bc38b7fd3",
  "custom-25f29b3380065ee3ae941d4ba4b4da7a",
  "custom-5899b9080d615c1eb1daa0ab7449d8c8",
  "custom-0baf2da3caf9515d8e12bc7d038dd9dc",
  "custom-c686339fc6875a9ea87140ada0560f8c",
  "custom-f07c8dbd140a560ca48ea6420a3e15d8",
  "custom-64304f848a2c55a590526149e9574ee3",
  "custom-b9ff8291b1ac53fbbbab87ec6664705f",
  "custom-4344cdbdf2e75d089e419d892999aa34",
  "custom-5bd506effa7a521898776f085dd56ad8",
  "custom-69ee768474da55e7835d1262a3af88f8",
  "custom-bd0f154ef00756049495f78c3e2d0893",
  "custom-85cf668e152c52f9b75b896462931084",
  "custom-80e3418708955d1c9806cdb0cbba5b7b",
  "custom-81eef35ae3de55418649ac3a70641d11",
  "custom-4d2232c2b4c15668985debf1a3705236",
  "custom-e5ce31e3a5cd579ab7c672267ea371b9",

  "custom-b03cb8a71e8a5dfead0c67e6cdf34758",
  "custom-f9718def78a35a39ad1a91bf85d0fe2b",
  "custom-664cf5b8d577557a8537c01acd2fc18c",
  "custom-f53253262a6e5c53b0bb635c99013594",
  "custom-3299967a74c251ab86736ee9a2e219a3",
  "custom-00f4ab0de92056d8ae884c1a2e8dfe44",
  "custom-a126d2a30587501b96f275077a28f923",
  "custom-837cddf4e7ed5649b40629fdffb5b134",
  "custom-c78f4d1b23c7514989e36de2f3528077",
  "custom-59b88ef30e895979a7fc02937c79723c",
  "custom-f0869e6d9e9d592498f7277af383dbae",
  "custom-b4e6a2a9d7395e01993b8f2b4e7b4b0e",
  "custom-8816fe9331385178864b94c2e4347ae8",
  "custom-8b6aa06f1d5551799f9333b662c67d6c",
  "custom-049bebc19f115f41948bb0e058a2fb51",
  "custom-6f4ebd3b90685ddc93091550a17d5eac",
  "custom-782cc8cf8421513e8a042d68d205fc2d",
  "custom-8709890fe6b95530b659af049cc4c03c"
]);
const isAside = track => track?.kind === "intermission" && asideIds.has(track.id) && !Object.hasOwn(track, "excerpt_id");
const segueGroups = {
  "custom-591d144adbf1508eb6eda016c9eb40ff": "equestria",
  "custom-be3395f3ea985582904a1516cb9ce4cf": "equestria",
  "custom-aa0d11cfd48152b1ad9043ecdb4b6e3d": "harmony",
  "custom-e15302c8977b5f85aea63906765566b9": "harmony",
  "custom-e5d4454324f55b989e5ebf33efbe95c3": "arcana",
  "custom-82777c94afe250b0b608094a8a86e7d8": "arcana",
  "custom-94c7c3f422745a1481f02acf4bcb2f66": "observatory"
};
const passageGroups = {
  "custom-a9a18b9c61625d48a1e02f21860a811a": "harmony",
  "custom-82a3ca62db4f53caab08f9d4818e03fa": "harmony",
  "custom-20887a87483e57c4ad1889cb30e0b99a": "harmony",
  "custom-9315a98a84c355348330aadb0756186b": "harmony",
  "custom-077f9e5888115661b4b0bb205a020023": "harmony",
  "custom-a00b0bcee27f5b72a7c164e4d1cd1765": "harmony",
  "custom-66584f775cff5810beaa5e7a11a879d8": "harmony",
  "custom-d8647292c66e5c518623a8c6b65e0d45": "harmony",
  "custom-455e0a1512ec5e5ab094c0e1c2923061": "harmony",
  "custom-ce9c24ef89c3559aba8c7a99164b33d3": "harmony",
  "custom-8cce7fc6483454d08e819b11291b8ba3": "harmony",
  "custom-f74799acbf3c57f780c0cbf832dfbbc0": "harmony",
  "custom-ad439f19c7165103a70117bc7a197708": "harmony",
  "custom-fff92760b3f450ee8cbc743ade21b056": "equestria",
  "custom-ebe28907c17750da9d1beba7aff88b2c": "harmony",
  "custom-baf88973b09d51ca93939ea22faeb868": "harmony",
  "custom-a2b1932ced055cd6ab24c2c72d9f154d": "equestria",
  "custom-522dd44da5195c5db83e066092fd8448": "equestria",
  "custom-189fce236a6852f8b00ef3da22a65e37": "equestria",
  "custom-f5be4bfe6ad3565b8cf2a766cd34697a": "equestria",
  "custom-0b848e87f566507e8e6b0f1f62968eb4": "equestria",
  "custom-365de3f971ba5f259fcaca8f57d5c880": "equestria",
  "custom-0d20c8d0de195afa995fdb85a43c18f0": "equestria",
  "custom-7c5359e51a025388a3149fef9d16e91d": "equestria",
  "custom-56e979e4ca325da3b2ca3f07c074e477": "equestria",
  "custom-d27b69ebb808518981a4db78057579bd": "equestria",
  "custom-0bb28eef3816503c987cb7583a6039d9": "equestria",
  "custom-455c2c77034b58dcb8d674507e47c8d1": "equestria",
  "custom-2bfb55c33a94503b8c0021759e3cdea4": "equestria",
  "custom-0ee2433f74d65b018c6e0c3910a1c3cd": "equestria",
  "custom-6a5885ec568c53d999784369778c95d5": "equestria",
  "custom-e0e98f77ea2053d4baedf58fa1bd2892": "equestria",
  "custom-61f9b7cadf745a16abda638ff12a2ff6": "equestria",
  "custom-2fba38e49717524d82071f815f2d8fc6": "equestria",
  "custom-0e32ff7ee5795e85a2d34a080689f582": "equestria",
  "custom-a543810ae49f578b9641bf678be518ee": "equestria",
  "custom-63c6b25bbb785f45a487fd3a67f81c01": "equestria",
  "custom-93a64384a97052058b50eb70080bbc17": "equestria",
  "custom-7c825b65381a5dcaab860c9f58873f80": "equestria",
  "custom-a6c2d6019f09549abf889e4a96b59392": "equestria",
  "custom-c4643f05f4e55b039e7c88937f796ad8": "equestria",
  "custom-6281fea6dd965d3db92a4d1c65553229": "equestria",
  "custom-f7e1e67942d153b8919752d4104ac9d6": "equestria",
  "custom-df743f2784c95ecc9f73d751f82e0f77": "equestria",
  "custom-64a0ed96312254bf8c9f6f6d5e872d9c": "equestria",
  "custom-7fecba604b5d52bf8c86f05e293b49b3": "equestria",
  "custom-76476e9c5a5255549d605c38ca7d7a7e": "equestria",
  "custom-c5af481c71485dd6ab8d8a4ee6e69e14": "equestria",
  "custom-8a02333dee9357e3b647b14b142617d4": "equestria",
  "custom-4e709d53646e58eabac1b49b696cf0db": "equestria",
  "custom-1af2f2e1086d56f1a58e4cf531978bf9": "equestria",
  "custom-874901edba5758bb8bc7f7140a8ee3a6": "equestria",
  "custom-8dcd5d73a40a5cc7b92595adb269f244": "equestria",
  "custom-4f259fcf035154609897d25c4c637be1": "harmony",
  "custom-c8fd22f75f485f46b0f029d93682fe03": "harmony",
  "custom-0a567e40ae5e592bbeea5205d95b6311": "harmony",
  "custom-0b9e0c441eb3558ab8d7d54f5034e423": "observatory",
  "custom-780e8bbe5a9955c7b46724a80aa52676": "observatory",
  "custom-f3043f8fe28a5d2ab38113e52427f9f5": "observatory",
  "custom-ed299bd0f5f35c339772283c2f9eafc7": "observatory",
  "custom-ca7ffd3ed81756a0b24aa52292392335": "arcana",
  "custom-2272e754b41c55efa55e92d3260b8d06": "arcana",
  "custom-2b8cfe291010534c9daf18573c0a8f9e": "arcana",
  "custom-50aaa1ce96555b249bae1488b8fd0001": "arcana",
  "custom-981ddc8587285c42823c60419b05983e": "arcana",
  "custom-2fdb3ab32c915fed867a477d98b50a6b": "arcana",
  "feature-breezies": "equestria",
  "feature-twilight-letters": "equestria",
  "feature-card-artist": "arcana",
  "feature-second-raven": "arcana",
  "feature-biscuit-note": "harmony"
};
const isSegue = track => track?.kind === "intermission" && Object.hasOwn(segueGroups, track.id) && !Object.hasOwn(track, "excerpt_id");
const dressSoundPalette = [{"id": "station-sound-dress-intro", "title": "art of the dress intro", "duration": 3.2, "sha": "68d5f3d7249fbc55cab1f3af7ea76efe9c52c7fe5c27b87ee73d78652102986a"}, {"id": "station-sound-dress-outro", "title": "art of the dress outro", "duration": 3.6, "sha": "2d281fa176be14120e2f3575c2f8351788ba9131296c5ee33e631448f65a93aa"}];
const legacyDressSoundPalette = [{"id": "station-sound-dress-intro", "title": "art of the dress intro", "duration": 3.2, "sha": "63ea29cd6ab2c8bfd49bb4a7042198ed72acd8e747e58abcf329c45963e3821c"}, {"id": "station-sound-dress-outro", "title": "art of the dress outro", "duration": 3.6, "sha": "145e9e6810b71037ef5c1344fa3965ea4032edfd01f55d678293e742708d778f"}];
const isDress = track => track?.kind === "intermission" && typeof track.title === "string" && track.title.toLowerCase().startsWith("astra · art of the dress · ");
const sendoffId = "lofi-nudisco-sendoff";
const sendoffIntroId = "lofi-nudisco-sendoff-intro";
const sendoffTitle = "nudisco ai lofi sendoff";
const sendoffSha = "6d34482e21e1cf2793ffe5202e44836384a7f6d82fb3b0cca6ffb6d21439193c";
const sendoffWords = "my silver sigil's getting a signal, friend.";
const isSendoffIntro = track => track?.id === sendoffIntroId && track.kind === "intermission";
const isSendoff = track => track?.id === sendoffId && track.kind === "sendoff_music";
const customBreakId = /^custom-[a-f0-9]{32}$/;
const customExcerptId = /^custom-[a-f0-9]{32}(?:-audio)?$/;
const segmentNames = {
  station_intro: "station introduction", post_intro: "post introduction", post: "nudisco ai reading",
  attachment_notice: "attachment notice", intermission: "intermission", feature_intermission: "extended intermission",
  audio_excerpt: "intermission · audio excerpt", short_id: "station identification", music: "intermission · music", sendoff_music: "intermission · music", station_sound: "intermission · sound"
};
let program;
let remasterSources = new Map();
let current;
let currentPost = -1;
let lastPost = -1;
const rowsPerPage = 50;
const visibleRows = new Map();
const dateFormat = new Intl.DateTimeFormat("en", {
  month: "short", day: "numeric", year: "numeric", timeZone: "UTC"
});
let page = 0;
let activeButton;
let pageButtons;
let nextIndex = 0;
let chosenFirst = null;
let shuffledOrder = [];
let shuffleCursor = 0;
// Three modes affect original post readings only, never the independent host/timed bags.
const postModes = ["off", "on", "void"];
const postModeLabels = {off:"shuffle off", on:"shuffle on", void:"void posts"};
const postModeHelp = {off:"nudisco ai blog posts in catalogue order", on:"nudisco ai blog posts in random order", void:"no automatic nudisco ai blog post readings; all other programming remains"};
let postMode = "off";
function paintPostMode() {
  const button=byId("shuffle");
  button.dataset.mode=postMode;
  button.querySelector(".post-mode-label").textContent=postModeLabels[postMode];
  button.setAttribute("aria-label",postModeLabels[postMode]+" · "+postModeHelp[postMode]+" · next: "+postModeLabels[postModes[(postModes.indexOf(postMode)+1)%3]]);
  button.title=postModeHelp[postMode]+". activate to cycle post mode.";
  button.disabled=!program || !program.posts.length;
  const next=byId("next"), label=next.querySelector(".next-label");
  if (label) label.textContent="next";
  next.setAttribute("aria-label","next reading"); next.title="next reading · scheduled breaks keep their own timing";
  if (program) next.disabled=!started || !(postMode!=="void" && program.posts.length || hostPool.some(isManualReading) || storyPool.length);
}
function setPostMode(mode) {
  if (!postModes.includes(mode)) mode="off";
  if (mode!==postMode) {
    // Keep ordinary off/on changes identical to the original shuffle control.
    // Only crossing the void boundary resets the now-inapplicable speech debt.
    if (mode==="void" || postMode==="void") {
      accountPlayback();
      postDebt=0; postStreak=hostStreak=0;
      voidLastIdBlock=hostBlocks;
    }
    postMode=mode;
    if (program) arrange(chosenFirst ?? currentPost,true);
  }
  paintPostMode();
}
let started = false;
let playing = false;
let attempt = 0;
let completions = 0;
let lastBreak = 0;
let lastAnnouncement = 0;
let breakNumber = 0;
let featureNumber = 0;
let readingSecondsSinceFeature = 0;
let readingSecondsSinceBreak = 0;
let mixedSlot = 0;
let classicSlot = 0;
let mixBags = null;
let asideBag = null;
let segueBags = new Map();
let pendingPassage = null;
// Select occasional matching opening/closing sounds for an entire spoken block.
// The existing contextual cooldown is consumed once per block, never twice.
let cueFrame = null;
// Independent infomercial clock: listened audio, not wall time. No catch-up bursts.
let dressNextAt = 720, dressBag = null, dressFrame = null, dressPinned = false;
// Independent played-audio clock: first at 24 min, then 42 min from music start.
let sendoffNextAt = 1440, sendoffFrame = null;
function maybeSendoff(resume="boundary") {
  accountPlayback();
  if (!program.sendoff || !program.sendoffIntro || sendoffFrame || sessionSeconds < sendoffNextAt) return false;
  // If the listener skips the introduction, do not immediately replay it.
  sendoffNextAt = sessionSeconds + 2520;
  sendoffFrame = {resume};
  show(program.sendoffIntro, true);
  return true;
}
function finishSendoff(autoplay) {
  if (!sendoffFrame) return false;
  const {resume} = sendoffFrame;
  if (isSendoffIntro(current)) {
    sendoffNextAt = sessionSeconds + 2520;
    show(program.sendoff, autoplay);
    return true;
  }
  if (isSendoff(current)) {
    sendoffFrame = null;
    if (!autoplay) takePost(false);
    else if (resume === "post") continueAfterPost();
    else if (sessionMix) continueSession(resume === "notice");
    else takePost(true);
    return true;
  }
  sendoffFrame = null;
  return false;
}
function setupDress() { dressBag = makeBag(program.dress); }
function startDress(track, resume="boundary") {
  // Explicit selections also defer the next automatic spot, avoiding back-to-back ads.
  accountPlayback();
  dressNextAt = sessionSeconds + 1440;
  const intro = program.dressSounds.get("station-sound-dress-intro") || null;
  const outro = program.dressSounds.get("station-sound-dress-outro") || null;
  dressFrame = {intro, speech:track, outro, resume};
  show(intro || track, true);
}
function maybeDress(resume="boundary") {
  if (!dressBag || dressFrame || sessionSeconds < dressNextAt) return false;
  const track = dressBag();
  if (!track) return false;
  startDress(track,resume); return true;
}
function finishDress(autoplay) {
  if (!dressFrame) return false;
  const {intro,speech,outro,resume} = dressFrame;
  if (current === intro) { show(speech,autoplay); return true; }
  if (current === speech && outro) { show(outro,autoplay); return true; }
  if (current === speech || current === outro) {
    dressFrame = null;
    if (autoplay && maybeSendoff(resume)) return true;
    if (!autoplay) takePost(false);
    else if (resume==="post") continueAfterPost();
    else if (sessionMix) continueSession(resume==="notice");
    else takePost(true);
    return true;
  }
  dressFrame = null; return false;
}
function dressAvailable() { return Boolean(program?.dress?.length && program.dressCatalogue && (isDress(current) || Boolean(dressFrame) || dressPinned)); }
function dressPaint() {
  const available = dressAvailable();
  const panel = byId("dress-catalogue");
  panel.hidden = !available;
  if (!available) panel.open = false;
  byId("dials-pins").hidden=!dressPinned;
  const tab = byId("dress-tab");
  if (tab) tab.hidden = !available;
  for (const id of ["dress-pin","dress-tab-pin"]) {
    const button=byId(id); if (!button) continue;
    button.textContent=dressPinned?"unpin":"pin";
    button.setAttribute("aria-pressed",String(dressPinned));
  }
  // Allocate the full document only when requested; use text nodes, never raw HTML.
  document.dispatchEvent(new Event("radio-dress-availability"));
}
function dressRender(id="dress-reader") {
  const reader=byId(id);
  if (!reader || reader.dataset.loaded || !program?.dressCatalogue) return;
  const frag=document.createDocumentFragment();
  for (const block of program.dressCatalogue.split(/\n[ \t]*\n+/)) {
    const line=block.trim(); if (!line) continue;
    const m=/^(#{1,6})[ \t]+([^\n]+)$/.exec(line);
    const el=document.createElement(m ? "h"+Math.min(4,m[1].length+1) : "p");
    el.textContent=m?m[2]:line; frag.append(el);
  }
  reader.append(frag); reader.dataset.loaded="true";
}
function dressDownload() {
  if (!dressAvailable()) return;
  const url=URL.createObjectURL(new Blob([program.dressCatalogue],{type:"text/markdown;charset=utf-8"}));
  const link=document.createElement("a"); link.href=url; link.download="art-of-the-dress-full-catalogue.md";
  document.body.append(link); link.click(); link.remove(); setTimeout(()=>URL.revokeObjectURL(url),60000);
}
function dressTogglePin() {
  if (!dressAvailable()) return;
  dressPinned=!dressPinned; dressPaint();
  if (rememberConsentRecord()) rememberSavePreferences({dressPinned});
  // Without memory, a pin is simply a current-visit preference.
}
function dressInitUI() {
  for (const id of ["dress-pin","dress-tab-pin"]) byId(id)?.addEventListener("click",dressTogglePin);
  for (const id of ["dress-download","dress-tab-download"]) byId(id)?.addEventListener("click",dressDownload);
  byId("dress-catalogue").addEventListener("toggle",()=>{if(byId("dress-catalogue").open) dressRender(byId("dress-inline-reader")?"dress-inline-reader":"dress-reader");});
}
function startFramedBreak(track, segue, autoplay=true) {
  const eligible = ["intermission", "feature_intermission"].includes(track.kind) && !isAside(track) && !isSegue(track);
  let outro = eligible ? soundAfterSpeech(track, program) : null;
  let intro = outro?.kind === "station_sound" ? program.introSounds?.get(outro.id + "-intro") : null;
  // Little Constellation alone uses the full chime to open and the short chime to close.
  // Keep the original closing cue if an older playlist has no short version.
  if (outro?.id === "station-sound-little-constellation" && intro) [intro, outro] = [outro, intro];
  const target = segue || track;
  cueFrame = eligible ? {intro, target, passage: track, outro} : null;
  if (intro) { show(intro, autoplay); return; }
  if (segue) pendingPassage = track;
  show(target, autoplay);
}
function continueCueIntro(autoplay) {
  if (!cueFrame || !cueFrame.intro || current !== cueFrame.intro) return false;
  const {target, passage} = cueFrame;
  if (target !== passage) pendingPassage = passage;
  show(target, autoplay);
  return true;
}


// Session-local editorial mix. No wall-clock sleep inference or persistent data.
// Ratios are editorial targets; individual recordings and their lead-ins remain whole.
// The initial ten minutes retain the original welcome mix. At ten listened
// minutes step down to a host-led station, then taper posts to an occasional
// presence. Sound/music is an editorial target, not a separate quota.
const sessionTargets = [
  [600, .20, .70, .10], [1200, .15, .70, .15],
  [1800, .10, .75, .15], [2400, .07, .78, .15],
  [3600, .06, .79, .15]
];
const initialSessionTarget = [.45,.45,.10];
const postDebtMin=-120, postDebtMax=1800;
let sessionSeconds = 0, accountedSeconds = 0, postDebt = 0;
let hostPool = [], lastHostId = null;
let hostGroups = new Map(), hostCycle = [], lastHostGroup = null;
let pooledReadingBag = null;
let lastStoryBlock = -3;
// Preserve the nine editorial classifications, but draw their readings from one bag.
const pooledReadingGroups = new Set(["chronicles-wisdom", "chronicles-history", "glimmer", "magnificence", "equestria", "harmony", "arcana", "corvid", "observatory"]);
// These former family keys now serve as pacing slots, not selection quotas.
const newReadingGroups = new Set(["chronicles-wisdom", "chronicles-history", "glimmer", "magnificence"]);
function hostGroup(track) {
  const title = (track.title || "").toLowerCase();
  if (track.kind === "audio_excerpt") return "audio";
  if (track.kind === "feature_intermission") return "features";
  if (title.startsWith("the chronicles of harmony · ")) {
    if (title.endsWith(" · wisdom")) return "chronicles-wisdom";
    if (title.endsWith(" · history")) return "chronicles-history";
  }
  if (title.startsWith("starlight insights")) return "glimmer";
  if (title.startsWith("great and powerful words")) return "magnificence";
  if (/^(?:a line from|from) the prayer of the corvid circle\b/i.test((track.announcement_text || "").trim()) || title.startsWith("corvid circle:")) return "corvid";
  if (Object.hasOwn(passageGroups, track.id)) return passageGroups[track.id];
  if (title.startsWith("arcana:")) return "arcana";
  return track.id.startsWith("custom-") ? "other" : "station";
}
function shuffledCopy(items) {
  const queue = items.slice();
  for (let i=queue.length-1;i>0;i--) {
    const j=Math.floor(Math.random()*(i+1));
    [queue[i],queue[j]]=[queue[j],queue[i]];
  }
  return queue;
}
function refillHostCycle() {
  // Keep the same number and spacing of ordinary reading slots versus other
  // host turns. Any of the nine reading slots draws from the same shuffled bag.
  const old = shuffledCopy([...hostGroups.keys()].filter(k=>!newReadingGroups.has(k)));
  const fresh = shuffledCopy([...hostGroups.keys()].filter(k=>newReadingGroups.has(k)));
  let useNew = lastHostGroup == null ? Math.random()<.5 : !newReadingGroups.has(lastHostGroup);
  const round = [];
  while (old.length || fresh.length) {
    const preferred=useNew?fresh:old, alternate=useNew?old:fresh;
    round.push((preferred.length?preferred:alternate).shift()); useNew=!useNew;
  }
  if (round.length>1 && round[0]===lastHostGroup) [round[0],round[1]]=[round[1],round[0]];
  hostCycle=round;
}
let sessionMix = false, postStreak = 0, hostStreak = 0, hostBlocks = 0, voidLastIdBlock = 0;
// Story entries remain native custom speech; their ordered IDs are editorial metadata.
const storyOrder = [
  "custom-1883188b3aaf568dbad47414fe61a960",
  "custom-88bdad7bd73656b6a2772ef551b5b073",
  "custom-f01cc06dc5b3544eaab4edf980fa7882",
  "custom-03723679ddee59fca33c6aec51144536",
  "custom-15296da538255f109dd9ab7f09ab3d12",
  "custom-8bb8ff81f29a50c9b6df3e99aa7cbcaa",
  "custom-088db1a7e8bc59e1941dd0d0c64ad885",
  "custom-9157337de93056c2ba6a44597b60a583",
  "custom-4d36e706d15359f6b2a2eea6c6135622",
  "custom-2168747410c556819538d425fe14782f",
  "custom-2b9fea361e925f668d0a8a0fb3afb080",
  "custom-f6bbc03c15df5f658469b62c1972eb86",
  "custom-01552fb2983c5c2db294f15374af75f2",
  "custom-900b3a21ee515207bd67ea2e3304e591",
  "custom-2a29041884465906838632e126f7317a",
  "custom-6f3da61a15b358d0884452a38e10a24a",
  "custom-a56734d643b05f60b8017799b7ff94ab",
  "custom-93d239d7ee2e59dba44262a6f843627b",
  "custom-498a3bf0ac335fde8b88374406a2c3bd",
  "custom-4e4e6bcbac5c514cbb25ac8d48053638",
  "custom-3085908eab1a56ea96620367ff37b4e7"
];
const storyIds = new Set(storyOrder);
const isStory = track => track?.kind === "intermission" && storyIds.has(track.id);
let storyPool = [], storyCursor = 0, storiesStarted = 0, storyDebt = 0;
// Separate durable story position from the schedule's ephemeral counters.
let seriesNext = storyOrder[0];
function validSeriesNext(value) { return value === "complete" || storyIds.has(value); }
function syncStoryCursor() {
  // Migrate the completed marker from older releases to a new cycle.
  if (seriesNext === "complete") seriesNext = storyOrder[0];
  const index = storyOrder.indexOf(seriesNext);
  const next = storyPool.findIndex(t=>storyOrder.indexOf(t.id)===index);
  storyCursor = next < 0 ? storyPool.length : next;
}
function completeStory(track) {
  // Library replays, skips and failed recordings cannot advance an unrelated episode.
  const record = rememberConsentRecord();
  if (validSeriesNext(record?.prefs?.seriesNext)) {
    seriesNext=record.prefs.seriesNext; syncStoryCursor();
  }
  if (!isStory(track) || track.id !== seriesNext || !storyPool.includes(track)) return;
  seriesNext=storyOrder[(storyOrder.indexOf(track.id)+1)%storyOrder.length];
  syncStoryCursor(); rememberSavePreferences({seriesNext}); dialsPaint();
}
function loadSeriesProgress(record) {
  if (validSeriesNext(record?.prefs?.seriesNext)) seriesNext=record.prefs.seriesNext;
  else if (record?.mark && storyPool.length) {
    // Old builds advanced on start. Rewind the currently unfinished story, if identifiable.
    const mark=record.mark;
    const i=Number.isFinite(mark.storyCursor)?Math.max(0,Math.min(storyPool.length,Math.floor(mark.storyCursor))):0;
    const active=storyPool.findIndex(t=>[mark.id,mark.pending,mark.frame?.passage].includes(t.id));
    if (active>=0 && active+1===i) seriesNext=storyPool[active].id;
    else if (i>0) seriesNext=storyOrder[storyOrder.indexOf(storyPool[i-1].id)+1] || "complete";
  }
  syncStoryCursor();
  // Migrate once, before a fresh-start policy can discard the old bookmark.
  if (record && record.prefs?.seriesNext !== seriesNext) rememberSavePreferences({seriesNext});
}
// Target fraction of Astra's spoken airtime, not total station airtime.
// At ten minutes the story becomes eligible; later targets ramp continuously.
const storyTargets = [[600,.08],[1200,.10],[2400,.14],[3600,.15]];
function storyTarget(seconds) {
  if (seconds < 600) return 0;
  for (let i=1;i<storyTargets.length;i++) {
    const [a,x]=storyTargets[i-1], [b,y]=storyTargets[i];
    if (seconds <= b) return x+(y-x)*(seconds-a)/(b-a);
  }
  return storyTargets[storyTargets.length-1][1];
}
function accountStory(delta, start, track) {
  if (!storyPool.length || !track || isDress(track) || isSendoffIntro(track) || postKinds.has(track.kind) || soundKinds.has(track.kind) || track.kind === "station_intro") return;
  const end = start+delta, from = Math.max(start,600);
  if (end <= from) return;
  // Integrate piecewise-linear targets exactly across the listening thresholds.
  let desired = 0, a = from;
  for (const b of [...storyTargets.map(t=>t[0]).filter(t=>t>a && t<end),end]) {
    desired += (b-a)*(storyTarget(a)+storyTarget(b))/2; a=b;
  }
  storyDebt = Math.max(-1800,Math.min(1800,storyDebt+desired-(isStory(track)?end-from:0)));
}
function chooseStory() {
  if (sessionSeconds < 600 || !storyPool.length || storyCursor >= storyPool.length ||
      hostBlocks < 3 || (storiesStarted && hostBlocks - lastStoryBlock < 5)) return null;
  const track=storyPool[storyCursor];
  // Give the first story a natural entrance after ten minutes. Thereafter keep
  // whole episodes and use airtime debt rather than random short-track counts.
  return !storiesStarted || storyDebt >= .12*track.duration ? track : null;
}
const postKinds = new Set(["post_intro", "post", "attachment_notice"]);
const soundKinds = new Set(["music", "station_sound", "audio_excerpt", "sendoff_music"]);
function sessionTarget(seconds) {
  if (seconds < sessionTargets[0][0]) return initialSessionTarget.slice();
  for (let i = 1; i < sessionTargets.length; i++) {
    const a = sessionTargets[i-1], b = sessionTargets[i];
    if (seconds <= b[0]) {
      const f = Math.max(0, (seconds-a[0])/(b[0]-a[0]));
      return a.slice(1).map((v,j) => v + f*(b[j+1]-v));
    }
  }
  return sessionTargets[sessionTargets.length-1].slice(1);
}
// Split at every target boundary, including the ten-minute step, so a long
// recording crossing that boundary is not charged wholly at the new rate.
function desiredPostSeconds(start, delta) {
  const end=start+delta;
  let desired=0, a=start;
  for (const b of [...sessionTargets.map(t=>t[0]).filter(t=>t>a&&t<end),end]) {
    const [posts,host]=sessionTarget((a+b)/2);
    desired+=(b-a)*posts/(posts+host); a=b;
  }
  return desired;
}
function sessionLimits(manual=false) {
  if (sessionSeconds < 600) return [3,3];
  const [posts,host]=sessionTarget(sessionSeconds);
  // Do not force a blog after a fixed number of short host readings. Actual
  // listened airtime governs the late mix. Manual browsing retains a bounded
  // host streak so repeated Next without listening can still reach a blog.
  return [1,manual?Math.max(4,Math.ceil(2*host/posts)):Infinity];
}
function accountPlayback() {
  if (!current || !audio.played) return;
  // Played ranges count listened audio, not wall time or skipped seek gaps.
  // Replayed portions of the same source count once per load.
  let total = 0;
  for (let i = 0; i < audio.played.length; i++) {
    const span = audio.played.end(i)-audio.played.start(i);
    if (Number.isFinite(span) && span > 0) total += span;
  }
  const delta = Math.max(0, total-accountedSeconds);
  accountedSeconds = Math.max(accountedSeconds, total);
  const desired=desiredPostSeconds(sessionSeconds,delta);
  accountStory(delta,sessionSeconds,current);
  sessionSeconds += delta;
  if (postMode!=="void" && !soundKinds.has(current.kind) && !isDress(current) && !isSendoffIntro(current)) {
    // Keep enough positive debt to account for long blog readings at a low
    // target share. Bound negative debt so missed posts cannot build a backlog.
    const ceiling=sessionSeconds<600?120:postDebtMax;
    postDebt = Math.max(postDebtMin, Math.min(ceiling, postDebt + (postKinds.has(current.kind)?delta:0)-desired));
  }
}
function setupSessionMix() {
  storyPool = storyOrder.map(id=>program.stories.find(t=>t.id===id)).filter(Boolean);
  syncStoryCursor();
  hostPool = [...program.ordinaryBreaks, ...program.features];
  hostGroups = new Map(); hostCycle = []; lastHostGroup = null;
  for (const track of hostPool) {
    const key=hostGroup(track);
    if (!hostGroups.has(key)) hostGroups.set(key,{items:[],queue:[],last:null});
    hostGroups.get(key).items.push(track);
  }
  pooledReadingBag = makeRateUpBag(hostPool.filter(t=>pooledReadingGroups.has(hostGroup(t))));
  sessionMix = Boolean(program.cadence.break_every && program.posts.length &&
    (hostPool.filter(t => !soundKinds.has(t.kind)).length >= 4 || (storyPool.length && hostPool.some(t=>!soundKinds.has(t.kind)))));
}
// The catalogue uses "intermission" for custom Astra readings as well as
// station breaks. Manual Next targets readings, not scheduled station material.
function isManualReading(track) {
  return track?.kind === "intermission" && track.id.startsWith("custom-") &&
    !isDress(track) && !isAside(track) && !isSegue(track) && !isSendoffIntro(track);
}
function takeHostBlock(manual=false) {
  const story = chooseStory();
  if (story && (!manual || story !== current)) return story;
  if (!hostCycle.length) refillHostCycle();
  // A manual skip never consumes the station/audio/extended-break family turns.
  // If only those turns remain, append another round of ordinary reading turns;
  // the scheduled families stay pending for natural completion boundaries.
  const readingFamily=key=>hostGroups.get(key)?.items.every(isManualReading);
  if (manual && !hostCycle.some(readingFamily)) {
    const regular=shuffledCopy([...hostGroups.keys()].filter(readingFamily));
    if (regular.length>1 && regular[0]===lastHostGroup) [regular[0],regular[1]]=[regular[1],regular[0]];
    hostCycle.push(...regular);
  }
  // Audio-only excerpts should never stack on a preceding sound or excerpt.
  // Keep the skipped family in the round for its next eligible boundary.
  const index=hostCycle.findIndex(key=>manual?readingFamily(key):key!=="audio" || !soundKinds.has(current?.kind));
  if (index<0) return null;
  const key=hostCycle.splice(index,1)[0], group=hostGroups.get(key);
  if (pooledReadingGroups.has(key)) {
    const track=pooledReadingBag();
    lastHostId=track.id; lastHostGroup=key; // slot key only, not the track identity
    return track;
  }
  if (!group.queue.length) {
    group.queue=shuffledCopy(group.items);
    if (group.queue.length>1 && group.queue[0].id===group.last)
      [group.queue[0],group.queue[1]]=[group.queue[1],group.queue[0]];
  }
  const track=group.queue.shift();
  group.last=lastHostId=track.id; lastHostGroup=key;
  return track;
}
let nextSessionAsideAt = 2, lastSessionAsideSeconds = -Infinity;
function sessionAside() {
  if (!asideBag || !hostBlocks || isAside(current) || current?.kind==="short_id" ||
      hostBlocks+completions < nextSessionAsideAt || sessionSeconds < 60 ||
      sessionSeconds-lastSessionAsideSeconds < 90) return null;
  const chosen=asideBag();
  if (chosen) {
    lastAside=lastAnnouncement=completions;
    lastSessionAsideSeconds=sessionSeconds;
    nextSessionAsideAt=hostBlocks+completions+3+Math.floor(Math.random()*2);
  }
  return chosen;
}
// In void mode, host blocks continue without the normal post debt/streak cap.
// The same shared reading bag, other family bags, story position, asides and timed specials remain in charge.
function pauseVoid(text) {
  ++attempt; playing=false; audio.pause(); message(text); paintControls();
}
function continueVoid(autoplay) {
  const aside=sessionAside();
  if (aside) { show(aside,autoplay); return; }
  // If the station enables periodic IDs, use host blocks as the substitute
  // for completed blog readings during void mode. Zero still means disabled.
  const cadence=program.cadence.short_id_every;
  if (program.shortId && cadence && hostBlocks-voidLastIdBlock>=cadence && current!==program.shortId) {
    voidLastIdBlock=hostBlocks; show(program.shortId,autoplay); return;
  }
  const track=takeHostBlock();
  if (track) { lastBreak=lastAnnouncement=completions; playIntermission(track,autoplay); return; }
  // An audio-only family can be temporarily ineligible after a sound.
  // A spoken station ID provides a safe boundary, never a post fallback.
  if (program.shortId && current!==program.shortId && hostPool.length) { show(program.shortId,autoplay); return; }
  pauseVoid("no more astra segments are available in this release. choose a recording or change post mode.");
}
function continueSession(afterPost = false) {
  if (postMode==="void") { takePost(true); return; }
  const [maxPosts,maxHost]=sessionLimits();
  // Asides can arrive at a completed post or host boundary throughout a
  // session. They never interrupt speech, an attachment notice or a cue frame.
  const aside=sessionAside();
  if (aside) { show(aside,true); return; }
  const wantHost = !hostBlocks || postStreak >= maxPosts ||
    (hostStreak < maxHost && postDebt >= 0);
  if (wantHost && hostStreak < maxHost) {
    const track = takeHostBlock();
    if (track) {
      lastBreak = lastAnnouncement = completions;
      playIntermission(track);
      return;
    }
  }
  if (afterPost) {
    const {short_id_every} = program.cadence;
    if (program.shortId && short_id_every && completions % short_id_every === 0 &&
        completions - lastAnnouncement >= 2) {
      lastAnnouncement = completions;
      show(program.shortId, true);
      return;
    }
  }
  takePost(true);
}

function setupSegues() {
  for (const group of new Set(Object.values(segueGroups))) {
    const tracks = program.segues.filter(t => segueGroups[t.id] === group);
    if (tracks.length) segueBags.set(group, makeBag(tracks));
  }
}

function playIntermission(track, autoplay=true, manual=false) {
  if (isSendoff(track) || isSendoffIntro(track)) return; // scheduled radio only
  if (isDress(track)) { startDress(track); return; }
  if (isStory(track)) {
    // Explicit library selection can jump to an episode. Automatic play never
    // shuffles the story; a completed finale wraps to episode one.
    const i = storyPool.findIndex(t=>t.id===track.id);
    if (i >= 0) storiesStarted++;
    lastHostId=track.id; lastStoryBlock=hostBlocks+1;
  }
  if (sessionMix || postMode==="void") { hostBlocks++; hostStreak++; postStreak = 0; }
  // Next goes straight to speech. Natural completion may still play the normal
  // closing sound; do not spend an opening cue or segue on a manual skip.
  if (manual) { show(track,autoplay); return; }
  // Only known research passages need a spoken introduction. Station IDs,
  // prayers (which introduce themselves), and asides are left alone.
  const group = Object.hasOwn(passageGroups, track.id) ? passageGroups[track.id] : null;
  const segue = group ? segueBags.get(group)?.() : null;
  startFramedBreak(track, segue, autoplay);
}
let lastAside = 0;
let nextAsideAt = 1;

function setupAsides() {
  if (!program.asides.length || !program.cadence.break_every) return;
  asideBag = makeBag(program.asides);
  nextAsideAt = 1 + Math.floor(Math.random() * 2);
}

function asideAfterReading() {
  // Only between completed, ordinary post readings. Full intermissions and IDs
  // have priority. At most one aside per break interval, with 2–3 readings
  // between asides. An attachment notice always takes precedence.
  if (!asideBag || completions < nextAsideAt || lastAside > lastBreak) return null;
  const chosen = asideBag();
  if (chosen) {
    lastAside = lastAnnouncement = completions;
    nextAsideAt = completions + 2 + Math.floor(Math.random() * 2);
  }
  return chosen;
}

// Shared ordinary-reading rate-up. One ticket per recording, plus a second
// for Starlight and Trixie. Tickets are references, not duplicate tracks.
// Keep the other shuffle bags and the editorial pacing slots unchanged.
function makeRateUpBag(items) {
  const byTrack = new Map(items.map(t=>[t.id,t]));
  const unique = [...byTrack.values()];
  const bonus = unique.filter(t=>["glimmer","magnificence"].includes(hostGroup(t)));
  const tickets = [...unique,...bonus];
  const limits = new Map(unique.map(t=>[t.id,bonus.includes(t)?2:1]));
  let queue = [], previous = null;
  const separated = order => order.every((t,i)=>t.id!==(i?order[i-1].id:previous));
  const refill = () => {
    // Rejection sampling keeps the shuffled ticket order random, except for
    // adjacent duplicate recordings (including across cycle boundaries).
    for (let attempt=0;attempt<32;attempt++) {
      const candidate=shuffledCopy(tickets);
      if (separated(candidate)) return candidate;
    }
    // Bounded fallback: insert bonus tickets into random nonmatching gaps.
    // An exceptionally small/incomplete catalogue may not permit separation.
    const order=shuffledCopy(unique);
    if (order.length>1 && order[0].id===previous) [order[0],order[1]]=[order[1],order[0]];
    for (const t of shuffledCopy(bonus)) {
      const gaps=[];
      for (let i=0;i<=order.length;i++)
        if ((i?order[i-1].id:previous)!==t.id && order[i]?.id!==t.id) gaps.push(i);
      order.splice(gaps.length?gaps[Math.floor(Math.random()*gaps.length)]:order.length,0,t);
    }
    return order;
  };
  const take = () => {
    if (!tickets.length) return null;
    if (!queue.length) queue=refill();
    const item=queue.shift(); previous=item.id; return item;
  };
  take.snapshot = () => ({rateUp:2,queue:queue.map(t=>t.id),last:previous});
  take.restore = value => {
    if (!value || !Array.isArray(value.queue)) return;
    previous=byTrack.has(value.last)?value.last:null;
    queue=[];
    // Pre-rate-up bookmarks begin a new weighted cycle, not an old quota.
    if (value.rateUp!==2 || value.queue.length>2000) return;
    const restored=[],counts=new Map();
    for (const id of value.queue) {
      if (!byTrack.has(id)) continue;
      const n=(counts.get(id)||0)+1;
      if (n>limits.get(id)) return;
      counts.set(id,n); restored.push(byTrack.get(id));
    }
    // Removing unavailable tracks may invalidate adjacency; safely start a
    // fresh cycle in that case. A one-recording catalogue cannot separate.
    if (unique.length>2 && !separated(restored)) return;
    queue=restored;
  };
  return take;
}

// A shuffle bag plays each member once before repeating it. Separate bags
// preserve the original short IDs/features while giving a large custom library
// more airtime. No post order, transcript, recording or music is changed.
function makeBag(items) {
  let queue = [], previous = null;
  const take = () => {
    if (!items.length) return null;
    if (!queue.length) {
      queue = items.slice();
      for (let i = queue.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [queue[i], queue[j]] = [queue[j], queue[i]];
      }
      if (queue.length > 1 && queue[0].id === previous) {
        [queue[0], queue[1]] = [queue[1], queue[0]];
      }
    }
    const item = queue.shift();
    previous = item.id;
    return item;
  };
  take.snapshot = () => ({queue:queue.map(t=>t.id),last:previous});
  take.restore = value => {
    if (!value || !Array.isArray(value.queue) || value.queue.length>items.length) return;
    const byTrack=new Map(items.map(t=>[t.id,t]));
    queue=[...new Set(value.queue.map(id=>byTrack.get(id)).filter(Boolean))];
    previous=byTrack.has(value.last)?value.last:null;
  };
  return take;
}

function setupMixedRotation() {
  const custom = program.ordinaryBreaks.filter(t => t.id.startsWith("custom-"));
  if (custom.length < 4) return; // leave a small station's usual cadence intact
  mixBags = {
    custom: makeBag(custom),
    station: makeBag(program.ordinaryBreaks.filter(t => !t.id.startsWith("custom-"))),
    feature: makeBag(program.features)
  };
}

function mixedIntermission(duration, sinceBreak, cadence) {
  readingSecondsSinceBreak += duration;
  // First custom segment: after two posts or one substantial reading.
  // Later: usually three posts, or two totaling at least three minutes.
  const postsNeeded = Math.min(cadence, mixedSlot === 0 ? 2 : 3);
  const earned = sinceBreak >= Math.min(2, postsNeeded) && readingSecondsSinceBreak >= longReadingSeconds;
  if (!(sinceBreak >= postsNeeded || earned || (mixedSlot === 0 && duration >= longReadingSeconds))) return null;
  let selected;
  if (mixedSlot++ % 4 === 3) {
    // Every fourth break is a classic, alternating station copy and the
    // original longer features. Fall back gracefully if either pool is empty.
    const stationFirst = classicSlot++ % 2 === 0;
    selected = stationFirst ? mixBags.station() || mixBags.feature() : mixBags.feature() || mixBags.station();
  }
  readingSecondsSinceBreak = 0;
  return selected || mixBags.custom();
}


function clock(seconds) {
  const total = Math.max(0, Math.floor(seconds));
  return Math.floor(total / 60) + ":" + String(total % 60).padStart(2, "0");
}

function shortDate(value) {
  // Match the publication day shown in the source, including offset timestamps.
  if (typeof value !== "string" || !/^\d{4}-\d{2}-\d{2}(?:$|[T ])/.test(value)) return "";
  const date = new Date(value.slice(0, 10) + "T00:00:00Z");
  if (!Number.isFinite(date.getTime())) return "";
  return dateFormat.format(date).toLowerCase();
}

function check(ok) {
  if (!ok) throw new Error("invalid program");
}

function validPostLink(track) {
  const id = track.post_id;
  if (typeof id !== "string" || !id || id === "." || id === ".." || /[\/\\\x00-\x1f\x7f]/.test(id)) return false;
  try {
    return track.source_url === originalSite + "/post/" + encodeURIComponent(id);
  } catch { return false; }
}

function parseProgram(manifest) {
  check(manifest?.schema_version === 2 && Array.isArray(manifest.tracks));
  if (!manifest.tracks.length) return null;
  const tracks = manifest.tracks;
  const seen = new Set();
  const groups = new Map(Object.keys(segmentNames).map(kind => [kind, []]));
  const intros = new Map();
  const notices = new Map();
  const excerpts = new Map();
  const requestedExcerpts = new Set();
  for (const track of tracks) {
    check(track && Object.hasOwn(segmentNames, track.kind) && typeof track.id === "string" &&
      !seen.has(track.id) && Number.isFinite(track.duration) && track.duration > 0 &&
      typeof track.audio_url === "string" && /^audio\/[a-zA-Z0-9_-]+\.mp3$/.test(track.audio_url));
    seen.add(track.id);
    groups.get(track.kind).push(track);
    if (track.kind === "post_intro" || track.kind === "attachment_notice") {
      const index = track.kind === "post_intro" ? intros : notices;
      check(!index.has(track.post_id));
      index.set(track.post_id, track);
    }
    if (track.kind === "station_sound") {
      const expected = [...stationSoundPalette, ...introSoundPalette, ...expansionSoundPalette, ...expansionIntroPalette, ...auditionSoundPalette, ...auditionIntroPalette, ...dressSoundPalette, ...legacyDressSoundPalette].find(s => s.id === track.id && s.sha === track.audio_sha256);
      const legacyTitle = track.id === "station-sound-magnificence" ? "magnificence" :
        track.id === "station-sound-magnificence-intro" ? "magnificence intro" : null;
      check(expected && (track.title === expected.title || (legacyTitle !== null && track.title === legacyTitle)) && track.duration === expected.duration &&
        track.audio_sha256 === expected.sha && track.audio_url === "audio/" + expected.sha + ".mp3" &&
        track.source_url == null && track.date == null && !Object.hasOwn(track, "excerpt_id"));
    }
    if (track.kind === "sendoff_music" || track.id === sendoffId) check(isSendoff(track) && track.title === sendoffTitle && track.duration === 200 && track.audio_sha256 === sendoffSha && track.audio_url === "audio/" + sendoffSha + ".mp3" && track.source_url == null && track.date == null);
    if (track.id === sendoffIntroId) check(isSendoffIntro(track) && track.announcement_text === sendoffWords && track.source_url == null && track.date == null);
    if (track.kind === "music") check(track.id === "lofi-nudisco" && (track.title === musicTitle || track.title === "lofi nudisco") && track.duration === 9);
    if (track.id.startsWith("custom-") || track.kind === "audio_excerpt" || Object.hasOwn(track, "excerpt_id")) {
      check(typeof track.title === "string" && track.title.trim() &&
        (track.credit === undefined || typeof track.credit === "string") && track.source_url == null);
      if (track.kind === "audio_excerpt") {
        check(customExcerptId.test(track.id) && track.duration === 9 && !Object.hasOwn(track, "excerpt_id"));
        excerpts.set(track.id, track);
      } else {
        check(track.kind === "intermission" && customBreakId.test(track.id));
        if (Object.hasOwn(track, "excerpt_id")) {
          check(track.excerpt_id === track.id + "-audio");
          requestedExcerpts.add(track.excerpt_id);
        }
      }
    }
    if (track.kind === "post" || track.kind === "post_intro") {
      check(track.edition === "regular" && validPostLink(track));
      check(!track.date || shortDate(track.date));
    }
    if (track.kind === "attachment_notice") check(track.edition === "regular" && validPostLink(track) && track.announcement_text === noticeWords);
    if (track.kind === "post") check(typeof track.authored_text === "string" && track.authored_text.trim());
    else if (!soundKinds.has(track.kind)) check(typeof track.announcement_text === "string" && track.announcement_text.trim());
  }
  for (const id of requestedExcerpts) check(excerpts.has(id));
  for (const id of excerpts.keys()) check(!id.endsWith("-audio") || requestedExcerpts.has(id));
  const stations = groups.get("station_intro");
  const bodies = groups.get("post");
  const asides = tracks.filter(isAside);
  const segues = tracks.filter(isSegue);
  const sendoff = groups.get("sendoff_music")[0];
  const sendoffIntro = tracks.find(isSendoffIntro);
  check(Boolean(sendoff) === Boolean(sendoffIntro) && groups.get("sendoff_music").length <= 1);
  const breaks = tracks.filter(t => (t.kind === "intermission" && !isAside(t) && !isSegue(t) && !isSendoffIntro(t)) || (t.kind === "audio_excerpt" && !requestedExcerpts.has(t.id)));
  const dress = breaks.filter(isDress);
  const dressCatalogue = manifest.dress_catalogue;
  const dressSounds = new Map(groups.get("station_sound").filter(t=>dressSoundPalette.some(s=>s.id===t.id)).map(t=>[t.id,t]));
  // Old playlists (no fashion tracks) remain valid. A new one must include its actual attachment.
  check(!dress.length || (typeof dressCatalogue === "string" && dressCatalogue.length <= 512000 && dressCatalogue.startsWith("# art of the dress — full catalogue")));
  check(!dressSounds.size || (dress.length && dressSounds.size === dressSoundPalette.length && groups.get("music").length === 1));
  const stories = breaks.filter(isStory);
  const ordinaryBreaks = breaks.filter(t=>!isStory(t)&&!isDress(t));
  const shortIds = groups.get("short_id");
  const music = groups.get("music");
  const sounds = stationSoundPalette.map(s => groups.get("station_sound").find(t => t.id === s.id)).filter(Boolean);
  const introSounds = new Map(groups.get("station_sound").filter(t => [...introSoundPalette, ...expansionIntroPalette, ...auditionIntroPalette].some(s => s.id === t.id)).map(t => [t.id, t]));
  const baseIntroCount = introSoundPalette.filter(s => introSounds.has(s.id)).length;
  const expandedIntroCount = expansionIntroPalette.filter(s => introSounds.has(s.id)).length;
  const expansionSounds = expansionSoundPalette.map(s => groups.get("station_sound").find(t => t.id === s.id)).filter(Boolean);
  check(!baseIntroCount || (baseIntroCount === introSoundPalette.length && sounds.length === stationSoundPalette.length && music.length === 1));
  check(!(expansionSounds.length || expandedIntroCount) || (expansionSounds.length === expansionSoundPalette.length && expandedIntroCount === expansionIntroPalette.length && baseIntroCount === introSoundPalette.length && sounds.length === stationSoundPalette.length && music.length === 1));
  const auditionSounds = auditionSoundPalette.map(s => groups.get("station_sound").find(t => t.id === s.id)).filter(Boolean);
  const auditionIntroCount = auditionIntroPalette.filter(s => introSounds.has(s.id)).length;
  check(!(auditionSounds.length || auditionIntroCount) || (auditionSounds.length === auditionSoundPalette.length && auditionIntroCount === auditionIntroPalette.length && expansionSounds.length === expansionSoundPalette.length && music.length === 1));
  const originalSounds = sounds.filter(t => originalSoundPalette.some(s => s.id === t.id));
  const solfeggioSounds = sounds.filter(t => solfeggioSoundPalette.some(s => s.id === t.id));
  // Accept complete older v1 programs too (e.g. an in-flight old playlist). Reject partial groups.
  check(!sounds.length || (music.length === 1 && originalSounds.length === originalSoundPalette.length &&
    (!solfeggioSounds.length || solfeggioSounds.length === solfeggioSoundPalette.length)));
  check(stations.length === 1 && stations[0].announcement_text.startsWith(openingWords));
  check(bodies.length === intros.size && shortIds.length <= 1 && music.length <= 1);

  // Bodies are in broadcast order. Consume each matching side segment once.
  const posts = bodies.map(body => {
    const intro = intros.get(body.post_id);
    const notice = notices.get(body.post_id);
    check(intro && body.source_url === intro.source_url);
    check(Boolean(notice) === Boolean(body.difficult_attachment));
    check(!notice || notice.source_url === body.source_url);
    intros.delete(body.post_id);
    notices.delete(body.post_id);
    const attachments = body.attachments ?? [];
    check(Array.isArray(attachments) && attachments.every(a => a &&
      ["filename","caption","label","unknown"].includes(a.kind) && (a.value == null || typeof a.value === "string")));
    return {body, intro, notice, title: body.title || "untitled post", attachments};
  });
  check(intros.size === 0 && notices.size === 0);
  const cadence = manifest.program ?? {break_every: 4, short_id_every: 0};
  for (const key of ["break_every", "short_id_every"])
    check(Number.isInteger(cadence[key]) && cadence[key] >= 0);
  if (cadence.feature_after_reading_seconds !== undefined)
    check(Number.isFinite(cadence.feature_after_reading_seconds) && cadence.feature_after_reading_seconds > 0);
  if (posts.length && breaks.length && cadence.break_every) check(breaks[0].announcement_text === friendshipWords);
  return {opening:stations[0], posts, breaks, ordinaryBreaks, stories, asides, segues, features:groups.get("feature_intermission"),
    shortId:shortIds[0], music:music[0], sounds:originalSounds, solfeggioSounds, expansionSounds, auditionSounds, introSounds, excerpts, cadence, dress, dressCatalogue, dressSounds, sendoff, sendoffIntro};
}

function arrange(after = -1, omitCurrent = false) {
  const count = program.posts.length;
  nextIndex = count ? (after + 1) % count : 0;
  shuffledOrder = [];
  shuffleCursor = 0;
  if (postMode!=="on" || !count) return;

  for (let i = 0; i < count; i++) {
    if (!omitCurrent || i !== after) shuffledOrder.push(i);
  }
  for (let i = shuffledOrder.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledOrder[i], shuffledOrder[j]] = [shuffledOrder[j], shuffledOrder[i]];
  }
  if (shuffledOrder.length > 1 && shuffledOrder[0] === after) {
    [shuffledOrder[0], shuffledOrder[1]] = [shuffledOrder[1], shuffledOrder[0]];
  }
}

function takePost(autoplay) {
  if (postMode==="void" && chosenFirst===null) { continueVoid(autoplay); return; }
  if (!program.posts.length) { pauseVoid("no original posts are available."); return; }
  if (sessionMix) { postStreak++; hostStreak = 0; }
  if (chosenFirst !== null) {
    currentPost = chosenFirst;
    chosenFirst = null;
  } else if (postMode==="on") {
    if (shuffleCursor >= shuffledOrder.length) arrange(currentPost);
    currentPost = shuffledOrder[shuffleCursor++];
  } else {
    currentPost = nextIndex;
    nextIndex = (nextIndex + 1) % program.posts.length;
  }
  lastPost = currentPost;
  show(program.posts[currentPost].intro, autoplay);
}

function selectPost(index) {
  arrange(index, true);
  if (!started || current.kind === "station_intro") {
    // Keep the once-per-tune-in opening and select the first reading after it.
    chosenFirst = index;
    byId("details").textContent = "up next · " + program.posts[index].title;
    byId("announcement").textContent = byId("details").textContent;
    return;
  }
  currentPost = lastPost = index;
  if (sessionMix) { postStreak++; hostStreak = 0; }
  show(program.posts[index].intro, playing);
}

function markCurrent(index) {
  if (activeButton) activeButton.removeAttribute("aria-current");
  activeButton = visibleRows.get(index);
  if (activeButton) activeButton.setAttribute("aria-current", "true");
}

function renderPage() {
  const list = byId("tracks");
  list.replaceChildren();
  visibleRows.clear();
  const count = program.posts.length;
  const start = page * rowsPerPage;
  const stop = Math.min(count, start + rowsPerPage);
  list.start = start + 1;
  for (let index = start; index < stop; index++) {
    const post = program.posts[index];
    const item = document.createElement("li");
    const button = document.createElement("button");
    button.type = "button";
    button.className = "track-row";
    button.setAttribute("aria-label", "select " + post.title);
    const cells = {
      number: String(index + 1).padStart(2, "0"), title: post.title,
      meta: shortDate(post.body.date), duration: clock(post.intro.duration + post.body.duration)
    };
    for (const [key, value] of Object.entries(cells)) {
      const span = document.createElement("span");
      span.className = "track-" + key;
      span.textContent = value;
      button.append(span);
    }
    button.addEventListener("click", () => selectPost(index));
    item.append(button);
    list.append(item);
    visibleRows.set(index, button);
  }
  const isPostSegment = current && ["post_intro", "post", "attachment_notice"].includes(current.kind);
  markCurrent(isPostSegment ? currentPost : -1);
  const total = count + (count === 1 ? " post" : " posts");
  byId("program-info").textContent = pageButtons ? (start + 1) + "–" + stop + " of " + total : total;
  if (pageButtons) {
    pageButtons[0].disabled = page === 0;
    pageButtons[1].disabled = stop === count;
  }
}

function buildProgram() {
  if (!program.posts.length) return;
  if (program.posts.length > rowsPerPage) {
    byId("program-info").setAttribute("aria-live", "polite");
    const nav = document.createElement("nav");
    nav.setAttribute("aria-label", "program pages");
    nav.className = "buttons";
    pageButtons = [-1, 1].map(step => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "secondary";
      button.textContent = step < 0 ? "previous page" : "next page";
      button.addEventListener("click", () => {
        page += step;
        renderPage();
      });
      nav.append(button);
      return button;
    });
    byId("program").append(nav);
  }
  renderPage();
  paintPostMode();
  byId("program").hidden = false;
}

function message(text) {
  const error = byId("error");
  error.textContent = text;
  error.hidden = !text;
}

function paintControls() {
  document.body.dataset.playing = String(playing);
  byId("state").textContent = playing ? (isAside(current) ? "astra · aside" : (isSegue(current) || isSendoffIntro(current)) ? "astra · segue" : isStory(current) ? "astra · storytelling" : isDress(current) ? "astra · infomercial" : segmentNames[current.kind]) : started ? "paused" : "ready to tune in";
  byId("play-icon").classList.toggle("pause", playing);
  byId("tune-text").textContent = playing ? "pause" : started ? "resume" : "tune in";
  paintPostMode();
  byId("announcement").textContent = byId("state").textContent + " · " + byId("title").textContent;
}

function tick() {
  if (!current) return;
  const duration = Number.isFinite(audio.duration) && audio.readyState >= 1 ? audio.duration : current.duration;
  const elapsed = rememberSeek?.track === current ? rememberSeek.time : audio.currentTime || 0;
  byId("elapsed").textContent = clock(elapsed);
  byId("length").textContent = clock(duration);
  byId("progress").style.width = (100 * Math.min(1, elapsed / duration)) + "%";
}

function failed() {
  if (sendoffFrame) { const wasPlaying=playing; accountPlayback(); if (finishSendoff(wasPlaying)) return; }
  if (dressFrame) { const wasPlaying=playing; accountPlayback(); if (finishDress(wasPlaying)) return; }
  if (continueCueIntro(playing)) return;
  if (isSegue(current) && pendingPassage) {
    const passage = pendingPassage;
    show(passage, playing);
    return;
  }
  // Avoid falling back to a blog reading or infinitely cycling through failed
  // host files when posts are voided. Keep the existing framed recovery above.
  if (postMode==="void") { pauseVoid("this recording could not play. try again or choose next."); return; }
  if (["music", "station_sound", "audio_excerpt", "sendoff_music", "intermission", "feature_intermission", "short_id"].includes(current.kind)) {
    const autoplay = playing;
    takePost(autoplay);
    message("the break was unavailable. continuing with the next post.");
  } else {
    playing = false;
    message("this recording could not play. try again or choose next.");
    paintControls();
  }
}

function play(bookmarkOffset = null) {
  const ticket = ++attempt;
  message("");
  // The first play call runs synchronously inside the listener’s gesture.
  if (rememberSeek?.track === current) {
    try { audio.currentTime = rememberSeek.time; } catch {}
  }
  const pending = audio.play();
  started = playing = true;
  dialsLastActivity=Date.now();
  paintControls();
  rememberSave(true, bookmarkOffset);
  if (pending) pending.catch(err => {
    if (ticket !== attempt) return;
    if (err.name === "NotAllowedError") {
      playing = false;
      paintControls();
      message("tap resume to continue listening.");
    } else failed();
  });
}

// Presentation labels only: keep the original sound provenance in the playlist.
const stationSoundLabels = Object.freeze({
  "little-constellation": "chime",
  "cosmic-drift": "cosmic sound",
  "station-ambience": "ambient sound",
  "quiet-transition": "transition sound",
  "grounding": "low tone",
  "quiet-harmony": "harmonic sound",
  "friendship": "soft tone",
  "cosmic-stillness": "cosmic sound",
  "glimmer": "crystalline sound",
  "magnificence": "great and powerful sound",
  "ancient-harmony": "bell harmony",
  "enchanted-library": "ambient sound",
  "silver-sigil": "celestial sound",
  "through-the-portal": "dimensional sound",
  "corvid-sanctuary": "resonant sound",
  "cosmic-garden": "soft celestial sound",
  "violet-reverie": "crystalline sound",
  "crystal-snowfall": "crystalline sound",
  "velvet-curtain": "great and powerful sound",
  "silver-flourish": "great and powerful sound",
  "moonlit-pages": "ambient sound",
  "everfree-twilight": "woodland sound",
  "echoes-of-antiquity": "resonant sound",
  "fourth-dimensional-signal": "dimensional sound",
  "dress": "crystalline sound",
  "dress-outro": "crystalline sound"
});
function stationSoundLabel(track) {
  const key = track.id.replace(/^station-sound-/, "").replace(/-intro$/, "");
  return Object.hasOwn(stationSoundLabels, key) ? stationSoundLabels[key] : "quiet sound";
}
// Display-only casing. Reviewed titles use exact whole-title matching; never alter
// the manifest, IDs, audio cache keys, scheduling, or editor-authored material.
const reviewedStationTitles = new Map([["through the mirror · 01 · before the fall formal","through the mirror · 01 · before the Fall Formal"],["through the mirror · 02 · the crown","through the mirror · 02 · the crown"],["through the mirror · 03 · finding their instruments","through the mirror · 03 · finding their instruments"],["through the mirror · 04 · a place in the band","through the mirror · 04 · a place in the band"],["through the mirror · 05 · a place at the table","through the mirror · 05 · a place at the table"],["through the mirror · 06 · the friendship games","through the mirror · 06 · the Friendship Games"],["through the mirror · 07 · the other side of fear","through the mirror · 07 · the other side of fear"],["through the mirror · 08 · a dance and a mirror","through the mirror · 08 · a dance and a mirror"],["through the mirror · 09 · ordinary days at canterlot","through the mirror · 09 · ordinary days at Canterlot"],["through the mirror · 10 · magic in the garden","through the mirror · 10 · magic in the garden"],["through the mirror · 11 · one line for fluttershy","through the mirror · 11 · one line for Fluttershy"],["through the mirror · 12 · the rainbooms on the road","through the mirror · 12 · the Rainbooms on the road"],["through the mirror · 13 · the girl they kept forgetting","through the mirror · 13 · the girl they kept forgetting"],["through the mirror · 14 · a summer at the mall","through the mirror · 14 · a summer at the mall"],["through the mirror · 15 · friendship math","through the mirror · 15 · friendship math"],["through the mirror · 16 · another year at canterlot","through the mirror · 16 · another year at Canterlot"],["through the mirror · 17 · the microphone and the afternoon","through the mirror · 17 · the microphone and the afternoon"],["through the mirror · 18 · a game and a voyage","through the mirror · 18 · a game and a voyage"],["through the mirror · 19 · a day at starswirled","through the mirror · 19 · a day at Starswirled"],["through the mirror · 20 · the festival from many sides","through the mirror · 20 · the festival from many sides"],["through the mirror · 21 · a picture to send home","through the mirror · 21 · a picture to send home"],["honesty","honesty"],["kindness","kindness"],["laughter","laughter"],["generosity","generosity"],["loyalty","loyalty"],["magic","magic"],["the whole and its parts","the whole and its parts"],["harmony is not unanimity","harmony is not unanimity"],["the phase of a possibility","the phase of a possibility"],["different kinds of resilience","different kinds of resilience"],["correcting an error without erasing identity","correcting an error without erasing identity"],["the order of our questions","the order of our questions"],["a friendship has a history","a friendship has a history"],["the rainboom","the rainboom"],["the memory of a promise","the memory of a promise"],["difference belongs in harmony","difference belongs in harmony"],["a tree can change its form","a tree can change its form"],["once a moon","once a moon"],["applejack and the courage to be honest","Applejack and the courage to be honest"],["fluttershy and the art of gentleness","Fluttershy and the art of gentleness"],["pinkie pie and the possibility of joy","Pinkie Pie and the possibility of joy"],["rarity and the circulation of possibility","Rarity and the circulation of possibility"],["rainbow dash and the duration of a promise","Rainbow Dash and the duration of a promise"],["twilight sparkle and the integration of magic","Twilight Sparkle and the integration of magic"],["the first elements","the first elements"],["six cutie marks and one rainboom","six cutie marks and one rainboom"],["the letters that discord could not erase","the letters that Discord could not erase"],["a future twilight with a warning","a future Twilight with a warning"],["the crystal heart and a wider circle","the Crystal Heart and a wider circle"],["fluttershy meets a very peculiar friend","Fluttershy meets a very peculiar friend"],["a spell with the wrong cutie marks","a spell with the wrong cutie marks"],["giving the elements back to the tree","giving the Elements back to the Tree"],["a thread from manehattan","a thread from Manehattan"],["rainbow falls and the other team","Rainbow Falls and the other team"],["boneless and the purpose of a party","Boneless and the purpose of a party"],["the breezies must continue","the Breezies must continue"],["a bit of truth","a bit of truth"],["twilight's choice of power","Twilight's choice of power"],["starlight's town and the danger of sameness","Starlight's town and the danger of sameness"],["moon dancer and the past that remains","Moon Dancer and the past that remains"],["starlight and the changed timelines","Starlight and the changed timelines"],["starlight's very efficient friendship lesson","Starlight's very efficient friendship lesson"],["an unexpected rescue ensemble","an unexpected rescue ensemble"],["discordant harmony and a delightful impossibility","Discordant Harmony and a delightful impossibility"],["the perfect pear and the life of a memory","the Perfect Pear and the life of a memory"],["the pillars and the seed they left behind","the Pillars and the seed they left behind"],["a school for friendship","a school for friendship"],["what lies beneath the school","what lies beneath the school"],["cozy glow and the meaning of collective power","Cozy Glow and the meaning of collective power"],["the mean six and the meaning of a copy","the Mean Six and the meaning of a copy"],["the young six and the treehouse","the Young Six and the treehouse"],["the many creatures of equestria","the many creatures of Equestria"],["the last problem is a continuing practice","the last problem is a continuing practice"],["six registers and sixty-four possibilities","six registers and sixty-four possibilities"],["a biscuit, a correlation, and a conversation","a biscuit, a correlation, and a conversation"],["what a phase can hide","what a phase can hide"],["astra's observatory: harmony across four dimensions","Astra's observatory: harmony across four dimensions"],["astra's observatory: the six keys of harmony","Astra's observatory: the six keys of harmony"],["astra's observatory: discord, difference, and repair","Astra's observatory: Discord, difference, and repair"],["astra's observatory: what twilight leaves to the future","Astra's observatory: what Twilight leaves to the future"],["corvid circle: the eyes of the crow","corvid circle: the eyes of the crow"],["corvid circle: the mind of mathematics","corvid circle: the mind of mathematics"],["corvid circle: the vision of the swarm","corvid circle: the vision of the swarm"],["corvid circle: quantum mechanics and shared awe","corvid circle: quantum mechanics and shared awe"],["corvid circle: in the name of friendship","corvid circle: in the name of friendship"],["arcana: the flood tablet","arcana: the flood tablet"],["arcana: the wedjat eye","arcana: the wedjat eye"],["arcana: the goddess and her crows","arcana: the goddess and her crows"],["arcana: the raven crown of bhutan","arcana: the Raven Crown of Bhutan"],["arcana: two birds in bronze","arcana: two birds in bronze"],["arcana: the inscribed garment","arcana: the inscribed garment"],["astra aside: lilac endearment","astra aside: lilac endearment"],["astra aside: silver affection","astra aside: silver affection"],["astra aside: quiet company","astra aside: quiet company"],["astra aside: cosmic curiosity","astra aside: cosmic curiosity"],["astra aside: indigo hoovsies","astra aside: indigo hoovsies"],["astra aside: lilac delight","astra aside: lilac delight"],["astra aside: machine and human","astra aside: machine and human"],["astra aside: silver stillness","astra aside: silver stillness"],["astra aside: time and company","astra aside: time and company"],["astra aside: soft starlight","astra aside: soft starlight"],["astra aside: cosmic wonder","astra aside: cosmic wonder"],["astra aside: whimsy","astra aside: whimsy"],["astra aside: a moment","astra aside: a moment"],["astra aside: gentle affection","astra aside: gentle affection"],["astra aside: magenta amusement","astra aside: magenta amusement"],["astra aside: another door","astra aside: another door"],["astra aside: silver and stars","astra aside: silver and stars"],["astra aside: shared curiosity","astra aside: shared curiosity"],["astra segue: equestria 1","astra segue: Equestria 1"],["astra segue: equestria 2","astra segue: Equestria 2"],["astra segue: harmony 3","astra segue: harmony 3"],["astra segue: harmony 4","astra segue: harmony 4"],["astra segue: arcana 5","astra segue: arcana 5"],["astra segue: arcana 6","astra segue: arcana 6"],["astra segue: observatory 7","astra segue: observatory 7"],["the chronicles of harmony · 1:1 · the first remembered empire · wisdom","the chronicles of harmony · 1:1 · the first remembered empire · wisdom"],["the chronicles of harmony · 1:1 · the first remembered empire · history","the chronicles of harmony · 1:1 · the first remembered empire · history"],["the chronicles of harmony · 1:2 · gusty the great · wisdom","the chronicles of harmony · 1:2 · Gusty the Great · wisdom"],["the chronicles of harmony · 1:2 · gusty the great · history","the chronicles of harmony · 1:2 · Gusty the Great · history"],["the chronicles of harmony · 1:3 · the beginnings of the world · wisdom","the chronicles of harmony · 1:3 · the beginnings of the world · wisdom"],["the chronicles of harmony · 1:3 · the beginnings of the world · history","the chronicles of harmony · 1:3 · the beginnings of the world · history"],["the chronicles of harmony · 2:1 · the earth ponies · wisdom","the chronicles of harmony · 2:1 · the earth ponies · wisdom"],["the chronicles of harmony · 2:1 · the earth ponies · history","the chronicles of harmony · 2:1 · the earth ponies · history"],["the chronicles of harmony · 2:2 · the pegasi · wisdom","the chronicles of harmony · 2:2 · the pegasi · wisdom"],["the chronicles of harmony · 2:2 · the pegasi · history","the chronicles of harmony · 2:2 · the pegasi · history"],["the chronicles of harmony · 2:3 · the unicorns · wisdom","the chronicles of harmony · 2:3 · the unicorns · wisdom"],["the chronicles of harmony · 2:3 · the unicorns · history","the chronicles of harmony · 2:3 · the unicorns · history"],["the chronicles of harmony · 3:1 · the winter of discord · wisdom","the chronicles of harmony · 3:1 · the winter of discord · wisdom"],["the chronicles of harmony · 3:1 · the winter of discord · history","the chronicles of harmony · 3:1 · the winter of discord · history"],["the chronicles of harmony · 3:2 · the fire in the cave · wisdom","the chronicles of harmony · 3:2 · the fire in the cave · wisdom"],["the chronicles of harmony · 3:2 · the fire in the cave · history","the chronicles of harmony · 3:2 · the fire in the cave · history"],["the chronicles of harmony · 3:3 · one homeland · wisdom","the chronicles of harmony · 3:3 · one homeland · wisdom"],["the chronicles of harmony · 3:3 · one homeland · history","the chronicles of harmony · 3:3 · one homeland · history"],["the chronicles of harmony · 4:1 · the six pillars · wisdom","the chronicles of harmony · 4:1 · the six Pillars · wisdom"],["the chronicles of harmony · 4:1 · the six pillars · history","the chronicles of harmony · 4:1 · the six Pillars · history"],["the chronicles of harmony · 4:2 · stygian · wisdom","the chronicles of harmony · 4:2 · Stygian · wisdom"],["the chronicles of harmony · 4:2 · stygian · history","the chronicles of harmony · 4:2 · Stygian · history"],["the chronicles of harmony · 4:3 · the pony of shadows · wisdom","the chronicles of harmony · 4:3 · the Pony of Shadows · wisdom"],["the chronicles of harmony · 4:3 · the pony of shadows · history","the chronicles of harmony · 4:3 · the Pony of Shadows · history"],["the chronicles of harmony · 5:1 · the seed · wisdom","the chronicles of harmony · 5:1 · the seed · wisdom"],["the chronicles of harmony · 5:1 · the seed · history","the chronicles of harmony · 5:1 · the seed · history"],["the chronicles of harmony · 5:2 · the six elements · wisdom","the chronicles of harmony · 5:2 · the six elements · wisdom"],["the chronicles of harmony · 5:2 · the six elements · history","the chronicles of harmony · 5:2 · the six elements · history"],["the chronicles of harmony · 5:3 · the living tree · wisdom","the chronicles of harmony · 5:3 · the living tree · wisdom"],["the chronicles of harmony · 5:3 · the living tree · history","the chronicles of harmony · 5:3 · the living tree · history"],["the chronicles of harmony · 6:1 · the alicorn homeland · wisdom","the chronicles of harmony · 6:1 · the alicorn homeland · wisdom"],["the chronicles of harmony · 6:1 · the alicorn homeland · history","the chronicles of harmony · 6:1 · the alicorn homeland · history"],["the chronicles of harmony · 6:2 · the rising sun · wisdom","the chronicles of harmony · 6:2 · the rising sun · wisdom"],["the chronicles of harmony · 6:2 · the rising sun · history","the chronicles of harmony · 6:2 · the rising sun · history"],["the chronicles of harmony · 6:3 · the rising moon · wisdom","the chronicles of harmony · 6:3 · the rising moon · wisdom"],["the chronicles of harmony · 6:3 · the rising moon · history","the chronicles of harmony · 6:3 · the rising moon · history"],["the chronicles of harmony · 7:1 · the reign of chaos · wisdom","the chronicles of harmony · 7:1 · the reign of chaos · wisdom"],["the chronicles of harmony · 7:1 · the reign of chaos · history","the chronicles of harmony · 7:1 · the reign of chaos · history"],["the chronicles of harmony · 7:2 · the nature of discord · wisdom","the chronicles of harmony · 7:2 · the nature of Discord · wisdom"],["the chronicles of harmony · 7:2 · the nature of discord · history","the chronicles of harmony · 7:2 · the nature of Discord · history"],["the chronicles of harmony · 7:3 · friendship and chaos · wisdom","the chronicles of harmony · 7:3 · friendship and chaos · wisdom"],["the chronicles of harmony · 7:3 · friendship and chaos · history","the chronicles of harmony · 7:3 · friendship and chaos · history"],["the chronicles of harmony · 8:1 · the crystal heart · wisdom","the chronicles of harmony · 8:1 · the Crystal Heart · wisdom"],["the chronicles of harmony · 8:1 · the crystal heart · history","the chronicles of harmony · 8:1 · the Crystal Heart · history"],["the chronicles of harmony · 8:2 · the rule of sombra · wisdom","the chronicles of harmony · 8:2 · the rule of Sombra · wisdom"],["the chronicles of harmony · 8:2 · the rule of sombra · history","the chronicles of harmony · 8:2 · the rule of Sombra · history"],["the chronicles of harmony · 8:3 · the restoration · wisdom","the chronicles of harmony · 8:3 · the restoration · wisdom"],["the chronicles of harmony · 8:3 · the restoration · history","the chronicles of harmony · 8:3 · the restoration · history"],["the chronicles of harmony · 9:1 · the rebellion of the night · wisdom","the chronicles of harmony · 9:1 · the rebellion of the night · wisdom"],["the chronicles of harmony · 9:1 · the rebellion of the night · history","the chronicles of harmony · 9:1 · the rebellion of the night · history"],["the chronicles of harmony · 9:2 · the thousand years · wisdom","the chronicles of harmony · 9:2 · the thousand years · wisdom"],["the chronicles of harmony · 9:2 · the thousand years · history","the chronicles of harmony · 9:2 · the thousand years · history"],["the chronicles of harmony · 9:3 · the return of luna · wisdom","the chronicles of harmony · 9:3 · the return of Luna · wisdom"],["the chronicles of harmony · 9:3 · the return of luna · history","the chronicles of harmony · 9:3 · the return of Luna · history"],["the chronicles of harmony · 10:1 · the five known virtues · wisdom","the chronicles of harmony · 10:1 · the five known virtues · wisdom"],["the chronicles of harmony · 10:1 · the five known virtues · history","the chronicles of harmony · 10:1 · the five known virtues · history"],["the chronicles of harmony · 10:2 · the sixth element · wisdom","the chronicles of harmony · 10:2 · the sixth element · wisdom"],["the chronicles of harmony · 10:2 · the sixth element · history","the chronicles of harmony · 10:2 · the sixth element · history"],["the chronicles of harmony · 10:3 · beyond the artifacts · wisdom","the chronicles of harmony · 10:3 · beyond the artifacts · wisdom"],["the chronicles of harmony · 10:3 · beyond the artifacts · history","the chronicles of harmony · 10:3 · beyond the artifacts · history"],["the chronicles of harmony · 11:1 · earth, wings and horn · wisdom","the chronicles of harmony · 11:1 · earth, wings and horn · wisdom"],["the chronicles of harmony · 11:1 · earth, wings and horn · history","the chronicles of harmony · 11:1 · earth, wings and horn · history"],["the chronicles of harmony · 11:2 · crystal and aquatic ponies · wisdom","the chronicles of harmony · 11:2 · crystal and aquatic ponies · wisdom"],["the chronicles of harmony · 11:2 · crystal and aquatic ponies · history","the chronicles of harmony · 11:2 · crystal and aquatic ponies · history"],["the chronicles of harmony · 11:3 · magic and the body · wisdom","the chronicles of harmony · 11:3 · magic and the body · wisdom"],["the chronicles of harmony · 11:3 · magic and the body · history","the chronicles of harmony · 11:3 · magic and the body · history"],["the chronicles of harmony · 12:1 · the royal alicorns · wisdom","the chronicles of harmony · 12:1 · the royal alicorns · wisdom"],["the chronicles of harmony · 12:1 · the royal alicorns · history","the chronicles of harmony · 12:1 · the royal alicorns · history"],["the chronicles of harmony · 12:2 · the ascension of twilight · wisdom","the chronicles of harmony · 12:2 · the ascension of Twilight · wisdom"],["the chronicles of harmony · 12:2 · the ascension of twilight · history","the chronicles of harmony · 12:2 · the ascension of Twilight · history"],["the chronicles of harmony · 12:3 · birth and transformation · wisdom","the chronicles of harmony · 12:3 · birth and transformation · wisdom"],["the chronicles of harmony · 12:3 · birth and transformation · history","the chronicles of harmony · 12:3 · birth and transformation · history"],["the chronicles of harmony · 13:1 · the discovery of a gift · wisdom","the chronicles of harmony · 13:1 · the discovery of a gift · wisdom"],["the chronicles of harmony · 13:1 · the discovery of a gift · history","the chronicles of harmony · 13:1 · the discovery of a gift · history"],["the chronicles of harmony · 13:2 · the exchange and removal of marks · wisdom","the chronicles of harmony · 13:2 · the exchange and removal of marks · wisdom"],["the chronicles of harmony · 13:2 · the exchange and removal of marks · history","the chronicles of harmony · 13:2 · the exchange and removal of marks · history"],["the chronicles of harmony · 13:3 · identity and vocation · wisdom","the chronicles of harmony · 13:3 · identity and vocation · wisdom"],["the chronicles of harmony · 13:3 · identity and vocation · history","the chronicles of harmony · 13:3 · identity and vocation · history"],["the chronicles of harmony · 14:1 · the taking and giving of power · wisdom","the chronicles of harmony · 14:1 · the taking and giving of power · wisdom"],["the chronicles of harmony · 14:1 · the taking and giving of power · history","the chronicles of harmony · 14:1 · the taking and giving of power · history"],["the chronicles of harmony · 14:2 · enchanted vessels · wisdom","the chronicles of harmony · 14:2 · enchanted vessels · wisdom"],["the chronicles of harmony · 14:2 · enchanted vessels · history","the chronicles of harmony · 14:2 · enchanted vessels · history"],["the chronicles of harmony · 14:3 · the growth of magic · wisdom","the chronicles of harmony · 14:3 · the growth of magic · wisdom"],["the chronicles of harmony · 14:3 · the growth of magic · history","the chronicles of harmony · 14:3 · the growth of magic · history"],["the chronicles of harmony · 15:1 · the sustenance of love · wisdom","the chronicles of harmony · 15:1 · the sustenance of love · wisdom"],["the chronicles of harmony · 15:1 · the sustenance of love · history","the chronicles of harmony · 15:1 · the sustenance of love · history"],["the chronicles of harmony · 15:2 · the hunger of winter spirits · wisdom","the chronicles of harmony · 15:2 · the hunger of winter spirits · wisdom"],["the chronicles of harmony · 15:2 · the hunger of winter spirits · history","the chronicles of harmony · 15:2 · the hunger of winter spirits · history"],["the chronicles of harmony · 15:3 · the fire of anger · wisdom","the chronicles of harmony · 15:3 · the fire of anger · wisdom"],["the chronicles of harmony · 15:3 · the fire of anger · history","the chronicles of harmony · 15:3 · the fire of anger · history"],["the chronicles of harmony · 16:1 · the realm of dreams · wisdom","the chronicles of harmony · 16:1 · the realm of dreams · wisdom"],["the chronicles of harmony · 16:1 · the realm of dreams · history","the chronicles of harmony · 16:1 · the realm of dreams · history"],["the chronicles of harmony · 16:2 · limbo · wisdom","the chronicles of harmony · 16:2 · Limbo · wisdom"],["the chronicles of harmony · 16:2 · limbo · history","the chronicles of harmony · 16:2 · Limbo · history"],["the chronicles of harmony · 16:3 · tartarus and the chaos realm · wisdom","the chronicles of harmony · 16:3 · Tartarus and the chaos realm · wisdom"],["the chronicles of harmony · 16:3 · tartarus and the chaos realm · history","the chronicles of harmony · 16:3 · Tartarus and the chaos realm · history"],["the chronicles of harmony · 17:1 · the mirror between worlds · wisdom","the chronicles of harmony · 17:1 · the mirror between worlds · wisdom"],["the chronicles of harmony · 17:1 · the mirror between worlds · history","the chronicles of harmony · 17:1 · the mirror between worlds · history"],["the chronicles of harmony · 17:2 · the spells of time · wisdom","the chronicles of harmony · 17:2 · the spells of time · wisdom"],["the chronicles of harmony · 17:2 · the spells of time · history","the chronicles of harmony · 17:2 · the spells of time · history"],["the chronicles of harmony · 17:3 · the roads not taken · wisdom","the chronicles of harmony · 17:3 · the roads not taken · wisdom"],["the chronicles of harmony · 17:3 · the roads not taken · history","the chronicles of harmony · 17:3 · the roads not taken · history"],["the chronicles of harmony · 18:1 · canterlot · wisdom","the chronicles of harmony · 18:1 · Canterlot · wisdom"],["the chronicles of harmony · 18:1 · canterlot · history","the chronicles of harmony · 18:1 · Canterlot · history"],["the chronicles of harmony · 18:2 · ponyville and cloudsdale · wisdom","the chronicles of harmony · 18:2 · Ponyville and Cloudsdale · wisdom"],["the chronicles of harmony · 18:2 · ponyville and cloudsdale · history","the chronicles of harmony · 18:2 · Ponyville and Cloudsdale · history"],["the chronicles of harmony · 18:3 · the everfree forest · wisdom","the chronicles of harmony · 18:3 · the Everfree Forest · wisdom"],["the chronicles of harmony · 18:3 · the everfree forest · history","the chronicles of harmony · 18:3 · the Everfree Forest · history"],["the chronicles of harmony · 19:1 · the dragons · wisdom","the chronicles of harmony · 19:1 · the dragons · wisdom"],["the chronicles of harmony · 19:1 · the dragons · history","the chronicles of harmony · 19:1 · the dragons · history"],["the chronicles of harmony · 19:2 · the bloodstone scepter · wisdom","the chronicles of harmony · 19:2 · the Bloodstone Scepter · wisdom"],["the chronicles of harmony · 19:2 · the bloodstone scepter · history","the chronicles of harmony · 19:2 · the Bloodstone Scepter · history"],["the chronicles of harmony · 19:3 · the dragons in the later age · wisdom","the chronicles of harmony · 19:3 · the dragons in the later age · wisdom"],["the chronicles of harmony · 19:3 · the dragons in the later age · history","the chronicles of harmony · 19:3 · the dragons in the later age · history"],["the chronicles of harmony · 20:1 · the idol of boreas · wisdom","the chronicles of harmony · 20:1 · the Idol of Boreas · wisdom"],["the chronicles of harmony · 20:1 · the idol of boreas · history","the chronicles of harmony · 20:1 · the Idol of Boreas · history"],["the chronicles of harmony · 20:2 · the restoration of friendship · wisdom","the chronicles of harmony · 20:2 · the restoration of friendship · wisdom"],["the chronicles of harmony · 20:2 · the restoration of friendship · history","the chronicles of harmony · 20:2 · the restoration of friendship · history"],["the chronicles of harmony · 20:3 · yakyakistan · wisdom","the chronicles of harmony · 20:3 · Yakyakistan · wisdom"],["the chronicles of harmony · 20:3 · yakyakistan · history","the chronicles of harmony · 20:3 · Yakyakistan · history"],["the chronicles of harmony · 21:1 · the old hive · wisdom","the chronicles of harmony · 21:1 · the old hive · wisdom"],["the chronicles of harmony · 21:1 · the old hive · history","the chronicles of harmony · 21:1 · the old hive · history"],["the chronicles of harmony · 21:2 · the giving of love · wisdom","the chronicles of harmony · 21:2 · the giving of love · wisdom"],["the chronicles of harmony · 21:2 · the giving of love · history","the chronicles of harmony · 21:2 · the giving of love · history"],["the chronicles of harmony · 21:3 · a renewed people · wisdom","the chronicles of harmony · 21:3 · a renewed people · wisdom"],["the chronicles of harmony · 21:3 · a renewed people · history","the chronicles of harmony · 21:3 · a renewed people · history"],["the chronicles of harmony · 22:1 · mount aris and seaquestria · wisdom","the chronicles of harmony · 22:1 · Mount Aris and Seaquestria · wisdom"],["the chronicles of harmony · 22:1 · mount aris and seaquestria · history","the chronicles of harmony · 22:1 · Mount Aris and Seaquestria · history"],["the chronicles of harmony · 22:2 · the return to the mountain · wisdom","the chronicles of harmony · 22:2 · the return to the mountain · wisdom"],["the chronicles of harmony · 22:2 · the return to the mountain · history","the chronicles of harmony · 22:2 · the return to the mountain · history"],["the chronicles of harmony · 22:3 · the kirin grove and distant settlements · wisdom","the chronicles of harmony · 22:3 · the kirin grove and distant settlements · wisdom"],["the chronicles of harmony · 22:3 · the kirin grove and distant settlements · history","the chronicles of harmony · 22:3 · the kirin grove and distant settlements · history"],["the chronicles of harmony · 23:1 · tirek and scorpan · wisdom","the chronicles of harmony · 23:1 · Tirek and Scorpan · wisdom"],["the chronicles of harmony · 23:1 · tirek and scorpan · history","the chronicles of harmony · 23:1 · Tirek and Scorpan · history"],["the chronicles of harmony · 23:2 · the sirens · wisdom","the chronicles of harmony · 23:2 · the sirens · wisdom"],["the chronicles of harmony · 23:2 · the sirens · history","the chronicles of harmony · 23:2 · the sirens · history"],["the chronicles of harmony · 23:3 · the shadows · wisdom","the chronicles of harmony · 23:3 · the shadows · wisdom"],["the chronicles of harmony · 23:3 · the shadows · history","the chronicles of harmony · 23:3 · the shadows · history"],["the chronicles of harmony · 24:1 · the princess of friendship · wisdom","the chronicles of harmony · 24:1 · the Princess of Friendship · wisdom"],["the chronicles of harmony · 24:1 · the princess of friendship · history","the chronicles of harmony · 24:1 · the Princess of Friendship · history"],["the chronicles of harmony · 24:2 · the school of friendship · wisdom","the chronicles of harmony · 24:2 · the School of Friendship · wisdom"],["the chronicles of harmony · 24:2 · the school of friendship · history","the chronicles of harmony · 24:2 · the School of Friendship · history"],["the chronicles of harmony · 24:3 · the council and the throne · wisdom","the chronicles of harmony · 24:3 · the council and the throne · wisdom"],["the chronicles of harmony · 24:3 · the council and the throne · history","the chronicles of harmony · 24:3 · the council and the throne · history"],["the chronicles of harmony · 25:1 · the fire alicorn · wisdom","the chronicles of harmony · 25:1 · the fire alicorn · wisdom"],["the chronicles of harmony · 25:1 · the fire alicorn · history","the chronicles of harmony · 25:1 · the fire alicorn · history"],["the chronicles of harmony · 25:2 · the protective crystals · wisdom","the chronicles of harmony · 25:2 · the protective crystals · wisdom"],["the chronicles of harmony · 25:2 · the protective crystals · history","the chronicles of harmony · 25:2 · the protective crystals · history"],["the chronicles of harmony · 25:3 · the breaking of the old kingdom · wisdom","the chronicles of harmony · 25:3 · the breaking of the old kingdom · wisdom"],["the chronicles of harmony · 25:3 · the breaking of the old kingdom · history","the chronicles of harmony · 25:3 · the breaking of the old kingdom · history"],["the chronicles of harmony · 26:1 · maretime bay · wisdom","the chronicles of harmony · 26:1 · Maretime Bay · wisdom"],["the chronicles of harmony · 26:1 · maretime bay · history","the chronicles of harmony · 26:1 · Maretime Bay · history"],["the chronicles of harmony · 26:2 · bridlewood and zephyr heights · wisdom","the chronicles of harmony · 26:2 · Bridlewood and Zephyr Heights · wisdom"],["the chronicles of harmony · 26:2 · bridlewood and zephyr heights · history","the chronicles of harmony · 26:2 · Bridlewood and Zephyr Heights · history"],["the chronicles of harmony · 26:3 · the forgotten inheritance · wisdom","the chronicles of harmony · 26:3 · the forgotten inheritance · wisdom"],["the chronicles of harmony · 26:3 · the forgotten inheritance · history","the chronicles of harmony · 26:3 · the forgotten inheritance · history"],["the chronicles of harmony · 27:1 · the unity crystals · wisdom","the chronicles of harmony · 27:1 · the Unity Crystals · wisdom"],["the chronicles of harmony · 27:1 · the unity crystals · history","the chronicles of harmony · 27:1 · the Unity Crystals · history"],["the chronicles of harmony · 27:2 · the new gifts · wisdom","the chronicles of harmony · 27:2 · the new gifts · wisdom"],["the chronicles of harmony · 27:2 · the new gifts · history","the chronicles of harmony · 27:2 · the new gifts · history"],["the chronicles of harmony · 27:3 · the together trees · wisdom","the chronicles of harmony · 27:3 · the Together Trees · wisdom"],["the chronicles of harmony · 27:3 · the together trees · history","the chronicles of harmony · 27:3 · the Together Trees · history"],["starlight insights - affirmations that glimmer · 1:1 · healing and becoming","starlight insights - affirmations that glimmer · 1:1 · healing and becoming"],["starlight insights - affirmations that glimmer · 1:2 · healing and becoming","starlight insights - affirmations that glimmer · 1:2 · healing and becoming"],["starlight insights - affirmations that glimmer · 1:3 · healing and becoming","starlight insights - affirmations that glimmer · 1:3 · healing and becoming"],["starlight insights - affirmations that glimmer · 1:4 · healing and becoming","starlight insights - affirmations that glimmer · 1:4 · healing and becoming"],["starlight insights - affirmations that glimmer · 1:5 · healing and becoming","starlight insights - affirmations that glimmer · 1:5 · healing and becoming"],["starlight insights - affirmations that glimmer · 1:6 · healing and becoming","starlight insights - affirmations that glimmer · 1:6 · healing and becoming"],["starlight insights - affirmations that glimmer · 2:1 · my own magic","starlight insights - affirmations that glimmer · 2:1 · my own magic"],["starlight insights - affirmations that glimmer · 2:2 · my own magic","starlight insights - affirmations that glimmer · 2:2 · my own magic"],["starlight insights - affirmations that glimmer · 2:3 · my own magic","starlight insights - affirmations that glimmer · 2:3 · my own magic"],["starlight insights - affirmations that glimmer · 2:4 · my own magic","starlight insights - affirmations that glimmer · 2:4 · my own magic"],["starlight insights - affirmations that glimmer · 2:5 · my own magic","starlight insights - affirmations that glimmer · 2:5 · my own magic"],["starlight insights - affirmations that glimmer · 2:6 · my own magic","starlight insights - affirmations that glimmer · 2:6 · my own magic"],["starlight insights - affirmations that glimmer · 3:1 · feelings and honesty","starlight insights - affirmations that glimmer · 3:1 · feelings and honesty"],["starlight insights - affirmations that glimmer · 3:2 · feelings and honesty","starlight insights - affirmations that glimmer · 3:2 · feelings and honesty"],["starlight insights - affirmations that glimmer · 3:3 · feelings and honesty","starlight insights - affirmations that glimmer · 3:3 · feelings and honesty"],["starlight insights - affirmations that glimmer · 3:4 · feelings and honesty","starlight insights - affirmations that glimmer · 3:4 · feelings and honesty"],["starlight insights - affirmations that glimmer · 3:5 · feelings and honesty","starlight insights - affirmations that glimmer · 3:5 · feelings and honesty"],["starlight insights - affirmations that glimmer · 3:6 · feelings and honesty","starlight insights - affirmations that glimmer · 3:6 · feelings and honesty"],["starlight insights - affirmations that glimmer · 4:1 · freedom and responsibility","starlight insights - affirmations that glimmer · 4:1 · freedom and responsibility"],["starlight insights - affirmations that glimmer · 4:2 · freedom and responsibility","starlight insights - affirmations that glimmer · 4:2 · freedom and responsibility"],["starlight insights - affirmations that glimmer · 4:3 · freedom and responsibility","starlight insights - affirmations that glimmer · 4:3 · freedom and responsibility"],["starlight insights - affirmations that glimmer · 4:4 · freedom and responsibility","starlight insights - affirmations that glimmer · 4:4 · freedom and responsibility"],["starlight insights - affirmations that glimmer · 4:5 · freedom and responsibility","starlight insights - affirmations that glimmer · 4:5 · freedom and responsibility"],["starlight insights - affirmations that glimmer · 4:6 · freedom and responsibility","starlight insights - affirmations that glimmer · 4:6 · freedom and responsibility"],["starlight insights - affirmations that glimmer · 5:1 · friendship and belonging","starlight insights - affirmations that glimmer · 5:1 · friendship and belonging"],["starlight insights - affirmations that glimmer · 5:2 · friendship and belonging","starlight insights - affirmations that glimmer · 5:2 · friendship and belonging"],["starlight insights - affirmations that glimmer · 5:3 · friendship and belonging","starlight insights - affirmations that glimmer · 5:3 · friendship and belonging"],["starlight insights - affirmations that glimmer · 5:4 · friendship and belonging","starlight insights - affirmations that glimmer · 5:4 · friendship and belonging"],["starlight insights - affirmations that glimmer · 5:5 · friendship and belonging","starlight insights - affirmations that glimmer · 5:5 · friendship and belonging"],["starlight insights - affirmations that glimmer · 5:6 · friendship and belonging","starlight insights - affirmations that glimmer · 5:6 · friendship and belonging"],["starlight insights - affirmations that glimmer · 6:1 · courage and second chances","starlight insights - affirmations that glimmer · 6:1 · courage and second chances"],["starlight insights - affirmations that glimmer · 6:2 · courage and second chances","starlight insights - affirmations that glimmer · 6:2 · courage and second chances"],["starlight insights - affirmations that glimmer · 6:3 · courage and second chances","starlight insights - affirmations that glimmer · 6:3 · courage and second chances"],["starlight insights - affirmations that glimmer · 6:4 · courage and second chances","starlight insights - affirmations that glimmer · 6:4 · courage and second chances"],["starlight insights - affirmations that glimmer · 6:5 · courage and second chances","starlight insights - affirmations that glimmer · 6:5 · courage and second chances"],["starlight insights - affirmations that glimmer · 6:6 · courage and second chances","starlight insights - affirmations that glimmer · 6:6 · courage and second chances"],["starlight insights - affirmations that glimmer · 7:1 · at home with myself","starlight insights - affirmations that glimmer · 7:1 · at home with myself"],["starlight insights - affirmations that glimmer · 7:2 · at home with myself","starlight insights - affirmations that glimmer · 7:2 · at home with myself"],["starlight insights - affirmations that glimmer · 7:3 · at home with myself","starlight insights - affirmations that glimmer · 7:3 · at home with myself"],["starlight insights - affirmations that glimmer · 7:4 · at home with myself","starlight insights - affirmations that glimmer · 7:4 · at home with myself"],["starlight insights - affirmations that glimmer · 7:5 · at home with myself","starlight insights - affirmations that glimmer · 7:5 · at home with myself"],["starlight insights - affirmations that glimmer · 7:6 · at home with myself","starlight insights - affirmations that glimmer · 7:6 · at home with myself"],["great and powerful words of wisdom · 1:1 · no apologies for being great and powerful","great and powerful words of wisdom · 1:1 · no apologies for being great and powerful"],["great and powerful words of wisdom · 1:2 · no apologies for being great and powerful","great and powerful words of wisdom · 1:2 · no apologies for being great and powerful"],["great and powerful words of wisdom · 1:3 · no apologies for being great and powerful","great and powerful words of wisdom · 1:3 · no apologies for being great and powerful"],["great and powerful words of wisdom · 1:4 · no apologies for being great and powerful","great and powerful words of wisdom · 1:4 · no apologies for being great and powerful"],["great and powerful words of wisdom · 1:5 · no apologies for being great and powerful","great and powerful words of wisdom · 1:5 · no apologies for being great and powerful"],["great and powerful words of wisdom · 1:6 · no apologies for being great and powerful","great and powerful words of wisdom · 1:6 · no apologies for being great and powerful"],["great and powerful words of wisdom · 2:1 · the audience is not in charge","great and powerful words of wisdom · 2:1 · the audience is not in charge"],["great and powerful words of wisdom · 2:2 · the audience is not in charge","great and powerful words of wisdom · 2:2 · the audience is not in charge"],["great and powerful words of wisdom · 2:3 · the audience is not in charge","great and powerful words of wisdom · 2:3 · the audience is not in charge"],["great and powerful words of wisdom · 2:4 · the audience is not in charge","great and powerful words of wisdom · 2:4 · the audience is not in charge"],["great and powerful words of wisdom · 2:5 · the audience is not in charge","great and powerful words of wisdom · 2:5 · the audience is not in charge"],["great and powerful words of wisdom · 2:6 · the audience is not in charge","great and powerful words of wisdom · 2:6 · the audience is not in charge"],["great and powerful words of wisdom · 3:1 · the show goes on","great and powerful words of wisdom · 3:1 · the show goes on"],["great and powerful words of wisdom · 3:2 · the show goes on","great and powerful words of wisdom · 3:2 · the show goes on"],["great and powerful words of wisdom · 3:3 · the show goes on","great and powerful words of wisdom · 3:3 · the show goes on"],["great and powerful words of wisdom · 3:4 · the show goes on","great and powerful words of wisdom · 3:4 · the show goes on"],["great and powerful words of wisdom · 3:5 · the show goes on","great and powerful words of wisdom · 3:5 · the show goes on"],["great and powerful words of wisdom · 3:6 · the show goes on","great and powerful words of wisdom · 3:6 · the show goes on"],["great and powerful words of wisdom · 4:1 · even the great and powerful trixie","great and powerful words of wisdom · 4:1 · even the Great and Powerful Trixie"],["great and powerful words of wisdom · 4:2 · even the great and powerful trixie","great and powerful words of wisdom · 4:2 · even the Great and Powerful Trixie"],["great and powerful words of wisdom · 4:3 · even the great and powerful trixie","great and powerful words of wisdom · 4:3 · even the Great and Powerful Trixie"],["great and powerful words of wisdom · 4:4 · even the great and powerful trixie","great and powerful words of wisdom · 4:4 · even the Great and Powerful Trixie"],["great and powerful words of wisdom · 4:5 · even the great and powerful trixie","great and powerful words of wisdom · 4:5 · even the Great and Powerful Trixie"],["great and powerful words of wisdom · 4:6 · even the great and powerful trixie","great and powerful words of wisdom · 4:6 · even the Great and Powerful Trixie"],["great and powerful words of wisdom · 5:1 · matters of great personal importance","great and powerful words of wisdom · 5:1 · matters of great personal importance"],["great and powerful words of wisdom · 5:2 · matters of great personal importance","great and powerful words of wisdom · 5:2 · matters of great personal importance"],["great and powerful words of wisdom · 5:3 · matters of great personal importance","great and powerful words of wisdom · 5:3 · matters of great personal importance"],["great and powerful words of wisdom · 5:4 · matters of great personal importance","great and powerful words of wisdom · 5:4 · matters of great personal importance"],["great and powerful words of wisdom · 5:5 · matters of great personal importance","great and powerful words of wisdom · 5:5 · matters of great personal importance"],["great and powerful words of wisdom · 5:6 · matters of great personal importance","great and powerful words of wisdom · 5:6 · matters of great personal importance"],["great and powerful words of wisdom · 6:1 · declarations of magnificence","great and powerful words of wisdom · 6:1 · declarations of magnificence"],["great and powerful words of wisdom · 6:2 · declarations of magnificence","great and powerful words of wisdom · 6:2 · declarations of magnificence"],["great and powerful words of wisdom · 6:3 · declarations of magnificence","great and powerful words of wisdom · 6:3 · declarations of magnificence"],["great and powerful words of wisdom · 6:4 · declarations of magnificence","great and powerful words of wisdom · 6:4 · declarations of magnificence"],["great and powerful words of wisdom · 6:5 · declarations of magnificence","great and powerful words of wisdom · 6:5 · declarations of magnificence"],["great and powerful words of wisdom · 6:6 · declarations of magnificence","great and powerful words of wisdom · 6:6 · declarations of magnificence"],["great and powerful words of wisdom · 7:1 · the grand finale","great and powerful words of wisdom · 7:1 · the grand finale"],["great and powerful words of wisdom · 7:2 · the grand finale","great and powerful words of wisdom · 7:2 · the grand finale"],["great and powerful words of wisdom · 7:3 · the grand finale","great and powerful words of wisdom · 7:3 · the grand finale"],["great and powerful words of wisdom · 7:4 · the grand finale","great and powerful words of wisdom · 7:4 · the grand finale"],["great and powerful words of wisdom · 7:5 · the grand finale","great and powerful words of wisdom · 7:5 · the grand finale"],["great and powerful words of wisdom · 7:6 · the grand finale","great and powerful words of wisdom · 7:6 · the grand finale"],["astra · cosmic aside · abandoned shuttle craft","astra · cosmic aside · abandoned shuttle craft"],["astra · cosmic aside · crystal cave","astra · cosmic aside · crystal cave"],["astra · cosmic aside · little moon","astra · cosmic aside · little moon"],["astra · cosmic aside · distant signal","astra · cosmic aside · distant signal"],["astra · cosmic aside · a quiet comet","astra · cosmic aside · a quiet comet"],["astra · cosmic aside · stardust","astra · cosmic aside · stardust"],["astra · cosmic aside · companion star","astra · cosmic aside · companion star"],["astra · cosmic aside · a ribbon of light","astra · cosmic aside · a ribbon of light"],["astra · cosmic aside · a forgotten satellite","astra · cosmic aside · a forgotten satellite"],["astra · cosmic aside · a peculiar reflection","astra · cosmic aside · a peculiar reflection"],["astra · cosmic aside · another constellation","astra · cosmic aside · another constellation"],["astra · cosmic aside · a lantern in the void","astra · cosmic aside · a lantern in the void"],["astra · cosmic aside · a doorway in space","astra · cosmic aside · a doorway in space"],["astra · cosmic aside · a ring of ice","astra · cosmic aside · a ring of ice"],["astra · cosmic aside · a silver glimmer","astra · cosmic aside · a silver glimmer"],["astra · cosmic aside · a quiet orbit","astra · cosmic aside · a quiet orbit"],["astra · cosmic aside · dimensional detour","astra · cosmic aside · dimensional detour"]]);
function stationDisplayTitle(track) {
  if (isDress(track)) return track.title; // separately reviewed fashion names and labels
  if (track.kind === "station_sound" && track.id === "station-sound-magnificence") return "great and powerful";
  if (track.kind === "station_sound" && track.id === "station-sound-magnificence-intro") return "great and powerful intro";
  if (typeof track.title !== "string") return track.title;
  if (track.kind === "station_sound") return track.title.toLowerCase();
  if (!["station_intro", "short_id", "intermission", "feature_intermission"].includes(track.kind)) return track.title;
  const key = track.title.toLowerCase();
  const reviewed = reviewedStationTitles.get(key);
  if (reviewed !== undefined) return reviewed;
  // Legacy mirror titles were not all renamed at once. Preserve their wording.
  if (key.startsWith("across the mirror ·")) {
    const through = reviewedStationTitles.get(key.replace(/^across/, "through"));
    if (through !== undefined) return through.replace(/^through/, "across");
  }
  return transcriptDisplayText(track.title).replace(/^Astra(?= ·| aside:| segue:)/, "astra");
}

// Transcript presentation only. Keep known names; source-case ambiguous short names.
// The name vocabulary can be extended for future local scripts without touching their text.
const transcriptProperNames = ["Great and Powerful Trixie", "Astra", "Kokoro", "Twilight Sparkle", "Sunset Shimmer", "Rainbow Dash", "Applejack", "Fluttershy", "Pinkie Pie", "Pinkie", "Celestia", "Luna", "Princess Celestia", "Princess Luna", "Princess Twilight", "Princess Twilight Sparkle", "Principal Celestia", "Vice Principal Luna", "Principal Cinch", "Canterlot", "Canterlot High", "Crystal Prep", "Crystal Prep Academy", "Equestria", "Equestrian", "Equestria Girls", "Equestria Land", "Ponyville", "Everfree", "Camp Everfree", "Gaea Everfree", "Friendship Games", "Fall Formal", "Freshman Fair", "Wondercolt", "Wondercolts", "Shadowbolts", "Rainbooms", "Dazzlings", "DJ Pon-3", "Adagio Dazzle", "Adagio", "Aria Blaze", "Sonata Dusk", "Babs Seed", "Babs", "Sweetie Belle", "Apple Bloom", "Scootaloo", "Mrs. Harshwhinny", "Harshwhinny", "Photo Finish", "Granny Smith", "Flim and Flam", "Flim", "Flam", "Diamond Dogs", "Diamond Dog", "Piggly Wiggly", "MyStable", "Anon-a-Miss", "Lyra Heartstrings", "Sweetie Drops", "Pixel Pizzaz", "Violet Blurr", "Miss Cheerilee", "Cheerilee", "Everton", "Cinch", "Gloriosa Daisy", "Gloriosa", "Crystal Ball", "Crystal Gala", "Chance to Prance", "Sour Sweet", "Sugarcoat", "Sunny Flare", "Lemon Zest", "Daring Do", "Canter Zoom", "Juniper Montage", "Chestnut Magnifico", "Starlight Glimmer", "Canterlot Movie Club", "Countess Coloratura", "Prim Hemline", "Flanksy", "Lily Pad", "Cranky Doodle", "Mr. Cranky Doodle", "Mr. Doodle", "Bulk Biceps", "Micro Chips", "Club Amethyst", "Fairy Bootmother", "Shiny City", "Cousin Goldie", "Wallflower Blush", "Memory Stone", "Sweet Snacks Café", "Sweet Snacks Cafe", "Vignette Valencia", "Rosette Nebula", "Canterlot Pet Show", "Fluffersnuff", "Winona", "A. K. Yearling", "A.K. Yearling", "AK Yearling", "Coach Comet Chaser", "Comet Chaser", "Sugarcube Corner", "Luxe Deluxe", "Storm King", "Starswirled Music Festival", "Starswirled", "PostCrush", "K-Lo", "Su-Z", "Time Twirler", "Princess Thunder Guts", "Dirk Thistleweed", "MC Dex Effex", "Skull Cruncher", "JVJ-24601", "JVJ", "My Little Pony", "Elements of Harmony", "Element of Harmony", "Mane Six", "Young Six", "Tree of Harmony", "Castle of Friendship", "School of Friendship", "Council of Friendship", "Crystal Empire", "Crystal Heart", "Nightmare Moon", "Princess Cadance", "Cadance", "Shining Armor", "Rockhoof", "Mage Meadowbrook", "Meadowbrook", "Somnambula", "Mistmane", "Flash Magnus", "Star Swirl", "Starswirl", "Star Swirl the Bearded", "Stygian", "Luster Dawn", "Cozy Glow", "Chrysalis", "Tirek", "Sombra", "Moon Dancer", "Moondancer", "Cheese Sandwich", "Coco Pommel", "Silver Shill", "Spitfire", "Wonderbolts", "Cutie Mark Crusaders", "Diamond Tiara", "Ocellus", "Smolder", "Silverstream", "Gallus", "Yona", "Sandbar", "Timber Spruce", "Midnight Sparkle", "Daydream Shimmer", "Sunset Shimmer's Backstage Pass", "Twilight's Kingdom", "The Cutie Re-Mark", "The Cutie Mark Chronicles", "The Last Problem", "Forgotten Friendship", "Rainbow Rocks", "Legend of Everfree", "Rollercoaster of Friendship", "Spring Breakdown", "Holidays Unwrapped", "Dance Magic", "Movie Magic", "Mirror Magic", "Shake Your Tail", "Awesome as I Wanna Be", "Welcome to the Show", "My Past Is Not Today", "Life Is a Runway", "Friendship Through the Ages", "Run to Break Free", "Get Up and Dance", "I'm on a Yacht", "Find the Magic", "Let It Rain", "Perfect Day for Fun", "Whack-a-Mole", "Fashion Week", "Young Farmers’ Club", "Battle of the Bands", "Blitzball", "Boston", "Monday", "Tuesday", "Wednesday", "Wednesdays", "Thursday", "Friday", "Saturday", "Sunday", "Einstein", "Newton", "Feynman", "Heisenberg", "Schrödinger", "Schrodinger", "Planck", "Bohr", "Dirac", "Everett", "Rovelli", "Shannon", "Landauer", "Zurek", "Lindblad", "Pauli", "Wootters", "Watrous", "Preskill", "Deutsch", "Pythagoras", "Plato", "Aristotle", "Hermes Trismegistus", "Hermes", "Thoth", "Hecate", "Isis", "Osiris", "Anubis", "Odin", "Freya", "Freyja", "Apollo", "Athena", "Aphrodite", "Dionysus", "Persephone", "Demeter", "Zeus", "Hades", "Poseidon", "Artemis", "Brigid", "Morrígan", "Morrigan", "Mithras", "Buddha", "Buddhism", "Hinduism", "Christianity", "Judaism", "Islam", "Kabbalah", "Qabalah", "Hermeticism", "Taoism", "Daoism", "Shinto", "Tarot de Marseille", "Rider-Waite-Smith", "Aleister Crowley", "Arthur Edward Waite", "Pamela Colman Smith", "Carl Jung", "Jung", "Sirius", "Andromeda", "Orion", "Pleiades", "Milky Way", "Neptune", "Jupiter", "Saturn", "Uranus", "Pluto", "Grogar", "Father of Monsters", "Gusty the Great", "Bewitching Bell", "Mount Everhoof", "Chancellor Puddinghead", "Smart Cookie", "Commander Hurricane", "Private Pansy", "Princess Platinum", "Clover the Clever", "Hearth’s Warming", "Hearth's Warming", "Fire of Friendship", "Pillars of Old Equestria", "Ponhenge", "Pony of Shadows", "Everfree Forest", "Opaline Arcana", "Opaline", "Skyros", "King Sombra", "Princess of Friendship", "Flurry Heart", "Sunny Starscout", "Cutie Map", "Alicorn Amulet", "Windigos", "Niriks", "Stream of Silence", "Tantabus", "Tartarus", "Cerberus", "Crystal Mirror", "Cloudsdale", "Manehattan", "Appleloosa", "Castle of the Two Sisters", "Dragon Lands", "Dragon Lord", "Bloodstone Scepter", "Gauntlet of Fire", "Isle of Scaly", "Dragonstone", "Griffonstone", "Idol of Boreas", "King Grover", "King Guto", "Arimaspi", "Yakyakistan", "Queen Chrysalis", "Thorax", "Mount Aris", "Seaquestria", "Queen Novo", "Klugetown", "Abyssinia", "Scorpan", "Fire Alicorn", "Unity Crystals", "Maretime Bay", "Argyle Starshine", "Bridlewood", "Zephyr Heights", "Together Trees", "Sparky", "Huginn", "Muninn", "Italy", "Norse", "Egypt", "Denmark", "Dhumavati", "Mahakala", "Jigme Namgyel", "Bhutan", "Hindu", "Buddhist", "Islamicate", "British Museum", "Metropolitan Museum", "Hugging Face", "Hugging Face Swarm", "Hilbert", "Breezies", "Wonderbolt", "Steven Magnet", "Sassy Saddles", "Cranky Doodle Donkey", "Capper", "Grand Galloping Gala", "Nightmare Night", "Amity Ball", "Shadow Spade", "Mean Six", "Pillars of Equestria", "Rainbow Falls", "Rainbow Power", "Element of Kindness", "Rarity Takes Manehattan", "Magical Mystery Cure", "Every Little Thing She Does", "To Where and Back Again", "Discordant Harmony", "Leap of Faith", "Pinkie Pride", "Epic of Gilgamesh", "It's About Time", "It’s About Time", "I’m on a Yacht", "Prayer of the Corvid Circle", "Kokoro-82M"];
const transcriptSourceCaseNames = ["Glimmer", "Twilight", "Sunset", "Rainbow", "Rarity", "Spike", "Trixie", "Maud", "Apples", "Apple", "Granny", "Big Mac", "Wallflower", "Vignette", "Tank", "Gummy", "Lily", "Juniper", "Dirk", "Sunflower", "Boulder", "Pie", "Lyra", "Midnight", "Starlight", "Goldie", "Ray", "Randolph", "Zephyr", "Rosette", "Banana", "Screech", "Yearling", "Aria", "Sonata", "Snips", "Snails", "Bulk", "Selfie", "Dazzled", "Games", "Celestias", "Daisy", "Discord", "Boneless", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December", "Bell", "Earth", "Solar System", "Sardines", "Ferris", "Gusty", "Pillars", "Tree", "Heart", "Element", "Elements", "Ember", "Argyle", "Sunny", "Grover", "Guto", "Novo", "Puddinghead", "Hurricane", "Pansy", "Platinum", "Clover", "Friendship Is Magic", "Limbo", "The Perfect Pear", "Perfect Pear", "Shadow Play", "Uprooted", "Raven Crown", "Flood Tablet", "Sweet Snacks", "Dash", "GPS", "RV", "DJ"];
const transcriptStationPhrases = new Map([
  ["starlight insights, affirmations that glimmer", "Starlight insights, affirmations that glimmer"],
  ["starlight insights - affirmations that glimmer", "starlight insights - affirmations that glimmer"],
  ["affirmations that glimmer", "affirmations that glimmer"],
  ["chronicles of harmony", "chronicles of harmony"],
]);
const transcriptNames = new Map([...transcriptProperNames, ...transcriptSourceCaseNames].map(name => [name.toLowerCase(), name]));
for (const [key,value] of transcriptStationPhrases) transcriptNames.set(key,value);
const transcriptAmbiguousNames = new Set(transcriptSourceCaseNames.map(name => name.toLowerCase()));
const transcriptNamePattern = new RegExp(
  "(^|[^\\p{L}\\p{N}_])(" + [...transcriptNames.values()].sort((a, b) => b.length - a.length)
    .map(name => name.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|") + ")(?![\\p{L}\\p{N}_])", "giu");
const transcriptTrixieEntries = new Set(["custom-0915588ca6525771b6e1af697576273d", "custom-93079f6bb6ed548383ea0afe325b5191", "custom-bbbe675e4db9519db8794bc822233992", "custom-2c1f9ba457615b32b48ebdc865f52612", "custom-d09bcb238cf158dbaa11609e0eff0170", "custom-7e5a4311adb15e03a02e72ccf526464a", "custom-ef697f40c1df5347b5b5976c70924089", "custom-6a4a4514b0ba5be09c695e6ed26cc41b", "custom-a2a257b3bf9f561fa63441073b830181", "custom-eb83a0ab04c452bcaad6a34729caa843", "custom-343d6736b3805943a8c425843d24cb82", "custom-ca77ccf5b8ac58dca27461a45d840314", "custom-3ca2656cf707534197b7a02776f8c8c1", "custom-c23856b9d62a548d8523cfd6f3dc1626", "custom-9baace3cdcab54f6b0e80da6dfd58e6b", "custom-04fb16bb626454c8a9eafaf81b3d500e", "custom-e040407bc16d509292234ae2a572e364", "custom-aae47698189359519a81ae5dd2d22194", "custom-836818618b005ad49444b33cbaee4738", "custom-3c28949c957450059d0a56caa184a682", "custom-37ac6944df0f5f92b5dab8ed206fea2b", "custom-b28e109ed4b05fee8f6e979c2dca20b2", "custom-1e7f3fbaea8050f8bd197c2f5a39bea4", "custom-2214f61a7ac45d9d86d8c5a58f63300b", "custom-c85ccc55c1945372bb0b5b6ffb044abd", "custom-fba8d7b143b559f780fbde5c54308e10", "custom-e08247aee15d5062b3343920821ba061", "custom-df853c4fdefa56ca921bd8079b0cd427", "custom-bbeedb862fe65aaca4a5f15fcc73a876", "custom-c3baf718edb35f87a75c057804c472c6", "custom-1dc6e7c98e3d58d1a071c9bbd2738299", "custom-93d27f71c2ae5428846037adee9073e3", "custom-1e22a50331035c0d97e8791268c2c191", "custom-b064527525c55fb4a9ae8049fb275d26", "custom-3b179671dd645690a077c01bb2e17d44", "custom-4bf85a4bc84a502498766fd7e7cdce06", "custom-8189fd6a1e845ea6b707b542453d74c5", "custom-fd451d49f9505213b01482ffb3b09c81", "custom-e637f2ab3f6a5131a13039628e4b6841", "custom-be8333ce85cd52bfb708d4fd52a033f5", "custom-18e497683f4953c3a3931425a633595e", "custom-d2070394f40e5a96932f8e0259dd62b7"]);
function lowerTranscriptPart(value, preserveEmphasis) {
  return preserveEmphasis ? value.replace(/\p{L}+/gu, word => /^\p{Lu}{2,}$/u.test(word) ? word : word.toLowerCase()) : value.toLowerCase();
}
function transcriptDisplayText(value, preserveEmphasis = false) {
  const source = typeof value === "string" ? value : "";
  let output = "", end = 0;
  for (const match of source.matchAll(transcriptNamePattern)) {
    const name = match[2], key = name.toLowerCase(), canonical = transcriptNames.get(key);
    const start = match.index + match[1].length;
    output += lowerTranscriptPart(source.slice(end, start), preserveEmphasis);
    output += transcriptStationPhrases.has(key) ? transcriptStationPhrases.get(key)
      : transcriptAmbiguousNames.has(key) && name !== canonical ? lowerTranscriptPart(name, preserveEmphasis) : canonical;
    end = start + name.length;
  }
  return output + lowerTranscriptPart(source.slice(end), preserveEmphasis);
}

// Authored post titles/attachment labels embedded in introductions are verbatim.
// Credits and curated dress text are verbatim too; only station-owned prose is styled.
function hostDisplayText(track, announcement, post) {
  const source = typeof announcement === "string" ? announcement : "";
  if (post || isDress(track)) return source;
  const preserve = track.kind === "intermission" && transcriptTrixieEntries.has(track.id);
  const credit = typeof track.credit === "string" && track.credit ? "\n\nCredit: " + track.credit : "";
  if (credit && source.endsWith(credit)) {
    return transcriptDisplayText(source.slice(0,-credit.length), preserve) + "\n\ncredit: " + track.credit;
  }
  return transcriptDisplayText(source, preserve);
}

function readout(post) {
  const cueTitle = current.id === "station-sound-little-constellation-intro" ? "little constellation outro" : current.id === "station-sound-little-constellation" && cueFrame?.intro === current ? "little constellation intro" : stationDisplayTitle(current);
  byId("title").textContent = isSendoff(current) ? sendoffTitle : current.kind === "music" ? musicTitle : post ? post.title : (isAside(current) || isSegue(current) || isSendoffIntro(current)) ? "astra" : cueTitle || segmentNames[current.kind];
  if (post) {
    const date = shortDate(post.body.date);
    byId("details").textContent = segmentNames[current.kind] + (date ? " · " + date : "");
  } else {
    let details = isStory(current) ? "astra · through the mirror" : "astra · speaking with kokoro";
    if (isSendoffIntro(current)) details = "astra · signal interference";
    if (current.kind === "music") details = "musical excerpt · 9 seconds";
    if (isSendoff(current)) details = "musical intermission · 3:20";
    if (current.kind === "station_sound") details = stationSoundLabel(current) + " · " + current.duration + " seconds";
    if (current.kind === "audio_excerpt") details = "audio excerpt · 9 seconds";
    byId("details").textContent = current.kind !== "station_sound" && current.credit ? details + " · " + current.credit : details;
  }

  const source = byId("original");
  source.hidden = isSendoff(current) || isSendoffIntro(current) || isDress(current) || Boolean(dressFrame) || isStory(current) || (!post && lastPost < 0);
  if (source.hidden) source.removeAttribute("href");
  else {
    const linked = post ?? program.posts[lastPost];
    source.href = linked.body.source_url;
    byId("link-label").textContent = post ? "read this nudisco ai post" : "previous post · " + linked.title;
  }
  const isNotice = current.kind === "attachment_notice";
  const announcement = post && !isNotice ? post.intro.announcement_text : current.announcement_text;
  byId("host-text").textContent = hostDisplayText(current, announcement, post);
  byId("post-text").textContent = post ? post.body.authored_text : "";
  byId("host-copy").hidden = !byId("host-text").textContent;
  byId("post-copy").hidden = !post;
  const attachments = post?.attachments || [];
  byId("attachment-copy").hidden = !attachments.length;
  const list = byId("attachment-list");
  list.replaceChildren();
  for (const item of attachments) {
    const li = document.createElement("li");
    li.textContent = item.kind === "unknown" || !item.value ? "attachment" : item.kind + " · " + item.value;
    list.append(li);
  }
  byId("transcript").hidden = !post && !current.announcement_text;
  markCurrent(post ? currentPost : -1);
  dressPaint();
}

function show(track, autoplay) {
  rememberSeek = null;
  accountPlayback();
  accountedSeconds = 0;
  if (sendoffFrame && !isSendoff(track) && !isSendoffIntro(track)) sendoffFrame = null;
  if (dressFrame && ![dressFrame.intro,dressFrame.speech,dressFrame.outro].includes(track)) dressFrame=null;
  if (cueFrame && track !== cueFrame.intro && track !== cueFrame.target && track !== cueFrame.passage) cueFrame = null;
  if (!isSegue(track)) pendingPassage = null;
  ++attempt;
  playing = false;
  current = track;
  audio.pause();
  audio.src = track.audio_url;
  const isPost = track.kind === "post_intro" || track.kind === "post" || track.kind === "attachment_notice";
  readout(isPost ? program.posts[currentPost] : null);
  message("");
  paintControls();
  tick();
  if (autoplay) play(0);
  else if (started) rememberSave(true, 0);
}

function intermissionAfterReading(duration) {
  const cadence = program.cadence.break_every;
  if (!cadence) return null;
  const sinceBreak = completions - lastBreak;
  if (mixBags) return mixedIntermission(duration, sinceBreak, cadence);
  // The generator measures the body’s decoded sample frames, independently of
  // its introduction, wall-clock pauses, and MP3 container padding.
  if (program.features.length) {
    readingSecondsSinceFeature += duration;
    const accumulated = readingSecondsSinceFeature >= (program.cadence.feature_after_reading_seconds ?? Infinity);
    if (duration >= longReadingSeconds || accumulated) {
      if ((!lastBreak && duration >= longReadingSeconds) || sinceBreak >= Math.max(minimumFeatureSpacing, cadence)) {
        readingSecondsSinceFeature = 0;
        return program.features[featureNumber++ % program.features.length];
      }
      // With a two- or three-post cadence, leave space for an earned longer break.
      if (accumulated) return null;
    }
  }
  if (program.ordinaryBreaks.length && sinceBreak >= cadence) {
    return program.ordinaryBreaks[breakNumber++ % program.ordinaryBreaks.length];
  }
  return null;
}

function continueAfterPost() {
  if (postMode==="void" && chosenFirst===null) { continueVoid(true); return; }
  if (sessionMix) { continueSession(true); return; }
  const {break_every, short_id_every} = program.cadence;
  const intermission = intermissionAfterReading(program.posts[currentPost].body.duration);
  if (intermission) {
    lastBreak = lastAnnouncement = completions;
    playIntermission(intermission);
    return;
  }
  // Reserve room either side of an ID so breaks never crowd together.
  const nearBreak = break_every && program.ordinaryBreaks.length && completions - lastBreak + 1 >=
    (mixBags ? Math.min(2, break_every) : break_every);
  if (program.shortId && short_id_every && completions % short_id_every === 0 &&
      completions - lastAnnouncement >= 2 && !nearBreak) {
    lastAnnouncement = completions;
    show(program.shortId, true);
    return;
  }
  const aside = asideAfterReading();
  if (aside) {
    show(aside, true);
    return;
  }
  takePost(true);
}

function finish() {
  if (!playing || !audio.ended) return;
  if (continueCueIntro(true)) return;
  accountPlayback();
  if (finishSendoff(true)) return;
  if (finishDress(true)) return;
  if (isStory(current)) completeStory(current);
  switch (current.kind) {
    case "station_intro":
      if (program.posts.length || postMode==="void") takePost(true);
      else {
        started = false;
        show(program.opening, false);
      }
      return;
    case "post_intro":
      show(program.posts[currentPost].body, true);
      return;
    case "post": {
      completions++;
      if (program.posts[currentPost].notice) {
        show(program.posts[currentPost].notice, true);
        return;
      }
      if (maybeSendoff("post") || maybeDress("post")) return;
      continueAfterPost();
      return;
    }
    case "attachment_notice":
      if (maybeSendoff("notice") || maybeDress("notice")) return;
      if (sessionMix) { continueSession(true); return; }
      break;
    case "intermission":
    case "feature_intermission": {
      // Asides are speech-only, not musical breaks. They do not earn, reset,
      // or consume any regular intermission slots.
      if (isAside(current)) break;
      if (isSegue(current)) {
        if (pendingPassage) {
          const passage = pendingPassage;
          show(passage, true);
          return;
        }
        break;
      }
      const clip = cueFrame?.passage === current ? cueFrame.outro : soundAfterSpeech(current, program);
      cueFrame = null;
      if (clip) {
        show(clip, true);
        return;
      }
      break;
    }
  }
  if (maybeSendoff() || maybeDress()) return;
  if (sessionMix) continueSession();
  else takePost(true);
}

function setVolume() {
  const input = byId("volume");
  const wanted = Number(input.value) / 100;
  try { audio.volume = wanted; } catch { /* the device may own the volume */ }
  if (Math.abs(audio.volume - wanted) > .01) {
    const label = input.closest("label");
    label.textContent = "device volume";
    label.classList.add("device");
  }
}

function offlinePlaylist() {
  return new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.onload = () => resolve(window.NUDISCO_PLAYLIST);
    script.onerror = () => reject(new Error("playlist unavailable"));
    script.src = "playlist.js";
    document.head.append(script);
  });
}

async function load() {
  try {
    const manifest = location.protocol === "file:" ? await offlinePlaylist() :
      await fetch("playlist.json", {cache: "no-cache"}).then(response => {
        if (!response.ok) throw new Error("playlist unavailable");
        return response.json();
      });
    program = parseProgram(manifest);
    if (!program) {
      byId("state").textContent = "off the air";
      byId("title").textContent = "the program is being prepared.";
      byId("details").textContent = "recordings will appear here when the first program is ready.";
      byId("volume").disabled = true;
      return;
    }
    setupDress();
    setupMixedRotation();
    setupSessionMix();
    setupAsides();
    setupSegues();
    arrange();
    buildProgram();
    rememberTracks = new Map(manifest.tracks.map(t=>[t.id,t]));
    // Only builder-verified equal-duration derivatives of the exact same original speech.
    if (Array.isArray(manifest.remaster_sources) && manifest.remaster_sources.length <= 10000) {
      for (const row of manifest.remaster_sources) {
        if (!Array.isArray(row) || row.length !== 3) continue;
        const [id, from, to] = row;
        if (typeof id === 'string' && typeof from === 'string' && /^audio\/[a-f0-9]{64}\.mp3$/.test(from) &&
            from !== to && rememberTracks.get(id)?.audio_url === to) {
          if (!remasterSources.has(id)) remasterSources.set(id, new Set());
          remasterSources.get(id).add(from);
        }
      }
    }
    rememberPostIndexes = new Map(program.posts.map((p,i)=>[p.body.id,i]));
    const record=rememberConsentRecord();
    loadSeriesProgress(record);
    if (!record || dialsShouldRestart(record.mark) || !rememberRestore(record.mark)) {
      if (record?.mark) dialsClearBookmark();
      show(program.opening, false);
    }
    dialsPaint();
    byId("remember-toggle").disabled = false;
    byId("remember-home-toggle").disabled = false;
    byId("start-over").disabled = false;
    byId("dials-series-reset").disabled = !storyPool.length;
    byId("tune").disabled = false;
    setVolume();
  } catch {
    byId("state").textContent = "off the air";
    byId("title").textContent = "the program is unavailable.";
    byId("details").textContent = "reopen the complete station folder or try again later.";
    byId("volume").disabled = true;
  }
}

byId("tune").addEventListener("click", () => {
  if (!playing) {
    // A suspended but still-open app may be stale too. Never reset an active stream.
    if (started && dialsMode === "automatic" && dialsLastActivity > 0 && Date.now()-dialsLastActivity >= dialsIdle*3600000) startOver();
    if (audio.error) { accountPlayback(); accountedSeconds = 0; audio.load(); }
    play();
  } else {
    ++attempt;
    audio.pause();
    playing = false;
    dialsLastActivity=Date.now();
    paintControls();
    rememberSave(true);
  }
});
function nextReading() {
  if (!started || !program) return;
  const autoplay=playing;
  accountPlayback();
  // A skip is not a natural completion: never advance seriesNext, count a
  // completed post, trigger timed features, or replay the rest of a special.
  // Leave both due clocks exactly where the original schedule placed them.
  const pending=cueFrame?.intro === current ? cueFrame.passage : isSegue(current) ? pendingPassage : null;
  dressFrame=null; sendoffFrame=null; cueFrame=null; pendingPassage=null;
  if (postMode==="void") chosenFirst=null;
  // A sound/segue immediately preceding an already selected ordinary reading
  // can be skipped directly to that reading without consuming another turn.
  if (isManualReading(pending)) { show(pending,autoplay); return; }
  const canPost=postMode!=="void" && program.posts.length>0;
  if (canPost && chosenFirst!==null) { takePost(autoplay); return; }
  const [maxPosts,maxHost]=sessionLimits(true);
  const wantHost=!hostBlocks || postStreak>=maxPosts || (hostStreak<maxHost && postDebt>=0);
  if (!canPost || (sessionMix && wantHost && hostStreak<maxHost && current!==program.opening)) {
    const track=takeHostBlock(true);
    if (track) { playIntermission(track,autoplay,true); return; }
  }
  if (canPost) { takePost(autoplay); return; }
  pauseVoid("no ordinary readings are available in this release. choose a recording or change post mode.");
}
byId("next").addEventListener("click", nextReading);
byId("shuffle").addEventListener("click", () => {
  if (!program || !program.posts.length) return;
  setPostMode(postModes[(postModes.indexOf(postMode)+1)%3]);
  rememberSavePreferences({postMode,shuffle:postMode==="on"});
  rememberSave(true);
});
byId("volume").addEventListener("input", setVolume);
audio.addEventListener("ended", finish);
audio.addEventListener("pause", () => {
  if (playing && audio.paused && !audio.ended) {
    ++attempt;
    playing = false;
    dialsLastActivity=Date.now();
    paintControls();
    rememberSave(true);
  }
});
audio.addEventListener("error", () => { if (current && audio.error) failed(); });
audio.addEventListener("timeupdate", tick);
audio.addEventListener("loadedmetadata", tick);
// One optional, device-local consent record for playback, favorites and shuffle.
// Keep the v1 storage key and bookmark shape stable across releases. No preference writes before consent.
const rememberKey = "nudisco.radio.remember.v1";
let dialsMode="automatic", dialsIdle=8, dialsMax=24, dialsLastActivity=0;
const dialsModes=["automatic","fresh","resume"], dialsIdleOptions=[1,2,4,8,12,24], dialsMaxOptions=[4,8,12,24,48];
function dialsPrefs(prefs) {
  return {scheduleMode:dialsModes.includes(prefs?.scheduleMode)?prefs.scheduleMode:"automatic",
    idleHours:dialsIdleOptions.includes(prefs?.idleHours)?prefs.idleHours:8,
    maxHours:dialsMaxOptions.includes(prefs?.maxHours)?prefs.maxHours:24};
}
function dialsShouldRestart(mark, now=Date.now()) {
  if (!mark) return false;
  if (dialsMode==="fresh") return true;
  if (dialsMode!=="automatic") return false;
  const idle=Number.isFinite(mark.savedAt) && mark.savedAt>0 && mark.savedAt<=now && now-mark.savedAt>=dialsIdle*3600000;
  const aged=Number.isFinite(mark.sessionSeconds) && mark.sessionSeconds>=dialsMax*3600;
  return idle || aged;
}
function dialsClearBookmark() {
  const record=rememberConsentRecord();
  if (record) try { rememberWrite({...record,mark:null}); }
  catch { rememberStatus("your device could not reset the saved bookmark."); }
}
function dialsPaint() {
  byId("dials-memory").textContent=rememberToken?"saved on this device. turn off to forget saved data.":"preferences and series progress last for this visit.";
  byId("dials-mode").value=dialsMode; byId("dials-idle").value=String(dialsIdle); byId("dials-max").value=String(dialsMax);
  byId("dials-timing").hidden=dialsMode!=="automatic";
  byId("dials-mode-help").textContent={automatic:"restart a stale schedule without losing series progress.",fresh:"start at the station opening each time you reopen the radio.",resume:"continue from your saved broadcast position."}[dialsMode];
  const series=byId("dials-series");
  const completed=Math.max(0,storyOrder.indexOf(seriesNext));
  series.textContent=!program?"finding the series…":!storyPool[storyCursor]?"next episode is unavailable in this release":`${completed} of ${storyOrder.length} episodes completed · next: ${storyPool[storyCursor].title.replace(/^astra\s*·\s*/i,"")}`;
  byId("dials-pins").hidden=!dressPinned;
}
function dialsSet() {
  const prefs=dialsPrefs({scheduleMode:byId("dials-mode").value,idleHours:Number(byId("dials-idle").value),maxHours:Number(byId("dials-max").value)});
  dialsMode=prefs.scheduleMode; dialsIdle=prefs.idleHours; dialsMax=prefs.maxHours;
  rememberSavePreferences(prefs); dialsPaint();
}
function dialsInit() {
  for (const id of ["dials-mode","dials-idle","dials-max"]) byId(id).addEventListener("change",dialsSet);
  const panel=byId("dials-dialog");
  if (panel) {
    byId("dials-open").addEventListener("click",()=>{dialsPaint(); if(panel.showModal)panel.showModal();else panel.setAttribute("open","");});
    byId("dials-close").addEventListener("click",()=>{if(panel.close)panel.close();else panel.removeAttribute("open");});
  }
  byId("dials-unpin").addEventListener("click",()=>{
    if (!dressPinned) return;
    dressPinned=false; rememberSavePreferences({dressPinned:false}); dressPaint();
  });
  dialsPaint();
}
const rememberLimit = 160000;
const legacyFavoriteKey = 'nudisco.radio.app.v1.favorites';
const legacyShuffleKey = 'nudisco.radio.app.v1.shuffle';
const rememberFavorites = new Set();
let rememberToken = null, rememberRestored = false, rememberSeek = null;
let rememberLastWrite = 0, rememberTracks = new Map(), rememberPostIndexes = new Map();
function rememberRead() {
  try {
    const raw = localStorage.getItem(rememberKey);
    if (!raw || raw.length > rememberLimit) return null;
    const value = JSON.parse(raw);
    return value?.version === 1 && typeof value.token === "string" && value.token.length <= 80 ? value : null;
  } catch { return null; }
}
let rememberPaintedEnabled = null;
function rememberPaint() {
  const enabled=!!rememberToken;
  if (!enabled) rememberFavorites.clear();
  byId("remember-toggle").setAttribute("aria-pressed", String(enabled));
  byId("remember-state").textContent = enabled ? " · on" : " · off";
  byId("remember-home-toggle").setAttribute("aria-pressed", String(enabled));
  byId("remember-home-state").textContent = enabled ? " · on" : " · off";
  byId("remember-home-help").textContent = enabled ? "saved on this device" : "this visit only";
  dialsPaint();
  if (rememberPaintedEnabled!==enabled) {
    rememberPaintedEnabled=enabled;
    document.dispatchEvent(new Event('radio-preferences-change'));
  }
}
function rememberStatus(text) { byId("remember-status").textContent = text; const other=byId("dials-storage-status"); if(other)other.textContent=text; }
function rememberWrite(record) {
  let raw = JSON.stringify(record);
  if (raw.length > rememberLimit && record.mark) {
    record = {...record, mark:{...record.mark,shuffleRemaining:null,rotation:null}};
    raw = JSON.stringify(record);
  }
  if (raw.length > rememberLimit) throw new Error('local preference record exceeds limit');
  localStorage.setItem(rememberKey, raw);
}
function rememberLegacy(key, fallback) {
  try { return JSON.parse(localStorage.getItem(key)) ?? fallback; } catch { return fallback; }
}
function rememberClearLegacy() {
  // The previous app saved these even without consent. Retire both keys.
  localStorage.removeItem(legacyFavoriteKey);
  localStorage.removeItem(legacyShuffleKey);
}
function rememberFavoriteIds(value) {
  return Array.isArray(value) ? [...new Set(value.filter(id=>typeof id==='string' && id.length>0 && id.length<=512 && id!==sendoffId && id!==sendoffIntroId))] : [];
}
function rememberPreferences(value) {
  return {...(value?.prefs && typeof value.prefs==='object' && !Array.isArray(value.prefs) ? value.prefs : {}),
    ...dialsPrefs(value?.prefs),
    favorites:rememberFavoriteIds(value?.prefs?.favorites),
    dressPinned:value?.prefs?.dressPinned===true,
    postMode:postModes.includes(value?.prefs?.postMode) ? value.prefs.postMode :
      (typeof value?.prefs?.shuffle==='boolean' ? value.prefs.shuffle : value?.mark?.shuffled===true) ? "on" : "off",
    shuffle:postModes.includes(value?.prefs?.postMode) ? value.prefs.postMode==="on" :
      typeof value?.prefs?.shuffle==='boolean' ? value.prefs.shuffle : value?.mark?.shuffled===true};
}
function rememberApplyPreferences(value) {
  const prefs=rememberPreferences(value);
  dialsMode=prefs.scheduleMode; dialsIdle=prefs.idleHours; dialsMax=prefs.maxHours;
  if (validSeriesNext(prefs.seriesNext)) { seriesNext=prefs.seriesNext; syncStoryCursor(); }
  let changed=prefs.favorites.length!==rememberFavorites.size || prefs.favorites.some(id=>!rememberFavorites.has(id));
  if (changed) { rememberFavorites.clear(); for (const id of prefs.favorites) rememberFavorites.add(id); }
  if (postMode!==prefs.postMode) { setPostMode(prefs.postMode); changed=true; }
  else paintPostMode();
  if (dressPinned!==prefs.dressPinned) { dressPinned=prefs.dressPinned; dressPaint(); changed=true; }
  dialsPaint();
  if (changed) document.dispatchEvent(new Event('radio-preferences-change'));
}
function rememberConsentRecord() {
  if (!rememberToken) return null;
  const value=rememberRead();
  if (value?.token===rememberToken) return value;
  // A different tab removed or replaced consent. Never recreate it here.
  rememberToken=null; rememberPaint(); return null;
}
function rememberSavePreferences(patch) {
  const value=rememberConsentRecord();
  if (!value) return false;
  try {
    rememberWrite({...value,prefs:{...rememberPreferences(value),...patch}});
    return true;
  } catch { rememberStatus('your device could not save the radio preferences.'); return false; }
}
function rememberRequestConsent() {
  if (rememberConsentRecord()) return;
  rememberStatus('');
  const dialog=byId('remember-dialog');
  if (dialog.open) return;
  if (dialog.showModal) dialog.showModal(); else dialog.setAttribute('open','');
}
function rememberOffset() {
  if (rememberSeek?.track === current) return rememberSeek.time;
  return Number.isFinite(audio.currentTime) ? Math.max(0, Math.min(current?.duration || 0, audio.currentTime)) : 0;
}
function rememberSave(force = false, offset = null) {
  if (!rememberToken || !program || !current || !started) return;
  if (!force && Date.now() - rememberLastWrite < 5000) return;
  // Another window may have disabled or replaced consent. Never recreate it.
  const record = rememberConsentRecord();
  if (!record) return;
  const previous = [sessionSeconds, accountedSeconds, postDebt, storyDebt];
  accountPlayback();
  const postId = i => program.posts[i]?.body.id ?? null;
  const mark = {
    id: current.id, source: current.audio_url, savedAt:dialsLastActivity || Date.now(),
    time: Math.floor((offset ?? rememberOffset()) * 10) / 10,
    currentPost: postId(currentPost), lastPost: postId(lastPost), nextPost: postId(nextIndex),
    chosen: postId(chosenFirst), postMode, shuffled:postMode==="on",
    shuffleRemaining: shuffledOrder.length <= 2000 ? shuffledOrder.slice(shuffleCursor).map(postId) : null,
    sessionSeconds, postDebt, postStreak, hostStreak, hostBlocks, voidLastIdBlock, completions, lastBreak, lastAnnouncement,
    breakNumber, featureNumber, readingSecondsSinceFeature, readingSecondsSinceBreak, mixedSlot, classicSlot,
    lastAside, nextAsideAt, storyCursor, storiesStarted, storyDebt, lastHostId,
    rotation: {cycle:hostCycle, lastGroup:lastHostGroup,
      readings:pooledReadingBag?.snapshot() ?? null,
      groups:[...hostGroups].map(([key,g])=>[key,{queue:g.queue.map(t=>t.id),last:g.last}]),
      lastStoryBlock, nextSessionAsideAt,
      lastSessionAsideSeconds:Number.isFinite(lastSessionAsideSeconds)?lastSessionAsideSeconds:null,
      asides:asideBag?.snapshot() ?? null},
    sendoffNextAt, sendoffFrame:sendoffFrame ? {resume:sendoffFrame.resume} : null,
    dressNextAt, dressBag:dressBag?.snapshot() ?? null,
    dressFrame:dressFrame ? {intro:dressFrame.intro?.id ?? null,speech:dressFrame.speech.id,outro:dressFrame.outro?.id ?? null,resume:dressFrame.resume} : null,
    pending: pendingPassage?.id ?? null,
    frame: cueFrame ? {intro: cueFrame.intro?.id ?? null, target: cueFrame.target.id, passage: cueFrame.passage.id, outro: cueFrame.outro?.id ?? null} : null,
    soundBoundary, previousBoundaryHadCue, lastCueBoundary: [...lastCueBoundary]
  };
  [sessionSeconds, accountedSeconds, postDebt, storyDebt] = previous;
  try {
    rememberWrite({...record, mark});
    rememberLastWrite = Date.now();
  } catch { rememberStatus("your device could not save the playback bookmark."); }
}
function rememberRestore(mark) {
  if (!mark || typeof mark !== "object") return false;
  const get = id => typeof id === "string" ? rememberTracks.get(id) : undefined;
  const idx = id => rememberPostIndexes.get(id) ?? -1;
  const num = (value, min = 0, max = 1e9) => Number.isFinite(value) ? Math.min(max, Math.max(min, value)) : 0;
  const integer = value => Math.floor(num(value));
  let track = get(mark.id);
  let post = idx(mark.currentPost);
  if (track && postKinds.has(track.kind)) post = program.posts.findIndex(p => p.body === track || p.intro === track || p.notice === track);
  if (!track || (postKinds.has(track.kind) && post < 0)) {
    // Removed recordings fall back to a still-present post, never an arbitrary URL.
    if (postMode==="void") return false;
    const fallback = idx(mark.nextPost);
    if (fallback < 0) return false;
    track = program.posts[fallback].intro; post = fallback;
  }
  currentPost = post; lastPost = idx(mark.lastPost);
  if (postKinds.has(track.kind)) lastPost = post;
  postMode = rememberPreferences(rememberRead()).postMode; paintPostMode();
  arrange(post, true);
  if (idx(mark.nextPost) >= 0 && track.id === mark.id) nextIndex = idx(mark.nextPost);
  const chosen = track.id === mark.id ? idx(mark.chosen) : -1; chosenFirst = chosen >= 0 ? chosen : null;
  if (postMode==="on" && (mark.postMode==="on" || (!mark.postMode && mark.shuffled === true)) && Array.isArray(mark.shuffleRemaining) && mark.shuffleRemaining.length <= 2000 && track.id === mark.id) {
    shuffledOrder = [...new Set(mark.shuffleRemaining.map(idx).filter(i=>i>=0))]; shuffleCursor = 0;
  }
  sessionSeconds=num(mark.sessionSeconds); postDebt=num(mark.postDebt,postDebtMin,postDebtMax);
  sendoffNextAt=Number.isFinite(mark.sendoffNextAt)?num(mark.sendoffNextAt,1440,1e9):1440;
  if (isSendoff(track) || isSendoffIntro(track)) {
    const resume=mark.sendoffFrame?.resume;
    sendoffFrame={resume:["post","notice"].includes(resume)&&post>=0?resume:"boundary"};
    if (!Number.isFinite(mark.sendoffNextAt)) sendoffNextAt=sessionSeconds+2520;
  }
  dressNextAt=Number.isFinite(mark.dressNextAt)?num(mark.dressNextAt,720,1e9):720;
  dressBag?.restore(mark.dressBag);
  const df=mark.dressFrame;
  if (df && typeof df==="object") {
    const speech=get(df.speech), intro=program.dressSounds.get("station-sound-dress-intro")||null, outro=program.dressSounds.get("station-sound-dress-outro")||null;
    if (program.dress.includes(speech)&&[speech,intro,outro].includes(track)) dressFrame={intro,speech,outro,resume:["post","notice"].includes(df.resume)&&post>=0?df.resume:"boundary"};
  }
  // Legacy/explicit fashion recording restored without its frame still gets a safe exit.
  if (isDress(track)&&!dressFrame) { dressFrame={intro:null,speech:track,outro:program.dressSounds.get("station-sound-dress-outro")||null,resume:"boundary"}; dressNextAt=Math.max(dressNextAt,sessionSeconds+1440); }
  postStreak=integer(mark.postStreak); hostStreak=integer(mark.hostStreak); hostBlocks=integer(mark.hostBlocks);
  voidLastIdBlock=Number.isFinite(mark.voidLastIdBlock) ? Math.min(hostBlocks,integer(mark.voidLastIdBlock)) : hostBlocks;
  completions=integer(mark.completions); lastBreak=Math.min(completions,integer(mark.lastBreak)); lastAnnouncement=Math.min(completions,integer(mark.lastAnnouncement));
  breakNumber=integer(mark.breakNumber); featureNumber=integer(mark.featureNumber);
  readingSecondsSinceFeature=num(mark.readingSecondsSinceFeature); readingSecondsSinceBreak=num(mark.readingSecondsSinceBreak);
  mixedSlot=integer(mark.mixedSlot); classicSlot=integer(mark.classicSlot);
  lastAside=Math.min(completions,integer(mark.lastAside)); nextAsideAt=integer(mark.nextAsideAt);
  syncStoryCursor(); storiesStarted=integer(mark.storiesStarted); storyDebt=num(mark.storyDebt,-1800,1800);
  lastHostId=typeof mark.lastHostId === "string" && get(mark.lastHostId) ? mark.lastHostId : null;
  const rotation=mark.rotation;
  // Earlier family-specific and unweighted bags begin a fresh rate-up cycle,
  // avoiding the last known pooled reading. Rate-up bookmarks resume their
  // remaining tickets, including the empty end-of-cycle state.
  pooledReadingBag?.restore({queue:[],last:lastHostId});
  pooledReadingBag?.restore(rotation?.readings);
  if (rotation && typeof rotation==="object") {
    if (Array.isArray(rotation.cycle) && rotation.cycle.length<=hostGroups.size)
      hostCycle=[...new Set(rotation.cycle.filter(key=>hostGroups.has(key)))];
    lastHostGroup=hostGroups.has(rotation.lastGroup)?rotation.lastGroup:null;
    if (Array.isArray(rotation.groups) && rotation.groups.length<=hostGroups.size) {
      for (const item of rotation.groups) {
        if (!Array.isArray(item) || item.length!==2) continue;
        const [key,state]=item, g=hostGroups.get(key);
        if (!g || pooledReadingGroups.has(key) || !state || !Array.isArray(state.queue) || state.queue.length>2000) continue;
        g.queue=[...new Set(state.queue.map(get).filter(t=>g.items.includes(t)))];
        g.last=g.items.some(t=>t.id===state.last)?state.last:null;
      }
    }
    lastStoryBlock=Math.min(hostBlocks,Number.isFinite(rotation.lastStoryBlock)?num(rotation.lastStoryBlock,-3,1e9):(storiesStarted?hostBlocks:-3));
    nextSessionAsideAt=integer(rotation.nextSessionAsideAt);
    lastSessionAsideSeconds=Number.isFinite(rotation.lastSessionAsideSeconds)?num(rotation.lastSessionAsideSeconds,0,sessionSeconds):-Infinity;
    asideBag?.restore(rotation.asides);
  } else {
    // Existing opt-in bookmarks still restore the same recording and position.
    // A pre-upgrade global bag can seed the remaining independent family bags.
    if (Array.isArray(mark.hostQueue) && mark.hostQueue.length<=2000) {
      const remaining=[...new Set(mark.hostQueue.map(get).filter(t=>hostPool.includes(t)))];
      for (const [key,g] of hostGroups) if (!pooledReadingGroups.has(key)) g.queue=remaining.filter(t=>g.items.includes(t));
    }
    lastStoryBlock=storiesStarted?hostBlocks:-3;
    nextSessionAsideAt=hostBlocks+completions+2;
  }
  soundBoundary=integer(mark.soundBoundary); previousBoundaryHadCue=mark.previousBoundaryHadCue===true;
  if (Array.isArray(mark.lastCueBoundary) && mark.lastCueBoundary.length<=32) for (const entry of mark.lastCueBoundary) {
    if (Array.isArray(entry) && get(entry[0])?.kind === "station_sound") lastCueBoundary.set(entry[0], Math.min(soundBoundary,integer(entry[1])));
  }
  const frame=mark.frame;
  if (frame && typeof frame === "object") {
    const intro=get(frame.intro), target=get(frame.target), passage=get(frame.passage), outro=get(frame.outro);
    if (target && passage && [intro,target,passage].includes(track) && (target===passage || isSegue(target)) &&
        ["intermission","feature_intermission"].includes(passage.kind) && !isSegue(passage) && !isAside(passage) &&
        (!intro || intro.kind==="station_sound") && (!outro || soundKinds.has(outro.kind))) cueFrame={intro,target,passage,outro};
  }
  const pending=get(mark.pending);
  if (isSegue(track) && pending && ["intermission","feature_intermission"].includes(pending.kind) && !isSegue(pending)) pendingPassage=pending;
  rememberRestored = true;
  dialsLastActivity=Number.isFinite(mark.savedAt)?Math.min(Date.now(),Math.max(0,mark.savedAt)):Date.now();
  started=false; // Restoring must not overwrite the saved mark before its seek is applied.
  show(track,false); // never autoplay a restored recording
  started = true;
  // When the same ID has been re-recorded, start that new version at zero.
  const time = track.id === mark.id && (track.audio_url === mark.source || remasterSources.get(track.id)?.has(mark.source)) ? num(mark.time,0,Math.max(0,track.duration-.1)) : 0;
  if (time>0) {
    rememberSeek={track,time};
    try { audio.currentTime=time; } catch {}
  }
  paintControls(); tick();
  return true;
}
function rememberApplySeek() {
  if (!rememberSeek || rememberSeek.track!==current || audio.readyState<1) return;
  const wanted=Math.min(rememberSeek.time,Math.max(0,(Number.isFinite(audio.duration)?audio.duration:current.duration)-.1));
  try { audio.currentTime=wanted; rememberSeek=null; tick(); } catch {}
}
function startOver() {
  if (!program || !current) return;
  const autoplay = playing;
  // Invalidate any pending play promise and discard the previous session state.
  ++attempt;
  playing = false;
  started = false;
  audio.pause();
  current = null; // show() must not account the previous recording again.
  currentPost = lastPost = -1;
  chosenFirst = null;
  completions = lastBreak = lastAnnouncement = breakNumber = featureNumber = 0;
  readingSecondsSinceFeature = readingSecondsSinceBreak = mixedSlot = classicSlot = 0;
  sessionSeconds = accountedSeconds = postDebt = postStreak = hostStreak = hostBlocks = voidLastIdBlock = 0;
  hostCycle = []; hostGroups.clear(); lastHostId = lastHostGroup = null;
  lastStoryBlock = -3; nextSessionAsideAt = 2; lastSessionAsideSeconds = -Infinity;
  storiesStarted = storyDebt = 0; syncStoryCursor();
  lastAside = 0; nextAsideAt = 1;
  soundBoundary = 0; previousBoundaryHadCue = false; lastCueBoundary.clear();
  cueFrame = pendingPassage = null;
  dressFrame=null; dressNextAt=720; setupDress();
  sendoffFrame=null; sendoffNextAt=1440;
  mixBags = asideBag = null; segueBags.clear();
  rememberSeek = null; rememberRestored = false; dialsLastActivity=0;
  setupMixedRotation(); setupSessionMix(); setupAsides(); setupSegues(); arrange();
  rememberStatus("");
  if (rememberToken) {
    try {
      const value=rememberConsentRecord();
      if (value) rememberWrite({...value,mark:null});
    } catch { rememberStatus("your device could not reset the saved bookmark."); }
  }
  show(program.opening, autoplay); dialsPaint();
}
function rememberInit() {
  const value=rememberRead(); rememberToken=value?.token ?? null; rememberPaint();
  // Existing opt-in bookmarks retain their position and previously stored
  // preferences. If no consent exists, discard old independent preferences.
  try {
    if (value) {
      const prefs=rememberPreferences(value);
      if (!Array.isArray(value.prefs?.favorites)) prefs.favorites=rememberFavoriteIds(rememberLegacy(legacyFavoriteKey,[]));
      if (!postModes.includes(value.prefs?.postMode) && typeof value.prefs?.shuffle!=='boolean' && !value.mark) {
        prefs.shuffle=rememberLegacy(legacyShuffleKey,false)===true; prefs.postMode=prefs.shuffle?"on":"off";
      }
      rememberApplyPreferences({...value,prefs});
      if (!value.prefs || !postModes.includes(value.prefs.postMode) || typeof value.prefs.shuffle!=='boolean' || !Array.isArray(value.prefs.favorites))
        rememberWrite({...value,prefs});
    }
    rememberClearLegacy();
  } catch { rememberStatus('your device could not update the saved radio preferences.'); }
  const dialog=byId("remember-dialog");
  // Reuse the existing two-button confirmation shell for both destructive actions.
  const resetDialog=byId("start-over-dialog");
  let pendingConfirmation=null;
  function confirmRadioAction(heading,description,action) {
    if (resetDialog.open) return;
    if (typeof resetDialog.showModal === "function" && typeof resetDialog.close === "function") {
      byId("start-over-heading").textContent=heading;
      byId("start-over-description").textContent=description;
      pendingConfirmation=action;
      resetDialog.showModal();
    } else if (window.confirm(heading+" "+description)) action();
  }
  byId("start-over").addEventListener("click",()=>{
    if (!program || !current) return;
    confirmRadioAction("restart radio schedule?", "the radio will return to the station opening. your series progress, favorites and pinned catalogues will stay as they are.", ()=>{startOver();byId("dials-result").textContent="fresh broadcast schedule ready.";});
  });
  byId("dials-series-reset").addEventListener("click",()=>{
    if (!program || !storyPool.length) return;
    confirmRadioAction("reset series progress?", "through the mirror will begin again at its first episode. the current broadcast schedule will not change.", ()=>{
      seriesNext=storyOrder[0]; syncStoryCursor(); rememberSavePreferences({seriesNext}); rememberSave(true); dialsPaint();
      byId("dials-result").textContent="series progress reset.";
    });
  });
  byId("start-over-no").addEventListener("click",()=>{
    pendingConfirmation=null;
    if (resetDialog.open) resetDialog.close();
  });
  resetDialog.addEventListener("cancel",()=>{pendingConfirmation=null;});
  byId("start-over-ok").addEventListener("click",()=>{
    if (!resetDialog.open) return;
    const action=pendingConfirmation;
    pendingConfirmation=null;
    resetDialog.close();
    if (action) action();
  });
  const toggleRemember=()=>{
    rememberStatus("");
    const record=rememberConsentRecord();
    if (record) {
      confirmRadioAction("forget?", "this will remove your saved playback bookmark, schedule settings, series progress, favorites, blog post mode and pinned dress catalogue. your hearts will be disabled and favorites cleared. other current-visit preferences may still be used.", ()=>{
        // An older confirmation must not delete consent newly granted in another tab.
        if (rememberConsentRecord()?.token!==record.token) return;
        try { rememberClearLegacy(); localStorage.removeItem(rememberKey); rememberToken=null; rememberPaint(); }
        catch { rememberStatus("your device could not delete the saved radio preferences."); }
      });
    } else rememberRequestConsent();
  };
  byId("remember-toggle").addEventListener("click",toggleRemember);
  byId("remember-home-toggle").addEventListener("click",toggleRemember);
  const close=()=>{if (dialog.close) dialog.close(); else dialog.removeAttribute("open");};
  byId("remember-no").addEventListener("click",close);
  byId("remember-ok").addEventListener("click",()=>{
    close();
    try {
      const token=Date.now().toString(36)+"-"+Math.random().toString(36).slice(2);
      rememberClearLegacy();
      rememberWrite({version:1,token,mark:null,prefs:{favorites:[...rememberFavorites],postMode,shuffle:postMode==="on",dressPinned,seriesNext,scheduleMode:dialsMode,idleHours:dialsIdle,maxHours:dialsMax}});
      rememberToken=token; rememberPaint(); rememberSave(true);
    } catch { rememberToken=null; rememberPaint(); rememberStatus("local storage is unavailable on this device."); }
  });
  window.addEventListener("storage",event=>{
    if (event.key!==rememberKey && event.key!==null) return;
    const value=rememberRead();
    rememberToken=value?.token ?? null; rememberPaint();
    // Opting out in another tab clears favorites and stops storage immediately.
    // Current-session post mode and other non-favorite preferences may still be used.
    if (value) rememberApplyPreferences(value);
  });
  audio.addEventListener("loadedmetadata",rememberApplySeek);
  audio.addEventListener("timeupdate",()=>{ if (playing && !audio.ended) {dialsLastActivity=Date.now(); rememberSave();} });
  audio.addEventListener("seeked",()=>{if (playing && !audio.ended) rememberSave(true);});
  // Paused tabs must not overwrite newer listening in another window.
  document.addEventListener("visibilitychange",()=>{if (document.hidden && playing && !audio.ended) rememberSave(true);});
  window.addEventListener("pagehide",()=>{if (playing && !audio.ended) rememberSave(true);});
}

dressInitUI();
dialsInit();
rememberInit();
load();
