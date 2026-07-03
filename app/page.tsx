export const metadata = {
  title: "Školička Zahrada — dětská skupina v Praze",
  description:
    "Školička Zahrada je malá dětská skupina v Praze pro děti od 2 do 6 let. Zahrada, záhonky, malé skupinky a laskavé tety. Přijďte se podívat na den otevřených dveří.",
  openGraph: {
    title: "Školička Zahrada — dětská skupina v Praze",
    description:
      "Malá dětská skupina se skutečnou zahradou. Děti od 2 do 6 let, max. 12 dětí ve skupině, Praha.",
    type: "website",
    locale: "cs_CZ",
    siteName: "Školička Zahrada",
  },
  icons: {
    icon:
      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Crect width='32' height='32' rx='8' fill='%232E6B3F'/%3E%3Cpath d='M16 26V14' stroke='%23FDF8EE' stroke-width='2.5' stroke-linecap='round'/%3E%3Cpath d='M16 15c0-5-3.5-8-8-8 0 5 3.5 8 8 8zm0 0c0-5 3.5-8 8-8 0 5-3.5 8-8 8z' fill='%23F5A623'/%3E%3C/svg%3E",
  },
};

const denniRytmus = [
  {
    cas: "7:30",
    nazev: "Příchod a volná hra",
    text: "Děti se scházejí postupně, každé si najde svou hru. Kdo chce, pomáhá tetě chystat svačinu.",
  },
  {
    cas: "9:00",
    nazev: "Kroužek na koberci",
    text: "Písnička na přivítání, povídání o tom, co dnes poroste na záhonku a co budeme dělat.",
  },
  {
    cas: "9:30",
    nazev: "Ven na zahradu",
    text: "Za každého počasí. Záhonky, pískoviště, hmyzí hotel, na jaře sázíme ředkvičky a hrách.",
  },
  {
    cas: "12:00",
    nazev: "Oběd a odpočinek",
    text: "Vaříme čerstvě, bez polotovarů. Menší děti spí, větší poslouchají čtenou pohádku.",
  },
  {
    cas: "15:00",
    nazev: "Svačina a vyzvedávání",
    text: "Odpoledne tvoříme, hrajeme si a čekáme na rodiče. Vyzvednout děti můžete do 17:00.",
  },
];

const duvody = [
  {
    znak: "12",
    jednotka: "dětí nejvýš",
    nazev: "Malá skupinka, velká pozornost",
    text: "Ve skupině je maximálně dvanáct dětí a dvě tety. Každé dítě známe jménem, náladou i tím, co má rádo ke svačině.",
  },
  {
    znak: "2–6",
    jednotka: "let",
    nazev: "Od batolat po předškoláky",
    text: "Mladší děti se učí od starších, starší se učí ohleduplnosti. Předškoláky připravujeme na zápis do školy.",
  },
  {
    znak: "400",
    jednotka: "m² zahrady",
    nazev: "Zahrada není jen název",
    text: "Vlastní oplocená zahrada se záhonky, ovocnými stromy a blátivou kuchyňkou. Ven chodíme každý den, i když mrholí.",
  },
];

const reference = [
  {
    text: "Syn ráno sám hlásí, že jde ‚zalejvat rajčata'. Po roce ve velké školce, kde plakal, je to zázrak.",
    autor: "Markéta, maminka Vojty (3 roky)",
  },
  {
    text: "Tety opravdu vědí, co která holka zrovna prožívá. Píšou nám i fotky z dopoledne — vidíme, že dcera je spokojená.",
    autor: "Tomáš, tatínek Elišky (4 roky)",
  },
  {
    text: "Dcera nastoupila ve dvou letech a adaptace trvala týden. Postupně, bez tlaku, přesně jak slíbili na první schůzce.",
    autor: "Jana, maminka Rozárky (2,5 roku)",
  },
];

export default function Page() {
  return (
    <main className="zh">
      {/* ===== HERO ===== */}
      <header className="zh-hero">
        <div className="zh-hero-inner">
          <p className="zh-wordmark" aria-label="Školička Zahrada">
            <span className="zh-wordmark-skolicka">Školička</span>
            <span className="zh-wordmark-zahrada">Zahrada</span>
          </p>

          <h1 className="zh-hero-title">
            <span className="zh-line zh-line-1">Děti tu</span>
            <span className="zh-line zh-line-2">
              rostou{" "}
              <svg
                className="zh-sprout"
                viewBox="0 0 64 72"
                aria-hidden="true"
                focusable="false"
              >
                <path
                  className="zh-sprout-stem"
                  d="M32 68V34"
                  stroke="currentColor"
                  strokeWidth="5"
                  strokeLinecap="round"
                  fill="none"
                />
                <path
                  className="zh-sprout-leaf zh-sprout-leaf-l"
                  d="M32 38C32 22 22 12 6 12c0 16 10 26 26 26z"
                  fill="var(--zh-sun)"
                />
                <path
                  className="zh-sprout-leaf zh-sprout-leaf-r"
                  d="M32 38c0-16 10-26 26-26 0 16-10 26-26 26z"
                  fill="var(--zh-leaf)"
                />
              </svg>
            </span>
            <span className="zh-line zh-line-3">jako na zahradě.</span>
          </h1>

          <p className="zh-hero-lead">
            Malá dětská skupina v Praze pro děti od 2 do 6 let. Vlastní zahrada
            se záhonky, nejvýš dvanáct dětí a tety, které znají každé dítě
            jménem.
          </p>

          <div className="zh-hero-actions">
            <a className="zh-btn zh-btn-primary" href="tel:+420777000000">
              Zavolat školičce
            </a>
            <a className="zh-btn zh-btn-ghost" href="#den">
              Jak vypadá den u nás
            </a>
          </div>

          <p className="zh-hero-note">
            Zápis na školní rok 2025/26 právě běží — zbývají 3 místa.
          </p>
        </div>

        {/* signature: pás záhonků */}
        <div className="zh-beds" aria-hidden="true">
          <div className="zh-bed zh-bed-1" />
          <div className="zh-bed zh-bed-2" />
          <div className="zh-bed zh-bed-3" />
        </div>
      </header>

      {/* ===== DEN VE ŠKOLIČCE ===== */}
      <section className="zh-den" id="den" aria-labelledby="den-h">
        <div className="zh-section-head">
          <p className="zh-eyebrow">Den ve školičce</p>
          <h2 id="den-h" className="zh-h2">
            Od ranní hry po odpolední svačinu
          </h2>
          <p className="zh-section-lead">
            Den má pevný rytmus, který dává dětem jistotu. Otevřeno máme každý
            všední den od 7:30 do 17:00.
          </p>
        </div>

        <ol className="zh-rytmus">
          {denniRytmus.map((krok) => (
            <li className="zh-krok" key={krok.cas}>
              <span className="zh-krok-cas">{krok.cas}</span>
              <div className="zh-krok-body">
                <h3 className="zh-krok-nazev">{krok.nazev}</h3>
                <p className="zh-krok-text">{krok.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      {/* ===== PROČ ZAHRADA + REFERENCE ===== */}
      <section className="zh-proc" aria-labelledby="proc-h">
        <div className="zh-section-head">
          <p className="zh-eyebrow zh-eyebrow-light">Proč Zahrada</p>
          <h2 id="proc-h" className="zh-h2 zh-h2-light">
            Malé místo, kde je čas na každé dítě
          </h2>
        </div>

        <div className="zh-duvody">
          {duvody.map((d) => (
            <article className="zh-duvod" key={d.nazev}>
              <p className="zh-duvod-znak">
                {d.znak} <span className="zh-duvod-jednotka">{d.jednotka}</span>
              </p>
              <h3 className="zh-duvod-nazev">{d.nazev}</h3>
              <p className="zh-duvod-text">{d.text}</p>
            </article>
          ))}
        </div>

        <div className="zh-reference">
          <h3 className="zh-reference-h">Co říkají rodiče</h3>
          <div className="zh-reference-grid">
            {reference.map((r) => (
              <figure className="zh-ref" key={r.autor}>
                <blockquote className="zh-ref-text">„{r.text}“</blockquote>
                <figcaption className="zh-ref-autor">{r.autor}</figcaption>
              </figure>
            ))}
          </div>
        </div>

        <p className="zh-proc-pozn">
          Jsme registrovaná dětská skupina podle zákona č. 247/2014 Sb. Najdete
          nás v klidné ulici v Praze, pět minut pěšky od tramvaje.
        </p>
      </section>
    </main>
  );
}
