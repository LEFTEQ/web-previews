export default function Page() {
  return (
    <main className="zc-page">
      {/* ===== HERO ===== */}
      <header className="zc-hero">
        <div className="zc-hero-top">
          <div className="zc-wordmark" aria-label="Cápal — zámečnictví a trezory">
            <span className="zc-wordmark-name">CÁPAL</span>
            <span className="zc-wordmark-sub">zámečnictví · trezory · České Budějovice</span>
          </div>
          <a className="zc-call" href="tel:+420387000000">
            <svg aria-hidden="true" width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 1.5h3l1.5 4-2 1.5a10 10 0 0 0 3.5 3.5l1.5-2 4 1.5v3a1.5 1.5 0 0 1-1.6 1.5C6.7 14 2 9.3 1.5 3.1A1.5 1.5 0 0 1 3 1.5Z" fill="currentColor"/>
            </svg>
            Zavolat
          </a>
        </div>

        <div className="zc-hero-body">
          {/* Signature: rozkreslený profil klíče jako technický výkres */}
          <svg
            className="zc-key"
            viewBox="0 0 720 260"
            aria-hidden="true"
            preserveAspectRatio="xMidYMid meet"
          >
            {/* hlava klíče */}
            <circle className="zc-key-line zc-d1" cx="110" cy="130" r="78" />
            <circle className="zc-key-line zc-d2" cx="110" cy="130" r="26" />
            {/* dřík */}
            <path
              className="zc-key-line zc-d3"
              d="M186 108 H660 V152 H186"
            />
            {/* zuby — profil stavítek */}
            <path
              className="zc-key-line zc-d4"
              d="M300 152 v34 h28 v-20 h30 v28 h26 v-16 h34 v22 h28 v-30 h32 v14 h28 v-32"
            />
            {/* kótovací linky jako z výkresu */}
            <line className="zc-key-dim zc-d5" x1="300" y1="216" x2="506" y2="216" />
            <line className="zc-key-dim zc-d5" x1="300" y1="208" x2="300" y2="224" />
            <line className="zc-key-dim zc-d5" x1="506" y1="208" x2="506" y2="224" />
            <text className="zc-key-dimtext zc-d5" x="403" y="240" textAnchor="middle">profil 5 stavítek</text>
          </svg>

          <h1 className="zc-h1">
            <span className="zc-h1-row zc-a1">Zámek drží,</span>
            <span className="zc-h1-row zc-a2">nebo <em>nedrží.</em></span>
            <span className="zc-h1-row zc-h1-small zc-a3">Nic mezi tím neexistuje.</span>
          </h1>

          <p className="zc-lead zc-a4">
            Zámečnictví Ivan Cápal se v Českých Budějovicích stará o zámky, vložky,
            trezory a bezpečnostní dveře přes třicet let. Otevřeme, vyměníme,
            zabezpečíme — a řekneme vám na rovinu, co váš zámek vydrží.
          </p>

          <ul className="zc-hero-facts zc-a5">
            <li><strong>Otevření dveří</strong> bez zbytečného poškození</li>
            <li><strong>Trezory</strong> prodej, kotvení, servis</li>
            <li><strong>České Budějovice</strong> a okolí do 30 km</li>
          </ul>
        </div>
      </header>

      {/* ===== SLUŽBY ===== */}
      <section className="zc-section" aria-labelledby="sluzby-h">
        <div className="zc-section-head">
          <span className="zc-eyebrow">Co pro vás uděláme</span>
          <h2 id="sluzby-h" className="zc-h2">Od zabouchnutých dveří po trezor v podlaze</h2>
        </div>

        <div className="zc-services">
          <article className="zc-service">
            <div className="zc-service-mark" aria-hidden="true">
              <svg viewBox="0 0 48 48" width="40" height="40" fill="none">
                <rect x="10" y="20" width="28" height="22" rx="3" stroke="currentColor" strokeWidth="2.5"/>
                <path d="M16 20v-6a8 8 0 0 1 16 0v6" stroke="currentColor" strokeWidth="2.5"/>
                <circle cx="24" cy="30" r="3" fill="currentColor"/>
                <path d="M24 33v5" stroke="currentColor" strokeWidth="2.5"/>
              </svg>
            </div>
            <h3 className="zc-h3">Otevírání dveří a zámků</h3>
            <p>
              Zabouchli jste se, zlomil se klíč, zámek se zasekl. Přijedeme,
              otevřeme šetrně a rovnou poradíme, jestli má smysl vložku vyměnit,
              nebo stačí seřídit.
            </p>
            <p className="zc-service-note">Byty, domy, kanceláře i vozidla.</p>
          </article>

          <article className="zc-service">
            <div className="zc-service-mark" aria-hidden="true">
              <svg viewBox="0 0 48 48" width="40" height="40" fill="none">
                <rect x="8" y="8" width="32" height="32" rx="3" stroke="currentColor" strokeWidth="2.5"/>
                <circle cx="24" cy="24" r="9" stroke="currentColor" strokeWidth="2.5"/>
                <path d="M24 18v6l4 3" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
              </svg>
            </div>
            <h3 className="zc-h3">Trezory a schránky</h3>
            <p>
              Prodáme vám trezor, který odpovídá tomu, co v něm bude — od
              dokumentů po zbraně. Zajistíme dovoz, ukotvení do zdi či podlahy
              a pravidelný servis mechanismu.
            </p>
            <p className="zc-service-note">Nábytkové, stěnové i podlahové trezory, skříně na zbraně.</p>
          </article>

          <article className="zc-service">
            <div className="zc-service-mark" aria-hidden="true">
              <svg viewBox="0 0 48 48" width="40" height="40" fill="none">
                <path d="M24 5 8 11v12c0 10 6.5 17 16 20 9.5-3 16-10 16-20V11L24 5Z" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round"/>
                <path d="M17 24l5 5 9-10" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 className="zc-h3">Bezpečnostní kování a vložky</h3>
            <p>
              Osadíme bezpečnostní vložky s kartou, kování proti odvrtání a
              přídavné zámky. Sjednotíme klíče v domě na jeden — jeden klíč od
              branky, dveří i sklepa.
            </p>
            <p className="zc-service-note">Bezpečnostní třídy RC2–RC4, systém generálního klíče.</p>
          </article>

          <article className="zc-service">
            <div className="zc-service-mark" aria-hidden="true">
              <svg viewBox="0 0 48 48" width="40" height="40" fill="none">
                <circle cx="18" cy="18" r="9" stroke="currentColor" strokeWidth="2.5"/>
                <circle cx="18" cy="18" r="3" stroke="currentColor" strokeWidth="2.5"/>
                <path d="M25 25 40 40M34 34l4-4M29 29l4-4" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
              </svg>
            </div>
            <h3 className="zc-h3">Výroba klíčů</h3>
            <p>
              Klíče běžné, tvarové i bezpečnostní s kartou vyrobíme na počkání
              přímo v dílně. Když je klíč ohnutý nebo prasklý, vyrobíme nový
              podle vložky.
            </p>
            <p className="zc-service-note">Na počkání v dílně v Českých Budějovicích.</p>
          </article>
        </div>
      </section>

      {/* ===== DŮVĚRA / O NÁS ===== */}
      <section className="zc-section zc-trust" aria-labelledby="duvera-h">
        <div className="zc-trust-grid">
          <div className="zc-trust-text">
            <span className="zc-eyebrow zc-eyebrow-light">Proč Cápal</span>
            <h2 id="duvera-h" className="zc-h2 zc-h2-light">
              Řemeslo, které si pouštíte ke dveřím
            </h2>
            <p>
              Zámečník je člověk, kterému ukážete, jak se dostat do vašeho bytu.
              Proto u nás otevírá dveře vždy Ivan Cápal nebo jeho vyučený
              zámečník — ne anonymní dispečink, který zakázku přeprodá.
            </p>
            <p>
              Dílnu máme v Českých Budějovicích, jezdíme po celém okrese.
              Cenu řekneme do telefonu předem a platí — žádné „příplatky za
              složitost" na místě.
            </p>
            <ul className="zc-trust-list">
              <li>Rodinná dílna, ne franšíza — ručíme jménem</li>
              <li>Cena předem do telefonu, doklad vždy</li>
              <li>Otevření dveří zpravidla do 60 minut po Budějovicích</li>
              <li>Koncesovaná živnost, pojištění odpovědnosti</li>
            </ul>
          </div>

          <div className="zc-trust-quotes">
            <figure className="zc-quote">
              <blockquote>
                „Zabouchnuté dveře v neděli večer. Za čtyřicet minut byl u nás,
                otevřel bez poškození a vzal si přesně to, co řekl do telefonu."
              </blockquote>
              <figcaption>— paní Vondrášková, Suché Vrbné</figcaption>
            </figure>
            <figure className="zc-quote">
              <blockquote>
                „Kotvil nám trezor na zbraně do podlahy. Přišel, změřil, poradil
                menší model, než jsme chtěli — a měl pravdu. Tohle je poctivost."
              </blockquote>
              <figcaption>— pan Kučera, Rudolfov</figcaption>
            </figure>
            <figure className="zc-quote">
              <blockquote>
                „Sjednotil nám v bytovém domě klíče na jeden systém. Dvanáct
                bytů, sklepy, kolárna. Všechno funguje na první pokus."
              </blockquote>
              <figcaption>— SVJ Pražská tř., České Budějovice</figcaption>
            </figure>
          </div>
        </div>
      </section>
    </main>
  );
}
