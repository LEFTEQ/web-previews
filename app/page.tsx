import type { CSSProperties } from "react";

const brands = [
  { name: "Samsung", note: "od 1996" },
  { name: "LG", note: "split i VRF" },
  { name: "Daikin", note: "tepelná čerpadla" },
  { name: "Olimpia Splendid", note: "mobilní i bez venkovní jednotky" },
];

const services = [
  {
    id: "01",
    title: "Dodávky techniky a náhradních dílů",
    body:
      "Jsme autorizovaný distributor. Splitové jednotky, kazety, VRF systémy i tepelná čerpadla máme skladem v Praze — včetně náhradních dílů, takže servis nečeká týdny na díl z ciziny.",
  },
  {
    id: "02",
    title: "Instalace a uvedení do provozu",
    body:
      "Náš tým techniků navrhne řešení na míru prostoru — od bytu po administrativní budovu — a zařízení odborně nainstaluje, zavakuuje okruh a předá s protokolem.",
  },
  {
    id: "03",
    title: "Autorizovaný servis a poradenství",
    body:
      "Pravidelné revize, čištění výparníků, kontrola náplně chladiva i pohotovostní zásahy. Radíme také projektantům a instalačním firmám při návrhu chlazení.",
  },
];

const partners = [
  "developeři a stavební společnosti",
  "projekční a odborné firmy",
  "instalatéři chlazení a klimatizace",
  "správci administrativních budov",
];

export default function Page() {
  return (
    <main className="page">
      <header className="topbar">
        <a className="wordmark" href="#" aria-label="TradeSam, úvod">
          <span className="wordmark-trade">Trade</span>
          <span className="wordmark-sam">Sam</span>
          <span className="wordmark-dot" aria-hidden="true" />
        </a>
        <nav className="topnav" aria-label="Hlavní navigace">
          <a href="#nabidka">Nabídka</a>
          <a href="#znacky">Značky</a>
          <a href="#o-nas">O nás</a>
        </nav>
      </header>

      <section className="hero">
        <div className="hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Klimatizace &amp; tepelná čerpadla · Praha</p>
            <h1 className="hero-title">
              Klima, které v Praze
              <br />
              udrží <span className="hero-accent">nula až komfort</span>
              <br />
              po celý rok.
            </h1>
            <p className="hero-lead">
              Autorizovaný distributor a servisní partner Samsung, LG, Daikin a
              Olimpia Splendid. Dodáváme, instalujeme a servisujeme — s díly
              skladem a technikou v Praze.
            </p>
            <div className="hero-actions">
              <a className="btn btn-primary" href="#nabidka">
                Prohlédnout nabídku
              </a>
              <a className="btn btn-ghost" href="#o-nas">
                25 let na trhu ČR
              </a>
            </div>
          </div>

          <figure className="hero-media">
            <img
              src="/hero.webp"
              alt="Vnitřní jednotka klimatizace TradeSam nad oknem v pražském interiéru"
              className="hero-img"
              width={880}
              height={1040}
            />
            <figcaption className="hero-tag">
              <span className="hero-tag-num">23,0&nbsp;°C</span>
              <span className="hero-tag-label">nastaveno · tiše chladí</span>
            </figcaption>
          </figure>
        </div>

        <div className="brandstrip" aria-label="Zastoupené značky">
          {brands.map((b) => (
            <div className="brandstrip-item" key={b.name}>
              <span className="brandstrip-name">{b.name}</span>
              <span className="brandstrip-note">{b.note}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="section services" id="nabidka">
        <div className="section-head">
          <p className="eyebrow">Co pro vás uděláme</p>
          <h2 className="section-title">
            Od návrhu po revizi — jeden partner na celý životní cyklus
            zařízení.
          </h2>
        </div>

        <div className="services-grid">
          <ol className="services-list">
            {services.map((s) => (
              <li className="service" key={s.id}>
                <span className="service-num" aria-hidden="true">
                  {s.id}
                </span>
                <div className="service-text">
                  <h3 className="service-title">{s.title}</h3>
                  <p className="service-body">{s.body}</p>
                </div>
              </li>
            ))}
          </ol>

          <figure className="services-media">
            <img
              src="/section-1.webp"
              alt="Technik TradeSam při instalaci venkovní jednotky klimatizace"
              className="section-img"
              width={720}
              height={900}
            />
          </figure>
        </div>
      </section>

      <section className="section about" id="o-nas">
        <div className="about-grid">
          <figure className="about-media">
            <img
              src="/section-2.webp"
              alt="Skladové zázemí TradeSam s klimatizačními jednotkami a náhradními díly"
              className="section-img"
              width={720}
              height={900}
            />
          </figure>

          <div className="about-copy">
            <p className="eyebrow" id="znacky">
              Zkušenost od roku 1996
            </p>
            <h2 className="section-title">
              Klimatizace Samsung jsme do Česka vozili jako první.
            </h2>
            <p className="about-body">
              TradeSam navazuje na Electric AP — prvního výhradního dovozce
              klimatizací Samsung do ČR. Za víc než 25 let jsme z toho postavili
              odborný tým techniků a specialistů, kteří najdou řešení pro každý
              provoz i každý rozpočet.
            </p>

            <ul className="partners">
              {partners.map((p) => (
                <li className="partner" key={p}>
                  {p}
                </li>
              ))}
            </ul>

            <div
              className="stat-row"
              style={{ "--delay": "0ms" } as CSSProperties}
            >
              <div className="stat">
                <span className="stat-num">1996</span>
                <span className="stat-label">první dovoz Samsung do ČR</span>
              </div>
              <div className="stat">
                <span className="stat-num">4</span>
                <span className="stat-label">
                  značky pod jednou autorizací
                </span>
              </div>
              <div className="stat">
                <span className="stat-num">Praha</span>
                <span className="stat-label">sklad, díly i technici</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
