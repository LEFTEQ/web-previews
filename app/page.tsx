import type { CSSProperties } from "react";

const materialy = [
  { nazev: "Lomový kámen", frakce: "0/32", cena: "520", stopa: "drť pro základy i drenáže" },
  { nazev: "Betonový recyklát", frakce: "0/63", cena: "275", stopa: "podklad pod dlažbu a cesty" },
  { nazev: "Asfaltový recyklát", frakce: "obrus", cena: "250", stopa: "zpevnění příjezdů a dvorů" },
  { nazev: "Zemina tříděná", frakce: "—", cena: "180", stopa: "terénní úpravy a zásypy" },
  { nazev: "Zahradnická zemina AZ PARK", frakce: "—", cena: "380", stopa: "záhony, trávníky, výsadba" },
  { nazev: "Sadební substrát AZ PARK", frakce: "—", cena: "1150", stopa: "pro stromy a náročné rostliny" }
];

const kontejnery = [
  { objem: "3,5", popis: "drobná rekonstrukce, vyklizení sklepa" },
  { objem: "9", popis: "suť z koupelny nebo příčky" },
  { objem: "15", popis: "bourání a větší stavby" },
  { objem: "27", popis: "velkoobjemový odvoz a demolice" }
];

const odpady = [
  { nazev: "Výkopová zemina čistá (ornice)", kod: "170504", cena: "121" },
  { nazev: "Zemina znečištěná sutí", kod: "170504", cena: "484" },
  { nazev: "Beton drobný čistý", kod: "170101", cena: "218" },
  { nazev: "Beton armovaný", kod: "170101", cena: "472" },
  { nazev: "Cihelná suť drobná", kod: "170107", cena: "472" }
];

export default function Page() {
  return (
    <main className="az">
      <header className="az-top">
        <a className="az-logo" href="#" aria-label="AZ PARK, autodoprava Hradec Králové">
          <span className="az-logo-mark" aria-hidden="true">
            <span className="az-logo-a">A</span>
            <span className="az-logo-z">Z</span>
          </span>
          <span className="az-logo-word">
            PARK
            <span className="az-logo-sub">autodoprava · Hradec Králové</span>
          </span>
        </a>
        <nav className="az-nav" aria-label="Hlavní">
          <a href="#material">Materiál</a>
          <a href="#kontejnery">Kontejnery</a>
          <a href="#firma">Areál</a>
        </nav>
        <a className="az-call" href="tel:+420608807808">608&nbsp;807&nbsp;808</a>
      </header>

      <section className="az-hero" aria-labelledby="hero-title">
        <img className="az-hero-img" src="/hero.webp" alt="Sklápěč a hromady sypkého materiálu v areálu AZ PARK u Hradce Králové" />
        <div className="az-hero-grid" aria-hidden="true" />
        <div className="az-hero-inner">
          <p className="az-eyebrow">Sypké materiály · kontejnery · autodoprava</p>
          <h1 id="hero-title">
            Přivezeme tunu.<br />Odvezeme suť.
          </h1>
          <p className="az-lead">
            Areál kousek od centra Hradce Králové. Naložíme lomový kámen,
            recyklát i zahradní zeminu — a vlastními vozy MAN a Tatrou to
            dovezeme přesně tam, kde stavíte.
          </p>
          <div className="az-hero-cta">
            <a className="az-btn" href="tel:+420720989989">Objednat na 720&nbsp;989&nbsp;989</a>
            <a className="az-btn az-btn-ghost" href="#material">Ceník materiálu</a>
          </div>
          <dl className="az-hero-facts">
            <div><dt>Kontejnery</dt><dd>3,5–27&nbsp;m³</dd></div>
            <div><dt>Otevřeno</dt><dd>Po–Pá 7–16</dd></div>
            <div><dt>Vozový park</dt><dd>MAN &amp; Tatra</dd></div>
          </dl>
        </div>
        <p className="az-hero-note">Pauza 11–12 · azpark@azpark.cz</p>
      </section>

      <section className="az-sec" id="material" aria-labelledby="material-title">
        <div className="az-sec-head">
          <p className="az-eyebrow az-eyebrow-dark">Prodej sypkých materiálů</p>
          <h2 id="material-title">Cena za tunu. Bez okolků.</h2>
          <p className="az-sec-lead">
            Vážíme na místě a účtujeme podle skutečné hmotnosti. Naložíme vám
            to do vlastního auta, nebo dovezeme. Ceny jsou bez DPH, strojová
            nakládka do 2 tun je za jednorázových 100 Kč.
          </p>
        </div>

        <ul className="az-price-list">
          {materialy.map((m) => (
            <li className="az-price-row" key={m.nazev}>
              <span className="az-price-name">
                {m.nazev}
                <span className="az-price-stopa">{m.stopa}</span>
              </span>
              <span className="az-price-frakce">{m.frakce === "—" ? "" : `frakce ${m.frakce}`}</span>
              <span className="az-price-value"><b>{m.cena}</b><em>Kč / t</em></span>
            </li>
          ))}
        </ul>

        <figure className="az-figure">
          <img src="/section-1.webp" alt="Naložení sypkého materiálu na korbu nákladního vozu v areálu" />
          <figcaption>Zemina AZ PARK splňuje normy na složení — certifikát pošleme na požádání.</figcaption>
        </figure>
      </section>

      <section className="az-sec az-sec-alt" id="kontejnery" aria-labelledby="kont-title">
        <div className="az-sec-head">
          <p className="az-eyebrow">Příjem odpadu · kontejnerová doprava</p>
          <h2 id="kont-title">Vyberte kontejner podle toho, co bouráte.</h2>
        </div>
        <div className="az-kont-grid">
          {kontejnery.map((k) => (
            <div className="az-kont-card" key={k.objem}>
              <span className="az-kont-num">{k.objem}<i>m³</i></span>
              <p>{k.popis}</p>
            </div>
          ))}
        </div>
        <div className="az-odpad">
          <h3>Uložení odpadu v provozovně ČKD</h3>
          <p className="az-sec-lead">
            Zbavte se zeminy nebo suti u nás. Ceny včetně DPH za tunu.
            Nevykupujeme plasty, papír, sádrokarton, ytong ani sklo.
          </p>
          <table className="az-table">
            <caption className="az-visually-hidden">Ceník přijímaných odpadů</caption>
            <thead>
              <tr><th scope="col">Odpad</th><th scope="col">Kód</th><th scope="col">Cena / t</th></tr>
            </thead>
            <tbody>
              {odpady.map((o) => (
                <tr key={o.nazev + o.cena}>
                  <td>{o.nazev}</td>
                  <td className="az-mono">{o.kod}</td>
                  <td className="az-mono az-cena">{o.cena} Kč</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="az-sec" id="firma" aria-labelledby="firma-title">
        <div className="az-firma">
          <img src="/section-2.webp" alt="Provozovna a technika AZ PARK v Hradci Králové" />
          <div className="az-firma-text">
            <p className="az-eyebrow az-eyebrow-dark">O nás</p>
            <h2 id="firma-title">Váš dvůr materiálu za rohem centra.</h2>
            <p>
              AZ PARK má vlastní stavební, nákladní i přepravní techniku —
              MAN TGL, TGS, TGA i Tatru. Zajistíme výkopy, terénní úpravy
              i srovnání pozemku pro novou zahradu.
            </p>
            <ul className="az-check">
              <li>Vlastní autodoprava a kontejnery 3,5–27 m³</li>
              <li>Výkopové práce a terénní úpravy</li>
              <li>Ekologická likvidace stavební suti</li>
            </ul>
            <p className="az-open">
              <strong>Otevřeno:</strong> Po–Pá 7:00–16:00, pauza 11:00–12:00<br />
              Objednávky: <a href="tel:+420720989989">720 989 989</a> · <a href="mailto:azpark@azpark.cz">azpark@azpark.cz</a>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
