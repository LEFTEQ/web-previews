import type { CSSProperties } from "react";

export const metadata = {
  title: "EDIKT a. s. — stavíme mosty, dráhy i domy | České Budějovice",
  description:
    "Ryze česká stavební společnost z Českých Budějovic. Kolejové dráhy, mosty, pozemní stavby a půjčovna těžké mechanizace po celé republice.",
};

type Obor = {
  cislo: string;
  nazev: string;
  popis: string;
  detail: string;
};

const obory: Obor[] = [
  {
    cislo: "01",
    nazev: "Dopravní stavby",
    popis:
      "Kolejové dráhy v Česku i u sousedů v Německu. V technologii kladení a rekonstrukce tratí patříme k nejvyspělejším v republice.",
    detail: "Tratě · výhybky · sanace spodku",
  },
  {
    cislo: "02",
    nazev: "Mosty a objekty",
    popis:
      "Silniční i železniční mosty z oceli i železobetonu. Vysouvané i na pevné skruži, propustky, opěrné a zárubní zdi.",
    detail: "Ocel · beton · sanace",
  },
  {
    cislo: "03",
    nazev: "Pozemní stavby",
    popis:
      "Bytová, občanská i průmyslová výstavba po celé ČR. Velkou část tvoří rekonstrukce budov včetně historických objektů.",
    detail: "Novostavby · rekonstrukce · památky",
  },
  {
    cislo: "04",
    nazev: "Doprava a mechanizace",
    popis:
      "Autopark různé nosnosti, zemní stroje a speciální vozidla pro stavbu a údržbu železnic. Techniku nabízíme i k pronájmu.",
    detail: "Autopark · zemní stroje · pronájem",
  },
];

type Reference = {
  nazev: string;
  misto: string;
  typ: string;
};

const reference: Reference[] = [
  {
    nazev: "Horkovodní trasa DN80/160 pro areál VŠTE",
    misto: "České Budějovice",
    typ: "Inženýrské sítě",
  },
  {
    nazev: "Tělocvična u II. základní školy",
    misto: "Veselí nad Lužnicí",
    typ: "Pozemní stavba",
  },
  {
    nazev: "Mateřská škola",
    misto: "Praha–Dubeč",
    typ: "Novostavba",
  },
  {
    nazev: "Snížení energetické náročnosti domova seniorů",
    misto: "Prachatice, Bavorská 936",
    typ: "Rekonstrukce",
  },
];

export default function Page() {
  return (
    <main className="page">
      <header className="topbar">
        <a className="wordmark" href="#" aria-label="EDIKT a. s. — domů">
          <span className="wordmark__glyph" aria-hidden="true" />
          <span className="wordmark__text">
            EDIKT<span className="wordmark__as">a.&#8203;s.</span>
          </span>
        </a>
        <nav className="topnav" aria-label="Hlavní">
          <a href="#obory">Co stavíme</a>
          <a href="#reference">Reference</a>
          <a href="#duvera">O nás</a>
        </nav>
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero__track" aria-hidden="true">
          <span />
          <span />
          <span />
          <span />
        </div>

        <div className="hero__inner">
          <p className="hero__eyebrow">
            <span className="tick" aria-hidden="true" />
            České Budějovice · ryze český kapitál
          </p>

          <h1 id="hero-title" className="hero__title">
            <span className="line">Stavíme</span>
            <span className="line line--rail">
              dráhy<span className="amp">, </span>mosty
            </span>
            <span className="line line--muted">i&nbsp;domy.</span>
          </h1>

          <p className="hero__lead">
            Kolej za kolejí, pole za polem. Od kolejových tratí přes železobetonové
            mosty až po mateřské školy — jedna jihočeská firma, čtyři obory,
            vlastní technika.
          </p>

          <div className="hero__actions">
            <a className="btn btn--solid" href="#obory">
              Prohlédnout obory
            </a>
            <a className="btn btn--ghost" href="tel:+420387000000">
              Zavolat na stavbu
            </a>
          </div>
        </div>

        <aside className="hero__ledger" aria-label="Rozsah činnosti">
          <dl>
            <div>
              <dt>Působnost</dt>
              <dd>celá&nbsp;ČR + Německo</dd>
            </div>
            <div>
              <dt>Kapitál</dt>
              <dd>100&nbsp;% český</dd>
            </div>
            <div>
              <dt>Obory</dt>
              <dd>dráhy · mosty · pozemní</dd>
            </div>
          </dl>
        </aside>
      </section>

      <section id="obory" className="obory" aria-labelledby="obory-title">
        <div className="section-head">
          <p className="section-head__eyebrow">Čtyři obory pod jednou střechou</p>
          <h2 id="obory-title" className="section-head__title">
            Co pro vás postavíme
          </h2>
        </div>

        <ol className="obory__list">
          {obory.map((o) => (
            <li key={o.cislo} className="obor">
              <span className="obor__num" aria-hidden="true">
                {o.cislo}
              </span>
              <div className="obor__body">
                <h3 className="obor__name">{o.nazev}</h3>
                <p className="obor__desc">{o.popis}</p>
                <p className="obor__tags">{o.detail}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section id="reference" className="duvera" aria-labelledby="duvera-title">
        <div className="duvera__intro" id="duvera">
          <p className="section-head__eyebrow">Postaveno a předáno</p>
          <h2 id="duvera-title" className="section-head__title">
            Stavby, které stojí a slouží
          </h2>
          <p className="duvera__text">
            Nejsme jméno na billboardu. Za EDIKTEM jsou konkrétní tratě, mosty a
            budovy po celé republice — od horkovodu pro vysokou školu v Českých
            Budějovicích po školy, které otevřely s dvouměsíčním předstihem.
          </p>
          <p className="duvera__text">
            Máte projekt v Jihočeském kraji nebo na trati k německé hranici?
            Ozvěte se a domluvíme prohlídku.
          </p>
        </div>

        <ul className="refs">
          {reference.map((r, i) => (
            <li
              key={r.nazev}
              className="ref"
              style={{ "--i": i } as CSSProperties}
            >
              <span className="ref__typ">{r.typ}</span>
              <span className="ref__nazev">{r.nazev}</span>
              <span className="ref__misto">{r.misto}</span>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
