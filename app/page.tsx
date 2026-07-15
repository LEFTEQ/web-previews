import React from "react";

const STRATA = [
  { n: 5, mod: "omitka", name: "Omítka", chip: "1,5 mm · K" },
  { n: 4, mod: "sterka", name: "Základní vrstva", chip: "3 mm" },
  { n: 3, mod: "sit", name: "Výztužná síťovina", chip: "160 g/m²" },
  { n: 2, mod: "deska", name: "Izolační deska", chip: "λ 0,032" },
  { n: 1, mod: "malta", name: "Lepicí malta", chip: "C1TE" },
  { n: 0, mod: "podklad", name: "Podklad", chip: "ČSN 73 2901" },
];

const CATALOG = [
  {
    num: "01",
    name: "Podklad",
    chip: "Příprava",
    text: "Penetrace, zpevnění a vyrovnání zdiva nebo betonu. Bez zdravého podkladu nedrží nic, co přijde nad něj.",
  },
  {
    num: "02",
    name: "Lepicí malta",
    chip: "C1TE",
    text: "Lepicí a armovací hmota Torggler pro přilepení desek k podkladu i pro pozdější výztužnou vrstvu.",
  },
  {
    num: "03",
    name: "Izolační deska",
    chip: "λ 0,032",
    text: "Fasádní EPS i minerální vata — vybíráme podle tepelných a požárních požadavků konkrétního projektu.",
  },
  {
    num: "04",
    name: "Výztužná síťovina",
    chip: "160 g/m²",
    text: "Sklotextilní síť do stěrky. Rozvádí pnutí a brání prasklinám v ploše i na exponovaných rozích.",
  },
  {
    num: "05",
    name: "Základní vrstva",
    chip: "3 mm",
    text: "Armovací stěrka s vloženou sítí — rovná, pevná vrstva připravená přesně pod finální omítku.",
  },
  {
    num: "06",
    name: "Omítka",
    chip: "1,5 mm",
    text: "Silikonová a silikátová probarvená omítka. Finální pohledová i ochranná vrstva celé fasády.",
  },
];

const SPEC = [
  ["Na trhu", "30 let dodávek stavebních materiálů"],
  ["Systém Torggler", "160 let vývoje · výhradní zastoupení pro ČR"],
  ["Region", "České Budějovice a jižní Čechy"],
  ["Pro koho", "architekti · projektanti · rozpočtáři · firmy"],
  ["Provozní doba", "Po–Pá 7:00–15:30"],
  ["Telefon", "+420 387 311 521"],
];

const RANGE = [
  "Zateplovací systémy ETICS",
  "Sanační omítky",
  "Hydroizolace",
  "Podlahové systémy",
  "Stavební chemie",
  "Izolace a distanční technika",
];

export default function Page() {
  return (
    <main className="c-main">
      <header className="c-head">
        <div className="c-wrap c-head__row">
          <div className="c-mark" aria-label="CAPRO">
            CAPRO<span className="c-mark__reg">spol. s r.o.</span>
          </div>
          <a className="c-head__tel" href="tel:+420387311521">
            <span className="c-head__tel-label">Po–Pá 7:00–15:30</span>
            +420&nbsp;387&nbsp;311&nbsp;521
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="c-section c-hero" aria-labelledby="hero-h">
        <div className="c-wrap c-hero__grid">
          <div className="c-hero__lead">
            <p className="c-eyebrow">ETICS · Fasádní zateplení · České Budějovice</p>
            <h1 id="hero-h" className="c-h1">
              Zateplení čteme jako&nbsp;skladbu&nbsp;— vrstvu po&nbsp;vrstvě.
            </h1>
            <p className="c-lead">
              CAPRO dodává kompletní zateplovací systémy Torggler: od lepicí malty přes
              izolační desku a výztužnou síť až po finální omítku. Třicet let vozíme materiál
              i technické podklady architektům, projektantům a stavebním firmám na jihu Čech.
            </p>
            <div className="c-cta">
              <a className="c-btn c-btn--red" href="#nabidka">Prohlédnout skladbu</a>
              <a className="c-btn c-btn--ghost" href="tel:+420387311521">Zavolat na obchod</a>
            </div>
          </div>

          <figure
            className="c-drawing"
            role="img"
            aria-label="Řez skladbou zateplení ETICS zdola nahoru: podklad, lepicí malta, izolační deska, výztužná síťovina, základní vrstva, omítka."
          >
            <div className="c-drawing__stack">
              {STRATA.map((s) => (
                <div
                  key={s.mod}
                  className={`c-strat c-strat--${s.mod}`}
                  style={{ ["--n" as string]: s.n }}
                >
                  <span className="c-strat__name">{s.name}</span>
                  <span className="c-chip">{s.chip}</span>
                </div>
              ))}
            </div>
            <figcaption className="c-drawing__cap">
              <span>Řez skladbou ETICS</span>
              <span>zdola nahoru →</span>
            </figcaption>
          </figure>
        </div>
      </section>

      {/* NABÍDKA — každá dlaždice = jedna vrstva skladby */}
      <section className="c-section c-cat" id="nabidka" aria-labelledby="cat-h">
        <div className="c-wrap">
          <div className="c-sec-head">
            <p className="c-eyebrow c-eyebrow--dark">Sortiment podle vrstev</p>
            <h2 id="cat-h" className="c-h2">Materiál pro každou vrstvu fasády</h2>
            <p className="c-sec-sub">
              Nedodáváme jednotlivé pytle — dodáváme celý systém, který spolu drží.
              Čísla dlaždic odpovídají pořadí vrstev v řezu výše.
            </p>
          </div>

          <ol className="c-tiles">
            {CATALOG.map((t) => (
              <li key={t.num} className="c-tile">
                <div className="c-tile__top">
                  <span className="c-tile__num">{t.num}</span>
                  <span className="c-chip c-chip--dark">{t.chip}</span>
                </div>
                <h3 className="c-tile__name">{t.name}</h3>
                <p className="c-tile__text">{t.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* DŮVĚRA — spec list */}
      <section className="c-section c-about" aria-labelledby="about-h">
        <div className="c-wrap c-about__grid">
          <div className="c-about__lead">
            <p className="c-eyebrow">Proč CAPRO</p>
            <h2 id="about-h" className="c-h2 c-h2--light">
              Dodavatel i inženýr v&nbsp;jednom listu.
            </h2>
            <p className="c-about__text">
              Přes třicet let se zabýváme dodavatelskou a inženýrskou činností v oboru
              speciálních stavebních materiálů a stavební chemie. Kromě zateplení řešíme
              sanace, hydroizolace i podlahy a věnujeme se výstavbě nízkoenergetických
              a pasivních domů. K objednávce vždy dostanete i technický podklad, ne jen cenu.
            </p>
            <ul className="c-range">
              {RANGE.map((r) => (
                <li key={r} className="c-range__item">{r}</li>
              ))}
            </ul>
          </div>

          <dl className="c-spec">
            {SPEC.map(([k, v]) => (
              <div key={k} className="c-spec__row">
                <dt className="c-spec__k">{k}</dt>
                <dd className="c-spec__v">{v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>
    </main>
  );
}
