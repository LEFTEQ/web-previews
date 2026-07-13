export default function HomePage() {
  const services = [
    {
      title: "Kompletní rekonstrukce",
      text: "Demontáž původní koupelny, nové rozvody, hydroizolace, obklady, sanita i závěrečné začištění. Práce navazují v jednom domluveném postupu.",
      meta: "Od bourání po předání",
    },
    {
      title: "Bytová jádra",
      text: "Proměníme původní nebo nevyhovující jádro v koupelnu, která lépe využije každý centimetr bytu — včetně návaznosti na toaletu a chodbu.",
      meta: "Panelové i cihlové domy",
    },
    {
      title: "Dílčí úpravy",
      text: "Vyměníme obklady, dlažbu, sanitu nebo rozvody tam, kde není nutné měnit všechno. Předem si vyjasníme rozsah i návaznosti řemesel.",
      meta: "Rozsah podle skutečného stavu",
    },
  ];

  return (
    <main className="bathroom-page">
      <section className="hero" id="uvod" aria-labelledby="hero-title">
        <header className="site-header">
          <a className="wordmark" href="#uvod" aria-label="Žižkovská obchodní společnost — úvod">
            <span className="wordmark-mark" aria-hidden="true">Ž</span>
            <span className="wordmark-name">
              <strong>Žižkovská</strong>
              <small>obchodní společnost</small>
            </span>
          </a>

          <nav className="site-nav" aria-label="Hlavní navigace">
            <a href="#sluzby">Co rekonstruujeme</a>
            <a href="#firma">Proč Žižkovská</a>
          </nav>
        </header>

        <div className="hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Rekonstrukce koupelen · Brno</p>
            <h1 id="hero-title">
              Koupelna,
              <span>která sedí</span>
              vašemu bytu.
            </h1>
            <p className="hero-lead">
              Od prvního odkrytého obkladu po přesně usazenou baterii. Rekonstrukci koupelny v Brně sladíme tak, aby jednotlivá řemesla navazovala a vy věděli, co se právě děje.
            </p>
            <div className="hero-actions" aria-label="Možnosti kontaktu">
              <a className="button button-primary" href="tel:+420606561043">
                Zavolat 606 561 043 <span aria-hidden="true">↗</span>
              </a>
              <a className="text-link" href="mailto:zizkovska@zizkovska.cz">
                Napsat e-mail <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>

          <figure className="hero-visual">
            <div className="tile-field" aria-hidden="true" />
            <div className="hero-image-wrap">
              <img
                src="/hero.webp"
                alt="Moderně zrekonstruovaná koupelna s precizně položenými obklady"
                width={960}
                height={1120}
                fetchPriority="high"
              />
            </div>
            <figcaption>
              <span>Brno a okolí</span>
              <strong>Obklad · voda · sanita</strong>
            </figcaption>
          </figure>
        </div>

        <div className="scope-strip" aria-label="Základní rozsah služeb">
          <span>Byty a rodinné domy</span>
          <span>Kompletní i dílčí úpravy</span>
          <span>Jedna domluva pro návazná řemesla</span>
        </div>
      </section>

      <section className="services" id="sluzby" aria-labelledby="services-title">
        <div className="section-heading">
          <p className="eyebrow">Co pro vás uděláme</p>
          <h2 id="services-title">Méně improvizace.<br />Více přesnosti.</h2>
          <p>
            U koupelny rozhodují věci, které po dokončení nejsou vidět: správně vedené rozvody, rovný podklad a poctivá hydroizolace. Právě od nich práci plánujeme.
          </p>
        </div>

        <div className="services-layout">
          <div className="services-image">
            <img
              src="/section-1.webp"
              alt="Řemeslník při přesném pokládání koupelnových obkladů"
              width={900}
              height={1050}
              loading="lazy"
            />
            <p>Detail není poslední krok. Je to způsob práce.</p>
          </div>

          <div className="service-list">
            {services.map((service) => (
              <article className="service-item" key={service.title}>
                <div className="service-marker" aria-hidden="true" />
                <div>
                  <p className="service-meta">{service.meta}</p>
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="trust" id="firma" aria-labelledby="trust-title">
        <div className="trust-image">
          <img
            src="/section-2.webp"
            alt="Dokončený detail koupelny s čistými spárami a osazenou sanitou"
            width={1080}
            height={900}
            loading="lazy"
          />
          <div className="material-tag" aria-hidden="true">
            <span>rovina</span>
            <span>spára</span>
            <span>detail</span>
          </div>
        </div>

        <div className="trust-copy">
          <p className="eyebrow">Stavební firma se zázemím v Brně</p>
          <h2 id="trust-title">Domluva, která drží stejně jako obklad.</h2>
          <p className="trust-intro">
            Žižkovská obchodní společnost staví na zkušených lidech a jasně dohodnutém rozsahu. Rekonstrukce bytů a koupelen jsou součástí naší dlouhodobé stavební praxe — ne okrajová služba bez zázemí.
          </p>

          <blockquote>
            <p>„Investoři se na nás obracejí opakovaně. Bereme to jako nejpřesnější měřítko dobře odvedené práce.“</p>
          </blockquote>

          <dl className="company-facts">
            <div>
              <dt>Provozovna</dt>
              <dd>Maříkova 1899/1, Brno</dd>
            </div>
            <div>
              <dt>Společnost</dt>
              <dd>Žižkovská obchodní společnost s.r.o.</dd>
            </div>
            <div>
              <dt>IČO</dt>
              <dd>03817326</dd>
            </div>
          </dl>
        </div>
      </section>
    </main>
  );
}
