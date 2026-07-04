import React from "react";

export default function Page() {
  const sluzby = [
    {
      klic: "Účetnictví",
      nadpis: "Daňová evidence a podvojné účetnictví",
      popis:
        "Vedeme vám kompletní účetnictví — od prvotních dokladů po přiznání. Víte v každém měsíci, jak na tom jste, a termíny hlídáme za vás.",
    },
    {
      klic: "Mzdy",
      nadpis: "Zpracování mezd",
      popis:
        "Výplaty, odvody, přihlášky a odhlášky na správách sociálního zabezpečení i zdravotních pojišťovnách. Zaměstnanci dostanou výplatní pásky včas, vy klid.",
    },
    {
      klic: "Správa domů",
      nadpis: "Správa nemovitostí",
      popis:
        "Částečná nebo kompletní správa vašeho domu v Plzni — od vyúčtování a záloh přes revize po jednání s dodavateli. Řešíme provoz, vy nemusíte být u každé maličkosti.",
    },
  ];

  return (
    <main className="page">
      <header className="topbar">
        <a href="#" className="wordmark" aria-label="RYNEK 30, správa nemovitostí a účetnictví">
          <span className="wordmark__num">30</span>
          <span className="wordmark__name">RYNEK</span>
          <span className="wordmark__tag">Plzeň · náměstí Republiky</span>
        </a>
        <nav className="nav" aria-label="Hlavní">
          <a href="#sluzby">Služby</a>
          <a href="#o-nas">O nás</a>
          <a href="tel:+420371651441" className="nav__call">371 651 441</a>
        </nav>
      </header>

      <section className="hero" aria-labelledby="hero-h">
        <div className="hero__frame">
          <img
            src="/hero.webp"
            alt="Historický dům na náměstí Republiky v Plzni, kde sídlí RYNEK 30"
            className="hero__img"
          />
          <div className="hero__plate">
            <span className="plate__addr">náměstí Republiky 30</span>
            <span className="plate__psc">301 00 Plzeň</span>
          </div>
        </div>

        <div className="hero__text">
          <p className="eyebrow">Správa nemovitostí &amp; účetnictví · od roku 1997</p>
          <h1 id="hero-h" className="hero__title">
            Váš dům běží.
            <br />
            Papíry řešíme my.
          </h1>
          <p className="hero__lead">
            RYNEK 30 vede účetnictví, mzdy a spravuje nemovitosti přímo z centra
            Plzně. Dvě věci, na které nikdy nebudete mít čas — a my na ně čas máme.
          </p>
          <div className="hero__actions">
            <a className="btn btn--solid" href="tel:+420371651441">
              Zavolat 371 651 441
            </a>
            <a className="btn btn--ghost" href="mailto:info@rynek30.cz">
              Napsat e-mail
            </a>
          </div>
        </div>
      </section>

      <section id="sluzby" className="services" aria-labelledby="sluzby-h">
        <div className="section-head">
          <p className="eyebrow eyebrow--dark">Co pro vás děláme</p>
          <h2 id="sluzby-h" className="section-title">Dva pilíře, jedna kancelář</h2>
        </div>

        <ol className="services__list">
          {sluzby.map((s, i) => (
            <li key={s.klic} className="service">
              <span className="service__mark">{String(i + 1).padStart(2, "0")}</span>
              <div className="service__body">
                <span className="service__key">{s.klic}</span>
                <h3 className="service__title">{s.nadpis}</h3>
                <p className="service__desc">{s.popis}</p>
              </div>
            </li>
          ))}
        </ol>

        <figure className="services__figure">
          <img
            src="/section-1.webp"
            alt="Pracovní stůl s doklady a výkazy — příprava účetní agendy"
            className="figure__img"
          />
        </figure>
      </section>

      <section id="o-nas" className="about" aria-labelledby="o-nas-h">
        <figure className="about__figure">
          <img
            src="/section-2.webp"
            alt="Interiér kanceláře RYNEK 30 v centru Plzně"
            className="figure__img"
          />
        </figure>

        <div className="about__text">
          <p className="eyebrow eyebrow--dark">Kdo za tím stojí</p>
          <h2 id="o-nas-h" className="section-title">Malá firma, kterou zastihnete</h2>
          <p className="about__lead">
            Sídlíme na náměstí Republiky 30, kousek od katedrály svatého
            Bartoloměje. Klienty vedeme dlouhodobě — spousta z nich je s námi
            přes dvacet let. Nejsme call centrum: zvedneme telefon a víme, o kom
            mluvíte.
          </p>

          <dl className="facts">
            <div className="fact">
              <dt>Kde nás najdete</dt>
              <dd>náměstí Republiky 30, 301 00 Plzeň</dd>
            </div>
            <div className="fact">
              <dt>Telefon</dt>
              <dd><a href="tel:+420371651441">+420 371 651 441</a></dd>
            </div>
            <div className="fact">
              <dt>E-mail</dt>
              <dd><a href="mailto:info@rynek30.cz">info@rynek30.cz</a></dd>
            </div>
            <div className="fact">
              <dt>IČ / DIČ</dt>
              <dd>25200283 · CZ25200283</dd>
            </div>
          </dl>
        </div>
      </section>
    </main>
  );
}
