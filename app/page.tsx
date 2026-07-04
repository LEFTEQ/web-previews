import React from "react";

export default function Page() {
  const kroky = [
    {
      cislo: "01",
      nazev: "Vyslechneme, změříme",
      text: "Přijedeme k vám do bytu, domu nebo provozovny v Brně a okolí. Změříme tepelnou zátěž, zkontrolujeme rozvody a zjistíme, kudy povedeme potrubí i kondenzát.",
    },
    {
      cislo: "02",
      nazev: "Navrhneme řešení",
      text: "Dostanete konkrétní návrh: typ a výkon jednotky, umístění vnitřní i venkovní části a cenu předem. Žádná překvapení v den montáže.",
    },
    {
      cislo: "03",
      nazev: "Nainstalujeme čistě",
      text: "Odvrtání, uchycení, vakuování okruhu, zprovoznění. Po sobě uklidíme — přípravné práce i úklid jsou součástí, ne příplatek.",
    },
    {
      cislo: "04",
      nazev: "Staráme se dál",
      text: "Pravidelná prohlídka, čištění výparníku, doplnění chladiva, opravy. O jednotku se postaráme po celou dobu její životnosti.",
    },
  ];

  return (
    <main className="pg">
      <header className="nav">
        <a className="mark" href="#" aria-label="HI-SERVIS vzduchotechnika, domů">
          <span className="mark-hi">HI</span>
          <span className="mark-dot" aria-hidden="true" />
          <span className="mark-servis">SERVIS</span>
        </a>
        <nav className="nav-links" aria-label="Hlavní">
          <a href="#reseni">Řešení</a>
          <a href="#postup">Jak to probíhá</a>
          <a href="#duvera">Reference</a>
        </nav>
        <a className="nav-tel" href="tel:+420603157927">
          Zavolat 603&nbsp;157&nbsp;927
        </a>
      </header>

      <section className="hero">
        <div className="hero-media">
          <img
            src="/hero.webp"
            alt="Nástěnná klimatizační jednotka nainstalovaná v brněnském interiéru"
            className="hero-img"
          />
          <div className="hero-scrim" aria-hidden="true" />
        </div>

        <div className="hero-body">
          <p className="eyebrow">Klimatizace &middot; Rekuperace &middot; Servis &middot; Brno</p>
          <h1 className="hero-title">
            Když venku<br />
            <span className="hero-hot">31&nbsp;°C</span>,<br />
            u vás<span className="hero-cool">&nbsp;23&nbsp;°C</span>.
          </h1>
          <p className="hero-lede">
            Dvacet let chladíme brněnské byty, rodinné domy i provozovny.
            Navrhneme, nainstalujeme a udržíme klimatizaci, která tiše
            zvládne i tropický den nad Svratkou.
          </p>
          <div className="hero-cta">
            <a className="btn btn-primary" href="#reseni">
              Chci klimatizaci
            </a>
            <a className="btn btn-ghost" href="tel:+420603157927">
              Zavolat technikovi
            </a>
          </div>
        </div>

        <dl className="stat-strip">
          <div className="stat">
            <dt>Na trhu</dt>
            <dd>20 let</dd>
          </div>
          <div className="stat">
            <dt>Realizací</dt>
            <dd>3&nbsp;000+</dd>
          </div>
          <div className="stat">
            <dt>Techniků</dt>
            <dd>25</dd>
          </div>
          <div className="stat">
            <dt>Kde</dt>
            <dd>Brno a okolí</dd>
          </div>
        </dl>
      </section>

      <section className="sec sec-reseni" id="reseni">
        <div className="sec-head">
          <p className="eyebrow eyebrow-line">Co pro vás uděláme</p>
          <h2 className="sec-title">
            Dvě prostředí, jeden klidný vzduch
          </h2>
        </div>

        <div className="cards">
          <article className="card">
            <div className="card-media">
              <img
                src="/section-1.webp"
                alt="Klimatizovaný obytný prostor rodinného domu"
              />
            </div>
            <div className="card-body">
              <span className="card-tag">Doma</span>
              <h3>Byty a rodinné domy</h3>
              <p>
                Tichý split do ložnice, multisplit do celého bytu, rekuperace
                pro čerstvý vzduch bez otvírání oken. Umístění řešíme tak, aby
                venkovní jednotka nerušila vás ani sousedy.
              </p>
              <ul className="card-list">
                <li>Split &amp; multisplit s tepelným čerpadlem</li>
                <li>Rekuperace a řízené větrání</li>
                <li>Tichý chod do ložnic a dětských pokojů</li>
              </ul>
            </div>
          </article>

          <article className="card">
            <div className="card-media">
              <img
                src="/section-2.webp"
                alt="Klimatizační technika v komerčním provozu"
              />
            </div>
            <div className="card-body">
              <span className="card-tag">Provoz</span>
              <h3>Kanceláře a obchody</h3>
              <p>
                Kazetové a potrubní jednotky do open-space, chlazení serveroven,
                vzduchotechnika do restaurací a prodejen. Návrh sedíme s výkonem
                i s hlukovými limity.
              </p>
              <ul className="card-list">
                <li>Kazetové a potrubní jednotky</li>
                <li>Chlazení serveroven 24/7</li>
                <li>Servisní smlouvy s pravidelnými prohlídkami</li>
              </ul>
            </div>
          </article>
        </div>
      </section>

      <section className="sec sec-postup" id="postup">
        <div className="sec-head">
          <p className="eyebrow eyebrow-line">Jak to probíhá</p>
          <h2 className="sec-title">Od zavolání po první chladný den</h2>
        </div>

        <ol className="steps">
          {kroky.map((k) => (
            <li className="step" key={k.cislo}>
              <span className="step-num" aria-hidden="true">
                {k.cislo}
              </span>
              <div className="step-body">
                <h3>{k.nazev}</h3>
                <p>{k.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="sec sec-duvera" id="duvera">
        <div className="duvera-grid">
          <div className="duvera-text">
            <p className="eyebrow eyebrow-line">Reference z Brna</p>
            <h2 className="sec-title">Multisplit LG v bytě v Bystrci</h2>
            <p className="duvera-lede">
              V rámci výstavby jsme instalovali multisplitové jednotky
              invertorového typu s tepelným čerpadlem do pěti obytných
              místností. Majitel chtěl stejnou tepelnou pohodu ve všech
              pokojích — a tichý provoz, který v luxusním interiéru nezaznamenáte.
            </p>
            <p className="duvera-loc">Byt &middot; Brno&nbsp;–&nbsp;Bystrc</p>
          </div>

          <ul className="pillars">
            <li>
              <span className="pillar-k">Cena předem</span>
              <span className="pillar-v">
                Rozpočet dostanete před montáží, ne po ní.
              </span>
            </li>
            <li>
              <span className="pillar-k">Jeden tým od návrhu po servis</span>
              <span className="pillar-v">
                Kdo instaloval, ten se i vrací na prohlídku.
              </span>
            </li>
            <li>
              <span className="pillar-k">Úklid v ceně</span>
              <span className="pillar-v">
                Přípravné práce i úklid patří k dílu, ne k příplatkům.
              </span>
            </li>
            <li>
              <span className="pillar-k">Místní</span>
              <span className="pillar-v">
                Maříkova 1, Brno. Na servis dorazíme rychle.
              </span>
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}
