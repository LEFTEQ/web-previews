export const metadata = {
  title: "Fuchs malíř — malířství a lakýrnictví, Praha 10 Vršovice",
  description:
    "Malířské, lakýrnické a renovační práce v Praze a Středních Čechách. Přes 20 let zkušeností. Vymalování bytů, renovace dveří a oken, sádrokartony, podlahy. Ruská 96, Praha 10.",
  openGraph: {
    title: "Fuchs malíř — malířství a lakýrnictví, Praha 10",
    description:
      "Vymalujeme byt, zrenovujeme dveře i okna, položíme podlahu. 20 let řemesla v Praze a Středních Čechách.",
    type: "website",
    locale: "cs_CZ",
  },
};

const sluzby = [
  {
    kod: "BÍLÁ 03",
    barva: "#F6F3EC",
    nazev: "Malování bytů a domů",
    popis:
      "Pokoje, chodby, schodiště i celé domy. Nábytek zakryjeme, po sobě uklidíme. Běžný byt 2+kk zvládneme za dva dny — večer už můžete spát ve svém.",
  },
  {
    kod: "LAK 11",
    barva: "#2E4B6E",
    nazev: "Renovace dveří a oken",
    popis:
      "Stará kastlová okna a dveře neměníme, vracíme je do formy. Obrousíme, vytmelíme, nalakujeme. Špaletová okna ve vršovických činžácích jsou naše parketa.",
  },
  {
    kod: "ŠEĎ 07",
    barva: "#B9BCB6",
    nazev: "Zednické práce a sádrokartony",
    popis:
      "Štukování, opravy omítek, příčky a podhledy ze sádrokartonu. Připravíme stěny tak, aby výmalba držela a vypadala dobře i za pět let.",
  },
  {
    kod: "DUB 21",
    barva: "#A56A3A",
    nazev: "Podlahy: plovoucí, PVC, koberce",
    popis:
      "Položíme plovoucí podlahu, PVC i koberec včetně vyrovnání podkladu a lišt. Když malujeme a zároveň měníte podlahu, sladíme obojí v jednom termínu.",
  },
];

const duvera = [
  {
    cislo: "20+",
    text: "let ve stavebnictví a renovacích — od panelákových bytů po prvorepublikové činžáky.",
  },
  {
    cislo: "2",
    text: "dny obvykle stačí na výmalbu běžného bytu, včetně zakrytí a úklidu.",
  },
  {
    cislo: "1",
    text: "kontaktní osoba od prohlídky po předání. Domlouváte se přímo s tím, kdo u vás bude pracovat.",
  },
];

export default function Page() {
  return (
    <main className="fm">
      {/* ===== HERO ===== */}
      <section className="fm-hero" aria-label="Fuchs malíř — úvod">
        <header className="fm-topbar">
          <div className="fm-wordmark" aria-label="Fuchs malíř">
            <span className="fm-wordmark-fuchs">FUCHS</span>
            <span className="fm-wordmark-malir">malíř</span>
          </div>
          <p className="fm-topbar-loc">Praha 10 — Vršovice</p>
        </header>

        <div className="fm-hero-body">
          <p className="fm-hero-eyebrow">Malířství &amp; lakýrnictví · přes 20 let</p>
          <h1 className="fm-hero-title">
            <span className="fm-hero-line fm-hero-line-1">Natíráme,</span>
            <span className="fm-hero-line fm-hero-line-2">malujeme,</span>
            <span className="fm-hero-line fm-hero-line-3">
              renovujeme<span className="fm-hero-dot">.</span>
            </span>
          </h1>
          <p className="fm-hero-sub">
            Byty, dveře, okna i podlahy po Praze a Středních Čechách. Přijedeme,
            zakryjeme, odvedeme práci a uklidíme po sobě.
          </p>

          <div className="fm-hero-actions">
            <a className="fm-btn fm-btn-primary" href="tel:+420602000000">
              Zavolat a domluvit prohlídku
            </a>
            <a className="fm-btn fm-btn-ghost" href="mailto:info@fuchsmalir.cz">
              Napsat e‑mail
            </a>
          </div>
        </div>

        {/* Signature: čtyři tahy štětcem — vzorník firmy */}
        <div className="fm-strokes" aria-hidden="true">
          <div className="fm-stroke fm-stroke-1"></div>
          <div className="fm-stroke fm-stroke-2"></div>
          <div className="fm-stroke fm-stroke-3"></div>
          <div className="fm-stroke fm-stroke-4"></div>
        </div>
      </section>

      {/* ===== SLUŽBY ===== */}
      <section className="fm-sluzby" aria-labelledby="sluzby-nadpis">
        <div className="fm-section-head">
          <h2 id="sluzby-nadpis" className="fm-section-title">
            Co pro vás uděláme
          </h2>
          <p className="fm-section-note">
            Každá služba má u nás svůj odstín — jako karta ve vzorníku.
          </p>
        </div>

        <ul className="fm-karty">
          {sluzby.map((s) => (
            <li key={s.kod} className="fm-karta">
              <div
                className="fm-karta-vzorek"
                style={{ backgroundColor: s.barva }}
              >
                <span
                  className={
                    s.barva === "#F6F3EC" || s.barva === "#B9BCB6"
                      ? "fm-karta-kod fm-karta-kod-dark"
                      : "fm-karta-kod"
                  }
                >
                  {s.kod}
                </span>
              </div>
              <div className="fm-karta-text">
                <h3 className="fm-karta-nazev">{s.nazev}</h3>
                <p className="fm-karta-popis">{s.popis}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* ===== DŮVĚRA / O NÁS ===== */}
      <section className="fm-duvera" aria-labelledby="duvera-nadpis">
        <div className="fm-duvera-inner">
          <div className="fm-duvera-uvod">
            <h2 id="duvera-nadpis" className="fm-section-title fm-section-title-light">
              Řemeslo, které po sobě necháme jen v barvě
            </h2>
            <p className="fm-duvera-text">
              Fuchs malíř sídlí v Ruské ulici ve Vršovicích a pracuje po celé
              Praze a Středních Čechách. Bereme standardní zakázky i ty
              neobvyklé — vysoké stropy, štuková zdobení, okna, na která si
              jiní netroufnou. Cenu řekneme po prohlídce a platí až do předání.
            </p>
          </div>

          <ul className="fm-cisla">
            {duvera.map((d) => (
              <li key={d.cislo} className="fm-cislo">
                <span className="fm-cislo-hodnota">{d.cislo}</span>
                <p className="fm-cislo-text">{d.text}</p>
              </li>
            ))}
          </ul>

          <figure className="fm-reference">
            <blockquote>
              „Vymalovali nám byt 3+1 na Kubánském náměstí a zrenovovali všechna
              špaletová okna. Přišli, kdy slíbili, a po odchodu jsme nenašli
              jedinou kapku barvy tam, kde neměla být.“
            </blockquote>
            <figcaption>— rodina Novákových, Vršovice</figcaption>
          </figure>
        </div>
      </section>
    </main>
  );
}
