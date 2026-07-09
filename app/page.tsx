import type { CSSProperties } from "react";

export default function Page() {
  const dorty = [
    {
      cislo: "01",
      nazev: "Dorty na míru",
      popis:
        "Od korpusu po poslední kvítek marcipánu. Na svatbu, k narozeninám nebo jen tak, protože je čtvrtek. Řekněte nám chuť a příležitost, zbytek vyladíme s vámi.",
      chut: "máslový krém · piškot · sezónní ovoce",
    },
    {
      cislo: "02",
      nazev: "Zákusky a mini dezerty",
      popis:
        "Věnečky, větrníky, laskonky a řezy, které mizí z tácu první. Ideální na kancelářskou oslavu i nedělní návštěvu — vejdou se do dlaně i do rozpočtu.",
      chut: "choux · šlehačka · křehké těsto",
    },
    {
      cislo: "03",
      nazev: "Slané speciality",
      popis:
        "Chlebíčky, quiche a mřížky s uzeným. Ke kávě, k vínu nebo na raut, kde nechcete, aby zbylo ani sousto.",
      chut: "listové těsto · sýr · domácí paštika",
    },
  ];

  const duvery = [
    { c: "1988", l: "pečeme v Hradci od roku" },
    { c: "3", l: "desetiletí ve stejných rukou" },
    { c: "6:00", l: "vytahujeme první plech" },
  ];

  return (
    <main className="page">
      <header className="nav" aria-label="Hlavní navigace">
        <a className="wordmark" href="#uvod" aria-label="Sázava — pekařství a cukrářství">
          <span className="wordmark__hor">Sázava</span>
          <span className="wordmark__sub">pekařství &amp; cukrářství · Hradec Králové</span>
        </a>
        <nav className="nav__links">
          <a href="#nabidka">Nabídka</a>
          <a href="#pribeh">O nás</a>
          <a className="nav__tel" href="tel:+420495512300">495&nbsp;512&nbsp;300</a>
        </nav>
      </header>

      <section className="hero" id="uvod">
        <div className="hero__frame">
          <img
            className="hero__img"
            src="/hero.webp"
            alt="Čerstvě upečený dort z cukrárny Sázava zdobený ovocem a šlehačkou"
          />
          <span className="hero__stamp" aria-hidden="true">z pece · dnes ráno</span>
        </div>

        <div className="hero__text">
          <p className="eyebrow">Cukrárna &amp; pekárna · Hradec Králové</p>
          <h1 className="hero__title">
            Ráno voní
            <em>&nbsp;máslem</em>,
            <br />
            odpoledne
            <em>&nbsp;čokoládou</em>.
          </h1>
          <p className="hero__lede">
            Tři desetiletí vytahujeme z pece chleba, věnečky a dorty na oslavy.
            Nic mraženého, nic z krabice — jen mouka, máslo, poctivý čas a ruce,
            které to umí.
          </p>
          <div className="hero__cta">
            <a className="btn btn--fill" href="tel:+420495512300">Zavolat a objednat dort</a>
            <a className="btn btn--line" href="#nabidka">Prohlédnout nabídku</a>
          </div>
        </div>
      </section>

      <section className="nabidka" id="nabidka" aria-labelledby="nabidka-nadpis">
        <div className="section-head">
          <p className="eyebrow eyebrow--dark">Denně čerstvé · z vlastní pekárny</p>
          <h2 id="nabidka-nadpis">Co pro vás pečeme</h2>
        </div>

        <ol className="cards">
          {dorty.map((d) => (
            <li className="card" key={d.cislo}>
              <span className="card__num" aria-hidden="true">{d.cislo}</span>
              <h3 className="card__title">{d.nazev}</h3>
              <p className="card__text">{d.popis}</p>
              <p className="card__chut">{d.chut}</p>
            </li>
          ))}
        </ol>

        <figure className="showcase">
          <img
            className="showcase__img"
            src="/section-1.webp"
            alt="Vitrína cukrárny Sázava plná zákusků, řezů a sladkých specialit"
          />
          <figcaption className="showcase__cap">
            <strong>Vitrína, kterou plníme každé ráno.</strong>
            <span>
              Co nezmizí do večera, do vitríny druhý den nevracíme. Přijďte, dokud
              je teplé.
            </span>
          </figcaption>
        </figure>
      </section>

      <section className="pribeh" id="pribeh" aria-labelledby="pribeh-nadpis">
        <div className="pribeh__media">
          <img
            src="/section-2.webp"
            alt="Šálek kávy a čerstvé pečivo připravené v cukrárně Sázava"
          />
        </div>
        <div className="pribeh__text">
          <p className="eyebrow eyebrow--dark">Od roku 1988 v Hradci</p>
          <h2 id="pribeh-nadpis">Řemeslo, které se nedá uspěchat</h2>
          <p>
            Začínali jsme jako malá pekárna a zůstali jsme u toho, co umíme:
            kynout těsto přes noc, šlehat máslový krém a péct tak, jak by to
            dělala babička — jen pro celý Hradec Králové najednou.
          </p>
          <p>
            Ke sladkému u nás patří i káva, která voní už na dálku. Vezmete si ji
            do ruky nebo si sednete a necháte den chvíli počkat.
          </p>

          <dl className="stats">
            {duvery.map((s) => (
              <div className="stat" key={s.l}>
                <dt className="stat__num">{s.c}</dt>
                <dd className="stat__lbl">{s.l}</dd>
              </div>
            ))}
          </dl>

          <a className="btn btn--fill" href="mailto:cukrarna@sazava-hk.cz">
            Napsat nám o dort na oslavu
          </a>
        </div>
      </section>
    </main>
  );
}
