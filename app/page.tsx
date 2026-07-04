import type { CSSProperties } from "react";

export default function Page() {
  const sortiment = [
    {
      kod: "M18",
      znacka: "Milwaukee",
      popis:
        "Aku systém M18 a M12, kombíky a rázové utahováky. Profi nářadí, které vydrží denní provoz na stavbě.",
    },
    {
      kod: "RAI",
      znacka: "Raimondi",
      popis:
        "Italské řezačky obkladů, nivelační systémy a míchadla pro obkladače, kteří nechtějí slevit z přesnosti.",
    },
    {
      kod: "DED",
      znacka: "Dedra",
      popis:
        "Široký sortiment ručního i síťového nářadí a příslušenství pro řemeslo i domácí dílnu.",
    },
    {
      kod: "TYR",
      znacka: "Tyrolit",
      popis:
        "Brusné a řezné kotouče, diamantové kotouče pro beton a dlažbu. Kotouč, který drží tvar.",
    },
  ];

  const duvody = [
    {
      c: "01",
      nadpis: "Poradíme dřív, než koupíte",
      text:
        "Proškolená obsluha za pultem. Řekneme vám, jestli si nářadí radši půjčit než koupit, a co k němu potřebujete.",
    },
    {
      c: "02",
      nadpis: "Vyzkoušíte si to u nás",
      text:
        "Stroj vám ukážeme, vysvětlíme provoz a odzkoušíme přímo na prodejně. Odcházíte s nářadím, se kterým umíte.",
    },
    {
      c: "03",
      nadpis: "Servis, který to opraví",
      text:
        "Záruční i pozáruční servis na to, co u nás koupíte. Garanční prohlídky bereme jako samozřejmost.",
    },
    {
      c: "04",
      nadpis: "Půjčovna po ruce",
      text:
        "Aku i síťové nářadí a drobná stavební mechanizace k zapůjčení firmám i lidem, co staví svépomocí.",
    },
  ];

  return (
    <main className="qt">
      <header className="qt-nav">
        <a className="qt-logo" href="#" aria-label="QT Technik, domů">
          <span className="qt-logo__mark" aria-hidden="true">QT</span>
          <span className="qt-logo__word">Technik</span>
        </a>
        <span className="qt-nav__meta">Železářství &middot; Ostrava &middot; od 1994</span>
      </header>

      <section className="qt-hero" aria-labelledby="qt-hero-title">
        <div className="qt-hero__media">
          <img
            src="/hero.webp"
            alt="Regály profesionálního nářadí a strojů na prodejně QT Technik ve Slezské Ostravě"
            className="qt-hero__img"
            loading="eager"
            decoding="async"
          />
          <div className="qt-hero__scrim" aria-hidden="true" />
        </div>

        <div className="qt-hero__panel">
          <p className="qt-eyebrow">Prodej &middot; Půjčovna &middot; Servis</p>
          <h1 id="qt-hero-title" className="qt-hero__title">
            Nářadí, které<br />
            <em>něco vydrží.</em>
          </h1>
          <p className="qt-hero__lead">
            Profi stroje a nářadí pro stavbu, průmysl a řemeslo. Na Těšínské
            v Ostravě si je osaháte, necháte poradit a odjedete s tím pravým.
          </p>
          <div className="qt-hero__actions">
            <a className="qt-btn qt-btn--solid" href="#sortiment">
              Prohlédnout sortiment
            </a>
            <a className="qt-btn qt-btn--ghost" href="tel:+420736626938">
              Zavolat 736&nbsp;626&nbsp;938
            </a>
          </div>
        </div>

        <ul className="qt-ticker" aria-label="Rychlé informace">
          <li><span>Otevřeno</span> po–pá 7:00–16:00</li>
          <li><span>Kde</span> Těšínská 2088/179, Slezská Ostrava</li>
          <li><span>Hodnocení</span> 4,7 / 96 recenzí</li>
        </ul>
      </section>

      <section id="sortiment" className="qt-block" aria-labelledby="qt-sortiment-title">
        <div className="qt-block__head">
          <p className="qt-eyebrow">Značky na skladě</p>
          <h2 id="qt-sortiment-title" className="qt-block__title">
            Vybíráme jen to, co bychom si koupili sami
          </h2>
          <p className="qt-block__intro">
            U nás nenajdete regály plné neznámých značek. Vedeme sortiment, který
            řemeslníci na Ostravsku znají a vracejí se pro něj.
          </p>
        </div>

        <ul className="qt-grid">
          {sortiment.map((s) => (
            <li key={s.znacka} className="qt-card">
              <span className="qt-card__kod" aria-hidden="true">{s.kod}</span>
              <h3 className="qt-card__title">{s.znacka}</h3>
              <p className="qt-card__text">{s.popis}</p>
            </li>
          ))}
        </ul>

        <a className="qt-btn qt-btn--solid qt-block__cta" href="#sortiment">
          Otevřít e-shop
        </a>
      </section>

      <section className="qt-trust" aria-labelledby="qt-trust-title">
        <div className="qt-trust__media">
          <img
            src="/section-1.webp"
            alt="Obsluha QT Technik předvádí zákazníkovi profesionální nářadí na prodejně"
            className="qt-trust__img"
            loading="lazy"
            decoding="async"
          />
        </div>

        <div className="qt-trust__body">
          <p className="qt-eyebrow">Proč právě my</p>
          <h2 id="qt-trust-title" className="qt-block__title">
            Jedna z největších na Ostravsku už{" "}
            <span className="qt-since">30 let</span>
          </h2>
          <p className="qt-block__intro">
            QT Technik prodává profi stroje a nářadí od roku 1994. Za pultem
            stojí lidi, kteří stavbu znají — od aku šroubováku po diamantový
            kotouč vám poradí, co dává smysl pro vaši práci.
          </p>

          <ol className="qt-reasons">
            {duvody.map((d) => (
              <li key={d.c} className="qt-reason">
                <span className="qt-reason__num" aria-hidden="true">{d.c}</span>
                <div>
                  <h3 className="qt-reason__title">{d.nadpis}</h3>
                  <p className="qt-reason__text">{d.text}</p>
                </div>
              </li>
            ))}
          </ol>

          <img
            src="/section-2.webp"
            alt="Servisní dílna QT Technik, kde probíhá záruční i pozáruční opravy strojů"
            className="qt-trust__strip"
            loading="lazy"
            decoding="async"
            style={{ "--d": "1" } as CSSProperties}
          />
        </div>
      </section>
    </main>
  );
}
