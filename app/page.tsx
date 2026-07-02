const trasy = [
  { z: "České Budějovice", do: "Linz", km: "95 km", pozn: "denní linka" },
  { z: "České Budějovice", do: "Praha", km: "150 km", pozn: "do 3 hodin" },
  { z: "České Budějovice", do: "Mnichov", km: "290 km", pozn: "do 24 hodin" },
  { z: "České Budějovice", do: "Vídeň", km: "210 km", pozn: "do 24 hodin" },
];

const sluzby = [
  {
    kod: "FTL",
    nazev: "Celovozové přepravy",
    popis:
      "Plachtové návěsy 13,6 m s nosností 24 tun. Vaše zboží jede samostatně, bez překládek a bez čekání na dokládku. Naložíme v Budějovicích ráno, v Bavorsku jste odpoledne.",
    detail: "návěs 13,6 m · 24 t · 34 palet",
  },
  {
    kod: "LTL",
    nazev: "Dokládky a kusové zásilky",
    popis:
      "Nemáte plný kamion? Spojíme vaši zásilku s dalšími na stejné trase. Platíte jen za místo, které skutečně zaberete — od jedné palety výš.",
    detail: "od 1 palety · pevný termín nakládky",
  },
  {
    kod: "VNP",
    nazev: "Vnitrostátní rozvozy",
    popis:
      "Rozvozy po jižních Čechách a celé ČR menšími vozy do 7,5 tuny. Stavebniny, technologie, palety pro výrobu — co potřebujete mít na místě zítra ráno.",
    detail: "vozy 3,5–7,5 t · hydraulické čelo",
  },
  {
    kod: "ADR",
    nazev: "Přeprava ADR",
    popis:
      "Řidiči s platným osvědčením ADR a vozy vybavené pro přepravu nebezpečných věcí. Barvy, chemie, technické plyny — s kompletní dokumentací.",
    detail: "třídy 3, 8, 9 · proškolení řidiči",
  },
];

const duvody = [
  {
    cislo: "27",
    jednotka: "let na silnici",
    text: "Jezdíme od devadesátých let. Dispečeři, kteří vám zvednou telefon, sedí v Budějovicích — ne v call centru.",
  },
  {
    cislo: "14",
    jednotka: "vlastních vozidel",
    text: "Vlastní flotila znamená, že víme přesně, kde vaše zboží je. Žádné přeprodávání zakázek anonymním dopravcům.",
  },
  {
    cislo: "98 %",
    jednotka: "nakládek včas",
    text: "Termín nakládky je pro nás závazek. Když se něco zdrží, voláme my vám — ne naopak.",
  },
];

const reference = [
  {
    citace:
      "Vozí nám materiál z Rakouska dvakrát týdně už pátým rokem. Za tu dobu jediné zpoždění — a to nám dali vědět dřív, než jsme se stačili zeptat.",
    kdo: "vedoucí nákupu, strojírenská výroba, Českobudějovicko",
  },
  {
    citace:
      "Potřebovali jsme narychlo dostat dvě palety do Mnichova. V pátek odpoledne jsem volal, v pondělí ráno bylo zboží u zákazníka.",
    kdo: "jednatel, velkoobchod technikou, Tábor",
  },
];

export default function Page() {
  return (
    <main className="fr">
      {/* ===== HERO ===== */}
      <header className="fr-hero">
        <div className="fr-hero-top">
          <div className="fr-wordmark" aria-label="Freylach, autodoprava">
            <span className="fr-wordmark-name">FREYLACH</span>
            <span className="fr-wordmark-sub">autodoprava · České Budějovice</span>
          </div>
          <a className="fr-hero-tel" href="tel:+420387000000">
            Dispečink: 387 000 000
          </a>
        </div>

        <div className="fr-hero-body">
          <p className="fr-hero-eyebrow">Celovozové a kusové přepravy · ČR / DE / AT</p>
          <h1 className="fr-hero-title">
            <span className="fr-hero-line fr-hero-line-1">Naložíme</span>
            <span className="fr-hero-line fr-hero-line-2">v&nbsp;Budějovicích,</span>
            <span className="fr-hero-line fr-hero-line-3">
              vyložíme <em>kdekoli</em>.
            </span>
          </h1>
          <p className="fr-hero-perex">
            Rodinná autodoprava s vlastní flotilou čtrnácti vozidel. Denní linky do
            Rakouska a Bavorska, rozvozy po celé republice. Když řekneme termín, platí.
          </p>
        </div>

        {/* signature: mýtná tabule / jízdní řád tras */}
        <div className="fr-board" role="list" aria-label="Nejčastější trasy">
          <div className="fr-board-head" aria-hidden="true">
            <span>odkud</span>
            <span></span>
            <span>kam</span>
            <span>vzdálenost</span>
            <span>dodání</span>
          </div>
          {trasy.map((t, i) => (
            <div className="fr-board-row" role="listitem" key={t.do} style={{ animationDelay: `${0.55 + i * 0.13}s` }}>
              <span className="fr-board-z">{t.z}</span>
              <span className="fr-board-arrow" aria-hidden="true">
                <span className="fr-board-dash"></span>
              </span>
              <span className="fr-board-do">{t.do}</span>
              <span className="fr-board-km">{t.km}</span>
              <span className="fr-board-pozn">{t.pozn}</span>
            </div>
          ))}
        </div>

        <div className="fr-hero-stripe" aria-hidden="true">
          <div className="fr-hero-stripe-inner">
            E55&nbsp;·&nbsp;D3&nbsp;·&nbsp;A1&nbsp;·&nbsp;E49&nbsp;·&nbsp;A8&nbsp;·&nbsp;D1&nbsp;·&nbsp;E55&nbsp;·&nbsp;D3&nbsp;·&nbsp;A1&nbsp;·&nbsp;E49&nbsp;·&nbsp;A8&nbsp;·&nbsp;D1&nbsp;·&nbsp;
          </div>
        </div>
      </header>

      {/* ===== SLUŽBY ===== */}
      <section className="fr-sluzby" aria-labelledby="sluzby-h">
        <div className="fr-section-head">
          <h2 id="sluzby-h" className="fr-section-title">
            Co vozíme a jak
          </h2>
          <p className="fr-section-perex">
            Čtyři způsoby, jak dostat vaše zboží tam, kde má být. Zavolejte dispečink a
            do hodiny víte cenu i termín.
          </p>
        </div>

        <div className="fr-sluzby-grid">
          {sluzby.map((s) => (
            <article className="fr-karta" key={s.kod}>
              <div className="fr-karta-kod" aria-hidden="true">
                {s.kod}
              </div>
              <h3 className="fr-karta-nazev">{s.nazev}</h3>
              <p className="fr-karta-popis">{s.popis}</p>
              <p className="fr-karta-detail">{s.detail}</p>
            </article>
          ))}
        </div>
      </section>

      {/* ===== DŮVĚRA ===== */}
      <section className="fr-duvera" aria-labelledby="duvera-h">
        <div className="fr-section-head fr-section-head-inv">
          <h2 id="duvera-h" className="fr-section-title">
            Proč Budějovičtí vozí s&nbsp;námi
          </h2>
          <p className="fr-section-perex">
            Autodoprava je řemeslo důvěry. Zboží vám svěří jen ten, kdo ví, že dorazí.
          </p>
        </div>

        <div className="fr-duvody">
          {duvody.map((d) => (
            <div className="fr-duvod" key={d.jednotka}>
              <div className="fr-duvod-cislo">
                {d.cislo}
                <span className="fr-duvod-jednotka">{d.jednotka}</span>
              </div>
              <p className="fr-duvod-text">{d.text}</p>
            </div>
          ))}
        </div>

        <div className="fr-reference">
          {reference.map((r) => (
            <blockquote className="fr-ref" key={r.kdo}>
              <p className="fr-ref-citace">„{r.citace}“</p>
              <footer className="fr-ref-kdo">— {r.kdo}</footer>
            </blockquote>
          ))}
        </div>
      </section>
    </main>
  );
}
