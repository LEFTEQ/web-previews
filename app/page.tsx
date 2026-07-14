export default function Page() {
  const services = [
    {
      label: "Pro firmy",
      title: "Vizitky, letáky a firemní tiskoviny",
      text: "Od malé série po pravidelné dodávky. Pomůžeme s přípravou dat, vybereme vhodný papír a hotové tiskoviny přivezeme.",
      detail: "digitál · ofset · zušlechtění",
    },
    {
      label: "Pro vydavatele",
      title: "Knihy, časopisy a brožury",
      text: "Tiskneme publikace od prvního archu po hotovou vazbu. Zvládneme šití, lepení, laminaci i parciální UV lak.",
      detail: "vazby V1 · V2 · V4 · V8",
    },
    {
      label: "Pro prodej",
      title: "Obaly, stojany a POP materiály",
      text: "Výrazné materiály do provozoven: obaly, skládačky, cedule i poutače s přesným výsekem, ražbou nebo slepotiskem.",
      detail: "výsek · ražba · slepotisk",
    },
  ];

  return (
    <main className="site-shell">
      <section className="hero" aria-labelledby="hero-title">
        <header className="topbar">
          <a className="wordmark" href="#nahore" aria-label="Garamon – úvodní stránka">
            <span className="wordmark-mark" aria-hidden="true">
              <i />
            </span>
            <span>Garamon</span>
          </a>

          <nav className="nav" aria-label="Hlavní navigace">
            <a href="#tiskneme">Co tiskneme</a>
            <a href="#garamon">Proč Garamon</a>
          </nav>

          <a className="top-contact" href="tel:+420602123495">
            <span>Zavolat do tiskárny</span>
            602 123 495
          </a>
        </header>

        <div className="hero-layout" id="nahore">
          <div className="hero-copy">
            <p className="eyebrow">Tiskárna a vydavatelství · Hradec Králové</p>
            <h1 id="hero-title">
              <span>Od archu</span>
              <span>po vazbu.</span>
              <span className="title-accent">V Hradci.</span>
            </h1>
            <p className="hero-lead">
              Tiskneme firemní materiály, knihy, časopisy i obaly. Data zkontrolujeme,
              výrobu pohlídáme a hotový náklad dovezeme tam, kde ho potřebujete.
            </p>
            <div className="hero-actions">
              <a
                className="button button-primary"
                href="mailto:lahucky@garamon.cz?subject=Poptávka%20tiskoviny"
              >
                Poptat tiskovinu
                <span aria-hidden="true">↗</span>
              </a>
              <span className="hero-note">Odpovídá František Lahučký</span>
            </div>
          </div>

          <div className="print-stage">
            <div className="sheet-meta" aria-hidden="true">
              <span>ARCH B1</span>
              <span>CMYK</span>
              <span>WONKOVA 432</span>
            </div>
            <figure className="hero-sheet">
              <img
                src="/hero.webp"
                alt="Tiskový arch ve výrobě tiskárny Garamon v Hradci Králové"
                width="1600"
                height="1120"
                fetchPriority="high"
              />
              <figcaption>
                <span>Kontrola soutisku</span>
                <span>Garamon · Hradec Králové</span>
              </figcaption>
              <span className="crop crop-tl" aria-hidden="true" />
              <span className="crop crop-tr" aria-hidden="true" />
              <span className="crop crop-bl" aria-hidden="true" />
              <span className="crop crop-br" aria-hidden="true" />
            </figure>
            <div className="proof-strip" aria-label="Tiskové barvy CMYK">
              <span className="proof-c">C</span>
              <span className="proof-m">M</span>
              <span className="proof-y">Y</span>
              <span className="proof-k">K</span>
            </div>
          </div>
        </div>
      </section>

      <section className="services" id="tiskneme" aria-labelledby="services-title">
        <div className="section-heading">
          <p className="eyebrow">Co pro vás vytiskneme</p>
          <h2 id="services-title">Správná technologie podle výsledku, ne podle zvyku.</h2>
          <p>
            Krátkou sérii vytiskneme digitálně, větší náklad ofsetem až do formátu B1.
            Papír, vazbu i zušlechtění navrhneme podle toho, jak bude tiskovina sloužit.
          </p>
        </div>

        <div className="services-layout">
          <figure className="section-image service-image">
            <img
              src="/section-1.webp"
              alt="Detail barevných tiskovin a papíru připravených v tiskárně Garamon"
              width="1200"
              height="1500"
              loading="lazy"
            />
            <figcaption>
              <span>Digitál do 330 × 1 200 mm</span>
              <span>Ofset do B1</span>
            </figcaption>
          </figure>

          <div className="service-list">
            {services.map((service) => (
              <article className="service-card" key={service.title}>
                <p className="service-label">{service.label}</p>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
                <span className="service-detail">{service.detail}</span>
              </article>
            ))}

            <a
              className="service-link"
              href="mailto:lahucky@garamon.cz?subject=Chci%20poradit%20s%20tiskovinou"
            >
              Popsat, co potřebuji vytisknout
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </section>

      <section className="trust" id="garamon" aria-labelledby="trust-title">
        <div className="trust-intro">
          <p className="eyebrow">Tiskneme v Hradci od roku 1997</p>
          <h2 id="trust-title">Za každým nákladem stojí konkrétní lidé.</h2>
          <p>
            Garamon založili zkušení polygrafové a tiskařské řemeslo tu předáváme dál.
            Desetičlenný tým drží zakázku pohromadě od kontroly podkladů po vlastní dopravu.
          </p>
        </div>

        <div className="trust-grid">
          <div className="local-story">
            <figure className="section-image story-image">
              <img
                src="/section-2.webp"
                alt="Knižní publikace o Hradci Králové vytištěná vydavatelstvím Garamon"
                width="1500"
                height="1125"
                loading="lazy"
              />
              <figcaption>Vydáváme také knihy, které uchovávají paměť Hradce Králové.</figcaption>
            </figure>

            <div className="book-list" aria-label="Vybrané hradecké publikace">
              <span>Encyklopedie města Hradce Králové</span>
              <span>Hradec Králové ve fotografii</span>
              <span>Architektura a urbanismus 1895–2009</span>
            </div>
          </div>

          <div className="facts">
            <article>
              <p className="fact-value">1997</p>
              <div>
                <h3>V oboru přes čtvrt století</h3>
                <p>Zkušenosti používáme hlavně tam, kde mohou předejít drahé chybě v nákladu.</p>
              </div>
            </article>
            <article>
              <p className="fact-value">10</p>
              <div>
                <h3>Stálých lidí v týmu</h3>
                <p>Zakázku řešíte přímo s člověkem, který zná výrobu i možnosti dokončení.</p>
              </div>
            </article>
            <article>
              <p className="fact-value">B1</p>
              <div>
                <h3>Čtyřbarvový ofset</h3>
                <p>Vedle digitálního tisku máme vlastní knihařské zpracování, výsek i UV lak.</p>
              </div>
            </article>
            <article>
              <p className="fact-value fact-pin" aria-hidden="true">⌖</p>
              <div>
                <h3>Wonkova 432, Hradec Králové</h3>
                <p>Výrobu máme pod jednou střechou a hotové tiskoviny rozvážíme vlastní dopravou.</p>
              </div>
            </article>
          </div>
        </div>

        <div className="content-stamp">
          <span>Aktuální nabídka</span>
          <strong>07 / 2026</strong>
          <span>Garamon s.r.o. · IČO 25278053</span>
        </div>
      </section>
    </main>
  );
}
