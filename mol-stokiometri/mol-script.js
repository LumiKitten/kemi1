// ============================================
// QUIZ QUESTIONS
// ============================================
const allQuestions = [
    {
        question: "Hur många partiklar är 1 mol?",
        options: ["6.022 × 10¹⁸", "6.022 × 10²³", "6.022 × 10²⁶", "1.0 × 10²³"],
        correct: 1,
        explanation: "Avogadros tal är 6.022 × 10²³ partiklar per mol."
    },
    {
        question: "Vad är molmassan för vatten (H₂O)?",
        options: ["16 g/mol", "18 g/mol", "20 g/mol", "2 g/mol"],
        correct: 1,
        explanation: "H₂O: 2×1 + 16 = 18 g/mol"
    },
    {
        question: "Hur många mol är 36 g vatten (M = 18 g/mol)?",
        options: ["0.5 mol", "1 mol", "2 mol", "18 mol"],
        correct: 2,
        explanation: "n = m/M = 36/18 = 2 mol"
    },
    {
        question: "Vad är enheten för koncentration?",
        options: ["g/mol", "mol/dm³", "mol/g", "dm³/mol"],
        correct: 1,
        explanation: "Koncentration mäts i mol per volym, alltså mol/dm³ eller mol/L."
    },
    {
        question: "0.25 mol NaCl löses i 500 mL vatten. Vad är koncentrationen?",
        options: ["0.25 M", "0.5 M", "1.0 M", "2.0 M"],
        correct: 1,
        explanation: "c = n/V = 0.25/0.5 = 0.5 mol/L"
    },
    {
        question: "Vilken formel används vid spädning?",
        options: ["c = n/V", "n = m/M", "c₁V₁ = c₂V₂", "PV = nRT"],
        correct: 2,
        explanation: "Spädningsformeln är c₁V₁ = c₂V₂"
    },
    {
        question: "I reaktionen 2H₂ + O₂ → 2H₂O, hur många mol O₂ behövs för 4 mol H₂?",
        options: ["1 mol", "2 mol", "4 mol", "8 mol"],
        correct: 1,
        explanation: "Molförhållandet är 2:1, så 4 mol H₂ kräver 2 mol O₂."
    },
    {
        question: "Vad menas med begränsande reaktant?",
        options: [
            "Den reaktant som finns i störst mängd",
            "Den reaktant som tar slut först",
            "Den reaktant som är billigast",
            "Den reaktant som reagerar långsammast"
        ],
        correct: 1,
        explanation: "Begränsande reaktant är den som tar slut först och begränsar produktmängden."
    },
    {
        question: "Vad är molmassan för NaCl? (Na = 23, Cl = 35.5)",
        options: ["23 g/mol", "35.5 g/mol", "58.5 g/mol", "11.5 g/mol"],
        correct: 2,
        explanation: "NaCl: 23 + 35.5 = 58.5 g/mol"
    },
    {
        question: "Om teoretiskt utbyte är 10 g och verkligt utbyte är 8 g, vad är procentuellt utbyte?",
        options: ["80%", "18%", "125%", "8%"],
        correct: 0,
        explanation: "Procentuellt utbyte = (8/10) × 100 = 80%"
    },
    {
        question: "Hur många gram är 0.5 mol glukos (M = 180 g/mol)?",
        options: ["90 g", "180 g", "360 g", "9 g"],
        correct: 0,
        explanation: "m = n × M = 0.5 × 180 = 90 g"
    },
    {
        question: "Vad händer med koncentrationen vid spädning?",
        options: ["Ökar", "Minskar", "Förblir samma", "Beror på ämnet"],
        correct: 1,
        explanation: "Vid spädning minskar koncentrationen eftersom volymen ökar."
    }
];

const QUESTIONS_PER_ROUND = 8;

// ============================================
// ATOMIC MASSES
// ============================================
const atomicMasses = {
    H: 1.008, He: 4.003, Li: 6.941, Be: 9.012, B: 10.81, C: 12.01,
    N: 14.01, O: 16.00, F: 19.00, Ne: 20.18, Na: 22.99, Mg: 24.31,
    Al: 26.98, Si: 28.09, P: 30.97, S: 32.07, Cl: 35.45, Ar: 39.95,
    K: 39.10, Ca: 40.08, Fe: 55.85, Cu: 63.55, Zn: 65.38, Br: 79.90,
    Ag: 107.87, I: 126.90, Au: 196.97
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
    currentQuestions = shuffleArray(allQuestions).slice(0, QUESTIONS_PER_ROUND);
    userAnswers = {};
    quizChecked = false;
    renderQuiz();
    updateQuizProgress();
}

function renderQuiz() {
    const container = document.getElementById("quizQuestions");
    if (!container) return;

    container.innerHTML = currentQuestions.map((q, qIndex) => `
    <div class="quiz-question" id="question-${qIndex}">
      <div class="question-number">Fråga ${qIndex + 1} av ${currentQuestions.length}</div>
      <h4>${q.question}</h4>
      <div class="quiz-options">
        ${q.options.map((opt, oIndex) => `
          <div class="quiz-option" data-question="${qIndex}" data-option="${oIndex}" onclick="selectOption(${qIndex}, ${oIndex})">
            <span class="option-letter">${String.fromCharCode(65 + oIndex)}</span>
            <span>${opt}</span>
          </div>
        `).join("")}
      </div>
      <div class="quiz-feedback" id="feedback-${qIndex}"></div>
    </div>
  `).join("");
}

function selectOption(questionIndex, optionIndex) {
    if (quizChecked) return;
    userAnswers[questionIndex] = optionIndex;

    document.querySelectorAll(`[data-question="${questionIndex}"]`).forEach(opt => {
        opt.classList.remove("selected");
    });
    document.querySelector(`[data-question="${questionIndex}"][data-option="${optionIndex}"]`)
        .classList.add("selected");

    updateQuizProgress();
}

function updateQuizProgress() {
    const answered = Object.keys(userAnswers).length;
    const total = currentQuestions.length;
    const progress = document.getElementById("quizProgress");
    const score = document.getElementById("quizScore");

    if (progress) progress.style.width = `${(answered / total) * 100}%`;
    if (score) score.textContent = `${answered} / ${total}`;
}

function checkAllAnswers() {
    if (quizChecked) return;
    quizChecked = true;

    let correct = 0;
    currentQuestions.forEach((q, qIndex) => {
        const userAnswer = userAnswers[qIndex];
        const isCorrect = userAnswer === q.correct;
        if (isCorrect) correct++;

        document.querySelectorAll(`[data-question="${qIndex}"]`).forEach((opt, oIndex) => {
            opt.classList.remove("selected");
            if (oIndex === q.correct) opt.classList.add("correct");
            else if (oIndex === userAnswer && !isCorrect) opt.classList.add("incorrect");
        });

        const feedback = document.getElementById(`feedback-${qIndex}`);
        if (feedback) {
            feedback.className = `quiz-feedback show ${isCorrect ? "correct" : "incorrect"}`;
            feedback.textContent = isCorrect ? "Rätt! " + q.explanation : "Fel. " + q.explanation;
        }
    });

    const score = document.getElementById("quizScore");
    if (score) score.textContent = `${correct} / ${currentQuestions.length} rätt`;
}

function resetQuiz() {
    initQuiz();
}

// ============================================
// CALCULATORS
// ============================================
function initCalcTabs() {
    const tabs = document.querySelectorAll(".calc-tab");

    tabs.forEach(tab => {
        tab.addEventListener("click", function () {
            tabs.forEach(t => t.classList.remove("active"));
            this.classList.add("active");

            document.querySelectorAll(".calc-panel").forEach(panel => {
                panel.classList.remove("active");
            });

            const panelId = this.dataset.calc + "-calc";
            const panel = document.getElementById(panelId);
            if (panel) panel.classList.add("active");
        });
    });
}

function parseFormula(formula) {
    // Simple parser for chemical formulas like H2O, NaCl, C6H12O6
    const regex = /([A-Z][a-z]?)(\d*)/g;
    const elements = {};
    let match;

    while ((match = regex.exec(formula)) !== null) {
        const element = match[1];
        const count = match[2] ? parseInt(match[2]) : 1;
        elements[element] = (elements[element] || 0) + count;
    }

    return elements;
}

function calculateMolarMass() {
    const formula = document.getElementById("formulaInput").value.trim();
    const resultEl = document.querySelector("#molmassa-calc .result-value");

    if (!formula) {
        resultEl.textContent = "-";
        return;
    }

    try {
        const elements = parseFormula(formula);
        let totalMass = 0;

        for (const [element, count] of Object.entries(elements)) {
            if (!atomicMasses[element]) {
                resultEl.textContent = "Okänt element: " + element;
                return;
            }
            totalMass += atomicMasses[element] * count;
        }

        resultEl.textContent = totalMass.toFixed(2) + " g/mol";
    } catch (e) {
        resultEl.textContent = "Ogiltig formel";
    }
}

function calculateMoles() {
    const mass = parseFloat(document.getElementById("massInput").value);
    const molarMass = parseFloat(document.getElementById("molmassInput").value);
    const resultEl = document.querySelector("#molberakning-calc .result-value");

    if (isNaN(mass) || isNaN(molarMass) || molarMass === 0) {
        resultEl.textContent = "-";
        return;
    }

    const moles = mass / molarMass;
    resultEl.textContent = moles.toFixed(4) + " mol";
}

function calculateDilution() {
    const c1 = parseFloat(document.getElementById("c1").value);
    const c2 = parseFloat(document.getElementById("c2").value);
    const v2 = parseFloat(document.getElementById("v2").value);
    const resultEl = document.querySelector("#spadning-calc .result-value");

    if (isNaN(c1) || isNaN(c2) || isNaN(v2) || c1 === 0) {
        resultEl.textContent = "- mL";
        return;
    }

    const v1 = (c2 * v2) / c1;
    resultEl.textContent = v1.toFixed(2) + " mL";
}

// ============================================
// NAVIGATION
// ============================================
function initNavigation() {
    const toggle = document.querySelector(".nav-toggle");
    const links = document.querySelector(".nav-links");

    if (toggle && links) {
        toggle.addEventListener("click", () => {
            links.classList.toggle("active");
        });

        links.querySelectorAll("a").forEach(link => {
            link.addEventListener("click", () => {
                links.classList.remove("active");
            });
        });
    }
}

// ============================================
// INITIALIZATION
// ============================================
document.addEventListener("DOMContentLoaded", () => {
    initQuiz();
    initCalcTabs();
    initNavigation();
});

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
            target.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    });
});
