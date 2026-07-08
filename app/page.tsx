import type { CSSProperties } from "react";

export default function Page() {
  const gases = [
    {
      symbol: "O₂",
      name: "Kyslík",
      use: "Medicinální i technický kyslík",
      detail: "Pro nemocnice, svařování a řezání. Rozvoz v lahvích i svazcích, plnění přímo v Českých Budějovicích.",
    },
    {
      symbol: "Ar",
      name: "Argon",
      use: "Ochranná atmosféra při svařování",
      detail: "Čistý argon i směsi pro MIG/MAG a TIG. Stabilní kvalita svaru, kterou poznáte na první housence.",
    },
    {
      symbol: "CO₂",
      name: "Oxid uhličitý",
      use: "Nápoje, potraviny, svařování",
      detail: "Potravinářské CO₂ pro výčepy a gastro i technická kvalita pro dílny. Rychlá výměna prázdných lahví.",
    },
    {
      symbol: "N₂",
      name: "Dusík",
      use: "Inertizace a chlazení",
      detail: "Plynný i kapalný dusík. Pro laboratoře, potravinářství a procesy, kde nesmí být kyslík.",
    },
    {
      symbol: "He",
      name: "Helium",
      use: "Zkoušky těsnosti, balóny, věda",
      detail: "Helium ve všech čistotách. Skladem pro detekci netěsností i pro slavnostní příležitosti.",
    },
    {
      symbol: "C₂H₂",
      name: "Acetylen",
      use: "Autogenní řezání a svařování",
      detail: "Rozpuštěný acetylen v lahvích. Vysoký plamen pro dělení silných materiálů a pájení natvrdo.",
    },
  ];

  const steps = [
    {
      n: "01",
      title: "Zavoláte, poradíme",
      body: "Řeknete nám, co plníte a v jakém objemu. Doporučíme čistotu plynu, velikost lahve a vhodnou redukci.",
    },
    {
      n: "02",
      title: "Naplníme a přichystáme",
      body: "Plníme přímo na budějovické plnírně. Každá lahev projde kontrolou tlaku, ventilu a data revize.",
    },
    {
      n: "03",
      title: "Přivezeme nebo vyzvednete",
      body: "Rozvážíme po jižních Čechách vlastními vozy. Prázdné lahve od vás rovnou odvezeme zpět k plnění.",
    },
  ];

  return (
    <main className="gp">
      {/* HERO */}
      <header className="gp-hero">
        <div className="gp-hero__bar">
          <a className="gp-wordmark" href="#" aria-label="Linde Gas České Budějovice — domů">
            <span className="gp-wordmark__mark" aria-hidden="true">
              <span className="gp-cyl" />
              <span className="gp-cyl" />
              <span className="gp-cyl" />
            </span>
            <span className="gp-wordmark__txt">
              LINDE<span className="gp-wordmark__sub">GAS · České Budějovice</span>
            </span>
          </a>
          <a className="gp-pill" href="tel:+420387000000">
            <span className="gp-pill__dot" aria-hidden="true" />
            Objednat plyn
          </a>
        </div>

        <div className="gp-hero__grid">
          <div className="gp-hero__copy">
            <p className="gp-eyebrow">Technické · medicinální · speciální plyny</p>
            <h1 className="gp-h1">
              Plyn pod tlakem,
              <br />
              <span className="gp-h1__accent">servis bez tlaku.</span>
            </h1>
            <p className="gp-lead">
              Plníme, rozvážíme a měníme tlakové lahve v Českých Budějovicích a po celých
              jižních Čechách. Kyslík pro dílnu i nemocnici, argon pro svářeče, CO₂ pro
              výčep — přesná čistota, doložená revize, jasná cena.
            </p>
            <div className="gp-hero__cta">
              <a className="gp-btn gp-btn--solid" href="tel:+420387000000">Zavolat a objednat</a>
              <a className="gp-btn gp-btn--ghost" href="#plyny">Který plyn potřebuju?</a>
            </div>
          </div>

          <figure className="gp-hero__media">
            <img
              src="/hero.webp"
              alt="Řada tlakových lahví s technickými plyny připravených k rozvozu"
              width={880}
              height={1100}
              loading="eager"
            />
            <figcaption className="gp-gauge" aria-hidden="true">
              <span className="gp-gauge__val">200</span>
              <span className="gp-gauge__unit">bar · plný tlak</span>
            </figcaption>
          </figure>
        </div>

        <ul className="gp-ticker" aria-label="Co u nás pořídíte">
          <li>Lahve 2–50 l</li>
          <li>Svazky lahví</li>
          <li>Kapalný dusík</li>
          <li>Svářečské směsi</li>
          <li>Suchý led</li>
          <li>Revize a tlakové zkoušky</li>
        </ul>
      </header>

      {/* SEKCE 1 — PLYNY */}
      <section className="gp-sec" id="plyny" aria-labelledby="plyny-h">
        <div className="gp-sec__head">
          <p className="gp-eyebrow gp-eyebrow--dark">Nabídka</p>
          <h2 className="gp-h2" id="plyny-h">Plyny, které tu máme skladem</h2>
          <p className="gp-sec__intro">
            Každý plyn má svou barvu láhve i svou práci. Vyberte podle toho, co
            děláte — a pokud si nejste jistí, zavolejte, poradíme čistotu i velikost.
          </p>
        </div>

        <ul className="gp-gases">
          {gases.map((g) => (
            <li className="gp-gas" key={g.symbol}>
              <span className="gp-gas__sym" aria-hidden="true">{g.symbol}</span>
              <div className="gp-gas__body">
                <h3 className="gp-gas__name">{g.name}</h3>
                <p className="gp-gas__use">{g.use}</p>
                <p className="gp-gas__detail">{g.detail}</p>
              </div>
            </li>
          ))}
        </ul>

        <figure className="gp-strip">
          <img
            src="/section-1.webp"
            alt="Plnírna tlakových lahví — ventily a manometry na plnicí rampě"
            width={1400}
            height={620}
            loading="lazy"
          />
          <figcaption>Plnicí rampa v Českých Budějovicích — každá lahev projde kontrolou tlaku i ventilu.</figcaption>
        </figure>
      </section>

      {/* SEKCE 2 — JAK TO CHODÍ / DŮVĚRA */}
      <section className="gp-sec gp-sec--alt" aria-labelledby="jak-h">
        <div className="gp-trust">
          <div className="gp-trust__copy">
            <p className="gp-eyebrow gp-eyebrow--dark">Jak to u nás chodí</p>
            <h2 className="gp-h2" id="jak-h">Od telefonu k plné lahvi ve třech krocích</h2>
            <p className="gp-sec__intro">
              Žádné čekání ve frontě u přepážky. Domluvíme se telefonicky,
              lahev připravíme a přivezeme — a tu prázdnou od vás odvezeme.
            </p>

            <ol className="gp-steps">
              {steps.map((s) => (
                <li className="gp-step" key={s.n}>
                  <span className="gp-step__n" aria-hidden="true">{s.n}</span>
                  <div>
                    <h3 className="gp-step__title">{s.title}</h3>
                    <p className="gp-step__body">{s.body}</p>
                  </div>
                </li>
              ))}
            </ol>

            <dl className="gp-facts">
              <div><dt>Rozvoz</dt><dd>Jižní Čechy, vlastní vozy</dd></div>
              <div><dt>Revize</dt><dd>Doložená u každé lahve</dd></div>
              <div><dt>Poradenství</dt><dd>Čistota i redukce na míru</dd></div>
            </dl>
          </div>

          <figure className="gp-trust__media">
            <img
              src="/section-2.webp"
              alt="Rozvoz tlakových lahví — naložený vůz připravený k výjezdu"
              width={780}
              height={940}
              loading="lazy"
            />
          </figure>
        </div>
      </section>
    </main>
  );
}
