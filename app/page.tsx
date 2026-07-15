const SERVICES = [
  {
    code: "FO",
    title: "Fyzická ostraha objektů",
    desc: "Strážní na recepci, ve výrobě i na stavbě. Kontrola vstupů, pravidelné obchůzky a jasná evidence pohybu osob i vozidel.",
  },
  {
    code: "PCO",
    title: "Pult centralizované ochrany",
    desc: "Napojení vašeho poplachu (EZS) na náš non-stop dispečink. Při narušení vyjíždí zásahová jednotka v Brně do několika minut.",
  },
  {
    code: "EZS",
    title: "Kamery a poplachové systémy",
    desc: "Návrh, montáž a servis kamerových, poplachových a přístupových systémů na míru objektu — od bytového domu po halu.",
  },
  {
    code: "DET",
    title: "Detektivní služby",
    desc: "Diskrétní pátrání, prověření osob i firem a ochrana obchodního tajemství. Vždy v mezích zákona a beze stopy.",
  },
  {
    code: "EVT",
    title: "Ostraha akcí a doprovod",
    desc: "Pořadatelská a bezpečnostní služba na akcích, ochrana osob a bezpečný doprovod při převozu cenností.",
  },
  {
    code: "REC",
    title: "Recepční služby",
    desc: "Reprezentativní recepce s trvalým dohledem nad budovou, návštěvami a klíčovým režimem objektu.",
  },
];

const SPECS = [
  ["STATUS", "Koncesovaná bezpečnostní služba"],
  ["DISPEČINK", "Non-stop, přímo v Brně"],
  ["ZÁSAH", "Výjezd do minut po poplachu"],
  ["POJIŠTĚNÍ", "Odpovědnost za způsobenou škodu"],
  ["DOSAH", "Brno a Jihomoravský kraj"],
  ["TÝM", "Prověření a proškolení strážní"],
];

export default function Page() {
  return (
    <main className="page">
      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="zone zone--hero" aria-labelledby="hero-title">
        <span className="arm arm--top" aria-hidden="true" />
        <span className="arm arm--right" aria-hidden="true" />
        <span className="arm arm--bottom" aria-hidden="true" />
        <span className="arm arm--left" aria-hidden="true" />

        <span className="bracket bracket--tl" aria-hidden="true" />
        <span className="bracket bracket--tr" aria-hidden="true" />
        <span className="bracket bracket--bl" aria-hidden="true" />
        <span className="bracket bracket--br" aria-hidden="true" />

        <div className="zone__meta">
          <span className="zone__code">ZÓNA A1 · BRNO-STŘED</span>
          <span className="zone__time">NON-STOP · 24 / 7</span>
        </div>

        <span className="scanline" aria-hidden="true" />

        <div className="zone__inner hero__inner">
          <header className="brandbar">
            <span className="wordmark" aria-label="LARN — bezpečnostní agentura Brno">
              <span className="wordmark__mark">LARN</span>
              <span className="wordmark__sub">bezpečnostní agentura · Brno</span>
            </span>
            <span className="status">
              <span className="status__dot" aria-hidden="true" />
              systém aktivní
            </span>
          </header>

          <p className="hero__eyebrow">Detektivní a hlídací agentura</p>
          <h1 id="hero-title" className="hero__title">
            <span className="hl">STŘEŽÍME</span>
            <span className="hl">
              VÁŠ KLID<span className="dot">.</span>
            </span>
          </h1>
          <p className="hero__lead">
            Fyzická ostraha, pult centralizované ochrany a detektivní služby pro
            Brno a okolí. Uděláme vše pro vaše bezpečí — ve dne, v noci, o
            svátcích i o víkendu.
          </p>
        </div>
      </section>

      {/* ── SLUŽBY ───────────────────────────────────────────── */}
      <section className="zone zone--svc" aria-labelledby="svc-title">
        <span className="bracket bracket--tl" aria-hidden="true" />
        <span className="bracket bracket--tr" aria-hidden="true" />
        <span className="bracket bracket--bl" aria-hidden="true" />
        <span className="bracket bracket--br" aria-hidden="true" />
        <div className="zone__meta">
          <span className="zone__code">ZÓNA S · SLUŽBY</span>
          <span className="zone__time">6 REŽIMŮ STŘEŽENÍ</span>
        </div>

        <div className="zone__inner">
          <h2 id="svc-title" className="sec__title">
            Co pro vás
            <br />
            uhlídáme
          </h2>
          <p className="sec__lead">
            Komplexní bezpečnostní služby pod jednou brněnskou agenturou. Ať
            hlídáte areál, kancelář nebo bytový dům, poskládáme ochranu přesně
            na váš objekt.
          </p>

          <ul className="svc">
            {SERVICES.map((s) => (
              <li className="svc__item" key={s.code}>
                <span className="svc__code">{s.code}</span>
                <h3 className="svc__name">{s.title}</h3>
                <p className="svc__desc">{s.desc}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── O AGENTUŘE ───────────────────────────────────────── */}
      <section className="zone zone--about" aria-labelledby="about-title">
        <span className="bracket bracket--tl" aria-hidden="true" />
        <span className="bracket bracket--tr" aria-hidden="true" />
        <span className="bracket bracket--bl" aria-hidden="true" />
        <span className="bracket bracket--br" aria-hidden="true" />
        <div className="zone__meta">
          <span className="zone__code">ZÓNA O · O AGENTUŘE</span>
          <span className="zone__time">PROVĚŘENO</span>
        </div>

        <div className="zone__inner about">
          <div className="about__text">
            <h2 id="about-title" className="sec__title">
              Brněnská
              <br />
              agentura,
              <br />
              která nespí
            </h2>
            <p className="about__p">
              LARN je detektivní a hlídací agentura z Brna. Přes dvě desetiletí
              hlídáme majetek, lidi a klid firem i domácností v Brně a celém
              Jihomoravském kraji.
            </p>
            <p className="about__p">
              Nejsme anonymní linka odněkud z druhé strany republiky. Dispečink
              i zásahovou jednotku máme přímo ve městě — když spustí poplach,
              vyjíždíme, ne přepojujeme. Svěřují nám administrativní budovy,
              výrobní a skladové areály, obchodní prostory i bytové domy.
            </p>
          </div>

          <dl className="spec">
            {SPECS.map(([k, v]) => (
              <div className="spec__row" key={k}>
                <dt className="spec__k">{k}</dt>
                <dd className="spec__v">{v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>
    </main>
  );
}
