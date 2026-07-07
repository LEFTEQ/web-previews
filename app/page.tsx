import React from "react";

const sberneDvory = [
  "Mělník – Karolíny Světlé", "Mělník – Řípská", "Mělník – Rousovice", "Terezín",
  "Štětí", "Velemín", "Vehlovice", "Vysoká", "Lužec nad Vltavou", "Krabčice",
  "Lovosice", "Bohušovice nad Ohří", "Horní Beřkovice", "Malé Žernoseky", "Úštěk",
  "Snědovice", "Čížkovice", "Mnetěš", "Brozany nad Ohří", "Černouček", "Hoštka",
  "Chodouny", "Polepy", "Třebenice"
];

const sluzby = [
  {
    kod: "01",
    nazev: "Svoz komunálního odpadu",
    popis: "Pravidelný svoz popelnic a kontejnerů pro města, obce a domácnosti na Litoměřicku, Roudnicku a Mělnicku. Nádoby vyvezeme podle rozpisu, ve stanovený den."
  },
  {
    kod: "02",
    nazev: "Svoz bioodpadu a gastroodpadu",
    popis: "Hnědé nádoby na zahradní a kuchyňský odpad, oddělený svoz gastroodpadu z restaurací a jídelen. Bioodpad putuje k dalšímu zpracování, ne na skládku."
  },
  {
    kod: "03",
    nazev: "Třídicí linka a druhotné suroviny",
    popis: "Vytříděný plast, papír a kov dotřídíme na naší lince v Lovosicích a připravíme k dalšímu využití. Vykupujeme papír, kovy i další druhotné suroviny."
  },
  {
    kod: "04",
    nazev: "Sběrné dvory a mobilní sběry",
    popis: "Odevzdejte objemný a nebezpečný odpad na jednom z 24 sběrných dvorů. Pro obce zajišťujeme i mobilní sběry nebezpečných odpadů přímo na místě."
  }
];

export default function Page() {
  return (
    <main className="page">
      <header className="topbar">
        <a className="wordmark" href="#" aria-label="FCC BEC, Ústí nad Labem">
          <span className="wordmark__fcc">FCC</span>
          <span className="wordmark__bec">BEC</span>
          <span className="wordmark__loc">Ústí&nbsp;nad&nbsp;Labem</span>
        </a>
        <div className="topbar__hours">
          <span className="topbar__label">Příjem odpadu</span>
          <span className="topbar__value">Po–Pá&nbsp;7:00–14:00</span>
        </div>
      </header>

      <section className="hero">
        <div className="hero__media">
          <img
            src="/hero.webp"
            alt="Svozový vůz FCC BEC při obsluze nádob na odpad"
            className="hero__img"
          />
          <div className="hero__scrim" aria-hidden="true" />
        </div>

        <div className="hero__inner">
          <p className="hero__eyebrow">Odpady a kanalizace · od roku&nbsp;1993</p>
          <h1 className="hero__title">
            Váš odpad<br />
            <em>od popelnice</em><br />
            po druhotnou surovinu.
          </h1>
          <p className="hero__lead">
            Svážíme, třídíme a zpracováváme odpad pro města a obce na
            Litoměřicku, Roudnicku a Mělnicku. Kanalizace, sběrné dvory
            i svoz bioodpadu — jeden partner na celou cestu odpadu.
          </p>
          <div className="hero__actions">
            <a className="btn btn--solid" href="tel:+420416724111">Zavolat 416&nbsp;724&nbsp;111</a>
            <a className="btn btn--ghost" href="#sluzby">Prohlédnout služby</a>
          </div>
        </div>

        <div className="hero__ticker" aria-hidden="true">
          <div className="ticker">
            <span>24 sběrných dvorů</span><span className="dot">·</span>
            <span>svoz bioodpadu</span><span className="dot">·</span>
            <span>třídicí linka Lovosice</span><span className="dot">·</span>
            <span>čištění kanalizace</span><span className="dot">·</span>
            <span>výkup druhotných surovin</span><span className="dot">·</span>
            <span>24 sběrných dvorů</span><span className="dot">·</span>
            <span>svoz bioodpadu</span><span className="dot">·</span>
            <span>třídicí linka Lovosice</span><span className="dot">·</span>
            <span>čištění kanalizace</span><span className="dot">·</span>
            <span>výkup druhotných surovin</span><span className="dot">·</span>
          </div>
        </div>
      </section>

      <section className="services" id="sluzby">
        <div className="section-head">
          <p className="section-head__eyebrow">Co pro vás zajišťujeme</p>
          <h2 className="section-head__title">Kompletní odpadové hospodářství</h2>
        </div>

        <div className="services__grid">
          <div className="services__list">
            {sluzby.map((s) => (
              <article className="svc" key={s.kod}>
                <span className="svc__kod">{s.kod}</span>
                <div className="svc__body">
                  <h3 className="svc__nazev">{s.nazev}</h3>
                  <p className="svc__popis">{s.popis}</p>
                </div>
              </article>
            ))}
          </div>

          <figure className="services__figure">
            <img
              src="/section-1.webp"
              alt="Kontejnery a nádoby na tříděný odpad připravené k svozu"
              className="services__img"
            />
            <figcaption className="services__cap">
              Nádoby a kontejnery přistavíme, vyvezeme i vyměníme — pro obec
              i pro živnostníka.
            </figcaption>
          </figure>
        </div>

        <div className="kanal">
          <div className="kanal__text">
            <h3 className="kanal__nazev">Kanalizace a čištění</h3>
            <p>
              Tlakové čištění kanalizace, čerpání a odvoz odpadních vod,
              monitoring potrubí kamerou. Přijedeme s cisternou, ucpaný
              úsek pročistíme a předáme vám záznam z kamery.
            </p>
          </div>
          <a className="btn btn--solid" href="tel:+420416724111">Objednat výjezd</a>
        </div>
      </section>

      <section className="trust">
        <div className="trust__grid">
          <figure className="trust__figure">
            <img
              src="/section-2.webp"
              alt="Provoz třídicí linky FCC BEC v Lovosicích"
              className="trust__img"
            />
          </figure>

          <div className="trust__text">
            <p className="section-head__eyebrow">Kdo jsme</p>
            <h2 className="trust__title">
              Odpadové hospodářství, na které se spolehly
              celá města v Ústeckém kraji.
            </h2>
            <p className="trust__lead">
              FCC BEC, s.r.o. působí v nakládání s odpady a ochraně
              životního prostředí. Zajišťujeme komplexní systém
              odpadového hospodářství pro města, obce, podnikatele
              i živnostníky — od svozu přes sběrné dvory až po třídicí linku.
            </p>

            <ul className="refs">
              <li><span className="refs__mesto">Litoměřice</span><span className="refs__typ">svoz &amp; sběrné dvory</span></li>
              <li><span className="refs__mesto">Mělník</span><span className="refs__typ">svoz &amp; sběrné dvory</span></li>
              <li><span className="refs__mesto">Roudnice</span><span className="refs__typ">odpadové hospodářství</span></li>
              <li><span className="refs__mesto">Lovosice</span><span className="refs__typ">třídicí linka</span></li>
              <li><span className="refs__mesto">TS Lovosice s.r.o.</span><span className="refs__typ">technické služby</span></li>
            </ul>

            <div className="contact">
              <div className="contact__row">
                <span className="contact__k">Provozovna</span>
                <span className="contact__v">Prosmycká 88/2, 410&nbsp;02 Lovosice</span>
              </div>
              <div className="contact__row">
                <span className="contact__k">Provozní doba</span>
                <span className="contact__v">Po–Pá 7:00–15:30</span>
              </div>
              <div className="contact__row">
                <span className="contact__k">Telefon</span>
                <span className="contact__v"><a href="tel:+420416724111">416&nbsp;724&nbsp;111</a></span>
              </div>
            </div>
          </div>
        </div>

        <div className="dvory">
          <div className="dvory__head">
            <h3 className="dvory__title">Sběrné dvory — 24 míst v okolí</h3>
            <p className="dvory__sub">Objemný a nebezpečný odpad odevzdáte na nejbližším dvoře.</p>
          </div>
          <ul className="dvory__list">
            {sberneDvory.map((d) => (
              <li className="dvory__item" key={d}>{d}</li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
