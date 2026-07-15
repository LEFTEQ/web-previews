import type { CSSProperties } from "react";

const sortiment = [
  {
    tag: "OKNA",
    title: "Plastová okna",
    text: "Středové těsnění, čisté tvary a izolace až do energetické třídy A. Profil REHAU, kování SIEGENIA.",
    specs: ["Středové těsnění", "Tepelná izolace", "Energetická třída A"],
  },
  {
    tag: "DVEŘE",
    title: "Vchodové dveře",
    text: "Pevnost a stabilita pro novostavby i nízkoenergetické domy. Hladké plochy bez kompromisů.",
    specs: ["Vysoká pevnost", "Hladké plochy", "Pro nízkoenergetické stavby"],
  },
  {
    tag: "HS PORTÁL",
    title: "Posuvná křídla",
    text: "Velké prosklené plochy pustí dovnitř víc světla a zvětší prostor. Zdvižně-posuvný systém, který jde lehce.",
    specs: ["Víc světla", "Zvětšení prostoru", "Lehký chod"],
  },
  {
    tag: "ZAHRADA",
    title: "Zimní zahrady",
    text: "Prosvětlený prostor pro celý rok. Otvory a závity připravené z výroby znamenají rychlou montáž.",
    specs: ["Rychlá montáž", "Připraveno z výroby", "Celoroční komfort"],
  },
];

const partneri = [
  { name: "REHAU", desc: "Autorizovaný Rehau partner (ARP) — profily oken a dveří." },
  { name: "SIEGENIA AUBI", desc: "Německé kování pro bezpečnost a lehký chod." },
  { name: "AGC fenestra", desc: "Izolační skleněné výplně." },
  { name: "ČSN EN ISO 9001", desc: "Certifikát jakosti — doložená kvalita výroby." },
];

export default function Page() {
  return (
    <main>
      <header className="site-header">
        <div className="wrap header-inner">
          <a className="wm" href="#top" aria-label="Markop — okna, úvod">
            <span className="wm-name">MARKOP</span>
            <span className="wm-sq" aria-hidden="true" />
            <span className="wm-sub">OKNA</span>
          </a>
          <div className="header-meta">
            <span className="header-place">Chodovská 256 · Nová Role</span>
            <a className="btn btn-primary btn-sm" href="#sortiment">
              Prohlédnout okna
            </a>
          </div>
        </div>
      </header>

      <section className="hero" id="top">
        <div className="wrap hero-grid">
          <div className="hero-copy">
            <p className="eyebrow reveal" style={delay(0)}>
              REHAU partner — Nová Role
            </p>
            <h1 className="hero-title">
              <span className="reveal" style={delay(1)}>Teplo uvnitř.</span>{" "}
              <span className="reveal line-glass" style={delay(2)}>Hluk venku.</span>
            </h1>
            <p className="hero-lead reveal" style={delay(3)}>
              Plastová okna, dveře a HS portály na míru. Profily REHAU, německé
              kování SIEGENIA a izolační skla AGC — vyrobíme a namontujeme z Nové
              Role po celém Karlovarsku.
            </p>
            <div className="hero-actions reveal" style={delay(4)}>
              <a className="btn btn-primary" href="#sortiment">
                Prohlédnout sortiment
              </a>
              <a className="btn btn-ghost" href="#duvera">
                Proč právě Markop
              </a>
            </div>
          </div>

          <figure className="hero-window">
            <span className="hw-glow" aria-hidden="true" />
            <img
              className="hw-img"
              src="/hero.webp"
              alt="Prosklená plastová okna Markop s pohledem do prosvětleného interiéru"
            />
            <span className="mullion-v" aria-hidden="true" />
            <span className="mullion-h" aria-hidden="true" />
            <figcaption className="hw-cap">Třída A · středové těsnění</figcaption>
          </figure>
        </div>
      </section>

      <section className="sec sec-graphite" id="sortiment">
        <div className="wrap">
          <div className="sec-head">
            <p className="eyebrow eyebrow-light">Sortiment</p>
            <h2 className="sec-title sec-title-light">Co vám vyrobíme na míru</h2>
            <p className="sec-lead sec-lead-light">
              Od jednoho okna po celý dům. Vždy s izolačním sklem a kováním, které
              po letech nezlobí.
            </p>
          </div>

          <figure className="banner">
            <img
              src="/section-1.webp"
              alt="Detail plastových oken Markop s vícekomorovým profilem REHAU"
            />
            <figcaption className="banner-cap">
              Vícekomorový profil REHAU — pevný rám, tichý interiér.
            </figcaption>
          </figure>

          <div className="panes">
            {sortiment.map((p) => (
              <article className="pane" key={p.tag}>
                <span className="pane-tag">{p.tag}</span>
                <h3 className="pane-title">{p.title}</h3>
                <p className="pane-text">{p.text}</p>
                <ul className="spec-list">
                  {p.specs.map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="sec sec-trust" id="duvera">
        <div className="wrap trust-grid">
          <figure className="trust-media">
            <img
              src="/section-2.webp"
              alt="Montáž plastových oken Markop v novostavbě"
            />
          </figure>

          <div className="trust-body">
            <p className="eyebrow">Proč Markop</p>
            <h2 className="sec-title">
              Uvnitř každého okna jsou německé značky
            </h2>
            <p className="sec-lead">
              Nesázíme na neznámé díly. Rám, kování i sklo pochází od výrobců, kteří
              za svou kvalitou stojí — a my na všechno držíme certifikát jakosti.
            </p>

            <dl className="sheet">
              {partneri.map((k) => (
                <div className="sheet-row" key={k.name}>
                  <dt className="sheet-name">{k.name}</dt>
                  <dd className="sheet-desc">{k.desc}</dd>
                </div>
              ))}
            </dl>

            <p className="locality">
              Vyrábíme a montujeme z Nové Role — Chodovská 256. Přijedeme zaměřit
              po celém Karlovarsku.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

function delay(i: number): CSSProperties {
  return { animationDelay: `${0.15 + i * 0.09}s` };
}
