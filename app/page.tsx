export default function Page() {
  const services = [
    {
      area: "Specializovaná péče",
      title: "Onkologie",
      text: "Diagnostika a léčba s důrazem na kvalitu života zvířete i srozumitelný plán pro vás."
    },
    {
      area: "Operační obory",
      title: "Chirurgie",
      text: "Měkké tkáně, onkochirurgie, ortopedie i miniinvazivní zákroky na jednom pracovišti."
    },
    {
      area: "Souvislosti",
      title: "Interní medicína",
      text: "Hledáme příčinu obtíží, propojujeme výsledky vyšetření a navrhujeme další postup."
    },
    {
      area: "Pohyb bez bolesti",
      title: "Ortopedie",
      text: "Péče o onemocnění kostí, kloubů, svalů, šlach a vazů malých zvířat."
    },
    {
      area: "Samostatný obor",
      title: "Medicína koček",
      text: "Klidnější prostředí a přístup přizpůsobený tomu, že kočka opravdu není malý pes."
    },
    {
      area: "Včasné odhalení",
      title: "Kardiologie",
      text: "Precizní diagnostika skrytých srdečních vad a léčba pro co nejlepší každodenní život."
    }
  ];

  return (
    <main className="rv-page">
      <section className="hero" aria-labelledby="hero-title">
        <header className="site-header">
          <a className="wordmark" href="#zacatek" aria-label="Regia Vet – začátek stránky">
            <span>REGIA</span>
            <span className="wordmark-vet">VET</span>
            <i aria-hidden="true">+</i>
          </a>

          <nav className="main-nav" aria-label="Hlavní navigace">
            <a href="#sluzby">Naše péče</a>
            <a href="#klinika">O klinice</a>
          </nav>

          <a className="header-phone" href="tel:+420724804804">
            <span>Zavolat na kliniku</span>
            <strong>724 804 804</strong>
          </a>
        </header>

        <div className="hero-shell" id="zacatek">
          <div className="hero-copy">
            <p className="eyebrow">Referenční veterinární klinika · Praha 11</p>
            <h1 id="hero-title">Když je potřeba vědět přesně.</h1>
            <p className="hero-lead">
              Rozumíme zvířatům a nasloucháme vám. Propojujeme onkologii,
              chirurgii a pokročilou diagnostiku do jednoho srozumitelného plánu péče.
            </p>

            <div className="hero-actions">
              <a className="button button-primary" href="tel:+420724804804">
                Zavolat 724 804 804
                <span aria-hidden="true">↗</span>
              </a>
              <a className="button button-quiet" href="#sluzby">
                Prohlédnout péči
                <span aria-hidden="true">↓</span>
              </a>
            </div>

            <dl className="opening-hours" aria-label="Ordinační doba">
              <div>
                <dt>Po–Pá</dt>
                <dd>8:00–20:00</dd>
              </div>
              <div>
                <dt>So</dt>
                <dd>8:00–20:00</dd>
              </div>
              <div>
                <dt>Klinika</dt>
                <dd>Hráského 2231/25</dd>
              </div>
            </dl>
          </div>

          <div className="hero-visual">
            <div className="exam-light" aria-hidden="true" />
            <img
              src="/hero.webp"
              alt="Veterinární lékař při citlivém vyšetření pacienta na klinice Regia Vet"
              width="1120"
              height="1280"
              fetchPriority="high"
            />
            <div className="patient-band" aria-label="Specializace kliniky">
              <span>REGIA / PRAHA 11</span>
              <strong>ONKOLOGIE · CHIRURGIE · CT</strong>
              <span>REFERENČNÍ PÉČE</span>
            </div>
            <div className="visual-note">
              <span className="status-dot" aria-hidden="true" />
              <p><strong>25+ lékařů</strong> v navazujících oborech</p>
            </div>
          </div>
        </div>
      </section>

      <section className="services" id="sluzby" aria-labelledby="services-title">
        <div className="section-intro">
          <p className="eyebrow">Péče podle skutečné potřeby</p>
          <h2 id="services-title">Jeden tým. Souvislosti se neztrácejí.</h2>
          <p>
            Vyšetření, diagnostiku i navazující léčbu řešíme pod jednou střechou.
            Nemusíte sami skládat doporučení z několika pracovišť.
          </p>
        </div>

        <div className="services-layout">
          <figure className="services-image">
            <img
              src="/section-1.webp"
              alt="Moderní zobrazovací diagnostika pro psy a kočky na klinice Regia Vet"
              width="1040"
              height="1200"
              loading="lazy"
              decoding="async"
            />
            <figcaption>
              <span>Diagnostika na místě</span>
              <strong>CT · RTG · USG · vlastní laboratoř</strong>
            </figcaption>
          </figure>

          <div className="service-list">
            {services.map((service) => (
              <article className="service-item" key={service.title}>
                <p>{service.area}</p>
                <h3>{service.title}</h3>
                <span>{service.text}</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="trust" id="klinika" aria-labelledby="trust-title">
        <div className="trust-layout">
          <div className="trust-copy">
            <p className="eyebrow eyebrow-light">Regia Vet v Praze</p>
            <h2 id="trust-title">Odbornost, která nezapomíná na člověka.</h2>
            <p className="trust-lead">
              Jsme referenční centrum pro onkologii a chirurgii malých zvířat.
              Náročnou medicínu vysvětlujeme otevřeně, bez zbytečných frází a s respektem
              k tomu, co právě prožíváte se svým zvířetem.
            </p>

            <dl className="facts">
              <div>
                <dt>20+</dt>
                <dd>let zkušeností</dd>
              </div>
              <div>
                <dt>16 000+</dt>
                <dd>pacientů v péči</dd>
              </div>
              <div>
                <dt>25+</dt>
                <dd>lékařů v týmu</dd>
              </div>
            </dl>

            <div className="clinic-details">
              <div>
                <span>Kde nás najdete</span>
                <strong>Hráského 2231/25, Praha 11</strong>
              </div>
              <div>
                <span>Spojení na recepci</span>
                <a href="mailto:info@regiavet.cz">info@regiavet.cz</a>
              </div>
            </div>
          </div>

          <figure className="trust-image">
            <img
              src="/section-2.webp"
              alt="Veterinární tým Regia Vet při společné péči o zvířecího pacienta"
              width="1180"
              height="1040"
              loading="lazy"
              decoding="async"
            />
            <figcaption>
              <span aria-hidden="true">+</span>
              <p>Odborné znalosti, respekt a empatický přístup</p>
            </figcaption>
          </figure>
        </div>
      </section>
    </main>
  );
}
