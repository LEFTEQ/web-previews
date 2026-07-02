import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Jiná Zahrada — zahradní centra Chabařovice a Debř",
  description:
    "Zahradní centra Jiná Zahrada u Ústí nad Labem: rostliny, trvalky, substráty, nářadí i kavárna mezi květinami. Otevřeno každý den, poradíme s výběrem.",
  openGraph: {
    title: "Jiná Zahrada — zahradní centra Chabařovice a Debř",
    description:
      "Rostliny, trvalky, substráty i kavárna mezi květinami. Dvě zahradní centra, otevřeno každý den včetně víkendu.",
    type: "website",
    locale: "cs_CZ",
  },
};

const sortiment = [
  {
    nazev: "Rostliny a trvalky",
    popis:
      "Růže, hortenzie, trávy i suchomilné trvalky, které zvládnou severočeská léta. Každý týden čerstvý závoz.",
    znacka: "venku",
  },
  {
    nazev: "Truhlíky a květináče",
    popis:
      "Keramika, terakota i mrazuvzdorné venkovní nádoby. Pomůžeme vybrat velikost, aby rostlině nebylo těsno.",
    znacka: "dům i terasa",
  },
  {
    nazev: "Substráty a hnojiva",
    popis:
      "Substráty pro výsadbu, přesazování i trávník. Poradíme, co potřebuje zrovna vaše půda — v Ústí bývá těžší, jílovitá.",
    znacka: "základ",
  },
  {
    nazev: "Nářadí a dekorace",
    popis:
      "Nůžky, rýče, konve i dekorace pro dům. Věci, které v zahradě opravdu používáme, ne katalogové zboží.",
    znacka: "do ruky",
  },
];

const sezona = [
  {
    mesic: "Předjaří",
    rada: "Řez ovocných stromů a příprava záhonů. Přijďte si pro první semínka a výsevní substrát.",
  },
  {
    mesic: "Jaro",
    rada: "Sazenice zeleniny, bylinky a balkonovky. Největší výběr trvalek celého roku.",
  },
  {
    mesic: "Léto",
    rada: "Suchomilné trvalky, zálivka a ochrana před vedry. Druhá sklizeň zeleniny se seje teď.",
  },
  {
    mesic: "Podzim",
    rada: "Cibuloviny, výsadba stromů a keřů. Nejlepší čas zasadit cokoli, co má kořeny.",
  },
];

export default function Page() {
  return (
    <main className="jz">
      {/* ===================== HERO ===================== */}
      <header className="hero" aria-label="Jiná Zahrada — úvod">
        <div className="hero-topbar">
          <span className="wordmark">
            Jiná<em>Zahrada</em>
          </span>
          <span className="hero-note" aria-hidden="true">
            zahradní centra · Ústecko
          </span>
        </div>

        <div className="hero-body">
          <p className="hero-eyebrow">
            Chabařovice &amp; Debř — otevřeno každý den, i v neděli
          </p>
          <h1 className="hero-title">
            <span className="hero-line hero-line-1">Zahrada,</span>
            <span className="hero-line hero-line-2">
              která je <em>jiná</em>
            </span>
            <span className="hero-line hero-line-3">než ta vedle.</span>
          </h1>
          <p className="hero-lead">
            Dvě zahradní centra plná rostlin, vůní a lidí, kteří zahradě
            rozumí. Přijeďte si pro trvalky, radu i kávu mezi květinami.
          </p>
          <div className="hero-cta">
            <a className="btn btn-primary" href="#prodejny">
              Kde nás najdete
            </a>
            <a className="btn btn-ghost" href="#sortiment">
              Co u nás roste
            </a>
          </div>
        </div>

        {/* Signature: řádkovaný záhon — svislé "brázdy" s rašícími listy */}
        <div className="zahon" aria-hidden="true">
          <div className="brazda b1">
            <span className="list" />
          </div>
          <div className="brazda b2">
            <span className="list" />
          </div>
          <div className="brazda b3">
            <span className="list list-kvet" />
          </div>
          <div className="brazda b4">
            <span className="list" />
          </div>
          <div className="brazda b5">
            <span className="list" />
          </div>
          <div className="brazda b6">
            <span className="list list-kvet" />
          </div>
          <div className="brazda b7">
            <span className="list" />
          </div>
        </div>
      </header>

      {/* ===================== SORTIMENT ===================== */}
      <section className="sekce sortiment" id="sortiment" aria-labelledby="sortiment-h">
        <div className="sekce-hlava">
          <p className="eyebrow">Stálý sortiment</p>
          <h2 id="sortiment-h">
            Od semínka po vzrostlý strom
          </h2>
          <p className="sekce-perex">
            Nejsme sklad rostlin u dálnice. Sortiment vybíráme podle sezóny a
            podle toho, co se na Ústecku opravdu ujme.
          </p>
        </div>

        <div className="karty" role="list">
          {sortiment.map((s) => (
            <article className="karta" role="listitem" key={s.nazev}>
              <span className="karta-znacka">{s.znacka}</span>
              <h3>{s.nazev}</h3>
              <p>{s.popis}</p>
            </article>
          ))}
        </div>

        <div className="sezona" aria-label="Sezónní rady">
          <h3 className="sezona-titul">Co řešit právě teď — zahradnický rok</h3>
          <ol className="sezona-pas">
            {sezona.map((s) => (
              <li key={s.mesic}>
                <strong>{s.mesic}</strong>
                <p>{s.rada}</p>
              </li>
            ))}
          </ol>
          <p className="sezona-pozn">
            Podrobné návody najdete v našem časopisu <strong>TIP</strong> —
            zdarma k vyzvednutí na obou prodejnách, 5&nbsp;čísel ročně.
          </p>
        </div>
      </section>

      {/* ===================== PRODEJNY / DŮVĚRA ===================== */}
      <section className="sekce prodejny" id="prodejny" aria-labelledby="prodejny-h">
        <div className="sekce-hlava">
          <p className="eyebrow">Naše prodejny</p>
          <h2 id="prodejny-h">Dvě zahrady, kam se jezdí i na kávu</h2>
          <p className="sekce-perex">
            Obě centra mají otevřeno sedm dní v týdnu. A v obou si po nákupu
            sednete mezi květiny — s dortem, kávou nebo obědem.
          </p>
        </div>

        <div className="prodejny-grid">
          <article className="prodejna">
            <p className="prodejna-stitek">Chabařovice · u Ústí nad Labem</p>
            <h3>Zahradní centrum Chabařovice</h3>
            <p>
              Naše domovská zahrada kousek od Ústí. Široká nabídka rostlin,
              dekorací a všeho pro dům i zahradu — a uprostřed toho kavárna,
              kde si dáte dort v obklopení flóry.
            </p>
            <ul className="prodejna-fakta">
              <li>Otevřeno každý den včetně soboty a neděle</li>
              <li>Kavárna s domácími dorty a občerstvením</li>
              <li>Výstavy a akce pro celou rodinu</li>
            </ul>
          </article>

          <article className="prodejna">
            <p className="prodejna-stitek">Debř · Mladá Boleslav</p>
            <h3>Zahradní centrum Debř</h3>
            <p>
              V Debři máme opět otevřeno! Zahradní centrum plné inspirace a
              bistro, kde si odpočinete od každodenního shonu — oběd, rodinné
              posezení i krátká zastávka na kávu.
            </p>
            <ul className="prodejna-fakta">
              <li>Otevřeno každý den včetně víkendu</li>
              <li>Bistro s poctivým jídlem a kávou</li>
              <li>Sezónní slevové akce každý týden</li>
            </ul>
          </article>
        </div>

        <ul className="duvera" aria-label="Proč k nám">
          <li>
            <strong>Odborný personál</strong>
            <span>Poradíme s výběrem — od substrátu po řez keřů.</span>
          </li>
          <li>
            <strong>Vždy čerstvé rostliny</strong>
            <span>Kvalitu hlídáme u každého závozu.</span>
          </li>
          <li>
            <strong>Dárkové poukazy on-line</strong>
            <span>Objednáte, zaplatíte a poukaz dorazí e-mailem obratem.</span>
          </li>
          <li>
            <strong>Nové slevy každý týden</strong>
            <span>Sezónní akce na produkty, které máte rádi.</span>
          </li>
        </ul>
      </section>
    </main>
  );
}
