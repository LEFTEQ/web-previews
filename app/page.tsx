import { AiImage } from "./_ui";

type CSSVars = React.CSSProperties & Record<string, string>;

const steps = [
  {
    n: "01",
    tone: "tone--slate",
    title: "Demontáž a odvoz",
    body: "Starou koupelnu zbouráme, suť odvezeme. Byt zakryjeme a chráníme — bydlí se tu dál.",
  },
  {
    n: "02",
    tone: "tone--teal",
    title: "Rozvody a odpady",
    body: "Nové trubky vody a odpady vedeme přesně tam, kde je budete potřebovat. Nic se nepřidělává potom.",
  },
  {
    n: "03",
    tone: "tone--bone",
    title: "Hydroizolace a spád",
    body: "Sprchu i podlahu chráníme stěrkovou izolací a vyspádujeme k vpusti. Voda nemá kudy uniknout.",
  },
  {
    n: "04",
    tone: "tone--teal",
    title: "Obklady a dlažba",
    body: "Řezy plánujeme dopředu, spáry lícujeme na milimetr. Rovina na vodováhu, bez kompromisů.",
  },
  {
    n: "05",
    tone: "tone--slate",
    title: "Osazení zařízení",
    body: "Vanička, baterie, umyvadlo i závěsné WC od značek, které vydrží roky každodenního provozu.",
  },
  {
    n: "06",
    tone: "tone--bone",
    title: "Spárování a předání",
    body: "Zaspárujeme, zasilikonujeme, uklidíme a předáme hotovou koupelnu připravenou k užívání.",
  },
];

const trust = [
  "Jeden tým od demolice po úklid — žádné subdodavatelské výmluvy.",
  "Pevný termín i cena předem, v písemné nabídce.",
  "Materiály, které pod obklady vydrží — ne to nejlevnější z regálu.",
  "Fotky z rozdělané práce vám posíláme průběžně.",
];

export default function Page() {
  return (
    <main className="page">
      {/* HERO — the wall, laid tile by tile */}
      <section className="section hero" aria-labelledby="hero-title">
        <div className="wall hero__wall">
          <div className="tile tone--bone hero__brand" style={{ "--d": "60ms" } as CSSVars}>
            <p className="eyebrow">Rekonstrukce koupelen · Brno</p>
            <p className="wordmark">
              JELOSTAV<span className="wordmark__sfx">s.r.o.</span>
            </p>
            <p className="wordmark__tag">koupelny na klíč</p>
          </div>

          <div className="tile tile--photo hero__photo" style={{ "--d": "200ms" } as CSSVars}>
            <AiImage
              className="media"
              src="/hero.webp"
              alt="Hotová obložená koupelna s velkoformátovou dlažbou a sprchovým koutem"
            />
          </div>

          <div className="tile tone--teal hero__cta" style={{ "--d": "320ms" } as CSSVars}>
            <p className="hero__cta-note">Domluvme si zaměření zdarma.</p>
            <div className="btns">
              <a className="btn btn--brass" href="tel:+420777111222">Zavolat 777 111 222</a>
              <a className="btn btn--ghost" href="mailto:info@example.cz">Napsat e-mail</a>
            </div>
          </div>

          <div className="tile tone--slate hero__lead" style={{ "--d": "440ms" } as CSSVars}>
            <h1 id="hero-title" className="hero__title">
              Koupelna položená<br />na&nbsp;milimetr přesně.
            </h1>
            <p className="hero__sub">
              Kompletní rekonstrukce koupelen v Brně a okolí — od vybourání té staré po
              poslední spáru. Vy si vyberete obklady, my zařídíme zbytek.
            </p>
          </div>

          <div className="tile tone--brass hero__stat" style={{ "--d": "560ms" } as CSSVars}>
            <p className="stat__num">3–4 týdny</p>
            <p className="stat__label">běžná koupelna od&nbsp;demolice po&nbsp;sprchu</p>
          </div>
        </div>
      </section>

      {/* Spirit-level marker on the grout line */}
      <div className="level" aria-hidden="true">
        <div className="level__vial">
          <span className="level__bubble" />
        </div>
        <span className="level__label">na vodováhu</span>
      </div>

      {/* SECTION 1 — the sequence of a bathroom renovation */}
      <section className="section" aria-labelledby="proc-title">
        <div className="wrap">
          <p className="eyebrow eyebrow--dark">Co obnáší koupelna na klíč</p>
          <h2 id="proc-title" className="section__title">
            Šest kroků, jeden termín
          </h2>
          <p className="section__intro">
            Rekonstrukce jde v pořadí, které se nedá přeskočit. Držíme ho a hlídáme, aby na
            sebe řemesla navazovala — proto koupelnu předáme, kdy jsme řekli.
          </p>

          <div className="wall grid-3">
            {steps.map((s) => (
              <article key={s.n} className={`tile step ${s.tone}`}>
                <span className="step__n">{s.n}</span>
                <h3 className="step__title">{s.title}</h3>
                <p className="step__body">{s.body}</p>
              </article>
            ))}
            <div className="tile tile--photo tile--wide reveal">
              <AiImage
                className="media"
                src="/section-1.webp"
                alt="Detail obkladu s přesně lícovanými spárami během pokládky"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 — trust / o nás */}
      <section className="section section--dark" aria-labelledby="trust-title">
        <div className="wrap">
          <p className="eyebrow">Proč lidé v Brně volají nám</p>
          <h2 id="trust-title" className="section__title section__title--light">
            Řemeslo, které je vidět ve&nbsp;spárách
          </h2>

          <div className="wall trust__wall">
            <div className="tile tile--photo trust__photo reveal">
              <AiImage
                className="media"
                src="/section-2.webp"
                alt="Světlá koupelna po rekonstrukci s obkladem od podlahy ke stropu"
              />
            </div>

            <div className="tile tone--bone trust__list">
              <ul className="checks">
                {trust.map((t) => (
                  <li key={t} className="checks__item">{t}</li>
                ))}
              </ul>
            </div>

            <div className="tile tone--brass trust__local">
              <p className="local__head">Působíme v&nbsp;Brně</p>
              <p className="local__body">
                a do 30&nbsp;km okolo — Kuřim, Šlapanice, Modřice, Blansko. Přijedeme zaměřit,
                poradit a spočítat cenu na místě.
              </p>
              <p className="local__addr">Ukázková 123, Brno</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
