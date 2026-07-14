export default function Page() {
  const services = [
    {
      label: "Pro hotely a penziony",
      title: "Hotelový program",
      text: "Povlečení, prostěradla, ručníky, osušky, chrániče matrací i stolní textil sladíme podle provozu, rozpočtu a způsobu praní.",
      detail: "Výběr materiálu · návrh skladby · opakované dodávky",
    },
    {
      label: "Pro prodejny a odběratele",
      title: "Velkoobchod",
      text: "Zajistíme stabilní sortiment bytového textilu pro maloobchodní prodejny, restaurace, instituce i další profesionální odběratele.",
      detail: "Česko · Morava · Slezsko · Slovensko",
    },
    {
      label: "Před objednávkou",
      title: "Osobní poradenství",
      text: "Neprodáváme jen podle fotografie. Pomůžeme vybrat gramáž, rozměry i provedení, které vydrží každodenní zátěž vašeho provozu.",
      detail: "Konzultace přímo s jednatelem",
    },
  ];

  return (
    <main id="obsah" className="site-shell">
      <section className="hero" aria-labelledby="hero-title">
        <header className="site-header">
          <a className="wordmark" href="#obsah" aria-label="Buona Ventura – úvod">
            <span className="wordmark-main">Buona Ventura</span>
            <span className="wordmark-sub">bytový textil · Liberec</span>
          </a>

          <nav className="desktop-nav" aria-label="Hlavní navigace">
            <a href="#program">Co dodáváme</a>
            <a href="#zkusenosti">Proč s námi</a>
            <a className="nav-contact" href="tel:+420777075878">+420 777 075 878</a>
          </nav>

          <details className="mobile-menu">
            <summary aria-label="Otevřít nabídku">Nabídka</summary>
            <nav aria-label="Mobilní navigace">
              <a href="#program">Co dodáváme</a>
              <a href="#zkusenosti">Proč s námi</a>
              <a href="tel:+420777075878">Zavolat</a>
            </nav>
          </details>
        </header>

        <div className="hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Velkoobchod a maloobchod bytovým textilem</p>
            <h1 id="hero-title">
              Postel, kterou host pozná <em>poslepu.</em>
            </h1>
            <p className="hero-lead">
              Vybavujeme hotely, penziony, restaurace a instituce textilem, který dobře vypadá a zvládá skutečný provoz. Od výběru materiálu po pravidelné dodávky.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="tel:+420777075878">Probrat vybavení</a>
              <a className="text-link" href="#program">Prohlédnout program <span aria-hidden="true">↓</span></a>
            </div>
            <p className="hero-note">Česká firma z Liberce · na trhu od roku 1993</p>
          </div>

          <div className="hero-visual">
            <div className="fabric-frame">
              <img src="/hero.webp" alt="Detail kvalitního hotelového textilu v přirozených vrstvách" />
            </div>
            <div className="material-ticket" aria-label="Důležité vlastnosti hotelového textilu">
              <span className="ticket-title">Vybráno pro provoz</span>
              <span>příjemný omak</span>
              <span>odolné praní</span>
              <span>stálé rozměry</span>
            </div>
            <span className="selvedge-label" aria-hidden="true">LIBEREC — OD 1993</span>
          </div>
        </div>
      </section>

      <section className="program" id="program" aria-labelledby="program-title">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Textil podle místa, kde bude sloužit</p>
            <h2 id="program-title">Od pokoje po restauraci.</h2>
          </div>
          <p>
            Sestavíme konkrétní výbavu bez zbytečných položek. Hlídáme rozměry, materiál i možnost dalšího doobjednání.
          </p>
        </div>

        <div className="program-layout">
          <figure className="program-image">
            <img src="/section-1.webp" alt="Skladba ložního a koupelnového textilu pro hotelový provoz" />
            <figcaption>
              <span>Hotelový program</span>
              Ložnice · koupelna · restaurace
            </figcaption>
          </figure>

          <div className="service-list">
            {services.map((service) => (
              <article className="service" key={service.title}>
                <p className="service-label">{service.label}</p>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
                <span className="service-detail">{service.detail}</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="trust" id="zkusenosti" aria-labelledby="trust-title">
        <div className="trust-image-wrap">
          <img src="/section-2.webp" alt="Pečlivě připravený bytový textil před expedicí zákazníkovi" />
          <div className="experience-mark">
            <span>zkušenosti od</span>
            <strong>1993</strong>
          </div>
        </div>

        <div className="trust-copy">
          <p className="eyebrow">Stálý dodavatel, ne anonymní katalog</p>
          <h2 id="trust-title">Víme, co se s textilem děje po stém praní.</h2>
          <p className="trust-intro">
            Buona Ventura je ryze česká firma. Z Liberce dodáváme bytový textil zákazníkům po celé České republice i na Slovensko a za každou zakázkou stojí konkrétní člověk.
          </p>

          <dl className="proof-list">
            <div>
              <dt>Výběr bez pokusů</dt>
              <dd>Doporučíme vhodnou gramáž, rozměr a materiál podle typu provozu.</dd>
            </div>
            <div>
              <dt>Dodávky, na které navážete</dt>
              <dd>Pomáháme držet sjednocenou výbavu i při pozdějším doobjednání.</dd>
            </div>
            <div>
              <dt>Člověk na telefonu</dt>
              <dd>Robert Bratršovský, jednatel, řeší objednávky osobně.</dd>
            </div>
          </dl>

          <div className="direct-contact">
            <span>Potřebujete vybrat konkrétní textil?</span>
            <div>
              <a href="tel:+420777075878">Zavolat +420 777 075 878</a>
              <a href="mailto:bratrsovsky@buonaventura.cz">Napsat e-mail</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
