export default function Page() {
  return (
    <main className="mk">
      {/* ===== HERO ===== */}
      <header className="mk-hero">
        <div className="mk-hero-top">
          <div className="mk-wordmark" aria-label="MERKA Spedition">
            <span className="mk-wordmark-main">MERKA</span>
            <span className="mk-wordmark-sub">SPEDITION · HRADEC KRÁLOVÉ</span>
          </div>
          <a className="mk-hero-phone" href="tel:+420724229935">
            +420 724 229 935
          </a>
        </div>

        <div className="mk-hero-body">
          <p className="mk-hero-eyebrow">Spedice · Logistika · Celní služby — od roku 1991</p>
          <h1 className="mk-hero-title">
            <span className="mk-line mk-line-1">Vaše zásilka</span>
            <span className="mk-line mk-line-2">dorazí.</span>
            <span className="mk-line mk-line-3">Bezpečně a včas.</span>
          </h1>
          <p className="mk-hero-lead">
            Přes 30 let vozíme zboží po Česku, Evropě i mimo ni. Doprava, sklad,
            clo i INTRASTAT — všechno na jednom telefonním čísle, které bereme
            24 hodin denně, 7 dní v týdnu.
          </p>
          <div className="mk-hero-actions">
            <a className="mk-btn mk-btn-solid" href="tel:+420724229935">
              Zavolat dispečink
            </a>
            <a className="mk-btn mk-btn-ghost" href="mailto:hk@merka.cz">
              Poslat poptávku
            </a>
          </div>
        </div>

        {/* Signature: CMR-inspired waybill strip — route ticket Hradec Králové → Evropa */}
        <div className="mk-waybill" aria-hidden="true">
          <div className="mk-waybill-cell">
            <span className="mk-waybill-label">Odesílatel</span>
            <span className="mk-waybill-value">Hradec Králové, Vážní 857</span>
          </div>
          <div className="mk-waybill-route">
            <span className="mk-route-dot" />
            <span className="mk-route-line">
              <span className="mk-route-truck">▸</span>
            </span>
            <span className="mk-route-dot mk-route-dot-end" />
          </div>
          <div className="mk-waybill-cell mk-waybill-cell-end">
            <span className="mk-waybill-label">Příjemce</span>
            <span className="mk-waybill-value">Kdekoliv v Evropě i za ní</span>
          </div>
          <div className="mk-waybill-stamp">
            <span>CMR</span>
            <span>1991</span>
          </div>
        </div>
      </header>

      {/* ===== SLUŽBY ===== */}
      <section className="mk-section mk-services" aria-labelledby="sluzby-h">
        <div className="mk-section-head">
          <span className="mk-kicker">Co pro vás zařídíme</span>
          <h2 id="sluzby-h" className="mk-h2">
            Od rampy odesílatele<br />až po podpis příjemce
          </h2>
        </div>

        <div className="mk-services-grid">
          <figure className="mk-services-figure">
            <img
              src="/section-1.webp"
              alt="Kamion MERKA Spedition na trase mezinárodní přepravy"
              loading="lazy"
            />
            <figcaption>
              Vlastní dispečink v Hradci Králové řídí každou přepravu od nakládky po doručení.
            </figcaption>
          </figure>

          <ul className="mk-services-list">
            <li className="mk-service">
              <span className="mk-service-code">PŘEPRAVA</span>
              <h3>Doprava po ČR i mezinárodně</h3>
              <p>
                Celovozové i kusové zásilky. Domluvíme termín nakládky, pohlídáme
                trasu a dáme vám vědět, kdy zboží dorazí — bez dohadování.
              </p>
            </li>
            <li className="mk-service">
              <span className="mk-service-code">SKLAD</span>
              <h3>Skladování zásilek</h3>
              <p>
                Zboží u nás počká v bezpečí, než ho budete potřebovat. Krátkodobě
                i dlouhodobě, včetně distribuce ke konečnému příjemci.
              </p>
            </li>
            <li className="mk-service">
              <span className="mk-service-code">CLO</span>
              <h3>Celní odbavení a zajištění celního dluhu</h3>
              <p>
                Dovážíte mimo EU? Vyřídíme celní řízení za vás, včetně zajištění
                celního dluhu. Vy jen předáte doklady.
              </p>
            </li>
            <li className="mk-service">
              <span className="mk-service-code">INTRASTAT</span>
              <h3>Výkaznictví INTRASTAT</h3>
              <p>
                Hlídáme termíny a odevzdáváme výkazy za vás, abyste se mohli
                věnovat obchodu, ne formulářům.
              </p>
            </li>
          </ul>
        </div>
      </section>

      {/* ===== DŮVĚRA / BEZPEČNOST ===== */}
      <section className="mk-section mk-trust" aria-labelledby="duvera-h">
        <div className="mk-trust-inner">
          <div className="mk-trust-text">
            <span className="mk-kicker mk-kicker-light">Proč zákazníci zůstávají</span>
            <h2 id="duvera-h" className="mk-h2 mk-h2-light">
              Bezpečnost zásilky není slib.<br />Je to náš systém.
            </h2>
            <p>
              Jsme zakládajícím a aktivním členem pracovní skupiny pro bezpečnost
              dopravy při Svazu spedice a logistiky ČR. Standardy, podle kterých
              se v Česku chrání přepravované zboží, pomáháme sami tvořit.
            </p>
            <p>
              Každou zásilku chrání časová, personální a technická opatření,
              která jsme ladili přes tři desetiletí. Prevence je nejlevnější
              pojistka — proto s ní začínáme dřív, než zboží vůbec naložíme.
            </p>

            <dl className="mk-trust-facts">
              <div className="mk-fact">
                <dt>Na trhu od</dt>
                <dd>1991</dd>
              </div>
              <div className="mk-fact">
                <dt>Dispečink</dt>
                <dd>24/7</dd>
              </div>
              <div className="mk-fact">
                <dt>Sídlo</dt>
                <dd>Hradec Králové</dd>
              </div>
            </dl>
          </div>

          <figure className="mk-trust-figure">
            <img
              src="/section-2.webp"
              alt="Zabezpečený sklad MERKA Spedition s připravenými zásilkami"
              loading="lazy"
            />
            <figcaption>
              Vážní 857, Hradec Králové — odsud řídíme přepravy už přes 30 let.
            </figcaption>
          </figure>
        </div>
      </section>
    </main>
  );
}
