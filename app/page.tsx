const sluzby = [
  {
    id: "PHM",
    nazev: "Rozvoz pohonných hmot",
    popis:
      "Naftu a benzín přivezeme přímo k vám — na stavbu, na pole, k dieselagregátu. Cisternou s ověřeným výdejním měřidlem, s dodacím listem v ruce.",
    detaily: [
      "Rozvoz 24 hodin denně, 7 dní v týdnu — podle domluvy",
      "Stavebnictví, zemědělství, obchodní centra (dieselagregáty)",
      "Olomoucký kraj a okolí, po dohodě i dál (např. Královéhradecko)",
    ],
    cislo: { hodnota: "40 000 l", label: "rozvezeme každý týden" },
  },
  {
    id: "DOPRAVA",
    nazev: "Kontejnerová autodoprava",
    popis:
      "Přistavíme kontejner do 5 tun na suť, zeminu nebo materiál. Naložíme, odvezeme, zlikvidujeme — vy se staráte o stavbu, ne o odvoz.",
    detaily: [
      "Kontejnery do 5 tun na suť, zeminu i sypké materiály",
      "Štěrk a kamenivo z vlastní štěrkovny",
      "Přistavení kontejneru po Olomouci obvykle do druhého dne",
    ],
    cislo: { hodnota: "5 t", label: "nosnost kontejnerů" },
  },
  {
    id: "SERVIS",
    nazev: "Servis nákladních vozidel",
    popis:
      "Opravíme nákladní auto, přívěs i stavební stroj. Připravíme vozidlo na STK, přistavíme ho tam za vás a vrátíme umyté.",
    detaily: [
      "Kontrola a opravy podvozků, hydrauliky, výložníků a kapot",
      "Příprava na STK a emise včetně přistavení vozidla",
      "Svářečské práce, mytí vysokotlakou párou (WAP)",
    ],
    cislo: { hodnota: "STK", label: "přistavíme za vás" },
  },
];

const cisla = [
  { hodnota: "1 000 000+", jednotka: "litrů PHM", label: "rozvezeme ročně" },
  { hodnota: "100 000+", jednotka: "km", label: "najezdíme při rozvozech za rok" },
  { hodnota: "15+", jednotka: "let", label: "jezdíme pro Moravu" },
  { hodnota: "24/7", jednotka: "provoz", label: "záleží jen na domluvě" },
];

const kontakty = [
  { role: "Dispečink PHM", jmeno: "Ladislav Pospíšil", tel: "739 201 378" },
  { role: "Vedoucí servisu a myčky", jmeno: "Václav Horák", tel: "608 879 196" },
  { role: "Jednatel společnosti", jmeno: "Jiří Klein", tel: "605 269 109" },
];

export default function Page() {
  return (
    <main className="dc">
      {/* ===== HERO ===== */}
      <header className="hero">
        <nav className="topbar" aria-label="Hlavní navigace">
          <a href="#" className="wordmark" aria-label="Dracar Olomouc — úvod">
            <span className="wordmark-dra">DRA</span>
            <span className="wordmark-car">CAR</span>
            <span className="wordmark-loc">Olomouc</span>
          </a>
          <div className="topbar-links">
            <a href="#sluzby">Služby</a>
            <a href="#cisla">Proč my</a>
            <a href="tel:+420739201378" className="topbar-tel">
              739 201 378
            </a>
          </div>
        </nav>

        <div className="hero-body">
          <p className="hero-eyebrow">
            <span className="hero-eyebrow-dot" aria-hidden="true" />
            Olomouc-Hodolany · Tyršova 590/2
          </p>

          <h1 className="hero-title">
            <span className="hero-line hero-line-1">Nafta na stavbu.</span>
            <span className="hero-line hero-line-2">Kontejner na suť.</span>
            <span className="hero-line hero-line-3">
              Servis, když stroj{" "}
              <em className="hero-em">stojí.</em>
            </span>
          </h1>

          <p className="hero-perex">
            Přes 15 let vozíme pohonné hmoty, kontejnery a opravujeme nákladní
            techniku po celé střední Moravě. Přesnost, rychlost, spolehlivost —
            to není slogan, to je jízdní řád.
          </p>

          <div className="hero-cta-row">
            <a className="btn btn-primary" href="tel:+420739201378">
              Zavolat dispečink PHM
            </a>
            <a className="btn btn-ghost" href="#sluzby">
              Co všechno vozíme
            </a>
          </div>
        </div>

        {/* signature: cisternová stupnice / dopravní pruh */}
        <div className="hero-gauge" aria-hidden="true">
          <div className="gauge-track">
            <span className="gauge-tick" />
            <span className="gauge-tick" />
            <span className="gauge-tick" />
            <span className="gauge-tick" />
            <span className="gauge-tick" />
            <span className="gauge-tick" />
            <span className="gauge-tick" />
            <span className="gauge-tick" />
          </div>
          <div className="gauge-labels">
            <span>0 l</span>
            <span>10 000 l</span>
            <span>20 000 l</span>
            <span>30 000 l</span>
            <span className="gauge-full">40 000 l / týden</span>
          </div>
          <div className="gauge-fill" />
        </div>
      </header>

      {/* ===== SLUŽBY ===== */}
      <section className="sluzby" id="sluzby" aria-labelledby="sluzby-h">
        <div className="section-head">
          <p className="section-eyebrow">Tři střediska, jedna firma</p>
          <h2 id="sluzby-h" className="section-title">
            Palivo, doprava, servis.
            <br />
            Všechno pod jednou střechou v Hodolanech.
          </h2>
        </div>

        <div className="sluzby-grid">
          {sluzby.map((s) => (
            <article className="sluzba" key={s.id}>
              <div className="sluzba-head">
                <span className="sluzba-tag">{s.id}</span>
                <span className="sluzba-cislo">
                  <strong>{s.cislo.hodnota}</strong>
                  <small>{s.cislo.label}</small>
                </span>
              </div>
              <h3 className="sluzba-nazev">{s.nazev}</h3>
              <p className="sluzba-popis">{s.popis}</p>
              <ul className="sluzba-list">
                {s.detaily.map((d) => (
                  <li key={d}>{d}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      {/* ===== ČÍSLA + DŮVĚRA ===== */}
      <section className="duvera" id="cisla" aria-labelledby="duvera-h">
        <div className="section-head section-head-inverse">
          <p className="section-eyebrow">Proč nám Morava volá jako první</p>
          <h2 id="duvera-h" className="section-title">
            Čísla z tachografu, ne z marketingu.
          </h2>
        </div>

        <dl className="cisla-grid">
          {cisla.map((c) => (
            <div className="cislo" key={c.label}>
              <dt className="cislo-label">{c.label}</dt>
              <dd className="cislo-hodnota">
                {c.hodnota} <span className="cislo-jednotka">{c.jednotka}</span>
              </dd>
            </div>
          ))}
        </dl>

        <figure className="reference">
          <blockquote>
            <p>
              „Dracar Olomouc nám dodává pohonné hmoty od roku 2009 pro celou
              Moravu. Kvalitní paliva pro naše stroje, dost cisteren na to, aby
              byli flexibilní, a zvládají i naše vysoké nároky na dodávky.
              Mohu jen doporučit.“
            </p>
          </blockquote>
          <figcaption>Dlouhodobý odběratel PHM, stavebnictví — od dubna 2009</figcaption>
        </figure>

        <div className="kontakty-pas">
          <p className="kontakty-pas-title">Kdo zvedne telefon</p>
          <ul className="kontakty-list">
            {kontakty.map((k) => (
              <li className="kontakt" key={k.tel}>
                <span className="kontakt-role">{k.role}</span>
                <span className="kontakt-jmeno">{k.jmeno}</span>
                <a className="kontakt-tel" href={`tel:+420${k.tel.replace(/\s/g, "")}`}>
                  {k.tel}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
