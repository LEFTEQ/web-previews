import React from "react";

export default function Page() {
  return (
    <main className="kk">
      {/* HERO */}
      <header className="kk-hero">
        <div className="kk-hero__stripes" aria-hidden="true">
          <span></span><span></span><span></span><span></span><span></span>
          <span></span><span></span><span></span><span></span><span></span>
        </div>
        <div className="kk-hero__bar">
          <a className="kk-mark" href="#" aria-label="K&K design, Ostrava">
            <span className="kk-mark__k">K</span><span className="kk-mark__amp">&amp;</span><span className="kk-mark__k">K</span>
            <span className="kk-mark__word">design</span>
          </a>
          <span className="kk-hero__place">Ostrava · Nádražní 128</span>
        </div>

        <div className="kk-hero__grid">
          <div className="kk-hero__copy">
            <p className="kk-eyebrow">Markýzy na míru · vyměření a montáž</p>
            <h1 className="kk-h1">
              Když se markýza <span className="kk-h1__accent">vytáhne</span>,<br/>
              terasa se zkrátí o&nbsp;pár stupňů.
            </h1>
            <p className="kk-lede">
              Stahujeme přímé slunce z&nbsp;vaší terasy i&nbsp;oken. Vyměříme, ušijeme
              látku na míru a&nbsp;markýzu vám v&nbsp;Ostravě i&nbsp;okolí odborně namontujeme —
              od návrhu po poslední šroub.
            </p>
            <div className="kk-cta">
              <a className="kk-btn kk-btn--solid" href="tel:+420734151093">Zavolat 734&nbsp;151&nbsp;093</a>
              <a className="kk-btn kk-btn--ghost" href="#markyzy">Prohlédnout markýzy</a>
            </div>
          </div>
          <figure className="kk-hero__media">
            <img src="/hero.webp" alt="Vytažená markýza stínící terasu rodinného domu" loading="eager" />
            <figcaption className="kk-hero__tag">
              <span className="kk-hero__deg">−7&nbsp;°C</span>
              <span>ve stínu pod výsuvem</span>
            </figcaption>
          </figure>
        </div>
      </header>

      {/* SEKCE 1 — MARKÝZY / NABÍDKA */}
      <section className="kk-sec" id="markyzy" aria-labelledby="markyzy-nadpis">
        <div className="kk-sec__head">
          <p className="kk-eyebrow kk-eyebrow--dark">Co u nás vyberete</p>
          <h2 className="kk-h2" id="markyzy-nadpis">Tři způsoby, jak schovat slunce</h2>
        </div>

        <div className="kk-cards">
          <article className="kk-card">
            <span className="kk-card__no">01</span>
            <h3 className="kk-card__title">Kloubové markýzy</h3>
            <p className="kk-card__desc">
              Klasika nad terasu i&nbsp;balkon. Výsuv až přes čtyři metry bez podpěr,
              takže pod ní projdete i&nbsp;s&nbsp;plným tácem. Ramena z&nbsp;hliníku,
              látka odolná proti UV i&nbsp;plísni.
            </p>
            <span className="kk-card__meta">výsuv 1,5–4&nbsp;m · na zeď i&nbsp;strop</span>
          </article>
          <article className="kk-card">
            <span className="kk-card__no">02</span>
            <h3 className="kk-card__title">Kazetové markýzy</h3>
            <p className="kk-card__desc">
              Když je látka schovaná, celý mechanismus zmizí do hliníkové kazety —
              chráněný před deštěm i&nbsp;prachem. Ideál pro dům, kde má stínění
              přes zimu vydržet jako nové.
            </p>
            <span className="kk-card__meta">plné zapouzdření · motor Somfy</span>
          </article>
          <article className="kk-card">
            <span className="kk-card__no">03</span>
            <h3 className="kk-card__title">Screenové rolety</h3>
            <p className="kk-card__desc">
              Svislé látkové stínění přímo na okno. Propustí výhled ven, ale
              zaráží žár dovnitř — chladnější pokoj bez zataženého závěsu.
              Ovládání dálkovým ovladačem nebo z&nbsp;mobilu.
            </p>
            <span className="kk-card__meta">na okno i&nbsp;prosklení · chytrá domácnost</span>
          </article>
        </div>

        <div className="kk-strip">
          <img src="/section-1.webp" alt="Detail hliníkových ramen a látky markýzy" loading="lazy" />
          <div className="kk-strip__note">
            <p className="kk-strip__k">Motor od Somfy</p>
            <p>Světová jednička v&nbsp;motorech pro stínění. Markýzu vytáhnete
            ovladačem, čidlo větru ji sbalí samo, když se opře vítr.</p>
          </div>
        </div>
      </section>

      {/* SEKCE 2 — O NÁS / DŮVĚRA */}
      <section className="kk-about" aria-labelledby="about-nadpis">
        <div className="kk-about__grid">
          <figure className="kk-about__media">
            <img src="/section-2.webp" alt="Montážní tým K&amp;K design při instalaci stínicí techniky" loading="lazy" />
          </figure>
          <div className="kk-about__copy">
            <p className="kk-eyebrow kk-eyebrow--dark">O nás</p>
            <h2 className="kk-h2" id="about-nadpis">Dvacet let na moravských terasách</h2>
            <p className="kk-about__text">
              Jsme K&amp;K&nbsp;design — tým, který stínicí techniku nejen prodává,
              ale hlavně měří a&nbsp;montuje. Za dvacet let praxe se na nás obracejí
              přední čeští i&nbsp;zahraniční výrobci, ať jim markýzy a&nbsp;rolety
              odborně namontujeme přímo u&nbsp;zákazníka.
            </p>
            <ul className="kk-facts">
              <li><strong>20 let</strong><span>v oboru montáží stínicí techniky</span></li>
              <li><strong>4,8&nbsp;★</strong><span>průměrné hodnocení zákazníků</span></li>
              <li><strong>Vzorkovna</strong><span>látky a profily si osaháte v Ostravě</span></li>
            </ul>
            <p className="kk-about__region">
              Montujeme v&nbsp;Ostravě a&nbsp;po celé Moravě — Opava, Frýdek-Místek,
              Karviná, Nový Jičín, Olomouc, Přerov, Šumperk, Bruntál i&nbsp;Jeseník.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
