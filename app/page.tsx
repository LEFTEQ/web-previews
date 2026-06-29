import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cestovka Pohoda — zájezdy z Českých Budějovic",
  description:
    "Rodinná cestovní kancelář z Českých Budějovic. Pobytové i poznávací zájezdy, letecky přímo z jihu Čech. Chorvatsko, Itálie, Francie i exotika.",
  openGraph: {
    title: "Cestovka Pohoda — zájezdy z Českých Budějovic",
    description:
      "Pobytové i poznávací zájezdy, letecky přímo z jihu Čech. Poradíme osobně na Lannově třídě.",
    images: ["/hero.webp"],
    type: "website",
  },
};

type Trip = {
  code: string;
  country: string;
  title: string;
  note: string;
  transport: string;
  date: string;
  price: string;
};

const trips: Trip[] = [
  {
    code: "JCL · MAK",
    country: "Chorvatsko",
    title: "Drvenik, Makarská riviéra",
    note: "Penzion Superior, polopenze v ceně",
    transport: "autokarem",
    date: "odjezd 31. 7. 2026",
    price: "7 190 Kč",
  },
  {
    code: "JCL · CDG",
    country: "Francie",
    title: "Paříž a Disneyland",
    note: "Za Mickey a Minnie, zábava pro celou rodinu",
    transport: "autokarem",
    date: "odjezd 20. 7. 2026",
    price: "5 150 Kč",
  },
  {
    code: "JCL · NAP",
    country: "Itálie",
    title: "Capri, Procida, Positano a Amalfi",
    note: "To nejkrásnější z Kampánie, s letenkou",
    transport: "letecky",
    date: "odjezd 16. 9. 2026",
    price: "7 990 Kč",
  },
  {
    code: "JCL · SAN",
    country: "Francie",
    title: "Francouzská riviéra a San Remo",
    note: "Pobyt u moře, výlety na Azurové pobřeží",
    transport: "autokarem",
    date: "odjezd 16. 9. 2026",
    price: "14 490 Kč",
  },
];

const departures = [
  "Turecko",
  "Kréta",
  "Rhodos",
  "Bulharsko",
  "Egypt — Marsa Matrouh",
  "Tunisko",
  "Mallorka",
  "Albánie",
];

export default function Page() {
  return (
    <main className="cp">
      <header className="cp-top">
        <a className="cp-mark" href="#" aria-label="Cestovka Pohoda, úvod">
          <span className="cp-mark-a">Cestovka</span>
          <span className="cp-mark-b">Pohoda</span>
          <span className="cp-mark-tag">České Budějovice</span>
        </a>
        <a className="cp-call" href="tel:+420385310813">
          Zavolat 385&nbsp;310&nbsp;813
        </a>
      </header>

      <section className="cp-hero" aria-labelledby="hero-title">
        <img
          className="cp-hero-img"
          src="/hero.webp"
          alt="Pobřeží Jadranu s průzračným mořem, kam Cestovka Pohoda vozí klienty"
        />
        <div className="cp-hero-veil" aria-hidden="true" />

        <div className="cp-hero-inner">
          <p className="cp-eyebrow">Cestovní kancelář · od roku 1998</p>
          <h1 id="hero-title" className="cp-h1">
            Odlétáte z jihu Čech.
            <span>My to zařídíme.</span>
          </h1>
          <p className="cp-lead">
            Pobytové i poznávací zájezdy s odjezdem od nás z Českých
            Budějovic — k moři autokarem i letecky. Vybereme s vámi termín,
            poradíme osobně a sedneme si u jednoho stolu.
          </p>

          <aside className="cp-pass" aria-label="Ukázkový zájezd">
            <div className="cp-pass-main">
              <div className="cp-pass-route">
                <span>JCL</span>
                <span className="cp-pass-plane" aria-hidden="true">✈</span>
                <span>MAK</span>
              </div>
              <p className="cp-pass-from">České Budějovice → Makarská riviéra</p>
              <dl className="cp-pass-grid">
                <div>
                  <dt>Odjezd</dt>
                  <dd>31. 7. 2026</dd>
                </div>
                <div>
                  <dt>Doprava</dt>
                  <dd>autokarem</dd>
                </div>
                <div>
                  <dt>Strava</dt>
                  <dd>polopenze</dd>
                </div>
              </dl>
            </div>
            <div className="cp-pass-stub">
              <p className="cp-pass-stublabel">od</p>
              <p className="cp-pass-price">7 190 Kč</p>
              <p className="cp-pass-seat">2 místa volná</p>
            </div>
          </aside>
        </div>
      </section>

      <section className="cp-sec" aria-labelledby="nabidka-title">
        <div className="cp-sec-head">
          <p className="cp-eyebrow cp-eyebrow--dark">Co máme rozjeté na 2026</p>
          <h2 id="nabidka-title" className="cp-h2">
            Čtyři palubní lístky, které právě teď doporučujeme
          </h2>
          <p className="cp-sec-sub">
            Každý zájezd je jako palubní lístek — víte přesně, odkud, kam a za
            kolik. Žádné překvapení až na letišti.
          </p>
        </div>

        <ul className="cp-pass-list">
          {trips.map((t) => (
            <li key={t.code} className="cp-card">
              <div className="cp-card-main">
                <div className="cp-card-route">{t.code}</div>
                <p className="cp-card-country">{t.country}</p>
                <h3 className="cp-card-title">{t.title}</h3>
                <p className="cp-card-note">{t.note}</p>
                <p className="cp-card-meta">
                  <span>{t.date}</span>
                  <span aria-hidden="true">·</span>
                  <span>{t.transport}</span>
                </p>
              </div>
              <div className="cp-card-stub">
                <span className="cp-card-from">od</span>
                <span className="cp-card-price">{t.price}</span>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section className="cp-about" aria-labelledby="onas-title">
        <div className="cp-about-media">
          <img
            src="/section-2.webp"
            alt="Letní dovolená u moře — destinace v nabídce Cestovky Pohoda"
          />
        </div>
        <div className="cp-about-text">
          <p className="cp-eyebrow cp-eyebrow--dark">Proč k nám na Lannovku</p>
          <h2 id="onas-title" className="cp-h2">
            Letíte z Českých Budějovic, ne z Prahy v pět ráno
          </h2>
          <p className="cp-about-p">
            Jsme rodinná cestovka z jihu Čech. Letecké zájezdy na rok 2026
            startují z letiště v Českých Budějovicích — bez nočního přejezdu do
            Prahy a bez nervů na D3. Sednete do letadla skoro od nás z města.
          </p>

          <p className="cp-board-label">Letecky z Č. Budějovic 2026</p>
          <ul className="cp-board">
            {departures.map((d) => (
              <li key={d}>
                <span className="cp-board-dot" aria-hidden="true" />
                {d}
              </li>
            ))}
          </ul>

          <dl className="cp-trust">
            <div>
              <dt>Poradíme osobně</dt>
              <dd>U nás na pobočce si vše projdeme nad mapou a katalogem.</dd>
            </div>
            <div>
              <dt>Pobytové i poznávací</dt>
              <dd>Chorvatsko, Itálie, Bulharsko, exotika i lázně a senioři 55+.</dd>
            </div>
            <div>
              <dt>Zavolejte nám</dt>
              <dd>
                <a href="tel:+420385310813">385 310 813</a> ·{" "}
                <a href="mailto:info@cestovkapohoda.cz">info@cestovkapohoda.cz</a>
              </dd>
            </div>
          </dl>
        </div>
      </section>
    </main>
  );
}
