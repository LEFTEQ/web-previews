import type { CSSProperties } from "react";

export default function Page() {
  const inverters = [
    {
      code: "01",
      title: "Střídače Huawei",
      sub: "Residenční i C&I",
      body: "Od domovní instalace po komerční halu. Nastavíme výkon podle vaší spotřeby a sítě — od jednofáze po velké C&I střídače.",
    },
    {
      code: "02",
      title: "Bateriová úložiště",
      sub: "Huawei LUNA",
      body: "Uložíte si polední přebytek na večer. Modulární kapacita, kterou rozšíříte, až budete chtít víc.",
    },
    {
      code: "03",
      title: "Konstrukce Corab",
      sub: "Na střechu i na pole",
      body: "Nosné systémy pro šikmé i ploché střechy. Odzkoušené na jihočeské větry i sníh.",
    },
    {
      code: "04",
      title: "Nabíječky Ekoenergetyka",
      sub: "AC i DC wallboxy",
      body: "Dobíjejte auto ze slunce. EV nabíječky napojené na váš vlastní energetický systém.",
    },
    {
      code: "05",
      title: "Tepelná čerpadla ERA",
      sub: "Vytápění z elektřiny",
      body: "Spojíme fotovoltaiku s topením. Čerpadlo ERA jede z toho, co vyrobíte na střeše.",
    },
    {
      code: "06",
      title: "EMS řízení energie",
      sub: "Chytrá centrála",
      body: "Jeden systém, který rozhoduje, kam wattová hodina půjde — do baterie, do auta, nebo do tepla.",
    },
  ];

  return (
    <main className="pm">
      <header className="pm-nav" aria-label="Hlavní navigace">
        <a className="pm-logo" href="#" aria-label="Photomate, distribuce fotovoltaiky">
          <span className="pm-logo-mark" aria-hidden="true">
            <span className="pm-logo-dot" />
          </span>
          <span className="pm-logo-word">photo<span className="pm-logo-accent">mate</span></span>
        </a>
        <nav className="pm-links">
          <a href="#produkty">Produkty</a>
          <a href="#znacka">O nás</a>
          <a href="#produkty" className="pm-nav-cta">Techsupport</a>
        </nav>
      </header>

      <section className="pm-hero" aria-labelledby="pm-hero-title">
        <img className="pm-hero-img" src="/hero.webp" alt="Fotovoltaické panely a měniče Photomate v provozu" />
        <div className="pm-hero-scrim" aria-hidden="true" />
        <div className="pm-hero-grid" aria-hidden="true" />

        <div className="pm-hero-inner">
          <p className="pm-eyebrow">Distributor fotovoltaiky &middot; České Budějovice</p>
          <h1 id="pm-hero-title" className="pm-hero-title">
            Slunce nad jihem Čech<br />
            <span className="pm-hero-em">měníme na watty,</span><br />
            které vám zůstanou doma.
          </h1>
          <p className="pm-hero-lead">
            Dodáváme montážním firmám měniče Huawei, baterie, konstrukce Corab i nabíječky —
            skladem v Budějovicích, s technickou podporou v češtině.
          </p>
          <div className="pm-hero-actions">
            <a className="pm-btn" href="#produkty">Prohlédnout sortiment</a>
            <a className="pm-btn pm-btn-ghost" href="mailto:info@photomate.eu">Napsat na info@photomate.eu</a>
          </div>
        </div>

        <dl className="pm-hero-strip" aria-label="Čím se zabýváme">
          <div><dt>Skladem v ČB</dt><dd>Střídače &amp; baterie</dd></div>
          <div><dt>Podpora</dt><dd>Helpdesk česky</dd></div>
          <div><dt>Značky</dt><dd>Huawei &middot; Corab &middot; ERA</dd></div>
        </dl>
      </section>

      <section id="produkty" className="pm-products" aria-labelledby="pm-products-title">
        <div className="pm-section-head">
          <p className="pm-eyebrow pm-eyebrow-dark">Sortiment</p>
          <h2 id="pm-products-title" className="pm-h2">
            Celá cesta jednoho paprsku — od panelu až po zásuvku vašeho auta.
          </h2>
          <p className="pm-section-lead">
            Neprodáváme jednotlivé krabice. Skládáme systém, kde spolu měnič, baterie, čerpadlo
            i nabíječka mluví přes jedno řízení.
          </p>
        </div>

        <ol className="pm-cards">
          {inverters.map((it) => (
            <li key={it.code} className="pm-card">
              <span className="pm-card-code" aria-hidden="true">{it.code}</span>
              <div className="pm-card-body">
                <p className="pm-card-sub">{it.sub}</p>
                <h3 className="pm-card-title">{it.title}</h3>
                <p className="pm-card-text">{it.body}</p>
              </div>
            </li>
          ))}
        </ol>

        <figure className="pm-figure">
          <img src="/section-1.webp" alt="Detail instalace fotovoltaického systému a měničů Huawei" />
          <figcaption>Sestavu ladíme tak, aby energie zůstala co nejdéle u vás doma.</figcaption>
        </figure>
      </section>

      <section id="znacka" className="pm-about" aria-labelledby="pm-about-title">
        <div className="pm-about-media">
          <img src="/section-2.webp" alt="Tým Photomate a sklad fotovoltaických komponentů v Českých Budějovicích" />
        </div>
        <div className="pm-about-copy">
          <p className="pm-eyebrow pm-eyebrow-dark">Kdo za tím stojí</p>
          <h2 id="pm-about-title" className="pm-h2">
            Jihočeský sklad, který zvedne telefon.
          </h2>
          <p className="pm-about-text">
            Photomate je distributor fotovoltaiky z Prokišovy ulice v Českých Budějovicích.
            Montážním firmám držíme sklad Huawei měničů a baterií tak, aby stavba nestála kvůli
            chybějícímu dílu — a když se něco zadrhne na střeše, náš helpdesk to řeší s vámi
            v reálném čase.
          </p>
          <ul className="pm-facts">
            <li>
              <span className="pm-fact-label">Adresa</span>
              <span className="pm-fact-val">Prokišova 356/7, 370&nbsp;01 České Budějovice</span>
            </li>
            <li>
              <span className="pm-fact-label">Techsupport</span>
              <span className="pm-fact-val">Helpdesk &middot; FusionSolar &middot; ERA Control</span>
            </li>
            <li>
              <span className="pm-fact-label">Pro koho</span>
              <span className="pm-fact-val">Montážní firmy, elektrikáři, partneři</span>
            </li>
          </ul>
          <blockquote className="pm-quote">
            &bdquo;Objednáno ráno, na střeše odpoledne. Když se ozve reklamace, mají v Budějovicích
            náhradní kus dřív, než stačíme dojet.&ldquo;
            <cite>— partnerská montážní firma, Českobudějovicko</cite>
          </blockquote>
        </div>
      </section>
    </main>
  );
}
