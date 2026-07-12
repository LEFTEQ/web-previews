import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Royal Prostějov — obleky a móda | prodejna Ostrava, OC Futurum",
  description:
    "Kompletní pánská i dámská móda v Ostravě. Oblek, košile, boty i doplňky sladíme na jednom místě — do tanečních, k maturitě, na ples i do práce. OC Futurum, otevřeno každý den 9–21.",
  openGraph: {
    title: "Royal Prostějov — obleky a móda, prodejna Ostrava",
    description:
      "Oblek, košile, boty i doplňky sladíme na jednom místě. OC Futurum, Novinářská 6c — otevřeno každý den 9–21.",
    type: "website",
    locale: "cs_CZ",
    images: [{ url: "/hero.webp", width: 1200, height: 630, alt: "Pánský oblek Royal Prostějov" }],
  },
};

const mira = [
  {
    krok: "01",
    stitek: "Ramena",
    text: "Sedí přesně na kloub, ne přes něj. Odsud se odvíjí celý střih — první, co si na obleku všimne každý.",
  },
  {
    krok: "02",
    stitek: "Délka rukávu",
    text: "Manžeta košile vykoukne o centimetr. Rukáv obleku upravíme na míru, aby padl přesně vám.",
  },
  {
    krok: "03",
    stitek: "Break kalhot",
    text: "Nohavice se lomí nad botou tak akorát — ani kaluž látky, ani vyhrnutá ponožka. Doladíme na místě.",
  },
];

const sortiment = [
  {
    nazev: "Obleky pro každou příležitost",
    text: "Od klasických střihů po slim-fit, široký výběr materiálů. Na přání upravíme tak, aby oblek bezchybně padl — do tanečních, k maturitě, na svatbu i do práce.",
  },
  {
    nazev: "Saka a košile",
    text: "Sako samostatně nebo ke kalhotám, košile ke každé příležitosti. Barevnost vždy odráží aktuální módní vlnu — a hodí se osvěžit doplňky.",
  },
  {
    nazev: "Doplněk tvoří detail celku",
    text: "Obuv, kravaty, manžetové knoflíčky, spony, šály, ponožky, deštníky, šle i kapesníčky. Zkrátka vše, co dělá outfit hotovým.",
  },
  {
    nazev: "Svetry nejen na zimu",
    text: "Tenké pod sako i silnější jako svrchní díl. Z nejlepších materiálů a v různých hustotách — příjemný, hřejivý doplněk k čemukoliv.",
  },
  {
    nazev: "Šaty pro dámy a slečny",
    text: "Různé barvy, střihy i styly — pro běžné nošení i na slavnostní příležitosti. Vybere si každá, i ta nejnáročnější.",
  },
  {
    nazev: "Bundy pro každé roční období",
    text: "Dámské i pánské, zimní i přechodové. Propracované detaily a moderní materiály pro komfort i eleganci do každého počasí.",
  },
];

export default function Page() {
  return (
    <main className="rp">
      <header className="rp-nav" aria-label="Hlavní navigace">
        <a className="rp-brand" href="#uvod" aria-label="Royal Prostějov, úvod">
          <span className="rp-brand-crown" aria-hidden="true">♦</span>
          <span className="rp-brand-word">Royal</span>
          <span className="rp-brand-sub">Prostějov · Ostrava</span>
        </a>
        <nav className="rp-links">
          <a href="#sortiment">Sortiment</a>
          <a href="#komplet">Komplet</a>
          <a href="#prodejna">Prodejna</a>
        </nav>
        <a className="rp-nav-cta" href="tel:+420000000000">Zavolat na prodejnu</a>
      </header>

      <section className="rp-hero" id="uvod">
        <div className="rp-hero-media">
          <img
            src="/hero.webp"
            alt="Pánský oblek z nabídky Royal Prostějov"
            width={1200}
            height={1500}
            className="rp-hero-img"
          />
        </div>
        <div className="rp-hero-text">
          <p className="rp-eyebrow">Prodejna Ostrava — OC Futurum</p>
          <h1 className="rp-hero-title">
            Oblek, který<br />
            <em>padne</em> na první<br />
            vyzkoušení.
          </h1>
          <p className="rp-hero-lead">
            Kompletní pánskou i dámskou módu vybereme a sladíme na jednom místě — do tanečních, k maturitě,
            na ples i do práce. Střih doladíme přesně na vás.
          </p>
          <div className="rp-hero-actions">
            <a className="rp-btn" href="tel:+420000000000">Zavolat na prodejnu</a>
            <a className="rp-btn rp-btn-ghost" href="#prodejna">Kde nás najdete</a>
          </div>
          <dl className="rp-hero-meta">
            <div>
              <dt>Otevřeno</dt>
              <dd>Po–Ne&nbsp;9–21</dd>
            </div>
            <div>
              <dt>Prodejny</dt>
              <dd>Ostrava · Šumperk · Třebíč · Znojmo</dd>
            </div>
            <div>
              <dt>Úpravy</dt>
              <dd>na míru přímo na prodejně</dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="rp-sort" id="sortiment">
        <div className="rp-sect-head">
          <p className="rp-eyebrow">Co u nás najdete</p>
          <h2 className="rp-h2">Pánská i dámská móda světové úrovně</h2>
          <p className="rp-sect-lead">
            Ryze česká firma čerpající ze zkušeností kvalitního oděvního průmyslu. Kabáty, obleky, saka,
            košile, svetry, boty i doplňky — a bohatý dámský sortiment. Kvalitní a cenově dostupné.
          </p>
        </div>
        <div className="rp-sort-grid">
          <figure className="rp-sort-figure">
            <img
              src="/section-1.webp"
              alt="Detail obleku a doplňků z nabídky Royal Prostějov"
              width={800}
              height={1000}
              className="rp-sort-img"
            />
          </figure>
          <ul className="rp-sort-list">
            {sortiment.map((s) => (
              <li className="rp-sort-item" key={s.nazev}>
                <h3 className="rp-sort-name">{s.nazev}</h3>
                <p className="rp-sort-text">{s.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="rp-komplet" id="komplet">
        <div className="rp-komplet-inner">
          <div className="rp-komplet-text">
            <p className="rp-eyebrow rp-eyebrow-light">Royal Komplet — k maturitě a do tanečních</p>
            <h2 className="rp-h2 rp-h2-light">Celý outfit sladíme za vás</h2>
            <p className="rp-komplet-lead">
              Oblek, košili, boty i doplňky vybereme tak, aby k sobě seděly a vy jste udělali dobrý dojem —
              a nemuseli nic složitě řešit. Přijďte, změříme a doladíme podle tří věcí, na kterých padnutí
              stojí:
            </p>
            <ol className="rp-steps">
              {mira.map((m) => (
                <li className="rp-step" key={m.krok}>
                  <span className="rp-step-num">{m.krok}</span>
                  <div>
                    <span className="rp-step-label">{m.stitek}</span>
                    <p className="rp-step-text">{m.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
          <figure className="rp-komplet-figure">
            <img
              src="/section-2.webp"
              alt="Kompletní sladěný outfit Royal Komplet"
              width={800}
              height={1000}
              className="rp-komplet-img"
            />
          </figure>
        </div>

        <div className="rp-prodejna" id="prodejna">
          <h3 className="rp-prodejna-title">Přijďte si vybrat</h3>
          <div className="rp-store-grid">
            <article className="rp-store rp-store-main">
              <span className="rp-store-tag">Hlavní prodejna</span>
              <h4>Ostrava</h4>
              <p className="rp-store-addr">OC Futurum, Novinářská 6c</p>
              <p className="rp-store-hours">Po–Ne 9.00–21.00</p>
            </article>
            <article className="rp-store">
              <h4>Šumperk</h4>
              <p className="rp-store-addr">Kozinova 21</p>
              <p className="rp-store-hours">Po–Pá 9–17 · So 9–12</p>
            </article>
            <article className="rp-store">
              <h4>Třebíč</h4>
              <p className="rp-store-addr">Bedřicha Václavka 195</p>
              <p className="rp-store-hours">Po–Pá 9–17 · So 9–12</p>
            </article>
            <article className="rp-store">
              <h4>Znojmo</h4>
              <p className="rp-store-addr">Dolní Česká 351/11</p>
              <p className="rp-store-hours">Po–Pá 9–17 · So 9–12</p>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}
