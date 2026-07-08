import type { CSSProperties } from "react";

export default function Page() {
  const materialy = [
    {
      code: "CU",
      name: "Lisovaná měď",
      note: "Kolena, T-kusy, přechody a kompletní systémy pro rozvody vody i topení.",
    },
    {
      code: "AX",
      name: "Alpex a vícevrstvé trubky",
      note: "Ohebný systém pro podlahové topení i rozvody v bytových jádrech.",
    },
    {
      code: "C",
      name: "Uhlíková ocel (C-steel)",
      note: "Lisované potrubní systémy pro topení a průmyslové strojovny.",
    },
    {
      code: "Fe",
      name: "Litinové fitinky",
      note: "Pozinkované i černé fitinky, kolena a příruby ze skladu.",
    },
    {
      code: "P",
      name: "Čerpadla a kotle",
      note: "Oběhová čerpadla, plynové i elektrické kotle pro domácnosti i firmy.",
    },
    {
      code: "S",
      name: "Sanita a baterie",
      note: "Vodovodní baterie, sprchové kouty, vany, vaničky, klozety i bidety.",
    },
    {
      code: "M",
      name: "Měřidla",
      note: "Manometry, vodoměry a teploměry pro přesné vyvážení soustav.",
    },
    {
      code: "CH",
      name: "Chemie a nářadí",
      note: "Tmely, silikony, úprava topné vody, úpravny pitné vody, ruční i elektrické nářadí.",
    },
  ];

  const reference = [
    "Fakultní nemocnice Hradec Králové",
    "Lakovna a strojovny Škoda Auto",
    "Saint-Gobain Glass — údržba a stavba",
    "Bohemilk a.s. Opočno",
    "Ronal — Jičín i Pardubice",
    "Nová Karolina Ostrava",
    "Rekonstrukce stoupaček BD — Tomkova, Gagarinova, HK",
    "Výměníkové stanice — Chlumec n. C., Týniště n. O.",
  ];

  return (
    <main className="m-main">
      <header className="m-topbar">
        <a className="m-brand" href="#" aria-label="MATEP — velkoobchod a maloobchod">
          <span className="m-brand-mark" aria-hidden="true">
            <span className="m-brand-dot" />
          </span>
          <span className="m-brand-word">
            MATEP<span className="m-brand-sub">s.r.o.</span>
          </span>
        </a>
        <nav className="m-nav" aria-label="Hlavní">
          <a href="#sortiment">Sortiment</a>
          <a href="#onas">O nás</a>
          <a className="m-nav-cta" href="tel:+420724367368">Zavolat 724 367 368</a>
        </nav>
      </header>

      <section className="m-hero" aria-labelledby="hero-title">
        <div className="m-hero-copy">
          <p className="m-eyebrow">Hradec Králové — Věkoše · od roku 1998</p>
          <h1 id="hero-title">
            <span className="m-line">Voda.</span>
            <span className="m-line m-line-2">Topení.</span>
            <span className="m-line m-line-3">Plyn.</span>
          </h1>
          <p className="m-hero-lead">
            Velkoobchod i maloobchod s instalačním materiálem. Většinu sortimentu
            držíme skladem — přijedete, prohlédnete si zboží a rovnou odvezete. Bez čekání.
          </p>
          <div className="m-hero-actions">
            <a className="m-btn" href="tel:+420724367368">Zavolat o cenu</a>
            <a className="m-btn m-btn-ghost" href="#sortiment">Prohlédnout sortiment</a>
          </div>
          <dl className="m-hero-facts">
            <div>
              <dt>Na trhu</dt>
              <dd>od 1998</dd>
            </div>
            <div>
              <dt>Prodejna</dt>
              <dd>K Zastávce 46/2</dd>
            </div>
            <div>
              <dt>Odběr</dt>
              <dd>ze skladu ihned</dd>
            </div>
          </dl>
        </div>
        <figure className="m-hero-media">
          <img
            src="/hero.webp"
            alt="Sklad instalačního materiálu MATEP — fitinky, potrubní systémy a armatury"
            width={900}
            height={1100}
          />
          <figcaption>Prodejní sklad · Věkoše</figcaption>
        </figure>
      </section>

      <section id="sortiment" className="m-section m-sortiment" aria-labelledby="sortiment-title">
        <div className="m-section-head">
          <p className="m-eyebrow">Sortiment</p>
          <h2 id="sortiment-title">
            Kompletní materiál pro instalace &mdash; na jednom místě
          </h2>
          <p className="m-section-lead">
            Od potrubních a spojovacích systémů po armatury, sanitu a měřidla.
            Dodáváme koncovým zákazníkům, řemeslníkům, montážním i stavebním firmám.
          </p>
        </div>
        <ul className="m-grid">
          {materialy.map((m) => (
            <li className="m-card" key={m.code}>
              <span className="m-card-code" aria-hidden="true">{m.code}</span>
              <h3>{m.name}</h3>
              <p>{m.note}</p>
            </li>
          ))}
        </ul>
        <figure className="m-wide-media">
          <img
            src="/section-1.webp"
            alt="Regály s potrubím, fitinky a armaturami v prodejně MATEP"
            width={1400}
            height={780}
          />
        </figure>
      </section>

      <section id="onas" className="m-section m-onas" aria-labelledby="onas-title">
        <div className="m-onas-grid">
          <div className="m-onas-copy">
            <p className="m-eyebrow">O nás &amp; reference</p>
            <h2 id="onas-title">
              Zásobujeme stavby po celém regionu už přes 25 let
            </h2>
            <p>
              Firma vznikla v roce 1998, od roku 2006 fungujeme jako MATEP s.r.o.
              Po 24 letech v Kuklenách nás od dubna 2022 najdete v nové prodejně
              ve Věkoších na adrese K&nbsp;Zastávce 46/2. Obsloužíme vás stejně jako dřív.
            </p>
            <div className="m-onas-visit">
              <p className="m-visit-head">Kamenná prodejna, Věkoše</p>
              <p>
                Kancelář je nahoře po schodech, po pravé straně. Parkoviště P1 ve dvoře
                (vjezd z ul. Jana Černého i K&nbsp;Zastávce) je vhodné i pro nadrozměrné zboží,
                P2 vepředu pro drobnosti. Nevejde se? Pošleme balíkovou i paletovou dopravou.
              </p>
              <a className="m-btn m-btn-ghost" href="mailto:info@matep.cz">Napsat na info@matep.cz</a>
            </div>
          </div>
          <figure className="m-onas-media">
            <img
              src="/section-2.webp"
              alt="Prodejna a výdejní sklad MATEP v Hradci Králové – Věkoších"
              width={800}
              height={960}
            />
          </figure>
        </div>

        <div className="m-refs">
          <p className="m-eyebrow">Vybrané zakázky</p>
          <ul className="m-refs-list">
            {reference.map((r, i) => (
              <li key={r} style={{ "--i": i } as CSSProperties}>
                <span className="m-ref-num">{String(i + 1).padStart(2, "0")}</span>
                <span className="m-ref-name">{r}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
