// Labelservis s.r.o. — výroba a tisk samolepících etiket, České Budějovice
// Design: „role etiket" — signature prvek je pás etiket (die-cut label strip),
// který se táhne hero sekcí jako materiál, se kterým firma denně pracuje.

const materials = [
  { name: "Papír lesklý i matný", note: "klasika pro potraviny a nápoje" },
  { name: "Termopapír", note: "teplocitlivá vrstva pro váhy a pokladny" },
  { name: "Reflexní papír", note: "barevné odstíny, které jsou vidět" },
  { name: "Polyetylen (PE)", note: "bílý i transparentní, odolá vlhku" },
  { name: "Polypropylen (PP)", note: "pro chemii, kosmetiku a mrazáky" },
];

const services = [
  {
    tag: "TISK",
    title: "Etikety s potiskem i bez",
    text: "Samolepící etikety přesně na míru vašemu výrobku — s vaším logem, povinnými údaji nebo návodem k použití. Nebo prázdné, které si sami dotisknete termotransferovou tiskárnou.",
  },
  {
    tag: "FORMY",
    title: "Tiskové a výsekové formy",
    text: "Zajistíme fotopolymery pro tisk i raznice pro výsek vašeho tvaru etikety. Formy zůstávají připravené pro každou další zakázku — dotisk je pak rychlý a levnější.",
  },
  {
    tag: "DOTISK",
    title: "TTR pásky, tiskárny a snímače",
    text: "Dodáme termotransferové pásky pro dotisk šarží a dat spotřeby, termotransferové tiskárny i snímače čárových kódů. Kompletní řešení označování z jednoho místa.",
  },
  {
    tag: "DOKONČENÍ",
    title: "Převíjení a řezání rolí",
    text: "Potištěné role rozřežeme a převineme podle vaší aplikace — do role pro etiketovací stroj i do archů pro ruční lepení. Maximální šíře role 270 mm.",
  },
];

export default function Page() {
  return (
    <main className="page">
      {/* ================= HERO ================= */}
      <header className="hero">
        <div className="hero-inner">
          <div className="wordmark" aria-label="Labelservis">
            <span className="wordmark-label">label</span>
            <span className="wordmark-servis">servis</span>
          </div>

          <p className="hero-eyebrow">
            Flexotisk samolepících etiket · České Budějovice · od roku 2007
          </p>

          <h1 className="hero-title">
            <span className="hero-line hero-line-1">Etiketa drží</span>
            <span className="hero-line hero-line-2">na výrobku.</span>
            <span className="hero-line hero-line-3">
              My držíme <em>slovo.</em>
            </span>
          </h1>

          <p className="hero-lead">
            Tiskneme na pětibarvovém flexotiskovém stroji Nilpeter F2400 — z
            role do role, z role do archů, s plochým i rotačním výsekem.
            Vodou ředitelnými barvami, které nezatěžují životní prostředí.
          </p>

          <div className="hero-actions">
            <a className="btn btn-primary" href="mailto:info@labelservis.cz">
              Poptat kalkulaci etiket
            </a>
            <a className="btn btn-ghost" href="tel:+420728362459">
              Zavolat +420 728 362 459
            </a>
          </div>
        </div>

        {/* Signature: pás etiket odvíjející se z role — čistě CSS/SVG */}
        <div className="labelstrip" aria-hidden="true">
          <div className="labelstrip-track">
            <span className="label-chip chip-blue">SAMOLEPÍCÍ</span>
            <span className="label-chip chip-white">5 BAREV</span>
            <span className="label-chip chip-blue">FLEXOTISK</span>
            <span className="label-chip chip-white">UV LAK</span>
            <span className="label-chip chip-blue">VÝSEK</span>
            <span className="label-chip chip-white">ROLE 270 mm</span>
            <span className="label-chip chip-blue">PE · PP · PAPÍR</span>
            <span className="label-chip chip-white">EKO BARVY</span>
            <span className="label-chip chip-blue">SAMOLEPÍCÍ</span>
            <span className="label-chip chip-white">5 BAREV</span>
            <span className="label-chip chip-blue">FLEXOTISK</span>
            <span className="label-chip chip-white">UV LAK</span>
            <span className="label-chip chip-blue">VÝSEK</span>
            <span className="label-chip chip-white">ROLE 270 mm</span>
            <span className="label-chip chip-blue">PE · PP · PAPÍR</span>
            <span className="label-chip chip-white">EKO BARVY</span>
          </div>
        </div>
      </header>

      {/* ================= SLUŽBY ================= */}
      <section className="section section-services" aria-labelledby="sluzby-h">
        <div className="section-inner">
          <p className="section-eyebrow">Co pro vás vyrobíme</p>
          <h2 id="sluzby-h" className="section-title">
            Od raznice po hotovou roli
          </h2>
          <p className="section-lead">
            Etiketa vzniká v jednom domě: navrhneme výsek, zajistíme formy,
            vytiskneme, nalakujeme a převineme přesně tak, jak ji potřebuje váš
            etiketovací stroj — nebo vaše ruce.
          </p>

          <div className="service-grid">
            {services.map((s) => (
              <article className="service-card" key={s.tag}>
                <span className="service-tag">{s.tag}</span>
                <h3 className="service-title">{s.title}</h3>
                <p className="service-text">{s.text}</p>
              </article>
            ))}
          </div>

          <div className="materials">
            <h3 className="materials-title">Na co umíme tisknout</h3>
            <ul className="materials-list">
              {materials.map((m) => (
                <li className="material" key={m.name}>
                  <span className="material-name">{m.name}</span>
                  <span className="material-note">{m.note}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ================= DŮVĚRA / STROJ ================= */}
      <section className="section section-trust" aria-labelledby="duvera-h">
        <div className="section-inner trust-layout">
          <div className="trust-copy">
            <p className="section-eyebrow eyebrow-light">Proč Labelservis</p>
            <h2 id="duvera-h" className="section-title title-light">
              Jeden stroj, který známe do posledního šroubu
            </h2>
            <p className="trust-text">
              Srdcem tiskárny je dánský flexotiskový stroj{" "}
              <strong>Nilpeter F2400</strong>. Pět barevných jednotek, plochý i
              rotační výsek, korona na úpravu materiálu a UV lampy pro lakování.
              Tiskne z role do role i z role do archů — a my na něm pracujeme
              každý den od založení firmy.
            </p>
            <p className="trust-text">
              Labelservis založili v roce 2007 společníci s dlouholetou praxí v
              polygrafické výrobě. Nejsme překupníci — každou zakázku tiskneme
              sami, U Smaltovny 115/2 v Českých Budějovicích. Když si nebudete
              vědět rady s materiálem nebo lepidlem, zvednete telefon a mluvíte
              přímo s tiskařem.
            </p>
          </div>

          <dl className="trust-facts">
            <div className="fact">
              <dt className="fact-label">Barevnost tisku</dt>
              <dd className="fact-value">5 barev + UV lak</dd>
            </div>
            <div className="fact">
              <dt className="fact-label">Výsek etiket</dt>
              <dd className="fact-value">plochý i rotační</dd>
            </div>
            <div className="fact">
              <dt className="fact-label">Maximální šíře role</dt>
              <dd className="fact-value">270 mm</dd>
            </div>
            <div className="fact">
              <dt className="fact-label">Barvy</dt>
              <dd className="fact-value">vodou ředitelné, ekologické</dd>
            </div>
            <div className="fact">
              <dt className="fact-label">Zkušenosti v polygrafii</dt>
              <dd className="fact-value">od roku 2007</dd>
            </div>
          </dl>
        </div>
      </section>
    </main>
  );
}
