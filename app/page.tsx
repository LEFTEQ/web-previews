import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Náš Chléb — poctivá kvásková pekárna | Ústí nad Labem",
  description:
    "Rodinná pekárna z Ústí nad Labem. Chléb na vlastním žitném kvasu, ručně hnětený a zrající po svém čase. Přes 20 druhů chleba, housky, ciabatty i koláče. Zastavte se v Šrámkově na Severní Terase.",
  openGraph: {
    title: "Náš Chléb — poctivá kvásková pekárna z Ústí nad Labem",
    description:
      "Vlastní dvoustupňový žitný kvas, ruční hnětení, zrání po svém čase. Čerstvý bochník každé ráno na Severní Terase.",
    locale: "cs_CZ",
    type: "website",
  },
};

const kvasKroky = [
  {
    cas: "18:30",
    nazev: "Rozkvas",
    popis:
      "Do vlastního žitného kvasu přidáme mouku a vodu. Zakládáme první stupeň — od téhle chvíle pracuje čas za nás.",
  },
  {
    cas: "22:00",
    nazev: "Šlechtění chuti",
    popis:
      "Druhý stupeň vede pekařský mistr rukou. Tady se rozhoduje o kyselosti a vůni, kterou pak poznáte na první skrojek.",
  },
  {
    cas: "04:15",
    nazev: "Hnětení a zrání",
    popis:
      "Těsto hněteme ručně a necháme zrát přesně tak dlouho, jak potřebuje. Žádné zkracování — kvašení nespěchá.",
  },
  {
    cas: "06:00",
    nazev: "Z pece na pult",
    popis:
      "Bochníky jdou do pece a odtud rovnou k vám. Když otevíráme, chléb je ještě teplý.",
  },
];

const nabidka = [
  {
    nazev: "Kváskový chléb",
    detail: "Přes 20 druhů denně",
    text:
      "Žitný, pšenično-žitný, s bramborem, se semínky. Všechny na vlastním kvasu, žádné droždí navíc.",
  },
  {
    nazev: "Housky a rohlíky",
    detail: "Staročeská klasika",
    text:
      "Ráno křupavé, jak mají být. K nim cornové pečivo a chlebánky na svačinu do práce.",
  },
  {
    nazev: "Focaccia a ciabatta",
    detail: "Kousek Středomoří",
    text:
      "Vzdušné pečivo z dlouho zrajícího těsta. K večeři, k sýru, nebo jen tak s dobrým olejem.",
  },
  {
    nazev: "Koláče a perníky",
    detail: "Sladká strana pece",
    text:
      "Marokánky, perníky, ovocné koláče. Pečeme je stejně poctivě jako chleba — jen s cukrem.",
  },
];

export default function Page() {
  return (
    <main className="pg">
      <header className="nav" aria-label="Hlavní">
        <a className="mark" href="#" aria-label="Náš Chléb, domů">
          <span className="mark-a">NÁŠ</span>
          <span className="mark-b">CHLÉB</span>
        </a>
        <nav className="nav-links" aria-label="Sekce">
          <a href="#pece">Z naší pece</a>
          <a href="#kvas">Náš kvas</a>
          <a href="tel:+420475000000" className="nav-call">Zavolat</a>
        </nav>
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <p className="hero-eyebrow">
          <span>Rodinná pekárna</span>
          <span className="dot" aria-hidden="true">·</span>
          <span>Ústí nad Labem, od 1998</span>
        </p>

        <h1 id="hero-title" className="hero-title">
          <span className="line l1">Chléb, který</span>
          <span className="line l2">necháme</span>
          <span className="line l3">
            <em>dozrát.</em>
          </span>
        </h1>

        <div className="hero-scale" aria-hidden="true">
          <span className="tick t0">18:30</span>
          <span className="tick t1" />
          <span className="tick t2" />
          <span className="tick t3">04:15</span>
          <span className="tick t4" />
          <span className="tick t5">06:00</span>
          <span className="crumb">z pece</span>
        </div>

        <p className="hero-lead">
          Vedeme vlastní žitný kvas dvoustupňovou metodou a těsto hněteme rukama.
          Tvar dostane čas, který si zaslouží — od večerního rozkvasu po ranní
          bochník na pultě v Šrámkově.
        </p>

        <div className="hero-cta">
          <a href="tel:+420475000000" className="btn btn-solid">Zavolat do pekárny</a>
          <a href="mailto:info@vasepekarna.cz" className="btn btn-line">Napsat nám</a>
        </div>
      </section>

      <section className="pece" id="pece" aria-labelledby="pece-title">
        <div className="sec-head">
          <p className="eyebrow">Z naší pece</p>
          <h2 id="pece-title">
            Přes dvacet druhů chleba, každý den čerstvý
          </h2>
          <p className="sec-lead">
            Přírodní suroviny, vlastní kvas a ruce zkušených pekařů. Nic z toho, co
            by urychlilo cestu z díže na váš stůl.
          </p>
        </div>

        <div className="pece-grid">
          <img
            className="pece-photo"
            src="/section-1.webp"
            alt="Bochníky kváskového chleba čerstvě vytažené z pece"
            loading="lazy"
          />
          <ul className="cards">
            {nabidka.map((it) => (
              <li className="card" key={it.nazev}>
                <h3>{it.nazev}</h3>
                <p className="card-detail">{it.detail}</p>
                <p className="card-text">{it.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="kvas" id="kvas" aria-labelledby="kvas-title">
        <div className="kvas-inner">
          <div className="kvas-head">
            <p className="eyebrow light">Náš kvas</p>
            <h2 id="kvas-title">
              Jeden bochník, dvanáct hodin trpělivosti
            </h2>
            <p className="sec-lead">
              Tajemství vůně není jen v surovinách. Je v čase a v člověku, který
              kvas vede. Tady je večer i noc, které chléb potřebuje, než se s ním
              ráno potkáte.
            </p>
          </div>

          <ol className="steps">
            {kvasKroky.map((k) => (
              <li className="step" key={k.cas}>
                <span className="step-time">{k.cas}</span>
                <div className="step-body">
                  <h3>{k.nazev}</h3>
                  <p>{k.popis}</p>
                </div>
              </li>
            ))}
          </ol>

          <figure className="kvas-figure">
            <img
              src="/section-2.webp"
              alt="Řez kváskovým chlebem s otevřenou strukturou střídy"
              loading="lazy"
            />
            <figcaption>
              Otevřená střída je znamení dobře vedeného kvašení — chléb je
              stravitelnější a vydrží déle vláčný.
            </figcaption>
          </figure>

          <p className="kvas-note">
            Najdete nás v ulici Šrámkova na Severní Terase v Ústí nad Labem.
            Otevíráme, když je chléb ještě teplý.
          </p>
        </div>
      </section>
    </main>
  );
}
