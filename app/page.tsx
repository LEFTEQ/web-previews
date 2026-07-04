import type { CSSProperties } from "react";

export default function Page() {
  const programs = [
    {
      code: "P1",
      name: "Rychlá péče",
      time: "cca 45 min",
      desc: "Ruční mytí karoserie, sušení do sucha, umytí kol a orámování oken. Když spěcháte a chcete vůz čistý a suchý.",
      steps: ["Ruční mytí", "Umytí kol", "Sušení do sucha"],
    },
    {
      code: "P2",
      name: "Interiér do detailu",
      time: "2–3 hod",
      desc: "Tepování sedaček a koberců, ošetření plastů, čištění oken zevnitř. Zmizí zápach i drobky po dětech.",
      steps: ["Vysátí", "Tepování", "Ošetření plastů", "Okna zevnitř"],
    },
    {
      code: "P3",
      name: "Kůže a kompletka",
      time: "půl dne",
      desc: "Speciální čištění a impregnace kožených sedaček, kompletní interiér i exteriér. Vůz jako od výrobce.",
      steps: ["Čištění kůže", "Impregnace", "Kompletní interiér", "Vosk na lak"],
    },
  ];

  const extras = [
    "Konzervace plastových dílů",
    "Leštění a renovace laku",
    "Mytí podvozku",
    "Bezkontaktní mytí",
    "Voskování",
    "Mytí kol do detailu",
  ];

  return (
    <main className="sks">
      <header className="top">
        <a className="wordmark" href="#" aria-label="SKS Car, čištění interiérů aut, Liberec">
          <span className="wordmark__sks">SKS</span>
          <span className="wordmark__car">CAR</span>
          <span className="wordmark__loc">Liberec · Staré Pavlovice</span>
        </a>
        <a className="top__call" href="tel:+420777844023">777&nbsp;844&nbsp;023</a>
      </header>

      <section className="hero">
        <div className="hero__media">
          <img
            src="/hero.webp"
            alt="Ruční čištění interiéru vozu v provozovně SKS Car v Liberci"
            className="hero__img"
          />
          <div className="hero__wet" aria-hidden="true" />
        </div>

        <div className="hero__text">
          <p className="eyebrow">Ruční čištění vozů · od roku 2012</p>
          <h1 className="hero__h1">
            Vrátíme vašemu autu <em>pocit z prvního dne.</em>
          </h1>
          <p className="hero__lead">
            V Liberci se každý vůz čistí ručně — sedačku po sedačce, koberec po
            koberci. Žádná automatická linka, žádné spěchání. Jen důkladná práce
            a vůz, do kterého se těšíte.
          </p>
          <div className="hero__actions">
            <a className="btn btn--solid" href="tel:+420777844023">
              Zavolat a domluvit termín
            </a>
            <a className="btn btn--ghost" href="#programy">
              Prohlédnout programy
            </a>
          </div>
          <ul className="hero__facts">
            <li>
              <span className="hero__fact-k">Ručně</span>
              <span className="hero__fact-v">bez kontaktní linky</span>
            </li>
            <li>
              <span className="hero__fact-k">Kůže i tkanina</span>
              <span className="hero__fact-v">tepování a impregnace</span>
            </li>
            <li>
              <span className="hero__fact-k">Selská 730</span>
              <span className="hero__fact-v">Staré Pavlovice</span>
            </li>
          </ul>
        </div>
      </section>

      <section id="programy" className="programs">
        <div className="section-head">
          <p className="eyebrow eyebrow--dark">Programy</p>
          <h2 className="section-h2">Vyberte si podle toho, kolik má vůz za sebou.</h2>
          <p className="section-sub">
            Tři připravené balíčky pokryjí většinu situací. Cokoli navíc přidáme
            samostatně — stačí říct.
          </p>
        </div>

        <div className="cards">
          {programs.map((p) => (
            <article key={p.code} className="card">
              <div className="card__top">
                <span className="card__code">{p.code}</span>
                <span className="card__time">{p.time}</span>
              </div>
              <h3 className="card__name">{p.name}</h3>
              <p className="card__desc">{p.desc}</p>
              <ul className="card__steps">
                {p.steps.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="extras">
          <img
            src="/section-1.webp"
            alt="Detail čištěného interiéru vozu — sedačky a plastové díly"
            className="extras__img"
          />
          <div className="extras__body">
            <p className="eyebrow eyebrow--dark">Doplňkové služby</p>
            <h3 className="extras__h3">Přidejte k programu, co váš vůz zrovna potřebuje.</h3>
            <ul className="extras__list">
              {extras.map((e) => (
                <li key={e}>{e}</li>
              ))}
            </ul>
            <p className="extras__note">
              Nevíte, co zvolit? Přijeďte, vůz si prohlédneme společně a řekneme
              vám na rovinu, co má smysl.
            </p>
          </div>
        </div>
      </section>

      <section className="trust">
        <div className="trust__grid">
          <div className="trust__text">
            <p className="eyebrow eyebrow--dark">O nás</p>
            <h2 className="section-h2">
              Malá provozovna v Pavlovicích, kde na vaše auto opravdu záleží.
            </h2>
            <p className="trust__p">
              Provoz vede <strong>Vítězslav Šindelář</strong>. Auta tu myjeme a
              čistíme ručně od roku 2012 — poznáme, kde se drží prach, kam se
              zavrtala sůl ze zimy a jak zacházet s kůží, aby vydržela.
            </p>
            <p className="trust__p">
              Péči o váš vůz bereme jako projev důvěry. Přijeďte, vyčistíme ho a
              přesvědčte se sami — o pravdivosti našich slov mluví nejlíp
              výsledek.
            </p>

            <dl className="contact">
              <div>
                <dt>Rezervace</dt>
                <dd>
                  <a href="tel:+420777844023">777&nbsp;844&nbsp;023</a>
                  <a href="tel:+420777585828">777&nbsp;585&nbsp;828</a>
                </dd>
              </div>
              <div>
                <dt>E-mail</dt>
                <dd>
                  <a href="mailto:vitezslav.sindelar@centrum.cz">
                    vitezslav.sindelar@centrum.cz
                  </a>
                </dd>
              </div>
              <div>
                <dt>Kde nás najdete</dt>
                <dd>
                  Selská 730
                  <br />
                  Liberec — Staré Pavlovice
                </dd>
              </div>
            </dl>
          </div>

          <figure className="trust__fig">
            <img
              src="/section-2.webp"
              alt="Vyčištěný vůz připravený k předání zákazníkovi v provozovně SKS Car"
              className="trust__img"
            />
            <figcaption>Vozy předáváme suché a připravené k jízdě.</figcaption>
          </figure>
        </div>
      </section>
    </main>
  );
}
