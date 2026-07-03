export default function Page() {
  return (
    <main className="pl-main">
      {/* ===================== HERO ===================== */}
      <header className="pl-hero">
        <div className="pl-hero-top">
          <span className="pl-wordmark" aria-label="Prolingua">
            Pro<em>lingua</em>
            <span className="pl-wordmark-sub">Agentura · Hradec Králové</span>
          </span>
          <a className="pl-hero-tel" href="tel:+420495000000">
            +420 495 000 000
          </a>
        </div>

        <div className="pl-hero-body">
          <p className="pl-hero-eyebrow">Překlady · Tlumočení · Jazyková výuka</p>

          {/* Signature: dvojjazyčný „zrcadlový" titulek — originál a překlad na jednom listu */}
          <h1 className="pl-hero-title">
            <span className="pl-line pl-line-src">
              <span className="pl-line-tag" aria-hidden="true">CS</span>
              <span className="pl-line-text">Rozumíme si.</span>
            </span>
            <span className="pl-line pl-line-rule" aria-hidden="true">
              <span className="pl-rule"></span>
              <span className="pl-rule-note">překlad s doložkou přesnosti</span>
              <span className="pl-rule"></span>
            </span>
            <span className="pl-line pl-line-dst">
              <span className="pl-line-tag" aria-hidden="true">EN</span>
              <span className="pl-line-text">We understand each other.</span>
            </span>
          </h1>

          <p className="pl-hero-lead">
            Přeložíme vaše smlouvy, technické manuály i rodné listy — se soudní
            doložkou, se zachováním grafiky, v termínu. V Hradci Králové už přes
            dvacet let.
          </p>

          <div className="pl-hero-actions">
            <a className="pl-btn pl-btn-solid" href="mailto:preklady@prolingua.cz">
              Poslat dokument k nacenění
            </a>
            <a className="pl-btn pl-btn-ghost" href="tel:+420495000000">
              Zavolat
            </a>
          </div>
        </div>

        {/* Běžící pás jazykových párů — vizuální vernakulár překladatelské kanceláře */}
        <div className="pl-pairs" aria-hidden="true">
          <span>CS ⇄ EN</span>
          <span>CS ⇄ DE</span>
          <span>CS ⇄ PL</span>
          <span>CS ⇄ FR</span>
          <span>CS ⇄ RU</span>
          <span>CS ⇄ UK</span>
          <span>CS ⇄ ES</span>
          <span>CS ⇄ IT</span>
        </div>
      </header>

      {/* ===================== SLUŽBY ===================== */}
      <section className="pl-services" aria-labelledby="sluzby-h">
        <div className="pl-section-head">
          <h2 id="sluzby-h">Co pro vás přeložíme a zařídíme</h2>
          <p>
            Tři služby, jedna zásada: dostanete dokument, který můžete rovnou
            použít — na úřadě, ve výrobě i ve třídě.
          </p>
        </div>

        <div className="pl-service-grid">
          <article className="pl-card">
            <div className="pl-card-glyph" aria-hidden="true">PDF → PDF</div>
            <h3>Překlady s grafikou</h3>
            <p>
              Máte jen PDF s obrázky, grafy a schématy? Vrátíme vám stejný
              dokument „překlopený" do cílového jazyka — vlastní软 nástroje nám
              dovolí zachovat sazbu, tabulky i popisky bez drahého grafického
              studia. Ideální pro manuály o stovkách stran, katalogové listy a
              technické zprávy.
            </p>
            <ul>
              <li>Návody a technická dokumentace</li>
              <li>Katalogové listy a reklamní materiály</li>
              <li>Elektronické obsahy a hypertextové odkazy</li>
            </ul>
          </article>

          <article className="pl-card">
            <div className="pl-card-glyph" aria-hidden="true">§ + razítko</div>
            <h3>Soudní překlady</h3>
            <p>
              Překlad s doložkou soudního tlumočníka pro úřady, soudy, notáře,
              matriky i pojišťovny — v Česku i v zahraničí. Svážeme, orazítkujeme,
              připravíme k převzetí.
            </p>
            <ul>
              <li>Rodné a oddací listy, povolení ke sňatku</li>
              <li>Diplomy a vysvědčení</li>
              <li>Výpisy z rejstříků, rozsudky</li>
            </ul>
          </article>

          <article className="pl-card">
            <div className="pl-card-glyph" aria-hidden="true">A1 → C2</div>
            <h3>Tlumočení a výuka</h3>
            <p>
              Tlumočíme obchodní jednání, audity i svatby. Firemní kurzy
              angličtiny a němčiny vedeme přímo u vás nebo u nás v centru
              Hradce — s lektory, kteří jazyk denně používají v praxi.
            </p>
            <ul>
              <li>Konsekutivní tlumočení jednání a školení</li>
              <li>Firemní i individuální kurzy</li>
              <li>Příprava na zkoušky a pohovory</li>
            </ul>
          </article>
        </div>
      </section>

      {/* ===================== DŮVĚRA / JAK PRACUJEME ===================== */}
      <section className="pl-trust" aria-labelledby="duvera-h">
        <div className="pl-trust-inner">
          <div className="pl-trust-copy">
            <h2 id="duvera-h">Proč firmám z Hradce a okolí stačí jedna agentura</h2>
            <p>
              Nejsme zprostředkovatelna. Každou zakázku vede konkrétní člověk,
              který zná váš obor a hlídá terminologii od první strany po
              korekturu. Před finálním PDF dostanete překlad k odborné kontrole —
              takže se do tisku nedostane nic, co jste neschválili.
            </p>

            <dl className="pl-facts">
              <div className="pl-fact">
                <dt>20+ let</dt>
                <dd>překládáme pro východočeské strojírny, úřady i rodiny</dd>
              </div>
              <div className="pl-fact">
                <dt>Vlastní nástroje</dt>
                <dd>vícestupňové zpracování PDF, které jinde nedostanete</dd>
              </div>
              <div className="pl-fact">
                <dt>Osobně v HK</dt>
                <dd>soudní překlad si vyzvednete u nás v kanceláři</dd>
              </div>
            </dl>
          </div>

          <figure className="pl-quote">
            <blockquote>
              „Manuál k lince měl 340 stran, samé výkresy a tabulky. Dostali
              jsme ho zpátky německy — a vypadal úplně stejně jako originál.
              Ušetřili nám celé grafické studio."
            </blockquote>
            <figcaption>vedoucí výroby, strojírenská firma z Hradecka</figcaption>

            <blockquote>
              „Oddací list z Ukrajiny jsem potřebovala pro matriku do tří dnů.
              Ve středu jsem volala, v pátek jsem si nesla překlad s razítkem."
            </blockquote>
            <figcaption>klientka, soudní překlad UK → CS</figcaption>
          </figure>
        </div>
      </section>
    </main>
  );
}
