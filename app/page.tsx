const services = [
  {
    code: "230 V",
    title: "Elektroinstalace",
    text: "Nové rozvody i rekonstrukce elektroinstalace v bytech, rodinných domech a menších kancelářích.",
  },
  {
    code: "EZS",
    title: "Bezpečí pod kontrolou",
    text: "Zabezpečovací a kamerové systémy, domovní telefony i videotelefony navržené pro konkrétní prostor.",
  },
  {
    code: "LED",
    title: "Osvětlení bez kompromisů",
    text: "Úsporné LED osvětlení od návrhu rozmístění až po čistou montáž a správné nastavení intenzity.",
  },
  {
    code: "LXN",
    title: "Inteligentní domácnost",
    text: "Řízení světel, vytápění, stínění a zabezpečení pomocí systému LOXONE v jednom přehledném řešení.",
  },
];

const process = [
  {
    number: "01",
    title: "Probereme zadání",
    text: "Po telefonu nebo na místě zjistíme rozsah práce, stav rozvodů a vaše priority.",
  },
  {
    number: "02",
    title: "Připravíme kalkulaci",
    text: "Předem víte, co budeme dělat, jaké prvky použijeme a kolik bude realizace stát.",
  },
  {
    number: "03",
    title: "Zapojíme a otestujeme",
    text: "Práci provedeme v dohodnutém termínu, vše vyzkoušíme a zajistíme také odbornou revizi.",
  },
  {
    number: "04",
    title: "Předáme hotové dílo",
    text: "Ukážeme vám ovládání, předáme dokumentaci a místo po montáži necháme uklizené.",
  },
];

export default function Page() {
  return (
    <main className="mika-site">
      <section className="hero" aria-labelledby="hero-title">
        <img
          className="hero__image"
          src="/hero.webp"
          alt="Elektrikář při přesné montáži moderní elektroinstalace"
        />
        <div className="hero__shade" aria-hidden="true" />

        <header className="site-header">
          <a className="wordmark" href="#zacatek" aria-label="Elektro Mika – úvod">
            <span>ELEKTRO</span>
            <strong>M<span className="wordmark__live">I</span>KA</strong>
          </a>

          <nav className="site-nav" aria-label="Hlavní navigace">
            <a href="#sluzby">Služby</a>
            <a href="#prubeh">Jak pracujeme</a>
          </nav>

          <a className="header-phone" href="tel:+420608850380">
            <span>Objednávky a konzultace</span>
            +420 608 850 380
          </a>
        </header>

        <div className="hero__content" id="zacatek">
          <p className="eyebrow">
            <span className="status-dot" aria-hidden="true" />
            Elektroinstalace · Praha a okolí
          </p>
          <h1 id="hero-title">
            Elektřina,
            <br />
            která ví,
            <br />
            <em>co má dělat.</em>
          </h1>
          <p className="hero__lead">
            Od zásuvky po chytrý dům. Navrhneme, zapojíme a otestujeme kompletní
            elektroinstalaci pro váš byt, dům nebo kancelář.
          </p>
          <div className="hero__actions">
            <a className="button button--primary" href="tel:+420608850380">
              Zavolat elektrikáři
              <span aria-hidden="true">↗</span>
            </a>
            <a className="text-link" href="#sluzby">
              Prohlédnout služby
              <span aria-hidden="true">↓</span>
            </a>
          </div>
        </div>

        <div className="hero__proof" aria-label="Základní informace">
          <div>
            <strong>Od roku 2012</strong>
            <span>zkušenosti v oboru</span>
          </div>
          <div>
            <strong>Praha + okolí</strong>
            <span>výjezd po domluvě</span>
          </div>
          <div>
            <strong>Včetně revize</strong>
            <span>certifikovaný technik</span>
          </div>
        </div>

        <div className="cable-route" aria-hidden="true">
          <span className="cable-route__pulse" />
        </div>
      </section>

      <section className="services" id="sluzby" aria-labelledby="services-title">
        <div className="section-heading">
          <p className="section-label">Co zapojíme</p>
          <h2 id="services-title">Jeden partner pro silnoproud, bezpečí i chytré řízení.</h2>
          <p>
            Řešení skládáme podle prostoru a způsobu, jakým ho používáte. Žádné
            zbytečné prvky, žádné nejasné položky v nabídce.
          </p>
        </div>

        <div className="services__layout">
          <figure className="services__visual">
            <img
              src="/section-1.webp"
              alt="Detail profesionálně zapojeného elektrického rozvaděče"
              loading="lazy"
            />
            <figcaption>
              <span>Čisté vedení</span>
              Přehledné zapojení se lépe kontroluje, servisuje i rozšiřuje.
            </figcaption>
          </figure>

          <div className="service-list">
            {services.map((service) => (
              <article className="service-card" key={service.code}>
                <span className="service-card__code">{service.code}</span>
                <div>
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                </div>
                <span className="service-card__terminal" aria-hidden="true" />
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="trust" id="prubeh" aria-labelledby="trust-title">
        <div className="trust__intro">
          <div className="section-heading section-heading--light">
            <p className="section-label">Od prvního hovoru po revizi</p>
            <h2 id="trust-title">Domluva, která drží stejně jako naše spoje.</h2>
          </div>

          <figure className="trust__image">
            <img
              src="/section-2.webp"
              alt="Elektrikář kontroluje dokončenou instalaci měřicím přístrojem"
              loading="lazy"
            />
            <figcaption>Každou instalaci před předáním proměříme a vyzkoušíme.</figcaption>
          </figure>
        </div>

        <div className="process" aria-label="Průběh spolupráce">
          {process.map((step) => (
            <article className="process__step" key={step.number}>
              <span className="process__number">{step.number}</span>
              <div>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="trust__bottom">
          <blockquote>
            <p>
              „Firmu jsem vyzkoušela – velmi rychlé a kvalitní služby. Děkuji za
              dobře odvedenou práci.“
            </p>
            <cite>Hana · zákaznice Elektro Mika</cite>
          </blockquote>

          <div className="company-note">
            <span>Elektro Mika s.r.o.</span>
            <p>
              Pražská elektroinstalační firma založená v roce 2012. Pracujeme v
              bytech, rodinných domech a menších kancelářích po Praze i v okolí.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
