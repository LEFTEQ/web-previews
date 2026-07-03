export default function Page() {
  return (
    <main className="ad-page">
      {/* ===== HERO ===== */}
      <header className="ad-hero">
        <div className="ad-hero-top">
          <div className="ad-wordmark" aria-label="Autoservis Drobil">
            <span className="ad-wordmark-badge" aria-hidden="true">AD</span>
            <span className="ad-wordmark-text">
              AUTOSERVIS<br />DROBIL
            </span>
          </div>
          <div className="ad-hero-meta">
            <span className="ad-meta-line">Holická 1004/29, Olomouc</span>
            <span className="ad-meta-line">Po–Pá 7:00–15:30</span>
          </div>
        </div>

        <div className="ad-hero-main">
          <p className="ad-hero-eyebrow">Servis osobních, užitkových a lehkých nákladních vozidel do výšky 3,6 m</p>
          <h1 className="ad-hero-title">
            <span className="ad-line ad-line-1">Přijedete</span>
            <span className="ad-line ad-line-2">s&nbsp;problémem.</span>
            <span className="ad-line ad-line-3 ad-line-accent">Odjedete bez&nbsp;něj.</span>
          </h1>
          <p className="ad-hero-sub">
            Přes 20&nbsp;let opravujeme auta všech značek — od&nbsp;osobáku po&nbsp;dodávku.
            Jsme servisní středisko Cummins pro střední a&nbsp;severní Moravu
            a&nbsp;nově opravujeme i&nbsp;hybridy a&nbsp;elektromobily.
          </p>
          <div className="ad-hero-cta">
            <a href="tel:+420606802870" className="ad-btn ad-btn-primary">
              Zavolat 606&nbsp;802&nbsp;870
            </a>
            <a href="#sluzby" className="ad-btn ad-btn-ghost">
              Co opravíme
            </a>
          </div>
        </div>

        {/* signature: výšková rampa servisní haly — měřítko do 3,6 m */}
        <div className="ad-gauge" aria-hidden="true">
          <div className="ad-gauge-track">
            <span className="ad-tick" style={{ bottom: "0%" }}><i /><b>0&nbsp;m</b></span>
            <span className="ad-tick" style={{ bottom: "25%" }}><i /></span>
            <span className="ad-tick ad-tick-label" style={{ bottom: "44%" }}><i /><b>1,6&nbsp;m — osobní</b></span>
            <span className="ad-tick" style={{ bottom: "58%" }}><i /></span>
            <span className="ad-tick ad-tick-label" style={{ bottom: "72%" }}><i /><b>2,6&nbsp;m — dodávka</b></span>
            <span className="ad-tick" style={{ bottom: "86%" }}><i /></span>
            <span className="ad-tick ad-tick-label ad-tick-max" style={{ bottom: "100%" }}><i /><b>3,6&nbsp;m — vjezd haly</b></span>
          </div>
        </div>

        <div className="ad-hero-stripe" aria-hidden="true">
          <span>OLOMOUC&nbsp;·&nbsp;HOLICE&nbsp;·&nbsp;</span>
          <span>SERVIS&nbsp;VŠECH&nbsp;ZNAČEK&nbsp;·&nbsp;</span>
          <span>CUMMINS&nbsp;·&nbsp;AVIA&nbsp;·&nbsp;HYBRID&nbsp;·&nbsp;EV&nbsp;·&nbsp;</span>
        </div>
      </header>

      {/* ===== SLUŽBY ===== */}
      <section className="ad-section ad-services" id="sluzby" aria-labelledby="sluzby-h">
        <div className="ad-section-head">
          <h2 id="sluzby-h" className="ad-section-title">Co u&nbsp;nás vyřešíte</h2>
          <p className="ad-section-lead">
            Kompletní mechanické i&nbsp;servisní práce pod jednou střechou.
            Bez objednávkových systémů třetích stran — zavoláte, domluvíme termín, hotovo.
          </p>
        </div>

        <ul className="ad-service-grid">
          <li className="ad-card">
            <span className="ad-card-tag">Mechanika</span>
            <h3>Servis a&nbsp;opravy všech značek</h3>
            <p>
              Brzdy, podvozek, rozvody, spojky, diagnostika. Osobní a&nbsp;užitková
              vozidla i&nbsp;lehké náklaďáky do&nbsp;3,5&nbsp;t — do&nbsp;haly zajede
              i&nbsp;vůz vysoký 3,6&nbsp;m.
            </p>
          </li>
          <li className="ad-card">
            <span className="ad-card-tag">Klimatizace</span>
            <h3>Plnění a&nbsp;čištění klimatizací</h3>
            <p>
              Opravy, dezinfekce a&nbsp;plnění chladivem R1234yf i&nbsp;R134a.
              Zvládneme obě generace systémů, u&nbsp;všech kategorií a&nbsp;značek vozidel.
            </p>
          </li>
          <li className="ad-card ad-card-hl">
            <span className="ad-card-tag">Nově</span>
            <h3>Hybridy a&nbsp;elektromobily</h3>
            <p>
              Máme osvědčení pro běžné opravy hybridních a&nbsp;elektrických vozidel (EV1).
              S&nbsp;vysokonapěťovou technikou pracujeme podle předpisů — vy nic řešit nemusíte.
            </p>
          </li>
          <li className="ad-card">
            <span className="ad-card-tag">Pneuservis</span>
            <h3>Výměna a&nbsp;opravy pneumatik</h3>
            <p>
              Přezutí, vyvážení, huštění a&nbsp;opravy pneu pro osobní i&nbsp;užitková
              vozidla do&nbsp;3,5&nbsp;t. Kontrolu stavu akumulátoru k&nbsp;tomu dostanete zdarma.
            </p>
          </li>
          <li className="ad-card">
            <span className="ad-card-tag">Cummins</span>
            <h3>Servisní středisko Cummins</h3>
            <p>
              Autorizovaný servis motorů Cummins pro střední a&nbsp;severní Moravu.
              Originální díly, tovární postupy, zkušení mechanici.
            </p>
          </li>
          <li className="ad-card">
            <span className="ad-card-tag">Avia</span>
            <h3>Servis vozidel Avia</h3>
            <p>
              Pozáruční servis a&nbsp;opravy vozidel Avia. Známe je do&nbsp;posledního
              šroubu — jezdí k&nbsp;nám firmy z&nbsp;celé Olomouce i&nbsp;okolí.
            </p>
          </li>
        </ul>
      </section>

      {/* ===== DŮVĚRA / O NÁS ===== */}
      <section className="ad-section ad-trust" aria-labelledby="onas-h">
        <div className="ad-trust-grid">
          <div className="ad-trust-copy">
            <h2 id="onas-h" className="ad-section-title">Rodinný servis, ne&nbsp;anonymní řetězec</h2>
            <p>
              Autoservis Drobil najdete na&nbsp;Holické ulici v&nbsp;Olomouci už přes
              dvacet let. Vůz vám opraví lidé, kteří tu pracují roky — a&nbsp;když
              zavoláte, mluvíte přímo s&nbsp;námi, ne&nbsp;s&nbsp;callcentrem.
            </p>
            <p>
              Než se pustíme do&nbsp;práce, řekneme vám, co je potřeba a&nbsp;kolik to
              bude stát. Žádné položky navíc na&nbsp;faktuře, žádná překvapení při
              vyzvednutí auta.
            </p>
            <dl className="ad-facts">
              <div className="ad-fact">
                <dt>Zkušenosti</dt>
                <dd>20+ let oprav vozidel všech značek</dd>
              </div>
              <div className="ad-fact">
                <dt>Zázemí</dt>
                <dd>Hala s&nbsp;vjezdem do&nbsp;výšky 3,6&nbsp;m — vezmeme i&nbsp;vestavby a&nbsp;dodávky</dd>
              </div>
              <div className="ad-fact">
                <dt>Certifikace</dt>
                <dd>Servisní středisko Cummins, osvědčení pro hybridy a&nbsp;EV</dd>
              </div>
              <div className="ad-fact">
                <dt>Kde nás najdete</dt>
                <dd>Holická 1004/29, 779&nbsp;00 Olomouc — u&nbsp;výpadovky na&nbsp;Holici</dd>
              </div>
            </dl>
          </div>

          <aside className="ad-trust-panel">
            <h3 className="ad-panel-title">Domluvte si termín</h3>
            <p className="ad-panel-note">
              Nejrychlejší je telefon — mechanik vám rovnou řekne, kdy můžete přijet.
            </p>
            <a href="tel:+420606802870" className="ad-btn ad-btn-primary ad-btn-block">
              Zavolat 606&nbsp;802&nbsp;870
            </a>
            <a href="mailto:info@autoservisdrobil.cz" className="ad-btn ad-btn-ghost ad-btn-block">
              Napsat e-mail
            </a>
            <table className="ad-hours">
              <caption className="ad-hours-caption">Otevírací doba</caption>
              <tbody>
                <tr>
                  <th scope="row">Pondělí — pátek</th>
                  <td>7:00–15:30</td>
                </tr>
                <tr>
                  <th scope="row">Sobota — neděle</th>
                  <td>zavřeno</td>
                </tr>
              </tbody>
            </table>
            <p className="ad-panel-hiring">
              <strong>Hledáme automechanika a&nbsp;autoelektrikáře.</strong>{" "}
              Životopis pošlete na&nbsp;info@autoservisdrobil.cz — Pavla Drobilová,
              606&nbsp;802&nbsp;870.
            </p>
          </aside>
        </div>
      </section>
    </main>
  );
}
