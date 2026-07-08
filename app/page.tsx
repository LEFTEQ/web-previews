import React from "react";

const books = [
  {
    tab: "Kniha I",
    title: "Pro vlastníky bytů",
    who: "Jednotlivci, kteří chtějí byt bez starostí a papírování.",
    items: [
      ["§", "Evidence plateb a měsíční kontrola nedoplatků"],
      ["§", "Vyúčtování služeb a energií jednou ročně"],
      ["§", "Drobné opravy přes prověřené plzeňské řemeslníky"],
    ],
  },
  {
    tab: "Kniha II",
    title: "Pro společenství vlastníků",
    who: "Výbory SVJ, které chtějí mít dům pod kontrolou.",
    items: [
      ["§", "Roční schůzi SVJ zorganizujeme a zapíšeme zdarma"],
      ["§", "Pojištění odpovědnosti výboru sjednáme bez příplatku"],
      ["§", "Právní poradnu vede renomovaná advokátní kancelář"],
    ],
  },
  {
    tab: "Kniha III",
    title: "Pro investory",
    who: "Majitelé bytových domů a nájemních portfolií.",
    items: [
      ["§", "Výhodné ceny u dodavatelů díky objemu zakázek"],
      ["§", "Balíček služeb složíte přesně na míru domu"],
      ["§", "Reporting výnosů a nákladů, který dává smysl"],
    ],
  },
];

export default function Page() {
  return (
    <main>
      <header className="topbar">
        <div className="mark">
          Rarita<span className="dot">.</span>
          <small>správa nemovitostí · Plzeň</small>
        </div>
        <nav className="topnav" aria-label="Hlavní navigace">
          <a href="#sluzby">Služby</a>
          <a href="#duvera">Reference</a>
          <a href="#kontakt">Kontakt</a>
        </nav>
      </header>

      <section className="hero">
        <div className="hero-inner">
          <p className="hero-eyebrow reveal d1">
            Vedeme dům jako pořádnou knihu — <b>položku po položce</b>
          </p>
          <h1 className="reveal d2">
            Váš dům v <em>naprostém</em> pořádku.
          </h1>
          <p className="hero-lead reveal d3">
            Spravujeme byty, společenství vlastníků i celé nájemní domy v Plzni.
            Platby hlídáme každý měsíc, schůze vedeme za vás a řemeslníky máme
            prověřené. Vy jen bydlíte.
          </p>
          <a className="btn reveal d3" href="#kontakt">
            Nezávazně poptat správu <span aria-hidden="true">→</span>
          </a>

          <div className="hero-media reveal d4">
            <img
              src="/hero.webp"
              alt="Bytový dům v Plzni ve správě společnosti Rarita"
            />
            <div className="plate">
              <div className="plate-cell">
                <div className="k">Splatnost hlídáme</div>
                <div className="v">
                  12×<small>měsíční kontrola plateb</small>
                </div>
              </div>
              <div className="plate-cell">
                <div className="k">Pojistný limit</div>
                <div className="v">
                  10 mil.<small>krytí způsobených škod</small>
                </div>
              </div>
              <div className="plate-cell">
                <div className="k">K dispozici</div>
                <div className="v">
                  Po–Pá<small>živý člověk, ne robot</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="sec" id="sluzby">
        <div className="sec-head">
          <span className="sec-num">01 / Nabídka služeb</span>
          <h2>Tři knihy podle toho, kdo dům vlastní.</h2>
          <p>
            Nemáme jeden balíček pro všechny. Vyberte podle toho, jestli řešíte
            vlastní byt, celé společenství, nebo investici — služby složíme na
            míru domu.
          </p>
        </div>
        <div className="books">
          {books.map((b) => (
            <article className="book" key={b.tab}>
              <span className="tab">{b.tab}</span>
              <h3>{b.title}</h3>
              <p className="who">{b.who}</p>
              <ul>
                {b.items.map((it, i) => (
                  <li key={i}>
                    <b>{it[0]}</b>
                    <span>{it[1]}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="sec trust" id="duvera">
        <div className="sec-head">
          <span className="sec-num">02 / Proč právě Rarita</span>
          <h2>Řemeslo důvěry se dokládá, ne slibuje.</h2>
          <p>
            Správa nemovitostí stojí na spolehlivosti. Tady jsou konkrétní čísla
            a jedna věta od člověka, kterému spravujeme dům.
          </p>
        </div>
        <div className="trust-grid">
          <div>
            <figure className="quote">
              <p>
                „Spolupráce se zaměstnanci Rarity je výborná — všechna čest.
                Odbornost, spolehlivost i vstřícnost doplněné příjemným
                vystupováním jsou pro nás velkou devízou.“
              </p>
              <cite>Ivan Š. · předseda SVJ Masarykova, Plzeň</cite>
            </figure>
            <ul className="facts">
              <li>
                <span className="fig">0 <i>Kč</i></span>
                <span className="lbl">
                  za organizaci roční schůze SVJ i za sjednání pojištění výboru
                </span>
              </li>
              <li>
                <span className="fig">Po–Pá</span>
                <span className="lbl">
                  se vám každý pracovní den ochotně věnuje konkrétní člověk
                </span>
              </li>
              <li>
                <span className="fig">100 %</span>
                <span className="lbl">
                  plzeňská firma — dům si zajedeme obhlédnout osobně
                </span>
              </li>
            </ul>
          </div>
          <div className="trust-media">
            <img
              src="/section-1.webp"
              alt="Pracovníci Rarity při kontrole domu v Plzni"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
