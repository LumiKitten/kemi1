// ============================================
// REDOX QUIZ QUESTIONS - Easy to add more!
// ============================================
// Format: { question, options: [4 choices], correct: index (0-3), explanation }
const allQuestions = [
  // Grundbegrepp - Oxidation och Reduktion
  {
    question: "Vad händer vid oxidation?",
    options: ["Elektroner tas emot", "Elektroner avges", "Protoner avges", "Neutroner tas emot"],
    correct: 1,
    explanation: "Vid oxidation avger ett ämne elektroner. Oxidationstalet ökar."
  },
  {
    question: "Vad händer vid reduktion?",
    options: ["Elektroner avges", "Protoner tas emot", "Elektroner tas emot", "Oxidationstalet ökar"],
    correct: 2,
    explanation: "Vid reduktion tar ett ämne emot elektroner. Oxidationstalet minskar."
  },
  {
    question: "Vad är minnesregeln OIL RIG?",
    options: [
      "Only In Laboratories, Reactions Include Gases",
      "Oxidation Is Loss, Reduction Is Gain (av elektroner)",
      "Oxygen Is Light, Reduction Is Green",
      "Oxides Include Lithium, Rubidium Is Gold"
    ],
    correct: 1,
    explanation: "OIL RIG: Oxidation Is Loss (av elektroner), Reduction Is Gain (av elektroner)."
  },
  {
    question: "I en redoxreaktion, vad händer med antalet elektroner?",
    options: ["De försvinner", "De skapas", "Avgivna = upptagna", "Det varierar"],
    correct: 2,
    explanation: "Antalet elektroner som avges vid oxidation är alltid lika med antalet som tas emot vid reduktion."
  },
  {
    question: "Kan oxidation ske utan reduktion?",
    options: ["Ja, alltid", "Ja, ibland", "Nej, aldrig", "Endast i gaser"],
    correct: 2,
    explanation: "Oxidation och reduktion sker alltid samtidigt - elektroner måste gå någonstans."
  },
  // Oxidationsmedel och Reduktionsmedel
  {
    question: "Vad är ett oxidationsmedel?",
    options: [
      "Ett ämne som själv oxideras",
      "Ett ämne som får andra att oxideras",
      "Ett ämne som avger elektroner",
      "Ett ämne med oxidationstalet 0"
    ],
    correct: 1,
    explanation: "Ett oxidationsmedel får andra ämnen att oxideras. Själv blir det reducerat."
  },
  {
    question: "Vad är ett reduktionsmedel?",
    options: [
      "Ett ämne som tar emot elektroner",
      "Ett ämne som får andra att reduceras",
      "Ett ämne som själv reduceras",
      "Ett ämne som ökar sitt oxidationstal"
    ],
    correct: 1,
    explanation: "Ett reduktionsmedel får andra ämnen att reduceras genom att avge elektroner. Själv blir det oxiderat."
  },
  {
    question: "Vad händer med oxidationsmedlet i en redoxreaktion?",
    options: ["Det oxideras", "Det reduceras", "Inget händer", "Det försvinner"],
    correct: 1,
    explanation: "Oxidationsmedlet tar emot elektroner och blir därför reducerat."
  },
  {
    question: "Vad händer med reduktionsmedlet i en redoxreaktion?",
    options: ["Det reduceras", "Det oxideras", "Inget händer", "Det försvinner"],
    correct: 1,
    explanation: "Reduktionsmedlet avger elektroner och blir därför oxiderat."
  },
  {
    question: "Vilket av dessa är ett vanligt oxidationsmedel?",
    options: ["Mg", "Na", "O₂", "Zn"],
    correct: 2,
    explanation: "Syre (O₂) är ett starkt oxidationsmedel - det får andra ämnen att oxideras."
  },
  {
    question: "Vilka ämnen fungerar typiskt som reduktionsmedel?",
    options: ["Halogener", "Ädelgaser", "Metaller", "Syror"],
    correct: 2,
    explanation: "Metaller avger lätt elektroner och fungerar därför som reduktionsmedel."
  },
  // Oxidationstal
  {
    question: "Vilket är oxidationstalet för syre i de flesta föreningar?",
    options: ["+2", "0", "-1", "-2"],
    correct: 3,
    explanation: "Syre har oftast oxidationstalet -2 (undantag: peroxider där det är -1)."
  },
  {
    question: "Vad är oxidationstalet för alla rena grundämnen?",
    options: ["+1", "-1", "0", "Beror på ämnet"],
    correct: 2,
    explanation: "Alla rena grundämnen (t.ex. Fe, O₂, H₂) har oxidationstalet 0."
  },
  {
    question: "Vilket oxidationstal har väte i de flesta föreningar?",
    options: ["+1", "-1", "0", "+2"],
    correct: 0,
    explanation: "Väte har oftast oxidationstalet +1 (undantag: metallhydrider där det är -1)."
  },
  {
    question: "Vad händer med oxidationstalet vid oxidation?",
    options: ["Det minskar", "Det ökar", "Det förblir samma", "Det blir 0"],
    correct: 1,
    explanation: "Vid oxidation ökar oxidationstalet eftersom elektroner avges."
  },
  {
    question: "Vad händer med oxidationstalet vid reduktion?",
    options: ["Det ökar", "Det minskar", "Det förblir samma", "Det blir positivt"],
    correct: 1,
    explanation: "Vid reduktion minskar oxidationstalet eftersom elektroner tas emot."
  },
  {
    question: "Vad är oxidationstalet för Na i NaCl?",
    options: ["0", "+1", "-1", "+2"],
    correct: 1,
    explanation: "Natrium har oxidationstalet +1 i NaCl (som Na⁺-jon)."
  },
  {
    question: "Vad är oxidationstalet för Cl i NaCl?",
    options: ["0", "+1", "-1", "-2"],
    correct: 2,
    explanation: "Klor har oxidationstalet -1 i NaCl (som Cl⁻-jon)."
  },
  {
    question: "Vad är summan av alla oxidationstal i en neutral förening?",
    options: ["Alltid positivt", "Alltid negativt", "Alltid 0", "Kan vara vad som helst"],
    correct: 2,
    explanation: "I en neutral förening är summan av alla oxidationstal alltid 0."
  },
  // Spänningsserien
  {
    question: "Vilka metaller kan reducera H⁺ till H₂ enligt spänningsserien?",
    options: [
      "Metaller under väte i serien",
      "Metaller över väte i serien",
      "Alla metaller",
      "Endast ädelmetaller"
    ],
    correct: 1,
    explanation: "Metaller som ligger över väte i spänningsserien (t.ex. Zn, Fe, Mg) kan reducera H⁺ till H₂."
  },
  {
    question: "Vilken metall är det starkaste reduktionsmedlet enligt spänningsserien?",
    options: ["Guld", "Koppar", "Litium", "Järn"],
    correct: 2,
    explanation: "Litium ligger högst upp i spänningsserien och avger elektroner lättast."
  },
  {
    question: "Vilken metall är det svagaste reduktionsmedlet enligt spänningsserien?",
    options: ["Litium", "Zink", "Guld", "Järn"],
    correct: 2,
    explanation: "Guld ligger längst ner i spänningsserien och är det svagaste reduktionsmedlet."
  },
  {
    question: "Kan koppar reducera Zn²⁺-joner till metallisk zink?",
    options: ["Ja", "Nej", "Endast vid hög temperatur", "Endast i sur lösning"],
    correct: 1,
    explanation: "Nej, zink ligger över koppar i spänningsserien. Det är zink som kan reducera Cu²⁺."
  },
  {
    question: "Varför rostar inte guld?",
    options: [
      "Guld är för tungt",
      "Guld ligger under väte i spänningsserien",
      "Guld är gult",
      "Guld innehåller inget syre"
    ],
    correct: 1,
    explanation: "Guld är en ädelmetall som ligger långt ner i spänningsserien och oxideras inte lätt."
  },
  // Reaktionsexempel
  {
    question: "I reaktionen 2Mg + O₂ → 2MgO, vilket ämne oxideras?",
    options: ["O₂", "MgO", "Mg", "Inget ämne oxideras"],
    correct: 2,
    explanation: "Magnesium (Mg) oxideras - det avger elektroner och går från 0 till +2 i oxidationstal."
  },
  {
    question: "I reaktionen 2Mg + O₂ → 2MgO, vilket ämne reduceras?",
    options: ["Mg", "MgO", "O₂", "Inget ämne reduceras"],
    correct: 2,
    explanation: "Syre (O₂) reduceras - det tar emot elektroner och går från 0 till -2."
  },
  {
    question: "Är förbränning en redoxreaktion?",
    options: ["Nej, det är en värmereaktion", "Ja, alltid", "Bara ibland", "Nej, det är en syra-basreaktion"],
    correct: 1,
    explanation: "Förbränning är alltid en redoxreaktion. Bränslet oxideras och syre reduceras."
  },
  {
    question: "Vad är rost?",
    options: ["Reducerat järn", "Oxiderat järn", "Rent järn", "Järnlegering"],
    correct: 1,
    explanation: "Rost är oxiderat järn (Fe₂O₃) - resultatet av en långsam redoxreaktion."
  },
  {
    question: "Vad bildas när zink reagerar med saltsyra?",
    options: ["ZnO + H₂", "ZnCl₂ + H₂", "ZnCl + H₂O", "Zn(OH)₂"],
    correct: 1,
    explanation: "Zn + 2HCl → ZnCl₂ + H₂. Zink oxideras och väte reduceras till vätgas."
  },
  // Reaktionstyper
  {
    question: "Vilken reaktionstyp är ALLTID en redoxreaktion?",
    options: ["Fällningsreaktioner", "Neutralisation", "Förbränning", "Alla kemiska reaktioner"],
    correct: 2,
    explanation: "Förbränning är alltid en redoxreaktion där bränslet oxideras."
  },
  {
    question: "Vilken reaktionstyp är ALDRIG en redoxreaktion?",
    options: ["Förbränning", "Enkel substitution", "Syra-bas-neutralisering", "Syntes"],
    correct: 2,
    explanation: "Syra-bas-neutralisering involverar ingen elektronöverföring och är därför inte en redoxreaktion."
  },
  {
    question: "Är fällningsreaktioner redoxreaktioner?",
    options: ["Ja, alltid", "Nej, aldrig", "Ibland", "Endast med metaller"],
    correct: 1,
    explanation: "Fällningsreaktioner involverar ingen elektronöverföring - oxidationstalen ändras inte."
  }
];

// Number of questions per quiz round
const QUESTIONS_PER_ROUND = 10;

// ============================================
// OXIDATION NUMBER DATA
// ============================================
const oxidationData = {
  H2O: [
    { symbol: "H", count: 2, oxidation: "+1" },
    { symbol: "O", count: 1, oxidation: "-2" }
  ],
  NaCl: [
    { symbol: "Na", count: 1, oxidation: "+1" },
    { symbol: "Cl", count: 1, oxidation: "-1" }
  ],
  H2SO4: [
    { symbol: "H", count: 2, oxidation: "+1" },
    { symbol: "S", count: 1, oxidation: "+6" },
    { symbol: "O", count: 4, oxidation: "-2" }
  ],
  CO2: [
    { symbol: "C", count: 1, oxidation: "+4" },
    { symbol: "O", count: 2, oxidation: "-2" }
  ],
  KMnO4: [
    { symbol: "K", count: 1, oxidation: "+1" },
    { symbol: "Mn", count: 1, oxidation: "+7" },
    { symbol: "O", count: 4, oxidation: "-2" }
  ],
  Fe2O3: [
    { symbol: "Fe", count: 2, oxidation: "+3" },
    { symbol: "O", count: 3, oxidation: "-2" }
  ]
};

// ============================================
// QUIZ SYSTEM
// ============================================
let currentQuestions = [];
let userAnswers = {};
let quizChecked = false;

function shuffleArray(array) {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

function initQuiz() {
  const container = document.getElementById("quizQuestions");
  if (!container) return;

  // Shuffle all questions and pick first N
  const shuffled = shuffleArray(allQuestions);
  currentQuestions = shuffled.slice(0, QUESTIONS_PER_ROUND);
  userAnswers = {};
  quizChecked = false;

  container.innerHTML = currentQuestions
    .map((q, i) => `
      <div class="quiz-question" id="question-${i}">
        <div class="question-number">Fråga ${i + 1} av ${currentQuestions.length}</div>
        <h4>${q.question}</h4>
        <div class="quiz-options">
          ${q.options.map((opt, j) => `
            <div class="quiz-option" onclick="selectOption(${i}, ${j})" id="option-${i}-${j}">
              <span class="option-letter">${String.fromCharCode(65 + j)}.</span>
              <span>${opt}</span>
            </div>
          `).join("")}
        </div>
        <div class="quiz-feedback" id="feedback-${i}"></div>
      </div>
    `)
    .join("");

  updateQuizProgress();

  // Reset check button
  const checkBtn = document.getElementById("checkAnswersBtn");
  if (checkBtn) {
    checkBtn.disabled = false;
    checkBtn.style.opacity = "1";
  }

  // Reset progress bar color
  const progressBar = document.getElementById("quizProgress");
  if (progressBar) progressBar.style.background = "";
}

function selectOption(questionIndex, optionIndex) {
  if (quizChecked) return;

  userAnswers[questionIndex] = optionIndex;

  // Update visual selection
  const options = document.querySelectorAll(`#question-${questionIndex} .quiz-option`);
  options.forEach((opt, i) => {
    opt.classList.toggle("selected", i === optionIndex);
  });

  updateQuizProgress();
}

function updateQuizProgress() {
  const answered = Object.keys(userAnswers).length;
  const total = currentQuestions.length;
  const progress = (answered / total) * 100;

  const progressBar = document.getElementById("quizProgress");
  const scoreDisplay = document.getElementById("quizScore");

  if (progressBar) progressBar.style.width = progress + "%";
  if (scoreDisplay) scoreDisplay.textContent = `${answered} / ${total}`;
}

function checkAllAnswers() {
  if (quizChecked) return;
  quizChecked = true;

  let correct = 0;

  currentQuestions.forEach((q, i) => {
    const options = document.querySelectorAll(`#question-${i} .quiz-option`);
    const feedback = document.getElementById(`feedback-${i}`);
    const userAnswer = userAnswers[i];

    // Show correct answer
    if (options[q.correct]) options[q.correct].classList.add("correct");

    if (userAnswer !== undefined) {
      if (userAnswer === q.correct) {
        correct++;
        feedback.className = "quiz-feedback show correct";
        feedback.textContent = "✓ Rätt! " + q.explanation;
      } else {
        if (options[userAnswer]) options[userAnswer].classList.add("incorrect");
        feedback.className = "quiz-feedback show incorrect";
        feedback.textContent = "✗ Fel. " + q.explanation;
      }
    } else {
      feedback.className = "quiz-feedback show incorrect";
      feedback.textContent = "Ej besvarad. " + q.explanation;
    }
  });

  // Update score
  const scoreDisplay = document.getElementById("quizScore");
  if (scoreDisplay) {
    scoreDisplay.textContent = `${correct} / ${currentQuestions.length} rätt`;
  }

  const progressBar = document.getElementById("quizProgress");
  if (progressBar) {
    progressBar.style.width = "100%";
    progressBar.style.background = correct === currentQuestions.length ? "var(--neutral)" : "var(--base-primary)";
  }

  // Disable check button
  const checkBtn = document.getElementById("checkAnswersBtn");
  if (checkBtn) {
    checkBtn.disabled = true;
    checkBtn.style.opacity = "0.5";
  }
}

function resetQuiz() {
  initQuiz();
}

// ============================================
// OXIDATION NUMBER CALCULATOR
// ============================================
function calculateOxidationNumbers() {
  const select = document.getElementById("oxCalcCompound");
  const result = document.getElementById("oxCalcResult");

  if (!select || !result) return;

  const compound = select.value;
  const data = oxidationData[compound];

  if (!data) return;

  const subscripts = "₀₁₂₃₄₅₆₇₈₉";

  let html = '<div class="compound-display">';

  data.forEach((atom, index) => {
    const numClass = atom.oxidation.startsWith("+") ? "positive" :
      atom.oxidation.startsWith("-") ? "negative" : "zero";

    const subscript = atom.count > 1 ? subscripts[atom.count] || atom.count : "";

    html += `
      <div class="atom-ox">
        <span class="atom-symbol">${atom.symbol}${subscript}</span>
        <span class="atom-number ${numClass}">${atom.oxidation}</span>
      </div>
    `;

    if (index < data.length - 1) {
      html += '<span class="text-muted">·</span>';
    }
  });

  // Calculate sum
  let sum = 0;
  data.forEach(atom => {
    sum += parseInt(atom.oxidation) * atom.count;
  });

  html += `</div>
    <p class="text-center text-muted mt-lg">
      Summa: ${sum === 0 ? "0 (neutral förening)" : sum + " (jonladdning)"}
    </p>`;

  result.innerHTML = html;
}

// ============================================
// NAVIGATION
// ============================================
function initNavigation() {
  const navToggle = document.querySelector(".nav-toggle");
  const navLinks = document.querySelector(".nav-links");

  if (navToggle && navLinks) {
    navToggle.addEventListener("click", () => {
      navLinks.classList.toggle("active");
    });

    navLinks.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("active");
      });
    });
  }
}

// ============================================
// INITIALIZATION
// ============================================
document.addEventListener("DOMContentLoaded", () => {
  initQuiz();
  initNavigation();

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });

  // Voltage series hover effects
  document.querySelectorAll(".voltage-item").forEach((item) => {
    item.addEventListener("mouseenter", () => {
      item.style.background = "rgba(255, 255, 255, 0.05)";
    });
    item.addEventListener("mouseleave", () => {
      if (!item.classList.contains("hydrogen")) {
        item.style.background = "";
      }
    });
  });
});
