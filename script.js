// ============================================
// QUIZ QUESTIONS - Easy to add more!
// ============================================
// Format: { question, options: [4 choices], correct: index (0-3), explanation }
const allQuestions = [
  // pH Basics
  {
    question: "Vad är pH för en neutral lösning vid 25°C?",
    options: ["0", "7", "14", "1"],
    correct: 1,
    explanation: "pH 7 är neutralt eftersom [H⁺] = [OH⁻] = 10⁻⁷ M."
  },
  {
    question: "Vilken formel visar sambandet mellan pH och pOH?",
    options: ["pH × pOH = 14", "pH + pOH = 7", "pH + pOH = 14", "pH - pOH = 0"],
    correct: 2,
    explanation: "Vid 25°C gäller alltid att pH + pOH = 14."
  },
  {
    question: "Vilken jon gör en lösning sur?",
    options: ["OH⁻", "Na⁺", "H⁺ (H₃O⁺)", "Cl⁻"],
    correct: 2,
    explanation: "Vätejoner (H⁺) eller oxoniumjoner (H₃O⁺) gör lösningen sur."
  },
  {
    question: "Vilken jon gör en lösning basisk?",
    options: ["H⁺", "OH⁻", "Na⁺", "Cl⁻"],
    correct: 1,
    explanation: "Hydroxidjoner (OH⁻) gör lösningen basisk."
  },
  {
    question: "Vad är Kw vid 25°C?",
    options: ["10⁻⁷", "10⁻¹⁴", "14", "7"],
    correct: 1,
    explanation: "Kw = [H⁺] × [OH⁻] = 10⁻¹⁴ vid 25°C."
  },
  {
    question: "Om pH = 3, vad är pOH?",
    options: ["3", "7", "11", "14"],
    correct: 2,
    explanation: "pH + pOH = 14, så pOH = 14 - 3 = 11."
  },
  {
    question: "Om pH = 9, vad är pOH?",
    options: ["9", "5", "7", "14"],
    correct: 1,
    explanation: "pH + pOH = 14, så pOH = 14 - 9 = 5."
  },
  {
    question: "Vad är [H⁺] om pH = 5?",
    options: ["10⁻⁵ M", "10⁵ M", "5 M", "10⁻⁹ M"],
    correct: 0,
    explanation: "pH = -log[H⁺], så [H⁺] = 10⁻ᵖᴴ = 10⁻⁵ M."
  },
  {
    question: "Vad är [H⁺] om pH = 2?",
    options: ["10⁻² M", "2 M", "10⁻¹² M", "10² M"],
    correct: 0,
    explanation: "pH = -log[H⁺], så [H⁺] = 10⁻² M = 0.01 M."
  },
  {
    question: "Vad händer med pH när man tillsätter syra till en neutral lösning?",
    options: ["pH ökar", "pH minskar", "pH förblir samma", "pOH minskar"],
    correct: 1,
    explanation: "Syra tillför H⁺-joner vilket sänker pH."
  },
  {
    question: "Vad händer med pH när man tillsätter bas till en neutral lösning?",
    options: ["pH ökar", "pH minskar", "pH förblir samma", "Inget händer"],
    correct: 0,
    explanation: "Bas tillför OH⁻-joner som neutraliserar H⁺, vilket höjer pH."
  },
  // Starka och svaga syror/baser
  {
    question: "Vad är en stark syra?",
    options: [
      "En syra med högt pH",
      "En syra som dissocierar fullständigt i vatten",
      "En syra som är mycket koncentrerad",
      "En syra som är farlig"
    ],
    correct: 1,
    explanation: "Starka syror dissocierar fullständigt, dvs alla molekyler avger sina H⁺-joner."
  },
  {
    question: "Vilken av dessa är en svag syra?",
    options: ["HCl (saltsyra)", "H₂SO₄ (svavelsyra)", "CH₃COOH (ättiksyra)", "HNO₃ (salpetersyra)"],
    correct: 2,
    explanation: "Ättiksyra (CH₃COOH) dissocierar endast delvis och är därför en svag syra."
  },
  {
    question: "Vilken av dessa är en stark syra?",
    options: ["CH₃COOH", "H₂CO₃", "HCl", "H₃PO₄"],
    correct: 2,
    explanation: "Saltsyra (HCl) dissocierar fullständigt och är därför en stark syra."
  },
  {
    question: "Vilken av dessa är en stark bas?",
    options: ["NH₃", "NaHCO₃", "NaOH", "Mg(OH)₂"],
    correct: 2,
    explanation: "Natriumhydroxid (NaOH) dissocierar fullständigt och är därför en stark bas."
  },
  {
    question: "Vad händer när en stark syra löses i vatten?",
    options: [
      "Den dissocierar delvis",
      "Den dissocierar fullständigt",
      "Den bildar en buffert",
      "pH blir 7"
    ],
    correct: 1,
    explanation: "Starka syror dissocierar fullständigt - alla molekyler avger H⁺."
  },
  {
    question: "Vilken bas finns i bakpulver?",
    options: ["NaOH", "KOH", "NaHCO₃", "NH₃"],
    correct: 2,
    explanation: "Bakpulver innehåller natriumvätekarbonat (NaHCO₃), en svag bas."
  },
  {
    question: "Vilken syra finns i vinäger?",
    options: ["HCl", "H₂SO₄", "CH₃COOH", "HNO₃"],
    correct: 2,
    explanation: "Vinäger innehåller ättiksyra (CH₃COOH)."
  },
  {
    question: "Vilken syra finns i citrusfrukter?",
    options: ["Mjölksyra", "Citronsyra", "Saltsyra", "Svavelsyra"],
    correct: 1,
    explanation: "Citrusfrukter innehåller citronsyra (C₆H₈O₇)."
  },
  // Neutralisation
  {
    question: "Vad bildas när en syra reagerar med en bas?",
    options: ["Bara vatten", "Bara salt", "Salt och vatten", "Koldioxid och vatten"],
    correct: 2,
    explanation: "Neutralisation: Syra + Bas → Salt + H₂O"
  },
  {
    question: "Vad kallas reaktionen när en syra neutraliserar en bas?",
    options: ["Oxidation", "Reduktion", "Neutralisation", "Fällning"],
    correct: 2,
    explanation: "När syra och bas reagerar kallas det neutralisation."
  },
  {
    question: "Vilket salt bildas när HCl reagerar med NaOH?",
    options: ["NaCl", "KCl", "CaCl₂", "MgCl₂"],
    correct: 0,
    explanation: "HCl + NaOH → NaCl + H₂O. Natriumklorid (koksalt) bildas."
  },
  {
    question: "Vilket pH har en neutral lösning av salt?",
    options: ["0", "7", "14", "Varierar"],
    correct: 1,
    explanation: "En neutral saltlösning (t.ex. NaCl) har pH ≈ 7."
  },
  // Joner och koncentration
  {
    question: "Vad är oxoniumjon?",
    options: ["OH⁻", "H₃O⁺", "Na⁺", "Cl⁻"],
    correct: 1,
    explanation: "Oxoniumjon (H₃O⁺) är vad H⁺ bildar i vatten."
  },
  {
    question: "Vad händer med [OH⁻] om [H⁺] ökar?",
    options: ["[OH⁻] ökar", "[OH⁻] minskar", "[OH⁻] förblir samma", "Inget samband finns"],
    correct: 1,
    explanation: "Produkten [H⁺] × [OH⁻] = 10⁻¹⁴ är konstant, så om [H⁺] ökar måste [OH⁻] minska."
  },
  {
    question: "Hur mycket starkare är en syra med pH 2 jämfört med pH 4?",
    options: ["2 gånger", "10 gånger", "100 gånger", "1000 gånger"],
    correct: 2,
    explanation: "pH-skalan är logaritmisk. Varje steg = 10× skillnad. 2 steg = 10² = 100 gånger."
  },
  // Vardagsexempel
  {
    question: "Vilket pH har magsyra ungefär?",
    options: ["1-2", "5-6", "7", "10-11"],
    correct: 0,
    explanation: "Magsyra (HCl) är mycket sur med pH omkring 1-2."
  },
  {
    question: "Vilket pH har tvål ungefär?",
    options: ["3-4", "7", "9-10", "14"],
    correct: 2,
    explanation: "Tvål är basisk med pH omkring 9-10."
  },
  {
    question: "Vilken syra finns i bilbatterier?",
    options: ["Saltsyra", "Svavelsyra", "Salpetersyra", "Ättiksyra"],
    correct: 1,
    explanation: "Bilbatterier innehåller svavelsyra (H₂SO₄)."
  },
  {
    question: "Vad använder man för att neutralisera magsyra i magen?",
    options: ["Mer syra", "Baser (antacida)", "Salt", "Vatten"],
    correct: 1,
    explanation: "Magsyraneutraliserare (antacida) innehåller baser som neutraliserar överskott av HCl."
  }
];

// Number of questions per quiz round
const QUESTIONS_PER_ROUND = 10;

// ============================================
// pH SCALE EXAMPLES
// ============================================
const phExamples = [
  { ph: 0, name: "Batterisyra", category: "acid" },
  { ph: 1, name: "Magsyra", category: "acid" },
  { ph: 2, name: "Citronsaft, vinäger", category: "acid" },
  { ph: 3, name: "Apelsinjuice", category: "acid" },
  { ph: 4, name: "Surt regn, tomatsaft", category: "acid" },
  { ph: 5, name: "Kaffe", category: "acid" },
  { ph: 6, name: "Mjölk, saliv", category: "acid" },
  { ph: 7, name: "Rent vatten", category: "neutral" },
  { ph: 8, name: "Havsvatten, ägg", category: "base" },
  { ph: 9, name: "Bakpulver", category: "base" },
  { ph: 10, name: "Tvål", category: "base" },
  { ph: 11, name: "Ammoniak", category: "base" },
  { ph: 12, name: "Kalk", category: "base" },
  { ph: 13, name: "Ugnsrengöring", category: "base" },
  { ph: 14, name: "Avloppsöppnare (NaOH)", category: "base" }
];

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
      <div class="quiz-question" data-question="${i}">
        <div class="question-number">Fråga ${i + 1} av ${currentQuestions.length}</div>
        <h4>${q.question}</h4>
        <div class="quiz-options">
          ${q.options.map((opt, j) => `
            <div class="quiz-option" data-question="${i}" data-option="${j}" onclick="selectOption(${i}, ${j})">
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

  const options = document.querySelectorAll(`[data-question="${questionIndex}"].quiz-option`);
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
  quizChecked = true;
  let correct = 0;

  currentQuestions.forEach((q, i) => {
    const options = document.querySelectorAll(`[data-question="${i}"].quiz-option`);
    const feedback = document.getElementById(`feedback-${i}`);
    const userAnswer = userAnswers[i];

    options.forEach((opt, j) => {
      opt.classList.remove("selected");
      if (j === q.correct) {
        opt.classList.add("correct");
      } else if (j === userAnswer && userAnswer !== q.correct) {
        opt.classList.add("incorrect");
      }
    });

    if (userAnswer === q.correct) {
      correct++;
      feedback.className = "quiz-feedback show correct";
      feedback.textContent = "✓ Rätt! " + q.explanation;
    } else if (userAnswer !== undefined) {
      feedback.className = "quiz-feedback show incorrect";
      feedback.textContent = "✗ Fel. " + q.explanation;
    } else {
      feedback.className = "quiz-feedback show incorrect";
      feedback.textContent = "Ej besvarad. " + q.explanation;
    }
  });

  const scoreDisplay = document.getElementById("quizScore");
  if (scoreDisplay) {
    scoreDisplay.textContent = `${correct} / ${currentQuestions.length} rätt`;
  }
}

function resetQuiz() {
  initQuiz();
}

// ============================================
// pH EXAMPLES & DISPLAY
// ============================================
function initPhExamples() {
  const container = document.getElementById("phExamples");
  if (!container) return;

  container.innerHTML = phExamples
    .map((ex) => {
      let bgColor = "var(--neutral)";
      if (ex.category === "acid") {
        bgColor = `hsl(${(ex.ph / 7) * 60}, 80%, 50%)`;
      } else if (ex.category === "base") {
        bgColor = `hsl(${200 + ((ex.ph - 7) / 7) * 60}, 70%, 50%)`;
      }
      return `
        <li>
          <span class="ph-badge" style="background: ${bgColor}; color: white;">pH ${ex.ph}</span>
          <span>${ex.name}</span>
        </li>
      `;
    })
    .join("");
}

function formatConcentration(exponent) {
  if (exponent === 0) return "1 M";
  return `10<sup>${exponent}</sup> M`;
}

function updatePhDisplay(ph) {
  const phValue = document.getElementById("phValue");
  const phValueBox = document.getElementById("phValueBox");
  const hConcentration = document.getElementById("hConcentration");
  const ohConcentration = document.getElementById("ohConcentration");
  const phClassification = document.getElementById("phClassification");

  if (!phValue) return;

  const roundedPh = Math.round(ph * 10) / 10;
  phValue.textContent = roundedPh.toFixed(1);

  const hExp = -ph;
  const ohExp = -(14 - ph);

  if (hConcentration) hConcentration.innerHTML = formatConcentration(Math.round(hExp * 10) / 10);
  if (ohConcentration) ohConcentration.innerHTML = formatConcentration(Math.round(ohExp * 10) / 10);

  let classification, boxClass;
  if (ph < 6.5) {
    classification = "Sur";
    boxClass = "acid";
  } else if (ph > 7.5) {
    classification = "Basisk";
    boxClass = "base";
  } else {
    classification = "Neutral";
    boxClass = "neutral";
  }

  if (phClassification) phClassification.textContent = classification;
  if (phValueBox) phValueBox.className = "ph-value-box " + boxClass;
}

function updateIonDisplay(hExp) {
  const ionH = document.getElementById("ionH");
  const ionOH = document.getElementById("ionOH");
  if (!ionH || !ionOH) return;

  const ohExp = -14 - hExp;
  ionH.innerHTML = `10<sup>${hExp}</sup> M`;
  ionOH.innerHTML = `10<sup>${ohExp}</sup> M`;
}

// ============================================
// CALCULATOR
// ============================================
function calculate() {
  const calcType = document.getElementById("calcType");
  const input = parseFloat(document.getElementById("calcInput")?.value);
  const calcPh = document.getElementById("calcPh");
  const calcPoh = document.getElementById("calcPoh");

  if (!calcType || !calcPh || !calcPoh) return;

  if (isNaN(input) || input <= 0) {
    calcPh.textContent = "Ogiltigt";
    calcPoh.textContent = "Ogiltigt";
    return;
  }

  let ph, poh;

  if (calcType.value === "concentration-to-ph") {
    ph = -Math.log10(input);
    poh = 14 - ph;
  } else {
    ph = input;
    poh = 14 - ph;
  }

  if (ph < 0 || ph > 14) {
    calcPh.textContent = "Utanför intervall";
    calcPoh.textContent = "Utanför intervall";
    return;
  }

  calcPh.textContent = ph.toFixed(2);
  calcPoh.textContent = poh.toFixed(2);
}

function updateCalcLabel() {
  const calcType = document.getElementById("calcType");
  const label = document.getElementById("calcInputLabel");
  const input = document.getElementById("calcInput");

  if (!calcType || !label || !input) return;

  if (calcType.value === "concentration-to-ph") {
    label.innerHTML = "[H<sup>+</sup>] i mol/L (t.ex. 0.001):";
    input.placeholder = "0.001";
  } else {
    label.innerHTML = "pH-värde (0-14):";
    input.placeholder = "7";
  }
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
  initPhExamples();
  initQuiz();
  initNavigation();

  const phSlider = document.getElementById("phSlider");
  if (phSlider) {
    phSlider.addEventListener("input", (e) => updatePhDisplay(parseFloat(e.target.value)));
    updatePhDisplay(7);
  }

  const ionSlider = document.getElementById("ionSlider");
  if (ionSlider) {
    ionSlider.addEventListener("input", (e) => updateIonDisplay(parseFloat(e.target.value)));
    updateIonDisplay(-7);
  }

  const calcType = document.getElementById("calcType");
  if (calcType) {
    calcType.addEventListener("change", updateCalcLabel);
  }

  const calcInput = document.getElementById("calcInput");
  if (calcInput) {
    calcInput.addEventListener("keypress", (e) => {
      if (e.key === "Enter") calculate();
    });
  }
});

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
});
