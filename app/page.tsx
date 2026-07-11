import React from "react";

export default function Page() {
  return (
    <main className="od">
      {/* HERO — postaveno na řemesle: měření zraku a přesnost dioptrií */}
      <header className="od-top">
        <a className="od-mark" href="#" aria-label="Optika Iva Dlouhá, Hradec Králové">
          <span className="od-mark__o" aria-hidden="true">
            <span className="od-mark__ring" />
          </span>
          <span className="od-mark__txt">
            <span className="od-mark__name">Iva Dlouhá</span>
            <span className="od-mark__sub">oční optika · Hradec Králové</span>
          </span>
        </a>
        <nav className="od-nav" aria-label="Hlavní">
          <a href="#pece">Péče o zrak</a>
          <a href="#pribeh">Náš příběh</a>
          <a className="od-nav__cta" href="#objednat">Objednat se</a>
        </nav>
      </header>

      <section className="od-hero">
        <div className="od-hero__copy">
          <p className="od-eyebrow">Rodinná optika s tradicí od roku 1992</p>
          <h1 className="od-h1">
            Vidět <em>ostře</em> je řemeslo.<br />
            My ho děláme <span className="od-h1__mark">přesně</span>.
          </h1>
          <p className="od-lede">
            Změříme zrak, poradíme s obrubou a čočky vybrousíme na desetinu
            dioptrie. U nás v Hradci nejsou brýle jen pomůcka — jsou to brýle,
            které chcete nosit.
          </p>
          <div className="od-hero__actions">
            <a className="od-btn" href="#objednat">Objednat měření zraku</a>
            <a className="od-btn od-btn--ghost" href="#pece">Co pro vás uděláme</a>
          </div>

          {/* charakteristický artefakt oboru: řádka refrakčního fropteru / dioptrická stupnice */}
          <ul className="od-scale" aria-label="Rozsah dioptrií, které brousíme">
            <li><span>−12</span></li>
            <li><span>−6</span></li>
            <li><span>−3</span></li>
            <li className="od-scale__zero"><span>0</span></li>
            <li><span>+3</span></li>
            <li><span>+6</span></li>
            <li><span>+12</span></li>
          </ul>
          <p className="od-scale__cap">Jemné doladění po 0,25 D — v celém rozsahu.</p>
        </div>

        <figure className="od-hero__media">
          <img
            src="/hero.webp"
            alt="Detail měření zraku v optice Ivy Dlouhé — zkušební obruba s dioptrickými čočkami"
            className="od-hero__img"
          />
          <figcaption className="od-hero__badge">
            <strong>34</strong> let broušení pro vaše oči
          </figcaption>
        </figure>
      </section>

      {/* SEKCE 1 — služby jako sled kroků od očí k hotovým brýlím */}
      <section className="od-sec" id="pece">
        <div className="od-sec__head">
          <p className="od-eyebrow">Cesta k novým brýlím</p>
          <h2 className="od-h2">Od vyšetření po nasazení — čtyři kroky, ne náhoda</h2>
        </div>

        <ol className="od-steps">
          <li className="od-step">
            <span className="od-step__num">01</span>
            <h3>Měření zraku</h3>
            <p>
              Vyšetření u optometristy na moderních přístrojích. Objednáte se,
              pokud je vám víc než 15 let a vidění zlobí. Výsledek probereme
              srozumitelně, ne v samých zkratkách.
            </p>
          </li>
          <li className="od-step">
            <span className="od-step__num">02</span>
            <h3>Konzultace multifokálů</h3>
            <p>
              Uvažujete o progresivních brýlích? Sestavíme zkušební multifokály
              ve vašich dioptriích, abyste si nezávazně vyzkoušeli, jak se v nich
              vidí a chodí — dřív, než se rozhodnete.
            </p>
          </li>
          <li className="od-step">
            <span className="od-step__num">03</span>
            <h3>Výběr obruby</h3>
            <p>
              Brýle jsou módní doplněk, který nosíte celý den. Vyhradíme si čas
              i oblíbeného specialistu, aby vám obruba seděla na tvar obličeje
              i na vaši náladu.
            </p>
          </li>
          <li className="od-step">
            <span className="od-step__num">04</span>
            <h3>Čočky a servis</h3>
            <p>
              Kontaktní čočky, samozatmavovací i sluneční skla, akce Varilux 1+1.
              A kdykoli později — zajdete si brýle jen tak vyčistit a doladit.
            </p>
          </li>
        </ol>

        <aside className="od-note">
          <p>
            <strong>Brýle na FKSP?</strong> Máte-li od zaměstnavatele fond
            kulturních a sociálních potřeb, brýle u nás fakturujeme přímo jemu.
            Vy si je jen vyzvednete a nosíte.
          </p>
        </aside>
      </section>

      {/* SEKCE 2 — důvěra, příběh, výlohy, kontakt */}
      <section className="od-sec od-sec--split" id="pribeh">
        <figure className="od-story__media">
          <img
            src="/section-1.webp"
            alt="Výloha optiky Ivy Dlouhé s hravě naaranžovanými brýlemi"
            className="od-story__img"
          />
        </figure>

        <div className="od-story__copy">
          <p className="od-eyebrow">Náš příběh</p>
          <h2 className="od-h2">Naše rodina umí brýle. Už 34 let.</h2>
          <p className="od-lede">
            Rozumíme vašim očím — s citlivým přístupem ke každému, kdo přijde.
            Vysoce odborná péče optiků a optometristů, moderní přístroje a
            kvalitní produkty za dostupné ceny. Sdílíme vášeň pro výjimečné
            brýle s lidmi, kteří je nenosí jen proto, že musí, ale protože je
            milují.
          </p>

          <figure className="od-story__media od-story__media--in">
            <img
              src="/section-2.webp"
              alt="Detail práce s brýlovou obrubou a čočkami v dílně optiky"
              className="od-story__img"
            />
            <figcaption>Veselé a hravé výlohy děláme jako užité umění — pro radost celého města.</figcaption>
          </figure>

          <div className="od-contact" id="objednat">
            <div className="od-contact__col">
              <h3>Kde nás najdete</h3>
              <p>
                Gočárova třída 1000/29<br />
                500 02 Hradec Králové
              </p>
            </div>
            <div className="od-contact__col">
              <h3>Otevírací doba</h3>
              <p>
                Pondělí–pátek 8.00–18.00<br />
                Sobota 9.00–12.00
              </p>
            </div>
            <div className="od-contact__col">
              <h3>Objednejte se</h3>
              <p className="od-contact__links">
                <a href="tel:+420495536814">+420 495 536 814</a>
                <a href="tel:+420731011817">+420 731 011 817</a>
                <a href="mailto:optikadlouha@gmail.com">optikadlouha@gmail.com</a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
