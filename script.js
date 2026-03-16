const translations = {
  it: {
    lang: "it",
    icon: "🇮🇹",
    title: "Trattori Affidabili per l’Agricoltura Moderna",
    p1: "GoRush Motors Verona è specializzata nella fornitura di trattori agricoli affidabili e performanti, progettati per garantire efficienza, potenza e durata nel lavoro quotidiano.",
    p2: "Offriamo una gamma completa di trattori per diverse esigenze operative, dall’agricoltura professionale alle aziende agricole di piccole e medie dimensioni. Ogni macchina è selezionata per offrire prestazioni solide, manutenzione semplice e un eccellente rapporto qualità-prezzo.",
    p3: "Il nostro team con sede a Verona supporta i clienti in ogni fase: scelta del modello più adatto, consulenza tecnica e assistenza dedicata.",
    p4: "Con GoRush Motors scegli una soluzione concreta per lavorare meglio, aumentare la produttività e investire in macchine affidabili nel tempo.",
    products: "OUR PRODUCTS",
    brochure: "Download product brochure",
    toggleAria: "Cambia lingua"
  },
  en: {
    lang: "en",
    icon: "🇬🇧",
    title: "Reliable Tractors for Modern Agriculture",
    p1: "GoRush Motors Verona specializes in the supply of reliable, high-performance agricultural tractors, engineered to ensure efficiency, power, and long-term durability in everyday operations.",
    p2: "We provide a complete tractor range for different operational needs, from professional agriculture to small and medium-sized farms. Every machine is selected to deliver solid performance, easy maintenance, and excellent value for money.",
    p3: "Our Verona-based team supports clients at every stage: choosing the right model, technical consulting, and dedicated assistance.",
    p4: "With GoRush Motors, you choose a practical solution to work better, increase productivity, and invest in reliable machines over time.",
    products: "OUR PRODUCTS",
    brochure: "Download product brochure",
    toggleAria: "Switch language"
  }
};

const langToggle = document.getElementById("langToggle");
const langIcon = document.getElementById("langIcon");
const mediaBadge = document.getElementById("mediaBadge");
let currentLang = "it";

function renderLanguage(langKey) {
  const content = translations[langKey];
  document.documentElement.lang = content.lang;

  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const key = node.getAttribute("data-i18n");
    node.textContent = content[key];
  });

  langIcon.textContent = content.icon;
  mediaBadge.textContent = content.icon;
  langToggle.setAttribute("aria-label", content.toggleAria);
  langToggle.setAttribute("title", content.toggleAria);
}

langToggle.addEventListener("click", () => {
  currentLang = currentLang === "it" ? "en" : "it";
  renderLanguage(currentLang);
});

renderLanguage(currentLang);
