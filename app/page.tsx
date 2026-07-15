// Guilloché rosette — concentric security line-work echoing the notář's round official stamp.
// Two interleaved flowers of circles produce the engraved rosette; rings frame the stamp text.
function Seal() {
  const outer = Array.from({ length: 30 }, (_, i) => {
    const a = (i / 30) * Math.PI * 2;
    const cx = 200 + 60 * Math.cos(a);
    const cy = 200 + 60 * Math.sin(a);
    return <circle key={`o${i}`} cx={cx} cy={cy} r={86} pathLength={1} />;
  });
  const inner = Array.from({ length: 22 }, (_, i) => {
    const a = (i / 22) * Math.PI * 2 + 0.14;
    const cx = 200 + 33 * Math.cos(a);
    const cy = 200 + 33 * Math.sin(a);
    return <circle key={`i${i}`} cx={cx} cy={cy} r={52} pathLength={1} />;
  });

  return (
    <div className="seal" aria-hidden="true">
      <svg viewBox="0 0 400 400" role="presentation">
        <defs>
          <path
            id="stampArc"
            fill="none"
            d="M 33,200 a 167,167 0 1,1 334,0 a 167,167 0 1,1 -334,0"
          />
        </defs>

        <g className="seal-rings">
          <circle cx={200} cy={200} r={191} pathLength={1} />
          <circle cx={200} cy={200} r={183} pathLength={1} />
          <circle cx={200} cy={200} r={150} pathLength={1} />
          <circle cx={200} cy={200} r={143} pathLength={1} />
        </g>

        <g className="seal-rosette">
          {outer}
          {inner}
        </g>

        <g className="seal-core">
          <circle cx={200} cy={200} r={30} pathLength={1} />
          <circle cx={200} cy={200} r={24} pathLength={1} />
        </g>

        <text className="seal-text">
          <textPath href="#stampArc" startOffset="0">
            {"MGR. PETR WERNER \u00B7 NOTÁŘ \u00B7 ÚSTÍ NAD LABEM \u00B7 "}
          </textPath>
        </text>

        <text className="seal-mono" x={200} y={214} textAnchor="middle">
          PW
        </text>
      </svg>
    </div>
  );
}

// Compact engraved rosette used as a decorative record-mark in the contact block.
function MiniSeal() {
  const petals = Array.from({ length: 16 }, (_, i) => {
    const a = (i / 16) * Math.PI * 2;
    const cx = 50 + 15 * Math.cos(a);
    const cy = 50 + 15 * Math.sin(a);
    return <circle key={i} cx={cx} cy={cy} r={21} />;
  });

  return (
    <svg
      className="record-mini-seal"
      viewBox="0 0 100 100"
      role="presentation"
      aria-hidden="true"
    >
      <g fill="none" stroke="var(--bordo)">
        <circle cx={50} cy={50} r={47.5} strokeWidth={2} />
        <circle cx={50} cy={50} r={44} strokeWidth={0.8} />
        <circle cx={50} cy={50} r={16} strokeWidth={1.2} />
      </g>
      <g fill="none" stroke="var(--brass)" strokeWidth={0.5}>
        {petals}
      </g>
      <text
        x={50}
        y={58}
        textAnchor="middle"
        fontFamily="var(--display)"
        fontSize={22}
        fill="var(--bordo)"
      >
        PW
      </text>
    </svg>
  );
}

const services = [
  {
    no: "No. 01",
    tag: "Listiny",
    title: "Notářské zápisy a ověřování",
    body: "Notářské zápisy o právních jednáních jako veřejné listiny — smlouvy o převodu nemovitostí, zakládání společností, manželské a předmanželské smlouvy, závěti i listiny o vydědění. Ověřím vám podpis i shodu opisu s originálem.",
    lines: ["Veřejná listina se silou důkazu", "Ověření podpisu i opisu na počkání"],
  },
  {
    no: "No. 02",
    tag: "Dědictví",
    title: "Pozůstalostní řízení jako soudní komisař",
    body: "V dědických věcech jsem pověřen jako soudní komisař pro obvod Okresního soudu v Ústí nad Labem. Řízení s vámi projdu srozumitelně, krok po kroku, a vy nemusíte na soud.",
    lines: ["Volejte po a st 8:00–15:00", "+420 413 034 208 · dedictvi@notarusti.cz"],
  },
  {
    no: "No. 03",
    tag: "CzechPOINT",
    title: "Výpisy a konverze dokumentů",
    body: "Ověřené výpisy z katastru nemovitostí, obchodního a živnostenského rejstříku i z rejstříku trestů. Provedu také autorizovanou konverzi mezi listinnou a elektronickou podobou dokumentu.",
    lines: ["Výpisy vydávám při návštěvě kanceláře", "Konverze listina ↔ elektronický dokument"],
  },
];

export default function Page() {
  return (
    <main className="sheet">
      <header className="masthead band">
        <p className="wordmark">
          <span className="wordmark-name">Werner</span>
          <span className="wordmark-sub">notářská kancelář</span>
        </p>
        <p className="masthead-meta">Ústí nad Labem · U Nádraží 782/2</p>
      </header>

      <section className="hero band" aria-labelledby="hero-title">
        <p className="eyebrow">Notář · zapsán v Notářské komoře</p>
        <Seal />
        <h1 id="hero-title">
          Mgr. Petr Werner
          <span className="hero-role">notář v Ústí nad Labem</span>
        </h1>
        <p className="hero-lede">
          Listiny, dědická řízení i výpisy z CzechPOINTu opatřené pečetí veřejné
          listiny. Kancelář najdete naproti hlavnímu nádraží — parkovat můžete
          v podzemních garážích pod nádražím.
        </p>
        <p className="hero-cite">
          Vydáno v Ústí nad Labem &nbsp;·&nbsp; podle notářského řádu
        </p>
      </section>

      <section className="catalog band" aria-labelledby="catalog-title">
        <div className="section-head">
          <h2 id="catalog-title">Rejstřík služeb</h2>
          <p className="section-note">
            Co pro vás v kanceláři vyřídím — seřazeno jako v úředním rejstříku.
          </p>
        </div>

        <ol className="specimens">
          {services.map((s) => (
            <li className="specimen" key={s.no}>
              <div className="specimen-index">
                <span className="specimen-no">{s.no}</span>
                <span className="specimen-tag">{s.tag}</span>
              </div>
              <div className="specimen-body">
                <h3>{s.title}</h3>
                <p>{s.body}</p>
                <ul className="specimen-lines">
                  {s.lines.map((l) => (
                    <li key={l}>{l}</li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="record band" aria-labelledby="record-title">
        <div className="section-head">
          <p className="record-no">No. 04</p>
          <h2 id="record-title">Kontakt a úřední záznam</h2>
          <p className="section-note">
            Přijďte v úředních hodinách, nebo si domluvte schůzku i mimo ně.
          </p>
        </div>

        <div className="record-grid">
          <div className="record-block">
            <h4>Kancelář</h4>
            <address>
              U Nádraží 782/2
              <br />
              400 01 Ústí nad Labem
            </address>
            <p className="record-hint">
              Naproti hlavnímu vlakovému nádraží. Parkování v podzemních
              garážích pod nádražím.
            </p>
          </div>

          <div className="record-block">
            <h4>Úřední hodiny</h4>
            <dl className="hours">
              <div>
                <dt>Pondělí – pátek</dt>
                <dd>08:30 – 15:00</dd>
              </div>
            </dl>
            <p className="record-hint">
              Po předchozí domluvě se sejdeme i mimo úřední hodiny.
            </p>
          </div>

          <div className="record-block">
            <h4>Telefon</h4>
            <p className="record-line">
              <a href="tel:+420413034208">+420 413 034 208</a>
              <span>dědická řízení — volejte po a st 8:00–15:00</span>
            </p>
            <p className="record-line">
              <a href="tel:+420607058755">+420 607 058 755</a>
              <span>ostatní notářské služby</span>
            </p>
          </div>

          <div className="record-block">
            <h4>E-mail</h4>
            <p className="record-line">
              <a href="mailto:werner@notarusti.cz">werner@notarusti.cz</a>
              <span>běžná agenda kanceláře</span>
            </p>
            <p className="record-line">
              <a href="mailto:dedictvi@notarusti.cz">dedictvi@notarusti.cz</a>
              <span>pozůstalostní řízení</span>
            </p>
          </div>

          <div className="record-block record-ident">
            <h4>Identifikační údaje</h4>
            <dl className="ident">
              <div>
                <dt>Datová schránka</dt>
                <dd>jwippjp</dd>
              </div>
              <div>
                <dt>IČ</dt>
                <dd>01340662</dd>
              </div>
              <div>
                <dt>DIČ</dt>
                <dd>CZ7803142842</dd>
              </div>
              <div>
                <dt>Číslo účtu</dt>
                <dd>3937688389 / 0800</dd>
              </div>
              <div>
                <dt>Peněžní ústav</dt>
                <dd>Česká spořitelna, a.s.</dd>
              </div>
            </dl>
          </div>

          <div className="record-block record-seal-note">
            <MiniSeal />
            <h4>Soudní komisař</h4>
            <p className="record-hint">
              Pro dědictví jednám jako soudní komisař v obvodu Okresního soudu
              v Ústí nad Labem. Vaše listiny nesou pečeť veřejné listiny.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
