import React from "react";

export default function Page() {
  return (
    <main className="page">
      {/* HERO — postaveno na katalogovém, tabulkovém světě zemědělské ochrany rostlin */}
      <header className="nav">
        <a className="wordmark" href="#uvod" aria-label="Kurent — vydavatelství a grafické studio">
          <span className="wordmark__k">Kurent</span>
          <span className="wordmark__sub">vydavatelství &amp; grafické studio · České Budějovice</span>
        </a>
        <nav className="nav__links" aria-label="Hlavní navigace">
          <a href="#vydavatelstvi">Vydavatelství</a>
          <a href="#reklama">Reklama &amp; tisk</a>
          <a href="#duvera">O nás</a>
          <a className="nav__call" href="tel:+420387202310">387&nbsp;202&nbsp;310</a>
        </nav>
      </header>

      <section className="hero" id="uvod">
        <div className="hero__grid">
          <div className="hero__text">
            <p className="eyebrow">Ročník 27 · od roku 1998 · Vrbenská 197/23</p>
            <h1 className="hero__title">
              Píšeme, sázíme a tiskneme<br />
              <em>ochranu rostlin</em> — od pole až po etiketu.
            </h1>
            <p className="hero__lead">
              Vydáváme měsíčník <strong>Agromanuál</strong>, provozujeme informační
              server pro agronomy a navrhujeme reklamu pro zemědělství. Odborný
              obsah, jazyková i terminologická korektura, malonákladový tisk na
              vlastním stroji — všechno pod jednou střechou v Českých Budějovicích.
            </p>
            <div className="hero__cta">
              <a className="btn btn--primary" href="tel:+420387202310">Zavolat 387&nbsp;202&nbsp;310</a>
              <a className="btn btn--ghost" href="mailto:vydavatelstvi@kurent.cz">Napsat e-mail</a>
            </div>
          </div>

          <figure className="hero__media">
            <img
              src="/hero.webp"
              alt="Zemědělská krajina a tiskoviny vydavatelství Kurent — měsíčník Agromanuál"
              className="hero__img"
              loading="eager"
              decoding="async"
            />
            {/* Signature: „tabulkový přehled přípravků" jako karta přes obrázek */}
            <figcaption className="cropcard" aria-label="Ukázka tabulkového přehledu">
              <span className="cropcard__head">Tabulkový přehled · řepka</span>
              <ul className="cropcard__rows">
                <li><span>Plodina</span><span>Řepka ozimá</span></li>
                <li><span>Škůdce</span><span>Blýskáček řepkový</span></li>
                <li><span>Karenční lhůta</span><span>AT — na začátku kvetení</span></li>
              </ul>
            </figcaption>
          </figure>
        </div>

        {/* Registr témat — encoduje reálné plodiny z katalogů, ne dekorace */}
        <ul className="registr" aria-label="Obory, které pokrýváme">
          <li>Obilniny</li>
          <li>Řepka</li>
          <li>Cukrovka</li>
          <li>Brambory</li>
          <li>Sady &amp; vinice</li>
          <li>Zelenina</li>
          <li>Mák · kmín · len</li>
        </ul>
      </section>

      {/* SEKCE 1 — co děláme, jazykem katalogů */}
      <section className="services" id="vydavatelstvi">
        <div className="sec-head">
          <p className="eyebrow eyebrow--dark">Co u nás vzniká</p>
          <h2 className="sec-title">Od měsíčníku po katalog přípravků</h2>
        </div>

        <div className="services__layout">
          <figure className="services__media">
            <img
              src="/section-1.webp"
              alt="Ukázka vydavatelské a grafické práce studia Kurent"
              loading="lazy"
              decoding="async"
            />
          </figure>

          <div className="services__list">
            <article className="svc">
              <span className="svc__idx">A1</span>
              <div>
                <h3>Měsíčník Agromanuál</h3>
                <p>
                  Profesionální ochrana rostlin: aktuální přehledy použití přípravků
                  v jednotlivých plodinách, nové registrace, výživa a odolnost odrůd.
                </p>
              </div>
            </article>
            <article className="svc">
              <span className="svc__idx">A2</span>
              <div>
                <h3>Server agromanual.cz &amp; e-shop</h3>
                <p>
                  Informační server pro zemědělce, agronomy i zahrádkáře — atlasy
                  škůdců a plodin, vyhledávání přípravků podle parametrů, aktuality.
                  A e-shop agromanualshop.cz s agropotřebami.
                </p>
              </div>
            </article>
            <article className="svc">
              <span className="svc__idx">A3</span>
              <div>
                <h3>Katalogy přípravků CZ/SK</h3>
                <p>
                  Přehledné návody pro ochranu polních plodin, sadů a vinic i zeleniny
                  — od jabloně a vinné révy po košťálovou a plodovou zeleninu.
                </p>
              </div>
            </article>
            <article className="svc">
              <span className="svc__idx">A4</span>
              <div>
                <h3>Reklama pro zemědělství</h3>
                <p>
                  Letáky, prospekty, katalogy, plakáty, inzeráty, logotypy, obaly i
                  etikety. Personalizované direct maily rozešleme z vlastní databáze
                  cca 2 000 zemědělských podniků.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* SEKCE 2 — důvěra: reálná čísla + malonákladový tisk */}
      <section className="trust" id="duvera">
        <div className="trust__inner">
          <div className="sec-head">
            <p className="eyebrow">Proč s námi</p>
            <h2 className="sec-title sec-title--light">Odbornost, kterou v běžné agentuře nenajdete</h2>
          </div>

          <div className="facts">
            <div className="fact">
              <p className="fact__num">27 let</p>
              <p className="fact__lab">Fungujeme od roku 1998 — rozumíme oboru, ne jen grafice.</p>
            </div>
            <div className="fact">
              <p className="fact__num">100&nbsp;000+</p>
              <p className="fact__lab">Snímků ve vlastní fotobance se zemědělskou tématikou, jedné z nejobsáhlejších v ČR.</p>
            </div>
            <div className="fact">
              <p className="fact__num">C4065</p>
              <p className="fact__lab">Vlastní tiskový stroj AccurioPrint — rychlá výroba malonákladů přímo u nás.</p>
            </div>
            <div className="fact">
              <p className="fact__num">2×</p>
              <p className="fact__lab">Korektura gramatická i odborná terminologická — text sedí i po stránce oboru.</p>
            </div>
          </div>

          <div className="print">
            <figure className="print__media">
              <img
                src="/section-2.webp"
                alt="Malonákladový digitální tisk na stroji AccurioPrint ve studiu Kurent"
                loading="lazy"
                decoding="async"
              />
            </figure>
            <div className="print__text">
              <h3 className="print__title">Malonákladový digitální tisk AccurioPrint C4065</h3>
              <p>
                Kvalita téměř srovnatelná s ofsetem, ale bez nákladné předtiskové
                přípravy — u nákladů ve stovkách kusů proto výrazně levněji a rychleji.
                Letáky, brožury, knihy, kalendáře, vizitky i pohlednice.
              </p>
              <ul className="print__dl">
                <li>Kvalita blízká ofsetu</li>
                <li>Nižší cena u stovek kusů</li>
                <li>Rychlá výroba</li>
              </ul>
              <p className="print__note">
                Dokončovací práce ve spolupráci s tiskárnou Protisk — vazba V1 a V2,
                laminování, falcování, bigování.
              </p>
              <p className="print__addr">
                Kurent s.r.o. · Vrbenská 197/23 · 370 01 České Budějovice
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
