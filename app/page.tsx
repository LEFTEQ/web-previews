export default function Page() {
  const hloubky = [
    { m: "0 m", label: "Ornice a navážka", note: "Zaměříme vrt tam, kde hydrogeolog potvrdí vodu." },
    { m: "–6 m", label: "Jíly · Ø 300 mm", note: "Širší profil pro jílové podloží, plná izolace stěn." },
    { m: "–14 m", label: "Štěrky a písky · Ø 140 mm", note: "Vydatné vrstvy — u štěrkových studní garantujeme 4 000 l denně." },
    { m: "–25 m", label: "Skála, pískovec, žula · Ø 140/152 mm", note: "Tvrdé podloží není překážka. Vrtáme i slepenec." },
  ];

  const sluzby = [
    {
      num: "Ø 140–152",
      title: "Vrty do tvrdého podloží",
      text: "Skála, pískovec, žula i slepenec. Naše souprava si poradí s podložím, před kterým jiné firmy couvnou. Průměr vrtu 140 nebo 152 mm podle geologie vašeho pozemku.",
    },
    {
      num: "Ø 300",
      title: "Vrty v jílech",
      text: "Jílové vrstvy vyžadují širší profil. Vrtáme průměrem 300 mm a stěny důkladně izolujeme, aby do studny nezatékala povrchová voda.",
    },
    {
      num: "Ø 140",
      title: "Vrty ve štěrcích a píscích",
      text: "Nejvydatnější podloží na Olomoucku. U štěrkových studní ručíme za minimální vydatnost 4 000 litrů vody denně — dost pro dům, zahradu i bazén.",
    },
    {
      num: "Čerpadla",
      title: "Čerpací technika na míru",
      text: "Studna bez čerpadla je jen díra v zemi. Dodáme a zapojíme ponorné čerpadlo, tlakovou nádobu i rozvod k domu. Velkoobchod i maloobchod.",
    },
  ];

  const zaruky = [
    {
      title: "1 000 litrů denně, písemně",
      text: "U každé studny garantujeme minimální vydatnost 1 000 litrů vody za den. U štěrkových studní 4 000 litrů. Není to slib do telefonu — máte to ve smlouvě.",
    },
    {
      title: "Izolace proti povrchové vodě",
      text: "Každý vrt odizolujeme proti průsaku z povrchu. Do vaší studny teče jen čistá voda z hloubky, ne splach z pole po dešti.",
    },
    {
      title: "Pozemek zůstane, jak byl",
      text: "Rozkládací souprava projde brankou a nezanechá koleje. Vrtáme mezi záhony, za domem i tam, kam se těžká technika nikdy nedostane.",
    },
    {
      title: "Cena od 750 Kč za metr",
      text: "Platíte za vyvrtaný metr, ne za odhad. Cenu spočítáme předem podle geologie — žádné položky navíc na konci.",
    },
  ];

  return (
    <main className="kn">
      {/* ===== HERO ===== */}
      <header className="kn-hero">
        <div className="kn-hero-top">
          <div className="kn-brand" aria-label="Studny Knajbl, Olomouc">
            <span className="kn-brand-mark" aria-hidden="true">
              <svg viewBox="0 0 32 32" width="32" height="32" role="img" aria-hidden="true">
                <circle cx="16" cy="16" r="14" fill="none" stroke="currentColor" strokeWidth="2.5" />
                <circle cx="16" cy="16" r="6" fill="currentColor" />
              </svg>
            </span>
            <span className="kn-brand-text">
              STUDNY <strong>KNAJBL</strong>
            </span>
          </div>
          <span className="kn-hero-loc">Olomouc a okolí</span>
        </div>

        <div className="kn-hero-grid">
          <div className="kn-hero-copy">
            <p className="kn-eyebrow">Vrtané studny · rozkládací souprava · čerpací technika</p>
            <h1 className="kn-h1">
              Vyvrtáme studnu i&nbsp;tam,
              <br />
              <em>kam se technika nedostane.</em>
            </h1>
            <p className="kn-lead">
              Naše rozkládací vrtací souprava projde obyčejnou brankou. Váš trávník,
              záhony ani dlažba nepoznají, že jsme tu byli — pozná to jen vaše studna,
              která vydrží několik generací.
            </p>
            <dl className="kn-hero-facts">
              <div>
                <dt>Cena vrtu</dt>
                <dd>od 750&nbsp;Kč&nbsp;/&nbsp;m</dd>
              </div>
              <div>
                <dt>Garance vydatnosti</dt>
                <dd>min. 1&nbsp;000&nbsp;l&nbsp;/&nbsp;den</dd>
              </div>
              <div>
                <dt>Průměry vrtů</dt>
                <dd>140 · 152 · 300&nbsp;mm</dd>
              </div>
            </dl>
          </div>

          {/* Signature: typografický profil vrtu — svislý řez zemí */}
          <div className="kn-bore" aria-label="Profil vrtu: vrstvy podloží od povrchu po skálu">
            <div className="kn-bore-shaft" aria-hidden="true">
              <span className="kn-bore-line" />
              <span className="kn-bore-bit" />
            </div>
            <ol className="kn-bore-layers">
              {hloubky.map((h) => (
                <li key={h.m} className="kn-bore-layer">
                  <span className="kn-bore-depth">{h.m}</span>
                  <span className="kn-bore-body">
                    <strong>{h.label}</strong>
                    <span>{h.note}</span>
                  </span>
                </li>
              ))}
              <li className="kn-bore-layer kn-bore-water">
                <span className="kn-bore-depth">voda</span>
                <span className="kn-bore-body">
                  <strong>Vaše voda. Navždy zdarma.</strong>
                  <span>Bez vodného, bez faktur, bez starostí o cenu za kubík.</span>
                </span>
              </li>
            </ol>
          </div>
        </div>
      </header>

      {/* ===== SLUŽBY ===== */}
      <section className="kn-sluzby" aria-labelledby="sluzby-h">
        <div className="kn-section-head">
          <p className="kn-eyebrow">Co vrtáme</p>
          <h2 id="sluzby-h" className="kn-h2">
            Každé podloží má svůj průměr. My máme všechny.
          </h2>
          <p className="kn-section-lead">
            Olomoucko je geologicky pestré — od úrodných štěrkopísků Hané po skalní
            podloží v podhůří. Vrt navrhneme přesně podle toho, co je pod vaším pozemkem.
          </p>
        </div>
        <ul className="kn-cards">
          {sluzby.map((s) => (
            <li key={s.title} className="kn-card">
              <span className="kn-card-num">{s.num}</span>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* ===== DŮVĚRA / ZÁRUKY ===== */}
      <section className="kn-zaruky" aria-labelledby="zaruky-h">
        <div className="kn-zaruky-inner">
          <div className="kn-zaruky-head">
            <p className="kn-eyebrow kn-eyebrow-light">Proč Knajbl</p>
            <h2 id="zaruky-h" className="kn-h2">
              Studna pro několik generací — a záruky, které to jistí.
            </h2>
            <p className="kn-zaruky-lead">
              Studnu vrtáte jednou za život. Proto neručíme slovy, ale smlouvou:
              vydatnost, izolace i cena za metr jsou dané předem.
            </p>
          </div>
          <ol className="kn-zaruky-list">
            {zaruky.map((z, i) => (
              <li key={z.title} className="kn-zaruka">
                <span className="kn-zaruka-mark" aria-hidden="true">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3>{z.title}</h3>
                  <p>{z.text}</p>
                </div>
              </li>
            ))}
          </ol>
          <p className="kn-zaruky-note">
            Rodinná firma z&nbsp;Olomouce. Vrtáme po celé Hané — Olomouc, Prostějov,
            Litovel, Šternberk i&nbsp;menší obce v&nbsp;okolí.
          </p>
        </div>
      </section>
    </main>
  );
}
