export default function Page() {
  const services = [
    {
      label: "Daně",
      title: "Daňové poradenství bez nejistoty",
      text: "Připravíme přiznání, posoudíme konkrétní rozhodnutí a zastoupíme vás při daňové kontrole. Řešíme také DPH a podnikání v EU.",
      note: "Přiznání · kontroly · mezinárodní daně",
    },
    {
      label: "Účetnictví",
      title: "Čísla pro úřad i pro vaše řízení",
      text: "Vedeme účetnictví v systémech HELIOS iNuvio a POHODA. Vedle zákonných povinností dostanete srozumitelný reporting pro každodenní rozhodování.",
      note: "Online i papírově · pravidelný reporting",
    },
    {
      label: "Mzdy",
      title: "Výplaty a povinnosti v jednom termínu",
      text: "Zpracujeme mzdy, přehledy a související agendu. Hlídáme návaznosti, aby zaměstnanci i instituce dostali vše správně a včas.",
      note: "Outsourcing · mzdy online",
    },
  ];

  return (
    <main className="kodap-page">
      <title>KODAP HK | Daňové poradenství v Hradci Králové</title>
      <meta
        name="description"
        content="Daňové poradenství, účetnictví, mzdy a reporting pro firmy z Hradce Králové i celé České republiky. KODAP HK za svou práci profesně a právně ručí."
      />

      <section className="hero" aria-labelledby="hero-title">
        <header className="site-header">
          <a className="wordmark" href="#top" aria-label="KODAP Hradec Králové – úvod">
            <span className="wordmark-main">KODAP</span>
            <span className="wordmark-place">Hradec Králové</span>
          </a>

          <nav className="site-nav" aria-label="Hlavní navigace">
            <a href="#sluzby">Služby</a>
            <a href="#jistota">Proč KODAP HK</a>
          </nav>

          <a className="header-phone" href="tel:+420727883225">
            <span>Zavolat kanceláři</span>
            727 883 225
          </a>
        </header>

        <div className="hero-grid" id="top">
          <div className="hero-copy">
            <p className="eyebrow">Daňová kancelář · Eliščino nábřeží</p>
            <h1 id="hero-title">
              Čísla sedí.
              <span>Vy můžete jít dál.</span>
            </h1>
            <p className="hero-lead">
              Daně, účetnictví a mzdy pro firmy, které chtějí mít v povinnostech jasno — a ve svých číslech oporu pro další rozhodnutí.
            </p>
            <div className="hero-actions">
              <a className="primary-action" href="tel:+420727883225">
                Probrat situaci
                <span aria-hidden="true">↗</span>
              </a>
              <a className="text-action" href="mailto:hk@kodap.cz">
                hk@kodap.cz
              </a>
            </div>
            <p className="hero-proof">
              <span aria-hidden="true">✓</span>
              Více než 10 let v regionu, zázemí celorepublikové skupiny
            </p>
          </div>

          <div className="hero-visual">
            <div className="image-frame">
              <img
                src="/hero.webp"
                alt="Tým daňové kanceláře KODAP HK při práci nad firemními podklady"
              />
              <div className="ledger-lines" aria-hidden="true" />
            </div>
            <div className="verified-mark" aria-label="Profesionálně ověřeno">
              <span className="check" aria-hidden="true">✓</span>
              <span>
                odborně
                <strong>ověřeno</strong>
              </span>
            </div>
            <div className="visual-caption">
              <span>Kancelář HK</span>
              <strong>50°12′ N / 15°50′ E</strong>
            </div>
          </div>
        </div>
      </section>

      <section className="services" id="sluzby" aria-labelledby="services-title">
        <div className="section-heading">
          <p className="eyebrow">Co převezmeme</p>
          <h2 id="services-title">Jedna kancelář pro souvislosti mezi daněmi a účetnictvím.</h2>
          <p>
            Nemusíte vysvětlovat stejnou situaci několika dodavatelům. Vidíme celek, hlídáme návaznosti a řekneme vám, co konkrétně potřebujeme.
          </p>
        </div>

        <div className="services-layout">
          <div className="services-image">
            <img
              src="/section-1.webp"
              alt="Daňová poradkyně KODAP HK kontroluje účetní doklady a výkazy"
              loading="lazy"
            />
            <p>
              <span>Specializace kanceláře</span>
              Reporting pro čerpací stanice a retailové sítě
            </p>
          </div>

          <div className="service-list">
            {services.map((service) => (
              <article className="service-card" key={service.label}>
                <p className="service-label">{service.label}</p>
                <div>
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                  <small>{service.note}</small>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="trust" id="jistota" aria-labelledby="trust-title">
        <div className="trust-image">
          <img
            src="/section-2.webp"
            alt="Osobní konzultace s daňovou poradkyní v hradecké kanceláři"
            loading="lazy"
          />
          <div className="responsibility-tag">
            <span>Na rozdíl od běžné účetní firmy</span>
            Za svou práci profesně a právně ručíme.
          </div>
        </div>

        <div className="trust-copy">
          <p className="eyebrow">Jistota v praxi</p>
          <h2 id="trust-title">Když přijde složitá situace, nezůstanete na ni sami.</h2>
          <p className="trust-intro">
            Zastoupíme vás před správcem daně, dohledáme souvislosti a navrhneme další krok srozumitelně — bez slovníku plného paragrafů.
          </p>

          <dl className="facts">
            <div>
              <dt>Zastupitelnost</dt>
              <dd>Vaši agendu zná tým, ne jediný člověk.</dd>
            </div>
            <div>
              <dt>Technologie</dt>
              <dd>HELIOS iNuvio, POHODA a bezpečná online spolupráce.</dd>
            </div>
            <div>
              <dt>Dosah</dt>
              <dd>Hradec Králové i klienti z celé České republiky.</dd>
            </div>
          </dl>

          <blockquote>
            <p>„Překážky jsou od toho, aby zastavily ostatní — ne nás.“</p>
            <footer>
              <strong>Iva Pevná</strong>
              <span>jednatelka KODAP HK</span>
            </footer>
          </blockquote>
        </div>
      </section>
    </main>
  );
}
