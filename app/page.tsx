import React from "react";

export default function Page() {
  const sluzby = [
    {
      cislo: "01",
      nazev: "Brýle na míru",
      popis:
        "Dioptrické i sluneční brýle pro děti i dospělé. Vyberete si obroučku ze širokého sortimentu světových značek, my k ní zabrousíme skla přesně podle vašeho předpisu.",
    },
    {
      cislo: "02",
      nazev: "Vyšetření zraku",
      popis:
        "Změříme vám zrak na počkání, přímo v provozovně. Poradíme s výběrem skel podle toho, jestli čtete, řídíte, nebo trávíte dny u monitoru.",
    },
    {
      cislo: "03",
      nazev: "Opravy a servis",
      popis:
        "Prasklý pantík, uvolněný šroubek, roztažená obroučka. Většinu oprav zvládneme na místě, dokud počkáte. Co nemáme skladem, rychle objednáme.",
    },
    {
      cislo: "04",
      nazev: "Optický pult z jiné doby",
      popis:
        "Vedle brýlí u nás najdete kompasy, buzoly, barometry, teploměry a vlhkoměry. Poctivé optické a měřicí přístroje, které jinde v Budějovicích neseženete.",
    },
  ];

  return (
    <main className="os">
      <header className="os-top">
        <a className="os-mark" href="#" aria-label="Optika Šůs a Zusková, České Budějovice">
          <span className="os-mark-line1">Optika</span>
          <span className="os-mark-line2">
            Šůs <span className="os-amp">&amp;</span> Zusková
          </span>
        </a>
        <nav className="os-nav" aria-label="Hlavní">
          <a href="#nabidka">Nabídka</a>
          <a href="#o-nas">O nás</a>
          <a className="os-tel" href="tel:+420386353029">386 353 029</a>
        </nav>
      </header>

      <section className="os-hero" aria-labelledby="os-hero-h">
        <div className="os-hero-copy">
          <p className="os-eyebrow">Oční optika · Kanovnická 5 · České Budějovice</p>
          <h1 id="os-hero-h">
            Vidět <span className="os-hl">ostře</span> je řemeslo.
            <br />U nás na Kanovnické už léta.
          </h1>
          <p className="os-lede">
            Změříme vám zrak na počkání, doporučíme obroučku, která vám sedne,
            a skla zabrousíme přesně podle předpisu. Bez objednání, bez spěchu,
            po lidsku.
          </p>
          <div className="os-hero-cta">
            <a className="os-btn" href="tel:+420386353029">Zavolat do optiky</a>
            <a className="os-btn os-btn-ghost" href="#nabidka">Co nabízíme</a>
          </div>
          <dl className="os-hours">
            <div>
              <dt>Po–Pá</dt>
              <dd>8:30 – 17:00</dd>
            </div>
            <div>
              <dt>So</dt>
              <dd>8:30 – 12:00</dd>
            </div>
          </dl>
        </div>
        <figure className="os-hero-img">
          <img
            src="/hero.webp"
            alt="Detail brýlových obrouček a optického vybavení v optice Šůs a Zusková"
            width={1200}
            height={1500}
          />
          <figcaption>Naše dílna na Kanovnické 5</figcaption>
        </figure>
      </section>

      <section className="os-services" id="nabidka" aria-labelledby="os-serv-h">
        <div className="os-serv-head">
          <p className="os-eyebrow os-eyebrow-dark">Nabídka služeb</p>
          <h2 id="os-serv-h">Od změření zraku po opravu pantíku</h2>
          <p className="os-serv-intro">
            Ať potřebujete brýle na čtení, sluneční brýle, které opravdu chrání,
            nebo jen dotáhnout šroubek — jsme optika, kam se dá zajít i jen tak.
          </p>
        </div>
        <ol className="os-serv-grid">
          {sluzby.map((s) => (
            <li className="os-serv-card" key={s.cislo}>
              <span className="os-serv-num" aria-hidden="true">
                {s.cislo}
              </span>
              <h3>{s.nazev}</h3>
              <p>{s.popis}</p>
            </li>
          ))}
        </ol>
        <figure className="os-serv-img">
          <img
            src="/section-1.webp"
            alt="Výběr brýlových obrouček vystavených v prodejně optiky"
            width={1400}
            height={900}
          />
        </figure>
      </section>

      <section className="os-about" id="o-nas" aria-labelledby="os-about-h">
        <figure className="os-about-img">
          <img
            src="/section-2.webp"
            alt="Interiér moderně zařízené optiky Šůs a Zusková v Českých Budějovicích"
            width={1200}
            height={1400}
          />
        </figure>
        <div className="os-about-copy">
          <p className="os-eyebrow os-eyebrow-dark">O nás</p>
          <h2 id="os-about-h">
            Optiku vedou dvě jména z&nbsp;jedné dílny
          </h2>
          <p>
            Šůs &amp; Zusková — odborné vzdělání a roky praxe za pultem.
            Staráme se o zdravý zrak Budějovičáků z Kanovnické ulice,
            kousek od Černé věže. Poradíme upřímně, i&nbsp;kdyby to znamenalo
            levnější obroučku, než pro kterou jste přišli.
          </p>
          <ul className="os-facts">
            <li>
              <span className="os-fact-label">Značky obrouček</span>
              <span className="os-fact-val">Světové i dostupné, ve všech cenách</span>
            </li>
            <li>
              <span className="os-fact-label">Měření zraku</span>
              <span className="os-fact-val">Na počkání, přímo v prodejně</span>
            </li>
            <li>
              <span className="os-fact-label">Kde nás najdete</span>
              <span className="os-fact-val">Kanovnická 5, 370 01 České Budějovice</span>
            </li>
          </ul>
          <div className="os-contact">
            <a href="tel:+420386353029">386 353 029</a>
            <a href="tel:+420604208948">604 208 948</a>
            <a href="mailto:optika.suszuskova@seznam.cz">optika.suszuskova@seznam.cz</a>
          </div>
        </div>
      </section>
    </main>
  );
}
