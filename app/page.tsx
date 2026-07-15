import type { ReactNode } from "react";

function AirGlyph() {
  return (
    <svg className="glyph" viewBox="0 0 40 28" aria-hidden="true" focusable="false">
      <path d="M2 7 H26 a6 6 0 1 1 0 12" />
      <path d="M2 14 H31 a4 4 0 1 1 0 8" />
      <path d="M2 21 H21" />
    </svg>
  );
}

function FlowLine() {
  return (
    <div className="flow" aria-hidden="true">
      <svg viewBox="0 0 1200 16" preserveAspectRatio="none">
        <line className="flow-track" x1="0" y1="8" x2="1200" y2="8" />
        <line className="flow-move" x1="0" y1="8" x2="1200" y2="8" />
      </svg>
      <span className="flow-arrow">→</span>
    </div>
  );
}

const steps: { n: string; title: string; body: string }[] = [
  {
    n: "01",
    title: "Návrh a výpočet",
    body: "Spočítáme potřebný výkon a průtok v m³/h, navrhneme trasu potrubí i typ jednotky přímo pro váš dům nebo provoz.",
  },
  {
    n: "02",
    title: "Dodávka komponent",
    body: "SPIRO a plastové potrubí, ventilátory, rekuperace, zpětné klapky, mřížky i neviditelné anemostaty — skladem v Plzni.",
  },
  {
    n: "03",
    title: "Montáž",
    body: "Namontujeme klimatizaci i rozvody vzduchotechniky čistě a tak, aby byly slyšet co nejméně.",
  },
  {
    n: "04",
    title: "Servis a měření",
    body: "Výměna filtrů, čištění Jet Master a měření přístroji Airflow — aby systém držel výkon i po letech.",
  },
];

const reasons: string[] = [
  "Vzduchotechnice se věnujeme od roku 1993 — přes třicet let na trhu.",
  "Vlastní kamenná prodejna v Plzni na Barrandově — potrubí a komponenty odvezete hned.",
  "Servis s přístroji Airflow, SKF QuickCollect i čištěním Jet Master.",
  "Poradíme s návrhem od rodinného domu po průmyslový provoz.",
];

function Stat({ big, label }: { big: string; label: string }): ReactNode {
  return (
    <div className="stat">
      <span className="stat-big">{big}</span>
      <span className="stat-label">{label}</span>
    </div>
  );
}

export default function Page() {
  return (
    <main className="page">
      <header className="topbar">
        <a className="brand" href="#" aria-label="Inkomo vzduchotechnika, Plzeň">
          <AirGlyph />
          <span className="brand-name">
            Inkomo
            <span className="brand-sub">vzduchotechnika · Plzeň</span>
          </span>
        </a>
        <a className="topphone" href="tel:+420602452290">
          <span className="topphone-label">Poradna</span>
          +420 602 452 290
        </a>
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-text">
          <p className="eyebrow rv">Klimatizace · Vzduchotechnika · Plzeň</p>
          <h1 id="hero-title" className="hero-title rv">
            Klimatizace, která chladí.
            <span className="hero-title-2">Vzduchotechnika, která dýchá.</span>
          </h1>
          <p className="hero-lead rv">
            Od návrhu přes SPIRO potrubí a rekuperaci až po servis s měřicími přístroji.
            Chladíme, větráme a rekuperujeme — v Plzni i u vás doma.
          </p>
          <ul className="chips rv">
            <li>SPIRO · PLAST · FLEXO</li>
            <li>NÁVRH → MONTÁŽ → SERVIS</li>
            <li>OD ROKU 1993</li>
          </ul>
        </div>
        <figure className="hero-media rv">
          <div className="frame">
            <img
              src="/hero.webp"
              alt="Rozvody vzduchotechniky — kovové SPIRO potrubí a klimatizační jednotka"
              width={880}
              height={1040}
              loading="eager"
            />
            <span className="tick tick-tl">Ø 100–200 mm</span>
            <span className="tick tick-br">tichý chod · m³/h přesně</span>
          </div>
          <figcaption className="frame-cap">Plzeň, Barrandova 22 — kamenná prodejna i sklad</figcaption>
        </figure>
      </section>

      <FlowLine />

      <section className="services" aria-labelledby="services-title">
        <div className="sec-head">
          <p className="eyebrow">Jak to u nás probíhá</p>
          <h2 id="services-title">Čtyři kroky od myšlenky k čerstvému vzduchu</h2>
        </div>
        <div className="svc-wrap">
          <ol className="steps">
            {steps.map((s) => (
              <li className="step" key={s.n}>
                <span className="step-n">{s.n}</span>
                <div className="step-body">
                  <h3>{s.title}</h3>
                  <p>{s.body}</p>
                </div>
              </li>
            ))}
          </ol>
          <figure className="svc-media">
            <img
              src="/section-1.webp"
              alt="Komponenty vzduchotechniky — ventilátory, mřížky a potrubí"
              width={760}
              height={900}
              loading="lazy"
            />
          </figure>
        </div>
      </section>

      <section className="trust" aria-labelledby="trust-title">
        <div className="trust-grid">
          <figure className="trust-media">
            <img
              src="/section-2.webp"
              alt="Montáž a servis vzduchotechniky specialisty Inkomo"
              width={760}
              height={900}
              loading="lazy"
            />
          </figure>
          <div className="trust-text">
            <p className="eyebrow">Proč Inkomo</p>
            <h2 id="trust-title">Vzduch svěříte lidem, kteří ho měří</h2>
            <ul className="reasons">
              {reasons.map((r) => (
                <li key={r}>{r}</li>
              ))}
            </ul>
            <div className="stats">
              <Stat big="1993" label="na trhu od roku" />
              <Stat big="2" label="kamenné prodejny" />
              <Stat big="Airflow" label="měřicí přístroje" />
            </div>
          </div>
        </div>

        <div className="shops">
          <article className="shop">
            <h3>Prodejna Plzeň</h3>
            <p>Barrandova 22, Plzeň 326 00</p>
            <a href="tel:+420602345928">+420 602 345 928</a>
            <a href="mailto:plzen@inkomo-vzduchotechnika.cz">plzen@inkomo-vzduchotechnika.cz</a>
          </article>
          <article className="shop">
            <h3>Prodejna České Budějovice</h3>
            <p>Husova 61, České Budějovice 370 01</p>
            <a href="tel:+420602452290">+420 602 452 290</a>
            <a href="mailto:prodejna@inkomo-vzduchotechnika.cz">prodejna@inkomo-vzduchotechnika.cz</a>
          </article>
          <article className="shop shop-service">
            <h3>Servis vzduchotechniky</h3>
            <p>Výměna filtrů, měření a čištění po celém západočeském regionu.</p>
            <a href="tel:+420602125001">+420 602 125 001</a>
          </article>
        </div>
      </section>
    </main>
  );
}
