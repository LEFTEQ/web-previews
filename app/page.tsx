import type { CSSProperties } from "react";

export default function Page() {
  const yields = [
    { label: "Střecha na jih, 35°", value: "9,8", unit: "MWh / rok" },
    { label: "Sedlová střecha, východ–západ", value: "8,1", unit: "MWh / rok" },
    { label: "Plochá střecha, optimalizace", value: "7,4", unit: "MWh / rok" },
  ];

  const steps = [
    {
      n: "01",
      title: "Přijedeme a změříme střechu",
      body: "Projdeme si střechu, orientaci i stín od komína a stromů. Do pár dní máte návrh počtu panelů a odhad, kolik elektřiny vyrobíte přímo u vás v Českých Budějovicích a okolí.",
    },
    {
      n: "02",
      title: "Vyřídíme dotaci i papíry",
      body: "Nová zelená úsporám, žádost o připojení k distribuci ČEZ, revize. Papírování bereme na sebe — vy podepíšete, my dodáme.",
    },
    {
      n: "03",
      title: "Montáž za dva dny",
      body: "Vlastní parta montérů a elektrikářů. Panely, měnič, kabeláž i baterie zapojíme tak, aby elektrárna běžela ještě týž týden.",
    },
    {
      n: "04",
      title: "Vidíte každou vyrobenou kilowatthodinu",
      body: "V aplikaci sledujete výrobu, spotřebu i stav baterie v reálném čase. Nastavíme, aby se přebytek posílal do bojleru a ne zadarmo do sítě.",
    },
  ];

  const refs = [
    {
      place: "Rodinný dům, Rudolfov",
      spec: "7,2 kWp · baterie 11,6 kWh",
      quote: "Přes léto netáhneme ze sítě skoro nic. Ranní kafe i pračka jedou ze střechy.",
    },
    {
      place: "Penzion, Hluboká nad Vltavou",
      spec: "18 kWp · ohřev vody přebytkem",
      quote: "Bazén i bojler pro hosty topí slunce. Faktura za elektřinu klesla na třetinu.",
    },
    {
      place: "Dílna, Trhové Sviny",
      spec: "22 kWp · připojení na distribuci",
      quote: "Kompresor a odsávání běží přes den ze střechy. Přesně jak Loxone sliboval.",
    },
  ];

  return (
    <main className="pv">
      <header className="pv-top">
        <a className="pv-mark" href="#top" aria-label="Loxone — fotovoltaika České Budějovice">
          <span className="pv-mark__sun" aria-hidden="true" />
          <span className="pv-mark__word">Loxone</span>
          <span className="pv-mark__tag">fotovoltaika · Č. Budějovice</span>
        </a>
        <a className="pv-callchip" href="tel:+420388000388">
          <span aria-hidden="true">☏</span> Zavolat
        </a>
      </header>

      <section className="pv-hero" id="top">
        <div className="pv-hero__grid">
          <div className="pv-hero__copy">
            <p className="pv-eyebrow">Fotovoltaika na míru · jižní Čechy</p>
            <h1 className="pv-h1">
              Vaše střecha už teď
              <br />
              <span className="pv-h1__accent">vydělává na sebe.</span>
            </h1>
            <p className="pv-lead">
              Navrhneme, postavíme a připojíme fotovoltaiku, která pokryje spotřebu
              vaší domácnosti i dílny. Vlastní montéři z Českých Budějovic, dotaci
              vyřídíme za vás.
            </p>
            <div className="pv-cta">
              <a className="pv-btn pv-btn--solid" href="tel:+420388000388">
                Zavolat 388 000 388
              </a>
              <a className="pv-btn pv-btn--ghost" href="mailto:strechy@loxone-fve.cz">
                Napsat na e-mail
              </a>
            </div>
            <dl className="pv-stats">
              <div>
                <dt>Návratnost</dt>
                <dd>7–9 let</dd>
              </div>
              <div>
                <dt>Montáž</dt>
                <dd>2 dny</dd>
              </div>
              <div>
                <dt>Záruka na panely</dt>
                <dd>25 let</dd>
              </div>
            </dl>
          </div>
          <figure className="pv-hero__figure">
            <img
              src="/hero.webp"
              alt="Fotovoltaické panely na střeše rodinného domu za slunečného dne"
              width={880}
              height={1040}
            />
            <figcaption className="pv-hero__badge">
              <span className="pv-hero__badge-num">9,8</span>
              <span className="pv-hero__badge-lbl">MWh za rok z jedné jihočeské střechy</span>
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="pv-yield" aria-labelledby="yield-h">
        <div className="pv-section__head">
          <p className="pv-eyebrow">Kolik ze střechy dostanete</p>
          <h2 id="yield-h" className="pv-h2">
            Sluneční příděl pro tři typické
            <br /> jihočeské střechy
          </h2>
          <p className="pv-section__note">
            Orientační roční výroba pro 10kWp systém podle sklonu a orientace.
            Přesné číslo spočítáme přímo pro vaši střechu při zaměření.
          </p>
        </div>
        <ol className="pv-meters">
          {yields.map((y, i) => (
            <li
              className="pv-meter"
              key={y.label}
              style={{ "--fill": `${100 - i * 14}%` } as CSSProperties}
            >
              <div className="pv-meter__bar" aria-hidden="true">
                <span className="pv-meter__fill" />
              </div>
              <div className="pv-meter__val">
                <strong>{y.value}</strong>
                <span>{y.unit}</span>
              </div>
              <p className="pv-meter__lbl">{y.label}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="pv-steps" aria-labelledby="steps-h">
        <div className="pv-steps__media">
          <img
            src="/section-1.webp"
            alt="Montér Loxone upevňuje fotovoltaický panel na střešní konstrukci"
            width={760}
            height={900}
          />
        </div>
        <div className="pv-steps__body">
          <p className="pv-eyebrow">Od zaměření po první kilowatthodinu</p>
          <h2 id="steps-h" className="pv-h2">Čtyři kroky, žádné čekání na telefonu</h2>
          <ol className="pv-steplist">
            {steps.map((s) => (
              <li className="pv-step" key={s.n}>
                <span className="pv-step__n" aria-hidden="true">{s.n}</span>
                <div>
                  <h3>{s.title}</h3>
                  <p>{s.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="pv-refs" aria-labelledby="refs-h">
        <div className="pv-refs__intro">
          <p className="pv-eyebrow">Postaveno u sousedů</p>
          <h2 id="refs-h" className="pv-h2">Střechy, které už šetří</h2>
          <img
            src="/section-2.webp"
            alt="Detail řady fotovoltaických panelů na jihočeské střeše proti modré obloze"
            width={720}
            height={520}
          />
        </div>
        <ul className="pv-reflist">
          {refs.map((r) => (
            <li className="pv-ref" key={r.place}>
              <p className="pv-ref__quote">„{r.quote}“</p>
              <p className="pv-ref__place">{r.place}</p>
              <p className="pv-ref__spec">{r.spec}</p>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
