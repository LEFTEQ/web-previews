import React from "react";

const sluzby = [
  {
    mesic: "Bře–Kvě",
    nazev: "Jarní probuzení",
    popis:
      "Vyhrabání trávníku, provzdušnění, první seč a hnojení. Řez růží a okrasných keřů, výsadba letniček. Zahrada vyrazí do sezóny odpočatá.",
    detaily: ["Vertikutace a provzdušnění", "Řez růží a keřů", "Výsadba letniček"],
  },
  {
    mesic: "Čer–Srp",
    nazev: "Letní údržba",
    popis:
      "Pravidelná seč každých 10–14 dní, zálivka, tvarování živých plotů. Postaráme se, aby zahrada držela krok i v největším horku.",
    detaily: ["Seč po 10–14 dnech", "Tvarování plotů", "Odplevelení záhonů"],
  },
  {
    mesic: "Zář–Lis",
    nazev: "Podzimní sklizeň",
    popis:
      "Prořezy ovocných stromů, odvoz listí, výsadba cibulovin a stromů. Kácení tam, kde je potřeba, včetně odvozu dřeva.",
    detaily: ["Prořez ovocných stromů", "Kácení a odvoz", "Výsadba cibulovin"],
  },
  {
    mesic: "Pro–Úno",
    nazev: "Zimní klid",
    popis:
      "Zimní řez stromů, výroba laviček, záhonů a plotů v naší dílně, návrhy zahrad na příští sezónu. Zima je čas plánovat.",
    detaily: ["Zimní řez stromů", "Truhlářská výroba", "Návrhy zahrad"],
  },
];

const realizace = [
  {
    img: "/section-1.webp",
    alt: "Pravidelná údržba rozlehlé zahrady v areálu Lázní Velichovky",
    misto: "Lázně Velichovky",
    nazev: "Bludiště a údržba lázeňského parku",
    text: "Příprava zahradního bludiště a pravidelná péče o rozlehlé plochy lázeňského areálu po celou sezónu.",
  },
  {
    img: "/section-2.webp",
    alt: "Zahrada rodinného domu od návrhu po realizaci a údržbu",
    misto: "Hradec Králové",
    nazev: "Zahrada rodinného domu",
    text: "Od prvního návrhu přes výsadbu až po pravidelnou údržbu. Kompletní proměna zahrady u rodinného domu.",
  },
];

export default function Page() {
  return (
    <main className="pz">
      <header className="pz-nav">
        <a className="pz-brand" href="#" aria-label="Pan Zahradník, úvod">
          <span className="pz-brand-mark" aria-hidden="true">
            <svg viewBox="0 0 32 32" width="28" height="28" role="img">
              <path d="M16 3C10 8 6 13 6 19a10 10 0 0 0 20 0c0-6-4-11-10-16Z" fill="currentColor" />
              <path d="M16 12v14" stroke="#0f2417" strokeWidth="1.6" strokeLinecap="round" />
            </svg>
          </span>
          <span className="pz-brand-text">
            <span className="pz-brand-line1">Pan</span>
            <span className="pz-brand-line2">Zahradník</span>
          </span>
        </a>
        <a className="pz-nav-cta" href="tel:+420602664168">Zavolat</a>
      </header>

      <section className="pz-hero">
        <img className="pz-hero-img" src="/hero.webp" alt="Upravená zahrada s posekaným trávníkem a květinovými záhony" />
        <div className="pz-hero-veil" aria-hidden="true" />
        <div className="pz-hero-inner">
          <p className="pz-eyebrow">Údržba zahrad · Hradec Králové a okolí</p>
          <h1 className="pz-hero-title">
            Vaše zahrada<br />
            <em>po celý rok</em><br />
            v jedněch rukou
          </h1>
          <p className="pz-hero-lead">
            Sekání, prořezy, výsadba i truhlářská výroba na míru. Přijedeme, domluvíme se u vás na zahradě
            a postaráme se o ni v každém ročním období — 15 let, spousta spokojených sousedů.
          </p>
          <div className="pz-hero-actions">
            <a className="pz-btn" href="tel:+420602664168">Domluvit prohlídku</a>
            <a className="pz-btn pz-btn-ghost" href="#sezona">Co děláme v sezóně</a>
          </div>
          <p className="pz-hero-note">
            <strong>5,0</strong> z 30+ recenzí · Labská 347, Předměřice nad Labem
          </p>
        </div>
      </section>

      <section className="pz-season" id="sezona" aria-labelledby="sezona-nadpis">
        <div className="pz-section-head">
          <p className="pz-eyebrow pz-eyebrow-dark">Zahradní kalendář</p>
          <h2 className="pz-h2" id="sezona-nadpis">
            Každý měsíc má svou práci.<br />My víme kterou.
          </h2>
          <p className="pz-section-lead">
            Zahrada nefunguje na jednu návštěvu. Provedeme vás celým rokem — od jarního probuzení
            po zimní řez v dílně. Vyberte si období nebo nám nechte péči na celý rok.
          </p>
        </div>

        <ol className="pz-cal">
          {sluzby.map((s) => (
            <li className="pz-cal-item" key={s.nazev}>
              <div className="pz-cal-month">{s.mesic}</div>
              <h3 className="pz-cal-title">{s.nazev}</h3>
              <p className="pz-cal-text">{s.popis}</p>
              <ul className="pz-cal-list">
                {s.detaily.map((d) => (
                  <li key={d}>{d}</li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </section>

      <section className="pz-work" aria-labelledby="work-nadpis">
        <div className="pz-section-head">
          <p className="pz-eyebrow pz-eyebrow-dark">Ukázky realizací</p>
          <h2 className="pz-h2" id="work-nadpis">
            Podání ruky, rozum v hrsti<br />a srdce na správném místě.
          </h2>
          <p className="pz-section-lead">
            Za 15 let v oboru víme, co je opravdu důležité. K malým i velkým zahradám přistupujeme
            stejně — s přátelským přístupem budujeme důvěru a dlouhodobou spolupráci.
          </p>
        </div>

        <div className="pz-work-grid">
          {realizace.map((r) => (
            <article className="pz-work-card" key={r.nazev}>
              <img className="pz-work-img" src={r.img} alt={r.alt} loading="lazy" />
              <div className="pz-work-body">
                <p className="pz-work-place">{r.misto}</p>
                <h3 className="pz-work-title">{r.nazev}</h3>
                <p className="pz-work-text">{r.text}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="pz-trust">
          <div className="pz-trust-num">
            <span className="pz-trust-big">15</span>
            <span className="pz-trust-lbl">let v zahradách<br />Královéhradecka</span>
          </div>
          <blockquote className="pz-trust-quote">
            „Týmová spolupráce a radost z práce je to, čím vynikáme. Přijedeme, poradíme a zahradu
            necháme v lepším stavu, než jsme ji našli.“
            <cite>— Martin, Pan Zahradník s.r.o.</cite>
          </blockquote>
        </div>
      </section>
    </main>
  );
}
