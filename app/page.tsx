export default function Page() {
  const categories = [
    { name: "Pracovní oděvy", detail: "Montérky, bundy, vesty a funkční vrstvy", mark: "ODĚV" },
    { name: "Bezpečnostní obuv", detail: "Pracovní boty podle provozu a rizika", mark: "OBUV" },
    { name: "Rukavice", detail: "Pro montáž, manipulaci i náročný provoz", mark: "RUCE" },
    { name: "Ochranné pomůcky", detail: "Přilby, brýle, respirátory a reflexní prvky", mark: "OOPP" },
  ];

  return (
    <main>
      <section className="hero" aria-labelledby="hero-title">
        <img
          className="hero__image"
          src="/hero.webp"
          alt="Pracovní oděvy a ochranné vybavení OMI Trade"
        />
        <div className="hero__shade" aria-hidden="true" />

        <header className="site-head">
          <a className="wordmark" href="#top" aria-label="OMI Trade — začátek stránky">
            <span className="wordmark__omi">OMI</span>
            <span className="wordmark__trade">trade</span>
            <span className="wordmark__city">České Budějovice</span>
          </a>
          <a className="head-phone" href="tel:+420720962444">
            <span>Poradíme s výběrem</span>
            +420 720 962 444
          </a>
        </header>

        <div className="hero__content" id="top">
          <p className="eyebrow">Oděvy a ochrana pro práci bez kompromisů</p>
          <h1 id="hero-title">
            Vybavení, které
            <span>drží směnu.</span>
          </h1>
          <p className="hero__lead">
            Vybereme pracovní oděvy, obuv a ochranné pomůcky podle vašeho provozu. Pro jednotlivce i celé firmy, s možností potisku vlastním logem.
          </p>
          <div className="hero__actions">
            <a className="button button--primary" href="tel:+420720962444">Zavolat pro nabídku</a>
            <a className="button button--quiet" href="#sortiment">Prohlédnout sortiment</a>
          </div>
          <p className="hero__note">Doprava zdarma při nákupu nad 2 000 Kč</p>
        </div>

        <div className="reflective-tape" aria-hidden="true">
          <span>ODĚV • OBUV • OCHRANA • POTISK •</span>
        </div>
      </section>

      <section className="assortment" id="sortiment" aria-labelledby="sortiment-title">
        <div className="section-intro">
          <p className="eyebrow eyebrow--blue">Vybavení podle skutečné práce</p>
          <h2 id="sortiment-title">Od bot až po přilbu.</h2>
          <p>
            Nemusíte se probírat stovkami podobných položek. Řeknete nám, kde a v čem pracujete, a společně vybereme účelnou výbavu v rozumné ceně.
          </p>
        </div>

        <div className="assortment__layout">
          <figure className="workwear-visual">
            <img
              src="/section-1.webp"
              alt="Detail pracovního oděvu z nabídky OMI Trade"
            />
            <figcaption>Odolné materiály, pohodlný střih, správná úroveň ochrany.</figcaption>
          </figure>

          <div className="category-list" aria-label="Hlavní kategorie sortimentu">
            {categories.map((category) => (
              <article className="category" key={category.name}>
                <span className="category__mark" aria-hidden="true">{category.mark}</span>
                <div>
                  <h3>{category.name}</h3>
                  <p>{category.detail}</p>
                </div>
              </article>
            ))}
            <div className="print-service">
              <span className="print-service__patch">VAŠE LOGO</span>
              <div>
                <h3>Firemní potisk textilu</h3>
                <p>Sjednotíme vzhled týmu a připravíme oděvy s vaším logem.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="trust" aria-labelledby="trust-title">
        <div className="trust__image-wrap">
          <img
            src="/section-2.webp"
            alt="Pracovní ochranné vybavení připravené pro zákazníka"
          />
          <div className="location-tag">
            <span>Provozovna</span>
            Čechova 727<br />České Budějovice
          </div>
        </div>

        <div className="trust__content">
          <p className="eyebrow eyebrow--yellow">Partner pro firmy i řemeslníky</p>
          <h2 id="trust-title">Neprodáváme naslepo.</h2>
          <p className="trust__lead">
            Správná pracovní výbava závisí na prostředí, pohybu i rizicích. Proto se nejdřív ptáme a teprve potom doporučujeme.
          </p>

          <div className="proof-grid">
            <article>
              <h3>Osobní výběr</h3>
              <p>Vyslechneme vaše potřeby a sestavíme nabídku na míru provozu i rozpočtu.</p>
            </article>
            <article>
              <h3>Po celé republice</h3>
              <p>Z Českých Budějovic přijedeme do vaší firmy v jižních Čechách i kdekoli v ČR.</p>
            </article>
            <article>
              <h3>Osvědčený sortiment</h3>
              <p>Vybíráme dostupné značky a produkty, které dávají smysl při každodenním používání.</p>
            </article>
          </div>

          <div className="direct-contact">
            <p>Potřebujete vybavit tým?</p>
            <a href="mailto:pavel.trnka@omi-trade.cz">pavel.trnka@omi-trade.cz</a>
          </div>
        </div>
      </section>
    </main>
  );
}
