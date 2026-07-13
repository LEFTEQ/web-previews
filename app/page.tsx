export default function Page() {
  const services = [
    {
      title: "Odtah po poruše i nehodě",
      text: "Vůz bezpečně naložíme a dopravíme do vámi zvoleného servisu nebo na jiné určené místo.",
      label: "Osobní a užitková vozidla",
    },
    {
      title: "Pomoc přímo na silnici",
      text: "Pomůžeme s defektem, nepojízdným autem i situací, kdy je potřeba vůz vyprostit.",
      label: "Asistence a vyproštění",
    },
    {
      title: "Servis a náhradní vůz",
      text: "Zařídíme navazující servis a podle dostupnosti také zápůjčku vozidla, abyste mohli pokračovat dál.",
      label: "Vše na jednom místě",
    },
  ];

  return (
    <main className="site-shell">
      <section className="hero" aria-labelledby="hero-title">
        <header className="topbar">
          <a className="wordmark" href="#top" aria-label="Autoslužby HK – úvod">
            <span className="wordmark-main">AUTOSLUŽBY</span>
            <span className="wordmark-place">HK / HRADEC KRÁLOVÉ</span>
          </a>

          <nav className="topnav" aria-label="Hlavní navigace">
            <a href="#pomoc">S čím pomůžeme</a>
            <a href="#jistota">Proč nám zavolat</a>
          </nav>

          <a className="top-call" href="tel:+420602405140">
            <span>Okamžitá asistence</span>
            +420 602 405 140
          </a>
        </header>

        <div className="hero-grid" id="top">
          <div className="hero-copy">
            <p className="status"><span aria-hidden="true" /> Nonstop v Hradci Králové</p>
            <h1 id="hero-title">Když auto stojí,<br /><em>my vyrážíme.</em></h1>
            <p className="hero-lead">
              Odtahová, asistenční a vyprošťovací služba pro Hradec Králové a okolí. Řekněte nám, kde jste — další postup vyřešíme s vámi po telefonu.
            </p>
            <div className="hero-actions">
              <a className="primary-button" href="tel:+420602405140">
                Zavolat odtah
                <span aria-hidden="true">↗</span>
              </a>
              <a className="secondary-link" href="tel:+420777243140">
                Nonstop centrála <strong>777 243 140</strong>
              </a>
            </div>
            <p className="freshness">Aktuální provoz 2026 · pomoc 24 hodin denně</p>
          </div>

          <div className="hero-visual">
            <img
              src="/hero.webp"
              alt="Odtahový vůz Autoslužby HK připravený k zásahu"
            />
            <div className="location-tag">
              <span>Výjezdová oblast</span>
              <strong>Hradec Králové<br />a okolí</strong>
            </div>
          </div>
        </div>

        <div className="tow-line" aria-hidden="true">
          <span className="tow-line-cable" />
          <span className="tow-line-hook" />
        </div>
      </section>

      <section className="services" id="pomoc" aria-labelledby="services-title">
        <div className="section-heading">
          <p className="eyebrow">Pomoc podle situace</p>
          <h2 id="services-title">Od defektu až po odtah z místa nehody.</h2>
          <p>Stačí popsat, co se stalo a kde stojíte. Doporučíme nejrychlejší řešení a vyšleme vhodnou techniku.</p>
        </div>

        <div className="services-layout">
          <div className="service-photo">
            <img
              src="/section-1.webp"
              alt="Nakládání nepojízdného automobilu na odtahový vůz"
            />
            <span className="photo-caption">Bezpečné naložení a přeprava</span>
          </div>

          <div className="service-list">
            {services.map((service) => (
              <article className="service-item" key={service.title}>
                <p>{service.label}</p>
                <h3>{service.title}</h3>
                <span>{service.text}</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="trust" id="jistota" aria-labelledby="trust-title">
        <div className="trust-photo">
          <img
            src="/section-2.webp"
            alt="Technika odtahové služby Autoslužby HK v Hradci Králové"
          />
          <div className="insured-badge">
            <span>Přepravovaná vozidla</span>
            <strong>pojištěna min. na 4 mil. Kč</strong>
          </div>
        </div>

        <div className="trust-copy">
          <p className="eyebrow">Jistota v nepříjemné chvíli</p>
          <h2 id="trust-title">Vaše auto předáme tam, kde ho potřebujete.</h2>
          <p className="trust-intro">
            Po poruše nebo nehodě nechcete řešit další komplikace. Vozidlo odvezeme do zvoleného servisu či na jiné určené místo a při likvidaci pojistné události zajistíme také střežené parkování.
          </p>

          <dl className="proof-list">
            <div>
              <dt>24 / 7</dt>
              <dd>Nonstop výjezdová centrála</dd>
            </div>
            <div>
              <dt>od 2005</dt>
              <dd>Zkušenost s pomocí řidičům</dd>
            </div>
            <div>
              <dt>4 mil. Kč</dt>
              <dd>Minimální pojištění přepravovaného vozu</dd>
            </div>
          </dl>

          <div className="contact-note">
            <span>Pro běžné záležitosti</span>
            <a href="mailto:info@autosluzbyhk.cz">info@autosluzbyhk.cz</a>
          </div>
        </div>
      </section>
    </main>
  );
}
