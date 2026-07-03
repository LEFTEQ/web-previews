import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "GAMET elektro s.r.o. — Elektroinstalace Pardubice",
  description:
    "Kompletní elektroinstalace v Pardubicích a okolí: silnoproud, slaboproud, hromosvody, revize a opravy. Rychlý nástup, čistá práce, protokol o revizi.",
  openGraph: {
    title: "GAMET elektro — Elektroinstalace Pardubice",
    description:
      "Silnoproud, slaboproud, hromosvody a revize pro domácnosti i firmy v Pardubickém kraji.",
    type: "website",
    locale: "cs_CZ",
  },
};

const sluzby = [
  {
    kod: "L1",
    nazev: "Elektroinstalace v bytech a domech",
    popis:
      "Kompletní rozvody při rekonstrukci i novostavbě — od rozvaděče po poslední zásuvku. Drážkování, kabeláž CYKY, zapojení a úklid po sobě.",
    detail: "Rozvaděč · zásuvkové a světelné okruhy · přípojky spotřebičů",
  },
  {
    kod: "L2",
    nazev: "Průmyslové a firemní instalace",
    popis:
      "Rozvody v halách, dílnách a provozovnách. Třífázové přívody ke strojům, osvětlení pracovišť, kabelové trasy v žlabech a lištách.",
    detail: "Motorové přívody 400 V · osvětlení hal · kabelové trasy",
  },
  {
    kod: "L3",
    nazev: "Hromosvody a přepěťové ochrany",
    popis:
      "Montáž a opravy hromosvodů podle ČSN EN 62305, včetně měření zemního odporu a předání revizní zprávy pro pojišťovnu.",
    detail: "Jímací soustava · uzemnění · svodiče přepětí",
  },
  {
    kod: "N",
    nazev: "Revize a odstranění závad",
    popis:
      "Pravidelné i výchozí revize elektroinstalací a spotřebičů. Když revize odhalí závadu, rovnou ji opravíme — nemusíte shánět druhou firmu.",
    detail: "Výchozí a periodické revize · revize spotřebičů · protokoly",
  },
  {
    kod: "PE",
    nazev: "Opravy a pohotovostní zásahy",
    popis:
      "Vypadává jistič? Nefunguje polovina bytu? Přijedeme po Pardubicích zpravidla do 24 hodin, závadu najdeme měřením, ne hádáním.",
    detail: "Hledání závad · výměny jističů a rozvaděčů · drobné opravy",
  },
];

const duvody = [
  {
    hodnota: "25+ let",
    text: "vedeme elektroinstalace v Pardubicích a okolí — od panelákových bytů po výrobní haly.",
  },
  {
    hodnota: "§ 6 + § 8",
    text: "osvědčení podle NV 194/2022 Sb. — samostatná činnost i revize. Každou zakázku předáváme s protokolem.",
  },
  {
    hodnota: "do 24 h",
    text: "nástup na havárie v Pardubicích, Chrudimi a Holicích. Na plánované zakázky termín do týdne.",
  },
  {
    hodnota: "0 Kč",
    text: "za obhlídku a cenovou nabídku. Cenu znáte předem, položkově — bez „vícekrálů“ na faktuře.",
  },
];

const reference = [
  {
    misto: "Bytový dům, Pardubice–Polabiny",
    prace: "Výměna stoupacích vedení a rozvaděčů ve 24 bytech, bez vystěhování nájemníků.",
  },
  {
    misto: "Truhlárna, Sezemice",
    prace: "Nové přívody 400 V k pěti strojům, osvětlení dílny, výchozí revize.",
  },
  {
    misto: "Rodinný dům, Staré Hradiště",
    prace: "Kompletní elektroinstalace novostavby včetně přípravy na fotovoltaiku a wallbox.",
  },
];

export default function Page() {
  return (
    <main className="ga-main">
      {/* ================= HERO ================= */}
      <header className="ga-hero">
        <div className="ga-hero-top">
          <div className="ga-wordmark" aria-label="GAMET elektro">
            <span className="ga-wordmark-bolt" aria-hidden="true">
              <svg viewBox="0 0 24 32" width="20" height="27" role="presentation" focusable="false">
                <path d="M14 0 2 18h7L8 32 22 12h-8L14 0Z" fill="currentColor" />
              </svg>
            </span>
            <span className="ga-wordmark-text">
              GAMET<span className="ga-wordmark-sub">elektro</span>
            </span>
          </div>
          <a className="ga-hero-call" href="tel:+420466123456">
            Zavolat: 466 123 456
          </a>
        </div>

        <div className="ga-hero-body">
          <p className="ga-hero-eyebrow">
            Elektroinstalace · revize · hromosvody — Pardubice a okolí
          </p>
          <h1 className="ga-hero-title">
            <span className="ga-line ga-line-1">Od jističe</span>
            <span className="ga-line ga-line-2">
              po poslední
            </span>
            <span className="ga-line ga-line-3">
              zásuvku<span className="ga-title-dot">.</span>
            </span>
          </h1>
          <p className="ga-hero-lead">
            Zapojíme, změříme, zrevidujeme — a předáme s protokolem. Elektrikáři
            s osvědčením, kteří po sobě uklidí a zvednou telefon i po předání.
          </p>
          <div className="ga-hero-actions">
            <a className="ga-btn ga-btn-primary" href="tel:+420466123456">
              Zavolat elektrikáře
            </a>
            <a className="ga-btn ga-btn-ghost" href="mailto:info@gametelektro.cz">
              Napsat poptávku
            </a>
          </div>
        </div>

        {/* Signature: schéma okruhu — liniové vedení jako v projektové dokumentaci */}
        <div className="ga-circuit" aria-hidden="true">
          <svg
            viewBox="0 0 1200 140"
            preserveAspectRatio="none"
            role="presentation"
            focusable="false"
            className="ga-circuit-svg"
          >
            <path
              className="ga-circuit-path"
              d="M0 90 H180 V40 H320 V90 H460 L500 50 L540 90 H700 V40 H840 V90 H1000 L1040 50 L1080 90 H1200"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
            />
            <circle className="ga-node ga-node-1" cx="180" cy="90" r="7" />
            <circle className="ga-node ga-node-2" cx="460" cy="90" r="7" />
            <circle className="ga-node ga-node-3" cx="700" cy="90" r="7" />
            <circle className="ga-node ga-node-4" cx="1000" cy="90" r="7" />
          </svg>
          <div className="ga-circuit-labels">
            <span>L1</span>
            <span>L2</span>
            <span>L3</span>
            <span>N</span>
            <span>PE</span>
          </div>
        </div>
      </header>

      {/* ================= SLUŽBY ================= */}
      <section className="ga-section ga-sluzby" aria-labelledby="sluzby-h">
        <div className="ga-section-head">
          <p className="ga-eyebrow">Co zapojíme</p>
          <h2 id="sluzby-h" className="ga-section-title">
            Pět okruhů naší práce
          </h2>
          <p className="ga-section-lead">
            Značíme je jako vodiče v rozvaděči — L1 až L3 jsou fáze naší denní
            práce, N a PE drží všechno bezpečné a v normě.
          </p>
        </div>

        <ul className="ga-sluzby-list">
          {sluzby.map((s) => (
            <li key={s.kod} className="ga-sluzba">
              <span className={`ga-sluzba-kod ga-kod-${s.kod.toLowerCase()}`}>
                {s.kod}
              </span>
              <div className="ga-sluzba-obsah">
                <h3 className="ga-sluzba-nazev">{s.nazev}</h3>
                <p className="ga-sluzba-popis">{s.popis}</p>
                <p className="ga-sluzba-detail">{s.detail}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* ================= DŮVĚRA ================= */}
      <section className="ga-section ga-duvera" aria-labelledby="duvera-h">
        <div className="ga-section-head">
          <p className="ga-eyebrow ga-eyebrow-invert">Proč GAMET</p>
          <h2 id="duvera-h" className="ga-section-title ga-section-title-invert">
            Změřeno, ne odhadnuto
          </h2>
        </div>

        <dl className="ga-duvody">
          {duvody.map((d) => (
            <div key={d.hodnota} className="ga-duvod">
              <dt className="ga-duvod-hodnota">{d.hodnota}</dt>
              <dd className="ga-duvod-text">{d.text}</dd>
            </div>
          ))}
        </dl>

        <div className="ga-reference">
          <h3 className="ga-reference-title">Poslední zakázky v kraji</h3>
          <ul className="ga-reference-list">
            {reference.map((r) => (
              <li key={r.misto} className="ga-referenceItem">
                <span className="ga-reference-misto">{r.misto}</span>
                <span className="ga-reference-prace">{r.prace}</span>
              </li>
            ))}
          </ul>
          <p className="ga-duvera-pozn">
            Působíme v Pardubicích, Chrudimi, Holicích, Přelouči a do 30 km od
            Pardubic. Sídlo: Pardubice.
          </p>
        </div>
      </section>
    </main>
  );
}
