export default function Page() {
  const services = [
    {
      title: "Rodinné domy",
      text: "Navrhneme výkon podle vaší spotřeby, střechy a plánů — včetně baterie, wallboxu nebo zálohy při výpadku.",
      tag: "Domácnost",
    },
    {
      title: "Firmy a provozy",
      text: "Výrobu sladíme s denním odběrem firmy. Dostanete propočet úspor, technický návrh i řešení přetoků.",
      tag: "Podnikání",
    },
    {
      title: "Servis elektráren",
      text: "Zkontrolujeme výrobu, zapojení i nastavení střídače. Pomůžeme také s elektrárnou, kterou instaloval někdo jiný.",
      tag: "Péče po instalaci",
    },
  ];

  return (
    <main>
      <section className="hero" aria-labelledby="hero-title">
        <header className="site-header">
          <a className="wordmark" href="#nahoru" aria-label="Fotovolt system — úvod">
            <span className="wordmark-sun" aria-hidden="true" />
            <span>fotovolt</span>
            <small>system · Hradec Králové</small>
          </a>

          <nav className="nav" aria-label="Hlavní navigace">
            <a href="#reseni">Řešení</a>
            <a href="#zkusenosti">Zkušenosti</a>
            <a className="nav-phone" href="tel:+420720613265">720 613 265</a>
          </nav>
        </header>

        <div className="hero-grid" id="nahoru">
          <div className="hero-copy">
            <p className="eyebrow">Fotovoltaika z Hradce Králové</p>
            <h1 id="hero-title">
              Střecha,
              <span>která pracuje</span>
              pro vás.
            </h1>
            <p className="hero-lead">
              Navrhneme a postavíme elektrárnu, která odpovídá vaší skutečné spotřebě. Od první prohlídky po připojení a servis řešíte vše s jedním týmem.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="mailto:koubskymichal@fotovoltsystem.cz?subject=Poptávka%20fotovoltaické%20elektrárny">
                Chci návrh elektrárny
                <span aria-hidden="true">↗</span>
              </a>
              <a className="text-link" href="tel:+420720613265">Zavolat technikovi</a>
            </div>
            <dl className="hero-facts" aria-label="Základní informace">
              <div>
                <dt>16 let</dt>
                <dd>zkušeností s FVE</dd>
              </div>
              <div>
                <dt>Kompletně</dt>
                <dd>návrh, dotace i připojení</dd>
              </div>
              <div>
                <dt>Lokálně</dt>
                <dd>Hradec Králové a okolí</dd>
              </div>
            </dl>
          </div>

          <div className="hero-visual">
            <div className="panel-frame">
              <img
                src="/hero.webp"
                alt="Fotovoltaické panely instalované na střeše rodinného domu"
                className="hero-image"
              />
              <div className="energy-path" aria-hidden="true">
                <span />
              </div>
              <div className="image-note">
                <strong>Od slunce</strong>
                <span>přes střechu rovnou do zásuvky</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="solutions" id="reseni" aria-labelledby="solutions-title">
        <div className="section-heading">
          <p className="eyebrow">Elektrárna podle odběru, ne podle balíčku</p>
          <h2 id="solutions-title">Co má vaše fotovoltaika umět?</h2>
          <p>
            Nejdřív se díváme na průběh spotřeby, stav střechy a rozvaděče. Teprve potom vybíráme panely, střídač a kapacitu baterie.
          </p>
        </div>

        <div className="solutions-layout">
          <div className="solutions-image-wrap">
            <img
              src="/section-1.webp"
              alt="Technik při odborné montáži fotovoltaických panelů"
              className="section-image"
              loading="lazy"
            />
            <p className="caption">Montáž provádí vlastní sehraný tým.</p>
          </div>

          <div className="service-list">
            {services.map((service) => (
              <article className="service" key={service.title}>
                <p className="service-tag">{service.tag}</p>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="process" aria-label="Průběh realizace">
          <p className="process-title">Jedna zakázka, jeden navazující postup</p>
          <ol>
            <li><span>Prohlídka a data</span></li>
            <li><span>Technický návrh</span></li>
            <li><span>Montáž a revize</span></li>
            <li><span>Připojení a servis</span></li>
          </ol>
        </div>
      </section>

      <section className="trust" id="zkusenosti" aria-labelledby="trust-title">
        <div className="trust-image-wrap">
          <img
            src="/section-2.webp"
            alt="Dokončená fotovoltaická elektrárna na střeše domu v krajině"
            className="section-image"
            loading="lazy"
          />
          <div className="trust-stamp">
            <span>Kontrola</span>
            <strong>i po spuštění</strong>
          </div>
        </div>

        <div className="trust-content">
          <p className="eyebrow">Zkušenost nekončí předáním</p>
          <h2 id="trust-title">Když se na něco zeptáte, mluvíte s lidmi, kteří elektrárnu znají.</h2>
          <p className="trust-intro">
            Jsme rodinná firma z Hradce Králové. Hlídáme technický návrh, čistotu montáže i administrativu vůči distributorovi. A když je potřeba něco doladit, zvedneme telefon i po instalaci.
          </p>

          <blockquote>
            <p>„Naprosto férové jednání a trpělivost s mými dotazy. Zařídili připojení, dotaci i nový rozvaděč. Nemusel jsem se vůbec o nic starat.“</p>
            <footer>
              <strong>Michal R.</strong>
              <span>Hybridní FVE 14,96 kWp · Horní Vestec</span>
            </footer>
          </blockquote>

          <div className="mini-reviews">
            <figure>
              <blockquote>„Rodinná firma, kde platí to, co se domluví.“</blockquote>
              <figcaption>Milan V. · FVE 9,45 kWp</figcaption>
            </figure>
            <figure>
              <blockquote>„Na jedničku od domluvy po předání díla.“</blockquote>
              <figcaption>Petr H. · FVE 10 kWp</figcaption>
            </figure>
          </div>
        </div>
      </section>
    </main>
  );
}
