// ============================================
// QUIZ QUESTIONS
// ============================================
const allQuestions = [
    {
        question: "Vilken typ av bindning bildas mellan natrium (Na) och klor (Cl)?",
        options: ["Kovalent bindning", "Jonbindning", "Metallbindning", "Vätebindning"],
        correct: 1,
        explanation: "Na är metall och Cl är icke-metall, så de bildar jonbindning genom elektronöverföring."
    },
    {
        question: "Vad delar atomer i en kovalent bindning?",
        options: ["Protoner", "Neutroner", "Elektronpar", "Joner"],
        correct: 2,
        explanation: "I kovalent bindning delar atomer elektronpar."
    },
    {
        question: "Varför leder metaller elektricitet?",
        options: ["De har fria protoner", "De har delokaliserade elektroner", "De är magnetiska", "De är tunga"],
        correct: 1,
        explanation: "Metallers fria elektroner i 'elektronhavet' kan röra sig och leda ström."
    },
    {
        question: "Vilken molekyl är en dipol?",
        options: ["CO₂ (linjär)", "H₂O (böjd)", "N₂", "O₂"],
        correct: 1,
        explanation: "H₂O är böjd, så de polära bindningarna tar inte ut varandra."
    },
    {
        question: "Vilken intermolekylär kraft är starkast?",
        options: ["Londonkrafter", "Dipol-dipol", "Vätebindning", "Alla är lika starka"],
        correct: 2,
        explanation: "Vätebindning är den starkaste typen av intermolekylär kraft."
    },
    {
        question: "Jonföreningar leder ström...",
        options: ["Alltid", "Endast som fasta", "Endast i smälta eller lösning", "Aldrig"],
        correct: 2,
        explanation: "Jonerna måste kunna röra sig fritt, vilket de kan i smälta eller lösning."
    },
    {
        question: "Vad är oktettregeln?",
        options: [
            "Atomer vill ha 8 protoner",
            "Atomer strävar efter 8 valenselektroner",
            "Molekyler har alltid 8 atomer",
            "Det finns 8 typer av bindningar"
        ],
        correct: 1,
        explanation: "Oktettregeln säger att atomer strävar efter 8 elektroner i yttersta skalet."
    },
    {
        question: "Vad är en polär kovalent bindning?",
        options: [
            "Elektroner delas lika",
            "Elektroner dras mer mot en atom",
            "Elektroner överförs helt",
            "Inga elektroner delas"
        ],
        correct: 1,
        explanation: "I polär kovalent bindning dras elektronerna mer mot den mer elektronegativa atomen."
    },
    {
        question: "Vilken egenskap har INTE jonföreningar?",
        options: ["Hög smältpunkt", "Spröda", "Formbarhet", "Leder ström i lösning"],
        correct: 2,
        explanation: "Jonföreningar är spröda, inte formbara. Metaller är formbara."
    },
    {
        question: "Vätebindning uppstår när väte är bundet till...",
        options: ["Kol", "Syre, kväve eller fluor", "Natrium", "Helium"],
        correct: 1,
        explanation: "Vätebindning bildas när H är bundet till N, O eller F."
    },
    {
        question: "Vad förklarar vattnets höga kokpunkt?",
        options: ["Jonbindning", "Metallbindning", "Vätebindning", "Londonkrafter"],
        correct: 2,
        explanation: "Vätebindningar mellan vattenmolekyler gör att det krävs mer energi för att koka."
    },
    {
        question: "Vilken bindningstyp finns i diamant (C)?",
        options: ["Jonbindning", "Metallbindning", "Kovalent bindning", "Vätebindning"],
        correct: 2,
        explanation: "Diamant består av kolatomer bundna med starka kovalenta bindningar."
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
