const sluzby = [
  {
    krok: "Zaměření",
    nazev: "Přijedeme a změříme",
    popis:
      "Do tří dnů od zavolání jsme u vás v Brně. Změříme koupelnu, projdeme rozvody vody a elektřiny a řekneme na rovinu, co jde a co ne — třeba jestli se do vašeho jádra vejde vana i pračka.",
    detail: "zdarma, cca 45 minut",
  },
  {
    krok: "Návrh a rozpočet",
    nazev: "Rozpočet na položku přesně",
    popis:
      "Dostanete rozpis po položkách: bourání, izolace, obklady, sanita, elektro. Žádné „od–do“. Cena, kterou podepíšeme, je cena, kterou zaplatíte.",
    detail: "do 7 dnů od zaměření",
  },
  {
    krok: "Bourání jádra",
    nazev: "Umakart pryč za jeden den",
    popis:
      "Staré panelákové jádro vybouráme a odvezeme vlastními auty. Suť nenecháme na chodbě ani den — sousedé si stěžovat nebudou.",
    detail: "včetně odvozu suti",
  },
  {
    krok: "Voda, elektro, izolace",
    nazev: "Rozvody nové, ne záplatované",
    popis:
      "Nové stoupačky napojíme, elektriku vedeme podle vyhlášky 50/1978 Sb. — školení máme každý rok. Hydroizolaci taháme na stěny i podlahu, sprchový kout dvakrát.",
    detail: "revize v ceně",
  },
  {
    krok: "Obklady a dlažba",
    nazev: "Spára jako podle pravítka",
    popis:
      "Řežeme na vlastní pile, ne lámačkou. Velkoformát, mozaika i obkleďačské detaily kolem vany a niky — obkladač u nás dělá jen obklady, nic jiného.",
    detail: "formáty do 120 × 60 cm",
  },
  {
    krok: "Sanita a předání",
    nazev: "Předáme s tekoucí vodou",
    popis:
      "Zapojíme vanu, sprchu, WC i pračku, vyspárujeme, uklidíme a předáme protokolem. Záruku dáváme podle zákona a stojíme si za ní — jsme z Brna, neschováte se před námi, ani my před vámi.",
    detail: "záruka dle zákona",
  },
];

const duvera = [
  {
    cislo: "2005",
    text: "Firmu založil Luboš Schrámek v lednu 2005. Dvacet let stejný jednatel, stejné telefonní číslo, stejná adresa na Střelnici.",
  },
  {
    cislo: "10–14 dní",
    text: "Tak dlouho trvá běžná rekonstrukce panelákové koupelny od vybourání jádra po předání. Termín píšeme do smlouvy.",
  },
  {
    cislo: "BOSCH + HILTI",
    text: "Bourací a vrtací kladiva, drážkovačky, brusky — celá profi řada. Vlastní nářadí a vlastní auta znamenají, že nečekáme na půjčovnu ani na dopravce.",
  },
  {
    cislo: "§ certifikace",
    text: "Pravidelná školení elektro dle vyhl. 50/1978 Sb. a certifikát na těsnění protipožárních prostupů — jeden z mála v republice.",
  },
];

const reference = [
  {
    misto: "Brno-Líšeň, panelák",
    text: "„Jádro vybourali v pondělí, za dvanáct dní jsme se sprchovali v novém. Suť odvezli ještě ten den, na chodbě po nich nezůstalo nic.“",
    kdo: "paní Horáková, 3+1",
  },
  {
    misto: "Brno-Bystrc, cihlový dům",
    text: "„Rozpočet seděl na korunu. Když se pod starou dlažbou objevila shnilá podlaha, zavolali, ukázali fotky a domluvili jsme se dřív, než pokračovali.“",
    kdo: "pan Dvořák, koupelna + WC",
  },
  {
    misto: "Brno-Královo Pole, byt 2+kk",
    text: "„Chtěli jsme velkoformátovou dlažbu a niku ve sprše. Obkladač si s tím pohrál — spáry navazují přes roh, to jsem jinde neviděla.“",
    kdo: "paní Svobodová",
  },
];

export default function Page() {
  return (
    <main className="ko">
      {/* ================= HERO ================= */}
      <header className="hero">
        <div className="hero-grid" aria-hidden="true"></div>

        <div className="hero-inner">
          <div className="hero-top">
            <span className="wordmark">
              LuSo<span className="wordmark-plus">+</span>
            </span>
            <span className="hero-loc">Brno · Střelnice 19</span>
          </div>

          <h1 className="hero-title">
            <span className="hero-line hero-line-1">Vaše koupelna</span>
            <span className="hero-line hero-line-2">
              dosloužila<span className="tecka">.</span>
            </span>
            <span className="hero-line hero-line-3">Postavíme novou.</span>
          </h1>

          <p className="hero-sub">
            Rekonstrukce koupelen a bytových jader v Brně a okolí. Od vybourání
            umakartu po poslední spáru — jedna parta, jeden rozpočet, 10 až 14 dní.
          </p>

          <div className="hero-cta">
            <a className="btn btn-hlavni" href="tel:+420544217656">
              Zavolat 544 217 656
            </a>
            <a className="btn btn-vedlejsi" href="mailto:info@lusoplus.cz">
              Napsat e‑mail
            </a>
          </div>

          <p className="hero-pozn">
            Zaměření a nabídka zdarma · působíme po celém Brně
          </p>
        </div>

        {/* signature: pás „obkladů" — spárořez jako grafický motiv */}
        <div className="sparovka" aria-hidden="true">
          <span className="kachle k1"></span>
          <span className="kachle k2"></span>
          <span className="kachle k3"></span>
          <span className="kachle k4"></span>
          <span className="kachle k5"></span>
          <span className="kachle k6"></span>
          <span className="kachle k7"></span>
          <span className="kachle k8"></span>
        </div>
      </header>

      {/* ================= SLUŽBY / POSTUP ================= */}
      <section className="sekce postup" aria-labelledby="postup-nadpis">
        <div className="sekce-inner">
          <p className="eyebrow">Jak rekonstrukce probíhá</p>
          <h2 id="postup-nadpis" className="sekce-nadpis">
            Šest kroků od umakartu k&nbsp;obkladům
          </h2>
          <p className="sekce-uvod">
            Každá koupelna projde stejnou cestou. Díky tomu víme dopředu, co kdy
            přijde — a vy taky.
          </p>

          <ol className="postup-list">
            {sluzby.map((s, i) => (
              <li key={s.krok} className="postup-item">
                <div className="postup-znacka" aria-hidden="true">
                  <span className="postup-cislo">{i + 1}</span>
                  <span className="postup-spara"></span>
                </div>
                <div className="postup-obsah">
                  <p className="postup-krok">{s.krok}</p>
                  <h3 className="postup-nazev">{s.nazev}</h3>
                  <p className="postup-popis">{s.popis}</p>
                  <p className="postup-detail">{s.detail}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ================= DŮVĚRA / REFERENCE ================= */}
      <section className="sekce duvera" aria-labelledby="duvera-nadpis">
        <div className="sekce-inner">
          <p className="eyebrow eyebrow-svetly">Proč LuSo plus</p>
          <h2 id="duvera-nadpis" className="sekce-nadpis sekce-nadpis-svetly">
            Dvacet let stejná firma, stejné číslo
          </h2>

          <dl className="fakta">
            {duvera.map((f) => (
              <div key={f.cislo} className="fakt">
                <dt className="fakt-cislo">{f.cislo}</dt>
                <dd className="fakt-text">{f.text}</dd>
              </div>
            ))}
          </dl>

          <h3 className="ref-nadpis">Co říkají lidé, kterým jsme koupelnu udělali</h3>

          <div className="ref-list">
            {reference.map((r) => (
              <figure key={r.misto} className="ref">
                <figcaption className="ref-misto">{r.misto}</figcaption>
                <blockquote className="ref-text">{r.text}</blockquote>
                <p className="ref-kdo">— {r.kdo}</p>
              </figure>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
