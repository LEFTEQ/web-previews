export default function Page() {
  const workstreams = [
    {
      number: "01",
      verb: "Rozebrat",
      title: "Demolice a odvoz",
      text: "Objekt bezpečně odstraníme, konstrukce roztřídíme a těžkou technikou připravíme prostor pro další etapu.",
      services: ["Kompletní demolice", "Drcení na místě", "Nadměrná doprava"],
    },
    {
      number: "02",
      verb: "Připravit",
      title: "Zemina a pevná pláň",
      text: "Provedeme hrubé terénní úpravy, stabilizaci podloží i konstrukce zemní pláně pod halou nebo komunikací.",
      services: ["HTÚ", "Stabilizace zemin", "3D řízení Trimble"],
    },
    {
      number: "03",
      verb: "Vrátit do oběhu",
      title: "Recyklace a materiál",
      text: "Stavební odpad zpracujeme na použitelný recyklát. Frézujeme vozovky, provozujeme deponii a mobilní betonárnu.",
      services: ["Recyklace odpadu", "Frézování vozovek", "Mobilní betonárna"],
    },
  ];

  const customers = [
    "EUROVIA CS",
    "Metrostav",
    "Ředitelství silnic a dálnic",
    "Geosan Group",
    "M-Silnice",
    "VCES",
  ];

  return (
    <>
      <title>ATM CZ — demolice, zemní práce a recyklace | Hradec Králové</title>
      <meta
        name="description"
        content="Demolice, stabilizace zemin, frézování vozovek, recyklace stavebního odpadu a těžká doprava z Hradce Králové. Kompletní realizace od roku 2008."
      />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="cs_CZ" />
      <meta property="og:title" content="ATM CZ — prostor pro další stavbu" />
      <meta
        property="og:description"
        content="Demolice, zemní práce a recyklace v jednom řízeném procesu. Hradec Králové, zakázky po celé ČR."
      />
      <meta property="og:image" content="/hero.webp" />

      <div className="atm-site" id="nahoru">
        <header className="topbar">
          <a className="wordmark" href="#nahoru" aria-label="ATM CZ, úvodní strana">
            <span className="wordmark-main">ATM</span>
            <span className="wordmark-cut" aria-hidden="true">/</span>
            <span className="wordmark-meta">CZ a.s.<small>těžká technika</small></span>
          </a>

          <nav className="navigation" aria-label="Hlavní navigace">
            <a href="#sluzby">Co řešíme</a>
            <a href="#jistota">Proč ATM</a>
          </nav>

          <a className="topbar-action" href="#sluzby">Rozsah prací</a>
        </header>

        <main>
          <section className="hero" aria-labelledby="hero-title">
            <div className="hero-image" aria-hidden="true">
              <img
                src="/hero.webp"
                alt=""
                width="1600"
                height="1000"
                fetchPriority="high"
              />
            </div>

            <div className="hero-copy">
              <p className="eyebrow">Demolice · zemní práce · Hradec Králové</p>
              <h1 id="hero-title">
                <span>Nejdřív</span>
                <span className="title-cut">rozebrat.</span>
                <span>Pak znovu využít.</span>
              </h1>
              <p className="hero-lead">
                Od řízené demolice přes úpravu podloží až po recyklát pro další stavbu. Jeden strojový park, jeden odpovědný tým, celý proces pod kontrolou.
              </p>
              <div className="hero-actions">
                <a className="primary-action" href="#sluzby">Zjistit, co zajistíme</a>
                <p><strong>Od roku 2008</strong><span>na stavbách po celé ČR</span></p>
              </div>
            </div>

            <div className="material-loop" aria-label="Pracovní postup od demolice k novému materiálu">
              <span>stavba</span>
              <b aria-hidden="true">→</b>
              <span>demolice</span>
              <b aria-hidden="true">→</b>
              <span>recyklát</span>
            </div>
          </section>

          <section className="services" id="sluzby" aria-labelledby="services-title">
            <div className="section-heading">
              <p className="eyebrow">Jeden navazující proces</p>
              <h2 id="services-title">Od prvního záběru až po pevnou pláň.</h2>
              <p>
                Nemusíte skládat několik dodavatelů. Demolici, přesun hmot, úpravu zeminy i další využití materiálu řídíme jako jednu zakázku.
              </p>
            </div>

            <div className="services-visual">
              <img
                src="/section-1.webp"
                alt="Těžká technika ATM CZ při demoličních a zemních pracích"
                width="1200"
                height="900"
                loading="lazy"
              />
              <div className="image-note">
                <span>Vlastní technika</span>
                <strong>pro lehké i těžké nasazení</strong>
              </div>
            </div>

            <div className="workstream-list">
              {workstreams.map((item) => (
                <article className="workstream" key={item.number}>
                  <div className="workstream-index">
                    <span>{item.number}</span>
                    <small>{item.verb}</small>
                  </div>
                  <div className="workstream-copy">
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                    <ul aria-label={`Součásti služby ${item.title}`}>
                      {item.services.map((service) => <li key={service}>{service}</li>)}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className="trust" id="jistota" aria-labelledby="trust-title">
            <div className="trust-image">
              <img
                src="/section-2.webp"
                alt="Stroj ATM CZ při přesně řízené práci v terénu"
                width="1200"
                height="1000"
                loading="lazy"
              />
              <div className="coordinate-mark" aria-hidden="true">
                <span>50.2092° N</span>
                <span>15.8328° E</span>
              </div>
            </div>

            <div className="trust-copy">
              <p className="eyebrow">Přesnost v těžkém terénu</p>
              <h2 id="trust-title">Technika, která ví, kde je.</h2>
              <p className="trust-intro">
                Většinu strojů vybavujeme 3D systémy Trimble. Obsluha pracuje podle digitálního modelu, takže pláň i svahy vznikají přesněji a s menším počtem oprav.
              </p>

              <dl className="proof-points">
                <div>
                  <dt>2008</dt>
                  <dd>od tohoto roku realizujeme kompletní HTÚ</dd>
                </div>
                <div>
                  <dt>Vlastní park</dt>
                  <dd>stroje, doprava i technologie bez zbytečných prostojů</dd>
                </div>
                <div>
                  <dt>Celá ČR</dt>
                  <dd>zázemí v Hradci Králové, zakázky napříč republikou</dd>
                </div>
              </dl>

              <div className="customers">
                <p>Pracovali jsme pro</p>
                <ul>
                  {customers.map((customer) => <li key={customer}>{customer}</li>)}
                </ul>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
