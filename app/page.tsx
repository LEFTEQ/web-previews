export default function Page() {
  return (
    <main className="mc">
      {/* ===== HERO ===== */}
      <header className="mc-hero">
        <div className="mc-hero__bar">
          <a href="#" className="mc-wordmark" aria-label="Mighty Colours — grafické studio, Brno">
            <span className="mc-wordmark__mighty">Mighty</span>
            <span className="mc-wordmark__colours">
              <span className="mc-c mc-c--cyan">C</span>
              <span className="mc-c mc-c--magenta">o</span>
              <span className="mc-c mc-c--yellow">l</span>
              <span>ours</span>
            </span>
          </a>
          <p className="mc-hero__loc">Grafické studio · Brno</p>
        </div>

        <div className="mc-hero__grid">
          <div className="mc-hero__copy">
            <p className="mc-swatchline" aria-hidden="true">
              <span className="mc-swatch mc-swatch--cyan">C 100</span>
              <span className="mc-swatch mc-swatch--magenta">M 100</span>
              <span className="mc-swatch mc-swatch--yellow">Y 100</span>
              <span className="mc-swatch mc-swatch--key">K 100</span>
            </p>
            <h1 className="mc-hero__title">
              Barva je argument.
              <br />
              <em>My ho umíme vytisknout.</em>
            </h1>
            <p className="mc-hero__lead">
              Jsme brněnské grafické studio. Navrhneme vám značku, tiskoviny
              i obaly — a pohlídáme je až na papír, aby vytištěná barva byla
              přesně ta, kterou jste schválili na obrazovce.
            </p>
            <div className="mc-hero__actions">
              <a href="#sluzby" className="mc-btn mc-btn--primary">Co pro vás uděláme</a>
              <a href="#studio" className="mc-btn mc-btn--ghost">Poznat studio</a>
            </div>
          </div>

          <figure className="mc-hero__figure">
            <img
              src="/hero.webp"
              alt="Pracovní stůl grafického studia Mighty Colours s barevnými vzorníky a návrhy"
              className="mc-hero__img"
            />
            <figcaption className="mc-hero__caption">
              Vzorník před schválením do tisku — každý odstín má své číslo.
            </figcaption>
          </figure>
        </div>

        <div className="mc-regbar" aria-hidden="true">
          <span className="mc-regbar__seg mc-regbar__seg--cyan"></span>
          <span className="mc-regbar__seg mc-regbar__seg--magenta"></span>
          <span className="mc-regbar__seg mc-regbar__seg--yellow"></span>
          <span className="mc-regbar__seg mc-regbar__seg--key"></span>
        </div>
      </header>

      {/* ===== SLUŽBY ===== */}
      <section className="mc-section" id="sluzby" aria-labelledby="sluzby-h">
        <div className="mc-section__head">
          <p className="mc-eyebrow"><span className="mc-eyebrow__chip mc-eyebrow__chip--cyan" aria-hidden="true"></span>Služby</p>
          <h2 className="mc-section__title" id="sluzby-h">Od první skici po náklad z tiskárny</h2>
          <p className="mc-section__lead">
            Nepředáváme vám jen PDF. Každou zakázku vedeme jako tiskovou —
            proto naše služby řadíme tak, jak jde barva strojem: C, M, Y, K.
          </p>
        </div>

        <div className="mc-services">
          <article className="mc-service mc-service--cyan">
            <p className="mc-service__plate">C</p>
            <h3 className="mc-service__title">Vizuální identita</h3>
            <p className="mc-service__text">
              Logo, barevnost, písmo a pravidla, jak s nimi zacházet. Dostanete
              manuál, podle kterého značku udrží konzistentní i váš nový kolega.
            </p>
            <p className="mc-service__meta">logo · logomanuál · firemní šablony</p>
          </article>

          <article className="mc-service mc-service--magenta">
            <p className="mc-service__plate">M</p>
            <h3 className="mc-service__title">Tiskoviny</h3>
            <p className="mc-service__text">
              Katalogy, výroční zprávy, vizitky i plakáty. Data připravíme přesně
              podle profilu tiskárny — žádné překvapení při rozbalení nákladu.
            </p>
            <p className="mc-service__meta">katalogy · plakáty · merkantil</p>
          </article>

          <article className="mc-service mc-service--yellow">
            <p className="mc-service__plate">Y</p>
            <h3 className="mc-service__title">Obaly a etikety</h3>
            <p className="mc-service__text">
              Návrh obalu, konstrukce krabičky i výsek. Vyrobíme maketu, kterou
              si podržíte v ruce dřív, než se rozjede výroba.
            </p>
            <p className="mc-service__meta">obaly · etikety · makety</p>
          </article>

          <article className="mc-service mc-service--key">
            <p className="mc-service__plate">K</p>
            <h3 className="mc-service__title">Dohled nad tiskem</h3>
            <p className="mc-service__text">
              Jedeme s vámi do tiskárny na náhled u stroje. Odsouhlasíme první
              archy a náklad se tiskne, až když barva sedí.
            </p>
            <p className="mc-service__meta">nátisky · korektury · tisková produkce</p>
          </article>
        </div>

        <figure className="mc-band">
          <img
            src="/section-1.webp"
            alt="Kontrola vytištěných archů a barevných nátisků v tiskárně"
            className="mc-band__img"
          />
          <figcaption className="mc-band__caption">
            Náhled u stroje: první archy porovnáváme s certifikovaným nátiskem.
          </figcaption>
        </figure>
      </section>

      {/* ===== STUDIO / DŮVĚRA ===== */}
      <section className="mc-section mc-section--studio" id="studio" aria-labelledby="studio-h">
        <div className="mc-studio">
          <figure className="mc-studio__figure">
            <img
              src="/section-2.webp"
              alt="Interiér brněnského studia Mighty Colours s návrhy na stěnách"
              className="mc-studio__img"
            />
          </figure>

          <div className="mc-studio__copy">
            <p className="mc-eyebrow mc-eyebrow--light"><span className="mc-eyebrow__chip mc-eyebrow__chip--magenta" aria-hidden="true"></span>Studio</p>
            <h2 className="mc-section__title mc-section__title--light" id="studio-h">
              Malé studio v Brně. Velký respekt k papíru.
            </h2>
            <p className="mc-studio__text">
              Mighty Colours jsme založili jako studio, kde grafik zná tiskový
              stroj jménem. Pracujeme pro brněnské firmy, festivaly i výrobce,
              kteří chtějí, aby jejich tiskoviny vypadaly stejně dobře v ruce
              jako v prezentaci.
            </p>

            <ul className="mc-proof">
              <li className="mc-proof__item">
                <span className="mc-proof__mark" aria-hidden="true">✓</span>
                <span>Návrhy schvalujete na kalibrovaném nátisku, ne jen na monitoru.</span>
              </li>
              <li className="mc-proof__item">
                <span className="mc-proof__mark" aria-hidden="true">✓</span>
                <span>Spolupracujeme s ověřenými tiskárnami v Brně a okolí — termíny držíme.</span>
              </li>
              <li className="mc-proof__item">
                <span className="mc-proof__mark" aria-hidden="true">✓</span>
                <span>Zdrojová data jsou vždy vaše. Odejdete-li, odnesete si všechno.</span>
              </li>
            </ul>

            <blockquote className="mc-quote">
              <p>
                „Poprvé nám katalog z tiskárny přišel přesně v barvách, které
                jsme schválili. Kluci z Mighty Colours u toho stroje opravdu stáli.“
              </p>
              <cite>— výrobce nábytku, Brno-Židenice</cite>
            </blockquote>
          </div>
        </div>
      </section>
    </main>
  );
}
