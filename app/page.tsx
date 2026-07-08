import type { CSSProperties } from "react";

export default function Page() {
  const sluzby = [
    {
      cislo: "01",
      nazev: "Podvojné účetnictví",
      popis:
        "Vedeme kompletní podvojné účetnictví — od zápisu každé transakce přes účetní knihy až po výkazy a závěrku. Vy dostáváte přehledná čísla, my hlídáme, aby seděla na haléř.",
    },
    {
      cislo: "02",
      nazev: "Daňová evidence",
      popis:
        "Pro živnostníky vedeme daňovou evidenci tak, aby přiznání proběhlo bez stresu. Evidujeme vše potřebné a komunikaci s finančním úřadem bereme na sebe.",
    },
    {
      cislo: "03",
      nazev: "Mzdová agenda",
      popis:
        "Výpočty mezd, sociální a zdravotní pojištění, evidence dovolených a hlášení na úřady. Vaši zaměstnanci dostanou výplatu včas a správně, vy máte klid.",
    },
    {
      cislo: "04",
      nazev: "Daňové poradenství",
      popis:
        "Daň z příjmů, DPH, daň z nemovitosti i silniční daň. Poradíme, jak povinnosti splnit a zároveň nezaplatit víc, než musíte. Legislativu sledujeme za vás.",
    },
  ];

  const lide = [
    {
      jmeno: "Ing. Eva Nováková",
      role: "jednatelka · daňová poradkyně č. 2363",
      tel: "+420 608 528 647",
      mail: "e.novakova@uctonn.cz",
    },
    {
      jmeno: "Jakub Novák",
      role: "daňový poradce",
      tel: "+420 774 511 239",
      mail: "j.novak@uctonn.cz",
    },
  ];

  return (
    <main className="page">
      <header className="topbar">
        <a className="brand" href="#" aria-label="ÚČTO N+N, účetnictví Liberec">
          <span className="brand-mark" aria-hidden="true">
            N<span className="brand-plus">+</span>N
          </span>
          <span className="brand-name">ÚČTO&nbsp;N+N</span>
        </a>
        <nav className="nav" aria-label="Hlavní navigace">
          <a href="#sluzby">Služby</a>
          <a href="#ofirme">O firmě</a>
          <a className="nav-cta" href="tel:+420482713831">Zavolat kanceláři</a>
        </nav>
      </header>

      <section className="hero">
        <div className="hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Účetní kancelář · Liberec · od roku 1999</p>
            <h1 className="hero-title">
              Čísla, která
              <span className="hero-accent"> sedí na haléř.</span>
            </h1>
            <p className="hero-lead">
              Rodinná kancelář ÚČTO&nbsp;N+N vede účetnictví, mzdy a daně pro
              liberecké živnostníky i malé firmy. Přes 25 let zkušeností pod
              vedením daňové poradkyně Ing. Evy Novákové.
            </p>
            <div className="hero-actions">
              <a className="btn-primary" href="mailto:info@uctonn.cz">
                Napsat nezávaznou poptávku
              </a>
              <a className="btn-ghost" href="tel:+420482713831">
                +420 482 713 831
              </a>
            </div>
            <dl className="hero-stats">
              <div>
                <dt>Praxe</dt>
                <dd>25+ let</dd>
              </div>
              <div>
                <dt>Zaměření</dt>
                <dd>Živnostníci a malé firmy</dd>
              </div>
              <div>
                <dt>Poradkyně č.</dt>
                <dd>2363</dd>
              </div>
            </dl>
          </div>
          <figure className="hero-figure">
            <img
              src="/hero.webp"
              alt="Pracovní stůl účetní kanceláře ÚČTO N+N v Liberci s doklady a výkazy"
              width={720}
              height={900}
            />
            <figcaption className="hero-tag">
              <span className="hero-tag-num">Uzávěrka</span>
              <span>připravená včas, bez chyb</span>
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="services" id="sluzby" aria-labelledby="sluzby-nadpis">
        <div className="section-head">
          <p className="eyebrow eyebrow-dark">Co pro vás vedeme</p>
          <h2 id="sluzby-nadpis" className="section-title">
            Čtyři agendy, jedna kancelář
          </h2>
          <p className="section-sub">
            Postaráme se o kompletní účetnictví i o dílčí úkoly. Vyberte si, co
            potřebujete — zbytek zůstane na nás.
          </p>
        </div>
        <ol className="ledger">
          {sluzby.map((s) => (
            <li className="ledger-row" key={s.cislo}>
              <span className="ledger-num" aria-hidden="true">
                {s.cislo}
              </span>
              <h3 className="ledger-name">{s.nazev}</h3>
              <p className="ledger-desc">{s.popis}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="about" id="ofirme" aria-labelledby="ofirme-nadpis">
        <div className="about-grid">
          <figure className="about-figure">
            <img
              src="/section-1.webp"
              alt="Ing. Eva Nováková a Jakub Novák z účetní kanceláře ÚČTO N+N"
              width={640}
              height={760}
            />
          </figure>
          <div className="about-copy">
            <p className="eyebrow eyebrow-dark">O firmě</p>
            <h2 id="ofirme-nadpis" className="section-title">
              Rodinná kancelář, ne anonymní software
            </h2>
            <p className="about-text">
              ÚČTO&nbsp;N+N vyrostlo ze samostatné praxe daňové poradkyně
              Ing.&nbsp;Evy Novákové. Dnes jsme malá rodinná firma s více než
              25 lety zkušeností, která rozumí starostem drobných podnikatelů —
              protože je řešíme každý den.
            </p>
            <p className="about-text">
              U nás mluvíte s konkrétním člověkem, který zná vaše čísla. Žádné
              přepojování, žádné anonymní tikety. Zavolejte a domluvte si
              nezávaznou schůzku v naší liberecké kanceláři.
            </p>

            <ul className="people">
              {lide.map((p) => (
                <li className="person" key={p.mail}>
                  <div className="person-head">
                    <span className="person-name">{p.jmeno}</span>
                    <span className="person-role">{p.role}</span>
                  </div>
                  <div className="person-contact">
                    <a href={`tel:${p.tel.replace(/\s/g, "")}`}>{p.tel}</a>
                    <a href={`mailto:${p.mail}`}>{p.mail}</a>
                  </div>
                </li>
              ))}
            </ul>

            <div className="office">
              <img
                src="/section-2.webp"
                alt="Vstup do kanceláře ÚČTO N+N v Liberci"
                width={520}
                height={320}
              />
              <div className="office-info">
                <p className="office-label">Kancelář Liberec</p>
                <a className="office-tel" href="tel:+420482713831">
                  +420 482 713 831
                </a>
                <a className="office-mail" href="mailto:info@uctonn.cz">
                  info@uctonn.cz
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
