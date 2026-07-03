// H.U.P. ocel, v.o.s. — železářství, Brno
// Koncept: „Sklad hutního materiálu na papíře“ — design vychází z reality velkoobchodu
// s ocelí: profily (jekly, úhelníky, trubky, plechy), skladové karty, rozměrové tabulky.
// Signature prvek: typografický hero postavený na průřezech ocelových profilů
// vykreslených čistě v CSS (I-profil, jekl, trubka, úhelník) + skladová mřížka.

const sortiment = [
  {
    kod: "TR-KR",
    nazev: "Trubky",
    popis: "Bezešvé i svařované, kruhové a přesné. Konstrukční ocel 11 353, 11 523.",
    rozmery: "⌀ 10,2 – 273 mm",
    profil: "trubka",
  },
  {
    kod: "JK-UZ",
    nazev: "Jekly (uzavřené profily)",
    popis: "Čtvercové a obdélníkové tenkostěnné profily pro zámečníky i stavbu.",
    rozmery: "15×15 – 200×200 mm",
    profil: "jekl",
  },
  {
    kod: "TY-IU",
    nazev: "Tyče a nosníky",
    popis: "Profily I, IPE, U, UPE, HEA a HEB. Plné tyče kruhové, ploché i čtvercové.",
    rozmery: "IPE 80 – 300",
    profil: "iprofil",
  },
  {
    kod: "UH-LT",
    nazev: "Úhelníky",
    popis: "Rovnoramenné i nerovnoramenné L-profily, válcované za tepla.",
    rozmery: "20×20 – 150×150 mm",
    profil: "uhelnik",
  },
  {
    kod: "PL-TB",
    nazev: "Plechy",
    popis: "Černé, pozinkované, slzičkové i tahokov. Formáty i přířezy na míru.",
    rozmery: "tl. 0,55 – 30 mm",
    profil: "plech",
  },
  {
    kod: "BT-KA",
    nazev: "Betonářská ocel",
    popis: "Žebírková výztuž, kari sítě, distanční prvky. Odběr i po kusech.",
    rozmery: "⌀ 6 – 32 mm",
    profil: "roxor",
  },
];

const sluzby = [
  {
    cislo: "S1",
    nazev: "Dělení materiálu na míru",
    text: "Pásová pila zkrátí tyč, jekl i trubku přesně na váš rozměr. Neplatíte celou šestimetrovou délku, když potřebujete dva metry.",
  },
  {
    cislo: "S2",
    nazev: "Odběr bez minimálního množství",
    text: "Prodáváme firmám i kutilům. Jeden roxor na plot nebo tuna jeklů na halu — u nás nakoupí oba stejně rychle.",
  },
  {
    cislo: "S3",
    nazev: "Naložení a doprava po Brně a okolí",
    text: "Materiál vám naložíme jeřábem přímo na vozík nebo přivezeme vlastní dopravou do 30 km od skladu.",
  },
];

const duvody = [
  {
    hodnota: "6 m",
    popis: "standardní skladová délka tyčí a profilů — a když je to moc, uřízneme",
  },
  {
    hodnota: "250+",
    popis: "položek hutního materiálu trvale skladem, ne na objednávku",
  },
  {
    hodnota: "Brno",
    popis: "sklad s rampou a jeřábem, zajedete autem přímo k materiálu",
  },
];

function ProfilIkona({ typ }: { typ: string }) {
  return <span className={`profil-ikona profil-${typ}`} aria-hidden="true" />;
}

export default function Page() {
  return (
    <main className="hup">
      {/* ===== HERO ===== */}
      <header className="hero">
        <div className="hero-topbar">
          <span className="wordmark">
            H<span className="wordmark-tecka">.</span>U
            <span className="wordmark-tecka">.</span>P
            <span className="wordmark-tecka">.</span>
            <span className="wordmark-ocel">OCEL</span>
          </span>
          <span className="hero-lokalita">Železářství &amp; hutní materiál — Brno</span>
        </div>

        <div className="hero-plocha">
          <p className="hero-eyebrow">Velkoobchod i pult pro kutily</p>
          <h1 className="hero-titulek">
            <span className="hero-radek">Ocel</span>
            <span className="hero-radek hero-radek-odsazeny">skladem,</span>
            <span className="hero-radek">říznutá <em>na míru.</em></span>
          </h1>

          {/* Signature: průřezy profilů jako typografický „regál“ */}
          <div className="hero-profily" aria-hidden="true">
            <div className="hero-profil-slot">
              <span className="profil-ikona profil-iprofil profil-velky" />
              <span className="profil-popisek">IPE</span>
            </div>
            <div className="hero-profil-slot">
              <span className="profil-ikona profil-jekl profil-velky" />
              <span className="profil-popisek">JEKL</span>
            </div>
            <div className="hero-profil-slot">
              <span className="profil-ikona profil-trubka profil-velky" />
              <span className="profil-popisek">TR</span>
            </div>
            <div className="hero-profil-slot">
              <span className="profil-ikona profil-uhelnik profil-velky" />
              <span className="profil-popisek">L</span>
            </div>
            <div className="hero-profil-slot">
              <span className="profil-ikona profil-plech profil-velky" />
              <span className="profil-popisek">PL</span>
            </div>
          </div>

          <p className="hero-podtitulek">
            Trubky, jekly, plechy, nosníky i betonářská výztuž. Přijedete, vyberete,
            my uřízneme a naložíme. Bez minimálního odběru, bez čekání na závoz.
          </p>

          <div className="hero-stitky" role="list">
            <span role="listitem" className="stitek">Dělení pilou na míru</span>
            <span role="listitem" className="stitek">Odběr od 1 kusu</span>
            <span role="listitem" className="stitek">Naložení jeřábem</span>
          </div>
        </div>

        <div className="hero-meritko" aria-hidden="true">
          <span>0</span><span>1</span><span>2</span><span>3</span><span>4</span><span>5</span><span>6 m</span>
        </div>
      </header>

      {/* ===== SORTIMENT ===== */}
      <section className="sortiment" aria-labelledby="sortiment-nadpis">
        <div className="sekce-hlavicka">
          <p className="sekce-eyebrow">Skladová karta</p>
          <h2 id="sortiment-nadpis" className="sekce-titulek">
            Co máme v regálech
          </h2>
          <p className="sekce-uvod">
            Základní sortiment držíme trvale skladem. Kódy odpovídají našim skladovým
            řadám — nadiktujete je u pultu a jdeme rovnou k regálu.
          </p>
        </div>

        <ul className="sortiment-mrizka">
          {sortiment.map((p) => (
            <li key={p.kod} className="karta">
              <div className="karta-hlava">
                <ProfilIkona typ={p.profil} />
                <span className="karta-kod">{p.kod}</span>
              </div>
              <h3 className="karta-nazev">{p.nazev}</h3>
              <p className="karta-popis">{p.popis}</p>
              <p className="karta-rozmer">
                <span className="karta-rozmer-label">Skladem</span> {p.rozmery}
              </p>
            </li>
          ))}
        </ul>

        <div className="sluzby-pas">
          {sluzby.map((s) => (
            <article key={s.cislo} className="sluzba">
              <span className="sluzba-kod" aria-hidden="true">{s.cislo}</span>
              <h3 className="sluzba-nazev">{s.nazev}</h3>
              <p className="sluzba-text">{s.text}</p>
            </article>
          ))}
        </div>
      </section>

      {/* ===== DŮVĚRA / O NÁS ===== */}
      <section className="duvera" aria-labelledby="duvera-nadpis">
        <div className="duvera-vnitrek">
          <div className="duvera-text">
            <p className="sekce-eyebrow sekce-eyebrow-svetly">Rodinný sklad, ne katalog</p>
            <h2 id="duvera-nadpis" className="duvera-titulek">
              U pultu stojí lidi, co ocel<br />drželi v ruce.
            </h2>
            <p className="duvera-odstavec">
              H.U.P. ocel je brněnská veřejná obchodní společnost — malý tým, který zná
              každý regál ve skladu. Když nevíte, jestli na bránu stačí jekl 40×40×2,
              nebo potřebujete třímilimetrovou stěnu, poradíme dřív, než zaplatíte.
            </p>
            <p className="duvera-odstavec">
              Zásobujeme zámečnické dílny, stavební firmy i chalupáře z celého Brna
              a okolí. Většina zákazníků se vrací — protože materiál je skladem,
              řez je přesný a nikdo tu nedělá vědu z malého odběru.
            </p>
          </div>

          <dl className="duvera-cisla">
            {duvody.map((d) => (
              <div key={d.hodnota} className="duvera-cislo">
                <dt className="duvera-hodnota">{d.hodnota}</dt>
                <dd className="duvera-popisek">{d.popis}</dd>
              </div>
            ))}
          </dl>
        </div>

        <figure className="duvera-citace">
          <blockquote>
            „Potřeboval jsem dvanáct jeklů nařezaných na přesné délky pro zábradlí.
            V poledne jsem volal, ve dvě jsem nakládal. Tohle v hobbymarketu nezažijete.“
          </blockquote>
          <figcaption>— zámečnická dílna, Brno-Líšeň, stálý odběratel</figcaption>
        </figure>
      </section>
    </main>
  );
}
