export default function HomePage() {
  const services = [
    {
      code: "LCD",
      title: "Displej, panty a šasi",
      text: "Vyměníme prasklý panel, klávesnici, panty i poškozené části notebooku Acer, HP nebo Asus.",
      detail: "Výměna po přesném ověření dílu",
    },
    {
      code: "PCB",
      title: "Základní deska a napájení",
      text: "Vadnou desku nejdřív proměříme. Když to dává smysl, opravíme ji na úrovni součástek místo drahé výměny.",
      detail: "Diagnostika závady zdarma",
    },
    {
      code: "SSD",
      title: "Pomalý počítač a systém",
      text: "Vyčistíme chlazení, odstraníme viry, nainstalujeme systém nebo zrychlíme počítač vhodným SSD diskem.",
      detail: "Notebooky i stolní počítače",
    },
  ];

  return (
    <>
      <meta
        name="description"
        content="Pražský servis notebooků a počítačů EGOS CZ. Diagnostika zdarma, opravy základních desek, výměny displejů, čištění a zrychlení počítačů."
      />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="robots" content="index, follow" />
      <meta property="og:title" content="EGOS CZ — servis notebooků v Praze" />
      <meta
        property="og:description"
        content="Nejdřív závadu proměříme. Potom doporučíme opravu, která dává smysl."
      />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="/hero.webp" />

      <header className="site-header">
        <a className="wordmark" href="#uvod" aria-label="EGOS CZ — na úvod stránky">
          <span className="wordmark-main">EGOS</span>
          <span className="wordmark-chip">CZ</span>
          <span className="wordmark-sub">servis výpočetní techniky</span>
        </a>

        <nav className="site-nav" aria-label="Hlavní navigace">
          <a href="#opravy">Co opravujeme</a>
          <a href="#servis">Jak servis funguje</a>
        </nav>

        <a className="header-phone" href="tel:+420773950970">
          <span aria-hidden="true">●</span>
          773 950 970
        </a>
      </header>

      <main>
        <section className="hero" id="uvod" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow">
              <span>Praha 5</span>
              <span>Notebooky &amp; počítače</span>
            </p>

            <h1 id="hero-title">
              Nehá­dáme.
              <span>Proměříme.</span>
            </h1>

            <p className="hero-lead">
              Notebook rozebereme, najdeme skutečnou příčinu závady a řekneme vám, jestli se oprava vyplatí. Diagnostiku máte zdarma.
            </p>

            <div className="hero-actions">
              <a className="button button-primary" href="tel:+420773950970">
                Zavolat do servisu
                <span aria-hidden="true">↗</span>
              </a>
              <a className="button button-secondary" href="#opravy">
                Najít svou závadu
              </a>
            </div>

            <dl className="hero-facts" aria-label="Základní informace o servisu">
              <div>
                <dt>Diagnostika</dt>
                <dd>zdarma</dd>
              </div>
              <div>
                <dt>Pondělí–čtvrtek</dt>
                <dd>od 9:00</dd>
              </div>
              <div>
                <dt>Servis</dt>
                <dd>Praha 5</dd>
              </div>
            </dl>
          </div>

          <div className="hero-visual">
            <div className="device-frame">
              <span className="frame-screw screw-one" aria-hidden="true" />
              <span className="frame-screw screw-two" aria-hidden="true" />
              <img
                src="/hero.webp"
                alt="Technik při přesné diagnostice otevřeného notebooku v servisu EGOS CZ"
                width="960"
                height="1120"
              />
              <div className="diagnostic-strip" aria-hidden="true">
                <span>NAPÁJENÍ</span>
                <i />
                <span>DESKA</span>
                <i />
                <span>CHLAZENÍ</span>
              </div>
            </div>
            <p className="visual-note">
              <span aria-hidden="true">⌁</span>
              Opravy na úrovni součástek, když výměna celé desky nedává smysl.
            </p>
          </div>
        </section>

        <section className="services section-shell" id="opravy" aria-labelledby="services-title">
          <div className="section-intro">
            <p className="section-label">Na pracovním stole</p>
            <h2 id="services-title">Od prasklého displeje po závadu na desce.</h2>
            <p>
              Přineste zařízení i nabíječku. Podle projevů závady zvolíme měření, ověříme dostupnost dílů a domluvíme další postup.
            </p>
          </div>

          <div className="services-image">
            <img
              src="/section-1.webp"
              alt="Detail rozebraného notebooku během opravy chlazení a základní desky"
              width="900"
              height="700"
              loading="lazy"
            />
            <span>ESD pracovní zóna</span>
          </div>

          <div className="service-list">
            {services.map((service) => (
              <article className="service-item" key={service.code}>
                <span className="service-code" aria-hidden="true">{service.code}</span>
                <div>
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                  <span className="service-detail">{service.detail}</span>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="trust section-shell" id="servis" aria-labelledby="trust-title">
          <div className="trust-image">
            <img
              src="/section-2.webp"
              alt="Servisní technik EGOS CZ kontroluje opravený notebook před předáním zákazníkovi"
              width="960"
              height="820"
              loading="lazy"
            />
            <div className="tested-badge" aria-hidden="true">
              <span>TEST</span>
              <strong>OK</strong>
            </div>
          </div>

          <div className="trust-content">
            <p className="section-label">Co čekat v servisu</p>
            <h2 id="trust-title">Opravu schválíte dřív, než začneme.</h2>
            <p className="trust-lead">
              Neplatíte za pokus. Po diagnostice vám popíšeme závadu, navrhneme řešení a sdělíme cenu. Teprve potom se rozhodnete.
            </p>

            <ol className="process-list">
              <li>
                <span>01</span>
                <div>
                  <h3>Převezmeme zařízení</h3>
                  <p>Zapíšeme projevy závady a vše, co potřebujeme zkontrolovat.</p>
                </div>
              </li>
              <li>
                <span>02</span>
                <div>
                  <h3>Najdeme příčinu</h3>
                  <p>Diagnostika je zdarma. Výsledek i cenu opravy vám vysvětlíme předem.</p>
                </div>
              </li>
              <li>
                <span>03</span>
                <div>
                  <h3>Opravíme a otestujeme</h3>
                  <p>Po opravě ověříme stabilitu, teploty, napájení a funkci měněných dílů.</p>
                </div>
              </li>
            </ol>

            <div className="contact-panel">
              <div>
                <span>Kde nás najdete</span>
                <strong>Fantova 1783/30, Praha 5</strong>
              </div>
              <div>
                <span>Pro domluvení návštěvy</span>
                <a href="mailto:info@servis-notebooku.com">info@servis-notebooku.com</a>
              </div>
              <a className="contact-call" href="tel:+420773950970" aria-label="Zavolat na číslo 773 950 970">
                Zavolat
                <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
