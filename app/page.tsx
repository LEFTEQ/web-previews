import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "WAZA Security Pardubice — ostraha, PCO, zásahová jednotka od roku 1991",
  description:
    "Bezpečnostní agentura WAZA Security, Pardubice. Pult centralizované ochrany s vlastní zásahovou jednotkou, fyzická ostraha, převozy cenin, EZS a kamerové systémy. Od roku 1991 pro celé východní Čechy.",
  openGraph: {
    title: "WAZA Security Pardubice — hlídáme od roku 1991",
    description:
      "Pult centralizované ochrany s vlastní zásahovou jednotkou, fyzická ostraha, převozy cenin a technické zabezpečení. Pardubice a východní Čechy.",
    locale: "cs_CZ",
    type: "website",
  },
};

const sluzby = [
  {
    kod: "PCO",
    nazev: "Pult centralizované ochrany",
    popis:
      "Váš objekt hlídá operační středisko v Pardubicích 24 hodin denně. Když se spustí čidlo, do minuty víme kde a co se děje — a vyjíždí naše vlastní zásahová jednotka, ne dispečer s telefonem.",
    stav: "nepřetržitě",
  },
  {
    kod: "OST",
    nazev: "Fyzická ostraha objektů",
    popis:
      "Strážní ve výrobních halách, prodejnách, kancelářích i na kulturních a sportovních akcích. Prošli výcvikem, znají objekt a vedou knihu služby, do které můžete kdykoli nahlédnout.",
    stav: "denní i noční směny",
  },
  {
    kod: "TRN",
    nazev: "Ozbrojené transporty cenin",
    popis:
      "Převoz hotovosti a cenností v doprovodu ozbrojené posádky. Trasa se plánuje předem, mění se nepravidelně a průběh sledujeme z operačního střediska.",
    stav: "na objednávku",
  },
  {
    kod: "EZS",
    nazev: "Technické zabezpečení",
    popis:
      "Elektronické zabezpečovací a požární systémy, kamery, přístupové systémy, bezpečnostní fólie a mříže. Dodáme, namontujeme, servisujeme — a rovnou napojíme na náš pult.",
    stav: "dodávka + servis",
  },
  {
    kod: "OOM",
    nazev: "Ochrana osob",
    popis:
      "Osobní ostraha, doprovod na jednání, ochrana rodinných domů. Diskrétně, bez zbytečné pozornosti. Součástí je i detektivní sekce a vyhledávání odcizených automobilů.",
    stav: "diskrétní režim",
  },
  {
    kod: "RDN",
    nazev: "Red Nose — drink servis",
    popis:
      "Odvezeme vás i vaše auto domů, když jste si dali skleničku. Řidič přijede za vámi, sedne za váš volant a druhý vůz jede za vámi. Ráno máte auto před domem.",
    stav: "večer a v noci",
  },
];

const milniky = [
  {
    rok: "1991",
    text: "Zahájení činnosti. Jedna z prvních agentur v republice, která spojila technickou a fyzickou ostrahu do jedné služby.",
  },
  {
    rok: "1. v Pardubicích",
    text: "První firma ve městě s pultem centralizované ochrany a vlastní zásahovou jednotkou — nečekáme na nikoho cizího.",
  },
  {
    rok: "Východní Čechy",
    text: "Z Pardubic jsme vyrostli do Vysokého Mýta, Ústí nad Orlicí, Rychnova nad Kněžnou i Hradce Králové.",
  },
  {
    rok: "100 % česká",
    text: "Bez zahraničního kapitálu. Člen Komory podniků komerční bezpečnosti ČR a Asociace soukromých bezpečnostních služeb ČR.",
  },
];

export default function Page() {
  return (
    <main className="waza">
      {/* ===== HERO ===== */}
      <header className="hero">
        <div className="hero-scan" aria-hidden="true" />
        <div className="hero-inner">
          <div className="hero-top">
            <span className="wordmark">
              WAZA<span className="wordmark-dot">●</span>SECURITY
            </span>
            <span className="hero-status">
              <span className="status-led" aria-hidden="true" />
              operační středisko Pardubice — ve službě
            </span>
          </div>

          <h1 className="hero-title">
            <span className="hero-line hero-line-1">Zatímco spíte,</span>
            <span className="hero-line hero-line-2">
              my <em>držíme hlídku.</em>
            </span>
          </h1>

          <p className="hero-sub">
            Bezpečnostní agentura z Pardubic. Od roku 1991 střežíme firmy, domy
            a akce po celých východních Čechách — s vlastním pultem
            centralizované ochrany a vlastní zásahovou jednotkou.
          </p>

          <dl className="hero-log" aria-label="Provozní údaje">
            <div className="log-row">
              <dt>Ve službě od</dt>
              <dd>1991</dd>
            </div>
            <div className="log-row">
              <dt>Dojezd zásahové jednotky</dt>
              <dd>vlastní posádka, 24/7</dd>
            </div>
            <div className="log-row">
              <dt>Stanoviště</dt>
              <dd>Dům Hudby, Sukova 1260, Pardubice</dd>
            </div>
            <div className="log-row">
              <dt>Tísňová linka pultu</dt>
              <dd>
                <a href="tel:+420466535387">+420 466 535 387</a>
              </dd>
            </div>
          </dl>
        </div>
      </header>

      {/* ===== SLUŽBY ===== */}
      <section className="sluzby" aria-labelledby="sluzby-h">
        <div className="section-head">
          <p className="eyebrow">Kniha služeb</p>
          <h2 id="sluzby-h">Co pro vás uhlídáme</h2>
          <p className="section-lead">
            Každá služba má svůj kód na pultu. Vyberte, co potřebujete pohlídat
            — od výrobní haly po cestu domů z večírku.
          </p>
        </div>

        <ul className="sluzby-grid">
          {sluzby.map((s) => (
            <li key={s.kod} className="karta">
              <div className="karta-hlava">
                <span className="karta-kod">{s.kod}</span>
                <span className="karta-stav">{s.stav}</span>
              </div>
              <h3>{s.nazev}</h3>
              <p>{s.popis}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* ===== DŮVĚRA / HISTORIE ===== */}
      <section className="duvera" aria-labelledby="duvera-h">
        <div className="section-head section-head-dark">
          <p className="eyebrow eyebrow-dark">Záznam o firmě</p>
          <h2 id="duvera-h">Třicet let v jedné knize hlášení</h2>
          <p className="section-lead section-lead-dark">
            Nejsme franšíza ani pobočka. Jsme pardubická firma, kterou ve městě
            znají po jméně — a naši lidé znají objekty, které hlídají.
          </p>
        </div>

        <ol className="milniky">
          {milniky.map((m) => (
            <li key={m.rok} className="milnik">
              <span className="milnik-rok">{m.rok}</span>
              <p>{m.text}</p>
            </li>
          ))}
        </ol>

        <blockquote className="reference">
          <p>
            „Naše výrobní haly hlídá WAZA přes deset let. Když v neděli v noci
            spadla vrata skladu na čidlo, zásahovka byla na místě dřív, než
            jsem stačil dojet z domova.“
          </p>
          <cite>— vedoucí provozu, výrobní areál Pardubicko</cite>
        </blockquote>

        <p className="duvera-pozn">
          K našim klientům patří firmy v ČR i v Evropské unii — mimo jiné
          Rieter Elitex, Hammer Bohemia nebo Merkur Sun.
        </p>
      </section>
    </main>
  );
}
