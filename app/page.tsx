import React from "react";

const obory = [
  {
    kod: "VZT",
    nazev: "Vzduchotechnika",
    popis: "Návrh, dodávka a zprovoznění vzduchotechnických a klimatizačních systémů — od jednotky přes rozvody až po regulaci a měření.",
  },
  {
    kod: "ÚT",
    nazev: "Vytápění",
    popis: "Otopné soustavy a jejich napojení na vzduchotechniku tak, aby budova držela teplotu i účet za energie.",
  },
  {
    kod: "ZTI",
    nazev: "Zdravotní technika",
    popis: "Rozvody vody a kanalizace řešené společně s VZT — jeden projekt, jedna zodpovědnost.",
  },
  {
    kod: "MaR",
    nazev: "Měření a regulace",
    popis: "Řídicí systém, který drží čistý prostor v mezích: tlak, vlhkost, filtrace, hluk. Doložitelně, měřením.",
  },
];

const realizace = [
  {
    rok: "2018",
    misto: "Úrazová nemocnice v Brně",
    detail: "Úpravy 2. NP pro urologii a endoskopii",
    stitky: ["klimatizace", "regulace", "validace", "požární ucpávky"],
  },
  {
    rok: "2016",
    misto: "Mendelova univerzita v Brně",
    detail: "Biotechnologický pavilon M",
    stitky: ["měření", "mikroklima", "TDI", "vzduchotechnika"],
  },
  {
    rok: "2015",
    misto: "FN u sv. Anny v Brně — ICRC",
    detail: "Mezinárodní centrum klinického výzkumu",
    stitky: ["hluk", "mikroklima", "validace", "regulace"],
  },
  {
    rok: "2015",
    misto: "4Medical Innovations Ostrava",
    detail: "Biomedicínské centrum",
    stitky: ["měření", "mikroklima", "regulace"],
  },
];

export default function Page() {
  return (
    <main className="tb">
      <header className="tb-nav" aria-label="Hlavní navigace">
        <a className="tb-brand" href="#" aria-label="Technika Budov, domů">
          <span className="tb-brand-mark" aria-hidden="true">
            <span className="tb-brand-flow" />
          </span>
          <span className="tb-brand-text">
            Technika&nbsp;Budov
            <span className="tb-brand-sub">vzduchotechnika · Brno · od 1997</span>
          </span>
        </a>
        <nav className="tb-links">
          <a href="#profese">Profese</a>
          <a href="#realizace">Realizace</a>
          <a href="#duvera">O nás</a>
        </nav>
      </header>

      <section className="tb-hero">
        <div className="tb-hero-media">
          <img
            src="/hero.webp"
            alt="Vzduchotechnická strojovna s rozvody a jednotkou"
            className="tb-hero-img"
          />
          <div className="tb-hero-scan" aria-hidden="true" />
        </div>

        <div className="tb-hero-body">
          <p className="tb-eyebrow">Projekce a dodávka TZB · čisté prostory</p>
          <h1 className="tb-hero-title">
            Vzduch, který<br />
            <span className="tb-hero-accent">unese operační sál.</span>
          </h1>
          <p className="tb-hero-lead">
            Navrhujeme, dodáváme a spouštíme vzduchotechniku pro nemocnice,
            laboratoře a čisté prostory — tam, kde tlak, filtrace a hluk
            nesmí odejít z mezí. Doložitelně, měřením, s razítkem.
          </p>

          <dl className="tb-hero-facts">
            <div>
              <dt>Praxe v projekci VZT</dt>
              <dd>od 1997</dd>
            </div>
            <div>
              <dt>Projekční tým</dt>
              <dd>6 lidí</dd>
            </div>
            <div>
              <dt>Kdo za návrh ručí</dt>
              <dd>soudní znalec</dd>
            </div>
          </dl>

          <a className="tb-hero-cta" href="#profese">Prohlédnout profese</a>
        </div>
      </section>

      <section className="tb-profese" id="profese">
        <div className="tb-sec-head">
          <p className="tb-eyebrow">Čtyři profese, jeden projekt</p>
          <h2 className="tb-sec-title">
            Vzduchotechniku neděláme jako výsek —
            vedeme ji od návrhu po komplexní zkoušky.
          </h2>
          <p className="tb-sec-note">
            Značky VZT · ÚT · ZTI · MaR jsou přesně ty, které čtete na výkresu.
            U nás nesedí v samostatných firmách, ale u jednoho stolu — proto
            si profese nepřehazují zodpovědnost přes plot stavby.
          </p>
        </div>

        <ul className="tb-profese-grid">
          {obory.map((o) => (
            <li key={o.kod} className="tb-profese-card">
              <span className="tb-profese-kod" aria-hidden="true">{o.kod}</span>
              <h3>{o.nazev}</h3>
              <p>{o.popis}</p>
            </li>
          ))}
        </ul>

        <div className="tb-profese-media">
          <img
            src="/section-1.webp"
            alt="Detail vzduchotechnických rozvodů a regulačních prvků"
            className="tb-media-img"
          />
          <div className="tb-profese-caption">
            <p className="tb-eyebrow">Servis a zprovoznění</p>
            <p>
              Návrh, dodávku i montáž přebíráme celou. Po spuštění nastavíme
              regulaci, provedeme komplexní zkoušky, revize a zůstáváme na
              záruční i pozáruční servis. Realizaci vede odborník z ústavu TZB,
              ne poddodavatel z inzerátu.
            </p>
          </div>
        </div>
      </section>

      <section className="tb-duvera" id="duvera">
        <div className="tb-duvera-intro">
          <p className="tb-eyebrow">O nás &amp; reference</p>
          <h2 className="tb-sec-title tb-sec-title--light">
            Když čistý prostor selže, ptají se, kdo ho počítal.
            U nás to má jméno.
          </h2>
          <p className="tb-sec-note tb-sec-note--light">
            Projekce TZB s praxí od roku 1997 — někteří z nás projektovali
            vzduchotechniku pro CKTCH Brno, FN u sv. Anny, IKEA Praha i Brno.
            Spolupracujeme s VUT v Brně, Fakultou stavební, ústavem TZB;
            návrhy i realizace umíme podložit soudně znaleckým posudkem —
            technicky i cenově.
          </p>
        </div>

        <div className="tb-duvera-media">
          <img
            src="/section-2.webp"
            alt="Čistý prostor operačního sálu s řízenou vzduchotechnikou"
            className="tb-media-img"
          />
        </div>

        <div className="tb-realizace" id="realizace">
          <h3 className="tb-realizace-nadpis">Vybrané realizace</h3>
          <ol className="tb-realizace-list">
            {realizace.map((r, i) => (
              <li key={r.misto} className="tb-realizace-item">
                <span className="tb-realizace-index" aria-hidden="true">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="tb-realizace-rok">{r.rok}</span>
                <span className="tb-realizace-text">
                  <strong>{r.misto}</strong>
                  <span className="tb-realizace-detail">{r.detail}</span>
                  <span className="tb-realizace-stitky">
                    {r.stitky.map((s) => (
                      <span key={s} className="tb-stitek">{s}</span>
                    ))}
                  </span>
                </span>
              </li>
            ))}
          </ol>

          <div className="tb-kontakt-radek">
            <span>Křenová 307/42, 602 00 Brno — Trnitá</span>
            <a href="tel:+420543255094">543 255 094</a>
            <a href="mailto:info@technikabudov.cz">info@technikabudov.cz</a>
          </div>
        </div>
      </section>
    </main>
  );
}
