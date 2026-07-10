import type { CSSProperties } from "react";

export default function Page() {
  const stats = [
    { value: "79", label: "cvičebních stanovišť" },
    { value: "776", unit: "m²", label: "cvičební plochy" },
    { value: "16", label: "let v Ostravě" },
    { value: "05:30", label: "otevíráme každý všední den" },
  ];

  const services = [
    {
      no: "01",
      title: "Silový a tvarovací trénink",
      body: "Vedeme tě k technice, kterou zvládneš i za deset let. Stroje Hammer Strength a Life Fitness, ne honba za maximálkou — kvalita pohybu, kontrola, stabilita.",
    },
    {
      no: "02",
      title: "Kondice na Glute Builderu",
      body: "Cílený trénink hýždí a nohou na stroji, který jinde v Ostravě jen tak nenajdeš. Zátěž stavíme postupně a udržitelně, ne přes noc.",
    },
    {
      no: "03",
      title: "Měření na InBody 270S",
      body: "Než začneme, změříme svaly, tuk i vodu v těle. Konkrétní čísla, ze kterých stavíme plán — a ke kterým se za pár týdnů vrátíme.",
    },
    {
      no: "04",
      title: "První vstup zdarma",
      body: "Přijď si celé to místo osahat. Projdeme spolu stanoviště, ukážeme stroje a poradíme, kde začít. Bez závazku, bez podpisu.",
    },
  ];

  const hours = [
    { d: "Pondělí – pátek", h: "05:30 – 22:00" },
    { d: "Víkendy a svátky", h: "07:30 – 20:30" },
  ];

  return (
    <main className="sf">
      <header className="sf-top">
        <a className="sf-mark" href="#" aria-label="Simply Fitness Ostrava — domů">
          <span className="sf-mark-simply">SIMPLY</span>
          <span className="sf-mark-fitness">FITNESS</span>
        </a>
        <nav className="sf-nav" aria-label="Hlavní">
          <a href="#nabidka">Co trénujeme</a>
          <a href="#filozofie">O nás</a>
          <a className="sf-tel" href="tel:+420739669131">739&nbsp;669&nbsp;131</a>
        </nav>
      </header>

      <section className="sf-hero" aria-labelledby="hero-title">
        <div className="sf-hero-media">
          <img
            src="/hero.webp"
            alt="Cvičební plocha Simply Fitness v Ostravě-Hrabůvce se stroji Life Fitness a Hammer Strength"
            className="sf-hero-img"
          />
        </div>
        <div className="sf-hero-body">
          <p className="sf-eyebrow">Ostrava-Hrabůvka · osobní trénink od roku 2009</p>
          <h1 id="hero-title" className="sf-hero-title">
            Training
            <span className="sf-hero-for">for</span>
            life.
          </h1>
          <p className="sf-lede">
            Žádné extrémy ani výkon na jeden den. Stavíme sílu, kterou uneseš
            celý život — jednoduše, dlouhodobě, kvalitně. Přijď a první vstup
            máš u nás zdarma.
          </p>
          <div className="sf-cta-row">
            <a className="sf-btn" href="tel:+420739669131">Zavolat a přijít zdarma</a>
            <a className="sf-btn sf-btn-ghost" href="#nabidka">Co u nás natrénuješ</a>
          </div>
        </div>
        <ul className="sf-stats" aria-label="Simply Fitness v číslech">
          {stats.map((s, i) => (
            <li key={i} className="sf-stat" style={{ ["--i" as any]: i } as CSSProperties}>
              <span className="sf-stat-value">
                {s.value}
                {s.unit ? <span className="sf-stat-unit">{s.unit}</span> : null}
              </span>
              <span className="sf-stat-label">{s.label}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="sf-section sf-services" id="nabidka" aria-labelledby="nabidka-title">
        <div className="sf-section-head">
          <p className="sf-eyebrow">Co u nás natrénuješ</p>
          <h2 id="nabidka-title" className="sf-h2">
            Prémiové stroje. Trénink, který dává smysl.
          </h2>
          <p className="sf-section-note">
            Cvičíš na vybavení Life&nbsp;Fitness, Hammer&nbsp;Strength a
            Glute&nbsp;Builder. Sílu bereme jako prostředek — cílem je zdraví,
            funkčnost a to, aby ses chtěl vracet.
          </p>
        </div>
        <div className="sf-media-band">
          <img
            src="/section-1.webp"
            alt="Trénink na strojích v Simply Fitness Ostrava"
            className="sf-band-img"
          />
        </div>
        <ol className="sf-cards">
          {services.map((s) => (
            <li key={s.no} className="sf-card">
              <span className="sf-card-no">{s.no}</span>
              <h3 className="sf-card-title">{s.title}</h3>
              <p className="sf-card-body">{s.body}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="sf-section sf-about" id="filozofie" aria-labelledby="filozofie-title">
        <div className="sf-about-grid">
          <div className="sf-about-media">
            <img
              src="/section-2.webp"
              alt="Prostředí a komunita Simply Fitness v Ostravě"
              className="sf-about-img"
            />
          </div>
          <div className="sf-about-text">
            <p className="sf-eyebrow">Naše filozofie</p>
            <h2 id="filozofie-title" className="sf-h2">
              Dělat věci jednoduše, dlouhodobě a kvalitně.
            </h2>
            <p className="sf-para">
              Neusilujeme o extrémy ani krátkodobý výkon. Vytváříme prostředí,
              kde silový, tvarovací a kondiční trénink slouží zdraví,
              funkčnosti a udržitelnosti — fitness je pro nás životní styl,
              ne dřina na týden.
            </p>
            <p className="sf-para">
              Trénink v našem pojetí není o zvyšování zátěže za každou cenu, ale
              o kvalitě pohybu, konzistenci a postupném progresu. A stejně
              důležitá je komunita, ve které se lidé cítí dobře.
            </p>

            <dl className="sf-hours">
              {hours.map((h) => (
                <div key={h.d} className="sf-hours-row">
                  <dt>{h.d}</dt>
                  <dd>{h.h}</dd>
                </div>
              ))}
            </dl>

            <address className="sf-contact">
              <span>Ul. Slezská, Ostrava-Hrabůvka, 700&nbsp;30</span>
              <a href="tel:+420739669131">+420&nbsp;739&nbsp;669&nbsp;131</a>
              <a href="mailto:info@simplyfitness.cz">info@simplyfitness.cz</a>
            </address>
          </div>
        </div>
      </section>
    </main>
  );
}
