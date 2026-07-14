export default function Page() {
  return (
    <main>
      <section className="hero" aria-labelledby="hero-title">
        <header className="site-header">
          <a className="wordmark" href="#top" aria-label="Kadeřnictví No.1, úvod">
            <span className="wordmark-service">KADEŘNICTVÍ</span>
            <span className="wordmark-name">NO<span aria-hidden="true">/</span>1</span>
          </a>

          <a className="header-phone" href="tel:+420772000100">
            <span>Zavolat do salonu</span>
            <strong>+420 772 000 100</strong>
          </a>
        </header>

        <div className="hero-layout" id="top">
          <div className="hero-copy">
            <p className="eyebrow">Praha 1 · OC Palladium</p>
            <h1 id="hero-title">Tady se Praha stříhá po svém.</h1>
            <p className="hero-intro">
              Střih, barva i barber služby v centru města. Jsme tu každý den od rána do večera.
            </p>

            <div className="hero-actions">
              <a className="primary-action" href="tel:+420772000100">
                Zavolat
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M7 17 17 7M8 7h9v9" />
                </svg>
              </a>
              <a className="text-action" href="#sluzby">Prohlédnout služby</a>
            </div>

            <dl className="hero-facts">
              <div>
                <dt>Dnes i každý den</dt>
                <dd>9:00–21:00</dd>
              </div>
              <div>
                <dt>Najdete nás</dt>
                <dd>Náměstí Republiky 1</dd>
              </div>
            </dl>
          </div>

          <figure className="hero-visual">
            <img
              src="/hero.webp"
              alt="Kadeřnická práce v salonu Kadeřnictví No.1 v pražském Palladiu"
              width="1400"
              height="1700"
              fetchPriority="high"
            />
            <figcaption>
              <span>NO.1</span>
              <strong>PALLADIUM</strong>
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="services" id="sluzby" aria-labelledby="services-title">
        <div className="section-heading">
          <p className="eyebrow">Co pro vás uděláme</p>
          <h2 id="services-title">Od čisté linie po novou barvu.</h2>
          <p>
            Řekněte nám, co od vlasů potřebujete. Doporučíme střih a péči, které dávají smysl vašemu stylu i běžnému dni.
          </p>
        </div>

        <div className="services-layout">
          <figure className="cut-image">
            <img
              src="/section-1.webp"
              alt="Detail precizního stříhání vlasů v salonu"
              width="1200"
              height="900"
              loading="lazy"
            />
          </figure>

          <div className="service-list">
            <article>
              <h3>Střih a styling</h3>
              <p>Dámské, pánské i dětské střihy, foukaná a úprava pro všední den i událost.</p>
              <span>Vlasy</span>
            </article>
            <article>
              <h3>Barvení</h3>
              <p>Nový odstín, oživení barvy i práce s odrosty podle aktuálního stavu vašich vlasů.</p>
              <span>Barva</span>
            </article>
            <article>
              <h3>Barber služby</h3>
              <p>Pánský střih, úprava kontur a vousů. Pro spojení s barberem volejte linku 241.</p>
              <span>Vousy</span>
            </article>
          </div>
        </div>
      </section>

      <section className="location" aria-labelledby="location-title">
        <div className="location-card">
          <div className="location-copy">
            <p className="eyebrow">Salon v centru Prahy</p>
            <h2 id="location-title">Péče o vlasy mezi metrem a městem.</h2>
            <p className="location-lead">
              Salon najdete přímo v OC Palladium na Náměstí Republiky. Otevřeno máme sedm dní v týdnu, vždy od 9:00 do 21:00.
            </p>

            <dl className="location-details">
              <div>
                <dt>Adresa</dt>
                <dd>Nám. Republiky 1078/1<br />Praha 1</dd>
              </div>
              <div>
                <dt>Provozní doba</dt>
                <dd>Po–Ne<br />9:00–21:00</dd>
              </div>
              <div>
                <dt>Ceník salonu</dt>
                <dd>Kategorie B<br />Servisní poplatek 70 Kč</dd>
              </div>
              <div>
                <dt>Telefon</dt>
                <dd><a href="tel:+420772000100">+420 772 000 100</a><br />barber linka 241</dd>
              </div>
            </dl>
          </div>

          <figure className="location-image">
            <img
              src="/section-2.webp"
              alt="Prostředí Kadeřnictví No.1 v obchodním centru Palladium v Praze"
              width="1200"
              height="1500"
              loading="lazy"
            />
            <figcaption>Každý den · 9–21</figcaption>
          </figure>
        </div>
      </section>
    </main>
  );
}
