export default function Page() {
  return (
    <main className="ct-main">
      {/* ===== HERO ===== */}
      <section className="ct-hero" aria-label="Četrans – kurýrní služby Ústí nad Labem">
        <div className="ct-hero-inner">
          <header className="ct-topbar">
            <span className="ct-wordmark">
              ČETRANS<span className="ct-wordmark-dot" aria-hidden="true">.</span>
              <span className="ct-wordmark-sub">kurýrní služby</span>
            </span>
            <a className="ct-topbar-phone" href="tel:+420475000000">
              Dispečink 7–19 h
            </a>
          </header>

          <div className="ct-hero-grid">
            <div className="ct-hero-copy">
              <p className="ct-eyebrow">
                <span className="ct-eyebrow-code">UL → CZ</span> Ústí nad Labem · svoz i doručení tentýž den
              </p>
              <h1 className="ct-hero-title">
                <span className="ct-line ct-line-1">Vyzvednem</span>
                <span className="ct-line ct-line-2">do hodiny.</span>
                <span className="ct-line ct-line-3 ct-line-accent">Doručíme dnes.</span>
              </h1>
              <p className="ct-hero-lead">
                Kurýr z Ústí nad Labem pro firmy i domácnosti. Balík, dokumenty nebo
                paleta — zavoláte, do 60 minut jsme u vás a zásilku sledujete od
                převzetí až po podpis příjemce.
              </p>
              <div className="ct-hero-actions">
                <a className="ct-btn ct-btn-primary" href="tel:+420475000000">Objednat svoz</a>
                <a className="ct-btn ct-btn-ghost" href="#sluzby">Ceník a služby</a>
              </div>
            </div>

            {/* Signature: přepravní štítek */}
            <aside className="ct-label-card" aria-label="Ukázka přepravního štítku">
              <div className="ct-label-head">
                <span>PŘEPRAVNÍ ŠTÍTEK</span>
                <span className="ct-label-no">č. 400 01-2847</span>
              </div>
              <div className="ct-label-row">
                <span className="ct-label-key">Odesílatel</span>
                <span className="ct-label-val">Ústí nad Labem, Předlice</span>
              </div>
              <div className="ct-label-row">
                <span className="ct-label-key">Příjemce</span>
                <span className="ct-label-val">Praha 8, Karlín</span>
              </div>
              <div className="ct-label-row">
                <span className="ct-label-key">Převzato</span>
                <span className="ct-label-val">dnes 08:12</span>
              </div>
              <div className="ct-label-row ct-label-row-status">
                <span className="ct-label-key">Stav</span>
                <span className="ct-label-val ct-label-status">
                  <span className="ct-dot" aria-hidden="true" /> Na cestě · doručení do 14:00
                </span>
              </div>
              <div className="ct-barcode" aria-hidden="true">
                <i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i />
              </div>
              <div className="ct-label-foot">CETRANS · D8 EXPRES · KŘEHKÉ ↑</div>
            </aside>
          </div>
        </div>

        {/* dálniční pruh */}
        <div className="ct-roadline" aria-hidden="true">
          <span className="ct-road-dash" />
        </div>
      </section>

      {/* ===== SLUŽBY ===== */}
      <section className="ct-section ct-services" id="sluzby" aria-label="Naše služby">
        <div className="ct-section-inner">
          <div className="ct-section-head">
            <h2 className="ct-section-title">Co vozíme a kam</h2>
            <p className="ct-section-lead">
              Tři služby, tři rychlosti. Cenu vám řekneme do minuty po telefonu —
              podle vzdálenosti a hmotnosti, žádné skryté příplatky.
            </p>
          </div>

          <div className="ct-services-grid">
            <article className="ct-service">
              <div className="ct-service-tag">MĚSTO · do 90 min</div>
              <h3 className="ct-service-title">Kurýr po Ústí</h3>
              <p className="ct-service-text">
                Dokumenty, klíče, náhradní díl nebo oběd pro celou kancelář.
                Vyzvedneme kdekoli od Střekova po Klíši a doručíme do 90 minut.
              </p>
              <p className="ct-service-price">od 149 Kč</p>
            </article>

            <article className="ct-service ct-service-featured">
              <div className="ct-service-tag">D8 EXPRES · tentýž den</div>
              <h3 className="ct-service-title">Ústí ⇄ Praha, Teplice, Děčín</h3>
              <p className="ct-service-text">
                Naše nejžádanější linka. Po dálnici D8 jsme v Praze do 75 minut.
                Ranní svoz do 10:00 znamená doručení týž den do 14:00.
              </p>
              <p className="ct-service-price">od 690 Kč</p>
            </article>

            <article className="ct-service">
              <div className="ct-service-tag">NÁKLAD · do 1,2 t</div>
              <h3 className="ct-service-title">Palety a nadrozměr</h3>
              <p className="ct-service-text">
                Dodávka s hydraulickým čelem pro palety, stroje a stavební
                materiál. Pravidelné rozvozy pro e-shopy a dílny v kraji.
              </p>
              <p className="ct-service-price">cena dle trasy</p>
            </article>
          </div>

          <ul className="ct-service-notes">
            <li>Každou zásilku pojistíme do 100 000 Kč v ceně.</li>
            <li>Potvrzení o doručení s podpisem přijde e-mailem do 5 minut.</li>
            <li>Firmám fakturujeme jednou měsíčně, se splatností 14 dní.</li>
          </ul>
        </div>
      </section>

      {/* ===== DŮVĚRA ===== */}
      <section className="ct-section ct-trust" aria-label="Proč Četrans">
        <div className="ct-section-inner">
          <div className="ct-trust-grid">
            <div className="ct-trust-copy">
              <h2 className="ct-section-title">Vozíme pro Ústí od roku 1994</h2>
              <p className="ct-trust-text">
                Začínali jsme se dvěma dodávkami na Předlicích. Dnes jezdí po kraji
                dvanáct vozů a naši dispečeři znají ústecké ulice líp než navigace —
                vědí, kudy objet uzavírku na Panské i kdy je Mariánský most ucpaný.
              </p>
              <p className="ct-trust-text">
                Pravidelně vozíme pro krajskou nemocnici, tiskárny na Severní
                Terase i e-shopy z Trmic. Když řekneme do 14:00, znamená to do 14:00.
              </p>

              <dl className="ct-stats">
                <div className="ct-stat">
                  <dt>zásilek ročně</dt>
                  <dd>48 000+</dd>
                </div>
                <div className="ct-stat">
                  <dt>doručeno včas</dt>
                  <dd>99,2 %</dd>
                </div>
                <div className="ct-stat">
                  <dt>vozů v provozu</dt>
                  <dd>12</dd>
                </div>
              </dl>
            </div>

            <div className="ct-quotes">
              <figure className="ct-quote">
                <blockquote>
                  „Vzorky lepidel potřebujeme v Praze do oběda. Četrans je tam dřív,
                  než stihneme napsat průvodku. Za tři roky jediné zpoždění — a to
                  kvůli sněhu na D8.“
                </blockquote>
                <figcaption>Martin H., výrobní firma, Trmice</figcaption>
              </figure>
              <figure className="ct-quote">
                <blockquote>
                  „Posílám dceři do Děčína balíky každý týden. Kurýr zavolá deset
                  minut předem a počká, i když zrovna nejsem doma. To u velkých
                  přepravců nezažijete.“
                </blockquote>
                <figcaption>Jana P., Ústí nad Labem – Klíše</figcaption>
              </figure>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
