import { WipeLine } from "./motion";

const services = [
  {
    key: "uklid",
    label: "Úklid",
    note: "Denní i jednorázový, uvnitř i ve výškách",
    items: [
      "Administrativní budovy, obchodní centra a bytové domy",
      "Průmyslové úklidy",
      "Úklid domácností",
      "Výškové a horolezecké práce",
      "Voskování a krystalizace podlah",
      "Extrakční čištění koberců a čalounění",
      "Sanitární vybavení a pravidelné dodávky hygieny",
    ],
  },
  {
    key: "facility",
    label: "Facility management",
    note: "Kompletní správa nemovitosti pod jednou střechou",
    items: [
      "Technická správa a provoz budov",
      "Údržba nemovitosti",
      "Energetický management a rozúčtování",
      "Revize a sledování legislativy",
      "BOZP a PO – audity a školení",
      "Pohotovostní služba a řešení havárií",
      "Údržba zeleně a zimní údržba",
    ],
  },
  {
    key: "ucetnictvi",
    label: "Účetnictví",
    note: "Administrativa spojená se správou budov a SVJ",
    items: [
      "Faktury vydané i přijaté",
      "Fakturace služeb a rozúčtování pronajatých prostor",
      "Daňová evidence",
      "Mzdové účetnictví",
      "Personální služby",
    ],
  },
  {
    key: "ostraha",
    label: "Ostraha",
    note: "Doplněk balíčku „all in one“ od roku 2016",
    items: [
      "Fyzická ostraha objektů i osob",
      "Ostraha přes pult centralizované ochrany (PCO)",
      "Součást zvýhodněného balíčku služeb od jednoho dodavatele",
    ],
  },
];

const stats = [
  { big: "40 000 m²", small: "uklidíme každý den v rámci celé ČR" },
  { big: "2005", small: "rok založení — začínali jsme v Praze" },
  { big: "2016", small: "od tohoto roku i ostraha „all in one“" },
  { big: "1", small: "jeden dodavatel pro celou vaši budovu" },
];

const principles = [
  {
    title: "Kvalita",
    items: [
      "Stálý, proškolený a bezúhonný personál",
      "Profesionální technika a čisticí prostředky",
      "Pravidelná kontrola kvality úklidu",
    ],
  },
  {
    title: "Komunikace",
    items: [
      "Vedoucí pracovníci v přímém kontaktu se zákazníkem",
      "Operativní řešení požadavků a potřeb",
      "Předcházíme problémům dřív, než nastanou",
    ],
  },
];

export default function Page() {
  return (
    <main className="page">
      <header className="hero">
        <div className="hero-frost" aria-hidden="true" />
        <nav className="nav" aria-label="Hlavní">
          <a className="brand" href="#top">
            <span className="brand-mark">SWBC</span>
            <span className="brand-sub">úklid&nbsp;·&nbsp;Praha</span>
          </a>
          <ul className="nav-links">
            <li><a href="#sluzby">Služby</a></li>
            <li><a href="#o-nas">O nás</a></li>
            <li><a href="#kvalita">Proč my</a></li>
          </ul>
        </nav>

        <div className="hero-inner" id="top">
          <p className="hero-eyebrow">Praha a celá ČR · správa budov od&nbsp;A&nbsp;do&nbsp;Z</p>
          <h1 className="hero-title">
            Úklidová firma<br />s tradicí od roku <span className="hl">2005</span>
          </h1>
          <p className="hero-lead">
            Chcete kvalitní služby od jednoho dodavatele? Komunikujte s jednou
            firmou, snižte provozní náklady a mějte chod budovy pod kontrolou —
            bez starostí.
          </p>
          <div className="hero-actions">
            <a className="btn" href="#sluzby">Prohlédnout služby</a>
            <ul className="hero-meta">
              <li>Úklid</li>
              <li>Facility management</li>
              <li>Účetnictví</li>
              <li>Ostraha</li>
            </ul>
          </div>
        </div>
      </header>

      <section className="swbc-section services" id="sluzby">
        <div className="wrap">
          <div className="sec-head">
            <span className="sec-num">01</span>
            <h2 className="sec-title">Naše služby</h2>
            <WipeLine />
            <p className="sec-lead">
              Čtyři oblasti, jedna smlouva. Vyberte si jen úklid, nebo předejte
              celý provoz budovy nám — každou z nich řešíme každý den.
            </p>
          </div>

          <div className="services-grid">
            {services.map((s) => (
              <article className="tile" key={s.key}>
                <h3 className="tile-title">{s.label}</h3>
                <span className="tile-edge" aria-hidden="true" />
                <p className="tile-note">{s.note}</p>
                <ul className="tile-list">
                  {s.items.map((it) => (
                    <li key={it}>{it}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="swbc-section about" id="o-nas">
        <div className="wrap">
          <div className="sec-head">
            <span className="sec-num sec-num--light">02</span>
            <h2 className="sec-title">O nás</h2>
            <WipeLine />
            <p className="sec-lead sec-lead--light">
              SWBC začínala v roce 2005 s úklidem administrativních budov v Praze
              a středních Čechách. Dnes se staráme o objekty po celé ČR — od
              pravidelného úklidu přes technickou správu a účetnictví až po
              ostrahu. Jde nám o jediné: dlouhodobou spolupráci postavenou na
              důvěře, kvalitě a férovém poměru ceny a výkonu.
            </p>
          </div>

          <div className="stats">
            {stats.map((st) => (
              <div className="stat" key={st.big}>
                <span className="stat-big">{st.big}</span>
                <span className="stat-small">{st.small}</span>
              </div>
            ))}
          </div>

          <div className="principles" id="kvalita">
            {principles.map((p) => (
              <article className="principle" key={p.title}>
                <h3 className="principle-title">{p.title}</h3>
                <ul className="principle-list">
                  {p.items.map((it) => (
                    <li key={it}>{it}</li>
                  ))}
                </ul>
              </article>
            ))}
            <article className="principle principle--wide">
              <h3 className="principle-title">Hygienický a dezinfekční servis</h3>
              <ul className="principle-list">
                <li>Pravidelné doplňování spotřebního hygienického materiálu</li>
                <li>Dodávka a montáž zásobníků</li>
                <li>Sanitární zázemí čisté a plné, o které se nemusíte starat</li>
              </ul>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}
