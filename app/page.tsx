// Climacool, s.r.o. — vzduchotechnika, chlazení a klimatizace, Brno
// Koncept: „řízené proudění vzduchu" — signature prvkem je animovaný diagram
// proudnic (SVG), odvozený z reálného řemesla firmy: vedení vzduchu potrubím,
// lamely výustek, teplotní spád. Paleta: chladná ocelová modř + mrazivá cyan
// na tmavém podkladu strojovny. Žádná fotka — čistě typografický statement.

export default function Page() {
  return (
    <main className="cc-page">
      {/* ===================== HERO ===================== */}
      <header className="cc-hero">
        <nav className="cc-nav" aria-label="Hlavní navigace">
          <a href="#" className="cc-wordmark" aria-label="Climacool, úvod">
            CLIMA<span className="cc-wordmark-cool">COOL</span>
            <span className="cc-wordmark-sub">vzduchotechnika · Brno</span>
          </a>
          <div className="cc-nav-links">
            <a href="#sluzby">Co děláme</a>
            <a href="#reference">Kde chladíme</a>
            <a href="tel:+420541000000" className="cc-nav-cta">
              Zavolat technikovi
            </a>
          </div>
        </nav>

        <div className="cc-hero-grid">
          <div className="cc-hero-copy">
            <p className="cc-eyebrow">
              <span className="cc-eyebrow-dot" aria-hidden="true" />
              Montáže a servis v Brně a okolí od roku 1998
            </p>
            <h1 className="cc-h1">
              Vzduch, který
              <br />
              <em>někdo řídí.</em>
            </h1>
            <p className="cc-lede">
              Navrhujeme, montujeme a servisujeme vzduchotechniku, klimatizace
              a průmyslové chlazení — od kanceláře v centru Brna po mrazírnu
              supermarketu. Přijedeme, změříme, spočítáme výkon a řekneme vám
              cenu, která platí.
            </p>
            <div className="cc-hero-actions">
              <a href="tel:+420541000000" className="cc-btn cc-btn-primary">
                Zavolat: 541 000 000
              </a>
              <a href="#sluzby" className="cc-btn cc-btn-ghost">
                Prohlédnout služby
              </a>
            </div>
            <dl className="cc-hero-facts">
              <div>
                <dt>Servisní zásah</dt>
                <dd>do 24 h v Brně</dd>
              </div>
              <div>
                <dt>Chladivo</dt>
                <dd>certifikace F-plyny</dd>
              </div>
              <div>
                <dt>Rozsah</dt>
                <dd>2 kW – 400 kW</dd>
              </div>
            </dl>
          </div>

          {/* Signature: diagram proudnic — vedení vzduchu strojovnou */}
          <div className="cc-hero-art" aria-hidden="true">
            <svg
              className="cc-flow"
              viewBox="0 0 520 560"
              fill="none"
              role="presentation"
            >
              {/* potrubí — svislý kanál */}
              <rect x="228" y="0" width="64" height="560" className="cc-duct" />
              <rect x="228" y="0" width="64" height="560" className="cc-duct-edge" />
              {/* lamely výustky */}
              <g className="cc-louvres">
                <rect x="214" y="238" width="92" height="6" rx="3" />
                <rect x="214" y="258" width="92" height="6" rx="3" />
                <rect x="214" y="278" width="92" height="6" rx="3" />
                <rect x="214" y="298" width="92" height="6" rx="3" />
              </g>
              {/* proudnice — vzduch se ohýbá kolem výustky */}
              <g className="cc-streams">
                <path className="cc-stream s1" d="M260 -20 C 260 120, 120 200, 60 300 S 40 480, 90 580" />
                <path className="cc-stream s2" d="M260 -20 C 260 140, 180 220, 150 320 S 140 480, 175 580" />
                <path className="cc-stream s3" d="M260 -20 C 260 160, 250 260, 258 360 S 262 480, 260 580" />
                <path className="cc-stream s4" d="M260 -20 C 260 140, 340 220, 370 320 S 380 480, 345 580" />
                <path className="cc-stream s5" d="M260 -20 C 260 120, 400 200, 460 300 S 480 480, 430 580" />
              </g>
              {/* teplotní spád — vstup / výstup */}
              <g className="cc-temp">
                <text x="316" y="48" className="cc-temp-in">+32 °C</text>
                <text x="316" y="532" className="cc-temp-out">+21 °C</text>
              </g>
            </svg>
          </div>
        </div>

        <div className="cc-hero-strip" aria-hidden="true">
          <span>SÁNÍ</span>
          <span className="cc-strip-line" />
          <span>FILTRACE</span>
          <span className="cc-strip-line" />
          <span>CHLAZENÍ</span>
          <span className="cc-strip-line" />
          <span>ROZVOD</span>
          <span className="cc-strip-line" />
          <span>VÝUSTKA</span>
        </div>
      </header>

      {/* ===================== SLUŽBY ===================== */}
      <section className="cc-section cc-services" id="sluzby" aria-labelledby="sluzby-h">
        <div className="cc-section-head">
          <p className="cc-eyebrow cc-eyebrow-dark">
            <span className="cc-eyebrow-dot" aria-hidden="true" />
            Tři řemesla pod jednou střechou
          </p>
          <h2 className="cc-h2" id="sluzby-h">
            Od návrhu potrubí po servis kompresoru
          </h2>
          <p className="cc-section-lede">
            Neprodáváme krabice. Každou zakázku začínáme výpočtem tepelné
            zátěže a končíme protokolem o uvedení do provozu.
          </p>
        </div>

        <div className="cc-cards">
          <article className="cc-card">
            <div className="cc-card-tag">Byty · kanceláře · ordinace</div>
            <h3>Klimatizace</h3>
            <p>
              Nástěnné a kazetové split jednotky, multi-splity i VRV systémy
              pro celé budovy. Vybereme výkon podle místnosti, ne podle
              katalogu — a namontujeme tak, aby vás jednotka nefoukala do zad.
            </p>
            <ul className="cc-card-list">
              <li>Split a multi-split do bytů a RD</li>
              <li>Kazetové jednotky do podhledů kanceláří</li>
              <li>VRV systémy pro administrativní budovy</li>
            </ul>
          </article>

          <article className="cc-card cc-card-accent">
            <div className="cc-card-tag">Gastro · sklady · obchod</div>
            <h3>Průmyslové chlazení</h3>
            <p>
              Technologie chladíren, mrazíren a vinných sklípků. Kondenzační
              jednotky, kompresory a regulace, na které se dá spolehnout,
              i když venku drží třicítky celý týden.
            </p>
            <ul className="cc-card-list">
              <li>Chladírny a mrazírny pro gastro provozy</li>
              <li>Chlazení vinných sklípků na stálých 12 °C</li>
              <li>Technologie pro supermarkety a sklady</li>
            </ul>
          </article>

          <article className="cc-card">
            <div className="cc-card-tag">Novostavby · rekonstrukce</div>
            <h3>Vzduchotechnika</h3>
            <p>
              Rozvody čerstvého vzduchu, rekuperace a odsávání. Navrhneme
              trasy potrubí tak, aby se vešly do podhledu — a aby o nich
              pak nikdo nevěděl, dokud se nenadechne.
            </p>
            <ul className="cc-card-list">
              <li>Větrání s rekuperací tepla</li>
              <li>Odsávání kuchyní a provozů</li>
              <li>Pravidelné čištění a výměny filtrů</li>
            </ul>
          </article>
        </div>

        <div className="cc-service-note">
          <p>
            <strong>Servis do 24 hodin.</strong> Klimatizaci nebo chladicí box
            vám v Brně a do 50 km okolí zprovozníme zpravidla do druhého dne.
            Držíme skladem běžné kompresory, ventilátory a řídicí jednotky.
          </p>
        </div>
      </section>

      {/* ===================== DŮVĚRA / REFERENCE ===================== */}
      <section className="cc-section cc-trust" id="reference" aria-labelledby="reference-h">
        <div className="cc-trust-grid">
          <div className="cc-trust-copy">
            <p className="cc-eyebrow">
              <span className="cc-eyebrow-dot" aria-hidden="true" />
              Brněnská firma, brněnské reference
            </p>
            <h2 className="cc-h2" id="reference-h">
              Poznáte nás podle toho,
              <br />
              že o nás nevíte.
            </h2>
            <p className="cc-section-lede cc-section-lede-light">
              Dobrá vzduchotechnika je slyšet jen tehdy, když nefunguje.
              Za pětadvacet let jsme v Brně a na jižní Moravě osadili stovky
              jednotek — od jedné splitky v paneláku po strojovnu hypermarketu.
              Většinu zákazníků k nám přivedl někdo, komu už léta chladíme.
            </p>
            <dl className="cc-numbers">
              <div>
                <dt>Let v oboru</dt>
                <dd>25+</dd>
              </div>
              <div>
                <dt>Jednotek v servisu</dt>
                <dd>600+</dd>
              </div>
              <div>
                <dt>Dojezd po Brně</dt>
                <dd>&lt; 24 h</dd>
              </div>
            </dl>
          </div>

          <div className="cc-quotes">
            <figure className="cc-quote">
              <blockquote>
                „Mrazírnu nám osadili během odstávky mezi Vánoci a Silvestrem,
                abychom nepřišli o jediný prodejní den. Od té doby drží −22 °C
                bez jediného výpadku."
              </blockquote>
              <figcaption>
                <strong>Vedoucí provozu</strong>
                <span>supermarket, Brno-Líšeň</span>
              </figcaption>
            </figure>
            <figure className="cc-quote">
              <blockquote>
                „Ve sklípku potřebuji celý rok stejnou teplotu a vlhkost.
                Climacool navrhl chlazení, které je ve sklepě prakticky
                neslyšet — a víno to pozná."
              </blockquote>
              <figcaption>
                <strong>Vinař</strong>
                <span>vinný sklep, Židlochovice</span>
              </figcaption>
            </figure>
            <figure className="cc-quote">
              <blockquote>
                „Kazetové jednotky do podhledu namontovali za víkend,
                v pondělí jsme normálně ordinovali. Jednou ročně přijedou,
                vyčistí filtry a je klid."
              </blockquote>
              <figcaption>
                <strong>Lékařka</strong>
                <span>ordinace, Brno-střed</span>
              </figcaption>
            </figure>
          </div>
        </div>
      </section>
    </main>
  );
}
