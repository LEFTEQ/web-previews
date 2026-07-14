import type { ReactNode } from "react";

type BuildType = {
  tag: string;
  title: string;
  body: string;
};

type Value = {
  code: string;
  title: string;
  body: string;
};

const buildTypes: BuildType[] = [
  {
    tag: "HALY & RETAIL",
    title: "Retail parky a průmyslové haly",
    body: "Skelet, opláštění, podlahy a zpevněné plochy. Výrobní haly i retailové parky na klíč — včetně technologií, přípojek a venkovních úprav.",
  },
  {
    tag: "OBČANSKÉ STAVBY",
    title: "Občanská vybavenost",
    body: "Školy, sportoviště a administrativa. Stavby, které slouží městům a obcím a musí vydržet každodenní provoz i po letech.",
  },
  {
    tag: "BYDLENÍ",
    title: "Bytová výstavba a rekonstrukce",
    body: "Nové bytové domy i citlivé rekonstrukce. Od hrubé stavby přes řemesla až po předání s kolaudací.",
  },
];

const values: Value[] = [
  {
    code: "C.1",
    title: "Profesionalita",
    body: "Každou stavbu vedeme na sto procent a hledáme nejlepší řešení — ne to nejrychlejší.",
  },
  {
    code: "C.2",
    title: "Spolehlivost",
    body: "Zakládáme si na dobré pověsti. Držíme termíny, rozpočet i dané slovo.",
  },
  {
    code: "C.3",
    title: "Odbornost",
    body: "Tým s dlouholetou praxí — od přípravy a rozpočtu až po realizaci na stavbě.",
  },
  {
    code: "C.4",
    title: "Kvalita a udržitelnost",
    body: "Stavíme pro budoucnost a myslíme na životní prostředí i provozní náklady.",
  },
];

function StampCell({ label, value }: { label: string; value: ReactNode }) {
  return (
    <div className="stamp-cell">
      <span className="stamp-label">{label}</span>
      <span className="stamp-value">{value}</span>
    </div>
  );
}

export default function Page() {
  return (
    <main className="page">
      <header className="nav">
        <a className="wordmark" href="#uvod" aria-label="WELKIN stavební — úvod">
          <span className="wordmark-main">WELKIN</span>
          <span className="wordmark-sub">stavební&nbsp;s.r.o.</span>
        </a>
        <div className="nav-meta">
          <span className="nav-place">Praha 8 — Karlín</span>
          <a href="tel:+420230234555">+420 230 234 555</a>
        </div>
      </header>

      <section className="hero" id="uvod">
        <img
          className="hero-img"
          src="/hero.webp"
          alt="Rozestavěná průmyslová hala WELKIN — ocelový skelet proti obloze"
        />
        <div className="hero-veil" aria-hidden="true" />

        <div className="grid-ruler" aria-hidden="true">
          {["A", "B", "C", "D", "E", "F"].map((n) => (
            <span className="tick" key={n}>
              {n}
            </span>
          ))}
        </div>

        <div className="hero-inner">
          <div className="reveal r1">
            <span className="axis-bubble">A</span>
            <p className="eyebrow">Generální dodavatel staveb — Praha &amp; celé Česko</p>
          </div>

          <h1 className="hero-title reveal r2">
            Haly, retail parky a bytové domy stavíme{" "}
            <em>od výkresu po kolaudaci.</em>
          </h1>

          <p className="lead reveal r3">
            Šest let přebíráme odpovědnost za celou stavbu — ne jen za její část.
            Od průmyslových hal přes občanské budovy až po rekonstrukce bytových domů.
          </p>

          <a className="cta reveal r3" href="#stavby">
            Prohlédnout, co stavíme
            <span className="cta-arrow" aria-hidden="true">→</span>
          </a>

          <div className="stamp reveal r4" role="group" aria-label="Údaje o firmě">
            <StampCell label="Dodavatel" value="WELKIN stavební s.r.o." />
            <StampCell label="Lokalita" value="Praha 8 — Karlín" />
            <StampCell label="Na trhu" value="6 let" />
            <StampCell label="Dokončeno" value="50+ staveb" />
            <StampCell label="Roční obrat" value="3,5 mld. Kč" />
            <StampCell label="List" value="01 — Úvod" />
          </div>
        </div>
      </section>

      <section className="build" id="stavby">
        <div className="section-head">
          <span className="axis-bubble dark">B</span>
          <div>
            <p className="eyebrow dark">Osa B — co stavíme</p>
            <h2>Tři obory, jedna parta na stavbě.</h2>
          </div>
        </div>

        <figure className="build-figure">
          <img
            src="/section-1.webp"
            alt="Dokončený retail park od WELKIN — prosklené vstupy a zpevněné plochy"
          />
          <figcaption>Retail park — realizace WELKIN stavební</figcaption>
        </figure>

        <div className="cards">
          {buildTypes.map((t) => (
            <article className="card" key={t.tag}>
              <span className="card-tag">{t.tag}</span>
              <h3>{t.title}</h3>
              <p>{t.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="trust" id="proc">
        <div className="trust-grid">
          <div className="trust-media">
            <span className="axis-bubble">C</span>
            <p className="eyebrow">Osa C — na čem stavíme</p>
            <h2>
              Slovo, které drží — a stavba, která ho unese.
            </h2>
            <figure className="trust-figure">
              <img
                src="/section-2.webp"
                alt="Detail konstrukce a fasády stavby realizované firmou WELKIN"
              />
            </figure>
            <p className="proof">
              Naše haly získaly ocenění <strong>Hala roku 2025</strong>. Sídlíme na
              Rohanském nábřeží v Karlíně, další pobočku máme v Českých Budějovicích.
            </p>
          </div>

          <ul className="values">
            {values.map((v) => (
              <li className="value" key={v.code}>
                <span className="value-code">{v.code}</span>
                <h3>{v.title}</h3>
                <p>{v.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
