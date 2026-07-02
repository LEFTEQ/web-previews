// TIOX, s.r.o. — ploty a oplocení, Liberec
// Koncept: „Pole a sloupek" — celý web stojí na rytmu plotového pole:
// svislé latě / pletivová mřížka jako signature grafika, typografie jako ocelový profil.

const sluzby = [
  {
    tag: "Pletivo",
    nazev: "Pletivové oplocení",
    popis:
      "Poplastované i pozinkované pletivo na napínacích drátech. Nejrychlejší a nejúspornější řešení pro zahrady, sady a pozemky kolem Liberce.",
    detail: "Výška 100–200 cm · sloupky do betonu",
  },
  {
    tag: "Panely",
    nazev: "Svařované 3D panely",
    popis:
      "Tuhé panely s prolisem, které drží tvar i po letech. Standard pro novostavby, firemní areály a všude tam, kde má plot vypadat přesně.",
    detail: "Oka 50×200 mm · antracit, zelená, pozink",
  },
  {
    tag: "Brány",
    nazev: "Brány a branky",
    popis:
      "Křídlové i posuvné brány na míru vašemu vjezdu, včetně přípravy na pohon. Branky osazujeme se zámkem a dorazem, aby netloukly ve větru.",
    detail: "Samonosné posuvné do 6 m",
  },
  {
    tag: "Podezdívky",
    nazev: "Podhrabové desky a podezdívky",
    popis:
      "Betonové podhrabové desky zastaví psa i vodu z tajícího sněhu — v podhůří Jizerek se hodí víc, než si lidé myslí.",
    detail: "Hladké i vzor štípaného kamene",
  },
];

const kroky = [
  {
    nazev: "Zaměření zdarma",
    popis:
      "Přijedeme na pozemek v Liberci a okolí, projdeme hranici, změříme délky a výškové rozdíly. Terén v podhůří umí překvapit — proto měříme vždy na místě.",
  },
  {
    nazev: "Nabídka na položky",
    popis:
      "Do týdne dostanete rozpočet rozepsaný po metrech a kusech: sloupky, pole, brána, beton. Žádná paušální částka, u které nevíte, co obsahuje.",
  },
  {
    nazev: "Montáž do betonu",
    popis:
      "Sloupky kotvíme do betonových patek pod hloubku promrznutí. Běžnou zahradu oplotíme za dva až čtyři dny, staveniště po sobě uklidíme.",
  },
];

const duvody = [
  {
    cislo: "18 let",
    text: "stavíme ploty na Liberecku — od Vratislavic po Chrastavu",
  },
  {
    cislo: "90 cm",
    text: "hloubka patek, aby plot ustál i liberecké zimy a jarní tání",
  },
  {
    cislo: "5 let",
    text: "záruka na montáž. Když si pole sedne, přijedeme a srovnáme ho",
  },
];

export default function Page() {
  return (
    <main className="tx">
      {/* ===== HERO ===== */}
      <header className="tx-hero">
        <div className="tx-hero-top">
          <span className="tx-wordmark" aria-label="TIOX">
            TI<span className="tx-wordmark-x">O</span>X
          </span>
          <span className="tx-hero-loc">ploty a oplocení · Liberec</span>
        </div>

        <div className="tx-hero-body">
          <h1 className="tx-h1">
            <span className="tx-h1-line tx-reveal tx-d1">Plot, který stojí</span>
            <span className="tx-h1-line tx-reveal tx-d2">
              <em>rovně</em> i&nbsp;po&nbsp;letech.
            </span>
          </h1>
          <p className="tx-hero-sub tx-reveal tx-d3">
            Pletivo, panely, brány i podezdívky. Zaměříme, spočítáme na položky
            a&nbsp;postavíme — na Liberecku a v&nbsp;podhůří Jizerských hor.
          </p>
          <div className="tx-hero-cta tx-reveal tx-d4">
            <a className="tx-btn" href="tel:+420485100100">
              Zavolat: 485 100 100
            </a>
            <a className="tx-btn tx-btn-ghost" href="mailto:info@tiox.cz">
              Napsat e‑mail
            </a>
          </div>
        </div>

        {/* Signature: plotové pole — svislé latě rostoucí od sloupku ke sloupku */}
        <div className="tx-fence" aria-hidden="true">
          <span className="tx-post" />
          <span className="tx-picket p1" />
          <span className="tx-picket p2" />
          <span className="tx-picket p3" />
          <span className="tx-picket p4" />
          <span className="tx-picket p5" />
          <span className="tx-picket p6" />
          <span className="tx-picket p7" />
          <span className="tx-picket p8" />
          <span className="tx-picket p9" />
          <span className="tx-picket p10" />
          <span className="tx-picket p11" />
          <span className="tx-picket p12" />
          <span className="tx-picket p13" />
          <span className="tx-picket p14" />
          <span className="tx-post" />
          <span className="tx-rail tx-rail-top" />
          <span className="tx-rail tx-rail-bottom" />
        </div>
      </header>

      {/* ===== SLUŽBY ===== */}
      <section className="tx-section" aria-labelledby="sluzby-h">
        <div className="tx-section-head">
          <span className="tx-eyebrow">Co plotíme</span>
          <h2 id="sluzby-h" className="tx-h2">
            Čtyři způsoby, jak ohradit pozemek
          </h2>
          <p className="tx-section-lead">
            Každý pozemek chce jiný plot. Poradíme, který dává smysl u&nbsp;vás —
            podle terénu, sousedů i&nbsp;rozpočtu.
          </p>
        </div>

        <div className="tx-grid">
          {sluzby.map((s) => (
            <article className="tx-card" key={s.nazev}>
              <span className="tx-card-tag">{s.tag}</span>
              <h3 className="tx-h3">{s.nazev}</h3>
              <p className="tx-card-text">{s.popis}</p>
              <p className="tx-card-detail">{s.detail}</p>
            </article>
          ))}
        </div>
      </section>

      {/* ===== JAK STAVÍME / DŮVĚRA ===== */}
      <section className="tx-section tx-section-dark" aria-labelledby="postup-h">
        <div className="tx-section-head">
          <span className="tx-eyebrow tx-eyebrow-light">Jak stavíme</span>
          <h2 id="postup-h" className="tx-h2">
            Od zaměření k&nbsp;hotovému plotu ve třech krocích
          </h2>
        </div>

        <ol className="tx-steps">
          {kroky.map((k, i) => (
            <li className="tx-step" key={k.nazev}>
              <span className="tx-step-num" aria-hidden="true">
                {i + 1}
              </span>
              <div>
                <h3 className="tx-h3">{k.nazev}</h3>
                <p className="tx-step-text">{k.popis}</p>
              </div>
            </li>
          ))}
        </ol>

        <div className="tx-facts">
          {duvody.map((d) => (
            <div className="tx-fact" key={d.cislo}>
              <span className="tx-fact-num">{d.cislo}</span>
              <p className="tx-fact-text">{d.text}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
