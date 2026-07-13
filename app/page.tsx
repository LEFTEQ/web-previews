export default function Page() {
  const categories = [
    {
      title: "Ručníky a role",
      text: "Skládané papírové ručníky, kuchyňské role i průmyslové role z celulózy.",
      note: "Katrin · role · skládané ručníky",
    },
    {
      title: "Hygiena provozu",
      text: "Toaletní papír, mýdla, dezinfekce a náplně pro každodenní provoz.",
      note: "Toalety · umývárny · šatny",
    },
    {
      title: "Zásobníky a dávkovače",
      text: "Systémy pro ručníky, toaletní papír, mýdla i vůně — včetně vhodných náplní.",
      note: "Katrin systém · stojany · koše",
    },
    {
      title: "Úklid a odpad",
      text: "Úklidová chemie, pomůcky, netkané textilie, sáčky a pevné pytle na odpad.",
      note: "Chemie · pomůcky · pytle",
    },
  ];

  return (
    <main className="tekos-page">
      <section className="hero" aria-labelledby="hero-title">
        <header className="site-header">
          <a className="wordmark" href="#top" aria-label="Tekos Klimkovice – úvod">
            <span className="wordmark-name">tekos</span>
            <span className="wordmark-place">Klimkovice · Ostrava</span>
          </a>

          <nav className="site-nav" aria-label="Hlavní navigace">
            <a href="#sortiment">Sortiment</a>
            <a href="#o-nas">O nás</a>
            <a className="nav-phone" href="tel:+420556425559">
              <span aria-hidden="true">↗</span> 556 425 559
            </a>
          </nav>
        </header>

        <div className="hero-grid" id="top">
          <div className="hero-copy">
            <p className="eyebrow">Papírová hygiena pro firmy a provozy</p>
            <h1 id="hero-title">
              Čistý provoz začíná u správné <span>role.</span>
            </h1>
            <p className="hero-lead">
              Pomůžeme vám vybrat ručníky, toaletní papír, zásobníky i úklidové potřeby, které do sebe skutečně pasují. Osobně v Ostravě-Vítkovicích.
            </p>

            <div className="hero-actions">
              <a className="button button-primary" href="tel:+420556425559">
                Zavolat pro nabídku
                <span aria-hidden="true">↗</span>
              </a>
              <a className="text-link" href="#sortiment">
                Projít sortiment
                <span aria-hidden="true">↓</span>
              </a>
            </div>

            <div className="hero-facts" aria-label="Základní informace">
              <p>
                <span>Pro koho</span>
                Výroba, kanceláře, gastro i veřejné provozy
              </p>
              <p>
                <span>Kde nás najdete</span>
                U Cementárny 1183, Ostrava-Vítkovice
              </p>
            </div>
          </div>

          <div className="hero-visual">
            <div className="roll-label" aria-hidden="true">
              <span>Role</span>
              <span>Arch</span>
              <span>Útržek</span>
            </div>
            <div className="paper-frame">
              <img
                src="/hero.webp"
                alt="Papírové hygienické výrobky z nabídky Tekos Klimkovice"
              />
              <div className="image-caption">
                <span>Každodenní spotřeba</span>
                <strong>Bez zbytečných prostojů</strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="assortment" id="sortiment" aria-labelledby="sortiment-title">
        <div className="section-heading">
          <p className="eyebrow">Co vyřešíte na jednom místě</p>
          <h2 id="sortiment-title">Od umývárny po výrobní halu.</h2>
          <p>
            Nevybíráte jen krabici papíru. Hledáte rozměr, materiál a systém, který vydrží tempo vašeho provozu a zbytečně se neplýtvá.
          </p>
        </div>

        <div className="assortment-layout">
          <div className="category-list">
            {categories.map((category) => (
              <article className="category" key={category.title}>
                <div className="category-mark" aria-hidden="true" />
                <div>
                  <h3>{category.title}</h3>
                  <p>{category.text}</p>
                  <span>{category.note}</span>
                </div>
              </article>
            ))}
          </div>

          <figure className="section-image product-sheet">
            <img
              src="/section-1.webp"
              alt="Výběr papírových ručníků, rolí a hygienického sortimentu"
            />
            <figcaption>
              <span>V nabídce</span>
              Značky Katrin, Sempre a Fasana
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="local" id="o-nas" aria-labelledby="local-title">
        <div className="local-image-wrap">
          <figure className="section-image local-image">
            <img
              src="/section-2.webp"
              alt="Zázemí společnosti Tekos Klimkovice v Ostravě-Vítkovicích"
            />
            <figcaption>U Cementárny 1183 · Ostrava-Vítkovice</figcaption>
          </figure>
        </div>

        <div className="local-copy">
          <p className="eyebrow">Tekos Klimkovice, s.r.o.</p>
          <h2 id="local-title">V Ostravě. Po ruce. Bez tápaní v katalogu.</h2>
          <p className="local-intro">
            Když si nejste jistí typem role nebo náplně, stačí popsat zásobník a provoz. Pomůžeme vám zúžit výběr na výrobky, které dávají smysl.
          </p>

          <dl className="trust-list">
            <div>
              <dt>Jedna domluva</dt>
              <dd>Papír, zásobníky, mýdla i úklidové potřeby řešíte společně.</dd>
            </div>
            <div>
              <dt>Konkrétní místo</dt>
              <dd>Najdete nás v průmyslové části Ostravy-Vítkovic, na adrese U Cementárny 1183.</dd>
            </div>
            <div>
              <dt>Telefon bez hledání</dt>
              <dd>Na čísle +420 556 425 559 rovnou proberete, co váš provoz spotřebuje.</dd>
            </div>
          </dl>
        </div>
      </section>
    </main>
  );
}
