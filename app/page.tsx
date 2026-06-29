import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "INPEKO \u2013 peka\u0159stv\u00ed v \u00dast\u00ed nad Labem",
  description:
    "INPEKO peče chléb, běžné i jemné pečivo, zákusky a dorty pro Ústí nad Labem. Otevíráme v 5:00, na pultech čerstvé každé ráno.",
};

const sortiment = [
  { t: "Chléb", d: "Kvaskem vedený pekařský chléb, pečený do tmava každý den." },
  { t: "Běžné pečivo", d: "Rohlíky, housky a veky \u2013 ráno na pultě obou prodejen." },
  { t: "Jemné pečivo", d: "Máslové a plněné kousky k snídani i ke kávě." },
  { t: "Zákusky a minizákusky", d: "Cukrářská klasika i drobné kousky na rauty." },
  { t: "Dorty", d: "Klasické, modelované i svatební \u2013 na míru objednávce." },
  { t: "Trvanlivé a DIA", d: "Cukroví a výrobky s náhradním sladidlem." },
];

const prodejny = [
  { name: "Jan\u00e1\u010dkova", hours: "05:00\u201316:00" },
  { name: "Grand", hours: "05:30\u201316:00" },
];

export default function Page() {
  return (
    <main className="pg">
      <header className="nav">
        <a className="mark" href="#" aria-label="INPEKO, pekařství Ústí nad Labem">
          <span className="mark__name">
            INP<span className="mark__cut">E</span>KO
          </span>
          <span className="mark__sub">pekařství \u00b7 Ústí nad Labem</span>
        </a>
        <a className="nav__call" href="tel:+420475306300">Zavolat 475&nbsp;306&nbsp;300</a>
      </header>

      <section className="hero">
        <div className="hero__copy">
          <p className="eyebrow"><span className="score" aria-hidden="true" />Pec se rozpaluje, když město spí</p>
          <h1 className="hero__h">
            <span className="hero__time">05:00</span>
            <span className="hero__line">a chléb už voní</span>
            <span className="hero__line hero__line--muted">po Ústí nad Labem.</span>
          </h1>
          <p className="hero__lead">
            Každé ráno před úsvitem zaděláváme těsto, abyste si na Janáčkově i na Grandu
            mohli vzít čerstvý chléb, rohlíky a zákusky. Dort uděláme na míru \u2013 i s vaší fotkou.
          </p>
          <div className="hero__cta">
            <a className="btn btn--solid" href="tel:+420602647325">Objednat dort \u2013 zavolat</a>
            <a className="btn btn--ghost" href="mailto:objednavky@inpeko.cz">Napsat na objednávky</a>
          </div>
        </div>
        <figure className="hero__fig">
          <img src="/hero.webp" alt="Čerstvě upečené bochníky chleba z pekařství INPEKO" />
        </figure>
      </section>

      <section className="sec sec--menu" aria-labelledby="menu-h">
        <div className="sec__head">
          <p className="eyebrow"><span className="score" aria-hidden="true" />Co dnes pečeme</p>
          <h2 id="menu-h" className="sec__h">Z naší pekárny na váš stůl</h2>
        </div>
        <div className="menu">
          <ul className="menu__list">
            {sortiment.map((s) => (
              <li className="menu__item" key={s.t}>
                <h3 className="menu__t">{s.t}</h3>
                <p className="menu__d">{s.d}</p>
              </li>
            ))}
          </ul>
          <figure className="menu__fig">
            <img src="/section-1.webp" alt="Výběr pečiva a cukrářských výrobků INPEKO" />
            <figcaption className="menu__cap">
              <strong>Fotodorty.</strong> Pošlete fotku e-mailem ve formátu JPG, dort vyrobíme do dvou dnů.
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="sec sec--trust" aria-labelledby="trust-h">
        <figure className="trust__fig">
          <img src="/section-2.webp" alt="Prodejna pekařství INPEKO v Ústí nad Labem" />
        </figure>
        <div className="trust__copy">
          <p className="eyebrow"><span className="score" aria-hidden="true" />Kde nás najdete</p>
          <h2 id="trust-h" className="sec__h">Dvě prodejny, jedna ranní směna</h2>

          <ul className="hours">
            {prodejny.map((p) => (
              <li className="hours__row" key={p.name}>
                <span className="hours__name">{p.name}</span>
                <span className="hours__dot" aria-hidden="true" />
                <span className="hours__time">{p.hours}</span>
              </li>
            ))}
          </ul>

          <div className="trust__grid">
            <div className="trust__card">
              <h3 className="trust__t">Call centrum \u2013 objednávky</h3>
              <p className="trust__p">Markéta Bavková a Lucie Wegert vám poradí s dorty i většími objednávkami.</p>
              <p className="trust__links">
                <a href="tel:+420475306300">475&nbsp;306&nbsp;300</a>
                <a href="tel:+420602647325">602&nbsp;647&nbsp;325</a>
                <a href="mailto:objednavky@inpeko.cz">objednavky@inpeko.cz</a>
              </p>
            </div>
            <div className="trust__card">
              <h3 className="trust__t">Pečeme podle pravidel</h3>
              <p className="trust__p">
                Provoz držíme v certifikovaném standardu kvality a bezpečnosti potravin.
              </p>
              <p className="trust__badges"><span>IFS</span><span>HACCP</span></p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
