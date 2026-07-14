export default function Page() {
  const services = [
    {
      title: "Vstupní dentální hygiena",
      text: "Zmapujeme stav dásní, odstraníme zubní kámen a pigmentace a ukážeme vám péči přesně pro váš chrup. Bez univerzálních pouček."
    },
    {
      title: "Pravidelná péče",
      text: "Při dalších návštěvách kontrolujeme riziková místa, dočistíme povrchy a upravíme postup podle toho, co se od minula změnilo."
    },
    {
      title: "Péče o citlivé dásně",
      text: "Krvácení, citlivost ani parodontální potíže nepřehlížíme. Hygienu můžeme navázat na péči stomatologa a parodontologa přímo v D.C.M Klinice."
    }
  ];

  const visit = [
    {
      title: "Nejdřív se podíváme",
      text: "Projdeme dásně, mezizubní prostory, zubní kámen i místa, která se doma obtížně čistí."
    },
    {
      title: "Šetrně vyčistíme",
      text: "Odstraníme nánosy a pigmentace s ohledem na citlivost vašich zubů a aktuální stav dásní."
    },
    {
      title: "Domů s jasným postupem",
      text: "Vybereme vhodnou velikost mezizubních pomůcek a ukážeme techniku, kterou zvládnete každý den."
    }
  ];

  return (
    <main className="dcm-page">
      <section className="hero" aria-labelledby="hero-title">
        <header className="site-header">
          <a className="wordmark" href="#top" aria-label="D.C.M Hygiena, začátek stránky">
            <span className="wordmark-main">d·c·m</span>
            <span className="wordmark-sub">dentální hygiena</span>
          </a>

          <nav className="main-nav" aria-label="Hlavní navigace">
            <a href="#pece">Péče</a>
            <a href="#navsteva">Jak návštěva probíhá</a>
          </nav>

          <a className="header-phone" href="tel:+420495515517">
            <span>Objednání</span>
            495 515 517
          </a>
        </header>

        <div className="hero-grid" id="top">
          <div className="hero-copy">
            <p className="eyebrow">Soukromá klinika · Hradec Králové</p>
            <h1 id="hero-title">Čistý pocit začíná tam, kam kartáček nedosáhne.</h1>
            <p className="hero-lead">
              Dentální hygiena bez spěchu a bez kárání. Společně najdeme způsob péče,
              který dává smysl vašim zubům i vašemu běžnému dni.
            </p>
            <div className="hero-actions">
              <a className="primary-button" href="tel:+420495515517">Zavolat na recepci</a>
              <a className="text-link" href="#pece">Zjistit, s čím pomůžeme</a>
            </div>
            <p className="hero-address">V Kopečku 76/10 · centrum Hradce Králové</p>
          </div>

          <figure className="hero-visual">
            <div className="mirror-image">
              <img
                src="/hero.webp"
                alt="Detail profesionální dentální hygieny v D.C.M Klinice"
              />
            </div>
            <span className="mirror-ring" aria-hidden="true" />
            <span className="mirror-handle" aria-hidden="true" />
            <figcaption>
              <span>Pod kontrolou</span>
              zuby · dásně · mezizubní prostory
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="care-section" id="pece" aria-labelledby="care-title">
        <div className="section-heading">
          <p className="eyebrow">Péče podle skutečného nálezu</p>
          <h2 id="care-title">Nejde jen o hladké zuby. Jde o zdravé prostředí kolem nich.</h2>
        </div>

        <div className="care-layout">
          <figure className="section-photo section-photo-tall">
            <img
              src="/section-1.webp"
              alt="Dentální hygienistka při šetrném ošetření pacienta"
            />
            <figcaption>Klidné ošetření s průběžným vysvětlením</figcaption>
          </figure>

          <div className="service-list">
            {services.map((service) => (
              <article className="service-item" key={service.title}>
                <span className="service-dot" aria-hidden="true" />
                <div>
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                </div>
              </article>
            ))}
            <p className="care-note">
              Díky zázemí soukromé stomatologické kliniky lze nález řešit v souvislostech —
              od radiodiagnostiky po parodontologii a implantologii.
            </p>
          </div>
        </div>
      </section>

      <section className="visit-section" id="navsteva" aria-labelledby="visit-title">
        <div className="visit-layout">
          <div className="visit-content">
            <p className="eyebrow">Vaše návštěva v D.C.M</p>
            <h2 id="visit-title">Víte, co právě děláme a proč.</h2>
            <p className="visit-intro">
              Každý chrup potřebuje trochu jinou péči. Proto nejprve posloucháme,
              potom vyšetříme a teprve pak čistíme.
            </p>

            <ol className="visit-steps">
              {visit.map((step, index) => (
                <li key={step.title}>
                  <span className="step-number">{String(index + 1).padStart(2, "0")}</span>
                  <div>
                    <h3>{step.title}</h3>
                    <p>{step.text}</p>
                  </div>
                </li>
              ))}
            </ol>

            <div className="clinic-facts" aria-label="Praktické informace">
              <div>
                <span>Kde nás najdete</span>
                <strong>V Kopečku 76/10, Hradec Králové</strong>
              </div>
              <div>
                <span>Recepce</span>
                <a href="tel:+420495515517">495 515 517</a>
              </div>
            </div>
          </div>

          <figure className="section-photo visit-photo">
            <img
              src="/section-2.webp"
              alt="Moderní a klidné prostředí D.C.M Kliniky v Hradci Králové"
            />
            <figcaption>
              <span>D.C.M Klinika</span>
              Soukromá stomatologická péče v centru města
            </figcaption>
          </figure>
        </div>
      </section>
    </main>
  );
}
