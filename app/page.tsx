import type { CSSProperties } from "react";

export default function Page() {
  const sluzby = [
    {
      kod: "01",
      nazev: "Ruční mytí exteriéru",
      popis:
        "Dva kýble, čistá žíněná rukavice a hodně trpělivosti. Bez kartáčů, které vozíte za sebou z automatické linky. Hmyz, ptačí trus i pryskyřici sundáme dřív, než se zakoušou do laku.",
      detail: "Předmytí · pěna · ruční otření · sušení mikrovláknem",
    },
    {
      kod: "02",
      nazev: "Čištění interiéru",
      popis:
        "Suché nebo mokré tepování textilu, péče o kůži, plasty i strop. Vytáhneme písek zpod sedaček i to, co tam po zimě zbylo z bot.",
      detail: "Tepování · kůže · plasty · zápachy",
    },
    {
      kod: "03",
      nazev: "Premium Glass — ochrana SiO₂",
      popis:
        "Před zimou nanášíme sklovitou vrstvu s oxidem křemičitým. Lak líp snáší mráz, sůl na silnicích i agresivní směsi do ostřikovačů. Sníh z kapoty pak jde dolů skoro sám.",
      detail: "Sezónní služba · doporučujeme před prvními mrazy",
    },
    {
      kod: "04",
      nazev: "Renovace laku a světel",
      popis:
        "Zmatné reflektory, škrábance z myčky, oxidovaný lak. Vyleštíme, ošetříme a v případě zájmu uzavřeme keramikou Premium Ceramic.",
      detail: "Leštění · voskování · keramický povlak",
    },
  ];

  return (
    <main className="ec-page">
      <header className="ec-topbar">
        <a className="ec-wordmark" href="#" aria-label="Ecocarwash, ruční myčka aut Brno">
          <span className="ec-wordmark__eco">eco</span>
          <span className="ec-wordmark__wash">carwash</span>
          <span className="ec-wordmark__drop" aria-hidden="true" />
        </a>
        <a className="ec-call" href="tel:+420777211583">
          <span className="ec-call__label">Zavolat</span>
          <span className="ec-call__num">777&nbsp;211&nbsp;583</span>
        </a>
      </header>

      <section className="ec-hero" aria-labelledby="ec-hero-title">
        <div className="ec-hero__media">
          <img
            src="/hero.webp"
            alt="Ruční mytí auta žíněnou rukavicí a hustou pěnou v myčce Ecocarwash v Brně"
            className="ec-hero__img"
          />
          <span className="ec-hero__grain" aria-hidden="true" />
        </div>

        <div className="ec-hero__panel">
          <p className="ec-hero__eyebrow">Ruční myčka · Holandská 2/4, Brno</p>
          <h1 id="ec-hero-title" className="ec-hero__title">
            Žádné kartáče.
            <br />
            <span className="ec-hero__title-accent">Jen ruka, pěna a čas.</span>
          </h1>
          <p className="ec-hero__lede">
            Kartáčová linka vám do laku vetře vír drobných škrábanců. My myjeme
            po vozech rukou — jeden kýbl na kola, druhý na karoserii — a to, co
            se zakouslo do laku, sundáme, než napáchá škodu.
          </p>
          <div className="ec-hero__actions">
            <a className="ec-btn ec-btn--solid" href="tel:+420777211583">
              Zavolat a objednat
            </a>
            <a className="ec-btn ec-btn--ghost" href="#sluzby">
              Co umyjeme
            </a>
          </div>
        </div>
      </section>

      <section className="ec-services" id="sluzby" aria-labelledby="ec-services-title">
        <div className="ec-services__head">
          <p className="ec-section-eyebrow">Nabídka</p>
          <h2 id="ec-services-title" className="ec-services__title">
            Od rychlého umytí po celodenní detailing
          </h2>
          <p className="ec-services__intro">
            Přijedete, řeknete, co auto potřebuje. Zbytek je na nás — a hlídá
            nás u toho kamera i pojistka. Firemní klienti můžou platit kartou CCS.
          </p>
        </div>

        <ol className="ec-services__list">
          {sluzby.map((s) => (
            <li className="ec-service" key={s.kod}>
              <span className="ec-service__kod" aria-hidden="true">
                {s.kod}
              </span>
              <div className="ec-service__body">
                <h3 className="ec-service__nazev">{s.nazev}</h3>
                <p className="ec-service__popis">{s.popis}</p>
                <p className="ec-service__detail">{s.detail}</p>
              </div>
            </li>
          ))}
        </ol>

        <div className="ec-services__figure">
          <img
            src="/section-1.webp"
            alt="Detail leštění laku karoserie a nanášení ochranné vrstvy"
            className="ec-services__img"
          />
          <p className="ec-services__caption">
            Premium Ceramic — keramický povlak, který drží lesk i pár zim.
          </p>
        </div>
      </section>

      <section className="ec-trust" aria-labelledby="ec-trust-title">
        <div className="ec-trust__media">
          <img
            src="/section-2.webp"
            alt="Umyté auto s lesklým lakem připravené k vyzvednutí v myčce Ecocarwash"
            className="ec-trust__img"
          />
        </div>
        <div className="ec-trust__body">
          <p className="ec-section-eyebrow ec-section-eyebrow--light">Proč k nám</p>
          <h2 id="ec-trust-title" className="ec-trust__title">
            Klíčky nám svěříte bez obav
          </h2>
          <p className="ec-trust__lead">
            Ecocarwash myjeme auta na Holandské v Brně už léta. Ruční práce,
            žádné automaty — a všechno pod dohledem.
          </p>

          <ul className="ec-trust__points">
            <li className="ec-trust__point">
              <span className="ec-trust__mark" aria-hidden="true">✓</span>
              <span>
                <strong>Kamerový systém</strong> hlídá obě myčky, dokud je auto u nás.
              </span>
            </li>
            <li className="ec-trust__point">
              <span className="ec-trust__mark" aria-hidden="true">✓</span>
              <span>
                <strong>Pojištění proti škodě</strong> — kdyby se cokoli stalo, kryjeme to.
              </span>
            </li>
            <li className="ec-trust__point">
              <span className="ec-trust__mark" aria-hidden="true">✓</span>
              <span>
                <strong>Dárkové poukazy</strong> na kompletní péči — pro parťáka, tátu i obchodního partnera.
              </span>
            </li>
          </ul>

          <div
            className="ec-trust__contact"
            style={{ "--stagger": "0ms" } as CSSProperties}
          >
            <a className="ec-btn ec-btn--solid" href="tel:+420777211583">
              Zavolat 777 211 583
            </a>
            <p className="ec-trust__addr">
              Holandská 2/4, Brno · otevřeno po celý týden
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
