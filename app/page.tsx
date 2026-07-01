export default function Page() {
  return (
    <main className="rj">
      {/* ===== HERO ===== */}
      <header className="hero">
        <div className="hero-media" aria-hidden="true">
          <img
            src="/hero.webp"
            alt=""
            className="hero-img"
          />
          <div className="hero-veil" />
        </div>

        <div className="hero-top wrap">
          <div className="wordmark">
            <span className="wm-symbol" aria-hidden="true">Rn</span>
            <span className="wm-text">
              <strong>Jarolím</strong>
              <em>měření radonu</em>
            </span>
          </div>
          <a className="hero-tel" href="tel:+420777885957">777 885 957</a>
        </div>

        <div className="hero-body wrap">
          <p className="eyebrow">
            <span className="pulse-dot" aria-hidden="true" />
            Radonový průzkum · Jihočeský kraj
          </p>
          <h1 className="hero-title">
            Radon nevidíte,
            <br />
            <span className="hero-title-accent">my ho změříme.</span>
          </h1>
          <p className="hero-lead">
            Než začnete stavět nebo rekonstruovat, zjistěte, kolik radonu
            prostupuje z podloží. Autorizované měření na pozemcích i v budovách
            — České Budějovice a celé jižní Čechy.
          </p>
          <div className="hero-actions">
            <a className="btn btn-solid" href="tel:+420777885957">Zavolat a objednat měření</a>
            <a className="btn btn-ghost" href="mailto:jarolim.net@gmail.com">Napsat e‑mail</a>
          </div>

          <dl className="hero-facts" aria-label="Základní údaje">
            <div className="fact">
              <dt>Protokol pro stavební úřad</dt>
              <dd>dle zákona č. 263/2016 Sb.</dd>
            </div>
            <div className="fact">
              <dt>Návrh protiradonové izolace</dt>
              <dd>ke každému měření zdarma</dd>
            </div>
            <div className="fact">
              <dt>Působíme v celém kraji</dt>
              <dd>Budějovice, Krumlov, Tábor…</dd>
            </div>
          </dl>
        </div>

        {/* signature: living measurement strip */}
        <div className="gauge" aria-hidden="true">
          <div className="gauge-track">
            <span className="gauge-seg seg-low">nízký index</span>
            <span className="gauge-seg seg-mid">střední index</span>
            <span className="gauge-seg seg-high">vysoký index</span>
          </div>
          <div className="gauge-needle" />
          <p className="gauge-label">Radonový index pozemku — výsledek každého našeho průzkumu</p>
        </div>
      </header>

      {/* ===== SLUŽBY ===== */}
      <section className="services" aria-labelledby="sluzby-h">
        <div className="wrap">
          <p className="eyebrow eyebrow-dark">Co pro vás změříme</p>
          <h2 id="sluzby-h" className="section-title">
            Dvě situace, kdy radon řešíte
          </h2>

          <div className="service-grid">
            <article className="service-card">
              <p className="service-tag">Před stavbou</p>
              <h3>Měření radonu na pozemku</h3>
              <p>
                Chystáte se stavět dům? Radonový průzkum pozemku vyžaduje
                stavební úřad ke stavebnímu povolení. Sondami zjistíme
                objemovou aktivitu radonu v půdním vzduchu a propustnost
                podloží, výsledkem je <strong>radonový index pozemku</strong> a
                protokol, který přiložíte k žádosti.
              </p>
              <ul className="service-list">
                <li>Odběr půdního vzduchu přímo na parcele</li>
                <li>Protokol s radonovým indexem do několika dnů</li>
                <li>Při středním a vysokém indexu navrhneme izolaci dle ČSN 730601 — zdarma</li>
              </ul>
            </article>

            <article className="service-card">
              <p className="service-tag">V hotové budově</p>
              <h3>Týdenní měření v interiéru</h3>
              <p>
                Bydlíte ve starším domě, kupujete nemovitost nebo provozujete
                školu či kancelář? Umístíme u vás kontinuální monitor a týden
                zaznamenáváme <strong>objemovou aktivitu radonu</strong> ve
                vzduchu, který dýcháte. Poté hodnoty vyhodnotíme proti směrným
                hodnotám vyhlášky č. 422/2016 Sb.
              </p>
              <ul className="service-list">
                <li>Přístroj vás při běžném provozu nijak neomezí</li>
                <li>Graf průběhu hodnot hodinu po hodině</li>
                <li>Při překročení směrných hodnot doporučíme ozdravná opatření</li>
              </ul>
            </article>
          </div>

          <figure className="chart-figure">
            <img
              src="/section-1.webp"
              alt="Graf průběhu objemové aktivity radonu v čase z kontinuálního monitoru"
              className="chart-img"
            />
            <figcaption>
              Skutečný výstup z našeho přístroje: objemová aktivita radonu
              (Bq/m³) zaznamenaná v týdenním cyklu. Právě takový graf dostanete
              s protokolem.
            </figcaption>
          </figure>
        </div>
      </section>

      {/* ===== DŮVĚRA / O NÁS ===== */}
      <section className="trust" aria-labelledby="onas-h">
        <div className="wrap trust-grid">
          <div className="trust-media">
            <img
              src="/section-2.webp"
              alt="Ing. Pavel Jarolím při měření radonu sondou na stavebním pozemku"
              className="trust-img"
            />
            <p className="trust-media-note">Měření sondou přímo na parcele — jižní Čechy</p>
          </div>

          <div className="trust-copy">
            <p className="eyebrow eyebrow-dark">Kdo měří</p>
            <h2 id="onas-h" className="section-title">
              Ing. Pavel Jarolím — jedno jméno, jedna odpovědnost
            </h2>
            <p>
              Měření radonu dělám jako svou hlavní činnost, ne jako doplněk.
              Pracuji podle atomového zákona č. 263/2016 Sb., měřím
              kalibrovanými přístroji a protokoly ode mě berou stavební úřady
              v celém Jihočeském kraji.
            </p>
            <p>
              Provozovnu mám v Žižkově ulici v Českých Budějovicích, ale za
              měřením jezdím po celém kraji — Český Krumlov, Jindřichův
              Hradec, Písek, Prachatice, Strakonice, Tábor. Po domluvě i dál
              po republice.
            </p>

            <ul className="trust-points">
              <li>
                <strong>Férová cena předem.</strong> Řeknu vám ji do telefonu,
                jsem plátce DPH a na faktuře nenajdete nic navíc.
              </li>
              <li>
                <strong>Návrh izolace v ceně.</strong> Vyjde‑li střední nebo
                vysoký index, spočítám a posoudím protiradonovou izolaci
                zdarma — nemusíte hledat dalšího odborníka.
              </li>
              <li>
                <strong>Srozumitelný výsledek.</strong> K protokolu dostanete
                vysvětlení lidskou řečí: co číslo znamená a co s tím.
              </li>
            </ul>

            <address className="trust-contact">
              Žižkova 309/12, 370 01 České Budějovice ·{" "}
              <a href="tel:+420777885957">777 885 957</a> ·{" "}
              <a href="mailto:jarolim.net@gmail.com">jarolim.net@gmail.com</a>
            </address>
          </div>
        </div>
      </section>
    </main>
  );
}
