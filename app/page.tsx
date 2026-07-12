import React from "react";

export default function Page() {
  return (
    <main className="ls">
      {/* ==================== HERO ==================== */}
      <header className="hero">
        <div className="hero__frame">
          <div className="hero__brand">
            <span className="wordmark">
              <span className="wordmark__la">La</span>
              <span className="wordmark__sante">Santé</span>
            </span>
            <span className="wordmark__sub">ortopedie &amp; rehabilitace · Ostrava</span>
          </div>

          <nav className="hero__nav" aria-label="Hlavní">
            <a href="#pece">Péče</a>
            <a href="#duvera">Objednání</a>
            <a className="hero__call" href="tel:+420771166840">Zavolat 771&nbsp;166&nbsp;840</a>
          </nav>
        </div>

        <div className="hero__grid">
          <div className="hero__copy">
            <p className="eyebrow">Ambulance · 28. října 1753/80, Ostrava · 1. patro, zvonek č. 4</p>
            <h1 className="hero__title">
              Vrátíme<br />
              vašemu tělu<br />
              <em>pohyb bez bolesti.</em>
            </h1>
            <p className="hero__lede">
              Ortopedie a fyzioterapie pod jednou střechou. Vyšetříme, najdeme příčinu
              a sestavíme terapii na míru — od Lewitovy myoskeletální medicíny po DNS
              podle prof. Koláře. Péči hradí šest zdravotních pojišťoven.
            </p>
            <div className="hero__cta">
              <a className="btn btn--solid" href="tel:+420771166840">Zavolat a objednat se</a>
              <a className="btn btn--ghost" href="sms:+420771166840">Poslat SMS</a>
            </div>
          </div>

          <figure className="hero__media">
            <img src="/hero.webp" alt="Fyzioterapeut při manuální terapii pacienta v ambulanci La Santé v Ostravě" />
            <figcaption className="hero__hours">
              <span className="hero__hours-label">Recepce bere objednávky</span>
              <span className="hero__hours-row"><b>Úterý</b><span className="dots" aria-hidden="true" /><span>14–16</span></span>
              <span className="hero__hours-row"><b>Čtvrtek</b><span className="dots" aria-hidden="true" /><span>14–18</span></span>
            </figcaption>
          </figure>
        </div>
      </header>

      {/* ==================== SEKCE 1: PÉČE ==================== */}
      <section id="pece" className="pece" aria-labelledby="pece-nadpis">
        <div className="section-head">
          <p className="eyebrow eyebrow--dark">Co u nás projdete</p>
          <h2 id="pece-nadpis">Od vyšetření k terapii na míru</h2>
          <p className="section-head__lede">
            Postupujeme jako klinika, ne jako seznam úkonů. Nejdřív zjistíme, odkud
            bolest vychází — pak volíme metodu.
          </p>
        </div>

        <ol className="kroky">
          <li className="krok">
            <span className="krok__num">01</span>
            <h3>Ortopedické vyšetření</h3>
            <p>Ortoped posoudí kloub, páteř i držení těla a určí, co terapie potřebuje řešit. S sebou žádanku od obvodního lékaře.</p>
          </li>
          <li className="krok">
            <span className="krok__num">02</span>
            <h3>Kineziologický rozbor</h3>
            <p>Vstupní rozbor pohybu — najdeme svalové dysbalance a přetížené řetězce, které bolest udržují.</p>
          </li>
          <li className="krok">
            <span className="krok__num">03</span>
            <h3>Fyzioterapie na míru</h3>
            <p>Manuální techniky, mobilizace, tejpování i cvičení podle metod, které sedí na váš problém.</p>
          </li>
          <li className="krok">
            <span className="krok__num">04</span>
            <h3>Fyzikální terapie</h3>
            <p>Vysokofrekvenční LASER, magnetoterapie, ultrazvuk a lymfatická masáž — na doléčení a úlevu.</p>
          </li>
        </ol>

        <div className="metody">
          <div className="metody__col">
            <p className="eyebrow eyebrow--dark">Metody a školy, ze kterých čerpáme</p>
            <ul className="metody__list">
              <li>Myoskeletální medicína podle prof. Lewita</li>
              <li>Terapie podle L. Mojžíšové</li>
              <li>Dynamická neuromuskulární stabilizace (DNS) prof. Koláře</li>
              <li>Proprioceptivní neuromuskulární facilitace (PNF)</li>
              <li>Bazální programy podle Čápové</li>
              <li>Feldenkraisova metoda</li>
            </ul>
          </div>
          <div className="metody__col">
            <p className="eyebrow eyebrow--dark">Na co se u nás objednávají</p>
            <ul className="metody__list">
              <li>Pooperační a poúrazová fyzioterapie</li>
              <li>Terapie sportovních zranění</li>
              <li>Terapie pánevního dna</li>
              <li>Terapie dýchacích poruch</li>
              <li>Fyzioterapie dětí od 4 let</li>
              <li>Ergonomie a kompenzační pohyb — poradenství</li>
            </ul>
          </div>
          <figure className="metody__media">
            <img src="/section-1.webp" alt="Cvičební a terapeutické pomůcky ve fyzioterapeutické ambulanci" />
          </figure>
        </div>
      </section>

      {/* ==================== SEKCE 2: DŮVĚRA / OBJEDNÁNÍ ==================== */}
      <section id="duvera" className="duvera" aria-labelledby="duvera-nadpis">
        <div className="duvera__grid">
          <figure className="duvera__media">
            <img src="/section-2.webp" alt="Recepce a čekárna ambulance La Santé v Ostravě" />
          </figure>

          <div className="duvera__copy">
            <p className="eyebrow eyebrow--dark">Jak se k nám objednat</p>
            <h2 id="duvera-nadpis">Zavoláte, my se ozveme zpět</h2>
            <p className="duvera__lede">
              Objednávky bere recepce v úterý 14–16 a ve čtvrtek 14–18. Když telefon
              nezvedneme, ozveme se vám zpět — nebo pošlete SMS a napíšeme.
            </p>

            <div className="kontakt">
              <a className="kontakt__row" href="tel:+420771166840">
                <span className="kontakt__label">Objednání &amp; recepce</span>
                <span className="kontakt__val">771 166 840</span>
              </a>
              <a className="kontakt__row" href="tel:+420596124242">
                <span className="kontakt__label">Pevná linka</span>
                <span className="kontakt__val">596 124 242</span>
              </a>
              <a className="kontakt__row" href="https://maps.google.com/?q=28.+října+1753/80,+Ostrava" target="_blank" rel="noreferrer">
                <span className="kontakt__label">Kde nás najdete</span>
                <span className="kontakt__val">28. října 1753/80, Ostrava · 1. patro, zvonek č. 4</span>
              </a>
            </div>
          </div>
        </div>

        <div className="pojistovny">
          <p className="eyebrow eyebrow--dark">Péči hradíme ze zdravotního pojištění</p>
          <ul className="pojistovny__list">
            <li><b>111</b> Všeobecná zdravotní pojišťovna</li>
            <li><b>201</b> Vojenská zdravotní pojišťovna</li>
            <li><b>211</b> ZP Ministerstva vnitra</li>
            <li><b>207</b> Oborová zdravotní pojišťovna</li>
            <li><b>205</b> Česká průmyslová zdravotní pojišťovna</li>
            <li><b>213</b> Revírní bratrská pokladna</li>
          </ul>
        </div>

        <div className="pripravte">
          <p className="eyebrow eyebrow--dark">Než přijdete na terapii</p>
          <div className="pripravte__cards">
            <div className="karta">
              <h3>Přijďte včas</h3>
              <p>Na objednanou terapii se dostavte nejvýš 5 minut předem. Dole zazvoňte na zvonek č. 4.</p>
            </div>
            <div className="karta">
              <h3>Vezměte si podložku</h3>
              <p>Tzv. perlan si zakoupíte při první návštěvě. Když ho zapomenete, dáme vám nový za 50 Kč.</p>
            </div>
            <div className="karta">
              <h3>Poukaz na pojišťovnu</h3>
              <p>Platný FT poukaz a zprávu lékaře specialisty přineste s sebou při čerpání hrazené péče.</p>
            </div>
            <div className="karta">
              <h3>Omluva 24 hodin předem</h3>
              <p>Nemůžete přijít? Dejte vědět telefonicky nebo SMS na 771 166 840 alespoň den dopředu.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
