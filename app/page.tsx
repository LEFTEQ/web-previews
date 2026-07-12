export default function HomePage() {
  return (
    <main>
      <section className="hero" aria-labelledby="hero-title">
        <header className="site-header">
          <a className="wordmark" href="#top" aria-label="Dì Design – úvod">
            <span>Dì</span>
            <small>design</small>
          </a>

          <nav className="main-nav" aria-label="Hlavní navigace">
            <a href="#kolekce">Kolekce</a>
            <a href="#atelier">Ateliér</a>
          </nav>

          <a className="bag-link" href="#kolekce" aria-label="Přejít k nabídce">
            Vybrat model
            <span aria-hidden="true">↗</span>
          </a>
        </header>

        <div className="hero-image-wrap" id="top">
          <img
            className="hero-image"
            src="/hero.webp"
            alt="Dámská obuv Dì Design v elegantním módním stylingu"
          />
          <div className="pattern-line" aria-hidden="true">
            <svg viewBox="0 0 760 520" preserveAspectRatio="none">
              <path d="M38 480C118 421 88 313 183 276C261 245 302 312 390 254C470 201 447 89 548 54C626 27 688 63 729 21" />
            </svg>
          </div>
          <p className="image-note">Navrženo v Hradci Králové</p>
        </div>

        <div className="hero-copy">
          <p className="eyebrow">Česká dámská obuv · kabelky · styling</p>
          <h1 id="hero-title">
            Styl začíná
            <em>dobrým krokem.</em>
          </h1>
          <div className="hero-bottom">
            <p>
              Kolekce Jany Dapecí spojují výrazný ženský detail s pohodlím,
              které oceníte od rána do večera.
            </p>
            <a className="primary-link" href="#kolekce">
              Prohlédnout novinky
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </section>

      <section className="collections" id="kolekce" aria-labelledby="collections-title">
        <div className="section-heading">
          <p className="eyebrow">Co si můžete vybrat</p>
          <h2 id="collections-title">Jeden šatník. Promyšlený od bot po kabelku.</h2>
        </div>

        <div className="collection-layout">
          <figure className="collection-photo">
            <img
              src="/section-1.webp"
              alt="Detail dámské obuvi a módních doplňků z kolekce Dì Design"
            />
            <figcaption>Aktuální výběr · léto 2026</figcaption>
          </figure>

          <div className="category-list">
            <a href="#atelier" className="category-row">
              <span className="category-name">Dámská obuv</span>
              <span className="category-detail">Lodičky, mokasíny, sandály a kotníkové boty</span>
              <span className="category-arrow" aria-hidden="true">↗</span>
            </a>
            <a href="#atelier" className="category-row">
              <span className="category-name">Kabelky</span>
              <span className="category-detail">Crossbody, shopper i společenské modely</span>
              <span className="category-arrow" aria-hidden="true">↗</span>
            </a>
            <a href="#atelier" className="category-row">
              <span className="category-name">Oblečení</span>
              <span className="category-detail">Pohodlné vrstvy pro práci, město i volný den</span>
              <span className="category-arrow" aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </section>

      <section className="atelier" id="atelier" aria-labelledby="atelier-title">
        <div className="atelier-copy">
          <p className="eyebrow">Osobní styling v Hradci Králové</p>
          <h2 id="atelier-title">Nejen správná velikost. Správný pocit.</h2>
          <p className="atelier-lead">
            Jana Dapecí vám pomůže sladit obuv, kabelku i oblečení podle vaší
            postavy, šatníku a toho, kde se chcete cítit sama sebou.
          </p>

          <dl className="trust-list">
            <div>
              <dt>Osobně</dt>
              <dd>Zkoušení a styling v Hradci Králové</dd>
            </div>
            <div>
              <dt>Česky</dt>
              <dd>Vlastní značka a autorský výběr Jany Dapecí</dd>
            </div>
            <div>
              <dt>Prakticky</dt>
              <dd>Modely vybrané pro pohodlí i každodenní kombinování</dd>
            </div>
          </dl>

          <a className="contact-link" href="tel:+420734750740">
            Zavolat stylistce · 734 750 740
            <span aria-hidden="true">→</span>
          </a>
        </div>

        <figure className="atelier-photo">
          <img
            src="/section-2.webp"
            alt="Osobní výběr dámské módy v ateliéru Dì Design v Hradci Králové"
          />
          <figcaption>
            <span>Jana Dapecí</span>
            návrhářka a osobní stylistka
          </figcaption>
        </figure>
      </section>
    </main>
  );
}
