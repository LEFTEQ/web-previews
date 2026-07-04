import type { CSSProperties } from "react";

export default function Page() {
  const pools = [
    {
      n: "01",
      title: "Plastové bazény",
      lead: "Svařené z desek, na míru vaší zahradě",
      body:
        "Vyrábíme svařováním speciálních desek, které odolávají mrazu i slunci. Díky tvárnému plastu vám postavíme kruh, ovál, obdélník i atypický tvar podle vašeho přání. Kvalita, která vydrží, za rozumnou cenu.",
      shape: "rect",
    },
    {
      n: "02",
      title: "Fóliové bazény",
      lead: "Betonová konstrukce, fólie v barvě, kterou si vyberete",
      body:
        "Železobetonové dno a stěny pokryjeme fólií z široké nabídky odstínů. Montáž je snadná a případné poškození opravíme i u napuštěného bazénu, takže nemusíte vypouštět vodu.",
      shape: "oval",
    },
    {
      n: "03",
      title: "Nadzemní bazény",
      lead: "Kruh na zahradu bez kopání",
      body:
        "Nechcete kopat? Kruhový nadzemní bazén postavíme rychle a levně. Ideální začátek pro chatu, chalupu i menší zahradu na Českobudějovicku.",
      shape: "circle",
    },
  ];

  return (
    <main className="iz">
      <header className="iz-top">
        <a className="iz-wordmark" href="#" aria-label="Izoplast — bazény České Budějovice">
          <span className="iz-wordmark-drop" aria-hidden="true" />
          Izoplast
        </a>
        <nav className="iz-nav" aria-label="Hlavní">
          <a href="#sortiment">Bazény</a>
          <a href="#duvera">O nás</a>
          <a className="iz-call" href="tel:+420380000000">Zavolat</a>
        </nav>
      </header>

      <section className="iz-hero" aria-labelledby="iz-hero-title">
        <img
          className="iz-hero-img"
          src="/hero.webp"
          alt="Zapuštěný bazén na zahradě rodinného domu na Českobudějovicku"
          width={1600}
          height={1000}
        />
        <div className="iz-hero-scrim" aria-hidden="true" />

        <div className="iz-hero-body">
          <p className="iz-eyebrow">Bazénové centrum · Hlinsko, České Budějovice</p>
          <h1 id="iz-hero-title">
            Voda na vaší
            <br />
            zahradě.
          </h1>
          <p className="iz-lead">
            Plastové, fóliové i nadzemní bazény vyrábíme a montujeme od roku, kdy
            v Budějovicích ještě nikdo neuměl fólii svařit tak, aby držela. Poradíme
            s tvarem, čištěním i tím, co se vejde do vašeho rozpočtu.
          </p>
          <div className="iz-hero-cta">
            <a className="iz-btn" href="#sortiment">
              Vybrat bazén
            </a>
            <a className="iz-btn iz-btn-ghost" href="tel:+420380000000">
              Zavolat a poradit se
            </a>
          </div>
        </div>

        <div className="iz-depth" aria-hidden="true">
          <span>0 m</span>
          <span>1</span>
          <span>2</span>
          <span>3</span>
        </div>
      </section>

      <section id="sortiment" className="iz-sortiment" aria-labelledby="iz-sortiment-title">
        <div className="iz-section-head">
          <p className="iz-eyebrow iz-eyebrow-dark">Náš sortiment</p>
          <h2 id="iz-sortiment-title">Tři způsoby, jak dostat vodu do země</h2>
          <p className="iz-section-sub">
            Každý bazén stavíme jinak — jiný materiál, jiná montáž, jiná cena.
            Tady je přehled, ať víte, do čeho jdete.
          </p>
        </div>

        <ol className="iz-cards">
          {pools.map((p) => (
            <li className="iz-card" key={p.n}>
              <div className="iz-card-top">
                <span className="iz-card-n">{p.n}</span>
                <span
                  className={`iz-shape iz-shape-${p.shape}`}
                  aria-hidden="true"
                />
              </div>
              <h3>{p.title}</h3>
              <p className="iz-card-lead">{p.lead}</p>
              <p className="iz-card-body">{p.body}</p>
            </li>
          ))}
        </ol>

        <div className="iz-also">
          <p className="iz-eyebrow iz-eyebrow-dark">A když nejde o bazén</p>
          <ul className="iz-also-list">
            <li>Hydroizolace střech</li>
            <li>Izolace spodních staveb</li>
            <li>Septiky a jímky</li>
            <li>Zakázková výroba z plastu</li>
          </ul>
        </div>
      </section>

      <section id="duvera" className="iz-trust" aria-labelledby="iz-trust-title">
        <div className="iz-trust-media">
          <img
            src="/section-1.webp"
            alt="Svařování plastových desek při výrobě bazénu ve výrobní hale Izoplast"
            width={1200}
            height={900}
          />
        </div>
        <div className="iz-trust-body">
          <p className="iz-eyebrow iz-eyebrow-dark">O nás</p>
          <h2 id="iz-trust-title">
            Bazény z Hlinska, které v Budějovicích drží vodu léta
          </h2>
          <p>
            Jsme rodinná firma z Hlinska u Českých Budějovic. Bazény vyrábíme,
            montujeme a udržujeme — všechny typy, všechny tvary. Poradíme vám
            s výběrem, s čištěním i s tím, jak bazén přezimovat, aby vydržel.
          </p>
          <p>
            Umíme i to, co pod vodou není vidět: hydroizolace střech a spodních
            staveb. Firmu postupně modernizujeme — do provozu už jezdíme
            elektromobily, protože zahrada i řeka si zaslouží čistší vzduch.
          </p>

          <dl className="iz-facts">
            <div>
              <dt>Kde nás najdete</dt>
              <dd>Hlinsko 36, 370 01 České Budějovice</dd>
            </div>
            <div>
              <dt>IČO</dt>
              <dd>608 25 685</dd>
            </div>
            <div>
              <dt>Co postavíme</dt>
              <dd>Plast · fólie · nadzemní · izolace</dd>
            </div>
          </dl>
        </div>

        <figure className="iz-trust-strip">
          <img
            src="/section-2.webp"
            alt="Hotový zapuštěný bazén s modrou fólií připravený k napuštění"
            width={1400}
            height={700}
          />
          <figcaption>
            Fóliový bazén před napuštěním — barvu fólie si vybíráte vy.
          </figcaption>
        </figure>
      </section>
    </main>
  );
}
