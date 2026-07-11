import React from "react";

export default function Page() {
  const produkty = [
    {
      kod: "ŘEZ",
      nazev: "Řezaná reklama a polepy",
      popis: "Plotrem řežeme fólii na polepy aut, výloh, desek i skleněných dveří. Přijedeme, zaměříme, nalepíme na místě bez bublin.",
    },
    {
      kod: "TISK",
      nazev: "Tištěná reklama a sítotisk",
      popis: "Bannery, plachty, samolepky a sítotisk na trička či cedule. Barvy sedí podle vašeho loga, ne podle náhody.",
    },
    {
      kod: "GRAV",
      nazev: "Gravírování plošné i rotační",
      popis: "Jmenovky, štítky, popisky strojů a orientační tabulky. Gravírujeme do plastu i kovu, čitelně a nastálo.",
    },
    {
      kod: "INFO",
      nazev: "Infosystémy a horizonty",
      popis: "Orientační a navigační systémy do budov, horizonty na vozidla a firemní značení, které lidi dovede tam, kam mají.",
    },
    {
      kod: "VENK",
      nazev: "Venkovní reklama",
      popis: "Totemy, světelná loga, cedule a billboardy. Vyrobíme, dovezeme a osadíme, aby byla firma vidět z ulice.",
    },
    {
      kod: "SMALT",
      nazev: "Smaltované tabulky",
      popis: "Klasické smaltované tabulky, které vydrží desítky let na fasádě. Domovní čísla, názvy ulic i firemní štíty.",
    },
  ];

  return (
    <main className="stofi">
      <header className="top">
        <a className="wordmark" href="#uvod" aria-label="Reklama Stofi, Ústí nad Labem">
          <span className="wordmark-reklama">REKLAMA</span>
          <span className="wordmark-stofi">STOFI</span>
          <span className="wordmark-dot">.cz</span>
        </a>
        <nav className="nav" aria-label="Hlavní navigace">
          <a href="#produkty">Co vyrábíme</a>
          <a href="#dilna">Dílna</a>
          <a href="#kontakt">Kde nás najdete</a>
        </nav>
      </header>

      <section className="hero" id="uvod">
        <div className="hero-copy">
          <p className="eyebrow">Reklamní dílna &middot; Ústí nad Labem od roku 2011</p>
          <h1 className="hero-title">
            Když vás mají <span className="hl">vidět</span>,<br />
            uděláme vás vidět.
          </h1>
          <p className="hero-lead">
            Řežeme fólii na plotru, tiskneme plachty, gravírujeme štítky a lepíme
            polepy aut i výloh. Od malé jmenovky po světelné logo na fasádu &mdash;
            všechno vyrobíme v jedné dílně na Drážďanské.
          </p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="#kontakt">Zavolat do dílny</a>
            <a className="btn btn-ghost" href="#produkty">Prohlédnout výrobu</a>
          </div>
          <dl className="hero-facts">
            <div>
              <dt>Otevřeno</dt>
              <dd>Po&ndash;Pá 6:30&ndash;15:00</dd>
            </div>
            <div>
              <dt>Zaměření</dt>
              <dd>u vás na místě</dd>
            </div>
            <div>
              <dt>Vyrábíme</dt>
              <dd>od štítku po totem</dd>
            </div>
          </dl>
        </div>
        <figure className="hero-media">
          <img
            src="/hero.webp"
            alt="Reklamní tiskoviny a materiály z dílny Reklama Stofi"
            className="hero-img"
          />
          <figcaption className="hero-tag">Hotové zakázky z naší dílny</figcaption>
        </figure>
      </section>

      <section className="products" id="produkty">
        <div className="section-head">
          <p className="eyebrow">Sortiment dílny</p>
          <h2 className="section-title">Šest řemesel pod jednou střechou</h2>
          <p className="section-lead">
            Nepředáváme práci nikam dál. Řezačka, tiskárna, gravírka i lepení jsou
            u nás v jedné hale, takže víme, kdy bude hotovo, a stojíme si za tím.
          </p>
        </div>
        <ul className="grid">
          {produkty.map((p) => (
            <li className="card" key={p.kod}>
              <span className="card-kod" aria-hidden="true">{p.kod}</span>
              <h3 className="card-title">{p.nazev}</h3>
              <p className="card-desc">{p.popis}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="about" id="dilna">
        <figure className="about-media">
          <img
            src="/section-1.webp"
            alt="Detail výroby řezané reklamy v dílně Reklama Stofi"
            className="about-img"
          />
        </figure>
        <div className="about-copy">
          <p className="eyebrow">O dílně</p>
          <h2 className="section-title">Malá dílna, které si stojí za svou prací</h2>
          <p className="about-text">
            Jsme reklamní agentura z Ústí nad Labem. Děláme venkovní reklamu a
            infosystémy, řežeme a tiskneme, gravírujeme plošně i rotačně. Za tu
            dobu jsme polepili stovky aut, popsali fasády i orientační systémy
            po celém Ústeckém kraji.
          </p>
          <p className="about-text">
            Přijedeme za vámi, zaměříme, poradíme s materiálem i barvami a
            zakázku vyrobíme tak, aby vydržela počasí i roky provozu.
          </p>
          <ul className="about-list">
            <li>Zaměření a montáž na místě po celém okolí</li>
            <li>Materiál poradíme podle toho, kde bude viset</li>
            <li>Plátci DPH, jednáme s firmami i řemeslníky</li>
          </ul>
          <figure className="about-strip">
            <img
              src="/section-2.webp"
              alt="Ukázka realizované reklamy od Reklama Stofi"
              className="about-strip-img"
            />
          </figure>
        </div>
      </section>

      <section className="contact" id="kontakt">
        <div className="contact-inner">
          <p className="eyebrow">Kde nás najdete</p>
          <h2 className="section-title">Zastavte se v dílně na Drážďanské</h2>
          <div className="contact-cols">
            <div>
              <p className="contact-label">Adresa</p>
              <p className="contact-val">
                REKLAMA STOFI.CZ s.r.o.<br />
                Drážďanská 37 (areál fy. ISTAR)<br />
                400 07 Ústí nad Labem
              </p>
            </div>
            <div>
              <p className="contact-label">Otevřeno</p>
              <p className="contact-val">
                pondělí &ndash; pátek<br />
                6:30 &ndash; 15:00
              </p>
            </div>
            <div>
              <p className="contact-label">Firemní údaje</p>
              <p className="contact-val">
                IČO 28738845<br />
                DIČ CZ28738845<br />
                jsme plátci DPH
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
