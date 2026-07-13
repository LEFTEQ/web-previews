export default function Page() {
  const services = [
    {
      type: "Dřevostavby",
      title: "Dům bez čekání na beton",
      text: "Únosnost ověříme tahovou zkouškou, rozmístění vrutů spočítá statik a geodet je vytyčí na milimetr přesně."
    },
    {
      type: "Zahrada",
      title: "Terasy a pergoly za jeden den",
      text: "Pozemek nerozkopeme a po montáži nezůstane hromada suti. Na hotových vrutech můžete rovnou pokračovat se stavbou."
    },
    {
      type: "Města a firmy",
      title: "Mobiliář, ploty i provozní stavby",
      text: "Reverzibilní základ bez betonu se hodí tam, kde záleží na rychlosti, čistém provozu a minimálním zásahu do okolí."
    }
  ];

  const process = [
    ["01", "Prověříme půdu", "Na místě změříme tahovou zkouškou skutečnou únosnost podloží."],
    ["02", "Spočítáme základ", "Statik určí počet, délku a rozmístění ocelových vrutů pro vaši stavbu."],
    ["03", "Přesně vytyčíme", "Geodet zaměří pozice i výšky, aby konstrukce seděla na milimetr."],
    ["04", "Zavrtáme a předáme", "Vlastní technikou osadíme vruty. Základ je ihned připravený nést stavbu."]
  ];

  return (
    <main className="cz-root">
      <a className="skip-link" href="#obsah">Přejít na obsah</a>

      <section className="hero" aria-labelledby="hero-title">
        <img
          className="hero__image"
          src="/hero.webp"
          alt="Montáž ocelového zemního vrutu na připraveném pozemku"
          width="1800"
          height="1200"
          fetchPriority="high"
        />
        <div className="hero__shade" aria-hidden="true" />

        <header className="site-head">
          <a className="wordmark" href="#top" aria-label="Chytré základy, úvodní stránka">
            <span className="wordmark__bolt" aria-hidden="true" />
            <span>CHYTRÉ</span>
            <strong>ZÁKLADY</strong>
          </a>
          <nav className="site-nav" aria-label="Hlavní navigace">
            <a href="#reseni">Kde vruty dávají smysl</a>
            <a href="#postup">Jak pracujeme</a>
          </nav>
          <a className="head-call" href="tel:+420739253476">
            <span>Zavolat</span>
            +420 739 253 476
          </a>
        </header>

        <div className="hero__content" id="top">
          <p className="eyebrow">Zemní vruty · Ostrava a celé Česko</p>
          <h1 id="hero-title">
            <span>Zavrtáme.</span>
            <span>Změříme.</span>
            <span className="hero__answer">Stavíte.</span>
          </h1>
          <div className="hero__copy">
            <p>Ocelové základy pro dřevostavby, terasy, pergoly a městský mobiliář. Bez betonu, zbytečných výkopů a týdnů čekání.</p>
            <div className="hero__actions">
              <a className="button button--primary" href="mailto:zakazky@chytrezaklady.cz?subject=Popt%C3%A1vka%20zemn%C3%ADch%20vrut%C5%AF">Probrat moji stavbu</a>
              <a className="text-link" href="#postup">Jak vznikne pevný základ <span aria-hidden="true">↓</span></a>
            </div>
          </div>
        </div>

        <div className="hero__proof" aria-label="Hlavní výhody">
          <p><strong>10 let</strong><span>zkušeností v terénu</span></p>
          <p><strong>1 000+</strong><span>hotových realizací</span></p>
          <p><strong>Ihned</strong><span>můžete pokračovat ve stavbě</span></p>
        </div>

        <div className="thread-mark" aria-hidden="true">
          <i /><i /><i /><i /><i /><i />
        </div>
      </section>

      <section className="solutions" id="reseni" aria-labelledby="solutions-title">
        <div className="section-heading" id="obsah">
          <p className="eyebrow eyebrow--dark">Základ podle toho, co ponese</p>
          <h2 id="solutions-title">Co chcete postavit?</h2>
          <p>Neprodáváme vruty od stolu. Navrhneme základ podle stavby, podloží a zatížení, které musí bezpečně unést.</p>
        </div>

        <div className="solutions__layout">
          <figure className="field-figure">
            <img
              src="/section-1.webp"
              alt="Přesně osazené zemní vruty připravené pro nosnou konstrukci"
              width="1400"
              height="1050"
              loading="lazy"
            />
            <figcaption>
              <span className="measure-dot" aria-hidden="true" />
              Každou polohu a výšku před montáží zaměří geodet.
            </figcaption>
          </figure>

          <div className="service-list">
            {services.map((service) => (
              <article className="service" key={service.type}>
                <p className="service__type">{service.type}</p>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="process" id="postup" aria-labelledby="process-title">
        <div className="process__visual">
          <img
            src="/section-2.webp"
            alt="Montážník při zavrtávání ocelového základu profesionální technikou"
            width="1400"
            height="1750"
            loading="lazy"
          />
          <div className="process__stamp">
            <span>OSTRAVA</span>
            <strong>Vlastní stroje.<br />Vlastní tým.</strong>
          </div>
        </div>

        <div className="process__content">
          <div className="section-heading section-heading--light">
            <p className="eyebrow">Od půdy k hotovému základu</p>
            <h2 id="process-title">Jistota se nezavrtává naslepo.</h2>
            <p>Za výsledkem stojí měření, statický výpočet a přesná montáž. Dostanete základ připravený pro další řemeslo, ne jen ocel v zemi.</p>
          </div>

          <ol className="process-list">
            {process.map(([number, title, text]) => (
              <li key={number}>
                <span className="process-list__number">{number}</span>
                <div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </li>
            ))}
          </ol>

          <div className="process__contact">
            <p><span>Zakázky a realizace</span><strong>Šimon Uruba</strong></p>
            <a href="tel:+420739253476">+420 739 253 476</a>
            <a href="mailto:zakazky@chytrezaklady.cz">zakazky@chytrezaklady.cz</a>
          </div>
        </div>
      </section>
    </main>
  );
}
