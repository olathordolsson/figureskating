export type Difficulty = 'nybörjare' | 'grundläggande' | 'medel' | 'avancerad' | 'elit';

export type CategoryId = 'hopp' | 'piruetter' | 'svängar' | 'glidövningar';

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
};

export type Category = {
  id: CategoryId;
  label: string;
  icon: string;
};

export const CATEGORIES: Category[] = [
  { id: 'hopp', label: 'Hopp', icon: '↑' },
  { id: 'piruetter', label: 'Piruetter', icon: '○' },
  { id: 'svängar', label: 'Svängar & Steg', icon: '↻' },
  { id: 'glidövningar', label: 'Glidövningar', icon: '~' },
];

export const TRICKS: Trick[] = [
  // ─── HOPP – KANTHOPP ────────────────────────────────────────────────────────
  {
    id: 'waltz',
    name: 'Valshoppet',
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
    name: 'Enkel Loop',
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
    name: 'Dubbel Loop',
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
    name: 'Trippel Loop',
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
    name: 'Spridhoppet',
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
    name: 'Stående piruett',
    englishName: 'Upright Spin',
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
    name: 'Bakre stående piruett',
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
    name: 'Liggande bakåtpiruett',
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
    name: 'Bakre sittpiruett',
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
    name: 'Kanonbollspiruett',
    englishName: 'Cannonball Spin',
    category: 'piruetter',
    subcategory: 'sittpiruett',
    subcategoryLabel: 'Sittpiruetter',
    difficulty: 'avancerad',
    description:
      'Kanonbollspiruett är en djup sittpiruett där fria benet viks in (ankle-grip) och bröstet dras mot låret – hela kroppen komprimeras till en tight boll. Skapar en dramatisk acceleration och är en av de mest imponerande sittpiruettvarianterna.',
    tips: [
      'Grip fria benets ankel med samma sidas hand eller båda händerna.',
      'Dra in armar och ben i ett snabbt drag för att accelerera.',
      'Ha god höjd och hastighet i sittpiruetten innan du komprimerar.',
    ],
    pitfalls: [
      'Att komma ur positionen för snabbt – håll kanonbollspositionen ett antal varv.',
      'Att tappa balansen när gripen stängs.',
    ],
    relatedIds: ['sit-spin'],
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
    name: 'Munkpiruett',
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
    name: 'Tresväng',
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
    name: 'Bracket-sväng',
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
    name: 'Rockettsväng',
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
];
