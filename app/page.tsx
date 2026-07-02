export default function Page() {
  return (
    <main className="pk">
      {/* ===================== HERO ===================== */}
      <header className="pk-hero">
        <div className="pk-hero-top">
          <div className="pk-wordmark" aria-label="Prolak, spol. s r. o.">
            <span className="pk-wordmark-main">PRO<em>LAK</em></span>
            <span className="pk-wordmark-sub">lakýrnictví &middot; Brno &middot; spol. s r. o.</span>
          </div>
          <a className="pk-hero-tel" href="tel:+420541000000">
            <span className="pk-hero-tel-label">Volejte lakovnu</span>
            <span className="pk-hero-tel-num">541 000 000</span>
          </a>
        </div>

        <div className="pk-hero-body">
          <p className="pk-hero-eyebrow">Průmyslová a zakázková lakovna</p>
          <h1 className="pk-hero-title">
            <span className="pk-line pk-line-1">Základ.</span>
            <span className="pk-line pk-line-2">Plnič.</span>
            <span className="pk-line pk-line-3">Vrchní&nbsp;lak.</span>
          </h1>
          <p className="pk-hero-lead">
            Tři vrstvy, které rozhodují o tom, jak dlouho váš díl vydrží a jak
            bude vypadat za deset let. V Brně je stříkáme, vypalujeme a měříme
            už přes dvacet let — od jednoho kusu po celé série.
          </p>
          <div className="pk-hero-actions">
            <a className="pk-btn pk-btn-solid" href="tel:+420541000000">Zavolat lakovnu</a>
            <a className="pk-btn pk-btn-line" href="mailto:poptavka@prolak.cz">Poslat poptávku</a>
          </div>
        </div>

        {/* Signature: řez lakovanou vrstvou — tři nánosy barvy přes celou šíři */}
        <div className="pk-coats" aria-hidden="true">
          <div className="pk-coat pk-coat-primer">
            <span className="pk-coat-tag">01 &middot; základ &middot; 60&nbsp;µm</span>
          </div>
          <div className="pk-coat pk-coat-filler">
            <span className="pk-coat-tag">02 &middot; plnič &middot; 120&nbsp;µm</span>
          </div>
          <div className="pk-coat pk-coat-top">
            <span className="pk-coat-tag">03 &middot; vrchní lak &middot; 40&nbsp;µm</span>
          </div>
        </div>
      </header>

      {/* ===================== SLUŽBY ===================== */}
      <section className="pk-section pk-services" aria-labelledby="sluzby-h">
        <div className="pk-section-head">
          <p className="pk-eyebrow">Co pro vás nalakujeme</p>
          <h2 id="sluzby-h" className="pk-h2">
            Od jednoho zábradlí po&nbsp;paletu ocelových konstrukcí
          </h2>
        </div>

        <div className="pk-service-grid">
          <article className="pk-card">
            <div className="pk-card-chip pk-chip-wet" aria-hidden="true"></div>
            <h3 className="pk-card-title">Mokré lakování</h3>
            <p className="pk-card-text">
              Stříkáme syntetické, epoxidové i polyuretanové systémy.
              Kabina 7&nbsp;&times;&nbsp;4&nbsp;m zvládne dílce do dvou tun —
              rámy strojů, svařence, brány i schodiště.
            </p>
            <p className="pk-card-meta">Odstíny dle RAL &middot; míchání na místě</p>
          </article>

          <article className="pk-card">
            <div className="pk-card-chip pk-chip-powder" aria-hidden="true"></div>
            <h3 className="pk-card-title">Vypalované povrchy</h3>
            <p className="pk-card-text">
              Vypalovací pec do 200&nbsp;°C pro tvrdé, otěruvzdorné povrchy.
              Ideální pro díly, které denně dostávají zabrat — technika,
              nábytkové kování, díly do exteriéru.
            </p>
            <p className="pk-card-meta">Mat, polomat i vysoký lesk</p>
          </article>

          <article className="pk-card">
            <div className="pk-card-chip pk-chip-prep" aria-hidden="true"></div>
            <h3 className="pk-card-title">Příprava povrchu</h3>
            <p className="pk-card-text">
              Odmaštění, tryskání a broušení před lakem. Špatně připravený
              povrch žádná barva nezachrání — proto ho děláme sami a ručíme
              za celý postup od plechu po finální vrstvu.
            </p>
            <p className="pk-card-meta">Tryskání ocelovou drtí Sa&nbsp;2,5</p>
          </article>

          <article className="pk-card">
            <div className="pk-card-chip pk-chip-series" aria-hidden="true"></div>
            <h3 className="pk-card-title">Sériové zakázky</h3>
            <p className="pk-card-text">
              Opakovaná výroba pro strojírny a zámečnictví z Brna a okolí.
              Domluvíme takt, hlídáme tloušťku vrstvy měřením a dodáváme
              s protokolem — vaše linka nečeká.
            </p>
            <p className="pk-card-meta">Svoz a rozvoz po Jihomoravském kraji</p>
          </article>
        </div>

        <div className="pk-ral-strip" role="list" aria-label="Nejčastěji stříkané odstíny RAL">
          <span className="pk-ral-label">Nejčastěji na pistoli:</span>
          <span className="pk-ral" role="listitem"><i style={{ background: "#383e42" }}></i>RAL 7016</span>
          <span className="pk-ral" role="listitem"><i style={{ background: "#f6f6f6", border: "1px solid #d8d3c8" }}></i>RAL 9016</span>
          <span className="pk-ral" role="listitem"><i style={{ background: "#a52019" }}></i>RAL 3003</span>
          <span className="pk-ral" role="listitem"><i style={{ background: "#f3a505" }}></i>RAL 1003</span>
          <span className="pk-ral" role="listitem"><i style={{ background: "#0e4c8c" }}></i>RAL 5010</span>
        </div>
      </section>

      {/* ===================== DŮVĚRA / JAK PRACUJEME ===================== */}
      <section className="pk-section pk-trust" aria-labelledby="duvera-h">
        <div className="pk-trust-inner">
          <div className="pk-trust-copy">
            <p className="pk-eyebrow pk-eyebrow-light">Proč Prolak</p>
            <h2 id="duvera-h" className="pk-h2 pk-h2-light">
              Tloušťku vrstvy neodhadujeme. Měříme ji.
            </h2>
            <p className="pk-trust-text">
              Každou zakázku kontrolujeme magnetickým tloušťkoměrem a na přání
              dodáme měřicí protokol. Když řekneme 120 mikronů, je to
              120 mikronů — na hraně svařence stejně jako uprostřed plochy.
            </p>
            <ul className="pk-facts">
              <li className="pk-fact">
                <span className="pk-fact-num">22&nbsp;let</span>
                <span className="pk-fact-desc">lakujeme v Brně pro strojírny, zámečníky i domácnosti</span>
              </li>
              <li className="pk-fact">
                <span className="pk-fact-num">2&nbsp;000&nbsp;kg</span>
                <span className="pk-fact-desc">nejtěžší dílec, který zvedne jeřáb v naší kabině</span>
              </li>
              <li className="pk-fact">
                <span className="pk-fact-num">5&nbsp;dní</span>
                <span className="pk-fact-desc">běžný termín od návozu dílů po expedici</span>
              </li>
            </ul>
          </div>

          <div className="pk-quotes">
            <figure className="pk-quote">
              <blockquote>
                „Vozíme k nim rámy dopravníků každý měsíc. Vrstva sedí,
                protokol přijde s fakturou a termín drží i před Vánoci.“
              </blockquote>
              <figcaption>vedoucí výroby, strojírna Brno-Slatina</figcaption>
            </figure>
            <figure className="pk-quote">
              <blockquote>
                „Nechal jsem si nalakovat kovanou bránu. Poradili odstín,
                vysvětlili, proč potřebuje zinkový základ, a za týden visela.“
              </blockquote>
              <figcaption>zákazník z Bystrce, brána a plotové pole</figcaption>
            </figure>
            <div className="pk-badge">
              <span className="pk-badge-num">±&nbsp;5&nbsp;µm</span>
              <span className="pk-badge-txt">tolerance, ve které se u nás pohybuje měřená tloušťka vrstvy</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
