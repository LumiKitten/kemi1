// ============================================
// QUIZ QUESTIONS
// ============================================
const allQuestions = [
    {
        question: "Vad betyder ΔH < 0?",
        options: ["Endoterm reaktion", "Exoterm reaktion", "Ingen reaktion", "Neutral reaktion"],
        correct: 1,
        explanation: "Negativt ΔH betyder att systemet avger energi – en exoterm reaktion."
    },
    {
        question: "Vid en endoterm reaktion...",
        options: [
            "Blir omgivningen varmare",
            "Blir omgivningen kallare",
            "Förändras inte temperaturen",
            "Frigörs ljus"
        ],
        correct: 1,
        explanation: "Endoterma reaktioner tar upp värme från omgivningen, som blir kallare."
    },
    {
        question: "Vad är aktiveringsenergi?",
        options: [
            "Energin som frigörs vid reaktion",
            "Energin som krävs för att starta reaktionen",
            "Energin i produkterna",
            "Energin i reaktanterna"
        ],
        correct: 1,
        explanation: "Aktiveringsenergi är den minsta energi som behövs för att en reaktion ska starta."
    },
    {
        question: "Enligt Hess lag beror ΔH på...",
        options: [
            "Reaktionsvägen",
            "Katalysatorn",
            "Endast start- och slutpunkt",
            "Reaktionshastigheten"
        ],
        correct: 2,
        explanation: "Hess lag säger att ΔH endast beror på start- och sluttillstånd, inte på vägen."
    },
    {
        question: "Vilket är ett exempel på exoterm reaktion?",
        options: ["Fotosyntes", "Smältning av is", "Förbränning", "Avdunstning"],
        correct: 2,
        explanation: "Förbränning frigör värme och är en typisk exoterm reaktion."
    },
    {
        question: "Vad gör en katalysator med aktiveringsenergin?",
        options: ["Ökar den", "Minskar den", "Påverkar den inte", "Tar bort den helt"],
        correct: 1,
        explanation: "Katalysatorer sänker aktiveringsenergin och gör reaktionen snabbare."
    },
    {
        question: "I ett energidiagram, var finns reaktanterna i en exoterm reaktion?",
        options: [
            "Högre energinivå än produkterna",
            "Lägre energinivå än produkterna",
            "Samma nivå",
            "Det varierar"
        ],
        correct: 0,
        explanation: "I exoterma reaktioner har reaktanterna högre energi, och energi frigörs."
    },
    {
        question: "Vad är standardbildningsentalpi?",
        options: [
            "Energin vid 0°C",
            "ΔH när 1 mol bildas från grundämnen",
            "Summan av alla energier",
            "Aktiveringsenergin"
        ],
        correct: 1,
        explanation: "Standardbildningsentalpi är ΔH när 1 mol av ett ämne bildas från sina grundämnen."
    },
    {
        question: "Om ΔH för reaktion A → B är +50 kJ, vad är ΔH för B → A?",
        options: ["+50 kJ", "-50 kJ", "0 kJ", "100 kJ"],
        correct: 1,
        explanation: "Om reaktionen vänds, byter ΔH tecken."
    },
    {
        question: "Vilken reaktion har ΔH > 0?",
        options: ["Exoterm", "Endoterm", "Spontan", "Neutralisation"],
        correct: 1,
        explanation: "Endoterma reaktioner har positivt ΔH eftersom de tar upp energi."
    },
    {
        question: "Vad är enhet för entalpi?",
        options: ["Joule (J)", "Kelvin (K)", "Mol", "Pascal (Pa)"],
        correct: 0,
        explanation: "Entalpi mäts i joule (J) eller kilojoule (kJ)."
    },
    {
        question: "Fotosyntes är en...",
        options: ["Exoterm reaktion", "Endoterm reaktion", "Neutral process", "Katalytisk reaktion"],
        correct: 1,
        explanation: "Fotosyntes tar upp ljusenergi och är därför endoterm."
    },
    // NEW QUESTIONS - Värmeberäkningar och energidiagram
    {
        question: "Vilken formel används för att beräkna värmeenergi?",
        options: ["E = mc²", "Q = mcΔT", "pV = nRT", "n = m/M"],
        correct: 1,
        explanation: "Q = mcΔT där m är massa, c är specifik värmekapacitet och ΔT är temperaturändring."
    },
    {
        question: "Vattnets specifika värmekapacitet är 4,18 J/(g·K). Vad krävs för att värma 100 g vatten 10°C?",
        options: ["418 J", "4180 J", "41800 J", "41,8 J"],
        correct: 1,
        explanation: "Q = 100 × 4,18 × 10 = 4180 J"
    },
    {
        question: "I ett energidiagram, vad representerar höjden på 'kullen' mellan reaktanter och produkter?",
        options: ["Entalpiändringen", "Aktiveringsenergin", "Reaktionshastigheten", "Temperaturen"],
        correct: 1,
        explanation: "Toppen visar aktiveringsenergin - energin som behövs för att starta reaktionen."
    },
    {
        question: "Hur påverkas ΔH av en katalysator?",
        options: ["ΔH ökar", "ΔH minskar", "ΔH är oförändrad", "ΔH byter tecken"],
        correct: 2,
        explanation: "En katalysator ändrar INTE ΔH - bara aktiveringsenergin sänks."
    },
    {
        question: "Vad är förbränningsentalpi?",
        options: [
            "Energin för att bryta bindningar",
            "ΔH när 1 mol ämne förbränns fullständigt",
            "Temperaturen vid förbränning",
            "Aktiveringsenergin för förbränning"
        ],
        correct: 1,
        explanation: "Förbränningsentalpi är ΔH när 1 mol av ett ämne förbränns helt med O₂."
    },
    {
        question: "Vad händer med temperaturen i omgivningen vid en exoterm reaktion?",
        options: ["Temperaturen sjunker", "Temperaturen ökar", "Oförändrad", "Beror på reaktanten"],
        correct: 1,
        explanation: "Exoterma reaktioner avger värme till omgivningen, som blir varmare."
    }
];

const QUESTIONS_PER_ROUND = 8;

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
// ENERGY DIAGRAM
// ============================================
function initDiagramToggle() {
    const buttons = document.querySelectorAll(".diagram-btn");

    buttons.forEach(btn => {
        btn.addEventListener("click", function () {
            buttons.forEach(b => b.classList.remove("active"));
            this.classList.add("active");
            updateDiagram(this.dataset.type);
        });
    });
}

function updateDiagram(type) {
    const reactants = document.getElementById("reactantsLevel");
    const products = document.getElementById("productsLevel");
    const arrow = document.getElementById("deltaHArrow");
    const label = document.getElementById("deltaHLabel");

    if (type === "endo") {
        // Endothermic: products higher than reactants
        reactants.style.top = "60%";
        products.style.top = "20%";
        products.style.bottom = "auto";
        products.classList.add("endo");
        if (arrow) {
            arrow.style.top = "25%";
            arrow.style.height = "30%";
            arrow.style.background = "#3498db";
            arrow.style.setProperty("--arrow-color", "#3498db");
        }
        if (label) {
            label.textContent = "ΔH > 0";
            label.style.color = "#3498db";
        }
    } else {
        // Exothermic: products lower than reactants
        reactants.style.top = "30%";
        products.style.top = "auto";
        products.style.bottom = "20%";
        products.classList.remove("endo");
        if (arrow) {
            arrow.style.top = "35%";
            arrow.style.height = "35%";
            arrow.style.background = "#e74c3c";
            arrow.style.setProperty("--arrow-color", "#e74c3c");
        }
        if (label) {
            label.textContent = "ΔH < 0";
            label.style.color = "#e74c3c";
        }
    }
}

// ============================================
// ENTHALPY CALCULATOR
// ============================================
function calculateEnthalpy() {
    const prod1 = parseFloat(document.getElementById("prod1").value) || 0;
    const prod1n = parseFloat(document.getElementById("prod1n").value) || 0;
    const prod2 = parseFloat(document.getElementById("prod2").value) || 0;
    const prod2n = parseFloat(document.getElementById("prod2n").value) || 0;

    const react1 = parseFloat(document.getElementById("react1").value) || 0;
    const react1n = parseFloat(document.getElementById("react1n").value) || 0;
    const react2 = parseFloat(document.getElementById("react2").value) || 0;
    const react2n = parseFloat(document.getElementById("react2n").value) || 0;

    const sumProducts = (prod1 * prod1n) + (prod2 * prod2n);
    const sumReactants = (react1 * react1n) + (react2 * react2n);
    const deltaH = sumProducts - sumReactants;

    const resultEl = document.querySelector("#enthalpyResult .result-value");
    const interpEl = document.getElementById("resultInterp");

    if (resultEl) {
        resultEl.textContent = deltaH.toFixed(1) + " kJ";
        resultEl.style.color = deltaH < 0 ? "#e74c3c" : "#3498db";
    }

    if (interpEl) {
        if (deltaH < 0) {
            interpEl.textContent = "Exoterm reaktion – värme frigörs";
            interpEl.className = "result-interpretation exo";
        } else if (deltaH > 0) {
            interpEl.textContent = "Endoterm reaktion – värme absorberas";
            interpEl.className = "result-interpretation endo";
        } else {
            interpEl.textContent = "";
            interpEl.className = "result-interpretation";
        }
    }
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
    initDiagramToggle();
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
