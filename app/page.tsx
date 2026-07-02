export default function Page() {
  return (
    <main className="ils">
      {/* ===== HERO ===== */}
      <header className="hero">
        <div className="hero-inner">
          <div className="brand">
            <span className="brand-mark" aria-hidden="true">⇄</span>
            <span className="brand-name">Interlingua&nbsp;Servis</span>
            <span className="brand-sub">Ing. Josef Konečný · Praha 1</span>
          </div>

          <h1 className="hero-title">
            <span className="line line-src" lang="cs">
              <span className="line-tag">CS</span>
              Kvalita rozhoduje.
            </span>
            <span className="line line-bridge" aria-hidden="true">
              <span className="bridge-rule" />
              <span className="bridge-word">překládáme</span>
              <span className="bridge-rule" />
            </span>
            <span className="line line-dst" lang="en">
              <span className="line-tag">EN</span>
              Quality decides.
            </span>
          </h1>

          <p className="hero-lead">
            Překlady smluv, technické dokumentace a firemních textů —
            v&nbsp;Hybernské&nbsp;20, pár kroků od Masarykova nádraží, od&nbsp;roku&nbsp;1992.
            Bez agenturního mezičlánku: váš text čte a&nbsp;překládá konkrétní člověk,
            který za&nbsp;něj ručí jménem.
          </p>

          <div className="hero-actions">
            <a className="btn btn-solid" href="mailto:ils@ils.cz">
              Poslat text k nacenění
            </a>
            <a className="btn btn-line" href="tel:+420224213045">
              Zavolat 224 213 045
            </a>
          </div>

          <dl className="hero-facts">
            <div>
              <dt>Jazyky</dt>
              <dd>angličtina · němčina · ruština · francouzština a&nbsp;další na&nbsp;dotaz</dd>
            </div>
            <div>
              <dt>Nabídka ceny</dt>
              <dd>do&nbsp;24&nbsp;hodin od&nbsp;zaslání textu</dd>
            </div>
            <div>
              <dt>Kancelář</dt>
              <dd>Hybernská&nbsp;20, 110&nbsp;00 Praha&nbsp;1</dd>
            </div>
          </dl>
        </div>
      </header>

      {/* ===== SLUŽBY ===== */}
      <section className="services" aria-labelledby="sluzby-h">
        <div className="section-head">
          <p className="eyebrow">Co pro vás přeložíme</p>
          <h2 id="sluzby-h">
            Tři druhy textů, tři různé nároky.
            <br />Každý dostane, co potřebuje.
          </h2>
        </div>

        <div className="svc-grid">
          <article className="svc-card">
            <p className="svc-pair" aria-hidden="true">
              <span>smlouva</span>
              <span className="svc-arrow">⇄</span>
              <span>contract</span>
            </p>
            <h3>Právní a&nbsp;úřední dokumenty</h3>
            <p>
              Smlouvy, plné moci, výpisy z&nbsp;rejstříků, rozhodnutí. Terminologicky
              přesně a&nbsp;s&nbsp;důrazem na&nbsp;to, aby překlad obstál u&nbsp;protistrany
              i&nbsp;na&nbsp;úřadě. Ověřený (soudní) překlad zajistíme na&nbsp;vyžádání.
            </p>
            <p className="svc-note">Typicky do&nbsp;3&nbsp;pracovních dnů</p>
          </article>

          <article className="svc-card">
            <p className="svc-pair" aria-hidden="true">
              <span>návod</span>
              <span className="svc-arrow">⇄</span>
              <span>manual</span>
            </p>
            <h3>Technická dokumentace</h3>
            <p>
              Manuály, katalogové listy, bezpečnostní listy, výkresová dokumentace.
              Držíme jednotnou terminologii napříč celou zakázkou — u&nbsp;dlouhodobých
              klientů vedeme vlastní slovníček jejich oboru.
            </p>
            <p className="svc-note">Rozsáhlé projekty po&nbsp;etapách, dle&nbsp;dohody</p>
          </article>

          <article className="svc-card">
            <p className="svc-pair" aria-hidden="true">
              <span>výroční zpráva</span>
              <span className="svc-arrow">⇄</span>
              <span>annual report</span>
            </p>
            <h3>Firemní a&nbsp;obchodní texty</h3>
            <p>
              Výroční zprávy, prezentace, obchodní korespondence, webové texty.
              Nepřekládáme slovo od&nbsp;slova — text musí znít přirozeně tomu,
              kdo ho bude číst na&nbsp;druhé straně.
            </p>
            <p className="svc-note">Expresně i&nbsp;do&nbsp;druhého dne</p>
          </article>
        </div>

        <p className="svc-how">
          <strong>Jak to probíhá:</strong> pošlete text e-mailem na&nbsp;
          <a href="mailto:ils@ils.cz">ils@ils.cz</a> — do&nbsp;24&nbsp;hodin dostanete
          cenu a&nbsp;termín. Cena platí, žádné přirážky po&nbsp;odevzdání.
        </p>
      </section>

      {/* ===== DŮVĚRA / O NÁS ===== */}
      <section className="trust" aria-labelledby="duvera-h">
        <div className="trust-inner">
          <div className="trust-copy">
            <p className="eyebrow eyebrow-light">Proč Interlingua Servis</p>
            <h2 id="duvera-h">Překladatelská kancelář, ne&nbsp;anonymní agentura.</h2>
            <p>
              Interlingua Servis vede od&nbsp;počátku Ing.&nbsp;Josef Konečný. Za&nbsp;víc
              než tři desetiletí prošly kanceláří v&nbsp;Hybernské tisíce zakázek —
              od&nbsp;jednostránkových potvrzení po&nbsp;kompletní dokumentace
              k&nbsp;výrobním linkám. Většina klientů se vrací, protože ví,
              kdo jejich text překládá a&nbsp;komu zavolat, když hoří termín.
            </p>
            <p>
              Naše motto <em>„Kvalita rozhoduje“</em> není slogan na&nbsp;vizitku.
              Znamená, že každý překlad před odevzdáním projde druhým čtením
              a&nbsp;že raději řekneme „tohle do&nbsp;zítřka poctivě nestihneme“,
              než abychom odevzdali polotovar.
            </p>
          </div>

          <ul className="trust-facts">
            <li>
              <span className="tf-num">1992</span>
              <span className="tf-label">rok založení kanceláře v&nbsp;Praze</span>
            </li>
            <li>
              <span className="tf-num">2×</span>
              <span className="tf-label">každý text čtou dvě oči navíc — korektura je v&nbsp;ceně</span>
            </li>
            <li>
              <span className="tf-num">24 h</span>
              <span className="tf-label">nejpozději do&nbsp;té doby máte cenovou nabídku</span>
            </li>
            <li>
              <span className="tf-num">1&nbsp;jméno</span>
              <span className="tf-label">za&nbsp;zakázku ručí konkrétní překladatel, ne&nbsp;systém</span>
            </li>
          </ul>
        </div>

        <blockquote className="trust-quote">
          <p>
            „Smlouvu jsme potřebovali v&nbsp;angličtině do&nbsp;dvou dnů kvůli podpisu
            v&nbsp;zahraničí. Pan Konečný termín potvrdil telefonicky a&nbsp;dodržel
            ho na&nbsp;hodinu. Protistrana neměla k&nbsp;textu jedinou připomínku.“
          </p>
          <footer>— jednatel strojírenské firmy, Praha 9, klient od&nbsp;roku 2011</footer>
        </blockquote>
      </section>
    </main>
  );
}
