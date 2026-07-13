export default function Page() {
  const services = [
    {
      title: "Kancelářský nábytek",
      text: "Stoly, úložné sestavy a elektricky stavitelné podnože od výrobců MIAS, ALFA, SOLID a VASA."
    },
    {
      title: "Židle a servis",
      text: "Pracovní, dětské i konferenční židle si vyzkoušíte osobně. Pomůžeme s nastavením i pozdějším servisem."
    },
    {
      title: "Školy, jídelny a šatny",
      text: "Odolné vybavení pro každodenní provoz, navržené podle věku uživatelů, dispozice a způsobu údržby."
    },
    {
      title: "Návrh a realizace",
      text: "Prostor zaměříme, sestavu navrhneme, dovezeme a smontujeme. Jedno zadání, jeden odpovědný tým."
    }
  ];

  return (
    <main className="imego-page">
      <section className="hero" aria-labelledby="hero-title">
        <header className="site-head">
          <a className="wordmark" href="#top" aria-label="IMEGO, úvodní stránka">
            <span className="wordmark-main">IMEGO</span>
            <span className="wordmark-sub">prostor pro práci</span>
          </a>

          <nav className="main-nav" aria-label="Hlavní navigace">
            <a href="#nabidka">Co vybavíme</a>
            <a href="#jak-pracujeme">Jak pracujeme</a>
          </nav>

          <a className="head-phone" href="tel:+420777300715">
            <span>Prodejna</span>
            +420 777 300 715
          </a>
        </header>

        <div className="hero-grid" id="top">
          <div className="hero-copy">
            <p className="eyebrow">Kancelářský nábytek · České Budějovice</p>
            <h1 id="hero-title">
              Kancelář,
              <span>která vám sedí.</span>
              <em>Doslova.</em>
            </h1>
            <p className="hero-lead">
              Od první vyzkoušené židle po kompletní realizaci kanceláře.
              Navrhneme sestavu, dodáme nábytek a postaráme se o montáž i servis.
            </p>
            <div className="hero-actions">
              <a className="primary-action" href="tel:+420777300715">
                Domluvit návštěvu
                <span aria-hidden="true">↗</span>
              </a>
              <a className="text-action" href="#nabidka">Prohlédnout nabídku</a>
            </div>
            <p className="parking-note">
              <span aria-hidden="true">P</span>
              U prodejny pohodlně zaparkujete.
            </p>
          </div>

          <div className="hero-visual">
            <div className="image-frame hero-frame">
              <img
                src="/hero.webp"
                alt="Moderně vybavená kancelář z nabídky IMEGO"
                width="1600"
                height="1200"
                fetchPriority="high"
              />
            </div>
            <div className="dimension dimension-horizontal" aria-hidden="true">
              <span>1600 mm</span>
            </div>
            <div className="material-tag">
              <span>01 / pracovní plocha</span>
              <strong>Návrh podle prostoru</strong>
            </div>
          </div>
        </div>

        <aside className="closure-notice" aria-label="Upozornění na dovolenou">
          <strong>Letní provoz</strong>
          <p>20.–31. 7. 2026 bude prodejna uzavřena.</p>
          <span>V nutných případech: 777 300 712 nebo 777 300 717</span>
        </aside>
      </section>

      <section className="offer-section" id="nabidka" aria-labelledby="offer-title">
        <div className="section-heading">
          <p className="eyebrow">Vybavení pro skutečný provoz</p>
          <h2 id="offer-title">Od židle po celou místnost.</h2>
          <p>
            Neprodáváme anonymní krabice z katalogu. Jednotlivé prvky skládáme
            tak, aby odpovídaly prostoru, počtu lidí i tomu, co během dne opravdu děláte.
          </p>
        </div>

        <div className="offer-layout">
          <div className="offer-image-wrap">
            <img
              src="/section-1.webp"
              alt="Detail kancelářského nábytku a pracovního místa"
              width="1200"
              height="1500"
              loading="lazy"
            />
            <p className="image-caption">Materiál, ergonomie a kabeláž řešíme jako jeden celek.</p>
          </div>

          <div className="service-list">
            {services.map((service) => (
              <article className="service-item" key={service.title}>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
                <span aria-hidden="true">→</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="process-section" id="jak-pracujeme" aria-labelledby="process-title">
        <div className="process-image">
          <img
            src="/section-2.webp"
            alt="Hotová realizace pracovního interiéru od IMEGO"
            width="1600"
            height="1100"
            loading="lazy"
          />
          <div className="makers">
            <span>Vybíráme z ověřených řad</span>
            <strong>MIAS · ALFA · SOLID · VASA</strong>
          </div>
        </div>

        <div className="process-content">
          <p className="eyebrow">Realizace bez dohadování</p>
          <h2 id="process-title">Víme, co musí sedět ještě před montáží.</h2>

          <ol className="process-steps">
            <li>
              <span>01</span>
              <div>
                <h3>Zaměříme prostor</h3>
                <p>Prověříme rozměry, průchody, zásuvky i pohyb lidí v místnosti.</p>
              </div>
            </li>
            <li>
              <span>02</span>
              <div>
                <h3>Navrhneme sestavu</h3>
                <p>Vybereme nábytek, povrchy a židle podle provozu i rozpočtu.</p>
              </div>
            </li>
            <li>
              <span>03</span>
              <div>
                <h3>Dovezeme a smontujeme</h3>
                <p>Realizaci předáme připravenou k používání a zůstáváme k dispozici pro servis.</p>
              </div>
            </li>
          </ol>

          <div className="shop-details">
            <div>
              <span>Otevírací doba</span>
              <strong>Po–Pá 9:00–12:00<br />13:00–17:00</strong>
              <small>So–Ne zavřeno</small>
            </div>
            <div>
              <span>Kancelář a prodejna</span>
              <a href="tel:+420777300715">777 300 715</a>
              <a href="mailto:office@imego.cz">office@imego.cz</a>
              <small>České Budějovice</small>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
