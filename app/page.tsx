export default function Page() {
  return (
    <main>
      <header className="site-header" aria-label="Hlavní navigace">
        <a className="wordmark" href="#zacatek" aria-label="SBS Elektro – úvod">
          <span className="wordmark-mark" aria-hidden="true"><i /><i /><i /><i /></span>
          <span>SBS <b>ELEKTRO</b></span>
        </a>

        <nav className="site-nav" aria-label="Navigace stránky">
          <a href="#reseni">Řešení</a>
          <a href="#zkusenost">O nás</a>
        </nav>

        <a className="header-phone" href="tel:+420475207940">+420 475 207 940</a>
      </header>

      <section className="hero" id="zacatek" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="eyebrow">Elektroinstalace Gira · Ústí nad Labem</p>
          <h1 id="hero-title">Elektřina,<br />která <em>myslí</em><br />s domem.</h1>
          <p className="hero-intro">
            Vypínač je jen viditelný začátek. Navrhujeme ovládání, komunikaci a chytré funkce tak,
            aby celý dům fungoval přirozeně — dnes i za deset let.
          </p>
          <div className="hero-actions">
            <a className="primary-action" href="tel:+420475207940">Zavolat odborníkovi</a>
            <a className="text-action" href="#reseni">Prohlédnout řešení <span aria-hidden="true">↓</span></a>
          </div>
        </div>

        <div className="hero-visual">
          <img
            src="/hero.webp"
            alt="Detail precizně osazeného vypínače Gira v moderním interiéru"
          />
          <div className="module-guide" aria-hidden="true">
            <span>70</span>
            <i />
            <span>70</span>
          </div>
          <div className="hero-note">
            <span className="pulse" aria-hidden="true" />
            <p><strong>Gira System 70</strong>Jedna instalační logika. Mnoho podob domova.</p>
          </div>
        </div>
      </section>

      <section className="solutions" id="reseni" aria-labelledby="solutions-title">
        <div className="section-heading">
          <p className="eyebrow">Co spolu vyřešíme</p>
          <h2 id="solutions-title">Technika se schová.<br />Pocit zůstane.</h2>
          <p>
            Vybereme prvky podle prostoru, způsobu používání i projektu elektroinstalace. Neprodáváme
            jeden univerzální balíček — skládáme systém, který dává smysl právě vašemu domu.
          </p>
        </div>

        <div className="solutions-layout">
          <figure className="solution-image">
            <img
              src="/section-1.webp"
              alt="Designové ovládací prvky Gira sladěné s materiály interiéru"
              loading="lazy"
            />
            <figcaption>Ovládání, které respektuje architekturu interiéru.</figcaption>
          </figure>

          <div className="solution-list">
            <article>
              <p className="service-code">OVLÁDÁNÍ</p>
              <h3>Vypínače a zásuvky</h3>
              <p>Designové řady Gira, správné rámečky, povrchy a funkce pro každou místnost.</p>
              <span>Gira E2 · Standard 55 · System 3000</span>
            </article>
            <article>
              <p className="service-code">KOMUNIKACE</p>
              <h3>Dveře pod kontrolou</h3>
              <p>Videotelefony a vstupní systémy, které propojí branku, dveře i mobilní telefon.</p>
              <span>Bytové stanice · video · přístup</span>
            </article>
            <article>
              <p className="service-code">AUTOMATIZACE</p>
              <h3>Chytrý dům s KNX</h3>
              <p>Světla, stínění, teplota a bezpečnost v jednom otevřeném a dlouhodobě udržitelném systému.</p>
              <span>KNX/EIB · vizualizace · energetika</span>
            </article>
            <article>
              <p className="service-code">EXTERIÉR</p>
              <h3>Energie i venku</h3>
              <p>Zásuvkové a světelné sloupky pro terasu, zahradu, příjezdovou cestu i nabíjení.</p>
              <span>Světlo · zásuvky · odolné provedení</span>
            </article>
          </div>
        </div>
      </section>

      <section className="experience" id="zkusenost" aria-labelledby="experience-title">
        <div className="experience-image">
          <img
            src="/section-2.webp"
            alt="Hotová inteligentní elektroinstalace v české moderní stavbě"
            loading="lazy"
          />
          <div className="reference-label">
            <small>Realizace</small>
            <strong>Kloboucká lesní</strong>
            <span>KNX · osvětlení · ovládání</span>
          </div>
        </div>

        <div className="experience-copy">
          <p className="eyebrow">Z Ústí do celého Česka</p>
          <h2 id="experience-title">25 let známe Gira do posledního modulu.</h2>
          <p className="lead">
            Jsme výhradním zástupcem Gira na českém trhu. Architektům, projektantům, elektrikářům
            i majitelům domů pomáháme převést představu do přesné specifikace.
          </p>

          <dl className="trust-grid">
            <div>
              <dt>Technická konzultace</dt>
              <dd>Ověříme kompatibilitu a navrhneme skladbu systému před objednávkou.</dd>
            </div>
            <div>
              <dt>Česká podpora</dt>
              <dd>Na telefonu mluvíte s člověkem, který výrobky skutečně zná.</dd>
            </div>
            <div>
              <dt>Zázemí v Ústí</dt>
              <dd>Produkty i technické podklady řešíme přímo z našeho sídla.</dd>
            </div>
          </dl>

          <div className="direct-contact">
            <p>Potřebujete ověřit konkrétní řešení?</p>
            <a href="mailto:info@gira.cz">Napsat na info@gira.cz</a>
          </div>
        </div>
      </section>
    </main>
  );
}
