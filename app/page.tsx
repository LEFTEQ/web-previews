import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "idealizol — izolace a zateplování plochých střech a fasád, Plzeň",
  description:
    "Plzeňská parta na ploché střechy, fasády a foukanou celulózu. Navrhneme skladbu, spočítáme cenu a odizolujeme tak, aby teplo zůstalo uvnitř a voda venku.",
  openGraph: {
    title: "idealizol — izolace staveb, Plzeň",
    description:
      "Ploché střechy, zateplení fasád, foukaná celulóza, izolace proti vodě a radonu. Západní Čechy.",
    type: "website",
    images: [{ url: "/hero.webp" }],
  },
};

const sluzby = [
  {
    cislo: "01",
    nazev: "Ploché střechy",
    popis:
      "Nová skladba nebo záchrana staré střechy, která teče. Navrhneme spád, položíme hydroizolaci a zateplíme tak, aby vám voda přestala kapat na strop.",
    detail: "hydroizolace · zateplení · spádové kliny",
  },
  {
    cislo: "02",
    nazev: "Zateplení fasád",
    popis:
      "Zateplovací systém od kotvení po finální omítku. Studený dům se změní na dům, který v zimě drží teplo a v létě nepřehřívá.",
    detail: "kontaktní zateplení · omítka · sokl",
  },
  {
    cislo: "03",
    nazev: "Foukaná celulóza",
    popis:
      "Foukáním doplníme dutiny stropů a stěn, kam se deska nedostane. Ekologická izolace z recyklovaného papíru, hotovo za jeden den bez bourání.",
    detail: "stropy · dutiny · šikminy podkroví",
  },
  {
    cislo: "04",
    nazev: "Izolace proti vodě a radonu",
    popis:
      "Spodní stavba, radon i zemní vlhkost. Odizolujeme základy, bazény, nádrže i zahradní jezírka tak, aby držely.",
    detail: "spodní stavba · radon · bazény a jezírka",
  },
];

export default function Page() {
  return (
    <main className="page">
      <header className="topbar">
        <a className="wordmark" href="#" aria-label="idealizol, izolace staveb Plzeň">
          <span className="wordmark__i">ideal</span>
          <span className="wordmark__z">izol</span>
          <span className="wordmark__dot" aria-hidden="true" />
        </a>
        <a className="topbar__tel" href="tel:+420777242353">
          <span className="topbar__telLabel">Zavolejte</span>
          <span className="topbar__telNum">777&nbsp;242&nbsp;353</span>
        </a>
      </header>

      <section className="hero" aria-labelledby="hero-nadpis">
        <div className="hero__media">
          <img
            src="/hero.webp"
            alt="Řemeslník při zateplování a izolaci ploché střechy"
            className="hero__img"
          />
          <div className="hero__strata" aria-hidden="true">
            <span className="strat strat--a">HYDROIZOLACE</span>
            <span className="strat strat--b">TEPELNÁ IZOLACE</span>
            <span className="strat strat--c">PAROZÁBRANA</span>
            <span className="strat strat--d">NOSNÁ KONSTRUKCE</span>
          </div>
        </div>

        <div className="hero__text">
          <p className="eyebrow">Izolace staveb · Plzeň &amp; západní Čechy</p>
          <h1 id="hero-nadpis" className="hero__title">
            Teplo <span className="hl">dovnitř</span>,<br />
            voda <span className="hl">ven</span>.
          </h1>
          <p className="hero__lead">
            Děláme skladbu střechy a fasády vrstvu po vrstvě — od parozábrany po
            finální hydroizolaci. Ploché střechy, kontaktní zateplení a foukaná
            celulóza od party, která ví, kde střecha teče.
          </p>
          <div className="hero__cta">
            <a className="btn btn--solid" href="tel:+420777242353">
              Zavolat na 777 242 353
            </a>
            <a className="btn btn--ghost" href="mailto:info@idealizol.cz">
              Napsat e-mail
            </a>
          </div>
        </div>
      </section>

      <section className="sluzby" aria-labelledby="sluzby-nadpis">
        <div className="section-head">
          <p className="eyebrow">Co pro vás uděláme</p>
          <h2 id="sluzby-nadpis" className="section-title">
            Čtyři vrstvy práce
          </h2>
          <p className="section-intro">
            Každou zakázku bereme jako skladbu — víme, co má být pod čím a proč.
            Řekněte nám, co vás trápí, a ozveme se s cenovou kalkulací.
          </p>
        </div>

        <ol className="sluzby__grid">
          {sluzby.map((s) => (
            <li key={s.cislo} className="karta">
              <span className="karta__cislo" aria-hidden="true">
                {s.cislo}
              </span>
              <h3 className="karta__nazev">{s.nazev}</h3>
              <p className="karta__popis">{s.popis}</p>
              <p className="karta__detail">{s.detail}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="onas" aria-labelledby="onas-nadpis">
        <div className="onas__media">
          <img
            src="/section-1.webp"
            alt="Detail provedené izolace a zateplení fasády"
            className="onas__img"
          />
        </div>
        <div className="onas__text">
          <p className="eyebrow">Proč zrovna my</p>
          <h2 id="onas-nadpis" className="section-title">
            Specialisté na ploché střechy a fasády
          </h2>
          <p className="onas__lead">
            Nejsme všeuměl. Izolace jsou celé naše řemeslo — tepelné i proti
            vodě, a hlavně jejich chytrá kombinace. Sídlíme v Plzni na Kaplířově
            a jezdíme po celých západních Čechách.
          </p>
          <ul className="onas__list">
            <li>
              <strong>Plzeň, Klatovy, Rokycany, Domažlice, Beroun</strong> — po
              západních Čechách za vámi dojedeme.
            </li>
            <li>
              <strong>Návrh i realizace</strong> — skladbu navrhneme a rovnou ji
              i provedeme, nikoho nesháníte.
            </li>
            <li>
              <strong>Cenová kalkulace zdarma</strong> — přijedeme se podívat a
              spočítáme, co bude práce stát.
            </li>
          </ul>
          <div className="onas__kontakt">
            <a className="chip" href="tel:+420777242353">
              Volejte 777 242 353
            </a>
            <a className="chip" href="mailto:info@idealizol.cz">
              info@idealizol.cz
            </a>
            <span className="chip chip--plain">Kaplířova 1754/20, Plzeň</span>
          </div>
        </div>
      </section>
    </main>
  );
}
