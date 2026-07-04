import type { CSSProperties } from "react";

export default function Page() {
  const services = [
    {
      code: "TČ",
      name: "Tepelná čerpadla",
      brands: "Bosch · NIBE · IVT",
      desc: "Trhem ověřená čerpadla pro ekologické vytápění i přípravu teplé vody. Navrhneme výkon na míru vašemu domu, ne z katalogu.",
    },
    {
      code: "TC",
      name: "Topení a chlazení",
      brands: "Bosch · Junkers",
      desc: "Plynové a elektrické kotle, nástěnné klimatizace a multisplit systémy. Teplo v zimě, chládek v létě — z jedné ruky.",
    },
    {
      code: "SO",
      name: "Solární systémy",
      brands: "Junkers · Regulus",
      desc: "Ohřev teplé vody ze slunce. Jednou zaplatíte, pak topíte zadarmo — a slunce v Ostravě svítí víc, než čekáte.",
    },
    {
      code: "SR",
      name: "Servis a revize",
      brands: "Certifikovaní technici",
      desc: "Pravidelné revize a servis od techniků s oprávněním. Spolehlivý chod bez nepříjemných překvapení v mrazu.",
    },
    {
      code: "DO",
      name: "Dotace",
      brands: "Nová zelená úsporám · Kotlíková",
      desc: "Provedeme vás žádostí i realizací aktuálních státních programů. Papírování vyřídíme, vy ušetříte.",
    },
    {
      code: "+",
      name: "Voda, plyn, topení",
      brands: "Kompletní instalatérství",
      desc: "Rozvody vody a plynu, výměny baterií, přípojky. Když už jsme u vás, dotáhneme i to ostatní.",
    },
  ];

  return (
    <main className="rr">
      <header className="rr-topbar">
        <a className="rr-wordmark" href="#uvod" aria-label="Rudolf Riezner — domů">
          <span className="rr-wordmark__mark" aria-hidden="true">RR</span>
          <span className="rr-wordmark__name">
            Rudolf Riezner
            <span className="rr-wordmark__sub">topení · voda · plyn · Ostrava</span>
          </span>
        </a>
        <a className="rr-call" href="tel:+420608712869">
          <span className="rr-call__label">Zavolat</span>
          <span className="rr-call__num">+420 608 712 869</span>
        </a>
      </header>

      <section className="rr-hero" id="uvod">
        <div className="rr-hero__media">
          <img
            src="/hero.webp"
            alt="Montáž tepelného čerpadla u rodinného domu na Ostravsku"
            className="rr-hero__img"
          />
          <span className="rr-hero__gauge" aria-hidden="true">
            <span className="rr-hero__gauge-tick" />
          </span>
        </div>
        <div className="rr-hero__text">
          <p className="rr-eyebrow">Instalatérství &amp; tepelná technika · Ostrava</p>
          <h1 className="rr-hero__title">
            Topení, které<br />
            <span className="rr-hero__accent">v zimě nezradí.</span>
          </h1>
          <p className="rr-hero__lead">
            Rudolf Riezner instaluje tepelná čerpadla, kotle a solární ohřev
            na Ostravsku už přes dvacet let. Přijedu, změřím, poradím —
            a navrhnu řešení, které sedne vašemu domu i rozpočtu.
          </p>
          <div className="rr-hero__actions">
            <a className="rr-btn rr-btn--solid" href="tel:+420608712869">Zavolat a domluvit návštěvu</a>
            <a className="rr-btn rr-btn--ghost" href="#nabidka">Co umím</a>
          </div>
          <dl className="rr-hero__facts">
            <div><dt>Značky</dt><dd>Bosch · NIBE · IVT</dd></div>
            <div><dt>Působím</dt><dd>Ostrava a okolí</dd></div>
            <div><dt>Dotace</dt><dd>vyřídím za vás</dd></div>
          </dl>
        </div>
      </section>

      <section className="rr-services" id="nabidka" aria-labelledby="nabidka-h">
        <div className="rr-section-head">
          <p className="rr-eyebrow rr-eyebrow--dark">Co pro vás udělám</p>
          <h2 className="rr-section-title" id="nabidka-h">
            Od výměny baterie po celý zdroj tepla
          </h2>
          <p className="rr-section-note">
            Nejsem řetězec s call centrem. Jeden člověk, který zakázku převezme,
            udělá a stojí si za ní. Vyberte, co řešíte:
          </p>
        </div>
        <ul className="rr-grid">
          {services.map((s) => (
            <li className="rr-card" key={s.name}>
              <span className="rr-card__code" aria-hidden="true">{s.code}</span>
              <h3 className="rr-card__name">{s.name}</h3>
              <p className="rr-card__brands">{s.brands}</p>
              <p className="rr-card__desc">{s.desc}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="rr-trust" aria-labelledby="trust-h">
        <div className="rr-trust__media">
          <img
            src="/section-1.webp"
            alt="Detail zapojené kotelny s tepelným čerpadlem a rozvody"
            className="rr-trust__img"
          />
          <img
            src="/section-2.webp"
            alt="Rudolf Riezner při montáži topné soustavy"
            className="rr-trust__img rr-trust__img--small"
          />
        </div>
        <div className="rr-trust__text">
          <p className="rr-eyebrow rr-eyebrow--dark">Proč právě já</p>
          <h2 className="rr-section-title" id="trust-h">
            Přijedu k vám, ne vy za mnou
          </h2>
          <p className="rr-trust__lead">
            Většina lidí mi zavolá až ve chvíli, kdy jim doslouží starý kotel.
            Proto beru telefon i o víkendu a montáž plánuju tak, abyste nezůstali
            bez topení déle, než musíte.
          </p>
          <ul className="rr-checks">
            <li>Certifikovaný technik pro tepelná čerpadla i plynové kotle</li>
            <li>Dotaci Nová zelená úsporám i kotlíkovou vyřídím za vás</li>
            <li>Sídlo na Gajdošově 29A — jsem místní, ne firma odjinud</li>
            <li>Po instalaci se o zdroj tepla starám dál: servis a revize</li>
          </ul>
          <div className="rr-contactcard">
            <p className="rr-contactcard__label">Nejrychleji mě zastihnete telefonem</p>
            <a className="rr-contactcard__num" href="tel:+420608712869">+420 608 712 869</a>
            <p className="rr-contactcard__addr">Gajdošova 29A · 702 00 Ostrava · riezner@gmail.com</p>
          </div>
        </div>
      </section>
    </main>
  );
}
