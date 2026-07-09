export default function Page() {
  const kroky = [
    {
      c: "01",
      t: "Zaměření a rozpočet",
      d: "Přijedu k vám do bytu nebo na stavbu v Liberci a okolí, změřím prostor a do dvou dnů máte přesnou cenu za metr čtvereční — bez schovaných příplatků."
    },
    {
      c: "02",
      t: "Rošt a konstrukce",
      d: "Postavím nosný rošt z pozinkovaných CW/UW profilů, ukotvím ho a vyrovnám do roviny. Tady se rozhoduje, jestli bude stěna po letech rovná, nebo popraskaná."
    },
    {
      c: "03",
      t: "Opláštění a izolace",
      d: "Přišroubuji desky — do koupelny zelený impregnovaný sádrokarton, ke krbu protipožární růžový, mezi pokoje minerální vatu na akustiku."
    },
    {
      c: "04",
      t: "Tmelení a broušení",
      d: "Vyztužím spáry páskou, přetmelím ve třech vrstvách a přebrousím do hladka. Stěnu předám připravenou rovnou pod malbu — bez dodělávek."
    }
  ];

  const reference = [
    {
      misto: "Rodinný dům, Liberec — Vratislavice",
      text: "Zateplení podkroví a sádrokartonový strop se skrytým osvětlením. Rovina jako podle vodováhy, hotovo na den přesně."
    },
    {
      misto: "Byt v panelu, Liberec — Rochlice",
      text: "Předstěna v koupelně s revizními dvířky a akustická příčka mezi ložnicí a obývákem. Sousedy už přes zeď neslyší."
    },
    {
      misto: "Provozovna, Jablonec nad Nisou",
      text: "Podhled s protipožární odolností a zabudovanými bodovkami. Vše doloženo atesty pro kolaudaci."
    }
  ];

  return (
    <main className="sd">
      <header className="sd-nav">
        <a className="sd-mark" href="#top" aria-label="Anděl Tomáš — sádrokartonář Liberec">
          <span className="sd-mark-name">Anděl<span className="sd-mark-dot">.</span>Tomáš</span>
          <span className="sd-mark-sub">sádrokartonář · Liberec</span>
        </a>
        <a className="sd-tel" href="tel:+420721875286">721&nbsp;875&nbsp;286</a>
      </header>

      <section className="sd-hero" id="top">
        <div className="sd-hero-grid">
          <div className="sd-hero-copy">
            <p className="sd-eyebrow">Suchá výstavba &amp; sádrokarton</p>
            <h1 className="sd-h1">
              Rovná stěna<br />
              <span className="sd-h1-accent">do posledního milimetru.</span>
            </h1>
            <p className="sd-lead">
              Stavím příčky, podhledy a předstěny v Liberci a okolí. Tam,
              kde jiní nechají spáru popraskat, já tmelím ve třech vrstvách
              a brousím do hladka — abyste za rok nevolali reklamaci.
            </p>
            <div className="sd-hero-cta">
              <a className="sd-btn" href="tel:+420721875286">Zavolat a domluvit zaměření</a>
              <span className="sd-hero-note">Cena za m² do dvou dnů</span>
            </div>
          </div>
          <figure className="sd-hero-fig">
            <img src="/hero.webp" alt="Rozestavěná sádrokartonová příčka s pozinkovaným roštem před opláštěním" className="sd-hero-img" />
            <figcaption className="sd-hero-spec">
              <span className="sd-spec-num">±1&nbsp;mm</span>
              <span className="sd-spec-lbl">tolerance roviny na desce</span>
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="sd-steps" aria-labelledby="postup">
        <div className="sd-sec-head">
          <p className="sd-eyebrow">Jak to u vás proběhne</p>
          <h2 id="postup" className="sd-h2">Čtyři kroky od holé zdi<br />po stěnu pod malbu</h2>
        </div>
        <ol className="sd-step-list">
          {kroky.map((k) => (
            <li className="sd-step" key={k.c}>
              <span className="sd-step-num" aria-hidden="true">{k.c}</span>
              <div className="sd-step-body">
                <h3 className="sd-step-t">{k.t}</h3>
                <p className="sd-step-d">{k.d}</p>
              </div>
            </li>
          ))}
        </ol>
        <figure className="sd-band">
          <img src="/section-1.webp" alt="Detail tmelení spár mezi sádrokartonovými deskami s výztužnou páskou" className="sd-band-img" />
        </figure>
      </section>

      <section className="sd-trust" aria-labelledby="reference">
        <div className="sd-trust-grid">
          <figure className="sd-trust-fig">
            <img src="/section-2.webp" alt="Hotový sádrokartonový podhled se skrytým osvětlením v obytné místnosti" className="sd-trust-img" />
          </figure>
          <div className="sd-trust-copy">
            <p className="sd-eyebrow">O mně &amp; reference</p>
            <h2 id="reference" className="sd-h2">Řemeslo, které po sobě<br />nechává čistý úklid</h2>
            <p className="sd-trust-lead">
              Jmenuji se Tomáš Anděl a sádrokartonu se věnuji naplno. Pracuji
              sám nebo v malé partě, takže s vámi celou dobu jednám já — ne
              dispečink. Vozím vlastní nářadí i vysavač a stavbu předávám
              zametenou.
            </p>
            <dl className="sd-facts">
              <div className="sd-fact"><dt>Kde stavím</dt><dd>Liberec, Jablonec a okolí do 30&nbsp;km</dd></div>
              <div className="sd-fact"><dt>Materiál</dt><dd>Knauf, Rigips — desky vozím s sebou</dd></div>
              <div className="sd-fact"><dt>Termín</dt><dd>Menší zakázky zpravidla do týdne</dd></div>
            </dl>
          </div>
        </div>

        <ul className="sd-refs">
          {reference.map((r) => (
            <li className="sd-ref" key={r.misto}>
              <p className="sd-ref-place">{r.misto}</p>
              <p className="sd-ref-text">{r.text}</p>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
