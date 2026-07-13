export default function Page() {
  const categories = [
    { name: "Kabely a vodiče", detail: "Přívody, datové kabely i řešení pro energetiku." },
    { name: "Rozvaděče a jištění", detail: "Skříně, modulární přístroje, svorkovnice a příslušenství." },
    { name: "Svítidla a instalace", detail: "Domovní i průmyslová svítidla, přístroje a spojovací materiál." },
    { name: "Nářadí a měření", detail: "Vybavení pro montáž, regulaci, kontrolu a bezpečný provoz." },
  ];

  return (
    <>
      <title>KAMAT Hradec Králové | Elektromateriál pro montáž i provoz</title>
      <meta
        name="description"
        content="Elektromateriál KAMAT pro elektrikáře, montážní firmy a provozy v Hradci Králové. Kabely, jištění, rozvaděče, svítidla i nářadí na jednom místě."
      />
      <meta property="og:title" content="KAMAT Hradec Králové | Elektromateriál bez zdržení" />
      <meta
        property="og:description"
        content="Konkrétní materiál pro domovní, průmyslové i energetické instalace. Pobočka Hradec Králové, centrální sklad v Novém Městě nad Metují."
      />
      <meta property="og:image" content="/hero.webp" />
      <meta property="og:locale" content="cs_CZ" />
      <meta property="og:type" content="website" />
      <link
        rel="icon"
        href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Crect width='64' height='64' rx='12' fill='%231746d1'/%3E%3Cpath d='M38 8 18 36h13l-5 20 20-29H33z' fill='%23f3c500'/%3E%3C/svg%3E"
      />

      <main className="site-shell">
        <section className="hero" aria-labelledby="hero-title">
          <header className="topbar">
            <a className="wordmark" href="#zacatek" aria-label="KAMAT Hradec Králové – úvod">
              <span className="wordmark-main"><i>ka</i>mat</span>
              <span className="wordmark-place">elektro · Hradec Králové</span>
            </a>

            <nav className="nav" aria-label="Hlavní navigace">
              <a href="#sortiment">Sortiment</a>
              <a href="#zazemi">Naše zázemí</a>
            </nav>
          </header>

          <div className="hero-grid" id="zacatek">
            <div className="hero-copy">
              <p className="eyebrow">Elektromateriál pro řemeslo i provoz</p>
              <h1 id="hero-title">
                Od prvního metru kabelu
                <span> po poslední svorku.</span>
              </h1>
              <p className="hero-lead">
                V Hradci Králové vyberete materiál pro domovní, průmyslové i energetické instalace — bez objíždění několika dodavatelů.
              </p>
              <div className="hero-actions">
                <a className="button button-primary" href="#sortiment">Vybrat sortiment</a>
                <a className="text-link" href="#zazemi">Zjistit, co držíme pohromadě</a>
              </div>
              <ul className="hero-facts" aria-label="Hlavní výhody">
                <li><strong>Pro montáž</strong><span>Kabely, přístroje, nářadí</span></li>
                <li><strong>Pro provoz</strong><span>Údržba, měření, náhrady</span></li>
                <li><strong>Pro firmy</strong><span>B2B nákup a produktové podklady</span></li>
              </ul>
            </div>

            <figure className="hero-visual">
              <img
                src="/hero.webp"
                alt="Detail elektromateriálu a kabelů z nabídky KAMAT"
                width="1200"
                height="900"
                fetchPriority="high"
              />
              <figcaption>
                <span>Hradec Králové</span>
                Materiál, který na stavbě dává smysl dohromady.
              </figcaption>
            </figure>
          </div>

          <svg className="cable-signature" viewBox="0 0 1440 220" preserveAspectRatio="none" aria-hidden="true">
            <path className="cable-shadow" d="M-30 72 C250 72 235 182 510 182 S815 44 1075 76 S1310 176 1470 147" />
            <path className="cable-path" d="M-30 72 C250 72 235 182 510 182 S815 44 1075 76 S1310 176 1470 147" />
            <circle cx="1075" cy="76" r="9" />
          </svg>
        </section>

        <section className="assortment section" id="sortiment" aria-labelledby="sortiment-title">
          <div className="section-heading">
            <p className="eyebrow">Co u nás vyřešíte</p>
            <h2 id="sortiment-title">Jedna instalace. Čtyři navazující vrstvy.</h2>
            <p>
              Sortiment skládáme podle skutečného postupu práce: od vedení energie přes jištění až po zapojení, měření a dokončení.
            </p>
          </div>

          <div className="assortment-layout">
            <figure className="section-image material-window">
              <img
                src="/section-1.webp"
                alt="Kabely, instalační prvky a další elektromateriál připravený k výběru"
                width="1000"
                height="760"
                loading="lazy"
              />
              <figcaption>Výběr podle použití, ne podle nekonečného seznamu značek.</figcaption>
            </figure>

            <div className="category-list">
              {categories.map((category, index) => (
                <article className="category" key={category.name}>
                  <span className="category-code" aria-hidden="true">{String.fromCharCode(65 + index)}</span>
                  <div>
                    <h3>{category.name}</h3>
                    <p>{category.detail}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="range-line" aria-label="Další sortiment">
            <span>Kabelové příslušenství</span>
            <span>Hromosvody</span>
            <span>Vzduchotechnika</span>
            <span>Domovní komunikace</span>
          </div>
        </section>

        <section className="backing section" id="zazemi" aria-labelledby="zazemi-title">
          <div className="backing-grid">
            <div className="backing-copy">
              <p className="eyebrow">Zázemí pro Hradec Králové</p>
              <h2 id="zazemi-title">Pobočka nablízku. Sklad za zády.</h2>
              <p className="backing-lead">
                Když vybavujete zakázku nebo držíte provoz v chodu, rozhoduje dostupnost a návaznost položek. Hradeckou pobočku podporuje centrální sklad v Novém Městě nad Metují.
              </p>

              <dl className="proof-list">
                <div>
                  <dt>Místní odběr</dt>
                  <dd>Hradec Králové</dd>
                </div>
                <div>
                  <dt>Centrální sklad</dt>
                  <dd>Rašínova 278, Nové Město nad Metují</dd>
                </div>
                <div>
                  <dt>Podklady k výrobkům</dt>
                  <dd>Katalogy, katalogové listy a dokumenty ke stažení</dd>
                </div>
                <div>
                  <dt>Nákup pro firmy</dt>
                  <dd>B2B e-shop a sortiment pro opakované objednávky</dd>
                </div>
              </dl>
            </div>

            <figure className="section-image warehouse-window">
              <img
                src="/section-2.webp"
                alt="Skladové zázemí elektromateriálu KAMAT pro pobočku Hradec Králové"
                width="1000"
                height="900"
                loading="lazy"
              />
              <figcaption>
                <strong>Centrální sklad</strong>
                Rašínova 278 · Nové Město nad Metují
              </figcaption>
            </figure>
          </div>
        </section>
      </main>
    </>
  );
}
