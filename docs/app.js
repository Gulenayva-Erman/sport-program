/* Ortak mantık: hafta/faz hesabı, localStorage yardımcıları, dinlenme sayacı */
window.SP = (function(){
  var VERSION = "1.4"; // Her değişiklikte artır — sayfanın üstünde görünür
  var START = new Date(2026, 8, 14); // Hafta 1 = 14 Eylül 2026 haftası (program 17 Eylül Perşembe başladı)
  var DAYS = { 1:'A', 2:'Z', 3:'B', 4:'I', 5:'F' }; // F = Cuma dönüşümlü
  var META = {
    A: { title:'Gün A — Ağırlık', sub:'Squat · Göğüs · Arka bacak · Sırt · Karın', href:'gun-a.html', key:'A' },
    B: { title:'Gün B — Ağırlık', sub:'Sırt kaldırma · Kanat · Ön bacak · Omuz · Baldır', href:'gun-b.html', key:'B' },
    Z: { title:'Zone 2 Kardiyo', sub:'Eğimli yürüyüş veya eliptik, 30 dk', href:'zone2.html', key:'Z' },
    I: { title:'Interval Kardiyo', sub:'Kürek makinesi, hızlı/yavaş turlar', href:'interval.html', key:'I' },
    R: { title:'Dinlenme', sub:'Sadece yürüyüş, 8.000+ adım', href:'', key:'R' }
  };
  function ymd(d){ return d.getFullYear()+'-'+String(d.getMonth()+1).padStart(2,'0')+'-'+String(d.getDate()).padStart(2,'0'); }
  function get(k, def){ try{ var v = localStorage.getItem(k); return v===null?def:JSON.parse(v);}catch(e){ return def; } }
  function set(k, v){ try{ localStorage.setItem(k, JSON.stringify(v)); }catch(e){} }
  function startOf(d){ return new Date(d.getFullYear(), d.getMonth(), d.getDate()); }
  function state(now){
    now = startOf(now || new Date());
    var days = Math.round((now - START)/86400000);
    var week = days < 0 ? 0 : Math.floor(days/7)+1;
    var phase = week===0 ? 0 : week<=4 ? 1 : week<=8 ? 2 : week<=12 ? 3 : 4;
    var dow = now.getDay();
    return { date: now, days: days, week: week, phase: phase, dow: dow, session: sessionFor(week, dow) };
  }
  function sessionFor(week, dow){
    var s = DAYS[dow];
    if(!s) return META.R;
    if(s==='F') s = (week % 2 === 1) ? 'A' : 'B';
    return META[s];
  }
  function phaseName(p){ return ['Hazırlık','Faz 1 · Öğrenme','Faz 2 · Yükleme','Faz 3 · Serbest ağırlık','Faz 4 · Devam'][p]; }
  function weekDates(now){ // Pzt..Cum tarihleri
    now = startOf(now || new Date());
    var mon = new Date(now); var off = (now.getDay()+6)%7; mon.setDate(now.getDate()-off);
    var arr=[]; for(var i=0;i<5;i++){ var d=new Date(mon); d.setDate(mon.getDate()+i); arr.push(d);} return arr;
  }
  function markDone(key, d){ set('done:'+ymd(d||new Date()), key); }
  function isDone(d){ return get('done:'+ymd(d), null); }
  function fmtDate(d){ return d.toLocaleDateString('tr-TR',{day:'numeric',month:'long',weekday:'long'}); }
  function trDay(d){ return ['Paz','Pzt','Sal','Çar','Per','Cum','Cmt'][d.getDay()]; }

  /* Dinlenme sayacı — alt bar */
  function restBar(){
    var bar = document.createElement('div'); bar.className='rest';
    bar.innerHTML = '<div class="in"><div><div class="lbl">Dinlenme</div><div class="clock num" id="rc">—</div></div>'+
      '<button class="btn" data-s="60">60 sn</button><button class="btn" data-s="75">75 sn</button><button class="btn" data-s="90">90 sn</button>'+
      '<button class="btn primary" id="rstop" hidden>Dur</button></div>';
    document.body.appendChild(bar);
    var clock = bar.querySelector('#rc'), stop = bar.querySelector('#rstop'), t=null, end=0;
    function tick(){ var left = Math.max(0, Math.round((end-Date.now())/1000)); clock.textContent = left+' sn'; clock.classList.toggle('go', left===0);
      if(left===0){ clearInterval(t); t=null; stop.hidden=true; clock.textContent='Devam!'; beep(); } }
    bar.querySelectorAll('[data-s]').forEach(function(b){ b.addEventListener('click', function(){ end = Date.now()+ (+b.dataset.s)*1000; clock.classList.remove('go'); if(t) clearInterval(t); t=setInterval(tick,250); tick(); stop.hidden=false; }); });
    stop.addEventListener('click', function(){ if(t) clearInterval(t); t=null; stop.hidden=true; clock.textContent='—'; clock.classList.remove('go'); });
  }
  var actx=null;
  /* Bip: iOS'ta sessiz anahtar ve kulaklıktaki müzik yüzünden duyulmuyordu.
     - audioSession 'transient': müziği kısarak üstüne çalar, sessiz anahtara takılmaz (iOS 17.4+)
     - daha uzun, daha yüksek, iki tonlu; n = bip sayısı
     - flash(): ses duyulmasa bile ekran yanıp söner */
  function beep(n){
    n = n||2;
    try{ if(navigator.vibrate) navigator.vibrate([250,120,250,120,250]); }catch(e){}
    flash(n>=3?'fast':'easy');
    try{ unlockAudio();
      for(var i=0;i<n;i++){ var t0=actx.currentTime+i*0.45;
        [1046,1568].forEach(function(f,j){ var o=actx.createOscillator(), g=actx.createGain(); o.type='square'; o.frequency.value=f; o.connect(g); g.connect(actx.destination);
          g.gain.setValueAtTime(0.0001,t0); g.gain.exponentialRampToValueAtTime(0.9,t0+0.02); g.gain.setValueAtTime(0.9,t0+0.28); g.gain.exponentialRampToValueAtTime(0.0001,t0+0.38); o.start(t0); o.stop(t0+0.4); }); } }catch(e){}
  }
  function unlockAudio(){
    try{ if(navigator.audioSession && navigator.audioSession.type!=='transient') navigator.audioSession.type='transient'; }catch(e){}
    try{ actx = actx || new (window.AudioContext||window.webkitAudioContext)(); if(actx.state==='suspended') actx.resume(); }catch(e){}
  }
  var flashEl=null, flashT=null;
  function flash(kind){
    if(!flashEl){ flashEl=document.createElement('div'); flashEl.className='flash'; document.body.appendChild(flashEl); }
    flashEl.className='flash on '+(kind||''); clearTimeout(flashT); flashT=setTimeout(function(){ flashEl.className='flash'; }, 1200);
  }
  /* Kompakt sayaç çubuğu: büyük sayaç ekrandan çıkınca altta görünür */
  function miniBar(mainEl, onToggle){
    var bar=document.createElement('div'); bar.className='rest mini'; bar.hidden=true;
    bar.innerHTML='<div class="in"><div style="flex:1;min-width:0"><div class="lbl" id="m-stage">—</div><div class="clock num" id="m-clock">00:00</div><div class="mprog"><i id="m-fill"></i></div></div><button class="btn primary" id="m-go">Başlat</button></div>';
    document.body.appendChild(bar);
    var st=bar.querySelector('#m-stage'), ck=bar.querySelector('#m-clock'), fill=bar.querySelector('#m-fill'), go=bar.querySelector('#m-go');
    go.addEventListener('click', onToggle);
    if('IntersectionObserver' in window){ new IntersectionObserver(function(en){ bar.hidden = en[0].isIntersecting; }, {threshold:0.15}).observe(mainEl); }
    else { window.addEventListener('scroll', function(){ var r=mainEl.getBoundingClientRect(); bar.hidden = r.bottom>0 && r.top<window.innerHeight; }); }
    return { set:function(stage,cls,clock,pct,running){ st.textContent=stage; st.className='lbl '+(cls||''); ck.textContent=clock; fill.style.width=(pct||0)+'%'; go.textContent=running?'Duraklat':'Başlat'; } };
  }
  function mmss(s){ s=Math.max(0,Math.round(s)); return String(Math.floor(s/60)).padStart(2,'0')+':'+String(s%60).padStart(2,'0'); }
  return { VERSION:VERSION, START:START, META:META, state:state, sessionFor:sessionFor, phaseName:phaseName, weekDates:weekDates, ymd:ymd, get:get, set:set,
           markDone:markDone, isDone:isDone, fmtDate:fmtDate, trDay:trDay, restBar:restBar, beep:beep, unlockAudio:unlockAudio, flash:flash, miniBar:miniBar, mmss:mmss };
})();
/* Sürüm rozeti: dokununca önbelleği atlayarak yeniler; uygulama öne gelince yeni sürüm var mı diye bakar */
document.addEventListener('DOMContentLoaded', function(){
  var el = document.createElement('button'); el.type='button'; el.className = 'pill ver'; el.textContent = 'v' + SP.VERSION; el.title = 'Yenilemek için dokun';
  var slot = document.getElementById('ver'); var top = document.querySelector('.top');
  if(slot) slot.appendChild(el); else if(top) top.appendChild(el); else return;
  function hardReload(){ var u = location.pathname + '?r=' + Date.now(); location.replace(u); }
  el.addEventListener('click', hardReload);
  var checking=false;
  function check(){ if(checking || document.hidden) return; checking=true;
    fetch('version.txt?t='+Date.now(), {cache:'no-store'}).then(function(r){ return r.ok ? r.text() : ''; }).then(function(v){ v=(v||'').trim();
      if(v && v!==SP.VERSION){ el.textContent='v'+v+' hazır ↻'; el.classList.add('new'); el.title='Yeni sürüm — yenilemek için dokun'; } }).catch(function(){}).then(function(){ checking=false; }); }
  check();
  document.addEventListener('visibilitychange', check);
  window.addEventListener('pageshow', check);
  window.addEventListener('focus', check);
});
