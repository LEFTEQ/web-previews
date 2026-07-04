import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SKMC \u2013 Le\u0161en\u00ed Brno | Postav\u00edme, sm\u011bstn\u00e1me, p\u0159edmontujeme",
  description:
    "SKMC \u2013 Le\u0161en\u00ed s.r.o. stav\u00ed fas\u00e1dn\u00ed, pojezdov\u00e1 i prostorov\u00e1 le\u0161en\u00ed v Brn\u011b a okol\u00ed. Mont\u00e1\u017e, pronájem i revize \u2013 rychle, bezpe\u010dn\u011b a s platnou dokumentac\u00ed.",
  openGraph: {
    title: "SKMC \u2013 Le\u0161en\u00ed Brno",
    description:
      "Fas\u00e1dn\u00ed a prostorov\u00e1 le\u0161en\u00ed v Brn\u011b. Mont\u00e1\u017e do 24 hodin, pronájem i revize \u2013 s platnou dokumentac\u00ed.",
    type: "website",
    images: ["/hero.webp"],
  },
};

const rozmery = [
  {
    kod: "HD",
    nazev: "Fas\u00e1dn\u00ed le\u0161en\u00ed",
    popis:
      "Ram\u011bnov\u00e9 le\u0161en\u00ed pro zateplen\u00ed, om\u00edtky a klempi\u0159inu. Kotv\u00edme do nosn\u00e9 zdi, podlahy z ocelov\u00fdch r\u00e1m\u016f, zar\u00e1\u017eky a z\u00e1bradl\u00ed dle norem.",
    parametr: "nosnost 200 kg/m\u00b2",
  },
  {
    kod: "PJ",
    nazev: "Pojezdov\u00e9 v\u011b\u017ee",
    popis:
      "Hlin\u00edkov\u00e9 pojízdn\u00e9 v\u011b\u017ee do interi\u00e9r\u016f i na rovn\u00e9 zpevn\u011bn\u00e9 plochy. Rychl\u00e1 p\u0159estavba, kolo s brzdou, lehk\u00e1 obsluha jedn\u00edm \u010dlov\u011bkem.",
    parametr: "v\u00fd\u0161ka a\u017e 12 m",
  },
  {
    kod: "PR",
    nazev: "Prostorov\u00e9 le\u0161en\u00ed",
    popis:
      "Podp\u011brn\u00e9 a prostorov\u00e9 konstrukce pod stropy, klenby a pro atypick\u00e9 tvary. Modulov\u00fd syst\u00e9m se pro\u017e\u00edm\u00e1 p\u0159esn\u011b podle stavby.",
    parametr: "na m\u00edru objektu",
  },
  {
    kod: "ZS",
    nazev: "Z\u00e1chytn\u00e9 st\u0159\u00ed\u0161ky",
    popis:
      "Ochrann\u00e9 st\u0159\u00ed\u0161ky nad vchody a chodn\u00edky b\u011bhem prac\u00ed ve v\u00fd\u0161ce. Kolemjdouc\u00ed chr\u00e1n\u00edme, stavbu udr\u017e\u00edme v provozu.",
    parametr: "po\u017eadavek m\u011bsta",
  },
];

export default function Page() {
  return (
    <main className="skmc">
      <header className="skmc-top">
        <a className="skmc-mark" href="#" aria-label="SKMC \u2013 Le\u0161en\u00ed, dom\u016f">
          <span className="skmc-mark__block">SKMC</span>
          <span className="skmc-mark__tag">Le\u0161en\u00ed \u00b7 Brno</span>
        </a>
        <a className="skmc-call" href="tel:+420777112233">
          <span className="skmc-call__label">Zavolat mistrovi</span>
          <span className="skmc-call__num">777 112 233</span>
        </a>
      </header>

      <section className="skmc-hero" aria-labelledby="hero-nadpis">
        <div className="skmc-hero__frame">
          <img
            src="/hero.webp"
            alt="Postaven\u00e9 fas\u00e1dn\u00ed le\u0161en\u00ed z ocelov\u00fdch r\u00e1m\u016f na bytov\u00e9m dom\u011b v Brn\u011b"
            className="skmc-hero__img"
          />
          <div className="skmc-hero__grid" aria-hidden="true">
            <span></span><span></span><span></span><span></span>
          </div>
        </div>
        <div className="skmc-hero__text">
          <p className="skmc-eyebrow">Pole \u00b7 patro \u00b7 kotva</p>
          <h1 id="hero-nadpis">
            Postav\u00edme le\u0161en\u00ed,<br />
            na kter\u00e9m se d\u00e1 <em>st\u00e1t bez obav.</em>
          </h1>
          <p className="skmc-hero__lead">
            Fas\u00e1dn\u00ed, pojezdov\u00e9 i prostorov\u00e9 le\u0161en\u00ed pro brn\u011bnsk\u00e9
            stavby. P\u0159ijedeme, zam\u011b\u0159\u00edme a smont\u00e9jeme \u2013 v\u011bt\u0161inu
            b\u011b\u017en\u00fdch fas\u00e1d do 24 hodin.
          </p>
          <div className="skmc-hero__cta">
            <a className="skmc-btn" href="tel:+420777112233">
              Zavolat 777 112 233
            </a>
            <a className="skmc-btn skmc-btn--ghost" href="mailto:poptavka@skmc-leseni.cz">
              Napsat poptávku
            </a>
          </div>
        </div>
      </section>

      <section className="skmc-services" aria-labelledby="sluzby-nadpis">
        <div className="skmc-section-head">
          <p className="skmc-eyebrow">Co u n\u00e1s postav\u00edte</p>
          <h2 id="sluzby-nadpis">
            \u010cty\u0159i syst\u00e9my, jeden standard bezpe\u010dnosti
          </h2>
        </div>
        <ul className="skmc-cards">
          {rozmery.map((r) => (
            <li key={r.kod} className="skmc-card">
              <span className="skmc-card__kod" aria-hidden="true">
                {r.kod}
              </span>
              <h3 className="skmc-card__nazev">{r.nazev}</h3>
              <p className="skmc-card__popis">{r.popis}</p>
              <p className="skmc-card__parametr">{r.parametr}</p>
            </li>
          ))}
        </ul>
        <figure className="skmc-figure">
          <img
            src="/section-1.webp"
            alt="Mont\u00e9r SKMC skl\u00e1d\u00e1 ram\u011bna a podlahy fas\u00e1dn\u00edho le\u0161en\u00ed"
            className="skmc-figure__img"
          />
          <figcaption className="skmc-figure__cap">
            Ka\u017ed\u00e9 pole zav\u011bt\u0159ujeme a kotv\u00edme \u2013 dokumentaci
            p\u0159ed\u00e1v\u00e1me p\u0159i p\u0159evzet\u00ed.
          </figcaption>
        </figure>
      </section>

      <section className="skmc-trust" aria-labelledby="duvera-nadpis">
        <figure className="skmc-figure skmc-figure--wide">
          <img
            src="/section-2.webp"
            alt="Zam\u011b\u0159en\u00e1 fas\u00e1da s hotov\u00fdm le\u0161en\u00edm a z\u00e1chytnou st\u0159\u00ed\u0161kou nad chodn\u00edkem"
            className="skmc-figure__img"
          />
        </figure>
        <div className="skmc-trust__body">
          <p className="skmc-eyebrow">Pro\u010d SKMC</p>
          <h2 id="duvera-nadpis">
            Le\u0161en\u00ed po Brn\u011b sm\u011bstn\u00e9me od roku 2009
          </h2>
          <p className="skmc-trust__lead">
            Jsme parta mont\u00e9r\u016f, kter\u00e1 zn\u00e1 brn\u011bnsk\u00e9 dvorky,
            \u00fazk\u00e9 ulice v\u00a0centru i panel\u00e1ky na s\u00eddli\u0161t\u00edch. V\u00edme,
            kde le\u0161en\u00ed postavit tak, aby nep\u0159ek\u00e1\u017eelo a p\u0159ece
            drtelo.
          </p>
          <ul className="skmc-facts">
            <li>
              <span className="skmc-facts__num">24 h</span>
              <span className="skmc-facts__txt">
                b\u011b\u017en\u00e1 fas\u00e1da od objedn\u00e1vky ke stoj\u00edc\u00edmu le\u0161en\u00ed
              </span>
            </li>
            <li>
              <span className="skmc-facts__num">15 let</span>
              <span className="skmc-facts__txt">
                zku\u0161enost\u00ed na fas\u00e1d\u00e1ch, st\u0159ech\u00e1ch i v\u00a0hal\u00e1ch
              </span>
            </li>
            <li>
              <span className="skmc-facts__num">0 pokut</span>
              <span className="skmc-facts__txt">
                p\u0159i kontrol\u00e1ch BOZP \u2013 dokumentaci m\u00e1me v\u00a0po\u0159\u00e1dku
              </span>
            </li>
          </ul>
          <blockquote className="skmc-quote">
            \u201eZam\u011b\u0159ili to r\u00e1no, do ve\u010dera stálo. Klempí\u0159i
            druh\u00fd den nastoupili bez zdr\u017een\u00ed.\u201c
            <cite>Zdenek H., realizace zateplen\u00ed, Brno-\u017didenice</cite>
          </blockquote>
        </div>
      </section>
    </main>
  );
}
