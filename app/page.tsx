export default function Page() {
  const services = [
    {
      label: "Přesné měření",
      title: "Měření zraku",
      text: "Na vyšetření si necháváme dost času. Změříme vidění na dálku i na blízko, probereme vaše návyky a srozumitelně vysvětlíme výsledek."
    },
    {
      label: "Brýle pro každý den",
      title: "Obruby a brýlové čočky",
      text: "Vybereme tvar, který sedí obličeji, a čočky podle toho, zda řídíte, pracujete u monitoru, čtete nebo potřebujete jedny brýle na více vzdáleností."
    },
    {
      label: "Bezpečné používání",
      title: "Kontaktní čočky",
      text: "Najdeme vhodný typ čoček, naučíme vás nasazování i péči a zkontrolujeme, že jsou pohodlné také po delším nošení."
    },
    {
      label: "Souhra očí a mozku",
      title: "Zrakový trénink",
      text: "Specializovaným cvičením pomáháme zlepšit koordinaci obou očí. Postup sestavíme podle konkrétního měření a vašich obtíží."
    }
  ];

  return (
    <main className="site-shell">
      <section className="hero" aria-labelledby="hero-title">
        <header className="topbar">
          <a className="wordmark" href="#zacatek" aria-label="Laro optik – úvod">
            <span className="wordmark-lens" aria-hidden="true" />
            <span>LARO</span>
            <small>optik · Praha</small>
          </a>

          <nav className="nav" aria-label="Hlavní navigace">
            <a href="#pece">Co pro vás uděláme</a>
            <a href="#duvera">Proč Laro</a>
            <a className="nav-phone" href="tel:+420733716494">733 716 494</a>
          </nav>
        </header>

        <div className="hero-grid" id="zacatek">
          <div className="hero-copy">
            <p className="eyebrow">Oční optika v Praze</p>
            <h1 id="hero-title">
              Nejdřív vás
              <span className="focus-word"> uvidíme.</span>
              <br />Pak změříme zrak.
            </h1>
            <p className="hero-lead">
              Brýle nezačínají u regálu s obrubami. Začínají rozhovorem, pečlivým měřením a pochopením toho, co potřebujete vidět každý den.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="tel:+420733716494">
                Objednat měření
                <span aria-hidden="true">↗</span>
              </a>
              <a className="text-link" href="#pece">Podívat se, co vás čeká</a>
            </div>
            <p className="hero-note">
              <span aria-hidden="true">●</span> Praha · osobní péče bez spěchu
            </p>
          </div>

          <div className="hero-visual">
            <img
              src="/hero.webp"
              alt="Optometrista při přesném měření zraku zákazníka v Laro optik"
            />
            <div className="lens-interface" aria-hidden="true">
              <span className="lens-ring lens-ring-one" />
              <span className="lens-ring lens-ring-two" />
              <span className="lens-axis lens-axis-x" />
              <span className="lens-axis lens-axis-y" />
              <span className="lens-center" />
            </div>
            <div className="visual-caption">
              <span>Optometrie</span>
              <strong>Zaostřeno na váš běžný den</strong>
            </div>
          </div>
        </div>
      </section>

      <section className="care-section" id="pece" aria-labelledby="care-title">
        <div className="section-heading">
          <p className="eyebrow">Péče pod jednou střechou</p>
          <h2 id="care-title">Od prvního měření po brýle, které opravdu nosíte.</h2>
          <p>
            Neprodáváme univerzální řešení. Doporučení stavíme na výsledku měření, vašem obličeji a situacích, ve kterých se na zrak spoléháte.
          </p>
        </div>

        <div className="care-layout">
          <figure className="care-image">
            <img
              src="/section-1.webp"
              alt="Výběr a odborné přizpůsobení brýlové obruby v pražské optice"
              loading="lazy"
            />
            <figcaption>
              <span>Výběr obruby</span>
              Tvar nestačí. Brýle musí správně sedět na nose, za ušima i před očima.
            </figcaption>
          </figure>

          <div className="service-list">
            {services.map((service) => (
              <article className="service" key={service.title}>
                <p>{service.label}</p>
                <h3>{service.title}</h3>
                <div className="service-detail">
                  <span className="service-lens" aria-hidden="true" />
                  <p>{service.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="trust-section" id="duvera" aria-labelledby="trust-title">
        <div className="trust-image-wrap">
          <img
            src="/section-2.webp"
            alt="Detail profesionální práce optika s brýlemi v Laro optik Praha"
            loading="lazy"
          />
          <div className="guarantee-mark" aria-label="Laro garance">
            <span>LARO</span>
            <strong>garance</strong>
            <small>péče i po výdeji</small>
          </div>
        </div>

        <div className="trust-copy">
          <p className="eyebrow">Důvěra nekončí převzetím brýlí</p>
          <h2 id="trust-title">Když se něco přihodí, máte se kam vrátit.</h2>
          <p className="trust-intro">
            Brýle se musí osvědčit mimo optiku: při noční jízdě, nad knihou i po celém dni u obrazovky. Proto vám vše vysvětlíme, brýle přesně upravíme a pomůžeme také s následným servisem.
          </p>

          <ul className="trust-points">
            <li>
              <strong>Čas na skutečné měření</strong>
              <span>Žádné rychlé rozhodnutí mezi dveřmi. Ptáme se, kontrolujeme a výsledek vám ukážeme.</span>
            </li>
            <li>
              <strong>Trpělivý výběr bez nátlaku</strong>
              <span>Zkoušíte tak dlouho, dokud obruba nesedí vzhledem, pohodlím i rozpočtem.</span>
            </li>
            <li>
              <strong>Servis, který zná vaše brýle</strong>
              <span>Seřízení, kontrola a pomoc při nečekané nehodě patří k péči, ne k obtěžování.</span>
            </li>
          </ul>

          <blockquote>
            <p>
              „Z obvykle stresujícího výběru nových brýlí se stal nakonec skvělý zážitek.“
            </p>
            <footer>Jiří Vild · zákazník pobočky na Starostrašnické</footer>
          </blockquote>

          <div className="contact-strip" aria-label="Kontakt na Laro optik">
            <a href="tel:+420733716494">
              <span>Zavolat</span>
              <strong>+420 733 716 494</strong>
            </a>
            <a href="mailto:lidicka@larooptik.cz">
              <span>Napsat</span>
              <strong>lidicka@larooptik.cz</strong>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
