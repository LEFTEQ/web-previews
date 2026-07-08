import React from "react";

export default function Page() {
  const sluzby = [
    {
      cislo: "01",
      nazev: "Demolice budov a hal",
      popis:
        "Kompletní odstranění výrobních hal, skladů i rodinných domů. Postupujeme řízeně shora dolů, ne trhavinou — kontrolujeme každou nosnou stěnu, než jde k zemi.",
      detail: "cihla • beton • ocelová konstrukce",
    },
    {
      cislo: "02",
      nazev: "Bourání jader a příček",
      popis:
        "Vyklízíme byty a provozovny až na nosné zdivo. Řežeme, nesekáme — méně otřesů, méně prachu, sousedé si nestěžují.",
      detail: "bytová jádra • sádrokarton • zděné příčky",
    },
    {
      cislo: "03",
      nazev: "Odvoz a recyklace suti",
      popis:
        "Kontejner přistavíme, naplníme, odvezeme. Beton a cihlu drtíme na recyklát — část se vrací zpět na stavbu jako podsyp.",
      detail: "kontejnery 3–30 m³ • drcení na místě",
    },
  ];

  const cisla = [
    { hodnota: "1991", popis: "na trhu od tohoto roku" },
    { hodnota: "Ostrava", popis: "Mariánské Hory a okolí" },
    { hodnota: "do 48 h", popis: "nástup na akutní demolici" },
  ];

  return (
    <main className="page">
      <header className="topbar">
        <a className="wordmark" href="#" aria-label="SATON, bourací práce Ostrava">
          <span className="wordmark__mark">SATON</span>
          <span className="wordmark__sub">bourací práce · Ostrava</span>
        </a>
        <nav className="topnav" aria-label="Hlavní">
          <a href="#sluzby">Co bouráme</a>
          <a href="#firma">O firmě</a>
          <a className="topnav__call" href="tel:+420596619004">
            596&nbsp;619&nbsp;004
          </a>
        </nav>
      </header>

      <section className="hero">
        <div className="hero__media">
          <img
            src="/hero.webp"
            alt="Bagr s bouracím kladivem rozebírá betonovou halu v Ostravě"
            className="hero__img"
          />
          <div className="hero__scrim" aria-hidden="true" />
        </div>

        <div className="hero__inner">
          <p className="hero__eyebrow">SATON s.r.o. · od 1991</p>
          <h1 className="hero__title">
            Postavené se dá
            <br />
            <span className="hero__title--accent">rozebrat</span> čistě.
          </h1>
          <p className="hero__lead">
            Bouráme haly, jádra i celé domy v Ostravě — řízeně, s odsáváním
            prachu a odvozem suti na jednu smlouvu. Přijedeme, změříme, řekneme
            cenu na místě.
          </p>
          <div className="hero__actions">
            <a className="btn btn--primary" href="tel:+420596619004">
              Zavolat na 596&nbsp;619&nbsp;004
            </a>
            <a className="btn btn--ghost" href="mailto:saton@saton.eu">
              Napsat e-mail
            </a>
          </div>
        </div>

        <div className="hero__ticker" aria-hidden="true">
          <span>demolice</span>
          <span className="dot">/</span>
          <span>bourání jader</span>
          <span className="dot">/</span>
          <span>odvoz suti</span>
          <span className="dot">/</span>
          <span>recyklace betonu</span>
        </div>
      </section>

      <section className="sluzby" id="sluzby" aria-labelledby="sluzby-nadpis">
        <div className="section-head">
          <p className="section-head__eyebrow">Tři fáze jedné zakázky</p>
          <h2 className="section-head__title" id="sluzby-nadpis">
            Od poslední stěny po prázdný pozemek
          </h2>
          <p className="section-head__note">
            Vezmeme to celé — nemusíte shánět zvlášť bourání, zvlášť kontejner
            a zvlášť skládku.
          </p>
        </div>

        <ol className="cards">
          {sluzby.map((s) => (
            <li className="card" key={s.cislo}>
              <span className="card__num" aria-hidden="true">
                {s.cislo}
              </span>
              <h3 className="card__title">{s.nazev}</h3>
              <p className="card__text">{s.popis}</p>
              <p className="card__detail">{s.detail}</p>
            </li>
          ))}
        </ol>

        <figure className="sluzby__figure">
          <img
            src="/section-1.webp"
            alt="Rozebraná ocelová konstrukce a suť připravená k odvozu"
            className="sluzby__img"
          />
          <figcaption className="sluzby__cap">
            Ocelovou konstrukci rozřežeme na díly, kov jde do výkupu, beton na
            recyklát.
          </figcaption>
        </figure>
      </section>

      <section className="firma" id="firma" aria-labelledby="firma-nadpis">
        <figure className="firma__figure">
          <img
            src="/section-2.webp"
            alt="Pracovník firmy SATON v ochranných pomůckách při demolici"
            className="firma__img"
          />
        </figure>

        <div className="firma__body">
          <p className="section-head__eyebrow">O firmě SATON</p>
          <h2 className="section-head__title" id="firma-nadpis">
            Přes třicet let víme, kde stěna povolí
          </h2>
          <p className="firma__text">
            SATON s.r.o. jezdí po ostravských stavbách od roku 1991. Začínali
            jsme u ocelových konstrukcí a stavební výroby — a přesně proto
            demolici nebereme jako slepé bourání. Než něco pustíme k zemi, víme,
            co drží co.
          </p>
          <p className="firma__text">
            Naši lidé jsou vyučení specialisté s platnými průkazy. Pracujeme
            podle norem, s pojištěním na škody a s čistým výkazem, kam suť
            skončila.
          </p>

          <dl className="stats">
            {cisla.map((c) => (
              <div className="stats__item" key={c.hodnota}>
                <dt className="stats__value">{c.hodnota}</dt>
                <dd className="stats__label">{c.popis}</dd>
              </div>
            ))}
          </dl>

          <div className="firma__contact">
            <a className="btn btn--primary" href="tel:+420596619004">
              Domluvit prohlídku stavby
            </a>
            <p className="firma__addr">
              Švermova 61, Ostrava — Mariánské Hory
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
