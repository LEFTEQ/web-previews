const services = [
  {
    title: "Plyn a revize",
    text: "Rozvody, přípojky, regulátory, uzávěry i kotle. Každý zásah zakončí náš vlastní revizní technik potřebnou zkouškou.",
    tag: "Bezpečný provoz",
  },
  {
    title: "Voda a odpady",
    text: "Opravíme únik, vyměníme stoupačky, zapojíme bojler nebo sanitu a vyčistíme neprůchodný odpad.",
    tag: "Montáž i havárie",
  },
  {
    title: "Topení",
    text: "Servisujeme kotelny, čerpadla a radiátory. Soustavu odvzdušníme, vyvážíme a připravíme na spolehlivou sezónu.",
    tag: "Teplo bez výpadků",
  },
  {
    title: "Kanalizace",
    text: "Instalujeme a opravujeme vnitřní i venkovní rozvody, dešťové svody, stoupačky a ležaté potrubí.",
    tag: "Od prohlídky po výměnu",
  },
  {
    title: "Měření spotřeby",
    text: "Dodáme vodoměry, rozdělovače topných nákladů i centrální odečty pro bytové domy a jejich správce.",
    tag: "Přehledné odečty",
  },
  {
    title: "Regulace soustav",
    text: "Zmapujeme topný systém, nastavíme ventily a pomůžeme omezit nerovnoměrné vytápění i zbytečné ztráty.",
    tag: "Úspornější dům",
  },
];

export default function Page() {
  return (
    <main>
      <section className="hero" aria-labelledby="hero-title">
        <img
          className="hero__image"
          src="/hero.webp"
          alt="Plynař při odborné kontrole domovního plynového rozvodu"
        />
        <div className="hero__shade" aria-hidden="true" />

        <header className="site-head">
          <a className="wordmark" href="#zacatek" aria-label="Delmax – zpět na začátek">
            <span>DEL</span><strong>MAX</strong>
            <small>technika domu</small>
          </a>
          <nav aria-label="Hlavní navigace">
            <a href="#sluzby">Služby</a>
            <a href="#jistota">Proč Delmax</a>
          </nav>
          <a className="head-phone" href="tel:+420602154602">602 154 602</a>
        </header>

        <div className="hero__content" id="zacatek">
          <p className="eyebrow">Plynaři a instalatéři · Ústí nad Labem</p>
          <h1 id="hero-title">Plyn patří<br />do pevných rukou.</h1>
          <p className="hero__lead">
            Instalujeme, opravujeme a revidujeme rozvody plynu. K tomu řešíme vodu,
            topení a kanalizaci v bytech i celých domech.
          </p>
          <div className="hero__actions">
            <a className="button button--primary" href="tel:+420602154602">Zavolat nonstop instalatéra</a>
            <a className="button button--quiet" href="mailto:herink@delmax.cz">Napsat poptávku</a>
          </div>
        </div>

        <div className="pipe-signature" aria-hidden="true">
          <span className="pipe-signature__line" />
          <span className="pipe-signature__valve">
            <i />
          </span>
          <span className="pipe-signature__label">UZÁVĚR / KONTROLA / REVIZE</span>
        </div>
      </section>

      <section className="services section-shell" id="sluzby" aria-labelledby="services-title">
        <div className="section-intro">
          <div>
            <p className="eyebrow eyebrow--dark">Jeden technický partner pro celý dům</p>
            <h2 id="services-title">Od hlavního uzávěru až po poslední radiátor.</h2>
          </div>
          <p>
            Pro správce domů, SVJ, firmy i domácnosti v Ústí nad Labem a okolí.
            Přijedeme kvůli jedné opravě i kompletní rekonstrukci rozvodů.
          </p>
        </div>

        <div className="services__layout">
          <figure className="trade-image">
            <img
              src="/section-1.webp"
              alt="Detail odborné montáže potrubí a uzavíracích ventilů"
            />
            <figcaption>
              <span>Řemeslo v detailu</span>
              Čistá montáž, přístupné spoje a kontrola před předáním.
            </figcaption>
          </figure>

          <div className="service-list">
            {services.map((service) => (
              <article className="service" key={service.title}>
                <p>{service.tag}</p>
                <h3>{service.title}</h3>
                <span>{service.text}</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="assurance" id="jistota" aria-labelledby="assurance-title">
        <div className="assurance__image-wrap">
          <img
            src="/section-2.webp"
            alt="Technik Delmax při práci na domovní topné a měřicí soustavě"
          />
          <div className="assurance__stamp" aria-label="Působíme v Ústí nad Labem">
            <span>Ústí nad Labem</span>
            <strong>Severní Čechy</strong>
          </div>
        </div>

        <div className="assurance__content">
          <p className="eyebrow eyebrow--light">Jistota po každém zásahu</p>
          <h2 id="assurance-title">Oprava nekončí dotažením posledního spoje.</h2>
          <p className="assurance__lead">
            Rozvod zkontrolujeme, vysvětlíme další postup a u plynu zajistíme zákonem
            předepsanou revizi. Bez přehazování odpovědnosti mezi montážní firmou a revizním technikem.
          </p>

          <dl className="proof-list">
            <div>
              <dt>Vlastní revizní technik</dt>
              <dd>Revize po opravách potrubí, přípojek, spotřebičů i instalaci kotle.</dd>
            </div>
            <div>
              <dt>Zkušenost s bytovými domy</dt>
              <dd>Stovky rekonstrukcí svislých a ležatých rozvodů v domech a společných prostorách.</dd>
            </div>
            <div>
              <dt>Pomoc při havárii</dt>
              <dd>Nonstop linka pro akutní potíže s vodou, topením a plynem.</dd>
            </div>
          </dl>

          <div className="contact-strip">
            <div>
              <span>Nonstop instalatéři</span>
              <a href="tel:+420602154602">+420 602 154 602</a>
            </div>
            <a className="mail-link" href="mailto:herink@delmax.cz">herink@delmax.cz</a>
          </div>
        </div>
      </section>
    </main>
  );
}
