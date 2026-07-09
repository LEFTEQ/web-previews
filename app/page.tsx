import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "PES PLYNoELEKTRo Servis — pohotovostní elektroservis Karlovy Vary",
  description:
    "Rodinný elektro a plynoservis v Karlových Varech od roku 1990. Pohotovost 24/7 na tel. 608 356 111 — opravíme, co hoří i co nehoří.",
  openGraph: {
    title: "PES PLYNoELEKTRo Servis — Karlovy Vary",
    description:
      "Pohotovostní elektroservis a plynoservis. Volejte 608 356 111. Rodinná firma od roku 1990.",
    type: "website",
    locale: "cs_CZ",
    images: [{ url: "/hero.webp" }],
  },
};

const sluzby = [
  {
    faze: "L1",
    nazev: "Elektroinstalace a revize",
    text: "Zásuvky, jističe, rozvaděče i celé nové rozvody v bytě nebo dílně. Napíšeme revizní zprávu, která projde u pojišťovny i u kolaudace.",
  },
  {
    faze: "L2",
    nazev: "Plynové kotle a topení",
    text: "Servis, seřízení a výměna plynových kotlů. Poradíme s úspornějším zdrojem tepla dřív, než se rozbije ten starý uprostřed zimy.",
  },
  {
    faze: "L3",
    nazev: "Kontroly kotlů na tuhá paliva",
    text: "Povinná kontrola technického stavu podle zákona o ochraně ovzduší — každé tři roky. Vystavíme doklad, který si žádá obec.",
  },
  {
    faze: "PE",
    nazev: "Poruchy a havárie 24/7",
    text: "Vyhozené jističe, studený kotel, zkrat v noci. Přijedeme po Karlových Varech i okolí a spravíme to, co se opravit dá hned.",
  },
];

const duvera = [
  { cislo: "1990", popis: "na trhu jako rodinná firma" },
  { cislo: "24/7", popis: "pohotovost o víkendu i o svátcích" },
  { cislo: "3 obory", popis: "elektro, plyn a topení pod jednou střechou" },
];

export default function Page() {
  return (
    <main className="pes">
      <header className="pes-top">
        <a href="#uvod" className="pes-wordmark" aria-label="PES PLYNoELEKTRo Servis, úvod">
          <span className="pes-wordmark-lead">PES</span>
          <span className="pes-wordmark-rest">PLYNo<em>ELEKTRo</em>&nbsp;Servis</span>
        </a>
        <a className="pes-callchip" href="tel:+420608356111">
          <span className="pes-callchip-label">Pohotovost</span>
          <span className="pes-callchip-num">608&nbsp;356&nbsp;111</span>
        </a>
      </header>

      <section className="pes-hero" id="uvod">
        <div className="pes-hero-media">
          <img
            src="/hero.webp"
            alt="Elektrikář z firmy PES při práci na rozvaděči"
            className="pes-hero-img"
          />
        </div>
        <div className="pes-hero-body">
          <p className="pes-eyebrow">Elektroservis · Plyn · Topení — Karlovy Vary od 1990</p>
          <h1 className="pes-h1">
            Opravíme,<br />
            <span className="pes-h1-hot">co hoří</span>
            <span className="pes-h1-and"> i </span>
            <span className="pes-h1-cold">co nehoří.</span>
          </h1>
          <p className="pes-lede">
            Rodinná firma Roman&nbsp;Tichý. Když v noci zhasne půl bytu nebo
            vychladne kotel, zvednete telefon a my dojedeme. Přes den bereme
            objednávky na revize, kontroly a nové rozvody.
          </p>
          <div className="pes-hero-cta">
            <a className="pes-btn pes-btn-primary" href="tel:+420608356111">
              Zavolat 608&nbsp;356&nbsp;111
            </a>
            <a className="pes-btn pes-btn-ghost" href="mailto:tichypes@seznam.cz">
              Napsat e-mail
            </a>
          </div>
          <p className="pes-hero-note">
            Objednávky přijímáme každý pracovní den telefonicky.
          </p>
        </div>
      </section>

      <section className="pes-sluzby" aria-labelledby="sluzby-nadpis">
        <div className="pes-section-head">
          <p className="pes-eyebrow">Co u nás objednáte</p>
          <h2 id="sluzby-nadpis" className="pes-h2">
            Tři fáze a jedna pohotovost
          </h2>
          <p className="pes-section-sub">
            Elektro, plyn a topení řešíme komplexně — nemusíte shánět tři
            řemeslníky. Popisky u položek nejsou náhodné: L1–L3 jsou naše tři
            hlavní obory, PE je pohotovost.
          </p>
        </div>

        <ol className="pes-cards">
          {sluzby.map((s) => (
            <li className="pes-card" key={s.faze}>
              <span className="pes-card-phase" aria-hidden="true">
                {s.faze}
              </span>
              <h3 className="pes-card-title">{s.nazev}</h3>
              <p className="pes-card-text">{s.text}</p>
            </li>
          ))}
        </ol>

        <figure className="pes-sluzby-fig">
          <img
            src="/section-1.webp"
            alt="Detail plynového kotle při servisní kontrole"
            className="pes-fig-img"
          />
          <figcaption className="pes-fig-cap">
            Kontrolu kotle na tuhá paliva máte ze zákona povinnou každé tři roky —
            hlídáme za vás, kdy vyprší.
          </figcaption>
        </figure>
      </section>

      <section className="pes-ofirme" aria-labelledby="ofirme-nadpis">
        <figure className="pes-ofirme-fig">
          <img
            src="/section-2.webp"
            alt="Nářadí a měřicí přístroje elektroservisu PES"
            className="pes-fig-img"
          />
        </figure>
        <div className="pes-ofirme-body">
          <p className="pes-eyebrow">O firmě &amp; důvěra</p>
          <h2 id="ofirme-nadpis" className="pes-h2">
            Technologie, které bychom chtěli mít doma, nabízíme i vám
          </h2>
          <p className="pes-ofirme-text">
            Jsme rodinná firma z Karlových Varů. Od roku 1990 dáváme přednost
            kvalitním výrobkům a novým úsporným technologiím — abyste s námi
            záruční ani pozáruční opravy řešili co nejméně. Krizové situace
            bereme komplexně: nejdřív to zprovozníme, pak navrhneme, jak tomu
            příště předejít.
          </p>

          <dl className="pes-stats">
            {duvera.map((d) => (
              <div className="pes-stat" key={d.cislo}>
                <dt className="pes-stat-num">{d.cislo}</dt>
                <dd className="pes-stat-desc">{d.popis}</dd>
              </div>
            ))}
          </dl>

          <address className="pes-kontakt">
            <span className="pes-kontakt-label">Najdete nás</span>
            <span className="pes-kontakt-line">
              V. Meerwalda 347/3b, Dvory
            </span>
            <span className="pes-kontakt-line">
              360 06 Karlovy Vary
            </span>
            <a className="pes-kontakt-mail" href="mailto:tichypes@seznam.cz">
              tichypes@seznam.cz
            </a>
          </address>
        </div>
      </section>
    </main>
  );
}
