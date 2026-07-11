import React from "react";

const kroky = [
  {
    faze: "Zaměření",
    popis:
      "Přijedeme k vám na zahradu, změříme prostor, spočítáme, kolik unese podloží, a poradíme, kam bazén posadit vůči slunci a domu. Z návštěvy odjíždíte s konkrétní představou, ne s letákem.",
  },
  {
    faze: "Výkop a základ",
    popis:
      "Vytyčíme jámu, vykopeme, uděláme betonovou desku a rozvody. Tady se rozhoduje o tom, jestli bazén za deset let popraská, nebo bude stát jako v den kolaudace.",
  },
  {
    faze: "Skořepina a technologie",
    popis:
      "Usadíme keramickou nebo polypropylenovou skořepinu, napojíme filtraci, protiproud a ohřev. Vše zkoušíme napuštěné a pod tlakem, dokud nedrží každý spoj.",
  },
  {
    faze: "Obklad a první koupání",
    popis:
      "Dokončíme dlažbu okolo, oplocení a zastřešení. Napustíme, seřídíme chemii a ukážeme vám, jak se o bazén starat. Pak už jen skočíte.",
  },
];

const reference = [
  {
    misto: "Rodinný dům, Plzeň – Litice",
    text:
      "Keramický bazén 8 × 3,5 m se slaným elektrolýzérem a zastřešením. Od výkopu po první koupání sedm týdnů.",
    detail: "8 × 3,5 m · keramika · slaná voda",
  },
  {
    misto: "Penzion, Nýřany",
    text:
      "Přelivový bazén pro hosty s protiproudem a nočním nasvícením. Řešili jsme i strojovnu v suterénu a automatické dávkování.",
    detail: "10 × 4 m · přeliv · protiproud",
  },
  {
    misto: "Zahrada na Doubravce",
    text:
      "Polypropylenový bazén na míru do svažitého terénu, opěrná zídka a dřevěná terasa okolo. Kompletně na klíč.",
    detail: "6 × 3 m · polypropylen · terasa",
  },
];

export default function Page() {
  return (
    <main className="page">
      <header className="topbar">
        <a href="#" className="wordmark" aria-label="Pyramida – stavba bazénů, Plzeň">
          <span className="wordmark-shape" aria-hidden="true" />
          <span className="wordmark-text">
            PYRAMIDA
            <span className="wordmark-sub">stavba bazénů · Plzeň</span>
          </span>
        </a>
        <nav className="topnav" aria-label="Hlavní navigace">
          <a href="#jak">Jak to stavíme</a>
          <a href="#reference">Reference</a>
          <a href="#kontakt-hero" className="topnav-cta">Chci bazén</a>
        </nav>
      </header>

      <section className="hero">
        <div className="hero-media">
          <img
            src="/hero.webp"
            alt="Zapuštěný bazén s čistou hladinou na zahradě rodinného domu u Plzně"
            className="hero-img"
          />
          <div className="hero-wash" aria-hidden="true" />
        </div>
        <div className="hero-body">
          <p className="eyebrow">Bazény na klíč · Plzeňsko · od roku 2004</p>
          <h1 className="hero-title">
            Zahrada, kde se<br />
            <span className="hero-accent">chce zůstat</span> do večera.
          </h1>
          <p className="hero-lede">
            Stavíme zapuštěné bazény z keramiky a polypropylenu — od výkopu
            přes technologii až po první skok. Celý bazén řešíme sami, jednou
            partou, bez subdodavatelů, na které bychom sváděli chyby.
          </p>
          <div className="hero-actions" id="kontakt-hero">
            <a href="tel:+420377000000" className="btn btn-primary">Zavolat a domluvit zaměření</a>
            <a href="#jak" className="btn btn-ghost">Jak stavba probíhá</a>
          </div>
          <dl className="hero-facts">
            <div>
              <dt>Zaměření zdarma</dt>
              <dd>u vás na zahradě do týdne</dd>
            </div>
            <div>
              <dt>7–9 týdnů</dt>
              <dd>od výkopu k prvnímu koupání</dd>
            </div>
            <div>
              <dt>10 let</dt>
              <dd>záruka na skořepinu</dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="section jak" id="jak" aria-labelledby="jak-nadpis">
        <div className="section-head">
          <p className="eyebrow eyebrow-dark">Od jámy k hladině</p>
          <h2 id="jak-nadpis" className="section-title">
            Čtyři fáze. U žádné<br />vás nenecháme hádat.
          </h2>
          <p className="section-lede">
            Bazén není nábytek, co přivezeme hotový. Vzniká vám na zahradě
            krok za krokem — a u každého kroku víte, co se děje a proč.
          </p>
        </div>

        <div className="jak-layout">
          <ol className="kroky">
            {kroky.map((k, i) => (
              <li key={k.faze} className="krok">
                <span className="krok-cislo" aria-hidden="true">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="krok-body">
                  <h3 className="krok-faze">{k.faze}</h3>
                  <p className="krok-popis">{k.popis}</p>
                </div>
              </li>
            ))}
          </ol>
          <figure className="jak-fig">
            <img
              src="/section-1.webp"
              alt="Rozestavěný bazén s usazenou skořepinou a připravenou technologií"
              className="fig-img"
            />
            <figcaption>
              Skořepina usazená v betonové vaně — pod obklad se schová to,
              na čem stavba stojí.
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="section reference" id="reference" aria-labelledby="ref-nadpis">
        <div className="ref-grid">
          <figure className="ref-fig">
            <img
              src="/section-2.webp"
              alt="Hotový bazén se zastřešením a dlážděným okolím na zahradě v Plzni"
              className="fig-img"
            />
          </figure>
          <div className="ref-body">
            <p className="eyebrow eyebrow-dark">Postavené u vás v okolí</p>
            <h2 id="ref-nadpis" className="section-title">
              Nejsme obrázky<br />z katalogu.
            </h2>
            <p className="section-lede">
              Každý bazén níž stojí na konkrétní zahradě na Plzeňsku. Rádi vás
              za majiteli vezmeme — ať se zeptáte na to, co vás od nás
              neuslyší.
            </p>
            <ul className="ref-list">
              {reference.map((r) => (
                <li key={r.misto} className="ref-item">
                  <h3 className="ref-misto">{r.misto}</h3>
                  <p className="ref-text">{r.text}</p>
                  <p className="ref-detail">{r.detail}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
