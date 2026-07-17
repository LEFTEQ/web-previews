import { AiImage } from "./_ui";

const SERVICES = [
  {
    code: "D-01",
    title: "Demolice objektů",
    body: "Ruční i strojní bourání staveb, zdiva, komínů i betonových konstrukcí. Řízené rozebrání tak, aby okolí zůstalo celé.",
  },
  {
    code: "Z-02",
    title: "Zemní a výkopové práce",
    body: "Výkopy základů, přípojek a jímek, srovnání a modelace terénu, přesuny zeminy na místě i mimo něj.",
  },
  {
    code: "S-03",
    title: "Odvoz a třídění suti",
    body: "Kontejnery přistavíme, naplníme a odvezeme. Suť roztřídíme, beton a cihlu podrtíme na recyklát.",
  },
  {
    code: "A-04",
    title: "Autodoprava s hydraulickou rukou",
    body: "Volvo FM + PM48 SP + JIB. Nakládka, doprava a přesná pokládka materiálu i tam, kde se jeřáb nedostane.",
  },
  {
    code: "J-05",
    title: "Jeřábnické práce",
    body: "Mobilní jeřáb Liebherr 1060/2 na těžká břemena, montáže a demontáže konstrukcí.",
  },
  {
    code: "P-06",
    title: "Příprava plochy pod stavbu",
    body: "Od poptávky po předání: čistá, urovnaná a zhutněná parcela připravená na první základ.",
  },
];

const MACHINES = [
  {
    name: "Liebherr 1060/2",
    kind: "Mobilní jeřáb",
    load: "60",
    unit: "tun",
    note: "Těžká břemena, montáže vazníků a demontáž konstrukcí ve výšce i ve stísněném prostoru.",
  },
  {
    name: "Volvo FM + PM48",
    kind: "Autodoprava · hydraulická ruka",
    load: "48",
    unit: "tm",
    note: "Nosič PM48 SP + JIB pro přesnou nakládku a pokládku materiálu přímo na místo.",
  },
];

export default function Page() {
  return (
    <main className="page">
      <header className="top">
        <a className="mark" href="#" aria-label="Stavby Gomolák, demolice Tachov">
          <span className="mark__name">GOMOLÁK</span>
          <span className="mark__sub">s.r.o. · demolice &amp; zemní práce · Tachov</span>
        </a>
        <a className="top__call" href="tel:+420721646825">
          <span className="top__label">Zavolat</span>
          <span className="top__num">721&nbsp;646&nbsp;825</span>
        </a>
      </header>

      <section className="hero" aria-labelledby="hero-word">
        <div className="hero__dust" aria-hidden="true" />
        <p className="hero__eyebrow">
          <span className="tick" aria-hidden="true" /> Demoliční a zemní práce — Tachovsko
        </p>

        <h1 className="hero__word" id="hero-word">
          <span className="hero__size">Demolice</span>
          <span className="frac frac--top" aria-hidden="true">Demolice</span>
          <span className="frac frac--bot" aria-hidden="true">Demolice</span>
        </h1>

        <p className="hero__lede">
          Rozebereme, odvezeme, srovnáme. Objekty, zdivo, základy i beton — s jeřábem
          Liebherr a hydraulickou rukou Volvo. Zůstane po nás čistá plocha připravená
          na nový základ.
        </p>

        <div className="hero__facts">
          <a className="btn" href="tel:+420721646825">Zavolat na zaměření</a>
          <dl className="hero__spec">
            <div><dt>Sídlo</dt><dd>Svobodka 55, Tachov</dd></div>
            <div><dt>V oboru</dt><dd>Od poptávky po předání</dd></div>
          </dl>
        </div>
      </section>

      <section className="sec sec--services" aria-labelledby="sluzby">
        <div className="fault fault--a" aria-hidden="true">
          <div className="fault__band">
            <span>FM+PM48 · SP+JIB · 1060/2 · 60 T · SUŤ · BETON&nbsp;&nbsp;</span>
            <span>FM+PM48 · SP+JIB · 1060/2 · 60 T · SUŤ · BETON&nbsp;&nbsp;</span>
          </div>
        </div>

        <div className="wrap">
          <header className="sec__head">
            <p className="sec__ey">Výpis prací</p>
            <h2 id="sluzby">Co po nás zbyde: rovná plocha.</h2>
            <p className="sec__intro">
              Od jednoho zbořeného přístavku po celý dvůr. Vezmeme práci od začátku
              do konce — bourání, výkop, odvoz suti i finální srovnání terénu.
            </p>
          </header>

          <ul className="grid">
            {SERVICES.map((s) => (
              <li className="card" key={s.code}>
                <span className="card__code">{s.code}</span>
                <h3 className="card__title">{s.title}</h3>
                <p className="card__body">{s.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="sec sec--about" aria-labelledby="stroje">
        <div className="fault fault--b" aria-hidden="true">
          <div className="fault__band fault__band--dark">
            <span>TACHOV 347 01 · IČO 07046332 · ZEMNÍ · VÝKOPOVÉ&nbsp;&nbsp;</span>
            <span>TACHOV 347 01 · IČO 07046332 · ZEMNÍ · VÝKOPOVÉ&nbsp;&nbsp;</span>
          </div>
        </div>

        <div className="wrap">
          <header className="sec__head">
            <p className="sec__ey sec__ey--y">Stroje &amp; firma</p>
            <h2 id="stroje">Techniku, co to unese, máme vlastní.</h2>
            <p className="sec__intro sec__intro--light">
              Firma z Tachova, IČO 07046332. Žádné půjčené stroje na poslední chvíli —
              jeřáb i hydraulická ruka jsou naše a s obsluhou, která je zná.
            </p>
          </header>

          <div className="machines">
            {MACHINES.map((m) => (
              <article className="mach" key={m.name}>
                <div className="mach__load">
                  <span className="mach__num">{m.load}</span>
                  <span className="mach__unit">{m.unit}</span>
                </div>
                <div className="mach__meta">
                  <p className="mach__kind">{m.kind}</p>
                  <h3 className="mach__name">{m.name}</h3>
                  <p className="mach__note">{m.note}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="trust">
            <p className="trust__line">
              Poctivá, čistě odvedená práce — bez skrytých příplatků a s odvezenou sutí.
              Přijedeme, zaměříme a řekneme rovnou, co to obnáší.
            </p>
            <a className="btn btn--ghost" href="tel:+420721646825">Domluvit termín · 721 646 825</a>
          </div>
        </div>
      </section>
    </main>
  );
}
