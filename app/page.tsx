export default function Page() {
  const prumysl = [
    {
      cislo: "01",
      nadpis: "Tepelné a chladové izolace",
      text: "Návrh a realizace izolací v energetice, chemii a potravinářství. Speciální izolační matrace pro turbosoustrojí a průběžná údržba tepelných izolací provozů."
    },
    {
      cislo: "02",
      nadpis: "Protihlukové izolace",
      text: "Opatření pro snížení hluku v průmyslu i stavbách — akustické podhledy a obklady, kryty, tlumiče a odhlučněné skříně strojů."
    },
    {
      cislo: "03",
      nadpis: "Opláštění a fasády hal",
      text: "Fasády průmyslových objektů ze sendvičových systémů. Kompletní opláštění potrubí a technologických celků plechovým pláštěm."
    }
  ];

  const revitalizace = [
    {
      nadpis: "Zateplení fasád",
      text: "Certifikované vnější kontaktní zateplovací systémy včetně následné údržby zateplených fasád bytových domů."
    },
    {
      nadpis: "Izolace střech",
      text: "Hydroizolace střešního pláště včetně tepelné izolace. Řešíme ploché i šikmé střechy panelových i bytových domů."
    },
    {
      nadpis: "Půdy a sklepy",
      text: "Zateplení a izolace vnitřních prostor — půdní vestavby, stropy sklepů, sanace a vylepšení stávajících izolací."
    },
    {
      nadpis: "Výplně a lodžie",
      text: "Výměna výplní otvorů a opravy lodžií. Kompletní revitalizace včetně projektu, inženýringu i financování."
    }
  ];

  return (
    <main className="ib">
      <header className="ib-nav">
        <a className="ib-wordmark" href="#uvod" aria-label="Izolace Beran, úvod">
          <span className="ib-wordmark__name">IZOLACE&nbsp;BERAN</span>
          <span className="ib-wordmark__sub">pokrývačství &amp; izolace · Ústí nad Labem</span>
        </a>
        <nav className="ib-nav__links" aria-label="Hlavní navigace">
          <a href="#prumysl">Průmyslové izolace</a>
          <a href="#revitalizace">Revitalizace domů</a>
          <a href="#firma">O firmě</a>
        </nav>
        <a className="ib-nav__call" href="tel:+420475000000">Zavolat</a>
      </header>

      <section className="ib-hero" id="uvod">
        <div className="ib-hero__media">
          <img
            src="/hero.webp"
            alt="Realizace zateplení a izolace na střeše bytového domu firmou Izolace Beran"
            className="ib-hero__img"
          />
        </div>
        <div className="ib-hero__panel">
          <p className="ib-eyebrow">Od projektu po poslední přesah</p>
          <h1 className="ib-hero__title">
            Držíme teplo<br />uvnitř. Vodu<br /><span>venku.</span>
          </h1>
          <p className="ib-hero__lead">
            Izolace Beran zatepluje a odizolovává stavby v Ústí nad Labem
            i po celé republice — od střech bytových domů po turbosoustrojí
            v elektrárnách. Tepelně, chladově, akusticky.
          </p>
          <div className="ib-hero__actions">
            <a className="ib-btn ib-btn--primary" href="tel:+420475000000">Zavolat pokrývači</a>
            <a className="ib-btn ib-btn--ghost" href="#revitalizace">Chci zateplit dům</a>
          </div>
          <dl className="ib-hero__facts">
            <div>
              <dt>Působíme z</dt>
              <dd>Ústí n. L.</dd>
            </div>
            <div>
              <dt>Zakázky</dt>
              <dd>ČR i svět</dd>
            </div>
            <div>
              <dt>Certifikace</dt>
              <dd>ETICS</dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="ib-section ib-section--prumysl" id="prumysl">
        <div className="ib-section__head">
          <p className="ib-eyebrow ib-eyebrow--light">Průmysl · energetika · chemie</p>
          <h2 className="ib-section__title">
            Tam, kde teplo stojí peníze
          </h2>
          <p className="ib-section__intro">
            V provozech, kde každý stupeň znamená účet za energii, izolujeme
            potrubí, nádrže i turbíny. Navrhneme, vyrobíme a namontujeme —
            a pak se o izolaci staráme dál.
          </p>
        </div>

        <div className="ib-section__media">
          <img
            src="/section-1.webp"
            alt="Průmyslová izolace potrubí a technologických celků v provozu"
            className="ib-media__img"
          />
        </div>

        <ol className="ib-list">
          {prumysl.map((s) => (
            <li className="ib-list__item" key={s.cislo}>
              <span className="ib-list__num" aria-hidden="true">{s.cislo}</span>
              <div className="ib-list__body">
                <h3 className="ib-list__title">{s.nadpis}</h3>
                <p className="ib-list__text">{s.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="ib-section ib-section--revit" id="revitalizace">
        <div className="ib-revit__grid">
          <div className="ib-revit__intro">
            <p className="ib-eyebrow">Bytové a panelové domy</p>
            <h2 className="ib-section__title">Revitalizace, kterou<br />je vidět na účtu za teplo</h2>
            <p className="ib-section__intro">
              Kompletní obnova domu od projektu přes inženýring po financování.
              Certifikovaným kontaktním systémem zateplíme fasádu, izolujeme
              střechu i sklep — a postaráme se, aby to drželo roky.
            </p>
            <img
              src="/section-2.webp"
              alt="Zateplená fasáda revitalizovaného bytového domu v Ústí nad Labem"
              className="ib-revit__img"
            />
          </div>

          <ul className="ib-cards" id="firma">
            {revitalizace.map((r) => (
              <li className="ib-card" key={r.nadpis}>
                <h3 className="ib-card__title">{r.nadpis}</h3>
                <p className="ib-card__text">{r.text}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="ib-trust">
          <p className="ib-trust__lead">
            <strong>Stavební a inženýrská firma z Ústí nad Labem.</strong>{" "}
            Specializujeme se na revitalizaci bytových domů a realizaci
            tepelných, chladových i protihlukových izolací. Naše práce najdete
            po celé České republice — a v energetice, chemii, papírenství
            i potravinářství i za jejími hranicemi.
          </p>
          <p className="ib-trust__note">
            Kvalifikaci našich lidí průběžně zvyšujeme díky evropským projektům
            profesního vzdělávání a modernizujeme výrobní prefabrikaci.
            Izolace tak stavíme přesně a rychle.
          </p>
        </div>
      </section>
    </main>
  );
}
