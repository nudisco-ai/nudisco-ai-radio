"use strict";

const byId = id => document.getElementById(id);
const audio = byId("audio");
const originalSite = "https://nudisco-ai.whoismister-e.workers.dev";
const openingWords = "this is nudisco ai astra, speaking with kokoro.";
const noticeWords = "there is difficult material attached to this post. you can visit the site to view it.";
const friendshipWords = "you're listening to nudisco ai radio. remember that friendship is magic.";
const segmentNames = {
  station_intro: "station introduction", post_intro: "post introduction", post: "normaldisco reading",
  attachment_notice: "attachment notice", intermission: "intermission", short_id: "station identification", music: "intermission · music"
};
let program;
let current;
let currentPost = -1;
let lastPost = -1;
let order = [];
let shuffled = false;
let started = false;
let playing = false;
let attempt = 0;
let completions = 0;
let lastBreak = 0;
let lastAnnouncement = 0;
let breakNumber = 0;

function clock(seconds) {
  const total = Math.max(0, Math.floor(seconds));
  return Math.floor(total / 60) + ":" + String(total % 60).padStart(2, "0");
}

function shortDate(value) {
  // Match the publication day shown in the source, including offset timestamps.
  if (typeof value !== "string" || !/^\d{4}-\d{2}-\d{2}(?:$|[T ])/.test(value)) return "";
  const date = new Date(value.slice(0, 10) + "T00:00:00Z");
  if (!Number.isFinite(date.getTime())) return "";
  return new Intl.DateTimeFormat("en", {
    month: "short", day: "numeric", year: "numeric", timeZone: "UTC"
  }).format(date).toLowerCase();
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
  check(manifest?.schema_version === 2 && Array.isArray(manifest.tracks) && manifest.tracks.length <= 36);
  if (!manifest.tracks.length) return null;
  const tracks = manifest.tracks;
  const seen = new Set();
  for (const track of tracks) {
    check(track && Object.hasOwn(segmentNames, track.kind) && typeof track.id === "string" &&
      !seen.has(track.id) && Number.isFinite(track.duration) && track.duration > 0 &&
      typeof track.audio_url === "string" && /^audio\/[a-zA-Z0-9_-]+\.mp3$/.test(track.audio_url));
    seen.add(track.id);
    if (track.kind === "music") check(track.id === "lofi-nudisco" && track.title === "lofi nudisco" && track.duration === 9);
    if (track.kind === "post" || track.kind === "post_intro") {
      check(track.edition === "regular" && validPostLink(track));
      check(!track.date || shortDate(track.date));
    }
    if (track.kind === "attachment_notice") check(track.edition === "regular" && validPostLink(track) && track.announcement_text === noticeWords);
    if (track.kind === "post") check(typeof track.authored_text === "string" && track.authored_text.trim());
    else if (track.kind !== "music") check(typeof track.announcement_text === "string" && track.announcement_text.trim());
  }
  const segments = kind => tracks.filter(t => t.kind === kind);
  const stations = segments("station_intro");
  const bodies = segments("post");
  const intros = segments("post_intro");
  const notices = segments("attachment_notice");
  const breaks = segments("intermission");
  const shortIds = segments("short_id");
  const music = segments("music");
  check(stations.length === 1 && stations[0].announcement_text.startsWith(openingWords));
  check(bodies.length <= 10 && bodies.length === intros.length && shortIds.length <= 1 && music.length <= 1);
  const postIds = new Set(bodies.map(body => body.post_id));
  check(postIds.size === bodies.length && intros.every(intro => postIds.has(intro.post_id)) && notices.every(n => postIds.has(n.post_id)));
  const posts = bodies.map(body => {
    const pair = intros.filter(i => i.post_id === body.post_id);
    check(pair.length === 1 && body.source_url === pair[0].source_url);
    const attachments = body.attachments ?? [];
    check(Array.isArray(attachments) && attachments.every(a => a &&
      ["filename","caption","label","unknown"].includes(a.kind) && (a.value == null || typeof a.value === "string")));
    const notice = notices.filter(n => n.post_id === body.post_id);
    check(notice.length === (body.difficult_attachment ? 1 : 0));
    check(!notice.length || notice[0].source_url === body.source_url);
    return {body, intro: pair[0], notice: notice[0], title: body.title || "untitled post", attachments};
  });
  const cadence = manifest.program ?? {break_every: 4, short_id_every: 0};
  for (const key of ["break_every", "short_id_every"])
    check(Number.isInteger(cadence[key]) && cadence[key] >= 0);
  if (posts.length && breaks.length && cadence.break_every) check(breaks[0].announcement_text === friendshipWords);
  return {opening:stations[0], posts, breaks, shortId:shortIds[0], music:music[0], cadence};
}

function arrange(exclude = -1) {
  const count = program.posts.length;
  order = Array.from({length: count}, (_, i) => i);
  if (!count) return;
  if (!shuffled) {
    const first = (exclude + 1) % count;
    order = order.slice(first).concat(order.slice(0, first));
  } else {
    for (let i = count - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [order[i], order[j]] = [order[j], order[i]];
    }
    if (count > 1 && order[0] === exclude) [order[0], order[1]] = [order[1], order[0]];
  }
}

function takePost(autoplay) {
  if (!order.length) arrange(currentPost);
  currentPost = order.shift();
  lastPost = currentPost;
  show(program.posts[currentPost].intro, autoplay);
}

function selectPost(index) {
  arrange(index);
  order = order.filter(i => i !== index);
  if (!started || current.kind === "station_intro") {
    // Keep the once-per-tune-in opening and select the first reading after it.
    order.unshift(index);
    byId("details").textContent = "up next · " + program.posts[index].title;
    byId("announcement").textContent = byId("details").textContent;
    return;
  }
  currentPost = lastPost = index;
  show(program.posts[index].intro, playing);
}

function buildProgram() {
  if (!program.posts.length) return;
  const list = byId("tracks");
  program.posts.forEach((post, index) => {
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
  });
  byId("program-info").textContent = program.posts.length + (program.posts.length === 1 ? " post" : " posts");
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
  if (current.kind === "music" || current.kind === "intermission" || current.kind === "short_id") {
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
  byId("title").textContent = post ? post.title : current.title || segmentNames[current.kind];
  if (post) {
    const date = shortDate(post.body.date);
    byId("details").textContent = segmentNames[current.kind] + (date ? " · " + date : "");
  } else byId("details").textContent = current.kind === "music" ? "lofi nudisco · musical excerpt" : "astra · speaking with kokoro";

  const source = byId("original");
  source.hidden = !post && lastPost < 0;
  if (source.hidden) source.removeAttribute("href");
  else {
    const linked = post ?? program.posts[lastPost];
    source.href = linked.body.source_url;
    byId("link-label").textContent = post ? "read this normaldisco post" : "previous post · " + linked.title;
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
  byId("tracks").querySelectorAll("button").forEach((button, i) => {
    if (post && i === currentPost) button.setAttribute("aria-current", "true");
    else button.removeAttribute("aria-current");
  });
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
      if (program.breaks.length && break_every && completions - lastBreak >= break_every) {
        lastBreak = lastAnnouncement = completions;
        show(program.breaks[breakNumber++ % program.breaks.length], true);
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
      byId("title").textContent = "the pilot is being prepared.";
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
  arrange(currentPost);
  if (currentPost >= 0 && program.posts.length > 1) order = order.filter(i => i !== currentPost);
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
