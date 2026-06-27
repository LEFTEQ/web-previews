const services = [
  {
    title: 'Smlouvy a dohody',
    text: 'Připravíme nebo zkontrolujeme smlouvu tak, abyste věděli, co podepisujete, kde jsou rizika a jaký krok dává smysl.'
  },
  {
    title: 'Spory a zastupování',
    text: 'Navrhneme procesní postup, vysvětlíme možné scénáře a důsledně zastoupíme vaše oprávněné zájmy u soudu i mimo něj.'
  },
  {
    title: 'Obchodní a občanské právo',
    text: 'Řešíme podnikatelské vztahy, pohledávky, nemovitosti, dědictví i každodenní právní situace jednotlivců a firem.'
  }
];

const principles = [
  'Právní kroky vysvětlujeme srozumitelně, ne jen formálně.',
  'Hledáme rychlé a konstruktivní řešení, pokud je pro klienta výhodné.',
  'Zachováváme mlčenlivost a chráníme informace, které nám svěříte.',
  'Podle potřeby spolupracujeme se znalci, tlumočníky, překladateli a daňovými experty.'
];

export default function Page() {
  return (
    <main className="site-shell">
      <section className="hero-section" aria-labelledby="hero-title">
        <div className="case-mark" aria-hidden="true">
          <span>§</span>
          <span>01</span>
        </div>

        <nav className="topbar" aria-label="Hlavní orientace">
          <a className="wordmark" href="#top" aria-label="Kostka Jan Mgr., advokát">
            <span>Kostka</span>
            <small>Jan Mgr., advokát</small>
          </a>
          <a className="topbar-link" href="#sluzby">Zaměření</a>
        </nav>

        <div className="hero-grid" id="top">
          <div className="hero-copy">
            <p className="eyebrow">Advokátní služby v celé České republice</p>
            <h1 id="hero-title">Právo má být opora, ne další nejistota.</h1>
            <p className="hero-lede">
              Pomůžeme vám porozumět situaci, zvolit účelný právní postup a prosadit vaše oprávněné zájmy s osobním přístupem.
            </p>
          </div>

          <aside className="brief-panel" aria-label="Jak spolupráce začíná">
            <div className="brief-stamp">spis / první krok</div>
            <p>
              Nejprve si ujasníme fakta, cíl a rizika. Potom dostanete srozumitelný návrh postupu, ne jen seznam paragrafů.
            </p>
          </aside>
        </div>
      </section>

      <section className="content-section services-section" id="sluzby" aria-labelledby="services-title">
        <div className="section-heading">
          <p className="eyebrow">Zaměření kanceláře</p>
          <h2 id="services-title">Konkrétní právní pomoc podle situace, kterou řešíte.</h2>
        </div>

        <div className="service-list">
          {services.map((service, index) => (
            <article className="service-item" key={service.title}>
              <span className="service-number">0{index + 1}</span>
              <div>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="content-section trust-section" aria-labelledby="trust-title">
        <div className="trust-card">
          <p className="eyebrow">Jak pracujeme</p>
          <h2 id="trust-title">Důraz na osobní přístup, kvalitu a pochopitelné rozhodování.</h2>
          <p>
            Advokátní kancelář Kostka Jan Mgr. navazuje na zkušenost kanceláře Kostka - Novotný. Klientům poskytuje právní služby napříč právními oblastmi a dbá na to, aby rozuměli účelu jednotlivých kroků.
          </p>
        </div>

        <div className="principle-list" aria-label="Zásady spolupráce">
          {principles.map((principle) => (
            <div className="principle" key={principle}>
              <span aria-hidden="true">§</span>
              <p>{principle}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
