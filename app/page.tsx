const services = [
  {
    title: "Přezutí osobních i užitkových vozů",
    text: "Kompletní servis kol od 12\" do 23\", včetně demontáže z osy, mytí, vyvážení, ventilů a pytlů na pneu.",
    points: ["Run-flat pneumatiky", "Opravy bezdušových kol", "Light Truck vozy"],
  },
  {
    title: "TPMS bez dohadů",
    text: "Certifikovaný servis pro senzory tlaku. Programování, kontrola systému i reset po výměně kol.",
    points: ["Certifikovaný technik", "Kontrola senzorů", "Reset systému"],
  },
  {
    title: "Klimatizace a ozón O3",
    text: "Plnění chladivy R134a i R1234yf, tlaková zkouška dusíkem, detekce úniku a dezinfekce interiéru ozónem.",
    points: ["Novější i starší vozy", "Dezinfekce klimatizace", "Odstranění zápachu"],
  },
];

const trustItems = [
  "20+ let zkušeností v Plzni-Doubravce",
  "Přijímáme hotovost i platební kartu",
  "V sezoně otevřeno i v sobotu dopoledne",
  "Snadný příjezd na Jateční 34a",
];

export default function Page() {
  return (
    <main className="site-shell">
      <section className="hero" aria-labelledby="hero-title">
        <div className="brand-row" aria-label="Pneuservis Vít">
          <div className="wordmark">
            <span className="wordmark-main">VIT</span>
            <span className="wordmark-cut" aria-hidden="true" />
            <span className="wordmark-sub">Pneuservis Plzen</span>
          </div>
          <a className="top-link" href="tel:+420377421209">
            377 421 209
          </a>
        </div>

        <div className="hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Plzen-Doubravka · certifikovany TPMS servis</p>
            <h1 id="hero-title">Kola prezuta presne, rychle a bez zbytecneho cekani.</h1>
            <p className="lead">
              Jaroslav Vit se postara o pneumatiky, disky, tlakove senzory i klimatizaci. Prijedete na Jatecni 34a,
              predame si auto, a vy odjizdite s jistotou, ze kola sedi tak, jak maji.
            </p>
            <div className="hero-actions" aria-label="Rychly kontakt">
              <a className="button-primary" href="tel:+420377421209">
                Zavolat do servisu
              </a>
              <a className="button-secondary" href="mailto:pneu.vit@seznam.cz">
                pneu.vit@seznam.cz
              </a>
            </div>
          </div>

          <div className="tread-panel" aria-label="Provozni informace">
            <div className="tread-mark" aria-hidden="true" />
            <div className="status-card">
              <span className="status-kicker">Dnesni rytmus dilny</span>
              <strong>Po-Pa 8:00-17:00</strong>
              <span>Pauza 11:30-12:00</span>
            </div>
            <div className="metric-pair">
              <div>
                <strong>20+</strong>
                <span>let praxe</span>
              </div>
              <div>
                <strong>TPMS</strong>
                <span>certifikace</span>
              </div>
            </div>
            <p className="address-note">Jatecni 34a, Plzen-Doubravka. V dubnu, kvetnu, rijnu a listopadu otevreno i v sobotu 8:00-12:00.</p>
          </div>
        </div>
      </section>

      <section className="section services-section" aria-labelledby="services-title">
        <div className="section-heading">
          <p className="eyebrow">Co vyridite na jednom miste</p>
          <h2 id="services-title">Pneuservis, TPMS i klimatizace pod jednou strechou.</h2>
        </div>
        <div className="service-grid">
          {services.map((service) => (
            <article className="service-card" key={service.title}>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
              <ul>
                {service.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="section trust-section" aria-labelledby="trust-title">
        <div className="trust-copy">
          <p className="eyebrow">Proc se sem ridici vraceji</p>
          <h2 id="trust-title">Ferrova cena, cista prace a konkretni domluva.</h2>
          <p>
            Ceny jsou uvedene vcetne 21 % DPH a bez skrytych priplatku. Pri vymene kol rovnou zkontrolujeme stav pneumatik,
            upozornime na nerovnomerne sjizdeni a poradime, kdy ma smysl koupit nove pneu nebo disky.
          </p>
        </div>
        <div className="trust-board" aria-label="Duvody duvery">
          {trustItems.map((item, index) => (
            <div className="trust-row" key={item}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <strong>{item}</strong>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
