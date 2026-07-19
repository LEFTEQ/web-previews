import type { ReactNode } from "react";

const HERO_SLATS = Array.from({ length: 15 });
const RIB_SLATS = Array.from({ length: 56 });

function SlatRib({ label }: { label: string }) {
  return (
    <div className="rib" role="separator" aria-label={label}>
      {RIB_SLATS.map((_, i) => (
        <i key={i} aria-hidden="true" />
      ))}
    </div>
  );
}

type Service = {
  name: string;
  tag: string;
  note: string;
};

const SERVICES: Service[] = [
  {
    name: "Kuchyně na míru",
    tag: "masiv · lakované MDF",
    note: "Srdce domu. Dvířka, kování a pracovní desky navržené přesně na váš prostor a na to, jak vaříte.",
  },
  {
    name: "Vestavěné skříně",
    tag: "lamino · dýha",
    note: "Využijeme každý centimetr — i pod šikminou v podkroví nebo kolem komína.",
  },
  {
    name: "Komody a postele",
    tag: "dubový masiv",
    note: "Solitéry z masivního dřeva. Žádná dvě zadání nejsou stejná, žádné dva kusy taky ne.",
  },
  {
    name: "Lamelové obklady",
    tag: "dubové lamely",
    note: "Naše poznávací znamení. Teplé svislé lamely na stěnu i strop, které místnost úplně promění.",
  },
  {
    name: "Nábytek do kanceláří",
    tag: "dýhované desky",
    note: "Recepce, jednací stoly a úložné sestavy pro firmy v Ostravě i širokém okolí.",
  },
];

function Stat({ figure, label }: { figure: string; label: ReactNode }) {
  return (
    <div className="stat">
      <span className="stat__figure display">{figure}</span>
      <span className="stat__label">{label}</span>
    </div>
  );
}

export default function Page() {
  return (
    <main className="page">
      <header className="band band--coal hero">
        <div className="wrap hero__inner">
          <div className="wordmark">
            <span className="wordmark__mark" aria-hidden="true">
              <i /><i /><i /><i />
            </span>
            <span className="wordmark__text">
              Interiéry <strong>Rossi</strong>
            </span>
          </div>

          <p className="hero__eyebrow">Zakázkové truhlářství · Ostrava</p>

          <h1 className="hero__title display">
            Kuchyně a interiér, <span>každý kus originál.</span>
          </h1>

          <p className="hero__lead">
            Navrhneme a u ponku vyrobíme nábytek přesně na míru — kuchyně,
            vestavěné skříně, komody i lamelové obklady. 17 let řemesla,
            každý kus děláme, jako by měl stát u nás doma.
          </p>

          <div className="hero__actions">
            <a className="btn btn--primary" href="#sluzby">
              Prohlédnout, co vyrábíme
            </a>
            <a className="btn btn--ghost" href="#o-nas">
              Poznat dílnu
            </a>
          </div>

          <dl className="hero__meta">
            <div><dt>Řemeslo</dt><dd>17 let u ponku</dd></div>
            <div><dt>Hotových interiérů</dt><dd>300+</dd></div>
            <div><dt>Dílna</dt><dd>Ostrava, od 2024 pod značkou Rossi</dd></div>
          </dl>
        </div>

        <div className="hero-slats" aria-hidden="true">
          {HERO_SLATS.map((_, i) => (
            <span
              key={i}
              className="hero-slat"
              style={{ animationDelay: `${i * 0.045}s` }}
            />
          ))}
        </div>
      </header>

      <SlatRib label="Dřevěná lamela — přechod mezi sekcemi" />

      <section id="sluzby" className="band band--bone reveal">
        <div className="wrap">
          <div className="sec-head">
            <p className="sec-head__eyebrow">Co u nás objednáte</p>
            <h2 className="sec-head__title display">Od jednoho kusu po celý byt</h2>
            <p className="sec-head__sub">
              Ke každé zakázce sedneme zvlášť. Nejdřív si sedneme nad zaměření
              a materiál, teprve pak se řeže.
            </p>
          </div>

          <div className="grid">
            {SERVICES.map((s) => (
              <article key={s.name} className="cell">
                <span className="cell__tag">{s.tag}</span>
                <h3 className="cell__name display">{s.name}</h3>
                <p className="cell__note">{s.note}</p>
              </article>
            ))}
            <article className="cell cell--material">
              <span className="cell__tag">Materiály</span>
              <p className="cell__note">
                Pracujeme s kvalitními materiály: lamino, masivní dřevo,
                dýhované desky a lakované MDF. Poradíme, co se pro váš
                interiér hodí i vydrží.
              </p>
            </article>
          </div>
        </div>
      </section>

      <SlatRib label="Dřevěná lamela — přechod mezi sekcemi" />

      <section id="o-nas" className="band band--coal reveal">
        <div className="wrap about">
          <div className="about__text">
            <p className="sec-head__eyebrow">O dílně</p>
            <h2 className="sec-head__title display">
              17 let u ponku, v Ostravě
            </h2>
            <p>
              Jsme truhlářská firma se sídlem v Ostravě. Pod značkou Rossi
              jedeme od roku 2024, ale zakázkovou výrobou žijeme už 17 let.
              Děláme interiéry, ve kterých se budete cítit doma.
            </p>
            <p>
              Každý kus je originál — kuchyně, vestavěné skříně, komody,
              postele i lamelové obklady. Vybavíme vám dům, byt i kancelář.
              Ke každému zákazníkovi přistupujeme zvlášť: sejdeme se,
              probereme, co potřebujete, a vyrobíme to podle vašich představ.
            </p>
          </div>

          <div className="about__side">
            <div className="stats">
              <Stat figure="17" label="let řemeslné praxe" />
              <Stat figure="300+" label="hotových interiérů" />
              <Stat figure="1×1" label="každá zakázka originál" />
            </div>
            <div className="hours">
              <span className="hours__label">Dílna otevřená</span>
              <span className="hours__value display">Po–Pá · 6.00–16.00</span>
              <span className="hours__where">Ostrava</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
