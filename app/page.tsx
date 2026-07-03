// Interprojekt odpady s.r.o. — Praha
// Projekční kancelář: skládky, odkaliště, sanace, rekultivace, vodovody, kanalizace.
// Vizuální koncept: „výkres v terénu" — technická vrstevnicová grafika (vrstvy skládky,
// profil terénu) jako signature prvek. Paleta: jílová zeleň + betonová šedá + signální
// oranž geodetického kolíku. Žádné fotky — čistá inženýrská typografie.

const sluzby = [
  {
    kod: "SK",
    nazev: "Skládky a odkaliště",
    popis:
      "Kompletní projektová dokumentace skládek všech skupin — od studie přes DUR a DSP až po uzavření a monitoring. Těsnicí systémy, odplynění, jímání průsakových vod.",
  },
  {
    kod: "SR",
    nazev: "Sanace a rekultivace",
    popis:
      "Navracíme uzavřené skládky a kontaminovaná území krajině. Technická i biologická rekultivace, sanace starých ekologických zátěží, dekontaminační plochy.",
  },
  {
    kod: "VK",
    nazev: "Vodovody a kanalizace",
    popis:
      "Vodovodní řady, splašková i dešťová kanalizace, čerpací stanice a přípojky. Hydrotechnické výpočty, koordinace s ostatními sítěmi, projednání se správci.",
  },
  {
    kod: "IS",
    nazev: "Inženýrské sítě",
    popis:
      "Souhrnné řešení sítí pro obytné soubory a průmyslové areály. Plyn, elektro, sdělovací vedení — jeden projektant, jedna koordinační situace.",
  },
  {
    kod: "VH",
    nazev: "Vodohospodářské stavby",
    popis:
      "Okrasné vodní plochy, rybníky, retenční a vsakovací objekty. Návrhy hrází, výpustných objektů a bezpečnostních přelivů včetně manipulačních řádů.",
  },
  {
    kod: "SD",
    nazev: "Sběrné dvory a kompostárny",
    popis:
      "Projekty zařízení pro nakládání s odpady pro obce i svozové firmy — sběrné dvory, překladiště, kompostárny. Včetně provozních řádů a povolení.",
  },
];

const postup = [
  {
    faze: "Studie",
    text: "Prohlídka lokality, geologie, kapacitní posouzení. Řekneme vám, co na pozemku jde a co ne — dřív, než utratíte za dokumentaci.",
  },
  {
    faze: "DUR / DSP",
    text: "Dokumentace pro územní rozhodnutí a stavební povolení. Projednáme s úřady, správci sítí a dotčenými orgány za vás.",
  },
  {
    faze: "Realizace",
    text: "Prováděcí dokumentace a autorský dozor na stavbě. U skládek navíc provozní řády a plán monitoringu po uzavření.",
  },
];

export default function Page() {
  return (
    <main className="ip">
      {/* ===== HERO ===== */}
      <header className="hero">
        <div className="hero-topbar">
          <div className="wordmark" aria-label="Interprojekt odpady s.r.o.">
            <span className="wordmark-inter">INTER</span>
            <span className="wordmark-projekt">PROJEKT</span>
            <span className="wordmark-sub">odpady s.r.o. · Praha</span>
          </div>
          <a className="hero-tel" href="tel:+420233081999">
            +420 233 081 999
          </a>
        </div>

        <div className="hero-body">
          <p className="hero-eyebrow">
            Projekční kancelář pro odpadové a vodní hospodářství — od roku 1992
          </p>
          <h1 className="hero-title">
            Projektujeme, co má
            <br />
            zůstat <em>pod povrchem</em>
            <br />
            v pořádku.
          </h1>
          <p className="hero-lead">
            Skládky, odkaliště, kanalizace a rekultivace. Dokumentace, kterou
            úřady schválí a stavaři podle ní postaví — bez víceprací a bez
            překvapení v podloží.
          </p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="tel:+420233081999">
              Zavolat projektantovi
            </a>
            <a className="btn btn-ghost" href="mailto:interpro@interpro.cz">
              Napsat poptávku
            </a>
          </div>
        </div>

        {/* Signature: řez skládkou — vrstvy těsnění jako v technickém výkresu */}
        <div className="hero-section-cut" aria-hidden="true">
          <svg
            viewBox="0 0 1200 220"
            preserveAspectRatio="none"
            className="cut-svg"
            role="presentation"
          >
            <path
              className="cut-layer cut-layer-1"
              d="M0,120 C200,60 380,150 600,95 C820,40 1000,130 1200,80 L1200,220 L0,220 Z"
            />
            <path
              className="cut-layer cut-layer-2"
              d="M0,150 C220,95 400,175 620,125 C840,75 1020,160 1200,115 L1200,220 L0,220 Z"
            />
            <path
              className="cut-layer cut-layer-3"
              d="M0,180 C240,135 420,200 640,160 C860,120 1040,190 1200,150 L1200,220 L0,220 Z"
            />
            <path
              className="cut-line"
              d="M0,120 C200,60 380,150 600,95 C820,40 1000,130 1200,80"
              fill="none"
            />
          </svg>
          <div className="cut-labels">
            <span>rekultivační vrstva</span>
            <span>minerální těsnění</span>
            <span>drenáž průsakových vod</span>
          </div>
        </div>
      </header>

      {/* ===== SEKCE 1: ČINNOST ===== */}
      <section className="sluzby" aria-labelledby="sluzby-h">
        <div className="section-head">
          <p className="section-eyebrow">Činnost kanceláře</p>
          <h2 id="sluzby-h" className="section-title">
            Šest oborů, jeden autorizovaný podpis
          </h2>
          <p className="section-lead">
            Každý projekt vede autorizovaný inženýr pro vodohospodářské stavby.
            Dvoupísmenný kód u oboru najdete i na razítku naší dokumentace.
          </p>
        </div>

        <ul className="sluzby-grid">
          {sluzby.map((s) => (
            <li key={s.kod} className="sluzba">
              <span className="sluzba-kod" aria-hidden="true">
                {s.kod}
              </span>
              <h3 className="sluzba-nazev">{s.nazev}</h3>
              <p className="sluzba-popis">{s.popis}</p>
            </li>
          ))}
        </ul>

        <div className="postup">
          <h3 className="postup-title">Jak zakázka probíhá</h3>
          <ol className="postup-list">
            {postup.map((p, i) => (
              <li key={p.faze} className="postup-krok">
                <span className="postup-cislo" aria-hidden="true">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h4 className="postup-faze">{p.faze}</h4>
                  <p className="postup-text">{p.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ===== SEKCE 2: DŮVĚRA / REFERENCE ===== */}
      <section className="duvera" aria-labelledby="duvera-h">
        <div className="section-head section-head--light">
          <p className="section-eyebrow">Proč Interprojekt</p>
          <h2 id="duvera-h" className="section-title">
            Přes třicet let mezi skládkou a stavebním úřadem
          </h2>
        </div>

        <div className="duvera-grid">
          <div className="duvera-fakta">
            <div className="fakt">
              <span className="fakt-hodnota">30+</span>
              <span className="fakt-popis">
                let projektujeme skládky, kanalizace a rekultivace po celé ČR
              </span>
            </div>
            <div className="fakt">
              <span className="fakt-hodnota">ISO 9001</span>
              <span className="fakt-popis">
                certifikovaný systém řízení kvality projektových prací
              </span>
            </div>
            <div className="fakt">
              <span className="fakt-hodnota">Praha 6</span>
              <span className="fakt-popis">
                Heleny Malířové 11/282 — kancelář kousek od Strahova, výjezd na
                lokalitu kamkoli v republice
              </span>
            </div>
          </div>

          <ul className="reference-list">
            <li className="reference">
              <span className="reference-typ">Skládka · rekultivace</span>
              <h3 className="reference-nazev">
                Uzavření a rekultivace skládky komunálního odpadu
              </h3>
              <p className="reference-text">
                Návrh těsnicího a odplyňovacího systému, technická rekultivace a
                monitoring průsakových vod po uzavření tělesa skládky.
              </p>
            </li>
            <li className="reference">
              <span className="reference-typ">Kanalizace · obec</span>
              <h3 className="reference-nazev">
                Splašková kanalizace a ČOV pro obec do 2 000 obyvatel
              </h3>
              <p className="reference-text">
                Gravitační stoky s čerpacími stanicemi, projednání s vlastníky
                pozemků a dotační dokumentace pro SFŽP.
              </p>
            </li>
            <li className="reference">
              <span className="reference-typ">Vodní plochy</span>
              <h3 className="reference-nazev">
                Obnova soustavy rybníků včetně bezpečnostních přelivů
              </h3>
              <p className="reference-text">
                Odbahnění, rekonstrukce hrází a výpustných objektů, manipulační
                řády a povolení k nakládání s vodami.
              </p>
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}
