// ============================================
// UNIVERSAL SEARCH - Kemi 1
// ============================================
const searchableTopics = [
  // Main Topics - only keep keywords that DON'T have specific entries
  {
    title: "Introduktion",
    desc: "Kemins grunder, säkerhet, materia och separationsmetoder",
    url: "introduktion/",
    icon: "🔬",
    category: "Ämne",
    keywords: ["kemi", "grunder", "laboratorium", "labbrock", "skyddsglasögon"]
  },
  {
    title: "Atomens Byggnad",
    desc: "Protoner, neutroner, elektroner och isotoper",
    url: "atomer/",
    icon: "⚛️",
    category: "Ämne",
    keywords: ["atom", "kärna", "skal"]
  },
  {
    title: "Periodiska Systemet",
    desc: "Grupper, perioder och periodiska trender",
    url: "periodiska-systemet/",
    icon: "📊",
    category: "Ämne",
    keywords: ["periodiska", "systemet"]
  },
  {
    title: "Kemisk Bindning",
    desc: "Jon-, kovalent-, metallbindning och intermolekylära krafter",
    url: "bindningar/",
    icon: "🔗",
    category: "Ämne",
    keywords: ["bindning", "kraft"]
  },
  {
    title: "Mol & Stökiometri",
    desc: "Mol, molmassa, koncentration och beräkningar",
    url: "mol-stokiometri/",
    icon: "⚖️",
    category: "Ämne",
    keywords: ["stökiometri", "stoikiometri", "beräkning"]
  },
  {
    title: "Syror & Baser",
    desc: "pH, pOH, joner och neutralisation",
    url: "syror-baser/",
    icon: "⚗️",
    category: "Ämne",
    keywords: ["syra", "bas"]
  },
  {
    title: "Termokemi",
    desc: "Entalpi, energidiagram och Hess lag",
    url: "termokemi/",
    icon: "🔥",
    category: "Ämne",
    keywords: ["termokemi", "hess", "reaktion"]
  },
  {
    title: "Redoxreaktioner",
    desc: "Oxidation, reduktion och spänningsserien",
    url: "redox/",
    icon: "⚡",
    category: "Ämne",
    keywords: ["redox", "elektrokemi"]
  },
  {
    title: "Organisk Kemi",
    desc: "Kolväten, funktionella grupper och namngivning",
    url: "organisk-kemi/",
    icon: "🧪",
    category: "Ämne",
    keywords: ["organisk", "kol", "kolväte", "funktionell", "alkan", "alken", "alkyn", "alkohol", "aldehyd", "keton", "karboxylsyra", "ester", "eter", "amin", "amid", "polymer", "mättat", "omättat", "namngivning", "isomer", "strukturformel"]
  },
  // Specific concepts within Syror & Baser
  {
    title: "pH-skalan",
    desc: "Mäter hur sur eller basisk en lösning är (0-14)",
    url: "syror-baser/#ph-skalan",
    icon: "📏",
    category: "Begrepp",
    keywords: ["pH", "skala", "sur", "basisk", "neutral", "7", "vätejon"]
  },
  {
    title: "pOH",
    desc: "Mäter hydroxidjonkoncentration",
    url: "syror-baser/#ph-poh",
    icon: "📐",
    category: "Begrepp",
    keywords: ["pOH", "hydroxid", "jon", "koncentration", "14"]
  },
  {
    title: "Starka syror",
    desc: "HCl, H₂SO₄, HNO₃ - dissocierar fullständigt",
    url: "syror-baser/#syror",
    icon: "🧪",
    category: "Begrepp",
    keywords: ["stark", "syra", "saltsyra", "svavelsyra", "salpetersyra", "dissociation"]
  },
  {
    title: "Svaga syror",
    desc: "CH₃COOH, H₂CO₃ - dissocierar delvis",
    url: "syror-baser/#syror",
    icon: "🧪",
    category: "Begrepp",
    keywords: ["svag", "syra", "ättiksyra", "kolsyra", "citronsyra", "jämvikt"]
  },
  {
    title: "Starka baser",
    desc: "NaOH, KOH - dissocierar fullständigt",
    url: "syror-baser/#baser",
    icon: "🧫",
    category: "Begrepp",
    keywords: ["stark", "bas", "natriumhydroxid", "kaliumhydroxid", "hydroxid"]
  },
  {
    title: "Neutralisation",
    desc: "Syra + Bas → Salt + Vatten",
    url: "syror-baser/#neutralisation",
    icon: "⚖️",
    category: "Begrepp",
    keywords: ["neutralisation", "reaktion", "salt", "vatten", "syra", "bas"]
  },
  {
    title: "Titrering",
    desc: "Bestäm koncentration med noggrann volymtillsats",
    url: "syror-baser/#titrering",
    icon: "🧪",
    category: "Begrepp",
    keywords: ["titrering", "ekvivalenspunkt", "indikator", "byrett", "koncentration"]
  },
  {
    title: "Buffertlösningar",
    desc: "Motverkar pH-förändringar vid syra/bas-tillsats",
    url: "syror-baser/#buffert",
    icon: "🛡️",
    category: "Begrepp",
    keywords: ["buffert", "buffertlösning", "konjugat", "svag syra", "pH-stabilitet"]
  },
  {
    title: "Protolys",
    desc: "Protonöverföring mellan syra och bas",
    url: "syror-baser/#joner",
    icon: "↔️",
    category: "Begrepp",
    keywords: ["protolys", "proton", "H+", "autoprotolys", "vatten", "överföring"]
  },
  {
    title: "Korresponderande syra-baspar",
    desc: "HCl/Cl⁻, NH₄⁺/NH₃ - skillnad på en proton",
    url: "syror-baser/#korresponderande",
    icon: "🔄",
    category: "Begrepp",
    keywords: ["korresponderande", "konjugat", "par", "syra", "bas", "proton"]
  },
  // Specific concepts within Atomer
  {
    title: "Protoner",
    desc: "Positiv laddning, bestämmer grundämnet",
    url: "atomer/#partiklar",
    icon: "➕",
    category: "Begrepp",
    keywords: ["proton", "positiv", "kärna", "laddning", "atomnummer"]
  },
  {
    title: "Neutroner",
    desc: "Neutral partikel i kärnan",
    url: "atomer/#partiklar",
    icon: "⚪",
    category: "Begrepp",
    keywords: ["neutron", "neutral", "kärna", "isotop", "masstal"]
  },
  {
    title: "Elektroner",
    desc: "Negativ laddning, kretsar i skal",
    url: "atomer/#elektroner",
    icon: "➖",
    category: "Begrepp",
    keywords: ["elektron", "negativ", "skal", "orbital", "valenselektron"]
  },
  {
    title: "Isotoper",
    desc: "Samma grundämne, olika antal neutroner",
    url: "atomer/#atomnummer",
    icon: "🔄",
    category: "Begrepp",
    keywords: ["isotop", "neutron", "masstal", "kol-14", "radioaktiv", "nuklid", "nuklider"]
  },
  {
    title: "Nuklider",
    desc: "En specifik atomkärna med bestämt antal protoner och neutroner",
    url: "atomer/#nuklider",
    icon: "⚛️",
    category: "Begrepp",
    keywords: ["nuklid", "nuklider", "atomkärna", "masstal", "atomnummer", "isotop"]
  },
  // Specific concepts within Periodiska Systemet
  {
    title: "Grupper i periodiska systemet",
    desc: "Vertikala kolumner med liknande egenskaper",
    url: "periodiska-systemet/#grupper",
    icon: "📊",
    category: "Begrepp",
    keywords: ["grupp", "kolumn", "vertikal", "valenselektron", "egenskaper"]
  },
  {
    title: "Periodiska trender",
    desc: "Atomradie, joniseringsenergi och elektronegativitet",
    url: "periodiska-systemet/#trender",
    icon: "📈",
    category: "Begrepp",
    keywords: ["trend", "period", "atomradie", "joniseringsenergi", "elektronegativitet", "mönster"]
  },
  {
    title: "Alkalimetaller (grupp 1)",
    desc: "Li, Na, K - reaktiva metaller med 1 valenselektron",
    url: "periodiska-systemet/#grupper",
    icon: "🔥",
    category: "Begrepp",
    keywords: ["alkalimetall", "alkali", "litium", "natrium", "kalium", "grupp 1", "reaktiv"]
  },
  {
    title: "Halogener (grupp 17)",
    desc: "F, Cl, Br, I - reaktiva icke-metaller med 7 valenselektroner",
    url: "periodiska-systemet/#grupper",
    icon: "☣️",
    category: "Begrepp",
    keywords: ["halogen", "fluor", "klor", "brom", "jod", "grupp 17", "reaktiv"]
  },
  {
    title: "Ädelgaser (grupp 18)",
    desc: "He, Ne, Ar - stabila gaser med fulla skal",
    url: "periodiska-systemet/#grupper",
    icon: "💫",
    category: "Begrepp",
    keywords: ["ädelgas", "helium", "neon", "argon", "oreaktiv", "stabilt", "grupp 18"]
  },
  {
    title: "Metaller och icke-metaller",
    desc: "Egenskaper och placering i periodiska systemet",
    url: "periodiska-systemet/#metaller",
    icon: "🔩",
    category: "Begrepp",
    keywords: ["metall", "icke-metall", "metalloid", "halvmetall", "ledningsförmåga"]
  },
  {
    title: "Katjoner (positiva joner)",
    desc: "Metaller avger elektroner och blir positivt laddade",
    url: "periodiska-systemet/#vanliga-joner",
    icon: "➕",
    category: "Begrepp",
    keywords: ["katjon", "positiv", "jon", "metall", "avger", "elektron", "Na+", "Mg2+", "Ca2+"]
  },
  {
    title: "Anjoner (negativa joner)",
    desc: "Icke-metaller tar upp elektroner och blir negativt laddade",
    url: "periodiska-systemet/#vanliga-joner",
    icon: "➖",
    category: "Begrepp",
    keywords: ["anjon", "negativ", "jon", "icke-metall", "tar upp", "elektron", "Cl-", "O2-", "S2-"]
  },
  {
    title: "Vanliga joner",
    desc: "Vilka joner grundämnen bildar baserat på grupp",
    url: "periodiska-systemet/#vanliga-joner",
    icon: "⚡",
    category: "Begrepp",
    keywords: ["jon", "joner", "laddning", "grupp", "valenselektron", "jonbildning"]
  },
  // Specific concepts within Kemisk Bindning
  {
    title: "Jonbindning",
    desc: "Elektrostatisk attraktion mellan joner",
    url: "bindningar/#jonbindning",
    icon: "⚡",
    category: "Begrepp",
    keywords: ["jon", "bindning", "elektrostatisk", "salt", "NaCl"]
  },
  {
    title: "Kovalent bindning",
    desc: "Delning av elektronpar",
    url: "bindningar/#kovalent",
    icon: "🔗",
    category: "Begrepp",
    keywords: ["kovalent", "bindning", "elektronpar", "molekyl", "H2O", "polär", "opolär"]
  },
  {
    title: "Metallbindning",
    desc: "Metallatomer delar på fria elektroner",
    url: "bindningar/#metallbindning",
    icon: "🔩",
    category: "Begrepp",
    keywords: ["metall", "metallbindning", "elektronmoln", "ledningsförmåga", "formbar"]
  },
  {
    title: "Vätebindning",
    desc: "Stark intermolekylär kraft mellan H och N/O/F",
    url: "bindningar/#intermolekylara",
    icon: "💧",
    category: "Begrepp",
    keywords: ["vätebindning", "väte", "hydrogen", "intermolekylär", "vatten", "kokpunkt", "H2O"]
  },
  {
    title: "Van der Waals-krafter",
    desc: "Svaga tillfälliga dipoler mellan alla molekyler",
    url: "bindningar/#intermolekylara",
    icon: "✨",
    category: "Begrepp",
    keywords: ["van der waals", "london", "dispersion", "tillfällig", "dipol", "opolär"]
  },
  {
    title: "Dipol-dipol-bindning",
    desc: "Attraktion mellan permanenta dipoler",
    url: "bindningar/#intermolekylara",
    icon: "🧲",
    category: "Begrepp",
    keywords: ["dipol", "dipol-dipol", "polär", "elektrostatisk", "permanent"]
  },
  {
    title: "Elektronformel (Lewisstruktur)",
    desc: "Rita molekyler med elektronpar",
    url: "bindningar/#elektronformel",
    icon: "✏️",
    category: "Begrepp",
    keywords: ["lewis", "elektronformel", "struktur", "oktett", "valenselektron", "rita", "prickar"]
  },
  {
    title: "Fasövergångar",
    desc: "Vilka bindningar bryts vid smältning/kokning",
    url: "bindningar/#fasovergangar",
    icon: "🌡️",
    category: "Begrepp",
    keywords: ["fas", "fasövergång", "smältning", "kokning", "sublimering", "kondensation", "stelning"]
  },
  // Specific concepts within Mol & Stökiometri
  {
    title: "Molmassa",
    desc: "Massa per mol av ett ämne",
    url: "mol-stokiometri/#molmassa",
    icon: "⚖️",
    category: "Begrepp",
    keywords: ["molmassa", "mol", "gram", "massa", "g/mol"]
  },
  {
    title: "Avogadros tal",
    desc: "6,022 × 10²³ partiklar per mol",
    url: "mol-stokiometri/#mol",
    icon: "🔢",
    category: "Begrepp",
    keywords: ["avogadro", "tal", "mol", "partiklar", "konstant"]
  },
  {
    title: "Spädning",
    desc: "c₁V₁ = c₂V₂ - beräkna volym och koncentration",
    url: "mol-stokiometri/#spadning-calc",
    icon: "💧",
    category: "Begrepp",
    keywords: ["spädning", "späda", "koncentration", "volym", "c1v1", "formel"]
  },
  {
    title: "Begränsande reaktant",
    desc: "Den reaktant som tar slut först",
    url: "mol-stokiometri/#stokiometri",
    icon: "🚫",
    category: "Begrepp",
    keywords: ["begränsande", "reaktant", "överskott", "stökiometri", "tar slut"]
  },
  {
    title: "Kristallvatten",
    desc: "Bestäm x i salter som CuSO₄·xH₂O",
    url: "mol-stokiometri/#kristallvatten",
    icon: "💎",
    category: "Begrepp",
    keywords: ["kristallvatten", "hydrat", "CuSO4", "uppvärmning", "vattenfritt"]
  },
  {
    title: "Empirisk formel",
    desc: "Enklaste heltalsförhållandet mellan atomer",
    url: "mol-stokiometri/#empirisk",
    icon: "📐",
    category: "Begrepp",
    keywords: ["empirisk", "formel", "molekylformel", "massprocent", "förhållande"]
  },
  {
    title: "Gaslagen (pV=nRT)",
    desc: "Idealgaslagen för beräkningar med gaser",
    url: "mol-stokiometri/#gaslagen",
    icon: "💨",
    category: "Begrepp",
    keywords: ["gas", "ideal", "pV=nRT", "tryck", "volym", "temperatur", "NTP", "22.4"]
  },
  {
    title: "Fällningsreaktioner",
    desc: "Olösliga salter som AgCl, BaSO₄",
    url: "mol-stokiometri/#fallning",
    icon: "🧪",
    category: "Begrepp",
    keywords: ["fällning", "precipitation", "olöslig", "AgCl", "BaSO4", "salt"]
  },
  // Specific concepts within Redox
  {
    title: "Oxidation",
    desc: "Avgivande av elektroner",
    url: "redox/#grundbegrepp",
    icon: "📤",
    category: "Begrepp",
    keywords: ["oxidation", "elektron", "avge", "oxidationstal"]
  },
  {
    title: "Reduktion",
    desc: "Upptagande av elektroner",
    url: "redox/#grundbegrepp",
    icon: "📥",
    category: "Begrepp",
    keywords: ["reduktion", "elektron", "uppta", "oxidationstal"]
  },
  {
    title: "Oxidationstal",
    desc: "Beräkna oxidationstal för atomer i föreningar",
    url: "redox/#oxidationstal",
    icon: "🔢",
    category: "Begrepp",
    keywords: ["oxidationstal", "OT", "laddning", "beräkna", "regler"]
  },
  {
    title: "Spänningsserien",
    desc: "Metallernas ordning efter reduktionsförmåga",
    url: "redox/#spanningsserien",
    icon: "📊",
    category: "Begrepp",
    keywords: ["spänningsserie", "metall", "reduktion", "reaktivitet", "väteutdrivande"]
  },
  {
    title: "Galvanisk cell",
    desc: "Batteri - spontan redoxreaktion ger ström",
    url: "redox/#galvaniskt",
    icon: "🔋",
    category: "Begrepp",
    keywords: ["galvanisk", "cell", "batteri", "anod", "katod", "EMK", "spänning", "daniell"]
  },
  // Specific concepts within Termokemi
  {
    title: "Entalpi",
    desc: "Energiinnehåll vid konstant tryck",
    url: "termokemi/#entalpi",
    icon: "🌡️",
    category: "Begrepp",
    keywords: ["entalpi", "energi", "H", "värme", "reaktion"]
  },
  {
    title: "Exoterm reaktion",
    desc: "Avger energi till omgivningen",
    url: "termokemi/#reaktioner",
    icon: "🔥",
    category: "Begrepp",
    keywords: ["exoterm", "energi", "avge", "värme", "negativ"]
  },
  {
    title: "Endoterm reaktion",
    desc: "Tar upp energi från omgivningen",
    url: "termokemi/#reaktioner",
    icon: "❄️",
    category: "Begrepp",
    keywords: ["endoterm", "energi", "uppta", "kyla", "positiv"]
  },
  {
    title: "Aktiveringsenergi",
    desc: "Minsta energi för att starta reaktionen",
    url: "termokemi/#aktiveringsenergi",
    icon: "⚡",
    category: "Begrepp",
    keywords: ["aktiveringsenergi", "Ea", "energibarriär", "aktiverad", "kollision"]
  },
  {
    title: "Katalysator",
    desc: "Sänker aktiveringsenergin utan att förbrukas",
    url: "termokemi/#katalysatorer",
    icon: "🚀",
    category: "Begrepp",
    keywords: ["katalysator", "enzym", "aktiveringsenergi", "hastighet", "reaktion"]
  },
  // Introduktion - specific sections
  {
    title: "Separationsmetoder",
    desc: "Filtrering, destillation, kromatografi m.m.",
    url: "introduktion/#separation",
    icon: "🔬",
    category: "Begrepp",
    keywords: ["separation", "filtrering", "destillation", "kromatografi", "indunstning", "dekantering"]
  },
  {
    title: "Faropiktogram",
    desc: "Varningssymboler för kemikalier",
    url: "introduktion/#sakerhet",
    icon: "⚠️",
    category: "Begrepp",
    keywords: ["faropiktogram", "säkerhet", "varning", "brandfarligt", "giftigt", "frätande"]
  },
  {
    title: "Homogena blandningar",
    desc: "Lösningar - samma sammansättning överallt",
    url: "introduktion/#materia",
    icon: "💧",
    category: "Begrepp",
    keywords: ["homogen", "blandning", "lösning", "salt", "vatten", "luft", "legering"]
  },
  {
    title: "Heterogena blandningar",
    desc: "Olika faser syns - t.ex. sand och vatten",
    url: "introduktion/#materia",
    icon: "🏔️",
    category: "Begrepp",
    keywords: ["heterogen", "blandning", "faser", "suspension", "emulsion", "granit"]
  },
  // NEW TOPICS ADDED
  // Atomer - new sections
  {
    title: "Excitation och ljusemission",
    desc: "Elektronhopp och atomspektrum",
    url: "atomer/#excitation",
    icon: "💡",
    category: "Begrepp",
    keywords: ["excitation", "emission", "spektrum", "ljus", "foton", "grundtillstånd", "exciterat"]
  },
  {
    title: "Genomsnittlig atommassa",
    desc: "Beräkna medelmassa från isotoper",
    url: "atomer/#atommassa",
    icon: "⚖️",
    category: "Begrepp",
    keywords: ["atommassa", "isotop", "genomsnitt", "medel", "abundans", "klor"]
  },
  // Bindningar - new sections
  {
    title: "Elektronformel (Lewisstruktur)",
    desc: "Rita molekyler med elektronpar",
    url: "bindningar/#elektronformel",
    icon: "✏️",
    category: "Begrepp",
    keywords: ["lewis", "elektronformel", "struktur", "oktett", "valenselektron", "rita"]
  },
  {
    title: "Fasövergångar och bindningar",
    desc: "Vilka bindningar bryts vid smältning/kokning",
    url: "bindningar/#fasovergangar",
    icon: "🌡️",
    category: "Begrepp",
    keywords: ["fas", "fasövergång", "smältning", "kokning", "bindning", "intermolekylär"]
  },
  // Introduktion - new sections
  {
    title: "Lösningar och löslighet",
    desc: "Lika löser lika - polära och opolära lösningsmedel",
    url: "introduktion/#losningar",
    icon: "💧",
    category: "Begrepp",
    keywords: ["lösning", "löslighet", "polär", "opolär", "lika löser lika", "salt", "vatten"]
  },
  // Mol-stökiometri - new sections
  {
    title: "Empirisk och molekylformel",
    desc: "Bestäm formel från massprocent",
    url: "mol-stokiometri/#empirisk",
    icon: "🔬",
    category: "Begrepp",
    keywords: ["empirisk", "molekylformel", "massprocent", "formel", "förhållande"]
  },
  {
    title: "Jonkoncentration",
    desc: "Beräkna jonkoncentration vid dissociation",
    url: "mol-stokiometri/#jonkoncentration",
    icon: "⚡",
    category: "Begrepp",
    keywords: ["jonkoncentration", "dissociation", "jon", "salt", "CaCl2"]
  },
  {
    title: "Massprocent",
    desc: "Andel av ett ämne i en lösning",
    url: "mol-stokiometri/#massprocent",
    icon: "%",
    category: "Begrepp",
    keywords: ["massprocent", "procent", "andel", "massa", "lösning"]
  },
  {
    title: "Kristallvatten",
    desc: "Bestäm x i hydratiserade salter",
    url: "mol-stokiometri/#kristallvatten",
    icon: "💎",
    category: "Begrepp",
    keywords: ["kristallvatten", "hydrat", "CuSO4", "gips", "uppvärmning"]
  },
  {
    title: "Utbyte (Yield)",
    desc: "Teoretiskt vs verkligt utbyte",
    url: "mol-stokiometri/#utbyte",
    icon: "📊",
    category: "Begrepp",
    keywords: ["utbyte", "yield", "teoretiskt", "verkligt", "procent"]
  },
  {
    title: "Gasberäkningar (pV=nRT)",
    desc: "Idealgaslagen och Boyles lag",
    url: "mol-stokiometri/#gaslagen",
    icon: "💨",
    category: "Begrepp",
    keywords: ["gas", "ideal", "pV=nRT", "boyle", "tryck", "volym", "partialtryck", "dalton"]
  },
  {
    title: "Fällningsreaktioner",
    desc: "Olösliga salter och fällning",
    url: "mol-stokiometri/#fallning",
    icon: "🧪",
    category: "Begrepp",
    keywords: ["fällning", "precipitation", "olöslig", "AgCl", "BaSO4", "salt"]
  },
  // Syror-baser - new sections
  {
    title: "Korresponderande syra-bas-par",
    desc: "Konjugerade par och amfolyter",
    url: "syror-baser/#korresponderande",
    icon: "🔄",
    category: "Begrepp",
    keywords: ["korresponderande", "konjugat", "par", "syra", "bas", "amfolyt", "vatten"]
  },
  {
    title: "Titrering",
    desc: "Bestäm koncentration med syra-bas titrering",
    url: "syror-baser/#titrering",
    icon: "🧪",
    category: "Begrepp",
    keywords: ["titrering", "ekvivalenspunkt", "indikator", "byrett", "c1V1=c2V2"]
  },
  {
    title: "Buffertlösningar",
    desc: "Lösningar som motstår pH-ändringar",
    url: "syror-baser/#buffert",
    icon: "🛡️",
    category: "Begrepp",
    keywords: ["buffert", "buffer", "pH", "blod", "kolsyra", "bikarbonat"]
  },
  // Termokemi - new sections
  {
    title: "Värmeberäkningar (Q=mcΔT)",
    desc: "Beräkna värmeenergi",
    url: "termokemi/#varmeberakningar",
    icon: "🔥",
    category: "Begrepp",
    keywords: ["värme", "Q=mcΔT", "specifik", "värmekapacitet", "temperatur", "energi"]
  },
  // Redox - new sections
  {
    title: "Galvaniska celler",
    desc: "Elektrokemiska celler och EMK",
    url: "redox/#galvaniskt",
    icon: "🔋",
    category: "Begrepp",
    keywords: ["galvanisk", "cell", "EMK", "batteri", "daniell", "anod", "katod"]
  },
  {
    title: "Väteutdrivande metaller",
    desc: "Metaller som kan reagera med syror",
    url: "redox/#spanningsserien",
    icon: "💨",
    category: "Begrepp",
    keywords: ["väteutdrivande", "väte", "metall", "syra", "spänningsserie", "H2"]
  },
  // Periodiska systemet - new sections
  {
    title: "Reaktivitetstrend",
    desc: "Varför alkalimetaller och halogener har motsatta trender",
    url: "periodiska-systemet/#trender",
    icon: "📈",
    category: "Begrepp",
    keywords: ["reaktivitet", "trend", "alkalimetall", "halogen", "grupp", "period"]
  }
];

// ============================================
// FUZZY SEARCH HELPERS
// ============================================

// Normalize Swedish characters and common variations
function normalizeText(text) {
  return text.toLowerCase()
    .replace(/ö/g, 'o').replace(/ä/g, 'a').replace(/å/g, 'a')
    .replace(/é/g, 'e').replace(/ü/g, 'u')
    .replace(/[^a-z0-9]/g, ''); // Remove non-alphanumeric
}

// Calculate Levenshtein distance (edit distance)
function levenshteinDistance(a, b) {
  if (a.length === 0) return b.length;
  if (b.length === 0) return a.length;
  
  const matrix = [];
  
  for (let i = 0; i <= b.length; i++) {
    matrix[i] = [i];
  }
  for (let j = 0; j <= a.length; j++) {
    matrix[0][j] = j;
  }
  
  for (let i = 1; i <= b.length; i++) {
    for (let j = 1; j <= a.length; j++) {
      if (b.charAt(i - 1) === a.charAt(j - 1)) {
        matrix[i][j] = matrix[i - 1][j - 1];
      } else {
        matrix[i][j] = Math.min(
          matrix[i - 1][j - 1] + 1, // substitution
          matrix[i][j - 1] + 1,     // insertion
          matrix[i - 1][j] + 1      // deletion
        );
      }
    }
  }
  
  return matrix[b.length][a.length];
}

// Check if query fuzzy-matches target
function fuzzyMatch(query, target) {
  const normQuery = normalizeText(query);
  const normTarget = normalizeText(target);
  
  // Exact substring match (after normalization)
  if (normTarget.includes(normQuery)) return true;
  
  // For short queries, be stricter
  if (normQuery.length < 4) {
    return normTarget.includes(normQuery);
  }
  
  // Allow 1 error for every 4 characters in query
  const maxErrors = Math.floor(normQuery.length / 4) + 1;
  
  // Check each word in target
  const targetWords = target.toLowerCase().split(/\s+/);
  for (const word of targetWords) {
    const normWord = normalizeText(word);
    // If word is similar length to query, check distance
    if (Math.abs(normWord.length - normQuery.length) <= maxErrors) {
      if (levenshteinDistance(normQuery, normWord) <= maxErrors) {
        return true;
      }
    }
    // Also check if query starts with word or word starts with query
    if (normWord.startsWith(normQuery) || normQuery.startsWith(normWord)) {
      return true;
    }
  }
  
  return false;
}

// ============================================
// SEARCH INITIALIZATION
// ============================================

function initSearch() {
  const searchInput = document.getElementById('globalSearch');
  const searchResults = document.getElementById('searchResults');
  
  if (!searchInput || !searchResults) return;
  
  // Determine base path based on current location
  const pathParts = window.location.pathname.split('/').filter(p => p);
  const isSubpage = pathParts.length > 0 && 
                    !window.location.pathname.endsWith('/index.html') &&
                    document.querySelector('link[href^="../styles.css"]') !== null;
  const basePath = isSubpage ? '../' : '';
  
  searchInput.addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase().trim();
    
    if (query.length < 2) {
      searchResults.classList.remove('active');
      return;
    }
    
    const results = searchableTopics.map(topic => {
      let score = 0;
      let matchedKeyword = null;
      const lowerQuery = query.toLowerCase();
      const lowerTitle = topic.title.toLowerCase();
      
      // Exact title match = highest score
      if (lowerTitle === lowerQuery) score += 100;
      // Title starts with query
      else if (lowerTitle.startsWith(lowerQuery)) score += 80;
      // Title contains query
      else if (lowerTitle.includes(lowerQuery)) score += 60;
      
      // Keyword matching - track which keyword matched
      const exactKeyword = topic.keywords.find(kw => kw.toLowerCase() === lowerQuery);
      const startsKeyword = topic.keywords.find(kw => kw.toLowerCase().startsWith(lowerQuery));
      const containsKeyword = topic.keywords.find(kw => kw.toLowerCase().includes(lowerQuery));
      
      if (exactKeyword) {
        score += 50;
        matchedKeyword = exactKeyword;
      } else if (startsKeyword) {
        score += 40;
        matchedKeyword = startsKeyword;
      } else if (containsKeyword) {
        score += 30;
        matchedKeyword = containsKeyword;
      }
      
      // Description contains query
      if (topic.desc.toLowerCase().includes(lowerQuery)) score += 20;
      
      // Fuzzy matches (lower priority)
      if (score === 0) {
        if (fuzzyMatch(lowerQuery, topic.title)) {
          score += 15;
        } else {
          const fuzzyKeyword = topic.keywords.find(kw => fuzzyMatch(lowerQuery, kw));
          if (fuzzyKeyword) {
            score += 10;
            matchedKeyword = fuzzyKeyword;
          } else if (fuzzyMatch(lowerQuery, topic.desc)) {
            score += 5;
          }
        }
      }
      
      return { ...topic, score, matchedKeyword };
    })
    .filter(topic => topic.score > 0)
    .sort((a, b) => b.score - a.score);
    
    if (results.length === 0) {
      searchResults.innerHTML = '<div class="search-no-results">Inga resultat hittades</div>';
    } else {
      searchResults.innerHTML = results.map(result => {
        // Show matched keyword if it's not visible in title/desc
        const showKeyword = result.matchedKeyword && 
          !result.title.toLowerCase().includes(query.toLowerCase()) &&
          !result.desc.toLowerCase().includes(query.toLowerCase());
        
        return `
        <a href="${basePath}${result.url}" class="search-result-item">
          <span class="search-result-icon">${result.icon}</span>
          <div class="search-result-content">
            <div class="search-result-title">${highlightSearchMatch(result.title, query)}</div>
            <div class="search-result-desc">${result.desc}${showKeyword ? ` <span class="search-match-tag">→ ${result.matchedKeyword}</span>` : ''}</div>
          </div>
          <span class="search-result-category">${result.category}</span>
        </a>
      `}).join('');
      
      // Add click handlers for smooth scrolling to sections
      searchResults.querySelectorAll('.search-result-item').forEach(link => {
        link.addEventListener('click', (e) => {
          const href = link.getAttribute('href');
          // If it's a hash link on the current page, scroll smoothly
          if (href.includes('#')) {
            const hashIndex = href.indexOf('#');
            const path = href.substring(0, hashIndex);
            const hash = href.substring(hashIndex);
            
            // Check if we're on the same page (path is empty or matches current)
            const currentPath = window.location.pathname;
            const isCurrentPage = path === '' || 
              currentPath.endsWith(path) || 
              currentPath.includes(path.replace('../', ''));
            
            if (isCurrentPage && hash) {
              e.preventDefault();
              const target = document.querySelector(hash);
              if (target) {
                // Offset for fixed header
                const headerOffset = 80;
                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerOffset;
                window.scrollTo({ top: targetPosition, behavior: 'smooth' });
                searchResults.classList.remove('active');
                searchInput.value = '';
              }
            }
          }
        });
      });
    }
    
    searchResults.classList.add('active');
  });
  
  // Close search results when clicking outside
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.search-container')) {
      searchResults.classList.remove('active');
    }
  });
  
  // Handle keyboard navigation
  searchInput.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      searchResults.classList.remove('active');
      searchInput.blur();
    } else if (e.key === 'Enter') {
      const firstResult = searchResults.querySelector('.search-result-item');
      if (firstResult) {
        window.location.href = firstResult.href;
      }
    }
  });
  
  // Focus search with keyboard shortcut (Ctrl/Cmd + K)
  document.addEventListener('keydown', (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
      e.preventDefault();
      searchInput.focus();
    }
  });
}

function highlightSearchMatch(text, query) {
  const regex = new RegExp(`(${query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
  return text.replace(regex, '<strong>$1</strong>');
}

// Initialize search when DOM is ready
document.addEventListener('DOMContentLoaded', initSearch);
