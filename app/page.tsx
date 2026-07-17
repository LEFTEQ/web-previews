import { SqueegeeWipe } from "./motion";

const sectors = [
  {
    name: "Průmysl",
    note: "Výrobní linky a provozy v nepřetržitém režimu — čistota bez zastavení výroby.",
  },
  {
    name: "Automotive a lakovny",
    note: "Technologické čištění lakoven a odlakování dílů i závěsů.",
  },
  {
    name: "Nemocnice a sociální zařízení",
    note: "Operační sály, laboratoře a lůžková oddělení podle přísných hygienických norem.",
  },
  {
    name: "Administrativa",
    note: "Kanceláře a obchodní prostory, denní i noční úklidový servis.",
  },
  {
    name: "Venkovní prostory",
    note: "Údržba areálů, zeleně a zpevněných ploch po celý rok.",
  },
  {
    name: "Praní a prádelna",
    note: "Pronájem a praní prádla pro provozy i zdravotnictví.",
  },
];

const services = [
  "Facility management",
  "Úklidové služby",
  "Úklid pro zdravotnictví",
  "Technologické čištění lakoven",
  "Odlakovací služby",
  "Praní a pronájem prádla",
  "Venkovní údržba",
  "Bezpečnostní služby",
  "Údržba výrobních zařízení",
  "Náhradní plnění",
];

const kpis = [
  { big: "3 000 000", unit: "m²", label: "denně uklizené plochy — zhruba 420 fotbalových hřišť" },
  { big: "365", unit: "dní", label: "v roce, bez jediné přestávky" },
  { big: "15", unit: "firem", label: "pod jednou holdingovou střechou" },
  { big: "№1", unit: "v ČR", label: "největší skupina ve svém oboru" },
];

export default function Page() {
  return (
    <main className="page">
      <header className="topbar">
        <a className="wordmark" href="#" aria-label="TSC GROUP">
          <span className="wordmark-tsc">TSC</span>
          <span className="wordmark-slash" aria-hidden="true" />
          <span className="wordmark-group">GROUP</span>
        </a>
        <span className="topbar-place">Facility management · Ostrava</span>
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-inner">
          <p className="eyebrow">Úklid · Čištění · Prádelna · Ostrava</p>
          <h1 className="hero-title" id="hero-title">
            Čistě
            <br />
            pro Vás<span className="dot">.</span>
          </h1>
          <p className="hero-lead">
            Setřeme za vás všechno, co se čistotou souvisí — od výrobní linky
            přes operační sál až po prosklenou fasádu. Jeden tah, čisto.
          </p>
          <div className="hero-cta">
            <a className="btn btn-primary" href="#poptavka">Nezávazná poptávka</a>
            <a className="btn btn-ghost" href="#co-delame">Co děláme</a>
          </div>
        </div>
        <SqueegeeWipe />
      </section>

      <section className="section section-services" id="co-delame" aria-labelledby="svc-title">
        <div className="container">
          <div className="sec-head">
            <p className="eyebrow eyebrow-dark">Co děláme</p>
            <h2 className="sec-title" id="svc-title">
              Jeden dodavatel pro každý provoz
            </h2>
            <p className="sec-intro">
              Zajišťujeme komplexní technické služby v šesti prostředích, která
              mají naprosto odlišné nároky. Vyberte to své — zbytek je naše
              starost.
            </p>
          </div>

          <ul className="sector-grid">
            {sectors.map((s) => (
              <li className="sector-card" key={s.name}>
                <span className="sector-corner" aria-hidden="true" />
                <h3 className="sector-name">{s.name}</h3>
                <p className="sector-note">{s.note}</p>
              </li>
            ))}
          </ul>

          <div className="svc-list-wrap">
            <p className="eyebrow eyebrow-dark">Rozsah služeb</p>
            <ul className="svc-list">
              {services.map((svc) => (
                <li className="svc-item" key={svc}>{svc}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section section-trust" aria-labelledby="trust-title">
        <div className="container">
          <div className="sec-head">
            <p className="eyebrow">Jsme TSC Group</p>
            <h2 className="sec-title sec-title-light" id="trust-title">
              Největší úklidová skupina v Česku
            </h2>
            <p className="sec-intro sec-intro-light">
              Najdete nás na výrobních linkách, operačních sálech, v
              laboratořích i v kancelářích. Spojujeme nejmodernější technologie
              s dlouholetými zkušenostmi — a jako holding patnácti firem se sídlem
              v Ostravě zvládneme i to, na co jiní nestačí.
            </p>
          </div>

          <dl className="kpi-grid">
            {kpis.map((k) => (
              <div className="kpi" key={k.label}>
                <dt className="kpi-num">
                  {k.big}
                  <span className="kpi-unit">{k.unit}</span>
                </dt>
                <dd className="kpi-label">{k.label}</dd>
              </div>
            ))}
          </dl>

          <p className="contact-line" id="poptavka">
            <span>Ostrava · Ukázková 123</span>
            <span>tel —</span>
            <span>e‑mail —</span>
          </p>
        </div>
      </section>
    </main>
  );
}
