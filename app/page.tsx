import type { CSSProperties } from "react";

export default function Page() {
  const piva = [
    {
      cislo: "10°",
      nazev: "Světlé výčepní",
      popis:
        "Lehčí, pitelné, s jemnou chmelovou hořkostí. Denní pivo, které nepřebije oběd ani řeč u stolu.",
    },
    {
      cislo: "11°",
      nazev: "Světlý ležák",
      popis:
        "Plné tělo, žatecký chmel, poctivá dozrálost. Třicet dní ve sklepě u dvou stupňů — a je to znát.",
    },
    {
      cislo: "12°",
      nazev: "Polotmavý speciál",
      popis:
        "Karamelová hloubka a delší dozvuk. Várky bývají menší — na speciál se vyplatí zavolat dopředu.",
    },
  ];

  const kroky = [
    {
      faze: "Varna",
      teplota: "90 min varu",
      text:
        "Rozemletý moravský slad se za rostoucích teplot mění ve sladinu. Dvourmutový dekokční způsob, chmel žatecký, voda z místních zdrojů. Devadesát minut varu — a máme mladinu.",
    },
    {
      faze: "Spilka",
      teplota: "10 °C · 7–10 dní",
      text:
        "Otevřené kvasné kádě, teplota deset stupňů. Cukry se mění v alkohol a CO₂, kvasnice po práci klesají ke dnu. Klasicky, po ruce, jak se to dělalo dřív.",
    },
    {
      faze: "Ležácký sklep",
      teplota: "2 °C · min. 30 dní",
      text:
        "Nejmíň měsíc leží pivo u dvou stupňů. Přirozeně se sytí oxidem uhličitým, chuť se zakulacuje a dolaďuje. Nikam nespěcháme — dozrálý ležák se nedá uspěchat.",
    },
  ];

  return (
    <main className="pj">
      <a className="pj-skip" href="#nabidka">
        Přeskočit na naše piva
      </a>

      <header className="pj-topbar">
        <span className="pj-wordmark" aria-label="Pivovar Jadrníček">
          <span className="pj-wordmark__top">PIVOVAR</span>
          <span className="pj-wordmark__main">Jadrníček</span>
        </span>
        <span className="pj-topbar__note">Náměšť na Hané · od 2014</span>
      </header>

      {/* HERO */}
      <section className="pj-hero">
        <div className="pj-hero__media">
          <img
            src="/hero.webp"
            alt="Otevřené kvasné kádě na spilce Pivovaru Jadrníček s hustou pěnovou přikrývkou kvasícího piva"
            className="pj-hero__img"
            width={1600}
            height={1100}
          />
          <span className="pj-hero__scrim" aria-hidden="true" />
        </div>

        <div className="pj-hero__panel">
          <p className="pj-eyebrow">Nepasterizované · nefiltrované · otevřená spilka</p>
          <h1 className="pj-hero__title">
            Pivo, které
            <br />
            dýchá ve
            <br />
            <em>dřevěné kádi.</em>
          </h1>
          <p className="pj-hero__lead">
            Vaříme klasickou dvourmutovou metodou z moravského sladu a žateckého
            chmele. Kvasíme otevřeně, ležíme dlouho. Tak, jak se v Náměšti na
            Hané vařilo už roku 1590.
          </p>
          <div className="pj-hero__actions">
            <a className="pj-btn pj-btn--solid" href="tel:+420775134511">
              Objednat sud dopředu
            </a>
            <a className="pj-btn pj-btn--ghost" href="#hospudka">
              Zajít na pivo
            </a>
          </div>
        </div>
      </section>

      {/* SEKCE 1 — CESTA PIVA + NABÍDKA */}
      <section className="pj-brew" id="nabidka">
        <div className="pj-brew__intro">
          <p className="pj-eyebrow pj-eyebrow--dark">Cesta várky</p>
          <h2 className="pj-h2">Od sladu k ležáku vede tři zastávky.</h2>
          <p className="pj-brew__note">
            Žádné zkratky, žádná pasterizace ani filtrace. Každý krok má svou
            teplotu a svůj čas — a ten se nedá obejít.
          </p>
        </div>

        <ol className="pj-steps">
          {kroky.map((k, i) => (
            <li className="pj-step" key={k.faze}>
              <span className="pj-step__num">{String(i + 1).padStart(2, "0")}</span>
              <div className="pj-step__body">
                <h3 className="pj-step__title">{k.faze}</h3>
                <span className="pj-step__meta">{k.teplota}</span>
                <p className="pj-step__text">{k.text}</p>
              </div>
            </li>
          ))}
        </ol>

        <div className="pj-taps">
          <div className="pj-taps__head">
            <h3 className="pj-h3">Co teče z našich pípy</h3>
            <p className="pj-taps__sub">
              Ceníme si stálic i speciálů. Na aktuální várku speciálu se raději
              zeptejte předem.
            </p>
          </div>
          <ul className="pj-pours">
            {piva.map((p) => (
              <li className="pj-pour" key={p.nazev}>
                <span className="pj-pour__deg">{p.cislo}</span>
                <div>
                  <h4 className="pj-pour__name">{p.nazev}</h4>
                  <p className="pj-pour__desc">{p.popis}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <figure className="pj-figure">
          <img
            src="/section-1.webp"
            alt="Detail várny Pivovaru Jadrníček — měděná varní nádoba během vaření mladiny"
            className="pj-figure__img"
            width={1400}
            height={900}
          />
          <figcaption className="pj-figure__cap">
            Varna, kde všechno začíná — dvourmutový dekokční způsob.
          </figcaption>
        </figure>
      </section>

      {/* SEKCE 2 — PRODEJNA + HOSPŮDKA */}
      <section className="pj-visit" id="hospudka">
        <div className="pj-visit__media">
          <img
            src="/section-2.webp"
            alt="Pivovarská hospůdka Jadrníček s letní zahrádkou a čepovaným pivem"
            className="pj-visit__img"
            width={1400}
            height={1000}
          />
        </div>

        <div className="pj-visit__content">
          <p className="pj-eyebrow pj-eyebrow--dark">Přijďte za pivem</p>
          <h2 className="pj-h2">Dvě adresy, jeden dvůr.</h2>

          <div className="pj-cards">
            <article className="pj-card">
              <h3 className="pj-card__title">Podniková prodejna</h3>
              <p className="pj-card__text">
                Sudové i lahvové pivo, trička, sklenice, tašky a dárková balení.
                Sudy skladem ve velikostech 10, 15, 20, 30 a 50 litrů. Na
                sudové a speciál volejte a objednejte předem.
              </p>
              <dl className="pj-card__facts">
                <div>
                  <dt>Otevřeno</dt>
                  <dd>Po–Pá 9–16 h</dd>
                </div>
                <div>
                  <dt>Objednávky</dt>
                  <dd>
                    <a href="tel:+420775134511">+420 775 134 511</a>
                  </dd>
                </div>
              </dl>
              <a className="pj-btn pj-btn--solid" href="tel:+420775134511">
                Zavolat a objednat pivo
              </a>
            </article>

            <article className="pj-card">
              <h3 className="pj-card__title">Pivovarská hospůdka</h3>
              <p className="pj-card__text">
                Šest perfektně ošetřených piv na čepu, lednice plná lahví a
                studené pochoutky od lokálních výrobců. Kapacita kolem padesáti
                lidí a velká letní zahrádka hned vedle pivovaru.
              </p>
              <dl className="pj-card__facts">
                <div>
                  <dt>Rezervace stolu</dt>
                  <dd>
                    <a href="tel:+420736266137">+420 736 266 137</a>
                  </dd>
                </div>
                <div>
                  <dt>Kdy volat</dt>
                  <dd>po 13:00</dd>
                </div>
              </dl>
              <a className="pj-btn pj-btn--ghost pj-btn--ghost-dark" href="tel:+420736266137">
                Rezervovat stůl
              </a>
            </article>
          </div>

          <p className="pj-visit__addr">
            Pivovar Jadrníček · Komenského 318 · 783 44 Náměšť na Hané
          </p>
        </div>
      </section>
    </main>
  );
}
