export default function Page() {
  return (
    <main className="site-shell">
      <header className="topbar">
        <a className="wordmark" href="#nahoru" aria-label="REPROSERVIS CZ – úvod">
          <span className="wordmark-mark" aria-hidden="true"><i /><i /><i /></span>
          <span>REPRO<span>SERVIS</span></span>
          <small>Brno · od 1990</small>
        </a>

        <nav className="nav" aria-label="Hlavní navigace">
          <a href="#sluzby">Co zařídíme</a>
          <a href="#servis">Proč my</a>
        </nav>

        <a className="phone-link" href="tel:+420603475270">
          <span>Zavolat servis</span>
          <strong>603 475 270</strong>
        </a>
      </header>

      <section className="hero" id="nahoru" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="eyebrow">Tiskárny, kopírky a spotřební materiál · Brno</p>
          <h1 id="hero-title">Kancelář, která se <em>nezasekne.</em></h1>
          <p className="hero-lead">
            Vybereme zařízení podle skutečného provozu, přivezeme ho, zapojíme
            a postaráme se o servis. Bez obíhání dodavatelů a bez zbytečných prostojů.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="tel:+420603475270">Zavolat 603 475 270</a>
            <a className="text-link" href="#sluzby">Prohlédnout služby <span aria-hidden="true">↓</span></a>
          </div>
          <ul className="brand-line" aria-label="Servisované značky">
            <li>Ricoh</li>
            <li>Kyocera</li>
            <li>Nashuatec</li>
            <li>Brother</li>
            <li>HP</li>
          </ul>
        </div>

        <div className="hero-visual">
          <div className="paper-index" aria-hidden="true">
            <span>A3</span><span>A4</span><span>A5</span>
          </div>
          <figure className="hero-image">
            <img src="/hero.webp" alt="Multifunkční kancelářská tiskárna v nabídce REPROSERVIS CZ" />
            <figcaption>
              <span>Výběr na míru</span>
              <strong>PRODEJ · PRONÁJEM · SERVIS</strong>
            </figcaption>
          </figure>
          <div className="registration-mark" aria-hidden="true"><span>C</span><span>M</span><span>Y</span><span>K</span></div>
        </div>
      </section>

      <section className="services" id="sluzby" aria-labelledby="services-title">
        <div className="section-heading">
          <p className="eyebrow">Jedno místo pro celý tiskový provoz</p>
          <h2 id="services-title">Od první stránky po poslední toner.</h2>
          <p>Řešení skládáme podle počtu lidí, objemu tisku a toho, co opravdu potřebujete kopírovat, skenovat a archivovat.</p>
        </div>

        <div className="services-layout">
          <figure className="section-image services-image">
            <img src="/section-1.webp" alt="Detail tiskového mechanismu a připraveného kancelářského papíru" />
            <figcaption>Techniku dodáme, nastavíme a ukážeme vašemu týmu.</figcaption>
          </figure>

          <div className="service-list">
            <article>
              <span className="service-code">ZAŘÍZENÍ</span>
              <div>
                <h3>Tiskárny a multifunkce</h3>
                <p>Barevné i černobílé modely pro menší kancelář, provozovnu i vytížené oddělení.</p>
              </div>
            </article>
            <article>
              <span className="service-code">PROVOZ</span>
              <div>
                <h3>Tonery, papír a příslušenství</h3>
                <p>Správný spotřební materiál bez hledání kompatibility a nepříjemných překvapení při tisku.</p>
              </div>
            </article>
            <article>
              <span className="service-code">PÉČE</span>
              <div>
                <h3>Záruční i pozáruční servis</h3>
                <p>Diagnostika, opravy a pravidelná údržba zařízení Ricoh, Kyocera, Nashuatec, Brother a HP.</p>
              </div>
            </article>
            <article>
              <span className="service-code">DOKUMENTY</span>
              <div>
                <h3>Copycentrum v Brně</h3>
                <p>Kopírování, tisk a dokončení dokumentů, když potřebujete hotový výsledek místo vlastního stroje.</p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="trust" id="servis" aria-labelledby="trust-title">
        <div className="trust-copy">
          <p className="eyebrow">Servisní středisko · Křížová 4, Brno</p>
          <h2 id="trust-title">Technice rozumíme už od roku 1990. Vám stačí popsat problém.</h2>
          <p className="trust-lead">Když tiskárna hlásí chybu nebo potřebujete vybavit novou kancelář, mluvíte s lidmi, kteří zařízení prodávají i opravují.</p>

          <dl className="proof-list">
            <div><dt>35+ let</dt><dd>zkušeností s kancelářskou technikou</dd></div>
            <div><dt>Brno</dt><dd>prodejna, servisní středisko a copycentrum</dd></div>
            <div><dt>Non-stop</dt><dd>servisní podpora pro smluvní zákazníky</dd></div>
          </dl>

          <div className="contact-strip">
            <div><span>Potřebujete poradit nebo servis?</span><strong>Křížová 4, 603 00 Brno</strong></div>
            <a className="button button-dark" href="tel:+420603475270">Zavolat technikovi</a>
          </div>
        </div>

        <figure className="section-image trust-image">
          <img src="/section-2.webp" alt="Servisní technik kontroluje kancelářskou tiskárnu" />
          <figcaption><span>Aktivní provoz</span><strong>Informace ověřeny 30. 6. 2026</strong></figcaption>
        </figure>
      </section>
    </main>
  );
}
