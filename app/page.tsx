import React from "react";

export default function Page() {
  return (
    <main className="page">
      {/* ————— HERO ————— */}
      <header className="hero">
        <div className="hero__frame">
          <img
            className="hero__img"
            src="/hero.webp"
            alt="Kurýrní vůz Emons připravený na rozvoz zásilek v Ústí nad Labem"
          />
          <div className="hero__grid" aria-hidden="true" />
        </div>

        <div className="hero__top">
          <a className="wordmark" href="#" aria-label="Emons — kurýrní služby Ústí nad Labem">
            <span className="wordmark__mark">E</span>
            <span className="wordmark__name">emons</span>
            <span className="wordmark__place">Ústí&nbsp;n.&nbsp;L.</span>
          </a>
          <nav className="hero__nav" aria-label="Hlavní">
            <a href="#sluzby">Služby</a>
            <a href="#duvera">O nás</a>
            <a className="hero__phone" href="tel:+49221982320601">Zavolat kurýra</a>
          </nav>
        </div>

        <div className="hero__content">
          <p className="hero__eyebrow">Kurýr Ústecký kraj · vyzvednutí do 60 minut</p>
          <h1 className="hero__title">
            Zásilka nečeká.
            <span className="hero__title-em">Ani my.</span>
          </h1>
          <p className="hero__lead">
            Naložíme u vás v Ústí nad Labem, vyrazíme na trasu a vaši zásilku
            předáme přímo do rukou příjemce — po Česku i napříč Evropou.
            Bez překladišť, bez čekání, s jedním řidičem od dveří ke dveřím.
          </p>
          <div className="hero__cta">
            <a className="btn btn--solid" href="tel:+49221982320601">Objednat vyzvednutí</a>
            <a className="btn btn--ghost" href="#sluzby">Sledovat zásilku</a>
          </div>

          <dl className="hero__meta">
            <div>
              <dt>Vyzvednutí</dt>
              <dd>do 60 min</dd>
            </div>
            <div>
              <dt>Doručení po ČR</dt>
              <dd>ještě dnes</dd>
            </div>
            <div>
              <dt>Rozvozů v Evropě</dt>
              <dd>od roku 1928</dd>
            </div>
          </dl>
        </div>
      </header>

      {/* ————— SLUŽBY ————— */}
      <section className="svc" id="sluzby" aria-labelledby="svc-title">
        <div className="svc__head">
          <p className="kicker"><span className="kicker__dot" />Co pro vás dovezeme</p>
          <h2 className="section-title" id="svc-title">
            Čtyři způsoby, jak dostat zásilku tam, kam potřebujete.
          </h2>
        </div>

        <div className="svc__media">
          <img
            src="/section-1.webp"
            alt="Kurýr Emons nakládá balík do vozu"
            loading="lazy"
          />
        </div>

        <ol className="svc__list">
          <li className="svc__item">
            <span className="svc__code">EX</span>
            <div>
              <h3>Expresní kurýr</h3>
              <p>
                Jedna zásilka, jedno auto, žádné zastávky. Vyzvedneme v Ústí
                a jedeme rovnou k příjemci — vhodné pro dokumenty, vzorky
                i díly, které musí být na místě dnes.
              </p>
              <span className="svc__tag">Přímá jízda · GPS poloha řidiče</span>
            </div>
          </li>
          <li className="svc__item">
            <span className="svc__code">CZ</span>
            <div>
              <h3>Rozvoz po Česku</h3>
              <p>
                Denní linky z ústeckého skladu do celé republiky. Balík
                podaný do oběda doručíme následující pracovní den, u expresu
                i tentýž den.
              </p>
              <span className="svc__tag">Kusové i paletové zásilky</span>
            </div>
          </li>
          <li className="svc__item">
            <span className="svc__code">EU</span>
            <div>
              <h3>Přeprava do Evropy</h3>
              <p>
                Přes hranici do Německa a dál na západ. Sběrná i celovozová
                doprava se sledováním a s papíry, které si ohlídáme za vás.
              </p>
              <span className="svc__tag">Sběrné linky · celní odbavení</span>
            </div>
          </li>
          <li className="svc__item">
            <span className="svc__code">XL</span>
            <div>
              <h3>Křehké a nadměrné</h3>
              <p>
                Vozy se zvedací plošinou tam, kde není rampa. Poradíme si
                s nepřístupným místem, těžkým strojem i zásilkou, která
                nesnese otřesy.
              </p>
              <span className="svc__tag">Plošina · fixace nákladu</span>
            </div>
          </li>
        </ol>
      </section>

      {/* ————— DŮVĚRA ————— */}
      <section className="trust" id="duvera" aria-labelledby="trust-title">
        <div className="trust__media">
          <img
            src="/section-2.webp"
            alt="Vozový park Emons na cestě"
            loading="lazy"
          />
        </div>
        <div className="trust__body">
          <p className="kicker kicker--light"><span className="kicker__dot" />Proč rodinná spedice od roku 1928</p>
          <h2 className="section-title section-title--light" id="trust-title">
            Váš náklad předá stejný člověk, který ho naložil.
          </h2>
          <p className="trust__lead">
            Emons je rodinný podnik, který jezdí pro zákazníky už skoro sto let.
            V Ústí nad Labem znamená jméno na dveřích vozu závazek: řidič, který
            u vás nakládá, ví, kam a do kdy jede — a je za zásilku odpovědný
            celou cestu.
          </p>

          <ul className="trust__stats">
            <li>
              <strong>1&nbsp;000+</strong>
              <span>vlastních vozů denně na evropských silnicích</span>
            </li>
            <li>
              <strong>Ø&nbsp;2 roky</strong>
              <span>průměrné stáří vozového parku — méně poruch na trase</span>
            </li>
            <li>
              <strong>123 poboček</strong>
              <span>v 16 zemích, propojených do jedné sítě</span>
            </li>
            <li>
              <strong>24–48 h</strong>
              <span>běžná doba doručení v rámci Evropy</span>
            </li>
          </ul>

          <blockquote className="trust__quote">
            „Potřebovali jsme dostat náhradní díl z Ústí do Saska do večera.
            Volali jsme v jednu, v pět byl na místě. Přesně tohle od kurýra
            čekáte.“
            <cite>— provozní manažer, strojírenská firma na Ústecku</cite>
          </blockquote>
        </div>
      </section>
    </main>
  );
}
