const categories = [
  {
    name: 'Posilovací stroje',
    detail: 'Lavice, věže a vybavení pro domácí i klubové posilovny',
    code: 'STROJE',
  },
  {
    name: 'Činky a závaží',
    detail: 'Jednoruční činky, osy, kotouče a stojany',
    code: 'SÍLA',
  },
  {
    name: 'Fitness pomůcky',
    detail: 'Gumy, hrazdy, bradla, žebřiny a drobné vybavení',
    code: 'POHYB',
  },
  {
    name: 'Bojové sporty',
    detail: 'Pytle, chrániče, lapy a příslušenství pro trénink',
    code: 'RING',
  },
  {
    name: 'Sportovní podlahy',
    detail: 'Odolné povrchy pod stroje, činky i celé tělocvičny',
    code: 'POVRCH',
  },
  {
    name: 'Regenerace a výživa',
    detail: 'Masérské potřeby a sportovní výživa před i po výkonu',
    code: 'RESTART',
  },
];

const reviews = [
  {
    text: 'Bohatý sortiment, dobré ceny.',
    date: '14. 6. 2026',
  },
  {
    text: 'Rychlé dodání a vstřícnost.',
    date: '18. 4. 2026',
  },
];

export default function Page() {
  return (
    <main>
      <section className="hero" aria-labelledby="hero-title">
        <header className="site-header">
          <a className="wordmark" href="#top" aria-label="Hsportsport – začátek stránky">
            <span className="wordmark-mark" aria-hidden="true">H</span>
            <span>hsport</span>
            <small>Brno · od 1992</small>
          </a>

          <nav className="main-nav" aria-label="Hlavní navigace">
            <a href="#vybaveni">Vybavení</a>
            <a href="#zkusenosti">Proč Hsport</a>
            <a className="nav-contact" href="tel:+420777760007">777 760 007</a>
          </nav>
        </header>

        <div className="closure-note" id="top" role="note">
          <span>Aktuálně</span>
          <p>Prodejna na Nováčkově je od 30. 6. 2026 uzavřena. E-shop a telefonické poradenství pokračují.</p>
        </div>

        <div className="hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Vybavení pro trénink, který něco vydrží</p>
            <h1 id="hero-title">Postavte si vlastní <em>silnou zónu.</em></h1>
            <p className="hero-lead">
              Od první jednoručky po kompletní posilovnu. Pomůžeme vám vybrat stroje, činky a podlahu, které odpovídají prostoru i způsobu tréninku.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#vybaveni">Vybrat vybavení</a>
              <a className="button button-link" href="tel:+420777760007">Poradit se po telefonu <span aria-hidden="true">↗</span></a>
            </div>
            <p className="availability">Po–Pá, 9:00–17:00 · expedujeme po celé ČR a Slovensku</p>
          </div>

          <div className="hero-visual">
            <img
              src="/hero.webp"
              alt="Silové sportovní vybavení Hsport připravené pro domácí posilovnu"
            />
            <div className="rack-scale" aria-hidden="true">
              <span>20</span><span>40</span><span>60</span><span>80</span>
            </div>
            <div className="hero-stamp">
              <strong>98 %</strong>
              <span>zákazníků doporučuje obchod</span>
            </div>
          </div>
        </div>
      </section>

      <section className="equipment" id="vybaveni" aria-labelledby="equipment-title">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Všechno pro váš prostor</p>
            <h2 id="equipment-title">Od podlahy až po poslední kotouč.</h2>
          </div>
          <p>Jasné kategorie bez bloudění. Vyberte, co právě řešíte, nebo nám zavolejte a sestavíme vybavení společně.</p>
        </div>

        <div className="equipment-layout">
          <div className="category-list">
            {categories.map((category) => (
              <a className="category-row" href="#zkusenosti" key={category.name}>
                <span className="category-code">{category.code}</span>
                <span className="category-copy">
                  <strong>{category.name}</strong>
                  <small>{category.detail}</small>
                </span>
                <span className="category-arrow" aria-hidden="true">→</span>
              </a>
            ))}
          </div>

          <figure className="equipment-image">
            <img
              src="/section-1.webp"
              alt="Činky, kotouče a další silové vybavení z nabídky Hsport"
              loading="lazy"
            />
            <figcaption>
              <strong>Vybíráte do posilovny?</strong>
              <span>Pomůžeme sladit nosnost, rozměry i povrch.</span>
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="trust" id="zkusenosti" aria-labelledby="trust-title">
        <div className="trust-image-wrap">
          <img
            src="/section-2.webp"
            alt="Detail odolného sportovního vybavení pro pravidelný silový trénink"
            loading="lazy"
          />
          <div className="weight-label" aria-hidden="true">
            <span>HS</span>
            <strong>32</strong>
            <small>LET ZKUŠENOSTÍ</small>
          </div>
        </div>

        <div className="trust-content">
          <p className="eyebrow">Brněnské zkušenosti, celorepublikový dosah</p>
          <h2 id="trust-title">Neprodáváme jen krabici. Víme, co v ní má být.</h2>
          <p className="trust-intro">
            Hsport vybavuje domácí cvičební kouty i profesionální provozy od roku 1992. Když si nejste jistí rozměrem žebřin, nosností lavice nebo vhodnou tloušťkou podlahy, dovoláte se člověku, který sortiment zná.
          </p>

          <dl className="proof-grid">
            <div>
              <dt>1 200+</dt>
              <dd>ověřených recenzí na Heureka.cz</dd>
            </div>
            <div>
              <dt>4 000</dt>
              <dd>výdejních míst v Česku a na Slovensku</dd>
            </div>
            <div>
              <dt>98 %</dt>
              <dd>zákazníků doporučuje náš obchod</dd>
            </div>
          </dl>

          <div className="reviews" aria-label="Hodnocení zákazníků">
            {reviews.map((review) => (
              <blockquote key={review.date}>
                <p>„{review.text}“</p>
                <cite>Ověřený zákazník · {review.date}</cite>
              </blockquote>
            ))}
          </div>

          <div className="direct-contact">
            <span>Potřebujete poradit s výběrem?</span>
            <a href="tel:+420777760007">Zavolat 777 760 007</a>
            <a href="mailto:info@hsport.cz">Napsat na info@hsport.cz</a>
          </div>
        </div>
      </section>
    </main>
  );
}
