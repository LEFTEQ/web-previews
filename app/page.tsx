export default function Page() {
  const brands = [
    "Parador",
    "Bauwerk",
    "Solidfloor",
    "Esco",
    "Europarkett",
    "LM Flooring",
  ];

  const services = [
    {
      wood: "Dub",
      title: "Výběr podlahy v showroomu",
      text: "Přijďte si na dřevo sáhnout. V pražském showroomu máme položené vzorky dubu, jasanu i ořechu — projdete se po nich bosou nohou a poznáte rozdíl, který z fotky nikdy nevyčtete.",
    },
    {
      wood: "Jasan",
      title: "Zaměření a kalkulace zdarma",
      text: "Přijedeme k vám, změříme místnosti a do tří dnů pošleme kalkulaci na míru — včetně podložky, lišt a přechodů. Žádné položky navíc, žádná překvapení na faktuře.",
    },
    {
      wood: "Ořech",
      title: "Pokládka vlastními parketáři",
      text: "Podlahu pokládají naši lidé, ne subdodavatelé. Běžný byt zvládneme za jeden až dva dny včetně lišt a úklidu. Na práci dáváme písemnou záruku.",
    },
    {
      wood: "Buk",
      title: "Renovace a péče",
      text: "Dřevěná podlaha vydrží dvacet let a víc — když se o ni pečuje. Poradíme s údržbou, vyměníme poškozenou lamelu a starší podlaze vrátíme původní vzhled.",
    },
  ];

  const trust = [
    {
      quote:
        "Pan majitel nám v showroomu rozložil čtyři odstíny dubu na zem a nechal nás po nich chodit. Vybrali jsme za hodinu a pokládka byla hotová za den a půl.",
      name: "Manželé Duškovi",
      place: "byt 3+kk, Praha 6 – Dejvice",
    },
    {
      quote:
        "Kalkulace seděla na korunu. Parketáři přišli v sedm, v pět odcházeli a v obýváku ležel jasan přesně podle vzorku. Uklizeno, lišty dotažené.",
      name: "Petra Konvalinková",
      place: "rodinný dům, Praha-Zbraslav",
    },
    {
      quote:
        "Po deseti letech nám stejná firma podlahu zrenovovala. Vypadá jako nová — to o levné krytině říct nemůžu.",
      name: "Martin Řehoř",
      place: "kancelář, Praha 2 – Vinohrady",
    },
  ];

  return (
    <main className="ps">
      {/* ================= HERO ================= */}
      <header className="ps-hero">
        <div className="ps-hero-inner">
          <div className="ps-topbar">
            <span className="ps-wordmark">
              Parket<em>system</em>
            </span>
            <span className="ps-topbar-note">Dřevěné podlahy · Praha</span>
          </div>

          <h1 className="ps-h1">
            <span className="ps-h1-row ps-h1-row-1">Na podlahu</span>
            <span className="ps-h1-row ps-h1-row-2">si člověk</span>
            <span className="ps-h1-row ps-h1-row-3">
              musí <em>sáhnout.</em>
            </span>
          </h1>

          <div className="ps-hero-foot">
            <p className="ps-lede">
              Prodáváme a pokládáme dřevěné plovoucí podlahy v Praze. Než
              podepíšete objednávku, projdete se po vzorcích v našem showroomu
              — protože dub od jasanu nerozeznáte z fotky, ale nohou ano.
            </p>
            <div className="ps-hero-actions">
              <a className="ps-btn" href="tel:+420222000000">
                Zavolat: 222 000 000
              </a>
              <a className="ps-btn ps-btn-ghost" href="mailto:info@parketsystem.cz">
                Napsat e-mail
              </a>
            </div>
          </div>
        </div>

        {/* signature: stromečkový (herringbone) vzor z lamel */}
        <div className="ps-herringbone" aria-hidden="true">
          <span className="ps-plank ps-p1" />
          <span className="ps-plank ps-p2" />
          <span className="ps-plank ps-p3" />
          <span className="ps-plank ps-p4" />
          <span className="ps-plank ps-p5" />
          <span className="ps-plank ps-p6" />
          <span className="ps-plank ps-p7" />
          <span className="ps-plank ps-p8" />
          <span className="ps-plank ps-p9" />
          <span className="ps-plank ps-p10" />
        </div>
      </header>

      {/* ================= SLUŽBY ================= */}
      <section className="ps-section ps-services" aria-labelledby="sluzby">
        <div className="ps-section-head">
          <h2 id="sluzby" className="ps-h2">
            Od vzorku v ruce po hotovou podlahu
          </h2>
          <p className="ps-section-sub">
            Každý krok značíme dřevinou, kterou u nás najdete položenou na zemi
            showroomu. Sáhnete si na všechny.
          </p>
        </div>

        <div className="ps-service-grid">
          {services.map((s) => (
            <article key={s.wood} className="ps-card">
              <span className="ps-card-wood">{s.wood}</span>
              <h3 className="ps-h3">{s.title}</h3>
              <p className="ps-card-text">{s.text}</p>
            </article>
          ))}
        </div>

        <div className="ps-brands">
          <span className="ps-brands-label">Značky, které pokládáme</span>
          <ul className="ps-brands-list">
            {brands.map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* ================= DŮVĚRA ================= */}
      <section className="ps-section ps-trust" aria-labelledby="reference">
        <div className="ps-section-head">
          <h2 id="reference" className="ps-h2 ps-h2-light">
            Podlahy, po kterých se v Praze chodí roky
          </h2>
          <p className="ps-section-sub ps-section-sub-light">
            Jsme malá firma a majitel je u každé zakázky osobně — od prvního
            vzorku po poslední lištu. Proto se k nám klienti vracejí i po
            deseti letech.
          </p>
        </div>

        <div className="ps-trust-grid">
          {trust.map((t) => (
            <figure key={t.name} className="ps-quote">
              <blockquote>
                <p>„{t.quote}“</p>
              </blockquote>
              <figcaption>
                <strong>{t.name}</strong>
                <span>{t.place}</span>
              </figcaption>
            </figure>
          ))}
        </div>

        <dl className="ps-facts">
          <div className="ps-fact">
            <dt>Showroom</dt>
            <dd>Praha — vzorky položené na zemi, ne v katalogu</dd>
          </div>
          <div className="ps-fact">
            <dt>Kalkulace</dt>
            <dd>Zaměření u vás a nabídka do 3 dnů, zdarma</dd>
          </div>
          <div className="ps-fact">
            <dt>Pokládka</dt>
            <dd>Vlastní parketáři, běžný byt za 1–2 dny</dd>
          </div>
        </dl>
      </section>
    </main>
  );
}
