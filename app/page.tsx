import type { CSSProperties } from "react";

const services = [
  {
    idx: "01",
    title: "Průmyslové chlazení",
    range: "provozy · sklady",
    desc: "Chladicí a mrazicí technologie pro provozy všech velikostí — od návrhu přes montáž až po pravidelný servis.",
  },
  {
    idx: "02",
    title: "Chladicí a mrazicí boxy",
    range: "stavba na míru",
    desc: "Boxy stavíme podle vašeho prostoru, včetně variant s navijákem pro zachlazení ulovené zvěře.",
  },
  {
    idx: "03",
    title: "Klimatizace",
    range: "Samsung · Sinclair",
    desc: "Klimatizace do kanceláří, provozoven i bytů. Vybereme jednotku na míru a postaráme se o instalaci.",
  },
  {
    idx: "04",
    title: "Výroba kondenzačních jednotek",
    range: "vlastní výroba",
    desc: "Vyrábíme typizované řady podle výkonu i jednotky přesně na míru vaší aplikaci.",
  },
  {
    idx: "05",
    title: "Servis chladicího okruhu",
    range: "proplach · rozbor",
    desc: "Propláchneme okruh, otestujeme kvalitu chladiva a použité chladivo ekologicky recyklujeme.",
  },
  {
    idx: "06",
    title: "Sklad náhradních dílů",
    range: "díly skladem",
    desc: "Držíme vlastní sklad komponentů — potřebný díl máme obvykle hned k dispozici, bez čekání.",
  },
];

const scale = [
  { t: "+40", label: "letní vedro", tone: "warm" },
  { t: "+20", label: "", tone: "" },
  { t: "+4", label: "chladicí box", tone: "" },
  { t: "0", label: "", tone: "" },
  { t: "−18", label: "mrazicí box", tone: "set" },
  { t: "−25", label: "", tone: "cold" },
];

const readouts = [
  { value: "1996", label: "na trhu, téměř 30 let v provozu" },
  { value: "Plzeň", label: "a celý Plzeňský kraj" },
  { value: "Eko", label: "ekologická chladiva — testujeme i recyklujeme" },
  { value: "24×", label: "rychlá reakce, když technika stojí" },
];

export default function Page() {
  return (
    <main className="page">
      <header className="topbar">
        <a className="wordmark" href="#" aria-label="Chladírenský servis Jedlička — úvod">
          <span className="wordmark-kick">chladírenský servis · Plzeň</span>
          <span className="wordmark-name">
            Jedlička<span className="wordmark-dot">.</span>
          </span>
        </a>
        <a className="topbar-phone" href="tel:+420377828584">
          <span className="topbar-phone-label">servis</span>
          377 828 584
        </a>
      </header>

      <section className="hero">
        <div className="hero-inner">
          <div className="hero-copy">
            <p className="eyebrow reveal" style={delay(0)}>
              <span className="eyebrow-tick" aria-hidden="true" />
              Chlazení · klimatizace · servis — od 1996
            </p>
            <h1 className="hero-title">
              <span className="reveal" style={delay(1)}>Držíme teplotu</span>
              <span className="reveal" style={delay(2)}>
                <span className="accent">přesně</span> tam, kde
              </span>
              <span className="reveal" style={delay(3)}>ji potřebujete.</span>
            </h1>
            <p className="hero-lede reveal" style={delay(4)}>
              Průmyslové chlazení, mrazicí boxy i klimatizace. Když technika stojí,
              jsme u vás rychle — s vlastním skladem dílů a výrobou kondenzačních jednotek.
            </p>
            <div className="hero-cta reveal" style={delay(5)}>
              <a className="btn-primary" href="tel:+420377828584">
                Zavolat servis — 377 828 584
              </a>
              <span className="hero-hours">
                Po–Čt 7–16 · Pá 7–13:30
              </span>
            </div>
          </div>

          <div className="hero-visual reveal" style={delay(3)}>
            <img
              className="hero-img"
              src="/hero.webp"
              alt="Technik chladírenského servisu Jedlička u chladicí jednotky"
              width={880}
              height={1040}
            />
            <div className="temp-scale" role="img" aria-label="Teplotní rozsah, se kterým pracujeme: od +40 do −25 °C">
              <span className="temp-scale-unit">°C</span>
              <ul className="temp-ticks">
                {scale.map((s) => (
                  <li key={s.t} className={`temp-tick tone-${s.tone || "mid"}`}>
                    <span className="temp-tick-mark" aria-hidden="true" />
                    <span className="temp-tick-val">{s.t}</span>
                    {s.label ? <span className="temp-tick-label">{s.label}</span> : null}
                  </li>
                ))}
              </ul>
            </div>
            <div className="hero-readout">
              <span className="hero-readout-dot" aria-hidden="true" />
              cíl −18 °C · v normě
            </div>
          </div>
        </div>
      </section>

      <section className="services" aria-labelledby="services-title">
        <div className="section-head">
          <p className="eyebrow eyebrow-dark">
            <span className="eyebrow-tick" aria-hidden="true" />
            Co pro vás uděláme
          </p>
          <h2 id="services-title" className="section-title">
            Celé spektrum chlazení pod jednou střechou.
          </h2>
        </div>

        <img
          className="section-band"
          src="/section-1.webp"
          alt="Chladicí a kondenzační technika v provozu firmy Jedlička"
          width={1600}
          height={620}
        />

        <ul className="service-grid">
          {services.map((s) => (
            <li key={s.idx} className="service-card">
              <div className="service-top">
                <span className="service-idx">{s.idx}</span>
                <span className="service-range">{s.range}</span>
              </div>
              <h3 className="service-title">{s.title}</h3>
              <p className="service-desc">{s.desc}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="about" aria-labelledby="about-title">
        <div className="about-grid">
          <div className="about-visual">
            <img
              className="about-img"
              src="/section-2.webp"
              alt="Zázemí a technika chladírenského servisu Jedlička v Plzni"
              width={900}
              height={1080}
            />
          </div>
          <div className="about-copy">
            <p className="eyebrow eyebrow-dark">
              <span className="eyebrow-tick" aria-hidden="true" />
              Proč Jedlička
            </p>
            <h2 id="about-title" className="section-title">
              Skoro 30 let držíme provozy v chodu.
            </h2>
            <p className="about-lede">
              Zvládneme celé spektrum oboru — od návrhu a montáže po servis a náhradní díly.
              Jdeme podle domluveného harmonogramu i rozpočtu a hlídáme, aby vás porucha
              nezastavila na dlouho. Čas i náklady bereme jako vaše, ne naše.
            </p>
            <dl className="readouts">
              {readouts.map((r) => (
                <div key={r.value} className="readout">
                  <dt className="readout-value">{r.value}</dt>
                  <dd className="readout-label">{r.label}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>
    </main>
  );
}

function delay(step: number): CSSProperties {
  return { animationDelay: `${0.08 * step + 0.05}s` };
}
