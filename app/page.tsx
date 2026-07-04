import type { CSSProperties } from "react";

export default function Page() {
  const disciplines = [
    {
      code: "OUT",
      title: "Outdoor & kemping",
      lead: "Stany, spacáky, karimatky",
      copy: "Samorozkládací stany za pár vteřin, dvouvrstvé karimatky SOFT FOAM i zateplovací deky. Vlastní vývoj — část výroby máme přímo v Hradci.",
      items: ["Stany TWINKLE, FAMILY, TRAMP", "Karimatky SOFT FOAM", "Spací systémy DREAMER"],
    },
    {
      code: "FIT",
      title: "Fitness",
      lead: "Do tělocvičny i domů",
      copy: "Vybavení na sílu i regeneraci — od pomůcek na cvičení po sportovní kosmetiku SPORT LAVIT a čisticí přípravky HEY SPORT na oblečení a obuv.",
      items: ["Posilovací pomůcky", "Regenerace a masáž", "Sportovní kosmetika"],
    },
    {
      code: "ARC",
      title: "Lukostřelba",
      lead: "Terč začíná u nás",
      copy: "Luky, šípy a doplňky pro střelce i kluby. Obor, kterým se YATE liší od běžných outdoorových e-shopů — a bavíme se o něm.",
      items: ["Luky a kladkové sety", "Šípy a terče", "Doplňky pro kluby"],
    },
    {
      code: "H2O",
      title: "Vodní aktivity",
      lead: "Na řeku i k moři",
      copy: "Nepromokavé vaky BIVAK BAG s hydrostatickým sloupcem 10000 mm, plážové ručníky a lehátka. Co dá voda, to YATE ustojí.",
      items: ["Vodotěsné vaky 10000 mm", "Plážové vybavení", "Batohy NOX 40 l"],
    },
  ];

  const brands = [
    { name: "MAM", note: "nože · Portugalsko" },
    { name: "MUND", note: "ponožky · Španělsko" },
    { name: "JOMA", note: "boty · Španělsko" },
    { name: "SPORT LAVIT", note: "kosmetika · Německo" },
    { name: "HEY SPORT", note: "péče o výbavu" },
    { name: "HIGHLANDER", note: "outdoor · UK" },
    { name: "TREKMATES", note: "outdoor · UK" },
    { name: "O'STYLE", note: "oblečení · ČR" },
  ];

  return (
    <main className="page">
      <header className="topbar">
        <a className="wordmark" href="#" aria-label="YATE, domů">
          <span className="wordmark__y">Y</span>ATE
          <span className="wordmark__dot" aria-hidden="true" />
        </a>
        <nav className="topnav" aria-label="Obory">
          <a href="#obory">Obory</a>
          <a href="#znacka">Značka</a>
          <a href="#prodejna">Prodejna</a>
        </nav>
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero__grid" aria-hidden="true">
          <span className="hero__contour" />
          <span className="hero__contour hero__contour--2" />
          <span className="hero__contour hero__contour--3" />
        </div>

        <p className="hero__eyebrow">
          <span>Hradec Králové</span>
          <span className="hero__since">od roku 1992</span>
        </p>

        <h1 id="hero-title" className="hero__title">
          <span className="hero__line hero__line--1">Outdoor.</span>
          <span className="hero__line hero__line--2">Fitness.</span>
          <span className="hero__line hero__line--3">
            Lukostřelba<span className="hero__aim" aria-hidden="true" />
          </span>
        </h1>

        <p className="hero__lead">
          Česká značka vybavení do přírody. Vlastní továrna, kamenná prodejna
          a přes třicet let, kdy víme, co v terénu opravdu vydrží.
        </p>

        <div className="hero__meta">
          <div className="hero__stat">
            <span className="hero__stat-num">4</span>
            <span className="hero__stat-lab">obory pod jednou střechou</span>
          </div>
          <div className="hero__stat">
            <span className="hero__stat-num">30+</span>
            <span className="hero__stat-lab">let vlastní výroby</span>
          </div>
          <div className="hero__stat">
            <span className="hero__stat-num">8</span>
            <span className="hero__stat-lab">značek z Evropy v distribuci</span>
          </div>
        </div>
      </section>

      <section id="obory" className="obory" aria-labelledby="obory-title">
        <div className="sec-head">
          <h2 id="obory-title" className="sec-head__title">
            Čtyři terény, jedna prodejna
          </h2>
          <p className="sec-head__note">
            Každý obor má svoje pravidla. Vybavíme vás do všech.
          </p>
        </div>

        <ul className="cards">
          {disciplines.map((d) => (
            <li key={d.code} className="card">
              <span className="card__code" aria-hidden="true">
                {d.code}
              </span>
              <h3 className="card__title">{d.title}</h3>
              <p className="card__lead">{d.lead}</p>
              <p className="card__copy">{d.copy}</p>
              <ul className="card__items">
                {d.items.map((it) => (
                  <li key={it}>{it}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </section>

      <section id="znacka" className="znacka" aria-labelledby="znacka-title">
        <div className="znacka__lead">
          <p className="znacka__eyebrow" id="prodejna">
            O značce YATE
          </p>
          <h2 id="znacka-title" className="znacka__title">
            Vyrábíme, co sami nosíme do terénu.
          </h2>
          <p className="znacka__copy">
            YATE je česká značka z Hradce Králové. Máme vlastní továrnu, kde
            část produktů opravdu vzniká — od stanů po vodotěsné vaky. Zbytek
            vybavení pečlivě vybíráme a distribuujeme do celé ČR. Kamenná
            prodejna, kam si můžete přijít sáhnout, než koupíte.
          </p>

          <dl className="znacka__facts">
            <div>
              <dt>Kde nás najdete</dt>
              <dd>Prodejna v Hradci Králové</dd>
            </div>
            <div>
              <dt>Telefon</dt>
              <dd>
                <a href="tel:+420495221476">495 221 476</a>
              </dd>
            </div>
            <div>
              <dt>E-mail</dt>
              <dd>
                <a href="mailto:yate@yate.cz">yate@yate.cz</a>
              </dd>
            </div>
          </dl>
        </div>

        <div className="znacka__brands">
          <p className="znacka__brands-head">
            V distribuci pro ČR držíme i osvědčené značky z Evropy:
          </p>
          <ul className="brands">
            {brands.map((b, i) => (
              <li
                key={b.name}
                className="brand"
                style={{ "--i": i } as CSSProperties}
              >
                <span className="brand__name">{b.name}</span>
                <span className="brand__note">{b.note}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
