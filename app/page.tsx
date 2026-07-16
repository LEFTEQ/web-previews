import { HeroCounter } from "./motion";

type Corner = { className?: string; children: React.ReactNode };

function Frame({ className, children }: Corner) {
  return (
    <div className={"frame" + (className ? " " + className : "")}>
      <span className="tick tl" aria-hidden="true" />
      <span className="tick tr" aria-hidden="true" />
      <span className="tick bl" aria-hidden="true" />
      <span className="tick br" aria-hidden="true" />
      {children}
    </div>
  );
}

const genres = [
  {
    n: "01",
    name: "Ateliér",
    exif: "f/8 · 85 mm · ISO 100",
    desc:
      "Portréty v ateliéru na Rožňavské. Řízené studiové světlo, softboxy, černé pozadí i seamless bílá — přesně tak, jak to má sedět vám.",
  },
  {
    n: "02",
    name: "Exteriér",
    exif: "f/2.8 · 35 mm · ISO 200",
    desc:
      "Portréty a reportáž v ulicích Olomouce — Horní náměstí, parky i industriál. Přirozené světlo, žádné pózování na sílu.",
  },
  {
    n: "03",
    name: "Fitness",
    exif: "f/5.6 · 70 mm · ISO 400",
    desc:
      "Kondiční a soutěžní fotografie. Tvrdé, kontrastní světlo, které vykreslí každý sval a linii postavy.",
  },
  {
    n: "04",
    name: "Svatby",
    exif: "f/1.8 · 50 mm · ISO 640",
    desc:
      "Celý den beze spěchu — od příprav a obřadu po první tanec. Reportáž i portréty novomanželů, klidně po setmění.",
  },
  {
    n: "05",
    name: "Firmy",
    exif: "f/4 · 50 mm · ISO 200",
    desc:
      "Firemní portréty, produkt a reportáž z akcí. Jednotný vizuál pro celý tým i profily na web a LinkedIn.",
  },
];

export default function Page() {
  return (
    <main className="page">
      <div className="meter" aria-hidden="true">
        <span className="meter-cap">EV</span>
        <div className="meter-track" />
        <div className="meter-fill" />
        <ul className="meter-marks">
          <li>+3</li>
          <li>+2</li>
          <li>+1</li>
          <li className="zero">0</li>
          <li>−1</li>
          <li>−2</li>
          <li>−3</li>
        </ul>
      </div>

      {/* ---------- HERO ---------- */}
      <section className="sec hero hero-expose" aria-labelledby="hero-name">
        <Frame className="hero-frame">
          <div className="row top">
            <p className="eyebrow">Fotoateliér — Olomouc</p>
            <p className="counter">
              <HeroCounter /> <span className="dot">·</span> ÚVOD
            </p>
          </div>

          <div className="hero-body">
            <div className="hero-text">
              <h1 id="hero-name" className="display name">
                <span>Petr</span>
                <span className="surname">Šindela</span>
              </h1>
              <p className="lede">
                Portrét, svatba, reklama. Řízené světlo v ateliéru na
                Rožňavské — a jistá ruka v terénu po celé Olomouci.
              </p>
              <p className="hero-meta">
                Bc. Petr Šindela · fotograf · šest žánrů na jednom filmu
              </p>
            </div>

            <div className="aperture" aria-hidden="true">
              <svg viewBox="0 0 400 400" role="presentation">
                <circle className="barrel" cx="200" cy="200" r="188" />
                <circle className="barrel thin" cx="200" cy="200" r="172" />
                <polygon
                  className="iris"
                  points="270,200 235,260.6 165,260.6 130,200 165,139.4 235,139.4"
                />
                <g className="blades">
                  <line x1="270" y1="200" x2="285" y2="347.2" />
                  <line x1="235" y1="260.6" x2="115" y2="347.2" />
                  <line x1="165" y1="260.6" x2="30" y2="200" />
                  <line x1="130" y1="200" x2="115" y2="52.8" />
                  <line x1="165" y1="139.4" x2="285" y2="52.8" />
                  <line x1="235" y1="139.4" x2="370" y2="200" />
                </g>
              </svg>
            </div>
          </div>
        </Frame>
        <div className="expose-flash" aria-hidden="true" />
      </section>

      {/* ---------- ROLL / SLUŽBY ---------- */}
      <section className="sec roll" aria-labelledby="roll-title">
        <div className="sec-head">
          <p className="counter">06 · ROLIČKA</p>
          <h2 id="roll-title" className="display sec-title">
            Šest žánrů, jeden film
          </h2>
          <p className="sec-intro">
            Kontaktní list téhle práce. Vyberte políčko — na hover se zaostří,
            přesně tak, jak se rackuje objektiv před spouští.
          </p>
        </div>

        <ol className="grid">
          {genres.map((g) => (
            <li key={g.n}>
              <Frame className="tile">
                <span className="tile-n">{g.n}</span>
                <h3 className="display tile-name">{g.name}</h3>
                <p className="tile-exif">{g.exif}</p>
                <p className="tile-desc">{g.desc}</p>
              </Frame>
            </li>
          ))}
          <li>
            <Frame className="tile tile-cenik">
              <span className="tile-n">+</span>
              <h3 className="display tile-name">Ceník</h3>
              <p className="tile-exif">na míru zakázce</p>
              <p className="tile-desc">
                Cenu skládám podle žánru, délky a počtu retušovaných snímků.
                Ozvěte se s tím, co potřebujete — pošlu konkrétní kalkulaci.
              </p>
            </Frame>
          </li>
        </ol>
      </section>

      {/* ---------- O FOTOGRAFOVI / DŮVĚRA ---------- */}
      <section className="sec about" aria-labelledby="about-title">
        <div className="about-grid">
          <div className="about-text">
            <p className="counter dark">07 · ZA OBJEKTIVEM</p>
            <h2 id="about-title" className="display sec-title">
              Fotograf z Olomouce, ne šablona
            </h2>
            <p className="about-lede">
              Fotografuju lidi i značky — v ateliéru na Rožňavské 8, kde mám
              plnou kontrolu nad světlem, a v terénu, kde jde o okamžik.
              Portrét, který sedí. Svatba, na kterou se vejde celý den.
              Firemní vizuál, který drží pohromadě.
            </p>
            <p className="about-lede">
              Domluva je přímá: řeknete, k čemu snímky poslouží, já navrhnu
              světlo, termín a rozsah. Žádné balíčky naslepo.
            </p>
          </div>

          <Frame className="card">
            <p className="card-label">Kontaktní údaje</p>
            <dl className="facts">
              <div>
                <dt>Ateliér</dt>
                <dd>Rožňavská 8, Olomouc</dd>
              </div>
              <div>
                <dt>Telefon</dt>
                <dd>
                  <a href="tel:+420777984472">777 984 472</a>
                </dd>
              </div>
              <div>
                <dt>E-mail</dt>
                <dd>
                  <a href="mailto:petr.sindela@gmail.com">
                    petr.sindela@gmail.com
                  </a>
                </dd>
              </div>
              <div>
                <dt>IČ</dt>
                <dd>75422131 · plátce DPH</dd>
              </div>
            </dl>
          </Frame>
        </div>
      </section>
    </main>
  );
}
