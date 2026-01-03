// ============================================
// QUIZ QUESTIONS
// ============================================
const allQuestions = [
    {
        question: "Vilken grupp kallas för alkalimetaller?",
        options: ["Grupp 17", "Grupp 18", "Grupp 1", "Grupp 2"],
        correct: 2,
        explanation: "Grupp 1 innehåller alkalimetallerna som Li, Na och K."
    },
    {
        question: "Hur många valenselektroner har grundämnen i grupp 17?",
        options: ["1", "7", "17", "8"],
        correct: 1,
        explanation: "Halogener i grupp 17 har 7 valenselektroner."
    },
    {
        question: "Vad har grundämnen i samma period gemensamt?",
        options: ["Samma antal valenselektroner", "Samma antal elektronskal", "Samma kemiska egenskaper", "Samma massa"],
        correct: 1,
        explanation: "Grundämnen i samma period har lika många elektronskal."
    },
    {
        question: "Vilken jonladdning får natrium (Na) typiskt?",
        options: ["-1", "+1", "+2", "0"],
        correct: 1,
        explanation: "Natrium har 1 valenselektron och bildar +1-joner."
    },
    {
        question: "Varför är ädelgaser oreaktiva?",
        options: ["De är för tunga", "De har fullt yttersta skal", "De är radioaktiva", "De har inga elektroner"],
        correct: 1,
        explanation: "Ädelgaser har redan fullt yttersta skal och behöver inte reagera."
    },
    {
        question: "Hur förändras atomradie åt höger i en period?",
        options: ["Ökar", "Minskar", "Förblir samma", "Varierar slumpmässigt"],
        correct: 1,
        explanation: "Atomradie minskar åt höger p.g.a. ökad kärnladdning som drar elektronerna närmare."
    },
    {
        question: "Vilket grundämne har högst elektronegativitet?",
        options: ["Natrium (Na)", "Klor (Cl)", "Fluor (F)", "Helium (He)"],
        correct: 2,
        explanation: "Fluor är det mest elektronegativa grundämnet."
    },
    {
        question: "Vilken kategori tillhör kisel (Si)?",
        options: ["Metall", "Icke-metall", "Halvmetall", "Ädelgas"],
        correct: 2,
        explanation: "Kisel är en halvmetall med egenskaper mitt emellan metaller och icke-metaller."
    },
    {
        question: "Vilken jon bildar syre (O) typiskt?",
        options: ["+2", "+1", "-1", "-2"],
        correct: 3,
        explanation: "Syre har 6 valenselektroner och behöver 2 till för fullt skal, så den bildar O²⁻."
    },
    {
        question: "Hur förändras joniseringsenergi nedåt i en grupp?",
        options: ["Ökar", "Minskar", "Förblir samma", "Varierar"],
        correct: 1,
        explanation: "Joniseringsenergi minskar nedåt eftersom yttersta elektronerna är längre från kärnan."
    },
    {
        question: "Vilka är typiska egenskaper för metaller?",
        options: ["Spröda och isolerande", "Ledande och formbara", "Gaser vid rumstemperatur", "Bildar negativa joner"],
        correct: 1,
        explanation: "Metaller leder ström och värme, och är formbara."
    },
    {
        question: "Vilken grupp innehåller halogenerna?",
        options: ["Grupp 1", "Grupp 2", "Grupp 17", "Grupp 18"],
        correct: 2,
        explanation: "Halogenerna (F, Cl, Br, I) finns i grupp 17."
    }
];

const QUESTIONS_PER_ROUND = 8;

// ============================================
// MINI PERIODIC TABLE DATA (7 rows)
// ============================================
const periodicData = [
    // Row 1
    { symbol: "H", type: "nonmetal" },
    { symbol: "", type: "empty" }, { symbol: "", type: "empty" }, { symbol: "", type: "empty" },
    { symbol: "", type: "empty" }, { symbol: "", type: "empty" }, { symbol: "", type: "empty" },
    { symbol: "", type: "empty" }, { symbol: "", type: "empty" }, { symbol: "", type: "empty" },
    { symbol: "", type: "empty" }, { symbol: "", type: "empty" }, { symbol: "", type: "empty" },
    { symbol: "", type: "empty" }, { symbol: "", type: "empty" }, { symbol: "", type: "empty" },
    { symbol: "", type: "empty" },
    { symbol: "He", type: "noble" },
    // Row 2
    { symbol: "Li", type: "alkali" }, { symbol: "Be", type: "alkaline" },
    { symbol: "", type: "empty" }, { symbol: "", type: "empty" }, { symbol: "", type: "empty" },
    { symbol: "", type: "empty" }, { symbol: "", type: "empty" }, { symbol: "", type: "empty" },
    { symbol: "", type: "empty" }, { symbol: "", type: "empty" }, { symbol: "", type: "empty" },
    { symbol: "", type: "empty" },
    { symbol: "B", type: "metalloid" }, { symbol: "C", type: "nonmetal" }, { symbol: "N", type: "nonmetal" },
    { symbol: "O", type: "nonmetal" }, { symbol: "F", type: "halogen" }, { symbol: "Ne", type: "noble" },
    // Row 3
    { symbol: "Na", type: "alkali" }, { symbol: "Mg", type: "alkaline" },
    { symbol: "", type: "empty" }, { symbol: "", type: "empty" }, { symbol: "", type: "empty" },
    { symbol: "", type: "empty" }, { symbol: "", type: "empty" }, { symbol: "", type: "empty" },
    { symbol: "", type: "empty" }, { symbol: "", type: "empty" }, { symbol: "", type: "empty" },
    { symbol: "", type: "empty" },
    { symbol: "Al", type: "metal" }, { symbol: "Si", type: "metalloid" }, { symbol: "P", type: "nonmetal" },
    { symbol: "S", type: "nonmetal" }, { symbol: "Cl", type: "halogen" }, { symbol: "Ar", type: "noble" },
    // Row 4
    { symbol: "K", type: "alkali" }, { symbol: "Ca", type: "alkaline" },
    { symbol: "Sc", type: "metal" }, { symbol: "Ti", type: "metal" }, { symbol: "V", type: "metal" },
    { symbol: "Cr", type: "metal" }, { symbol: "Mn", type: "metal" }, { symbol: "Fe", type: "metal" },
    { symbol: "Co", type: "metal" }, { symbol: "Ni", type: "metal" }, { symbol: "Cu", type: "metal" },
    { symbol: "Zn", type: "metal" }, { symbol: "Ga", type: "metal" }, { symbol: "Ge", type: "metalloid" },
    { symbol: "As", type: "metalloid" }, { symbol: "Se", type: "nonmetal" }, { symbol: "Br", type: "halogen" },
    { symbol: "Kr", type: "noble" },
    // Row 5
    { symbol: "Rb", type: "alkali" }, { symbol: "Sr", type: "alkaline" },
    { symbol: "Y", type: "metal" }, { symbol: "Zr", type: "metal" }, { symbol: "Nb", type: "metal" },
    { symbol: "Mo", type: "metal" }, { symbol: "Tc", type: "metal" }, { symbol: "Ru", type: "metal" },
    { symbol: "Rh", type: "metal" }, { symbol: "Pd", type: "metal" }, { symbol: "Ag", type: "metal" },
    { symbol: "Cd", type: "metal" }, { symbol: "In", type: "metal" }, { symbol: "Sn", type: "metal" },
    { symbol: "Sb", type: "metalloid" }, { symbol: "Te", type: "metalloid" }, { symbol: "I", type: "halogen" },
    { symbol: "Xe", type: "noble" },
    // Row 6
    { symbol: "Cs", type: "alkali" }, { symbol: "Ba", type: "alkaline" },
    { symbol: "La", type: "metal" }, { symbol: "Hf", type: "metal" }, { symbol: "Ta", type: "metal" },
    { symbol: "W", type: "metal" }, { symbol: "Re", type: "metal" }, { symbol: "Os", type: "metal" },
    { symbol: "Ir", type: "metal" }, { symbol: "Pt", type: "metal" }, { symbol: "Au", type: "metal" },
    { symbol: "Hg", type: "metal" }, { symbol: "Tl", type: "metal" }, { symbol: "Pb", type: "metal" },
    { symbol: "Bi", type: "metal" }, { symbol: "Po", type: "metalloid" }, { symbol: "At", type: "halogen" },
    { symbol: "Rn", type: "noble" },
    // Row 7
    { symbol: "Fr", type: "alkali" }, { symbol: "Ra", type: "alkaline" },
    { symbol: "Ac", type: "metal" }, { symbol: "Rf", type: "metal" }, { symbol: "Db", type: "metal" },
    { symbol: "Sg", type: "metal" }, { symbol: "Bh", type: "metal" }, { symbol: "Hs", type: "metal" },
    { symbol: "Mt", type: "metal" }, { symbol: "Ds", type: "metal" }, { symbol: "Rg", type: "metal" },
    { symbol: "Cn", type: "metal" }, { symbol: "Nh", type: "metal" }, { symbol: "Fl", type: "metal" },
    { symbol: "Mc", type: "metal" }, { symbol: "Lv", type: "metal" }, { symbol: "Ts", type: "halogen" },
    { symbol: "Og", type: "noble" }
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
// PERIODIC TABLE
// ============================================
function initPeriodicTable() {
    const container = document.getElementById("miniPeriodicTable");
    if (!container) return;

    container.innerHTML = periodicData.map(el =>
        `<div class="pt-element ${el.type}" title="${el.symbol}">${el.symbol}</div>`
    ).join("");
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
    initPeriodicTable();
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
