export default function Page() {
  const services = [
    {
      title: "Odtah a asistence",
      text: "Přijedeme k poruše nebo nehodě, zajistíme vůz a odvezeme ho tam, kam potřebujete.",
      meta: "NONSTOP · ÚSTÍ A OKOLÍ",
    },
    {
      title: "Přeprava techniky",
      text: "Bezpečně převezeme osobní vůz, dodávku i pracovní stroj. Dovozy vozidel řešíme po celé EU.",
      meta: "ČR · EVROPSKÁ UNIE",
    },
    {
      title: "Pneu a rychloservis",
      text: "Výměna a oprava pneumatik, základní rychloservis i náhradní vůz, abyste mohli pokračovat.",
      meta: "PNEUSERVIS · NÁHRADNÍ VŮZ",
    },
  ];

  return (
    <main>
      <section className="hero" aria-labelledby="hero-title">
        <header className="site-header">
          <a className="wordmark" href="#zacatek" aria-label="Autodoprava Jelínek – úvod">
            <span className="wordmark-main">JELÍNEK</span>
            <span className="wordmark-sub">autodoprava · Ústí nad Labem</span>
          </a>

          <nav className="hero-nav" aria-label="Hlavní navigace">
            <a href="#sluzby">S čím pomůžeme</a>
            <a href="#jistota">Proč nám věřit</a>
          </nav>

          <a className="call-button call-button--header" href="tel:+420731958897">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M7.1 3.5 9.6 3a1.4 1.4 0 0 1 1.6.8l1.2 3a1.4 1.4 0 0 1-.4 1.6l-1.5 1.2a14 14 0 0 0 4 4l1.2-1.5a1.4 1.4 0 0 1 1.6-.4l3 1.2a1.4 1.4 0 0 1 .8 1.6l-.5 2.5a3 3 0 0 1-3 2.4C10.4 18.8 5.2 13.6 4.7 6.5a3 3 0 0 1 2.4-3Z" />
            </svg>
            <span><small>Dispečink NONSTOP</small>+420 731 958 897</span>
          </a>
        </header>

        <div className="hero-content" id="zacatek">
          <div className="hero-copy">
            <p className="eyebrow"><span aria-hidden="true" /> Odtahová služba z Ústí nad Labem</p>
            <h1 id="hero-title">Když auto<br />dál nejede,<br /><em>my ano.</em></h1>
            <p className="hero-lead">Porucha, nehoda nebo převoz stroje? Vyjedeme ve dne i v noci. Váš vůz zajistíme, naložíme a dopravíme bezpečně do cíle.</p>
            <div className="hero-actions">
              <a className="primary-button" href="tel:+420731958897">Zavolat odtah</a>
              <a className="text-link" href="#sluzby">Zjistit možnosti <span aria-hidden="true">↓</span></a>
            </div>
          </div>

          <div className="hero-visual">
            <img src="/hero.webp" alt="Odtahový vůz Autodopravy Jelínek při zásahu" />
            <div className="availability" aria-label="Odtahová služba dostupná nepřetržitě">
              <span className="availability-dot" />
              <span><strong>Výjezd 24/7</strong><small>Ústí nad Labem a okolí</small></span>
            </div>
            <div className="tow-line" aria-hidden="true"><span /></div>
          </div>
        </div>
      </section>

      <section className="services" id="sluzby" aria-labelledby="services-title">
        <div className="section-heading">
          <p className="eyebrow"><span aria-hidden="true" /> Pomoc na silnici i mimo ni</p>
          <h2 id="services-title">Jedno číslo.<br />Celá cesta vyřešená.</h2>
          <p>Řekněte nám, kde jste a co se stalo. Navrhneme nejrychlejší bezpečné řešení a předem si potvrdíme další postup.</p>
        </div>

        <div className="services-layout">
          <div className="services-image">
            <img src="/section-1.webp" alt="Nakládání vozidla na odtahovou plošinu" />
            <p><strong>Bezpečné naložení</strong><span>Kamerový dohled chrání převážený vůz.</span></p>
          </div>

          <div className="service-list">
            {services.map((service) => (
              <article className="service-card" key={service.title}>
                <p className="service-meta">{service.meta}</p>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
                <a href="tel:+420731958897" aria-label={`Zavolat kvůli službě ${service.title}`}>
                  Domluvit pomoc <span aria-hidden="true">↗</span>
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="trust" id="jistota" aria-labelledby="trust-title">
        <div className="trust-image">
          <img src="/section-2.webp" alt="Technika a pracovní vůz Autodopravy Jelínek" />
          <div className="experience-stamp">
            <strong>od 2015</strong>
            <span>vlastní firma<br />18 let praxe předtím</span>
          </div>
        </div>

        <div className="trust-content">
          <p className="eyebrow eyebrow--light"><span aria-hidden="true" /> Klid i v nepříjemné situaci</p>
          <h2 id="trust-title">Váš vůz vezeme jako svůj.</h2>
          <p className="trust-intro">Za volantem nejsme nováčci. Autodopravu Jelínek jsme založili po osmnácti letech praxe v mezinárodní dopravě. Dnes pomáháme řidičům z Ústí i na cestách po celé Evropě.</p>

          <div className="proof-grid">
            <div>
              <svg viewBox="0 0 32 32" aria-hidden="true"><path d="m16 3 10 4v7c0 7-4.2 12-10 15-5.8-3-10-8-10-15V7l10-4Z" /><path d="m11 16 3 3 7-8" /></svg>
              <h3>Školení pro zásahy</h3>
              <p>Máme potvrzení o bezpečnosti práce na dálnicích a silnicích.</p>
            </div>
            <div>
              <svg viewBox="0 0 32 32" aria-hidden="true"><rect x="4" y="7" width="24" height="18" rx="3" /><path d="M4 13h24M9 20h5" /></svg>
              <h3>Platba kartou</h3>
              <p>Na místě můžete pohodlně zaplatit bezkontaktně.</p>
            </div>
            <div>
              <svg viewBox="0 0 32 32" aria-hidden="true"><path d="M5 22V10l11-5 11 5v12l-11 5-11-5Z" /><path d="m5 10 11 6 11-6M16 16v11" /></svg>
              <h3>Vybavení pro převoz</h3>
              <p>Vozíme auta, pracovní stroje a nabízíme i pronájem přívěsu.</p>
            </div>
          </div>

          <div className="trust-contact">
            <div>
              <small>Potřebujete pomoc právě teď?</small>
              <a href="tel:+420731958897">+420 731 958 897</a>
            </div>
            <a className="mail-link" href="mailto:autodopravajelinek.sro@gmail.com">Napsat e-mail <span aria-hidden="true">↗</span></a>
          </div>
          <p className="freshness">Informace o službách aktualizovány v červenci 2026.</p>
        </div>
      </section>
    </main>
  );
}
