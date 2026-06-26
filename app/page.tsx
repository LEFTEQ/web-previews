const services = [
  {
    title: "Odtah po Plzni i mimo město",
    text: "Porouchané nebo havarované auto odvezeme tam, kde dává oprava smysl. Pomůžeme i s dalším postupem po nehodě.",
  },
  {
    title: "Kompletní servis pod jednou střechou",
    text: "Diagnostika, pravidelný servis, oleje, náhradní díly, klimatizace, pneuservis i 3D geometrie pro běžné značky a typy vozidel.",
  },
  {
    title: "Karoserie a lakovna",
    text: "Řešíme následky drobných škrábanců i větších škod. Auto vracíme do provozu čistě, prakticky a bez zbytečných řečí.",
  },
  {
    title: "Náhradní vozidlo",
    text: "Když oprava trvá déle, nemusíte zůstat bez auta. Podle dostupnosti zajistíme náhradní vůz pro běžný provoz.",
  },
];

const trust = [
  "Autoservis v Plzni funguje od roku 1997.",
  "Vlastní moderní zázemí na Rokycanské třídě v Doubravce.",
  "Spolupráce s pojišťovnami při škodních událostech.",
  "Platba hotově i kartou, servisní příjem ve všední dny.",
];

export default function Page() {
  return (
    <main className="site-shell" aria-labelledby="hero-title">
      <section className="hero-section">
        <div className="hero-topline">
          <a className="brand-mark" href="tel:+420602444642" aria-label="Zavolat autoservisu Zábraha">
            <span className="brand-sign">ZB</span>
            <span className="brand-name">Zábraha Auto Plzeň</span>
          </a>
          <span className="service-pill">Autoservis / odtahovka</span>
        </div>

        <div className="hero-grid">
          <div className="hero-copy">
            <p className="kicker">Plzeň - Doubravka · Rokycanská 1334/116</p>
            <h1 id="hero-title">Když auto stojí, začínáme od odtahu. Když je v servisu, řešíme ho celé.</h1>
            <p className="hero-lede">
              Praktický servis pro řidiče, kteří chtějí jasný postup: odvoz po poruše nebo nehodě, diagnostiku,
              opravu, lakovnu, pneuservis i komunikaci s pojišťovnou na jednom místě.
            </p>
            <div className="hero-actions" aria-label="Rychlé kontakty">
              <a className="primary-link" href="tel:+420602444642">+420 602 444 642</a>
              <a className="secondary-link" href="mailto:autozabraha@volny.cz">autozabraha@volny.cz</a>
            </div>
          </div>

          <div className="signal-card" aria-label="Servisní přehled">
            <div className="route-line" aria-hidden="true">
              <span></span>
              <span></span>
              <span></span>
            </div>
            <p className="signal-label">Typický průběh</p>
            <ol className="signal-steps">
              <li><strong>1.</strong> zavoláte z místa poruchy</li>
              <li><strong>2.</strong> auto odvezeme nebo přijmeme v servisu</li>
              <li><strong>3.</strong> domluvíme rozsah opravy a další kroky</li>
            </ol>
          </div>
        </div>
      </section>

      <section className="content-section services-section" aria-labelledby="services-title">
        <div className="section-heading">
          <p className="kicker">Co vyřešíte bez přejíždění mezi dílnami</p>
          <h2 id="services-title">Servis, odtah a opravy karoserie na jedné adrese</h2>
        </div>
        <div className="service-grid">
          {services.map((service) => (
            <article className="service-item" key={service.title}>
              <span className="service-index" aria-hidden="true"></span>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="content-section trust-section" aria-labelledby="trust-title">
        <div className="trust-panel">
          <div>
            <p className="kicker">Proč se sem řidiči vracejí</p>
            <h2 id="trust-title">Místní servis s dlouhou praxí a čitelným jednáním</h2>
          </div>
          <p className="trust-copy">
            Auto Zábraha staví na osobním přístupu Tomáše Zábrahy a týmu, který se stará o běžný provoz,
            havárie i pravidelné prohlídky. Cílem je prodloužit životnost auta, ne prodávat zbytečné práce.
          </p>
        </div>
        <div className="trust-list" role="list">
          {trust.map((item) => (
            <div className="trust-item" role="listitem" key={item}>
              <span aria-hidden="true">✓</span>
              <p>{item}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
