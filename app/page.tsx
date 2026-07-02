export default function Page() {
  return (
    <main className="pf">
      {/* ===== HERO ===== */}
      <header className="pf-hero">
        <div className="pf-hero-top">
          <div className="pf-wordmark" aria-label="Labík průmyslové podlahy">
            <span className="pf-wordmark-main">LABÍK</span>
            <span className="pf-wordmark-sub">průmyslové podlahy · Pardubice</span>
          </div>
          <a className="pf-hero-tel" href="tel:+420466000000">Zavolat</a>
        </div>

        <div className="pf-hero-body">
          <p className="pf-eyebrow">Lité stěrky · epoxid · polyuretan</p>
          <h1 className="pf-h1">
            <span className="pf-h1-line pf-h1-line-1">Podlaha, po které</span>
            <span className="pf-h1-line pf-h1-line-2">jezdí <em>vysokozdvižný</em></span>
            <span className="pf-h1-line pf-h1-line-3">vozík dvacet let.</span>
          </h1>
          <p className="pf-lead">
            Lijeme a strojně hladíme průmyslové podlahy pro haly, sklady a provozy
            v Pardubicích a okolí. Beton, epoxid, polyuretan — vybereme skladbu
            podle toho, co po podlaze pojede a co se na ni vylije.
          </p>
          <div className="pf-hero-cta">
            <a className="pf-btn pf-btn-solid" href="tel:+420466000000">Zavolat a probrat halu</a>
            <a className="pf-btn pf-btn-ghost" href="#sluzby">Co lijeme</a>
          </div>
        </div>

        {/* signature: řez podlahou — vrstvy skladby jako grafický prvek */}
        <div className="pf-cut" aria-hidden="true">
          <div className="pf-cut-layer pf-cut-nater">
            <span className="pf-cut-label">finální stěrka · 3 mm</span>
          </div>
          <div className="pf-cut-layer pf-cut-penetrace">
            <span className="pf-cut-label">penetrace</span>
          </div>
          <div className="pf-cut-layer pf-cut-beton">
            <span className="pf-cut-label">drátkobeton · 150 mm</span>
          </div>
          <div className="pf-cut-layer pf-cut-podklad">
            <span className="pf-cut-label">hutněný podklad</span>
          </div>
        </div>
      </header>

      {/* ===== SLUŽBY ===== */}
      <section className="pf-section" id="sluzby" aria-labelledby="sluzby-h">
        <div className="pf-section-head">
          <h2 className="pf-h2" id="sluzby-h">Co lijeme a hladíme</h2>
          <p className="pf-section-note">
            Každá podlaha je jiná zátěž. Řekněte nám, co ve vaší hale jezdí,
            stojí a kape — navrhneme skladbu na míru.
          </p>
        </div>

        <div className="pf-services">
          <article className="pf-service">
            <div className="pf-service-chip pf-chip-beton" aria-hidden="true"></div>
            <h3 className="pf-h3">Drátkobetonové desky</h3>
            <p>
              Nosná podlaha pro sklady a výrobu. Laserem srovnaná rovinnost,
              strojně hlazený povrch, vsyp proti obrusu. Snese regály
              i paletové vozíky v třísměnném provozu.
            </p>
            <p className="pf-service-meta">Haly · sklady · logistika</p>
          </article>

          <article className="pf-service">
            <div className="pf-service-chip pf-chip-epoxid" aria-hidden="true"></div>
            <h3 className="pf-h3">Epoxidové stěrky</h3>
            <p>
              Bezespará litá vrstva 2–4 mm. Odolá oleji, kyselinám
              i čisticí chemii, umyje se tlakovou vodou. Standard
              pro potravinářství, autoservisy a chemické provozy.
            </p>
            <p className="pf-service-meta">Potravinářství · servisy · chemie</p>
          </article>

          <article className="pf-service">
            <div className="pf-service-chip pf-chip-pu" aria-hidden="true"></div>
            <h3 className="pf-h3">Polyuretanové podlahy</h3>
            <p>
              Pružnější než epoxid, tlumí kročejový hluk a přemostí
              drobné trhliny v podkladu. Vhodné do dílen, garáží
              a prostor s teplotními výkyvy.
            </p>
            <p className="pf-service-meta">Dílny · garáže · mrazírny</p>
          </article>

          <article className="pf-service">
            <div className="pf-service-chip pf-chip-oprava" aria-hidden="true"></div>
            <h3 className="pf-h3">Opravy a značení</h3>
            <p>
              Sanace trhlin a vydrolených spár, výměna dilatačních profilů,
              nové vodorovné značení uliček a bezpečnostních zón.
              Většinu oprav zvládneme bez odstávky celé haly.
            </p>
            <p className="pf-service-meta">Sanace · dilatace · značení zón</p>
          </article>
        </div>
      </section>

      {/* ===== DŮVĚRA ===== */}
      <section className="pf-section pf-section-dark" aria-labelledby="duvera-h">
        <div className="pf-section-head">
          <h2 className="pf-h2" id="duvera-h">Proč nám haly svěřují podlahy</h2>
          <p className="pf-section-note pf-section-note-light">
            Jsme z Pardubic. Na stavbu dojedeme do hodiny, na reklamaci ještě rychleji.
          </p>
        </div>

        <div className="pf-trust">
          <div className="pf-fact">
            <span className="pf-fact-num">25 let</span>
            <p className="pf-fact-text">lijeme podlahy v Pardubickém kraji — od malých dílen po logistické areály.</p>
          </div>
          <div className="pf-fact">
            <span className="pf-fact-num">±2 mm</span>
            <p className="pf-fact-text">rovinnost na 2metrové lati. Měříme laserem a protokol dostanete k předání.</p>
          </div>
          <div className="pf-fact">
            <span className="pf-fact-num">48 h</span>
            <p className="pf-fact-text">po vylití epoxidu můžete po podlaze chodit, do týdne plný provoz vozíků.</p>
          </div>
        </div>

        <div className="pf-quotes">
          <figure className="pf-quote">
            <blockquote>
              „Vylili nám 1 800 m² skladu o víkendu, v pondělí ráno jsme naváželi
              regály. Rovinnost seděla na milimetry, žádné dolaďování.“
            </blockquote>
            <figcaption>— vedoucí skladu, logistický areál Pardubice-Černá za Bory</figcaption>
          </figure>
          <figure className="pf-quote">
            <blockquote>
              „Starou popraskanou dlažbu v servisu nahradili epoxidem za čtyři dny.
              Olej dnes stačí setřít hadrem, spáry žádné.“
            </blockquote>
            <figcaption>— majitel autoservisu, Chrudim</figcaption>
          </figure>
        </div>
      </section>
    </main>
  );
}
