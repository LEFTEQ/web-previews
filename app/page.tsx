const services = [
  'Přezutí osobních, SUV, VAN i 4x4 vozidel',
  'Nákladní, moto a zemědělský pneuservis',
  'Geometrie, brzdy, tlumiče, výfuky a diagnostika BOSCH',
  'Klimatizace, ozonová dezinfekce a pylové filtry',
  'Prodej pneumatik, disků, olejů, baterií a stěračů',
  'Sezonní uskladnění celých kol a zpětný odběr pneumatik'
];

const trust = [
  { label: '36 let', text: 'stabilní česká síť pneuservisů' },
  { label: '200 000+', text: 'pneumatik skladem napříč značkami' },
  { label: 'Plzeň', text: 'Domažlická 1295/173, u kruhového objezdu u Makra' }
];

export default function Page() {
  return (
    <main className="site-shell">
      <section className="hero" aria-labelledby="hero-title">
        <nav className="topline" aria-label="Hlavní navigace náhledu">
          <a className="wordmark" href="#hero-title" aria-label="Chára Sport">
            <span>Chára</span>
            <strong>sport</strong>
          </a>
          <a className="nav-action" href="tel:+420377429055">+420 377 429 055</a>
        </nav>

        <div className="hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Pneuservis Plzeň • Domažlická</p>
            <h1 id="hero-title">Pneumatiky řešíme podle dezénu, ne podle kalendáře.</h1>
            <p className="lead">
              Přezutí, rychloservis a odborná kontrola kol pro osobní auta, dodávky, motocykly i nákladní vozy. V Plzni najdete tým, který má sklad, techniku i zkušenost na jednom místě.
            </p>
            <div className="hero-actions" aria-label="Rychlé informace">
              <a className="primary-link" href="mailto:chara-plzen@chara.cz">Napsat na pobočku</a>
              <span>Po-Pá 8:00-12:00 / 12:30-17:00</span>
            </div>
          </div>

          <div className="tread-card" aria-label="Zvýrazněné služby pneuservisu">
            <div className="tread-mark" aria-hidden="true">
              <span></span><span></span><span></span><span></span><span></span>
            </div>
            <p>Rezervace přezutí, kontrola geometrie a uskladnění kol bez zbytečného čekání.</p>
          </div>
        </div>
      </section>

      <section className="section services" aria-labelledby="services-title">
        <div className="section-kicker">Co vyřešíte na pobočce</div>
        <div className="section-head">
          <h2 id="services-title">Od výběru pneumatik po servis podvozku.</h2>
          <p>
            Na Domažlické obsloužíme běžné řidiče, firemní flotily i provozovatele nákladních vozidel. Doporučíme vhodné pneu, zkontrolujeme stav auta a postaráme se o sezonní výměnu.
          </p>
        </div>
        <div className="service-list">
          {services.map((service, index) => (
            <article className="service-item" key={service}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <h3>{service}</h3>
            </article>
          ))}
        </div>
      </section>

      <section className="section trust" aria-labelledby="trust-title">
        <div className="section-kicker">Proč Chára Sport</div>
        <div className="trust-layout">
          <div>
            <h2 id="trust-title">Velká síť, konkrétní člověk na pobočce.</h2>
            <p>
              Vedoucím plzeňské pobočky je Radek Klimeš. Provozovna je u výjezdu na Novou Hospodu, třetí objekt od sjezdu, viditelný po levé ruce. Čekání si můžete zkrátit kávou a Wi-Fi přímo na pobočce.
            </p>
          </div>
          <div className="proof-grid" aria-label="Důležité údaje">
            {trust.map((item) => (
              <article className="proof" key={item.label}>
                <strong>{item.label}</strong>
                <span>{item.text}</span>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
