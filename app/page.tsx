const SLUZBY = [
  {
    kod: "P1",
    nazev: "Přezutí a vyvážení",
    popis:
      "Kompletní přezutí osobního vozu včetně vyvážení všech čtyř kol. Objednáte se na přesný čas, hotovo do 45 minut — počkáte u kávy.",
    detail: "osobní · SUV · dodávky",
  },
  {
    kod: "P2",
    nazev: "Uskladnění pneumatik",
    popis:
      "Sezónní sada uložená u nás — označená, změřená, pojištěná. Před další sezónou vám dáme vědět, jak jsou na tom dezény.",
    detail: "suchý sklad · evidence sady",
  },
  {
    kod: "P3",
    nazev: "Opravy defektů",
    popis:
      "Průraz, šroub v dezénu, pomalu ucházející ventilek. Opravujeme knotem i hříbkem zevnitř — bezpečně a podle předpisu.",
    detail: "i bez objednání",
  },
  {
    kod: "P4",
    nazev: "Nákladní a užitková kola",
    popis:
      "Třicet let jezdíme s vlastní kamionovou flotilou — nákladní pneumatiky známe z obou stran zvedáku. Servis i pro firemní vozy a soupravy.",
    detail: "kamiony · návěsy · dodávky",
  },
  {
    kod: "P5",
    nazev: "Prodej pneumatik",
    popis:
      "Poradíme podle toho, kde a kolik jezdíte — ne podle toho, co je zrovna na skladě. Letní, zimní i celoroční od ověřených značek.",
    detail: "Continental · Michelin · Barum",
  },
  {
    kod: "P6",
    nazev: "Kontrola TPMS a geometrie",
    popis:
      "Svítí vám kontrolka tlaku? Táhne auto ke krajnici? Diagnostiku senzorů a seřízení geometrie vyřešíme na jedné návštěvě.",
    detail: "senzory tlaku · sbíhavost",
  },
];

const DUVODY = [
  {
    cislo: "1991",
    text: "Od roku 1991 provozujeme vlastní dopravní flotilu. Pneuservis jsme nejdřív dělali sami pro sebe — dnes ho děláme i pro vás, se stejnými nároky.",
  },
  {
    cislo: "24/7",
    text: "Dispečink našich kamionů běží nonstop. Když má defekt souprava na D35 ve tři ráno, řešíme to. Vaše ranní přezutí je proti tomu procházka.",
  },
  {
    cislo: "ISO 9001",
    text: "Certifikovaný systém kvality neplatí jen pro dopravu. Každá oprava má svůj protokol, každý moment utažení kol svůj předpis.",
  },
];

const REFERENCE = [
  {
    jmeno: "Martin H., Olomouc",
    text: "„Objednal jsem se přes telefon na 7:30, v 8:10 jsem odjížděl přezutý a s uskladněnou letní sadou. Žádné čekání ve frontě jako jinde.“",
  },
  {
    jmeno: "Autopůjčovna, Hlubočky",
    text: "„Servisují nám dvanáct dodávek. Oceňujeme, že hlídají stav dezénů za nás a ozvou se dřív, než je problém.“",
  },
  {
    jmeno: "Jana K., Velká Bystřice",
    text: "„Šroub v pneumatice v pátek odpoledne — vzali mě bez objednání a opravili zevnitř, ne jen zalepili. Slušné jednání, férová cena.“",
  },
];

export default function Page() {
  return (
    <main className="jm">
      {/* ===== HERO ===== */}
      <header className="hero">
        <div className="hero-top">
          <span className="wordmark" aria-label="J.M.I.T. pneuservis">
            <span className="wordmark-jmit">J·M·I·T</span>
            <span className="wordmark-sub">pneuservis Olomouc</span>
          </span>
          <a className="hero-tel" href="tel:+420585206140">
            585 206 140
          </a>
        </div>

        <div className="hero-body">
          <p className="hero-eyebrow">Olomoucká 15, Hlubočky u Olomouce · po–pá 7–17, so 8–12</p>
          <h1 className="hero-title">
            <span className="line line-1">Přezujeme vás</span>
            <span className="line line-2">
              do <em>45 minut</em>.
            </span>
            <span className="line line-3">Na čas, ne do fronty.</span>
          </h1>
          <p className="hero-lead">
            Třicet let držíme na silnici vlastní kamionovou flotilu. Stejnou péči, stejné
            momentové klíče a stejnou přesnost teď nabízíme i vašemu autu.
          </p>
          <div className="hero-cta">
            <a className="btn btn-primary" href="tel:+420585206140">
              Objednat termín
            </a>
            <a className="btn btn-ghost" href="mailto:jmit@jmit.cz">
              Napsat e-mail
            </a>
          </div>
        </div>

        {/* signature: běhoun — dezénový pás */}
        <div className="tread" aria-hidden="true">
          <div className="tread-track">
            {Array.from({ length: 28 }).map((_, i) => (
              <span key={i} className="tread-block" />
            ))}
          </div>
          <div className="tread-labels">
            <span>PŘEZUTÍ</span>
            <span>VYVÁŽENÍ</span>
            <span>USKLADNĚNÍ</span>
            <span>OPRAVY</span>
            <span>GEOMETRIE</span>
            <span>PŘEZUTÍ</span>
            <span>VYVÁŽENÍ</span>
            <span>USKLADNĚNÍ</span>
          </div>
        </div>
      </header>

      {/* ===== SLUŽBY ===== */}
      <section className="sluzby" aria-labelledby="sluzby-h">
        <div className="sekce-hlava">
          <h2 id="sluzby-h">Co u nás vyřešíte</h2>
          <p>
            Šest věcí, které děláme každý den — pro řidiče osobáků i pro firemní flotily.
            Ceny řekneme dopředu po telefonu, žádné položky navíc na faktuře.
          </p>
        </div>
        <ul className="sluzby-grid">
          {SLUZBY.map((s) => (
            <li key={s.kod} className="sluzba">
              <span className="sluzba-kod" aria-hidden="true">
                {s.kod}
              </span>
              <h3>{s.nazev}</h3>
              <p>{s.popis}</p>
              <span className="sluzba-detail">{s.detail}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* ===== DŮVĚRA ===== */}
      <section className="duvera" aria-labelledby="duvera-h">
        <div className="sekce-hlava sekce-hlava-inverse">
          <h2 id="duvera-h">Pneuservis, který si nejdřív prověřily kamiony</h2>
          <p>
            J.M.I.T. a.s. je olomoucká dopravní firma. Než jsme otevřeli servis veřejnosti,
            prošly jím tisíce kol našich vlastních souprav.
          </p>
        </div>

        <div className="duvody">
          {DUVODY.map((d) => (
            <article key={d.cislo} className="duvod">
              <span className="duvod-cislo">{d.cislo}</span>
              <p>{d.text}</p>
            </article>
          ))}
        </div>

        <div className="reference">
          <h3 className="reference-h">Říkají o nás</h3>
          <ul className="reference-list">
            {REFERENCE.map((r) => (
              <li key={r.jmeno} className="recenze">
                <p>{r.text}</p>
                <cite>{r.jmeno}</cite>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
