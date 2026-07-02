export default function Page() {
  const phone = "+420 775 224 733";
  const phoneHref = "tel:+420775224733";

  const steps = [
    {
      n: "VOLÁTE",
      title: "Zavoláte, řekneme čas dojezdu",
      text: "Popíšete, kde stojíte a co se stalo. Rovnou do telefonu řeknete, jestli auto jede, nebo ne — my řekneme, za jak dlouho jsme u vás a kolik to bude stát.",
    },
    {
      n: "JEDEME",
      title: "Naložíme osobák i dodávku",
      text: "Odtahujeme osobní a užitková vozidla po nehodě, poruše i po defektu. Naložíme i vůz se zablokovanými koly nebo bez klíčů.",
    },
    {
      n: "ŘEŠÍME",
      title: "Odvezeme k nám, nebo kam chcete",
      text: "Buď rovnou do našeho servisu v Ostrově, kde závadu najdeme a opravíme, nebo do servisu podle vaší volby. Vy jedete s námi v kabině.",
    },
  ];

  const services = [
    {
      tag: "SERVIS",
      title: "Opravy všech značek",
      text: "Kompletní servis osobních a užitkových vozidel — rozvody od 1 500 Kč, brzdové trubičky na míru 184 Kč/metr, vaření výfuku 400 Kč/hod.",
    },
    {
      tag: "DIAGNOSTIKA",
      title: "OBD + Delphi za 250 Kč",
      text: "Načteme závady motoru i ostatních řídicích jednotek. Než se cokoli rozebere, víte, co autu je a kolik bude oprava stát.",
    },
    {
      tag: "PNEU",
      title: "Přezutí kompletů za 500 Kč",
      text: "Osobní, dodávkové, off-road i motorkové pneumatiky. Píchlou pneumatiku zalepíme knotem za 120 Kč — často ještě ten den.",
    },
    {
      tag: "STK",
      title: "STK + emise bez čekání",
      text: "Prohlídka vozu před STK za 250 Kč, samotné provedení STK s emisemi: benzín 2 800 Kč, nafta 3 000 Kč. Auto přistavíme za vás.",
    },
  ];

  return (
    <main className="bpc">
      {/* ===================== HERO ===================== */}
      <header className="hero">
        <div className="hero-top">
          <div className="wordmark" aria-label="BP Cars">
            <span className="wm-bp">BP</span>
            <span className="wm-cars">CARS</span>
            <span className="wm-sub">odtahová služba · Ostrov</span>
          </div>
          <a className="hero-phone" href={phoneHref}>
            <span className="hero-phone-label">Nonstop dispečink</span>
            <span className="hero-phone-num">{phone}</span>
          </a>
        </div>

        <div className="hero-main">
          <p className="hero-eyebrow">Stojíte na krajnici mezi Ostrovem a Karlovými Vary?</p>
          <h1 className="hero-title">
            <span className="ht-line ht-1">ODTÁHNEME</span>
            <span className="ht-line ht-2">VÁS<span className="ht-dot">.</span></span>
            <span className="ht-line ht-3">A&nbsp;ROVNOU OPRAVÍME<span className="ht-dot">.</span></span>
          </h1>
          <p className="hero-lede">
            Odtahovka s vlastním servisem v jednom areálu. Vaše auto nekončí na parkovišti —
            končí na zvedáku, kde mu najdeme závadu. Jáchymovská 1389, Ostrov, vedle Tesca.
          </p>
          <div className="hero-actions">
            <a className="btn-call" href={phoneHref}>Zavolat odtah</a>
            <span className="hero-note">So–Ne a v noci na stejném čísle</span>
          </div>
        </div>

        {/* signature: reflexní šrafování jako na výstražné desce odtahovky */}
        <div className="hazard" aria-hidden="true">
          <div className="hazard-stripes"></div>
          <div className="hazard-road">
            <span className="road-dash"></span>
          </div>
        </div>
      </header>

      {/* ===================== JAK TO PROBÍHÁ ===================== */}
      <section className="steps" aria-labelledby="steps-h">
        <div className="section-head">
          <h2 id="steps-h">Od telefonátu k opravě</h2>
          <p className="section-lede">
            Tři kroky, které znáte z každé poruchy — jen bez přemlouvání a bez čekání na „partnerský servis“.
          </p>
        </div>
        <ol className="steps-grid">
          {steps.map((s) => (
            <li className="step" key={s.n}>
              <span className="step-tag">{s.n}</span>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </li>
          ))}
        </ol>
        <div className="steps-strip">
          <p>
            <strong>Nemusí to být nehoda.</strong> Vozíme auta i na STK, do lakovny nebo z bazaru
            domů. Cenu odtahu řekneme dopředu do telefonu — platí to, co jsme řekli.
          </p>
          <a className="btn-ghost" href={phoneHref}>Zeptat se na cenu odtahu</a>
        </div>
      </section>

      {/* ===================== SERVIS + DŮVĚRA ===================== */}
      <section className="garage" aria-labelledby="garage-h">
        <div className="section-head">
          <h2 id="garage-h">Odtah končí u nás v dílně</h2>
          <p className="section-lede">
            Většina aut, která přivezeme, od nás odjíždí po vlastní ose. Ceny máme veřejné —
            tady jsou ty, na které se ptáte nejčastěji.
          </p>
        </div>

        <div className="garage-grid">
          {services.map((s) => (
            <article className="g-card" key={s.tag}>
              <span className="g-tag">{s.tag}</span>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </article>
          ))}
        </div>

        <div className="trust">
          <div className="trust-block">
            <span className="trust-label">Kde nás najdete</span>
            <p className="trust-big">Jáchymovská 1389, Ostrov</p>
            <p className="trust-small">Areál hned vedle Tesca Ostrov — z hlavní nás vidíte.</p>
          </div>
          <div className="trust-block">
            <span className="trust-label">Dílna otevřená</span>
            <p className="trust-big">Po–Pá 8–12 / 13–16</p>
            <p className="trust-small">O víkendu odtah i nutné opravy po telefonu: {phone}</p>
          </div>
          <div className="trust-block">
            <span className="trust-label">Jedna firma, jedna odpovědnost</span>
            <p className="trust-big">Odtah + servis + STK</p>
            <p className="trust-small">
              Kdo auto naloží, ten ho i opraví. Žádné předávání mezi firmami, žádné ceny „uvidíme na místě“.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
