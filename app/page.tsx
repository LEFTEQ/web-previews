import React from "react";

export default function Page() {
  const sluzby = [
    {
      cislo: "01",
      nazev: "Konzervační ošetření",
      popis:
        "Šetrné ošetření zubního kazu a výplně, které vydrží. Pracujeme pod zvětšením a s ohledem na to, aby vám ze zubu zbylo co nejvíc zdravé tkáně.",
    },
    {
      cislo: "02",
      nazev: "Protetika",
      popis:
        "Estetické i funkční nahrazení chybějících zubů. Navrhneme řešení, se kterým se dobře kouše i usmívá — a které vám vydrží roky.",
    },
    {
      cislo: "03",
      nazev: "Korunky a můstky z vlastní laboratoře",
      popis:
        "Celokeramické a metalokeramické korunky a můstky zhotovené s péčí přímo u nás v prvním patře. Kratší cesta mezi ordinací a laboratoří znamená přesnější výsledek.",
    },
  ];

  const hodiny = [
    { den: "Pondělí", cas: "7:30–16:30" },
    { den: "Úterý", cas: "7:30–14:30" },
    { den: "Středa", cas: "12:00–19:00" },
    { den: "Čtvrtek", cas: "7:30–16:30" },
    { den: "Pátek", cas: "7:30–12:30" },
  ];

  return (
    <main className="fd">
      <header className="fd-nav" aria-label="Hlavní navigace">
        <a className="fd-word" href="#uvod" aria-label="FutureDent, domů">
          <span className="fd-word__future">Future</span>
          <span className="fd-word__dent">Dent</span>
          <span className="fd-word__dot" aria-hidden="true">·</span>
        </a>
        <nav className="fd-links">
          <a href="#sluzby">Služby</a>
          <a href="#klinika">Klinika</a>
          <a className="fd-nav__tel" href="tel:+420777732414">+420 777 732 414</a>
        </nav>
      </header>

      <section className="fd-hero" id="uvod">
        <div className="fd-hero__media">
          <img
            src="/hero.webp"
            alt="Ordinace FutureDent ve zrekonstruované vile z roku 1921 v Českých Budějovicích"
            className="fd-hero__img"
          />
          <div className="fd-hero__wash" aria-hidden="true" />
        </div>

        <div className="fd-hero__inner">
          <p className="fd-eyebrow">Zubní ordinace &amp; laboratoř · České Budějovice</p>
          <h1 className="fd-hero__title">
            Váš krásný úsměv<br />
            je i <span className="fd-hero__accent">naše radost</span>
          </h1>
          <p className="fd-hero__lead">
            Ve zrekonstruované vile z&nbsp;roku 1921 se staráme o&nbsp;vaše zuby
            poctivě, bez spěchu a&nbsp;s&nbsp;vlastní zubní laboratoří přímo v&nbsp;domě.
          </p>
          <div className="fd-hero__cta">
            <a className="fd-btn" href="tel:+420777732414">Objednat se telefonicky</a>
            <a className="fd-btn fd-btn--ghost" href="#sluzby">Prohlédnout služby</a>
          </div>

          <p className="fd-hero__note">
            Kvůli nejvyšší úrovni péče nemáme smlouvy se zdravotními pojišťovnami —
            ošetření je hrazené přímo.
          </p>
        </div>

        <div className="fd-vila" aria-label="Rozvržení domu">
          <div className="fd-vila__row">
            <span className="fd-vila__floor">1. patro</span>
            <span className="fd-vila__name">Laboratoř · Lukáš Bursík</span>
            <a className="fd-vila__tel" href="tel:+420608441567">608 441 567</a>
          </div>
          <div className="fd-vila__row fd-vila__row--ground">
            <span className="fd-vila__floor">Přízemí</span>
            <span className="fd-vila__name">Ordinace · MDDr.&nbsp;Jaroslav Švepeš</span>
            <a className="fd-vila__tel" href="tel:+420777732414">777 732 414</a>
          </div>
        </div>
      </section>

      <section className="fd-sluzby" id="sluzby">
        <div className="fd-sec-head">
          <p className="fd-eyebrow fd-eyebrow--dark">Co pro vás děláme</p>
          <h2 className="fd-h2">Tři věci, které umíme dělat pořádně</h2>
        </div>

        <div className="fd-sluzby__grid">
          <div className="fd-sluzby__media">
            <img
              src="/section-1.webp"
              alt="Detail zubního ošetření v ordinaci FutureDent"
              className="fd-img"
            />
          </div>
          <ol className="fd-list">
            {sluzby.map((s) => (
              <li className="fd-card" key={s.cislo}>
                <span className="fd-card__num" aria-hidden="true">{s.cislo}</span>
                <div className="fd-card__body">
                  <h3 className="fd-card__title">{s.nazev}</h3>
                  <p className="fd-card__text">{s.popis}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="fd-klinika" id="klinika">
        <div className="fd-klinika__grid">
          <div className="fd-klinika__text">
            <p className="fd-eyebrow">Naše klinika</p>
            <h2 className="fd-h2 fd-h2--light">
              Vila z&nbsp;roku 1921, kde se moderní stomatologie potkává s&nbsp;klidem.
            </h2>
            <p className="fd-klinika__lead">
              Nabízíme tu nejlepší možnou zubní péči — postavenou na poctivém a
              svědomitém přístupu k&nbsp;pacientům a na moderních trendech současné
              stomatologie. Ordinace i&nbsp;laboratoř jsou pod jednou střechou,
              takže vaše korunky a&nbsp;můstky nevznikají někde daleko, ale u&nbsp;nás v&nbsp;domě.
            </p>

            <dl className="fd-hodiny">
              <p className="fd-hodiny__title">Ordinační hodiny</p>
              {hodiny.map((h) => (
                <div className="fd-hodiny__row" key={h.den}>
                  <dt>{h.den}</dt>
                  <dd>{h.cas}</dd>
                </div>
              ))}
            </dl>

            <a className="fd-btn fd-btn--onlight" href="tel:+420777732414">
              Zavolat do ordinace
            </a>
          </div>

          <div className="fd-klinika__media">
            <img
              src="/section-2.webp"
              alt="Interiér zrekonstruované vily, ve které sídlí FutureDent v Českých Budějovicích"
              className="fd-img"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
