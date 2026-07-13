export default function Page() {
  const services = [
    {
      title: "Kompletní demolice",
      text: "Od rodinných domů po průmyslové areály. Zvolíme techniku i postup podle konstrukce, okolní zástavby a dalšího využití pozemku.",
    },
    {
      title: "Selektivní rozebrání",
      text: "Oddělíme technologie, ocel, beton i nebezpečné části. Materiály třídíme už během prací, ne až na hromadě.",
    },
    {
      title: "Zemní práce po demolici",
      text: "Po odstranění objektu připravíme plochu pro další stavbu — včetně výkopů, zásypů, hutnění a srovnání terénu.",
    },
    {
      title: "Odvoz a zpracování suti",
      text: "Vlastní doprava navazuje přímo na postup demolice. Suť průběžně odvážíme a využitelné frakce předáváme k recyklaci.",
    },
  ];

  const references = [
    "Areál Strojírny Cheb",
    "UniMeC II. etapa — Plzeň",
    "CTP Přeštice",
    "Sanace území Jihočeské plynárenské",
  ];

  return (
    <main className="apb-page">
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-media" aria-hidden="true">
          <img
            src="/hero.webp"
            alt=""
            width="1920"
            height="1280"
            fetchPriority="high"
          />
        </div>
        <div className="hero-shade" aria-hidden="true" />
        <div className="hero-cut" aria-hidden="true" />

        <header className="site-header">
          <a className="wordmark" href="#zacatek" aria-label="APB Plzeň — začátek stránky">
            <span className="wordmark-apb">APB</span>
            <span className="wordmark-place">PLZEŇ</span>
          </a>
          <nav className="site-nav" aria-label="Hlavní navigace">
            <a href="#sluzby">Demolice</a>
            <a href="#zkusenosti">Zkušenosti</a>
          </nav>
          <a className="header-phone" href="tel:+420377916942">
            <span>Zavolat</span>
            +420 377 916 942
          </a>
        </header>

        <div className="hero-content" id="zacatek">
          <p className="eyebrow"><span /> Demoliční práce · Plzeň a okolí</p>
          <h1 id="hero-title">
            Když musí stavba
            <strong>bezpečně k zemi.</strong>
          </h1>
          <p className="hero-lead">
            Připravíme postup, nasadíme vlastní těžkou techniku a předáme vám čistou plochu pro další záměr. Bez improvizace mezi prvním záběrem a posledním odvozem.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="tel:+420377916942">Probrat demolici</a>
            <a className="text-link" href="#sluzby">Zjistit, co zajistíme <span aria-hidden="true">↓</span></a>
          </div>
        </div>

        <ol className="work-line" aria-label="Průběh zakázky">
          <li><span>Průzkum objektu</span></li>
          <li><span>Plán postupu</span></li>
          <li><span>Řízená demolice</span></li>
          <li><span>Třídění a odvoz</span></li>
        </ol>
      </section>

      <section className="services-section" id="sluzby" aria-labelledby="services-title">
        <div className="section-heading">
          <p className="section-label">Kompletní záběr</p>
          <h2 id="services-title">Od prvního posouzení po připravený terén.</h2>
          <p>
            Demolice není jen stržení konstrukce. Každá etapa musí navázat na další, aby staveniště nezůstalo stát kvůli technice, odpadu nebo nedořešenému podloží.
          </p>
        </div>

        <div className="services-layout">
          <figure className="service-figure">
            <img
              src="/section-1.webp"
              alt="Demoliční technika APB Plzeň při rozebírání stavební konstrukce"
              width="1400"
              height="1050"
              loading="lazy"
              decoding="async"
            />
            <figcaption>Techniku vybíráme podle dosahu, konstrukce a prostoru kolem objektu.</figcaption>
          </figure>

          <div className="service-list">
            {services.map((service) => (
              <article className="service-item" key={service.title}>
                <span className="service-mark" aria-hidden="true" />
                <div>
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="trust-section" id="zkusenosti" aria-labelledby="trust-title">
        <div className="trust-image">
          <img
            src="/section-2.webp"
            alt="Těžký stavební stroj APB Plzeň na demoliční zakázce"
            width="1500"
            height="1100"
            loading="lazy"
            decoding="async"
          />
          <div className="since-badge" aria-label="Česká firma působící od roku 1991">
            <span>Česká firma</span>
            <strong>od 1991</strong>
          </div>
        </div>

        <div className="trust-copy">
          <p className="section-label">Zkušenost, která je vidět v postupu</p>
          <h2 id="trust-title">Velká technika. Přesná odpovědnost.</h2>
          <p className="trust-intro">
            APB–PLZEŇ vyrostla v Losiné u Plzně. Více než tři desetiletí propojujeme demolice, zemní práce a vlastní dopravu do jedné zakázky, za kterou nese odpovědnost jeden tým.
          </p>

          <dl className="facts">
            <div>
              <dt>Zázemí</dt>
              <dd>Losiná u Plzně</dd>
            </div>
            <div>
              <dt>Navazující práce</dt>
              <dd>Zemní práce a doprava</dd>
            </div>
            <div>
              <dt>Pro objekty</dt>
              <dd>Občanské i průmyslové stavby</dd>
            </div>
          </dl>

          <div className="references" aria-labelledby="references-title">
            <h3 id="references-title">Zakázky, na kterých jsme se podíleli</h3>
            <ul>
              {references.map((reference) => <li key={reference}>{reference}</li>)}
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
