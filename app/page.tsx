import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AZ Credit — účetní kancelář Hradec Králové",
  description:
    "Účetnictví, mzdy a daňové poradenství v Hradci Králové. Vedeme účetnictví přesně a včas — uzávěrky, přiznání i výplaty máte pod kontrolou. Kancelář na Brněnské 300/31.",
  openGraph: {
    title: "AZ Credit — účetní kancelář Hradec Králové",
    description:
      "Účetnictví, mzdy a daňové poradenství v Hradci Králové. Uzávěrky a přiznání odevzdané včas, výplaty spočítané na den.",
    type: "website",
    locale: "cs_CZ",
    images: [{ url: "/hero.webp", width: 1200, height: 630, alt: "Účetní kancelář AZ Credit" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "AZ Credit — účetní kancelář Hradec Králové",
    description:
      "Účetnictví, mzdy a daňové poradenství v Hradci Králové. Termíny hlídáme za vás.",
    images: ["/hero.webp"],
  },
};

const sluzby = [
  {
    kod: "§",
    nazev: "Účetnictví a daňová evidence",
    popis:
      "Zaúčtujeme doklady, srovnáme banku a sestavíme účetní závěrku. Jednou měsíčně dostanete přehled, kolik firma vydělala a kolik odvede.",
    body: ["Podvojné účetnictví i daňová evidence", "Měsíční výkazy zisku a nákladů", "Roční závěrka a přiznání k dani z příjmů"],
  },
  {
    kod: "₽",
    nazev: "Mzdy a personalistika",
    popis:
      "Spočítáme výplaty, odešleme přehledy na správu i pojišťovny a pohlídáme termíny. Zaměstnanci dostanou výplatní pásky, vy klid.",
    body: ["Zpracování mezd a výplatních pásek", "Přihlášky, odhlášky a ELDP", "Roční zúčtování daně zaměstnancům"],
  },
  {
    kod: "%",
    nazev: "Daňové poradenství",
    popis:
      "Poradíme, jak zdanit příjem, kdy se vyplatí paušál a co si můžete uplatnit. Přiznání připravíme a projdeme s vámi řádek po řádku.",
    body: ["Přiznání k DPH i dani z příjmů", "Optimalizace odvodů v mezích zákona", "Zastoupení při jednání s finančním úřadem"],
  },
];

const duvody = [
  {
    cislo: "01",
    nazev: "Termíny hlídáme za vás",
    popis:
      "DPH do 25., přiznání do konce března, přehledy na jaře. Datum vám nepřipomínáme na poslední chvíli — máme ho pohlídané dopředu.",
  },
  {
    cislo: "02",
    nazev: "Roky praxe v jednom kraji",
    popis:
      "Účtujeme firmám z Hradce a okolí dost dlouho na to, abychom znali místní úřady i typické situace vašeho oboru.",
  },
  {
    cislo: "03",
    nazev: "Odpovíme, když voláte",
    popis:
      "Doklady i dotazy řešíme e-mailem nebo osobně na Brněnské. Nejste číslo ve frontě — víme, čí účetnictví vedeme.",
  },
];

export default function Page() {
  return (
    <main className="az">
      <header className="az-top">
        <a className="az-mark" href="#" aria-label="AZ Credit, účetní kancelář">
          <span className="az-mark__az">AZ</span>
          <span className="az-mark__credit">Credit</span>
          <span className="az-mark__dot">.</span>
        </a>
        <p className="az-top__hours">
          <span>Po–Pá</span> 9–11 &amp; 13–15 · Brněnská 300/31, Hradec Králové
        </p>
      </header>

      <section className="az-hero" aria-labelledby="hero-nadpis">
        <div className="az-hero__ledger" aria-hidden="true">
          <span>Účetní deník</span>
          <span>Md / Dal</span>
          <span>Uzávěrka</span>
        </div>
        <div className="az-hero__grid">
          <div className="az-hero__text">
            <p className="az-eyebrow">Účetní kancelář · Hradec Králové</p>
            <h1 id="hero-nadpis">
              Účetnictví,
              <br />
              které <em>sedí</em>
              <br />
              na haléř.
            </h1>
            <p className="az-hero__lead">
              Vedeme účetnictví, počítáme mzdy a připravujeme daňová
              přiznání firmám z Hradce Králové. Doklady předáte, termíny
              i výkazy nechte na nás.
            </p>
            <div className="az-hero__cta">
              <a className="az-btn" href="tel:+420495536033">Zavolat 495 536 033</a>
              <a className="az-btn az-btn--ghost" href="mailto:info@azcredit.cz">Napsat e-mail</a>
            </div>
          </div>
          <figure className="az-hero__media">
            <img
              src="/hero.webp"
              alt="Pracovní stůl účetní kanceláře AZ Credit s doklady a výkazy"
              className="az-hero__img"
              loading="eager"
            />
            <figcaption className="az-hero__balance">
              <span className="az-hero__balance-label">Zůstatek účtu</span>
              <span className="az-hero__balance-value">0,00 Kč</span>
              <span className="az-hero__balance-note">rozdíl Md a Dal — sedí</span>
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="az-sluzby" aria-labelledby="sluzby-nadpis">
        <div className="az-section-head">
          <p className="az-eyebrow">Co pro vás vedeme</p>
          <h2 id="sluzby-nadpis">Tři sloupce, na kterých firma stojí</h2>
        </div>
        <figure className="az-sluzby__media">
          <img
            src="/section-1.webp"
            alt="Účetní zpracovává doklady a výkazy v kanceláři AZ Credit"
            loading="lazy"
          />
        </figure>
        <div className="az-sluzby__list">
          {sluzby.map((s) => (
            <article className="az-service" key={s.nazev}>
              <span className="az-service__kod" aria-hidden="true">{s.kod}</span>
              <div className="az-service__body">
                <h3>{s.nazev}</h3>
                <p>{s.popis}</p>
                <ul>
                  {s.body.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="az-proc" aria-labelledby="proc-nadpis">
        <div className="az-proc__grid">
          <div className="az-proc__intro">
            <p className="az-eyebrow">Proč AZ Credit</p>
            <h2 id="proc-nadpis">Klid v účetnictví se pozná podle toho, že o něm nemusíte přemýšlet</h2>
            <figure className="az-proc__media">
              <img
                src="/section-2.webp"
                alt="Tým účetní kanceláře AZ Credit v Hradci Králové"
                loading="lazy"
              />
            </figure>
            <blockquote className="az-quote">
              <p>
                „Spolehlivost, pružnost, rychlé jednání a příjemné vystupování —
                s AZ Credit máme účetnictví i mzdy pod kontrolou.“
              </p>
              <cite>
                Ing. Jana Šormová
                <span>jednatelka, BEAUTY – plastická chirurgie s.r.o.</span>
              </cite>
            </blockquote>
          </div>
          <ol className="az-proc__list">
            {duvody.map((d) => (
              <li className="az-reason" key={d.cislo}>
                <span className="az-reason__num" aria-hidden="true">{d.cislo}</span>
                <h3>{d.nazev}</h3>
                <p>{d.popis}</p>
              </li>
            ))}
            <li className="az-reason az-reason--contact">
              <h3>Domluvme si první schůzku</h3>
              <p>Přijďte na Brněnskou nebo zavolejte — projdeme, jak vaše účetnictví vypadá dnes a co převezmeme.</p>
              <div className="az-reason__cta">
                <a className="az-btn" href="tel:+420605635511">Zavolat 605 635 511</a>
              </div>
            </li>
          </ol>
        </div>
      </section>
    </main>
  );
}
