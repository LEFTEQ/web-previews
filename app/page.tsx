import { AiImage } from "./_ui";

type Blade = { i: number };

function blades(n: number): Blade[] {
  return Array.from({ length: n }, (_, i) => ({ i }));
}

function Louvre({
  tone,
  angle,
  state,
}: {
  tone: "amber" | "slate";
  angle: string;
  state: string;
}) {
  return (
    <div className={`louvre louvre--${tone}`} aria-hidden="true">
      <div className="louvre__stack">
        {blades(7).map((b) => (
          <span key={b.i} className="blade" />
        ))}
      </div>
      <span className="louvre__label">
        {angle} <em>·</em> {state}
      </span>
    </div>
  );
}

const products = [
  {
    n: "Pergoly",
    d: "Bioklimatické i textilní pergoly s naklápěcími lamelami — terasa použitelná od jara do podzimu.",
  },
  {
    n: "Venkovní žaluzie",
    d: "Horizontální i vertikální žaluzie s přesnou regulací světla i soukromí, lamela po lamele.",
  },
  {
    n: "Screenové rolety",
    d: "ZIP screeny s výhledem ven a napnutou tkaninou, která drží tvar i ve větru.",
  },
  {
    n: "Markýzy",
    d: "Kazetové, polokazetové i kloubové markýzy vytažené přesně nad váš stůl.",
  },
  {
    n: "Venkovní rolety",
    d: "Hliníkové rolety proti slunci, horku i pohledům ze sousedství.",
  },
  {
    n: "Zimní zahrady",
    d: "Stínění a zastřešení, které z terasy udělá plnohodnotný pokoj navíc.",
  },
];

const steps = [
  {
    k: "01",
    t: "Zaměření zdarma",
    d: "Technik přijede k vám, přesně zaměří otvory a navrhne řešení na míru vašemu domu.",
  },
  {
    k: "02",
    t: "Výroba na míru",
    d: "Profily a tkaniny od prověřených evropských výrobců, nařezané přesně na váš rozměr.",
  },
  {
    k: "03",
    t: "Montáž vlastním týmem",
    d: "Montují naši lidé se zkušenostmi z tisíců realizací po celé ČR — nic nepředáváme dál.",
  },
  {
    k: "04",
    t: "Servis a podpora",
    d: "Seřízení, údržba a rychlá pomoc i po letech, kdykoli je potřeba.",
  },
];

export default function Page() {
  return (
    <main>
      <header className="header">
        <a className="wordmark" href="#" aria-label="Akuflex — stínící technika, domů">
          <span className="wordmark__name">AKUFLEX</span>
          <span className="wordmark__slats" aria-hidden="true">
            <i /><i /><i />
          </span>
        </a>
        <span className="header__loc">Stínící technika · Praha 21</span>
      </header>

      <section className="hero">
        <div className="hero__slats" aria-hidden="true">
          {blades(9).map((b) => (
            <span
              key={b.i}
              className="blade blade--hero"
              style={{ ["--i" as string]: String(b.i) } as React.CSSProperties}
            />
          ))}
        </div>

        <div className="hero__inner">
          <p className="eyebrow eyebrow--light">
            Praha 21 <em>·</em> návrh, zaměření a montáž po celé ČR
          </p>
          <h1 className="hero__title">
            Stín, který si
            <br />
            otočíte přesně
            <br />
            <span className="hero__title-accent">na míru.</span>
          </h1>
          <p className="hero__sub">
            Pergoly, venkovní žaluzie, screeny, markýzy i rolety. Navrhneme,
            zaměříme a namontujeme — vy pak jen naklopíte lamely a řídíte si
            slunce na terase sami.
          </p>
          <div className="hero__cta">
            <a className="btn btn--amber" href="#nabidka">
              Prohlédnout produkty
            </a>
            <a className="btn btn--ghost" href="#servis">
              Jak to probíhá
            </a>
          </div>
        </div>
      </section>

      <Louvre tone="amber" angle="62°" state="otevřeno — světlo prochází" />

      <section className="band band--light" id="nabidka">
        <div className="band__inner">
          <div className="section-head">
            <p className="eyebrow">
              <span className="band-index">01</span> Co pro vás vyrobíme
            </p>
            <h2 className="section-title">
              Stínící technika na míru, od návrhu po montáž
            </h2>
            <p className="section-lead">
              Bioklimatické pergoly, venkovní žaluzie, screeny, markýzy i
              rolety. Vše přesně zaměřené a smontované vlastními techniky — pod
              jednou střechou.
            </p>
          </div>

          <ul className="products">
            {products.map((p, idx) => (
              <li className="card" key={p.n}>
                <span className="card__idx" aria-hidden="true">
                  {String(idx + 1).padStart(2, "0")}
                </span>
                <h3 className="card__title">{p.n}</h3>
                <p className="card__desc">{p.d}</p>
              </li>
            ))}
          </ul>

          <p className="also">
            Řešíme i <strong>garážová vrata</strong> s tichým chodem,{" "}
            <strong>hliníková stání pro auta</strong> a{" "}
            <strong>venkovní stínění celých bytových domů a SVJ</strong>.
          </p>
        </div>
      </section>

      <Louvre tone="slate" angle="18°" state="přivřeno — stín pro klid" />

      <section className="band band--dark" id="servis">
        <div className="band__inner">
          <div className="section-head">
            <p className="eyebrow eyebrow--light">
              <span className="band-index band-index--light">02</span> Proč
              Akuflex
            </p>
            <h2 className="section-title section-title--light">
              Servis od A do Z, jedním týmem
            </h2>
            <p className="section-lead section-lead--light">
              Od první konzultace po pozáruční servis nepředáváme práci nikam
              dál. Za výsledkem stojí naši lidé — a to poznáte hned u prvního
              zaměření.
            </p>
          </div>

          <ol className="steps">
            {steps.map((s) => (
              <li className="step" key={s.k}>
                <span className="step__num" aria-hidden="true">
                  {s.k}
                </span>
                <div className="step__body">
                  <h3 className="step__title">{s.t}</h3>
                  <p className="step__desc">{s.d}</p>
                </div>
              </li>
            ))}
          </ol>

          <p className="trust-row">
            <span>Tisíce realizací</span>
            <span>Evropské profily a tkaniny</span>
            <span>Vlastní montážní týmy</span>
            <span>Sídlo v Praze 21</span>
          </p>
        </div>
      </section>
    </main>
  );
}
