export default function Page() {
  const services = [
    "Kuchyňské linky",
    "Vestavěné skříně",
    "Vybavení bytů 1+kk",
    "Práce se dřevem",
  ];

  return (
    <main className="site-shell">
      <header className="topbar" aria-label="Hlavní navigace">
        <a className="wordmark" href="#top" aria-label="Jánský Eff, návrh značky">
          <span>Jánský</span>
          <span>&amp; Eff</span>
        </a>
        <nav className="nav-links">
          <a href="#sluzby">Služby</a>
          <a href="#prace">Naše práce</a>
          <a href="#kontakt">Kontakt</a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="grain-map" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
        <div className="hero-copy">
          <p className="eyebrow">Truhlářství z Brna</p>
          <h1>Nábytek na míru, který zapadne přesně tam, kde má sloužit.</h1>
          <p className="lead">
            Navrhujeme a vyrábíme kuchyně, vestavěné skříně i kompletní vybavení bytů,
            škol a školek. Od prvního zaměření po montáž držíme jeden cíl: pevné řešení,
            čisté detaily a materiál, který vydrží každodenní provoz.
          </p>
          <div className="hero-actions">
            <a className="button primary" href="#kontakt">Kontaktujte nás</a>
            <a className="button secondary" href="#sluzby">Co vyrábíme</a>
          </div>
        </div>
        <div className="joinery-panel" aria-label="Detail truhlářského spoje">
          <div className="wood-block block-a" />
          <div className="wood-block block-b" />
          <div className="measure-line" />
        </div>
      </section>

      <section className="content-section" id="sluzby">
        <div className="section-heading">
          <p className="eyebrow">Naše práce</p>
          <h2>Nábytek, který vydrží změny v domácnosti i tvrdší provoz.</h2>
        </div>
        <div className="service-grid">
          {services.map((service, index) => (
            <article className="service-card" key={service}>
              <span className="service-number">0{index + 1}</span>
              <h3>{service}</h3>
              <p>
                Řešení na míru prostoru, rozpočtu a způsobu používání. Domluvíme rozměry,
                materiály, kování i praktické detaily před výrobou.
              </p>
            </article>
          ))}
        </div>
      </section>

      <footer className="footer" id="kontakt">
        <div>
          <p className="footer-title">Kontakt</p>
          <p>tel — · e-mail — · adresa —</p>
        </div>
        <p className="disclaimer">
          Jde o nezávazný návrh od studia lovinka, ne o oficiální web firmy.
        </p>
      </footer>
    </main>
  );
}
