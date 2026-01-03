// Redox Quiz Questions
const quizQuestions = [
  {
    question: "Vad händer vid oxidation?",
    options: [
      "Elektroner tas emot",
      "Elektroner avges",
      "Protoner avges",
      "Neutroner tas emot"
    ],
    correct: 1,
    explanation: "Vid oxidation avger ett ämne elektroner. Oxidationstalet ökar."
  },
  {
    question: "Vad händer vid reduktion?",
    options: [
      "Elektroner avges",
      "Protoner tas emot",
      "Elektroner tas emot",
      "Oxidationstalet ökar"
    ],
    correct: 2,
    explanation: "Vid reduktion tar ett ämne emot elektroner. Oxidationstalet minskar."
  },
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
    question: "I reaktionen 2Mg + O₂ → 2MgO, vilket ämne oxideras?",
    options: ["O₂", "MgO", "Mg", "Inget ämne oxideras"],
    correct: 2,
    explanation: "Magnesium (Mg) oxideras - det avger elektroner och går från 0 till +2 i oxidationstal."
  },
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
    question: "Är förbränning en redoxreaktion?",
    options: [
      "Nej, det är en värmereaktion",
      "Ja, alltid",
      "Bara ibland",
      "Nej, det är en syra-basreaktion"
    ],
    correct: 1,
    explanation: "Förbränning är alltid en redoxreaktion. Bränslet oxideras och syre reduceras."
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
    options: [
      "De försvinner",
      "De skapas",
      "Avgivna = upptagna",
      "Det varierar"
    ],
    correct: 2,
    explanation: "Antalet elektroner som avges vid oxidation är alltid lika med antalet som tas emot vid reduktion."
  }
];

// Oxidation numbers data
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

// Calculate and display oxidation numbers
function calculateOxidationNumbers() {
  const select = document.getElementById("oxCalcCompound");
  const result = document.getElementById("oxCalcResult");
  
  if (!select || !result) return;
  
  const compound = select.value;
  const data = oxidationData[compound];
  
  if (!data) return;
  
  let html = '<div class="compound-display">';
  
  data.forEach((atom, index) => {
    const numClass = atom.oxidation.startsWith("+") ? "positive" : 
                     atom.oxidation.startsWith("-") ? "negative" : "zero";
    
    html += `
      <div class="atom-ox">
        <span class="atom-symbol">${atom.symbol}${atom.count > 1 ? '₂₃₄₅₆₇₈₉'[atom.count-2] || atom.count : ''}</span>
        <span class="atom-number ${numClass}">${atom.oxidation}</span>
      </div>
    `;
    
    if (index < data.length - 1) {
      html += '<span style="color: var(--text-muted);">·</span>';
    }
  });
  
  // Calculate sum
  let sum = 0;
  data.forEach(atom => {
    sum += parseInt(atom.oxidation) * atom.count;
  });
  
  html += `</div>
    <p style="text-align: center; margin-top: var(--space-lg); color: var(--text-secondary);">
      Summa: ${sum === 0 ? "0 (neutral förening)" : sum + " (jonladdning)"}
    </p>`;
  
  result.innerHTML = html;
}

// Quiz functions
let userAnswers = {};
let quizChecked = false;

function initQuiz() {
  const container = document.getElementById("quizQuestions");
  if (!container) return;

  let html = "";
  quizQuestions.forEach((q, i) => {
    html += `
      <div class="quiz-question" id="question-${i}">
        <div class="question-number">Fråga ${i + 1} av ${quizQuestions.length}</div>
        <h4>${q.question}</h4>
        <div class="quiz-options">
          ${q.options
            .map(
              (opt, j) => `
            <div class="quiz-option" onclick="selectOption(${i}, ${j})" id="option-${i}-${j}">
              <span class="option-marker">${String.fromCharCode(65 + j)}</span>
              <span>${opt}</span>
            </div>
          `
            )
            .join("")}
        </div>
        <div class="quiz-feedback" id="feedback-${i}"></div>
      </div>
    `;
  });

  container.innerHTML = html;
  updateQuizProgress();
}

function selectOption(questionIndex, optionIndex) {
  if (quizChecked) return;

  // Remove previous selection
  const options = document.querySelectorAll(`#question-${questionIndex} .quiz-option`);
  options.forEach((opt) => opt.classList.remove("selected"));

  // Add new selection
  document.getElementById(`option-${questionIndex}-${optionIndex}`).classList.add("selected");
  userAnswers[questionIndex] = optionIndex;

  updateQuizProgress();
}

function updateQuizProgress() {
  const answered = Object.keys(userAnswers).length;
  const total = quizQuestions.length;
  const progress = document.getElementById("quizProgress");
  const score = document.getElementById("quizScore");

  if (progress) {
    progress.style.width = `${(answered / total) * 100}%`;
  }
  if (score) {
    score.textContent = `${answered} / ${total}`;
  }
}

function checkAllAnswers() {
  if (quizChecked) return;
  quizChecked = true;

  let correct = 0;

  quizQuestions.forEach((q, i) => {
    const userAnswer = userAnswers[i];
    const feedback = document.getElementById(`feedback-${i}`);
    const options = document.querySelectorAll(`#question-${i} .quiz-option`);

    // Show correct answer
    options[q.correct].classList.add("correct");

    if (userAnswer !== undefined) {
      if (userAnswer === q.correct) {
        correct++;
        feedback.className = "quiz-feedback show correct";
        feedback.textContent = "✓ Rätt! " + q.explanation;
      } else {
        options[userAnswer].classList.add("incorrect");
        feedback.className = "quiz-feedback show incorrect";
        feedback.textContent = "✗ Fel. " + q.explanation;
      }
    } else {
      feedback.className = "quiz-feedback show incorrect";
      feedback.textContent = "Ej besvarad. " + q.explanation;
    }
  });

  // Update score
  const score = document.getElementById("quizScore");
  if (score) {
    score.textContent = `${correct} / ${quizQuestions.length} rätt`;
  }

  const progress = document.getElementById("quizProgress");
  if (progress) {
    progress.style.width = "100%";
    progress.style.background = correct === quizQuestions.length ? "var(--neutral)" : "var(--base-primary)";
  }

  // Disable check button
  const checkBtn = document.getElementById("checkAnswersBtn");
  if (checkBtn) {
    checkBtn.disabled = true;
    checkBtn.style.opacity = "0.5";
  }
}

function resetQuiz() {
  userAnswers = {};
  quizChecked = false;

  // Reset UI
  document.querySelectorAll(".quiz-option").forEach((opt) => {
    opt.classList.remove("selected", "correct", "incorrect");
  });

  document.querySelectorAll(".quiz-feedback").forEach((fb) => {
    fb.className = "quiz-feedback";
    fb.textContent = "";
  });

  const progress = document.getElementById("quizProgress");
  if (progress) {
    progress.style.width = "0%";
    progress.style.background = "";
  }

  const checkBtn = document.getElementById("checkAnswersBtn");
  if (checkBtn) {
    checkBtn.disabled = false;
    checkBtn.style.opacity = "1";
  }

  updateQuizProgress();
}

// Navigation
function initNavigation() {
  const navToggle = document.querySelector(".nav-toggle");
  const navLinks = document.querySelector(".nav-links");

  if (navToggle && navLinks) {
    navToggle.addEventListener("click", () => {
      navLinks.classList.toggle("active");
    });

    // Close menu when clicking a link
    navLinks.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("active");
      });
    });
  }
}

// Initialize on DOM ready
document.addEventListener("DOMContentLoaded", () => {
  initQuiz();
  initNavigation();

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
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
