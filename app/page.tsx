export default function Page() {
  const services = [
    {
      title: "Nové krovy",
      text: "Vazby pro rodinné domy, přístavby i hospodářské objekty. Konstrukci připravíme podle projektu a přesně usadíme na stavbě.",
      tag: "TESAŘSTVÍ",
    },
    {
      title: "Opravy střech",
      text: "Vyměníme poškozené trámy, zpevníme starší konstrukci a navážeme klempířskými i pokrývačskými pracemi.",
      tag: "REKONSTRUKCE",
    },
    {
      title: "Pergoly a stání",
      text: "Stavíme dřevěné pergoly, přístřešky a venkovní stání pro auta včetně zastřešení a dokončovacích detailů.",
      tag: "DROBNÉ STAVBY",
    },
  ];

  return (
    <main className="sixta-page">
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-bar">
          <a className="wordmark" href="#top" aria-label="Střechy Sixta – začátek stránky">
            <span className="wordmark-roof" aria-hidden="true" />
            <span>STŘECHY</span>
            <strong>SIXTA</strong>
          </a>

          <div className="hero-contact">
            <span>Vrbová Lhota · Pečky</span>
            <a href="tel:+420721619943">+420 721 619 943</a>
          </div>
        </div>

        <div className="hero-grid" id="top">
          <div className="hero-copy">
            <p className="eyebrow">Tesařské, klempířské a pokrývačské práce</p>
            <h1 id="hero-title">
              Střecha začíná
              <span>dobrým krovem.</span>
            </h1>
            <p className="hero-lead">
              Stavíme a opravujeme střechy na klíč v okolí Peček a Nymburka. Od prvního zaměření až po poslední hřebenáč jednáte přímo s Michalem Sixtou.
            </p>
            <div className="hero-actions">
              <a className="primary-action" href="tel:+420721619943">
                Zavolat kvůli střeše
                <span aria-hidden="true">↗</span>
              </a>
              <a className="text-action" href="#sluzby">Prohlédnout služby</a>
            </div>
          </div>

          <div className="hero-visual">
            <div className="roof-frame" aria-hidden="true">
              <span className="rafter rafter-left" />
              <span className="rafter rafter-right" />
              <span className="collar-beam" />
            </div>
            <img
              src="/hero.webp"
              alt="Tesař při montáži dřevěné konstrukce krovu"
            />
            <div className="image-note">
              <span>STŘECHY NA KLÍČ</span>
              <strong>od návrhu po realizaci</strong>
            </div>
          </div>
        </div>

        <div className="hero-proof" aria-label="Základní informace">
          <span>Nové krovy</span>
          <span>Opravy konstrukcí</span>
          <span>Kompletní zastřešení</span>
        </div>
      </section>

      <section className="services" id="sluzby" aria-labelledby="services-title">
        <div className="section-heading">
          <p className="eyebrow">Co pro vás postavíme</p>
          <h2 id="services-title">Jedna parta pro dřevo, plech i krytinu.</h2>
          <p>
            Nemusíte koordinovat několik řemesel. Navazující práce zajistíme tak, aby konstrukce, oplechování i krytina tvořily jeden funkční celek.
          </p>
        </div>

        <div className="services-layout">
          <div className="service-image">
            <img
              src="/section-1.webp"
              alt="Detail přesně sestavených trámů nového krovu"
            />
            <p><span>Materiál rozhoduje.</span> Používáme vhodně dimenzované řezivo a každý spoj kontrolujeme přímo na konstrukci.</p>
          </div>

          <div className="service-list">
            {services.map((service) => (
              <article className="service-item" key={service.title}>
                <p className="service-tag">{service.tag}</p>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="trust" aria-labelledby="trust-title">
        <div className="trust-image">
          <img
            src="/section-2.webp"
            alt="Hotová šikmá střecha rodinného domu v okolí Peček"
          />
          <div className="location-stamp">
            <span>ZÁZEMÍ FIRMY</span>
            <strong>Vrbová Lhota</strong>
            <small>u Peček</small>
          </div>
        </div>

        <div className="trust-copy">
          <p className="eyebrow">Řemeslo, za kterým je vidět člověk</p>
          <h2 id="trust-title">Přijedeme, změříme a řekneme, co dává smysl.</h2>
          <p className="trust-intro">
            Firma Michal Sixta se věnuje stavbám a rekonstrukcím střech v regionu. Zakázku posoudíme na místě, vysvětlíme postup a držíme se domluveného rozsahu.
          </p>

          <dl className="trust-facts">
            <div>
              <dt>Adresa</dt>
              <dd>Vrbová Lhota 220<br />289 11 Pečky</dd>
            </div>
            <div>
              <dt>Přímý kontakt</dt>
              <dd><a href="tel:+420721619943">+420 721 619 943</a><br /><a href="mailto:sixtamichal@seznam.cz">sixtamichal@seznam.cz</a></dd>
            </div>
            <div>
              <dt>Identifikace</dt>
              <dd>Michal Sixta<br />IČ 76274942</dd>
            </div>
          </dl>

          <p className="freshness"><span aria-hidden="true" /> Informace ověřeny v červenci 2026</p>
        </div>
      </section>
    </main>
  );
}
