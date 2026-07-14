export default function HomePage() {
  return (
    <main>
      <header className="site-header" aria-label="Hlavní navigace">
        <a className="wordmark" href="#nahoru" aria-label="YOUPLUS Životní pojišťovna – úvod">
          <span className="wordmark-main">YOU<span>+</span></span>
          <span className="wordmark-sub">životní pojišťovna</span>
        </a>

        <nav className="site-nav" aria-label="Navigace na stránce">
          <a href="#pece">Péče o klienty</a>
          <a href="#jistota">Co dál platí</a>
        </nav>

        <a className="header-action" href="mailto:info@youplus.cz">
          Napsat nám
        </a>
      </header>

      <section className="hero" id="nahoru" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="eyebrow">YOUPLUS Česká republika · Brno</p>
          <h1 id="hero-title">
            Co jsme slíbili,
            <span>to dál platí.</span>
          </h1>
          <p className="hero-lead">
            Nové smlouvy už od 13. října 2025 neuzavíráme. Vaše stávající
            životní pojištění ale dál spravujeme, řešíme pojistné události
            a vyplácíme pojistná plnění.
          </p>
          <div className="hero-actions" aria-label="Rychlé možnosti">
            <a className="button button-primary" href="#pece">
              Vyřešit svou smlouvu <span aria-hidden="true">↓</span>
            </a>
            <a className="text-link" href="mailto:info@youplus.cz">
              info@youplus.cz <span aria-hidden="true">↗</span>
            </a>
          </div>
          <p className="hero-note">
            Pro stávající klienty pokračuje péče beze změn.
          </p>
        </div>

        <div className="hero-visual">
          <img
            src="/hero.webp"
            alt="Klient při klidné konzultaci o svém životním pojištění"
          />
          <div className="promise-card" aria-label="Platný závazek YOUPLUS">
            <span className="promise-mark" aria-hidden="true">+</span>
            <p>Vaše smlouva</p>
            <strong>zůstává v péči</strong>
            <span className="promise-status">PLATÍ</span>
          </div>
        </div>
      </section>

      <section className="care-section" id="pece" aria-labelledby="care-title">
        <div className="section-heading">
          <p className="eyebrow">Když potřebujete něco vyřídit</p>
          <h2 id="care-title">Začněte tím, co se právě děje.</h2>
          <p>
            Žádné hledání mezi produkty, které už nenabízíme. Tady najdete
            přesně ty služby, které jako stávající klient potřebujete.
          </p>
        </div>

        <div className="care-layout">
          <div className="care-image">
            <img
              src="/section-1.webp"
              alt="Detail dokumentů a podkladů k životnímu pojištění"
            />
            <span className="image-caption">Klientský servis · Česká republika</span>
          </div>

          <div className="service-list">
            <article className="service-item">
              <span className="service-symbol" aria-hidden="true">↗</span>
              <div>
                <h3>Stala se pojistná událost</h3>
                <p>
                  Pomůžeme vám nahlásit událost, doplnit potřebné podklady
                  a zjistit, v jaké fázi je její řešení.
                </p>
                <a href="mailto:info@youplus.cz?subject=Pojistná%20událost">
                  Nahlásit událost e-mailem
                </a>
              </div>
            </article>

            <article className="service-item">
              <span className="service-symbol" aria-hidden="true">≡</span>
              <div>
                <h3>Potřebuji změnu nebo dokument</h3>
                <p>
                  Vyřídíme změny u uzavřené smlouvy a pomůžeme s formuláři,
                  potvrzením i další smluvní dokumentací.
                </p>
                <a href="mailto:info@youplus.cz?subject=Změna%20smlouvy%20nebo%20dokument">
                  Napsat klientskému servisu
                </a>
              </div>
            </article>

            <article className="service-item">
              <span className="service-symbol" aria-hidden="true">?</span>
              <div>
                <h3>Chci rozumět své smlouvě</h3>
                <p>
                  Vysvětlíme vám další postup srozumitelně a bez zbytečných
                  formulací. Stačí uvést číslo smlouvy a stručně popsat dotaz.
                </p>
                <a href="mailto:info@youplus.cz?subject=Dotaz%20ke%20smlouvě">
                  Zeptat se na smlouvu
                </a>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="assurance-section" id="jistota" aria-labelledby="assurance-title">
        <div className="assurance-copy">
          <p className="eyebrow">Jistota pro stávající klienty</p>
          <h2 id="assurance-title">Život se mění. Naše zodpovědnost ne.</h2>
          <p className="assurance-intro">
            Ukončení sjednávání nových smluv nemění závazky, které vůči vám
            máme. Energii teď soustředíme právě na péči o uzavřená pojištění.
          </p>

          <ul className="commitment-list">
            <li>
              <span aria-hidden="true">+</span>
              <p><strong>Spravujeme uzavřené smlouvy</strong> po celou dobu jejich platnosti.</p>
            </li>
            <li>
              <span aria-hidden="true">+</span>
              <p><strong>Likvidujeme pojistné události</strong> a vyplácíme oprávněná plnění.</p>
            </li>
            <li>
              <span aria-hidden="true">+</span>
              <p><strong>Komunikujeme otevřeně</strong> prostřednictvím stávajících kanálů.</p>
            </li>
          </ul>

          <blockquote>
            „Na čem jsme se dohodli, to platí — bez háčků, výmluv a nepříjemných překvapení.“
          </blockquote>
        </div>

        <div className="assurance-image">
          <img
            src="/section-2.webp"
            alt="Klientka YOUPLUS při kontrole své pojistné smlouvy"
          />
          <div className="image-seal" aria-hidden="true">
            <span>YOU+</span>
            <small>péče pokračuje</small>
          </div>
        </div>
      </section>
    </main>
  );
}
