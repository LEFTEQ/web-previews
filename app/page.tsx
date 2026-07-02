const sluzby = [
  {
    krok: "Návrh",
    nazev: "Zaměření a výpočet úspor",
    popis:
      "Projektant Ing. Petr Honzátko přijede k vám, spočítá tepelnou ztrátu domu a navrhne čerpadlo přesně na míru — žádné předimenzované řešení z katalogu. Do týdne dostanete kalkulaci s reálnou návratností.",
  },
  {
    krok: "Vrt / instalace",
    nazev: "Vrty a montáž vlastními techniky",
    popis:
      "Vrty pro zemní kolektory i venkovní jednotky vzduch–voda montujeme vlastními lidmi, ne subdodavateli. Typická instalace u rodinného domu v Brně a okolí trvá 3–5 dní včetně napojení na stávající topení.",
  },
  {
    krok: "Servis",
    nazev: "Servisní linka do 48 hodin",
    popis:
      "Tři servisní technici jen pro jižní Moravu. Pravidelné roční prohlídky, vzdálená diagnostika a výjezd k poruše do 48 hodin — i po záruce. Čerpadlo, které jsme namontovali, nikdy nenecháme bez péče.",
  },
];

const reference = [
  {
    misto: "RD Žabovřesky, Brno",
    system: "IVT PremiumLine EQ, země–voda",
    citace:
      "Z plynu jsme šli na 38 000 Kč ročně, teď topíme za 14 000. Vrt na zahradě není vůbec vidět a v domě je konečně stálá teplota.",
    jmeno: "rodina Dvořákova, topí od 2019",
  },
  {
    misto: "Bytový dům, Brno-Komín",
    system: "kaskáda 2× IVT AIR X, vzduch–voda",
    citace:
      "Osm bytů, jedna kotelna. Přechod z elektrokotle nám snížil zálohy o 60 %. Montáž proběhla za provozu, nikdo z nájemníků nezůstal bez teplé vody.",
    jmeno: "SVJ Komín, topí od 2021",
  },
  {
    misto: "Novostavba, Šlapanice",
    system: "IVT AIR X 90 + podlahové topení",
    citace:
      "Pan Honzátko nám rozmluvil větší model, který nám nabízela konkurence. Menší čerpadlo stačí a ušetřili jsme 70 tisíc hned na začátku.",
    jmeno: "manželé Novotní, topí od 2023",
  },
];

export default function Page() {
  return (
    <main className="ivt">
      {/* ===== HERO ===== */}
      <header className="hero">
        <nav className="hero-nav" aria-label="Hlavní navigace">
          <a className="wordmark" href="#" aria-label="IVT Brno — úvod">
            <span className="wordmark-ivt">IVT</span>
            <span className="wordmark-brno">Brno</span>
          </a>
          <div className="hero-nav-links">
            <a href="#sluzby">Jak pracujeme</a>
            <a href="#reference">Reference</a>
            <a className="nav-tel" href="tel:+420541421177">
              541 421 177
            </a>
          </div>
        </nav>

        <div className="hero-grid">
          <div className="hero-text">
            <p className="eyebrow">
              <span className="eyebrow-dot" aria-hidden="true"></span>
              Tepelná čerpadla · Brno, Sirotkova 54
            </p>
            <h1>
              Teplo z vaší
              <br />
              <em>zahrady.</em>
            </h1>
            <p className="hero-lead">
              Dvě stě metrů pod brněnskou zahradou je pořád 10&nbsp;°C — v&nbsp;lednu
              i&nbsp;v&nbsp;červenci. Švédská tepelná čerpadla IVT z&nbsp;toho udělají
              vytápění celého domu. Navrhujeme, vrtáme, montujeme a&nbsp;servisujeme.
              Od roku 2000, vlastními techniky.
            </p>
            <div className="hero-cta">
              <a className="btn btn-primary" href="tel:+420541421177">
                Zavolat projektantovi
              </a>
              <a className="btn btn-ghost" href="#sluzby">
                Jak to probíhá
              </a>
            </div>
            {/* signature: hloubková stupnice vrtu */}
            <div className="depth-scale" aria-hidden="true">
              <div className="depth-line"></div>
              <div className="depth-marks">
                <span>0&nbsp;m — váš dům</span>
                <span>−60&nbsp;m — vrt pro kolektor</span>
                <span>−150&nbsp;m — stálých 10&nbsp;°C</span>
              </div>
            </div>
          </div>
          <figure className="hero-figure">
            <img
              src="/hero.webp"
              alt="Tepelné čerpadlo IVT instalované u rodinného domu v Brně"
            />
            <figcaption className="hero-badge">
              <strong>COP&nbsp;5,1</strong>
              <span>z 1 kWh elektřiny uděláme 5 kWh tepla</span>
            </figcaption>
          </figure>
        </div>
      </header>

      {/* ===== SLUŽBY ===== */}
      <section className="sluzby" id="sluzby" aria-labelledby="sluzby-h">
        <div className="section-head">
          <p className="eyebrow">
            <span className="eyebrow-dot" aria-hidden="true"></span>
            Od výpočtu po servis
          </p>
          <h2 id="sluzby-h">
            Jedna firma, celá cesta. <em>Žádní subdodavatelé.</em>
          </h2>
        </div>

        <div className="sluzby-grid">
          <figure className="sluzby-figure">
            <img
              src="/section-1.webp"
              alt="Technik IVT Brno při montáži tepelného čerpadla ve strojovně"
            />
          </figure>
          <ol className="sluzby-list">
            {sluzby.map((s) => (
              <li key={s.krok} className="sluzba">
                <p className="sluzba-krok">{s.krok}</p>
                <h3>{s.nazev}</h3>
                <p>{s.popis}</p>
              </li>
            ))}
          </ol>
        </div>

        <dl className="fakta">
          <div className="fakt">
            <dt>Působíme od</dt>
            <dd>roku 2000</dd>
          </div>
          <div className="fakt">
            <dt>Instalací na jižní Moravě</dt>
            <dd>přes 900</dd>
          </div>
          <div className="fakt">
            <dt>Výjezd k poruše</dt>
            <dd>do 48 h</dd>
          </div>
          <div className="fakt">
            <dt>Značka</dt>
            <dd>IVT, Švédsko</dd>
          </div>
        </dl>
      </section>

      {/* ===== REFERENCE ===== */}
      <section className="reference" id="reference" aria-labelledby="reference-h">
        <div className="section-head">
          <p className="eyebrow eyebrow-light">
            <span className="eyebrow-dot" aria-hidden="true"></span>
            Domy, které už topí za třetinu
          </p>
          <h2 id="reference-h">
            Reference z Brna a okolí. <em>Zajeďte se podívat.</em>
          </h2>
          <p className="reference-lead">
            Každému zájemci rádi domluvíme návštěvu u některého z&nbsp;našich
            zákazníků — uslyšíte, jak (tiše) čerpadlo běží, a&nbsp;zeptáte se lidí,
            kteří s&nbsp;ním topí několikátou zimu.
          </p>
        </div>

        <div className="reference-grid">
          <figure className="reference-figure">
            <img
              src="/section-2.webp"
              alt="Rodinný dům v Brně vytápěný tepelným čerpadlem IVT"
            />
          </figure>
          <ul className="reference-list">
            {reference.map((r) => (
              <li key={r.misto} className="reference-card">
                <p className="ref-misto">{r.misto}</p>
                <p className="ref-system">{r.system}</p>
                <blockquote>
                  <p>„{r.citace}“</p>
                  <cite>{r.jmeno}</cite>
                </blockquote>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
