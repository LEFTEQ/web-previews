export default function Page() {
  const products = [
    {
      name: "Chléb a běžné pečivo",
      detail: "Bochníky, rohlíky, housky i sladké pečivo pro každodenní nákup.",
      mark: "CH",
    },
    {
      name: "Knedlíky",
      detail: "Houskové i bramborové přílohy, když má být oběd bez zbytečné práce.",
      mark: "KN",
    },
    {
      name: "Těstoviny",
      detail: "Poctivý základ do polévky i k rychlé večeři z místní výroby.",
      mark: "TĚ",
    },
  ];

  return (
    <>
      <title>PEZO Pekárna Ostrava-Poruba | Pečivo, knedlíky a těstoviny</title>
      <meta
        name="description"
        content="Pekárna PEZO v Ostravě-Porubě. Čerstvé pečivo, chléb, knedlíky a těstoviny. Objednávky přijímáme den předem do 11:30."
      />
      <meta property="og:title" content="PEZO Pekárna Ostrava-Poruba" />
      <meta
        property="og:description"
        content="Čerstvé pečivo, knedlíky a těstoviny z pekárny na Svojsíkově ulici."
      />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="cs_CZ" />
      <meta property="og:image" content="/hero.webp" />

      <main className="bakery-page">
        <header className="site-header" aria-label="Hlavní navigace">
          <a className="wordmark" href="#nahoru" aria-label="PEZO Pekárna – na začátek stránky">
            <span className="wordmark-main">PEZO</span>
            <span className="wordmark-sub">pekárna · Poruba</span>
          </a>

          <nav className="site-nav" aria-label="Obsah stránky">
            <a href="#nabidka">Co pečeme</a>
            <a href="#poruba">Kde nás najdete</a>
          </nav>

          <a className="header-call" href="tel:+420596956278">
            <span>Zavolat</span>
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M7.1 3.5 9.4 3a1.4 1.4 0 0 1 1.6.8l1.1 2.7a1.4 1.4 0 0 1-.4 1.6l-1.5 1.2a13.6 13.6 0 0 0 4.5 4.5l1.2-1.5a1.4 1.4 0 0 1 1.6-.4l2.7 1.1a1.4 1.4 0 0 1 .8 1.6l-.5 2.3a3 3 0 0 1-3 2.4C10.4 18.8 5.2 13.6 4.7 6.5a3 3 0 0 1 2.4-3Z" />
            </svg>
          </a>
        </header>

        <section className="hero" id="nahoru" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow">Pekařská výroba · Ostrava-Poruba</p>
            <h1 id="hero-title">
              Chléb, co drží
              <span>Ostravu při síle.</span>
            </h1>
            <p className="hero-intro">
              Pro čerstvý bochník, rohlíky i knedlíky k nedělnímu obědu nemusíte daleko.
              Pečeme přímo v Porubě a objednávku stačí nahlásit den předem.
            </p>
            <div className="hero-actions" aria-label="Rychlé možnosti kontaktu">
              <a className="button button-primary" href="tel:+420596956278">
                Zavolat do pekárny
              </a>
              <a className="text-link" href="#nabidka">
                Prohlédnout nabídku
                <span aria-hidden="true">↓</span>
              </a>
            </div>
          </div>

          <div className="hero-visual">
            <img
              src="/hero.webp"
              alt="Čerstvě upečené pečivo z pekárny PEZO v Ostravě-Porubě"
              width="1200"
              height="1500"
              fetchPriority="high"
              decoding="async"
            />
            <div className="order-ticket">
              <span className="ticket-label">Objednávky na další den</span>
              <strong>do 11:30</strong>
              <span>596 956 278</span>
            </div>
            <span className="flour-stamp" aria-hidden="true">PEČENO V PORUBĚ</span>
          </div>
        </section>

        <section className="offer-section" id="nabidka" aria-labelledby="offer-title">
          <div className="section-heading">
            <p className="eyebrow">Z pece i z výroby</p>
            <h2 id="offer-title">Od ranního rohlíku po nedělní knedlík.</h2>
            <p>
              Jedna porubská adresa pro pečivo na každý den i suroviny, které zkrátí cestu
              k hotovému obědu.
            </p>
          </div>

          <div className="offer-layout">
            <figure className="offer-image">
              <img
                src="/section-1.webp"
                alt="Výběr chleba a čerstvého pečiva z porubské pekárny"
                width="1200"
                height="900"
                loading="lazy"
                decoding="async"
              />
              <figcaption>Pečivo pro běžný den, upečené tady v Ostravě.</figcaption>
            </figure>

            <div className="product-list">
              {products.map((product) => (
                <article className="product" key={product.name}>
                  <span className="product-mark" aria-hidden="true">{product.mark}</span>
                  <div>
                    <h3>{product.name}</h3>
                    <p>{product.detail}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="local-section" id="poruba" aria-labelledby="local-title">
          <div className="local-image-wrap">
            <img
              src="/section-2.webp"
              alt="Pekař při práci s čerstvým těstem v pekárně PEZO"
              width="1200"
              height="1100"
              loading="lazy"
              decoding="async"
            />
            <p className="image-note">Místní výroba, ne anonymní regál.</p>
          </div>

          <div className="local-copy">
            <p className="eyebrow">Pekárna, kterou najdete</p>
            <h2 id="local-title">Pec je v Porubě. Telefon zvedají Otiskovi.</h2>
            <p className="local-lead">
              Víte, odkud vaše pečivo přichází a komu zavolat, když potřebujete větší objednávku.
              PEZO sídlí na Svojsíkově ulici a vyrábí přímo v Ostravě.
            </p>

            <dl className="facts">
              <div>
                <dt>Kde nás najdete</dt>
                <dd>Svojsíkova 1727<br />708 00 Ostrava-Poruba</dd>
              </div>
              <div>
                <dt>Kdy objednat</dt>
                <dd>Den předem<br />nejpozději do 11:30</dd>
              </div>
              <div>
                <dt>Objednávky</dt>
                <dd>
                  <a href="tel:+420596956278">596 956 278</a><br />
                  <a href="tel:+420603216398">603 216 398</a>
                </dd>
              </div>
              <div>
                <dt>Provozovatel</dt>
                <dd>PEZO – PEKÁRNA s.r.o.<br />IČ 41035275</dd>
              </div>
            </dl>

            <a className="button button-secondary" href="tel:+420596956278">
              Zavolat kvůli objednávce
            </a>
          </div>
        </section>
      </main>
    </>
  );
}
