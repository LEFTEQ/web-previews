import React from "react";

export default function Page() {
  return (
    <main className="lux">
      {/* HERO — the profile of an aluminium fence: verticals + a clean line */}
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero__bg" aria-hidden="true">
          <img src="/hero.webp" alt="" className="hero__img" />
          <div className="hero__slats" />
        </div>

        <header className="topbar">
          <a className="wordmark" href="#" aria-label="Luxline — domů">
            <span className="wordmark__lux">LUX</span><span className="wordmark__line">LINE</span>
            <span className="wordmark__rule" aria-hidden="true" />
          </a>
          <p className="topbar__place">Hliníkové ploty a brány&nbsp;·&nbsp;Praha</p>
        </header>

        <div className="hero__inner">
          <p className="hero__eyebrow">Výroba na míru&nbsp;·&nbsp;Krakovská 9, Praha 1</p>
          <h1 id="hero-title" className="hero__title">
            Plot, který<br />
            <em>nikdy nezrezaví</em><br />
            a nikdy se nenatírá.
          </h1>
          <p className="hero__lead">
            Hliník místo dřeva a oceli. Práškovaná barva zapečená v peci,
            žádná údržba, deset let záruky. Vyrábíme, přivezeme a smontujeme
            po celé Praze i okolí.
          </p>
          <div className="hero__cta">
            <a className="btn btn--solid" href="#kalkulace">Spočítat cenu plotu</a>
            <a className="btn btn--ghost" href="tel:+420601580713">Zavolat: 601&nbsp;580&nbsp;713</a>
          </div>
        </div>

        <dl className="hero__facts" aria-label="Fakta o firmě">
          <div className="fact">
            <dt>Realizací v ČR</dt>
            <dd>5&nbsp;259+</dd>
          </div>
          <div className="fact">
            <dt>Záruka</dt>
            <dd>10 let</dd>
          </div>
          <div className="fact">
            <dt>Údržba ročně</dt>
            <dd>0&nbsp;hodin</dd>
          </div>
        </dl>
      </section>

      {/* SECTION 1 — co vyrábíme */}
      <section className="make" aria-labelledby="make-title">
        <div className="make__head">
          <p className="eyebrow">Co pro vás vyrobíme</p>
          <h2 id="make-title" className="section-title">
            Čtyři věci z jednoho<br />hliníkového profilu
          </h2>
          <p className="section-lead">
            Ploty, brány, branky i pergoly navrhujeme jako jeden celek —
            stejný odstín, stejná linka, stejná záruka. Vše zapadne k sobě
            i k vašemu domu.
          </p>
        </div>

        <ol className="cat">
          <li className="cat__item">
            <img src="/section-1.webp" alt="Hliníkový plot s vodorovnými lamelami" className="cat__media" />
            <div className="cat__body">
              <span className="cat__no">01</span>
              <h3 className="cat__name">Ploty</h3>
              <p className="cat__desc">Vodorovné i svislé lamely, plné nebo s průhledem. Řežeme na milimetr podle terénu pozemku.</p>
            </div>
          </li>
          <li className="cat__item">
            <img src="/section-2.webp" alt="Automatická posuvná hliníková brána" className="cat__media" />
            <div className="cat__body">
              <span className="cat__no">02</span>
              <h3 className="cat__name">Brány</h3>
              <p className="cat__desc">Posuvné i křídlové, s automatikou a ovládáním z mobilu. Přijedete domů, brána už je otevřená.</p>
            </div>
          </li>
          <li className="cat__item cat__item--text">
            <div className="cat__body">
              <span className="cat__no">03</span>
              <h3 className="cat__name">Branky</h3>
              <p className="cat__desc">Vstupní branka laděná do stejného odstínu jako plot i brána. Se zámkem, videozvonkem i elektrickým otvíráním.</p>
            </div>
          </li>
          <li className="cat__item cat__item--text">
            <div className="cat__body">
              <span className="cat__no">04</span>
              <h3 className="cat__name">Pergoly</h3>
              <p className="cat__desc">Hliníkové pergoly s naklápěcími lamelami. Stín v létě, sucho na podzim — a nulová údržba jako u plotu.</p>
            </div>
          </li>
        </ol>
      </section>

      {/* SECTION 2 — proč hliník / důvěra */}
      <section className="why" id="kalkulace" aria-labelledby="why-title">
        <div className="why__grid">
          <div className="why__left">
            <p className="eyebrow eyebrow--light">Proč právě hliník</p>
            <h2 id="why-title" className="section-title section-title--light">
              Žádné natírání.<br />Žádná rez.<br />Žádné starosti.
            </h2>
            <p className="section-lead section-lead--light">
              Ocelový plot voláte co pár let k natěrači, dřevěný začne po zimě
              šednout. Hliník s práškovou barvou odolnou UV záření vypadá po
              deseti letech jako první den. Proto na něj dáváme desetiletou záruku.
            </p>

            <ul className="spec">
              <li className="spec__row">
                <span className="spec__k">Materiál</span>
                <span className="spec__v">Hliníkové profily, prášková barva zapečená v peci</span>
              </li>
              <li className="spec__row">
                <span className="spec__k">Životnost</span>
                <span className="spec__v">Bez rzi, bez natírání — na celý život domu</span>
              </li>
              <li className="spec__row">
                <span className="spec__k">Rozsah</span>
                <span className="spec__v">Od zaměření a návrhu po montáž na klíč</span>
              </li>
              <li className="spec__row">
                <span className="spec__k">Kde jsme</span>
                <span className="spec__v">Krakovská 583/9, Praha 1 — voláme po celé ČR</span>
              </li>
            </ul>

            <a className="btn btn--solid btn--onDark" href="tel:+420601580713">
              Chci nezávaznou kalkulaci zdarma
            </a>
          </div>

          <aside className="why__card" aria-label="Reference">
            <p className="why__rating"><span className="why__num">4,5</span> / 5 hvězd</p>
            <p className="why__quote">
              „Zaměřili svah za dva dny, plot i posuvnou bránu smontovali za
              jedno dopoledne. Ovládám ji z mobilu, po roce ani škrábanec.“
            </p>
            <p className="why__author">— majitel rodinného domu, Praha-západ</p>
            <hr className="why__hr" />
            <p className="why__count">
              <strong>5&nbsp;259+</strong> hotových realizací po celé republice.
            </p>
            <a className="why__mail" href="mailto:info@luxline.cz">info@luxline.cz</a>
          </aside>
        </div>
      </section>
    </main>
  );
}
