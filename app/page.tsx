import type { CSSProperties } from "react";

export default function Page() {
  const sluzby = [
    {
      tlak: "0,3 baru",
      popis: "provozní přetlak v domovním rozvodu",
      nazev: "Voda, plyn, topení",
      text: "Rozvody vody a plynu, výstavba a rekonstrukce topení. Uděláme kompletní topenářské práce od návrhu po tlakovou zkoušku a předání s protokolem.",
    },
    {
      tlak: "45 mm",
      popis: "skladba anhydritové podlahy nad topením",
      nazev: "Lité podlahy",
      text: "Podlahové topení s celou skladbou podlahy — od izolace přes rozvody až po litý anhydritový potěr. Rovná plocha bez dilatačních spár.",
    },
    {
      tlak: "A+++",
      popis: "tepelné čerpadlo vzduch–voda",
      nazev: "Alternativní zdroje",
      text: "Tepelná čerpadla a solární systémy. Navrhneme zdroj na míru domu a napojíme ho na stávající otopnou soustavu i ohřev vody.",
    },
    {
      tlak: "na klíč",
      popis: "stavba i rekonstrukce v jedné partě",
      nazev: "Stavební práce",
      text: "Stavební práce „na klíč“ — bourání, přizdívky, prostupy a začištění po instalaci. Nemusíte shánět další firmu na dokončení.",
    },
  ];

  return (
    <main className="g-main">
      <header className="g-topbar">
        <a className="g-logo" href="#uvod" aria-label="GASSERVIS Ústí nad Labem, úvod">
          <span className="g-logo-mark" aria-hidden="true">
            <span className="g-flame" />
          </span>
          <span className="g-logo-text">
            <span className="g-logo-name">GASSERVIS</span>
            <span className="g-logo-sub">Ústí nad Labem&nbsp;· voda plyn topení</span>
          </span>
        </a>
        <div className="g-topmeta">
          <span className="g-hours">po–čt 8:00–15:30</span>
          <a className="g-call" href="tel:+420608680376">608 680 376</a>
        </div>
      </header>

      <section className="g-hero" id="uvod">
        <div className="g-hero-media">
          <img
            src="/hero.webp"
            alt="Montér GASSERVIS při práci na plynovém a topném rozvodu"
            className="g-hero-img"
          />
          <div className="g-hero-scrim" aria-hidden="true" />
        </div>

        <div className="g-hero-inner">
          <p className="g-eyebrow">Plynařství · Ústí nad Labem · od roku 1998</p>
          <h1 className="g-hero-title">
            Plyn, voda a&nbsp;topení,
            <br />
            co drží <span className="g-hl">tlak</span>.
          </h1>
          <p className="g-hero-lead">
            Revizní a montážní práce s&nbsp;protokolem. Uděláme rozvody, podlahové topení
            i&nbsp;tepelné čerpadlo — a&nbsp;stavební práce kolem toho začistíme sami.
          </p>
          <div className="g-hero-actions">
            <a className="g-btn g-btn-primary" href="tel:+420608680376">Zavolat: 608 680 376</a>
            <a className="g-btn g-btn-ghost" href="mailto:info@gasservis.cz">Poslat poptávku</a>
          </div>

          <dl className="g-gauges">
            <div className="g-gauge">
              <dt>Tlaková zkouška</dt>
              <dd>na každé zakázce</dd>
            </div>
            <div className="g-gauge">
              <dt>Revizní zpráva</dt>
              <dd>s razítkem revizního technika</dd>
            </div>
            <div className="g-gauge">
              <dt>Cenová nabídka</dt>
              <dd>zdarma a nezávazně</dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="g-services" aria-labelledby="sluzby-nadpis">
        <div className="g-section-head">
          <p className="g-eyebrow g-eyebrow-dark">Co u nás objednáte</p>
          <h2 id="sluzby-nadpis" className="g-h2">Od přípojky po litou podlahu</h2>
          <p className="g-section-lead">
            Čtyři obory, jedna parta. Nemusíte koordinovat instalatéra, topenáře a zedníka
            zvlášť — přijedeme, uděláme a předáme funkční celek.
          </p>
        </div>

        <ol className="g-cards">
          {sluzby.map((s, i) => (
            <li className="g-card" key={s.nazev}>
              <div className="g-card-gauge" style={{ "--i": i } as CSSProperties}>
                <span className="g-card-value">{s.tlak}</span>
                <span className="g-card-unit">{s.popis}</span>
              </div>
              <h3 className="g-card-title">{s.nazev}</h3>
              <p className="g-card-text">{s.text}</p>
            </li>
          ))}
        </ol>

        <figure className="g-service-figure">
          <img
            src="/section-1.webp"
            alt="Rozvody topení a litá podlaha připravená k pokládce"
            className="g-service-img"
          />
          <figcaption className="g-service-cap">
            Litá anhydritová podlaha s&nbsp;podlahovým topením — Ústí nad Labem, Střekov.
          </figcaption>
        </figure>
      </section>

      <section className="g-about" aria-labelledby="onas-nadpis">
        <div className="g-about-grid">
          <div className="g-about-text">
            <p className="g-eyebrow g-eyebrow-dark">O nás</p>
            <h2 id="onas-nadpis" className="g-h2">
              Místní firma, které se dovoláte
            </h2>
            <p className="g-about-p">
              GASSERVIS jsme malá firma z&nbsp;Ústí nad Labem. Děláme vodu, plyn a&nbsp;topení
              v&nbsp;bytech, rodinných domech i&nbsp;provozovnách po celém Ústeckém kraji.
              Na plynová zařízení vystavíme revizní zprávu, na topení tlakovou zkoušku —
              vše doložíme papírem, ne slovem.
            </p>
            <p className="g-about-p">
              Voláte přímo montérovi, který k&nbsp;vám přijede. Řekneme rovnou, co jde a&nbsp;co ne,
              a&nbsp;termín dodržíme.
            </p>

            <ul className="g-facts">
              <li>
                <span className="g-fact-k">Kde pracujeme</span>
                <span className="g-fact-v">Ústí nad Labem a&nbsp;okolí</span>
              </li>
              <li>
                <span className="g-fact-k">Zavolat</span>
                <span className="g-fact-v">
                  <a href="tel:+420608680376">608 680 376</a>
                </span>
              </li>
              <li>
                <span className="g-fact-k">Napsat</span>
                <span className="g-fact-v">
                  <a href="mailto:info@gasservis.cz">info@gasservis.cz</a>
                </span>
              </li>
              <li>
                <span className="g-fact-k">Kdy jsme na telefonu</span>
                <span className="g-fact-v">po–čt 8:00–15:30</span>
              </li>
            </ul>
          </div>

          <figure className="g-about-figure">
            <img
              src="/section-2.webp"
              alt="Montér GASSERVIS u plynového kotle a rozvodů"
              className="g-about-img"
            />
            <figcaption className="g-about-cap">
              Servis a&nbsp;revize plynových zařízení přímo u&nbsp;vás doma.
            </figcaption>
          </figure>
        </div>
      </section>
    </main>
  );
}
