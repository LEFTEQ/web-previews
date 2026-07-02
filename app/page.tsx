export const metadata = {
  title: "Pekařství Boček Krmelín — pečeme každou noc pro Ostravsko",
  description:
    "Rodinné pekařství z Krmelína. Chléb z kvasu, rohlíky, koláče a cukrárenské výrobky — každé ráno čerstvé v prodejnách po Ostravě a okolí.",
};

const chleby = [
  {
    nazev: "Krmelínský kvasový",
    vaha: "900 g",
    popis:
      "Náš hlavní chléb. Žitno-pšeničný, na tříst upoupném kvasu vedeném přes 18 hodin. Tmavá kůrka, vlhká střída, vydrží tři dny.",
    stitek: "z kvasu",
  },
  {
    nazev: "Rohlík obyčejný",
    vaha: "43 g",
    popis:
      "Točený ručně na dvou směnách. Křupe, když ho zlomíte — přesně tak, jak si ho pamatujete z dětství. Denně jich upečeme přes deset tisíc.",
    stitek: "ručně točený",
  },
  {
    nazev: "Frgál s tvarohem",
    vaha: "600 g",
    popis:
      "Valašský koláč tenkého těsta, tvaroh z místní mlékárny, drobenka s máslem. Pečeme i s makovou, hruškovou a povidlovou náplní.",
    stitek: "regionální",
  },
  {
    nazev: "Vánočka máslová",
    vaha: "400 g",
    popis:
      "Pletená z šesti pramenů, s rozinkami a mandlemi. Přes advent ji pečeme denně, po zbytek roku na objednávku do prodejny.",
    stitek: "na objednávku",
  },
];

const prodejny = [
  { misto: "Krmelín", adresa: "Brušperská 78 — pekárna a hlavní prodejna", cas: "po–pá 5.30–17.00, so 6.00–11.00" },
  { misto: "Ostrava-Hrabůvka", adresa: "prodejna u polikliniky", cas: "po–pá 6.00–17.00" },
  { misto: "Ostrava-Zábřeh", adresa: "prodejna a cukrárna", cas: "po–pá 6.00–17.30, so 7.00–11.00" },
  { misto: "Brušperk", adresa: "prodejna na náměstí", cas: "po–pá 6.00–16.30" },
];

export default function Page() {
  return (
    <main className="pb-page">
      {/* ================= HERO ================= */}
      <header className="pb-hero">
        <div className="pb-hero-top">
          <div className="pb-wordmark" aria-label="Pekařství Boček Krmelín">
            <span className="pb-wordmark-main">BOČEK</span>
            <span className="pb-wordmark-sub">pekařství · Krmelín 1992</span>
          </div>
          <a className="pb-hero-tel" href="tel:+420558674039">
            +420 558 674 039
          </a>
        </div>

        <div className="pb-hero-body">
          <p className="pb-hero-eyebrow">
            Pec zatápíme ve <strong>22.14</strong> · první chléb vyjíždí ve <strong>2.40</strong> · prodejny otevíráme v <strong>5.30</strong>
          </p>
          <h1 className="pb-hero-title">
            <span className="pb-line pb-line-1">Zatímco Ostrava spí,</span>
            <span className="pb-line pb-line-2">u nás v Krmelíně</span>
            <span className="pb-line pb-line-3">kyne&nbsp;chléb.</span>
          </h1>
          <p className="pb-hero-lead">
            Rodinná pekárna kousek za Ostravou. Kvas vedeme přes noc, pečeme na dvě
            směny a ráno rozvážíme do vlastních prodejen a cukráren. Žádné mražené
            polotovary — mouka, voda, kvas a čas.
          </p>
          <div className="pb-hero-actions">
            <a href="#pecivo" className="pb-btn pb-btn-solid">
              Co dnes pečeme
            </a>
            <a href="#prodejny" className="pb-btn pb-btn-line">
              Najít prodejnu
            </a>
          </div>
        </div>

        {/* Signature: řez bochníkem — tři nářezy jako ve skutečné kůrce */}
        <div className="pb-loaf" aria-hidden="true">
          <div className="pb-loaf-shape">
            <span className="pb-score pb-score-1" />
            <span className="pb-score pb-score-2" />
            <span className="pb-score pb-score-3" />
          </div>
          <div className="pb-flour" />
        </div>
      </header>

      {/* ================= SEKCE: PEČIVO ================= */}
      <section id="pecivo" className="pb-section pb-section-pecivo">
        <div className="pb-section-head">
          <h2 className="pb-section-title">Z dnešní noci</h2>
          <p className="pb-section-note">
            Pečeme podle poptávky prodejen — co ráno nedovezeme čerstvé, neprodáváme.
            Tohle jsou čtyři věci, pro které si k nám lidé jezdí i přes půl Ostravy.
          </p>
        </div>

        <ul className="pb-grid">
          {chleby.map((ch) => (
            <li key={ch.nazev} className="pb-card">
              <div className="pb-card-top">
                <span className="pb-card-tag">{ch.stitek}</span>
                <span className="pb-card-vaha">{ch.vaha}</span>
              </div>
              <h3 className="pb-card-title">{ch.nazev}</h3>
              <p className="pb-card-text">{ch.popis}</p>
            </li>
          ))}
        </ul>

        <p className="pb-grid-foot">
          Kompletní nabídku — včetně cukrárenských výrobků, dortů na zakázku a
          bezlepkové řady — vám řeknou v kterékoli naší prodejně.
        </p>
      </section>

      {/* ================= SEKCE: PRODEJNY / DŮVĚRA ================= */}
      <section id="prodejny" className="pb-section pb-section-prodejny">
        <div className="pb-prodejny-grid">
          <div className="pb-prodejny-intro">
            <h2 className="pb-section-title pb-section-title-light">
              Kde nás ráno potkáte
            </h2>
            <p className="pb-prodejny-text">
              Pekárna stojí v Krmelíně na Brušperské 78 od začátku devadesátých
              let. Dnes z ní každé ráno vyjíždějí dvě dodávky do vlastních
              prodejen a cukráren po Ostravě a okolí.
            </p>
            <p className="pb-prodejny-text">
              Jsme rodinná firma — u pecí se střídají dvě generace Bočků a
              většina z třiceti zaměstnanců je z Krmelína a Brušperka. Když nám
              zavoláte, zvedne to někdo, kdo ten chléb v noci sám pekl.
            </p>
            <a className="pb-btn pb-btn-cream" href="mailto:pekarna@pekarbocek.cz">
              Napsat do pekárny
            </a>
          </div>

          <ul className="pb-prodejny-list">
            {prodejny.map((p) => (
              <li key={p.misto} className="pb-prodejna">
                <h3 className="pb-prodejna-misto">{p.misto}</h3>
                <p className="pb-prodejna-adresa">{p.adresa}</p>
                <p className="pb-prodejna-cas">{p.cas}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
