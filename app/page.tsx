import React from "react";

export default function Page() {
  const trades = [
    {
      no: "01",
      name: "Generální dodávky staveb",
      body: "Od výkopu po kolaudaci. Postavíme celý objekt na klíč, koordinujeme profese i harmonogram — vy máte jednoho partnera a jednu odpovědnost.",
    },
    {
      no: "02",
      name: "Rodinné domy na klíč",
      body: "Stavíme domy po celém Královéhradeckém a Pardubickém kraji. Hrubá stavba, instalace, dokončení — předáme klíče od hotového bydlení.",
    },
    {
      no: "03",
      name: "Rekonstrukce a byty",
      body: "Rekonstrukce objektů i bytových jader, výměna oken a dveří, opravy balkónů. Bydlí se dál — pracujeme tak, aby vás stavba co nejméně omezila.",
    },
    {
      no: "04",
      name: "Zateplení a fasády",
      body: "Revitalizace a zateplování budov, opravy a renovace fasád. Nižší účty za teplo a dům, který zase vypadá jako nový.",
    },
    {
      no: "05",
      name: "Zemní práce a doprava",
      body: "Výkopy, terénní úpravy, přesuny materiálu. Zajistíme i instalatérské, topenářské, malířské a sádrokartonářské práce.",
    },
  ];

  return (
    <main className="page">
      <header className="topbar">
        <a className="wordmark" href="#" aria-label="ASJ s.r.o., stavební firma">
          <span className="wordmark__mark">ASJ</span>
          <span className="wordmark__sub">s.r.o. · stavební firma</span>
        </a>
        <nav className="topnav" aria-label="Hlavní navigace">
          <a href="#nabidka">Co stavíme</a>
          <a href="#onas">O nás</a>
          <a className="topnav__call" href="tel:+420495407008">+420 495 407 008</a>
        </nav>
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <img
          className="hero__img"
          src="/hero.webp"
          alt="Rozestavěný objekt stavební firmy ASJ s lešením a fasádou"
          loading="eager"
        />
        <div className="hero__scrim" aria-hidden="true" />
        <div className="hero__inner">
          <p className="hero__eyebrow">Světí u&nbsp;Hradce Králové · od&nbsp;základů po&nbsp;kolaudaci</p>
          <h1 id="hero-title" className="hero__title">
            Postavíme,<br />
            zrekonstruujeme,<br />
            <span className="hero__title-accent">zateplíme.</span>
          </h1>
          <p className="hero__lede">
            Kompletní pozemní stavitelství pro Královéhradecký a&nbsp;Pardubický kraj.
            Rodinné domy na&nbsp;klíč, rekonstrukce, fasády i&nbsp;velké dodávky staveb —
            s&nbsp;certifikací ČSN&nbsp;EN&nbsp;ISO&nbsp;9001.
          </p>
          <div className="hero__actions">
            <a className="btn btn--primary" href="tel:+420495407008">Zavolat na stavbu</a>
            <a className="btn btn--ghost" href="#nabidka">Co umíme postavit</a>
          </div>
        </div>
      </section>

      <section id="nabidka" className="trades" aria-labelledby="trades-title">
        <div className="section-head">
          <p className="section-head__eyebrow">Výpis prací</p>
          <h2 id="trades-title" className="section-head__title">
            Pět profesí, jeden dodavatel
          </h2>
          <p className="section-head__note">
            Nemusíte skládat řemeslníky dohromady. Zemní práce, hrubá stavba,
            instalace i&nbsp;dokončení jedou pod jednou hlavičkou.
          </p>
        </div>

        <ol className="trades__list">
          {trades.map((t) => (
            <li key={t.no} className="trade">
              <span className="trade__no" aria-hidden="true">{t.no}</span>
              <div className="trade__text">
                <h3 className="trade__name">{t.name}</h3>
                <p className="trade__body">{t.body}</p>
              </div>
            </li>
          ))}
        </ol>

        <figure className="trades__figure">
          <img
            src="/section-1.webp"
            alt="Zateplená fasáda a vyměněná okna na zrekonstruovaném objektu"
            loading="lazy"
          />
          <figcaption>
            Rekonstrukce energetického hospodářství — SŠIS Dvůr Králové nad&nbsp;Labem:
            výměna oken a&nbsp;dveří, zateplení fasády, oprava balkónů.
          </figcaption>
        </figure>
      </section>

      <section id="onas" className="about" aria-labelledby="about-title">
        <figure className="about__figure">
          <img
            src="/section-2.webp"
            alt="Pracovní četa stavební firmy ASJ na rozestavěné budově"
            loading="lazy"
          />
        </figure>

        <div className="about__text">
          <p className="section-head__eyebrow">O&nbsp;firmě ASJ</p>
          <h2 id="about-title" className="section-head__title">
            Stavíme v&nbsp;kraji, kde nás znají
          </h2>
          <p className="about__lede">
            ASJ s.r.o. se zabývá kompletním pozemním stavitelstvím se&nbsp;sídlem
            ve&nbsp;Světí u&nbsp;Hradce Králové. Práci máme zaměřenou hlavně
            na&nbsp;Královéhradecký a&nbsp;Pardubický kraj — blízko ke&nbsp;každé stavbě,
            osobně a&nbsp;bez zbytečných řečí.
          </p>

          <dl className="facts">
            <div className="fact">
              <dt>Kvalita</dt>
              <dd>Držitel certifikátu ČSN&nbsp;EN&nbsp;ISO&nbsp;9001</dd>
            </div>
            <div className="fact">
              <dt>Úspory</dt>
              <dd>Odborný dodavatel programu Zelená úsporám</dd>
            </div>
            <div className="fact">
              <dt>Lidé</dt>
              <dd>Kvalifikovaní dělníci, pravidelná školení</dd>
            </div>
            <div className="fact">
              <dt>Působnost</dt>
              <dd>Královéhradecký a&nbsp;Pardubický kraj</dd>
            </div>
          </dl>

          <address className="about__contact">
            <span>ASJ s.r.o., Světí 8, 503 12 Světí</span>
            <a href="tel:+420495407008">+420 495 407 008</a>
            <a href="mailto:asj@asj.cz">asj@asj.cz</a>
          </address>
        </div>
      </section>
    </main>
  );
}
