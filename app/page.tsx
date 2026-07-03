// Čečetka s.r.o. — obkladačství, České Budějovice
// Náhledový web: hero + 2 sekce. Signature: obkladová mřížka (spára jako grafický systém).

const sluzby = [
  {
    format: "60 × 60",
    nazev: "Koupelny na klíč",
    popis:
      "Od vybourání staré vany po poslední spárovanou řadu. Hydroizolace, obklad, dlažba, silikonování — jedna parta, jeden termín, jedna odpovědnost.",
  },
  {
    format: "120 × 60",
    nazev: "Velkoformátová dlažba",
    popis:
      "Formáty 120 × 60 a větší klademe na systémové nivelační spony. Rovina, kterou poznáte bosou nohou — žádné zvednuté hrany, žádné duté zvuky pod dlaždicí.",
  },
  {
    format: "10 × 10",
    nazev: "Kuchyně a zástěny",
    popis:
      "Obklad za linku, který snese vaření i čištění. Mozaika, metro obklad nebo retro kachle — spáry srovnané na milimetr, řezy schované tam, kam patří.",
  },
  {
    format: "30 × 30",
    nazev: "Terasy a balkony",
    popis:
      "Mrazuvzdorná dlažba do exteriéru s odvodněním a správným spádem. Terasa, která přežije budějovickou zimu bez prasklé spáry.",
  },
  {
    format: "× kus",
    nazev: "Opravy a dokládky",
    popis:
      "Prasklá dlaždice, dutý obklad, vydrolená spára. Přijedeme i na menší zakázku — doložíme, přespárujeme, dotmelíme. I jedna dlaždice je zakázka.",
  },
  {
    format: "∅ 200",
    nazev: "Vrtání a řezání",
    popis:
      "Diamantové vrtání prostupů do keramiky i slinuté dlažby bez prasklin. Řezy na mokré pile přímo na stavbě — přesně na váš rozměr.",
  },
];

const zasady = [
  {
    krok: "Podklad",
    text: "Než položíme první dlaždici, změříme rovinnost a vlhkost podkladu. Křivý podklad znamená křivý obklad — proto začínáme penetrací a stěrkou, ne lepidlem.",
  },
  {
    krok: "Izolace",
    text: "V koupelně nikdy nevynecháme hydroizolační stěrku a pásky v koutech. To, co není vidět, rozhoduje o tom, jestli za pět let neřešíte plíseň u souseda pod vámi.",
  },
  {
    krok: "Kladení",
    text: "Lepidlo nanášíme celoplošně, ne na buchty. Každou dlaždici poklepeme — dutý zvuk znamená znovu. Spáru držíme v jedné linii přes celou stěnu i podlahu.",
  },
  {
    krok: "Spára",
    text: "Spárujeme až po vyzrání lepidla, kouty a přechody uzavíráme sanitárním silikonem. Předáváme čisté dílo — po nás se neuklízí, po nás se bydlí.",
  },
];

const reference = [
  {
    misto: "Rodinný dům, Rožnov",
    text: "Koupelna 8 m², velkoformát 120 × 60 na stěnách. Pan Čečetka nás upozornil na křivou zeď dřív, než jsme ji viděli my. Vyrovnali, obložili, hotovo za 9 dní.",
    jmeno: "manželé Novotných",
  },
  {
    misto: "Bytový dům, Pražská tř.",
    text: "Tři koupelny po sobě, vždy termín na den přesně. Spáry navazují přes roh — to jsem u předchozí firmy neviděl. Doporučuji dalším vlastníkům v domě.",
    jmeno: "p. Šindelář, předseda SVJ",
  },
  {
    misto: "Kavárna, centrum Č. Budějovic",
    text: "Retro dlažba 10 × 10 ve dvou barvách podle našeho návrhu. Vzor si nejdřív rozložili nasucho a vyfotili nám ho ke schválení. Přesně tohle je řemeslo.",
    jmeno: "provozní kavárny",
  },
];

export default function Page() {
  return (
    <main className="page">
      {/* ===================== HERO ===================== */}
      <header className="hero">
        <div className="hero-grid" aria-hidden="true">
          {/* obkladová mřížka — signature prvek: spáry jako grafický systém */}
          <span className="tile t1" />
          <span className="tile t2" />
          <span className="tile t3" />
          <span className="tile t4" />
          <span className="tile t5" />
          <span className="tile t6" />
          <span className="tile t7" />
          <span className="tile t8" />
        </div>

        <div className="hero-inner">
          <div className="brandline">
            <span className="wordmark">
              ČEČETKA<span className="wordmark-dot">▪</span>
            </span>
            <span className="brand-sub">obkladačství · České Budějovice</span>
          </div>

          <h1 className="hero-title">
            <span className="line l1">Rovná spára</span>
            <span className="line l2">
              se pozná <em>bosou nohou.</em>
            </span>
          </h1>

          <p className="hero-lead">
            Obklady a dlažby v Českých Budějovicích a okolí. Koupelny, kuchyně,
            terasy — od hydroizolace po poslední silikonovou spáru, jedna parta
            a jeden pevný termín.
          </p>

          <ul className="hero-facts" aria-label="Základní údaje">
            <li>
              <strong>±1 mm</strong>
              <span>tolerance roviny na 2 m lati</span>
            </li>
            <li>
              <strong>Č. Budějovice</strong>
              <span>dojezd do 30 km zdarma</span>
            </li>
            <li>
              <strong>záruka 5 let</strong>
              <span>na položenou práci písemně</span>
            </li>
          </ul>
        </div>
      </header>

      {/* ===================== SLUŽBY ===================== */}
      <section className="sluzby" aria-labelledby="sluzby-h">
        <div className="section-head">
          <p className="eyebrow">Co pokládáme</p>
          <h2 id="sluzby-h">Každý formát má svoje pravidla. Známe je všechny.</h2>
          <p className="section-lead">
            Štítek u každé služby je formát dlaždice v centimetrech — protože o
            formátu je v obkladačství všechno: lepidlo, spára, nářadí i cena.
          </p>
        </div>

        <div className="sluzby-grid">
          {sluzby.map((s) => (
            <article className="sluzba" key={s.nazev}>
              <span className="format">{s.format}</span>
              <h3>{s.nazev}</h3>
              <p>{s.popis}</p>
            </article>
          ))}
        </div>
      </section>

      {/* ===================== ŘEMESLO + REFERENCE ===================== */}
      <section className="remeslo" aria-labelledby="remeslo-h">
        <div className="section-head inverse">
          <p className="eyebrow">Jak pracujeme</p>
          <h2 id="remeslo-h">Čtyři vrstvy, na kterých obklad stojí</h2>
          <p className="section-lead">
            Obklad je souvrství — a drží jen tak dobře, jak dobrá je vrstva pod
            ním. Tohle je pořadí, které nikdy nepřeskakujeme.
          </p>
        </div>

        <ol className="vrstvy">
          {zasady.map((z, i) => (
            <li className="vrstva" key={z.krok}>
              <span className="vrstva-cislo" aria-hidden="true">
                {i + 1}. vrstva
              </span>
              <h3>{z.krok}</h3>
              <p>{z.text}</p>
            </li>
          ))}
        </ol>

        <div className="reference">
          <h3 className="reference-h">Napsali nám po předání</h3>
          <div className="reference-grid">
            {reference.map((r) => (
              <blockquote className="refka" key={r.misto}>
                <p className="refka-misto">{r.misto}</p>
                <p className="refka-text">„{r.text}“</p>
                <footer className="refka-jmeno">— {r.jmeno}</footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
