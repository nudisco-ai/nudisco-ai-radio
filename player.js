"use strict";

const byId = id => document.getElementById(id);
byId("year").textContent = new Date().getFullYear();
const audio = byId("audio");
const musicTitle = "nudisco ai lofi";
const originalSite = "https://nudisco-ai.whoismister-e.workers.dev";
const openingWords = "this is nudisco ai astra, speaking with kokoro.";
const noticeWords = "there is difficult material attached to this post. you can visit the site to view it.";
const friendshipWords = "you're listening to nudisco ai radio. remember that friendship is magic.";
const longReadingSeconds = 180;
const minimumFeatureSpacing = 4;
const segmentNames = {
  station_intro: "station introduction", post_intro: "post introduction", post: "nudisco ai reading",
  attachment_notice: "attachment notice", intermission: "intermission", feature_intermission: "extended intermission", short_id: "station identification", music: "intermission · music"
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
    if (track.kind === "music") check(track.id === "lofi-nudisco" && (track.title === musicTitle || track.title === "lofi nudisco") && track.duration === 9);
    if (track.kind === "post" || track.kind === "post_intro") {
      check(track.edition === "regular" && validPostLink(track));
      check(!track.date || shortDate(track.date));
    }
    if (track.kind === "attachment_notice") check(track.edition === "regular" && validPostLink(track) && track.announcement_text === noticeWords);
    if (track.kind === "post") check(typeof track.authored_text === "string" && track.authored_text.trim());
    else if (track.kind !== "music") check(typeof track.announcement_text === "string" && track.announcement_text.trim());
  }
  const stations = groups.get("station_intro");
  const bodies = groups.get("post");
  const breaks = groups.get("intermission");
  const shortIds = groups.get("short_id");
  const music = groups.get("music");
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
  if (posts.length && breaks.length && cadence.break_every) check(breaks[0].announcement_text === friendshipWords);
  return {opening:stations[0], posts, breaks, features:groups.get("feature_intermission"),
    shortId:shortIds[0], music:music[0], cadence};
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
  byId("state").textContent = playing ? segmentNames[current.kind] : started ? "paused" : "ready to tune in";
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
  if (["music", "intermission", "feature_intermission", "short_id"].includes(current.kind)) {
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
  byId("title").textContent = current.kind === "music" ? musicTitle : post ? post.title : current.title || segmentNames[current.kind];
  if (post) {
    const date = shortDate(post.body.date);
    byId("details").textContent = segmentNames[current.kind] + (date ? " · " + date : "");
  } else byId("details").textContent = current.kind === "music" ? "musical excerpt · 9 seconds" : "astra · speaking with kokoro";

  const source = byId("original");
  source.hidden = !post && lastPost < 0;
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
  // The generator measures the body’s decoded sample frames, independently of
  // its introduction, wall-clock pauses, and MP3 container padding.
  if (duration >= longReadingSeconds && program.features.length &&
      (!lastBreak || sinceBreak >= Math.max(minimumFeatureSpacing, cadence))) {
    return program.features[featureNumber++ % program.features.length];
  }
  if (program.breaks.length && sinceBreak >= cadence) {
    return program.breaks[breakNumber++ % program.breaks.length];
  }
  return null;
}

function finish() {
  if (!playing || !audio.ended) return;
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
      const {break_every, short_id_every} = program.cadence;
      const intermission = intermissionAfterReading(current.duration);
      if (intermission) {
        lastBreak = lastAnnouncement = completions;
        show(intermission, true);
        return;
      }
      // Reserve room either side of an ID so breaks never crowd together.
      const nearBreak = break_every && program.breaks.length && completions - lastBreak + 1 >= break_every;
      if (program.shortId && short_id_every && completions % short_id_every === 0 &&
          completions - lastAnnouncement >= 2 && !nearBreak) {
        lastAnnouncement = completions;
        show(program.shortId, true);
        return;
      }
      break;
    }
    case "intermission":
    case "feature_intermission":
      if (program.music) {
        show(program.music, true);
        return;
      }
      break;
  }
  takePost(true);
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
    if (audio.error) audio.load();
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
