import React from "react";

export default function Page() {
  return (
    <main className="nos">
      {/* ============ HERO ============ */}
      <header className="nos-topbar">
        <a className="nos-wordmark" href="#" aria-label="Pohřebnictví Nostalgie, domů">
          <span className="nos-wordmark__main">Nostalgie</span>
          <span className="nos-wordmark__sub">pohřební služba · Brno</span>
        </a>
        <nav className="nos-nav" aria-label="Hlavní navigace">
          <a href="#sluzby">Rozloučení</a>
          <a href="#pece">Naše péče</a>
          <a href="tel:+420602891347" className="nos-nav__call">602 891 347</a>
        </nav>
      </header>

      <section className="nos-hero">
        <img
          className="nos-hero__img"
          src="/hero.webp"
          alt="Ranní mlha mezi vysokými stromy lesa nad Brnem"
        />
        <div className="nos-hero__scrim" aria-hidden="true" />
        <div className="nos-hero__inner">
          <p className="nos-hero__eyebrow">Dispečink nonstop · 24 hodin denně</p>
          <h1 className="nos-hero__title">
            Zůstaňte u&nbsp;vzpomínek.
            <span className="nos-hero__title-line">Zařízení převezmeme my.</span>
          </h1>
          <p className="nos-hero__lede">
            Odchod blízkého člověka se nedá zmírnit slovy. Můžeme ale nést
            všechno kolem — od převozu zesnulého po poslední kytici — tak, aby vám
            zbyl čas jen na to dobré, co po něm zůstalo.
          </p>
          <div className="nos-hero__actions">
            <a className="nos-btn nos-btn--primary" href="tel:+420602891347">
              Zavolat na dispečink
            </a>
            <a className="nos-btn nos-btn--ghost" href="mailto:dispecink@nostalgie.cz">
              Napsat e-mail
            </a>
          </div>
          <p className="nos-hero__place">
            náměstí 28.&nbsp;dubna 238/25, 635&nbsp;00 Brno · vlastní krematorium v&nbsp;Hustopečích
          </p>
        </div>
      </section>

      {/* ============ SEKCE 1 — způsoby rozloučení ============ */}
      <section id="sluzby" className="nos-sec nos-sec--sluzby">
        <div className="nos-sec__head">
          <p className="nos-eyebrow">Tři cesty rozloučení</p>
          <h2 className="nos-h2">Jak se lze rozloučit</h2>
          <p className="nos-sec__intro">
            Nemusíte teď nic rozhodovat sami. Provedeme vás všemi možnostmi a
            řekneme rovnou, co obnáší — časově i finančně.
          </p>
        </div>

        <ol className="nos-ways">
          <li className="nos-way">
            <span className="nos-way__mark">I</span>
            <h3 className="nos-way__title">Kremace s&nbsp;obřadem</h3>
            <p className="nos-way__desc">
              Rozloučení v&nbsp;obřadní síni — hudba, řečník, květiny i&nbsp;čas
              pro rodinu. Poté zpopelnění ve&nbsp;vlastním krematoriu v&nbsp;Hustopečích.
            </p>
          </li>
          <li className="nos-way">
            <span className="nos-way__mark">II</span>
            <h3 className="nos-way__title">Kremace bez&nbsp;obřadu</h3>
            <p className="nos-way__desc">
              Tichá varianta bez veřejného obřadu. Urnu předáme rodině
              osobně, s&nbsp;výběrem obalu, který sedne k&nbsp;povaze zesnulého.
            </p>
          </li>
          <li className="nos-way">
            <span className="nos-way__mark">III</span>
            <h3 className="nos-way__title">Pohřeb do&nbsp;země</h3>
            <p className="nos-way__desc">
              Klasické uložení do hrobu. Zajistíme rakev, obřad na hřbitově,
              nosiče i&nbsp;veškerou dokumentaci a&nbsp;jednání s&nbsp;úřady.
            </p>
          </li>
        </ol>

        <div className="nos-detail">
          <img
            className="nos-detail__img"
            src="/section-1.webp"
            alt="Detail výběru rakve a smutečních květin v prostorách pohřební služby"
          />
          <div className="nos-detail__body">
            <p className="nos-eyebrow">A všechno kolem</p>
            <h3 className="nos-detail__title">Výbava rozloučení</h3>
            <ul className="nos-list">
              <li><strong>Rakve a&nbsp;urny</strong> — od prostých dřevěných po řezané v&nbsp;dubu, s&nbsp;možností výběru obalu na urnu.</li>
              <li><strong>Kytice a&nbsp;věnce</strong> — vážeme na míru, sezónně, podle přání i&nbsp;rozpočtu.</li>
              <li><strong>Obřadní síně</strong> — vlastní síň v&nbsp;Modřicích, Chrlická 661, i&nbsp;další v&nbsp;okolí Brna.</li>
              <li><strong>Úřední náležitosti</strong> — úmrtní list, matrika, parte i&nbsp;oznámení v&nbsp;tisku vyřídíme za vás.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ============ SEKCE 2 — důvěra / o nás ============ */}
      <section id="pece" className="nos-sec nos-sec--pece">
        <div className="nos-pece__grid">
          <div className="nos-pece__text">
            <p className="nos-eyebrow">Proč lidé v&nbsp;Brně volají právě nám</p>
            <h2 className="nos-h2 nos-h2--light">
              Neseme to za&nbsp;vás — od prvního telefonátu.
            </h2>
            <p className="nos-pece__lede">
              Zvednete telefon v&nbsp;kteroukoli hodinu a&nbsp;od té chvíle jste
              v&nbsp;tom s&nbsp;námi. Přijedeme pro zesnulého, sejdeme se, kdy vám
              to vyhovuje, a&nbsp;dál už jen říkáte, jak si rozloučení představujete.
            </p>

            <dl className="nos-facts">
              <div className="nos-fact">
                <dt>Nonstop</dt>
                <dd>Dispečink zvedáme ve dne i&nbsp;v&nbsp;noci, každý den v&nbsp;roce.</dd>
              </div>
              <div className="nos-fact">
                <dt>Vlastní krematorium</dt>
                <dd>Zpopelnění probíhá v&nbsp;našem moderním krematoriu v&nbsp;Hustopečích.</dd>
              </div>
              <div className="nos-fact">
                <dt>Jedno místo</dt>
                <dd>Převoz, obřad, květiny i&nbsp;úřady vyřídíte s&nbsp;jedním člověkem.</dd>
              </div>
            </dl>
          </div>

          <figure className="nos-pece__figure">
            <img
              className="nos-pece__img"
              src="/section-2.webp"
              alt="Tichý interiér obřadní síně se svícemi připravený k rozloučení"
            />
          </figure>
        </div>

        <blockquote className="nos-quote">
          <p>
            „Nehledejme slzy a&nbsp;smutek, ale těšme se z&nbsp;pomyšlení, že náš
            blízký je v&nbsp;myšlenkách stále s&nbsp;námi.“
          </p>
          <cite>Pohřebnictví Nostalgie</cite>
        </blockquote>
      </section>
    </main>
  );
}
