export default function Page() {
  const categories = [
    { name: "Ložnice", detail: "postele, matrace a noční stolky" },
    { name: "Obývací pokoje", detail: "sedací soupravy a úložný nábytek" },
    { name: "Kuchyně a jídelny", detail: "stoly, židle a sestavy" },
    { name: "Předsíně", detail: "skříně, botníky a věšáky" },
    { name: "Dětské pokoje", detail: "bezpečný nábytek, který roste s dětmi" },
  ];

  return (
    <main className="furniture-page">
      <section className="hero" aria-labelledby="hero-title">
        <header className="site-header">
          <a className="wordmark" href="#top" aria-label="Svět českého nábytku – úvod">
            <span>svět</span>
            <strong>českého nábytku</strong>
          </a>

          <nav className="main-nav" aria-label="Hlavní navigace">
            <a href="#nabidka">Nábytek</a>
            <a href="#pece">Jak nakupujete</a>
            <a className="nav-phone" href="tel:+420603468774">603 468 774</a>
          </nav>
        </header>

        <div className="hero-layout" id="top">
          <div className="hero-copy">
            <p className="eyebrow">Rodinný obchod · České Budějovice</p>
            <h1 id="hero-title">
              Český nábytek,
              <span>který má kde bydlet.</span>
            </h1>
            <p className="hero-intro">
              Vybíráme nábytek pro skutečné české domácnosti — od zdravotních matrací
              Magniflex po sedací soupravy a výrobu přesně podle prostoru.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#nabidka">Prohlédnout nabídku</a>
              <a className="button button-secondary" href="tel:+420603468774">Zavolat pro radu</a>
            </div>
            <p className="showroom-note">
              <span>Prodejna</span>
              Krčínova 1610, vedle Koberců Breno
            </p>
          </div>

          <div className="hero-visual">
            <div className="hero-photo-frame">
              <img
                className="hero-photo"
                src="/hero.webp"
                alt="Český nábytek v současně zařízeném interiéru"
                width="1200"
                height="980"
                fetchPriority="high"
                decoding="async"
              />
            </div>
            <div className="material-card material-card-top" aria-hidden="true">
              <span>buk</span>
              <i />
              <span>dub</span>
            </div>
            <div className="hero-stamp">
              <strong>České</strong>
              <span>značky i výroba na míru</span>
            </div>
          </div>
        </div>
      </section>

      <section className="offer-section" id="nabidka" aria-labelledby="offer-title">
        <div className="section-heading">
          <p className="eyebrow">Nábytek podle místnosti</p>
          <h2 id="offer-title">Zařiďte domov jako celek. Nebo začněte jedním dobrým kusem.</h2>
        </div>

        <div className="offer-grid">
          <div className="category-list">
            {categories.map((category) => (
              <a className="category-row" href="tel:+420603468774" key={category.name}>
                <span>
                  <strong>{category.name}</strong>
                  <small>{category.detail}</small>
                </span>
                <span className="row-action" aria-hidden="true">zeptat se ↗</span>
              </a>
            ))}
          </div>

          <figure className="offer-image-wrap">
            <img
              src="/section-1.webp"
              alt="Detail českého nábytku z masivního dřeva"
              width="960"
              height="1100"
              loading="lazy"
              decoding="async"
            />
            <figcaption>
              <strong>Když katalog nestačí</strong>
              Sedací soupravy, vestavby i další nábytek upravíme podle rozměrů vašeho interiéru.
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="care-section" id="pece" aria-labelledby="care-title">
        <div className="care-image-wrap">
          <img
            src="/section-2.webp"
            alt="Pečlivě zpracovaný detail čalouněného českého nábytku"
            width="1000"
            height="900"
            loading="lazy"
            decoding="async"
          />
          <span className="image-label">Osobně v Budějovicích</span>
        </div>

        <div className="care-copy">
          <p className="eyebrow">Rodinná firma, ne anonymní sklad</p>
          <h2 id="care-title">Nábytek není balík. Musí vám sedět roky.</h2>
          <p className="care-lead">
            Poradíme s rozměrem, materiálem i tvrdostí matrace. Po objednání víte, co se děje,
            a když vybíráte na dálku, dovoláte se lidem, kteří sortiment opravdu znají.
          </p>

          <dl className="trust-list">
            <div>
              <dt>14 dní</dt>
              <dd>na vrácení zboží, které vám nevyhovuje</dd>
            </div>
            <div>
              <dt>od 8 000 Kč</dt>
              <dd>doprava zdarma podle podmínek obchodu</dd>
            </div>
            <div>
              <dt>Průběžně</dt>
              <dd>vás informujeme o stavu objednávky</dd>
            </div>
          </dl>

          <div className="specialist-note">
            <span className="note-mark" aria-hidden="true">M</span>
            <p>
              <strong>Potřebujete ověřit rozměr nebo dostupnost?</strong>
              Napište na <a href="mailto:info@svetceskehonabytku.cz">info@svetceskehonabytku.cz</a>.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
