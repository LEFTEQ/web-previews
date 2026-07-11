import React from "react";

export default function Page() {
  return (
    <main className="gp">
      {/* HERO — plank/wood grain thesis */}
      <header className="gp-hero">
        <div className="gp-hero__grain" aria-hidden="true" />
        <nav className="gp-nav" aria-label="Hlavní">
          <a className="gp-mark" href="#" aria-label="GOBI parket, domovská stránka">
            <span className="gp-mark__g">GOBI</span>
            <span className="gp-mark__p">parket</span>
            <span className="gp-mark__grain" aria-hidden="true" />
          </a>
          <a className="gp-nav__phone" href="tel:+420596000000">
            <span className="gp-nav__phoneLabel">Zavolat do dílny</span>
            <span className="gp-nav__phoneNum">596 000 000</span>
          </a>
        </nav>

        <div className="gp-hero__inner">
          <div className="gp-hero__copy">
            <p className="gp-eyebrow">Parkety a dřevěné podlahy · Ostrava</p>
            <h1 className="gp-hero__title">
              Podlaha, po&nbsp;které<br />
              chodíte <em>desítky&nbsp;let</em>.
            </h1>
            <p className="gp-hero__lead">
              Vybereme dřevo, položíme fošny na míru vaší místnosti a vybrousíme
              je tak, aby dub, jasan i buk držely doma v Ostravě dlouho a hezky
              stárly. Od zaměření po finální olej.
            </p>
            <div className="gp-hero__cta">
              <a className="gp-btn gp-btn--solid" href="tel:+420596000000">Zavolat a domluvit zaměření</a>
              <a className="gp-btn gp-btn--ghost" href="#nabidka">Co pokládáme</a>
            </div>
          </div>

          <figure className="gp-hero__figure">
            <img src="/hero.webp" alt="Detail položené dubové parketové podlahy v rybí kost" loading="eager" />
            <figcaption className="gp-hero__cap">Dubová parketa, kladení do rybí kosti</figcaption>
          </figure>
        </div>

        {/* wood species stripe — the vernacular of the trade */}
        <ul className="gp-species" aria-label="Dřeviny, které pokládáme">
          <li><span className="gp-species__swatch gp-species--dub" aria-hidden="true" />Dub</li>
          <li><span className="gp-species__swatch gp-species--jasan" aria-hidden="true" />Jasan</li>
          <li><span className="gp-species__swatch gp-species--buk" aria-hidden="true" />Buk</li>
          <li><span className="gp-species__swatch gp-species--ores" aria-hidden="true" />Ořech</li>
          <li><span className="gp-species__swatch gp-species--merbau" aria-hidden="true" />Merbau</li>
        </ul>
      </header>

      {/* SECTION 1 — služby jako pořadí kroků na stavbě */}
      <section className="gp-work" id="nabidka" aria-labelledby="nabidka-h">
        <div className="gp-section__head">
          <p className="gp-eyebrow gp-eyebrow--dark">Od zaměření k hotové podlaze</p>
          <h2 id="nabidka-h" className="gp-h2">Řemeslo, ne katalog</h2>
          <p className="gp-section__intro">
            Podlahu neděláme na dálku. Přijedeme, změříme vlhkost betonu, poradíme
            dřevo i finální úpravu a položíme to sami. Tady je, čím se zabýváme.
          </p>
        </div>

        <ol className="gp-steps">
          <li className="gp-step">
            <span className="gp-step__no">01</span>
            <h3 className="gp-step__t">Masivní a vrstvené parkety</h3>
            <p>Dubové vlysy, třívrstvé podlahy i klasická rybí kost a vzor do stromečku. Vybereme kresbu a odstín, který sedne k místnosti.</p>
          </li>
          <li className="gp-step">
            <span className="gp-step__no">02</span>
            <h3 className="gp-step__t">Plovoucí, vinyl a laminát</h3>
            <p>Když má být hotovo rychle a odolně: kliková montáž, tichá podložka a zámky, které drží. Ideální do bytů i nájmů.</p>
          </li>
          <li className="gp-step">
            <span className="gp-step__no">03</span>
            <h3 className="gp-step__t">Broušení a renovace</h3>
            <p>Staré parkety obrousíme, vyspárujeme a znovu naolejujeme. Z podlahy po babičce uděláme kus, který vydrží další generaci.</p>
          </li>
          <li className="gp-step">
            <span className="gp-step__no">04</span>
            <h3 className="gp-step__t">PVC, linoleum a korek</h3>
            <p>Praktické podlahy do kuchyní, ordinací i dětských pokojů. Poradíme, co je snadné na údržbu a příjemné na dotek.</p>
          </li>
        </ol>

        <figure className="gp-work__figure">
          <img src="/section-1.webp" alt="Řemeslník brousí dřevěnou podlahu, na povrchu je vidět kresba dřeva" loading="lazy" />
        </figure>
      </section>

      {/* SECTION 2 — důvěra / o nás */}
      <section className="gp-trust" id="o-nas" aria-labelledby="onas-h">
        <div className="gp-trust__grid">
          <figure className="gp-trust__figure">
            <img src="/section-2.webp" alt="Naolejovaná parketová podlaha v obytném prostoru s denním světlem" loading="lazy" />
          </figure>

          <div className="gp-trust__copy">
            <p className="gp-eyebrow gp-eyebrow--dark">Ostravská dílna, ne montovna</p>
            <h2 id="onas-h" className="gp-h2">Pokládáme podlahy v&nbsp;Ostravě a&nbsp;okolí</h2>
            <p>
              GOBI parket je malá parta, která dřevu rozumí. Nesázíme na největší
              sklad, ale na to, že u vás doma vzniká podlaha, na kterou se dá
              spolehnout. Od Poruby po Vítkovice — přijedeme, poradíme a uklidíme
              po sobě.
            </p>

            <dl className="gp-facts">
              <div className="gp-fact">
                <dt>Zaměření</dt>
                <dd>zdarma u vás doma, i o víkendu</dd>
              </div>
              <div className="gp-fact">
                <dt>Záruka řemesla</dt>
                <dd>na pokládku i broušení</dd>
              </div>
              <div className="gp-fact">
                <dt>Kde pracujeme</dt>
                <dd>Ostrava a okolí do 40 km</dd>
              </div>
            </dl>

            <blockquote className="gp-quote">
              <p>„Přijeli přesně na čas, starou podlahu obrousili za dva dny a dub
              teď vypadá líp než původní. Domluva bez řečí.“</p>
              <cite>— Marie K., byt v Ostravě-Porubě</cite>
            </blockquote>

            <a className="gp-btn gp-btn--solid" href="tel:+420596000000">Zavolat a domluvit termín</a>
          </div>
        </div>
      </section>
    </main>
  );
}
