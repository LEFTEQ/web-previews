import type { CSSProperties } from "react";

const chlebicky = [
  {
    n: "103",
    nazev: "Pochoutkový salát",
    popis: "Tradiční lahůdkový salát z rostlinného salámu, hrášku a naší domácí sójové majonézy.",
    cena: "52",
    alergeny: "1, 1a, 6, 10",
  },
  {
    n: "138",
    nazev: "Vajíčkový bez vajec",
    popis: "Jemná pomazánka z bílého tofu s černou solí, díky které má chlebíček pravou vajíčkovou chuť.",
    cena: "52",
    alergeny: "1, 1a, 6, 10",
  },
  {
    n: "68",
    nazev: "Česnekový s mikrobylinami",
    popis: "Vyvážený krém z tofu a jemného česneku, zdobený sladkým hroznovým vínem a pikantními mikrobylinami.",
    cena: "52",
    alergeny: "1, 1a, 10",
  },
  {
    n: "36",
    nazev: "Cibulové sádlo",
    popis: "Veganská pomazánka z kokosového tuku, osmažené cibulky a jablek. Nakládané taky ve skle domů.",
    cena: "52",
    alergeny: "1, 1a",
  },
  {
    n: "104",
    nazev: "Červená řepa s křenem",
    popis: "Lehce pikantní pomazánka z červené řepy a křenu s trochou domácí sójové majonézy.",
    cena: "52",
    alergeny: "1, 1a, 6, 10, 11, 16",
  },
  {
    n: "47",
    nazev: "Klobásový od Klobaňa",
    popis: "S poctivě vyuzenou rostlinnou Klobaňou a nepálivým beraním rohem na jemném hořčičném krému.",
    cena: "52",
    alergeny: "1, 1a, 6, 10, 12",
  },
];

const dalsi = [
  { nazev: "Polévka dne — perská čočková s mátou", cena: "65" },
  { nazev: "Makové hnízdo (mák, povidla, oříšky, datle)", cena: "25" },
  { nazev: "Brownie", cena: "65" },
  { nazev: "Čoko-pralinka jahoda (bez cukru, z datlí)", cena: "10" },
  { nazev: "Mošt hruška z Kokořínska, 0,33 l", cena: "50" },
  { nazev: "Bio kombucha Voelkel, 0,33 l", cena: "60" },
];

export default function Page() {
  return (
    <main className="cs">
      <header className="cs-top">
        <a className="cs-mark" href="#" aria-label="Chlebíček store, domů">
          <span className="cs-mark-a">Chlebíček</span>
          <span className="cs-mark-b">store</span>
        </a>
        <span className="cs-place">Libeň · Praha 8</span>
      </header>

      <section className="cs-hero" aria-labelledby="cs-hero-h">
        <div className="cs-hero-copy">
          <p className="cs-eyebrow">Lahůdkářství, které je celé rostlinné</p>
          <h1 id="cs-hero-h">
            Obložený chlebíček,
            <br />
            <em>ale úplně bez masa.</em>
          </h1>
          <p className="cs-lede">
            Ta klasika z oslav a promocí, jak ji znáte — pochoutkový salát,
            vajíčko, cibulové sádlo. Jenom u nás je vajíčko z tofu a salám
            rostlinný. Ráno mažeme, přes den mizí. Otevřeno v pracovní dny
            7:30–14:00.
          </p>
          <div className="cs-hero-cta">
            <a className="cs-btn" href="tel:+420775513850">
              Objednat na 775 513 850
            </a>
            <a className="cs-btn cs-btn-ghost" href="#menu">
              Prohlédnout chlebíčky
            </a>
          </div>
          <p className="cs-flag" role="note">
            Vše veganské · Chlebíček za <strong>52 Kč</strong> · Rozvoz po Praze
          </p>
        </div>
        <figure className="cs-hero-fig">
          <img
            src="/hero.webp"
            alt="Řada čerstvě obložených chlebíčků na pultu lahůdkářství Chlebíček store"
            width={900}
            height={1100}
          />
        </figure>
      </section>

      <section className="cs-menu" id="menu" aria-labelledby="cs-menu-h">
        <div className="cs-menu-head">
          <h2 id="cs-menu-h">Denní pult</h2>
          <p>
            Každý chlebíček má na pultu svoje číslo — jako v pořádné pražské
            lahůdce. Řekněte ho u pultu nebo do telefonu.
          </p>
        </div>

        <ul className="cs-list">
          {chlebicky.map((ch) => (
            <li className="cs-item" key={ch.n}>
              <span className="cs-num" aria-hidden="true">
                {ch.n}
              </span>
              <div className="cs-item-body">
                <div className="cs-item-line">
                  <h3>{ch.nazev}</h3>
                  <span className="cs-dots" aria-hidden="true" />
                  <span className="cs-price">{ch.cena} Kč</span>
                </div>
                <p className="cs-desc">{ch.popis}</p>
                <p className="cs-alerg">
                  <span className="cs-veg">Veganské</span>
                  <span>Alergeny: {ch.alergeny}</span>
                </p>
              </div>
            </li>
          ))}
        </ul>

        <div className="cs-more">
          <h3>K tomu si přiberte</h3>
          <ul className="cs-more-list">
            {dalsi.map((d) => (
              <li key={d.nazev}>
                <span>{d.nazev}</span>
                <span className="cs-price cs-price-sm">{d.cena} Kč</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="cs-about" aria-labelledby="cs-about-h">
        <figure className="cs-about-fig">
          <img
            src="/section-1.webp"
            alt="Příprava rostlinných pomazánek v kuchyni Chlebíček store"
            width={900}
            height={700}
          />
        </figure>
        <div className="cs-about-copy">
          <p className="cs-eyebrow">O nás</p>
          <h2 id="cs-about-h">Děláme lahůdku, jak si ji pamatujeme</h2>
          <p>
            Chlebíček store je malé lahůdkářství na náměstí Dr. Václava Holého
            v Libni. Vzali jsme českou klasiku — obložené chlebíčky, saláty,
            makový dort — a udělali ji celou z rostlin, aniž bychom sáhli na
            chuť, na kterou jste zvyklí z rodinných oslav.
          </p>
          <p>
            Pomazánky mícháme každé ráno, dorty pečeme bez lepku, čokoládu
            děláme z datlí. Nic nestojí na pultu dlouho — a když dojde, dojde.
          </p>
          <div className="cs-facts">
            <div className="cs-fact">
              <span className="cs-fact-k">Kde nás najdete</span>
              <span className="cs-fact-v">
                nám. Dr. Václava Holého 1331/3
                <br />
                Praha 8 — Libeň
              </span>
            </div>
            <div className="cs-fact">
              <span className="cs-fact-k">Otevřeno</span>
              <span className="cs-fact-v">
                Po–Pá 7:30–14:00
                <br />
                So & Ne zavřeno
              </span>
            </div>
            <div className="cs-fact">
              <span className="cs-fact-k">Objednávky a catering</span>
              <span className="cs-fact-v">
                <a href="tel:+420775513850">775 513 850</a>
                <br />
                <a href="mailto:info@chlebicekstore.cz">
                  info@chlebicekstore.cz
                </a>
              </span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
