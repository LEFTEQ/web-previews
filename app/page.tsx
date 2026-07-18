import type { ReactNode } from "react";

type Offer = {
  mat: "oak" | "vinyl" | "wood" | "reno" | "door";
  title: string;
  body: string;
  tags: string[];
};

const OFFERS: Offer[] = [
  {
    mat: "oak",
    title: "Plovoucí podlahy",
    body: "Rychlá a čistá pokládka laminátových a plovoucích podlah do bytu i kanceláře. Poradíme s třídou zátěže, podložkou i přechody do dalších místností.",
    tags: ["Do bytu", "Do kanceláře", "Rychlá pokládka"],
  },
  {
    mat: "vinyl",
    title: "Vinyl a přírodní linoleum",
    body: "Teplé, tiché a odolné vinyly i pravé přírodní lino z lisovaného lnu — do koupelny, kuchyně i dětského pokoje, kde běžné dřevo nestačí.",
    tags: ["Vlhké provozy", "Teplé na dotek", "Ekologické lino"],
  },
  {
    mat: "wood",
    title: "Dřevěné podlahy",
    body: "Vícevrstvé i masivní podlahy značek Meister, ESCO a Floor Forever. Masivní parkety, podlahová prkna a dřevěné i dřevoplastové terasy na míru.",
    tags: ["Meister", "ESCO", "Floor Forever"],
  },
  {
    mat: "reno",
    title: "Renovace a opravy parket",
    body: "Obrousíme, vytmelíme a znovu nalakujeme staré parkety. Zašlé podlaze vrátíme barvu i lesk — a díky broušení s odsáváním bez zbytečného prachu.",
    tags: ["Broušení", "Tmelení", "Lakování"],
  },
  {
    mat: "door",
    title: "Interiérové dveře",
    body: "Dveře Solodoor a Prima-dveře v desítkách provedení a odstínů. Vybereme je tak, aby ladily s novou podlahou i s kováním, které už doma máte.",
    tags: ["Solodoor", "Prima-dveře"],
  },
];

type Step = { n: string; title: string; body: string };

const STEPS: Step[] = [
  {
    n: "01",
    title: "Zaměření u vás",
    body: "Přijedeme domů nebo na stavbu, změříme plochy a probereme provoz, podklad i vlhkost. Zaměření a cenová nabídka jsou zdarma.",
  },
  {
    n: "02",
    title: "Výběr materiálu",
    body: "Ukážeme vzorky a řekneme na rovinu, co se kam hodí. Cenu spočítáme dopředu — bez překvapení na konci.",
  },
  {
    n: "03",
    title: "Pokládka",
    body: "Klademe řádek po řádku, s lištami, přechodovými profily a čistým finišem. Po sobě uklidíme.",
  },
  {
    n: "04",
    title: "Předání",
    body: "Projdeme podlahu společně a poradíme, jak o ni pečovat, aby vám doma vydržela dlouhé roky.",
  },
];

function Chevron({ className }: { className?: string }): ReactNode {
  return <span className={className} aria-hidden="true" />;
}

export default function Page(): ReactNode {
  return (
    <div className="page">
      <header className="top">
        <a className="brand" href="#top">
          <span className="brand-mark" aria-hidden="true" />
          <span className="brand-text">
            <span className="brand-name">Pacina</span>
            <span className="brand-sub">podlahářství · Ústí nad Labem</span>
          </span>
        </a>
        <a className="top-call" href="tel:+420777111222">
          Zavolat +420 777 111 222
        </a>
      </header>

      <main id="top">
        <section className="band hero">
          <div className="hero-inner">
            <div className="hero-copy">
              <p className="eyebrow">
                Podlahy · vinyl · lino · renovace · dveře
              </p>
              <h1 className="hero-title">
                Podlaha, kterou u vás klademe
                <span className="hero-accent"> prkno po prkně.</span>
              </h1>
              <p className="hero-lead">
                Vladimír Pacina — podlahář z Ústí nad Labem. Přijedeme
                zaměřit, poradíme s materiálem a položíme podlahu, která
                vydrží. Od plovoučky přes vinyl a přírodní lino až po
                masivní parkety a jejich renovaci.
              </p>
              <div className="hero-cta">
                <a className="btn btn-primary" href="tel:+420777111222">
                  Zavolat +420 777 111 222
                </a>
                <a className="btn btn-ghost" href="#nabidka">
                  Co pokládáme
                </a>
              </div>
            </div>

            <div className="hero-floor" aria-hidden="true">
              <span className="plank-row r-oak" />
              <span className="plank-row r-amber" />
              <span className="plank-row r-olive" />
              <span className="plank-row r-raw" />
              <span className="plank-row r-slate" />
            </div>
          </div>
        </section>

        <Chevron className="divider cb-oak" />

        <section className="band offers" id="nabidka">
          <div className="section-head">
            <p className="batch">Řada 01 — Co pokládáme</p>
            <h2 className="section-title">
              Pět povrchů, jeden poctivý řemeslník
            </h2>
            <p className="section-lead">
              Rekonstruujete byt, stavíte dům nebo chcete jen oživit staré
              parkety? Vyberte materiál — o zbytek se postaráme od zaměření
              až po poslední lištu.
            </p>
          </div>

          <div className="offer-grid">
            {OFFERS.map((o) => (
              <article className="offer" key={o.title}>
                <span
                  className={`swatch mat-${o.mat}`}
                  aria-hidden="true"
                />
                <h3 className="offer-title">{o.title}</h3>
                <p className="offer-body">{o.body}</p>
                <ul className="tags">
                  {o.tags.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <Chevron className="divider cb-olive" />

        <section className="band process">
          <div className="section-head">
            <p className="batch">Řada 02 — Jak to u vás proběhne</p>
            <h2 className="section-title">
              Od prvního zaměření po hotovou podlahu
            </h2>
            <p className="section-lead">
              Malý ústecký tým, žádné poddodavatelské řetězce. Mluvíte pořád
              s tím, kdo vám podlahu opravdu položí.
            </p>
          </div>

          <ol className="steps">
            {STEPS.map((s) => (
              <li className="step" key={s.n}>
                <span className="step-n" aria-hidden="true">
                  {s.n}
                </span>
                <div className="step-text">
                  <h3 className="step-title">{s.title}</h3>
                  <p>{s.body}</p>
                </div>
              </li>
            ))}
          </ol>

          <div className="trust">
            <p className="trust-lead">Na čem si u nás postavíte</p>
            <ul className="trust-list">
              <li>Zaměření a cenová nabídka zdarma</li>
              <li>Podlahy pokládáme přímo v Ústí nad Labem a okolí</li>
              <li>Značky Meister, ESCO, Floor Forever, Solodoor</li>
              <li>Po práci vždy uklidíme a projdeme podlahu s vámi</li>
            </ul>
          </div>
        </section>

        <Chevron className="divider cb-amber" />
      </main>

      <a className="callbar" href="tel:+420777111222">
        <span className="callbar-ic" aria-hidden="true">☎</span>
        Zavolat +420 777 111 222
      </a>
    </div>
  );
}
