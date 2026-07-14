export default function Page() {
  const categories = [
    {
      name: "Florbalové hole",
      detail: "Tvrdost, délka a zahnutí podle postavy i stylu hry.",
      tag: "Hůl",
    },
    {
      name: "Čepele a omotávky",
      detail: "Přesnější kontakt s míčkem začíná správným úchopem.",
      tag: "Cit",
    },
    {
      name: "Brankářská výstroj",
      detail: "Masky, chrániče a oblečení pro pohyb bez omezení.",
      tag: "Brána",
    },
    {
      name: "Obuv a týmové vybavení",
      detail: "Jistota na palubovce i výbava pro celý trénink.",
      tag: "Hra",
    },
  ];

  return (
    <main className="site-shell">
      <section className="hero" aria-labelledby="hero-title">
        <header className="topbar">
          <a className="wordmark" href="#nahore" aria-label="EXE Sport – úvod">
            <span className="wordmark-exe">EXE</span>
            <span className="wordmark-sport">sport</span>
          </a>

          <nav className="main-nav" aria-label="Hlavní navigace">
            <a href="#vybava">Vybavení</a>
            <a href="#jak-vybirat">Jak vybírat</a>
          </nav>

          <a className="nav-action" href="#vybava">Vybrat výbavu</a>
        </header>

        <div className="hero-grid" id="nahore">
          <div className="hero-copy">
            <p className="eyebrow"><span aria-hidden="true" />Florbalová výbava · Praha</p>
            <h1 id="hero-title">
              Hra začíná
              <span>u prvního doteku.</span>
            </h1>
            <p className="hero-lead">
              Hole, čepele, obuv i brankářská výstroj pro hráče, kteří chtějí mít míček pod kontrolou — od prvního tréninku po rozhodující zápas.
            </p>
            <div className="hero-actions">
              <a className="primary-button" href="#vybava">Prohlédnout výbavu <span aria-hidden="true">↘</span></a>
              <a className="text-link" href="#jak-vybirat">Pomoc s výběrem</a>
            </div>
          </div>

          <div className="hero-visual">
            <div className="blade-frame">
              <img
                src="/hero.webp"
                alt="Florbalová hůl a míček připravené ke hře"
              />
              <div className="ball-mark" aria-hidden="true">
                <i /><i /><i /><i /><i /><i /><i />
              </div>
            </div>
            <p className="image-note">Vybavení, které sedí ruce i tempu hry.</p>
          </div>
        </div>
      </section>

      <section className="equipment-section" id="vybava" aria-labelledby="equipment-title">
        <div className="section-heading">
          <p className="eyebrow"><span aria-hidden="true" />Podle toho, co právě řešíte</p>
          <h2 id="equipment-title">Výbava bez střelby naslepo.</h2>
          <p>Nejdřív způsob hry, potom značka. Pomůžeme vám zúžit výběr podle pozice, zkušeností a toho, co vám skutečně sedí.</p>
        </div>

        <div className="equipment-layout">
          <div className="equipment-image">
            <img
              src="/section-1.webp"
              alt="Detail florbalové čepele a děrovaného míčku"
              loading="lazy"
            />
            <span className="image-label">Kontakt / kontrola / střela</span>
          </div>

          <div className="category-list">
            {categories.map((category) => (
              <article className="category-item" key={category.name}>
                <span className="category-tag">{category.tag}</span>
                <div>
                  <h3>{category.name}</h3>
                  <p>{category.detail}</p>
                </div>
                <span className="category-arrow" aria-hidden="true">↗</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="guidance-section" id="jak-vybirat" aria-labelledby="guidance-title">
        <div className="guidance-copy">
          <p className="eyebrow eyebrow-light"><span aria-hidden="true" />Pražský obchod pro florbalisty</p>
          <h2 id="guidance-title">Neprodáváme centimetry. Hledáme správný pocit ze hry.</h2>
          <p className="guidance-intro">
            Délka hole, tvrdost shaftu nebo tvar čepele nejsou drobnosti. Správná kombinace šetří ruce, zpřesní vedení míčku a nechá vás soustředit se na hru.
          </p>

          <div className="trust-grid">
            <div>
              <strong>Pro začátečníky</strong>
              <p>Srozumitelný výběr bez zbytečného technického balastu.</p>
            </div>
            <div>
              <strong>Pro pravidelné hráče</strong>
              <p>Výbava sladěná s pozicí, úchopem a tempem tréninku.</p>
            </div>
            <div>
              <strong>Pro týmy</strong>
              <p>Míčky, vaky, branky a další vybavení pro společnou hru.</p>
            </div>
          </div>
        </div>

        <figure className="guidance-figure">
          <img
            src="/section-2.webp"
            alt="Florbalista při práci s míčkem na palubovce"
            loading="lazy"
          />
          <figcaption>
            <span>EXE SPORT / PRAHA</span>
            <strong>Od šatny až na palubovku.</strong>
          </figcaption>
        </figure>
      </section>
    </main>
  );
}
