import type { CSSProperties } from "react";

export default function Page() {
  const targets = [
    {
      no: "01",
      name: "Potkani a myši",
      where: "sklepy, kanalizace, sklady, zemědělské provozy",
      how: "Rozmístíme jedové staničky do bezpečných uzamykatelných staniček, vedeme deratizační deník a hlídáme přibývání i mizení nástrah.",
    },
    {
      no: "02",
      name: "Šváby a rusi",
      where: "kuchyně restaurací, pekárny, výrobny potravin",
      how: "Gelové návnady a cílený postřik v místech, kudy hmyz opravdu chodí — za linkou, u odpadů, v prostupech technologií.",
    },
    {
      no: "03",
      name: "Štěnice",
      where: "ubytovny, penziony, byty po nájemnících",
      how: "Kombinujeme horkovzdušné ošetření a insekticid do štěrbin postelí a lišt. Vždy s kontrolou po deseti dnech.",
    },
    {
      no: "04",
      name: "Mravenci a vosy",
      where: "terasy, půdy, obvodové zdivo",
      how: "Najdeme hnízdo, ne jen dělnice. Vosí hnízda odstraňujeme v ochranném obleku i z těžko dostupných míst.",
    },
  ];

  return (
    <main className="pg">
      <header className="nav" aria-label="Hlavní">
        <a href="#" className="wm" aria-label="Sanekta, deratizace České Budějovice">
          <span className="wm-mark" aria-hidden="true">◵</span>
          <span className="wm-word">SANEKTA</span>
          <span className="wm-sub">v.o.s. — ochrana proti škůdcům</span>
        </a>
        <a className="nav-tel" href="tel:+420387000000">Zavolat deratizéra</a>
      </header>

      <section className="hero">
        <div className="hero-img">
          <img
            src="/hero.webp"
            alt="Deratizér Sanekty umisťuje uzamykatelnou nástrahovou staničku podél zdi provozu"
            width={1600}
            height={1200}
          />
          <span className="hero-tag" aria-hidden="true">Staniček č. 14 — kontrola po 30 dnech</span>
        </div>

        <div className="hero-copy">
          <p className="eyebrow">České Budějovice · v oboru od roku 1986</p>
          <h1>
            Škůdce najdeme<br />
            dřív, než ho<br />
            <span className="h1-em">uvidíte vy.</span>
          </h1>
          <p className="lede">
            Dezinfekce, dezinsekce, deratizace a desikace pro provozovny,
            firmy i domácnosti na jihu Čech. Přijedeme, najdeme cestu, kudy
            škůdce chodí, a založíme kontrolu — ne jednorázový postřik naslepo.
          </p>
          <div className="hero-cta">
            <a className="btn" href="tel:+420387000000">Objednat zásah</a>
            <a className="btn btn-ghost" href="#nabidka">Co řešíme nejčastěji</a>
          </div>
        </div>
      </section>

      <section className="nabidka" id="nabidka" aria-labelledby="nabidka-h">
        <div className="sec-head">
          <p className="eyebrow">Terénní deník</p>
          <h2 id="nabidka-h">Čtyři nejčastější zápisy z výjezdů</h2>
          <p className="sec-note">
            Ke každému škůdci patří jiné místo a jiná metoda. Takhle to řešíme na místě.
          </p>
        </div>

        <ol className="cards">
          {targets.map((t) => (
            <li className="card" key={t.no}>
              <span className="card-no" aria-hidden="true">{t.no}</span>
              <h3>{t.name}</h3>
              <p className="card-where">{t.where}</p>
              <p className="card-how">{t.how}</p>
            </li>
          ))}
        </ol>

        <figure className="figband">
          <img
            src="/section-1.webp"
            alt="Aplikace gelové návnady proti švábům do štěrbiny za kuchyňskou linkou"
            width={1600}
            height={900}
          />
          <figcaption>
            Gelová návnada mizí tam, kudy hmyz opravdu chodí — za linkou, u odpadu, v prostupech.
          </figcaption>
        </figure>
      </section>

      <section className="onas" aria-labelledby="onas-h">
        <div className="onas-grid">
          <div className="onas-copy">
            <p className="eyebrow">Kdo přijede</p>
            <h2 id="onas-h">Rodinná firma, která obor dělá od doby, kdy se ještě sázelo z olova.</h2>
            <p>
              Zakladatel Sanekty pracuje v deratizaci od roku 1986, firma jezdí
              pod svým jménem od roku 2001. Za tu dobu jsme prošli sklepy paneláků
              i chladírny masokombinátů — a víme, že důvěra se buduje tím, že se
              vracíme na kontrolu, ne slibem po telefonu.
            </p>

            <dl className="facts">
              <div>
                <dt>V oboru od</dt>
                <dd>1986</dd>
              </div>
              <div>
                <dt>Působíme na</dt>
                <dd>jihu Čech</dd>
              </div>
              <div>
                <dt>Členství</dt>
                <dd>Sdružení DDD ČR · CEPA</dd>
              </div>
            </dl>

            <p className="onas-note">
              Jsme členy Sdružení pracovníků dezinfekce, dezinsekce a deratizace ČR
              a evropské konfederace CEPA. Pracujeme s přípravky registrovanými
              v ČR a vedeme dokumentaci, kterou uznají hygiena i auditor HACCP.
            </p>
          </div>

          <figure className="onas-fig">
            <img
              src="/section-2.webp"
              alt="Technik Sanekty v ochranném obleku připravuje aplikační techniku před zásahem"
              width={1200}
              height={1400}
            />
          </figure>
        </div>
      </section>
    </main>
  );
}
