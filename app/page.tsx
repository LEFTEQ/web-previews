import React from "react";

export default function Page() {
  const sortiment = [
    {
      cislo: "01",
      nazev: "Zdivo a překlady",
      popis: "Porotherm, Ytong, KB Blok. Cihly, tvárnice i celé stavební systémy — spočítáme spotřebu na celou stavbu.",
      znacky: ["Porotherm", "Ytong", "KB Blok"]
    },
    {
      cislo: "02",
      nazev: "Malty, omítky, lepidla",
      popis: "Weber terranova a další. Suché maltové směsi, zateplovací systémy, sádrokarton i doplňky.",
      znacky: ["Weber", "Baumit", "Xella"]
    },
    {
      cislo: "03",
      nazev: "Doplňky a stavební kování",
      popis: "Likov, Scrigno stavební pouzdra, spojovací materiál, hutní zboží, izolace a hydroizolace.",
      znacky: ["Likov", "Scrigno", "Best"]
    }
  ];

  const dodavatele = [
    "Best, a.s.",
    "BaBC, a.s.",
    "KB Blok systém",
    "Porotherm — Wienerberger",
    "Xella CZ — Ytong",
    "Weber terranova",
    "Scrigno stavební pouzdra",
    "Likov"
  ];

  return (
    <main className="page">
      {/* HERO */}
      <header className="hero">
        <div className="hero__bar">
          <a className="wordmark" href="#uvod" aria-label="Stavebniny Křimice — Extra-Cent Bohemia, domů">
            <span className="wordmark__k">Stavebniny</span>
            <span className="wordmark__mesto">Křimice</span>
          </a>
          <nav className="nav" aria-label="Hlavní navigace">
            <a href="#sortiment">Sortiment</a>
            <a href="#firma">O nás</a>
            <a href="#kontakt">Kontakt</a>
          </nav>
        </div>

        <div className="hero__grid">
          <div className="hero__text">
            <p className="eyebrow">Rodinné stavebniny · Plzeň-Křimice · od roku 1994</p>
            <h1 className="hero__h1">
              Stavíte?<br />
              <span className="hero__accent">Tak se stavte.</span>
            </h1>
            <p className="hero__lead">
              Kompletní sortiment stavebnin pro celou stavbu — od základů po střechu.
              Poradíme, spočítáme spotřebu materiálu a přivezeme autem s hydraulickou
              rukou až na vaši parcelu.
            </p>
            <div className="hero__cta">
              <a className="btn btn--primary" href="tel:+420377822885">Zavolat na sklad</a>
              <a className="btn btn--ghost" href="#sortiment">Prohlédnout sortiment</a>
            </div>
            <dl className="hero__hours">
              <div>
                <dt>Po–Pá</dt>
                <dd>7:00–17:00</dd>
              </div>
              <div>
                <dt>Sobota</dt>
                <dd>8:00–11:00</dd>
              </div>
              <div className="hero__hours-note">
                <dt>Provoz</dt>
                <dd>letní režim od 7. 3.</dd>
              </div>
            </dl>
          </div>

          <figure className="hero__figure">
            <img
              src="/hero.webp"
              alt="Skladová plocha stavebnin v Plzni-Křimicích s paletami cihel a stavebního materiálu"
              className="hero__img"
              width={900}
              height={1100}
            />
            <figcaption className="hero__tag">
              <span className="hero__tag-dot" aria-hidden="true" />
              Sklad Plzeňská 44/10, Křimice — otevřeno dnes
            </figcaption>
          </figure>
        </div>
      </header>

      {/* SORTIMENT */}
      <section className="sortiment" id="sortiment" aria-labelledby="sortiment-nadpis">
        <div className="section-head">
          <p className="eyebrow eyebrow--dark">Co u nás naložíte</p>
          <h2 id="sortiment-nadpis" className="section-h2">
            Materiál na celou stavbu, ne jen na výkres
          </h2>
          <p className="section-intro">
            Sortiment jsme roky skládali podle toho, co stavebníci na Plzeňsku
            opravdu potřebují. Od jedné palety pro drobnou přístavbu po celé dodávky
            velkým firmám. Ke každé objednávce vám zdarma spočítáme spotřebu i cenu.
          </p>
        </div>

        <div className="sortiment__media">
          <img
            src="/section-1.webp"
            alt="Detail palet s cihlami a stavebními tvárnicemi připravenými k naložení"
            className="sortiment__img"
            width={1200}
            height={700}
          />
        </div>

        <ol className="cards">
          {sortiment.map((s) => (
            <li className="card" key={s.cislo}>
              <span className="card__num" aria-hidden="true">{s.cislo}</span>
              <h3 className="card__title">{s.nazev}</h3>
              <p className="card__text">{s.popis}</p>
              <ul className="card__tags">
                {s.znacky.map((z) => (
                  <li key={z}>{z}</li>
                ))}
              </ul>
            </li>
          ))}
        </ol>

        <div className="service-strip">
          <p>
            <strong>Rozvoz autem s hydraulickou rukou</strong> složíme materiál přesně tam,
            kde ho potřebujete.
          </p>
          <p>
            <strong>Přívěsný vozík k zapůjčení</strong> pro menší nákup, který si odvezete sami.
          </p>
          <p>
            <strong>Kalkulace spotřeby a cen</strong> přineste výkres, spočítáme materiál za vás.
          </p>
        </div>
      </section>

      {/* FIRMA / DŮVĚRA */}
      <section className="firma" id="firma" aria-labelledby="firma-nadpis">
        <div className="firma__grid">
          <figure className="firma__figure">
            <img
              src="/section-2.webp"
              alt="Zaměstnanci stavebnin Extra-Cent Bohemia na skladu v Křimicích"
              className="firma__img"
              width={900}
              height={1000}
            />
          </figure>

          <div className="firma__text">
            <p className="eyebrow eyebrow--dark">Rodinná firma z Křimic</p>
            <h2 id="firma-nadpis" className="section-h2">
              Vracející se zákazníci jsou náš nejlepší doklad kvality
            </h2>
            <p className="firma__lead">
              Jsme rodinná firma s dlouholetou tradicí a pro zákazníka se vždycky
              snažíme udělat maximum. Poradí vám plně vyškolený personál, který
              stavebninám rozumí — od živnostníka po velkou stavební společnost
              u nás každý naloží to své.
            </p>
            <p className="firma__lead">
              Máte dotaz na materiál nebo cenu? Zavolejte, nebo se stavte na sklad.
              Těšíme se na vaši návštěvu.
            </p>

            <div className="kontakt" id="kontakt">
              <div className="kontakt__block">
                <p className="kontakt__label">Kde nás najdete</p>
                <p className="kontakt__val">Plzeňská 44/10<br />322 00 Plzeň-Křimice</p>
              </div>
              <div className="kontakt__block">
                <p className="kontakt__label">Telefon na sklad</p>
                <p className="kontakt__val">
                  <a href="tel:+420377822885">377 822 885</a><br />
                  <a href="tel:+420727863719">727 863 719</a>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="dodavatele">
          <p className="eyebrow eyebrow--dark">Skladem od značek, kterým věříte</p>
          <ul className="dodavatele__list">
            {dodavatele.map((d) => (
              <li key={d}>{d}</li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
