export default function Page() {
  const kurzy = [
    {
      jazyk: "Angličtina",
      pozdrav: "Hello",
      popis:
        "Od úplných začátků po přípravu na Cambridge zkoušky FCE a CAE. Konverzační skupiny s rodilými mluvčími každou středu.",
      urovne: "A1–C1",
      cena: "od 3 200 Kč / semestr",
    },
    {
      jazyk: "Němčina",
      pozdrav: "Hallo",
      popis:
        "Kurzy pro práci i studium v Rakousku a Německu. Připravíme vás na Goethe-Zertifikat i pohovor v němčině.",
      urovne: "A1–B2",
      cena: "od 3 200 Kč / semestr",
    },
    {
      jazyk: "Španělština",
      pozdrav: "Hola",
      popis:
        "Malé skupiny do 8 lidí, důraz na mluvení od první lekce. Letní intenzivní týden před dovolenou.",
      urovne: "A1–B1",
      cena: "od 2 900 Kč / semestr",
    },
    {
      jazyk: "Čeština pro cizince",
      pozdrav: "Ahoj",
      popis:
        "Czech for foreigners — practical Czech for everyday life and work in Olomouc. Individual or small groups.",
      urovne: "A0–B1",
      cena: "od 350 Kč / lekce",
    },
  ];

  const kroky = [
    {
      krok: "Rozřazení",
      text: "Přijdete na 20 minut, popovídáme si a zjistíme, kde přesně jste. Žádný test s křížky — normální rozhovor.",
    },
    {
      krok: "Skupina na míru",
      text: "Maximálně 8 lidí ve skupině, podobná úroveň, podobné tempo. Nikdo se neveze, nikdo se nenudí.",
    },
    {
      krok: "Mluvíte od první lekce",
      text: "Gramatiku učíme skrz mluvení, ne naopak. Po semestru se domluvíte, ne jen vyplníte cvičení.",
    },
  ];

  const reference = [
    {
      text: "Po dvou semestrech angličtiny jsem prošla pohovorem v anglicky mluvící firmě. Lektorka Jana mě donutila mluvit i když jsem se styděla — a přesně to jsem potřebovala.",
      autor: "Markéta H.",
      role: "kurz angličtiny B1 → B2",
    },
    {
      text: "Syn chodil na doučování němčiny před maturitou. Z čtyřky se dostal na dvojku a hlavně přestal mít z němčiny hrůzu.",
      autor: "Petr S.",
      role: "doučování pro středoškoláky",
    },
    {
      text: "I moved to Olomouc for work and after one year of Czech lessons I can handle the doctor, the office and small talk with neighbours. Děkuju!",
      autor: "Sofia R.",
      role: "čeština pro cizince",
    },
  ];

  return (
    <main className="ast">
      {/* ===== HERO ===== */}
      <header className="hero">
        <nav className="hero-nav" aria-label="Hlavní navigace">
          <span className="wordmark">
            ASTERIA<span className="wordmark-star" aria-hidden="true">*</span>
            <span className="wordmark-sub">vzdělávací centrum · Olomouc</span>
          </span>
          <a className="nav-tel" href="tel:+420603111111">
            +420 603 111 111
          </a>
        </nav>

        <div className="hero-inner">
          <p className="hero-eyebrow">Jazyková škola v centru Olomouce</p>

          <h1 className="hero-title">
            <span className="hero-line hero-line-1">Hello.</span>
            <span className="hero-line hero-line-2">Hallo.</span>
            <span className="hero-line hero-line-3">Hola.</span>
            <span className="hero-line hero-line-4">
              Ahoj<span className="hero-dot">.</span>
            </span>
          </h1>

          <p className="hero-lead">
            Čtyři jazyky, skupiny do osmi lidí a lektoři, kteří vás nechají
            mluvit od první lekce. Semestr začíná v září a v únoru —
            rozřazení je zdarma a bez závazku.
          </p>

          <div className="hero-actions">
            <a className="btn btn-solid" href="tel:+420603111111">
              Domluvit rozřazení zdarma
            </a>
            <a className="btn btn-ghost" href="#kurzy">
              Prohlédnout kurzy
            </a>
          </div>

          <dl className="hero-facts">
            <div>
              <dt>Ve skupině</dt>
              <dd>max. 8 lidí</dd>
            </div>
            <div>
              <dt>Lekce trvá</dt>
              <dd>90 minut</dd>
            </div>
            <div>
              <dt>Najdete nás</dt>
              <dd>5 min od Horního náměstí</dd>
            </div>
          </dl>
        </div>

        {/* signature: souhvězdí — Asteria = hvězda; body = jazyky, linky = cesta učení */}
        <svg
          className="constellation"
          viewBox="0 0 400 520"
          aria-hidden="true"
          focusable="false"
        >
          <path
            className="c-line"
            d="M60 460 L150 340 L110 220 L230 150 L330 60"
            fill="none"
          />
          <g className="c-stars">
            <circle cx="60" cy="460" r="5" />
            <circle cx="150" cy="340" r="6" />
            <circle cx="110" cy="220" r="5" />
            <circle cx="230" cy="150" r="7" />
            <circle cx="330" cy="60" r="9" className="c-star-main" />
          </g>
          <g className="c-labels">
            <text x="74" y="466">A1</text>
            <text x="164" y="346">A2</text>
            <text x="124" y="226">B1</text>
            <text x="244" y="156">B2</text>
            <text x="290" y="46">C1</text>
          </g>
        </svg>
      </header>

      {/* ===== KURZY ===== */}
      <section className="kurzy" id="kurzy" aria-labelledby="kurzy-h">
        <div className="section-head">
          <h2 id="kurzy-h">Kurzy pro dospělé, studenty i firmy</h2>
          <p>
            Semestr má 17 týdnů, lekce jednou týdně odpoledne nebo večer.
            Učebnice jsou v ceně, první lekci si můžete vyzkoušet nezávazně.
          </p>
        </div>

        <div className="kurzy-grid">
          {kurzy.map((k) => (
            <article className="kurz" key={k.jazyk}>
              <p className="kurz-pozdrav" aria-hidden="true">
                {k.pozdrav}
              </p>
              <h3>{k.jazyk}</h3>
              <p className="kurz-popis">{k.popis}</p>
              <p className="kurz-meta">
                <span className="kurz-urovne">{k.urovne}</span>
                <span>{k.cena}</span>
              </p>
            </article>
          ))}
        </div>

        <p className="kurzy-note">
          Nevíte, jaká úroveň je ta vaše? Přijďte na bezplatné rozřazení —
          za 20 minut to zjistíme spolu.
        </p>
      </section>

      {/* ===== JAK UČÍME + REFERENCE ===== */}
      <section className="duvera" aria-labelledby="duvera-h">
        <div className="section-head section-head-light">
          <h2 id="duvera-h">Jak to u nás vypadá</h2>
          <p>
            Učíme v Olomouci od roku 2011. Většina studentů k nám chodí
            víc než jeden semestr — a to je pro jazykovku ta nejlepší vizitka.
          </p>
        </div>

        <ol className="kroky">
          {kroky.map((k, i) => (
            <li className="krok" key={k.krok}>
              <span className="krok-cislo" aria-hidden="true">
                {i + 1}
              </span>
              <h3>{k.krok}</h3>
              <p>{k.text}</p>
            </li>
          ))}
        </ol>

        <h3 className="ref-title">Co říkají studenti</h3>
        <div className="ref-grid">
          {reference.map((r) => (
            <figure className="ref" key={r.autor}>
              <blockquote>
                <p>„{r.text}“</p>
              </blockquote>
              <figcaption>
                <strong>{r.autor}</strong>
                <span>{r.role}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>
    </main>
  );
}
