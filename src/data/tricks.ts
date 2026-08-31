export type Difficulty = 'nybörjare' | 'grundläggande' | 'medel' | 'avancerad' | 'elit';

export type CategoryId = 'hopp' | 'piruetter' | 'svängar' | 'steg' | 'glidövningar';

export type Trick = {
  id: string;
  name: string;
  englishName: string;
  category: CategoryId;
  subcategory: string;
  subcategoryLabel: string;
  difficulty: Difficulty;
  description: string;
  tips: string[];
  pitfalls: string[];
  relatedIds?: string[];
  isNew?: boolean;
};

export type Category = {
  id: CategoryId;
  label: string;
  icon: string;
};

export const CATEGORIES: Category[] = [
  { id: 'hopp', label: 'Hopp', icon: '↑' },
  { id: 'piruetter', label: 'Piruetter', icon: '○' },
  { id: 'svängar', label: 'Svängar', icon: '↻' },
  { id: 'steg', label: 'Steg & Övergångar', icon: '→' },
  { id: 'glidövningar', label: 'Glidövningar', icon: '~' },
];

export const TRICKS: Trick[] = [
  // ─── HOPP – KANTHOPP ────────────────────────────────────────────────────────
  {
    id: 'waltz',
    name: 'Trehopp',
    englishName: 'Waltz Jump',
    category: 'hopp',
    subcategory: 'övningshopp',
    subcategoryLabel: 'Övningshopp',
    difficulty: 'nybörjare',
    description:
      'Valshoppet är det första hoppet alla konståkare lär sig. Det tar av från en framåtgående yttre kant på vänster fot och landar på en bakåtgående yttre kant på höger fot, med en halvrotation i luften. Det är i princip en enkel Axel utan den extra halvrotationen.',
    tips: [
      'Svinga höger ben starkt framåt och uppåt vid avhoppet för att skapa lyft.',
      'Håll armarna samlade mot kroppen i luften för att hålla balansen.',
      'Sikta på att landa mjukt med knät lätt böjt för att absorbera stöten.',
      'Öva avhoppet från en framåt yttre kant för att bygga upp känslan inför Axel.',
    ],
    pitfalls: [
      'Att ta av från fel kant – se till att du är på den yttre kanten, inte den inre.',
      'Att landa på ett rakt ben – knät måste vara böjt vid landning.',
      'Att luta kroppen bakåt vid avhoppet – håll tyngdpunkten över den avhoppande foten.',
    ],
    relatedIds: ['axel-1'],
  },
  {
    id: 'axel-1',
    name: 'Enkel Axel',
    englishName: 'Single Axel',
    category: 'hopp',
    subcategory: 'kanthopp',
    subcategoryLabel: 'Kanthopp',
    difficulty: 'medel',
    description:
      'Axeln är det mest igenkännbara och ansedda hoppet inom konståkning. Det är det enda tävlingshoppet som tar av framåt – från en framåtgående yttre kant på vänster fot – och kräver därför en halvrotation extra jämfört med alla andra hopp. En enkel Axel innebär 1,5 rotationer i luften. Hoppet är uppkallat efter norrmannen Axel Paulsen som utförde det första gången 1882.',
    tips: [
      'Bygg upp fart och åk en djup kurva på vänster yttre kant innan avhoppet.',
      'Svinga höger ben och båda armarna kraftfullt uppåt vid avhoppet för att skapa rotation och lyft.',
      'Dra in armarna snabbt mot bröstet när du är i luften för att snabba upp rotationen.',
      'Fokusera blicken framåt vid landningen och landa på höger bakre yttre kant.',
    ],
    pitfalls: [
      'Att "kasta" sig in i rotationen istället för att lyfta uppåt – prioritera höjd över rotation.',
      'Att ha armarna för långt ut i luften – det saktar ner rotationen.',
      'Underrotation – vanligaste felet. Se till att du fullföljer alla 1,5 varv.',
      'Att landa på fel kant (inre istället för yttre) – leder till att man snubblar framåt.',
    ],
    relatedIds: ['axel-2', 'waltz'],
  },
  {
    id: 'axel-2',
    name: 'Dubbel Axel',
    englishName: 'Double Axel',
    category: 'hopp',
    subcategory: 'kanthopp',
    subcategoryLabel: 'Kanthopp',
    difficulty: 'avancerad',
    description:
      'Dubbel Axel innebär 2,5 rotationer i luften och är ett av de mest tekniskt krävande hoppet på mellannivå. Avhoppet är identiskt med enkel Axel – framåt yttre kant – men kräver betydligt mer fart, kraft och kompression i luften. Det är det sista dubbelhoppet de flesta åkare lär sig och ofta det som tar längst tid att bemästra.',
    tips: [
      'Bygg upp ordentlig fart i ansatsen – utan fart finns det inte tillräckligt med tid i luften.',
      'Komprimera kroppen fullständigt i luften: korsade ben, armar tätt mot bröstet.',
      'Öva dubbel Axel från en off-ice trampolin för att bygga upp känslan för rotationen.',
      'Arbeta med dubbla rotationen i bakre Axel (back spin) för att träna luftpositionen.',
    ],
    pitfalls: [
      'Att ta av för tidigt och förlora kantbindningen – vänta på rätt kant.',
      'Att inte komprimera tillräckligt – halvöppna armar tar bort rotationskraft.',
      'Underrotation med landning på toesparen istället för kanten.',
      'Att kasta överkroppen till sidan vid avhoppet – håll axlarna i linje.',
    ],
    relatedIds: ['axel-1', 'axel-3'],
  },
  {
    id: 'axel-3',
    name: 'Trippel Axel',
    englishName: 'Triple Axel',
    category: 'hopp',
    subcategory: 'kanthopp',
    subcategoryLabel: 'Kanthopp',
    difficulty: 'elit',
    description:
      'Trippel Axel kräver 3,5 rotationer i luften och är en av konståkningens allra svåraste prestationer. Det utförs av en mycket liten grupp åkare i världen och är det hopp som öppnar dörren till internationalell elittävling. Hoppet kräver exceptionell fart, explosiv kraft, perfekt timing och fullständig kroppskontroll under bråkdelen av en sekund i luften.',
    tips: [
      'Trippel Axel kräver år av grundläggande träning – rusa inte dit utan solid teknik på dubbel.',
      'Maximal fart i ingången är avgörande – ett djupt, välhållet kurvsår ger energin.',
      'Kroppen måste vara helt komprimerad inom de första 15–20 centimetrarna efter avhoppet.',
      'Träna luftpositionen separat på trampolin med coach.',
    ],
    pitfalls: [
      'Att försöka hoppet för tidigt utan tillräcklig rotationshastighet i enklare hopp.',
      'Att "öppna" kroppen för tidigt för att bromsa inför landning – håll ut till sista sekunden.',
      'Att kompensera underrotation med toesparre på isen – leder till fall och skada.',
      'Spänning i axlarna som låser rörelseflödet.',
    ],
    relatedIds: ['axel-2'],
  },
  {
    id: 'salchow-1',
    name: 'Enkel Salchow',
    englishName: 'Single Salchow',
    category: 'hopp',
    subcategory: 'kanthopp',
    subcategoryLabel: 'Kanthopp',
    difficulty: 'nybörjare',
    description:
      'Salchow är ett kanthopp som tar av från den bakre inre kanten på vänster fot. Det kännetecknas av en svepande rörelse med höger ben framåt för att generera rotationen. Hoppet är uppkallat efter svenske Ulrich Salchow, tiofaldig världsmästare i början av 1900-talet. Det är det enklaste kanthoppet och det andra hoppet de flesta lär sig.',
    tips: [
      'Svep höger ben brett framåt och runt för att starta rotationen.',
      'Håll kvar trycket på vänster inre bakre kant ända till det sista ögonblicket.',
      'Håll axlarna i ro – de ska inte följa med i svepet.',
      'Sikta på att landa på höger bakre yttre kant med böjt knä.',
    ],
    pitfalls: [
      'Att kliva av kanten för tidigt med tåspetsen – det förstör avhoppets kraft.',
      'Att svinga axlarna istället för benet – rotationen ska komma från benet.',
      'Att landa med för rakt ben – alltid mjuk landning med böjt knä.',
      'Flack kant vid avhoppet – se till att kanten är djup och väldefinierad.',
    ],
    relatedIds: ['salchow-2', 'loop-1'],
  },
  {
    id: 'salchow-2',
    name: 'Dubbel Salchow',
    englishName: 'Double Salchow',
    category: 'hopp',
    subcategory: 'kanthopp',
    subcategoryLabel: 'Kanthopp',
    difficulty: 'medel',
    description:
      'Dubbel Salchow kräver 2 fulla rotationer och är ofta det första dubbelhoppet en åkare lär sig tack vare den tydliga och kraftfulla bensvepningen som ger god rotation.',
    tips: [
      'Öka farten och gör bensvepningen kraftfullare än i enkla versionen.',
      'Komprimera armarna mot kroppen direkt vid avhoppet.',
      'Öva bakre inrekantssvängar för att säkra avhoppskanten.',
    ],
    pitfalls: [
      'Att rusa in för fort och tappa kantkontrollen.',
      'Att inte komprimera tidigt nog – rotationen bygger upp från allra första ögonblicket i luften.',
    ],
    relatedIds: ['salchow-1', 'salchow-3'],
  },
  {
    id: 'salchow-3',
    name: 'Trippel Salchow',
    englishName: 'Triple Salchow',
    category: 'hopp',
    subcategory: 'kanthopp',
    subcategoryLabel: 'Kanthopp',
    difficulty: 'avancerad',
    description:
      'Trippel Salchow kräver 3 rotationer och är ett av de vanligaste trippelhoppet i program. Trots att det är "enklare" bland triplarna kräver det precision, fart och fullständig kroppskontroll.',
    tips: [
      'Satsa på maximal höjd – tid i luften är tid för rotation.',
      'Fullständig komprimering av armar och ben direkt vid avhoppet.',
      'Träna av- och landning separat med coach för att förhindra dåliga vanor.',
    ],
    pitfalls: [
      'Att rusa i kantsvängen och tappa balansen.',
      'Underrotation – de flesta misslyckas på det sista varvet.',
    ],
    relatedIds: ['salchow-2'],
  },
  {
    id: 'loop-1',
    name: 'Ögel',
    englishName: 'Single Loop',
    category: 'hopp',
    subcategory: 'kanthopp',
    subcategoryLabel: 'Kanthopp',
    difficulty: 'grundläggande',
    description:
      'Loop är ett kanthopp som tar av och landar på samma fot – höger bakre yttre kant. Utan hjälp av tåsparren måste åkaren generera all rotation enbart från kanten, vilket kräver stark kantbindning och muskelkraft. Loopen fungerar bra som andrhopp i kombinationer och är grunden för nästan alla hoppkombinationer.',
    tips: [
      'Sitt djupt in i kanten – känn att kanten "biter" innan du hoppar.',
      'Pressa vänster sida av kroppen bakåt strax före avhoppet för att starta rotationen.',
      'Håll armarna kraftfullt mot kroppen i luften.',
      'Eftersom du landar på samma fot som du hoppar från – förbered dig på mer "crush" vid landning.',
    ],
    pitfalls: [
      'Att plana ut kanten – avhoppet ska ske från en tydlig kurva.',
      'Att ta hjälp av tåspetsen (det gör den till en Toe Loop).',
      'Att luta ut kroppen till sidan – håll axlarna jämna.',
      'Att ha en öppen kropp i luften – håll ihop komprimerat.',
    ],
    relatedIds: ['loop-2', 'toe-loop-1'],
  },
  {
    id: 'loop-2',
    name: 'Dubbel Ögel',
    englishName: 'Double Loop',
    category: 'hopp',
    subcategory: 'kanthopp',
    subcategoryLabel: 'Kanthopp',
    difficulty: 'medel',
    description:
      'Dubbel Loop kräver 2 rotationer på bakre yttre kanten utan tåsparrstöd. Det är ett vanligt andrhopp i kombinationer (t.ex. 3Lutz+2Loop) och ett viktigt steg mot trippelhopp.',
    tips: [
      'Bygg upp farten i en djup kurva bakåt innan avhoppet.',
      'Håll vänstra sidan tillbakadragen för att hålla kanten.',
      'Dra in armarna explosivt vid avhoppet.',
    ],
    pitfalls: [
      'Att ta av med tåspetsen av gammal vana.',
      'Att öppna kroppen för tidigt och tappa det sista varvet.',
    ],
    relatedIds: ['loop-1', 'loop-3'],
  },
  {
    id: 'loop-3',
    name: 'Trippel Ögel',
    englishName: 'Triple Loop',
    category: 'hopp',
    subcategory: 'kanthopp',
    subcategoryLabel: 'Kanthopp',
    difficulty: 'avancerad',
    description:
      'Trippel Loop är ett av de tekniskt krävande trippelhoppet tack vare att det inte har någon tåsparrsassist – all rotation måste skapas från kanten ensam.',
    tips: [
      'Maximal fart och djup kant i ingångskurvan.',
      'Snabb och explosiv komprimering vid avhoppet.',
      'Träna rotationssnabbhet separat med back spin-övningar.',
    ],
    pitfalls: [
      'Att ta av med tåspetsen under tryck – det ger teknisk nedräkning från domare.',
      'Kantplaaning vid hög fart – kanten måste hålla oavsett fart.',
    ],
    relatedIds: ['loop-2'],
  },

  // ─── HOPP – TÅHOPP ──────────────────────────────────────────────────────────
  {
    id: 'toe-loop-1',
    name: 'Enkel Toe Loop',
    englishName: 'Single Toe Loop',
    category: 'hopp',
    subcategory: 'tåhopp',
    subcategoryLabel: 'Tåhopp',
    difficulty: 'nybörjare',
    description:
      'Toe Loop är det vanligaste och tekniskt sett lättaste tävlingshoppet. Det tar av från höger bakre yttre kant med hjälp av vänster tåsparr som planteras i isen. Eftersom höfterna redan är i rotationsriktningen vid avhoppet är det det hopp som kräver minst ansträngning för att piruetta. Det är också det vanligaste andrarhoppet i kombinationer.',
    tips: [
      'Plantera vänster tåsparr bestämt men mjukt i isen – den ska vara ett pivotpunkt, inte ett katapulthopp.',
      'Håll vikten centrerad över höger fot vid avhoppet.',
      'Svinga vänster ben framåt och uppåt för att hjälpa lyftet.',
      'Komprimera armar och ben snabbt i luften.',
    ],
    pitfalls: [
      'Att hoppa från tåspetsen istället för kanten – ta av från kanten, tåspetsen hjälper bara till.',
      'Att luta sig för långt framåt vid tåplantningen.',
      'Att öppna kroppen för tidigt i luften.',
      'Att landa på inre kanten istället för yttre.',
    ],
    relatedIds: ['toe-loop-2', 'loop-1'],
  },
  {
    id: 'toe-loop-2',
    name: 'Dubbel Toe Loop',
    englishName: 'Double Toe Loop',
    category: 'hopp',
    subcategory: 'tåhopp',
    subcategoryLabel: 'Tåhopp',
    difficulty: 'medel',
    description:
      'Dubbel Toe Loop med 2 rotationer är ofta det andra dubbelhoppet en åkare lär sig. Det är det vanligaste andrarhoppet i kombinationer som 3Lutz+2Toe eller 3Flip+2Toe.',
    tips: [
      'Tryck tåspetsen hårdare i isen för att skapa mer lyft.',
      'Öka ingångsfarten från en tydlig tresvängsingång (tre-sväng).',
      'Komprimera kroppen direkt – det första varvet sker snabbt.',
    ],
    pitfalls: [
      'Att tappa kanten och åka upp på tåspetsen vid avhoppet.',
      'Att sitta för tidigt ned i avhoppet och förlora lyftkraften.',
    ],
    relatedIds: ['toe-loop-1', 'toe-loop-3'],
  },
  {
    id: 'toe-loop-3',
    name: 'Trippel Toe Loop',
    englishName: 'Triple Toe Loop',
    category: 'hopp',
    subcategory: 'tåhopp',
    subcategoryLabel: 'Tåhopp',
    difficulty: 'avancerad',
    description:
      'Trippel Toe Loop med 3 rotationer är det vanligaste trippelhoppet i tävling och ofta det första en åkare lär sig bland triplarna. Det är ett högt värderat hopp i kombinationer.',
    tips: [
      'Maximera ingångsfarten i en välhållen bakre yttre kant.',
      'Tåplantningen ska vara explosiv och ge ett tydligt lyft.',
      'Håll kompressionen under hela svängtiden.',
    ],
    pitfalls: [
      'Att "kasta" sig med överkroppen vid avhoppet.',
      'Underrotation på det tredje varvet – det sista varvet är alltid det svåraste.',
    ],
    relatedIds: ['toe-loop-2'],
  },
  {
    id: 'flip-1',
    name: 'Enkel Flip',
    englishName: 'Single Flip',
    category: 'hopp',
    subcategory: 'tåhopp',
    subcategoryLabel: 'Tåhopp',
    difficulty: 'grundläggande',
    description:
      'Flip är ett tåhopp som tar av från vänster bakre inre kant med hjälp av höger tåsparr. Kanten gör hoppet visuellt likt Lutzen men med en avgörande skillnad: inre kanten. En vanlig fel kallas "lip" (eller "flutz") när åkaren oavsiktligt rullar kanten till yttre kanten och gör en Lutz istället för en Flip.',
    tips: [
      'Kontrollera att du verkligen är på den inre kanten under hela ingången.',
      'Plantera höger tåsparr bestämt direkt bakom vänster fot.',
      'Svinga vänster ben framåt för att hjälpa rotationsstart.',
      'Håll höger axel tillbakadragen i ingångskurvan.',
    ],
    pitfalls: [
      '"Lip" – att rulla till yttre kant vid avhoppet. Domare markerar detta med "e" eller "!".',
      'Att lutas in mot mitten i ingångskurvan och tappa kantbindningen.',
      'Att plantera tåspetsen för långt bakom kroppen.',
    ],
    relatedIds: ['flip-2', 'lutz-1'],
  },
  {
    id: 'flip-2',
    name: 'Dubbel Flip',
    englishName: 'Double Flip',
    category: 'hopp',
    subcategory: 'tåhopp',
    subcategoryLabel: 'Tåhopp',
    difficulty: 'medel',
    description:
      'Dubbel Flip kräver 2 rotationer och är vanlig i friprogram på medelnivå. Kantkontrollen på inre bakre kanten är extra viktig eftersom det är lätt att felaktigt rulla till yttre kanten under tryck.',
    tips: [
      'Öka ingångsfarten utan att kompromissa med kantdjupet.',
      'Känn kanten aktivt under ingången – mentalisera att du är på insidan.',
    ],
    pitfalls: [
      'Kantfel under stress – lip-felet förekommer oftare på dubblar när farten är hög.',
      'Att öppna kroppen för tidigt och tappa rotation.',
    ],
    relatedIds: ['flip-1', 'flip-3'],
  },
  {
    id: 'flip-3',
    name: 'Trippel Flip',
    englishName: 'Triple Flip',
    category: 'hopp',
    subcategory: 'tåhopp',
    subcategoryLabel: 'Tåhopp',
    difficulty: 'avancerad',
    description:
      'Trippel Flip med 3 rotationer är ett av de sex grundläggande trippelhoppet och kräver exceptionell kantbindning. Kantfelet (lip/flutz) förekommer på alla nivåer och kan leda till poängavdrag.',
    tips: [
      'Prioritera kantkvalitet framför fart.',
      'Öva ingångskurvan isolerat tills den sitter i muskelminnet.',
      'Komprimera snabbt och hårt direkt vid avhoppet.',
    ],
    pitfalls: [
      'Lip-felet – det vanligaste tekniska felet bland elitåkare.',
      'Underrotation på grund av dålig komprimering.',
    ],
    relatedIds: ['flip-2'],
  },
  {
    id: 'lutz-1',
    name: 'Enkel Lutz',
    englishName: 'Single Lutz',
    category: 'hopp',
    subcategory: 'tåhopp',
    subcategoryLabel: 'Tåhopp',
    difficulty: 'grundläggande',
    description:
      'Lutz är det näst svåraste av tävlingshoppet och det enda tåhoppet som tar av från den bakre yttre kanten. Det unika är motrotationen: åkaren glider i en kurva åt vänster (för stativrotation) men roterar moturs – mot kurvans riktning. Hoppet är uppkallat efter österrikaren Alois Lutz som utförde det 1913. Det kräver en lång, välhållen ingångskurva på yttre kant.',
    tips: [
      'Åk en lång, rak ingångslinje med djup yttre kant – minst 3–4 meter.',
      'Håll vänster axel och höft tillbakadragen hela ingången.',
      'Plantera höger tåsparr klart och bestämt snett bakom kroppen.',
      'Motstå kroppens naturliga tendens att "hjälpa till" och rulla till inre kanten.',
    ],
    pitfalls: [
      '"Flutz" – att rulla till inre kanten i sista sekunden. Det vanligaste felet i konståkning.',
      'Att förkorta ingångskurvan och inte hålla kanten tillräckligt länge.',
      'Att svänga med höger axel framåt för att starta rotationen i förtid.',
      'Att plantera tåspetsen för nära kroppen och tappa lyftet.',
    ],
    relatedIds: ['lutz-2', 'flip-1'],
  },
  {
    id: 'lutz-2',
    name: 'Dubbel Lutz',
    englishName: 'Double Lutz',
    category: 'hopp',
    subcategory: 'tåhopp',
    subcategoryLabel: 'Tåhopp',
    difficulty: 'medel',
    description:
      'Dubbel Lutz med 2 rotationer kräver ännu längre och mer disciplinerad ingångskurva. Flutz-risken ökar med farten och är ett av de vanligaste tekniska felen som domare letar efter.',
    tips: [
      'Öva ingångskurvan med en coach som tittar bakifrån för att kontrollera kanten.',
      'Visualisera att du drar vänster sida av kroppen bakåt mot ingångskurvans centrum.',
    ],
    pitfalls: [
      'Flutz under press – kantfelet uppstår nästan alltid när farten ökar.',
      'Att "hoppa av" kanten för tidigt och tappa lyftriktningen.',
    ],
    relatedIds: ['lutz-1', 'lutz-3'],
  },
  {
    id: 'lutz-3',
    name: 'Trippel Lutz',
    englishName: 'Triple Lutz',
    category: 'hopp',
    subcategory: 'tåhopp',
    subcategoryLabel: 'Tåhopp',
    difficulty: 'avancerad',
    description:
      'Trippel Lutz är ett av konståkningens mest poänggivande hopp och kräver extrem precision i kanten, maximal fart och perfekt timing. Det är ett kärnhopp i elitprogram.',
    tips: [
      'En perfekt Lutz börjar i ingången – om kanten inte håller är allt förlorat.',
      'Håll hög fart men bibehåll kantdjupet – fart utan kant ger flutz.',
      'Träna komprimering separat för att maximera rotationshastigheten.',
    ],
    pitfalls: [
      'Flutz är det vanligaste felkällan bland elitåkare världen över.',
      'Kroppens rotation startar för tidigt – axlarna drar runt innan avhoppet är fullständigt.',
    ],
    relatedIds: ['lutz-2'],
  },
  {
    id: 'euler-1',
    name: 'Euler',
    englishName: 'Euler (Half-Loop)',
    category: 'hopp',
    subcategory: 'kanthopp',
    subcategoryLabel: 'Kanthopp',
    difficulty: 'medel',
    description:
      'Euler (tidigare kallad "Half-Loop") tar av från höger bakre yttre kant och landar på vänster bakre inre kant – det enda hoppet som landar på inre kanten. Denna unika landning gör det möjligt att direkt ta av i ett Salchow eller Flip, vilket gör Euler till ett ovärderligt länkhopp i trehopp-kombinationer som 3Flip+1Euler+3Salchow. ISU bytte namn officiellt 2018.',
    tips: [
      'Öva Euler som en del av kombinationen – det är nästan aldrig ett ensamt hopp.',
      'Känn att du landar på vänster inre kant och gå direkt in i nästa hopp.',
      'Rotationen är bara ett varv – fokusera på kantlandningen.',
    ],
    pitfalls: [
      'Att landa på yttre kant (vanligt reflex) och därmed bryta kombinationslogiken.',
      'Att stanna upp mentalt efter Euler – tempot i kombinationen ska flöda obrutet.',
    ],
    relatedIds: ['salchow-2', 'flip-2'],
  },
  {
    id: 'split-jump',
    isNew: true,
    name: 'Splithopp',
    englishName: 'Split Jump',
    category: 'hopp',
    subcategory: 'övningshopp',
    subcategoryLabel: 'Övningshopp',
    difficulty: 'medel',
    description:
      'Spridhoppet (Split Jump) är ett akrobatiskt utsmyckningshopp där åkaren öppnar benen i full spretposition i luften. Det är inte ett tävlingshopp som poängsätts separat utan används som ett koreografiskt element för att visa flexibilitet och artisteri. Det utförs vanligen från ett mohawk-steg eller liknande ingång.',
    tips: [
      'Öva spretpositionen på golvet (bale stretching) för att bygga upp flexibiliteten.',
      'Svinga båda benen kraftfullt utåt-uppåt vid avhoppet.',
      'Rikta tårna och knäna nedåt när du öppnar benen i luften.',
      'Plocka ihop benen snabbt för en stabil landning.',
    ],
    pitfalls: [
      'Att lyfta knäna istället för att sträcka benen – böjda knän ger en platt, oelegant linje.',
      'Att landa obalanserat på grund av för snabb eller för långsam ihopsamling.',
    ],
    relatedIds: [],
  },

  // ─── SNURRAR – STÅENDE ──────────────────────────────────────────────────────
  {
    id: 'uppright-basic',
    isNew: true,
    name: 'Framåt ståpiruett',
    englishName: 'Forward Upright Spin',
    category: 'piruetter',
    subcategory: 'stående-piruett',
    subcategoryLabel: 'Stående piruetter',
    difficulty: 'nybörjare',
    description:
      'Den stående piruetten är den grundläggande piruettpositionen i konståkning. Åkaren roterar på ett ben i en upprätt ställning med det fria benet framme eller vid sidan. Det är den första piruetten de flesta lär sig och utgör grunden för alla mer avancerade varianter.',
    tips: [
      'Starta piruetten från en djup inre bakre kant och dra in armarna snabbt mot kroppen.',
      'Håll vikten centrerad över piruettfotens knapp (den platta mittre delen av klingan).',
      'Blicken kan fokuseras på en fast punkt tills hastigheten ökar – sedan låt blicken rotera naturligt.',
      'Raka, komprimerade ben och armar ger snabbare rotation.',
    ],
    pitfalls: [
      'Att luta kroppen för långt framåt eller bakåt – tyngdpunkten måste vara exakt centrerad.',
      'Att piruetta på tåspetsen – känn att du är mitt på klingan.',
      'Att låta armarna flyga ut – det saktar omedelbart ner rotationen.',
      'Att titta ned – det påverkar balansen och hållningen.',
    ],
    relatedIds: ['scratch-spin', 'back-spin'],
  },
  {
    id: 'scratch-spin',
    name: 'Suddgummipiruett (Scratch Spin)',
    englishName: 'Scratch Spin',
    category: 'piruetter',
    subcategory: 'stående-piruett',
    subcategoryLabel: 'Stående piruetter',
    difficulty: 'medel',
    description:
      'Scratch Spin är den snabbaste piruetten i konståkning och den klassiska avslutningspiruetten. Åkaren drar gradvis in det fria benet och armarna mot kroppen vilket dramatiskt ökar rotationshastigheten (rörelsemängdsmomentets bevarande). Elitåkare kan nå över 300 varv per minut.',
    tips: [
      'Starta med en bred ställning och dra sedan in fria benet och armarna explosivt.',
      'Håll klingan stabilt mitt på isen – inte på tåspetsen.',
      'Ju hårdare du drar in armarna mot bröstkorgen, desto snabbare roterar du.',
      'Avsluta piruetten med armar och ben utsträckta för ett dramatiskt stopp.',
    ],
    pitfalls: [
      'Att börja dra ihop för tidigt innan du hittat piruettaxeln.',
      'Att vandra med piruettcentrumet – du ska stanna på en punkt.',
      'Att dra in armarna för långsamt – accelerationen ska vara snabb och explosiv.',
    ],
    relatedIds: ['uppright-basic', 'back-spin'],
  },
  {
    id: 'back-spin',
    isNew: true,
    name: 'Bakåt ståpiruett',
    englishName: 'Back Upright Spin',
    category: 'piruetter',
    subcategory: 'stående-piruett',
    subcategoryLabel: 'Stående piruetter',
    difficulty: 'medel',
    description:
      'Bakre stående piruett utförs på den icke-dominanta foten (höger fot för vänsterroterande åkare) och är ett av de viktigaste träningsverktygen i konståkning. Kroppspositionen i luften under hopp liknar denna piruettposition, vilket gör den ovärderlig för hopputveckling.',
    tips: [
      'Starta från en djup yttre bakre kant på höger fot.',
      'Håll en smal, komprimerad position med armarna nära kroppen.',
      'Fokusera på att hålla höger knä rakt och viktbärande.',
    ],
    pitfalls: [
      'Att piruetta på tåspetsen – ska vara mitt på klingan.',
      'Att luta sig in mot mitten – hållen upprättstående position.',
      'Att hoppa till den dominanta foten av gammal vana.',
    ],
    relatedIds: ['uppright-basic', 'scratch-spin'],
  },
  {
    id: 'layback-spin',
    isNew: true,
    name: 'Himmelspiruett',
    englishName: 'Layback Spin',
    category: 'piruetter',
    subcategory: 'stående-piruett',
    subcategoryLabel: 'Stående piruetter',
    difficulty: 'avancerad',
    description:
      'Liggande bakåtpiruett är en av de mest ikoniska och vackra elementen i konståkning, starkt förknippad med damernas program. Åkaren piruetter i stående position medan huvud och axlar faller bakåt med ryggraden böjd i en graciös båge. Det fria benets position varierar – sidan, bakåt, eller framåt.',
    tips: [
      'Bygg upp piruetthastigheten innan du lutar bakåt – det är svårt att öka farten i positionen.',
      'Låt ryggbågen ske gradvis och naturligt – tvinga inte positionen.',
      'Håll axlarna jämna – inte en axel högre än den andra.',
      'Stärk rygg- och magmusklerna utanför isen för att stödja positionen.',
    ],
    pitfalls: [
      'Att ändra piruettcentrum när du lutar bakåt.',
      'Att minska farten för tidigt när du går in i positionen.',
      'Att knipa ihop skuldror och armar – håll dem avslappnat utsträckta.',
    ],
    relatedIds: ['biellmann-spin', 'uppright-basic'],
  },
  {
    id: 'biellmann-spin',
    name: 'Biellmannpiruett',
    englishName: 'Biellmann Spin',
    category: 'piruetter',
    subcategory: 'stående-piruett',
    subcategoryLabel: 'Stående piruetter',
    difficulty: 'elit',
    description:
      'Biellmannpiruetten är en av konståkningens mest avancerade och spektakulära positioner. Åkaren sträcker det fria benets klinga upp och framåt ovanför huvudet i en näst intill vertikal spretposition, medan händerna håller klingan bakom ryggen. Uppkallad efter schweiziskan Denise Biellmann. Kräver extremt rörliga axlar, ländrygg och höfter.',
    tips: [
      'Öva Biellmann-grepp utanför isen dagligen – rörligheterna tar månader att bygga upp.',
      'Börja med att ta grepp om klingan i stilla stående för att känna sträcket.',
      'Bygg upp piruetthastigheten i liggande bakåtpiruett och gå sedan till Biellmann.',
      'Ha alltid en coach eller träningskamrat som kan hjälpa i inledningen.',
    ],
    pitfalls: [
      'Att forcera rörligheten – risk för skada om man pressar för hårt för tidigt.',
      'Att tappa piruettaxeln när man lyfter benet.',
      'Att piruetta på tåspetsen – Biellmann kräver extra uppmärksamhet på klingscentrum.',
    ],
    relatedIds: ['layback-spin'],
  },
  {
    id: 'attitude-spin',
    name: 'Attitydpiruett',
    englishName: 'Attitude Spin',
    category: 'piruetter',
    subcategory: 'stående-piruett',
    subcategoryLabel: 'Stående piruetter',
    difficulty: 'medel',
    description:
      'Attitydpiruetten utförs med fria benet i en balettliknande attityd-position: knät böjt och höften utåtroterad, benet hålls åt sidan eller bakåt. Överkroppen lutas något åt sidan och huvudet vrids. Det är en mjukare variant av liggande bakåtpiruett och ett vanligt mellansteg i träningen.',
    tips: [
      'Aktivera höftens utåtrotation tydligt – känn att låret pekar ut.',
      'Håll skuldrorna nedtryckta och halsen lång.',
      'Öva attitydpositionen statiskt på golvet för att bygga upp muskelminnet.',
    ],
    pitfalls: [
      'Att hålla benet för lågt – låret bör vara minst parallellt med isen.',
      'Att lyfta ena axeln – axlarna ska vara jämna trots sidorotationen.',
    ],
    relatedIds: ['layback-spin', 'uppright-basic'],
  },

  // ─── SNURRAR – SITTSNURR ────────────────────────────────────────────────────
  {
    id: 'sit-spin',
    name: 'Sittpiruett',
    englishName: 'Sit Spin',
    category: 'piruetter',
    subcategory: 'sittpiruett',
    subcategoryLabel: 'Sittpiruetter',
    difficulty: 'medel',
    description:
      'Sittpiruetten utförs med piruettbenets knä djupt böjt i en sittande position – låret parallellt med isen – och det fria benet sträckt framåt. Det är en styrkeövning för quadricepsen och kräver god balans i en ovanlig position. Djupare sittposition ger mer poäng.',
    tips: [
      'Gå djupt – sikta på att låret är parallellt med eller under isytan.',
      'Sträck det fria benet rakt ut framåt med rak tå.',
      'Håll ryggen relativt rak – undvik att hänga med överkroppen.',
      'Bygg upp bensstyrkan med squats och sittpiruettsövningar utanför isen.',
    ],
    pitfalls: [
      'För hög sittposition – komma för tidigt upp ur piruetten.',
      'Böjt fritt ben – ska vara rakt.',
      'Att vandra med piruettcentrum – håll dig på en punkt.',
      'Att tippa framåt i sittposition och piruetta på tåspetsen.',
    ],
    relatedIds: ['sit-spin-back', 'pancake-spin', 'camel-spin'],
  },
  {
    id: 'sit-spin-back',
    isNew: true,
    name: 'Bakåt sittpiruett',
    englishName: 'Back Sit Spin',
    category: 'piruetter',
    subcategory: 'sittpiruett',
    subcategoryLabel: 'Sittpiruetter',
    difficulty: 'avancerad',
    description:
      'Bakre sittpiruett utförs på den icke-dominanta foten. Den är landningspositionen för Death Drop och kräver god balans och styrka på den svagare sidan. Betydligt svårare än vanlig sittpiruett.',
    tips: [
      'Öva sittpiruett på höger fot separat innan kombinationen.',
      'Gå in i positionen kontrollerat – inte med stor fart i början.',
    ],
    pitfalls: [
      'Att piruetta för högt – kom ner i full sittposition.',
      'Att tappa balansen direkt i ingången.',
    ],
    relatedIds: ['sit-spin', 'death-drop'],
  },
  {
    id: 'pancake-spin',
    name: 'Pannkakspiruett',
    englishName: 'Pancake Spin',
    category: 'piruetter',
    subcategory: 'sittpiruett',
    subcategoryLabel: 'Sittpiruetter',
    difficulty: 'elit',
    description:
      'Pannkakspiruett är en extrem variant av sittpiruetten där fria benet korsas över piruettbenet och överkroppen böjs helt platt framåt tills den nästan vidrör isen – kroppen bildar en platt skiva, som en pannkaka. Kräver extremt rörliga höfter och hamstrings.',
    tips: [
      'Bygg upp flexibiliteten gradvis med dagliga tätningsövningar.',
      'Öva det statiska pannkaksläget på golvet innan du provar på isen.',
      'Gå in från en välhållen sittpiruett med god hastighet.',
    ],
    pitfalls: [
      'Att forcera höften ned – risk för skada utan ordentlig uppvärmning.',
      'Att tappa piruettaxeln när man böjer sig framåt.',
    ],
    relatedIds: ['sit-spin', 'camel-spin'],
  },
  {
    id: 'cannonball-spin',
    isNew: true,
    name: 'Broken Leg-piruett',
    englishName: 'Broken Leg Spin',
    category: 'piruetter',
    subcategory: 'sittpiruett',
    subcategoryLabel: 'Sittpiruetter',
    difficulty: 'avancerad',
    description:
      'Broken Leg-piruetten utförs från sittpiruetspositionen där fria benet böjs i knät och det nedre benet sticket ut åt sidan eller framåt i en vinkel – som ett brutet ben. Positionen ger en distinkt siluett och kräver god balans i den asymmetriska positionen.',
    tips: [
      'Böj fria benets knä tydligt och håll underbenet utsträckt åt sidan.',
      'Håll piruettaxeln stabil trots den asymmetriska belastningen.',
      'Bygg upp hastigheten i sittpiruetten innan du intar Broken Leg-positionen.',
    ],
    pitfalls: [
      'Att tappa piruettcentrumet när benet böjs – håll axeln fast.',
      'Att underbenet hänger ned istället för att sticka ut tydligt.',
    ],
    relatedIds: ['sit-spin', 'svamp-spin'],
  },

  // ─── SNURRAR – KAMELSNURR ───────────────────────────────────────────────────
  {
    id: 'camel-spin',
    name: 'Kamelpiruett',
    englishName: 'Camel Spin',
    category: 'piruetter',
    subcategory: 'kamelpiruett',
    subcategoryLabel: 'Kamelpiruetter',
    difficulty: 'medel',
    description:
      'Kamelpiruetten utförs med fria benet sträckt bakåt parallellt med isen, kroppen böjd framåt i en T-form, liknande balettens arabesque. Det är en av de tre grundläggande piruettpositionerna och kräver god balans och styrka i bakre muskulaturen.',
    tips: [
      'Lyft det fria benet till eller över höfthöjd – som minimum parallellt med isen.',
      'Sträck det fria benet fullständigt – tät knä, sträckt tå.',
      'Håll överkroppen platt och axlarna jämna.',
      'Stärk ländrygg och gluteus med övningar utanför isen.',
    ],
    pitfalls: [
      'Att hålla fria benet för lågt – det ger en låg poängposition.',
      'Att böja fria benet i knät.',
      'Att titta för långt uppåt och böja nacken bakåt.',
      'Att piruetta på tåspetsen istället för klingsmitten.',
    ],
    relatedIds: ['flying-camel', 'layover-camel', 'sit-spin'],
  },
  {
    id: 'layover-camel',
    isNew: true,
    name: 'Liggande kamelpiruett',
    englishName: 'Layover Camel Spin',
    category: 'piruetter',
    subcategory: 'kamelpiruett',
    subcategoryLabel: 'Kamelpiruetter',
    difficulty: 'avancerad',
    description:
      'Liggande kamelpiruett är en variant där överkroppen roterar uppåt så att kroppen "öppnas" mot taket snarare än mot isen. Det fria benet håller sin arabesque-position, men bröstkorgen och huvudet vänds uppåt. Skapar en elegant och annorlunda siluett.',
    tips: [
      'Starta i vanlig kamelpiruett och rotera gradvis överkroppen uppåt.',
      'Håll höfter och fria ben stabila medan överkroppen roterar.',
      'Axlarna ska ligga plana, inte sned.',
    ],
    pitfalls: [
      'Att tappa fria benets höjd när överkroppen öppnas.',
      'Att piruetta på tåspetsen – positionsförändringen stör piruettaxeln.',
    ],
    relatedIds: ['camel-spin', 'donut-spin'],
  },
  {
    id: 'donut-spin',
    isNew: true,
    name: 'Dip-piruett',
    englishName: 'Doughnut Spin',
    category: 'piruetter',
    subcategory: 'kamelpiruett',
    subcategoryLabel: 'Kamelpiruetter',
    difficulty: 'elit',
    description:
      'Munkpiruetten är en extrem kamelpiruettvariant där det fria benets klinga grips med en eller båda händerna och dras bakåt mot huvudet medan ryggen böjs dramatiskt bakåt. Kroppen formar en ring eller munkliknande cirkel. Kräver extremt rörlig ryggrad och axlar.',
    tips: [
      'Öva stretching för rygg, axlar och höfter dagligen.',
      'Bygg upp gripen gradvis – börja med att bara ta tag om ankeln.',
      'Ha en coach som stöttar vid första försöken.',
    ],
    pitfalls: [
      'Att forcera positionen utan tillräcklig rörlighet – skaderisk.',
      'Att tappa piruettaxeln helt – munkpiruetten kräver extra stabilt centrum.',
    ],
    relatedIds: ['camel-spin', 'biellmann-spin'],
  },
  {
    id: 'illusion-spin',
    isNew: true,
    name: 'Illusionspiruett',
    englishName: 'Illusion Spin',
    category: 'piruetter',
    subcategory: 'kamelpiruett',
    subcategoryLabel: 'Kamelpiruetter',
    difficulty: 'avancerad',
    description:
      'Illusionspiruetten är en spektakulär kamelpiruettvariant där åkaren rytmiskt gungar överkroppen ned mot isen (fria benet sparkar upp) och upp igen i en vippande rörelse under hela rotationen. Det skapar en optisk illusion av rörelse och är ett av de mest ögonfallande elementen i konståkning.',
    tips: [
      'Rörelsens rytm är nyckeln – ner och upp ska vara jämnt och flödande.',
      'Håll fria benet sträckt och aktivt under hela gungröresen.',
      'Spara energi i piruettcentrumet – kroppen oscillerar men axeln är fast.',
    ],
    pitfalls: [
      'Oregelbunden gungningsrytm – ser hoppigt ut istället för flytande.',
      'Att tappa piruettaxeln med vipprörelsen.',
    ],
    relatedIds: ['camel-spin'],
  },

  // ─── SNURRAR – FLYGANDE ─────────────────────────────────────────────────────
  {
    id: 'flying-camel',
    name: 'Flygande kamelpiruett',
    englishName: 'Flying Camel Spin',
    category: 'piruetter',
    subcategory: 'flygande-piruett',
    subcategoryLabel: 'Flygande piruetter',
    difficulty: 'avancerad',
    description:
      'Flygande kamelpiruett startar med ett axelliknande hopp från vänster framre yttre kant. Åkaren lyfter och landar direkt i kamelpiruettpositionen med fria benet bakåt. Det är den mest klassiska av de flygande piruetterna och kombinerar dynamiken i ett hopp med den graciösa kamelsiluetten.',
    tips: [
      'Avhoppets riktning ska vara uppåt och lite framåt – inte in mot mitten.',
      'Fria benet ska aktivt gå bakåt till arabesque direkt vid landningen.',
      'Öva kamelpiruetten separat till perfektion innan du lägger till avhoppet.',
    ],
    pitfalls: [
      'Att landa med för raka benet och "smälla" ned.',
      'Att landa i sittposition istället för kamelposition.',
      'Att vandra med piruettcentrumet efter landningen.',
    ],
    relatedIds: ['camel-spin', 'death-drop', 'butterfly'],
  },
  {
    id: 'flying-sit-spin',
    name: 'Flygande sittpiruett',
    englishName: 'Flying Sit Spin',
    category: 'piruetter',
    subcategory: 'flygande-piruett',
    subcategoryLabel: 'Flygande piruetter',
    difficulty: 'avancerad',
    description:
      'Flygande sittpiruett inleds med ett hopp där åkaren antar sittposition i luftens topp – det ser ut som om åkaren sitter i luften. Landningen sker direkt in i sittpiruett. Kraftfullt och visuellt imponerande.',
    tips: [
      'Knäet ska böjas aktivt vid hoppets kulmen – inte vänta till landningen.',
      'Avhoppsfarten ska vara hög – mer fart ger mer tid och höjd.',
      'Landningen ska ta emot mjukt med böjt knä.',
    ],
    pitfalls: [
      'Att hoppa lodrätt utan framrörelse – ska ha viss framåtrörelse.',
      'Att inte komma ned i sittposition tillräckligt snabbt.',
    ],
    relatedIds: ['sit-spin', 'death-drop'],
  },
  {
    id: 'butterfly',
    name: 'Fjärilsspin',
    englishName: 'Butterfly Spin',
    category: 'piruetter',
    subcategory: 'flygande-piruett',
    subcategoryLabel: 'Flygande piruetter',
    difficulty: 'avancerad',
    description:
      'Fjärilsspinn är ett spektakulärt tvåfotsavhopps-element. Åkaren tar av från båda fötterna och roterar med kroppen nästan horisontell i luften med benen saxande förbi varandra. Det är lika vanligt som ett koreografiskt element och som ingång till en flygande piruett.',
    tips: [
      'Avhoppet är inte ett klass-axel utan ett sax-hopp med kropp parallell med isen.',
      'Håll benen sträckta och saxrörelsen symmetrisk.',
      'Öka farten gradvis – börja med lägre hopp och jobba dig upp.',
    ],
    pitfalls: [
      'Att landa på ett rakt ben utan absorbering.',
      'Att böja benen under flykten – ska vara utsträckta.',
    ],
    relatedIds: ['flying-camel', 'death-drop'],
  },
  {
    id: 'death-drop',
    name: 'Death Drop',
    englishName: 'Death Drop',
    category: 'piruetter',
    subcategory: 'flygande-piruett',
    subcategoryLabel: 'Flygande piruetter',
    difficulty: 'elit',
    description:
      'Death Drop (formellt: Flygande öppen Axel-sittpiruett) är ett av konståkningens mest dramatiska element. Avhoppet är axelliknande (framre yttre kant) men avhoppsbenet sparkas aktivt bakåt och upp under flygfasen, vilket skapar en spektakulär splitad siluett i luften. Landningen sker på den icke-dominanta foten direkt in i bakre sittpiruett.',
    tips: [
      'Sparkrörelsen bakåt och upp är det som definierar Death Drop – gör den tydlig och kraftfull.',
      'Överstarka avhoppsbenets spark och låt det faktiskt gå bakom kroppen.',
      'Bygg upp gradvis: börja med bakre sittpiruett, sedan bakre flygande sittpiruett, sedan Death Drop.',
      'Alltid med coach vid de första försöken.',
    ],
    pitfalls: [
      'Att inte sparka tillräckligt kraftfullt bakåt – ger en platt och odefinierad flygfas.',
      'Att landa på fel fot.',
      'Att inte komma ned i sittposition snabbt nog efter landningen.',
    ],
    relatedIds: ['sit-spin-back', 'flying-camel', 'butterfly'],
  },

  // ─── SNURRAR – KOMBINATIONSSNURR ────────────────────────────────────────────
  {
    id: 'combination-spin',
    name: 'Kombinationspiruett',
    englishName: 'Combination Spin',
    category: 'piruetter',
    subcategory: 'kombinationspiruett',
    subcategoryLabel: 'Kombinationspiruetter',
    difficulty: 'avancerad',
    description:
      'En kombinationspiruett inkluderar minst två olika grundpositioner (stående, sittande, kamel) i en enda kontinuerlig piruett. Den kan utföras utan fotbyte (CoSp) eller med fotbyte (CCoSp). Fotbytet räknas som ett nivåkrävande element. En komplett kombinationspiruett med alla tre grundpositioner och fotbyte ger maximala nivåpoäng.',
    tips: [
      'Övergångarna mellan positioner ska vara mjuka och flödande – inte ryckvisa.',
      'Bygg upp hastigheten i varje ny position.',
      'Planera sekvensen: vilken position börjar och slutar?',
      'Fotbytet ska göras på ett tydligt sätt med direkt övergång till piruett på andra foten.',
    ],
    pitfalls: [
      'Att tappa farten vid positionsbyte.',
      'Att göra positionsbyten på tåspetsen och vandra med centrum.',
      'Att ha för liten hastighet i avslutningspositionen.',
    ],
    relatedIds: ['camel-spin', 'sit-spin', 'uppright-basic'],
  },

  // ─── SVÄNGAR – ETTFOTSSVÄNGAR ────────────────────────────────────────────────
  {
    id: 'three-turn',
    name: 'Ytterskärstrea',
    englishName: 'Three-Turn',
    category: 'svängar',
    subcategory: 'ettfotssvängar',
    subcategoryLabel: 'Ettfotssvängar',
    difficulty: 'nybörjare',
    description:
      'Tresvängen är den vanligaste ettfots-svängen i konståkning och grundsteg för hopp- och steginlärnig. Åkaren roterar på ett ben och byter riktning (framåt↔bakåt) och kant (yttre↔inre) på en och samma fot. Spåret på isen liknar siffran 3. Det är den enda ettfotssvängen som räknas som "grundläggande" (inte "svår") i ISUs stegserieregler.',
    tips: [
      'Håll fria foten nära piruettfoten under svängen.',
      'Låt axlarna följa rörelsen kontrollerat – inte kastas runt.',
      'Träna på inre och yttre kanter separat innan du kombinerar.',
      'Håll god is-kontakt genom hela svängen.',
    ],
    pitfalls: [
      'Att "kasta" axlarna runt för att tvinga fram svängen.',
      'Att tappa kanten direkt efter svängen.',
      'Att sätta ner fria foten istället för att hålla den upp.',
    ],
    relatedIds: ['bracket', 'rocker'],
  },
  {
    id: 'bracket',
    isNew: true,
    name: 'Bracket',
    englishName: 'Bracket Turn',
    category: 'svängar',
    subcategory: 'ettfotssvängar',
    subcategoryLabel: 'Ettfotssvängar',
    difficulty: 'avancerad',
    description:
      'Bracket-svängen utförs på ett ben med byte av riktning och kant, men till skillnad från tresvängen roterar den mot kurvens ytterkant. Spåret liknar en hakparentes "}" med tanden pekande utåt. Det kräver stark motståndskraft mot kroppens naturliga rotationstendens och räknas som en "svår sväng" i ISU-protokoll.',
    tips: [
      'Aktivt motstå rotationsimpulsen – håll kroppen "mot" kurvens centrum.',
      'Fria foten hålls mycket nära piruettfoten under hela svängen.',
      'Öva statisk balans i positionen innan du lägger till fart.',
      'Axlarna och höfterna ska vara kontrollerade och motriktade.',
    ],
    pitfalls: [
      'Att rulla kanten istället för att aktivt byta mot kurvens utsida.',
      'Att öppna axlarna och "falla in" i svängen.',
      'Att tappa kontakten med isen efter svängen.',
    ],
    relatedIds: ['three-turn', 'rocker', 'counter'],
  },
  {
    id: 'rocker',
    isNew: true,
    name: 'Rockersväng',
    englishName: 'Rocker Turn',
    category: 'svängar',
    subcategory: 'ettfotssvängar',
    subcategoryLabel: 'Ettfotssvängar',
    difficulty: 'avancerad',
    description:
      'Rockettsvängen utförs på ett ben med byte av riktning men utan kandbyte – åkaren glider på t.ex. yttre kant och lämnar svängen på yttre kant igen, men i motsatt riktning. Kurvan byter centrum (som en gungstols rocking chair-rörelse). Räknas som svår sväng i ISU.',
    tips: [
      'Lär dig att känna kandbytets frånvaro – du byter riktning men håller kanten.',
      'Svängrörelsen är inifrån kommande, inte ett kast av axlarna.',
      'Öva rotationskänslan separat på golvet.',
    ],
    pitfalls: [
      'Att av misstag byta kant och göra en tresväng istället.',
      'Att tappa flödet direkt efter svängen.',
    ],
    relatedIds: ['three-turn', 'counter', 'bracket'],
  },
  {
    id: 'counter',
    name: 'Countersväng',
    englishName: 'Counter Turn',
    category: 'svängar',
    subcategory: 'ettfotssvängar',
    subcategoryLabel: 'Ettfotssvängar',
    difficulty: 'avancerad',
    description:
      'Countersvängen räknas av många som den svåraste ettfotssvängen. Likt rockettsvängen byter den riktning utan att byta kant, men roterar mot kurvans utsida (som en bracket men utan kandbyte). Kräver extremt starka edges och fullständig kroppskontroll.',
    tips: [
      'Bygg upp cantigheten i bracket och rocker-svängar fullt ut innan counter.',
      'Fokusera på att "hålla emot" rotationsimpulsen från kanten.',
      'Öva med låg fart i början.',
    ],
    pitfalls: [
      'Att glida in i en rocker eller bracket av misstag.',
      'Att tappa kanten direkt i svängen och kompensera med fotsättning.',
    ],
    relatedIds: ['bracket', 'rocker'],
  },
  {
    id: 'twizzle',
    name: 'Twizzle',
    englishName: 'Twizzle',
    category: 'svängar',
    subcategory: 'ettfotssvängar',
    subcategoryLabel: 'Ettfotssvängar',
    difficulty: 'avancerad',
    description:
      'En twizzle är en rörlig ettfotssväng med en eller flera fulla rotationer. Till skillnad från piruetter rör sig åkaren över isen under twizzeln. Det är ett signaturteknik i isdans och används även i singelprogram inom stepserier. Flertalet rotationer i hög fart är det ultimata målet.',
    tips: [
      'Bygg upp rotationshastigheten med komprimerade armar, sedan öppna mjukt.',
      'Håll balansen på klingsmittan under hela rörelsen.',
      'Resan (translationsrörelsen) är nyckeln – du ska glida, inte stanna.',
    ],
    pitfalls: [
      'Att stanna upp på isen och göra det till en piruett.',
      'Att ta ner foten för tidigt och bryta rotationen.',
    ],
    relatedIds: ['three-turn'],
  },
  {
    id: 'loop-turn',
    name: 'Loopsväng',
    englishName: 'Loop Turn',
    category: 'svängar',
    subcategory: 'ettfotssvängar',
    subcategoryLabel: 'Ettfotssvängar',
    difficulty: 'avancerad',
    description:
      'Loopsvängen är en ettfots-rörelse där åkaren utför en liten slinga på isen utan att byta riktning. Kroppen roterar komplett men rörelseriktningen är densamma som ingångspunkten. Räknas som svår rörelse i stegserie. Ska inte förväxlas med Loop-hoppet.',
    tips: [
      'Flytta tyngdpunkten framåt i slingan för att hålla farten.',
      'Fria foten ska vara nära isen men inte sätta ned.',
      'Öva på att spåra slingan visuellt på isen.',
    ],
    pitfalls: [
      'Att göra den för stor och tappa farten.',
      'Att sätta ned fria foten och bryta rörelsen.',
    ],
    relatedIds: ['three-turn', 'bracket'],
  },

  // ─── SVÄNGAR – TVÅFOTSSVÄNGAR ────────────────────────────────────────────────
  {
    id: 'mohawk',
    name: 'Mohawk',
    englishName: 'Mohawk (C-Turn)',
    category: 'svängar',
    subcategory: 'tvåfotssvängar',
    subcategoryLabel: 'Tvåfotssvängar',
    difficulty: 'nybörjare',
    description:
      'Mohawk är den grundläggande tvåfots-övergångssteget. Åkaren byter fot och riktning (framåt→bakåt) men håller samma kanttyp (inre→inre eller yttre→yttre). Spåret liknar bokstaven C. Det är ett av de mest använda stegatöperna i konståkning och isdans, och är grunden för mer avancerade varianter.',
    tips: [
      'Placera den nya foten parallellt med den gamla i ett öppet eller stängt mohawk.',
      'Tyngdöverföringen ska vara mjuk och välkontrollerad.',
      'Träna mohawk från stilla stående för att lära in fotplaceringen.',
      'Håll god hållning – axlarna ska inte kastas runt.',
    ],
    pitfalls: [
      'Att placera den nya foten i fel vinkel och snubbla.',
      'Att öppna axlarna för tidigt och tappa balansen.',
      'Att stanna upp i momentet istället för att flöda igenom.',
    ],
    relatedIds: ['choctaw', 'three-turn'],
  },
  {
    id: 'choctaw',
    name: 'Choctaw',
    englishName: 'Choctaw (S-Turn)',
    category: 'svängar',
    subcategory: 'tvåfotssvängar',
    subcategoryLabel: 'Tvåfotssvängar',
    difficulty: 'medel',
    description:
      'Choctaw är det enda steg som räknas som "svårt" i ISUs stegserieregler. Det byter fot och riktning (som mohawk) men byter också kanttyp (yttre→inre eller inre→yttre). Spåret liknar bokstaven S. Tekniskt kräver det att nya foten placeras på en annorlunda kant vilket skapar ett kantbyte i övergången.',
    tips: [
      'Känn det aktiva kantbytet – du byter bokstavligen från en kanttyp till en annan.',
      'Stängd choctaw kräver att hälen placeras vid den gamla fotens tå – öva fotplaceringen.',
      'Öka farten gradvis när grunden sitter.',
    ],
    pitfalls: [
      'Att göra en mohawk istället och inte byta kant.',
      'Att placera nya foten fel och tappa flödet.',
      'Att forcera kantbytet och orsaka ett "platt steg".',
    ],
    relatedIds: ['mohawk', 'three-turn'],
  },

  // ─── GLIDÖVNINGAR ────────────────────────────────────────────────────────────
  {
    id: 'spiral',
    name: 'Spiral',
    englishName: 'Spiral',
    category: 'glidövningar',
    subcategory: 'spiral',
    subcategoryLabel: 'Spiraler',
    difficulty: 'medel',
    description:
      'En spiral är ett glidmoment på ett ben där fria benet hålls sträckt bakåt (eller åt sidan) ovanför höfthöjd i minst 3 sekunder. Grunden är arabesque-positionen som hämtats från baletten. Spiralen visar flexibilitet, kantskvalitet och kroppslinje. Den var ett obligatoriskt tävlingselement i damernas singelåkning fram till säsongen 2011–12.',
    tips: [
      'Lyft det fria benet aktivt – gör det medvetet och markerat.',
      'Sträck tåen på fria benet fullt ut.',
      'Håll bröstkorgen öppen och axlarna nedtryckta.',
      'Öva arabesque-balansen på golvet (barre-träning).',
    ],
    pitfalls: [
      'Att hålla fria benet för lågt – spiralen ska tydligt överstiga höftnivå.',
      'Att luta kroppen framåt med hängande rygg.',
      'Böjt fritt knä – sträck det fullständigt.',
      'Spärrad tå på fria foten.',
    ],
    relatedIds: ['charlotte-spiral', 'biellmann-spiral', 'spread-eagle'],
  },
  {
    id: 'charlotte-spiral',
    name: 'Charlotte-spiral',
    englishName: 'Charlotte Spiral',
    category: 'glidövningar',
    subcategory: 'spiral',
    subcategoryLabel: 'Spiraler',
    difficulty: 'elit',
    description:
      'Charlotte-spiralen (även Fading eller Candle-spiral) är en extremt dramatisk variant av spiralen. Överkroppen böjs helt framåt mot stödbenets fot medan fria benet lyfts bakåt i en näst intill vertikal spretposition – en 180° split stående. Uppkallad efter den tyske konståkaren Charlotte Oelschlägel från tidigt 1900-tal.',
    tips: [
      'Kräver extrem hamstring- och höftflexibilitet – bygg upp med daglig stretching i månader.',
      'Börja med lägre vinkel och öka gradvis.',
      'Stödbenets kant måste vara djup och stabil – överkroppens tyngd förändrar balansen.',
    ],
    pitfalls: [
      'Att forcera positionen utan tillräcklig rörlighet – allvarlig skaderisk.',
      'Att tappa stödbenets kant på grund av överkroppens böjning.',
    ],
    relatedIds: ['spiral', 'biellmann-spiral'],
  },
  {
    id: 'biellmann-spiral',
    name: 'Biellmann-spiral',
    englishName: 'Biellmann Spiral',
    category: 'glidövningar',
    subcategory: 'spiral',
    subcategoryLabel: 'Spiraler',
    difficulty: 'elit',
    description:
      'Biellmann-spiralen kombinerar Biellmann-positionen (fria benets klinga grips och lyfts ovanför huvudet) med ett glidmoment på ett ben. Kräver extremt rörliga axlar, ländrygg och höfter. En av konståkningens allra svåraste individuella element.',
    tips: [
      'Öva Biellmann-positionen i stillastående månader innan du lägger till rörelse.',
      'Gripen om klingan ska vara fast – glider klingan tappar du kontrollen.',
      'Glidkanten måste vara djup nog för att bära kroppens decentrerade tyngd.',
    ],
    pitfalls: [
      'Att forcera rörligheten – skaderisk är hög.',
      'Att tappa stödbenets kant.',
    ],
    relatedIds: ['spiral', 'biellmann-spin'],
  },
  {
    id: 'spread-eagle',
    name: 'Spretörn (Spread Eagle)',
    englishName: 'Spread Eagle',
    category: 'glidövningar',
    subcategory: 'bredsteg',
    subcategoryLabel: 'Bredstegsövningar',
    difficulty: 'medel',
    description:
      'Spretörn är en tvåfotsrörelse där åkaren glider med båda fötterna på isen, tårna vridna åt varsitt håll och hälarna mot varandra. De två klingarna spårar parallella linjer. Det finns yttre spretörn (yttre kanter) och inre spretörn (inre kanter). Krängande höfter och god utåtrotation är nödvändigt. Spretörnet används ofta som ingång till Axelhopp.',
    tips: [
      'Bygg upp höfternas utåtrotation med dagliga stretch-övningar.',
      'Håll knäna raka och tårna maximalt utåtvridna.',
      'Öva balansen i positionen i stillastående på isen först.',
      'Farten behöver vara god för att hålla kurvan utan att tappa positionen.',
    ],
    pitfalls: [
      'Att böja knäna för att kompensera för otillräcklig höftrörlighet.',
      'Att låta en fot "vandra" framåt och bryta den parallella linjen.',
      'Att halvt inta positionen – vinkeln måste vara tydlig.',
    ],
    relatedIds: ['ina-bauer', 'spiral'],
  },
  {
    id: 'ina-bauer',
    name: 'Ina Bauer',
    englishName: 'Ina Bauer',
    category: 'glidövningar',
    subcategory: 'bredsteg',
    subcategoryLabel: 'Bredstegsövningar',
    difficulty: 'medel',
    description:
      'Ina Bauer är ett tvåfotsrörelse likt spretörnet, men med den viktiga skillnaden att en fot glider framåt och den andra bakåt på parallella linjer. Benets inbördes riktning är balettens "fjärde position på is". Liggande Ina Bauer (Deep Ina Bauer) lägger till en dramatisk bakre båge med överkroppen och är en av konståkningens mest ikoniska rörelser – starkt förknippad med Evgeni Plushenko. Uppkallad efter den tyska världsmästaren Ina Bauer.',
    tips: [
      'Avgörande: en fot åker framåt och en bakåt – inte åt varsitt håll som i spretörn.',
      'Knäna ska vara väldefinierade – det framre böjt, det bakre rakt.',
      'Liggande Ina Bauer: bygg upp ryggbågen gradvis och ha god fart.',
      'Öva positionen statiskt i stillastående på isen.',
    ],
    pitfalls: [
      'Att förväxla med spretörn – kontrollerka att en fot verkligen åker bakåt.',
      'Att liggande Ina Bauers ryggbåge kollapsar för snabbt.',
      'Att tappa parallelliteten i fotlinjen.',
    ],
    relatedIds: ['spread-eagle', 'hydroblading'],
  },
  {
    id: 'hydroblading',
    name: 'Hydroblading',
    englishName: 'Hydroblading',
    category: 'glidövningar',
    subcategory: 'bredsteg',
    subcategoryLabel: 'Bredstegsövningar',
    difficulty: 'elit',
    description:
      'Hydroblading är ett ettfotsglidelement där åkaren lutar hela kroppen i en extremt låg position, nästan parallell med isytan. Inget annat än skridskofoten (och eventuellt ett eller båda händerna) vidrör isen. Kräver extrem balans, styrka och kantdjup. Ursprungligen populäriserat av kanadensiska isdansaren Shae-Lynn Bourne och Victor Kraatz på 1990-talet.',
    tips: [
      'Bygg upp gradvis – börja med djupa kanter och öka lutningen stegvis.',
      'Kärnan (core) måste vara extremt stark för att hålla positionen.',
      'Klingan ska ligga djupt i isen – djupare kant ger mer stöd.',
      'Öva med händerna mot isen i början som säkerhet.',
    ],
    pitfalls: [
      'Att luta sig för fort utan tillräcklig fart och kantstöd.',
      'Att kanten "glider" ut och man hamnar på isen.',
      'Att hålla knäet rakt – ska vara böjt för att komma ned.',
    ],
    relatedIds: ['ina-bauer', 'spread-eagle'],
  },
  {
    id: 'cantilever',
    name: 'Cantilever',
    englishName: 'Cantilever',
    category: 'glidövningar',
    subcategory: 'bredsteg',
    subcategoryLabel: 'Bredstegsövningar',
    difficulty: 'elit',
    description:
      'Cantilever är en två- eller ettfotsrörelse med djupa kanter och böjda knän, kombinerat med en extrem bakre ryggbåge så att överkroppen lutas nära eller parallellt med isytan. Det är en slags liggande spretörn/Ina Bauer med dramatisk ryggbåge. Uppfunnet av Werner Groebli under 1940-talet och moderniserat av bland andra Shoma Uno.',
    tips: [
      'Ryggbågens rörlighet är avgörande – bygg upp med daglig stretching.',
      'Djupa kanter ger stabilitet – pressa klingorna hårt i isen.',
      'Öva med händerna mot isen i inledningsskedet.',
    ],
    pitfalls: [
      'Att inte ha tillräcklig ryggrörlighet – risk för skada om man forcerar.',
      'Att glida ut på en flack kant och tappa kontakten.',
    ],
    relatedIds: ['hydroblading', 'ina-bauer'],
  },

  // ─── HOPP – ÖVNINGSHOPP (nya) ────────────────────────────────────────────────
  {
    id: 'bunny-hop',
    isNew: true,
    name: 'Harr hopp',
    englishName: 'Bunny Hop',
    category: 'hopp',
    subcategory: 'övningshopp',
    subcategoryLabel: 'Övningshopp',
    difficulty: 'nybörjare',
    description:
      'Harrhoppet är ett av de absolut första hoppen en konståkare lär sig. Åkaren lyfter ena foten, hoppar framåt på tåspetsen av den andra foten och landar tillbaka på samma fot – utan rotation. Det tränar känslan för avhopp och landning i en enkel och säker form.',
    tips: [
      'Håll vikten framåt mot tåspetsen vid avhoppet.',
      'Håll ut armarna för balans.',
      'Landa mjukt på tåspetsen och rulla ner på hela klingan.',
    ],
    pitfalls: [
      'Att landa på hälen istället för tåspetsen.',
      'Att tveka i avhoppet och tappa fart.',
    ],
    relatedIds: ['waltz'],
  },
  {
    id: 'mazurka',
    isNew: true,
    name: 'Mazurka',
    englishName: 'Mazurka',
    category: 'hopp',
    subcategory: 'övningshopp',
    subcategoryLabel: 'Övningshopp',
    difficulty: 'nybörjare',
    description:
      'Mazurkan är ett tidigt hoppsteg med en halv rotation. Åkaren tar ett steg framåt, hoppar och lutar sig åt sidan med en halvvarvsrotation och landar bakåt på den andra foten. Det är ett bra övningshopp för att lära sig känslan av rotation.',
    tips: [
      'Ta ett tydligt steg innan hoppet och använd armarna för att starta rotationen.',
      'Tänk på att landa bakåt på hela klingan med mjukt knä.',
    ],
    pitfalls: [
      'Att inte fullfölja den halvrotation som krävs.',
      'Att landa ostadigt på grund av att man hoppar för litet.',
    ],
    relatedIds: ['waltz', 'half-flip'],
  },
  {
    id: 'half-flip',
    isNew: true,
    name: 'Halv Flip',
    englishName: 'Half Flip',
    category: 'hopp',
    subcategory: 'övningshopp',
    subcategoryLabel: 'Övningshopp',
    difficulty: 'nybörjare',
    description:
      'Halv Flip är ett hoppsteg som tar av från en bakre inre kant med tåsparsassistans och utför en halvrotation för att landa framåt på tåspetsen av den motsatta foten. Det är ett viktigt förberedelsehopp inför enkel Flip.',
    tips: [
      'Plantera tåspetsen bestämt och låt den bakre inre kanten göra jobbet.',
      'Tänk framåt vid landningen – du ska landa på tåspetsen med vikten framåt.',
    ],
    pitfalls: [
      'Att rotera för mycket och hamna bakåt istället för framåt.',
      'Att inte ta av från kanten utan hoppa rakt upp från tåspetsen.',
    ],
    relatedIds: ['flip-1', 'mazurka'],
  },
  {
    id: 'ballet-jump',
    isNew: true,
    name: 'Baletthopp',
    englishName: 'Ballet Jump',
    category: 'hopp',
    subcategory: 'övningshopp',
    subcategoryLabel: 'Övningshopp',
    difficulty: 'grundläggande',
    description:
      'Baletthoppet är ett konstnärligt hopp där åkaren hoppar framåt och lyfter fria benet högt bakåt i en arabesqueposition under flygtiden. Det liknar ett trehopp men betonar den artistiska linjens höjd och elegans snarare än rotation.',
    tips: [
      'Lyft fria benet aktivt och håll arabesquen tydlig i luften.',
      'Sträck båda tårna och håll axlarna öppna.',
    ],
    pitfalls: [
      'Att fria benet hänger ned istället för att lyftas i arabesqueline.',
      'Att böja knäna på fria benet i luften.',
    ],
    relatedIds: ['waltz', 'stag-jump'],
  },
  {
    id: 'stag-jump',
    isNew: true,
    name: 'Staghopp',
    englishName: 'Stag Jump',
    category: 'hopp',
    subcategory: 'övningshopp',
    subcategoryLabel: 'Övningshopp',
    difficulty: 'grundläggande',
    description:
      'Staghoppet är ett koreografiskt hopp där åkaren böjer ett knä och lyfter det framåt-uppåt medan det andra benet sträcks bakåt – likt en hjorts hopp. Positionen i luften liknar en sax med ett böjt och ett rakt ben och används som ett artistiskt inslag i program.',
    tips: [
      'Lyft det främre knät skarpt uppåt och sträck det bakre benet rakt ut.',
      'Håll axlarna öppna och armarna i en naturlig position.',
    ],
    pitfalls: [
      'Att inte uppnå en tydlig asymmetrisk benposition i luften.',
      'Att båda benen hänger på samma nivå.',
    ],
    relatedIds: ['ballet-jump', 'split-jump'],
  },
  {
    id: 'butterfly-jump',
    isNew: true,
    name: 'Fjärilshopp',
    englishName: 'Butterfly Jump',
    category: 'hopp',
    subcategory: 'övningshopp',
    subcategoryLabel: 'Övningshopp',
    difficulty: 'grundläggande',
    description:
      'Fjärilshoppet är ett tvåfots-avhoppshopp där åkaren propsar upp i en sidorotation med kroppen nästan horisontell och benen saxar förbi varandra i luften. Det skiljer sig från Fjärilsspinnet (piruett) – detta är ett koreografiskt hopp som ofta används som ingång till en flygande piruett.',
    tips: [
      'Tryck av från båda fötterna jämnt och håll kroppen parallell med isen under flygtiden.',
      'Håll benen sträckta och saxrörelsen symmetrisk.',
    ],
    pitfalls: [
      'Att landa på ett rakt ben utan knäabsorbering.',
      'Att böja benen under flygtiden – de ska vara utsträckta.',
    ],
    relatedIds: ['butterfly', 'flying-camel'],
  },
  {
    id: 'falling-leaf',
    isNew: true,
    name: 'Fallande lövet',
    englishName: 'Falling Leaf',
    category: 'hopp',
    subcategory: 'övningshopp',
    subcategoryLabel: 'Övningshopp',
    difficulty: 'grundläggande',
    description:
      'Fallande lövet är ett enbens-hopp där åkaren lutar kroppen åt sidan under flygtiden – likt ett löv som faller. Det är ett koreografiskt element som används för att visa artistisk kontroll och är inte ett tävlingspoängssatt hopp.',
    tips: [
      'Låt överkroppen luta tydligt åt sidan under flygtiden.',
      'Håll fria benet sträckt och landa med böjt knä.',
    ],
    pitfalls: [
      'Att inte uppnå den tydliga sidlutningen som ger elementet dess karaktär.',
      'Att landa ostadigt på grund av sidlutningen.',
    ],
    relatedIds: ['ballet-jump'],
  },

  // ─── HOPP – KVADRUPELHOPP ────────────────────────────────────────────────────
  {
    id: 'toe-loop-4',
    isNew: true,
    name: 'Kvadrupel Toe Loop',
    englishName: 'Quad Toe Loop',
    category: 'hopp',
    subcategory: 'tåhopp',
    subcategoryLabel: 'Tåhopp',
    difficulty: 'elit',
    description:
      'Kvadrupel Toe Loop kräver fyra fulla rotationer och är det vanligaste kvadrupelhoppet i tävling. Mekaniken är identisk med trippelvarianten men kräver exceptionell rotationshastighet, maximal komprimering från första ögonblicket och perfekt tåsparrsplantering.',
    tips: [
      'Maximera ingångsfarten – varje extra km/h ger tid för det fjärde varvet.',
      'Tåplantningen måste vara explosiv och ge ett tydligt uppåtlyft.',
      'Komprimera kroppen fullständigt direkt vid avhoppet – det fjärde varvet finns inte om kompressionen dröjer.',
    ],
    pitfalls: [
      'Underrotation på det fjärde varvet – det vanligaste felet.',
      'Att kasta överkroppen vid avhoppet och tappa avhoppets riktning.',
    ],
    relatedIds: ['toe-loop-3'],
  },
  {
    id: 'salchow-4',
    isNew: true,
    name: 'Kvadrupel Salchow',
    englishName: 'Quad Salchow',
    category: 'hopp',
    subcategory: 'kanthopp',
    subcategoryLabel: 'Kanthopp',
    difficulty: 'elit',
    description:
      'Kvadrupel Salchow anses vara det mest tillgängliga av kvadrupelhoppet tack vare den kraftfulla bensvepningen som genererar naturlig rotation. Fyra rotationer kräver ändå exceptionell fart, komprimering och teknik.',
    tips: [
      'Bensvepningen måste vara mer explosiv än i trippelvarianten.',
      'Full komprimering direkt vid avhoppet – varje hundradels sekund räknas.',
      'Öva djupa bakre inrekantssvängar för att maximera avhoppskantens kvalitet.',
    ],
    pitfalls: [
      'Att pre-rotera med överkroppen innan avhoppet.',
      'Underrotation på det fjärde varvet.',
    ],
    relatedIds: ['salchow-3'],
  },
  {
    id: 'loop-4',
    isNew: true,
    name: 'Kvadrupel Ögel',
    englishName: 'Quad Loop',
    category: 'hopp',
    subcategory: 'kanthopp',
    subcategoryLabel: 'Kanthopp',
    difficulty: 'elit',
    description:
      'Kvadrupel Ögel är ett av de tekniskt svåraste kvadrupelhoppet – utan tåsparrsassistans måste alla fyra rotationer skapas enbart från kantens kraft. Extremt sällsynt i tävling och kräver exceptionell kantbindning och explosivitet.',
    tips: [
      'Maximal ingångsfart och det djupaste möjliga kantgrepp.',
      'Explosiv kantpressning vid avhoppet utan minsta tåsparrsassistans.',
      'All rotationskraft måste vara lagrad i kanten innan avhoppet.',
    ],
    pitfalls: [
      'Att ta av med tåspetsen under trycket – tekniskt fel som domare markerar.',
      'Kant som planar ut vid hög fart.',
    ],
    relatedIds: ['loop-3'],
  },
  {
    id: 'flip-4',
    isNew: true,
    name: 'Kvadrupel Flip',
    englishName: 'Quad Flip',
    category: 'hopp',
    subcategory: 'tåhopp',
    subcategoryLabel: 'Tåhopp',
    difficulty: 'elit',
    description:
      'Kvadrupel Flip kräver fyra rotationer från bakre inre kant med tåsparrsassistans. Kantkvaliteten är kritisk – ett kantfel (lip/flutz) ger teknisk nedräkning. Mycket få åkare har landat detta hopp rent i tävling.',
    tips: [
      'Håll den inre kanten oavsett fart – ett kantfel är värre än ett fall.',
      'Explosiv tåplantning som genererar maximalt uppåtlyft.',
      'Omedelbar och total komprimering vid avhoppet.',
    ],
    pitfalls: [
      'Kantfel (lip/flutz) – vanligaste felet bland elitåkare.',
      'Underrotation på det fjärde varvet.',
    ],
    relatedIds: ['flip-3'],
  },
  {
    id: 'lutz-4',
    isNew: true,
    name: 'Kvadrupel Lutz',
    englishName: 'Quad Lutz',
    category: 'hopp',
    subcategory: 'tåhopp',
    subcategoryLabel: 'Tåhopp',
    difficulty: 'elit',
    description:
      'Kvadrupel Lutz är ett av konståkningens mest poänggivande hopp och ett signaturtrick för världens bästa åkare. Fyra rotationer mot kurvens naturliga riktning från bakre yttre kant kräver extrem precision, maximal fart och ett kompromisslöst kantgrepp.',
    tips: [
      'Den längsta möjliga ingångskurvan med obruten yttre kant.',
      'Motstå instinkten att rulla till inre kant – flutz är det vanligaste tekniska felet på elitnivå.',
      'Explosiv och precis tåplantning utan att kompromissa med kantens riktning.',
    ],
    pitfalls: [
      'Flutz (kantbyte till inre kant) – det vanligaste felet bland elitåkare världen över.',
      'Underrotation kombinerat med flutz ger maximal poängförlust.',
    ],
    relatedIds: ['lutz-3'],
  },
  {
    id: 'axel-4',
    isNew: true,
    name: 'Kvadrupel Axel',
    englishName: 'Quad Axel',
    category: 'hopp',
    subcategory: 'kanthopp',
    subcategoryLabel: 'Kanthopp',
    difficulty: 'elit',
    description:
      'Kvadrupel Axel är konståkningens ultimata hopp – 4,5 rotationer från framåt yttre kant. Det kräver en extrem kombination av fart, höjd, explosivitet och komprimering som befinner sig i gränsen för vad som är mänskligt möjligt på is. Per 2024 har endast Illia Malinin landat det i tävling.',
    tips: [
      'Allt i tekniken måste vara maximerat: fart, kant, timing, komprimering – utan undantag.',
      'Träna trippel Axel till absolut perfektion innan kvadrupeln ens övervägs.',
      'Arbeta med coach och off-ice trampolin för att bygga upp rotationshastighetens känsla.',
    ],
    pitfalls: [
      'Att försöka hoppet utan solid trippel Axel – risk för allvarlig skada.',
      'Underrotation av något slag är katastrofalt på denna nivå.',
    ],
    relatedIds: ['axel-3'],
  },

  // ─── PIRUETTER – STÅENDE (nya) ───────────────────────────────────────────────
  {
    id: 'y-spin',
    isNew: true,
    name: 'Y-piruett',
    englishName: 'Y-Spin',
    category: 'piruetter',
    subcategory: 'stående-piruett',
    subcategoryLabel: 'Stående piruetter',
    difficulty: 'avancerad',
    description:
      'Y-piruetten är en ståpiruett-variant där åkaren lyfter fria benet åt sidan och upp ovanför huvudhöjd, och griper om klingan eller stöveln för att hålla benets vertikala Y-position. Kräver extrem höftflexibilitet och en stabil piruettaxel trots den assymetriska belastningen.',
    tips: [
      'Bygg upp piruettens hastighet innan du lyfter benet – lägg inte Y-positionen i ingången.',
      'Grip om klingan, inte bara stöveln, för att nå maximal höjd.',
      'Håll piruettbenets knä rakt och vikten centrerad på klingesmitten.',
    ],
    pitfalls: [
      'Att tappa piruettaxeln när benet lyfts – den assymetriska tyngden drar kroppen åt sidan.',
      'Otillräcklig höftflexibilitet som ger en låg Y-position.',
      'Att gripa för nära ankeln och skapa ett böjt knä istället för en rak linje.',
    ],
    relatedIds: ['biellmann-spin', 'layback-spin'],
  },
  {
    id: 'a-frame-spin',
    isNew: true,
    name: 'A-frame-piruett',
    englishName: 'A-Frame Spin',
    category: 'piruetter',
    subcategory: 'stående-piruett',
    subcategoryLabel: 'Stående piruetter',
    difficulty: 'medel',
    description:
      'A-frame-piruetten utförs med båda armarna utsträckta horisontellt åt varsitt håll – som bokstaven A eller ett kors. De utsträckta armarna saktar ner rotationen men skapar en distinkt, bred siluett. Övergången till en snabbare position genom att dra in armarna är ett effektfullt stilistiskt grepp.',
    tips: [
      'Håll båda armarna exakt i samma höjd och nivå.',
      'Behåll en stark upprätt hållning trots armbelastningen.',
      'Planera position-övergången från A-frame till snabbare position – den ger en dramatisk accelerationseffekt.',
    ],
    pitfalls: [
      'Att ena armen sjunker lägre än den andra.',
      'Att luta överkroppen framåt eller bakåt när armarna är utsträckta.',
    ],
    relatedIds: ['uppright-basic', 'scratch-spin'],
  },
  {
    id: 'haircutter-spin',
    isNew: true,
    name: 'Haircutter-piruett',
    englishName: 'Haircutter Spin',
    category: 'piruetter',
    subcategory: 'stående-piruett',
    subcategoryLabel: 'Stående piruetter',
    difficulty: 'medel',
    description:
      'Haircutter-piruetten är en stilistisk ståpiruett-variant där åkaren lyfter en arm uppåt och böjer den i armbågen så att handen sänks ned över huvudet – som om man klipper håret. Positionen används som ett koreografiskt inslag och kräver precision i armens placering.',
    tips: [
      'Håll armbågen högt och handen i en naturlig böjd position över huvudet.',
      'Behåll balansen trots att armens placering ändrar kroppens tyngdpunkt lätt.',
    ],
    pitfalls: [
      'Att armen sjunker ned för tidigt ur positionen.',
      'Att den böjda armbågens förskjutning av tyngdpunkten stör piruettaxeln.',
    ],
    relatedIds: ['uppright-basic', 'scratch-spin'],
  },

  // ─── PIRUETTER – SITTPIRUETTER (nya) ─────────────────────────────────────────
  {
    id: 'svamp-spin',
    isNew: true,
    name: 'Svamppiruett',
    englishName: 'Cannonball Spin',
    category: 'piruetter',
    subcategory: 'sittpiruett',
    subcategoryLabel: 'Sittpiruetter',
    difficulty: 'avancerad',
    description:
      'Svamppiruetten startar från sittpiruett och åkaren drar fria benet hårt mot bröstet och viker överkroppen framåt så att hela kroppen komprimeras till en tajt boll. Denna extrema komprimering skapar en dramatisk ökning av rotationshastigheten.',
    tips: [
      'Starta från en solid sittpiruett med god hastighet – komprimeringseffekten förutsätter fart.',
      'Dra knät skarp in mot bröstet i ett snabbt drag.',
      'Håll överkroppen böjd över knät under hela bollpositionen.',
    ],
    pitfalls: [
      'Att inte dra knät tillräckligt nära och tappa kompressionseffekten.',
      'Att tappa balansen vid övergången till bollpositionen.',
    ],
    relatedIds: ['sit-spin', 'cannonball-spin'],
  },
  {
    id: 'shoot-the-duck-spin',
    isNew: true,
    name: 'Räkan',
    englishName: 'Shoot the Duck Spin',
    category: 'piruetter',
    subcategory: 'sittpiruett',
    subcategoryLabel: 'Sittpiruetter',
    difficulty: 'medel',
    description:
      'Räkan är en sittpiruett-variant där fria benet sträcks rakt framåt nära isen medan åkaren sitter djupt på det bärande benets böjda knä. Positionen kräver starka quadricepsmuskler, god ankelstabilitet och balans i ett ovanligt lågt läge.',
    tips: [
      'Det sträckta benet ska hållas lågt och rakt, nära isens yta.',
      'Håll det bärande knät djupt böjt under hela piruetten.',
      'Sträck tårna på det fria benet för en ren linje.',
    ],
    pitfalls: [
      'Att fria benet stiger uppåt och förvandlas till en vanlig sittpiruett.',
      'Att det bärande knät reser sig för tidigt.',
      'Att tappa balansen i den djupa squatpositionen.',
    ],
    relatedIds: ['sit-spin', 'shoot-the-duck'],
  },

  // ─── PIRUETTER – KAMELPIRUETTER (nya) ────────────────────────────────────────
  {
    id: 'back-camel-spin',
    isNew: true,
    name: 'Bakåt kamelpiruett',
    englishName: 'Back Camel Spin',
    category: 'piruetter',
    subcategory: 'kamelpiruett',
    subcategoryLabel: 'Kamelpiruetter',
    difficulty: 'avancerad',
    description:
      'Bakre kamelpiruett utförs på det icke-dominanta benet (höger fot för moturs-roterande åkare) med fria benet sträckt bakåt i arabesque. Det är betydligt svårare än den vanliga kamelpiruetten då det svagare benet kräver mer aktiv balansering och kantbindning.',
    tips: [
      'Öva bakre ståpiruett (back spin) grundligt innan du lägger till kamelpositionen.',
      'Ta av från en stark bakre yttre kant – ingångskurvan är avgörande.',
      'Lyft fria benet aktivt till höfthöjd direkt vid ingången.',
    ],
    pitfalls: [
      'Att fria benet sjunker under höfthöjd och ger en låg kamelposition.',
      'Att piruetta på tåspetsen istället för klingesmitten.',
      'Att tappa balansen direkt i ingången på det icke-dominanta benet.',
    ],
    relatedIds: ['camel-spin', 'back-spin'],
  },
  {
    id: 'catch-foot-camel',
    isNew: true,
    name: 'Catch Foot-kamelpiruett',
    englishName: 'Catch Foot Camel Spin',
    category: 'piruetter',
    subcategory: 'kamelpiruett',
    subcategoryLabel: 'Kamelpiruetter',
    difficulty: 'avancerad',
    description:
      'Catch Foot-kamelpiruetten börjar i vanlig kamelpiruett och åkaren sträcker sig bakåt för att gripa om fria fotens klinga eller stövel med en eller båda händerna. Greppet håller fria benet i en förlängd arabesque medan kroppen behåller kamelns T-position.',
    tips: [
      'Bygg upp god hastighet i kamelpiruetten innan du sträcker dig efter foten.',
      'Grip om klingan snarare än stöveln för att nå längre och hålla benet högt.',
      'Håll höfterna jämna och axlarna i linje under greppet.',
    ],
    pitfalls: [
      'Att piruetten saktar ned drastiskt när man sträcker sig efter foten.',
      'Att tappa kamelns T-position när foten grips.',
      'Att böja knäna för att nå foten istället för att sträcka ryggen.',
    ],
    relatedIds: ['camel-spin', 'layover-camel'],
  },
  {
    id: 'pearl-spin',
    isNew: true,
    name: 'Pearl-piruett',
    englishName: 'Pearl Spin',
    category: 'piruetter',
    subcategory: 'kamelpiruett',
    subcategoryLabel: 'Kamelpiruetter',
    difficulty: 'avancerad',
    description:
      'Pearl-piruetten kombinerar element från liggande bakåtpiruett och kamelpiruett. Åkaren lyfter fria benet högt framåt medan överkroppen böjs bakåt och åt sidan, vilket skapar en elegant, öppen siluett. Kräver både rygg- och höftflexibilitet samt stabil piruettaxel.',
    tips: [
      'Bygg upp piruettens hastighet i upprätt position innan du öppnar kroppen.',
      'Lyft fria benet aktivt framåt och böj ryggen bakåt i ett koordinerat rörelsepar.',
      'Håll höfterna framåtvända trots kroppens öppning.',
    ],
    pitfalls: [
      'Att fria benet sjunker ned under positionen.',
      'Otillräcklig ryggflexibilitet som ger en svag bakåtbåge.',
      'Att tappa piruettaxeln när kroppen öppnas.',
    ],
    relatedIds: ['layback-spin', 'camel-spin'],
  },

  // ─── PIRUETTER – FLYGANDE (nya) ──────────────────────────────────────────────
  {
    id: 'flying-upright-spin',
    isNew: true,
    name: 'Flygande ståpiruett',
    englishName: 'Flying Upright Spin',
    category: 'piruetter',
    subcategory: 'flygande-piruett',
    subcategoryLabel: 'Flygande piruetter',
    difficulty: 'avancerad',
    description:
      'Flygande ståpiruett inleds med ett litet hopp från framåt ingång där benen samlas i luften, och landningen sker direkt in i en upprätt piruett. Det är det renaste och mest eleganta av de flygande piruetterna och kräver en precis och kontrollerad landning.',
    tips: [
      'Hoppet ska vara uppåt och lätt framåt – inte lodrätt.',
      'Dra in armarna omedelbart vid landningen för att starta piruetten.',
      'Landningsbenet absorberar med ett lätt knäböj.',
    ],
    pitfalls: [
      'Att landa för hårt och döda piruettmomentummet.',
      'Att inte initiera piruetten direkt vid landningen utan vänta.',
    ],
    relatedIds: ['uppright-basic', 'flying-camel'],
  },

  // ─── PIRUETTER – KOMBINATIONER (nya) ─────────────────────────────────────────
  {
    id: 'sit-upright-combo',
    isNew: true,
    name: 'Kombinerad sitt- och ståpiruett',
    englishName: 'Sit-Upright Combination Spin',
    category: 'piruetter',
    subcategory: 'kombinationspiruett',
    subcategoryLabel: 'Kombinationspiruetter',
    difficulty: 'avancerad',
    description:
      'Kombinationspiruetten inkluderar sittpiruett- och ståpiruettpositioner i en enda kontinuerlig rotation. Övergången från djup sittposition till upprätt position accelererar piruetten och ger ett dynamiskt moment i programmet.',
    tips: [
      'Tajma övergången från sitt till upprätt för att skapa en tydlig accelerationseffekt.',
      'Håll piruettaxeln fast genom hela positionsbytet.',
      'Djupare sittposition i ingången ger mer dramatisk acceleration vid resningen.',
    ],
    pitfalls: [
      'Att tappa hastigheten i övergångsmomentet.',
      'Att stepa bort från piruettcentrumet när man reser sig från sittposition.',
    ],
    relatedIds: ['sit-spin', 'uppright-basic', 'combination-spin'],
  },
  {
    id: 'camel-sit-combo',
    isNew: true,
    name: 'Kombinerad kamel- och sittpiruett',
    englishName: 'Camel-Sit Combination Spin',
    category: 'piruetter',
    subcategory: 'kombinationspiruett',
    subcategoryLabel: 'Kombinationspiruetter',
    difficulty: 'avancerad',
    description:
      'En av de klassiska kombinationspiruetterna: åkaren börjar i kamelposition och övergår till sittpiruett utan att bryta rotationen. Övergången sker genom att böja piruettbenets knä och föra fria benet framåt. Kräver kontroll och flyt i positionsbyte.',
    tips: [
      'Övergången ska vara mjuk och flödande – inte ett ryckt positionsbyte.',
      'Ha tillräcklig hastighet i kamelpiruetten för att bära igenom sittpiruetten.',
      'Fria benet ska aktivt föras framåt till sittposition, inte falla ned.',
    ],
    pitfalls: [
      'Att tappa hastigheten och piruettaxeln i övergångsmomentet.',
      'Att sittpiruettens djup är otillräckligt efter övergången.',
    ],
    relatedIds: ['camel-spin', 'sit-spin', 'combination-spin'],
  },

  // ─── SVÄNGAR – ETTFOTSSVÄNGAR (nya) ──────────────────────────────────────────
  {
    id: 'inside-three-turn',
    isNew: true,
    name: 'Innerskärstrea',
    englishName: 'Inside Three Turn',
    category: 'svängar',
    subcategory: 'ettfotssvängar',
    subcategoryLabel: 'Ettfotssvängar',
    difficulty: 'nybörjare',
    description:
      'Innerskärstrea är en ettfotsväng som byter riktning och kant på inre kanten. Åkaren glider på en inre kant (framåt eller bakåt), roterar och lämnar svängen på den inre kanten i motsatt riktning. Isspåret liknar siffran 3. Det är den inre varianten av tresvängen och lika grundläggande.',
    tips: [
      'Håll den inre kanten tydlig under hela ingången innan svängen.',
      'Håll fria foten nära piruettfoten under svängen.',
      'Låt kroppens naturliga rotation guida svängen – tvinga den inte.',
    ],
    pitfalls: [
      'Att rulla ut till yttre kanten och göra en ytterskärstrea istället.',
      'Att sätta ned fria foten direkt efter svängen.',
      'Att kasta axlarna för att tvinga fram svängen.',
    ],
    relatedIds: ['three-turn', 'mohawk'],
  },

  // ─── SVÄNGAR – TVÅFOTSSVÄNGAR (nya) ──────────────────────────────────────────
  {
    id: 'outside-mohawk',
    isNew: true,
    name: 'Yttermohawk',
    englishName: 'Outside Mohawk',
    category: 'svängar',
    subcategory: 'tvåfotssvängar',
    subcategoryLabel: 'Tvåfotssvängar',
    difficulty: 'nybörjare',
    description:
      'Yttermohawken är en tvåfotsöverföring som byter riktning på yttre kanter – framåt yttre till bakåt yttre. Den öppna höftpositionen skapar ett bredare, mer öppet steg än innermohawken. Används ofta som ingångssteg före Axelhopp och i isdansstegsekvenser.',
    tips: [
      'Öppna höfterna tydligt när den nya foten placeras.',
      'Viktsöverföringen ska vara mjuk och kontrollerad utan paus.',
      'Håll fria benet kontrollerat efter steget.',
    ],
    pitfalls: [
      'Att placera foten i fel vinkel och snubbla.',
      'Att öppna axlarna för kraftigt och tappa balansen.',
    ],
    relatedIds: ['mohawk', 'inside-mohawk', 'three-turn'],
  },
  {
    id: 'inside-mohawk',
    isNew: true,
    name: 'Innermohawk',
    englishName: 'Inside Mohawk',
    category: 'svängar',
    subcategory: 'tvåfotssvängar',
    subcategoryLabel: 'Tvåfotssvängar',
    difficulty: 'grundläggande',
    description:
      'Innermohawken är en tvåfotsöverföring på inre kanter – framåt inre till bakåt inre. Den stängda höftpositionen gör den något mer tekniskt krävande än yttermohawken. Det är ett fundamentalt steg som används i ingångar till hopp och piruetter.',
    tips: [
      'Håll höfterna relativt stängda – öppna dem inte som i yttermohawken.',
      'Placera den nya foten i häl-mot-tå eller parallell linjering.',
      'Överflytta vikten fullständigt innan du skjuter ifrån.',
    ],
    pitfalls: [
      'Att höfterna öppnas som i en yttermohawk och ändrar kanttypen.',
      'Att placera foten med ett glapp istället för nära.',
    ],
    relatedIds: ['mohawk', 'outside-mohawk', 'choctaw'],
  },
  {
    id: 'outside-choctaw',
    isNew: true,
    name: 'Ytterchoctaw',
    englishName: 'Outside Choctaw',
    category: 'svängar',
    subcategory: 'tvåfotssvängar',
    subcategoryLabel: 'Tvåfotssvängar',
    difficulty: 'medel',
    description:
      'Ytterchoctawet är ett tvåfotssteg som byter både riktning och kanttyp – från framåt yttre till bakåt inre kant (eller vice versa). Det klassificeras som ett "svårt steg" i ISUs stegserieprotokoll. Det aktiva kantbytet under steget kräver muskulär kontroll och kant-känslighet.',
    tips: [
      'Känn det aktiva kantbytet när vikten övergår – du byter bokstavligen från yttre till inre kant.',
      'Håll fria foten nära isen under steget.',
      'Öka farten gradvis när grunden är säkert inlärd.',
    ],
    pitfalls: [
      'Att göra en yttermohawk istället genom att inte byta kant.',
      'Att placera foten i fel vinkel och tappa flödet.',
    ],
    relatedIds: ['choctaw', 'inside-choctaw', 'mohawk'],
  },
  {
    id: 'inside-choctaw',
    isNew: true,
    name: 'Innerchoctaw',
    englishName: 'Inside Choctaw',
    category: 'svängar',
    subcategory: 'tvåfotssvängar',
    subcategoryLabel: 'Tvåfotssvängar',
    difficulty: 'medel',
    description:
      'Innerchoctawet byter riktning och kanttyp – från framåt inre till bakåt yttre kant. Likt alla choctaw-steg räknas det som ett svårt steg i ISU och används flitigt i isdansprogram och singlestegsekvenser. Kantbytet kräver aktiv ankelanpassning.',
    tips: [
      'Rulla aktivt från inre till yttre kant när foten sätts ned.',
      'Håll båda fötterna kort på isen under steget – snabb viktsöverföring.',
      'Fria benet spårar nära isen efter steget.',
    ],
    pitfalls: [
      'Att hålla samma kanttyp och göra en innermohawk istället.',
      'Dålig fotplaceringsvinkel som ger instabilitet.',
    ],
    relatedIds: ['choctaw', 'outside-choctaw', 'mohawk'],
  },

  // ─── STEG & ÖVERGÅNGAR ───────────────────────────────────────────────────────
  {
    id: 'chasse',
    isNew: true,
    name: 'Chassé',
    englishName: 'Chassé',
    category: 'steg',
    subcategory: 'grundsteg',
    subcategoryLabel: 'Grundsteg',
    difficulty: 'nybörjare',
    description:
      'Chassén är ett trestegsglidande rörelsemönster där den ena foten glider upp mot den andra och sedan tar den andra foten ett steg vidare – "chase steps". Det är ett av de mest grundläggande länkstegen i konståkning och isdans, och används konstant som övergångssteg mellan element.',
    tips: [
      'Håll stegen lätta och jämna – bevara den glidande kvaliteten.',
      'Låt glidfoten faktiskt nå den andra foten innan du stegar vidare.',
      'Behåll god hållning genom chassé-sekvenser.',
    ],
    pitfalls: [
      'Tungt fotsättande som bryter glidkvaliteten.',
      'Ojämn rytm mellan de tre slagen.',
    ],
    relatedIds: ['progressive', 'crossovers'],
  },
  {
    id: 'crossovers',
    isNew: true,
    name: 'Kryssteg',
    englishName: 'Crossovers',
    category: 'steg',
    subcategory: 'grundsteg',
    subcategoryLabel: 'Grundsteg',
    difficulty: 'nybörjare',
    description:
      'Krysstegen är det fundamentala skridskortsteget för att ta kurvor med fart. Den yttre foten korsar framför den inre foten, som sedan tar ett steg åt sidan. Detta skapar en kontinuerlig looprörelsé runt en cirkel och är bland de första färdigheterna som lärs ut till nybörjare.',
    tips: [
      'Tryck starkt från den inre kanten av den korsande foten.',
      'Håll det korsade benet lågt nära isen.',
      'Bibehåll en konsekvent lutning in mot cirkeln.',
    ],
    pitfalls: [
      'Att inte korsa tillräckligt framför det andra benet.',
      'Att skjuta från tåspetsen istället för klingkanten.',
      'Att luta för hårt in i cirkeln och tappa balansen.',
    ],
    relatedIds: ['back-crossovers', 'chasse'],
  },
  {
    id: 'back-crossovers',
    isNew: true,
    name: 'Bakåt kryssteg',
    englishName: 'Back Crossovers',
    category: 'steg',
    subcategory: 'grundsteg',
    subcategoryLabel: 'Grundsteg',
    difficulty: 'grundläggande',
    description:
      'Bakåt krysstegen är den omvända varianten av krysstegen, utförd medan man åker bakåt runt en cirkel. Den inre foten korsar bakom den yttre foten och skapar samma looprörelsé men i omvänd riktning. De är avgörande för fartgenerering inför bakre hopp och piruetter.',
    tips: [
      'Den korsande foten går bakom (inte framför) den yttre foten.',
      'Tryck kraftfullt från den inre kanten och titta över axeln i rörelseriktningen.',
      'Håll cirkelns kurva konsekvent.',
    ],
    pitfalls: [
      'Att korsa framför istället för bakom (blir ett framåt kryssteg).',
      'Att skrapa med tåspetsen istället för att skjuta med klingen.',
    ],
    relatedIds: ['crossovers', 'three-turn'],
  },
  {
    id: 'cross-rolls',
    isNew: true,
    name: 'Crossrolls',
    englishName: 'Cross Rolls',
    category: 'steg',
    subcategory: 'grundsteg',
    subcategoryLabel: 'Grundsteg',
    difficulty: 'grundläggande',
    description:
      'Crossrolls är en sekvens av svepande steg där varje fot korsar från ena sidan till den andra på alternerande yttre kanter. Till skillnad från krysstegen som kurvar i en cirkel, följer crossrolls en rak eller svagt kurvad bana med en rytmisk svajande rörelse. Vanliga i koreografiska sekvenser.',
    tips: [
      'Varje steg rullar från en yttre kant till den andra med en svängande viktöverföring.',
      'Håll kroppen svajande rytmiskt med varje steg.',
      'Håll ett långt, flödande steg.',
    ],
    pitfalls: [
      'Att stega platt istället för upp på yttre kanten.',
      'Att tappa den kontinuerliga rullande kvaliteten.',
    ],
    relatedIds: ['crossovers', 'swing-roll'],
  },
  {
    id: 'progressive',
    isNew: true,
    name: 'Progressive',
    englishName: 'Progressive',
    category: 'steg',
    subcategory: 'grundsteg',
    subcategoryLabel: 'Grundsteg',
    difficulty: 'nybörjare',
    description:
      'Progressive (även kallad "run") är en trestegsstegsekvens: steg framåt, för den andra foten bredvid, skjut sedan framåt igen. Det genererar fart rakt framåt och är ett av de vanligaste länkstegen i program. Kallas ibland "tresteget".',
    tips: [
      'Det andra steget vidrör knappt isen innan skjutet – håll momentumet.',
      'Behåll framåtrörelses momentum mellan varje steg.',
      'Håll överkroppen centrerad över glidfoten.',
    ],
    pitfalls: [
      'Att det andra steget är för tungt och dödar farten.',
      'Att överdriva skjutets riktning och tappa linjen.',
    ],
    relatedIds: ['chasse', 'swing-roll'],
  },
  {
    id: 'toe-step',
    isNew: true,
    name: 'Tåsteg',
    englishName: 'Toe Steps',
    category: 'steg',
    subcategory: 'grundsteg',
    subcategoryLabel: 'Grundsteg',
    difficulty: 'grundläggande',
    description:
      'Tåsteg innebär att man placerar tåspetsen av ena foten mot isen och skjuter eller pivoterar från den. De skapar en staccato, rytmisk karaktär och används i stegsekvenser för koreografisk betoning. Tåspetsen används som en momentan kontaktpunkt, inte för hopp.',
    tips: [
      'Tåspetsens kontakt med isen ska vara kort och lätt – sjunk inte in i den.',
      'Använd tåsteget för att skapa en tydlig rytmisk betoning i stegsekvensen.',
    ],
    pitfalls: [
      'Att sjunka tungt ned på tåspetsen och bryta flödet.',
      'Att tåsteg bryter sekvensens flöde istället för att betona den.',
    ],
    relatedIds: ['progressive', 'chasse'],
  },
  {
    id: 'slalom',
    isNew: true,
    name: 'Slalom',
    englishName: 'Slalom',
    category: 'steg',
    subcategory: 'grundsteg',
    subcategoryLabel: 'Grundsteg',
    difficulty: 'grundläggande',
    description:
      'Slalom på skridskor innebär att åka i ett slingrande, ormliknande mönster på två fötter genom att förflytta vikten från kant till kant medan kroppen och fötterna är framåtvända. Det tränar kantkänslighet och kroppskontroll och används både som träningsövning och i koreografi.',
    tips: [
      'Förflytta vikten mjukt från sida till sida.',
      'Håll överkroppen relativt still medan underkroppen skapar slalommönstret.',
      'Hitta en jämn rytm i kantväxlingarna.',
    ],
    pitfalls: [
      'Att använda armarna och överkroppen för mycket för att styra.',
      'Stela anklar som förhindrar sanna kantbyten.',
    ],
    relatedIds: ['crossovers', 'power-pulls'],
  },
  {
    id: 'power-pulls',
    isNew: true,
    name: 'Power Pulls',
    englishName: 'Power Pulls',
    category: 'steg',
    subcategory: 'grundsteg',
    subcategoryLabel: 'Grundsteg',
    difficulty: 'medel',
    description:
      'Power Pulls utförs på ett ben – åkaren glider framåt eller bakåt medan man upprepade gånger drar klingan från yttre till inre kant (eller vice versa) med hjälp av höft- och knärörelser. De genererar fart och tränar djup kantkontroll. Det karakteristiska skärljudet från klingan ger dem deras namn.',
    tips: [
      'Driv varje drag från höft och knä – inte bara ankeln.',
      'Maximera djupet på varje kant innan du drar tvärs över.',
      'Håll en jämn rytm i dragsekvensen.',
    ],
    pitfalls: [
      'Att dra enbart med ankeln – höft och knä måste vara drivande.',
      'Grunda kanter som ger liten kraftverkan.',
    ],
    relatedIds: ['crossovers', 'slalom'],
  },
  {
    id: 'swing-roll',
    isNew: true,
    name: 'Swing Roll',
    englishName: 'Swing Roll',
    category: 'steg',
    subcategory: 'grundsteg',
    subcategoryLabel: 'Grundsteg',
    difficulty: 'grundläggande',
    description:
      'Swing Roll är ett glidsteg på ett ben där fria benet svingar förbi glidfoten i en graciös, pendelliknande båge. Det betonar flöde, extension och musikalisk uttrycksfullhet. Swing Rolls alternerar fötter i en sekvens av svängande, räckande steg.',
    tips: [
      'Fria benets sving ska vara fullt och utsträckt.',
      'Sträck tårna under hela svingen.',
      'Håll gliden tillräckligt lång för att känna flödet.',
    ],
    pitfalls: [
      'Korta, hackiga sving utan utsträckning.',
      'Att stega ned för tidigt innan svingen nått sin topp.',
    ],
    relatedIds: ['progressive', 'cross-rolls'],
  },

  // ─── STEG – AVANCERADE ───────────────────────────────────────────────────────
  {
    id: 'cluster',
    isNew: true,
    name: 'Cluster',
    englishName: 'Cluster',
    category: 'steg',
    subcategory: 'avancerade steg',
    subcategoryLabel: 'Avancerade steg',
    difficulty: 'avancerad',
    description:
      'Ett cluster är en snabb sekvens av svängar, steg och kantbyten packade tätt ihop i snabb följd. Clusters förekommer i stegsekvenser som ett utbrott av teknisk komplexitet – ofta en kombination av flera bracket-, counter-, rocker- eller loop-svängar i ett fåtal takter. Kräver snabba reflexer och precis kantkontroll.',
    tips: [
      'Öva varje komponentväng separat, sedan länka dem långsamt innan du ökar farten.',
      'Slappna av i överkroppen för att tillåta de snabba rörelserna i underkroppen.',
    ],
    pitfalls: [
      'Att rusa och tappa kantkvaliteten i de enskilda svängarna.',
      'En spänd överkropp som stör det snabba footwork.',
    ],
    relatedIds: ['bracket', 'counter', 'rocker', 'twizzle'],
  },
  {
    id: 'toe-twizzle',
    isNew: true,
    name: 'Toe Twizzle',
    englishName: 'Toe Twizzle',
    category: 'steg',
    subcategory: 'avancerade steg',
    subcategoryLabel: 'Avancerade steg',
    difficulty: 'avancerad',
    description:
      'Toe Twizzle är en resande rotationssväng där åkaren planterar tåspetsen mot isen och pivoterar en snabb rotation runt den som pivotpunkt, medan resans rörelse fortsätter. Till skillnad från en vanlig twizzle på klingesmitten ger tåspetsen ett skarpt, staccatoartat inslag i rotationen.',
    tips: [
      'Tåspetsen planteras kortvarigt och fungerar som pivotpunkt – inte en stopp.',
      'Kroppen roterar runt den snabbt och lämnar omedelbart klingan.',
    ],
    pitfalls: [
      'Att plantera tåspetsen för tungt och stoppa resans rörelse.',
      'Att inte fullfölja det fulla varvet innan man lämnar tåspetsen.',
    ],
    relatedIds: ['twizzle', 'cluster'],
  },
  {
    id: 'bracket-twizzle',
    isNew: true,
    name: 'Bracket Twizzle',
    englishName: 'Bracket Twizzle',
    category: 'steg',
    subcategory: 'avancerade steg',
    subcategoryLabel: 'Avancerade steg',
    difficulty: 'avancerad',
    description:
      'Bracket Twizzle kombinerar bracket-svängens motrotationsmekanik med twizzlens resande flerrotalitionskaraktär. Åkaren roterar mot kurvans ytterkant under flera varv medan rörelsen fortsätter tvärs över isen – det kräver starkt kantmotstånd under hela rotationen.',
    tips: [
      'Bibehåll motrotationsmotståndet under alla varv i twizzeln.',
      'Håll resans rörelse tvärs isen – twizzeln ska inte stanna och bli en piruett.',
    ],
    pitfalls: [
      'Att förlora bracket-mekaniken och göra en vanlig twizzle.',
      'Att resan stannar upp under rotationerna.',
    ],
    relatedIds: ['bracket', 'twizzle', 'cluster'],
  },
  {
    id: 'counter-twizzle',
    isNew: true,
    name: 'Counter Twizzle',
    englishName: 'Counter Twizzle',
    category: 'steg',
    subcategory: 'avancerade steg',
    subcategoryLabel: 'Avancerade steg',
    difficulty: 'avancerad',
    description:
      'Counter Twizzle är en resande flerrotalitionssväng med counter-svängens mekanik – riktningsbyte utan kantbyte, med rotation mot kurvans ytterkant. Det är bland de svåraste twizzle-varianterna och kräver extremt starka kanter under flerrotalitioner medan kroppen förflyttar sig.',
    tips: [
      'Bemästra den enskilda counter-svängen fullständigt innan du försöker med fler rotationer.',
      'Kanten måste förbli konstant under alla rotationer.',
    ],
    pitfalls: [
      'Att kanten brister under rotationerna.',
      'Otillräcklig rörelse tvärs isen – den ska resa, inte spinna.',
    ],
    relatedIds: ['counter', 'twizzle', 'cluster'],
  },
  {
    id: 'rocker-twizzle',
    isNew: true,
    name: 'Rocker Twizzle',
    englishName: 'Rocker Twizzle',
    category: 'steg',
    subcategory: 'avancerade steg',
    subcategoryLabel: 'Avancerade steg',
    difficulty: 'avancerad',
    description:
      'Rocker Twizzle är en resande flerrotalitionssväng med rocker-svängens karaktär – gungstolsliknande riktningsbyte utan kantbyte, med rotation med kurvans riktning. Kombinationen av reserörelse och multiple rotationer med rocker-mekanik gör detta till ett av de mer avancerade stegsekvens-elementen.',
    tips: [
      'Känn gungrörelsens kvalitet i varje rotation.',
      'Håll klingan på sin mittpunkt under resan.',
    ],
    pitfalls: [
      'Att förlora rocker-mekaniken och göra en vanlig twizzle.',
      'Resan stannar upp under rotationerna.',
    ],
    relatedIds: ['rocker', 'twizzle', 'cluster'],
  },

  // ─── GLIDÖVNINGAR – SPIRALER (nya) ───────────────────────────────────────────
  {
    id: 'y-spiral',
    isNew: true,
    name: 'Y-spiral',
    englishName: 'Y-Spiral',
    category: 'glidövningar',
    subcategory: 'spiral',
    subcategoryLabel: 'Spiraler',
    difficulty: 'avancerad',
    description:
      'Y-spiralen är ett glidmoment där åkaren lyfter fria benet åt sidan och upp ovanför huvudhöjd, och griper om klingan för att hålla benets vertikala Y-position under gliden. Kräver extrem lateral höftflexibilitet och exceptionell balans på glidfoten medan kroppen hålls i den assymetriska Y-positionen.',
    tips: [
      'Bygg upp positionen från en vanlig spiral och lyft gradvis benet åt sidan.',
      'Grip om klingan, inte bara stöveln, för maximal höjd.',
      'Håll glidsidans kant djup och stabil – Y-positionen förskjuter tyngdpunkten.',
    ],
    pitfalls: [
      'Otillräcklig lateral höftflexibilitet som ger en låg Y-position.',
      'Att tappa glidfotens kant under lyftfasen.',
    ],
    relatedIds: ['spiral', 'biellmann-spiral'],
  },
  {
    id: 'catch-foot-spiral',
    isNew: true,
    name: 'Catch Foot-spiral',
    englishName: 'Catch Foot Spiral',
    category: 'glidövningar',
    subcategory: 'spiral',
    subcategoryLabel: 'Spiraler',
    difficulty: 'avancerad',
    description:
      'Catch Foot-spiralen utförs med fria foten hållen av en eller båda händerna under gliden. Foten kan sträckas åt sidan, bakåt eller uppåt beroende på greppets vinkel. Det kräver flexibilitet, balans och styrka för att bibehålla positionen under en hel glidfas.',
    tips: [
      'Nå bakåt efter foten medan du redan är i arabesqueposition.',
      'Grip om klingan (inte bara stöveln) för ett stadigt grepp.',
      'Håll glidfotens kant jämn under hela grepp-fasen.',
    ],
    pitfalls: [
      'Positionen kollapsar när balansen förskjuts vid greppet.',
      'Att böja knäna för att nå foten istället för att sträcka ryggen.',
    ],
    relatedIds: ['spiral', 'biellmann-spiral'],
  },
  {
    id: 'penche-spiral',
    isNew: true,
    name: 'Penché-spiral',
    englishName: 'Penché Spiral',
    category: 'glidövningar',
    subcategory: 'spiral',
    subcategoryLabel: 'Spiraler',
    difficulty: 'avancerad',
    description:
      'Penché-spiralen (från franskans "incliner" – luta) innebär att överkroppen sänks djupt framåt och nedåt mot isen medan fria benet stiger upp bakåt – mot en vertikal spretposition. Ju mer torson sänks, desto högre stiger benet. Kräver extrem hamstringflexibilitet och god kant under glidmomentets tryck.',
    tips: [
      'Skjut aktivt upp fria benet högre allt eftersom torson sänks.',
      'Håll glidfotens kant fast under hela rörelsen.',
      'Bygg upp positionen gradvis från en vanlig arabesque-spiral.',
    ],
    pitfalls: [
      'Att tappa glidfotens kant när tyngden förflyttas framåt.',
      'Otillräcklig flexibilitet som begränsar hur djupt torson kan sänkas.',
    ],
    relatedIds: ['spiral', 'charlotte-spiral'],
  },

  // ─── GLIDÖVNINGAR – ÖVRIGA (nya) ─────────────────────────────────────────────
  {
    id: 'shoot-the-duck',
    isNew: true,
    name: 'Shoot the Duck',
    englishName: 'Shoot the Duck',
    category: 'glidövningar',
    subcategory: 'bredsteg',
    subcategoryLabel: 'Bredstegsövningar',
    difficulty: 'grundläggande',
    description:
      'Shoot the Duck är ett glidmoment där åkaren sätter sig djupt på ett böjt ben medan det andra benet sträcks rakt framåt nära isen. Till skillnad från sittpiruettsvarianten reser åkaren sig tvärs isen i denna position. Kräver starka quadricepsmuskler och god ankelstabilitet.',
    tips: [
      'Sänk dig ned i squaten kontrollerat och sträck fria benet framåt lågt och rakt.',
      'Håll glidfotens hela klinga i kontakt med isen.',
    ],
    pitfalls: [
      'Att glidfotens häl lyfts från isen.',
      'Att fria benet böjs eller lyfts för högt.',
    ],
    relatedIds: ['shoot-the-duck-spin', 'lunge'],
  },
  {
    id: 'drag',
    isNew: true,
    name: 'Drag',
    englishName: 'Drag',
    category: 'glidövningar',
    subcategory: 'bredsteg',
    subcategoryLabel: 'Bredstegsövningar',
    difficulty: 'grundläggande',
    description:
      'Drag är ett glidmoment där åkaren sträcker ett ben bakåt med klingan lätt släpande längs isens yta medan man glider på det andra benet. Det skapar en lång, svepande linje och används som ett länkrörelse eller hållen position i koreografi.',
    tips: [
      'Håll det släpande bladet lätt i kontakt med isen utan att pressa ned det tungt.',
      'Håll en upprätt eller lätt framåtlutande hållning.',
    ],
    pitfalls: [
      'Att pressa det släpande bladet för hårt mot isen och sakta ned.',
      'Att böja knät på det bakre benet.',
    ],
    relatedIds: ['lunge', 'ina-bauer'],
  },
  {
    id: 'lunge',
    isNew: true,
    name: 'Lunge',
    englishName: 'Lunge',
    category: 'glidövningar',
    subcategory: 'bredsteg',
    subcategoryLabel: 'Bredstegsövningar',
    difficulty: 'grundläggande',
    description:
      'Lungerörelsen på skridskor är en position där åkaren böjer ett knä djupt medan det andra benet är fullt utsträckt framåt eller åt sidan – liknande en balettsteg. Den utförs under glid och används som en artistisk position eller ingång till andra element.',
    tips: [
      'Sänk dig i lungeposition med kontroll och håll det utsträckta benet rakt.',
      'Håll överkroppen upprätt.',
    ],
    pitfalls: [
      'Att tappa balansen när man sänker sig i lunge.',
      'Att det utsträckta benet böjs.',
    ],
    relatedIds: ['shoot-the-duck', 'drag'],
  },
  {
    id: 'bauer-spiral',
    isNew: true,
    name: 'Bauer Spiral',
    englishName: 'Bauer Spiral',
    category: 'glidövningar',
    subcategory: 'spiral',
    subcategoryLabel: 'Spiraler',
    difficulty: 'avancerad',
    description:
      'Bauer Spiral kombinerar spretörnpositionen (båda fötterna på isen, tårna utåtvridna) med en spiralliknande utsträckning av överkroppen eller ett ben. Det kräver extensiv höftutåtrotation och flexibilitet, och skapar en unik dubbelfotsposition med artistisk extension.',
    tips: [
      'Etablera spretörnpositionen stadigt innan du lägger till utsträckning.',
      'Håll båda fötterna i spårade parallella kanter under hela elementet.',
    ],
    pitfalls: [
      'Otillräcklig höftutåtrotation som destabiliserar spretörnet.',
      'En fots kant sviktar vid lyftfasen.',
    ],
    relatedIds: ['spread-eagle', 'spiral'],
  },
  {
    id: 'arabesque',
    isNew: true,
    name: 'Arabesque',
    englishName: 'Arabesque',
    category: 'glidövningar',
    subcategory: 'spiral',
    subcategoryLabel: 'Spiraler',
    difficulty: 'medel',
    description:
      'Arabesqueglidrörelsen är direkt hämtad från balettens arabesque: överkroppen upprätt eller lätt framåtlutad, fria benet lyft bakåt vid höfthöjd eller ovanför. Den skiljer sig från spiralen i sin mer upprätta torso och betoning på balettisk form framför extrem höjd.',
    tips: [
      'Håll stödknäet mjukt och centrerat över klingan.',
      'Öppen bröstkorg och nedtryckta axlar ger den klassiska arabesquelinjen.',
      'Fria benet lyfts aktivt från höften bakåt och uppåt.',
    ],
    pitfalls: [
      'Att runda ryggen – arabesquetorson ska vara öppen och lång.',
      'Att böja fria benets knä.',
    ],
    relatedIds: ['spiral', 'forward-spiral'],
  },
  {
    id: 'fan-spiral',
    isNew: true,
    name: 'Fan Spiral',
    englishName: 'Fan Spiral',
    category: 'glidövningar',
    subcategory: 'spiral',
    subcategoryLabel: 'Spiraler',
    difficulty: 'medel',
    description:
      'Fan Spiral är en sekvens av spiralpositioner som sveper runt en gemensam mittpunkt – åkaren utför en serie spiralglidar som kurverar runt centret, som ett fläktformat mönster. Varje spiralglid kurvar runt mittpunkten med fria benets riktning relativ till centret varierandes.',
    tips: [
      'Håll jämnt kantdjup på varje kurva i fläkten.',
      'Fria benet ska hållas högt och stabilt genom varje kurva.',
    ],
    pitfalls: [
      'Ojämna kanter som ger ett oregelbundet fläktmönster.',
      'Fria benet sjunker ned mellan kurvorna.',
    ],
    relatedIds: ['spiral', 'arabesque'],
  },
  {
    id: 'side-spiral',
    isNew: true,
    name: 'Side Spiral',
    englishName: 'Side Spiral',
    category: 'glidövningar',
    subcategory: 'spiral',
    subcategoryLabel: 'Spiraler',
    difficulty: 'medel',
    description:
      'Side Spiral utförs med fria benet lyft åt sidan istället för bakåt. Åkaren glider på ett ben medan det andra benet lyfts ut till sidan vid höfthöjd eller ovanför, i en sidoarabesqueposition. Det kräver lateral höftflexibilitet snarare än den bakre flexibiliteten i en vanlig spiral.',
    tips: [
      'Öppna höften utåt och uppåt för att nå sidolyftet.',
      'Håll glidknäet centrerat över klingan.',
      'Sträck båda tårna tydligt.',
    ],
    pitfalls: [
      'Att fria benet inte klarar höfthöjd på grund av begränsad lateral flexibilitet.',
      'Att torson roterar för att kompensera för bristande sidoflexibilitet.',
    ],
    relatedIds: ['spiral', 'y-spiral'],
  },
  {
    id: 'forward-spiral',
    isNew: true,
    name: 'Forward Spiral',
    englishName: 'Forward Spiral',
    category: 'glidövningar',
    subcategory: 'spiral',
    subcategoryLabel: 'Spiraler',
    difficulty: 'grundläggande',
    description:
      'Forward Spiral är det vanligaste och första inlärda spiralelementen – ett glidmoment framåt på ett ben med fria benet sträckt bakåt vid höfthöjd eller ovanför. Det är grunden för alla mer avancerade spiralvarianter och det element som mest liknar balettens arabesque på is.',
    tips: [
      'Lyft fria benet aktivt från höften – låt det inte bara falla bakåt.',
      'Håll glidknäet mjukt och överkroppen utsträckt.',
      'Sträck tårna på fria foten tydligt.',
    ],
    pitfalls: [
      'Fria benet under höfthöjd – spiralen kräver synlig höjd.',
      'Böjt knä på fria benet.',
      'Att runda ryggen och hänga med överkroppen.',
    ],
    relatedIds: ['spiral', 'arabesque', 'backward-spiral'],
  },
  {
    id: 'backward-spiral',
    isNew: true,
    name: 'Backward Spiral',
    englishName: 'Backward Spiral',
    category: 'glidövningar',
    subcategory: 'spiral',
    subcategoryLabel: 'Spiraler',
    difficulty: 'medel',
    description:
      'Backward Spiral utförs under bakåtglidning på ett ben med fria benet lyft bakåt – vilket nu är i rörelseriktningen bakåt. Det skapar ett ovanligt perspektiv och kräver stark balans på bakåtgliden kombinerat med spiralpositionens flexibilitet.',
    tips: [
      'Etablera en stark bakåtglid först, lyft sedan gradvis fria benet.',
      'Titta över axeln i rörelseriktningen för att hålla kursen.',
      'Bygg upp positionen gradvis – kombinationen av bakåtbalans och benlyft är krävande.',
    ],
    pitfalls: [
      'Att tappa bakåtgliden när man koncentrerar sig på benlyftet.',
      'Otillräcklig extension av fria benet.',
    ],
    relatedIds: ['forward-spiral', 'spiral'],
  },
];
