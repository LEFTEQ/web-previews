const services = [
  {
    label: "Výměna čelního skla",
    time: "cca 1 hod. práce",
    text: "Přijedeme k autu, sklo bezpečně vyřízneme, osadíme nové a pohlídáme správné vytvrzení lepidla.",
  },
  {
    label: "Oprava ťukance",
    time: "cca 30 minut",
    text: "Malý zásah, který často zastaví prasklinu dřív, než se z drobného bodu stane výměna celého skla.",
  },
  {
    label: "Skla pro flotily a užitkové vozy",
    time: "osobní, dodávky, karavany",
    text: "Mobilní servis na firemní parkoviště, do garáže nebo k provozovně bez zbytečného odstavení vozu.",
  },
];

const regions = [
  "Praha",
  "Středočeský",
  "Plzeňský",
  "Karlovarský",
  "Ústecký",
  "Liberecký",
  "Jihočeský",
];

export default function Page() {
  return (
    <main className="site-shell" aria-label="Mobilní výměna a oprava autoskel">
      <section className="hero-section" aria-labelledby="hero-title">
        <div className="hero-topline">
          <a className="wordmark" href="tel:+420608190919" aria-label="Zavolat Mobilní autosklo">
            <span className="wordmark-mark">M</span>
            <span className="wordmark-text">MobiSklo</span>
          </a>
          <span className="service-note">Mobilní autosklo bez cesty do servisu</span>
        </div>

        <div className="hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Výměna a oprava autoskla u vás</p>
            <h1 id="hero-title">Prasklé sklo řešíme tam, kde auto stojí.</h1>
            <p className="hero-lead">
              Přijedeme před dům, do garáže nebo na firemní parkoviště. Většinu oprav vyřídíme přes připojištění skel a s pojišťovnou komunikujeme za vás.
            </p>
            <div className="hero-actions" aria-label="Rychlý kontakt">
              <a className="primary-link" href="tel:+420608190919">608 190 919</a>
              <a className="secondary-link" href="mailto:mobilni-autosklo@seznam.cz">mobilni-autosklo@seznam.cz</a>
            </div>
          </div>

          <div className="glass-card" aria-label="Postup mobilní opravy autoskla">
            <div className="glass-route" aria-hidden="true">
              <span className="route-chip chip-a" />
              <span className="route-chip chip-b" />
              <span className="route-chip chip-c" />
            </div>
            <div className="glass-card-content">
              <span className="status-pill">Dnes bez servisu</span>
              <strong>Nejdřív pošlete fotku skla a VIN.</strong>
              <p>Ověříme správný typ skla, domluvíme místo montáže a řekneme, co pokryje pojišťovna.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="content-section services-section" aria-labelledby="services-title">
        <div className="section-heading">
          <p className="eyebrow">Co umíme na místě</p>
          <h2 id="services-title">Servis postavený kolem vašeho času.</h2>
        </div>
        <div className="service-list">
          {services.map((service) => (
            <article className="service-item" key={service.label}>
              <div>
                <h3>{service.label}</h3>
                <p>{service.text}</p>
              </div>
              <span>{service.time}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="content-section trust-section" aria-labelledby="trust-title">
        <div className="trust-copy">
          <p className="eyebrow">Dostupnost a důvěra</p>
          <h2 id="trust-title">Jezdíme po západní a střední části Česka.</h2>
          <p>
            Pomáháme řidičům, firmám i provozovatelům užitkových vozů v sedmi krajích. U pojistných událostí poradíme s postupem a připravíme podklady tak, aby oprava nezůstala stát na papírování.
          </p>
        </div>
        <div className="region-panel" aria-label="Kraje, kde služba působí">
          {regions.map((region) => (
            <span key={region}>{region}</span>
          ))}
        </div>
        <div className="proof-strip" aria-label="Praktické informace">
          <div>
            <strong>30 min.</strong>
            <span>běžná oprava ťukance</span>
          </div>
          <div>
            <strong>1 hod.</strong>
            <span>typická montáž čelního skla</span>
          </div>
          <div>
            <strong>pojišťovny</strong>
            <span>podklady řešíme s vámi</span>
          </div>
        </div>
      </section>
    </main>
  );
}
