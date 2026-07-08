import type { CSSProperties } from "react";

export default function Page() {
  const obory = [
    {
      cislo: "01",
      nazev: "Po úrazech a operacích",
      popis:
        "Návrat hybnosti po zlomeninách, náhradách kloubů a operacích páteře. Vedeme vás krok za krokem od prvního došlápnutí až k plnému zatížení.",
    },
    {
      cislo: "02",
      nazev: "Bolavá páteř a klouby",
      popis:
        "Vertebrogenní a ortopedické potíže z dlouhodobého přetěžování. Uvolníme, co drží, a posílíme, co chybí.",
    },
    {
      cislo: "03",
      nazev: "Neurologická onemocnění",
      popis:
        "Terapie při poruchách hybnosti a rovnováhy neurologického původu, s trpělivostí a jasným plánem.",
    },
    {
      cislo: "04",
      nazev: "Masáže a vířivky",
      popis:
        "Klasické i reflexní masáže a vodoléčba na nově rekonstruovaných vířivkách — úleva i příprava těla na cvičení.",
    },
  ];

  const cislaFirmy = [
    { hodnota: "1994", popis: "Rok, kdy Jiřina Juránková otevřela ordinaci na Jílové" },
    { hodnota: "dospělí", popis: "i děti — pečujeme o pohyb v každém věku" },
    { hodnota: "individuálně", popis: "každému pacientovi vlastní plán terapie" },
  ];

  const objednavky = [
    ["Pondělí", "7:00–12:00, 12:30–14:30"],
    ["Úterý", "7:00–12:00, 12:30–14:30"],
    ["Středa", "7:00–12:00, 12:30–14:30"],
    ["Čtvrtek", "7:00–12:00, 12:30–18:00"],
    ["Pátek", "7:00–12:00"],
  ];

  return (
    <main className="rj">
      <header className="rj-nav">
        <a className="rj-brand" href="#" aria-label="Rehabilitace Juránková, domů">
          <span className="rj-brand-mark" aria-hidden="true">
            <span className="rj-brand-arc" />
          </span>
          <span className="rj-brand-text">
            <span className="rj-brand-name">Juránková</span>
            <span className="rj-brand-sub">rehabilitace · Olomouc</span>
          </span>
        </a>
        <nav className="rj-nav-links" aria-label="Hlavní">
          <a href="#pece">Péče</a>
          <a href="#objednani">Objednání</a>
          <a href="#o-nas">O nás</a>
        </nav>
        <a className="rj-nav-cta" href="tel:+420585411736">585 411 736</a>
      </header>

      <section className="rj-hero" aria-labelledby="rj-hero-title">
        <div className="rj-hero-copy">
          <p className="rj-eyebrow">Soukromá rehabilitace · od roku 1994</p>
          <h1 id="rj-hero-title">
            Pomáháme vám<br />
            <span className="rj-hero-accent">se zase hýbat</span>
          </h1>
          <p className="rj-hero-lead">
            Ambulantní fyzioterapie na Jílové v Olomouci. Po úraze, po operaci nebo
            když už záda a klouby nechtějí — najdeme cestu zpátky k pohybu bez bolesti.
          </p>
          <div className="rj-hero-actions">
            <a className="rj-btn" href="#objednani">Jak se objednat</a>
            <a className="rj-btn rj-btn-ghost" href="tel:+420585411736">Zavolat na recepci</a>
          </div>
          <p className="rj-hero-note">Jílová 282/2a, Nová Ulice · vstup bezbariérový · autobus 16 a 19</p>
        </div>
        <figure className="rj-hero-media">
          <img
            src="/hero.webp"
            alt="Fyzioterapeut vede pacienta při cvičení v rehabilitační ambulanci"
            width={960}
            height={1120}
            loading="eager"
          />
          <figcaption className="rj-hero-badge">
            <span className="rj-hero-badge-big">30&nbsp;let</span>
            <span>praxe v Olomouci</span>
          </figcaption>
        </figure>
      </section>

      <section className="rj-care" id="pece" aria-labelledby="rj-care-title">
        <div className="rj-section-head">
          <p className="rj-eyebrow">S čím k nám lidé chodí</p>
          <h2 id="rj-care-title">Terapie na míru vašemu tělu</h2>
          <p className="rj-section-lead">
            Poskytujeme ambulantní péči dospělým i dětem. Nejdřív vás vyšetříme,
            pak zvolíme účinnou terapii — a držíme se jí, dokud se nevrátíte do formy.
          </p>
        </div>
        <ol className="rj-care-grid">
          {obory.map((o) => (
            <li className="rj-care-card" key={o.cislo}>
              <span className="rj-care-num" aria-hidden="true">{o.cislo}</span>
              <h3>{o.nazev}</h3>
              <p>{o.popis}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="rj-about" id="o-nas" aria-labelledby="rj-about-title">
        <figure className="rj-about-media">
          <img
            src="/section-2.webp"
            alt="Prostory rehabilitační ambulance Juránková v Olomouci"
            width={880}
            height={720}
            loading="lazy"
          />
        </figure>
        <div className="rj-about-copy">
          <p className="rj-eyebrow">Naše rehabilitace</p>
          <h2 id="rj-about-title">Rodinné zařízení, které založila fyzioterapeutka</h2>
          <p>
            Soukromou rehabilitaci otevřela Jiřina Juránková v roce 1994. Od té doby
            se u nás vystřídaly tisíce pacientů po úrazech, operacích i s dlouhodobou
            bolestí páteře a kloubů. Naší prioritou zůstává individuální přístup —
            každý dostane terapii, která dává smysl právě jemu.
          </p>
          <dl className="rj-facts">
            {cislaFirmy.map((f) => (
              <div className="rj-fact" key={f.hodnota}>
                <dt>{f.hodnota}</dt>
                <dd>{f.popis}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="rj-visit" id="objednani" aria-labelledby="rj-visit-title">
        <div className="rj-visit-inner">
          <div className="rj-visit-head">
            <p className="rj-eyebrow">Než přijdete poprvé</p>
            <h2 id="rj-visit-title">Objednáváme osobně na recepci</h2>
            <p className="rj-section-lead">
              Nové pacienty zapisujeme jen osobně, ať máme na vaše potíže dost času.
              Zastavte se v těchto hodinách:
            </p>
          </div>
          <div className="rj-visit-cols">
            <table className="rj-hours">
              <caption>Objednávání nových pacientů</caption>
              <tbody>
                {objednavky.map(([den, cas]) => (
                  <tr key={den}>
                    <th scope="row">{den}</th>
                    <td>{cas}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="rj-bring">
              <h3>Na první terapii si vezměte</h3>
              <ul>
                <li>ručník a přezůvky</li>
                <li>objednávací kartičku</li>
                <li>pohodlný cvičební úbor</li>
              </ul>
              <p className="rj-bring-note">
                Nemůžete přijít? Omluvte se prosím nejpozději 24 hodin předem —
                jinak termín propadá.
              </p>
              <p className="rj-bring-contact">
                Recepce <a href="tel:+420585411736">585 411 736</a> · Po–Čt 7–17, Pá 7–14
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
