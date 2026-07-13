export default function Page() {
  const stages = [
    {
      number: "01",
      title: "Základy a hrubá stavba",
      text: "Betony, zdicí materiály, malty, izolace a vše, co rozhoduje o pevnosti stavby.",
      detail: "Od základové desky po strop",
    },
    {
      number: "02",
      title: "Střecha a klempířina",
      text: "Kompletní komínové sady, krytiny i plechy. Střechu umíme také přesně zaměřit satelitem.",
      detail: "ST SAT zaměření střech",
    },
    {
      number: "03",
      title: "Povrchy a dokončení",
      text: "Omítky, lepidla, nivelační hmoty, barvy, obklady i nářadí pro čisté dokončení práce.",
      detail: "Včetně výrobků ST line",
    },
  ];

  const assurances = [
    {
      value: "76",
      label: "prodejen v síti",
      text: "Široký sortiment a zázemí jednoho z nejvýznamnějších prodejců stavebnin v Česku.",
    },
    {
      value: "ČR",
      label: "doprava po celé zemi",
      text: "Materiál přivezeme z prodejny nebo přímo od výrobce, podle toho, co je pro stavbu výhodnější.",
    },
    {
      value: "ST",
      label: "služby pod jednou střechou",
      text: "Půjčovny nářadí, klempířské dílny, ohýbání plechů i satelitní zaměření střech.",
    },
  ];

  return (
    <>
      <title>STAVMAT Stavebniny Praha | Materiál pro celou stavbu</title>
      <meta
        name="description"
        content="Stavební materiály, cenová nabídka, doprava s vykládkou a odborné služby STAVMAT pro stavby v Praze a okolí."
      />
      <link
        rel="icon"
        href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Crect width='64' height='64' rx='10' fill='%23083b66'/%3E%3Cpath d='M13 18h38v9H36v22H26V27H13z' fill='%23f25b2a'/%3E%3C/svg%3E"
      />

      <a className="skip-link" href="#obsah">
        Přeskočit na obsah
      </a>

      <header className="site-header">
        <a className="wordmark" href="#zacatek" aria-label="STAVMAT Stavebniny, úvod">
          <span className="wordmark-stav">STAV</span>
          <span className="wordmark-mat">MAT</span>
          <small>stavebniny</small>
        </a>

        <nav className="main-nav" aria-label="Hlavní navigace">
          <a href="#sortiment">Sortiment</a>
          <a href="#sluzby">Služby a doprava</a>
        </nav>

        <a className="header-action" href="#nabidka">
          Cenová nabídka
          <span aria-hidden="true">↗</span>
        </a>
      </header>

      <main id="obsah">
        <section className="hero" id="zacatek" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow">Stavebniny pro Prahu a okolí</p>
            <h1 id="hero-title">
              Stavba drží na tom,
              <span> co do ní dáte.</span>
            </h1>
            <p className="hero-intro">
              Vyberte materiál pro celou stavbu na jednom místě. Připravíme cenu,
              poradíme s množstvím a zajistíme dopravu až na pozemek.
            </p>
            <div className="hero-actions" aria-label="Hlavní akce">
              <a className="button button-primary" href="#nabidka">
                Vyžádat cenovou nabídku
                <span aria-hidden="true">→</span>
              </a>
              <a className="button button-secondary" href="#sluzby">
                Jak materiál doručíme
              </a>
            </div>
            <p className="hero-note">
              Kompletní certifikovaný sortiment od zavedených výrobců
            </p>
          </div>

          <div className="hero-visual">
            <img
              src="/hero.webp"
              alt="Stavební materiál připravený k odběru ve stavebninách STAVMAT"
            />
            <div className="material-cut" aria-label="Materiál pro všechny fáze stavby">
              <span className="cut-label">Řez stavbou</span>
              <div className="cut-layer cut-roof"><span>střecha</span></div>
              <div className="cut-layer cut-wall"><span>zdivo</span></div>
              <div className="cut-layer cut-base"><span>základ</span></div>
            </div>
            <div className="location-stamp">
              <span>Výběr pro stavbu</span>
              <strong>PRAHA</strong>
            </div>
          </div>
        </section>

        <section className="range-section" id="sortiment" aria-labelledby="range-title">
          <div className="section-heading">
            <p className="eyebrow">Nákup podle postupu práce</p>
            <h2 id="range-title">Od základové desky až po poslední spáru.</h2>
            <p>
              Nemusíte skládat dodávku z několika míst. Sortiment navazuje na skutečné
              fáze stavby a naši lidé pomohou pohlídat, aby nic podstatného nechybělo.
            </p>
          </div>

          <div className="range-layout">
            <figure className="range-image">
              <img
                src="/section-1.webp"
                alt="Palety zdicích materiálů a stavebních směsí ve skladu STAVMAT"
              />
              <figcaption>Materiál připravený podle etap vaší stavby</figcaption>
            </figure>

            <div className="stage-list">
              {stages.map((stage) => (
                <article className="stage" key={stage.number}>
                  <span className="stage-number" aria-hidden="true">{stage.number}</span>
                  <div>
                    <h3>{stage.title}</h3>
                    <p>{stage.text}</p>
                    <span className="stage-detail">{stage.detail}</span>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="quote-strip" id="nabidka">
            <div>
              <span className="quote-kicker">Pro větší i menší odběr</span>
              <strong>Pošlete seznam materiálu. Připravíme konkrétní cenu.</strong>
            </div>
            <a className="button button-dark" href="#sluzby">
              Co zahrnuje nabídka
              <span aria-hidden="true">↓</span>
            </a>
          </div>
        </section>

        <section className="service-section" id="sluzby" aria-labelledby="service-title">
          <div className="service-image-wrap">
            <img
              src="/section-2.webp"
              alt="Nakládka stavebního materiálu pro dopravu na stavbu v Praze"
            />
            <div className="delivery-card">
              <span>Doprava s vykládkou</span>
              <strong>Až tam, kde materiál potřebujete.</strong>
              <p>Po Praze, okolí i kamkoliv v České republice.</p>
            </div>
          </div>

          <div className="service-content">
            <p className="eyebrow">Zázemí, které pracuje pro vás</p>
            <h2 id="service-title">Materiál nestačí. Musí dorazit správně a včas.</h2>
            <p className="service-lead">
              Nabídku sestavíme podle rozsahu stavby a množství. Pak zajistíme dopravu
              včetně vykládky a operativně reagujeme, když se plán na stavbě změní.
            </p>

            <div className="assurance-grid">
              {assurances.map((item) => (
                <article className="assurance" key={item.label}>
                  <div className="assurance-mark">
                    <strong>{item.value}</strong>
                    <span>{item.label}</span>
                  </div>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>

            <div className="trust-line">
              <span className="trust-badge">Czech Superbrands 2026</span>
              <p>
                Pro řemeslníky, stavební firmy i každého, kdo staví svépomocí.
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
