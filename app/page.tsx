import type { CSSProperties } from "react";

export default function Page() {
  const applications = [
    {
      symbol: "O\u2082",
      element: "Kysl\u00edk",
      name: "Medicin\u00e1ln\u00ed a technick\u00fd kysl\u00edk",
      desc: "L\u00e1hve i svazky pro sva\u0159ov\u00e1n\u00ed, \u0159ez\u00e1n\u00ed a zdravotnictv\u00ed. Rozvoz po Liberecku do druh\u00e9ho dne.",
    },
    {
      symbol: "Ar",
      element: "Argon",
      name: "Argon a sm\u011bsi pro sv\u00e1\u0159e\u010de",
      desc: "\u010cist\u00fd argon i sm\u011bsi TIG/MIG-MAG. Star\u00e1me se o dodavatelsk\u00fd re\u017eim pro d\u00edlny i haly.",
    },
    {
      symbol: "CO\u2082",
      element: "Oxid uhli\u010dit\u00fd",
      name: "CO\u2082 pro g\u00e1stro i pr\u016fmysl",
      desc: "\u010cepovan\u00ed piva, potravin\u00e1\u0159sk\u00fd i sva\u0159ovac\u00ed CO\u2082. V\u00fdm\u011bna l\u00e1hv\u00ed na po\u010dkan\u00ed.",
    },
    {
      symbol: "N\u2082",
      element: "Dus\u00edk",
      name: "Dus\u00edk plynn\u00fd i kapaln\u00fd",
      desc: "Inertizace, chlazen\u00ed, laborato\u0159e. Kryogenn\u00ed dodávky do Dewarov\u00fdch n\u00e1dob.",
    },
    {
      symbol: "He",
      element: "Helium",
      name: "Helium pro pln\u011bn\u00ed i detekci",
      desc: "Balonky na akce i technick\u00e9 helium pro hled\u00e1n\u00ed net\u011bsnost\u00ed a chladic\u00ed technologie.",
    },
    {
      symbol: "C\u2082H\u2082",
      element: "Acetylen",
      name: "Acetylen pro plamen",
      desc: "Autogenn\u00ed \u0159ez\u00e1n\u00ed a p\u00e1jen\u00ed. Bezpe\u010dn\u00e9 l\u00e1hve s aktu\u00e1ln\u00ed revizí.",
    },
  ];

  const facts = [
    {
      k: "Do druh\u00e9ho dne",
      v: "Rozvoz l\u00e1hv\u00ed po Liberci a okol\u00ed \u2014 objednejte dnes, dod\u00e1me z\u00edtra.",
    },
    {
      k: "V\u00fdm\u011bna na po\u010dkan\u00ed",
      v: "Pr\u00e1zdnou l\u00e1hev vym\u011bn\u00edme za plnou na odb\u011brn\u00e9m m\u00edst\u011b bez objedn\u00e1vky.",
    },
    {
      k: "Revize a bezpe\u010dnost",
      v: "Ka\u017ed\u00e1 l\u00e1hev s platnou tlakovou zkou\u0161kou a \u010diteln\u00fdm zna\u010den\u00edm.",
    },
  ];

  return (
    <main className="pg">
      <a className="skip" href="#nabidka">P\u0159ej\u00edt na nab\u00eddku plyn\u016f</a>

      <header className="top">
        <div className="wm" aria-label="Linde Gas Liberec">
          <span className="wm-l">Linde</span>
          <span className="wm-g">Gas</span>
          <span className="wm-dot" aria-hidden="true" />
        </div>
        <div className="top-meta">Technick\u00e9 &amp; medicin\u00e1ln\u00ed plyny \u00b7 Liberec</div>
      </header>

      <section className="hero" aria-labelledby="hero-h">
        <div className="hero-gauge" aria-hidden="true">
          <div className="gauge-ring">
            <span className="gauge-tick t0" />
            <span className="gauge-tick t1" />
            <span className="gauge-tick t2" />
            <span className="gauge-tick t3" />
            <span className="gauge-tick t4" />
            <span className="gauge-needle" />
            <span className="gauge-val">200<em>bar</em></span>
          </div>
        </div>

        <div className="hero-body">
          <p className="eyebrow">L\u00e1hve pod tlakem \u00b7 od roku 1991</p>
          <h1 id="hero-h">
            <span className="h-line">Pln\u00e9 l\u00e1hve,</span>
            <span className="h-line h-accent">nula prostoj\u016f.</span>
          </h1>
          <p className="lede">
            Technick\u00e9, medicin\u00e1ln\u00ed i potravin\u00e1\u0159sk\u00e9 plyny pro liberecké
            d\u00edlny, sva\u0159e\u010de, laborato\u0159e i hospody. Pr\u00e1zdnou vr\u00e1t\u00edte,
            plnou odvezete \u2014 nebo v\u00e1m ji p\u0159iveze\u0161e.
          </p>
          <div className="hero-cta">
            <a className="btn btn-solid" href="tel:+420485100200">Zavolat na v\u00fddej</a>
            <a className="btn btn-line" href="#nabidka">Prohl\u00e9dnout plyny</a>
          </div>
        </div>

        <ul className="hero-strip" aria-label="Nab\u00edzen\u00e9 plyny">
          {["O\u2082", "Ar", "CO\u2082", "N\u2082", "He", "C\u2082H\u2082"].map((s, i) => (
            <li key={s} style={{ "--i": i } as CSSProperties}>{s}</li>
          ))}
        </ul>
      </section>

      <section id="nabidka" className="apps" aria-labelledby="apps-h">
        <div className="sec-head">
          <p className="eyebrow">Nab\u00eddka</p>
          <h2 id="apps-h">\u0160est plyn\u016f, kter\u00e9 tady sk\u016dr n\u011bkdo shán\u00ed</h2>
          <p className="sec-sub">
            V\u0161echno skladem v Liberci. Ke ka\u017ed\u00e9 l\u00e1hvi list s bezpe\u010dnostn\u00edmi
            pokyny a platnou revizí.
          </p>
        </div>

        <ul className="grid">
          {applications.map((a) => (
            <li key={a.symbol} className="card">
              <div className="card-sym" aria-hidden="true">{a.symbol}</div>
              <div className="card-el">{a.element}</div>
              <h3>{a.name}</h3>
              <p>{a.desc}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="trust" aria-labelledby="trust-h">
        <div className="trust-inner">
          <div className="trust-lead">
            <p className="eyebrow">Pro\u010d k n\u00e1m</p>
            <h2 id="trust-h">Plyn je \u0159emeslo o d\u016fv\u011b\u0159e a \u010dase</h2>
            <p className="sec-sub">
              U\u017e t\u0159i desetilet\u00ed z\u00e1sobujeme liberecké provozy. V\u00edme, \u017ee kdy\u017e
              dojde argon, stoj\u00ed cel\u00e1 hala \u2014 proto d\u00e1v\u00e1me stejnou v\u00e1hu rychlosti
              jako bezpe\u010dnosti.
            </p>
            <a className="btn btn-line" href="mailto:liberec@lindegas.cz">Napsat o cen\u00edk</a>
          </div>

          <ul className="facts">
            {facts.map((f) => (
              <li key={f.k}>
                <span className="fact-k">{f.k}</span>
                <span className="fact-v">{f.v}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
