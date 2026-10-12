export const EMAIL = "zvc.hk@zvcsro.cz";

export type Person = {
  name: string;
  role: string;
  short: string;
  roleShort: string;
  phone: string;
  tel: string;
};

export const PEOPLE: Person[] = [
  {
    name: "Jakub Matoušek",
    role: "jednatel",
    short: "J. Matoušek",
    roleShort: "jednatel",
    phone: "+420 731 180 036",
    tel: "tel:+420731180036",
  },
  {
    name: "Lenka Klausová",
    role: "obchodní referent",
    short: "L. Klausová",
    roleShort: "obchod",
    phone: "+420 602 209 096",
    tel: "tel:+420602209096",
  },
];

export const ADDRESSES = [
  {
    label: "Sídlo firmy",
    lines: ["Za Škodovkou 898", "503 11 Hradec Králové"],
    query: "Za Škodovkou 898, 503 11 Hradec Králové",
  },
  {
    label: "Kancelář / korespondenční adresa",
    lines: ["Areál ZVU", "Pražská třída 315", "500 04 Hradec Králové"],
    query: "Pražská třída 315, 500 04 Hradec Králové",
  },
];

export type StratumItem = { code: string; label: string };

export type Stratum = {
  id: string;
  index: string;
  label: string;
  stake: string;
  title: string;
  intro: string;
  items: StratumItem[];
  bg: string;
  fg: string;
  dark: boolean;
  divider: { variant: "clay" | "water" | "rubble" | "ink"; from: string; stroke: string; hatch: string };
  swatch: string;
  image?: { src: string; alt: string };
};

export const STRATA: Stratum[] = [
  {
    id: "zemni-prace",
    index: "01",
    label: "Zemní práce",
    stake: "Řez A–A · km 0,000",
    title: "Zemní práce",
    intro:
      "Výkopy, základy, hráze a cesty – práce, které mění tvar terénu a připravují ho pro další stavbu.",
    items: [
      { code: "ZP-01", label: "základy pro výstavbu komunikací" },
      { code: "ZP-02", label: "rekultivace krajiny" },
      { code: "ZP-03", label: "stavba protipovodňových hrází a poldrů" },
      { code: "ZP-04", label: "výkopy a hloubení základů" },
      { code: "ZP-05", label: "terénní úpravy" },
      { code: "ZP-06", label: "výkopové práce pro inženýrské sítě" },
      { code: "ZP-07", label: "výstavba a oprava polních a lesních cest" },
    ],
    bg: "#D8C6A8",
    fg: "#1F2124",
    dark: false,
    divider: { variant: "clay", from: "#E9E1D3", stroke: "#8A6A4A", hatch: "#8A6A4A" },
    swatch: "#8A6A4A",
  },
  {
    id: "vodohospodarska-cinnost",
    index: "02",
    label: "Vodohospodářská činnost",
    stake: "Řez A–A · km 0,120",
    title: "Vodohospodářská činnost",
    intro:
      "Nádrže, biocentra, revitalizace rybníků a toků, meliorace a stavby přímo na vodních tocích.",
    items: [
      { code: "VH-01", label: "výstavba vodních nádrží" },
      { code: "VH-02", label: "výstavba biocenter" },
      { code: "VH-03", label: "revitalizace rybníků" },
      { code: "VH-04", label: "revitalizace říčních toků" },
      { code: "VH-05", label: "meliorace" },
      { code: "VH-06", label: "stavba objektů na tocích (prahy, kamenné zdi, jezy)" },
    ],
    bg: "#2F5D50",
    fg: "#E9E1D3",
    dark: true,
    divider: { variant: "water", from: "#D8C6A8", stroke: "#CFE0D6", hatch: "#1C3F35" },
    swatch: "#2F5D50",
    image: {
      src: "/section-2.webp",
      alt: "Ilustrační obrázek vytvořený umělou inteligencí k tématu vodohospodářských staveb",
    },
  },
  {
    id: "demolice",
    index: "03",
    label: "Demoliční práce",
    stake: "Řez A–A · km 0,240",
    title: "Demoliční práce",
    intro: "Demolice zděných i betonových staveb včetně odvozu stavební suti z místa stavby.",
    items: [
      { code: "DP-01", label: "demolice staveb zděných i betonových" },
      { code: "DP-02", label: "odvoz stavební suti" },
    ],
    bg: "#A7A9A6",
    fg: "#1F2124",
    dark: false,
    divider: { variant: "rubble", from: "#2F5D50", stroke: "#1F2124", hatch: "#6C6E6B" },
    swatch: "#A7A9A6",
    image: {
      src: "/section-1.webp",
      alt: "Ilustrační obrázek vytvořený umělou inteligencí k tématu demoličních prací",
    },
  },
  {
    id: "autodoprava",
    index: "04",
    label: "Autodoprava",
    stake: "Řez A–A · km 0,360",
    title: "Autodoprava",
    intro: "Doprava stavebního materiálu. Trasu, druh a množství materiálu upřesněte v poptávce.",
    items: [{ code: "AD-01", label: "doprava stavebního materiálu" }],
    bg: "#1F2124",
    fg: "#E9E1D3",
    dark: true,
    divider: { variant: "ink", from: "#A7A9A6", stroke: "#F2B705", hatch: "#4A4C50" },
    swatch: "#1F2124",
  },
];
