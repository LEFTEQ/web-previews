import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Food Factory Olomouc — catering na svatby a firemní akce",
  description:
    "Catering od A do Z v Olomouci a okolí. Návrh menu, obsluha, grilování i poslední uklizený talíř. Nabídku pošleme do 24 hodin.",
};

const menu = [
  {
    krok: "01",
    nadpis: "Návrh menu",
    text: "Sejdeme se, ochutnáte a společně poskládáme menu podle akce, ročního období i vašich hostů. Vegetariánské a veganské varianty samozřejmostí, alergie hlídáme.",
  },
  {
    krok: "02",
    nadpis: "Raut, grilování, servis",
    text: "Uvaříme čerstvě na místě. Studený i teplý raut, gril pod širým nebem, plný barový servis. Kuchaři i obsluha přijedou včas a připraveni.",
  },
  {
    krok: "03",
    nadpis: "Obsluha po celý den",
    text: "Naše dámy a barmani jsou s vámi od příjezdu až do nočních hodin. Pomůžeme i s koordinací obřadu — a když se na něco zapomene, vyřešíme to za vás.",
  },
  {
    krok: "04",
    nadpis: "Poslední talíř",
    text: "Po akci po sobě uklidíme. Vy si užijete den, my se postaráme o všechno ostatní — včetně toho, co není vidět.",
  },
];

const reference = [
  {
    text: "Vyzdvihli bychom hlavně obsluhu — profesionální a neskutečně milá. Od všech hostů jsme slyšeli jen chválu a jídlo bylo vynikající. Všem doporučujeme.",
    jmeno: "Terezie H.",
    akce: "Svatba",
  },
  {
    text: "Milá obsluha, která se od příjezdu přes celý den až do noci usmívala. Když se v tom stresu na něco zapomnělo, naskočili do auta a vše zařídili. Všichni byli spokojení.",
    jmeno: "Lucie Z.",
    akce: "Svatba",
  },
  {
    text: "Samí profíci — příjemní, přátelští, žádný požadavek nebyl problém. Spousta hostů říkala, že tak výborné jídlo ještě neměla. Opravdu doporučujeme.",
    jmeno: "Libor V.",
    akce: "Svatba",
  },
  {
    text: "Perfektní raut, grilování i servis. Profesionalita od kuchařů až po dámy ze servisu na špičkové úrovni. Předčili naše očekávání. Budeme vás všude doporučovat!",
    jmeno: "Ondřej T.",
    akce: "Svatba",
  },
];

export default function Page() {
  return (
    <main className="ff">
      <header className="ff-top">
        <a className="ff-wordmark" href="#" aria-label="Food Factory Olomouc">
          <span className="ff-wordmark-food">FOOD</span>
          <span className="ff-wordmark-factory">FACTORY</span>
          <span className="ff-wordmark-city">Olomouc</span>
        </a>
        <a className="ff-toplink" href="tel:+420608614164">
          +420 608 614 164
        </a>
      </header>

      <section className="ff-hero">
        <div className="ff-hero-media">
          <img
            src="/hero.webp"
            alt="Slavnostně naservírovaný raut od Food Factory Olomouc"
            className="ff-hero-img"
          />
        </div>
        <div className="ff-hero-copy">
          <p className="ff-eyebrow">Catering · svatby &amp; firemní akce · Olomouc</p>
          <h1 className="ff-hero-title">
            Vy si užijete den.
            <br />
            <span className="ff-hero-em">My vyřešíme vše ostatní.</span>
          </h1>
          <p className="ff-hero-lede">
            Postaráme se o catering od A do Z — od návrhu menu až po poslední
            uklizený talíř. Vaří se čerstvě na místě, obsluha zůstává až do noci.
          </p>
          <div className="ff-hero-actions">
            <a className="ff-btn ff-btn-primary" href="tel:+420608614164">
              Získat nabídku do 24 h
            </a>
            <a className="ff-btn ff-btn-ghost" href="#servis">
              Jak to probíhá
            </a>
          </div>
          <dl className="ff-facts">
            <div>
              <dt>Kde vaříme</dt>
              <dd>Olomouc a okolí</dd>
            </div>
            <div>
              <dt>Dostupnost</dt>
              <dd>Po–Ne 8–20</dd>
            </div>
            <div>
              <dt>Nabídka do</dt>
              <dd>24 hodin</dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="ff-servis" id="servis" aria-labelledby="servis-nadpis">
        <div className="ff-section-head">
          <p className="ff-eyebrow ff-eyebrow-dark">Od návrhu po úklid</p>
          <h2 id="servis-nadpis" className="ff-h2">
            Catering není jen o jídle. Je o organizaci, načasování a detailech.
          </h2>
          <p className="ff-section-lede">
            Ať plánujete svatbu, firemní večírek nebo konferenci, zapojíme se do
            celého procesu, aby vše fungovalo hladce.
          </p>
        </div>

        <ol className="ff-steps">
          {menu.map((m) => (
            <li className="ff-step" key={m.krok}>
              <span className="ff-step-num" aria-hidden="true">
                {m.krok}
              </span>
              <div className="ff-step-body">
                <h3 className="ff-step-title">{m.nadpis}</h3>
                <p className="ff-step-text">{m.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="ff-trust" aria-labelledby="trust-nadpis">
        <div className="ff-trust-media">
          <img
            src="/section-2.webp"
            alt="Tým Food Factory při přípravě jídla na akci"
            className="ff-trust-img"
          />
        </div>
        <div className="ff-trust-copy">
          <p className="ff-eyebrow ff-eyebrow-dark">Co říkají klienti</p>
          <h2 id="trust-nadpis" className="ff-h2">
            Důvěra je pro nás víc než reklama.
          </h2>
          <p className="ff-section-lede">
            Většina zakázek přichází z doporučení hostů, kteří naše jídlo a
            obsluhu zažili na cizí svatbě. To je pro nás ta nejlepší vizitka.
          </p>

          <ul className="ff-quotes">
            {reference.map((r, i) => (
              <li className="ff-quote" key={i}>
                <p className="ff-quote-text">{r.text}</p>
                <p className="ff-quote-meta">
                  <span className="ff-quote-name">{r.jmeno}</span>
                  <span className="ff-quote-tag">{r.akce}</span>
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
