export default function Page() {
  return (
    <main className="es-page">
      {/* ===== HERO ===== */}
      <header className="es-hero">
        <div className="es-hero-inner">
          <div className="es-topbar">
            <span className="es-wordmark">
              ERPE<span className="es-wordmark-live">stav</span>
              <span className="es-wordmark-dot" aria-hidden="true" />
            </span>
            <span className="es-topbar-note">elektroinstalace · Ústí nad Labem</span>
          </div>

          <div className="es-hero-grid">
            <div className="es-hero-copy">
              <p className="es-eyebrow">
                <span className="es-eyebrow-pulse" aria-hidden="true" />
                230&nbsp;V pod kontrolou
              </p>
              <h1 className="es-h1">
                Elektrika,
                <br />
                na kterou se{' '}
                <span className="es-h1-accent">
                  dá sáhnout
                  <svg
                    className="es-h1-wire"
                    viewBox="0 0 320 24"
                    aria-hidden="true"
                    preserveAspectRatio="none"
                  >
                    <path
                      className="es-wire-path"
                      d="M2 12 H80 L96 4 L112 20 L128 4 L144 20 L160 12 H318"
                      fill="none"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <circle className="es-wire-node es-wire-node-a" cx="2" cy="12" r="4" />
                    <circle className="es-wire-node es-wire-node-b" cx="318" cy="12" r="4" />
                  </svg>
                </span>
              </h1>
              <p className="es-lead">
                Kompletní elektroinstalace pro byty, domy a firemní provozy v Ústí nad Labem
                a okolí. Od rozvaděče po poslední zásuvku — čistě, podle normy a s&nbsp;revizí
                v&nbsp;ruce.
              </p>
              <div className="es-hero-facts">
                <div className="es-fact">
                  <span className="es-fact-num">§ 6</span>
                  <span className="es-fact-label">osvědčení dle vyhl. 50/78 Sb.</span>
                </div>
                <div className="es-fact">
                  <span className="es-fact-num">48 h</span>
                  <span className="es-fact-label">nabídka od obhlídky</span>
                </div>
                <div className="es-fact">
                  <span className="es-fact-num">ÚL</span>
                  <span className="es-fact-label">Ústecko, Teplicko, Děčínsko</span>
                </div>
              </div>
            </div>

            {/* Signature: schéma rozvaděče */}
            <div className="es-panel" aria-hidden="true">
              <div className="es-panel-head">
                <span className="es-panel-title">ROZVADĚČ&nbsp;RD-01</span>
                <span className="es-panel-badge">revize OK</span>
              </div>
              <div className="es-panel-rows">
                <div className="es-breaker is-on">
                  <span className="es-breaker-switch" />
                  <span className="es-breaker-label">F1 · světla</span>
                </div>
                <div className="es-breaker is-on">
                  <span className="es-breaker-switch" />
                  <span className="es-breaker-label">F2 · zásuvky</span>
                </div>
                <div className="es-breaker is-on">
                  <span className="es-breaker-switch" />
                  <span className="es-breaker-label">F3 · kuchyň</span>
                </div>
                <div className="es-breaker is-on es-breaker-delay">
                  <span className="es-breaker-switch" />
                  <span className="es-breaker-label">F4 · wallbox</span>
                </div>
                <div className="es-breaker is-rcd">
                  <span className="es-breaker-switch" />
                  <span className="es-breaker-label">FI · proudový chránič 30&nbsp;mA</span>
                </div>
              </div>
              <div className="es-panel-foot">
                <span>3× 25 A</span>
                <span className="es-panel-foot-line" />
                <span>TN-C-S</span>
              </div>
            </div>
          </div>
        </div>
        <div className="es-hero-strip" aria-hidden="true">
          <span>L1</span><span>L2</span><span>L3</span><span>N</span><span>PE</span>
        </div>
      </header>

      {/* ===== SLUŽBY ===== */}
      <section className="es-section es-services" aria-labelledby="sluzby-h">
        <div className="es-section-inner">
          <div className="es-section-head">
            <h2 id="sluzby-h" className="es-h2">Co pro vás zapojíme</h2>
            <p className="es-section-sub">
              Každou zakázku vedeme jako okruh: má jasný začátek, jištění a konec.
              Cenu znáte předem, revizní zprávu dostanete vždy.
            </p>
          </div>

          <div className="es-services-grid">
            <article className="es-card">
              <span className="es-card-tag">F1</span>
              <h3 className="es-h3">Elektroinstalace v novostavbách</h3>
              <p>
                Kompletní silnoproudé rozvody pro rodinné domy a byty — od projektu přes
                hrubou instalaci až po kompletaci vypínačů a svítidel. Trasy plánujeme
                s&nbsp;vámi na místě, ne od stolu.
              </p>
              <p className="es-card-detail">kabeláž CYKY · rozvaděče Hager/Eaton · hromosvody</p>
            </article>

            <article className="es-card">
              <span className="es-card-tag">F2</span>
              <h3 className="es-h3">Rekonstrukce starých rozvodů</h3>
              <p>
                Hliníkové dráty z&nbsp;70. let umíme bezpečně nahradit mědí — po etapách,
                abyste mohli v&nbsp;bytě dál bydlet. Sekání, zapravení a úklid jsou součást
                práce, ne příplatek.
              </p>
              <p className="es-card-detail">výměna Al→Cu · nové jističe a chrániče · panelové byty</p>
            </article>

            <article className="es-card">
              <span className="es-card-tag">F3</span>
              <h3 className="es-h3">Wallboxy a fotovoltaika</h3>
              <p>
                Připravíme přívod pro nabíjení elektromobilu nebo připojení střešní
                elektrárny včetně žádosti o&nbsp;navýšení jističe u&nbsp;distributora ČEZ.
              </p>
              <p className="es-card-detail">wallbox 11/22 kW · přepěťové ochrany · smart měření</p>
            </article>

            <article className="es-card">
              <span className="es-card-tag">FI</span>
              <h3 className="es-h3">Revize a opravy</h3>
              <p>
                Výchozí i pravidelné revize pro byty, domy i provozovny. Když u&nbsp;vás
                „vyhazuje jistič“, najdeme příčinu — neměníme naslepo součástky.
              </p>
              <p className="es-card-detail">revizní zprávy · hledání závad · pohotovostní opravy</p>
            </article>
          </div>
        </div>
      </section>

      {/* ===== DŮVĚRA ===== */}
      <section className="es-section es-trust" aria-labelledby="duvera-h">
        <div className="es-section-inner">
          <div className="es-trust-grid">
            <div className="es-trust-copy">
              <h2 id="duvera-h" className="es-h2">Proč nám lidé z&nbsp;Ústecka svěřují dráty ve zdech</h2>
              <p>
                ERPEstav je malá parta elektrikářů z&nbsp;Ústí nad Labem. Neděláme tisíc věcí
                napůl — děláme elektroinstalace pořádně. Na stavbu jezdíme my sami, ne
                najatí brigádníci, a&nbsp;za každým rozvaděčem, který podepíšeme, si stojíme.
              </p>
              <ul className="es-trust-list">
                <li>
                  <strong>Revizní zpráva ke každé zakázce.</strong> Bez papíru od nás
                  neodcházíme — potřebujete ji pro pojišťovnu i&nbsp;kolaudaci.
                </li>
                <li>
                  <strong>Cena předem, písemně.</strong> Nabídku rozepíšeme po položkách.
                  Když se v&nbsp;průběhu něco změní, dozvíte se to dřív, než to zapojíme.
                </li>
                <li>
                  <strong>Jsme odsud.</strong> Střekov, Klíše, Severní Terasa, Trmice — na
                  obhlídku dojedeme do dvou dnů a&nbsp;servis máte za rohem i&nbsp;po letech.
                </li>
              </ul>
            </div>

            <div className="es-quotes">
              <figure className="es-quote">
                <blockquote>
                  „Kompletní výměna elektriky v&nbsp;panelákovém bytě na Severní Terase.
                  Za týden hotovo, uklizeno a&nbsp;revize v&nbsp;ruce. Sousedka si je vzala hned po nás.“
                </blockquote>
                <figcaption>— paní Vlasáková, byt 3+1, Severní Terasa</figcaption>
              </figure>
              <figure className="es-quote">
                <blockquote>
                  „Potřebovali jsme wallbox a&nbsp;navýšit jistič. Vyřídili i&nbsp;papíry
                  s&nbsp;ČEZem, o&nbsp;které bych se sám nechtěl starat.“
                </blockquote>
                <figcaption>— pan Hruška, rodinný dům, Střekov</figcaption>
              </figure>
              <figure className="es-quote">
                <blockquote>
                  „V dílně nám pořád padal hlavní jistič. Našli přetíženou fázi, přepojili
                  okruhy a&nbsp;od té doby klid. Žádné zbytečné měnění krabiček.“
                </blockquote>
                <figcaption>— truhlárna Trmice, firemní provoz</figcaption>
              </figure>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
