import type { CSSProperties } from "react";

export const metadata = {
  title: "JPF SYSTEM s.r.o. — elektroinstalace České Budějovice",
  description:
    "Kompletní a systémové elektroinstalace pro rodinné domy, haly i průmysl. Od roku 2009 v Českých Budějovicích.",
};

type Sluzba = {
  cislo: string;
  faze: string;
  nazev: string;
  popis: string;
};

const sluzby: Sluzba[] = [
  {
    cislo: "L1",
    faze: "Silnoproud",
    nazev: "Kompletní elektroinstalace",
    popis:
      "Nové rozvody, rozvaděče a jištění pro rodinné domy, byty i výrobní haly. Od projektu přes montáž až po revizi a předání s razítkem.",
  },
  {
    cislo: "L2",
    faze: "Slaboproud",
    nazev: "Kamery a zabezpečení",
    popis:
      "Kamerové systémy, EZS a řízení přístupu do provozů i domácností. Vidíte, kdo přišel, a spíte klidně, i když nejste na místě.",
  },
  {
    cislo: "L3",
    faze: "Automatizace",
    nazev: "Chytrý dům a řízení osvětlení",
    popis:
      "Světla, žaluzie a topení, které poslechnou jeden vypínač i telefon. Stejné řízení osvětlení, jaké jsme udělali v českobudějovické nemocnici.",
  },
  {
    cislo: "L4",
    faze: "Provoz",
    nazev: "Elektroúdržba a rozvaděče",
    popis:
      "Výměny rozvaděčů, montáž výrobních míst a nových linek, pravidelná údržba. Přijedeme, když se něco vypne — a hlavně dřív, než se to stane.",
  },
];

type Reference = {
  klient: string;
  prace: string;
  misto: string;
};

const reference: Reference[] = [
  { klient: "Nemocnice České Budějovice", prace: "Inteligentní řízení osvětlení", misto: "České Budějovice" },
  { klient: "Madeta a.s.", prace: "Elektroinstalace a elektroúdržba", misto: "ČB · JH · Plzeň" },
  { klient: "Kern-Liebers CR", prace: "Montáž výrobních míst", misto: "České Budějovice" },
  { klient: "Osiva Boršov, Osev jih", prace: "Nové linky, montáž hal, elektroúdržba", misto: "Boršov nad Vltavou" },
  { klient: "Obec Mydlovary", prace: "Elektroinstalace obecního úřadu", misto: "Mydlovary" },
  { klient: "Engel Kaplice", prace: "Veřejné osvětlení parkoviště", misto: "Kaplice" },
];

const faze = [
  { k: "01", t: "Obhlídka a návrh", d: "Přijedeme, změříme a řekneme na rovinu, co dává smysl." },
  { k: "02", t: "Montáž", d: "Rozvody, rozvaděče, jištění. Čistá práce, dohoda o termínu platí." },
  { k: "03", t: "Revize a předání", d: "Revizní zpráva s razítkem, ne jen zapojené dráty." },
];

export default function Page() {
  return (
    <main className="jpf">
      <header className="jpf-top">
        <a className="jpf-mark" href="#top" id="top" aria-label="JPF SYSTEM — úvod">
          <span className="jpf-mark__phase" aria-hidden="true">
            <i /><i /><i />
          </span>
          <span className="jpf-mark__word">
            JPF<span className="jpf-mark__sys">SYSTEM</span>
          </span>
        </a>
        <nav className="jpf-nav" aria-label="Hlavní">
          <a href="#sluzby">Služby</a>
          <a href="#reference">Reference</a>
          <a className="jpf-nav__call" href="tel:+420728770770">Zavolat 728 770 770</a>
        </nav>
      </header>

      <section className="jpf-hero" aria-labelledby="hero-h">
        <div className="jpf-hero__media">
          <img
            src="/hero.webp"
            alt="Rozvaděč s pečlivě zapojenými jističi — práce firmy JPF SYSTEM"
            className="jpf-hero__img"
          />
          <span className="jpf-hero__scan" aria-hidden="true" />
        </div>

        <div className="jpf-hero__body">
          <p className="jpf-eyebrow">
            <span className="jpf-eyebrow__dot" aria-hidden="true" />
            Elektroinstalace · České Budějovice · od 2009
          </p>
          <h1 id="hero-h" className="jpf-hero__h">
            Rozvaděč, kterému
            <br />
            <span className="jpf-hero__live">rozumí</span> i revizní technik.
          </h1>
          <p className="jpf-hero__p">
            Kompletní a systémové elektroinstalace pro rodinné domy, haly i
            průmysl. Zapojíme to čistě, popíšeme každý jistič a předáme s
            revizní zprávou — od Senovážného náměstí až za Kaplici.
          </p>
          <div className="jpf-hero__cta">
            <a className="jpf-btn jpf-btn--solid" href="tel:+420728770770">
              Zavolat 728 770 770
            </a>
            <a className="jpf-btn jpf-btn--ghost" href="#sluzby">
              Co umíme
            </a>
          </div>

          <dl className="jpf-rail">
            <div>
              <dt>V provozu od</dt>
              <dd>2009</dd>
            </div>
            <div>
              <dt>Zakladatel</dt>
              <dd>František Pecka</dd>
            </div>
            <div>
              <dt>Působnost</dt>
              <dd>Jihočeský kraj</dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="jpf-sect" id="sluzby" aria-labelledby="sluzby-h">
        <div className="jpf-sect__head">
          <p className="jpf-eyebrow">Okruhy na našem rozvaděči</p>
          <h2 id="sluzby-h" className="jpf-sect__h">
            Silnoproud, slaboproud, chytré řízení — jeden dodavatel.
          </h2>
          <p className="jpf-sect__lead">
            Bereme elektroinstalaci v celé šíři: od zásuvky v garáži po řízení
            osvětlení celého patra. Když je za tím jedna firma, sedí to k sobě a
            máte jedno číslo, na které zavoláte.
          </p>
        </div>

        <ul className="jpf-breakers">
          {sluzby.map((s) => (
            <li className="jpf-breaker" key={s.cislo}>
              <div className="jpf-breaker__head">
                <span className="jpf-breaker__id">{s.cislo}</span>
                <span className="jpf-breaker__switch" aria-hidden="true">
                  <span className="jpf-breaker__lever" />
                </span>
                <span className="jpf-breaker__faze">{s.faze}</span>
              </div>
              <h3 className="jpf-breaker__t">{s.nazev}</h3>
              <p className="jpf-breaker__p">{s.popis}</p>
            </li>
          ))}
        </ul>

        <div className="jpf-flow">
          <img
            src="/section-1.webp"
            alt="Elektrikář JPF SYSTEM při montáži rozvodů"
            className="jpf-flow__img"
          />
          <ol className="jpf-flow__steps">
            {faze.map((f) => (
              <li className="jpf-flow__step" key={f.k}>
                <span className="jpf-flow__k">{f.k}</span>
                <div>
                  <h3 className="jpf-flow__t">{f.t}</h3>
                  <p className="jpf-flow__d">{f.d}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="jpf-sect jpf-sect--dark" id="reference" aria-labelledby="ref-h">
        <div className="jpf-ref__grid">
          <div className="jpf-ref__intro">
            <p className="jpf-eyebrow jpf-eyebrow--light">Odkud nás znají</p>
            <h2 id="ref-h" className="jpf-sect__h">
              Nemocnice, Madeta i obecní úřad. Připojili jsme je pod napětí.
            </h2>
            <p className="jpf-sect__lead jpf-sect__lead--light">
              Za roky práce jsme prošli výrobními halami, provozy i veřejným
              osvětlením po celém Jihočeském kraji. Pár jmen, která tady doma
              poznáte:
            </p>
            <img
              src="/section-2.webp"
              alt="Realizace elektroinstalace v průmyslové hale od JPF SYSTEM"
              className="jpf-ref__img"
            />
          </div>

          <ul className="jpf-ref__list">
            {reference.map((r, i) => (
              <li
                className="jpf-ref__row"
                key={r.klient}
                style={{ "--i": i } as CSSProperties}
              >
                <span className="jpf-ref__klient">{r.klient}</span>
                <span className="jpf-ref__prace">{r.prace}</span>
                <span className="jpf-ref__misto">{r.misto}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
