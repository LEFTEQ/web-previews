export default function Page() {
  return (
    <>
      <a className="skip-link" href="#obsah">Přeskočit na obsah</a>

      <header className="top-strip" aria-label="Rychlé informace">
        <div className="top-strip-inner">
          <span className="top-item">
            <strong>Dílna Olomouc-Slavonín</strong>
          </span>
          <a className="top-item top-link" href="tel:+420585123456">
            <svg viewBox="0 0 24 24" width="14" height="14" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.9.7 2.7a2 2 0 0 1-.5 2.1L8 9.9a16 16 0 0 0 6 6l1.4-1.4a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.8 2z"/></svg>
            585 123 456
          </a>
          <span className="top-item top-hours">Po–Pá 7:00–17:00</span>
        </div>
      </header>

      <nav className="main-nav" aria-label="Hlavní navigace">
        <div className="main-nav-inner">
          <span className="wordmark">
            <span className="wordmark-gear" aria-hidden="true">
              <svg viewBox="0 0 48 48" width="30" height="30">
                <path fill="currentColor" d="M24 4l2.6 4.9 5.4-1.4 1.4 5.4 4.9 2.6-2.6 4.9 2.6 4.9-4.9 2.6-1.4 5.4-5.4-1.4L24 32.6l-2.6 4.4-5.4 1.4-1.4-5.4-4.9-2.6 2.6-4.9-2.6-4.9 4.9-2.6 1.4-5.4 5.4 1.4L24 4z"/>
                <circle cx="24" cy="18.6" r="6.4" fill="var(--asphalt)"/>
              </svg>
            </span>
            <span className="wordmark-text">
              AUTOKOMPLEX<span className="wordmark-sub">MATĚJKA</span>
            </span>
          </span>
          <a className="nav-cta" href="tel:+420585123456">Zavolat do dílny</a>
        </div>
      </nav>

      <main id="obsah">
        <section className="hero" aria-labelledby="hero-heading">
          <div className="hero-media">
            <img
              src="/hero.webp"
              alt="Vůz na zvedáku v servisní hale AUTOKOMPLEX Matějka v Olomouci"
              className="hero-img"
            />
            <div className="hero-scrim" aria-hidden="true" />
          </div>

          <div className="hero-content">
            <p className="hero-eyebrow">Servisní karta zákazníka — Olomouc-Slavonín</p>
            <h1 id="hero-heading" className="hero-heading">
              Váš vůz na zvedáku,<br />
              <span className="hero-heading-accent">ne na ulici.</span>
            </h1>
            <p className="hero-lede">
              Autorizovaný servis a prodej vozů Volvo a Omoda&nbsp;|&nbsp;Jaecoo. Diagnostiku,
              opravu i STK domluvíte na jeden telefonát — a víte přesně, kdy si auto vyzvednete.
            </p>
            <div className="hero-actions">
              <a className="btn btn-primary" href="tel:+420585123456">Zavolat na dílnu</a>
              <a className="btn btn-ghost" href="#nabidka">Prohlédnout nabídku</a>
            </div>
            <dl className="hero-meta">
              <div className="hero-meta-item">
                <dt>Adresa</dt>
                <dd>Řepčínská 234/12, 779 00 Olomouc</dd>
              </div>
              <div className="hero-meta-item">
                <dt>Otevírací doba</dt>
                <dd>Po–Pá 7:00–17:00, So dle domluvy</dd>
              </div>
              <div className="hero-meta-item">
                <dt>E-mail</dt>
                <dd><a href="mailto:servis@autokomplex-matejka.cz">servis@autokomplex-matejka.cz</a></dd>
              </div>
            </dl>
          </div>
        </section>

        <section className="brands" id="nabidka" aria-labelledby="brands-heading">
          <div className="section-inner">
            <div className="section-head">
              <span className="section-tag">01 / Značky v nabídce</span>
              <h2 id="brands-heading" className="section-heading">Prodej a servis dvou značek, žádné kompromisy</h2>
              <p className="section-sub">
                Nejsme bazar se vším možným. Držíme se dvou značek, které pořádně známe do posledního
                šroubku — proškolení technici, originální díly skladem, diagnostika přímo od výrobce.
              </p>
            </div>

            <div className="brand-grid">
              <article className="brand-card">
                <div className="brand-card-media">
                  <img
                    src="/section-1.webp"
                    alt="Vozy Volvo připravené k prodeji v autosalonu AUTOKOMPLEX Matějka"
                  />
                </div>
                <div className="brand-card-body">
                  <span className="brand-card-code">VOZOVÝ PARK — VOLVO</span>
                  <h3>Volvo</h3>
                  <p>
                    Nové i předváděcí vozy Volvo skladem v Olomouci. Testovací jízda, výkup protiúčtem
                    a servisní prohlídka před předáním jsou samozřejmostí u každého kusu.
                  </p>
                  <a className="brand-link" href="tel:+420585123456">
                    Domluvit testovací jízdu
                    <svg viewBox="0 0 20 20" width="16" height="16" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 10h12M11 5l5 5-5 5"/></svg>
                  </a>
                </div>
              </article>

              <article className="brand-card">
                <div className="brand-card-media">
                  <img
                    src="/section-2.webp"
                    alt="Vozy Omoda a Jaecoo na ploše autosalonu AUTOKOMPLEX Matějka"
                  />
                </div>
                <div className="brand-card-body">
                  <span className="brand-card-code">VOZOVÝ PARK — OMODA | JAECOO</span>
                  <h3>Omoda&nbsp;|&nbsp;Jaecoo</h3>
                  <p>
                    Nové modely s plnou zárukou a servisním zázemím na místě. Poradíme s výběrem
                    výbavy, financováním i výkupem stávajícího vozu.
                  </p>
                  <a className="brand-link" href="tel:+420585123456">
                    Nechat si poradit s výběrem
                    <svg viewBox="0 0 20 20" width="16" height="16" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 10h12M11 5l5 5-5 5"/></svg>
                  </a>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="trust" aria-labelledby="trust-heading">
          <div className="section-inner">
            <div className="section-head">
              <span className="section-tag">02 / Servisní kniha dílny</span>
              <h2 id="trust-heading" className="section-heading">Co u nás projde přes zvedák</h2>
              <p className="section-sub">
                Servis vedeme jako pořádnou dílnu, ne přepážku. Každá zakázka má záznam, termín
                a jasnou cenu předem — žádné překvapení na faktuře.
              </p>
            </div>

            <div className="ticket-grid">
              <div className="ticket">
                <span className="ticket-num">Zakázka 01</span>
                <h3>Pravidelný servis a STK</h3>
                <p>Výměna oleje, filtrů, brzd i příprava na STK a emise — spočítáme rozsah předem po telefonu.</p>
              </div>
              <div className="ticket">
                <span className="ticket-num">Zakázka 02</span>
                <h3>Diagnostika a opravy</h3>
                <p>Počítačová diagnostika přímo pro Volvo, Omoda a Jaecoo, odhalíme závadu bez zbytečného rozebírání.</p>
              </div>
              <div className="ticket">
                <span className="ticket-num">Zakázka 03</span>
                <h3>Pneuservis a sezónní výbava</h3>
                <p>Přezutí, vyvážení i uskladnění sady pneu v naší hale — objednáte se na konkrétní hodinu.</p>
              </div>
              <div className="ticket">
                <span className="ticket-num">Zakázka 04</span>
                <h3>Výkup a odkup vozu</h3>
                <p>Odhad ceny na místě, vyřízení dokladů i protiúčet při koupi nového vozu ze skladu.</p>
              </div>
            </div>

            <div className="trust-strip" role="list" aria-label="Důvody důvěry">
              <div className="trust-item" role="listitem">
                <span className="trust-figure">17 let</span>
                <span className="trust-label">servisujeme vozy v Olomouci</span>
              </div>
              <div className="trust-item" role="listitem">
                <span className="trust-figure">2 značky</span>
                <span className="trust-label">autorizovaný prodej i servis</span>
              </div>
              <div className="trust-item" role="listitem">
                <span className="trust-figure">1 telefonát</span>
                <span className="trust-label">a máte termín v dílně</span>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
