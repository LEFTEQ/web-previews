import type { CSSProperties } from "react";

export default function Page() {
  const routes = [
    {
      no: "01",
      city: "Hradec Králové",
      country: "CZ",
      label: "Domácí základna",
      note: "Rozvozy po celé republice — potraviny, materiál, paletové zásilky.",
    },
    {
      no: "02",
      city: "Německo",
      country: "DE",
      label: "Leppersdorf · Sasko",
      note: "Pravidelné jízdy pro mlékárenský a nápojový sortiment.",
    },
    {
      no: "03",
      city: "Polsko",
      country: "PL",
      label: "Slezsko · Dolní Slezsko",
      note: "Chlazené i suché náklady, spolehlivé termíny.",
    },
    {
      no: "04",
      city: "Rakousko",
      country: "AT",
      label: "Přes Dunaj na jih",
      note: "Materiál i stěhování napříč hranicí.",
    },
    {
      no: "05",
      city: "Itálie",
      country: "IT",
      label: "Až za Alpy",
      note: "Dálkové trasy s jedním řidičem po celou cestu.",
    },
  ];

  const services = [
    {
      k: "Přeprava potravin",
      d: "Vozíme nápoje a chlazené zboží pro pivovary a mlékárny — v teplotním režimu, s papíry v pořádku a s termínem, na který se dá spolehnout.",
    },
    {
      k: "Přeprava materiálu",
      d: "Paletové i kusové zásilky pro výrobní firmy. Naložíme, zajistíme, dovezeme — od jedné palety po celý návěs.",
    },
    {
      k: "Stěhování",
      d: "Kanceláře, provozovny i domácnosti. Přijedeme s vozíkem i lidmi, kteří vědí, jak nést skříň do patra.",
    },
    {
      k: "Manipulace vozíky",
      d: "Vysokozdvižné vozíky pro nakládku a přerovnání ve skladu. Zvládneme to i tam, kde vy zrovna vozík nemáte.",
    },
  ];

  const clients = [
    "Plzeňský Prazdroj",
    "Pivovar Perštejn Pardubice",
    "Primátor Náchod",
    "Pivovar Krušovice",
    "Mlékárna Pragolaktos",
    "Sachsen Milch",
    "Coca-Cola HBC",
  ];

  return (
    <main className="ad">
      <header className="ad-top">
        <a className="ad-brand" href="#uvod" aria-label="A-Doprava — úvod">
          <span className="ad-brand__mark" aria-hidden="true">
            <span className="ad-brand__a">A</span>
          </span>
          <span className="ad-brand__word">
            <b>A&#8209;Doprava</b>
            <em>autodoprava · Hradec Králové</em>
          </span>
        </a>
        <nav className="ad-nav" aria-label="Hlavní">
          <a href="#sluzby">Co vozíme</a>
          <a href="#o-nas">O nás</a>
        </nav>
      </header>

      <section className="ad-hero" id="uvod">
        <div className="ad-hero__frame">
          <img
            className="ad-hero__img"
            src="/hero.webp"
            alt="Nákladní vozidlo A-Doprava připravené na trase z Hradce Králové"
            width={1600}
            height={1000}
          />
          <div className="ad-hero__grain" aria-hidden="true" />
        </div>

        <div className="ad-hero__body">
          <p className="ad-hero__eyebrow">
            <span className="ad-dot" aria-hidden="true" /> Východ Čech · od roku 1998 na silnici
          </p>
          <h1 className="ad-hero__h">
            Naložíme,
            <br />
            <span className="ad-hero__hl">dovezeme</span> včas.
          </h1>
          <p className="ad-hero__lead">
            Autodoprava z Hradce Králové. Potraviny, materiál, stěhování i vysokozdvižné
            vozíky — pro pivovary, mlékárny i vás doma. Přes 20 let stejný přístup:
            řekneme termín a dodržíme ho.
          </p>
          <div className="ad-hero__cta">
            <a className="ad-btn ad-btn--solid" href="#sluzby">
              Co pro vás odvezeme
            </a>
            <a className="ad-btn ad-btn--ghost" href="#o-nas">
              Kdo za tím stojí
            </a>
          </div>
        </div>
      </section>

      <section className="ad-manifest" aria-label="Kam vozíme">
        <div className="ad-manifest__head">
          <p className="ad-kicker">Nákladní list</p>
          <h2 className="ad-manifest__h">Kde nás potkáte na silnici</h2>
        </div>
        <ol className="ad-routes">
          {routes.map((r) => (
            <li className="ad-route" key={r.no}>
              <span className="ad-route__no">{r.no}</span>
              <span className="ad-route__main">
                <span className="ad-route__city">{r.city}</span>
                <span className="ad-route__label">{r.label}</span>
              </span>
              <span className="ad-route__note">{r.note}</span>
              <span className="ad-route__cc" aria-hidden="true">
                {r.country}
              </span>
            </li>
          ))}
        </ol>
      </section>

      <section className="ad-services" id="sluzby">
        <div className="ad-services__intro">
          <p className="ad-kicker ad-kicker--light">Co umíme</p>
          <h2 className="ad-services__h">
            Čtyři věci, které děláme
            <br />pořádně a bez výmluv.
          </h2>
          <img
            className="ad-services__img"
            src="/section-1.webp"
            alt="Nakládka palet do nákladního vozu"
            width={1200}
            height={900}
          />
        </div>
        <ul className="ad-cards">
          {services.map((s, i) => (
            <li
              className="ad-card"
              key={s.k}
              style={{ "--i": i } as CSSProperties}
            >
              <h3 className="ad-card__h">{s.k}</h3>
              <p className="ad-card__d">{s.d}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="ad-about" id="o-nas">
        <div className="ad-about__grid">
          <div className="ad-about__text">
            <p className="ad-kicker">O nás</p>
            <h2 className="ad-about__h">
              Středně velká firma z východu Čech, která vozí pro ty největší.
            </h2>
            <p className="ad-about__p">
              A-Doprava s.r.o. jezdí z Hradce Králové už přes dvacet let. V rozvozech
              patříme mezi největší v republice — a přitom u telefonu pořád zvedáme my,
              ne robot. Vozíme materiál, potraviny i osoby, stěhujeme a manipulujeme
              s nákladem vysokozdvižnými vozíky.
            </p>
            <p className="ad-about__p">
              Nejčastěji jezdíme po tuzemsku, běžně ale i do Německa, Polska, Rakouska
              a Itálie. Naše služby využívají velké i malé firmy, stejně jako lidé,
              co zrovna potřebují něco odvézt.
            </p>
            <dl className="ad-stats">
              <div>
                <dt>Na silnici od</dt>
                <dd>1998</dd>
              </div>
              <div>
                <dt>Zemí v pravidelném rozvozu</dt>
                <dd>5</dd>
              </div>
              <div>
                <dt>Domovské město</dt>
                <dd>Hradec Králové</dd>
              </div>
            </dl>
          </div>
          <figure className="ad-about__figure">
            <img
              src="/section-2.webp"
              alt="Řidič A-Doprava u vozu na cestě přes hranice"
              width={1000}
              height={1200}
            />
            <figcaption>Řidič po celé trase jeden — od nakládky po vykládku.</figcaption>
          </figure>
        </div>

        <div className="ad-clients">
          <p className="ad-kicker">Vozíme pro</p>
          <ul className="ad-clients__list">
            {clients.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
