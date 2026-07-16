import { Counter } from "./motion";

// Laminar streamline field — cyan contour lines that part around a mid
// stagnation point, the way conditioned air bends around a body in CFD.
function Flow({ variant = "dark" }: { variant?: "dark" | "light" | "blue" }) {
  const H = 600;
  const count = 22;
  const lines = [];
  for (let i = 0; i < count; i++) {
    const y = (H / count) * (i + 0.5);
    const dir = y === H / 2 ? 0 : Math.sign(y - H / 2);
    const push = dir * 46 * Math.exp(-Math.pow((y - H / 2) / 120, 2));
    const y2 = (y + push).toFixed(1);
    const yy = y.toFixed(1);
    const d = `M0,${yy} C400,${yy} 470,${y2} 600,${y2} C730,${y2} 800,${yy} 1200,${yy}`;
    lines.push(<path key={i} d={d} />);
  }
  return (
    <svg
      className={`flow flow--${variant}`}
      viewBox="0 0 1200 600"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      {lines}
    </svg>
  );
}

const services = [
  {
    n: "01",
    stage: "NÁVRH",
    title: "Inženýrské práce",
    body: "Stavíme na komplexním přístupu, technické kreativitě, znalosti norem a detailní znalosti postupů. Navrhneme řešení, které sedne na váš provoz i na rozpočet.",
  },
  {
    n: "02",
    stage: "REALIZACE",
    title: "Technika prostředí, chlazení a klimatizace",
    body: "Máme za sebou širokou škálu zařízení techniky prostředí, chlazení a klimatizace. Od 90. let prosazujeme efektivní a úsporná řešení, technicky kvalitně provedená.",
  },
  {
    n: "03",
    stage: "PROVOZ",
    title: "Automatizace a měření",
    body: "Optimální provoz je o přesnosti a rychlosti — a v tom jsou počítače často lepší než lidé. Zapojíme měřicí čidla, dodáme a naprogramujeme řízení.",
  },
];

const refs = [
  { name: "Výrobní firmy", note: "stabilní klima ve výrobě" },
  { name: "Serverovny a datová centra", note: "chlazení bez výpadku" },
  { name: "Lakovny a tiskárny", note: "odtah a filtrace výparů" },
  { name: "Stadiony a sportovní haly", note: "velké objemy vzduchu" },
  { name: "Zdravotnictví", note: "čisté a hygienické prostředí" },
  { name: "Potravinářství a vertikální farmy", note: "přesná teplota a vlhkost" },
];

export default function Page() {
  return (
    <main className="page">
      <header className="topbar">
        <div className="wrap topbar-inner">
          <span className="wordmark">
            air<span className="wordmark-accent">technology</span>
            <span className="wordmark-tag">s.r.o.</span>
          </span>
          <span className="topbar-meta">
            <span>Brno · vzduchotechnika od 90. let</span>
            <a href="mailto:info@airtechnology.cz">info@airtechnology.cz</a>
          </span>
        </div>
      </header>

      <section className="section hero">
        <Flow variant="dark" />
        <div className="wrap hero-inner">
          <p className="eyebrow eyebrow--cyan hero-eyebrow">
            Vzduchotechnika · Chlazení · Klimatizace — Brno
          </p>
          <h1 className="hero-title reveal">
            Optimální klima
            <br />
            <span className="hero-title-2">pro optimální výkon.</span>
          </h1>
          <p className="hero-lead">
            Řešíme techniku prostředí s vysokými užitnými vlastnostmi,
            minimálním dopadem na životní prostředí a dlouhou životností.
            Ekonomika a ekologie pro nás nejsou jen marketingové výrazy — od
            90. let navrhujeme úsporná řešení, která technicky sedí.
          </p>

          <dl className="readouts" aria-label="Klíčové údaje">
            <div className="readout">
              <dd className="readout-value">
                <Counter to={30} suffix="+" />
              </dd>
              <dt className="readout-label">let praxe · od 90. let</dt>
            </div>
            <div className="readout">
              <dd className="readout-value">
                <Counter to={6} />
              </dd>
              <dt className="readout-label">oborů v referencích</dt>
            </div>
            <div className="readout">
              <dd className="readout-value readout-value--txt">Brno</dd>
              <dt className="readout-label">návrh · realizace · servis</dt>
            </div>
          </dl>
        </div>
      </section>

      <section className="section services">
        <Flow variant="light" />
        <div className="wrap">
          <div className="section-head">
            <p className="eyebrow eyebrow--blue">Služby</p>
            <h2 className="section-title reveal">
              Co pro vás navrhneme a&nbsp;postavíme
            </h2>
          </div>
          <ol className="service-list">
            {services.map((s) => (
              <li key={s.n} className="service">
                <div className="service-index">
                  <span className="service-n">{s.n}</span>
                  <span className="service-stage">{s.stage}</span>
                </div>
                <div className="service-body">
                  <h3 className="service-title">{s.title}</h3>
                  <p className="service-text">{s.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section refs">
        <Flow variant="blue" />
        <div className="wrap">
          <div className="section-head">
            <p className="eyebrow eyebrow--cyan">Reference</p>
            <h2 className="section-title reveal">
              Kde už naše vzduchotechnika běží
            </h2>
            <p className="refs-lead">
              Naše zkušenosti s realizací zařízení techniky prostředí, chlazení
              a klimatizace — spolu s účastí na výzkumných a vývojových
              projektech partnerů — jsou zárukou bezvadné funkčnosti a přínosu
              pro vaše podnikání.
            </p>
          </div>

          <ul className="ref-grid">
            {refs.map((r) => (
              <li key={r.name} className="ref-cell">
                <span className="ref-name">{r.name}</span>
                <span className="ref-note">{r.note}</span>
              </li>
            ))}
          </ul>

          <p className="refs-address">
            Sídlo: Nové sady 988/2, Staré Brno, 602 00 Brno — Krajský soud v
            Brně, oddíl C, vložka 23508.
          </p>
        </div>
      </section>
    </main>
  );
}
