export type OffIceExercises = {
  strength: string[];
  cardio: string[];
  stretch: string[];
  teknik?: string[];
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
      'Sidohopp – tränar den laterala rörelsen vid avhopp och landning.',
    ],
    stretch: [
      'Hip flexor-sträck – öppnar höften för det fria benets svängrörelse.',
      'Liggande quadssträck – löser ut framsidan av avhoppsbenet.',
      'Vadssträck – förbättrar vristens rörlighet inför takeoff.',
    ],
    teknik: [
      'Hoppimitation – övar ingång, avhopp och landningsposition för ett hopp på golvet.',
      'Landningsposition – tränar check-out-positionen och balansen direkt efter ett hopp.',
    ],
  },

  'axel-1': {
    strength: [
      'Ettbenssquat – tränar det kantspecifika avhoppet och koordinationen.',
      'Sidoutfall – stärker höftabduktorerna för den yttre kanten.',
      'Plankan – bygger kärnstabilitet för rotationen i luften.',
      'Vadhöjningar på ett ben – stärker plantarflexionen som driver avhoppet.',
    ],
    cardio: [
      'Hoppreppa – bygger explosiv kraft i avhoppsbenet.',
      'Sidohopp – simulerar kantarbetet och landningsstöten.',
    ],
    stretch: [
      'Hip flexor-sträck – frigör höften för svingbenet framåt.',
      'Piriformissträck – minskar spänning i höftrotatorer.',
      'Bröststräck – förbereder armsvingen för avhoppet.',
    ],
    teknik: [
      'Hoppimitation – övar ingång, avhopp och landningsposition för ett hopp på golvet.',
      'Landningsposition – tränar check-out-positionen och balansen direkt efter ett hopp.',
      'Rotationsövning – tränar arm-pull och axelposition för kontrollerad rotation i luften.',
      'Ingångssteg – tränar fotrörelsemönstret och kantarbetet inför hoppet.',
    ],
  },

  'axel-2': {
    strength: [
      'Bulgarisk split-squat – maximal enbensstyrka för det kraftfulla avhoppet.',
      'Medicinbollsrotation – bygger explosiv rotationskraft.',
      'Hängande benlyft – stärker buken och höftböjarna för kompakt rotation.',
      'Boxhopp – tränar snabb explosiv kraft från böjt knä till fullt avhopp.',
    ],
    cardio: [
      'Sprint-intervaller – bygger snabbstyrka i benen.',
      'Sidohopp – tränar landningskontrollen.',
    ],
    stretch: [
      'Hip flexor-sträck – nödvändig för den kraftfulla framsvingen.',
      'Thoraxrotation – ökar rörligheten i överkroppen för armsvingen.',
      'Höftrotationssträck – löser upp yttre kantens höftarbete.',
    ],
    teknik: [
      'Hoppimitation – övar ingång, avhopp och landningsposition för ett hopp på golvet.',
      'Landningsposition – tränar check-out-positionen och balansen direkt efter ett hopp.',
      'Rotationsövning – tränar arm-pull och axelposition för kontrollerad rotation i luften.',
      'Ingångssteg – tränar fotrörelsemönstret och kantarbetet inför hoppet.',
    ],
  },

  'axel-3': {
    strength: [
      'Bulgarisk split-squat – maximal enbenstyrka för 3,5 varv.',
      'Kabelrotation – tränar explosiv rotationskraft i stående.',
      'Hängande benlyft – koordinerar kärna och höftböjare.',
      'Boxhopp – tränar landningsstabilitet under hög belastning.',
    ],
    cardio: [
      'Bounding – bygger maximal explosiv kraft per steg.',
      'Sprint-intervaller – stärker hela kinetiska kedjan.',
    ],
    stretch: [
      'Hip flexor-sträck – frigör hela framsidan.',
      'Pigeon pose – djup sträckning av höftrotatorer och piriformis.',
      'Bröststräck – öppnar upp för maximal armsvingrörlighet.',
    ],
    teknik: [
      'Hoppimitation – övar ingång, avhopp och landningsposition för ett hopp på golvet.',
      'Landningsposition – tränar check-out-positionen och balansen direkt efter ett hopp.',
      'Rotationsövning – tränar arm-pull och axelposition för kontrollerad rotation i luften.',
      'Ingångssteg – tränar fotrörelsemönstret och kantarbetet inför hoppet.',
    ],
  },

  'salchow-1': {
    strength: [
      'Adduktor och abduktor – stärker insidekanten för salchow-avhoppet.',
      'Ettbenssquat – specifikt avhoppsben för salchow.',
      'Rumpkick stående – aktiverar sätesmuskeln för avhoppet.',
    ],
    cardio: [
      'Hoppreppa – bygger timing och rytm i avhoppsmomentet.',
      'Laterala stegserier – tränar övergången från glid till avhopp.',
    ],
    stretch: [
      'Adduktorsträck – öppnar upp för insidekantsarbetet.',
      'Hip flexor-sträck – frigör svingbenet för utsvingen.',
      'Hamstringsträck – minskar spänning i baksidan av avhoppsbenet.',
    ],
    teknik: [
      'Hoppimitation – övar ingång, avhopp och landningsposition för ett hopp på golvet.',
      'Landningsposition – tränar check-out-positionen och balansen direkt efter ett hopp.',
      'Mohawk-sekvens – övar fotbytet och viktöverföringen som ingång till kanthopp.',
    ],
  },

  'salchow-2': {
    strength: [
      'Adduktor-maskin – stärker insidekantsarbetet specifikt.',
      'Bulgarisk split-squat – bygger kraft i avhoppsbenet.',
      'Medicinbollsrotation – tränar rotationsinitiering i luften.',
      'Sidoplankan – stärker kärnan lateralt för jämn rotation.',
    ],
    cardio: [
      'Sidohopp – tränar insidekantens explosivitet.',
      'Hoppreppa – ökar rotationshastigheten.',
    ],
    stretch: [
      'Adduktorsträck – öppnar upp insidan av höften.',
      'Piriformissträck – löser upp höftrotatorer efter rotationen.',
      'Ryggrotation liggande – bibehåller rörligheten i thorax.',
    ],
    teknik: [
      'Hoppimitation – övar ingång, avhopp och landningsposition för ett hopp på golvet.',
      'Landningsposition – tränar check-out-positionen och balansen direkt efter ett hopp.',
      'Mohawk-sekvens – övar fotbytet och viktöverföringen som ingång till kanthopp.',
      'Rotationsövning – tränar arm-pull och axelposition för kontrollerad rotation i luften.',
    ],
  },

  'salchow-3': {
    strength: [
      'Ettbensdödlyft – maximal höftstyrka för det kraftiga avhoppet.',
      'Kabelrotation – tränar rotationskraften.',
      'Hängande benlyft – stärker kärnan för kompakt trippelrotation.',
      'Boxhopp – kontrollerad kraft vid nedkomsten.',
    ],
    cardio: [
      'Bounding – kombinerar explosivitet och rotationskoordination.',
      'Sprint-intervaller – maximal benstyrka och snabbhet.',
    ],
    stretch: [
      'Pigeon pose – djup höftöppning inför salchow-kanten.',
      'Adduktorsträck – nödvändig adduktorflexibilitet.',
      'Thoraxrotation – bibehåller överkroppens rörlighet.',
    ],
    teknik: [
      'Hoppimitation – övar ingång, avhopp och landningsposition för ett hopp på golvet.',
      'Landningsposition – tränar check-out-positionen och balansen direkt efter ett hopp.',
      'Mohawk-sekvens – övar fotbytet och viktöverföringen som ingång till kanthopp.',
      'Rotationsövning – tränar arm-pull och axelposition för kontrollerad rotation i luften.',
    ],
  },

  'loop-1': {
    strength: [
      'Ettbenssquat – avhoppet sker helt från ett ben i loop.',
      'Hip abduktor med band – stärker den yttre kanten i höften.',
      'Tåhöjning – tränar den kompakta enbenslyften.',
    ],
    cardio: [
      'Hoppreppa – simulerar loop-hoppets avhopp.',
      'Hoppreppa – bygger timing och benstyrka.',
    ],
    stretch: [
      'Piriformissträck – löser spänning i det yttre höftarbetet.',
      'Hamstringsträck – frigör bakre kedjan i avhoppsbenet.',
      'Vadssträck – förbättrar fotledsmobiliteten.',
    ],
    teknik: [
      'Hoppimitation – övar ingång, avhopp och landningsposition för ett hopp på golvet.',
      'Landningsposition – tränar check-out-positionen och balansen direkt efter ett hopp.',
    ],
  },

  'loop-2': {
    strength: [
      'Bulgarisk split-squat – kraftutveckling i avhoppsbenet.',
      'Hip abduktor med band – specifikt för yttre kantkontrollen.',
      'Medicinbollsrotation – tränar rotationsinitiering.',
      'Plankan – kärna för kompakt dubbelrotation.',
    ],
    cardio: [
      'Boxhopp – explosiv kraft i avhoppsbenet.',
      'Laterala stegserier – simulerar kantarbetet.',
    ],
    stretch: [
      'Piriformissträck – höftens yttre rotatorer.',
      'Hamstringsträck – balanserar bakre kedjan.',
      'Hip flexor-sträck – frigör framsidan inför nästa rörelse.',
    ],
    teknik: [
      'Hoppimitation – övar ingång, avhopp och landningsposition för ett hopp på golvet.',
      'Landningsposition – tränar check-out-positionen och balansen direkt efter ett hopp.',
      'Rotationsövning – tränar arm-pull och axelposition för kontrollerad rotation i luften.',
    ],
  },

  'loop-3': {
    strength: [
      'Ettbensdödlyft – maximal posterior kedjestyrka.',
      'Kabelrotation – explosiv rotationskraft för tre varv.',
      'Hängande benlyft – kärna och höftböjare.',
      'Boxhopp – landningskontroll.',
    ],
    cardio: [
      'Sprint-intervaller – benstyrka och snabbhet.',
      'Hoppreppa – simulerar avhoppet under trötthet.',
    ],
    stretch: [
      'Pigeon pose – djup höftöppning.',
      'Thoraxrotation – rörlig överkropp för rotationen.',
      'Vadssträck – fotledsrörlighet för yttre kanten.',
    ],
    teknik: [
      'Hoppimitation – övar ingång, avhopp och landningsposition för ett hopp på golvet.',
      'Landningsposition – tränar check-out-positionen och balansen direkt efter ett hopp.',
      'Rotationsövning – tränar arm-pull och axelposition för kontrollerad rotation i luften.',
    ],
  },

  'toe-loop-1': {
    strength: [
      'Tåhöjning – stärker tåpicken som driver avhoppet.',
      'Ettbenssquat – avhoppsben för toe loop.',
      'Vadhöjningar på ett ben – bygger plantarflexionsstyrka för pick-trycket.',
    ],
    cardio: [
      'Hoppreppa – tränar tå-pushoff och rytm.',
      'Sidohopp – lateral stabilitet vid insteget.',
    ],
    stretch: [
      'Vadssträck – fotledsrörlighet för tåpicken.',
      'Tåböjarsträck – löser upp plantarfascian och tårna.',
      'Hip flexor-sträck – frigör svingbenet.',
    ],
    teknik: [
      'Hoppimitation – övar ingång, avhopp och landningsposition för ett hopp på golvet.',
      'Landningsposition – tränar check-out-positionen och balansen direkt efter ett hopp.',
      'Tåpick-avhopp – simulerar avhoppsrörelsen för tå-hopp (Toe-loop, Flip, Lutz) på marken.',
    ],
  },

  'toe-loop-2': {
    strength: [
      'Tåhöjning – kraftigare pick för dubbelns avhopp.',
      'Bulgarisk split-squat – mer kraft i avhoppsbenet.',
      'Medicinbollsrotation – rotationskraft för dubbelvarvet.',
      'Plankan – kärna för kontrollerad luftposition.',
    ],
    cardio: [
      'Hoppreppa – tränar tårnas explosivitet.',
      'Hoppreppa – rotationshastighet.',
    ],
    stretch: [
      'Vadssträck – full flexibilitet i vadkomplexet.',
      'Piriformissträck – höftrotatorer efter rotationen.',
      'Liggande quadssträck – framsidan av avhoppsbenet.',
    ],
    teknik: [
      'Hoppimitation – övar ingång, avhopp och landningsposition för ett hopp på golvet.',
      'Landningsposition – tränar check-out-positionen och balansen direkt efter ett hopp.',
      'Tåpick-avhopp – simulerar avhoppsrörelsen för tå-hopp (Toe-loop, Flip, Lutz) på marken.',
      'Rotationsövning – tränar arm-pull och axelposition för kontrollerad rotation i luften.',
    ],
  },

  'toe-loop-3': {
    strength: [
      'Tåhöjning – pick-kraften är avgörande för 3 varv.',
      'Ettbensdödlyft – maximal höftstyrka.',
      'Kabelrotation – explosiv rotationskraft.',
      'Hängande benlyft – kärna och kompakt luftposition.',
    ],
    cardio: [
      'Bounding – maximal kraft per steg.',
      'Sprint-intervaller – snabba ben.',
    ],
    stretch: [
      'Vadssträck – tårna belastas maximalt.',
      'Pigeon pose – djup höftsträck.',
      'Thoraxrotation – överkroppens rörlighet.',
    ],
    teknik: [
      'Hoppimitation – övar ingång, avhopp och landningsposition för ett hopp på golvet.',
      'Landningsposition – tränar check-out-positionen och balansen direkt efter ett hopp.',
      'Tåpick-avhopp – simulerar avhoppsrörelsen för tå-hopp (Toe-loop, Flip, Lutz) på marken.',
      'Rotationsövning – tränar arm-pull och axelposition för kontrollerad rotation i luften.',
    ],
  },

  'flip-1': {
    strength: [
      'Adduktor och abduktor – stärker insidekanten för flip.',
      'Tåhöjning – pick-foten och balansen.',
      'Ettbenssquat – avhoppsben i flip.',
      'Plankan – kärna för kontroll i luften.',
    ],
    cardio: [
      'Laterala stegserier – tränar insidekantsövergången.',
      'Hoppreppa – grundläggande benstyrka och tajming.',
    ],
    stretch: [
      'Adduktorsträck – insidan av höften för insidekanten.',
      'Vadssträck – pick-foten.',
      'Hip flexor-sträck – svingbenet i flip.',
    ],
    teknik: [
      'Hoppimitation – övar ingång, avhopp och landningsposition för ett hopp på golvet.',
      'Landningsposition – tränar check-out-positionen och balansen direkt efter ett hopp.',
      'Tåpick-avhopp – simulerar avhoppsrörelsen för tå-hopp (Toe-loop, Flip, Lutz) på marken.',
      'Mohawk-sekvens – övar fotbytet och viktöverföringen som ingång till kanthopp.',
    ],
  },

  'flip-2': {
    strength: [
      'Bulgarisk split-squat – kraftutveckling i avhoppsbenet.',
      'Adduktor-maskin – specifik insidekantstyrka.',
      'Medicinbollsrotation – rotationskraft för 2 varv.',
      'Tåhöjning – pick-foten i flip.',
    ],
    cardio: [
      'Sidohopp – insidekantens explosivitet.',
      'Hoppreppa – rotationshastighet.',
    ],
    stretch: [
      'Adduktorsträck – insidekanten.',
      'Piriformissträck – höftrotatorer.',
      'Bröststräck – armsvingen för rotationen.',
    ],
    teknik: [
      'Hoppimitation – övar ingång, avhopp och landningsposition för ett hopp på golvet.',
      'Landningsposition – tränar check-out-positionen och balansen direkt efter ett hopp.',
      'Tåpick-avhopp – simulerar avhoppsrörelsen för tå-hopp (Toe-loop, Flip, Lutz) på marken.',
      'Mohawk-sekvens – övar fotbytet och viktöverföringen som ingång till kanthopp.',
      'Rotationsövning – tränar arm-pull och axelposition för kontrollerad rotation i luften.',
    ],
  },

  'flip-3': {
    strength: [
      'Ettbensdödlyft – maximal kraft.',
      'Kabelrotation – rotationsinitiering.',
      'Hängande benlyft – kärna och höftböjare.',
      'Adduktor-maskin – stark insidekant krävs.',
    ],
    cardio: [
      'Bounding – maximal kraft per steg.',
      'Sprint-intervaller – explosiv snabbhet.',
    ],
    stretch: [
      'Pigeon pose – djup höftsträck.',
      'Adduktorsträck – adduktorer.',
      'Thoraxrotation – överkroppens rörlighet.',
    ],
    teknik: [
      'Hoppimitation – övar ingång, avhopp och landningsposition för ett hopp på golvet.',
      'Landningsposition – tränar check-out-positionen och balansen direkt efter ett hopp.',
      'Tåpick-avhopp – simulerar avhoppsrörelsen för tå-hopp (Toe-loop, Flip, Lutz) på marken.',
      'Mohawk-sekvens – övar fotbytet och viktöverföringen som ingång till kanthopp.',
      'Rotationsövning – tränar arm-pull och axelposition för kontrollerad rotation i luften.',
    ],
  },

  'lutz-1': {
    strength: [
      'Hip abduktor med band – stärker den yttre kanten i lutz.',
      'Bulgarisk split-squat – tränar den utmanande yttre kanten.',
      'Tåhöjning – pick-foten i lutz.',
      'Sidoplankan – lateral kärna för yttre kantbalansen.',
    ],
    cardio: [
      'Laterala stegserier – yttre kantens explosivitet.',
      'Hoppreppa – grundläggande benstyrka.',
    ],
    stretch: [
      'Piriformissträck – yttre höftrotatorer för utåtkanten.',
      'IT-band-sträck – lateral höft- och lårfrihet.',
      'Vadssträck – pick-foten.',
    ],
    teknik: [
      'Hoppimitation – övar ingång, avhopp och landningsposition för ett hopp på golvet.',
      'Landningsposition – tränar check-out-positionen och balansen direkt efter ett hopp.',
      'Tåpick-avhopp – simulerar avhoppsrörelsen för tå-hopp (Toe-loop, Flip, Lutz) på marken.',
      'Lutz-ingång – tränar det bakåtglidande kantarbetet och axelkontrollen inför Lutz-avhoppet.',
    ],
  },

  'lutz-2': {
    strength: [
      'Hip abduktor med band – yttre kanten kräver stark abduktion.',
      'Bulgarisk split-squat – kantspecifik styrka.',
      'Medicinbollsrotation – rotationskraft.',
      'Tåhöjning – kraftig pick för dubbelhoppet.',
    ],
    cardio: [
      'Sidohopp – lateral explosivitet.',
      'Hoppreppa – rotationshastighet.',
    ],
    stretch: [
      'Pigeon pose – djup yttre höftsträck.',
      'IT-band-sträck – lateral friktion.',
      'Bröststräck – armsvingen motverkar kontra-rotationen i lutz.',
    ],
    teknik: [
      'Hoppimitation – övar ingång, avhopp och landningsposition för ett hopp på golvet.',
      'Landningsposition – tränar check-out-positionen och balansen direkt efter ett hopp.',
      'Tåpick-avhopp – simulerar avhoppsrörelsen för tå-hopp (Toe-loop, Flip, Lutz) på marken.',
      'Lutz-ingång – tränar det bakåtglidande kantarbetet och axelkontrollen inför Lutz-avhoppet.',
      'Rotationsövning – tränar arm-pull och axelposition för kontrollerad rotation i luften.',
    ],
  },

  'lutz-3': {
    strength: [
      'Ettbensdödlyft – maximal höftstyrka.',
      'Kabelrotation – lutz-specifik rotationsstyrka.',
      'Hängande benlyft – kärna för 3 varv.',
      'Tåhöjning – pick-kraften är avgörande.',
    ],
    cardio: [
      'Bounding – maximal kraft.',
      'Sprint-intervaller – snabba ben.',
    ],
    stretch: [
      'Pigeon pose – yttre höft.',
      'Thoraxrotation – överkroppens rörlighet.',
      'IT-band-sträck – lateral kedja.',
    ],
    teknik: [
      'Hoppimitation – övar ingång, avhopp och landningsposition för ett hopp på golvet.',
      'Landningsposition – tränar check-out-positionen och balansen direkt efter ett hopp.',
      'Tåpick-avhopp – simulerar avhoppsrörelsen för tå-hopp (Toe-loop, Flip, Lutz) på marken.',
      'Lutz-ingång – tränar det bakåtglidande kantarbetet och axelkontrollen inför Lutz-avhoppet.',
      'Rotationsövning – tränar arm-pull och axelposition för kontrollerad rotation i luften.',
    ],
  },

  'euler-1': {
    strength: [
      'Ettbenssquat – euler avhoppas från yttre bakre kant.',
      'Hip abduktor med band – yttre kanten.',
      'Tåhöjning – pick-foten i euler.',
      'Plankan – kärna för det kompakta enkla varvet.',
    ],
    cardio: [
      'Hoppreppa – tajming och benstyrka.',
      'Laterala stegserier – kantövergångsträning.',
    ],
    stretch: [
      'Piriformissträck – yttre kanten.',
      'Vadssträck – pick-foten.',
      'Hip flexor-sträck – frigör svingbenet.',
    ],
    teknik: [
      'Hoppimitation – övar ingång, avhopp och landningsposition för ett hopp på golvet.',
      'Landningsposition – tränar check-out-positionen och balansen direkt efter ett hopp.',
    ],
  },

  'split-jump': {
    strength: [
      'Sidoutfall – tränar den explosiva benspärkan.',
      'Hamstrings excentrisk styrka – bakre kedjans styrka för benlyftshöjden.',
      'Hip flexor-styrka med band – frontsidans lyft i split-positionen.',
      'Sidoplankan – kärna för balansen i luften.',
    ],
    cardio: [
      'Hoppreppa – grundläggande explosivitet.',
      'Sidohopp – direkt träning av rörelsen.',
    ],
    stretch: [
      'Hamstringsträck – benet behöver nå högt bakåt.',
      'Hip flexor-sträck – frontsidans lyft.',
      'Spagatt – full rörelseomfång för split-positionen.',
    ],
    teknik: [
      'Hoppimitation – övar ingång, avhopp och landningsposition för ett hopp på golvet.',
      'Landningsposition – tränar check-out-positionen och balansen direkt efter ett hopp.',
    ],
  },

  // ── Piruetter ───────────────────────────────────────────────────────────────

  'uppright-basic': {
    strength: [
      'Ettbensbalans – grundläggande piruettstabilitet.',
      'Plankan – kärna håller kroppen kompakt under rotation.',
      'Sidoplankan – lateral stabilitet för rak piruettaxel.',
    ],
    cardio: [
      'Hoppreppa – kondition och rytmkänsla.',
      'Laterala stegserier – koordination och rytm.',
    ],
    stretch: [
      'Vadssträck – vristens frihet på stödbenet.',
      'Axelsträck – frigör axlarna för piruettpositionen.',
      'Liggande quadssträck – stödbenet sträcks efter piruetten.',
    ],
    teknik: [
      'Spotting – tränar blickteknik för att hålla orientering och balans under rotation.',
      'Rotationsövning – tränar arm-pull och axelposition för kontrollerad rotation i luften.',
    ],
  },

  'scratch-spin': {
    strength: [
      'Ettbensbalans – tränar kontrollen i piruettpositionen.',
      'Plankan – kärna och höftböjare för kompakt position.',
      'Adduktor-maskin – drar in fria benet och accelererar piruetten.',
    ],
    cardio: [
      'Hoppreppa – kondition.',
      'Sidohopp – explosivitet.',
    ],
    stretch: [
      'Axelsträck – armarna dras in tätt mot kroppen.',
      'Liggande quadssträck – stödbenets framdel.',
      'Vadssträck – vristens rörlighet på tå.',
    ],
    teknik: [
      'Spotting – tränar blickteknik för att hålla orientering och balans under rotation.',
      'Rotationsövning – tränar arm-pull och axelposition för kontrollerad rotation i luften.',
    ],
  },

  'back-spin': {
    strength: [
      'Ettbensbalans – back-spin kräver balans på ett ben.',
      'Hip abduktor med band – bakre balansen kräver höftstabilitet.',
      'Ryggstärkare – kontroll av baklängesaxeln.',
    ],
    cardio: [
      'Hoppreppa – kondition.',
      'Laterala stegserier – koordination.',
    ],
    stretch: [
      'Hip flexor-sträck – frigör framsidan på stödbenet.',
      'Bröststräck – öppnar upp för bakåtbalansen.',
      'Vadssträck – fotledsrörlighet.',
    ],
    teknik: [
      'Spotting – tränar blickteknik för att hålla orientering och balans under rotation.',
      'Rotationsövning – tränar arm-pull och axelposition för kontrollerad rotation i luften.',
    ],
  },

  'layback-spin': {
    strength: [
      'Ryggstärkare – stärker musklerna som håller bakåtböjningen.',
      'Plankan – kärnstabilitet i extension.',
      'Ettbensbalans – piruettbalansen krävs under rörlighetsutmaningen.',
      'Axelstabilitet – skyddar axlarna i bakåtposition.',
    ],
    cardio: [
      'Yoga flow – kombinerar rörlighet och kondition.',
      'Hoppreppa – kondition.',
    ],
    stretch: [
      'Camel pose – djup bakåtböjning i bröstryggen.',
      'Bröststräck – öppnar thorax.',
      'Hip flexor-sträck – framsidan frigörs för bakåtpositionen.',
    ],
    teknik: [
      'Spotting – tränar blickteknik för att hålla orientering och balans under rotation.',
      'Rotationsövning – tränar arm-pull och axelposition för kontrollerad rotation i luften.',
    ],
  },

  'biellmann-spin': {
    strength: [
      'Axelstabilitet – håller benet uppe bakom huvudet.',
      'Ryggstärkare – kontrollerar den extrema bakåtböjningen.',
      'Hamstrings excentrisk styrka – benet dras upp utan att spänna.',
      'Ettbensbalans – piruettbalansen under extremt rörlighetsläge.',
    ],
    cardio: [
      'Yoga flow – rörlighet och uthållighet.',
      'Hoppreppa – kondition.',
    ],
    stretch: [
      'Biellmann-sträck liggande – gradvis förberedelse.',
      'Camel pose – djup brygga.',
      'Hamstringsträck – extrem hamstringflexibilitet krävs.',
    ],
    teknik: [
      'Spotting – tränar blickteknik för att hålla orientering och balans under rotation.',
      'Rotationsövning – tränar arm-pull och axelposition för kontrollerad rotation i luften.',
    ],
  },

  'attitude-spin': {
    strength: [
      'Hip flexor-styrka med band – håller benet i attitydposition.',
      'Hip abduktor med band – benet hålls utåt och uppåt.',
      'Ettbensbalans – stödbenet under den statiska benpositionen.',
      'Ryggstärkare – överkroppen hålls upprätt.',
    ],
    cardio: [
      'Hoppreppa – kondition.',
      'Laterala stegserier – koordination och rytm.',
    ],
    stretch: [
      'Hip flexor-sträck – frigör höften för benlyftets vinkel.',
      'Liggande quadssträck – attitydbenet är böjt.',
      'Axelsträck – armarna hålls i elegant position.',
    ],
    teknik: [
      'Spotting – tränar blickteknik för att hålla orientering och balans under rotation.',
      'Rotationsövning – tränar arm-pull och axelposition för kontrollerad rotation i luften.',
    ],
  },

  'sit-spin': {
    strength: [
      'Djup squat – sittposition kräver full knäflexion med kraft.',
      'Ettbenssquat – stödbenet i sit-spin är under extrem belastning.',
      'Plankan – kärnstabilitet i sittposition.',
    ],
    cardio: [
      'Wall sit – specifik träning av sittpositionens uthållighet.',
      'Hoppreppa – kondition.',
    ],
    stretch: [
      'Djup squat-sträck – full ankelrörlighet för sittposition.',
      'Hip flexor-sträck – fri höft för den kompakta formen.',
      'Liggande quadssträck – framsidan av det böjda stödbenet.',
    ],
    teknik: [
      'Spotting – tränar blickteknik för att hålla orientering och balans under rotation.',
      'Rotationsövning – tränar arm-pull och axelposition för kontrollerad rotation i luften.',
    ],
  },

  'sit-spin-back': {
    strength: [
      'Djup squat – enbenssittstyrka.',
      'Hip abduktor med band – baklängesbalansen i djup squat.',
      'Ryggstärkare – bakåtaxeln kräver mer lumbal kontroll.',
      'Plankan – kompakt position baklänges.',
    ],
    cardio: [
      'Wall sit – uthållighet i den djupa positionen.',
      'Hoppreppa – kondition.',
    ],
    stretch: [
      'Djup squat-sträck – full ankelrörlighet.',
      'Piriformissträck – höftrotatorer.',
      'Ryggrotation liggande – lumbal rörlighet för baklängesaxeln.',
    ],
    teknik: [
      'Spotting – tränar blickteknik för att hålla orientering och balans under rotation.',
      'Rotationsövning – tränar arm-pull och axelposition för kontrollerad rotation i luften.',
    ],
  },

  'pancake-spin': {
    strength: [
      'Adduktor-maskin – benet trycks ner mot isen i T-position.',
      'Hamstrings excentrisk styrka – kontrollerat nedtryck av det horisontella benet.',
      'Ettbensbalans – stödbenet under extremt rörlighetsläge.',
      'Ryggstärkare – överkroppen hålls parallell med golvet.',
    ],
    cardio: [
      'Hoppreppa – kondition.',
      'Laterala stegserier – koordination.',
    ],
    stretch: [
      'Straddle – det horisontella benet kräver full adduktorlängd.',
      'Hamstringsträck – benet sträckt ut åt sidan.',
      'Ryggrotation liggande – hela bakre kedjan.',
    ],
    teknik: [
      'Spotting – tränar blickteknik för att hålla orientering och balans under rotation.',
      'Rotationsövning – tränar arm-pull och axelposition för kontrollerad rotation i luften.',
    ],
  },

  'cannonball-spin': {
    strength: [
      'Djup squat – tränar den extrema böjpositionen.',
      'Hip flexor-styrka med band – knäna dras mot bröstet.',
      'Plankan – håller kroppen tät runt stödbenet.',
      'Ettbensbalans – stödbenet bär all vikt.',
    ],
    cardio: [
      'Wall sit – uthållighet i extrem sittposition.',
      'Hoppreppa – kondition.',
    ],
    stretch: [
      'Djup squat-sträck – full knä och höftflexion.',
      'Ryggrotation liggande – lumbal rörlighet.',
      'Hip flexor-sträck – kontrastträck efter den kompakta positionen.',
    ],
    teknik: [
      'Spotting – tränar blickteknik för att hålla orientering och balans under rotation.',
      'Rotationsövning – tränar arm-pull och axelposition för kontrollerad rotation i luften.',
    ],
  },

  'camel-spin': {
    strength: [
      'Hip-extension med band – håller det fria benet horisontellt.',
      'Ryggstärkare – stöder det horisontella överkroppsläget.',
      'Hamstrings excentrisk styrka – det fria benet lyfts och hålls bakåt.',
      'Ettbensbalans – simulerar kamelposition på golv.',
    ],
    cardio: [
      'Yoga flow – direktträning av kamelkroppspositionen.',
      'Hoppreppa – kondition.',
    ],
    stretch: [
      'Hip flexor-sträck – framsidan av stödbenet frigörs.',
      'Hamstringsträck – det fria benet behöver vara långt bakåt.',
      'Bröststräck – öppnar ryggen i kamelposition.',
    ],
    teknik: [
      'Spotting – tränar blickteknik för att hålla orientering och balans under rotation.',
      'Rotationsövning – tränar arm-pull och axelposition för kontrollerad rotation i luften.',
    ],
  },

  'layover-camel': {
    strength: [
      'Hip abduktor med band – rotationen av det fria benet utåt.',
      'Oblique-styrka – sned-böjningen kräver lateral kärnstyrka.',
      'Axelstabilitet – armen hålls korrekt.',
      'Ryggstärkare – det fria benet roteras utåt och uppåt.',
    ],
    cardio: [
      'Hoppreppa – kondition.',
      'Laterala stegserier – lateral uthållighet.',
    ],
    stretch: [
      'Lateral flanksträck – öppnar flanken för layover-positionen.',
      'Piriformissträck – höftrotatorer.',
      'Bröststräck – överkroppens sideways-rörlighet.',
    ],
    teknik: [
      'Spotting – tränar blickteknik för att hålla orientering och balans under rotation.',
      'Rotationsövning – tränar arm-pull och axelposition för kontrollerad rotation i luften.',
    ],
  },

  'donut-spin': {
    strength: [
      'Ryggstärkare – håller benet uppåt bakåt i hög position.',
      'Axelstabilitet – benet greppas med händerna.',
      'Hamstrings excentrisk styrka – benet dras upp mot huvudet.',
      'Ettbensbalans – stödbenet under extremt läge.',
    ],
    cardio: [
      'Yoga flow – gradvis bakåtböjning.',
      'Hoppreppa – kondition.',
    ],
    stretch: [
      'Wheel pose – extrem thorax och lumbal rörlighet.',
      'Hamstringsträck – benet upp mot kroppen.',
      'Axelsträck – axlarna möter benet.',
    ],
    teknik: [
      'Spotting – tränar blickteknik för att hålla orientering och balans under rotation.',
      'Rotationsövning – tränar arm-pull och axelposition för kontrollerad rotation i luften.',
    ],
  },

  'illusion-spin': {
    strength: [
      'Ettbenssquat – simulerar illusionens rotation.',
      'Hip flexor-styrka med band – drivkraften i illusionsrörelsen.',
      'Hamstrings excentrisk styrka – det fria benet svingar i en cirkel.',
      'Plankan – stabiliserar axeln under rörelsen.',
    ],
    cardio: [
      'Hoppreppa – kondition.',
      'Laterala stegserier – teknisk repetitionsträning.',
    ],
    stretch: [
      'Hamstringsträck – hela bakre kedjan.',
      'Hip flexor-sträck – framsidans rörlighet.',
      'Ryggrotation liggande – thorax följer benets svängning.',
    ],
    teknik: [
      'Spotting – tränar blickteknik för att hålla orientering och balans under rotation.',
      'Rotationsövning – tränar arm-pull och axelposition för kontrollerad rotation i luften.',
    ],
  },

  'flying-camel': {
    strength: [
      'Boxhopp – tränar kombinationen hopp till kamelposition.',
      'Hip-extension med band – det fria benet ska gå horisontellt vid landning.',
      'Ryggstärkare – kamelposition ska intas omedelbart.',
      'Ettbenssquat – landningsbenet bär stöten.',
    ],
    cardio: [
      'Hoppreppa – direktträning av flyingkamelen.',
      'Hoppreppa – explosivitet.',
    ],
    stretch: [
      'Hip flexor-sträck – stödbenet frigörs för kamelposition.',
      'Hamstringsträck – det fria benet bakåt.',
      'Ryggextensionssträck – kamelpositionens bakåtlutning.',
    ],
    teknik: [
      'Hoppimitation – övar ingång, avhopp och landningsposition för ett hopp på golvet.',
      'Landningsposition – tränar check-out-positionen och balansen direkt efter ett hopp.',
      'Spotting – tränar blickteknik för att hålla orientering och balans under rotation.',
      'Rotationsövning – tränar arm-pull och axelposition för kontrollerad rotation i luften.',
    ],
  },

  'flying-sit-spin': {
    strength: [
      'Boxhopp – tränar flyingsittrotationens landning.',
      'Djup squat – landningsbenet sänker sig direkt till sittposition.',
      'Plankan – kompakt position vid landning.',
    ],
    cardio: [
      'Sidohopp – explosivitet och landningskontroll.',
      'Hoppreppa – kondition.',
    ],
    stretch: [
      'Djup squat-sträck – ankel och höft för sittposition.',
      'Liggande quadssträck – framsidan av stödbenet.',
      'Hip flexor-sträck – kontrastträck efter squat-positionen.',
    ],
    teknik: [
      'Hoppimitation – övar ingång, avhopp och landningsposition för ett hopp på golvet.',
      'Landningsposition – tränar check-out-positionen och balansen direkt efter ett hopp.',
      'Spotting – tränar blickteknik för att hålla orientering och balans under rotation.',
      'Rotationsövning – tränar arm-pull och axelposition för kontrollerad rotation i luften.',
    ],
  },

  'butterfly': {
    strength: [
      'Hip abduktor med band – det horisontella benet behöver lyftkraft.',
      'Medicinbollsrotation – driver butterflyrörelsens sveprörelse.',
      'Oblique-styrka – den horisontella rotationen kring stödbenet.',
      'Ettbensbalans – stödbenet under piruettrörelsen.',
    ],
    cardio: [
      'Hoppreppa – kondition.',
      'Laterala stegserier – direktträning av butterflyrörelsens form.',
    ],
    stretch: [
      'Straddle – horisontellt benet behöver full adduktorlängd.',
      'Ryggrotation liggande – thorax rörlighet.',
      'Hip flexor-sträck – framsidan frigörs efter rörelsen.',
    ],
    teknik: [
      'Hoppimitation – övar ingång, avhopp och landningsposition för ett hopp på golvet.',
      'Landningsposition – tränar check-out-positionen och balansen direkt efter ett hopp.',
      'Spotting – tränar blickteknik för att hålla orientering och balans under rotation.',
      'Rotationsövning – tränar arm-pull och axelposition för kontrollerad rotation i luften.',
    ],
  },

  'death-drop': {
    strength: [
      'Ettbenssquat – extremt kontrollerad sittlandning.',
      'Hip abduktor med band – det fria benet spreads ut.',
      'Boxhopp – avhoppet kräver maximal kraft.',
      'Ryggstärkare – kontrollerat bakåtfall till sittposition.',
    ],
    cardio: [
      'Sidohopp – explosivitet för avhoppet.',
      'Hoppreppa – kondition.',
    ],
    stretch: [
      'Djup squat-sträck – sittlandningens krav.',
      'Straddle – det fria benets ytterläge.',
      'Hip flexor-sträck – kontrast till den kompakta sittlandningen.',
    ],
    teknik: [
      'Hoppimitation – övar ingång, avhopp och landningsposition för ett hopp på golvet.',
      'Landningsposition – tränar check-out-positionen och balansen direkt efter ett hopp.',
      'Spotting – tränar blickteknik för att hålla orientering och balans under rotation.',
      'Rotationsövning – tränar arm-pull och axelposition för kontrollerad rotation i luften.',
    ],
  },

  'combination-spin': {
    strength: [
      'Ettbensbalans – tränar övergångarna mellan positioner.',
      'Plankan – balansen ska bibehållas under positionsbytena.',
      'Djup squat – sit-spin-positionen kräver full knäflexion.',
    ],
    cardio: [
      'Wall sit – konditionsträning av sittflödet.',
      'Hoppreppa – kondition.',
    ],
    stretch: [
      'Hip flexor-sträck – alla positioner kräver olika flexibilitet.',
      'Ryggrotation liggande – rörlighet för positionsbytena.',
      'Axelsträck – överkroppen rör sig fritt mellan positionerna.',
    ],
    teknik: [
      'Spotting – tränar blickteknik för att hålla orientering och balans under rotation.',
      'Rotationsövning – tränar arm-pull och axelposition för kontrollerad rotation i luften.',
    ],
  },

  // ── Svängar ───────────────────────────────────────────────────────────────

  'three-turn': {
    strength: [
      'Ettbensbalans – tränar den precisa axelrotationen.',
      'Fotledsstabilitet med band – kant-till-kant stabilitet i vristen.',
      'Plankan – skulder och höft arbetar i kontra-rotation.',
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
    teknik: [
      'Ingångssteg – tränar fotrörelsemönstret och kantarbetet inför hoppet.',
      'Spotting – tränar blickteknik för att hålla orientering och balans under rotation.',
    ],
  },

  'bracket': {
    strength: [
      'Ettbensbalans – bracketen kräver aktiv motståndsrotation.',
      'Oblique-styrka – sidovägg motstår axelrotationen.',
      'Fotledsstabilitet med band – inre/yttre kant-stabilitet.',
      'Plankan – axeln hålls stabil mot rotationskraften.',
    ],
    cardio: [
      'Laterala stegserier – kantprecision.',
      'Hoppreppa – kondition.',
    ],
    stretch: [
      'Thoraxrotation – överkroppens rörlighet.',
      'Vadssträck – fotledsrörlighet.',
      'Piriformissträck – höftrotatorer.',
    ],
    teknik: [
      'Ingångssteg – tränar fotrörelsemönstret och kantarbetet inför hoppet.',
      'Lutz-ingång – tränar det bakåtglidande kantarbetet och axelkontrollen inför Lutz-avhoppet.',
    ],
  },

  'rocker': {
    strength: [
      'Ettbensbalans – rockern byter kant längs fotens axel.',
      'Fotledsstabilitet med band – kant-till-kant i fotledsled.',
      'Plankan – kroppen roterar inte, foten byter kant.',
    ],
    cardio: [
      'Laterala stegserier – rytm och precision.',
      'Hoppreppa – kondition.',
    ],
    stretch: [
      'Vadssträck – full fotledsrörlighet.',
      'Fotledsrotationer – värmer upp vristens rörlighet.',
      'Hip flexor-sträck – frigör höften under svängen.',
    ],
    teknik: [
      'Ingångssteg – tränar fotrörelsemönstret och kantarbetet inför hoppet.',
      'Spotting – tränar blickteknik för att hålla orientering och balans under rotation.',
    ],
  },

  'counter': {
    strength: [
      'Oblique-styrka – countern kräver aktiv rotation mot rörelseriktningen.',
      'Ettbensbalans – skulder roterar in i kurvan aktivt.',
      'Adduktor och abduktor – kant-specificitet.',
      'Medicinbollsrotation – kärnrotation.',
    ],
    cardio: [
      'Laterala stegserier – rytm och koordination.',
      'Hoppreppa – kondition.',
    ],
    stretch: [
      'Thoraxrotation – överkroppens rörlighet för counterrotationen.',
      'Piriformissträck – höftrotatorer.',
      'Vadssträck – fotledsrörlighet.',
    ],
    teknik: [
      'Ingångssteg – tränar fotrörelsemönstret och kantarbetet inför hoppet.',
      'Spotting – tränar blickteknik för att hålla orientering och balans under rotation.',
    ],
  },

  'twizzle': {
    strength: [
      'Ettbensbalans – twizzeln roterar snabbt på ett ben.',
      'Plankan – snabb, tätt kompakt rotation.',
      'Adduktor-maskin – fria benet dras in snabbt.',
      'Fotledsstabilitet med band – hög belastning under snabba varv.',
    ],
    cardio: [
      'Hoppreppa – kondition och rytm.',
      'Laterala stegserier – vestibulär träning och snabbhetsträning.',
    ],
    stretch: [
      'Piriformissträck – höftrotatorer arbetar intensivt.',
      'Vadssträck – fotledsrörlighet under rotation.',
      'Axelsträck – armarna hålls kontrollerade.',
    ],
    teknik: [
      'Spotting – tränar blickteknik för att hålla orientering och balans under rotation.',
      'Rotationsövning – tränar arm-pull och axelposition för kontrollerad rotation i luften.',
    ],
  },

  'loop-turn': {
    strength: [
      'Ettbensbalans – loop-turn är en mjuk, intern rotation på ett ben.',
      'Fotledsstabilitet med band – kantbyte under glid.',
      'Plankan – loopen är en subtil sväng.',
    ],
    cardio: [
      'Hoppreppa – kondition.',
      'Laterala stegserier – teknisk repetition.',
    ],
    stretch: [
      'Vadssträck – fotledsrörlighet.',
      'Höftrotationssträck – intern rotation i höften.',
      'Ryggrotation liggande – thorax rörlighet.',
    ],
    teknik: [
      'Ingångssteg – tränar fotrörelsemönstret och kantarbetet inför hoppet.',
      'Spotting – tränar blickteknik för att hålla orientering och balans under rotation.',
    ],
  },

  'mohawk': {
    strength: [
      'Hip-utåtrotation – mohawken byter fot med utåtrotation.',
      'Ettbensbalans – varje fot bär vikt separat.',
      'Adduktor och abduktor – kantarbetet kräver medial och lateral stabilitet.',
    ],
    cardio: [
      'Laterala stegserier – koordination och rytm.',
      'Hoppreppa – kondition.',
    ],
    stretch: [
      'Höftrotationssträck – frigör höftleden för mohawkens fotbyte.',
      'Vadssträck – båda fötter.',
      'Piriformissträck – höftrotatorer.',
    ],
    teknik: [
      'Mohawk-sekvens – övar fotbytet och viktöverföringen som ingång till kanthopp.',
      'Ingångssteg – tränar fotrörelsemönstret och kantarbetet inför hoppet.',
    ],
  },

  'choctaw': {
    strength: [
      'Hip-utåtrotation – choctaw byter kant och fot med djupare rotation.',
      'Ettbensbalans – varje ben tar emot.',
      'Hip flexor-styrka med band – svingbenet rör sig aktivt vid fotbytet.',
      'Plankan – kroppen hålls stabil under det mer komplexa bytet.',
    ],
    cardio: [
      'Laterala stegserier – komplex rörelsekombination.',
      'Hoppreppa – kondition.',
    ],
    stretch: [
      'Höftrotationssträck – större krav än mohawk.',
      'Hip flexor-sträck – svingbenet rör sig mer.',
      'Piriformissträck – rotationsmuskulaturen.',
    ],
    teknik: [
      'Mohawk-sekvens – övar fotbytet och viktöverföringen som ingång till kanthopp.',
      'Ingångssteg – tränar fotrörelsemönstret och kantarbetet inför hoppet.',
    ],
  },

  // ── Glidövningar ─────────────────────────────────────────────────────────

  'forward-outside-edge': {
    strength: [
      'Hip abduktor med band – stärker den yttre kanten vid framlänges glid.',
      'Ettbensbalans – hela vikten vilar på ett ben under gliden.',
      'Vadhöjningar på ett ben – vristens stabilitet på kanten.',
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
      'Adduktor och abduktor – stärker insidekanten.',
      'Ettbensbalans – viktbärande på insidekant.',
      'Fotledsstabilitet med band – inre kant-kontroll.',
    ],
    cardio: [
      'Laterala stegserier – insidekantsrörlighet.',
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
      'Hip abduktor med band – yttre kanten i baklängesglid.',
      'Ryggstärkare – kontrollen baklänges kräver lumbal stabilitet.',
      'Ettbensbalans – proprioception utan framsyn.',
    ],
    cardio: [
      'Laterala stegserier – trygghet och kontroll.',
      'Hoppreppa – kondition.',
    ],
    stretch: [
      'Piriformissträck – yttre höft.',
      'Ryggrotation liggande – lumbalt rörlig för baklängesaxeln.',
      'Vadssträck – fotledsrörlighet.',
    ],
  },

  'backward-inside-edge': {
    strength: [
      'Adduktor och abduktor – insidekanten baklänges.',
      'Plankan – kroppen hålls upprätt utan framsyn.',
      'Fotledsstabilitet med band – inre kant baklänges.',
    ],
    cardio: [
      'Laterala stegserier – komfort och flöde.',
      'Hoppreppa – kondition.',
    ],
    stretch: [
      'Adduktorsträck – insidan av höften.',
      'Ryggrotation liggande – thorax rörlighet baklänges.',
      'Vadssträck – fotledsrörlighet.',
    ],
  },

  'spread-eagle': {
    strength: [
      'Hip-utåtrotation – spread eagle kräver maximal utåtrotation i båda höfterna.',
      'Adduktor och abduktor – specifik styrka i rörelseomfånget.',
      'Plankan – överkroppen hålls upprätt i extremt höftläge.',
    ],
    cardio: [
      'Hoppreppa – kondition.',
      'Laterala stegserier – aktiv rörlighet.',
    ],
    stretch: [
      'Höftrotationssträck – djup bilateral höftutåtrotation.',
      'Straddle – adduktorer i utåtroterat läge.',
      'Piriformissträck – höftrotatorer.',
    ],
  },

  'ina-bauer': {
    strength: [
      'Hip-utåtrotation – ina bauer har en fot utåt, en inåt.',
      'Fotledsstabilitet med band – varje fot på olika kant.',
      'Plankan – överkroppen böjer sig medan benen håller positionen.',
    ],
    cardio: [
      'Yoga flow – kombinerar bakåtböjning med benstabilitet.',
      'Hoppreppa – kondition.',
    ],
    stretch: [
      'Hip flexor-sträck – framsidan frigörs för bakåtböjningen.',
      'Thoraxrotation – bröstryggen böjs bakåt.',
      'Camel pose – bakåtböjning i Ina-Bauer-ryggen.',
    ],
  },

  'hydroblading': {
    strength: [
      'Djup squat – hydroblading kräver extrem framåtlutning nära isen.',
      'Hip flexor-styrka med band – underkroppen böjer sig kraftigt.',
      'Ryggstärkare – sänker sig kontrollerat mot isen.',
      'Ettbenssquat – en fot håller gliden.',
    ],
    cardio: [
      'Hoppreppa – kondition.',
      'Laterala stegserier – specifik rörelsevana.',
    ],
    stretch: [
      'Djup squat-sträck – full knä och höftflexion.',
      'Hamstringsträck – bakre kedjan i den framåtlutade positionen.',
      'Hip flexor-sträck – kontrastträck efter den kompakta positionen.',
    ],
  },

  'cantilever': {
    strength: [
      'Sidoplankan – lateral kärnkraft för den extrema sidelutningen.',
      'Hip abduktor med band – hålls upp mot gravitationen lateralt.',
      'Oblique-styrka – sidan av bålkärnan bär hela kroppen.',
      'Ettbensbalans – all vikt på ett ben i extrem sidolutning.',
    ],
    cardio: [
      'Hoppreppa – kondition.',
      'Laterala stegserier – lateral uthållighet.',
    ],
    stretch: [
      'Lateral flanksträck – öppnar flanken för cantilever-positionen.',
      'IT-band-sträck – lateral lårfrihet.',
      'Vadssträck – fotledsrörlighet.',
    ],
  },

  'spiral': {
    strength: [
      'Hip-extension med band – håller benet högt bakom i spiralen.',
      'Hamstrings excentrisk styrka – lyfter och håller benet horisontellt eller högre.',
      'Ryggstärkare – överkroppen böjs framåt, benet lyfts bakåt.',
      'Ettbensbalans – simulerar spiralposition på golv.',
    ],
    cardio: [
      'Hoppreppa – kondition.',
      'Laterala stegserier – uthållighet i spiralpositionen.',
    ],
    stretch: [
      'Hamstringsträck – benet bakom ska nå högt.',
      'Hip flexor-sträck – stödbenet frigörs framåt.',
      'Ryggextensionssträck – överkroppen böjer sig fritt.',
    ],
  },

  'charlotte-spiral': {
    strength: [
      'Hamstrings excentrisk styrka – det fria benet lyfts vertikalt ovanför huvudet.',
      'Hip flexor-styrka med band – benet hålls högt framåt.',
      'Ryggstärkare – överkroppen böjer sig bakåt.',
      'Ettbensbalans – stödbenet bär allt.',
    ],
    cardio: [
      'Hoppreppa – kondition.',
      'Laterala stegserier – direktträning av det vertikala lyftet.',
    ],
    stretch: [
      'Hamstringsträck – benet ska gå vertikalt.',
      'Ryggextensionssträck – överkroppen böjer sig bakåt.',
      'Hip flexor-sträck – kontrast mot hög benlyft.',
    ],
  },

  'biellmann-spiral': {
    strength: [
      'Axelstabilitet – håller benet ovanför huvudet bakifrån.',
      'Hamstrings excentrisk styrka – extrem benlängd bakåt och uppåt.',
      'Ryggstärkare – extrem bakåtböjning kombinerat med benlyft.',
      'Ettbensbalans – det svåraste stabilitetskravet.',
    ],
    cardio: [
      'Yoga flow – rörlighetsträning med kontroll.',
      'Hoppreppa – kondition.',
    ],
    stretch: [
      'Biellmann-sträck liggande – gradvis förberedelse.',
      'Wheel pose – extrem thorax och lumbal rörlighet.',
      'Hamstringsträck – extrem benlängd.',
    ],
  },

  // ── Hopp — nya ──────────────────────────────────────────────────────────────

  'bunny-hop': {
    strength: [
      'Tåhöjningar – bygger styrka för tåpicksavhoppet.',
      'Ettbenssquat – stärker avhoppsbenet.',
      'Plankan – bygger kärnstabilitet.',
    ],
    cardio: [
      'Hoppreppa – bygger explosivitet.',
      'Sidohopp – tränar laterala hopp.',
    ],
    stretch: [
      'Vadssträck – förbättrar vristens rörlighet.',
      'Hip flexor-sträck – öppnar höften.',
      'Quadssträck – löser framsidan av benet.',
    ],
    teknik: [
      'Hoppimitation på golv – övar avhopp och landning.',
    ],
  },

  'mazurka': {
    strength: [
      'Ettbenssquat – stärker avhoppsbenet.',
      'Sidoutfall – stärker abduktorerna för bensparken.',
      'Plankan – kärnstabilitet.',
    ],
    cardio: [
      'Hoppreppa – explosivitet.',
      'Sidohopp – tränar den laterala rörelsen.',
    ],
    stretch: [
      'Hip flexor-sträck – öppnar höften för benets rörelse.',
      'Vadssträck – förbättrar vristen.',
      'Quadssträck – löser framsidan.',
    ],
    teknik: [
      'Benspark-imitation – tränar sidorörelsen av det fria benet.',
    ],
  },

  'half-flip': {
    strength: [
      'Tåhöjningar – stärker tåpicksarbetet.',
      'Ettbenssquat – stärker stöd- och avhoppsbenet.',
      'Plankan – kärnstabilitet för rotationen.',
    ],
    cardio: [
      'Hoppreppa – explosivitet.',
      'Sidohopp – landningsstabilitet.',
    ],
    stretch: [
      'Hip flexor-sträck – höftens rörlighet.',
      'Vadssträck – vristens rörlighet.',
      'Bröststräck – armsvingen.',
    ],
    teknik: [
      'Halvvarvimitation – övar half-flipens rotation på golvet.',
    ],
  },

  'ballet-jump': {
    strength: [
      'Ettbenssquat – stärker avhoppsbenet.',
      'Arabesquebalans – tränar den eleganta lyftpositionen.',
      'Plankan – kärnstabilitet.',
    ],
    cardio: [
      'Hoppreppa – explosivitet.',
      'Dansjump – tränar rytm och kroppskontroll.',
    ],
    stretch: [
      'Hip flexor-sträck – öppnar höften för benlyft.',
      'Hamstringsträck – ökar benets räckvidd bakåt.',
      'Vadssträck – förbättrar vristen.',
    ],
    teknik: [
      'Imitation av arabesk i luften – visualiserar formen.',
    ],
  },

  'stag-jump': {
    strength: [
      'Ettbenssquat – stärker avhoppsbenet.',
      'Högt knälyft – stärker höftböjarna för stagpositionen.',
      'Plankan – kärnstabilitet.',
    ],
    cardio: [
      'Hoppreppa – explosivitet.',
      'Knälyft i löpning – stärker höftböjarna.',
    ],
    stretch: [
      'Hip flexor-sträck – öppnar höften för det böjda benet.',
      'Quadssträck – löser framsidan av benet.',
      'Hamstringsträck – baksidan av det sträckta benet.',
    ],
    teknik: [
      'Stagimitation – övar positionen med ett böjt och ett sträckt ben.',
    ],
  },

  'butterfly-jump': {
    strength: [
      'Ettbenssquat – stärker avhoppsbenet.',
      'Bröstryggsrotation – för den horisontella kroppspositionen.',
      'Plankan – kärnstabilitet för den platta rotationen.',
    ],
    cardio: [
      'Hoppreppa – explosivitet.',
      'Sidohopp – tränar den laterala rörelsens kraft.',
    ],
    stretch: [
      'Thorax-rotation – löser upp ryggens rotation.',
      'Hip flexor-sträck – öppnar höften.',
      'Axelsträck – frigör överkroppens rörelse.',
    ],
    teknik: [
      'Fjärilsimitation – övar hoppets roterande, horisontella form.',
    ],
  },

  'falling-leaf': {
    strength: [
      'Ettbenssquat – stärker avhoppsbenet.',
      'Sidoutfall – stärker abduktorerna.',
      'Plankan – kärnstabilitet.',
    ],
    cardio: [
      'Hoppreppa – explosivitet.',
      'Sidohopp – simulerar det laterala avhoppet.',
    ],
    stretch: [
      'Hip flexor-sträck – höftens rörlighet.',
      'Vadssträck – vristen.',
      'Quadssträck – framsidan av benet.',
    ],
    teknik: [
      'Sidohopp med halvvarv – grundform av falling leaf.',
    ],
  },

  'toe-loop-4': {
    strength: [
      'Djup ettbenssquat med snabb uppresning – simulerar den explosiva takeoff.',
      'Vertikalhopp med omedelbar kompression i luften – tränar kvad-timing.',
      'Plankan med rotation – kärnstabilitet för 4 varv.',
      'Vadhöjningar explosivt – maximal plantarflexion.',
    ],
    cardio: [
      'Hoppreppa med maximal intensitet – explosivitet.',
      'Intervallsprints – tränar den anaeroba kapaciteten.',
    ],
    stretch: [
      'Hip flexor-sträck – frigör höften för det extrema avhoppet.',
      'Piriformissträck – minskar spänning i höftrotatorer.',
      'Bröststräck – maximalt armsvep vid avhopp.',
    ],
    teknik: [
      'Hoppimitation med kompression – övar det explosiva avhoppet och den snabba kompressionen.',
      'Filma och analysera – teknisk analys av rotationshastighet och kompression.',
    ],
  },

  'salchow-4': {
    strength: [
      'Djup ettbenssquat – avhoppsbenet vid bakre inre kant.',
      'Horisontellt bensvep med motståndsband – simulerar det kraftfulla svepet.',
      'Plankan med rotation – 4 varv kräver exceptionell kärnstabilitet.',
      'Vadhöjningar explosivt – avhoppskraft.',
    ],
    cardio: [
      'Hoppreppa med maximal intensitet – explosivitet.',
      'Intervallsprints – anaerob kapacitet.',
    ],
    stretch: [
      'Hip flexor-sträck – höftens rörlighet.',
      'Piriformissträck – minskar spänning.',
      'Bröststräck – armsvingen.',
    ],
    teknik: [
      'Bensvep-imitation med motståndsband – stärker och övar det kraftfulla svepet.',
    ],
  },

  'loop-4': {
    strength: [
      'Djup ettbenssquat på yttre kant – simulerar loop-avhoppet utan tåpick.',
      'Explosiva vertikalhopp – maximal höjd och kompression.',
      'Plankan med rotation – kärnstabilitet för 4 varv.',
      'Vadhöjningar explosivt – avhoppskraft.',
    ],
    cardio: [
      'Hoppreppa – maximal explosivitet.',
      'Intervallsprints – anaerob kapacitet.',
    ],
    stretch: [
      'Hip flexor-sträck – höftens rörlighet.',
      'Piriformissträck – minskar spänning.',
      'Bröststräck – armsvingen.',
    ],
    teknik: [
      'Vertikalhopp med omedelbar kompression – tränar loop-kompressionen.',
    ],
  },

  'flip-4': {
    strength: [
      'Djup ettbenssquat på inre kant – flip-avhoppets specifika styrka.',
      'Explosiva vertikalhopp – kraft och höjd.',
      'Plankan med rotation – kärnstabilitet.',
      'Tåpicksdrivna hopp – tränar tåpicksanvändningen.',
    ],
    cardio: [
      'Hoppreppa – explosivitet.',
      'Intervallsprints – anaerob kapacitet.',
    ],
    stretch: [
      'Hip flexor-sträck – höftens rörlighet.',
      'Piriformissträck – minskar spänning.',
      'Bröststräck – armsvingen.',
    ],
    teknik: [
      'Hoppimitation – övar flip-ingång och kompression.',
    ],
  },

  'lutz-4': {
    strength: [
      'Djup ettbenssquat på yttre kant – lutz kräver yttre kant hela vägen till avhoppet.',
      'Motståndsband rotation – tränar axelkontroll mot flutz.',
      'Plankan med rotation – kärnstabilitet.',
      'Vadhöjningar explosivt – avhoppskraft.',
    ],
    cardio: [
      'Hoppreppa – explosivitet.',
      'Intervallsprints – anaerob kapacitet.',
    ],
    stretch: [
      'Hip flexor-sträck – höftens rörlighet.',
      'Piriformissträck – minskar spänning.',
      'Bröststräck – armsvingen.',
    ],
    teknik: [
      'Lutz-imitation med fokus på yttre kant – motverkar flutz-tendens.',
    ],
  },

  'axel-4': {
    strength: [
      'Djup ettbenssquat med explosiv uppresning – avhoppsbenet.',
      'Explosiva vertikalhopp – maximal kraft och höjd.',
      'Plankan med rotation – kärnstabilitet för 4,5 varv.',
      'Vadhöjningar explosivt – avhoppskraft.',
    ],
    cardio: [
      'Hoppreppa – maximal explosivitet.',
      'Intervallsprints – anaerob kapacitet.',
    ],
    stretch: [
      'Hip flexor-sträck – höftens rörlighet för det framåthoppande avhoppet.',
      'Piriformissträck – minskar spänning.',
      'Bröststräck – armsvingen.',
    ],
    teknik: [
      'Hoppimitation – övar axel-ingång och den unika framåt-takeoff.',
      'Filma och analysera – teknisk analys av rotationshastighet.',
    ],
  },

  // ── Piruetter — nya ──────────────────────────────────────────────────────────

  'y-spin': {
    strength: [
      'Benlyft åt sidan med motståndsband – stärker abduktorerna för Y-positionen.',
      'Ettbensbalans med armlyft – tränar Y-piruettens stabilitet.',
      'Plankan – kärnstabilitet.',
    ],
    cardio: [
      'Yoga flow – rörlighetsträning och kroppskontroll.',
      'Balansövningar på ett ben – skapar stabilitetsgrundval.',
    ],
    stretch: [
      'Benlyft-sträck åt sidan – hip abductor stretch.',
      'Hamstringsträck – räckvidd för Y-lyftet.',
      'Höftöppnare – frigör höftleden.',
    ],
    teknik: [
      'Y-balans på golvet – håll Y-positionen stående utan att piruetera.',
    ],
  },

  'a-frame-spin': {
    strength: [
      'Sidoutfall – stärker abduktorer och höfterna.',
      'Benlyft åt sidan – stärker det fria benets lyft.',
      'Plankan – kärnstabilitet.',
    ],
    cardio: [
      'Yoga flow – rörlighet och kroppskontroll.',
      'Balansövningar – ettbensbalans.',
    ],
    stretch: [
      'Hip abductor stretch – öppnar upp för sidolyft.',
      'Axelsträck – frigör armarnas position.',
      'Hip flexor-sträck – frigör höften.',
    ],
    teknik: [
      'A-frame-balans på golvet – håll positionen med armar och ben utåt.',
    ],
  },

  'haircutter-spin': {
    strength: [
      'Bakre benlyft med motståndsband – stärker gluteus och bakre höft.',
      'Axelstabilisatorer – håller axeln vid baksida-greppet.',
      'Plankan – kärnstabilitet.',
    ],
    cardio: [
      'Yoga flow – rörlighets- och bakåtböjningsträning.',
      'Balansövningar – ettbensbalans.',
    ],
    stretch: [
      'Quadssträck djupt – öppnar framsidan för haircutter-greppet.',
      'Axelsträck – frigör axeln vid baksida-greppet.',
      'Hip flexor-sträck – frigör höften.',
    ],
    teknik: [
      'Haircutter-balans på golvet – håll greppet och bakåtlyftpositionen.',
    ],
  },

  'svamp-spin': {
    strength: [
      'Djup sittpiruett-squat – stärker sittpiruettens grundposition.',
      'Magmuskelövningar – kärnkraft för kompressionen.',
      'Plankan – kärnstabilitet.',
    ],
    cardio: [
      'Hoppreppa – kondition.',
      'Balansövningar – ettbensbalans.',
    ],
    stretch: [
      'Hip flexor-sträck – frigör höften för kompressionen.',
      'Ryggsträck – öppnar ryggen för bollpositionen.',
      'Quadssträck – framsidan av benet.',
    ],
    teknik: [
      'Bollimitation – träna att komprimera till bollposition på golvet.',
    ],
  },

  'shoot-the-duck-spin': {
    strength: [
      'Djup squat på ett ben – stärker stödbenet i låg position.',
      'Benlyft framåt – håller det sträckta benet horisontellt.',
      'Plankan – kärnstabilitet.',
    ],
    cardio: [
      'Yoga flow – rörlighet.',
      'Balansövningar – kontroll i låg position.',
    ],
    stretch: [
      'Djup ankelstödd squat – rörlighet i vristen för låg position.',
      'Hip flexor-sträck – frigör höften.',
      'Hamstringsträck – räckvidd för det sträckta benet.',
    ],
    teknik: [
      'Shoot-the-duck på golvet – träna att sänka sig och hålla det sträckta benet.',
    ],
  },

  'back-camel-spin': {
    strength: [
      'Bakre benlyft med motståndsband – stärker höft och gluteus för kamelposition.',
      'Överkroppsextension – stärker ländryggen.',
      'Plankan – kärnstabilitet.',
    ],
    cardio: [
      'Yoga flow – rörlighet.',
      'Balansövningar – ettbensbalans.',
    ],
    stretch: [
      'Thorax-extension – öppnar bröstryggen.',
      'Hip flexor-sträck – frigör höften.',
      'Quadssträck – framsidan av stödbenet.',
    ],
    teknik: [
      'Bakre kamelbalans – håll kamelpositionen stående utan att piruetera.',
    ],
  },

  'catch-foot-camel': {
    strength: [
      'Bakre benlyft med greppövning – simulerar catch foot-greppet.',
      'Axelstabilisatorer – håller axeln vid greppet.',
      'Plankan – kärnstabilitet.',
    ],
    cardio: [
      'Yoga flow – bakåtböjnings- och rörlighetsträning.',
      'Balansövningar – ettbensbalans.',
    ],
    stretch: [
      'Catch foot-sträck liggande – gradvis förbereder greppets rörlighet.',
      'Quadssträck djupt – framsidan av det greppade benet.',
      'Axelsträck – frigör axeln vid greppet.',
    ],
    teknik: [
      'Catch foot-balans stående – håll greppet och positionen utan att piruetera.',
    ],
  },

  'pearl-spin': {
    strength: [
      'Benlyft utåt och framåt – stärker abduktorerna för pearl-positionen.',
      'Axelstabilisatorer – vid greppet.',
      'Plankan – kärnstabilitet.',
    ],
    cardio: [
      'Yoga flow – rörlighet.',
      'Balansövningar – ettbensbalans.',
    ],
    stretch: [
      'Hip abductor stretch – öppnar för benets sidorörelse.',
      'Catch foot-sträck – förbereder greppet.',
      'Thorax-sträck – öppnar överkroppen.',
    ],
    teknik: [
      'Pearl-balans stående – håll positionen statiskt.',
    ],
  },

  'flying-upright-spin': {
    strength: [
      'Ettbenssquat – stärker avhoppsbenet.',
      'Plankan – kärnstabilitet.',
      'Vadhöjningar – stärker avhoppet.',
    ],
    cardio: [
      'Hoppreppa – explosivitet och kondition.',
      'Balansövningar – snabb centring efter landning.',
    ],
    stretch: [
      'Hip flexor-sträck – frigör höften.',
      'Vadssträck – förbättrar vristen.',
      'Bröststräck – armsvingen.',
    ],
    teknik: [
      'Hoppimitation – övar avhoppet och den snabba centringen i luften.',
    ],
  },

  'sit-upright-combo': {
    strength: [
      'Djup squat – stärker sittpiruettens grundposition.',
      'Vadhöjningar på ett ben – stärker centringen i ståpiruetten.',
      'Plankan – kärnstabilitet.',
    ],
    cardio: [
      'Hoppreppa – kondition.',
      'Balansövningar – ettbensbalans.',
    ],
    stretch: [
      'Djup squat-sträck – rörlighet i höft och knä.',
      'Vadssträck – vristens rörlighet.',
      'Hip flexor-sträck – frigör höften.',
    ],
    teknik: [
      'Kombinationsövergång – övar det mjuka bytet från sittposition till stående.',
    ],
  },

  'camel-sit-combo': {
    strength: [
      'Bakre benlyft – stärker kamelns grundposition.',
      'Djup squat – stärker sittpiruettens grundposition.',
      'Plankan – kärnstabilitet.',
    ],
    cardio: [
      'Yoga flow – rörlighetsträning.',
      'Balansövningar – ettbensbalans.',
    ],
    stretch: [
      'Hip flexor-sträck – frigör höften för kamelns bakåtlutning.',
      'Djup squat-sträck – rörlighet för sittpiruetten.',
      'Thorax-extension – öppnar bröstryggen för kameln.',
    ],
    teknik: [
      'Kombinationsövergång – övar det mjuka bytet från kamel till sittposition.',
    ],
  },

  // ── Svängar — nya ────────────────────────────────────────────────────────────

  'inside-three-turn': {
    strength: [
      'Ettbensbalans med inre kant – tränar insidekantkontrollen.',
      'Vriden plankan – kärnstabilitet för tresväng.',
      'Höftabduktorer – stabiliserar stödbenet.',
    ],
    cardio: [
      'Yoga flow – kroppskontroll.',
      'Balansövningar – ettbensbalans.',
    ],
    stretch: [
      'Hip flexor-sträck – frigör höften.',
      'Vadssträck – vristens rörlighet.',
      'Bröststräck – frigör överkroppen.',
    ],
    teknik: [
      'Tresvängsimitation på golvet – övar axlarnas roll och kantbytet.',
    ],
  },

  'outside-mohawk': {
    strength: [
      'Ettbensbalans – stärker stödbenet vid viktövergången.',
      'Sidoutfall – stärker abduktorerna.',
      'Plankan – kärnstabilitet.',
    ],
    cardio: [
      'Balansövningar – ettbensbalans.',
      'Yoga flow – kroppskontroll.',
    ],
    stretch: [
      'Hip flexor-sträck – frigör höften.',
      'Vadssträck – vristens rörlighet.',
      'Ljumskesträck – öppnar höften för den öppna ställningen.',
    ],
    teknik: [
      'Mohawkimitation på golvet – övar viktövergången och fotplaceringen.',
    ],
  },

  'inside-mohawk': {
    strength: [
      'Ettbensbalans – stärker stödbenet.',
      'Sidoutfall – stärker abduktorerna.',
      'Plankan – kärnstabilitet.',
    ],
    cardio: [
      'Balansövningar – ettbensbalans.',
      'Yoga flow – kroppskontroll.',
    ],
    stretch: [
      'Hip flexor-sträck – frigör höften.',
      'Vadssträck – vristens rörlighet.',
      'Ljumskesträck – öppnar höften.',
    ],
    teknik: [
      'Inside mohawk-imitation på golvet – övar kantbytet och viktövergången.',
    ],
  },

  'outside-choctaw': {
    strength: [
      'Ettbensbalans – stärker stödbenet vid den komplexa övergången.',
      'Höftrotatorer med motståndsband – stärker höftens rotation.',
      'Plankan – kärnstabilitet.',
    ],
    cardio: [
      'Balansövningar – ettbensbalans.',
      'Yoga flow – kroppskontroll.',
    ],
    stretch: [
      'Hip flexor-sträck – frigör höften.',
      'Ljumskesträck – öppnar höften för choctawens öppna ställning.',
      'Piriformissträck – minskar spänning i höftrotatorer.',
    ],
    teknik: [
      'Choctawimitation på golvet – övar höftrotationen och kantbytet.',
    ],
  },

  'inside-choctaw': {
    strength: [
      'Ettbensbalans – stärker stödbenet.',
      'Höftrotatorer med motståndsband – stärker rotation.',
      'Plankan – kärnstabilitet.',
    ],
    cardio: [
      'Balansövningar – ettbensbalans.',
      'Yoga flow – kroppskontroll.',
    ],
    stretch: [
      'Hip flexor-sträck – frigör höften.',
      'Ljumskesträck – öppnar höften.',
      'Piriformissträck – minskar spänning.',
    ],
    teknik: [
      'Inside choctaw-imitation på golvet – övar höftrotationen och kantbytet.',
    ],
  },

  // ── Steg — nya ───────────────────────────────────────────────────────────────

  'chasse': {
    strength: [
      'Ettbensbalans – stärker stödbenet.',
      'Vadhöjningar – driver glidet.',
      'Plankan – kärnstabilitet.',
    ],
    cardio: [
      'Dans- och stegövningar – rytmkänsla och uthållighet.',
      'Lätt jogg med fokus på stegteknik.',
    ],
    stretch: [
      'Vadssträck – vristens rörlighet.',
      'Hip flexor-sträck – frigör höften.',
      'Quadssträck – framsidan av benet.',
    ],
  },

  'crossovers': {
    strength: [
      'Sidoutfall – stärker abduktorer och krysstegsdriften.',
      'Ettbensbalans på yttre kant – tränar kantarbetet.',
      'Plankan – kärnstabilitet.',
    ],
    cardio: [
      'Sidohopp – tränar den laterala rörelsen.',
      'Lätt jogg med fokus på stegteknik.',
    ],
    stretch: [
      'Ljumskesträck – öppnar höften för krysstegget.',
      'Hip flexor-sträck – frigör höften.',
      'Vadssträck – vristens rörlighet.',
    ],
  },

  'back-crossovers': {
    strength: [
      'Bakre sidoutfall – stärker bakåtrörelsens kraft.',
      'Ettbensbalans bakåt – tränar bakre kantarbetet.',
      'Plankan – kärnstabilitet.',
    ],
    cardio: [
      'Bakre sidohopp – tränar bakåtrörelsens explosivitet.',
      'Lätt jogg bakåt med fokus på stegteknik.',
    ],
    stretch: [
      'Ljumskesträck – öppnar höften.',
      'Hip flexor-sträck – frigör höften.',
      'Vadssträck – vristens rörlighet.',
    ],
  },

  'cross-rolls': {
    strength: [
      'Djupa sidoutfall – stärker de vippande kantövergångarna.',
      'Ettbensbalans med viktöverföring – tränar kantbytet.',
      'Plankan – kärnstabilitet.',
    ],
    cardio: [
      'Dansövningar – rytm och musikalitet.',
      'Sidohopp – tränar lateral rörelse.',
    ],
    stretch: [
      'Ljumskesträck – öppnar höften.',
      'Hip flexor-sträck – frigör höften.',
      'Vadssträck – vristens rörlighet.',
    ],
  },

  'progressive': {
    strength: [
      'Drivande utfall – stärker push-off-kraften i varje steg.',
      'Ettbensbalans – stärker glidningarna.',
      'Vadhöjningar – driver glidet.',
    ],
    cardio: [
      'Löpning med fokus på drivkraft – bygger det progressiva stegets kraft.',
      'Hoppreppa – explosivitet.',
    ],
    stretch: [
      'Hip flexor-sträck – frigör höften.',
      'Vadssträck – vristens rörlighet.',
      'Quadssträck – framsidan av drivbenet.',
    ],
  },

  'toe-step': {
    strength: [
      'Tåhöjningar – stärker tåpicksarbetet.',
      'Ettbensbalans – stärker stödbenet.',
      'Plankan – kärnstabilitet.',
    ],
    cardio: [
      'Dansövningar – koordination och rytm.',
      'Hoppreppa – explosivitet på tårna.',
    ],
    stretch: [
      'Vadssträck – vristens rörlighet.',
      'Tå- och fotvalvssträck – förbättrar tåpicksarbetet.',
      'Hip flexor-sträck – frigör höften.',
    ],
  },

  'slalom': {
    strength: [
      'Sidoutfall – stärker de laterala vändningarna.',
      'Djup squat med rotation – tränar höfternas svängning.',
      'Plankan – kärnstabilitet.',
    ],
    cardio: [
      'Sidohopp – lateral rörelse och uthållighet.',
      'Intervallövningar – kondition för upprepade vändningar.',
    ],
    stretch: [
      'Hip flexor-sträck – frigör höften.',
      'Ljumskesträck – öppnar höften.',
      'Vadssträck – vristens rörlighet.',
    ],
  },

  'power-pulls': {
    strength: [
      'Djup ettbenssquat – stärker det laddande benet.',
      'Motståndsband-pull – simulerar dragrörelsen.',
      'Plankan – kärnstabilitet.',
    ],
    cardio: [
      'Intervallsprints – explosiv kraft.',
      'Hoppreppa – kondition.',
    ],
    stretch: [
      'Quadssträck – framsidan av det drivande benet.',
      'Hip flexor-sträck – frigör höften.',
      'Vadssträck – vristens rörlighet.',
    ],
  },

  'swing-roll': {
    strength: [
      'Benlyft framåt med motståndsband – stärker benets svängrörelse.',
      'Ettbensbalans – stärker glidet.',
      'Plankan – kärnstabilitet.',
    ],
    cardio: [
      'Dansövningar – musikalitet och rytmkänsla.',
      'Yoga flow – kroppskontroll.',
    ],
    stretch: [
      'Hip flexor-sträck – frigör höften för svängrörelsen.',
      'Hamstringsträck – baksidan av det svängande benet.',
      'Vadssträck – vristens rörlighet.',
    ],
  },

  'cluster': {
    strength: [
      'Kombinerade balansövningar – snabb växling mellan ettbenspositioner.',
      'Vriden plankan – kärnstabilitet för komplexa stegsekvenser.',
      'Sidoutfall – stärker abduktorerna.',
    ],
    cardio: [
      'Stegsekvenser på golvet – kondition och koordination.',
      'Dansövningar – musikalitet.',
    ],
    stretch: [
      'Hip flexor-sträck – frigör höften.',
      'Vadssträck – vristens rörlighet.',
      'Bröststräck – frigör överkroppen.',
    ],
    teknik: [
      'Kluster-sekvens på golvet – övar de tätt länkade stegen i slow-motion.',
    ],
  },

  'toe-twizzle': {
    strength: [
      'Tåhöjningar med rotation – stärker tåpicksbalansvridningen.',
      'Ettbensbalans på tå – tränar twizzlens stabila punkt.',
      'Plankan – kärnstabilitet.',
    ],
    cardio: [
      'Dansövningar – koordination och rytm.',
      'Hoppreppa – kondition.',
    ],
    stretch: [
      'Vadssträck – vristens rörlighet.',
      'Hip flexor-sträck – frigör höften.',
      'Bröststräck – frigör armarnas position.',
    ],
    teknik: [
      'Tåtwizzle på golvet – övar rotationen på tåpicken utan skridskor.',
    ],
  },

  'bracket-twizzle': {
    strength: [
      'Ettbensbalans med rotation – tränar twizzeln.',
      'Vriden plankan – kärnstabilitet.',
      'Sidoutfall – stärker abduktorerna.',
    ],
    cardio: [
      'Dansövningar – musikalitet.',
      'Balansövningar – ettbensbalans.',
    ],
    stretch: [
      'Hip flexor-sträck – frigör höften.',
      'Vadssträck – vristens rörlighet.',
      'Bröststräck – frigör överkroppen.',
    ],
    teknik: [
      'Bracket-twizzle på golvet – övar ingången och rotationen.',
    ],
  },

  'counter-twizzle': {
    strength: [
      'Ettbensbalans med rotation – tränar twizzeln.',
      'Vriden plankan – kärnstabilitet.',
      'Höftrotatorer med motståndsband – stärker counterns rotation.',
    ],
    cardio: [
      'Dansövningar – musikalitet.',
      'Balansövningar – ettbensbalans.',
    ],
    stretch: [
      'Hip flexor-sträck – frigör höften.',
      'Vadssträck – vristens rörlighet.',
      'Piriformissträck – minskar spänning i höftrotatorer.',
    ],
    teknik: [
      'Counter-twizzle på golvet – övar ingången och rotationen.',
    ],
  },

  'rocker-twizzle': {
    strength: [
      'Ettbensbalans med rotation – tränar twizzeln.',
      'Vriden plankan – kärnstabilitet.',
      'Höftrotatorer med motståndsband – stärker rockerns kraft.',
    ],
    cardio: [
      'Dansövningar – musikalitet.',
      'Balansövningar – ettbensbalans.',
    ],
    stretch: [
      'Hip flexor-sträck – frigör höften.',
      'Vadssträck – vristens rörlighet.',
      'Bröststräck – frigör överkroppen.',
    ],
    teknik: [
      'Rocker-twizzle på golvet – övar ingången och rotationen.',
    ],
  },

  // ── Glidövningar — nya ───────────────────────────────────────────────────────

  'y-spiral': {
    strength: [
      'Benlyft åt sidan med motståndsband – stärker abduktorerna för Y-greppet.',
      'Ettbensbalans med arm- och benlyft – tränar Y-spiralens stabilitet.',
      'Plankan – kärnstabilitet.',
    ],
    cardio: [
      'Yoga flow – rörlighetsträning.',
      'Balansövningar – ettbensbalans.',
    ],
    stretch: [
      'Benlyft-sträck åt sidan – hip abductor stretch.',
      'Hamstringsträck – räckvidd för Y-lyftet.',
      'Höftöppnare – frigör höftleden.',
    ],
  },

  'catch-foot-spiral': {
    strength: [
      'Bakre benlyft – stärker gluteus och bakre höft.',
      'Axelstabilisatorer – håller axeln vid greppet.',
      'Plankan – kärnstabilitet.',
    ],
    cardio: [
      'Yoga flow – rörlighetsträning.',
      'Balansövningar – ettbensbalans.',
    ],
    stretch: [
      'Catch foot-sträck liggande – förbereder greppets rörlighet.',
      'Quadssträck djupt – framsidan av det greppade benet.',
      'Axelsträck – frigör axeln vid greppet.',
    ],
  },

  'penche-spiral': {
    strength: [
      'Bakre benlyft till extrem höjd – stärker gluteus och bakre höft.',
      'Överkroppsextension – stärker ländryggen.',
      'Plankan – kärnstabilitet.',
    ],
    cardio: [
      'Yoga flow – rörlighets- och stärkningsträning.',
      'Balansövningar – ettbensbalans.',
    ],
    stretch: [
      'Djup hamstringsträck – extrem räckvidd bakåt.',
      'Hip flexor-sträck – frigör höften.',
      'Thorax-extension – öppnar bröstryggen.',
    ],
  },

  'shoot-the-duck': {
    strength: [
      'Djup squat på ett ben – stärker stödbenet i låg position.',
      'Benlyft framåt – håller det sträckta benet horisontellt.',
      'Plankan – kärnstabilitet.',
    ],
    cardio: [
      'Yoga flow – rörlighet.',
      'Balansövningar – kontroll i låg position.',
    ],
    stretch: [
      'Djup ankelstödd squat – rörlighet i vristen.',
      'Hip flexor-sträck – frigör höften.',
      'Hamstringsträck – räckvidd för det sträckta benet.',
    ],
  },

  'drag': {
    strength: [
      'Ettbensbalans bakåt – stärker stödbenet vid bakåtglidning.',
      'Höftextension med motståndsband – stärker det draggande benets kontroll.',
      'Plankan – kärnstabilitet.',
    ],
    cardio: [
      'Yoga flow – kroppskontroll.',
      'Balansövningar – ettbensbalans.',
    ],
    stretch: [
      'Quadssträck – framsidan av det draggande benet.',
      'Hip flexor-sträck – frigör höften.',
      'Vadssträck – vristens rörlighet.',
    ],
  },

  'lunge': {
    strength: [
      'Djupt utfall – stärker benen för lungerörelsen.',
      'Ettbensbalans – stärker stödbenet.',
      'Plankan – kärnstabilitet.',
    ],
    cardio: [
      'Yoga flow – kroppskontroll.',
      'Balansövningar – ettbensbalans.',
    ],
    stretch: [
      'Djup hip flexor-sträck – frigör höften för det bakre benet.',
      'Quadssträck – framsidan av det bakre benet.',
      'Vadssträck – vristens rörlighet.',
    ],
  },

  'bauer-spiral': {
    strength: [
      'Djupt sidoutfall – stärker yttre kantarbetet i Bauerpositionen.',
      'Bakre benlyft – stärker spiralens lyft.',
      'Plankan – kärnstabilitet.',
    ],
    cardio: [
      'Yoga flow – rörlighetsträning.',
      'Balansövningar – ettbensbalans.',
    ],
    stretch: [
      'Spagattisträck – öppnar höfterna för Bauerpositionen.',
      'Hip abductor stretch – öppnar yttre höften.',
      'Hamstringsträck – räckvidd för spiraldelen.',
    ],
  },

  'arabesque': {
    strength: [
      'Arabesquebalans på golvet – tränar den statiska positionen.',
      'Bakre benlyft – stärker gluteus och bakre höft.',
      'Plankan – kärnstabilitet.',
    ],
    cardio: [
      'Yoga flow – balans och kroppskontroll.',
      'Balansövningar – ettbensbalans.',
    ],
    stretch: [
      'Hamstringsträck – räckvidd bakåt.',
      'Hip flexor-sträck – frigör höften.',
      'Quadssträck – framsidan av stödbenet.',
    ],
  },

  'fan-spiral': {
    strength: [
      'Benlyft-svängning med motståndsband – stärker benets cirkulära rörelse.',
      'Ettbensbalans med kantarbete – stärker spiralens stödben.',
      'Plankan – kärnstabilitet.',
    ],
    cardio: [
      'Yoga flow – rörlighet och kroppskontroll.',
      'Balansövningar – ettbensbalans.',
    ],
    stretch: [
      'Hamstringsträck – räckvidd bakåt.',
      'Hip flexor-sträck – frigör höften för svängrörelsen.',
      'Adduktorsträck – öppnar bensidan.',
    ],
  },

  'side-spiral': {
    strength: [
      'Benlyft åt sidan med motståndsband – stärker abduktorerna.',
      'Ettbensbalans – stärker stödbenet.',
      'Plankan – kärnstabilitet.',
    ],
    cardio: [
      'Yoga flow – rörlighet.',
      'Balansövningar – ettbensbalans.',
    ],
    stretch: [
      'Hip abductor stretch – öppnar yttre höften för sidolyftet.',
      'Adduktorsträck – frigör insidan av benet.',
      'Vadssträck – vristens rörlighet.',
    ],
  },

  'forward-spiral': {
    strength: [
      'Bakre benlyft – stärker gluteus och bakre höft.',
      'Ettbensbalans framåt – stärker stödbenet.',
      'Plankan – kärnstabilitet.',
    ],
    cardio: [
      'Yoga flow – rörlighet.',
      'Balansövningar – ettbensbalans.',
    ],
    stretch: [
      'Hamstringsträck – räckvidd bakåt för det lyfta benet.',
      'Hip flexor-sträck – frigör höften.',
      'Vadssträck – vristens rörlighet.',
    ],
  },

  'backward-spiral': {
    strength: [
      'Ettbensbalans bakåt – stärker stödbenet vid bakåtglidning.',
      'Benlyft – stärker det lyfta benets position.',
      'Plankan – kärnstabilitet.',
    ],
    cardio: [
      'Yoga flow – rörlighet.',
      'Balansövningar – ettbensbalans.',
    ],
    stretch: [
      'Hamstringsträck – räckvidd för det lyfta benet.',
      'Hip flexor-sträck – frigör höften.',
      'Vadssträck – vristens rörlighet.',
    ],
  },
};
