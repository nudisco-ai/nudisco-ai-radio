/* Mobile presentation only. The existing player.js owns the radio schedule. */
(() => {
  'use strict';
  const $ = id => document.getElementById(id);
  const prefKey = 'nudisco.radio.app.v1.favorites';
  const shuffleKey = 'nudisco.radio.app.v1.shuffle';
  const read = (key, fallback) => { try { return JSON.parse(localStorage.getItem(key)) ?? fallback; } catch { return fallback; } };
  const write = (key, value) => { try { localStorage.setItem(key, JSON.stringify(value)); } catch {} };
  const saved = read(prefKey, []);
  const favorites = new Set(Array.isArray(saved) ? saved.filter(x => typeof x === 'string') : []);
  let items = [], lookup = new Map(), initialized = false, filter = 'all', view = 'radio';
  let sleepDeadline = 0, timer = 0, metaKey = '';
  const validDuration = () => audio.readyState >= 1 && Number.isFinite(audio.duration) && audio.duration > 0;
  const currentItem = () => {
    if (!current || !program) return null;
    if (['post_intro','post','attachment_notice'].includes(current.kind)) return lookup.get(program.posts[currentPost]?.body.id) || null;
    return lookup.get(current.id) || null;
  };
  function setView(name) {
    view = name;
    for (const b of document.querySelectorAll('[data-view]')) {
      const active = b.dataset.view === name;
      $('view-' + b.dataset.view).hidden = !active;
      if (active) b.setAttribute('aria-current','page'); else b.removeAttribute('aria-current');
    }
    if (name === 'library' || name === 'favorites') renderLists();
    window.scrollTo(0,0);
  }
  function toggleFavorite(id) {
    if (!lookup.has(id)) return;
    if (favorites.has(id)) favorites.delete(id); else favorites.add(id);
    write(prefKey, [...favorites]);
    update();
    if (view !== 'radio') renderLists();
  }
  function select(item) {
    setView('radio');
    if (item.type === 'post') {
      selectPost(item.index);
      if (!playing) play();
    } else {
      // Deliberate feature selection. The ordinary schedule resumes afterwards.
      playIntermission(item.track);
    }
  }
  function row(item) {
    const li = document.createElement('li');
    const b = document.createElement('button'); b.type = 'button'; b.className = 'entry'; b.textContent = item.title;
    const small = document.createElement('small'); small.textContent = item.subtitle; b.append(small);
    b.addEventListener('click', () => select(item));
    const heart = document.createElement('button'); heart.type = 'button'; heart.className = 'round favorite';
    const active = favorites.has(item.id); heart.textContent = active ? '♥' : '♡'; heart.setAttribute('aria-pressed', String(active));
    heart.setAttribute('aria-label', (active ? 'remove favorite: ' : 'save favorite: ') + item.title);
    heart.addEventListener('click', () => toggleFavorite(item.id)); li.append(b, heart); return li;
  }
  function renderLists() {
    if (!initialized) return;
    const query = $('search-library').value.toLocaleLowerCase().trim();
    const found = items.filter(i => (filter === 'all' || i.type === filter) && (!query || (i.title + ' ' + i.subtitle).toLocaleLowerCase().includes(query)));
    $('library-count').textContent = found.length + (found.length === 1 ? ' recording' : ' recordings');
    $('library-list').replaceChildren(...found.map(row));
    const collection = items.filter(i => favorites.has(i.id));
    $('favorites-list').replaceChildren(...collection.map(row)); $('favorites-empty').hidden = Boolean(collection.length);
  }
  function initLibrary() {
    if (initialized || !program) return;
    const postItems = program.posts.map((p, index) => ({id:p.body.id, title:p.title, subtitle:'post · ' + (shortDate(p.body.date) || 'undated') + ' · ' + clock(p.intro.duration + p.body.duration),type:'post',index}));
    const features = [...program.breaks, ...program.features].filter(t => ['intermission','feature_intermission'].includes(t.kind)).map(track => ({id:track.id,title:track.title || 'astra',subtitle:'astra · '+clock(track.duration),type:'astra',track}));
    items = [...postItems,...features]; lookup = new Map(items.map(i => [i.id,i])); initialized = true;
    if (read(shuffleKey,false) === true) { $('shuffle').checked = true; $('shuffle').dispatchEvent(new Event('change')); }
    $('shuffle-toggle').setAttribute('aria-pressed', String($('shuffle').checked));
    renderLists();
  }
  function sleepCheck() {
    if (!sleepDeadline) return;
    const remaining = sleepDeadline - Date.now();
    if (remaining <= 0) {
      sleepDeadline = 0; clearTimeout(timer); timer=0; $('sleep-summary').textContent='sleep timer';
      if (playing) $('tune').click();
      return;
    }
    $('sleep-summary').textContent = Math.ceil(remaining / 60000) + ' min left';
  }
  function setSleep(min) {
    clearTimeout(timer); timer=0;
    sleepDeadline = min ? Date.now()+min*60000 : 0;
    $('sleep-summary').textContent = min ? min+' min left' : 'sleep timer';
    if (min) timer = setTimeout(sleepCheck, min*60000);
  }
  function mediaUpdate() {
    if (!('mediaSession' in navigator) || !current) return;
    const key = current.id + '|' + $('title').textContent;
    try {
      if (key !== metaKey && 'MediaMetadata' in window) {
        navigator.mediaSession.metadata = new MediaMetadata({title:$('title').textContent, artist:'nudisco ai astra',album:'nudisco ai radio',artwork:[{src:new URL('app-icon-512.png',location.href).href,sizes:'512x512',type:'image/png'}]}); metaKey=key;
      }
      navigator.mediaSession.playbackState=playing?'playing':'paused';
      if(validDuration() && navigator.mediaSession.setPositionState) navigator.mediaSession.setPositionState({duration:audio.duration,playbackRate:audio.playbackRate,position:Math.min(audio.duration,Math.max(0,audio.currentTime))});
    } catch {}
  }
  function update() {
    initLibrary();
    const item=currentItem(); const btn=$('favorite-now');
    btn.disabled=!item; const active=Boolean(item && favorites.has(item.id)); btn.textContent=active?'♥':'♡'; btn.setAttribute('aria-pressed',String(active));
    const seek=$('seek'); const available=validDuration(); seek.disabled=!available; $('back15').disabled=!available;
    if (available) {seek.max=String(audio.duration); if (!seek.matches(':active')) seek.value=String(audio.currentTime);}
    else {seek.max='1'; seek.value='0';}
    sleepCheck(); mediaUpdate();
  }
  document.querySelectorAll('[data-view]').forEach(b=>b.addEventListener('click',()=>setView(b.dataset.view)));
  document.querySelectorAll('[data-filter]').forEach(b=>b.addEventListener('click',()=>{filter=b.dataset.filter;document.querySelectorAll('[data-filter]').forEach(x=>x.setAttribute('aria-pressed',String(x===b)));renderLists();}));
  $('search-library').addEventListener('input',renderLists);
  $('favorite-now').addEventListener('click',()=>{const i=currentItem();if(i)toggleFavorite(i.id);});
  $('back15').addEventListener('click',()=>{if(validDuration())audio.currentTime=Math.max(0,audio.currentTime-15);});
  $('seek').addEventListener('input',()=>{if(validDuration())audio.currentTime=Math.min(audio.duration,Number($('seek').value));});
  $('shuffle-toggle').addEventListener('click',()=>{if(!program)return;const c=$('shuffle');c.checked=!c.checked;c.dispatchEvent(new Event('change'));write(shuffleKey,c.checked);$('shuffle-toggle').setAttribute('aria-pressed',String(c.checked));});
  const openDialog=id=>{const d=$(id);if(d.showModal)d.showModal();else d.setAttribute('open','');};
  const closeDialog=id=>{const d=$(id);if(d.close)d.close();else d.removeAttribute('open');};
  $('sleep-open').addEventListener('click',()=>openDialog('sleep-dialog'));$('install-help').addEventListener('click',()=>openDialog('install-dialog'));
  document.querySelectorAll('[data-close]').forEach(b=>b.addEventListener('click',()=>closeDialog(b.dataset.close)));
  document.querySelectorAll('[data-min]').forEach(b=>b.addEventListener('click',()=>{setSleep(Number(b.dataset.min));closeDialog('sleep-dialog');}));
  for(const e of ['timeupdate','loadedmetadata','durationchange','play','pause','ended','emptied'])audio.addEventListener(e,update);
  const observer=new MutationObserver(update); observer.observe($('title'),{childList:true,subtree:true});observer.observe($('state'),{childList:true,subtree:true});observer.observe($('program'),{attributes:true,attributeFilter:['hidden']});
  document.addEventListener('visibilitychange',sleepCheck);
  if('mediaSession' in navigator){
    const handlers={play:()=>{if(current&&!playing)$('tune').click();},pause:()=>{if(playing)$('tune').click();},nexttrack:()=>{if(program&&started)$('next').click();},seekbackward:d=>{if(validDuration())audio.currentTime=Math.max(0,audio.currentTime-(d.seekOffset||15));},seekforward:d=>{if(validDuration())audio.currentTime=Math.min(audio.duration,audio.currentTime+(d.seekOffset||15));},seekto:d=>{if(validDuration()&&Number.isFinite(d.seekTime))audio.currentTime=Math.max(0,Math.min(audio.duration,d.seekTime));}};
    for(const [action,fn] of Object.entries(handlers))try{navigator.mediaSession.setActionHandler(action,fn);}catch{}
  }
  if('serviceWorker' in navigator && ['http:','https:'].includes(location.protocol))navigator.serviceWorker.register('app-sw.js',{scope:'./app.html'}).catch(()=>{});
  update();
})();
