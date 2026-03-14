const translations = {
  it: {
    lang: "it",
    icon: "🇮🇹",
    badge: "🇮🇹",
    toggleLabel: "IT",
    toggleAria: "Cambia lingua",
    title: "Trattori Affidabili per l’Agricoltura Moderna",
    p1: "GoRush Motors Verona è specializzata nella fornitura di trattori agricoli affidabili e performanti, progettati per garantire efficienza, potenza e durata nel lavoro quotidiano.",
    p2: "Offriamo una gamma completa di trattori per diverse esigenze operative, dall’agricoltura professionale alle aziende agricole di piccole e medie dimensioni. Ogni macchina è selezionata per offrire prestazioni solide, manutenzione semplice e un eccellente rapporto qualità-prezzo.",
    p3: "Il nostro team con sede a Verona supporta i clienti in ogni fase: scelta del modello più adatto, consulenza tecnica e assistenza dedicata.",
    p4: "Con GoRush Motors scegli una soluzione concreta per lavorare meglio, aumentare la produttività e investire in macchine affidabili nel tempo.",
    products: "I NOSTRI PRODOTTI",
    brochure: "Scarica brochure prodotti",
    product1: "TRATTORI STANDARD",
    product2: "TRATTORI PERSONALIZZATI",
    product3: "ATTREZZATURE & ACCESSORI"
    brochure: "Scarica brochure prodotti"
  },
  en: {
    lang: "en",
    icon: "🇬🇧",
    badge: "🇬🇧",
    toggleLabel: "EN",
    toggleAria: "Switch language",
    title: "Reliable Tractors for Modern Agriculture",
    p1: "GoRush Motors Verona specializes in supplying reliable, high-performance agricultural tractors designed to deliver efficiency, power, and durability in everyday operations.",
    p2: "We offer a complete range of tractors for different operational needs, from professional farming to small and medium-sized agricultural businesses. Each machine is selected to provide solid performance, easy maintenance, and excellent value for money.",
    p3: "Our Verona-based team supports clients at every stage: choosing the right model, technical consulting, and dedicated assistance.",
    p4: "With GoRush Motors, you choose a practical solution to work better, increase productivity, and invest in reliable machines over time.",
    products: "OUR PRODUCTS",
    brochure: "Download product brochure",
    product1: "STANDARD TRACTORS",
    product2: "CUSTOMIZED TRACTORS",
    product3: "EQUIPMENT & ACCESSORIES"
    brochure: "Download product brochure"
  }
};

const langToggle = document.getElementById("langToggle");
const langIcon = document.getElementById("langIcon");
const langLabel = document.getElementById("langLabel");
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
  langLabel.textContent = content.toggleLabel;
  mediaBadge.textContent = content.badge;
  langToggle.setAttribute("aria-label", content.toggleAria);
  langToggle.setAttribute("title", content.toggleAria);
}

langToggle.addEventListener("click", () => {
  currentLang = currentLang === "it" ? "en" : "it";
  renderLanguage(currentLang);
});

renderLanguage(currentLang);
