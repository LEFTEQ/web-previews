import type { CSSProperties } from "react";

export const metadata = {
  title: "Koupelny Horáček — obklady a rekonstrukce koupelen Brno",
  description:
    "Martin a Marek Horáčkovi. Precizní obkladačské práce a kompletní rekonstrukce koupelen v Brně a okolí. 20 let řemesla, dodržený termín i cena.",
  openGraph: {
    title: "Koupelny Horáček — obklady a rekonstrukce koupelen Brno",
    description:
      "Rodinná firma, dva bratři, jedna vášeň pro poctivou práci. Rekonstrukce koupelen v Brně na míru vašim prostorům.",
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
    nazev: "Rekonstrukce koupelen",
    popis:
      "Od demolice po poslední spáru. Návrh i realizaci přizpůsobíme vašemu prostoru — panelák, novostavba i rodinný dům.",
    detail: "Komplexně a individuálně",
  },
  {
    cislo: "02",
    nazev: "Velkoformátová keramika",
    popis:
      "Formáty až 1×3 m na stěnách, podlahách i kuchyňských deskách. Precizní disciplína, kde rozhoduje rovina a spára.",
    detail: "Interiér i exteriér",
  },
  {
    cislo: "03",
    nazev: "Obkladačské práce",
    popis:
      "Mozaiky, standardní keramika i pokládka na terče pro venkovní terasy. Všechny velikosti, jedna úroveň provedení.",
    detail: "Keramika i dlažba",
  },
  {
    cislo: "04",
    nazev: "Rekonstrukce bytu",
    popis:
      "Když se s koupelnou mění celý byt. Od malého panelového bytu po prostorný mezonet, přesně podle vašich dispozic.",
    detail: "Na míru dispozici",
  },
];

const reference = [
  {
    jmeno: "Zuzana Doubravová",
    text:
      "Jsem ráda, že rekonstrukci naší koupelny a WC dělal pan Horáček a jeho kolegové. Vše proběhlo perfektně, dodržena cena i termín. Zkušený odborník na svém místě — vřele doporučuji.",
  },
  {
    jmeno: "Veronika Slavíková",
    text:
      "Firma Koupelny Horáček rekonstruovala mou koupelnu a toaletu. Naprosto perfektní práce i komunikace, úžasný výsledek. Dodržený čas i rozpočet. Příště zase u nich.",
  },
];

const duvody = [
  { titulek: "20 let u řemesla", text: "Stovky koupelen v Brně a okolí. Poctivost je základ, férová dohoda cennější než složitý kontrakt." },
  { titulek: "Poradenství zdarma", text: "Poradíme s materiálem i řešením předem, abyste neplatili nic navíc." },
  { titulek: "Dodržené termíny", text: "Ctíme domluvené termíny a ceny. Nepříjemná překvapení se u nás nekonají." },
];

export default function Page() {
  return (
    <main className="kh">
      <header className="kh-nav">
        <a className="kh-word" href="#" aria-label="Koupelny Horáček, úvod">
          <span className="kh-word-k">KOUPELNY</span>
          <span className="kh-word-h">HORÁČEK</span>
        </a>
        <a className="kh-tel" href="tel:+420603304710">
          +420&nbsp;603&nbsp;304&nbsp;710
        </a>
      </header>

      <section className="kh-hero" aria-labelledby="kh-hero-title">
        <div className="kh-grout" aria-hidden="true">
          {Array.from({ length: 72 }).map((_, i) => (
            <span
              key={i}
              className="kh-tile"
              style={{ "--i": i } as CSSProperties}
            />
          ))}
        </div>

        <div className="kh-hero-inner">
          <p className="kh-eyebrow">Obklady · dlažby · Brno a okolí</p>
          <h1 id="kh-hero-title" className="kh-title">
            Rovina, spára,
            <span className="kh-title-accent"> a klid</span>
            <br />
            na dalších dvacet let.
          </h1>
          <p className="kh-lede">
            Dva bratři, Martin a Marek Horáčkovi. Rekonstrukce koupelen, kde je
            každá řada obkladu položená tak, jak byste ji chtěli mít doma.
          </p>
          <div className="kh-cta-row">
            <a className="kh-btn" href="tel:+420603304710">
              Zavolat Martinovi
            </a>
            <a className="kh-btn kh-btn-ghost" href="mailto:martin@koupelnyhoracek.cz">
              Napsat e-mail
            </a>
          </div>
        </div>
      </section>

      <section className="kh-services" aria-labelledby="kh-services-title">
        <div className="kh-section-head">
          <h2 id="kh-services-title">Co pro vás uděláme</h2>
          <p>
            Čtyři věci, které umíme do detailu. Vždycky u toho jsme osobně —
            i když máme za zády tým prověřených profesionálů.
          </p>
        </div>
        <ol className="kh-grid">
          {sluzby.map((s) => (
            <li key={s.cislo} className="kh-card">
              <span className="kh-card-num" aria-hidden="true">
                {s.cislo}
              </span>
              <div className="kh-card-body">
                <p className="kh-card-tag">{s.detail}</p>
                <h3>{s.nazev}</h3>
                <p>{s.popis}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="kh-trust" aria-labelledby="kh-trust-title">
        <div className="kh-trust-lead">
          <p className="kh-eyebrow kh-eyebrow-dark">Rodinná firma z Brna</p>
          <h2 id="kh-trust-title">
            Poctivá práce se pozná, když se za dva roky vrátíte a nic nedrhne.
          </h2>
          <p className="kh-trust-text">
            Za dvacet let jsme si prošli stovkami koupelen, kuchyní i bytových
            rekonstrukcí. Řemeslo bereme jako vášeň — vidět, jak se pod rukama
            mění běžné zdi ve výjimečný prostor, nás pořád baví. Najdete nás na
            Běloruské v Brně.
          </p>

          <ul className="kh-reasons">
            {duvody.map((d) => (
              <li key={d.titulek}>
                <strong>{d.titulek}</strong>
                <span>{d.text}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="kh-quotes">
          {reference.map((r) => (
            <figure key={r.jmeno} className="kh-quote">
              <blockquote>{r.text}</blockquote>
              <figcaption>{r.jmeno}</figcaption>
            </figure>
          ))}
          <p className="kh-address">
            Koupelny Horáček, s.r.o. · Běloruská 520/16, 625 00 Brno
          </p>
        </div>
      </section>
    </main>
  );
}
