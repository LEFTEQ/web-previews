import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hav-Bau s.r.o. — sanace vlhkého zdiva, České Budějovice",
  description:
    "Máte vlhké zdi? Podřezáváme zdivo systémem BAUMANN, řežeme betony, izolujeme sklepy. Přes 22 let zkušeností a 3000 objektů po celé ČR. Poradenská kancelář v Branišově u Českých Budějovic.",
  openGraph: {
    title: "Hav-Bau s.r.o. — sanace vlhkého zdiva",
    description:
      "Odstraníme vlhkost ze zdiva natrvalo. Podřezání systémem BAUMANN, řezání konstrukcí, drenáže. 22 let praxe, České Budějovice.",
    type: "website",
    locale: "cs_CZ",
    images: [{ url: "/hero.webp" }],
  },
};

const SLUZBY = [
  {
    kod: "01",
    nazev: "Vlhké zdivo",
    popis:
      "Diagnostika, měření vlhkosti a návrh řešení. Řekneme vám, odkud voda přichází a jak ji zastavit.",
    body: ["Diagnostika a měření", "Návrh řešení na míru", "Technologie odstranění vlhkosti"],
  },
  {
    kod: "02",
    nazev: "Řezání konstrukcí",
    popis:
      "Dělíme beton i železobeton, vrtáme stavební konstrukce a podřezáváme i kamenné zdivo.",
    body: ["Dělení betonů a železobetonů", "Vrtání konstrukcí", "Podřezávání kamenného zdiva"],
  },
  {
    kod: "03",
    nazev: "Zemní práce",
    popis:
      "Odkopeme, zaizolujeme a odvodníme spodní stavbu tak, aby k základům nezatékalo.",
    body: ["Izolace suterénního zdiva", "Drenáže a odvodnění", "Zateplení spodní stavby"],
  },
  {
    kod: "04",
    nazev: "Sanace památek",
    popis:
      "Šetrné vysušení historických objektů, kde nelze zvednout základy ani měnit vzhled fasády.",
    body: ["Citlivé postupy", "Kamenné a smíšené zdivo", "22 let zkušeností"],
  },
  {
    kod: "05",
    nazev: "Poradenství",
    popis:
      "Znalecké a odborné posudky, stavebně technické průzkumy a konzultace přímo na objektu.",
    body: ["Znalecké posudky", "Stavebně technické průzkumy", "Konzultace na objektech"],
  },
];

export default function Page() {
  return (
    <main className="page">
      <header className="topbar">
        <a className="wordmark" href="#" aria-label="Hav-Bau, sanace vlhkého zdiva">
          <span className="wordmark__hav">HAV</span>
          <span className="wordmark__dash" aria-hidden="true">—</span>
          <span className="wordmark__bau">BAU</span>
        </a>
        <nav className="topnav" aria-label="Hlavní">
          <a href="#sluzby">Služby</a>
          <a href="#duvera">Reference</a>
          <a className="topnav__cta" href="tel:+420777602307">777&nbsp;602&nbsp;307</a>
        </nav>
      </header>

      <section className="hero" aria-labelledby="hero-nadpis">
        <div className="hero__media">
          <img
            src="/hero.webp"
            alt="Podřezané zdivo staršího domu se založenou izolační vrstvou proti vzlínající vlhkosti"
            className="hero__img"
          />
          <div className="hero__waterline" aria-hidden="true">
            <span className="hero__waterline-label">hranice vlhkosti</span>
          </div>
        </div>

        <div className="hero__panel">
          <p className="hero__eyebrow">Sanace vlhkého zdiva · České Budějovice</p>
          <h1 id="hero-nadpis" className="hero__nadpis">
            Máte <span className="hero__mokro">vlhké</span> zdi?
            <br />
            Uřízneme vodě cestu nahoru.
          </h1>
          <p className="hero__lead">
            Podřežeme zdivo systémem BAUMANN a založíme novou izolaci — vodorovně,
            svisle a staticky bezpečně. Vlhkost přestane vzlínat a zdi konečně vyschnou.
          </p>
          <div className="hero__akce">
            <a className="btn btn--primar" href="tel:+420777602307">Zavolat na 777&nbsp;602&nbsp;307</a>
            <a className="btn btn--sekundar" href="#sluzby">Prohlédnout postupy</a>
          </div>
          <dl className="hero__cisla">
            <div>
              <dt>let na stavbách</dt>
              <dd>22</dd>
            </div>
            <div>
              <dt>objektů v ČR</dt>
              <dd>3&nbsp;000+</dd>
            </div>
            <div>
              <dt>směry podřezání</dt>
              <dd>2</dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="sluzby" id="sluzby" aria-labelledby="sluzby-nadpis">
        <div className="sekce-hlava">
          <p className="sekce-znacka">Co pro váš dům uděláme</p>
          <h2 id="sluzby-nadpis" className="sekce-nadpis">
            Od změření vlhkosti až po suchý sklep
          </h2>
          <p className="sekce-uvod">
            Postupujeme odshora: nejdřív zjistíme, kudy voda putuje, pak jí
            fyzicky přerušíme cestu a nakonec odvedeme vodu od základů pryč.
          </p>
        </div>

        <ol className="sluzby-seznam">
          {SLUZBY.map((s) => (
            <li className="sluzba" key={s.kod}>
              <span className="sluzba__kod" aria-hidden="true">{s.kod}</span>
              <div className="sluzba__telo">
                <h3 className="sluzba__nazev">{s.nazev}</h3>
                <p className="sluzba__popis">{s.popis}</p>
                <ul className="sluzba__body">
                  {s.body.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>

        <figure className="sluzby-obraz">
          <img
            src="/section-1.webp"
            alt="Diamantové řezání betonové konstrukce při dělení zdiva na stavbě"
          />
          <figcaption>
            Diamantové řezání betonu — čistý řez i tam, kde se běžně bourá.
          </figcaption>
        </figure>
      </section>

      <section className="duvera" id="duvera" aria-labelledby="duvera-nadpis">
        <figure className="duvera-obraz">
          <img
            src="/section-2.webp"
            alt="Odkopaná spodní stavba domu s novou hydroizolací a drenáží proti vlhkosti"
          />
        </figure>

        <div className="duvera-text">
          <p className="sekce-znacka">Proč Hav-Bau</p>
          <h2 id="duvera-nadpis" className="sekce-nadpis">
            Přes tři tisíce vysušených domů — a víme, kde jsou
          </h2>
          <p className="duvera-perex">
            Vlhké zdivo řešíme od roku, kdy se ještě podřezávalo ručně. Za tu dobu
            jsme prošli přes 3&nbsp;000 objektů po celé republice — od panelových
            sklepů po chráněné kamenné statky. Ke každému domu přijedeme, změříme
            vlhkost a řekneme rovnou, jestli stačí podřezat, nebo je potřeba i drenáž.
          </p>

          <ul className="duvera-fakta">
            <li>
              <strong>Systém BAUMANN</strong>
              <span>Podřezání vodorovné i svislé, staticky zajištěné.</span>
            </li>
            <li>
              <strong>Znalecké posudky</strong>
              <span>Odborné posudky a stavebně technické průzkumy pod jednou střechou.</span>
            </li>
            <li>
              <strong>Poradna v Branišově</strong>
              <span>Branišov 95, kousek za Českými Budějovicemi — přijeďte se poradit.</span>
            </li>
          </ul>

          <a className="btn btn--primar" href="tel:+420777602307">
            Domluvit prohlídku zdarma
          </a>
        </div>
      </section>
    </main>
  );
}
