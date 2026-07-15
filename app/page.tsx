import { AiImage } from "./_ui";

type Kategorie = {
  tag: string;
  title: string;
  desc: string;
  dia?: string[];
};

const kategorie: Kategorie[] = [
  {
    tag: "SPIRO",
    title: "Spiro potrubí",
    desc: "Kruhové potrubí SPIRO v délkách 1, 2 a 3 m, vnitřní i vnější spojky, oblouky, redukce a kalhotové kusy.",
    dia: ["80", "100", "125", "150", "160", "200"],
  },
  {
    tag: "FLEX",
    title: "Flexibilní potrubí",
    desc: "Hliníkové hadice Aluvac, Isovac a Sonovac, plastové Greyvac a Oreda i nerezové ohebné potrubí na přívod i odtah.",
  },
  {
    tag: "VENT",
    title: "Ventilátory",
    desc: "Potrubní, koupelnové, střešní i průmyslové ventilátory. Regulátory otáček, časové spínače a čidla vzduchotechniky.",
  },
  {
    tag: "REKU",
    title: "Rekuperace",
    desc: "Rekuperační jednotky i lokální rekuperace se zpětným ziskem tepla — čerstvý vzduch a nižší účet za vytápění.",
  },
  {
    tag: "MŘÍŽ",
    title: "Mřížky a ventily",
    desc: "Nerezové designové mřížky BLACK & WHITE, neviditelné anemostaty a skleněné talířové ventily v barevném provedení.",
  },
  {
    tag: "KLAP",
    title: "Regulační a zpětné klapky",
    desc: "Regulační klapky VZT, zpětné klapky, šoupátka a spojovací manžety pro přesné řízení průtoku vzduchu.",
  },
];

function Seam({ className = "" }: { className?: string }) {
  return (
    <svg
      className={`seam ${className}`}
      viewBox="0 0 200 140"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <line x1="0" y1="120" x2="200" y2="4" />
      <line x1="0" y1="136" x2="200" y2="20" />
    </svg>
  );
}

export default function Page() {
  return (
    <main className="page">
      <section className="hero">
        <div className="hero__media">
          <AiImage
            src="/hero.webp"
            alt="Spirálně vinuté potrubí SPIRO naskladněné ve skladu INKOMO"
          />
        </div>
        <div className="hero__scrim" aria-hidden="true" />

        <svg
          className="hero__seam"
          viewBox="0 0 1000 600"
          preserveAspectRatio="xMidYMid slice"
          aria-hidden="true"
        >
          <line pathLength={100} x1="-60" y1="620" x2="1060" y2="-30" />
          <line pathLength={100} x1="-60" y1="690" x2="1060" y2="40" />
        </svg>

        <div className="hero__inner wrap">
          <p className="eyebrow eyebrow--light">
            České Budějovice · vzduchotechnika a topení od 1994
          </p>

          <div className="wordmark">
            INKOMO<span className="wordmark__dia">∅</span>
          </div>

          <h1 className="hero__title">
            Spiro potrubí, ventilace a&nbsp;topení — na&nbsp;přesný&nbsp;∅.
          </h1>

          <p className="hero__lead">
            Skladem tisíce položek pro rozvod vzduchu i&nbsp;vytápění: od
            kruhového potrubí SPIRO přes ohebné hadice a&nbsp;ventilátory až
            po rekuperaci. Rozměry ∅&nbsp;80 až&nbsp;∅&nbsp;2000&nbsp;mm,
            expedice z&nbsp;Českých Budějovic.
          </p>

          <div className="hero__actions">
            <a className="btn" href="#sortiment">
              Prohlédnout sortiment
            </a>
            <span className="anniv">
              30 let
              <Seam className="seam--underline" />
            </span>
          </div>
        </div>
      </section>

      <section id="sortiment" className="services">
        <div className="wrap">
          <div className="services__head">
            <div className="services__intro">
              <p className="eyebrow">Sortiment skladem</p>
              <h2 className="section-title">
                Všechno pro rozvod vzduchu — z&nbsp;jednoho skladu.
              </h2>
              <p className="lead">
                Nemontujeme, ale zásobujeme ty, kdo montují. Řekněte nám ∅
                a&nbsp;délku — my připravíme potrubí, kolena, redukce
                i&nbsp;tvarovky tak, aby vám na stavbě nic nechybělo.
              </p>
            </div>
            <div className="services__media">
              <AiImage
                src="/section-1.webp"
                alt="Tvarovky a spojky vzduchotechnického potrubí připravené k expedici"
              />
            </div>
          </div>

          <ul className="grid">
            {kategorie.map((c) => (
              <li className="card" key={c.title}>
                <p className="card__tag">{c.tag}</p>
                <h3 className="card__title">{c.title}</h3>
                <p className="card__desc">{c.desc}</p>
                {c.dia && (
                  <ul className="dia" aria-label="Skladové průměry v milimetrech">
                    {c.dia.map((d) => (
                      <li className="dia__chip" key={d}>
                        ∅&nbsp;{d}
                      </li>
                    ))}
                  </ul>
                )}
                <span className="card__seam" aria-hidden="true">
                  <Seam />
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="about">
        <div className="wrap about__grid">
          <div className="about__media">
            <AiImage
              src="/section-2.webp"
              alt="Detail spirálního švu pozinkovaného potrubí SPIRO"
            />
          </div>

          <div className="about__body">
            <p className="eyebrow eyebrow--light">O firmě · České Budějovice</p>
            <h2 className="section-title section-title--light">
              <span className="anniv anniv--block">
                30 let
                <Seam className="seam--underline" />
              </span>
              dodáváme vzduch tam, kam patří.
            </h2>
            <p className="lead lead--light">
              INKOMO VZDUCHOTECHNIKA vzniklo v&nbsp;roce 1994 a&nbsp;dodnes
              vozí potrubí, ventilátory i&nbsp;rekuperace z&nbsp;vlastního
              skladu v&nbsp;Českých Budějovicích. Bez prostředníků, bez
              čekání na dovoz — co je na e-shopu skladem, to zítra nakládáme.
            </p>

            <dl className="stats">
              <div className="stat">
                <dt className="stat__num">1994</dt>
                <dd className="stat__label">rok založení firmy</dd>
              </div>
              <div className="stat">
                <dt className="stat__num">∅ 80–2000</dt>
                <dd className="stat__label">rozměry potrubí (mm)</dd>
              </div>
              <div className="stat">
                <dt className="stat__num">tisíce</dt>
                <dd className="stat__label">položek přímo skladem</dd>
              </div>
            </dl>

            <ul className="trust">
              <li>Skladem, ne na objednávku — potrubí i&nbsp;tvarovky expedujeme obratem.</li>
              <li>Poradíme s&nbsp;návrhem: jaký ∅, jaká tloušťka plechu, kolik kolen.</li>
              <li>30 let praxe ve vzduchotechnice i&nbsp;vytápění v&nbsp;jižních Čechách.</li>
            </ul>

            <a className="phone" href="tel:+420602125001">
              Zavolat 602&nbsp;125&nbsp;001
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
