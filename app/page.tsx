export default function Page() {
  const sluzby = [
    {
      cislo: "01",
      nazev: "Pozemní stavby na klíč",
      popis:
        "Rodinné domy, bytové domy i komerční objekty od základové desky po kolaudaci. Vedeme stavbu jako jeden dodavatel — vy máte jeden termín, jednu smlouvu a jednoho stavbyvedoucího na telefonu.",
    },
    {
      cislo: "02",
      nazev: "Dřevostavby",
      popis:
        "Difuzně otevřené konstrukce z KVH hranolů a dřevovláknité izolace. Rychlá montáž, hotová hrubá stavba během několika dní a zdravé vnitřní klima bez plastů ve stěně.",
    },
    {
      cislo: "03",
      nazev: "Rekonstrukce a přístavby",
      popis:
        "Zásahy do stávajících objektů, kde záleží na detailu — sanace zdiva, nové stropy, zateplení fasád. Pracujeme i v obydlených domech s ohledem na provoz.",
    },
    {
      cislo: "04",
      nazev: "Inženýrská příprava",
      popis:
        "Než se kopne, vyřešíme přípojky, zpevněné plochy a terénní úpravy. Koordinujeme subdodavatele tak, aby na sebe navazovali a stavba nestála.",
    },
  ]

  const reference = [
    { nazev: "Resort Hluboký dvůr", typ: "Ubytovací a wellness komplex" },
    { nazev: "Hotel Hluboký dvůr, a.s.", typ: "Hotelový provoz" },
    { nazev: "Park Sportu Hrubá Voda", typ: "Sportovní areál" },
    { nazev: "Relax centrum Kolštejn", typ: "Relaxační centrum" },
    { nazev: "Roots and Roofs", typ: "Developerský projekt" },
  ]

  return (
    <main className="page">
      <header className="top">
        <a className="wordmark" href="#" aria-label="TOMA Olomouc, domovská stránka">
          <span className="wordmark__t">TOMA</span>
          <span className="wordmark__sub">Olomouc · stavíme od základů</span>
        </a>
        <nav className="nav" aria-label="Hlavní navigace">
          <a href="#sluzby">Co stavíme</a>
          <a href="#reference">Reference</a>
          <a href="#kontakt">Kontakt</a>
        </nav>
      </header>

      <section className="hero" aria-labelledby="hero-nadpis">
        <div className="hero__grid">
          <div className="hero__text">
            <p className="eyebrow">Stavební firma · Olomoucko · od základové desky po klíč</p>
            <h1 id="hero-nadpis" className="hero__nadpis">
              Postavíme dům,
              <br />
              <span className="hero__zvyraznit">který přežije</span>
              <br />
              tři generace.
            </h1>
            <p className="hero__moto">
              „Nic není obtížné pro toho, kdo chce.“ Podle toho stavíme —
              rodinné a bytové domy, dřevostavby i celé resorty na Hané.
            </p>
            <div className="hero__akce">
              <a className="btn btn--primar" href="#kontakt">Nezávazně poptat stavbu</a>
              <a className="btn btn--ghost" href="#reference">Prohlédnout realizace</a>
            </div>
          </div>
          <figure className="hero__media">
            <img
              src="/hero.webp"
              alt="Rozestavěný objekt firmy TOMA Olomouc v hrubé stavbě"
              className="hero__img"
            />
            <figcaption className="hero__cedule">
              <span className="cedule__radek">Stavba č.</span>
              <span className="cedule__cislo">TOMA / OL</span>
              <span className="cedule__radek">Family Business Network Czech</span>
            </figcaption>
          </figure>
        </div>
      </section>

      <section id="sluzby" className="sluzby" aria-labelledby="sluzby-nadpis">
        <div className="sekce-hlava">
          <p className="eyebrow">Rozpočet položek</p>
          <h2 id="sluzby-nadpis">Co pro vás postavíme</h2>
          <p className="sekce-uvod">
            Jsme jeden dodavatel pro celou stavbu. Pružně reagujeme na změny
            a díky vztahům s prověřenými subdodavateli je řešíme za pochodu —
            ne dopisem po dvou týdnech.
          </p>
        </div>
        <ol className="vykaz">
          {sluzby.map((s) => (
            <li key={s.cislo} className="polozka">
              <span className="polozka__cislo" aria-hidden="true">{s.cislo}</span>
              <div className="polozka__telo">
                <h3 className="polozka__nazev">{s.nazev}</h3>
                <p className="polozka__popis">{s.popis}</p>
              </div>
            </li>
          ))}
        </ol>
        <figure className="sluzby__foto">
          <img
            src="/section-1.webp"
            alt="Detail stavební konstrukce a materiálu na stavbě TOMA Olomouc"
          />
        </figure>
      </section>

      <section id="reference" className="onas" aria-labelledby="onas-nadpis">
        <div className="onas__grid">
          <figure className="onas__foto">
            <img
              src="/section-2.webp"
              alt="Dokončená realizace stavební firmy TOMA Olomouc"
            />
          </figure>
          <div className="onas__text">
            <p className="eyebrow">O firmě &amp; reference</p>
            <h2 id="onas-nadpis">Rodinná firma, na kterou se dá spolehnout</h2>
            <p>
              TOMA Olomouc chce být schopnou a solidní organizací na stavebním
              trhu — takovou, která pružně reaguje na poptávku a nezmizí, když
              přijde reklamace. Průběžně sledujeme nové technologie a materiály,
              abychom drželi kvalitu i tempo.
            </p>
            <p className="onas__clenstvi">
              Jsme členem <strong>Family Business Network Czech</strong>.
            </p>
            <p className="reference__nadpisek">Vybrané realizace na Olomoucku:</p>
            <ul className="reference">
              {reference.map((r) => (
                <li key={r.nazev} className="reference__item">
                  <span className="reference__nazev">{r.nazev}</span>
                  <span className="reference__typ">{r.typ}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </main>
  )
}
