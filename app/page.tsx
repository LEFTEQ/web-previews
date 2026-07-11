import type { CSSProperties } from "react";

export default function Page() {
  const stock = [
    {
      code: "01",
      model: "Suzuki e VITARA",
      body: "Elektrické SUV · pohon všech kol",
      note: "Nové v Brně — přijďte na předváděcí jízdu",
      price: "Novinka 2026",
      tag: "Skladem od června",
    },
    {
      code: "02",
      model: "SWM G1 PRO",
      body: "Sedmimístné SUV · benzin",
      note: "Roadshow sleva 60 000 Kč z jedné jasné ceny",
      price: "699 000 Kč",
      tag: "Akce",
    },
    {
      code: "03",
      model: "BAIC X35",
      body: "Kompaktní SUV · manuál",
      note: "Doskladněno několik kusů za původní cenu",
      price: "399 900 Kč",
      tag: "Akce prodloužena",
    },
  ];

  const services = [
    {
      k: "Servis",
      t: "Autorizovaný servis a náhradní díly",
      d: "SUZUKI, NISSAN, DONGFENG, SWM a Piaggio užitkové. Servisujeme i Lada Niva a UAZ. Antikorozní nástřik pro vozy všech značek.",
    },
    {
      k: "Úpravy ZTP",
      t: "Ruční ovládání a přepravní systémy",
      d: "Úpravy pro řízení a pohodlnou přepravu už od roku 1997. Výhradní dovozce italské značky Handytech, dále Guidosimplex, Fadiel, Autochair a NMI.",
    },
    {
      k: "Financování",
      t: "Rezervace termínu a poradenství",
      d: "Domluvíme předváděcí jízdu, spočítáme financování i výkup vašeho stávajícího vozu. Prodej bereme jako začátek dlouhé spolupráce.",
    },
  ];

  return (
    <main className="cc">
      <header className="cc-top">
        <a className="cc-mark" href="#" aria-label="CanoCar Brno, domů">
          <span className="cc-mark-a">Cano</span>
          <span className="cc-mark-b">Car</span>
          <span className="cc-mark-plate">BRNO · 1994</span>
        </a>
        <nav className="cc-nav" aria-label="Hlavní">
          <a href="#nabidka">Vozy</a>
          <a href="#sluzby">Servis</a>
          <a href="#onas">O nás</a>
        </nav>
        <a className="cc-call" href="tel:+420547357017">Zavolat +420 547 357 017</a>
      </header>

      <section className="cc-hero" aria-labelledby="hero-h">
        <div className="cc-hero-img">
          <img src="/hero.webp" alt="Vůz z nabídky autosalonu CanoCar na Olomoucké v Brně" />
        </div>
        <div className="cc-hero-copy">
          <p className="cc-eyebrow">Autosalon &amp; servis · Olomoucká, Brno-Černovice</p>
          <h1 id="hero-h">
            Auta, u kterých<br />
            <em>zůstanete</em> i po klíčcích.
          </h1>
          <p className="cc-lede">
            Prodáváme a servisujeme vozy Suzuki už od roku 1994 — patříme k prodejcům
            s nejdelší tradicí v Česku. Dnes u nás najdete i BAIC, SWM, Nissan,
            Dongfeng a Piaggio Commercial. Vše na jednom místě v Brně.
          </p>
          <div className="cc-hero-cta">
            <a className="cc-btn" href="#nabidka">Prohlédnout vozy</a>
            <a className="cc-btn-ghost" href="#sluzby">Objednat do servisu</a>
          </div>
          <dl className="cc-facts">
            <div><dt>od roku</dt><dd>1994</dd></div>
            <div><dt>značek pod střechou</dt><dd>6</dd></div>
            <div><dt>úpravy pro ZTP od</dt><dd>1997</dd></div>
          </dl>
        </div>
      </section>

      <section className="cc-stock" id="nabidka" aria-labelledby="stock-h">
        <div className="cc-sec-head">
          <p className="cc-eyebrow">Z aktuální nabídky</p>
          <h2 id="stock-h">Vozy, které máte reálně na dosah</h2>
          <p className="cc-sec-sub">
            Skladové a předváděcí vozy v Brně. Ceny jsou konkrétní — žádné „od“, které se
            u stolu zvětší.
          </p>
        </div>

        <div className="cc-cards">
          <figure className="cc-showpiece">
            <img src="/section-1.webp" alt="Detail vozu ze skladové nabídky CanoCar" />
            <figcaption>Aktuálně nejžádanější kus z haly na Olomoucké.</figcaption>
          </figure>

          <ul className="cc-list">
            {stock.map((s) => (
              <li key={s.code} className="cc-row">
                <span className="cc-row-code" aria-hidden="true">{s.code}</span>
                <div className="cc-row-main">
                  <p className="cc-row-tag">{s.tag}</p>
                  <h3>{s.model}</h3>
                  <p className="cc-row-body">{s.body}</p>
                  <p className="cc-row-note">{s.note}</p>
                </div>
                <span className="cc-row-price">{s.price}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="cc-about" id="sluzby" aria-labelledby="about-h">
        <div className="cc-about-grid">
          <div className="cc-about-left">
            <p className="cc-eyebrow">Co u nás vyřídíte</p>
            <h2 id="about-h">Nejen prodej. Celá péče o auto na Olomoucké.</h2>
            <img
              className="cc-about-img"
              src="/section-2.webp"
              alt="Servisní zázemí a nabídka CanoCar v Brně"
            />
          </div>

          <ol className="cc-services" id="onas">
            {services.map((v, i) => (
              <li key={v.k} style={{ "--i": i } as CSSProperties}>
                <p className="cc-serv-k">{v.k}</p>
                <h3>{v.t}</h3>
                <p>{v.d}</p>
              </li>
            ))}
            <li className="cc-quote">
              <blockquote>
                „Prodej vozu je spolupráce mezi zákazníkem a prodejcem na samém začátku —
                naším úkolem je rozvíjet ji ke spokojenosti zákazníka.“
              </blockquote>
              <p className="cc-quote-src">CanoCar, s.r.o. · Suzuki v Brně od roku 1994</p>
            </li>
          </ol>
        </div>
      </section>
    </main>
  );
}
