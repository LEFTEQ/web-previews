import type { CSSProperties } from "react";

export default function Page() {
  const sluzby = [
    {
      cislo: "01",
      nazev: "Vedení účetnictví",
      popis:
        "Kompletní zpracování účetnictví i daňové evidence — od prvotních dokladů přes měsíční uzávěrky po roční závěrku. Vidíte, kolik firma vydělává, dřív než to řekne finanční úřad.",
    },
    {
      cislo: "02",
      nazev: "Daňové poradenství",
      popis:
        "Přiznání k dani z příjmů, DPH, silniční i majetkové dani. Poradíme, jak legálně zaplatit méně, a v případě kontroly stojíme po vašem boku před úřadem.",
    },
    {
      cislo: "03",
      nazev: "Mzdy a personalistika",
      popis:
        "Výplaty, odvody, přihlášky a odhlášky zaměstnanců, ELDP i ročního zúčtování. Vaši lidé dostanou správnou částku ve správný den, vy máte klid.",
    },
    {
      cislo: "04",
      nazev: "Přeměny a likvidace společností",
      popis:
        "Fúze, rozdělení, změna právní formy i řádné ukončení firmy. Provedeme vás papírováním, které se dělá jednou za život a nesmí se pokazit.",
    },
  ];

  const duvody = [
    {
      klic: "Přístup na míru",
      text:
        "Neřešíme jen účetní předpisy, ale i pravidla vašeho oboru. Jinak počítá řemeslník, jinak e-shop, jinak lékař — a my to víme.",
    },
    {
      klic: "Odbornost",
      text:
        "Daňoví poradci i účetní se průběžně vzdělávají. Změny zákonů sledujeme za vás, abyste je nemuseli číst ve Sbírce.",
    },
    {
      klic: "Vše na jednom místě",
      text:
        "Účetnictví, daně, mzdy i ekonomické rozbory a zastoupení před úřady. Nemusíte obíhat pět kanceláří.",
    },
    {
      klic: "Mlčenlivost",
      text:
        "Vaše čísla zůstávají mezi námi. Vztah s klientem stavíme na skutečné důvěře, ne na hesle na webu.",
    },
  ];

  return (
    <main className="pg">
      {/* HERO */}
      <header className="hero">
        <div className="hero__bar">
          <a className="wm" href="#uvod" aria-label="1. Plzeňská daňová a účetní">
            <span className="wm__num">1.</span>
            <span className="wm__txt">
              Plzeňská<span className="wm__thin"> daňová a účetní</span>
            </span>
          </a>
          <nav className="nav" aria-label="Hlavní">
            <a href="#sluzby">Služby</a>
            <a href="#o-nas">O nás</a>
            <a className="nav__call" href="tel:+420377329928">Zavolat</a>
          </nav>
        </div>

        <div className="hero__grid" aria-hidden="true">
          {Array.from({ length: 12 }).map((_, i) => (
            <span key={i} className="cell" style={{ ["--i" as string]: i } as CSSProperties} />
          ))}
        </div>

        <div className="hero__inner" id="uvod">
          <p className="eyebrow">
            <span className="tick" aria-hidden="true" /> Plzeň, Na Roudné · od roku 2004
          </p>
          <h1 className="hero__h1">
            <span className="line a">Čísla, která</span>
            <span className="line b">sedí na</span>
            <span className="line c">
              haléř<span className="dot">.</span>
            </span>
          </h1>
          <p className="hero__lede">
            Daňová a účetní kancelář, která vede knihy plzeňským firmám i lidem
            v Praze. Uzávěrka, která se rovná — a poradce, který zvedne telefon.
          </p>
          <div className="hero__cta">
            <a className="btn btn--solid" href="tel:+420377329928">
              Zavolat 377 329 928
            </a>
            <a className="btn btn--ghost" href="mailto:sekretariat@ppdu.cz">
              Napsat e-mail
            </a>
          </div>
          <div className="ledger" aria-hidden="true">
            <span>MÁ DÁTI</span>
            <span>DAL</span>
          </div>
        </div>
      </header>

      {/* SLUŽBY */}
      <section className="sec sec--sluzby" id="sluzby">
        <div className="sec__head">
          <h2 className="sec__title">Co pro vás vedeme</h2>
          <p className="sec__sub">
            Finanční a mzdové účetní i daňoví poradci pod jednou střechou.
            U složitějších případů spolupracujeme s předními auditory a advokáty.
          </p>
        </div>
        <ol className="cards">
          {sluzby.map((s) => (
            <li className="card" key={s.cislo}>
              <span className="card__num">{s.cislo}</span>
              <h3 className="card__title">{s.nazev}</h3>
              <p className="card__text">{s.popis}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* O NÁS / DŮVĚRA */}
      <section className="sec sec--onas" id="o-nas">
        <div className="onas__grid">
          <div className="onas__lead">
            <p className="eyebrow eyebrow--dark">
              <span className="tick" aria-hidden="true" /> O kanceláři
            </p>
            <h2 className="sec__title sec__title--big">
              Dvacet let uzávěrek,<br />ani jedna pozdě.
            </h2>
            <p className="onas__p">
              Na plzeňském trhu působíme od roku 2004. Za tu dobu jsme si vydobyli
              silnou pozici, která nám dovolila rozšířit působnost i do Prahy a okolí.
              Zaměstnáváme specializované finanční a mzdové účetní i daňové poradce —
              ne agenturu, ale lidi, kteří vaši firmu znají jménem.
            </p>
            <a className="btn btn--dark" href="mailto:sekretariat@ppdu.cz">
              Domluvit schůzku
            </a>
          </div>

          <dl className="proc">
            {duvody.map((d, i) => (
              <div className="proc__row" key={d.klic}>
                <dt>
                  <span className="proc__idx">{String(i + 1).padStart(2, "0")}</span>
                  {d.klic}
                </dt>
                <dd>{d.text}</dd>
              </div>
            ))}
          </dl>
        </div>

        <address className="sidlo">
          <div className="sidlo__col">
            <span className="sidlo__lbl">Sídlo</span>
            <p>
              1. Plzeňská daňová a účetní spol. s r.o.<br />
              Na Roudné 276/19, 301 00 Plzeň
            </p>
          </div>
          <div className="sidlo__col">
            <span className="sidlo__lbl">Telefon</span>
            <a href="tel:+420377329928">+420 377 329 928</a>
          </div>
          <div className="sidlo__col">
            <span className="sidlo__lbl">E-mail</span>
            <a href="mailto:sekretariat@ppdu.cz">sekretariat@ppdu.cz</a>
          </div>
          <div className="sidlo__col">
            <span className="sidlo__lbl">IČO / DIČ</span>
            <p>26373076 · CZ26373076</p>
          </div>
        </address>
      </section>
    </main>
  );
}
