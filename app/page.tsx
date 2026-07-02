export default function Page() {
  const strojirna = [
    {
      title: "Výroba pekařských zařízení",
      desc: "Pece, kynárny, dopravníky a nerezové díly pro pekárny. Vyrábíme na míru podle provozu — od jednoho stroje po kompletní linku.",
      tag: "NEREZ · OCEL",
    },
    {
      title: "Ocelové konstrukce",
      desc: "Výroba a montáž ocelových konstrukcí hal, přístřešků, schodišť a plošin. Svařování s dokumentací, montáž vlastní partou.",
      tag: "SVAŘOVÁNÍ · MONTÁŽ",
    },
    {
      title: "Zámečnictví a kovoobrábění",
      desc: "Soustružení, frézování, zámečnické práce a opravy. Kusová i malosériová výroba podle výkresu nebo vzorku.",
      tag: "KUSOVKA · SÉRIE",
    },
  ];

  const stavba = [
    {
      title: "Rodinné a bytové domy",
      desc: "Stavíme na klíč i po etapách. Jedna parta od základů po střechu — víte, kdo vám na stavbě pracuje.",
      tag: "NA KLÍČ",
    },
    {
      title: "Základové desky a hrubé stavby",
      desc: "Přesně vylitá deska nebo hrubá stavba připravená k dokončení svépomocí. Termín a cenu držíme písemně.",
      tag: "ZÁKLADY · HRUBÁ STAVBA",
    },
    {
      title: "Projekty a stavební materiál",
      desc: "Projektová činnost ve výstavbě a prodej stavebního materiálu. Poradíme, spočítáme kubatury, dovezeme na stavbu.",
      tag: "PROJEKCE · MATERIÁL",
    },
  ];

  const duvera = [
    {
      num: "30+",
      label: "let řemesla",
      text: "Firmu vedou lidé, kteří sami stáli u svářečky i na lešení. Ne obchodníci — řemeslníci.",
    },
    {
      num: "2",
      label: "dílny pod jednou střechou",
      text: "Strojírna a stavební divize si vzájemně kryjí záda. Ocelovou konstrukci pro vaši stavbu vyrobíme sami.",
    },
    {
      num: "1",
      label: "parta od začátku do konce",
      text: "Žádné přeprodávání zakázek subdodavatelům. Kdo si s vámi plácne, ten stavbu i dokončí.",
    },
  ];

  return (
    <main className="ths">
      {/* ================= HERO ================= */}
      <section className="hero" aria-label="THS Servis Pardubice — úvod">
        <div className="hero-grid" aria-hidden="true"></div>

        <header className="hero-top">
          <div className="wordmark">
            <span className="wordmark-ths">THS</span>
            <span className="wordmark-rest">servis&nbsp;Pardubice</span>
          </div>
          <a className="hero-tel" href="tel:+420466123456">
            <span className="hero-tel-label">Zavolat</span> 466 123 456
          </a>
        </header>

        <div className="hero-body">
          <p className="hero-eyebrow">Strojírna &amp; stavební firma · Pardubice</p>
          <h1 className="hero-title">
            <span className="hero-line hero-line-1">Ocel</span>
            <span className="hero-line hero-line-2">
              <span className="hero-amp" aria-hidden="true">+</span>beton
            </span>
            <span className="hero-line hero-line-3">pod jednou<br />střechou.</span>
          </h1>
          <p className="hero-sub">
            Vyrábíme pekařská zařízení a ocelové konstrukce. Stavíme rodinné a
            bytové domy. Dvě řemesla, jedna firma z Pardubic — od roku, kdy se
            ještě podávala ruka.
          </p>
          <div className="hero-cta">
            <a className="btn btn-solid" href="tel:+420466123456">Zavolat do dílny</a>
            <a className="btn btn-ghost" href="mailto:info@ths-pardubice.cz">Napsat poptávku</a>
          </div>
        </div>

        {/* Signature: I-profil / nosník napříč hero */}
        <div className="beam" aria-hidden="true">
          <div className="beam-flange beam-flange-top"></div>
          <div className="beam-web">
            <span>OCELOVÉ KONSTRUKCE</span>
            <span className="beam-rivet"></span>
            <span>PEKAŘSKÁ ZAŘÍZENÍ</span>
            <span className="beam-rivet"></span>
            <span>ZÁKLADOVÉ DESKY</span>
            <span className="beam-rivet"></span>
            <span>HRUBÉ STAVBY</span>
            <span className="beam-rivet"></span>
            <span>KOVOOBRÁBĚNÍ</span>
          </div>
          <div className="beam-flange beam-flange-bottom"></div>
        </div>
      </section>

      {/* ================= SEKCE: DVĚ DÍLNY ================= */}
      <section className="work" aria-labelledby="work-title">
        <div className="work-head">
          <h2 id="work-title">Co pro vás uděláme</h2>
          <p>
            THS je jedna firma se dvěma dílnami. Kovo vyrábí, stavba staví —
            a když je potřeba, potkají se na vaší zakázce.
          </p>
        </div>

        <div className="work-cols">
          <div className="work-col work-col-steel">
            <h3 className="work-col-title">
              <span className="work-col-mark" aria-hidden="true">▮</span>
              Kovovýroba
            </h3>
            <ul className="work-list">
              {strojirna.map((s) => (
                <li key={s.title} className="work-item">
                  <p className="work-tag">{s.tag}</p>
                  <h4>{s.title}</h4>
                  <p className="work-desc">{s.desc}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className="work-col work-col-build">
            <h3 className="work-col-title">
              <span className="work-col-mark work-col-mark-build" aria-hidden="true">▮</span>
              Stavební práce
            </h3>
            <ul className="work-list">
              {stavba.map((s) => (
                <li key={s.title} className="work-item">
                  <p className="work-tag work-tag-build">{s.tag}</p>
                  <h4>{s.title}</h4>
                  <p className="work-desc">{s.desc}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ================= SEKCE: DŮVĚRA ================= */}
      <section className="trust" aria-labelledby="trust-title">
        <div className="trust-inner">
          <div className="trust-head">
            <h2 id="trust-title">Proč lidé z Pardubicka volají zrovna nám</h2>
            <p>
              Nejsme katalogová firma. Dílnu i stavby najdete v Pardubicích a
              domluvíte se přímo s tím, kdo bude práci dělat.
            </p>
          </div>

          <ul className="trust-list">
            {duvera.map((d) => (
              <li key={d.label} className="trust-item">
                <p className="trust-num">{d.num}</p>
                <h3 className="trust-label">{d.label}</h3>
                <p className="trust-text">{d.text}</p>
              </li>
            ))}
          </ul>

          <blockquote className="trust-quote">
            <p>
              „Základovou desku nám udělali na den přesně a schodiště do patra
              přivezli rovnou z vlastní dílny. Jedno telefonní číslo na obojí —
              to jinde nemají.“
            </p>
            <cite>— rodina Vondroušových, novostavba ve Starých Čívicích</cite>
          </blockquote>
        </div>
      </section>
    </main>
  );
}
