import type { CSSProperties } from "react";

export default function Page() {
  const znacky = [
    { jmeno: "KÜHTREIBER", obor: "invertory MIG/MAG a MMA" },
    { jmeno: "MIGATRONIC", obor: "profi svařovací zdroje" },
    { jmeno: "KOWAX", obor: "technika i kukly" },
    { jmeno: "OMICRON", obor: "dílenské invertory" },
    { jmeno: "ESAB", obor: "přídavné materiály" },
    { jmeno: "BÖHLER", obor: "elektrody a dráty" },
    { jmeno: "BINZEL", obor: "hořáky a náhradní díly" },
    { jmeno: "GCE", obor: "autogen a redukční ventily" },
  ];

  const metody = [
    {
      zkratka: "MIG / MAG",
      cislo: "135",
      nazev: "V ochranné atmosféře",
      popis:
        "Svařování v ochranném plynu — nejrychlejší cesta ke kvalitnímu svaru na konstrukcích i plechu. Poradíme s drátem, plynem i nastavením zdroje.",
      loga: ["KOWAX", "KÜHTREIBER", "MIGATRONIC", "OMICRON"],
    },
    {
      zkratka: "MMA",
      cislo: "111",
      nazev: "Obalená elektroda",
      popis:
        "Klasika do terénu i tam, kde není přívod plynu. Máme elektrody na ocel, litinu i nerez a invertory, které je utáhnou.",
      loga: ["KÜHTREIBER", "MIGATRONIC", "OMICRON"],
    },
    {
      zkratka: "WIG / TIG",
      cislo: "141",
      nazev: "Wolframová elektroda",
      popis:
        "Čistý, přesný svar na nerezu a hliníku. Wolframové elektrody, hořáky i zdroje pro precizní práci.",
      loga: ["KÜHTREIBER", "MIGATRONIC", "OMICRON"],
    },
    {
      zkratka: "PLASMA",
      cislo: "—",
      nazev: "Plasmové řezání",
      popis:
        "Rychlý a čistý řez plechem bez tepelné deformace okolí. Zdroje MIGATRONIC, VECTOR, OMICRON i GYS.",
      loga: ["MIGATRONIC", "VECTOR", "OMICRON", "GYS"],
    },
  ];

  return (
    <main className="ps">
      <header className="ps-top">
        <a className="ps-mark" href="#" aria-label="PROFI SVAR, prodejna a servis svařovací techniky">
          <span className="ps-mark-arc">PROFI</span>
          <span className="ps-mark-weld">SVAR</span>
          <span className="ps-mark-sub">prodejna &amp; servis · České Budějovice</span>
        </a>
        <nav className="ps-nav" aria-label="Hlavní">
          <a href="#metody">Technika</a>
          <a href="#duvera">O nás</a>
          <a className="ps-nav-call" href="tel:+420387000000">387 000 000</a>
        </nav>
      </header>

      <section className="ps-hero">
        <div className="ps-hero-media">
          <img
            src="/hero.webp"
            alt="Svařování v ochranné atmosféře — jiskry z hořáku v prodejně PROFI SVAR"
            className="ps-hero-img"
          />
          <div className="ps-hero-scrim" aria-hidden="true" />
        </div>

        <div className="ps-hero-body">
          <p className="ps-eyebrow">České Budějovice · od roku 2000</p>
          <h1 className="ps-h1">
            Přijďte s materiálem,
            <br />
            <span className="ps-h1-hot">odejdete se správným svarem.</span>
          </h1>
          <p className="ps-lead">
            Prodejna svařovací techniky, kde vám poradí lidé, kteří sami svařují. Invertory, dráty,
            elektrody, plyny i ochranné pomůcky — a k tomu záruční i pozáruční servis.
          </p>
          <div className="ps-hero-cta">
            <a className="ps-btn ps-btn-hot" href="tel:+420387000000">Zavolat do prodejny</a>
            <a className="ps-btn ps-btn-ghost" href="#metody">Co u nás pořídíte</a>
          </div>
          <dl className="ps-hours">
            <div>
              <dt>Po–Pá</dt>
              <dd>7:30–12:00 · 12:30–16:00</dd>
            </div>
            <div>
              <dt>So–Ne</dt>
              <dd>zavřeno</dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="ps-section ps-methods" id="metody" aria-labelledby="metody-h">
        <div className="ps-section-head">
          <p className="ps-eyebrow ps-eyebrow-dark">Svařovací metody &amp; sortiment</p>
          <h2 className="ps-h2" id="metody-h">
            Každá práce má svůj oblouk.
            <br />
            My víme, který sedne té vaší.
          </h2>
          <p className="ps-section-note">
            Čísla u metod jsou normou daná označení postupu — poznáte je z každého technologického
            předpisu. U nás k nim dostanete i techniku, která je zvládne.
          </p>
        </div>

        <ol className="ps-method-grid">
          {metody.map((m) => (
            <li className="ps-method" key={m.zkratka}>
              <div className="ps-method-top">
                <span className="ps-method-code" aria-hidden="true">{m.cislo}</span>
                <span className="ps-method-zkratka">{m.zkratka}</span>
              </div>
              <h3 className="ps-method-name">{m.nazev}</h3>
              <p className="ps-method-desc">{m.popis}</p>
              <ul className="ps-method-brands">
                {m.loga.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </li>
          ))}
        </ol>

        <div className="ps-extra">
          <img
            src="/section-1.webp"
            alt="Regály s ochrannými kuklami, rukavicemi a brusnými kotouči v prodejně"
            className="ps-extra-img"
          />
          <div className="ps-extra-body">
            <h3 className="ps-extra-h">A všechno kolem svaru taky</h3>
            <ul className="ps-chip-list">
              <li>Autogen &amp; řezání</li>
              <li>Hořáky BINZEL / TRAFIMET</li>
              <li>Kukly a rukavice</li>
              <li>Filtrační zařízení</li>
              <li>Svářečské zástěny</li>
              <li>Brusivo FLEXOVIT</li>
              <li>Přídavné materiály</li>
              <li>Nabíjecí a startovací technika</li>
            </ul>
            <p className="ps-extra-note">
              Nevíte, co přesně potřebujete? Poradenství v oblasti svařovací techniky u nás nic
              nestojí — přijďte se poradit dřív, než nakoupíte.
            </p>
          </div>
        </div>
      </section>

      <section className="ps-section ps-trust" id="duvera" aria-labelledby="duvera-h">
        <div className="ps-trust-grid">
          <div className="ps-trust-media">
            <img
              src="/section-2.webp"
              alt="Pult prodejny PROFI SVAR se svařovacími invertory připravenými k předvedení"
              className="ps-trust-img"
            />
          </div>
          <div className="ps-trust-body">
            <p className="ps-eyebrow ps-eyebrow-dark">Proč k nám</p>
            <h2 className="ps-h2" id="duvera-h">
              Prodejna, ne e-shop bez tváře.
            </h2>
            <p className="ps-trust-lead">
              PROFI SVAR s.r.o. je budějovická prodejna, kde za pultem stojí lidé z oboru. Prodáme
              vám techniku, kterou sami známe, a když se něco pokazí, vezmeme si to na servis —
              záruční i pozáruční.
            </p>

            <ul className="ps-usp">
              <li>
                <span className="ps-usp-k">Poradíme</span>
                <span className="ps-usp-v">Bezplatná konzultace ke každému nákupu — vyberete správně napoprvé.</span>
              </li>
              <li>
                <span className="ps-usp-k">Opravíme</span>
                <span className="ps-usp-v">Záruční i pozáruční servis svařovacích zdrojů přímo u nás.</span>
              </li>
              <li>
                <span className="ps-usp-k">Vykoupíme</span>
                <span className="ps-usp-v">Bazar — výhodný prodej i výkup použité svářecí techniky.</span>
              </li>
            </ul>

            <div className="ps-brands">
              <p className="ps-brands-label">Značky, které u nás najdete</p>
              <ul className="ps-brands-list">
                {znacky.map((z) => (
                  <li key={z.jmeno}>
                    <span className="ps-brand-name">{z.jmeno}</span>
                    <span className="ps-brand-obor">{z.obor}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="ps-ico" aria-label="Firemní údaje">
              <span>PROFI SVAR s.r.o.</span>
              <span>IČO 26088088</span>
              <span>DIČ CZ26088088</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
