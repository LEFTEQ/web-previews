const znacky = [
  {
    name: "TONI DRESS",
    origin: "Německo",
    desc: "Precizní střihy kalhot a sukní. Padnou i tam, kde konfekce běžně selhává.",
  },
  {
    name: "OLSEN MODE",
    origin: "Německo",
    desc: "Kolekce pro každý den — pletené kousky, halenky a saka v aktuálních barvách sezóny.",
  },
  {
    name: "TRAMONTANA",
    origin: "Nizozemsko",
    desc: "Uvolněná dámská móda s charakterem. Vrstvení, přírodní materiály, snadné kombinace.",
  },
];

const sluzby = [
  {
    stitch: "Výběr",
    title: "Poradíme se stylem, ne katalogem",
    text:
      "Řekněte nám, kam jdete — svatba, práce, golfové odpoledne — a projdeme prodejnu spolu. Známe každý kus na věšáku a víme, komu bude slušet. Nikdy vám neprodáme něco, co vám nesedí.",
  },
  {
    stitch: "Úprava",
    title: "Každý model upravíme na míru",
    text:
      "Jsme původně krejčovská firma — zkrácení, zúžení v pase, posazení ramen. Vybraný kus odchází z prodejny tak, jako by byl šitý přímo na vás. Úpravy jsou u nás samozřejmost, ne příplatek navíc.",
  },
  {
    stitch: "Káva",
    title: "Zkoušení bez spěchu, s kávou v ruce",
    text:
      "Jmenujeme se FASHION CAFÉ z dobrého důvodu. Posaďte se, dáme vám výbornou kávu a šaty přineseme ke stolu. Sobota patří jen vám — otevíráme na objednání, prodejna je celá vaše.",
  },
];

export default function Page() {
  return (
    <main className="mk">
      {/* ===== HERO ===== */}
      <section className="mk-hero" aria-label="MODE'S KEY — dámská móda a krejčovské úpravy v Liberci">
        <header className="mk-topbar">
          <div className="mk-wordmark" aria-label="MODE'S KEY">
            MODE<span className="mk-apos">’</span>S&nbsp;KEY
          </div>
          <p className="mk-topbar-note">
            Moskevská 637/6, Liberec · Po–Pá 10–18
          </p>
        </header>

        <div className="mk-hero-body">
          <p className="mk-eyebrow">
            <span className="mk-eyebrow-line" aria-hidden="true"></span>
            Krejčovství &amp; dámská móda od roku 1990
          </p>

          <h1 className="mk-hero-title">
            <span className="mk-hero-row mk-hero-row-1">Móda</span>
            <span className="mk-hero-row mk-hero-row-2">
              je <em>pocit</em>
            </span>
            <span className="mk-hero-row mk-hero-row-3">
              — a my ho <span className="mk-underline">ušijeme</span> na míru.
            </span>
          </h1>

          <p className="mk-hero-lead">
            FASHION CAFÉ v centru Liberce: butik s evropskými značkami, kde vám
            každý vybraný kus upravíme přímo na postavu. A ke zkoušení dostanete
            výbornou kávu.
          </p>

          <div className="mk-hero-cta">
            <a className="mk-btn" href="tel:+420775111014">
              Zavolat do prodejny
            </a>
            <a className="mk-btn mk-btn-ghost" href="#znacky">
              Prohlédnout značky
            </a>
          </div>
        </div>

        {/* signature: krejčovský steh běžící přes hero */}
        <svg
          className="mk-stitch-run"
          viewBox="0 0 1200 90"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            className="mk-stitch-path"
            d="M0,60 C150,15 280,80 420,45 C560,10 690,75 830,40 C960,10 1090,70 1200,35"
            fill="none"
          />
        </svg>

        <div className="mk-hero-tag">
          <span className="mk-tag-hole" aria-hidden="true"></span>
          <span className="mk-tag-text">FASHION CAFÉ · Liberec</span>
        </div>
      </section>

      {/* ===== SLUŽBY ===== */}
      <section className="mk-section mk-sluzby" aria-labelledby="sluzby-h">
        <div className="mk-section-head">
          <p className="mk-eyebrow">
            <span className="mk-eyebrow-line" aria-hidden="true"></span>
            Jak to u nás chodí
          </p>
          <h2 id="sluzby-h" className="mk-h2">
            Butik, kde se pořád ještě šije
          </h2>
        </div>

        <ol className="mk-sluzby-list">
          {sluzby.map((s) => (
            <li key={s.stitch} className="mk-sluzba">
              <span className="mk-sluzba-label">{s.stitch}</span>
              <h3 className="mk-h3">{s.title}</h3>
              <p className="mk-body">{s.text}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* ===== ZNAČKY + DŮVĚRA ===== */}
      <section className="mk-section mk-znacky" id="znacky" aria-labelledby="znacky-h">
        <div className="mk-section-head">
          <p className="mk-eyebrow mk-eyebrow-light">
            <span className="mk-eyebrow-line" aria-hidden="true"></span>
            Značky na věšáku
          </p>
          <h2 id="znacky-h" className="mk-h2">
            Evropská móda, kterou si osaháte
          </h2>
          <p className="mk-body mk-znacky-lead">
            Žádné objednávání naslepo. Všechno máme fyzicky v prodejně — látku si
            osaháte, střih vyzkoušíte a my doladíme detaily.
          </p>
        </div>

        <ul className="mk-znacky-grid">
          {znacky.map((z) => (
            <li key={z.name} className="mk-znacka">
              <span className="mk-znacka-origin">{z.origin}</span>
              <h3 className="mk-znacka-name">{z.name}</h3>
              <p className="mk-body">{z.desc}</p>
            </li>
          ))}
        </ul>

        <figure className="mk-quote">
          <blockquote>
            <p>
              „Firma vznikla v roce 1990 jako krejčovská dílna — šili jsme
              malosériové kolekce i firemní oděvy. Ta řemeslná ruka nám zůstala:
              dodnes u nás žádný kus neodchází, dokud nesedí.“
            </p>
          </blockquote>
          <figcaption>
            <strong>Jitka Weiss</strong>
            <span>majitelka, MODE’S KEY spol. s r. o.</span>
          </figcaption>
        </figure>

        <dl className="mk-facts">
          <div className="mk-fact">
            <dt>Na trhu</dt>
            <dd>od roku 1990</dd>
          </div>
          <div className="mk-fact">
            <dt>Najdete nás</dt>
            <dd>Moskevská 637/6, Liberec</dd>
          </div>
          <div className="mk-fact">
            <dt>Otevřeno</dt>
            <dd>Po–Pá 10–18, So na objednání</dd>
          </div>
        </dl>
      </section>
    </main>
  );
}
