import type { CSSProperties } from "react";

const sluzby = [
  {
    kod: "01",
    nazev: "Výměna čelního skla",
    popis:
      "Lepené sklo s originální specifikací, kalibrace asistentů (ADAS) i odvoz vozu po dohodě. Vždy s respektem k STK.",
  },
  {
    kod: "02",
    nazev: "Oprava odštěpu a praskliny",
    popis:
      "Drobný odštěp vyplníme pryskyřicí dřív, než se rozjede přes celé sklo. Hotovo většinou do hodiny.",
  },
  {
    kod: "03",
    nazev: "Pojistná událost za vás",
    popis:
      "Z povinného i havarijního pojištění vyřídíme papírování my. Při splnění podmínek měníte čelní sklo bezplatně.",
  },
  {
    kod: "04",
    nazev: "Tónování a autofólie 3M",
    popis:
      "Tónování pokovením a prosluneční fólie 3M — méně tepla v kabině a soukromí na zadních sedadlech.",
  },
  {
    kod: "05",
    nazev: "Vyhřívání a kontakty",
    popis:
      "Opravy přerušeného vyhřívání zadních skel a přilepení odlepených kontaktů zpětných zrcátek.",
  },
  {
    kod: "06",
    nazev: "Bezpečnostní kódování CEBIA",
    popis:
      "Pískované kódování skel proti krádeži. Auto je hůř prodejné překupníkům a lépe dohledatelné.",
  },
];

export default function Page() {
  return (
    <main className="as">
      <header className="as-top">
        <a className="as-mark" href="#" aria-label="Autosklo Roger, Pardubice">
          <span className="as-mark-name">AUTOSKLO</span>
          <span className="as-mark-roger">Roger</span>
          <span className="as-mark-city">Pardubice</span>
        </a>
        <a className="as-callbtn" href="tel:+420466513227">
          Zavolat 466&nbsp;513&nbsp;227
        </a>
      </header>

      <section className="as-hero">
        <img
          className="as-hero-img"
          src="/hero.webp"
          alt="Detail čelního skla osobního vozu při výměně v dílně Autosklo Roger"
        />
        <div className="as-hero-veil" aria-hidden="true" />
        <ImpactStar />
        <div className="as-hero-text">
          <p className="as-eyebrow">Autosklo · Pardubice · od jednoho odštěpu</p>
          <h1 className="as-h1">
            Než se z malého kamínku<br />
            stane <span className="as-h1-em">prasklina přes celé sklo.</span>
          </h1>
          <p className="as-lede">
            Odštěp opravíme většinou do hodiny, čelní sklo vyměníme i s
            kalibrací asistentů. Pojistnou událost vyřídíme za vás — při
            splnění podmínek měníte sklo bezplatně.
          </p>
          <div className="as-hero-cta">
            <a className="as-callbtn as-callbtn--big" href="tel:+420466513227">
              Zavolat 466&nbsp;513&nbsp;227
            </a>
            <a className="as-textlink" href="mailto:pardubice@autosklo-roger.cz">
              Napsat e-mail
            </a>
          </div>
        </div>
      </section>

      <section className="as-services" aria-labelledby="as-services-h">
        <div className="as-sec-head">
          <p className="as-eyebrow as-eyebrow--dark">Co u nás vyřešíte</p>
          <h2 id="as-services-h" className="as-h2">
            Šest věcí, kvůli kterým za námi auta přijíždějí
          </h2>
        </div>
        <ol className="as-grid">
          {sluzby.map((s) => (
            <li className="as-card" key={s.kod}>
              <span className="as-card-kod" aria-hidden="true">
                {s.kod}
              </span>
              <h3 className="as-card-h">{s.nazev}</h3>
              <p className="as-card-p">{s.popis}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="as-trust" aria-labelledby="as-trust-h">
        <div className="as-trust-media">
          <img
            src="/section-1.webp"
            alt="Technik Autosklo Roger usazuje nové čelní sklo do vozu"
          />
          <img
            src="/section-2.webp"
            alt="Detail opravy odštěpu čelního skla pryskyřicí"
          />
        </div>
        <div className="as-trust-text">
          <p className="as-eyebrow as-eyebrow--dark">O dílně v Pardubicích</p>
          <h2 id="as-trust-h" className="as-h2">
            Místní dílna, která sklo nejen prodá, ale i poradí, kdy ho měnit
            nemusíte.
          </h2>
          <p className="as-trust-p">
            Děláme autosklo poctivě — prodej, montáže i opravy osobních a
            autobusových skel. Když stačí oprava odštěpu, neprodáme vám nové
            sklo. Když výměna nutná je, sehnání skla i termín řešíme rychle.
          </p>
          <dl className="as-facts">
            <div className="as-fact">
              <dt>Pobočka</dt>
              <dd>Pardubice — sklady i mobilní servis u vás po dohodě</dd>
            </div>
            <div className="as-fact">
              <dt>Pojišťovny</dt>
              <dd>Likvidaci pojistné události vyřídíme kompletně za vás</dd>
            </div>
            <div className="as-fact">
              <dt>Telefon</dt>
              <dd>
                <a href="tel:+420466513227">466 513 227</a> ·{" "}
                <a href="tel:+420606311201">606 311 201</a>
              </dd>
            </div>
          </dl>
        </div>
      </section>
    </main>
  );
}

function ImpactStar() {
  const cracks = [12, 47, 88, 130, 168, 205, 250, 300, 335];
  return (
    <svg
      className="as-star"
      viewBox="0 0 200 200"
      aria-hidden="true"
      focusable="false"
    >
      <g className="as-star-g">
        {cracks.map((deg, i) => {
          const len = 60 + ((i * 37) % 38);
          const rad = (deg * Math.PI) / 180;
          const x = 100 + Math.cos(rad) * len;
          const y = 100 + Math.sin(rad) * len;
          const style = { "--d": `${i * 90}ms` } as CSSProperties;
          return (
            <line
              key={deg}
              className="as-crack"
              x1={100}
              y1={100}
              x2={x}
              y2={y}
              style={style}
            />
          );
        })}
        <circle className="as-impact" cx={100} cy={100} r={9} />
        <circle className="as-impact-ring" cx={100} cy={100} r={20} />
      </g>
    </svg>
  );
}
