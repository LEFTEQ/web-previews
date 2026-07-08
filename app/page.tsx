import type { CSSProperties } from "react";

export const dynamic = "force-static";

type Material = {
  cislo: string;
  nazev: string;
  popis: string;
  format: string;
};

const materialy: Material[] = [
  {
    cislo: "01",
    nazev: "Dlažba a obklady",
    popis:
      "Gres, rektifikovaná dlažba i velkoformáty do koupelen, kuchyní a na terasy. Vzorky si u nás srovnáte vedle sebe na denním světle, ne na monitoru.",
    format: "30×60 · 60×60 · 60×120 cm",
  },
  {
    cislo: "02",
    nazev: "Pojiva a malty",
    popis:
      "Cement Hranice, Baumit, Cemix, Weber, Mapei, Quick-mix. Lepidla a spárovací hmoty vám naměříme přesně na plochu, kterou obkládáte.",
    format: "pytle · palety · míchací centrum BASF",
  },
  {
    cislo: "03",
    nazev: "Zdicí materiál a izolace",
    popis:
      "Cihelné bloky, betonové výrobky, komínové systémy a tepelné izolace pro hrubou stavbu. Na paletu i na celý dům.",
    format: "skladem · rozvoz po Olomoucku",
  },
  {
    cislo: "04",
    nazev: "Sanita, barvy, sádrokarton",
    popis:
      "Umyvadla, vany, sprchové kouty, interiérové barvy a sádrokartonové systémy — abyste koupelnu dotáhli od stěny až po baterii na jednom místě.",
    format: "na dotaz i na objednávku",
  },
];

const duvody: { hlava: string; text: string }[] = [
  {
    hlava: "Vzorky si osaháte",
    text:
      "Dlažbu vybíráte podle spár, hran a lesku — ne podle fotky. U nás na Sladkovského si formáty přiložíte k sobě a uvidíte, jak spolu ladí.",
  },
  {
    hlava: "Spočítáme spotřebu",
    text:
      "Řekněte nám rozměry místnosti a my dopočítáme, kolik metrů dlažby, lepidla a spárovačky potřebujete. Ušetříte za zbytečné přebytky.",
  },
  {
    hlava: "Rozvezeme na Olomoucku",
    text:
      "Palety s materiálem přivezeme na stavbu po Olomouci i okolí. Nemusíte řešit, jak dostat tunu dlažby domů.",
  },
];

export default function Page() {
  return (
    <main className="balus">
      <a className="balus-skip" href="#sortiment">
        Přeskočit na sortiment
      </a>

      <header className="balus-top">
        <span className="balus-wordmark" aria-label="BALUS Innovation, stavebniny Olomouc">
          <span className="balus-wordmark-b">BALUS</span>
          <span className="balus-wordmark-i">stavebniny · dlažba · obklady</span>
        </span>
        <span className="balus-hours">
          Po–Pá 07:00–16:30 · So 07:00–11:00
        </span>
      </header>

      <section className="balus-hero" aria-labelledby="hero-nadpis">
        <div className="balus-hero-grid">
          <div className="balus-hero-copy">
            <p className="balus-eyebrow">Stavebniny · Olomouc, Sladkovského</p>
            <h1 id="hero-nadpis" className="balus-hero-nadpis">
              Dlažba, kterou si
              <span className="balus-hl"> přiložíte ke stěně</span>
              <br />
              dřív, než ji položíte.
            </h1>
            <p className="balus-hero-lead">
              Gres, obklady, pojiva i zdicí materiál na jednom dvoře. Přijďte si
              vzorky srovnat na denním světle — poradíme s formátem, spárou i
              spotřebou lepidla.
            </p>
            <div className="balus-hero-akce">
              <a className="balus-btn balus-btn-plna" href="tel:+420585151700">
                Zavolat na prodejnu
              </a>
              <a className="balus-btn balus-btn-linka" href="#sortiment">
                Prohlédnout sortiment
              </a>
            </div>
            <dl className="balus-fakta">
              <div>
                <dt>Formáty od</dt>
                <dd>30×60 cm</dd>
              </div>
              <div>
                <dt>Skladem značky</dt>
                <dd>Baumit · Cemix · Mapei</dd>
              </div>
              <div>
                <dt>Rozvoz</dt>
                <dd>Olomouc a okolí</dd>
              </div>
            </dl>
          </div>
          <figure className="balus-hero-obraz">
            <img
              src="/hero.webp"
              alt="Skladová plocha stavebnin BALUS s naskládanou dlažbou a obklady"
              width={1200}
              height={1500}
              loading="eager"
            />
            <figcaption>Prodejna Sladkovského 807/53a, Olomouc</figcaption>
          </figure>
        </div>
      </section>

      <section id="sortiment" className="balus-sortiment" aria-labelledby="sortiment-nadpis">
        <div className="balus-sekce-hlava">
          <p className="balus-eyebrow balus-eyebrow-tmava">Sortiment</p>
          <h2 id="sortiment-nadpis">Čtyři police, které tvoří celou stavbu</h2>
          <p className="balus-sekce-lead">
            Od hrubé stavby po poslední spáru v koupelně. Vybírejte podle toho,
            kde na stavbě zrovna stojíte.
          </p>
        </div>
        <ol className="balus-karty">
          {materialy.map((m) => (
            <li key={m.cislo} className="balus-karta">
              <span className="balus-karta-cislo" aria-hidden="true">
                {m.cislo}
              </span>
              <h3>{m.nazev}</h3>
              <p>{m.popis}</p>
              <p className="balus-karta-format">{m.format}</p>
            </li>
          ))}
        </ol>
        <figure className="balus-sirka-obraz">
          <img
            src="/section-1.webp"
            alt="Ukázka dlažby a obkladů z nabídky stavebnin BALUS"
            width={1600}
            height={900}
            loading="lazy"
          />
        </figure>
      </section>

      <section className="balus-onas" aria-labelledby="onas-nadpis">
        <div className="balus-onas-grid">
          <figure className="balus-onas-obraz">
            <img
              src="/section-2.webp"
              alt="Zázemí stavebnin BALUS Innovation v Olomouci"
              width={1200}
              height={1400}
              loading="lazy"
            />
          </figure>
          <div className="balus-onas-copy">
            <p className="balus-eyebrow balus-eyebrow-tmava">O nás</p>
            <h2 id="onas-nadpis">
              Moderní stavebniny, které vám rozumí
            </h2>
            <p>
              Jsme rodinné stavebniny na Sladkovského v Olomouci. Vedle běžného
              stavebního materiálu se soustředíme na to, s čím si zákazníci
              nejčastěji nevědí rady — na výběr dlažby a obkladů. Máme za sebou
              roky v oboru na moravském regionu a víme, že správně vybraný formát
              udělá s místností víc než barva na stěně.
            </p>
            <ul className="balus-duvody">
              {duvody.map((d) => (
                <li key={d.hlava}>
                  <h3>{d.hlava}</h3>
                  <p>{d.text}</p>
                </li>
              ))}
            </ul>
            <p className="balus-kontakt-radek">
              Přijďte na dvůr:{" "}
              <strong>Sladkovského 807/53a, 779 00 Olomouc</strong>. Poradí vám
              Jiří Renda a Denisa Mlčochová —{" "}
              <a href="tel:+420585151700">585 151 700</a>.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

export const metadata = {
  title: "BALUS Innovation — stavebniny, dlažba a obklady Olomouc",
};

const _unused: CSSProperties = {};
void _unused;
