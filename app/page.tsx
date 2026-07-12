import React from "react";

export default function Page() {
  return (
    <main className="roof">
      {/* HERO */}
      <header className="hero">
        <div className="hero__bar">
          <div className="wordmark" aria-label="LUK-MAT pokrývačství">
            <span className="wordmark__luk">LUK</span>
            <span className="wordmark__dash" aria-hidden="true">—</span>
            <span className="wordmark__mat">MAT</span>
            <span className="wordmark__sub">pokrývačství · Liberec</span>
          </div>
          <nav className="hero__nav" aria-label="Hlavní">
            <a href="#strecha">Co skládá střechu</a>
            <a href="#znacky">S čím pracujeme</a>
            <a href="tel:+420602100200" className="hero__call">Zavolat pokrývači</a>
          </nav>
        </div>

        <div className="hero__grid">
          <div className="hero__text">
            <p className="eyebrow"><span className="eyebrow__pin" aria-hidden="true" /> Střechy pod Ještědem od základu po hřeben</p>
            <h1 className="hero__title">
              Střecha, která<br/>
              <span className="hero__title-accent">unese liberecký</span><br/>
              sníh i vichr.
            </h1>
            <p className="hero__lead">
              Skládáme celý střešní systém — krytinu, izolaci, klempířské prvky
              i okapy — tak, aby držel pohromadě dvě generace. Ne jen položit tašky,
              ale odvést vodu, sníh a vítr tam, kam patří.
            </p>
            <div className="hero__actions">
              <a href="tel:+420602100200" className="btn btn--solid">Zavolat: 602 100 200</a>
              <a href="mailto:strechy@luk-mat.cz" className="btn btn--ghost">Napsat o cenu</a>
            </div>
          </div>

          <figure className="hero__figure">
            <img src="/hero.webp" alt="Nová šikmá střecha s krytinou a okapovým systémem realizovaná firmou LUK-MAT v Liberci" loading="eager" />
            <figcaption>Realizace šikmé střechy — Liberec a okolí</figcaption>
          </figure>
        </div>
      </header>

      {/* SECTION 1 — vrstvy střechy jako sekvence */}
      <section id="strecha" className="layers" aria-labelledby="layers-h">
        <div className="section-head">
          <p className="eyebrow eyebrow--dark"><span className="eyebrow__pin" aria-hidden="true" /> Řez střechou</p>
          <h2 id="layers-h" className="section-title">Čtyři systémy, jedna střecha</h2>
          <p className="section-sub">
            Dobrá střecha není jedna vrstva. Jsou to řemesla, která na sebe musí
            sednout na milimetr. Skládáme je odshora dolů — přesně v tomhle pořadí.
          </p>
        </div>

        <ol className="layers__list">
          <li className="layer">
            <span className="layer__no">01</span>
            <div className="layer__body">
              <h3>Střešní krytina</h3>
              <p>
                To první, co ze střechy vidíte, a to poslední, co drží déšť venku.
                Vybíráme podle materiálu, tvaru i barvy — od asfaltových šindelů po
                betonové a pálené tašky, které snesou liberecké počasí od žáru po led.
              </p>
            </div>
          </li>
          <li className="layer">
            <span className="layer__no">02</span>
            <div className="layer__body">
              <h3>Izolace a pojistná hydroizolace</h3>
              <p>
                Neviditelná, ale rozhoduje o teple i tichu v domě. Drží teplotní
                rozdíly, odvádí vlhkost jako pojistná hydroizolace a tlumí zvuk deště.
                Při rekonstrukci navíc srovná plochu pod novou krytinu.
              </p>
            </div>
          </li>
          <li className="layer">
            <span className="layer__no">03</span>
            <div className="layer__body">
              <h3>Klempířské prvky</h3>
              <p>
                Oplechování, lemování komínů, úžlabí — místa, kudy voda nejraději
                hledá cestu dovnitř. Ohýbáme plech tak, aby spoje držely i po letech
                mrazů a rozpínání.
              </p>
            </div>
          </li>
          <li className="layer">
            <span className="layer__no">04</span>
            <div className="layer__body">
              <h3>Okapový systém</h3>
              <p>
                Síla dopadající vody roste s výškou pádu — bez okapů dostanete
                vymletý příkop kolem domu. Montujeme okapy z materiálů odolných
                korozi, prakticky bezúdržbové, které vodu odvedou tam, kam má téct.
              </p>
            </div>
          </li>
        </ol>
      </section>

      {/* SECTION 2 — s čím pracujeme + důvěra */}
      <section id="znacky" className="trust" aria-labelledby="trust-h">
        <div className="trust__media">
          <img src="/section-1.webp" alt="Detail montáže střešní krytiny a klempířských prvků firmou LUK-MAT" loading="lazy" />
          <img src="/section-2.webp" alt="Okapový systém a lemování na dokončené střeše v Liberci" loading="lazy" />
        </div>

        <div className="trust__content">
          <p className="eyebrow eyebrow--dark"><span className="eyebrow__pin" aria-hidden="true" /> LUK-MAT s.r.o.</p>
          <h2 id="trust-h" className="section-title">Pokrývači, kteří u střechy zůstanou</h2>
          <p className="trust__lead">
            Děláme střechy v Liberci a okolí — od nové stavby po rekonstrukci
            staré střechy, kde už teče. Přijedeme, změříme, poradíme s krytinou
            i rozpočtem a řekneme rovnou, co střecha opravdu potřebuje.
          </p>

          <ul className="trust__points">
            <li>
              <strong>Kompletní střešní systém</strong>
              Krytina, izolace, klempířina i okapy od jedné party — bez
              přehazování odpovědnosti mezi řemesly.
            </li>
            <li>
              <strong>Ověřené materiály</strong>
              Pracujeme se značkovými krytinami a okapovými systémy, které mají
              záruku a snesou horské počasí Liberecka.
            </li>
            <li>
              <strong>Rekonstrukce i novostavby</strong>
              Opravíme zatékající úžlabí i položíme celou střechu od latí
              po hřebenáč.
            </li>
          </ul>

          <div className="trust__cta">
            <a href="tel:+420602100200" className="btn btn--solid">Zavolat: 602 100 200</a>
            <a href="mailto:strechy@luk-mat.cz" className="btn btn--ghost">strechy@luk-mat.cz</a>
          </div>
        </div>
      </section>
    </main>
  );
}
