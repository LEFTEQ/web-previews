import type { CSSProperties } from "react";

export const metadata = {
  title: "TECHVET — klimatizace a tepelná čerpadla Liberec",
  description:
    "TECHVET s.r.o. — montáž, servis a revize klimatizací a tepelných čerpadel v Liberci a okolí. Chladíme kanceláře, byty i provozy. Rychlý výjezd, čistá práce, doklad o revizi.",
  openGraph: {
    title: "TECHVET — klimatizace Liberec",
    description:
      "Montáž a servis klimatizací a tepelných čerpadel v Liberci. Studený vzduch, když ho potřebujete.",
    images: ["/hero.webp"],
    locale: "cs_CZ",
    type: "website",
  },
};

const services = [
  {
    temp: "−7",
    title: "Montáž klimatizace",
    body: "Split i multisplit do bytu, kanceláře nebo provozovny. Vybereme výkon podle m³, ne podle katalogu, a odvedeme trasu tak, aby ji nebylo vidět.",
    detail: "Daikin · Mitsubishi · LG",
  },
  {
    temp: "+21",
    title: "Tepelná čerpadla",
    body: "Vzduch–voda i vzduch–vzduch. Navrhneme, nadimenzujeme a napojíme na stávající topení. Topíte levněji od první zimy v Jizerkách.",
    detail: "vzduch–voda · vzduch–vzduch",
  },
  {
    temp: "±0",
    title: "Servis a revize",
    body: "Pravidelné čištění, kontrola těsnosti chladiva a povinná revize s dokladem. Objednáte se dnes, jezdíme po celém Liberecku.",
    detail: "revizní zpráva · výjezd do 48 h",
  },
];

const proof = [
  { k: "14 let", v: "chladíme domácnosti i firmy na Liberecku" },
  { k: "900+", v: "namontovaných jednotek od Ještědu po Frýdlant" },
  { k: "48 h", v: "obvyklá doba výjezdu na servis" },
];

export default function Page() {
  return (
    <main className="tv">
      <header className="tv-top">
        <a className="tv-mark" href="#" aria-label="TECHVET — domů">
          <span className="tv-mark__tech">TECH</span>
          <span className="tv-mark__vet">VET</span>
          <span className="tv-mark__unit">°C</span>
        </a>
        <span className="tv-loc">Liberec · klimatizace &amp; tepelná čerpadla</span>
      </header>

      <section className="tv-hero" aria-labelledby="hero-h">
        <div className="tv-hero__media">
          <img
            src="/hero.webp"
            alt="Nástěnná klimatizační jednotka nad oknem liberecké kanceláře"
            width={1600}
            height={1100}
          />
        </div>

        <div className="tv-hero__panel">
          <div className="tv-gauge" aria-hidden="true">
            <span className="tv-gauge__num">24</span>
            <span className="tv-gauge__deg">°C</span>
          </div>
          <p className="tv-eyebrow">Nastavená teplota</p>
          <h1 id="hero-h">
            Venku 34, uvnitř přesně tolik,
            <br />
            kolik si řeknete.
          </h1>
          <p className="tv-lead">
            TECHVET montuje a servisuje klimatizace a tepelná čerpadla v Liberci
            a okolí. Přijedeme se podívat, spočítáme výkon na váš prostor a
            necháme po sobě uklizeno.
          </p>
          <div className="tv-cta-row">
            <a className="tv-btn tv-btn--primary" href="tel:+420480000000">
              Zavolat a domluvit termín
            </a>
            <a className="tv-btn tv-btn--ghost" href="#sluzby">
              Co montujeme
            </a>
          </div>
        </div>
      </section>

      <section id="sluzby" className="tv-services" aria-labelledby="sluzby-h">
        <div className="tv-sec-head">
          <p className="tv-eyebrow">Co pro vás uděláme</p>
          <h2 id="sluzby-h">Od návrhu po revizi. Všechno u jedné party.</h2>
        </div>

        <ul className="tv-cards">
          {services.map((s) => (
            <li key={s.title} className="tv-card">
              <span
                className="tv-card__temp"
                style={{ "--sign": s.temp.startsWith("−") ? "1" : "0" } as CSSProperties}
                aria-hidden="true"
              >
                {s.temp}
                <em>°C</em>
              </span>
              <h3>{s.title}</h3>
              <p>{s.body}</p>
              <span className="tv-card__detail">{s.detail}</span>
            </li>
          ))}
        </ul>

        <figure className="tv-figure">
          <img
            src="/section-1.webp"
            alt="Technik TECHVET připojuje venkovní jednotku klimatizace na fasádě"
            width={1600}
            height={1000}
          />
          <figcaption>
            Venkovní jednotku umístíme tak, aby netáhla do oken sousedům a přežila
            liberecké zimy.
          </figcaption>
        </figure>
      </section>

      <section className="tv-trust" aria-labelledby="trust-h">
        <div className="tv-trust__text">
          <p className="tv-eyebrow">Proč zrovna my</p>
          <h2 id="trust-h">
            Malá liberecká firma, která si zvedá telefon.
          </h2>
          <p className="tv-trust__body">
            TECHVET nejsou callcentrum a subdodavatelé. Přijede k vám technik,
            který jednotku i namontoval, a ví, kde v ní hledat. Poradíme, jestli
            se vyplatí klimatizace, tepelné čerpadlo, nebo obojí — a řekneme to
            rovnou, i když z toho nemáme velkou zakázku.
          </p>

          <dl className="tv-stats">
            {proof.map((p) => (
              <div key={p.k} className="tv-stat">
                <dt>{p.k}</dt>
                <dd>{p.v}</dd>
              </div>
            ))}
          </dl>
        </div>

        <figure className="tv-trust__media">
          <img
            src="/section-2.webp"
            alt="Detail ovladače klimatizace nastaveného na 24 stupňů v interiéru"
            width={1200}
            height={1400}
          />
        </figure>
      </section>
    </main>
  );
}
