export default function Page() {
  const services = [
    {
      title: "Ostraha areálů",
      text: "Střežíme výrobní závody, logistická centra, staveniště, kanceláře i důlní a vodní díla. Režim služby nastavíme podle provozu a konkrétních rizik.",
      tag: "FYZICKÁ OSTRAHA",
    },
    {
      title: "Dohled a rychlý výjezd",
      text: "Na pult centrální ochrany připojíme poplachové, požární i kamerové systémy. Dispečink funguje nepřetržitě a v případě události vyšle výjezdovou skupinu.",
      tag: "PCO 24/7",
    },
    {
      title: "Technické zabezpečení",
      text: "Navrhneme, instalujeme a servisujeme kamerové, přístupové a elektronické zabezpečovací systémy. Jedno řešení, jeden odpovědný partner.",
      tag: "NÁVRH · INSTALACE · SERVIS",
    },
    {
      title: "Ceniny a citlivé situace",
      text: "Zajistíme diskrétní převoz hotovosti a cenin, bezpečnostní konzultace, detektivní služby i vyhledávání nežádoucích odposlechových zařízení.",
      tag: "DISKRÉTNÍ SLUŽBY",
    },
  ];

  return (
    <main>
      <section className="hero" aria-labelledby="hero-title">
        <img
          className="hero__image"
          src="/hero.webp"
          alt="Bezpečnostní pracovník při ochraně průmyslového areálu"
        />
        <div className="hero__shade" aria-hidden="true" />
        <div className="hero__scan" aria-hidden="true" />

        <header className="site-header">
          <a className="wordmark" href="#nahoru" aria-label="Česká ochranná služba – úvod">
            <span className="wordmark__monogram">ČOS</span>
            <span className="wordmark__name">Česká ochranná<br />služba</span>
          </a>
          <nav className="site-nav" aria-label="Hlavní navigace">
            <a href="#sluzby">Služby</a>
            <a href="#jistota">Proč ČOS</a>
          </nav>
          <a className="header-contact" href="mailto:COSKA@COSKA.CZ?subject=Poptávka%20zabezpečení">
            Poptat ochranu
          </a>
        </header>

        <div className="hero__content" id="nahoru">
          <p className="hero__eyebrow">Bezpečnostní služba · Ostrava</p>
          <h1 id="hero-title">
            Klid začíná<br />
            <span>dřív, než se něco stane.</span>
          </h1>
          <p className="hero__lead">
            Chráníme lidi, majetek a provoz firem fyzickou ostrahou, technikou
            a dispečinkem, který drží službu ve dne i v noci.
          </p>
          <a className="primary-action" href="mailto:COSKA@COSKA.CZ?subject=Poptávka%20zabezpečení">
            <span>Poptat zabezpečení objektu</span>
            <span aria-hidden="true">↗</span>
          </a>
        </div>

        <div className="status-rail" aria-label="Základní informace o službě">
          <div><span>Působnost</span><strong>Ostrava a okolí</strong></div>
          <div><span>Dohled</span><strong>24 hodin / 7 dní</strong></div>
          <div><span>Na trhu</span><strong>Od roku 1997</strong></div>
        </div>
      </section>

      <section className="services" id="sluzby" aria-labelledby="services-title">
        <div className="section-heading">
          <p className="section-label">Ochrana podle skutečného provozu</p>
          <h2 id="services-title">Jedna služba nestačí každému objektu.</h2>
          <p>
            Nejdřív poznáme areál, pohyb lidí a slabá místa. Potom spojíme
            ostrahu, dohled a techniku do režimu, který dává smysl právě vám.
          </p>
        </div>

        <div className="services__layout">
          <figure className="services__visual">
            <img
              src="/section-1.webp"
              alt="Kontrola zabezpečení firemního areálu pracovníkem ostrahy"
            />
            <figcaption>
              <span>Pravidelná kontrola</span>
              <strong>Každé riziko má své místo a odpovědnost.</strong>
            </figcaption>
          </figure>

          <div className="service-list">
            {services.map((service) => (
              <article className="service-card" key={service.title}>
                <p>{service.tag}</p>
                <h3>{service.title}</h3>
                <div className="service-card__detail">
                  <span>{service.text}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="trust" id="jistota" aria-labelledby="trust-title">
        <div className="trust__image-wrap">
          <img
            src="/section-2.webp"
            alt="Člen bezpečnostního týmu při službě v chráněném provozu"
          />
          <div className="trust__image-note">
            <span>Dispečink + výjezd</span>
            <strong>Souvislá připravenost, ne jen přítomnost na vrátnici.</strong>
          </div>
        </div>

        <div className="trust__content">
          <p className="section-label">Jistota v každé směně</p>
          <h2 id="trust-title">Bezpečnost stojí na lidech, kteří vědí, co dělat.</h2>
          <p className="trust__intro">
            Česká ochranná služba působí od roku 1997. Tým vybíráme pečlivě,
            pravidelně školíme a vybavujeme pro konkrétní typ služby. Když se
            situace změní, upravíme režim ochrany spolu s vámi.
          </p>

          <dl className="proof-list">
            <div>
              <dt>24/7</dt>
              <dd>Dispečink přijímá signály a koordinuje výjezdovou službu bez přerušení.</dd>
            </div>
            <div>
              <dt>1997</dt>
              <dd>Zkušenost z ochrany výrobních, logistických, stavebních i administrativních objektů.</dd>
            </div>
            <div>
              <dt>Na míru</dt>
              <dd>Rozsah služby vychází z provozu, rizik a odpovědností konkrétního klienta.</dd>
            </div>
          </dl>

          <blockquote>
            <p>„Nehlídáme jen vstup. Hlídáme, aby váš provoz mohl pokračovat.“</p>
            <cite>Tým ČOS · Ostrava</cite>
          </blockquote>
        </div>
      </section>
    </main>
  );
}
