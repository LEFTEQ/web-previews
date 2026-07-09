import type { CSSProperties } from "react";

export default function Page() {
  const services = [
    {
      no: "01",
      title: "Snubní a zásnubní prsteny",
      text: "Vybereme model podle tvaru vaší ruky a vyryjeme datum i jména. Zlato i platinu skladem, úprava velikosti na počkání.",
      meta: "Zlato · platina · rytina zdarma",
    },
    {
      no: "02",
      title: "Oprava a čištění šperků",
      text: "Zaletování řetízku, výměna zapínání, nové kamínky i ultrazvukové vyčištění. Většinu drobných oprav zvládneme týž den.",
      meta: "Diagnostika na místě",
    },
    {
      no: "03",
      title: "Šperk na zakázku",
      text: "Z vlastního zlata po babičce nebo od nuly. Nakreslíme návrh, ukážeme voskový model a teprve pak odléváme.",
      meta: "Návrh · model · odlití",
    },
    {
      no: "04",
      title: "Výkup a protiúčet zlata",
      text: "Nenošené šperky vykoupíme podle aktuální ceny ryzího kovu, nebo je proměníte v nový kousek na protiúčet.",
      meta: "Denní cena kovu",
    },
    {
      no: "05",
      title: "Perly a barevné kameny",
      text: "Navlékání a převlékání perel na hedvábí, výběr safírů, smaragdů i českého granátu s certifikátem původu.",
      meta: "Přírodní kameny",
    },
    {
      no: "06",
      title: "Hodinky a servis",
      text: "Výměna baterie, těsnění i řemínku, seřízení strojku. Švýcarské i české značky pod jednou střechou.",
      meta: "Baterie · těsnění · řemínek",
    },
  ];

  return (
    <>
      <header className="topbar">
        <div className="wrap">
          <div className="mark" aria-label="Klenotnictví Olomouc CITY">
            <span>
              Zlatnictv<span className="dia">í</span>
            </span>
            <small>Olomouc CITY</small>
          </div>
          <nav className="topnav" aria-label="Hlavní">
            <a href="#nabidka">Nabídka</a>
            <a href="#dilna">Dílna</a>
            <a href="#kontakt">Otevřeno denně</a>
          </nav>
        </div>
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <div className="wrap">
          <div>
            <span className="hero-eyebrow reveal d1">Ryzí zlato · přímo v centru Olomouce</span>
            <h1 id="hero-title" className="reveal d2">
              Prsten, který <em>vydrží</em> déle než sliby.
            </h1>
            <p className="hero-lead reveal d2">
              Snubní a zásnubní prsteny, opravy i šperky na zakázku vyrábíme
              přímo v naší dílně v obchodním centru Olomouc CITY. Ryzost kovu
              poznáte podle punce &mdash; my za ni ručíme jménem.
            </p>
            <div className="hero-actions reveal d3">
              <a className="btn btn-solid" href="#nabidka">
                Prohlédnout nabídku
              </a>
              <a className="btn btn-ghost" href="#dilna">
                Přijít do dílny
              </a>
            </div>
          </div>
          <figure className="hero-figure reveal d3">
            <img
              src="/hero.webp"
              alt="Zlatník při ruční práci na snubním prstenu v klenotnictví Olomouc CITY"
            />
            <div className="hallmark" aria-hidden="true">
              <div className="hallmark-ring" />
              <div>
                <div className="carat">
                  585<sup>°</sup>
                </div>
                <div className="lab">Punc &middot; ryzost 14 kt</div>
              </div>
            </div>
          </figure>
        </div>
      </section>

      <section className="services" id="nabidka" aria-labelledby="svc-title">
        <div className="wrap">
          <div className="sec-head">
            <div className="sec-kicker">
              <span className="no">§ I.</span> Co pro vás uděláme
            </div>
            <h2 id="svc-title">Od výměny baterie po prsten na míru</h2>
            <p>
              Šest služeb, kvůli kterým k nám lidé chodí nejčastěji. Vše na jednom
              místě &mdash; u pultu, kde vidíte zlatníkovi přímo na ruce.
            </p>
          </div>
          <div className="svc-grid">
            {services.map((s) => (
              <article className="svc" key={s.no}>
                <span className="no">{s.no}</span>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
                <div className="meta">{s.meta}</div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="about" id="dilna" aria-labelledby="about-title">
        <div className="wrap">
          <div>
            <div className="sec-kicker">
              <span className="no">§ II.</span> O dílně
            </div>
            <h2 id="about-title" style={{ fontFamily: "'Fraunces',serif", fontWeight: 600, fontSize: "clamp(2rem,4.4vw,3rem)", lineHeight: 1.04, letterSpacing: "-.01em", marginBottom: 14 } as CSSProperties}>
              Řemeslo, které vidíte vznikat
            </h2>
            <p style={{ color: "#4a3d31", fontSize: 18, maxWidth: "50ch" }}>
              Nejsme e-shop s krabicí od kurýra. Prsteny brousíme, letujeme a
              leštíme přímo tady, v prvním patře Olomouc CITY. Přijďte se podívat
              &mdash; nebo si dojděte pro hotový kousek při běžném nákupu.
            </p>

            <div className="stats">
              <div className="stat">
                <div className="n">22</div>
                <div className="l">let u pultu</div>
              </div>
              <div className="stat">
                <div className="n">585&ndash;999</div>
                <div className="l">ryzost zlata</div>
              </div>
              <div className="stat">
                <div className="n">týž den</div>
                <div className="l">drobné opravy</div>
              </div>
            </div>

            <ul className="trust-list">
              <li>Každý šperk s puncem Puncovního úřadu a účtenkou.</li>
              <li>Rytinu jmen i data přidáme ke snubním prstenům zdarma.</li>
              <li>Zvětšení či zúžení prstenu vyřešíme na počkání.</li>
              <li>Poradíme s výběrem kamene i tvaru, bez nátlaku na koupi.</li>
            </ul>

            <div className="hours">
              <div>
                <div className="h-lab">Otevřeno každý den</div>
                <div className="h-val">Po &ndash; Ne &middot; 9:00&ndash;20:00</div>
              </div>
              <a className="btn btn-ghost" href="#kontakt" id="kontakt">
                Najít nás v centru
              </a>
            </div>
          </div>

          <figure className="about-fig">
            <img
              src="/section-1.webp"
              alt="Detail zlatých snubních prstenů a nářadí na pracovním stole zlatníka"
            />
          </figure>
        </div>
      </section>

      <section className="about" aria-labelledby="gallery-title" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <figure className="about-fig">
            <img
              src="/section-2.webp"
              alt="Vitrína klenotnictví Olomouc CITY s prsteny, řetízky a náušnicemi"
            />
          </figure>
          <div>
            <div className="sec-kicker">
              <span className="no">§ III.</span> Než k nám vyrazíte
            </div>
            <h2 id="gallery-title" style={{ fontFamily: "'Fraunces',serif", fontWeight: 600, fontSize: "clamp(2rem,4.4vw,3rem)", lineHeight: 1.04, letterSpacing: "-.01em", marginBottom: 14 } as CSSProperties}>
              Vyberete si, i když nic přesného nehledáte
            </h2>
            <p style={{ color: "#4a3d31", fontSize: 18, maxWidth: "50ch", marginBottom: 22 }}>
              Ve vitríně najdete klasiku i současné návrhy &mdash; od jednoduchých
              obrouček po granátové soupravy. Když vám žádný kousek nesedne,
              vyrobíme nový podle vaší představy.
            </p>
            <ul className="trust-list">
              <li>Zásnubní prsteny s diamanty i barevnými kameny.</li>
              <li>Český granát s certifikátem původu.</li>
              <li>Dětské náušnice a šperky ke křtinám.</li>
              <li>Dárkové balení i poukaz na míru rozpočtu.</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
