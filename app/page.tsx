export default function Page() {
  const flavors = [
    {
      title: "Ovocné a lehké",
      items: ["Jogurt–malina", "Jogurt–borůvka", "Jogurt–jahoda", "Tvaroh–malina"],
    },
    {
      title: "Čokoládové",
      items: ["Čokoládový", "Čoko–malina", "Čoko–jahoda", "Harlekýn"],
    },
    {
      title: "Kamel klasika",
      items: ["Banán", "Jogurt–karamel", "Jogurt–mix", "Kuba"],
    },
  ];

  return (
    <main className="kamel">
      <section className="hero" aria-labelledby="hero-title">
        <header className="site-header">
          <a className="wordmark" href="#nahoru" aria-label="Cukrárna Kamel – úvod">
            <span className="wordmark-dot" aria-hidden="true" />
            <span>Cukrárna</span>
            <strong>Kamel</strong>
          </a>

          <nav className="site-nav" aria-label="Hlavní navigace">
            <a href="#dorty">Dorty</a>
            <a href="#navsteva">Návštěva</a>
          </nav>

          <a className="header-phone" href="tel:+420608507381">
            Zavolat
          </a>
        </header>

        <div className="hero-grid" id="nahoru">
          <div className="hero-copy">
            <p className="eyebrow">Praha 2 · Francouzská 42/85</p>
            <h1 id="hero-title">
              Třešeň nahoru.
              <span>Radost dovnitř.</span>
            </h1>
            <p className="hero-lead">
              Dorty pro chvíle, které si zaslouží víc než krabici ze supermarketu.
              Vyberte si z ovocných, čokoládových i jogurtových chutí přímo u nás na Francouzské.
            </p>

            <div className="hero-actions">
              <a className="primary-action" href="tel:+420608507381">
                Objednat dort
                <span aria-hidden="true">↗</span>
              </a>
              <div className="open-note">
                <span>Nejbližší otevírací dny</span>
                <strong>Út–Pá 10–18 · So 10–14</strong>
              </div>
            </div>
          </div>

          <div className="hero-visual">
            <figure className="cake-dome">
              <img
                src="/hero.webp"
                alt="Dort z Cukrárny Kamel ozdobený třešněmi"
                width="1200"
                height="1400"
              />
            </figure>

            <aside className="flavor-ticket" aria-label="Výběr oblíbených chutí">
              <span className="ticket-label">Z vitríny</span>
              <p>Jogurt–malina</p>
              <p>Harlekýn</p>
              <p>Čoko–jahoda</p>
              <span className="ticket-tear" aria-hidden="true" />
            </aside>
          </div>
        </div>
      </section>

      <section className="assortment" id="dorty" aria-labelledby="assortment-title">
        <div className="section-heading">
          <p className="eyebrow">Co si u nás vyberete</p>
          <h2 id="assortment-title">Dvanáct chutí. Žádná anonymní vitrína.</h2>
          <p>
            Sáhněte po známé klasice, nebo zkuste lehčí jogurtový dort. Celý dort si nejlépe
            domluvte předem telefonicky.
          </p>
        </div>

        <div className="assortment-layout">
          <figure className="section-photo section-photo-one">
            <img
              src="/section-1.webp"
              alt="Detail čerstvého dortu z nabídky Cukrárny Kamel"
              width="1200"
              height="900"
              loading="lazy"
            />
            <figcaption>Pečeno pro oslavy i obyčejná sladká odpoledne.</figcaption>
          </figure>

          <div className="flavor-board">
            {flavors.map((group) => (
              <article className="flavor-group" key={group.title}>
                <h3>{group.title}</h3>
                <ul>
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
            <a className="text-link" href="tel:+420608507381">
              Zavolat kvůli celému dortu <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </section>

      <section className="visit" id="navsteva" aria-labelledby="visit-title">
        <div className="visit-photo-wrap">
          <figure className="section-photo section-photo-two">
            <img
              src="/section-2.webp"
              alt="Zákusky připravené v pražské Cukrárně Kamel"
              width="1200"
              height="1000"
              loading="lazy"
            />
          </figure>
          <p className="photo-stamp">Praha 2</p>
        </div>

        <div className="visit-content">
          <p className="eyebrow">Než se zastavíte</p>
          <h2 id="visit-title">Najdete nás na Francouzské.</h2>
          <p className="visit-intro">
            Přijďte si vybrat z vitríny osobně. Poradíme s chutí i velikostí dortu a řekneme,
            co je právě připravené.
          </p>

          <dl className="visit-details">
            <div>
              <dt>Adresa</dt>
              <dd>Francouzská 42/85<br />120 00 Praha 2</dd>
            </div>
            <div>
              <dt>Otevírací doba</dt>
              <dd>Úterý–pátek 10:00–18:00<br />Sobota 10:00–14:00</dd>
            </div>
            <div>
              <dt>Telefon</dt>
              <dd><a href="tel:+420608507381">+420 608 507 381</a></dd>
            </div>
            <div>
              <dt>E-mail</dt>
              <dd><a href="mailto:info@cukrarnakamel.cz">info@cukrarnakamel.cz</a></dd>
            </div>
          </dl>
        </div>
      </section>
    </main>
  );
}
