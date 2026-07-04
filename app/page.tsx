import type { CSSProperties } from "react";

const services = [
  {
    id: "01",
    name: "Kompletní rekonstrukce koupelny",
    body: "Od bourání staré koupelny přes rozvody vody a odpadu až po poslední spárovaný obklad. Jeden tým, jeden termín, jedna zodpovědnost — nemusíte shánět zvlášť instalatéra, obkladače a topenáře.",
    tag: "Klíčová služba",
  },
  {
    id: "02",
    name: "Obklady a dlažba",
    body: "Precizní pokládka velkoformátových obkladů, mozaiky i dlažby. Rovné spáry, správný spád ve sprše, čisté rohy. Detail, který uvidíte každé ráno.",
    tag: "Řemeslo",
  },
  {
    id: "03",
    name: "Sprchové kouty a vany",
    body: "Montáž van, sprchových koutů a zápustných odtoků. Utěsníme tak, aby voda tekla jen tam, kam má — a soused pod vámi o vaší sprše nevěděl.",
    tag: "Instalace",
  },
  {
    id: "04",
    name: "Rozvody vody, odpadů a topení",
    body: "Nové rozvody vody i odpadu, podlahové vytápění, výměna radiátorů. Základ, který schováme do zdi — a proto ho musíme udělat pořádně.",
    tag: "Skrytá práce",
  },
];

const steps = [
  { k: "Před", v: "Zaměření u vás doma a pevná cenová nabídka, ve které se vyznáte." },
  { k: "Bourání", v: "Vyklidíme starou koupelnu, odvezeme suť, chráníme byt před prachem." },
  { k: "Rozvody", v: "Nová voda, odpady a elektro pro budoucí zásuvky a světla." },
  { k: "Obklad", v: "Izolace, obklady a dlažba, spárování — srdce celé koupelny." },
  { k: "Osazení", v: "Vana, sprcha, umyvadlo, baterie, WC. Koupelna dostává tvar." },
  { k: "Předání", v: "Uklidíme po sobě. Předáme hotovou koupelnu připravenou k použití." },
];

export default function Page() {
  return (
    <main className="io-page">
      <header className="io-topbar">
        <a className="io-wordmark" href="#top" aria-label="Insta-on, rekonstrukce koupelen Brno">
          <span className="io-wordmark__insta">insta</span>
          <span className="io-wordmark__dash" aria-hidden="true" />
          <span className="io-wordmark__on">on</span>
        </a>
        <nav className="io-nav" aria-label="Hlavní navigace">
          <a href="#sluzby">Co uděláme</a>
          <a href="#postup">Jak to probíhá</a>
          <a className="io-nav__call" href="tel:+420720620006">720&nbsp;620&nbsp;006</a>
        </nav>
      </header>

      <section className="io-hero" id="top">
        <div className="io-hero__grid" aria-hidden="true">
          {Array.from({ length: 96 }).map((_, i) => (
            <span
              key={i}
              className="io-tile"
              style={{ ["--i" as keyof CSSProperties]: String(i) } as CSSProperties}
            />
          ))}
        </div>

        <div className="io-hero__inner">
          <p className="io-eyebrow">Rekonstrukce koupelen · Brno a okolí</p>
          <h1 className="io-title">
            <span className="io-title__line">Stará koupelna</span>
            <span className="io-title__line io-title__accent">za&nbsp;obklad</span>
            <span className="io-title__line">novou.</span>
          </h1>
          <p className="io-lede">
            Vybouráme, rozvedeme vodu a topení, obložíme, osadíme vanu i sprchu —
            a uklidíme po sobě. Jeden brněnský tým od prvního zaměření
            po první sprchu.
          </p>
          <div className="io-hero__cta">
            <a className="io-btn io-btn--solid" href="tel:+420720620006">
              Zavolat 720&nbsp;620&nbsp;006
            </a>
            <a className="io-btn io-btn--ghost" href="#sluzby">
              Podívat se, co uděláme
            </a>
          </div>

          <dl className="io-facts">
            <div>
              <dt>V oboru</dt>
              <dd>10+ let</dd>
            </div>
            <div>
              <dt>Působíme</dt>
              <dd>Brno &amp; okolí</dd>
            </div>
            <div>
              <dt>Pevná cena</dt>
              <dd>před startem</dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="io-services" id="sluzby" aria-labelledby="sluzby-h">
        <div className="io-section-head">
          <p className="io-eyebrow io-eyebrow--dark">Co u vás uděláme</p>
          <h2 id="sluzby-h">
            Celá koupelna z&nbsp;jedněch rukou — od&nbsp;rozvodů ve zdi po spáru,
            kterou vidíte.
          </h2>
        </div>

        <ul className="io-cards">
          {services.map((s) => (
            <li key={s.id} className="io-card">
              <span className="io-card__num" aria-hidden="true">
                {s.id}
              </span>
              <span className="io-card__tag">{s.tag}</span>
              <h3 className="io-card__title">{s.name}</h3>
              <p className="io-card__body">{s.body}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="io-trust" id="postup" aria-labelledby="postup-h">
        <div className="io-trust__grid">
          <div className="io-trust__intro">
            <p className="io-eyebrow">Jak to u vás probíhá</p>
            <h2 id="postup-h">
              Šest kroků od&nbsp;vybourané koupelny k&nbsp;hotové.
            </h2>
            <p className="io-trust__text">
              Jsme mladá brněnská firma s&nbsp;praxí v&nbsp;oboru přes deset let.
              Rekonstrukci koupelny nechystáte každý rok — proto chceme, abyste
              dopředu věděli, co se kdy děje a kolik to bude stát. Držíme slovo
              i&nbsp;termín a po sobě uklízíme.
            </p>
            <a className="io-btn io-btn--solid" href="mailto:info@insta-on.cz">
              Napsat na info@insta-on.cz
            </a>
          </div>

          <ol className="io-steps">
            {steps.map((step, i) => (
              <li key={step.k} className="io-step">
                <span className="io-step__num">{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <h3 className="io-step__k">{step.k}</h3>
                  <p className="io-step__v">{step.v}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </main>
  );
}
