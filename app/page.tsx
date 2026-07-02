export const metadata = {
  title: "SCONTO Zahradnictví České Budějovice — rostliny, sazenice, zahradní poradna",
  description:
    "Zahradnictví SCONTO v Českých Budějovicích: trvalky, ovocné stromky, sezónní sazenice a poradna pro jihočeské zahrady. Pěstujeme v Budějovické pánvi, prodáváme to, co u nás opravdu roste.",
  openGraph: {
    title: "SCONTO Zahradnictví České Budějovice",
    description:
      "Trvalky, ovocné stromky a sazenice pěstované v Budějovické pánvi. Poradíme, co poroste právě na vaší zahradě.",
    locale: "cs_CZ",
    type: "website",
  },
};

const sortiment = [
  {
    mesic: "III–V",
    nazev: "Sazenice zeleniny a bylinek",
    popis:
      "Rajčata, papriky, saláty i bazalka předpěstované v našich sklenících. Otužilé, protože rostly tady — ne v kamionu z dovozu.",
    stitek: "jaro",
  },
  {
    mesic: "IV–X",
    nazev: "Trvalky a okrasné traviny",
    popis:
      "Přes 200 druhů trvalek prověřených jihočeským klimatem. Šalvěje, kavyly, echinacey — záhony, které kvetou roky, ne jednu sezónu.",
    stitek: "celá sezóna",
  },
  {
    mesic: "X–XI",
    nazev: "Ovocné stromky a keře",
    popis:
      "Jabloně, hrušně, rybíz i moruše na podnožích vhodných do těžších půd Budějovické pánve. Poradíme s výsadbou i řezem.",
    stitek: "podzimní výsadba",
  },
  {
    mesic: "XI–XII",
    nazev: "Vánoční stromky a chvojí",
    popis:
      "Jedle kavkazské a smrky z jihočeských plantáží, řezané těsně před prodejem. Čerstvé chvojí na adventní vazbu.",
    stitek: "advent",
  },
];

const duvera = [
  {
    citace:
      "Přišla jsem s fotkou zaplevelený zahrady po babičce. Odešla jsem s plánkem záhonu a bedýnkou trvalek. Druhý rok kvete všechno.",
    autor: "Marie K., Rožnov",
  },
  {
    citace:
      "Jabloň, kterou mi jinde prodali, dvakrát zmrzla. Tady mi rovnou řekli, že do naší kotliny potřebuju pozdní odrůdu. Roste třetím rokem.",
    autor: "Petr H., Litvínovice",
  },
  {
    citace:
      "Nejsou to prodavači, jsou to zahradníci. Když nevědí, jdou se zeptat kolegy do skleníku. To jinde nezažijete.",
    autor: "Jana a Tomáš V., Čtyři Dvory",
  },
];

export default function Page() {
  return (
    <main className="zh">
      {/* ===== HERO ===== */}
      <header className="hero">
        <div className="hero-inner">
          <div className="brand" aria-label="SCONTO Zahradnictví">
            <span className="brand-mark" aria-hidden="true">
              {/* semínko / klíček */}
              <svg viewBox="0 0 32 32" width="30" height="30" role="img" aria-hidden="true">
                <path
                  d="M16 28 C16 20 16 14 16 10"
                  stroke="currentColor"
                  strokeWidth="2.4"
                  fill="none"
                  strokeLinecap="round"
                />
                <path
                  d="M16 12 C16 6 20 3 26 3 C26 9 22 12 16 12 Z"
                  fill="currentColor"
                />
                <path
                  d="M16 17 C16 12.5 13 10 8.5 10 C8.5 14.5 11.5 17 16 17 Z"
                  fill="currentColor"
                  opacity="0.55"
                />
              </svg>
            </span>
            <span className="brand-word">
              SCONTO<em>zahradnictví</em>
            </span>
          </div>

          <p className="hero-eyebrow">České Budějovice · pěstujeme od semínka</p>

          <h1 className="hero-title">
            <span className="line l1">Co u nás</span>
            <span className="line l2">vyklíčí,</span>
            <span className="line l3">
              u vás <span className="roste">poroste.</span>
            </span>
          </h1>

          <p className="hero-sub">
            Sazenice, trvalky a ovocné stromky pěstované přímo v Budějovické
            pánvi. Prodáváme jen to, co jsme sami vypěstovali a co v jihočeském
            klimatu opravdu obstojí.
          </p>

          <div className="hero-cta">
            <a className="btn btn-solid" href="#sortiment">
              Co právě sázíme
            </a>
            <a className="btn btn-line" href="#zahradnici">
              Poradna zahradníka
            </a>
          </div>
        </div>

        {/* signature: řádkovaný záhon — svislé brázdy s klíčky, rytmus školky */}
        <div className="zahon" aria-hidden="true">
          <span className="brazda b1" />
          <span className="brazda b2" />
          <span className="brazda b3" />
          <span className="brazda b4" />
          <span className="brazda b5" />
          <span className="brazda b6" />
          <span className="brazda b7" />
          <span className="brazda b8" />
          <span className="brazda b9" />
        </div>
      </header>

      {/* ===== SEKCE 1: SORTIMENT PODLE MĚSÍCŮ ===== */}
      <section className="sekce sortiment" id="sortiment" aria-labelledby="sortiment-h">
        <div className="sekce-inner">
          <p className="eyebrow">Zahradnický kalendář</p>
          <h2 id="sortiment-h">
            Sortiment se řídí sezónou,
            <br />
            ne skladem.
          </h2>
          <p className="sekce-perex">
            Neprodáváme letničky v říjnu ani stromky v červnu. Každá položka má
            svůj měsíc — římská čísla u karet říkají, kdy má sázení smysl.
          </p>

          <div className="karty">
            {sortiment.map((k) => (
              <article className="karta" key={k.nazev}>
                <div className="karta-mesic">
                  <span className="mesic-cislo">{k.mesic}</span>
                  <span className="mesic-stitek">{k.stitek}</span>
                </div>
                <h3>{k.nazev}</h3>
                <p>{k.popis}</p>
              </article>
            ))}
          </div>

          <p className="sortiment-pozn">
            Aktuální nabídku sazenic vyvěšujeme každé pondělí na tabuli u vjezdu
            a na tomto webu. Co je vyprodané, nenabízíme.
          </p>
        </div>
      </section>

      {/* ===== SEKCE 2: DŮVĚRA / ZAHRADNÍCI ===== */}
      <section className="sekce zahradnici" id="zahradnici" aria-labelledby="zahradnici-h">
        <div className="sekce-inner">
          <div className="zahradnici-grid">
            <div className="zahradnici-text">
              <p className="eyebrow eyebrow-svetla">Kdo vám poradí</p>
              <h2 id="zahradnici-h">
                Za pultem stojí ti samí lidé, co ráno zalévali skleník.
              </h2>
              <p>
                Naše zahradnictví stojí na kraji Českých Budějovic už přes
                dvacet let. Půdu tady známe — těžší, jílovitou, s mrazovými
                kotlinami kolem Vltavy. Proto vám nikdy neprodáme rostlinu,
                o které víme, že tu první zimu nepřežije.
              </p>
              <p>
                Přineste fotku záhonu, hrst hlíny nebo jen popis, kam okno
                vaší zahrady míří. Zahradník s vámi projde nabídku a řekne
                narovinu, co poroste a co ne.
              </p>
              <dl className="fakta">
                <div>
                  <dt>20+ let</dt>
                  <dd>pěstujeme na stejném místě</dd>
                </div>
                <div>
                  <dt>3 skleníky</dt>
                  <dd>vlastní předpěstování sazenic</dd>
                </div>
                <div>
                  <dt>200 druhů</dt>
                  <dd>trvalek prověřených jižními Čechami</dd>
                </div>
              </dl>
            </div>

            <div className="reference" role="list" aria-label="Reference zákazníků">
              {duvera.map((r) => (
                <figure className="ref" role="listitem" key={r.autor}>
                  <blockquote>
                    <p>„{r.citace}“</p>
                  </blockquote>
                  <figcaption>{r.autor}</figcaption>
                </figure>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
