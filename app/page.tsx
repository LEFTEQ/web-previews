import type { ReactNode } from "react";

export default function Page() {
  return (
    <main className="pg">
      <a className="skip" href="#obsah">Přeskočit na obsah</a>

      <header className="top">
        <a className="mark" href="#" aria-label="Pilecký — ploty a oplocení">
          <span className="mark__name">PILECKÝ</span>
          <span className="mark__grid" aria-hidden="true">
            <i></i><i></i><i></i><i></i><i></i><i></i>
          </span>
        </a>
        <div className="top__meta">
          <span className="top__loc">Mokrovraty&nbsp;177</span>
          <a className="top__call" href="tel:+420318593421">Zavolat</a>
        </div>
      </header>

      <section className="hero" aria-labelledby="hero-h">
        <div className="hero__frame">
          <img
            className="hero__img"
            src="/hero.webp"
            alt="Nový plotový systém Pilecký kolem zahrady — svařované panely a sloupky"
            width={1600}
            height={1000}
          />
          <div className="hero__mesh" aria-hidden="true" />
        </div>

        <div className="hero__body">
          <p className="hero__eyebrow">Ploty a oplocení · od&nbsp;roku&nbsp;1994 · Mokrovraty</p>
          <h1 id="hero-h" className="hero__h">
            Postavíme vám plot,
            <span className="hero__accent"> který drží linii.</span>
          </h1>
          <p className="hero__lead">
            Čtyřhranné pletivo, svařované panely, plotovky i posuvné brány.
            Naměříme, spočítáme zdarma, přivezeme na pozemek a postavíme
            u&nbsp;vás. Většinu materiálu máme skladem.
          </p>
          <div className="hero__cta">
            <a className="btn btn--solid" href="tel:+420318593421">Zavolat a domluvit zaměření</a>
            <a className="btn btn--ghost" href="mailto:info@pilecky.cz">Napsat e-mail</a>
          </div>
          <dl className="hero__facts">
            <div><dt>Zaměření</dt><dd>zdarma</dd></div>
            <div><dt>Skladem</dt><dd>většina sortimentu</dd></div>
            <div><dt>Servis</dt><dd>i po montáži</dd></div>
          </dl>
        </div>
      </section>

      <section id="obsah" className="sortiment" aria-labelledby="sort-h">
        <div className="sec__head">
          <p className="sec__eyebrow">Sortiment</p>
          <h2 id="sort-h" className="sec__h">Vyberte typ oplocení podle toho, co ohraničujete</h2>
          <p className="sec__intro">
            Od zahrady po průmyslovou halu — poradíme, co se hodí k&nbsp;pozemku,
            terénu i&nbsp;rozpočtu. Ke každému typu dodáme sloupky, brány a&nbsp;branky.
          </p>
        </div>

        <ul className="cards">
          {SORTIMENT.map((it) => (
            <li className="card" key={it.name}>
              <span className="card__tag">{it.tag}</span>
              <h3 className="card__name">{it.name}</h3>
              <p className="card__desc">{it.desc}</p>
              <span className="card__hint">{it.hint}</span>
            </li>
          ))}
        </ul>

        <figure className="showcase">
          <img
            src="/section-1.webp"
            alt="Detail svařovaného plotového panelu se sloupkem a montážními sponami"
            width={1400}
            height={900}
          />
          <figcaption>
            Panely IDEAL® montujeme na sloupky s&nbsp;úpravou proti korozi —
            plot vydrží roky bez natírání.
          </figcaption>
        </figure>
      </section>

      <section className="jak" aria-labelledby="jak-h">
        <div className="jak__grid">
          <div className="jak__text">
            <p className="sec__eyebrow sec__eyebrow--light">Jak to u nás chodí</p>
            <h2 id="jak-h" className="sec__h sec__h--light">Od telefonu k&nbsp;hotovému plotu ve&nbsp;čtyřech krocích</h2>
            <ol className="steps">
              {KROKY.map((k, i) => (
                <li className="step" key={k.t}>
                  <span className="step__num">{String(i + 1).padStart(2, "0")}</span>
                  <div>
                    <h3 className="step__t">{k.t}</h3>
                    <p className="step__d">{k.d}</p>
                  </div>
                </li>
              ))}
            </ol>
            <p className="jak__note">
              Firma Pilecký s.&nbsp;r.&nbsp;o. stojí na trhu od&nbsp;roku 1994 —
              začínali jsme u&nbsp;drátěného oplocení, dnes vedeme ucelenou
              nabídku plotových systémů. Sídlíme na&nbsp;adrese Mokrovraty&nbsp;177.
            </p>
          </div>

          <figure className="jak__figure">
            <img
              src="/section-2.webp"
              alt="Montáž oplocení na pozemku — usazování sloupků do betonu"
              width={1200}
              height={1400}
            />
            <figcaption>Montáž u&nbsp;zákazníka na&nbsp;Dobříšsku</figcaption>
          </figure>
        </div>
      </section>
    </main>
  );
}

type Item = { tag: string; name: string; desc: string; hint: string };

const SORTIMENT: Item[] = [
  {
    tag: "Klasika",
    name: "Čtyřhranné pletivo IDEAL®",
    desc: "Osvědčené drátěné oplocení zahrad a sadů. Poplastované i pozinkované, k tomu sloupky a napínací dráty.",
    hint: "Nejlevnější řešení, skladem",
  },
  {
    tag: "Pevné",
    name: "Svařované panely a sítě",
    desc: "Tuhé panely 3D i 2D pro ostrý, rovný plot bez prověšení. Pro domy, provozovny i haly.",
    hint: "Rovná linie, dlouhá životnost",
  },
  {
    tag: "Design",
    name: "Plotovky a hliníkové ploty",
    desc: "Moderní vodorovné i svislé plotovky, hliníkové systémy bez údržby. Vyberete v konfigurátoru.",
    hint: "Bez natírání",
  },
  {
    tag: "Vjezd",
    name: "Brány, branky a posuvné brány",
    desc: "Křídlové i posuvné brány, garážová vrata výklopná, sekční i rolovací. Vše sladíme s plotem.",
    hint: "Ruční i s pohonem",
  },
  {
    tag: "Terén",
    name: "Gabiony a lesnické pletivo",
    desc: "Gabionové koše jako opěrné i okrasné stěny, lesnická a chovatelská pletiva na větší plochy.",
    hint: "Do svahu i do lesa",
  },
  {
    tag: "Stín",
    name: "Stínící prvky a fólie pod plot",
    desc: "Stínící pásky a rohože do panelů, fólie pod plot proti prorůstání. Doladí soukromí.",
    hint: "Soukromí za pár minut",
  },
];

const KROKY: { t: string; d: ReactNode }[] = [
  { t: "Zavoláte nebo napíšete", d: "Řeknete, co chcete ohradit a jak velký pozemek. Na mobilu stačí jedno klepnutí." },
  { t: "Přijedeme zaměřit", d: "Zaměření a cenová nabídka jsou zdarma. Poradíme typ plotu podle terénu." },
  { t: "Přivezeme materiál", d: "Většinu sortimentu máme skladem a dovezeme až na váš pozemek." },
  { t: "Postavíme a seřídíme", d: "Plot u vás postavíme, brány seřídíme a zajistíme i pozdější servis." },
];
