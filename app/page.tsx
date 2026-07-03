const dily = [
  {
    kod: "BRZDY",
    nazev: "Brzdové díly",
    popis: "Kotouče, destičky, čelisti a hydraulika. Bosch, ATE, Filtron — skladem nebo do druhého dne.",
  },
  {
    kod: "FILTRY",
    nazev: "Filtry a servisní díly",
    popis: "Olejové, vzduchové, kabinové a palivové filtry Filtron a Bosch pro běžné servisní intervaly.",
  },
  {
    kod: "PODVOZEK",
    nazev: "Podvozek a řízení",
    popis: "Tlumiče, ramena, čepy, silentbloky. Poradíme přesně podle VIN, ať neobjednáváte dvakrát.",
  },
  {
    kod: "DÍLNA",
    nazev: "Dílenské vybavení",
    popis: "Nářadí, zvedací technika a spotřební materiál pro autoservisy. Velkoobchodní ceny pro dílny.",
  },
  {
    kod: "HIFI",
    nazev: "Autohifi a doplňky",
    popis: "Reproduktory, zesilovače a příslušenství Blaupunkt. Doprodej skladových zásob za zvýhodněné ceny.",
  },
  {
    kod: "BOSCH",
    nazev: "Bosch vratné díly",
    popis: "Repasované startéry a alternátory ve výměnném systému. Vratnou zálohu vyřídíme na počkání.",
  },
];

const duvody = [
  {
    cislo: "466 300 379",
    label: "Zavoláte, díl najdeme",
    text: "Řeknete nám auto nebo VIN a my dohledáme přesný díl. Když si nejste jistí, vezmete dvě varianty — nepasující kus vrátíte bez řečí.",
  },
  {
    cislo: "2×",
    label: "denně rozvoz po Pardubicku",
    text: "Servisům vozíme zboží pravidelnými trasami dopoledne a odpoledne. Objednávky do 17:00 jedou hned další rozvoz.",
  },
  {
    cislo: "od r. 1994",
    label: "na stejné adrese",
    text: "U Trojice 568 nás najdete přes třicet let. Velkoobchod i pult pro koncové zákazníky — kdo přijde, odchází s dílem v ruce.",
  },
];

export default function Page() {
  return (
    <main className="pd">
      {/* ===== HERO ===== */}
      <header className="pd-hero">
        <div className="pd-hero-top">
          <span className="pd-wordmark">
            PRO<span className="pd-wordmark-cut">DAPA</span>
          </span>
          <span className="pd-hero-tag">autodíly · Pardubice</span>
        </div>

        <div className="pd-hero-main">
          <p className="pd-hero-eyebrow">Velkoobchod i pult · U Trojice 568</p>
          <h1 className="pd-hero-title">
            <span className="pd-line pd-line-1">Správný díl.</span>
            <span className="pd-line pd-line-2">
              Dnes na&nbsp;pultě,
            </span>
            <span className="pd-line pd-line-3">
              zítra v&nbsp;<em>autě</em>.
            </span>
          </h1>
          <p className="pd-hero-sub">
            Autodíly, dílenské vybavení a autohifi pro servisy i řidiče
            z&nbsp;Pardubic a okolí. Poradíme podle VIN, díl přivezeme rozvozem
            nebo ho vydáme rovnou u&nbsp;pultu.
          </p>
          <div className="pd-hero-cta">
            <a className="pd-btn pd-btn-solid" href="tel:+420466300379">
              Zavolat 466 300 379
            </a>
            <a className="pd-btn pd-btn-ghost" href="#sortiment">
              Co vedeme skladem
            </a>
          </div>
        </div>

        {/* signature: regálový štítek / skladová lišta */}
        <div className="pd-shelf" aria-hidden="true">
          <span className="pd-shelf-cell">REGÁL A · BRZDY</span>
          <span className="pd-shelf-cell">REGÁL B · FILTRY</span>
          <span className="pd-shelf-cell">REGÁL C · PODVOZEK</span>
          <span className="pd-shelf-cell">REGÁL D · ELEKTRO</span>
          <span className="pd-shelf-cell">VÝDEJ · PULT 1</span>
        </div>

        <dl className="pd-hero-facts">
          <div>
            <dt>Otevřeno</dt>
            <dd>Po–Pá 9–16, objednávky do 17:00</dd>
          </div>
          <div>
            <dt>Sobota</dt>
            <dd>9:00–10:30 výdej zboží</dd>
          </div>
          <div>
            <dt>Rozvoz</dt>
            <dd>Pardubice a okolí, pravidelné trasy</dd>
          </div>
        </dl>
      </header>

      {/* ===== SORTIMENT ===== */}
      <section className="pd-section" id="sortiment">
        <div className="pd-section-head">
          <h2>Co u nás najdete</h2>
          <p>
            Šest regálů, jeden pult. Vedeme značkové zboží Bosch, ATE, Filtron
            a Blaupunkt — pro servisy velkoobchodně, pro řidiče kus po kuse.
          </p>
        </div>
        <ul className="pd-grid">
          {dily.map((d) => (
            <li className="pd-card" key={d.kod}>
              <span className="pd-card-kod">{d.kod}</span>
              <h3>{d.nazev}</h3>
              <p>{d.popis}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* ===== DŮVĚRA ===== */}
      <section className="pd-section pd-section-dark" id="proc-my">
        <div className="pd-section-head">
          <h2>Proč servisy nakupují u nás</h2>
          <p>
            Nejsme e-shop, kde čekáte tři dny na kurýra. Jsme sklad kousek od
            centra Pardubic, kde díl buď máme, nebo ho seženeme na další rozvoz.
          </p>
        </div>
        <div className="pd-trust">
          {duvody.map((d) => (
            <article className="pd-trust-item" key={d.label}>
              <p className="pd-trust-num">{d.cislo}</p>
              <h3>{d.label}</h3>
              <p>{d.text}</p>
            </article>
          ))}
        </div>
        <p className="pd-trust-note">
          <strong>PRODAPA s.r.o.</strong> · sklad a prodejna U Trojice 568,
          530 06 Pardubice · tel. 466 300 379, 733 108 874
        </p>
      </section>
    </main>
  );
}
