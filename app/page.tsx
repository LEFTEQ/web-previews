const services = [
  {
    title: "Akutní potíže",
    text: "Každý všední den má ordinace vyhrazený čas pro pacienty s náhlými obtížemi. Přijďte v akutních hodinách podle dne v týdnu."
  },
  {
    title: "Objednaná péče",
    text: "Preventivní prohlídky, pracovní prohlídky a kontroly řešíme v klidnějším režimu po objednání, aby měl lékař na vyšetření dost času."
  },
  {
    title: "Sestra v terénu",
    text: "V indikovaných případech může registrovaný pacient využít návštěvní službu sestry doma. Hodí se zejména při omezené mobilitě."
  },
  {
    title: "Síť ordinací",
    text: "Registrovaní pacienti mohou po objednání využít péči i v jiné ordinaci Všeobecného lékaře v České republice."
  }
];

const hours = [
  ["Pondělí", "9.00 - 13.00", "13.30 - 17.30"],
  ["Úterý", "8.00 - 12.00", "12.30 - 16.30"],
  ["Středa", "9.30 - 13.00", "13.30 - 18.00"],
  ["Čtvrtek", "8.00 - 12.00", "12.30 - 16.30"],
  ["Pátek", "9.00 - 12.00", "8.00 - 9.00"]
];

const notices = [
  "Ordinační hodiny jsou platné od 1. 4. 2026.",
  "V ordinaci je možné platit hotově i kartou.",
  "Pokud se nemůžete dostavit na domluvený termín, informujte ordinaci včas.",
  "Dne 14. 7. lékař ordinuje 9.00 - 13.00, dne 16. 7. ordinuje 13.00 - 17.00."
];

export default function Page() {
  return (
    <main className="site-shell">
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link
        href="https://fonts.googleapis.com/css2?family=Atkinson+Hyperlegible:wght@400;700&family=Space+Grotesk:wght@500;700&display=swap"
        rel="stylesheet"
      />

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-grid">
          <div className="hero-copy">
            <a className="wordmark" href="tel:+420721452116" aria-label="Všeobecný lékař Praha 8">
              <span className="wordmark-mark">VL</span>
              <span className="wordmark-text">praha 8</span>
            </a>
            <p className="eyebrow">Praktický lékař pro dospělé</p>
            <h1 id="hero-title">Ordinace, kde hned poznáte, kdy přijít akutně a kdy po objednání.</h1>
            <p className="hero-lede">
              Všeobecný praktický lékař v Libni, Chlumčanského 497/5. Vchod je vlevo od Clara Bistro, ordinace je v 1. patře.
            </p>
            <div className="hero-actions" aria-label="Rychlý kontakt">
              <a className="primary-link" href="tel:+420721452116">721 452 116</a>
              <a className="secondary-link" href="mailto:ordinace.praha8@g8vseobecnylekar.cz">Napsat do ordinace</a>
            </div>
          </div>

          <div className="triage-card" aria-label="Dnešní orientace ordinační dobou">
            <div className="pulse-lane" aria-hidden="true">
              <span />
              <span />
              <span />
            </div>
            <p className="card-kicker">Rozdělení péče</p>
            <div className="triage-row acute">
              <span>Akutní pacienti</span>
              <strong>ráno a dopoledne</strong>
            </div>
            <div className="triage-row booked">
              <span>Objednaní pacienti</span>
              <strong>poledne a odpoledne</strong>
            </div>
            <p className="card-note">
              Přesný čas se liší podle dne. Přehled najdete níže v ordinačních hodinách.
            </p>
          </div>
        </div>
      </section>

      <section className="section services-section" aria-labelledby="services-title">
        <div className="section-heading">
          <p className="eyebrow">Co v ordinaci vyřešíte</p>
          <h2 id="services-title">Praktická péče bez zbytečného bloudění</h2>
        </div>
        <div className="service-grid">
          {services.map((service) => (
            <article className="service-card" key={service.title}>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section trust-section" aria-labelledby="hours-title">
        <div className="section-heading compact">
          <p className="eyebrow">Ordinační hodiny a důvěra</p>
          <h2 id="hours-title">Jasný režim pro akutní i plánované návštěvy</h2>
        </div>

        <div className="trust-layout">
          <div className="hours-panel">
            <div className="hours-table" role="table" aria-label="Standardní ordinační hodiny">
              <div className="hours-row hours-head" role="row">
                <span role="columnheader">Den</span>
                <span role="columnheader">Akutní</span>
                <span role="columnheader">Objednaní</span>
              </div>
              {hours.map(([day, acute, booked]) => (
                <div className="hours-row" role="row" key={day}>
                  <span role="cell">{day}</span>
                  <span role="cell">{acute}</span>
                  <span role="cell">{booked}</span>
                </div>
              ))}
            </div>
          </div>

          <aside className="info-panel" aria-label="Důležité informace pro pacienty">
            <h3>Praha 8, Chlumčanského 497/5</h3>
            <p>
              Ordinace je součástí sítě Všeobecný lékař. Registrovaní pacienti se mohou po domluvě obrátit i na další ordinace sítě.
            </p>
            <ul>
              {notices.map((notice) => (
                <li key={notice}>{notice}</li>
              ))}
            </ul>
          </aside>
        </div>
      </section>
    </main>
  );
}
