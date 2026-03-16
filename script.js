const translations = {
  it: {
    lang: "it",
    icon: "🇮🇹",
    title: "Trattori Affidabili per l’Agricoltura Moderna",
    p1: "GoRush Motors Verona è specializzata nella fornitura di trattori agricoli affidabili e performanti, progettati per garantire efficienza, potenza e durata nel lavoro quotidiano.",
    p2: "Offriamo una gamma completa di trattori per diverse esigenze operative, dall’agricoltura professionale alle aziende agricole di piccole e medie dimensioni. Ogni macchina è selezionata per offrire prestazioni solide, manutenzione semplice e un eccellente rapporto qualità-prezzo.",
    p3: "Il nostro team con sede a Verona supporta i clienti in ogni fase: scelta del modello più adatto, consulenza tecnica e assistenza dedicata.",
    p4: "Con GoRush Motors scegli una soluzione concreta per lavorare meglio, aumentare la produttività e investire in macchine affidabili nel tempo.",
    brochure: "Scarica brochure prodotti",
    card1: "TRATTORI STANDARD",
    card2: "TRATTORI PERSONALIZZATI",
    card3: "ATTREZZATURE & ACCESSORI",
    toggleAria: "Cambia lingua",
    closeModal: "Chiudi",
    modalStandardTitle: "Modelli di Trattori Standard",
    selectPower: "Seleziona potenza",
    modalCustomizedTitle: "Modelli di Trattori Personalizzati",
    customA: "Trattore per serre e frutteti",
    customAEn: "Garden & Orchard Tractor",
    customB: "Modello emissioni Euro V",
    customBEn: "Euro V Emission Model",
    customC: "Trattore con pneumatici industriali",
    customCEn: "Industrial Tire Model",
    modalEquipmentTitle: "Accessori & Attrezzature Agricole",
    equipmentAccessoriesTitle: "A. Accessori",
    equipmentImplementsTitle: "B. Attrezzature",
    equip1: "Caricatore Frontale / Front End Loader",
    equip2: "Terna / Backhoe",
    equip3: "Forca per Pallet / Pallet Fork",
    equip4: "Pinza per Tronchi / Log Grab",
    equip5: "Apripista / Bulldozer",
    equip6: "Forca per Fieno / Hay Fork",
    equip7: "Pinza per Balle / Bale Clip",
    equip8: "Aratro a Dischi / Disc Plough",
    equip9: "Erpice a Dischi / Disc Harrow",
    equip10: "Falciatrice a Lame / Slasher Mower",
    equip11: "Trinciatrice / Flail Mower",
    equip12: "Imballatrice / Baler",
    equip13: "Falciatrice a Dischi / Disc Mower",
    equip14: "Motozappa Rotativa / Rotary Tiller",
    equip15: "Aratro a Vomere / Furrow Plow",
    equip16: "Aratro Reversibile / Flip Plow",
    equip17: "Coltivatore / Cultivator",
    equip18: "Ripuntatore / Subsoiler",
    equip19: "Rimorchio Ribaltabile / Dump Trailer",
    equip20: "Seminatrice Pneumatica / Pneumatic Seeder",
    equip21: "Atomizzatore / Blown Sprayer"
  },
  en: {
    lang: "en",
    icon: "🇬🇧",
    title: "Reliable Tractors for Modern Agriculture",
    p1: "GoRush Motors Verona specializes in the supply of reliable, high-performance agricultural tractors, engineered to ensure efficiency, power, and long-term durability in everyday operations.",
    p2: "We provide a complete tractor range for different operational needs, from professional agriculture to small and medium-sized farms. Every machine is selected to deliver solid performance, easy maintenance, and excellent value for money.",
    p3: "Our Verona-based team supports clients at every stage: choosing the right model, technical consulting, and dedicated assistance.",
    p4: "With GoRush Motors, you choose a practical solution to work better, increase productivity, and invest in reliable machines over time.",
    brochure: "Download product brochure",
    card1: "STANDARD TRACTORS",
    card2: "CUSTOMIZED TRACTORS",
    card3: "EQUIPMENT & ACCESSORIES",
    toggleAria: "Switch language",
    closeModal: "Close",
    modalStandardTitle: "Standard Tractor Models",
    selectPower: "Select power",
    modalCustomizedTitle: "Customized Tractor Models",
    customA: "Greenhouse & Orchard Tractor",
    customAEn: "Garden & Orchard Tractor",
    customB: "Euro V Emission Model",
    customBEn: "Euro V Emission Model",
    customC: "Industrial Tire Tractor",
    customCEn: "Industrial Tire Model",
    modalEquipmentTitle: "Attachment & Implements",
    equipmentAccessoriesTitle: "A. Attachments",
    equipmentImplementsTitle: "B. Implements",
    equip1: "Front End Loader",
    equip2: "Backhoe",
    equip3: "Pallet Fork",
    equip4: "Log Grab",
    equip5: "Bulldozer",
    equip6: "Hay Fork",
    equip7: "Bale Clip",
    equip8: "Disc Plough",
    equip9: "Disc Harrow",
    equip10: "Slasher Mower",
    equip11: "Flail Mower",
    equip12: "Baler",
    equip13: "Disc Mower",
    equip14: "Rotary Tiller",
    equip15: "Furrow Plow",
    equip16: "Flip Plow",
    equip17: "Cultivator",
    equip18: "Subsoiler",
    equip19: "Dump Trailer",
    equip20: "Pneumatic Seeder",
    equip21: "Blown Sprayer"
  }
};

const langToggle = document.getElementById("langToggle");
const langIcon = document.getElementById("langIcon");
const mediaBadge = document.getElementById("mediaBadge");
const modals = document.querySelectorAll(".modal");
const modalOpeners = document.querySelectorAll("[data-modal-open]");
const accessoriesCard = document.getElementById("accessoriesCard");
let currentLang = "it";
let lastTrigger = null;

function renderLanguage(langKey) {
  const content = translations[langKey];
  document.documentElement.lang = content.lang;

  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const key = node.getAttribute("data-i18n");
    if (content[key]) node.textContent = content[key];
  });

  document.querySelectorAll("[data-i18n-aria-label]").forEach((node) => {
    const key = node.getAttribute("data-i18n-aria-label");
    if (content[key]) node.setAttribute("aria-label", content[key]);
  });

  langIcon.textContent = content.icon;
  mediaBadge.textContent = content.icon;
  langToggle.setAttribute("aria-label", content.toggleAria);
  langToggle.setAttribute("title", content.toggleAria);
}

function openModal(modalId, trigger) {
  const modal = document.getElementById(modalId);
  if (!modal) return;

  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
  lastTrigger = trigger;
}

function closeModal(modal) {
  modal.classList.remove("is-open");
  modal.setAttribute("aria-hidden", "true");
  const hasOpenModal = [...modals].some((entry) => entry.classList.contains("is-open"));
  if (!hasOpenModal) {
    document.body.style.overflow = "";
    if (lastTrigger) lastTrigger.focus();
  }
}

modalOpeners.forEach((trigger) => {
  trigger.addEventListener("click", () => {
    const modalId = trigger.getAttribute("data-modal-open");
    openModal(modalId, trigger);
  });
});

modals.forEach((modal) => {
  modal.addEventListener("click", (event) => {
    if (event.target.hasAttribute("data-modal-close")) {
      closeModal(modal);
    }
  });
});

document.addEventListener("keydown", (event) => {
  if (event.key !== "Escape") return;

  const openedModal = [...modals].find((modal) => modal.classList.contains("is-open"));
  if (openedModal) closeModal(openedModal);
});

if (accessoriesCard) {
  accessoriesCard.addEventListener("click", () => {
    window.location.href = "accessories.html";
  });
}

langToggle.addEventListener("click", () => {
  currentLang = currentLang === "it" ? "en" : "it";
  renderLanguage(currentLang);
});

renderLanguage(currentLang);
