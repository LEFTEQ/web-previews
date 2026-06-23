export default function Page() {
  const services = [
    "kuchyně přesně do niky",
    "vestavěné skříně bez hluchých míst",
    "koupelnový a obývací nábytek",
    "postele, stoly a atypické prvky",
  ];

  return (
    <main className="site-shell">
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero__grain" aria-hidden="true" />
        <div className="hero__inner">
          <header className="topbar" aria-label="Záhlaví návrhu">
            <a className="wordmark" href="#kontakt" aria-label="SAS dílna - návrh značky">
              <span className="wordmark__sas">SAS</span>
              <span className="wordmark__line" />
              <span className="wordmark__sub">dílna na míru</span>
            </a>
            <a className="topbar__cta" href="mailto:pavel@sasnabytek.cz">
              Odeslat poptávku
            </a>
          </header>

          <div className="hero__content">
            <p className="eyebrow">Stolařství Brno / Ing. Pavel Sedláček</p>
            <h1 id="hero-title">Nábytek, který sedí na milimetr k vašemu prostoru.</h1>
            <p className="hero__lead">
              Potřebujete kuchyň, skříň nebo celý interiér bez kompromisů v rozměrech? Dostanete návrh, 3D představu, výrobu i montáž od jedné brněnské rodinné firmy.
            </p>
            <div className="hero__actions" aria-label="Hlavní akce">
              <a className="button button--primary" href="tel:+4208301133973">Zavolat do dílny</a>
              <a className="button button--secondary" href="#sluzby">Co umíme vyrobit</a>
            </div>
          </div>

          <aside className="fit-card" aria-label="Shrnutí přístupu">
            <span className="fit-card__label">Postup</span>
            <strong>zaměřit / navrhnout / vyrobit / usadit</strong>
            <p>Od první konzultace po návazné řemeslníky: podlahy, malby, stínění, elektro i voda.</p>
          </aside>
        </div>
      </section>

      <section className="work" id="sluzby" aria-labelledby="work-title">
        <div className="work__inner">
          <div className="section-kicker">26 let zkušeností</div>
          <h2 id="work-title">Místnost se změří jednou. Výsledek má sloužit roky.</h2>
          <p className="work__intro">
            Nevybíráte hotovou skříň z katalogu. Řešíte konkrétní stěnu, roh, zásuvku, rozpočet a materiál. Proto je návrh vedený prakticky: aby se nábytek dobře používal, vypadal čistě a šel bez chaosu namontovat.
          </p>

          <div className="service-grid" aria-label="Typy zakázek">
            {services.map((service, index) => (
              <article className="service-card" key={service}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{service}</h3>
              </article>
            ))}
          </div>

          <div className="proof-strip" aria-label="Důvody ke spolupráci">
            <p><strong>3D vizualizace</strong> pomůže ověřit proporce před výrobou.</p>
            <p><strong>Komplexní realizace</strong> hlídá návaznost dalších profesí.</p>
            <p><strong>Individuální rozměry</strong> využijí prostor tam, kde sériový nábytek končí.</p>
          </div>
        </div>
      </section>

      <footer className="footer" id="kontakt">
        <div className="footer__inner">
          <div>
            <p className="footer__title">SAS dílna na míru</p>
            <p>Lány 612/25, 625 00 Brno</p>
          </div>
          <address>
            <a href="tel:+4208301133973">830 113 3973</a>
            <a href="mailto:pavel@sasnabytek.cz">pavel@sasnabytek.cz</a>
          </address>
          <p className="footer__note">Nezávazný návrh od studia lovinka. Nejde o oficiální web firmy.</p>
        </div>
      </footer>
    </main>
  );
}
