import type { CSSProperties } from "react";

export const metadata = {
  title: "Klenoty KP — zakázkové zlatnictví, České Budějovice",
  description:
    "Rodinné zlatnictví na Krajinské v Českých Budějovicích. Snubní prsteny na míru, opravy do týdne, výkup zlata. Tradice od roku 1934.",
  openGraph: {
    title: "Klenoty KP — zakázkové zlatnictví",
    description:
      "Snubní prsteny na míru, opravy šperků do týdne a servis švýcarských hodinek. Krajinská 37, České Budějovice.",
    type: "website",
    locale: "cs_CZ",
  },
};

type Sluzba = {
  cislo: string;
  nazev: string;
  popis: string;
  detail: string;
};

const sluzby: Sluzba[] = [
  {
    cislo: "01",
    nazev: "Snubní prsteny na míru",
    popis:
      "Modely značky Rýdl i vlastní návrhy. Ze tří barev 14kt zlata, platiny nebo palladia.",
    detail: "Od návrhu ke zkoušce",
  },
  {
    cislo: "02",
    nazev: "Zakázková výroba šperků",
    popis:
      "Nejdřív návrh a cenu odsouhlasíme s vámi. Můžete přinést i vlastní zlato nebo starý šperk.",
    detail: "Konzultace se zlatníkem",
  },
  {
    cislo: "03",
    nazev: "Opravy šperků do týdne",
    popis:
      "Zlomený řetízek, zvětšení prstenu, výměna kamene. Vrátíme vám to hotové za pár dní.",
    detail: "Většinou do 7 dnů",
  },
  {
    cislo: "04",
    nazev: "Hodinky a servis",
    popis:
      "Švýcarské náramkové i kapesní hodinky. Záruční i pozáruční servis všech značek.",
    detail: "Pánské i dámské",
  },
  {
    cislo: "05",
    nazev: "Výkup zlata a stříbra",
    popis:
      "Zlomkové zlato i stříbro vykoupíme, nebo započteme jako protihodnotu při výrobě nového šperku.",
    detail: "Za zvýhodněnou cenu",
  },
];

const oteviraci = [
  { den: "Pondělí", cas: "9:00–18:00" },
  { den: "Úterý", cas: "9:00–18:00" },
  { den: "Středa", cas: "9:00–18:00" },
  { den: "Čtvrtek", cas: "9:00–18:00" },
  { den: "Pátek", cas: "9:00–18:00" },
  { den: "Sobota", cas: "9:00–12:00" },
  { den: "Neděle", cas: "zavřeno", zavreno: true },
];

export default function Page() {
  return (
    <main className="kp">
      <header className="kp-top">
        <a className="kp-mark" href="#" aria-label="Klenoty KP, domů">
          <span className="kp-mark-mono">KP</span>
          <span className="kp-mark-word">
            Klenoty
            <em>zlatnictví · Č. Budějovice</em>
          </span>
        </a>
        <a className="kp-call" href="tel:+420603452134">
          Zavolat zlatníkovi
        </a>
      </header>

      <section className="kp-hero" aria-labelledby="hero-nadpis">
        <div className="kp-hero-media">
          <img
            src="/hero.webp"
            alt="Ruce zlatníka při práci na snubním prstenu v dílně Klenoty KP"
            className="kp-hero-img"
          />
        </div>
        <div className="kp-hero-body">
          <p className="kp-punc">
            <span className="kp-punc-year">1934</span>
            <span className="kp-punc-dash" aria-hidden="true">
              &mdash;
            </span>
            <span>rodinná tradice, tři generace u ponku</span>
          </p>
          <h1 id="hero-nadpis">
            Prsten, který
            <span className="kp-hero-swash">vznikne přímo</span>
            pro vás.
          </h1>
          <p className="kp-hero-lead">
            Zakázkové zlatnictví na Krajinské ulici v Českých Budějovicích.
            Nejdřív si sedneme nad návrh a cenu, pak Karel u ponku dotáhne
            šperk do konce — klidně z vašeho vlastního zlata.
          </p>
          <div className="kp-hero-actions">
            <a className="kp-btn kp-btn-solid" href="tel:+420603452134">
              Domluvit návrh prstenu
            </a>
            <a
              className="kp-btn kp-btn-ghost"
              href="#sluzby"
            >
              Co u nás pořídíte
            </a>
          </div>
        </div>
      </section>

      <section className="kp-sluzby" id="sluzby" aria-labelledby="sluzby-nadpis">
        <div className="kp-sec-head">
          <p className="kp-eyebrow">Ryzost 585/1000</p>
          <h2 id="sluzby-nadpis">Pět věcí, kvůli kterým chodí lidé k nám</h2>
          <p className="kp-sec-note">
            Ke každému přistupujeme jinak. Ať přijdete pro snubní prsteny,
            hodinky, nebo se zlomeným řetízkem po babičce.
          </p>
        </div>

        <ol className="kp-list">
          {sluzby.map((s) => (
            <li className="kp-item" key={s.cislo}>
              <span className="kp-item-num" aria-hidden="true">
                {s.cislo}
              </span>
              <div className="kp-item-body">
                <h3>{s.nazev}</h3>
                <p>{s.popis}</p>
              </div>
              <span className="kp-item-tag">{s.detail}</span>
            </li>
          ))}
        </ol>

        <figure className="kp-sluzby-fig">
          <img
            src="/section-1.webp"
            alt="Vitrína se zlatými a stříbrnými šperky v prodejně Klenoty KP"
          />
          <figcaption>
            Naše kolekce ve vitríně na Krajinské — a vedle ní ponk, kde
            vznikají zakázky.
          </figcaption>
        </figure>
      </section>

      <section className="kp-pribeh" aria-labelledby="pribeh-nadpis">
        <figure className="kp-pribeh-fig">
          <img
            src="/section-2.webp"
            alt="Detail zlatnických nástrojů a rozpracovaného šperku na ponku"
          />
        </figure>

        <div className="kp-pribeh-body">
          <p className="kp-eyebrow">Kdo vám prsten vyrobí</p>
          <h2 id="pribeh-nadpis">Karel Pýcha, zlatník &amp; klenotník</h2>
          <p>
            Talentové zkoušky složil v roce 1988 a v roce 1991 se vyučil
            zlatníkem-klenotníkem na Karlově ulici v Praze — tehdy jediné
            škole toho oboru v celém Československu. Od té doby stojí u ponku
            každý den.
          </p>
          <p>
            Prodejnu Klenoty KP najdete na adrese
            <strong> Krajinská 37/4, České Budějovice</strong>. Prodáváme
            zlaté, stříbrné i ocelové šperky a hodinky světových značek —
            a hlavně vyrábíme na míru.
          </p>

          <dl className="kp-fakta">
            <div>
              <dt>V oboru</dt>
              <dd>od roku 1934</dd>
            </div>
            <div>
              <dt>Snubní prsteny</dt>
              <dd>Rýdl · zlato, platina, palladium</dd>
            </div>
            <div>
              <dt>Opravy</dt>
              <dd>zpravidla do 7 dnů</dd>
            </div>
          </dl>

          <div className="kp-hodiny" aria-labelledby="hodiny-nadpis">
            <p className="kp-hodiny-head" id="hodiny-nadpis">
              Otevírací doba
            </p>
            <ul>
              {oteviraci.map((o) => (
                <li key={o.den} className={o.zavreno ? "kp-zavreno" : ""}>
                  <span>{o.den}</span>
                  <span aria-hidden="true" className="kp-hodiny-line" />
                  <span>{o.cas}</span>
                </li>
              ))}
            </ul>
            <p className="kp-adresa">
              Krajinská 37/4, 370 01 České Budějovice ·{" "}
              <a href="tel:+420387210120">387 210 120</a>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
