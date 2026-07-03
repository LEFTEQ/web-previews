import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "MVDr. Ivana Hantschová — veterinární ošetřovna Třebeš, Hradec Králové",
  description:
    "Malá veterinární ošetřovna v Hradci Králové–Třebeši. Preventivní péče, chirurgie, dentální hygiena i ochrana proti klíšťatům. Objednejte se telefonicky.",
  openGraph: {
    title: "MVDr. Ivana Hantschová — veterinární ošetřovna Třebeš",
    description:
      "Klidná ordinace pro psy a kočky v Hradci Králové. Prevence, operace, dentální hygiena, poradenství.",
    type: "website",
    locale: "cs_CZ",
    images: [{ url: "/hero.webp" }],
  },
};

const pece = [
  {
    kod: "PRV",
    nazev: "Prevence a očkování",
    text: "Vakcinace, čipování a zápis do Centrální evidence psů, kontroly kondice. Odcházíte s termínem dalšího přeočkování, ne s otazníkem.",
  },
  {
    kod: "KLI",
    nazev: "Klíšťata a blechy",
    text: "Poradíme, čím chránit právě vašeho mazlíčka. Aplikujeme i Bravecto pro psy v injekční formě — proti blechám a klíšťatům působí 12 měsíců po jednom podání.",
  },
  {
    kod: "DEN",
    nazev: "Dentální hygiena",
    text: "Zubní plak a kámen jsou velký prevít. Odstraníme zubní kámen v narkóze, ošetříme dáseň a při té příležitosti i přerostlé drápky.",
  },
  {
    kod: "CHI",
    nazev: "Chirurgie a akutní stavy",
    text: "Kastrace i závažnější zákroky jako pyometra — zánět dělohy, který je stále život ohrožující. Únava a nechutenství jsou důvod přijít hned, ne čekat do rána.",
  },
];

export default function Page() {
  return (
    <main className="vet">
      <header className="vet-top">
        <a className="vet-mark" href="#uvod" aria-label="MVDr. Ivana Hantschová, veterinární ošetřovna Třebeš">
          <span className="vet-mark__name">Hantschová</span>
          <span className="vet-mark__sub">veterinární ošetřovna · Třebeš</span>
        </a>
        <a className="vet-call" href="tel:+420495000000">
          <span className="vet-call__pulse" aria-hidden="true" />
          Zavolat do ordinace
        </a>
      </header>

      <section className="vet-hero" id="uvod">
        <div className="vet-hero__copy">
          <p className="vet-eyebrow">Hradec Králové — Třebeš</p>
          <h1 className="vet-hero__title">
            Klidná ruka<br />
            pro neklidné<br />
            pacienty.
          </h1>
          <p className="vet-hero__lead">
            Malá ošetřovna, kde vás i vašeho psa nebo kočku vyšetří ta samá
            veterinářka pokaždé. Bez fronty přes celý čekárnu, bez spěchu
            u vyšetřovacího stolu.
          </p>
          <div className="vet-hero__actions">
            <a className="vet-btn vet-btn--solid" href="tel:+420495000000">Objednat se telefonicky</a>
            <a className="vet-btn vet-btn--ghost" href="#pece">Co u nás zvládneme</a>
          </div>
        </div>
        <figure className="vet-hero__figure">
          <img
            src="/hero.webp"
            alt="Veterinářka MVDr. Ivana Hantschová při vyšetření zvířecího pacienta v ordinaci"
            className="vet-hero__img"
          />
          <figcaption className="vet-hero__tag">Ordinujeme na objednání — každý pacient dostane svůj čas.</figcaption>
        </figure>
      </section>

      <section className="vet-care" id="pece" aria-labelledby="pece-nadpis">
        <div className="vet-care__head">
          <p className="vet-eyebrow">Čtyři důvody, proč přijít</p>
          <h2 className="vet-section-title" id="pece-nadpis">Péče od nosu po drápky</h2>
        </div>
        <ul className="vet-care__list">
          {pece.map((p) => (
            <li className="vet-card" key={p.kod}>
              <span className="vet-card__code" aria-hidden="true">{p.kod}</span>
              <h3 className="vet-card__title">{p.nazev}</h3>
              <p className="vet-card__text">{p.text}</p>
            </li>
          ))}
        </ul>
        <figure className="vet-strip">
          <img
            src="/section-1.webp"
            alt="Detail veterinárního ošetření — péče o zvířecího pacienta"
            className="vet-strip__img"
          />
        </figure>
      </section>

      <section className="vet-about" aria-labelledby="onas-nadpis">
        <figure className="vet-about__figure">
          <img
            src="/section-2.webp"
            alt="Prostředí veterinární ošetřovny Třebeš v Hradci Králové"
            className="vet-about__img"
          />
        </figure>
        <div className="vet-about__copy">
          <p className="vet-eyebrow">O ošetřovně</p>
          <h2 className="vet-section-title" id="onas-nadpis">
            Jedna veterinářka,<br />
            která si vás pamatuje
          </h2>
          <p className="vet-about__text">
            MVDr. Ivana Hantschová vede ošetřovnu v Třebeši tak, jak si
            představuje péči o vlastní zvíře — poctivě a bez zbytečného
            stresu. Poradíme s prevencí, ale nezastavíme se ani před akutním
            zákrokem. A protože příroda je nevyzpytatelná a klíšťata obzvlášť,
            hlídáme ochranu vašich mazlíčků po celý rok.
          </p>
          <dl className="vet-facts">
            <div className="vet-fact">
              <dt>Kde nás najdete</dt>
              <dd>Třebeš, Hradec Králové</dd>
            </div>
            <div className="vet-fact">
              <dt>Jak to u nás chodí</dt>
              <dd>Ordinace na objednání</dd>
            </div>
            <div className="vet-fact">
              <dt>Napište nám</dt>
              <dd><a href="mailto:ordinace@hantschova.cz">ordinace@hantschova.cz</a></dd>
            </div>
            <div className="vet-fact">
              <dt>Zavolejte</dt>
              <dd><a href="tel:+420495000000">495 00 00 00</a></dd>
            </div>
          </dl>
        </div>
      </section>
    </main>
  );
}
