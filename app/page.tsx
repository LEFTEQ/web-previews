import React from "react";

export default function Page() {
  const sluzby = [
    {
      cislo: "C20/25",
      nazev: "Základové desky a pasy",
      popis:
        "Vylijeme základy pro rodinný dům i halu. Postaráme se o bednění, výztuž i uložení betonu tak, aby deska byla rovná a únosná.",
    },
    {
      cislo: "C25/30",
      nazev: "Monolitické stropy a věnce",
      popis:
        "Stropy, ztužující věnce a schodiště lité na místě. Betonáž čerpadlem tam, kde se autodomíchávač nedostane.",
    },
    {
      cislo: "C30/37",
      nazev: "Průmyslové a garážové podlahy",
      popis:
        "Drátkobetonové podlahy s hlazeným povrchem pro dílny, sklady a garáže. Odolné vůči zátěži i mrazu.",
    },
    {
      cislo: "C16/20",
      nazev: "Přípojky, patky a drobné konstrukce",
      popis:
        "Betonové patky pod plot, opěrné zídky, ztracené bednění. I malá zakázka, kterou jinde odmítnou.",
    },
  ];

  const duvody = [
    {
      k: "18",
      j: "let na stavbách",
      t: "Betonujeme na Českobudějovicku od roku 2007 — od základů chat po podlahy hal.",
    },
    {
      k: "48 h",
      j: "od poptávky k ceně",
      t: "Přijedeme se podívat, zaměříme a do dvou dnů máte konkrétní cenu, ne odhad od stolu.",
    },
    {
      k: "36 m",
      j: "dosah čerpadla",
      t: "Vlastní autočerpadlo dopraví beton i za dům nebo přes plot bez koleček a lopat.",
    },
  ];

  return (
    <main className="page">
      <header className="topbar">
        <a className="wordmark" href="#" aria-label="Beton Hronek, domovská stránka">
          <span className="wordmark__slab">BETON</span>
          <span className="wordmark__name">Hronek</span>
        </a>
        <nav className="topnav" aria-label="Hlavní navigace">
          <a href="#sluzby">Co betonujeme</a>
          <a href="#onas">Proč my</a>
          <a className="topnav__cta" href="#poptavka">Chci cenu</a>
        </nav>
      </header>

      <section className="hero">
        <div className="hero__grid">
          <div className="hero__text">
            <p className="eyebrow">Betonáž na klíč &middot; České Budějovice a okolí</p>
            <h1 className="hero__title">
              Lijeme beton, na&nbsp;kterém pak
              <span className="hero__accent"> stojí celá stavba.</span>
            </h1>
            <p className="hero__lead">
              Základy, stropy, podlahy. Přivezeme míchačku, natáhneme
              čerpadlo a povrch srovnáme do roviny. Vy máte pevný podklad,
              my odvoz i úklid.
            </p>
            <div className="hero__actions">
              <a className="btn btn--primary" href="#poptavka">Chci cenu betonáže</a>
              <a className="btn btn--ghost" href="#sluzby">Co všechno lijeme</a>
            </div>
            <dl className="hero__spec">
              <div>
                <dt>Pevnostní třídy</dt>
                <dd>C16/20 &ndash; C30/37</dd>
              </div>
              <div>
                <dt>Kraj</dt>
                <dd>Jihočeský</dd>
              </div>
              <div>
                <dt>Doprava betonu</dt>
                <dd>vlastní čerpadlo</dd>
              </div>
            </dl>
          </div>
          <figure className="hero__media">
            <img
              src="/hero.webp"
              alt="Čerstvě uložený beton hlazený hladítkem na stavbě rodinného domu"
              className="hero__img"
            />
            <figcaption className="hero__stamp">
              <span className="hero__stampMix">Čerstvá směs</span>
              <span className="hero__stampSlump">S3 &middot; sednutí 100&ndash;150&nbsp;mm</span>
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="sluzby" id="sluzby" aria-labelledby="sluzby-nadpis">
        <div className="section__head">
          <p className="eyebrow eyebrow--dark">Katalog podle třídy betonu</p>
          <h2 className="section__title" id="sluzby-nadpis">
            Vyberte podle toho, co má směs unést
          </h2>
          <p className="section__intro">
            Každá konstrukce chce jinou pevnost. U nás si vyberete rovnou
            podle třídy — od lehkých patek po podlahu, po které pojede vysokozdvižák.
          </p>
        </div>

        <ul className="cards">
          {sluzby.map((s) => (
            <li className="card" key={s.cislo}>
              <span className="card__class">{s.cislo}</span>
              <h3 className="card__title">{s.nazev}</h3>
              <p className="card__text">{s.popis}</p>
            </li>
          ))}
        </ul>

        <figure className="sluzby__media">
          <img
            src="/section-1.webp"
            alt="Betonáž základové desky s bedněním a ocelovou výztuží"
            className="sluzby__img"
          />
        </figure>
      </section>

      <section className="onas" id="onas" aria-labelledby="onas-nadpis">
        <div className="onas__grid">
          <figure className="onas__media">
            <img
              src="/section-2.webp"
              alt="Parta betonářů Beton Hronek při hlazení čerstvé podlahy"
              className="onas__img"
            />
          </figure>
          <div className="onas__text">
            <p className="eyebrow eyebrow--dark">Proč lidé volají zrovna nás</p>
            <h2 className="section__title" id="onas-nadpis">
              Malá parta z Budějovic, která to po sobě uklidí
            </h2>
            <p className="section__intro">
              Nejsme montážní kolos. Přijedeme, poradíme jakou třídu betonu
              zvolit, a po nás zůstane rovná plocha — ne rozšlapané bláto.
            </p>

            <dl className="stats">
              {duvody.map((d) => (
                <div className="stat" key={d.j}>
                  <dt className="stat__num">{d.k}</dt>
                  <dd className="stat__body">
                    <span className="stat__label">{d.j}</span>
                    <span className="stat__text">{d.t}</span>
                  </dd>
                </div>
              ))}
            </dl>

            <blockquote className="quote">
              <p>
                &bdquo;Vylili nám desku pod přístavbu na Rožnově. Přijeli
                načas, deska byla do roviny a druhý den se dalo zdít.&ldquo;
              </p>
              <cite>Martin V., stavebník, České Budějovice</cite>
            </blockquote>
          </div>
        </div>
      </section>
    </main>
  );
}
