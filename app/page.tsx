import type { CSSProperties } from "react";

export const metadata = {
  title: "VK koupelny — rekonstrukce koupelen v Brně",
  description:
    "Kompletní rekonstrukce koupelen v Brně na klíč. Od demolice po poslední spáru. Řemeslný tým s praxí od roku 2008.",
};

const kroky = [
  {
    faze: "01",
    nazev: "Bourání a příprava",
    popis:
      "Vyklidíme starou koupelnu, odvezeme suť, zaměříme prostor. Do dvou dnů máte hrubou stavbu připravenou pod nové rozvody.",
    detail: "2–3 dny",
  },
  {
    faze: "02",
    nazev: "Rozvody a izolace",
    popis:
      "Nová voda, odpady, elektro. Sprchový kout hydroizolujeme stěrkou pod obklad — tady se rozhoduje, jestli koupelna vydrží 20 let.",
    detail: "3–4 dny",
  },
  {
    faze: "03",
    nazev: "Obklady a dlažba",
    popis:
      "Klademe velkoformáty i mozaiku, řešíme spádování, spáry ve stejném odstínu a rohy bez lišt, když si to přejete.",
    detail: "4–6 dní",
  },
  {
    faze: "04",
    nazev: "Montáž a předání",
    popis:
      "Zavěsíme umyvadlo, osadíme baterie Hansgrohe, sprchový kout, nábytek. Uklidíme a předáme hotovou koupelnu k užívání.",
    detail: "2–3 dny",
  },
];

const duvery = [
  {
    cislo: "2008",
    popis: "Rok, kdy jsme založili VK koupelny. Montážní řemeslo v Brně ale děláme přes 20 let.",
  },
  {
    cislo: "1",
    popis: "Jeden tým od bourání po silikon. Nekoordinujete pět různých firem — voláte na jedno číslo.",
  },
  {
    cislo: "Brno",
    popis: "Prodejna na Palackého třídě 27. Přijďte si obklady osahat, než je objednáme.",
  },
];

export default function Page() {
  return (
    <main className="vk-page">
      <header className="vk-topbar">
        <a className="vk-wordmark" href="#" aria-label="VK koupelny — úvod">
          <span className="vk-wordmark-vk">VK</span>
          <span className="vk-wordmark-rest">koupelny</span>
        </a>
        <a className="vk-topphone" href="tel:+420725827117">
          725&nbsp;827&nbsp;117
        </a>
      </header>

      <section className="vk-hero" aria-labelledby="vk-hero-nadpis">
        <div className="vk-hero-grid" aria-hidden="true">
          {Array.from({ length: 96 }).map((_, i) => (
            <span
              key={i}
              className="vk-tile"
              style={{ "--i": i } as CSSProperties}
            />
          ))}
        </div>

        <div className="vk-hero-inner">
          <p className="vk-eyebrow">Rekonstrukce koupelen · Brno</p>
          <h1 id="vk-hero-nadpis" className="vk-hero-title">
            <span className="vk-line vk-line-a">Stará koupelna</span>
            <span className="vk-line vk-line-b">ven.</span>
            <span className="vk-line vk-line-c">Nová</span>
            <span className="vk-line vk-line-d">na klíč.</span>
          </h1>
          <p className="vk-hero-lead">
            Vybouráme, natáhneme rozvody, obložíme, osadíme baterie i nábytek —
            a předáme hotové. Jeden brněnský tým od první rány kladivem po
            poslední spáru.
          </p>
          <div className="vk-hero-actions">
            <a className="vk-btn vk-btn-primary" href="tel:+420725827117">
              Zavolat 725&nbsp;827&nbsp;117
            </a>
            <a className="vk-btn vk-btn-ghost" href="#postup">
              Jak to probíhá
            </a>
          </div>
        </div>
      </section>

      <section className="vk-section vk-postup" id="postup" aria-labelledby="vk-postup-nadpis">
        <div className="vk-section-head">
          <p className="vk-eyebrow vk-eyebrow-dark">Postup</p>
          <h2 id="vk-postup-nadpis" className="vk-section-title">
            Čtyři fáze od holých zdí k&nbsp;hotové koupelně
          </h2>
          <p className="vk-section-lead">
            Průměrná rekonstrukce koupelny v panelovém bytě u nás trvá dva až tři
            týdny. Předem víte, co se který den děje a kdy je hotovo.
          </p>
        </div>

        <ol className="vk-kroky">
          {kroky.map((k) => (
            <li className="vk-krok" key={k.faze}>
              <div className="vk-krok-cislo" aria-hidden="true">
                {k.faze}
              </div>
              <div className="vk-krok-body">
                <h3 className="vk-krok-nazev">{k.nazev}</h3>
                <p className="vk-krok-popis">{k.popis}</p>
                <span className="vk-krok-detail">{k.detail}</span>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="vk-section vk-onas" aria-labelledby="vk-onas-nadpis">
        <div className="vk-section-head">
          <p className="vk-eyebrow">Kdo to dělá</p>
          <h2 id="vk-onas-nadpis" className="vk-section-title vk-section-title-light">
            Za názvem stojí brněnská montážní parta
          </h2>
          <p className="vk-section-lead vk-section-lead-light">
            Firmu VK koupelny jsme založili v roce 2008, abychom dělali koupelny
            líp než jako subdodavatelé někoho jiného. Materiál i baterie
            Hansgrohe si můžete přijít vybrat do naší prodejny na Palackého třídě.
          </p>
        </div>

        <ul className="vk-duvery">
          {duvery.map((d, i) => (
            <li className="vk-duvera" key={i}>
              <span className="vk-duvera-cislo">{d.cislo}</span>
              <span className="vk-duvera-popis">{d.popis}</span>
            </li>
          ))}
        </ul>

        <div className="vk-adresa">
          <p className="vk-adresa-radek">
            <strong>Prodejna</strong> Palackého třída 27, 612&nbsp;00 Brno
          </p>
          <p className="vk-adresa-radek">
            <strong>Otevřeno</strong> Po–Pá 9:00–17:30
          </p>
          <p className="vk-adresa-radek">
            <strong>Napište</strong>{" "}
            <a href="mailto:info@vk-koupelny.cz">info@vk-koupelny.cz</a>
          </p>
        </div>
      </section>
    </main>
  );
}
