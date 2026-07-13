const services = [
  {
    label: "Lakování",
    title: "Celý díl i lokální oprava",
    text: "Opravíme odřený nárazník, blatník i rozsáhlejší poškození karoserie. Rozsah práce nejdřív uvidíte a odsouhlasíte.",
  },
  {
    label: "Odstín",
    title: "Míchání barvy podle vozu",
    text: "Odstín ladíme ke skutečnému stáří laku, ne pouze ke kódu výrobce. Přechody rozleštíme tak, aby oprava nepoutala pozornost.",
  },
  {
    label: "Karoserie",
    title: "Příprava před lakováním",
    text: "Promáčkliny, korozi a poškozené hrany srovnáme před nástřikem. Lak tak drží na správně připraveném podkladu.",
  },
];

export default function Page() {
  return (
    <main className="site-shell">
      <section className="hero" aria-labelledby="hero-title">
        <img
          className="hero-photo"
          src="/hero.webp"
          alt="Lakýrník při precizním nástřiku karoserie v autolakovně HF Auto"
        />
        <div className="hero-shade" aria-hidden="true" />

        <header className="topbar">
          <a className="wordmark" href="#zacatek" aria-label="HF Auto – úvod">
            <span className="wordmark-hf">HF</span>
            <span className="wordmark-auto">AUTO</span>
            <span className="wordmark-detail">AUTOLAKOVNA · PRAHA 6</span>
          </a>
          <a className="topbar-phone" href="tel:+420602657180">
            <span>Po–Čt 8–18 · Pá 8–17</span>
            +420 602 657 180
          </a>
        </header>

        <div className="hero-content" id="zacatek">
          <p className="eyebrow">Lak opravujeme tak, aby oprava nebyla vidět.</p>
          <h1 id="hero-title">
            Stejný vůz.
            <span>Beze stopy.</span>
          </h1>
          <p className="hero-copy">
            Autolakovna a karosářské práce pro osobní i lehké užitkové vozy všech značek. Od roku 2012 v Papírenské ulici v Praze 6.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="tel:+420602657180">Zavolat lakýrníkovi</a>
            <a className="button button-quiet" href="#sluzby">Prohlédnout služby</a>
          </div>
        </div>

        <div className="paint-strip" aria-label="Naše práce: přesné sladění odstínu a čistý povrch">
          <span className="paint-note">Kód barvy je začátek.<br />Rozhoduje oko lakýrníka.</span>
          <span className="paint-chip paint-chip-one">Podklad</span>
          <span className="paint-chip paint-chip-two">Odstín</span>
          <span className="paint-chip paint-chip-three">Krycí lak</span>
          <span className="paint-chip paint-chip-four">Kontrola</span>
        </div>
      </section>

      <section className="services section" id="sluzby" aria-labelledby="services-title">
        <div className="section-heading">
          <p className="section-kicker">Co vyřešíme v lakovně</p>
          <h2 id="services-title">Od škrábance po celý díl.</h2>
          <p>Nejdřív posoudíme poškození a navrhneme rozsah, který dává smysl pro váš vůz.</p>
        </div>

        <div className="services-layout">
          <figure className="work-image work-image-primary">
            <img
              src="/section-1.webp"
              alt="Detail přípravy karoserie před lakováním v dílně HF Auto"
            />
            <figcaption>Příprava povrchu rozhoduje o výsledku i životnosti laku.</figcaption>
          </figure>

          <div className="service-list">
            {services.map((service) => (
              <article className="service-item" key={service.label}>
                <p>{service.label}</p>
                <h3>{service.title}</h3>
                <span>{service.text}</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="trust section" aria-labelledby="trust-title">
        <div className="trust-copy">
          <p className="section-kicker">Dílna, kam můžete přijet osobně</p>
          <h2 id="trust-title">Výsledek ukážeme na denním světle.</h2>
          <p className="trust-lead">
            U laku nestačí, že „sedí přibližně“. Kontrolujeme odstín, přechody i povrch z více úhlů, než vám předáme klíče.
          </p>

          <dl className="facts">
            <div>
              <dt>Zkušenost</dt>
              <dd>V Praze opravujeme vozy od roku 2012.</dd>
            </div>
            <div>
              <dt>Pro všechny značky</dt>
              <dd>Osobní i lehké užitkové automobily.</dd>
            </div>
            <div>
              <dt>Provozovna</dt>
              <dd>Papírenská 1, Praha 6, 160 00.</dd>
            </div>
          </dl>

          <blockquote>
            <p>„Poškození si prohlédneme u vozu. Vysvětlíme, co je potřeba lakovat a kde lze opravu udržet menší.“</p>
            <cite>Tým HF Auto</cite>
          </blockquote>
        </div>

        <figure className="work-image work-image-secondary">
          <img
            src="/section-2.webp"
            alt="Kontrola lesku a barevného odstínu čerstvě nalakovaného automobilového dílu"
          />
          <figcaption>
            <span>HF Auto s.r.o.</span>
            Autolakovna · karosářské práce · autoservis
          </figcaption>
        </figure>
      </section>
    </main>
  );
}
