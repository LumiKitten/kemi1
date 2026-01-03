// ============================================
// QUIZ QUESTIONS
// ============================================
const allQuestions = [
    {
        question: "Vilket av följande är ett exempel på en kemisk process?",
        options: ["Is som smälter", "Salt som löser sig i vatten", "Järn som rostar", "Vatten som kokar"],
        correct: 2,
        explanation: "Rost (järnoxid) bildas genom en kemisk reaktion mellan järn och syre."
    },
    {
        question: "Vad är en homogen blandning?",
        options: ["En blandning med synliga delar", "En blandning som ser likadan ut överallt", "Ett rent ämne", "En blandning av gaser"],
        correct: 1,
        explanation: "Homogena blandningar ser likadana ut överallt - man kan inte urskilja beståndsdelarna."
    },
    {
        question: "Vilken separationsmetod använder man för att separera salt från vatten?",
        options: ["Filtrering", "Indunstning", "Kromatografi", "Dekantering"],
        correct: 1,
        explanation: "Genom indunstning avdunstar vattnet och saltet blir kvar."
    },
    {
        question: "Vad kallas övergången från fast till flytande form?",
        options: ["Kondensation", "Förångning", "Smältning", "Sublimering"],
        correct: 2,
        explanation: "Smältning är övergången från fast till flytande tillstånd."
    },
    {
        question: "Vilken skyddsutrustning ska ALLTID användas i laboratoriet?",
        options: ["Handskar", "Skyddsglasögon", "Hörselskydd", "Skoskydd"],
        correct: 1,
        explanation: "Skyddsglasögon ska alltid användas för att skydda ögonen."
    },
    {
        question: "Vad är skillnaden mellan ett grundämne och en kemisk förening?",
        options: ["Grundämnen är alltid fasta", "Föreningar innehåller flera olika atomslag", "Föreningar är alltid gaser", "Grundämnen är alltid metaller"],
        correct: 1,
        explanation: "En kemisk förening består av två eller flera olika atomslag bundna till varandra."
    },
    {
        question: "Vad händer med temperaturen när is smälter?",
        options: ["Den ökar", "Den minskar", "Den är konstant", "Den varierar"],
        correct: 2,
        explanation: "Under fasövergångar är temperaturen konstant trots att energi tillförs."
    },
    {
        question: "Vilket av följande är en heterogen blandning?",
        options: ["Saltvatten", "Luft", "Sand i vatten", "Sockerlösning"],
        correct: 2,
        explanation: "Sand i vatten är heterogen eftersom man kan se de olika beståndsdelarna."
    },
    {
        question: "Vad används destillation till?",
        options: ["Separera fasta partiklar", "Separera ämnen med olika kokpunkter", "Separera magnetiska material", "Separera efter storlek"],
        correct: 1,
        explanation: "Destillation utnyttjar skillnader i kokpunkt för att separera ämnen."
    },
    {
        question: "Vad betyder faropiktogrammet med en låga?",
        options: ["Explosivt", "Brandfarligt", "Miljöfarligt", "Giftigt"],
        correct: 1,
        explanation: "Lågan indikerar att ämnet är brandfarligt."
    },
    {
        question: "Vilken fas har partiklar som rör sig snabbast?",
        options: ["Fast", "Flytande", "Gas", "Alla lika"],
        correct: 2,
        explanation: "I gasfas har partiklarna högst rörelseenergi och rör sig snabbast."
    },
    {
        question: "Vad är sublimering?",
        options: ["Fast → Flytande", "Flytande → Gas", "Fast → Gas", "Gas → Flytande"],
        correct: 2,
        explanation: "Sublimering är direkt övergång från fast till gas utan att passera vätskeform."
    }
];

const QUESTIONS_PER_ROUND = 8;

// ============================================
// HAZARD PICTOGRAMS
// ============================================
const pictograms = [
    { symbol: "🔥", name: "Brandfarligt", description: "Lättantändliga ämnen" },
    { symbol: "💥", name: "Explosivt", description: "Risk för explosion" },
    { symbol: "☠️", name: "Giftigt", description: "Akut giftigt vid kontakt" },
    { symbol: "⚗️", name: "Frätande", description: "Kan orsaka frätskador" },
    { symbol: "⚠️", name: "Hälsofarligt", description: "Kan orsaka irritation" },
    { symbol: "🌊", name: "Miljöfarligt", description: "Farligt för vattenmiljön" },
    { symbol: "🫁", name: "Allvarlig hälsofara", description: "Cancerframkallande m.m." },
    { symbol: "🧪", name: "Gas under tryck", description: "Trycksatt gasbehållare" }
];

let currentPictogramIndex = 0;
let pictogramAnswered = false;

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
// PICTOGRAM DISPLAY & GAME
// ============================================
function initPictograms() {
    const grid = document.getElementById("pictogramGrid");
    if (!grid) return;

    grid.innerHTML = pictograms.map(p => `
    <div class="pictogram-item">
      <span class="pictogram-symbol">${p.symbol}</span>
      <span class="pictogram-name">${p.name}</span>
    </div>
  `).join("");
}

function initPictogramGame() {
    currentPictogramIndex = 0;
    shuffleArray(pictograms);
    showPictogramQuestion();
}

function showPictogramQuestion() {
    const symbolEl = document.getElementById("gameSymbol");
    const optionsEl = document.getElementById("gameOptions");
    const feedbackEl = document.getElementById("gameFeedback");

    if (!symbolEl || !optionsEl) return;

    pictogramAnswered = false;
    feedbackEl.textContent = "";
    feedbackEl.className = "game-feedback";

    const current = pictograms[currentPictogramIndex];
    symbolEl.textContent = current.symbol;

    // Generate 4 options including correct answer
    let options = [current.name];
    const others = pictograms.filter(p => p.name !== current.name);
    shuffleArray(others);
    options.push(...others.slice(0, 3).map(p => p.name));
    shuffleArray(options);

    optionsEl.innerHTML = options.map(opt => `
    <button class="game-option" onclick="checkPictogram('${opt}')">${opt}</button>
  `).join("");
}

function checkPictogram(answer) {
    if (pictogramAnswered) return;
    pictogramAnswered = true;

    const current = pictograms[currentPictogramIndex];
    const isCorrect = answer === current.name;
    const feedbackEl = document.getElementById("gameFeedback");

    document.querySelectorAll(".game-option").forEach(btn => {
        if (btn.textContent === current.name) btn.classList.add("correct");
        else if (btn.textContent === answer && !isCorrect) btn.classList.add("incorrect");
    });

    if (feedbackEl) {
        feedbackEl.className = `game-feedback ${isCorrect ? "correct" : "incorrect"}`;
        feedbackEl.textContent = isCorrect ? "Rätt!" : `Fel! Det var ${current.name}.`;
    }
}

function nextPictogram() {
    currentPictogramIndex = (currentPictogramIndex + 1) % pictograms.length;
    showPictogramQuestion();
}

// ============================================
// PHASE DIAGRAM
// ============================================
function initPhaseParticles() {
    const states = ["solidParticles", "liquidParticles", "gasParticles"];
    const counts = [16, 12, 8];
    const delays = [0.1, 0.15, 0.2];

    states.forEach((id, i) => {
        const container = document.getElementById(id);
        if (!container) return;

        container.innerHTML = "";
        for (let j = 0; j < counts[i]; j++) {
            const particle = document.createElement("div");
            particle.className = "particle";
            particle.style.animationDelay = `${j * delays[i]}s`;
            container.appendChild(particle);
        }
    });
}

function initTempSlider() {
    const slider = document.getElementById("tempSlider");
    if (!slider) return;

    slider.addEventListener("input", function () {
        const temp = parseInt(this.value);
        document.getElementById("currentTemp").textContent = `${temp}°C`;

        let phase;
        if (temp < 0) phase = "Fast (is)";
        else if (temp < 100) phase = "Flytande (vatten)";
        else phase = "Gas (ånga)";

        document.getElementById("currentPhase").textContent = phase;
    });
}

// ============================================
// SEPARATION METHODS TABS
// ============================================
function initSeparationTabs() {
    const tabs = document.querySelectorAll(".sep-tab");

    tabs.forEach(tab => {
        tab.addEventListener("click", function () {
            const method = this.dataset.method;

            tabs.forEach(t => t.classList.remove("active"));
            this.classList.add("active");

            document.querySelectorAll(".sep-panel").forEach(panel => {
                panel.classList.remove("active");
            });

            const panel = document.getElementById(method);
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
    initPictograms();
    initPictogramGame();
    initPhaseParticles();
    initTempSlider();
    initSeparationTabs();
    initQuiz();
    initNavigation();
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
            target.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    });
});
