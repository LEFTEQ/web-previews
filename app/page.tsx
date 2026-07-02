export default function Page() {
  const dims = [
    { d: "d 25", note: "přípojky" },
    { d: "d 63", note: "místní sítě" },
    { d: "d 160", note: "rozvody obcí" },
    { d: "d 400", note: "páteřní řady" },
    { d: "d 1600", note: "velké profily" },
  ];

  const services = [
    {
      code: "PE • PLYN",
      title: "Potrubí pro rozvody plynu",
      text:
        "Polyethylénové trubky egeplast pro plynovody — od domovních přípojek po páteřní řady distribučních sítí. Materiál PE 100 a PE 100-RC s vysokou odolností proti bodovému zatížení a šíření trhlin.",
    },
    {
      code: "PE • VODA",
      title: "Potrubí pro rozvody vody",
      text:
        "Trubky pro pitnou i užitkovou vodu s atesty pro ČR. Dodáváme v tyčích i návinech, včetně variant s ochranným pláštěm pro bezvýkopové pokládky a sanace starých řadů.",
    },
    {
      code: "PE • KANALIZACE",
      title: "Tlaková kanalizace",
      text:
        "Potrubní systémy pro tlakovou kanalizaci a výtlačné řady. Poradíme s volbou dimenze a tlakové řady SDR přímo pro váš projekt — od výkazu výměr po dodávku na stavbu.",
    },
    {
      code: "LOGISTIKA",
      title: "Dodávky po celé ČR",
      text:
        "Zavážíme specializované velkoobchody i přímo stavby po celé republice. Návin, tyče 12 m nebo bubny — domluvíme termín a způsob složení podle podmínek na stavbě.",
    },
  ];

  const partners = ["VEOLIA ČR", "innogy", "E.ON", "ČEZ", "stavební firmy po celé ČR"];

  return (
    <main className="gx">
      {/* ============ HERO ============ */}
      <section className="hero" aria-label="GEREX Liberec — polyethylénové potrubí">
        <div className="hero-top">
          <div className="wordmark" aria-label="GEREX Liberec">
            <span className="wordmark-name">GEREX</span>
            <span className="wordmark-city">Liberec</span>
          </div>
          <a className="hero-tel" href="tel:+420485131282">
            +420 485 131 282
          </a>
        </div>

        <div className="hero-body">
          <p className="hero-eyebrow">
            Výhradní zastoupení egeplast international GmbH pro Českou republiku · od roku 2003
          </p>
          <h1 className="hero-title">
            <span className="ht-line ht-1">Polyethylénové</span>
            <span className="ht-line ht-2">potrubí pro plyn,</span>
            <span className="ht-line ht-3">
              vodu <em>a&nbsp;kanalizaci</em>
            </span>
          </h1>
          <p className="hero-lead">
            Dodáváme trubky egeplast velkoobchodům i&nbsp;přímo na stavby po celé ČR.
            Zavolejte nám s&nbsp;výkazem výměr — dimenzi, tlakovou řadu i&nbsp;termín dodání
            vyřešíme na jednom telefonátu.
          </p>
        </div>

        {/* Signature: průřez potrubím jako škála dimenzí */}
        <div className="pipe-scale" role="img" aria-label="Škála průměrů potrubí od d 25 do d 1600 mm">
          <div className="pipe-rail" aria-hidden="true" />
          {dims.map((p, i) => (
            <div className={`pipe pipe-${i + 1}`} key={p.d}>
              <span className="pipe-ring" aria-hidden="true">
                <span className="pipe-bore" aria-hidden="true" />
              </span>
              <span className="pipe-dim">{p.d}</span>
              <span className="pipe-note">{p.note}</span>
            </div>
          ))}
        </div>

        <p className="hero-range">
          Kompletní sortiment <strong>d&nbsp;25 — d&nbsp;1600&nbsp;mm</strong>, skladem a&nbsp;na objednávku
        </p>
      </section>

      {/* ============ SLUŽBY / SORTIMENT ============ */}
      <section className="catalog" aria-labelledby="catalog-h">
        <header className="section-head">
          <p className="section-eyebrow">Sortiment a služby</p>
          <h2 id="catalog-h">Co u nás najdete</h2>
          <p className="section-sub">
            Jedno místo pro celé PE potrubí — od projektu přes dodávku až po poradenství
            k&nbsp;pokládce.
          </p>
        </header>

        <div className="catalog-grid">
          {services.map((s) => (
            <article className="card" key={s.title}>
              <p className="card-code">{s.code}</p>
              <h3 className="card-title">{s.title}</h3>
              <p className="card-text">{s.text}</p>
            </article>
          ))}
        </div>

        <aside className="catalog-strip">
          <p>
            <strong>Materiál PE 100-RC:</strong> vyšší odolnost proti trhlinám znamená pokládku
            bez pískového lože — na stavbě ušetříte čas i&nbsp;peníze za obsyp.
          </p>
        </aside>
      </section>

      {/* ============ DŮVĚRA / O NÁS ============ */}
      <section className="trust" aria-labelledby="trust-h">
        <header className="section-head">
          <p className="section-eyebrow">Proč GEREX</p>
          <h2 id="trust-h">Dvacet let na českých sítích</h2>
        </header>

        <div className="trust-grid">
          <div className="trust-col">
            <dl className="facts">
              <div className="fact">
                <dt>Založeno</dt>
                <dd>2003 v&nbsp;Liberci</dd>
              </div>
              <div className="fact">
                <dt>Zastoupení</dt>
                <dd>Výhradní obchodní zástupce egeplast pro&nbsp;ČR</dd>
              </div>
              <div className="fact">
                <dt>Rozsah dimenzí</dt>
                <dd>d 25 — d 1600 mm</dd>
              </div>
              <div className="fact">
                <dt>Certifikace</dt>
                <dd>Atesty a&nbsp;certifikáty pro plyn i&nbsp;pitnou vodu v&nbsp;ČR</dd>
              </div>
            </dl>
          </div>

          <div className="trust-col trust-text">
            <p>
              Německý výrobce egeplast patří k&nbsp;evropské špičce v&nbsp;plastovém potrubí.
              My jsme jeho ruce v&nbsp;Česku: držíme skladové zásoby, známe české normy
              a&nbsp;víme, co projektanti a&nbsp;stavbyvedoucí skutečně potřebují — rychlou
              odpověď na dimenzi, tlakovou řadu a&nbsp;termín.
            </p>
            <p>
              Naše trubky leží pod zemí na projektech pro největší správce sítí v&nbsp;zemi.
              Když voláte GEREX, mluvíte s&nbsp;lidmi, kteří potrubí prodávají dvacet let —
              ne s&nbsp;call centrem.
            </p>
            <ul className="partner-list" aria-label="Dlouhodobí partneři">
              {partners.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
