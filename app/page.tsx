export default function Page() {
  const departments = [
    {
      name: "Knihy pro každou náladu",
      detail: "Novinky, beletrie, detektivky, fantasy, dětské knihy i učebnice.",
    },
    {
      name: "Hry, které známe od stolu",
      detail: "Deskové hry vám doporučí knihkupci, kteří je sami pravidelně hrají.",
    },
    {
      name: "Dárky bez bezradného kroužení",
      detail: "Poukazy, papírnictví, drobnosti i konkrétní tip podle věku a zájmů.",
    },
  ];

  const routes = [
    {
      label: "Autem",
      text: "Z Rokycanské přímo na parkoviště OC Rokycanská.",
    },
    {
      label: "Autobusem",
      text: "K obchodnímu centru jezdí bezplatná autobusová linka.",
    },
    {
      label: "Trolejbusem",
      text: "Linkou 11 na zastávku Ústřední hřbitov.",
    },
  ];

  return (
    <main id="hlavni-obsah">
      <a className="skip-link" href="#prodejna">
        Přeskočit k informacím o prodejně
      </a>

      <header className="site-header" aria-label="Hlavní navigace">
        <a className="wordmark" href="#uvod" aria-label="Knihy Dobrovský Plzeň, začátek stránky">
          <span>Knihy</span>
          <strong>Dobrovský</strong>
          <small>Plzeň · Rokycanská</small>
        </a>

        <nav className="nav-links" aria-label="Navigace na stránce">
          <a href="#nabidka">Co tu najdete</a>
          <a href="#prodejna">Kudy k nám</a>
        </nav>

        <a className="header-call" href="tel:+420542220320">
          Zavolat
        </a>
      </header>

      <section className="hero" id="uvod" aria-labelledby="hero-title">
        <div className="hero-image-wrap">
          <img
            className="hero-image"
            src="/hero.webp"
            width="1800"
            height="1200"
            alt="Interiér knihkupectví Knihy Dobrovský v Plzni s regály plnými knih"
            fetchPriority="high"
          />
          <div className="hero-shade" aria-hidden="true" />
        </div>

        <div className="hero-copy">
          <p className="eyebrow">Největší knižní obchod v Plzni</p>
          <h1 id="hero-title">
            V Plzni se čte
            <span>až do osmi.</span>
          </h1>
          <p className="hero-intro">
            Knihy, hry i dárky pod jednou střechou. A vedle regálů lidé, kteří poradí podle toho,
            komu a proč vybíráte.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#prodejna">
              Kudy k nám <span aria-hidden="true">↘</span>
            </a>
            <a className="text-link" href="tel:+420542220320">
              Zavolat knihkupcům
            </a>
          </div>
        </div>

        <aside className="visit-slip" aria-label="Otevírací doba a adresa">
          <div className="slip-tab" aria-hidden="true">PLZEŇ</div>
          <p className="slip-label">Otevřeno každý den</p>
          <p className="slip-hours">09:00–20:00</p>
          <div className="slip-rule" />
          <address>
            Rokycanská 1424/128
            <br />
            312 00 Plzeň
          </address>
          <span className="slip-note">OC Rokycanská · bezbariérový vstup</span>
        </aside>
      </section>

      <section className="offer" id="nabidka" aria-labelledby="offer-title">
        <div className="section-heading">
          <p className="eyebrow dark">Mezi regály</p>
          <h2 id="offer-title">Přijdete pro jednu. Objevíte další.</h2>
          <p>
            Ať sháníte čtení na víkend, dárek pro osmiletého dobrodruha nebo hru pro celou partu,
            nemusíte vybírat naslepo.
          </p>
        </div>

        <div className="offer-layout">
          <figure className="book-window">
            <img
              src="/section-1.webp"
              width="1400"
              height="1050"
              loading="lazy"
              decoding="async"
              alt="Výběr knih a knižních novinek v plzeňské prodejně"
            />
            <figcaption>
              <span>Tip od knihkupce</span>
              Řekněte nám, co vás naposledy bavilo. Navážeme správnou knihou.
            </figcaption>
          </figure>

          <div className="department-list">
            {departments.map((department) => (
              <article className="department" key={department.name}>
                <span className="shelf-mark" aria-hidden="true" />
                <div>
                  <h3>{department.name}</h3>
                  <p>{department.detail}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="store" id="prodejna" aria-labelledby="store-title">
        <div className="store-visual">
          <img
            src="/section-2.webp"
            width="1400"
            height="1100"
            loading="lazy"
            decoding="async"
            alt="Knihkupec pomáhá zákazníkovi s výběrem knihy v Knihy Dobrovský Plzeň"
          />
          <div className="visual-caption">
            <strong>Jsme tu osobně.</strong>
            <span>Sečtělý tým, který zná knihy i deskové hry.</span>
          </div>
        </div>

        <div className="store-content">
          <p className="eyebrow light">OC Rokycanská · Plzeň</p>
          <h2 id="store-title">Do knihkupectví bez složitého hledání.</h2>
          <p className="store-lead">
            Prodejna je bezbariérová, otevřená sedm dní v týdnu a o dvě hodiny déle než ostatní
            plzeňské pobočky.
          </p>

          <div className="route-list" aria-label="Možnosti dopravy">
            {routes.map((route) => (
              <div className="route" key={route.label}>
                <strong>{route.label}</strong>
                <span>{route.text}</span>
              </div>
            ))}
          </div>

          <div className="store-actions">
            <a
              className="button button-light"
              href="https://mapy.cz/zakladni?q=Rokycansk%C3%A1%201424%2F128%2C%20Plze%C5%88"
              target="_blank"
              rel="noreferrer"
            >
              Otevřít trasu v mapě <span aria-hidden="true">↗</span>
            </a>
            <div className="contact-line">
              <a href="tel:+420542220320">542 220 320</a>
              <a href="mailto:poradime@knihydobrovsky.cz">poradime@knihydobrovsky.cz</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
