import type { CSSProperties } from "react";

const sluzby = [
  {
    id: "01",
    nazev: "Tlaková čištění potrubí",
    popis:
      "Ucpaný odpad, WC nebo dešťová kanalizace? Vysokotlakou vodou uvolníme nános tuku, kořenů i vápna a zprůchodníme potrubí od domovní přípojky až po hlavní řad.",
    detail: "Výjezd do 60 minut · Č. Budějovice a okolí",
  },
  {
    id: "02",
    nazev: "Monitoring kamerou",
    popis:
      "Než se kope, natočíme to. Samohybnou kamerou projedeme potrubí, najdeme prasklinu, spád i zdroj ucpání a předáme vám záznam na USB.",
    detail: "Přesná lokace závady · zápis pro pojišťovnu",
  },
  {
    id: "03",
    nazev: "Frézování a odstranění kořenů",
    popis:
      "Kořeny stromů prorostlé do potrubí odřežeme rotační frézou, aniž bychom rozkopali zahradu. Trubka je čistá po celém průřezu.",
    detail: "Beton, kamenina i plast",
  },
  {
    id: "04",
    nazev: "Odsávání jímek a lapolů",
    popis:
      "Fekálním vozem vyčerpáme septik, jímku i odlučovač tuků. Kal odvezeme a zlikvidujeme podle zákona — dostanete doklad.",
    detail: "Pravidelný servis pro provozovny i domácnosti",
  },
];

const duvody = [
  {
    cislo: "24/7",
    label: "Pohotovost",
    text: "Zavolejte i o víkendu a v noci. Když teče do sklepa, nečeká se do pondělí.",
  },
  {
    cislo: "18",
    label: "Let na trase",
    text: "Kanalizaci v Budějovicích a na jihu Čech známe. Víme, kde bývají staré kameninové řady.",
  },
  {
    cislo: "0 Kč",
    label: "Za příjezd v okrese",
    text: "Cenu řekneme dopředu podle metrů a techniky. Žádná překvapení na faktuře.",
  },
];

export default function Page() {
  return (
    <main className="fcb">
      <header className="fcb-topbar">
        <a className="fcb-logo" href="#" aria-label="FINÁL CB — čištění kanalizace">
          <span className="fcb-logo-mark" aria-hidden="true">
            <span className="fcb-logo-flow" />
          </span>
          <span className="fcb-logo-text">
            FINÁL<span className="fcb-logo-cb">CB</span>
          </span>
        </a>
        <nav className="fcb-nav" aria-label="Hlavní">
          <a href="#sluzby">Služby</a>
          <a href="#duvera">O nás</a>
        </nav>
        <a className="fcb-call" href="tel:+420739154224">
          <span className="fcb-call-label">Nonstop</span>
          <span className="fcb-call-num">739 154 224</span>
        </a>
      </header>

      <section className="fcb-hero" aria-labelledby="hero-nadpis">
        <div className="fcb-hero-media">
          <img
            src="/hero.webp"
            alt="Kanalizační vůz s vysokotlakým čištěním v akci"
            className="fcb-hero-img"
          />
          <div className="fcb-hero-scrim" aria-hidden="true" />
        </div>
        <div className="fcb-hero-inner">
          <p className="fcb-eyebrow">Čištění kanalizace · České Budějovice</p>
          <h1 id="hero-nadpis" className="fcb-hero-title">
            Ucpané<br />
            <span className="fcb-hero-accent">potrubí</span> zprůchodníme,
            <br />
            než dopijete kávu.
          </h1>
          <p className="fcb-hero-lead">
            Tlaková voda, kamera do potrubí a fekální vůz. Přijedeme do hodiny,
            řekneme cenu předem a po sobě uklidíme. Bez výmluv, bez rozkopané
            zahrady.
          </p>
          <div className="fcb-hero-actions">
            <a className="fcb-btn fcb-btn-primary" href="tel:+420739154224">
              Zavolat 739 154 224
            </a>
            <a className="fcb-btn fcb-btn-ghost" href="#sluzby">
              Co umíme
            </a>
          </div>
          <dl className="fcb-hero-facts">
            <div>
              <dt>Výjezd</dt>
              <dd>do 60 min</dd>
            </div>
            <div>
              <dt>Provoz</dt>
              <dd>nonstop 24/7</dd>
            </div>
            <div>
              <dt>Druhé číslo</dt>
              <dd>777 953 994</dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="fcb-sluzby" id="sluzby" aria-labelledby="sluzby-nadpis">
        <div className="fcb-section-head">
          <p className="fcb-eyebrow fcb-eyebrow-dark">Co pro vás uděláme</p>
          <h2 id="sluzby-nadpis" className="fcb-h2">
            Čtyři věci, kvůli kterým nám voláte
          </h2>
        </div>
        <div className="fcb-grid">
          <ul className="fcb-service-list">
            {sluzby.map((s) => (
              <li key={s.id} className="fcb-service">
                <span className="fcb-service-id" aria-hidden="true">
                  {s.id}
                </span>
                <div className="fcb-service-body">
                  <h3 className="fcb-service-nazev">{s.nazev}</h3>
                  <p className="fcb-service-popis">{s.popis}</p>
                  <p className="fcb-service-detail">{s.detail}</p>
                </div>
              </li>
            ))}
          </ul>
          <figure className="fcb-service-figure">
            <img
              src="/section-1.webp"
              alt="Detail vysokotlaké trysky při čištění kanalizačního potrubí"
              className="fcb-figure-img"
            />
            <figcaption>
              Vysokotlaká hlavice — voda místo chemie. Trubku uvolní a zároveň
              vypláchne.
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="fcb-duvera" id="duvera" aria-labelledby="duvera-nadpis">
        <div className="fcb-duvera-grid">
          <figure className="fcb-duvera-figure">
            <img
              src="/section-2.webp"
              alt="Technik FINÁL CB u zásahového vozu v Českých Budějovicích"
              className="fcb-figure-img"
            />
          </figure>
          <div className="fcb-duvera-text">
            <p className="fcb-eyebrow fcb-eyebrow-dark">Kdo přijede</p>
            <h2 id="duvera-nadpis" className="fcb-h2">
              Místní parta, co ví, kde v Budějovicích končí trubky
            </h2>
            <p className="fcb-duvera-lead">
              FINÁL CB jezdí po Českobudějovicku i dál po jihu Čech. Nejsme
              anonymní dispečink — přijede k vám člověk se strojem, který
              problém opravdu vyřeší, a ne jen doporučí kopat.
            </p>
            <dl className="fcb-facts">
              {duvody.map((d) => (
                <div className="fcb-fact" key={d.label}>
                  <dt className="fcb-fact-num">{d.cislo}</dt>
                  <dd>
                    <span className="fcb-fact-label">{d.label}</span>
                    <span className="fcb-fact-text">{d.text}</span>
                  </dd>
                </div>
              ))}
            </dl>
            <a className="fcb-btn fcb-btn-primary" href="tel:+420777953994">
              Domluvit výjezd
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
