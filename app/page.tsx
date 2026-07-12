import React from "react";

const sluzby = [
  {
    kod: "01",
    nazev: "Výměna čelního skla",
    popis:
      "Vylepené sklo do 90 minut. Používáme originální i kvalitní neoriginální skla — zelené, akustické, vyhřívané, se senzorem deště i úchytem zrcátka.",
    detail: "Peugeot · Toyota · Ford · BMW · VW",
  },
  {
    kod: "02",
    nazev: "Oprava odštěpku",
    popis:
      "Malý kamínek na skle neznamená celé nové sklo. Zalití praskliny stihneme na počkání a bez poškození STK.",
    detail: "Na počkání · od 890 Kč",
  },
  {
    kod: "03",
    nazev: "Kalibrace ADAS",
    popis:
      "Po výměně skla znovu seřídíme kameru asistenčních systémů — čtení značek, hlídání jízdního pruhu i nouzové brzdění.",
    detail: "Senzor deště · kamera · vin",
  },
  {
    kod: "04",
    nazev: "Pneuservis a klima",
    popis:
      "Když už jste u nás, přezujeme pneumatiky, doplníme provozní kapaliny nebo naplníme klimatizaci.",
    detail: "Pneumatiky · stěrače · baterie",
  },
];

const duvody = [
  {
    cislo: "90",
    jednotka: "minut",
    text: "tolik obvykle trvá výměna čelního skla, než si stihnete dát kávu vedle.",
  },
  {
    cislo: "20",
    jednotka: "let",
    text: "lepíme skla v Libuši. Auta se změnila, ruka zůstala jistá.",
  },
  {
    cislo: "1",
    jednotka: "návštěva",
    text: "sklo, pneu i klima vyřídíme na jednom místě, jednou objednávkou.",
  },
];

export default function Page() {
  return (
    <main className="sx">
      {/* HERO */}
      <header className="hero">
        <div className="hero-bar">
          <a className="brand" href="#uvod" aria-label="Sentera autosklo, úvod">
            <span className="brand-mark" aria-hidden="true">
              <span className="crack">Ｃ</span>
            </span>
            <span className="brand-word">
              Sentera<span className="brand-sub">autosklo · Praha 4</span>
            </span>
          </a>
          <a className="hero-tel" href="tel:+420603576514">
            <span className="hero-tel-label">Rozbité sklo?</span>
            603 576 514
          </a>
        </div>

        <div className="hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Výměna · oprava · kalibrace</p>
            <h1 className="hero-title">
              Prasklé sklo<br />
              <span className="hero-title-em">vyřešíme dnes.</span>
            </h1>
            <p className="hero-lead">
              Vylepené čelní sklo do 90 minut, seřízená kamera asistentů a auto
              připravené na STK. V Libuši lepíme skla přes dvacet let — od
              Peugeotu 205 po nové BMW.
            </p>
            <div className="hero-cta">
              <a className="btn btn-primary" href="tel:+420603576514">
                Zavolat a domluvit termín
              </a>
              <a className="btn btn-ghost" href="#sluzby">
                Co všechno umíme
              </a>
            </div>
            <p className="hero-note">
              Libušská 196, Praha 4 · GPS 50°0.514'N, 14°27.757'E
            </p>
          </div>

          <figure className="hero-figure">
            <img
              src="/hero.webp"
              alt="Technik Sentery lepí nové čelní sklo do vozu"
              className="hero-img"
            />
            <figcaption className="hero-chip">
              <span className="chip-dot" aria-hidden="true" />
              Dnes volno na výměnu
            </figcaption>
          </figure>
        </div>

        <div className="ticker" aria-hidden="true">
          <div className="ticker-row">
            <span>čelní sklo</span><span>·</span><span>boční sklo</span><span>·</span>
            <span>zadní sklo</span><span>·</span><span>oprava odštěpku</span><span>·</span>
            <span>kalibrace ADAS</span><span>·</span><span>senzor deště</span><span>·</span>
            <span>vyhřívané sklo</span><span>·</span><span>akustické sklo</span><span>·</span>
            <span>čelní sklo</span><span>·</span><span>boční sklo</span><span>·</span>
            <span>zadní sklo</span><span>·</span><span>oprava odštěpku</span><span>·</span>
            <span>kalibrace ADAS</span><span>·</span><span>senzor deště</span><span>·</span>
          </div>
        </div>
      </header>

      {/* SLUŽBY */}
      <section className="sluzby" id="sluzby" aria-labelledby="sluzby-nadpis">
        <div className="sec-head">
          <p className="eyebrow eyebrow-dark">Naše dílna</p>
          <h2 id="sluzby-nadpis" className="sec-title">
            Čtyři věci, kvůli kterým sem lidé jezdí
          </h2>
          <p className="sec-lead">
            Nejsme obří síť. Jsme jedna provozovna v Libuši, kde si na vaše auto
            skutečně sáhne člověk, který ho pak i seřídí.
          </p>
        </div>

        <ol className="sluzby-list">
          {sluzby.map((s) => (
            <li className="sluzba" key={s.kod}>
              <span className="sluzba-kod" aria-hidden="true">
                {s.kod}
              </span>
              <div className="sluzba-body">
                <h3 className="sluzba-nazev">{s.nazev}</h3>
                <p className="sluzba-popis">{s.popis}</p>
                <p className="sluzba-detail">{s.detail}</p>
              </div>
            </li>
          ))}
        </ol>

        <figure className="sluzby-foto">
          <img
            src="/section-1.webp"
            alt="Regál s čelními skly připravenými k výměně v dílně Sentera"
            className="foto-img"
          />
        </figure>
      </section>

      {/* DŮVĚRA */}
      <section className="duvera" id="o-nas" aria-labelledby="duvera-nadpis">
        <div className="duvera-grid">
          <figure className="duvera-foto">
            <img
              src="/section-2.webp"
              alt="Provozovna autoskla Sentera v Praze Libuši"
              className="foto-img"
            />
          </figure>

          <div className="duvera-copy">
            <p className="eyebrow">Proč zrovna my</p>
            <h2 id="duvera-nadpis" className="sec-title sec-title-light">
              Sklo je od nás vidět léta dopředu
            </h2>
            <p className="duvera-lead">
              Špatně vylepené sklo pustí vodu, píská a při nárazu nedrží. Proto
              lepíme na originální tmely s předepsanou dobou vytvrzení a auto
              vydáváme, až když je bezpečné vyrazit.
            </p>

            <dl className="metriky">
              {duvody.map((d) => (
                <div className="metrika" key={d.cislo}>
                  <dt className="metrika-cislo">
                    {d.cislo}
                    <span className="metrika-jednotka">{d.jednotka}</span>
                  </dt>
                  <dd className="metrika-text">{d.text}</dd>
                </div>
              ))}
            </dl>

            <div className="kontakt-karta">
              <div>
                <p className="kontakt-label">Kde nás najdete</p>
                <p className="kontakt-hodnota">
                  Libušská 196, Praha 4 · 142 00
                </p>
              </div>
              <a className="btn btn-primary" href="tel:+420603576514">
                Zavolat 603 576 514
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
