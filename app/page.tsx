import type { CSSProperties } from "react";

const services = [
  { n: "01", t: "Revize elektroinstalace", d: "Revize instalací, spotřebičů i hromosvodu — s revizní zprávou pro úřad i pojišťovnu." },
  { n: "02", t: "Elektroinstalace na klíč", d: "Hrubé i kompletační práce od prvního drátu po funkční rozvaděč." },
  { n: "03", t: "Projekt elektroinstalace", d: "Zpracujeme projekt instalace i navazujících technologií." },
  { n: "04", t: "Zabezpečení EZS", d: "Instalujeme systémy Jablotron, AJAX i Paradox proti vloupání." },
  { n: "05", t: "Kamerové systémy HIKVISION", d: "Kamery pro rodinný dům, chatu i firemní areál." },
  { n: "06", t: "Domácí telefony a videotelefony", d: "Obměna starých zvonkových systémů za nové videotelefony." },
  { n: "07", t: "LED osvětlení na míru", d: "Navrhujeme a montujeme úsporná svítidla přesně do prostoru." },
  { n: "08", t: "Hromosvod včetně revize", d: "Kompletní instalace jímací soustavy a její výchozí revize." },
  { n: "09", t: "Chytrá domácnost Loxone", d: "Certifikovaný partner Loxone — od projektu po spuštění." },
];

const readout = [
  { k: "Izolační odpor  R_iso", v: ">999 MΩ", ok: "OK" },
  { k: "Impedance smyčky  Z_s", v: "0,38 Ω", ok: "OK" },
  { k: "Proudový chránič  RCD", v: "24 ms", ok: "OK" },
  { k: "Ochrana PE  spojitost", v: "spojitá", ok: "OK" },
];

const steps = [
  { n: "01", t: "Poptávka", d: "Napíšete nám stručně, co potřebujete. Ozveme se obvykle do druhého dne." },
  { n: "02", t: "Návrh řešení", d: "Přijedeme na místo v Brně a navrhneme nejlepší variantu pro váš objekt." },
  { n: "03", t: "Kalkulace", d: "Dostanete detailní nabídku s materiálem i prací — bez schovaných položek." },
  { n: "04", t: "Realizace", d: "Uzavřeme smlouvu o dílo a v dohodnutém termínu se pustíme do práce." },
];

const realizace = [
  { obor: "Revize", t: "Elektrorevize bytového domu", m: "Brno — Vančurova" },
  { obor: "Rozvaděč", t: "Nový rozvaděč sportoviště", m: "Brno — Padel za Lužánkami" },
  { obor: "Instalace", t: "Elektroinstalace chaty", m: "Brněnská přehrada" },
  { obor: "Osvětlení", t: "LED osvětlení rodinného domu", m: "Tasov" },
  { obor: "Osvětlení", t: "Osvětlení novostavby RD", m: "Lesní Hluboké" },
  { obor: "Instalace", t: "Elektroinstalace salonu", m: "Brno — salon krásy" },
];

const partneri = ["Loxone — certifikovaný partner", "Jablotron", "AJAX", "Paradox", "HIKVISION"];

function delay(s: number): CSSProperties {
  return { animationDelay: `${s}s` };
}

export default function Page() {
  return (
    <main className="page">
      <header className="topbar">
        <a className="wm" href="#top" aria-label="DratON Elektro — úvod">
          <span className="wm__mark" aria-hidden="true" />
          <span className="wm__txt">
            Drat<span className="wm__on">ON</span>
          </span>
          <span className="wm__sub">Elektro · Brno</span>
        </a>
        <nav className="topnav" aria-label="Hlavní">
          <a href="#sluzby">Služby</a>
          <a href="#reference">Reference</a>
          <a className="topnav__call" href="tel:+420775180001">775 180 001</a>
        </nav>
      </header>

      <section className="hero" id="top">
        <img className="hero__bg" src="/hero.webp" alt="Elektrikář z DratON Elektro při zapojování domovního rozvaděče v Brně" />
        <div className="hero__veil" aria-hidden="true" />
        <div className="hero__inner">
          <div className="hero__copy">
            <p className="eyebrow reveal" style={delay(0.05)}>
              Revize · Elektroinstalace · Zabezpečení
            </p>
            <h1 className="reveal" style={delay(0.14)}>
              Elektřina pod&nbsp;kontrolou. <span>Od revize po chytrou domácnost.</span>
            </h1>
            <p className="hero__lede reveal" style={delay(0.24)}>
              V Brně a okolí navrhneme, zapojíme a zrevidujeme elektroinstalaci vaší nemovitosti.
              Dostanete razítko revizního technika i jistotu, že všechno bezpečně funguje.
            </p>
            <div className="hero__cta reveal" style={delay(0.34)}>
              <a className="btn btn--primary" href="#reference">Získat nacenění zdarma</a>
              <a className="btn btn--ghost" href="tel:+420775180001">Zavolat 775&nbsp;180&nbsp;001</a>
            </div>
            <ul className="hero__stats reveal" style={delay(0.44)}>
              <li><b>250+</b> realizovaných zakázek</li>
              <li><b>10+</b> let praxe v oboru</li>
              <li><b>1/3</b> volné kapacity na projekty</li>
            </ul>
          </div>

          <aside className="panel reveal" style={delay(0.3)} aria-label="Ukázkový výstup revize">
            <div className="panel__scan" aria-hidden="true" />
            <div className="panel__head">
              <span className="panel__led" aria-hidden="true" />
              <span className="panel__title">Výstup revize</span>
              <span className="panel__id">č. 2025-138</span>
            </div>
            <dl className="panel__rows">
              {readout.map((r) => (
                <div className="panel__row" key={r.k}>
                  <dt>{r.k}</dt>
                  <dd className="panel__val">{r.v}</dd>
                  <dd className="panel__ok">{r.ok}</dd>
                </div>
              ))}
            </dl>
            <div className="panel__verdict">
              <span className="panel__verdict-k">Závěr</span>
              <span className="panel__verdict-v">Schopna bezpečného provozu</span>
            </div>
          </aside>
        </div>
      </section>

      <div className="pe-stripe" role="presentation" aria-hidden="true" />

      <section className="services" id="sluzby">
        <div className="section__head">
          <p className="eyebrow eyebrow--dark">Katalog služeb</p>
          <h2>Elektroinstalace od&nbsp;A po&nbsp;razítko</h2>
          <p className="section__lede">
            Odborné práce i dokumentace pod jednou střechou — od projektu přes montáž až po
            revizní zprávu, kterou uznají úřady i pojišťovny.
          </p>
        </div>

        <div className="services__layout">
          <ol className="catalog">
            {services.map((s) => (
              <li className="catalog__item" key={s.n}>
                <span className="catalog__n">{s.n}</span>
                <div className="catalog__body">
                  <h3>{s.t}</h3>
                  <p>{s.d}</p>
                </div>
              </li>
            ))}
          </ol>

          <figure className="services__fig">
            <img src="/section-1.webp" alt="Detail domovního rozvaděče s jističi zapojeného technikem DratON Elektro" />
            <figcaption>
              Rozvaděč popsaný a odzkoušený — každý okruh dohledáte podle štítku.
              <span className="services__extra">
                Řešíme i slaboproudé rozvody, podlahové topení a přípojky NN.
              </span>
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="trust" id="reference">
        <div className="section__head section__head--light">
          <p className="eyebrow">Proč DratON</p>
          <h2>Řemeslo, které projde&nbsp;kontrolou</h2>
          <p className="section__lede section__lede--light">
            Pracujeme v Brně a po celém Jihomoravském kraji. Máte volnou kapacitu, pevné termíny
            a jednoho člověka, který za práci ručí od návrhu po revizi.
          </p>
        </div>

        <div className="trust__partners">
          <span className="trust__partners-label">Instalujeme a certifikujeme:</span>
          <ul>
            {partneri.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
        </div>

        <div className="trust__grid">
          <div className="trust__col">
            <h3 className="trust__h">Jak to u nás probíhá</h3>
            <ol className="steps">
              {steps.map((st) => (
                <li className="step" key={st.n}>
                  <span className="step__n">{st.n}</span>
                  <div>
                    <h4>{st.t}</h4>
                    <p>{st.d}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <div className="trust__col">
            <h3 className="trust__h">Vybrané realizace 2025</h3>
            <ul className="refs">
              {realizace.map((r) => (
                <li className="ref" key={r.t}>
                  <span className="ref__tag">{r.obor}</span>
                  <span className="ref__t">{r.t}</span>
                  <span className="ref__m">{r.m}</span>
                </li>
              ))}
            </ul>
            <figure className="trust__fig">
              <img src="/section-2.webp" alt="Hotová elektroinstalace a osvětlení v realizaci DratON Elektro v Brně" />
            </figure>
          </div>
        </div>
      </section>
    </main>
  );
}
