export default function Page() {
  const services = [
    {
      number: "01",
      title: "Nehodu vyřešíme s pojišťovnou",
      text: "Zjistíme rozsah vašeho nároku, nahlásíme škodu a připravíme kalkulaci opravy. Vy nemusíte obíhat pojišťovnu ani hlídat administrativu.",
      label: "Likvidace škody",
    },
    {
      number: "02",
      title: "Předáme vám náhradní vůz",
      text: "Z flotily více než 50 vozů vybereme odpovídající náhradu. Auta jsou pojištěná přímo pro provoz autopůjčovny.",
      label: "Mobilita bez přerušení",
    },
    {
      number: "03",
      title: "Karoserii vrátíme do kondice",
      text: "Opravu, lakování i kontrolu provedeme v našem plzeňském centru. Průběh zakázky můžete sledovat online v zákaznické zóně.",
      label: "Oprava pod jednou střechou",
    },
  ];

  return (
    <main className="mm-site">
      <section className="hero" aria-labelledby="hero-title">
        <img
          className="hero__image"
          src="/hero.webp"
          alt="Technik autoservisu MM CAR kontroluje vůz v plzeňské dílně"
        />
        <div className="hero__shade" aria-hidden="true" />

        <header className="site-header">
          <a className="wordmark" href="#nahoru" aria-label="MM CAR – úvod">
            <span className="wordmark__mm">MM</span>
            <span className="wordmark__slash" aria-hidden="true" />
            <span className="wordmark__car">CAR</span>
          </a>

          <nav className="site-nav" aria-label="Hlavní navigace">
            <a href="#sluzby">Po nehodě</a>
            <a href="#zazemi">Servis v Plzni</a>
          </nav>

          <a className="header-phone" href="tel:+420775101775">
            <span>Pomoc po nehodě</span>
            +420 775 101 775
          </a>
        </header>

        <div className="hero__content" id="nahoru">
          <p className="hero__eyebrow">Autoservis · autopůjčovna · Plzeň</p>
          <h1 id="hero-title">
            Po nehodě držíme
            <span>celý postup v jedné stopě.</span>
          </h1>
          <p className="hero__lead">
            Od prvního hovoru přes náhradní auto a jednání s pojišťovnou až po hotovou opravu. Víte, kdo váš vůz řeší a co se právě děje.
          </p>
          <div className="hero__actions">
            <a className="button button--primary" href="tel:+420775101775">
              Zavolat o pomoc
              <span aria-hidden="true">↗</span>
            </a>
            <a className="button button--quiet" href="#sluzby">
              Jak postupujeme
            </a>
          </div>
        </div>

        <aside className="job-card" aria-label="Rychlé informace o servisu">
          <div className="job-card__head">
            <span>Zakázkový protokol</span>
            <span>PLZ / 24H</span>
          </div>
          <div className="job-card__line">
            <span>Rychlý servis</span>
            <strong>do 24 hodin</strong>
          </div>
          <div className="job-card__line">
            <span>Otevírací doba</span>
            <strong>Po–Pá 7:00–17:00</strong>
          </div>
          <div className="job-card__status">
            <span aria-hidden="true" />
            Příjem zakázek v provozu
          </div>
        </aside>

        <div className="measure-line" aria-hidden="true">
          <span />
          <span />
          <span />
          <span />
          <span />
        </div>
      </section>

      <section className="service-section" id="sluzby" aria-labelledby="services-title">
        <div className="section-intro">
          <p className="section-label">Jedna nehoda. Jeden odpovědný tým.</p>
          <h2 id="services-title">Vy řešíte cestu dál.<br />My všechno kolem auta.</h2>
          <p>
            Přehledný postup bez přepojování mezi servisem, půjčovnou a likvidátorem. Všechny tři části zajišťujeme z jednoho místa.
          </p>
        </div>

        <div className="service-visual">
          <img
            src="/section-1.webp"
            alt="Detail profesionální opravy karoserie v dílně MM CAR"
          />
          <div className="inspection-mark" aria-hidden="true">
            <span>MM</span>
          </div>
          <p>Karosářské a lakýrnické centrum · Plzeň-Karlov</p>
        </div>

        <div className="service-list">
          {services.map((service) => (
            <article className="service-item" key={service.number}>
              <div className="service-item__meta">
                <span>{service.number}</span>
                <p>{service.label}</p>
              </div>
              <div>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="trust-section" id="zazemi" aria-labelledby="trust-title">
        <div className="trust-image-wrap">
          <img
            src="/section-2.webp"
            alt="Zázemí autoservisu MM CAR v areálu Škoda v Plzni"
          />
          <div className="location-tag">
            <span>VIII. brána areálu Škoda</span>
            <strong>Na Pomezí · Plzeň-Karlov</strong>
          </div>
        </div>

        <div className="trust-copy">
          <p className="section-label">Důvěra má konkrétní důvody</p>
          <h2 id="trust-title">Váš vůz nezmizí za vraty servisu.</h2>
          <p className="trust-copy__lead">
            Zakázku vedeme otevřeně: domluvený rozsah práce, průběžné informace a online přehled o opravě nebo zapůjčeném voze. Po nehodách pomáháme od roku 2003.
          </p>

          <dl className="facts">
            <div>
              <dt>1 500+</dt>
              <dd>oprav vozů ročně</dd>
            </div>
            <div>
              <dt>2 000+</dt>
              <dd>vyřízených zakázek ročně</dd>
            </div>
            <div>
              <dt>50+</dt>
              <dd>vozů připravených k zapůjčení</dd>
            </div>
          </dl>

          <div className="trust-note">
            <p>
              <strong>Autoservis najdete pouze v Plzni.</strong> Náhradní vozy po nehodě a autopůjčovnu zajišťujeme po celé České republice s centrálou v Plzni.
            </p>
            <span>Smluvní partner pojišťoven a leasingových společností</span>
          </div>
        </div>
      </section>
    </main>
  );
}
