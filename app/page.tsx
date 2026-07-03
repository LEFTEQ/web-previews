export default function Page() {
  return (
    <main className="mt">
      {/* ===== HERO ===== */}
      <header className="mt-hero">
        <div className="mt-hero-inner">
          <div className="mt-brandbar">
            <span className="mt-wordmark">
              medea<span className="mt-wordmark-dot" aria-hidden="true">·</span>therapy
            </span>
            <span className="mt-brandbar-loc">rehabilitace — Liberec</span>
          </div>

          <h1 className="mt-hero-title">
            <span className="mt-line mt-line-1">Tělo si pamatuje,</span>
            <span className="mt-line mt-line-2">jak se hýbat<span className="mt-accent-stop">.</span></span>
            <span className="mt-line mt-line-3">Pomůžeme mu vzpomenout si.</span>
          </h1>

          <p className="mt-hero-lead">
            Ambulantní rehabilitace ve Starých Pavlovicích. Fyzioterapie vedená
            lékařem, individuální cvičení a fyzikální terapie — pro záda, klouby
            i návrat po operaci či úrazu.
          </p>

          <div className="mt-hero-facts">
            <div className="mt-fact">
              <span className="mt-fact-label">Kde nás najdete</span>
              <span className="mt-fact-value">Na Pískovně 565/9, Liberec 12</span>
            </div>
            <div className="mt-fact">
              <span className="mt-fact-label">Odborný garant</span>
              <span className="mt-fact-value">MUDr. Jana Vlková</span>
            </div>
            <div className="mt-fact">
              <span className="mt-fact-label">Péče</span>
              <span className="mt-fact-value">Hrazena zdravotními pojišťovnami</span>
            </div>
          </div>
        </div>

        {/* Signature: záznam pohybu — křivka rozsahu kloubu jako z kineziologického rozboru */}
        <div className="mt-hero-graphic" aria-hidden="true">
          <svg
            className="mt-rom"
            viewBox="0 0 1200 320"
            preserveAspectRatio="none"
            focusable="false"
          >
            <path
              className="mt-rom-grid"
              d="M0 80 H1200 M0 160 H1200 M0 240 H1200"
            />
            <path
              className="mt-rom-path mt-rom-before"
              d="M0 250 C 120 250, 160 230, 250 232 S 430 258, 520 244 S 700 250, 800 238 S 1050 252, 1200 240"
            />
            <path
              className="mt-rom-path mt-rom-after"
              d="M0 250 C 140 246, 200 200, 300 178 S 520 150, 640 122 S 880 92, 1000 74 S 1140 58, 1200 52"
            />
            <circle className="mt-rom-point" cx="1200" cy="52" r="7" />
          </svg>
          <div className="mt-rom-legend">
            <span className="mt-legend-item mt-legend-before">rozsah pohybu — před terapií</span>
            <span className="mt-legend-item mt-legend-after">po terapii</span>
          </div>
        </div>
      </header>

      {/* ===== SLUŽBY ===== */}
      <section className="mt-section" aria-labelledby="sluzby-h">
        <div className="mt-section-head">
          <span className="mt-eyebrow">S čím k nám lidé chodí</span>
          <h2 id="sluzby-h" className="mt-h2">
            Rehabilitace, která začíná vyšetřením — ne cvičebním plánem z šuplíku
          </h2>
        </div>

        <div className="mt-services">
          <article className="mt-service">
            <h3 className="mt-service-title">Bolesti zad a krční páteře</h3>
            <p className="mt-service-text">
              Nejčastější důvod první návštěvy. Kineziologickým rozborem najdeme
              příčinu — přetížené svaly, blokádu, špatný pohybový stereotyp — a
              sestavíme terapii, kterou zvládnete i doma.
            </p>
            <span className="mt-service-tag">měkké techniky · mobilizace · cvičení</span>
          </article>

          <article className="mt-service">
            <h3 className="mt-service-title">Po operaci a po úrazu</h3>
            <p className="mt-service-text">
              Návrat k běžnému pohybu po výměně kloubu, artroskopii, zlomenině
              nebo distorzi. Postupujeme podle fáze hojení a ve spolupráci s
              vaším operatérem či praktickým lékařem.
            </p>
            <span className="mt-service-tag">obnova rozsahu · posílení · stabilita</span>
          </article>

          <article className="mt-service">
            <h3 className="mt-service-title">Fyzikální terapie</h3>
            <p className="mt-service-text">
              Elektroléčba, ultrazvuk a magnetoterapie jako doplněk cvičení —
              tlumí bolest a urychlují hojení. Vždy jako součást plánu, nikdy
              jako jediná léčba.
            </p>
            <span className="mt-service-tag">elektroléčba · ultrazvuk · magnet</span>
          </article>

          <article className="mt-service">
            <h3 className="mt-service-title">Individuální léčebný tělocvik</h3>
            <p className="mt-service-text">
              Cvičíte jeden na jednoho s fyzioterapeutem, ne ve skupině.
              Odcházíte s několika cviky, kterým rozumíte a které opravdu
              děláte — to rozhoduje o výsledku.
            </p>
            <span className="mt-service-tag">1 : 1 s terapeutem · plán domů</span>
          </article>
        </div>
      </section>

      {/* ===== DŮVĚRA / JAK TO PROBÍHÁ ===== */}
      <section className="mt-section mt-section-trust" aria-labelledby="prubeh-h">
        <div className="mt-section-head">
          <span className="mt-eyebrow">Zdravotnické zařízení, ne fitness studio</span>
          <h2 id="prubeh-h" className="mt-h2">Jak u nás terapie probíhá</h2>
        </div>

        <div className="mt-trust-grid">
          <ol className="mt-steps">
            <li className="mt-step">
              <span className="mt-step-marker">Vstupní vyšetření</span>
              <p className="mt-step-text">
                Projdeme vaši zdravotní dokumentaci a poukaz od lékaře,
                vyšetříme držení těla, rozsahy pohybu a svalovou souhru.
                Odcházíte s jasným plánem a počtem terapií.
              </p>
            </li>
            <li className="mt-step">
              <span className="mt-step-marker">Terapie</span>
              <p className="mt-step-text">
                Série individuálních návštěv — obvykle jednou až dvakrát týdně.
                Kombinujeme ruční techniky, cvičení a podle potřeby fyzikální
                terapii. Průběžně měříme, co se mění.
              </p>
            </li>
            <li className="mt-step">
              <span className="mt-step-marker">Kontrola a předání</span>
              <p className="mt-step-text">
                Na závěr porovnáme stav se vstupním vyšetřením a předáte si
                domácí program, aby zlepšení vydrželo. Zprávu posíláme vašemu
                lékaři.
              </p>
            </li>
          </ol>

          <aside className="mt-trust-card">
            <h3 className="mt-trust-card-title">Proč Medea therapy</h3>
            <ul className="mt-trust-list">
              <li>
                <strong>Lékařská garance.</strong> Odborným garantem zařízení je
                MUDr. Jana Vlková — terapie navazuje na diagnózu, ne na odhad.
              </li>
              <li>
                <strong>Registrované zdravotnické zařízení.</strong> Zapsáno v
                obchodním rejstříku (KS Ústí nad Labem, C 21560), IČ 272 67 229.
              </li>
              <li>
                <strong>Na poukaz i bez něj.</strong> S poukazem FT hradí péči
                vaše pojišťovna; bez poukazu se domluvíme na termínu napřímo.
              </li>
              <li>
                <strong>Dostupné místo.</strong> Staré Pavlovice, klidná ulice
                Na Pískovně — parkování u domu, zastávka MHD pár minut pěšky.
              </li>
            </ul>
          </aside>
        </div>
      </section>
    </main>
  );
}
