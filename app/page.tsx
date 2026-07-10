import type { CSSProperties } from "react";

export default function Page() {
  const services = [
    {
      code: "WEB",
      title: "Weby a portály na WebJET CMS",
      body: "Postavíme web, který si sami spravujete v prohlížeči — bez webmastera, bez čekání. Od firemní prezentace po rozsáhlý portál s tisíci stránek.",
      meta: "Redakční systém · vlastní správa obsahu",
    },
    {
      code: "SHOP",
      title: "E‑shopy s platbou GoPay",
      body: "Moderní e‑commerce s přehlednou správou objednávek, sklady a napojením na platební bránu. Prodáváte hned, ne až po měsících ladění.",
      meta: "E‑commerce · GoPay · správa skladu",
    },
    {
      code: "APP",
      title: "Aplikace na míru",
      body: "Rozpočty, plánování zakázek, organizace týmu na denní bázi. Software přesně na váš proces — jako systém pro Zahrady Bula.",
      meta: "Aplikace na klíč · intranet",
    },
    {
      code: "MKT",
      title: "Grafika, animace a marketing",
      body: "Vizuální identita, kampaně a marketing na internetu. Aby vás lidé našli a poznali — ne aby web jen existoval.",
      meta: "Grafika · reklama · konzultace",
    },
  ];

  const refs = [
    {
      name: "Vivus — Zahradní město",
      note: "Prezentace developerského projektu, 136 bytových jednotek, rezervace online.",
      year: "2026",
    },
    {
      name: "Zahrady Bula",
      note: "Systém pro rozpočty, nabídky a denní organizaci práce firemního týmu.",
      year: "2026",
    },
    {
      name: "Vivus — Žižkov",
      note: "Web pro projekt s více než 200 byty, rezervace ještě před kolaudací.",
      year: "2025",
    },
  ];

  return (
    <main className="wa">
      <header className="wa-top">
        <a className="wa-mark" href="#" aria-label="WebActive, úvodní stránka">
          <span className="wa-mark-web">web</span><span className="wa-mark-active">Active</span><span className="wa-cursor" aria-hidden="true"></span>
        </a>
        <nav className="wa-nav" aria-label="Hlavní">
          <a href="#sluzby">Služby</a>
          <a href="#reference">Reference</a>
          <a className="wa-nav-cta" href="#kontakt">Chci web</a>
        </nav>
      </header>

      <section className="wa-hero">
        <div className="wa-hero-text">
          <p className="wa-eyebrow">Reklamní a webová agentura · Ústí nad Labem</p>
          <h1 className="wa-h1">
            Web, který si<br />
            <span className="wa-hl">spravujete sami.</span>
          </h1>
          <p className="wa-lede">
            Od roku 2000 stavíme weby, e‑shopy a aplikace na vlastním redakčním
            systému WebJET. Obsah upravíte v prohlížeči — bez programátora, bez
            čekání, bez faktury za každou změnu.
          </p>
          <div className="wa-hero-actions">
            <a className="wa-btn" href="#kontakt">Nezávazně poptat web</a>
            <a className="wa-btn-ghost" href="#sluzby">Co umíme</a>
          </div>
        </div>
        <figure className="wa-hero-media">
          <img
            src="/hero.webp"
            alt="Práce webové agentury WebActive — návrh a správa webové prezentace"
            width={1200}
            height={1500}
            className="wa-hero-img"
          />
          <figcaption className="wa-hero-cap">
            <span className="wa-dot" aria-hidden="true"></span>
            WebJET CMS — správa obsahu z prohlížeče
          </figcaption>
        </figure>
      </section>

      <section className="wa-band" aria-label="Čím se zabýváme">
        <div className="wa-band-track">
          <span>Weby</span><span>·</span><span>E‑shopy</span><span>·</span>
          <span>Portály</span><span>·</span><span>Aplikace na míru</span><span>·</span>
          <span>Grafika</span><span>·</span><span>Marketing</span><span>·</span>
          <span>Weby</span><span>·</span><span>E‑shopy</span><span>·</span>
          <span>Portály</span><span>·</span><span>Aplikace na míru</span><span>·</span>
          <span>Grafika</span><span>·</span><span>Marketing</span><span>·</span>
        </div>
      </section>

      <section className="wa-services" id="sluzby">
        <div className="wa-section-head">
          <p className="wa-eyebrow">Co pro vás postavíme</p>
          <h2 className="wa-h2">Čtyři věci, které umíme opravdu dobře</h2>
        </div>
        <ul className="wa-cards">
          {services.map((s) => (
            <li className="wa-card" key={s.code}>
              <span className="wa-card-code" aria-hidden="true">{s.code}</span>
              <h3 className="wa-card-title">{s.title}</h3>
              <p className="wa-card-body">{s.body}</p>
              <p className="wa-card-meta">{s.meta}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="wa-refs" id="reference">
        <div className="wa-refs-grid">
          <div className="wa-refs-media">
            <img
              src="/section-1.webp"
              alt="Ukázka realizovaného webu od agentury WebActive"
              width={1000}
              height={1200}
              className="wa-refs-img"
            />
          </div>
          <div className="wa-refs-text">
            <p className="wa-eyebrow">Reference z Ústí i z celé republiky</p>
            <h2 className="wa-h2">Weby, které běží roky a vydělávají</h2>
            <p className="wa-refs-lede">
              Developerské projekty, e‑shopy i firemní systémy. Stavíme tak, aby
              vám web sloužil dlouho — a abyste ho zvládli sami měnit.
            </p>
            <ol className="wa-ref-list">
              {refs.map((r) => (
                <li className="wa-ref" key={r.name}>
                  <span className="wa-ref-year">{r.year}</span>
                  <div>
                    <p className="wa-ref-name">{r.name}</p>
                    <p className="wa-ref-note">{r.note}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="wa-about" id="kontakt">
        <img
          src="/section-2.webp"
          alt="Tým agentury WebActive při práci na webových projektech"
          width={1200}
          height={800}
          className="wa-about-img"
        />
        <div className="wa-about-panel">
          <p className="wa-eyebrow wa-eyebrow-light">O nás</p>
          <h2 className="wa-h2 wa-h2-light">
            Sídlíme v Ústí nad Labem a děláme web od základů po správu
          </h2>
          <p className="wa-about-body">
            Nejsme přeprodejci šablon. Máme vlastní redakční systém WebJET,
            vlastní vývojáře i grafiky, a stojíme za weby, které fungují roky.
            Řekněte nám, co potřebujete — ozveme se do dvou pracovních dnů.
          </p>
          <dl className="wa-contact">
            <div>
              <dt>Telefon</dt>
              <dd><a href="tel:+420605584425">+420 605 584 425</a></dd>
            </div>
            <div>
              <dt>E‑mail</dt>
              <dd><a href="mailto:info@webactive.cz">info@webactive.cz</a></dd>
            </div>
            <div>
              <dt>Adresa</dt>
              <dd>Hviezdoslavova 16, Ústí nad Labem 400 03</dd>
            </div>
          </dl>
        </div>
      </section>
    </main>
  );
}
