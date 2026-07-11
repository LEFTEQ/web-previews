export default function Page() {
  const oblasti = [
    {
      cislo: "§ 1",
      titul: "Obchodní a korporátní právo",
      popis: "Zakládání a přeměny společností, smlouvy mezi společníky, převody obchodních podílů, valné hromady i každodenní chod firmy. Provázíme jihočeské podnikatele od první smlouvy až po prodej firmy."
    },
    {
      cislo: "§ 2",
      titul: "Nemovitosti a katastr",
      popis: "Kupní a darovací smlouvy, advokátní úschova kupní ceny, věcná břemena, zástavy a zápisy do katastru nemovitostí. Byt v Budějovicích nebo pozemek na Šumavě — ohlídáme celý převod."
    },
    {
      cislo: "§ 3",
      titul: "Spory a zastupování u soudu",
      popis: "Zastoupení před okresním i krajským soudem, vymáhání pohledávek, rozhodčí a exekuční řízení. Než podáme žalobu, spočítáme, zda se vyplatí — a řekneme vám to na rovinu."
    },
    {
      cislo: "§ 4",
      titul: "Rodinné právo",
      popis: "Rozvody, úprava péče o děti a výživné, majetkové vypořádání. Citlivá agenda, u které jde o klid vaší rodiny — vedeme ji věcně a bez zbytečné eskalace."
    },
    {
      cislo: "§ 5",
      titul: "Trestní obhajoba",
      popis: "Obhajoba v přípravném řízení i před soudem, zastupování poškozených. Jsme dosažitelní i mimo úřední hodiny — u trestní věci rozhoduje první hodina."
    },
    {
      cislo: "§ 6",
      titul: "Pracovní právo",
      popis: "Pracovní smlouvy, ukončení pracovního poměru, náhrada škody a spory ze zaměstnání. Radíme zaměstnavatelům i zaměstnancům — vždy jen jedné straně sporu."
    }
  ];

  const duvody = [
    {
      k: "Od roku 1998",
      v: "Přes pětadvacet let právní praxe v Českých Budějovicích. Známe zdejší soudy, katastrální úřad i úřady — víme, kudy vede nejkratší cesta."
    },
    {
      k: "Jeden advokát, jedna věc",
      v: "Vaši věc vede konkrétní advokát, ne anonymní tým. Voláte přímo tomu, kdo váš spis zná od začátku do konce."
    },
    {
      k: "Cena předem",
      v: "Na první schůzce si vyjasníme rozsah i odměnu. Hodinovou sazbu i paušál dohodneme písemně dřív, než začneme pracovat."
    }
  ];

  return (
    <main className="nb">
      <header className="nb-top">
        <a className="nb-mark" href="#uvod" aria-label="NEUBAUER &amp; PARTNER, advokátní kancelář — úvod">
          <span className="nb-mark-name">Neubauer<span className="nb-amp">&amp;</span>Partner</span>
          <span className="nb-mark-sub">advokátní kancelář · České Budějovice</span>
        </a>
        <a className="nb-call" href="tel:+420387435511">+420 387 435 511</a>
      </header>

      <section className="nb-hero" id="uvod">
        <div className="nb-hero-media">
          <img src="/hero.webp" alt="Interiér advokátní kanceláře Neubauer &amp; Partner v Českých Budějovicích" />
        </div>
        <div className="nb-hero-body">
          <p className="nb-eyebrow">Advokátní kancelář · České Budějovice</p>
          <h1 className="nb-h1">
            Řešíme to, <span className="nb-h1-accent">co vás nenechá spát.</span>
          </h1>
          <p className="nb-lead">
            Smlouva, spor se sousedem, převod bytu nebo rozvod — ať vás přivede cokoli,
            dostanete jasnou odpověď a advokáta, který u vaší věci zůstane až do konce.
            Bez právničtiny, se kterou byste stejně museli za někoho dalšího.
          </p>
          <div className="nb-hero-actions">
            <a className="nb-btn" href="tel:+420387435511">Zavolat advokátovi</a>
            <a className="nb-btn-ghost" href="mailto:info@ak-cb.cz">Napsat e-mail</a>
          </div>
          <dl className="nb-hero-facts">
            <div><dt>Praxe</dt><dd>od 1998</dd></div>
            <div><dt>Sídlo</dt><dd>České Budějovice</dd></div>
            <div><dt>Jazyky</dt><dd>CZ · EN · DE</dd></div>
          </dl>
        </div>
      </section>

      <section className="nb-oblasti" aria-labelledby="oblasti-nadpis">
        <div className="nb-sec-head">
          <p className="nb-eyebrow">Právní oblasti</p>
          <h2 id="oblasti-nadpis" className="nb-h2">S čím za námi lidé chodí</h2>
          <p className="nb-sec-lead">
            Nejsme kancelář na všechno. Soustředíme se na šest oblastí, ve kterých
            máme v jižních Čechách odjeté stovky případů. Vyberte, co se týká vás.
          </p>
        </div>
        <ul className="nb-grid">
          {oblasti.map((o) => (
            <li className="nb-card" key={o.cislo}>
              <span className="nb-card-num">{o.cislo}</span>
              <h3 className="nb-card-titul">{o.titul}</h3>
              <p className="nb-card-popis">{o.popis}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="nb-duvera" aria-labelledby="duvera-nadpis">
        <div className="nb-duvera-media">
          <img src="/section-1.webp" alt="Advokát při konzultaci s klientem" />
          <img src="/section-2.webp" alt="Právní dokumenty a podpis smlouvy" className="nb-duvera-img2" />
        </div>
        <div className="nb-duvera-body">
          <p className="nb-eyebrow">Proč právě my</p>
          <h2 id="duvera-nadpis" className="nb-h2">Vedeme spisy, ne řeči</h2>
          <dl className="nb-duvera-list">
            {duvody.map((d) => (
              <div className="nb-duvera-item" key={d.k}>
                <dt>{d.k}</dt>
                <dd>{d.v}</dd>
              </div>
            ))}
          </dl>
          <blockquote className="nb-quote">
            „Přišli jsme s nefunkční kupní smlouvou tři dny před podpisem. Přepsali
            ji přes noc a úschovu vyřídili u sebe. Byt máme.“
            <cite>— manželé Vávrovi, převod bytu na Pražském předměstí</cite>
          </blockquote>
        </div>
      </section>
    </main>
  );
}
