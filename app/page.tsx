import { RecClock, DepthReadout } from "./motion";

const services = [
  {
    code: "TLAK · DN50–800",
    name: "Tlakové čištění potrubí",
    body: "Vysokotlaký vůz protlačí i zatvrdlé nánosy tuků, kalu a písku. Čistíme vnitřní i venkovní rozvody v profilech DN 50 až DN 800 — bez zbytečných rozkopávek.",
  },
  {
    code: "CCTV · PROTOKOL",
    name: "Revize kanalizace kamerou",
    body: "Kamerový crawler projede potrubím a ukáže praskliny, prosedliny i prorůstající kořeny. Dostanete videozáznam a protokol s přesným místem a hloubkou závady.",
    star: true,
  },
  {
    code: "SÁNÍ · LAPOLY",
    name: "Vývoz jímek a lapolů",
    body: "Sacím bagrem odčerpáme jímky, ropné lapoly i tukové lapače u myček a gastro provozů. Odpad převezeme a předáme k ekologické likvidaci.",
  },
  {
    code: "NONSTOP · HAVÁRIE",
    name: "Havarijní výjezd NONSTOP",
    body: "Ucpaný odpad nepočká. Dispečink bereme ve dne i v noci a vyjíždíme po celé Praze a Čechách — o víkendu i o svátcích.",
  },
];

const protocol = [
  ["LOKALITA", "Praha a Čechy, výjezd i mimo město"],
  ["DOSTUPNOST", "Dispečink NONSTOP, včetně víkendů"],
  ["ROZSAH", "DN 50 – DN 800, vnitřní i venkovní"],
  ["TECHNIKA", "vysokotlaké vozy, sací bagr, kamerový systém"],
  ["VÝSTUP", "videozáznam + revizní protokol"],
];

export default function Page() {
  return (
    <main className="page">
      <div className="boot" aria-hidden="true" />

      <header className="masthead">
        <a className="brand" href="#top" id="top">
          <span className="brand__ring" aria-hidden="true" />
          <span className="brand__text">
            <span className="brand__name">STOCK</span>
            <span className="brand__sub">čistící služby · kanalizace</span>
          </span>
        </a>
        <span className="masthead__code">CCTV&nbsp;·&nbsp;PRAHA</span>
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero__lede">
          <p className="eyebrow">Kamerový průzkum &amp; čištění kanalizace · Praha</p>
          <h1 className="hero__title" id="hero-title">
            <span>REVIZE</span>
            <span>KANALIZACE</span>
            <span className="hero__title--accent">KAMEROVÝM</span>
            <span>SYSTÉMEM</span>
          </h1>
          <p className="hero__sub">
            Než začneme čistit, podíváme se dovnitř. Kamera ukáže, kde je
            závada — a vy platíte za řešení, ne za hádání. Havarijní i
            preventivní údržbu zvládneme férově a s protokolem.
          </p>
          <p className="hero__spec">DN 50–800 &nbsp;·&nbsp; CCTV záznam &nbsp;·&nbsp; sací bagr &nbsp;·&nbsp; NONSTOP</p>
          <a className="btn" href="tel:+420777111222">
            Zavolat dispečink
            <span className="btn__num">777 111 222</span>
          </a>
        </div>

        <figure className="porthole" role="img" aria-label="Pohled kamerou dovnitř kanalizačního potrubí DN300 pod světlem crawleru">
          <span className="porthole__feed" aria-hidden="true" />
          <span className="hud" aria-hidden="true">
            <span className="hud__cross" />
            <span className="hud__scan" />
            <RecClock />
            <span className="hud__depthwrap">
              <DepthReadout />
            </span>
          </span>
        </figure>
      </section>

      <section className="block" aria-labelledby="svc-title">
        <div className="block__head">
          <span className="ring-marker" aria-hidden="true" />
          <div>
            <p className="eyebrow">Co pro vás uděláme</p>
            <h2 className="block__title" id="svc-title">Čtyři věci, kvůli kterým voláte</h2>
          </div>
        </div>
        <ul className="svc">
          {services.map((s) => (
            <li className={s.star ? "svc__item svc__item--star" : "svc__item"} key={s.code}>
              <p className="svc__code">{s.code}</p>
              <h3 className="svc__name">{s.name}</h3>
              <p className="svc__body">{s.body}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="block" aria-labelledby="trust-title">
        <div className="block__head">
          <span className="ring-marker" aria-hidden="true" />
          <div>
            <p className="eyebrow">Proč nám dát potrubí do ruky</p>
            <h2 className="block__title" id="trust-title">Vidíme dál než k mříži</h2>
          </div>
        </div>

        <div className="trust">
          <p className="trust__lead">
            Kanalizaci nespravujeme naslepo. Kamerou nejdřív zjistíme, co se
            v potrubí děje, a teprve pak volíme postup — tlak, frézu, nebo
            výkop jen tam, kde je opravdu nezbytný. Ke každé revizi dostanete
            záznam i protokol, který si založíte do dokumentace objektu.
          </p>

          <dl className="protocol">
            {protocol.map(([k, v]) => (
              <div className="protocol__row" key={k}>
                <dt className="protocol__key">{k}</dt>
                <dd className="protocol__val">{v}</dd>
              </div>
            ))}
          </dl>

          <blockquote className="ref">
            <p className="ref__code">ZÁZNAM · LOGISTICKÝ AREÁL, PRAHA</p>
            <p className="ref__text">
              „Preventivní čištění všech odtokových kanálků proběhlo za plného
              provozu areálu — bez jediného omezení nájezdu kamionů.“
            </p>
          </blockquote>
        </div>
      </section>
    </main>
  );
}
