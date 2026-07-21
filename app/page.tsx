import { AiImage } from "./_ui";
import { Reveal, StrataCut } from "./motion";

const services = [
  {
    n: "01",
    depth: "vrstva ornice",
    title: "Zemní práce",
    body:
      "Kompletní výkopové práce, výkopy základů, terénní úpravy, přeložky sítí a zhotovení komunikací. Zakousneme se do černozemě i do slehlé hlíny.",
  },
  {
    n: "02",
    depth: "odvoz materiálu",
    title: "Nákladní doprava",
    body:
      "Převoz zeminy a sypkých materiálů, dovoz kameniva a recyklátu, přesuny stavebních strojů a mechanizace po celém Olomouckém kraji.",
  },
  {
    n: "03",
    depth: "zpět na recyklát",
    title: "Demolice a recyklace",
    body:
      "Bezpečné demoliční a bourací práce a recyklace stavební suti zpět na využitelný materiál — beton a cihlu vrátíme do stavby jako drť.",
  },
];

const stats = [
  { k: "1999", l: "na Hané kopeme od tohoto roku" },
  { k: "Olomoucký kraj", l: "kde nás na stavbách potkáte" },
  { k: "3 obory", l: "zemní práce · doprava · demolice" },
];

export default function Page() {
  return (
    <main>
      <header className="hero">
        <AiImage
          src="/hero.webp"
          alt="Nákladní automobil a pásový bagr firmy SIMKOVIC při zemních pracích na hanácké černozemi"
          className="hero__media"
        />
        <div className="hero__scrim" aria-hidden="true" />
        <div className="hero__inner section__inner">
          <nav className="topbar" aria-label="Hlavní">
            <a className="wordmark" href="#top" aria-label="SIMKOVIC.cz, úvod">
              <span className="wordmark__name">SIMKOVIC</span>
              <span className="wordmark__tld">.cz</span>
              <span className="wordmark__ext">s.r.o.</span>
            </a>
            <div className="topbar__links">
              <a href="#sluzby">Služby</a>
              <a href="#reference">Reference</a>
            </div>
          </nav>

          <div className="hero__copy">
            <p className="eyebrow eyebrow--light">
              <span className="eyebrow__tick" aria-hidden="true" />
              Olomouc · Haná · od roku 1999
            </p>
            <h1 className="hero__title display">
              Do hanácké černozemě se&nbsp;zakousneme už&nbsp;od roku 1999.
            </h1>
            <p className="hero__sub">
              Zemní práce, nákladní doprava a demolice s recyklací. Těžká
              technika a sehraný tým pro ty nejnáročnější stavby v Olomouckém
              kraji.
            </p>
            <div className="actions">
              <a className="btn btn--primary" href="#sluzby">
                Naše služby
              </a>
              <a className="btn btn--ghost" href="#reference">
                Reference
              </a>
            </div>
          </div>
        </div>
      </header>

      <StrataCut prev="#161009" next="#f4f1ea" />

      <section id="sluzby" className="section section--light">
        <div className="section__inner">
          <Reveal className="section-head">
            <p className="eyebrow">
              <span className="eyebrow__tick" aria-hidden="true" />
              Co umíme — tři vrstvy jedné práce
            </p>
            <h2 className="section-title display">
              Od výkopu po recyklát
            </h2>
            <p className="section-lead">
              Materiál sledujeme celou cestu: vykopeme ho ze země, odvezeme
              tam, kde je potřeba, a po demolici ho vrátíme zpět jako drť.
              Jeden tým, jeden dvorek strojů.
            </p>
          </Reveal>

          <ol className="services">
            {services.map((s) => (
              <Reveal key={s.n} className="service">
                <li className="service__li">
                  <div className="service__meta">
                    <span className="service__num display">{s.n}</span>
                    <span className="service__depth">{s.depth}</span>
                  </div>
                  <h3 className="service__title display">{s.title}</h3>
                  <p className="service__body">{s.body}</p>
                </li>
              </Reveal>
            ))}
          </ol>

          <Reveal className="section-figure">
            <AiImage
              src="/section-1.webp"
              alt="Technika firmy SIMKOVIC při nakládce a odvozu zeminy na staveništi"
              className="section-figure__img"
            />
          </Reveal>
        </div>
      </section>

      <StrataCut prev="#f4f1ea" next="#161009" />

      <section id="reference" className="section section--dark">
        <div className="section__inner trust">
          <Reveal className="trust__copy">
            <p className="eyebrow eyebrow--light">
              <span className="eyebrow__tick" aria-hidden="true" />
              Proč SIMKOVIC
            </p>
            <h2 className="section-title display">
              Vždy tam, kde je potřeba spolehlivá technika
            </h2>
            <p className="section-lead section-lead--light">
              Potkáte nás na mnoha významných stavbách nejen v Olomouckém
              kraji. Ať jde o výkop základů rodinného domu, nebo demolici
              průmyslové haly — jdeme do toho se stejnou pečlivostí a se
              špičkovým technickým zázemím.
            </p>

            <dl className="stats">
              {stats.map((st) => (
                <div className="stat" key={st.k}>
                  <dt className="stat__k display">{st.k}</dt>
                  <dd className="stat__l">{st.l}</dd>
                </div>
              ))}
            </dl>
          </Reveal>

          <Reveal className="trust__figure">
            <AiImage
              src="/section-2.webp"
              alt="Sehraný tým a těžká technika firmy SIMKOVIC na referenčním projektu v Olomouckém kraji"
              className="trust__img"
            />
          </Reveal>
        </div>
      </section>
    </main>
  );
}
