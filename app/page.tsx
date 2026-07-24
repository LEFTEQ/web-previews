import { AiImage } from "./_ui";

const chaty = [
  {
    loc: "Grygov",
    tag: "poppy",
    name: "Chata Grygovský háj",
    beds: "6 lůžek ve dvou ložnicích",
    land: "pozemek 480 m² s krbem",
    drive: "12 minut autem do Olomouce",
    extra: "Krytá terasa, dřevník, klid mezi duby.",
    price: "3 900 Kč",
    unit: "/ víkend",
  },
  {
    loc: "Náměšť na Hané",
    tag: "flax",
    name: "Chata pod Kosířem",
    beds: "4 lůžka, podkrovní pokoj",
    land: "zahrada 620 m², studna",
    drive: "20 minut autem do Olomouce",
    extra: "Z verandy je vidět Velký Kosíř.",
    price: "3 200 Kč",
    unit: "/ víkend",
  },
  {
    loc: "Bystrovany",
    tag: "stubble",
    name: "Chata U Bystřice",
    beds: "5 lůžek, palanda pro děti",
    land: "přímo u řeky Bystřice",
    drive: "8 minut autem do Olomouce",
    extra: "Ohniště, molo a klid na ryby.",
    price: "4 500 Kč",
    unit: "/ víkend",
  },
];

const kroky = [
  { n: "01", t: "Vyberete chatu a termín", d: "Napíšete nám, o kterou chatu a víkend stojíte. Poradíme, kde je v ten čas volno a co k tomu patří." },
  { n: "02", t: "Do druhého dne potvrdíme, že je volno", d: "Dostupnost hlídáme ručně, ne přes přeplácaný rezervační modul. Odpovídáme nejpozději následující pracovní den." },
  { n: "03", t: "Podepíšeme krátkou smlouvu a složíte kauci", d: "Jedna strana textu, žádné drobné písmo. Kauce je vratná a vracíme ji do tří dnů po předání." },
  { n: "04", t: "V pátek přebíráte klíče přímo na chatě", d: "Sejdeme se na místě, projdeme chatu spolu a ukážeme, kde je co. Do neděle je vaše." },
];

export default function Page() {
  return (
    <main>
      <header className="topbar">
        <div className="wrap topbar__in">
          <a className="brand" href="#uvod" aria-label="Hanácká realitní — chaty na Hané">
            <span className="brand__name">hanácká</span>
            <span className="brand__sub">chaty na Hané · Olomoucko</span>
          </a>
          <nav className="nav" aria-label="Hlavní">
            <a href="#chaty">Chaty</a>
            <a href="#jak">Jak to chodí</a>
            <a href="#o-nas">O nás</a>
          </nav>
          <a className="phone" href="tel:777111222">777 111 222</a>
        </div>
        <div className="datum" aria-hidden="true" />
      </header>

      <section className="hero" id="uvod">
        <div className="hero__furrows" aria-hidden="true">
          <i /><i /><i /><i /><i /><i />
        </div>
        <AiImage src="/hero.webp" alt="Dřevěná chata mezi poli na hanácké rovině u Olomouce za pozdního léta" className="hero__img" />
        <div className="wrap hero__grid">
          <div className="hero__text">
            <p className="eyebrow">Chata k pronájmu · Haná, Olomoucko</p>
            <h1 className="hero__title">
              Chata uprostřed<br />hanáckých lánů.<br />
              <span className="hero__accent">Klíče v pátek, klid do neděle.</span>
            </h1>
            <p className="hero__lead">
              Pronajímáme prověřené chaty do půlhodiny od Olomouce — každou jsme prošli osobně,
              každou umíme popsat od kamen po studnu. Vyberete termín, my potvrdíme do druhého dne.
            </p>
            <div className="actions">
              <a className="btn btn--primary" href="#chaty">Prohlédnout chaty</a>
              <a className="btn btn--ghost" href="#jak">Jak to chodí</a>
            </div>
            <p className="hero__chip">od 3 200 Kč / víkend · 3 volné chaty</p>
          </div>
        </div>
      </section>

      <section className="band" id="chaty">
        <div className="wrap">
          <div className="lead">
            <p className="eyebrow eyebrow--rule">Volné chaty</p>
            <h2 className="h2">Tři chaty, které máme právě teď</h2>
            <p className="lead__p">
              Ne katalog stovek nemovitostí — jen chaty, u kterých víme, jak topí kamna a kudy se
              chodí k vodě. Cena je za celý víkend, ne za osobu.
            </p>
          </div>

          <div className="specimens">
            {chaty.map((c) => (
              <article className="spec" key={c.name}>
                <span className={`spec__tag spec__tag--${c.tag}`}>{c.loc}</span>
                <h3 className="spec__name">{c.name}</h3>
                <div className="spec__rule" aria-hidden="true" />
                <dl className="spec__facts">
                  <div><dt>Lůžka</dt><dd>{c.beds}</dd></div>
                  <div><dt>Pozemek</dt><dd>{c.land}</dd></div>
                  <div><dt>Dojezd</dt><dd>{c.drive}</dd></div>
                </dl>
                <p className="spec__extra">{c.extra}</p>
                <div className="spec__foot">
                  <p className="spec__price">{c.price}<span>{c.unit}</span></p>
                  <a className="btn btn--small" href="#jak">Zobrazit chatu</a>
                </div>
              </article>
            ))}
          </div>

          <figure className="strip">
            <AiImage src="/section-1.webp" alt="Pohled na hanáckou krajinu s poli, chatou a alejí u Olomouce" className="strip__img" />
            <figcaption className="strip__cap">Všechny chaty jsou do 20 km od Olomouce — na dosah Grygova, Náměště na Hané i řeky Bystřice.</figcaption>
          </figure>
        </div>
      </section>

      <section className="band band--dark" id="jak">
        <div className="wrap">
          <div className="lead">
            <p className="eyebrow eyebrow--rule eyebrow--light">Od poptávky ke klíčům</p>
            <h2 className="h2 h2--light">Čtyři kroky, žádné překvapení</h2>
            <p className="lead__p lead__p--light">
              Rezervaci vedeme ručně a stroze — proto víte, s kým jednáte, a kdy máte odpověď mít.
            </p>
          </div>

          <ol className="steps">
            {kroky.map((k) => (
              <li className="step" key={k.n}>
                <span className="step__n">{k.n}</span>
                <div className="step__body">
                  <h3 className="step__t">{k.t}</h3>
                  <p className="step__d">{k.d}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="band" id="o-nas">
        <div className="wrap about">
          <div className="about__media">
            <AiImage src="/section-2.webp" alt="Realitní makléřka předává klíče od chaty rodině před dřevěnou verandou" className="about__img" />
          </div>
          <div className="about__text">
            <p className="eyebrow eyebrow--rule">O nás</p>
            <h2 className="h2">Chaty na Hané známe jménem, ne z inzerátu</h2>
            <p className="about__p">
              Jsme rodinná realitní kancelář z Olomouce. Chaty, které pronajímáme, obcházíme každé
              jaro — díváme se na kamna, střechu i cestu k vodě, ať vám o víkendu nic nezkazí náladu.
              Když vám něco poradíme, víme, o čem mluvíme.
            </p>
            <blockquote className="quote">
              <p>„Chatu u Bystřice jsme si vzali na prodloužený víkend a děti se od mola nedaly odtrhnout.
              Předání trvalo deset minut a všechno sedělo.“</p>
              <cite>— František Doležal, host z Olomouce</cite>
            </blockquote>
            <dl className="trust">
              <div><dt>3 chaty</dt><dd>prověřené osobně, každé jaro</dd></div>
              <div><dt>do 20 km</dt><dd>od centra Olomouce</dd></div>
              <div><dt>do druhého dne</dt><dd>potvrdíme dostupnost</dd></div>
            </dl>
          </div>
        </div>
      </section>
    </main>
  );
}
