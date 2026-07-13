const services = [
  {
    title: "Najdeme konkrétní vůz",
    text: "Podle rozpočtu, výbavy a způsobu používání vyhledáme vhodné vozy u značkových prodejců a servisních partnerů v Německu.",
  },
  {
    title: "Prověříme stav i historii",
    text: "Ještě před koupí kontrolujeme původ, servisní záznamy, deklarovaný stav a dostupné údaje o vozidle. Víte, pro co jedeme.",
  },
  {
    title: "Přivezeme a připravíme",
    text: "Zařídíme dovoz do Brna, technickou prohlídku, registraci i předání. Na přání pomůžeme také s financováním a pojištěním.",
  },
];

export default function Home() {
  return (
    <main>
      <section className="hero" aria-labelledby="hero-title">
        <img
          className="hero__image"
          src="/hero.webp"
          alt="Tmavý prémiový automobil připravený k individuálnímu dovozu"
        />
        <div className="hero__shade" aria-hidden="true" />

        <header className="site-header">
          <a className="wordmark" href="#top" aria-label="Auto Vision – úvod">
            <span>AUTO</span>
            <span className="wordmark__cut">VISION</span>
          </a>

          <nav className="site-nav" aria-label="Hlavní navigace">
            <a href="#dovoz">Dovoz na zakázku</a>
            <a href="#jistota">Jak vůz prověřujeme</a>
          </nav>

          <a className="header-contact" href="tel:+420777115577">
            <span className="header-contact__label">Prodej · Brno</span>
            <span>777 115 577</span>
          </a>
        </header>

        <div className="hero__content" id="top">
          <p className="eyebrow">Individuální dovoz vozů z Německa</p>
          <h1 id="hero-title">
            Nevybírejte z nabídky.
            <span>Vyberte si auto.</span>
          </h1>
          <p className="hero__intro">
            Najdeme, prověříme a dovezeme vůz, který odpovídá vašim požadavkům — od ověřeného prodejce až k předání v Brně.
          </p>
          <div className="hero__actions">
            <a className="button button--primary" href="tel:+420777115577">
              Zavolat kvůli dovozu
              <span aria-hidden="true">↗</span>
            </a>
            <a className="text-link" href="mailto:PRODEJ@AUTO-VISION.CZ">
              PRODEJ@AUTO-VISION.CZ
            </a>
          </div>
        </div>

        <div className="vin-strip" aria-label="Co je součástí dovozu">
          <span className="vin-strip__code" aria-hidden="true">WBA · DE → BRNO</span>
          <span>Prověření historie</span>
          <span>Kontrola stavu</span>
          <span>Registrace v ČR</span>
        </div>
      </section>

      <section className="services" id="dovoz" aria-labelledby="services-title">
        <div className="section-heading">
          <p className="eyebrow eyebrow--dark">Od zadání po české značky</p>
          <h2 id="services-title">Dovoz bez slepých míst.</h2>
          <p>
            Nemusíte objíždět bazary ani řešit německou administrativu. Celý postup držíme v jedněch rukou a o každém důležitém kroku víte předem.
          </p>
        </div>

        <div className="services__visual">
          <img
            src="/section-1.webp"
            alt="Detail vozu při odborné kontrole před dovozem"
          />
          <div className="inspection-card">
            <span className="inspection-card__label">Kontrolní list</span>
            <strong>Prověřeno před koupí</strong>
            <div><span>Původ a historie</span><b>✓</b></div>
            <div><span>Servisní záznamy</span><b>✓</b></div>
            <div><span>Stav vozidla</span><b>✓</b></div>
          </div>
        </div>

        <div className="services__list">
          {services.map((service, index) => (
            <article className="service" key={service.title}>
              <span className="service__index">{String(index + 1).padStart(2, "0")}</span>
              <div>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="trust" id="jistota" aria-labelledby="trust-title">
        <div className="trust__image-wrap">
          <img
            src="/section-2.webp"
            alt="Prověřený automobil při předání zákazníkovi v Brně"
          />
          <span className="trust__location">Brno · Česká republika</span>
        </div>

        <div className="trust__content">
          <p className="eyebrow">Auto Vision s.r.o.</p>
          <h2 id="trust-title">Vůz vybíráme, jako bychom ho kupovali sobě.</h2>
          <p className="trust__lead">
            Nespoléháme jen na fotografie z inzerátu. Zaměřujeme se na vozy od značkových prodejců a servisních partnerů, ověřujeme dostupnou historii a před nákupem kontrolujeme skutečný stav.
          </p>

          <dl className="facts">
            <div>
              <dt>Odkud dovážíme</dt>
              <dd>Německo</dd>
            </div>
            <div>
              <dt>Kde vůz předáme</dt>
              <dd>Brno</dd>
            </div>
            <div>
              <dt>Co umíme zařídit</dt>
              <dd>STK, registraci, financování i pojištění</dd>
            </div>
          </dl>

          <div className="direct-contact">
            <p>Máte už vyhlédnutý konkrétní vůz?</p>
            <a href="tel:+420777115577">Probrat ho s námi · 777 115 577</a>
          </div>
        </div>
      </section>
    </main>
  );
}
