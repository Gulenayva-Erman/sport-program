/* Yandan görünüş hareket çizimleri. Sarı = hareket eden uzuv. viewBox 0 0 420 110: iki kare (1 → 2). */
(function(){
  var S = 'fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"';
  var A = 'fill="none" stroke="var(--accent-ink)" stroke-width="4.5" stroke-linecap="round" stroke-linejoin="round"';
  var H = 'fill="currentColor"';
  function head(x,y){ return '<circle cx="'+x+'" cy="'+y+'" r="7" '+H+'/>'; }
  function floor(x0,x1,y){ return '<line x1="'+x0+'" y1="'+y+'" x2="'+x1+'" y2="'+y+'" stroke="var(--line)" stroke-width="2"/>'; }
  function label(x,t){ return '<text x="'+x+'" y="106" font-family="Barlow Condensed, sans-serif" font-size="11" font-weight="700" fill="var(--muted)" text-anchor="middle">'+t+'</text>'; }
  function arrow(){ return '<path d="M200 55 h20 m-6 -6 l6 6 l-6 6" fill="none" stroke="var(--muted)" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>'; }
  function wrap(inner){ return '<svg viewBox="0 0 420 112" role="img" aria-label="Hareket çizimi" xmlns="http://www.w3.org/2000/svg">'+inner+'</svg>'; }
  window.DIAGRAMS = {
    plank: wrap(
      floor(10,190,90)+ head(40,44) +
      '<path d="M50 50 L110 66 L170 82" '+S+'/>'+            // omuz–kalça–ayak bileği tek düz çizgi
      '<path d="M50 50 L46 88 L68 88" '+S+'/>'+               // dirsek/ön kol
      '<path d="M170 82 L178 90" '+S+'/>'+                    // ayak ucu
      '<path d="M44 38 L182 76" stroke="var(--accent-ink)" stroke-width="2" stroke-dasharray="4 4" fill="none"/>'+ // düz çizgi referansı
      label(100,'baş–kalça–topuk düz çizgi') +
      floor(230,410,90)+ head(260,44) +
      '<path d="M270 50 L332 80 L390 82" '+S+'/>'+            // kalça çökmüş, bel çukuru — yanlış
      '<path d="M270 50 L266 88 L288 88" '+S+'/>'+
      '<path d="M300 40 l14 14 m0 -14 l-14 14" stroke="var(--warn)" stroke-width="4" stroke-linecap="round" fill="none"/>'+
      label(320,'kalça çökmüş / bel çukuru — yanlış')
    ),
    dead_bug: wrap(
      floor(10,190,88)+ head(30,80) +
      '<path d="M40 78 L100 78" '+S+'/>'+                     // gövde yerde
      '<path d="M40 76 L40 30" '+S+'/>'+                      // kollar tavana
      '<path d="M100 78 L100 46 L130 46" '+S+'/>'+            // dizler 90°
      label(100,'1 · kollar tavana, dizler 90°') + arrow() +
      floor(230,410,88)+ head(250,80) +
      '<path d="M260 78 L320 78" '+S+'/>'+
      '<path d="M260 76 L260 30" '+S+'/>'+                    // kalan kol
      '<path d="M260 76 L226 46" '+A+'/>'+                    // sağ kol başın üstüne (sarı)
      '<path d="M320 78 L320 46 L350 46" '+S+'/>'+            // kalan bacak
      '<path d="M320 78 L365 62 L400 74" '+A+'/>'+            // sol bacak uzar, yere değmez (sarı)
      '<path d="M262 84 L318 84" stroke="var(--accent-ink)" stroke-width="2" stroke-dasharray="3 3" fill="none"/>'+ // bel yere yapışık
      label(320,'2 · çapraz kol + bacak uzar, bel yerde')
    ),
    tibialis: wrap(
      '<line x1="30" y1="10" x2="30" y2="88" stroke="var(--line)" stroke-width="6"/>'+ floor(10,190,88)+ head(46,22) +
      '<path d="M44 30 L60 58 L86 86" '+S+'/>'+               // sırt duvara yaslı, bacak düz
      '<path d="M86 86 L104 88" '+S+'/>'+                     // ayak yerde
      label(100,'1 · sırt duvarda, topuk ~30 cm önde') + arrow() +
      '<line x1="250" y1="10" x2="250" y2="88" stroke="var(--line)" stroke-width="6"/>'+ floor(230,410,88)+ head(266,22) +
      '<path d="M264 30 L280 58 L306 86" '+S+'/>'+
      '<path d="M306 86 L322 74" '+A+'/>'+                    // ayak ucu kalkar (sarı)
      label(320,'2 · topuk yerde, parmak uçları yukarı')
    ),
    goblet_squat: wrap(
      floor(10,190,88)+ head(100,14) +
      '<path d="M100 22 L100 56 L100 74 L100 86" '+S+'/>'+    // dik duruş
      '<path d="M100 26 L92 40 L100 44 M100 26 L108 40 L100 44" '+S+'/>'+ // kollar göğüste
      '<rect x="93" y="38" width="14" height="10" rx="2" '+H+'/>'+ // dambıl
      label(100,'1 · dambıl göğüste') + arrow() +
      floor(230,410,88)+ head(298,34) +
      '<path d="M302 42 L326 68 L292 72 L300 88" '+A+'/>'+    // gövde hafif öne, kalça geriye-aşağı, uyluk paralel, kaval dik (sarı)
      '<path d="M302 46 L290 56 M302 46 L296 60" '+S+'/>'+    // kollar göğüs önünde
      '<rect x="283" y="52" width="14" height="10" rx="2" '+H+'/>'+
      '<path d="M292 72 L326 72" stroke="var(--accent-ink)" stroke-width="2" stroke-dasharray="3 3" fill="none"/>'+ // paralel referansı
      label(320,'2 · uyluk paralel, göğüs dik')
    ),
    db_rdl: wrap(
      floor(10,190,88)+ head(100,14) +
      '<path d="M100 22 L100 56 L102 74 L100 86" '+S+'/>'+
      '<path d="M100 28 L98 60 M100 28 L102 60" '+S+'/>'+     // kollar aşağı
      '<rect x="92" y="58" width="6" height="12" rx="1" '+H+'/><rect x="102" y="58" width="6" height="12" rx="1" '+H+'/>'+
      label(100,'1 · dambıllar uylukta, diz hafif kırık') + arrow() +
      floor(230,410,88)+ head(272,40) +
      '<path d="M280 44 L330 58" '+A+'/>'+                    // gövde öne, sırt DÜZ (sarı)
      '<path d="M330 58 L326 74 L322 86" '+S+'/>'+            // diz açısı değişmez
      '<path d="M284 46 L296 76 M290 48 L302 76" '+S+'/>'+    // kollar sarkar, dambıl bacağa yakın
      '<rect x="292" y="74" width="6" height="12" rx="1" '+H+'/><rect x="300" y="74" width="6" height="12" rx="1" '+H+'/>'+
      '<path d="M334 58 h14" stroke="var(--accent-ink)" stroke-width="3" stroke-linecap="round"/>'+ // kalça geriye
      label(320,'2 · kalça geri, sırt düz')
    )
  };
})();
