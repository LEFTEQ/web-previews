export default function Page() {
  return (
    <main className="dh-main">
      {/* ================= HERO ================= */}
      <header className="dh-hero" aria-labelledby="hero-heading">
        <div className="dh-shell">
          <div className="dh-topbar">
            <span className="dh-wordmark" aria-label="Bašová, dentální hygiena">
              Bašová<em className="dh-wordmark-dot" aria-hidden="true">·</em>
              <span className="dh-wordmark-sub">dentální hygiena</span>
            </span>
            <a className="dh-topcall" href="tel:+420775786986">
              <svg aria-hidden="true" width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3.2 1.6c.6-.6 1.6-.5 2.1.2l1.2 1.7c.4.6.3 1.4-.2 1.9l-.7.7c.5 1 1.9 2.4 2.9 2.9l.7-.7c.5-.5 1.3-.6 1.9-.2l1.7 1.2c.7.5.8 1.5.2 2.1l-.9.9c-.5.5-1.3.7-2 .5C7 11.9 4.1 9 3.2 5.9c-.2-.7 0-1.5.5-2l-.5-2.3Z" fill="currentColor"/>
              </svg>
              775 786 986
            </a>
          </div>

          <div className="dh-hero-grid">
            <div className="dh-hero-copy">
              <p className="dh-eyebrow">
                <span className="dh-eyebrow-tick" aria-hidden="true" />
                Ordinace Břetislavova 1057, Hradec Králové · od roku 1993
              </p>
              <h1 id="hero-heading" className="dh-h1">
                Čisté zuby<br />
                nejsou náhoda.<br />
                <span className="dh-h1-accent">Jsou hygiena.</span>
              </h1>
              <p className="dh-lead">
                Hodina u dentální hygienistky jednou za půl roku ušetří roky
                vrtání. Odstraníme zubní kámen, pískováním vrátíme zubům
                přirozenou barvu a naučíme vás čistit tak, aby to vydrželo.
              </p>
              <div className="dh-hero-actions">
                <a className="dh-btn dh-btn-primary" href="tel:+420495514188">
                  Objednat se: 495 514 188
                </a>
                <a className="dh-btn dh-btn-ghost" href="#pece">
                  Co vás u nás čeká
                </a>
              </div>
            </div>

            {/* Signature: „interdentální“ diagram — mezizubní prostory jako grafický motiv */}
            <div className="dh-hero-visual" aria-hidden="true">
              <div className="dh-gumline">
                <div className="dh-tooth dh-tooth-1"><span className="dh-plaque" /></div>
                <div className="dh-gap dh-gap-1"><span className="dh-floss" /></div>
                <div className="dh-tooth dh-tooth-2"><span className="dh-plaque dh-plaque-b" /></div>
                <div className="dh-gap dh-gap-2"><span className="dh-floss" /></div>
                <div className="dh-tooth dh-tooth-3" />
                <div className="dh-gap dh-gap-3"><span className="dh-floss" /></div>
                <div className="dh-tooth dh-tooth-4" />
              </div>
              <p className="dh-gumline-caption">
                60&nbsp;% povrchu zubu je v&nbsp;mezizubí — kartáček tam nedosáhne. My ano.
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* ================= SEKCE: PÉČE ================= */}
      <section className="dh-section dh-section-care" id="pece" aria-labelledby="pece-heading">
        <div className="dh-shell">
          <div className="dh-section-head">
            <h2 id="pece-heading" className="dh-h2">Jedna návštěva, celý postup</h2>
            <p className="dh-section-lead">
              Dentální hygiena u nás není „rychlé čištění“. Je to ošetření
              s&nbsp;pevným pořadím kroků — každý má svůj důvod a na každý
              dostanete vysvětlení.
            </p>
          </div>

          <ol className="dh-steps">
            <li className="dh-step">
              <span className="dh-step-no" aria-hidden="true">1</span>
              <h3 className="dh-h3">Vyšetření dásní a sliznic</h3>
              <p>
                Než se čehokoli dotkneme, zmapujeme stav dásní, krvácivost a
                mezizubní prostory. Krvácející dáseň není normální — je to
                první signál zánětu, který umíme zastavit včas.
              </p>
            </li>
            <li className="dh-step">
              <span className="dh-step-no" aria-hidden="true">2</span>
              <h3 className="dh-h3">Odstranění zubního kamene</h3>
              <p>
                Ultrazvukem a ručními nástroji odstraníme kámen nad i pod
                dásní — tam, kde ho sami nikdy nedostanete. Citlivá místa
                umíme ošetřit šetrně, bez zbytečné bolesti.
              </p>
            </li>
            <li className="dh-step">
              <span className="dh-step-no" aria-hidden="true">3</span>
              <h3 className="dh-h3">Pískování — pryč s kávou a nikotinem</h3>
              <p>
                Airflow pískováním odstraníme pigmentace od kávy, čaje,
                červeného vína a kouření. Zuby získají zpět svou přirozenou
                barvu — bez bělicích chemikálií.
              </p>
            </li>
            <li className="dh-step">
              <span className="dh-step-no" aria-hidden="true">4</span>
              <h3 className="dh-h3">Nácvik čištění na vašich zubech</h3>
              <p>
                Ukážeme vám techniku přímo ve vašich ústech — správný kartáček,
                mezizubní kartáčky ve správných velikostech, nit. Odcházíte
                s&nbsp;plánem, ne s&nbsp;letákem.
              </p>
            </li>
          </ol>

          <div className="dh-extras" aria-label="Návazná péče v ordinaci">
            <p className="dh-extras-label">A když je potřeba víc — vše pod jednou střechou:</p>
            <ul className="dh-extras-list">
              <li>šetrné ošetření dásní laserem KaVo KEY&nbsp;3</li>
              <li>léčba ozónem u počínajících kazů</li>
              <li>bělení zubů po dokončené hygieně</li>
              <li>keramická korunka systémem CEREC na počkání</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ================= SEKCE: DŮVĚRA ================= */}
      <section className="dh-section dh-section-trust" aria-labelledby="duvera-heading">
        <div className="dh-shell">
          <div className="dh-trust-grid">
            <div className="dh-trust-copy">
              <h2 id="duvera-heading" className="dh-h2">
                V Hradci ošetřujeme<br />od roku 1993
              </h2>
              <p>
                Soukromá ordinace Zubní lékařství Bašová stojí na jednoduchém
                přesvědčení: nejlepší zákrok je ten, který díky prevenci nikdy
                nemusí proběhnout. Proto je dentální hygiena srdcem naší praxe
                — a hygienistka plnohodnotnou členkou týmu, ne doplňkem.
              </p>
              <p>
                Víme, že řada pacientů návštěvu odkládá ze strachu. Právě pro
                ně máme šetrné metody — laser a ozón místo vrtačky tam, kde to
                jde — a hlavně čas vše v&nbsp;klidu vysvětlit. Ke každému
                pacientovi přistupujeme individuálně: jiná ústa, jiný plán.
              </p>
              <dl className="dh-facts">
                <div className="dh-fact">
                  <dt>Ordinujeme</dt>
                  <dd>Břetislavova 1057, Hradec Králové — 5&nbsp;minut pěšky od Ulrichova náměstí</dd>
                </div>
                <div className="dh-fact">
                  <dt>Objednání</dt>
                  <dd>telefonicky na <a href="tel:+420495514188">495&nbsp;514&nbsp;188</a> nebo <a href="tel:+420775786986">775&nbsp;786&nbsp;986</a></dd>
                </div>
                <div className="dh-fact">
                  <dt>Doporučený interval</dt>
                  <dd>hygiena každých 6 měsíců, u zánětu dásní po 3 měsících</dd>
                </div>
              </dl>
            </div>

            <aside className="dh-quotes" aria-label="Zkušenosti pacientů">
              <figure className="dh-quote">
                <blockquote>
                  „Dvacet let jsem se zubaře bál. Tady mi nejdřív všechno
                  ukázali a vysvětlili — a pak to ani nebolelo. Na hygienu
                  chodím pravidelně a poprvé v&nbsp;životě rád.“
                </blockquote>
                <figcaption>pan Martin, pacient od 2019</figcaption>
              </figure>
              <figure className="dh-quote">
                <blockquote>
                  „Po pískování jsem se poprvé po letech usmála na fotce.
                  Skvrny od kávy zmizely za jednu návštěvu.“
                </blockquote>
                <figcaption>paní Ivana, Hradec Králové</figcaption>
              </figure>
              <figure className="dh-quote">
                <blockquote>
                  „Dceři je jedenáct a chodí sem bez odmlouvání. Hygienistka
                  ji naučila čistit hrou — a ono to drží.“
                </blockquote>
                <figcaption>paní Kateřina, maminka pacientky</figcaption>
              </figure>
            </aside>
          </div>
        </div>
      </section>

      {/* Mobilní rychlé volání */}
      <a className="dh-mobilecall" href="tel:+420495514188" aria-label="Zavolat do ordinace: 495 514 188">
        <svg aria-hidden="true" width="20" height="20" viewBox="0 0 16 16" fill="none">
          <path d="M3.2 1.6c.6-.6 1.6-.5 2.1.2l1.2 1.7c.4.6.3 1.4-.2 1.9l-.7.7c.5 1 1.9 2.4 2.9 2.9l.7-.7c.5-.5 1.3-.6 1.9-.2l1.7 1.2c.7.5.8 1.5.2 2.1l-.9.9c-.5.5-1.3.7-2 .5C7 11.9 4.1 9 3.2 5.9c-.2-.7 0-1.5.5-2l-.5-2.3Z" fill="currentColor"/>
        </svg>
        Zavolat
      </a>
    </main>
  );
}
