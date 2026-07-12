export default function Page() {
  const services = [
    {
      mark: "C",
      title: "Ofsetový tisk",
      text: "Vícebarevné tiskoviny na vhodné druhy papíru až do formátu A2++. Pro výraznější povrch lze přidat UV nebo parciální lakování.",
      detail: "vyšší náklady · A2++ · lakování",
    },
    {
      mark: "M",
      title: "Digitální tisk",
      text: "Rychlé řešení menších zakázek — vizitky, letáky, nástěnné kalendáře i plakáty do formátu A3+.",
      detail: "malé série · A3+ · rychlá výroba",
    },
    {
      mark: "Y",
      title: "Knihařské práce",
      text: "Tiskovinu dokončíme falcováním, výsekem, perforací, spirálou, kroužkovou vazbou, lepením nebo balením do fólie.",
      detail: "vazba · výsek · kompletace",
    },
    {
      mark: "K",
      title: "Grafika a DTP",
      text: "Pomůžeme se sazbou, zlomem, skenováním, kopírováním i přípravou tiskového PDF. Desky osvítíme na CTP zařízení.",
      detail: "sazba · tisková data · CTP",
    },
  ];

  return (
    <main className="site-shell">
      <header className="topbar" aria-label="Hlavní navigace">
        <a className="wordmark" href="#nahoru" aria-label="SLON tiskárna — úvod">
          <span className="wordmark-main">SLON</span>
          <span className="wordmark-sub">tiskárna / Ústí</span>
        </a>
        <nav className="nav-links" aria-label="Obsah stránky">
          <a href="#sluzby">Co tiskneme</a>
          <a href="#tiskarna">Jak pracujeme</a>
        </nav>
        <a className="phone-link" href="tel:+420475216240">
          <span>Zavolat tiskárně</span>
          <strong>475 216 240</strong>
        </a>
      </header>

      <section className="hero" id="nahoru" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="eyebrow">Tiskárna v Ústí nad Labem</p>
          <h1 id="hero-title">
            <span>Od tiskové</span>
            <span className="overprint" data-text="desky">desky</span>
            <span>po hotový kus.</span>
          </h1>
          <p className="hero-lead">
            Ofset, digitál, knihařské zpracování i příprava dat pod jednou střechou. Řekněte nám náklad, formát a termín — navrhneme vhodný postup.
          </p>
          <div className="hero-actions">
            <a className="primary-action" href="tel:+420475216240">
              Zavolat 475 216 240
              <span aria-hidden="true">↗</span>
            </a>
            <a className="text-action" href="#sluzby">Prohlédnout možnosti tisku</a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="registration" aria-hidden="true">
            <span>C</span><span>M</span><span>Y</span><span>K</span>
          </div>
          <figure className="hero-image-wrap">
            <img
              src="/hero.webp"
              alt="Detail práce v tiskárně SLON v Ústí nad Labem"
              className="hero-image"
            />
            <figcaption>
              <span>Zakázka prochází tiskem i dokončením u nás</span>
              <span>Ústí nad Labem</span>
            </figcaption>
          </figure>
          <div className="crop-mark crop-mark-a" aria-hidden="true" />
          <div className="crop-mark crop-mark-b" aria-hidden="true" />
        </div>
      </section>

      <section className="services-section" id="sluzby" aria-labelledby="services-title">
        <div className="section-heading">
          <p className="eyebrow">Možnosti výroby</p>
          <h2 id="services-title">Správná technologie podle nákladu, ne podle zvyku.</h2>
          <p>
            Malou sérii vytiskneme digitálně, vyšší náklad ofsetem. Následné zpracování nemusíte shánět jinde.
          </p>
        </div>

        <div className="services-layout">
          <figure className="section-image-frame">
            <img
              src="/section-1.webp"
              alt="Barevné tiskoviny připravené ve výrobě tiskárny"
              className="section-image"
            />
            <figcaption>Barva, papír a dokončení tvoří jeden výrobní celek.</figcaption>
          </figure>

          <div className="service-list">
            {services.map((service) => (
              <article className="service-item" key={service.mark}>
                <span className={`ink-dot ink-${service.mark.toLowerCase()}`} aria-hidden="true">
                  {service.mark}
                </span>
                <div>
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                  <small>{service.detail}</small>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="about-section" id="tiskarna" aria-labelledby="about-title">
        <div className="about-copy">
          <p className="eyebrow">Tiskárna SLON</p>
          <h2 id="about-title">Data zkontrolujeme. Papír potiskneme. Zakázku dokončíme.</h2>
          <p className="about-intro">
            V Ústí nad Labem spojujeme přípravu tiskových dat, samotný tisk a knihařské práce. Díky tomu víte, kdo vaši zakázku řeší od dodaného PDF až po zabalené výtisky.
          </p>

          <dl className="proof-list">
            <div>
              <dt>Formát</dt>
              <dd>Ofset až A2++, digitální tisk až A3+</dd>
            </div>
            <div>
              <dt>Dokončení</dt>
              <dd>Falc, vazba, výsek, perforace i fóliování</dd>
            </div>
            <div>
              <dt>Příprava</dt>
              <dd>Sazba, zlom, tiskové PDF a osvit CTP desek</dd>
            </div>
            <div>
              <dt>Důvěra</dt>
              <dd>Rozvoj tiskárny podpořil projekt Evropské unie</dd>
            </div>
          </dl>
        </div>

        <figure className="about-visual">
          <img
            src="/section-2.webp"
            alt="Kontrola a dokončování tiskové zakázky v tiskárně SLON"
            className="about-image"
          />
          <figcaption>
            <span className="status-dot" aria-hidden="true" />
            Nabídka služeb aktualizována pro rok 2026
          </figcaption>
        </figure>
      </section>
    </main>
  );
}
