import type { ReactNode } from "react";

export default function Page() {
  return (
    <main className="pv">
      {/* ─────────── HERO ─────────── */}
      <header className="pv-top">
        <div className="pv-wrap pv-top__row">
          <a className="pv-mark" href="#" aria-label="ELROsystem — úvod">
            <span className="pv-mark__sun" aria-hidden="true" />
            <span className="pv-mark__word">
              ELRO<span className="pv-mark__accent">system</span>
            </span>
          </a>
          <nav className="pv-nav" aria-label="Hlavní">
            <a href="#nabidka">Sestavy</a>
            <a href="#duvera">O nás</a>
            <a className="pv-nav__call" href="tel:+420608060093">
              +420 608 060 093
            </a>
          </nav>
        </div>
      </header>

      <section className="pv-hero" aria-labelledby="hero-h">
        <img
          className="pv-hero__img"
          src="/hero.webp"
          alt="Fotovoltaické panely na střeše rodinného domu v okolí Olomouce"
          width={1600}
          height={1000}
        />
        <div className="pv-hero__panel">
          <p className="pv-eyebrow">
            <span className="pv-eyebrow__dot" aria-hidden="true" /> Olomoucký kraj · od roku 2008
          </p>
          <h1 id="hero-h" className="pv-hero__h">
            Ze střechy&nbsp;<span className="pv-hl">elektřina</span>,<br />
            z faktury&nbsp;úspora.
          </h1>
          <p className="pv-hero__lead">
            Navrhneme, vyřídíme dotaci a nainstalujeme fotovoltaiku na klíč —
            pro rodinné domy i firmy do 50&nbsp;kWp. Montáž rodinné elektrárny
            zvládneme do tří dnů.
          </p>
          <div className="pv-hero__cta">
            <a className="pv-btn" href="tel:+420608060093">Zavolat a poradit se</a>
            <a className="pv-btn pv-btn--ghost" href="#nabidka">Prohlédnout sestavy</a>
          </div>

          {/* orbit of live numbers — the signature */}
          <dl className="pv-meter" aria-label="Výkonnost typické domácí sestavy">
            <div className="pv-meter__cell">
              <dt>Roční výroba</dt>
              <dd>
                <span className="pv-meter__num">7,65</span>
                <span className="pv-meter__unit">kWp</span>
              </dd>
            </div>
            <div className="pv-meter__cell">
              <dt>Montáž do</dt>
              <dd>
                <span className="pv-meter__num">3</span>
                <span className="pv-meter__unit">dnů</span>
              </dd>
            </div>
            <div className="pv-meter__cell">
              <dt>Návratnost</dt>
              <dd>
                <span className="pv-meter__num">3–4</span>
                <span className="pv-meter__unit">roky</span>
              </dd>
            </div>
          </dl>
        </div>
      </section>

      {/* ─────────── NABÍDKA / SESTAVY ─────────── */}
      <section className="pv-sec" id="nabidka" aria-labelledby="nab-h">
        <div className="pv-wrap">
          <div className="pv-sec__head">
            <p className="pv-eyebrow">
              <span className="pv-eyebrow__dot" aria-hidden="true" /> Sestavy na klíč
            </p>
            <h2 id="nab-h" className="pv-sec__h">
              Tři domácí sestavy — od panelu&nbsp;po baterii
            </h2>
            <p className="pv-sec__lead">
              Panely AIKO TIER&nbsp;1 s nejvyšší požární odolností a zárukou
              30&nbsp;let, střídač Solax se zálohou při výpadku a bateriové
              úložiště. Ceny už po odečtení dotace 140&nbsp;000&nbsp;Kč.
            </p>
          </div>

          <ul className="pv-cards">
            {SESTAVY.map((s, i) => (
              <li className="pv-card" key={s.grade}>
                <div className="pv-card__top">
                  <span className="pv-card__grade" aria-hidden="true">
                    {s.grade}
                  </span>
                  <span className="pv-card__idx">{String(i + 1).padStart(2, "0")}</span>
                </div>
                <p className="pv-card__power">
                  {s.power}
                  <span className="pv-card__punit"> kWp</span>
                </p>
                <ul className="pv-spec">
                  <li><span>Panely</span><b>{s.panels} ks · 450 W</b></li>
                  <li><span>Baterie</span><b>{s.battery}</b></li>
                  <li><span>Záloha při výpadku</span><b>Ano</b></li>
                </ul>
                <div className="pv-card__price">
                  <span className="pv-card__after">{s.after}</span>
                  <span className="pv-card__note">
                    po dotaci · celkem {s.total}
                  </span>
                </div>
              </li>
            ))}
          </ul>

          <div className="pv-strip" role="list">
            {STRIP.map((x) => (
              <div className="pv-strip__item" role="listitem" key={x.t}>
                <span className="pv-strip__t">{x.t}</span>
                <span className="pv-strip__d">{x.d}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────── DŮVĚRA / O NÁS ─────────── */}
      <section className="pv-sec pv-sec--split" id="duvera" aria-labelledby="duv-h">
        <div className="pv-wrap pv-split">
          <div className="pv-split__media">
            <img
              src="/section-1.webp"
              alt="Technik ELROsystem při instalaci fotovoltaické elektrárny"
              width={900}
              height={1100}
            />
            <img
              className="pv-split__media2"
              src="/section-2.webp"
              alt="Detail solárního panelu a měniče Solax"
              width={700}
              height={520}
            />
          </div>

          <div className="pv-split__text">
            <p className="pv-eyebrow">
              <span className="pv-eyebrow__dot" aria-hidden="true" /> Proč ELROsystem
            </p>
            <h2 id="duv-h" className="pv-sec__h">
              Patnáct let na střechách,<br />druhé místo v kraji
            </h2>
            <p className="pv-sec__lead">
              Za realizace fotovoltaiky jsme v roce 2024 obsadili 2.&nbsp;místo
              v Olomouckém kraji. Držíme certifikát ISO&nbsp;9001, panely
              montujeme s vlastními techniky a dotaci vyřídíme za vás.
            </p>

            <ul className="pv-facts">
              {FACTS.map((f) => (
                <li key={f.k}>
                  <b className="pv-facts__k">{f.k}</b>
                  <span className="pv-facts__v">{f.v}</span>
                </li>
              ))}
            </ul>

            <blockquote className="pv-quote">
              „Chceme, aby energetika patřila lidem — proto stavíme i komunitní
              elektrárny pro města a obce.“
              <cite>Tomáš Štopl, jednatel</cite>
            </blockquote>
          </div>
        </div>
      </section>
    </main>
  );
}

const SESTAVY: { grade: string; power: string; panels: number; battery: string; after: string; total: string }[] = [
  { grade: "A+", power: "5,4", panels: 12, battery: "Triple 11,6 kWh", after: "159 000 Kč", total: "299 000 Kč" },
  { grade: "A++", power: "7,65", panels: 17, battery: "Triple 11,6 kWh", after: "186 000 Kč", total: "326 000 Kč" },
  { grade: "A+++", power: "9,9", panels: 22, battery: "Triple 11,6 kWh", after: "208 000 Kč", total: "348 000 Kč" },
];

const STRIP: { t: string; d: string }[] = [
  { t: "Dotace do 140 000 Kč", d: "Garantované vyřízení za vás" },
  { t: "Bez stavebního povolení", d: "U instalací do 50 kWp" },
  { t: "Záloha jen 5 %", d: "Zbytek až po montáži" },
  { t: "Vlastní FVE do 2 měsíců", d: "Od podpisu po zapojení" },
];

const FACTS: { k: string; v: string }[] = [
  { k: "2008", v: "Na trhu od tohoto roku" },
  { k: "ISO 9001", v: "Certifikovaná kvalita" },
  { k: "5,0 / 5", v: "Hodnocení na Googlu" },
  { k: "Tisíce", v: "Nainstalovaných panelů" },
];

const _unused: ReactNode = null;
void _unused;
