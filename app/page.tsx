export default function Page() {
  return (
    <main className="dp">
      {/* ===================== HERO ===================== */}
      <section className="hero" aria-label="DERASPOL – deratizace Olomouc">
        <header className="hero-top">
          <div className="wordmark" aria-label="DERASPOL">
            <span className="wordmark-main">DERA<b>SPOL</b></span>
            <span className="wordmark-sub">deratizace · dezinsekce · dezinfekce</span>
          </div>
          <a className="hero-phone" href="tel:+420585000000">
            <span className="hero-phone-label">Zásah do 24 hodin</span>
            <span className="hero-phone-num">585 000 000</span>
          </a>
        </header>

        <div className="hero-body">
          <p className="hero-eyebrow">
            <span className="tag-3d">3D</span> ochrana objektů — Olomouc a okolí
          </p>
          <h1 className="hero-title">
            <span className="line l1">Hlodavci ven.</span>
            <span className="line l2">Hmyz ven.</span>
            <span className="line l3">Klid <em>dovnitř.</em></span>
          </h1>
          <p className="hero-lead">
            Profesionální deratizace pro bytové domy, provozy i&nbsp;domácnosti
            v&nbsp;Olomouckém kraji. Přijedeme, najdeme cesty škůdců, zasáhneme
            a&nbsp;objekt zajistíme, aby se nevrátili.
          </p>
          <div className="hero-actions">
            <a className="btn btn-solid" href="tel:+420585000000">Zavolat hned</a>
            <a className="btn btn-ghost" href="#sluzby">Co řešíme</a>
          </div>
        </div>

        {/* Signature: monitorovací mřížka nástrahových stanic — jak technik mapuje objekt */}
        <div className="grid-map" aria-hidden="true">
          <div className="grid-map-inner">
            <span className="station s1"><i /></span>
            <span className="station s2"><i /></span>
            <span className="station s3 hit"><i /></span>
            <span className="station s4"><i /></span>
            <span className="station s5 hit"><i /></span>
            <span className="station s6"><i /></span>
            <span className="trail" />
          </div>
          <p className="grid-map-caption">Monitorovací plán objektu — nástrahové staniště č.&nbsp;3 a&nbsp;5: záchyt</p>
        </div>
      </section>

      {/* ===================== SLUŽBY ===================== */}
      <section className="sluzby" id="sluzby" aria-label="Služby">
        <div className="section-head">
          <h2>Tři zásahy, jeden cíl:<br />objekt bez škůdců</h2>
          <p>
            Říká se tomu 3D — deratizace, dezinsekce, dezinfekce. Pro vás to znamená,
            že jeden telefonát vyřeší hlodavce, hmyz i&nbsp;následnou hygienu prostoru.
          </p>
        </div>

        <div className="cards">
          <article className="card">
            <div className="card-code" aria-hidden="true">DER</div>
            <h3>Deratizace</h3>
            <p className="card-target">potkani · myši · krysy</p>
            <p>
              Zmapujeme cesty hlodavců, rozmístíme uzamykatelné nástrahové staniště
              a&nbsp;při kontrolách vyhodnotíme záchyt. Ve sklepích, kanalizaci,
              skladech i&nbsp;na půdách.
            </p>
            <ul>
              <li>Bezpečné pro děti a&nbsp;domácí zvířata</li>
              <li>Protokol o&nbsp;zásahu pro SVJ a&nbsp;hygienu</li>
            </ul>
          </article>

          <article className="card">
            <div className="card-code" aria-hidden="true">DEZ</div>
            <h3>Dezinsekce</h3>
            <p className="card-target">štěnice · švábi · vosy · mravenci</p>
            <p>
              Štěnice v&nbsp;bytě nebo vosí hnízdo pod střechou? Zasáhneme postřikem,
              gelem nebo aerosolem podle druhu hmyzu — a&nbsp;řekneme vám přesně,
              jak prostor připravit a&nbsp;kdy se vrátit.
            </p>
            <ul>
              <li>Diskrétní zásah v&nbsp;bytových domech</li>
              <li>Opakovaná kontrola u&nbsp;štěnic v&nbsp;ceně</li>
            </ul>
          </article>

          <article className="card">
            <div className="card-code" aria-hidden="true">DEF</div>
            <h3>Dezinfekce</h3>
            <p className="card-target">plísně · bakterie · viry</p>
            <p>
              Po zásahu, po havárii vody nebo po vyklizení bytu. Ošetříme povrchy
              certifikovanými prostředky a&nbsp;prostor vrátíme do&nbsp;hygienicky
              bezpečného stavu.
            </p>
            <ul>
              <li>Sklepy, výtahové šachty, kontejnerová stání</li>
              <li>Potravinářské provozy dle HACCP</li>
            </ul>
          </article>
        </div>
      </section>

      {/* ===================== DŮVĚRA ===================== */}
      <section className="duvera" aria-label="Proč DERASPOL">
        <div className="duvera-inner">
          <div className="duvera-text">
            <h2>Známe olomoucké sklepy<br />líp než potkani</h2>
            <p>
              DERASPOL působí v&nbsp;Olomouci a&nbsp;okolí — od&nbsp;historického
              centra přes sídliště na&nbsp;Nových Sadech až po&nbsp;provozy
              v&nbsp;Holici a&nbsp;Hodolanech. Víme, kudy vedou staré kanalizační
              trasy pod městem a&nbsp;kde se hlodavci objevují nejdřív.
            </p>
            <p>
              Pracujeme podle zákona o&nbsp;ochraně veřejného zdraví, s&nbsp;odbornou
              způsobilostí pro speciální ochrannou dezinfekci, dezinsekci
              a&nbsp;deratizaci. Ke&nbsp;každému zásahu dostanete protokol.
            </p>
          </div>

          <dl className="duvera-facts">
            <div className="fact">
              <dt>Dojezd</dt>
              <dd>Olomouc, Šternberk, Litovel, Prostějov — zpravidla do&nbsp;24&nbsp;hodin, akutní případy dřív.</dd>
            </div>
            <div className="fact">
              <dt>Pro koho</dt>
              <dd>SVJ a&nbsp;bytová družstva, restaurace a&nbsp;potravinářské provozy, obce, domácnosti.</dd>
            </div>
            <div className="fact">
              <dt>Doklady</dt>
              <dd>Protokol o&nbsp;provedení zásahu, bezpečnostní listy použitých přípravků, plán stanišť.</dd>
            </div>
            <div className="fact">
              <dt>Záruka</dt>
              <dd>U&nbsp;štěnic a&nbsp;deratizace bytových domů kontrolní návštěva v&nbsp;ceně zásahu.</dd>
            </div>
          </dl>
        </div>

        <figure className="duvera-quote">
          <blockquote>
            „Ve sklepě našeho domu na&nbsp;Tabulovém vrchu jsme potkany řešili roky.
            DERASPOL rozmístil staniště, po&nbsp;třech týdnech bylo po&nbsp;problému
            a&nbsp;dodnes jezdí na&nbsp;kontroly.“
          </blockquote>
          <figcaption>— předseda SVJ, Olomouc-Tabulový vrch</figcaption>
        </figure>
      </section>
    </main>
  );
}
