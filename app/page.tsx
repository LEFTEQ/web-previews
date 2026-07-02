export default function Page() {
  const vzory = [
    {
      id: "a",
      nazev: "Rybina",
      lat: "Herringbone",
      popis:
        "Klasika brněnských činžáků i novostaveb. Lamely v úhlu 45° nebo 90°, dub, jasan či ořech. Pokládáme lepenou i na pero a drážku.",
    },
    {
      id: "b",
      nazev: "Francouzský vzor",
      lat: "Chevron",
      popis:
        "Lamely seříznuté do špice se potkávají v přesné linii. Opticky prodlouží místnost a snese i velké otevřené prostory.",
    },
    {
      id: "c",
      nazev: "Kazety a bordury",
      lat: "Versailles",
      popis:
        "Palácové kazety, intarzie a obvodové bordury na míru. Pro vily, reprezentativní interiéry a renovace historických podlah.",
    },
    {
      id: "d",
      nazev: "Prkna",
      lat: "Plank",
      popis:
        "Dlouhá masivní nebo třívrstvá prkna až do 2,4 m. Kartáčovaný povrch, olej či lak podle toho, jak podlahu žijete.",
    },
  ];

  const kroky = [
    {
      cislo: "1",
      titul: "Zaměření u vás doma",
      text: "Přijedeme kamkoliv po Brně a okolí, změříme vlhkost podkladu a rovinnost. Bez toho žádnou podlahu nepokládáme.",
    },
    {
      cislo: "2",
      titul: "Výběr dřeva ve studiu",
      text: "V podlahovém studiu si vzorky osaháte — dub, jasan, ořech, exoty. Poradíme, co vydrží psa, děti i podlahové topení.",
    },
    {
      cislo: "3",
      titul: "Pokládka vlastní partou",
      text: "Žádní najatí subdodavatelé. Parketáři, kteří u nás pracují roky, položí, zabrousí a povrchově upraví.",
    },
    {
      cislo: "4",
      titul: "Servis po letech",
      text: "Dřevěná podlaha se dá renovovat i po dvaceti letech. Přebrousíme, přeolejujeme, opravíme — i podlahy, které jsme nepokládali.",
    },
  ];

  return (
    <main className="dp">
      {/* ===== HERO ===== */}
      <header className="hero">
        <div className="hero-topbar">
          <span className="wordmark" aria-label="Design Parket, Brno">
            <span className="wordmark-design">DESIGN</span>
            <span className="wordmark-parket">PARKET</span>
          </span>
          <a className="hero-tel" href="tel:+420541000000">
            Zavolat do studia
          </a>
        </div>

        <div className="hero-body">
          <p className="hero-eyebrow">Podlahové studio · Brno</p>
          <h1 className="hero-title">
            <span className="hero-line hero-line-1">Dřevo,</span>
            <span className="hero-line hero-line-2">položené</span>
            <span className="hero-line hero-line-3">
              na&nbsp;<em>rybinu.</em>
            </span>
          </h1>
          <p className="hero-lead">
            Masivní a třívrstvé parkety vybíráte u nás ve studiu, pokládá je
            naše vlastní parta parketářů. Rybina, chevron, kazety — vzory,
            které v Brně děláme přes dvacet let.
          </p>
          <div className="hero-actions">
            <a className="btn btn-solid" href="tel:+420541000000">
              Zavolat: domluvit zaměření
            </a>
            <a className="btn btn-ghost" href="#vzory">
              Prohlédnout vzory pokládky
            </a>
          </div>
        </div>

        {/* Signature: typografická rybina — pás lamel z čistého CSS */}
        <div className="herringbone" aria-hidden="true">
          <div className="hb-row">
            {Array.from({ length: 14 }).map((_, i) => (
              <span key={i} className={`hb-plank hb-${(i % 4) + 1}`} />
            ))}
          </div>
          <div className="hb-row hb-row-2">
            {Array.from({ length: 14 }).map((_, i) => (
              <span key={i} className={`hb-plank hb-${((i + 2) % 4) + 1}`} />
            ))}
          </div>
        </div>
      </header>

      {/* ===== SEKCE 1: VZORY POKLÁDKY ===== */}
      <section className="vzory" id="vzory" aria-labelledby="vzory-title">
        <div className="section-head">
          <h2 id="vzory-title">Vzory, které pokládáme</h2>
          <p className="section-sub">
            Každý vzor má jiný rytmus a jinak nese světlo. Ve studiu vám je
            ukážeme položené naživo, ne v katalogu.
          </p>
        </div>

        <div className="vzory-grid">
          {vzory.map((v) => (
            <article key={v.id} className="vzor-card">
              <div className={`vzor-icon vzor-icon-${v.id}`} aria-hidden="true">
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
              </div>
              <h3 className="vzor-nazev">
                {v.nazev} <span className="vzor-lat">{v.lat}</span>
              </h3>
              <p className="vzor-popis">{v.popis}</p>
            </article>
          ))}
        </div>

        <p className="vzory-note">
          Pracujeme s dubem, jasanem, ořechem a na přání i s exotickými
          dřevinami. Všechny podlahy jsou vhodné na podlahové topení — poradíme,
          která konstrukce se k vašemu domu hodí.
        </p>
      </section>

      {/* ===== SEKCE 2: JAK U NÁS PODLAHA VZNIKÁ ===== */}
      <section className="kroky" aria-labelledby="kroky-title">
        <div className="section-head section-head-light">
          <h2 id="kroky-title">Od zaměření po přebroušení</h2>
          <p className="section-sub">
            Podlaha je práce na desítky let. Proto ji děláme od začátku do
            konce sami — čtyři kroky, žádné překvapení.
          </p>
        </div>

        <ol className="kroky-list">
          {kroky.map((k) => (
            <li key={k.cislo} className="krok">
              <span className="krok-cislo" aria-hidden="true">
                {k.cislo}
              </span>
              <div className="krok-text">
                <h3>{k.titul}</h3>
                <p>{k.text}</p>
              </div>
            </li>
          ))}
        </ol>

        <div className="duvera">
          <blockquote className="duvera-quote">
            <p>
              „Rybinu v celém bytě na Veveří nám položili za týden, včetně
              broušení a olejování. Po třech letech přijeli, přeolejovali
              chodbu — a podlaha vypadá líp než nová.“
            </p>
            <cite>— majitelé bytu, Brno-Veveří</cite>
          </blockquote>
          <ul className="duvera-fakta">
            <li>
              <strong>Přes 20 let</strong> pokládáme parkety v Brně a na jižní
              Moravě
            </li>
            <li>
              <strong>Vlastní parketáři</strong> — žádné najaté party, za práci
              ručíme my
            </li>
            <li>
              <strong>Renovace i cizích podlah</strong> — broušení, olej, lak,
              opravy
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}
