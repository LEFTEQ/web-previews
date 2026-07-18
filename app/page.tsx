import { CountUp } from "./motion";

const pillars = [
  {
    ref: "A·01",
    title: "Generální dodávky staveb",
    body: "Přebíráme jednu smlouvu a jednu odpovědnost za celou stavbu — od výkopu po předání klíčů. Vy máte jednoho partnera, my celý tým.",
  },
  {
    ref: "B·02",
    title: "Design & Build",
    body: "Projekt i realizaci vedeme v jedněch rukou. Řešení optimalizujeme dřív, než se zabetonuje první čára, a rozpočet s termínem hlídáme společně.",
  },
  {
    ref: "C·03",
    title: "Development",
    body: "Najdeme pozemek, ošetříme právní i finanční stránku a dovedeme záměr až k prodeji nebo pronájmu. Od myšlenky po kolaudaci.",
  },
];

const steps = [
  ["01", "Pozemky", "Najdeme parcelu, která nejlépe odpovídá záměru."],
  ["02", "Právní a finanční poradenství", "Ošetříme povolení, smlouvy i financování."],
  ["03", "Prodej a leasing", "Zajistíme prodej či pronájem z našeho portfolia."],
  ["04", "Koncept a projektování", "Od studie proveditelnosti po realizační dokumentaci."],
  ["05", "Řízení projektu a inženýring", "Vedeme stavbu týmem zkušených profesionálů."],
  ["06", "Výstavba", "Postavíme v požadovaném termínu i kvalitě."],
];

const sectors = [
  "Průmyslové",
  "Rezidenční",
  "Vodohospodářské",
  "Kancelářské",
  "Vzdělávání",
  "Zdravotní péče",
  "Volný čas",
];

export default function Page() {
  return (
    <main className="sheet">
      {/* ————— PŘÍZEMÍ · SETTING OUT ————— */}
      <header className="band band--hero">
        <span className="bubble bubble--a" aria-hidden="true">A·1</span>
        <div className="band__inner">
          <nav className="topbar">
            <a className="wordmark" href="#portfolio">
              <span className="wordmark__mark">VCES</span>
              <span className="wordmark__sub">a.s. — generální dodavatel staveb</span>
            </a>
            <span className="topbar__place">Hradec Králové · východní Čechy</span>
          </nav>

          <p className="storey storey--hero">±0,000 &nbsp;·&nbsp; PŘÍZEMÍ &nbsp;·&nbsp; VYTYČENÍ</p>

          <h1 className="hero__title">
            <span className="hero__line">OD PRVNÍ</span>
            <span className="hero__line">ČÁRY PO</span>
            <span className="hero__line hero__line--accent">KOLAUDACI</span>
          </h1>

          <div className="hero__rule" aria-hidden="true" />

          <p className="hero__lead">
            Každou stavbu nejdřív vytyčíme na papíře — pozemek, rozpočet, termín. Teprve
            když čáry sedí, začneme stavět. Ve východních Čechách tak vznikají nemocnice,
            výrobní haly i celé městské čtvrti.
          </p>

          <dl className="dims">
            <div className="dim">
              <dt className="dim__fig">
                <CountUp to={1.367} decimals={3} /> <span className="dim__unit">mld. Kč</span>
              </dt>
              <dd className="dim__label">objem modernizace Svitavské nemocnice</dd>
            </div>
            <div className="dim">
              <dt className="dim__fig">
                <CountUp to={2030} />
              </dt>
              <dd className="dim__label">plánované dokončení areálu</dd>
            </div>
          </dl>
        </div>
      </header>

      {/* ————— 1.NP · PORTFOLIO ————— */}
      <section className="band band--dark" id="portfolio">
        <span className="bubble bubble--b" aria-hidden="true">B·2</span>
        <div className="band__inner">
          <div className="band__head">
            <p className="storey">+3,500 &nbsp;·&nbsp; 1.NP &nbsp;·&nbsp; PORTFOLIO</p>
            <h2 className="band__title">Tři patra, na kterých stavíme</h2>
            <p className="band__intro">
              Pro každý investiční záměr hledáme nejvhodnější řešení — stavební,
              technologické i finanční. Naše zkušenosti se skládají na sebe jako podlaží.
            </p>
          </div>

          <ol className="pillars">
            {pillars.map((p) => (
              <li className="pillar" key={p.ref}>
                <span className="pillar__ref">{p.ref}</span>
                <h3 className="pillar__title">{p.title}</h3>
                <p className="pillar__body">{p.body}</p>
              </li>
            ))}
          </ol>

          <div className="process">
            <p className="process__eyebrow">Od záměru k realizaci — šest měřených kroků</p>
            <ol className="steps">
              {steps.map(([n, t, d]) => (
                <li className="step" key={n}>
                  <span className="step__n">{n}</span>
                  <div>
                    <h4 className="step__t">{t}</h4>
                    <p className="step__d">{d}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* ————— 2.NP · REFERENCE ————— */}
      <section className="band band--paper" id="reference">
        <span className="bubble bubble--c" aria-hidden="true">C·3</span>
        <div className="band__inner">
          <div className="band__head">
            <p className="storey">+7,000 &nbsp;·&nbsp; 2.NP &nbsp;·&nbsp; REFERENCE</p>
            <h2 className="band__title">Postavené, změřené, předané</h2>
          </div>

          <article className="feature">
            <div className="feature__body">
              <h3 className="feature__title">Modernizace Svitavské nemocnice</h3>
              <p className="feature__text">
                Historicky druhá největší krajská investice do zdravotnictví. Ve sdružení
                s firmou SYNER měníme tvář celého areálu — od pavilonů po revitalizovaný
                park u kostela sv. Josefa. Komplexní modernizaci dokončíme v roce 2030.
              </p>
            </div>
            <dl className="feature__dims">
              <div className="dim dim--light">
                <dt className="dim__fig">
                  <CountUp to={1.367} decimals={3} /> <span className="dim__unit">mld. Kč</span>
                </dt>
                <dd className="dim__label">celkový objem zakázky vč. DPH</dd>
              </div>
              <div className="dim dim--light">
                <dt className="dim__fig">
                  <CountUp to={2030} />
                </dt>
                <dd className="dim__label">rok dokončení</dd>
              </div>
            </dl>
          </article>

          <div className="trust">
            <div className="trust__col">
              <p className="trust__eyebrow">Vybrané realizace</p>
              <ul className="chips">
                <li className="chip">Pepperl+Fuchs</li>
                <li className="chip">LiNK Hradec Králové</li>
                <li className="chip">Nexen Tire</li>
              </ul>
            </div>
            <div className="trust__col">
              <p className="trust__eyebrow">Stavíme napříč sektory</p>
              <ul className="chips chips--sector">
                {sectors.map((s) => (
                  <li className="chip chip--sector" key={s}>{s}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
