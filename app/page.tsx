import type { CSSProperties } from "react";

export const metadata = {
  title: "Advokátní kancelář Iva Jónová — Ústí nad Labem",
  description:
    "Advokátka Mgr. et Bc. Iva Jónová, LL.M. v Ústí nad Labem a Litoměřicích. Občanské, rodinné, obchodní i trestní právo. První schůzka po telefonické dohodě.",
  openGraph: {
    title: "Advokátní kancelář Iva Jónová — Ústí nad Labem",
    description:
      "Zastoupení v civilních i trestních věcech, oddlužení, právo nemovitostí. Kanceláře v Ústí nad Labem a Litoměřicích.",
    type: "website",
    locale: "cs_CZ",
    images: [{ url: "/hero.webp" }],
  },
};

type Obor = {
  cislo: string;
  nazev: string;
  popis: string;
};

const obory: Obor[] = [
  {
    cislo: "§ 89",
    nazev: "Rodinné a rozvodové právo",
    popis:
      "Rozvod, úprava péče o děti, výživné, vypořádání společného jmění. Vedu jednání tak, aby dohoda vydržela déle než samotný spor.",
  },
  {
    cislo: "§ 2079",
    nazev: "Nemovitosti a bytové právo",
    popis:
      "Kupní a nájemní smlouvy, převody bytů, věcná břemena, spory se společenstvím vlastníků. Advokátní úschova kupní ceny včetně zápisu do katastru.",
  },
  {
    cislo: "§ 389",
    nazev: "Oddlužení a exekuce",
    popis:
      "Insolvenční návrh na oddlužení, obrana proti neoprávněné exekuci, jednání s věřiteli. Provedu vás celým řízením až po osvobození od dluhů.",
  },
  {
    cislo: "§ 420",
    nazev: "Náhrada škody a spory",
    popis:
      "Vymáhání pohledávek, náhrada škody a nemajetkové újmy, bezdůvodné obohacení. Zastoupení u soudu i v rozhodčím řízení.",
  },
  {
    cislo: "§ 12",
    nazev: "Trestní obhajoba",
    popis:
      "Obhajoba od prvního výslechu, přítomnost u úkonů, zastoupení poškozeného. Dostupná i v neodkladných situacích po předchozí domluvě.",
  },
  {
    cislo: "§ 132",
    nazev: "Obchodní a smluvní právo",
    popis:
      "Zakládání společností, smluvní dokumentace, spory mezi společníky. Pro podnikatele na Ústecku i přeshraniční agenda se saskou kanceláří.",
  },
];

const kontakty = [
  {
    mesto: "Ústí nad Labem",
    ulice: "V Jirchářích 60/6",
    psc: "400 01",
    pozn: "Parkování v garážích pod nádražím 3 hodiny zdarma.",
  },
  {
    mesto: "Litoměřice",
    ulice: "Máchovy schody 9/2A",
    psc: "412 01",
    pozn: "Historické centrum, u dominikánského kostela.",
  },
];

export default function Page() {
  return (
    <main className="ij">
      <header className="ij-top">
        <a className="ij-mark" href="#uvod" aria-label="Advokátní kancelář Iva Jónová, domů">
          <span className="ij-mark-para" aria-hidden="true">
            §
          </span>
          <span className="ij-mark-name">
            Iva Jónová
            <span className="ij-mark-sub">advokátní kancelář</span>
          </span>
        </a>
        <nav className="ij-nav" aria-label="Hlavní">
          <a href="#obory">Právní služby</a>
          <a href="#kancelar">O kanceláři</a>
          <a className="ij-nav-cta" href="tel:+420774650184">
            +420 774 650 184
          </a>
        </nav>
      </header>

      <section className="ij-hero" id="uvod">
        <div className="ij-hero-text">
          <p className="ij-eyebrow">Advokátka v Ústí nad Labem &amp; Litoměřicích</p>
          <h1 className="ij-h1">
            Právo umí být&nbsp;na&nbsp;vaší straně.
            <span className="ij-h1-line">Ukážu vám kudy.</span>
          </h1>
          <p className="ij-lede">
            Mgr. et Bc. Iva Jónová, LL.M. — advokátka zapsaná v ČAK. Vedu spory,
            sepisuji smlouvy a provázím oddlužením. Bez zbytečného latinského
            balastu: řeknu vám na rovinu, jaké máte možnosti a co bude stát.
          </p>
          <div className="ij-hero-actions">
            <a className="ij-btn" href="tel:+420774650184">
              Zavolat a domluvit schůzku
            </a>
            <a className="ij-btn ij-btn-ghost" href="#obory">
              Čím se zabývám
            </a>
          </div>
          <p className="ij-hero-note">
            Osobní schůzky po telefonické dohodě · ak.jonova@seznam.cz
          </p>
        </div>
        <figure className="ij-hero-media">
          <img
            src="/hero.webp"
            alt="Detail advokátního spisu a plnicího pera na pracovním stole kanceláře"
            width={1200}
            height={1400}
          />
          <figcaption className="ij-stamp">
            <span>čl. 37</span>
            <span>Listiny základních práv a svobod</span>
          </figcaption>
        </figure>
      </section>

      <section className="ij-section" id="obory">
        <div className="ij-section-head">
          <p className="ij-eyebrow">Právní služby</p>
          <h2 className="ij-h2">
            Šest oblastí, ve kterých se klienti nejčastěji potřebují opřít
            o&nbsp;advokáta.
          </h2>
          <p className="ij-section-lede">
            Komplexní zastoupení napříč civilním, obchodním i trestním právem.
            V&nbsp;náročnějších věcech přizvu notáře, soudního znalce nebo
            daňového poradce — vy jednáte stále jen se&nbsp;mnou.
          </p>
        </div>
        <ol className="ij-obory">
          {obory.map((o) => (
            <li className="ij-obor" key={o.nazev}>
              <span className="ij-obor-cislo" aria-hidden="true">
                {o.cislo}
              </span>
              <h3 className="ij-obor-nazev">{o.nazev}</h3>
              <p className="ij-obor-popis">{o.popis}</p>
            </li>
          ))}
        </ol>
        <div className="ij-odmena">
          <img
            src="/section-1.webp"
            alt="Podpis smlouvy v advokátní kanceláři"
            width={900}
            height={600}
          />
          <div className="ij-odmena-text">
            <p className="ij-eyebrow">Odměna</p>
            <h3 className="ij-h3">Cenu znáte, než něco podepíšete.</h3>
            <p>
              Odměnu dohodneme dopředu — hodinovou, paušální, nebo za&nbsp;konkrétní
              úkon. U&nbsp;vhodných případů beru i&nbsp;podíl na&nbsp;výsledku.
              Část kapacity věnuji pro&nbsp;bono těm, kdo si advokáta jinak nemohou
              dovolit.
            </p>
          </div>
        </div>
      </section>

      <section className="ij-section ij-section-dark" id="kancelar">
        <div className="ij-about">
          <figure className="ij-about-media">
            <img
              src="/section-2.webp"
              alt="Interiér advokátní kanceláře v Ústí nad Labem"
              width={900}
              height={1100}
            />
          </figure>
          <div className="ij-about-text">
            <p className="ij-eyebrow ij-eyebrow-light">O kanceláři</p>
            <h2 className="ij-h2">
              Malá kancelář, kde váš spis nezapadne mezi stovky jiných.
            </h2>
            <p>
              Nejsem anonymní korporátní firma. Klienty na&nbsp;Ústecku i&nbsp;Litoměřicku
              zastupuji osobně a dbám na&nbsp;diskrétnost, srozumitelnost a&nbsp;časovou
              flexibilitu. Věci řeším strategicky — ideálně dohodou dřív, než se
              z&nbsp;nich stane dlouhý soud.
            </p>
            <ul className="ij-hodnoty">
              <li>
                <strong>Diskrétnost</strong>
                <span>Co mi svěříte, zůstává mezi námi.</span>
              </li>
              <li>
                <strong>Přeshraničně</strong>
                <span>Spolupráce se saskou kanceláří Heiko Kosela.</span>
              </li>
              <li>
                <strong>Dostupnost</strong>
                <span>Jeden telefon, jedna advokátka, jasná odpověď.</span>
              </li>
            </ul>
            <div className="ij-kontakty">
              {kontakty.map((k) => (
                <div className="ij-kontakt" key={k.mesto}>
                  <h3>{k.mesto}</h3>
                  <p>
                    {k.ulice}
                    <br />
                    {k.psc} {k.mesto}
                  </p>
                  <p className="ij-kontakt-pozn">{k.pozn}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
