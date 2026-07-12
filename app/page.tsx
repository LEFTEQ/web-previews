import React from "react";

export default function Page() {
  return (
    <main className="iri">
      {/* HERO — vodní oblouk postřikovače je nejcharakterističtější věc oboru */}
      <header className="iri-hero">
        <div className="iri-hero__media">
          <img
            src="/hero.webp"
            alt="Postřikovač Hunter rozstřikuje vodu nad čerstvě zavlaženým trávníkem"
            className="iri-hero__img"
          />
          <div className="iri-hero__scrim" aria-hidden="true" />
        </div>

        <div className="iri-hero__inner">
          <div className="iri-brand" aria-label="IRIMON">
            <span className="iri-brand__drop" aria-hidden="true">
              <svg viewBox="0 0 24 32" width="24" height="32" role="img" aria-hidden="true">
                <path
                  d="M12 1C12 1 2 13 2 21a10 10 0 0 0 20 0C22 13 12 1 12 1Z"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                />
              </svg>
            </span>
            <span className="iri-brand__word">IRIMON</span>
            <span className="iri-brand__tag">závlahové systémy · Praha</span>
          </div>

          <p className="iri-hero__eyebrow">Automatická závlaha od roku 1998</p>
          <h1 className="iri-hero__title">
            Voda dorazí ve <span className="iri-hl">4:30 ráno</span>,<br />
            přesně tam, kde ji trávník potřebuje.
          </h1>
          <p className="iri-hero__lede">
            Navrhneme, dodáme a nainstalujeme podzemní závlahu Hunter na míru vaší
            zahradě, hřišti nebo parku &mdash; s ovládáním z telefonu a čidlem deště,
            které vypne postřik, když prší.
          </p>

          <div className="iri-hero__cta">
            <a className="iri-btn iri-btn--solid" href="tel:+420281868181">
              Zavolat 281&nbsp;868&nbsp;181
            </a>
            <a className="iri-btn iri-btn--ghost" href="mailto:navrh@irimon.cz?subject=Bezplatn%C3%BD%20n%C3%A1vrh%20z%C3%A1vlahy">
              Chci bezplatný návrh
            </a>
          </div>

          {/* Signature: horizontální „lišta rosy“ — kapky jako denní cyklus zavlažování */}
          <dl className="iri-cycle" aria-label="Jak funguje jedna zálivka">
            <div className="iri-cycle__item">
              <dt>04:30</dt>
              <dd>Spuštění před svítáním, kdy se voda nevypařuje</dd>
            </div>
            <div className="iri-cycle__item">
              <dt>6 mm</dt>
              <dd>Rovnoměrná dávka na m² podle typu půdy</dd>
            </div>
            <div className="iri-cycle__item">
              <dt>0 kapek</dt>
              <dd>Když čidlo hlásí déšť, cyklus se přeskočí</dd>
            </div>
          </dl>
        </div>
      </header>

      {/* SEKCE 1 — Co pro vás uděláme (skutečná sekvence realizace) */}
      <section className="iri-svc" aria-labelledby="svc-h">
        <div className="iri-svc__head">
          <p className="iri-kicker">Od návrhu k první zálivce</p>
          <h2 id="svc-h" className="iri-h2">
            Čtyři kroky pod povrchem trávníku
          </h2>
          <p className="iri-sub">
            Zavlažování řešíme jako celek &mdash; od výpočtu tlaku a průtoku po
            aplikaci Hunter Hydrawise ve vašem mobilu. Postup je vždy stejný,
            výsledek na míru pozemku.
          </p>
        </div>

        <ol className="iri-steps">
          <li className="iri-step">
            <span className="iri-step__no">01</span>
            <h3 className="iri-step__t">Zaměření a bezplatný návrh</h3>
            <p>
              Podle plánu zahrady rozvrhneme sekce postřikovačů tak, aby se
              dostřiky překrývaly a nikde nezůstal suchý ostrůvek. Návrh
              i cenovou nabídku dostanete zdarma.
            </p>
          </li>
          <li className="iri-step">
            <span className="iri-step__no">02</span>
            <h3 className="iri-step__t">Rozvody a šachtice</h3>
            <p>
              Uložíme potrubí, elektroventily a šachtice Irimon A15 do rýh.
              Trávník se srovná a po pár týdnech po instalaci nepoznáte.
            </p>
          </li>
          <li className="iri-step">
            <span className="iri-step__no">03</span>
            <h3 className="iri-step__t">Postřikovače Hunter</h3>
            <p>
              Výsuvné rotační i sprejové postřikovače nastavíme na přesný úhel
              a dosah. Na záhony přidáme kapkovou závlahu, která šetří vodu.
            </p>
          </li>
          <li className="iri-step">
            <span className="iri-step__no">04</span>
            <h3 className="iri-step__t">Ovládací jednotka a čidlo</h3>
            <p>
              Zapojíme jednotku Hunter s čidlem deště a předáme vám ovládání
              z telefonu. Zálivku spustíte i zastavíte odkudkoli.
            </p>
          </li>
        </ol>

        <figure className="iri-figure">
          <img
            src="/section-1.webp"
            alt="Detail výsuvného postřikovače a rozvodů závlahového systému v trávníku"
            className="iri-figure__img"
          />
          <figcaption>
            Komponenty Hunter skladem &mdash; postřikovače, ventily, potrubí
            i ovládací jednotky. Velkoobchod i realizace po celé ČR.
          </figcaption>
        </figure>
      </section>

      {/* SEKCE 2 — Důvěra / o nás */}
      <section className="iri-trust" aria-labelledby="trust-h">
        <div className="iri-trust__media">
          <img
            src="/section-2.webp"
            alt="Zavlažovaný sportovní trávník s jemnou vodní mlhou od postřikovačů"
            className="iri-trust__img"
          />
        </div>

        <div className="iri-trust__body">
          <p className="iri-kicker iri-kicker--light">Proč Irimon</p>
          <h2 id="trust-h" className="iri-h2 iri-h2--light">
            Obchodní zastoupení Hunter pro ČR &mdash; už přes 25 let
          </h2>
          <p className="iri-sub iri-sub--light">
            Nejsme prodejce jedné sezóny. Dodáváme profesionálům i majitelům zahrad,
            školíme závlaháře a půjčujeme stroje. Když se něco pokazí,
            máte s kým mluvit &mdash; a díly máme skladem.
          </p>

          <ul className="iri-facts">
            <li>
              <strong>1998</strong>
              <span>rok, kdy jsme začali stavět závlahy v Česku</span>
            </li>
            <li>
              <strong>Celá ČR</strong>
              <span>instalace i servis, sklad a velkoobchod v Praze</span>
            </li>
            <li>
              <strong>Hydrawise</strong>
              <span>ovládání a servis po síti pro profesionály</span>
            </li>
          </ul>

          <div className="iri-contactcard">
            <p className="iri-contactcard__label">Nezávazně proberme vaši zahradu</p>
            <div className="iri-contactcard__row">
              <a className="iri-btn iri-btn--solid" href="tel:+420281868181">
                Zavolat 281&nbsp;868&nbsp;181
              </a>
              <a className="iri-btn iri-btn--line" href="mailto:navrh@irimon.cz">
                Napsat e-mail
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
