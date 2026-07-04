import type { CSSProperties } from "react";

export default function Page() {
  const sluzby = [
    {
      radek: "01",
      nazev: "Účetnictví a daňová evidence",
      popis:
        "Vedeme kompletní účetnictví — od kontroly správnosti dokladů až po účetní závěrku. Ve spolupráci s auditorem zajistíme i audit společnosti.",
    },
    {
      radek: "02",
      nazev: "Daňové poradenství",
      popis:
        "Registrovaní daňoví poradci pro daň z příjmů, srážkovou daň, DPH, silniční daň i daň z nemovitostí. Zastoupíme vás před správcem daně a odložíme přiznání k 30. 6.",
    },
    {
      radek: "03",
      nazev: "Mzdová agenda",
      popis:
        "Vedeme mzdovou evidenci, zpracujeme mzdy a zastoupíme vás u zdravotních pojišťoven i na správě sociálního zabezpečení.",
    },
    {
      radek: "04",
      nazev: "Ekonomické poradenství",
      popis:
        "Od podnikatelského záměru přes optimalizaci financování a tržní ocenění firmy až po finanční a ekonomické analýzy.",
    },
  ];

  const pilire = [
    {
      znak: "§",
      nazev: "Odbornost",
      popis:
        "Tým daňových poradců registrovaných v Komoře daňových poradců. Účetní pracují pod dohledem certifikovaného bilančního účetního.",
    },
    {
      znak: "○",
      nazev: "Diskrétnost",
      popis:
        "Mlčenlivost bereme jako samozřejmost. Firmu tvoří jen společníci a jejich nejbližší rodina — a s vámi jedná stále jedna a tatáž osoba.",
    },
    {
      znak: "↺",
      nazev: "Ručení za rizika",
      popis:
        "Za případné škody ručíme vlastním majetkem a jsme proti nim pojištěni u Kooperativy pojišťovny, a.s.",
    },
  ];

  const reference = [
    {
      text:
        "Ceníme si zejména osobního přístupu, spolehlivosti a ochoty kdykoliv poradit v jakékoliv oblasti účetnictví.",
      firma: "Outdoor Liberec s.r.o.",
    },
    {
      text:
        "Spolehliví profíci za normální ceny. Vždy pohotoví, vždy na telefonu. Tři daňoví poradci zvládnou i ta nejsložitější zadání. Normální lidský přístup.",
      firma: "HAVOS s.r.o.",
    },
    {
      text:
        "Míra spokojenosti je přímo úměrná délce spolupráce. S T & F Consulting spolupracujeme více než 20 let.",
      firma: "DINO Toys, s.r.o.",
    },
  ];

  return (
    <main className="tfc">
      <header className="tfc-topbar">
        <a className="tfc-wordmark" href="#top" aria-label="T &amp; F Consulting, domů">
          <span className="tfc-amp">T&amp;F</span>
          <span className="tfc-word">Consulting</span>
          <span className="tfc-loc">Liberec</span>
        </a>
        <nav className="tfc-nav" aria-label="Hlavní navigace">
          <a href="#sluzby">Služby</a>
          <a href="#duvera">Proč my</a>
          <a className="tfc-nav-tel" href="tel:+420736629626">736 629 626</a>
        </nav>
      </header>

      <section className="tfc-hero" id="top">
        <div className="tfc-hero-grid">
          <div className="tfc-hero-text">
            <p className="tfc-eyebrow">Účetní a daňová kancelář · Starý Harcov, Liberec</p>
            <h1 className="tfc-hero-h1">
              Každá čárka<br />
              <span className="tfc-hero-em">sedí.</span>
            </h1>
            <p className="tfc-hero-lead">
              Rodinná kancelář, kde vaše účetnictví vede jeden stálý člověk —
              tři daňoví poradci, dvacet let praxe a diskrétnost, kterou ocení
              ten, kdo někdy měl podklady pozdě nebo s chybou.
            </p>
            <div className="tfc-hero-actions">
              <a className="tfc-btn" href="tel:+420736629626">Zavolat 736 629 626</a>
              <a className="tfc-btn-ghost" href="#sluzby">Co pro vás uděláme</a>
            </div>
            <dl className="tfc-ledger">
              <div>
                <dt>V oboru od</dt>
                <dd>2003</dd>
              </div>
              <div>
                <dt>Daňoví poradci</dt>
                <dd>3</dd>
              </div>
              <div>
                <dt>Nejdelší klient</dt>
                <dd>20+ let</dd>
              </div>
            </dl>
          </div>
          <figure className="tfc-hero-fig">
            <img
              src="/hero.webp"
              alt="Pracovní stůl účetní kanceláře T &amp; F Consulting v Liberci"
              className="tfc-hero-img"
              width={720}
              height={900}
            />
            <figcaption className="tfc-stamp">
              <span>T &amp; F CONSULTING, s.r.o.</span>
              <span>Liberec XV — Starý Harcov</span>
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="tfc-sluzby" id="sluzby" aria-labelledby="sluzby-h">
        <div className="tfc-sec-head">
          <p className="tfc-eyebrow">Naše služby</p>
          <h2 id="sluzby-h">
            Starosti se mzdovou, účetní a daňovou agendou nechte na nás.
          </h2>
          <p className="tfc-sec-sub">
            Vy se soustřeďte na své podnikání. Komplexní služby na jedné adrese —
            účtárna i daňová poradna pod jednou střechou.
          </p>
        </div>
        <ol className="tfc-list">
          {sluzby.map((s) => (
            <li className="tfc-row" key={s.radek}>
              <span className="tfc-row-num" aria-hidden="true">{s.radek}</span>
              <div className="tfc-row-body">
                <h3>{s.nazev}</h3>
                <p>{s.popis}</p>
              </div>
            </li>
          ))}
        </ol>
        <figure className="tfc-banner">
          <img
            src="/section-1.webp"
            alt="Detail účetních dokladů a výkazů zpracovávaných v kanceláři"
            width={1200}
            height={520}
          />
        </figure>
      </section>

      <section className="tfc-duvera" id="duvera" aria-labelledby="duvera-h">
        <div className="tfc-duvera-grid">
          <div className="tfc-duvera-intro">
            <p className="tfc-eyebrow">Proč s námi</p>
            <h2 id="duvera-h">
              Rodinná firma, kde vás zná jeden člověk — a ten u vás zůstane.
            </h2>
            <p>
              Jsme rychlí a přesní. S námi nebudete mít podklady pozdě ani s
              chybami. Cílem je spokojený klient, samozřejmostí absolutní
              diskrétnost a profesionální přístup.
            </p>
            <img
              src="/section-2.webp"
              alt="Prostředí kanceláře T &amp; F Consulting v libereckém Starém Harcově"
              className="tfc-duvera-img"
              width={640}
              height={480}
            />
          </div>
          <div className="tfc-pilire">
            {pilire.map((p) => (
              <article className="tfc-pilir" key={p.nazev}>
                <span className="tfc-pilir-znak" aria-hidden="true">{p.znak}</span>
                <h3>{p.nazev}</h3>
                <p>{p.popis}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="tfc-refs">
          <p className="tfc-eyebrow tfc-refs-eyebrow">Co říkají klienti</p>
          <div className="tfc-refs-grid">
            {reference.map((r) => (
              <figure className="tfc-ref" key={r.firma}>
                <blockquote>{r.text}</blockquote>
                <figcaption>{r.firma}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
