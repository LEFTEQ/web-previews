export default function HomePage() {
  const products = [
    {
      name: "Běžné betony",
      description: "Pro základy, stropy, věnce i další nosné konstrukce rodinných a bytových staveb.",
      tag: "Stavba",
    },
    {
      name: "ZAPA QCC",
      description: "Vysoce tekutý beton pro rychlejší ukládku s menšími nároky na vibraci a počet pracovníků.",
      tag: "Rychlá ukládka",
    },
    {
      name: "ZAPA NEXT",
      description: "Beton s využitím druhotných surovin, který šetří primární přírodní zdroje.",
      tag: "Nižší stopa",
    },
  ];

  return (
    <main>
      <section className="hero" aria-labelledby="hero-title">
        <img
          className="hero__image"
          src="/hero.webp"
          alt="Betonárna ZAPA beton se zásobníky kameniva a výrobní technologií"
          width="1920"
          height="1280"
          fetchPriority="high"
        />
        <div className="hero__shade" aria-hidden="true" />

        <header className="site-header">
          <a className="wordmark" href="#zacatek" aria-label="ZAPA beton Pardubice – úvod">
            <span className="wordmark__main">ZAPA</span>
            <span className="wordmark__sub">beton</span>
          </a>

          <nav className="desktop-nav" aria-label="Hlavní navigace">
            <a href="#beton">Beton pro stavbu</a>
            <a href="#dodavka">Dodávka v Pardubicích</a>
          </nav>

          <a className="header-action" href="#dodavka">Najít betonárnu</a>
        </header>

        <div className="hero__content" id="zacatek">
          <p className="eyebrow">Betonárna Pardubice · výroba, doprava, čerpání</p>
          <h1 id="hero-title">
            Beton, který dorazí
            <span>ve správné chvíli.</span>
          </h1>
          <p className="hero__intro">
            Vybereme směs podle konstrukce, spočítáme potřebné množství a sladíme příjezd autodomíchávače s postupem vaší stavby.
          </p>
          <div className="hero__actions">
            <a className="button button--primary" href="#beton">Vybrat beton</a>
            <a className="button button--quiet" href="#dodavka">Jak probíhá dodávka</a>
          </div>
        </div>

        <div className="pour-mark" aria-hidden="true">
          <span>Čerstvá směs</span>
        </div>
      </section>

      <section className="products" id="beton" aria-labelledby="products-title">
        <div className="section-heading">
          <p className="eyebrow eyebrow--dark">Směs podle konstrukce</p>
          <h2 id="products-title">Neobjednáváte „nějaký beton“.</h2>
          <p>
            Řeknete nám, co betonujete a v jakých podmínkách. Doporučíme vhodnou konzistenci, pevnost i způsob dopravy na stavbu.
          </p>
        </div>

        <div className="products__layout">
          <figure className="material-photo">
            <img
              src="/section-1.webp"
              alt="Detail čerstvé betonové směsi připravené k ukládce"
              width="1400"
              height="1050"
              loading="lazy"
            />
            <figcaption>
              <span>Směs pod kontrolou</span>
              Konzistence a receptura odpovídají místu použití.
            </figcaption>
          </figure>

          <div className="product-list">
            {products.map((product) => (
              <article className="product" key={product.name}>
                <div>
                  <span className="product__tag">{product.tag}</span>
                  <h3>{product.name}</h3>
                </div>
                <p>{product.description}</p>
              </article>
            ))}
            <a className="text-link" href="#dodavka">Připravit poptávku <span aria-hidden="true">↗</span></a>
          </div>
        </div>
      </section>

      <section className="delivery" id="dodavka" aria-labelledby="delivery-title">
        <div className="delivery__visual">
          <img
            src="/section-2.webp"
            alt="Autodomíchávač ZAPA beton při dodávce čerstvého betonu na stavbu"
            width="1600"
            height="1200"
            loading="lazy"
          />
          <div className="delivery__stamp" aria-label="Pardubice a okolí">
            <span>Pardubice</span>
            <strong>a okolí</strong>
          </div>
        </div>

        <div className="delivery__content">
          <p className="eyebrow">Od betonárny až do konstrukce</p>
          <h2 id="delivery-title">Dodávka drží rytmus s vaší stavbou.</h2>
          <p className="delivery__lead">
            Beton vyrábíme pro konkrétní objednávku. Proto předem řešíme příjezd, návaznost jednotlivých aut i to, zda je na místě potřeba čerpadlo.
          </p>

          <dl className="facts">
            <div>
              <dt>Před objednáním</dt>
              <dd>Připravte typ konstrukce, přibližný objem, adresu stavby a požadovaný termín.</dd>
            </div>
            <div>
              <dt>Na místě</dt>
              <dd>Zajistěte bezpečný příjezd, prostor pro autodomíchávač a připravené bednění.</dd>
            </div>
            <div>
              <dt>Při ukládce</dt>
              <dd>Domluvíme dopravu i čerpání tak, aby čerstvá směs nezůstávala zbytečně stát.</dd>
            </div>
          </dl>

          <a className="button button--light" href="#beton">Vybrat řešení pro stavbu</a>
        </div>
      </section>
    </main>
  );
}
