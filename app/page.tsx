import type { CSSProperties } from "react";

export default function Page() {
  const revize = [
    {
      code: "ČSN 33 1500",
      title: "Instalace do 1000 V",
      desc: "Výchozí i pravidelné revize elektrických zařízení v bytech, kancelářích i provozovnách. Podle ČSN 33 1500 a ed. 2.",
    },
    {
      code: "ČSN 33 1600",
      title: "Nářadí a spotřebiče",
      desc: "Revize elektrického ručního nářadí a pravidelné kontroly přístrojů a spotřebičů podle ČSN 33 1610 ed. 2.",
    },
    {
      code: "ČSN 60204-1",
      title: "Stroje a rozvaděče",
      desc: "Revize elektrického zařízení pracovních strojů podle ed. 2, úprava a výměna rozvaděčů.",
    },
    {
      code: "ČSN 62305",
      title: "Hromosvody a zemniče",
      desc: "Výchozí, pravidelné i mimořádné revize a kontroly hromosvodů a měření zemničů.",
    },
    {
      code: "KOLAUDACE",
      title: "Rozvody pro převzetí",
      desc: "Revize elektrických rozvodů ke kolaudaci a po rekonstrukci — s protokolem, který úřad přijme.",
    },
  ];

  return (
    <main className="page">
      <header className="topbar">
        <a className="wordmark" href="#" aria-label="GIRBU — revize elektro">
          <span className="wordmark__phase" aria-hidden="true">L1 L2 L3</span>
          <span className="wordmark__name">GIRBU</span>
        </a>
        <a className="topbar__call" href="tel:+420777801961">
          <span className="topbar__dot" aria-hidden="true" />
          Zavolat reviznímu technikovi
        </a>
      </header>

      <section className="hero" aria-labelledby="hero-h">
        <div className="hero__frame">
          <img
            className="hero__img"
            src="/hero.webp"
            alt="Revizní technik GIRBU při měření elektrického rozvaděče v Praze"
            width={1600}
            height={1000}
          />
          <div className="hero__meter" aria-hidden="true">
            <span className="hero__meter-value">0,00</span>
            <span className="hero__meter-unit">Ω · v pořádku</span>
          </div>
        </div>

        <div className="hero__text">
          <p className="eyebrop">Revize elektro · Praha a okolí</p>
          <h1 id="hero-h" className="hero__title">
            Papír, který
            <br />
            <em>bez námitek</em> projde
            <br />
            kolaudací.
          </h1>
          <p className="hero__lede">
            Vasile Girbu vystaví revizní zprávu na instalace do 1000 V, hromosvody
            i stroje. Restaurační provozy měříme i v noci mimo provoz — ať vám
            neutíká obrat.
          </p>
          <div className="hero__actions">
            <a className="btn btn--primary" href="tel:+420777801961">
              +420 777 801 961
            </a>
            <a className="btn btn--ghost" href="#nabidka">
              Co vám zreviduju
            </a>
          </div>
        </div>
      </section>

      <section className="offer" id="nabidka" aria-labelledby="offer-h">
        <div className="section-head">
          <p className="eyebrop">Podle norem ČSN</p>
          <h2 id="offer-h">Každý okruh má svou normu. Znám je zpaměti.</h2>
        </div>

        <ul className="norms">
          {revize.map((r) => (
            <li className="norm" key={r.code}>
              <span className="norm__code">{r.code}</span>
              <div className="norm__body">
                <h3 className="norm__title">{r.title}</h3>
                <p className="norm__desc">{r.desc}</p>
              </div>
            </li>
          ))}
        </ul>

        <figure className="offer__figure">
          <img
            src="/section-1.webp"
            alt="Detail elektrického rozvaděče připraveného k revizi"
            width={1400}
            height={900}
          />
          <figcaption>
            Rozvaděč před převzetím — popsané okruhy, dotažené svorky, změřený
            přechodový odpor.
          </figcaption>
        </figure>
      </section>

      <section className="trust" aria-labelledby="trust-h">
        <figure className="trust__figure">
          <img
            src="/section-2.webp"
            alt="Vasile Girbu, revizní technik firmy GIRBU s.r.o. v Praze"
            width={1200}
            height={1400}
          />
        </figure>

        <div className="trust__text">
          <p className="eyebrop">Kdo přijede</p>
          <h2 id="trust-h">Vasile Girbu, GIRBU s.r.o.</h2>
          <p className="trust__lede">
            Revize dělám po Praze a okolí — pro domácnosti i firmy. Spolupracuju
            s ČEZ, jsem časově flexibilní a domluva je přímá: zavoláte, dorazím,
            změřím, dostanete zprávu.
          </p>

          <dl className="facts">
            <div className="fact">
              <dt>Kde</dt>
              <dd>Praha a okolí</dd>
            </div>
            <div className="fact">
              <dt>Kdy</dt>
              <dd>I v noci mimo provoz — restaurace, obchody</dd>
            </div>
            <div className="fact">
              <dt>Partner</dt>
              <dd>Spolupráce s ČEZ</dd>
            </div>
            <div className="fact">
              <dt>Cena</dt>
              <dd>Řeknu ji dopředu — a příjemně překvapí</dd>
            </div>
          </dl>

          <div className="trust__contact">
            <a className="btn btn--primary" href="tel:+420777801961">
              +420 777 801 961
            </a>
            <a className="btn btn--ghost" href="mailto:girbu@seznam.cz">
              girbu@seznam.cz
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
