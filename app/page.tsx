const categories = [
  {
    name: "Nitě a příze",
    detail: "Podle materiálu i výrobce",
    count: "734 položek",
  },
  {
    name: "Zipy a jezdce",
    detail: "Zdrhovadla, pásy, běžce i koncovky",
    count: "509 položek",
  },
  {
    name: "Jehly, háčky a jehlice",
    detail: "Pro ruční práci, dílny i stroje",
    count: "877 položek",
  },
  {
    name: "Knoflíky, druky a nýty",
    detail: "Kovové, plastové i potahovací",
    count: "459 položek",
  },
  {
    name: "Stuhy, krajky a lemovky",
    detail: "Pro oděvní výrobu, dekoraci i balení",
    count: "399 položek",
  },
  {
    name: "Krejčovské potřeby",
    detail: "Nůžky, křídy, výztuhy a příprava",
    count: "310+ položek",
  },
];

const reasons = [
  "Česká a evropská galanterie pro pravidelné zásobování",
  "Velkoobchodní balení pro prodejny, dílny a výrobce",
  "Široký sortiment od základní nitě po technické stuhy",
];

export default function Page() {
  return (
    <main>
      <header className="site-header" aria-label="Hlavní navigace">
        <a className="wordmark" href="#nahoru" aria-label="VTC Galanterie – úvod">
          <span className="wordmark-main">VTC</span>
          <span className="wordmark-detail">galanterie · Olomouc</span>
        </a>

        <nav className="nav-links" aria-label="Navigace na stránce">
          <a href="#sortiment">Sortiment</a>
          <a href="#spoluprace">Pro velkoobchod</a>
        </nav>

        <a className="header-action" href="#sortiment">
          Vybrat zboží
          <span aria-hidden="true">↘</span>
        </a>
      </header>

      <section className="hero" id="nahoru" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="eyebrow">Velkoobchod textilní galanterie · Olomouc</p>
          <h1 id="hero-title">
            Všechno, co drží
            <span className="stitched-word"> látku pohromadě.</span>
          </h1>
          <p className="hero-lead">
            Nitě, zipy, knoflíky, pruženky i krejčovské potřeby pro prodejny,
            dílny a oděvní výrobce. Na jednom místě, ve velkoobchodním množství.
          </p>
          <div className="hero-actions">
            <a className="primary-button" href="#sortiment">
              Prohlédnout sortiment
              <span aria-hidden="true">→</span>
            </a>
            <p>
              <strong>50+ kategorií</strong>
              <span>českého a evropského zboží</span>
            </p>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-image-wrap">
            <img
              src="/hero.webp"
              alt="Barevné nitě, zipy a další textilní galanterie z nabídky VTC"
              width="960"
              height="1120"
            />
          </div>
          <div className="zipper" aria-hidden="true">
            <span className="zipper-pull" />
          </div>
          <p className="image-note">Výběr, který začíná u detailu</p>
        </div>
      </section>

      <section className="assortment section-shell" id="sortiment" aria-labelledby="sortiment-title">
        <div className="section-heading">
          <p className="eyebrow">Sortiment pro každodenní provoz</p>
          <h2 id="sortiment-title">Od jedné jehly po celé vybavení dílny.</h2>
          <p>
            Vyberete základní spotřební materiál i přesně ten detail, který vašemu
            výrobku chybí. Přehledně podle toho, co skutečně hledáte.
          </p>
        </div>

        <div className="assortment-grid">
          <div className="category-list">
            {categories.map((category) => (
              <a className="category-row" href="#spoluprace" key={category.name}>
                <span className="category-name">{category.name}</span>
                <span className="category-detail">{category.detail}</span>
                <span className="category-count">{category.count}</span>
                <span className="category-arrow" aria-hidden="true">↗</span>
              </a>
            ))}
          </div>

          <figure className="section-image product-image">
            <img
              src="/section-1.webp"
              alt="Detail rozmanité nabídky knoflíků, stuh a šicích potřeb"
              width="900"
              height="1120"
              loading="lazy"
            />
            <figcaption>
              <span>Pro oděv, opravu i nový nápad</span>
              <strong>Galanterie bez slepých míst</strong>
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="partnership section-shell" id="spoluprace" aria-labelledby="spoluprace-title">
        <div className="partnership-image section-image">
          <img
            src="/section-2.webp"
            alt="Pečlivě uspořádaný velkoobchodní sklad textilní galanterie VTC v Olomouci"
            width="1120"
            height="900"
            loading="lazy"
          />
          <span className="location-tag">Olomouc</span>
        </div>

        <div className="partnership-copy">
          <p className="eyebrow">Velkoobchod, na který navážete</p>
          <h2 id="spoluprace-title">Doplníte regál. Dokončíte zakázku. Jedete dál.</h2>
          <p className="partnership-intro">
            VTC soustřeďuje kvalitní českou a evropskou galanterii pro zákazníky,
            kteří potřebují nakupovat opakovaně, v šíři a bez zbytečného hledání.
          </p>

          <ul className="reason-list">
            {reasons.map((reason) => (
              <li key={reason}>
                <span aria-hidden="true" />
                {reason}
              </li>
            ))}
          </ul>

          <div className="trust-note">
            <p>Pro koho je nabídka</p>
            <strong>Pro galanterie, šicí dílny, krejčovství, školy i výrobní firmy.</strong>
          </div>
        </div>
      </section>
    </main>
  );
}
