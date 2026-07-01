import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Realitní makléři Plzeň plus — prodej a pronájem nemovitostí v Plzni",
  description:
    "Realitní kancelář z Plzně. Prodáme váš byt, dům nebo pozemek za tržní cenu, bez starostí s papíry. Znáte cenu vaší nemovitosti do 48 hodin.",
  openGraph: {
    title: "Realitní makléři Plzeň plus",
    description:
      "Prodej a pronájem nemovitostí v Plzni a okolí. Odhad ceny do 48 hodin, kompletní právní servis, výplata bez čekání.",
    locale: "cs_CZ",
    type: "website",
  },
};

const nabidky = [
  {
    ulice: "Bezovka",
    typ: "3+kk s lodžií",
    plocha: "78 m²",
    stav: "Nová nabídka",
    cena: "5 690 000 Kč",
  },
  {
    ulice: "Slovany, Nepomucká",
    typ: "Rodinný dům 5+1",
    plocha: "164 m²",
    stav: "Rezervováno",
    cena: "9 350 000 Kč",
  },
  {
    ulice: "Bory, Klatovská tř.",
    typ: "2+1 po rekonstrukci",
    plocha: "56 m²",
    stav: "Nová nabídka",
    cena: "3 990 000 Kč",
  },
  {
    ulice: "Litice, stavební parcela",
    typ: "Pozemek s IS",
    plocha: "812 m²",
    stav: "K jednání",
    cena: "2 740 000 Kč",
  },
];

const kroky = [
  {
    cislo: "01",
    titul: "Sejdeme se u vás doma",
    text: "Přijedeme, projdeme nemovitost a řekneme vám narovinu, za kolik se dnes v Plzni prodá. Odhad ceny máte do 48 hodin.",
  },
  {
    cislo: "02",
    titul: "Připravíme a nafotíme",
    text: "Profesionální fotky, půdorys, home staging. Kupující se do bytu zamiluje ještě než přijde na prohlídku.",
  },
  {
    cislo: "03",
    titul: "Vyjednáme a předáme klíče",
    text: "Vedeme prohlídky, vyjednáme nejlepší cenu, ohlídáme smlouvy i úschovu. Peníze máte na účtu bez čekání.",
  },
];

export default function Page() {
  return (
    <main className="rm">
      <header className="rm-top">
        <a className="rm-mark" href="#" aria-label="Realitní makléři Plzeň plus, úvod">
          <span className="rm-mark__pin" aria-hidden="true">
            <span className="rm-mark__pin-dot" />
          </span>
          <span className="rm-mark__name">
            Plzeň<span className="rm-mark__plus">plus</span>
          </span>
          <span className="rm-mark__sub">realitní makléři</span>
        </a>
        <a className="rm-call" href="tel:+420377000111">
          Zavolat: 377 000 111
        </a>
      </header>

      <section className="rm-hero" aria-labelledby="rm-hero-title">
        <div className="rm-hero__grid">
          <div className="rm-hero__text">
            <p className="rm-eyebrow">Realitní kancelář • Plzeň a okolí</p>
            <h1 id="rm-hero-title" className="rm-hero__title">
              Známe Plzeň<br />
              <span className="rm-hero__title-accent">ulici po ulici.</span>
            </h1>
            <p className="rm-hero__lead">
              Od Bezovky po Slovany, od Borů po Litice. Prodáme vaši nemovitost za
              tržní cenu a bez starostí s papíry — vy jen předáte klíče.
            </p>
            <div className="rm-hero__actions">
              <a className="rm-btn rm-btn--solid" href="tel:+420377000111">
                Zavolejte, poradíme zdarma
              </a>
              <a className="rm-btn rm-btn--ghost" href="mailto:makleri@rm-plzen.cz">
                Napište nám e-mail
              </a>
            </div>
          </div>
          <figure className="rm-hero__figure">
            <img
              className="rm-hero__img"
              src="/hero.webp"
              alt="Panorama Plzně se dvěma věžemi katedrály svatého Bartoloměje nad střechami města"
            />
            <figcaption className="rm-hero__badge">
              <span className="rm-hero__badge-num">48 h</span>
              <span className="rm-hero__badge-label">a znáte cenu své nemovitosti</span>
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="rm-nabidky" aria-labelledby="rm-nabidky-title">
        <div className="rm-section-head">
          <p className="rm-eyebrow rm-eyebrow--dark">Aktuální nabídka</p>
          <h2 id="rm-nabidky-title" className="rm-section-title">
            Nemovitosti, které právě prodáváme
          </h2>
          <p className="rm-section-lead">
            Výběr z toho, co máme v Plzni v prodeji. Chcete přidat svou? Ozvěte se —
            do týdne visí na inzertních portálech.
          </p>
        </div>

        <ul className="rm-cards">
          {nabidky.map((n) => (
            <li className="rm-card" key={n.ulice}>
              <div className="rm-card__top">
                <span
                  className={
                    "rm-tag" +
                    (n.stav === "Rezervováno" ? " rm-tag--muted" : "")
                  }
                >
                  {n.stav}
                </span>
                <span className="rm-card__plocha">{n.plocha}</span>
              </div>
              <h3 className="rm-card__typ">{n.typ}</h3>
              <p className="rm-card__ulice">{n.ulice}</p>
              <p className="rm-card__cena">{n.cena}</p>
            </li>
          ))}
        </ul>

        <figure className="rm-nabidky__foto">
          <img
            src="/section-1.webp"
            alt="Světlý plzeňský byt po rekonstrukci připravený k prohlídce"
            className="rm-full-img"
          />
        </figure>
      </section>

      <section className="rm-duvera" aria-labelledby="rm-duvera-title">
        <div className="rm-duvera__grid">
          <figure className="rm-duvera__figure">
            <img
              src="/section-2.webp"
              alt="Makléř podává klíče novým majitelům po podpisu smlouvy"
              className="rm-full-img"
            />
          </figure>
          <div className="rm-duvera__text">
            <p className="rm-eyebrow rm-eyebrow--dark">Jak to u nás chodí</p>
            <h2 id="rm-duvera-title" className="rm-section-title">
              Tři kroky od prohlídky ke klíčům
            </h2>
            <ol className="rm-steps">
              {kroky.map((k) => (
                <li className="rm-step" key={k.cislo}>
                  <span className="rm-step__num">{k.cislo}</span>
                  <div>
                    <h3 className="rm-step__titul">{k.titul}</h3>
                    <p className="rm-step__text">{k.text}</p>
                  </div>
                </li>
              ))}
            </ol>
            <div className="rm-duvera__stats">
              <div className="rm-stat">
                <span className="rm-stat__num">12 let</span>
                <span className="rm-stat__label">jen v Plzeňském kraji</span>
              </div>
              <div className="rm-stat">
                <span className="rm-stat__num">340+</span>
                <span className="rm-stat__label">prodaných nemovitostí</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
