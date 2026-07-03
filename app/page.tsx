export default function Page() {
  return (
    <main className="nt-page">
      {/* ===================== HERO ===================== */}
      <header className="nt-hero">
        <div className="nt-hero-inner">
          <div className="nt-brand">
            <span className="nt-brand-mark" aria-hidden="true">
              {/* letokruhy — wordmark */}
              <svg viewBox="0 0 48 48" width="40" height="40" role="img" aria-label="">
                <circle cx="24" cy="24" r="21" fill="none" stroke="currentColor" strokeWidth="1.5" />
                <circle cx="22" cy="25" r="15" fill="none" stroke="currentColor" strokeWidth="1.2" />
                <circle cx="25" cy="23" r="9.5" fill="none" stroke="currentColor" strokeWidth="1.2" />
                <circle cx="23.5" cy="24.5" r="4.5" fill="none" stroke="currentColor" strokeWidth="1.2" />
                <circle cx="24" cy="24" r="1.4" fill="currentColor" />
              </svg>
            </span>
            <span className="nt-brand-text">
              <strong>NUTIL</strong>
              <em>arboristika · Planá</em>
            </span>
          </div>

          <p className="nt-eyebrow">Ing. Pavel Nutil — arborista a soudní znalec</p>

          <h1 className="nt-h1">
            <span className="nt-h1-line nt-h1-line--1">Strom se pozná</span>
            <span className="nt-h1-line nt-h1-line--2">po&nbsp;letech.</span>
            <span className="nt-h1-line nt-h1-line--3">Arborista taky.</span>
          </h1>

          <p className="nt-hero-lead">
            Rizikové kácení, řez vzrostlých stromů a znalecké posudky dřevin
            na Tachovsku a v okolí Mariánských Lázní. Stromolezecky, bez těžké
            techniky ve&nbsp;vaší zahradě.
          </p>

          <div className="nt-hero-cta">
            <a className="nt-btn nt-btn--solid" href="tel:+420374000000">
              Zavolat arboristovi
            </a>
            <a className="nt-btn nt-btn--ghost" href="#sluzby">
              Co pro vás udělám
            </a>
          </div>

          <dl className="nt-hero-facts">
            <div>
              <dt>Působím</dt>
              <dd>Planá u&nbsp;Mar. Lázní a okruh 50&nbsp;km</dd>
            </div>
            <div>
              <dt>Kvalifikace</dt>
              <dd>Znalec pro oceňování pozemků a&nbsp;porostů</dd>
            </div>
            <div>
              <dt>Termín obhlídky</dt>
              <dd>Obvykle do&nbsp;týdne, zdarma</dd>
            </div>
          </dl>
        </div>

        {/* Signature: řez kmenem — letokruhy přes celý pravý okraj hero */}
        <div className="nt-rings" aria-hidden="true">
          <svg viewBox="0 0 600 600" preserveAspectRatio="xMidYMid slice">
            <g fill="none" stroke="currentColor">
              <circle cx="300" cy="300" r="288" strokeWidth="2" className="nt-ring" style={{ animationDelay: "0.05s" }} />
              <circle cx="292" cy="306" r="252" strokeWidth="1.5" className="nt-ring" style={{ animationDelay: "0.15s" }} />
              <circle cx="305" cy="295" r="218" strokeWidth="2.5" className="nt-ring" style={{ animationDelay: "0.25s" }} />
              <circle cx="296" cy="302" r="186" strokeWidth="1.2" className="nt-ring" style={{ animationDelay: "0.35s" }} />
              <circle cx="303" cy="297" r="156" strokeWidth="2" className="nt-ring" style={{ animationDelay: "0.45s" }} />
              <circle cx="298" cy="301" r="128" strokeWidth="1.5" className="nt-ring" style={{ animationDelay: "0.55s" }} />
              <circle cx="302" cy="298" r="102" strokeWidth="2.5" className="nt-ring" style={{ animationDelay: "0.65s" }} />
              <circle cx="299" cy="300" r="78" strokeWidth="1.2" className="nt-ring" style={{ animationDelay: "0.75s" }} />
              <circle cx="301" cy="299" r="56" strokeWidth="2" className="nt-ring" style={{ animationDelay: "0.85s" }} />
              <circle cx="300" cy="300" r="36" strokeWidth="1.5" className="nt-ring" style={{ animationDelay: "0.95s" }} />
              <circle cx="300" cy="300" r="18" strokeWidth="2.5" className="nt-ring" style={{ animationDelay: "1.05s" }} />
              <circle cx="300" cy="300" r="4" fill="currentColor" stroke="none" />
            </g>
          </svg>
        </div>
      </header>

      {/* ===================== SLUŽBY ===================== */}
      <section className="nt-section nt-services" id="sluzby" aria-labelledby="sluzby-h">
        <div className="nt-section-head">
          <p className="nt-eyebrow nt-eyebrow--dark">Služby</p>
          <h2 className="nt-h2" id="sluzby-h">
            Od koruny stromu po&nbsp;znalecký posudek
          </h2>
          <p className="nt-section-lead">
            Jedna firma, jeden člověk, který za práci ručí. Každou zakázku
            začínám obhlídkou na&nbsp;místě — teprve pak řeknu cenu a&nbsp;postup.
          </p>
        </div>

        <ul className="nt-service-grid">
          <li className="nt-card">
            <span className="nt-card-tag">v koruně</span>
            <h3>Rizikové kácení stromů</h3>
            <p>
              Stromy u domů, nad dráty, ve svahu nebo na hřbitově. Kácím
              postupně po částech, se spouštěním dřeva na laně — bez škody
              na&nbsp;střeše i&nbsp;záhonu.
            </p>
          </li>
          <li className="nt-card">
            <span className="nt-card-tag">v koruně</span>
            <h3>Řez a údržba vzrostlých stromů</h3>
            <p>
              Zdravotní a bezpečnostní řez, odlehčení koruny, vazby proti
              rozlomení. Cílem je strom, který vám vydrží dalších padesát
              let, ne&nbsp;pahýl.
            </p>
          </li>
          <li className="nt-card">
            <span className="nt-card-tag">u země</span>
            <h3>Výsadby dřevin a péče o krajinu</h3>
            <p>
              Návrh a výsadba stromů i alejí včetně kotvení a povýsadbové
              péče. Údržba zeleně pro obce, spolky i&nbsp;soukromé zahrady.
            </p>
          </li>
          <li className="nt-card">
            <span className="nt-card-tag">v lese</span>
            <h3>Odborný lesní hospodář</h3>
            <p>
              Výkon funkce OLH pro vlastníky lesa, pěstební práce, zalesnění
              po&nbsp;těžbě. Poradím s&nbsp;dotacemi i&nbsp;povinnostmi vůči úřadům.
            </p>
          </li>
          <li className="nt-card">
            <span className="nt-card-tag">na papíře</span>
            <h3>Znalecké posudky a oceňování</h3>
            <p>
              Oceňování pozemků a trvalých porostů pro prodej, dědictví,
              vypořádání nebo soud. Posudek s&nbsp;kulatým razítkem, který
              obstojí u&nbsp;úřadu.
            </p>
          </li>
          <li className="nt-card">
            <span className="nt-card-tag">ve výšce</span>
            <h3>Výškové práce</h3>
            <p>
              Lanovou technikou zvládnu i práce mimo stromy — čištění okapů,
              shazování sněhu, drobné opravy tam, kam se plošina nedostane.
            </p>
          </li>
        </ul>
      </section>

      {/* ===================== DŮVĚRA / O MNĚ ===================== */}
      <section className="nt-section nt-trust" aria-labelledby="duvera-h">
        <div className="nt-trust-grid">
          <div className="nt-trust-text">
            <p className="nt-eyebrow">Kdo vám poleze do koruny</p>
            <h2 className="nt-h2" id="duvera-h">
              Inženýr s&nbsp;pilou a&nbsp;razítkem
            </h2>
            <p>
              Jmenuji se Pavel Nutil a stromům se věnuji celý profesní život —
              nejdřív v lesnictví, dnes hlavně stromolezecky v korunách.
              Sídlím v Plané u&nbsp;Mariánských Lázní a znám zdejší stromy,
              půdu i&nbsp;počasí, které je láme.
            </p>
            <p>
              Ke stromu nepřijíždím s jeřábem, ale s lanem a úvazkem. Díky
              tomu se dostanu i tam, kde technika končí — do úzkých dvorů,
              na hřbitovy, k&nbsp;chatám u&nbsp;lesa. A&nbsp;protože jsem zároveň soudní
              znalec, umím vám říct nejen <em>jak</em> strom ošetřit, ale
              i&nbsp;<em>co je jeho dřevo a&nbsp;pozemek pod ním úředně hoden</em>.
            </p>
            <ul className="nt-proof">
              <li>
                <strong>Znalecké oprávnění</strong>
                <span>oceňování pozemků a trvalých porostů</span>
              </li>
              <li>
                <strong>Pojištění odpovědnosti</strong>
                <span>kryje škody při kácení i řezu</span>
              </li>
              <li>
                <strong>Odvoz a úklid</strong>
                <span>dřevo nařežu na metry, větve štěpkuji</span>
              </li>
            </ul>
          </div>

          <div className="nt-refs">
            <h3 className="nt-refs-title">Z posledních zakázek</h3>
            <figure className="nt-ref">
              <blockquote>
                „Suchý smrk tři metry od chalupy, pod ním skleník. Pan Nutil
                ho rozebral po kusech za dopoledne a skleník má všechna skla.“
              </blockquote>
              <figcaption>rodina Hejlova, Chodová Planá</figcaption>
            </figure>
            <figure className="nt-ref">
              <blockquote>
                „Posudek na porosty k dědickému řízení jsme měli do čtrnácti
                dnů, notář ho vzal bez jediné připomínky.“
              </blockquote>
              <figcaption>p. Vondráček, Tachov</figcaption>
            </figure>
            <figure className="nt-ref">
              <blockquote>
                „Ošetřil nám lípy u kostela — citlivě, žádné zmrzačené koruny.
                Po dvou letech jsou stromy viditelně v lepší kondici.“
              </blockquote>
              <figcaption>obec u Plané, správa zeleně</figcaption>
            </figure>
            <p className="nt-refs-note">
              Reference rád doplním kontaktem na zákazníka — stačí říct.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
