import type { CSSProperties } from "react";

const nabidky = [
  {
    cena: "3 590 000 Kč",
    stav: "Novinka",
    typ: "Prodej · byt 3+1",
    popis: "Prostorný byt 64 m² po rekonstrukci, ul. Resslova, Ostrava-Poruba",
    dispozice: "64 m²",
    lokalita: "Poruba",
  },
  {
    cena: "21 900 Kč / měsíc",
    stav: "Sleva",
    typ: "Pronájem · byt 2+kk",
    popis: "Moderní byt s balkonem a parkovacím stáním, klidná lokalita",
    dispozice: "50 m²",
    lokalita: "Zábřeh",
  },
  {
    cena: "16 000 Kč / měsíc",
    stav: "Novinka",
    typ: "Pronájem · byt 2+1",
    popis: "Velkometrážní byt s velkou šatnou v osobním vlastnictví",
    dispozice: "96 m²",
    lokalita: "Mariánské Hory",
  },
  {
    cena: "180 Kč / m² měsíc",
    stav: "Volné",
    typ: "Pronájem · kanceláře",
    popis: "Reprezentativní kancelářské prostory, dělitelné dle potřeby",
    dispozice: "241 m²",
    lokalita: "Mariánské Hory",
  },
];

const kroky = [
  {
    c: "01",
    nadpis: "Odhad tržní ceny zdarma",
    text: "Projdeme si nemovitost, data z okolí a připravíme reálný odhad ceny — bez závazku a bez poplatku.",
  },
  {
    c: "02",
    nadpis: "Nafocení, video a homestaging",
    text: "Profesionální fotograf, moderní videoprohlídka a příprava bytu tak, aby zaujal na první pohled.",
  },
  {
    c: "03",
    nadpis: "Právní servis a financování",
    text: "Smlouvy, úschova, znalecký posudek i vlastní partner pro financování — hlídáme každý termín.",
  },
  {
    c: "04",
    nadpis: "Prodej a předání klíčů",
    text: "Vyjednáme nejlepší cenu, převedeme energie a předáme klíče novému majiteli. Vy jen podepíšete.",
  },
];

const reference = [
  {
    text: "S paní Odlevákovou spolupracuji už počtvrté a vždy jsem byl na 100 % spokojený. Transparentní a efektivní komunikace, veškeré dokumenty i schůzky vyřídila za mě. Nadstandardem je poradenství i po prodeji.",
    kdo: "Maurizio Martini",
    kde: "prodej bytu, Ostrava",
  },
  {
    text: "Chci poděkovat za milé jednání, velkou pomoc a skvělý průběh sjednání nového pronájmu. Všechny energie jsou vyřešeny a bydlí se mi tu výborně. Ještě jednou moc děkuji!",
    kdo: "Vlastimil Fojtík",
    kde: "pronájem bytu, Ostrava",
  },
  {
    text: "Všem majitelům, kteří zvažují pronájem svého bytu, doporučuji makléřku Lenku Jiráskovou — dle vlastní pětileté zkušenosti. Vždy férové a spolehlivé jednání.",
    kdo: "Klientka L. J.",
    kde: "pronájem bytu, Ostrava",
  },
];

export default function Page() {
  return (
    <main className="fx">
      <header className="fx-nav" aria-label="Hlavní navigace">
        <a className="fx-brand" href="#" aria-label="FLEXI REALITY, domovská stránka">
          <span className="fx-brand-mark" aria-hidden="true">▚</span>
          <span className="fx-brand-word">
            <strong>FLEXI</strong>
            <span>REALITY</span>
          </span>
        </a>
        <nav className="fx-links" aria-label="Sekce">
          <a href="#nabidka">Nabídka</a>
          <a href="#jak">Jak prodáváme</a>
          <a href="#reference">Reference</a>
        </nav>
        <a className="fx-nav-cta" href="tel:+420725653500">Zavolat 725 653 500</a>
      </header>

      <section className="fx-hero">
        <div className="fx-hero-copy">
          <p className="fx-eyebrow">Realitní kancelář · Ostrava a okolí</p>
          <h1 className="fx-h1">
            Prodáme váš byt<br />
            <span className="fx-h1-accent">za nejlepší cenu</span><br />
            v Ostravě.
          </h1>
          <p className="fx-lede">
            Od odhadu ceny přes videoprohlídku až po předání klíčů. Poruba, Zábřeh,
            Mariánské Hory — známe každou čtvrť a víme, komu tady byt prodat.
          </p>
          <div className="fx-hero-actions">
            <a className="fx-btn" href="#nabidka">Chci ocenění zdarma</a>
            <a className="fx-btn fx-btn-ghost" href="#nabidka">Prohlédnout nabídku</a>
          </div>
          <dl className="fx-hero-facts">
            <div>
              <dt>Působíme v</dt>
              <dd>Ostravě</dd>
            </div>
            <div>
              <dt>Odhad ceny</dt>
              <dd>zdarma</dd>
            </div>
            <div>
              <dt>Právní servis</dt>
              <dd>v ceně</dd>
            </div>
          </dl>
        </div>
        <figure className="fx-hero-media">
          <img src="/hero.webp" alt="Byt zprostředkovaný kanceláří FLEXI REALITY v Ostravě" width={880} height={1100} />
          <figcaption>Byt 3+1 · Poruba · nabídka měsíce</figcaption>
        </figure>
      </section>

      <section className="fx-section" id="nabidka" aria-labelledby="nabidka-h">
        <div className="fx-section-head">
          <p className="fx-eyebrow">Aktuální nabídka</p>
          <h2 id="nabidka-h" className="fx-h2">Byty a prostory, které teď hledají majitele</h2>
          <p className="fx-section-lede">
            Vybíráme jen to, co bychom bydleli sami. Každá nabídka má reálnou fotku,
            ověřenou dispozici a jasnou cenu — žádné „info na vyžádání“.
          </p>
        </div>
        <ul className="fx-grid" role="list">
          {nabidky.map((n) => (
            <li key={n.popis} className="fx-card">
              <div className="fx-card-top">
                <span className="fx-tag">{n.stav}</span>
                <span className="fx-card-type">{n.typ}</span>
              </div>
              <p className="fx-card-price">{n.cena}</p>
              <p className="fx-card-desc">{n.popis}</p>
              <div className="fx-card-meta">
                <span>{n.dispozice}</span>
                <span>{n.lokalita}</span>
              </div>
            </li>
          ))}
        </ul>
        <a className="fx-btn fx-btn-line" href="#nabidka">Všechny nabídky</a>
      </section>

      <section className="fx-jak" id="jak" aria-labelledby="jak-h">
        <div className="fx-jak-inner">
          <div className="fx-jak-head">
            <p className="fx-eyebrow fx-eyebrow-light">Jak prodáváme</p>
            <h2 id="jak-h" className="fx-h2 fx-h2-light">Čtyři kroky od bytu ke klíčům</h2>
            <p className="fx-jak-lede">
              Vedeme vás celým prodejem tak, abyste se nemuseli o nic starat.
              Tady je přesně to, co pro vás uděláme.
            </p>
            <figure className="fx-jak-media">
              <img src="/section-1.webp" alt="Makléř FLEXI REALITY při prohlídce bytu s klientem" width={720} height={520} />
            </figure>
          </div>
          <ol className="fx-steps" role="list">
            {kroky.map((k) => (
              <li key={k.c} className="fx-step">
                <span className="fx-step-num" aria-hidden="true">{k.c}</span>
                <div>
                  <h3 className="fx-step-title">{k.nadpis}</h3>
                  <p className="fx-step-text">{k.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="fx-ref" id="reference" aria-labelledby="ref-h">
        <div className="fx-ref-media">
          <img src="/section-2.webp" alt="Spokojení klienti FLEXI REALITY po předání nemovitosti" width={720} height={640} />
        </div>
        <div className="fx-ref-body">
          <p className="fx-eyebrow">Reference</p>
          <h2 id="ref-h" className="fx-h2">Co říkají lidé, kterým jsme prodali nebo pronajali</h2>
          <div className="fx-quotes">
            {reference.map((r) => (
              <figure key={r.kdo} className="fx-quote">
                <blockquote>{r.text}</blockquote>
                <figcaption>
                  <span className="fx-quote-name">{r.kdo}</span>
                  <span className="fx-quote-kde">{r.kde}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
