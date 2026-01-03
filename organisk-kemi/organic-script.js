// ============================================
// QUIZ QUESTIONS
// ============================================
const allQuestions = [
    {
        question: "Hur många bindningar kan kol bilda?",
        options: ["2", "3", "4", "6"],
        correct: 2,
        explanation: "Kol har 4 valenselektroner och kan därför bilda 4 kovalenta bindningar."
    },
    {
        question: "Vad är formeln för alkaner?",
        options: ["CnH2n", "CnH2n+2", "CnH2n-2", "CnHn"],
        correct: 1,
        explanation: "Alkaner har formeln CnH2n+2 där alla bindningar är enkelbindningar."
    },
    {
        question: "Vad kännetecknar alkener?",
        options: ["Endast enkelbindningar", "Minst en dubbelbindning", "Minst en trippelbindning", "Inga bindningar"],
        correct: 1,
        explanation: "Alkener innehåller minst en C=C dubbelbindning."
    },
    {
        question: "Vilken funktionell grupp har alkoholer?",
        options: ["-COOH", "-CHO", "-OH", "-NH2"],
        correct: 2,
        explanation: "Alkoholer har en hydroxylgrupp (-OH)."
    },
    {
        question: "Vad är prefixet för 3 kolatomer?",
        options: ["Met-", "Et-", "Prop-", "But-"],
        correct: 2,
        explanation: "Prop- betyder 3 kolatomer (som i propan)."
    },
    {
        question: "Vad är isomerer?",
        options: [
            "Ämnen med samma struktur",
            "Ämnen med samma molekylformel men olika struktur",
            "Ämnen med olika molekylformel",
            "Samma ämne i olika faser"
        ],
        correct: 1,
        explanation: "Isomerer har samma molekylformel men atomerna sitter ihop på olika sätt."
    },
    {
        question: "Vilken funktionell grupp har karboxylsyror?",
        options: ["-OH", "-CHO", "-COOH", "-CO-"],
        correct: 2,
        explanation: "Karboxylsyror har karboxylgruppen -COOH."
    },
    {
        question: "Vad bildas när en syra och en alkohol reagerar?",
        options: ["Ester", "Aldehyd", "Keton", "Amin"],
        correct: 0,
        explanation: "En ester bildas vid reaktion mellan karboxylsyra och alkohol."
    },
    {
        question: "Vilken är enklaste alkanen?",
        options: ["Etan", "Propan", "Metan", "Butan"],
        correct: 2,
        explanation: "Metan (CH4) är den enklaste alkanen med bara ett kolatom."
    },
    {
        question: "Vad kallas -NH2-gruppen?",
        options: ["Hydroxyl", "Karboxyl", "Karbonyl", "Amino"],
        correct: 3,
        explanation: "-NH2 kallas aminogrupp och finns i aminer och aminosyror."
    },
    {
        question: "Varför kan kol bilda så många föreningar?",
        options: [
            "Det är det vanligaste grundämnet",
            "Det kan binda till sig själv och bilda kedjor",
            "Det har hög smältpunkt",
            "Det är en metall"
        ],
        correct: 1,
        explanation: "Kolets förmåga att bilda starka C-C bindningar möjliggör långa kedjor."
    },
    {
        question: "Vad skiljer aldehyder från ketoner?",
        options: [
            "Aldehyder har OH-grupp",
            "Aldehydens karbonyl sitter i änden",
            "Ketoner har dubbelbindning",
            "Ingen skillnad"
        ],
        correct: 1,
        explanation: "I aldehyder sitter karbonylgruppen i änden, i ketoner mitt i kedjan."
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
// HYDROCARBON TABS
// ============================================
function initHCTabs() {
    const tabs = document.querySelectorAll(".hc-tab");

    tabs.forEach(tab => {
        tab.addEventListener("click", function () {
            tabs.forEach(t => t.classList.remove("active"));
            this.classList.add("active");

            document.querySelectorAll(".hc-panel").forEach(panel => {
                panel.classList.remove("active");
            });

            const panelId = this.dataset.type;
            const panel = document.getElementById(panelId);
            if (panel) panel.classList.add("active");
        });
    });
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
    initHCTabs();
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
