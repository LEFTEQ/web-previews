export default function Page() {
  return (
    <main className="sk-page">
      {/* ===== HERO ===== */}
      <header className="sk-hero">
        <div className="sk-hero-top">
          <div className="sk-wordmark" aria-label="Skalimar, klenotnictví">
            <span className="sk-wordmark-name">SKALIMAR</span>
            <span className="sk-wordmark-sub">klenotnictví · České Budějovice</span>
          </div>
          <nav className="sk-nav" aria-label="Hlavní navigace">
            <a href="#sluzby">Služby</a>
            <a href="#dilna">Naše dílna</a>
          </nav>
        </div>

        <div className="sk-hero-body">
          {/* Signature: brusný diagram kamene — fasety vykreslené linkami */}
          <svg
            className="sk-facet"
            viewBox="0 0 400 400"
            aria-hidden="true"
            focusable="false"
          >
            <g className="sk-facet-lines">
              {/* korunka */}
              <polygon points="200,40 320,140 280,240 120,240 80,140" />
              {/* pavilon */}
              <polygon points="120,240 280,240 200,370" />
              {/* fasety korunky */}
              <line x1="200" y1="40" x2="140" y2="140" />
              <line x1="200" y1="40" x2="200" y2="140" />
              <line x1="200" y1="40" x2="260" y2="140" />
              <line x1="80" y1="140" x2="140" y2="140" />
              <line x1="140" y1="140" x2="200" y2="140" />
              <line x1="200" y1="140" x2="260" y2="140" />
              <line x1="260" y1="140" x2="320" y2="140" />
              <line x1="140" y1="140" x2="120" y2="240" />
              <line x1="140" y1="140" x2="170" y2="240" />
              <line x1="200" y1="140" x2="170" y2="240" />
              <line x1="200" y1="140" x2="230" y2="240" />
              <line x1="260" y1="140" x2="230" y2="240" />
              <line x1="260" y1="140" x2="280" y2="240" />
              {/* fasety pavilonu */}
              <line x1="170" y1="240" x2="200" y2="370" />
              <line x1="230" y1="240" x2="200" y2="370" />
            </g>
            {/* jiskra kulety */}
            <circle className="sk-facet-culet" cx="200" cy="370" r="4" />
          </svg>

          <div className="sk-hero-text">
            <p className="sk-eyebrow">Zlatnická dílna a prodejna</p>
            <h1 className="sk-h1">
              <span className="sk-h1-line">Šperk, který</span>
              <span className="sk-h1-line sk-h1-em">vydrží generace.</span>
            </h1>
            <p className="sk-lead">
              Snubní a zásnubní prsteny, opravy i zakázková výroba ze zlata
              a stříbra. Vše vzniká u nás v Českých Budějovicích — kámen
              i fazetu si prohlédnete pod lupou dřív, než cokoli zaplatíte.
            </p>
            <div className="sk-hero-actions">
              <a className="sk-btn sk-btn-solid" href="#sluzby">
                Co pro vás vyrobíme
              </a>
              <a className="sk-btn sk-btn-line" href="#dilna">
                Jak pracujeme
              </a>
            </div>
          </div>
        </div>

        <div className="sk-hero-strip" aria-hidden="true">
          <span>Au 585 / 750</span>
          <span className="sk-strip-dot">◆</span>
          <span>Ag 925</span>
          <span className="sk-strip-dot">◆</span>
          <span>brilianty s certifikátem</span>
          <span className="sk-strip-dot">◆</span>
          <span>puncovní značení</span>
        </div>
      </header>

      {/* ===== SLUŽBY ===== */}
      <section className="sk-section" id="sluzby">
        <div className="sk-section-head">
          <p className="sk-eyebrow">Naše práce</p>
          <h2 className="sk-h2">Od skici po punc</h2>
          <p className="sk-section-lead">
            Každý šperk projde stejnou cestou: návrh, vosk nebo 3D model,
            odlití, fasování kamenů a leštění. Tady je to, s čím za námi
            lidé chodí nejčastěji.
          </p>
        </div>

        <div className="sk-cards">
          <article className="sk-card">
            <div className="sk-card-mark" aria-hidden="true">
              <svg viewBox="0 0 48 48" focusable="false">
                <circle cx="24" cy="28" r="13" fill="none" />
                <polygon points="24,6 30,12 24,18 18,12" fill="none" />
              </svg>
            </div>
            <h3>Snubní a zásnubní prsteny</h3>
            <p>
              Přijdete ve dvou, odejdete s návrhem. Profil, šířku i povrch
              si vyzkoušíte na vzornících přímo v prodejně — a vnitřní
              rytinu data či jmen máte v ceně.
            </p>
            <p className="sk-card-note">Výroba páru obvykle do 3 týdnů</p>
          </article>

          <article className="sk-card">
            <div className="sk-card-mark" aria-hidden="true">
              <svg viewBox="0 0 48 48" focusable="false">
                <path d="M10 38 L38 10" fill="none" />
                <path d="M8 30 C14 24 20 30 26 24" fill="none" />
                <circle cx="38" cy="10" r="5" fill="none" />
              </svg>
            </div>
            <h3>Zakázková výroba</h3>
            <p>
              Šperk podle vaší představy nebo z vašeho vlastního zlata —
              třeba z prstenů po babičce. Nakreslíme návrh, ukážeme voskový
              model a teprve pak lijeme kov.
            </p>
            <p className="sk-card-note">Nezávazná konzultace zdarma</p>
          </article>

          <article className="sk-card">
            <div className="sk-card-mark" aria-hidden="true">
              <svg viewBox="0 0 48 48" focusable="false">
                <path d="M14 40 L34 8" fill="none" />
                <path d="M10 34 L20 40" fill="none" />
                <path d="M30 6 L38 12" fill="none" />
              </svg>
            </div>
            <h3>Opravy a úpravy</h3>
            <p>
              Zvětšení prstenu, nový uzávěr řetízku, upevnění kamene nebo
              rhodiování. Menší opravy uděláme na počkání, u větších řekneme
              cenu předem.
            </p>
            <p className="sk-card-note">Odhad ceny hned na místě</p>
          </article>

          <article className="sk-card">
            <div className="sk-card-mark" aria-hidden="true">
              <svg viewBox="0 0 48 48" focusable="false">
                <circle cx="20" cy="20" r="11" fill="none" />
                <path d="M28 28 L40 40" fill="none" />
              </svg>
            </div>
            <h3>Výkup a přepracování zlata</h3>
            <p>
              Staré nebo poškozené šperky zvážíme před vámi, ryzost ověříme
              na místě. Hodnotu vyplatíme, nebo ji rovnou započteme do nového
              šperku.
            </p>
            <p className="sk-card-note">Vážení vždy před zákazníkem</p>
          </article>
        </div>
      </section>

      {/* ===== DÍLNA / DŮVĚRA ===== */}
      <section className="sk-section sk-section-dark" id="dilna">
        <div className="sk-dark-grid">
          <div className="sk-dark-intro">
            <p className="sk-eyebrow sk-eyebrow-light">Naše dílna</p>
            <h2 className="sk-h2">
              U stolu, ne u pásu
            </h2>
            <p className="sk-dark-lead">
              Skalimar je malá dílna v centru Českých Budějovic. Šperky
              nevozíme z velkoskladu — sedíme u zlatnického verpánku pár
              metrů od pultu. Když se zeptáte, kdo váš prsten dělal,
              ukážeme na konkrétní ruce.
            </p>
            <ul className="sk-proof">
              <li>
                <strong>Punc na každém kusu.</strong> Zlato 585 a 750,
                stříbro 925 — vždy s puncovní značkou a dokladem.
              </li>
              <li>
                <strong>Kámen uvidíte pod lupou.</strong> U briliantů
                dostanete certifikát a čistotu si sami zkontrolujete.
              </li>
              <li>
                <strong>Cena předem, písemně.</strong> U zakázek i oprav
                víte částku dřív, než se pustíme do práce.
              </li>
            </ul>
          </div>

          <div className="sk-quotes">
            <figure className="sk-quote">
              <blockquote>
                „Nechali jsme si přetavit maminčin řetízek na dva přívěsky
                pro dcery. Pán nám ukázal voskové modely a poradil, jak
                kov doplnit. Výsledek nosíme denně.“
              </blockquote>
              <figcaption>— Jana K., České Budějovice</figcaption>
            </figure>
            <figure className="sk-quote">
              <blockquote>
                „Snubní prsteny na míru včetně rytiny za tři týdny.
                Vyzkoušeli jsme asi deset profilů, než jsme se trefili —
                a nikdo na nás netlačil.“
              </blockquote>
              <figcaption>— Martin a Lucie, Hluboká nad Vltavou</figcaption>
            </figure>
            <figure className="sk-quote">
              <blockquote>
                „Prasklý prsten po babičce mi spravili na počkání a rovnou
                ho i vyleštili. Cenu řekli dopředu a seděla na korunu.“
              </blockquote>
              <figcaption>— Petr H., Rudolfov</figcaption>
            </figure>
          </div>
        </div>
      </section>
    </main>
  );
}
