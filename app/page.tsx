export default function Page() {
  const menu = [
    {
      name: "Gordon Bleu, bramborová kaše",
      price: "145 Kč",
      note: "S hovězím vývarem a játrovými knedlíčky nebo dršťkovou."
    },
    {
      name: "Kuřecí prsíčka s uzeným sýrem, hranolky",
      price: "143 Kč",
      note: "S hovězím vývarem a játrovými knedlíčky nebo dršťkovou."
    },
    {
      name: "Zapečená brokolice se sýrem, brambory, dip",
      price: "139 Kč",
      note: "S hovězím vývarem a játrovými knedlíčky nebo dršťkovou."
    }
  ];

  return (
    <main className="fino-page">
      <section className="hero" aria-labelledby="hero-title">
        <nav className="topbar" aria-label="Hlavní navigace">
          <a className="wordmark" href="#nahoru" aria-label="Bistro Fino – úvod">
            <span className="wordmark-small">BISTRO</span>
            <span className="wordmark-main">fino</span>
          </a>

          <div className="nav-links">
            <a href="#menu">Dnešní menu</a>
            <a href="#rozvoz">Rozvoz</a>
            <a className="nav-call" href="tel:+420737918954">Zavolat 737 918 954</a>
          </div>
        </nav>

        <div className="hero-grid" id="nahoru">
          <div className="hero-copy">
            <p className="eyebrow">Mírová 18 · Ostrava</p>
            <h1 id="hero-title">Oběd, který se nezdržuje.</h1>
            <p className="hero-lead">
              Poctivé meníčko české i světové kuchyně, chlebíčky a něco sladkého ke kávě. Uvaříme, zabalíme a v Ostravě také rozvezeme.
            </p>

            <div className="hero-actions">
              <a className="button button-primary" href="tel:+420737918954">Objednat oběd</a>
              <a className="button button-secondary" href="#menu">Prohlédnout menu</a>
            </div>

            <dl className="service-facts">
              <div>
                <dt>Objednávky</dt>
                <dd>737 918 954</dd>
              </div>
              <div>
                <dt>Vaříme také pro</dt>
                <dd>firmy a domovy seniorů</dd>
              </div>
            </dl>
          </div>

          <div className="hero-visual" aria-label="Čerstvě připravený oběd z Bistra Fino">
            <div className="plate-frame">
              <img
                src="/hero.webp"
                alt="Čerstvý oběd naservírovaný v Bistru Fino v Ostravě"
                width="900"
                height="1080"
                fetchPriority="high"
              />
            </div>
            <div className="order-ticket" aria-hidden="true">
              <span className="ticket-date">MENU · 14. 7.</span>
              <strong>Dnes bez<br />zbytečného čekání</strong>
              <span className="ticket-line" />
              <span>objednávky 737 918 954</span>
            </div>
          </div>
        </div>
      </section>

      <section className="menu-section" id="menu" aria-labelledby="menu-title">
        <div className="section-heading">
          <p className="eyebrow">Dnešní obědové menu</p>
          <h2 id="menu-title">Známá jídla, na která máte opravdu chuť.</h2>
          <p>
            Vyberte si hlavní jídlo a jednu ze dvou polévek. Pro rychlou objednávku nám rovnou zavolejte.
          </p>
        </div>

        <div className="menu-layout">
          <figure className="menu-photo">
            <img
              src="/section-1.webp"
              alt="Kuchařská příprava denního menu v Bistru Fino"
              width="960"
              height="760"
              loading="lazy"
            />
            <figcaption>Každý pracovní den vaříme nové menu přímo na Mírové.</figcaption>
          </figure>

          <div className="menu-list">
            {menu.map((item) => (
              <article className="menu-item" key={item.name}>
                <div className="menu-item-head">
                  <h3>{item.name}</h3>
                  <span>{item.price}</span>
                </div>
                <p>{item.note}</p>
                <a href="tel:+420737918954" aria-label={`Objednat ${item.name} za ${item.price}`}>
                  Objednat telefonicky
                </a>
              </article>
            ))}

            <p className="menu-more">
              V nabídce je také retro katův šleh, řecký salát a vepřový řízek. Dostupnost jednotlivých jídel ověříme při objednávce.
            </p>
          </div>
        </div>
      </section>

      <section className="delivery-section" id="rozvoz" aria-labelledby="delivery-title">
        <div className="delivery-image">
          <img
            src="/section-2.webp"
            alt="Hotové porce Bistra Fino připravené k rozvozu po Ostravě"
            width="980"
            height="900"
            loading="lazy"
          />
          <span className="image-label">Z kuchyně rovnou k vám</span>
        </div>

        <div className="delivery-copy">
          <p className="eyebrow">Rozvoz po Ostravě</p>
          <h2 id="delivery-title">Pravidelný oběd pro tým i domov seniorů.</h2>
          <p className="delivery-intro">
            Připravíme jednotlivé porce, obložené mísy, chlebíčky, dezerty i celé občerstvení. Firemní a pravidelné rozvozy domluvíme podle adresy a počtu strávníků.
          </p>

          <div className="delivery-options">
            <article>
              <span>Pro firmy</span>
              <h3>Obědy bez odchodu z pracoviště</h3>
              <p>Domluvte si pravidelné doručení pro kancelář, dílnu nebo provoz v Ostravě.</p>
            </article>
            <article>
              <span>Pro seniory</span>
              <h3>Spolehlivé jídlo každý všední den</h3>
              <p>Rozvoz teplých porcí pro domovy seniorů řešíme individuálně a srozumitelně.</p>
            </article>
          </div>

          <div className="contact-card">
            <div>
              <span>Kde nás najdete</span>
              <strong>Mírová 18, 703 00 Ostrava</strong>
            </div>
            <div className="contact-links">
              <a href="tel:+420737918954">Zavolat</a>
              <a href="mailto:kontakt@bistrofino.cz">Napsat e-mail</a>
            </div>
          </div>

          <p className="company-note">Bistro Fino s.r.o. · IČO 05651123</p>
        </div>
      </section>
    </main>
  );
}
