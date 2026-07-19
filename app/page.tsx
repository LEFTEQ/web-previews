import { Frame } from "./motion";

export default function Page() {
  return (
    <main className="vf">
      <div className="vf-topbar vf-wrap">
        <span className="vf-mark">
          LASO<i className="vf-markdot" />
        </span>
        <span className="vf-topmeta">Kamerové systémy · Brno</span>
      </div>

      {/* HERO — acquiring focus */}
      <section className="vf-section vf-hero">
        <div className="vf-wrap">
          <Frame load focus coord="49.1951°N  16.6068°E — BRNO" className="vf-heroframe">
            <p className="vf-eyebrow">Zabezpečení, které nespí</p>
            <h1 className="vf-h1">
              Kamery, které vidí
              <br />
              <span className="vf-amber">i&nbsp;po setmění.</span>
            </h1>
            <p className="vf-lead">
              Navrhujeme, instalujeme a spravujeme kamerové systémy pro domy, byty a firmy
              v Brně. Ostrý obraz i za tmy, záznam po ruce v mobilu a servis, který zvedne
              telefon.
            </p>
            <ul className="vf-chips">
              <li>Infračervené přisvícení</li>
              <li>4K rozlišení</li>
              <li>Vzdálený přístup z mobilu</li>
            </ul>
          </Frame>
        </div>
      </section>

      {/* SLUŽBY */}
      <section className="vf-section">
        <div className="vf-wrap">
          <p className="vf-eyebrow">Co instalujeme</p>
          <h2 className="vf-h2">Tři okruhy, jeden dohled</h2>
          <div className="vf-grid">
            <Frame coord="CH1 · 3840×2160" className="vf-card">
              <h3 className="vf-h3">Kamerové systémy</h3>
              <p>
                IP kamery s nočním viděním, chytrou detekcí pohybu a záznamem, ke kterému se
                dostanete z telefonu odkudkoli. Od jedné kamery u dveří po desítky kanálů pro
                halu.
              </p>
            </Frame>
            <Frame coord="EZS · STŘEŽENO" className="vf-card">
              <h3 className="vf-h3">Alarmy proti vloupání</h3>
              <p>
                Magnetická čidla, detektory pohybu a napojení na pult centrální ochrany. Když se
                doma něco pohne, víte to jako první — a s vámi i zásahová jednotka.
              </p>
            </Frame>
            <Frame coord="EPS · V POŘÁDKU" className="vf-card">
              <h3 className="vf-h3">Požární signalizace</h3>
              <p>
                Detekce kouře a včasný poplach dřív, než plameny naberou sílu. Návrh podle normy,
                pravidelné revize a servis, který si hlídáme za vás.
              </p>
            </Frame>
          </div>
        </div>
      </section>

      {/* DŮVĚRA */}
      <section className="vf-section">
        <div className="vf-wrap">
          <p className="vf-eyebrow">Proč nám věřit</p>
          <h2 className="vf-h2">Čísla, za kterými si stojíme</h2>
          <div className="vf-stats">
            <Frame coord="LOG · 07Y">
              <div className="vf-stat-inner">
                <span className="vf-num">7</span>
                <span className="vf-unit">let servisní podpory ke každé nové instalaci</span>
              </div>
            </Frame>
            <Frame coord="LOG · 03M">
              <div className="vf-stat-inner">
                <span className="vf-num">3</span>
                <span className="vf-unit">měsíce střežení zdarma hned na start</span>
              </div>
            </Frame>
            <Frame coord="NET · 500K">
              <div className="vf-stat-inner">
                <span className="vf-num">500&nbsp;000</span>
                <span className="vf-unit">domácností pod dohledem naší aplikace</span>
              </div>
            </Frame>
          </div>
          <p className="vf-about">
            Jsme certifikovaní montážní partneři a v Brně zabezpečujeme domy i provozovny už
            řadu let. Každou zakázku navrhujeme na míru — přijedeme, změříme a poradíme, kolik
            kamer skutečně potřebujete a kam je umístit, aby nezůstalo slepé místo.
          </p>
          <p className="vf-info">Ukázková 123, Brno · 777 111 222 · info@example.cz</p>
        </div>
      </section>
    </main>
  );
}
