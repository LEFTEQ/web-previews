import type { CSSProperties } from "react";

export const metadata = {
  title: "Rehabilitace Nežádal — fyzioterapie a návrat k pohybu | Olomouc",
  description:
    "Rehabilitace Nežádal v Olomouci: manuální terapie, fyzioterapie po úrazech a operacích, terapie zad a páteře. Vracíme vašemu tělu rozsah pohybu, kus po kusu.",
  openGraph: {
    title: "Rehabilitace Nežádal — Olomouc",
    description:
      "Fyzioterapie a manuální terapie v Olomouci. Měříme rozsah pohybu a vracíme ho zpět.",
    type: "website",
    images: ["/hero.webp"],
  },
};

const sluzby = [
  {
    name: "Manuální terapie",
    desc: "Práce rukama na kloubech, svalech a měkkých tkáních. Uvolníme blokádu, vrátíme kloubu vůli a vám klid.",
    rom: "mobilita",
  },
  {
    name: "Po úrazu a operaci",
    desc: "Provedeme vás rekonvalescencí po zlomenině, endoprotéze nebo plastice vazu — od prvních pohybů po plnou zátěž.",
    rom: "síla",
  },
  {
    name: "Záda a páteř",
    desc: "Bolesti bederní a krční páteře, výhřez ploténky, ztuhlá ramena od sezení u počítače. Najdeme příčinu, ne jen úlevu.",
    rom: "stabilita",
  },
  {
    name: "Sportovní rehabilitace",
    desc: "Pro běžce, fotbalisty i víkendové sportovce. Doléčíme zranění a nastavíme tělo tak, aby se nevracelo.",
    rom: "výkon",
  },
];

const kroky = [
  {
    n: "01",
    title: "Vstupní vyšetření",
    desc: "Změříme rozsah pohybu, otestujeme svaly a vyslechneme celý příběh obtíží. Hodina jen pro vás.",
  },
  {
    n: "02",
    title: "Terapie na míru",
    desc: "Manuální techniky, cílené cvičení a edukace. Žádná pásová výroba — plán roste z vašeho vyšetření.",
  },
  {
    n: "03",
    title: "Návrat k pohybu",
    desc: "Naučíme vás, jak si výsledek udržet doma i v práci. Cílem je, abyste nás přestali potřebovat.",
  },
];

export default function Page() {
  return (
    <main className="rn">
      <header className="rn-top">
        <a className="rn-mark" href="#" aria-label="Rehabilitace Nežádal, úvod">
          <span className="rn-mark__name">Nežádal</span>
          <span className="rn-mark__sub">rehabilitace · Olomouc</span>
        </a>
        <a className="rn-call" href="tel:+420733000000">Objednat se</a>
      </header>

      <section className="rn-hero" aria-labelledby="rn-h1">
        <div className="rn-hero__copy">
          <p className="rn-eyebrow">Fyzioterapie, která měří, ne odhaduje</p>
          <h1 id="rn-h1">
            Vracíme tělu<br />
            <em>rozsah pohybu</em>,<br />
            stupeň po stupni.
          </h1>
          <p className="rn-lede">
            Rehabilitace Nežádal v Olomouci. Manuální terapie a fyzioterapie
            pro lidi, kterým bolest nebo úraz vzaly kus jejich běžného dne.
            Měříme, co se vrací — a nezastavíme se u úlevy.
          </p>
          <div className="rn-actions">
            <a className="rn-btn" href="tel:+420733000000">Zavolat a objednat</a>
            <a className="rn-link" href="#sluzby">Čím vám pomůžeme</a>
          </div>
        </div>

        <figure className="rn-hero__media">
          <img
            src="/hero.webp"
            alt="Fyzioterapeut při manuální terapii ramene klienta v ordinaci Rehabilitace Nežádal"
            width={900}
            height={1100}
          />
          <div className="rn-arc" role="img" aria-label="Rozsah pohybu ramene se zvětšil ze 120 na 165 stupňů">
            <svg viewBox="0 0 200 130" aria-hidden="true">
              <path className="rn-arc__track" d="M20 120 A100 100 0 0 1 180 120" />
              <path className="rn-arc__sweep" d="M20 120 A100 100 0 0 1 180 120" />
              {Array.from({ length: 13 }).map((_, i) => {
                const a = Math.PI - (i / 12) * Math.PI;
                const x1 = 100 + Math.cos(a) * 100;
                const y1 = 120 - Math.sin(a) * 100;
                const x2 = 100 + Math.cos(a) * 92;
                const y2 = 120 - Math.sin(a) * 92;
                return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} className="rn-arc__tick" />;
              })}
            </svg>
            <div className="rn-arc__read">
              <span className="rn-arc__from">120°</span>
              <span className="rn-arc__arrow">→</span>
              <span className="rn-arc__to">165°</span>
            </div>
            <p className="rn-arc__cap">rozsah ramene po 6 týdnech terapie</p>
          </div>
        </figure>
      </section>

      <section className="rn-sec rn-sluzby" id="sluzby" aria-labelledby="rn-sluzby-h">
        <div className="rn-sec__head">
          <p className="rn-eyebrow">Co u nás zvládneme</p>
          <h2 id="rn-sluzby-h">Čtyři oblasti, jeden přístup — najít příčinu.</h2>
        </div>
        <div className="rn-sluzby__grid">
          <ul className="rn-cards">
            {sluzby.map((s) => (
              <li className="rn-card" key={s.name}>
                <span className="rn-card__tag">{s.rom}</span>
                <h3>{s.name}</h3>
                <p>{s.desc}</p>
              </li>
            ))}
          </ul>
          <figure className="rn-sluzby__media">
            <img
              src="/section-1.webp"
              alt="Cvičení s therabandem a rehabilitačními pomůckami v ordinaci v Olomouci"
              width={760}
              height={900}
            />
          </figure>
        </div>
      </section>

      <section className="rn-sec rn-about" aria-labelledby="rn-about-h">
        <div className="rn-about__grid">
          <figure className="rn-about__media">
            <img
              src="/section-2.webp"
              alt="Fyzioterapeut Rehabilitace Nežádal při vstupním vyšetření klienta"
              width={760}
              height={900}
            />
          </figure>
          <div className="rn-about__copy">
            <p className="rn-eyebrow">Jak to u nás chodí</p>
            <h2 id="rn-about-h">Tři kroky od první bolesti zpátky k pohybu.</h2>
            <ol className="rn-steps">
              {kroky.map((k) => (
                <li className="rn-step" key={k.n}>
                  <span className="rn-step__n">{k.n}</span>
                  <div>
                    <h3>{k.title}</h3>
                    <p>{k.desc}</p>
                  </div>
                </li>
              ))}
            </ol>
            <p className="rn-trust">
              Ordinujeme v <strong>Olomouci</strong>, objednáváme na konkrétní čas —
              žádné čekárny plné lidí. Pracujeme i s doporučením od lékaře
              a poradíme, co zvládnete sami doma.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
