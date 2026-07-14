const menuItems = [
  {
    number: "01",
    name: "Pinsa Romana",
    detail: "Lehké těsto z pšeničné a rýžové mouky, které necháváme zrát až 120 hodin.",
    note: "naše specialita",
  },
  {
    number: "02",
    name: "Bruschetta pomodori",
    detail: "Cherry rajčata, olivy, grana padano a opečené pečivo.",
    price: "111 Kč",
  },
  {
    number: "03",
    name: "Spaghetti con gamberi",
    detail: "Krevety, česnek, cuketa, chilli, rozmarýn a rukola.",
    price: "269 Kč",
  },
];

export default function Page() {
  return (
    <main className="site-page">
      <section className="hero" aria-labelledby="hero-title">
        <header className="site-header">
          <a className="wordmark" href="#nahoru" aria-label="MC Koloseum – začátek stránky">
            <span className="wordmark-mc">MC</span>
            <span className="wordmark-name">KOLOSEUM</span>
            <span className="wordmark-place">ÚSTECKO</span>
          </a>

          <nav className="site-nav" aria-label="Hlavní navigace">
            <a href="#nabidka">Co vaříme</a>
            <a href="#prostor">Prostor</a>
            <a className="nav-call" href="tel:+420777177117">
              <span className="desktop-label">Objednat: </span>777 177 117
            </a>
          </nav>
        </header>

        <div className="hero-image" id="nahoru">
          <img
            src="/hero.webp"
            alt="Čerstvě upečená pizza v pizzerii MC Koloseum"
            width="1800"
            height="1200"
            fetchPriority="high"
          />
          <div className="hero-shade" aria-hidden="true" />
        </div>

        <div className="hero-content">
          <p className="eyebrow">Pizzerie · Krupka u Ústí nad Labem</p>
          <h1 id="hero-title">
            Pizza,
            <span>která má čas.</span>
          </h1>
          <p className="hero-copy">
            Naše pinsa zraje až pět dní. Proto je uvnitř nadýchaná, na okrajích křupavá a lehká i po posledním soustu.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="tel:+420777177117">
              Objednat po telefonu
            </a>
            <a className="text-link" href="#nabidka">
              Prohlédnout výběr <span aria-hidden="true">↓</span>
            </a>
          </div>
        </div>

        <div className="fermentation-stamp" aria-label="Těsto zraje až 120 hodin">
          <span className="stamp-small">zraje až</span>
          <strong>120</strong>
          <span className="stamp-hours">hodin</span>
        </div>
      </section>

      <section className="menu-section" id="nabidka" aria-labelledby="menu-title">
        <div className="section-heading">
          <p className="eyebrow dark">Z pece a z kuchyně</p>
          <h2 id="menu-title">Co si dnes dáte?</h2>
          <p>
            Italské základy, poctivé suroviny a jídla, která znáte podle chuti — ne podle dlouhého popisu.
          </p>
        </div>

        <div className="menu-layout">
          <figure className="menu-photo">
            <img
              src="/section-1.webp"
              alt="Pinsa Romana s nadýchaným těstem a čerstvými surovinami"
              width="1200"
              height="1400"
              loading="lazy"
            />
            <figcaption>
              <span>Novinka z římské pece</span>
              Pinsa Romana
            </figcaption>
          </figure>

          <div className="menu-list">
            {menuItems.map((item) => (
              <article className="menu-item" key={item.number}>
                <span className="menu-number" aria-hidden="true">{item.number}</span>
                <div>
                  <div className="menu-name-row">
                    <h3>{item.name}</h3>
                    {item.price && <strong>{item.price}</strong>}
                  </div>
                  <p>{item.detail}</p>
                  {item.note && <span className="menu-note">{item.note}</span>}
                </div>
              </article>
            ))}
            <p className="menu-footnote">
              V nabídce najdete také čerstvé těstoviny, steaky, saláty a vegetariánská jídla.
            </p>
          </div>
        </div>
      </section>

      <section className="venue-section" id="prostor" aria-labelledby="venue-title">
        <div className="venue-photo">
          <img
            src="/section-2.webp"
            alt="Příjemné posezení v areálu MC Koloseum nedaleko Ústí nad Labem"
            width="1600"
            height="1100"
            loading="lazy"
          />
        </div>

        <div className="venue-content">
          <p className="eyebrow light">Nejen stůl na večeři</p>
          <h2 id="venue-title">
            Večer pro dva.
            <span>Ples pro čtyři sta.</span>
          </h2>
          <p className="venue-intro">
            MC Koloseum je místo pro běžný oběd i velkou událost. V klidné části Krupky, kousek od Ústí nad Labem, máte restauraci, terasu i sál pod jednou střechou.
          </p>

          <div className="venue-facts">
            <div>
              <strong>400 míst</strong>
              <span>pro plesy, svatby a firemní večírky</span>
            </div>
            <div>
              <strong>Terasa</strong>
              <span>s výhledem na dětské hřiště</span>
            </div>
            <div>
              <strong>Catering</strong>
              <span>jídlo a servis i pro vaši akci</span>
            </div>
          </div>

          <a className="button button-light" href="tel:+420777177117">
            Rezervovat stůl nebo termín
          </a>
        </div>
      </section>
    </main>
  );
}
