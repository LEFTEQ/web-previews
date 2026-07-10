import type { CSSProperties } from "react";

export default function Page() {
  return (
    <main className="m">
      {/* ===== HERO ===== */}
      <header className="top">
        <a className="wordmark" href="#uvod" aria-label="Auto Matulka — úvod">
          <span className="wm-auto">AUTO</span>
          <span className="wm-mat">MATULKA</span>
        </a>
        <nav className="nav" aria-label="Hlavní navigace">
          <a href="#nabidka">Prodej vozů</a>
          <a href="#servis">Servis</a>
          <a href="#duvera">O nás</a>
          <a className="nav-call" href="tel:+420377000000">Zavolat</a>
        </nav>
      </header>

      <section className="hero" id="uvod">
        <div className="hero-plate">
          <span className="plate-cz">CZ</span>
          <span className="plate-num">PLZEŇ · KIA &amp; DONGFENG</span>
        </div>

        <div className="hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Autorizovaný prodej a servis · Plzeň</p>
            <h1>
              Nové i ojeté vozy<br />
              <span className="hl">s garancí.</span><br />
              Bez problému.
            </h1>
            <p className="lede">
              Prodáváme a servisujeme vozy KIA a DONGFENG přímo v Plzni.
              Přijďte se na vůz podívat, projet se — a odjet s jistotou, že
              o něj bude postaráno i za pět let.
            </p>
            <div className="hero-cta">
              <a className="btn btn-primary" href="#nabidka">Prohlédnout vozy</a>
              <a className="btn btn-ghost" href="#servis">Objednat servis</a>
            </div>
            <dl className="hero-meta">
              <div>
                <dt>Salon</dt>
                <dd>Po–Pá 8–17 · So 9–12</dd>
              </div>
              <div>
                <dt>Servis</dt>
                <dd>Po–Pá 7–16</dd>
              </div>
            </dl>
          </div>

          <figure className="hero-media">
            <img
              src="/hero.webp"
              alt="Vůz z nabídky Auto Matulka připravený k předání v plzeňském salonu"
              width={880}
              height={620}
              loading="eager"
            />
            <figcaption>
              <span className="model-tag">SHINE GS</span>
              Prostorné kombi · <strong>499&nbsp;900 Kč</strong>
            </figcaption>
          </figure>
        </div>
      </section>

      {/* ===== NABÍDKA ===== */}
      <section className="block" id="nabidka">
        <div className="block-head">
          <p className="section-no">Tři důvody, proč zajet za námi</p>
          <h2>Prodej, servis a financování pod jednou střechou</h2>
        </div>

        <ol className="cards">
          <li className="card">
            <span className="card-idx">01</span>
            <h3>Prodej vozů</h3>
            <p>
              Hledáte nový vůz, nebo ojetý s garancí? Máme skladem KIA
              i DONGFENG. FORTHING T5 už si můžete objednat, MAGE stojí
              připravený na zkušební jízdu.
            </p>
            <a className="card-link" href="#duvera">Skladové vozy →</a>
          </li>
          <li className="card">
            <span className="card-idx">02</span>
            <h3>Autorizovaný servis</h3>
            <p>
              Aby byl váš vůz stále ve skvělé kondici, je potřeba se o něj
              starat. Náš autorizovaný servis je to nejlepší, co mu můžete
              dopřát — s originálními díly.
            </p>
            <a className="card-link" href="#servis">Objednat termín →</a>
          </li>
          <li className="card">
            <span className="card-idx">03</span>
            <h3>Financování</h3>
            <p>
              Jste malá či střední firma, korporace, nebo živnostník? Máme
              řešení pro všechny — úvěr, leasing i operák spočítáme na míru
              přímo u vozu.
            </p>
            <a className="card-link" href="#duvera">Spočítat splátku →</a>
          </li>
        </ol>

        <figure className="wide-media">
          <img
            src="/section-1.webp"
            alt="Vozy KIA a DONGFENG připravené v showroomu Auto Matulka v Plzni"
            width={1280}
            height={620}
            loading="lazy"
          />
        </figure>
      </section>

      {/* ===== DŮVĚRA / SERVIS ===== */}
      <section className="trust" id="servis">
        <div className="trust-grid">
          <figure className="trust-media">
            <img
              src="/section-2.webp"
              alt="Servisní hala Auto Matulka během běžné údržby vozu"
              width={720}
              height={640}
              loading="lazy"
            />
          </figure>

          <div className="trust-copy" id="duvera">
            <p className="eyebrow eyebrow-dark">O společnosti</p>
            <h2>Plzeňský salon, kde vůz nekončí podpisem smlouvy</h2>
            <p className="trust-lede">
              Auto Matulka je autorizovaný prodejce a servis KIA a DONGFENG
              v Plzni. Vůz u nás nekupujete jako číslo v inzerátu —
              znáte jeho historii, díváte se s námi pod kapotu a víte,
              kam s ním na první servis.
            </p>

            <ul className="pledge">
              <li>
                <span className="pledge-k">Garance</span>
                Ojeté vozy prodáváme prověřené a s garancí — ne „jak stojí a leží".
              </li>
              <li>
                <span className="pledge-k">Servis na místě</span>
                Prodej i autorizovaný servis pod jednou střechou, bez objíždění po Plzni.
              </li>
              <li>
                <span className="pledge-k">Otevřeno v sobotu</span>
                Salon otevřený i v sobotu 9–12 pro objednané návštěvy.
              </li>
            </ul>

            <div className="hours">
              <div className="hours-row">
                <span>Salon</span>
                <span>Po–Pá 8–17 · So 9–12 (objednané) · Ne zavřeno</span>
              </div>
              <div className="hours-row">
                <span>Servis</span>
                <span>Po–Pá 7–16 · So–Ne zavřeno</span>
              </div>
            </div>

            <a className="btn btn-primary" href="tel:+420377000000">
              Zavolat do salonu
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
