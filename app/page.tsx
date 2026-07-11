import type { CSSProperties } from "react";

export default function Page() {
  const oblasti = [
    {
      kod: "§ 2079",
      nazev: "Obchodní právo",
      popis:
        "Zakládání a převody společností, smlouvy o dílo i kupní, korporátní změny v obchodním rejstříku a nastavení vztahů mezi společníky. Provedeme vás transakcí od záměru po podpis.",
    },
    {
      kod: "§ 1011",
      nazev: "Občanské právo",
      popis:
        "Nemovitosti, sousedské spory, náhrada škody, dědictví i rodinné věci. Vysvětlíme vám možnosti řeči srozumitelně a bez latinských formulek, kterým byste nerozuměli.",
    },
    {
      kod: "§ 2358",
      nazev: "Autorské právo",
      popis:
        "Licenční smlouvy, ochrana díla, užití obsahu na webu i v reklamě, spory o autorství. Chráníme to, co jste vytvořili — od textu přes fotografie po software.",
    },
    {
      kod: "§ 1968",
      nazev: "Vymáhání pohledávek",
      popis:
        "Předžalobní výzvy, žaloby, exekuce a insolvence. Dostaneme vaše peníze zpátky — od upomínky po výkon rozhodnutí — a hlídáme každou lhůtu za vás.",
    },
  ];

  return (
    <main className="soppe">
      <header className="topbar">
        <a className="wordmark" href="#uvod" aria-label="Mgr. Martin Soppe, advokát">
          <span className="wm-line1">Mgr. Martin</span>
          <span className="wm-line2">Soppe</span>
          <span className="wm-role">advokát · Hradec Králové</span>
        </a>
        <nav className="nav" aria-label="Hlavní navigace">
          <a href="#oblasti">Právní služby</a>
          <a href="#onas">O kanceláři</a>
          <a className="nav-cta" href="#kontakt">Objednat schůzku</a>
        </nav>
      </header>

      <section className="hero" id="uvod">
        <div className="hero-media">
          <img
            src="/hero.webp"
            alt="Advokátní kancelář Mgr. Martina Soppeho na Malém náměstí v Hradci Králové"
            className="hero-img"
          />
        </div>
        <div className="hero-copy">
          <p className="eyebrow">Advokátní kancelář · Malé náměstí, Hradec Králové</p>
          <h1 className="hero-title">
            Právo, které<br />
            <em>rozumíte</em>
          </h1>
          <p className="hero-lede">
            Zastupuji podnikatele i jednotlivce ve věcech obchodního,
            občanského a autorského práva a při vymáhání pohledávek. Ke
            každému případu přistupuji tak, abyste na konci věděli, na čem
            jste — a proč.
          </p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="#kontakt">Objednat schůzku</a>
            <a className="btn btn-ghost" href="#oblasti">Čím se zabývám</a>
          </div>
          <dl className="hero-facts">
            <div>
              <dt>Konzultace</dt>
              <dd>Po&nbsp;–&nbsp;Pá, 8:00–16:00</dd>
            </div>
            <div>
              <dt>Kde</dt>
              <dd>Malé nám. 125/16, HK</dd>
            </div>
            <div>
              <dt>Zaměření</dt>
              <dd>Obchod · občan · autor</dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="oblasti" id="oblasti">
        <div className="sec-head">
          <p className="eyebrow">Právní služby</p>
          <h2 className="sec-title">Čtyři oblasti, ve kterých vám pomohu</h2>
          <p className="sec-lede">
            Nedělám všechno pro všechny. Držím se toho, čemu skutečně rozumím
            — a v čem vám dokážu ušetřit čas, nervy i peníze.
          </p>
        </div>
        <ul className="oblasti-grid">
          {oblasti.map((o) => (
            <li className="oblast" key={o.nazev}>
              <span className="oblast-kod" aria-hidden="true">
                {o.kod}
              </span>
              <h3 className="oblast-nazev">{o.nazev}</h3>
              <p className="oblast-popis">{o.popis}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="onas" id="onas">
        <div className="onas-media">
          <img
            src="/section-1.webp"
            alt="Interiér advokátní kanceláře — pracovna Mgr. Martina Soppeho"
            className="onas-img"
          />
          <img
            src="/section-2.webp"
            alt="Detail z jednací místnosti advokátní kanceláře v centru Hradce Králové"
            className="onas-img onas-img--sec"
          />
        </div>
        <div className="onas-copy" id="kontakt">
          <p className="eyebrow">O kanceláři</p>
          <h2 className="sec-title">Advokát, se kterým se domluvíte</h2>
          <p className="onas-text">
            Jmenuji se <strong>Martin Soppe</strong> a jsem advokát v centru
            Hradce Králové. Působím jako součást zavedené kanceláře na Malém
            náměstí, kde spolupracuji s kolegy napříč obory — od korporátních
            transakcí po vymáhání pohledávek. Klientům nabízím jednu věc, na
            kterou u právníků nejsou zvyklí: srozumitelnou řeč a jasný postup.
          </p>
          <blockquote className="onas-cit">
            „Dobrá smlouva není ta nejdelší. Je to ta, po jejímž přečtení
            přesně víte, do čeho jdete.“
          </blockquote>
          <ul className="onas-list">
            <li>
              <span className="onas-list-k">Adresa</span>
              <span className="onas-list-v">Malé náměstí 125/16, 500 03 Hradec Králové</span>
            </li>
            <li>
              <span className="onas-list-k">Telefon</span>
              <span className="onas-list-v">
                <a href="tel:+420495515811">+420 495 515 811</a>
              </span>
            </li>
            <li>
              <span className="onas-list-k">Konzultace</span>
              <span className="onas-list-v">Po–Pá, 8:00–16:00, po předchozí domluvě</span>
            </li>
          </ul>
          <a className="btn btn-primary" href="tel:+420495515811">
            Zavolat do kanceláře
          </a>
        </div>
      </section>
    </main>
  );
}
