// KB TAXI — Karel Buček, autodoprava Olomouc
// Design: „nákladní list" — typografický hero postavený na šachovnici taxi
// a řeči silnice: tonáž, kilometry, hydraulická ruka.

const vozy = [
  {
    id: "V1",
    nazev: "Iveco Daily 35C",
    urceni: "Stěhování a rozvoz zásilek",
    parametry: [
      { label: "Tonáž", value: "do 1,5 t" },
      { label: "Ložná plocha", value: "4 europalety" },
      { label: "Sazba", value: "15 Kč / km" },
    ],
    popis:
      "Rychlé stěhování bytu, dovoz nábytku nebo paletová zásilka po Olomouci i po celé republice. Naložíme, převezeme, vyložíme.",
  },
  {
    id: "V2",
    nazev: "Iveco Eurocargo ML 120",
    urceni: "Těžké náklady s hydraulickou rukou",
    parametry: [
      { label: "Hydraulická ruka", value: "11 m / 1 t" },
      { label: "Sazba město", value: "30 Kč / km" },
      { label: "Sazba mimo město", value: "28 Kč / km" },
      { label: "Nakládka / vykládka", value: "500–800 Kč / h" },
    ],
    popis:
      "Stavební materiál, stroje, kontejnery — všechno, co člověk neunese. Ruka dosáhne přes plot i do druhého patra. Odvezeme i autovrak včetně likvidace.",
  },
];

const zasady = [
  {
    heslo: "SMLUVNĚ",
    text: "Cena platí předem domluvená. Firmám fakturujeme, žádné překvapení na konci jízdy.",
  },
  {
    heslo: "RYCHLE",
    text: "Voláte dnes, jedeme zpravidla do 48 hodin. Akutní odvoz po Olomouci často ještě týž den.",
  },
  {
    heslo: "SPOLEHLIVĚ",
    text: "Jeden řidič, jedno jméno, jedno číslo. Karel Buček vozí náklady po Olomoucku přes dvacet let.",
  },
];

export default function Page() {
  return (
    <main className="kb">
      {/* ===================== HERO ===================== */}
      <section className="hero" aria-label="KB Taxi — autodoprava Olomouc">
        <div className="hero-checker" aria-hidden="true" />

        <header className="hero-top">
          <div className="wordmark">
            <span className="wordmark-kb">KB</span>
            <span className="wordmark-rest">
              <strong>TAXI</strong>
              <em>autodoprava · Olomouc</em>
            </span>
          </div>
          <a className="hero-call" href="tel:+420602354533">
            <span className="hero-call-label">Volejte</span>
            <span className="hero-call-num">602 354 533</span>
          </a>
        </header>

        <div className="hero-body">
          <p className="hero-eyebrow">Nákladní doprava · stěhování · odvoz autovraků</p>
          <h1 className="hero-title">
            <span className="line l1">NALOŽÍME</span>
            <span className="line l2">
              AŽ <span className="tonaz">9&nbsp;TUN</span>
            </span>
            <span className="line l3">A JEDEME.</span>
          </h1>
          <p className="hero-sub">
            Karel Buček — vlastní vozy, hydraulická ruka s dosahem 11&nbsp;metrů,
            platba hotově i fakturou. Olomouc a okolí, po domluvě celá ČR.
          </p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="tel:+420602354533">
              Zavolat 602 354 533
            </a>
            <a className="btn btn-ghost" href="#vozy">
              Vozy a ceník
            </a>
          </div>
        </div>

        <div className="hero-strip" aria-hidden="true">
          <span>OLOMOUC</span>
          <span>·</span>
          <span>PŘEROV</span>
          <span>·</span>
          <span>PROSTĚJOV</span>
          <span>·</span>
          <span>ŠTERNBERK</span>
          <span>·</span>
          <span>LITOVEL</span>
          <span>·</span>
          <span>CELÁ ČR PO DOMLUVĚ</span>
        </div>
      </section>

      {/* ===================== VOZY A CENÍK ===================== */}
      <section className="vozy" id="vozy" aria-labelledby="vozy-h">
        <div className="section-head">
          <span className="section-tag">Vozy a ceník</span>
          <h2 id="vozy-h">Dva vozy. Ceny za kilometr, ne za odhad.</h2>
          <p className="section-lead">
            Cenu spočítáte sami předem: kilometry krát sazba. U jeřábu se platí
            hodina nakládky a vykládky. Nic dalšího.
          </p>
        </div>

        <div className="vuz-grid">
          {vozy.map((v) => (
            <article className="vuz" key={v.id}>
              <div className="vuz-head">
                <span className="vuz-id" aria-hidden="true">{v.id}</span>
                <div>
                  <h3>{v.nazev}</h3>
                  <p className="vuz-urceni">{v.urceni}</p>
                </div>
              </div>
              <dl className="vuz-params">
                {v.parametry.map((p) => (
                  <div className="param" key={p.label}>
                    <dt>{p.label}</dt>
                    <dd>{p.value}</dd>
                  </div>
                ))}
              </dl>
              <p className="vuz-popis">{v.popis}</p>
            </article>
          ))}
        </div>

        <p className="vozy-note">
          Odvoz autovraku řešíme včetně dokladu o ekologické likvidaci —
          potřebujete ho pro odhlášení vozidla na úřadě.
        </p>
      </section>

      {/* ===================== DŮVĚRA ===================== */}
      <section className="duvera" aria-labelledby="duvera-h">
        <div className="section-head">
          <span className="section-tag section-tag-dark">Proč KB Taxi</span>
          <h2 id="duvera-h">Tři slova, na kterých firma stojí</h2>
        </div>

        <div className="zasady">
          {zasady.map((z) => (
            <div className="zasada" key={z.heslo}>
              <h3>{z.heslo}</h3>
              <p>{z.text}</p>
            </div>
          ))}
        </div>

        <div className="duvera-kontakt">
          <div className="dk-col">
            <span className="dk-label">Mobil — nejrychlejší cesta</span>
            <a href="tel:+420602354533" className="dk-num">+420 602 35 45 33</a>
          </div>
          <div className="dk-col">
            <span className="dk-label">Pevná linka</span>
            <a href="tel:+420585234323" className="dk-num">+420 585 23 43 23</a>
          </div>
          <div className="dk-col">
            <span className="dk-label">Působíme</span>
            <span className="dk-num dk-text">Olomouc a okolí</span>
          </div>
        </div>
      </section>
    </main>
  );
}
