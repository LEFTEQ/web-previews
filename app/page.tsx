import { AiImage } from "./_ui";

const offerTypes = [
  "Vyhlídkové lety",
  "Romantické lety",
  "Adrenalinové lety",
  "Pilotem na zkoušku",
  "Stíhačka MIG‑15",
];

const stops = [
  {
    no: "01",
    fl: "FL 015",
    place: "Hradec Králové a okolí",
    heli: "Robinson R44",
    price: "2 790",
    note: "Vzlet z domovské základny nad věže Bílé a Černé věže a soutok Labe s Orlicí.",
  },
  {
    no: "02",
    fl: "FL 012",
    place: "Karlštejn",
    heli: "Robinson R44",
    price: "2 090",
    note: "Přelet nad jedním z nejznámějších hradů v Čechách — a nad údolím Berounky.",
  },
  {
    no: "03",
    fl: "FL 010",
    place: "Velká Amerika",
    heli: "Robinson R44",
    price: "1 890",
    note: "Zatopené vápencové lomy, kterým se říká český Grand Canyon, shora.",
  },
  {
    no: "04",
    fl: "FL 022",
    place: "Sněžka a Krkonoše",
    heli: "Robinson R44",
    price: "2 390",
    note: "Nejvyšší hora Česka z ptačí perspektivy, hřebeny a bouda na dosah.",
  },
];

const trust = [
  { k: "21 let", v: "zkušeností za kniplem i v přípravě letových dnů" },
  { k: "400+ míst", v: "nad kterými létáme po celé České republice" },
  { k: "50 památek", v: "hradů, měst a přírodních divů v nabídce" },
];

const reviews = [
  {
    name: "David Seckar",
    text: "Let mohu doporučit každému, kdo chce vidět kraj z výšky jinak než z rozhledny. Skvělý pocit.",
  },
  {
    name: "Jindřich Sládek",
    text: "Všechno bylo jak má být: profesionální jednání, příjemný zážitek a perfektní organizace.",
  },
  {
    name: "Milan Trpík",
    text: "Objednávka proběhla bez problémů, sedm dní předem přišel e‑mail s instrukcemi. Doporučuji.",
  },
];

export default function Page() {
  return (
    <main>
      {/* TOP BAR */}
      <div className="topbar">
        <a className="wordmark" href="#" aria-label="For Free Days — úvod">
          <span className="wm-a">FOR</span>
          <span className="wm-b">FREE</span>
          <span className="wm-c">DAYS</span>
        </a>
        <nav className="topnav" aria-label="Hlavní">
          <a href="#nabidka">Nabídka letů</a>
          <a href="#onas">O nás</a>
          <a className="tel" href="tel:+420777111222">+420 777 111 222</a>
        </nav>
      </div>

      {/* HERO */}
      <header className="hero">
        <div className="hero-media">
          <AiImage src="/hero.webp" alt="Pohled z vrtulníku Robinson R44 na krajinu východních Čech" className="hero-img" />
          <div className="hero-scrim" aria-hidden="true" />
          <div className="hero-horizon" aria-hidden="true" />
        </div>

        {/* instrument altitude scale */}
        <div className="altscale" aria-hidden="true">
          <span>FL 020</span>
          <span>FL 015</span>
          <span className="lit">FL 010</span>
          <span>FL 005</span>
        </div>

        <div className="hero-body">
          <p className="eyebrow">Cestovní kancelář · Hradec Králové</p>
          <h1>
            Zažijte svět<br />
            <span className="hl">z výšky.</span>
          </h1>
          <p className="lead">
            Vyhlídkové lety vrtulníkem nad městy i památkami — nejširší nabídka
            vrtulníkových zážitků v ČR, jako dárkový poukaz i termín na míru.
          </p>
          <div className="hero-actions">
            <a className="btn" href="#nabidka">Zobrazit nabídku letů</a>
            <a className="btn-ghost" href="#onas">Jak to probíhá</a>
          </div>
          <dl className="hero-stats">
            <div><dt>400+</dt><dd>míst po celé ČR</dd></div>
            <div><dt>50</dt><dd>památek shora</dd></div>
            <div><dt>21</dt><dd>let za kniplem</dd></div>
          </dl>
        </div>
      </header>

      {/* HORIZON DIVIDER */}
      <div className="horizon" role="presentation">
        <span className="horizon-tag">Horizont 07° · vyrovnáno</span>
      </div>

      {/* SECTION 1 — NABÍDKA / FLIGHT PATH */}
      <section className="section" id="nabidka" aria-labelledby="nabidka-h">
        <div className="section-head">
          <p className="eyebrow">Trasa · plán letu</p>
          <h2 id="nabidka-h">Vyberte si zastávku na mapě</h2>
          <p className="section-sub">
            Sledujte plotu trasy dolů — každý waypoint je jedna z nabídek. Ceny jsou
            „od“, za soukromý let vrtulníkem Robinson R44 pro celou posádku.
          </p>
          <ul className="chips" aria-label="Typy letů">
            {offerTypes.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        </div>

        <div className="section-media">
          <AiImage src="/section-1.webp" alt="Vrtulník Robinson R44 nad českou krajinou" className="wide-img" />
        </div>

        <div className="route">
          <svg className="route-line" viewBox="0 0 40 1000" preserveAspectRatio="none" aria-hidden="true">
            <path
              className="route-path"
              pathLength={1}
              d="M20 0 C 32 120, 8 240, 20 360 C 30 470, 10 600, 20 720 C 28 820, 12 920, 20 1000"
            />
          </svg>

          <ol className="stops">
            {stops.map((s) => (
              <li className="stop" key={s.no}>
                <p className="waypoint">
                  <span className="wp-fl">{s.fl}</span>
                  <span className="wp-name">{s.place}</span>
                </p>
                <article className="card">
                  <span className="card-no" aria-hidden="true">{s.no}</span>
                  <div className="card-main">
                    <h3>{s.place}</h3>
                    <p className="card-heli">{s.heli}</p>
                    <p className="card-note">{s.note}</p>
                  </div>
                  <div className="card-price">
                    <span className="pf">od</span>
                    <span className="pn">{s.price}</span>
                    <span className="pc">Kč</span>
                    <a className="card-cta" href="#nabidka">Vybrat termín</a>
                  </div>
                </article>
              </li>
            ))}
          </ol>
        </div>

        <p className="custom-line">
          Nenašli jste svou zastávku? <a href="#onas">Sestavíme let na míru</a> — nad
          vaším městem nebo místem, které vám něco znamená.
        </p>
      </section>

      {/* HORIZON DIVIDER */}
      <div className="horizon horizon--alt" role="presentation">
        <span className="horizon-tag">Klesání · přistání na základně HK</span>
      </div>

      {/* SECTION 2 — O NÁS / DŮVĚRA */}
      <section className="section trust" id="onas" aria-labelledby="onas-h">
        <div className="trust-grid">
          <div className="trust-copy">
            <p className="eyebrow">O nás · záznam letu</p>
            <h2 id="onas-h">21 let v oblacích nad Hradcem Králové</h2>
            <p className="section-sub">
              Jsme certifikovaní dodavatelé zážitků. Za námi stojí desetitisíce
              klientů, kteří s námi vzlétli — a tým, který si zakládá na
              individuálním přístupu ke každému letu, od prvního e‑mailu po přistání.
            </p>
            <dl className="trust-stats">
              {trust.map((t) => (
                <div key={t.k}>
                  <dt>{t.k}</dt>
                  <dd>{t.v}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="trust-media">
            <AiImage src="/section-2.webp" alt="Posádka a vrtulník připravený ke vzletu" className="trust-img" />
          </div>
        </div>

        <div className="reviews">
          <h3 className="reviews-h">Kdo s námi letěl</h3>
          <ul className="review-list">
            {reviews.map((r) => (
              <li className="review" key={r.name}>
                <p className="review-text">„{r.text}“</p>
                <p className="review-name">{r.name}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
