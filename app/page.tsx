export default function Page() {
  const services = [
    {
      context: "Doma",
      title: "Zámky, dveře a mříže",
      text: "Bezpečnostní zámky, kování, dveře, mříže i trezory pro byty, domy, garáže a chalupy.",
    },
    {
      context: "Na cestě",
      title: "Klíče a autoklíče",
      text: "Výroba běžných i automobilových klíčů a řešení zabezpečení vozidel přímo v Pardubicích.",
    },
    {
      context: "V domě",
      title: "Systémy pro SVJ a firmy",
      text: "Generální klíče, čipové vstupy a pravidelný servis pro bytové domy i průmyslové objekty.",
    },
  ];

  const hours = [
    ["Pondělí", "8.00–16.00"],
    ["Úterý", "8.00–16.00"],
    ["Středa", "8.00–17.30"],
    ["Čtvrtek", "8.00–16.00"],
    ["Pátek", "8.00–16.00"],
  ];

  return (
    <main className="siteShell">
      <section className="hero" aria-labelledby="hero-title">
        <header className="topbar">
          <a className="wordmark" href="#uvod" aria-label="Zámkařství Zemek, úvod">
            <span className="keyMark" aria-hidden="true" />
            <span className="wordmarkText">
              <strong>Zemek</strong>
              <small>zámkařství · Pardubice</small>
            </span>
          </a>

          <nav className="nav" aria-label="Hlavní navigace">
            <a href="#sluzby">Služby</a>
            <a href="#dilna">Prodejna</a>
          </nav>

          <a className="emergencyLink" href="tel:+420603722459">
            <span>Nouzové otevření</span>
            <strong>603 722 459</strong>
          </a>
        </header>

        <div className="heroGrid" id="uvod">
          <div className="heroCopy">
            <p className="eyebrow">Klíčová služba v Pardubicích</p>
            <h1 id="hero-title">
              Klíč je malý.
              <span>Jistota za dveřmi ne.</span>
            </h1>
            <p className="heroLead">
              Vyrobíme klíč, otevřeme zabouchnuté dveře a navrhneme mechanické zabezpečení bytu, domu, firmy i celého SVJ.
            </p>
            <div className="heroActions" aria-label="Rychlý kontakt">
              <a className="button buttonPrimary" href="tel:+420603722459">
                Zavolat technika
              </a>
              <a className="button buttonText" href="mailto:info@zamkarstvizemek.cz">
                Napsat e-mail
                <span aria-hidden="true">↗</span>
              </a>
            </div>
            <p className="shopLine">
              <span aria-hidden="true" />
              Prodejna: Wintrova II 1313, Bílé Předměstí
            </p>
          </div>

          <figure className="heroVisual">
            <img
              src="/hero.webp"
              alt="Zámečník při přesné práci s klíčem v dílně Zámkařství Zemek"
              width="1200"
              height="1000"
              fetchPriority="high"
            />
            <figcaption>
              <span>Nouzové otevírání</span>
              <strong>Pardubice a okolí</strong>
            </figcaption>
          </figure>
        </div>

        <div className="keyCut" aria-hidden="true">
          <i />
          <i />
          <i />
          <i />
          <i />
          <span>Řez klíče / ZEMEK</span>
        </div>
      </section>

      <section className="services" id="sluzby" aria-labelledby="services-title">
        <div className="sectionIntro">
          <p className="eyebrow">Co potřebujete zabezpečit?</p>
          <h2 id="services-title">Od jednoho klíče po celý dům.</h2>
          <p>
            Přineste klíč do prodejny, nebo nám popište objekt. Doporučíme řešení podle způsobu používání, požadované bezpečnosti a podmínek pojišťovny.
          </p>
        </div>

        <div className="serviceLayout">
          <figure className="serviceImage">
            <img
              src="/section-1.webp"
              alt="Detail výroby klíče na přesném zámečnickém stroji"
              width="1000"
              height="1200"
              loading="lazy"
            />
            <figcaption>Přesná výroba v pardubické dílně</figcaption>
          </figure>

          <div className="serviceList">
            {services.map((service) => (
              <article className="serviceItem" key={service.title}>
                <p>{service.context}</p>
                <h3>{service.title}</h3>
                <span>{service.text}</span>
              </article>
            ))}
            <div className="serviceMore">
              <strong>Také řešíme</strong>
              <p>Atypické zámečnické práce, dveřní kování, servis bezpečnostních zařízení a odborné otevírání dveří.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="trust" id="dilna" aria-labelledby="trust-title">
        <div className="trustImageWrap">
          <img
            src="/section-2.webp"
            alt="Zámečnická dílna a pracovní vybavení firmy Zemek v Pardubicích"
            width="1200"
            height="900"
            loading="lazy"
          />
          <div className="imageStamp" aria-hidden="true">
            <span>530 03</span>
            <small>Pardubice</small>
          </div>
        </div>

        <div className="trustContent">
          <p className="eyebrow">Dílna na Bílém Předměstí</p>
          <h2 id="trust-title">Zabezpečení, které obstojí i mimo katalog.</h2>
          <p className="trustLead">
            Máme koncesní oprávnění pro technické služby k ochraně majetku a osob. Používáme certifikované výrobky odpovídající bezpečnostním třídám a požadavkům pojišťoven i Národního bezpečnostního úřadu.
          </p>

          <div className="proofGrid">
            <div className="proof">
              <span aria-hidden="true">✓</span>
              <p><strong>Odborný výběr</strong> podle typu dveří a skutečného rizika</p>
            </div>
            <div className="proof">
              <span aria-hidden="true">✓</span>
              <p><strong>Montáž i servis</strong> bez předávání mezi dodavateli</p>
            </div>
          </div>

          <div className="shopDetails">
            <div className="addressBlock">
              <p className="detailLabel">Kde nás najdete</p>
              <address>
                Wintrova II 1313<br />
                530 03 Pardubice
              </address>
              <a href="tel:+420724083841">Prodejna: 724 083 841</a>
            </div>

            <div className="hoursBlock">
              <p className="detailLabel">Otevírací doba</p>
              <dl>
                {hours.map(([day, time]) => (
                  <div key={day}>
                    <dt>{day}</dt>
                    <dd>{time}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
