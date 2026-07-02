export default function Page() {
  return (
    <main className="md">
      {/* ========== HERO ========== */}
      <header className="md-hero">
        <div className="md-hero-media">
          <img
            src="/hero.webp"
            alt="Vůz z flotily Mototechna Drive připravený k vyzvednutí v Brně"
            className="md-hero-img"
          />
          <div className="md-hero-shade" aria-hidden="true" />
        </div>

        <div className="md-hero-top">
          <div className="md-wordmark" aria-label="Mototechna Drive">
            <span className="md-wordmark-main">MOTOTECHNA</span>
            <span className="md-wordmark-sub">DRIVE</span>
          </div>
          <a className="md-hero-phone" href="tel:+420515910910">
            Zavolat půjčovnu
          </a>
        </div>

        <div className="md-hero-body">
          <p className="md-plate" aria-hidden="true">
            <span className="md-plate-eu">CZ</span>
            <span className="md-plate-txt">1BR&nbsp;DRIVE</span>
          </p>
          <h1 className="md-hero-title">
            Klíčky do ruky
            <br />
            <em>do 30 minut.</em>
          </h1>
          <p className="md-hero-lead">
            Autopůjčovna v Brně s vozy do stáří dvou let. Rezervujete online,
            vyzvednete na pobočce nebo vám auto přistavíme kamkoliv po Brně.
            Bez skrytých poplatků, s plnou nádrží.
          </p>
          <div className="md-hero-cta">
            <a className="md-btn md-btn-solid" href="#flotila">
              Vybrat vůz
            </a>
            <a className="md-btn md-btn-ghost" href="#jak-to-funguje">
              Jak půjčení probíhá
            </a>
          </div>
          <dl className="md-hero-facts">
            <div>
              <dt>Stáří vozů</dt>
              <dd>max. 2 roky</dd>
            </div>
            <div>
              <dt>Kauce od</dt>
              <dd>5 000 Kč</dd>
            </div>
            <div>
              <dt>Přistavení po Brně</dt>
              <dd>zdarma od 3 dnů</dd>
            </div>
          </dl>
        </div>
      </header>

      {/* ========== SEKCE 1 — FLOTILA / SAZBY ========== */}
      <section className="md-section" id="flotila" aria-labelledby="flotila-h">
        <div className="md-section-head">
          <p className="md-eyebrow">Flotila</p>
          <h2 id="flotila-h" className="md-h2">
            Auta, která si půjčíte nejčastěji
          </h2>
          <p className="md-section-lead">
            Ceny platí za den včetně DPH, povinného ručení a havarijního
            pojištění. Kilometry po Moravě neomezeně, delší cesty domluvíme
            předem.
          </p>
        </div>

        <div className="md-fleet">
          <figure className="md-fleet-media">
            <img
              src="/section-1.webp"
              alt="Řada vozů autopůjčovny Mototechna Drive na parkovišti pobočky"
              className="md-img"
            />
            <figcaption>Pobočka Brno — výdej vozů denně 7–19 h</figcaption>
          </figure>

          <ul className="md-rates" role="list">
            <li className="md-rate">
              <div className="md-rate-head">
                <h3>Městské</h3>
                <p className="md-rate-price">
                  od <strong>790 Kč</strong>/den
                </p>
              </div>
              <p className="md-rate-desc">
                Škoda Fabia, Hyundai i20. Na pochůzky po Brně, parkování v
                centru bez stresu.
              </p>
            </li>
            <li className="md-rate">
              <div className="md-rate-head">
                <h3>Rodinné</h3>
                <p className="md-rate-price">
                  od <strong>1 190 Kč</strong>/den
                </p>
              </div>
              <p className="md-rate-desc">
                Škoda Octavia Combi, Kodiaq. Dovolená, stěhování dětí na kolej,
                cesta na hory.
              </p>
            </li>
            <li className="md-rate">
              <div className="md-rate-head">
                <h3>Užitkové</h3>
                <p className="md-rate-price">
                  od <strong>1 490 Kč</strong>/den
                </p>
              </div>
              <p className="md-rate-desc">
                Dodávky do 3,5 t s ložnou plochou na europalety. Řidičák B
                stačí.
              </p>
            </li>
            <li className="md-rate">
              <div className="md-rate-head">
                <h3>Víkend</h3>
                <p className="md-rate-price">
                  pá–ne <strong>−20 %</strong>
                </p>
              </div>
              <p className="md-rate-desc">
                Vyzvednete v pátek odpoledne, vrátíte v neděli večer. Platíte
                jen dva dny.
              </p>
            </li>
          </ul>
        </div>
      </section>

      {/* ========== SEKCE 2 — JAK TO FUNGUJE / DŮVĚRA ========== */}
      <section
        className="md-section md-section-dark"
        id="jak-to-funguje"
        aria-labelledby="jak-h"
      >
        <div className="md-section-head">
          <p className="md-eyebrow md-eyebrow-light">Jak to funguje</p>
          <h2 id="jak-h" className="md-h2">
            Tři kroky mezi vámi a volantem
          </h2>
        </div>

        <ol className="md-steps" role="list">
          <li className="md-step">
            <span className="md-step-marker" aria-hidden="true">
              P
            </span>
            <h3>Rezervace</h3>
            <p>
              Vyberete vůz a termín, my do hodiny potvrdíme dostupnost.
              Rezervaci zrušíte zdarma do 24 hodin před vyzvednutím.
            </p>
          </li>
          <li className="md-step">
            <span className="md-step-marker" aria-hidden="true">
              R
            </span>
            <h3>Vyzvednutí</h3>
            <p>
              Přinesete občanku a řidičák, podepíšete smlouvu, společně
              obejdeme vůz. Za 10 minut sedíte za volantem.
            </p>
          </li>
          <li className="md-step">
            <span className="md-step-marker" aria-hidden="true">
              D
            </span>
            <h3>Vrácení</h3>
            <p>
              Auto vrátíte s plnou nádrží, kauci vracíme na účet do tří
              pracovních dnů. Drobné odřeniny řešíme na místě, ne fakturou.
            </p>
          </li>
        </ol>

        <div className="md-trust">
          <figure className="md-trust-media">
            <img
              src="/section-2.webp"
              alt="Předání klíčků od vozu zákazníkovi na pobočce v Brně"
              className="md-img"
            />
          </figure>
          <div className="md-trust-body">
            <blockquote className="md-quote">
              <p>
                „Dodávku jsem potřeboval ještě ten den odpoledne. Zavolal jsem
                v poledne, ve dvě jsem nakládal nábytek. Smlouva srozumitelná,
                kauce zpátky za dva dny.“
              </p>
              <footer>— Martin K., stěhování po Brně, říjen 2024</footer>
            </blockquote>
            <ul className="md-trust-facts" role="list">
              <li>
                <strong>4 200+</strong> výpůjček ročně
              </li>
              <li>
                <strong>7–19 h</strong> výdej vozů denně, i o víkendu
              </li>
              <li>
                <strong>Brno</strong> — pobočka s parkováním přímo u výdeje
              </li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
