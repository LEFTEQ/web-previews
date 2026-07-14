export default function Page() {
  const categories = [
    {
      title: "Bezpečný pohyb",
      text: "Berle, hole, chodítka a mechanické i elektrické vozíky pro jistější pohyb doma i venku.",
      tag: "chůze · přesun",
    },
    {
      title: "Koupelna bez obav",
      text: "Madla, sedačky do vany a sprchy, nástavce na WC i toaletní křesla pro každodenní soběstačnost.",
      tag: "hygiena · opora",
    },
    {
      title: "Péče a polohování",
      text: "Polohovací lůžka, antidekubitní matrace, zvedáky a přesouvací pomůcky pro domácí i ústavní péči.",
      tag: "lůžka · prevence",
    },
    {
      title: "Ortézy a úleva",
      text: "Bandáže, ortézy, vložky do bot a pomůcky pro rehabilitaci podle toho, kde potřebujete zpevnit nebo odlehčit.",
      tag: "klouby · došlap",
    },
  ];

  return (
    <main className="dma-page" id="top">
      <section className="hero" aria-labelledby="hero-title">
        <header className="site-bar">
          <a className="wordmark" href="#top" aria-label="DMA Olomouc, začátek stránky">
            <span className="wordmark-main"><b>DM</b><i>A</i></span>
            <span className="wordmark-place">Olomouc</span>
          </a>

          <nav className="quick-nav" aria-label="Rychlá navigace">
            <a href="#pomucky">Pomůcky</a>
            <a href="#navsteva">Jak na návštěvu</a>
          </nav>

          <a className="header-phone" href="tel:+420588508560">
            <span>Prodejna</span>
            588 508 560
          </a>
        </header>

        <div className="hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Ortopedické pomůcky · Pekařská 14 · Olomouc</p>
            <h1 id="hero-title">
              Opora pro
              <span>váš vlastní</span>
              pohyb.
            </h1>
            <p className="hero-lead">
              Přijďte si pomůcku prohlédnout, vyzkoušet a probrat osobně. Pomůžeme vám vybrat řešení pro chůzi, hygienu, rehabilitaci i domácí péči.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="tel:+420588508560">Zavolat do prodejny</a>
              <a className="text-link" href="mailto:prodejnaolomouc@dmapraha.cz">Napsat e-mail <span aria-hidden="true">↗</span></a>
            </div>
          </div>

          <figure className="hero-visual">
            <img
              src="/hero.webp"
              alt="Ortopedická pomůcka připravená k osobnímu vyzkoušení v olomoucké prodejně"
            />
            <figcaption>
              <span>Osobní výběr</span>
              <strong>Nejen podle obrázku</strong>
            </figcaption>
            <div className="support-rail" aria-hidden="true">
              <span></span><span></span><span></span>
            </div>
          </figure>
        </div>
      </section>

      <section className="products" id="pomucky" aria-labelledby="products-title">
        <div className="section-heading">
          <p className="eyebrow">Co u nás vyřešíte</p>
          <h2 id="products-title">Od hole po polohovací lůžko.</h2>
          <p>Začněte tím, co potřebujete zvládnout. V prodejně společně najdeme vhodný typ, rozměr i způsob použití.</p>
        </div>

        <div className="products-layout">
          <figure className="section-image product-image">
            <img
              src="/section-1.webp"
              alt="Výběr pomůcek pro bezpečnější chůzi a každodenní soběstačnost"
              loading="lazy"
            />
            <figcaption>Vyzkoušení pomůcky pomůže odhalit rozdíl, který katalog neukáže.</figcaption>
          </figure>

          <div className="category-grid">
            {categories.map((category) => (
              <article className="category-card" key={category.title}>
                <p>{category.tag}</p>
                <h3>{category.title}</h3>
                <span>{category.text}</span>
              </article>
            ))}
          </div>
        </div>

        <div className="service-strip" aria-label="Další možnosti prodejny">
          <span>Poukazy</span>
          <span>Půjčovna</span>
          <span>Repasované pomůcky</span>
          <span>Dárkové poukazy</span>
        </div>
      </section>

      <section className="visit" id="navsteva" aria-labelledby="visit-title">
        <div className="visit-grid">
          <div className="visit-copy">
            <p className="eyebrow">Návštěva bez bloudění</p>
            <h2 id="visit-title">Přineste potřebu. Odnesete si jasno.</h2>
            <p className="visit-intro">Nemusíte předem znát název konkrétní pomůcky. Stačí popsat, co vám nebo vašemu blízkému dělá potíže.</p>

            <ol className="visit-steps">
              <li>
                <span>1</span>
                <div>
                  <h3>Zavolejte před cestou</h3>
                  <p>Ověřte dostupnost pomůcky a aktuální otevírací dobu na čísle <a href="tel:+420588508560">588 508 560</a>.</p>
                </div>
              </li>
              <li>
                <span>2</span>
                <div>
                  <h3>Vezměte poukaz, pokud ho máte</h3>
                  <p>Obsluha s vámi projde možnosti výdeje i případného doplatku.</p>
                </div>
              </li>
              <li>
                <span>3</span>
                <div>
                  <h3>Pomůcku si vyzkoušejte</h3>
                  <p>Správná výška, úchop a stabilita rozhodují o tom, zda vám bude dobře sloužit.</p>
                </div>
              </li>
            </ol>
          </div>

          <div className="visit-aside">
            <figure className="section-image visit-image">
              <img
                src="/section-2.webp"
                alt="Osobní konzultace při výběru ortopedické pomůcky v prodejně DMA Olomouc"
                loading="lazy"
              />
            </figure>

            <address className="store-card">
              <p>Prodejna Olomouc</p>
              <strong>Pekařská 617/14<br />779 00 Olomouc</strong>
              <a href="tel:+420588508560">588 508 560</a>
              <a href="mailto:prodejnaolomouc@dmapraha.cz">prodejnaolomouc@dmapraha.cz</a>
            </address>
          </div>
        </div>
      </section>
    </main>
  );
}
