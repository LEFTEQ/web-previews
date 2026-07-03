export default function Page() {
  return (
    <main className="mk">
      {/* ===== HERO ===== */}
      <header className="mk-hero">
        <div className="mk-hero-top">
          <div className="mk-wordmark" aria-label="Marktrans">
            <span className="mk-wordmark-mark">MARK</span>
            <span className="mk-wordmark-trans">TRANS</span>
            <span className="mk-wordmark-sub">autodoprava · Libochovany / Ústí nad Labem</span>
          </div>
          <a className="mk-hero-phone" href="tel:+420475000000">
            <span className="mk-hero-phone-label">Dispečink</span>
            <span className="mk-hero-phone-num">475 000 000</span>
          </a>
        </div>

        <div className="mk-hero-body">
          <p className="mk-hero-eyebrow">Nákladní silniční doprava · vnitrostátní i mezinárodní</p>
          <h1 className="mk-hero-title">
            <span className="mk-hero-line mk-hero-line-1">Naložíme.</span>
            <span className="mk-hero-line mk-hero-line-2">Vyjedeme.</span>
            <span className="mk-hero-line mk-hero-line-3">
              Doručíme<span className="mk-dot">.</span>
            </span>
          </h1>
          <p className="mk-hero-lead">
            Rodinná dopravní firma z Libochovan u Ústí nad Labem. Vozíme náklady
            do 3,5 tuny i soupravami nad 3,5 tuny — po Ústecku, po Česku i přes hranice.
            Od roku 2011, vlastní vozy, vlastní servis.
          </p>
          <div className="mk-hero-actions">
            <a className="mk-btn mk-btn-primary" href="tel:+420475000000">Zavolat dispečink</a>
            <a className="mk-btn mk-btn-ghost" href="mailto:doprava@marktrans.cz">Poslat poptávku</a>
          </div>
        </div>

        {/* Signature: tachograf / kilometrovník — pruhovaná stupnice jako na krajnici */}
        <div className="mk-road" aria-hidden="true">
          <div className="mk-road-line">
            <span className="mk-road-dash" />
            <span className="mk-road-dash" />
            <span className="mk-road-dash" />
            <span className="mk-road-dash" />
            <span className="mk-road-dash" />
            <span className="mk-road-dash" />
            <span className="mk-road-dash" />
            <span className="mk-road-dash" />
          </div>
          <div className="mk-road-stops">
            <span className="mk-road-stop"><b>0 km</b> Libochovany</span>
            <span className="mk-road-stop"><b>18 km</b> Ústí nad Labem</span>
            <span className="mk-road-stop"><b>67 km</b> Praha</span>
            <span className="mk-road-stop"><b>92 km</b> Dresden</span>
          </div>
        </div>
      </header>

      {/* ===== SLUŽBY ===== */}
      <section className="mk-section mk-services" aria-labelledby="sluzby">
        <div className="mk-section-head">
          <h2 id="sluzby" className="mk-section-title">Co pro vás odvezeme</h2>
          <p className="mk-section-note">
            Cenu vám řekneme rovnou do telefonu — stačí odkud, kam a co vezeme.
          </p>
        </div>

        <div className="mk-cards">
          <article className="mk-card">
            <div className="mk-card-plate">do 3,5 t</div>
            <h3 className="mk-card-title">Rychlá rozvážka dodávkou</h3>
            <p className="mk-card-text">
              Palety, stavební materiál, stroje i stěhování. Vnitrostátně kamkoli,
              mezinárodně do 2,5 tuny. Nakládka obvykle do 24 hodin od objednání.
            </p>
            <p className="mk-card-meta">Ústecko a Litoměřicko každý den</p>
          </article>

          <article className="mk-card">
            <div className="mk-card-plate">nad 3,5 t</div>
            <h3 className="mk-card-title">Soupravy a těžší náklady</h3>
            <p className="mk-card-text">
              Vozidla a jízdní soupravy nad 3,5 tuny pro přepravu zboží po celé ČR.
              Pravidelné trasy i jednorázové zakázky pro firmy a stavby.
            </p>
            <p className="mk-card-meta">Koncese pro nákladní dopravu od 2011</p>
          </article>

          <article className="mk-card">
            <div className="mk-card-plate">servis</div>
            <h3 className="mk-card-title">Opravy a údržba vozidel</h3>
            <p className="mk-card-text">
              Vlastní dílna v Libochovanech: opravy silničních vozidel, údržba,
              svařování a kovovýroba. Díky tomu naše vozy jezdí — a vaše mohou taky.
            </p>
            <p className="mk-card-meta">Objednání termínu telefonicky</p>
          </article>

          <article className="mk-card">
            <div className="mk-card-plate">stavby</div>
            <h3 className="mk-card-title">Doprava pro stavebnictví</h3>
            <p className="mk-card-text">
              Návoz materiálu, odvoz odpadu (mimo nebezpečný), přípravné stavební
              práce a pronájem techniky. Jedna firma, jedno telefonní číslo.
            </p>
            <p className="mk-card-meta">Pro firmy i domácnosti v regionu</p>
          </article>
        </div>
      </section>

      {/* ===== O NÁS / DŮVĚRA ===== */}
      <section className="mk-section mk-about" aria-labelledby="onas">
        <div className="mk-about-grid">
          <div className="mk-about-copy">
            <h2 id="onas" className="mk-section-title mk-section-title-light">
              Rodinná firma od Labe
            </h2>
            <p className="mk-about-text">
              Marktrans založili v roce 2011 Marek a Jana Štruplovi. Sídlíme
              v Libochovanech, kousek od Ústí nad Labem, a od začátku děláme
              dopravu postaru: zvednutý telefon, domluvený termín, náklad na místě.
            </p>
            <p className="mk-about-text">
              Nejsme překupník přeprav — jezdíme vlastními vozy a o techniku se
              staráme sami ve vlastní dílně. Když vám řekneme, že dorazíme,
              tak dorazíme.
            </p>
          </div>

          <dl className="mk-facts">
            <div className="mk-fact">
              <dt className="mk-fact-label">Na silnici od</dt>
              <dd className="mk-fact-value">2011</dd>
            </div>
            <div className="mk-fact">
              <dt className="mk-fact-label">Sídlo a dílna</dt>
              <dd className="mk-fact-value">Libochovany 257</dd>
            </div>
            <div className="mk-fact">
              <dt className="mk-fact-label">Působíme</dt>
              <dd className="mk-fact-value">ČR + zahraničí</dd>
            </div>
            <div className="mk-fact">
              <dt className="mk-fact-label">IČO</dt>
              <dd className="mk-fact-value">28748999</dd>
            </div>
          </dl>
        </div>

        <ul className="mk-quotes">
          <li className="mk-quote">
            <p className="mk-quote-text">
              „Stěhovali nám dílnu z Ústí do Lovosic. Dva vozy, jedno dopoledne,
              nic se nepoškodilo. Domluva na jeden telefonát.“
            </p>
            <p className="mk-quote-who">— zámečnictví, Lovosice</p>
          </li>
          <li className="mk-quote">
            <p className="mk-quote-text">
              „Vozí nám materiál na stavby po celém Litoměřicku. Když hoří termín,
              vezmou to i brzy ráno.“
            </p>
            <p className="mk-quote-who">— stavební firma, Litoměřice</p>
          </li>
          <li className="mk-quote">
            <p className="mk-quote-text">
              „Servisují nám dodávku už třetí rok. Řeknou dopředu, co to bude stát,
              a drží slovo.“
            </p>
            <p className="mk-quote-who">— živnostník, Ústí nad Labem</p>
          </li>
        </ul>
      </section>
    </main>
  );
}
