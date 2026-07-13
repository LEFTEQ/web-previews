export default function Page() {
  const categories = [
    {
      label: "Vozíky a skútry",
      title: "Když potřebujete pohyb bez kompromisů",
      text: "Mechanické, aktivní i elektrické vozíky, skútry, dětské modely a řešení XXL. Pomůžeme s výběrem rámu, sedu i příslušenství.",
      meta: "mechanické · aktivní · elektrické",
    },
    {
      label: "Jistější krok",
      title: "Opora doma i venku",
      text: "Chodítka, hole, berle, nájezdové rampy a pomůcky pro bezpečný přesun vybíráme podle vašeho pohybu i prostředí.",
      meta: "chůze · přesun · rampy",
    },
    {
      label: "Péče a poloha",
      title: "Úleva při sezení i odpočinku",
      text: "Antidekubitní matrace, podsedáky, polohovací lůžka, zvedací zařízení a pomůcky pro hygienu a sebeobsluhu.",
      meta: "lůžka · hygiena · prevence",
    },
    {
      label: "Ortézy a rehabilitace",
      title: "Podpora, která sedí tělu",
      text: "Bandáže a ortézy pro končetiny, trup, hlavu i krk doplňujeme pomůckami pro domácí cvičení a rehabilitaci.",
      meta: "ortézy · bandáže · cvičení",
    },
  ];

  return (
    <main className="site-shell">
      <a className="skip-link" href="#obsah">
        Přeskočit na obsah
      </a>

      <header className="masthead" aria-label="Hlavní navigace">
        <a className="wordmark" href="#obsah" aria-label="Meyra ČR – úvod">
          <span className="wordmark-mark" aria-hidden="true">m</span>
          <span>
            <strong>meyra čr</strong>
            <small>mobilita &amp; péče</small>
          </span>
        </a>

        <nav className="main-nav" aria-label="Navigace stránky">
          <a href="#nabidka">Pomůcky</a>
          <a href="#poradenstvi">Jak pomáháme</a>
          <a className="nav-accent" href="#epoukaz">ePoukaz</a>
        </nav>
      </header>

      <section className="hero" id="obsah" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="eyebrow">
            <span aria-hidden="true" /> České Budějovice · ortopedické pomůcky
          </p>
          <h1 id="hero-title">
            Pohyb má
            <span>vlastní rytmus.</span>
          </h1>
          <p className="hero-lead">
            Vybereme vozík nebo pomůcku, která se přizpůsobí vašemu tělu,
            domácnosti i běžnému dni — ne naopak.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#nabidka">
              Najít správnou pomůcku <span aria-hidden="true">→</span>
            </a>
            <a className="text-link" href="tel:300497813">
              Zavolat 300 497 813
            </a>
          </div>
          <p className="availability">
            <span aria-hidden="true" /> Odborné poradenství, půjčovna i servis
          </p>
        </div>

        <div className="hero-visual">
          <div className="wheel-orbit" aria-hidden="true">
            <span>správný sed</span>
            <span>jistý pohyb</span>
          </div>
          <div className="hero-image-wrap">
            <img
              src="/hero.webp"
              width="1600"
              height="1100"
              alt="Člověk používající moderní invalidní vozík při běžném pohybu"
              fetchPriority="high"
            />
          </div>
          <p className="image-note">
            <strong>Pomůcka je součást dne.</strong>
            Proto ji vybíráme podle člověka, ne podle katalogu.
          </p>
        </div>
      </section>

      <section className="offer" id="nabidka" aria-labelledby="offer-title">
        <div className="section-heading">
          <p className="section-kicker">Pomůcky podle situace</p>
          <h2 id="offer-title">Od prvního kolečka po jistý krok.</h2>
          <p>
            Nemusíte znát přesný název ani kód pomůcky. Stačí vědět, co vám
            dnes komplikuje pohyb — vhodné možnosti projdeme společně.
          </p>
        </div>

        <div className="offer-layout">
          <figure className="offer-image">
            <img
              src="/section-1.webp"
              width="1200"
              height="900"
              loading="lazy"
              alt="Detail konstrukce a ovládacích prvků moderního invalidního vozíku"
            />
            <figcaption>
              <span>Výběr v praxi</span>
              Rozměry, opora, ovládání i způsob přesunu musí fungovat společně.
            </figcaption>
          </figure>

          <div className="category-list">
            {categories.map((category) => (
              <article className="category" key={category.label}>
                <p className="category-label">{category.label}</p>
                <h3>{category.title}</h3>
                <p>{category.text}</p>
                <small>{category.meta}</small>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="guidance" id="poradenstvi" aria-labelledby="guidance-title">
        <div className="guidance-media">
          <img
            src="/section-2.webp"
            width="1200"
            height="900"
            loading="lazy"
            alt="Odborná konzultace při nastavování ortopedické pomůcky"
          />
          <div className="experience-badge">
            <strong>30+</strong>
            <span>let zkušeností na českém trhu</span>
          </div>
        </div>

        <div className="guidance-content">
          <p className="section-kicker">Poradenství v Českých Budějovicích</p>
          <h2 id="guidance-title">Nejdřív nasloucháme. Potom nastavujeme.</h2>
          <p className="guidance-intro">
            Správná pomůcka není jen model a velikost. Záleží na diagnóze,
            síle, stabilitě, prostoru doma i na tom, co chcete zvládat sami.
          </p>

          <ol className="process-list">
            <li>
              <span>01</span>
              <div>
                <h3>Probereme váš den</h3>
                <p>Co potřebujete zvládnout, kde se pohybujete a kdo vám pomáhá.</p>
              </div>
            </li>
            <li>
              <span>02</span>
              <div>
                <h3>Pomůcku vyzkoušíte</h3>
                <p>Porovnáme vhodné varianty a nastavíme sed, opory i ovládání.</p>
              </div>
            </li>
            <li>
              <span>03</span>
              <div>
                <h3>Zařídíme další péči</h3>
                <p>Pomůžeme s ePoukazem, půjčením, servisem i pozdějším seřízením.</p>
              </div>
            </li>
          </ol>

          <div className="service-strip" id="epoukaz">
            <div>
              <p className="service-label">Máte ePoukaz?</p>
              <p>Identifikátor můžete předat online bez cesty na pobočku.</p>
            </div>
            <a className="button button-light" href="mailto:meyracr@meyragroup.com?subject=Uplatnění ePoukazu">
              Uplatnit ePoukaz <span aria-hidden="true">→</span>
            </a>
          </div>

          <p className="update-note">
            <span>7 poboček v ČR</span>
            <span>Půjčovna vozíků</span>
            <span>Servis a seřízení</span>
            <span>Informace ověřeny 07/2026</span>
          </p>
        </div>
      </section>
    </main>
  );
}
