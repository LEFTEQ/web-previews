import React from "react";

export default function Page() {
  const typy = [
    {
      cislo: "01",
      nazev: "Výsuvné markýzy",
      popis:
        "Otevřená kloubová ramena schovaná pod nosnou tyčí. Vyjede jen látka a stín — ideální nad terasu, kde nechcete žádné boční sloupy.",
      detail: "vyložení až 3,5 m",
    },
    {
      cislo: "02",
      nazev: "Kazetové markýzy",
      popis:
        "Celý mechanismus i látka se schová do hliníkové kazety. V zimě zavřeno, chráněno před deštěm i špínou — vydrží roky jako nová.",
      detail: "plné uzavření látky",
    },
    {
      cislo: "03",
      nazev: "Markýzy do lodžie",
      popis:
        "Svislé nebo šikmé stínění na balkon a lodžii panelového domu. Napínací lanka drží látku i ve větrných dnech nad Libercem.",
      detail: "na míru zábradlí",
    },
    {
      cislo: "04",
      nazev: "Zimní zahrady",
      popis:
        "Stínění pergol a prosklených střech, kde slunce jinak topí naplno. Motor a dálkové ovládání standardně, čidlo větru na přání.",
      detail: "motor + dálkové",
    },
  ];

  const latky = [
    { znacka: "Sattler", pozn: "německá akrylová látka, barevně stálá" },
    { znacka: "Swela", pozn: "protiplísňová úprava a impregnace" },
  ];

  return (
    <main className="mo">
      <section className="mo-hero" aria-labelledby="mo-h1">
        <div className="mo-hero-img">
          <img
            src="/hero.webp"
            alt="Vysunutá pruhovaná markýza stínící terasu za slunečného dne"
            width={1600}
            height={1100}
          />
        </div>

        <div className="mo-hero-inner">
          <p className="mo-eyebrow">
            <span className="mo-dot" aria-hidden="true" /> Markýzy na míru · Liberec a okolí
          </p>

          <h1 id="mo-h1" className="mo-title">
            <span className="mo-title-line">Stín, který</span>
            <span className="mo-title-line mo-title-accent">vytáhnete</span>
            <span className="mo-title-line">jedním pohybem.</span>
          </h1>

          <p className="mo-lead">
            Martin Möller šije a montuje látkové markýzy pro terasy, balkony a
            zimní zahrady už přes dvacet let. Zaměřím vám prostor u vás doma,
            navrhnu vyložení i odstín látky a přijedu s hotovou markýzou
            připravenou k montáži.
          </p>

          <div className="mo-hero-actions">
            <a className="mo-btn" href="tel:+420602000000">
              Zavolat a domluvit zaměření
            </a>
            <a className="mo-btn-ghost" href="#nabidka">
              Prohlédnout typy markýz
            </a>
          </div>

          <dl className="mo-facts">
            <div>
              <dt>Vyložení</dt>
              <dd>až 3,5 m</dd>
            </div>
            <div>
              <dt>Látky</dt>
              <dd>Sattler &amp; Swela</dd>
            </div>
            <div>
              <dt>Zaměření</dt>
              <dd>u vás, zdarma</dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="mo-sekce" id="nabidka" aria-labelledby="mo-nabidka-h">
        <header className="mo-sekce-head">
          <p className="mo-kicker">Co pro vás ušiju</p>
          <h2 id="mo-nabidka-h">Čtyři způsoby, jak schovat terasu do stínu</h2>
          <p className="mo-sekce-lead">
            Každá markýza je jiné plátno na jiný prostor. Poradím podle toho, kam
            svítí slunce, jak je široká zeď a jestli chcete látku na zimu schovat.
          </p>
        </header>

        <ul className="mo-grid">
          {typy.map((t) => (
            <li className="mo-card" key={t.cislo}>
              <span className="mo-card-num" aria-hidden="true">
                {t.cislo}
              </span>
              <h3>{t.nazev}</h3>
              <p>{t.popis}</p>
              <span className="mo-card-tag">{t.detail}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="mo-onas" aria-labelledby="mo-onas-h">
        <div className="mo-onas-media">
          <img
            src="/section-1.webp"
            alt="Detail hliníkové kazety a napnuté látky markýzy"
            width={1200}
            height={900}
          />
        </div>

        <div className="mo-onas-text">
          <p className="mo-kicker">Kdo vám markýzu udělá</p>
          <h2 id="mo-onas-h">Jeden člověk od zaměření po poslední šroub</h2>
          <p>
            Nejsem řetězec ani montážní parta na zavolání. Přijedu, změřím,
            poradím s odstínem a pak vám tu markýzu sám postavím. Když se za rok
            povolí šroub nebo se ušpiní látka, voláte přímo mně — ne na infolinku.
          </p>

          <ul className="mo-latky">
            {latky.map((l) => (
              <li key={l.znacka}>
                <span className="mo-latky-znacka">{l.znacka}</span>
                <span className="mo-latky-pozn">{l.pozn}</span>
              </li>
            ))}
          </ul>

          <p className="mo-onas-note">
            Látky Sattler a Swela mají protiplísňovou úpravu a impregnaci —
            barevně vydrží roky na plném slunci a déšť po nich steče.
          </p>

          <a className="mo-btn" href="tel:+420602000000">
            Zavolat Martinovi
          </a>
        </div>
      </section>
    </main>
  );
}
