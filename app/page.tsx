import type { ReactNode } from "react";

const board: { time: string; what: string; note: string }[] = [
  { time: "TEĎ", what: "Bestsellery a novinky", note: "regál hned u vchodu" },
  { time: "TEĎ", what: "Dárek a suvenýr z Plzně", note: "na cestu i domů" },
  { time: "TEĎ", what: "Knihy v angličtině", note: "na dlouhou trať" },
  { time: "DENNĚ", what: "Osobní odběr z e-shopu", note: "vyzvednete cestou" },
  { time: "TIP", what: "Nevíte, co číst?", note: "poradíme podle nálady" },
];

export default function Page(): ReactNode {
  return (
    <main>
      <header className="masthead">
        <a className="wordmark" href="#" aria-label="Knihy Dobrovský, Plzeň hlavní nádraží">
          <span className="wm-num" aria-hidden="true">1</span>
          <span className="wm-stack">
            <span className="wm-a">Knihy</span>
            <span className="wm-b">Dobrovský</span>
          </span>
        </a>
        <span className="masthead-loc">
          <span className="dot" aria-hidden="true" />
          Plzeň · hlavní nádraží
        </span>
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <img
          className="hero-img"
          src="/hero.webp"
          alt="Knihkupectví Dobrovský v odbavovací hale plzeňského hlavního nádraží"
          width={1600}
          height={1000}
          fetchPriority="high"
        />
        <div className="hero-veil" aria-hidden="true" />
        <div className="hero-inner">
          <p className="eyebrow anim a1">Nástupiště&nbsp;1 · odbavovací hala · knihkupectví</p>
          <h1 id="hero-title" className="hero-title anim a2">
            Ještě knihu,<br />
            než vám <em>ujede vlak</em>.
          </h1>
          <p className="hero-lead anim a3">
            Malé knihkupectví Dobrovský stojí přímo v hale plzeňského hlavního nádraží,
            pod stoletými stukovými stropy. Vyberete si bestseller na cestu, dárek i suvenýr
            z Plzně — a knihu z e-shopu vyzvednete cestou k nástupišti.
          </p>
          <div className="hero-actions anim a4">
            <a className="btn btn-signal" href="#kudy">Kudy k nám</a>
            <span className="open-now">
              <span className="pulse" aria-hidden="true" />
              Otevřeno · dnes do 19:00
            </span>
          </div>
        </div>
      </section>

      <section className="board-section" aria-labelledby="board-title">
        <div className="wrap">
          <div className="section-head">
            <span className="tab-eyebrow">Odjezdová tabule</span>
            <h2 id="board-title">Co si u nás vezmete na cestu</h2>
            <p>
              Nádraží má svou odjezdovou tabuli — my taky. Jen místo vlaků vypravujeme
              příběhy. Zastavte se cestou k nástupišti a odjeďte s dobrou knihou.
            </p>
          </div>

          <div className="board" role="table" aria-label="Nabídka prodejny">
            <div className="board-top" aria-hidden="true">
              <span className="led" />
              <span className="board-brand">DOBROVSKÝ · PLZEŇ HL. N.</span>
            </div>
            <div className="board-headrow" role="row">
              <span role="columnheader">Odjezd</span>
              <span role="columnheader">Titul / zboží</span>
              <span role="columnheader">Kde</span>
            </div>
            <ul className="board-rows">
              {board.map((r, i) => (
                <li className="row" role="row" key={r.what} style={{ animationDelay: `${0.08 * i}s` }}>
                  <span className="cell-time" role="cell">{r.time}</span>
                  <span className="cell-what" role="cell">{r.what}</span>
                  <span className="cell-note" role="cell">{r.note}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="about" id="kudy" aria-labelledby="about-title">
        <div className="wrap about-grid">
          <div className="about-copy">
            <span className="tab-eyebrow tab-dark">O prodejně</span>
            <h2 id="about-title">Maličká prodejna ve sto let starém nádraží</h2>
            <p>
              Plzeňské hlavní nádraží slouží cestujícím od roku 1862 a patří k architektonickým
              skvostům města. Naše knihkupectví najdete přímo v jeho chráněné budově, pod krásnými
              stukovými stropy — pár kroků od pokladen a nástupišť.
            </p>
            <p>
              Prodejna je sice maličká, ale schválně nabitá těmi nejžádanějšími bestsellery,
              dárkovým sortimentem i suvenýry z Plzně. Co nemáme na regále, rádi objednáme — a knihu
              z e-shopu si u nás vyzvednete osobně, cestou na vlak.
            </p>
          </div>
          <figure className="about-fig">
            <img
              src="/section-1.webp"
              alt="Interiér prodejny Knihy Dobrovský se stukovým stropem a regály knih"
              width={1200}
              height={1000}
              loading="lazy"
            />
          </figure>
        </div>

        <div className="wrap info-grid">
          <div className="info-card hours">
            <h3>Otevírací doba</h3>
            <ul className="hours-list">
              <li>
                <span className="day">Pondělí – neděle</span>
                <span className="leaddots" aria-hidden="true" />
                <span className="time mono">08:00–12:00 · 13:00–19:00</span>
              </li>
            </ul>
            <p className="note">Otevřeno každý den, včetně víkendů a svátků.</p>
          </div>

          <div className="info-card find">
            <h3>Kde nás najdete</h3>
            <address className="addr">
              Nádražní 102/9<br />
              326&nbsp;00 Plzeň
            </address>
            <p className="contact">
              <a href="tel:+420542220320">542&nbsp;220&nbsp;320</a>
              <a href="mailto:poradime@knihydobrovsky.cz">poradime@knihydobrovsky.cz</a>
            </p>
            <figure className="find-fig">
              <img
                src="/section-2.webp"
                alt="Budova plzeňského hlavního nádraží, kde sídlí knihkupectví Dobrovský"
                width={1200}
                height={800}
                loading="lazy"
              />
            </figure>
          </div>
        </div>
      </section>
    </main>
  );
}
