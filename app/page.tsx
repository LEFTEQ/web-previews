import type { CSSProperties } from "react";

export default function Page() {
  const services = [
    {
      code: "01",
      name: "Bezpečnostní skla",
      desc: "Kalená a vrstvená skla do dveří, výloh i zábradlí. Když praskne, drží pohromadě — nezraní.",
    },
    {
      code: "02",
      name: "Dvojskla a izolační skla",
      desc: "Výměna zamlžených nebo prasklých dvojskel v oknech. Zaměříme, vyrobíme, osadíme.",
    },
    {
      code: "03",
      name: "Řezané sklo na míru",
      desc: "Police, desky na stůl, skla do vitrín a rámů. Broušené hrany, přesně na milimetr.",
    },
    {
      code: "04",
      name: "Zrcadla a zasklení",
      desc: "Zrcadla do koupelen i předsíní, zasklení dveří a oken po rozbití. Uklidíme střepy za vás.",
    },
  ];

  return (
    <main className="page">
      <a className="skip" href="#obsah">
        Přeskočit na obsah
      </a>

      <header className="topbar">
        <div className="wordmark" aria-label="Sklenářství Kasík, Praha 7">
          <span className="wordmark__pane">SKLENÁŘSTVÍ</span>
          <span className="wordmark__sub">Kasík · Praha 7 · od 1996</span>
        </div>
        <a className="call call--top" href="tel:+420233370000">
          Zavolat sklenáři
        </a>
      </header>

      <section className="hero" id="obsah">
        <div className="hero__figure">
          <img
            src="/hero.webp"
            alt="Sklenář řeže tabuli skla na dílenském stole v pražské dílně"
            className="hero__img"
          />
          <div className="hero__cut" aria-hidden="true" />
        </div>

        <div className="hero__text">
          <p className="eyebrow">Rozbité okno? Voláme zpět do hodiny.</p>
          <h1 className="hero__title">
            Sklo řežeme
            <br />
            <span className="hero__title--accent">na milimetr</span>
            <br />
            přesně.
          </h1>
          <p className="hero__lede">
            Malá sklenářská dílna v Holešovicích. Od roku 1996 zasklíváme okna,
            dveře a výlohy po celé Praze — a měříme přesně tam, kde to potřebujete.
          </p>
          <div className="hero__actions">
            <a className="call" href="tel:+420233370000">
              Zavolat: 233 37 00 00
            </a>
            <a className="ghost" href="#sluzby">
              Co zasklíme
            </a>
          </div>
          <p className="hero__note">
            Janovského 41, Praha 7 · zaměření zdarma · vyjedeme i mimo dílnu
          </p>
        </div>
      </section>

      <section className="services" id="sluzby" aria-labelledby="sluzby-nadpis">
        <div className="section-head">
          <p className="eyebrow">Řez / Výměna / Osazení</p>
          <h2 id="sluzby-nadpis" className="section-title">
            Čtyři věci, které umíme opravdu dobře
          </h2>
        </div>

        <ol className="grid">
          {services.map((s) => (
            <li className="card" key={s.code}>
              <span className="card__code" aria-hidden="true">
                {s.code}
              </span>
              <h3 className="card__name">{s.name}</h3>
              <p className="card__desc">{s.desc}</p>
            </li>
          ))}
        </ol>

        <figure className="strip">
          <img
            src="/section-1.webp"
            alt="Detail broušené hrany skleněné tabule"
            className="strip__img"
          />
          <figcaption className="strip__cap">
            Broušená hrana — sklo bezpečné na dotek, ať jde o polici nebo výlohu.
          </figcaption>
        </figure>
      </section>

      <section className="trust" aria-labelledby="trust-nadpis">
        <div className="trust__media">
          <img
            src="/section-2.webp"
            alt="Interiér pražské sklenářské dílny s tabulemi skla"
            className="trust__img"
          />
        </div>

        <div className="trust__body">
          <p className="eyebrow">O dílně</p>
          <h2 id="trust-nadpis" className="section-title">
            Jeden sklenář, který zvedne telefon
          </h2>
          <p className="trust__lede">
            Firmu vede Štěpán Kasík. Živnostenský list z března 2001, ale sklo
            řežeme už od roku 1996. Žádné call centrum — voláte přímo do dílny
            a mluvíte s tím, kdo k vám přijede.
          </p>

          <dl className="facts">
            <div className="fact">
              <dt>Na trhu</dt>
              <dd>od roku 1996</dd>
            </div>
            <div className="fact">
              <dt>Dílna</dt>
              <dd>Janovského 41, Praha 7</dd>
            </div>
            <div className="fact">
              <dt>Zaměření</dt>
              <dd>u vás doma, zdarma</dd>
            </div>
            <div className="fact">
              <dt>IČO</dt>
              <dd>41793242</dd>
            </div>
          </dl>

          <blockquote className="quote">
            „Prasklo nám sklo ve dveřích do obchodu v pátek odpoledne. Pan Kasík
            přijel, zaměřil a v pondělí ráno bylo zasklené. Uklidil i střepy.“
            <cite>— provozovna v Holešovicích</cite>
          </blockquote>

          <a className="call" href="tel:+420233370000">
            Popsat, co potřebuji zasklít
          </a>
        </div>
      </section>
    </main>
  );
}
