const sluzby = [
  {
    kod: "DEM",
    nazev: "Demolice a bourání",
    popis:
      "Bouráme rodinné domy, garáže, stodoly, haly i příčky uvnitř bytů. Zajistíme statické posouzení, ohlášení odstranění stavby a bezpečné provedení včetně ochrany okolí.",
    detail: "včetně odvozu a likvidace suti",
  },
  {
    kod: "ZEM",
    nazev: "Zemní a výkopové práce",
    popis:
      "Výkopy základů, terénní úpravy, srovnání pozemku před stavbou nebo zahradou. Pracujeme s bagry, nakladači a vlastními sklápěči — pozemek předáme připravený.",
    detail: "bagry 1,8–8 t, nakladače, sklápěče",
  },
  {
    kod: "SIT",
    nazev: "Inženýrské sítě",
    popis:
      "Pokládka vodovodů a kanalizace včetně přípojek k domu. Výkop, uložení potrubí, obsyp, zásyp a zhutnění — vše v jedné partě, bez předávání mezi firmami.",
    detail: "vodovody, kanalizace, přípojky",
  },
  {
    kod: "KOM",
    nazev: "Chodníky, ploty a komunikace",
    popis:
      "Zámková dlažba, obrubníky, příjezdové cesty, opěrné zídky a ploty. Od podkladních vrstev po finální povrch, který vydrží provoz i severočeské zimy.",
    detail: "dlažby, obrubníky, oplocení",
  },
  {
    kod: "REK",
    nazev: "Rekonstrukce bytů",
    popis:
      "Vybouráme staré jádro, příčky a podlahy a byt připravíme pro novou dispozici. Suť odvezeme, dům necháme čistý — včetně společných prostor.",
    detail: "bytová jádra, příčky, podlahy",
  },
  {
    kod: "MEC",
    nazev: "Pronájem mechanizace",
    popis:
      "Půjčíme vám bagr, nakladač nebo kontejner na suť — se strojníkem, nebo bez něj. Přistavíme na stavbu v Ústí a okolí obvykle do druhého dne.",
    detail: "se strojníkem i bez",
  },
];

const kroky = [
  {
    cislo: "1",
    nazev: "Přijedeme se podívat",
    text: "Zavoláte, domluvíme termín a přijedeme na místo. Obhlídka v Ústí nad Labem a okolí je zdarma — bez ní seriózní cenu demolice nikdo neurčí.",
  },
  {
    cislo: "2",
    nazev: "Dostanete pevnou cenu",
    text: "Do několika dní máte nabídku s rozpisem: bourací práce, odvoz suti, poplatky za skládku. Žádné položky navíc, které se objeví až na faktuře.",
  },
  {
    cislo: "3",
    nazev: "Zbouráme a uklidíme",
    text: "Stavbu ohradíme, zbouráme, suť vytřídíme a odvezeme na řízenou skládku. Pozemek předáme srovnaný a čistý — připravený pro to, co přijde po nás.",
  },
];

export default function Page() {
  return (
    <main className="bg-main">
      {/* ===== HERO ===== */}
      <header className="hero">
        <div className="hero-hazard" aria-hidden="true" />
        <div className="wrap">
          <div className="hero-top">
            <div className="wordmark" aria-label="Bigsam">
              <span className="wordmark-big">BIG</span>
              <span className="wordmark-sam">SAM</span>
            </div>
            <a className="hero-tel" href="tel:+420603916312">
              +420&nbsp;603&nbsp;916&nbsp;312
            </a>
          </div>

          <div className="hero-body">
            <p className="hero-eyebrow">
              Demoliční a zemní práce · Ústí nad Labem
            </p>
            <h1 className="hero-title">
              <span className="line line-1">Zbouráme,</span>
              <span className="line line-2 line-strike">
                <span className="strike-word">co překáží</span>
              </span>
              <span className="line line-3">
                a uklidíme <em>po sobě.</em>
              </span>
            </h1>
            <p className="hero-sub">
              Od starého domu po bytové jádro. Vlastní stroje, odvoz suti na
              řízenou skládku a pozemek předaný tak, že na něm můžete hned
              stavět.
            </p>
            <div className="hero-cta">
              <a className="btn-primary" href="tel:+420603916312">
                Zavolat a domluvit obhlídku
              </a>
              <a className="btn-ghost" href="mailto:info@bigsam.cz">
                info@bigsam.cz
              </a>
            </div>
          </div>

          <dl className="hero-facts">
            <div className="fact">
              <dt>Působíme</dt>
              <dd>Ústí nad Labem a okolí</dd>
            </div>
            <div className="fact">
              <dt>Obhlídka</dt>
              <dd>zdarma, do pár dní</dd>
            </div>
            <div className="fact">
              <dt>Suť</dt>
              <dd>třídíme a vozíme na skládku</dd>
            </div>
          </dl>
        </div>
      </header>

      {/* ===== SLUŽBY ===== */}
      <section className="sluzby" aria-labelledby="sluzby-h">
        <div className="wrap">
          <div className="sec-head">
            <h2 id="sluzby-h" className="sec-title">
              Co pro vás uděláme
            </h2>
            <p className="sec-lead">
              Jedna parta, vlastní stroje. Od bourání přes výkopy po hotový
              chodník — nemusíte shánět tři firmy.
            </p>
          </div>
          <ul className="sluzby-grid">
            {sluzby.map((s) => (
              <li key={s.kod} className="sluzba">
                <span className="sluzba-kod" aria-hidden="true">
                  {s.kod}
                </span>
                <h3 className="sluzba-nazev">{s.nazev}</h3>
                <p className="sluzba-popis">{s.popis}</p>
                <p className="sluzba-detail">{s.detail}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ===== JAK TO PROBÍHÁ ===== */}
      <section className="postup" aria-labelledby="postup-h">
        <div className="postup-hazard" aria-hidden="true" />
        <div className="wrap">
          <div className="sec-head">
            <h2 id="postup-h" className="sec-title sec-title-light">
              Jak probíhá demolice s námi
            </h2>
            <p className="sec-lead sec-lead-light">
              Tři kroky. Žádné překvapení na faktuře, žádná suť na vašem
              pozemku.
            </p>
          </div>
          <ol className="kroky">
            {kroky.map((k) => (
              <li key={k.cislo} className="krok">
                <span className="krok-cislo" aria-hidden="true">
                  {k.cislo}
                </span>
                <h3 className="krok-nazev">{k.nazev}</h3>
                <p className="krok-text">{k.text}</p>
              </li>
            ))}
          </ol>
          <p className="postup-pozn">
            Sídlíme na adrese Pod Rozhlednou 2982/2, Ústí nad Labem. Bouráme po
            celém Ústecku — Střekov, Krásné Březno, Trmice, Chabařovice i dál.
          </p>
        </div>
      </section>
    </main>
  );
}
