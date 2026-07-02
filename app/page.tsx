export default function Page() {
  return (
    <main className="vt">
      {/* ===== HERO ===== */}
      <header className="hero">
        <div className="hero-inner">
          <div className="brand">
            <span className="brand-mark" aria-hidden="true">
              <svg viewBox="0 0 40 40" width="40" height="40" fill="none">
                <circle cx="20" cy="20" r="18" stroke="currentColor" strokeWidth="2" />
                <path d="M20 20 L20 5 A15 15 0 0 1 31 9 Z" fill="currentColor" />
                <path d="M20 20 L33 27 A15 15 0 0 1 22 35 Z" fill="currentColor" />
                <path d="M20 20 L7 27 A15 15 0 0 1 7 13 Z" fill="currentColor" />
                <circle cx="20" cy="20" r="3.5" fill="currentColor" />
              </svg>
            </span>
            <span className="brand-word">
              BRIŠ<span className="brand-sro">&nbsp;s.r.o.</span>
            </span>
          </div>

          <p className="hero-eyebrow">Vzduchotechnika a klimatizace · Brno</p>

          <h1 className="hero-title">
            <span className="line line-1">Aby se ve vaší budově</span>
            <span className="line line-2">dalo dýchat.</span>
          </h1>

          <p className="hero-lead">
            Navrhujeme, montujeme a servisujeme vzduchotechniku pro haly, kanceláře,
            restaurace i bytové domy. V Brně a okolí, od projektu po pravidelné revize.
          </p>

          <div className="hero-actions">
            <a className="btn btn-solid" href="tel:+420541000000">Zavolat: 541 000 000</a>
            <a className="btn btn-ghost" href="mailto:info@bris-vzt.cz">Napsat e-mail</a>
          </div>
        </div>

        {/* Signature: potrubní trasa — schéma VZT rozvodu jako grafický podpis */}
        <div className="duct" aria-hidden="true">
          <svg viewBox="0 0 1200 320" preserveAspectRatio="xMidYMax slice">
            <path
              className="duct-pipe"
              d="M-20 250 H260 a28 28 0 0 0 28 -28 V150 a28 28 0 0 1 28 -28 H560 a28 28 0 0 1 28 28 v72 a28 28 0 0 0 28 28 H1220"
              fill="none"
            />
            <path
              className="duct-flow"
              d="M-20 250 H260 a28 28 0 0 0 28 -28 V150 a28 28 0 0 1 28 -28 H560 a28 28 0 0 1 28 28 v72 a28 28 0 0 0 28 28 H1220"
              fill="none"
            />
            {/* výustky */}
            <g className="duct-vents">
              <rect x="396" y="104" width="56" height="10" rx="3" />
              <rect x="760" y="232" width="56" height="10" rx="3" />
              <rect x="960" y="232" width="56" height="10" rx="3" />
            </g>
          </svg>
        </div>
      </header>

      {/* ===== SLUŽBY ===== */}
      <section className="sluzby" aria-labelledby="sluzby-h">
        <div className="section-inner">
          <p className="eyebrow">Co pro vás uděláme</p>
          <h2 id="sluzby-h" className="section-title">
            Celá cesta vzduchu.<br />Od projektu po servis.
          </h2>

          <div className="karty">
            <article className="karta">
              <div className="karta-head">
                <span className="karta-tag">Přívod</span>
                <h3>Projekce a návrh</h3>
              </div>
              <p>
                Spočítáme, kolik vzduchu váš prostor skutečně potřebuje — kuchyně
                restaurace má jiné nároky než open space. Dostanete projekt, výkaz
                výměr a jasnou cenu předem.
              </p>
            </article>

            <article className="karta">
              <div className="karta-head">
                <span className="karta-tag">Rozvod</span>
                <h3>Montáž vzduchotechniky</h3>
              </div>
              <p>
                Potrubní rozvody, rekuperační jednotky, klimatizace i odsávání
                z výroby. Montujeme vlastními lidmi, ne subdodávkou — víte, kdo
                u vás na stavbě pracuje.
              </p>
            </article>

            <article className="karta">
              <div className="karta-head">
                <span className="karta-tag">Výdech</span>
                <h3>Servis a čištění</h3>
              </div>
              <p>
                Výměny filtrů, čištění potrubí a odmašťování kuchyňských digestoří,
                povinné revize požárních klapek. Hlídáme termíny za vás a jezdíme
                po celém Brněnsku.
              </p>
            </article>
          </div>

          <ul className="detaily">
            <li>Rekuperace pro bytové domy i rodinné domy</li>
            <li>Odsávání kuchyní restaurací a jídelen</li>
            <li>Klimatizace kanceláří a serveroven</li>
            <li>Průmyslové odsávání dílen a lakoven</li>
            <li>Požární klapky — montáž i roční kontroly</li>
            <li>Regulace a měření průtoku vzduchu</li>
          </ul>
        </div>
      </section>

      {/* ===== DŮVĚRA ===== */}
      <section className="duvera" aria-labelledby="duvera-h">
        <div className="section-inner duvera-grid">
          <div className="duvera-text">
            <p className="eyebrow eyebrow-light">Proč Briš</p>
            <h2 id="duvera-h" className="section-title section-title-light">
              Řemeslo, které není vidět.<br />Dokud nechybí.
            </h2>
            <p className="duvera-lead">
              Vzduchotechnika je dobrá tehdy, když si jí nikdo nevšimne — nehučí,
              netáhne a vzduch je prostě čerstvý. Přesně takovou stavíme přes
              dvacet let. Firma sídlí v Brně a většinu zakázek máme do hodiny cesty,
              takže když se něco pokazí, jsme u vás týž den.
            </p>
            <blockquote className="reference">
              <p>
                „Odsávání kuchyně nám Briš vyměnili za provozu, přes noc.
                Ráno jsme normálně vařili. Od té doby nám dělají i pravidelné čištění.“
              </p>
              <cite>— provozní restaurace, Brno-Královo Pole</cite>
            </blockquote>
          </div>

          <dl className="fakta">
            <div className="fakt">
              <dt>Působíme od roku</dt>
              <dd>2001</dd>
            </div>
            <div className="fakt">
              <dt>Kilometrů potrubí v provozu</dt>
              <dd>140+</dd>
            </div>
            <div className="fakt">
              <dt>Budov v pravidelném servisu</dt>
              <dd>85</dd>
            </div>
            <div className="fakt">
              <dt>Dojezd po Brně a okolí</dt>
              <dd>do 24 h</dd>
            </div>
          </dl>
        </div>
      </section>
    </main>
  );
}
