export default function Page() {
  const categories = [
    {
      title: "Papír a kartony",
      text: "Xerografický papír, barevné kartony od A3 po B1, grafické papíry, etikety a lepenky.",
      tag: "80–300 g/m²",
    },
    {
      title: "Kancelář a archivace",
      text: "Pořadače, obálky, psací potřeby, flipcharty, laminátory, vazače i skartovačky.",
      tag: "Pro denní provoz",
    },
    {
      title: "Balení, gastro a úklid",
      text: "Krabice, výplně, fólie, hygienické potřeby, gastro program a drogerie na jednom místě.",
      tag: "Pro firmy i provozy",
    },
  ];

  return (
    <main>
      <section className="hero" aria-labelledby="hero-title">
        <header className="site-header">
          <a className="brand" href="#nahoru" aria-label="Praktik Papír – začátek stránky">
            <span className="brand__sheets" aria-hidden="true">
              <i />
              <i />
              <i />
            </span>
            <span className="brand__name">PRAKTIK PAPÍR</span>
            <span className="brand__place">OSTRAVA</span>
          </a>

          <nav className="nav" aria-label="Hlavní navigace">
            <a href="#sortiment">Sortiment</a>
            <a href="#prodejna">Prodejna</a>
            <a className="nav__phone" href="tel:+420725318555">725 318 555</a>
          </nav>
        </header>

        <div className="hero__copy" id="nahoru">
          <p className="eyebrow">Papírnictví a velkoobchod · Poděbradova 99A</p>
          <h1 id="hero-title">
            Papír, který drží
            <span> Ostravu v chodu.</span>
          </h1>
          <p className="hero__lead">
            Od jedné skicovací čtvrtky po zásobu pro celou kancelář. Vyberte si z papírů,
            obalů, kancelářských potřeb i techniky — 95 % sortimentu máme skladem.
          </p>
          <div className="hero__actions">
            <a className="button button--light" href="#sortiment">
              Vybrat z nabídky
              <span aria-hidden="true">↓</span>
            </a>
            <a className="text-link text-link--light" href="tel:+420725318555">
              Zavolat do prodejny
            </a>
          </div>
        </div>

        <div className="hero__visual" aria-hidden="true">
          <img
            src="/hero.webp"
            alt=""
            width="1200"
            height="1500"
            fetchPriority="high"
          />
          <div className="hero__image-wash" />
        </div>

        <div className="paper-index" aria-label="Ukázka formátů a gramáží v nabídce">
          <span className="paper-index__label">Formát / gramáž</span>
          <div className="paper-index__tab paper-index__tab--one">
            <b>A4</b><small>80 g</small>
          </div>
          <div className="paper-index__tab paper-index__tab--two">
            <b>A3</b><small>160 g</small>
          </div>
          <div className="paper-index__tab paper-index__tab--three">
            <b>B1</b><small>300 g</small>
          </div>
        </div>
      </section>

      <section className="assortment" id="sortiment" aria-labelledby="sortiment-title">
        <div className="section-heading">
          <p className="eyebrow eyebrow--ink">Co u nás vyřídíte</p>
          <h2 id="sortiment-title">Jedna zastávka pro kancelář, dílnu i školu.</h2>
          <p>
            Nemusíte skládat objednávku u pěti dodavatelů. Vybavíme běžný provoz i méně
            obvyklý požadavek na formát, povrch nebo gramáž papíru.
          </p>
        </div>

        <div className="assortment__layout">
          <div className="assortment__image image-frame">
            <img
              src="/section-1.webp"
              alt="Výběr papírů, kartonů a kancelářských potřeb v ostravské prodejně Praktik Papír"
              width="1100"
              height="900"
              loading="lazy"
            />
            <span className="image-note">Řežeme papír na míru · Po–Pá 7:00–15:30</span>
          </div>

          <div className="category-list">
            {categories.map((category) => (
              <article className="category" key={category.title}>
                <div>
                  <h3>{category.title}</h3>
                  <p>{category.text}</p>
                </div>
                <span>{category.tag}</span>
              </article>
            ))}
            <a className="button button--ink" href="mailto:objednavky@praktikpapir.cz">
              Napsat objednávku
              <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </section>

      <section className="store" id="prodejna" aria-labelledby="prodejna-title">
        <div className="store__image image-frame image-frame--blue">
          <img
            src="/section-2.webp"
            alt="Prodejna a sklad Praktik Papír na Poděbradově ulici v Ostravě"
            width="1100"
            height="1050"
            loading="lazy"
          />
          <span className="store__badge">Přes 20 let s vámi</span>
        </div>

        <div className="store__content">
          <p className="eyebrow eyebrow--ink">Osobně v centru Ostravy</p>
          <h2 id="prodejna-title">Přijďte s názvem produktu. Nebo jen s představou.</h2>
          <p className="store__intro">
            V prodejně vám pomůžeme vybrat správný papír, rozměr lepenky i vybavení pro
            pravidelný firemní odběr. Zboží ze skladu připravíme, ať neztrácíte čas.
          </p>

          <dl className="facts">
            <div>
              <dt>Adresa</dt>
              <dd>Poděbradova 99A<br />702 00 Ostrava</dd>
            </div>
            <div>
              <dt>Otevřeno</dt>
              <dd>Po–Pá 7:00–18:00<br />So 8:00–12:30</dd>
            </div>
            <div>
              <dt>Objednávky</dt>
              <dd>
                <a href="tel:+420725318555">+420 725 318 555</a><br />
                <a href="mailto:objednavky@praktikpapir.cz">objednavky@praktikpapir.cz</a>
              </dd>
            </div>
          </dl>

          <div className="stock-note">
            <span className="stock-note__mark" aria-hidden="true">✓</span>
            <p><strong>95 % zboží držíme skladem.</strong> Běžný nákup si odnesete rovnou.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
