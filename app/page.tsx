const nabidky = [
  {
    typ: "Prodej · Byt 4+1",
    nazev: "Byt 4+1 s lodžií, Skupova ul., Plzeň-Bory",
    cena: "6 350 000 Kč",
    detail: "82 m² · 4. podlaží · osobní vlastnictví",
    lokalita: "Plzeň — Jižní Předměstí",
  },
  {
    typ: "Prodej · Byt 2+kk",
    nazev: "Byt 58,5 m² s balkonem a garážovým stáním, Mutěnická ul.",
    cena: "6 100 000 Kč",
    detail: "59 m² · 1. podlaží · garážové stání",
    lokalita: "Plzeň — Severní Předměstí",
  },
  {
    typ: "Pronájem · Byt 3+1",
    nazev: "Byt 3+1 se šatnou a balkonem, ul. Na Kovárně",
    cena: "17 500 Kč / měsíc",
    detail: "81 m² · 2. podlaží · balkon",
    lokalita: "Plzeň — Doubravka",
  },
  {
    typ: "Prodej · Rodinný dům",
    nazev: "RD 137 m², pozemek 591 m² se zahradou, Krašovice",
    cena: "6 990 000 Kč",
    detail: "137 m² · zahrada 301 m²",
    lokalita: "okr. Plzeň-sever — Krašovice",
  },
  {
    typ: "Prodej · Chata",
    nazev: "Chata 40 m² na vlastním pozemku 370 m², Svojšín",
    cena: "1 290 000 Kč",
    detail: "40 m² · vlastní pozemek 370 m²",
    lokalita: "okr. Tachov — Svojšín",
  },
  {
    typ: "Prodej · Pozemek",
    nazev: "Stavební pozemek pro bydlení, 774 m², Šlovice",
    cena: "2 850 000 Kč",
    detail: "774 m² · určeno pro bydlení",
    lokalita: "Dobřany — Šlovice",
  },
];

const kroky = [
  {
    cislo: "1",
    titul: "Odhad podle místa, ne podle tabulky",
    text: "Přijedeme, projdeme nemovitost a řekneme vám cenu, za kterou se v Plzni a okolí opravdu prodává. Zdarma a bez závazku.",
  },
  {
    cislo: "2",
    titul: "Prezentace, která prodává",
    text: "Profesionální fotografie, půdorys a inzerce tam, kde ji kupující z Plzeňska skutečně hledají. Prohlídky vedeme my.",
  },
  {
    cislo: "3",
    titul: "Právník, úschova, katastr",
    text: "Smlouvy připraví advokát, peníze jdou přes advokátní úschovu podle nových pravidel a vklad do katastru hlídáme až do zápisu.",
  },
  {
    cislo: "4",
    titul: "Předání a servis po prodeji",
    text: "Předávací protokol, přepis energií, daňové přiznání k dani z nemovitosti. Končíme, až když je hotovo všechno.",
  },
];

const cisla = [
  { hodnota: "250+", popis: "prodaných nemovitostí" },
  { hodnota: "10 let", popis: "realitní praxe na Plzeňsku" },
  { hodnota: "26 let", popis: "podnikání ve službách" },
  { hodnota: "3 okresy", popis: "Plzeň, jižní Plzeňsko, Klatovsko" },
];

export default function Page() {
  return (
    <main className="sn">
      {/* ===== HERO ===== */}
      <header className="sn-top">
        <a className="sn-wordmark" href="#" aria-label="Standard Nemovitosti — úvod">
          <span className="sn-wordmark-parcela" aria-hidden="true">
            <span className="sn-wordmark-tecka" />
          </span>
          <span className="sn-wordmark-text">
            Standard<em>Nemovitosti</em>
          </span>
        </a>
        <a className="sn-top-tel" href="tel:+420602300050">
          +420 602 300 050
        </a>
      </header>

      <section className="sn-hero">
        <div className="sn-hero-grid" aria-hidden="true" />
        <div className="sn-hero-inner">
          <div className="sn-hero-copy">
            <p className="sn-katastr">
              <span className="sn-katastr-znak" aria-hidden="true" />
              k. ú. Plzeň · jižní Plzeňsko · Klatovsko
            </p>
            <h1>
              Prodáme váš byt v Plzni za cenu,
              <br />
              <span className="sn-hero-zvyraz">kterou tu známe z ulice,</span>
              <br />
              ne z celostátní tabulky.
            </h1>
            <p className="sn-hero-perex">
              Jsme realitní kancelář z Přeštic a Klatov. Deset let prodáváme a
              pronajímáme byty, domy a pozemky mezi Plzní a Šumavou — s vlastním
              právníkem, advokátní úschovou a odhadem zdarma.
            </p>
            <div className="sn-hero-akce">
              <a className="sn-btn sn-btn-plna" href="#nabidka">
                Chci prodat — odhad zdarma
              </a>
              <a className="sn-btn sn-btn-linka" href="#nabidka">
                Prohlédnout nabídku
              </a>
            </div>
            <dl className="sn-hero-fakta">
              <div>
                <dt>Aktuálně v nabídce</dt>
                <dd>15 nemovitostí</dd>
              </div>
              <div>
                <dt>Odhad nemovitosti</dt>
                <dd>zdarma do 48 hodin</dd>
              </div>
            </dl>
          </div>
          <figure className="sn-hero-obraz">
            <img
              src="/hero.webp"
              alt="Bytové domy v Plzni ve večerním světle — lokalita, kde Standard Nemovitosti prodává"
            />
            <figcaption>
              <span className="sn-parcelni-cislo">st. 602/3</span>
              Plzeň-Doubravka, ul. Na Kovárně — jedna z lokalit, kde právě
              pronajímáme
            </figcaption>
          </figure>
        </div>
      </section>

      {/* ===== SEKCE 1: NABÍDKA ===== */}
      <section className="sn-sekce sn-nabidka" id="nabidka" aria-labelledby="nabidka-titul">
        <div className="sn-sekce-hlava">
          <p className="sn-katastr">
            <span className="sn-katastr-znak" aria-hidden="true" />
            Výběr z nabídky
          </p>
          <h2 id="nabidka-titul">Co teď prodáváme a pronajímáme</h2>
          <p className="sn-sekce-perex">
            Každý inzerát píšeme sami a každou nemovitost jsme osobně prošli.
            Ceny jsou konečné — žádné „info u makléře", pokud to jde.
          </p>
        </div>

        <figure className="sn-nabidka-foto">
          <img
            src="/section-1.webp"
            alt="Interiér bytu 4+1 na plzeňských Borech připravený k prodeji"
          />
          <figcaption>
            <span className="sn-parcelni-cislo">6 350 000 Kč</span>
            Byt 4+1, Skupova ul., Plzeň-Bory — připraveno k prohlídkám
          </figcaption>
        </figure>

        <ul className="sn-listy">
          {nabidky.map((n) => (
            <li key={n.nazev} className="sn-list">
              <p className="sn-list-typ">{n.typ}</p>
              <h3>{n.nazev}</h3>
              <p className="sn-list-detail">{n.detail}</p>
              <div className="sn-list-pata">
                <span className="sn-list-cena">{n.cena}</span>
                <span className="sn-list-lokalita">{n.lokalita}</span>
              </div>
            </li>
          ))}
        </ul>

        <p className="sn-nabidka-vse">
          <a className="sn-btn sn-btn-linka" href="tel:+420602300050">
            Všech 15 nabídek vám pošleme — zavolejte
          </a>
        </p>
      </section>

      {/* ===== SEKCE 2: JAK PRODÁVÁME + DŮVĚRA ===== */}
      <section className="sn-sekce sn-postup" aria-labelledby="postup-titul">
        <div className="sn-postup-inner">
          <div className="sn-postup-copy">
            <p className="sn-katastr sn-katastr-svetly">
              <span className="sn-katastr-znak" aria-hidden="true" />
              Jak u nás prodej probíhá
            </p>
            <h2 id="postup-titul">
              Čtyři kroky od odhadu
              <br />k zápisu v katastru
            </h2>
            <p className="sn-sekce-perex sn-sekce-perex-svetly">
              Přeštice a Klatovy jsou náš domov, Plzeň náš rajon. Známe tu ceny
              po ulicích, úředníky na katastru i to, kdy se který panelák
              zateploval. Přesně tahle znalost rozhoduje o ceně.
            </p>

            <ol className="sn-kroky">
              {kroky.map((k) => (
                <li key={k.cislo}>
                  <span className="sn-krok-cislo" aria-hidden="true">
                    {k.cislo}
                  </span>
                  <div>
                    <h3>{k.titul}</h3>
                    <p>{k.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <div className="sn-postup-bok">
            <figure className="sn-postup-foto">
              <img
                src="/section-2.webp"
                alt="Makléř Standard Nemovitosti předává klientům klíče od domu na Plzeňsku"
              />
              <figcaption>
                <span className="sn-parcelni-cislo">předáno</span>
                RD Krašovice — od odhadu k předání klíčů za 11 týdnů
              </figcaption>
            </figure>

            <dl className="sn-cisla">
              {cisla.map((c) => (
                <div key={c.popis}>
                  <dt>{c.popis}</dt>
                  <dd>{c.hodnota}</dd>
                </div>
              ))}
            </dl>

            <blockquote className="sn-citace">
              <p>
                „Spokojenost zákazníka se nedá slíbit v inzerátu. Dá se jen
                odpracovat — pečlivě a každý den. Jinak by to nebyl standard."
              </p>
              <cite>— tým Standard Nemovitosti, Přeštice</cite>
            </blockquote>
          </div>
        </div>
      </section>
    </main>
  );
}
