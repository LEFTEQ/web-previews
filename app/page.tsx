import type { ReactNode } from "react";

type Car = {
  brand: string;
  model: string;
  year: string;
  fuel: string;
  body: string;
  km: string;
  price: string;
  note: string;
};

const cars: Car[] = [
  {
    brand: "Volkswagen",
    model: "Caravelle 2.0 TDI 110 kW DSG",
    year: "2015",
    fuel: "Nafta",
    body: "Minibus",
    km: "193 869 km",
    price: "519 000",
    note: "Devět míst, servisní kniha",
  },
  {
    brand: "BMW",
    model: "Řada 3 325d kabrio automat",
    year: "2011",
    fuel: "Nafta",
    body: "Kabriolet",
    km: "178 837 km",
    price: "275 000",
    note: "Sklápěcí střecha, kůže",
  },
  {
    brand: "Audi",
    model: "Q3 2,0 TFSI quattro 125 kW",
    year: "2012",
    fuel: "Benzin",
    body: "Kombi / SUV",
    km: "216 543 km",
    price: "179 000",
    note: "Pohon všech kol",
  },
  {
    brand: "Ford",
    model: "Transit 2.2 TDCi 74 kW L1H1",
    year: "2012",
    fuel: "Nafta",
    body: "Kombi",
    km: "205 829 km",
    price: "149 000",
    note: "Devět míst, po STK",
  },
  {
    brand: "Mercedes-Benz",
    model: "Třída E 320 CDI Avantgarde",
    year: "2008",
    fuel: "Nafta",
    body: "Kombi",
    km: "284 462 km",
    price: "99 000",
    note: "Automat, tažné",
  },
];

type Step = {
  no: string;
  title: string;
  body: string;
};

const buySteps: Step[] = [
  {
    no: "01",
    title: "Vyberete vůz",
    body: "Projdete si aktuální nabídku na místě v Praze. U každého vozu máte fotky, nájezd i historii — nic neschováváme.",
  },
  {
    no: "02",
    title: "Vyzkoušíte a prověříte",
    body: "Zkušební jízda samozřejmostí. Auto klidně vezměte na kontrolu do servisu, který znáte. Nespěcháme na vás.",
  },
  {
    no: "03",
    title: "Odjedete připraveni",
    body: "Vyřídíme přepis, povinné ručení i přihlášení vozu. Odjíždíte s hotovými papíry a klíči v ruce.",
  },
];

function Plate({ children }: { children: ReactNode }) {
  return (
    <span className="plate" aria-hidden="true">
      <span className="plate__eu">
        <span className="plate__stars" />
        CZ
      </span>
      <span className="plate__text">{children}</span>
    </span>
  );
}

export default function Page() {
  return (
    <main className="page">
      <header className="topbar">
        <a className="brand" href="#uvod" aria-label="Auto-Mega Praha — úvod">
          <span className="brand__mark">
            <span className="brand__dash" />
          </span>
          <span className="brand__word">
            Auto<span className="brand__mega">-Mega</span>
            <span className="brand__city">Praha</span>
          </span>
        </a>
        <nav className="topnav" aria-label="Hlavní navigace">
          <a href="#nabidka">Nabídka vozů</a>
          <a href="#jak">Jak koupit</a>
          <a href="#duvera">O nás</a>
        </nav>
        <a className="topcall" href="tel:+420602370174">+420 602 370 174</a>
      </header>

      <section className="hero" id="uvod">
        <div className="hero__media">
          <img
            src="/hero.webp"
            alt="Vůz z aktuální nabídky autobazaru Auto-Mega Praha"
            className="hero__img"
            width={1600}
            height={1000}
          />
          <div className="hero__scrim" />
        </div>

        <div className="hero__inner">
          <p className="eyebrow">
            <Plate>2A0 MEGA</Plate>
            Autobazar &middot; Praha
          </p>
          <h1 className="hero__title">
            Ojeté auto,<br />
            u kterého víte,
            <br />
            <span className="hero__accent">co kupujete.</span>
          </h1>
          <p className="hero__lede">
            Prověřené vozy skladem, historie na stůl a papíry vyřízené za vás.
            Přijďte se podívat do Prahy — vůz si osaháte dřív, než se rozhodnete.
          </p>
          <div className="hero__cta">
            <a className="btn btn--primary" href="#nabidka">
              Prohlédnout nabídku
            </a>
            <a className="btn btn--ghost" href="tel:+420602370174">
              Zavolat do bazaru
            </a>
          </div>
          <dl className="hero__facts">
            <div>
              <dt>Skladem</dt>
              <dd>50+ vozů</dd>
            </div>
            <div>
              <dt>Otevřeno</dt>
              <dd>Po–Pá 10–18</dd>
            </div>
            <div>
              <dt>Výkup</dt>
              <dd>Za hotové</dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="offer" id="nabidka">
        <div className="section-head">
          <p className="eyebrow eyebrow--dark">Nově naskladněno</p>
          <h2 className="section-title">
            Vozy, které u nás právě teď stojí na dvoře
          </h2>
          <p className="section-sub">
            Každý řádek je konkrétní auto z Prahy — se známým nájezdem, palivem
            i stavem. Ceny jsou konečné, včetně DPH.
          </p>
        </div>

        <ul className="cars" role="list">
          {cars.map((car) => (
            <li className="car" key={car.brand + car.model}>
              <div className="car__head">
                <span className="car__brand">{car.brand}</span>
                <span className="car__year">{car.year}</span>
              </div>
              <h3 className="car__model">{car.model}</h3>
              <p className="car__note">{car.note}</p>
              <dl className="car__specs">
                <div>
                  <dt>Karoserie</dt>
                  <dd>{car.body}</dd>
                </div>
                <div>
                  <dt>Palivo</dt>
                  <dd>{car.fuel}</dd>
                </div>
                <div>
                  <dt>Najeto</dt>
                  <dd>{car.km}</dd>
                </div>
              </dl>
              <div className="car__foot">
                <span className="car__price">
                  {car.price} <span className="car__ccy">CZK</span>
                </span>
                <a
                  className="car__link"
                  href="tel:+420602370174"
                  aria-label={`Zeptat se na ${car.brand} ${car.model}`}
                >
                  Zeptat se →
                </a>
              </div>
            </li>
          ))}
        </ul>

        <div className="offer__wide">
          <img
            src="/section-1.webp"
            alt="Vozy autobazaru Auto-Mega Praha připravené k prohlídce"
            className="offer__img"
            width={1400}
            height={800}
          />
          <div className="offer__cta">
            <h3>Nevidíte to pravé?</h3>
            <p>
              Skladem točíme desítky vozů napříč značkami od Škody po BMW.
              Řekněte nám, co hledáte a do jaké ceny — ozveme se, jakmile
              takový vůz naskladníme.
            </p>
            <a className="btn btn--primary" href="mailto:info@auto-mega.cz">
              Napsat, co hledám
            </a>
          </div>
        </div>
      </section>

      <section className="trust" id="jak">
        <div className="trust__grid">
          <div className="trust__intro" id="duvera">
            <p className="eyebrow">Jak koupit &amp; komu věřit</p>
            <h2 className="section-title section-title--light">
              U nás si auto koupíte v klidu a bez překvapení
            </h2>
            <p className="trust__text">
              Auto-Mega vozí a prodává auta v Praze už roky. Nesázíme na
              rychloobrat a naleštěné inzeráty — sázíme na to, že se k nám
              vrátíte, až budete měnit další auto. Proto vám auto necháme
              prověřit a nikdy nespěcháme na podpis.
            </p>
            <img
              src="/section-2.webp"
              alt="Zázemí a personál autobazaru Auto-Mega Praha"
              className="trust__img"
              width={1200}
              height={800}
            />
          </div>

          <ol className="steps" aria-label="Jak u nás koupíte vůz">
            {buySteps.map((step) => (
              <li className="step" key={step.no}>
                <span className="step__no">{step.no}</span>
                <div className="step__body">
                  <h3>{step.title}</h3>
                  <p>{step.body}</p>
                </div>
              </li>
            ))}

            <li className="quote">
              <p className="quote__text">
                „Majitelé i personál jsou opravdu špičkoví. Mimořádná ochota
                při řešení nedostatků vozu, který jsem kupoval. Ford C-Max
                r.v. 2008 prošel přísnou kontrolou. Fér jednání.“
              </p>
              <p className="quote__who">— Otakar Galas, zákazník</p>
            </li>
          </ol>
        </div>

        <div className="outro">
          <div className="outro__col">
            <h3>Hledáte nový vůz?</h3>
            <p>
              Ten starý dosloužil? Vyberte si z desítek prověřených aut za
              férové ceny. Přijeďte se podívat do Prahy.
            </p>
            <a className="btn btn--primary" href="#nabidka">
              Chci koupit vůz
            </a>
          </div>
          <div className="outro__col outro__col--alt">
            <h3>Chcete prodat vůz?</h3>
            <p>
              Potřebujete rychle peníze z prodeje? Vykoupíme váš vůz za
              hotové — bez čekání na kupce a bez inzerátů.
            </p>
            <a className="btn btn--dark" href="tel:+420602370174">
              Chci prodat vůz
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
