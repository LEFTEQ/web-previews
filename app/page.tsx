import React from "react";

export default function Page() {
  return (
    <main className="jf">
      {/* ============ HERO ============ */}
      <header className="jf-top">
        <a className="jf-mark" href="#" aria-label="JF Cars — úvod">
          <span className="jf-mark__jf">JF</span>
          <span className="jf-mark__cars">CARS</span>
          <span className="jf-mark__sub">autoklempířství · Hradec Králové</span>
        </a>
        <a className="jf-tel" href="tel:+420777936102">
          <span className="jf-tel__dot" aria-hidden="true" />
          +420 777 936 102
        </a>
      </header>

      <section className="jf-hero" aria-labelledby="hero-h">
        <img
          className="jf-hero__img"
          src="/hero.webp"
          alt="Dílna JF Cars v Hradci Králové — karoserie připravená k rovnání"
          width={1600}
          height={1000}
        />
        <div className="jf-hero__scrim" aria-hidden="true" />

        <div className="jf-hero__body">
          <p className="jf-eyebrow">Klempírna &amp; lakovna · Kydlinovská 161/101</p>
          <h1 id="hero-h" className="jf-hero__h">
            Rovnáme plech,<br />
            dokud nezmizí <span className="jf-hl">každá vlnka</span>.
          </h1>
          <p className="jf-hero__lead">
            Klempířské a lakýrnické práce na osobních autech i dodávkách. Boule po
            parkovišti, škody po kroupách i větší nehody — vrátíme karoserii tvar,
            který jí patří, a spojíme to s pojišťovnou za vás.
          </p>
          <div className="jf-hero__cta">
            <a className="jf-btn jf-btn--solid" href="tel:+420777936102">Zavolat do dílny</a>
            <a className="jf-btn jf-btn--ghost" href="#sluzby">Co opravíme</a>
          </div>
        </div>

        {/* svařovací steh — podpis stránky */}
        <div className="jf-seam" aria-hidden="true">
          <span /><span /><span /><span /><span /><span /><span /><span /><span /><span />
        </div>
      </section>

      {/* ============ SLUŽBY ============ */}
      <section className="jf-work" id="sluzby" aria-labelledby="work-h">
        <div className="jf-work__head">
          <p className="jf-eyebrow jf-eyebrow--dark">Postup opravy · od boule po lesk</p>
          <h2 id="work-h" className="jf-sec-h">
            Čtyři kroky, které vaše auto u nás projde
          </h2>
          <p className="jf-sec-lead">
            Nepneuservis a nepřevodovky — my se staráme o plech a lak. Tady je
            přesně to, čím se zabýváme, popořadě tak, jak oprava probíhá.
          </p>
        </div>

        <ol className="jf-steps">
          <li className="jf-step">
            <span className="jf-step__num">01</span>
            <h3 className="jf-step__h">Prohlídka a nacenění</h3>
            <p className="jf-step__p">
              Vůz projedeme, změříme poškození a řekneme rovnou cenu i termín.
              U pojistných událostí připravíme podklady pro pojišťovnu.
            </p>
          </li>
          <li className="jf-step">
            <span className="jf-step__num">02</span>
            <h3 className="jf-step__h">Rovnání a klempířina</h3>
            <p className="jf-step__p">
              Boule vytáhneme, deformované díly vyrovnáme, prohnilé nebo
              utržené plechy svaříme a vytmelíme do původního tvaru.
            </p>
          </li>
          <li className="jf-step">
            <span className="jf-step__num">03</span>
            <h3 className="jf-step__h">Lakování v odstínu vozu</h3>
            <p className="jf-step__p">
              Namícháme lak přesně na kód vaší karoserie a nastříkáme
              v boxu, aby přechod na okolní díly nebyl vidět.
            </p>
          </li>
          <li className="jf-step">
            <span className="jf-step__num">04</span>
            <h3 className="jf-step__h">Leštění a předání</h3>
            <p className="jf-step__p">
              Lak přeleštíme do hloubky, díl smontujeme zpět a auto
              předáme umyté. Kroupy, škrábance i po nehodě.
            </p>
          </li>
        </ol>

        <figure className="jf-figure">
          <img
            src="/section-1.webp"
            alt="Detail rovnané karoserie a broušeného tmelu před lakováním"
            width={1400}
            height={900}
          />
          <figcaption className="jf-figure__cap">
            Rozbroušený tmel těsně před nástřikem — místo, kde se pozná dobrá klempírna.
          </figcaption>
        </figure>
      </section>

      {/* ============ O NÁS / DŮVĚRA ============ */}
      <section className="jf-about" id="o-nas" aria-labelledby="about-h">
        <div className="jf-about__media">
          <img
            src="/section-2.webp"
            alt="Lakovací box a vůz JF Cars v Hradci Králové"
            width={1200}
            height={1400}
          />
        </div>

        <div className="jf-about__text">
          <p className="jf-eyebrow jf-eyebrow--dark">O dílně · řemeslo od roku 2005</p>
          <h2 id="about-h" className="jf-sec-h">
            Plechu rozumíme dvacet let
          </h2>
          <p className="jf-about__p">
            JF Cars najdete v Hradci Králové v Kydlinovské ulici. Firmu vedeme
            od roku 2018, ale s karoseriemi pracujeme už od roku 2005 — za tu
            dobu prošlo dílnou tolik plechu, že poznáme na první pohled, co
            půjde vyrovnat a co je lepší vyměnit.
          </p>

          <dl className="jf-facts">
            <div className="jf-fact">
              <dt>Řešíme za vás</dt>
              <dd>Komunikaci s&nbsp;pojišťovnou u&nbsp;pojistných událostí</dd>
            </div>
            <div className="jf-fact">
              <dt>Kde nás najdete</dt>
              <dd>Kydlinovská 161/101, Hradec Králové</dd>
            </div>
            <div className="jf-fact">
              <dt>Na čem pracujeme</dt>
              <dd>Osobní vozy i&nbsp;dodávky, všechny značky</dd>
            </div>
          </dl>

          <blockquote className="jf-quote">
            „Přijel jsem po kroupách, odjížděl jako z&nbsp;autosalonu. Lak úplně
            sedí, přechod nikde nepoznáte.“
            <cite>— zákazník z&nbsp;Hradce, oprava po krupobití</cite>
          </blockquote>

          <a className="jf-btn jf-btn--solid" href="tel:+420777936102">
            Domluvit prohlídku vozu
          </a>
        </div>
      </section>
    </main>
  );
}
