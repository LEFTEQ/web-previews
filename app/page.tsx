export default function Page() {
  return (
    <main className="cn-main">
      {/* ===== HERO ===== */}
      <section className="cn-hero" aria-labelledby="cn-hero-title">
        <header className="cn-topbar">
          <a href="#" className="cn-wordmark" aria-label="Cukrové nebe, cukrárna Brno">
            <span className="cn-wordmark-cukrove">Cukrové</span>
            <span className="cn-wordmark-nebe">nebe</span>
          </a>
          <p className="cn-topbar-note">Cukrárna · Brno</p>
        </header>

        <div className="cn-hero-inner">
          <p className="cn-hero-eyebrow">Ručně zdobené dorty a zákusky z Brna</p>
          <h1 id="cn-hero-title" className="cn-hero-title">
            <span className="cn-hero-line cn-hero-line-1">Šlehačka,</span>
            <span className="cn-hero-line cn-hero-line-2">piškot,</span>
            <span className="cn-hero-line cn-hero-line-3">nebe.</span>
          </h1>
          <p className="cn-hero-lead">
            Každý dort u nás vzniká ručně — od korpusu po poslední špičku
            šlehačky ze sáčku. Pečeme z másla, smetany a čerstvého ovoce,
            bez směsí a bez kompromisů.
          </p>
          <div className="cn-hero-actions">
            <a href="#nabidka" className="cn-btn cn-btn-primary">Prohlédnout nabídku</a>
            <a href="#o-nas" className="cn-btn cn-btn-ghost">Jak pečeme</a>
          </div>
        </div>

        {/* Signature: piped-cream scallop divider (cukrářský sáček) */}
        <div className="cn-scallops" aria-hidden="true">
          <svg viewBox="0 0 1200 90" preserveAspectRatio="none" focusable="false">
            <path
              d="M0,90 L0,55 C25,10 75,10 100,55 C125,10 175,10 200,55 C225,10 275,10 300,55 C325,10 375,10 400,55 C425,10 475,10 500,55 C525,10 575,10 600,55 C625,10 675,10 700,55 C725,10 775,10 800,55 C825,10 875,10 900,55 C925,10 975,10 1000,55 C1025,10 1075,10 1100,55 C1125,10 1175,10 1200,55 L1200,90 Z"
              fill="currentColor"
            />
          </svg>
        </div>
      </section>

      {/* ===== NABÍDKA ===== */}
      <section className="cn-section cn-vitrina" id="nabidka" aria-labelledby="cn-vitrina-title">
        <div className="cn-section-head">
          <h2 id="cn-vitrina-title" className="cn-section-title">Co najdete ve vitríně</h2>
          <p className="cn-section-sub">
            Nabídka se mění podle sezóny a toho, co je zrovna čerstvé.
            Dorty na objednávku připravíme do 5 pracovních dnů.
          </p>
        </div>

        <ul className="cn-cards">
          <li className="cn-card">
            <span className="cn-card-dollop" aria-hidden="true" />
            <h3 className="cn-card-title">Dorty na objednávku</h3>
            <p className="cn-card-text">
              Narozeninové, svatební i dětské. Vyberete si korpus, krém a
              zdobení — my navrhneme, jak to bude vypadat, a pošleme vám
              náhled ke schválení.
            </p>
            <p className="cn-card-price">od 650 Kč / kg</p>
          </li>
          <li className="cn-card">
            <span className="cn-card-dollop" aria-hidden="true" />
            <h3 className="cn-card-title">Zákusky a věnečky</h3>
            <p className="cn-card-text">
              Klasika, jak ji znáte od babičky: větrníky, věnečky, špičky,
              laskonky a punčáky. Pečeme denně, co se do večera neprodá,
              druhý den nenabízíme.
            </p>
            <p className="cn-card-price">od 32 Kč / kus</p>
          </li>
          <li className="cn-card">
            <span className="cn-card-dollop" aria-hidden="true" />
            <h3 className="cn-card-title">Sladké na oslavu</h3>
            <p className="cn-card-text">
              Mini zákusky, cukroví a sladké bary na svatby, firemní akce
              i křtiny. Poradíme s množstvím, aby zbylo tak akorát —
              tedy skoro nic.
            </p>
            <p className="cn-card-price">cena dle objednávky</p>
          </li>
        </ul>

        <p className="cn-vitrina-note">
          Upečeme i bez lepku nebo bez laktózy — stačí říct dva dny předem.
        </p>
      </section>

      {/* ===== O NÁS / DŮVĚRA ===== */}
      <section className="cn-section cn-onas" id="o-nas" aria-labelledby="cn-onas-title">
        <div className="cn-onas-grid">
          <div className="cn-onas-story">
            <h2 id="cn-onas-title" className="cn-section-title">Malá cukrárna, velká poctivost</h2>
            <p className="cn-onas-text">
              Cukrové nebe je rodinná cukrárna z Brna. Nejsme řetězec —
              u pultu potkáte tu samou paní, která ráno šlehala krémy.
              Suroviny kupujeme od dodavatelů, které známe jménem:
              máslo, smetanu, vejce z Vysočiny a ovoce podle sezóny.
            </p>
            <p className="cn-onas-text">
              Když si objednáte dort, domluvíme se s vámi osobně — co má
              být uvnitř, komu ho nesete a co má oslavenci udělat radost.
              Proto se k nám lidé vracejí na každé narozeniny znovu.
            </p>
            <ul className="cn-onas-facts">
              <li><strong>Pečeme denně</strong> — vitrína je každé ráno čerstvá</li>
              <li><strong>Pravé máslo a smetana</strong> — žádné rostlinné náhražky</li>
              <li><strong>Osobní domluva</strong> — každý dort řešíme s vámi</li>
            </ul>
          </div>

          <div className="cn-reviews" aria-label="Reference zákazníků">
            <blockquote className="cn-review">
              <p>
                „Objednávala jsem dceři dort k pátým narozeninám. Jednorožec
                vypadal přesně podle obrázku a chutnal ještě líp, než vypadal.“
              </p>
              <footer className="cn-review-author">Markéta, Brno-Líšeň</footer>
            </blockquote>
            <blockquote className="cn-review">
              <p>
                „Větrníky jako od babičky. Chodím každou sobotu a beru
                rovnou krabici — doma by mi jinak nic nezbylo.“
              </p>
              <footer className="cn-review-author">Petr, Brno-střed</footer>
            </blockquote>
            <blockquote className="cn-review">
              <p>
                „Sladký bar na naší svatbě sklidil větší úspěch než kapela.
                Mini věnečky zmizely do hodiny.“
              </p>
              <footer className="cn-review-author">Anna a Jakub, svatba v Brně</footer>
            </blockquote>
          </div>
        </div>
      </section>
    </main>
  );
}
