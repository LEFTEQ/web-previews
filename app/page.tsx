const papers = [
  {
    tag: "01 / grafické",
    name: "Grafické papíry",
    gsm: "90–350 g/m²",
    desc: "Natírané i nenatírané archy pro ofset a digitál. Lesk, mat, silk — skladem v běžných formátech B1, B2, SRA3.",
  },
  {
    tag: "02 / kancelářské",
    name: "Kancelářské papíry",
    gsm: "80–120 g/m²",
    desc: "Xerografické papíry po kartonech i paletách. Pro firmy, které tisknou denně a počítají každou korunu na balík.",
  },
  {
    tag: "03 / kreativní",
    name: "Kreativní papíry",
    gsm: "120–700 g/m²",
    desc: "Strukturované, barvené ve hmotě, metalické. Na vizitky, svatební oznámení, obálky knih a všechno, co má být vidět.",
  },
  {
    tag: "04 / balicí",
    name: "Balicí papíry",
    gsm: "40–120 g/m²",
    desc: "Sulfát, pergamenová náhrada, hedvábný papír. V rolích i arších, s dopravou přímo do vaší provozovny.",
  },
];

const promises = [
  {
    k: "Sklad v Olomouci",
    v: "Běžné gramáže a formáty vydáváme ze skladu tentýž den. Speciální papíry objednáme a máme je do 48 hodin.",
  },
  {
    k: "Doprava k vám",
    v: "Rozvážíme po Olomouci a okolí vlastním autem. Palety i jednotlivé kartony — papír dovezeme až ke stroji.",
  },
  {
    k: "Od roku 2004",
    v: "Dvacet let dodáváme tiskárnám, grafickým studiím a agenturám na Moravě. Známe stroje našich zákazníků i papíry, které na nich běží.",
  },
];

export default function Page() {
  return (
    <main className="cr">
      {/* ===== HERO ===== */}
      <header className="cr-hero">
        <div className="cr-hero-bar">
          <span className="cr-wordmark">
            CRE<span className="cr-wordmark-x">/</span>AS
            <span className="cr-wordmark-sub">creative service · papír</span>
          </span>
          <span className="cr-hero-loc">Olomouc</span>
        </div>

        <div className="cr-hero-stack" aria-hidden="true">
          {/* stoh papíru – signature prvek */}
          <span className="cr-sheet cr-sheet-1"></span>
          <span className="cr-sheet cr-sheet-2"></span>
          <span className="cr-sheet cr-sheet-3"></span>
          <span className="cr-sheet cr-sheet-4"></span>
          <span className="cr-sheet cr-sheet-5"></span>
        </div>

        <div className="cr-hero-body">
          <p className="cr-hero-eyebrow">Velkoobchod papírem pro tiskárny a studia</p>
          <h1 className="cr-hero-title">
            <span className="cr-line cr-line-1">Papír,</span>
            <span className="cr-line cr-line-2">na kterém</span>
            <span className="cr-line cr-line-3">tisknete.</span>
          </h1>
          <p className="cr-hero-lead">
            Grafické, kancelářské, balicí a kreativní papíry skladem v Olomouci.
            Zavoláte dopoledne — odpoledne máte archy u stroje.
          </p>
          <div className="cr-hero-cta">
            <a className="cr-btn cr-btn-solid" href="tel:+420585000000">
              Zavolat sklad
            </a>
            <a className="cr-btn cr-btn-line" href="mailto:obchod@creas.cz">
              Poslat poptávku
            </a>
          </div>
          <dl className="cr-hero-specs">
            <div>
              <dt>Gramáže</dt>
              <dd>40–700 g/m²</dd>
            </div>
            <div>
              <dt>Formáty</dt>
              <dd>SRA3 · B2 · B1 · role</dd>
            </div>
            <div>
              <dt>Výdej ze skladu</dt>
              <dd>tentýž den</dd>
            </div>
          </dl>
        </div>
      </header>

      {/* ===== SORTIMENT ===== */}
      <section className="cr-section" aria-labelledby="sortiment">
        <div className="cr-section-head">
          <h2 id="sortiment">Co máme na skladě</h2>
          <p>
            Čtyři skupiny papírů, které tiskárna nebo studio potřebuje každý týden.
            Nevíte, který papír zvolit? Popište zakázku — doporučíme gramáž i povrch.
          </p>
        </div>
        <ul className="cr-papers">
          {papers.map((p) => (
            <li key={p.tag} className="cr-paper">
              <span className="cr-paper-tag">{p.tag}</span>
              <h3 className="cr-paper-name">{p.name}</h3>
              <span className="cr-paper-gsm">{p.gsm}</span>
              <p className="cr-paper-desc">{p.desc}</p>
            </li>
          ))}
        </ul>
        <p className="cr-section-note">
          K papíru přidáme i reklamní produkci — navrhneme a vytiskneme vizitky,
          hlavičkové papíry a firemní dokumenty na papíru, který sami dodáváme.
        </p>
      </section>

      {/* ===== DŮVĚRA ===== */}
      <section className="cr-section cr-section-dark" aria-labelledby="duvera">
        <div className="cr-section-head">
          <h2 id="duvera">Proč od nás berou papír už dvacet let</h2>
          <p>
            CREAS = CREAtive Service. Česká rodinná firma z Olomouce, žádný
            anonymní e-shop. Papír vám prodá člověk, který ví, jak se chová ve stroji.
          </p>
        </div>
        <div className="cr-promises">
          {promises.map((p) => (
            <article key={p.k} className="cr-promise">
              <h3>{p.k}</h3>
              <p>{p.v}</p>
            </article>
          ))}
        </div>
        <blockquote className="cr-quote">
          <p>
            „Když nám v pátek dojde křída na dotisk katalogu, v Creasu to vyřeší
            do oběda. Tohle vám žádný velkosklad z Prahy nedá.“
          </p>
          <cite>— vedoucí výroby, ofsetová tiskárna, Olomouc</cite>
        </blockquote>
      </section>
    </main>
  );
}
