import type { CSSProperties } from "react";

// Laminar-airflow streamlines: thin curved lines flowing from the top-left of
// each band, bending across headlines like conditioned air past a diffuser.
// pathLength={1} normalises every stroke so one keyframe draws them all.
const FLOW_LINES: { d: string; w: "t" | "m" }[] = [
  { d: "M-40 70 C 300 20, 620 46, 1240 120", w: "t" },
  { d: "M-40 128 C 300 84, 620 106, 1240 190", w: "m" },
  { d: "M-40 186 C 320 148, 640 168, 1240 256", w: "t" },
  { d: "M-40 250 C 340 214, 660 232, 1240 332", w: "t" },
  { d: "M-40 314 C 360 282, 680 300, 1240 404", w: "m" },
  { d: "M-40 378 C 380 350, 700 366, 1240 474", w: "t" },
];

function Airflow({ tone = "cyan" }: { tone?: "cyan" | "ink" }) {
  return (
    <svg
      className={`airflow airflow--${tone}`}
      viewBox="0 0 1200 500"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      {FLOW_LINES.map((line, i) => (
        <path
          key={i}
          d={line.d}
          className={line.w}
          pathLength={1}
          style={{ "--i": i } as CSSProperties}
        />
      ))}
    </svg>
  );
}

const SERVICES = [
  {
    code: "KLIMA",
    title: "Klimatizace",
    body:
      "Nástěnné, kazetové i multisplit jednotky pro byty, kanceláře a obchody. Chladí v létě, přitopí na přechodu ročních období.",
  },
  {
    code: "VZT",
    title: "Vzduchotechnika",
    body:
      "Rekuperace a rozvody čerstvého vzduchu do hal, provozoven a administrativ — s odvodem vydýchaného vzduchu a filtrací.",
  },
  {
    code: "TČ",
    title: "Tepelná čerpadla",
    body:
      "Systémy vzduch–voda pro vytápění i chlazení, s napojením na stávající otopnou soustavu i na fotovoltaiku.",
  },
  {
    code: "SERVIS",
    title: "Servis a revize",
    body:
      "Záruční i pozáruční prohlídky, čištění výparníků, doplnění chladiva a revize těsnosti. Vaše jednotka drží výkon roky.",
  },
];

const PROCESS = [
  {
    n: "01",
    title: "Poptávka a prohlídka",
    body: "Přijedeme, změříme dispozice a řekneme, co má a nemá smysl.",
  },
  {
    n: "02",
    title: "Návrh a cenová nabídka",
    body: "Dostanete konkrétní řešení, výkon jednotky a cenu — bez skrytých položek.",
  },
  {
    n: "03",
    title: "Montáž a zprovoznění",
    body: "Odvedeme čistou montáž, natlakujeme okruh a předáme funkční systém.",
  },
  {
    n: "04",
    title: "Servis a záruka",
    body: "Staráme se dál — pravidelné prohlídky i zásah, když je potřeba.",
  },
];

export default function Page() {
  return (
    <main>
      <section className="band band--hero">
        <Airflow tone="cyan" />
        <div className="wrap">
          <header className="topbar">
            <span className="mark">
              <svg className="mark__flow" viewBox="0 0 34 20" aria-hidden="true">
                <path d="M1 5 C 10 1, 22 1, 33 5" />
                <path d="M1 10 C 10 6, 22 6, 33 10" />
                <path d="M1 15 C 10 11, 22 11, 33 15" />
              </svg>
              <span className="mark__word">ZIPA</span>
              <span className="mark__sub">servis</span>
            </span>
            <p className="topbar__loc">Brno · Královo Pole</p>
          </header>

          <div className="hero__inner">
            <p className="eyebrow">Klimatizace · Vzduchotechnika · Tepelná čerpadla</p>
            <h1 className="hero__title">
              Vzduch přesně
              <br />
              takový, jaký
              <br />
              ho chcete.
            </h1>
            <p className="hero__lead">
              Navrhneme, namontujeme a udržíme klimatizaci, vzduchotechniku i
              tepelné čerpadlo — od bytu v Králově Poli po výrobní halu na okraji
              Brna.
            </p>
            <dl className="spec">
              <div className="spec__item">
                <dt>Výkon</dt>
                <dd>2–200 kW</dd>
              </div>
              <div className="spec__item">
                <dt>Nasazení</dt>
                <dd>byty i haly</dd>
              </div>
              <div className="spec__item">
                <dt>Servis</dt>
                <dd>záruční i pozáruční</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      <section className="band band--frost" aria-labelledby="sluzby-nadpis">
        <div className="wrap">
          <div className="section-head">
            <p className="eyebrow eyebrow--copper">Co pro vás uděláme</p>
            <h2 id="sluzby-nadpis" className="section-title">
              Čtyři technologie, jeden dodavatel
            </h2>
          </div>
          <div className="services">
            {SERVICES.map((s) => (
              <article key={s.code} className="card">
                <p className="card__code">{s.code}</p>
                <h3 className="card__title">{s.title}</h3>
                <p className="card__body">{s.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="band band--deep" aria-labelledby="o-nas-nadpis">
        <Airflow tone="cyan" />
        <div className="wrap">
          <div className="trust">
            <div className="trust__intro">
              <p className="eyebrow">O nás</p>
              <h2 id="o-nas-nadpis" className="section-title section-title--light">
                Kvalitně odvedená práce je jediný směr, který nás baví.
              </h2>
              <p className="trust__text">
                ZIPA servis dodává a montuje klimatizace, vzduchotechniku a
                tepelná čerpadla v Brně a okolí. Zvládneme malou rezidenční
                zakázku i velký komerční projekt — hotel, administrativu, výrobní
                halu. Pracujeme s aktuálními modely značek jako Daikin, Mitsubishi
                Electric a LG, ne s katalogem z roku 2021.
              </p>
              <p className="trust__text">
                Chcete cenovou nabídku, nebo si jen nevíte rady, co si pořídit?
                Ozvěte se — poradíme věcně a bez tlaku.
              </p>
            </div>

            <ol className="process">
              {PROCESS.map((p) => (
                <li key={p.n} className="process__step">
                  <span className="process__n">{p.n}</span>
                  <div>
                    <h3 className="process__title">{p.title}</h3>
                    <p className="process__body">{p.body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>
    </main>
  );
}
