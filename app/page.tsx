import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "DERATOR Plzeň — deratizace se 100% zárukou na vyhubení",
  description:
    "Deratizace, dezinsekce a dezinfekce v Plzni a okolí. Zásah do 2 hodin, 100% záruka na vyhubení, doprava zdarma. Certifikace CEPA EN 16636.",
};

const zasahy = [
  {
    id: "01",
    nazev: "Hlodavci",
    latin: "Rattus · Mus",
    popis:
      "Potkani a myši v domě, sklepě nebo skladu. Najdeme, kudy se dostávají dovnitř, a vstupní cesty uzavřeme — ne jen položíme nástrahu.",
    detail: "Preventivní i jednorázová ochrana",
  },
  {
    id: "02",
    nazev: "Štěnice domácí",
    latin: "Cimex lectularius",
    popis:
      "Rychlé, diskrétní a bezpečné hubení štěnic se 100% zárukou. Zasahujeme i tam, kde jiní řekli, že to nejde.",
    detail: "Zásah do 2 hodin",
  },
  {
    id: "03",
    nazev: "Vosy a sršni",
    latin: "Vespula · Vespa",
    popis:
      "Odstranění vosích a sršních hnízd až do výšky 30 metrů. Bezpečně, s ochranou okolí a s dopravou zdarma.",
    detail: "Práce ve výškách do 30 m",
  },
  {
    id: "04",
    nazev: "Lezoucí a létající hmyz",
    latin: "Blattella · Pulex",
    popis:
      "Švábi, rusi, blechy, mravenci, mouchy i pavouci. Zbavíme vás jich rychle a bez zápachu — bezchlorové přípravky.",
    detail: "Domácnosti i provozy",
  },
  {
    id: "05",
    nazev: "Skladištní škůdci",
    latin: "Fumigace PH₃ / HCN",
    popis:
      "Fumigace potravinářských a zemědělských provozů fosforovodíkem a kyanovodíkem. Odborně, dle norem a s protokolem.",
    detail: "Potravinářství podle IFS, BRC, HACCP",
  },
];

const duvody = [
  {
    cislo: "2 h",
    popis: "Do dvou hodin jsme u vás na místě v Plzni a okolí.",
  },
  {
    cislo: "100 %",
    popis: "Písemná záruka na vyhubení. Když se škůdce vrátí, vrátíme se i my.",
  },
  {
    cislo: "0 Kč",
    popis: "Doprava k zásahu zdarma — cenu neženeme kilometry.",
  },
];

export default function Page() {
  return (
    <main className="page">
      <header className="topbar">
        <a className="wordmark" href="#" aria-label="DERATOR, deratizace Plzeň">
          <span className="wordmark__mark" aria-hidden="true">
            <span className="wordmark__paw">▪▪</span>
          </span>
          <span className="wordmark__text">
            DERATOR<span className="wordmark__dot">.</span>
            <span className="wordmark__loc">Plzeň</span>
          </span>
        </a>
        <a className="topbar__phone" href="tel:+420602320202">
          <span className="topbar__phoneLabel">Zasahujeme do 2 hodin</span>
          <span className="topbar__phoneNum">602&nbsp;320&nbsp;202</span>
        </a>
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero__media">
          <img
            src="/hero.webp"
            alt="Technik firmy DERATOR při deratizačním zásahu v Plzni"
            className="hero__img"
            width={1600}
            height={1200}
          />
        </div>
        <div className="hero__panel">
          <p className="hero__eyebrow">
            <span className="hero__eyebrowDot" aria-hidden="true" />
            Deratizace · dezinsekce · dezinfekce — Plzeň
          </p>
          <h1 id="hero-title" className="hero__title">
            Škůdce dostaneme ven.
            <span className="hero__titleAccent">A dovnitř už ho nepustíme.</span>
          </h1>
          <p className="hero__lede">
            Potkani ve sklepě, štěnice v ložnici, vosí hnízdo pod
            střechou. Přijedeme do dvou hodin, zasáhneme bezpečně a dáme
            vám <strong>písemnou 100% záruku na vyhubení</strong>.
          </p>
          <div className="hero__cta">
            <a className="btn btn--primary" href="tel:+420602320202">
              Zavolat 602&nbsp;320&nbsp;202
            </a>
            <a className="btn btn--ghost" href="#zasahy">
              Na co jsme odborníci
            </a>
          </div>
          <ul className="hero__facts">
            <li>Doprava zdarma</li>
            <li>Certifikát CEPA EN 16636</li>
            <li>Bezchlorové přípravky</li>
          </ul>
        </div>
      </section>

      <section className="zasahy" id="zasahy" aria-labelledby="zasahy-title">
        <div className="section-head">
          <p className="section-head__eyebrow">Katalog škůdců</p>
          <h2 id="zasahy-title" className="section-head__title">
            Řekněte nám, co se u vás hýbe.
          </h2>
          <p className="section-head__note">
            Každý druh má jiný úkryt, jinou nástrahu a jinou cestu ven.
            Vybíráme metodu podle škůdce, ne podle ceníku.
          </p>
        </div>

        <ul className="catalog">
          {zasahy.map((z) => (
            <li className="catalog__row" key={z.id}>
              <span className="catalog__id" aria-hidden="true">
                {z.id}
              </span>
              <div className="catalog__head">
                <h3 className="catalog__name">{z.nazev}</h3>
                <span className="catalog__latin">{z.latin}</span>
              </div>
              <p className="catalog__desc">{z.popis}</p>
              <span className="catalog__tag">{z.detail}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="duvera" aria-labelledby="duvera-title">
        <div className="duvera__media">
          <img
            src="/section-2.webp"
            alt="Ošetření potravinářského provozu firmou DERATOR podle norem HACCP"
            className="duvera__img"
            width={1400}
            height={1000}
          />
        </div>
        <div className="duvera__body">
          <p className="section-head__eyebrow">Proč lidé v Plzni volají nám</p>
          <h2 id="duvera-title" className="section-head__title">
            Pracujeme podle norem, které si jinak žádá jen potravinářství.
          </h2>
          <p className="duvera__text">
            Systémovou deratizaci vedeme dle IFS, BRC, FSSC&nbsp;22000
            a HACCP — se záznamy, protokoly a plánem prevence. Stejnou
            pečlivost dostane i váš byt nebo dům. Základnu máme
            v&nbsp;Křimicích: <strong>Chebská 502/27, 322&nbsp;00
            Plzeň</strong>.
          </p>

          <ul className="metrics">
            {duvody.map((d) => (
              <li className="metrics__item" key={d.cislo}>
                <span className="metrics__num">{d.cislo}</span>
                <span className="metrics__label">{d.popis}</span>
              </li>
            ))}
          </ul>

          <p className="duvera__cert">
            Držitelé evropského certifikátu CEPA EN 16636 — Služby
            poskytované v rámci ochrany proti škůdcům.
          </p>
        </div>
      </section>
    </main>
  );
}
