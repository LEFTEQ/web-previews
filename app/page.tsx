export default function Page() {
  const services = [
    {
      title: "Nahlásit poruchu",
      text: "Voda, topení, výtah nebo závada ve společných prostorách.",
      link: "mailto:info@osbdkamenicka.cz?subject=Hlášení poruchy",
      action: "Napsat správě",
    },
    {
      title: "Vyúčtování služeb",
      text: "Podklady k platbám, nájemnému a službám spojeným s užíváním jednotky.",
      link: "mailto:info@osbdkamenicka.cz?subject=Dotaz k vyúčtování služeb",
      action: "Zeptat se na vyúčtování",
    },
    {
      title: "Dokumenty domu",
      text: "Úřední deska, sazebníky, výpočtové listy a materiály pro SVJ a bytová družstva.",
      link: "#sprava",
      action: "Zjistit, co připravit",
    },
  ];

  return (
    <>
      <title>OSBD Kamenická | Správa domů na Liberecku</title>
      <meta
        name="description"
        content="Technická, ekonomická a administrativní správa bytových domů, družstev a SVJ v Liberci a okolí. Poruchy, vyúčtování i dokumenty na jednom místě."
      />
      <meta property="og:title" content="OSBD Kamenická — správa domů na Liberecku" />
      <meta
        property="og:description"
        content="Dům má fungovat každý den. OSBD Kamenická zajišťuje technickou i ekonomickou správu bytových domů v Liberci a okolí."
      />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="/hero.webp" />

      <a className="skip-link" href="#obsah">
        Přeskočit na obsah
      </a>

      <main className="osbd-page" id="obsah">
        <section className="hero" aria-labelledby="hero-title">
          <header className="topbar">
            <a className="wordmark" href="#obsah" aria-label="OSBD Kamenická, úvodní stránka">
              <span className="wordmark-mark" aria-hidden="true">
                <i />
                <i />
                <i />
              </span>
              <span>
                <strong>OSBD</strong>
                <small>Kamenická · Liberec</small>
              </span>
            </a>

            <nav className="main-nav" aria-label="Hlavní navigace">
              <a href="#sluzby">Co vyřídit</a>
              <a href="#sprava">Jak spravujeme</a>
              <a href="mailto:info@osbdkamenicka.cz">Napsat nám</a>
            </nav>

            <a className="topbar-phone" href="tel:+420910119471">
              <span>Havárie mimo pracovní dobu</span>
              <strong>910 119 471</strong>
            </a>
          </header>

          <div className="hero-layout">
            <div className="hero-copy">
              <p className="eyebrow">Správa bytových domů · Liberecko</p>
              <h1 id="hero-title">
                Dům má
                <span>fungovat.</span>
                Každý den.
              </h1>
              <p className="hero-intro">
                Technické závady, vyúčtování i rozhodnutí domu řešíme s lidmi, kteří znají místní objekty — ne přes anonymní centrálu.
              </p>
              <div className="hero-actions" aria-label="Rychlé kontakty">
                <a className="button button-primary" href="tel:+420910119471">
                  Nahlásit havárii
                </a>
                <a className="button button-secondary" href="tel:+420485130366">
                  Zavolat správě
                </a>
              </div>
              <p className="emergency-note">
                Havarijní linka slouží výhradně pro poruchy a havárie mimo pracovní dobu.
              </p>
            </div>

            <figure className="hero-visual">
              <img
                src="/hero.webp"
                alt="Bytový dům ve správě družstva na Liberecku"
                width="1600"
                height="1200"
                fetchPriority="high"
                decoding="async"
              />
              <div className="building-index" aria-label="Vrstvy správy bytového domu">
                <span><b>04</b> střecha</span>
                <span><b>03</b> společné prostory</span>
                <span><b>02</b> byty a služby</span>
                <span><b>01</b> technické zázemí</span>
              </div>
              <figcaption>
                <span>Kamenická 1213</span>
                <span>Liberec 6</span>
              </figcaption>
            </figure>
          </div>
        </section>

        <section className="services" id="sluzby" aria-labelledby="services-title">
          <div className="section-heading">
            <p className="eyebrow">Nejčastěji potřebujete</p>
            <h2 id="services-title">Vyřídit věc kolem domu bez bloudění.</h2>
            <p>Vyberte situaci podle toho, co právě řešíte. Ozvete se rovnou správnému směru.</p>
          </div>

          <div className="services-layout">
            <figure className="section-image service-image">
              <img
                src="/section-1.webp"
                alt="Technická kontrola bytového domu spravovaného OSBD Kamenická"
                width="1200"
                height="900"
                loading="lazy"
                decoding="async"
              />
              <figcaption>Technický stav domu sledujeme v souvislostech, ne až ve chvíli poruchy.</figcaption>
            </figure>

            <div className="service-list">
              {services.map((service) => (
                <article className="service-row" key={service.title}>
                  <div>
                    <h3>{service.title}</h3>
                    <p>{service.text}</p>
                  </div>
                  <a href={service.link}>
                    {service.action}
                    <span aria-hidden="true">↗</span>
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="management" id="sprava" aria-labelledby="management-title">
          <div className="management-layout">
            <div className="management-copy">
              <p className="eyebrow">Družstvo, které zná konstrukci domu</p>
              <h2 id="management-title">Správa není jen účetnictví.</h2>
              <p className="management-lead">
                Dlouholeté zkušenosti se stavebně-technickou správou pomáhají předcházet drahým improvizacím. Pro bytová družstva a SVJ propojujeme provoz domu, finance i potřebné podklady.
              </p>

              <dl className="management-scope">
                <div>
                  <dt>Technická správa</dt>
                  <dd>Kontroly, opravy, revize, výtahy a koordinace dodavatelů.</dd>
                </div>
                <div>
                  <dt>Ekonomika domu</dt>
                  <dd>Předpisy plateb, evidence nájemného a vyúčtování služeb.</dd>
                </div>
                <div>
                  <dt>Podpora výborů</dt>
                  <dd>Podklady pro rozhodování SVJ, dokumentace a výkon funkce předsedy.</dd>
                </div>
              </dl>

              <div className="local-proof" aria-label="Oblast působnosti">
                <span>Liberec</span>
                <span>Chrastava</span>
                <span>Frýdlant</span>
                <span>Liberecko</span>
              </div>
            </div>

            <figure className="section-image management-image">
              <img
                src="/section-2.webp"
                alt="Detail bytového domu a jeho technických prvků na Liberecku"
                width="1200"
                height="1500"
                loading="lazy"
                decoding="async"
              />
              <figcaption>
                <strong>Osobně v Liberci</strong>
                <span>Kamenická 1213, 460 06 Liberec 6</span>
                <span>485 130 366 · 482 360 741</span>
              </figcaption>
            </figure>
          </div>
        </section>
      </main>
    </>
  );
}
