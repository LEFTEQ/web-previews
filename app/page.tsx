export default function Page() {
  const collections = [
    {
      material: "Ag 925",
      title: "Náušnice",
      detail: "Drobné pecky, kruhy i dětské náušnice",
      href: "#nausnice",
    },
    {
      material: "Ti · C",
      title: "Snubní prsteny",
      detail: "Titan, karbon a odolná nerezová ocel",
      href: "#snubni-prsteny",
    },
    {
      material: "Ti 6Al-4V",
      title: "Piercing",
      detail: "Lehký titan pro každodenní nošení",
      href: "#piercing",
    },
    {
      material: "Laser · diamant",
      title: "Rytiny",
      detail: "Jména, data i vlastní motivy z Hradce",
      href: "#rytiny",
    },
  ];

  return (
    <main>
      <section className="hero" aria-labelledby="hero-title">
        <header className="site-header">
          <a className="wordmark" href="#top" aria-label="Šperky4U, úvodní stránka">
            <span>ŠPERKY</span>
            <span className="wordmark-four">4</span>
            <span>U</span>
          </a>

          <nav className="main-nav" aria-label="Hlavní navigace">
            <a href="#nabidka">Vybrat šperk</a>
            <a href="#dilna">Rytí v Hradci</a>
          </nav>

          <a className="header-phone" href="tel:+420773542416">
            <span>Zavolat</span>
            <strong>773 542 416</strong>
          </a>
        </header>

        <div className="hero-grid" id="top">
          <div className="hero-copy">
            <p className="eyebrow">Klenotnictví · Hradec Králové</p>
            <h1 id="hero-title">
              Najděte šperk,
              <span>který zůstane.</span>
            </h1>
            <p className="hero-intro">
              Od prvních dětských náušnic po snubní prsteny. Vybírejte podle materiálu,
              příležitosti i toho, jak chcete šperk nosit.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#nabidka">
                Prohlédnout nabídku
                <span aria-hidden="true">↘</span>
              </a>
              <a className="text-link" href="#dilna">
                Nechat vyrýt vlastní motiv
              </a>
            </div>
            <ul className="material-key" aria-label="Hlavní materiály v nabídce">
              <li><span>Ag</span> stříbro</li>
              <li><span>Ti</span> titan</li>
              <li><span>Fe</span> ocel</li>
              <li><span>C</span> karbon</li>
            </ul>
          </div>

          <div className="hero-visual" aria-label="Detail šperku z nabídky Šperky4U">
            <div className="brand-four" aria-hidden="true">4</div>
            <div className="hero-image-wrap">
              <img
                src="/hero.webp"
                alt="Detail precizně zpracovaného šperku v modrostříbrném světle"
                width="1200"
                height="1500"
                fetchPriority="high"
              />
            </div>
            <div className="jewel-note jewel-note-top">
              <span>Výběr podle vás</span>
              <strong>29 000+ šperků</strong>
            </div>
            <div className="jewel-note jewel-note-bottom">
              <span>Osobní detail</span>
              <strong>Diamantové i laserové rytí</strong>
            </div>
          </div>
        </div>
      </section>

      <section className="collections" id="nabidka" aria-labelledby="collections-title">
        <div className="section-heading">
          <p className="eyebrow">Vyberte podle okamžiku</p>
          <h2 id="collections-title">Co hledáte právě teď?</h2>
          <p>
            Žádná záplava štítků. Začněte typem šperku a materiálem, který vám sedí.
          </p>
        </div>

        <div className="collections-layout">
          <div className="collection-image">
            <img
              src="/section-1.webp"
              alt="Výběr stříbrných náušnic a prstenů připravených k odeslání"
              width="1200"
              height="900"
              loading="lazy"
            />
            <p><span>Skladem</span> expedujeme bez zbytečného čekání</p>
          </div>

          <div className="collection-list">
            {collections.map((item) => (
              <a className="collection-row" href={item.href} key={item.title}>
                <span className="material-code">{item.material}</span>
                <span className="collection-name">
                  <strong>{item.title}</strong>
                  <small>{item.detail}</small>
                </span>
                <span className="row-arrow" aria-hidden="true">↗</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="craft" id="dilna" aria-labelledby="craft-title">
        <div className="craft-visual">
          <img
            src="/section-2.webp"
            alt="Detail gravírování osobního nápisu do šperku v hradecké dílně"
            width="1200"
            height="1450"
            loading="lazy"
          />
          <div className="engraving-line" aria-hidden="true">
            <span>Hradec Králové</span>
            <i />
            <span>vlastní výroba rytin</span>
          </div>
        </div>

        <div className="craft-copy">
          <p className="eyebrow">Rytina dává šperku vaše jméno</p>
          <h2 id="craft-title">Vzpomínku vyryjeme. Nejen zabalíme.</h2>
          <p className="craft-lead">
            Datum svatby, iniciály, krátký vzkaz nebo vlastní motiv. V Hradci Králové
            zpracujeme diamantové i laserové gravírování a před výrobou s vámi ověříme zadání.
          </p>

          <dl className="trust-facts">
            <div>
              <dt>4,9 z 5</dt>
              <dd>ověřené hodnocení od 667 zákazníků</dd>
            </div>
            <div>
              <dt>Od 60 Kč</dt>
              <dd>doprava po celé České republice</dd>
            </div>
            <div>
              <dt>Po–Pá 8–16</dt>
              <dd>na telefonu odpovídá skutečný člověk</dd>
            </div>
          </dl>

          <figure className="review">
            <blockquote>„Rychlost a spolehlivost.“</blockquote>
            <figcaption>
              <span aria-label="Pět hvězdiček">★★★★★</span>
              Lucie L., ověřená zákaznice
            </figcaption>
          </figure>

          <div className="contact-line">
            <a href="tel:+420773542416">Zavolat 773 542 416</a>
            <a href="mailto:info@sperky4u.eu">Napsat e-mail</a>
          </div>
        </div>
      </section>
    </main>
  );
}
