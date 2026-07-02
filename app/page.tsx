// Studio 071 — grafické studio, Ústí nad Labem
// Koncept: „071" jako přetisková značka. Signature prvek = soutisk (misregistration)
// tří tiskových barev — vizuální jazyk převzatý přímo z řemesla grafického studia:
// přetisk, pasovací křížky, CMYK terče, výřezové značky. Vše ostatní drží klid.

export default function Page() {
  return (
    <main className="s71">
      {/* ===================== HERO ===================== */}
      <header className="hero">
        <div className="hero-top">
          <div className="wordmark" aria-label="Studio 071">
            <span className="wordmark-studio">STUDIO</span>
            <span className="wordmark-num" aria-hidden="true">
              <b className="layer layer-c">071</b>
              <b className="layer layer-m">071</b>
              <b className="layer layer-k">071</b>
            </span>
            <span className="sr-only">071</span>
          </div>
          <p className="hero-loc">
            grafické studio<span className="loc-dot" aria-hidden="true">●</span>Ústí nad Labem
          </p>
        </div>

        <h1 className="hero-title">
          <span className="hero-line hero-line-1">Značky, obaly</span>
          <span className="hero-line hero-line-2">a tiskoviny,</span>
          <span className="hero-line hero-line-3">
            které <em className="overprint" data-word="sedí">sedí</em>
          </span>
          <span className="hero-line hero-line-4">na milimetr.</span>
        </h1>

        <div className="hero-foot">
          <p className="hero-claim">
            Od prvního náčrtu po data do tiskárny. Navrhujeme vizuální identity,
            obaly a grafiku, kterou vezmete do ruky — a pozná se, že je vaše.
          </p>
          <div className="reg-mark" aria-hidden="true">
            <svg viewBox="0 0 64 64" width="64" height="64" role="presentation">
              <circle cx="32" cy="32" r="20" fill="none" stroke="currentColor" strokeWidth="2" />
              <line x1="32" y1="2" x2="32" y2="62" stroke="currentColor" strokeWidth="2" />
              <line x1="2" y1="32" x2="62" y2="32" stroke="currentColor" strokeWidth="2" />
              <circle cx="32" cy="32" r="5" fill="currentColor" />
            </svg>
          </div>
        </div>

        <div className="crop crop-tl" aria-hidden="true" />
        <div className="crop crop-br" aria-hidden="true" />
      </header>

      {/* ===================== SLUŽBY ===================== */}
      <section className="services" aria-labelledby="sluzby-h">
        <div className="section-head">
          <p className="eyebrow">Co pro vás uděláme</p>
          <h2 id="sluzby-h">Tři řemesla, jeden rukopis</h2>
        </div>

        <div className="service-grid">
          <article className="service service-c">
            <p className="service-tag">C</p>
            <h3>Vizuální identita</h3>
            <p>
              Logo, barvy, písmo a pravidla, jak je používat. Dostanete
              logomanuál, se kterým zvládne pracovat každá tiskárna
              i každý nový kolega — bez dohadování.
            </p>
            <ul>
              <li>Logo a logotyp</li>
              <li>Logomanuál a šablony</li>
              <li>Vizitky, hlavičkové papíry</li>
            </ul>
          </article>

          <article className="service service-m">
            <p className="service-tag">M</p>
            <h3>Obaly a etikety</h3>
            <p>
              Krabice, etiketa nebo sáček, který na regálu vyhraje. Navrhujeme
              rovnou na konkrétní obal, hlídáme výsek, spadávky i to, jak
              barva dopadne na skutečném materiálu.
            </p>
            <ul>
              <li>Design obalu na míru výseku</li>
              <li>Etikety pro potraviny a nápoje</li>
              <li>Vzorky a nátisky před výrobou</li>
            </ul>
          </article>

          <article className="service service-k">
            <p className="service-tag">K</p>
            <h3>Tiskoviny a kampaně</h3>
            <p>
              Katalog, plakát, inzerce nebo grafika na auto. Připravíme
              tisková data přesně podle specifikace tiskárny — vy řešíte
              jen to, co se na nich píše.
            </p>
            <ul>
              <li>Katalogy a brožury</li>
              <li>Plakáty a venkovní reklama</li>
              <li>Kompletní tisková data (PDF/X)</li>
            </ul>
          </article>
        </div>
      </section>

      {/* ===================== DŮVĚRA / PROCES ===================== */}
      <section className="trust" aria-labelledby="duvera-h">
        <div className="section-head section-head-inverse">
          <p className="eyebrow">Proč Studio 071</p>
          <h2 id="duvera-h">Malé studio, které si hlídá soutisk</h2>
        </div>

        <div className="trust-grid">
          <div className="trust-text">
            <p>
              Jsme grafické studio z Ústí nad Labem. Pracujeme v malém týmu,
              takže s vámi mluví přímo ten, kdo váš návrh kreslí — ne obchodník,
              který ho pak někomu předá.
            </p>
            <p>
              Naše práce nekončí hezkým obrázkem na obrazovce. Končí ve chvíli,
              kdy držíte v ruce vytištěný kus a barvy sedí přesně tak, jak jsme
              vám je ukázali na nátisku.
            </p>
          </div>

          <ol className="trust-steps">
            <li>
              <span className="step-label">Zadání</span>
              <p>Sejdeme se u vás nebo u nás v Ústí. Chceme vidět, co děláte — ne jen brief v e-mailu.</p>
            </li>
            <li>
              <span className="step-label">Návrh</span>
              <p>Do dvou týdnů ukážeme směry na reálných příkladech: na vaší etiketě, vaší vizitce.</p>
            </li>
            <li>
              <span className="step-label">Soutisk</span>
              <p>Doladíme detaily, připravíme data a pohlídáme tiskárnu až po hotový výtisk.</p>
            </li>
          </ol>
        </div>

        <div className="trust-strip" aria-hidden="true">
          <span>BRANDING</span>
          <span className="strip-reg">◉</span>
          <span>PACKAGING</span>
          <span className="strip-reg">◉</span>
          <span>PRINT</span>
          <span className="strip-reg">◉</span>
          <span>ÚSTÍ NAD LABEM</span>
          <span className="strip-reg">◉</span>
          <span>OD ROKU 2007</span>
        </div>
      </section>
    </main>
  );
}
