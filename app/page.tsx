import type { CSSProperties } from "react";

const sluzby = [
  {
    code: "AD",
    name: "Autodoprava",
    desc: "Vnitrostátní i nadrozměrná přeprava. Naložíme, zajistíme a dovezeme náklad tam, kam potřebujete — i to, co se na běžný valník nevejde.",
  },
  {
    code: "JP",
    name: "Jeřábnické práce",
    desc: "Zvedání a přesné usazování břemen i v místech, kam se jiná technika nedostane. Od jednoho kusu po celý den na stavbě.",
  },
  {
    code: "ZP",
    name: "Zemní práce",
    desc: "Výkopy, terénní úpravy a příprava staveniště — podle projektu i podle toho, co zrovna najdeme na místě.",
  },
  {
    code: "VP",
    name: "Výškové práce",
    desc: "Práce ve výškách bezpečně, s vyškolenou obsluhou a certifikovaným vybavením. Tam, kde se lešení nevyplatí.",
  },
];

const vedeni = [
  {
    name: "Jaroslav Višňák",
    role: "jednatel",
    note: "Vede firmu a domlouvá zakázky napřímo — bez zbytečného kolečka přes kancelář.",
  },
  {
    name: "Jakub Višňák",
    role: "technik / dispečer",
    note: "Plánuje techniku a bere telefon na dispečinku. Poradí, co na zakázku reálně nasadit.",
  },
];

const ledger = [
  { k: "EST", v: "2020" },
  { k: "BÁZE", v: "Ústí n. L." },
  { k: "ADRESA", v: "Ryjická 242" },
  { k: "PROVOZ", v: "24/7" },
];

export default function Page() {
  return (
    <main className="jv">
      <header className="jv-hero">
        <div className="jv-topbar">
          <a className="jv-wordmark" href="#top" id="top">
            <span className="jv-wordmark-block" aria-hidden="true" />
            <span className="jv-wordmark-name">JALVIS</span>
            <span className="jv-wordmark-sro">s.r.o.</span>
          </a>
          <nav className="jv-nav" aria-label="Hlavní navigace">
            <a href="#sluzby">Služby</a>
            <a href="#firma">Firma</a>
            <span className="jv-nav-status">
              <span className="jv-dot" aria-hidden="true" />
              Dispečink 24/7
            </span>
          </nav>
        </div>

        <div className="jv-hero-grid">
          <div className="jv-hero-copy">
            <p className="jv-eyebrow jv-rise jv-rise-1">
              Autodoprava · Jeřábnické práce · Zemní práce · Výškové práce
            </p>
            <h1 className="jv-h1 jv-rise jv-rise-2">
              Zvedneme a odvezeme,
              <br />
              co ostatní nechají stát.
            </h1>
            <p className="jv-lead jv-rise jv-rise-3">
              Jalvis je rodinná firma z Ústí nad Labem. Vlastní technika,
              nadrozměrná přeprava a dispečink, který bere telefon i o víkendu
              a v noci. Řekněte nám, co je potřeba dostat z místa na místo — my
              najdeme způsob.
            </p>
            <div className="jv-hero-actions jv-rise jv-rise-4">
              <a className="jv-btn jv-btn-primary" href="#sluzby">
                Prohlédnout služby
              </a>
              <span className="jv-hero-note">
                Nezávazná poptávka — ozveme se s termínem a cenou.
              </span>
            </div>
          </div>

          <figure className="jv-hero-figure jv-rise jv-rise-3">
            <div className="jv-hero-plate">
              <span>FOTO</span>
              <span>VOZOVÝ PARK · JALVIS</span>
            </div>
            <img
              src="/hero.webp"
              alt="Technika firmy Jalvis připravená na zakázku v Ústí nad Labem"
              className="jv-hero-img"
              loading="eager"
              decoding="async"
            />
          </figure>
        </div>

        <dl className="jv-ledger jv-rise jv-rise-5" aria-label="Provozní údaje">
          {ledger.map((item) => (
            <div className="jv-ledger-cell" key={item.k}>
              <dt>{item.k}</dt>
              <dd>{item.v}</dd>
            </div>
          ))}
          <div className="jv-ledger-cell jv-ledger-status">
            <dt>STAV</dt>
            <dd>
              <span className="jv-dot" aria-hidden="true" />
              volná technika
            </dd>
          </div>
        </dl>
      </header>

      <section className="jv-section jv-section-light" id="sluzby" aria-labelledby="sluzby-nadpis">
        <div className="jv-section-head">
          <p className="jv-index">01 / SLUŽBY</p>
          <h2 className="jv-h2" id="sluzby-nadpis">
            Čtyři věci, které umíme pořádně.
          </h2>
          <p className="jv-section-intro">
            Zakládáme si na precizně odvedené práci a individuálním přístupu ke
            každé zakázce. Když máme volnou techniku, jsme schopni vyjet
            prakticky kdykoliv.
          </p>
        </div>

        <div className="jv-services">
          <ol className="jv-service-list">
            {sluzby.map((s) => (
              <li className="jv-service" key={s.code}>
                <span className="jv-service-code" aria-hidden="true">
                  {s.code}
                </span>
                <div className="jv-service-body">
                  <h3 className="jv-service-name">{s.name}</h3>
                  <p className="jv-service-desc">{s.desc}</p>
                </div>
              </li>
            ))}
          </ol>
          <figure className="jv-service-figure">
            <div className="jv-hero-plate jv-hero-plate-dark">
              <span>FOTO</span>
              <span>NASAZENÍ TECHNIKY</span>
            </div>
            <img
              src="/section-1.webp"
              alt="Jalvis při práci — technika nasazená na zakázce"
              className="jv-service-img"
              loading="lazy"
              decoding="async"
            />
          </figure>
        </div>
      </section>

      <section className="jv-section jv-section-dark" id="firma" aria-labelledby="firma-nadpis">
        <div className="jv-firma-grid">
          <figure className="jv-firma-figure">
            <div className="jv-hero-plate">
              <span>FOTO</span>
              <span>JALVIS · ÚSTÍ NAD LABEM</span>
            </div>
            <img
              src="/section-2.webp"
              alt="Zázemí firmy Jalvis v Ústí nad Labem"
              className="jv-firma-img"
              loading="lazy"
              decoding="async"
            />
          </figure>

          <div className="jv-firma-copy">
            <p className="jv-index jv-index-dark">02 / FIRMA</p>
            <h2 className="jv-h2" id="firma-nadpis">
              Malá firma, se kterou se dá domluvit.
            </h2>
            <p className="jv-firma-text">
              Jsme společnost založená v roce 2020 se sídlem v Ústí nad Labem –
              Ryjická 242. Vždycky hledáme řešení, které bude efektivní, bezpečné
              a spolehlivé. Jde nám o spokojenost zákazníka a dlouhodobou
              spolupráci — ne o jednu rychlou fakturu.
            </p>

            <ul className="jv-firma-facts">
              <li>
                <span className="jv-fact-k">ROK</span>Založeno 2020
              </li>
              <li>
                <span className="jv-fact-k">SÍDLO</span>Ryjická 242, Ústí nad Labem
              </li>
              <li>
                <span className="jv-fact-k">DOSTUPNOST</span>Dispečink 24/7
              </li>
              <li>
                <span className="jv-fact-k">TECHNIKA</span>Vlastní vozy a stroje
              </li>
            </ul>

            <div className="jv-vedeni">
              <p className="jv-vedeni-title">Vedení firmy</p>
              <div className="jv-vedeni-list">
                {vedeni.map((p) => (
                  <div className="jv-person" key={p.name}>
                    <h3 className="jv-person-name">{p.name}</h3>
                    <p className="jv-person-role">{p.role}</p>
                    <p className="jv-person-note">{p.note}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
