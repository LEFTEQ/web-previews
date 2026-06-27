const services = [
  {
    title: "Truhlářství na míru",
    text: "Skříně, kuchyně, úložné stěny i solitérní kusy navržené podle prostoru, ne podle katalogové šablony.",
    mark: "01",
  },
  {
    title: "Čalounictví a matrace",
    text: "Pohodlí řešené od konstrukce po látku: sedačky, lavice, čela postelí a matrace pro každodenní používání.",
    mark: "02",
  },
  {
    title: "Obklady a dlažby",
    text: "Povrchy sladěné s nábytkem i provozem domácnosti, včetně návazností na koupelny, kuchyně a vstupní zóny.",
    mark: "03",
  },
  {
    title: "Vizualizace a realizace",
    text: "Než se začne vyrábět, vidíte řešení v souvislostech. Potom následuje výroba, montáž a doladění detailů na místě.",
    mark: "04",
  },
];

const trustItems = [
  "Jeden partner pro návrh, výrobu i montáž interiéru.",
  "Materiály volené podle zátěže, údržby a dlouhé životnosti.",
  "Řemeslné návaznosti mezi nábytkem, čalouněním a obklady.",
];

export default function Page() {
  return (
    <main className="site-shell" aria-labelledby="hero-title">
      <section className="hero-section">
        <div className="brand-row" aria-label="TROMEX Interiéry">
          <a className="wordmark" href="#hero-title" aria-label="TROMEX Interiéry - začátek stránky">
            <span className="wordmark-main">TROMEX</span>
            <span className="wordmark-sub">interiéry</span>
          </a>
          <span className="brand-note">truhlářství · čalounictví · obklady</span>
        </div>

        <div className="hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Interiér jako jeden přesně lícující celek</p>
            <h1 id="hero-title">Nábytek, povrchy a pohodlí, které spolu drží roky.</h1>
            <p className="hero-lead">
              TROMEX Interiéry spojuje truhlářskou výrobu, čalounění, matrace, obklady a vizualizace do jednoho postupu. Výsledek nepůsobí poskládaně: sedí na míru prostoru, stylu i každodennímu provozu domácnosti.
            </p>
            <a className="section-link" href="#sluzby">Zobrazit rozsah práce</a>
          </div>

          <div className="material-board" aria-label="Ukázka vrstvení materiálů v interiéru">
            <div className="measure-rail" aria-hidden="true">
              <span></span><span></span><span></span><span></span><span></span>
            </div>
            <div className="sample sample-wood">dýha</div>
            <div className="sample sample-fabric">látka</div>
            <div className="sample sample-tile">dlažba</div>
            <div className="sample sample-comfort">pohodlí</div>
          </div>
        </div>
      </section>

      <section className="content-section services-section" id="sluzby" aria-labelledby="services-title">
        <div className="section-heading">
          <p className="eyebrow">Nabídka</p>
          <h2 id="services-title">Od prvního nákresu po montáž v interiéru.</h2>
        </div>
        <div className="service-grid">
          {services.map((service) => (
            <article className="service-card" key={service.title}>
              <span className="service-mark">{service.mark}</span>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="content-section trust-section" aria-labelledby="trust-title">
        <div className="trust-panel">
          <div>
            <p className="eyebrow">Proč TROMEX</p>
            <h2 id="trust-title">Když se má interiér používat, nestačí jen dobře vypadat.</h2>
          </div>
          <p className="trust-text">
            Zákazník nemusí hlídat, jestli čalouněná lavice navazuje na skříň, zda dlažba unese provoz u vstupu nebo jestli matrace odpovídá skutečnému spaní. TROMEX řeší komfort, konstrukci a povrch v jednom návrhu.
          </p>
          <ul className="trust-list" aria-label="Důležité výhody spolupráce">
            {trustItems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
