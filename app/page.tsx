import type { CSSProperties } from "react";

export default function Page() {
  const produkty = [
    {
      cislo: "01",
      nazev: "Zipy",
      popis:
        "Spirálové, kostěné i skryté zipy do bund, kabátů, batohů i stanů. Dělitelné, nedělitelné, na míru délky. Nejběžnější velikosti skladem v Modřicích.",
      detail: "#5 · #8 · #10",
    },
    {
      cislo: "02",
      nazev: "Plastové spony",
      popis:
        "Přezky, spony s rychlým rozepnutím, stavítka a nastavovací prvky pro popruhy. Odolné do mrazu i do vlhka — testované na zátěž.",
      detail: "od 10 do 50 mm",
    },
    {
      cislo: "03",
      nazev: "Suché zipy",
      popis:
        "Háček a plyš v šířkách od úzkého lemu po široký pás. Našívací i samolepicí varianty, které drží i po stovkách rozepnutí.",
      detail: "20 · 25 · 50 mm",
    },
    {
      cislo: "04",
      nazev: "Druky a knoflíky",
      popis:
        "Stiskací knoflíky, patentky a nýty pro konfekci i pracovní oděvy. Řešíme i nástroje a lisy pro jejich osazení do vaší výroby.",
      detail: "mosaz · nerez",
    },
  ];

  const zuby = Array.from({ length: 22 });

  return (
    <main className="page">
      <header className="nav">
        <a className="wordmark" href="#top" aria-label="YKK Czech — úvod">
          <span className="wordmark-letters">YKK</span>
          <span className="wordmark-czech">Czech</span>
        </a>
        <nav className="nav-links" aria-label="Hlavní navigace">
          <a href="#produkty">Produkty</a>
          <a href="#o-nas">O firmě</a>
          <a href="#kontakt" className="nav-cta">
            Poptat vzorky
          </a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-grid">
          <div className="hero-text">
            <p className="eyebrow">Textilní spojovací prvky · Brno-Modřice</p>
            <h1 className="hero-title">
              <span className="line line-1">Malé díly.</span>
              <span className="line line-2">Velký</span>
              <span className="line line-3">rozdíl.</span>
            </h1>
            <p className="hero-lede">
              Zip, který jde rozepnout jednou rukou v rukavici. Spona, co
              nepovolí po tisíci sepnutích. Od roku 1934 vyrábíme spojovací
              prvky, na které se konfekce, outdoor i pracovní oděvy můžou
              spolehnout.
            </p>
            <div className="hero-actions">
              <a className="btn btn-primary" href="#produkty">
                Prohlédnout sortiment
              </a>
              <a className="btn btn-ghost" href="#kontakt">
                Objednat vzorník barev
              </a>
            </div>
          </div>

          <div className="hero-zip" aria-hidden="true">
            <div className="zip-tape zip-left">
              {zuby.map((_, i) => (
                <span
                  className="tooth tooth-left"
                  key={`l${i}`}
                  style={{ "--i": i } as CSSProperties}
                />
              ))}
            </div>
            <div className="zip-tape zip-right">
              {zuby.map((_, i) => (
                <span
                  className="tooth tooth-right"
                  key={`r${i}`}
                  style={{ "--i": i } as CSSProperties}
                />
              ))}
            </div>
            <div className="zip-slider">
              <span className="zip-pull" />
            </div>
          </div>
        </div>

        <dl className="hero-facts">
          <div>
            <dt>Založeno</dt>
            <dd>1934</dd>
          </div>
          <div>
            <dt>Sklad</dt>
            <dd>Modřice</dd>
          </div>
          <div>
            <dt>Zemí YKK</dt>
            <dd>72</dd>
          </div>
        </dl>
      </section>

      <section className="produkty" id="produkty" aria-labelledby="produkty-nadpis">
        <div className="section-head">
          <p className="eyebrow eyebrow-dark">Sortiment</p>
          <h2 id="produkty-nadpis">Čtyři skupiny, jeden standard kvality</h2>
          <p className="section-lede">
            Vyberte skupinu — poradíme s velikostí, materiálem i barvou přesně
            pro váš výrobek. Vzorky posíláme do dvou pracovních dní.
          </p>
        </div>

        <ol className="product-list">
          {produkty.map((p) => (
            <li className="product" key={p.cislo}>
              <span className="product-num">{p.cislo}</span>
              <div className="product-body">
                <h3>{p.nazev}</h3>
                <p>{p.popis}</p>
              </div>
              <span className="product-detail">{p.detail}</span>
            </li>
          ))}
        </ol>
      </section>

      <section className="o-nas" id="o-nas" aria-labelledby="o-nas-nadpis">
        <div className="o-nas-grid">
          <div className="o-nas-text">
            <p className="eyebrow">O firmě</p>
            <h2 id="o-nas-nadpis">
              Světová značka s brněnskou pobočkou a lidmi, kterým zavoláte
            </h2>
            <p>
              YKK začala v roce 1934 v Tokiu a dnes působí ve 72 zemích s více
              než 46 000 zaměstnanci. Za tím vším stojí jednoduchý princip,
              který zakladatel nazval „koloběh dobra“ — nikdo neprosperuje bez
              ohledu na ostatní.
            </p>
            <p>
              V Modřicích u Brna to znamená konkrétní věc: máte po ruce sklad,
              vzorníky a člověka, který rozumí tomu, jak zip nebo spona sedne
              zrovna do vašeho výrobku. Žádná anonymní distribuce — konkrétní
              rada a spolehlivé dodání.
            </p>
            <a className="btn btn-primary" href="#kontakt" id="kontakt">
              Napsat do Modřic
            </a>
          </div>

          <aside className="kontakt-card" aria-label="Kontaktní údaje">
            <p className="kontakt-label">Pobočka pro ČR</p>
            <p className="kontakt-firma">YKK Czech spol. s r.o.</p>
            <address className="kontakt-adresa">
              Masarykova 118
              <br />
              664 42 Modřice
            </address>
            <dl className="kontakt-list">
              <div>
                <dt>Telefon</dt>
                <dd>
                  <a href="tel:+420531015430">+420 531 015 430</a>
                </dd>
              </div>
              <div>
                <dt>E-mail</dt>
                <dd>
                  <a href="mailto:info@ykk.com">info@ykk.com</a>
                </dd>
              </div>
              <div>
                <dt>Showroom</dt>
                <dd>po domluvě termínu</dd>
              </div>
            </dl>
          </aside>
        </div>
      </section>
    </main>
  );
}
