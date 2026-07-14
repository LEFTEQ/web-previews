export default function Page() {
  const services = [
    {
      title: "Individuální rehabilitace",
      text: "Terapeut se věnuje vašemu konkrétnímu omezení, průběžně sleduje reakci těla a upravuje další postup."
    },
    {
      title: "Léčebné cvičení",
      text: "Naučíte se pohyby, které zvládnete správně provádět také doma — srozumitelně a bez zbytečného přetěžování."
    },
    {
      title: "Fyzikální terapie",
      text: "Podle doporučení lékaře doplňujeme aktivní rehabilitaci vhodnou procedurou a vysvětlíme vám její průběh."
    }
  ];

  return (
    <main>
      <section className="hero" aria-labelledby="hero-title">
        <header className="site-header">
          <a className="wordmark" href="#zacatek" aria-label="Léčebná rehabilitace Zdraví – úvod">
            <span className="wordmark-mark" aria-hidden="true"><i /><i /><i /></span>
            <span>
              <strong>ZDRAVÍ</strong>
              <small>léčebná rehabilitace · Olomouc</small>
            </span>
          </a>

          <nav aria-label="Hlavní navigace">
            <a href="#pece">Jak pomáháme</a>
            <a href="#pracoviste">Pracoviště</a>
          </nav>

          <a className="header-call" href="tel:+420585228812">Zavolat</a>
        </header>

        <div className="hero-layout" id="zacatek">
          <div className="hero-copy">
            <p className="eyebrow">Rehabilitační péče v Olomouci</p>
            <h1 id="hero-title">Pohyb, ke kterému se můžete vrátit.</h1>
            <p className="hero-lead">
              Pomáháme vám znovu získat jistotu v pohybu po úrazu, operaci i při dlouhodobých obtížích. V klidném tempu a s plánem, kterému rozumíte.
            </p>
            <div className="hero-actions">
              <a className="primary-button" href="tel:+420585228812">Objednat se telefonicky</a>
              <span>Po–Pá · pracoviště Vídeňská a Jánského</span>
            </div>
          </div>

          <div className="hero-visual">
            <img
              src="/hero.webp"
              alt="Fyzioterapeutka při individuální rehabilitaci pacienta"
            />
            <div className="motion-path" aria-hidden="true">
              <span /><span /><span /><span />
            </div>
            <p className="image-note"><strong>Každý pohyb má svůj rozsah.</strong> Společně hledáme ten váš.</p>
          </div>
        </div>
      </section>

      <section className="care-section" id="pece" aria-labelledby="care-title">
        <div className="section-heading">
          <p className="eyebrow">Co vás u nás čeká</p>
          <h2 id="care-title">Nejen procedura. Srozumitelná cesta k lepšímu pohybu.</h2>
          <p>Začínáme tím, co vás omezuje v běžném dni. Podle doporučení lékaře a aktuálního stavu volíme péči, která dává smysl právě vám.</p>
        </div>

        <div className="care-grid">
          <div className="care-image">
            <img
              src="/section-1.webp"
              alt="Detail vedeného rehabilitačního cvičení ruky"
              loading="lazy"
            />
            <span>Vedený pohyb · klidné tempo · jasné instrukce</span>
          </div>

          <div className="service-list">
            {services.map((service) => (
              <article className="service-card" key={service.title}>
                <span className="service-joint" aria-hidden="true" />
                <div>
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="places-section" id="pracoviste" aria-labelledby="places-title">
        <div className="places-image">
          <img
            src="/section-2.webp"
            alt="Světlé a klidné prostředí rehabilitačního pracoviště v Olomouci"
            loading="lazy"
          />
          <div className="freshness"><span aria-hidden="true" /> Informace ověřeny 07/2026</div>
        </div>

        <div className="places-content">
          <p className="eyebrow">Jsme vám blízko</p>
          <h2 id="places-title">Dvě pracoviště v Olomouci. Jedna navazující péče.</h2>
          <p className="places-intro">Při objednání vám potvrdíme správné pracoviště i čas návštěvy. Pokud nemůžete přijít, dejte nám prosím vědět co nejdříve.</p>

          <div className="location-list">
            <article>
              <div>
                <h3>Vídeňská</h3>
                <p>Vídeňská 18, 779 00 Olomouc</p>
                <small>Vedení zařízení: Yvona Onderková</small>
              </div>
              <div className="location-links">
                <a href="tel:+420585228812">585 228 812</a>
                <a href="tel:+420731444890">731 444 890</a>
              </div>
            </article>

            <article>
              <div>
                <h3>Jánského</h3>
                <p>Jánského 24, Olomouc</p>
                <small>Omluvení domluvené návštěvy přijímá recepce.</small>
              </div>
              <div className="location-links">
                <a href="tel:+420585427062">585 427 062</a>
                <a href="mailto:recepce@rehabilitace-olomouc.cz">Napsat recepci</a>
              </div>
            </article>
          </div>

          <p className="company-note">Léčebná rehabilitace ZDRAVÍ s.r.o. · IČ 29388015</p>
        </div>
      </section>
    </main>
  );
}
