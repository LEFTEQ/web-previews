export default function Page() {
  return (
    <main>
      <section className="hero" aria-labelledby="hero-title">
        <header className="site-header">
          <a className="wordmark" href="#top" aria-label="Autoslužby HK – úvod">
            <span>Autoslužby</span>
            <strong>HK</strong>
          </a>

          <nav className="site-nav" aria-label="Hlavní navigace">
            <a href="#sluzby">Pomoc na cestě</a>
            <a href="#jistota">Proč nám volat</a>
          </nav>

          <a className="header-phone" href="tel:+420602405140">
            <span>Okamžitá asistence</span>
            602 405 140
          </a>
        </header>

        <div className="hero-copy" id="top">
          <p className="eyebrow"><span aria-hidden="true" /> Odtahová služba · Hradec Králové</p>
          <h1 id="hero-title">Když auto stojí,<br /><em>my už jedeme.</em></h1>
          <p className="hero-lead">
            Nonstop odtah, vyproštění a pomoc při poruše nebo nehodě. Váš vůz bezpečně dopravíme tam, kam potřebujete.
          </p>
          <div className="hero-actions">
            <a className="primary-button" href="tel:+420602405140">
              Zavolat odtah
              <span aria-hidden="true">↗</span>
            </a>
            <p><strong>24 hodin denně</strong><br />Hradec Králové a okolí</p>
          </div>
        </div>

        <div className="hero-visual" aria-label="Odtahový vůz Autoslužby HK při zásahu">
          <img
            src="/hero.webp"
            alt="Odtahový vůz Autoslužby HK připravený k zásahu v Hradci Králové"
            width="1600"
            height="1100"
            fetchPriority="high"
          />
          <div className="tow-strap" aria-hidden="true">
            <span>NONSTOP</span>
            <i />
          </div>
          <div className="dispatch-card">
            <span className="pulse" aria-hidden="true" />
            <p>Dispečink je v provozu</p>
            <strong>+420 777 243 140</strong>
          </div>
        </div>
      </section>

      <section className="services" id="sluzby" aria-labelledby="services-title">
        <div className="section-heading">
          <p className="eyebrow dark"><span aria-hidden="true" /> Co vyřešíme</p>
          <h2 id="services-title">Pomoc podle toho,<br />co se stalo.</h2>
          <p>Řekněte nám, kde stojíte a co se s vozem děje. Navrhneme nejrychlejší bezpečný postup.</p>
        </div>

        <div className="service-layout">
          <figure className="service-photo">
            <img
              src="/section-1.webp"
              alt="Nakládání nepojízdného vozu na odtahovou plošinu"
              width="1200"
              height="900"
              loading="lazy"
            />
            <figcaption>Techniku volíme podle vozu a situace na místě.</figcaption>
          </figure>

          <div className="service-list">
            <article>
              <span className="service-icon" aria-hidden="true">↗</span>
              <div>
                <p className="situation">Porucha nebo nehoda</p>
                <h3>Odtah vozidla</h3>
                <p>Vůz naložíme a převezeme do vámi zvoleného servisu, domů nebo na naše střežené parkoviště.</p>
              </div>
            </article>
            <article>
              <span className="service-icon" aria-hidden="true">⌁</span>
              <div>
                <p className="situation">Vůz mimo silnici</p>
                <h3>Vyproštění</h3>
                <p>Pomůžeme po havárii, zapadnutí i v obtížně přístupném místě. Nejdřív zajistíme okolí i vozidlo.</p>
              </div>
            </article>
            <article>
              <span className="service-icon" aria-hidden="true">●</span>
              <div>
                <p className="situation">Pneumatika nebo závada</p>
                <h3>Asistence na místě</h3>
                <p>Prověříme, zda lze bezpečně pokračovat. Když ne, zařídíme odtah, servis i zápůjčku vozu.</p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="trust" id="jistota" aria-labelledby="trust-title">
        <div className="trust-photo">
          <img
            src="/section-2.webp"
            alt="Detail profesionální odtahové techniky Autoslužby HK"
            width="1200"
            height="1000"
            loading="lazy"
          />
          <div className="insured-stamp">
            <span>Přepravované vozy</span>
            <strong>pojištěny min.<br />na 4 mil. Kč</strong>
          </div>
        </div>

        <div className="trust-copy">
          <p className="eyebrow light"><span aria-hidden="true" /> Jistota při každém převozu</p>
          <h2 id="trust-title">Vaše auto není jen další náklad.</h2>
          <p className="trust-lead">
            Od prvního hovoru víte, co bude následovat. Vůz zabezpečíme pro přepravu, doručíme na určené místo a pomůžeme navázat servisem nebo náhradním vozem.
          </p>

          <dl className="trust-facts">
            <div>
              <dt>Po nehodě</dt>
              <dd>Střežené parkování po dobu šetření nehody nebo likvidace pojistné události.</dd>
            </div>
            <div>
              <dt>Bez zdržení</dt>
              <dd>Jedna centrála propojí odtah, servis i zápůjčku vozidla.</dd>
            </div>
            <div>
              <dt>Místní služba</dt>
              <dd>Zázemí v Hradci Králové a znalost okolních tras i servisů.</dd>
            </div>
          </dl>

          <div className="current-note">
            <time dateTime="2026">Provozní informace ověřeny pro rok 2026</time>
            <a href="mailto:info@autosluzbyhk.cz">info@autosluzbyhk.cz</a>
          </div>
        </div>
      </section>
    </main>
  );
}
