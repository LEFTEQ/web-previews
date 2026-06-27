const services = [
  {
    title: "Vyšetření bez zbytečného čekání",
    text: "Objednání na konkrétní čas pomáhá oddělit akutní potíže, preventivní kontroly a administrativu. Při domluvě stačí poslat stručný důvod návštěvy a časové rozmezí."
  },
  {
    title: "Recepty a potvrzení na dálku",
    text: "Chronickou medikaci, eRecepty a část běžných požadavků řeší ordinace e-mailem nebo SMS, aby pacient nemusel chodit osobně, když to není nutné."
  },
  {
    title: "Praktická péče pro dospělé",
    text: "Preventivní prohlídky, akutní vyšetření, dlouhodobá péče, konzultace výsledků a koordinace odborných vyšetření v dosahu polikliniky Budějovická."
  }
];

const trust = [
  "Poliklinika Budějovická, zelená budova, 6. patro",
  "3 minuty chůze od metra Budějovická",
  "Telefon: +420 603 116 203",
  "Registrace nových pacientů je nyní ukončena"
];

const testimonials = [
  {
    quote: "Velmi příjemné jít na řadu v přesně domluvený čas.",
    author: "Karel Zemánek"
  },
  {
    quote: "Byla jsem mile překvapena ochotou a vlídným přístupem k pacientům.",
    author: "Hana Bílá"
  }
];

export default function Page() {
  return (
    <main className="site-shell" aria-label="Náhled webu ordinace MUDr. Daniel Dvořák">
      <section className="hero-section" aria-labelledby="hero-title">
        <nav className="topbar" aria-label="Hlavní informace">
          <a className="wordmark" href="#hero-title" aria-label="MUDr. Daniel Dvořák">
            <span className="wordmark-mark" aria-hidden="true">D</span>
            <span>
              <strong>Daniel Dvořák</strong>
              <small>praktický lékař Praha 4</small>
            </span>
          </a>
          <a className="phone-link" href="tel:+420603116203">+420 603 116 203</a>
        </nav>

        <div className="hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Ordinace praktického lékaře u metra Budějovická</p>
            <h1 id="hero-title">Nejdřív jasná domluva. Potom vyšetření bez zbytečných kroků.</h1>
            <p className="hero-text">
              Ambulance MUDr. Daniela Dvořáka pomáhá pacientům řešit akutní potíže, prevenci i běžnou administrativu tak, aby do ordinace přišli ve správný čas a s co nejkratším čekáním.
            </p>
            <div className="hero-actions" aria-label="Rychlé informace">
              <a className="primary-link" href="tel:+420603116203">Zavolat do ordinace</a>
              <span className="status-note">Nové registrace jsou ukončeny</span>
            </div>
          </div>

          <div className="clinic-card" aria-label="Jak probíhá domluva návštěvy">
            <div className="pulse-map" aria-hidden="true">
              <span></span><span></span><span></span><span></span>
            </div>
            <p className="card-label">Doporučený postup</p>
            <h2>SMS nebo e-mail s důvodem návštěvy</h2>
            <p>
              Uveďte, co potřebujete vyřešit a jaké časové rozmezí Vám vyhovuje. Ordinace čas potvrdí, případně se ozve pro upřesnění.
            </p>
          </div>
        </div>
      </section>

      <section className="content-section services-section" aria-labelledby="services-title">
        <div className="section-heading">
          <p className="eyebrow">Co pacient nejčastěji řeší</p>
          <h2 id="services-title">Péče, která odděluje návštěvu ordinace od věcí, které lze vyřídit na dálku.</h2>
        </div>
        <div className="service-list">
          {services.map((service, index) => (
            <article className="service-item" key={service.title}>
              <span className="service-number">0{index + 1}</span>
              <div>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="content-section trust-section" aria-labelledby="trust-title">
        <div className="trust-panel">
          <div>
            <p className="eyebrow">Důvěra a orientace</p>
            <h2 id="trust-title">Ordinace v poliklinice, kam se pacient snadno dostane.</h2>
          </div>
          <ul className="trust-list" aria-label="Praktické informace o ordinaci">
            {trust.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </div>

        <div className="testimonial-grid" aria-label="Reference pacientů">
          {testimonials.map((testimonial) => (
            <figure className="testimonial" key={testimonial.author}>
              <blockquote>„{testimonial.quote}“</blockquote>
              <figcaption>{testimonial.author}</figcaption>
            </figure>
          ))}
        </div>
      </section>
    </main>
  );
}
