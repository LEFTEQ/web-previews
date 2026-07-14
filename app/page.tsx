const services = [
  {
    title: "Rizikové kácení",
    text: "Strom u domu, vedení nebo silnice rozebereme po částech a spustíme na lanech do bezpečného prostoru.",
    tag: "výškové práce",
  },
  {
    title: "Péče o stromy",
    text: "Navrhneme zdravotní, bezpečnostní i redukční řez. Korunu odlehčíme tak, aby strom zůstal stabilní a vitální.",
    tag: "odborný řez",
  },
  {
    title: "Zahrady a firemní zeleň",
    text: "Postaráme se o pravidelnou údržbu, živé ploty, výsadbu i obnovu zanedbaných ploch v Ostravě a okolí.",
    tag: "pravidelná péče",
  },
  {
    title: "Ovocné stromy",
    text: "Řez přizpůsobíme druhu, stáří i kondici stromu. Cílem je zdravá koruna, dostatek světla a dobrá úroda.",
    tag: "zahrady a sady",
  },
];

export default function Home() {
  return (
    <main>
      <section className="hero" aria-labelledby="hero-title">
        <header className="site-header">
          <a className="wordmark" href="#nahoru" aria-label="Doubek a vnuci – úvod">
            <span className="wordmark-crown">DOUBEK</span>
            <span className="wordmark-line">a vnuci · arboristika</span>
          </a>

          <nav className="hero-nav" aria-label="Hlavní navigace">
            <a href="#sluzby">Co umíme</a>
            <a href="#bezpeci">Jak pracujeme</a>
          </nav>

          <a className="phone-link" href="tel:+420705505500">
            <span>Prohlídka zdarma</span>
            +420 705 505 500
          </a>
        </header>

        <div className="hero-grid" id="nahoru">
          <div className="hero-copy">
            <p className="eyebrow">Arboristé z Ostravy</p>
            <h1 id="hero-title">
              Strom dolů.
              <span>Bez škody kolem.</span>
            </h1>
            <p className="hero-lead">
              Rizikové kácení, odborné řezy a péče o zeleň tam, kde nestačí motorovka a odvaha. Nejdřív strom prohlédneme, potom navrhneme bezpečný postup.
            </p>
            <div className="hero-actions">
              <a className="primary-button" href="tel:+420705505500">Zavolat arboristovi</a>
              <a className="text-link" href="#sluzby">Prohlédnout služby <span aria-hidden="true">↓</span></a>
            </div>
          </div>

          <div className="hero-visual" aria-label="Arborista pracuje v koruně stromu">
            <div className="rope" aria-hidden="true"><span /></div>
            <div className="hero-image-wrap">
              <img src="/hero.webp" alt="Arborista jištěný lanem při práci v koruně vysokého stromu" />
            </div>
            <div className="cut-note">
              <span>Než řežeme</span>
              <strong>vidíme celý dopad</strong>
            </div>
          </div>
        </div>

        <div className="hero-checks" aria-label="Co posuzujeme před zásahem">
          <p>Kontrola před řezem</p>
          <ul>
            <li><span>Koruna</span> stav větví</li>
            <li><span>Kmen</span> stabilita</li>
            <li><span>Okolí</span> bezpečný prostor</li>
          </ul>
        </div>
      </section>

      <section className="services" id="sluzby" aria-labelledby="services-title">
        <div className="section-heading">
          <p className="eyebrow">Práce v koruně i na zemi</p>
          <h2 id="services-title">Co potřebuje váš strom?</h2>
          <p>Řekněte nám, co vás trápí. Na místě poznáme, zda stačí citlivý řez, stabilizace, nebo je bezpečnější strom postupně odstranit.</p>
        </div>

        <div className="services-layout">
          <figure className="service-image">
            <img src="/section-1.webp" alt="Detail odborného řezu větve prováděného arboristou" />
            <figcaption>Správný řez respektuje stavbu i další růst stromu.</figcaption>
          </figure>

          <div className="service-list">
            {services.map((service) => (
              <article className="service-item" key={service.title}>
                <p>{service.tag}</p>
                <h3>{service.title}</h3>
                <span>{service.text}</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="trust" id="bezpeci" aria-labelledby="trust-title">
        <div className="trust-image">
          <img src="/section-2.webp" alt="Tým arboristů Doubek a vnuci připravuje lana a vybavení k bezpečné práci" />
          <div className="insurance-badge">
            <small>Pojištění odpovědnosti</small>
            <strong>20 mil. Kč</strong>
          </div>
        </div>

        <div className="trust-copy">
          <p className="eyebrow">Bezpečí není slogan</p>
          <h2 id="trust-title">Lano, pila a hlavně správné rozhodnutí.</h2>
          <p className="trust-intro">Pracujeme pro majitele zahrad, firmy, obce i města v Moravskoslezském kraji. Každou zakázku začínáme prohlídkou zdarma a srozumitelným návrhem řešení.</p>

          <dl className="proof-list">
            <div>
              <dt>Prohlídka na místě</dt>
              <dd>Zdarma posoudíme strom, přístup, okolní stavby i způsob spuštění dřeva.</dd>
            </div>
            <div>
              <dt>Jasná cena předem</dt>
              <dd>Nabídku přizpůsobíme rozsahu práce. Víte, co uděláme a kolik to bude stát.</dd>
            </div>
            <div>
              <dt>Ostrava a okolí</dt>
              <dd>Nejčastěji vyjíždíme po celém Moravskoslezském kraji, větší projekty zvládáme i dál.</dd>
            </div>
          </dl>

          <blockquote>„Rychle“ pro nás znamená bez zbytečných prostojů. Ne bez rozmyslu.</blockquote>
        </div>
      </section>
    </main>
  );
}
