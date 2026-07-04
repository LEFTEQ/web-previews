import type { CSSProperties } from "react";

export default function Page() {
  const services = [
    {
      idx: "01",
      title: "Servis všech značek",
      lead: "Záruční i pozáruční servis s diagnostikou.",
      body: "Elektronika i mechanika, opravy po havárii, startéry a alternátory. Připravíme vůz na STK, seřídíme geometrii, přezujeme. Jedno místo pro celý rok provozu.",
    },
    {
      idx: "02",
      title: "Renovace alu kol",
      lead: "Rovnání, svařování, leštění — a nový lak.",
      body: "Ohnuté kolo srovnáme, prasklinu svaříme stejným materiálem, ze kterého je disk. Vyvážíme, zbavíme škrábanců, přelakujeme. Kolo se vrátí jako z výroby.",
    },
    {
      idx: "03",
      title: "HRE Wheels na míru",
      lead: "Kovaná kola z leteckého hliníku.",
      body: "Exkluzivní americký výrobce. Design podle vozu i podle vás, doživotní záruka na pevnost. Pomůžeme vybrat rozměr, ofset i barvu — a nasadíme je.",
    },
  ];

  const hours = [
    ["Po", "9–18"],
    ["Út", "9–18"],
    ["St", "9–18"],
    ["Čt", "9–18"],
    ["Pá", "9–18"],
    ["So–Ne", "zavřeno"],
  ];

  return (
    <main className="ps">
      <header className="ps-nav">
        <a className="ps-mark" href="#top" aria-label="PS CARS Praha, úvod">
          <span className="ps-mark-ps">PS</span>
          <span className="ps-mark-cars">CARS</span>
          <span className="ps-mark-city">Praha</span>
        </a>
        <nav className="ps-links" aria-label="Hlavní navigace">
          <a href="#servis">Servis</a>
          <a href="#kola">Alu kola</a>
          <a href="#duvera">O nás</a>
          <a className="ps-tel" href="tel:+420777137277">777 137 277</a>
        </nav>
      </header>

      <section className="ps-hero" id="top">
        <img
          className="ps-hero-img"
          src="/hero.webp"
          alt="Detail lakování karoserie v lakovacím boxu autoservisu PS CARS Praha"
        />
        <div className="ps-hero-scrim" aria-hidden="true" />
        <div className="ps-hero-inner">
          <p className="ps-eyebrow">Autolakovna &amp; servis · Praha 10 Štěrboholy · od 2004</p>
          <h1 className="ps-hero-title">
            Odstín, který
            <br />
            <span className="ps-hero-accent">sedne na kov.</span>
          </h1>
          <p className="ps-hero-sub">
            Lakujeme karoserie a renovujeme alu kola tak, aby přechod na díl,
            kterého jsme se dotkli, nebyl vidět. Servis všech značek pod jednou
            střechou.
          </p>
          <div className="ps-hero-cta">
            <a className="ps-btn ps-btn-solid" href="tel:+420777137277">
              Zavolat do lakovny
            </a>
            <a className="ps-btn ps-btn-ghost" href="#kola">
              Renovace alu kol
            </a>
          </div>
          <ul className="ps-swatches" aria-label="Míchání odstínu podle vzorníku">
            <li style={{ "--c": "#B22222" } as CSSProperties}>RAL 3000</li>
            <li style={{ "--c": "#1B1F24" } as CSSProperties}>metalíza</li>
            <li style={{ "--c": "#C9CDD2" } as CSSProperties}>stříbrná</li>
            <li style={{ "--c": "#E0A200" } as CSSProperties}>čirý lak</li>
          </ul>
        </div>
      </section>

      <section className="ps-sec ps-services" id="servis">
        <div className="ps-sec-head">
          <p className="ps-eyebrow">Co u nás necháte udělat</p>
          <h2 className="ps-h2">Tři dílny, jedna adresa</h2>
        </div>
        <div className="ps-service-media" id="kola">
          <img
            src="/section-1.webp"
            alt="Renovované hliníkové kolo po srovnání a přelakování"
            className="ps-media-img"
          />
        </div>
        <ol className="ps-service-list">
          {services.map((s) => (
            <li className="ps-service" key={s.idx}>
              <span className="ps-service-idx">{s.idx}</span>
              <div className="ps-service-text">
                <h3 className="ps-service-title">{s.title}</h3>
                <p className="ps-service-lead">{s.lead}</p>
                <p className="ps-service-body">{s.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="ps-sec ps-trust" id="duvera">
        <div className="ps-trust-grid">
          <div className="ps-trust-copy">
            <p className="ps-eyebrow">O autoservisu</p>
            <h2 className="ps-h2">
              Za odvedenou práci ručíme jménem — od roku 2004.
            </h2>
            <p className="ps-trust-body">
              PS CARS jsme založili s jednoduchým cílem: sundat majitelům starosti
              se servisem z krku. Vůz převezmeme, uděláme, co je potřeba, a vrátíme
              hotový. Díky smluvním partnerům a dostupným dílům pro všechny značky
              to zvládneme rychle.
            </p>
            <p className="ps-signoff">— jednatel autoservisu PS CARS Praha</p>

            <dl className="ps-facts">
              <div>
                <dt>Adresa</dt>
                <dd>Ústřední 370/38a, 102 00 Praha 10 – Štěrboholy</dd>
              </div>
              <div>
                <dt>Autoservis</dt>
                <dd>
                  <a href="tel:+420777137277">777 137 277</a>
                </dd>
              </div>
              <div>
                <dt>Servis</dt>
                <dd>
                  <a href="tel:+420773126229">773 126 229</a>
                </dd>
              </div>
              <div>
                <dt>E-mail</dt>
                <dd>
                  <a href="mailto:pscars@pscars.cz">pscars@pscars.cz</a>
                </dd>
              </div>
            </dl>
          </div>

          <aside className="ps-hours-card" aria-label="Otevírací doba">
            <img
              src="/section-2.webp"
              alt="Pracoviště autoservisu PS CARS Praha se zvednutým vozem"
              className="ps-hours-img"
            />
            <div className="ps-hours-body">
              <h3 className="ps-hours-title">Otevřeno</h3>
              <table className="ps-hours">
                <tbody>
                  {hours.map(([d, h]) => (
                    <tr key={d}>
                      <th scope="row">{d}</th>
                      <td>{h}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className="ps-hours-note">
                Bez objednání se rádi domluvíme telefonicky — poradíme rovnou,
                jestli má cenu přijet dnes.
              </p>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
