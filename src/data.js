export const CONTACT = {
  brand: "GEMARE AGENCY",
  company: "GEMARE GROUP s.r.o.",
  email: "info@gemareagency.cz",
  mobile: { label: "+420 604 632 632", short: "604 632 632", href: "tel:+420604632632" },
  landline: { label: "+420 585 438 092", href: "tel:+420585438092" },
  address: ["Horní lán 9", "779 00 Olomouc", "Česká republika"],
  mapUrl: "https://mapy.cz/zakladni?q=Horn%C3%AD%20l%C3%A1n%209%2C%20779%2000%20Olomouc",
};

export const NAV = [
  { href: "#pro-koho", label: "Pro koho" },
  { href: "#tematicke-programy", label: "Tematické programy" },
  { href: "#nabidka", label: "Nabídka" },
  { href: "#poptavka", label: "Poptávka" },
  { href: "#kontakt", label: "Kontakt" },
];

export const AUDIENCES = [
  {
    id: "firmy",
    no: "01",
    title: "Firmy",
    color: "var(--color-hummer)",
    img: "/hero.webp",
    pos: "30% 50%",
    text: "Akce pro zaměstnance, obchodní partnery i jejich rodiny.",
    items: ["Firemní akce", "Teambuildingy", "Rodinné dny"],
  },
  {
    id: "centra",
    no: "02",
    title: "Obchodní centra",
    color: "var(--color-akce)",
    img: "/section-1.webp",
    pos: "50% 50%",
    text: "Program pro návštěvníky přímo v obchodním centru nebo u něj.",
    items: ["Akce v obchodních centrech", "Atrakce", "Tematické programy"],
  },
  {
    id: "obce",
    no: "03",
    title: "Obce",
    color: "var(--color-radnice)",
    img: "/section-2.webp",
    pos: "50% 50%",
    text: "Setkání a slavnosti pro obyvatele obce nebo města.",
    items: ["Akce pro obce", "Pódia a ozvučení", "Stany"],
  },
  {
    id: "tema",
    no: "04",
    title: "Tematické akce",
    color: "var(--color-zlato)",
    img: "/hero.webp",
    pos: "80% 50%",
    text: "Akce, kterou drží pohromadě jedno téma.",
    items: ["Tematické programy", "Atrakce", "Stany a pódia"],
  },
];

export const GROUPS = [
  { id: "vse", label: "Vše" },
  { id: "akce", label: "Akce" },
  { id: "programy", label: "Programy" },
  { id: "technika", label: "Technika" },
];

export const GROUP_COLOR = {
  akce: "var(--color-hummer)",
  programy: "var(--color-akce)",
  technika: "var(--color-radnice)",
};

export const CATALOG = [
  { id: "AKC-01", group: "akce", name: "Firemní akce", text: "Firemní setkání, oslava nebo den pro partnery. Rozsah a program se upřesní podle vašeho zadání." },
  { id: "AKC-02", group: "akce", name: "Teambuildingy", text: "Společný program pro tým. Formu, místo a délku popište v poptávce." },
  { id: "AKC-03", group: "akce", name: "Rodinné dny", text: "Den pro zaměstnance a jejich rodiny s programem pro děti i dospělé." },
  { id: "AKC-04", group: "akce", name: "Akce pro obce", text: "Slavnosti a setkání pro obyvatele obce nebo města." },
  { id: "AKC-05", group: "akce", name: "Akce v obchodních centrech", text: "Program pro návštěvníky obchodního centra." },
  { id: "PRG-06", group: "programy", name: "Tematické programy", text: "Akce spojená jedním tématem – od výzdoby po soutěže." },
  { id: "TEC-07", group: "technika", name: "Atrakce", text: "Zábavné atrakce k vaší akci. Výběr se odvíjí od místa a publika." },
  { id: "TEC-08", group: "technika", name: "Pódia", text: "Pódium pro vystoupení, moderování nebo vyhlášení výsledků." },
  { id: "TEC-09", group: "technika", name: "Ozvučení", text: "Ozvučení pro program, hudbu i mluvené slovo." },
  { id: "TEC-10", group: "technika", name: "Stany", text: "Stany pro zázemí, občerstvení nebo program pod střechou." },
];
