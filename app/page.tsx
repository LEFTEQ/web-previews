const services = [
  {
    name: "Kompletní přezutí",
    detail: "Demontáž, obutí, vyvážení a nové gumové ventily.",
    price: "od 900 Kč",
  },
  {
    name: "Kontrola TPMS",
    detail: "Ověření snímačů tlaku profesionálním testerem.",
    price: "od 70 Kč",
  },
  {
    name: "Oprava pneumatiky",
    detail: "Posouzení poškození a bezpečná oprava, pokud je možná.",
    price: "od 200 Kč",
  },
  {
    name: "Kontrola brzd",
    detail: "Kapalina, destičky, kotouče i parkovací brzda.",
    price: "od 200 Kč",
  },
  {
    name: "Výměna oleje",
    detail: "Olej, filtr, těsnění a reset servisního intervalu.",
    price: "dle vozu",
  },
];

export default function Page() {
  return (
    <main className="site-shell">
      <section className="hero" aria-labelledby="hero-title">
        <img
          className="hero-image"
          src="/hero.webp"
          alt="Mechanik autoservisu AP-Auto Profi pracuje na voze v plzeňské dílně"
        />
        <div className="hero-shade" aria-hidden="true" />

        <header className="topbar">
          <a className="wordmark" href="#top" aria-label="AP-Auto Profi – začátek stránky">
            <span className="wordmark-ap">AP</span>
            <span className="wordmark-name">AUTO<br />PROFI</span>
          </a>
          <a className="top-phone" href="tel:800505090">
            <span>Poradíme po telefonu</span>
            800 505 090
          </a>
        </header>

        <div className="hero-content" id="top">
          <p className="eyebrow">Autoservis a pneuservis · Gerská 4 · Plzeň</p>
          <h1 id="hero-title">
            Váš vůz.<br />
            <span>Na pevné stopě.</span>
          </h1>
          <p className="hero-copy">
            Přezujeme, opravíme a zkontrolujeme auto tak, abyste věděli,
            co se dělá, proč se to dělá a kolik to bude stát.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="tel:800505090">Zavolat do servisu</a>
            <a className="button button-ghost" href="#sluzby">Prohlédnout služby</a>
          </div>
        </div>

        <div className="tread-mark" aria-hidden="true">
          <span /><span /><span /><span /><span />
        </div>
      </section>

      <section className="services" id="sluzby" aria-labelledby="services-title">
        <div className="section-heading">
          <p className="eyebrow dark">Co vyřešíme v dílně</p>
          <h2 id="services-title">Od pneumatik<br />po brzdy.</h2>
          <p>
            Začněte tím, co na autě pozorujete. Rozsah práce a cenu s vámi
            potvrdíme před opravou.
          </p>
        </div>

        <div className="services-image-wrap">
          <img
            className="section-image"
            src="/section-1.webp"
            alt="Detail kola a profesionálního vybavení pneuservisu v Plzni"
          />
          <span className="image-note">Specializované vybavení přímo v Gerské</span>
        </div>

        <div className="service-list">
          {services.map((service) => (
            <article className="service-row" key={service.name}>
              <div>
                <h3>{service.name}</h3>
                <p>{service.detail}</p>
              </div>
              <strong>{service.price}</strong>
            </article>
          ))}
        </div>
      </section>

      <section className="trust" aria-labelledby="trust-title">
        <div className="trust-photo">
          <img
            className="section-image"
            src="/section-2.webp"
            alt="Mechanik kontroluje podvozek automobilu v servisu AP-Auto Profi"
          />
          <div className="rating-card" aria-label="Hodnocení servisu 4,3 z 5 podle 75 recenzí">
            <strong>4,3/5</strong>
            <span>75 zákaznických recenzí</span>
          </div>
        </div>

        <div className="trust-content">
          <p className="eyebrow">Servis, kam víte proč jedete</p>
          <h2 id="trust-title">Poctivá práce.<br />Jasná domluva.</h2>
          <p className="trust-lead">
            V AP-Auto Profi se o váš vůz starají kvalifikovaní mechanici se
            zkušenostmi, diagnostikou a zázemím pro běžný servis i pneuservis.
          </p>

          <dl className="facts">
            <div>
              <dt>Kde nás najdete</dt>
              <dd>Gerská 4, 323 00 Plzeň</dd>
            </div>
            <div>
              <dt>Kdy máme otevřeno</dt>
              <dd>Po–Pá, 7:00–15:30</dd>
            </div>
            <div>
              <dt>Napište nám</dt>
              <dd><a href="mailto:servis@apautoprofi.cz">servis@apautoprofi.cz</a></dd>
            </div>
          </dl>
        </div>
      </section>
    </main>
  );
}
