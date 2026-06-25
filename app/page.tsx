const services = [
  {
    title: "Pneuservis bez zbytečného čekání",
    text: "Přezutí, kontrola tlaku a vizuální kontrola stavu pneumatik pro každodenní provoz po Plzni i delší cesty.",
  },
  {
    title: "Opravy a běžný servis",
    text: "Domluvíte termín, přijedete přímo do budovy servisu nebo na označené místo ve dvoře a technik s vámi projde rozsah práce.",
  },
  {
    title: "Servis klimatizací",
    text: "Kontrola funkce, doplnění a servis klimatizace před létem i při slabém chlazení během roku.",
  },
];

const trustItems = [
  "Bendova 48, Plzeň - na rohu s Korandovou ulicí u areálu Škodovky.",
  "Ranní příjem vozidel probíhá od 7:30 do 10:00, od 10:00 do 16:30 pouze telefonicky.",
  "Dobrá dostupnost MHD: Jižní předměstí, Tylova a náměstí T. G. Masaryka.",
  "Po dobu opravy je možné domluvit náhradní vozidlo za 2 Kč/km.",
];

export default function Page() {
  return (
    <main className="site-shell">
      <section className="hero-section" aria-labelledby="hero-title">
        <div className="brand-row" aria-label="Typografická značka Liška autoservis">
          <div className="wordmark" aria-hidden="true">
            <span className="wordmark-mark">L</span>
            <span className="wordmark-text">Liška</span>
          </div>
          <span className="brand-note">autoservis Plzeň</span>
        </div>

        <div className="hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Příjem vozu v centru Plzně</p>
            <h1 id="hero-title">Ráno přistavíte auto přímo do dílny. Odpoledne víte, na čem jste.</h1>
            <p className="hero-lede">
              Autoservis v Bendově ulici řeší pneuservis, opravy a klimatizace pro řidiče, kteří potřebují jasný termín, srozumitelnou domluvu a servis v dosahu MHD.
            </p>
            <div className="hero-actions" aria-label="Kontaktní údaje servisu">
              <a className="phone-link" href="tel:+420606070600">606 070 600</a>
              <span className="hours-chip">Po-Pá 7:30-16:30</span>
            </div>
          </div>

          <div className="bay-card" aria-label="Servisní informace">
            <div className="bay-header">
              <span>Ranní příjem</span>
              <strong>7:30-10:00</strong>
            </div>
            <div className="bay-lines" aria-hidden="true">
              <span />
              <span />
              <span />
              <span />
            </div>
            <p>
              Po 10:00 probíhá domluva pouze telefonicky, aby mechanici drželi rozpracované opravy a předání vozů.
            </p>
          </div>
        </div>
      </section>

      <section className="content-section services-section" aria-labelledby="services-title">
        <div className="section-heading">
          <p className="eyebrow">Co tu vyřídíte</p>
          <h2 id="services-title">Servis pro běžný provoz auta, ne pro výkladní skříň.</h2>
        </div>
        <div className="service-grid">
          {services.map((service) => (
            <article className="service-card" key={service.title}>
              <span className="service-index" aria-hidden="true">/</span>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="content-section trust-section" aria-labelledby="trust-title">
        <div className="trust-panel">
          <div className="section-heading">
            <p className="eyebrow">Místo a domluva</p>
            <h2 id="trust-title">Dílna je v centru, příjem je konkrétní a odjezd se dá naplánovat.</h2>
          </div>
          <ul className="trust-list">
            {trustItems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p className="contact-line">
            E-mail pro domluvu a podklady: <a href="mailto:autickaliska@email.cz">autickaliska@email.cz</a>
          </p>
        </div>
      </section>
    </main>
  );
}
