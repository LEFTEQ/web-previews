import { HeroBoard } from "./motion";

type Service = {
  index: string;
  from: string;
  to: string;
  title: string;
  body: string;
};

const services: Service[] = [
  {
    index: "01",
    from: "Náklad",
    to: "Vozidlo",
    title: "Databanka",
    body: "Zadejte volný náklad nebo volné vozidlo a najděte protějšek napříč ČR i Evropou. Jádro celé služby — rychlé vložení nabídky, okamžité vyhledávání v nabídkách ostatních.",
  },
  {
    index: "02",
    from: "Prohlížeč",
    to: "Databanka",
    title: "Webová aplikace",
    body: "Běží v prohlížeči, přihlásíte se z kanceláře i z cesty. Bez instalace, stejné rozhraní na počítači i tabletu — všude, kde máte připojení.",
  },
  {
    index: "03",
    from: "Mobil",
    to: "Nabídka",
    title: "Mobilní aplikace",
    body: "Pro iOS i Android. Zadávejte a hledejte přepravy a volejte protistraně jedním klepnutím přímo z nabídky, aniž byste opisovali číslo.",
  },
  {
    index: "04",
    from: "Bod A",
    to: "Bod B",
    title: "Kilometrovník",
    body: "Spočítá vzdálenost, čas jízdy, náklady i mýto pro nalezenou přepravu nebo vlastní trasu. Uložte si vlastní šablony vozidel a počítejte v jejich sazbách.",
  },
  {
    index: "05",
    from: "Systém",
    to: "RAALTRANS",
    title: "API rozhraní",
    body: "Napojte svůj dispečerský systém přímo na databanku. Bezpečný přenos dat ušetří čas a odstraní chyby z ručního přepisování nabídek.",
  },
  {
    index: "06",
    from: "Dispečer",
    to: "Podpora",
    title: "Uživatelská podpora",
    body: "Bezplatné on-line školení, osobní návštěva nebo pomoc po telefonu, e-mailu a přes TeamViewer. Ozve se vám tým z Hradce Králové.",
  },
];

const reasons = [
  {
    from: "Dodávka",
    to: "Kamion",
    title: "Široká databáze",
    body: "Od malých dopravců po nadnárodní logistiku, od dodávek po kamiony. Spedice, výrobní závody i obchodní firmy hledají a nabízejí na jednom místě.",
  },
  {
    from: "Přihlášení",
    to: "Šifra",
    title: "Bezpečně a šifrovaně",
    body: "Přihlášení i přenos nabídek probíhá přes zabezpečené připojení (HTTPS). Vaše data i kontakty na protistrany zůstávají chráněné.",
  },
  {
    from: "Vy",
    to: "Tým",
    title: "Podpora, která zvedá telefon",
    body: "Lidé z Hradce Králové, kteří databanku provozují od roku 1992 a rozumí každodenní dispečerské praxi. Ne robot, ne fronta tiketů.",
  },
];

function SectionLabel({
  code,
  from,
  to,
}: {
  code: string;
  from: string;
  to: string;
}) {
  return (
    <div className="mrow" aria-hidden="true">
      <span className="mrow-code">{code}</span>
      <span className="node node-a" />
      <span className="rule" />
      <span className="node node-b" />
      <span className="mrow-ends">
        {from} → {to}
      </span>
    </div>
  );
}

export default function Page() {
  return (
    <main>
      <section className="hero">
        <div className="container hero-inner">
          <p className="eyebrow">Přepravní databanka · Hradec Králové · od 1992</p>
          <h1 className="hero-h1">
            Volný náklad
            <br />
            hledá volné vozidlo.
          </h1>
          <p className="hero-sub">
            RAALTRANS je živá databanka, kde dispečer během chvíle spáruje
            přepravu s vozem — napříč ČR i Evropou. Zadáte nabídku, my ukážeme
            protějšek, kilometrovník dopočítá trasu i mýto. Aby vozidla nejezdila
            prázdná.
          </p>
          <HeroBoard />
        </div>
      </section>

      <section className="sec sec-catalog">
        <div className="container">
          <header className="sec-head">
            <SectionLabel code="KAT" from="Služby" to="6 nástrojů" />
            <h2 className="sec-title">Nástroje, které dispečer používá celý den</h2>
            <p className="sec-lead">
              Jedna databanka, šest vstupů. Každý je vlastně jedna spárovaná
              linka — mezi vámi a nákladem, vozidlem nebo naším týmem.
            </p>
          </header>

          <ol className="catalog">
            {services.map((s) => (
              <li key={s.index} className="card">
                <div className="card-manifest" aria-hidden="true">
                  <span className="node node-a" />
                  <span className="card-end">{s.from}</span>
                  <span className="rule" />
                  <span className="card-end">{s.to}</span>
                  <span className="node node-b" />
                </div>
                <div className="card-body">
                  <span className="card-index">{s.index}</span>
                  <h3 className="card-title">{s.title}</h3>
                  <p className="card-text">{s.body}</p>
                </div>
                <span className="card-sweep" aria-hidden="true" />
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="sec sec-trust">
        <div className="container">
          <header className="sec-head">
            <SectionLabel code="REF" from="O firmě" to="33 let" />
            <h2 className="sec-title sec-title-light">
              33 let párujeme náklad s vozidlem.
            </h2>
            <p className="sec-lead sec-lead-light">
              Databanku RAALTRANS zdokonalujeme od roku 1992. Od té doby máme
              jediný cíl: aby nákladní vozidla jezdila co nejvíc vytížená a
              výrobce vždy našel vůz pro svůj náklad. Doprava je krev ekonomiky —
              my ji necháváme proudit.
            </p>
          </header>

          <div className="stats" role="list">
            <div className="stat" role="listitem">
              <span className="stat-num">1992</span>
              <span className="stat-label">rok, kdy databanka poprvé spárovala náklad</span>
            </div>
            <div className="stat" role="listitem">
              <span className="stat-num">33+</span>
              <span className="stat-label">let provozu spediční databanky</span>
            </div>
            <div className="stat" role="listitem">
              <span className="stat-num">ČR + EU</span>
              <span className="stat-label">vnitrostátní i mezinárodní přepravy a dokládky</span>
            </div>
          </div>

          <ul className="reasons">
            {reasons.map((r) => (
              <li key={r.title} className="reason">
                <div className="card-manifest card-manifest-dark" aria-hidden="true">
                  <span className="node node-a" />
                  <span className="card-end">{r.from}</span>
                  <span className="rule" />
                  <span className="card-end">{r.to}</span>
                  <span className="node node-b" />
                </div>
                <h3 className="reason-title">{r.title}</h3>
                <p className="reason-text">{r.body}</p>
              </li>
            ))}
          </ul>

          <p className="trust-foot">
            Sídlíme v Hradci Králové, Ukázková 123. Prověření uživatelé,
            přístup odkudkoliv, podpora, která rozumí dispečerské praxi.
          </p>
        </div>
      </section>
    </main>
  );
}
