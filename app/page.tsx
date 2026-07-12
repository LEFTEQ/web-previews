import React from "react";

export default function Page() {
  return (
    <main className="page">
      <header className="topbar">
        <a className="wordmark" href="#uvod" aria-label="Muebles Koupelny, úvod">
          <span className="wordmark-main">Muebles</span>
          <span className="wordmark-sub">obklady &amp; dlažby · Olomouc</span>
        </a>
        <nav className="nav" aria-label="Hlavní navigace">
          <a href="#kolekce">Kolekce</a>
          <a href="#studio">Studio</a>
          <a className="nav-call" href="tel:+420602705161">Zavolat</a>
        </nav>
      </header>

      <section className="hero" id="uvod">
        <div className="hero-media">
          <img
            src="/hero.webp"
            alt="Detail obkladu ve španělské keramice — matný povrch s jemnou strukturou"
            className="hero-img"
          />
          <div className="hero-swatch" aria-hidden="true">
            <span className="chip chip-a" />
            <span className="chip chip-b" />
            <span className="chip chip-c" />
            <span className="chip chip-d" />
          </div>
        </div>

        <div className="hero-copy">
          <p className="eyebrow">Koupelnové studio · od roku 2000</p>
          <h1 className="hero-title">
            Tuctové obklady
            <br />
            u nás <em>nenajdete</em>.
          </h1>
          <p className="hero-lede">
            Vozíme vzory renomovaných keramiček ze Španělska, Itálie a Portugalska —
            Apavisa, Aparici, Emilceramica. Vybíráme je osobně na výstavách Cevisama
            a Cersaie a skládáme z nich koupelnu, která je jenom vaše.
          </p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="#kolekce">
              Prohlédnout kolekce
            </a>
            <a className="btn btn-ghost" href="tel:+420602705161">
              +420 602 705 161
            </a>
          </div>
          <p className="hero-note">
            Nová prodejna &amp; showroom: Zolova 2/4, Olomouc-Slavonín · pohodlné parkování
          </p>
        </div>
      </section>

      <section className="section collections" id="kolekce">
        <div className="section-head">
          <p className="eyebrow">Co u nás vyberete</p>
          <h2 className="section-title">Materiál, ne katalog</h2>
          <p className="section-lede">
            Neprodáváme metry čtvereční. Skládáme z dlaždic povrch, který ve vaší
            koupelně vydrží roky — a přitom vypadá jako z výstavního sálu v Boloni.
          </p>
        </div>

        <ul className="card-grid">
          <li className="card">
            <span className="card-index">Obklady</span>
            <h3 className="card-title">Stěny, které mají charakter</h3>
            <p className="card-text">
              Matné i lesklé formáty, imitace kamene, betonu i tkaniny. Poradíme
              spárořez i barvu spárovací hmoty, aby stěna působila celistvě.
            </p>
          </li>
          <li className="card">
            <span className="card-index">Dlažby</span>
            <h3 className="card-title">Podlaha, co snese pád</h3>
            <p className="card-text">
              Slinutá keramika s vysokou odolností — jak píše naše zákaznice Andrea,
              i po pádu těžšího předmětu zůstala bez prasklin. Formáty od mozaiky po
              velkoformát.
            </p>
          </li>
          <li className="card">
            <span className="card-index">Sanita</span>
            <h3 className="card-title">Vše, co ke koupelně patří</h3>
            <p className="card-text">
              Umyvadla, baterie, doplňky. Vybíráme kusy, které ladí s vybranou
              keramikou — místo aby si vzájemně konkurovaly.
            </p>
          </li>
          <li className="card">
            <span className="card-index">Návrh</span>
            <h3 className="card-title">Grafický návrh &amp; poradenství</h3>
            <p className="card-text">
              Připravíme vizualizaci obkladů a dlažby na míru vašemu prostoru, ať
              víte, do čeho jdete, ještě než zaplatíte první paletu.
            </p>
          </li>
        </ul>

        <p className="price-note">
          Ceny i dostupnost se u dováženého zboží průběžně mění. Pro aktuální cenu
          a termín dodání nám <a href="tel:+420602705161">zavolejte</a> nebo{" "}
          <a href="mailto:muebleskoupelny@gmail.com">napište e-mail</a>.
        </p>
      </section>

      <section className="section studio" id="studio">
        <div className="studio-media">
          <img
            src="/section-2.webp"
            alt="Prohlídka vzorků v showroomu studia Muebles v Olomouci-Slavoníně"
            className="studio-img"
          />
        </div>
        <div className="studio-copy">
          <p className="eyebrow">Studio ve Slavoníně</p>
          <h2 className="section-title">
            Přijďte si na keramiku sáhnout
          </h2>
          <p className="section-lede">
            Od února 2026 nás najdete v nových prostorách na adrese Zolova 2/4,
            Olomouc-Slavonín. Vzory vybíráme každý rok osobně na prestižních
            výstavách Cevisama a Cersaie — a stejně osobně vám je ukážeme.
          </p>

          <blockquote className="quote">
            <p>
              „S dlažbou a obklady od Muebles jsme maximálně spokojeni. Dlažba je
              kvalitní, mnohokrát nám na podlahu upadl těžší předmět a nezůstaly
              žádné praskliny. Výborná komunikace a dohoda s majitelkou firmy.
              Mohu vřele doporučit.“
            </p>
            <cite>— Andrea F., zákaznice</cite>
          </blockquote>

          <dl className="facts">
            <div className="fact">
              <dt>Adresa</dt>
              <dd>Zolova 2/4, 783 01 Olomouc-Slavonín</dd>
            </div>
            <div className="fact">
              <dt>Telefon</dt>
              <dd>
                <a href="tel:+420602705161">+420 602 705 161</a>
              </dd>
            </div>
            <div className="fact">
              <dt>E-mail</dt>
              <dd>
                <a href="mailto:muebleskoupelny@gmail.com">
                  muebleskoupelny@gmail.com
                </a>
              </dd>
            </div>
          </dl>
        </div>
      </section>
    </main>
  );
}
