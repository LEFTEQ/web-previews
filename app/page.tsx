import type { CSSProperties } from "react";

export default function Page() {
  const sluzby = [
    {
      cislo: "01",
      nazev: "Zateplení a revitalizace fasád",
      popis:
        "Kontaktní zateplovací systém, sanace panelových domů, oprava lodžií a balkónů. Bytové domy v Ostravě zvládneme za jednu sezónu — od lešení po finální omítku.",
      body: ["Kontaktní zateplení (ETICS)", "Sanace a oprava lodžií", "Hydroizolace spodní stavby"],
    },
    {
      cislo: "02",
      nazev: "Hliníkové fasády a výkladce",
      popis:
        "Prosklené fasády, výkladce a vstupní portály z hliníku. Vlastní výroba na moderních strojích — rozměr sedne na milimetr, montáž vede náš tým.",
      body: ["Sloupko-příčkové fasády", "Výkladce a portály", "Výroba i montáž z jednoho místa"],
    },
    {
      cislo: "03",
      nazev: "Ploché a zelené střechy",
      popis:
        "Mechanicky i podtlakově kotvené střechy, hydroizolace asfaltovými pásy, střešní terasy a zeleň. Řešíme fasádu i střechu jako jeden celek.",
      body: ["Zelené a terasové střechy", "Podtlakově kotvené systémy", "Hydroizolace asfaltovými pásy"],
    },
  ];

  const duvody = [
    {
      k: "1991",
      nazev: "Rok založení",
      popis: "Rodinná firma z Ostravy. Přes tři desetiletí revitalizujeme domy po celém Moravskoslezském kraji.",
    },
    {
      k: "tisíce",
      nazev: "Dokončených fasád",
      popis: "Panelové domy, bytová družstva i rodinné domy. Reference najdete v ulicích, kterými denně chodíte.",
    },
    {
      k: "vlastní",
      nazev: "Tým a výrobna",
      popis: "Neděláme přes subdodavatele. Zaměření, výroba i montáž jsou naši lidé — proto jde vše rychle a bez průtahů.",
    },
  ];

  return (
    <main className="page">
      <a className="skip" href="#sluzby">
        Přeskočit na služby
      </a>

      <header className="topbar">
        <span className="wordmark" aria-label="THERM Ostrava">
          THE<span className="wordmark-mid">R</span>M
          <span className="wordmark-tag">Ostrava · fasády</span>
        </span>
        <a className="topbar-call" href="tel:+420596762400">
          596&nbsp;762&nbsp;400
        </a>
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-grid" aria-hidden="true">
          {Array.from({ length: 40 }).map((_, i) => (
            <span key={i} className="hero-tile" style={{ "--i": i } as CSSProperties} />
          ))}
        </div>

        <div className="hero-inner">
          <p className="hero-eyebrow">Zateplení · hliníkové fasády · ploché střechy</p>
          <h1 id="hero-title" className="hero-title">
            <span className="hero-line hero-line-a">Dáváme domům</span>
            <span className="hero-line hero-line-b">novou</span>
            <span className="hero-line hero-line-c">
              <span className="hero-skin">slupku</span>
            </span>
          </h1>
          <p className="hero-sub">
            Fasáda je první vrstva, kterou dům ukazuje světu — a poslední, která ho chrání před ostravským počasím.
            Zateplíme ji, obložíme hliníkem nebo prosklíme. Od zaměření po úklid po montáži.
          </p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="tel:+420596762400">
              Zavolat na zaměření
            </a>
            <a className="btn btn-ghost" href="#sluzby">
              Co umíme
            </a>
          </div>
          <p className="hero-note">Konzultace, zaměření a kalkulace jsou u nás vždy zdarma.</p>
        </div>
      </section>

      <section id="sluzby" className="sluzby" aria-labelledby="sluzby-title">
        <div className="section-head">
          <p className="section-eyebrow">Tři vrstvy, o které se staráme</p>
          <h2 id="sluzby-title" className="section-title">
            Od holé zdi po hotový plášť
          </h2>
        </div>

        <ul className="sluzby-list">
          {sluzby.map((s) => (
            <li key={s.cislo} className="karta">
              <span className="karta-cislo" aria-hidden="true">
                {s.cislo}
              </span>
              <div className="karta-telo">
                <h3 className="karta-nazev">{s.nazev}</h3>
                <p className="karta-popis">{s.popis}</p>
                <ul className="karta-body">
                  {s.body.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section className="onas" aria-labelledby="onas-title">
        <div className="section-head">
          <p className="section-eyebrow">Rodinná firma z Ostravy · od 1991</p>
          <h2 id="onas-title" className="section-title">
            Naši práci poznáte v ulici, ne jen na webu
          </h2>
        </div>

        <div className="onas-grid">
          <ul className="duvody">
            {duvody.map((d) => (
              <li key={d.nazev} className="duvod">
                <span className="duvod-k">{d.k}</span>
                <span className="duvod-nazev">{d.nazev}</span>
                <p className="duvod-popis">{d.popis}</p>
              </li>
            ))}
          </ul>

          <figure className="reference">
            <blockquote className="reference-text">
              „Výměnu oken i vícepráce v našem domě odvedli perfektně. Pan Rozmahel skvěle zaměřil, koordinoval
              zedníky a řešil operativně vše, co se neplánovaně objevilo. Zaměstnanci po sobě denně uklízeli chodby a
              slušně se chovali k nájemníkům — což se často nevidí. Až budeme měnit další okna, obrátíme se znovu na
              vás.“
            </blockquote>
            <figcaption className="reference-autor">
              <span className="reference-jmeno">Božena Kryková</span>
              <span className="reference-role">předsedkyně bytového družstva, Čujkovova 38, Ostrava</span>
            </figcaption>
          </figure>
        </div>
      </section>
    </main>
  );
}
