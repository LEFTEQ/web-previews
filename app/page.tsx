export default function Page() {
  const services = [
    {
      title: "Sekční vrata",
      text: "Úsporné řešení pro rodinné garáže. Vybereme skladbu panelu, povrch i vedení podle prostoru pod stropem."
    },
    {
      title: "Rolovací vrata",
      text: "Když potřebujete nechat strop volný. Hliníkové lamely se svinou nad otvorem a nezabírají místo uvnitř garáže."
    },
    {
      title: "Pohon a servis",
      text: "Dodáme pohon, bezpečnostní prvky i ovládání. Starší zařízení v Brně a okolí také opravujeme a seřizujeme."
    }
  ];

  const process = [
    ["01", "Zaměření", "Prověříme otvor, ostění, překlad i prostor pro vedení."],
    ["02", "Návrh", "Doporučíme typ vrat, pohon a ovládání pro váš provoz."],
    ["03", "Montáž", "Vrata osadíme, zapojíme a přesně nastavíme jejich chod."],
    ["04", "Předání", "Otestujeme bezpečnost a ukážeme vám obsluhu i údržbu."]
  ];

  return (
    <main id="top" className="site-shell">
      <section className="hero" aria-labelledby="hero-title">
        <header className="topbar">
          <a className="wordmark" href="#top" aria-label="TECHNOPARK CZ, úvodní stránka">
            <span>TECHNO</span><strong>PARK</strong><small>CZ</small>
          </a>

          <nav className="main-nav" aria-label="Hlavní navigace">
            <a href="#vrata">Typy vrat</a>
            <a href="#realizace">Jak pracujeme</a>
            <a className="nav-phone" href="tel:+420541513029">Zavolat 541 513 029</a>
          </nav>
        </header>

        <div className="hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Garážová vrata · Brno</p>
            <h1 id="hero-title">Vrata bez<br /><span>zaváhání.</span></h1>
            <p className="hero-lead">
              Navrhneme, namontujeme a seřídíme garážová vrata, která se každý den otevřou přesně tak, jak mají.
            </p>

            <div className="hero-actions">
              <a className="button button-primary" href="tel:+420541513029">Probrat nová vrata</a>
              <a className="text-link" href="#vrata">Vybrat řešení <span aria-hidden="true">↓</span></a>
            </div>

            <dl className="hero-details">
              <div>
                <dt>Provozovna</dt>
                <dd>Hudcova 78b, Brno–Královo Pole</dd>
              </div>
              <div>
                <dt>Otevřeno</dt>
                <dd>Po–Pá 7:00–15:30</dd>
              </div>
            </dl>
          </div>

          <figure className="door-figure">
            <div className="door-frame">
              <img
                src="/hero.webp"
                alt="Moderní garážová vrata v rodinném domě"
              />
              <span className="sensor-line" aria-hidden="true" />
              <span className="door-note">zaměřit · osadit · seřídit</span>
            </div>
            <figcaption>Řešení pro rodinné domy, bytové objekty i firemní provozy.</figcaption>
          </figure>
        </div>
      </section>

      <section id="vrata" className="services section-pad" aria-labelledby="services-title">
        <div className="section-heading">
          <p className="eyebrow">Co potřebujete zavřít?</p>
          <h2 id="services-title">Správná vrata začínají u prostoru, ne u katalogu.</h2>
          <p>
            Nejdřív zjistíme, jak garáž používáte. Teprve potom vybíráme konstrukci, vedení a pohon.
          </p>
        </div>

        <div className="services-layout">
          <figure className="section-image">
            <img
              src="/section-1.webp"
              alt="Detail lamel a přesného vedení garážových vrat"
              loading="lazy"
            />
            <figcaption>Panel, kolejnice, pružiny a pohon musí fungovat jako jeden celek.</figcaption>
          </figure>

          <div className="service-list">
            {services.map((service) => (
              <article className="service-item" key={service.title}>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="realizace" className="process section-pad" aria-labelledby="process-title">
        <div className="process-visual">
          <img
            src="/section-2.webp"
            alt="Technik kontroluje montáž garážových vrat"
            loading="lazy"
          />
          <div className="trust-plate">
            <strong>25 let</strong>
            <span>zkušeností s automatizací vrat a bran</span>
          </div>
        </div>

        <div className="process-content">
          <p className="eyebrow">Od otvoru k hotovým vratům</p>
          <h2 id="process-title">Montáž končí až tichým a bezpečným dojezdem.</h2>
          <p className="process-intro">
            TECHNOPARK je česká firma se servisním zázemím přímo v Brně. Za jedním návrhem stojí konzultace, příprava, montáž i následný servis.
          </p>

          <ol className="process-list">
            {process.map(([number, title, text]) => (
              <li key={number}>
                <span className="step-number">{number}</span>
                <div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </li>
            ))}
          </ol>

          <div className="service-trust">
            <span>Servis starších zařízení</span>
            <span>Technická podpora v češtině</span>
            <span>Záruční i pozáruční péče</span>
          </div>
        </div>
      </section>
    </main>
  );
}
