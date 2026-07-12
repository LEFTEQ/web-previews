const services = [
  {
    code: "START",
    title: "Automotive marketing",
    text: "Kampaně pro dovozce, dealery, leasingové společnosti a pojišťovny — od uvedení modelu po podporu prodeje na pobočkách."
  },
  {
    code: "LIVE",
    title: "Eventy a sportovní akce",
    text: "Navrhneme formát, zajistíme místo, produkci, hosty i prezentaci značky. Firemní den i turnaj dostanete připravený na klíč."
  },
  {
    code: "REACH",
    title: "Online kampaně",
    text: "PPC, display a sociální sítě spojujeme do kampaně, která má jasné publikum, rozpočet a měřitelný výsledek."
  },
  {
    code: "BRAND",
    title: "Reklama a dárky",
    text: "Od návrhu kreativního konceptu po výrobu propagačních předmětů, prémiových firemních dárků a materiálů pro prodejní síť."
  }
];

export default function HomePage() {
  return (
    <main>
      <section className="hero" id="nahoru">
        <img
          className="hero__image"
          src="/hero.webp"
          alt="Automobil v profesionálně připravené reklamní scéně Agentury 3K"
        />
        <div className="hero__shade" aria-hidden="true" />

        <header className="site-head">
          <a className="wordmark" href="#nahoru" aria-label="Agentura 3K — úvod">
            <span className="wordmark__three">3</span>
            <span className="wordmark__k">K</span>
            <span className="wordmark__name">agentura</span>
          </a>
          <nav className="site-nav" aria-label="Hlavní navigace">
            <a href="#sluzby">Co zařídíme</a>
            <a href="#zkusenost">Proč 3K</a>
          </nav>
          <a className="head-call" href="tel:+420603549549">Zavolat</a>
        </header>

        <div className="hero__content">
          <p className="eyebrow">Reklamní agentura · Pardubice</p>
          <h1>Vaše značka.<br /><span>Na plný výkon.</span></h1>
          <p className="hero__lead">
            Přes 20 let tvoříme kampaně pro automobilový trh. Strategii, produkci,
            event i online komunikaci řídíme jako jeden sehraný tým.
          </p>
          <div className="hero__actions">
            <a className="button button--orange" href="mailto:michael@agentura3k.com?subject=Poptávka%20kampaně">Popsat zadání</a>
            <a className="text-link" href="#sluzby">Prohlédnout služby <span aria-hidden="true">↓</span></a>
          </div>
        </div>

        <div className="track-line" aria-hidden="true">
          <span>strategie</span><i /><span>produkce</span><i /><span>výsledek</span>
        </div>
      </section>

      <section className="services" id="sluzby" aria-labelledby="services-title">
        <div className="section-intro">
          <p className="eyebrow eyebrow--blue">Marketingový mix na jednom místě</p>
          <h2 id="services-title">Od prvního briefu<br />až po cílovou rovinku.</h2>
          <p>
            Nemusíte koordinovat několik dodavatelů. Vy určíte cíl, my sestavíme správnou
            kombinaci disciplín a pohlídáme každý výstup.
          </p>
        </div>

        <div className="services__visual">
          <img
            src="/section-1.webp"
            alt="Produkční tým připravuje automobilovou prezentaci pro klienta"
          />
          <span className="visual-tag">Pardubice / realizace po celé ČR</span>
        </div>

        <div className="service-list">
          {services.map((service) => (
            <article className="service" key={service.code}>
              <span className="service__code">{service.code}</span>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="trust" id="zkusenost" aria-labelledby="trust-title">
        <div className="trust__image-wrap">
          <img
            src="/section-2.webp"
            alt="Detail realizace značkové akce Agentury 3K"
          />
          <div className="experience-stamp" aria-label="Více než 20 let zkušeností">
            <strong>20+</strong>
            <span>let v oboru</span>
          </div>
        </div>

        <div className="trust__copy">
          <p className="eyebrow eyebrow--orange">Partner, který zná váš segment</p>
          <h2 id="trust-title">Rozumíme autům.<br />A hlavně lidem,<br />kteří je kupují.</h2>
          <p className="trust__lead">
            Známe tempo dealerství, požadavky importérů i důležitost detailu při živé akci.
            Každá zakázka má u nás konkrétního člověka, který drží termín, rozpočet i kvalitu.
          </p>

          <dl className="proof-grid">
            <div>
              <dt>Specializace</dt>
              <dd>Automobilový trh</dd>
            </div>
            <div>
              <dt>Rozsah</dt>
              <dd>Od strategie po výrobu</dd>
            </div>
            <div>
              <dt>Zázemí</dt>
              <dd>Luční 296, Pardubice</dd>
            </div>
            <div>
              <dt>Společnost</dt>
              <dd>IČO 25933370</dd>
            </div>
          </dl>

          <figure className="quote">
            <blockquote>
              „Žádná zakázka pro nás není příliš malá ani příliš velká. Důležitý je cíl,
              ke kterému společně míříme.“
            </blockquote>
            <figcaption>Agentura 3K · reklamní full service</figcaption>
          </figure>
        </div>
      </section>
    </main>
  );
}
