const services = [
  {
    code: "DAV",
    title: "Event security",
    text: "Bezpečnostní plán, vstupní kontrola, práce s davem i ochrana zákulisí. Jeden koordinovaný tým od otevření areálu po odchod posledního návštěvníka.",
    detail: "Festivaly · sport · kulturní akce",
  },
  {
    code: "ŽIV",
    title: "Rescue Ostrava",
    text: "Zdravotnický dozor, první pomoc, asistence a převozy během akcí. Specializovaní pracovníci přijíždějí s vybavením odpovídajícím riziku provozu.",
    detail: "Dozor · asistence · převozy",
  },
  {
    code: "PO",
    title: "Požární ochrana",
    text: "Preventivní požární hlídky, projektová dokumentace a poradenství v oblasti BOZP a PO pro provozy, pořadatele i veřejné instituce.",
    detail: "Prevence · dokumentace · BOZP",
  },
];

const cases = [
  "Colours of Ostrava",
  "Dny NATO",
  "RunCzech",
  "Český Majáles",
  "Hip Hop Kemp",
  "Česká Miss",
];

export default function Home() {
  return (
    <main className="cechymen-page">
      <section className="hero" aria-labelledby="hero-title">
        <img
          className="hero__image"
          src="/hero.webp"
          alt="Bezpečnostní tým Čechymen při zajištění velké akce"
        />
        <div className="hero__shade" aria-hidden="true" />

        <header className="site-head">
          <a className="wordmark" href="#top" aria-label="Čechymen — úvod">
            <span className="wordmark__shield" aria-hidden="true">Č</span>
            <span>ČECHY<span>MEN</span></span>
          </a>
          <nav className="site-nav" aria-label="Hlavní navigace">
            <a href="#sluzby">Služby</a>
            <a href="#zkusenosti">Zkušenosti</a>
          </nav>
          <a className="head-action" href="#sluzby">Poptat zabezpečení</a>
        </header>

        <div className="hero__content" id="top">
          <p className="eyebrow"><span>Ostrava</span> Bezpečnostní agentura od roku 2004</p>
          <h1 id="hero-title">Když se dav pohne,<br /><em>my už víme kam.</em></h1>
          <p className="hero__lead">
            Chráníme akce, firmy a lidi. V terénu propojujeme security,
            zdravotnický dozor a požární ochranu do jednoho funkčního plánu.
          </p>
          <div className="hero__actions">
            <a className="button button--primary" href="#sluzby">Vybrat službu</a>
            <a className="button button--quiet" href="#zkusenosti">Proč Čechymen</a>
          </div>
        </div>

        <div className="perimeter" aria-hidden="true">
          <span className="perimeter__corner perimeter__corner--a" />
          <span className="perimeter__label">AKTIVNÍ PERIMETR</span>
          <span className="perimeter__line" />
          <span className="perimeter__point" />
          <span className="perimeter__corner perimeter__corner--b" />
        </div>

        <div className="hero__status" aria-label="Rozsah služeb">
          <span><b>SECURITY</b> ochrana a koordinace</span>
          <span><b>RESCUE</b> zdravotnický dozor</span>
          <span><b>FIRE</b> požární prevence</span>
        </div>
      </section>

      <section className="services" id="sluzby" aria-labelledby="services-title">
        <div className="section-intro reveal">
          <p className="section-kicker">Jeden velitel. Tři odbornosti.</p>
          <h2 id="services-title">Bezpečnost není vesta.<br />Je to připravený systém.</h2>
          <p>
            Nejdřív poznáme prostor, provoz a rizika. Potom sestavíme lidi,
            odpovědnosti i reakční scénáře tak, aby pořadatel nemusel řešit
            bezpečnost za pochodu.
          </p>
        </div>

        <div className="services__layout">
          <div className="services__image-wrap reveal">
            <img
              src="/section-1.webp"
              alt="Pracovník bezpečnostní služby Čechymen koordinuje provoz v terénu"
              className="services__image"
            />
            <div className="image-note">
              <span>ŘÍZENÍ Z MÍSTA</span>
              <strong>Ostrava / celá ČR</strong>
            </div>
          </div>

          <div className="service-list">
            {services.map((service) => (
              <article className="service-card reveal" key={service.code}>
                <span className="service-card__code" aria-hidden="true">{service.code}</span>
                <div>
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                  <span className="service-card__detail">{service.detail}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="trust" id="zkusenosti" aria-labelledby="trust-title">
        <div className="trust__visual reveal">
          <img
            src="/section-2.webp"
            alt="Členové týmu Čechymen zajišťují bezpečný průběh veřejné akce"
            className="trust__image"
          />
          <div className="trust__stamp" aria-label="Působíme od roku 2004">
            <span>V TERÉNU OD</span>
            <strong>2004</strong>
          </div>
        </div>

        <div className="trust__content reveal">
          <p className="section-kicker">Prověřeno živým provozem</p>
          <h2 id="trust-title">Klid pro pořadatele.<br />Jasný postup pro tým.</h2>
          <p className="trust__lead">
            Zkušenost z velkých festivalů, sportovních podniků i provozů
            převádíme do konkrétního plánu pro vaši akci nebo objekt. Každý
            člen týmu ví, co hlídá, komu hlásí a jak reaguje.
          </p>

          <div className="proof-grid" aria-label="Hlavní důvody důvěry">
            <div>
              <strong>Celá ČR</strong>
              <span>Týmy pro akce, objekty i soukromý sektor</span>
            </div>
            <div>
              <strong>Více oborů</strong>
              <span>Security, rescue a požární ochrana pod jedním vedením</span>
            </div>
          </div>

          <div className="case-list">
            <p>Akce, kde jsme byli součástí bezpečného průběhu</p>
            <ul>
              {cases.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </div>

          <address className="location">
            <span>OSTRAVSKÁ ZÁKLADNA</span>
            Na Mlýnici 33/1a, 702 00 Moravská Ostrava a Přívoz
          </address>
        </div>
      </section>
    </main>
  );
}
