export default function Page() {
  return (
    <main className="pk">
      {/* ===================== HERO ===================== */}
      <header className="pk-hero">
        <div className="pk-hero-grain" aria-hidden="true" />
        <nav className="pk-nav" aria-label="Hlavní navigace">
          <a className="pk-wordmark" href="#" aria-label="Lakovna Jakub, úvod">
            <span className="pk-wordmark-dot" aria-hidden="true" />
            LAKOVNA<em>JAKUB</em>
          </a>
          <div className="pk-nav-links">
            <a href="#technologie">Technologie</a>
            <a href="#duvera">Proč u nás</a>
            <a className="pk-nav-cta" href="tel:+420596000000">Zavolat lakovně</a>
          </div>
        </nav>

        <div className="pk-hero-inner">
          <p className="pk-hero-eyebrow">
            <span className="pk-chip">Prášková lakovna · Ostrava</span>
            <span className="pk-chip pk-chip-ghost">od roku 2002</span>
          </p>

          <h1 className="pk-hero-title">
            <span className="pk-line pk-line-1">Kov přijede holý.</span>
            <span className="pk-line pk-line-2">
              Odjede <span className="pk-coated">vypálený<span className="pk-coat-layer" aria-hidden="true" /></span>
            </span>
            <span className="pk-line pk-line-3">na 180&nbsp;°C.</span>
          </h1>

          <p className="pk-hero-sub">
            Práškové lakování železných i neželezných kovů. Brány, zábradlí, disky,
            konstrukce i sériové díly — nástřik prášku, vypálení v peci, povrch,
            který drží roky venku i v hale.
          </p>

          <div className="pk-hero-actions">
            <a className="pk-btn pk-btn-solid" href="tel:+420596000000">Zavolat: 596 000 000</a>
            <a className="pk-btn pk-btn-line" href="#technologie">Jak lakujeme</a>
          </div>

          {/* Signature: RAL vzorník jako pás karet – řemeslný artefakt lakýrníka */}
          <div className="pk-ral" role="img" aria-label="Vzorník odstínů RAL: antracit, dopravní modrá, ohnivě červená, žlutá, čistě bílá, chromová zelená">
            <div className="pk-ral-card" style={{ background: '#3a3d40', color: '#fff' }}>
              <span>RAL 7016</span><em>antracit</em>
            </div>
            <div className="pk-ral-card" style={{ background: '#0e4c8c', color: '#fff' }}>
              <span>RAL 5017</span><em>dopravní modrá</em>
            </div>
            <div className="pk-ral-card" style={{ background: '#c8362b', color: '#fff' }}>
              <span>RAL 3000</span><em>ohnivě červená</em>
            </div>
            <div className="pk-ral-card" style={{ background: '#f0a800', color: '#1c1e21' }}>
              <span>RAL 1023</span><em>dopravní žlutá</em>
            </div>
            <div className="pk-ral-card" style={{ background: '#f2f3f0', color: '#1c1e21' }}>
              <span>RAL 9010</span><em>čistě bílá</em>
            </div>
            <div className="pk-ral-card" style={{ background: '#2e4b3c', color: '#fff' }}>
              <span>RAL 6020</span><em>chromová zelená</em>
            </div>
            <p className="pk-ral-note">Lakujeme v celé škále RAL — matně, leskle i ve struktuře.</p>
          </div>
        </div>
      </header>

      {/* ===================== SEKCE 1: TECHNOLOGIE ===================== */}
      <section className="pk-tech" id="technologie" aria-labelledby="tech-title">
        <div className="pk-section-head">
          <p className="pk-eyebrow">Technologie</p>
          <h2 id="tech-title">Čtyři kroky mezi vraty a vraty</h2>
          <p className="pk-section-lead">
            Prášek se na díl nanáší elektrostaticky a vypéká v peci. Žádné ředidlo,
            žádné stékání — vrstva je rovnoměrná a tvrdší než mokrý lak.
          </p>
        </div>

        <ol className="pk-steps">
          <li className="pk-step">
            <span className="pk-step-num" aria-hidden="true">01</span>
            <h3>Příjem a odmaštění</h3>
            <p>
              Díl převezmeme, zkontrolujeme svary a hrany a chemicky odmastíme.
              Na mastném kovu prášek nedrží — proto tenhle krok nikdy nešidíme.
            </p>
            <span className="pk-step-meta">ocel · hliník · pozink</span>
          </li>
          <li className="pk-step">
            <span className="pk-step-num" aria-hidden="true">02</span>
            <h3>Otryskání povrchu</h3>
            <p>
              Rez a starý nátěr sundáme tryskáním. Povrch dostane zdrsnění,
              do kterého se lak „zakousne“ — základ dlouhé životnosti.
            </p>
            <span className="pk-step-meta">i silně zkorodované díly</span>
          </li>
          <li className="pk-step">
            <span className="pk-step-num" aria-hidden="true">03</span>
            <h3>Elektrostatický nástřik</h3>
            <p>
              Nabité částice prášku samy obalí díl ze všech stran, včetně hran
              a koutů. Odstín vybíráte ze vzorníku RAL přímo u nás.
            </p>
            <span className="pk-step-meta">mat · lesk · struktura</span>
          </li>
          <li className="pk-step">
            <span className="pk-step-num" aria-hidden="true">04</span>
            <h3>Vypálení v peci</h3>
            <p>
              Při 180&nbsp;°C se prášek roztaví a spojí v souvislý tvrdý povlak.
              Díl je po vychladnutí hned připravený k montáži.
            </p>
            <span className="pk-step-meta">180 °C · cca 20 minut</span>
          </li>
        </ol>

        <div className="pk-tech-strip">
          <div>
            <strong>Co k nám vozí lidé z Ostravy a okolí</strong>
            <p>
              Brány a ploty, zábradlí, disky kol, rámy motorek a kol, zahradní
              nábytek, radiátory, konstrukce hal i drobné sériové výpalky.
              Jednotlivé kusy i pravidelné zakázky pro firmy.
            </p>
          </div>
          <a className="pk-btn pk-btn-line" href="tel:+420596000000">Zeptat se na termín</a>
        </div>
      </section>

      {/* ===================== SEKCE 2: DŮVĚRA ===================== */}
      <section className="pk-trust" id="duvera" aria-labelledby="trust-title">
        <div className="pk-trust-grid">
          <div className="pk-trust-copy">
            <p className="pk-eyebrow pk-eyebrow-light">Proč u nás</p>
            <h2 id="trust-title">V Ostravě lakujeme prášky déle než dvacet let</h2>
            <p>
              Lakovna běží od roku 2002, od roku 2011 jako LAKOVNA JAKUB s.r.o.
              Celou dobu děláme jedno řemeslo — povrchovou úpravu železných
              a neželezných kovů práškovými plasty. Žádní překupníci, díl lakuje
              ten, s kým se domluvíte po telefonu.
            </p>
            <ul className="pk-trust-list">
              <li>
                <strong>Poradíme s odstínem i strukturou.</strong> Vzorník RAL máte
                v ruce u příjmu, ne v e-mailu.
              </li>
              <li>
                <strong>Termín řekneme rovnou.</strong> Menší díly obvykle do
                několika dnů, u sérií se domluvíme na pravidelném odběru.
              </li>
              <li>
                <strong>Cenu znáte předem.</strong> Naceníme podle rozměru a stavu
                povrchu — bez skrytých položek za tryskání nebo maskování.
              </li>
            </ul>
          </div>

          <aside className="pk-trust-facts" aria-label="Fakta o lakovně">
            <div className="pk-fact">
              <span className="pk-fact-value">2002</span>
              <span className="pk-fact-label">v Ostravě lakujeme od tohoto roku</span>
            </div>
            <div className="pk-fact">
              <span className="pk-fact-value">180&nbsp;°C</span>
              <span className="pk-fact-label">vypalovací teplota — povrch tvrdší než mokrý lak</span>
            </div>
            <div className="pk-fact">
              <span className="pk-fact-value">RAL</span>
              <span className="pk-fact-label">celá škála odstínů, mat i lesk, skladem běžné tóny</span>
            </div>
            <div className="pk-fact">
              <span className="pk-fact-value">1 kus</span>
              <span className="pk-fact-label">lakujeme i jednotlivé díly, ne jen série</span>
            </div>
          </aside>
        </div>

        <figure className="pk-quote">
          <blockquote>
            „Přivezl jsem zrezlou bránu po dědovi. Za týden byla otryskaná,
            v antracitu a vypadá líp než nová z hobbymarketu.“
          </blockquote>
          <figcaption>— zákazník z Ostravy-Poruby, brána v RAL 7016</figcaption>
        </figure>
      </section>
    </main>
  );
}
