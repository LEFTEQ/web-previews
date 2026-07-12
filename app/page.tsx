import React from "react";

export default function Page() {
  const products = [
    {
      n: "01",
      name: "DIWER a DIWER EVO",
      code: "sestavné jednotky",
      d: "Vzduchotechnické jednotky skládané na míru rozměru strojovny. Poskládáme přesně tolik sekcí, kolik provoz potřebuje — od filtrace po rekuperaci.",
    },
    {
      n: "02",
      name: "Diamant",
      code: "kompaktní jednotka",
      d: "Kompaktní jednotka pro kanceláře, školy a menší provozy. Tichý chod, nízká spotřeba a rekuperace tepla ze vzduchu, který jinak uniká oknem.",
    },
    {
      n: "03",
      name: "Goliath",
      code: "vysoký výkon",
      d: "Když je potřeba přesunout hodně vzduchu — haly, výroba, sportoviště. Robustní konstrukce stavěná na nepřetržitý provoz.",
    },
    {
      n: "04",
      name: "Top4",
      code: "střešní jednotka",
      d: "Střešní provedení, které nezabírá místo uvnitř budovy. Rychlá montáž a servisní přístup shora.",
    },
    {
      n: "05",
      name: "Mundaria",
      code: "bytové větrání",
      d: "Čerstvý vzduch do bytů a rodinných domů bez otevírání oken. Rekuperace, filtrace pylu a prachu, klidný spánek bez hluku z ulice.",
    },
    {
      n: "06",
      name: "Servis a měření",
      code: "po celou životnost",
      d: "Pravidelná údržba, výměna filtrů, měření průtoku a vyvážení soustavy. Rozdíl mezi jednotkou, která běží, a tou, která větrá správně.",
    },
  ];

  const refs = [
    { n: "REF · 01", t: "Administrativní budovy", d: "Kanceláře v Praze, kde lidé dýchají čistý vzduch celý pracovní den." },
    { n: "REF · 02", t: "Školy a školky", d: "Třídy s řízeným větráním — nižší CO₂, soustředěnější děti." },
    { n: "REF · 03", t: "Výrobní haly", d: "Technologické větrání a odvod tepla v náročném provozu." },
    { n: "REF · 04", t: "Bytové domy", d: "Rekuperace do nových i rekonstruovaných bytů po celé Praze." },
  ];

  return (
    <main>
      <nav className="nav">
        <div className="mark">
          WR&nbsp;<b>CZ</b>
          <span>VZDUCHOTECHNIKA · PRAHA</span>
        </div>
        <div className="navlinks">
          <a href="#produkty">Jednotky</a>
          <a href="#duvera">Reference</a>
          <a href="#produkty">Servis</a>
        </div>
      </nav>

      <header className="hero">
        <div className="hero-inner">
          <div>
            <p className="hero-eyebrow rev">Vzduchotechnika · Praha · Vinohrady</p>
            <h1 className="rev d1">
              Vzduch, který <em>vydechnete</em> s klidem.
            </h1>
            <p className="lead rev d2">
              Navrhujeme, dodáváme a servisujeme vzduchotechnické jednotky pro
              kanceláře, školy, haly i byty v Praze. Čerstvý, filtrovaný a
              vyvážený vzduch — bez otevřených oken a bez hluku.
            </p>
            <div className="hero-cta rev d3">
              <a className="btn btn-primary" href="tel:+420774947947">Zavolat na +420 774 947 947</a>
              <a className="btn btn-ghost" href="#produkty">Prohlédnout jednotky</a>
            </div>
          </div>
          <div className="hero-media rev d2">
            <img
              src="/hero.webp"
              alt="Vzduchotechnická jednotka WR CZ ve strojovně — plechové sekce, ventilátor a rozvody vzduchu"
            />
          </div>
        </div>

        <div className="specs wrap" style={{ maxWidth: "1180px", margin: "0 auto", paddingLeft: 0, paddingRight: 0 }}>
          <div className="spec">
            <p className="k">Sídlo</p>
            <p className="v">Vinohradská 90, Praha 3</p>
          </div>
          <div className="spec">
            <p className="k">Zaměření</p>
            <p className="v">Návrh · dodávka · servis</p>
          </div>
          <div className="spec">
            <p className="k">Řady jednotek</p>
            <p className="v">DIWER · Diamant · Goliath</p>
          </div>
          <div className="spec">
            <p className="k">Dostupnost servisu"</p>
            <p className="v">Praha a Středočeský kraj</p>
          </div>
        </div>

        <div className="airflow" aria-hidden="true">
          <svg viewBox="0 0 1200 70" preserveAspectRatio="none">
            <path d="M0,20 C200,50 400,-10 600,20 C800,50 1000,-10 1200,20" />
            <path d="M0,45 C200,75 400,15 600,45 C800,75 1000,15 1200,45" />
          </svg>
        </div>
      </header>

      <section className="section" id="produkty">
        <div className="wrap">
          <div className="sec-head">
            <span className="tag">Výrobní sortiment</span>
            <h2>Jedna značka, jednotka pro každou strojovnu.</h2>
            <p className="sub">
              Od kompaktní jednotky do školní třídy až po sestavné řady na míru
              hale. Poradíme, změříme a navrhneme řešení, které sedne prostoru
              i rozpočtu — ne to, které se zrovna hodí prodat.
            </p>
          </div>

          <div className="grid">
            {products.map((p) => (
              <article className="card" key={p.n}>
                <span className="num">{p.n}</span>
                <h3>
                  {p.name}
                  <small>{p.code}</small>
                </h3>
                <p>{p.d}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section altsec" id="duvera">
        <div className="wrap">
          <div className="split">
            <div className="split-media">
              <img
                src="/section-1.webp"
                alt="Technik WR CZ při montáži vzduchotechniky — rozvody a měření průtoku vzduchu"
              />
            </div>
            <div>
              <span className="tag">Rozdíl je v dobrých službách</span>
              <h2>Kvalitní vzduch, kvalitní život.</h2>
              <p className="sub">
                Dobré firmy rostou díky spolupráci s dobrými firmami. Náš seznam
                referencí je dlouhý ne náhodou — je to výsledek let, kdy jsme
                dělali vzduchotechniku pořádně a stáli za ní i po předání.
              </p>

              <ul className="trust-list">
                <li>
                  <span className="tn">01</span>
                  <span>
                    <strong>Návrh na míru, ne z katalogu</strong>
                    Změříme prostor, spočítáme výměnu vzduchu a navrhneme jednotku,
                    která odpovídá reálnému provozu.
                  </span>
                </li>
                <li>
                  <span className="tn">02</span>
                  <span>
                    <strong>Servis po celou životnost</strong>
                    Filtry, měření, vyvážení. Jsme dostupní i roky po montáži —
                    telefon zvedáme.
                  </span>
                </li>
                <li>
                  <span className="tn">03</span>
                  <span>
                    <strong>Doma v Praze</strong>
                    Sídlíme na Vinohradech, k zákazníkům v Praze i okolí dojedeme
                    rychle — bez čekání týden na výjezd.
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div style={{ marginTop: "48px" }}>
            <div className="split" style={{ gridTemplateColumns: "1.1fr .9fr" }}>
              <div>
                <span className="tag">Kde už čistý vzduch dýchají</span>
                <div className="refs">
                  {refs.map((r) => (
                    <div className="ref" key={r.n}>
                      <div className="r-n">{r.n}</div>
                      <div className="r-t">{r.t}</div>
                      <div className="r-d">{r.d}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="split-media">
                <img
                  src="/section-2.webp"
                  alt="Detail vzduchotechnické jednotky WR CZ — filtr a plechové opláštění"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
