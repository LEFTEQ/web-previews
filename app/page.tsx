export default function Page() {
  const services = [
    {
      title: "Servis chlazení",
      text: "Diagnostika, opravy a pravidelná péče o chladicí zařízení v gastro provozech, obchodech i menších výrobách."
    },
    {
      title: "Výrobníky ledu a drtě",
      text: "Čištění, odvápnění a opravy zařízení, u kterých rozhoduje čistota, výkon a spolehlivý denní provoz."
    },
    {
      title: "Klimatizace a VZT",
      text: "Servis klimatizací a vzduchotechniky včetně kontroly filtrů, kondenzátu a skutečného výkonu zařízení."
    },
    {
      title: "Prodej a projekce",
      text: "Pomůžeme vybrat chlazení podle prostoru, provozní zátěže a spotřeby — ne jen podle katalogového výkonu."
    }
  ];

  return (
    <main className="site-shell">
      <section className="hero" aria-labelledby="hero-title">
        <header className="topbar">
          <a className="wordmark" href="#top" aria-label="Frigopro — úvod">
            <span className="wordmark-mark" aria-hidden="true">F°</span>
            <span>FRIGO<span>PRO</span></span>
          </a>

          <nav className="nav" aria-label="Hlavní navigace">
            <a href="#sluzby">Co servisujeme</a>
            <a href="#zazemi">Jak pracujeme</a>
          </nav>

          <a className="topbar-phone" href="tel:+420736764431">Zavolat servis</a>
        </header>

        <div className="hero-image" id="top">
          <img
            src="/hero.webp"
            alt="Technik při servisu profesionálního chladicího zařízení"
          />
          <div className="hero-shade" aria-hidden="true" />

          <div className="hero-copy">
            <p className="eyebrow">Servis chlazení · Brno a okolí</p>
            <h1 id="hero-title">Chlad držíme.<br /><em>Provoz běží.</em></h1>
            <p className="hero-intro">
              Opravujeme chlazení, výrobníky ledu, klimatizace a vzduchotechniku.
              Věcně, pečlivě a s technikem, kterému můžete rovnou popsat závadu.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="tel:+420736764431">
                <span>Zavolat +420 736 764 431</span>
                <span aria-hidden="true">↗</span>
              </a>
              <a className="text-link" href="mailto:servis@frigopro.cz">Napsat technikovi</a>
            </div>
          </div>

          <aside className="temperature-rail" aria-label="Provozní informace">
            <div className="rail-scale" aria-hidden="true">
              <span>+8</span><i /><i /><i /><span>0</span><i /><i /><span>−18</span>
            </div>
            <div className="rail-status">
              <span className="status-light" aria-hidden="true" />
              <p><strong>Po–Pá 8:00–15:00</strong><br />Brno-Husovice</p>
            </div>
          </aside>
        </div>
      </section>

      <section className="services section-pad" id="sluzby" aria-labelledby="services-title">
        <div className="section-heading">
          <p className="eyebrow eyebrow-dark">Pod jedním servisním číslem</p>
          <h2 id="services-title">Od prvního syčení<br />po stabilní teplotu.</h2>
          <p>
            Když zařízení přestane chladit, potřebujete zjistit příčinu — ne poslouchat obecné rady.
            Začneme diagnostikou a navrhneme opravu, která dává provozně i finančně smysl.
          </p>
        </div>

        <div className="services-layout">
          <figure className="service-photo">
            <img
              src="/section-1.webp"
              alt="Detail servisované chladicí technologie a měřicího vybavení"
              loading="lazy"
            />
            <figcaption>
              <span>Diagnostika v místě</span>
              <span>Brno + okolí</span>
            </figcaption>
          </figure>

          <div className="service-list">
            {services.map((service) => (
              <article className="service-item" key={service.title}>
                <span className="service-dot" aria-hidden="true" />
                <div>
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="trust section-pad" id="zazemi" aria-labelledby="trust-title">
        <div className="trust-grid">
          <div className="trust-copy">
            <p className="eyebrow">Servisní zázemí · Svitavská 17</p>
            <h2 id="trust-title">Technika bez<br />studených řečí.</h2>
            <p className="trust-lead">
              FRIGOPRO vede David Kuře. Z Brna-Husovic vyjíždíme k poruchám i plánovanému servisu
              a se zákazníkem řešíme konkrétní zařízení, příznaky a další postup.
            </p>

            <dl className="facts">
              <div>
                <dt>Kde nás najdete</dt>
                <dd>Svitavská 917/17<br />614 00 Brno-Husovice</dd>
              </div>
              <div>
                <dt>Kdy jsme v provozu</dt>
                <dd>Po–Pá, 8:00–15:00<br /><small>Pohotovost mimo tuto dobu pro smluvní klienty.</small></dd>
              </div>
              <div>
                <dt>Technický kontakt</dt>
                <dd><a href="mailto:servis@frigopro.cz">servis@frigopro.cz</a><br /><a href="tel:+420736764431">+420 736 764 431</a></dd>
              </div>
            </dl>
          </div>

          <figure className="workshop-photo">
            <img
              src="/section-2.webp"
              alt="Servisní zázemí firmy Frigopro v Brně-Husovicích"
              loading="lazy"
            />
            <figcaption>
              <strong>FRIGOPRO</strong>
              <span>Brněnský servis od diagnostiky po opravu</span>
            </figcaption>
          </figure>
        </div>
      </section>
    </main>
  );
}
