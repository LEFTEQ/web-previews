export default function Page() {
  const products = [
    {
      code: "PLOT",
      title: "Plotrové fólie",
      text: "Řezaná grafika na výlohy, auta, cedule i orientační systémy. Pomůžeme vybrat správnou přilnavost, životnost a odstín.",
      note: "interiér / exteriér",
      color: "red",
    },
    {
      code: "PRINT",
      title: "Média pro digitální tisk",
      text: "Samolepicí fólie a další média pro spolehlivý tisk. Materiál volíme podle technologie, povrchu i místa použití.",
      note: "tisk / laminace",
      color: "blue",
    },
    {
      code: "TEXTIL",
      title: "Zažehlovací fólie",
      text: "Materiály pro nápisy, čísla a grafiku na textil. Pro pracovní oděvy, sportovní dresy i menší zakázkové série.",
      note: "oděvy / dresy",
      color: "cyan",
    },
    {
      code: "DÍLNA",
      title: "Pomůcky a vzorníky",
      text: "Stěrky, nože, aplikační příslušenství a vzorníky, se kterými se materiál lépe vybírá i zpracovává.",
      note: "aplikace / výběr",
      color: "silver",
    },
  ];

  return (
    <main>
      <header className="site-header" aria-label="Hlavní navigace">
        <a className="wordmark" href="#nahoru" aria-label="Calon — úvodní strana">
          <span>CAL</span><span className="wordmark-roll">O</span><span>N</span>
          <small>materiály pro reklamu</small>
        </a>

        <nav className="nav-links" aria-label="Navigace stránky">
          <a href="#sortiment">Sortiment</a>
          <a href="#spoluprace">Jak pomáháme</a>
        </nav>

        <a className="header-phone" href="tel:+420777747107">
          <span>Obchod</span>
          +420 777 747 107
        </a>
      </header>

      <section className="hero" id="nahoru" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="eyebrow">Materiály pro signmaking · Mirošovice u Prahy</p>
          <h1 id="hero-title">
            Fólie, které drží
            <span>vaši reklamu pohromadě.</span>
          </h1>
          <p className="hero-lead">
            Plotrové a zažehlovací fólie, média pro digitální tisk i dílenské
            pomůcky. Poradíme s výběrem a připravíme materiál pro vaši výrobu.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#sortiment">
              Vybrat materiál
              <span aria-hidden="true">↓</span>
            </a>
            <a className="button button-secondary" href="tel:+420777747107">
              Zavolat obchod
            </a>
          </div>
          <dl className="quick-facts" aria-label="Praktické informace">
            <div>
              <dt>Výdejní místo</dt>
              <dd>Hlavní 420, Mirošovice</dd>
            </div>
            <div>
              <dt>Po–Čt / Pá</dt>
              <dd>9–16 / 9–15 hodin</dd>
            </div>
          </dl>
        </div>

        <div className="hero-visual">
          <div className="hero-image-wrap">
            <img
              src="/hero.webp"
              width="1080"
              height="1280"
              alt="Role barevných plotrových fólií připravené pro výrobu reklamy"
            />
          </div>
          <div className="swatch-fan" aria-hidden="true">
            <span className="swatch swatch-red">řezat</span>
            <span className="swatch swatch-blue">tisknout</span>
            <span className="swatch swatch-cyan">aplikovat</span>
          </div>
          <p className="image-caption">
            <span>01</span>
            Od role k hotové grafice
          </p>
        </div>
      </section>

      <section className="products-section" id="sortiment" aria-labelledby="products-title">
        <div className="section-heading">
          <p className="eyebrow">Co u nás vyřešíte</p>
          <h2 id="products-title">Materiál podle toho, co vyrábíte.</h2>
          <p>
            Neprodáváme jednu fólii na všechno. Řekněte nám povrch, technologii
            a prostředí použití — doporučíme variantu, se kterou se vám bude dobře pracovat.
          </p>
        </div>

        <div className="products-layout">
          <figure className="products-image">
            <img
              src="/section-1.webp"
              width="1200"
              height="900"
              alt="Detail řezání reklamní grafiky z barevné samolepicí fólie"
            />
            <figcaption>Barva, lepidlo a životnost musí odpovídat konkrétní zakázce.</figcaption>
          </figure>

          <div className="product-list">
            {products.map((product) => (
              <article className="product-card" key={product.code}>
                <div className={`material-chip material-chip-${product.color}`} aria-hidden="true" />
                <div className="product-card-head">
                  <span>{product.code}</span>
                  <small>{product.note}</small>
                </div>
                <h3>{product.title}</h3>
                <p>{product.text}</p>
                <a href="mailto:info@calon.cz?subject=Dotaz%20na%20materiál">
                  Zeptat se na dostupnost
                  <span aria-hidden="true">↗</span>
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="support-section" id="spoluprace" aria-labelledby="support-title">
        <div className="support-content">
          <p className="eyebrow">Pro reklamní dílny i vlastní výrobu</p>
          <h2 id="support-title">Nejste si jistí médiem? Začněte zakázkou, ne katalogem.</h2>
          <p className="support-intro">
            Popište nám, co vyrábíte a kam grafika přijde. Probereme podklad,
            způsob aplikace, požadovanou životnost i další zpracování.
          </p>

          <div className="support-points">
            <article>
              <span className="support-icon" aria-hidden="true">↔</span>
              <div>
                <h3>Formátování materiálu</h3>
                <p>Připravíme rozměr, se kterým můžete rovnou pokračovat do výroby.</p>
              </div>
            </article>
            <article>
              <span className="support-icon" aria-hidden="true">◎</span>
              <div>
                <h3>Výběr podle použití</h3>
                <p>Porovnáme vhodné řady a vysvětlíme rozdíly bez zbytečné omáčky.</p>
              </div>
            </article>
            <article>
              <span className="support-icon" aria-hidden="true">→</span>
              <div>
                <h3>Osobní odběr i doprava</h3>
                <p>Materiál vyzvednete v Mirošovicích nebo domluvíme jeho odeslání.</p>
              </div>
            </article>
          </div>

          <div className="contact-strip">
            <p>
              <span>Rychlá konzultace objednávky</span>
              Po–Čt 9:00–16:00 · Pá 9:00–15:00
            </p>
            <div>
              <a href="tel:+420777747107">+420 777 747 107</a>
              <a href="mailto:info@calon.cz">info@calon.cz</a>
            </div>
          </div>
        </div>

        <figure className="support-image">
          <img
            src="/section-2.webp"
            width="960"
            height="1200"
            alt="Pracovník reklamní výroby aplikuje vyřezanou fóliovou grafiku"
          />
          <figcaption>
            <strong>Calon s.r.o.</strong>
            Hlavní 420 · 251 66 Mirošovice
          </figcaption>
        </figure>
      </section>
    </main>
  );
}
