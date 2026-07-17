const steps = [
  {
    n: "01",
    title: "Zaměření a rozpočet",
    body:
      "Přijedeme, změříme plochu i detaily kolem oken a soklu a napíšeme rozpočet. Zdarma, nezávazně, položku po položce — ať dopředu víte, za co platíte.",
  },
  {
    n: "02",
    title: "Zateplení",
    body:
      "Na očištěný a vyrovnaný podklad lepíme a hmoždinkujeme izolační desky — EPS nebo minerální vatu podle toho, co dům potřebuje.",
  },
  {
    n: "03",
    title: "Armovací vrstva s perlinkou",
    body:
      "Do stěrky vtláčíme skleněnou síťovinu — perlinku. Ta drží celou fasádu pohromadě a nepustí praskliny. Tady se rozhoduje, jestli fasáda vydrží roky, nebo se za dvě zimy rozjede.",
  },
  {
    n: "04",
    title: "Penetrace podkladu",
    body:
      "Vyzrálou armovací vrstvu napenetrujeme, aby na ní omítka pevně držela a barva byla po celé ploše rovnoměrná.",
  },
  {
    n: "05",
    title: "Tenkovrstvá omítka",
    body:
      "Silikonová nebo silikátová omítka, natažená a zatočená hladítkem. Poslední tah, který na domě uvidíte roky — proto ho neuspěcháme.",
  },
];

export default function Page() {
  return (
    <main className="pm">
      <header className="pm-head">
        <a className="pm-mark" href="#top" aria-label="PHELI-mont, fasády Liberec">
          <span className="pm-mark__tile" aria-hidden="true" />
          <span className="pm-mark__name">
            <b>PHELI</b>‑mont
          </span>
          <span className="pm-mark__sub">Fasády · Liberec</span>
        </a>
        <a className="pm-head__tel" href="tel:+420720138368">
          +420 720 138 368
        </a>
      </header>

      <section className="pm-hero" id="top">
        <div className="pm-hero__mesh" aria-hidden="true" />
        <div className="pm-hero__band" aria-hidden="true" />
        <div className="pm-hero__inner">
          <p className="pm-eyebrow pm-eyebrow--light">
            <span className="pm-eyebrow__tick" aria-hidden="true" />
            01 — Zateplené fasády, Liberec a okolí
          </p>
          <h1 className="pm-hero__title">
            <span className="pm-hero__line">KAŽDÁ</span>
            <span className="pm-hero__line">FASÁDA</span>
            <span className="pm-hero__line">STOJÍ NA</span>
            <span className="pm-hero__line pm-hero__line--y">PERLINCE</span>
          </h1>
          <p className="pm-hero__lede">
            Kompletní tenkovrstvé fasádní systémy — od zaměření a rozpočtu zdarma
            po poslední tah hladítkem. Zpevníme, zateplíme a uděláme fasádu, která
            drží roky, ne dvě zimy.
          </p>
          <div className="pm-hero__cta">
            <a className="pm-btn pm-btn--solid" href="tel:+420720138368">
              Zavolat 720 138 368
            </a>
            <a className="pm-btn pm-btn--ghost" href="mailto:info@pheli-mont.cz">
              Napsat e-mail
            </a>
          </div>
        </div>
      </section>

      <div className="pm-rule" aria-hidden="true" />

      <section className="pm-panel pm-panel--light" aria-labelledby="postup">
        <p className="pm-eyebrow">02 — Postup prací</p>
        <h2 className="pm-h2" id="postup">
          Pět vrstev.<br />Žádnou nevynecháme.
        </h2>
        <p className="pm-panel__lede">
          Fasáda není jen omítka — je to systém, kde na sebe vrstvy musí sednout
          přesně v tomto pořadí. Takhle u nás vzniká.
        </p>

        <ol className="pm-steps">
          {steps.map((s) => (
            <li className="pm-step" key={s.n}>
              <span className="pm-step__num" aria-hidden="true">
                {s.n}
              </span>
              <div className="pm-step__body">
                <h3 className="pm-step__title">{s.title}</h3>
                <p className="pm-step__text">{s.body}</p>
              </div>
            </li>
          ))}
        </ol>

        <p className="pm-offer">
          <span className="pm-offer__mark" aria-hidden="true" />
          <span className="pm-offer__text">
            <b>Zakázka nad 500 000 Kč bez DPH?</b> Sleva 10 % a lešení ke každé
            fasádě zdarma — ušetříte za jeho pronájem.
          </span>
        </p>
      </section>

      <div className="pm-rule" aria-hidden="true" />

      <section className="pm-panel pm-panel--dark" aria-labelledby="kdo">
        <p className="pm-eyebrow pm-eyebrow--light">03 — Kdo fasádu dělá</p>
        <h2 className="pm-h2 pm-h2--light" id="kdo">
          Za každou fasádou<br />stojí konkrétní člověk.
        </h2>
        <div className="pm-trust">
          <div className="pm-trust__lead">
            <p>
              PHELI-mont s.r.o. je liberecká firma zapsaná u Krajského soudu
              v Ústí nad Labem. Fasády neděláme přes prostředníky — na stavbě
              potkáte jednatele Petra Paprskáře a lidi, kteří práci skutečně
              odvádějí. S výběrem materiálů a barevnosti poradíme, ať sedí
              k domu i k rozpočtu.
            </p>
            <p className="pm-trust__sig">
              Petr Paprskář — <span>jednatel společnosti</span>
            </p>
          </div>

          <dl className="pm-facts">
            <div className="pm-fact">
              <dt>Kde působíme</dt>
              <dd>Liberec a okolí — novostavby, rekonstrukce i domy pro SVJ.</dd>
            </div>
            <div className="pm-fact">
              <dt>Sídlo</dt>
              <dd>Mimoňská 58, Karlov pod Ještědem, 460 01 Liberec</dd>
            </div>
            <div className="pm-fact">
              <dt>IČ / DIČ</dt>
              <dd>07284691 · CZ07284691</dd>
            </div>
            <div className="pm-fact">
              <dt>Spojení</dt>
              <dd>
                <a href="tel:+420720138368">+420 720 138 368</a>
                <br />
                <a href="mailto:info@pheli-mont.cz">info@pheli-mont.cz</a>
              </dd>
            </div>
          </dl>
        </div>
      </section>
    </main>
  );
}
