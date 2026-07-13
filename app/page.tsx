export default function Page() {
  const services = [
    {
      label: "LET",
      title: "Transfery na letiště",
      text: "Vyzvedneme vás v Ostravě i okolí a dovezeme až k terminálu. Bez hledání parkování a přestupování se zavazadly.",
    },
    {
      label: "BIZ",
      title: "Firemní přeprava",
      text: "Diskrétní doprava zaměstnanců, obchodních partnerů i hostů. Vhodná také pro večírky a firemní akce.",
    },
    {
      label: "ŠKOLA",
      title: "Přeprava dětí",
      text: "Spolehlivá cesta do školy i zpět pro rodiče, kteří potřebují sladit dopravu s pracovním dnem.",
    },
    {
      label: "CARGO",
      title: "Doručení zásilek",
      text: "Důležité dokumenty a menší zásilky převezeme bezpečně na domluvené místo a v dohodnutý čas.",
    },
  ];

  return (
    <main>
      <section className="hero" aria-labelledby="hero-title">
        <nav className="topbar" aria-label="Hlavní navigace">
          <a className="wordmark" href="#nahoru" aria-label="TUX Transport – úvod">
            <span className="wordmark-main">TUX</span>
            <span className="wordmark-sub">TRANSPORT</span>
          </a>

          <div className="nav-links">
            <a href="#sluzby">Služby</a>
            <a href="#jistota">Proč TUX</a>
          </div>

          <a className="nav-phone" href="tel:+420731942740">
            <span>Ostrava · nonstop</span>
            +420 731 942 740
          </a>
        </nav>

        <div className="hero-grid" id="nahoru">
          <div className="hero-copy">
            <p className="eyebrow"><span aria-hidden="true" /> Osobní přeprava · Ostrava</p>
            <h1 id="hero-title">Klidná jízda.<br /><em>Přesně tam, kam potřebujete.</em></h1>
            <p className="hero-intro">Taxi a osobní přeprava vozy střední a vyšší třídy. Na letiště, do firmy, na večírek i každé ráno do školy.</p>

            <div className="hero-actions">
              <a className="button button-primary" href="tel:+420731942740">Zavolat a objednat</a>
              <a className="button button-secondary" href="https://wa.me/420731942740">Napsat na WhatsApp</a>
            </div>

            <div className="ride-facts" aria-label="Hlavní výhody">
              <div><strong>24/7</strong><span>přeprava po domluvě</span></div>
              <div><strong>Karta</strong><span>terminál v každém voze</span></div>
              <div><strong>Ostrava</strong><span>a celé okolí</span></div>
            </div>
          </div>

          <div className="hero-visual">
            <img src="/hero.webp" width="1600" height="1100" alt="Vůz TUX Transport připravený k osobní přepravě v Ostravě" />
            <div className="route-card" aria-hidden="true">
              <span className="route-dot" />
              <span className="route-line" />
              <span className="route-arrow">→</span>
              <span className="route-city">OSTRAVA</span>
            </div>
            <p className="image-note">BMW · Mercedes · Škoda Superb</p>
          </div>
        </div>
      </section>

      <section className="services section" id="sluzby" aria-labelledby="services-title">
        <div className="section-heading">
          <div>
            <p className="eyebrow"><span aria-hidden="true" /> Kam vás vezeme</p>
            <h2 id="services-title">Jedno číslo pro cestu,<br />kterou nechcete řešit.</h2>
          </div>
          <p>Řeknete nám odkud, kam a kdy. Zvolíme vhodný vůz a domluvíme podrobnosti přepravy.</p>
        </div>

        <div className="services-layout">
          <div className="service-image">
            <img src="/section-1.webp" width="1200" height="1450" alt="Interiér komfortního vozu osobní přepravy TUX Transport" />
            <div className="comfort-tag"><span>komfort</span><strong>od dveří ke dveřím</strong></div>
          </div>

          <div className="service-list">
            {services.map((service) => (
              <article className="service-item" key={service.label}>
                <span className="service-code">{service.label}</span>
                <div>
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                </div>
                <span className="service-mark" aria-hidden="true">↗</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="trust section" id="jistota" aria-labelledby="trust-title">
        <div className="trust-visual">
          <img src="/section-2.webp" width="1500" height="1050" alt="Řidič a vůz TUX Transport při profesionální osobní přepravě" />
          <div className="plate" aria-hidden="true"><span>CZ</span>TUX · OVA</div>
        </div>

        <div className="trust-copy">
          <p className="eyebrow"><span aria-hidden="true" /> Jistota na cestě</p>
          <h2 id="trust-title">Nastoupíte.<br />O zbytek se postaráme.</h2>
          <p className="trust-lead">Čistý vůz, profesionální přístup a cesta bez zbytečných komplikací. TUX Transport zajišťuje osobní přepravu pro soukromé i firemní zákazníky v Ostravě a okolí.</p>

          <dl className="trust-points">
            <div>
              <dt>Vozový park</dt>
              <dd>BMW, Mercedes a Škoda Superb pro pohodlné cestování.</dd>
            </div>
            <div>
              <dt>Platba bez hotovosti</dt>
              <dd>Ve všech vozech můžete zaplatit běžnou platební kartou.</dd>
            </div>
            <div>
              <dt>Přímá domluva</dt>
              <dd>Volejte nebo pište na WhatsApp na číslo +420 731 942 740.</dd>
            </div>
          </dl>

          <a className="mail-link" href="mailto:tuxtransport@seznam.cz">tuxtransport@seznam.cz <span aria-hidden="true">↗</span></a>
        </div>
      </section>
    </main>
  );
}
