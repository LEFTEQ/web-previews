import type { CSSProperties } from "react";

export const metadata = {
  title: "JUDr. Jiří Kos, MSc. — advokátní kancelář Pardubice",
  description:
    "Advokátní kancelář v centru Pardubic. Nemovitosti, občanské a obchodní právo, exekuce a insolvence. Individuální přístup, jasná cena předem.",
  openGraph: {
    title: "JUDr. Jiří Kos, MSc. — advokátní kancelář Pardubice",
    description:
      "Právní služby v centru Pardubic se specializací na práva k nemovitostem. Individuální přístup a jasná cena předem.",
    type: "website",
    locale: "cs_CZ",
    images: [{ url: "/hero.webp" }],
  },
};

type Obor = {
  cislo: string;
  paragraf: string;
  nazev: string;
  popis: string;
};

const obory: Obor[] = [
  {
    cislo: "01",
    paragraf: "§ 1124",
    nazev: "Nemovitosti a bytové právo",
    popis:
      "Naše hlavní specializace. Prodej a koupě, věcná břemena, předkupní právo spoluvlastníků, spory o hranice i vypořádání podílů. Provedeme vás celým převodem i úschovou.",
  },
  {
    cislo: "02",
    paragraf: "§ 2079",
    nazev: "Občanské a smluvní právo",
    popis:
      "Kupní, nájemní a darovací smlouvy, náhrada škody, sousedské spory, dědictví. Sepíšeme smlouvu tak, aby vás chránila, ne aby vás jednou překvapila.",
  },
  {
    cislo: "03",
    paragraf: "§ 420",
    nazev: "Obchodní a správní právo",
    popis:
      "Zakládání a změny společností, obchodní smlouvy, zastoupení před úřady i ve správním řízení. Jednáme za vás, vy se věnujete své firmě.",
  },
  {
    cislo: "04",
    paragraf: "§ 336",
    nazev: "Exekuce a insolvence",
    popis:
      "Vymáhání dlužných částek, obrana proti neoprávněné exekuci, oddlužení. Zkontrolujeme insolvenční rejstřík dřív, než vám dlužník zmizí.",
  },
];

const jistoty = [
  {
    znak: "§",
    titulek: "Jasná cena předem",
    text: "Před každým úkonem víte, za co a kolik platíte. Žádné překvapení v závěrečné faktuře.",
  },
  {
    znak: "✓",
    titulek: "Pojištěná odpovědnost",
    text: "Advokát má ze zákona sjednané profesní pojištění — vaše věc je chráněná i pro případ chyby.",
  },
  {
    znak: "↩",
    titulek: "Klienti se vracejí",
    text: "Individuální přístup ke každé věci. Spokojenost klienta je u nás na prvním místě.",
  },
];

export default function Page() {
  return (
    <main className="kos">
      <header className="kos-nav" aria-label="Hlavní">
        <a className="kos-mark" href="#uvod" aria-label="JUDr. Jiří Kos, advokátní kancelář">
          <span className="kos-mark__par" aria-hidden="true">
            §
          </span>
          <span className="kos-mark__name">
            JUDr.&nbsp;Jiří&nbsp;Kos
            <span className="kos-mark__sub">advokátní kancelář · Pardubice</span>
          </span>
        </a>
        <nav className="kos-links">
          <a href="#obory">Právní obory</a>
          <a href="#kancelar">O kanceláři</a>
          <a className="kos-links__cta" href="tel:+420466000000">
            Zavolat
          </a>
        </nav>
      </header>

      <section className="kos-hero" id="uvod">
        <div className="kos-hero__frame">
          <img
            className="kos-hero__img"
            src="/hero.webp"
            alt="Advokátní kancelář JUDr. Jiřího Kose v centru Pardubic"
            width={1600}
            height={1100}
          />
          <span className="kos-hero__tag">est. Pardubice</span>
        </div>

        <div className="kos-hero__text">
          <p className="kos-eyebrow">
            <span className="kos-eyebrow__num">§</span> Advokátní kancelář · centrum Pardubic
          </p>
          <h1 className="kos-hero__title">
            Právo <em>na vaší</em>
            <br />
            straně.
          </h1>
          <p className="kos-hero__lede">
            Zastupujeme klienty po celé republice z kanceláře v centru Pardubic. Specializujeme se
            na práva k nemovitostem — a u každé věci vždy víte, za co a kolik platíte.
          </p>
          <div className="kos-hero__actions">
            <a className="kos-btn kos-btn--solid" href="tel:+420466000000">
              Zavolat do kanceláře
            </a>
            <a className="kos-btn kos-btn--ghost" href="#obory">
              Prohlédnout obory
            </a>
          </div>
        </div>
      </section>

      <section className="kos-obory" id="obory" aria-labelledby="obory-h">
        <div className="kos-section-head">
          <p className="kos-eyebrow">
            <span className="kos-eyebrow__num">01</span> Čím se zabýváme
          </p>
          <h2 id="obory-h" className="kos-h2">
            Generální praxe se<br />
            zaměřením na nemovitosti
          </h2>
          <p className="kos-section-lede">
            Zastupujeme vás v soudním, rozhodčím i správním řízení. Než něco podepíšete, sedneme si
            a v klidu probereme možnosti a navrhneme řešení.
          </p>
        </div>

        <ol className="kos-oborlist">
          {obory.map((o) => (
            <li className="kos-obor" key={o.cislo}>
              <div className="kos-obor__num">
                <span className="kos-obor__cislo">{o.cislo}</span>
                <span className="kos-obor__par">{o.paragraf}</span>
              </div>
              <div className="kos-obor__body">
                <h3 className="kos-obor__nazev">{o.nazev}</h3>
                <p className="kos-obor__popis">{o.popis}</p>
              </div>
            </li>
          ))}
        </ol>

        <figure className="kos-obory__fig">
          <img
            src="/section-1.webp"
            alt="Detail pracovního stolu s právními dokumenty v kanceláři"
            width={1400}
            height={900}
            loading="lazy"
          />
        </figure>
      </section>

      <section className="kos-kancelar" id="kancelar" aria-labelledby="kancelar-h">
        <div className="kos-kancelar__media">
          <img
            src="/section-2.webp"
            alt="JUDr. Jiří Kos ve své pardubické advokátní kanceláři"
            width={1200}
            height={1400}
            loading="lazy"
          />
        </div>

        <div className="kos-kancelar__text">
          <p className="kos-eyebrow">
            <span className="kos-eyebrow__num">02</span> O kanceláři
          </p>
          <h2 id="kancelar-h" className="kos-h2">
            Vázán zákonem.
            <br />
            Zavázán vám.
          </h2>
          <p className="kos-kancelar__lede">
            Advokát je při své činnosti vázán nejen zákony, ale i etickými normami České advokátní
            komory — ty ukládají povinnosti nad rámec zákona. Smyslem je jediné: co největší ochrana
            vašich zájmů. Nikdo, kdo potřebuje právní pomoc, se nemusí bát ozvat a domluvit si
            informační schůzku.
          </p>

          <ul className="kos-jistoty">
            {jistoty.map((j) => (
              <li className="kos-jistota" key={j.titulek}>
                <span className="kos-jistota__znak" aria-hidden="true">
                  {j.znak}
                </span>
                <div>
                  <h3 className="kos-jistota__titulek">{j.titulek}</h3>
                  <p className="kos-jistota__text">{j.text}</p>
                </div>
              </li>
            ))}
          </ul>

          <blockquote className="kos-citat">
            <p>
              „Chceme, aby se k nám klient vracel. Proto je jeho spokojenost na prvním místě —
              individuální přístup ke každému člověku i k jeho věci.“
            </p>
            <cite>JUDr. Jiří Kos, MSc.</cite>
          </blockquote>
        </div>
      </section>
    </main>
  );
}
