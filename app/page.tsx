import type { CSSProperties } from "react";

export default function Page() {
  const steps = [
    {
      no: "01",
      title: "Návrh a vizualizace",
      body: "Přijdeme, změříme, poslechneme si, co od koupelny čekáte. Do pár dní máte 3D vizualizaci a přesný rozpočet — víte, jak to bude vypadat, ještě než padne první obklad.",
    },
    {
      no: "02",
      title: "Bourání a rozvody",
      body: "Starou koupelnu vybouráme, odvezeme suť, uděláme nové rozvody vody a odpady. Vše zakryjeme, byt vysajeme — bydlíte dál a bordel zůstává za dveřmi.",
    },
    {
      no: "03",
      title: "Obklad a dlažba",
      body: "Rovina, spára na milimetr, řezy okolo zásuvek přesně. Velkoformáty i malý retro formát — pokládáme to, co jsme vám navrhli, a stojíme si za spárou.",
    },
    {
      no: "04",
      title: "Montáž a předání",
      body: "Vana, sprchový kout, baterie, nábytek, osvětlení. Uklidíme, ukážeme, jak co funguje, a předáme hotovou koupelnu s zárukou na práci.",
    },
  ];

  const proofs = [
    {
      k: "Brno a okolí",
      v: "Děláme jen tady",
      t: "Žádné dojíždění přes půl republiky. Když něco po roce zaskřípe, jsme u vás do druhého dne.",
    },
    {
      k: "Jedna parta",
      v: "Od bourání po spáru",
      t: "Nepředáváme štafetu mezi pěti firmami. Obkladač, instalatér i elektrikář jsou náš tým.",
    },
    {
      k: "Pevná cena",
      v: "Napsaná dopředu",
      t: "Rozpočet dostanete po zaměření a platí. Žádné „doplatky za nepředvídané“ v půlce stavby.",
    },
  ];

  return (
    <main className="mb">
      <header className="mb-nav">
        <a className="mb-logo" href="#" aria-label="M.B.KERAMIKA, rekonstrukce koupelen Brno">
          <span className="mb-logo-mark">M.B.</span>
          <span className="mb-logo-word">KERAMIKA</span>
        </a>
        <span className="mb-nav-tag">rekonstrukce koupelen · Brno</span>
      </header>

      <section className="mb-hero">
        <div className="mb-grout" aria-hidden="true">
          {Array.from({ length: 72 }).map((_, i) => (
            <span key={i} className="mb-tile" style={{ "--i": i } as CSSProperties} />
          ))}
        </div>

        <div className="mb-hero-inner">
          <p className="mb-eyebrow">Rekonstrukce koupelen na klíč · Brno</p>
          <h1 className="mb-h1">
            <span className="mb-h1-line">Stará koupelna</span>
            <span className="mb-h1-line mb-h1-em">ve čtvrtek,</span>
            <span className="mb-h1-line">nová za tři týdny.</span>
          </h1>
          <p className="mb-lead">
            Vybouráme, uděláme rozvody, položíme obklad na milimetr a zase
            po sobě uklidíme. Jedna brněnská parta od návrhu po poslední spáru —
            vy jen řeknete, jak to má vypadat.
          </p>
          <div className="mb-hero-cta">
            <a className="mb-btn" href="tel:+420777746852">Zavolat 777 746 852</a>
            <a className="mb-btn mb-btn-ghost" href="#jak">Jak to probíhá</a>
          </div>
        </div>

        <dl className="mb-hero-facts">
          <div>
            <dt>Celá koupelna</dt>
            <dd>3 týdny</dd>
          </div>
          <div>
            <dt>Cena</dt>
            <dd>daná dopředu</dd>
          </div>
          <div>
            <dt>Záruka na práci</dt>
            <dd>5 let</dd>
          </div>
        </dl>
      </section>

      <section className="mb-sec mb-steps" id="jak" aria-labelledby="jak-h">
        <div className="mb-sec-head">
          <p className="mb-sec-eyebrow">Jak to u nás chodí</p>
          <h2 className="mb-sec-h" id="jak-h">
            Čtyři fáze, jedna parta, žádné dohadování v půlce.
          </h2>
        </div>
        <ol className="mb-steps-list">
          {steps.map((s) => (
            <li key={s.no} className="mb-step">
              <span className="mb-step-no" aria-hidden="true">{s.no}</span>
              <h3 className="mb-step-title">{s.title}</h3>
              <p className="mb-step-body">{s.body}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="mb-sec mb-proof" aria-labelledby="proc-h">
        <div className="mb-sec-head">
          <p className="mb-sec-eyebrow">Proč zrovna my</p>
          <h2 className="mb-sec-h" id="proc-h">
            Malá firma z Brna, která si za svou spárou stojí.
          </h2>
          <p className="mb-proof-lead">
            Koupelnu děláte jednou za patnáct let. My ji děláme každý týden —
            a děláme ji tak, aby vydržela déle než ta předchozí.
          </p>
        </div>
        <div className="mb-proof-grid">
          {proofs.map((p) => (
            <article key={p.k} className="mb-proof-card">
              <p className="mb-proof-k">{p.k}</p>
              <p className="mb-proof-v">{p.v}</p>
              <p className="mb-proof-t">{p.t}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
