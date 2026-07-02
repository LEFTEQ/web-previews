const sluzby = [
  {
    nazev: "Skleněné obklady",
    popis:
      "Obklad za kuchyňskou linku, stěny sprchového koutu nebo celá koupelna z jednoho kusu skla. Bez spár, které by chytaly špínu — lakované sklo přesně na míru vašim stěnám.",
    detail: "lakované sklo · kalené sklo · na míru",
  },
  {
    nazev: "Interiéry ze skla",
    popis:
      "Dělící příčky, celoskleněné dveře, zábradlí ke schodišti nebo sprchová zástěna. Zaměříme u vás doma, vyrobíme a namontujeme včetně kování.",
    detail: "příčky · dveře · zábradlí · zástěny",
  },
  {
    nazev: "Zasklívání",
    popis:
      "Rozbité okno, výloha, dveře nebo balkon. Přijedeme, zaměříme a zasklíme — od jednoduchého skla po bezpečnostní vrstvené.",
    detail: "okna · výlohy · dveře · střechy",
  },
  {
    nazev: "Izolační dvojskla a trojskla",
    popis:
      "Od roku 2005 vyrábíme certifikovaná izolační skla ve vlastní výrobě. Vyměníme zamlžené dvojsklo v rámu, aniž byste museli kupovat nové okno.",
    detail: "certifikovaná výroba od 2005",
  },
];

const realizace = [
  { co: "Skleněné stěny", kde: "Golf Park Roudnička" },
  { co: "Celoskleněné zábradlí", kde: "rodinný dům, Hradec Králové" },
  { co: "Dělící příčky ze skla", kde: "rodinný dům, Pardubicko" },
  { co: "Designová zástěna do sprchového koutu", kde: "byt, Hradec Králové" },
  { co: "Dveře, zábradlí, obklad a zrcadla", kde: "kompletní interiér na klíč" },
];

export default function Page() {
  return (
    <main className="beer">
      {/* ===== HERO ===== */}
      <header className="hero" aria-label="Sklenářství Beer — úvod">
        <div className="hero-top">
          <span className="wordmark">
            BEER<span className="wordmark-thin">/sklenářství</span>
          </span>
          <span className="hero-loc">Hradec Králové &amp; Pardubice</span>
        </div>

        <div className="hero-body">
          <p className="hero-eyebrow">Vlastní výroba · montáž · více než 20 let u skla</p>
          <h1 className="hero-title">
            <span className="line line-1">Sklo řežeme</span>
            <span className="line line-2 etched">na desetinu</span>
            <span className="line line-3">milimetru.</span>
          </h1>
          <p className="hero-sub">
            Skleněné obklady, interiérové sklo a zasklívání pro Hradec Králové,
            Pardubice a okolí. Zaměříme, vyrobíme, namontujeme — z jedné dílny,
            bez prostředníků.
          </p>
          <div className="hero-cta">
            <a className="btn btn-solid" href="tel:+420466123456">
              Zavolat sklenáři
            </a>
            <a className="btn btn-ghost" href="mailto:info@sklenarstvi-beer.cz">
              Poslat poptávku
            </a>
          </div>
        </div>

        {/* signature: hrana skla — svislý průřez tabulí */}
        <div className="glass-edge" aria-hidden="true">
          <span className="pane pane-1"></span>
          <span className="pane pane-2"></span>
          <span className="pane pane-3"></span>
          <span className="pane-label">průřez izolačním trojsklem — 4 / 16 / 4 / 16 / 4 mm</span>
        </div>
      </header>

      {/* ===== SLUŽBY ===== */}
      <section className="sluzby" aria-labelledby="sluzby-h">
        <div className="section-head">
          <h2 id="sluzby-h">Co pro vás uděláme</h2>
          <p className="section-lead">
            Veškeré sklenářské práce přesně podle vašich požadavků — od jedné
            rozbité tabulky po celoskleněný interiér.
          </p>
        </div>

        <div className="sluzby-grid">
          {sluzby.map((s) => (
            <article className="sluzba" key={s.nazev}>
              <h3>{s.nazev}</h3>
              <p>{s.popis}</p>
              <p className="sluzba-detail">{s.detail}</p>
            </article>
          ))}
        </div>
      </section>

      {/* ===== DŮVĚRA / REALIZACE ===== */}
      <section className="duvera" aria-labelledby="duvera-h">
        <div className="duvera-inner">
          <div className="duvera-text">
            <h2 id="duvera-h">Jsme sklenáři. Milujeme sklo.</h2>
            <p>
              Sklu se věnujeme přes dvacet let. Od roku 2005 vyrábíme ve vlastní
              dílně v Černé za Bory certifikovaná izolační dvojskla a trojskla —
              takže víme přesně, co držíte v ruce, když u nás objednáváte.
            </p>
            <p>
              Sklo zpracováváme na moderních strojích: řez, broušení hran,
              kalení i lakování. Vy řeknete rozměr a představu, my se postaráme
              o zbytek včetně dopravy a montáže.
            </p>
            <dl className="fakta">
              <div>
                <dt>20+ let</dt>
                <dd>praxe v oboru</dd>
              </div>
              <div>
                <dt>od 2005</dt>
                <dd>vlastní výroba izolačních skel</dd>
              </div>
              <div>
                <dt>HK + PCE</dt>
                <dd>montujeme v obou krajích</dd>
              </div>
            </dl>
          </div>

          <div className="realizace">
            <h3 className="realizace-h">Poslední realizace</h3>
            <ul className="realizace-list">
              {realizace.map((r) => (
                <li key={r.co}>
                  <span className="real-co">{r.co}</span>
                  <span className="real-kde">{r.kde}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
