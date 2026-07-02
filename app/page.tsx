export default function Page() {
  return (
    <main className="hb">
      {/* ============ HERO ============ */}
      <header className="hb-hero">
        <div className="hb-hero-top">
          <span className="hb-wordmark" aria-label="Halbos nábytek">
            HAL<span className="hb-wordmark-joint">·</span>BOS
            <span className="hb-wordmark-sub">nábytek na míru · Liberec</span>
          </span>
          <a className="hb-hero-tel" href="tel:+420603557714">+420 603 557 714</a>
        </div>

        <div className="hb-hero-main">
          <p className="hb-hero-eyebrow">Truhlářská výroba a řešení celého interiéru</p>
          <h1 className="hb-hero-title">
            <span className="hb-line hb-line-1">Nábytek,</span>
            <span className="hb-line hb-line-2">který sedí</span>
            <span className="hb-line hb-line-3">
              na&nbsp;milimetr<span className="hb-mm">.</span>
            </span>
          </h1>
          <p className="hb-hero-lead">
            Změříme váš byt, architekt nakreslí návrh a&nbsp;my nábytek vyrobíme
            ve&nbsp;vlastní dílně. Vestavěné skříně, kuchyně, ložnice i&nbsp;dětské
            pokoje — přesně do&nbsp;vašich stěn, ne&nbsp;„skoro“.
          </p>
          <div className="hb-hero-actions">
            <a className="hb-btn hb-btn-solid" href="tel:+420603557714">Zavolat do dílny</a>
            <a className="hb-btn hb-btn-line" href="mailto:info@halbos.cz">Napsat poptávku</a>
          </div>
        </div>

        {/* Signature: kótovaná linka jako z výkresu truhláře */}
        <div className="hb-dim" aria-hidden="true">
          <div className="hb-dim-rule">
            <span className="hb-dim-tick" />
            <span className="hb-dim-label">2 380 mm — od zdi ke zdi, žádná spára</span>
            <span className="hb-dim-tick" />
          </div>
        </div>

        <ul className="hb-hero-facts" aria-label="Základní fakta o firmě">
          <li><strong>Vlastní výroba</strong><span>moderní CNC stroje</span></li>
          <li><strong>Návrh od 4&nbsp;000&nbsp;Kč</strong><span>včetně 3D vizualizace</span></li>
          <li><strong>Liberec a&nbsp;okolí</strong><span>zaměření u&nbsp;vás doma</span></li>
        </ul>
      </header>

      {/* ============ SEKCE 1: CO VYROBÍME ============ */}
      <section className="hb-section hb-make" aria-labelledby="make-h">
        <div className="hb-section-head">
          <p className="hb-eyebrow">Co pro vás vyrobíme</p>
          <h2 id="make-h">Od jedné skříně po celý byt</h2>
          <p className="hb-section-lead">
            Každý kus kreslíme na&nbsp;míru konkrétní místnosti. Materiály a&nbsp;dekory
            vybíráte s&nbsp;architektem, vyrábí naše dílna — takže za&nbsp;výsledek ručíme my,
            ne&nbsp;subdodavatel.
          </p>
        </div>

        <div className="hb-make-grid">
          <article className="hb-card">
            <span className="hb-card-mark" aria-hidden="true">skříň</span>
            <h3>Vestavěná skříň</h3>
            <p>
              Využijeme každý centimetr — šikminy pod schody, výklenky i&nbsp;celé stěny.
              Vnitřek rozvrhneme podle toho, co v&nbsp;ní opravdu budete mít.
            </p>
          </article>
          <article className="hb-card">
            <span className="hb-card-mark" aria-hidden="true">kuchyň</span>
            <h3>Kuchyň na míru</h3>
            <p>
              Pracovní výška podle vaší postavy, spotřebiče tam, kde je čekáte.
              Dvířka a&nbsp;pracovní desky z&nbsp;dekorů, které si osaháte na&nbsp;vzorcích.
            </p>
          </article>
          <article className="hb-card">
            <span className="hb-card-mark" aria-hidden="true">ložnice</span>
            <h3>Ložnice</h3>
            <p>
              Postel, noční stolky a&nbsp;úložné prostory jako jeden celek.
              Sladíme materiály, úchytky i&nbsp;osvětlení, aby místnost působila klidně.
            </p>
          </article>
          <article className="hb-card">
            <span className="hb-card-mark" aria-hidden="true">pokojík</span>
            <h3>Dětský pokoj</h3>
            <p>
              Nábytek, který roste s&nbsp;dítětem — patra, psací stoly, hodně úložného
              prostoru a&nbsp;oblé hrany tam, kde se běhá.
            </p>
          </article>
          <article className="hb-card hb-card-wide">
            <span className="hb-card-mark" aria-hidden="true">celý prostor</span>
            <h3>Řešení celého prostoru</h3>
            <p>
              Pro náročné zákazníky a&nbsp;developery sjednotíme celý interiér: návrh od
              architekta, výroba nábytku, čalounické práce, osvětlení, tapety
              i&nbsp;řemesla jako elektro a&nbsp;výmalba. Vy se už jen nastěhujete.
            </p>
          </article>
        </div>

        <aside className="hb-price" aria-label="Cena návrhu interiéru">
          <div className="hb-price-tag">
            <span className="hb-price-num">od 4&nbsp;000&nbsp;Kč</span>
            <span className="hb-price-what">návrh interiéru jedné místnosti</span>
          </div>
          <ul className="hb-price-list">
            <li>2–3 osobní schůzky</li>
            <li>Návrh dispozičního řešení</li>
            <li>3D vizualizace</li>
            <li>Poradenství s materiály a dekory</li>
            <li>Technická konzultace s výrobou</li>
          </ul>
        </aside>
      </section>

      {/* ============ SEKCE 2: CESTA + DŮVĚRA ============ */}
      <section className="hb-section hb-path" aria-labelledby="path-h">
        <div className="hb-section-head">
          <p className="hb-eyebrow hb-eyebrow-light">Od objednávky po montáž</p>
          <h2 id="path-h">Cesta vašeho nábytku</h2>
          <p className="hb-section-lead hb-section-lead-light">
            Celý proces držíme ve&nbsp;vlastních rukou — proto přesně víte, kdy co proběhne
            a&nbsp;kdo za&nbsp;to odpovídá.
          </p>
        </div>

        <ol className="hb-steps">
          <li className="hb-step">
            <span className="hb-step-mm">01</span>
            <h3>Zaměření u vás</h3>
            <p>Přijedeme, změříme místnost na&nbsp;milimetr a&nbsp;probereme, jak prostor používáte.</p>
          </li>
          <li className="hb-step">
            <span className="hb-step-mm">02</span>
            <h3>Návrh a 3D vizualizace</h3>
            <p>Architekt nakreslí dispozici i&nbsp;vizualizaci. Upravujeme, dokud nesedí vám.</p>
          </li>
          <li className="hb-step">
            <span className="hb-step-mm">03</span>
            <h3>Výroba v naší dílně</h3>
            <p>Řežeme a&nbsp;olepujeme na&nbsp;moderních CNC strojích — kvalita je u&nbsp;nás na&nbsp;prvním místě.</p>
          </li>
          <li className="hb-step">
            <span className="hb-step-mm">04</span>
            <h3>Montáž a předání</h3>
            <p>Naši montážníci nábytek usadí, seřídí dvířka a&nbsp;uklidí po&nbsp;sobě. Hotovo.</p>
          </li>
        </ol>

        <div className="hb-refs">
          <h3 className="hb-refs-h">Realizace, za kterými si stojíme</h3>
          <ul className="hb-refs-list">
            <li>
              <strong>Byt soukromého investora</strong>
              <span>kompletní realizace — návrh, výroba, čalounění, montáž</span>
            </li>
            <li>
              <strong>Vinotéka Beroun</strong>
              <span>komerční prostor na míru provozu</span>
            </li>
            <li>
              <strong>Kavárna Ježkovy Voci</strong>
              <span>nábytek i atmosféra podniku</span>
            </li>
            <li>
              <strong>Školka Lidice</strong>
              <span>bezpečný a odolný dětský prostor</span>
            </li>
            <li>
              <strong>VLS Ředitelství Praha</strong>
              <span>kanceláře reprezentativní instituce</span>
            </li>
            <li>
              <strong>Vzorový byt pro developera</strong>
              <span>interiér, který prodává celý projekt</span>
            </li>
          </ul>
          <p className="hb-refs-note">
            Nábytek Halbos si objednáte v&nbsp;naší prodejně v&nbsp;Liberci nebo u&nbsp;partnerských
            prodejen — napište na <a href="mailto:info@halbos.cz">info@halbos.cz</a> a&nbsp;pošleme vám tu nejbližší.
          </p>
        </div>
      </section>
    </main>
  );
}
