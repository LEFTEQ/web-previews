export default function HomePage() {
  const services = [
    {
      code: "SDK",
      title: "Suchá výstavba",
      text: "Desky, profily, tmely, spojovací materiál i příslušenství jako jeden funkční systém.",
      detail: "Příčky · podhledy · předstěny",
    },
    {
      code: "IZO",
      title: "Izolace",
      text: "Řešení pro střechy, fasády, dřevostavby a technické provozy s odbornou konzultací.",
      detail: "Tepelná · akustická · technická",
    },
    {
      code: "LOG",
      title: "Sklad a logistika",
      text: "Široké skladové zásoby a koordinace dodávky, aby materiál dorazil ve chvíli, kdy jej stavba potřebuje.",
      detail: "Výdej · kompletace · doprava",
    },
  ];

  return (
    <main>
      <header className="site-header" aria-label="Hlavní navigace">
        <a className="wordmark" href="#nahoru" aria-label="B plus M Brno, úvodní stránka">
          <span className="wordmark-mark" aria-hidden="true">B+M</span>
          <span className="wordmark-place">Brno</span>
        </a>

        <nav className="desktop-nav" aria-label="Navigace na stránce">
          <a href="#sortiment">Sortiment</a>
          <a href="#jistota">Proč B+M</a>
          <a className="nav-contact" href="mailto:praha@baustoff-metall.com">Napsat pobočce</a>
        </nav>

        <details className="mobile-menu">
          <summary>Menu</summary>
          <nav aria-label="Mobilní navigace">
            <a href="#sortiment">Sortiment</a>
            <a href="#jistota">Proč B+M</a>
            <a href="mailto:praha@baustoff-metall.com">Napsat pobočce</a>
          </nav>
        </details>
      </header>

      <section className="hero" id="nahoru" aria-labelledby="hero-title">
        <div className="hero-image-wrap" aria-hidden="true">
          <img
            className="hero-image"
            src="/hero.webp"
            alt=""
          />
          <div className="hero-slice">
            <span>Sádrokarton</span>
            <span>Profil</span>
            <span>Izolace</span>
          </div>
        </div>

        <div className="hero-copy">
          <p className="eyebrow">Systémy suché výstavby · Brno</p>
          <h1 id="hero-title">
            Stavba drží,
            <span>když drží systém.</span>
          </h1>
          <p className="hero-lead">
            Materiál, který k sobě patří. Odborná rada, široká skladová zásoba
            a logistika pro řemeslníky i stavební firmy z Brna a okolí.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#sortiment">Prohlédnout sortiment</a>
            <a className="text-link" href="mailto:praha@baustoff-metall.com">
              Napsat pobočce <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>

        <div className="hero-proof" aria-label="Základní informace">
          <p><strong>Od roku 1994</strong><span>první pobočka B+M v Česku</span></p>
          <p><strong>Brno</strong><span>odborný prodej a sklad</span></p>
          <p><strong>Aktuální nabídka</strong><span>ověřena v červenci 2026</span></p>
        </div>
      </section>

      <section className="services" id="sortiment" aria-labelledby="services-title">
        <div className="section-heading">
          <p className="eyebrow">Od konstrukce po poslední vrut</p>
          <h2 id="services-title">Jeden systém.<br />Žádné slepé místo.</h2>
          <p>
            Nevybíráte izolovanou položku z katalogu. Pomůžeme sestavit skladbu,
            ve které deska, profil, izolace i příslušenství fungují dohromady.
          </p>
        </div>

        <div className="services-media">
          <img
            src="/section-1.webp"
            alt="Sklad systémových materiálů pro suchou výstavbu v pobočce B plus M"
          />
          <span className="material-label">Skladba / celek</span>
        </div>

        <div className="service-list">
          {services.map((service) => (
            <article className="service-card" key={service.code}>
              <span className="service-code" aria-label={`Oblast ${service.code}`}>{service.code}</span>
              <div>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
                <small>{service.detail}</small>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="trust" id="jistota" aria-labelledby="trust-title">
        <div className="trust-visual">
          <img
            src="/section-2.webp"
            alt="Pracovník kontroluje stavební materiál připravený pro zákazníka"
          />
          <div className="quality-stamp" aria-label="Systémy certifikované podle evropských norem">
            <span>EN</span>
            <small>ověřené<br />systémy</small>
          </div>
        </div>

        <div className="trust-copy">
          <p className="eyebrow">Jistota za materiálem</p>
          <h2 id="trust-title">V dobrých rukách není fráze. Je to návaznost.</h2>
          <p className="trust-intro">
            Brněnská pobočka vznikla jako první české zastoupení B+M. Opírá se
            o zkušenost rakouské rodinné skupiny a síť specialistů napříč Evropou.
          </p>

          <dl className="facts">
            <div>
              <dt>125</dt>
              <dd>poboček skupiny B+M</dd>
            </div>
            <div>
              <dt>14</dt>
              <dd>evropských zemí</dd>
            </div>
            <div>
              <dt>4</dt>
              <dd>pobočky v České republice</dd>
            </div>
          </dl>

          <ul className="assurances">
            <li>Vlastní produkty a systémy certifikované dle evropských norem</li>
            <li>Odborné poradenství pro konkrétní skladbu konstrukce</li>
            <li>Mezinárodní standard servisu a logistiky B+M</li>
          </ul>
        </div>
      </section>
    </main>
  );
}
