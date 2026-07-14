const categories = [
  {
    name: "Jídelní židle",
    detail: "Velur, tkanina i snadno udržovatelné čalounění pro každodenní stolování.",
    example: "ORLEN VELUR · set 4 ks",
    price: "4 390 Kč",
  },
  {
    name: "Relaxační křesla",
    detail: "Polohovací opěra, podnožka a pohodlí pro večery, které nikam nespěchají.",
    example: "VELORA · taupe",
    price: "4 990 Kč",
  },
  {
    name: "Židle pro práci a beauty",
    detail: "Otočné podstavy a kolečka pro domácí pracovnu, studio i salon.",
    example: "LIVIO VELUR · krémová",
    price: "1 090 Kč",
  },
];

export default function Page() {
  return (
    <main className="luxury-page">
      <section className="hero" aria-labelledby="hero-title">
        <header className="site-header">
          <a className="wordmark" href="#top" aria-label="LuxuryForm Design – úvod">
            <span className="wordmark-mark" aria-hidden="true">LF</span>
            <span>
              <strong>LuxuryForm</strong>
              <small>Design · Olomouc</small>
            </span>
          </a>

          <nav className="site-nav" aria-label="Hlavní navigace">
            <a href="#nabidka">Nábytek</a>
            <a href="#zkusenost">Proč LuxuryForm</a>
          </nav>

          <a className="header-contact" href="tel:+420607282082">
            <span>Zavolat</span>
            <strong>607 282 082</strong>
          </a>
        </header>

        <div className="hero-layout" id="top">
          <div className="hero-copy">
            <p className="eyebrow">Český výběr designového sezení od roku 2008</p>
            <h1 id="hero-title">
              Židle, která drží
              <em>celý pokoj.</em>
            </h1>
            <p className="hero-intro">
              Křesla, židle a stolky vybíráme tak, aby dobře vypadaly i po prvním dojmu — doma, v kavárně i v salonu.
            </p>
            <a className="primary-action" href="#nabidka">
              Prohlédnout výběr
              <span aria-hidden="true">↘</span>
            </a>
          </div>

          <div className="hero-visual">
            <div className="material-rail" aria-hidden="true">
              <span>VELUR</span>
              <i />
              <span>KOV</span>
              <i />
              <span>POHYB</span>
            </div>
            <figure className="chair-frame">
              <img
                src="/hero.webp"
                alt="Designové čalouněné křeslo z nabídky LuxuryForm"
              />
              <figcaption>
                <span>Vybráno pro pohodlí</span>
                <strong>Olomouc · Česko / EU</strong>
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section className="selection-section" id="nabidka" aria-labelledby="selection-title">
        <div className="section-heading">
          <p className="eyebrow">Výběr podle použití</p>
          <h2 id="selection-title">Nejdřív si řekněte, kde budete sedět.</h2>
          <p>
            Pak řešte barvu. Každý model vybíráme podle proporcí, materiálu a způsobu, jakým má sloužit vašemu prostoru.
          </p>
        </div>

        <div className="selection-layout">
          <figure className="section-image selection-image">
            <img
              src="/section-1.webp"
              alt="Detail čalounění a konstrukce designové židle LuxuryForm"
            />
            <figcaption>Detail, který obstojí zblízka.</figcaption>
          </figure>

          <div className="category-list">
            {categories.map((category) => (
              <article className="category" key={category.name}>
                <div className="category-topline">
                  <h3>{category.name}</h3>
                  <span aria-hidden="true">↗</span>
                </div>
                <p>{category.detail}</p>
                <div className="product-note">
                  <span>{category.example}</span>
                  <strong>od {category.price}</strong>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="trust-section" id="zkusenost" aria-labelledby="trust-title">
        <div className="trust-visual">
          <figure className="section-image trust-image">
            <img
              src="/section-2.webp"
              alt="Moderní interiér zařízený designovým nábytkem LuxuryForm"
            />
          </figure>
          <div className="year-stamp" aria-label="Na trhu od roku 2008">
            <span>na trhu od</span>
            <strong>2008</strong>
          </div>
        </div>

        <div className="trust-copy">
          <p className="eyebrow">Z Olomouce do českých i evropských interiérů</p>
          <h2 id="trust-title">Nábytek nemá být jen fotogenický.</h2>
          <p className="trust-lead">
            LuxuryForm je zavedený český dodavatel sezení pro domácnosti i komerční prostory. V nabídce držíme modely, které spojují výrazný tvar, pohodlí a rozumnou cenu.
          </p>

          <dl className="trust-points">
            <div>
              <dt>Skladem znamená skladem</dt>
              <dd>U jednotlivých variant jasně vidíte dostupnost ještě před objednávkou.</dd>
            </div>
            <div>
              <dt>Pro domov i provoz</dt>
              <dd>Pomůžeme vybavit jídelnu, pracovnu, kavárnu, restauraci nebo kosmetický salon.</dd>
            </div>
            <div>
              <dt>Náhradní díly v nabídce</dt>
              <dd>Vybranému nábytku můžete prodloužit život bez zbytečné výměny celého kusu.</dd>
            </div>
          </dl>
        </div>
      </section>
    </main>
  );
}
