import type { CSSProperties } from "react";

export default function Page() {
  const services = [
    {
      code: "RD",
      name: "Stavba rodinných domů",
      body: "Postavíme rodinný dům podle vlastního projektu, který upravíme přesně na míru vašim představám.",
    },
    {
      code: "BD",
      name: "Stavba bytových domů",
      body: "Kvalitní zpracování s důrazem na detail a celkové ztvárnění objektu — od základů po kolaudaci.",
    },
    {
      code: "PAR",
      name: "Prodej parcel",
      body: "Stavební parcely včetně inženýrských sítí za zajímavé ceny, připravené k okamžité výstavbě.",
    },
    {
      code: "BYT",
      name: "Prodej bytů",
      body: "Moderní byty nejrůznějších velikostí a dispozic v Českých Budějovicích a okolí.",
    },
    {
      code: "ZEM",
      name: "Zemní práce",
      body: "Veškeré zemní práce provádíme vlastními silami — proto umíme nabídnout výhodné ceny.",
    },
    {
      code: "FIN",
      name: "Finanční poradenství",
      body: "Pomůžeme vám zafinancovat vaše bydlení a projít celým procesem bez zbytečných starostí.",
    },
  ];

  const projects = [
    { site: "Srubec", label: "ZTV Srubec — 3× rodinný dům", note: "Rozestavěno · 1 NP" },
    { site: "Roudné", label: "ZTV Roudné — dvojdomky 97AB / 98AB", note: "Rozestavěno · 2 NP" },
    { site: "Č. Budějovice", label: "BD Fráni Šrámka", note: "Bytový dům" },
    { site: "Č. Budějovice", label: "Rezidence u Kapličky", note: "I. a II. etapa" },
  ];

  return (
    <main className="page">
      <header className="topbar">
        <a className="wordmark" href="#" aria-label="THB INVEST, domů">
          <span className="wordmark__thb">THB</span>
          <span className="wordmark__invest">INVEST</span>
        </a>
        <nav className="topnav" aria-label="Hlavní">
          <a href="#sluzby">Služby</a>
          <a href="#projekty">Projekty</a>
          <a href="#o-nas">O nás</a>
          <a className="topnav__tel" href="tel:+420389604300">+420 389 604 300</a>
        </nav>
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero__grid" aria-hidden="true">
          <div className="hero__level" />
        </div>

        <div className="hero__inner">
          <p className="hero__eyebrow">
            <span>Stavební společnost</span>
            <span className="hero__loc">České Budějovice</span>
          </p>

          <h1 id="hero-title" className="hero__title">
            <span className="hero__line hero__line--a">Stavíme</span>
            <span className="hero__line hero__line--b">domov</span>
            <span className="hero__line hero__line--c">od základů.</span>
          </h1>

          <p className="hero__lede">
            Přes 20 let stavíme rodinné a bytové domy na jihu Čech. Od parcely
            přes projekt a zemní práce až po klíče — vše zvládneme vlastními
            silami a za férovou cenu.
          </p>

          <div className="hero__actions">
            <a className="btn btn--solid" href="#sluzby">
              Prohlédnout služby
            </a>
            <a className="btn btn--ghost" href="tel:+420389604300">
              Zavolat
            </a>
          </div>
        </div>

        <dl className="hero__stats">
          <div className="stat">
            <dt>Na trhu</dt>
            <dd>20+ let</dd>
          </div>
          <div className="stat">
            <dt>Působíme</dt>
            <dd>Budějovicko</dd>
          </div>
          <div className="stat">
            <dt>Realizace</dt>
            <dd>Vlastní tým</dd>
          </div>
        </dl>
      </section>

      <section id="sluzby" className="services" aria-labelledby="services-title">
        <div className="section-head">
          <p className="section-head__eyebrow">Co pro vás postavíme</p>
          <h2 id="services-title" className="section-head__title">
            Kompletní bydlení pod jednou střechou
          </h2>
          <p className="section-head__note">
            Díky soběstačnosti napříč celým spektrem stavebních činností řešíte
            všechno na jednom místě — a platíte za to výhodnější cenu.
          </p>
        </div>

        <ul className="svc-list">
          {services.map((s, i) => (
            <li
              className="svc"
              key={s.code}
              style={{ "--i": i } as CSSProperties}
            >
              <span className="svc__code" aria-hidden="true">
                {s.code}
              </span>
              <div className="svc__text">
                <h3 className="svc__name">{s.name}</h3>
                <p className="svc__body">{s.body}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section id="o-nas" className="about" aria-labelledby="about-title">
        <div className="about__lead">
          <p className="section-head__eyebrow">O společnosti</p>
          <h2 id="about-title" className="about__title">
            Individuální přístup ke každému klientovi
          </h2>
          <p className="about__body">
            Přes dvacet let sbírá THB INVEST zkušenosti s výstavbou rodinných
            domů i větších projektů moderních bytových domů. Za sebou máme řadu
            úspěšných realizací a spokojených klientů. Provedeme vás celým
            procesem tak komfortně, jak to jen jde — ať už stavíte rodinný dům,
            kupujete nový byt nebo hledáte stavební parcelu. Součástí je i
            vizualizace vašeho budoucího bydlení.
          </p>

          <blockquote className="about__quote">
            <p>„Nejvíc nás naplňuje spokojenost našich klientů.“</p>
            <footer>
              <span className="about__name">Stanislav Hafner</span>
              <span className="about__role">předseda představenstva</span>
            </footer>
          </blockquote>
        </div>

        <div className="about__side" id="projekty">
          <h3 className="about__side-title">Vybrané projekty</h3>
          <ul className="proj-list">
            {projects.map((p) => (
              <li className="proj" key={p.label}>
                <span className="proj__site">{p.site}</span>
                <span className="proj__label">{p.label}</span>
                <span className="proj__note">{p.note}</span>
              </li>
            ))}
          </ul>

          <div className="about__contact">
            <p className="about__contact-q">Máte dotaz k pozemku či stavbě?</p>
            <a href="tel:+420389604300">+420 389 604 300</a>
            <a href="mailto:thb@thb-as.cz">thb@thb-as.cz</a>
            <p className="about__addr">Studentská 1655/1b, České Budějovice</p>
          </div>
        </div>
      </section>
    </main>
  );
}
