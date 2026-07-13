export default function HomePage() {
  return (
    <main>
      <section className="hero" aria-labelledby="hero-title">
        <img
          className="hero__image"
          src="/hero.webp"
          alt="Čerstvě uvázaná kytice v Květinářství GALERIE Brno"
        />
        <div className="hero__shade" aria-hidden="true" />

        <header className="site-header">
          <a className="wordmark" href="#top" aria-label="Květinářství Galerie Brno – úvod">
            <span>Květinářství</span>
            <strong>GALERIE</strong>
            <small>Brno</small>
          </a>
          <nav aria-label="Hlavní navigace">
            <a href="#nabidka">Kytice a rozvoz</a>
            <a href="#o-nas">Naše květinářství</a>
          </nav>
          <a className="header-call" href="tel:+420704177648">Zavolat</a>
        </header>

        <div className="hero__content" id="top">
          <p className="eyebrow">Benešova 4 · Brno-střed</p>
          <h1 id="hero-title">
            Květiny,<br />
            které mají<br />
            <em>co říct.</em>
          </h1>
          <p className="hero__intro">
            Vážeme osobité kytice z čerstvých sezónních květin. Pro radost, svatbu,
            poděkování i chvíle, kdy slova nestačí.
          </p>
          <div className="hero__actions">
            <a className="button button--primary" href="tel:+420704177648">
              Objednat na +420 704 177 648
            </a>
            <a className="text-link" href="#nabidka">Prohlédnout nabídku</a>
          </div>
        </div>

        <div className="gallery-label" aria-label="Informace o rozvozu">
          <span className="gallery-label__type">Dnešní vazba</span>
          <strong>Po Brně až k obdarovanému</strong>
          <span>Rozvoz běžně do 150 minut</span>
        </div>
      </section>

      <section className="offer" id="nabidka" aria-labelledby="offer-title">
        <div className="section-heading">
          <p className="eyebrow eyebrow--dark">Co pro vás uvážeme</p>
          <h2 id="offer-title">Vyberte náladu.<br />Květiny vybereme my.</h2>
          <p>
            Stačí nám říct příležitost, barevnost a rozpočet. Florista sestaví každou
            kytici podle aktuální nabídky, ne podle jedné fotografie ve skladu.
          </p>
        </div>

        <div className="offer__visual">
          <img
            src="/section-1.webp"
            alt="Floristická kompozice z čerstvých sezónních květin"
          />
          <span className="image-note">Každý kus je originál</span>
        </div>

        <div className="offer__list">
          <article>
            <div>
              <h3>Kytice na objednávku</h3>
              <p>Barevná, jemná nebo výrazná — uvázaná pro konkrétního člověka.</p>
            </div>
            <strong>od 599 Kč</strong>
          </article>
          <article>
            <div>
              <h3>Rozvoz po Brně</h3>
              <p>Hotovou kytici doručíme domů, do kanceláře i přímo na oslavu.</p>
            </div>
            <strong>běžně do 150 min</strong>
          </article>
          <article>
            <div>
              <h3>Svatby a události</h3>
              <p>Svatební kytice, korsáže a květinová výzdoba sladěná s místem.</p>
            </div>
            <strong>po konzultaci</strong>
          </article>
          <article>
            <div>
              <h3>Květinové boxy a dekorace</h3>
              <p>Flower boxy, věnce, rostliny a drobnosti pro domov i jako dárek.</p>
            </div>
            <strong>od 899 Kč</strong>
          </article>
        </div>
      </section>

      <section className="about" id="o-nas" aria-labelledby="about-title">
        <div className="about__image-wrap">
          <img
            src="/section-2.webp"
            alt="Interiér prostorného Květinářství GALERIE v centru Brna"
          />
          <div className="address-card">
            <span>Najdete nás</span>
            <strong>Benešova 4</strong>
            <span>602 00 Brno</span>
          </div>
        </div>

        <div className="about__content">
          <p className="eyebrow eyebrow--dark">Květinová galerie v centru</p>
          <h2 id="about-title">Prostor pro květiny. A pro dobrý výběr.</h2>
          <p className="about__lead">
            Nechtěli jsme další obchod zaskládaný zbožím. Vytvořili jsme vzdušné
            květinářství, kde si můžete kytici v klidu vybrat a probrat ji přímo
            s floristou.
          </p>
          <p>
            Náš mladý, zkušený tým váže s respektem k příležitosti i vašemu rozpočtu.
            Stejnou péči dostane narozeninová kytice, svatební výzdoba i decentní
            vazba na rozloučenou.
          </p>

          <dl className="trust-list">
            <div>
              <dt>Osobně</dt>
              <dd>Benešova 4, Brno-střed</dd>
            </div>
            <div>
              <dt>Na telefonu</dt>
              <dd><a href="tel:+420704177648">+420 704 177 648</a></dd>
            </div>
            <div>
              <dt>Po Brně</dt>
              <dd>Rozvoz kytic na přání</dd>
            </div>
          </dl>

          <a className="button button--dark" href="tel:+420704177648">
            Domluvit kytici s floristou
          </a>
        </div>
      </section>
    </main>
  );
}
