export default function Page() {
  const assortments = [
    {
      name: "Italská keramika",
      detail: "Obklady a dlažby přímo od výrobců z Itálie — od jemného kamene po výrazné cementové povrchy.",
      meta: "ABK · Ragno · Tuscania",
    },
    {
      name: "Celá koupelna",
      detail: "Sanita, baterie, vany, sprchové zástěny i nábytek sladěné do jednoho funkčního celku.",
      meta: "Výběr bez objíždění pěti prodejen",
    },
    {
      name: "Materiál k pokládce",
      detail: "Lepidla, spárovací hmoty, lišty a stavební chemie podle formátu dlažby i podkladu.",
      meta: "Správná skladba od první vrstvy",
    },
  ];

  return (
    <main className="site-shell">
      <section className="hero" aria-labelledby="hero-title">
        <header className="topbar">
          <a className="wordmark" href="#zacatek" aria-label="Svitava Stavebniny – začátek stránky">
            <span className="wordmark-mark" aria-hidden="true">
              <i />
              <i />
              <i />
            </span>
            <span>
              <strong>SVITAVA</strong>
              <small>OBKLADY · DLAŽBY · KOUPELNY</small>
            </span>
          </a>

          <nav className="nav" aria-label="Hlavní navigace">
            <a href="#sortiment">Co vyberete</a>
            <a href="#zkusenost">Proč k nám</a>
            <a className="nav-phone" href="tel:+420731155349">731 155 349</a>
          </nav>
        </header>

        <div className="hero-media" id="zacatek">
          <img
            src="/hero.webp"
            alt="Detail velkoformátové keramické dlažby v showroomovém prostředí"
          />
          <span className="format-tag" aria-hidden="true">60 × 120</span>
        </div>

        <div className="hero-panel">
          <p className="eyebrow">Obklady a dlažby pro Olomouc a okolí</p>
          <h1 id="hero-title">Povrch, který určí celý prostor.</h1>
          <p className="hero-copy">
            Pomůžeme vám vybrat keramiku, sanitu i materiál k pokládce tak, aby spolu fungovaly rozměrem,
            odstínem i rozpočtem.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="tel:+420731155349">
              Zavolat pro radu
              <span aria-hidden="true">↗</span>
            </a>
            <a className="text-link" href="#sortiment">Prohlédnout sortiment</a>
          </div>
        </div>

        <aside className="hero-note" aria-label="Zkušenost firmy">
          <strong>Přes 30 let</strong>
          <span>vybíráme keramiku podle kvality, ne jen podle fotografie.</span>
        </aside>
      </section>

      <section className="assortment" id="sortiment" aria-labelledby="assortment-title">
        <div className="section-heading">
          <p className="eyebrow">Od vzorku po poslední spáru</p>
          <h2 id="assortment-title">Vše, co musí v prostoru držet pohromadě.</h2>
          <p>
            Neprodáváme dlažbu izolovaně. Pohlídáme návaznosti materiálů, skutečný odstín i vhodnost
            povrchu pro koupelnu, chodbu nebo terasu.
          </p>
        </div>

        <div className="assortment-layout">
          <figure className="material-image">
            <img
              src="/section-1.webp"
              alt="Vzorky keramických obkladů a dlažeb v různých kamenných dekorech"
            />
            <figcaption>
              <span>Vzorek před objednávkou</span>
              <span>Odstín · kresba · struktura</span>
            </figcaption>
          </figure>

          <div className="assortment-list">
            {assortments.map((item) => (
              <article className="assortment-item" key={item.name}>
                <div className="tile-swatch" aria-hidden="true" />
                <div>
                  <h3>{item.name}</h3>
                  <p>{item.detail}</p>
                  <span>{item.meta}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="trust" id="zkusenost" aria-labelledby="trust-title">
        <div className="trust-image-wrap">
          <img
            src="/section-2.webp"
            alt="Pečlivě položená keramická dlažba s přesnou návazností spár"
          />
          <div className="grout-key" aria-hidden="true">
            <span>2 mm</span>
            <i />
            <span>spára</span>
          </div>
        </div>

        <div className="trust-content">
          <p className="eyebrow">Rozhodnutí na roky</p>
          <h2 id="trust-title">Nejdřív se ptáme, kam dlažba přijde.</h2>
          <p className="trust-lead">
            Jiný povrch potřebujete do sprchy, jiný do zádveří a jiný na terasu. Doporučíme formát,
            protiskluz i stavební chemii podle konkrétního použití — ne podle toho, co se právě potřebuje prodat.
          </p>

          <dl className="facts">
            <div>
              <dt>Výběr</dt>
              <dd>Italské, španělské, německé i české kolekce včetně Rako.</dd>
            </div>
            <div>
              <dt>Jistota</dt>
              <dd>Ověříme dostupnost, množství i rezervu na prořezy před objednávkou.</dd>
            </div>
            <div>
              <dt>Pro Olomouc</dt>
              <dd>Poradenství pro rekonstrukce koupelen i celé nové interiéry.</dd>
            </div>
          </dl>

          <blockquote>
            <p>„U velkého formátu rozhodují milimetry. Proto řešíme rozměr, podklad i spáru společně.“</p>
            <cite>Tým Svitava Stavebniny</cite>
          </blockquote>
        </div>
      </section>
    </main>
  );
}
