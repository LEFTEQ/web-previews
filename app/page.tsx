import React from "react";

export default function Page() {
  return (
    <main className="aq">
      {/* ================= HERO ================= */}
      <header className="aq-hero">
        <div className="aq-water" aria-hidden="true">
          <span className="b b1" />
          <span className="b b2" />
          <span className="b b3" />
          <span className="b b4" />
          <span className="b b5" />
          <span className="b b6" />
        </div>

        <nav className="aq-nav" aria-label="Hlavní">
          <a className="aq-logo" href="#" aria-label="SkloREX Akvárium, úvod">
            <span className="aq-logo-sklo">Sklo</span><span className="aq-logo-rex">REX</span>
            <span className="aq-logo-sub">akvárium · Brno-Židenice</span>
          </a>
          <ul className="aq-nav-links">
            <li><a href="#vyroba">Výroba akvárií</a></li>
            <li><a href="#duvera">Kdo jsme</a></li>
            <li><a className="aq-nav-tel" href="tel:+420545215117">545&nbsp;215&nbsp;117</a></li>
          </ul>
        </nav>

        <div className="aq-hero-grid">
          <div className="aq-hero-copy">
            <p className="aq-eyebrow">Sklenářská dílna &amp; akvaristika · od&nbsp;1992</p>
            <h1 className="aq-h1">
              Akvária,<br />
              <span className="aq-h1-em">která&nbsp;drží.</span>
            </h1>
            <p className="aq-lede">
              Lepíme akvária na míru z&nbsp;kaleného skla přímo v&nbsp;Židenicích — od&nbsp;nano nádrže
              na krevetky po tři metry dlouhý sladkovodní kolos. Spáry vám ukážeme zblízka, ať víte,
              proč to vydrží desítky let.
            </p>
            <div className="aq-hero-cta">
              <a className="aq-btn" href="#vyroba">Chci akvárium na míru</a>
              <a className="aq-btn aq-btn-ghost" href="tel:+420545215117">Zavolat do dílny</a>
            </div>
            <dl className="aq-hero-facts">
              <div><dt>Lepíme skla už</dt><dd>32 let</dd></div>
              <div><dt>Ryb na prodejně</dt><dd>250+ druhů</dd></div>
              <div><dt>Rejnoci, pralesničky</dt><dd>živě k vidění</dd></div>
            </dl>
          </div>

          <figure className="aq-hero-figure">
            <img
              src="/hero.webp"
              alt="Ručně slepené akvárium na míru z čirého skla v dílně SkloREX Akvárium v Brně"
              className="aq-hero-img"
              width={880}
              height={1040}
            />
            <figcaption>Nádrž slepená v naší dílně, čeká na osazení rostlinami.</figcaption>
          </figure>
        </div>
      </header>

      {/* ============== SEKCE 1 — VÝROBA / SLUŽBY ============== */}
      <section className="aq-sec aq-vyroba" id="vyroba" aria-labelledby="vyroba-h">
        <div className="aq-sec-head">
          <p className="aq-eyebrow aq-eyebrow-dark">Co pro vás skládáme</p>
          <h2 className="aq-h2" id="vyroba-h">Od prázdné skleněné nádrže po funkční svět pod vodou</h2>
          <p className="aq-sec-lede">
            Vedeme vás celou cestou v&nbsp;jednom pořadí — jak to skutečně probíhá, když si u&nbsp;nás
            necháte postavit akvárium. Žádné překvapení, žádný krok navíc.
          </p>
        </div>

        <ol className="aq-steps">
          <li className="aq-step">
            <span className="aq-step-no">01</span>
            <h3>Rozměr &amp; sklo</h3>
            <p>
              Zaměříme prostor, poradíme sílu skla podle objemu a slepíme nádrž z&nbsp;čirého
              nebo optiwhite skla. I&nbsp;atypické tvary do rohu nebo pod schody.
            </p>
          </li>
          <li className="aq-step">
            <span className="aq-step-no">02</span>
            <h3>Filtrace &amp; světlo</h3>
            <p>
              Vnější filtry EHEIM, které tu i&nbsp;servisujeme, a&nbsp;WRGB osvětlení Chihiros —
              nastavíme spektrum tak, aby rostliny rostly a&nbsp;rybky svítily barvou.
            </p>
          </li>
          <li className="aq-step">
            <span className="aq-step-no">03</span>
            <h3>Rostliny &amp; osádka</h3>
            <p>
              Vyberete si z&nbsp;250+&nbsp;druhů ryb a&nbsp;stěny rostlin na prodejně. Doporučíme, kdo
              s&nbsp;kým vyjde, a&nbsp;dáme akvárium do rovnováhy, než ho zarybníte.
            </p>
          </li>
        </ol>

        <div className="aq-more">
          <figure className="aq-more-figure">
            <img
              src="/section-1.webp"
              alt="Osázené akvárium s rostlinami a rybami na prodejně SkloREX Akvárium"
              width={900}
              height={620}
            />
          </figure>
          <div className="aq-more-copy">
            <h3 className="aq-h3">A když už akvárium doma máte</h3>
            <ul className="aq-list">
              <li><strong>Servis EHEIM</strong> — vyčistíme, vyměníme těsnění, oživíme starší filtr.</li>
              <li><strong>Teraristika &amp; pralesničky</strong> — terária, zázemí i&nbsp;živý hmyz ke krmení.</li>
              <li><strong>Zahradní jezírka</strong> — folie, filtrace a&nbsp;ryby ven na zahradu.</li>
              <li><strong>Naši rejnoci</strong> — přijďte se podívat, jak vypadá péče v&nbsp;praxi.</li>
            </ul>
            <a className="aq-btn aq-btn-dark" href="tel:+420545215117">Poradit se s obsluhou</a>
          </div>
        </div>
      </section>

      {/* ============== SEKCE 2 — DŮVĚRA / O NÁS ============== */}
      <section className="aq-sec aq-duvera" id="duvera" aria-labelledby="duvera-h">
        <div className="aq-duvera-grid">
          <figure className="aq-duvera-figure">
            <img
              src="/section-2.webp"
              alt="Interiér prodejny SkloREX Akvárium v Brně-Židenicích s vystavenými akvárii"
              width={900}
              height={700}
            />
          </figure>
          <div className="aq-duvera-copy">
            <p className="aq-eyebrow aq-eyebrow-dark">Kdo za sklem stojí</p>
            <h2 className="aq-h2" id="duvera-h">V&nbsp;Židenicích lepíme, radíme a&nbsp;chováme přes 30&nbsp;let</h2>
            <p className="aq-sec-lede">
              Nejsme e-shop bez tváře. Máte-li dotaz, stojí za pultem někdo, kdo akvárium sám
              postavil a&nbsp;osadil. Když technika zrovna není skladem, seženeme ji — a&nbsp;pošleme
              vždy pečlivě zabalenou proti poškození.
            </p>

            <blockquote className="aq-quote">
              <p>
                „I&nbsp;když to nemám zrovna blízko, volba je vždy jasná. Vracím se do&nbsp;Židenic
                pravidelně. Fantastický výběr rybek, neskutečně ochotný personál a&nbsp;vystavená
                akvária vždy v&nbsp;perfektním stavu. Vše dorazí do&nbsp;dvou dnů a&nbsp;skvěle zabalené.
                BRAVO.“
              </p>
              <cite>Milan Rykr · zákazník na Heurece</cite>
            </blockquote>

            <div className="aq-rating">
              <span className="aq-rating-num">5,0</span>
              <span className="aq-rating-txt">z&nbsp;462 hodnocení na&nbsp;Heurece</span>
            </div>

            <address className="aq-contact">
              <a href="tel:+420545215117">545&nbsp;215&nbsp;117</a>
              <span aria-hidden="true">·</span>
              <a href="mailto:info@sklorex.cz">info@sklorex.cz</a>
              <span aria-hidden="true">·</span>
              <span>Brno-Židenice</span>
            </address>
          </div>
        </div>
      </section>
    </main>
  );
}
