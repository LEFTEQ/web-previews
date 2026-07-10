import type { CSSProperties } from "react";

const sluzby = [
  {
    kod: "RD",
    nazev: "Zděné rodinné domy na klíč",
    text: "Menší rodinná stavba i rozlehlejší objekt. Stavíme kvalitně a zděně — tak, aby dům vydržel v řádu desítek let, a s materiály, které spolu s vámi vybereme.",
  },
  {
    kod: "RK",
    nazev: "Rekonstrukce bytů a prostor",
    text: "Bytové i nebytové jednotky. Poradíme s materiály, vyjdeme vstříc po designové i konstrukční stránce a rekonstrukci odřídíme tak, aby vás co nejméně zatížila.",
  },
  {
    kod: "DM",
    nazev: "Demolice a bourací práce",
    text: "Od částečných úprav až po kompletní bourání objektu podle vhodných technologických postupů. Včetně odvozu a likvidace odpadu.",
  },
  {
    kod: "ZT",
    nazev: "Kontaktní zateplení fasád",
    text: "Dodáme jen požadovanou část, nebo kompletní zateplení včetně oprav a fasádních nátěrů. Nejdřív schůzka, pak kalkulace na míru — a nižší účty za energie.",
  },
  {
    kod: "OM",
    nazev: "Jádrové a sádrové omítky",
    text: "Sádrová omítka šetří čas — jedna vrstva místo několika kroků. Podklad vždy zkontrolujeme (savý / nesavý) a podle toho volíme penetraci nebo kontaktní nátěr.",
  },
  {
    kod: "SK",
    nazev: "Sádrokartony, zednické a obklady",
    text: "Sádrokartonářské konstrukce, zednické a obkladačské práce. Součást kompletních rekonstrukcí i samostatná dodávka podle rozsahu, který potřebujete.",
  },
];

const projekty = [
  {
    misto: "Green Village Konopiště",
    typ: "Terénní a betonové práce",
    text: "Realizace opěrných zdí, plotů a kójí technického zařízení.",
  },
  {
    misto: "Kostomlaty pod Řípem",
    typ: "Demolice a novostavba",
    text: "Demolice původního objektu a výstavba rodinného domu na klíč.",
  },
  {
    misto: "Zlončice",
    typ: "Rodinný dům na klíč",
    text: "Realizace moderního rodinného domu na klíč od základů po předání.",
  },
];

export default function Page() {
  return (
    <main className="vs">
      <header className="vs-top">
        <a className="vs-wm" href="#uvod" aria-label="VEED STAV, domů">
          <span className="vs-wm-mark" aria-hidden="true">▚</span>
          <span className="vs-wm-name">
            VEED<span className="vs-wm-thin">STAV</span>
          </span>
        </a>
        <nav className="vs-nav" aria-label="Hlavní">
          <a href="#sluzby">Služby</a>
          <a href="#projekty">Projekty</a>
          <a className="vs-nav-tel" href="tel:+420777061511">+420 777 061 511</a>
        </nav>
      </header>

      <section className="vs-hero" id="uvod">
        <img
          className="vs-hero-img"
          src="/hero.webp"
          alt="Rozestavěný zděný rodinný dům od VEED STAV s bedněním a betonovou konstrukcí"
        />
        <div className="vs-hero-grid" aria-hidden="true" />
        <div className="vs-hero-inner">
          <p className="vs-eyebrow">Stavební společnost · Praha–Žižkov · od roku 2019</p>
          <h1 className="vs-hero-h">
            Postavíme dům,<br />
            který <span className="vs-hl">přežije</span> generace.
          </h1>
          <p className="vs-hero-lead">
            Zděné rodinné domy na klíč, rekonstrukce, zateplení i omítky. Beton
            přizpůsobíme jakékoli formě, napětí a prostředí — a stavíme tak, aby
            dům vydržel v řádu desítek let.
          </p>
          <div className="vs-hero-cta">
            <a className="vs-btn" href="tel:+420777061511">Zavolat na stavbu</a>
            <a className="vs-btn vs-btn-ghost" href="#sluzby">Co stavíme</a>
          </div>
        </div>
        <dl className="vs-stats">
          <div>
            <dt>Stovky</dt>
            <dd>dokončených projektů</dd>
          </div>
          <div>
            <dt>2019</dt>
            <dd>na trhu od roku</dd>
          </div>
          <div>
            <dt>Na klíč</dt>
            <dd>od základů po předání</dd>
          </div>
        </dl>
      </section>

      <section className="vs-sluzby" id="sluzby">
        <div className="vs-sec-head">
          <p className="vs-eyebrow vs-eyebrow-dark">Co umíme</p>
          <h2 className="vs-sec-h">
            Sedm řemesel, jeden dodavatel — od výkopu po fasádní nátěr.
          </h2>
          <p className="vs-sec-lead">
            Kompletní dodávka i jednotlivá etapa. Ani velké projekty pro nás
            nejsou překážkou — vždycky ale začínáme schůzkou a kalkulací na míru.
          </p>
        </div>
        <ul className="vs-cards">
          {sluzby.map((s) => (
            <li className="vs-card" key={s.kod}>
              <span className="vs-card-kod" aria-hidden="true">
                {s.kod}
              </span>
              <h3 className="vs-card-h">{s.nazev}</h3>
              <p className="vs-card-t">{s.text}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="vs-onas" id="projekty">
        <div className="vs-onas-top">
          <figure className="vs-onas-fig">
            <img
              src="/section-1.webp"
              alt="Realizace moderního rodinného domu na klíč od VEED STAV"
            />
          </figure>
          <div className="vs-onas-copy">
            <p className="vs-eyebrow vs-eyebrow-dark">O nás</p>
            <h2 className="vs-sec-h">
              „Ani velké projekty pro nás nejsou překážkou."
            </h2>
            <p className="vs-sec-lead">
              VEED STAV působí od roku 2019. Za tu dobu máme za sebou stovky
              úspěšně realizovaných projektů a spokojených zákazníků. Primárně
              stavíme kvalitní zděné domy, které vydrží — a k tomu zvládneme
              rekonstrukce, sádrokartony, omítky, zateplení i demolice.
            </p>
            <p className="vs-adresa">
              Bořivojova 878/35, Žižkov · Praha 3 · 130 00 Praha
            </p>
          </div>
        </div>

        <div className="vs-proj-head">
          <h3 className="vs-proj-title">Poslední projekty</h3>
          <img
            className="vs-proj-img"
            src="/section-2.webp"
            alt="Opěrné zdi a betonové konstrukce realizované firmou VEED STAV"
          />
        </div>
        <ol className="vs-proj">
          {projekty.map((p, i) => (
            <li className="vs-proj-item" key={p.misto}>
              <span className="vs-proj-num" aria-hidden="true">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <p className="vs-proj-typ">{p.typ}</p>
                <h4 className="vs-proj-misto">{p.misto}</h4>
                <p className="vs-proj-text">{p.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>
    </main>
  );
}
