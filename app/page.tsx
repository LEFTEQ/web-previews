import type { ReactNode } from "react";

function AirMark({ className }: { className?: string }): ReactNode {
  return (
    <svg className={className} viewBox="0 0 40 24" aria-hidden="true" focusable="false">
      <path d="M2 6 C 12 2, 20 10, 28 6 C 33 3.5, 36 5, 38 6" />
      <path d="M2 12 C 12 8, 22 16, 30 12 C 34 10, 36 11, 38 12" />
      <path d="M2 18 C 10 15, 18 21, 26 18 C 30 16.5, 33 17.5, 36 18" />
    </svg>
  );
}

const services = [
  {
    unit: "m³/h",
    name: "Bytové a komerční větrání",
    text: "Navrhneme systém větrání pro byty i komerční prostory přesně podle požadavků investora a platných norem — čerstvý vzduch tam, kde ho lidé skutečně dýchají.",
  },
  {
    unit: "°C · % r.h.",
    name: "Klimatizační jednotky",
    text: "Centrální jednotky pro přívod, odvod i úpravu vzduchu. Držíme teplotu a vlhkost přesně tam, kde mají být — pro prostory s nároky na kvalitu vnitřního prostředí.",
  },
  {
    unit: "úspora provozu",
    name: "Rekuperace",
    text: "Zpětné získávání tepla srazí náklady na provoz a šetří životní prostředí. U většiny nuceného větrání je dnes rekuperace standardem, nikoli nadstavbou.",
  },
  {
    unit: "kW chlazení",
    name: "Chlazení",
    text: "V létě se objekt přehřívá. Spočítáme tepelnou zátěž místností podle světových stran a stínění a navrhneme vodní nebo chladivový systém s přesným výkonem.",
  },
];

const pillars = [
  {
    label: "Autorizace",
    title: "Autorizace v oboru TZB",
    text: "Máme autorizaci v oboru technických zařízení budov. Naše projektová dokumentace obstojí pro kterýkoli stupeň — od studie po realizační projekt.",
  },
  {
    label: "Veřejný sektor",
    title: "Zkušenost s veřejnými zakázkami",
    text: "Umíme pracovat i s nekonkrétními zařízeními, u kterých specifikujeme jen požadované parametry. Transparentně a podle zadání.",
  },
  {
    label: "Dotace",
    title: "Provedeme vás dotacemi",
    text: "Poradíme s programy na větrání s rekuperací. Aktuálně lze čerpat například z Nové zelené úsporám — pro rodinné domy, školy i školky.",
  },
];

export default function Page(): ReactNode {
  return (
    <main className="ap">
      <header className="ap-head">
        <a className="ap-brand" href="#top" aria-label="Airproject — úvod">
          <AirMark className="ap-brand-mark" />
          <span className="ap-brand-name">
            air<span>project</span>
          </span>
        </a>
        <nav className="ap-nav" aria-label="Hlavní">
          <a href="#sluzby">Co řešíme</a>
          <a href="#duvera">Proč my</a>
          <a href="#kontakt">Kontakt</a>
        </nav>
        <span className="ap-loc mono">Plzeň · VZT &amp; klimatizace</span>
      </header>

      <section className="ap-hero" id="top">
        <img
          className="ap-hero-img"
          src="/hero.webp"
          alt="Rozvody vzduchotechniky a klimatizace v realizovaném objektu"
          width={1600}
          height={1000}
        />
        <div className="ap-hero-veil" aria-hidden="true" />
        <svg
          className="ap-flow"
          viewBox="0 0 1200 760"
          preserveAspectRatio="xMidYMid slice"
          aria-hidden="true"
        >
          <path className="flow-line" d="M-40 150 C 220 60, 430 250, 660 150 S 1080 40, 1260 150" />
          <path className="flow-line" d="M-40 260 C 240 180, 440 360, 680 250 S 1080 150, 1260 260" />
          <path className="flow-line" d="M-40 380 C 260 300, 470 470, 700 370 S 1090 280, 1260 380" />
          <path className="flow-line" d="M-40 500 C 240 430, 460 590, 690 500 S 1080 410, 1260 500" />
          <path className="flow-line" d="M-40 620 C 250 560, 470 700, 700 620 S 1090 540, 1260 620" />
        </svg>

        <div className="ap-hero-copy">
          <p className="ap-eyebrow mono r1">Vzduchotechnika · Klimatizace · Rekuperace</p>
          <h1 className="ap-title r2">
            Nejlepší klimatizace je ta,
            <br />
            kterou <em>nevnímáte</em>.
          </h1>
          <p className="ap-lead r3">
            Projektujeme a montujeme vzduchotechniku a klimatizace v Plzni a po
            celé ČR. Ticho, čistý vzduch a stabilní teplota — aniž by jednotka
            kdy upoutala pozornost.
          </p>
          <div className="ap-cta r4">
            <a className="ap-btn" href="#kontakt">Poptat klimatizaci</a>
            <a className="ap-btn ghost" href="#sluzby">Prohlédnout služby</a>
          </div>
        </div>

        <dl className="ap-readouts mono r5" aria-label="Parametry, které řídíme">
          <div>
            <dt>22,0 °C</dt>
            <dd>cílová teplota</dd>
          </div>
          <div>
            <dt>45 %</dt>
            <dd>relativní vlhkost</dd>
          </div>
          <div>
            <dt>1 200 m³/h</dt>
            <dd>výkon větrání</dd>
          </div>
        </dl>
      </section>

      <section className="ap-sec ap-services" id="sluzby">
        <div className="ap-sec-head">
          <p className="ap-eyebrow mono air">Co u vás vyřešíme</p>
          <h2>Čtyři věci, které rozhodují o vzduchu v budově</h2>
          <p className="ap-sec-sub">
            Nechte si poradit od projektantů, kteří VZT dělají jako obor, ne jako
            doplněk. Působíme z Plzně po celé České republice.
          </p>
        </div>

        <div className="ap-svc-wrap">
          <figure className="ap-svc-figure">
            <img
              src="/section-1.webp"
              alt="Detail klimatizační a vzduchotechnické jednotky při montáži"
              width={1200}
              height={1500}
              loading="lazy"
            />
            <figcaption className="mono">Návrh · montáž · uvedení do provozu</figcaption>
          </figure>

          <ol className="ap-svc-list">
            {services.map((s) => (
              <li className="ap-svc" key={s.name}>
                <span className="ap-svc-unit mono">{s.unit}</span>
                <div>
                  <h3>{s.name}</h3>
                  <p>{s.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="ap-sec ap-trust" id="duvera">
        <div className="ap-trust-grid">
          <figure className="ap-trust-figure">
            <img
              src="/section-2.webp"
              alt="Realizovaný projekt vzduchotechniky od firmy Airproject"
              width={1200}
              height={1400}
              loading="lazy"
            />
          </figure>

          <div className="ap-trust-body">
            <p className="ap-eyebrow mono air">Naše připravenost</p>
            <h2>Přísnější normy nás nezaskočí</h2>
            <p className="ap-sec-sub">
              V EU se zpřísňují požadavky na ekologii i na vnitřní prostředí
              budov — podpořené vyhláškami a dotačními programy. Na to jsme
              připravení a víme, jak z toho pro vás vytěžit maximum.
            </p>

            <ul className="ap-pillars">
              {pillars.map((p) => (
                <li key={p.title}>
                  <span className="ap-pillar-label mono">{p.label}</span>
                  <h3>{p.title}</h3>
                  <p>{p.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="ap-contact" id="kontakt">
          <p className="ap-eyebrow mono air">Kde nás najdete</p>
          <div className="ap-contact-rows">
            <a className="ap-contact-item" href="tel:+420731248962">
              <span className="mono">Telefon</span>
              <strong>+420 731 248 962</strong>
            </a>
            <a className="ap-contact-item" href="mailto:info@airproject.cz">
              <span className="mono">E-mail</span>
              <strong>info@airproject.cz</strong>
            </a>
            <div className="ap-contact-item">
              <span className="mono">Sídlo</span>
              <strong>Na Bořích 458/60, 326 00 Plzeň</strong>
            </div>
            <div className="ap-contact-item">
              <span className="mono">Stav</span>
              <strong>Aktuální · 2025</strong>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
