import type { ReactNode } from "react";

function Foot({ className }: { className?: string }): ReactNode {
  return (
    <svg
      className={`foot${className ? " " + className : ""}`}
      viewBox="0 0 64 104"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M33 34c11.5 0 18.5 9.5 18.5 24.5C51.5 75 44 89 33 89S14.5 75 14.5 58.5C14.5 43.5 21.5 34 33 34z" />
      <ellipse cx="17.5" cy="25" rx="7" ry="8" />
      <ellipse cx="30" cy="15.5" rx="5.6" ry="6.6" />
      <ellipse cx="40.5" cy="14.5" rx="5" ry="6" />
      <ellipse cx="49" cy="18" rx="4.2" ry="5" />
      <ellipse cx="55.5" cy="24.5" rx="3.5" ry="4.2" />
    </svg>
  );
}

function StepDown(): ReactNode {
  return (
    <div className="stepdown" aria-hidden="true">
      <span className="step" style={{ ["--gy" as string]: "-20px" }}>
        <Foot />
      </span>
      <span className="step" style={{ ["--gy" as string]: "-4px" }}>
        <Foot className="flip" />
      </span>
      <span className="step" style={{ ["--gy" as string]: "12px" }}>
        <Foot />
      </span>
    </div>
  );
}

const kategorie = [
  {
    t: "Dřevěné hračky",
    d: "Ručně malované z Detoy — české továrny v Jizerských horách, která jede od roku 1908 na původních strojích.",
  },
  {
    t: "Barefoot obouvání",
    d: "Boty, co nechají dětské prsty dýchat a nohu růst do zdravého tvaru. FARE, sandály na suchý zip i botanika.",
  },
  {
    t: "Knížky a leporela",
    d: "Od prvních kontrastních kartiček přes Krtečka a pexesa až po večerníčkové příběhy na dobrou noc.",
  },
  {
    t: "Na písek i na ven",
    d: "Babovky, cvrnkací skleněné kuličky a bublifuk, co udělá opravdu velkou bublinu. Léto venku, ne u obrazovky.",
  },
  {
    t: "Tvoření a Montessori",
    d: "Materiály, co zabaví ruce i hlavu. Žádné blikání ani baterky — jen dřevo, papír a nápad.",
  },
  {
    t: "Společenské a cestovní hry",
    d: "Pexesa, karetní a cestovní hry, co se vejdou do batohu na výlet a zabaví celou rodinu.",
  },
];

const tipy = [
  { t: "Babovky na písek — pastelový set", c: "149 Kč" },
  { t: "Hugovy cvrnkací skleněné kuličky", c: "250 Kč" },
  { t: "Hugův cool bublifuk", c: "329 Kč" },
  { t: "Nafukovací kánoe na vodu", c: "820 Kč" },
];

const duvera = [
  {
    t: "Radíme jako rodiče rodičům",
    d: "Za pultem stojí lidé, kteří sami mají doma děti. Nedoporučíme vám nic, co bychom nedali vlastním.",
  },
  {
    t: "Přes 4 500 kousků skladem",
    d: "Vybíráme ty nejkrásnější hračky ručně. Skoro všechno je skladem a pošleme hned.",
  },
  {
    t: "Jen z Česka a Slovenska",
    d: "Každým nákupem podpoříte nejmíň jednoho ze 150 malých českých a slovenských výrobců.",
  },
  {
    t: "Tři kamenné prodejny v Praze",
    d: "Otevřeno Po–So 10:00–18:00. Přijďte si hračky osahat a nechte děti vyzkoušet.",
  },
];

export default function Page(): ReactNode {
  return (
    <main className="page" id="top">
      <header className="topbar">
        <a className="brand" href="#top">
          <span className="brand-name">Hugo chodí bos</span>
          <Foot className="brandfoot" />
        </a>
        <span className="hours">Praha · Po–So 10–18</span>
      </header>

      <section className="band band--paper hero">
        <Foot className="hero-mark" />
        <div className="wrap hero-wrap">
          <p className="eyebrow">Malé pražské hračkářství od roku 2014</p>
          <h1 className="hero-title">
            Hračky z Česka, co vydrží
            <br />
            <span className="hl">víc než jedno dětství.</span>
          </h1>
          <p className="lede">
            Dřevo, papír a bosé nohy místo baterek a blikání. Přes 4 500 pečlivě
            vybraných kousků od 150 českých a slovenských výrobců — a boty, které
            nechají dětské prsty dýchat.
          </p>

          <div className="walk">
            <div className="trail" aria-hidden="true">
              <span className="step s1" style={{ ["--gy" as string]: "-12px" }}>
                <Foot />
              </span>
              <span className="step s2" style={{ ["--gy" as string]: "6px" }}>
                <Foot className="flip" />
              </span>
              <span className="step s3" style={{ ["--gy" as string]: "-12px" }}>
                <Foot />
              </span>
              <span className="step s4" style={{ ["--gy" as string]: "6px" }}>
                <Foot className="flip" />
              </span>
              <span className="step s5" style={{ ["--gy" as string]: "-12px" }}>
                <Foot />
              </span>
            </div>
            <a className="cta" href="#nabidka">
              Chci to zkusit!
            </a>
          </div>
          <a className="textlink" href="#nabidka">
            Projít celý obchod →
          </a>
        </div>
      </section>

      <section className="band band--sand" id="nabidka" aria-labelledby="nabidka-h">
        <StepDown />
        <div className="wrap">
          <p className="eyebrow eyebrow--onband">Kudy se u nás vydáte</p>
          <h2 className="section-title" id="nabidka-h">
            Šest cestiček pro malé bosé nohy
          </h2>
          <div className="grid">
            {kategorie.map((k) => (
              <article className="card" key={k.t}>
                <h3 className="card-title">{k.t}</h3>
                <p className="card-text">{k.d}</p>
              </article>
            ))}
          </div>

          <div className="tips">
            <h3 className="tips-title">Letní tipy, co teď letí</h3>
            <ul className="tips-list">
              {tipy.map((p) => (
                <li className="tip" key={p.t}>
                  <span className="tip-name">{p.t}</span>
                  <span className="tip-meta">
                    <span className="stock">Skladem</span>
                    <span className="price">{p.c}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="band band--green" aria-labelledby="onas-h">
        <StepDown />
        <div className="wrap">
          <p className="eyebrow eyebrow--dark">Kdo za pultem stojí</p>
          <h2 className="section-title section-title--light" id="onas-h">
            Jako rodiče rodičům
          </h2>
          <p className="lede lede--light">
            Hugova cesta začala v roce 2014 a od té doby jsme neuhnuli: hračky,
            které mají duši, a lidé, kteří jim rozumí. Přijďte se poradit —
            osobně i telefonicky.
          </p>

          <div className="grid grid--trust">
            {duvera.map((d) => (
              <article className="card card--light" key={d.t}>
                <h3 className="card-title">{d.t}</h3>
                <p className="card-text">{d.d}</p>
              </article>
            ))}
          </div>

          <p className="ask">
            Ptejte se, rádi poradíme:{" "}
            <a className="textlink textlink--light" href="tel:+420777111222">
              777 111 222
            </a>{" "}
            ·{" "}
            <a className="textlink textlink--light" href="mailto:info@example.cz">
              info@example.cz
            </a>
          </p>
        </div>
      </section>
    </main>
  );
}
