import type { CSSProperties } from "react";

export const metadata = {
  title: "HSF System — fasády a opláštění staveb | Ostrava",
  description:
    "HSF System z Ostravy navrhuje a montuje provětrávané i zateplené fasády a opláštění průmyslových hal, škol i bytových domů. Vlastní montážní tým, doložené realizace, spolehlivé termíny.",
};

const layers = [
  {
    no: "01",
    name: "Nosný rošt",
    desc: "Kotvení do stěny, hliníkové nebo pozinkované konzoly, přerušený tepelný most.",
  },
  {
    no: "02",
    name: "Tepelná izolace",
    desc: "Minerální vlna nebo desky podle projektu, po celé ploše bez spár.",
  },
  {
    no: "03",
    name: "Vzduchová mezera",
    desc: "Provětrávaná dutina, která odvádí vlhkost a drží stěnu suchou.",
  },
  {
    no: "04",
    name: "Obklad",
    desc: "Vláknocement, tahokov, kompozit nebo trapéz — pohledová vrstva fasády.",
  },
];

const services = [
  {
    title: "Provětrávané fasády",
    body: "Kompletní systém od roštu po obklad. Vláknocementové desky, kompozitní kazety, keramika i tahokov. Řešíme detaily kolem oken, atik a soklů tak, aby fasáda držela desítky let.",
    tag: "od návrhu po montáž",
  },
  {
    title: "Zateplení a ETICS",
    body: "Kontaktní zateplovací systémy pro bytové domy i veřejné budovy. Certifikované skladby, správně provedené detaily, kvalitní finální omítka. Splníme požadavky dotačních programů.",
    tag: "bytové i veřejné budovy",
  },
  {
    title: "Opláštění hal a průmyslu",
    body: "Sendvičové panely, trapézové plechy a fasádní kazety pro výrobní a skladové haly. Rychlá montáž z vlastních zdrojů, koordinace s ostatními profesemi na stavbě.",
    tag: "haly a výroba",
  },
];

const refs = [
  { name: "Sklad a výrobní hala APEX", detail: "opláštění panely, Moravskoslezský kraj" },
  { name: "Rekonstrukce a přístavba domova pro seniory", detail: "provětrávaná fasáda, oceněný projekt" },
  { name: "Základní škola Brušperk", detail: "zateplení a nová fasáda" },
  { name: "VaV centrum Ingeteam", detail: "opláštění a fasádní kazety" },
];

export default function Page() {
  return (
    <main className="hsf">
      <header className="hsf-nav">
        <a className="hsf-wordmark" href="#top" aria-label="HSF System, domů">
          <span className="hsf-mark">HSF</span>
          <span className="hsf-mark-sub">System · fasády Ostrava</span>
        </a>
        <nav className="hsf-links" aria-label="Hlavní">
          <a href="#skladba">Skladba</a>
          <a href="#sluzby">Služby</a>
          <a href="#reference">Reference</a>
          <a className="hsf-call" href="tel:+420595000000">Zavolat</a>
        </nav>
      </header>

      <section className="hsf-hero" id="top">
        <div className="hsf-hero-media">
          <img
            src="/hero.webp"
            alt="Detail provětrávané fasády z fasádních kazet na budově v Ostravě"
            className="hsf-hero-img"
          />
          <span className="hsf-hero-scan" aria-hidden="true" />
        </div>
        <div className="hsf-hero-text">
          <p className="hsf-eyebrow">Fasády &amp; opláštění · Ostrava</p>
          <h1 className="hsf-h1">
            Fasáda drží stavbu<br />
            <em>suchou, teplou<br />a k nepoznání.</em>
          </h1>
          <p className="hsf-lede">
            Montujeme provětrávané fasády, zateplení a opláštění hal z vlastních
            zdrojů. Vrstvu po vrstvě, s detaily, které vydrží ostravské počasí.
          </p>
          <div className="hsf-hero-cta">
            <a className="hsf-btn" href="#sluzby">
              Prohlédnout, co děláme
            </a>
            <a className="hsf-btn hsf-btn-ghost" href="mailto:info@hsfsystem.cz">
              Napsat e‑mail
            </a>
          </div>
        </div>
      </section>

      <section className="hsf-section hsf-skladba" id="skladba">
        <div className="hsf-section-head">
          <p className="hsf-eyebrow">Řez fasádou</p>
          <h2 className="hsf-h2">Čtyři vrstvy, které nevidíte — a jedna, kterou ano</h2>
          <p className="hsf-section-note">
            Provětrávaná fasáda není obklad nalepený na zeď. Je to skladba, kde
            každá vrstva má svůj úkol. Zkazit se dá kterýkoli detail — proto je
            montujeme sami.
          </p>
        </div>
        <ol className="hsf-layers">
          {layers.map((l, i) => (
            <li
              className="hsf-layer"
              key={l.no}
              style={{ ["--i" as keyof CSSProperties]: i } as CSSProperties}
            >
              <span className="hsf-layer-no">{l.no}</span>
              <div className="hsf-layer-body">
                <h3 className="hsf-layer-name">{l.name}</h3>
                <p>{l.desc}</p>
              </div>
            </li>
          ))}
        </ol>
        <figure className="hsf-figure">
          <img
            src="/section-1.webp"
            alt="Montáž nosného roštu a fasádních desek na stavbě"
            className="hsf-figure-img"
          />
          <figcaption>
            Vlastní montážní tým na stavbě — od kotvení konzol po finální obklad.
          </figcaption>
        </figure>
      </section>

      <section className="hsf-section hsf-sluzby" id="sluzby">
        <div className="hsf-section-head">
          <p className="hsf-eyebrow">Co pro vás uděláme</p>
          <h2 className="hsf-h2">Tři obory, jeden tým</h2>
        </div>
        <div className="hsf-cards">
          {services.map((s) => (
            <article className="hsf-card" key={s.title}>
              <p className="hsf-card-tag">{s.tag}</p>
              <h3 className="hsf-card-title">{s.title}</h3>
              <p className="hsf-card-body">{s.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="hsf-section hsf-reference" id="reference">
        <div className="hsf-ref-grid">
          <div className="hsf-ref-media">
            <img
              src="/section-2.webp"
              alt="Dokončená fasáda veřejné budovy realizovaná firmou HSF System"
              className="hsf-ref-img"
            />
          </div>
          <div className="hsf-ref-text">
            <p className="hsf-eyebrow">Reference · Ostrava a Morava</p>
            <h2 className="hsf-h2">
              Doma na Ostravsku, s realizacemi po celé republice
            </h2>
            <p className="hsf-section-note">
              Školy, domovy pro seniory, výrobní haly i výzkumná centra. Několik
              našich staveb získalo odborná ocenění — a všechny spojuje jedno:
              termín a kvalita, na které se dá spolehnout.
            </p>
            <ul className="hsf-ref-list">
              {refs.map((r) => (
                <li key={r.name}>
                  <span className="hsf-ref-name">{r.name}</span>
                  <span className="hsf-ref-detail">{r.detail}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
