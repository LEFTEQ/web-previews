import type { CSSProperties } from "react";

type Krouzek = {
  name: string;
  age: string;
  when: string;
  desc: string;
  accent: string;
};

const krouzky: Krouzek[] = [
  {
    name: "Hudební školička",
    age: "1–3 roky",
    when: "Po · 9:30",
    desc: "Písničky, ozvučená vajíčka a bubínky. První setkání s rytmem pro batolata v náručí rodičů.",
    accent: "var(--coral)",
  },
  {
    name: "Cvičení s rodiči",
    age: "1–2 roky",
    when: "Út · 10:00",
    desc: "Průlezky, míče a říkanky. Rozhýbeme nejmenší tak, aby to bavilo je i vás.",
    accent: "var(--amber)",
  },
  {
    name: "Keramika pro děti",
    age: "5–10 let",
    when: "St · 16:00",
    desc: "Hlína, glazury a vlastní hrnek na konci lekce. Točíme, mačkáme a pálíme v naší peci.",
    accent: "var(--aqua)",
  },
  {
    name: "Tanečky",
    age: "3–6 let",
    when: "Čt · 16:30",
    desc: "Od prvních otoček k malému vystoupení pro rodiče. Radost z pohybu bez soutěžení.",
    accent: "var(--coral)",
  },
  {
    name: "Výtvarný ateliér",
    age: "6–11 let",
    when: "Pá · 15:30",
    desc: "Malba, koláž a linoryt. Děti zkoušejí techniky, na které ve škole nezbývá čas.",
    accent: "var(--amber)",
  },
  {
    name: "Angličtina hrou",
    age: "4–7 let",
    when: "Út · 16:00",
    desc: "Angličtina přes hry, písničky a pohádky. Bez učebnic, zato s chutí do řeči.",
    accent: "var(--aqua)",
  },
];

const reference = [
  {
    quote: "Dcera se na keramiku těší celý týden. Nosí domů hrnky a už jich máme plnou polici.",
    who: "Petra, maminka Elišky (6)",
  },
  {
    quote: "Malá skupinka znamená, že se lektorka věnuje každému dítěti. Matěj se přestal bát mluvit anglicky.",
    who: "Jan, tatínek Matěje (4)",
  },
  {
    quote: "Cvičení pro nejmenší nás naučilo spoustu říkanek. Chodíme sem od roka a je to náš rituál.",
    who: "Klára, maminka Toníka (2)",
  },
];

export default function Page() {
  return (
    <main>
      <section className="hero">
        <div className="hero-rings" aria-hidden="true">
          <span className="drop" />
          <span className="hring hring-1" />
          <span className="hring hring-2" />
          <span className="hring hring-3" />
        </div>
        <div className="wrap hero-inner">
          <p className="eyebrow">Rodinné centrum · Plzeň · od roku 2004</p>
          <h1 className="wordmark">
            Vlnka
            <span className="wordmark-ripple" aria-hidden="true" />
          </h1>
          <p className="hero-lead">
            Kroužky pro děti od prvních batolecích krůčků po školní léta. Malé
            skupinky, teplý sál a lektorky, které si každé dítě pamatují jménem.
          </p>
          <p className="hero-note">Zápis na jarní pololetí právě běží.</p>
        </div>
      </section>

      <section className="section" aria-labelledby="katalog-nadpis">
        <div className="wrap">
          <header className="section-head">
            <p className="eyebrow eyebrow-ink">Rozvrh týdne</p>
            <h2 id="katalog-nadpis" className="section-title">
              Každý kroužek je jeden kruh na hladině
            </h2>
            <p className="section-intro">
              Věk, den a čas najdete kolem kružnice — jako na visačce. Vyberte si
              podle toho, kolik je vašemu dítěti a kdy se vám hodí přijít.
            </p>
          </header>

          <ul className="katalog">
            {krouzky.map((k, i) => (
              <li
                key={k.name}
                className="krouzek"
                style={{ "--i": i, "--accent": k.accent } as CSSProperties}
              >
                <div className="krouzek-ring" tabIndex={0}>
                  <span className="tag tag-age">{k.age}</span>
                  <span className="ring-name">{k.name}</span>
                  <span className="tag tag-when">{k.when}</span>
                </div>
                <p className="krouzek-desc">{k.desc}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section section-trust" aria-labelledby="trust-nadpis">
        <div className="wrap">
          <header className="section-head">
            <p className="eyebrow eyebrow-ink">Proč Vlnka</p>
            <h2 id="trust-nadpis" className="section-title">
              Rodiče k nám vodí děti už dvacet let
            </h2>
            <p className="section-intro">
              Vlnku jsme otevřeli v roce 2004, od roku 2015 jedeme samostatně jako
              nezisková organizace. Za tu dobu jsme se naučili jedno: menší
              skupina znamená klidnější děti a spokojenější rodiče.
            </p>
          </header>

          <ul className="fakta">
            <li className="fakt">
              <span className="fakt-cislo">2004</span>
              <span className="fakt-popis">otevřeno v Plzni, běžíme dodnes</span>
            </li>
            <li className="fakt">
              <span className="fakt-cislo">8</span>
              <span className="fakt-popis">dětí nejvíc ve skupině, ne třicet</span>
            </li>
            <li className="fakt">
              <span className="fakt-cislo">6</span>
              <span className="fakt-popis">kroužků každý týden, od batolat po školáky</span>
            </li>
          </ul>

          <ul className="reference">
            {reference.map((r) => (
              <li key={r.who} className="referenceItem">
                <p className="referenceQuote">{r.quote}</p>
                <p className="referenceWho">{r.who}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
