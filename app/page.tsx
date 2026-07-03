import type { CSSProperties } from "react";

export default function Page() {
  return (
    <main className="pr">
      <header className="pr-nav">
        <a className="pr-mark" href="#top" aria-label="PRONY — ploty a oplocení">
          <span className="pr-mark-word">PRONY</span>
          <span className="pr-mark-rail" aria-hidden="true">
            <i /><i /><i /><i /><i /><i /><i /><i /><i />
          </span>
        </a>
        <a className="pr-call" href="tel:+420733641043">
          <span className="pr-call-label">Zavolat</span>
          <span className="pr-call-num">733&nbsp;641&nbsp;043</span>
        </a>
      </header>

      <section className="pr-hero" id="top">
        <div className="pr-hero-media">
          <img
            src="/hero.webp"
            alt="Nový plot z tahokovu a poplastovaného pletiva na betonové podezdívce"
            className="pr-hero-img"
          />
          <div className="pr-hero-scrim" aria-hidden="true" />
        </div>
        <div className="pr-hero-body">
          <p className="pr-eyebrow">Ploty a oplocení · Královské Poříčí u Sokolova</p>
          <h1 className="pr-hero-title">
            Postavíme vám plot,
            <br />
            který drží linii
            <span className="pr-hero-underline" aria-hidden="true" />
          </h1>
          <p className="pr-hero-lead">
            Pletivo, poplastované panely, tahokov, brány i branky s pohonem.
            Zaměříme pozemek, spočítáme materiál na sloupek přesně a plot
            postavíme rovně od prvního kůlu k poslednímu.
          </p>
          <div className="pr-hero-actions">
            <a className="pr-btn pr-btn-primary" href="tel:+420733641043">
              Zavolat 733&nbsp;641&nbsp;043
            </a>
            <a className="pr-btn pr-btn-ghost" href="#poptavka">
              Cenová nabídka zdarma
            </a>
          </div>
        </div>
      </section>

      <section className="pr-sec pr-services" id="nabidka" aria-labelledby="nabidka-h">
        <div className="pr-sec-head">
          <p className="pr-eyebrow">Co postavíme</p>
          <h2 className="pr-sec-title" id="nabidka-h">
            Od pletiva po bránu na dálkové ovládání
          </h2>
          <p className="pr-sec-intro">
            Řešíme celý pozemek najednou — plot, podezdívku, vjezd i vstupní
            branku tak, aby k sobě ladily a otevíraly se, jak potřebujete.
          </p>
        </div>

        <ol className="pr-cards">
          {services.map((s, i) => (
            <li className="pr-card" key={s.title}>
              <span className="pr-card-no" aria-hidden="true">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="pr-card-title">{s.title}</h3>
              <p className="pr-card-text">{s.text}</p>
              <ul className="pr-card-list">
                {s.items.map((it) => (
                  <li key={it}>{it}</li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </section>

      <section className="pr-sec pr-trust" id="poptavka" aria-labelledby="trust-h">
        <div className="pr-trust-grid">
          <div className="pr-trust-media">
            <img
              src="/section-2.webp"
              alt="Detail sloupku a napínacího systému oplocení od firmy Prony"
              className="pr-trust-img"
            />
          </div>
          <div className="pr-trust-body">
            <p className="pr-eyebrow">Proč Prony</p>
            <h2 className="pr-sec-title" id="trust-h">
              Řemeslo z Poříčí, ne katalog z e-shopu
            </h2>
            <p className="pr-sec-intro">
              Bereme i netypická provedení a atypické terény — svahy, oblouky,
              nerovné hranice pozemku. Vycházíme z dlouholetých zkušeností a
              osvědčených postupů; hlídáme si materiál i čisté provedení.
            </p>

            <dl className="pr-facts">
              {facts.map((f) => (
                <div className="pr-fact" key={f.label}>
                  <dt className="pr-fact-label">{f.label}</dt>
                  <dd className="pr-fact-value">{f.value}</dd>
                </div>
              ))}
            </dl>

            <div className="pr-contact">
              <a className="pr-btn pr-btn-primary" href="tel:+420733641043">
                Zavolat 733&nbsp;641&nbsp;043
              </a>
              <a
                className="pr-btn pr-btn-ghost"
                href="mailto:info@prony.cz?subject=Poptávka%20oplocení"
              >
                Napsat e-mail
              </a>
            </div>
            <p className="pr-addr">
              Dlouhá 100, 356 01 Královské Poříčí — Sokolov
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

type Service = { title: string; text: string; items: string[] };

const services: Service[] = [
  {
    title: "Pletivo a panely",
    text: "Klasické poplastované pletivo i moderní 3D svařované panely na betonových sloupcích.",
    items: ["Poplastované pletivo", "Svařované 3D panely", "Betonová podezdívka"],
  },
  {
    title: "Tahokov a výplně",
    text: "Neprůhledné a designové výplně z tahokovu nebo lamel tam, kde chcete soukromí.",
    items: ["Tahokovové výplně", "Hliníkové lamely", "Zámečnická výroba"],
  },
  {
    title: "Brány a branky",
    text: "Křídlové i samonosné posuvné brány, branky s elektrickým pohonem a videozvonkem.",
    items: ["Posuvná brána", "Křídlová brána", "Pohon a dálkové ovládání"],
  },
];

const facts: { label: string; value: string }[] = [
  { label: "Zaměření a cenová nabídka", value: "zdarma" },
  { label: "Sídlo a výroba", value: "Královské Poříčí" },
  { label: "Atypické terény a tvary", value: "děláme" },
];

void ({} as CSSProperties);
