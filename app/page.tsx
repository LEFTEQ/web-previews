import type { CSSProperties } from "react";

export default function Page() {
  const trades = [
    {
      no: "01",
      name: "Instalace vody a kanalizace",
      body: "Rozvody pitné i užitkové vody, odpady, připojení spotřebičů. Nová stavba i rekonstrukce bytového jádra — pracujeme s mědí, plastem i vícevrstvým potrubím.",
    },
    {
      no: "02",
      name: "Topení a kotle",
      body: "Ústřední topení, výměna kotlů, otopná tělesa a podlahové vytápění. Návrh soustavy tak, aby topila rovnoměrně a neplýtvala.",
    },
    {
      no: "03",
      name: "Svařování a potrubáři",
      body: "Svařované rozvody, ocelové i plynové potrubí, přípojky pro provozy a objekty. Práce s certifikací a měřitelným tlakem na spoji.",
    },
    {
      no: "04",
      name: "Havárie a servis",
      body: "Prasklé potrubí, netěsnost, studený radiátor. Přijedeme, najdeme příčinu a spravíme — bez zbytečného bourání navíc.",
    },
  ];

  const facts = [
    { k: "1989", v: "řemeslo v rukou od založení firmy" },
    { k: "15", v: "stálých instalatérů, topenářů a svářečů" },
    { k: "ISO 9001 · 14001 · OHSAS 18001", v: "certifikovaný systém kvality a bezpečnosti" },
  ];

  return (
    <main className="page">
      <header className="topbar">
        <a className="wordmark" href="#top" aria-label="Michael Šindler, instalatér Olomouc">
          <span className="wordmark__pipe" aria-hidden="true" />
          <span className="wordmark__name">ŠINDLER</span>
          <span className="wordmark__sub">instalatér · Olomouc</span>
        </a>
        <nav className="nav" aria-label="Hlavní">
          <a href="#sluzby">Co spravíme</a>
          <a href="#firma">O firmě</a>
          <a className="nav__call" href="tel:+420">Zavolat na havárii</a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero__frame">
          <img
            className="hero__img"
            src="/hero.webp"
            alt="Instalatér Michael Šindler při práci na rozvodech potrubí"
            loading="eager"
          />
          <span className="hero__gauge" aria-hidden="true">
            <span className="hero__gaugeVal">6&nbsp;bar</span>
            <span className="hero__gaugeLbl">tlaková zkouška · drží</span>
          </span>
        </div>

        <div className="hero__text">
          <p className="eyebrow">Voda · Topení · Svařování — od roku 1989</p>
          <h1 className="hero__h">
            Když teče, kde nemá,
            <br />
            <span className="hero__accent">víme, kde utáhnout.</span>
          </h1>
          <p className="hero__lead">
            Michael Šindler — instalatéři, topenáři a svářeči z Olomouce. Prasklé
            potrubí, výměna kotle nebo celý nový rozvod: přijedeme, spočítáme to
            před prací a spoj po sobě zatlakujeme.
          </p>
          <div className="hero__cta">
            <a className="btn btn--solid" href="tel:+420">Zavolat instalatéra</a>
            <a className="btn btn--ghost" href="#sluzby">Co spravíme</a>
          </div>
        </div>
      </section>

      <section className="services" id="sluzby" aria-labelledby="sluzby-h">
        <div className="sec__head">
          <p className="eyebrow">Naše řemeslo</p>
          <h2 className="sec__h" id="sluzby-h">Čtyři věci, které umíme dotáhnout</h2>
        </div>

        <div className="grid">
          <ul className="trades">
            {trades.map((t) => (
              <li className="trade" key={t.no}>
                <span className="trade__no" aria-hidden="true">{t.no}</span>
                <div className="trade__txt">
                  <h3 className="trade__name">{t.name}</h3>
                  <p className="trade__body">{t.body}</p>
                </div>
              </li>
            ))}
          </ul>
          <figure className="services__fig">
            <img
              src="/section-1.webp"
              alt="Detail nových rozvodů topení a vody v rekonstruovaném objektu"
              loading="lazy"
            />
            <figcaption>Rozvody vedeme čistě — ať se k nim příště dá dostat.</figcaption>
          </figure>
        </div>
      </section>

      <section className="trust" id="firma" aria-labelledby="firma-h">
        <figure className="trust__fig">
          <img
            src="/section-2.webp"
            alt="Tým firmy Michael Šindler na stavbě v terénu"
            loading="lazy"
          />
        </figure>
        <div className="trust__txt">
          <p className="eyebrow">O firmě</p>
          <h2 className="sec__h" id="firma-h">Řemeslo, které stojí za certifikáty</h2>
          <p className="trust__lead">
            Firmu Michael Šindler vedeme od roku 1989 — nejdřív jako živnost, od
            roku 2005 jako společnost. Za tu dobu nám ruce prošly stovkami
            koupelen, kotelen i havárií po celé Olomouci a okolí.
          </p>
          <dl className="facts">
            {facts.map((f) => (
              <div className="fact" key={f.k}>
                <dt className="fact__k">{f.k}</dt>
                <dd className="fact__v">{f.v}</dd>
              </div>
            ))}
          </dl>
          <p className="trust__note">
            Za nás mluví spoje, které drží roky, a řemeslníci, kteří u nás zůstávají —
            instalatér, topenář, potrubář, svářeč i strojník na jednom čísle.
          </p>
        </div>
      </section>
    </main>
  );
}
