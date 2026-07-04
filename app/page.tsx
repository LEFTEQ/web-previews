import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sun For You — solária Ergoline a Luxura v Českých Budějovicích",
  description:
    "Dvě solární studia v centru Českých Budějovic. 9 horizontálních a 3 vertikální solária Ergoline a Luxura, lampy RUBINO s červeným světlem, značková kosmetika. Sleva 20 %, studenti 25 %.",
  openGraph: {
    title: "Sun For You — solária v centru Českých Budějovic",
    description:
      "Solária Ergoline a Luxura, lampy RUBINO s červeným světlem. Krajinská 35 a U Karla. Sleva 20 %, studenti 25 %.",
    type: "website",
    locale: "cs_CZ",
    images: [{ url: "/hero.webp" }],
  },
};

const studios = [
  {
    name: "Krajinská",
    place: "Obchodní dům Vltavín, 1. patro",
    address: "Krajinská 35/1, České Budějovice",
    phone: "387 203 257",
    tel: "+420387203257",
    email: "krajinska@sun4u.cz",
    hours: "Po–So 8–22 · Ne a svátky 10–22",
    open: true,
  },
  {
    name: "U Karla",
    place: "Obchodní dům U Karla, 2. patro",
    address: "Karla IV. 103/4, České Budějovice",
    phone: "387 203 633",
    tel: "+420387203633",
    email: "ukarla@sun4u.cz",
    hours: "Momentálně zavřeno",
    open: false,
  },
];

const cosmetics = [
  "California Tan",
  "Tannymaxx",
  "Emerald Bay",
  "Hawaiiana",
];

export default function Page() {
  return (
    <main className="page">
      <header className="topbar">
        <a className="wordmark" href="#" aria-label="Sun For You, úvodní strana">
          <span className="wordmark__sun">SUN</span>
          <span className="wordmark__num" aria-hidden="true">4</span>
          <span className="wordmark__you">YOU</span>
        </a>
        <nav className="topnav" aria-label="Hlavní">
          <a href="#nabidka">Nabídka</a>
          <a href="#studia">Studia</a>
          <a className="topnav__call" href="tel:+420387203257">
            Zavolat 387 203 257
          </a>
        </nav>
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero__media">
          <img
            src="/hero.webp"
            alt="Rozsvícené solárium Ergoline s tubusem měnícím barvu"
            className="hero__img"
          />
        </div>
        <div className="hero__panel">
          <p className="eyebrow">Solária v centru Českých Budějovic · od 2006</p>
          <h1 id="hero-title" className="hero__title">
            Měníme barvy.
            <br />
            <span className="hero__title--accent">Změníme i tu vaši.</span>
          </h1>
          <p className="hero__lede">
            Dvě studia na Krajinské a U Karla, solária Ergoline a Luxura a nové
            lampy RUBINO s červeným světlem. Přijďte, jak jste — odejdete s
            přirozeným, dlouho drženým opálením.
          </p>
          <div className="hero__cta">
            <a className="btn btn--solid" href="tel:+420387203257">
              Zavolat a rezervovat
            </a>
            <a className="btn btn--ghost" href="#studia">
              Kde nás najdete
            </a>
          </div>
          <ul className="hero__deals">
            <li>
              <strong>20 %</strong> sleva pro zákazníky
            </li>
            <li>
              <strong>25 %</strong> pro studenty
            </li>
            <li>
              <strong>10.–15.&nbsp;min.</strong> opalování zdarma
            </li>
          </ul>
        </div>
      </section>

      <section className="offer" id="nabidka" aria-labelledby="offer-title">
        <div className="offer__head">
          <p className="eyebrow eyebrow--dark">Nabídka</p>
          <h2 id="offer-title" className="section-title">
            Značková solária a novinka RUBINO
          </h2>
          <p className="section-lede">
            Celkem devět horizontálních a tři vertikální solária předních značek.
            K nim značková kosmetika, kterou u nás rovnou koupíte za příjemné
            ceny.
          </p>
        </div>

        <div className="offer__grid">
          <article className="card card--feature">
            <img
              src="/section-1.webp"
              alt="Lampy RUBINO kombinující UV záření a červené světlo"
              className="card__img"
            />
            <div className="card__body">
              <p className="card__tag">Novinka · lampy RUBINO</p>
              <h3 className="card__title">UV záření a červené světlo v jednom</h3>
              <p className="card__text">
                RUBINO vyvažuje spektrum UV a červeného světla — nově i s
                obličejovými zářiči. Pigmentace je výraznější, opálení
                přirozenější a drží déle.
              </p>
              <ul className="benefits">
                <li>Šetrnější opalování k pokožce</li>
                <li>Červené světlo chrání buňky před volnými radikály</li>
                <li>Aktivuje okysličení kůže a látkovou výměnu</li>
                <li>Viditelně hladší a svěží kůže</li>
              </ul>
            </div>
          </article>

          <div className="offer__side">
            <article className="card card--stat">
              <p className="stat__num">9 + 3</p>
              <p className="stat__label">
                horizontálních a vertikálních solárií Ergoline a Luxura
              </p>
            </article>

            <article className="card card--cosmetics">
              <h3 className="card__title">Solární kosmetika u nás</h3>
              <ul className="chips">
                {cosmetics.map((c) => (
                  <li key={c} className="chip">
                    {c}
                  </li>
                ))}
              </ul>
              <p className="card__text">
                Osvědčené značky pro rychlejší a hlubší opálení — poradíme, co se
                hodí na vaši pokožku.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="studios" id="studia" aria-labelledby="studios-title">
        <div className="studios__media">
          <img
            src="/section-2.webp"
            alt="Recepce solárního studia Sun For You v centru Českých Budějovic"
            className="studios__img"
          />
        </div>
        <div className="studios__content">
          <p className="eyebrow">Dvě studia v centru</p>
          <h2 id="studios-title" className="section-title section-title--light">
            Najdete nás na Krajinské a U Karla
          </h2>
          <p className="section-lede section-lede--light">
            Obě v centru Budějovic, pár kroků od náměstí. Své návštěvy a zůstatek
            permanentky si pohlídáte online po přihlášení zákaznickou kartou.
          </p>

          <ul className="studio-list">
            {studios.map((s) => (
              <li key={s.name} className="studio">
                <div className="studio__top">
                  <h3 className="studio__name">{s.name}</h3>
                  <span
                    className={
                      "studio__state " +
                      (s.open ? "studio__state--open" : "studio__state--closed")
                    }
                  >
                    {s.open ? "Otevřeno" : "Zavřeno"}
                  </span>
                </div>
                <p className="studio__place">
                  {s.place}
                  <br />
                  {s.address}
                </p>
                <p className="studio__hours">{s.hours}</p>
                <div className="studio__links">
                  <a className="btn btn--solid btn--sm" href={"tel:" + s.tel}>
                    Zavolat {s.phone}
                  </a>
                  <a className="studio__mail" href={"mailto:" + s.email}>
                    {s.email}
                  </a>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
