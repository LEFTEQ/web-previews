const sluzby = [
  {
    nazev: "Kuchyňské linky",
    popis:
      "Kuchyň postavíme přesně na vaše stěny — na milimetr, včetně šikmin a niky. Dvířka z masivu, dýhy nebo lamina, výsuvy Blum s tichým dovíráním.",
    detail: "Zaměření u vás doma zdarma",
  },
  {
    nazev: "Vestavěné skříně",
    popis:
      "Skříň od podlahy ke stropu, žádná mezera na prach. Posuvné i pantové dveře, vnitřek rozvržený podle toho, co do ní opravdu dáváte.",
    detail: "Návrh vnitřního členění v ceně",
  },
  {
    nazev: "Vybavení bytů 1+kk",
    popis:
      "Malý byt chce chytrý nábytek. Postel s úložným prostorem, pracovní kout v nice, botník do chodby — každý centimetr pracuje.",
    detail: "Kompletní byt od jednoho truhláře",
  },
  {
    nazev: "Školy a školky",
    popis:
      "Šatní bloky, lavice, úložné stěny do tříd. Zaoblené hrany, odolné povrchy, certifikované materiály — a montáž o prázdninách, ať nerušíme výuku.",
    detail: "Reference z brněnských školek",
  },
]

const kroky = [
  {
    krok: "Zaměření",
    text: "Přijedeme k vám kamkoli po Brně a okolí, změříme prostor a probereme, co od nábytku čekáte. Nic za to neplatíte.",
  },
  {
    krok: "Návrh a cena",
    text: "Do týdne dostanete výkres a pevnou cenu. Žádné „od“ — částka, kterou vidíte, je částka, kterou zaplatíte.",
  },
  {
    krok: "Výroba v dílně",
    text: "Řežeme, frézujeme a lakujeme u nás v Brně. Každý kus projde rukama truhláře, ne jen pilou z katalogu.",
  },
  {
    krok: "Montáž",
    text: "Přivezeme, usadíme, seřídíme panty a uklidíme po sobě. Odcházíme, až když skříň zavírá tak, jak má.",
  },
]

export default function Page() {
  return (
    <main className="th">
      {/* ---------- HERO ---------- */}
      <header className="hero">
        <div className="hero-inner">
          <p className="wordmark">
            <span className="wordmark-mark" aria-hidden="true">
              {/* rybinový spoj — značka truhlářství */}
              <svg viewBox="0 0 40 40" width="40" height="40" role="img" aria-hidden="true">
                <path
                  d="M0 0h18l-6 8h16l-6 8h16l-6 8h16l-6 8h18v8H0z"
                  fill="none"
                />
                <path d="M2 2h36v36H2z" fill="none" stroke="currentColor" strokeWidth="2" />
                <path
                  d="M2 20h10l5-7h6l5 7h10M2 20h10l5 7h6l5-7h10"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <span className="wordmark-text">
              Truhlářství <strong>Jánský</strong>
            </span>
          </p>

          <h1 className="hero-title">
            <span className="line line-1">Nábytek</span>
            <span className="line line-2">na míru,</span>
            <span className="line line-3">
              na <em>milimetr</em>.
            </span>
          </h1>

          <p className="hero-sub">
            Malá truhlárna v Brně. Kuchyně, vestavěné skříně a nábytek pro školy
            — od zaměření u vás doma po poslední seřízený pant.
          </p>

          <div className="hero-cta">
            <a className="btn btn-primary" href="#sluzby">
              Co vyrábíme
            </a>
            <a className="btn btn-ghost" href="#postup">
              Jak to u nás chodí
            </a>
          </div>
        </div>

        {/* signature: metr — svislá truhlářská stupnice na kraji hero */}
        <div className="ruler" aria-hidden="true">
          <div className="ruler-ticks" />
          <span className="ruler-label ruler-label-top">0&nbsp;mm</span>
          <span className="ruler-label ruler-label-bottom">přesně</span>
        </div>

        {/* letokruhy v pozadí */}
        <div className="rings" aria-hidden="true">
          <svg viewBox="0 0 600 600" preserveAspectRatio="xMidYMid slice">
            <g fill="none" stroke="currentColor">
              <circle cx="300" cy="300" r="40" strokeWidth="1.5" />
              <circle cx="302" cy="296" r="85" strokeWidth="1" />
              <circle cx="296" cy="304" r="130" strokeWidth="1.5" />
              <circle cx="304" cy="298" r="178" strokeWidth="1" />
              <circle cx="298" cy="302" r="228" strokeWidth="1.5" />
              <circle cx="301" cy="297" r="280" strokeWidth="1" />
              <circle cx="299" cy="303" r="334" strokeWidth="1.5" />
              <circle cx="302" cy="300" r="390" strokeWidth="1" />
            </g>
          </svg>
        </div>
      </header>

      {/* ---------- SLUŽBY ---------- */}
      <section className="sluzby" id="sluzby" aria-labelledby="sluzby-h">
        <div className="section-head">
          <p className="eyebrow">Z dílny</p>
          <h2 id="sluzby-h">Čtyři věci, které umíme opravdu dobře</h2>
          <p className="section-lead">
            Neděláme všechno. Děláme nábytek na míru — a u těchhle čtyř zakázek
            máme za léta v Brně nejvíc odvedené práce.
          </p>
        </div>

        <ul className="sluzby-grid">
          {sluzby.map((s) => (
            <li className="karta" key={s.nazev}>
              <h3>{s.nazev}</h3>
              <p>{s.popis}</p>
              <p className="karta-detail">{s.detail}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* ---------- POSTUP / DŮVĚRA ---------- */}
      <section className="postup" id="postup" aria-labelledby="postup-h">
        <div className="section-head">
          <p className="eyebrow eyebrow-light">Jak to u nás chodí</p>
          <h2 id="postup-h">Od zaměření k hotové kuchyni ve čtyřech krocích</h2>
          <p className="section-lead section-lead-light">
            Jsme malá firma — mluvíte přímo s truhlářem, který vaši zakázku
            vyrobí. Nikdo mezi vámi a dílnou.
          </p>
        </div>

        <ol className="kroky">
          {kroky.map((k, i) => (
            <li className="krok" key={k.krok}>
              <span className="krok-cislo" aria-hidden="true">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3>{k.krok}</h3>
              <p>{k.text}</p>
            </li>
          ))}
        </ol>

        <div className="postup-fakta">
          <p className="fakt">
            <strong>Brno a okolí</strong>
            <span>dílna i montáže — jsme odsud a jezdíme k vám</span>
          </p>
          <p className="fakt">
            <strong>Pevná cena předem</strong>
            <span>výkres a rozpočet dostanete dřív, než řízneme první desku</span>
          </p>
          <p className="fakt">
            <strong>Masiv, dýha i lamino</strong>
            <span>materiál vybíráme podle účelu, ne podle skladu</span>
          </p>
        </div>
      </section>
    </main>
  )
}
