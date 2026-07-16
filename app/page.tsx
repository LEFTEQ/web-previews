import { CutEarth, DepthRuler } from "./motion";

const STRATA = [
  { material: "Ornice", depth: "0,0–0,3 m", color: "#2b2820", text: "#d6d3ca" },
  { material: "Hlína", depth: "0,3–1,5 m", color: "#a9772f", text: "#23211c" },
  { material: "Jíl", depth: "1,5–3,0 m", color: "#7c4728", text: "#ecdccb" },
  { material: "Štěrk", depth: "3,0–5,0 m", color: "#6f6d66", text: "#23211c" },
  { material: "Skála", depth: "od 5,0 m", color: "#1b1915", text: "#9a978e" },
];

const SERVICES = [
  {
    tag: "HL. 0–4 m",
    name: "Rypadla",
    desc: "Výkopy základů, bazénů a přípojek. Kopeme čistě až na únosnou vrstvu, s obsluhou i bez ní.",
    note: "základy · sítě · bazény",
    color: "#7c4728",
  },
  {
    tag: "POVRCH",
    name: "Nakladače a dozery",
    desc: "Hrubé terénní úpravy a přesun zemin. Srovnáme pozemek do roviny nebo do projektovaného spádu.",
    note: "srovnání · přesun",
    color: "#a9772f",
  },
  {
    tag: "TRANSPORT",
    name: "Autodoprava",
    desc: "Sklápěče na odvoz výkopku a návoz štěrku, recyklátu i ornice. Dovezeme, co stavba potřebuje.",
    note: "odvoz · návoz",
    color: "#6f6d66",
  },
  {
    tag: "ÚZKÉ HL.",
    name: "Malá mechanizace",
    desc: "Výkopy v těsných místech u domu i na zahradě, kam velký stroj nedosáhne. Bez zbytečných škod.",
    note: "přípojky · zahrady",
    color: "#8a5b33",
  },
  {
    tag: "HUTNĚNÍ",
    name: "Silniční válce",
    desc: "Hutnění podkladů, cest a zpevných ploch. Podklad, který drží a nesedá pod tíhou provozu.",
    note: "podklady · cesty",
    color: "#2b2820",
  },
];

export default function Page() {
  return (
    <>
      <DepthRuler />
      <div className="page">
        <header className="topbar">
          <a className="mark" href="#top" aria-label="Terrabau, domů">
            <span className="mark-dot" aria-hidden="true" />
            TERRA<span className="mark-b">BAU</span>
          </a>
          <a className="topbar-tel" href="tel:+420608957697">608&nbsp;957&nbsp;697</a>
        </header>

        <section className="hero" id="top">
          <div className="wrap">
            <p className="eyebrow">Zemní práce · Brno · od roku 1998</p>
            <h1 className="hero-title">
              Od povrchu<br />po skálu
            </h1>
            <p className="hero-lead">
              Výkopy základů, přípojky inženýrských sítí, pozemní komunikace i
              demolice — v Brně a okolí přes pětadvacet let. Půjčíme stroj i
              s obsluhou, nebo přijedeme a vykopeme za vás.
            </p>
            <div className="actions">
              <a className="btn btn-primary" href="tel:+420608957697">
                Zavolat 608 957 697
              </a>
              <a className="btn btn-ghost" href="#sluzby">
                Naše stroje
              </a>
            </div>
          </div>

          <div className="wrap cut-wrap">
            <div className="cut-edge">
              <span>Řez terénem</span>
              <span aria-hidden="true">↓</span>
            </div>
            <CutEarth layers={STRATA} />
          </div>
        </section>

        <section className="sec services" id="sluzby">
          <div className="wrap">
            <p className="sec-eyebrow">Sonda 01 — vrstva strojů</p>
            <h2 className="sec-title">Co pro vás vytěžíme</h2>
            <p className="sec-intro">
              Rozsáhlý park techniky ke každé fázi stavby. Když stroj vypoví,
              rychle ho měníme — aby vám stavba nestála.
            </p>

            <ol className="svc-list">
              {SERVICES.map((s) => (
                <li
                  className="svc"
                  key={s.name}
                  style={{ "--svc": s.color } as React.CSSProperties}
                >
                  <span className="svc-tag">{s.tag}</span>
                  <div className="svc-body">
                    <h3 className="svc-name">{s.name}</h3>
                    <p className="svc-desc">{s.desc}</p>
                  </div>
                  <span className="svc-note">{s.note}</span>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="sec about" id="o-nas">
          <div className="wrap">
            <p className="sec-eyebrow sec-eyebrow--light">Sonda 02 — podloží firmy</p>
            <h2 className="sec-title">Od roku 1998 v brněnské hlíně</h2>
            <p className="about-lead">
              Terrabau je spolehlivý partner pro zemní práce v Brně a okolí.
              Od výkopu pro rodinný dům až po pozemní komunikace a inženýrské
              sítě — pracujeme přesně a v termínu. Poradíme vám v každé fázi
              projektu, od prvního rýče po hotový podklad.
            </p>

            <dl className="ledger">
              <div className="ledger-row">
                <dt>Založeno</dt>
                <dd>1998 · přes 25 let na stavbách</dd>
              </div>
              <div className="ledger-row">
                <dt>Působnost</dt>
                <dd>Brno a okolí</dd>
              </div>
              <div className="ledger-row">
                <dt>Sídlo</dt>
                <dd>Vodařská 514/7, Brno — Horní Heršpice</dd>
              </div>
              <div className="ledger-row">
                <dt>Stroje</dt>
                <dd>s obsluhou i bez — dle vaší potřeby</dd>
              </div>
            </dl>

            <div className="refs">
              <p className="refs-label">Kde už jsme kopali</p>
              <ul className="refs-list">
                <li>Výstavba rodinných domů v Brně</li>
                <li>Pozemní komunikace a zpevněné plochy</li>
                <li>Přípojky inženýrských sítí</li>
                <li>Demolice a recyklace na místě</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
