import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lešení Rar — lešenářský servis České Budějovice",
  description:
    "Montáž a demontáž rámového, trubkového i prostorového lešení PERI a RINGER. Kompletní lešenářský servis v Českých Budějovicích od roku 1994.",
};

const sluzby = [
  {
    kod: "RÁM",
    nazev: "Rámové lešení PERI UP",
    popis:
      "Systémy T 70 a T 100 jako pracovní i ochranné lešení tříd 1–6. Konzoly, ochranné stříšky, chodníkové rámy, příhradové nosníky pro přemostění, sítě a plachty.",
    detail: "Šířka 72 / 104 cm · třída zatížení 0,75–6,00 kN/m²",
  },
  {
    kod: "PROSTOR",
    nazev: "Prostorové a podpěrné lešení",
    popis:
      "Podpěrné věže ST 100 a PERI UP Rosett pro pozemní i inženýrské stavby. Těžké skruže pod mostní konstrukce a schodiště PERI UP Flex až do výšky 90 m.",
    detail: "Variabilní půdorys 1,5–3,0 m · zatížení schodiště 2,00 kN/m²",
  },
  {
    kod: "VÝTAH",
    nazev: "Stavební výtahy GEDA 200Z",
    popis:
      "Přeprava materiálu do 200 kg přímo na patra. Klec 124 × 83 × 110 cm. Rychlé nasazení tam, kde by ruční nošení stálo hodiny.",
    detail: "Nosnost 200 kg · přeprava osob zakázána",
  },
  {
    kod: "OPLOCENÍ",
    nazev: "Mobilní oplocení staveniště",
    popis:
      "Dočasné ohrazení a řízení pohybu na staveništi i při speciálních akcích. Panely 3,5 × 2 m, přivezeme a postavíme.",
    detail: "Panel 3,5 × 2 m · dočasná ochrana staveniště",
  },
];

const kroky = [
  {
    c: "01",
    t: "Zaměření a projekt",
    d: "U speciálního lešení nakreslíme projekt. Přijedeme na stavbu, změříme fasádu a navrhneme sestavu na míru.",
  },
  {
    c: "02",
    t: "Montáž do termínu",
    d: "Staví ji naši profesionální montážníci z LEŠENÍ RAR SERVIS. Kvalitně a v dohodnutém termínu, ne až se uvolní parta.",
  },
  {
    c: "03",
    t: "Předání protokolem",
    d: "Lešení předáváme do užívání na předávací protokol. Vyhovuje EN 12810 a EN 12811 — máte to černé na bílém.",
  },
];

export default function Page() {
  return (
    <main className="rar">
      <header className="rar-nav">
        <a className="rar-brand" href="#" aria-label="Lešení Rar, domů">
          <span className="rar-brand-mark" aria-hidden="true">
            <span className="rar-bay" />
            <span className="rar-bay" />
            <span className="rar-bay" />
          </span>
          <span className="rar-brand-word">
            LEŠENÍ <strong>RAR</strong>
          </span>
        </a>
        <a className="rar-nav-tel" href="tel:+420774686334">
          +420 774 686 334
        </a>
      </header>

      <section className="rar-hero">
        <div className="rar-hero-media">
          <img
            src="/hero.webp"
            alt="Rámové lešení PERI postavené podél fasády budovy v Českých Budějovicích"
            className="rar-hero-img"
          />
          <div className="rar-hero-scrim" aria-hidden="true" />
        </div>
        <div className="rar-hero-inner">
          <p className="rar-eyebrow">Lešenářský servis · České Budějovice</p>
          <h1 className="rar-hero-title">
            Postavíme vám
            <br />
            <span className="rar-hero-accent">pevnou zem</span> ve výšce.
          </h1>
          <p className="rar-hero-lead">
            Rámové, trubkové i prostorové lešení PERI a RINGER. Montáž,
            demontáž a předání na protokol — od zaměření po poslední spojku.
            Řemeslo, které děláme od roku 1994.
          </p>
          <div className="rar-hero-actions">
            <a className="rar-btn rar-btn-primary" href="tel:+420774686334">
              Zavolat na stavbu
            </a>
            <a className="rar-btn rar-btn-ghost" href="#sluzby">
              Co půjčujeme a stavíme
            </a>
          </div>
          <dl className="rar-hero-facts">
            <div>
              <dt>od roku</dt>
              <dd>1994</dd>
            </div>
            <div>
              <dt>normy</dt>
              <dd>EN 12810 / 12811</dd>
            </div>
            <div>
              <dt>sídlo</dt>
              <dd>Č. Budějovice</dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="rar-services" id="sluzby" aria-labelledby="sluzby-nadpis">
        <div className="rar-section-head">
          <p className="rar-eyebrow">Vybavení a servis</p>
          <h2 id="sluzby-nadpis" className="rar-h2">
            Čtyři věci, kterými vás vytáhneme nahoru
          </h2>
          <p className="rar-section-sub">
            Vlastníme rámové lešení RINGER a PERI, stavební výtahy GEDA 200Z i
            mobilní oplocení. Půjčíme, přivezeme, postavíme.
          </p>
        </div>

        <ul className="rar-grid">
          {sluzby.map((s) => (
            <li className="rar-card" key={s.kod}>
              <span className="rar-card-tag">{s.kod}</span>
              <h3 className="rar-card-title">{s.nazev}</h3>
              <p className="rar-card-text">{s.popis}</p>
              <p className="rar-card-spec">{s.detail}</p>
            </li>
          ))}
        </ul>

        <figure className="rar-service-figure">
          <img
            src="/section-1.webp"
            alt="Detail smontovaného systémového lešení s podlážkami a zábradlím"
            className="rar-service-img"
          />
          <figcaption>
            Systém, který splňuje všechny zákonné požadavky na stabilitu a
            bezpečnost práce — výstupy najdete v Návodu k montáži a používání.
          </figcaption>
        </figure>
      </section>

      <section className="rar-about" id="o-nas" aria-labelledby="o-nas-nadpis">
        <div className="rar-about-grid">
          <div className="rar-about-copy">
            <p className="rar-eyebrow">Kdo lešení staví</p>
            <h2 id="o-nas-nadpis" className="rar-h2">
              Parta, která ví, co drží na kolika kilech.
            </h2>
            <p className="rar-about-text">
              LEŠENÍ RAR, s.r.o. zajišťuje kompletní lešenářský servis. V roce
              2000 jsme se transformovali na společnost s ručením omezeným —
              lešením se ale zabýváme už od roku 1994. Montáž a demontáž dělají
              profesionální montážníci firmy LEŠENÍ RAR SERVIS.
            </p>

            <ol className="rar-steps">
              {kroky.map((k) => (
                <li className="rar-step" key={k.c}>
                  <span className="rar-step-num">{k.c}</span>
                  <div>
                    <h3 className="rar-step-title">{k.t}</h3>
                    <p className="rar-step-text">{k.d}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <aside className="rar-about-side">
            <img
              src="/section-2.webp"
              alt="Montážníci Lešení Rar při práci na lešení u fasády"
              className="rar-about-img"
            />
            <div className="rar-people">
              <div className="rar-person">
                <p className="rar-person-name">Jan Ryba</p>
                <p className="rar-person-role">jednatel společnosti</p>
                <a className="rar-person-tel" href="tel:+420777686333">
                  +420 777 686 333
                </a>
              </div>
              <div className="rar-person">
                <p className="rar-person-name">Jan Marhoun</p>
                <p className="rar-person-role">provozní technik</p>
                <a className="rar-person-tel" href="tel:+420774686334">
                  +420 774 686 334
                </a>
              </div>
              <p className="rar-address">
                Dobrovodská 2284, 370 06 České Budějovice
              </p>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
