const sluzby = [
  {
    nazev: "Vnitřní žaluzie",
    popis:
      "Hliníkové lamely na míru do plastových, dřevěných i hliníkových oken. Naklopíte je přesně tak, jak zrovna svítí slunce nad Ostravou.",
    detail: "lamela 25 mm",
  },
  {
    nazev: "Venkovní rolety",
    popis:
      "Předokenní rolety s izolační výplní. V zimě drží teplo doma, v létě horko venku — a v noci ztiší ulici.",
    detail: "úspora až 30 % tepla",
  },
  {
    nazev: "Venkovní žaluzie",
    popis:
      "Lamely tvaru Z a C pro novostavby i rekonstrukce. Stíní, ale nechají vás vidět ven. Ovládání klikou nebo motorem.",
    detail: "lamela Z-90 / C-80",
  },
  {
    nazev: "Sítě proti hmyzu",
    popis:
      "Pevné, rolovací i dveřní sítě. Otevřené okno celé léto bez komárů — vyrobíme na milimetr přesně.",
    detail: "rám v barvě okna",
  },
]

const kroky = [
  {
    krok: "Zaměření",
    text: "Přijedeme k vám kdekoli v Ostravě a okolí, zaměříme okna a poradíme, co se kam hodí. Zdarma a bez závazku.",
  },
  {
    krok: "Výroba na míru",
    text: "Každou žaluzii i roletu vyrábíme přesně na vaše okno. Žádné univerzální rozměry, žádné mezery, kudy svítí.",
  },
  {
    krok: "Montáž a servis",
    text: "Namontujeme, seřídíme, uklidíme po sobě. A když za pár let praskne provázek, přijedeme ho vyměnit.",
  },
]

export default function Page() {
  return (
    <main className="gl">
      {/* ===== HERO ===== */}
      <header className="gl-hero">
        <div className="gl-hero-inner">
          <p className="gl-wordmark">
            GLEICH<span className="gl-wordmark-thin">group</span>
          </p>

          <h1 className="gl-hero-title" aria-label="Světlo pod kontrolou">
            <span className="gl-slat" style={{ "--i": 0 } as React.CSSProperties}>
              SVĚTLO
            </span>
            <span className="gl-slat gl-slat-tilt" style={{ "--i": 1 } as React.CSSProperties}>
              POD
            </span>
            <span className="gl-slat" style={{ "--i": 2 } as React.CSSProperties}>
              KONTROLOU
            </span>
          </h1>

          <div className="gl-hero-lamely" aria-hidden="true">
            <span />
            <span />
            <span />
            <span />
            <span />
          </div>

          <p className="gl-hero-sub">
            Žaluzie, rolety a sítě proti hmyzu na míru.
            <br />
            Zaměříme, vyrobíme a namontujeme — <strong>Ostrava a okolí</strong>.
          </p>

          <div className="gl-hero-cta">
            <a className="gl-btn" href="tel:+420605123456">
              Zavolat: 605 123 456
            </a>
            <a className="gl-btn gl-btn-ghost" href="mailto:poptavka@gleichgroup.cz">
              Poslat poptávku e-mailem
            </a>
          </div>

          <p className="gl-hero-note">Zaměření a cenová nabídka zdarma, obvykle do 3 dnů.</p>
        </div>
      </header>

      {/* ===== SLUŽBY ===== */}
      <section className="gl-sluzby" aria-labelledby="sluzby-h">
        <div className="gl-section-head">
          <p className="gl-eyebrow">Co vám vyrobíme</p>
          <h2 id="sluzby-h">Stínění pro každé okno v domě</h2>
          <p className="gl-section-lead">
            Od ložnice v paneláku po prosklenou stěnu novostavby. Vše na míru, s montáží
            a zárukou.
          </p>
        </div>

        <div className="gl-grid">
          {sluzby.map((s) => (
            <article className="gl-card" key={s.nazev}>
              <div className="gl-card-lamela" aria-hidden="true" />
              <h3>{s.nazev}</h3>
              <p>{s.popis}</p>
              <p className="gl-card-detail">{s.detail}</p>
            </article>
          ))}
        </div>
      </section>

      {/* ===== JAK PRACUJEME / DŮVĚRA ===== */}
      <section className="gl-duvera" aria-labelledby="duvera-h">
        <div className="gl-duvera-inner">
          <div className="gl-section-head gl-section-head-light">
            <p className="gl-eyebrow">Jak to u nás chodí</p>
            <h2 id="duvera-h">Od zaměření k hotovému oknu ve třech krocích</h2>
          </div>

          <ol className="gl-kroky">
            {kroky.map((k, i) => (
              <li className="gl-krok" key={k.krok}>
                <span className="gl-krok-cislo" aria-hidden="true">
                  {i + 1}
                </span>
                <h3>{k.krok}</h3>
                <p>{k.text}</p>
              </li>
            ))}
          </ol>

          <figure className="gl-reference">
            <blockquote>
              „Venkovní žaluzie na celý dům v Porubě. Přijeli, zaměřili, za tři týdny
              namontovali. V létě máme v obýváku o pět stupňů míň a soused už se byl
              dvakrát ptát, kdo nám to dělal.“
            </blockquote>
            <figcaption>— rodina Kubicova, Ostrava-Poruba</figcaption>
          </figure>

          <ul className="gl-fakta">
            <li>
              <strong>Ostrava a okolí do 30 km</strong>
              <span>Poruba, Zábřeh, Hrabůvka, Klimkovice i Havířov</span>
            </li>
            <li>
              <strong>Výroba na míru</strong>
              <span>zaměříme na milimetr, žádné katalogové rozměry</span>
            </li>
            <li>
              <strong>Servis i po letech</strong>
              <span>výměna provázků, lamel a motorů — i u cizích žaluzií</span>
            </li>
          </ul>
        </div>
      </section>
    </main>
  )
}
