// MDDr. Václav Serdel s.r.o. — dentální hygiena, Liberec
// Návrh: klinicky čistá, klidná stránka postavená na typografii a motivu zubní křivky.

const kroky = [
  {
    cislo: "1",
    nazev: "Vstupní vyšetření",
    trvani: "cca 60 minut",
    popis:
      "Projdeme spolu stav dásní a zubů, zkontrolujeme kámen a zubní plak. Vysvětlím vám, co vidím — srozumitelně, bez latiny.",
  },
  {
    cislo: "2",
    nazev: "Odstranění kamene a airflow",
    trvani: "cca 45 minut",
    popis:
      "Ultrazvukem šetrně odstraním zubní kámen, airflow pískováním pigmentace od kávy, čaje a kouření. Zuby jsou hladké a světlejší hned po ošetření.",
  },
  {
    cislo: "3",
    nazev: "Nácvik domácí péče",
    trvani: "cca 20 minut",
    popis:
      "Ukážu vám techniku čištění přímo na vašich zubech a doporučím kartáček i mezizubní velikosti na míru. Žádné univerzální rady z letáku.",
  },
  {
    cislo: "4",
    nazev: "Recall — pravidelná kontrola",
    trvani: "po 6 měsících",
    popis:
      "Zdravé dásně drží jen s pravidelností. Sami vám připomeneme termín, abyste na hygienu nemuseli myslet.",
  },
]

const sluzby = [
  {
    nazev: "Dentální hygiena pro dospělé",
    popis: "Kompletní ošetření včetně odstranění kamene, airflow a fluoridace.",
  },
  {
    nazev: "Dětská dentální hygiena",
    popis: "Kratší, hravější návštěva. Děti učíme čistit tak, aby je to bavilo.",
  },
  {
    nazev: "Péče o rovnátka a implantáty",
    popis: "Speciální technika čištění kolem zámků, drátů a implantátů.",
  },
  {
    nazev: "Bělení zubů",
    popis: "Šetrné ordinační bělení až po vyčištění — na čistých zubech drží déle.",
  },
]

export default function Page() {
  return (
    <main className="ds">
      {/* ===================== HERO ===================== */}
      <header className="ds-hero">
        <div className="ds-hero-inner">
          <p className="ds-wordmark">
            <span className="ds-wordmark-dr">MDDr.</span> Serdel
            <span className="ds-wordmark-dot" aria-hidden="true">.</span>
          </p>

          <h1 className="ds-hero-title">
            <span className="ds-line ds-line-1">Čisté zuby</span>
            <span className="ds-line ds-line-2">
              nejsou náhoda<span className="ds-accent-dot">.</span>
            </span>
          </h1>

          <p className="ds-hero-sub">
            Dentální hygiena v&nbsp;Liberci. Hodina času dvakrát ročně,
            která rozhoduje o&nbsp;tom, jestli vás u&nbsp;zubaře čeká vrtačka,
            nebo jen pochvala.
          </p>

          <div className="ds-hero-actions">
            <a className="ds-btn ds-btn-primary" href="tel:+420485000000">
              Zavolat a objednat se
            </a>
            <a className="ds-btn ds-btn-ghost" href="mailto:ordinace@serdel.cz">
              Napsat e-mail
            </a>
          </div>

          <p className="ds-hero-note">Liberec · objednání bez doporučení od zubaře</p>
        </div>

        {/* Signature: linie dásně — gingivální křivka vykreslená přes celý hero */}
        <svg
          className="ds-gumline"
          viewBox="0 0 1200 220"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            className="ds-gumline-path"
            d="M0,170 C60,170 80,60 150,60 C220,60 235,170 300,170 C360,170 380,55 450,55 C520,55 535,170 600,170 C660,170 680,60 750,60 C820,60 835,170 900,170 C960,170 980,55 1050,55 C1120,55 1140,170 1200,170"
            fill="none"
          />
          <path
            className="ds-gumline-fill"
            d="M0,170 C60,170 80,60 150,60 C220,60 235,170 300,170 C360,170 380,55 450,55 C520,55 535,170 600,170 C660,170 680,60 750,60 C820,60 835,170 900,170 C960,170 980,55 1050,55 C1120,55 1140,170 1200,170 L1200,220 L0,220 Z"
          />
        </svg>
      </header>

      {/* ===================== PRŮBĚH NÁVŠTĚVY ===================== */}
      <section className="ds-section ds-section-kroky" aria-labelledby="kroky-h">
        <div className="ds-section-inner">
          <p className="ds-eyebrow">Jak probíhá první návštěva</p>
          <h2 id="kroky-h" className="ds-h2">
            Čtyři kroky, žádné překvapení
          </h2>
          <p className="ds-section-lead">
            Víte přesně, co se bude dít a jak dlouho to potrvá.
            První návštěva zabere zhruba dvě hodiny — a odcházíte s&nbsp;hladkými zuby.
          </p>

          <ol className="ds-kroky">
            {kroky.map((k) => (
              <li key={k.cislo} className="ds-krok">
                <span className="ds-krok-cislo" aria-hidden="true">
                  {k.cislo}
                </span>
                <div className="ds-krok-body">
                  <h3 className="ds-krok-nazev">{k.nazev}</h3>
                  <p className="ds-krok-trvani">{k.trvani}</p>
                  <p className="ds-krok-popis">{k.popis}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ===================== SLUŽBY + DŮVĚRA ===================== */}
      <section className="ds-section ds-section-sluzby" aria-labelledby="sluzby-h">
        <div className="ds-section-inner">
          <div className="ds-sluzby-grid">
            <div className="ds-sluzby-uvod">
              <p className="ds-eyebrow">Ordinace v Liberci</p>
              <h2 id="sluzby-h" className="ds-h2">
                Co pro vás uděláme
              </h2>
              <p className="ds-section-lead">
                Malá ordinace, kde vás známe jménem. Vede ji MDDr.&nbsp;Václav
                Serdel — zubní lékař, který se dentální hygieně věnuje naplno,
                ne jako doplňku ordinace.
              </p>
              <ul className="ds-duvera">
                <li>Objednáte se do 2&nbsp;týdnů — bez doporučení</li>
                <li>Přesné termíny, v&nbsp;čekárně nesedíte</li>
                <li>Ceník vám řekneme předem po telefonu</li>
              </ul>
            </div>

            <ul className="ds-sluzby-list">
              {sluzby.map((s) => (
                <li key={s.nazev} className="ds-sluzba">
                  <h3 className="ds-sluzba-nazev">{s.nazev}</h3>
                  <p className="ds-sluzba-popis">{s.popis}</p>
                </li>
              ))}
            </ul>
          </div>

          <blockquote className="ds-citace">
            <p>
              „Nejlepší návštěva u&nbsp;zubaře je ta, při které se nic nevrtá.
              Přesně o&nbsp;to se tady staráme.“
            </p>
            <cite>— MDDr. Václav Serdel</cite>
          </blockquote>
        </div>
      </section>
    </main>
  )
}
