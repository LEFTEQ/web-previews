import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "MIZ Olomouc — voda, topení, plyn a servis od roku 1997",
  description:
    "MIZ Olomouc s.r.o. instaluje vodu, topení a plyn v rodinných i bytových domech, občanských a průmyslových stavbách. Projekt, realizace, zkoušky a revize — od roku 1997 v Olomouci.",
  openGraph: {
    title: "MIZ Olomouc — voda, topení, plyn a servis",
    description:
      "Instalace vody, topení a plynu od projektu po revize. 25 lidí s dlouholetou praxí, Olomouc, U panelárny 602/11.",
    type: "website",
    locale: "cs_CZ",
  },
};

const obory = [
  {
    kod: "H2O",
    nazev: "Zdravotechnika",
    popis:
      "Rozvody teplé i studené vody, kanalizace a odpady. Od stoupaček v bytovém domě po kompletní rozvody v novostavbě.",
  },
  {
    kod: "TOP",
    nazev: "Vytápění",
    popis:
      "Ústřední topení, podlahovka i klasické radiátory. Napojíme, vyvážíme, seřídíme — aby topilo tam, kde má.",
  },
  {
    kod: "CH4",
    nazev: "Plynoinstalace",
    popis:
      "Plynové rozvody, přípojky a připojení spotřebičů. Vše s tlakovou zkouškou a revizí, jak předpisy žádají.",
  },
  {
    kod: "TČ",
    nazev: "Tepelná čerpadla",
    popis:
      "Návrh a montáž tepelných čerpadel pro dům, který má topit levněji. Napojení na stávající soustavu i nový zdroj.",
  },
  {
    kod: "SRV",
    nazev: "Servis",
    popis:
      "Poruchy, netěsnosti, výměny. Přijedeme, najdeme příčinu a spravíme — bez zbytečného bourání navíc.",
  },
  {
    kod: "REV",
    nazev: "Měření a izolace",
    popis:
      "Zkoušky, revize a izolace potrubí. Papíry v pořádku, tepelné ztráty pod kontrolou.",
  },
];

const kroky = [
  {
    n: "01",
    t: "Projekt a nabídka",
    d: "Vyhotovíme projektovou dokumentaci a cenovou nabídku zdarma. Víte předem, co a za kolik.",
  },
  {
    n: "02",
    t: "Realizace",
    d: "Zakázku odvede zhruba 25 stálých lidí s praxí ve všech dnes používaných technologiích.",
  },
  {
    n: "03",
    t: "Zkoušky a revize",
    d: "Uzavřeme to tlakovými zkouškami a revizemi. Předáme v dohodnutém termínu a v maximální kvalitě.",
  },
];

export default function Page() {
  return (
    <main className="page">
      <header className="topbar">
        <a className="wordmark" href="#" aria-label="MIZ Olomouc — úvod">
          <span className="wordmark__m">MIZ</span>
          <span className="wordmark__place">Olomouc</span>
        </a>
        <nav className="nav" aria-label="Hlavní navigace">
          <a href="#sluzby">Služby</a>
          <a href="#onas">O nás</a>
          <a className="nav__tel" href="tel:+420604236536">
            604&nbsp;236&nbsp;536
          </a>
        </nav>
      </header>

      <section className="hero" aria-labelledby="hero-nadpis">
        <div className="hero__grid" aria-hidden="true">
          <span className="pipe pipe--v pipe--1" />
          <span className="pipe pipe--h pipe--2" />
          <span className="pipe pipe--v pipe--3" />
          <span className="joint joint--1" />
          <span className="joint joint--2" />
        </div>

        <div className="hero__inner">
          <p className="hero__eyebrow">Instalatéři v Olomouci od roku 1997</p>
          <h1 id="hero-nadpis" className="hero__title">
            <span className="line">VODA</span>
            <span className="line line--offset">TOPENÍ</span>
            <span className="line">PLYN</span>
          </h1>
          <p className="hero__lead">
            Rozvedeme, zatopíme a připojíme — v rodinných i bytových domech,
            v občanských stavbách i v průmyslu. Od projektu po revizi, ať to
            drží a těsní.
          </p>
          <div className="hero__cta">
            <a className="btn btn--primary" href="tel:+420604236536">
              Zavolat 604&nbsp;236&nbsp;536
            </a>
            <a className="btn btn--ghost" href="#sluzby">
              Co umíme
            </a>
          </div>
        </div>

        <dl className="hero__meta">
          <div>
            <dt>Působíme od</dt>
            <dd>1997</dd>
          </div>
          <div>
            <dt>Lidí v týmu</dt>
            <dd>~25</dd>
          </div>
          <div>
            <dt>Cenová nabídka</dt>
            <dd>zdarma</dd>
          </div>
        </dl>
      </section>

      <section className="sluzby" id="sluzby" aria-labelledby="sluzby-nadpis">
        <div className="section-head">
          <p className="eyebrow">Naše řemeslo</p>
          <h2 id="sluzby-nadpis">Šest oborů pod jednou střechou</h2>
          <p className="section-head__lead">
            Voda, topení, plyn a vše okolo. Nemusíte shánět tři firmy —
            zakázku vezmeme celou, od trubek po razítko na revizi.
          </p>
        </div>

        <ul className="cards">
          {obory.map((o) => (
            <li className="card" key={o.kod}>
              <span className="card__kod" aria-hidden="true">
                {o.kod}
              </span>
              <h3 className="card__nazev">{o.nazev}</h3>
              <p className="card__popis">{o.popis}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="onas" id="onas" aria-labelledby="onas-nadpis">
        <div className="onas__intro">
          <p className="eyebrow">O nás</p>
          <h2 id="onas-nadpis">
            Olomoucká firma, která práci předává hotovou
          </h2>
          <p>
            MIZ Olomouc s.r.o. dělá instalace vody, topení a plynu od roku
            1997 — v rodinných domech, bytovkách, občanských stavbách
            i v průmyslu. Pracujeme podle certifikátu kvality, s ohledem na
            životní prostředí a bezpečnost práce.
          </p>
          <p>
            Cíl je jednoduchý: předat zakázku v dohodnutém termínu a v takové
            kvalitě, abyste na nás nemuseli znovu volat. A když přece jen
            zavoláte, přijedeme na servis.
          </p>
        </div>

        <ol className="steps" aria-label="Jak probíhá zakázka">
          {kroky.map((k) => (
            <li className="step" key={k.n}>
              <span className="step__n" aria-hidden="true">
                {k.n}
              </span>
              <div>
                <h3 className="step__t">{k.t}</h3>
                <p className="step__d">{k.d}</p>
              </div>
            </li>
          ))}
        </ol>

        <div className="kontakt-karta">
          <h3 className="kontakt-karta__nadpis">Kde nás najdete</h3>
          <div className="kontakt-karta__radky">
            <p>
              <span className="label">Adresa</span>
              U panelárny 602/11, 779&nbsp;00 Olomouc
            </p>
            <p>
              <span className="label">Telefon</span>
              <a href="tel:+420604236536">604&nbsp;236&nbsp;536</a>,{" "}
              <a href="tel:+420585225050">585&nbsp;225&nbsp;050</a>
            </p>
            <p>
              <span className="label">E-mail</span>
              <a href="mailto:miz@miz-olomouc.cz">miz@miz-olomouc.cz</a>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
