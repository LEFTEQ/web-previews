const services = [
  {
    title: "Schody a zábradlí",
    text: "Ocelové schody, zábradlí, madla a konstrukce pro rodinné domy i bytové stavby. Umíme kombinovat kov se dřevem tam, kde to dává smysl.",
  },
  {
    title: "Brány, vrata, mříže",
    text: "Zakázková výroba vrat, bran, oplocení, mříží, roštů anglických dvorků a dalších prvků přesně podle místa montáže.",
  },
  {
    title: "Konstrukce a montáž",
    text: "Atypické zámečnické výrobky, ocelové konstrukce, povrchová úprava, montáž a svářečské práce ověřené úřední zkouškou.",
  },
  {
    title: "Údržba a opravy",
    text: "Kusová, malosériová i opravárenská práce pro domy, provozy a firmy v Brně a okolí. Domluva je přímá, bez zbytečných mezičlánků.",
  },
];

const proof = [
  "Kancelář na adrese Černého 9, Brno-Bystrc",
  "Provozovna Za humny 246, Střelice u Brna",
  "Individuální kalkulace podle výkresu, zaměření nebo popisu",
  "Výroba včetně montáže a povrchové úpravy: lak, komaxit, zinkování",
];

export default function Page() {
  return (
    <main className="site-shell">
      <section className="hero" aria-labelledby="hero-title">
        <div className="wordmark" aria-label="Stodůlka Jiří zámečnictví">
          <span className="wordmark-mark">SJ</span>
          <span className="wordmark-text">Stodůlka Jiří</span>
        </div>

        <div className="hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Zámečnictví Brno a Střelice</p>
            <h1 id="hero-title">Ocel na míru, která sedí na první montáž.</h1>
            <p className="hero-lead">
              Vyrábíme atypické zámečnické prvky pro domy, bytové stavby i průmysl: schody,
              zábradlí, brány, vrata, konstrukce a opravy. Přesně, zodpovědně a s jasnou cenou předem.
            </p>
            <div className="hero-contact" aria-label="Kontaktní údaje">
              <a href="tel:+420602788680">602 788 680</a>
              <a href="mailto:jstodulka@volny.cz">jstodulka@volny.cz</a>
            </div>
          </div>

          <div className="steel-card" aria-label="Ilustrace zámečnické výroby">
            <div className="gauge gauge-top" />
            <div className="steel-plate">
              <span className="cut cut-one" />
              <span className="cut cut-two" />
              <span className="cut cut-three" />
              <span className="spark spark-one" />
              <span className="spark spark-two" />
              <span className="spark spark-three" />
            </div>
            <div className="gauge gauge-bottom" />
          </div>
        </div>
      </section>

      <section className="section services" aria-labelledby="services-title">
        <div className="section-heading">
          <p className="eyebrow">Co pro vás vyrobíme</p>
          <h2 id="services-title">Od jednoho držáku po celou konstrukci.</h2>
        </div>
        <div className="service-grid">
          {services.map((service) => (
            <article className="service-item" key={service.title}>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section trust" aria-labelledby="trust-title">
        <div className="trust-copy">
          <p className="eyebrow">Jak probíhá spolupráce</p>
          <h2 id="trust-title">Nejdřív si ujasníme místo, zatížení a povrch. Pak teprve vyrábíme.</h2>
          <p>
            Zákazník dostane návrh řešení, termín a kalkulaci podle skutečného rozsahu práce.
            U stavebních prvků řešíme také projektovou dokumentaci a statické výpočty, aby hotový
            výrobek obstál v provozu i při kontrole.
          </p>
        </div>
        <ul className="proof-list" aria-label="Důležité informace o firmě">
          {proof.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>
    </main>
  );
}
