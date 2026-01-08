// ============================================
// QUIZ QUESTIONS
// ============================================
const allQuestions = [
    {
        question: "Vilken partikel bestämmer vilket grundämne en atom tillhör?",
        options: ["Elektron", "Neutron", "Proton", "Foton"],
        correct: 2,
        explanation: "Antalet protoner (atomnumret) bestämmer vilket grundämne atomen är."
    },
    {
        question: "Vad är laddningen på en elektron?",
        options: ["+1", "-1", "0", "+2"],
        correct: 1,
        explanation: "Elektroner har laddningen -1."
    },
    {
        question: "Var finns protonerna i en atom?",
        options: ["I elektronskalen", "I kärnan", "Utanför atomen", "Överallt"],
        correct: 1,
        explanation: "Protoner finns i atomkärnan tillsammans med neutroner."
    },
    {
        question: "Vad är isotoper?",
        options: [
            "Atomer med olika antal protoner",
            "Atomer med olika antal elektroner",
            "Atomer med olika antal neutroner",
            "Atomer av olika grundämnen"
        ],
        correct: 2,
        explanation: "Isotoper är atomer av samma grundämne med olika antal neutroner."
    },
    {
        question: "Om en atom har atomnummer 17 och masstal 35, hur många neutroner har den?",
        options: ["17", "18", "35", "52"],
        correct: 1,
        explanation: "Neutroner = Masstal - Atomnummer = 35 - 17 = 18."
    },
    {
        question: "Hur många elektroner får plats i K-skalet?",
        options: ["2", "8", "18", "32"],
        correct: 0,
        explanation: "K-skalet (det innersta) rymmer maximalt 2 elektroner."
    },
    {
        question: "Vad är valenselektroner?",
        options: [
            "Elektroner i kärnan",
            "Elektroner i det innersta skalet",
            "Elektroner i det yttersta skalet",
            "Elektroner utan laddning"
        ],
        correct: 2,
        explanation: "Valenselektroner är de elektroner som finns i det yttersta skalet."
    },
    {
        question: "Vad har natrium (Na, Z=11) för elektronkonfiguration?",
        options: ["2, 8", "2, 9", "2, 8, 1", "2, 8, 2"],
        correct: 2,
        explanation: "Natrium har 11 elektroner: 2 i K-skalet, 8 i L-skalet och 1 i M-skalet."
    },
    {
        question: "Vem upptäckte atomkärnan?",
        options: ["Thomson", "Bohr", "Rutherford", "Dalton"],
        correct: 2,
        explanation: "Rutherford upptäckte kärnan genom sitt guldfolieexperiment 1911."
    },
    {
        question: "Vad strävar atomer efter kemiskt?",
        options: [
            "Att få fler protoner",
            "Att få fullt yttersta skal (ädelgasstruktur)",
            "Att bli radioaktiva",
            "Att förlora alla elektroner"
        ],
        correct: 1,
        explanation: "Atomer strävar efter ädelgasstruktur med fullt yttersta elektronskal."
    },
    {
        question: "Vilken partikel har nästan ingen massa?",
        options: ["Proton", "Neutron", "Elektron", "Alla har samma massa"],
        correct: 2,
        explanation: "Elektroner har mycket liten massa jämfört med protoner och neutroner."
    },
    {
        question: "Om en jon har laddningen +2, vad har hänt?",
        options: [
            "Den har tagit upp 2 elektroner",
            "Den har förlorat 2 elektroner",
            "Den har fått 2 extra protoner",
            "Den har förlorat 2 protoner"
        ],
        correct: 1,
        explanation: "En positiv laddning innebär att atomen förlorat elektroner."
    },
    // NEW QUESTIONS - Excitation and average atomic mass
    {
        question: "Vad händer när en elektron exciteras?",
        options: [
            "Den lämnar atomen helt",
            "Den hoppar till ett högre energiskal",
            "Den bildar en jon",
            "Den försvinner"
        ],
        correct: 1,
        explanation: "Vid excitation absorberar elektronen energi och hoppar till ett högre energinivå."
    },
    {
        question: "Vad händer när en exciterad elektron återgår till grundtillståndet?",
        options: [
            "Atomen exploderar",
            "Ljus avges",
            "Elektronen försvinner",
            "Ingenting"
        ],
        correct: 1,
        explanation: "När elektronen faller tillbaka avges energin som ljus (foton)."
    },
    {
        question: "Klor har två stabila isotoper: 75% ³⁵Cl och 25% ³⁷Cl. Vad är ungefärlig genomsnittlig atommassa?",
        options: ["35 u", "35,5 u", "36 u", "37 u"],
        correct: 1,
        explanation: "M = 0,75×35 + 0,25×37 = 26,25 + 9,25 = 35,5 u"
    },
    {
        question: "Vad är skillnaden mellan excitation och jonisation?",
        options: [
            "Ingen skillnad",
            "Vid excitation stannar elektronen i atomen, vid jonisation lämnar den",
            "Vid jonisation stannar elektronen i atomen",
            "Excitation sker bara i gaser"
        ],
        correct: 1,
        explanation: "Vid excitation hoppar elektronen till högre skal men stannar kvar. Vid jonisation lämnar den atomen helt."
    },
    {
        question: "Varför har neon en heltals atommassa (20) medan klor har 35,5?",
        options: [
            "Neon är tyngre",
            "Klor har isotoper med olika abundans",
            "Neon har inga neutroner",
            "Klor har fler protoner"
        ],
        correct: 1,
        explanation: "Klor har två isotoper (35 och 37) i ojämn fördelning, vilket ger medelvärdet 35,5."
    },
    {
        question: "Vad är ett emissionsspektrum?",
        options: [
            "En lista på alla grundämnen",
            "De specifika våglängder av ljus som ett ämne avger",
            "Ett sätt att mäta massa",
            "En typ av kemisk bindning"
        ],
        correct: 1,
        explanation: "Varje grundämne har ett unikt emissionsspektrum som fungerar som ett fingeravtryck."
    }
];

const QUESTIONS_PER_ROUND = 8;

// ============================================
// ELEMENT DATA
// ============================================
const elements = {
    Na: { z: 11, name: "Natrium", config: [2, 8, 1], valence: 1 },
    Cl: { z: 17, name: "Klor", config: [2, 8, 7], valence: 7 },
    O: { z: 8, name: "Syre", config: [2, 6], valence: 6 },
    C: { z: 6, name: "Kol", config: [2, 4], valence: 4 },
    Ne: { z: 10, name: "Neon", config: [2, 8], valence: 8 }
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
// SHELL VISUALIZER
// ============================================
function initShellVisualizer() {
    const buttons = document.querySelectorAll(".element-btn");

    buttons.forEach(btn => {
        btn.addEventListener("click", function () {
            buttons.forEach(b => b.classList.remove("active"));
            this.classList.add("active");
            showElement(this.dataset.element);
        });
    });

    showElement("Na");
}

function showElement(symbol) {
    const element = elements[symbol];
    if (!element) return;

    const shellNames = ["K", "L", "M", "N"];
    const diagram = document.getElementById("shellDiagram");
    const info = document.getElementById("configInfo");

    if (diagram) {
        diagram.innerHTML = element.config.map((electrons, i) => `
      <div class="shell-visual">
        <div class="shell-circle">${electrons}</div>
        <span class="shell-label">${shellNames[i]}-skal</span>
      </div>
    `).join("");
    }

    if (info) {
        info.innerHTML = `
      <div class="config-notation">${element.name} (${symbol}): ${element.config.join(", ")}</div>
      <p class="valence-info">Valenselektroner: <strong>${element.valence}</strong></p>
    `;
    }
}

// ============================================
// PARTICLE CALCULATOR
// ============================================
function calculateParticles() {
    const z = parseInt(document.getElementById("atomNumber").value) || 0;
    const a = parseInt(document.getElementById("massNumber").value) || 0;
    const charge = parseInt(document.getElementById("ionCharge").value) || 0;

    const protons = z;
    const neutrons = a - z;
    const electrons = z - charge;

    document.getElementById("resultProtons").textContent = protons;
    document.getElementById("resultNeutrons").textContent = neutrons >= 0 ? neutrons : "?";
    document.getElementById("resultElectrons").textContent = electrons;

    // Calculate electron config
    const config = calculateElectronConfig(electrons);
    document.getElementById("configValue").textContent = config.join(", ");
}

function calculateElectronConfig(electrons) {
    const maxPerShell = [2, 8, 18, 32];
    const config = [];
    let remaining = electrons;

    for (let i = 0; i < maxPerShell.length && remaining > 0; i++) {
        const inShell = Math.min(remaining, maxPerShell[i]);
        config.push(inShell);
        remaining -= inShell;
    }

    return config.length > 0 ? config : [0];
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
    initShellVisualizer();
    initNavigation();
    calculateParticles();

    // Auto-update calculator on input change
    document.getElementById("atomNumber")?.addEventListener("input", calculateParticles);
    document.getElementById("massNumber")?.addEventListener("input", calculateParticles);
    document.getElementById("ionCharge")?.addEventListener("change", calculateParticles);
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
