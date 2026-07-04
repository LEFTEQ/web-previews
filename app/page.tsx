import type { CSSProperties } from "react";

const sortiment = [
  {
    kod: "KO",
    nazev: "Kosmetika",
    detail:
      "Tělová, pleťová, vlasová i dekorativní kosmetika. Světové značky vedle české výroby — od každodenní péče po dárkové sety.",
  },
  {
    kod: "UK",
    nazev: "Úklid a čistota",
    detail:
      "Úklidové a čisticí prostředky, prací a mycí přípravky, technická drogerie pro domácnost i provoz.",
  },
  {
    kod: "ZA",
    nazev: "Zahrada a chov",
    detail:
      "Potřeby pro zahrádkáře, barvy a laky, chovatelské potřeby. Sezónní sortiment podle toho, co se zrovna hodí.",
  },
  {
    kod: "DP",
    nazev: "Dárky a papír",
    detail:
      "Dárkové zboží a ve vybraných prodejnách papírnictví i zdravá výživa. To, pro co jinam běháte zvlášť.",
  },
];

const prima = [
  "Velká sleva na první nákup po registraci",
  "Pravidelné slevy na běžné nákupy",
  "Mimořádné ceny na akční zboží",
  "Nabídky jen pro členy Prima klubu",
];

export default function Page() {
  return (
    <main className="page">
      <header className="topbar">
        <a className="wordmark" href="#uvod" aria-label="Prima Drogerie, úvod">
          <span className="wordmark__prima">Prima</span>
          <span className="wordmark__drog">Drogerie</span>
        </a>
        <nav className="nav" aria-label="Hlavní navigace">
          <a href="#sortiment">Sortiment</a>
          <a href="#prima">Prima karta</a>
          <a href="#kontakt">Prodejny</a>
        </nav>
      </header>

      <section className="hero" id="uvod" aria-labelledby="hero-title">
        <div className="hero__grid" aria-hidden="true">
          {Array.from({ length: 12 }).map((_, i) => (
            <span key={i} style={{ "--i": i } as CSSProperties} />
          ))}
        </div>

        <p className="hero__eyebrow">Síť širokosortimentních prodejen · Liberec a okolí</p>
        <h1 className="hero__title" id="hero-title">
          <span className="hero__line">U nás najdete</span>
          <span className="hero__line hero__line--mark">i to, co</span>
          <span className="hero__line hero__line--out">nehledáte.</span>
        </h1>
        <p className="hero__lead">
          Česká tradiční drogerie s regály narvanými až po strop. Kosmetika,
          úklid, zahrada, chov i dárky — a k tomu prodavačka, která poradí líp
          než návod na obalu.
        </p>
        <div className="hero__actions">
          <a className="btn btn--solid" href="#sortiment">
            Projít sortiment
          </a>
          <a className="btn btn--ghost" href="#prima">
            Jak funguje Prima karta
          </a>
        </div>
      </section>

      <section className="block" id="sortiment" aria-labelledby="sortiment-title">
        <div className="block__head">
          <p className="eyebrow">Sortiment a služby</p>
          <h2 className="block__title" id="sortiment-title">
            Čtyři regály, jedna zastávka
          </h2>
          <p className="block__intro">
            Nemusíte obejít půl města. Vedle světových značek drží prodejny
            Prima Drogerie i české výrobce — a míchají to tak, aby si vybral
            zahrádkář, maminka i řemeslník.
          </p>
        </div>

        <ul className="shelf">
          {sortiment.map((s) => (
            <li className="shelf__item" key={s.kod}>
              <span className="shelf__code" aria-hidden="true">
                {s.kod}
              </span>
              <h3 className="shelf__name">{s.nazev}</h3>
              <p className="shelf__detail">{s.detail}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="block block--dark" id="prima" aria-labelledby="prima-title">
        <div className="prima">
          <div className="prima__text">
            <p className="eyebrow eyebrow--light">Prima karta &amp; Prima klub</p>
            <h2 className="block__title" id="prima-title">
              Věrnost, která se počítá u kasy
            </h2>
            <p className="block__intro">
              Registrace zabere minutu na prodejně. Pak už jen ukazujete kartu a
              ceny padají — bez aplikací, bez háčků, bez malých písmen.
            </p>
            <ul className="perks">
              {prima.map((p, i) => (
                <li className="perks__item" key={p}>
                  <span className="perks__num" aria-hidden="true">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {p}
                </li>
              ))}
            </ul>
          </div>

          <aside className="card" id="kontakt" aria-label="Kontakt a prodejny">
            <div className="card__stripe" aria-hidden="true" />
            <p className="card__label">Prima karta</p>
            <p className="card__brand">Prima Drogerie</p>
            <dl className="card__meta">
              <div>
                <dt>Potřebujete poradit?</dt>
                <dd>
                  <a href="tel:+420777676434">+420 777 676 434</a>
                </dd>
              </div>
              <div>
                <dt>Napište nám</dt>
                <dd>
                  <a href="mailto:info@primadrogerie.cz">info@primadrogerie.cz</a>
                </dd>
              </div>
              <div>
                <dt>Sledujte nás</dt>
                <dd>@primadrogerie · FB @primadrogerieofficial</dd>
              </div>
            </dl>
          </aside>
        </div>
      </section>
    </main>
  );
}
