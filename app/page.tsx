export default function Page() {
  const services = [
    {
      title: "Návrh, který počítá s realitou",
      text: "Prověříme dispozici, rozvody i způsob, jak koupelnu používáte. Výsledkem je promyšlený prostor, ne jen pěkná vizualizace.",
      detail: "dispozice · materiály · rozpočet",
    },
    {
      title: "Rekonstrukce bez hluchých míst",
      text: "Navážeme jednotlivá řemesla tak, aby na sebe práce skutečně seděly — od demontáže a instalací až po přesné spáry a osazení vybavení.",
      detail: "rozvody · povrchy · montáž",
    },
    {
      title: "Vybavení na míru prostoru",
      text: "Vybereme sanitu, baterie, osvětlení i nábytek. Kde katalogový rozměr nestačí, zapojíme české výrobce atypického nábytku.",
      detail: "sanita · světlo · nábytek",
    },
  ];

  return (
    <div className="irpa-page">
      <a className="skip-link" href="#obsah">
        Přeskočit na obsah
      </a>

      <header className="hero" id="domu">
        <img
          className="hero__image"
          src="/hero.webp"
          alt="Moderní koupelna navržená studiem irpa design v Olomouci"
          width="1920"
          height="1280"
          fetchPriority="high"
        />
        <div className="hero__shade" aria-hidden="true" />

        <nav className="nav" aria-label="Hlavní navigace">
          <a className="wordmark" href="#domu" aria-label="irpa design, úvod">
            <span>irpa</span>
            <small>design / olomouc</small>
          </a>
          <div className="nav__links">
            <a href="#sluzby">Co zařídíme</a>
            <a href="#pristup">Jak pracujeme</a>
            <a className="nav__phone" href="tel:+420775775931">
              Zavolat
            </a>
          </div>
        </nav>

        <div className="tile-plan" aria-hidden="true">
          <span className="tile-plan__vertical" />
          <span className="tile-plan__horizontal" />
          <span className="tile-plan__drain" />
          <span className="tile-plan__measure">600 × 600</span>
          <span className="tile-plan__joint">spára 2 mm</span>
        </div>

        <div className="hero__content">
          <p className="eyebrow">Rekonstrukce koupelen · Olomouc</p>
          <h1>
            Koupelna,
            <span>kde sedí</span>
            každá spára.
          </h1>
          <div className="hero__bottom">
            <p>
              Od první skici po poslední baterii. Navrhneme a zrealizujeme
              koupelnu jako jeden celek — funkční, přesný a váš.
            </p>
            <a className="primary-link" href="mailto:info@irpadesign.cz?subject=Rekonstrukce%20koupelny">
              Probrat rekonstrukci
              <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </header>

      <main id="obsah">
        <section className="services" id="sluzby" aria-labelledby="services-title">
          <div className="section-intro">
            <p className="section-label">Co zařídíme</p>
            <h2 id="services-title">Jeden návrh. Jedna návaznost. Žádné improvizace mezi řemesly.</h2>
          </div>

          <div className="services__layout">
            <figure className="material-frame">
              <img
                src="/section-1.webp"
                alt="Detail obkladů, koupelnového nábytku a umyvadla v realizaci irpa design"
                width="1200"
                height="1500"
                loading="lazy"
              />
              <figcaption>
                <span>Detail rozhoduje</span>
                Hrany, návaznosti a materiály řešíme už v návrhu.
              </figcaption>
            </figure>

            <div className="service-list">
              {services.map((service) => (
                <article className="service" key={service.title}>
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                  <span>{service.detail}</span>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="approach" id="pristup" aria-labelledby="approach-title">
          <div className="approach__image-wrap">
            <img
              src="/section-2.webp"
              alt="Hotová koupelna s přesně navazujícími povrchy a vestavěným vybavením"
              width="1600"
              height="1200"
              loading="lazy"
            />
            <div className="image-note" aria-hidden="true">
              <span>rovina</span>
              <i />
              <span>detail</span>
            </div>
          </div>

          <div className="approach__content">
            <p className="section-label">Studio a realizace</p>
            <h2 id="approach-title">Dobrá koupelna nestárne s trendem.</h2>
            <p className="approach__lead">
              V olomouckém studiu spojujeme návrh interiéru, kvalitní vybavení
              a poctivé řemeslo. Vy vidíte celek. My hlídáme vše, co je pod
              povrchem i v každém napojení.
            </p>

            <dl className="trust-grid">
              <div>
                <dt>Osobně</dt>
                <dd>Jižní 99/29, Slavonín, Olomouc</dd>
              </div>
              <div>
                <dt>V souvislostech</dt>
                <dd>Návrh, výběr vybavení a realizace pod jedním vedením</dd>
              </div>
              <div>
                <dt>Bez omezení katalogem</dt>
                <dd>Italské značky i atypická výroba od českých řemeslníků</dd>
              </div>
            </dl>

            <p className="contact-line">
              Máte půdorys nebo jen první představu? Napište na{" "}
              <a href="mailto:info@irpadesign.cz">info@irpadesign.cz</a> nebo
              zavolejte na <a href="tel:+420775775931">+420 775 775 931</a>.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
