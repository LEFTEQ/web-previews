import type { CSSProperties } from "react";

export default function Page() {
  return (
    <main className="szp">
      <header className="szp-nav" aria-label="Hlavní navigace">
        <a className="szp-mark" href="#uvod" aria-label="Studio zdravého pohybu, domů">
          <span className="szp-mark-line">studio</span>
          <span className="szp-mark-glyph" aria-hidden="true">
            <svg viewBox="0 0 40 40" width="40" height="40">
              <path d="M8 32 C 8 20, 20 20, 20 12 C 20 6, 26 6, 32 8" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
              <circle cx="32" cy="8" r="2.6" fill="currentColor" />
            </svg>
          </span>
          <span className="szp-mark-line szp-mark-strong">zdravého pohybu</span>
        </a>
        <nav className="szp-links">
          <a href="#pohyb">Terapie</a>
          <a href="#o-nas">Studio</a>
          <a href="#o-nas" className="szp-cta-link">608 773 181</a>
        </nav>
      </header>

      <section className="szp-hero" id="uvod">
        <div className="szp-hero-copy">
          <p className="szp-eyebrow">Fyzioterapie · Plzeň, Jungmannova</p>
          <h1 className="szp-h1">
            Tělo se učí<br />
            <em>pohybovat</em> nanovo.
          </h1>
          <p className="szp-lede">
            Pracujeme metodou Spiraldynamik® — trojrozměrnou naukou o tom, jak
            se má kloub, páteř i chodidlo správně točit a nést zátěž. Neléčíme
            jen bolest, přeučujeme vzorec, který ji dělá.
          </p>
          <div className="szp-hero-actions">
            <a href="#pohyb" className="szp-btn">Prohlédnout terapie</a>
            <a href="#o-nas" className="szp-btn-ghost">Objednat se u Hany</a>
          </div>
        </div>
        <figure className="szp-hero-media">
          <img src="/hero.webp" alt="Fyzioterapeutka vede klienta pohybovým cvičením ve Studiu zdravého pohybu v Plzni" width={900} height={1100} />
          <figcaption className="szp-hero-tag">
            <span className="szp-spiral" aria-hidden="true" />
            Osa pohybu — od chodidla k temeni
          </figcaption>
        </figure>
      </section>

      <section className="szp-section" id="pohyb" aria-labelledby="pohyb-nadpis">
        <div className="szp-section-head">
          <p className="szp-eyebrow">Co u nás projdete</p>
          <h2 className="szp-h2" id="pohyb-nadpis">Od vyšetření k novému vzorci</h2>
          <p className="szp-section-sub">
            Každá terapie má směr. Postupujeme od rozboru přes cílené techniky
            až k pohybu, který zvládnete sami doma.
          </p>
        </div>

        <ol className="szp-steps">
          <li>
            <span className="szp-step-num">01</span>
            <h3>Rozbor pohybu</h3>
            <p>
              Sledujeme, jak stojíte, chodíte a dýcháte. Najdeme kloub, který
              se netočí správně — nejčastěji je viník jinde než bolest.
            </p>
          </li>
          <li>
            <span className="szp-step-num">02</span>
            <h3>Manuální terapie</h3>
            <p>
              Uvolníme blokády páteře a kloubů, ošetříme fascie a svalové
              spouštěče. Ruce dělají práci, kterou stroj nezvládne.
            </p>
          </li>
          <li>
            <span className="szp-step-num">03</span>
            <h3>Spiraldynamik®</h3>
            <p>
              Přeučíme spirálovitý pohyb kloubu — chodidlo, koleno, rameno.
              Tělo se přestane přetěžovat ve špatné ose.
            </p>
          </li>
          <li>
            <span className="szp-step-num">04</span>
            <h3>Cvičení domů</h3>
            <p>
              Odejdete s pár cviky na míru. Krátce, ale pravidelně — tak se
              nový vzorec pohybu zafixuje natrvalo.
            </p>
          </li>
        </ol>

        <figure className="szp-band">
          <img src="/section-1.webp" alt="Detail práce fyzioterapeuta s kloubem klienta při terapii ve studiu" width={1200} height={640} />
        </figure>
      </section>

      <section className="szp-section szp-about" id="o-nas" aria-labelledby="o-nas-nadpis">
        <div className="szp-about-grid">
          <figure className="szp-about-media">
            <img src="/section-2.webp" alt="Prostředí Studia zdravého pohybu v Plzni s cvičebními pomůckami" width={800} height={900} />
          </figure>
          <div className="szp-about-copy">
            <p className="szp-eyebrow">Studio a lidé</p>
            <h2 className="szp-h2" id="o-nas-nadpis">Vede Hana Korbelářová</h2>
            <p>
              Studio zdravého pohybu najdete v Jungmannově ulici v centru Plzně.
              Pracujeme v klidu a s časem na jednoho člověka — žádná páska,
              žádný spěch. Cílem je, abyste rozuměli tomu, proč vás něco bolí
              a co s tím sami zvládnete.
            </p>
            <dl className="szp-facts">
              <div>
                <dt>Metoda</dt>
                <dd>Spiraldynamik® — trojrozměrná anatomie pohybu</dd>
              </div>
              <div>
                <dt>Kde nás najdete</dt>
                <dd>Jungmannova 611/6, 301 00 Plzeň</dd>
              </div>
              <div>
                <dt>Objednání</dt>
                <dd>tel. 608 773 181, szp-plzen@seznam.cz</dd>
              </div>
            </dl>

            <ul className="szp-indik">
              <li>Bolesti zad a krční páteře</li>
              <li>Ploché nohy a bolavá kolena</li>
              <li>Rameno, loket, zápěstí</li>
              <li>Držení těla u dětí i dospělých</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}

void ({} as CSSProperties);
