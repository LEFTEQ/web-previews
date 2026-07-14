export default function Page() {
  const services = [
    {
      label: "Průběžně",
      title: "Účetnictví bez dohánění restů",
      text: "Doklady zpracujeme v domluveném rytmu, aby bylo průběžně jasné, co je zaúčtované, co chybí a co vyžaduje rozhodnutí.",
    },
    {
      label: "V termínu",
      title: "Daně a povinná podání",
      text: "Pohlídáme návaznost účetnictví na daňové povinnosti a připravíme podklady i přiznání podle skutečné situace vaší firmy.",
    },
    {
      label: "Srozumitelně",
      title: "Odpověď místo účetní šifry",
      text: "Když potřebujete vědět, kolik můžete investovat nebo proč vyšla daň právě takto, dostanete konkrétní vysvětlení v běžné češtině.",
    },
  ];

  return (
    <>
      <title>Jihočeská daňová | Účetnictví v Českých Budějovicích</title>
      <meta
        name="description"
        content="Účetnictví a daňové poradenství pro firmy a podnikatele z Českých Budějovic a jižních Čech."
      />
      <meta property="og:title" content="Jihočeská daňová | V účtech musí všechno sedět" />
      <meta
        property="og:description"
        content="Průběžné účetnictví, daňová podání a srozumitelné odpovědi v Českých Budějovicích."
      />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="/hero.webp" />

      <main className="site-shell">
        <section className="hero" aria-labelledby="hero-title">
          <nav className="topbar" aria-label="Hlavní navigace">
            <a className="wordmark" href="#zacatek" aria-label="Jihočeská daňová – začátek stránky">
              <span className="wordmark-mark" aria-hidden="true">JČ</span>
              <span>Jihočeská<br />daňová</span>
            </a>
            <div className="topbar-links">
              <a href="#sluzby">S čím pomůžeme</a>
              <a href="#jistota">Kdo za účty odpovídá</a>
            </div>
            <a className="nav-call" href="tel:+420777143161">Zavolat</a>
          </nav>

          <div className="hero-grid" id="zacatek">
            <div className="hero-copy">
              <p className="eyebrow">Účetnictví · České Budějovice</p>
              <h1 id="hero-title">
                V účtech musí
                <span>všechno sedět.</span>
              </h1>
              <p className="hero-lead">
                Vy dodáte doklady. My z nich uděláme přehled, na který se dá spolehnout — při běžném rozhodování i v daňovém termínu.
              </p>
              <div className="hero-actions">
                <a className="primary-button" href="tel:+420777143161">Probrat moje účetnictví</a>
                <a className="text-link" href="mailto:vochozka@jih-danova.cz">Napsat e-mail</a>
              </div>
            </div>

            <div className="ledger-visual">
              <img
                src="/hero.webp"
                alt="Účetní doklady a pracovní stůl Jihočeské daňové"
              />
              <div className="ledger-strip" aria-hidden="true">
                <span>Má dáti</span>
                <span>Dal</span>
                <span>Rozdíl</span>
              </div>
              <div className="balance-note">
                <span>Kontrola zápisu</span>
                <strong>Souhlasí</strong>
              </div>
            </div>
          </div>

          <div className="hero-facts" aria-label="Rychlé kontaktní informace">
            <p><span>Telefon</span><a href="tel:+420777143161">+420 777 143 161</a></p>
            <p><span>Kancelář</span>U Tří lvů 297/10</p>
            <p><span>Pro koho</span>Firmy a podnikatelé z jižních Čech</p>
          </div>
        </section>

        <section className="services" id="sluzby" aria-labelledby="services-title">
          <div className="section-heading">
            <p className="eyebrow">Co budete mít pod kontrolou</p>
            <h2 id="services-title">Čísla, termíny i odpovědi na jednom místě.</h2>
            <p>
              Rozsah spolupráce nastavíme podle toho, jak vaše firma opravdu funguje. Bez balíčků plných položek, které nepotřebujete.
            </p>
          </div>

          <div className="services-layout">
            <div className="services-image">
              <img
                src="/section-1.webp"
                alt="Pečlivá kontrola účetních podkladů a dokladů"
                loading="lazy"
              />
              <p>Doklad → kontrola → zaúčtování → přehled</p>
            </div>
            <div className="service-list">
              {services.map((service) => (
                <article className="service-item" key={service.title}>
                  <p className="service-label">{service.label}</p>
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="trust" id="jistota" aria-labelledby="trust-title">
          <div className="trust-image">
            <img
              src="/section-2.webp"
              alt="Kancelář Jihočeské daňové v Českých Budějovicích"
              loading="lazy"
            />
            <div className="address-tab">
              <span>České Budějovice 6</span>
              <strong>U Tří lvů 297/10</strong>
            </div>
          </div>

          <div className="trust-copy">
            <p className="eyebrow">Odpovědnost má konkrétní jméno</p>
            <h2 id="trust-title">Vaše účetnictví nezmizí v anonymní podatelně.</h2>
            <p className="trust-intro">
              Za odbornou stránku spolupráce odpovídá Václav Vochozka, daňový poradce. Jihočeská daňová je vedena v evidenci Komory daňových poradců ČR.
            </p>

            <dl className="credentials">
              <div>
                <dt>Odpovědný poradce</dt>
                <dd>Václav Vochozka</dd>
              </div>
              <div>
                <dt>Evidence KDP ČR</dt>
                <dd>5 let</dd>
              </div>
              <div>
                <dt>IČO</dt>
                <dd>49017578</dd>
              </div>
              <div>
                <dt>Datová schránka</dt>
                <dd>hqxdwck</dd>
              </div>
            </dl>

            <p className="local-note">
              Jsme v Budějovicích a známe rytmus zdejších menších firem: sezónní provozy, rodinné společnosti i živnostníky, kteří potřebují vědět, na čem jsou dřív než na konci roku.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
