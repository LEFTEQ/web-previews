import React from "react";

const services = [
  {
    kod: "ÚČT",
    nazev: "Vedení účetnictví a daňové evidence",
    popis:
      "Kompletní zpracování dokladů, DPH, kontrolní hlášení i roční závěrka. Vidíte, kde jsou vaše peníze — každý měsíc, ne až u daní.",
  },
  {
    kod: "MZD",
    nazev: "Mzdy a personalistika",
    popis:
      "Výplatní pásky, odvody, přihlášky na správu i zdravotní pojišťovnu, roční zúčtování daně. Termíny hlídáme za vás.",
  },
  {
    kod: "DAŇ",
    nazev: "Daňová přiznání a poradenství",
    popis:
      "Přiznání k dani z příjmů, silniční, DPH i podklady pro banku. Poradíme dřív, než uděláte drahé rozhodnutí.",
  },
  {
    kod: "REP",
    nazev: "Reporty a zastupování na úřadech",
    popis:
      "Přehledné měsíční výstupy pro majitele a jednatele plus zastupování při kontrolách finančního úřadu.",
  },
];

const skupina = [
  { nazev: "STAR Comp. spol. s r.o.", ic: "25005316" },
  { nazev: "EFCO Liberec s.r.o.", ic: "64051587" },
  { nazev: "Účto Liberec, s.r.o.", ic: "09998080" },
  { nazev: "STAR Comp Mzdy s.r.o.", ic: "27323838" },
  { nazev: "RENI s.r.o.", ic: "63147599" },
  { nazev: "Mzdy Liberec, s.r.o.", ic: "11735830" },
  { nazev: "STAR Comp Neziskovky s.r.o.", ic: "27340881" },
  { nazev: "MISTHOS s.r.o.", ic: "08369925" },
];

export default function Page() {
  return (
    <main className="sc">
      <header className="sc-top">
        <a className="sc-logo" href="#" aria-label="STAR Comp — účetní kancelář Liberec">
          <span className="sc-logo-mark" aria-hidden="true">★</span>
          <span className="sc-logo-word">
            STAR<span className="sc-logo-thin">Comp</span>
          </span>
        </a>
        <span className="sc-top-meta">Účetní kancelář · Liberec od 1997</span>
      </header>

      <section className="sc-hero">
        <div className="sc-hero-copy">
          <p className="sc-eyebrow">Účetnictví · Daně · Mzdy · Personalistika</p>
          <h1 className="sc-hero-title">
            Účetnictví, které
            <br />
            <span className="sc-em">sedí na haléř</span>
          </h1>
          <p className="sc-hero-lead">
            Jsme účetní kancelář z Jablonecké ulice v Liberci. Přebíráme papíry,
            odvody i termíny — vy se vrátíte k podnikání s jistotou, že čísla
            souhlasí a stát nemá co vytknout.
          </p>
          <div className="sc-hero-actions">
            <a className="sc-btn" href="#sluzby">
              Chci předat účetnictví
            </a>
            <a className="sc-btn sc-btn-ghost" href="tel:+420000000000">
              Zavolat do kanceláře
            </a>
          </div>
          <dl className="sc-ledger">
            <div>
              <dt>Firem ve skupině</dt>
              <dd>8</dd>
            </div>
            <div>
              <dt>Roků v účetnictví</dt>
              <dd>27</dd>
            </div>
            <div>
              <dt>Sídlo</dt>
              <dd>Liberec 460 01</dd>
            </div>
          </dl>
        </div>
        <figure className="sc-hero-media">
          <img
            src="/hero.webp"
            alt="Účetní stůl s doklady a výpočty ve STAR Comp v Liberci"
            loading="eager"
          />
          <figcaption>Jablonecká 333/23a, Liberec</figcaption>
        </figure>
      </section>

      <section className="sc-section" id="sluzby" aria-labelledby="sluzby-nadpis">
        <div className="sc-section-head">
          <p className="sc-eyebrow">Co pro vás vedeme</p>
          <h2 id="sluzby-nadpis" className="sc-h2">
            Čtyři řádky, které máme na starost místo vás
          </h2>
        </div>
        <div className="sc-grid">
          <ul className="sc-services">
            {services.map((s) => (
              <li key={s.kod} className="sc-service">
                <span className="sc-service-kod" aria-hidden="true">
                  {s.kod}
                </span>
                <div className="sc-service-body">
                  <h3>{s.nazev}</h3>
                  <p>{s.popis}</p>
                </div>
              </li>
            ))}
          </ul>
          <figure className="sc-section-media">
            <img
              src="/section-1.webp"
              alt="Zpracování mezd a dokladů v účetní kanceláři STAR Comp"
              loading="lazy"
            />
          </figure>
        </div>
      </section>

      <section className="sc-section sc-section-trust" aria-labelledby="skupina-nadpis">
        <div className="sc-trust">
          <figure className="sc-section-media sc-trust-media">
            <img
              src="/section-2.webp"
              alt="Tým STAR Comp v Liberci nad ročními závěrkami"
              loading="lazy"
            />
          </figure>
          <div className="sc-trust-copy">
            <p className="sc-eyebrow">Skupina STAR Comp</p>
            <h2 id="skupina-nadpis" className="sc-h2">
              Osm firem, jedna účtárna, kterou znáte jménem
            </h2>
            <p className="sc-trust-lead">
              Pod STAR Comp patří specializované společnosti na mzdy, neziskovky
              i běžné účetnictví. Díky tomu má na vaši agendu vždy někdo čas — a
              zároveň jednáte pořád se stejnými lidmi v Liberci.
            </p>
            <ul className="sc-firms">
              {skupina.map((f) => (
                <li key={f.ic} className="sc-firm">
                  <span className="sc-firm-name">{f.nazev}</span>
                  <span className="sc-firm-ic">IČ {f.ic}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
