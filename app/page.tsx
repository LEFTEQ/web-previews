export default function Page() {
  const services = [
    {
      title: "Kytice na míru",
      text: "Řekněte nám příležitost, barevnost a rozpočet. Uvážeme kytici, která nebude působit jako hotový kus z regálu.",
      detail: "Osobní vyzvednutí i rozvoz po Praze",
    },
    {
      title: "Svatby a oslavy",
      text: "Navrhneme osobní kytici, výzdobu stolů i květinové instalace tak, aby spolu prostor, sezóna a květiny opravdu ladily.",
      detail: "Návrh, příprava i instalace",
    },
    {
      title: "Firmy a hotely",
      text: "Pravidelně proměňujeme recepce, restaurace a kanceláře čerstvými vazbami, které respektují charakter interiéru.",
      detail: "Jednorázově nebo v pravidelném režimu",
    },
  ];

  return (
    <main className="flower-page">
      <section className="hero" aria-labelledby="hero-title">
        <header className="site-header">
          <a className="wordmark" href="#zacatek" aria-label="Květiny Za oponou – začátek stránky">
            <span>Květiny</span>
            <strong>Za oponou</strong>
          </a>

          <nav className="main-nav" aria-label="Hlavní navigace">
            <a href="#sluzby">Co vážeme</a>
            <a href="#atelier">Ateliér</a>
            <a className="nav-call" href="tel:+420272700367">Zavolat</a>
          </nav>
        </header>

        <div className="hero-grid" id="zacatek">
          <div className="hero-copy">
            <p className="eyebrow">Květinový ateliér · Václavské náměstí</p>
            <h1 id="hero-title">Květiny, které vstoupí do místnosti první.</h1>
            <p className="hero-lead">
              Vážeme osobité kytice a tvoříme dekorace z čerstvých i stabilizovaných květin. V centru Prahy, přímo v Paláci Fénix.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="tel:+420272700367">Objednat kytici</a>
              <a className="text-link" href="#sluzby">Prohlédnout nabídku <span aria-hidden="true">↓</span></a>
            </div>
          </div>

          <figure className="hero-media">
            <img
              src="/hero.webp"
              alt="Výrazná sezónní kytice z ateliéru Květiny Za oponou"
              width="1200"
              height="1500"
              fetchPriority="high"
            />
            <figcaption>
              <span>Dnešní obsazení</span>
              Sezónní květy, každý den jinak
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="services" id="sluzby" aria-labelledby="services-title">
        <div className="section-heading">
          <p className="eyebrow">Z našeho pracovního stolu</p>
          <h2 id="services-title">Pro malá gesta i celé scény.</h2>
          <p>Každou zakázku skládáme podle člověka, místa a ročního období. Hotový rukopis, ne hotová šablona.</p>
        </div>

        <div className="services-layout">
          <div className="service-list">
            {services.map((service) => (
              <article className="service-item" key={service.title}>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
                <span>{service.detail}</span>
              </article>
            ))}
          </div>

          <figure className="section-image service-image">
            <img
              src="/section-1.webp"
              alt="Floristka připravuje ručně vázanou kytici z čerstvých květin"
              width="1200"
              height="1400"
              loading="lazy"
            />
            <figcaption>Kytice vzniká až podle vašeho přání.</figcaption>
          </figure>
        </div>
      </section>

      <section className="atelier" id="atelier" aria-labelledby="atelier-title">
        <div className="atelier-grid">
          <figure className="section-image atelier-image">
            <img
              src="/section-2.webp"
              alt="Květiny a přírodní dekorace v pražském ateliéru Za oponou"
              width="1200"
              height="1450"
              loading="lazy"
            />
          </figure>

          <div className="atelier-copy">
            <p className="eyebrow">Za oponou, ale přímo v centru</p>
            <h2 id="atelier-title">Zastavte se cestou přes Václavák.</h2>
            <p className="atelier-intro">
              V ateliéru můžete vybírat očima, vůní i dotykem. Vedle řezaných květin u nás najdete sezónní aranže, věnce a květy ze záhonů Panské zahrady.
            </p>

            <dl className="visit-details">
              <div>
                <dt>Kde nás najdete</dt>
                <dd>Palác FÉNIX<br />Václavské náměstí 802/56<br />Praha 1</dd>
              </div>
              <div>
                <dt>Letní otevírací doba</dt>
                <dd>Po–Pá 9.00–19.00<br />So 10.00–19.00<br />Ne zavřeno</dd>
              </div>
            </dl>

            <div className="contact-line">
              <a href="tel:+420272700367">+420 272 700 367</a>
              <a href="mailto:obchod@kvetinyzaoponou.cz">obchod@kvetinyzaoponou.cz</a>
            </div>

            <blockquote>
              „Květiny vybíráme podle sezóny a vážeme tak, aby byla každá kytice trochu neopakovatelná.“
            </blockquote>
          </div>
        </div>
      </section>
    </main>
  );
}
