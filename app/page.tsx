const sortiment = [
  { material: "Zdivo", detail: "Vnitřní i obvodové systémy" },
  { material: "Izolace", detail: "Tepelná i hydroizolace" },
  { material: "Fasády", detail: "Omítky, lepidla a zateplení" },
  { material: "Střechy", detail: "Krytiny, fólie a konstrukce" },
  { material: "Beton", detail: "Směsi, výrobky, roxory a kari sítě" },
  { material: "Interiér", detail: "Sádrokarton, dveře a zárubně" },
];

export default function Home() {
  return (
    <main>
      <section className="hero" aria-labelledby="hero-title">
        <img
          className="hero__image"
          src="/hero.webp"
          alt="Stavební materiál připravený k odběru v areálu stavebnin Inten Market"
        />
        <div className="hero__shade" aria-hidden="true" />

        <header className="site-head">
          <a className="wordmark" href="#top" aria-label="Inten Market – úvodní stránka">
            <span className="wordmark__inten">INTEN</span>
            <span className="wordmark__market">MARKET</span>
            <span className="wordmark__trade">stavebniny</span>
          </a>
          <a className="head-phone" href="tel:+420546410195">
            <span>Prodejna</span>
            546 410 195
          </a>
        </header>

        <div className="hero__content" id="top">
          <p className="eyebrow">Stavebniny pro Brno a Rosice</p>
          <h1 id="hero-title">
            Materiál,<br />
            který <span>sedí.</span>
          </h1>
          <p className="hero__lead">
            Přineste projekt. Spočítáme potřebné množství, připravíme cenovou nabídku
            a dovezeme materiál na stavbu — až 24 tun včetně skládání.
          </p>
          <div className="hero__actions">
            <a className="button button--primary" href="tel:+420546410195">Zavolat do prodejny</a>
            <a className="button button--quiet" href="#sortiment">Projít sortiment</a>
          </div>
        </div>

        <div className="material-stack" aria-label="Od projektu po dopravu">
          <span>projekt</span>
          <span>výpočet</span>
          <span>materiál</span>
          <span>doprava 24 t</span>
        </div>
      </section>

      <section className="assortment" id="sortiment" aria-labelledby="sortiment-title">
        <div className="section-intro">
          <p className="eyebrow eyebrow--dark">Co u nás naložíte</p>
          <h2 id="sortiment-title">Stavba od základů po střechu</h2>
          <p>
            Nemusíte objíždět několik skladů. V Rosicích vyberete hrubou stavbu,
            izolace, fasádu i dokončovací materiál na jednom místě.
          </p>
        </div>

        <div className="assortment__layout">
          <figure className="material-photo">
            <img
              src="/section-1.webp"
              alt="Palety zdiva a stavebních směsí v nabídce Inten Market"
              loading="lazy"
              width="900"
              height="1080"
            />
            <figcaption>Skladem i na objednávku</figcaption>
          </figure>

          <div className="material-list">
            {sortiment.map((item) => (
              <article className="material-row" key={item.material}>
                <h3>{item.material}</h3>
                <p>{item.detail}</p>
              </article>
            ))}
            <p className="material-list__more">
              Dále kanalizace, komínové systémy, stropní konstrukce, stavební chemie,
              železářství, okna, nářadí a další materiál.
            </p>
          </div>
        </div>
      </section>

      <section className="service" aria-labelledby="service-title">
        <div className="service__image-wrap">
          <img
            src="/section-2.webp"
            alt="Nakládání stavebního materiálu pro rozvoz na stavbu v okolí Brna"
            loading="lazy"
            width="1200"
            height="900"
          />
          <div className="load-mark" aria-hidden="true">
            <strong>24 t</strong>
            <span>včetně skládání</span>
          </div>
        </div>

        <div className="service__content">
          <p className="eyebrow">Méně odhadů, méně jízd</p>
          <h2 id="service-title">Spočítáme. Naložíme. Dovezeme.</h2>
          <p className="service__lead">
            Z projektové dokumentace připravíme výpočet materiálu a konkrétní cenovou
            nabídku. Domluvenou objednávku přivezeme na stavbu a podle potřeby odvezeme odpad.
          </p>

          <div className="service__facts">
            <div>
              <span className="fact__label">Osobní odběr</span>
              <strong>Zastávecká 1030, Rosice</strong>
              <small>pohodlně z Brna i okolí</small>
            </div>
            <div>
              <span className="fact__label">Duben–říjen</span>
              <strong>Po–Pá 7:00–16:30</strong>
              <small>sobota 7:00–11:30</small>
            </div>
            <div>
              <span className="fact__label">Listopad–březen</span>
              <strong>Po–Pá 7:00–16:00</strong>
              <small>sobota 7:00–11:00</small>
            </div>
          </div>

          <a className="text-link" href="mailto:info@intenmarket.cz">
            Napsat pro cenovou nabídku <span aria-hidden="true">→</span>
          </a>
        </div>
      </section>
    </main>
  );
}
