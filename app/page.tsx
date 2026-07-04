import type { CSSProperties } from "react";

export default function Page() {
  const sluzby = [
    {
      cislo: "01",
      nazev: "Opravy a diagnostika",
      popis:
        "Kompletní servis vozu od výměny oleje a rozvodů po čtení chybových kódů z řídicí jednotky. Vždy vám dopředu řekneme, co je nutné teď a co počká.",
      detail: "osobní · užitkové · nákladní",
    },
    {
      cislo: "02",
      nazev: "Měření emisí a STK",
      popis:
        "Vlastní emisní stanice pro benzin, diesel, LPG i CNG. Vůz připravíme a technickou dohlídneme za vás — vy jen přijedete a odjedete s razítkem.",
      detail: "benzin · diesel · LPG · CNG",
    },
    {
      cislo: "03",
      nazev: "Pneuservis",
      popis:
        "Přezutí, vyvážení i uskladnění na novém vybavení. Poradíme s výběrem gum a seženeme je za rozumnou cenu — od malého hatchbacku po LKW.",
      detail: "přezutí · prodej · uskladnění",
    },
    {
      cislo: "04",
      nazev: "Klimatizace",
      popis:
        "Vyčistíme klimatizaci od plísní a bakterií, doplníme chladivo a zbavíme kabinu nepříjemného zápachu. Ať v létě dýcháte čistý vzduch.",
      detail: "čištění · plnění · dezinfekce",
    },
  ];

  const reference = [
    {
      text: "Servisujeme tady celou svou firemní flotilu. Domluva bez řečí, termíny drží.",
      kdo: "Karásek s.r.o.",
    },
    {
      text: "Nejlepší jednání a služby, se kterými jsem se v servisu setkal.",
      kdo: "p. Steklý",
    },
    {
      text: "Prostě super. Každou sezonu sem jezdím přezouvat.",
      kdo: "p. Wiesmann",
    },
  ];

  return (
    <main className="hp">
      <header className="hp-top">
        <a className="hp-mark" href="#uvod" aria-label="AutoservisHP, úvod">
          <span className="hp-mark__hp">HP</span>
          <span className="hp-mark__rest">autoservis</span>
        </a>
        <nav className="hp-nav" aria-label="Hlavní navigace">
          <a href="#sluzby">Služby</a>
          <a href="#onas">O nás</a>
          <a className="hp-nav__call" href="tel:+420778528491">
            778 528 491
          </a>
        </nav>
      </header>

      <section className="hp-hero" id="uvod">
        <div className="hp-hero__img">
          <img
            src="/hero.webp"
            alt="Servisní hala AutoservisHP v Českých Budějovicích se zvednutým vozem na zvedáku"
          />
        </div>
        <div className="hp-hero__panel">
          <p className="hp-eyebrow">Nemanice · České Budějovice · od 1990</p>
          <h1 className="hp-hero__title">
            Zvedneme vám vůz.
            <br />
            <span>Zbytek starostí</span> taky.
          </h1>
          <p className="hp-hero__lead">
            Rodinný autoservis na severu Budějovic. Opravy, diagnostika,
            emise, STK, pneuservis i klimatizace na 800 m² pod jednou
            střechou. Přijedete s problémem, odjedete bez něj — a káva je
            u nás zdarma.
          </p>
          <div className="hp-hero__actions">
            <a className="hp-btn" href="tel:+420778528491">
              Zavolat na příjem zakázek
            </a>
            <a className="hp-btn hp-btn--ghost" href="#sluzby">
              Co opravíme
            </a>
          </div>
          <dl className="hp-hero__meta">
            <div>
              <dt>Příjem zakázek</dt>
              <dd>
                <a href="tel:+420778528491">778 528 491</a>
              </dd>
            </div>
            <div>
              <dt>Kancelář</dt>
              <dd>
                <a href="tel:+420387220381">387 220 381</a>
              </dd>
            </div>
            <div>
              <dt>Kde jsme</dt>
              <dd>Jubilejní 48, 370 10 Č. Budějovice</dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="hp-sluzby" id="sluzby">
        <div className="hp-section-head">
          <p className="hp-eyebrow hp-eyebrow--dark">Co pro váš vůz uděláme</p>
          <h2>Čtyři dílny, jedno stání</h2>
          <p className="hp-section-sub">
            Nemusíte objíždět půl města. Emise, guma i klimatizace jsou
            u nás v jedné hale — a jeden mechanik dohlédne na všechno.
          </p>
        </div>

        <ol className="hp-cards">
          {sluzby.map((s) => (
            <li className="hp-card" key={s.cislo}>
              <span className="hp-card__num" aria-hidden="true">
                {s.cislo}
              </span>
              <div className="hp-card__body">
                <h3>{s.nazev}</h3>
                <p>{s.popis}</p>
                <p className="hp-card__detail">{s.detail}</p>
              </div>
            </li>
          ))}
        </ol>

        <figure className="hp-sluzby__figure">
          <img
            src="/section-1.webp"
            alt="Mechanik AutoservisHP při diagnostice a opravě motoru vozidla"
          />
          <figcaption>
            Emise pro benzin, diesel, LPG i CNG — a přípravu na STK
            vyřídíme za vás.
          </figcaption>
        </figure>
      </section>

      <section className="hp-onas" id="onas">
        <div className="hp-onas__grid">
          <div className="hp-onas__text">
            <p className="hp-eyebrow">Od roku 1990 na stejné adrese</p>
            <h2>
              Rodinná firma, která
              <br /> tady stojí přes třicet let
            </h2>
            <p>
              Začínali jsme na začátku 90. let a dnes patříme k největším
              servisům v Českých Budějovicích — patnáct lidí, 800 m²
              dílny a stroje na osobáky, užitkové i nákladní vozy. Za tu
              dobu jsme opravili flotily firem i rodinná auta sousedů.
              U nás nejste číslo zakázky.
            </p>
            <ul className="hp-facts">
              <li>
                <strong>1990</strong>
                <span>rok, kdy jsme otevřeli</span>
              </li>
              <li>
                <strong>800 m²</strong>
                <span>servisní plochy</span>
              </li>
              <li>
                <strong>15</strong>
                <span>mechaniků a techniků</span>
              </li>
            </ul>
            <div className="hp-hours">
              <h3>Kdy máme otevřeno</h3>
              <table>
                <tbody>
                  <tr>
                    <th scope="row">Po–Čt</th>
                    <td>7:00 – 17:00</td>
                  </tr>
                  <tr>
                    <th scope="row">Pátek</th>
                    <td>7:00 – 16:00</td>
                  </tr>
                  <tr>
                    <th scope="row">Polední pauza</th>
                    <td>11:30 – 12:00</td>
                  </tr>
                  <tr>
                    <th scope="row">Víkend a svátky</th>
                    <td>zavřeno</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="hp-onas__media">
            <img
              src="/section-2.webp"
              alt="Interiér autoservisu AutoservisHP v Nemanicích v Českých Budějovicích"
            />
          </div>
        </div>

        <div className="hp-quotes">
          <p className="hp-eyebrow hp-eyebrow--dark">Co říkají zákazníci</p>
          <ul>
            {reference.map((r) => (
              <li key={r.kdo} className="hp-quote">
                <p>„{r.text}“</p>
                <cite>— {r.kdo}</cite>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
