/* Ortak mantık: hafta/faz hesabı, localStorage yardımcıları, dinlenme sayacı */
window.SP = (function(){
  var VERSION = "1.1"; // Her değişiklikte artır — sayfanın üstünde görünür
  var START = new Date(2026, 8, 21); // 21 Eylül 2026 Pazartesi — program başlangıcı
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
  function beep(n){
    try{ if(navigator.vibrate) navigator.vibrate([200,100,200]); }catch(e){}
    try{ actx = actx || new (window.AudioContext||window.webkitAudioContext)(); var k = n||2;
      for(var i=0;i<k;i++){ var o=actx.createOscillator(), g=actx.createGain(); o.frequency.value=880; o.connect(g); g.connect(actx.destination);
        var t0=actx.currentTime+i*0.25; g.gain.setValueAtTime(0.0001,t0); g.gain.exponentialRampToValueAtTime(0.4,t0+0.02); g.gain.exponentialRampToValueAtTime(0.0001,t0+0.18); o.start(t0); o.stop(t0+0.2);} }catch(e){}
  }
  function unlockAudio(){ try{ actx = actx || new (window.AudioContext||window.webkitAudioContext)(); if(actx.state==='suspended') actx.resume(); }catch(e){} }
  function mmss(s){ s=Math.max(0,Math.round(s)); return String(Math.floor(s/60)).padStart(2,'0')+':'+String(s%60).padStart(2,'0'); }
  return { VERSION:VERSION, START:START, META:META, state:state, sessionFor:sessionFor, phaseName:phaseName, weekDates:weekDates, ymd:ymd, get:get, set:set,
           markDone:markDone, isDone:isDone, fmtDate:fmtDate, trDay:trDay, restBar:restBar, beep:beep, unlockAudio:unlockAudio, mmss:mmss };
})();
/* Sürüm etiketi: alt sayfalarda üst çubuğa, ana sayfada #ver alanına */
document.addEventListener('DOMContentLoaded', function(){
  var el = document.createElement('span'); el.className = 'pill ver'; el.textContent = 'v' + SP.VERSION; el.title = 'Site sürümü';
  var slot = document.getElementById('ver'); var top = document.querySelector('.top');
  if(slot) slot.appendChild(el); else if(top) top.appendChild(el);
});
