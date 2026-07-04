import type { CSSProperties } from "react";

export default function Page() {
  return (
    <main className="cd-page">
      {/* HERO */}
      <header className="cd-hero" aria-label="CONDUCO — řízení stavebních projektů">
        <div className="cd-grid-lines" aria-hidden="true">
          <span /><span /><span /><span /><span />
        </div>

        <nav className="cd-nav" aria-label="Hlavní navigace">
          <a className="cd-mark" href="#uvod" aria-label="CONDUCO, úvod">
            <span className="cd-mark-con">CON</span><span className="cd-mark-duco">DUCO</span>
            <span className="cd-mark-tag">a.s. · řízení staveb</span>
          </a>
          <ul className="cd-nav-links">
            <li><a href="#sluzby">Co řídíme</a></li>
            <li><a href="#realizace">Realizace</a></li>
            <li><a href="tel:+420387426124">387 426 124</a></li>
          </ul>
        </nav>

        <div className="cd-hero-body" id="uvod">
          <p className="cd-eyebrow">České Budějovice · od záměru ke kolaudaci</p>
          <h1 className="cd-h1">
            <span className="cd-h1-line cd-delay-1">Vedeme stavbu</span>
            <span className="cd-h1-line cd-h1-accent cd-delay-2">za vás.</span>
            <span className="cd-h1-line cd-h1-sub cd-delay-3">Od prvního výkresu<br/>po předání klíčů.</span>
          </h1>
          <p className="cd-lede cd-delay-4">
            Nestavíme cihly, řídíme projekty. Za investory a developery přebíráme
            rozpočet, čas i kvalitu — projektový a cenový management, technický dozor
            a inženýring pod jednou zodpovědností.
          </p>
          <div className="cd-hero-cta cd-delay-4">
            <a className="cd-btn cd-btn-primary" href="#sluzby">Chci vést svůj projekt</a>
            <a className="cd-btn cd-btn-ghost" href="#realizace">Prohlédnout realizace</a>
          </div>
        </div>

        <div className="cd-hero-meta cd-delay-4" aria-hidden="false">
          <div><dt>Na trhu</dt><dd>25 let</dd></div>
          <div><dt>Vedeno</dt><dd>50+ staveb</dd></div>
          <div><dt>Investováno</dt><dd>3+ mld. Kč</dd></div>
        </div>
      </header>

      {/* SLUŽBY — jako fáze projektu */}
      <section className="cd-phases" id="sluzby" aria-labelledby="sluzby-h">
        <div className="cd-sec-head">
          <p className="cd-eyebrow cd-eyebrow-dark">Jak to vedeme</p>
          <h2 id="sluzby-h" className="cd-h2">Čtyři fáze, jedna zodpovědnost</h2>
          <p className="cd-sec-lede">
            Projekt vedeme jako harmonogram — každá fáze má jasný cíl, jeden termín
            a jednoho člověka, kterému voláte. Nikdy nezůstanete bez odpovědi.
          </p>
        </div>

        <ol className="cd-phase-list">
          <li className="cd-phase" style={{ "--p": "01" } as CSSProperties}>
            <span className="cd-phase-num">01</span>
            <h3>Příprava záměru</h3>
            <p>Investiční záměr, analýzy, posudky a rozpočtový rámec. Řekneme, co stavba
              reálně stojí, dřív než kopnete do země.</p>
            <ul>
              <li>Investiční záměr</li>
              <li>Analýzy a posudky</li>
              <li>Cenový model</li>
            </ul>
          </li>
          <li className="cd-phase" style={{ "--p": "02" } as CSSProperties}>
            <span className="cd-phase-num">02</span>
            <h3>Výběrová řízení</h3>
            <p>Vysoutěžíme projektanty i zhotovitele transparentně a porovnatelně.
              Ceny na stůl, žádné dodatky ze zákulisí.</p>
            <ul>
              <li>Zadání a soutěž</li>
              <li>Vyhodnocení nabídek</li>
              <li>Smluvní ošetření</li>
            </ul>
          </li>
          <li className="cd-phase" style={{ "--p": "03" } as CSSProperties}>
            <span className="cd-phase-num">03</span>
            <h3>Realizace a dozor</h3>
            <p>Technický dozor na stavbě, klientské změny a fit-out management.
              Hlídáme kvalitu, čas i každou fakturu.</p>
            <ul>
              <li>Technický dozor</li>
              <li>Klientské změny</li>
              <li>Fit-out management</li>
            </ul>
          </li>
          <li className="cd-phase" style={{ "--p": "04" } as CSSProperties}>
            <span className="cd-phase-num">04</span>
            <h3>Prodej a správa</h3>
            <p>Hotovou nemovitost prodáme, pronajmeme nebo spravujeme — technicky,
              ekonomicky i administrativně. Projekt tím teprve začíná žít.</p>
            <ul>
              <li>Prodej a marketing</li>
              <li>Správa nemovitostí</li>
              <li>Právní servis</li>
            </ul>
          </li>
        </ol>
      </section>

      {/* REALIZACE + důvěra */}
      <section className="cd-trust" id="realizace" aria-labelledby="real-h">
        <div className="cd-sec-head">
          <p className="cd-eyebrow">Realizace</p>
          <h2 id="real-h" className="cd-h2 cd-h2-light">Stavby, které stojí za jménem</h2>
          <p className="cd-sec-lede cd-sec-lede-light">
            Od turistické atrakce viditelné z celého Lipna po rezidenční projekty
            v centru — vedli jsme je od tabulky s rozpočtem až po předání.
          </p>
        </div>

        <ul className="cd-projects">
          <li className="cd-proj cd-proj-hero">
            <span className="cd-proj-kind">Turistická stavba · Lipno</span>
            <h3>Stezka korunami stromů</h3>
            <p>Vyhlídková stezka mezi korunami stromů — technicky náročná dřevěná
              konstrukce, kterou dnes ročně projdou statisíce návštěvníků.</p>
          </li>
          <li className="cd-proj">
            <span className="cd-proj-kind">Hotel</span>
            <h3>Hotel ELEMENT</h3>
            <p>Kompletní řízení výstavby a fit-out interiérů.</p>
          </li>
          <li className="cd-proj">
            <span className="cd-proj-kind">Rezidenční</span>
            <h3>Bytový projekt Luční jez</h3>
            <p>Příprava, prodej i marketing bydlení u vody.</p>
          </li>
          <li className="cd-proj">
            <span className="cd-proj-kind">Provozovna</span>
            <h3>Cukrárna POVIDLOŇ</h3>
            <p>Od záměru po hotový provoz na klíč.</p>
          </li>
        </ul>

        <div className="cd-numbers" aria-label="Čísla firmy">
          <div className="cd-number"><b>1000+</b><span>prodaných nemovitostí</span></div>
          <div className="cd-number"><b>50+</b><span>nemovitostí ve správě</span></div>
          <div className="cd-number"><b>15+</b><span>lidí v týmu</span></div>
          <div className="cd-number"><b>1000+</b><span>spokojených klientů</span></div>
        </div>

        <p className="cd-trust-note">
          Poradenská a realizační firma sídlící na adrese Česká 141/66,
          České Budějovice. Transparentní přístup napříč celým oborem stavebnictví
          — to není fráze, to je způsob, jak vedeme každou zakázku.
        </p>
      </section>
    </main>
  );
}
