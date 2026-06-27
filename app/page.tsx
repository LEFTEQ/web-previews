const services = [
  {
    title: "Akátový zahradní nábytek",
    text: "Lavice, stoly, křesla, lehátka i celé sestavy vyráběné na míru pro zahrady, penziony a veřejná místa.",
  },
  {
    title: "Terasy, fasády a přířezy",
    text: "Od podkladních hranolů po montáž terasy. Akátové profily, prkna, klipy a příslušenství v konkrétních rozměrech.",
  },
  {
    title: "Dětská hřiště a mobiliář",
    text: "Pískoviště, prvky Blue Rabbit, městské lavičky a odolné kusy, které mají zvládnout každodenní provoz venku.",
  },
];

const proof = [
  "21+ let truhlářské výroby pro Brno a okolí",
  "Zpracování od prvovýroby po hotový výrobek",
  "Individuální rozměry, materiál i povrchová úprava",
  "Výroba, prodej a montáž bez zbytečného mezičlánku",
];

export default function Page() {
  return (
    <main className="klasik-page" aria-labelledby="hero-title">
      <section className="hero-section">
        <div className="hero-shell">
          <div className="brand-row" aria-label="KLASIK CZ">
            <span className="wordmark">KLASIK</span>
            <span className="brand-mark" aria-hidden="true">CZ</span>
          </div>

          <div className="hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">Akátové truhlářství z Brna</p>
              <h1 id="hero-title">Venkovní nábytek, který se neskládá z katalogu, ale z konkrétního místa.</h1>
              <p className="hero-lead">
                KLASIK CZ vyrábí atypický zahradní nábytek, terasy, fasádní profily a městský mobiliář z akátu. Řeší rozměr, zatížení, povrch i montáž tak, aby hotový kus vydržel roky venku.
              </p>
              <div className="hero-actions" aria-label="Rychlý kontakt">
                <a href="tel:+420546429411" className="primary-link">+420 546 429 411</a>
                <a href="mailto:info@klasikcz.eu" className="secondary-link">info@klasikcz.eu</a>
              </div>
            </div>

            <div className="wood-card" aria-label="Charakter výroby z akátu">
              <div className="growth-ring" aria-hidden="true">
                <span></span>
                <span></span>
                <span></span>
              </div>
              <div className="wood-card-text">
                <strong>akát</strong>
                <span>tvrdé venkovní dřevo pro lavice, terasy a konstrukce</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="services-section" aria-labelledby="services-title">
        <div className="section-inner">
          <div className="section-heading">
            <p className="eyebrow">Co zákazník řeší</p>
            <h2 id="services-title">Zakázka může začít lavicí, terasou i přesným přířezem.</h2>
          </div>
          <div className="service-list">
            {services.map((item, index) => (
              <article className="service-item" key={item.title}>
                <span className="service-number">0{index + 1}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="trust-section" aria-labelledby="trust-title">
        <div className="section-inner trust-grid">
          <div>
            <p className="eyebrow">Proč KLASIK CZ</p>
            <h2 id="trust-title">Řemeslná výroba, která má pod kontrolou materiál i výsledek.</h2>
            <p className="trust-copy">
              Firma pracuje s akátem od kulatiny a přířezů až po hotový výrobek. Díky vlastnímu zpracování dokáže navrhnout atypický rozměr, doporučit údržbu přírodními oleji a dodat řešení pro soukromou zahradu, obec i provozovnu.
            </p>
          </div>
          <ul className="proof-list" aria-label="Důvody důvěry">
            {proof.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
