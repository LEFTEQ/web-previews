import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AA – účetní, s.r.o. | Účetnictví a mzdy pro firmy z Liberecka",
  description:
    "Vedeme účetnictví, daňovou evidenci a mzdy malým a středním firmám na Liberecku. Online komunikace, minimum návštěv, zastupování na úřadech. Kancelář v Krásné Studánce.",
  openGraph: {
    title: "AA – účetní, s.r.o. — účetnictví, které máte pod kontrolou",
    description:
      "Účetnictví, daně a mzdy pro malé a střední firmy z Liberecka. Online komunikace, minimum návštěv, zastupování na úřadech.",
    type: "website",
    locale: "cs_CZ",
    images: [{ url: "/hero.webp" }],
  },
};

const sluzby = [
  {
    kod: "UCT",
    nazev: "Daňová evidence a účetnictví",
    popis:
      "Kompletní vedení účetnictví i jednodušší daňové evidence. Zaúčtujeme doklady, ohlídáme DPH a připravíme daňové přiznání — vy dostanete čísla, kterým rozumíte.",
    body: [
      "Zaúčtování dokladů a měsíční přehledy",
      "Přiznání k DPH i dani z příjmů",
      "Podklady pro banku a dotace",
    ],
  },
  {
    kod: "MZD",
    nazev: "Mzdy a personalistika",
    popis:
      "Zpracujeme výplaty, odvody a personální agendu za celý tým. Zaměstnanci mají výplatnice včas, úřady své hlášení a vy klid.",
    body: [
      "Výplaty, odvody na OSSZ a pojišťovny",
      "Nástupy, výstupy, evidenční listy",
      "Roční zúčtování daně zaměstnanců",
    ],
  },
  {
    kod: "OST",
    nazev: "Zastupování a poradenství",
    popis:
      "Zastoupíme vás na finančním úřadě, OSSZ i u zdravotních pojišťoven. Se složitějšími případy pracujeme společně s daňovým poradcem.",
    body: [
      "Jednání s finančním úřadem a OSSZ",
      "Spolupráce s daňovým poradcem",
      "Odpovědnost pojištěná z výkonu činnosti",
    ],
  },
];

export default function Page() {
  return (
    <main className="page">
      <header className="topbar">
        <a className="wordmark" href="#" aria-label="AA účetní, domů">
          <span className="wordmark__mono">AA</span>
          <span className="wordmark__text">účetní</span>
        </a>
        <a className="topbar__call" href="tel:+420604671494">
          Zavolat +420 604 671 494
        </a>
      </header>

      <section className="hero" aria-labelledby="hero-nadpis">
        <div className="hero__grid">
          <div className="hero__text">
            <p className="eyebrow">Účetní kancelář · Liberec — Krásná Studánka</p>
            <h1 id="hero-nadpis">
              Účetnictví, které máte<br />
              <span className="hero__accent">celé pod kontrolou.</span>
            </h1>
            <p className="hero__lead">
              Vedeme účetnictví, daně a mzdy malým a středním firmám na
              Liberecku. Doklady posíláte online, na úřady chodíme my. Vy se
              staráte o firmu, ne o papíry.
            </p>
            <div className="hero__cta">
              <a className="btn btn--primary" href="tel:+420604671494">
                Zavolat Andree
              </a>
              <a
                className="btn btn--ghost"
                href="mailto:andrea.travnickova@aa-ucetni.cz"
              >
                Napsat e-mail
              </a>
            </div>
          </div>

          <figure className="hero__media">
            <img
              src="/hero.webp"
              alt="Pracovní stůl účetní kanceláře AA – účetní v Liberci s doklady a přehledy"
              className="hero__img"
              width={880}
              height={1040}
            />
            <figcaption className="ledger" aria-hidden="true">
              <span className="ledger__row">
                <span>Uzávěrka měsíce</span>
                <span className="ledger__ok">hotovo</span>
              </span>
              <span className="ledger__row">
                <span>DPH podáno</span>
                <span className="ledger__ok">včas</span>
              </span>
              <span className="ledger__row ledger__row--sum">
                <span>Vaše starosti</span>
                <span className="ledger__zero">0,00</span>
              </span>
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="services" aria-labelledby="services-nadpis">
        <div className="section-head">
          <p className="eyebrow">Co pro vás vedeme</p>
          <h2 id="services-nadpis">
            Tři účty, o které se nemusíte starat
          </h2>
        </div>

        <ol className="cards">
          {sluzby.map((s) => (
            <li className="card" key={s.kod}>
              <span className="card__code" aria-hidden="true">
                {s.kod}
              </span>
              <h3 className="card__title">{s.nazev}</h3>
              <p className="card__text">{s.popis}</p>
              <ul className="card__list">
                {s.body.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </section>

      <section className="about" aria-labelledby="about-nadpis">
        <div className="about__grid">
          <figure className="about__media">
            <img
              src="/section-1.webp"
              alt="Andrea Prouzová, jednatelka a účetní firmy AA – účetní v Liberci"
              className="about__img"
              width={760}
              height={720}
            />
          </figure>

          <div className="about__text">
            <p className="eyebrow">Kdo za tím stojí</p>
            <h2 id="about-nadpis">
              Mgr. Andrea Prouzová, DiS.
            </h2>
            <p className="about__lead">
              Účetnictví dělám s dlouholetou praxí a přístupem, na který se dá
              spolehnout. S klienty komunikuji online, takže se u mě neztratí
              doklad ani termín — a vy nemusíte kvůli razítku jezdit přes celý
              Liberec.
            </p>

            <dl className="facts">
              <div className="fact">
                <dt>Kde nás najdete</dt>
                <dd>
                  Rybízová 246, 460 01 Liberec 31
                  <br />
                  Krásná Studánka
                </dd>
              </div>
              <div className="fact">
                <dt>Kde působíme</dt>
                <dd>Severočeský a Středočeský kraj</dd>
              </div>
              <div className="fact">
                <dt>Jistota navíc</dt>
                <dd>
                  Pojištěná odpovědnost z výkonu činnosti a spolupráce s daňovým
                  poradcem
                </dd>
              </div>
            </dl>

            <div className="about__cta">
              <a className="btn btn--primary" href="tel:+420604671494">
                Zavolat +420 604 671 494
              </a>
              <a
                className="btn btn--ghost"
                href="mailto:andrea.travnickova@aa-ucetni.cz"
              >
                andrea.travnickova@aa-ucetni.cz
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
