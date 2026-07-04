import type { CSSProperties } from "react";

export default function Page() {
  const okresy = [
    "Kladno",
    "Rakovník",
    "Mělník",
    "Beroun",
    "Plzeň",
    "Praha",
    "Praha-východ",
    "Praha-západ",
  ];

  const kalendar = [
    {
      mesic: "Březen – duben",
      titul: "Probuzení",
      text: "První seče, provzdušnění trávníku, řez růží a hnojení. Zahrada se probírá ze zimy — teď se rozhoduje, jak bude vypadat celou sezónu.",
    },
    {
      mesic: "Květen – srpen",
      titul: "Údržba v plném proudu",
      text: "Pravidelné seče, zálivka, tvarování živých plotů, kontrola zdraví vzrostlých stromů — kaštanů, lip, borovic i jedlí.",
    },
    {
      mesic: "Září – listopad",
      titul: "Příprava na zimu",
      text: "Výsadba, přesazování, bezpečnostní řezy vzrostlých stromů, sběr listí a poslední seč. Připravíme zeleň, aby přezimovala.",
    },
  ];

  const sluzby = [
    {
      cislo: "01",
      nazev: "Pravidelná údržba",
      popis:
        "Seče trávníků, řezy, hnojení, zálivka a tvarování živých plotů. Staráme se o zahradu podle jejího přirozeného rytmu, ne jen když je tráva vysoká.",
    },
    {
      cislo: "02",
      nazev: "Péče o vzrostlé stromy",
      popis:
        "Posoudíme zdraví stromu, provedeme odborný řez i bezpečnostní vazby. Kaštany, lípy, borovice a jedle vyžadují ruku, která ví, kdy a kde řezat.",
    },
    {
      cislo: "03",
      nazev: "Zakládání a rekonstrukce",
      popis:
        "Návrh zahrady, výběr vhodných rostlin pro danou lokalitu, výsadba a stavební prvky. Kvalitní sadba, půdní i stavební materiál v jedné realizaci.",
    },
    {
      cislo: "04",
      nazev: "Městská a firemní zeleň",
      popis:
        "Sídlištní, průmyslové, obchodní a reprezentativní exteriéry. Rozsáhlejší projekty se srozumitelnou cenovou kalkulací a spolehlivým termínem.",
    },
  ];

  return (
    <main className="page">
      <header className="topbar">
        <a className="wordmark" href="#" aria-label="FAGUS údržba zeleně">
          <span className="wordmark-mark" aria-hidden="true">
            {/* Buková větvička — fagus je latinsky buk */}
            <svg viewBox="0 0 40 40" width="34" height="34" role="img">
              <path
                d="M20 37V13"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
              />
              <path
                d="M20 20C20 20 13 18 10 12M20 20C20 20 27 18 30 12M20 27C20 27 14 25 11 20M20 27C20 27 26 25 29 20"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                fill="none"
              />
              <path
                d="M20 13C20 13 16 9 14 4M20 13C20 13 24 9 26 4"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                fill="none"
              />
            </svg>
          </span>
          <span className="wordmark-text">
            FAGUS<span className="wordmark-sub">údržba zeleně</span>
          </span>
        </a>
        <a className="topbar-tel" href="tel:+420777661077">
          +420 777 66 10 77
        </a>
      </header>

      <section className="hero">
        <div className="hero-media">
          <img
            src="/hero.webp"
            alt="Udržovaná zahrada s vzrostlými stromy a čerstvě posečeným trávníkem"
            className="hero-img"
          />
        </div>
        <div className="hero-copy">
          <p className="eyebrow">Nové Strašecí · od roku 2011</p>
          <h1 className="hero-title">
            Bezúdržbová zeleň
            <br />
            <span className="hero-title-em">neexistuje.</span>
          </h1>
          <p className="hero-lede">
            Každá „domestikovaná“ zeleň potřebuje ruku, která ví, kdy řezat,
            hnojit a zalévat. My tu ruku máme — a rozumíme tomu, že zahrada se
            v čase vyvíjí.
          </p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="tel:+420777661077">
              Zavolat a domluvit termín
            </a>
            <a className="btn btn-ghost" href="#sluzby">
              Co pro vás uděláme
            </a>
          </div>
        </div>
      </section>

      {/* SIGNATURE: sezónní kalendář — zahrada jako cyklus, ne katalog */}
      <section className="season" aria-labelledby="season-h">
        <div className="section-head">
          <p className="eyebrow">Rytmus zahrady</p>
          <h2 id="season-h" className="section-title">
            Staráme se podle kalendáře přírody
          </h2>
          <p className="section-intro">
            Trávník a růže chtějí pozornost často. Vzrostlé stromy jen občas,
            ale ve správnou chvíli. Tady je, kdy co děláme.
          </p>
        </div>
        <ol className="season-track">
          {kalendar.map((k, i) => (
            <li className="season-item" key={k.mesic}>
              <span className="season-node" aria-hidden="true" />
              <span className="season-phase">Fáze {i + 1}</span>
              <span className="season-month">{k.mesic}</span>
              <h3 className="season-title">{k.titul}</h3>
              <p className="season-text">{k.text}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="services" id="sluzby" aria-labelledby="services-h">
        <div className="services-grid">
          <div className="services-media">
            <img
              src="/section-1.webp"
              alt="Zahradník při odborném řezu vzrostlého stromu"
              className="services-img"
            />
          </div>
          <div className="services-body">
            <div className="section-head">
              <p className="eyebrow">Nabídka služeb</p>
              <h2 id="services-h" className="section-title">
                Ne „jen“ sečení trávy
              </h2>
              <p className="section-intro">
                Náročnější zahradnické práce vyžadují opravdovou odbornost.
                Dokážeme posoudit lokalitu i vhodnost výsadby.
              </p>
            </div>
            <dl className="services-list">
              {sluzby.map((s) => (
                <div className="service" key={s.cislo}>
                  <dt className="service-head">
                    <span className="service-num">{s.cislo}</span>
                    <span className="service-name">{s.nazev}</span>
                  </dt>
                  <dd className="service-desc">{s.popis}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <section className="trust" aria-labelledby="trust-h">
        <div className="trust-grid">
          <div className="trust-body">
            <p className="eyebrow">O nás</p>
            <h2 id="trust-h" className="section-title">
              Tým odborníků od roku 2011
            </h2>
            <p className="trust-text">
              FAGUS vznikl sjednocením zahradníků, kteří zakládají a udržují
              zeleň. Spojení nám umožnilo pustit se do významnějších a
              rozsáhlejších projektů — a klientům přineslo stabilního partnera,
              individuální přístup a srozumitelnou cenu.
            </p>
            <p className="trust-text">
              Odborné vzdělávání pracovníků, dlouholeté zkušenosti,
              profesionální vybavení a kvalitní sadba jsou základ každého
              projektu — od rodinné zahrady po reprezentativní firemní exteriér.
            </p>

            <div className="trust-region">
              <p className="trust-region-label">Působíme v okresech</p>
              <ul className="chips">
                {okresy.map((o) => (
                  <li className="chip" key={o}>
                    {o}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <aside className="trust-card" aria-label="Kontakt a otevírací doba">
            <img
              src="/section-2.webp"
              alt="Založená okrasná výsadba před reprezentativním objektem"
              className="trust-img"
            />
            <div className="trust-card-body">
              <h3 className="trust-card-title">Rychlý kontakt</h3>
              <p className="trust-card-name">FAGUS údržba zeleně s.r.o.</p>
              <p className="trust-card-addr">
                Atriová 1070
                <br />
                271 01 Nové Strašecí
              </p>
              <a className="trust-card-tel" href="tel:+420777661077">
                +420 777 66 10 77
              </a>
              <a className="trust-card-mail" href="mailto:info@fagussro.cz">
                info@fagussro.cz
              </a>

              <table className="hours">
                <caption className="hours-cap">Otevírací doba</caption>
                <tbody>
                  <tr>
                    <th scope="row">Pondělí – pátek</th>
                    <td>8:00 – 14:00</td>
                  </tr>
                  <tr>
                    <th scope="row">Sobota – neděle</th>
                    <td>dle dohody</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
