import type { CSSProperties } from "react";

export const metadata = {
  title: "Protoria — ploty a oplocení na klíč, Praha 3-Žižkov",
  description:
    "Zaměření, 3D studie a montáž plotu na klíč. Betonové tvarovky, gabiony, lícové cihly, přírodní kámen, kované i dřevěné ploty. Návrh a zaměření zdarma. Žižkov, Praha 3.",
  openGraph: {
    title: "Protoria — ploty a oplocení na klíč",
    description:
      "Návrh, zaměření na místě a 3D studie zdarma. Postavíme plot přesně podle vaší představy. Praha 3-Žižkov.",
    images: ["/hero.webp"],
    type: "website",
    locale: "cs_CZ",
  },
};

// Materiály, se kterými Protoria staví — seřazené jako reálná nabídka, ne dekorace.
const materialy = [
  {
    kod: "BET",
    nazev: "Betonové tvarovky",
    popis:
      "Štípaný pohledový beton, který drží linii i na svahu. Nejčastější volba pro rovný, pevný plot okolo domu.",
  },
  {
    kod: "GAB",
    nazev: "Gabiony",
    popis:
      "Drátěné koše plněné kamenivem. Masivní, tichý k ulici a bez nátěru — jednou postavíte a máte klid.",
  },
  {
    kod: "CIH",
    nazev: "Lícové cihly",
    popis:
      "Zděné pilíře a podezdívka z lícovek. Klasika, která se hodí k činžáku i k novostavbě na Žižkově.",
  },
  {
    kod: "KAM",
    nazev: "Přírodní kámen",
    popis:
      "Skládané zdivo z lomového kamene. Každý kus jiný — plot, který vypadá, že tu stál vždycky.",
  },
  {
    kod: "KOV",
    nazev: "Kované ploty",
    popis:
      "Ruční kovářská práce a svařované výplně. Pro brány a ploty, které mají být vidět.",
  },
  {
    kod: "DRE",
    nazev: "Dřevo a dřevoplast",
    popis:
      "Venkovská prkna i bezúdržbový everwood. Teplý povrch tam, kde beton působí příliš tvrdě.",
  },
];

// Postup „na klíč“ — je to reálná posloupnost, proto číslujeme.
const postup = [
  {
    c: "01",
    titulek: "Přijedeme a zaměříme",
    text:
      "Sejdeme se u vás na pozemku, změříme délku, spády i výškové rozdíly. Zaměření na místě je zdarma.",
  },
  {
    c: "02",
    titulek: "Nakreslíme 3D studii",
    text:
      "Uvidíte plot na svém domě dřív, než koupíme první tvarovku. Studii i návrh řešení děláme zdarma.",
  },
  {
    c: "03",
    titulek: "Postavíme na klíč",
    text:
      "Základy, sloupky, výplně i brány. Řešíme i zámkovou dlažbu, vjezdové brány a stání na popelnice.",
  },
];

export default function Page() {
  return (
    <main className="pt">
      <header className="pt-top">
        <a className="pt-mark" href="#" aria-label="Protoria — úvod">
          <span className="pt-mark__word">Protoria</span>
          <span className="pt-mark__line" aria-hidden="true" />
          <span className="pt-mark__sub">ploty &amp; oplocení · Žižkov</span>
        </a>
        <a className="pt-call" href="tel:+420776123456">
          <span className="pt-call__label">Zavolat</span>
          <span className="pt-call__num">776 123 456</span>
        </a>
      </header>

      <section className="pt-hero" aria-labelledby="pt-hero-title">
        <div className="pt-hero__media">
          <img
            src="/hero.webp"
            alt="Hotový plot z betonových tvarovek s kovanou vjezdovou bránou u rodinného domu"
            className="pt-hero__img"
          />
          <span className="pt-hero__scrim" aria-hidden="true" />
        </div>

        <div className="pt-hero__panel">
          <p className="pt-eyebrow">
            <span className="pt-eyebrow__dot" aria-hidden="true" />
            Návrh, zaměření a 3D studie — zdarma
          </p>
          <h1 id="pt-hero-title" className="pt-hero__title">
            Postavíme plot přesně
            <br />
            podle <em>vaší</em> čáry
            <br />
            v&nbsp;pozemku.
          </h1>
          <p className="pt-hero__lead">
            Řekněte nám svůj návrh, my ho zaměříme na místě, nakreslíme ve 3D a
            zhotovíme na klíč. Beton, kámen, cihla, kov i dřevo — na Žižkově i po
            celé Praze.
          </p>
          <div className="pt-hero__cta">
            <a className="pt-btn pt-btn--solid" href="tel:+420776123456">
              Zavolat 776 123 456
            </a>
            <a
              className="pt-btn pt-btn--ghost"
              href="mailto:info@protoria.cz?subject=Poptávka%20plotu"
            >
              Napsat e-mail
            </a>
          </div>
        </div>

        <ul className="pt-hero__meta">
          <li>
            <span className="pt-hero__metak">Od</span>
            <span className="pt-hero__metav">2011</span>
            <span className="pt-hero__metad">stavíme ploty v Praze</span>
          </li>
          <li>
            <span className="pt-hero__metak">19</span>
            <span className="pt-hero__metav">materiálů</span>
            <span className="pt-hero__metad">od gabionů po kované brány</span>
          </li>
          <li>
            <span className="pt-hero__metak">0 Kč</span>
            <span className="pt-hero__metav">za návrh</span>
            <span className="pt-hero__metad">zaměření i 3D studie zdarma</span>
          </li>
        </ul>
      </section>

      <section className="pt-mat" aria-labelledby="pt-mat-title">
        <div className="pt-sechead">
          <p className="pt-eyebrow pt-eyebrow--dark">Z čeho stavíme</p>
          <h2 id="pt-mat-title" className="pt-sechead__title">
            Šest materiálů, jeden plot.
            <br />
            Vybíráme podle domu, ne podle skladu.
          </h2>
        </div>

        <div className="pt-mat__grid">
          <div className="pt-mat__img">
            <img
              src="/section-1.webp"
              alt="Detail vzorníku plotových materiálů — betonové tvarovky, gabionové kamenivo a dřevěné výplně"
              className="pt-fit"
            />
          </div>

          <ul className="pt-mat__list">
            {materialy.map((m) => (
              <li className="pt-mat__item" key={m.kod}>
                <span className="pt-mat__kod" aria-hidden="true">
                  {m.kod}
                </span>
                <div className="pt-mat__body">
                  <h3 className="pt-mat__nazev">{m.nazev}</h3>
                  <p className="pt-mat__popis">{m.popis}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <p className="pt-mat__note">
          Postavíme i vjezdové brány, mobilní oplocení, zámkovou dlažbu a stání
          na popelnice. Prodej na splátky je možný.
        </p>
      </section>

      <section className="pt-trust" aria-labelledby="pt-trust-title">
        <div className="pt-trust__grid">
          <div className="pt-trust__copy">
            <p className="pt-eyebrow">Jak to probíhá</p>
            <h2 id="pt-trust-title" className="pt-trust__title">
              Od vaší čáry v&nbsp;plánku k&nbsp;hotovému plotu — na klíč.
            </h2>
            <p className="pt-trust__lead">
              Jsme hrdí na svoje reference a rádi vám je ukážeme. Než ale
              začneme kopat, uvidíte plot na 3D studii přesně na vašem pozemku.
            </p>

            <ol className="pt-steps">
              {postup.map((k) => (
                <li className="pt-step" key={k.c}>
                  <span className="pt-step__c" aria-hidden="true">
                    {k.c}
                  </span>
                  <div>
                    <h3 className="pt-step__t">{k.titulek}</h3>
                    <p className="pt-step__x">{k.text}</p>
                  </div>
                </li>
              ))}
            </ol>

            <dl className="pt-place">
              <div>
                <dt>Kde nás najdete</dt>
                <dd>V Kapslovně 2770/7, 130 00 Praha 3-Žižkov</dd>
              </div>
              <div>
                <dt>Kam jezdíme</dt>
                <dd>Praha a okolí — přijedeme zaměřit zdarma</dd>
              </div>
            </dl>
          </div>

          <figure className="pt-trust__fig">
            <img
              src="/section-2.webp"
              alt="Realizace plotu Protoria u rodinného domu — pohledový beton s dřevěnými výplněmi"
              className="pt-fit"
            />
            <figcaption className="pt-trust__cap">
              Realizace na klíč — pohledový beton s&nbsp;dřevěnou výplní.
            </figcaption>
          </figure>
        </div>
      </section>
    </main>
  );
}
