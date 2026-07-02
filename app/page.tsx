// SAS nábytek — stolařství Brno, Ing. Pavel Sedláček
// Statický náhled: hero + služby + důvěra/reference

const sluzby = [
  {
    nazev: "Kuchyně na míru",
    popis:
      "Od prvního zaměření po zapojení spotřebičů. Pracovní deska, korpusy i dvířka přesně podle vašeho půdorysu — i v panelákovém bytě.",
    material: "lamino / dýha / masiv",
  },
  {
    nazev: "Vestavěné skříně",
    popis:
      "Skříň, která využije každý centimetr — do zkosených podkroví, výklenků i kolem dveří. Posuvné i otevírací systémy.",
    material: "lamino / lakovaná MDF",
  },
  {
    nazev: "Obývací pokoje",
    popis:
      "Knihovny, TV stěny a komody, které drží linku celé místnosti. Skrytá kabeláž, tlumené dovírání, LED osvětlení.",
    material: "dýha / masiv / lamino",
  },
  {
    nazev: "Postele a ložnice",
    popis:
      "Postel v atypickém rozměru, úložné prostory pod matrací, noční stolky ze stejného materiálu jako skříň.",
    material: "masiv / lamino",
  },
  {
    nazev: "Koupelnový nábytek",
    popis:
      "Skříňky pod umyvadlo a zrcadlové stěny z materiálů, které snesou vlhko. Přesně kolem vašich rozvodů.",
    material: "voděodolná MDF",
  },
  {
    nazev: "Stoly a kanceláře",
    popis:
      "Jídelní a pracovní stoly na míru, recepce, prodejny a hotelové pokoje. Řešíme i větší série pro firmy.",
    material: "masiv / dýha / HPL",
  },
]

const reference = [
  {
    jmeno: "Blanka A.",
    text: "Zadali jsme kompletní realizaci studentského pokoje. Pan Sedláček odvedl výbornou práci, použil kvalitní materiál a cena byla příznivá. Ceníme si i toho, že zorganizoval návaznost elektrikáře a malíře.",
    realizace: "studentský pokoj",
  },
  {
    jmeno: "Aleš P.",
    text: "Novou kuchyň nám realizoval před třemi lety a dodnes jsme velmi spokojení. Dodaná v domluvené kvalitě a s ohledem na rozpočet, který jsme tehdy chtěli investovat.",
    realizace: "kuchyň na míru",
  },
  {
    jmeno: "Jana Š.",
    text: "Máme od pana Sedláčka vybavené skoro všechny pokoje a jsme skutečně nadšení. Pochvaly od kamarádů byly tak upřímné, že si u něj někteří nábytek objednali také.",
    realizace: "celý byt postupně",
  },
  {
    jmeno: "Lukáš R.",
    text: "Doporučuji každému, kdo hledá kvalitní práci a individuální přístup. Dělal mi kuchyň na míru v panelákovém bytě a výsledek je přesně podle domluvy a mých představ.",
    realizace: "kuchyň v paneláku",
  },
]

const postup = [
  {
    krok: "Zaměření",
    popis: "Přijedeme k vám, zaměříme prostor na milimetry a probereme, co od nábytku čekáte.",
  },
  {
    krok: "3D návrh",
    popis: "Ještě před výrobou uvidíte realistickou vizualizaci — víte přesně, co dostanete.",
  },
  {
    krok: "Výroba v dílně",
    popis: "Řežeme, olepujeme a sestavujeme v naší brněnské dílně. Žádný mezisklad, žádný překupník.",
  },
  {
    krok: "Montáž a řemesla",
    popis: "Namontujeme a zkoordinujeme elektrikáře, vodaře, podlaháře i malíře. Odcházíme, až vše sedí.",
  },
]

export default function Page() {
  return (
    <main className="sas">
      {/* ===== HERO ===== */}
      <header className="hero">
        <div className="hero-inner">
          <div className="wordmark" aria-label="SAS nábytek">
            <span className="wordmark-sas">SAS</span>
            <span className="wordmark-rest">nábytek</span>
          </div>

          <p className="hero-eyebrow">Stolařství · Brno-Bohunice · od roku 1998</p>

          <h1 className="hero-title">
            <span className="line line-1">Nábytek řezaný</span>
            <span className="line line-2">
              na <em>milimetr</em>,
            </span>
            <span className="line line-3">ne na katalog.</span>
          </h1>

          {/* Signature: letokruhy — soustředné oblouky jako řez kmenem */}
          <div className="rings" aria-hidden="true">
            <svg viewBox="0 0 600 600" className="rings-svg" role="presentation">
              <g fill="none" strokeLinecap="round">
                <circle cx="300" cy="300" r="288" className="ring r7" />
                <circle cx="300" cy="300" r="244" className="ring r6" />
                <circle cx="300" cy="300" r="202" className="ring r5" />
                <circle cx="300" cy="300" r="166" className="ring r4" />
                <circle cx="300" cy="300" r="128" className="ring r3" />
                <circle cx="300" cy="300" r="92" className="ring r2" />
                <circle cx="300" cy="300" r="58" className="ring r1" />
                <circle cx="300" cy="300" r="26" className="ring r0" />
              </g>
            </svg>
            <p className="rings-caption">26 letokruhů řemesla — každý rok jedna vrstva zkušeností</p>
          </div>

          <p className="hero-lead">
            Rodinná stolařská dílna Ing. Pavla Sedláčka navrhuje, vyrábí a montuje nábytek na míru pro
            byty, domy i firmy v Brně a okolí. Nejdřív uvidíte 3D vizualizaci, pak teprve řežeme.
          </p>

          <div className="hero-facts" role="list">
            <div className="fact" role="listitem">
              <span className="fact-num">26 let</span>
              <span className="fact-label">u hoblice i u zákazníků</span>
            </div>
            <div className="fact" role="listitem">
              <span className="fact-num">3D návrh</span>
              <span className="fact-label">před každou výrobou</span>
            </div>
            <div className="fact" role="listitem">
              <span className="fact-num">1 firma</span>
              <span className="fact-label">nábytek i navazující řemesla</span>
            </div>
          </div>
        </div>
      </header>

      {/* ===== SLUŽBY ===== */}
      <section className="sluzby" aria-labelledby="sluzby-h">
        <div className="section-inner">
          <p className="eyebrow">Co vyrábíme</p>
          <h2 id="sluzby-h" className="section-title">
            Od kuchyně po kancelář.
            <br />
            Vždycky přesně do vašeho prostoru.
          </h2>

          <ul className="sluzby-grid">
            {sluzby.map((s) => (
              <li key={s.nazev} className="sluzba">
                <h3 className="sluzba-nazev">{s.nazev}</h3>
                <p className="sluzba-popis">{s.popis}</p>
                <p className="sluzba-material">{s.material}</p>
              </li>
            ))}
          </ul>

          <div className="postup">
            <h3 className="postup-title">Jak zakázka probíhá</h3>
            <ol className="postup-list">
              {postup.map((p, i) => (
                <li key={p.krok} className="postup-krok">
                  <span className="postup-cislo" aria-hidden="true">
                    {i + 1}
                  </span>
                  <div>
                    <h4 className="postup-nazev">{p.krok}</h4>
                    <p className="postup-popis">{p.popis}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* ===== DŮVĚRA / REFERENCE ===== */}
      <section className="duvera" aria-labelledby="duvera-h">
        <div className="section-inner">
          <p className="eyebrow eyebrow-light">Kdo za tím stojí</p>
          <h2 id="duvera-h" className="section-title section-title-light">
            Jedno jméno, jedna dílna,
            <br />
            žádné výmluvy.
          </h2>

          <div className="onas">
            <p className="onas-text">
              Zakázku u nás nevede obchodník, ale přímo stolař — Ing. Pavel Sedláček. Ten samý člověk,
              který s vámi projde zaměření a 3D návrh, pak stojí u formátovací pily a nakonec dotahuje
              poslední pant při montáži. Dílnu najdete v Brně na ulici Lány v Bohunicích a jezdíme po
              celém Brně i okolí.
            </p>
            <p className="onas-text">
              Když nový nábytek potřebuje i novou zásuvku, podlahu nebo výmalbu, zavoláme prověřené
              řemeslníky, se kterými pracujeme roky — a celou návaznost pohlídáme za vás.
            </p>
          </div>

          <ul className="ref-grid">
            {reference.map((r) => (
              <li key={r.jmeno} className="ref">
                <p className="ref-realizace">{r.realizace}</p>
                <blockquote className="ref-text">„{r.text}“</blockquote>
                <p className="ref-jmeno">
                  — {r.jmeno}
                  <span className="ref-stars" aria-label="hodnocení 5 z 5 hvězdiček">
                    ★★★★★
                  </span>
                </p>
              </li>
            ))}
          </ul>

          <p className="duvera-kontaktni">
            Dílna: Lány 612/25, 625 00 Brno-Bohunice · pavel@sasnabytek.cz
          </p>
        </div>
      </section>
    </main>
  )
}
