const services = [
  {
    title: "Smlouvy a jednání",
    text: "Připravíme smlouvu tak, aby chránila Vaši pozici ještě před podpisem. Zastoupíme Vás také při jednání s protistranou nebo obchodním partnerem.",
  },
  {
    title: "Soudy a úřady",
    text: "Sepíšeme podání, vysvětlíme procesní kroky a povedeme Vaši věc před soudem, správním orgánem nebo při mimosoudním řešení sporu.",
  },
  {
    title: "Firmy, nemovitosti, rodina",
    text: "Řešíme založení s.r.o., korporační agendu, převody nemovitostí, pracovní věci, rodinné právo, dopravní nehody i trestní obhajobu.",
  },
];

const proofs = [
  "Advokátní kancelář v Brně na Moravském náměstí 15",
  "Právní služby v českém i anglickém jazyce",
  "Advokátní úschovy a ověřování pravosti podpisu",
  "Průběžná informovanost klienta o stavu věci",
];

export default function Page() {
  return (
    <main className="site-shell">
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero__bar" aria-hidden="true">
          <span>01</span>
          <span>spis</span>
          <span>Brno</span>
        </div>

        <nav className="topline" aria-label="Hlavní navigace">
          <a className="wordmark" href="#top" aria-label="Advokát Hora Jiří">
            <span className="wordmark__mark">H</span>
            <span>
              <strong>Hora Jiří</strong>
              <small>advokátní kancelář</small>
            </span>
          </a>
          <a className="topline__contact" href="mailto:hora@akhora.cz">
            hora@akhora.cz
          </a>
        </nav>

        <div className="hero__grid" id="top">
          <div className="hero__copy">
            <p className="kicker">Mgr. Ing. Jiří Hora, advokát</p>
            <h1 id="hero-title">Právní věc má držet pohromadě dřív, než dojde na spor.</h1>
            <p className="hero__lead">
              V Brně připravujeme smlouvy, podání a právní kroky tak, aby klient rozuměl svým možnostem, rizikům i dalšímu postupu. Bez neurčitých slibů, s jasným vedením věci od první konzultace.
            </p>
            <div className="hero__actions" aria-label="Kontaktní údaje kanceláře">
              <a className="button" href="tel:+420731908840">+420 731 908 840</a>
              <span>Moravské náměstí 15, Brno</span>
            </div>
          </div>

          <aside className="case-card" aria-label="Charakter práce kanceláře">
            <div className="case-card__fold" aria-hidden="true" />
            <p className="case-card__label">typická agenda</p>
            <h2>Od posouzení listin po zastoupení u soudu</h2>
            <p>
              Každý případ vedeme jako spis: fakta, cíle, rizika, důkazy, další krok. Klient má vědět, co se děje a proč.
            </p>
          </aside>
        </div>
      </section>

      <section className="section services" aria-labelledby="services-title">
        <div className="section__heading">
          <p className="kicker">služby</p>
          <h2 id="services-title">Právní pomoc pro osobní i podnikatelské situace</h2>
        </div>
        <div className="service-grid">
          {services.map((service, index) => (
            <article className="service-card" key={service.title}>
              <span className="service-card__number">0{index + 1}</span>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section trust" aria-labelledby="trust-title">
        <div className="trust__panel">
          <div>
            <p className="kicker">důvěra</p>
            <h2 id="trust-title">Individuální přístup není fráze, ale způsob vedení věci.</h2>
          </div>
          <p>
            Kancelář poskytuje komplexní právní služby v rozsahu českého právního řádu: konzultace, smlouvy, právní rozbory, podání, zastupování při jednáních i řízeních před soudy a správními orgány. Důraz klademe na srozumitelnou komunikaci a zpětnou vazbu mezi klientem a advokátem.
          </p>
        </div>

        <ul className="proof-list" aria-label="Konkrétní informace o kanceláři">
          {proofs.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>
    </main>
  );
}
