import React from "react";

const sluzby = [
  {
    id: "01",
    nazev: "Zkrácení a úpravy délky",
    popis:
      "Kalhoty, sukně, rukávy i sako. Zkrátíme, prodloužíme, obnovíme původní lem — ručně přišitým podehem tak, aby úprava zůstala neviditelná.",
    detail: "Kalhoty · Sukně · Rukávy · Kabáty",
  },
  {
    id: "02",
    nazev: "Zúžení a posazení do postavy",
    popis:
      "Sako, které sedí v ramenou, ale plandá v pase. Košile, co odstává. Přebereme boční švy, záševky a rukávy, aby oděv kopíroval vaši postavu.",
    detail: "Saka · Košile · Šaty · Kabáty",
  },
  {
    id: "03",
    nazev: "Výměna zipů a podšívek",
    popis:
      "Zaseknutý zip v bundě, roztržená podšívka v saku, prošoupaný lem u kabátu. Vyměníme, co dosloužilo, a vrátíme oděvu jeho léta.",
    detail: "Zipy · Podšívky · Knoflíky · Poutka",
  },
  {
    id: "04",
    nazev: "Neviditelné látání a záplaty",
    popis:
      "Propálený otvor, roztržený šev, sežraná vlna od molů. Zaštopujeme a záplatujeme technikou, po které stopa téměř zmizí ve tkanině.",
    detail: "Vlna · Bavlna · Len · Kašmír",
  },
];

const kroky = [
  {
    cislo: "Přineste",
    text: "Přijďte s kusem, který vám leží v šatníku. Podíváme se na střih, tkaninu i to, co vám na oděvu vadí.",
  },
  {
    cislo: "Napíchneme",
    text: "Oděv nabereme špendlíky přímo na vás. Uvidíte výsledek dřív, než sáhneme po nůžkách.",
  },
  {
    cislo: "Vyzvednete",
    text: "Ušlechtilou přízí, ručním stehem tam, kde je potřeba. Vyzvednete si kus, který zase padne.",
  },
];

export default function Page() {
  return (
    <main className="rap">
      <header className="rap-topbar">
        <a className="rap-wordmark" href="#" aria-label="RAP krejčovský ateliér, Hradec Králové">
          <span className="rap-wordmark__mark">RAP</span>
          <span className="rap-wordmark__sub">krejčovský ateliér</span>
        </a>
        <p className="rap-topbar__meta">Střelecká 25 · Hradec Králové</p>
      </header>

      <section className="rap-hero" aria-labelledby="rap-hero-title">
        <div className="rap-hero__frame">
          <img
            className="rap-hero__img"
            src="/hero.webp"
            alt="Detail rukou krejčové při ruční úpravě oděvu v ateliéru RAP"
            width={1200}
            height={1500}
          />
          <span className="rap-hero__tag">od roku · ruční práce</span>
        </div>

        <div className="rap-hero__text">
          <p className="rap-hero__eyebrow">Opravy a úpravy oděvů · Hradec Králové</p>
          <h1 id="rap-hero-title" className="rap-hero__title">
            Nešijeme nové.
            <br />
            Vracíme život
            <em> tomu, co&nbsp;už&nbsp;máte.</em>
          </h1>
          <p className="rap-hero__lead">
            Sako po dědečkovi, kabát, který zhubl s vámi, kalhoty o dvě čísla vedle.
            V ateliéru na Střelecké je nabereme na míru ručním stehem — aby padly tak,
            jako by byly šité pro vás.
          </p>
          <div className="rap-hero__actions">
            <a className="rap-btn" href="tel:+420724093978">Zavolat: 724&nbsp;093&nbsp;978</a>
            <span className="rap-hero__note">Zkoušku si domluvte předem telefonicky</span>
          </div>
        </div>
      </section>

      <section className="rap-services" aria-labelledby="rap-services-title">
        <div className="rap-section-head">
          <p className="rap-eyebrow">Co spravíme</p>
          <h2 id="rap-services-title" className="rap-h2">
            Každý šev má své řešení
          </h2>
          <p className="rap-section-lead">
            Neděláme rychlé lepení. Rozpáráme, přeměříme a znovu sešijeme —
            s ohledem na materiál, ať je to vlna, len, kašmír nebo bavlna.
          </p>
        </div>

        <ol className="rap-grid">
          {sluzby.map((s) => (
            <li className="rap-card" key={s.id}>
              <span className="rap-card__num" aria-hidden="true">
                {s.id}
              </span>
              <h3 className="rap-card__title">{s.nazev}</h3>
              <p className="rap-card__text">{s.popis}</p>
              <p className="rap-card__detail">{s.detail}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="rap-about" aria-labelledby="rap-about-title">
        <div className="rap-about__media">
          <img
            className="rap-about__img"
            src="/section-1.webp"
            alt="Návleky nití, špendlíky a nůžky na pracovním stole ateliéru RAP"
            width={900}
            height={1100}
          />
          <img
            className="rap-about__img rap-about__img--second"
            src="/section-2.webp"
            alt="Rozpracovaný oděv připravený k úpravě v ateliéru RAP"
            width={900}
            height={1100}
          />
        </div>

        <div className="rap-about__text">
          <p className="rap-eyebrow">Jak to u nás chodí</p>
          <h2 id="rap-about-title" className="rap-h2">
            Ruční práce v&nbsp;rodinném ateliéru
          </h2>
          <p className="rap-about__intro">
            Přijmu vás v klidném, rodinném prostředí a celým procesem vás provedu.
            Nespěcháme — dobrá úprava se pozná podle toho, že si jí nikdo nevšimne.
          </p>

          <ol className="rap-steps">
            {kroky.map((k, i) => (
              <li className="rap-step" key={k.cislo}>
                <span className="rap-step__dot" aria-hidden="true">
                  {i + 1}
                </span>
                <div>
                  <p className="rap-step__title">{k.cislo}</p>
                  <p className="rap-step__text">{k.text}</p>
                </div>
              </li>
            ))}
          </ol>

          <dl className="rap-hours">
            <div className="rap-hours__row rap-hours__row--open">
              <dt>Středa</dt>
              <dd>10–12 · 14–18 (bez objednání)</dd>
            </div>
            <div className="rap-hours__row">
              <dt>Po, Út, Čt, Pá</dt>
              <dd>na objednání</dd>
            </div>
            <div className="rap-hours__row">
              <dt>Kde</dt>
              <dd>Střelecká 748/25, 500&nbsp;02 Hradec Králové</dd>
            </div>
          </dl>
        </div>
      </section>
    </main>
  );
}
