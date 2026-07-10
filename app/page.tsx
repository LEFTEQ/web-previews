import type { CSSProperties } from "react";

const sluzby = [
  {
    kod: "01",
    nazev: "Lakýrnické práce",
    popis:
      "Kompletní přelak i lokální oprava v lakovací kabině USI Italia. Barvu míchÁme na míru podle VIN a čísla odstínu — voda­ředitelné systémy Spies Hecker.",
    detail: "Vodou ředitelné laky · přesné míchání odstínu · řízené sušení",
  },
  {
    kod: "02",
    nazev: "Klempířské práce",
    popis:
      "Rovnáme karoserii po havárii i po drobném ťuknutí na parkovišti. Vyměníme díly, srovnÁme geometrii a připravíme plech tak, aby lak držel.",
    detail: "Oprava po nehodě · výměna dílů · příprava plechu",
  },
  {
    kod: "03",
    nazev: "Renovace laku",
    popis:
      "Sešlý, škrábaný nebo zmatnělý lak vrátíme do lesku. Vícestupňová strojní politura, odstranění vírů a hloubkové čištění celého vozu.",
    detail: "Strojní politura · odstranění škrábanců · ochrana laku",
  },
  {
    kod: "04",
    nazev: "Renovace světlometů",
    popis:
      "Zažloutlé a matné světlomety obrousíme a znovu zalakujeme. Lepší svit v noci, čistší pohled na vůz a technická bez připomínek.",
    detail: "Broušení · přelakování · čirý povrch",
  },
];

const duvera = [
  {
    titulek: "Voda­ředitelné podklady a laky",
    text:
      "Absolvované školení Spies Hecker na aplikaci vodou ředitelných podkladových materiálů a vrchních průhledných laků. Šetrnější k prostředí, stálejší barva.",
  },
  {
    titulek: "Identifikace odstínů",
    text:
      "Certifikace na postupy přesné identifikace odstínů. Trefíme původní barvu i u starších vozů, kde slunce a čas odstín posunuly.",
  },
  {
    titulek: "Průmyslové materiály",
    text:
      "Školení na průmyslové materiály, jejich vlastnosti a správnou aplikaci. Víme, co na jaký povrch patří a proč.",
  },
];

export default function Page() {
  return (
    <main className="cb">
      <header className="cb-nav" aria-label="Hlavní navigace">
        <a className="cb-logo" href="#hero" aria-label="Color Basic, domů">
          <span className="cb-logo-mark" aria-hidden="true">
            <span className="cb-swatch" />
          </span>
          <span className="cb-logo-text">
            Color<span className="cb-logo-basic">Basic</span>
          </span>
        </a>
        <nav className="cb-links">
          <a href="#sluzby">Služby</a>
          <a href="#duvera">Certifikáty</a>
          <a href="#kontakt">Kontakt</a>
        </nav>
        <a className="cb-nav-cta" href="tel:+420774960519">Zavolat</a>
      </header>

      <section className="cb-hero" id="hero">
        <div className="cb-hero-media">
          <img
            src="/hero.webp"
            alt="Karoserie vozu v lakovací kabině autolakovny Color Basic v Praze"
            className="cb-hero-img"
          />
          <div className="cb-hero-scrim" aria-hidden="true" />
        </div>

        <div className="cb-hero-inner">
          <p className="cb-eyebrow">Autolakovna · Praha 9, Horní Počernice</p>
          <h1 className="cb-hero-title">
            Trefíme přesně
            <br />
            <span className="cb-hero-accent">tu vaši barvu.</span>
          </h1>
          <p className="cb-hero-lede">
            Havarovaný vůz, škrábanec od klíče nebo sešlý lak po letech na
            slunci — srovnÁme, namícháme odstín na míru a nalakujeme v kabině
            USI Italia. Pro vůz si přijedeme a vrátíme ho jako nový.
          </p>
          <div className="cb-hero-actions">
            <a className="cb-btn" href="tel:+420774960519">
              Zavolat 774 960 519
            </a>
            <a className="cb-btn cb-btn-ghost" href="#sluzby">
              Co umíme
            </a>
          </div>

          <dl className="cb-chips">
            <div className="cb-chip">
              <dt>Barvy</dt>
              <dd>Spies Hecker</dd>
            </div>
            <div className="cb-chip">
              <dt>Kabina</dt>
              <dd>USI Italia</dd>
            </div>
            <div className="cb-chip">
              <dt>Odvoz vozu</dt>
              <dd>Vlastní odtah</dd>
            </div>
            <div className="cb-chip">
              <dt>Hlídáno</dt>
              <dd>Kamery 24/7</dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="cb-sluzby" id="sluzby" aria-labelledby="sluzby-h">
        <div className="cb-sec-head">
          <p className="cb-eyebrow cb-eyebrow-dark">Naše služby</p>
          <h2 className="cb-sec-title" id="sluzby-h">
            Od plechu po lesk pod jednou střechou
          </h2>
          <p className="cb-sec-lede">
            Kompletní péče o karoserii. Zvládneme celý proces — vyrovnÁní,
            přípravu, míchání odstínu i finální lak — takže vůz řešíte na
            jednom místě.
          </p>
        </div>

        <ol className="cb-cards">
          {sluzby.map((s) => (
            <li className="cb-card" key={s.kod}>
              <span className="cb-card-kod" aria-hidden="true">
                {s.kod}
              </span>
              <h3 className="cb-card-title">{s.nazev}</h3>
              <p className="cb-card-text">{s.popis}</p>
              <p className="cb-card-detail">{s.detail}</p>
            </li>
          ))}
        </ol>

        <figure className="cb-figure">
          <img
            src="/section-1.webp"
            alt="Detail práce lakýrníka Color Basic při míchání a nanášení barvy"
            className="cb-figure-img"
          />
          <figcaption className="cb-figure-cap">
            Odstín ladíme podle VIN i podle skutečného stavu laku na voze —
            slunce a čas barvu posouvají.
          </figcaption>
        </figure>
      </section>

      <section className="cb-duvera" id="duvera" aria-labelledby="duvera-h">
        <div className="cb-duvera-grid">
          <div className="cb-duvera-media">
            <img
              src="/section-2.webp"
              alt="Provoz autolakovny Color Basic v Praze s lakovací kabinou"
              className="cb-duvera-img"
            />
          </div>

          <div className="cb-duvera-body">
            <p className="cb-eyebrow cb-eyebrow-dark">O nás &amp; certifikáty</p>
            <h2 className="cb-sec-title" id="duvera-h">
              Řemeslo, co se dá doložit papírem
            </h2>
            <p className="cb-sec-lede">
              Karoseriím se věnujeme roky a pravidelně chodíme na školení, aby
              práce držela krok s tím, jak se laky a materiály vyvíjejí. Celý
              areál hlídá kamerový systém s nočním viděním — váš vůz je u nás
              v bezpečí.
            </p>

            <ul className="cb-certs">
              {duvera.map((c) => (
                <li className="cb-cert" key={c.titulek}>
                  <h3 className="cb-cert-title">{c.titulek}</h3>
                  <p className="cb-cert-text">{c.text}</p>
                </li>
              ))}
            </ul>

            <div className="cb-kontakt" id="kontakt">
              <div className="cb-kontakt-item">
                <span className="cb-kontakt-label">Kde nás najdete</span>
                <span className="cb-kontakt-val">
                  Ke Xaverovu 2516/108a, Praha 9 — Horní Počernice
                </span>
              </div>
              <div className="cb-kontakt-item">
                <span className="cb-kontakt-label">Telefon</span>
                <a className="cb-kontakt-val cb-kontakt-link" href="tel:+420774960519">
                  774 960 519
                </a>
              </div>
              <div className="cb-kontakt-item">
                <span className="cb-kontakt-label">E-mail</span>
                <a
                  className="cb-kontakt-val cb-kontakt-link"
                  href="mailto:cernycolor@gmail.com"
                >
                  cernycolor@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
