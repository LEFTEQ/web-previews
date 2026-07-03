const KRYTINY = [
  { nazev: "Dřevěné podlahy", pozn: "masiv i vícevrstvé, olej či lak" },
  { nazev: "Vinylové podlahy", pozn: "lepené i click, do kuchyní a předsíní" },
  { nazev: "SPC a rigidní podlahy", pozn: "tvarová stálost, snesou podlahovku" },
  { nazev: "Laminátové podlahy", pozn: "osvědčená volba do bytů" },
  { nazev: "PVC podlahy", pozn: "velké plochy, snadná údržba" },
  { nazev: "Koberce a čtverce", pozn: "kanceláře, ložnice, dětské pokoje" },
  { nazev: "Přírodní linoleum", pozn: "ordinace, školy, zdravé provozy" },
];

const DVERE = [
  {
    nazev: "Interiérové dveře",
    popis:
      "Dveře a zárubně, které ladí s podlahou — od klasiky po bezfalcové minimalistické provedení. Vybíráte přímo u nás v showroomu, na dotek.",
  },
  {
    nazev: "Vstupní dveře",
    popis:
      "Bezpečnost, tepelná i zvuková izolace. První, čeho si návštěva všimne — a poslední, co vás v bytě zradí, když je kvalitní.",
  },
  {
    nazev: "Protipožární a technické dveře",
    popis:
      "Pro bytové domy, hotely a komerční provozy. Dodáme včetně certifikátů, které potřebujete ke kolaudaci — bez dohánění na poslední chvíli.",
  },
];

const KROKY = [
  {
    krok: "Poradenství",
    popis:
      "Přijďte do showroomu na Jeremiášově (vedle BILLY) nebo zavolejte. Probereme provoz, podklad i rozpočet — poradíme materiál, který u vás vydrží.",
  },
  {
    krok: "Cenová nabídka",
    popis:
      "Do několika dní dostanete nabídku s položkami, kterým rozumíte: materiál, lišty, přechody, práce. Žádné hvězdičky pod čarou.",
  },
  {
    krok: "Zaměření",
    popis:
      "Technik u vás přeměří místnosti a zkontroluje rovinnost i vlhkost podkladu. Právě tady se rozhoduje, jestli podlaha vydrží 20 let.",
  },
  {
    krok: "Realizace",
    popis:
      "Pokládka v dohodnutém termínu, čisté detaily u prahů a lišt, úklid po sobě. Předáme hotový pokoj, ne staveniště.",
  },
];

const REFERENCE = [
  {
    text:
      "Když jsem potřebovala v krátkém termínu zařídit nové prostory dětské ordinace, MAPETO mi vyšlo maximálně vstříc. Perfektní detaily, vynikající výsledek a včas dodané certifikáty při nelehkém schvalování provozu.",
    autor: "Jiří a Lenka Červinkovi",
    projekt: "dětská ordinace, Olomouc",
  },
  {
    text:
      "Vysoká profesionalita a zároveň přátelský, osobní přístup. Každá rada mířila na praktičnost a respektovala naše přání. Na vysněném domě s nimi bylo potěšení spolupracovat — další projekt bez váhání znovu s MAPETO.",
    autor: "Martin a Jana Kania",
    projekt: "rodinný dům",
  },
];

export default function Page() {
  return (
    <main className="mp">
      {/* ============ HERO ============ */}
      <header className="mp-hero">
        <div className="mp-hero-top">
          <div className="mp-wordmark" aria-label="MAPETO podlahy">
            <span className="mp-wordmark-name">MAPETO</span>
            <span className="mp-wordmark-sub">podlahy · dveře · Olomouc</span>
          </div>
          <a className="mp-hero-tel" href="tel:+420777727398">
            +420 777 727 398
          </a>
        </div>

        <div className="mp-hero-body">
          <p className="mp-hero-eyebrow">Showroom 300 m² — Jeremiášova 506/3, vedle BILLY</p>
          <h1 className="mp-hero-title">
            <span className="mp-plank mp-plank-1">Podlahy,</span>
            <span className="mp-plank mp-plank-2">po kterých budete</span>
            <span className="mp-plank mp-plank-3">
              chodit <em>dalších 30 let.</em>
            </span>
          </h1>
          <p className="mp-hero-lead">
            Od roku 1995 pokládáme podlahy a osazujeme dveře po celé Olomouci a okolí.
            Přes 3 000 dokončených zakázek — byty, domy, ordinace, hotely i kanceláře.
          </p>
          <div className="mp-hero-facts" role="list">
            <div className="mp-fact" role="listitem">
              <strong>1995</strong>
              <span>rok založení</span>
            </div>
            <div className="mp-fact" role="listitem">
              <strong>3 000+</strong>
              <span>dokončených zakázek</span>
            </div>
            <div className="mp-fact" role="listitem">
              <strong>300 m²</strong>
              <span>showroom se vzorky</span>
            </div>
          </div>
        </div>

        {/* signature: řez pokládkou — lamely v perspektivě */}
        <div className="mp-parquet" aria-hidden="true">
          <span></span><span></span><span></span><span></span><span></span>
          <span></span><span></span><span></span><span></span><span></span>
        </div>
      </header>

      {/* ============ SEKCE 1: NABÍDKA ============ */}
      <section className="mp-section mp-nabidka" aria-labelledby="nabidka-h">
        <div className="mp-section-head">
          <p className="mp-eyebrow">Co u nás vyberete a my položíme</p>
          <h2 id="nabidka-h">Krytiny na dotek, dveře na míru</h2>
          <p className="mp-section-lead">
            Nekupujete z katalogu. V showroomu si na vzorky šlápnete, porovnáte dekory
            u denního světla a odnesete si vzorník domů k vaší zdi.
          </p>
        </div>

        <div className="mp-nabidka-grid">
          <div className="mp-krytiny">
            <h3 className="mp-list-title">Podlahové krytiny</h3>
            <ul className="mp-krytiny-list">
              {KRYTINY.map((k) => (
                <li key={k.nazev}>
                  <span className="mp-krytina-nazev">{k.nazev}</span>
                  <span className="mp-krytina-pozn">{k.pozn}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mp-dvere">
            <h3 className="mp-list-title">Dveře</h3>
            {DVERE.map((d) => (
              <article className="mp-dvere-card" key={d.nazev}>
                <h4>{d.nazev}</h4>
                <p>{d.popis}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="mp-kroky" aria-label="Průběh zakázky ve čtyřech krocích">
          <h3 className="mp-list-title mp-kroky-title">Jak zakázka probíhá</h3>
          <ol className="mp-kroky-list">
            {KROKY.map((k, i) => (
              <li key={k.krok}>
                <span className="mp-krok-cislo" aria-hidden="true">{i + 1}</span>
                <h4>{k.krok}</h4>
                <p>{k.popis}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ============ SEKCE 2: DŮVĚRA ============ */}
      <section className="mp-section mp-duvera" aria-labelledby="duvera-h">
        <div className="mp-duvera-inner">
          <div className="mp-onas">
            <p className="mp-eyebrow mp-eyebrow-light">Proč MAPETO</p>
            <h2 id="duvera-h">Řemeslo, které v Olomouci známe jménem</h2>
            <p>
              MAPETO není e-shop ani přeprodejce. Jsme parta odborníků, která od roku 1995
              vybírá, zaměřuje a pokládá podlahy vlastníma rukama. Spolupracujeme jen
              s prověřenými výrobci a za každou zakázkou si stojíme — proto se k nám klienti
              vracejí s dalším bytem, kanceláří i domem pro děti.
            </p>
            <p>
              Mezi našimi realizacemi najdete rodinné a bytové domy, hotely, restaurace,
              nemocnice i kancelářské prostory. U komerčních provozů dodáváme kompletní
              certifikaci materiálů — kolaudace vás nezaskočí.
            </p>
            <ul className="mp-onas-body">
              <li>30 let praxe, jeden tým, žádní najatí brigádníci</li>
              <li>Zaměření a kontrola podkladu před každou pokládkou</li>
              <li>Termíny, které platí — i u napjatých harmonogramů</li>
            </ul>
          </div>

          <div className="mp-reference">
            {REFERENCE.map((r) => (
              <figure className="mp-ref" key={r.autor}>
                <blockquote>
                  <p>{r.text}</p>
                </blockquote>
                <figcaption>
                  <strong>{r.autor}</strong>
                  <span>{r.projekt}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
