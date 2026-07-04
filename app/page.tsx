import type { CSSProperties } from "react";

export default function Page() {
  return (
    <main className="bbs">
      <a className="bbs-skip" href="#obsah">
        Přejít na obsah
      </a>

      <header className="bbs-topbar">
        <div className="bbs-wrap bbs-topbar-inner">
          <a className="bbs-mark" href="#hero" aria-label="BBS Ochrana majetku, domů">
            <span className="bbs-mark-shield" aria-hidden="true">
              BBS
            </span>
            <span className="bbs-mark-text">
              <strong>Ochrana majetku</strong>
              <em>Být bez starostí · Plzeň</em>
            </span>
          </a>
          <nav className="bbs-nav" aria-label="Hlavní">
            <a href="#sluzby">Služby</a>
            <a href="#duvera">O nás</a>
            <a className="bbs-nav-call" href="tel:+420377010030">
              377 010 030
            </a>
          </nav>
        </div>
      </header>

      <section className="bbs-hero" id="hero">
        <div className="bbs-hero-media">
          <img
            src="/hero.webp"
            alt="Objekt střežený bezpečnostní službou BBS v Plzni"
            className="bbs-hero-img"
          />
          <div className="bbs-hero-scrim" aria-hidden="true" />
        </div>

        <div className="bbs-wrap bbs-hero-inner" id="obsah">
          <p className="bbs-eyebrow bbs-eyebrow-live">
            <span className="bbs-dot" aria-hidden="true" />
            Dispečink v provozu — nepřetržitě 24 / 7
          </p>

          <h1 className="bbs-hero-title">
            Někdo hlídá,
            <br />
            <span className="bbs-hero-title-em">i když spíte.</span>
          </h1>

          <p className="bbs-hero-lead">
            Fyzická ostraha, výjezdová služba a úklid objektů pro firmy
            v&nbsp;Plzni a&nbsp;okolí. Rodinná agentura, která obor dělá
            od&nbsp;roku 1995 — a&nbsp;pořád ji řídí přímo majitelé.
          </p>

          <div className="bbs-hero-actions">
            <a className="bbs-btn bbs-btn-primary" href="tel:+420377010030">
              Zavolat na dispečink
            </a>
            <a className="bbs-btn bbs-btn-ghost" href="#sluzby">
              Co pro vás hlídáme
            </a>
          </div>

          <dl className="bbs-hero-facts">
            <div>
              <dt>Nepřetržitá linka</dt>
              <dd>
                <a href="tel:800205206">800 205 206</a>
                <span>bezplatně</span>
              </dd>
            </div>
            <div>
              <dt>Sídlo</dt>
              <dd>
                Edvarda Beneše 70<span>301 00 Plzeň</span>
              </dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="bbs-services" id="sluzby" aria-labelledby="sluzby-h">
        <div className="bbs-wrap">
          <header className="bbs-sec-head">
            <p className="bbs-eyebrow">Co děláme</p>
            <h2 className="bbs-sec-title" id="sluzby-h">
              Dvě divize, jeden dispečink
            </h2>
            <p className="bbs-sec-sub">
              Ostrahu i&nbsp;úklid vedeme pod jednou střechou — a&nbsp;pod
              jednou telefonní linkou. U&nbsp;většiny klientů řešíme obojí,
              takže se o&nbsp;objekt staráme kompletně.
            </p>
          </header>

          <ul className="bbs-cards">
            <li className="bbs-card">
              <p className="bbs-card-tag">Divize ostrahy</p>
              <h3>Ostraha osob a&nbsp;majetku</h3>
              <p className="bbs-card-text">
                Fyzická ostraha objektů, recepční a&nbsp;vrátní služba,
                výjezd na&nbsp;PCO a&nbsp;bezpečnostní posouzení. Nejdřív
                spočítáme, co dává smysl — teprve pak stavíme řešení.
              </p>
              <ul className="bbs-card-list">
                <li>Střežení areálů a&nbsp;výrobních hal</li>
                <li>Recepce a&nbsp;kontrola vstupů</li>
                <li>Výjezdová jednotka na&nbsp;poplach</li>
              </ul>
            </li>

            <li className="bbs-card">
              <p className="bbs-card-tag">Divize úklidu</p>
              <h3>Úklidové služby</h3>
              <p className="bbs-card-text">
                Pravidelný i&nbsp;jednorázový úklid kanceláří, výrobních
                a&nbsp;obchodních ploch. Vlastní stroje a&nbsp;prostředky
                šetrné k&nbsp;prostředí, personál s&nbsp;kvalifikací.
              </p>
              <ul className="bbs-card-list">
                <li>Kanceláře a&nbsp;administrativa</li>
                <li>Průmyslové a&nbsp;strojní čištění</li>
                <li>Úklid podle norem EU</li>
              </ul>
            </li>

            <li className="bbs-card">
              <p className="bbs-card-tag">Pro zaměstnavatele</p>
              <h3>Náhradní plnění</h3>
              <p className="bbs-card-text">
                Odebíráním našich služeb plníte povinný podíl zaměstnávání
                osob se zdravotním postižením. Ušetříte na&nbsp;odvodu
                do&nbsp;státního rozpočtu a&nbsp;o&nbsp;papíry se postaráme.
              </p>
              <ul className="bbs-card-list">
                <li>Řešení povinného podílu OZP</li>
                <li>Daňová výhoda pro firmu</li>
                <li>Kompletní evidence za&nbsp;vás</li>
              </ul>
            </li>
          </ul>
        </div>
      </section>

      <section className="bbs-trust" id="duvera" aria-labelledby="duvera-h">
        <div className="bbs-wrap bbs-trust-grid">
          <div className="bbs-trust-copy">
            <p className="bbs-eyebrow">Rodinná firma od&nbsp;roku 1995</p>
            <h2 className="bbs-sec-title" id="duvera-h">
              Značka BBS znamená
              <br />
              <span className="bbs-decode">
                <span>Být</span> <span>bez</span> <span>starostí</span>
              </span>
            </h2>
            <p className="bbs-trust-text">
              Přes 150&nbsp;kmenových zaměstnanců, plzeňské zázemí
              a&nbsp;řízení přímo majiteli. Nejsme jen dodavatel na&nbsp;faktuře
              — s&nbsp;klienty zůstáváme roky a&nbsp;řešíme věci v&nbsp;dobrém
              i&nbsp;ve&nbsp;špatném počasí.
            </p>

            <ul className="bbs-badges">
              <li>Členem České komory služeb ochrany osob a&nbsp;majetku</li>
              <li>Členem Hospodářské komory ČR</li>
              <li>Provozovna na&nbsp;adrese Edvarda Beneše 70, Plzeň</li>
            </ul>
          </div>

          <figure className="bbs-trust-figure">
            <img
              src="/section-2.webp"
              alt="Tým BBS při výkonu bezpečnostní a úklidové služby"
              className="bbs-trust-img"
            />
          </figure>
        </div>

        <div className="bbs-wrap">
          <ol className="bbs-ledger" aria-label="Čísla, kterými se BBS měří">
            <li style={{ "--i": 0 } as CSSProperties}>
              <span className="bbs-ledger-num">30</span>
              <span className="bbs-ledger-lbl">let v&nbsp;oboru ostrahy a&nbsp;úklidu</span>
            </li>
            <li style={{ "--i": 1 } as CSSProperties}>
              <span className="bbs-ledger-num">
                10 <small>mld</small>
              </span>
              <span className="bbs-ledger-lbl">Kč hodnoty střeženého majetku</span>
            </li>
            <li style={{ "--i": 2 } as CSSProperties}>
              <span className="bbs-ledger-num">
                1 <small>mil</small>
              </span>
              <span className="bbs-ledger-lbl">m² ploch, které pravidelně uklízíme</span>
            </li>
            <li style={{ "--i": 3 } as CSSProperties}>
              <span className="bbs-ledger-num">150+</span>
              <span className="bbs-ledger-lbl">kmenových zaměstnanců v&nbsp;týmu</span>
            </li>
          </ol>
        </div>
      </section>
    </main>
  );
}
