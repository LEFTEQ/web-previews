export default function Page() {
  const menuGroups = [
    {
      title: "Přes poledne",
      text: "Polévky, několik hlavních jídel, salát i něco sladkého. Denní nabídku vaříme každý všední den.",
      note: "od 10:30",
    },
    {
      title: "Když je čas posedět",
      text: "Stálý jídelní lístek s poctivými hospodskými jídly, menšími chuťovkami a sezónními specialitami.",
      note: "celý den",
    },
    {
      title: "Co je na čepu",
      text: "Osvědčená piva doplňujeme netradičními speciály. Aktuální výběr najdete vždy přímo na výčepu.",
      note: "dle naražení",
    },
  ];

  return (
    <main className="hostinec-page">
      <section className="hero" aria-labelledby="hero-title">
        <header className="site-header">
          <a className="wordmark" href="#nahoru" aria-label="Hostinec U Tesaře – začátek stránky">
            <span className="wordmark-mark" aria-hidden="true">UT</span>
            <span>
              <strong>U Tesaře</strong>
              <small>hostinec · Brno–Štýřice</small>
            </span>
          </a>

          <nav className="main-nav" aria-label="Hlavní navigace">
            <a href="#nabidka">Jídlo a pivo</a>
            <a href="#navsteva">Kde posedět</a>
            <a className="nav-call" href="tel:+420777197542">Rezervovat stůl</a>
          </nav>
        </header>

        <div className="hero-layout" id="nahoru">
          <div className="hero-copy">
            <p className="eyebrow">Hostinec ve Štýřicích</p>
            <h1 id="hero-title">
              <span>Poctivé jídlo.</span>
              <span className="title-joint"><i aria-hidden="true">U</i> Dobře ošetřené pivo.</span>
            </h1>
            <p className="hero-intro">
              Stavte se na oběd, na jedno po práci nebo na dlouhý večer s přáteli. U Tesaře vás čeká česká hospoda, velká zahrádka a výčep, který se o pivo stará tak, jak má.
            </p>
            <div className="hero-actions" aria-label="Rychlé kontakty">
              <a className="button button-primary" href="tel:+420777197542">Zavolat a rezervovat</a>
              <a
                className="button button-secondary"
                href="https://www.google.com/maps/search/?api=1&query=Grmelova+62%2F9%2C+Brno"
                target="_blank"
                rel="noreferrer"
              >
                Navigovat na Grmelovu
              </a>
            </div>
            <p className="hero-hours"><strong>Dnes začínáme v 10:30</strong><span>o víkendu od 11:00</span></p>
          </div>

          <div className="hero-visual">
            <div className="joinery-frame">
              <img
                src="/hero.webp"
                alt="Interiér Hostince U Tesaře v Brně se stoly připravenými pro hosty"
                width="1440"
                height="1080"
                fetchPriority="high"
              />
            </div>
            <div className="photo-label">
              <span>Grmelova 62/9</span>
              <strong>Brno–Štýřice</strong>
            </div>
          </div>
        </div>
      </section>

      <section className="menu-section" id="nabidka" aria-labelledby="menu-title">
        <div className="section-heading">
          <p className="eyebrow">Z kuchyně a výčepu</p>
          <h2 id="menu-title">Na oběd i na večerní žízeň</h2>
          <p>Nemusíte studovat dlouhý seznam. Vyberete si z čerstvé denní nabídky, stálého lístku a piva, které je právě v nejlepší kondici.</p>
        </div>

        <div className="menu-layout">
          <div className="menu-image-wrap">
            <img
              src="/section-1.webp"
              alt="Čerstvě připravené hospodské jídlo servírované v Hostinci U Tesaře"
              width="1200"
              height="900"
              loading="lazy"
            />
            <span className="image-caption">Vaříme pro vás každý den</span>
          </div>

          <div className="menu-list">
            {menuGroups.map((item) => (
              <article className="menu-item" key={item.title}>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
                <span>{item.note}</span>
              </article>
            ))}
            <a className="text-link" href="tel:+420777197542">Ověřit dnešní nabídku <span aria-hidden="true">→</span></a>
          </div>
        </div>
      </section>

      <section className="visit-section" id="navsteva" aria-labelledby="visit-title">
        <div className="visit-image-wrap">
          <img
            src="/section-2.webp"
            alt="Prostorná zahrádka Hostince U Tesaře ve Štýřicích"
            width="1400"
            height="1050"
            loading="lazy"
          />
          <div className="garden-stamp" aria-label="Velká zahrádka se samostatným výčepem">
            <strong>Zahrádka</strong>
            <span>v sezóně vlastní výčep</span>
          </div>
        </div>

        <div className="visit-copy">
          <p className="eyebrow">Místo pro vaše posezení</p>
          <h2 id="visit-title">Ve výčepu útulno. Venku místa pro celou partu.</h2>
          <p className="visit-lead">
            Uvnitř se pohodlně zastavíte na rychlý oběd i večerní pivo. V teplých měsících otevíráme velkou zahrádku se stany a vlastním výčepem.
          </p>

          <dl className="facts">
            <div>
              <dt>Adresa</dt>
              <dd>Grmelova 62/9<br />639 00 Brno–Štýřice</dd>
            </div>
            <div>
              <dt>Otevíráme</dt>
              <dd>Po–Pá od 10:30<br />So–Ne od 11:00</dd>
            </div>
            <div>
              <dt>Rezervace</dt>
              <dd><a href="tel:+420777197542">+420 777 197 542</a></dd>
            </div>
          </dl>

          <div className="visit-actions">
            <a className="button button-dark" href="tel:+420777197542">Zavolat do hostince</a>
            <a
              className="text-link dark-link"
              href="https://www.google.com/maps/search/?api=1&query=Grmelova+62%2F9%2C+Brno"
              target="_blank"
              rel="noreferrer"
            >
              Otevřít trasu <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
