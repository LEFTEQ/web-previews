const sluzby = [
  {
    tag: "Servis",
    title: "Servis a údržba 24/7",
    desc: "Preventivní prohlídky, kompletní čištění výměníků a filtrů, seřízení a revize. Poruchy odstraňujeme na zařízeních jakéhokoliv typu — pro smluvní zákazníky držíme hotovost i o víkendech a svátcích.",
    body: [
      "Preventivní prohlídky a revize",
      "Čištění a dezinfekce jednotek",
      "Odstranění nahlášených poruch",
      "Hotovostní služba 24 hodin denně",
    ],
  },
  {
    tag: "Dodávky",
    title: "Dodávky na klíč",
    desc: "Od návrhu vhodného zařízení pro váš prostor přes projekt, dodávku a montáž až po zaregulování, revizi a zaškolení obsluhy. Od mobilní jednotky do bytu po vzduchotechniku výrobní haly.",
    body: [
      "Studie a projekt na míru prostoru",
      "Montáž a uvedení do provozu",
      "Zaregulování a zaškolení obsluhy",
      "Záruční i pozáruční servis",
    ],
  },
  {
    tag: "Vzduchotechnika",
    title: "Vzduchotechnické celky",
    desc: "Kompletní vzduchotechnika pro výrobní, zdravotnické a obchodní objekty. Generální opravy stávajících rozvodů i nové systémy včetně rekuperace — vždy s měřením a protokolem.",
    body: [
      "Systémy pro haly a provozy",
      "Zdravotnická a čistá pracoviště",
      "Generální opravy rozvodů",
      "Měření průtoků a protokoly",
    ],
  },
];

const znacky = ["DAIKIN", "LG", "AIRWELL", "REMAK", "ATREA", "GEA", "VTS CLIMA", "KARMA"];

const milniky = [
  {
    rok: "1971",
    text: "Vzniká středisko Klimatizace pod Novou hutí Ostrava. Od prvního dne se specializuje na opravy a servis klimatizačních zařízení zahraniční výroby.",
  },
  {
    rok: "1991",
    text: "Technici střediska zakládají vlastní společnost. Zkušenosti z hutního provozu nabízejí firmám i domácnostem v celé Ostravě.",
  },
  {
    rok: "dnes",
    text: "Servisujeme a dodáváme klimatizace v celém Moravskoslezském kraji — od bytů po nemocnice a výrobní haly. Naši technici jsou školeni přímo u výrobců.",
  },
];

export default function Page() {
  return (
    <main className="sv">
      {/* ===== HERO ===== */}
      <header className="sv-hero">
        <div className="sv-hero__inner">
          <div className="sv-topbar">
            <span className="sv-wordmark">
              SVOBODA<span className="sv-wordmark__sub">klimatizace · servis</span>
            </span>
            <span className="sv-topbar__loc">Ostrava — Moravskoslezský kraj</span>
          </div>

          <div className="sv-hero__grid">
            <div className="sv-hero__copy">
              <p className="sv-eyebrow">Montáž · servis · vzduchotechnika · nonstop pohotovost</p>
              <h1 className="sv-hero__title">
                <span className="sv-hero__line sv-hero__line--1">Váš vzduch,</span>
                <span className="sv-hero__line sv-hero__line--2">naše&nbsp;řemeslo</span>
                <span className="sv-hero__line sv-hero__line--3">
                  od roku <em>1971</em>.
                </span>
              </h1>
              <p className="sv-hero__lead">
                Klimatizace a vzduchotechnika pro byty, ordinace i výrobní haly.
                Vyrostli jsme v ostravské huti — kde na chlazení opravdu záleželo.
                Dnes servisujeme zařízení jakéhokoliv typu, 24 hodin denně.
              </p>
              <div className="sv-hero__meta">
                <div className="sv-meta">
                  <span className="sv-meta__num">24/7</span>
                  <span className="sv-meta__label">hotovostní servis pro smluvní zákazníky</span>
                </div>
                <div className="sv-meta">
                  <span className="sv-meta__num">50+</span>
                  <span className="sv-meta__label">let zkušeností s chlazením a vzduchem</span>
                </div>
              </div>
            </div>

            {/* Signature: lamely klimatizační jednotky — vzduch proudí přes celý hero */}
            <div className="sv-vent" aria-hidden="true">
              <div className="sv-vent__slats">
                <span></span><span></span><span></span><span></span><span></span>
                <span></span><span></span><span></span><span></span>
              </div>
              <div className="sv-vent__flow">
                <i className="sv-flow sv-flow--1"></i>
                <i className="sv-flow sv-flow--2"></i>
                <i className="sv-flow sv-flow--3"></i>
                <i className="sv-flow sv-flow--4"></i>
                <i className="sv-flow sv-flow--5"></i>
              </div>
              <div className="sv-vent__temp">
                <span className="sv-vent__deg">21,5&nbsp;°C</span>
                <span className="sv-vent__deglabel">nastavená teplota</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* ===== SLUŽBY ===== */}
      <section className="sv-sluzby" aria-labelledby="sluzby-h">
        <div className="sv-section__head">
          <p className="sv-eyebrow sv-eyebrow--dark">Co pro vás uděláme</p>
          <h2 id="sluzby-h" className="sv-h2">
            Tři řemesla, jeden výsledek: <em>vzduch, který funguje.</em>
          </h2>
        </div>

        <div className="sv-cards">
          {sluzby.map((s) => (
            <article className="sv-card" key={s.tag}>
              <div className="sv-card__slat" aria-hidden="true"></div>
              <p className="sv-card__tag">{s.tag}</p>
              <h3 className="sv-card__title">{s.title}</h3>
              <p className="sv-card__desc">{s.desc}</p>
              <ul className="sv-card__list">
                {s.body.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="sv-znacky" role="list" aria-label="Značky, které montujeme a servisujeme">
          <span className="sv-znacky__label">Montujeme a servisujeme</span>
          {znacky.map((z) => (
            <span className="sv-znacka" role="listitem" key={z}>
              {z}
            </span>
          ))}
        </div>
      </section>

      {/* ===== DŮVĚRA / HISTORIE ===== */}
      <section className="sv-duvera" aria-labelledby="duvera-h">
        <div className="sv-duvera__grid">
          <div className="sv-duvera__intro">
            <p className="sv-eyebrow">Proč Svoboda</p>
            <h2 id="duvera-h" className="sv-h2 sv-h2--light">
              Řemeslo z huti. <em>Přesnost z výroby.</em>
            </h2>
            <p className="sv-duvera__lead">
              Nezačínali jsme montáží splitů do obýváků. Začínali jsme tam, kde výpadek
              chlazení znamenal zastavenou výrobu. Ta zodpovědnost nám zůstala —
              i když dnes chladíme spíš vaši ložnici než válcovnu.
            </p>
            <ul className="sv-duvera__body">
              <li>Technici školení přímo ve výrobních závodech Daikin, LG a dalších.</li>
              <li>Přímé smluvní zastoupení výrobců pro servis i montáž v ČR.</li>
              <li>Reference od nemocnic a hal po stovky domácností v kraji.</li>
            </ul>
          </div>

          <ol className="sv-timeline">
            {milniky.map((m) => (
              <li className="sv-milnik" key={m.rok}>
                <span className="sv-milnik__rok">{m.rok}</span>
                <p className="sv-milnik__text">{m.text}</p>
              </li>
            ))}
          </ol>
        </div>

        <figure className="sv-citace">
          <blockquote>
            „Klimatizaci v ordinacích nám dělali přes léto za provozu, po večerech,
            abychom nemuseli rušit pacienty. Servis přijede vždy do druhého dne.“
          </blockquote>
          <figcaption>— MUDr. Hana K., soukromá zubní klinika, Ostrava-Poruba</figcaption>
        </figure>
      </section>
    </main>
  );
}
