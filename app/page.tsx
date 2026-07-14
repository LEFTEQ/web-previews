export default function Page() {
  const services = [
    {
      code: "SÍLA",
      title: "Osobní trénink",
      text: "Technika, zátěž a tempo podle vaší kondice. Každá lekce má jasný plán a navazuje na tu předchozí.",
      detail: "1 člověk · plná pozornost",
    },
    {
      code: "START",
      title: "První kroky ve fitku",
      text: "Projdeme základní pohyby i vybavení, nastavíme bezpečné váhy a zbavíme vás nejistoty z prvních návštěv.",
      detail: "vhodné pro úplné začátečníky",
    },
    {
      code: "POHYB",
      title: "Kondice a mobilita",
      text: "Spojíme silový trénink s pohyblivostí a kondicí, která se projeví při sportu, v práci i v běžném dni.",
      detail: "program podle vašeho cíle",
    },
  ];

  return (
    <main className="site-shell">
      <header className="hero" aria-labelledby="hero-title">
        <nav className="topbar" aria-label="Hlavní navigace">
          <a className="wordmark" href="#zacatek" aria-label="AZ Fitness — začátek stránky">
            <span className="wordmark-range">A—Z</span>
            <span className="wordmark-label">FITNESS · BRNO</span>
          </a>
          <a className="nav-link" href="#treninky">Vybrat trénink</a>
        </nav>

        <div className="hero-grid" id="zacatek">
          <div className="hero-copy">
            <p className="eyebrow">Osobní trenér · Brno</p>
            <h1 id="hero-title">
              Od prvního
              <span>opakování</span>
              po pohyb bez omezení.
            </h1>
            <p className="hero-lead">
              Trénink, ve kterém víte, co děláte a proč. Bez předvádění,
              bez univerzálních plánů — s vedením od A do Z.
            </p>
            <a className="primary-action" href="#treninky">
              Najít svůj trénink
              <span aria-hidden="true">↓</span>
            </a>
          </div>

          <div className="hero-visual">
            <img
              src="/hero.webp"
              alt="Osobní trenér vede klienta při silovém tréninku ve fitness centru"
            />
            <div className="range-mark" aria-hidden="true">
              <span>A</span>
              <i />
              <span>Z</span>
            </div>
            <p className="image-note">Technika / síla / kondice</p>
          </div>
        </div>
      </header>

      <section className="services" id="treninky" aria-labelledby="services-title">
        <div className="section-heading">
          <p className="eyebrow">Podle toho, kde právě jste</p>
          <h2 id="services-title">Trénink není trest. Je to dovednost.</h2>
          <p>
            Začneme vaším cílem, zkušenostmi a tím, jak se dnes hýbete.
            Teprve potom přijde plán.
          </p>
        </div>

        <div className="services-layout">
          <div className="services-image">
            <img
              src="/section-1.webp"
              alt="Detail správného úchopu činky při osobním tréninku"
            />
            <span className="photo-caption">Každé opakování má účel.</span>
          </div>

          <div className="service-list">
            {services.map((service) => (
              <article className="service-item" key={service.code}>
                <p className="service-code">{service.code}</p>
                <div>
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                  <span>{service.detail}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="trust" aria-labelledby="trust-title">
        <div className="trust-copy">
          <p className="eyebrow">Vedení místo dohledu</p>
          <h2 id="trust-title">Aby vám pohyb zůstal i mimo fitko.</h2>
          <p className="trust-intro">
            Cílem není udělat vás závislé na trenérovi. Naučíte se poznat
            správnou techniku, zvolit přiměřenou zátěž a rozumět vlastnímu pokroku.
          </p>

          <dl className="proof-list">
            <div>
              <dt>Na začátku</dt>
              <dd>Probereme cíl, zkušenosti a případná pohybová omezení.</dd>
            </div>
            <div>
              <dt>Při tréninku</dt>
              <dd>Vysvětlím provedení, opravím techniku a nastavím bezpečnou zátěž.</dd>
            </div>
            <div>
              <dt>Mezi lekcemi</dt>
              <dd>Víte, co můžete cvičit sami a podle čeho poznáte zlepšení.</dd>
            </div>
          </dl>

          <p className="local-note">
            <span>BRNO</span>
            Osobní vedení pro začátečníky i zkušené sportovce.
          </p>
        </div>

        <div className="trust-image">
          <img
            src="/section-2.webp"
            alt="Trenér kontroluje provedení cviku klienta v brněnském fitness centru"
          />
          <blockquote>
            „Nejdřív správný pohyb. Až potom větší váha.“
          </blockquote>
        </div>
      </section>
    </main>
  );
}
