export default function Page() {
  return (
    <main className="kc">
      {/* ===== HERO ===== */}
      <header className="kc-hero">
        <div className="kc-hero-inner">
          <div className="kc-brand" aria-label="Pavel Kulesa – Condor, klempířství a pokrývačství">
            <span className="kc-brand-name">KULESA</span>
            <span className="kc-brand-sub">CONDOR · klempířství &amp; pokrývačství · od 1990</span>
          </div>

          <h1 className="kc-hero-title">
            <span className="kc-line kc-line-1">Střecha</span>
            <span className="kc-line kc-line-2">se pozná</span>
            <span className="kc-line kc-line-3">na&nbsp;detailu<span className="kc-dot">.</span></span>
          </h1>

          <p className="kc-hero-lead">
            Žlaby, oplechování, krytina i letovaná měď na památkách.
            Pokrývačská a klempířská firma z&nbsp;Ústí nad Labem —
            přes 30&nbsp;let řemesla, které nešidíme.
          </p>

          <div className="kc-hero-facts" role="list">
            <span role="listitem">Ústí n.&nbsp;L. · Děčín · Teplice · Litoměřice · Praha</span>
            <span role="listitem">Rozpočet zdarma</span>
            <span role="listitem">Titanzinek · měď · pozink · hliník</span>
          </div>
        </div>

        {/* Signature: falcovaná krytina — svislé „stojaté drážky" plechové střechy */}
        <div className="kc-seams" aria-hidden="true">
          <i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i />
        </div>
        {/* hřeben střechy */}
        <div className="kc-ridge" aria-hidden="true" />
      </header>

      {/* ===== SEKCE 1: ŘEMESLO / SLUŽBY ===== */}
      <section className="kc-section kc-work" aria-labelledby="prace">
        <div className="kc-section-head">
          <p className="kc-eyebrow">Co pro vás uděláme</p>
          <h2 id="prace">Dvě řemesla, jedna střecha</h2>
          <p className="kc-section-lead">
            Klempíř a pokrývač patří k&nbsp;sobě. My děláme obojí —
            takže se detaily na vaší střeše potkají přesně tam, kde mají.
          </p>
        </div>

        <div className="kc-trades">
          <article className="kc-trade">
            <div className="kc-trade-mark" aria-hidden="true">
              {/* žlab / falc — klempířina */}
              <svg viewBox="0 0 64 40" width="64" height="40" fill="none">
                <path d="M4 6 L4 26 Q4 34 12 34 L52 34 Q60 34 60 26 L60 6" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                <path d="M14 6 L14 22" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
              </svg>
            </div>
            <h3>Klempířství</h3>
            <p>
              Plechařina, jak se jí říká. Vyrábíme a montujeme vše,
              co drží vodu tam, kde má být:
            </p>
            <ul>
              <li>Okapy a svody — montáž i čištění</li>
              <li>Parapety na míru, včetně atypických (viz Městské lázně Ústí n.&nbsp;L.)</li>
              <li>Lemování, úžlabí, oplechování říms a závětrných lišt</li>
              <li>Oplechování komínů, ventilací a prostupů</li>
              <li>Střešní světlíky, výlezy, stříšky na komíny</li>
              <li>Nátěry klempířských a kovových prvků</li>
            </ul>
          </article>

          <article className="kc-trade">
            <div className="kc-trade-mark" aria-hidden="true">
              {/* sedlová střecha s taškami — pokrývačství */}
              <svg viewBox="0 0 64 40" width="64" height="40" fill="none">
                <path d="M4 30 L32 6 L60 30" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M18 30 L32 18 L46 30" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h3>Pokrývačství</h3>
            <p>
              Krytiny pokládáme jen od renomovaných výrobců —
              střecha je základ domu a má vydržet desítky let:
            </p>
            <ul>
              <li>Ploché střechy — asfaltové a SBS modifikované pásy</li>
              <li>Šikmé střechy — plech, tašky, kanadský šindel, vláknocement</li>
              <li>Opravy a nátěry střech</li>
              <li>Odstraňování sněhu ze střech</li>
              <li>Odvoz a likvidace staré krytiny — samozřejmost</li>
            </ul>
          </article>
        </div>

        <p className="kc-materials" aria-label="Materiály, se kterými pracujeme">
          <span className="kc-mat kc-mat-tz">titanzinek</span>
          <span className="kc-mat kc-mat-cu">měď</span>
          <span className="kc-mat kc-mat-zn">pozink</span>
          <span className="kc-mat kc-mat-al">hliník</span>
        </p>
      </section>

      {/* ===== SEKCE 2: DŮVĚRA / O NÁS ===== */}
      <section className="kc-section kc-trust" aria-labelledby="remeslo">
        <div className="kc-trust-grid">
          <div className="kc-trust-copy">
            <p className="kc-eyebrow kc-eyebrow-light">Proč Kulesa – Condor</p>
            <h2 id="remeslo">Řemeslo nešidíme</h2>
            <p>
              Nové technologie umí střechu urychlit, ale kvalitní práci
              s&nbsp;dlouhou životností poznáte na první pohled podle detailů.
              Některé staletími osvědčené postupy — třeba <strong>letování
              měděných a pozinkovaných prvků</strong> na památkově chráněných
              budovách — moderní technika dodnes nenahradila. My je ovládáme
              a děláme je i pro běžné zákazníky.
            </p>
            <p>
              Firmu založil Pavel Kulesa v&nbsp;Ústí nad Labem v&nbsp;roce 1990.
              Od té doby jsme pokrývali průmyslové haly, památky, činžáky
              i&nbsp;rodinné domy po celém Ústecku a v&nbsp;Praze.
            </p>
          </div>

          <ol className="kc-reasons">
            <li>
              <h3>Perfektní řemeslo od návrhu po montáž</h3>
              <p>
                Pomůžeme s&nbsp;výběrem materiálu, zajistíme dopravu i montáž.
                Vezmeme celou střechu stejně rádi jako jeden žlab nebo parapet.
              </p>
            </li>
            <li>
              <h3>Rozpočet zdarma, cena bez překvapení</h3>
              <p>
                Cenovou nabídku vypracujeme zdarma a předem —
                víte, za co platíte, dřív než začneme.
              </p>
            </li>
            <li>
              <h3>Pomoc s financováním</h3>
              <p>
                Když je střecha akutní a rozpočet napjatý, pomůžeme
                vám vyřídit úvěr nebo půjčku na realizaci zakázky.
              </p>
            </li>
          </ol>
        </div>

        <p className="kc-since" aria-hidden="true">1990</p>
      </section>
    </main>
  );
}
