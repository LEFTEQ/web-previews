// STAVEBNÍ PRÁCE CHOLEVATOR s. r. o. — štukatérství, Ostrava
// Statický náhled: hero + 2 sekce (řemeslo/služby + důvěra/postup)

const sluzby = [
  {
    tag: "Tažené profily",
    nazev: "Fabiony a římsy tažené na místě",
    popis:
      "Profil táhneme šablonou přímo na stěně, tak jak se to dělalo v ostravských činžácích před sto lety. Žádné lepené polystyrenové lišty — sádra drží desítky let a dá se kdykoli opravit.",
    material: "sádra · vápno",
  },
  {
    tag: "Rekonstrukce",
    nazev: "Oprava historických štuků a fasád",
    popis:
      "Doplníme uražené kusy říms, rozet a šambrán podle dochovaných fragmentů. Sejmeme otisk, odlijeme chybějící díl a napojíme ho tak, že spoj nenajdete.",
    material: "formy · odlitky",
  },
  {
    tag: "Interiéry",
    nazev: "Štukové stropy, rozety a zrcadla",
    popis:
      "Stropní rozeta pod lustr, štuková zrcadla v salonu nebo jemný fabion mezi stěnou a stropem. Navrhneme profil na míru vašemu bytu — od prvorepublikového po současný.",
    material: "modelace · ruční práce",
  },
  {
    tag: "Omítky",
    nazev: "Vápenné a sanační omítky",
    popis:
      "Vlhké zdivo starých domů potřebuje omítku, která dýchá. Děláme vápenné jádrové omítky, štukové finály i sanační systémy pro sklepy a sokly.",
    material: "vápno · písek",
  },
];

const kroky = [
  {
    krok: "Obhlídka",
    text: "Přijedeme na místo, změříme profily a zjistíme stav podkladu. V Ostravě a okolí zdarma, obvykle do týdne.",
  },
  {
    krok: "Šablona",
    text: "Podle stávajícího štuku nebo vašeho zadání vyřežeme plechovou šablonu profilu. Vzorek vám ukážeme dřív, než se pustíme do celé plochy.",
  },
  {
    krok: "Tažení",
    text: "Profil táhneme v několika vrstvách načisto. Pracujeme čistě — podlahy a nábytek zakrýváme, sádru mícháme po malých dávkách.",
  },
  {
    krok: "Retuš",
    text: "Spoje zabrousíme, hrany doostříme špachtlí a plochu připravíme pod malbu. Předáváme hotové dílo, ne staveniště.",
  },
];

const reference = [
  {
    misto: "Činžovní dům, Moravská Ostrava",
    text: "Obnova fasádních říms a šambrán po zateplení dvorního traktu. 46 běžných metrů tažených profilů.",
  },
  {
    misto: "Byt 3+1, Ostrava-Přívoz",
    text: "Nové stropní rozety a fabiony ve dvou pokojích prvorepublikového bytu, profil podle dobové fotografie.",
  },
  {
    misto: "Rodinný dům, Slezská Ostrava",
    text: "Sanační omítky vlhkého soklu a nový vápenný štuk fasády. Dům po pěti letech stále bez map a výkvětů.",
  },
];

export default function Page() {
  return (
    <main className="ch">
      {/* ================= HERO ================= */}
      <header className="hero">
        <div className="hero-top">
          <span className="wordmark">
            CHOLE<span className="wordmark-cut">VATOR</span>
            <span className="wordmark-sub">štukatérství · Ostrava</span>
          </span>
          <a className="hero-tel" href="tel:+420605000000">
            Zavolat: 605 000 000
          </a>
        </div>

        <div className="hero-body">
          <p className="hero-eyebrow">Sádra, vápno a plechová šablona</p>
          <h1 className="hero-title">
            <span className="ht-line ht-1">Římsy táhneme</span>
            <span className="ht-line ht-2">na místě,</span>
            <span className="ht-line ht-3">ne z&nbsp;katalogu.</span>
          </h1>
          <p className="hero-lead">
            Štukatérské práce pro staré ostravské domy i nové interiéry. Tažené
            profily, rozety, opravy fasád a vápenné omítky — ručně, řemeslně,
            s&nbsp;materiálem, který vydrží další století.
          </p>
          <div className="hero-cta">
            <a className="btn btn-solid" href="tel:+420605000000">
              Zavolat štukatérovi
            </a>
            <a className="btn btn-line" href="#sluzby">
              Co všechno děláme
            </a>
          </div>
        </div>

        {/* Signature: profil římsy tažený přes celou šířku hero */}
        <div className="profile-band" aria-hidden="true">
          <svg
            className="profile-svg"
            viewBox="0 0 1200 140"
            preserveAspectRatio="none"
          >
            {/* silueta tažené římsy: cyma recta + listela + čtvrtoblouk */}
            <path
              className="profile-fill"
              d="M0,140 L0,118 L1200,118 L1200,140 Z"
            />
            <path
              className="profile-stroke p-a"
              d="M0,118 C80,118 60,96 140,96 L1200,96"
            />
            <path
              className="profile-stroke p-b"
              d="M0,96 L40,96 C120,96 100,66 200,66 L1200,66"
            />
            <path
              className="profile-stroke p-c"
              d="M0,66 L120,66 C230,66 210,26 340,26 L1200,26"
            />
            <path className="profile-stroke p-d" d="M0,26 L1200,26" />
          </svg>
          <span className="profile-note">
            profil č.&nbsp;14 — fabion s&nbsp;listelou, měřítko 1:1
          </span>
        </div>
      </header>

      {/* ================= SLUŽBY ================= */}
      <section className="sluzby" id="sluzby" aria-labelledby="sluzby-h">
        <div className="sec-head">
          <p className="sec-eyebrow">Řemeslo</p>
          <h2 className="sec-title" id="sluzby-h">
            Čtyři práce, které pro vás uděláme rukama
          </h2>
          <p className="sec-lead">
            Žádné univerzální „stavební práce“. Děláme štuk — a věci, které
            k&nbsp;němu v&nbsp;ostravských domech patří.
          </p>
        </div>

        <div className="sluzby-grid">
          {sluzby.map((s) => (
            <article className="karta" key={s.nazev}>
              <div className="karta-head">
                <span className="karta-tag">{s.tag}</span>
                <span className="karta-mat">{s.material}</span>
              </div>
              <h3 className="karta-title">{s.nazev}</h3>
              <p className="karta-text">{s.popis}</p>
            </article>
          ))}
        </div>
      </section>

      {/* ================= POSTUP + REFERENCE ================= */}
      <section className="duvera" aria-labelledby="duvera-h">
        <div className="sec-head sec-head-inv">
          <p className="sec-eyebrow">Jak pracujeme</p>
          <h2 className="sec-title" id="duvera-h">
            Od obhlídky po hotový profil ve čtyřech tazích
          </h2>
        </div>

        <ol className="kroky">
          {kroky.map((k, i) => (
            <li className="krok" key={k.krok}>
              <span className="krok-cislo" aria-hidden="true">
                {i + 1}. tah
              </span>
              <h3 className="krok-nazev">{k.krok}</h3>
              <p className="krok-text">{k.text}</p>
            </li>
          ))}
        </ol>

        <div className="ref-blok">
          <h3 className="ref-title">Naposledy jsme dělali</h3>
          <ul className="ref-list">
            {reference.map((r) => (
              <li className="ref-item" key={r.misto}>
                <span className="ref-misto">{r.misto}</span>
                <p className="ref-text">{r.text}</p>
              </li>
            ))}
          </ul>
          <p className="ref-pozn">
            Pracujeme po celé Ostravě a do 50&nbsp;km okolo — Havířov, Opava,
            Frýdek-Místek. Na tažené profily dáváme záruku 5&nbsp;let.
          </p>
        </div>
      </section>
    </main>
  );
}
