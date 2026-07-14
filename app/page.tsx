const categories = [
  {
    title: "Bezpečnostní obuv",
    text: "Pevná obuv pro provoz, dílnu i sklad. Pomůžeme vám zvolit správnou ochranu, šířku a velikost.",
    tag: "DO PRÁCE",
  },
  {
    title: "Trekingová obuv Prabos",
    text: "Odolné modely českého výrobce ze Slavičína pro terén, dlouhou chůzi a proměnlivé počasí.",
    tag: "DO TERÉNU",
  },
  {
    title: "Péče o obuv",
    text: "Impregnace, krémy a další prostředky, které prodlouží životnost materiálu i pohodlí při nošení.",
    tag: "PRO DELŠÍ ŽIVOTNOST",
  },
];

export default function HomePage() {
  return (
    <main className="site-shell">
      <section className="hero" aria-labelledby="hero-title">
        <header className="site-header">
          <a className="wordmark" href="#top" aria-label="Jiří Palička – úvod">
            <span className="wordmark-mark" aria-hidden="true">JP</span>
            <span className="wordmark-copy">
              <strong>Palička</strong>
              <small>pracovní obuv · České Budějovice</small>
            </span>
          </a>

          <nav className="desktop-nav" aria-label="Hlavní navigace">
            <a href="#nabidka">Obuv</a>
            <a href="#zkusenost">Proč u nás</a>
            <a href="tel:+420387221946">+420 387 221 946</a>
          </nav>

          <a className="header-action" href="#nabidka">
            Vybrat obuv <span aria-hidden="true">↘</span>
          </a>
        </header>

        <div className="hero-grid" id="top">
          <div className="hero-copy">
            <p className="eyebrow">Obuv, která drží krok s vaší prací</p>
            <h1 id="hero-title">
              Pevný krok.
              <span>Od rána do konce směny.</span>
            </h1>
            <p className="hero-lead">
              Pracovní a trekingovou obuv vybíráme podle toho, kde ji skutečně
              nosíte. V Českých Budějovicích vám poradíme s ochranou, velikostí
              i pohodlím.
            </p>
            <div className="hero-actions">
              <a className="primary-button" href="#nabidka">
                Prohlédnout obuv <span aria-hidden="true">→</span>
              </a>
              <a className="text-link" href="tel:+420387221946">
                Zavolat do prodejny
              </a>
            </div>
            <div className="hero-proof" aria-label="Hlavní přednosti">
              <p><strong>Od roku 1990</strong><span>zkušenosti s pracovními pomůckami</span></p>
              <p><strong>Osobní výběr</strong><span>správná velikost i použití</span></p>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-image-frame">
              <img
                src="/hero.webp"
                alt="Odolná pracovní obuv z nabídky Jiří Palička"
              />
              <span className="image-label">VYBRÁNO PRO CELODENNÍ NOŠENÍ</span>
            </div>
            <div className="lace-signature" aria-hidden="true">
              <span className="lace lace-one" />
              <span className="lace lace-two" />
              <span className="lace lace-three" />
              <i className="eyelet eyelet-one" />
              <i className="eyelet eyelet-two" />
              <i className="eyelet eyelet-three" />
            </div>
          </div>
        </div>
      </section>

      <section className="offer-section" id="nabidka" aria-labelledby="offer-title">
        <div className="section-heading">
          <p className="eyebrow">Podle práce, ne podle regálu</p>
          <h2 id="offer-title">Najděte pár pro svůj běžný den.</h2>
          <p>
            Jinou oporu potřebujete na betonové podlaze, jinou v mokrém terénu.
            Začněte tím, kde budete boty nosit.
          </p>
        </div>

        <div className="offer-layout">
          <figure className="section-image offer-image">
            <img
              src="/section-1.webp"
              alt="Detail pracovní obuvi připravené pro náročný provoz"
              loading="lazy"
            />
            <figcaption>Odolnost venku, pohodlí uvnitř.</figcaption>
          </figure>

          <div className="category-list">
            {categories.map((category) => (
              <article className="category-item" key={category.title}>
                <p className="category-tag">{category.tag}</p>
                <h3>{category.title}</h3>
                <p>{category.text}</p>
                <a href="mailto:palicka@jpalicka.cz?subject=Dotaz%20na%20obuv">
                  Zeptat se na dostupnost <span aria-hidden="true">↗</span>
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="trust-section" id="zkusenost" aria-labelledby="trust-title">
        <div className="trust-grid">
          <div className="trust-copy">
            <p className="eyebrow">Jiří Palička · České Budějovice</p>
            <h2 id="trust-title">Obuv poznáte až ve chvíli, kdy ji obujete.</h2>
            <p className="trust-intro">
              Od roku 1990 prodáváme pracovní ochranné pomůcky lidem, kteří je
              používají každý den. Nehádáte velikost ani vhodný typ podle jedné
              fotografie — dostanete doporučení opřené o zkušenost.
            </p>

            <dl className="trust-points">
              <div>
                <dt>Výběr podle provozu</dt>
                <dd>Řeknete nám, kde pracujete. Doporučíme odpovídající obuv.</dd>
              </div>
              <div>
                <dt>Český výrobce Prabos</dt>
                <dd>Trekingové modely známé odolností a pohodlím v náročných podmínkách.</dd>
              </div>
              <div>
                <dt>Jsme na telefonu</dt>
                <dd><a href="tel:+420387221946">+420 387 221 946</a> · <a href="mailto:palicka@jpalicka.cz">palicka@jpalicka.cz</a></dd>
              </div>
            </dl>
          </div>

          <figure className="section-image trust-image">
            <img
              src="/section-2.webp"
              alt="Pracovní obuv a vybavení v prodejně Jiří Palička v Českých Budějovicích"
              loading="lazy"
            />
            <figcaption>
              <span>ČESKÉ BUDĚJOVICE</span>
              Osobní rada před nákupem
            </figcaption>
          </figure>
        </div>
      </section>
    </main>
  );
}
