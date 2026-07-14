export default function Page() {
  return (
    <>
      <a className="skip-link" href="#obsah">Přeskočit na obsah</a>

      <header className="hero">
        <div className="hero-topline">
          <div className="wordmark" aria-label="Centrum léčebné rehabilitace Liberec">
            <span className="wordmark-mark">CLR</span>
            <span className="wordmark-sub">Centrum léčebné rehabilitace&nbsp;·&nbsp;Liberec</span>
          </div>
          <div className="hero-tel">
            <span className="hero-tel-label">Objednání</span>
            <a href="tel:+420721127707">+420 721 127 707</a>
          </div>
        </div>

        <div className="hero-media">
          <img
            src="/hero.webp"
            alt="Fyzioterapeutka vede pacienta při cvičení v Centru léčebné rehabilitace Liberec"
            className="hero-img"
          />
          <div className="hero-frame" aria-hidden="true">
            <span className="corner corner-tl" />
            <span className="corner corner-tr" />
            <span className="corner corner-bl" />
            <span className="corner corner-br" />
          </div>
        </div>

        <div className="hero-body">
          <p className="hero-eyebrow">Vratislavice nad Nisou · Zdravotní středisko, Tanvaldská 224</p>
          <h1 className="hero-title">
            Tělo se hojí<br />pohybem, <em>ne&nbsp;čekáním</em>.
          </h1>
          <p className="hero-lead">
            Fyzioterapie, vodoléčba a fyzikální terapie pod vedením zkušených
            fyzioterapeutek a lékařů. Ošetření na doporučení i domluvou —
            bez fronty v čekárně na půl dne.
          </p>
          <div className="hero-actions">
            <a className="btn-primary" href="tel:+420721127707">Zavolat na recepci</a>
            <span className="hero-hours">Po–Pá 7:00–15:30</span>
          </div>
        </div>

        <ul className="hero-ticker" aria-label="Přehled poskytovaných výkonů">
          <li>Ambulance rehabilitace</li>
          <li>Vodoléčba</li>
          <li>Masáže</li>
          <li>Kineziotaping</li>
          <li>LTV — léčebná tělesná výchova</li>
          <li>Infuzní léčba</li>
          <li>Fyzikální léčba</li>
        </ul>
      </header>

      <main id="obsah">
        <section className="section services" aria-labelledby="sluzby-h">
          <div className="section-head">
            <span className="section-eyebrow">Nabídka péče</span>
            <h2 id="sluzby-h" className="section-title">Co u nás ošetříme</h2>
            <p className="section-note">
              Rozsah výkonů odpovídá doporučení praktického nebo odborného lékaře.
              Co je hrazené z veřejného zdravotního pojištění a co je nadstandard,
              vám přesně řekneme při objednání na telefonu níže.
            </p>
          </div>

          <div className="services-grid">
            <figure className="services-figure">
              <img
                src="/section-1.webp"
                alt="Vodoléčebná procedura pro horní a dolní končetiny v centru rehabilitace"
              />
              <figcaption>Vodoléčba — vířivé koupele horních i dolních končetin</figcaption>
            </figure>

            <ol className="services-list">
              <li>
                <span className="svc-index">01</span>
                <div>
                  <h3>LTV — léčebná tělesná výchova</h3>
                  <p>Individuální cvičení pod vedením fyzioterapeutky, cílené na konkrétní diagnózu a fázi hojení.</p>
                </div>
              </li>
              <li>
                <span className="svc-index">02</span>
                <div>
                  <h3>Fyzikální terapie</h3>
                  <p>Ultrazvuk, magnetoterapie, VAS, galvanické a diadynamické proudy — dle ordinace lékaře.</p>
                </div>
              </li>
              <li>
                <span className="svc-index">03</span>
                <div>
                  <h3>Vodoléčba</h3>
                  <p>Vířivé koupele pro horní i dolní končetiny, podpora prokrvení a uvolnění po úrazech i operacích.</p>
                </div>
              </li>
              <li>
                <span className="svc-index">04</span>
                <div>
                  <h3>Masáže</h3>
                  <p>Klasické i cílené masáže dle aktuálního ceníku — na doporučení i jako nadstandardní péče.</p>
                </div>
              </li>
              <li>
                <span className="svc-index">05</span>
                <div>
                  <h3>Kineziotaping</h3>
                  <p>Podpora kloubů a svalů pružnou páskou — vhodné při sportovní zátěži i v rekonvalescenci.</p>
                </div>
              </li>
              <li>
                <span className="svc-index">06</span>
                <div>
                  <h3>Infuzní léčba</h3>
                  <p>Podání infuzí v rámci komplexní léčebné péče, dle indikace ošetřujícího lékaře.</p>
                </div>
              </li>
            </ol>
          </div>
        </section>

        <section className="section trust" aria-labelledby="trust-h">
          <div className="trust-media">
            <img
              src="/section-2.webp"
              alt="Interiér pracoviště Centra léčebné rehabilitace ve Zdravotním středisku Vratislavice"
            />
          </div>

          <div className="trust-content">
            <span className="section-eyebrow">Kde nás najdete</span>
            <h2 id="trust-h" className="section-title">Pracoviště ve Vratislavicích</h2>
            <p className="trust-lead">
              Ordinujeme ve Zdravotním středisku Vratislavice, v 1. patře budovy.
              Provoz je určený převážně pacientům z oblasti Liberec 30 — Vratislavice,
              objednaní pacienti mají přednost.
            </p>

            <dl className="trust-facts">
              <div className="trust-fact">
                <dt>Adresa</dt>
                <dd>Tanvaldská 224, Liberec 30 – Vratislavice nad Nisou</dd>
              </div>
              <div className="trust-fact">
                <dt>Ambulance rehabilitace</dt>
                <dd>MUDr. Vojtěch Kotek st., MUDr. Pavel Prášil</dd>
              </div>
              <div className="trust-fact">
                <dt>Telefon</dt>
                <dd><a href="tel:+420485341930">+420 485 341 930</a></dd>
              </div>
              <div className="trust-fact">
                <dt>Objednání fyzioterapie</dt>
                <dd><a href="tel:+420721127707">+420 721 127 707</a></dd>
              </div>
            </dl>

            <p className="trust-foot">
              Nevíte, zda je vaše ošetření hrazené pojišťovnou, nebo jde
              o nadstandardní péči? Řekneme vám to rovnou při telefonickém objednání.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
