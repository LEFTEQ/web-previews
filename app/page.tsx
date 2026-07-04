import React from "react";

export default function Page() {
  const menu = [
    {
      no: "01",
      name: "Rauty na klíč",
      note: "Firemní večírky, konference, otevření provozovny",
      detail:
        "Studená i teplá kuchyně, obsluha, nádobí, doprava po Ústí i do okolí. Přijedeme, prostřeme, uklidíme — vy se staráte jen o hosty.",
    },
    {
      no: "02",
      name: "Svatby a oslavy",
      note: "Od degustace menu po poslední přípitek",
      detail:
        "Sestavíme menu podle vašich chutí i rozpočtu, doladíme před svatbou na společné degustaci. Postaráme se o svatební tabuli i o půlnoční překvapení.",
    },
    {
      no: "03",
      name: "Denní obědy a rozvoz",
      note: "Pravidelné stravování pro firmy v Klíši a okolí",
      detail:
        "Poctivá česká i moderní kuchyně, každý den jinak, dovezeme v termoboxu tak, aby jídlo dorazilo horké přesně na polední pauzu.",
    },
  ];

  const trust = [
    { k: "2015", v: "vaříme pro Ústecko" },
    { k: "20–400", v: "hostů na jedné akci" },
    { k: "Klíše", v: "naše kuchyně, odsud rozvážíme" },
  ];

  return (
    <main className="kt">
      <header className="kt-top">
        <a className="kt-mark" href="#hero" aria-label="KATIM group — catering Ústí nad Labem">
          <span className="kt-mark__k">KATIM</span>
          <span className="kt-mark__g">catering</span>
        </a>
        <nav className="kt-nav" aria-label="Hlavní">
          <a href="#menu">Co uvaříme</a>
          <a href="#o-nas">O kuchyni</a>
          <a className="kt-nav__call" href="tel:+420475000000">Zavolat</a>
        </nav>
      </header>

      <section className="kt-hero" id="hero">
        <div className="kt-hero__media">
          <img
            src="/hero.webp"
            alt="Naservírovaný cateringový stůl od KATIM group — studená kuchyně připravená na akci"
            className="kt-hero__img"
          />
          <div className="kt-hero__wash" aria-hidden="true" />
        </div>
        <div className="kt-hero__copy">
          <p className="kt-eyebrow">Catering &middot; Ústí nad Labem, Klíše</p>
          <h1 className="kt-hero__title">
            Prostřeme
            <span className="kt-hero__em">váš stůl</span>
            přesně na čas.
          </h1>
          <p className="kt-hero__lede">
            KATIM group vaří pro ústecké firmy, svatby i rodinné oslavy od roku 2015.
            Domluvíme menu, přivezeme, obsloužíme a po hostech uklidíme.
          </p>
          <div className="kt-hero__cta">
            <a className="kt-btn kt-btn--solid" href="tel:+420475000000">Zavolat a domluvit termín</a>
            <a className="kt-btn kt-btn--ghost" href="#menu">Prohlédnout nabídku</a>
          </div>
        </div>
      </section>

      <section className="kt-sec kt-menu" id="menu" aria-labelledby="menu-h">
        <div className="kt-sec__head">
          <p className="kt-eyebrow">Nabídka</p>
          <h2 className="kt-sec__title" id="menu-h">Tři chody, jak vaříme nejčastěji</h2>
          <p className="kt-sec__sub">
            Každou akci stavíme na míru — tady jsou tři situace, se kterými za námi lidé chodí nejvíc.
          </p>
        </div>
        <ol className="kt-list">
          {menu.map((m) => (
            <li className="kt-card" key={m.no}>
              <span className="kt-card__no" aria-hidden="true">{m.no}</span>
              <div className="kt-card__body">
                <h3 className="kt-card__name">{m.name}</h3>
                <p className="kt-card__note">{m.note}</p>
                <p className="kt-card__detail">{m.detail}</p>
              </div>
            </li>
          ))}
        </ol>
        <figure className="kt-menu__fig">
          <img
            src="/section-1.webp"
            alt="Detail připravovaného jídla v kuchyni KATIM group"
            className="kt-menu__img"
          />
          <figcaption>Připravujeme čerstvě v den akce, v naší kuchyni na Klíši.</figcaption>
        </figure>
      </section>

      <section className="kt-sec kt-about" id="o-nas" aria-labelledby="about-h">
        <figure className="kt-about__fig">
          <img
            src="/section-2.webp"
            alt="Obsluha KATIM group servíruje jídlo na akci"
            className="kt-about__img"
          />
        </figure>
        <div className="kt-about__copy">
          <p className="kt-eyebrow">O kuchyni</p>
          <h2 className="kt-sec__title" id="about-h">Malá kuchyně, na kterou je spolehnutí</h2>
          <p className="kt-about__text">
            Za KATIM group stojí Karel Tippmann a tým, který v Ústí nad Labem vaří s hostinským
            oprávněním od roku 2015. Nejsme řetězec — každou objednávku vede jeden člověk od první
            domluvy až po odvoz nádobí.
          </p>
          <p className="kt-about__text">
            Postaráme se i o pití: máme oprávnění k prodeji lihovin, takže bar i přípitek zařídíme
            pod jednou střechou. Vy řešíte jen to, koho pozvete.
          </p>
          <dl className="kt-trust">
            {trust.map((t) => (
              <div className="kt-trust__item" key={t.k}>
                <dt>{t.k}</dt>
                <dd>{t.v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>
    </main>
  );
}
