import type { CSSProperties } from "react";

export default function Page() {
  const trades = [
    { n: "01", name: "Zemní práce", note: "Strojní i ruční výkopy, přípravy pod základy." },
    { n: "02", name: "Vodo · plyn · elektro", note: "Kompletní rozvody a instalace v jedné ruce." },
    { n: "03", name: "Topenářství", note: "Otopné soustavy od návrhu po zprovoznění." },
    { n: "04", name: "Zednictví a štukatérství", note: "Hrubá stavba, omítky, štuky, finální povrchy." },
    { n: "05", name: "Tesařství a klempířství", note: "Krovy, střechy, oplechování, okapy." },
    { n: "06", name: "Zámečnictví", note: "Zábradlí, konstrukce, kotvení, montáže." },
    { n: "07", name: "Malby a nátěry", note: "Interiér i fasáda, čisté dokončení stavby." },
    { n: "08", name: "Vrata a oplocení WIŚNIOWSKI", note: "Zástupce pro Ústecký kraj — montáž na klíč." },
  ];

  const stages = [
    { k: "Poradenství", d: "Sejdeme se na místě, projdeme záměr a rozpočet dřív, než cokoli podepíšete." },
    { k: "Projekt", d: "Zpracujeme projektovou dokumentaci nebo navážeme na tu vaši." },
    { k: "Realizace", d: "Doprava, mechanizace, subdodávky i materiál si zajistíme sami." },
    { k: "Kolaudace", d: "Stavbu předáme dokončenou a připravenou ke kolaudaci." },
  ];

  return (
    <main className="av">
      <header className="av-top">
        <a className="av-mark" href="#uvod" aria-label="AVALSTAV — úvod">
          <span className="av-mark__a">AVAL</span><span className="av-mark__b">STAV</span>
        </a>
        <nav className="av-nav" aria-label="Hlavní">
          <a href="#remesla">Řemesla</a>
          <a href="#postup">Jak stavíme</a>
          <a href="tel:+420605000555" className="av-nav__tel">605&nbsp;000&nbsp;555</a>
        </nav>
      </header>

      <section id="uvod" className="av-hero">
        <img className="av-hero__img" src="/hero.webp" alt="Rozestavěný objekt AVALSTAV v Ústí nad Labem — hrubá stavba připravená k dalším pracím" />
        <div className="av-hero__scrim" aria-hidden="true" />
        <div className="av-hero__inner">
          <p className="av-eyebrow">Stavební firma · Ústí nad Labem</p>
          <h1 className="av-hero__title">
            Postavíme to<br /><span className="av-hi">od výkopu po kolaudaci.</span>
          </h1>
          <p className="av-hero__lead">
            Přes 35&nbsp;let stavíme a rekonstruujeme na severu Čech. Vezmeme celý záměr —
            od prvního poradenství přes projekt až po předání hotové stavby.
          </p>
          <div className="av-hero__cta">
            <a className="av-btn av-btn--primary" href="tel:+420605000555">Zavolat 605&nbsp;000&nbsp;555</a>
            <a className="av-btn av-btn--ghost" href="mailto:avalstav@seznam.cz">Napsat e-mail</a>
          </div>
        </div>
        <div className="av-hero__meta" role="list">
          <div role="listitem"><b>35+</b><span>let na stavbách</span></div>
          <div role="listitem"><b>Vše</b><span>v jedné ruce</span></div>
          <div role="listitem"><b>Ústecký kraj</b><span>a okolí</span></div>
        </div>
      </section>

      <section id="remesla" className="av-sec av-sec--trades">
        <div className="av-sec__head">
          <p className="av-eyebrow av-eyebrow--dark">Co umíme sami</p>
          <h2 className="av-h2">Celá stavba, nebo jen jedno řemeslo.</h2>
          <p className="av-sec__lead">
            Uděláme komplexní zakázku od záměru po kolaudaci — nebo přijedeme jen na tu jednu
            profesi, která vám chybí. Dopravu, mechanizaci i materiál řešíme za vás.
          </p>
        </div>
        <div className="av-split">
          <ol className="av-trades">
            {trades.map((t) => (
              <li key={t.n} className="av-trade">
                <span className="av-trade__n">{t.n}</span>
                <span className="av-trade__body">
                  <span className="av-trade__name">{t.name}</span>
                  <span className="av-trade__note">{t.note}</span>
                </span>
              </li>
            ))}
          </ol>
          <figure className="av-figure">
            <img src="/section-1.webp" alt="Dřevěná terasa postavená firmou AVALSTAV jako venkovní obytný prostor" />
            <figcaption>
              <strong>Dřevěné terasy</strong> — pod značkou exoticketerasy.cz navrhneme a
              postavíme terasu, která z domu udělá další obytný prostor.
            </figcaption>
          </figure>
        </div>
      </section>

      <section id="postup" className="av-sec av-sec--trust">
        <div className="av-trust__grid">
          <figure className="av-figure av-figure--tall">
            <img src="/section-2.webp" alt="Detail stavby AVALSTAV — precizně provedená konstrukce a povrchy" />
          </figure>
          <div className="av-trust__text">
            <p className="av-eyebrow av-eyebrow--dark">Jak to u nás chodí</p>
            <h2 className="av-h2">Čtyři fáze, jeden zodpovědný tým.</h2>
            <p className="av-sec__lead">
              Nevíte si rady, kde začít? Ozvěte se. Projdeme s vámi projekt od začátku a řekneme
              rovnou, co dává smysl a co ne.
            </p>
            <ol className="av-stages">
              {stages.map((s, i) => (
                <li key={s.k} className="av-stage" style={{ "--i": i } as CSSProperties}>
                  <span className="av-stage__dot" aria-hidden="true" />
                  <span className="av-stage__k">{s.k}</span>
                  <span className="av-stage__d">{s.d}</span>
                </li>
              ))}
            </ol>
            <div className="av-contactcard">
              <p className="av-contactcard__lbl">Chcete stavět nebo rekonstruovat?</p>
              <a href="tel:+420605000555">605&nbsp;000&nbsp;555</a>
              <a href="mailto:avalstav@seznam.cz">avalstav@seznam.cz</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
