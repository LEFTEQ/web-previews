import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "GriffTec — drátěný program a kovovýroba, Ostrava",
  description:
    "GriffTec, s.r.o. z Ostravy vyrábí POP stojany, drátěné koše a atypickou kovovýrobu z drátu, plechu a jeklů. Práškové lakování, pozinkování, chromování a 3D dokumentace na míru.",
  openGraph: {
    title: "GriffTec — drátěný program a kovovýroba, Ostrava",
    description:
      "POP stojany, drátěné koše a atypická kovovýroba na míru. Prášková barva v odstínu, který si vyberete. Ostrava.",
    type: "website",
    locale: "cs_CZ",
    images: [{ url: "/hero.webp" }],
  },
};

const vyroba = [
  {
    krok: "drát",
    nazev: "Drátěný program",
    text: "Naše specializace. Koše, police, háčky a podlahové i pultové stojany. Ohýbáme a svařujeme drát tak, aby zboží drželo tvar a padlo do oka.",
  },
  {
    krok: "plech",
    nazev: "Výroba z plechu",
    text: "Police, kryty, dekorativní i technické díly. Řežeme, ohýbáme a spojujeme přesně podle výkresu.",
  },
  {
    krok: "jekl",
    nazev: "Jekly a trubky",
    text: "Nosné konstrukce stojanů, vozíky, kontejnery. Pevná kostra, na kterou se dá spolehnout.",
  },
  {
    krok: "lak",
    nazev: "Práškové lakování",
    text: "Finální barva v odstínu, který určíte. K tomu pozinkování a chromování — povrch, který vydrží roky provozu.",
  },
];

const sluzby = [
  "Poradenství při vývoji a zpracování vašeho zadání",
  "Optimalizace produktu s ohledem na cenu a technologie",
  "Technická dokumentace včetně 3D modelů",
  "Vývoj a výroba vzorků na specializovaném pracovišti",
  "Výroba na moderních CNC strojích v řízeném procesu",
  "Povrchová úprava a expedice tam, kam potřebujete",
];

export default function Page() {
  return (
    <main className="gt">
      <header className="gt-nav">
        <a className="gt-wordmark" href="#" aria-label="GriffTec, úvod">
          <span className="gt-wordmark-grip">Griff</span>
          <span className="gt-wordmark-tec">Tec</span>
        </a>
        <nav className="gt-nav-links" aria-label="Hlavní">
          <a href="#vyroba">Výroba</a>
          <a href="#sluzby">Služby</a>
          <a href="#onas">O nás</a>
        </nav>
      </header>

      <section className="gt-hero" aria-labelledby="gt-hero-title">
        <div className="gt-hero-media">
          <img
            src="/hero.webp"
            alt="Detail ohýbaného a svařovaného drátěného stojanu z výroby GriffTec"
            className="gt-hero-img"
          />
        </div>
        <div className="gt-hero-body">
          <p className="gt-eyebrow">Kovovýroba a prášková lakovna · Ostrava</p>
          <h1 id="gt-hero-title" className="gt-hero-title">
            Z drátu ohneme
            <br />
            <em>přesně to</em>, co potřebuje
            <br />
            váš obchod.
          </h1>
          <p className="gt-hero-lead">
            Podlahové i pultové stojany, koše a atypická kovovýroba na míru.
            Navrhneme, vyrobíme, nalakujeme do vašeho odstínu a přivezeme.
          </p>
          <div className="gt-hero-actions">
            <a className="gt-btn gt-btn-primary" href="tel:+420596000000">
              Zavolat do dílny
            </a>
            <a className="gt-btn gt-btn-ghost" href="#vyroba">
              Co umíme vyrobit
            </a>
          </div>
        </div>
      </section>

      <section id="vyroba" className="gt-section gt-vyroba" aria-labelledby="gt-vyroba-title">
        <div className="gt-section-head">
          <p className="gt-eyebrow">Materiál za materiálem</p>
          <h2 id="gt-vyroba-title">Od drátu k hotové barvě</h2>
          <p className="gt-section-intro">
            Vše pod jednou střechou — ohýbání, svařování i finální povrch.
            Nemusíte řešit tři dodavatele, stačí jedno zadání.
          </p>
        </div>
        <ul className="gt-grid">
          {vyroba.map((v) => (
            <li key={v.nazev} className="gt-card">
              <span className="gt-card-tag">{v.krok}</span>
              <h3 className="gt-card-title">{v.nazev}</h3>
              <p className="gt-card-text">{v.text}</p>
            </li>
          ))}
        </ul>
        <figure className="gt-figure">
          <img
            src="/section-1.webp"
            alt="Drátěné koše a stojany připravené k povrchové úpravě v dílně GriffTec"
            className="gt-figure-img"
          />
          <figcaption>Zakázka POP stojanů před práškovou lakovnou.</figcaption>
        </figure>
      </section>

      <section id="onas" className="gt-section gt-trust" aria-labelledby="gt-trust-title">
        <div className="gt-trust-grid">
          <div className="gt-trust-text">
            <p className="gt-eyebrow" id="sluzby">Proč s námi</p>
            <h2 id="gt-trust-title">Řemeslo, které vydrží provoz</h2>
            <p className="gt-trust-lead">
              Dlouholeté zkušenosti s výrobou vybavení obchodů i technické
              kovovýroby. Umíme i atypické kusy — když vám nikde neseženou to
              pravé, přijďte s náčrtem a my ho postavíme.
            </p>
            <ul className="gt-service-list">
              {sluzby.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>
          <figure className="gt-trust-figure">
            <img
              src="/section-2.webp"
              alt="Nalakovaný kovový výrobek GriffTec s hladkým práškovým povrchem"
              className="gt-trust-img"
            />
            <figcaption>Prášková barva v odstínu podle vašeho přání.</figcaption>
          </figure>
        </div>
      </section>
    </main>
  );
}
