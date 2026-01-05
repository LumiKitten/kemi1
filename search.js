// ============================================
// UNIVERSAL SEARCH - Kemi 1
// ============================================
const searchableTopics = [
  // Main Topics
  {
    title: "Introduktion",
    desc: "Kemins grunder, säkerhet, materia och separationsmetoder",
    url: "introduktion/",
    icon: "🔬",
    category: "Ämne",
    keywords: ["kemi", "grunder", "säkerhet", "materia", "separation", "laboratorium"]
  },
  {
    title: "Atomens Byggnad",
    desc: "Protoner, neutroner, elektroner och isotoper",
    url: "atomer/",
    icon: "⚛️",
    category: "Ämne",
    keywords: ["atom", "proton", "neutron", "elektron", "isotop", "kärna", "skal"]
  },
  {
    title: "Periodiska Systemet",
    desc: "Grupper, perioder och periodiska trender",
    url: "periodiska-systemet/",
    icon: "📊",
    category: "Ämne",
    keywords: ["periodiska", "systemet", "grupp", "period", "trend", "element", "metall"]
  },
  {
    title: "Kemisk Bindning",
    desc: "Jon-, kovalent-, metallbindning och intermolekylära krafter",
    url: "bindningar/",
    icon: "🔗",
    category: "Ämne",
    keywords: ["bindning", "jon", "kovalent", "metall", "intermolekylär", "kraft", "dipol"]
  },
  {
    title: "Mol & Stökiometri",
    desc: "Mol, molmassa, koncentration och beräkningar",
    url: "mol-stokiometri/",
    icon: "⚖️",
    category: "Ämne",
    keywords: ["mol", "stökiometri", "molmassa", "koncentration", "beräkning", "avogadro"]
  },
  {
    title: "Syror & Baser",
    desc: "pH, pOH, joner och neutralisation",
    url: "syror-baser/",
    icon: "⚗️",
    category: "Ämne",
    keywords: ["syra", "bas", "pH", "pOH", "jon", "neutralisation", "saltsyra", "natriumhydroxid"]
  },
  {
    title: "Termokemi",
    desc: "Entalpi, energidiagram och Hess lag",
    url: "termokemi/",
    icon: "🔥",
    category: "Ämne",
    keywords: ["termokemi", "entalpi", "energi", "hess", "exoterm", "endoterm", "reaktion"]
  },
  {
    title: "Redoxreaktioner",
    desc: "Oxidation, reduktion och spänningsserien",
    url: "redox/",
    icon: "⚡",
    category: "Ämne",
    keywords: ["redox", "oxidation", "reduktion", "spänningsserie", "elektron", "elektrokemi"]
  },
  {
    title: "Organisk Kemi",
    desc: "Kolväten, funktionella grupper och namngivning",
    url: "organisk-kemi/",
    icon: "🧪",
    category: "Ämne",
    keywords: ["organisk", "kol", "kolväte", "funktionell", "alkan", "alken", "alkyn", "alkohol"]
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
    keywords: ["isotop", "neutron", "masstal", "kol-14", "radioaktiv"]
  },
  // Specific concepts within Kemisk Bindning
  {
    title: "Jonbindning",
    desc: "Elektrostatisk attraktion mellan joner",
    url: "bindningar/",
    icon: "⚡",
    category: "Begrepp",
    keywords: ["jon", "bindning", "elektrostatisk", "salt", "NaCl"]
  },
  {
    title: "Kovalent bindning",
    desc: "Delning av elektronpar",
    url: "bindningar/",
    icon: "🔗",
    category: "Begrepp",
    keywords: ["kovalent", "bindning", "elektronpar", "molekyl", "H2O"]
  },
  // Specific concepts within Mol & Stökiometri
  {
    title: "Molmassa",
    desc: "Massa per mol av ett ämne",
    url: "mol-stokiometri/",
    icon: "⚖️",
    category: "Begrepp",
    keywords: ["molmassa", "mol", "gram", "massa", "g/mol"]
  },
  {
    title: "Avogadros tal",
    desc: "6,022 × 10²³ partiklar per mol",
    url: "mol-stokiometri/",
    icon: "🔢",
    category: "Begrepp",
    keywords: ["avogadro", "tal", "mol", "partiklar", "konstant"]
  },
  // Specific concepts within Redox
  {
    title: "Oxidation",
    desc: "Avgivande av elektroner",
    url: "redox/",
    icon: "📤",
    category: "Begrepp",
    keywords: ["oxidation", "elektron", "avge", "oxidationstal"]
  },
  {
    title: "Reduktion",
    desc: "Upptagande av elektroner",
    url: "redox/",
    icon: "📥",
    category: "Begrepp",
    keywords: ["reduktion", "elektron", "uppta", "oxidationstal"]
  },
  // Specific concepts within Termokemi
  {
    title: "Entalpi",
    desc: "Energiinnehåll vid konstant tryck",
    url: "termokemi/",
    icon: "🌡️",
    category: "Begrepp",
    keywords: ["entalpi", "energi", "H", "värme", "reaktion"]
  },
  {
    title: "Exoterm reaktion",
    desc: "Avger energi till omgivningen",
    url: "termokemi/",
    icon: "🔥",
    category: "Begrepp",
    keywords: ["exoterm", "energi", "avge", "värme", "negativ"]
  },
  {
    title: "Endoterm reaktion",
    desc: "Tar upp energi från omgivningen",
    url: "termokemi/",
    icon: "❄️",
    category: "Begrepp",
    keywords: ["endoterm", "energi", "uppta", "kyla", "positiv"]
  }
];

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
    
    const results = searchableTopics.filter(topic => {
      const titleMatch = topic.title.toLowerCase().includes(query);
      const descMatch = topic.desc.toLowerCase().includes(query);
      const keywordMatch = topic.keywords.some(kw => kw.toLowerCase().includes(query));
      return titleMatch || descMatch || keywordMatch;
    });
    
    if (results.length === 0) {
      searchResults.innerHTML = '<div class="search-no-results">Inga resultat hittades</div>';
    } else {
      searchResults.innerHTML = results.map(result => `
        <a href="${basePath}${result.url}" class="search-result-item">
          <span class="search-result-icon">${result.icon}</span>
          <div class="search-result-content">
            <div class="search-result-title">${highlightSearchMatch(result.title, query)}</div>
            <div class="search-result-desc">${result.desc}</div>
          </div>
          <span class="search-result-category">${result.category}</span>
        </a>
      `).join('');
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
