const vehicles = [
  {
    brand: "Škoda",
    model: "SCALA",
    version: "Selection 1,0 TSI · 116 k",
    specs: "Benzín · manuální · přední pohon",
    price: "4 962 Kč",
    image: "/section-1.webp",
    alt: "Škoda Scala z nabídky RT TORAX Group v Ostravě",
  },
  {
    brand: "Škoda",
    model: "KODIAQ II",
    version: "Selection 2,0 TDI · 193 k DSG",
    specs: "Nafta · automatická · pohon 4×4",
    price: "10 072 Kč",
    image: "/section-2.webp",
    alt: "Škoda Kodiaq z nabídky RT TORAX Group v Ostravě",
  },
];

export default function HomePage() {
  return (
    <main>
      <section className="hero" aria-labelledby="hero-title">
        <header className="site-header">
          <a className="wordmark" href="#top" aria-label="RT TORAX Group – úvod">
            <span className="wordmark-rt">RT</span>
            <span className="wordmark-name">TORAX</span>
            <span className="wordmark-group">GROUP</span>
          </a>

          <nav className="site-nav" aria-label="Hlavní navigace">
            <a href="#vozy">Vozy skladem</a>
            <a href="#partner">Servis a péče</a>
          </nav>

          <a className="header-phone" href="tel:+420595781133">
            <span>Zavolat do Ostravy</span>
            595 781 133
          </a>
        </header>

        <div className="hero-media" id="top">
          <img
            src="/hero.webp"
            alt="Vůz v nabídce ostravského autobazaru RT TORAX Group"
          />
          <div className="hero-shade" aria-hidden="true" />
        </div>

        <div className="hero-content">
          <p className="eyebrow">Vozy, leasing a autorizovaný servis · Ostrava</p>
          <h1 id="hero-title">
            Sedne vám.
            <span>A rozpočtu taky.</span>
          </h1>
          <p className="hero-copy">
            Vyberte si nový nebo prověřený vůz skladem. Ukážeme vám jasnou
            měsíční splátku, zařídíme financování a o auto se postaráme i po
            předání klíčů.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#vozy">
              Prohlédnout vozy
              <span aria-hidden="true">↘</span>
            </a>
            <a className="text-link" href="mailto:info@rt-torax.cz">
              Napsat pro vlastní kalkulaci
            </a>
          </div>
        </div>

        <aside className="windshield-card" aria-label="Aktuální nabídka vozu">
          <div className="card-topline">
            <span>Skladem v Ostravě</span>
            <span className="status-dot" aria-hidden="true" />
          </div>
          <p className="card-model">Škoda SCALA</p>
          <p className="card-version">Selection 1,0 TSI · 116 k</p>
          <div className="card-price">
            <span>od</span>
            <strong>4 962 Kč</strong>
            <span>/ měsíc bez DPH</span>
          </div>
          <p className="card-note">Včetně pojištění · nájezd 25 000 km/rok</p>
        </aside>

        <div className="lane-mark" aria-hidden="true" />
      </section>

      <section className="inventory section-shell" id="vozy" aria-labelledby="inventory-title">
        <div className="section-heading">
          <div>
            <p className="eyebrow blue">Aktuálně vybráno z nabídky</p>
            <h2 id="inventory-title">Nejdřív vůz. Potom čísla.</h2>
          </div>
          <p>
            U každého auta vidíte to podstatné bez schovávání za formulář.
            Konkrétní výbavu a splátku vám dopočítáme podle akontace a nájezdu.
          </p>
        </div>

        <div className="vehicle-grid">
          {vehicles.map((vehicle) => (
            <article className="vehicle-card" key={vehicle.model}>
              <div className="vehicle-image">
                <img src={vehicle.image} alt={vehicle.alt} loading="lazy" />
                <span>Skladem</span>
              </div>
              <div className="vehicle-info">
                <p className="vehicle-brand">{vehicle.brand}</p>
                <h3>{vehicle.model}</h3>
                <p className="vehicle-version">{vehicle.version}</p>
                <p className="vehicle-specs">{vehicle.specs}</p>
                <div className="vehicle-price">
                  <p>
                    <strong>{vehicle.price}</strong>
                    <span>/ měsíc bez DPH</span>
                  </p>
                  <a href="mailto:info@rt-torax.cz?subject=Kalkulace%20vozu%20RT%20TORAX">
                    Chci kalkulaci
                    <span aria-hidden="true">→</span>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="offer-strip" aria-label="Další možnosti nabídky">
          <span>Nové vozy</span>
          <span>Zánovní vozy</span>
          <span>Operativní leasing</span>
          <span>Autoúvěr</span>
        </div>
      </section>

      <section className="partner section-shell" id="partner" aria-labelledby="partner-title">
        <div className="partner-intro">
          <p className="eyebrow yellow">Jeden partner po celou dobu</p>
          <h2 id="partner-title">Prodejem to u nás nekončí.</h2>
          <p className="partner-lead">
            V moravskoslezském regionu zajišťujeme nákup, financování i
            autorizovaný servis osobních a užitkových vozů. Když se něco stane,
            voláte pořád na jedno místo v Ostravě.
          </p>
        </div>

        <div className="service-board">
          <article>
            <span className="service-mark" aria-hidden="true">✓</span>
            <div>
              <h3>Prověřený výběr</h3>
              <p>
                Pomůžeme porovnat nový, zánovní i starší vůz podle skutečného
                provozu — ne jen podle ceny v inzerátu.
              </p>
            </div>
          </article>
          <article>
            <span className="service-mark" aria-hidden="true">✓</span>
            <div>
              <h3>Financování bez mlhy</h3>
              <p>
                Autoúvěr, klasický i progresivní operativní leasing vysvětlíme
                na konkrétních částkách a kilometrech.
              </p>
            </div>
          </article>
          <article>
            <span className="service-mark" aria-hidden="true">✓</span>
            <div>
              <h3>Autorizovaný servis</h3>
              <p>
                Zajistíme pravidelnou péči, náhradní vůz i vyřízení pojistné
                události přímo v našem ostravském zázemí.
              </p>
            </div>
          </article>
        </div>

        <div className="location-panel">
          <div>
            <span className="location-label">Najdete nás</span>
            <strong>Rudná 2378/100</strong>
            <span>Ostrava–Zábřeh</span>
          </div>
          <div className="location-contact">
            <a href="tel:+420595781133">595 781 133</a>
            <a href="mailto:info@rt-torax.cz">info@rt-torax.cz</a>
          </div>
        </div>
      </section>
    </main>
  );
}
