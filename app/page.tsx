import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "EPS účtárna s.r.o. — účetnictví a daně, Olomouc",
  description:
    "Účetní kancelář v Olomouci. Vedeme účetnictví, zpracováváme mzdy a daňová přiznání, zakládáme firmy. Přes 20 let praxe, přes 200 klientů. Litovelská 1349/2b.",
  openGraph: {
    title: "EPS účtárna s.r.o. — účetnictví a daně, Olomouc",
    description:
      "Účetní kancelář v Olomouci. Účetnictví, mzdy, daňová přiznání a zakládání firem. Přes 20 let praxe.",
    locale: "cs_CZ",
    type: "website",
  },
};

const sluzby = [
  {
    radek: "010",
    nazev: "Vedení účetnictví",
    popis:
      "Převezmeme kompletní účetní agendu — od zaúčtování dokladů po roční závěrku. Vy máte přehled a čas na podnikání, my hlídáme termíny a zákony.",
    body: ["Podvojné účetnictví i daňová evidence", "Účetní závěrka a přiznání k dani z příjmů", "Přehledy a reporty na míru"],
  },
  {
    radek: "020",
    nazev: "Zpracování mezd",
    popis:
      "Vedeme mzdovou a personální agendu spolehlivě a včas. Odesíláme přehledy na správu sociálního zabezpečení, zdravotní pojišťovny i finanční úřad.",
    body: ["Výpočet mezd a výplatní pásky", "Přihlášky, odhlášky, roční zúčtování", "Komunikace s úřady za vás"],
  },
  {
    radek: "030",
    nazev: "Daňové poradenství",
    popis:
      "Daňový poradce stojí na vaší straně. Poradíme, jak legálně snížit daň, a zastoupíme vás při jednání s finančním úřadem.",
    body: ["Optimalizace daně z příjmů a DPH", "Zastupování při kontrolách", "Odklad přiznání až o tři měsíce"],
  },
  {
    radek: "040",
    nazev: "Založení firmy",
    popis:
      "Založíme i převedeme společnost s odbornou péčí — od sepsání dokumentů po zápis do obchodního rejstříku a uložení listin do sbírky.",
    body: ["Založení s.r.o. i živnosti", "Převody podílů a změny ve firmě", "Zápis do rejstříku a sbírky listin"],
  },
];

export default function Page() {
  return (
    <main>
      <header className="nav" aria-label="Hlavní navigace">
        <a className="wordmark" href="#" aria-label="EPS účtárna, domů">
          <span className="wordmark__eps">EPS</span>
          <span className="wordmark__slash" aria-hidden="true">/</span>
          <span className="wordmark__rest">účtárna</span>
        </a>
        <nav className="nav__links" aria-label="Sekce webu">
          <a href="#sluzby">Služby</a>
          <a href="#onas">O nás</a>
          <a href="#kontakt" className="nav__cta">Napište nám</a>
        </nav>
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero__ledger" aria-hidden="true">
          <div className="hero__col hero__col--md"><span>MD</span></div>
          <div className="hero__col hero__col--dal"><span>DAL</span></div>
        </div>

        <div className="hero__inner">
          <p className="hero__eyebrow">Účetní kancelář · Olomouc · od roku 2003</p>
          <h1 id="hero-title" className="hero__title">
            <span className="hero__line">Vaše čísla</span>
            <span className="hero__line hero__line--accent">musí sedět</span>
            <span className="hero__line">na haléř.</span>
          </h1>
          <p className="hero__lead">
            EPS účtárna vede účetnictví olomouckým firmám i živnostníkům.
            Termíny hlídáme my, vy podnikáte. Bez překvapení na konci roku.
          </p>

          <div className="hero__balance" role="group" aria-label="Bilance firmy">
            <div className="balance__row">
              <span className="balance__label">let na trhu</span>
              <span className="balance__dots" aria-hidden="true" />
              <span className="balance__val">20+</span>
            </div>
            <div className="balance__row">
              <span className="balance__label">spokojených klientů</span>
              <span className="balance__dots" aria-hidden="true" />
              <span className="balance__val">200+</span>
            </div>
            <div className="balance__row balance__row--sum">
              <span className="balance__label">termín stihnutý včas</span>
              <span className="balance__dots" aria-hidden="true" />
              <span className="balance__val">100 %</span>
            </div>
          </div>

          <a href="#kontakt" className="hero__btn">Domluvit nezávaznou schůzku</a>
        </div>
      </section>

      <section id="sluzby" className="sluzby" aria-labelledby="sluzby-title">
        <div className="section__head">
          <p className="section__eyebrow">Účtová osnova služeb</p>
          <h2 id="sluzby-title" className="section__title">Čtyři položky, které za vás zaúčtujeme</h2>
        </div>

        <div className="sluzby__grid">
          <div className="sluzby__list">
            {sluzby.map((s) => (
              <article className="polozka" key={s.radek}>
                <span className="polozka__radek" aria-hidden="true">{s.radek}</span>
                <div className="polozka__telo">
                  <h3 className="polozka__nazev">{s.nazev}</h3>
                  <p className="polozka__popis">{s.popis}</p>
                  <ul className="polozka__body">
                    {s.body.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
          <div className="sluzby__media">
            <img
              src="/section-1.webp"
              alt="Účetní doklady a výkazy zpracované v kanceláři EPS účtárna v Olomouci"
              className="media__img"
              loading="lazy"
              width={640}
              height={800}
            />
            <p className="media__cap">Doklady u nás nikde neleží ladem — zpracováváme je průběžně.</p>
          </div>
        </div>
      </section>

      <section id="onas" className="onas" aria-labelledby="onas-title">
        <div className="onas__grid">
          <div className="onas__media">
            <img
              src="/section-2.webp"
              alt="Tým EPS účtárna při práci v olomoucké kanceláři"
              className="media__img"
              loading="lazy"
              width={640}
              height={760}
            />
          </div>
          <div className="onas__telo">
            <p className="section__eyebrow">Kdo za tím stojí</p>
            <h2 id="onas-title" className="section__title">Malá kancelář, kde víte, s kým mluvíte</h2>
            <p className="onas__text">
              EPS účtárna je poradenská a účetní firma z Olomouce. Přes dvacet let
              vedeme účetnictví, zpracováváme mzdy a daňová přiznání a zakládáme
              společnosti. Nejsme anonymní řetězec — každý klient má svého
              konkrétního účetního, který zná jeho firmu.
            </p>

            <dl className="kontakt" aria-label="Kontaktní údaje">
              <div className="kontakt__row">
                <dt>Kde nás najdete</dt>
                <dd>Litovelská 1349/2b, 779 00 Olomouc</dd>
              </div>
              <div className="kontakt__row">
                <dt>Telefon</dt>
                <dd>
                  <a href="tel:+420585207255">+420 585 207 255</a>
                  <a href="tel:+420608723339">+420 608 723 339</a>
                </dd>
              </div>
              <div className="kontakt__row">
                <dt>E-mail</dt>
                <dd><a href="mailto:info@eps-olomouc.cz">info@eps-olomouc.cz</a></dd>
              </div>
            </dl>

            <p className="onas__rejstrik">
              EPS účtárna s.r.o., zapsaná v obchodním rejstříku vedeném
              Krajským soudem v Ostravě, oddíl C, vložka 44534.
            </p>

            <a href="mailto:info@eps-olomouc.cz" id="kontakt" className="onas__btn">
              Napsat účetnímu
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
