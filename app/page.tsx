import { AiImage } from "./_ui";
import { Counter } from "./motion";

type Property = {
  ev: string;
  kind: string;
  title: string;
  address: string;
  metricLabel: string;
  metricValue: string;
  price: string;
  note: string;
};

const feature: Property = {
  ev: "00916",
  kind: "Chata · prodej",
  title: "Chata s číslem evidenčním, Bouzov – Jeřmaň",
  address: "Jeřmaň č.ev. 1, Bouzov",
  metricLabel: "Užitná plocha",
  metricValue: "21 m²",
  price: "1 554 450 Kč",
  note: "Na místě chaty může podle vizualizace vyrůst nová stavba — k záměru je kladné vyjádření odboru výstavby obce Litovel. Velkorysý přilehlý pozemek na okraji obce s příjezdem z obecní komunikace.",
};

const listings: Property[] = [
  {
    ev: "00904",
    kind: "Rodinný dům · prodej",
    title: "Rodinný dům před rekonstrukcí, Cholina",
    address: "Cholina 176, Cholina",
    metricLabel: "Užitná plocha",
    metricValue: "62 m²",
    price: "849 000 Kč",
    note: "Napojení na elektřinu a vodovod, plyn a kanalizace před domem. Přízemí lze využít i komerčně — bývalo zde holičství. Projektová dokumentace k rekonstrukci je hotová.",
  },
  {
    ev: "00878",
    kind: "Rodinný dům · prodej",
    title: "Zrekonstruovaný dům v centru, Olomouc",
    address: "Hrnčířská 1181/30, Olomouc",
    metricLabel: "Užitná plocha",
    metricValue: "332 m²",
    price: "27 816 750 Kč",
    note: "Podsklepený, kompletně zrekonstruovaný dům se zahradou, terasou i balkónem do Michalského výpadu. Dispozičně dvě jednotky — 1+kk v přízemí a 4+kk ve dvou patrech.",
  },
  {
    ev: "00860",
    kind: "Byt 3+kk · prodej",
    title: "Byt s výhledem do parku, Olomouc",
    address: "Vídeňská 670/11, Olomouc",
    metricLabel: "Užitná plocha",
    metricValue: "98 m²",
    price: "14 450 000 Kč",
    note: "Rohový balkón a nejlukrativnější část centra obklopená historickou zástavbou. Jednotka i celý dům prošly citlivou, téměř kompletní rekonstrukcí.",
  },
  {
    ev: "00842",
    kind: "Pozemek pro bydlení · prodej",
    title: "Stavební pozemek, Červená Voda",
    address: "Červená Voda",
    metricLabel: "Plocha pozemku",
    metricValue: "1 155 m²",
    price: "2 393 853 Kč",
    note: "Obec na česko-moravské zemské hranici. Dle územního plánu plocha smíšená venkovská — pro rodinný dům, chalupu nebo vymezené podnikání.",
  },
];

const contourPaths = [40, 80, 120, 160, 200, 240].map(
  (y, i) =>
    `M-40,${y} C 220,${y - 35} 420,${y + 45} 640,${y - 5} S 1020,${y - 40} 1240,${y + 20 + i}`
);

function Contour({ className }: { className: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 1200 280"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      {contourPaths.map((d, i) => (
        <path key={i} d={d} pathLength={1} />
      ))}
    </svg>
  );
}

function ParcelStamp({ ev }: { ev: string }) {
  return (
    <div className="stamp" aria-hidden="true">
      <svg className="stamp-rings" viewBox="0 0 100 100">
        <circle cx={50} cy={50} r={46} />
        <circle cx={50} cy={50} r={37} className="stamp-inner" />
        <path d="M14,50 C28,42 38,58 50,50 S72,42 86,50" pathLength={1} />
      </svg>
      <div className="stamp-text">
        <span>EV.Č.</span>
        <strong>{ev}</strong>
      </div>
    </div>
  );
}

export default function Page() {
  return (
    <main>
      <header className="hero">
        <Contour className="contour contour--top" />
        <div className="wrap hero-inner">
          <p className="hero-eyebrow">
            <span className="survey-mark" aria-hidden="true" />
            Realitní kancelář · Olomouc
          </p>
          <h1 className="wordmark">
            MARA<span className="wordmark-suffix">s.r.o.</span>
          </h1>
          <p className="hero-lede">
            Prodej a pronájem chat, domů, bytů a pozemků na Olomoucku. Každou
            nabídku zakreslíme do krajiny — od hranice parcely po evidenční
            číslo v katastru.
          </p>
          <div className="hero-count">
            <span className="hero-count-num">
              <Counter to={27} />
            </span>
            <span className="hero-count-label">
              Počet nemovitostí
              <br />v aktuální nabídce
            </span>
          </div>
        </div>
        <Contour className="contour contour--bottom" />
      </header>

      <section className="offer" id="nabidka" aria-labelledby="offer-title">
        <div className="wrap">
          <div className="section-head">
            <p className="eyebrow">Nabídka · 27 nemovitostí</p>
            <h2 id="offer-title" className="section-title">
              Nemovitosti, které známe po parcelách
            </h2>
          </div>

          <article className="feature">
            <div className="feature-media">
              <AiImage
                src="/section-1.webp"
                alt="Chata k prodeji v Bouzově – Jeřmani na velkorysém pozemku na okraji obce"
                className="feature-img"
              />
            </div>
            <div className="feature-body">
              <div className="feature-top">
                <p className="card-kind">{feature.kind}</p>
                <ParcelStamp ev={feature.ev} />
              </div>
              <h3 className="card-title">{feature.title}</h3>
              <p className="card-address">{feature.address}</p>
              <p className="card-note">{feature.note}</p>
              <dl className="specs">
                <div className="spec">
                  <dt>{feature.metricLabel}</dt>
                  <dd>{feature.metricValue}</dd>
                </div>
                <div className="spec">
                  <dt>Lokalita</dt>
                  <dd>Bouzovsko</dd>
                </div>
                <div className="spec spec--price">
                  <dt>Cena</dt>
                  <dd>{feature.price}</dd>
                </div>
              </dl>
              <a className="card-more" href="#nabidka">
                Více informací o chatě
                <span aria-hidden="true"> →</span>
              </a>
            </div>
          </article>

          <ul className="grid">
            {listings.map((p) => (
              <li key={p.ev}>
                <article className="card">
                  <div className="card-top">
                    <p className="card-kind">{p.kind}</p>
                    <ParcelStamp ev={p.ev} />
                  </div>
                  <h3 className="card-title">{p.title}</h3>
                  <p className="card-address">{p.address}</p>
                  <p className="card-note">{p.note}</p>
                  <dl className="specs">
                    <div className="spec">
                      <dt>{p.metricLabel}</dt>
                      <dd>{p.metricValue}</dd>
                    </div>
                    <div className="spec spec--price">
                      <dt>Cena</dt>
                      <dd>{p.price}</dd>
                    </div>
                  </dl>
                  <a className="card-more" href="#nabidka">
                    Více informací
                    <span aria-hidden="true"> →</span>
                  </a>
                </article>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="trust" id="o-nas" aria-labelledby="trust-title">
        <div className="wrap trust-grid">
          <div className="trust-lead">
            <p className="eyebrow eyebrow--light">O kanceláři MARA</p>
            <h2 id="trust-title" className="section-title section-title--light">
              Nemovitost umíme ukázat i&nbsp;na&nbsp;mapě
            </h2>
            <p className="trust-text">
              MARA je realitní kancelář z Olomouce. Prodáváme a pronajímáme
              chaty, rodinné domy, byty i pozemky napříč regionem. Ke každé
              nabídce dohledáme evidenční číslo, skutečnou dispozici i plochu — a
              řekneme vám, co s pozemkem podle územního plánu doopravdy smíte.
            </p>
            <p className="trust-text">
              Na Olomoucku jsme doma. Podporujeme malý fotbal a tým FC Skunk,
              který letos slaví deset let ve zdejší lize.
            </p>
          </div>

          <div className="trust-panels">
            <div className="panel">
              <h3 className="panel-title">Co pro vás uděláme</h3>
              <ul className="service-list">
                <li>Odhad nemovitosti — zdarma a nezávazně</li>
                <li>Prodej i aukce nemovitostí</li>
                <li>Pronájem chat a bytů</li>
                <li>Zadání poptávky na míru</li>
              </ul>
            </div>

            <div className="panel">
              <h3 className="panel-title">Kde nabízíme</h3>
              <dl className="okresy">
                <div>
                  <dt>Olomouc</dt>
                  <dd>23</dd>
                </div>
                <div>
                  <dt>Ústí nad Orlicí</dt>
                  <dd>2</dd>
                </div>
                <div>
                  <dt>Prostějov</dt>
                  <dd>1</dd>
                </div>
                <div>
                  <dt>Přerov</dt>
                  <dd>1</dd>
                </div>
              </dl>
              <p className="okresy-note">Počty nemovitostí podle okresu.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
