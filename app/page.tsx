import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "PKP Global — odpady a čištění kanalizace Praha",
  description:
    "Likvidace odpadů, čištění a revize kanalizace TV kamerou, přistavení kontejnerů. Pomoc s odpady vždy a všude — Praha a okolí.",
  openGraph: {
    title: "PKP Global — odpady a čištění kanalizace Praha",
    description:
      "Likvidace odpadů, čištění a revize kanalizace TV kamerou, přistavení kontejnerů. Praha a okolí.",
    type: "website",
    images: ["/hero.webp"],
  },
  icons: {
    icon:
      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Crect width='32' height='32' rx='6' fill='%230b2a33'/%3E%3Ccircle cx='16' cy='16' r='9' fill='none' stroke='%23f4b23e' stroke-width='2.4'/%3E%3Ccircle cx='16' cy='16' r='3' fill='%23f4b23e'/%3E%3C/svg%3E",
  },
};

const sluzby = [
  {
    kod: "K1",
    nazev: "Čištění kanalizace",
    popis:
      "Tlakové proplachy potrubí, uvolnění ucpávek a odčerpání usazenin. Přijedeme i na havárii, kdy odpad neteče a čas hraje proti vám.",
  },
  {
    kod: "K2",
    nazev: "Revize kanalizace TV kamerou",
    popis:
      "Kamerová prohlídka potrubí s videozáznamem — najdeme prasklinu, kořen i propad dřív, než začnete kopat. Dostanete protokol na míru.",
  },
  {
    kod: "O1",
    nazev: "Likvidace odpadů — ostatní i nebezpečné",
    popis:
      "Odvoz a legální likvidace odpadů včetně nebezpečných a tekutých. Papíry a evidenci vyřídíme za vás.",
  },
  {
    kod: "O2",
    nazev: "Přistavení kontejnerů",
    popis:
      "Kontejner přistavíme tam, kam potřebujete — stavba, úklid, rekonstrukce. Naplníte, my odvezeme.",
  },
  {
    kod: "P1",
    nazev: "Čištění ploch a přípravné práce",
    popis:
      "Vyčištění zpevněných ploch a přípravné práce pro stavby. Odběr a analýza vzorků odpadů, když je potřeba dokladovat stav.",
  },
];

export default function Page() {
  return (
    <main className="pkp">
      <header className="pkp-nav">
        <a className="pkp-mark" href="#" aria-label="PKP Global, domů">
          <span className="pkp-mark__dot" aria-hidden="true" />
          <span className="pkp-mark__word">
            PKP<span className="pkp-mark__thin">GLOBAL</span>
          </span>
        </a>
        <a className="pkp-nav__call" href="tel:+420800000000">
          <span className="pkp-nav__callLabel">Nonstop dispečink</span>
          <span className="pkp-nav__callNum">800 00 00 00</span>
        </a>
      </header>

      <section className="pkp-hero" aria-labelledby="pkp-hero-title">
        <div className="pkp-hero__media">
          <img
            src="/hero.webp"
            alt="Vozidlo a technika PKP Global při čištění kanalizace v Praze"
            className="pkp-hero__img"
            width={1600}
            height={1000}
          />
          <div className="pkp-hero__scrim" aria-hidden="true" />
        </div>

        <div className="pkp-hero__inner">
          <p className="pkp-eyebrow">Odpady a kanalizace · Praha a okolí</p>
          <h1 id="pkp-hero-title" className="pkp-hero__title">
            Když odpad
            <br />
            neteče, jedeme.
          </h1>
          <p className="pkp-hero__lead">
            Ucpaná kanalizace, plná jímka, odpad k odvozu? Přistavíme techniku,
            vyčistíme potrubí a legálně zlikvidujeme odpad. Spolehlivě, s papíry
            v pořádku.
          </p>
          <div className="pkp-hero__cta">
            <a className="pkp-btn pkp-btn--solid" href="tel:+420800000000">
              Zavolat dispečink
            </a>
            <a className="pkp-btn pkp-btn--ghost" href="#sluzby">
              Co řešíme
            </a>
          </div>
        </div>

        <div className="pkp-hero__ticker" aria-hidden="true">
          <span>Nonstop</span>
          <span className="pkp-hero__tickerDot" />
          <span>Kamerová revize</span>
          <span className="pkp-hero__tickerDot" />
          <span>Nebezpečné odpady</span>
          <span className="pkp-hero__tickerDot" />
          <span>Kontejnery</span>
          <span className="pkp-hero__tickerDot" />
          <span>Praha a okolí</span>
        </div>
      </section>

      <section className="pkp-sec" id="sluzby" aria-labelledby="pkp-sluzby-title">
        <div className="pkp-sec__head">
          <p className="pkp-eyebrow pkp-eyebrow--dark">Co pro vás uděláme</p>
          <h2 id="pkp-sluzby-title" className="pkp-sec__title">
            Od ucpaného odtoku po odvoz nebezpečného odpadu — jedna firma.
          </h2>
        </div>

        <div className="pkp-grid">
          <ul className="pkp-list">
            {sluzby.map((s) => (
              <li className="pkp-item" key={s.kod}>
                <span className="pkp-item__kod" aria-hidden="true">
                  {s.kod}
                </span>
                <div className="pkp-item__body">
                  <h3 className="pkp-item__nazev">{s.nazev}</h3>
                  <p className="pkp-item__popis">{s.popis}</p>
                </div>
              </li>
            ))}
          </ul>

          <figure className="pkp-figure">
            <img
              src="/section-1.webp"
              alt="Kamerová revize kanalizačního potrubí PKP Global"
              className="pkp-figure__img"
              width={1200}
              height={1400}
              loading="lazy"
            />
            <figcaption className="pkp-figure__cap">
              Revize kamerou: záznam a protokol, ať víte, kde přesně kopat.
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="pkp-trust" aria-labelledby="pkp-trust-title">
        <div className="pkp-trust__grid">
          <figure className="pkp-trust__media">
            <img
              src="/section-2.webp"
              alt="Technika PKP Global připravená k výjezdu za odpady a kanalizací v Praze"
              className="pkp-trust__img"
              width={1200}
              height={900}
              loading="lazy"
            />
          </figure>

          <div className="pkp-trust__text">
            <p className="pkp-eyebrow">O nás</p>
            <h2 id="pkp-trust-title" className="pkp-trust__title">
              „Pomoc s odpady vždy a všude.“
            </h2>
            <p className="pkp-trust__lead">
              PKP Global je pražská firma pro odpady a kanalizaci. Neděláme z
              vaší havárie vědu — přijedeme, vyčistíme, odvezeme a
              zdokumentujeme. Nebezpečný ani tekutý odpad nás nezaskočí.
            </p>

            <dl className="pkp-facts">
              <div className="pkp-fact">
                <dt>Spolehlivost</dt>
                <dd>Domluvený čas dodržíme, u havárie jedeme hned.</dd>
              </div>
              <div className="pkp-fact">
                <dt>Papíry v pořádku</dt>
                <dd>Evidence a legální likvidace odpadů za vás.</dd>
              </div>
              <div className="pkp-fact">
                <dt>Kde jezdíme</dt>
                <dd>Praha a Středočeský kraj, výjezd i mimo region.</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>
    </main>
  );
}
