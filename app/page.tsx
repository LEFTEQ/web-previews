import React from "react";

const steps = [
  {
    n: "01",
    t: "Zaměření u vás doma",
    d: "Přijedeme na stavbu v Sokolově i okolí, přeměříme každý otvor na milimetr a poradíme s profilem, sklem i kováním.",
  },
  {
    n: "02",
    t: "Kalkulace a nabídka",
    d: "Do pár dní máte cenu na míru — přehledně, bez skrytých položek, s dopravou i montáží v jedné částce.",
  },
  {
    n: "03",
    t: "Doprava na místo",
    d: "Okna i dveře přivezeme přímo na vaši stavbu v termínu, na kterém se domluvíme.",
  },
  {
    n: "04",
    t: "Montáž technikem",
    d: "Zabuduje kvalifikovaný technik — utěsnění, kotvení i začištění podle normy, ať okno těsní roky.",
  },
  {
    n: "05",
    t: "Financování na splátky",
    d: "Nemusíte platit vše najednou. Připravíme splátkový rozpis přizpůsobený vašemu rozpočtu.",
  },
];

const references = [
  "Rodinné domy",
  "Novostavby",
  "Rekonstrukce",
  "Bytové domy — cihlové i panelové",
  "Školy a školky",
  "Lázeňské domy",
];

const team = [
  { name: "Ilona Kleiberová", role: "Obchodní oddělení", tel: "+420 739 527 700", href: "tel:+420739527700" },
  { name: "Petr Valašík", role: "Obchodní zástupce", tel: "+420 739 527 702", href: "tel:+420739527702" },
  { name: "František Novák", role: "Technický poradce", tel: "+420 739 527 703", href: "tel:+420739527703" },
  { name: "Dana Horáková", role: "Kalkulace zakázek", tel: "+420 739 527 701", href: "tel:+420739527701" },
];

const parts = [
  "Venkovní dveře",
  "Parapety",
  "Látkové rolety",
  "Garážová vrata",
  "Stínící technika",
];

export default function Page() {
  return (
    <main className="vw">
      <header className="topbar">
        <a className="wordmark" href="#top" aria-label="Variowin — plastová okna Sokolov">
          <span className="mark" aria-hidden="true">
            <i></i><i></i><i></i><i></i>
          </span>
          <span className="wm-text">
            <b>Vario</b><span>win</span>
          </span>
        </a>
        <div className="top-right">
          <span className="top-loc">Sokolov · od 2006</span>
          <a className="btn" href="tel:+420739527700">Zavolat 739&nbsp;527&nbsp;700</a>
        </div>
      </header>

      <section className="hero" id="top">
        <img
          className="hero-img"
          src="/hero.webp"
          alt="Nová plastová okna s výhledem do západočeské krajiny — les a hladina jezera"
        />
        <div className="hero-frame" aria-hidden="true">
          <span className="bar bar-v"></span>
          <span className="bar bar-h"></span>
        </div>

        <div className="hero-content">
          <p className="eyebrow r1">Plastová · hliníková · dřevěná okna</p>
          <h1 className="r2">
            Rámujeme<br />
            váš výhled.
          </h1>
          <p className="hero-lead r3">
            Okna a dveře na míru pro domy na Sokolovsku. Zaměření, výroba,
            montáž i financování zvládneme z jednoho místa v Boženy Němcové.
          </p>
          <div className="hero-actions r4">
            <a className="btn btn-lg" href="tel:+420739527700">Zavolat 739&nbsp;527&nbsp;700–3</a>
            <a className="link-plain" href="https://www.instagram.com/" rel="noopener noreferrer">
              Reference na Instagramu →
            </a>
          </div>
        </div>
      </section>

      <div className="specstrip" role="list" aria-label="Použité profily a parametry">
        <span role="listitem">GEALAN&nbsp;K80 · 5&nbsp;komor</span>
        <span role="listitem">GEALAN&nbsp;K90 · 6&nbsp;komor</span>
        <span role="listitem">Uw od 0,9&nbsp;W/m²K</span>
        <span role="listitem">Zaručeně česká okna</span>
      </div>

      <section className="section postup" aria-labelledby="postup-h">
        <div className="sec-head">
          <p className="eyebrow">Postup</p>
          <h2 id="postup-h">Od prvního zaměření po hotovou montáž.</h2>
          <p className="sec-intro">
            Vedeme celou zakázku sami — nepředáváme vás mezi firmami. Pět kroků,
            po kterých máte v otvorech osazená a seřízená okna.
          </p>
        </div>

        <div className="postup-grid">
          <ol className="steps">
            {steps.map((s) => (
              <li className="step" key={s.n}>
                <span className="step-n">{s.n}</span>
                <div className="step-body">
                  <h3>{s.t}</h3>
                  <p>{s.d}</p>
                </div>
              </li>
            ))}
          </ol>

          <aside className="postup-aside">
            <figure className="framed">
              <img
                src="/section-1.webp"
                alt="Detail osazeného plastového okna s parapetem"
              />
            </figure>
            <div className="parts-card">
              <p className="eyebrow">I bez montáže</p>
              <h3>Potřebujete jen díl? Prodáme ho samostatně.</h3>
              <ul className="parts">
                {parts.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>

      <section className="section ofirme" aria-labelledby="ofirme-h">
        <div className="ofirme-grid">
          <figure className="framed framed-tall">
            <img
              src="/section-2.webp"
              alt="Zabudovaná okna v novostavbě rodinného domu"
            />
          </figure>

          <div className="ofirme-text">
            <p className="eyebrow">O firmě</p>
            <h2 id="ofirme-h">Sokolovská firma s okny už od roku 2006.</h2>
            <p>
              Variowin sídlí v Boženy Němcové 1766 kousek od centra Sokolova.
              Za ta léta jsme vyměnili okna ve stovkách bytů i celých domech —
              a víme, jak se okno chová v panelu, v cihle i v novostavbě.
            </p>
            <p className="ref-label">Kde jsme okna měnili:</p>
            <ul className="reflist">
              {references.map((r) => (
                <li key={r}>{r}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="team">
          <p className="eyebrow">Kdo vám zavolá zpět</p>
          <div className="team-grid">
            {team.map((m) => (
              <a className="team-card" href={m.href} key={m.name}>
                <span className="tc-name">{m.name}</span>
                <span className="tc-role">{m.role}</span>
                <span className="tc-tel">{m.tel}</span>
              </a>
            ))}
          </div>
        </div>

        <div className="info-strip">
          <div>
            <span className="is-k">Kde nás najdete</span>
            <span className="is-v">Boženy Němcové 1766<br />356 01 Sokolov</span>
          </div>
          <div>
            <span className="is-k">Otevřeno</span>
            <span className="is-v">Po–Čt 7:30–16:30<br />Pá 7:30–14:30</span>
          </div>
          <div>
            <span className="is-k">Kancelář</span>
            <span className="is-v">352 605 761<br />info@variowin.cz</span>
          </div>
        </div>
      </section>
    </main>
  );
}
