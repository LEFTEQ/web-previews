export default function Page() {
  return (
    <main className="sk-page">
      {/* ===== HERO ===== */}
      <header className="sk-hero">
        <div className="sk-hero-inner">
          <div className="sk-topbar">
            <span className="sk-wordmark">
              SEDLÁČEK<span className="sk-wordmark-sub">koupelny · Brno</span>
            </span>
            <a className="sk-topbar-tel" href="tel:+420774233776">
              +420 774 233 776
            </a>
          </div>

          <div className="sk-hero-grid">
            <div className="sk-hero-copy">
              <p className="sk-eyebrow">Rekonstrukce koupelen a bytových jader</p>
              <h1 className="sk-hero-title">
                <span className="sk-line sk-line-1">Z umakartu</span>
                <span className="sk-line sk-line-2">na&nbsp;dlažbu.</span>
                <span className="sk-line sk-line-3">Za&nbsp;10&nbsp;dní.</span>
              </h1>
              <p className="sk-hero-lead">
                Vlastimil Sedláček bourá stará bytová jádra a staví nové koupelny
                po celém Brně. Jedna parta od bourání po spárování — bez
                subdodávek, bez čekání, s pevným termínem předání.
              </p>
              <div className="sk-hero-actions">
                <a className="sk-btn sk-btn-primary" href="tel:+420774233776">
                  Zavolat panu Sedláčkovi
                </a>
                <a className="sk-btn sk-btn-ghost" href="mailto:info@sedlacek-koupelny.cz">
                  Poslat půdorys e‑mailem
                </a>
              </div>
              <p className="sk-hero-note">
                Voroněžská 2548/3, Brno‑Žabovřesky · prohlídka a orientační cena zdarma
              </p>
            </div>

            {/* Signature: kladečský plán — spárořez obkladu jako grafika */}
            <div className="sk-tiles" aria-hidden="true">
              <div className="sk-tiles-board">
                <span className="sk-tile t1"></span>
                <span className="sk-tile t2"></span>
                <span className="sk-tile t3"></span>
                <span className="sk-tile t4"></span>
                <span className="sk-tile t5"></span>
                <span className="sk-tile t6"></span>
                <span className="sk-tile t7"></span>
                <span className="sk-tile t8"></span>
                <span className="sk-tile t9"></span>
                <span className="sk-tile t10"></span>
                <span className="sk-tile t11"></span>
                <span className="sk-tile t12"></span>
                <span className="sk-tiles-label">kladečský plán · formát 30 × 60</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* ===== SEKCE 1: PRŮBĚH ZAKÁZKY ===== */}
      <section className="sk-section sk-process" aria-labelledby="process-title">
        <div className="sk-section-inner">
          <div className="sk-section-head">
            <h2 id="process-title" className="sk-section-title">
              Deset dní od bouračky po sprchu
            </h2>
            <p className="sk-section-lead">
              Rekonstrukce panelákového jádra má pevný postup. Víte dopředu,
              kdo u vás který den bude a co se ten den stane.
            </p>
          </div>

          <ol className="sk-days">
            <li className="sk-day">
              <span className="sk-day-num">Den 1–2</span>
              <h3 className="sk-day-title">Bourání a odvoz</h3>
              <p>
                Zakryjeme chodbu i výtah, vybouráme umakartové jádro a suť
                týž den odvezeme. Večer máte v bytě čisto.
              </p>
            </li>
            <li className="sk-day">
              <span className="sk-day-num">Den 3–4</span>
              <h3 className="sk-day-title">Vyzdění a rozvody</h3>
              <p>
                Nové příčky z pórobetonu, voda, odpady a elektřina přesně tam,
                kde je chcete — včetně přípravy na pračku a topný žebřík.
              </p>
            </li>
            <li className="sk-day">
              <span className="sk-day-num">Den 5–7</span>
              <h3 className="sk-day-title">Hydroizolace a obklad</h3>
              <p>
                Stěrková hydroizolace ve sprše i na podlaze, potom obklad a
                dlažba podle kladečského plánu, který schválíte předem.
              </p>
            </li>
            <li className="sk-day">
              <span className="sk-day-num">Den 8–10</span>
              <h3 className="sk-day-title">Zařízení a předání</h3>
              <p>
                Vana nebo sprchový kout, umyvadlo, WC, baterie, spárování a
                silikony. Předáme hotovou koupelnu a uklidíme po sobě.
              </p>
            </li>
          </ol>

          <div className="sk-services">
            <h3 className="sk-services-title">Co pro vás uděláme</h3>
            <ul className="sk-services-list">
              <li>Kompletní rekonstrukce koupelny na klíč</li>
              <li>Výměna umakartového bytového jádra za zděné</li>
              <li>Obklady, dlažby a velkoformáty včetně řezání</li>
              <li>Zednické práce v bytě i rodinném domě</li>
              <li>Pokládka zámkové dlažby kolem domu</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ===== SEKCE 2: DŮVĚRA / REFERENCE ===== */}
      <section className="sk-section sk-trust" aria-labelledby="trust-title">
        <div className="sk-section-inner">
          <div className="sk-trust-grid">
            <div className="sk-trust-copy">
              <h2 id="trust-title" className="sk-section-title">
                Řemeslník, kterému otevřete byt
              </h2>
              <p>
                Vlastimil Sedláček dělá koupelny v Brně přes patnáct let —
                nejčastěji v panelácích v Žabovřeskách, Bystrci, Líšni a na
                Lesné. Zná brněnská jádra nazpaměť: ví, kde vedou stoupačky,
                co unese panel a jak udělat z 3,5 m² koupelnu, ve které se
                otočíte.
              </p>
              <p>
                Na prohlídku přijede osobně, cenu řekne na rovinu a termín,
                který slíbí, platí. Živnost vede pod IČO 72521953 — žádná
                anonymní firma, jedno jméno na smlouvě i na stavbě.
              </p>
              <dl className="sk-facts">
                <div className="sk-fact">
                  <dt>Praxe v oboru</dt>
                  <dd>15+ let</dd>
                </div>
                <div className="sk-fact">
                  <dt>Hotových koupelen</dt>
                  <dd>200+</dd>
                </div>
                <div className="sk-fact">
                  <dt>Působnost</dt>
                  <dd>Brno a okolí</dd>
                </div>
              </dl>
            </div>

            <div className="sk-quotes">
              <figure className="sk-quote">
                <blockquote>
                  „Preciznost, bleskové jednání, ochota, odbornost a hlavně
                  lidský přístup — toho si na spolupráci s panem Sedláčkem
                  cením nejvíc. Moje koupelna byla brzy jako nová.“
                </blockquote>
                <figcaption>
                  <strong>Lubomír Kadleček</strong> · Brno, rekonstrukce jádra
                </figcaption>
              </figure>
              <figure className="sk-quote">
                <blockquote>
                  „Garance kvality, férová cena a rychlá stavba. Na kvalitu
                  jeho práce se můžu kdykoliv spolehnout.“
                </blockquote>
                <figcaption>
                  <strong>Martina Horáková</strong> · Brno, koupelna na klíč
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
