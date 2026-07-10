import type { CSSProperties } from "react";

const drinks = [
  {
    no: "01",
    group: "Orange Signatures",
    name: "Haštalský spritz",
    desc: "Aperol, prosecco, pomerančová kůra flambovaná nad ledem. Náš podpisový drink — hořká pomerančovina, kterou vytočíme na míru.",
    base: "Prosecco · Aperol",
  },
  {
    no: "02",
    group: "Orange Signatures",
    name: "Kolo štěstí",
    desc: "Rum, čerstvá šťáva a domácí grenadina. Servírujeme s roztočením kovaného kola od Miroslava Petrželi — jedno ze šesti překvapení je vaše.",
    base: "Rum · citrus",
  },
  {
    no: "03",
    group: "Classics",
    name: "Old Fashioned",
    desc: "Bourbon, cukr, angostura a jediná pomerančová kůra vymačkaná přes led. Zamíchaný přesně tak dlouho, jak má být.",
    base: "Bourbon",
  },
  {
    no: "04",
    group: "Z výčepu",
    name: "Plzeň do namražené",
    desc: "Tanková Plzeň do sklenice mražené na kost. Když nemáte náladu na míchané, tohle nezklame.",
    base: "Pilsner Urquell",
  },
  {
    no: "05",
    group: "Ze sklepa",
    name: "Chilské víno",
    desc: "Sklenka, po které vás druhý den zaručeně nebude bolet hlava. Vybíráme jen to, co bychom pili sami.",
    base: "Chile",
  },
];

export default function Page() {
  return (
    <main className="ob">
      <header className="ob-nav">
        <a className="ob-brand" href="#top" aria-label="Orange Bar, Praha — domů">
          <span className="ob-brand-mark" aria-hidden="true">
            <span className="ob-peel">Orange</span>
            <span className="ob-bar">bar</span>
          </span>
        </a>
        <nav className="ob-links" aria-label="Hlavní">
          <a href="#menu">Menu</a>
          <a href="#o-nas">O baru</a>
          <a className="ob-nav-cta" href="tel:+420737540554">Rezervace</a>
        </nav>
      </header>

      <section className="ob-hero" id="top">
        <div className="ob-hero-media">
          <img
            src="/hero.webp"
            alt="Barový pult Orange baru s míchanými koktejly a pomerančovými kůrami"
            width={1600}
            height={1000}
          />
          <div className="ob-hero-scrim" aria-hidden="true" />
        </div>

        <div className="ob-hero-inner">
          <p className="ob-eyebrow">Koktejlový bar · Haštalská 15 · Staré Město</p>
          <h1 className="ob-hero-title">
            Vytočíme vám<br />
            <span className="ob-accent">pomeranč</span> do skla.
          </h1>
          <p className="ob-hero-lead">
            Míchané drinky poctivě a bez zkratek od října 2002. Přijďte na
            schůzku, na oslavu, nebo jen tak — kolo štěstí se točí každou
            útratou nad tisícovku.
          </p>
          <div className="ob-hero-actions">
            <a className="ob-btn" href="tel:+420737540554">Zavolat a rezervovat stůl</a>
            <a className="ob-btn ob-btn-ghost" href="#menu">Prolistovat drinky</a>
          </div>
          <p className="ob-hero-hours">
            Otevřeno denně od 17:00 · <a href="tel:+420737540554">+420 737 540 554</a>
          </p>
        </div>
      </section>

      <section className="ob-menu" id="menu" aria-labelledby="menu-h">
        <div className="ob-menu-head">
          <p className="ob-eyebrow">Co nalejeme</p>
          <h2 id="menu-h" className="ob-h2">Lístek, který se pořád točí</h2>
          <p className="ob-section-lead">
            Osvědčené <em>Classics</em> i naše <em>Orange Signatures</em>. Vedle
            míchaných drinků tanková Plzeň do namražené a chilské víno ze sklepa.
            Nemůžete šlápnout vedle.
          </p>
        </div>

        <ol className="ob-list">
          {drinks.map((d) => (
            <li className="ob-item" key={d.no}>
              <span className="ob-item-no" aria-hidden="true">{d.no}</span>
              <div className="ob-item-body">
                <p className="ob-item-group">{d.group}</p>
                <h3 className="ob-item-name">{d.name}</h3>
                <p className="ob-item-desc">{d.desc}</p>
              </div>
              <span className="ob-item-base">{d.base}</span>
            </li>
          ))}
        </ol>

        <figure className="ob-menu-figure">
          <img
            src="/section-1.webp"
            alt="Barman míchá koktejl za pultem Orange baru"
            width={1400}
            height={900}
          />
          <figcaption>
            Interiér má na svědomí umělec Filip Kazda — kovové kolo štěstí
            vykoval Miroslav Petržela.
          </figcaption>
        </figure>
      </section>

      <section className="ob-about" id="o-nas" aria-labelledby="about-h">
        <figure className="ob-about-figure">
          <img
            src="/section-2.webp"
            alt="Osobitý interiér Orange baru s teplým osvětlením"
            width={1200}
            height={1400}
          />
        </figure>

        <div className="ob-about-body">
          <p className="ob-eyebrow">O baru</p>
          <h2 id="about-h" className="ob-h2">
            Kousek Starého Města, kde vás obsluha zná jménem
          </h2>
          <p className="ob-about-text">
            Orange bar otevřel v říjnu 2002 v Haštalské ulici. Osobitý interiér,
            kvalitní míchané drinky a milá obsluha z něj udělaly místo pro
            formální i neformální schůzky štamgastů — i pro cestovatele, kteří
            objevují historické Staré Město.
          </p>
          <p className="ob-about-text">
            Slavíte narozeniny? Nebo klidně nenarozeniny? Rádi vám připravíme
            kompletní catering přesně podle vašich představ. A při každé útratě
            nad tisícovku roztočíte kolo štěstí — čeká jedno ze šesti
            překvapení, která pravidelně obměňujeme.
          </p>

          <dl className="ob-facts">
            <div>
              <dt>Otevřeno od</dt>
              <dd>října 2002</dd>
            </div>
            <div>
              <dt>Kde nás najdete</dt>
              <dd>Haštalská 15, Praha 1</dd>
            </div>
            <div>
              <dt>Rezervace &amp; catering</dt>
              <dd><a href="tel:+420737540554">+420 737 540 554</a></dd>
            </div>
          </dl>

          <blockquote className="ob-quote">
            „Odhodlaní dělat vše, co servírujeme, kvalitně a poctivě.“
            <cite>— Orange Bar Team</cite>
          </blockquote>
        </div>
      </section>
    </main>
  );
}
