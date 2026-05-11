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
};
