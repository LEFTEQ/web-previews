const services = [
  {
    title: "Autoservis bez objíždění Plzně",
    text: "Servisní prohlídky, rozvody, brzdy, klimatizace, diagnostika i elektroopravy řešíme na jednom místě v Záluží."
  },
  {
    title: "Karoserie, lak a skla",
    text: "Opravujeme karoserie, pracujeme s rovnací stolicí, lakujeme díly a zajišťujeme výměny čelních skel."
  },
  {
    title: "Pneuservis a geometrie",
    text: "Přezutí, kontrola podvozku a seřízení geometrie pro běžné značky jako Škoda, VW, Ford, Peugeot, Renault, Kia nebo Hyundai."
  },
  {
    title: "STK a rychlé opravy",
    text: "Připravíme vůz na STK, domluvíme potřebný servis a u menších závad hledáme nejrychlejší rozumné řešení."
  }
];

const trustPoints = [
  "Rodinný autoservis funguje od roku 1999.",
  "Sídlí jen 3 km od Plzně-Košutky.",
  "Odvoz zákazníků je možné zajistit po domluvě.",
  "Otevřeno pondělí až pátek 8:00-17:00, sobota po domluvě."
];

export default function Page() {
  return (
    <main className="site-shell">
      <section className="hero" aria-labelledby="hero-title">
        <nav className="topbar" aria-label="Hlavní informace">
          <a className="wordmark" href="tel:+420606709455" aria-label="Autoservis Švarc, zavolat">
            <span className="wordmark-mark">Š</span>
            <span>
              <strong>Švarc</strong>
              <small>autoservis Záluží</small>
            </span>
          </a>
          <a className="topbar-phone" href="tel:+420606709455">606 709 455</a>
        </nav>

        <div className="hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Autoservis Plzeň-sever / Košutka / Lochotín / Bolevec</p>
            <h1 id="hero-title">Vůz zvedneme, závadu pojmenujeme, opravu domluvíme bez mlhy.</h1>
            <p className="hero-lede">
              Rodinný autoservis Jiřího Švarce v Třemošné-Záluží se stará o běžný servis, pneuservis, karosářské opravy i přípravu na STK. Prakticky, poctivě a blízko Plzně.
            </p>
            <div className="hero-actions" aria-label="Rychlý kontakt">
              <a className="primary-link" href="tel:+420606709455">Zavolat do servisu</a>
              <a className="secondary-link" href="mailto:autoservis.jiri.svarc@seznam.cz">Napsat e-mail</a>
            </div>
          </div>

          <div className="diagnostic-card" aria-label="Servisní štítek">
            <div className="gauge" aria-hidden="true">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <p className="card-kicker">Dílna</p>
            <p className="card-title">Ledecká 190</p>
            <p className="card-text">330 11 Třemošná - Záluží</p>
            <div className="service-strip" aria-hidden="true">
              <span>diagnostika</span>
              <span>brzdy</span>
              <span>pneu</span>
              <span>STK</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section services-section" aria-labelledby="services-title">
        <div className="section-heading">
          <p className="eyebrow">Nabídka</p>
          <h2 id="services-title">Co s autem vyřešíte v jedné dílně</h2>
        </div>
        <div className="services-grid">
          {services.map((service, index) => (
            <article className="service-item" key={service.title}>
              <span className="service-number">0{index + 1}</span>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section trust-section" aria-labelledby="trust-title">
        <div className="trust-panel">
          <div>
            <p className="eyebrow">Důvěra</p>
            <h2 id="trust-title">Servis, kam se lidé vracejí kvůli jasné domluvě.</h2>
          </div>
          <p className="trust-text">
            Od roku 1999 prošlo dílnou mnoho zákazníků z Plzně, Košutky, Lochotína, Bolevce i Třemošné. Zákazník ví, kde auto stojí, co se opravuje a kdy má znovu vyrazit.
          </p>
        </div>
        <div className="trust-grid">
          {trustPoints.map((point) => (
            <div className="trust-point" key={point}>{point}</div>
          ))}
        </div>
      </section>
    </main>
  );
}
