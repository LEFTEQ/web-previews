export default function Page() {
  return (
    <main>
      <section className="hero">
        <div className="hero-media">
          <img
            src="/hero.webp"
            alt="Uspořádaná účetní agenda ARNET JB s.r.o. — šanony, výkazy a kalkulačka na pracovním stole v Plzni"
            className="hero-img"
          />
          <div className="hero-scrim" aria-hidden="true"></div>
        </div>

        <div className="hero-content">
          <div className="wordmark">
            <span className="wordmark-main">ARNET<span className="wordmark-dot">·</span>JB</span>
            <span className="wordmark-sub">daňoví poradci &amp; účetní — Plzeň</span>
          </div>

          <p className="hero-eyebrow">
            <span className="eyebrow-tag">Osvědčení KDP ČR</span>
            <span className="eyebrow-sep">/</span>
            <span className="eyebrow-tag">IČ 25238264</span>
            <span className="eyebrow-sep">/</span>
            <span className="eyebrow-tag">Prokopova 27, Plzeň</span>
          </p>

          <h1 className="hero-title">
            Účty sedí.<br />
            Termíny <em>taky</em>.
          </h1>

          <p className="hero-lede">
            Podvojné účetnictví, daňová evidence, mzdy a daňová přiznání pro
            plzeňské firmy a živnostníky — vedeme je tak, aby vám nikdy
            nepřišel dopis od finančního úřadu jako překvapení.
          </p>

          <div className="hero-actions">
            <a href="#sluzby" className="btn-ghost-light">
              Co všechno vedeme →
            </a>
          </div>

          <p className="hero-fix">
            Nové zabezpečené HTTPS stránky · aktualizováno 2025
          </p>
        </div>
      </section>

      <section className="section services" id="sluzby">
        <div className="section-grid">
          <div className="section-media">
            <img
              src="/section-1.webp"
              alt="Detail účetních výkazů a razítka ARNET JB s.r.o. připravených k odevzdání"
              className="section-img"
            />
          </div>

          <div className="section-copy">
            <p className="eyebrow">Agenda / co u nás máte na starosti vy méně</p>
            <h2 className="section-title">Vaše agendy, naše šanony</h2>
            <p className="section-intro">
              Nevedeme &bdquo;účetnictví obecně&ldquo; — každou agendu má na
              starosti někdo, kdo v ní zná i drobné výjimky. Podle toho jsme
              si je i rozdělili.
            </p>

            <dl className="ledger">
              <div className="ledger-row">
                <dt><span className="ledger-no">01</span>Vedení účetnictví</dt>
                <dd>Podvojné účetnictví i daňová evidence, přechod mezi nimi, účetní závěrky s výkazy, evidence majetku.</dd>
              </div>
              <div className="ledger-row">
                <dt><span className="ledger-no">02</span>Daně a přiznání</dt>
                <dd>Daň z příjmů FO i PO, DPH včetně kontrolního a souhrnného hlášení, vrácení DPH z EU, silniční daň, daň z nemovitosti.</dd>
              </div>
              <div className="ledger-row">
                <dt><span className="ledger-no">03</span>Mzdy a personalistika</dt>
                <dd>Kompletní mzdová agenda, styk s úřady a pojišťovnami, pracovní smlouvy, vnitropodnikové směrnice.</dd>
              </div>
              <div className="ledger-row">
                <dt><span className="ledger-no">04</span>Poradenství</dt>
                <dd>Daňová optimalizace, jednorázové konzultace, ekonomické a účetní poradenství na míru.</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      <section className="section trust">
        <div className="section-grid section-grid--reverse">
          <div className="section-copy">
            <p className="eyebrow">Důvěra / proč právě my</p>
            <h2 className="section-title">Poradenství s razítkem Komory</h2>
            <p className="section-intro">
              ARNET JB s.r.o. má osvědčení Komory daňových poradců ČR — nejsme
              jen &bdquo;paní účetní&ldquo;, ale oprávněný daňový poradce s plnou
              odpovědností a mlčenlivostí danou zákonem. V Plzni na Prokopově
              ulici sedíme od založení firmy a řešíme pro klienty i posunutí
              termínu podání přiznání a platby daně, když je to potřeba.
            </p>

            <ul className="facts">
              <li>
                <span className="facts-label">Kde nás najdete</span>
                <span className="facts-value">Prokopova 206/27, 301 00 Plzeň</span>
              </li>
              <li>
                <span className="facts-label">Provozní doba</span>
                <span className="facts-value">Po–Pá 8:00–16:00 · So–Ne zavřeno</span>
              </li>
              <li>
                <span className="facts-label">Telefon</span>
                <span className="facts-value">+420 603 834 608</span>
              </li>
              <li>
                <span className="facts-label">E-mail</span>
                <span className="facts-value">arnetjb@arnetjb.cz</span>
              </li>
            </ul>
          </div>

          <div className="section-media">
            <img
              src="/section-2.webp"
              alt="Kancelář ARNET JB s.r.o. v Plzni, kde probíhají konzultace s klienty"
              className="section-img"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
