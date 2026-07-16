import { SizeSelector } from "./motion";

const CATEGORIES = ["Osobní", "Dodávkové", "Nákladní", "Moto", "Traktory a stroje"];

const PNEUSERVIS = [
  { code: "225/45 R17 91V", name: "Přezutí a vyvážení", note: "Sezónní výměna, dynamické vyvážení na zátěžové stolici." },
  { code: "HOTEL 4×", name: "Uskladnění pneu", note: "Pneuhotel v hale — očištěné, popsané, připravené na příští sezónu." },
  { code: "DEFEKT", name: "Oprava a přezutí za jízdy", note: "Zalepení, vulkanizace, rychlá výměna při defektu." },
  { code: "RÁFEK 15–24", name: "Disky všech typů", note: "Ocelové i litá kola, ventilky, čištění a rovnání ráfků." }
];

const AUTOSERVIS = [
  { code: "GEO 3D", name: "Seřízení geometrie", note: "Sbíhavost a odklon na 3D stolici, protokol po měření." },
  { code: "BRZDY", name: "Brzdy a brzdové díly", note: "Kotouče, destičky, kontrola i výměna kompletního systému." },
  { code: "OBD", name: "Diagnostika", note: "Čtení chyb řídicích jednotek, kontrola před STK." },
  { code: "5W-30", name: "Oleje a provozní kapaliny", note: "Výměna oleje, filtrů, chladicí i brzdové kapaliny." }
];

const BRANDS = [
  "Barum", "Continental", "Michelin", "Pirelli", "Goodyear",
  "Nokian Tyres", "Hankook", "Bridgestone", "Matador", "Dunlop",
  "Semperit", "Kumho", "Fulda", "Sava"
];

const BRANCHES = [
  {
    code: "HK · 01",
    name: "Bratří Štefanů 997",
    area: "Slezské Předměstí, Hradec Králové",
    detail: "Pneuservis i autoservis pod jednou střechou."
  },
  {
    code: "HK · 02",
    name: "Pražská 153",
    area: "Kukleny, Hradec Králové",
    detail: "Prodej pneu, přezutí a uskladnění."
  }
];

export default function Page() {
  return (
    <>
      <header className="site-head">
        <a className="wm" href="#top" aria-label="Pneu Kuthan, domů">
          <span className="wm__tag">PK</span>
          <span className="wm__name">
            PNEU<span className="wm__dot">·</span>KUTHAN
          </span>
        </a>
        <nav className="site-nav" aria-label="Hlavní">
          <a href="#sluzby">Služby</a>
          <a href="#pobocky">Pobočky</a>
          <a className="phone-btn" href="tel:+420495221555">
            <span className="phone-btn__label">Zavolat</span>
            <span className="phone-btn__num">495 221 555</span>
          </a>
        </nav>
      </header>

      <main id="top">
        <section className="hero" aria-labelledby="hero-h">
          <div className="hero__grid">
            <div className="hero__lead">
              <p className="eyebrow">Pneuservis · Autoservis · Hradec Králové · od roku 1991</p>
              <h1 id="hero-h" className="hero__title">
                Přezouváme podle<br />čísel z&nbsp;bočnice.
              </h1>
              <p className="hero__sub">
                Nastavte šířku, profil a&nbsp;ráfek — sestaví se přesný rozměr vaší
                pneumatiky, přesně jak je vyražený na&nbsp;bočnici. Pak stačí zavolat
                a&nbsp;domluvit termín.
              </p>
              <ul className="cats" aria-label="Co obujeme">
                {CATEGORIES.map((c) => (
                  <li key={c}>{c}</li>
                ))}
              </ul>
            </div>

            <div className="hero__panel">
              <SizeSelector />
            </div>
          </div>
        </section>

        <div className="groove" role="presentation" />

        <section className="section" id="sluzby" aria-labelledby="sluzby-h">
          <div className="section__head">
            <p className="eyebrow">Dvě dílny, jedna adresa problému</p>
            <h2 id="sluzby-h" className="section__title">Pneuservis i&nbsp;autoservis</h2>
            <p className="section__intro">
              Od gumy přes geometrii po brzdy. Co u&nbsp;auta souvisí s&nbsp;jízdou po&nbsp;čtyřech
              kolech, vyřešíme na&nbsp;místě.
            </p>
          </div>

          <div className="cols">
            <div className="col">
              <h3 className="col__label">Pneuservis</h3>
              <ul className="cards">
                {PNEUSERVIS.map((s) => (
                  <li key={s.name} className="card">
                    <span className="stamp-tag">{s.code}</span>
                    <h4 className="card__name">{s.name}</h4>
                    <p className="card__note">{s.note}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div className="col">
              <h3 className="col__label">Autoservis</h3>
              <ul className="cards">
                {AUTOSERVIS.map((s) => (
                  <li key={s.name} className="card">
                    <span className="stamp-tag">{s.code}</span>
                    <h4 className="card__name">{s.name}</h4>
                    <p className="card__note">{s.note}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <div className="groove" role="presentation" />

        <section className="section" id="pobocky" aria-labelledby="pobocky-h">
          <div className="section__head">
            <p className="eyebrow">Rodinný pneuservis od roku 1991</p>
            <h2 id="pobocky-h" className="section__title">Najdete nás<br />ve dvou dílnách</h2>
            <p className="section__intro">
              Přes třicet sezón obouváme auta v&nbsp;Hradci Králové — od maloobchodu
              po velkoobchod, od malého hatchbacku po traktor.
            </p>
          </div>

          <div className="branches">
            {BRANCHES.map((b) => (
              <article key={b.name} className="branch">
                <span className="stamp-tag">{b.code}</span>
                <h3 className="branch__name">{b.name}</h3>
                <p className="branch__area">{b.area}</p>
                <p className="branch__detail">{b.detail}</p>
              </article>
            ))}
          </div>

          <div className="brands">
            <p className="brands__label">Skladem i&nbsp;na objednávku</p>
            <ul className="brands__list" aria-label="Značky pneumatik">
              {BRANDS.map((b) => (
                <li key={b} className="stamp-tag stamp-tag--muted">{b}</li>
              ))}
            </ul>
          </div>
        </section>
      </main>
    </>
  );
}
