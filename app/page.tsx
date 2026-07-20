import type { CSSProperties } from "react";

type Shape = "obdelnik" | "kruh" | "oval";

function ShapeToken({ shape }: { shape: Shape }) {
  return (
    <svg className="d-token" viewBox="0 0 48 32" aria-hidden="true" focusable="false">
      {shape === "obdelnik" && (
        <rect x="3" y="5" width="42" height="22" rx="3" />
      )}
      {shape === "kruh" && <circle cx="24" cy="16" r="13" />}
      {shape === "oval" && <ellipse cx="24" cy="16" rx="21" ry="11" />}
    </svg>
  );
}

function Waterline({ topColor }: { topColor: string }) {
  return (
    <div className="d-waterline" style={{ color: topColor } as CSSProperties} aria-hidden="true">
      <div className="d-caustic" />
      <svg
        className="d-wave"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        aria-hidden="true"
        focusable="false"
      >
        <path
          className="d-wave__fill"
          d="M0,64 C200,24 400,104 600,64 C800,24 1000,104 1200,64 L1200,0 L0,0 Z"
        />
        <path
          className="d-wave__glint"
          d="M0,64 C200,24 400,104 600,64 C800,24 1000,104 1200,64"
          fill="none"
        />
      </svg>
    </div>
  );
}

const steps: { shape: Shape; no: string; title: string; body: string }[] = [
  {
    shape: "obdelnik",
    no: "01",
    title: "Schůzka v showroomu",
    body: "Přijďte na Petřvaldskou v Ostravě. Osaháte si liner, dlažbu i zakrytí a nad vaším plánkem zahrady navrhneme bazén, který k domu i k vám sedne.",
  },
  {
    shape: "kruh",
    no: "02",
    title: "Výstavba na míru",
    body: "Postavíme na klíč — od výkopu po napuštění. Nebo se zapojíte a výkop si zajistíte sami; monoblok, technologii a napuštění dotáhneme my.",
  },
  {
    shape: "oval",
    no: "03",
    title: "Doplňky a příslušenství",
    body: "Po stovkách realizovaných bazénů poradíme, které protiproudy, osvětlení a zakrytí se opravdu vyplatí — cenou i užitkem, ne katalogem.",
  },
];

const trust: { k: string; v: string }[] = [
  {
    k: "Doživotní záruka na konstrukci",
    v: "Jako jediní dáváme doživotní záruku na stabilitu skořepiny a 5 let na filtrační jednotku.",
  },
  {
    k: "Filtrace bez potrubí, bez údržby",
    v: "Bezpotrubní systém Desjoyaux drží vodu čistou — žádné zakopané trubky, žádné starosti navíc.",
  },
  {
    k: "Ztracené bednění pro každý tvar",
    v: "Betonový monoblok postavíme v jakémkoli půdorysu a hloubce — obdélník, kruh i ovál na míru pozemku.",
  },
];

export default function Page() {
  return (
    <main className="d-page">
      <header className="d-hero">
        <div className="d-hero__water" aria-hidden="true">
          <div className="d-hero__net" />
          <div className="d-hero__depth" />
        </div>

        <div className="d-hero__inner">
          <div className="d-brand">
            <span className="d-brand__mark">DESJOYAUX</span>
            <span className="d-brand__place">Ostrava · od 1966</span>
          </div>

          <p className="d-eyebrow">Zapuštěné bazény na klíč</p>

          <h1 className="d-hero__title">
            Bazén na klíč,
            <br />
            <em>připravený k ponoření.</em>
          </h1>

          <p className="d-hero__lead">
            Světová jednička v zapuštěných bazénech staví v Ostravě betonový
            monoblok, který přežije generace. Vy si vyberete jen nové plavky.
          </p>

          <p className="d-chip">„Miluji prázdniny doma."</p>

          <ul className="d-hero__stats">
            <li>
              <span className="d-hero__num">30+</span>
              <span className="d-hero__lbl">let na severní Moravě</span>
            </li>
            <li>
              <span className="d-hero__num">stovky</span>
              <span className="d-hero__lbl">bazénů napuštěných po okolí</span>
            </li>
            <li>
              <span className="d-hero__num">∞</span>
              <span className="d-hero__lbl">záruka na konstrukci</span>
            </li>
          </ul>
        </div>
      </header>

      <Waterline topColor="#0a5a86" />

      <section className="d-section d-section--deck" aria-labelledby="sluzby">
        <div className="d-container">
          <p className="d-kicker">Od prvního nákresu po první skok do vody</p>
          <h2 className="d-h2" id="sluzby">
            Tři kroky ke skoku
            <br />z terasy do vlastní vody
          </h2>

          <ol className="d-steps">
            {steps.map((s) => (
              <li className="d-tile d-surface" key={s.no}>
                <div className="d-tile__top">
                  <ShapeToken shape={s.shape} />
                  <span className="d-tile__no">{s.no}</span>
                </div>
                <h3 className="d-tile__title">{s.title}</h3>
                <p className="d-tile__body">{s.body}</p>
              </li>
            ))}
          </ol>

          <p className="d-shapes-note">
            <ShapeToken shape="obdelnik" /> obdélník
            <ShapeToken shape="kruh" /> kruh
            <ShapeToken shape="oval" /> ovál —{" "}
            <span>ztracené bednění zvládne libovolný tvar i hloubku.</span>
          </p>
        </div>
      </section>

      <Waterline topColor="#eaf1f0" />

      <section className="d-section d-section--water" aria-labelledby="duvera">
        <div className="d-hero__net d-section__net" aria-hidden="true" />
        <div className="d-container">
          <p className="d-kicker d-kicker--light">Ostravská pobočka, francouzské know-how</p>
          <h2 className="d-h2 d-h2--light" id="duvera">
            Značku Desjoyaux tu
            <br />
            zastupujeme od roku 1993.
          </h2>

          <p className="d-lead-light">
            Přes třicet let stavíme zapuštěné bazény na severní Moravě a ve
            Slezsku. Bazén je pro nás symbol rodiny, domova a odpočinku — ne
            jen díra plná vody. Proto řešíme kvalitu, design i ta nejnáročnější
            přání a bazén ušijeme na vaši zahradu i životní styl.
          </p>

          <ul className="d-trust">
            {trust.map((t) => (
              <li className="d-trust__card d-surface" key={t.k}>
                <h3 className="d-trust__k">{t.k}</h3>
                <p className="d-trust__v">{t.v}</p>
              </li>
            ))}
          </ul>

          <p className="d-showroom">
            Zastavte se v showroomu — <strong>Ukázková 123, Ostrava</strong>.
            Rádi vás uvidíme, ideálně po telefonu na{" "}
            <strong>+420 777 111 222</strong>.
          </p>
        </div>
      </section>
    </main>
  );
}
