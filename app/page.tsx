import type { CSSProperties } from "react";

type DotVars = CSSProperties & {
  "--settle"?: string;
  "--breathe"?: string;
  "--draw"?: string;
};

const masaze = [
  {
    point: "I",
    name: "Olejová masáž",
    time: "60–120 min",
    price: "od 1 050 Kč",
    text: "Teplý jojobový a sezamový olej, dlouhé pomalé tahy. Rozpustí ztuhlá záda a ramena po dlouhém sezení u počítače.",
  },
  {
    point: "II",
    name: "Tradiční thajská masáž",
    time: "60–120 min",
    price: "od 1 050 Kč",
    text: "Protažení, tlak dlaní i loktů podél energetických drah. Bez oleje, v pohodlném oděvu — jako důkladný restart celého těla.",
  },
  {
    point: "III",
    name: "Čínská masáž chodidel",
    time: "60–120 min",
    price: "od 1 050 Kč",
    text: "Reflexní body na chodidlech. Přes ně se uvolní i to, co bolí úplně jinde — a vy odcházíte lehčí.",
  },
];

const reference = [
  { text: "Parádní olejové masáže. Nemají chybu. Doporučuji.", by: "Host studia" },
  {
    text:
      "Dobré prostředí, příjemné recepční, milé masérky, které umí. Několikrát jsme s manželkou navštívili. Vřele doporučujeme.",
    by: "Honza",
  },
  { text: "Naprosto úžasné masáže.", by: "Host studia" },
];

export default function Page() {
  return (
    <main className="rg">
      <section className="band hero" aria-labelledby="hero-title">
        <div className="inner hero-grid">
          <div className="hero-copy">
            <p className="wordmark">
              Relax <span className="wordmark-it">Galerie</span>
            </p>
            <p className="eyebrow">Masážní studio&nbsp;· Plzeň</p>
            <h1 id="hero-title" className="hero-title">
              Úleva vede po&nbsp;<em>drahách</em> těla.
            </h1>
            <p className="hero-sub">
              Olejové, thajské a čínské masáže v klidném prostoru kousek od
              centra. Šestnáct terapeutek, jedna společná péče o&nbsp;to, aby
              napětí povolilo přesně tam, kde ho cítíte.
            </p>
            <div className="hero-actions">
              <a className="btn" href="#nabidka">Prohlédnout masáže</a>
              <span className="hero-note">Rezervace na +420&nbsp;777&nbsp;111&nbsp;222</span>
            </div>
          </div>

          <div className="meridian-wrap" aria-hidden="true">
            <div className="steam" />
            <svg
              className="meridian"
              viewBox="0 0 360 540"
              role="img"
              aria-label="Dráha akupresurních bodů propojující tři nejoblíbenější masáže"
              preserveAspectRatio="xMidYMid meet"
            >
              <path
                className="meridian-line"
                d="M 180 18 C 118 58, 128 96, 152 104 C 188 116, 236 196, 206 256 C 184 302, 116 396, 150 430 C 174 454, 192 498, 176 528"
                fill="none"
              />
              <g className="dot-group">
                <circle
                  className="dot"
                  cx="152"
                  cy="104"
                  r="9"
                  style={{ "--settle": "0.55s", "--breathe": "1.2s" } as DotVars}
                />
                <text className="dot-label" x="172" y="100">Olejová</text>
                <text className="dot-label dot-label--sub" x="172" y="117">masáž</text>
              </g>
              <g className="dot-group">
                <circle
                  className="dot"
                  cx="206"
                  cy="256"
                  r="9"
                  style={{ "--settle": "1.0s", "--breathe": "1.7s" } as DotVars}
                />
                <text className="dot-label" x="226" y="252">Thajská</text>
                <text className="dot-label dot-label--sub" x="226" y="269">masáž</text>
              </g>
              <g className="dot-group">
                <circle
                  className="dot"
                  cx="150"
                  cy="430"
                  r="9"
                  style={{ "--settle": "1.5s", "--breathe": "2.3s" } as DotVars}
                />
                <text className="dot-label" x="170" y="426">Masáž</text>
                <text className="dot-label dot-label--sub" x="170" y="443">chodidel</text>
              </g>
            </svg>
          </div>
        </div>
      </section>

      <section className="band services" id="nabidka" aria-labelledby="services-title">
        <div className="inner">
          <header className="band-head">
            <p className="eyebrow">Tři body na dráze</p>
            <h2 id="services-title" className="band-title">Oblíbené masáže</h2>
            <p className="band-lead">
              Každá masáž je jeden bod na téže dráze — vyberte si podle toho, co
              vaše tělo dnes potřebuje.
            </p>
          </header>

          <ol className="cards">
            {masaze.map((m) => (
              <li className="card" key={m.name}>
                <span className="card-point" aria-hidden="true" />
                <p className="card-index">{m.point}</p>
                <h3 className="card-name">{m.name}</h3>
                <p className="card-text">{m.text}</p>
                <p className="card-meta">
                  <span className="card-time">{m.time}</span>
                  <span className="card-price">{m.price}</span>
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="band trust" aria-labelledby="trust-title">
        <div className="inner trust-grid">
          <div className="trust-about">
            <p className="eyebrow">O studiu</p>
            <h2 id="trust-title" className="band-title">
              Šestnáct terapeutek. Vyberte si tu&nbsp;svou.
            </h2>
            <p className="band-lead">
              U nás se nespěchá. Přijdete, vydechnete a necháte ruce, které to
              umí, udělat zbytek. Prostředí je klidné, recepce vstřícná a
              termín se dá domluvit i&nbsp;na poslední chvíli.
            </p>

            <div className="quotes">
              {reference.map((r) => (
                <blockquote className="quote" key={r.text}>
                  <p className="quote-text">„{r.text}“</p>
                  <footer className="quote-by">— {r.by}</footer>
                </blockquote>
              ))}
            </div>
          </div>

          <aside className="info-card" aria-label="Praktické informace">
            <h3 className="info-title">Otevřeno</h3>
            <dl className="hours">
              <div className="hours-row">
                <dt>Po–Pá</dt>
                <dd>8:00 – 21:00</dd>
              </div>
              <div className="hours-row">
                <dt>So–Ne</dt>
                <dd>9:00 – 21:00</dd>
              </div>
            </dl>

            <div className="info-block">
              <p className="info-label">Kde nás najdete</p>
              <p className="info-value">Plzeň, kousek od centra</p>
            </div>
            <div className="info-block">
              <p className="info-label">Rezervace</p>
              <p className="info-value">+420&nbsp;777&nbsp;111&nbsp;222</p>
              <p className="info-value">info@example.cz</p>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
