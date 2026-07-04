import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Úklid Katy — mytí oken v Brně | čisté sklo bez šmouh",
  description:
    "Myjeme okna, výlohy a žaluzie v Brně a okolí. Poctivě, s vodou z osmózy a bez šmouh — od bytových oken po velké prosklené výlohy. Ozvěte se Kateřině.",
  openGraph: {
    title: "Úklid Katy — mytí oken v Brně",
    description:
      "Čisté sklo, do kterého je vidět. Mytí oken, výloh a žaluzií v Brně a okolí — poctivě a bez šmouh.",
    locale: "cs_CZ",
    type: "website",
  },
};

const sluzby = [
  {
    kod: "BYT",
    nazev: "Okna v bytě a domě",
    popis:
      "Vnitřní i vnější strana, rámy, parapety i kličky. Nábytek u okna odsuneme a zase vrátíme — vy jen otevřete a uvaříte kávu.",
  },
  {
    kod: "VÝLOHA",
    nazev: "Výlohy a prodejny",
    popis:
      "Velké prosklené plochy do ulice. Myjeme brzy ráno nebo po zavíračce, aby vám ve výloze nikdy neschla šmouha přes den.",
  },
  {
    kod: "ŽALUZIE",
    nazev: "Žaluzie a rolety",
    popis:
      "Lamela po lamele, včetně meziokenních žaluzií. Sundáme prach, který se do okna vrací nejrychleji.",
  },
  {
    kod: "VÝŠKA",
    nazev: "Okna ve výšce",
    popis:
      "Světlíky, okna nad schodištěm, prosklení ve dvou patrech. Teleskopickou tyčí dosáhneme tam, kam se ze štaflí nechcete natahovat.",
  },
  {
    kod: "DŮM",
    nazev: "Společné prostory bytovek",
    popis:
      "Prosklení ve vchodech a na chodbách bytových domů. Domluvíme pravidelný cyklus se správcem nebo výborem SVJ.",
  },
  {
    kod: "PO STAVBĚ",
    nazev: "Okna po malování a stavbě",
    popis:
      "Zaschlá barva, cementový závoj, samolepky z nových oken. Sklo vrátíme do stavu, jako by rekonstrukce nikdy nebyla.",
  },
];

const duvody = [
  {
    titulek: "Osmóza místo hadru a kýble",
    text:
      "Čistíme demineralizovanou vodou z osmózy — ta zaschne bez map a bez vodního kamene. Proto do skla není vidět šmouha ani proti slunci.",
  },
  {
    titulek: "Máme to pojištěné",
    text:
      "Firma je řádně pojištěná. Kdyby se přesto něco stalo, řešíme to my, ne vy — ale za ta léta jsme nic nerozbili.",
  },
  {
    titulek: "Přijedeme mimo váš provoz",
    text:
      "Prodejnám a kancelářím myjeme okna po zavíračce a o víkendech. Vy ráno odemknete do čistého.",
  },
  {
    titulek: "Domácí Brno a okolí",
    text:
      "Jsme z Brna-Lesné a jezdíme po celém Brně i do okolí. Krátká cesta znamená, že se domluvíme i na malý zásah.",
  },
];

export default function Page() {
  return (
    <main className="uk">
      <header className="uk-nav" aria-label="Hlavní">
        <a className="uk-wordmark" href="#" aria-label="Úklid Katy, mytí oken Brno">
          <span className="uk-wordmark__k">ÚKLID</span>
          <span className="uk-wordmark__katy">KATY</span>
          <span className="uk-wordmark__sub">mytí oken · Brno</span>
        </a>
        <a className="uk-nav__tel" href="tel:+420731171326">
          +420 731 171 326
        </a>
      </header>

      <section className="uk-hero" aria-labelledby="hero-nadpis">
        <div className="uk-hero__pane" aria-hidden="true">
          <span className="uk-squeegee">
            <span className="uk-squeegee__wet" />
            <span className="uk-squeegee__bar" />
          </span>
        </div>

        <div className="uk-hero__copy">
          <p className="uk-eyebrow">Mytí oken v Brně a okolí</p>
          <h1 id="hero-nadpis" className="uk-hero__title">
            Do vašich oken
            <br />
            <span className="uk-hero__accent">je zase vidět.</span>
          </h1>
          <p className="uk-hero__lead">
            Jeden tah stěrkou a šmouha je pryč. Myjeme okna, výlohy i žaluzie
            demineralizovanou vodou z osmózy — zaschne bez map, i když do skla
            praží slunce.
          </p>
          <div className="uk-hero__actions">
            <a className="uk-btn uk-btn--solid" href="tel:+420731171326">
              Zavolat Kateřině
            </a>
            <a className="uk-btn uk-btn--ghost" href="#sluzby">
              Co všechno myjeme
            </a>
          </div>
        </div>
      </section>

      <section className="uk-sluzby" id="sluzby" aria-labelledby="sluzby-nadpis">
        <div className="uk-section-head">
          <p className="uk-eyebrow">Co pro vás umyjeme</p>
          <h2 id="sluzby-nadpis" className="uk-h2">
            Od jednoho okna po celou výlohu.
          </h2>
        </div>

        <ul className="uk-grid">
          {sluzby.map((s) => (
            <li className="uk-card" key={s.kod}>
              <span className="uk-card__kod">{s.kod}</span>
              <h3 className="uk-card__nazev">{s.nazev}</h3>
              <p className="uk-card__popis">{s.popis}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="uk-proc" aria-labelledby="proc-nadpis">
        <div className="uk-section-head">
          <p className="uk-eyebrow">Proč Katy</p>
          <h2 id="proc-nadpis" className="uk-h2">
            Poctivě, diskrétně a bez map na skle.
          </h2>
          <p className="uk-proc__intro">
            Za Úklidem Katy stojí Kateřina Svoboda a prověřený, pravidelně
            školený tým. Pracujeme s péčí — respektujeme vaše soukromí a
            necháme po sobě jen čisté okno.
          </p>
        </div>

        <div className="uk-proc__grid">
          {duvody.map((d) => (
            <article className="uk-proc__item" key={d.titulek}>
              <h3 className="uk-proc__titulek">{d.titulek}</h3>
              <p className="uk-proc__text">{d.text}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
