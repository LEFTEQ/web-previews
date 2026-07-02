export const metadata = {
  title: "V-PODLAHY, s.r.o. — podlahářství Pardubice",
  description:
    "Vinylové, PVC, laminátové a dřevěné podlahy včetně odborné pokládky. Podlahářství V-PODLAHY z Pardubic — zaměření, vyrovnání podkladu, pokládka i lišty na míru.",
  openGraph: {
    title: "V-PODLAHY — expert na podlahy v Pardubicích",
    description:
      "Vinyl, PVC, laminát i dřevo. Zaměříme, vyrovnáme podklad a položíme — od jedné místnosti po celý dům.",
    locale: "cs_CZ",
    type: "website",
  },
};

const skladba = [
  {
    vrstva: "04",
    nazev: "Nášlapná vrstva",
    popis:
      "Vinyl, PVC, laminát nebo třívrstvé dřevo — to, po čem budete deset let chodit. Pomůžeme vybrat dekor podle provozu, ne podle katalogu.",
  },
  {
    vrstva: "03",
    nazev: "Podložka a izolace",
    popis:
      "Kročejová izolace a parozábrana tam, kde patří. U podlahového topení hlídáme tepelný odpor celé skladby.",
  },
  {
    vrstva: "02",
    nazev: "Vyrovnaný podklad",
    popis:
      "Nivelační stěrka do 2 mm na 2 metry. Většina reklamací podlah začíná křivým podkladem — proto ho měříme a stěrkujeme sami.",
  },
  {
    vrstva: "01",
    nazev: "Zaměření a vlhkost",
    popis:
      "Přijedeme, změříme plochu i zbytkovou vlhkost betonu. Na novostavbě nikdy nepokládáme na mokrý potěr — ušetří vám to podlahu.",
  },
];

const nabidka = [
  {
    nazev: "Vinylové podlahy",
    tag: "Click i lepený",
    popis:
      "Nejžádanější volba do bytů i novostaveb. Tichý došlap, voděodolné dekory do kuchyně i koupelny, vhodné na podlahové topení.",
  },
  {
    nazev: "PVC a marmoleum",
    tag: "Metráž beze spár",
    popis:
      "Do zátěže i vlhka: chodby, ordinace, provozovny. Svařované spoje, žádné spáry, snadná údržba mopem.",
  },
  {
    nazev: "Laminátové podlahy",
    tag: "Rychlá pokládka",
    popis:
      "Osvědčená klasika s dobrým poměrem ceny a odolnosti. Do dětského pokoje, ložnice i kanceláře — položíme obvykle za jeden den.",
  },
  {
    nazev: "Dřevěné podlahy",
    tag: "Dub a jasan",
    popis:
      "Třívrstvé dřevo, které stárne krásně. Poradíme s povrchovou úpravou — olej se opravuje lokálně, lak se brousí celý.",
  },
  {
    nazev: "Soklové lišty a přechody",
    tag: "Detail dělá podlahu",
    popis:
      "Lišty v dekoru podlahy nebo bílé, přechodové profily mezi místnostmi, ukončení u dveří. Detaily, které rozhodují o výsledku.",
  },
  {
    nazev: "Renovace a výměna",
    tag: "I obydlený byt",
    popis:
      "Starou podlahu vytrhneme a odvezeme, podklad připravíme a položíme novou. Nábytek přestěhujeme po místnostech — bydlíte dál.",
  },
];

const duvera = [
  {
    cislo: "18 let",
    text: "pokládáme podlahy v Pardubicích a okolí — od Chrudimi po Hradec.",
  },
  {
    cislo: "2 mm / 2 m",
    text: "maximální rovinnost podkladu, kterou si před pokládkou sami přeměříme.",
  },
  {
    cislo: "1 den",
    text: "stačí na pokládku běžného bytu 3+1, včetně lišt a úklidu.",
  },
];

const reference = [
  {
    citace:
      "Vinyl do celého bytu položili za den a půl, včetně vyrovnání staré betonové podlahy. Lišty sedí na milimetr, po řemeslnících ani smítko.",
    autor: "Rodina Kučerova",
    misto: "byt 3+1, Pardubice–Polabiny",
  },
  {
    citace:
      "Potřebovali jsme podlahu do ordinace beze spár kvůli hygieně. Doporučili svařované PVC, poradili s dezinfekcí a drží už čtvrtý rok.",
    autor: "MUDr. Havlová",
    misto: "ordinace, Pardubice–centrum",
  },
  {
    citace:
      "Na novostavbě nám změřili vlhkost potěru a řekli na rovinu: ještě tři týdny počkat. Ocenili jsme, že netlačili na rychlou zakázku.",
    autor: "manželé Novotní",
    misto: "rodinný dům, Sezemice",
  },
];

export default function Page() {
  return (
    <main className="vp">
      {/* ===== HERO ===== */}
      <header className="vp-hero">
        <div className="vp-hero-top">
          <span className="vp-wordmark" aria-label="V-PODLAHY">
            <span className="vp-wordmark-v">V—</span>PODLAHY
          </span>
          <span className="vp-hero-loc">podlahářství · Pardubice</span>
        </div>

        <div className="vp-hero-body">
          <h1 className="vp-hero-title">
            <span className="vp-plank vp-plank-1">
              <span className="vp-plank-word">Podlaha</span>
            </span>
            <span className="vp-plank vp-plank-2">
              <span className="vp-plank-word">se pokládá</span>
            </span>
            <span className="vp-plank vp-plank-3">
              <span className="vp-plank-word vp-plank-accent">na vazbu.</span>
            </span>
          </h1>

          <div className="vp-hero-side">
            <p className="vp-hero-lead">
              Stejně jako spáry lamel — každý spoj o třetinu posunutý, aby
              podlaha držela a vypadala. Tak pracujeme i my: vinyl, PVC,
              laminát a dřevo včetně přípravy podkladu, v Pardubicích a okolí.
            </p>
            <ul className="vp-hero-facts">
              <li>Zaměření a nabídka zdarma</li>
              <li>Vlastní pokládková parta, žádní subdodavatelé</li>
              <li>Vzorky dekorů přivezeme k vám domů</li>
            </ul>
          </div>
        </div>

        <div className="vp-hero-strip" aria-hidden="true">
          <span className="vp-strip-cell">vinyl</span>
          <span className="vp-strip-cell">PVC</span>
          <span className="vp-strip-cell">laminát</span>
          <span className="vp-strip-cell">dřevo</span>
          <span className="vp-strip-cell">stěrky</span>
          <span className="vp-strip-cell">lišty</span>
        </div>
      </header>

      {/* ===== SKLADBA / SLUŽBY ===== */}
      <section className="vp-section vp-skladba" aria-labelledby="skladba-h">
        <div className="vp-section-head">
          <p className="vp-eyebrow">Řez podlahou</p>
          <h2 id="skladba-h" className="vp-h2">
            Dobrá podlaha jsou čtyři vrstvy.
            <br />
            Děláme všechny.
          </h2>
          <p className="vp-section-lead">
            Vidět je jen ta horní. O životnosti ale rozhodují ty pod ní —
            proto u nás nekupujete jen lamely, ale celou skladbu od podkladu
            nahoru.
          </p>
        </div>

        <ol className="vp-vrstvy" reversed>
          {skladba.map((v) => (
            <li key={v.vrstva} className="vp-vrstva">
              <span className="vp-vrstva-num" aria-hidden="true">
                {v.vrstva}
              </span>
              <div className="vp-vrstva-text">
                <h3 className="vp-vrstva-nazev">{v.nazev}</h3>
                <p>{v.popis}</p>
              </div>
            </li>
          ))}
        </ol>

        <div className="vp-nabidka">
          <h3 className="vp-nabidka-title">Co pokládáme</h3>
          <div className="vp-nabidka-grid">
            {nabidka.map((n) => (
              <article key={n.nazev} className="vp-karta">
                <p className="vp-karta-tag">{n.tag}</p>
                <h4 className="vp-karta-nazev">{n.nazev}</h4>
                <p className="vp-karta-popis">{n.popis}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ===== DŮVĚRA / REFERENCE ===== */}
      <section className="vp-section vp-duvera" aria-labelledby="duvera-h">
        <div className="vp-section-head">
          <p className="vp-eyebrow vp-eyebrow-light">Proč lidé z Pardubic volají nám</p>
          <h2 id="duvera-h" className="vp-h2 vp-h2-light">
            Podlaháři, kteří vám řeknou,
            <br />
            když je potěr ještě mokrý.
          </h2>
        </div>

        <dl className="vp-cisla">
          {duvera.map((d) => (
            <div key={d.cislo} className="vp-cislo">
              <dt className="vp-cislo-hodnota">{d.cislo}</dt>
              <dd className="vp-cislo-text">{d.text}</dd>
            </div>
          ))}
        </dl>

        <div className="vp-reference">
          {reference.map((r) => (
            <figure key={r.autor} className="vp-ref">
              <blockquote className="vp-ref-citace">„{r.citace}“</blockquote>
              <figcaption className="vp-ref-autor">
                <strong>{r.autor}</strong>
                <span>{r.misto}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>
    </main>
  );
}
