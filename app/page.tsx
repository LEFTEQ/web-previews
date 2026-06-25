const services = [
  {
    title: "Interiéry na míru",
    text: "Kuchyně, vestavěné skříně, jídelní stoly i pracovní nábytek vyrábíme podle prostoru, ne podle katalogu.",
  },
  {
    title: "Schody a schodiště",
    text: "Celodřevěné, páteřové, na monolitu i kombinované schody řešíme jako pevnou součást domu.",
  },
  {
    title: "Dveře, vrata, repliky",
    text: "Interiérové i vstupní dveře, špaletová okna a historické repliky děláme s respektem k původní stavbě.",
  },
  {
    title: "Venkovní a atypická výroba",
    text: "Pergoly, zahradní nábytek, lavičky, herní prvky, sauny i divadelní kulisy pro zakázky mimo běžný rámec.",
  },
];

const proof = [
  "Truhlářství navazuje na dílnu Jana Brenzy založenou v roce 1945.",
  "Současná výroba běží od roku 1994 a stojí na ruční práci i moderním vybavení.",
  "Dílna je v Kožušanech u Olomouce, zakázky řešíme po domluvě přímo s řemeslníky.",
];

export default function Page() {
  return (
    <main className="brenza-page">
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero__grain" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>

        <div className="hero__topline">
          <a className="wordmark" href="#top" aria-label="Brenza truhlářství">
            <span className="wordmark__mark">BR</span>
            <span className="wordmark__text">Brenza</span>
          </a>
          <p>Kožušany 107 · dílna dle domluvy</p>
        </div>

        <div className="hero__content">
          <p className="eyebrow">Truhlářství s historií od roku 1945</p>
          <h1 id="hero-title">Dřevo, které sedne domu na milimetr.</h1>
          <p className="hero__lead">
            Zakázková výroba interiérů, schodů a dveří pro lidi, kteří chtějí poctivý kus práce, přesné zaměření a řešení navržené pro konkrétní prostor.
          </p>
          <div className="hero__actions" aria-label="Rychlý kontakt">
            <a className="button button--primary" href="tel:+420777227463">Zavolat do dílny</a>
            <a className="button button--ghost" href="mailto:truhlarstvi.rkm@gmail.com">Poslat poptávku</a>
          </div>
        </div>
      </section>

      <section className="section services" aria-labelledby="services-title">
        <div className="section__heading">
          <p className="eyebrow">Co umíme vyrobit</p>
          <h2 id="services-title">Od kuchyně po vrata. Vždy podle místa, materiálu a používání.</h2>
        </div>
        <div className="service-grid">
          {services.map((service, index) => (
            <article className="service-card" key={service.title}>
              <span className="service-card__number">0{index + 1}</span>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section trust" aria-labelledby="trust-title">
        <div className="trust__panel">
          <div>
            <p className="eyebrow">Proč Brenza</p>
            <h2 id="trust-title">Rodinná tradice, která se pozná v detailech.</h2>
          </div>
          <p className="trust__intro">
            Zákazník jedná přímo s dílnou. Nejdřív se řeší rozměry, provoz a charakter domu, teprve potom tvar, povrch a cena. Výsledkem není univerzální nábytek, ale výrobek, který má vydržet roky každodenního používání.
          </p>
        </div>

        <div className="proof-list" aria-label="Důvody k důvěře">
          {proof.map((item) => (
            <div className="proof-item" key={item}>
              <span aria-hidden="true" />
              <p>{item}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
