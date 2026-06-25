const services = [
  {
    title: "Pneuservis bez čekání",
    text: "Přezutí, vyvážení a nové ventily vyřešíme podle typu disku, TPMS i rozměru pneumatik. Cenu potvrdíme před zahájením práce.",
    meta: "přezutí od 900 Kč",
  },
  {
    title: "Diagnostika TPMS",
    text: "Ověříme snímače tlaku testerem a řekneme vám, zda stačí servisní zásah, nebo je nutná výměna senzoru.",
    meta: "kontrola od 70 Kč",
  },
  {
    title: "Opravy pneumatik",
    text: "Poškození po hřebíku, skle nebo obrubníku nejdřív zkontrolujeme. Pokud je oprava bezpečná, navrhneme přesný postup.",
    meta: "oprava od 200 Kč",
  },
  {
    title: "Brzdy a olej",
    text: "Zkontrolujeme brzdovou kapalinu, destičky, kotouče i parkovací brzdu. U výměny oleje nastavíme také servisní interval.",
    meta: "servis dle vozidla",
  },
];

export default function Page() {
  return (
    <main className="site-shell">
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero__topbar" aria-label="Základní informace servisu">
          <div className="wordmark" aria-label="AP Auto Profi Plzeň">
            <span className="wordmark__mark">AP</span>
            <span className="wordmark__text">Auto Profi Plzeň</span>
          </div>
          <a className="top-link" href="tel:800505090">800 505 090</a>
        </div>

        <div className="hero__grid">
          <div className="hero__copy">
            <p className="eyebrow">Gerská 4, Plzeň • autoservis a pneuservis</p>
            <h1 id="hero-title">Pneumatiky, brzdy a olej zkontrolované dřív, než vás zastaví cesta.</h1>
            <p className="hero__lead">
              V Plzni řešíme sezónní přezutí, opravy pneumatik, TPMS, brzdový systém i běžný servis. Objednáte službu online nebo zavoláte a domluvíme termín podle vašeho vozu.
            </p>
            <div className="hero__actions" aria-label="Rychlé kontakty">
              <a className="button button--primary" href="tel:800505090">Zavolat pro radu</a>
              <a className="button button--secondary" href="mailto:servis@apautoprofi.cz">Napsat do servisu</a>
            </div>
          </div>

          <div className="tread-panel" aria-label="Dostupnost servisu">
            <div className="tread-panel__track" aria-hidden="true">
              {Array.from({ length: 14 }).map((_, index) => (
                <span key={index} />
              ))}
            </div>
            <div className="tread-panel__content">
              <p className="panel-kicker">Dnes v servisu</p>
              <strong>07:00–15:30</strong>
              <span>pondělí až pátek</span>
              <small>So–Ne zavřeno</small>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--services" aria-labelledby="services-title">
        <div className="section__intro">
          <p className="eyebrow">Služby online i na prodejně</p>
          <h2 id="services-title">Vyberete službu, přijedete na termín, odjíždíte s jasným výsledkem.</h2>
        </div>
        <div className="service-grid">
          {services.map((service) => (
            <article className="service-card" key={service.title}>
              <p className="service-card__meta">{service.meta}</p>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section section--trust" aria-labelledby="trust-title">
        <div className="trust-copy">
          <p className="eyebrow">Zkušenosti a důvěra</p>
          <h2 id="trust-title">Místní servis se zázemím sítě Premio a konkrétní adresou v Plzni.</h2>
          <p>
            V AP Auto Profi pracují kvalifikovaní odborníci se specializovaným vybavením pro pneumatiky i autoservis. Každou závadu nejdřív vysvětlíme a další postup odsouhlasíte předem.
          </p>
          <a className="inline-link" href="mailto:servis@apautoprofi.cz">servis@apautoprofi.cz</a>
        </div>
        <div className="proof-grid" aria-label="Hodnocení a kontaktní údaje">
          <div className="proof-item proof-item--rating">
            <span>4,3/5</span>
            <p>hodnocení prodejny podle 73 recenzí</p>
          </div>
          <div className="proof-item">
            <span>4,5</span>
            <p>hodnocení sítě podle 6442 recenzí</p>
          </div>
          <div className="proof-item">
            <span>Gerská 4</span>
            <p>323 00 Plzeň, dostupné ze Severního Předměstí</p>
          </div>
        </div>
      </section>
    </main>
  );
}
