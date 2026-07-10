import type { CSSProperties } from "react";

export default function Page() {
  const vyrobky = [
    {
      cislo: "01",
      nazev: "Zákusky a dorty",
      popis:
        "Věnečky, laskonky, špičky i dorty přesně podle vašich představ. Kde má být máslo, najdete máslo — ne tuk. Kam patří šlehačka, dáme pravou šlehačku, ne rostlinnou náhražku.",
      detail: "Na objednávku i denně v pultu",
    },
    {
      cislo: "02",
      nazev: "Svatební a vánoční cukroví",
      popis:
        "Ruční cukroví na váš velký den i na Vánoce. Domlouváme osobně nebo telefonicky, ať vše sedí na míru — od chuti po množství.",
      detail: "Objednávky osobně nebo na telefonu",
    },
    {
      cislo: "03",
      nazev: "Káva, zákusek a v létě zmrzlina",
      popis:
        "Zastavte se cestou na dobrou kávu se zákuskem. V létě roztáčíme zmrzlinu. Otevřeno máme i o víkendech a svátcích.",
      detail: "K posezení i s sebou",
    },
  ];

  return (
    <main className="page">
      <header className="topbar">
        <a className="wordmark" href="#" aria-label="Cukrárna Eliška, domovská stránka">
          <span className="wordmark__cukr">Cukrárna</span>
          <span className="wordmark__eliska">Eliška</span>
        </a>
        <nav className="nav" aria-label="Hlavní navigace">
          <a href="#vyrobky">Naše výrobky</a>
          <a href="#o-nas">O nás</a>
          <a href="#kontakt">Kontakt</a>
        </nav>
      </header>

      <section className="hero" aria-labelledby="hero-nadpis">
        <div className="hero__text">
          <p className="eyebrow">Rodinná cukrárna · Brno-Líšeň · od roku 2017</p>
          <h1 id="hero-nadpis">
            Ručně, s láskou a<br />
            <span className="hero__accent">bez náhražek.</span>
          </h1>
          <p className="hero__lead">
            Pravé máslo tam, kde má být máslo. Pravá šlehačka tam, kam patří
            šlehačka. Každý zákusek, dort i koláček děláme opravdu ručně na
            Ondráčkově ulici.
          </p>
          <div className="hero__actions">
            <a className="btn btn--primary" href="tel:+420732976578">
              Zavolat 732 976 578
            </a>
            <a className="btn btn--ghost" href="#vyrobky">
              Prohlédnout výrobky
            </a>
          </div>
        </div>
        <figure className="hero__figure">
          <img
            src="/hero.webp"
            alt="Ručně dělané zákusky a dorty z Cukrárny Eliška"
            className="hero__img"
            width={720}
            height={860}
          />
          <figcaption className="hero__ribbon">
            <span>Pečeme z nejkvalitnějších surovin</span>
          </figcaption>
        </figure>
      </section>

      <section id="vyrobky" className="vyrobky" aria-labelledby="vyrobky-nadpis">
        <div className="section-head">
          <p className="eyebrow eyebrow--dark">Co u nás najdete</p>
          <h2 id="vyrobky-nadpis">Z naší vitríny</h2>
        </div>
        <ol className="cards">
          {vyrobky.map((v) => (
            <li className="card" key={v.cislo}>
              <span className="card__cislo" aria-hidden="true">
                {v.cislo}
              </span>
              <h3>{v.nazev}</h3>
              <p>{v.popis}</p>
              <p className="card__detail">{v.detail}</p>
            </li>
          ))}
        </ol>
        <figure className="vyrobky__figure">
          <img
            src="/section-1.webp"
            alt="Detail ručně zdobených dortů z Cukrárny Eliška"
            width={1200}
            height={620}
          />
        </figure>
      </section>

      <section id="o-nas" className="o-nas" aria-labelledby="o-nas-nadpis">
        <div className="o-nas__media">
          <img
            src="/section-2.webp"
            alt="Cukrářky z Cukrárny Eliška při ruční výrobě"
            width={1000}
            height={760}
          />
        </div>
        <div className="o-nas__text">
          <p className="eyebrow eyebrow--dark">O nás</p>
          <h2 id="o-nas-nadpis">Rodinná cukrárna, která nešidí suroviny</h2>
          <p>
            Jsme rodinná cukrárna, která si zakládá na kvalitě. Díky
            dlouholetým zkušenostem vám nabídneme jen to nejlepší — zákusky,
            dorty na míru i svatební a vánoční cukroví. Pečeme pouze z těch
            nejkvalitnějších surovin a nepoužíváme žádné náhražky.
          </p>

          <div id="kontakt" className="info">
            <div className="info__block">
              <h3>Otevírací doba</h3>
              <dl className="hodiny">
                <div>
                  <dt>Pondělí – sobota</dt>
                  <dd>8:00 – 17:30</dd>
                </div>
                <div>
                  <dt>Neděle</dt>
                  <dd>13:00 – 17:30</dd>
                </div>
              </dl>
              <p className="info__pozn">
                V létě (prázdniny) běží cukrárna pondělí–sobota 8:00–17:30,
                neděle a svátky zavřeno. Lahůdky mají letní pauzu.
              </p>
            </div>
            <div className="info__block">
              <h3>Kde nás najdete</h3>
              <address className="kontakt">
                Ondráčkova 14<br />
                628 00 Brno<br />
                <a href="tel:+420732976578">732 976 578</a>
                <span className="kontakt__pozn">(pouze v provozní době)</span>
                <br />
                <a href="mailto:cukrarky@atlas.cz">cukrarky@atlas.cz</a>
                <span className="kontakt__pozn">
                  (objednávky osobně nebo telefonicky)
                </span>
              </address>
              <p className="info__pozn">
                Zásilkovna funguje v cukrárně od pondělí do pátku.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
