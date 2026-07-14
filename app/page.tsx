export default function Page() {
  const categories = [
    {
      label: "Obývací pokoj",
      title: "Sedačka, na kterou se těšíte domů",
      text: "Vyzkoušejte si různé hloubky sedu, tuhosti i potahy. Vybrané sedačky jsou připravené k rychlému odběru.",
      note: "Sedačky • křesla • stolky"
    },
    {
      label: "Kuchyně",
      title: "Kuchyně navržená pro váš prostor",
      text: "Od prvního zaměření po výběr pracovní desky. V olomouckém studiu s vámi sladíme dispozici, materiály i rozpočet.",
      note: "Návrh • zaměření • montáž"
    },
    {
      label: "Ložnice",
      title: "Postel vybíraná podle těla, ne tabulky",
      text: "Porovnejte matrace, rošty a úložná řešení osobně. Pomůžeme vám sestavit ložnici, která dobře vypadá a ještě lépe funguje.",
      note: "Postele • matrace • skříně"
    }
  ];

  return (
    <main className="nejci-page">
      <section className="hero" aria-labelledby="hero-title">
        <img
          className="hero__image"
          src="/hero.webp"
          alt="Interiér se současnou sedací soupravou z nabídky NEJČI nábytek"
          width="1920"
          height="1280"
          loading="eager"
          fetchPriority="high"
        />
        <div className="hero__shade" aria-hidden="true" />

        <header className="site-head">
          <a className="wordmark" href="#zacatek" aria-label="NEJČI nábytek – úvod">
            <span className="wordmark__main">NEJČI</span>
            <span className="wordmark__sub">nábytek</span>
          </a>

          <nav className="site-nav" aria-label="Hlavní navigace">
            <a href="#nabidka">Co vybíráte</a>
            <a href="#olomouc">Olomouc</a>
          </nav>

          <a className="head-call" href="tel:+420553622685">
            <span>Poradíme po telefonu</span>
            +420 553 62 26 85
          </a>
        </header>

        <div className="hero__content" id="zacatek">
          <p className="eyebrow">Český nábytek od roku 1994 · Olomouc</p>
          <h1 id="hero-title">
            Nejdřív si
            <span>sedněte.</span>
          </h1>
          <p className="hero__lead">
            Pohodlí se z fotografie poznat nedá. Přijeďte si sedačku, židli i matraci opravdu vyzkoušet — a vyberte nábytek, který bude fungovat každý den.
          </p>
          <div className="hero__actions">
            <a className="button button--primary" href="#olomouc">Naplánovat návštěvu</a>
            <a className="button button--quiet" href="#nabidka">Projít nabídku</a>
          </div>
        </div>

        <div className="swatch-fan" aria-hidden="true">
          <div className="swatch swatch--wood"><span>ořech</span></div>
          <div className="swatch swatch--blue"><span>modrá tkanina</span></div>
          <div className="swatch swatch--coral"><span>akcent</span></div>
          <div className="swatch__pin" />
        </div>

        <p className="hero__caption">Dotknout se materiálu. Porovnat odstín. Sednout si.</p>
      </section>

      <section className="offer" id="nabidka" aria-labelledby="offer-title">
        <div className="section-intro">
          <p className="eyebrow eyebrow--dark">Vybavení pro skutečný domov</p>
          <h2 id="offer-title">Jeden pokoj po druhém.</h2>
          <p>
            Nevybíráte položku v katalogu. Skládáte místo, kde budete snídat, odpočívat i vítat návštěvy. Proto řešíme rozměry, materiál a každodenní provoz společně.
          </p>
        </div>

        <div className="offer__visual">
          <img
            src="/section-1.webp"
            alt="Zařízený obývací prostor s nábytkem a sladěnými materiály"
            width="1500"
            height="1125"
            loading="lazy"
          />
          <div className="material-note">
            <span className="material-note__line" />
            <p><strong>Vezměte si vzorek domů.</strong> Barva potahu vypadá jinak v showroomu a jinak u vašeho okna.</p>
          </div>
        </div>

        <div className="category-list">
          {categories.map((category) => (
            <article className="category" key={category.label}>
              <p className="category__label">{category.label}</p>
              <h3>{category.title}</h3>
              <p>{category.text}</p>
              <span className="category__note">{category.note}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="trust" id="olomouc" aria-labelledby="trust-title">
        <div className="trust__image-wrap">
          <img
            src="/section-2.webp"
            alt="Detail kvalitně zpracovaného nábytku v olomouckém showroomu"
            width="1500"
            height="1200"
            loading="lazy"
          />
          <p className="image-stamp">Vyzkoušeno<br />v Olomouci</p>
        </div>

        <div className="trust__content">
          <p className="eyebrow eyebrow--light">NEJČI DESIGN Olomouc</p>
          <h2 id="trust-title">Nábytek má vydržet déle než nadšení z nákupu.</h2>
          <p className="trust__lead">
            Jsme česká firma založená 1. června 1994. Za tu dobu jsme zjistili, kde se vyplatí připlatit, co zvládne rodinný provoz a jak poznat pohodlnou sedačku dřív, než ji odvezete domů.
          </p>

          <dl className="facts">
            <div>
              <dt>Najdete nás</dt>
              <dd>Nákupní park Haná<br />OC Park&amp;Shop Olomouc</dd>
            </div>
            <div>
              <dt>Co můžete čekat</dt>
              <dd>Osobní vyzkoušení, pomoc s výběrem a nábytek ihned k odběru</dd>
            </div>
            <div>
              <dt>Jistota po nákupu</dt>
              <dd>Doživotní servis a garance nejnižší ceny</dd>
            </div>
          </dl>

          <div className="trust__contact">
            <a href="tel:+420553622685">Zavolat do NEJČI <span>+420 553 62 26 85</span></a>
            <a href="mailto:info@nejcinabytek.cz">Napsat e-mail <span>info@nejcinabytek.cz</span></a>
          </div>
        </div>
      </section>
    </main>
  );
}
