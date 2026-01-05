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
// ELECTRON CONFIGURATION EXPLORER
// ============================================
const electronConfigs = {
    H:  { name: 'Väte', number: 1, shells: [1], valence: 1 },
    C:  { name: 'Kol', number: 6, shells: [2, 4], valence: 4 },
    O:  { name: 'Syre', number: 8, shells: [2, 6], valence: 6 },
    Na: { name: 'Natrium', number: 11, shells: [2, 8, 1], valence: 1 },
    Cl: { name: 'Klor', number: 17, shells: [2, 8, 7], valence: 7 },
    Ar: { name: 'Argon', number: 18, shells: [2, 8, 8], valence: 8 },
    K:  { name: 'Kalium', number: 19, shells: [2, 8, 8, 1], valence: 1 },
    Ca: { name: 'Kalcium', number: 20, shells: [2, 8, 8, 2], valence: 2 }
};

function initConfigExplorer() {
    const buttons = document.querySelectorAll('.config-btn');
    if (!buttons.length) return;

    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            // Update active state
            buttons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            // Get element symbol from button
            const element = btn.dataset.element;
            updateConfigDisplay(element);
        });
    });

    // Initialize with first element (H)
    updateConfigDisplay('H');
}

function updateConfigDisplay(element) {
    const config = electronConfigs[element];
    if (!config) return;

    const shellNames = ['K', 'L', 'M', 'N'];
    
    // Update text display
    const configName = document.querySelector('.config-name');
    const configNumber = document.querySelector('.config-number');
    const configShells = document.querySelector('.config-shells');
    const configValence = document.querySelector('.config-valence');

    if (configName) configName.textContent = `${config.name} (${element})`;
    if (configNumber) configNumber.textContent = `Z = ${config.number}`;
    if (configShells) {
        const shellText = config.shells.map((e, i) => `${shellNames[i]}: ${e}`).join('  ');
        configShells.textContent = shellText;
    }
    if (configValence) configValence.textContent = `Valenselektroner: ${config.valence}`;

    // Update visual display
    const shellVisual = document.getElementById('shellVisual');
    if (shellVisual) {
        const maxElectrons = [2, 8, 18, 32];
        shellVisual.innerHTML = config.shells.map((electrons, i) => {
            const max = maxElectrons[i];
            let dots = '';
            for (let j = 0; j < Math.min(electrons, 8); j++) {
                dots += '<span class="electron-dot"></span>';
            }
            if (electrons > 8) {
                dots += `<span style="font-size: 0.7rem; color: var(--text-secondary);">+${electrons - 8}</span>`;
            }
            return `
                <div class="shell">
                    <span class="shell-name">${shellNames[i]}</span>
                    <div class="shell-electrons">${dots}</div>
                    <span style="font-size: 0.75rem; color: var(--text-muted);">(${electrons})</span>
                </div>
            `;
        }).join('');
    }
}

// ============================================
// ELEMENT EXPLORER
// ============================================
const elementData = {
    H:  { name: 'Väte', number: 1, mass: '1.008 u', group: '1', period: 1, config: '1', valence: 1, ion: 'H⁺ eller H⁻' },
    He: { name: 'Helium', number: 2, mass: '4.003 u', group: '18 (Ädelgaser)', period: 1, config: '2', valence: 2, ion: 'Bildar ej jon' },
    Li: { name: 'Litium', number: 3, mass: '6.94 u', group: '1 (Alkalimetaller)', period: 2, config: '2, 1', valence: 1, ion: 'Li⁺' },
    Be: { name: 'Beryllium', number: 4, mass: '9.01 u', group: '2 (Alkaliska jordartsmetaller)', period: 2, config: '2, 2', valence: 2, ion: 'Be²⁺' },
    B:  { name: 'Bor', number: 5, mass: '10.81 u', group: '13', period: 2, config: '2, 3', valence: 3, ion: 'B³⁺' },
    C:  { name: 'Kol', number: 6, mass: '12.01 u', group: '14', period: 2, config: '2, 4', valence: 4, ion: 'Bildar kovalenta bindningar' },
    N:  { name: 'Kväve', number: 7, mass: '14.01 u', group: '15', period: 2, config: '2, 5', valence: 5, ion: 'N³⁻' },
    O:  { name: 'Syre', number: 8, mass: '16.00 u', group: '16', period: 2, config: '2, 6', valence: 6, ion: 'O²⁻' },
    F:  { name: 'Fluor', number: 9, mass: '19.00 u', group: '17 (Halogener)', period: 2, config: '2, 7', valence: 7, ion: 'F⁻' },
    Ne: { name: 'Neon', number: 10, mass: '20.18 u', group: '18 (Ädelgaser)', period: 2, config: '2, 8', valence: 8, ion: 'Bildar ej jon' },
    Na: { name: 'Natrium', number: 11, mass: '22.99 u', group: '1 (Alkalimetaller)', period: 3, config: '2, 8, 1', valence: 1, ion: 'Na⁺' },
    Mg: { name: 'Magnesium', number: 12, mass: '24.31 u', group: '2', period: 3, config: '2, 8, 2', valence: 2, ion: 'Mg²⁺' },
    Al: { name: 'Aluminium', number: 13, mass: '26.98 u', group: '13', period: 3, config: '2, 8, 3', valence: 3, ion: 'Al³⁺' },
    Si: { name: 'Kisel', number: 14, mass: '28.09 u', group: '14', period: 3, config: '2, 8, 4', valence: 4, ion: 'Halvmetall' },
    P:  { name: 'Fosfor', number: 15, mass: '30.97 u', group: '15', period: 3, config: '2, 8, 5', valence: 5, ion: 'P³⁻' },
    S:  { name: 'Svavel', number: 16, mass: '32.07 u', group: '16', period: 3, config: '2, 8, 6', valence: 6, ion: 'S²⁻' },
    Cl: { name: 'Klor', number: 17, mass: '35.45 u', group: '17 (Halogener)', period: 3, config: '2, 8, 7', valence: 7, ion: 'Cl⁻' },
    Ar: { name: 'Argon', number: 18, mass: '39.95 u', group: '18 (Ädelgaser)', period: 3, config: '2, 8, 8', valence: 8, ion: 'Bildar ej jon' },
    K:  { name: 'Kalium', number: 19, mass: '39.10 u', group: '1 (Alkalimetaller)', period: 4, config: '2, 8, 8, 1', valence: 1, ion: 'K⁺' },
    Ca: { name: 'Kalcium', number: 20, mass: '40.08 u', group: '2', period: 4, config: '2, 8, 8, 2', valence: 2, ion: 'Ca²⁺' }
};

function initElementExplorer() {
    const grid = document.getElementById('elementGrid');
    if (!grid) return;

    // Create element buttons
    const elements = Object.keys(elementData);
    grid.innerHTML = elements.map(el => `
        <button class="element-btn${el === 'Na' ? ' active' : ''}" data-element="${el}">${el}</button>
    `).join('');

    // Add click handlers
    grid.querySelectorAll('.element-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            grid.querySelectorAll('.element-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            updateElementDetail(btn.dataset.element);
        });
    });

    // Initialize with Sodium
    updateElementDetail('Na');
}

function updateElementDetail(symbol) {
    const el = elementData[symbol];
    if (!el) return;

    document.getElementById('detailSymbol').textContent = symbol;
    document.getElementById('detailName').textContent = el.name;
    document.getElementById('detailNumber').textContent = el.number;
    document.getElementById('detailMass').textContent = el.mass;
    document.getElementById('detailGroup').textContent = el.group;
    document.getElementById('detailPeriod').textContent = el.period;
    document.getElementById('detailConfig').textContent = el.config;
    document.getElementById('detailValence').textContent = el.valence;
    document.getElementById('detailIon').textContent = el.ion;
}

// ============================================
// INITIALIZATION
// ============================================
document.addEventListener("DOMContentLoaded", () => {
    initQuiz();
    initPeriodicTable();
    initNavigation();
    initConfigExplorer();
    initElementExplorer();
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
