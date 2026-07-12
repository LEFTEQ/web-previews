export default function Page() {
  const sortiment = [
    {
      label: "Z vlastní pekárny",
      title: "Chléb, který má kůrku",
      text: "Celozrnné chleby podle receptury pana Kanty, jemné tukové rohlíky a sladké pečivo z čerstvě stloukaného másla.",
    },
    {
      label: "Z lahůdkárny",
      title: "Chlebíčky, saláty a svačiny",
      text: "Připravujeme je průběžně z čerstvých surovin. Pro rychlou snídani, pohoštění do práce i rodinnou oslavu.",
    },
    {
      label: "Z naší kuchyně",
      title: "Oběd bez polotovarů",
      text: "Každý všední den vaříme v třemošenské kuchyni. Aktuální nabídku najdete v jídelníčku nebo přímo na prodejně.",
    },
    {
      label: "Od českých výrobců",
      title: "Celý nákup pod jednou střechou",
      text: "Mléčné výrobky, maso, ryby, uzeniny, mošty, vína i potraviny pro alergiky od farmářů a menších výrobců.",
    },
  ];

  return (
    <main>
      <section className="hero" aria-labelledby="hero-title">
        <header className="site-header">
          <a className="wordmark" href="#nahoru" aria-label="U Lidušky – úvod">
            <span className="wordmark-small">farmářský obchod</span>
            <span className="wordmark-main">U Lidušky</span>
          </a>

          <nav className="main-nav" aria-label="Hlavní navigace">
            <a href="#sortiment">Co u nás najdete</a>
            <a href="#o-nas">Proč k Lidušce</a>
          </nav>

          <a className="header-call" href="tel:+420603226682">
            <span>Zavolat</span>
            603 226 682
          </a>
        </header>

        <div className="hero-layout" id="nahoru">
          <div className="hero-copy">
            <p className="hero-kicker">Pekárna · lahůdkárna · kuchyně · Plzeň</p>
            <h1 id="hero-title">
              <span>Z pece.</span>
              <span>Z pole.</span>
              <span className="hero-accent">K vám.</span>
            </h1>
            <p className="hero-intro">
              Každodenní farmářský trh pod střechou. Pečeme vlastní chleby,
              vaříme obědy a vybíráme poctivé potraviny od českých rodinných výrobců.
            </p>
            <div className="hero-actions" aria-label="Rychlé kontakty">
              <a className="button button-primary" href="tel:+420603226682">
                Zavolat na prodejnu
              </a>
              <a
                className="button button-secondary"
                href="mailto:info@obchodulidusky.cz?subject=Objednávka%20nákupu"
              >
                Objednat nákup
              </a>
            </div>
            <p className="hero-place">
              <span aria-hidden="true">●</span>
              Na Roudné 105, Plzeň 1 · Po–Pá 7–18, So 8–12
            </p>
          </div>

          <figure className="hero-visual">
            <div className="loaf-frame">
              <img
                src="/hero.webp"
                alt="Čerstvé pečivo a farmářské potraviny v obchodě U Lidušky"
              />
              <span className="loaf-cut loaf-cut-one" aria-hidden="true" />
              <span className="loaf-cut loaf-cut-two" aria-hidden="true" />
              <span className="loaf-cut loaf-cut-three" aria-hidden="true" />
            </div>
            <figcaption>
              <span>Pečeme sami</span>
              <strong>od roku 2014</strong>
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="assortment" id="sortiment" aria-labelledby="sortiment-title">
        <div className="section-heading">
          <p className="eyebrow">Jeden obchod, čtyři dobré důvody přijít</p>
          <h2 id="sortiment-title">Pro snídani, oběd i celý nákup.</h2>
          <p>
            Nejen prodáváme. Suroviny zpracováváme ve vlastní pekárně,
            lahůdkárně a kuchyni, takže víme, co vám dáváme na pult.
          </p>
        </div>

        <div className="assortment-layout">
          <figure className="section-photo flour-corner">
            <img
              src="/section-1.webp"
              alt="Čerstvě upečené chleby a rohlíky z vlastní pekárny U Lidušky"
              loading="lazy"
            />
            <figcaption>Ráno začínáme u pece, ne u rozmrazovacího boxu.</figcaption>
          </figure>

          <div className="product-list">
            {sortiment.map((item) => (
              <article className="product-item" key={item.label}>
                <p>{item.label}</p>
                <h3>{item.title}</h3>
                <span>{item.text}</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="trust" id="o-nas" aria-labelledby="trust-title">
        <div className="trust-image-wrap">
          <img
            src="/section-2.webp"
            alt="Interiér plzeňského farmářského obchodu U Lidušky s čerstvým sortimentem"
            loading="lazy"
          />
          <div className="image-note" aria-hidden="true">
            <span>Plzeň</span>
            <strong>každý den čerstvě</strong>
          </div>
        </div>

        <div className="trust-content">
          <p className="eyebrow">Vaše Lidušky</p>
          <h2 id="trust-title">Známe cestu jídla až na váš stůl.</h2>
          <p className="trust-lead">
            Od roku 2014 spojujeme malé farmáře, vlastní výrobu a sousedský
            obchod. Bez rozmarů počasí, ale se stejnou čerstvostí jako na trhu.
          </p>

          <dl className="proof-list">
            <div>
              <dt>Vlastní výroba</dt>
              <dd>Pekárna, lahůdkárna a kuchyně nejsou jen nápis nad regálem.</dd>
            </div>
            <div>
              <dt>Český původ</dt>
              <dd>Přednost mají rodinní farmáři a menší lokální výrobci.</dd>
            </div>
            <div>
              <dt>Nákup bez kliček</dt>
              <dd>Na Roudné zaparkujete nedaleko a v sobotu máme otevřeno od 8 do 12.</dd>
            </div>
          </dl>

          <blockquote>
            „Když něco doporučíme, ochutnaly jsme to první.“
            <cite>Tým U Lidušky</cite>
          </blockquote>
        </div>
      </section>
    </main>
  );
}
