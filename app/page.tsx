import type { ReactNode } from "react";

const offer: { label: string; desc: string; tone: string }[] = [
  {
    label: "Do školy",
    tone: "red",
    desc: "Sešity linkované i čtverečkované, penály, aktovky, pastelky a všechno ostatní na první září.",
  },
  {
    label: "Do kanceláře",
    tone: "blue",
    desc: "Bloky, diáře, pořadače, tužky, propisky a papír, na kterém se dobře píše.",
  },
  {
    label: "Přání a dárky",
    tone: "yellow",
    desc: "Přáníčka k svátku i k narozeninám, balicí papír, stuhy a drobnosti, co potěší.",
  },
  {
    label: "Tvoření a dekorace",
    tone: "kraft",
    desc: "Barvy, papíry, nálepky, razítka a nápady pro každého, kdo si rád něco vyrobí.",
  },
];

const praha: string[] = [
  "OC Bořislavka",
  "Centrum Černý Most",
  "Atrium Flora",
  "OC Háje",
  "Galerie Harfa",
  "Westfield Chodov",
  "OC Letňany",
  "OC Krakov",
  "OC Stromovka",
  "OC Šestka",
  "OC Lužiny",
  "Arkády Pankrác",
  "Quadrio",
  "OC Nový Smíchov",
  "OC Zličín",
];

const mimoPrahu: string[] = ["Futurum Kolín", "OC Atrium Hradec Králové"];

export default function Page(): ReactNode {
  return (
    <main className="sheet">
      <div className="margin-line" aria-hidden="true">
        <span className="margin-line__ink" />
      </div>

      <header className="band band--squared hero">
        <p className="wordmark">
          <span className="wordmark__mark" aria-hidden="true" />
          <span className="wordmark__name">AKM</span>
          <span className="wordmark__kicker">papírnictví</span>
        </p>

        <p className="eyebrow">17 prodejen · Praha, Kolín, Hradec Králové</p>
        <h1 className="hero__title">
          Sešity, pastelky
          <br /> a všechno
          <span className="hero__accent"> mezi řádky.</span>
        </h1>
        <p className="lead">
          Největší síť papírnictví v pražských nákupních centrech. Zastavte se
          cestou na nákupy a vyberte si ze školních a kancelářských potřeb,
          přání, dekorací i nezbytností pro tvoření vás a vašich dětí.
        </p>
        <ul className="hero__facts">
          <li>
            <strong>15</strong> prodejen po celé Praze
          </li>
          <li>
            <strong>2</strong> další v Kolíně a Hradci Králové
          </li>
        </ul>
      </header>

      <section className="band band--ruled offer" aria-labelledby="offer-title">
        <p className="section-label">Nabídka</p>
        <h2 id="offer-title" className="section-title">
          Co si u nás vyberete
        </h2>
        <ul className="offer__grid">
          {offer.map((item) => (
            <li key={item.label} className="offer__item" data-tone={item.tone}>
              <span className="offer__pencil" aria-hidden="true" />
              <h3 className="offer__label">{item.label}</h3>
              <p className="offer__desc">{item.desc}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="band band--dark stores" aria-labelledby="stores-title">
        <p className="section-label section-label--light">Prodejny</p>
        <h2 id="stores-title" className="section-title section-title--light">
          Kde nás najdete
        </h2>
        <p className="stores__intro">
          Jsme tam, kam chodíte nakupovat — v patnácti pražských nákupních
          centrech a ve dvou mimo Prahu. Stačí zajít dovnitř.
        </p>

        <div className="stores__group">
          <p className="stores__heading">V Praze</p>
          <ul className="stores__list">
            {praha.map((name) => (
              <li key={name} className="stores__item">
                {name}
              </li>
            ))}
          </ul>
        </div>

        <div className="stores__group">
          <p className="stores__heading">Mimo Prahu</p>
          <ul className="stores__list">
            {mimoPrahu.map((name) => (
              <li key={name} className="stores__item">
                {name}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
