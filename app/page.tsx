const kolekce = [
  {
    kod: "BT",
    nazev: "Bavlněné tisky",
    popis:
      "Přes 30 řad potiskovaných bavlněných pláten — od klasických vzorů po zlaté a stříbrné tisky (D3, H2) a certifikované GOTS bavlny (D4).",
    detail: "šíře 140–160 cm · 100 % bavlna",
  },
  {
    kod: "RV",
    nazev: "Režný vzhled",
    popis:
      "Směsové látky bavlna + polyester s režným charakterem — nejširší nabídka v ČR i SR. Včetně DOBBY vazeb a voděodolných úprav pro interiér.",
    detail: "20+ řad · exkluzivní zastoupení",
  },
  {
    kod: "PO",
    nazev: "Popelíny",
    popis:
      "Jemné oděvní popelíny — UNI barvy, digitální tisky, bambusové směsi i řady se zlatým a stříbrným potiskem. Řady N, D, Q a H.",
    detail: "digi tisk · GOTS · bamboo",
  },
  {
    kod: "KA",
    nazev: "Kanafasy",
    popis:
      "Tradiční česká tkanina v moderním podání — pravé yarn dyed kanafasy N1 i tištěné varianty se zlatem pro sváteční šití.",
    detail: "yarn dyed · tisk · zlato",
  },
  {
    kod: "LO",
    nazev: "Lonety",
    popis:
      "Pevné dekorační lonety pro závěsy, ubrusy a potahy — čtrnáct řad od výrobců A, M, B, TM a dalších evropských tkalcoven.",
    detail: "interiér · vysoká gramáž",
  },
  {
    kod: "JE",
    nazev: "Úplety a teplákoviny",
    popis:
      "Jersey úplety a French terry teplákoviny — stovky vzorů pro šití dětského i dospělého oblečení, průběžně doplňované novinky.",
    detail: "jersey · french terry · voály",
  },
];

const duvody = [
  {
    rok: "1996",
    titulek: "Na trhu od roku 1996",
    text: "Vyrábíme a dovážíme látky přes čtvrt století. Známe české šicí dílny, patchworkářky i interiérová studia — a víme, co potřebují.",
  },
  {
    rok: "CZ+SK",
    titulek: "Exkluzivní zastoupení",
    text: "U řady evropských tkalcoven máme úplnou nebo částečnou exkluzivitu pro český a slovenský trh. Tyto látky jinde nekoupíte.",
  },
  {
    rok: "№ 1",
    titulek: "Nejširší nabídka režných směsovek",
    text: "V sortimentu směsových látek s režným vzhledem a digitálních tisků držíme nejširší nabídku v ČR i SR — za velkoobchodní ceny.",
  },
  {
    rok: "🚚",
    titulek: "Vlastní rozvoz po ČR a SR",
    text: "Zboží vozíme pravidelnými trasami vlastní dopravou. Objednáte, my naložíme role a přivezeme až k vám do dílny nebo prodejny.",
  },
];

export default function Page() {
  return (
    <main className="of-main">
      {/* ===== HERO ===== */}
      <header className="of-hero">
        <div className="of-selvedge" aria-hidden="true">
          <span>OASA FABRICS · LIBEREC · OASA FABRICS · LIBEREC · OASA FABRICS · LIBEREC · OASA FABRICS · LIBEREC</span>
        </div>

        <div className="of-hero-inner">
          <div className="of-brand">
            <span className="of-brand-mark" aria-hidden="true">
              <i></i><i></i><i></i>
            </span>
            <span className="of-brand-name">
              OASA <em>FABRICS</em>
            </span>
            <span className="of-brand-tag">velkoobchod látek · Liberec</span>
          </div>

          <h1 className="of-h1">
            <span className="of-h1-line of-h1-line--1">Metráž,</span>
            <span className="of-h1-line of-h1-line--2">kterou jinde</span>
            <span className="of-h1-line of-h1-line--3">
              ne<span className="of-thread">u</span>střihnete.
            </span>
          </h1>

          <p className="of-lede">
            Vyrábíme a dovážíme bavlněné tisky, režné směsovky, popelíny a lonety
            od roku 1996. Část kolekcí držíme exkluzivně pro český a slovenský
            trh — a rozvážíme je vlastní dopravou po celé ČR i SR.
          </p>

          <div className="of-hero-actions">
            <a className="of-btn of-btn--fill" href="#kolekce">
              Prohlédnout kolekce
            </a>
            <a className="of-btn of-btn--line" href="tel:+420608124442">
              Zavolat velkoobchodu
            </a>
          </div>

          <dl className="of-hero-facts">
            <div>
              <dt>Tradice</dt>
              <dd>od 1996</dd>
            </div>
            <div>
              <dt>Vzorkovna</dt>
              <dd>Liberec</dd>
            </div>
            <div>
              <dt>Řad metráže</dt>
              <dd>120+</dd>
            </div>
          </dl>
        </div>

        {/* signature: tkalcovská osnova — svislé nitě, přes které se „protkává“ útek */}
        <div className="of-warp" aria-hidden="true">
          <span></span><span></span><span></span><span></span><span></span>
          <span></span><span></span><span></span><span></span><span></span>
          <span></span><span></span>
          <b className="of-weft of-weft--1"></b>
          <b className="of-weft of-weft--2"></b>
          <b className="of-weft of-weft--3"></b>
        </div>
      </header>

      {/* ===== KOLEKCE ===== */}
      <section className="of-section" id="kolekce" aria-labelledby="kolekce-h">
        <div className="of-section-head">
          <p className="of-eyebrow">Sortiment velkoobchodu</p>
          <h2 className="of-h2" id="kolekce-h">
            Šest rodin látek, přes 120 řad metráže
          </h2>
          <p className="of-section-lede">
            Kódy řad znáte z našich vzorníků — BT jako bavlněný tisk, RV jako
            režný vzhled. Kompletní vzorníky evropských tkalcoven najdete naživo
            ve vzorkovně v Liberci.
          </p>
        </div>

        <ul className="of-grid" role="list">
          {kolekce.map((k) => (
            <li className="of-card" key={k.kod}>
              <span className="of-card-kod" aria-hidden="true">
                {k.kod}
              </span>
              <h3>{k.nazev}</h3>
              <p>{k.popis}</p>
              <span className="of-card-detail">{k.detail}</span>
            </li>
          ))}
        </ul>

        <p className="of-note">
          Novinky doplňujeme průběžně — naposledy teplákoviny French terry Q2 a
          Q3, letní voály a 150 nových vzorů úpletů jersey.
        </p>
      </section>

      {/* ===== DŮVĚRA ===== */}
      <section className="of-section of-section--dark" aria-labelledby="duvera-h">
        <div className="of-section-head">
          <p className="of-eyebrow of-eyebrow--light">Proč od nás</p>
          <h2 className="of-h2" id="duvera-h">
            Velkoobchod, který zná každou svou roli látky
          </h2>
        </div>

        <div className="of-duvody">
          {duvody.map((d) => (
            <article className="of-duvod" key={d.titulek}>
              <span className="of-duvod-rok" aria-hidden="true">
                {d.rok}
              </span>
              <h3>{d.titulek}</h3>
              <p>{d.text}</p>
            </article>
          ))}
        </div>

        <aside className="of-vzorkovna">
          <div className="of-vzorkovna-text">
            <h3>Přijeďte si sáhnout</h3>
            <p>
              Látka se vybírá rukama. Ve vzorkovně a velkoobchodním skladu v
              Liberci si projdete celou nabídku naživo — včetně kompletních
              vzorníků renomovaných evropských výrobců, které dodáváme
              exkluzivně na český a slovenský trh.
            </p>
            <p className="of-vzorkovna-kontakt">
              <strong>Ing. Petr Ducký</strong> · jednatel ·{" "}
              <a href="tel:+420608124442">+420 608 124 442</a>
              <br />
              <a href="mailto:oasa@czlatky.cz">oasa@czlatky.cz</a> · OASA
              FABRICS s.r.o., Liberec
            </p>
          </div>
          <div className="of-vzorkovna-swatch" aria-hidden="true">
            <span className="sw sw--1"></span>
            <span className="sw sw--2"></span>
            <span className="sw sw--3"></span>
            <span className="sw sw--4"></span>
          </div>
        </aside>
      </section>
    </main>
  );
}
