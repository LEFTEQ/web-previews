import type { CSSProperties } from "react";

export default function Page() {
  const fleet = [
    {
      code: "GT",
      name: "Mustang GT 5.0",
      spec: "5,0 V8 · 450 koní · manuál",
      desc: "Osmiválec, který slyšíte dřív, než ho uvidíte. Na svatbu, na focení, na den, který si chcete pamatovat.",
      price: "od 6 900 Kč / den",
    },
    {
      code: "EB",
      name: "Mustang EcoBoost",
      spec: "2,3 turbo · 290 koní · automat",
      desc: "Lehčí, mrštný, přátelský k peněžence. Ideální na první svezení i delší výlet po Čechách.",
      price: "od 4 500 Kč / den",
    },
    {
      code: "CB",
      name: "Mustang Cabrio",
      spec: "stažitelná střecha · 2+2 místa",
      desc: "Střecha dolů, Vltava po pravé ruce. Léto v Praze má najednou úplně jiný zvuk.",
      price: "od 7 400 Kč / den",
    },
  ];

  const steps = [
    {
      no: "01",
      title: "Vyberete si termín",
      text: "Zavoláte nebo napíšete, řekneme vám na den přesně, který Mustang je volný.",
    },
    {
      no: "02",
      title: "Podepíšeme papíry",
      text: "Občanka, řidičák, vratná kauce. Patnáct minut u nás na Smíchově a je hotovo.",
    },
    {
      no: "03",
      title: "Nasednete a jedete",
      text: "Plná nádrž, čisté auto, klíčky v ruce. Zbytek je na vás a na plynovém pedálu.",
    },
  ];

  return (
    <main className="pg">
      <header className="topbar">
        <a className="wordmark" href="#" aria-label="Mustang For You, domů">
          <span className="wm-mustang">MUSTANG</span>
          <span className="wm-for">for</span>
          <span className="wm-you">YOU</span>
        </a>
        <a className="topcall" href="tel:+420777123456">
          <span className="topcall-dot" aria-hidden="true" />
          Zavolat řidiči
        </a>
      </header>

      <section className="hero" aria-labelledby="hero-h">
        <div className="hero-tach" aria-hidden="true">
          <span className="tach-num tach-1">1</span>
          <span className="tach-num tach-2">2</span>
          <span className="tach-num tach-3">3</span>
          <span className="tach-num tach-4">4</span>
          <span className="tach-num tach-5">5</span>
          <span className="tach-num tach-6">6</span>
          <span className="tach-num tach-7">7</span>
          <span className="tach-redline">redline</span>
        </div>

        <div className="hero-inner">
          <p className="hero-eyebrow">Autopůjčovna · Praha–Smíchov</p>
          <h1 id="hero-h" className="hero-title">
            <span className="line line-a">Pět litrů</span>
            <span className="line line-b">osmiválce,</span>
            <span className="line line-c">na jeden den</span>
            <span className="line line-d">váš.</span>
          </h1>
          <p className="hero-lead">
            Půjčujeme jen Fordy Mustang — nic jiného. Přijedete tramvají,
            odjíždíte s klíčky od amerického kupé, které za sebou nechává
            zvuk, na jaký v Praze jen tak nenarazíte.
          </p>
          <div className="hero-cta">
            <a className="btn btn-primary" href="tel:+420777123456">
              Zavolat: 777 123 456
            </a>
            <a className="btn btn-ghost" href="#vozy">
              Prohlédnout vozy
            </a>
          </div>
        </div>

        <div className="hero-meta" aria-hidden="false">
          <div className="meta-item">
            <span className="meta-k">V8</span>
            <span className="meta-v">jen originální americké motory</span>
          </div>
          <div className="meta-item">
            <span className="meta-k">15 min</span>
            <span className="meta-v">od zavolání ke klíčkům</span>
          </div>
          <div className="meta-item">
            <span className="meta-k">Praha 5</span>
            <span className="meta-v">vyzvednutí i vrácení na Smíchově</span>
          </div>
        </div>
      </section>

      <section className="vozy" id="vozy" aria-labelledby="vozy-h">
        <div className="sec-head">
          <p className="sec-eyebrow">Naše stáj</p>
          <h2 id="vozy-h" className="sec-title">Vyberte si koně</h2>
          <p className="sec-sub">
            Tři generace Mustangu, každý pro jinou náladu. Ceny jsou za den,
            kauce a pojištění řešíme na místě — bez schovaných překvapení.
          </p>
        </div>

        <ul className="fleet" role="list">
          {fleet.map((car) => (
            <li className="card" key={car.code}>
              <span className="card-code" aria-hidden="true">
                {car.code}
              </span>
              <h3 className="card-name">{car.name}</h3>
              <p className="card-spec">{car.spec}</p>
              <p className="card-desc">{car.desc}</p>
              <div className="card-foot">
                <span className="card-price">{car.price}</span>
                <a
                  className="card-link"
                  href="tel:+420777123456"
                  aria-label={`Rezervovat ${car.name} telefonicky`}
                >
                  Rezervovat →
                </a>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section className="jak" aria-labelledby="jak-h">
        <div className="jak-grid">
          <div className="jak-intro">
            <p className="sec-eyebrow">Jak to u nás chodí</p>
            <h2 id="jak-h" className="sec-title sec-title-light">
              Od telefonu k plynu za odpoledne
            </h2>
            <p className="sec-sub sec-sub-light">
              Jsme malá rodinná půjčovna — auta máme rádi a poznáte to.
              Každý Mustang si osobně převezmeme, umyjeme a natankujeme,
              než vám ho předáme. Žádné call centrum, mluvíte přímo s tím,
              kdo klíčky předá.
            </p>
            <a className="btn btn-primary" href="tel:+420777123456">
              Domluvit termín
            </a>
          </div>

          <ol className="steps" role="list">
            {steps.map((s) => (
              <li className="step" key={s.no}>
                <span className="step-no">{s.no}</span>
                <div className="step-body">
                  <h3 className="step-title">{s.title}</h3>
                  <p className="step-text">{s.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <figure className="quote">
          <blockquote>
            „Půjčil jsem GTéčko na svatbu a nevěsta ho nechtěla vrátit.
            Auto naleštěné, plná nádrž, kluci vysvětlili každý knoflík.
            Příště zase.“
          </blockquote>
          <figcaption>
            <span className="quote-name" style={{ "--i": 0 } as CSSProperties}>
              Tomáš K.
            </span>
            <span className="quote-role">ženich, Praha 6 · léto 2024</span>
          </figcaption>
        </figure>
      </section>
    </main>
  );
}
