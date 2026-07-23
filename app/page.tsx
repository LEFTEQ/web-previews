import { AiImage } from "./_ui";

const budovy = [
  {
    nazev: "Rodinné domy",
    text: "Vysoké účty za vytápění? Foukaná vrstva do stropu nebo na půdu utěsní i místa, kam deska nedosáhne. Ušetříte až 30 % nákladů, většinou hotovo za jeden den.",
    kpi: "až 30 %",
    kpiLab: "nižší účet za teplo",
  },
  {
    nazev: "Bytové domy",
    text: "Zateplení stropu ve sklepě i pod střechou pomůže bytům v přízemí i pod střechou. Bez lešení, bez zásahu do fasády, investice v řádu desítek tisíc.",
    kpi: "desítky tisíc",
    kpiLab: "celková investice v Kč",
  },
  {
    nazev: "Průmyslové a obecní objekty",
    text: "Haly, školy, obecní úřady. Rychlá aplikace i do těžko přístupných dutin a nad podhledy — bez odstávky provozu a bez prachu v prostoru.",
    kpi: "bez odstávky",
    kpiLab: "foukáme za provozu",
  },
  {
    nazev: "Ostatní konstrukce",
    text: "Šikmé střechy, dřevostavby, dvojité podlahy, dutiny ve zdivu. Podle stavby volíme celulózu, minerální nebo skelnou vlnu a spočítáme správnou tloušťku.",
    kpi: "na míru",
    kpiLab: "materiál i tloušťka vrstvy",
  },
];

const duvody = [
  {
    h: "Foukáme bez tepelných mostů",
    t: "Volný materiál obalí každý trám i prostup. Žádné spáry mezi deskami, kudy teplo běžně uteče.",
  },
  {
    h: "Jasná cena předem",
    t: "Přijedeme na obhlídku, změříme plochu a dáme pevnou kalkulaci. Žádné příplatky po montáži.",
  },
  {
    h: "Místní tým z Hradecka",
    t: "Známe zdejší půdy, střechy i staré stropy. Na obhlídku dorazíme rychle a bez cestovného po kraji.",
  },
];

const staty = [
  { n: "15 let", l: "na půdách a střechách" },
  { n: "1 den", l: "typická montáž domu" },
  { n: "30 cm", l: "obvyklá vrstva ve stropě" },
];

export default function Page() {
  return (
    <main className="page">
      {/* ── HERO ─────────────────────────────── */}
      <section className="band hero" id="uvod">
        <div className="wrap">
          <header className="topbar">
            <a className="brand" href="#uvod" aria-label="IZOTRADE — foukaná tepelná izolace">
              <span className="brand__mark" aria-hidden="true" />
              <span className="brand__word">
                IZO<span className="brand__word-b">TRADE</span>
              </span>
            </a>
            <nav className="nav" aria-label="Hlavní navigace">
              <a href="#kde">Kde ušetříte</a>
              <a href="#proc">Proč nás</a>
              <a className="nav__tel" href="tel:+420777111222">777 111 222</a>
            </nav>
          </header>

          <div className="hero__grid">
            <div className="hero__copy">
              <p className="eyebrow rise rise-1">Foukaná tepelná izolace · Hradec Králové</p>
              <h1 className="hero__title rise rise-2">
                Teplo, které<br />
                <span className="hl">zůstane doma.</span>
              </h1>
              <p className="lead rise rise-3">
                Foukaná izolace vyplní každou skulinu ve stropě, na půdě i ve střešní
                dutině — bez tepelných mostů a bez bourání. Většinou za jediný den,
                s úsporou až 30 % za vytápění.
              </p>
              <div className="cta-row rise rise-4">
                <a className="btn btn--primary" href="#kde">Spočítat mou úsporu</a>
                <a className="btn btn--ghost" href="#proc">Jak foukání probíhá</a>
              </div>

              <div
                className="scale rise rise-5"
                role="img"
                aria-label="Rozdíl teplot: venku minus dvanáct stupňů, uvnitř plus dvaadvacet stupňů — drží ho foukaná vrstva ve stropě."
              >
                <div className="scale__row">
                  <span className="scale__lab">
                    <b>−12 °C</b> venku
                  </span>
                  <span className="scale__lab scale__lab--warm">
                    <b>+22 °C</b> uvnitř
                  </span>
                </div>
                <div className="scale__track">
                  <span className="scale__dot" />
                </div>
                <p className="scale__cap">Rozdíl, který udrží foukaná vrstva ve stropě.</p>
              </div>
            </div>

            <div className="hero__media rise rise-3">
              <AiImage
                src="/hero.webp"
                alt="Foukání tepelné izolace do stropní dutiny rodinného domu"
                className="hero__img"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── SLUŽBY / KDE UŠETŘÍTE ────────────── */}
      <section className="band svc" id="kde">
        <div className="wrap">
          <div className="svc__head">
            <div className="svc__intro">
              <p className="eyebrow eyebrow--ink">Nabídka · kudy uniká teplo</p>
              <h2 className="h2">Kde teplo uniká — a kde ušetříte</h2>
              <p className="copy">
                Nejvíc tepla odchází stropem a střechou. Tam foukáme volný materiál,
                který zapadne i mezi trámy a do rohů. Podle stavby volíme celulózu,
                minerální nebo skelnou vlnu a spočítáme správnou tloušťku vrstvy.
              </p>
            </div>
            <div className="svc__media">
              <AiImage
                src="/section-1.webp"
                alt="Rovnoměrná vrstva foukané izolace na půdě"
                className="svc__img"
              />
            </div>
          </div>

          <ul className="svc__grid">
            {budovy.map((b) => (
              <li className="card" key={b.nazev}>
                <div className="card__kpi">
                  <span className="card__kpi-num">{b.kpi}</span>
                  <span className="card__kpi-lab">{b.kpiLab}</span>
                </div>
                <h3 className="card__h">{b.nazev}</h3>
                <p className="card__t">{b.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── O NÁS / DŮVĚRA ───────────────────── */}
      <section className="band about" id="proc">
        <div className="wrap">
          <div className="about__grid">
            <div className="about__media">
              <AiImage
                src="/section-2.webp"
                alt="Technik IZOTRADE připravuje hadici k foukání izolace"
                className="about__img"
              />
            </div>

            <div className="about__copy">
              <p className="eyebrow">O nás · Hradec Králové</p>
              <h2 className="h2 h2--light">15 let foukáme půdy východních Čech</h2>

              <ul className="reasons">
                {duvody.map((d) => (
                  <li className="reason" key={d.h}>
                    <span className="reason__tick" aria-hidden="true" />
                    <div>
                      <h3 className="reason__h">{d.h}</h3>
                      <p className="reason__t">{d.t}</p>
                    </div>
                  </li>
                ))}
              </ul>

              <dl className="stats">
                {staty.map((s) => (
                  <div className="stat" key={s.n}>
                    <dt className="stat__n">{s.n}</dt>
                    <dd className="stat__l">{s.l}</dd>
                  </div>
                ))}
              </dl>

              <figure className="quote">
                <blockquote>
                  „Přijeli ráno, do oběda bylo hotovo a čisto. První zimu jsme úsporu
                  poznali hned na záloze za plyn.“
                </blockquote>
                <figcaption>
                  Petr Marek — rodinný dům, Třebechovice pod Orebem
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
