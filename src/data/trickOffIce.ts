export type OffIceExercises = {
  strength: string[];
  cardio: string[];
  stretch: string[];
};

export const TRICK_OFF_ICE: Record<string, OffIceExercises> = {

  // ── Hopp ──────────────────────────────────────────────────────────────────

  'waltz': {
    strength: [
      'Ettbenssquat – stärker avhoppsbenet och stabiliserar knäet vid landning.',
      'Höftlyft (glute bridge) – aktiverar sätes- och höftmusklerna för avhoppskraften.',
      'Vadhöjningar på ett ben – bygger styrka och stabilitet i vristen.',
    ],
    cardio: [
      'Hoppreppa – bygger explosivitet och rytmkänsla inför avhoppet.',
      'Sidohopp (lateral bounds) – tränar den laterala rörelsen vid avhopp och landning.',
    ],
    stretch: [
      'Höftböjarsträck i utfall – öppnar höften för det fria benets svängrörelse.',
      'Liggande quadssträck – löser ut framsidan av avhoppsbenet.',
      'Vadssträck mot vägg – förbättrar vristens rörlighet inför takeoff.',
    ],
  },

  'axel-1': {
    strength: [
      'Ettbenssquat med rotation – tränar det kantspecifika avhoppet och koordinationen.',
      'Sidoutfall (lateral lunge) – stärker höftabduktorerna för den yttre kanten.',
      'Plankan med rotation – bygger kärnstabilitet för rotationen i luften.',
      'Vadhöjningar på ett ben – stärker den plantarflexion som driver avhoppet.',
    ],
    cardio: [
      'Hoppreppa med enbenhopp – bygger explosiv kraft i avhoppsbenet.',
      'Plyometriska sidohopp – simulerar kantarbetet och landningsstöten.',
    ],
    stretch: [
      'Hip flexor-sträck i djupt utfall – frigör höften för svingbenet framåt.',
      'Piriformissträck (figur-4 liggande) – minskar spänning i höftrotatorer.',
      'Bröstöppning mot vägg – förbereder armsvingen för avhoppet.',
    ],
  },

  'axel-2': {
    strength: [
      'Bulgarisk split-squat – maximal enbensstyrka för det kraftfulla avhoppet.',
      'Medicinbollsrotation stående – bygger explosiv rotationskraft.',
      'Hängande benlyft – stärker buken och höftböjarna för kompakt rotation.',
      'Boxhopp – tränar snabb explosiv kraft från böjt knä till fullt avhopp.',
    ],
    cardio: [
      'Sprint-intervaller 20 m – bygger snabbtyrka i benen.',
      'Plyometriska hopp med landning på ett ben – tränar landningskontrollen.',
    ],
    stretch: [
      'Hip flexor-sträck i djupt utfall – nödvändig för den kraftfulla framsvingen.',
      'Thoraxrotation i fyrfotaställning – ökar rörligheten i överkroppen för armsvingen.',
      'Höftrotationssträck liggande – löser upp yttre kantens höftarbete.',
    ],
  },

  'axel-3': {
    strength: [
      'Bulgarisk split-squat med viktväst – maximal enbenstyrka krävs för 3,5 varv.',
      'Kabelrotation i stående – tränar den explosiva rotationskraften.',
      'Hängande benlyft med rotation – koordinerar kärna och höftböjare.',
      'Djupa boxhopp med ettbenslandning – tränar landningsstabilitet under hög belastning.',
    ],
    cardio: [
      'Bounding (löphopp) – bygger maximal explosiv kraft per steg.',
      'Sprint-intervaller uppför backe – stärker hela kinetiska kedjan.',
    ],
    stretch: [
      'Djup hip flexor-sträck med bröstöppning – frigör hela framsidan.',
      'Pigeon pose – djup sträckning av höftrotatorer och piriformis.',
      'Bröststräck mot dörrpost – öppnar upp för maximal armsvingrörlighet.',
    ],
  },

  'salchow-1': {
    strength: [
      'Inåtrotation höft (höftadduktor) – stärker insidekanten på vänster bakre kant.',
      'Ettbenssquat på vänster ben – specifikt avhoppsben för salchow.',
      'Rumpkick stående (hip extension) – aktiverar sätesmuskeln för avhoppet.',
    ],
    cardio: [
      'Hoppreppa – bygger timing och rytm i avhoppsmomentet.',
      'Laterala stegserier – tränar övergången från glid till avhopp.',
    ],
    stretch: [
      'Insidessträck (adduktorsträck) – öppnar upp för insidekantsarbetet.',
      'Höftböjarsträck – frigör svingbenet för utsvingen.',
      'Hamstringsträck stående – minskar spänning i baksidan av avhoppsbenet.',
    ],
  },

  'salchow-2': {
    strength: [
      'Adduktor-maskin eller band – stärker insidekantsarbetet specifikt.',
      'Bulgarisk split-squat vänster ben – bygger mer kraft i avhoppsbenet.',
      'Medicinbollskast med rotation – tränar rotationsinitiering i luften.',
      'Sidoplankan – stärker kärnan lateralt för jämn rotation.',
    ],
    cardio: [
      'Plyometriska inåthopp – tränar insidekantens explosivitet.',
      'Hoppreppa med dubbelunder – ökar rotationshastigheten.',
    ],
    stretch: [
      'Djup adduktorsträck (straddle) – öppnar upp insidan av höften.',
      'Piriformissträck – löser upp höftrotatorer efter rotationen.',
      'Ryggrotation liggande – bibehåller rörligheten i thorax.',
    ],
  },

  'salchow-3': {
    strength: [
      'Ettbensdödlyft – maximal höftstyrka för det kraftiga avhoppet.',
      'Kabelrotation low-to-high – tränar rotationskraften från botten upp.',
      'Hängande benlyft – stärker kärnan för kompakt trippelrotation.',
      'Boxhopp med ettbenslandning – kontrollerad kraft vid nedkomsten.',
    ],
    cardio: [
      'Bounding med rotation – kombinerar explosivitet och rotationskoordination.',
      'Sprint-intervaller – maximal benstyrka och snabbhet.',
    ],
    stretch: [
      'Pigeon pose vänster – djup höftöppning inför salchow-kanten.',
      'Djup straddle-sträck – nödvändig adduktorflexibilitet.',
      'Thoraxrotation – bibehåller överkroppens rörlighet.',
    ],
  },

  'loop-1': {
    strength: [
      'Ettbenssquat höger ben – avhoppet sker helt från höger ben i loop.',
      'Hip abduktor med band – stärker den yttre kanten i höger höft.',
      'Enkelt benhop på höger – tränar den kompakta enbenslyften.',
    ],
    cardio: [
      'Plyometriska enbenhopp – simulerar loop-hoppets avhopp.',
      'Hoppreppa – bygger timing och benstyrka.',
    ],
    stretch: [
      'Piriformissträck höger – löser spänning i det yttre höftarbetet.',
      'Hamstrings stående – frigör bakre kedjan i avhoppsbenet.',
      'Vadssträck – förbättrar fotledsmobiliteten.',
    ],
  },

  'loop-2': {
    strength: [
      'Bulgarisk split-squat höger – kraftutveckling i avhoppsbenet.',
      'Höftabduktion med band stående – specifikt för yttre kantkontrollen.',
      'Medicinbollsrotation – tränar rotationsinitiering.',
      'Plankan – kärna för kompakt dubbelrotation.',
    ],
    cardio: [
      'Box jumps – explosiv kraft i höger ben.',
      'Laterala bounds – simulerar kantarbetet.',
    ],
    stretch: [
      'Figur-4-sträck (piriformis) – höger höft.',
      'Hamstrings och sätessträck – balanserar bakre kedjan.',
      'Hip flexor-sträck – frigör framsidan inför nästa rörelse.',
    ],
  },

  'loop-3': {
    strength: [
      'Ettbensdödlyft höger – maximal posterior kedjestyrka.',
      'Kabelrotation – explosiv rotationskraft för tre varv.',
      'Hängande benlyft – kärna och höftböjare.',
      'Djupa boxhopp med ettbenslandning – landningskontroll.',
    ],
    cardio: [
      'Sprint-intervaller – benstyrka och snabbhet.',
      'Plyometrisk enbensserie – simulerar avhoppet under trötthet.',
    ],
    stretch: [
      'Pigeon pose höger – djup höftöppning.',
      'Thoraxrotation – rörlig överkropp för rotationen.',
      'Vadssträck – fotledsrörlighet för yttre kanten.',
    ],
  },

  'toe-loop-1': {
    strength: [
      'Tåhöjning på ett ben – stärker tåpicken som driver avhoppet.',
      'Ettbenssquat höger – avhoppsben för toe loop.',
      'Vadpress – bygger plantarflexionsstyrka för pick-trycket.',
    ],
    cardio: [
      'Hoppreppa på tårna – tränar tå-pushoff och rytm.',
      'Sidohopp – lateral stabilitet vid insteget.',
    ],
    stretch: [
      'Vadssträck på trappa – fotledsrörlighet för tåpicken.',
      'Tåböjarsträck på golv – löser upp plantarfascian och tårna.',
      'Hip flexor-sträck – frigör svingbenet.',
    ],
  },

  'toe-loop-2': {
    strength: [
      'Tåhöjning med vikt – kraftigare pick för dubbelns avhopp.',
      'Bulgarisk split-squat – mer kraft i höger avhoppsben.',
      'Medicinbollsrotation – rotationskraft för dubbelvarvet.',
      'Plankan – kärna för kontrollerad luftposition.',
    ],
    cardio: [
      'Plyometrisk tåhoppsserie – tränar tårnas explosivitet.',
      'Hoppreppa med dubbelunder – rotationshastighet.',
    ],
    stretch: [
      'Vadssträck med rak och böjt knä – full flexibilitet i vadkomplexet.',
      'Piriformissträck – höftrotatorer efter rotationen.',
      'Quadssträck – framsidan av avhoppsbenet.',
    ],
  },

  'toe-loop-3': {
    strength: [
      'Tåhöjning med tung vikt – pick-kraften är avgörande för 3 varv.',
      'Ettbensdödlyft – maximal höftstyrka.',
      'Kabelrotation – explosiv rotationskraft.',
      'Hängande benlyft – kärna och kompakt luftposition.',
    ],
    cardio: [
      'Bounding – maximal kraft per steg.',
      'Sprint-intervaller – snabba ben.',
    ],
    stretch: [
      'Djup vadsträck och plantar-fasciasläppning – tårna belastas maximalt.',
      'Pigeon pose – djup höftsträck.',
      'Thoraxrotation – överkroppens rörlighet.',
    ],
  },

  'flip-1': {
    strength: [
      'Adduktor-övning med band – stärker insidekanten (vänster bakre) för flip.',
      'Tåhöjning vänster – pick-foten i flip är höger, men balansen kräver vänster styrka.',
      'Ettbenssquat vänster – avhoppsben är vänster i flip.',
      'Plankan – kärna för kontroll i luften.',
    ],
    cardio: [
      'Laterala stegserier – tränar insidekantsövergången.',
      'Hoppreppa – grundläggande benstyrka och tajming.',
    ],
    stretch: [
      'Adduktorsträck – insidan av höften för vänster insidekant.',
      'Vadssträck – höger pick-fot.',
      'Hip flexor-sträck höger – svingbenet i flip.',
    ],
  },

  'flip-2': {
    strength: [
      'Bulgarisk split-squat vänster – kraftutveckling i avhoppsbenet.',
      'Adduktor-maskin – specifik insidekantstyrka.',
      'Medicinbollsrotation – rotationskraft för 2 varv.',
      'Tåhöjning höger – pick-foten i flip.',
    ],
    cardio: [
      'Plyometriska inåthopp – insidekantens explosivitet.',
      'Hoppreppa med dubbelunder – rotationshastighet.',
    ],
    stretch: [
      'Djup adduktorsträck – vänster innsidekant.',
      'Piriformissträck – höftrotatorer.',
      'Bröststräck – armsvingen för rotationen.',
    ],
  },

  'flip-3': {
    strength: [
      'Ettbensdödlyft vänster – maximal kraft.',
      'Kabelrotation low-to-high – rotationsinitiering.',
      'Hängande benlyft med rotation – kärna och höftböjare.',
      'Adduktor-maskin tung – stark insidekant krävs.',
    ],
    cardio: [
      'Bounding – maximal kraft per steg.',
      'Sprint-intervaller – explosiv snabbhet.',
    ],
    stretch: [
      'Pigeon pose vänster – djup höftsträck.',
      'Djup straddle – adduktorer.',
      'Thoraxrotation – överkroppens rörlighet.',
    ],
  },

  'lutz-1': {
    strength: [
      'Hip-abduktorövning (band eller maskin) – stärker den yttre kanten (vänster bakre yttre) i lutz.',
      'Ettbenssquat vänster med utåtrotation – tränar den utmanande yttre kanten.',
      'Tåhöjning höger – pick-foten i lutz.',
      'Sidoplankan – lateral kärna för yttre kantbalansen.',
    ],
    cardio: [
      'Laterala bounds – yttre kantens explosivitet.',
      'Hoppreppa – grundläggande benstyrka.',
    ],
    stretch: [
      'Piriformissträck vänster – yttre höftrotatorer för utåtkanten.',
      'IT-band-sträck – lateral höft- och lårfrihet.',
      'Vadssträck höger – pick-foten.',
    ],
  },

  'lutz-2': {
    strength: [
      'Höftabduktion med band – yttre kanten kräver stark abduktion.',
      'Bulgarisk split-squat vänster med utåtrotation – kantspecifik styrka.',
      'Medicinbollsrotation – rotationskraft.',
      'Tåhöjning höger tung – kraftig pick för dubbelhoppet.',
    ],
    cardio: [
      'Plyometriska sidohopp – lateral explosivitet.',
      'Hoppreppa med dubbelunder – rotationshastighet.',
    ],
    stretch: [
      'Pigeon pose vänster – djup yttre höftsträck.',
      'IT-band-sträck med foam roller – lateral friktion.',
      'Bröststräck – armsvingen motverkar kontra-rotationen i lutz.',
    ],
  },

  'lutz-3': {
    strength: [
      'Ettbensdödlyft vänster – maximal höftstyrka.',
      'Kabelrotation med utåtrotation i höften – lutz-specifik styrka.',
      'Hängande benlyft – kärna för 3 varv.',
      'Tung tåhöjning höger – pick-kraften är avgörande.',
    ],
    cardio: [
      'Bounding – maximal kraft.',
      'Sprint-intervaller – snabba ben.',
    ],
    stretch: [
      'Djup pigeon pose vänster – yttre höft.',
      'Thoraxrotation – överkroppens rörlighet.',
      'IT-band-sträck – lateral kedja.',
    ],
  },

  'euler-1': {
    strength: [
      'Ettbenssquat höger – euler avhoppas från höger yttre bakre kant.',
      'Hip-abduktorövning – yttre kanten i höger höft.',
      'Tåhöjning vänster – pick-foten i euler.',
      'Plankan – kärna för det kompakta enkla varvet.',
    ],
    cardio: [
      'Hoppreppa – tajming och benstyrka.',
      'Laterala steg – kantövergångsträning.',
    ],
    stretch: [
      'Piriformissträck höger – yttre kanten.',
      'Vadssträck vänster – pick-foten.',
      'Hip flexor-sträck – frigör svingbenet.',
    ],
  },

  'split-jump': {
    strength: [
      'Sidosparkar stående (hip abduktion + extension) – tränar den explosiva benspärkan.',
      'Hamstring curl – bakre kedjans styrka för benlyftshöjden.',
      'Höftböjare med band – frontsidans lyft i split-positionen.',
      'Plankan och sideplankan – kärna för balansen i luften.',
    ],
    cardio: [
      'Hoppreppa – grundläggande explosivitet.',
      'Scissor jumps (sax-hopp) – direkt träning av rörelsen.',
    ],
    stretch: [
      'Hamstringsträck stående framåt – ben behöver nå högt bakåt.',
      'Hip flexor-sträck i djupt utfall – frontsidans lyft.',
      'Spagatt (splits) – full rörelseomfång för split-positionen.',
    ],
  },

  // ── Snurrar ───────────────────────────────────────────────────────────────

  'uppright-basic': {
    strength: [
      'Ettbensbalans med ögonen stängda – grundläggande snurrstabilitet.',
      'Plankan – kärna håller kroppen kompakt under rotation.',
      'Sidoplankan – lateral stabilitet för rak snurraxel.',
    ],
    cardio: [
      'Rotera runt egen axel med armarna in – tränar vestibulär anpassning.',
      'Hoppreppa – kondition och rytmkänsla.',
    ],
    stretch: [
      'Vadssträck – vristens frihet på stödbenet.',
      'Axelsträck korsad – frigör axlarna för snurrpositionen.',
      'Quadssträck – stödbenet (ofta vänster) sträcks efter snurren.',
    ],
  },

  'scratch-spin': {
    strength: [
      'Ettbensbalans på tå – tränar kontrollen i snurrpositionen.',
      'Plankan med benlyft – kärna och höftböjare för kompakt position.',
      'Adduktor-övning – drar in fria benet och accelererar snurren.',
    ],
    cardio: [
      'Rotation på snurrbräda eller Lazy Susan – direktträning av centrifugalkänslan.',
      'Hoppreppa – kondition.',
    ],
    stretch: [
      'Axelsträck framåt – armarna dras in tätt mot kroppen.',
      'Quadssträck – stödbenets framdel.',
      'Vadssträck – vristens rörlighet på tå.',
    ],
  },

  'back-spin': {
    strength: [
      'Ettbensbalans på höger tå – back-spin stöds av höger ben.',
      'Hip-abduktorstyrka höger – den bakre balansen kräver höft stabilitet.',
      'Ryggstärkande övningar (rygghyperextension) – kontroll av baklängesaxeln.',
    ],
    cardio: [
      'Rotation baklänges på snurrbräda – vestibulär träning.',
      'Hoppreppa – kondition.',
    ],
    stretch: [
      'Höftböjarsträck – frigör framsidan på stödbenet.',
      'Bröst- och axelsträck bakåt – öppnar upp för bakåtbalansen.',
      'Vadssträck – fotledsrörlighet.',
    ],
  },

  'layback-spin': {
    strength: [
      'Ryggsträckare (Superman-övning) – stärker musklerna som håller bakåtböjningen.',
      'Kärnstabilitet i extension (bridge) – kontrollerat bakåtfall med stöd.',
      'Ettbensbalans – snurrbalansen krävs under rörlighetsutmaningen.',
      'Axelstabilitet (rotator cuff) – skyddar axlarna i bakåtposition.',
    ],
    cardio: [
      'Yoga flow med bakåtböjningar – kombinerar rörlighet och kondition.',
      'Hoppreppa – kondition.',
    ],
    stretch: [
      'Camel pose (yoga) – djup bakåtböjning i bröstryggen.',
      'Bröststräck mot foam roller – öppnar thorax.',
      'Hip flexor-sträck – framsidan frigörs för bakåtpositionen.',
    ],
  },

  'biellmann-spin': {
    strength: [
      'Axel- och skulderrotatorstyrka – håller benet uppe bakom huvudet.',
      'Ryggstärkare – kontrollera den extrema bakåtböjningen.',
      'Hamstring eccentrisk styrka – benet dras upp utan att spänna.',
      'Ettbensbalans – snurrbalansen under extremt rörlighetsläge.',
    ],
    cardio: [
      'Yoga flow med djupa bakåtböjningar – rörlighet och uthållighet.',
      'Hoppreppa – kondition.',
    ],
    stretch: [
      'Full biellmann-sträck liggande – gradvis förberedelse.',
      'Camel pose och wheel pose – djup brygga.',
      'Hamstrings med benet ovanför – extrem hamstringflexibilitet krävs.',
    ],
  },

  'attitude-spin': {
    strength: [
      'Hip flexor-styrka med band – håller benet i attitydposition.',
      'Hip abduktor – benet hålls utåt och uppåt.',
      'Ettbensbalans – stödbenet under den statiska benposition.',
      'Rygg och kärna – överkroppen hålls upprätt.',
    ],
    cardio: [
      'Balettstyrkeövningar (développé) – specifik träning av attitydpositionen.',
      'Hoppreppa – kondition.',
    ],
    stretch: [
      'Hip flexor-sträck djupt – frigör höften för benlyftets vinkel.',
      'Quadssträck bak – attitydbenet är böjt, framfjädern behöver vara lös.',
      'Axelsträck – armarna hålls i elegant position.',
    ],
  },

  'sit-spin': {
    strength: [
      'Djup squat (ass to grass) – sittposition kräver full knäflexion med kraft.',
      'Ettbenssquat djup – stödbenet i sit-spin är under extrem belastning.',
      'Quadriceps isotonisk hållning – håller den djupa positionen.',
      'Kärnstabilitet – håller ryggen rak i sittposition.',
    ],
    cardio: [
      'Wall sit-intervaller – specifik träning av sittpositionens uthållighet.',
      'Hoppreppa – kondition.',
    ],
    stretch: [
      'Djup squat-sträck med hälar i golv – full ankelrörlighet för sittposition.',
      'Höftöppning i djup squat – fri höft för den kompakta formen.',
      'Quadssträck – framsidan av det böjda stödbenet.',
    ],
  },

  'sit-spin-back': {
    strength: [
      'Djup squat på höger ben (back-sit stöds av höger) – enbenssittstyrka.',
      'Hip-abduktor höger – baklängesbalansen i djup squat.',
      'Ryggstärkare – bakåtaxeln kräver mer lumbal kontroll.',
      'Kärnstabilitet – kompakt position baklänges.',
    ],
    cardio: [
      'Wall sit – uthållighet i den djupa positionen.',
      'Hoppreppa – kondition.',
    ],
    stretch: [
      'Djup squat-sträck – full ankelrörlighet.',
      'Piriformissträck – höger höft.',
      'Ryggrotation – lumbal rörlighet för baklängesaxeln.',
    ],
  },

  'pancake-spin': {
    strength: [
      'Adduktor-styrka – benet trycks ner mot isen i T-position.',
      'Hamstrings excentrisk – kontrollerat nedtryck av det horisontella benet.',
      'Ettbensbalans – stödbenet under extremt rörlighetsläge.',
      'Kärna och rygg – överkroppen hålls parallell med golvet.',
    ],
    cardio: [
      'Aktiv straddle-sträck med pulsering – rörlighet och uthållighet.',
      'Hoppreppa – kondition.',
    ],
    stretch: [
      'Straddle (sidospagatt) – det horisontella benet kräver full adduktorlängd.',
      'Hamstringsträck – benet sträckt ut åt sidan.',
      'Ryggböjning framåt i straddle – hela bakre kedjan.',
    ],
  },

  'cannonball-spin': {
    strength: [
      'Djup squat med kompakt position – tränar den extrema böjpositionen.',
      'Hip flexor-styrka – knäna dras mot bröstet.',
      'Kärnstabilitet – håller kroppen tät runt stödbenet.',
      'Ettbensbalans i djup squat – stödbenet bär all vikt.',
    ],
    cardio: [
      'Wall sit djupt – uthållighet.',
      'Hoppreppa – kondition.',
    ],
    stretch: [
      'Djup squat-sträck – full knä och höftflexion.',
      'Ryggrotation liggande – lumbal rörlighet.',
      'Hip flexor-sträck – kontrastträck efter den kompakta positionen.',
    ],
  },

  'camel-spin': {
    strength: [
      'Hip-extension (rumpkick) stående – håller det fria benet horisontellt.',
      'Ryggstärkare (Superman) – stöder det horisontella överkroppsläget.',
      'Hamstrings och sätesmuskel – det fria benet lyfts och hålls bakåt.',
      'Ettbensbalans framåtlutad – simulerar kamelposition på golv.',
    ],
    cardio: [
      'Yoga flow arabesk-serier – direktträning av kamelkroppspositionen.',
      'Hoppreppa – kondition.',
    ],
    stretch: [
      'Hip flexor-sträck djupt – framsidan av stödbenet frigörs.',
      'Hamstringsträck – det fria benet behöver vara långt bakåt.',
      'Bröststräck framåtlutad – öppnar ryggen i kamelposition.',
    ],
  },

  'layover-camel': {
    strength: [
      'Sidolyft i arabesk – det fria benet roteras utåt och uppåt.',
      'Oblique-styrka – sned-böjningen kräver lateral kärnstyrka.',
      'Axelstabilitet – stödarm eller friarm hålls korrekt.',
      'Hip abduktor – rotationen av det fria benet utåt.',
    ],
    cardio: [
      'Sidoböjningar stående med vikt – lateral uthållighet.',
      'Hoppreppa – kondition.',
    ],
    stretch: [
      'Lateral sidosträck med lyft – öppnar flanken för layover-positionen.',
      'Piriformissträck – höftrotatorer.',
      'Bröststräck med rotation – överkroppens sideways-rörlighet.',
    ],
  },

  'donut-spin': {
    strength: [
      'Ryggstärkare och gluteus – håller benet uppåt bakåt i hög position.',
      'Axel- och skulderrotatorstyrka – benet greppas med händerna.',
      'Hamstrings – benet dras upp mot huvudet.',
      'Ettbensbalans – stödbenet under extremt läge.',
    ],
    cardio: [
      'Yoga wheel-övningar – gradvis bakåtböjning med benstöd.',
      'Hoppreppa – kondition.',
    ],
    stretch: [
      'Full bakåtböjning (wheel pose) – extrem thorax och lumbal rörlighet.',
      'Hamstrings mot väggen – benet upp mot kroppen.',
      'Axelsträck bakåt djupt – axlarna möter benet.',
    ],
  },

  'illusion-spin': {
    strength: [
      'Ettbenssquat med framåtfall – simulerar illusionens rotation.',
      'Hip flexor och extension växelvis – drivkraften i illusionsrörelsen.',
      'Hamstrings och rygg – det fria benet svingar i en cirkel.',
      'Kärna – stabiliserar axeln under rörelsen.',
    ],
    cardio: [
      'Illusionssvängar på golv utan rotation – teknisk repetitionsträning.',
      'Hoppreppa – kondition.',
    ],
    stretch: [
      'Hamstringsträck framåt böjd – hela bakre kedjan.',
      'Hip flexor-sträck – framsidans rörlighet.',
      'Ryggrotation – thorax följer benets svängning.',
    ],
  },

  'flying-camel': {
    strength: [
      'Box jumps med arabesk-landing – tränar kombinationen hopp till kamelposition.',
      'Hip-extension med band – det fria benet ska gå horisontellt direkt vid landning.',
      'Ryggstärkare – kamelposition ska intas omedelbart.',
      'Ettbenssquat – landningsbenet bär stöten.',
    ],
    cardio: [
      'Plyometriska arabesk-hopp – direktträning av flyingkamelen.',
      'Hoppreppa – explosivitet.',
    ],
    stretch: [
      'Hip flexor-sträck djupt – stödbenet frigörs för kamelposition.',
      'Hamstringsträck – det fria benet bakåt.',
      'Ryggrörlighet i extension – kamelpositionens bakåtlutning.',
    ],
  },

  'flying-sit-spin': {
    strength: [
      'Boxhopp till djup squat – tränar flyingsittrotationens landning.',
      'Djup ettbenssquat – landningsbenet sänker sig direkt till sittposition.',
      'Quadriceps isotonisk hållning – sittläget kräver stark framdel.',
      'Kärna – kompakt position vid landning.',
    ],
    cardio: [
      'Plyometriska squat jumps – explosivitet och landningskontroll.',
      'Hoppreppa – kondition.',
    ],
    stretch: [
      'Djup squat-sträck – ankel och höft för sittposition.',
      'Quadssträck – framsidan av stödbenet.',
      'Hip flexor-sträck – kontrastträck efter squat-positionen.',
    ],
  },

  'butterfly': {
    strength: [
      'Hip-abduktor liggande (clamshell) – det horisontella benet behöver lyftkraft.',
      'Kärna rotationsövningar – den horisontella rotationen kring stödbenet.',
      'Bål-rotation med medicinboll – drivar butterflyrörelsens sveprörelse.',
      'Ettbensbalans med rotation – stödbenet under snurrrörelsen.',
    ],
    cardio: [
      'Horisontell kroppscirklar på golv – direktträning av butterflyrörelsens form.',
      'Hoppreppa – kondition.',
    ],
    stretch: [
      'Straddle – horisontellt benet behöver full adduktorlängd.',
      'Ryggrotation liggande – thorax rörlighet.',
      'Hip flexor-sträck – framsidan frigörs efter rörelsen.',
    ],
  },

  'death-drop': {
    strength: [
      'Ettbenssquat med djup kontrollerad nedgång – extremt kontrollerad sittlandning.',
      'Hip-abduktor och externa rotatorer – det fria benet spreads ut.',
      'Explosiv box jump – avhoppet kräver maximal kraft.',
      'Rygg och kärna – kontrollerat bakåtfall till sittposition.',
    ],
    cardio: [
      'Plyometriska squat jumps – explosivitet för avhoppet.',
      'Hoppreppa – kondition.',
    ],
    stretch: [
      'Djup squat-sträck – sittlandningens krav.',
      'Straddle – det fria benets ytterläge.',
      'Hip flexor-sträck – kontrast till den kompakta sittlandningen.',
    ],
  },

  'combination-spin': {
    strength: [
      'Alla positionsspecifika styrkeövningar (sit, camel, upright) – kombinationsspinnen kräver alla tre.',
      'Ettbensbalans med positionsbyten – tränar övergångarna mellan positioner.',
      'Kärna allsidigt – balansen ska bibehållas under positionsbytena.',
    ],
    cardio: [
      'Wall sit + arabesk-hållning sekvens – konditionsträning av kombinationsflödet.',
      'Hoppreppa – kondition.',
    ],
    stretch: [
      'Sekventiella sträckningar: quad, hip flexor, hamstring – alla positioner kräver olika flexibilitet.',
      'Ryggrotation och extension – rörlighet för positionsbytena.',
      'Axelsträck – överkroppen rör sig fritt mellan positionerna.',
    ],
  },

  // ── Svängar ───────────────────────────────────────────────────────────────

  'three-turn': {
    strength: [
      'Ettbensbalans med rotation på tå – tränar den precisa axelrotationen.',
      'Fotledsövningar med band – kant-till-kant stabilitet i vristen.',
      'Kärna med rotation – skulder och höft arbetar i kontra-rotation.',
    ],
    cardio: [
      'Laterala stegserier – kantövergångar och rytm.',
      'Hoppreppa – kondition.',
    ],
    stretch: [
      'Vadssträck – vristens rörlighet.',
      'Ryggrotation liggande – skulderaxelns rörlighet.',
      'Hip flexor-sträck – frigör höften vid kantbytet.',
    ],
  },

  'bracket': {
    strength: [
      'Ettbensbalans med kontra-rotation – bracketen kräver aktiv motståndsrotation.',
      'Oblique-övningar – sidovägg motstår axelrotationen.',
      'Fotledsövningar – inre/yttre kant-stabilitet.',
      'Kärna allsidigt – axeln hålls stabil mot rotationskraften.',
    ],
    cardio: [
      'Laterala stegserier med stopp – kantprecision.',
      'Hoppreppa – kondition.',
    ],
    stretch: [
      'Thoraxrotation – överkroppens rörlighet.',
      'Vadssträck – fotledsrörlighet.',
      'Piriformissträck – höftrotatorer.',
    ],
  },

  'rocker': {
    strength: [
      'Ettbensbalans på hälkant och tåkant växelvis – rockern byter kant längs fotens axel.',
      'Fotledsstabilitet med band (dorsal- och plantarflexion) – kant-till-kant i fotledsled.',
      'Kärna – kroppen roterar inte, foten byter kant.',
    ],
    cardio: [
      'Kant-till-kantövningar på golv – rytm och precision.',
      'Hoppreppa – kondition.',
    ],
    stretch: [
      'Vadssträck rak och böjt knä – full fotledsrörlighet.',
      'Fotledsrotationer cirkulärt – leder upp vristens rörlighet.',
      'Höftböjarsträck – frigör höften under svängen.',
    ],
  },

  'counter': {
    strength: [
      'Oblique-rotation mot motstånd – countern kräver aktiv rotation mot rörelseriktningen.',
      'Ettbensbalans med rotation – skulder roterar in i kurvan aktivt.',
      'Hip abduktor och adduktor – kant-specificitet.',
      'Kärna roterande – medicinbollsrotationer.',
    ],
    cardio: [
      'Laterala stegserier med rotation – rytm och koordination.',
      'Hoppreppa – kondition.',
    ],
    stretch: [
      'Thoraxrotation djup – överkroppens rörlighet för counterrotationen.',
      'Piriformissträck – höftrotatorer.',
      'Vadssträck – fotledsrörlighet.',
    ],
  },

  'twizzle': {
    strength: [
      'Ettbensbalans med snabb rotation – twizzeln roterar snabbt på ett ben.',
      'Kärna med rotation – snabb, tätt kompakt rotation.',
      'Adduktor-övning – fria benet dras in snabbt.',
      'Fotledsstabilitet – hög belastning under snabba varv.',
    ],
    cardio: [
      'Snurrövningar på rotation board – vestibulär träning och snabbhetsträning.',
      'Hoppreppa – kondition och rytm.',
    ],
    stretch: [
      'Piriformissträck – höftrotatorer arbetar intensivt.',
      'Vadssträck – fotledsrörlighet under rotation.',
      'Axelsträck – armarna hålls kontrollerade.',
    ],
  },

  'loop-turn': {
    strength: [
      'Ettbensbalans med rotation – loop-turn är en mjuk, intern rotation på ett ben.',
      'Fotledsövningar – kantbyte under glid.',
      'Kärna lätt – loopen är en subtil sväng.',
    ],
    cardio: [
      'Glida loop-turns i slow motion – teknisk repetition.',
      'Hoppreppa – kondition.',
    ],
    stretch: [
      'Vadssträck – fotledsrörlighet.',
      'Höftrotationssträck – intern rotation i höften.',
      'Ryggrotation liggande – thorax rörlighet.',
    ],
  },

  'mohawk': {
    strength: [
      'Hip-utåtrotation stående – mohawken byter fot med utåtrotation.',
      'Ettbensbalans – varje fot bär vikt separat.',
      'Adduktor och abduktor – kantarbetet kräver medial och lateral stabilitet.',
    ],
    cardio: [
      'Stegserier med fotbyte – koordination och rytm.',
      'Hoppreppa – kondition.',
    ],
    stretch: [
      'Höftutåtrotationssträck – frigör höftleden för mohawkens fotbyte.',
      'Vadssträck – båda fötter.',
      'Piriformissträck – höftrotatorer.',
    ],
  },

  'choctaw': {
    strength: [
      'Hip-utåtrotation – choctaw byter kant och fot med djupare rotation.',
      'Ettbensbalans under rotation – varje ben tar emot.',
      'Höftböjare – svingbenet rör sig aktivt vid fotbytet.',
      'Kärna – kroppen hålls stabil under det mer komplexa bytet.',
    ],
    cardio: [
      'Koordinationsstegserier med fotbyte – komplex rörelsekombination.',
      'Hoppreppa – kondition.',
    ],
    stretch: [
      'Djup höftutåtrotationssträck – större krav än mohawk.',
      'Hip flexor-sträck – svingbenet rör sig mer.',
      'Piriformissträck – rotationsmuskulaturen.',
    ],
  },

  // ── Glidövningar ─────────────────────────────────────────────────────────

  'forward-outside-edge': {
    strength: [
      'Hip-abduktorövning – stärker den yttre kanten vid framlänges glid.',
      'Ettbensbalans – hela vikten vilar på ett ben under gliden.',
      'Vadövningar – vristens stabilitet på kanten.',
    ],
    cardio: [
      'Laterala stegserier – kant-känsla och rytm.',
      'Hoppreppa – kondition.',
    ],
    stretch: [
      'Piriformissträck – yttre höft.',
      'Vadssträck – fotledsrörlighet.',
      'IT-band-sträck – lateral lårrörlighet.',
    ],
  },

  'forward-inside-edge': {
    strength: [
      'Hip-adduktorövning – stärker insidekanten.',
      'Ettbensbalans – viktbärande på insidekant.',
      'Fotledsstabilitet med band – inre kant-kontroll.',
    ],
    cardio: [
      'Inåt-laterala stegserier – insidekantsrörlighet.',
      'Hoppreppa – kondition.',
    ],
    stretch: [
      'Adduktorsträck – insidan av höften.',
      'Vadssträck – fotledsrörlighet.',
      'Hamstringsträck – bakre kedjan.',
    ],
  },

  'backward-outside-edge': {
    strength: [
      'Hip-abduktor baklänges – yttre kanten i baklängesglid.',
      'Ryggstärkare – kontrollen baklänges kräver lumbal stabilitet.',
      'Ettbensbalans baklänges – proprioception utan framsyn.',
    ],
    cardio: [
      'Baklänges glida med stopp – trygghet och kontroll.',
      'Hoppreppa – kondition.',
    ],
    stretch: [
      'Piriformissträck – yttre höft.',
      'Ryggrotation – lumbalt rörlig för baklängesaxeln.',
      'Vadssträck – fotledsrörlighet.',
    ],
  },

  'backward-inside-edge': {
    strength: [
      'Hip-adduktor baklänges – insidekanten baklänges.',
      'Kärnstabilitet – kroppen hålls upprätt utan framsyn.',
      'Fotledsstabilitet – inre kant baklänges.',
    ],
    cardio: [
      'Baklänges rörelseövningar – komfort och flöde.',
      'Hoppreppa – kondition.',
    ],
    stretch: [
      'Adduktorsträck – insidan av höften.',
      'Ryggrotation – thorax rörlighet baklänges.',
      'Vadssträck – fotledsrörlighet.',
    ],
  },

  'spread-eagle': {
    strength: [
      'Hip-utåtrotation (lateral rotation) – spread eagle kräver maximal utåtrotation i båda höfterna.',
      'Adduktor och abduktor med benen utåtroterade – specifik styrka i rörelseomfånget.',
      'Kärnstabilitet – överkroppen hålls upprätt i extremt höftläge.',
    ],
    cardio: [
      'Hip-utåtrotationsövningar med rörlighetsträning – aktiv rörlighet.',
      'Hoppreppa – kondition.',
    ],
    stretch: [
      'Grodposition (frog pose) – djup bilateral höftutåtrotation.',
      'Straddle med utåtrotation – adduktorer i utåtroterat läge.',
      'Piriformissträck – höftrotatorer.',
    ],
  },

  'ina-bauer': {
    strength: [
      'Hip-utåtrotation ett ben, inåtrotation ett ben – ina bauer har en fot utåt, en inåt.',
      'Fotledsstabilitet – varje fot på olika kant.',
      'Kärnstabilitet – överkroppen böjer sig medan benen håller positionen.',
    ],
    cardio: [
      'Övre kroppsrörlighetsflöde – kombinerar bakåtböjning med benstabilitet.',
      'Hoppreppa – kondition.',
    ],
    stretch: [
      'Hip flexor-sträck – framsidan frigörs för bakåtböjningen.',
      'Thoraxrotation och extension – bröstryggen böjs bakåt.',
      'Camel pose – bakåtböjning i Ina-Bauer-ryggen.',
    ],
  },

  'hydroblading': {
    strength: [
      'Djup squat med framåtlutning – hydroblading kräver extrem framåtlutning nära isen.',
      'Höftböjarsyrka – underkroppen böjer sig kraftigt.',
      'Rygg- och kärna i excentrisk kontroll – sänker sig kontrollerat mot isen.',
      'Ettbenssquat djup – en fot håller gliden.',
    ],
    cardio: [
      'Djupa squat-serier med framåtlutning – specifik rörelsevana.',
      'Hoppreppa – kondition.',
    ],
    stretch: [
      'Djup squat-sträck – full knä och höftflexion.',
      'Hamstringsträck – bakre kedjan i den framåtlutade positionen.',
      'Hip flexor-sträck – kontrastträck efter den kompakta positionen.',
    ],
  },

  'cantilever': {
    strength: [
      'Sidoplankan med höftlyft – lateral kärnkraft för den extrema sidelutningen.',
      'Hip-abduktorstyrka – hålls upp mot gravitationen lateralt.',
      'Oblique-styrka – sidan av bålkärnan bär hela kroppen.',
      'Ettbensbalans – all vikt på ett ben i extrem sidolutning.',
    ],
    cardio: [
      'Sidoböjningsserier med hållning – lateral uthållighet.',
      'Hoppreppa – kondition.',
    ],
    stretch: [
      'Lateral flanksträck stående – öppnar flanken för cantilever-positionen.',
      'IT-band-sträck – lateral lårfrihet.',
      'Vadssträck – fotledsrörlighet.',
    ],
  },

  'spiral': {
    strength: [
      'Hip-extension med band stående (arabesk) – håller benet högt bakom i spiralen.',
      'Hamstrings och sätesmuskel – lyfter och håller benet horisontellt eller högre.',
      'Ryggstärkare – överkroppen böjs framåt, benet lyfts bakåt.',
      'Ettbensbalans framåtlutad – simulerar spiralposition på golv.',
    ],
    cardio: [
      'Arabesk-hållningsserier – uthållighet i spiralpositionen.',
      'Hoppreppa – kondition.',
    ],
    stretch: [
      'Hamstringsträck – benet bakom ska nå högt.',
      'Hip flexor-sträck – stödbenet frigörs framåt.',
      'Ryggextensionssträck – överkroppen böjer sig fritt.',
    ],
  },

  'charlotte-spiral': {
    strength: [
      'Hamstrings extrem styrka – det fria benet lyfts vertikalt ovanför huvudet.',
      'Hip-flexor med motståndsband – benet hålls högt framåt.',
      'Ryggstärkare – överkroppen böjer sig bakåt.',
      'Ettbensbalans i extrem position – stödbenet bär allt.',
    ],
    cardio: [
      'Aktiv hamstrings-serie i stående – direktträning av det vertikala lyftet.',
      'Hoppreppa – kondition.',
    ],
    stretch: [
      'Extrem hamstrings-sträck (benet mot väggen vertikalt) – benet ska gå vertikalt.',
      'Ryggextension djup – överkroppen böjer sig bakåt.',
      'Hip flexor-sträck djupt – kontrast mot hög benlyft.',
    ],
  },

  'biellmann-spiral': {
    strength: [
      'Axel- och skulderrotatorstyrka – håller benet ovanför huvudet bakifrån.',
      'Hamstrings – extrem benlängd bakåt och uppåt.',
      'Ryggstärkare – extrem bakåtböjning kombinerat med benlyft.',
      'Ettbensbalans i maximalposition – det svåraste stabilitetskravet.',
    ],
    cardio: [
      'Gradvis biellmann-prep liggande – rörlighetsträning med kontroll.',
      'Hoppreppa – kondition.',
    ],
    stretch: [
      'Biellmann-sträck liggande på mage – gradvis förberedelse.',
      'Wheel pose (full brygga) – extrem thorax och lumbal rörlighet.',
      'Hamstrings mot väggen – extrem benlängd.',
    ],
  },
};
