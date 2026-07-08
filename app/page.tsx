export default function Page() {
  const materialy = [
    {
      c: "01",
      nadpis: "Hrubá stavba",
      popis: "Cihly, tvárnice a překlady od Wienerberger, Xella (Ytong) a KB BLOK. Máme skladem to, na čem stavba stojí — a přivezeme na paletě přímo na váš pozemek.",
      znacky: ["Wienerberger", "Xella / Ytong", "KB BLOK", "BACHL"]
    },
    {
      c: "02",
      nadpis: "Zateplení a suchá stavba",
      popis: "Izolace Isover, minerální vata, polystyren i sádrokartonové systémy Knauf. Poradíme s tloušťkou, spočítáme spotřebu a nenecháme vás kupovat zbytečně navíc.",
      znacky: ["Isover", "Knauf", "Baumit", "HASIT"]
    },
    {
      c: "03",
      nadpis: "Obklady, dlažby a sanita",
      popis: "Vlastní vzorkovna v Libni — obklady, dlažby, klinker i sanita v jednom místě. Přijďte si sáhnout, než objednáte celou koupelnu.",
      znacky: ["KLINKER", "BEST", "DITON", "TOP TERAMO"]
    },
    {
      c: "04",
      nadpis: "Míchání barev a omítek",
      popis: "Míchací centrum a studio barev Caparol. Namícháme fasádu, stěrku i omítku přesně do vašeho odstínu, tónování na počkání a proškolený personál u toho.",
      znacky: ["Caparol", "WEBER", "ROKOSPOL", "DEN BRAVEN"]
    }
  ];

  const prodejny = [
    {
      nazev: "Libeň",
      adresa: "Voctářova 12/109, Praha 8",
      orientace: "Pod libeňským mostem vedle Kauflandu",
      tel: "+420 608 324 247",
      telHref: "+420608324247",
      po_pa: "6.30–17.00",
      so: "8.00–12.00",
      navic: "Míchací centrum · studio barev · vzorkovna obkladů"
    },
    {
      nazev: "Malešice",
      adresa: "Černokostelecká 2111/131, Praha 10",
      orientace: "Roh Černokostelecké a Dřevčické",
      tel: "+420 777 324 248",
      telHref: "+420777324248",
      po_pa: "6.45–17.00",
      so: "8.00–11.00",
      navic: "Pravidelně zásobený sklad · nakládka hydraulickou rukou"
    }
  ];

  return (
    <main className="sx">
      <header className="sx-hero">
        <img className="sx-hero-img" src="/hero.webp" alt="Skladová plocha stavebnin Stavimex s naloženými paletami stavebního materiálu" />
        <div className="sx-hero-scrim" aria-hidden="true" />
        <div className="sx-hero-inner">
          <div className="sx-brand">
            <span className="sx-brand-mark">STAVIMEX</span>
            <span className="sx-brand-tag">stavebniny&nbsp;Praha</span>
          </div>

          <div className="sx-hero-copy">
            <p className="sx-eyebrow">Libeň &amp; Malešice · dvě prodejny v Praze</p>
            <h1 className="sx-hero-h1">
              Přivezeme<br />
              <span className="sx-hero-accent">celou stavbu</span><br />
              až na pozemek.
            </h1>
            <p className="sx-hero-lede">
              Cihly, izolace, obklady i namíchaná fasáda — naložíme hydraulickou rukou
              a složíme přesně tam, kde stavíte. Otevřeno už od půl sedmé ráno.
            </p>
            <div className="sx-hero-actions">
              <a className="sx-btn sx-btn-primary" href="tel:+420608324247">Zavolat do Libně</a>
              <a className="sx-btn sx-btn-ghost" href="#sortiment">Co vozíme</a>
            </div>
          </div>

          <dl className="sx-hero-facts">
            <div className="sx-fact">
              <dt>Otevíráme</dt>
              <dd>6.30</dd>
              <span>po–pá, Libeň</span>
            </div>
            <div className="sx-fact">
              <dt>Prodejny</dt>
              <dd>2</dd>
              <span>Libeň · Malešice</span>
            </div>
            <div className="sx-fact">
              <dt>Doprava</dt>
              <dd>ruka</dd>
              <span>vozidlo s hydr. rukou</span>
            </div>
          </dl>
        </div>
      </header>

      <section className="sx-section sx-sortiment" id="sortiment" aria-labelledby="sortiment-h">
        <div className="sx-section-head">
          <p className="sx-eyebrow sx-eyebrow-dark">Sortiment</p>
          <h2 className="sx-h2" id="sortiment-h">Od základů po poslední odstín fasády</h2>
          <p className="sx-section-lede">
            Čtyři sklady zboží, které řemeslníci a stavebníci v Praze potřebují nejčastěji.
            Neprodáváme jen materiál — spočítáme spotřebu a poradíme s výběrem.
          </p>
        </div>

        <div className="sx-cards">
          {materialy.map((m) => (
            <article className="sx-card" key={m.c}>
              <span className="sx-card-num" aria-hidden="true">{m.c}</span>
              <h3 className="sx-card-h3">{m.nadpis}</h3>
              <p className="sx-card-p">{m.popis}</p>
              <ul className="sx-chips">
                {m.znacky.map((z) => (
                  <li className="sx-chip" key={z}>{z}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <figure className="sx-figure">
          <img src="/section-1.webp" alt="Regály s pytlovanými stavebními směsmi a maltami ve skladu stavebnin" />
          <figcaption>Sklad Malešice — pytlované směsi vždy skladem, žádné čekání na objednávku.</figcaption>
        </figure>
      </section>

      <section className="sx-section sx-duvera" aria-labelledby="duvera-h">
        <div className="sx-duvera-grid">
          <div className="sx-duvera-text">
            <p className="sx-eyebrow">Proč Stavimex</p>
            <h2 className="sx-h2 sx-h2-light" id="duvera-h">Rodinné stavebniny, které stavbu opravdu znají</h2>
            <p className="sx-duvera-p">
              Dodáváme stavební materiál developerům i lidem, kteří si dům stavějí svépomocí.
              Jako člen evropské sítě BigMat máme přístup ke značkám, které používají přední
              stavební firmy — a přesto se u nás domluvíte lidsky, přes pult.
            </p>
            <p className="sx-duvera-p">
              Ve studiu barev v Libni vám proškolení pracovníci namíchají fasádu i omítku
              přesně podle vašich představ. A když si nevíte rady s množstvím, spočítáme
              spotřebu s vámi, ať nekupujete zbytečně navíc.
            </p>
            <ul className="sx-usp">
              <li><strong>Odborné poradenství</strong> a výpočet spotřeby materiálu</li>
              <li><strong>Rozvoz na stavbu</strong> vozidlem s hydraulickou rukou včetně vykládky</li>
              <li><strong>Vlastní vzorkovna</strong> obkladů, dlažeb a sanity v Libni</li>
            </ul>
          </div>
          <figure className="sx-duvera-figure">
            <img src="/section-2.webp" alt="Nákladní vozidlo s hydraulickou rukou skládá palety se stavebním materiálem na staveništi" />
          </figure>
        </div>

        <div className="sx-prodejny">
          {prodejny.map((p) => (
            <article className="sx-prodejna" key={p.nazev}>
              <h3 className="sx-prodejna-h3">
                <span className="sx-prodejna-kicker">Stavebniny</span>
                {p.nazev}
              </h3>
              <p className="sx-prodejna-adresa">{p.adresa}</p>
              <p className="sx-prodejna-orient">{p.orientace}</p>
              <dl className="sx-hodiny">
                <div><dt>po–pá</dt><dd>{p.po_pa}</dd></div>
                <div><dt>so</dt><dd>{p.so}</dd></div>
              </dl>
              <p className="sx-prodejna-navic">{p.navic}</p>
              <a className="sx-btn sx-btn-tel" href={`tel:${p.telHref}`}>Zavolat {p.tel}</a>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
