import type { CSSProperties } from "react";

export default function Page() {
  const services = [
    {
      code: "01",
      title: "Rekonstrukce koupelen a bytových jader",
      desc: "Kompletně na klíč — od demontáže staré koupelny přes rozvody a obklady až po osazení vany, umyvadel a baterií. Vy si vyberete dlažbu, my dovedeme zbytek do detailu.",
      tag: "Zednické & obkladačské práce"
    },
    {
      code: "02",
      title: "Voda, kanalizace, topení",
      desc: "Veškeré rozvody vody, vnitřní i venkovní kanalizace, topení i požární rozvody. Postaráme se i o drobné úpravy plynu do délky 5 metrů.",
      tag: "Instalatérství"
    },
    {
      code: "03",
      title: "Drobné instalatérské opravy",
      desc: "Oprava toalety, výměna WC mísy nebo splachovadla, montáž baterií, výměna vany či dřezu. Přijedeme, spravíme, uklidíme po sobě.",
      tag: "Servis & opravy"
    }
  ];

  const clients = ["Statutární město Brno", "Naděje o. s.", "FERONA a. s."];

  return (
    <main className="page">
      <div className="grain" aria-hidden="true" />

      <header className="nav">
        <a className="mark" href="#top" aria-label="OXO plus — rekonstrukce koupelen Brno">
          <span className="mark__tiles" aria-hidden="true">
            <i /><i /><i /><i />
          </span>
          <span className="mark__word">OXO<span className="mark__plus">plus</span></span>
        </a>
        <a className="nav__havarie" href="tel:+420608280028">
          <span className="nav__pulse" aria-hidden="true" />
          NON-STOP havárie · 608 28 00 28
        </a>
      </header>

      <section className="hero" id="top">
        <p className="hero__eyebrow">Instalatérství &amp; rekonstrukce · Brno, Cejl</p>

        <h1 className="hero__title">
          <span className="hero__line l1">Nová</span>
          <span className="hero__line l2">koupelna</span>
          <span className="hero__line l3">
            do <span className="hero__grout">poslední</span>
          </span>
          <span className="hero__line l4">spáry.</span>
        </h1>

        <p className="hero__lead">
          Voda, kanalizace, topení i obklady od jedné party. V Brně a okolí rekonstruujeme
          koupelny a bytová jádra na klíč — a to, co uděláme, drží.
        </p>

        <div className="hero__actions">
          <a className="btn btn--solid" href="tel:+420777280027">Zavolat: 777 28 00 27</a>
          <a className="btn btn--ghost" href="mailto:info@oxo.cz">Poslat poptávku e-mailem</a>
        </div>

        <div className="hero__facts">
          <span>Zakázková kancelář · Cejl 62/121</span>
          <span aria-hidden="true">/</span>
          <span>Reference: město Brno, FERONA, Naděje</span>
        </div>

        <div className="hero__tilewall" aria-hidden="true">
          {Array.from({ length: 40 }).map((_, i) => (
            <span key={i} style={{ "--i": i } as CSSProperties} />
          ))}
        </div>
      </section>

      <section className="services" aria-labelledby="sluzby">
        <div className="section-head">
          <p className="section-head__eyebrow">Co pro vás uděláme</p>
          <h2 id="sluzby" className="section-head__title">Od prasklé trubky po hotovou koupelnu</h2>
        </div>

        <ul className="cards">
          {services.map((s) => (
            <li className="card" key={s.code}>
              <span className="card__code" aria-hidden="true">{s.code}</span>
              <div className="card__body">
                <span className="card__tag">{s.tag}</span>
                <h3 className="card__title">{s.title}</h3>
                <p className="card__desc">{s.desc}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section className="trust" aria-labelledby="onas">
        <div className="trust__grid">
          <div className="trust__intro">
            <p className="section-head__eyebrow">Kdo za tím stojí</p>
            <h2 id="onas" className="trust__title">
              Rodinná firma z Cejlu, na kterou se dá spolehnout.
            </h2>
            <p className="trust__text">
              OXO&nbsp;plus vede Dana&nbsp;Balharová&nbsp;Holasová a František&nbsp;Holas. Poradíme,
              nacením zdarma a nezávazně, a domluvíme termín, který platí. Zastavte se v zakázkové
              kanceláři na Cejli — koupelnu si projdeme společně.
            </p>

            <dl className="trust__contact">
              <div>
                <dt>Konzultace &amp; poptávky</dt>
                <dd><a href="tel:+420777280027">777 28 00 27</a></dd>
              </div>
              <div>
                <dt>E-mail</dt>
                <dd><a href="mailto:info@oxo.cz">info@oxo.cz</a></dd>
              </div>
              <div>
                <dt>Kancelář</dt>
                <dd>Cejl 62/121, Brno 602&nbsp;00</dd>
              </div>
            </dl>
          </div>

          <div className="trust__side">
            <p className="trust__side-label">Důvěřují nám</p>
            <ul className="trust__clients">
              {clients.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
            <div className="trust__havarie">
              <span className="trust__havarie-label">Nonstop havarijní služba</span>
              <a className="trust__havarie-num" href="tel:+420608280028">608 28 00 28</a>
              <span className="trust__havarie-note">Praskla voda o víkendu? Bereme telefon.</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
