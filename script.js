// pH Scale Examples
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
  { ph: 14, name: "Avloppsöppnare (NaOH)", category: "base" },
];

// Quiz Questions
const quizQuestions = [
  {
    question: "Vad är pH för en neutral lösning vid 25°C?",
    options: ["0", "7", "14", "1"],
    correct: 1,
    explanation: "pH 7 är neutralt eftersom [H⁺] = [OH⁻] = 10⁻⁷ M.",
  },
  {
    question: "Vilken formel visar sambandet mellan pH och pOH?",
    options: ["pH × pOH = 14", "pH + pOH = 7", "pH + pOH = 14", "pH - pOH = 0"],
    correct: 2,
    explanation: "Vid 25°C gäller alltid att pH + pOH = 14.",
  },
  {
    question: "Vilken jon gör en lösning sur?",
    options: ["OH⁻", "Na⁺", "H⁺ (H₃O⁺)", "Cl⁻"],
    correct: 2,
    explanation: "Vätejoner (H⁺) eller oxoniumjoner (H₃O⁺) gör lösningen sur.",
  },
  {
    question: "Vad är en stark syra?",
    options: [
      "En syra med högt pH",
      "En syra som dissocierar fullständigt i vatten",
      "En syra som är mycket koncentrerad",
      "En syra som är farlig",
    ],
    correct: 1,
    explanation:
      "Starka syror dissocierar fullständigt, dvs alla molekyler avger sina H⁺-joner.",
  },
  {
    question: "Vad bildas när en syra reagerar med en bas?",
    options: [
      "Bara vatten",
      "Bara salt",
      "Salt och vatten",
      "Koldioxid och vatten",
    ],
    correct: 2,
    explanation: "Neutralisation: Syra + Bas → Salt + H₂O",
  },
  {
    question: "Om pH = 3, vad är pOH?",
    options: ["3", "7", "11", "14"],
    correct: 2,
    explanation: "pH + pOH = 14, så pOH = 14 - 3 = 11.",
  },
  {
    question: "Vilken av dessa är en svag syra?",
    options: [
      "HCl (saltsyra)",
      "H₂SO₄ (svavelsyra)",
      "CH₃COOH (ättiksyra)",
      "HNO₃ (salpetersyra)",
    ],
    correct: 2,
    explanation:
      "Ättiksyra (CH₃COOH) dissocierar endast delvis och är därför en svag syra.",
  },
  {
    question: "Vad är [H⁺] om pH = 5?",
    options: ["10⁻⁵ M", "10⁵ M", "5 M", "10⁻⁹ M"],
    correct: 0,
    explanation: "pH = -log[H⁺], så [H⁺] = 10⁻ᵖᴴ = 10⁻⁵ M.",
  },
  {
    question: "Vilken bas finns i bakpulver?",
    options: ["NaOH", "KOH", "NaHCO₃", "NH₃"],
    correct: 2,
    explanation:
      "Bakpulver innehåller natriumvätekarbonat (NaHCO₃), en svag bas.",
  },
  {
    question:
      "Vad händer med pH när man tillsätter syra till en neutral lösning?",
    options: ["pH ökar", "pH minskar", "pH förblir samma", "pOH minskar"],
    correct: 1,
    explanation: "Syra tillför H⁺-joner vilket sänker pH.",
  },
];

// DOM Elements
const phSlider = document.getElementById("phSlider");
const phValue = document.getElementById("phValue");
const phValueBox = document.getElementById("phValueBox");
const hConcentration = document.getElementById("hConcentration");
const ohConcentration = document.getElementById("ohConcentration");
const phClassification = document.getElementById("phClassification");
const phExamplesContainer = document.getElementById("phExamples");
const ionSlider = document.getElementById("ionSlider");
const ionH = document.getElementById("ionH");
const ionOH = document.getElementById("ionOH");

// Initialize pH Examples
function initPhExamples() {
  if (!phExamplesContainer) return;

  phExamplesContainer.innerHTML = phExamples
    .map((ex) => {
      let colorClass = "neutral";
      let bgColor = "var(--neutral)";
      if (ex.category === "acid") {
        colorClass = "acid";
        bgColor = `hsl(${(ex.ph / 7) * 60}, 80%, 50%)`;
      } else if (ex.category === "base") {
        colorClass = "base";
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

// Format concentration for display
function formatConcentration(exponent) {
  if (exponent === 0) return "1 M";
  return `10<sup>${exponent}</sup> M`;
}

// Update pH display
function updatePhDisplay(ph) {
  const roundedPh = Math.round(ph * 10) / 10;
  phValue.textContent = roundedPh.toFixed(1);

  // Calculate concentrations
  const hExp = -ph;
  const ohExp = -(14 - ph);

  hConcentration.innerHTML = formatConcentration(Math.round(hExp * 10) / 10);
  ohConcentration.innerHTML = formatConcentration(Math.round(ohExp * 10) / 10);

  // Update classification and colors
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

  phClassification.textContent = classification;
  phValueBox.className = "ph-value-box " + boxClass;
}

// Update Ion display
function updateIonDisplay(hExp) {
  const ohExp = -14 - hExp;
  ionH.innerHTML = `10<sup>${hExp}</sup> M`;
  ionOH.innerHTML = `10<sup>${ohExp}</sup> M`;
}

// Calculator
function calculate() {
  const calcType = document.getElementById("calcType").value;
  const input = parseFloat(document.getElementById("calcInput").value);
  const calcPh = document.getElementById("calcPh");
  const calcPoh = document.getElementById("calcPoh");

  if (isNaN(input) || input <= 0) {
    calcPh.textContent = "Ogiltigt";
    calcPoh.textContent = "Ogiltigt";
    return;
  }

  let ph, poh;

  if (calcType === "concentration-to-ph") {
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

// Update calculator input label
function updateCalcLabel() {
  const calcType = document.getElementById("calcType").value;
  const label = document.getElementById("calcInputLabel");
  const input = document.getElementById("calcInput");

  if (calcType === "concentration-to-ph") {
    label.innerHTML = "[H<sup>+</sup>] i mol/L (t.ex. 0.001):";
    input.placeholder = "0.001";
  } else {
    label.innerHTML = "pH-värde (0-14):";
    input.placeholder = "7";
  }
}

// Quiz functions
let userAnswers = {};
let quizChecked = false;

function initQuiz() {
  const container = document.getElementById("quizQuestions");
  if (!container) return;

  container.innerHTML = quizQuestions
    .map(
      (q, i) => `
    <div class="quiz-question" data-question="${i}">
      <div class="question-number">Fråga ${i + 1} av ${
        quizQuestions.length
      }</div>
      <h4>${q.question}</h4>
      <div class="quiz-options">
        ${q.options
          .map(
            (opt, j) => `
          <div class="quiz-option" data-question="${i}" data-option="${j}" onclick="selectOption(${i}, ${j})">
            <span style="font-weight: 600; min-width: 24px;">${String.fromCharCode(
              65 + j
            )}.</span>
            <span>${opt}</span>
          </div>
        `
          )
          .join("")}
      </div>
      <div class="quiz-feedback" id="feedback-${i}"></div>
    </div>
  `
    )
    .join("");
}

function selectOption(questionIndex, optionIndex) {
  if (quizChecked) return;

  userAnswers[questionIndex] = optionIndex;

  // Update visual selection
  const options = document.querySelectorAll(
    `[data-question="${questionIndex}"].quiz-option`
  );
  options.forEach((opt, i) => {
    opt.classList.toggle("selected", i === optionIndex);
  });

  updateQuizProgress();
}

function updateQuizProgress() {
  const answered = Object.keys(userAnswers).length;
  const total = quizQuestions.length;
  const progress = (answered / total) * 100;

  document.getElementById("quizProgress").style.width = progress + "%";
  document.getElementById("quizScore").textContent = `${answered} / ${total}`;
}

function checkAllAnswers() {
  quizChecked = true;
  let correct = 0;

  quizQuestions.forEach((q, i) => {
    const options = document.querySelectorAll(
      `[data-question="${i}"].quiz-option`
    );
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
      feedback.textContent = "Rätt! " + q.explanation;
    } else if (userAnswer !== undefined) {
      feedback.className = "quiz-feedback show incorrect";
      feedback.textContent = "Fel. " + q.explanation;
    } else {
      feedback.className = "quiz-feedback show incorrect";
      feedback.textContent = "Ej besvarad. " + q.explanation;
    }
  });

  document.getElementById(
    "quizScore"
  ).textContent = `${correct} / ${quizQuestions.length} rätt`;
}

function resetQuiz() {
  userAnswers = {};
  quizChecked = false;

  document.querySelectorAll(".quiz-option").forEach((opt) => {
    opt.classList.remove("selected", "correct", "incorrect");
  });

  document.querySelectorAll(".quiz-feedback").forEach((fb) => {
    fb.className = "quiz-feedback";
    fb.textContent = "";
  });

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

    // Close nav on link click (mobile)
    navLinks.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("active");
      });
    });
  }
}

// Event Listeners
document.addEventListener("DOMContentLoaded", () => {
  initPhExamples();
  initQuiz();
  initNavigation();

  // pH Slider
  if (phSlider) {
    phSlider.addEventListener("input", (e) => {
      updatePhDisplay(parseFloat(e.target.value));
    });
    updatePhDisplay(7);
  }

  // Ion Slider
  if (ionSlider) {
    ionSlider.addEventListener("input", (e) => {
      updateIonDisplay(parseFloat(e.target.value));
    });
    updateIonDisplay(-7);
  }

  // Calculator type change
  const calcType = document.getElementById("calcType");
  if (calcType) {
    calcType.addEventListener("change", updateCalcLabel);
  }

  // Allow Enter key in calculator
  const calcInput = document.getElementById("calcInput");
  if (calcInput) {
    calcInput.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        calculate();
      }
    });
  }
});

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
