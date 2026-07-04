import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CHRPA — stavební společnost Pardubice | stavby na klíč od roku 1992",
  description:
    "Stavební firma CHRPA v Pardubicích staví rodinné domy, prodejny, průmyslové haly a rekonstrukce na klíč — od studie přes projekt až po realizaci. Vlastní areál v Raisově ulici, truhlárna, zámečna, termovizní měření.",
  openGraph: {
    title: "CHRPA — stavební společnost Pardubice",
    description:
      "Stavby na klíč od úvodní studie až po předání klíčů. Rodinné domy, občanská vybavenost, průmyslové haly a rekonstrukce. Pardubice, od roku 1992.",
    type: "website",
    locale: "cs_CZ",
    images: [{ url: "/hero.webp", width: 1200, height: 630, alt: "Stavba CHRPA v Pardubicích" }],
  },
};

const obory = [
  {
    kod: "RD",
    nazev: "Rodinné domy na klíč",
    popis:
      "Od klasického rodinného domu až po nadstandard s nejmodernější technikou. Postavíme celý dům — vy dostanete klíče a zkolaudováno.",
    detail: "Studie · projekt · hrubá stavba · dokončení",
  },
  {
    kod: "OV",
    nazev: "Občanská vybavenost",
    popis:
      "Jsme generálním dodavatelem několika prodejen v Pardubicích. Zvládneme stavbu, kde se každý den pohybují lidé i zboží.",
    detail: "Prodejny · provozovny · veřejné budovy",
  },
  {
    kod: "PR",
    nazev: "Průmyslové stavby",
    popis:
      "Haly a provozní budovy pro všechna průmyslová odvětví. Odborně, s ohledem na technologii, kterou dovnitř dáte.",
    detail: "Haly · sklady · výrobní objekty",
  },
  {
    kod: "RE",
    nazev: "Rekonstrukce",
    popis:
      "Rekonstrukce staveb všech kategorií — i atypických, i netradičními postupy. Ze starého domu uděláme dům, ve kterém se dá bydlet.",
    detail: "Přestavby · přístavby · sanace",
  },
];

const zazemi = [
  { cislo: "1992", popis: "založeni jako v.o.s., v obchodním rejstříku od 21. 4. 1992" },
  { cislo: "4000 m²", popis: "vlastní areál v Raisově ulici — dvůr, dílny a sklady" },
  { cislo: "2", popis: "vlastní dílny: truhlářská a zámečnická přímo v areálu" },
];

export default function Page() {
  return (
    <main className="page">
      <header className="topbar">
        <a className="wordmark" href="#" aria-label="CHRPA stavební společnost, Pardubice">
          <span className="wordmark__name">CHRPA</span>
          <span className="wordmark__sub">stavební společnost · Pardubice</span>
        </a>
        <nav className="topnav" aria-label="Hlavní navigace">
          <a href="#obory">Co stavíme</a>
          <a href="#firma">O firmě</a>
          <a href="#kontakt">Kontakt</a>
        </nav>
      </header>

      <section className="hero" aria-labelledby="hero-nadpis">
        <div className="hero__grid">
          <div className="hero__text">
            <p className="eyebrow">Od úvodní studie po předání klíčů</p>
            <h1 id="hero-nadpis" className="hero__title">
              Postavíme vám dům.
              <br />
              <span className="hero__title-accent">Celý.</span>
            </h1>
            <p className="hero__lead">
              CHRPA staví v Pardubicích od roku 1992 — rodinné domy, prodejny,
              haly i rekonstrukce. Provedeme dílo komplexně: od studie přes
              prováděcí projekt až k realizaci na klíč.
            </p>
            <div className="hero__actions">
              <a className="btn btn--solid" href="#kontakt">
                Chci nezávaznou nabídku
              </a>
              <a className="btn btn--ghost" href="#obory">
                Prohlédnout, co stavíme
              </a>
            </div>
            <p className="hero__note">
              Vlastní areál 4 000 m², truhlárna i zámečna pod jednou střechou —
              Raisova 232, Pardubice.
            </p>
          </div>
          <figure className="hero__media">
            <img
              src="/hero.webp"
              alt="Rozestavěný dům realizovaný stavební firmou CHRPA v Pardubicích"
              className="hero__img"
              width={1200}
              height={900}
            />
            <figcaption className="hero__tag">Stavba na klíč · Pardubicko</figcaption>
          </figure>
        </div>
      </section>

      <section className="obory" id="obory" aria-labelledby="obory-nadpis">
        <div className="section-head">
          <p className="eyebrow eyebrow--dark">Čtyři obory, jeden dodavatel</p>
          <h2 id="obory-nadpis">Co pro vás postavíme</h2>
          <p className="section-lead">
            Ať jde o dům pro rodinu nebo halu pro provoz, řídíme celou stavbu
            sami — vy máte jednoho partnera od projektu po kolaudaci.
          </p>
        </div>

        <ul className="oborlist">
          {obory.map((o) => (
            <li className="obor" key={o.kod}>
              <span className="obor__kod" aria-hidden="true">
                {o.kod}
              </span>
              <div className="obor__body">
                <h3 className="obor__nazev">{o.nazev}</h3>
                <p className="obor__popis">{o.popis}</p>
                <p className="obor__detail">{o.detail}</p>
              </div>
            </li>
          ))}
        </ul>

        <figure className="obory__media">
          <img
            src="/section-1.webp"
            alt="Referenční stavba realizovaná firmou CHRPA"
            className="obory__img"
            width={1200}
            height={700}
          />
        </figure>
      </section>

      <section className="firma" id="firma" aria-labelledby="firma-nadpis">
        <div className="firma__grid">
          <figure className="firma__media">
            <img
              src="/section-2.webp"
              alt="Areál stavební firmy CHRPA v Raisově ulici v Pardubicích"
              className="firma__img"
              width={1000}
              height={800}
            />
          </figure>
          <div className="firma__text">
            <p className="eyebrow eyebrow--dark">O firmě · Pardubice od 1992</p>
            <h2 id="firma-nadpis">
              Rychle, kvalitně a k vaší spokojenosti — bez prázdných slov
            </h2>
            <p className="firma__lead">
              Firmu jsme založili v roce 1992. Sídlíme v Pardubicích v Raisově
              ulici, kde máme vlastní areál: kanceláře, dílny, stavební dvůr i
              temperované sklady. Díky tomu neřešíme stavbu na dálku — máme
              vlastní zázemí i lidi, kteří ji odvedou.
            </p>
            <dl className="zazemi">
              {zazemi.map((z) => (
                <div className="zazemi__row" key={z.cislo}>
                  <dt className="zazemi__cislo">{z.cislo}</dt>
                  <dd className="zazemi__popis">{z.popis}</dd>
                </div>
              ))}
            </dl>
            <div className="kontakt" id="kontakt">
              <p className="kontakt__nadpis">Ozvěte se jednatelům</p>
              <p className="kontakt__radek">
                <a href="tel:+420466303650">466 303 650</a>
                <span aria-hidden="true"> · </span>
                <a href="tel:+420602418794">602 418 794</a>
              </p>
              <p className="kontakt__radek">
                <a href="mailto:jaroslav.novotny@chrpa-pardubice.cz">
                  jaroslav.novotny@chrpa-pardubice.cz
                </a>
              </p>
              <p className="kontakt__adresa">Raisova 232, 530&nbsp;02 Pardubice</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
