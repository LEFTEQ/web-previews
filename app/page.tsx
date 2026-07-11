import React from "react";

export default function Page() {
  return (
    <main className="jd">
      {/* HERO */}
      <header className="jd-hero">
        <div className="jd-hero__frame">
          <div className="jd-hero__media">
            <img
              src="/hero.webp"
              alt="Detail hydroizolace ploché střechy — natavené pásy s přesně provedenými spoji, realizace JARDIE v Liberci"
              className="jd-hero__img"
            />
            <span className="jd-hero__stamp" aria-hidden="true">Vodotěsný spoj</span>
          </div>

          <div className="jd-hero__panel">
            <div className="jd-brand">
              <span className="jd-brand__mark" aria-hidden="true">JD</span>
              <span className="jd-brand__word">JARDIE</span>
              <span className="jd-brand__place">Liberec</span>
            </div>

            <p className="jd-hero__eyebrow">Hydroizolace &amp; speciální stavební práce</p>
            <h1 className="jd-hero__title">
              Tam, kde <em>voda</em> nesmí projít,
              <br />pracujeme <span className="jd-hero__u">na milimetry</span>.
            </h1>
            <p className="jd-hero__lede">
              Ploché střechy, základy proti radonu a tlakové vodě, mostní konstrukce.
              Natavíme a svaříme každý spoj tak, aby držel desítky let — a když je
              místo těžko přístupné, dostaneme se tam po laně nebo dronem.
            </p>

            <div className="jd-hero__cta">
              <a className="jd-btn jd-btn--solid" href="tel:+420732203619">Zavolat 732&nbsp;203&nbsp;619</a>
              <a className="jd-btn jd-btn--ghost" href="#sluzby">Co umíme</a>
            </div>

            <dl className="jd-facts">
              <div>
                <dt>Záruka na spoj</dt>
                <dd>desítky let</dd>
              </div>
              <div>
                <dt>Působíme</dt>
                <dd>Liberec a celá ČR</dd>
              </div>
              <div>
                <dt>Jednatel</dt>
                <dd>Jaroslav Šulc</dd>
              </div>
            </dl>
          </div>
        </div>
      </header>

      {/* SLUŽBY — jako kladení vrstev izolace, ne obecné dlaždice */}
      <section className="jd-sec jd-sec--layers" id="sluzby" aria-labelledby="sluzby-h">
        <div className="jd-wrap">
          <div className="jd-sec__head">
            <p className="jd-kicker">Skladba práce</p>
            <h2 id="sluzby-h" className="jd-sec__title">Šest vrstev, na kterých stavíme</h2>
            <p className="jd-sec__note">
              Každou zakázku čteme odspodu nahoru — od podloží po vrchol konstrukce.
              Vybraný výsek naší práce v pořadí, v jakém na stavbě probíhá.
            </p>
          </div>

          <ol className="jd-layers">
            <li className="jd-layer">
              <span className="jd-layer__no">01</span>
              <div className="jd-layer__body">
                <h3>Ochrana proti radonu a tlakové vodě</h3>
                <p>Izolace základů a spodní stavby. Chráníme dům i zdraví lidí uvnitř před vlhkem z podloží a radonem.</p>
              </div>
            </li>
            <li className="jd-layer">
              <span className="jd-layer__no">02</span>
              <div className="jd-layer__body">
                <h3>Zemní práce a autodoprava</h3>
                <p>Připravíme terén, odkopeme a odvezeme. Bez pořádné přípravy podloží nedrží žádná izolace nad ním.</p>
              </div>
            </li>
            <li className="jd-layer">
              <span className="jd-layer__no">03</span>
              <div className="jd-layer__body">
                <h3>Izolace plochých střech</h3>
                <p>Hydroizolace moderními fóliemi a pásy se 100% nepropustností. Každý svar kontrolujeme, ne odhadujeme.</p>
              </div>
            </li>
            <li className="jd-layer">
              <span className="jd-layer__no">04</span>
              <div className="jd-layer__body">
                <h3>Izolace mostů a konstrukcí</h3>
                <p>Náročné izolace mostních a inženýrských staveb, kde jde o extrémní odolnost a životnost.</p>
              </div>
            </li>
            <li className="jd-layer">
              <span className="jd-layer__no">05</span>
              <div className="jd-layer__body">
                <h3>Výškové práce</h3>
                <p>Horolezecká technika i plošiny. Opravíme a udržíme místa, kam se běžná technika nedostane.</p>
              </div>
            </li>
            <li className="jd-layer">
              <span className="jd-layer__no">06</span>
              <div className="jd-layer__body">
                <h3>Údržba střech, okapů a inspekce dronem</h3>
                <p>Odklízení sněhu, čištění okapů, kácení stromů u objektu a přesná prohlídka střechy z ptačí perspektivy.</p>
              </div>
            </li>
          </ol>

          <figure className="jd-figure">
            <img
              src="/section-1.webp"
              alt="Realizace hydroizolace — pohled na dokončenou plochou střechu a detail provedení spojů"
              className="jd-figure__img"
            />
            <figcaption>Z realizací: dokončená plochá střecha s kontrolovanými spoji.</figcaption>
          </figure>
        </div>
      </section>

      {/* O NÁS / DŮVĚRA */}
      <section className="jd-sec jd-sec--about" id="o-nas" aria-labelledby="about-h">
        <div className="jd-wrap jd-about">
          <div className="jd-about__media">
            <img
              src="/section-2.webp"
              alt="Tým JARDIE při práci ve výškách — realizace izolace na těžko přístupném místě"
              className="jd-about__img"
            />
          </div>

          <div className="jd-about__text">
            <p className="jd-kicker">JARDIE s.r.o. — Liberec VI-Rochlice</p>
            <h2 id="about-h" className="jd-sec__title">Rodinná preciznost, kterou je vidět až za deset let</h2>
            <p>
              Jsme specialisté na hydroizolace a speciální stavební práce v Liberci
              a okolí. Moderní materiály kombinujeme s letitými zkušenostmi a
              osobním přístupem — u nás jednáte přímo s lidmi, kteří za práci ručí.
            </p>

            <ul className="jd-people">
              <li>
                <span className="jd-people__role">Rozpočty</span>
                <span className="jd-people__name">Bc. Veronika Vašáková</span>
                <a className="jd-people__link" href="tel:+420724807727">724&nbsp;807&nbsp;727</a>
              </li>
              <li>
                <span className="jd-people__role">Sekretariát</span>
                <span className="jd-people__name">Michaela Provazníková</span>
                <a className="jd-people__link" href="tel:+420725370077">725&nbsp;370&nbsp;077</a>
              </li>
              <li>
                <span className="jd-people__role">Poptávky</span>
                <span className="jd-people__name">Kancelář JARDIE</span>
                <a className="jd-people__link" href="mailto:info@jardie.cz">info@jardie.cz</a>
              </li>
            </ul>

            <div className="jd-reg">
              <p>
                <strong>Sídlo:</strong> České mládeže 993/80, 460&nbsp;06 Liberec VI-Rochlice
              </p>
              <p>
                <strong>IČO:</strong> 08875715 · <strong>DIČ:</strong> CZ08875715 ·
                zapsáno u Krajského soudu v Ústí nad Labem, oddíl C, vložka 44784
              </p>
            </div>

            <a className="jd-btn jd-btn--solid" href="mailto:info@jardie.cz">Napsat nezávaznou poptávku</a>
          </div>
        </div>
      </section>
    </main>
  );
}
