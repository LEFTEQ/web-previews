export default function Page() {
  const services = [
    {
      name: "Dentální hygiena",
      text: "Odstraníme zubní kámen a povlak, zkontrolujeme dásně a ukážeme vám techniku, která dává smysl právě pro váš chrup.",
      tag: "Prevence kazu a zánětu",
    },
    {
      name: "AirFlow",
      text: "Jemný proud vody, vzduchu a prášku šetrně odstraní pigmentace od kávy, čaje i kouření — včetně hůře dostupných míst.",
      tag: "Šetrné odstranění pigmentací",
    },
    {
      name: "Bělení zubů",
      text: "Nejdřív ověříme stav zubů a dásní. Potom doporučíme bezpečný postup pro přirozeně světlejší odstín bez zbytečných experimentů.",
      tag: "Individuální plán bělení",
    },
  ];

  const visit = [
    {
      number: "01",
      title: "Podíváme se",
      text: "Zhodnotíme zuby, dásně, citlivá místa i to, jak o chrup pečujete doma.",
    },
    {
      number: "02",
      title: "Důkladně vyčistíme",
      text: "Odstraníme kámen, povlak a podle potřeby také pigmentace pomocí AirFlow.",
    },
    {
      number: "03",
      title: "Nastavíme péči doma",
      text: "Vybereme vhodnou velikost mezizubních pomůcek a ukážeme vám, jak je používat.",
    },
  ];

  return (
    <>
      <title>Denti Dent | Dentální hygiena v Hradci Králové</title>
      <meta
        name="description"
        content="Dentální hygiena, AirFlow a bělení zubů v Hradci Králové. Šetrná péče, srozumitelné vysvětlení a konkrétní plán domácí prevence."
      />
      <meta property="og:title" content="Denti Dent — dentální hygiena v Hradci Králové" />
      <meta
        property="og:description"
        content="Čisté zuby bez pocitu spěchu. Dentální hygiena, AirFlow a bělení zubů."
      />
      <meta property="og:image" content="/hero.webp" />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="cs_CZ" />

      <main className="dd-site">
        <section className="dd-hero" aria-labelledby="hero-title">
          <header className="dd-header">
            <a className="dd-wordmark" href="#zacatek" aria-label="Denti Dent — úvod">
              <span>DENTI</span>
              <span>DENT</span>
              <i aria-hidden="true" />
            </a>

            <nav className="dd-nav" aria-label="Hlavní navigace">
              <a href="#pece">Péče</a>
              <a href="#navsteva">Průběh návštěvy</a>
            </nav>

            <a className="dd-call dd-call--header" href="tel:+420605805589">
              <span className="dd-call-icon" aria-hidden="true">↗</span>
              <span>Zavolat</span>
            </a>
          </header>

          <div className="dd-hero-grid" id="zacatek">
            <div className="dd-hero-copy">
              <p className="dd-kicker">
                <span>Hradec Králové</span>
                <span>Dentální hygiena</span>
              </p>
              <h1 id="hero-title">
                Pigmentace
                <span>pryč.</span>
                <em>Pocit čistých zubů zůstává.</em>
              </h1>
              <p className="dd-lead">
                Šetrně odstraníme kámen, povlak i zabarvení. A hlavně vám ukážeme, jak si výsledek udržet bez složitých pouček.
              </p>
              <div className="dd-hero-actions">
                <a className="dd-primary" href="tel:+420605805589">
                  Objednat se telefonicky
                  <span aria-hidden="true">↗</span>
                </a>
                <a className="dd-text-link" href="#pece">Prohlédnout péči</a>
              </div>
            </div>

            <figure className="dd-hero-visual">
              <div className="dd-clean-sweep" aria-hidden="true">
                <span>AIR</span>
                <span>FLOW</span>
              </div>
              <img
                src="/hero.webp"
                width="1400"
                height="1120"
                alt="Dentální hygienistka při šetrném čištění zubů v ordinaci"
                fetchPriority="high"
              />
              <figcaption>
                <span>Jemné čištění</span>
                <strong>bez zbytečného spěchu</strong>
              </figcaption>
            </figure>
          </div>
        </section>

        <section className="dd-care" id="pece" aria-labelledby="care-title">
          <div className="dd-section-heading">
            <p className="dd-kicker">Co pro vás uděláme</p>
            <h2 id="care-title">Péče, kterou poznáte jazykem i v zrcadle.</h2>
            <p>
              Nejde jen o hladší povrch zubů. Pravidelná hygiena pomáhá předcházet kazu, zánětu dásní a problémům, které později vyžadují složitější léčbu.
            </p>
          </div>

          <div className="dd-care-layout">
            <div className="dd-care-image">
              <img
                src="/section-1.webp"
                width="1200"
                height="1500"
                loading="lazy"
                alt="Detail profesionálního vybavení pro dentální hygienu"
              />
              <span className="dd-image-note">Přesnost místo tlaku</span>
            </div>

            <div className="dd-service-list">
              {services.map((service) => (
                <article className="dd-service" key={service.name}>
                  <h3>{service.name}</h3>
                  <p>{service.text}</p>
                  <span>{service.tag}</span>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="dd-visit" id="navsteva" aria-labelledby="visit-title">
          <div className="dd-visit-image">
            <img
              src="/section-2.webp"
              width="1400"
              height="1100"
              loading="lazy"
              alt="Světlá a moderně vybavená ordinace Denti Dent"
            />
            <div className="dd-location-card">
              <span>Ordinace</span>
              <strong>Hradec Králové</strong>
              <a href="mailto:info@dentident.cz">info@dentident.cz</a>
            </div>
          </div>

          <div className="dd-visit-content">
            <p className="dd-kicker">Vaše první návštěva</p>
            <h2 id="visit-title">Budete vědět, co děláme a proč.</h2>
            <p className="dd-visit-intro">
              Citlivé dásně ani delší pauza od poslední hygieny nejsou důvod k obavám. Postup přizpůsobíme vám a každý krok předem vysvětlíme.
            </p>

            <ol className="dd-steps">
              {visit.map((step) => (
                <li key={step.number}>
                  <span>{step.number}</span>
                  <div>
                    <h3>{step.title}</h3>
                    <p>{step.text}</p>
                  </div>
                </li>
              ))}
            </ol>

            <div className="dd-trust-note">
              <span aria-hidden="true">✓</span>
              <p>
                <strong>Odcházíte s konkrétním plánem.</strong>
                Žádná univerzální doporučení — pomůcky i interval další návštěvy volíme podle vašeho chrupu.
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
