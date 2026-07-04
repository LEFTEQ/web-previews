import type { CSSProperties } from "react";

export default function Page() {
  const finishes = [
    {
      code: "RAL 9005",
      name: "Hluboká čerň, mat",
      note: "Zábradlí, ploty, konstrukce. Matný povrch, který nechytá otisky.",
    },
    {
      code: "RAL 7016",
      name: "Antracit, jemná struktura",
      note: "Nejžádanější odstín na kování bran a hliníkové profily.",
    },
    {
      code: "RAL 3005",
      name: "Vínová, lesk",
      note: "Ráfky, díly motorek, věci, které mají být vidět.",
    },
    {
      code: "kladívkový",
      name: "Kladívkový efekt",
      note: "Struktura, která schová drobné nerovnosti odlitku.",
    },
  ];

  const steps = [
    {
      n: "01",
      t: "Očistíme a odmastíme",
      d: "Díl projde předúpravou. Bez čistého kovu se barva nedrží — tady začíná životnost.",
    },
    {
      n: "02",
      t: "Nastříkáme prášek",
      d: "Prášková barva se na díl nanáší elektrostaticky. Žádná rozpouštědla, žádné stékání.",
    },
    {
      n: "03",
      t: "Vypálíme v peci",
      d: "Při 150–200 °C se prášek zataví do souvislého, tvrdého povrchu. Trvá minuty, drží roky.",
    },
  ];

  return (
    <main className="page">
      <header className="topbar">
        <a className="wordmark" href="#" aria-label="Saldor, prášková lakovna Brno">
          <span className="wordmark__name">SALDOR</span>
          <span className="wordmark__ral">RAL</span>
        </a>
        <nav className="nav" aria-label="Hlavní navigace">
          <a href="#nabidka">Co lakujeme</a>
          <a href="#postup">Jak to probíhá</a>
          <a className="nav__call" href="tel:+420515000000">Zavolat do lakovny</a>
        </nav>
      </header>

      <section className="hero">
        <div className="hero__media">
          <img
            src="/hero.webp"
            alt="Kovové díly zavěšené v práškové lakovně před vstupem do vypalovací pece"
            className="hero__img"
          />
          <div className="hero__pane">
            <p className="eyebrow">Prášková lakovna · komaxit · Brno</p>
            <h1 className="hero__title">
              Barva, která se<br />
              <span className="hero__accent">vypálí do kovu.</span>
            </h1>
            <p className="hero__lead">
              Komaxit bez rozpouštědel. Nastříkáme, vypálíme při 150–200 °C a
              vznikne rovnoměrný, tvrdý povrch, který vydrží počasí i provoz.
              Kterýkoli odstín ze vzorníku RAL.
            </p>
            <div className="hero__cta">
              <a className="btn btn--solid" href="#nabidka">Chci nacenit zakázku</a>
              <a className="btn btn--ghost" href="tel:+420515000000">515 00 00 00</a>
            </div>
          </div>
        </div>

        <div className="specbar" aria-label="Rozměry vypalovací pece">
          <span className="specbar__label">Do pece se u nás vejde</span>
          <span className="specbar__dim">
            1200 <em>š</em> &times; 1800 <em>v</em> &times; 3400 <em>h</em>{" "}
            <span className="specbar__mm">mm</span>
          </span>
        </div>
      </section>

      <section className="section" id="nabidka">
        <div className="section__head">
          <p className="eyebrow">Povrchy a odstíny</p>
          <h2 className="section__title">
            Lesk, mat, struktura, kladívko — a celý vzorník RAL.
          </h2>
          <p className="section__lead">
            Vybíráme podle toho, kde díl skončí. Pro venkovní věci sáhneme po
            barvách odolných UV; na ocel do počasí přidáme práškový zinkový
            základ kvůli korozi.
          </p>
        </div>

        <div className="finish-grid">
          {finishes.map((f) => (
            <article className="chip" key={f.code}>
              <span
                className="chip__swatch"
                style={{ ["--swatch" as keyof CSSProperties]: swatch(f.code) } as CSSProperties}
                aria-hidden="true"
              />
              <span className="chip__code">{f.code}</span>
              <span className="chip__name">{f.name}</span>
              <span className="chip__note">{f.note}</span>
            </article>
          ))}
        </div>

        <figure className="figure">
          <img
            src="/section-1.webp"
            alt="Detail práškově lakovaného kovového dílu s rovnoměrným barevným povrchem"
            className="figure__img"
          />
          <figcaption className="figure__cap">
            Hotový povrch po vypálení — souvislý, bez stékanců a přechodů.
          </figcaption>
        </figure>
      </section>

      <section className="section section--dark" id="postup">
        <div className="section__head">
          <p className="eyebrow eyebrow--light">Jak zakázka projde dílnou</p>
          <h2 className="section__title">
            Tři kroky mezi tím, než díl přivezete a odvezete.
          </h2>
        </div>

        <ol className="steps">
          {steps.map((s) => (
            <li className="step" key={s.n}>
              <span className="step__n">{s.n}</span>
              <div className="step__body">
                <h3 className="step__t">{s.t}</h3>
                <p className="step__d">{s.d}</p>
              </div>
            </li>
          ))}
        </ol>

        <div className="trust">
          <figure className="figure figure--flush">
            <img
              src="/section-2.webp"
              alt="Provoz práškové lakovny Saldor s připravenými díly k lakování"
              className="figure__img"
            />
          </figure>
          <div className="trust__text">
            <p className="eyebrow eyebrow--light">Proč to dát nám</p>
            <p className="trust__lead">
              Lakujeme v Brně řadu let a víme, kde bývá problém dřív, než
              nastane. O zakázku se stará vyškolený člověk, ne linka — proto
              řešíme i kusy a atypy, se kterými jinde pochodíte.
            </p>
            <ul className="trust__list">
              <li>Osobní přístup a nacenění na míru dílu</li>
              <li>Transparentní laky — čiré i tónované, mat i lesk</li>
              <li>Zinkový základ pro venkovní ocel proti korozi</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}

function swatch(code: string): string {
  switch (code) {
    case "RAL 9005":
      return "#0d0d0f";
    case "RAL 7016":
      return "#293036";
    case "RAL 3005":
      return "#5a1b23";
    default:
      return "#4a4d52";
  }
}
