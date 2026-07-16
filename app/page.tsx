import { CountUp } from "./motion";

const sluzby = [
  {
    n: "01",
    t: "Krbová kamna",
    d: "Zastupujeme jen prověřené značky. Kamna vám přivezeme, ustavíme, smontujeme a napojíme na komín — hotové na zátop.",
    tags: ["Hoxter", "Jøtul", "Romotop", "Regency", "Pacific Energy"],
  },
  {
    n: "02",
    t: "Krby na klíč",
    d: "Konzultace, jednoduchá vizualizace i realizace. Vyberete akumulační, sálavý nebo izolační — dva krby máme na prodejně v provozu.",
    tags: ["Hoxter", "Romotop", "Haas & Sohn", "Defro"],
  },
  {
    n: "03",
    t: "Topení do výměníku",
    d: "Teplovodní krb zapojený do otopné soustavy vám ukážeme funkční. Profesionální dopojení řešíme s topenáři.",
    tags: ["La Nordica", "Thermorossi", "Hoxter", "Defro"],
  },
  {
    n: "04",
    t: "Sporáky na dřevo",
    d: "Uvaříte nedělní oběd a zároveň vytopíte kuchyň. I s teplovodním výměníkem a v několika barevných provedeních.",
    tags: ["KVS Moravia", "La Nordica", "Rizzoli"],
  },
  {
    n: "05",
    t: "Komíny",
    d: "Zaměříme, postavíme, vyvložkujeme, vyfrézujeme, přestavíme i zajistíme revizi. Keramické, betonové i nerezové.",
    tags: ["Schiedel", "Ciko", "Skorsten"],
  },
  {
    n: "06",
    t: "Peletová kamna",
    d: "Zatopí za vás — i přes aplikaci v telefonu, než dorazíte na chalupu. Dovezeme, napojíme, předvedeme, proškolíme.",
    tags: ["Aduro", "Thermorossi", "Haas & Sohn"],
  },
  {
    n: "07",
    t: "Grily",
    d: "Oficiální distributor prémiových grilů RÖSLE a Big Green Egg. Venkovní grilování jednoduše a bez limitů.",
    tags: ["RÖSLE", "Big Green Egg"],
  },
  {
    n: "08",
    t: "Servis a opravy",
    d: "Výměna skla, těsnicích šňůr, šamotů i izolačních desek. Řešte nejlépe mimo topnou sezónu.",
    tags: ["náhradní díly", "kouřovina", "šamoty"],
  },
];

const znacky = [
  "Hoxter", "Haas & Sohn", "Romotop", "Storch", "Hein", "KVS Moravia",
  "HS Flamingo", "HEDE", "Jøtul", "La Nordica", "Thermorossi", "Rocal",
  "Aduro", "HETA", "Leda", "Piazzetta", "Wanders", "Defro",
  "Regency", "Pacific Energy", "Hampton", "Napoleon", "Schiedel",
  "RÖSLE", "Big Green Egg",
];

export default function Page() {
  return (
    <main className="page">
      <header className="topbar">
        <a className="mark" href="#hero" aria-label="Kamna krby topení — domů">
          <span className="mark-plate">KKT</span>
          <span className="mark-words">
            <span>Kamna</span>
            <span>Krby</span>
            <span>Topení</span>
          </span>
        </a>
        <nav className="nav" aria-label="Hlavní">
          <a href="#sluzby">Služby</a>
          <a href="#prodejna">Prodejna</a>
          <a href="tel:+420734366044" className="nav-tel">734&nbsp;366&nbsp;044</a>
        </nav>
      </header>

      <section className="section hero" id="hero" aria-labelledby="hero-title">
        <p className="eyebrow">Kamnářství · Plzeň · naproti zimnímu stadionu</p>
        <div className="firebox hero-firebox">
          <div className="hero-inner">
            <h1 className="hero-title" id="hero-title">
              <span className="hero-line">Topení</span>
              <span className="hero-line hero-line--ember">nás baví</span>
            </h1>
            <p className="hero-sub">
              Kamna, krby a sporáky na pevná paliva — a stavba komínů.
              Největší prodejna kamen a krbů v západních Čechách, přes
              dvacet let na Cukrovarské v Plzni.
            </p>
            <div className="hero-actions">
              <a className="btn btn--ember" href="#sluzby">Prohlédnout nabídku</a>
              <a className="btn btn--ghost" href="tel:+420734366044">Zavolat 734&nbsp;366&nbsp;044</a>
            </div>
          </div>
        </div>

        <dl className="stats" aria-label="Čísla firmy">
          <div className="stat">
            <dt className="stat-num"><CountUp to={4000} />+</dt>
            <dd className="stat-label">spokojených zákazníků</dd>
          </div>
          <div className="stat">
            <dt className="stat-num"><CountUp to={200} /></dt>
            <dd className="stat-label">realizací ročně</dd>
          </div>
          <div className="stat">
            <dt className="stat-num"><CountUp to={20} /></dt>
            <dd className="stat-label">let zkušeností</dd>
          </div>
        </dl>
      </section>

      <section className="section catalog" id="sluzby" aria-labelledby="sluzby-title">
        <div className="section-head">
          <p className="eyebrow">Katalog · co u nás pořídíte a zařídíme</p>
          <h2 className="section-title" id="sluzby-title">Osm dvířek naší dílny</h2>
          <p className="section-lede">
            Od výběru přes dopravu a montáž až po napojení na komín. Každou
            zakázku vedeme od prvního náčrtu k prvnímu zátopu.
          </p>
        </div>
        <ul className="tiles" role="list">
          {sluzby.map((s) => (
            <li className="firebox tile" key={s.n}>
              <span className="tile-num">{s.n}</span>
              <h3 className="tile-title">{s.t}</h3>
              <p className="tile-desc">{s.d}</p>
              <ul className="tile-tags" role="list">
                {s.tags.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </section>

      <section className="section trust" id="prodejna" aria-labelledby="trust-title">
        <div className="trust-grid">
          <div className="trust-copy">
            <p className="eyebrow">Prodejna · Plzeň 3</p>
            <h2 className="section-title" id="trust-title">
              Přijďte se podívat na oheň naživo
            </h2>
            <p className="section-lede">
              Na prodejně naproti zimnímu stadionu máme dva krby v provozu —
              izolační i akumulační — a plně funkční teplovodní krb zapojený
              do otopné soustavy. Poradíme u zapáleného kamen, ne u katalogu.
            </p>
            <div className="firebox visit">
              <p className="visit-address">
                Cukrovarská 2<br />301 00 Plzeň&nbsp;3
              </p>
              <p className="visit-contact">
                <a href="tel:+420734366044">+420 734 366 044</a>
                <a href="mailto:cukrovarska@kamnakrbytopeni.cz">cukrovarska@kamnakrbytopeni.cz</a>
              </p>
            </div>
          </div>
          <div className="trust-brands">
            <p className="brands-label">Značky, které u nás dostanete a servisujeme</p>
            <ul className="brands" role="list">
              {znacky.map((z) => (
                <li className="brand" key={z}>{z}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
