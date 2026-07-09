import type { CSSProperties } from "react";

export default function Page() {
  const services = [
    {
      no: "01",
      name: "Kuchyňské linky",
      body: "Na míru bytu i partie dřeva. Fronty z masivu, dýhy nebo lakovaného MDF, kování CC Wood, spotřebiče od Elektromédia. Změříme, nakreslíme, vyrobíme, smontujeme.",
    },
    {
      no: "02",
      name: "Ložnice a obývací pokoje",
      body: "Vestavné skříně po strop, komody, postele, knihovny. Řešíme šikminy pod střechou i sloupy uprostřed pokoje — nábytek se přizpůsobí místnosti, ne naopak.",
    },
    {
      no: "03",
      name: "Dětské pokoje",
      body: "Odolné povrchy, zaoblené hrany, patrové postele a psací stoly, které rostou s dítětem. Materiály, na které si dítě může sáhnout.",
    },
    {
      no: "04",
      name: "Kancelářský a atypický nábytek",
      body: "Recepce, konferenční stoly, úložné stěny, bezpečnostní dveře od Alexandra Novotného. Kus, který jinde nekoupíte, protože ho jinde nedělají.",
    },
  ];

  const materials = ["Dub", "Buk", "Ořech", "Jasan", "Smrk", "Lakované MDF", "Dýha"];

  const guarantees = [
    { k: "Zaměření zdarma", v: "Přijedeme k vám do bytu v Praze a okolí, změříme a poradíme na místě." },
    { k: "Vlastní dílna", v: "Nábytek vzniká u nás v dílně, ne u anonymního subdodavatele." },
    { k: "Montáž od nás", v: "Kdo nábytek vyrobil, ten ho i přiveze a smontuje. Jedna parta, jedna odpovědnost." },
  ];

  return (
    <main className="tb">
      <header className="tb-nav" aria-label="Hlavní navigace">
        <a className="tb-brand" href="#top" aria-label="Truhlářství Březina, domů">
          <span className="tb-brand-mark" aria-hidden="true">B</span>
          <span className="tb-brand-word">
            Truhlářství <em>Březina</em>
          </span>
        </a>
        <nav className="tb-links">
          <a href="#nabidka">Co vyrábíme</a>
          <a href="#dilna">O dílně</a>
          <a className="tb-tel" href="tel:+420728118446">728&nbsp;118&nbsp;446</a>
        </nav>
      </header>

      <section className="tb-hero" id="top">
        <div className="tb-hero-media">
          <img
            src="/hero.webp"
            alt="Nábytek na míru z dílny Truhlářství Březina"
            className="tb-hero-img"
          />
          <span className="tb-grain" aria-hidden="true" />
        </div>

        <div className="tb-hero-text">
          <p className="tb-eyebrow">Rodinná dílna v Praze&nbsp;10 · od roku 2003</p>
          <h1 className="tb-hero-title">
            Nábytek řezaný
            <span className="tb-hero-underline">na míru vašeho bytu</span>
          </h1>
          <p className="tb-hero-lead">
            Bratři Pavel a Karel Březinovi dělají kuchyně, skříně a atypický nábytek,
            který sedne na centimetr. Od zaměření po montáž jedna parta — bez řetězu
            subdodavatelů.
          </p>
          <div className="tb-hero-cta">
            <a className="tb-btn" href="tel:+420728118446">Zavolat truhláři</a>
            <a className="tb-btn-ghost" href="#nabidka">Prohlédnout práce</a>
          </div>

          <dl className="tb-figures">
            <div>
              <dt>V dílně od</dt>
              <dd>2003</dd>
            </div>
            <div>
              <dt>Sídlo</dt>
              <dd>Nad vinným potokem, Praha 10</dd>
            </div>
            <div>
              <dt>Kdo přijede měřit</dt>
              <dd>Rodina, ne obchodník</dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="tb-section" id="nabidka" aria-labelledby="nabidka-h">
        <div className="tb-section-head">
          <p className="tb-kicker">Co vyrábíme</p>
          <h2 id="nabidka-h" className="tb-h2">
            Čtyři věci, které umíme do posledního spoje
          </h2>
          <p className="tb-section-lead">
            Nejsme e-shop s nábytkem v krabici. Každý kus kreslíme podle vašeho
            prostoru a děláme ho z materiálu, který si spolu vybereme.
          </p>
        </div>

        <ol className="tb-list">
          {services.map((s) => (
            <li className="tb-item" key={s.no}>
              <span className="tb-item-no" aria-hidden="true">
                {s.no}
              </span>
              <div className="tb-item-body">
                <h3 className="tb-item-name">{s.name}</h3>
                <p>{s.body}</p>
              </div>
            </li>
          ))}
        </ol>

        <div className="tb-materials">
          <p className="tb-materials-label">Z čeho to řežeme</p>
          <ul className="tb-chips">
            {materials.map((m) => (
              <li key={m}>{m}</li>
            ))}
          </ul>
        </div>

        <figure className="tb-figure">
          <img
            src="/section-1.webp"
            alt="Detail kuchyňské linky vyrobené v dílně Truhlářství Březina"
            className="tb-figure-img"
          />
          <figcaption>
            Kuchyňská linka na míru — fronty, kování i montáž od nás.
          </figcaption>
        </figure>
      </section>

      <section className="tb-section tb-section--dark" id="dilna" aria-labelledby="dilna-h">
        <div className="tb-dilna-grid">
          <div className="tb-dilna-text">
            <p className="tb-kicker tb-kicker--light">O dílně</p>
            <h2 id="dilna-h" className="tb-h2 tb-h2--light">
              Rodinný podnik, kde se vedoucí sám postaví k pile
            </h2>
            <p className="tb-dilna-lead">
              Truhlářství Březina založili v roce 2003 bratři Pavel a Karel jako
              malý rodinný podnik. Za tu dobu jsme vybavili stovky pražských bytů —
              a pořád platí, že s vámi jedná ten, kdo dřevo doopravdy opracovává.
            </p>

            <ul className="tb-guarantee">
              {guarantees.map((g) => (
                <li key={g.k}>
                  <strong>{g.k}</strong>
                  <span>{g.v}</span>
                </li>
              ))}
            </ul>

            <div className="tb-partners">
              <p className="tb-partners-label">S kým spolupracujeme</p>
              <p className="tb-partners-body">
                Spotřebiče <b>Elektromédia</b> · kování <b>CC Wood</b> ·
                bezpečnostní dveře <b>Alexandr Novotný</b>
              </p>
            </div>

            <a className="tb-btn tb-btn--light" href="mailto:truhlarstvi.brezina@volny.cz">
              Napsat o nezávaznou nabídku
            </a>
          </div>

          <figure className="tb-dilna-figure">
            <img
              src="/section-2.webp"
              alt="Práce v truhlářské dílně Březina v Praze"
              className="tb-figure-img"
            />
            <figcaption>Praha 10, Nad vinným potokem 248/21 — naše dílna.</figcaption>
          </figure>
        </div>
      </section>
    </main>
  );
}
