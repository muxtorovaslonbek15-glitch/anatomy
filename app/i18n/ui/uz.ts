import type { UiDictionary } from "../types";

export const ui: UiDictionary = {
  meta: {
    title: "Anatomy Atelier — anatomiyani rassom kabi o'rganing",
    description:
      "Yurak, miya, o'pka, jigar, buyraklar, ko'z, ichak, oshqozon osti bezi va teri kabi tibbiy jihatdan aniq 3D organlarni nafis va interaktiv anatomiya ustaxonasida o'rganing.",
    ogTitle: "Anatomy Atelier — anatomiyani rassom kabi o'rganing",
    ogDescription: "Anatomiyani rassom kabi o'rganing — bevosita, tibbiy jihatdan aniq 3D namunalar orqali.",
    imageAlt: "Anatomy Atelier logotipi yonida, poydevor ustida suzayotgan anatomik yurak namunasi",
  },
  brand: { tagline: "Anatomiyani rassom kabi o'rganing", home: "Anatomy Atelier bosh sahifasi" },
  nav: { explore: "Kashf etish", systems: "Tizimlar", lessons: "Darslar", library: "Kutubxona", notes: "Qaydlar" },
  search: { placeholder: "Organlar, mavzularni qidiring…" },
  profile: { open: "O'quvchi profilini ochish" },
  language: { label: "Til", choose: "Tilni tanlang" },
  library: {
    title: "Organlar kutubxonasi", open: "Organlar kutubxonasini ochish", close: "Kutubxonani yopish", saved: "Saqlangan organlar",
    viewAll: "Barcha organlarni ko'rish",
    quoteLine1: "O'rganish —", quoteLine2: "bu qiziquvchanlik harakati.", quoteSign: "Kashf etishda davom eting!",
  },
  tools: {
    label: "3D ko'rish vositalari", rotate: "Aylantirish", zoom: "Kattalashtirish", isolate: "Ajratish",
    section: "Kesim", layers: "Qatlamlar", compare: "Solishtirish", reset: "Qayta tiklash",
  },
  viewer: {
    title: "{organ} interaktiv ko'rinishi",
    canvas: "Interaktiv 3D anatomiya modeli. Aylantirish uchun torting, kattalashtirish uchun aylantiring va tuzilma haqida o'qish uchun nuqtani bosing.",
    tip: "Maslahat", tipDrag: "Aylantirish uchun torting", tipScroll: "Kattalashtirish uchun aylantiring", tipClick: "Ko'proq bilish uchun nuqtani bosing",
    loading: "{organ} tayyorlanmoqda", autoRotate: "Avtomatik aylanish",
    caption: "3D namuna · kashf etish uchun nuqtani bosing", structures: "Ushbu namunadagi tuzilmalar",
  },
  info: {
    kicker: "{organ}", keyFacts: "Asosiy faktlar", size: "O'lcham", weight: "Og'irlik", daily: "Kunlik",
    location: "Joylashuvi", bloodSupply: "Qon ta'minoti", function: "Vazifasi",
    medical: "Tibbiy ahamiyati", didYouKnow: "Bilasizmi", viewLesson: "Darsni ko'rish",
    animate: "Animatsiya", quiz: "Test", compare: "Solishtirish",
  },
  compare: {
    title: "Organlarni solishtirish", comparing: "Solishtirilmoqda", reference: "Ma'lumotnoma",
    primaryRole: "Asosiy vazifasi", scale: "Miqyos", vs: "va", close: "Solishtirishni yopish",
  },
  cards: {
    resources: "{organ} bo'yicha o'quv materiallari",
    microscopic: "Mikroskopik ko'rinish", compareOrgans: "Organlarni solishtirish", functionAnimation: "Vazifa animatsiyasi",
    clinicalNotes: "Klinik qaydlar", whereItWorks: "Qayerda ishlaydi", commonConditions: "Keng tarqalgan kasalliklar",
    exploreTissue: "To'qimani o'rganish", openComparison: "Solishtirishni ochish", playAnimation: "Animatsiyani ijro etish",
    seeAll: "Barchasini ko'rish", seeSystem: "Tizimni ko'rish",
    playAria: "{organ} vazifasi animatsiyasini ijro etish", systemAria: "{organ} tanada qayerda joylashganini ko'rish",
  },
  quiz: {
    start: "Belgilash testini boshlash", find: "Toping", progress: "{total} dan {current}",
    correct: "To'g'ri", wrong: "Unday emas", reveal: "Bu — {label}", answer: "{label} yashil rangda belgilangan",
    done: "Test yakunlandi", score: "{total} dan {score} tasi to'g'ri", retry: "Qayta urinish",
    exit: "Testdan chiqish", hint: "Modeldagi mos nuqtani bosing",
  },
  modal: {
    guided: "Yo'naltirilgan kashfiyot", close: "Yopish", continueExploring: "Kashf etishni davom ettirish",
    quizTitle: "{organ} bo'yicha tezkor test", motionTitle: "{organ} harakatda",
    bodyTitle: "{organ} tanada", insideTitle: "{organ} ichida",
    quizPrompt: "Qaysi bayonot {organ} ni eng yaxshi tavsiflaydi?",
    quizA: "U tanani saqlab turishda maxsus vazifani bajaradi",
    quizB: "U butunlay mustaqil ishlaydi",
    quizC: "U faqat uyqu paytida faol bo'ladi",
    lessonBody:
      "Ajratib ko'rsatilgan tuzilmalarni kuzating, namunani aylantiring va shaklni vazifa bilan bog'lang. Ushbu qisqa o'rganish lahzasi barqaror aqliy model qurish uchun mo'ljallangan.",
    systemIntro: "{location}. {organ} tananing qolgan qismi bilan qanday bog'langanini kuzating.",
    system: "Tizim", primaryRole: "Asosiy vazifasi", bloodSupply: "Qon ta'minoti",
  },
};
