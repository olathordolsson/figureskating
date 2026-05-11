export type ExerciseDetail = {
  steps: string[];
  tips: string[];
  mistakes: string[];
  muscles: string[];
  progressions?: string[];
};

// Keyed by exercise name prefix. Look up with findExerciseDetail().
const EXERCISE_DATA: Record<string, ExerciseDetail> = {

  // ── SQUATS & ENBENSSTYRKA ─────────────────────────────────────────────────

  'Ettbenssquat': {
    steps: [
      'Stå på ett ben med foten rakt under höften, blicken framåt.',
      'Böj långsamt knäet och sänk höften rakt nedåt – håll knäet i linje med stortån.',
      'Gå ner tills låret är parallellt med golvet eller djupare om rörligheten tillåter.',
      'Pressa upp genom hälen tillbaka till startposition utan att benknotet slår ihop.',
      'Håll core aktivt och överkroppen upprätt under hela rörelsen.',
    ],
    tips: [
      'Blicken hjälper balansen – fix ett punkt i ögonhöjd framför dig.',
      'Tryck hälen i golvet och håll vikten i mitten av foten, inte på tårna.',
      'Börja grunt och öka djupet gradvis – djupet är sekundärt mot god form.',
    ],
    mistakes: [
      'Knäet kollapsar inåt (valgus) – aktivera höftabduktorerna aktivt.',
      'Överkroppen lutar för långt framåt – stärk core och ankelmobilitet.',
      'Hälen lyfter från golvet – arbeta med vadssträck och ankelmobilitet.',
    ],
    muscles: ['Quadriceps', 'Gluteus maximus', 'Höftabduktorer', 'Core/bålmuskulatur'],
    progressions: [
      'Grundnivå: håll i en stång eller vägg för balans.',
      'Nästa steg: fri balans, lägg till rotation av överkroppen.',
      'Avancerat: håll en viktskiva eller använd motståndsband runt knäet.',
    ],
  },

  'Djup ettbenssquat': {
    steps: [
      'Stå på ett ben, håll det andra benet utsträckt framåt eller åt sidan.',
      'Sänk höften långsamt till maximalt djup – gärna under parallellt.',
      'Håll hälen i golvet och knäet i linje med tårna under hela rörelsen.',
      'Pressa upp explosivt eller kontrollerat beroende på träningssyfte.',
    ],
    tips: [
      'Använd ett handtag eller vägg i början för att öva rörelsebanor utan att kompromissa med form.',
      'Det fria benets position påverkar balansen – experimentera med vad som känns stabilt.',
    ],
    mistakes: [
      'Knäet skjuter långt innanför tårna – minska djupet tills styrkan förbättras.',
      'Ryggen rundar – håll bröstet uppe och luta lätt framåt från höften, inte ryggen.',
    ],
    muscles: ['Quadriceps', 'Gluteus maximus & medius', 'Vadmuskulatur', 'Fotledsmuskulatur'],
  },

  'Bulgarisk split-squat': {
    steps: [
      'Stå med ryggen mot en bänk, ca ett steg framåt. Lägg bakfotens ovansida på bänken.',
      'Sänk höften rakt nedåt tills det bakre knäet nästan nuddar golvet.',
      'Håll överkroppen upprätt och framknäet i linje med stortån.',
      'Pressa upp med hälen på framfoten och återgå till startposition.',
    ],
    tips: [
      'Framfotens position avgör belastning: längre fram = mer gluteus, kortare = mer quadriceps.',
      'Börja utan extra vikt och säkerställ rörelsebanor innan du lägger till belastning.',
      'Andas in på vägen ner, andas ut vid uppresningen.',
    ],
    mistakes: [
      'Bakknäet slår i golvet utan kontroll – sänk dig långsammare.',
      'Framkroppens vikt gungar framåt – håll bröstet uppe.',
      'Bänkhöjden är för hög – börja med låg höjd (20–30 cm).',
    ],
    muscles: ['Quadriceps', 'Gluteus maximus', 'Hamstrings', 'Core'],
    progressions: [
      'Grundnivå: kroppsvikt, fokus på rörelsebanor.',
      'Nästa steg: addera hantlar eller stång med lätt vikt.',
      'Med utåtrotation: rotera det bakre knäet ut under nedfasen — specifikt för lutz och yttre kanten.',
      'Med viktväst: maximal belastning för erfarna åkare som tränar trippel- och quadhopp.',
    ],
  },

  'Djup squat': {
    steps: [
      'Stå med fötterna höftbrett eller lite bredare, tårna pekande lätt utåt.',
      'Håll armarna framåt som motvikt och sänk höften djupt under knänivå.',
      'Pressa knäna utåt i linje med tårna under hela rörelsen.',
      'Håll hälar i golvet och bröst upprätt. Pressa upp från hälar och mittfot.',
    ],
    tips: [
      'Djup squat kräver god ankelmobilitet – arbeta med vadssträck parallellt.',
      'Håll ett lätt kroppsvikts-squat som uppvärmning innan du lägger till vikt.',
    ],
    mistakes: [
      'Hälarna lyfter – ankelrörligheten behöver förbättras.',
      'Knäna kollapsar inåt – stärk höftabduktorer med bandövningar.',
      'Ryggen rundar kraftigt – börja mer grundläggande och bygg upp djupet gradvis.',
    ],
    muscles: ['Quadriceps', 'Gluteus maximus & medius', 'Adduktorer', 'Core'],
    progressions: [
      'Grundnivå: håll ett handtag eller vägg för stöd.',
      'Nästa steg: fri balans, gå ner till parallellt.',
      'Kompakt position: håll armarna tätt mot kroppen — simulerar luftpositionen i hopp.',
      'Framåtfall: luta överkroppen framåt under nedfasen — specifikt för illusionsspin.',
      'Kontrollerad nedgång: 5 sekunders excentrisk fas — extremt hög belastning för death drop.',
    ],
  },

  'Wall sit': {
    steps: [
      'Stå med ryggen mot en vägg, fötterna höftbrett och ca 50–60 cm från väggen.',
      'Glid ner längs väggen tills knäna är i 90 grader och låren parallella med golvet.',
      'Håll positionen – rygg mot vägg, knän rakt ovanför anklar.',
      'Andas jämnt och aktivt under hela hålltiden.',
    ],
    tips: [
      'Tryck ryggen aktivt mot väggen – det aktiverar kärnan och minskar belastningen på knäna.',
      'För att öka svårighetsgrad: håll ett ben utsträckt, eller lyft hälarna.',
    ],
    mistakes: [
      'Knäna glider inåt under belastning – pressa dem aktiv utåt.',
      'Ryggen glider ner från väggen – kontrollera positionen visuellt.',
    ],
    muscles: ['Quadriceps', 'Gluteus maximus', 'Core', 'Vadmuskulatur'],
    progressions: [
      'Grundnivå: 90° knävinkel, 20–30 sekunder.',
      'Med ett ben utsträckt: lyft ett ben — ökar enbensstyrkan direkt.',
      'Djupt: gå under 90° — specifikt för cannonball spin och djupa sittpositioner.',
    ],
  },

  // ── HÖFT & GLUTEUS ────────────────────────────────────────────────────────

  'Höftlyft': {
    steps: [
      'Ligg på rygg med knäna böjda, fötterna höftbrett och platta i golvet.',
      'Aktivera gluteus och pressa höften uppåt tills kroppen bildar en rak linje från knä till axel.',
      'Håll i toppen 1–2 sekunder och pressa knäna lätt utåt.',
      'Sänk kontrollerat tillbaka utan att ryggen landar hårt.',
    ],
    tips: [
      'Tryck hälar och axlar i golvet – inte tårna.',
      'Ettbensvariant ökar utmaningen markant – pressa upp med ett ben och håll det andra utsträckt.',
    ],
    mistakes: [
      'Ländrygg lyfter istället för gluteus – arbeta med aktiv gluteusaktivering.',
      'Knäna faller ihop – pressa dem aktivt utåt under hela rörelsen.',
    ],
    muscles: ['Gluteus maximus', 'Hamstrings', 'Core/Bäckenstabilisatorer'],
  },

  'Ettbensdödlyft': {
    steps: [
      'Stå på ett ben med lätt böjt stödknä, det fria benet lyfts bakåt.',
      'Luta överkroppen framåt från höften – ryggrad neutral, bröst lyft.',
      'Det fria benet och överkroppen sänks och lyfts som en enhet ("T-form").',
      'Pressa ner hälen och återgå till upprätt position med full höftextension.',
    ],
    tips: [
      'Blicken mot golvet, lite framåt – håller nackpositionen neutral.',
      'Håll bäckenet plant (ingen rotation) under hela rörelsen.',
    ],
    mistakes: [
      'Ryggen rundar – minska rörelseomfånget tills höftstyrka och rörlighet förbättras.',
      'Bäckenet roterar öppet – håll SIAS (höftbenen) parallella mot golvet.',
    ],
    muscles: ['Gluteus maximus', 'Hamstrings', 'Erector spinae', 'Core'],
  },

  'Rumpkick stående': {
    steps: [
      'Stå på ett ben, håll en stödyta om du behöver balans initialt.',
      'Böj det fria benets knä till 90 grader och pressa foten bakåt-uppåt.',
      'Aktivera gluteus aktivt vid varje spark – känn kontraktionen.',
      'Kontrollera tillbaka utan att låta benet svänga okontrollerat.',
    ],
    tips: [
      'Rörelsens storlek är sekundär – gluteusaktiveringen är primär.',
      'Addera ett motståndsbandvar runt vristerna för ökad utmaning.',
    ],
    mistakes: [
      'Ländrygg svänger bakåt för att kompensera – håll ryggraden neutral.',
      'Hamstrings tar över istället för gluteus – tänk "tryck hälen mot taket".',
    ],
    muscles: ['Gluteus maximus', 'Hamstrings', 'Bäckenstabilisatorer'],
  },

  // ── CORE ──────────────────────────────────────────────────────────────────

  'Plankan': {
    steps: [
      'Börja i push-up position med händerna under axlarna, kroppen rak.',
      'Alternativt: stöd på underarmar med armbågarna under axlarna.',
      'Aktivera core, gluteus och quadriceps – kroppen ska vara en rak planka.',
      'Håll nacken neutral – blicken ned mot golvet.',
    ],
    tips: [
      'Kvalitet är viktigare än tid – 20 sekunder med perfekt form är bättre än 60 sekunder med svank.',
      'Andas normalt – håll inte andan.',
    ],
    mistakes: [
      'Höfterna sjunker (svankbrygg) – aktivera gluteus och core mer.',
      'Rumpan höjs som ett berg – pressa höfterna ner i linje med axlar och fötter.',
    ],
    muscles: ['Rectus abdominis', 'Transversus abdominis', 'Obliques', 'Gluteus', 'Erector spinae'],
    progressions: [
      'Grundnivå: underarms-plankan, 20–30 sekunder.',
      'Med benlyft: lyft ett ben i taget — aktiverar höftböjare och ökar kärnbelastningen.',
      'Med rotation: rotera höften till sidan växelvis — specifikt för rotationshopp.',
    ],
  },

  'Sidoplankan': {
    steps: [
      'Ligg på sidan, stöd på underarm med armbågen under axeln.',
      'Lyft höften tills kroppen bildar en rak diagonal linje.',
      'Håll det övre benet och foten staplade på det undre.',
      'Blicken framåt, höften utåt-uppåt för att motverka sjunkande.',
    ],
    tips: [
      'För ökad svårighet: lyft det övre benet till höftabduktion.',
      'Fokusera på att hålla höften lyft – undvik att sjunka ner progressivt.',
    ],
    mistakes: [
      'Höften sjunker mot golvet mitt i setet – det indikerar svag lateral kärna.',
      'Kroppen roterar framåt eller bakåt – håll bröst och höft i linje.',
    ],
    muscles: ['Obliquus externus/internus', 'Gluteus medius', 'Quadratus lumborum'],
    progressions: [
      'Grundnivå: knäna i golvet, fokus på höftlyft.',
      'Nästa steg: raka ben, full sidoplanka.',
      'Med höftlyft: lyft och sänk höften i kontrollerade reps — maximal lateral kärnbelastning.',
    ],
  },

  'Hängande benlyft': {
    steps: [
      'Häng i en stång med överkroppsstöd (pull-up-grepp) eller i armbågshängaren.',
      'Aktivera core och lyft benen kontrollerat mot bröstet eller 90 grader.',
      'Sänk kontrollerat – undvik att svänga.',
      'Undvik att svinga med höfter eller höja axlarna mot öronen.',
    ],
    tips: [
      'Börja med böjda knän om raka ben är för svårt – öka sedan till raka.',
      'Håll skulderbladen neddragna och aktivera latissimus under övningen.',
    ],
    mistakes: [
      'Svingrörelser – styrkan går till att stoppa rörelse istället för att lyfta.',
      'Ländrygg roterar bakåt kraftigt – core-styrka behöver byggas upp gradvis.',
    ],
    muscles: ['Rectus abdominis', 'Höftböjare (iliopsoas)', 'Obliques', 'Latissimus dorsi'],
    progressions: [
      'Grundnivå: böjda knän till bröstet.',
      'Nästa steg: raka ben till 90°.',
      'Med rotation: vrid benen till sidan i toppen — koordinerar kärna och höftböjare för rotationshopp.',
    ],
  },

  'Medicinbollsrotation': {
    steps: [
      'Stå med fötterna axelbrett, håll medicinboll framför bröstet.',
      'Rotera överkroppen explosivt till ena sidan medan höfterna stannar relativt stilla.',
      'Låt bollen följa rotationen – håll armarna lätt böjda.',
      'Rotera tillbaka och repetera till båda sidor.',
    ],
    tips: [
      'Kraft kommer från core-rotation, inte från armarna.',
      'Öka rotationshastigheten successivt – börja långsamt för att lära in rörelsebanorna.',
    ],
    mistakes: [
      'Armarna driver rörelsen istället för kärnan – känn initieringen från obliquerna.',
      'Höfterna roterar med i för stor grad – de ska vara relativt stabila.',
    ],
    muscles: ['Obliques', 'Transversus abdominis', 'Erector spinae', 'Latissimus dorsi'],
  },

  'Kabelrotation': {
    steps: [
      'Stå sidledes mot kabelmaskinen, tag i handtaget med båda händer.',
      'Rotera överkroppen bort från maskinen i en kontrollerad, kraftfull rörelse.',
      'Håll armarna i samma position – rotationen sker i bål och höft.',
      'Återgå kontrollerat till startposition – det är det excentriskt viktiga fasen.',
    ],
    tips: [
      'Tröskelbelastning: hitta en vikt som utmanar men inte kompromissar med form.',
      'Kan göras low-to-high (nedre till övre) för rotationsinitiering som liknar hoppet.',
    ],
    mistakes: [
      'Rygg rundar under rotationen – håll bröstet uppe.',
      'Armbågar böjer sig – håll armarna konsekvent böjda eller raka.',
    ],
    muscles: ['Obliques', 'Transversus abdominis', 'Latissimus dorsi', 'Gluteus'],
  },

  'Bål-rotation med medicinboll': {
    steps: [
      'Stå eller sitt med rak rygg, håll bollen nära bröstet.',
      'Rotera explosivt till sidan och kasta bollen mot vägg eller partner.',
      'Ta emot bollen och rotera tillbaka till startposition.',
      'Håll höfterna relativt stilla och låt thorax driva rotationen.',
    ],
    tips: [
      'Rotationsrörelserna i konståkning initieras från thorax – öva det mönstret.',
    ],
    mistakes: [
      'Höfterna roterar med för mycket – fokusera på isolerad thoraxrotation.',
    ],
    muscles: ['Obliques', 'Serratus anterior', 'Transversus abdominis'],
  },

  // ── VADEN & FOTLEDEN ─────────────────────────────────────────────────────

  'Vadhöjningar på ett ben': {
    steps: [
      'Stå på ett ben på kanten av ett trappsteg eller en tjock bok – hälen hänger fritt.',
      'Sänk hälen kontrollerat under trappstegsnivån (excentrisk fas).',
      'Pressa upp på tå så högt som möjligt (koncentrisk fas).',
      'Håll i toppen 1 sekund och sänk sedan tillbaka.',
    ],
    tips: [
      'Den excentriskt långsamma nedsänkningen (3–5 sek) bygger styrka snabbare än det koncentriska lyftet.',
      'Håll ett finger mot en vägg för balans – inte för att avlasta vikt.',
    ],
    mistakes: [
      'Rörelseomfånget är för litet – gå hela vägen ner och hela vägen upp.',
      'Rörelsen sker för snabbt utan excentrisk kontroll – sakta ner.',
    ],
    muscles: ['Gastrocnemius', 'Soleus', 'Flexor hallucis longus (tåböjaren)'],
  },

  'Tåhöjning': {
    steps: [
      'Stå på ett eller båda ben på ett upphöjt underlag med hälen frisvävande.',
      'Pressa upp på tå maximalt och håll 1–2 sekunder.',
      'Sänk kontrollerat och lägg lite vikt under trappstegsnivån.',
      'Repetera med fokus på full rörelsebanor.',
    ],
    tips: [
      'I konståkning är pick-kraften avgörande för toe-loop och flip – tung enbenståhöjning är direkt specifik träning.',
    ],
    mistakes: [
      'Lyftet sker från knät istället för ankeln – håll knät lätt böjt men stabilt.',
    ],
    muscles: ['Gastrocnemius', 'Soleus', 'Peroneusmusklerna'],
    progressions: [
      'Grundnivå: båda ben, fullt rörelseomfång.',
      'Nästa steg: ett ben, kroppsvikt.',
      'Med vikt: håll en hanteln eller använd viktbälte — specifikt för toe loop och flip.',
    ],
  },

  'Vadpress': {
    steps: [
      'Sätt dig i vadpressmaskinen med fotbollen placerad på plattan och hälen frisvävande.',
      'Pressa plattan uppåt med tårna – full plantarflexion.',
      'Sänk kontrollerat under neutralt läge och låt hälen sjunka.',
      'Repetera med jämnt tempo.',
    ],
    tips: [
      'Maskinen tillåter tyngre belastning som bygger maximal plantarflexionsstyrka.',
    ],
    mistakes: [
      'Knäna låses i full extension – håll en liten böjning i knäna.',
    ],
    muscles: ['Gastrocnemius', 'Soleus'],
  },

  'Fotledsstabilitet': {
    steps: [
      'Bind ett motståndsband runt foten och fäst det i en stabil punkt.',
      'Öva dorsal- och plantarflexion (upp och ner) samt inversion/eversion (kantarbete).',
      'Kontrollera rörelsebanorna långsamt med fokus på yttre och inre kanten.',
      'Kombinera med ettbensbalans på instabilt underlag för ökad svårighet.',
    ],
    tips: [
      'Inre och yttre kantstabilitet är direkt kopplat till skatestyrkans kantarbete.',
    ],
    mistakes: [
      'Bandmotstånd är för stort – välj ett motstånd som tillåter full kontroll.',
    ],
    muscles: ['Peroneus longus/brevis', 'Tibialis anterior', 'Intrinsic fotmuskler'],
  },

  // ── BALANS ────────────────────────────────────────────────────────────────

  'Ettbensbalans': {
    steps: [
      'Stå på ett ben med lätt böjt knä – inte låst i full extension.',
      'Håll blicken på en fixerad punkt i ögonhöjd.',
      'Tillåt foten att arbeta aktivt och hitta balansen, undvik att gripa med tårna.',
      'Progressioner: blunda, instabilt underlag, arm- eller benrörelser under balansen.',
    ],
    tips: [
      'Känslan i foten är viktigast – en aktiv, "levande" fot ger bättre balans än ett stelnat ben.',
      'Piruettbalansen byggs bäst med daglig träning, inte sällan tunga pass.',
    ],
    mistakes: [
      'Knät låser i full extension – det stänger av proprioceptorerna i ledkapseln.',
      'Griper med tårna mot underlaget – försöker kontrollera istället för att balansera.',
    ],
    muscles: ['Fotledsmuskulatur', 'Tibialis anterior', 'Peroneus', 'Gluteus medius', 'Core'],
    progressions: [
      'Grundnivå: stabil yta, ögon öppna.',
      'Nästa steg: blunda — eliminerar visuell feedback.',
      'Med rotation: rotera överkroppen 90° medan du håller balansen.',
      'Positionsbyten: växla mellan upprätt, böjt knä och djup squat på ett ben.',
      'I extrem position: håll benet utsträckt högt bakåt eller åt sidan.',
    ],
  },

  // ── HOPPTEKNIK & KONDITION ────────────────────────────────────────────────

  'Hoppreppa': {
    steps: [
      'Håll händtagen avslappnat i handflatan, armbågarna nära kroppen.',
      'Hoppa på framfoten/tårna – undvik att landa på hälarna.',
      'Rotera repet med handlederna, inte axlarna.',
      'Håll ett lätt rytmiskt hopp – lyftet ska vara minimalt (ca 2–3 cm).',
    ],
    tips: [
      'Hoppreppa är utmärkt för att bygga avhoppstiming och explosivitet specifikt för konståkningshoppens rytm.',
      'Dubbelunder (repet passerar under fötterna dubbelt per hopp) tränar rotationshastighet.',
    ],
    mistakes: [
      'Hoppar för högt – bränn onödig energi och tappar rytm.',
      'Landar på hälarna – ger stötar och tränar fel muskelgrupper.',
    ],
    muscles: ['Gastrocnemius', 'Soleus', 'Quadriceps', 'Core'],
    progressions: [
      'Grundnivå: normal takt, båda ben.',
      'Med enbenhopp: hoppa på ett ben — bygger specifik avhoppsstyrka.',
      'Med dubbelunder: repet passerar under fötterna dubbelt per hopp — ökar rotationshastighet.',
    ],
  },

  'Sidohopp': {
    steps: [
      'Stå på ett ben, hoppa lateralt och landa på det andra benet.',
      'Mjuklanda med böjt knä direkt vid nedkomsten – absorbera stöten.',
      'Håll bröst upprätt och knät i linje med tårna vid landning.',
      'Öka distansen och hastigheten successivt.',
    ],
    tips: [
      'Simulerar kantövergången och den laterala kraften i avhoppet.',
      'Fokusera på landningskvalitet, inte hoppdistans.',
    ],
    mistakes: [
      'Knäet kollapsar inåt vid landning – ett tecken på svag gluteus medius.',
      'Landar stelt med rakt knä – riskerar knäledsproblem.',
    ],
    muscles: ['Gluteus medius', 'Quadriceps', 'Vadmuskulatur', 'Core'],
    progressions: [
      'Grundnivå: kort distans, fokus på mjuk landning.',
      'Plyometrisk: maximera distansen och minimera marktiden.',
      'Inåthopp: hoppa diagonalt inåt — tränar insidekantens explosivitet för salchow och flip.',
      'Squat jump: landa i djup squat — specifikt för flying sit spin.',
    ],
  },

  'Bounding': {
    steps: [
      'Spring med explosiva hopp – pressa av maximalt per steg.',
      'Sväng armarna kraftfullt och koordinerat med benrörelsen.',
      'Landa mjukt på framfoten och omvandla rörelseenergin till nästa steg.',
      'Fokusera på markavtryckstid och höjd per steg, inte hastighet.',
    ],
    tips: [
      'Bounding tränar den explosiva kraft per steg som konståkningshoppet kräver.',
      'Addera rotation (90 grader per steg) för rotationsspecifik träning.',
    ],
    mistakes: [
      'Stegen är för snabba och ytliga – sänk frekvensen och maximera kraft per steg.',
      'Knät är rakt vid avtrycket – böj knät till ca 90 grader för optimal kraftutveckling.',
    ],
    muscles: ['Gluteus maximus', 'Quadriceps', 'Hamstrings', 'Gastrocnemius'],
  },

  'Boxhopp': {
    steps: [
      'Stå framför en låda (40–60 cm att börja med), fötterna höftbrett.',
      'Böj knäna i nedladdningsfas och sving armarna bakåt.',
      'Pressa av explosivt och landa mjukt ovanpå boxen med böjda knän.',
      'Stig ner kontrollerat – hoppa inte ner utan att ha tränat landningsstyrka.',
    ],
    tips: [
      'Landningskvalitet är viktigare än boxhöjd – välj en höjd där du kan landa mjukt.',
      'Ettbenslandning ökar utmaningen och specificiteten mot konståkningshoppets landning.',
    ],
    mistakes: [
      'Hoppar ner istället för att stiga ner – landningsstöten är onödigt hög.',
      'Landar på tårna utan att hälen nuddar boxen – ökar skaderisken.',
    ],
    muscles: ['Quadriceps', 'Gluteus maximus', 'Gastrocnemius', 'Core'],
    progressions: [
      'Grundnivå: låg box (30–40 cm), tvåbenslandning.',
      'Nästa steg: högre box, fokus på mjuk landning.',
      'Med ettbenslandning: landa på ett ben direkt — specifikt för loop och axel.',
    ],
  },

  'Sprint-intervaller': {
    steps: [
      'Värm upp 5–10 minuter lätt jogg.',
      'Sprint maximalt i 15–30 meter eller 4–6 sekunder.',
      'Vila 30–60 sekunder (aktiv eller passiv) och repetera 6–10 gånger.',
      'Avsluta med 5 minuters lugn jogg och stretching.',
    ],
    tips: [
      'Sprinthastigheten ska vara maximal – om du inte tröttas tar du inte tillräckliga pauser.',
      'Uppförsbacke-sprinter minskar belastning på knäna och ökar gluteus-aktivering.',
    ],
    mistakes: [
      'Vila för kort – varje sprint ska vara maximal, inte submaximal.',
      'Löper med för lång steglängd – effektiv sprintteknik har hög steghastighet.',
    ],
    muscles: ['Quadriceps', 'Hamstrings', 'Gluteus maximus', 'Gastrocnemius', 'Core'],
  },

  'Plyometriska sidohopp': {
    steps: [
      'Stå på ett ben, hoppa lateralt så långt du kan.',
      'Landa mjukt och kontrollerat på det andra benet med böjt knä.',
      'Håll balansen 1–2 sekunder och hoppa tillbaka.',
      'Öka distansen och minska paustiden successivt.',
    ],
    tips: [
      'Lateral explosive kraft är direkt specifik mot avhoppet i axel och loop.',
    ],
    mistakes: [
      'Landning med rakt knä – absorbera stöten med bentechjnik, inte med leden.',
    ],
    muscles: ['Gluteus medius', 'Quadriceps', 'Vadmuskulatur'],
  },

  // ── HAMSTRINGS & HIP FLEXOR ───────────────────────────────────────────────

  'Hamstringsträck': {
    steps: [
      'Stå med ett ben utsträckt på en upphöjd yta (bänk eller liknande) eller ligg på rygg.',
      'Håll ryggraden neutral och böj från höften framåt – inte från ryggen.',
      'Känn sträcken längs baksidan av låret, inte i ryggen.',
      'Håll 30–60 sekunder och varva gärna aktiv och passiv sträckning.',
    ],
    tips: [
      'Håll knät lätt böjt om sträcken är för intensiv – öka gradvis mot rakt ben.',
      'Andas ut och slappna av i hamstrings vid varje utandning.',
    ],
    mistakes: [
      'Rundar ryggen för att nå tårna – sträcker ryggen, inte hamstrings.',
      'Håller för kort tid – muskelns viskoelasticitet kräver minst 30 sekunder.',
    ],
    muscles: ['Biceps femoris', 'Semitendinosus', 'Semimembranosus', 'Gluteus maximus'],
    progressions: [
      'Grundnivå: stående, ett ben på bänk — knä lätt böjt.',
      'Nästa steg: rakt ben, böj från höften med neutral rygg.',
      'Mot väggen: ligg på rygg och tryck ett ben rakt upp mot väggen — extrem längd för charlotte spiral.',
    ],
  },

  'Hip flexor-sträck': {
    steps: [
      'Gå ner i ett djupt utfall med bakre knäet i golvet (låg riddarposition).',
      'Skjut höften framåt och känn sträcken längs framsidan av bakre låret och höften.',
      'Håll överkroppen upprätt eller luta lätt bakåt för djupare sträck.',
      'Håll 30–60 sekunder per sida och upprepa 2–3 gånger.',
    ],
    tips: [
      'Aktivera gluteus på det bakre benet – det fördjupar hip flexor-sträcken.',
      'Addera en lateral lutning för att inkludera quadratus lumborum.',
    ],
    mistakes: [
      'Svankrygg istället för hipflexor-rörlighet – aktivera core och tilt bäckenet bakåt.',
      'Framknäet överstiger tårna kraftigt – flytta fram fotpositionen.',
    ],
    muscles: ['Iliopsoas', 'Rectus femoris', 'Tensor fasciae latae'],
    progressions: [
      'Grundnivå: halvknäböj, lätt framskjuten höft.',
      'Djup utfall: bakre knäet mot golvet, höft framåt.',
      'Med bröstöppning: lyft armarna bakåt i toppen — frigör hela framsidan för bakåtböjningar.',
    ],
  },

  'Höftböjarsträck': {
    steps: [
      'Gå ner i ett utfall eller en halvknäböj och känn sträcken i framsidan av bakre höften.',
      'Håll positionen med öppen höft och neutral rygg.',
      'Addera armlyft uppåt eller lateral lutning för ökad sträck.',
    ],
    tips: [
      'Regelbundenhet är viktigare än intensitet – daglig kort sträck är bättre än sällan intensiv.',
    ],
    mistakes: [
      'Svankrygg kompensation – tänk "tilt bäckenet bakåt" för att isolera höftböjarna.',
    ],
    muscles: ['Iliopsoas', 'Rectus femoris'],
  },

  'Quadssträck': {
    steps: [
      'Stå på ett ben, ta tag i ankeln på det böjda benet och dra hälen mot rumpan.',
      'Håll knäna bredvid varandra och stå upprätt – undvik att luta framåt.',
      'Tryck höften framåt för djupare sträck om rörligheten tillåter.',
      'Håll 30–60 sekunder per sida.',
    ],
    tips: [
      'Liggande quadssträck (på mage) ger djupare sträck med mindre krav på balans.',
      'Sträck alltid quadriceps efter intensiva benpass för att återställa töjbarhet.',
    ],
    mistakes: [
      'Knäet flyr bakåt och ut från kroppen – håll knäna samlade.',
      'Höften svänger framåt utan sträck – aktivera gluteus för att neutralisera.',
    ],
    muscles: ['Rectus femoris', 'Vastus lateralis/medialis', 'Tensor fasciae latae'],
  },

  'Liggande quadssträck': {
    steps: [
      'Ligg på magen med ansiktet mot golvet.',
      'Ta tag i ena ankeln och dra hälen mot rumpan.',
      'Tryck höften lätt mot golvet för djupare sträck.',
      'Håll 30–60 sekunder och byt sida.',
    ],
    tips: ['Djupare och mer isolerad sträck av rectus femoris än stående variant.'],
    mistakes: ['Lyfter höften från golvet – minskar sträcken av höftböjardelen av quadriceps.'],
    muscles: ['Rectus femoris', 'Iliopsoas'],
  },

  // ── HÖFT & PIGEON POSE ────────────────────────────────────────────────────

  'Pigeon pose': {
    steps: [
      'Börja i push-up position. Dra fram ett knä mot händerna och placera underbenet vinkelt mot golvet.',
      'Sänk bakre benet mot golvet – försök att hålla höften plan mot golvet.',
      'Luta överkroppen framåt för djupare sträck av yttre höften (piriformis).',
      'Håll 60–90 sekunder per sida. Andas djupt och slappna av.',
    ],
    tips: [
      'Placera en kudde under stödbenet om höften inte når golvet.',
      'Aktiv pigeon pose (håll positionen med muskelkontroll) bygger dessutom stabilitet.',
    ],
    mistakes: [
      'Höften roterar åt sidan – sträva efter att hålla bäckenet neutralt.',
      'Håller för kort tid – piriformis behöver minst 60 sekunder för att ge med sig.',
    ],
    muscles: ['Piriformis', 'Gluteus medius/minimus', 'Extern höftrotationsgruppen'],
  },

  'Piriformissträck': {
    steps: [
      'Ligg på rygg, kors ett ben över det andra (figur-4-position).',
      'Drag det undre benet mot bröstet och känn sträcken i det korsade benets höft.',
      'Alternativ: figur-4 sittande (upprättare stretch).',
      'Håll 45–90 sekunder per sida.',
    ],
    tips: [
      'Piriformis är hårt belastad i alla kantövergångar – sträck det regelbundet.',
      'Andas ut och slappna av i höften vid varje utandning.',
    ],
    mistakes: [
      'Foten på det undre benet lutar inåt – håll foten flexad för att skydda knäleden.',
    ],
    muscles: ['Piriformis', 'Externa höftrotatorer', 'Gluteus medius'],
  },

  'Adduktorsträck': {
    steps: [
      'Sitt med ryggen rak och fotsulorna mot varandra (fjärilsposition).',
      'Tryck knäna nedåt mot golvet med händerna eller albusen och luta lätt framåt från höften.',
      'Alternativ: sidoutfall med ett ben utsträckt och tryck höften mot det böjda benet.',
      'Håll 45–60 sekunder.',
    ],
    tips: [
      'Insidekantsarbetet i konståkning belastar adduktorerna – sträck dem dagligen.',
    ],
    mistakes: [
      'Rundar ryggen för att nå fram – håll bröst lyft och böj från höften.',
    ],
    muscles: ['Adduktor longus/magnus/brevis', 'Gracilis', 'Pectineus'],
    progressions: [
      'Grundnivå: fjärilsposition sittande, händerna på knäna.',
      'Nästa steg: luta framåt från höften med rak rygg.',
      'Djup variant: ligg på rygg med benen i fjärilsposition mot golvet.',
    ],
  },

  'Straddle': {
    steps: [
      'Sitt med benen utsträckta åt var sitt håll – maximalt omfång.',
      'Håll ryggraden neutral och luta framåt från höften mot golvet.',
      'Börja med händer framför dig och gå gradvis ner på underarmarna.',
      'Håll 60–120 sekunder. Undvik att studsa.',
    ],
    tips: [
      'Addera aktiv abduktion (lyft benen ytterligare med muskelkraft) för att bygga rörlighet med styrka.',
    ],
    mistakes: [
      'Rundar ländryggen kraftigt – placera en kudde under rumpan för att luta bäckenet framåt.',
    ],
    muscles: ['Adduktorer', 'Hamstrings', 'Hip flexors', 'Inre lårens muskulatur'],
  },

  // ── VADEN & FOTLED (STRETCH) ──────────────────────────────────────────────

  'Vadssträck': {
    steps: [
      'Stå mot en vägg med ett ben utsträckt bakåt, hälen i golvet.',
      'Luta dig mot väggen tills du känner sträcken i vaden.',
      'Rak vadssträck: rak knäled tränar gastrocnemius.',
      'Böjt knä: böj bakknäet lätt för att träna soleus djupare.',
      'Håll 45–60 sekunder per position och ben.',
    ],
    tips: [
      'Båda delar av vadkomplexet (gastrocnemius och soleus) behöver sträckas separat.',
    ],
    mistakes: [
      'Hälen lyfter från golvet – tryck hälen aktivt i marken.',
    ],
    muscles: ['Gastrocnemius', 'Soleus', 'Achillessenan'],
  },

  'Djup squat-sträck': {
    steps: [
      'Stå med fötterna höftbrett eller bredare, tårna lätt utåt.',
      'Sänk ner i djup squat och håll positionen – använd händerna mot golvet för stöd initialt.',
      'Öppna knäna utåt med armbågarna och tryck bröst uppåt.',
      'Håll 30–90 sekunder, andas djupt.',
    ],
    tips: [
      'Hälar i golvet är målet – addera ett upphöjt underlag under hälarna om det behövs.',
    ],
    mistakes: [
      'Knäna kollapsar inåt – pressa dem aktivt utåt med armbågar eller händer.',
    ],
    muscles: ['Adduktorer', 'Hip flexors', 'Fotledsmuskulatur', 'Erector spinae'],
  },

  // ── ÖVERKROPP & RYGG (STRETCH) ────────────────────────────────────────────

  'Ryggrotation liggande': {
    steps: [
      'Ligg på rygg med knäna böjda och fötterna i golvet.',
      'Låt knäna falla till ena sidan mot golvet med kontrollerat tempo.',
      'Sträck ut den mot taket pekande armen åt motsatt håll för ökad thorax-sträck.',
      'Håll 30–60 sekunder per sida. Andas djupt.',
    ],
    tips: [
      'Thorax-rotation är avgörande för konststens framsidan – sträck det dagligen.',
    ],
    mistakes: [
      'Axlarna lyfter från golvet – håll dem i kontakt med underlaget.',
    ],
    muscles: ['Erector spinae', 'Multifidus', 'Thoracal ledkapslar', 'Obliques'],
  },

  'Thoraxrotation': {
    steps: [
      'Sitt på hälarna (barnposition) eller på alla fyra.',
      'Placera en hand bakom huvudet och rotera överkroppen – armbågen mot taket.',
      'Håll höfterna stilla och låt bröstryggen driva rotationen.',
      'Repetera 10 gånger per sida med long, kontrollerade rörelser.',
    ],
    tips: [
      'Thoraxrotation är specifikt tränat för armsvingen och rotationsinitiering i alla hopp.',
    ],
    mistakes: [
      'Ländrygg tar över – sätt en hand mot ländryggen för feedback.',
    ],
    muscles: ['Thoracal erector spinae', 'Multifidus', 'Obliques', 'Serratus anterior'],
  },

  'Bröststräck': {
    steps: [
      'Stå i en dörröppning med armarna i 90-gradersvinkel mot väggen.',
      'Luta kroppen framåt tills du känner sträcken i bröstet och framsidan av axlarna.',
      'Alternativ: ligg på foam roller längs ryggraden – armarna sträckta åt sidan.',
      'Håll 45–60 sekunder.',
    ],
    tips: [
      'Bröststräck öppnar upp armsvingen, som är direkt kopplad till rotationsinitieringen i hoppet.',
    ],
    mistakes: [
      'Kompenserar med svankrygg istället för bröstöppning – aktivera core.',
    ],
    muscles: ['Pectoralis major/minor', 'Anterior deltoid', 'Biceps brachii'],
  },

  'Axelsträck': {
    steps: [
      'Dra ett arm tvärs över bröstet med hjälp av den andra armen.',
      'Håll axeln nertryckt – inte uppryckt mot örat.',
      'Alternativ: sträck armen rakts upp och böj armbågen bakom huvud för triceps/bakre axel.',
      'Håll 30–45 sekunder per sida.',
    ],
    tips: [
      'Axelrörlighet påverkar armpositionens elegans och piruettaxeln direkt.',
    ],
    mistakes: [
      'Axeln rycker upp mot örat – håll den aktivt nertryckt.',
    ],
    muscles: ['Posterior deltoid', 'Trapezius', 'Rhomboids', 'Teres minor'],
  },

  'Camel pose': {
    steps: [
      'Knäböj med knäna höftbrett, lägg händerna på hälarna med tummen utåt.',
      'Pressa höften framåt och lyft bröstet mot taket – bakåtböjning.',
      'Håll nacken neutral (blick framåt/uppåt) eller låt den hänga bakåt försiktigt.',
      'Håll 20–40 sekunder. Kom upp ur positionen med stöd av händerna mot ländryggen.',
    ],
    tips: [
      'Börja med händerna på ländryggen som stöd om djup bakåtböjning är utmanande.',
      'Andas aktivt i positionen – bröstkorgsexpansionen ökar sträcken.',
    ],
    mistakes: [
      'Komprimerar ländryggen istället för att böja bröstryggen – fokusera på thorax-extension.',
      'Tår på golvet gör det svårt att nå hälarna – placera en filt under knäna för att minska distansen.',
    ],
    muscles: ['Rectus abdominis', 'Hip flexors', 'Thoracal erector spinae', 'Pectoralis'],
  },

  // ── RYGGSTÄRKARE ─────────────────────────────────────────────────────────

  'Ryggstärkare': {
    steps: [
      'Ligg på magen med armarna utsträckta framåt (Supermanposition).',
      'Lyft armar, bröst och ben från golvet samtidigt – håll nacken neutral.',
      'Håll positionen 3–5 sekunder och sänk kontrollerat.',
      'Alternativ: ryggextension i maskin med kontrollerat tempo.',
    ],
    tips: [
      'Aktivera gluteus aktivt vid lyftet – det skyddar ländryggen.',
      'Kombinera med extension för kamelposition på isen.',
    ],
    mistakes: [
      'Nacken trycks bakåt kraftigt – håll den i linje med ryggraden.',
    ],
    muscles: ['Erector spinae', 'Multifidus', 'Gluteus maximus', 'Hamstrings'],
  },

  'Arabesk-hållningsserier': {
    steps: [
      'Stå på ett ben i arabeskposition: överkropp parallell eller lutad mot golvet, fritt ben bakåt-uppåt.',
      'Håll positionen i ökande tidsintervaller: 10, 20, 30 sekunder.',
      'Fokusera på att hålla det fria benet högt och bröst lyft.',
      'Aktivera gluteus och ryggextensorer aktivt.',
    ],
    tips: [
      'Direktspecifik träning för spiral och camel spin – positionen är identisk.',
    ],
    mistakes: [
      'Benet sjunker successivt – träna med motståndsband för att bygga hållstyrka.',
    ],
    muscles: ['Gluteus maximus', 'Erector spinae', 'Hamstrings', 'Hip extensors'],
  },

  // ── IT-BAND & HÖFTROTATORER ───────────────────────────────────────────────

  'IT-band-sträck': {
    steps: [
      'Stå med ena benet korsadt bakom det andra.',
      'Luta överkroppen åt sidan mot det bakre benets sida.',
      'Känn sträcken längs utsidan av det framre benet (IT-bandet).',
      'Håll 45–60 sekunder per sida.',
    ],
    tips: [
      'Foam roller längs IT-bandet kan vara ett effektivt komplement.',
    ],
    mistakes: [
      'Roterar höften framåt – håll dem plan mot fronten.',
    ],
    muscles: ['Tensor fasciae latae', 'IT-band', 'Gluteus medius'],
  },

  'Höftrotationssträck': {
    steps: [
      'Ligg på rygg och dra ett böjt knä mot motsatt axel med handstöd.',
      'Känn sträcken i yttre höften och sätespartiet.',
      'Håll 30–60 sekunder per sida.',
    ],
    tips: ['Kombinera med piriformissträck för fullständig yttre höftrörlighet.'],
    mistakes: ['Axeln lyfter från golvet – håll den i kontakt med underlaget.'],
    muscles: ['Piriformis', 'Gluteus medius/minimus', 'Yttre höftrotatorer'],
    progressions: [
      'Grundnivå: liggande, knä mot motsatt axel.',
      'Med utåtrotation: sträck benet rakt ut åt sidan med foten flexad — specifikt för spread eagle och mohawk.',
    ],
  },

  'Laterala stegserier': {
    steps: [
      'Stå med fötterna höftbrett, knäna lätt böjda i atletisk position.',
      'Ta snabba sidosteg — håll höfterna låga och kroppen stabil.',
      'Fokusera på markavtrycket och kantövergångarna.',
      'Variera med rotation av överkroppen eller tvärsteg (crossover).',
    ],
    tips: [
      'Simulerar glidningens rytm och kantövergångarna direkt.',
      'Håll blicken framåt — undvik att titta ner på fötterna.',
    ],
    mistakes: [
      'Höfterna reser sig vid varje steg — håll dem låga och stabila.',
      'Stegen är för långa — korta, snabba steg är mer specifika.',
    ],
    muscles: ['Gluteus medius', 'Adduktorer', 'Quadriceps', 'Vadmuskulatur'],
    progressions: [
      'Grundnivå: långsamma steg med fokus på teknik.',
      'Nästa steg: ökad hastighet med bibehållen höftlåsning.',
      'Med rotation: rotera överkroppen 90° vid varje stopp — tränar kontrarotation för svängar.',
      'Med stopp: bromsa abrupt efter 3–4 steg — kantprecision för bracket och rocker.',
    ],
  },


  // ── TEKNIK ───────────────────────────────────────────────────────────────────

  'Hoppimitation': {
    steps: [
      'Börja med ingångsstegen för det aktuella hoppet — tre-steget, mohawk eller rak bakåtglidning.',
      'Utför avhoppets armsvingsrörelse och fria benets uppsvingning på exakt samma sätt som på is.',
      'Hoppa uppåt (inte framåt) och dra snabbt ihop armarna mot bröstkorgen för att simulera rotationen.',
      'Landa på ett ben i arabesque-position: avhoppsbenet sträckt, fria benet bakåt, armarna i check-out.',
      'Håll landningsbalansen i 2–3 sekunder innan du relaxar.',
    ],
    tips: [
      'Fokusera på ett moment i taget: först ingången, sedan avhoppet, till sist landningen — bygg ihop gradvis.',
      'Avhoppets riktning ska vara uppåt — känn att du driver mot taket, inte framåt i rummet.',
      'Armpull-in avgör rotationshastigheten — ju kompaktare position desto snabbare rotation.',
    ],
    mistakes: [
      'Hoppar framåt istället för uppåt — missar den vertikala axeln som hoppet kräver.',
      'Öppnar armarna för tidigt i luften — förlorar rotationshastighet mitt i hoppet.',
      'Landar på två ben — övar inte den ettbensbalans och check-out som avgör hoppet på is.',
    ],
    muscles: ['Gluteus maximus', 'Quadriceps', 'Vadmuskulatur', 'Core/bålmuskulatur', 'Höftböjare'],
    progressions: [
      'Grundnivå: öva ingång och avhopp utan att hoppa — fokus på rörelsemönstret.',
      'Nästa steg: lägg till litet hopp och förenkla rotationen (t.ex. ett halvt varv).',
      'Avancerat: öva hela hoppet med hoppbälte eller spegel för att ge feedback på axelpositionen.',
    ],
  },

  'Landningsposition': {
    steps: [
      'Stå på ett ben med lätt böjt knä, överkroppen upprätt och blicken framåt.',
      'Sträck det fria benet rakt bakåt i arabesque-linje — höft, knä och fot i en rak linje.',
      'Håll den ledande armen ut till sidan på höfthöjd, den bakre armen bakåt längs kroppen.',
      'Balansera i positionen i minst 3 sekunder med kontrollerad andning.',
      'Öva sedan att "anlända" till positionen från ett litet hopp: landa mjukt och absorbera stöten med knäet.',
    ],
    tips: [
      'Check-out-armen (framåt) styr balansen — känn att du kan vila hela vikten på den linjen.',
      'Foten ska landa på framfoten för att absorbera stöten mjukt, hälen sänks sedan ner.',
      'Blicken pekar i riktningen du landade ifrån — inte ner i marken.',
    ],
    mistakes: [
      'Fria benet sjunker ner direkt — tränar inte den aktiva höftkontrollen som behövs på is.',
      'Överkroppen lutar framåt — tappar den upprätta positionen som räknas i poängsättningen.',
      'Knäet på stödbenet är rakt — ska vara lätt böjt för att absorbera kraft och ge balans.',
    ],
    muscles: ['Gluteus medius', 'Gluteus maximus', 'Core/bålmuskulatur', 'Höftabduktorer', 'Vadmuskulatur'],
    progressions: [
      'Grundnivå: statisk balans i positionen — håll 10 sekunder utan att vackla.',
      'Nästa steg: landa till positionen från ett litet hopp på stället.',
      'Avancerat: landa från hoppimitation med full ingång och avhoppsrörelse.',
    ],
  },

  'Rotationsövning': {
    steps: [
      'Stå med fötterna höftbrett isär, armarna utsträckta rakt ut från sidorna.',
      'Dra snabbt in armarna tätt mot bröstkorgen och korslägg dem — känn hur rotationshastigheten ökar.',
      'Rotera på ett ben (eller båda) och öva på att kontrollera hastigheten med armarna.',
      'Sträck ut armarna igen för att bromsa, och avsluta med en kontrollerad stopp.',
      'Öva med spegel: axlarna ska stanna parallellt med horisonten, inte luta.',
    ],
    tips: [
      'Känslan av arm-pull-in är kärnan i all rotation på is — ju kompaktare, desto snabbare.',
      'Håll blicken fix under så länge som möjligt (spotting) för att undvika yrsel.',
      'Kärnmuskulaturen håller axlarna horisontala — aktivera buken under hela rörelsen.',
    ],
    mistakes: [
      'Armarna är inte helt intill kroppen — halv pull-in ger halv rotationshastighet.',
      'Axlarna lutar snett — snedvrider hela rotationsaxeln, ser ut som en "screw" på is.',
      'Stannar rotationen med fötterna istället för armarna — minskar kontrollen.',
    ],
    muscles: ['Core/bålmuskulatur', 'Obliquus (sneda bukmusklerna)', 'Latissimus dorsi', 'Skuldermuskulatur'],
    progressions: [
      'Grundnivå: öva arm-pull på plats stående utan rotation — känn muskelaktiveringen.',
      'Nästa steg: rotera på båda ben med arm-pull, fokus på att hålla axlarna horisontala.',
      'Avancerat: rotera på ett ben och träna på att bromsa exakt på en markerad punkt.',
    ],
  },

  'Ingångssteg': {
    steps: [
      'Välj det ingångsmönster som är aktuellt (t.ex. tre-steget, kontra eller rak bakåtglidning).',
      'Gå igenom fotrörelserna långsamt, en fot i taget, med fokus på viktöverföring.',
      'Öva på att hålla överkroppen stilla medan benen arbetar — inga onödiga axelrörelser.',
      'Öka successivt till normal hastighet och lägg till armsvingen som leder in i hoppet.',
      'Avsluta alltid med avhoppets startposition: rätt kant (eller rätt fot) och axelposition.',
    ],
    tips: [
      'Ingången bestämmer avhoppsaxeln — en skev ingång ger ett skadat hopp redan innan avhoppet.',
      'Markera rörelsemönstret i slow motion framför en spegel för att kontrollera höftpositionen.',
      'Kroppen ska vara "laddad" vid sista steget — lätt böjt knä, inte rakt.',
    ],
    mistakes: [
      'Axlarna roterar för tidigt — förspänner hoppet och gör avhoppet oförutsägbart.',
      'Viktöverföringen är för snabb — ger inte tid för kanten att bygga upp avhoppskraften.',
      'Blicken tittar ner på fötterna — tappar rumsorienteringen och gör det svårare på is.',
    ],
    muscles: ['Gluteus medius', 'Adduktorer', 'Quadriceps', 'Core/bålmuskulatur'],
    progressions: [
      'Grundnivå: öva varje steg separat, stillastående, med fokus på fotsättning.',
      'Nästa steg: koppla ihop stegen i full sekvens i slow motion.',
      'Avancerat: lägg till avhoppsrörelsen i slutet och öva övergången sömlöst.',
    ],
  },

  'Mohawk-sekvens': {
    steps: [
      'Stå med tårna pekande utåt i öppen position, vikten jämnt fördelad.',
      'Börja glida (eller gå) framåt på en fot med utåtroterat höftläge.',
      'Utför mohawk-steget: lyft bakfoten och placera den intill stödfotens häl med tårna pekande bakåt.',
      'Överför vikten till den nya foten och glid bakåt — höfterna och axlarna ska byta riktning mjukt.',
      'Kontrollera axelns kontraposition: ledande axeln håller emot för att inte öppna för tidigt.',
    ],
    tips: [
      'Mohawken är ett spegelbyte — föreställ dig att du speglar din rörelse exakt vid fotbytet.',
      'Det är höften som roterar i mohawken, inte axlarna — håll axlarna parallella med rörelselinjen.',
      'Kanten just efter fotbytet avgör ingången till hoppet — öva att hitta den direkt.',
    ],
    mistakes: [
      'Axlarna öppnar sig vid fotbytet — ger för tidig rotation och ett okontrollerat avhopp.',
      'Fotbytet sker för långt ifrån kroppen — tappar balansen och kantkontrollen.',
      'Vikten är inte tillräckligt centrerad vid fotbytet — leder till flacka kanter efteråt.',
    ],
    muscles: ['Höftutåtrotatorer', 'Gluteus medius', 'Adduktorer', 'Core/bålmuskulatur'],
    progressions: [
      'Grundnivå: öva fotbytet stillastående med händerna mot en vägg för stöd.',
      'Nästa steg: utför sekvensen i gångfart med fokus på höftrotationen.',
      'Avancerat: koppla direkt till hoppets avhoppsrörelse — mohawk + avhopp i en sammanhängande sekvens.',
    ],
  },

  'Tåpick-avhopp': {
    steps: [
      'Börja med en bakåtglidning (eller bakåtgång) på det stödbenet — utåtkant för Lutz, inåtkant för Flip.',
      'Placera tåpicken (eller framfoten) i golvet snett bakom dig med kontrollerat tryck — inte stampa.',
      'Använd tåpicken som ett hävstångspunkt: tryck ned och lyft höften uppåt i ett flytande rörelsemönster.',
      'Svinga det fria benet (stödbenet som nu lyfter) uppåt och framåt som vid ett riktigt hopp.',
      'Landa på det ursprungliga stödbenet och kontrollera balansen i landningsposition.',
    ],
    tips: [
      'Tåpicken ska plantas, inte stampas — ett mjukt och snabbt kontakt ger bäst kraft.',
      'Kroppsvikten ska vara centrerad ovanför tåpickens kontaktpunkt vid avhoppet.',
      'Öva att avhoppets riktning är uppåt — tåpicken är bara hävstången, inte drivkraften.',
    ],
    mistakes: [
      'Stampar tåpicken hårt i golvet — bromsar rörelsen istället för att förstärka den.',
      'Tåpicken placeras för långt ifrån kroppen — tappar hävstångseffekten och rotationsaxeln.',
      'Stödbenet böjer sig inte tillräckligt innan avhoppet — förlorar den elastiska kraften.',
    ],
    muscles: ['Vadmuskulatur', 'Gluteus maximus', 'Höftböjare', 'Quadriceps', 'Core/bålmuskulatur'],
    progressions: [
      'Grundnivå: öva tåpick-rörelsens plantering utan hopp — fokus på kontaktpunkten och riktningen.',
      'Nästa steg: lägg till ett litet hopp uppåt och landa med kontroll.',
      'Avancerat: koppla till full hoppimitation med ingång, tåpick och rotation.',
    ],
  },

  'Lutz-ingång': {
    steps: [
      'Börja med en lång bakåtglidning på vänsterbens yttre kant (eller höger för mot-urtavlan skaters).',
      'Håll axlarna och höfterna öppna mot glidriktningen — känn den bakåt-yttre kanten under foten.',
      'Kontrollera att kanten inte byter till en inåtkant (Flutz) — pressa aktivt ut på stortåsidan.',
      'Placera tåpicken med höger fot bakom dig medan du fortfarande är på den yttre kanten.',
      'Avhoppet sker uppåt — känn att rotationen börjar uppåt, inte snett framåt.',
    ],
    tips: [
      'Känslan av yttre kanten i Lutz-ingången är subtil — öva med fokus på stortåns tryck mot underlaget.',
      'Axlarnas position mot glidriktningen avgör om det blir en äkta Lutz eller Flutz — håll dem öppna hela vägen.',
      'Rör dig längs en rak linje bakåt — kurvan är ett tecken på kanten byter till inåt.',
    ],
    mistakes: [
      'Kanten välter inåt (Flutz) — den vanligaste felen, kräver medveten höftrotation utåt under gliden.',
      'Axlarna stänger sig för tidigt — börjar rotationen innan tåpicken är planterad.',
      'Glidlängden är för kort — ger inte tid att hitta och hålla den korrekta kanten.',
    ],
    muscles: ['Höftutåtrotatorer', 'Gluteus medius', 'Adduktorer', 'Vadmuskulatur', 'Core/bålmuskulatur'],
    progressions: [
      'Grundnivå: öva bakåtglidning på yttre kant utan tåpick — känn och håll kanten.',
      'Nästa steg: lägg till tåpickens plantering utan hopp — kontrollera att kanten håller under hela rörelsen.',
      'Avancerat: full Lutz-ingång med hoppimitation och kamera eller spegel för kantfeedback.',
    ],
  },

  'Spotting': {
    steps: [
      'Välj en fix punkt i ögonhöjd framför dig — en punkt på väggen eller i spegeln.',
      'Börja rotera kroppen men håll blicken på den fixa punkten så länge som möjligt.',
      'Vrid huvudet snabbt när du inte längre kan hålla kvar blicken och sök upp punkten igen framför dig.',
      'Öva tekniken utan rotation först: vrid kroppen åt sidan medan du håller blicken fast — känn spänningen.',
      'Lägg sedan till rotation: ett varv i taget med full spotting-teknik.',
    ],
    tips: [
      'Spotting minskar yrsel och ger orientering — det är en teknik som kräver regelbunden träning.',
      'Punkten du spötar på ska vara på samma höjd varje varv — annars lutar du av och an.',
      'Nacken måste vara avslappnad för att kunna röra sig snabbt — spänning i nacken saktar ner tekniken.',
    ],
    mistakes: [
      'Blicken vandrar utan fast punkt — ger ingen yrselkontroll och tappar orienteringen.',
      'Huvudet roterar i samma takt som kroppen — spotting fungerar bara om huvudet är snabbare.',
      'Punkten väljs för nära — distansen ska vara minst en meter för att ge rätt effekt.',
    ],
    muscles: ['Nackmuskulatur', 'Övre trapezius', 'Core/bålmuskulatur (rotationsstabilitet)'],
    progressions: [
      'Grundnivå: öva spotting stillastående utan rotation — vrid kroppen, håll blicken fast.',
      'Nästa steg: ett varv i taget med full spotting, stanna och kontrollera.',
      'Avancerat: kontinuerlig rotation med konsekvent spotting — öka antalet varv gradvis.',
    ],
  },

};

// Match by prefix – "Ettbenssquat höger" matches "Ettbenssquat"
export function findExerciseDetail(name: string): ExerciseDetail | undefined {
  if (EXERCISE_DATA[name]) return EXERCISE_DATA[name];
  const key = Object.keys(EXERCISE_DATA).find(
    (k) => name.startsWith(k) || name.toLowerCase().includes(k.toLowerCase())
  );
  return key ? EXERCISE_DATA[key] : undefined;
}
