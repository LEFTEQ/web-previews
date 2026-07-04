import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Účetnictví 2+1 — účetnictví a mzdy v Hradci Králové",
  description:
    "Vedeme účetnictví, daňovou evidenci a mzdy pro firmy i živnostníky v Hradci Králové a okolí. Uzávěrka, kterou máte pod kontrolou po celý rok.",
  openGraph: {
    title: "Účetnictví 2+1 — Hradec Králové",
    description:
      "Komplexní účetní služby, daňová přiznání a mzdy. U Svodnice, Hradec Králové – Kukleny.",
    type: "website",
    locale: "cs_CZ",
  },
};

const sluzby = [
  {
    kod: "UCT",
    nazev: "Vedení účetnictví",
    popis:
      "Kompletní podvojné účetnictví pro s.r.o. i akciovky. Účtujeme průběžně, ne až v březnu — každý měsíc víte, jak na tom firma je.",
    polozky: ["Zaúčtování dokladů", "DPH a kontrolní hlášení", "Roční účetní závěrka"],
  },
  {
    kod: "EVI",
    nazev: "Daňová evidence",
    popis:
      "Pro živnostníky a OSVČ, kteří chtějí mít papíry v pořádku a hlavu volnou. Vedeme příjmy, výdaje i evidenci majetku.",
    polozky: ["Peněžní deník", "Evidence pohledávek", "Přehledy pro OSSZ a ZP"],
  },
  {
    kod: "MZD",
    nazev: "Mzdy a personalistika",
    popis:
      "Výplaty, odvody a papírování kolem zaměstnanců za vás. Termíny hlídáme my, vy jen podepíšete.",
    polozky: ["Zpracování mezd", "Přihlášky a odhlášky", "Roční zúčtování daně"],
  },
  {
    kod: "DAP",
    nazev: "Daňová přiznání",
    popis:
      "Přiznání k dani z příjmů fyzických i právnických osob. Za rok 2025 už od 1 000 Kč — jasná cena, žádná překvapení.",
    polozky: ["Přiznání FO i PO", "Přehledy OSSZ a ZP", "Optimalizace daně"],
  },
];

export default function Page() {
  return (
    <main className="page">
      <header className="topbar">
        <a className="wordmark" href="#" aria-label="Účetnictví 2+1, domů">
          <span className="wordmark__name">Účetnictví</span>
          <span className="wordmark__sum" aria-hidden="true">
            2<span className="wordmark__plus">+</span>1
          </span>
        </a>
        <nav className="nav" aria-label="Hlavní navigace">
          <a href="#sluzby">Služby</a>
          <a href="#duvera">O nás</a>
          <a className="nav__cta" href="tel:+420736765503">736 765 503</a>
        </nav>
      </header>

      <section className="hero" aria-labelledby="hero-nadpis">
        <div className="hero__ledger">
          <p className="hero__eyebrow">Účetní kancelář · Hradec Králové – Kukleny</p>
          <h1 id="hero-nadpis" className="hero__title">
            Účetnictví, které sedí<span className="hero__cent"> — na haléř přesně.</span>
          </h1>
          <p className="hero__lead">
            Vedeme účetnictví, daňovou evidenci a mzdy pro firmy i živnostníky
            v Hradci Králové a okolí. Doklady od vás, klid pro vás.
          </p>

          <dl className="hero__balance" aria-label="Přehled">
            <div className="hero__row hero__row--head">
              <dt>Položka</dt>
              <dd>Částka</dd>
            </div>
            <div className="hero__row">
              <dt>Daňové přiznání k dani z příjmů 2025</dt>
              <dd>od 1 000 Kč</dd>
            </div>
            <div className="hero__row">
              <dt>Termíny a odvody hlídáme za vás</dt>
              <dd>v ceně</dd>
            </div>
            <div className="hero__row hero__row--total">
              <dt>Váš čas nad papíry</dt>
              <dd>0,00</dd>
            </div>
          </dl>

          <div className="hero__actions">
            <a className="btn btn--solid" href="tel:+420736765503">
              Zavolat: 736 765 503
            </a>
            <a className="btn btn--ghost" href="#sluzby">
              Co pro vás uděláme
            </a>
          </div>
        </div>

        <figure className="hero__figure">
          <img
            src="/hero.webp"
            alt="Účetní zpracovává doklady a uzávěrku v kanceláři Účetnictví 2+1"
            className="hero__img"
            width={880}
            height={1040}
          />
          <figcaption className="hero__addr">U Svodnice 814/45, Hradec Králové – Kukleny</figcaption>
        </figure>
      </section>

      <section className="sluzby" id="sluzby" aria-labelledby="sluzby-nadpis">
        <div className="sec-head">
          <p className="sec-head__eyebrow">Účtová osnova · čtyři účty, na kterých záleží</p>
          <h2 id="sluzby-nadpis">Kompletní účetní servis pod jednou střechou</h2>
        </div>

        <div className="sluzby__grid">
          {sluzby.map((s) => (
            <article className="karta" key={s.kod}>
              <span className="karta__kod" aria-hidden="true">
                {s.kod}
              </span>
              <h3 className="karta__nazev">{s.nazev}</h3>
              <p className="karta__popis">{s.popis}</p>
              <ul className="karta__list">
                {s.polozky.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="duvera" id="duvera" aria-labelledby="duvera-nadpis">
        <figure className="duvera__figure">
          <img
            src="/section-1.webp"
            alt="Pracoviště účetní kanceláře Účetnictví 2+1 v Hradci Králové"
            className="duvera__img"
            width={720}
            height={560}
          />
        </figure>

        <div className="duvera__text">
          <p className="sec-head__eyebrow">O nás · proč zrovna 2+1</p>
          <h2 id="duvera-nadpis">Malá kancelář, která vás zná jménem</h2>
          <p className="duvera__lead">
            Nejsme montovna dokladů. Jsme účetní kancelář v Kuklenách, kde
            k vaší firmě někdo skutečně přiřadí obličej. Zavoláte, ozve se
            člověk, který zná vaše čísla — ne pořadové číslo tiketu.
          </p>

          <ul className="duvera__body">
            <li>
              <strong>Účtujeme průběžně.</strong> Uzávěrka není maraton
              v posledním týdnu, ale výsledek celoroční práce.
            </li>
            <li>
              <strong>Termíny jsou naše starost.</strong> DPH, odvody, přiznání —
              hlídáme je za vás a včas připomeneme, co potřebujeme.
            </li>
            <li>
              <strong>Ceny bez hvězdiček.</strong> Domluvíme se předem, kolik co
              stojí. Daňové přiznání za rok 2025 už od 1 000 Kč.
            </li>
          </ul>

          <div className="duvera__kontakt">
            <img
              src="/section-2.webp"
              alt="Detail zpracování mezd a daňových dokladů"
              className="duvera__kontakt-img"
              width={320}
              height={220}
            />
            <dl className="kontakt">
              <div>
                <dt>Telefon</dt>
                <dd>
                  <a href="tel:+420736765503">736 765 503</a>
                </dd>
              </div>
              <div>
                <dt>E-mail</dt>
                <dd>
                  <a href="mailto:info@ucetnictvi21.cz">info@ucetnictvi21.cz</a>
                </dd>
              </div>
              <div>
                <dt>Kde nás najdete</dt>
                <dd>U Svodnice 814/45, Hradec Králové – Kukleny</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>
    </main>
  );
}
