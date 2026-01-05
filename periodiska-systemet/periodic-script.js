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
// MINI PERIODIC TABLE DATA (7 rows) with element info
// ============================================
const elementInfo = {
    // Row 1
    H:  { name: 'Väte', number: 1, mass: '1.008', valence: 1, group: 1, category: 'Icke-metall', reactivity: 'Medel', electroneg: '2.20', ion: 'H⁺' },
    He: { name: 'Helium', number: 2, mass: '4.003', valence: 2, group: 18, category: 'Ädelgas', reactivity: 'Ingen', electroneg: '-', ion: 'Bildar ej' },
    
    // Row 2
    Li: { name: 'Litium', number: 3, mass: '6.94', valence: 1, group: 1, category: 'Alkalimetall', reactivity: 'Hög', electroneg: '0.98', ion: 'Li⁺' },
    Be: { name: 'Beryllium', number: 4, mass: '9.01', valence: 2, group: 2, category: 'Metall', reactivity: 'Låg', electroneg: '1.57', ion: 'Be²⁺' },
    B:  { name: 'Bor', number: 5, mass: '10.81', valence: 3, group: 13, category: 'Halvmetall', reactivity: 'Låg', electroneg: '2.04', ion: 'B³⁺' },
    C:  { name: 'Kol', number: 6, mass: '12.01', valence: 4, group: 14, category: 'Icke-metall', reactivity: 'Varierar', electroneg: '2.55', ion: 'Kovalent' },
    N:  { name: 'Kväve', number: 7, mass: '14.01', valence: 5, group: 15, category: 'Icke-metall', reactivity: 'Låg (N₂)', electroneg: '3.04', ion: 'N³⁻' },
    O:  { name: 'Syre', number: 8, mass: '16.00', valence: 6, group: 16, category: 'Icke-metall', reactivity: 'Hög', electroneg: '3.44', ion: 'O²⁻' },
    F:  { name: 'Fluor', number: 9, mass: '19.00', valence: 7, group: 17, category: 'Halogen', reactivity: 'Mycket hög', electroneg: '3.98', ion: 'F⁻', note: 'Mest reaktiv halogen' },
    Ne: { name: 'Neon', number: 10, mass: '20.18', valence: 8, group: 18, category: 'Ädelgas', reactivity: 'Ingen', electroneg: '-', ion: 'Bildar ej' },
    
    // Row 3
    Na: { name: 'Natrium', number: 11, mass: '22.99', valence: 1, group: 1, category: 'Alkalimetall', reactivity: 'Mycket hög', electroneg: '0.93', ion: 'Na⁺', note: 'Reagerar häftigt med vatten' },
    Mg: { name: 'Magnesium', number: 12, mass: '24.31', valence: 2, group: 2, category: 'Metall', reactivity: 'Medel', electroneg: '1.31', ion: 'Mg²⁺' },
    Al: { name: 'Aluminium', number: 13, mass: '26.98', valence: 3, group: 13, category: 'Metall', reactivity: 'Medel', electroneg: '1.61', ion: 'Al³⁺' },
    Si: { name: 'Kisel', number: 14, mass: '28.09', valence: 4, group: 14, category: 'Halvmetall', reactivity: 'Låg', electroneg: '1.90', ion: 'Halvledare' },
    P:  { name: 'Fosfor', number: 15, mass: '30.97', valence: 5, group: 15, category: 'Icke-metall', reactivity: 'Medel', electroneg: '2.19', ion: 'P³⁻' },
    S:  { name: 'Svavel', number: 16, mass: '32.07', valence: 6, group: 16, category: 'Icke-metall', reactivity: 'Medel', electroneg: '2.58', ion: 'S²⁻' },
    Cl: { name: 'Klor', number: 17, mass: '35.45', valence: 7, group: 17, category: 'Halogen', reactivity: 'Hög', electroneg: '3.16', ion: 'Cl⁻', note: 'Mindre reaktiv än F' },
    Ar: { name: 'Argon', number: 18, mass: '39.95', valence: 8, group: 18, category: 'Ädelgas', reactivity: 'Ingen', electroneg: '-', ion: 'Bildar ej' },
    
    // Row 4
    K:  { name: 'Kalium', number: 19, mass: '39.10', valence: 1, group: 1, category: 'Alkalimetall', reactivity: 'Mycket hög', electroneg: '0.82', ion: 'K⁺', note: 'Mer reaktiv än Na' },
    Ca: { name: 'Kalcium', number: 20, mass: '40.08', valence: 2, group: 2, category: 'Metall', reactivity: 'Medel-hög', electroneg: '1.00', ion: 'Ca²⁺' },
    Sc: { name: 'Skandium', number: 21, mass: '44.96', valence: 3, group: 3, category: 'Övergångsmetall', reactivity: 'Medel', electroneg: '1.36', ion: 'Sc³⁺' },
    Ti: { name: 'Titan', number: 22, mass: '47.87', valence: 4, group: 4, category: 'Övergångsmetall', reactivity: 'Låg', electroneg: '1.54', ion: 'Ti⁴⁺' },
    V:  { name: 'Vanadin', number: 23, mass: '50.94', valence: 5, group: 5, category: 'Övergångsmetall', reactivity: 'Medel', electroneg: '1.63', ion: 'V⁵⁺' },
    Cr: { name: 'Krom', number: 24, mass: '52.00', valence: 6, group: 6, category: 'Övergångsmetall', reactivity: 'Låg', electroneg: '1.66', ion: 'Cr³⁺/Cr⁶⁺' },
    Mn: { name: 'Mangan', number: 25, mass: '54.94', valence: 7, group: 7, category: 'Övergångsmetall', reactivity: 'Medel', electroneg: '1.55', ion: 'Mn²⁺' },
    Fe: { name: 'Järn', number: 26, mass: '55.85', valence: 2, group: 8, category: 'Övergångsmetall', reactivity: 'Medel', electroneg: '1.83', ion: 'Fe²⁺/Fe³⁺', note: 'Rostar i fukt' },
    Co: { name: 'Kobolt', number: 27, mass: '58.93', valence: 2, group: 9, category: 'Övergångsmetall', reactivity: 'Låg', electroneg: '1.88', ion: 'Co²⁺' },
    Ni: { name: 'Nickel', number: 28, mass: '58.69', valence: 2, group: 10, category: 'Övergångsmetall', reactivity: 'Låg', electroneg: '1.91', ion: 'Ni²⁺' },
    Cu: { name: 'Koppar', number: 29, mass: '63.55', valence: 1, group: 11, category: 'Övergångsmetall', reactivity: 'Låg', electroneg: '1.90', ion: 'Cu⁺/Cu²⁺', note: 'Ädelmetall' },
    Zn: { name: 'Zink', number: 30, mass: '65.38', valence: 2, group: 12, category: 'Övergångsmetall', reactivity: 'Medel', electroneg: '1.65', ion: 'Zn²⁺' },
    Ga: { name: 'Gallium', number: 31, mass: '69.72', valence: 3, group: 13, category: 'Metall', reactivity: 'Låg', electroneg: '1.81', ion: 'Ga³⁺' },
    Ge: { name: 'Germanium', number: 32, mass: '72.63', valence: 4, group: 14, category: 'Halvmetall', reactivity: 'Låg', electroneg: '2.01', ion: 'Halvledare' },
    As: { name: 'Arsenik', number: 33, mass: '74.92', valence: 5, group: 15, category: 'Halvmetall', reactivity: 'Låg', electroneg: '2.18', ion: 'As³⁻' },
    Se: { name: 'Selen', number: 34, mass: '78.97', valence: 6, group: 16, category: 'Icke-metall', reactivity: 'Medel', electroneg: '2.55', ion: 'Se²⁻' },
    Br: { name: 'Brom', number: 35, mass: '79.90', valence: 7, group: 17, category: 'Halogen', reactivity: 'Medel-hög', electroneg: '2.96', ion: 'Br⁻', note: 'Flytande vid rumstemperatur' },
    Kr: { name: 'Krypton', number: 36, mass: '83.80', valence: 8, group: 18, category: 'Ädelgas', reactivity: 'Mycket låg', electroneg: '3.00', ion: 'Bildar ej' },
    
    // Row 5
    Rb: { name: 'Rubidium', number: 37, mass: '85.47', valence: 1, group: 1, category: 'Alkalimetall', reactivity: 'Mycket hög', electroneg: '0.82', ion: 'Rb⁺' },
    Sr: { name: 'Strontium', number: 38, mass: '87.62', valence: 2, group: 2, category: 'Metall', reactivity: 'Hög', electroneg: '0.95', ion: 'Sr²⁺' },
    Y:  { name: 'Yttrium', number: 39, mass: '88.91', valence: 3, group: 3, category: 'Övergångsmetall', reactivity: 'Medel', electroneg: '1.22', ion: 'Y³⁺' },
    Zr: { name: 'Zirkonium', number: 40, mass: '91.22', valence: 4, group: 4, category: 'Övergångsmetall', reactivity: 'Låg', electroneg: '1.33', ion: 'Zr⁴⁺' },
    Nb: { name: 'Niob', number: 41, mass: '92.91', valence: 5, group: 5, category: 'Övergångsmetall', reactivity: 'Låg', electroneg: '1.60', ion: 'Nb⁵⁺' },
    Mo: { name: 'Molybden', number: 42, mass: '95.95', valence: 6, group: 6, category: 'Övergångsmetall', reactivity: 'Låg', electroneg: '2.16', ion: 'Mo⁶⁺' },
    Tc: { name: 'Teknetium', number: 43, mass: '98', valence: 7, group: 7, category: 'Övergångsmetall', reactivity: 'Medel', electroneg: '1.90', ion: 'Tc⁷⁺', note: 'Radioaktivt' },
    Ru: { name: 'Rutenium', number: 44, mass: '101.1', valence: 3, group: 8, category: 'Övergångsmetall', reactivity: 'Låg', electroneg: '2.20', ion: 'Ru³⁺' },
    Rh: { name: 'Rodium', number: 45, mass: '102.9', valence: 3, group: 9, category: 'Övergångsmetall', reactivity: 'Låg', electroneg: '2.28', ion: 'Rh³⁺' },
    Pd: { name: 'Palladium', number: 46, mass: '106.4', valence: 2, group: 10, category: 'Övergångsmetall', reactivity: 'Låg', electroneg: '2.20', ion: 'Pd²⁺' },
    Ag: { name: 'Silver', number: 47, mass: '107.9', valence: 1, group: 11, category: 'Övergångsmetall', reactivity: 'Låg', electroneg: '1.93', ion: 'Ag⁺', note: 'Ädelmetall' },
    Cd: { name: 'Kadmium', number: 48, mass: '112.4', valence: 2, group: 12, category: 'Övergångsmetall', reactivity: 'Medel', electroneg: '1.69', ion: 'Cd²⁺' },
    In: { name: 'Indium', number: 49, mass: '114.8', valence: 3, group: 13, category: 'Metall', reactivity: 'Låg', electroneg: '1.78', ion: 'In³⁺' },
    Sn: { name: 'Tenn', number: 50, mass: '118.7', valence: 4, group: 14, category: 'Metall', reactivity: 'Låg', electroneg: '1.96', ion: 'Sn²⁺/Sn⁴⁺' },
    Sb: { name: 'Antimon', number: 51, mass: '121.8', valence: 5, group: 15, category: 'Halvmetall', reactivity: 'Låg', electroneg: '2.05', ion: 'Sb³⁺' },
    Te: { name: 'Tellur', number: 52, mass: '127.6', valence: 6, group: 16, category: 'Halvmetall', reactivity: 'Låg', electroneg: '2.10', ion: 'Te²⁻' },
    I:  { name: 'Jod', number: 53, mass: '126.9', valence: 7, group: 17, category: 'Halogen', reactivity: 'Medel', electroneg: '2.66', ion: 'I⁻', note: 'Fast vid rumstemperatur' },
    Xe: { name: 'Xenon', number: 54, mass: '131.3', valence: 8, group: 18, category: 'Ädelgas', reactivity: 'Mycket låg', electroneg: '2.60', ion: 'Kan bilda XeF₂' },
    
    // Row 6
    Cs: { name: 'Cesium', number: 55, mass: '132.9', valence: 1, group: 1, category: 'Alkalimetall', reactivity: 'Extremt hög', electroneg: '0.79', ion: 'Cs⁺', note: 'Mest reaktiva stabila alkalimetall' },
    Ba: { name: 'Barium', number: 56, mass: '137.3', valence: 2, group: 2, category: 'Metall', reactivity: 'Hög', electroneg: '0.89', ion: 'Ba²⁺' },
    La: { name: 'Lantan', number: 57, mass: '138.9', valence: 3, group: 3, category: 'Övergångsmetall', reactivity: 'Hög', electroneg: '1.10', ion: 'La³⁺' },
    Hf: { name: 'Hafnium', number: 72, mass: '178.5', valence: 4, group: 4, category: 'Övergångsmetall', reactivity: 'Låg', electroneg: '1.30', ion: 'Hf⁴⁺' },
    Ta: { name: 'Tantal', number: 73, mass: '180.9', valence: 5, group: 5, category: 'Övergångsmetall', reactivity: 'Låg', electroneg: '1.50', ion: 'Ta⁵⁺' },
    W:  { name: 'Volfram', number: 74, mass: '183.8', valence: 6, group: 6, category: 'Övergångsmetall', reactivity: 'Låg', electroneg: '2.36', ion: 'W⁶⁺', note: 'Högsta smältpunkt' },
    Re: { name: 'Renium', number: 75, mass: '186.2', valence: 7, group: 7, category: 'Övergångsmetall', reactivity: 'Låg', electroneg: '1.90', ion: 'Re⁷⁺' },
    Os: { name: 'Osmium', number: 76, mass: '190.2', valence: 3, group: 8, category: 'Övergångsmetall', reactivity: 'Låg', electroneg: '2.20', ion: 'Os⁴⁺' },
    Ir: { name: 'Iridium', number: 77, mass: '192.2', valence: 3, group: 9, category: 'Övergångsmetall', reactivity: 'Låg', electroneg: '2.20', ion: 'Ir³⁺' },
    Pt: { name: 'Platina', number: 78, mass: '195.1', valence: 2, group: 10, category: 'Övergångsmetall', reactivity: 'Låg', electroneg: '2.28', ion: 'Pt²⁺', note: 'Ädelmetall' },
    Au: { name: 'Guld', number: 79, mass: '197.0', valence: 1, group: 11, category: 'Övergångsmetall', reactivity: 'Mycket låg', electroneg: '2.54', ion: 'Au⁺/Au³⁺', note: 'Ädelmetall' },
    Hg: { name: 'Kvicksilver', number: 80, mass: '200.6', valence: 2, group: 12, category: 'Övergångsmetall', reactivity: 'Låg', electroneg: '2.00', ion: 'Hg²⁺', note: 'Flytande vid rumstemperatur' },
    Tl: { name: 'Tallium', number: 81, mass: '204.4', valence: 3, group: 13, category: 'Metall', reactivity: 'Medel', electroneg: '1.62', ion: 'Tl⁺/Tl³⁺' },
    Pb: { name: 'Bly', number: 82, mass: '207.2', valence: 4, group: 14, category: 'Metall', reactivity: 'Låg', electroneg: '2.33', ion: 'Pb²⁺', note: 'Giftigt' },
    Bi: { name: 'Vismut', number: 83, mass: '209.0', valence: 5, group: 15, category: 'Metall', reactivity: 'Låg', electroneg: '2.02', ion: 'Bi³⁺' },
    Po: { name: 'Polonium', number: 84, mass: '209', valence: 6, group: 16, category: 'Halvmetall', reactivity: 'Medel', electroneg: '2.00', ion: 'Po²⁻', note: 'Radioaktivt' },
    At: { name: 'Astat', number: 85, mass: '210', valence: 7, group: 17, category: 'Halogen', reactivity: 'Låg', electroneg: '2.20', ion: 'At⁻', note: 'Radioaktivt' },
    Rn: { name: 'Radon', number: 86, mass: '222', valence: 8, group: 18, category: 'Ädelgas', reactivity: 'Ingen', electroneg: '-', ion: 'Bildar ej', note: 'Radioaktiv gas' },
    
    // Row 7
    Fr: { name: 'Francium', number: 87, mass: '223', valence: 1, group: 1, category: 'Alkalimetall', reactivity: 'Extremt hög', electroneg: '0.70', ion: 'Fr⁺', note: 'Mest reaktiva alkalimetall' },
    Ra: { name: 'Radium', number: 88, mass: '226', valence: 2, group: 2, category: 'Metall', reactivity: 'Hög', electroneg: '0.90', ion: 'Ra²⁺', note: 'Radioaktivt' },
    Ac: { name: 'Aktinium', number: 89, mass: '227', valence: 3, group: 3, category: 'Övergångsmetall', reactivity: 'Hög', electroneg: '1.10', ion: 'Ac³⁺', note: 'Radioaktivt' },
    Rf: { name: 'Rutherfordium', number: 104, mass: '267', valence: 4, group: 4, category: 'Övergångsmetall', reactivity: '-', electroneg: '-', ion: '-' },
    Db: { name: 'Dubnium', number: 105, mass: '268', valence: 5, group: 5, category: 'Övergångsmetall', reactivity: '-', electroneg: '-', ion: '-' },
    Sg: { name: 'Seaborgium', number: 106, mass: '269', valence: 6, group: 6, category: 'Övergångsmetall', reactivity: '-', electroneg: '-', ion: '-' },
    Bh: { name: 'Bohrium', number: 107, mass: '270', valence: 7, group: 7, category: 'Övergångsmetall', reactivity: '-', electroneg: '-', ion: '-' },
    Hs: { name: 'Hassium', number: 108, mass: '269', valence: 8, group: 8, category: 'Övergångsmetall', reactivity: '-', electroneg: '-', ion: '-' },
    Mt: { name: 'Meitnerium', number: 109, mass: '278', valence: 9, group: 9, category: 'Övergångsmetall', reactivity: '-', electroneg: '-', ion: '-' },
    Ds: { name: 'Darmstadtium', number: 110, mass: '281', valence: 10, group: 10, category: 'Övergångsmetall', reactivity: '-', electroneg: '-', ion: '-' },
    Rg: { name: 'Röntgenium', number: 111, mass: '282', valence: 11, group: 11, category: 'Övergångsmetall', reactivity: '-', electroneg: '-', ion: '-' },
    Cn: { name: 'Copernicium', number: 112, mass: '285', valence: 12, group: 12, category: 'Övergångsmetall', reactivity: '-', electroneg: '-', ion: '-' },
    Nh: { name: 'Nihonium', number: 113, mass: '286', valence: 3, group: 13, category: 'Metall', reactivity: '-', electroneg: '-', ion: '-' },
    Fl: { name: 'Flerovium', number: 114, mass: '289', valence: 4, group: 14, category: 'Metall', reactivity: '-', electroneg: '-', ion: '-' },
    Mc: { name: 'Moscovium', number: 115, mass: '290', valence: 5, group: 15, category: 'Metall', reactivity: '-', electroneg: '-', ion: '-' },
    Lv: { name: 'Livermorium', number: 116, mass: '293', valence: 6, group: 16, category: 'Metall', reactivity: '-', electroneg: '-', ion: '-' },
    Ts: { name: 'Tennessine', number: 117, mass: '294', valence: 7, group: 17, category: 'Halogen', reactivity: '-', electroneg: '-', ion: '-' },
    Og: { name: 'Oganesson', number: 118, mass: '294', valence: 8, group: 18, category: 'Ädelgas', reactivity: '-', electroneg: '-', ion: '-' },
    
    // Lanthanides (57-71) - f-block elements
    Ce: { name: 'Cerium', number: 58, mass: '140.1', valence: 3, group: 'Ln', category: 'Lantanoid', reactivity: 'Hög', electroneg: '1.12', ion: 'Ce³⁺/Ce⁴⁺' },
    Pr: { name: 'Praseodym', number: 59, mass: '140.9', valence: 3, group: 'Ln', category: 'Lantanoid', reactivity: 'Medel', electroneg: '1.13', ion: 'Pr³⁺' },
    Nd: { name: 'Neodym', number: 60, mass: '144.2', valence: 3, group: 'Ln', category: 'Lantanoid', reactivity: 'Medel', electroneg: '1.14', ion: 'Nd³⁺', note: 'Används i starka magneter' },
    Pm: { name: 'Prometium', number: 61, mass: '145', valence: 3, group: 'Ln', category: 'Lantanoid', reactivity: '-', electroneg: '1.13', ion: 'Pm³⁺', note: 'Radioaktivt' },
    Sm: { name: 'Samarium', number: 62, mass: '150.4', valence: 3, group: 'Ln', category: 'Lantanoid', reactivity: 'Medel', electroneg: '1.17', ion: 'Sm³⁺' },
    Eu: { name: 'Europium', number: 63, mass: '152.0', valence: 3, group: 'Ln', category: 'Lantanoid', reactivity: 'Hög', electroneg: '1.20', ion: 'Eu²⁺/Eu³⁺' },
    Gd: { name: 'Gadolinium', number: 64, mass: '157.3', valence: 3, group: 'Ln', category: 'Lantanoid', reactivity: 'Medel', electroneg: '1.20', ion: 'Gd³⁺', note: 'Magnetiskt' },
    Tb: { name: 'Terbium', number: 65, mass: '158.9', valence: 3, group: 'Ln', category: 'Lantanoid', reactivity: 'Medel', electroneg: '1.20', ion: 'Tb³⁺' },
    Dy: { name: 'Dysprosium', number: 66, mass: '162.5', valence: 3, group: 'Ln', category: 'Lantanoid', reactivity: 'Medel', electroneg: '1.22', ion: 'Dy³⁺' },
    Ho: { name: 'Holmium', number: 67, mass: '164.9', valence: 3, group: 'Ln', category: 'Lantanoid', reactivity: 'Medel', electroneg: '1.23', ion: 'Ho³⁺' },
    Er: { name: 'Erbium', number: 68, mass: '167.3', valence: 3, group: 'Ln', category: 'Lantanoid', reactivity: 'Medel', electroneg: '1.24', ion: 'Er³⁺' },
    Tm: { name: 'Tulium', number: 69, mass: '168.9', valence: 3, group: 'Ln', category: 'Lantanoid', reactivity: 'Medel', electroneg: '1.25', ion: 'Tm³⁺' },
    Yb: { name: 'Ytterbium', number: 70, mass: '173.0', valence: 3, group: 'Ln', category: 'Lantanoid', reactivity: 'Medel', electroneg: '1.10', ion: 'Yb²⁺/Yb³⁺' },
    Lu: { name: 'Lutetium', number: 71, mass: '175.0', valence: 3, group: 'Ln', category: 'Lantanoid', reactivity: 'Medel', electroneg: '1.27', ion: 'Lu³⁺' },
    
    // Actinides (89-103) - f-block elements
    Th: { name: 'Torium', number: 90, mass: '232.0', valence: 4, group: 'An', category: 'Aktinoid', reactivity: 'Medel', electroneg: '1.30', ion: 'Th⁴⁺', note: 'Radioaktivt' },
    Pa: { name: 'Protaktinium', number: 91, mass: '231.0', valence: 5, group: 'An', category: 'Aktinoid', reactivity: 'Hög', electroneg: '1.50', ion: 'Pa⁵⁺', note: 'Radioaktivt' },
    U:  { name: 'Uran', number: 92, mass: '238.0', valence: 6, group: 'An', category: 'Aktinoid', reactivity: 'Medel', electroneg: '1.38', ion: 'U⁶⁺', note: 'Kärnbränsle' },
    Np: { name: 'Neptunium', number: 93, mass: '237', valence: 5, group: 'An', category: 'Aktinoid', reactivity: 'Hög', electroneg: '1.36', ion: 'Np⁵⁺', note: 'Radioaktivt' },
    Pu: { name: 'Plutonium', number: 94, mass: '244', valence: 4, group: 'An', category: 'Aktinoid', reactivity: 'Hög', electroneg: '1.28', ion: 'Pu⁴⁺', note: 'Kärnvapen/bränsle' },
    Am: { name: 'Americium', number: 95, mass: '243', valence: 3, group: 'An', category: 'Aktinoid', reactivity: 'Hög', electroneg: '1.30', ion: 'Am³⁺', note: 'I rökdetektorer' },
    Cm: { name: 'Curium', number: 96, mass: '247', valence: 3, group: 'An', category: 'Aktinoid', reactivity: '-', electroneg: '1.30', ion: 'Cm³⁺', note: 'Radioaktivt' },
    Bk: { name: 'Berkelium', number: 97, mass: '247', valence: 3, group: 'An', category: 'Aktinoid', reactivity: '-', electroneg: '1.30', ion: 'Bk³⁺' },
    Cf: { name: 'Californium', number: 98, mass: '251', valence: 3, group: 'An', category: 'Aktinoid', reactivity: '-', electroneg: '1.30', ion: 'Cf³⁺' },
    Es: { name: 'Einsteinium', number: 99, mass: '252', valence: 3, group: 'An', category: 'Aktinoid', reactivity: '-', electroneg: '1.30', ion: 'Es³⁺' },
    Fm: { name: 'Fermium', number: 100, mass: '257', valence: 3, group: 'An', category: 'Aktinoid', reactivity: '-', electroneg: '1.30', ion: 'Fm³⁺' },
    Md: { name: 'Mendelevium', number: 101, mass: '258', valence: 3, group: 'An', category: 'Aktinoid', reactivity: '-', electroneg: '1.30', ion: 'Md³⁺' },
    No: { name: 'Nobelium', number: 102, mass: '259', valence: 2, group: 'An', category: 'Aktinoid', reactivity: '-', electroneg: '1.30', ion: 'No²⁺' },
    Lr: { name: 'Lawrencium', number: 103, mass: '266', valence: 3, group: 'An', category: 'Aktinoid', reactivity: '-', electroneg: '-', ion: 'Lr³⁺' }
};

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

// Lanthanides (58-71) - Ce to Lu (La is in main table)
const lanthanideData = [
    { symbol: "Ce", type: "lanthanide" },
    { symbol: "Pr", type: "lanthanide" },
    { symbol: "Nd", type: "lanthanide" },
    { symbol: "Pm", type: "lanthanide" },
    { symbol: "Sm", type: "lanthanide" },
    { symbol: "Eu", type: "lanthanide" },
    { symbol: "Gd", type: "lanthanide" },
    { symbol: "Tb", type: "lanthanide" },
    { symbol: "Dy", type: "lanthanide" },
    { symbol: "Ho", type: "lanthanide" },
    { symbol: "Er", type: "lanthanide" },
    { symbol: "Tm", type: "lanthanide" },
    { symbol: "Yb", type: "lanthanide" },
    { symbol: "Lu", type: "lanthanide" }
];

// Actinides (90-103) - Th to Lr (Ac is in main table)
const actinideData = [
    { symbol: "Th", type: "actinide" },
    { symbol: "Pa", type: "actinide" },
    { symbol: "U", type: "actinide" },
    { symbol: "Np", type: "actinide" },
    { symbol: "Pu", type: "actinide" },
    { symbol: "Am", type: "actinide" },
    { symbol: "Cm", type: "actinide" },
    { symbol: "Bk", type: "actinide" },
    { symbol: "Cf", type: "actinide" },
    { symbol: "Es", type: "actinide" },
    { symbol: "Fm", type: "actinide" },
    { symbol: "Md", type: "actinide" },
    { symbol: "No", type: "actinide" },
    { symbol: "Lr", type: "actinide" }
];

// View legends
const viewLegends = {
    metaltype: [
        { class: 'metal-type-metal', label: 'Metaller' },
        { class: 'metal-type-metalloid', label: 'Halvmetaller' },
        { class: 'metal-type-nonmetal', label: 'Icke-metaller' }
    ],
    groups: [
        { class: 'group-alkali', label: 'Alkalimetaller (Gr. 1)' },
        { class: 'group-alkaline', label: 'Alkaliska jordartsmetaller (Gr. 2)' },
        { class: 'group-halogen', label: 'Halogener (Gr. 17)' },
        { class: 'group-noble', label: 'Ädelgaser (Gr. 18)' },
        { class: 'group-other', label: 'Övriga grundämnen' }
    ]
};

let currentView = 'metaltype';

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
// PERIODIC TABLE WITH VIEWS
// ============================================
function initPeriodicTable() {
    const container = document.getElementById("miniPeriodicTable");
    if (!container) return;

    // Helper function to build element HTML
    function buildElementHtml(el, periodNum) {
        if (el.type === 'empty') {
            return `<div class="pt-element empty"></div>`;
        }
        const info = elementInfo[el.symbol];
        let tooltip = el.symbol;
        if (info) {
            tooltip = `${info.name} (${el.symbol})`;
            tooltip += `\nAtomnummer: ${info.number}`;
            tooltip += `\nAtommassa: ${info.mass} u`;
            if (typeof info.group === 'number') {
                tooltip += `\nGrupp: ${info.group} | Period: ${periodNum}`;
            } else {
                tooltip += `\nSerie: ${info.category}`;
            }
            tooltip += `\nKategori: ${info.category}`;
            tooltip += `\nValenselektroner: ${info.valence}`;
            tooltip += `\nTypisk jon: ${info.ion}`;
            if (info.electroneg && info.electroneg !== '-') {
                tooltip += `\nElektronegativitet: ${info.electroneg}`;
            }
            if (info.reactivity && info.reactivity !== '-') {
                tooltip += `\nReaktivitet: ${info.reactivity}`;
            }
            if (info.note) {
                tooltip += `\n⚡ ${info.note}`;
            }
        }
        return `<div class="pt-element ${el.type}" title="${tooltip}">${el.symbol}</div>`;
    }

    // Group numbers for header row
    const groupNumbers = ['', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];
    
    // Build header row with group numbers
    let html = groupNumbers.map((g, i) => {
        if (i === 0) return `<div class="pt-label pt-corner"></div>`;
        return `<div class="pt-label pt-group">${g}</div>`;
    }).join('');
    
    // Build periodic table rows with period labels
    let elementIndex = 0;
    
    for (let period = 0; period < 7; period++) {
        // Add period label
        html += `<div class="pt-label pt-period">${period + 1}</div>`;
        
        // Add elements for this period
        for (let col = 0; col < 18; col++) {
            const el = periodicData[elementIndex];
            elementIndex++;
            html += buildElementHtml(el, period + 1);
        }
    }
    
    container.innerHTML = html;

    // Build collapsible f-block section using same grid as main table
    // Grid: 30px label + 18 group columns = 19 total columns
    const fblockContainer = document.getElementById("fBlockElements");
    if (fblockContainer) {
        let fblockHtml = '';
        
        // Lanthanide row (period 6, elements 58-71 under groups 3-16)
        fblockHtml += `<div class="fblock-label">Ln</div>`;
        // Groups 1-2: 2 empty spacers
        fblockHtml += `<div class="fblock-spacer"></div><div class="fblock-spacer"></div>`;
        // Groups 3-16: Ce-Lu (14 elements)
        lanthanideData.forEach(el => {
            fblockHtml += buildElementHtml(el, 6);
        });
        // Groups 17-18: 2 empty spacers
        fblockHtml += `<div class="fblock-spacer"></div><div class="fblock-spacer"></div>`;
        
        // Actinide row (period 7, elements 90-103 under groups 3-16)
        fblockHtml += `<div class="fblock-label">An</div>`;
        // Groups 1-2: 2 empty spacers
        fblockHtml += `<div class="fblock-spacer"></div><div class="fblock-spacer"></div>`;
        // Groups 3-16: Th-Lr (14 elements)
        actinideData.forEach(el => {
            fblockHtml += buildElementHtml(el, 7);
        });
        // Groups 17-18: 2 empty spacers
        fblockHtml += `<div class="fblock-spacer"></div><div class="fblock-spacer"></div>`;
        
        fblockContainer.innerHTML = fblockHtml;
    }

    // Toggle button for f-block
    const toggleBtn = document.getElementById("fblockToggle");
    const fblockSection = document.getElementById("fBlockSection");
    if (toggleBtn && fblockSection) {
        toggleBtn.addEventListener('click', () => {
            fblockSection.classList.toggle('collapsed');
        });
    }

    // Set initial view
    container.classList.add('view-metaltype');
    updateLegend('metaltype');

    // View selector buttons
    const viewButtons = document.querySelectorAll('.view-btn');
    viewButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const view = btn.dataset.view;
            
            // Update active button
            viewButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            // Update table view
            container.classList.remove('view-metaltype', 'view-groups');
            container.classList.add(`view-${view}`);
            
            // Also update f-block section
            const fblock = document.getElementById("fBlockElements");
            if (fblock) {
                fblock.classList.remove('view-metaltype', 'view-groups');
                fblock.classList.add(`view-${view}`);
            }
            
            // Update legend
            updateLegend(view);
            currentView = view;
        });
    });
}

function updateLegend(view) {
    const legendContainer = document.getElementById('viewLegend');
    if (!legendContainer) return;

    const items = viewLegends[view] || [];
    legendContainer.innerHTML = items.map(item => `
        <div class="legend-item">
            <span class="legend-color ${item.class}"></span>
            <span>${item.label}</span>
        </div>
    `).join('');
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
