const services = [
  {
    code: "EL",
    title: "Projekce elektro",
    desc: "Silnoproud i slaboproud ve všech stupních dokumentace — od studie přes prováděcí projekt až po dokumentaci skutečného provedení. Rozvodny, kabelové trasy, uzemnění, ochrana před bleskem.",
    norm: "ČSN 33 2000 · ČSN EN 60204",
  },
  {
    code: "ASŘTP",
    title: "Průmyslové řídicí systémy",
    desc: "Návrh a integrace řízení technologických procesů — architektura, zapojení rozváděčů MaR, logika a bezpečnostní funkce pro nepřetržité provozy energetiky a chemie.",
    norm: "ČSN EN 61511",
  },
  {
    code: "MaR",
    title: "Polní instrumentace",
    desc: "Měření a regulace v terénu — přístroje, snímače a smyčky v provedení Ex pro prostory s nebezpečím výbuchu prachů, plynů i výbušnin. Výběr, umístění, jiskrová bezpečnost.",
    norm: "ATEX 2014/34/EU · ČSN EN 60079",
  },
  {
    code: "ENG",
    title: "Engineering a dozor",
    desc: "Autorský a technický dozor na stavbě, koordinace montáží, uvedení do provozu a součinnost při revizích. Držíme termíny a klíčové procesy opakovaně kontrolujeme.",
    norm: "Uvedení do provozu · revize",
  },
];

const reference = [
  { id: "R-01", name: "Lučební závody Draslovka", tag: "Chemie · Ex" },
  { id: "R-02", name: "Elektrárna Prunéřov II", tag: "Energetika" },
  { id: "R-03", name: "Elektrárna Chvaletice", tag: "Energetika" },
  { id: "R-04", name: "Teplárna Dvůr Králové", tag: "Teplárenství" },
  { id: "R-05", name: "Elektrárna Poříčí", tag: "Energetika" },
];

export default function Page() {
  return (
    <>
      <a className="skip" href="#profese">Přeskočit na obsah</a>

      <header className="nav">
        <div className="wrap nav-inner">
          <div className="brand">
            <span className="mark">EXPR<b>O</b>M</span>
            <span className="sub">elektro projekce · Pardubice</span>
          </div>
          <nav className="navlinks" aria-label="Hlavní">
            <a className="mid" href="#profese">Profese</a>
            <a className="mid" href="#reference">Reference</a>
            <a className="call" href="tel:+420608630319">Zavolat 608 630 319</a>
          </nav>
        </div>
      </header>

      <main>
        {/* HERO */}
        <section className="hero sheet" aria-labelledby="h1">
          <img
            className="hero-img"
            src="/hero.webp"
            alt="Elektroinstalace a rozváděče v průmyslovém provozu"
          />
          <div className="hero-veil" aria-hidden="true" />
          <div className="grid-bg" aria-hidden="true" />
          <span className="reg tl" aria-hidden="true" />
          <span className="reg tr" aria-hidden="true" />

          <div className="hero-inner">
            <p className="hero-eyebrow mono a a1">
              <span className="dot" aria-hidden="true" />
              Projekce · Engineering · Ex zóny
            </p>
            <h1 id="h1" className="a a2">
              Elektroinstalace pro provozy s&nbsp;<span className="en">nebezpečím výbuchu</span>.
            </h1>
            <p className="lede a a3">
              Od roku 2006 projektujeme elektrická zařízení, průmyslové řídicí
              systémy a polní instrumentaci pro elektrárny, teplárny a chemičky —
              tam, kde se pracuje s výbušnými prachy, plyny, tlakem i teplotami a
              každý detail musí sedět.
            </p>
            <div className="cta-row a a4">
              <a className="btn btn-p" href="tel:+420608630319">Zavolat 608 630 319</a>
              <a className="btn btn-s" href="#reference">Prohlédnout realizace</a>
            </div>
          </div>
          <span className="reg bl" aria-hidden="true" />
          <span className="reg br" aria-hidden="true" />
        </section>

        {/* TITLE BLOCK — signature */}
        <dl className="titleblock" aria-label="Přehled firmy">
          <div className="tb-cell">
            <dt>Zpracoval</dt>
            <dd>Exprom s.r.o.</dd>
          </div>
          <div className="tb-cell">
            <dt>Obor</dt>
            <dd>Energetika · chemie · petrochemie</dd>
          </div>
          <div className="tb-cell hl">
            <dt>Prostředí</dt>
            <dd>Ex — nebezpečí výbuchu</dd>
          </div>
          <div className="tb-cell">
            <dt>Působíme od</dt>
            <dd>2006</dd>
          </div>
          <div className="tb-cell rev">
            <dt>Revize</dt>
            <dd>2025 · aktuální</dd>
          </div>
          <div className="tb-cell">
            <dt>Sídlo</dt>
            <dd>Pardubice</dd>
          </div>
        </dl>

        {/* SERVICES */}
        <section className="services" id="profese" aria-labelledby="h2s">
          <div className="wrap">
            <div className="sec-head">
              <span className="idx">01 — Co projektujeme</span>
            </div>
            <h2 id="h2s">Čtyři profese, jedna dokumentace, která drží.</h2>
            <p className="lead">
              Elektro, řídicí systémy i měření a regulace kreslíme tak, aby na sebe
              navazovaly a prošly i v provozech s&nbsp;nejpřísnějšími požadavky. Známe
              normy, chodíme na školení a klíčové kroky kontrolujeme dvakrát.
            </p>

            <div className="svc-layout">
              <figure className="svc-figure">
                <img
                  src="/section-1.webp"
                  alt="Projektová dokumentace a elektrické rozvody průmyslového zařízení"
                />
                <figcaption>Prováděcí dokumentace · Ex provedení</figcaption>
              </figure>

              <div className="svc-list">
                {services.map((s) => (
                  <div className="svc" key={s.code}>
                    <span className="svc-code">{s.code}</span>
                    <div>
                      <h3>{s.title}</h3>
                      <p>{s.desc}</p>
                      <span className="norm">{s.norm}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* REFERENCE */}
        <section className="reference" id="reference" aria-labelledby="h2r">
          <div className="wrap">
            <div className="sec-head">
              <span className="idx">02 — Kde běží naše projekty</span>
            </div>

            <div className="ref-layout">
              <div className="ref-intro">
                <h2 id="h2r">Projekty, které nesmí zhasnout.</h2>
                <p className="big">18 let</p>
                <p>
                  Firmu jsme založili v&nbsp;roce 2006 a od té doby stojíme za elektro
                  částí provozů v&nbsp;klasické energetice, chemii i petrochemii. Zakázku
                  bereme jednu po druhé a každou vedeme individuálně — kvalita
                  a&nbsp;termín jdou u&nbsp;nás vždy spolu.
                </p>
                <figure className="ref-fig">
                  <img
                    src="/section-2.webp"
                    alt="Průmyslový energetický provoz s elektrickými rozvody"
                  />
                  <figcaption>Provozy s nepřetržitým chodem · dozor a uvedení do provozu</figcaption>
                </figure>
              </div>

              <div>
                <div className="ref-schedule" aria-label="Poslední realizace">
                  <div className="head">
                    <span>Poslední realizace</span>
                    <span>Provoz</span>
                  </div>
                  <ol className="ref-list">
                    {reference.map((r) => (
                      <li key={r.id}>
                        <span className="ref-id">{r.id}</span>
                        <span className="ref-name">{r.name}</span>
                        <span className="ref-tag">{r.tag}</span>
                      </li>
                    ))}
                  </ol>
                </div>

                <div className="contact-strip">
                  <div className="cs-cell">
                    <div className="k">Zavolejte nám</div>
                    <a className="v" href="tel:+420608630319">+420 608 630 319</a>
                  </div>
                  <div className="cs-cell">
                    <div className="k">Sídlo</div>
                    <div className="v">K Olšině 229<br />530 09 Pardubice</div>
                  </div>
                  <div className="cs-cell">
                    <div className="k">Provozovna</div>
                    <div className="v">Školská 228<br />533 53 Pardubice — Ohrazenice</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
