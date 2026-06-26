const services = [
  {
    title: 'Výměna čelního skla u vás',
    text: 'Přijedeme k domu, do garáže nebo na firemní parkoviště. Samotná montáž běžně trvá okolo 1 hodiny, potom necháme lepidlo bezpečně vytvrdnout.',
  },
  {
    title: 'Oprava ťukance a prasklinky',
    text: 'Malý zásah vyřešíme zhruba do 30 minut. Oprava zabrání šíření praskliny a často vás ušetří celé výměny skla.',
  },
  {
    title: 'Autoskla pro osobní i pracovní vozy',
    text: 'Řešíme osobní auta, užitkové vozy, karavany, kamiony i autobusy. Pro firmy umíme naplánovat servis více vozů najednou.',
  },
];

const trustItems = [
  'Karlovarský, Ústecký, Liberecký, Plzeňský, Středočeský a Jihočeský kraj plus Praha',
  'Papírování s pojišťovnou vyřídíme za vás',
  'Většina oprav a výměn jde hradit z připojištění skel',
  'Přijedeme na místo, kde vůz skutečně stojí',
];

export default function Page() {
  return (
    <main className="site-shell">
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero__topline">
          <a className="wordmark" href="tel:608190919" aria-label="Mobilní autosklo, zavolat 608 190 919">
            <span className="wordmark__mark">MA</span>
            <span className="wordmark__text">Mobilní autosklo</span>
          </a>
          <a className="phone-link" href="tel:608190919">608 190 919</a>
        </div>

        <div className="hero__grid">
          <div className="hero__copy">
            <p className="eyebrow">Výměna a oprava autoskla bez cesty do servisu</p>
            <h1 id="hero-title">Přijedeme za sklem tam, kde auto zrovna stojí.</h1>
            <p className="hero__lead">
              Čelní sklo vyměníme nebo opravíme u vás doma, ve firmě i v garáži. Vyřešíme i postup přes pojišťovnu, aby z poškozeného skla nebyl celý den zařizování.
            </p>
            <div className="hero__actions" aria-label="Hlavní kontaktní možnosti">
              <a className="button button--primary" href="tel:608190919">Zavolat servis</a>
              <a className="button button--ghost" href="mailto:mobilni-autosklo@seznam.cz">Poslat poptávku</a>
            </div>
          </div>

          <div className="windshield-card" aria-label="Mobilní výměna autoskla">
            <div className="windshield-card__glass">
              <span className="crack crack--one" />
              <span className="crack crack--two" />
              <span className="glass-label">mobilní servis</span>
            </div>
            <div className="windshield-card__meta">
              <span>oprava 30 min</span>
              <span>montáž cca 1 h</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section services" aria-labelledby="services-title">
        <div className="section__heading">
          <p className="eyebrow">Co zařídíme</p>
          <h2 id="services-title">Sklo opravíme rychle, ale pracovní postup držíme přesně.</h2>
        </div>
        <div className="service-list">
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
        <div className="trust__intro">
          <p className="eyebrow">Proč se ozvat nám</p>
          <h2 id="trust-title">Šetříme vám cestu, čekání i komunikaci s pojišťovnou.</h2>
          <p>
            Mobilní autosklo s.r.o. obsluhuje řidiče i firemní flotily v západních, severních, středních a jižních Čechách. Když sklo není připojištěné, řekneme vám předem, jaké řešení dává ekonomicky smysl.
          </p>
        </div>
        <ul className="trust-list" aria-label="Důležité informace o službě">
          {trustItems.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>
    </main>
  );
}
