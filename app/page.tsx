import React from "react";

export default function Page() {
  const sluzby = [
    {
      code: "L1",
      title: "Kompletní elektroinstalace",
      desc: "Rozvody od rozvaděče po poslední zásuvku — novostavby, rekonstrukce, byty i provozovny. Projekt, tažení kabelů, zapojení a revize.",
      detail: "400 / 230 V",
    },
    {
      code: "L2",
      title: "Rozvaděče a jističe",
      desc: "Sečtení zátěže, návrh jištění, osazení rozvaděče a přehledné popisky každého okruhu. Víte, co kam patří.",
      detail: "proudové chrániče",
    },
    {
      code: "L3",
      title: "Světla a zásuvky",
      desc: "Přidání vpustí, přesun vypínačů, LED podhledy, venkovní osvětlení. Čistě, s minimem sekaček do zdi.",
      detail: "od jednoho bodu",
    },
    {
      code: "L4",
      title: "Revize a servis",
      desc: "Výchozí i pravidelné revize, hledání závad, oprava starých hliníkových rozvodů. Přijedeme i na poruchu.",
      detail: "revizní zpráva",
    },
  ];

  return (
    <main className="te">
      <header className="te-top">
        <a className="te-mark" href="#" aria-label="Troll elektro, domů">
          <span className="te-mark__spark" aria-hidden="true">
            <span className="te-bolt" />
          </span>
          <span className="te-mark__word">
            <b>TROLL</b>
            <em>elektro</em>
          </span>
        </a>
        <span className="te-top__place">Pardubice a okolí</span>
      </header>

      <section className="te-hero" aria-labelledby="te-hero-title">
        <div className="te-hero__img">
          <img
            src="/hero.webp"
            alt="Elektrikář Troll elektro zapojuje domácí rozvaděč"
            className="te-hero__photo"
          />
        </div>
        <div className="te-hero__panel">
          <p className="te-hero__eyebrow">Elektroinstalace · Pardubice</p>
          <h1 id="te-hero-title" className="te-hero__title">
            Aby to doma <span>drželo</span> a svítilo.
          </h1>
          <p className="te-hero__lead">
            Rozvaděče, zásuvky, světla i revize. Zapojíme nový byt nebo
            spravme, co vám po starém majiteli vypadá podezřele. Žádné
            improvizace pod omítkou.
          </p>
          <div className="te-hero__actions">
            <a className="te-btn te-btn--primary" href="tel:+420466000000">
              Zavolat elektrikáři
            </a>
            <a className="te-btn te-btn--ghost" href="#sluzby">
              Co děláme
            </a>
          </div>
          <ul className="te-hero__facts">
            <li>Vlastní revizní technik</li>
            <li>Poruchy do 24 hodin</li>
            <li>Zaměření zdarma</li>
          </ul>
        </div>
      </section>

      <section className="te-sec" id="sluzby" aria-labelledby="te-sluzby-title">
        <div className="te-sec__head">
          <p className="te-sec__eyebrow">Okruhy</p>
          <h2 id="te-sluzby-title" className="te-sec__title">
            Co vám zapojíme
          </h2>
          <p className="te-sec__note">
            Čtyři věci, kvůli kterým nám lidé východních Čech volají
            nejčastěji — od holostavby po přehořený jistič.
          </p>
        </div>

        <ol className="te-grid">
          {sluzby.map((s) => (
            <li className="te-card" key={s.code}>
              <span className="te-card__code" aria-hidden="true">
                {s.code}
              </span>
              <h3 className="te-card__title">{s.title}</h3>
              <p className="te-card__desc">{s.desc}</p>
              <span className="te-card__detail">{s.detail}</span>
            </li>
          ))}
        </ol>
      </section>

      <section className="te-about" aria-labelledby="te-about-title">
        <div className="te-about__media">
          <img
            src="/section-1.webp"
            alt="Otevřený bytový rozvaděč s přehledně popsanými jističi"
            className="te-about__img"
          />
          <img
            src="/section-2.webp"
            alt="Detail zapojení zásuvky a měření multimetrem"
            className="te-about__img te-about__img--small"
          />
        </div>
        <div className="te-about__text">
          <p className="te-sec__eyebrow">Proč Troll elektro</p>
          <h2 id="te-about-title" className="te-sec__title">
            Pardubický elektrikář, který po sobě uklidí
          </h2>
          <p className="te-about__body">
            Děláme elektroinstalace v Pardubicích a okolí už přes dvacet
            let. Začínali jsme u prodeje elektroniky, dnes tažeme kabely,
            skládáme rozvaděče a píšeme revizní zprávy, které obstojí
            u pojistovny i u kupce nemovitosti.
          </p>
          <ul className="te-trust">
            <li>
              <b>Živnostenské oprávnění &amp; úhradní pojistka</b>
              <span>Pracujeme leg`álně a pojištěně, na vaše riziko nu`la.</span>
            </li>
            <li>
              <b>Pevná cena před začátkem</b>
              <span>Rozpočet odsouhlasíte dřív, než sundáme první kryt.</span>
            </li>
            <li>
              <b>Termín, který platí</b>
              <span>Dohodnutý den přijedeme — i když je to jen zásuvka.</span>
            </li>
          </ul>
          <a className="te-btn te-btn--primary" href="tel:+420466000000">
            Domluvit příjezd
          </a>
        </div>
      </section>
    </main>
  );
}
