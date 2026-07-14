export default function Page() {
  return (
    <main className="fc-site">
      <section className="fc-hero" id="uvod" aria-labelledby="fc-hero-title">
        <nav className="fc-nav" aria-label="Hlavní navigace">
          <a className="fc-wordmark" href="#uvod" aria-label="Fiduciam consilio – úvod">
            fiduciam
            <span>consilio</span>
          </a>

          <div className="fc-nav-links">
            <a href="#pojistny-plan">Pojistný plán</a>
            <a href="#spoluprace">Jak pracujeme</a>
          </div>

          <a className="fc-nav-call" href="tel:+420606210012">
            Zavolat
          </a>
        </nav>

        <div className="fc-hero-grid">
          <div className="fc-hero-copy">
            <p className="fc-kicker">
              <span>Brno · AZ Tower</span>
              <span>Pojišťovací poradce</span>
            </p>

            <h1 id="fc-hero-title">
              <span>Když se něco</span>
              <span>stane, plán</span>
              <em>už běží.</em>
            </h1>

            <p className="fc-intro">
              Chráníme příjem, rodinu i majetek jako jeden celek. Nezačínáme pojistkou,
              ale tím, co by vám při nečekané události skutečně chybělo.
            </p>

            <div className="fc-actions">
              <a className="fc-button fc-button-primary" href="tel:+420606210012">
                Zavolat Samuelovi
                <span aria-hidden="true">↗</span>
              </a>
              <a className="fc-button fc-button-quiet" href="mailto:samuel.pseja@fiduciam.cz">
                Napsat e-mail
              </a>
            </div>

            <p className="fc-fee-note">
              <span aria-hidden="true">✓</span>
              Platíte nás přímo vy, ne finanční instituce.
            </p>
          </div>

          <figure className="fc-risk-map">
            <div className="fc-orbit fc-orbit-outer" aria-hidden="true" />
            <div className="fc-orbit fc-orbit-inner" aria-hidden="true" />
            <div className="fc-hero-media">
              <img
                src="/hero.webp"
                alt="Poradce Fiduciam při osobní konzultaci pojistného plánu"
              />
            </div>
            <span className="fc-risk-label fc-risk-label-income">Příjem</span>
            <span className="fc-risk-label fc-risk-label-home">Majetek</span>
            <span className="fc-risk-label fc-risk-label-liability">Odpovědnost</span>
            <figcaption>
              <span>Mapa ochrany</span>
              Vztahy mezi riziky, rezervami a smlouvami vidíte v jednom plánu.
            </figcaption>
          </figure>
        </div>

        <a className="fc-scroll-cue" href="#pojistny-plan">
          <span aria-hidden="true">↓</span>
          Co má plán pokrýt
        </a>
      </section>

      <section className="fc-plan" id="pojistny-plan" aria-labelledby="fc-plan-title">
        <header className="fc-section-heading">
          <p className="fc-eyebrow">Pojistný plán</p>
          <h2 id="fc-plan-title">Ne sbírka smluv. Funkční systém ochrany.</h2>
          <p>
            Nejprve pojmenujeme dopady, které by ohrozily váš běžný život. Teprve potom
            prověříme rezervy, limity a podmínky stávajících smluv.
          </p>
        </header>

        <div className="fc-plan-layout">
          <figure className="fc-plan-visual">
            <img
              src="/section-1.webp"
              alt="Detail společné práce nad dokumenty a mapou finančních rizik"
              loading="lazy"
            />
            <figcaption>
              <strong>Jeden přehled.</strong>
              Žádná slepá místa mezi majetkem, příjmem a odpovědností.
            </figcaption>
          </figure>

          <div className="fc-cover-list">
            <article className="fc-cover-item">
              <div className="fc-cover-symbol" aria-hidden="true">⌂</div>
              <div>
                <h3>Domov a odpovědnost</h3>
                <p>
                  Nemovitost, domácnost, škody způsobené druhým i limity nastavené podle
                  skutečné hodnoty majetku.
                </p>
              </div>
              <span className="fc-cover-status">Prověřit</span>
            </article>

            <article className="fc-cover-item">
              <div className="fc-cover-symbol" aria-hidden="true">◒</div>
              <div>
                <h3>Příjem a rodina</h3>
                <p>
                  Výpadek příjmu, nemoc, invalidita a dlouhodobé závazky včetně hypotéky.
                  Počítáme s vaším reálným rozpočtem.
                </p>
              </div>
              <span className="fc-cover-status">Spočítat</span>
            </article>

            <article className="fc-cover-item">
              <div className="fc-cover-symbol" aria-hidden="true">◇</div>
              <div>
                <h3>Podnikání a majetek</h3>
                <p>
                  Klíčová rizika firmy, profesní odpovědnost a návaznost ochrany osobního
                  a firemního majetku.
                </p>
              </div>
              <span className="fc-cover-status">Propojit</span>
            </article>
          </div>
        </div>
      </section>

      <section className="fc-trust" id="spoluprace" aria-labelledby="fc-trust-title">
        <div className="fc-trust-copy">
          <p className="fc-eyebrow">Jak pracujeme</p>
          <h2 id="fc-trust-title">Na stejné straně stolu.</h2>
          <p className="fc-trust-lead">
            Doporučení nevzniká podle provize za produkt. Spolupráci si sjednáme písemně,
            jednotlivé kroky vysvětlíme a plán průběžně upravujeme podle změn ve vašem životě.
          </p>

          <dl className="fc-principles">
            <div>
              <dt>Přímá odměna</dt>
              <dd>Naši práci hradíte na základě faktury. Víte, za co platíte.</dd>
            </div>
            <div>
              <dt>Celý kontext</dt>
              <dd>Pojištění posuzujeme spolu s rezervami, úvěry a dalšími částmi majetku.</dd>
            </div>
            <div>
              <dt>Srozumitelná rozhodnutí</dt>
              <dd>Limity, výluky i další kroky dostanete vysvětlené bez produktového žargonu.</dd>
            </div>
            <div>
              <dt>Dlouhodobá péče</dt>
              <dd>Plán aktualizujeme, když se mění příjem, rodina, bydlení nebo podnikání.</dd>
            </div>
          </dl>
        </div>

        <figure className="fc-advisor">
          <img
            src="/section-2.webp"
            alt="Samuel Pšeja z Fiduciam při konzultaci s klientem v Brně"
            loading="lazy"
          />
          <figcaption>
            <span className="fc-advisor-mark" aria-hidden="true">F</span>
            <span>
              <strong>Samuel Pšeja</strong>
              Řídící partner · Brno
            </span>
          </figcaption>
        </figure>
      </section>
    </main>
  );
}
