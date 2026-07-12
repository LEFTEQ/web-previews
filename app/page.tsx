import React from "react";

export default function Page() {
  return (
    <main className="eu">
      {/* HERO */}
      <header className="eu-hero">
        <div className="eu-hero__bg" aria-hidden="true">
          <img src="/hero.webp" alt="" className="eu-hero__img" />
          <span className="eu-hero__wash" />
        </div>

        <nav className="eu-nav" aria-label="Hlavní">
          <a className="eu-mark" href="#uvod" aria-label="Euroker, domů">
            <span className="eu-mark__grid" aria-hidden="true">
              <i></i><i></i><i></i><i></i>
            </span>
            <span className="eu-mark__name">Euroker</span>
          </a>
          <span className="eu-nav__meta">Obkladačství · České Budějovice</span>
        </nav>

        <div className="eu-hero__inner">
          <p className="eu-eyebrow">Rodinná firma od roku 1994</p>
          <h1 className="eu-title">
            Každá spára <span className="eu-title__accent">na milimetr.</span>
            <br />Koupelny, které <em>drží</em>.
          </h1>
          <p className="eu-lede">
            Prodejna a poradenství pro obklady, dlažby a sanitu v Českých
            Budějovicích. Vybereme formát, spočítáme spotřebu a poradíme s
            kladečským plánem — abyste doma pokládali jednou a pořádně.
          </p>
          <div className="eu-cta">
            <a className="eu-btn eu-btn--solid" href="tel:+420606605604">Zavolat +420 606 605 604</a>
            <a className="eu-btn eu-btn--ghost" href="#prodejna">Kudy do prodejny</a>
          </div>

          <dl className="eu-spec" aria-label="Rychlé údaje">
            <div><dt>Adresa</dt><dd>Nemanická 2721</dd></div>
            <div><dt>Areál</dt><dd>BS Build servis</dd></div>
            <div><dt>Otevřeno</dt><dd>Po–Pá 8–17</dd></div>
          </dl>
        </div>
      </header>

      {/* SEKCE 1 — SORTIMENT jako kladečský plán */}
      <section className="eu-plan" id="sortiment" aria-labelledby="plan-h">
        <div className="eu-plan__head">
          <p className="eu-eyebrow eu-eyebrow--dark">Co u nás vyberete</p>
          <h2 id="plan-h" className="eu-h2">Od podkladu po poslední spáru</h2>
          <p className="eu-plan__intro">
            Neprodáváme jen krabice s dlažbou. Provedeme vás celou skladbou
            koupelny — v pořadí, ve kterém ji budete opravdu pokládat.
          </p>
        </div>

        <ol className="eu-rows">
          <li className="eu-row">
            <span className="eu-row__no">01</span>
            <div className="eu-row__body">
              <h3>Obklady na stěny</h3>
              <p>Velkoformáty i klasické 20×20, matné i lesklé, imitace kamene a betonu. Vybereme formát podle velikosti místnosti a počtu prostupů.</p>
            </div>
            <span className="eu-row__tag">stěna</span>
          </li>
          <li className="eu-row">
            <span className="eu-row__no">02</span>
            <div className="eu-row__body">
              <h3>Dlažby na podlahu</h3>
              <p>Slinutá dlažba s protiskluzem do koupelny i do vstupní zóny. Spočítáme spotřebu včetně prořezu, ať nekupujete zbytečně navíc.</p>
            </div>
            <span className="eu-row__tag">podlaha</span>
          </li>
          <li className="eu-row">
            <span className="eu-row__no">03</span>
            <div className="eu-row__body">
              <h3>Sanitární keramika</h3>
              <p>Umyvadla, závěsná WC, sprchové vaničky a baterie. Sladíme je s obkladem tak, aby ladily odstínem i proporcí.</p>
            </div>
            <span className="eu-row__tag">sanita</span>
          </li>
          <li className="eu-row">
            <span className="eu-row__no">04</span>
            <div className="eu-row__body">
              <h3>Spárovací hmoty a lišty</h3>
              <p>Odstín spáry, který obklad buď zvedne, nebo schová. Hydroizolace, profily a příslušenství — poslední, ale nejviditelnější detail.</p>
            </div>
            <span className="eu-row__tag">detail</span>
          </li>
        </ol>

        <figure className="eu-plan__figure">
          <img src="/section-1.webp" alt="Vzorky obkladů a dlažeb vyskládané v prodejně Euroker" className="eu-plan__img" />
          <figcaption>Vzorkovna v prodejně — obklady si můžete přiložit k sobě a vidět je při denním světle.</figcaption>
        </figure>
      </section>

      {/* SEKCE 2 — DŮVĚRA / PRODEJNA */}
      <section className="eu-trust" id="prodejna" aria-labelledby="trust-h">
        <figure className="eu-trust__figure">
          <img src="/section-2.webp" alt="Interiér prodejny Euroker s vystavenými koupelnami" className="eu-trust__img" />
        </figure>

        <div className="eu-trust__body">
          <p className="eu-eyebrow eu-eyebrow--dark">Proč k nám</p>
          <h2 id="trust-h" className="eu-h2">Třicet let a pořád rodinná firma</h2>
          <p className="eu-trust__lede">
            Poradíme podle toho, co se osvědčilo na stovkách budějovických
            koupelen — ne podle akční nálepky. Přijďte s rozměry, odejdete
            s hotovým výběrem a spotřebou spočítanou do kusu.
          </p>

          <ul className="eu-people">
            <li>
              <span className="eu-people__role">Jednatel</span>
              <span className="eu-people__name">Zdeněk Kovář</span>
              <a href="tel:+420602270601">+420 602 270 601</a>
            </li>
            <li>
              <span className="eu-people__role">Prodej a fakturace</span>
              <span className="eu-people__name">Nikola Menzingerová</span>
              <a href="tel:+420728581873">+420 728 581 873</a>
            </li>
            <li>
              <span className="eu-people__role">Grafické návrhy</span>
              <span className="eu-people__name">Jana Míšková</span>
              <a href="tel:+420606605604">+420 606 605 604</a>
            </li>
          </ul>

          <div className="eu-note" role="note">
            <strong>Nová prodejna.</strong> Najdete nás na adrese Nemanická 2721,
            v areálu BS Build servis. Kvůli výstavbě je příjezd zatím jen
            z Pražské třídy — nebojte se k nám zajet.
          </div>

          <dl className="eu-hours">
            <div><dt>Po–Pá</dt><dd>8:00–17:00</dd></div>
            <div><dt>So</dt><dd>zavřeno / po domluvě</dd></div>
            <div><dt>Výdej zboží</dt><dd>8:00–16:00</dd></div>
          </dl>
        </div>
      </section>
    </main>
  );
}
