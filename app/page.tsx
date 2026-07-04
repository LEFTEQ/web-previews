import type { CSSProperties } from "react";

export default function Page() {
  const apparatus = [
    {
      no: "01",
      name: "Kladina",
      note: "Deset centimetrů šířky a nula prostoru pro chybu. Tady se učí soustředění, které holky pak potřebují i mimo tělocvičnu.",
    },
    {
      no: "02",
      name: "Přeskok",
      note: "Rozběh, odraz z můstku, let. Vysvětlujeme, proč se nebát rychlosti — a jak dopadnout tak, aby to nebolelo.",
    },
    {
      no: "03",
      name: "Prostná",
      note: "Salta, přemety a vazby na žíněnce. Od kotoulu k prvním akrobatickým řadám vede docela dlouhá cesta a my ji jdeme trpělivě.",
    },
    {
      no: "04",
      name: "Bradla a hrazda",
      note: "Síla v pažích, cit pro švih, odvaha pustit se. Chlapecká gymnastika u nás pořád žije, i když je kluků míň.",
    },
  ];

  const podium = [
    {
      place: "3.",
      where: "Švýcarsko · mezinárodní závody",
      what: "Druhá nejlepší známka na kladině ve startovním poli 41 gymnastek — a to naše nejmladší závodily proti o čtyři roky starším.",
    },
    {
      place: "1.",
      where: "Německo · finále na nářadích",
      what: "Emička brala zlato na prostných a bronz na přeskoku. Starší dívky přidaly dvě stříbra a bronz. Do Plzně jsme vezli plnou tašku medailí.",
    },
    {
      place: "6.",
      where: "Praha · Olympiáda dětí a mládeže",
      what: "Ela s Davidem ve skocích na trampolíně postoupili do finále a skončili šestí — přitom jsou to sportovní gymnasté, synchron trénovali až na místě.",
    },
  ];

  return (
    <main className="sp">
      <header className="sp-nav">
        <a className="sp-mark" href="#uvod" aria-label="Sokol Plzeň 1 — úvod">
          <span className="sp-mark-sokol">Sokol</span>
          <span className="sp-mark-city">
            Plzeň<span className="sp-mark-one">1</span>
          </span>
        </a>
        <nav className="sp-links" aria-label="Hlavní">
          <a href="#narazdi">Na čem cvičíme</a>
          <a href="#sezona">Sezóna</a>
          <a href="#sokolovna">Sokolovna</a>
        </nav>
      </header>

      <section className="sp-hero" id="uvod">
        <div className="sp-hero-copy">
          <p className="sp-eyebrow">Tělocvičná jednota · Plzeň · od dob prvních Sokolů</p>
          <h1 className="sp-hero-title">
            Deset centimetrů
            <span className="sp-hero-em">kladiny</span>
            a spousta odvahy.
          </h1>
          <p className="sp-hero-lede">
            Učíme plzeňské holky a kluky sportovní gymnastiku — od prvního
            kotoulu po saltové vazby. Malé skupiny, trenérky, které to samy
            závodily, a nářadí, na kterém se dá růst až k mezinárodním startům.
          </p>
          <div className="sp-hero-cta">
            <a className="sp-btn" href="#narazdi">
              Chci na první trénink
            </a>
            <a className="sp-btn sp-btn--ghost" href="#sezona">
              Jak se nám daří
            </a>
          </div>
        </div>
        <figure className="sp-hero-figure">
          <img
            src="/hero.webp"
            alt="Mladá gymnastka Sokola Plzeň 1 na kladině během cvičení"
            className="sp-hero-img"
          />
          <figcaption className="sp-hero-cap">
            Naše gymnastky trénují v plzeňské sokolovně po celý týden.
          </figcaption>
        </figure>
      </section>

      <section className="sp-section" id="narazdi">
        <div className="sp-section-head">
          <p className="sp-eyebrow">Na čem cvičíme</p>
          <h2 className="sp-section-title">Čtyři nářadí, jedna parta</h2>
          <p className="sp-section-lede">
            Sportovní gymnastika není jeden pohyb, ale skládačka. U každého
            nářadí se učí něco jiného — a dohromady z toho vyroste gymnastka,
            která se nebojí.
          </p>
        </div>
        <ol className="sp-apparatus">
          {apparatus.map((a) => (
            <li className="sp-app" key={a.no}>
              <span className="sp-app-no" aria-hidden="true">
                {a.no}
              </span>
              <div className="sp-app-body">
                <h3 className="sp-app-name">{a.name}</h3>
                <p className="sp-app-note">{a.note}</p>
              </div>
            </li>
          ))}
        </ol>
        <figure className="sp-strip">
          <img
            src="/section-1.webp"
            alt="Gymnastky Sokola Plzeň 1 při tréninku na nářadí"
            className="sp-strip-img"
          />
        </figure>
      </section>

      <section className="sp-season" id="sezona">
        <div className="sp-section-head">
          <p className="sp-eyebrow sp-eyebrow--light">Sezóna 2025 / 2026</p>
          <h2 className="sp-section-title">Kam nás gymnastika dovezla</h2>
          <p className="sp-section-lede">
            Nechlubíme se rádi, ale tohle si zaslouží být vidět. Naše nejmladší
            závodí proti starším a stejně vozí medaile domů do Plzně.
          </p>
        </div>
        <div className="sp-podium">
          {podium.map((p) => (
            <article className="sp-result" key={p.where}>
              <div className="sp-result-place" aria-hidden="true">
                {p.place}
              </div>
              <p className="sp-result-where">{p.where}</p>
              <p className="sp-result-what">{p.what}</p>
            </article>
          ))}
        </div>
        <p className="sp-season-foot">
          A doma jsme uspořádali tradiční Jarní pohár — 186 závodnic a
          závodníků z Česka, Rakouska i Německa, 18 pohárů pro naše členy.
        </p>
      </section>

      <section className="sp-about" id="sokolovna">
        <figure className="sp-about-figure">
          <img
            src="/section-2.webp"
            alt="Sokolovna Sokola Plzeň 1 zevnitř"
            className="sp-about-img"
          />
        </figure>
        <div className="sp-about-copy">
          <p className="sp-eyebrow">Naše sokolovna</p>
          <h2 className="sp-section-title">Rádi Vás uvidíme v tělocvičně</h2>
          <p className="sp-about-text">
            Jsme Tělocvičná jednota Sokol Plzeň 1 — kus plzeňské sokolské
            tradice, který drží pohromadě díky trenérkám a rodičům. Vítáme děti,
            které chtějí zkusit gymnastiku poprvé, i ty, které to myslí vážně a
            míří na závody.
          </p>
          <ul className="sp-facts">
            <li>
              <span className="sp-fact-k">Kde</span>
              <span className="sp-fact-v">Plzeň, v naší sokolovně</span>
            </li>
            <li>
              <span className="sp-fact-k">Pro koho</span>
              <span className="sp-fact-v">Holky i kluci, od předškoláků výš</span>
            </li>
            <li>
              <span className="sp-fact-k">Co děláme</span>
              <span className="sp-fact-v">Sportovní gymnastika, závodní i pro radost</span>
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}
