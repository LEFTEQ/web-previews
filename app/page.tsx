export default function Page() {
  return (
    <main className="hr-page">
      {/* ===== HERO ===== */}
      <header className="hr-hero">
        <div className="hr-hero-topbar">
          <div className="hr-wordmark" aria-label="Nábytek Harašta">
            <span className="hr-wordmark-nabytek">Nábytek</span>
            <span className="hr-wordmark-harasta">HARAŠTA</span>
          </div>
          <div className="hr-topbar-meta">
            <span>Brno · Královopolská</span>
            <a href="tel:+420605712422" className="hr-topbar-phone">605 712 422</a>
          </div>
        </div>

        <div className="hr-hero-body">
          <p className="hr-hero-eyebrow">Truhlářská dílna · od roku 2002</p>
          <h1 className="hr-hero-title">
            <span className="hr-line hr-line-1">Nábytek,</span>
            <span className="hr-line hr-line-2">který sedne</span>
            <span className="hr-line hr-line-3">na milimetr<span className="hr-dot">.</span></span>
          </h1>
          <p className="hr-hero-sub">
            Kuchyně, vestavěné skříně a celé interiéry na míru — z lamina, dýhy
            i MDF ve vysokém lesku. Zaměříme, navrhneme, vyrobíme a namontujeme.
            Všechno pod jednou střechou v Brně.
          </p>
          <div className="hr-hero-actions">
            <a href="tel:+420605712422" className="hr-btn hr-btn-solid">Zavolat do dílny</a>
            <a href="mailto:info@harasta-nabytek.cz" className="hr-btn hr-btn-ghost">Napsat poptávku</a>
          </div>
        </div>

        {/* Signature: čelní pohled na spárořez dýhy — svislé „lamely“ hero pozadí */}
        <div className="hr-veneer" aria-hidden="true">
          <span className="hr-slat s1"></span>
          <span className="hr-slat s2"></span>
          <span className="hr-slat s3"></span>
          <span className="hr-slat s4"></span>
          <span className="hr-slat s5"></span>
          <span className="hr-slat s6"></span>
          <span className="hr-slat s7"></span>
        </div>

        <div className="hr-hero-rule" aria-hidden="true">
          <span className="hr-rule-tick">0</span>
          <span className="hr-rule-line"></span>
          <span className="hr-rule-tick">na milimetr přesně</span>
          <span className="hr-rule-line"></span>
          <span className="hr-rule-tick">2400 mm</span>
        </div>
      </header>

      {/* ===== SEKCE: CO VYRÁBÍME ===== */}
      <section className="hr-section hr-section-services" aria-labelledby="sluzby-h">
        <div className="hr-section-head">
          <p className="hr-eyebrow">Co u nás vzniká</p>
          <h2 id="sluzby-h" className="hr-h2">Od zaměření po poslední pant</h2>
          <p className="hr-section-lead">
            Každý kus děláme na zakázku podle vašeho prostoru — i toho atypického,
            kde sériový nábytek prostě nesedí.
          </p>
        </div>

        <div className="hr-services">
          <article className="hr-card">
            <div className="hr-card-mark" aria-hidden="true">
              <span className="hr-grain g1"></span><span className="hr-grain g2"></span><span className="hr-grain g3"></span>
            </div>
            <h3 className="hr-card-title">Kuchyňské linky</h3>
            <p className="hr-card-text">
              Na míru i do šikmin, výklenků a podkroví. Rozvržení pracovní desky,
              spotřebičů a úložných prostor navrhneme podle toho, jak vaříte vy.
            </p>
            <p className="hr-card-materials">lamino · dýha · MDF vysoký lesk</p>
          </article>

          <article className="hr-card">
            <div className="hr-card-mark" aria-hidden="true">
              <span className="hr-grain g1"></span><span className="hr-grain g2"></span><span className="hr-grain g3"></span>
            </div>
            <h3 className="hr-card-title">Vestavěné skříně</h3>
            <p className="hr-card-text">
              Od stěny ke stěně, od podlahy ke stropu. Vnitřní členění — police,
              šatní tyče, zásuvky — poskládáme přesně podle toho, co v nich bude.
            </p>
            <p className="hr-card-materials">posuvné i křídlové dveře</p>
          </article>

          <article className="hr-card">
            <div className="hr-card-mark" aria-hidden="true">
              <span className="hr-grain g1"></span><span className="hr-grain g2"></span><span className="hr-grain g3"></span>
            </div>
            <h3 className="hr-card-title">Obývací pokoje a knihovny</h3>
            <p className="hr-card-text">
              Knihovny na celou stěnu, TV stěny a sestavy do obýváku. Dětské
              a studentské pokoje, které rostou s dětmi.
            </p>
            <p className="hr-card-materials">návrh zdarma k zakázce</p>
          </article>

          <article className="hr-card">
            <div className="hr-card-mark" aria-hidden="true">
              <span className="hr-grain g1"></span><span className="hr-grain g2"></span><span className="hr-grain g3"></span>
            </div>
            <h3 className="hr-card-title">Kanceláře a ordinace</h3>
            <p className="hr-card-text">
              Recepce, kanceláře, ordinace i laboratoře. Nábytek, který vydrží
              provoz a snese pravidelný úklid i dezinfekci.
            </p>
            <p className="hr-card-materials">firmy · zdravotnictví · laboratoře</p>
          </article>
        </div>
      </section>

      {/* ===== SEKCE: DÍLNA / DŮVĚRA ===== */}
      <section className="hr-section hr-section-trust" aria-labelledby="dilna-h">
        <div className="hr-trust-grid">
          <div className="hr-trust-copy">
            <p className="hr-eyebrow hr-eyebrow-light">Dílna v Brně</p>
            <h2 id="dilna-h" className="hr-h2 hr-h2-light">
              Přes dvacet let řemesla v areálu Královopolské strojírny
            </h2>
            <p className="hr-trust-text">
              Nábytek Harašta vede od roku 2002 truhlář Michal Harašta. Nejsme
              showroom s katalogem — jsme dílna. Přijdete, řeknete, co potřebujete,
              a odejdete s konkrétním návrhem a cenou. Vyrábíme sami, montujeme
              sami, a proto ručíme za každou spáru.
            </p>
            <ul className="hr-trust-list">
              <li>Zaměření u vás doma zdarma po celém Brně a okolí</li>
              <li>Materiál vyberete v dílně — vzorky lamina, dýhy i lesklých MDF desek</li>
              <li>Pevná cena předem, žádné doměrky na faktuře</li>
              <li>Montáž vlastními lidmi, ne najatou partou</li>
            </ul>
          </div>

          <div className="hr-trust-facts">
            <div className="hr-fact">
              <span className="hr-fact-num">2002</span>
              <span className="hr-fact-label">rok založení dílny</span>
            </div>
            <div className="hr-fact">
              <span className="hr-fact-num">3</span>
              <span className="hr-fact-label">materiály na výběr: lamino, dýha, MDF v lesku</span>
            </div>
            <div className="hr-fact">
              <span className="hr-fact-num">1</span>
              <span className="hr-fact-label">adresa pro návrh, výrobu i reklamaci — Křižíkova 68i, Brno</span>
            </div>
            <div className="hr-fact hr-fact-quote">
              <p>„Kuchyň do podkroví se šikminou nám dvě firmy odmítly. Pan Harašta
              ji zaměřil, vyrobil a za tři týdny stála.“</p>
              <span className="hr-fact-label">— zákazník z Králova Pole</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
