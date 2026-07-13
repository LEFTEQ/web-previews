export default function Page() {
  const spaces = [
    {
      name: "Kavárna",
      signal: "Hovor vítán",
      text: "Výběrová káva Dos Mundos, čerstvé dorty, polévky i bagety. Dost místa na schůzku, notebook i dlouhé povídání.",
      detail: "Objednáte u baru nebo od stolu přes QR kód.",
    },
    {
      name: "Tichá studovna",
      signal: "Nonstop · ticho",
      text: "Pro zkouškové, seminárku nebo práci, která potřebuje soustředění. Prostorné stoly, zásuvky a žádné vyrušování.",
      detail: "Vstup 24/7 po registraci pomocí vlastní čipové karty.",
    },
    {
      name: "Diskuzní zóna a coworking",
      signal: "Nonstop · mluvení ano",
      text: "Místo pro týmovou práci, online hovory a pracovní den mimo kancelář. Součástí je i oddělený call box.",
      detail: "Profesionální Wi‑Fi, tisk, kopírování a skenování.",
    },
  ];

  return (
    <main className="cafedu-page" id="obsah">
      <a className="skip-link" href="#prostory">
        Přeskočit k prostorům
      </a>

      <section className="hero" aria-labelledby="hero-title">
        <header className="site-header">
          <a className="wordmark" href="#obsah" aria-label="Cafedu – začátek stránky">
            <span>cafe</span><span>du</span>
          </a>

          <nav className="site-nav" aria-label="Hlavní navigace">
            <a className="nav-link" href="#prostory">Prostory</a>
            <a className="nav-link" href="#navsteva">Jak to funguje</a>
            <a className="nav-cta" href="/kontakt-rezervace-pronajem/">
              Rezervovat
            </a>
          </nav>
        </header>

        <div className="hero-copy">
          <p className="eyebrow">Praha · kavárna a studovna 24/7</p>
          <h1 id="hero-title" className="stair-title">
            <span>Dole</span>
            <span>káva.</span>
            <span>Nahoře</span>
            <span>klid.</span>
          </h1>
          <p className="hero-lead">
            Dvě patra propojená točitým schodištěm. Přijďte na cappuccino,
            schůzku nebo na celou noc nad projektem — tempo si určíte sami.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="/kontakt-rezervace-pronajem/">
              Rezervovat stůl nebo prostor
            </a>
            <a className="text-link" href="#prostory">
              Vybrat si zónu <span aria-hidden="true">↓</span>
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <img
            src="/hero.webp"
            alt="Interiér pražského Cafedu s místy pro kávu, studium a práci"
          />
          <div className="floor-key" aria-label="Cafedu má dvě propojená patra">
            <span className="floor-key-label">Dvě patra</span>
            <span className="floor-key-route" aria-hidden="true">
              <i />
              <i />
              <i />
            </span>
            <span className="floor-key-copy">kavárna ↗ studovna</span>
          </div>
        </div>

        <div className="hero-facts" aria-label="Základní informace">
          <span>téměř 600 m²</span>
          <span>naproti Národnímu muzeu</span>
          <span>zásuvky u stolů</span>
        </div>
      </section>

      <section className="spaces-section" id="prostory" aria-labelledby="spaces-title">
        <div className="section-heading">
          <p className="eyebrow">Podle dnešního plánu</p>
          <h2 id="spaces-title">Místo, které se přizpůsobí vám.</h2>
          <p>
            V Cafedu nemusíte předstírat, že jdete jen na kávu. Vyberte si podle
            toho, jestli chcete mluvit, pracovat v tichu, nebo zvládnout obojí.
          </p>
        </div>

        <div className="spaces-layout">
          <figure className="spaces-image">
            <img
              src="/section-1.webp"
              alt="Prostorný stůl v Cafedu připravený pro notebook, zápisník a kávu"
            />
            <figcaption>Stůl pro notebook, knihu i kávu — ne jen pro jeden šálek.</figcaption>
          </figure>

          <div className="space-list">
            {spaces.map((space) => (
              <article className="space-item" key={space.name}>
                <div className="space-item-top">
                  <h3>{space.name}</h3>
                  <span>{space.signal}</span>
                </div>
                <p>{space.text}</p>
                <small>{space.detail}</small>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="visit-section" id="navsteva" aria-labelledby="visit-title">
        <div className="visit-image-wrap">
          <img
            src="/section-2.webp"
            alt="Klidná studijní zóna Cafedu s pracovními místy a výhledem do Prahy"
          />
          <p className="image-note">Když kavárna zavře, vaše práce nemusí.</p>
        </div>

        <div className="visit-content">
          <p className="eyebrow">Bez hledání zásuvky</p>
          <h2 id="visit-title">Na dlouhé sezení jsme připravení.</h2>
          <p className="visit-intro">
            Přinesete notebook a úkol. O pracovní zázemí se postaráme my.
            Kávu z kavárny si můžete vzít s sebou i do studovny.
          </p>

          <dl className="trust-list">
            <div>
              <dt>Připojení</dt>
              <dd>Rychlá profesionální Wi‑Fi ve všech zónách.</dd>
            </div>
            <div>
              <dt>Energie</dt>
              <dd>Elektrické zásuvky přímo u prostorných stolů.</dd>
            </div>
            <div>
              <dt>Zázemí</dt>
              <dd>Tiskárna pro tisk, kopírování i skenování.</dd>
            </div>
            <div>
              <dt>Noční vstup</dt>
              <dd>Bezpečný přístup do studovny vlastní čipovou kartou po registraci.</dd>
            </div>
          </dl>

          <div className="location-note">
            <span aria-hidden="true">↗</span>
            <p>
              <strong>Praha, výhled na Národní muzeum.</strong>
              Mezi učením si můžete na chvíli připomenout, že město venku pořád žije.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
