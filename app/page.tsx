import type { CSSProperties } from "react";

export default function Page() {
  const pobocky = [
    { mesto: "Brno", tel: "543 257 540", tel2: "725 507 969", domov: true },
    { mesto: "Olomouc", tel: "585 313 040", tel2: "602 531 742" },
    { mesto: "Hradec Králové", tel: "495 218 189", tel2: "724 816 201" },
    { mesto: "Pardubice", tel: "466 513 227", tel2: "606 311 201" },
    { mesto: "Šumperk", tel: "583 219 055", tel2: "724 219 720" },
    { mesto: "Zlín", tel: "577 102 530", tel2: "602 500 546" },
    { mesto: "Znojmo", tel: "515 224 448", tel2: "603 153 784" },
  ];

  const sluzby = [
    {
      nazev: "Bezplatná výměna čelního skla",
      popis:
        "Prasklé nebo rozbité čelní sklo vyměníme z vašeho pojištění. Papírování s pojišťovnou vyřídíme za vás — vy jen přijedete a odjedete.",
      spot: "z pojištění",
    },
    {
      nazev: "Oprava odštěpku a praskliny",
      popis:
        "Malé poškození vyplníme pryskyřicí dřív, než se rozjede přes celé sklo. Oprava je respektovaná při STK a hotová během dopoledne.",
      spot: "do 60 minut",
    },
    {
      nazev: "Mobilní servis u vás",
      popis:
        "Nemáte čas odstavit auto? Po domluvě přijedeme sklo vyměnit k vám — domů, do práce nebo do firemního areálu.",
      spot: "po dohodě",
    },
    {
      nazev: "Tónování a protisluneční fólie 3M",
      popis:
        "Tónování pokovením a certifikované fólie 3M. Méně tepla v kabině, soukromí vzadu a ostré linie bez bublin.",
      spot: "fólie 3M",
    },
    {
      nazev: "Oprava vyhřívání skla",
      popis:
        "Přerušené odpařovací vlákno nebo odlepený kontakt zadního skla znovu oživíme, aby okno v zimě zase rozmrzalo.",
      spot: "kontakty i vlákna",
    },
    {
      nazev: "Bezpečnostní kódování CEBIA",
      popis:
        "Do skel vyleptáme identifikační kód CEBIA. Auto je hůř prodejné pro zloděje a pojišťovny to oceňují slevou.",
      spot: "CEBIA",
    },
  ];

  return (
    <main className="pg">
      <a className="skip" href="#obsah">Přeskočit na obsah</a>

      <header className="top">
        <a className="wm" href="#" aria-label="Autosklo Roger, domovská stránka">
          <span className="wm-r" aria-hidden="true">R</span>
          <span className="wm-t">
            <span className="wm-main">AUTOSKLO ROGER</span>
            <span className="wm-sub">autosklářská dílna · Brno</span>
          </span>
        </a>
        <a className="call" href="tel:+420543257540">
          <span className="call-lbl">Brno</span>
          <span className="call-num">543 257 540</span>
        </a>
      </header>

      <section className="hero" id="obsah">
        <div className="hero-media">
          <img
            src="/hero.webp"
            alt="Detail čelního autoskla s prasklinou před výměnou v dílně Autosklo Roger"
            className="hero-img"
          />
          <span className="crack" aria-hidden="true" />
        </div>

        <div className="hero-copy">
          <p className="eyebrow">Autosklo Brno · od praskliny po nové sklo</p>
          <h1 className="h1">
            Prasklina<span className="h1-slash"> / </span>
            <em>zpět čisté sklo</em>
            <br />ještě dnes.
          </h1>
          <p className="lede">
            Odletěl kamínek a přes sklo se táhne prasklina? Přivezte auto do naší
            brněnské dílny. Malé poškození opravíme, velké vyměníme —
            <strong> z pojištění a bez placení předem.</strong>
          </p>
          <div className="hero-cta">
            <a className="btn btn-solid" href="tel:+420543257540">Zavolat do dílny</a>
            <a className="btn btn-ghost" href="#sluzby">Co umíme se sklem</a>
          </div>
          <ul className="hero-facts">
            <li><b>7</b> poboček v ČR</li>
            <li><b>0 Kč</b> předem u pojistky</li>
            <li><b>STK</b> respektuje naše opravy</li>
          </ul>
        </div>
      </section>

      <section className="sluzby" id="sluzby" aria-labelledby="sluzby-t">
        <div className="sec-head">
          <p className="eyebrow">Co pro vás se sklem uděláme</p>
          <h2 className="h2" id="sluzby-t">
            Od odštěpku po celé čelní sklo — a k tomu fólie, kódování i vyhřívání.
          </h2>
        </div>

        <ol className="cards">
          {sluzby.map((s, i) => (
            <li className="card" key={s.nazev}>
              <span className="card-no">{String(i + 1).padStart(2, "0")}</span>
              <span className="card-spot">{s.spot}</span>
              <h3 className="card-t">{s.nazev}</h3>
              <p className="card-p">{s.popis}</p>
            </li>
          ))}
        </ol>

        <figure className="sluzby-fig">
          <img
            src="/section-1.webp"
            alt="Technik Autosklo Roger vsazuje nové čelní sklo do vozu"
            className="fig-img"
          />
          <figcaption>
            Nové sklo lepíme podle výrobce a předepsané doby vytvrzení — pak
            teprve vyjedete. Bezpečnost airbagů závisí i na správně vsazeném skle.
          </figcaption>
        </figure>
      </section>

      <section className="pojisteni" aria-labelledby="poj-t">
        <div className="poj-grid">
          <div className="poj-text">
            <p className="eyebrow">Pojistná událost bez papírování</p>
            <h2 className="h2" id="poj-t">
              Na pojišťovnu už chodit nemusíte. Vyřídíme to za vás.
            </h2>
            <p className="poj-lede">
              Máte havarijní pojištění nebo připojištění skel? Přineste doklady,
              zbytek zařídíme v dílně. Splníte-li podmínky pojistky,
              výměna čelního skla je pro vás zdarma.
            </p>
            <ol className="steps">
              <li>
                <span className="step-no">1</span>
                <span><b>Zavoláte nebo přijedete.</b> Sklo prohlédneme a řekneme, zda stačí oprava, nebo je potřeba výměna.</span>
              </li>
              <li>
                <span className="step-no">2</span>
                <span><b>Nahlásíme událost.</b> Komunikaci s pojišťovnou vedeme my — vy podepíšete jen zmocnění.</span>
              </li>
              <li>
                <span className="step-no">3</span>
                <span><b>Odjíždíte s čistým sklem.</b> Bez placení předem, se zárukou a s dokladem pro STK.</span>
              </li>
            </ol>
          </div>
          <figure className="poj-fig">
            <img
              src="/section-2.webp"
              alt="Vyleštěné čelní sklo připravené k vrácení zákazníkovi v dílně Autosklo Roger v Brně"
              className="fig-img"
            />
          </figure>
        </div>

        <div className="pobocky">
          <h3 className="pob-h">Zavolejte na nejbližší pobočku</h3>
          <ul className="pob-list">
            {pobocky.map((p) => (
              <li className={"pob" + (p.domov ? " pob-home" : "")} key={p.mesto}>
                <span className="pob-city">
                  {p.mesto}
                  {p.domov ? <span className="pob-tag">domovská dílna</span> : null}
                </span>
                <span className="pob-nums">
                  <a href={"tel:+420" + p.tel.replace(/\s/g, "")}>{p.tel}</a>
                  <a href={"tel:+420" + p.tel2.replace(/\s/g, "")}>{p.tel2}</a>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
