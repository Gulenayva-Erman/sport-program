/* Hareket tanımları + Gün A / Gün B planı. Düz dille, alet fotoğrafıyla. */
window.EX = {
  hack_squat: {
    tr:'Makinede Çömelme', en:'Hack Squat', img:'img/hack-squat.jpg', cap:'Hack squat: eğimli, omuz pedli, ayak platformlu plakalı makine',
    muscles:'Ön bacak (uyluk), kalça, arka bacak',
    what:'Sırtını eğimli pede yaslayıp ayaklarını platforma koyarak yaptığın çömelme. Serbest squat\'ın güvenli, denge gerektirmeyen hali. Başlangıç için en doğru bacak hareketi.',
    setup:['Sırtını pede yasla, omuzlar omuz pedlerinin altına girsin.','Ayaklar platformun ortasında, omuz genişliğinde, parmak uçları hafif dışa dönük.','Güvenlik kollarını çevirerek serbest bırak (ilk seferde salon görevlisine göster, 10 saniye sürer).'],
    how:['Nefes al, dizlerini bükerek 3 saniyede yavaşça in.','Uylukların platforma paralel olunca dur (daha derin inme).','Nefes vererek topuklardan iterek kalk. Dizleri en üstte tam kilitleme.'],
    dont:['Topukların platformdan kalkması','Dizlerin içe doğru kaçması — dizler ayak ucunu takip etsin','Çok derine inip belin pedden yuvarlanması'],
    start:'1. hafta: her tarafa sadece 5–10 kg plaka. Hareketi öğren, ağırlığı sonra artır.'
  },
  chest_press: {
    tr:'Makinede Göğüs İtiş', en:'Chest Press (Hammer Force iso-lateral)', img:'img/chest-press.jpg', cap:'Kırmızı kollu Hammer Force makinesi — etiketinde CHEST PRESS yazan',
    muscles:'Göğüs, ön omuz, arka kol (triceps)',
    what:'Oturarak sırtını yaslayıp iki kolu öne itersin. Bench press\'in makine hali; ağırlık düşme riski yok. Salonda iki benzer kırmızı makine var: biri CHEST PRESS (kollar öne gider), biri SHOULDER PRESS (kollar yukarı gider). Etikete bak.',
    setup:['Koltuğu ayarla: tutamaklar göğsünün ortası hizasında (meme ucu seviyesi) başlasın.','Sırt ve baş pede yaslı, ayaklar yerde sabit.','Tutamakları tut, dirsekler gövdeye yaklaşık 45° açıyla.'],
    how:['Nefes vererek tutamakları öne it. Dirsekleri tam kilitleme.','Nefes alarak 3 saniyede geri getir; göğsünde gerginlik hissedince dur.'],
    dont:['Omuzların öne yuvarlanması — kürek kemiklerini geride, aşağıda tut','Sırtın pedden kalkması','Dirseklerin tamamen yana açılması'],
    start:'1. hafta: her tarafa 5 kg plaka. 12 tekrarı rahat yapıyorsan sonraki antrenmanda 2.5 kg ekle.'
  },
  leg_curl: {
    tr:'Yüzüstü Arka Bacak Bükme', en:'Prone Leg Curl', img:'img/leg-curl-etiket.jpg', cap:'Üzerinde PRONE LEG CURL etiketi olan makine — yüzüstü yatarsın',
    muscles:'Arka bacak (hamstring)',
    what:'Makinede yüzüstü yatıp topuklarını kalçana doğru çekersin. Arka bacak, düz taban ve diz sağlığı için önemli; squat ön bacağı çalıştırır, bu da arkayı dengeler.',
    setup:['Yüzüstü yat. Ayak bileği pedi, Aşil tendonunun hemen üstüne (topuğun üstü) gelsin.','Dizin, makinenin dönme ekseniyle aynı hizada olsun (koltuğun kenarına yakın).','Öndeki tutamakları tut, kalça pede yapışık.'],
    how:['Topuklarını kalçana doğru 1 saniyede çek.','3 saniyede kontrollü indir. Ağırlık plakası dibe çarpmasın.'],
    dont:['Ağırlığı sallayarak, hızla çekmek','Kalçayı pedden kaldırmak (ağırlık fazla demektir)'],
    start:'1. hafta: pin 3–4 (yaklaşık 20–25 kg). 15 tekrarı rahat yapıyorsan 1 pin ekle.'
  },
  seated_row: {
    tr:'Oturarak Kablo Çekiş', en:'Seated Cable Row', img:'img/kablo-kulesi.jpg', cap:'Kablo kulesinin alt istasyonu: oturak, ayak plakaları ve alçak makara. V tutamağı tak.',
    muscles:'Sırt ortası, arka omuz, pazı',
    what:'Otur, ayakları plakalara koy, tutamağı karnına doğru çek. "Kürek çekme" hareketi. Masa başı duruşunun (öne yuvarlanmış omuz) tam tersi; sırtı dikleştirir.',
    setup:['Alt makaraya V şeklindeki (üçgen) tutamağı tak.','Otur, ayaklarını plakalara bas, dizler hafif kırık.','Tutamağı iki elle al, gövde dik (90°), göğüs açık.'],
    how:['Dirsekleri arkaya çek, tutamak karnına değsin, kürek kemiklerini birbirine sık, 1 saniye tut.','3 saniyede bırak; kollar tam uzasın, omuzlar hafif öne gelsin ama gövde dik kalsın.'],
    dont:['Gövdeyle öne-arkaya sallanarak çekmek','Omuzları kulağa doğru kaldırmak','Bel ile geriye yatmak'],
    start:'1. hafta: pin 4–5 (yaklaşık 25–30 kg).'
  },
  plank: {
    tr:'Plank', en:'Plank', img:'img/mat-kettlebell.jpg', cap:'Mat alanı — mat, foam roller ve küçük ağırlıklar burada',
    muscles:'Karın, bel çevresi (core)',
    what:'Dirsekler ve ayak uçları üzerinde vücudu düz bir tahta gibi tutarsın. Hareket yok, sadece tutuş. Karın kaslarını bel ağrısı olmadan çalıştırmanın en güvenli yolu.',
    setup:['Matı ser, yüzüstü dirsekler omuz hizasının tam altında.','Ayak uçları yerde, bacaklar düz.'],
    how:['Kalçayı kaldır: baş, sırt, kalça, topuk tek çizgi.','Karnı sık (biri karnına vuracakmış gibi), kalçayı sık.','Normal nefes al. Süre bitince dizleri indir.'],
    dont:['Kalçanın aşağı çökmesi (bel çukuru) — en sık hata','Kalçanın tavana kalkması (çadır)','Nefesi tutmak'],
    start:'30 saniye ile başla. 45 saniyeyi 3 set rahat tutunca dead bug\'a geç.'
  },
  dead_bug: {
    tr:'Dead Bug (Sırtüstü Çapraz Uzatma)', en:'Dead Bug', img:'img/mat-kettlebell.jpg', cap:'Mat alanında yapılır',
    muscles:'Derin karın kasları, bel stabilitesi',
    what:'Sırtüstü yat, kollar tavana, dizler havada 90°. Çapraz kol ve bacağı uzatırken belin yerden kalkmamasını sağlarsın. Plank\'in bir üst seviyesi; beli koruyan kasları öğretir.',
    setup:['Sırtüstü yat, iki kolu tavana uzat.','Dizleri kaldır: kalça 90°, diz 90° (masa pozisyonu).','Belini yere yapıştır — bel ile yer arasında boşluk kalmasın.'],
    how:['Sağ kolu başının üstüne, sol bacağı ileri uzat; yere değdirme, 2 saniye tut.','Başlangıca dön, diğer çaprazı yap. Her taraf 10 = 1 set.'],
    dont:['Belin yerden kalkması — kalkıyorsa bacağı daha az uzat','Hızlı yapmak'],
    start:'Her taraf 8 tekrar ile başla, 12\'ye çık.'
  },
  back_ext: {
    tr:'45° Sırt Kaldırma', en:'Back Extension (Roman chair)', img:'img/roman-chair.jpg', cap:'Roman chair: eğimli kalça pedi ve ayak bileği tutucusu olan sehpa',
    muscles:'Bel kasları, kalça, arka bacak',
    what:'Eğimli sehpaya yüzüstü yaslanıp gövdeni kalçadan büküp indirip kaldırırsın. Deadlift\'in (yerden kaldırma) güvenli başlangıç versiyonu: "kalça menteşesi" hareketini öğretir.',
    setup:['Kalça pedini ayarla: pedin üst kenarı kalça kemiğinin hemen altında olsun; bel serbestçe bükülebilmeli.','Ayak bileklerini arkadaki tutucuya sabitle.','Kollar göğüste çapraz.'],
    how:['Sırtı düz tutarak gövdeni kalçadan büküp 3 saniyede aşağı indir (bel yuvarlanmasın).','Gövde bacaklarla düz bir çizgi olana kadar kalk, orada dur. Daha yukarı çıkma.'],
    dont:['Belden kamburlaşarak inmek','En üstte geriye doğru aşırı uzanmak (bel sıkışır)','Hızlı sallanmak'],
    start:'Faz 1: vücut ağırlığı. Faz 2: göğsüne 5–10 kg plaka al.'
  },
  lat_pulldown: {
    tr:'Yukarıdan Çekiş', en:'Lat Pulldown', img:'img/kablo-kulesi.jpg', cap:'Kablo kulesinin üst istasyonu: uzun bar, oturak ve uyluk pedi',
    muscles:'Sırt yanları (kanat), pazı, arka omuz',
    what:'Otur, yukarıdaki uzun barı göğsüne doğru çek. Barfiksin makine hali. Geniş "V" sırt görünümünün ve sağlıklı omuzun temel hareketi.',
    setup:['Uyluk pedini ayarla: oturduğunda bacakların sıkıca sabit olsun (ağırlık seni kaldırmasın).','Barı omuz genişliğinden biraz geniş tut, otur.','Göğüs hafif yukarı, gövde çok az geriye (10°).'],
    how:['Dirsekleri aşağı-arkaya çekerek barı köprücük kemiğine (göğüs üstü) indir. 1 saniye sık.','3 saniyede bırak; kollar tam uzasın, omuzlar hafif yukarı gelsin.'],
    dont:['Geriye yatarak ağırlığı vücutla çekmek','Barı boyun arkasına çekmek — omuz için tehlikeli','Bileklerden çekmek — dirseklerinle çektiğini düşün'],
    start:'1. hafta: pin 5–6 (yaklaşık 30–35 kg).'
  },
  leg_ext: {
    tr:'Oturarak Bacak Uzatma', en:'Leg Extension', img:'img/leg-extension-etiket.jpg', cap:'Üzerinde LEG EXTENSION etiketi olan makine — oturarak',
    muscles:'Ön bacak (uyluk)',
    what:'Oturup ayak bileği pedini yukarı kaldırarak dizlerini düzleştirirsin. Dizin çevresindeki kasları izole çalıştırır. Faz 1 için basit ve güvenli; Faz 2\'de yerini goblet squat alır.',
    setup:['Sırt pedini ayarla: diz, koltuğun ön kenarında ve makinenin dönme ekseniyle aynı hizada.','Ayak bileği pedi, ayak bileğinin hemen üstünde.','Yan tutamakları tut.'],
    how:['Bacakları düzleştir, en üstte 1 saniye sık.','3 saniyede indir. Ağırlık plakaları dibe çarpmasın.'],
    dont:['En üstte dizi sertçe kilitleyip vurmak','Kalçayı kaldırarak ağırlığı savurmak'],
    start:'1. hafta: pin 3–4 (yaklaşık 20–25 kg).'
  },
  shoulder_press: {
    tr:'Makinede Omuz İtiş', en:'Shoulder Press (Hammer Force iso-lateral)', img:'img/shoulder-press-etiket.jpg', cap:'Kırmızı kollu Hammer Force — etiketinde ISO-LATERAL SHOULDER PRESS yazan',
    muscles:'Omuz, arka kol (triceps), üst göğüs',
    what:'Oturup tutamakları omuz hizasından yukarı itersin. Omuzları güçlendirir; makine olduğu için dengeyi düşünmezsin. Chest press ile karıştırma: bunda kollar yukarı gider.',
    setup:['Koltuğu ayarla: tutamaklar omuz seviyesinde (kulak hizasında değil) başlasın.','Sırt ve bel pede yaslı, ayaklar yerde.','Tutamakları tut, bilekler düz.'],
    how:['Nefes vererek yukarı it. Dirsekleri tam kilitleme.','Nefes alarak 3 saniyede omuz hizasına indir.'],
    dont:['Nefesi tutup yüzü kızartmak — zorlanırken nefes VER','Beli pedden ayırıp kavis yapmak','Başı öne uzatmak'],
    start:'1. hafta: her tarafa 2.5–5 kg plaka. Omuz küçük kastır, ağırlık yavaş artar.'
  },
  calf_raise: {
    tr:'Baldır Kaldırma', en:'Standing Calf Raise', img:'img/calf-makinesi.jpg', cap:'Omuz pedli, ayak platformlu dik makine. Yoksa step üzerinde elde dambıl.',
    muscles:'Baldır, ayak tabanı kemeri',
    what:'Parmak uçlarında yükselip topuğu indirirsin. Düz taban için en önemli hareket: ayak kemerini taşıyan kasları güçlendirir. Ayrıca ayak bileği stabilitesi verir.',
    setup:['Omuzlar pedlerin altında, ayakların ön yarısı platformda, topuklar boşlukta.','Ayaklar kalça genişliğinde, parmak uçları düz ileri.'],
    how:['Parmak uçlarında olabildiğince yüksel, en üstte 2 saniye tut.','3 saniyede topuğu platformun altına indir — baldır gerilsin.'],
    dont:['Hızlı zıplamak gibi yapmak','Dizleri bükerek hile yapmak','Ayak tabanında ağrı varsa aralığı küçült, ağrıyla devam etme'],
    start:'Faz 1: vücut ağırlığı veya en hafif plaka. 15 tekrar rahatsa 5 kg ekle.'
  },
  tibialis: {
    tr:'Ayak Ucu Kaldırma', en:'Tibialis Raise', img:'img/bosu-step.jpg', cap:'Alet gerekmez; duvar yeterli. Sonra step kenarında da yapılabilir.',
    muscles:'Kaval kemiği önü (tibialis), ayak bileği',
    what:'Sırtını duvara yaslayıp topuklar yerde, ayak uçlarını olabildiğince yukarı kaldırırsın. Baldırın "karşıtı"; düz tabanda ayak bileğini dengeler, kaval ağrısını önler.',
    setup:['Sırtını duvara yasla, topuklar duvardan 25–30 cm önde, dizler düz.'],
    how:['Topuklar yerde kalsın, ayak uçlarını kaval kemiğine doğru kaldır, 1 saniye tut, indir.','15 tekrar. Yanma normal.'],
    dont:['Topuğu yerden kesmek','Dizleri bükmek'],
    start:'Sadece vücut ağırlığı. 20 tekrar rahatsa duvardan biraz uzaklaş.'
  },
  goblet_squat: {
    tr:'Dambıl Göğüste Çömelme', en:'Goblet Squat', img:'img/dambil-duvari.jpg', cap:'Dambıl duvarından bir dambıl al; ayna karşısında yap',
    muscles:'Ön bacak, kalça, karın',
    what:'Bir dambılı iki elinle göğsünde tutup (kadeh tutar gibi) çömelirsin. Makineden serbest ağırlığa geçişin ilk adımı; dengeyi ve doğru çömelme formunu öğretir.',
    setup:['Dambılı dik tutup üst kısmından iki elle göğsüne yasla, dirsekler aşağı.','Ayaklar omuz genişliğinde, parmak uçları hafif dışa.'],
    how:['Kalçayı geriye-aşağı vererek 3 saniyede çömel; dirsekler dizlerin iç tarafına doğru gitsin.','Uyluklar yere paralel (veya biraz altı) olunca dur, topuklardan iterek kalk.'],
    dont:['Topukların kalkması — kalkıyorsa daha az derine in','Dizlerin içe kaçması','Gövdenin öne yığılması; göğüs dik, dambıl göğüste kalsın'],
    start:'8–12 kg dambıl ile başla. 12 tekrar rahatsa 2 kg ekle.'
  },
  db_rdl: {
    tr:'Dambılla Kalça Menteşesi', en:'Dumbbell Romanian Deadlift (RDL)', img:'img/dambil-duvari.jpg', cap:'İki dambıl; ayna karşısında yandan görebileceğin yerde yap',
    muscles:'Arka bacak, kalça, bel',
    what:'İki dambılı bacaklarının önünde tutup, dizleri hafif kırık, kalçanı geriye vererek gövdeni öne eğersin. Roman chair\'de öğrendiğin hareketin ayakta, ağırlıklı hali. Arka zincirin (arka bacak-kalça-bel) ana hareketi.',
    setup:['Her elde bir dambıl, uylukların önünde, avuç içleri sana bakıyor.','Ayaklar kalça genişliğinde, dizler hafif kırık (bu açı hareket boyunca değişmez).','Omuzlar geride, sırt düz.'],
    how:['Kalçayı geriye it (arkadaki bir kapıyı kalçanla kapatır gibi), dambıllar bacağa sürtünerek insin.','Arka bacakta gerginlik hissedince dur — genellikle diz kapağının biraz altı. Daha aşağı inme.','Kalçayı öne iterek kalk, üstte kalçayı sık.'],
    dont:['Sırtın kamburlaşması — en önemli hata, ağırlığı düşür','Dizleri bükerek squat\'a çevirmek','Dambılları vücuttan uzak tutmak'],
    start:'Her elde 12–14 kg ile başla. Roman chair\'den geçtiğin için form tanıdık gelecek.'
  },
  db_bench: {
    tr:'Dambılla Göğüs İtiş', en:'Dumbbell Bench Press', img:'img/dambil-duvari.jpg', cap:'Düz bench + iki dambıl (dambıl duvarının önündeki benchler)',
    muscles:'Göğüs, ön omuz, arka kol',
    what:'Düz benchte sırtüstü yatıp iki dambılı göğüsten yukarı itersin. Chest press makinesinin serbest hali; dengeyi de çalıştırır.',
    setup:['Dambılları uyluğuna koyup benche otur; geriye yatarken dizlerinle dambılları göğüs hizasına "fırlat".','Ayaklar yerde sabit, kürek kemikleri sıkılı ve geride, bel hafif doğal kavisli.'],
    how:['Dambılları yukarı it, üstte hafifçe birbirine yaklaştır.','3 saniyede göğüs hizasına indir; dirsekler gövdeye 45°.'],
    dont:['Dirsekleri tamamen yana açmak','Kalçayı benchten kaldırmak','Bitirirken dambılları düşürmek — dizleri çekip oturarak kalk'],
    start:'Her elde 12–14 kg. Makinede yaptığın toplamın yaklaşık %60\'ı ile başla.'
  },
  low_row_iso: {
    tr:'Makinede Alçak Çekiş', en:'Iso-Lateral Low Row (Hammer Force)', img:'img/low-row.jpg', cap:'Kırmızı kollu, göğüs pedli Hammer Force — etiketinde ISO-LATERAL LOW ROW yazan',
    muscles:'Sırt ortası, kanat, pazı',
    what:'Göğsünü pede dayayıp oturur, iki kolu bağımsız olarak kendine çekersin. Kablo çekişin plakalı, göğüs destekli hali: gövde sallanamaz, sırt daha izole çalışır. İki kol bağımsız olduğu için sağ-sol farkını gösterir.',
    setup:['Koltuğu ayarla: göğüs pedi göğsünün ortasında, tutamaklar omuz hizasında.','Göğüs pede tam yaslı, ayaklar yerde.'],
    how:['Dirsekleri arkaya çek, kürek kemiklerini sık, 1 saniye tut.','3 saniyede bırak, kollar tam uzasın.'],
    dont:['Göğsü pedden ayırmak','Omuzları kulağa kaldırmak'],
    start:'Her tarafa 10 kg plaka.'
  }
};

/* Gün planları — faza göre. sets = set sayısı, reps = tekrar. */
window.PLAN = {
  A: {
    1: [ {ss:1,id:'hack_squat',sets:2,reps:'10–12'}, {ss:1,id:'chest_press',sets:2,reps:'10–12'}, {ss:2,id:'leg_curl',sets:2,reps:'12–15'}, {ss:2,id:'seated_row',sets:2,reps:'12–15'}, {ss:3,id:'plank',sets:2,reps:'30–45 sn'} ],
    2: [ {ss:1,id:'hack_squat',sets:3,reps:'10–12'}, {ss:1,id:'chest_press',sets:3,reps:'10–12'}, {ss:2,id:'leg_curl',sets:3,reps:'12–15'}, {ss:2,id:'seated_row',sets:3,reps:'12–15'}, {ss:3,id:'dead_bug',sets:3,reps:'10+10'} ],
    3: [ {ss:1,id:'hack_squat',sets:3,reps:'8–10'}, {ss:1,id:'db_bench',sets:3,reps:'8–10'}, {ss:2,id:'leg_curl',sets:3,reps:'10–12'}, {ss:2,id:'low_row_iso',sets:3,reps:'10–12'}, {ss:3,id:'dead_bug',sets:3,reps:'12+12'} ]
  },
  B: {
    1: [ {ss:1,id:'back_ext',sets:2,reps:'12–15'}, {ss:1,id:'lat_pulldown',sets:2,reps:'10–12'}, {ss:2,id:'leg_ext',sets:2,reps:'12–15'}, {ss:2,id:'shoulder_press',sets:2,reps:'10–12'}, {ss:3,id:'calf_raise',sets:2,reps:'15'}, {ss:3,id:'tibialis',sets:2,reps:'15'} ],
    2: [ {ss:1,id:'back_ext',sets:3,reps:'12–15',note:'Göğüste 5–10 kg plaka'}, {ss:1,id:'lat_pulldown',sets:3,reps:'10–12'}, {ss:2,id:'goblet_squat',sets:3,reps:'10–12'}, {ss:2,id:'shoulder_press',sets:3,reps:'10–12'}, {ss:3,id:'calf_raise',sets:3,reps:'15'}, {ss:3,id:'tibialis',sets:3,reps:'15'} ],
    3: [ {ss:1,id:'db_rdl',sets:3,reps:'8–10'}, {ss:1,id:'lat_pulldown',sets:3,reps:'8–10'}, {ss:2,id:'goblet_squat',sets:3,reps:'10–12'}, {ss:2,id:'shoulder_press',sets:3,reps:'8–10'}, {ss:3,id:'calf_raise',sets:3,reps:'12–15'}, {ss:3,id:'tibialis',sets:3,reps:'15'} ]
  }
};

/* Faz notları — sayfa üstünde gösterilir */
window.PHASE_NOTES = {
  1: 'Öğrenme fazı: her hareket 2 set, hafif ağırlık. Hedef form ve rutin, zorlanmak değil. 3. haftada kendini hazır hissediyorsan 3 sete çık.',
  2: 'Yükleme fazı: 3 set. Tekrar aralığının üst sınırına ulaşınca ağırlık artır. Bazı hareketler değişti — kartlara bak.',
  3: 'Serbest ağırlık fazı: makinelerin yerini dambıl alıyor, tekrar sayısı düşüyor, ağırlık artıyor. Form her şeyden önemli.'
};

/* Gün sayfası çizimi */
window.renderDay = function(dayKey){
  var st = SP.state();
  var cur = st.phase===0 ? 1 : Math.min(st.phase,3);
  var tabs = document.getElementById('tabs');
  var out = document.getElementById('plan');
  var note = document.getElementById('phase-note');
  function draw(p){
    tabs.querySelectorAll('button').forEach(function(b){ b.setAttribute('aria-selected', b.dataset.p==p); });
    note.textContent = PHASE_NOTES[p];
    var items = PLAN[dayKey][p]; var html=''; var lastSS=0; var n=0;
    var ssTitle = {1:'Süperset 1 — A1 ve A2 arka arkaya, sonra dinlen', 2:'Süperset 2 — B1 ve B2 arka arkaya, sonra dinlen', 3:'Bitiriş — tek başına'};
    var letters = {1:['A1','A2'],2:['B1','B2'],3:['C1','C2']};
    var idx={1:0,2:0,3:0};
    items.forEach(function(it){
      if(it.ss!==lastSS){ html += '<div class="ss">'+ssTitle[it.ss]+'</div>'; lastSS=it.ss; }
      var e = EX[it.id]; var tag = letters[it.ss][idx[it.ss]++]; var w = SP.get('w:'+it.id,'');
      var setsHtml=''; for(var i=1;i<=it.sets;i++){ var on = SP.get('s:'+SP.ymd(st.date)+':'+it.id+':'+i,false); setsHtml+='<button data-set="'+i+'" data-id="'+it.id+'" class="'+(on?'on':'')+'" aria-pressed="'+on+'">'+i+'</button>'; }
      html += '<article class="ex" id="'+it.id+'">'+
        '<div class="head"><div class="badge">'+tag+'</div><div><h3>'+e.tr+'</h3><div class="en">'+e.en+'</div></div>'+
        '<div class="rx"><b>'+it.sets+' × '+it.reps+'</b><span>set × tekrar</span></div></div>'+
        '<figure><img src="'+e.img+'" alt="'+e.en+'" loading="lazy"><figcaption>'+e.cap+'</figcaption></figure>'+
        '<div class="body">'+
        (it.note?'<div class="note" style="margin-bottom:10px">'+it.note+'</div>':'')+
        '<div class="muscles">Çalışan: '+e.muscles+'</div>'+
        '<div class="lbl">Nedir</div><p>'+e.what+'</p>'+
        '<div class="lbl">Kur</div><ol class="steps">'+e.setup.map(function(s){return '<li>'+s+'</li>';}).join('')+'</ol>'+
        '<div class="lbl">Yap</div><ol class="steps">'+e.how.map(function(s){return '<li>'+s+'</li>';}).join('')+'</ol>'+
        '<div class="lbl">Yapma</div><ul class="plain">'+e.dont.map(function(s){return '<li>'+s+'</li>';}).join('')+'</ul>'+
        '<div class="lbl">Başlangıç ağırlığı</div><p>'+e.start+'</p>'+
        '<div class="track"><div class="sets" aria-label="Tamamlanan setler">'+setsHtml+'</div>'+
        '<div class="w"><input type="number" inputmode="decimal" id="w-'+it.id+'" value="'+w+'" placeholder="kg" aria-label="Son kullanılan ağırlık"><span>kg</span></div></div>'+
        '</div></article>';
    });
    out.innerHTML = html;
    out.querySelectorAll('.sets button').forEach(function(b){ b.addEventListener('click', function(){ var on=!b.classList.contains('on'); b.classList.toggle('on',on); b.setAttribute('aria-pressed',on); SP.set('s:'+SP.ymd(st.date)+':'+b.dataset.id+':'+b.dataset.set,on); }); });
    out.querySelectorAll('.w input').forEach(function(i){ i.addEventListener('change', function(){ SP.set('w:'+i.id.slice(2), i.value); }); });
  }
  tabs.querySelectorAll('button').forEach(function(b){ b.addEventListener('click', function(){ draw(+b.dataset.p); }); });
  draw(cur);
  var hdr = document.getElementById('ctx');
  if(hdr){ hdr.textContent = st.phase===0 ? 'Program henüz başlamadı — Faz 1 planı' : 'Hafta '+st.week+' · '+SP.phaseName(Math.min(st.phase,3)); }
  var done = document.getElementById('done');
  if(done){ if(SP.isDone(st.date)===dayKey){ done.textContent='Bugün tamamlandı ✓'; done.classList.add('ghost'); }
    done.addEventListener('click', function(){ SP.markDone(dayKey); done.textContent='Bugün tamamlandı ✓'; done.classList.add('ghost'); SP.beep(3); }); }
};
