import type { CSSProperties } from "react";

type Card = {
  id: string;
  title: string;
  tag: string;
  dot: string;
  body: string;
};

const NABIDKA: Card[] = [
  {
    id: "lano",
    title: "Na laně",
    tag: "3 – 7 UIAA",
    dot: "var(--hold-green)",
    body: "Dvanáct metrů, přes čtyřicet cest. Top rope, když chceš mít jistotu, i lead pro ty, co si chtějí cvakat expresky sami.",
  },
  {
    id: "boulder",
    title: "Boulder",
    tag: "V0 – V6",
    dot: "var(--hold-yellow)",
    body: "Lezení bez lana nízko nad měkkými matracemi. Krátké, silové a hravé. Nejlepší způsob, jak si lezení poprvé ochutnat.",
  },
  {
    id: "kurzy",
    title: "Kurzy",
    tag: "od nuly",
    dot: "var(--hold-orange)",
    body: "Odpolední kroužek pro děti i večerní kurz pro dospělé. Naučíme tě uzel, jištění a první přelez celé stěny.",
  },
  {
    id: "pujcovna",
    title: "Půjčovna",
    tag: "vše půjčíme",
    dot: "var(--hold-magenta)",
    body: "Lezečky, sedák, jistítko i lano. Přijď v pohodlném oblečení a se sportovní láhví — zbytek vybavení je na nás.",
  },
];

const SPEC: { k: string; v: string }[] = [
  { k: "Výška stěny", v: "12 m" },
  { k: "Lezecké cesty", v: "40+" },
  { k: "Rozsah obtížnosti", v: "3 – 8 UIAA" },
  { k: "Boulder zóna", v: "60 m²" },
  { k: "Kde", v: "Ukázková 123, Plzeň" },
  { k: "Rezervace", v: "+420 777 111 222" },
];

const HOLDS: { cx: number; cy: number; color: string; grade: string; anchor: "start" | "end" }[] = [
  { cx: 62, cy: 588, color: "var(--hold-green)", grade: "4", anchor: "start" },
  { cx: 214, cy: 462, color: "var(--hold-yellow)", grade: "5+", anchor: "end" },
  { cx: 88, cy: 344, color: "var(--hold-orange)", grade: "6a", anchor: "start" },
  { cx: 236, cy: 214, color: "var(--hold-blue)", grade: "6c", anchor: "end" },
  { cx: 116, cy: 88, color: "var(--hold-magenta)", grade: "7a", anchor: "start" },
];

const ROUTE_D = "M62 588 L214 462 L88 344 L236 214 L116 88";

export default function Page() {
  return (
    <main className="c-main">
      <section className="c-hero" aria-labelledby="hero-title">
        <div className="c-hero-inner">
          <div className="c-hero-text">
            <p className="c-kicker">Lezecká stěna · TJ Lokomotiva Plzeň</p>
            <h1 id="hero-title" className="c-h1">
              <span className="c-h1-line">Vzhůru</span>
              <span className="c-h1-line">po stěně</span>
            </h1>
            <p className="c-lede">
              Přes čtyřicet cest od prvních krůčků po stropní převisy. Boulder,
              lano, kurzy i půjčovna — deset minut od centra Plzně.
            </p>
            <div className="c-actions">
              <a className="c-btn c-btn--primary" href="tel:+420777111222">
                Rezervovat vstup
              </a>
              <a className="c-btn c-btn--ghost" href="#nabidka">
                Co u nás vylezeš
              </a>
            </div>
            <p className="c-hero-meta">Ukázková 123, Plzeň · otevřeno denně</p>
          </div>

          <div className="c-hero-route" aria-hidden="true">
            <svg
              className="c-route"
              viewBox="0 0 320 620"
              role="presentation"
              preserveAspectRatio="xMidYMid meet"
            >
              <path className="c-route-ghost" d={ROUTE_D} pathLength={1} />
              <path className="c-route-line" d={ROUTE_D} pathLength={1} />
              {HOLDS.map((h, i) => (
                <g key={h.grade}>
                  <circle
                    className="c-hold"
                    cx={h.cx}
                    cy={h.cy}
                    r={13}
                    style={{ fill: h.color, animationDelay: `${0.9 + i * 0.22}s` } as CSSProperties}
                  />
                  <text
                    className="c-hold-label"
                    x={h.anchor === "start" ? h.cx + 24 : h.cx - 24}
                    y={h.cy + 5}
                    textAnchor={h.anchor}
                    style={{ animationDelay: `${1.05 + i * 0.22}s` } as CSSProperties}
                  >
                    {h.grade}
                  </text>
                </g>
              ))}
            </svg>
            <p className="c-route-cap">Jedna cesta, pět chytů, obtížnost roste odspodu nahoru.</p>
          </div>
        </div>
      </section>

      <section id="nabidka" className="c-section c-section--dark" aria-labelledby="nabidka-title">
        <header className="c-sec-head">
          <p className="c-eyebrow">Nabídka</p>
          <h2 id="nabidka-title" className="c-h2">Co u nás vylezeš</h2>
          <p className="c-sec-lede">
            Route-setting měníme pravidelně, takže i po stopadesáté je na stěně
            co lézt. Vyber si, s čím chceš začít.
          </p>
        </header>

        <ul className="c-cards">
          {NABIDKA.map((c) => (
            <li key={c.id} className="c-card">
              <div className="c-card-top">
                <span className="c-card-dot" style={{ background: c.dot } as CSSProperties} />
                <span className="c-card-tag">{c.tag}</span>
              </div>
              <h3 className="c-card-title">{c.title}</h3>
              <p className="c-card-body">{c.body}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="c-section c-section--paper" aria-labelledby="ostene-title">
        <div className="c-about">
          <div className="c-about-text">
            <p className="c-eyebrow c-eyebrow--ink">O stěně</p>
            <h2 id="ostene-title" className="c-h2 c-h2--ink">Malá stěna, velký kus Plzně</h2>
            <p className="c-about-p">
              Naše stěna je součástí sportovního areálu TJ Lokomotiva Plzeň.
              Není to obří komerční hala — je to poctivá plzeňská stěna, kde se
              po škole potkávají děti z kroužku, studenti i lezci, co sem chodí
              roky.
            </p>
            <blockquote className="c-quote">
              <p>
                „Vzal jsem sem dceru na první lezení a za měsíc lezla líp než
                já. Trpěliví lidi a dobrá parta — chodíme každý víkend.“
              </p>
              <footer className="c-quote-src">Martin — táta a víkendový lezec</footer>
            </blockquote>
          </div>

          <div className="c-spec" aria-label="Parametry stěny">
            <p className="c-spec-head">Topo stěny</p>
            <dl className="c-spec-list">
              {SPEC.map((s) => (
                <div className="c-spec-row" key={s.k}>
                  <dt className="c-spec-k">{s.k}</dt>
                  <dd className="c-spec-v">{s.v}</dd>
                </div>
              ))}
            </dl>
            <p className="c-spec-note">
              Kurzy a lezecké oddíly rezervuj telefonicky na recepci areálu.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
