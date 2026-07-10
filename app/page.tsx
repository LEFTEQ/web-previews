export default function Page() {
  const materialy = [
    {
      kod: "01",
      nazev: "Litá fólie 3M / Avery",
      popis: "Odlévaná (cast) fólie, co drží tvar i na nárazníku, prahu a zpětném zrcátku. Bez zvedání rohů po zimě.",
      det: "tažnost do 3D · záruka 5–10 let"
    },
    {
      kod: "02",
      nazev: "Matný a saténový wrap",
      popis: "Celopolep vozu do matu, saténu nebo strukturovaného odstínu. Ochrání původní lak a jde zase sundat.",
      det: "celopolep · demontovatelný"
    },
    {
      kod: "03",
      nazev: "Firemní grafika na dodávky",
      popis: "Logo, kontakt a QR na kurýrku nebo flotilu. Řezaná grafika i celoplošný tisk s laminací proti mytí a UV.",
      det: "řezaná grafika · digitální tisk"
    },
    {
      kod: "04",
      nazev: "Ochranná fólie PPF a tónování",
      popis: "Neviditelná lakochranná fólie na kapotu a prahy, tmavá autofólie na boční skla podle vyhlášky.",
      det: "PPF · homologované tónování"
    }
  ];

  const kroky = [
    { c: "01", t: "Zaměření a návrh", d: "Přijedete k nám do Holešovic, nafotíme vůz a připravíme grafický náhled přímo na vaše auto — uvidíte výsledek dřív, než řízneme první metr." },
    { c: "02", t: "Tisk a příprava", d: "Tiskneme latexem na vodní bázi, laminujeme a fólii necháme odležet. Vůz mezitím umyjeme a odmastíme do posledního detailu." },
    { c: "03", t: "Aplikace v boxu", d: "Polep lepíme v bezprašném vyhřívaném boxu. Demontujeme kliky a lišty, taháme fólii do hran — žádné bubliny, žádné přelepy." },
    { c: "04", t: "Předání a péče", d: "Auto přebíráte s protokolem a návodem na mytí. Prvních 14 dní bez tlakové myčky, pak jezdíte jako s novým lakem." }
  ];

  return (
    <main className="mm">
      <header className="mm-nav">
        <a className="mm-logo" href="#top" aria-label="MATRIX Media — polepy aut Praha">
          <span className="mm-logo-mark" aria-hidden="true">M</span>
          <span className="mm-logo-txt">MATRIX<span className="mm-logo-sub">Media · polepy aut</span></span>
        </a>
        <nav className="mm-nav-links" aria-label="Hlavní navigace">
          <a href="#sluzby">Co polepujeme</a>
          <a href="#postup">Jak to probíhá</a>
          <a href="#duvera">O dílně</a>
        </nav>
        <a className="mm-nav-cta" href="tel:+420251512500">Zavolat</a>
      </header>

      <section className="mm-hero" id="top">
        <div className="mm-hero-img">
          <img src="/hero.webp" alt="Aplikace fólie na karoserii vozu v dílně MATRIX Media v Praze" />
          <span className="mm-hero-veil" aria-hidden="true" />
        </div>
        <div className="mm-hero-inner">
          <p className="mm-eyebrow">Dílna v Praze 7 · Holešovice · od roku 2002</p>
          <h1 className="mm-hero-title">
            Nová barva auta<br />
            <span className="mm-hero-accent">bez stříkací pistole.</span>
          </h1>
          <p className="mm-hero-lead">
            Celopolepy, firemní grafika a ochranné fólie na míru vašeho vozu. Řízneme, natáhneme do hrany a zažehlíme — lak zůstane pod fólií jako nový.
          </p>
          <div className="mm-hero-actions">
            <a className="mm-btn" href="#sluzby">Chci polep vozu</a>
            <a className="mm-btn mm-btn-ghost" href="tel:+420251512500">+420 251 512 500</a>
          </div>
          <dl className="mm-hero-facts">
            <div><dt>fólie</dt><dd>3M &amp; Avery</dd></div>
            <div><dt>záruka barvy</dt><dd>až 10 let</dd></div>
            <div><dt>lak vespod</dt><dd>beze změny</dd></div>
          </dl>
        </div>
      </section>

      <section className="mm-sec" id="sluzby" aria-labelledby="sluzby-h">
        <div className="mm-sec-head">
          <p className="mm-eyebrow">Materiál řídí výsledek</p>
          <h2 id="sluzby-h">Co na vaše auto nalepíme</h2>
          <p className="mm-sec-sub">Pracujeme jen se značkovými fóliemi, které vydrží české zimy i letní parkoviště. Vyberte, o co jde — zbytek doladíme při zaměření.</p>
        </div>

        <div className="mm-grid">
          <div className="mm-grid-img">
            <img src="/section-1.webp" alt="Detail polepené karoserie s matnou fólií" />
          </div>
          <ul className="mm-cards">
            {materialy.map((m) => (
              <li className="mm-card" key={m.kod}>
                <span className="mm-card-kod" aria-hidden="true">{m.kod}</span>
                <div className="mm-card-body">
                  <h3>{m.nazev}</h3>
                  <p>{m.popis}</p>
                  <span className="mm-card-det">{m.det}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mm-sec mm-sec-dark" id="duvera" aria-labelledby="duvera-h">
        <div className="mm-trust">
          <div className="mm-trust-txt">
            <p className="mm-eyebrow mm-eyebrow-light">O dílně</p>
            <h2 id="duvera-h">Přes dvacet let taháme fólii<br /> do hran přímo v Holešovicích</h2>
            <p>
              MATRIX Media není půjčovna nálepek. Vozy polepujeme v bezprašném vyhřívaném boxu, kliky a lišty demontujeme a fólii vedeme až za hranu plechu. Proto rohy nezvedají a auto vypadá lakované, ne polepené.
            </p>
            <p>
              Uděláme jedno auto i celou flotilu — od kurýrní dodávky po sportovní celopolep. Náhled uvidíte na fotce vašeho vozu ještě před tiskem, takže víte přesně, co přebíráte.
            </p>
            <div className="mm-trust-facts">
              <div><strong>2002</strong><span>první polep v naší dílně</span></div>
              <div><strong>1 : 1</strong><span>náhled na váš vlastní vůz</span></div>
              <div><strong>Praha 7</strong><span>U Průhonu 1079/40</span></div>
            </div>
            <a className="mm-btn" href="mailto:info@matrixmedia.eu">Napsat o cenu polepu</a>
          </div>
          <div className="mm-trust-img">
            <img src="/section-2.webp" alt="Polepené firemní vozy z dílny MATRIX Media" />
          </div>
        </div>

        <ol className="mm-steps" aria-label="Jak polep probíhá">
          {kroky.map((k) => (
            <li className="mm-step" key={k.c} id={k.c === "01" ? "postup" : undefined}>
              <span className="mm-step-c" aria-hidden="true">{k.c}</span>
              <h3>{k.t}</h3>
              <p>{k.d}</p>
            </li>
          ))}
        </ol>
      </section>
    </main>
  );
}
