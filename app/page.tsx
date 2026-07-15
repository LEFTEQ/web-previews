import React from "react";

const circuits = [
  {
    id: "F1",
    title: "Kompletní elektroinstalace",
    body: "Novostavby i rekonstrukce od nuly \u2014 od projektu rozvodů přes sekání drážek a tažení kabelů až po zapojení a předání připravené k revizi.",
  },
  {
    id: "F2",
    title: "Silnoproudé rozvody a přípojky",
    body: "Naše doména. Přívody 230/400 V, hlavní domovní vedení, přípojky a jištěné okruhy dimenzované na skutečnou zátěž, ne na papír.",
  },
  {
    id: "F3",
    title: "Rozvaděče na míru",
    body: "Domovní i menší průmyslové rozvaděče \u2014 přehledně popsané, čistě zapojené měděnými vodiči a připravené, aby v nich za pět let někdo něco našel.",
  },
  {
    id: "F4",
    title: "Osvětlení",
    body: "Návrh rozmístění, montáž a oživení světelných okruhů. Ovládání, stmívání i venkovní svícení tak, aby sedělo ke stavbě.",
  },
  {
    id: "F5",
    title: "Zásuvkové okruhy a jištění",
    body: "Rozumné rozdělení okruhů, proudové chrániče a jističe tam, kde mají být. Aby vám nepadala půlka bytu kvůli jedné varné konvici.",
  },
  {
    id: "F6",
    title: "Příprava pro revizi",
    body: "Instalaci předáváme zdokumentovanou a připravenou pro revizního technika \u2014 bez dohledávání, kudy co vede.",
  },
];

const principles = [
  {
    k: "Materiál",
    h: "Prvotřídní materiál, žádné kompromisy pod omítkou",
    p: "Na to, co po dokončení zmizí ve zdi, nešetříme. Kabely, chráničky i svorky vybíráme tak, aby vydržely déle než samotná stavba.",
  },
  {
    k: "Cena",
    h: "Kvalita spočítaná tak, aby dávala smysl",
    p: "Umíme skloubit prvotřídní provedení s rozumnou cenou. Řekneme dopředu, co se vyplatí a kde zbytečně přeplácíte.",
  },
  {
    k: "Provedení",
    h: "Preciznost, kterou je vidět i tam, kam nikdo nekouká",
    p: "Rovné trasy, popsané rozvaděče, čisté spoje. Věříme, že správně udělaná instalace je i ta, která pěkně vypadá.",
  },
];

export default function Page() {
  return (
    <main className="wr">
      <header className="hero">
        <img
          className="hero__img"
          src="/hero.webp"
          alt="Elektrikář Wirine Electric při zapojování domovního rozvaděče"
          loading="eager"
          decoding="async"
        />
        <div className="hero__veil" aria-hidden="true" />

        <nav className="nav" aria-label="Hlavní">
          <a className="mark" href="#top" aria-label="Wirine Electric, úvod">
            <span className="mark__name">WIRINE</span>
            <span className="mark__sub">ELECTRIC</span>
            <span className="mark__stripe" aria-hidden="true" />
          </a>
          <div className="nav__links">
            <a href="#sluzby">Služby</a>
            <a href="#onas">O nás</a>
            <a href="#kontakt">Kontakt</a>
            <a className="nav__call" href="tel:+420777987994">
              Zavolat
            </a>
          </div>
        </nav>

        <div className="hero__body" id="top">
          <p className="eyebrow reveal" style={{ animationDelay: "0.05s" }}>
            ELEKTROMONTÁŽE SILNOPROUDU \u2014 PARDUBICE
          </p>
          <h1 className="hero__h reveal" style={{ animationDelay: "0.12s" }}>
            Silnoproud provedený přesně,
            <span className="hero__accent"> od rozvaděče po poslední zásuvku.</span>
          </h1>
          <div className="hero__stripe reveal-stripe" aria-hidden="true" />
          <p className="hero__lead reveal" style={{ animationDelay: "0.28s" }}>
            Děláme elektroinstalace pro novostavby i rekonstrukce v Pardubicích a
            okolí. Prvotřídní materiál, čistá práce a cena, která dává smysl.
          </p>

          <div className="hero__cta reveal" style={{ animationDelay: "0.36s" }}>
            <a className="btn btn--primary" href="tel:+420777987994">
              Zavolat 777 987 994
            </a>
            <a className="btn btn--ghost" href="#sluzby">
              Co umíme
            </a>
          </div>

          <dl className="specs reveal" style={{ animationDelay: "0.46s" }}>
            <div className="specs__i">
              <dt>230 / 400 V</dt>
              <dd>silnoproud</dd>
            </div>
            <div className="specs__i">
              <dt>Cu</dt>
              <dd>měděné vodiče</dd>
            </div>
            <div className="specs__i">
              <dt>Pardubice I</dt>
              <dd>Zelené Předměstí</dd>
            </div>
          </dl>
        </div>
      </header>

      <section className="sluzby" id="sluzby" aria-labelledby="sluzby-h">
        <div className="sec__head">
          <p className="kicker kicker--dark">ROZDĚLENÍ OKRUHŮ</p>
          <h2 id="sluzby-h" className="sec__h">
            Co u vás zapojíme
          </h2>
          <p className="sec__intro">
            Zaměřujeme se na silnoproud \u2014 od hlavního přívodu po jednotlivé
            okruhy. Každou zakázku bereme jako celek, který na sebe musí navazovat.
          </p>
        </div>

        <img
          className="sluzby__img"
          src="/section-1.webp"
          alt="Detail čistě zapojeného rozvaděče s popsanými jističi"
          loading="lazy"
          decoding="async"
        />

        <ol className="circuits">
          {circuits.map((c) => (
            <li className="circuit" key={c.id}>
              <span className="circuit__id" aria-hidden="true">
                {c.id}
              </span>
              <div className="circuit__txt">
                <h3 className="circuit__h">{c.title}</h3>
                <p className="circuit__p">{c.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="onas" id="onas" aria-labelledby="onas-h">
        <div className="onas__intro">
          <p className="kicker">O NÁS</p>
          <h2 id="onas-h" className="sec__h sec__h--light">
            Tři věci, na kterých u nás stojí každá zakázka
          </h2>
          <p className="onas__lead">
            WIRINE ELECTRIC s.r.o. je odborný partner pro elektromontážní práce se
            zaměřením na silnoproudá zařízení. Držíme se toho, co funguje: dobrý
            materiál, poctivé provedení a férová domluva.
          </p>
        </div>

        <img
          className="onas__img"
          src="/section-2.webp"
          alt="Elektromontážní práce Wirine Electric na stavbě v Pardubicích"
          loading="lazy"
          decoding="async"
        />

        <div className="pillars">
          {principles.map((p, i) => (
            <article className="pillar" key={p.k}>
              <span className="pillar__no" aria-hidden="true">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="pillar__k">{p.k}</p>
              <h3 className="pillar__h">{p.h}</h3>
              <p className="pillar__p">{p.p}</p>
            </article>
          ))}
        </div>

        <div className="contact" id="kontakt">
          <div className="contact__col">
            <p className="kicker">KONTAKT</p>
            <p className="contact__line">
              Domluvíme se přímo \u2014 řeknete, co potřebujete, a my se přijedeme
              podívat.
            </p>
          </div>
          <ul className="contact__list">
            <li>
              <span className="contact__lbl">TELEFON</span>
              <a href="tel:+420777987994">+420 777 987 994</a>
            </li>
            <li>
              <span className="contact__lbl">E-MAIL</span>
              <a href="mailto:info@wirineelectric.cz">info@wirineelectric.cz</a>
            </li>
            <li>
              <span className="contact__lbl">SÍDLO</span>
              <span>S. K. Neumanna, 530 02 Pardubice I \u2013 Zelené Předměstí</span>
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}
