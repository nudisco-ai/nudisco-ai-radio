/* Mobile presentation only. The existing player.js owns the radio schedule. */
(() => {
  'use strict';
  const $ = id => document.getElementById(id);
  const favorites = rememberFavorites;
  let items = [], lookup = new Map(), initialized = false, filter = 'all', view = 'radio';
  let sleepDeadline = 0, timer = 0, metaKey = '';
  const opened = new Set();
  let librarySignature = '';
  const groupOrder = ['posts','the chronicles of harmony · wisdom','the chronicles of harmony · history','through the mirror','starlight insights','great and powerful words of wisdom','quantum harmony','Astra’s observatory','corvid circle','arcana','Equestria','cosmic asides','Astra’s asides','transitions','station features','art of the dress','anywhere, anywhen','science in a pocket dimension','other transmissions'];
  const familyNames = {'chronicles-wisdom':groupOrder[1],'chronicles-history':groupOrder[2],glimmer:'starlight insights',magnificence:'great and powerful words of wisdom',harmony:'quantum harmony',observatory:'Astra’s observatory',corvid:'corvid circle',arcana:'arcana',equestria:'Equestria',features:'station features',station:'station features','pocket-science':'science in a pocket dimension'};
  function collectionFor(track) {
    const title = (track.title || '').toLowerCase();
    if (isDress(track)) return 'art of the dress';
    if (typeof isJourney==='function' && isJourney(track)) return 'anywhere, anywhen';
    if (isStory(track) || /^(?:through|across) the mirror[ ·]/.test(title)) return 'through the mirror';
    if (isAside(track)) return title.includes('cosmic aside') ? 'cosmic asides' : 'Astra’s asides';
    if (isSegue(track)) return 'transitions';
    return familyNames[hostGroup(track)] || 'other transmissions';
  }
  const validDuration = () => audio.readyState >= 1 && Number.isFinite(audio.duration) && audio.duration > 0;
  const currentItem = () => {
    if (!current || !program || isSendoff(current) || isSendoffIntro(current)) return null;
    if (['post_intro','post','attachment_notice'].includes(current.kind)) return lookup.get(program.posts[currentPost]?.body.id) || null;
    return lookup.get(current.id) || null;
  };
  function setView(name) {
    if (name==='dress'&&!dressAvailable()) name='radio';
    view = name;
    for (const b of document.querySelectorAll('[data-view]')) {
      const active = b.dataset.view === name;
      $('view-' + b.dataset.view).hidden = !active;
      if (active) b.setAttribute('aria-current','page'); else b.removeAttribute('aria-current');
    }
    if (name === 'library' || name === 'favorites') renderLists();
    if (name === 'dress') dressRender();
    if (name === 'dials') dialsPaint();
    window.scrollTo(0,0);
  }
  function toggleFavorite(id) {
    if (!lookup.has(id) || !rememberConsentRecord()) return;
    const next = new Set(favorites);
    if (next.has(id)) next.delete(id); else next.add(id);
    if (!rememberSavePreferences({favorites:[...next]})) return;
    favorites.clear(); for (const favorite of next) favorites.add(favorite);
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
  function paintHeart(heart,item) {
    const enabled=!!rememberToken;
    const active=Boolean(enabled && item && favorites.has(item.id));
    heart.disabled=!enabled || !item;
    heart.textContent=active?'♥':'♡';
    heart.setAttribute('aria-pressed',String(active));
    const label=!enabled?'favorites unavailable: remember me is off':!item?'no recording to save':(active?'remove favorite: ':'save favorite: ')+item.title;
    heart.setAttribute('aria-label',label); heart.title=label;
  }
  function row(item) {
    const li = document.createElement('li');
    const b = document.createElement('button'); b.type = 'button'; b.className = 'entry'; b.textContent = item.title;
    const small = document.createElement('small'); small.textContent = item.subtitle; b.append(small);
    b.addEventListener('click', () => select(item));
    const heart = document.createElement('button'); heart.type = 'button'; heart.className = 'round favorite';
    paintHeart(heart,item);
    heart.addEventListener('click', () => toggleFavorite(item.id)); li.append(b, heart); return li;
  }
  function renderLists() {
    if (!initialized) return;
    const query = $('search-library').value.toLocaleLowerCase().trim();
    const found = items.filter(i => (filter === 'all' || i.type === filter) && (!query || (i.title + ' ' + i.subtitle + ' ' + i.collection).toLocaleLowerCase().includes(query)));
    $('library-count').textContent = found.length + (found.length === 1 ? ' recording' : ' recordings');
    // Build only visible/open collections; closed groups do not allocate hundreds of rows.
    const signature = JSON.stringify([filter,query,!!rememberToken,[...favorites]]);
    if (librarySignature !== signature) {
      librarySignature = signature;
      const grouped = new Map();
      for (const item of found) { if (!grouped.has(item.collection)) grouped.set(item.collection,[]); grouped.get(item.collection).push(item); }
      const fragment = document.createDocumentFragment();
      for (const name of groupOrder) {
        const group = grouped.get(name); if (!group?.length) continue;
        const section = document.createElement('details'); section.className = 'library-collection';
        const summary = document.createElement('summary'); summary.textContent = name;
        const count = document.createElement('span'); count.className = 'collection-count'; count.textContent = String(group.length); summary.append(count);
        const list = document.createElement('ul'); list.className = 'library-list';
        section.append(summary,list); section.open = Boolean(query) || opened.has(name);
        let populated = false;
        const fill = () => { if (!populated) { list.append(...group.map(row)); populated = true; } };
        if (section.open) fill();
        section.addEventListener('toggle', () => { if (section.open) fill(); if (!query) { if (section.open) opened.add(name); else opened.delete(name); } });
        fragment.append(section);
      }
      $('library-list').replaceChildren(fragment);
    }
    const collection = rememberToken ? items.filter(i => favorites.has(i.id)) : [];
    // Clear a previously rendered favorites list even when its tab is not active.
    if (view === 'favorites' || !rememberToken) $('favorites-list').replaceChildren(...collection.map(row));
    $('favorites-empty').hidden = !rememberToken || Boolean(collection.length);
  }
  function initLibrary() {
    if (initialized || !program) return;
    const postItems = program.posts.map((p, index) => ({id:p.body.id, title:p.title, subtitle:'post · ' + (shortDate(p.body.date) || 'undated') + ' · ' + clock(p.intro.duration + p.body.duration),type:'post',collection:'posts',index}));
    const features = [...program.breaks, ...program.features].filter(t => !isSendoff(t) && !isSendoffIntro(t) && ['intermission','feature_intermission'].includes(t.kind)).map(track => ({id:track.id,title:typeof track.title === 'string' && track.title ? stationDisplayTitle(track) : 'astra',subtitle:'astra · '+clock(track.duration),type:'astra',collection:collectionFor(track),track}));
    items = [...postItems,...features]; lookup = new Map(items.map(i => [i.id,i])); initialized = true;
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
    paintHeart(btn,item);
    $('library-memory-note').hidden=!!rememberToken;
    $('favorites-memory-note').textContent=rememberToken?'saved on this device. removing a heart removes that favorite.':'favorites are available when remember me is on. you can find it on the radio home screen.';
    document.body.classList.toggle('memory-off',!rememberToken);
    const seek=$('seek'); const available=validDuration(); seek.disabled=!available; $('back15').disabled=!available;
    if (available) {seek.max=String(audio.duration); if (!seek.matches(':active')) seek.value=String(audio.currentTime);}
    else {seek.max='1'; seek.value='0';}
    sleepCheck(); mediaUpdate();
  }
  document.querySelectorAll('[data-view]').forEach(b=>b.addEventListener('click',()=>setView(b.dataset.view)));
  $('dress-open').addEventListener('click',()=>setView('dress'));
  document.addEventListener('radio-dress-availability',()=>{if(view==='dress'&&!dressAvailable())setView('radio');});
  document.querySelectorAll('[data-filter]').forEach(b=>b.addEventListener('click',()=>{filter=b.dataset.filter;document.querySelectorAll('[data-filter]').forEach(x=>x.setAttribute('aria-pressed',String(x===b)));renderLists();}));
  $('search-library').addEventListener('input',renderLists);
  $('favorite-now').addEventListener('click',()=>{const i=currentItem();if(i)toggleFavorite(i.id);});
  $('back15').addEventListener('click',()=>{if(validDuration())audio.currentTime=Math.max(0,audio.currentTime-15);});
  $('seek').addEventListener('input',()=>{if(validDuration())audio.currentTime=Math.min(audio.duration,Number($('seek').value));});
  document.addEventListener('radio-preferences-change',()=>{update();renderLists();});
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
