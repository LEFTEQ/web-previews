import React from "react";

// Deterministic material pattern for the hero "ceiling wall" — reads like a real cassette raster.
const WALL_MATS = [
  "zn", "al", "zn", "zn", "cu", "al",
  "zn", "pa", "al", "zn", "zn", "cu",
  "al", "zn", "zn", "cu", "zn", "al",
  "zn", "zn", "pa", "al", "zn", "zn",
  "cu", "al", "zn", "zn", "al", "zn",
  "zn", "al", "cu", "zn", "pa", "al",
];

const SYSTEMS = [
  {
    mat: "al",
    material: "Hliník",
    title: "Kazetové podhledy",
    body:
      "Lay-in i clip-in kazety 600×600 do viditelného i skrytého rastru. Perforace na míru pro akustiku sálů, hal a recepcí.",
  },
  {
    mat: "zn",
    material: "Pozinkovaný plech",
    title: "Lamely a lišty",
    body:
      "Lineární lamelové podhledy a obklady. Držíme jednu spáru přes celou délku chodby — bez vln a rozjetých fug.",
  },
  {
    mat: "cu",
    material: "Ocel · kašírování",
    title: "Dveře a zárubně",
    body:
      "Interiérové kovové dveře a zárubně na zakázku — v provedení protipožárním, akustickém i bezpečnostním.",
  },
  {
    mat: "pa",
    material: "Detail",
    title: "Revizní dvířka",
    body:
      "Osazená do podhledu i stěny tak, že v rastru téměř zmizí. Přístup k rozvodům bez narušení plochy stropu.",
  },
  {
    mat: "zn",
    material: "Konstrukce",
    title: "SDK a rekonstrukce",
    body:
      "Zděné a sádrokartonové konstrukce, stěrky, prosklené stěny — kompletní vnitřní dostavba na klíč.",
  },
  {
    mat: "cu",
    material: "Akustika",
    title: "Přerušovače vazby",
    body:
      "Přerušovače akustické vazby, které oddělí místnosti tak, aby si zvuk nenašel cestu podhledem.",
  },
];

const STATS = [
  { n: "30", u: "let", l: "na českých stavbách" },
  { n: "55", u: "", l: "certifikovaných výrobků" },
  { n: "2 600", u: "", l: "realizovaných staveb" },
  { n: "1:1", u: "", l: "zakázková výroba na míru" },
];

export default function Page() {
  return (
    <main className="page">
      {/* ============ HERO ============ */}
      <header className="topbar">
        <a className="wordmark" href="#" aria-label="ALLEGRO — kovové podhledy, Praha">
          <span className="wordmark__dot" aria-hidden="true" />
          <span className="wordmark__name">ALLEGRO</span>
          <span className="wordmark__suffix">s.r.o.</span>
        </a>
        <span className="topbar__tag">Kovové podhledy · Praha</span>
      </header>

      <section className="hero">
        <div className="hero__wall rake" aria-hidden="true">
          <div className="cassette-wall">
            {WALL_MATS.map((m, i) => (
              <div key={i} className={`cassette m-${m}`} />
            ))}
          </div>
          <div className="rake__light" />
        </div>

        <div className="hero__inner">
          <p className="eyebrow">Sádrokartonář &amp; kovovýroba od roku 1994</p>
          <h1 className="hero__title">
            Kovové podhledy z{" "}
            <span className="tint tint--alu">hliníku</span>,{" "}
            <span className="tint tint--cu">mědi</span> a{" "}
            <span className="tint tint--zn">pozinku</span> —
            <br />
            srovnané do jedné linky.
          </h1>
          <p className="hero__lead">
            Lišty, lamely a perforované kazety montujeme na míru pro hotely,
            banky, nemocnice i školy. Od zaměření stropu po zaklapnutí poslední
            kazety do rastru — s jednou spárou přes celý sál.
          </p>
          <a className="link-cta" href="#systemy">
            Projděte sortiment
            <span aria-hidden="true" className="link-cta__arrow">↓</span>
          </a>
        </div>
      </section>

      {/* ============ SYSTÉMY ============ */}
      <section className="section" id="systemy">
        <div className="section__head">
          <span className="section__label">Co pro vás vyrobíme a smontujeme</span>
          <h2 className="section__title">Kovovýroba i suchá výstavba pod jednou střechou</h2>
        </div>

        <div className="tiles">
          {SYSTEMS.map((s, i) => (
            <article key={i} className="tile">
              <div className={`tile__face rake m-${s.mat}`} aria-hidden="true">
                <div className="rake__light" />
              </div>
              <div className="tile__body">
                <span className="tile__material">{s.material}</span>
                <h3 className="tile__title">{s.title}</h3>
                <p className="tile__text">{s.body}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ============ DŮVĚRA / REFERENCE ============ */}
      <section className="section section--alt" id="reference">
        <div className="section__head">
          <span className="section__label">Proč si vybrat ALLEGRO</span>
          <h2 className="section__title">Stropy, které kolaudace pustí napoprvé</h2>
        </div>

        <div className="stats">
          {STATS.map((s, i) => (
            <div key={i} className="stat">
              <span className="stat__num">
                {s.n}
                {s.u ? <span className="stat__unit"> {s.u}</span> : null}
              </span>
              <span className="stat__label">{s.l}</span>
            </div>
          ))}
        </div>

        <article className="ref">
          <div className="ref__spine" aria-hidden="true" />
          <div className="ref__content">
            <p className="ref__kicker">Reference · Praha, Rohanské nábřeží</p>
            <h3 className="ref__title">Rohan City — administrativní budova A1</h3>
            <p className="ref__text">
              Podobu budovy navrhla architektka Eva Jiřičná. Vyhráli jsme
              výběrové řízení na vnitřní dostavbu: kompletní dodávku a montáž
              zděných a SDK konstrukcí včetně povrchových úprav, výplně otvorů,
              revizní dvířka, vnitřní dveře i prosklené stěny — a zámečnické
              výrobky k tomu.
            </p>
            <p className="ref__quote">
              „Příklad dobré praxe za spolehlivost.“
            </p>
            <p className="ref__source">
              Ruby Project Management, konference RUBY, 24. 1. 2024
            </p>
          </div>
        </article>

        <p className="clientele">
          Montujeme tam, kde strop musí sedět a vydržet: hotely, banky,
          kancelářské budovy, nemocnice, školy, sportovní haly i bytové domy.
        </p>
      </section>
    </main>
  );
}
