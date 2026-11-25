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
function soundChoices(track) {
  if (typeof isStory === "function" && isStory(track)) return ["quiet-transition"];
  const assigned = Object.hasOwn(editorialSoundCues, track.id) ? editorialSoundCues[track.id] : null;
  if (assigned) {
    // Reserve the longest stillness cue for a substantial completed passage.
    return track.duration >= 90 ? assigned : assigned.filter(name => name !== "cosmic-stillness");
  }
  const text = track.announcement_text || "";
  // Also recognize a manually imported prayer by its actual spoken framing.
  if (/^(?:a line from|from) the prayer of the corvid circle\b/i.test(text.trim()) && /\bamen[.!]?\s*$/i.test(text))
    return ["grounding", "quiet-transition"];
  // Known research families provide a conservative fallback for catalog revisions.
  const group = Object.hasOwn(passageGroups, track.id) ? passageGroups[track.id] : null;
  if (group === "harmony") return ["quiet-harmony", "quiet-transition"];
  if (group === "observatory") return track.duration >= 90 ? ["cosmic-stillness", "cosmic-drift"] : ["cosmic-drift"];
  if (group === "arcana" || group === "equestria") return ["quiet-transition"];
  return []; // unknown or separately authored material keeps the station theme
}
function soundAfterSpeech(track, station) {
  if (track.excerpt_id) return station.excerpts.get(track.excerpt_id);
  const theme = station.music;
  if (!theme || !["intermission", "feature_intermission"].includes(track.kind) || isAside(track) || isSegue(track)) return theme;
  const available = [...(station.sounds || []), ...(station.solfeggioSounds || [])];
  if (!available.length) return theme; // retain speech-only and older playlist behavior
  soundBoundary++;
  // At least one theme boundary between added sounds, and at least three
  // intervening eligible boundaries before the same sound can recur.
  if (previousBoundaryHadCue) { previousBoundaryHadCue = false; return theme; }
  for (const name of soundChoices(track)) {
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
const customBreakId = /^custom-[a-f0-9]{32}$/;
const customExcerptId = /^custom-[a-f0-9]{32}(?:-audio)?$/;
const segmentNames = {
  station_intro: "station introduction", post_intro: "post introduction", post: "nudisco ai reading",
  attachment_notice: "attachment notice", intermission: "intermission", feature_intermission: "extended intermission",
  audio_excerpt: "intermission · audio excerpt", short_id: "station identification", music: "intermission · music", station_sound: "intermission · sound"
};
let program;
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
let shuffled = false;
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
function startFramedBreak(track, segue) {
  const eligible = ["intermission", "feature_intermission"].includes(track.kind) && !isAside(track) && !isSegue(track);
  let outro = eligible ? soundAfterSpeech(track, program) : null;
  let intro = outro?.kind === "station_sound" ? program.introSounds?.get(outro.id + "-intro") : null;
  // Little Constellation alone uses the full chime to open and the short chime to close.
  // Keep the original closing cue if an older playlist has no short version.
  if (outro?.id === "station-sound-little-constellation" && intro) [intro, outro] = [outro, intro];
  const target = segue || track;
  cueFrame = eligible ? {intro, target, passage: track, outro} : null;
  if (intro) { show(intro, true); return; }
  if (segue) pendingPassage = track;
  show(target, true);
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
const sessionTargets = [
  [0, .45, .45, .10], [600, .45, .45, .10],
  [1200, .30, .55, .15], [1800, .20, .65, .15],
  [2400, .10, .70, .20]
];
let sessionSeconds = 0, accountedSeconds = 0, postDebt = 0;
let hostQueue = [], hostPool = [], lastHostId = null;
let sessionMix = false, postStreak = 0, hostStreak = 0, hostBlocks = 0;
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
// Target fraction of Astra's spoken airtime, not total station airtime.
// At ten minutes the story becomes eligible; later targets ramp continuously.
const storyTargets = [[600,.15],[1200,.30],[2400,.50],[3600,.70]];
function storyTarget(seconds) {
  if (seconds < 600) return 0;
  for (let i=1;i<storyTargets.length;i++) {
    const [a,x]=storyTargets[i-1], [b,y]=storyTargets[i];
    if (seconds <= b) return x+(y-x)*(seconds-a)/(b-a);
  }
  return storyTargets[storyTargets.length-1][1];
}
function accountStory(delta, start, track) {
  if (!storyPool.length || !track || postKinds.has(track.kind) || soundKinds.has(track.kind) || track.kind === "station_intro") return;
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
  if (sessionSeconds < 600 || !storyPool.length || storyCursor >= storyPool.length) return null;
  const track=storyPool[storyCursor];
  // Give the first story a natural entrance after ten minutes. Thereafter keep
  // whole episodes and use airtime debt rather than random short-track counts.
  return !storiesStarted || storyDebt >= .12*track.duration ? track : null;
}
const postKinds = new Set(["post_intro", "post", "attachment_notice"]);
const soundKinds = new Set(["music", "station_sound", "audio_excerpt"]);
function sessionTarget(seconds) {
  for (let i = 1; i < sessionTargets.length; i++) {
    const a = sessionTargets[i-1], b = sessionTargets[i];
    if (seconds <= b[0]) {
      const f = Math.max(0, (seconds-a[0])/(b[0]-a[0]));
      return a.slice(1).map((v,j) => v + f*(b[j+1]-v));
    }
  }
  return sessionTargets[sessionTargets.length-1].slice(1);
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
  const [posts, host] = sessionTarget(sessionSeconds+delta/2);
  accountStory(delta,sessionSeconds,current);
  sessionSeconds += delta;
  if (!soundKinds.has(current.kind)) {
    // A bounded running error prevents a single long track from monopolizing later choices.
    const desired = posts/(posts+host);
    postDebt = Math.max(-120, Math.min(120, postDebt + delta*((postKinds.has(current.kind) ? 1 : 0)-desired)));
  }
}
function setupSessionMix() {
  storyPool = storyOrder.map(id=>program.stories.find(t=>t.id===id)).filter(Boolean);
  hostPool = [...program.ordinaryBreaks, ...program.features];
  sessionMix = Boolean(program.cadence.break_every && program.posts.length &&
    (hostPool.filter(t => !soundKinds.has(t.kind)).length >= 4 || (storyPool.length && hostPool.some(t=>!soundKinds.has(t.kind)))));
}
function takeHostBlock() {
  const story = chooseStory();
  if (story) return story;
  if (!hostQueue.length) {
    hostQueue = hostPool.slice();
    for (let i=hostQueue.length-1; i>0; i--) {
      const j=Math.floor(Math.random()*(i+1));
      [hostQueue[i],hostQueue[j]]=[hostQueue[j],hostQueue[i]];
    }
  }
  // One bag across all host material: no early repeats, with a soft late-session
  // preference for substantive passages instead of brief announcements.
  let candidates = hostQueue.filter(t => t.id !== lastHostId &&
    !(soundKinds.has(current?.kind) && soundKinds.has(t.kind)));
  if (!candidates.length) candidates = hostQueue.filter(t => !(soundKinds.has(current?.kind) && soundKinds.has(t.kind)));
  if (!candidates.length) return null;
  const depth = Math.min(1, Math.max(0, (sessionSeconds-600)/1800));
  if (!hostBlocks || Math.random() < .25 + .60*depth) {
    const substantial = candidates.filter(t => !soundKinds.has(t.kind) &&
      (Object.hasOwn(passageGroups,t.id) || t.duration >= 30));
    if (substantial.length) {
      substantial.sort((a,b)=>b.duration-a.duration);
      candidates = substantial.slice(0, Math.max(1, Math.ceil(substantial.length*(1-.6*depth))));
    }
  }
  const track = candidates[0];
  hostQueue.splice(hostQueue.indexOf(track),1);
  lastHostId = track.id;
  return track;
}
function continueSession(afterPost = false) {
  const early = sessionSeconds < 1200;
  const maxPosts = early ? 3 : 2;
  const maxHost = early ? 3 : 5;
  // Start with a post after the opening, then give Astra a proper segment immediately.
  // Fairness caps also keep a very long reading from creating a run of short posts.
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
  // Keep the existing optional ID/aside rules on the way to another post.
  // Later on, use the longer host library rather than extra micro-announcements.
  if (afterPost && early) {
    const {short_id_every} = program.cadence;
    if (program.shortId && short_id_every && completions % short_id_every === 0 &&
        completions - lastAnnouncement >= 2) {
      lastAnnouncement = completions;
      show(program.shortId, true);
      return;
    }
    const aside = asideAfterReading();
    if (aside) { show(aside, true); return; }
  }
  takePost(true);
}

function setupSegues() {
  for (const group of new Set(Object.values(segueGroups))) {
    const tracks = program.segues.filter(t => segueGroups[t.id] === group);
    if (tracks.length) segueBags.set(group, makeBag(tracks));
  }
}

function playIntermission(track) {
  if (isStory(track)) {
    // Explicit library selection can jump to an episode. Automatic play never
    // shuffles the story or loops it after the final episode in this session.
    const i = storyPool.findIndex(t=>t.id===track.id);
    if (i >= 0) { storyCursor = i+1; storiesStarted++; }
    lastHostId=track.id;
  }
  if (sessionMix) { hostBlocks++; hostStreak++; postStreak = 0; }
  // Only known research passages need a spoken introduction. Station IDs,
  // prayers (which introduce themselves), and asides are left alone.
  const group = Object.hasOwn(passageGroups, track.id) ? passageGroups[track.id] : null;
  const segue = group ? segueBags.get(group)?.() : null;
  startFramedBreak(track, segue);
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

// A shuffle bag plays each member once before repeating it. Separate bags
// preserve the original short IDs/features while giving a large custom library
// more airtime. No post order, transcript, recording or music is changed.
function makeBag(items) {
  let queue = [], previous = null;
  return () => {
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
      const expected = [...stationSoundPalette, ...introSoundPalette].find(s => s.id === track.id);
      check(expected && track.title === expected.title && track.duration === expected.duration &&
        track.audio_sha256 === expected.sha && track.audio_url === "audio/" + expected.sha + ".mp3" &&
        track.source_url == null && track.date == null && !Object.hasOwn(track, "excerpt_id"));
    }
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
    else if (track.kind !== "music" && track.kind !== "audio_excerpt" && track.kind !== "station_sound") check(typeof track.announcement_text === "string" && track.announcement_text.trim());
  }
  for (const id of requestedExcerpts) check(excerpts.has(id));
  for (const id of excerpts.keys()) check(!id.endsWith("-audio") || requestedExcerpts.has(id));
  const stations = groups.get("station_intro");
  const bodies = groups.get("post");
  const asides = tracks.filter(isAside);
  const segues = tracks.filter(isSegue);
  const breaks = tracks.filter(t => (t.kind === "intermission" && !isAside(t) && !isSegue(t)) || (t.kind === "audio_excerpt" && !requestedExcerpts.has(t.id)));
  const stories = breaks.filter(isStory);
  const ordinaryBreaks = breaks.filter(t=>!isStory(t));
  const shortIds = groups.get("short_id");
  const music = groups.get("music");
  const sounds = stationSoundPalette.map(s => groups.get("station_sound").find(t => t.id === s.id)).filter(Boolean);
  const introSounds = new Map(groups.get("station_sound").filter(t => introSoundPalette.some(s => s.id === t.id)).map(t => [t.id, t]));
  check(!introSounds.size || (introSounds.size === introSoundPalette.length && sounds.length === stationSoundPalette.length && music.length === 1));
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
    shortId:shortIds[0], music:music[0], sounds:originalSounds, solfeggioSounds, introSounds, excerpts, cadence};
}

function arrange(after = -1, omitCurrent = false) {
  const count = program.posts.length;
  nextIndex = count ? (after + 1) % count : 0;
  shuffledOrder = [];
  shuffleCursor = 0;
  if (!shuffled || !count) return;

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
  if (sessionMix) { postStreak++; hostStreak = 0; }
  if (chosenFirst !== null) {
    currentPost = chosenFirst;
    chosenFirst = null;
  } else if (shuffled) {
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
  byId("shuffle-option").hidden = program.posts.length < 2;
  byId("program").hidden = false;
}

function message(text) {
  const error = byId("error");
  error.textContent = text;
  error.hidden = !text;
}

function paintControls() {
  document.body.dataset.playing = String(playing);
  byId("state").textContent = playing ? (isAside(current) ? "astra · aside" : isSegue(current) ? "astra · segue" : isStory(current) ? "astra · storytelling" : segmentNames[current.kind]) : started ? "paused" : "ready to tune in";
  byId("play-icon").classList.toggle("pause", playing);
  byId("tune-text").textContent = playing ? "pause" : started ? "resume" : "tune in";
  byId("next").disabled = !started || !program.posts.length;
  byId("announcement").textContent = byId("state").textContent + " · " + byId("title").textContent;
}

function tick() {
  if (!current) return;
  const duration = Number.isFinite(audio.duration) && audio.readyState >= 1 ? audio.duration : current.duration;
  byId("elapsed").textContent = clock(audio.currentTime || 0);
  byId("length").textContent = clock(duration);
  byId("progress").style.width = (100 * Math.min(1, (audio.currentTime || 0) / duration)) + "%";
}

function failed() {
  if (continueCueIntro(playing)) return;
  if (isSegue(current) && pendingPassage) {
    const passage = pendingPassage;
    show(passage, playing);
    return;
  }
  if (["music", "station_sound", "audio_excerpt", "intermission", "feature_intermission", "short_id"].includes(current.kind)) {
    const autoplay = playing;
    takePost(autoplay);
    message("the break was unavailable. continuing with the next post.");
  } else {
    playing = false;
    message("this recording could not play. try again or choose next post.");
    paintControls();
  }
}

function play() {
  const ticket = ++attempt;
  message("");
  // The first play call runs synchronously inside the listener’s gesture.
  const pending = audio.play();
  started = playing = true;
  paintControls();
  if (pending) pending.catch(err => {
    if (ticket !== attempt) return;
    if (err.name === "NotAllowedError") {
      playing = false;
      paintControls();
      message("tap resume to continue listening.");
    } else failed();
  });
}

function readout(post) {
  const cueTitle = current.id === "station-sound-little-constellation-intro" ? "little constellation outro" : current.id === "station-sound-little-constellation" && cueFrame?.intro === current ? "little constellation intro" : current.title;
  byId("title").textContent = current.kind === "music" ? musicTitle : post ? post.title : (isAside(current) || isSegue(current)) ? "astra" : cueTitle || segmentNames[current.kind];
  if (post) {
    const date = shortDate(post.body.date);
    byId("details").textContent = segmentNames[current.kind] + (date ? " · " + date : "");
  } else {
    let details = isStory(current) ? "astra · through the mirror" : "astra · speaking with kokoro";
    if (current.kind === "music") details = "musical excerpt · 9 seconds";
    if (current.kind === "station_sound") details = "quiet sound · " + current.duration + " seconds";
    if (current.kind === "audio_excerpt") details = "audio excerpt · 9 seconds";
    byId("details").textContent = current.credit ? details + " · " + current.credit : details;
  }

  const source = byId("original");
  source.hidden = isStory(current) || (!post && lastPost < 0);
  if (source.hidden) source.removeAttribute("href");
  else {
    const linked = post ?? program.posts[lastPost];
    source.href = linked.body.source_url;
    byId("link-label").textContent = post ? "read this nudisco ai post" : "previous post · " + linked.title;
  }
  const isNotice = current.kind === "attachment_notice";
  byId("host-text").textContent = post && !isNotice ? post.intro.announcement_text : current.announcement_text || "";
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
}

function show(track, autoplay) {
  accountPlayback();
  accountedSeconds = 0;
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
  if (autoplay) play();
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

function finish() {
  if (!playing || !audio.ended) return;
  if (continueCueIntro(true)) return;
  accountPlayback();
  switch (current.kind) {
    case "station_intro":
      if (program.posts.length) takePost(true);
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
      if (sessionMix) { continueSession(true); return; }
      const {break_every, short_id_every} = program.cadence;
      const intermission = intermissionAfterReading(current.duration);
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
      break;
    }
    case "attachment_notice":
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
    setupMixedRotation();
    setupSessionMix();
    setupAsides();
    setupSegues();
    arrange();
    buildProgram();
    show(program.opening, false);
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
    if (audio.error) { accountPlayback(); accountedSeconds = 0; audio.load(); }
    play();
  } else {
    ++attempt;
    audio.pause();
    playing = false;
    paintControls();
  }
});
byId("next").addEventListener("click", () => { if (started && program.posts.length) takePost(playing); });
byId("shuffle").addEventListener("change", () => {
  shuffled = byId("shuffle").checked;
  arrange(chosenFirst ?? currentPost, true);
});
byId("volume").addEventListener("input", setVolume);
audio.addEventListener("ended", finish);
audio.addEventListener("pause", () => {
  if (playing && audio.paused && !audio.ended) {
    ++attempt;
    playing = false;
    paintControls();
  }
});
audio.addEventListener("error", () => { if (current && audio.error) failed(); });
audio.addEventListener("timeupdate", tick);
audio.addEventListener("loadedmetadata", tick);
load();
