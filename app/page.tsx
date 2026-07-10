export default function Page() {
  const disciplines = [
    { code: "G", name: "Grafika", note: "Vizuální identita, firemní design, sazba" },
    { code: "L", name: "Logo", note: "Značka, logotyp, brand manuál" },
    { code: "O", name: "Obal", note: "Design obalu, který prodává z regálu" },
    { code: "T", name: "Tisk", note: "Letáky, katalogy, výroční zprávy" },
    { code: "W", name: "Web", note: "Responzivní stránky, SEO, PPC" },
    { code: "R", name: "Reklama", note: "Polepy aut, cedule, roll-upy, plachty" },
  ];

  const references = [
    {
      quote:
        "Pomáhali nám při realizaci interiéru naší první kavárny v Ostravě. Zvládli to na výbornou, v krátkém termínu a vnesli do realizace vlastní invenci. Vřele doporučuji.",
      name: "Erik Zlámal",
      role: "Regional Director",
    },
    {
      quote:
        "Spolehlivý a flexibilní partner na projekty jakékoliv velikosti. Vždycky přijdou s něčím novým a netradičním — od tiskovin přes dárkové předměty až po web, SEO a PPC.",
      name: "Jan Tic",
      role: "Marketing Communication Manager",
    },
    {
      quote:
        "Začínali jsme před deseti lety redesignem obalů likvidátoru pachu ALP — základ používáme dodnes. Postupně přibylo logo, firemní identita, web i letáky. Osobní přístup a vysoká odbornost.",
      name: "David Rašmadžian",
      role: "jednatel ALP ECOLOGY",
    },
  ];

  const numbers = [
    { value: "24+", label: "let praxe v oboru" },
    { value: "1 024+", label: "klientů, kteří se vrátili" },
    { value: "14 024+", label: "předaných projektů" },
    { value: "224 224+", label: "vyřízených hovorů a e-mailů" },
  ];

  return (
    <main className="page">
      <header className="topbar">
        <a className="wordmark" href="#" aria-label="OOO grafické studio, Ostrava">
          <span className="wordmark__mark" aria-hidden="true">
            <span className="o">O</span>
            <span className="o">O</span>
            <span className="o">O</span>
          </span>
          <span className="wordmark__text">
            grafické studio
            <span className="wordmark__loc">Ostrava</span>
          </span>
        </a>
        <a className="topbar__phone" href="tel:+420603818636">
          603&nbsp;818&nbsp;636
        </a>
      </header>

      <section className="hero">
        <div className="hero__grid">
          <div className="hero__copy">
            <p className="eyebrow">Grafická a reklamní speciálka · Ostrava</p>
            <h1 className="hero__title">
              Uděláme, aby vás bylo
              <br />
              <span className="hero__title-accent">vidět.</span>
            </h1>
            <p className="hero__lead">
              Kvalitní grafika, logotypy a firemní design. Moderní responzivní
              web, poutavé tiskoviny a obal, který prodává. Od vizitky po polep
              auta — společně posuneme vaše podnikání kupředu.
            </p>
            <div className="hero__actions">
              <a className="btn btn--primary" href="tel:+420603818636">
                Zavolat 603&nbsp;818&nbsp;636
              </a>
              <a className="btn btn--ghost" href="#o-nas">
                Co o nás říkají klienti
              </a>
            </div>
          </div>
          <figure className="hero__figure">
            <img
              src="/hero.webp"
              alt="Ukázka práce ostravského grafického studia — firemní design a tiskoviny"
              className="hero__image"
              width={880}
              height={1040}
            />
          </figure>
        </div>

        <div className="marquee" aria-hidden="true">
          <div className="marquee__track">
            {[0, 1].map((r) => (
              <span className="marquee__row" key={r}>
                Grafika · Logo · Obal · Tisk · Web · Reklama&nbsp;·&nbsp;
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="work" id="co-umime" aria-labelledby="work-title">
        <div className="section-head">
          <p className="eyebrow">Co umíme</p>
          <h2 className="section-title" id="work-title">
            Šest disciplín, jeden tým
          </h2>
          <p className="section-sub">
            Potřebujete polepit auto, vyrobit ceduli, roll-up, plachtu,
            plastický nápis, leták, katalog nebo výroční zprávu? Vezmeme si to
            celé na starost.
          </p>
        </div>

        <ul className="disc">
          {disciplines.map((d, i) => (
            <li className="disc__item" key={d.code}>
              <span className="disc__index">{String(i + 1).padStart(2, "0")}</span>
              <span className="disc__mark" aria-hidden="true">
                {d.code}
              </span>
              <span className="disc__body">
                <span className="disc__name">{d.name}</span>
                <span className="disc__note">{d.note}</span>
              </span>
            </li>
          ))}
        </ul>

        <div className="work__proof">
          <img
            src="/section-1.webp"
            alt="Realizace obalového a reklamního designu z dílny studia"
            className="work__image"
            width={1200}
            height={720}
          />
        </div>
      </section>

      <section className="trust" id="o-nas" aria-labelledby="trust-title">
        <div className="trust__intro">
          <p className="eyebrow">O nás</p>
          <h2 className="section-title" id="trust-title">
            Odborníky jsme se nestali přes noc
          </h2>
          <img
            src="/section-2.webp"
            alt="Práce ostravského studia v ulicích a v tisku"
            className="trust__image"
            width={1200}
            height={800}
          />
        </div>

        <dl className="stats">
          {numbers.map((n) => (
            <div className="stats__cell" key={n.label}>
              <dt className="stats__value">{n.value}</dt>
              <dd className="stats__label">{n.label}</dd>
            </div>
          ))}
        </dl>

        <ul className="quotes">
          {references.map((r) => (
            <li className="quote" key={r.name}>
              <p className="quote__text">„{r.quote}“</p>
              <p className="quote__author">
                <span className="quote__name">{r.name}</span>
                <span className="quote__role">{r.role}</span>
              </p>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
