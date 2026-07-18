import { LoadSweep } from "./motion";

const stages = [
  {
    n: "01",
    t: "Příjezd",
    d: "Zajedeš do volného mycího boxu. Ovladač programů máš po levé ruce, plocha je krytá a nasvícená — nezmokneš.",
  },
  {
    n: "02",
    t: "Aktivní pěna",
    d: "Hustý nástřik obalí celé auto a rozpustí zimní sůl, bláto i posypový prach z ostravských cest.",
  },
  {
    n: "03",
    t: "Kartáč",
    d: "Měkký rotační kartáč sjede připečený hmyz a nečistotu z laku, prahů i disků. Ty ho vedeš, kam potřebuješ.",
  },
  {
    n: "04",
    t: "Oplach",
    d: "Vysokotlaký oplach demineralizovanou vodou spláchne pěnu i kartáč. Bez vodního kamene, bez šmouh na skle.",
  },
  {
    n: "05",
    t: "Vosk a sušení",
    d: "Horký vosk zapečetí lak a foukání ho vysuší do sucha, aby kapky nezaschly na kapotě cestou domů.",
  },
  {
    n: "06",
    t: "Hotovo",
    d: "Odjíždíš do osmi minut. Čisté auto, suché sklo, a program končí přesně tam, kde jsi ho pustil.",
  },
];

const pobocky = [
  { m: "Poruba", u: "u výjezdu na Opavskou", boxes: "6 boxů" },
  { m: "Vítkovice", u: "vedle čerpací stanice", boxes: "4 boxy" },
  { m: "Zábřeh", u: "na okruhu u Odry", boxes: "5 boxů" },
];

const reviews = [
  {
    q: "Jezdím sem z Poruby každý pátek. Za dvě minuty je z auta po týdnu na stavbě zase auto.",
    a: "Marek, řidič dodávky",
  },
  {
    q: "Konečně myčka, kde neplatím za nic navíc. Pustím pěnu, kartáč, oplach — a mám hotovo.",
    a: "Lucie, Ostrava-Zábřeh",
  },
  {
    q: "Non-stop provoz mi sedí. Vracím se z noční, zastavím a ráno mám čisté auto před barákem.",
    a: "Tomáš, taxikář",
  },
];

export default function Page() {
  return (
    <main className="page">
      <LoadSweep />

      {/* ————— HERO — příjezd ————— */}
      <header className="topbar">
        <a className="wm wm--sm" href="#top" aria-label="MYJE.TO — úvod">
          <span className="wm__part">MYJE</span>
          <span className="wm__bead" aria-hidden="true" />
          <span className="wm__part">TO</span>
        </a>
        <nav className="topbar__nav" aria-label="Hlavní">
          <a href="#program">Program</a>
          <a href="#pobocky">Pobočky</a>
        </nav>
      </header>

      <section id="top" className="band band--hero">
        <div className="wrap hero">
          <p className="eyebrow rise" style={{ ["--i" as string]: 0 }}>
            <span className="tick" aria-hidden="true" />
            Samoobslužná automyčka · Ostrava · non-stop
          </p>

          <h1 className="wm wm--hero rise" style={{ ["--i" as string]: 1 }} aria-label="MYJE.TO">
            <span className="wm__part">MYJE</span>
            <span className="wm__bead" aria-hidden="true" />
            <span className="wm__part">TO</span>
          </h1>

          <p className="hero__lead rise" style={{ ["--i" as string]: 2 }}>
            Přijeď zablácený, odjeď čistý. Šest krytých boxů, pěna, kartáč a horký
            vosk — všechno v jedné ruce a hotovo za pár minut.
          </p>

          <div className="hero__actions rise" style={{ ["--i" as string]: 3 }}>
            <a className="btn btn--signal" href="#program">Jak to projede</a>
            <a className="btn btn--ghost" href="#pobocky">Kde myjeme</a>
          </div>

          <dl className="stats rise" style={{ ["--i" as string]: 4 }}>
            <div className="stat">
              <dt>Otevřeno</dt>
              <dd>24/7</dd>
            </div>
            <div className="stat">
              <dt>Mycí boxy</dt>
              <dd>15</dd>
            </div>
            <div className="stat">
              <dt>Start od</dt>
              <dd>30 Kč</dd>
            </div>
            <div className="stat">
              <dt>Platba</dt>
              <dd>karta i mince</dd>
            </div>
          </dl>
        </div>
      </section>

      {/* ————— SEKCE 1 — program mytí (sekvence 01–06) ————— */}
      <section id="program" className="band band--program">
        <svg className="sheet" viewBox="0 0 1440 90" preserveAspectRatio="none" aria-hidden="true">
          <path d="M0,0 L1440,0 L1440,44 C1160,96 980,18 720,50 C500,77 240,30 0,58 Z" />
        </svg>
        <div className="wrap">
          <div className="sec-head reveal">
            <p className="eyebrow">
              <span className="tick" aria-hidden="true" />
              Mycí tunel, krok za krokem
            </p>
            <h2 className="sec-title">Šest stanic. Vedeš je sám.</h2>
            <p className="sec-sub">
              Žádné čekání ve frontě na obsluhu. Otočíš ovladačem, program naskočí a
              ty se posouváš tunelem přesně svým tempem — od nástřiku po suché sklo.
            </p>
          </div>

          <ol className="stages">
            {stages.map((s) => (
              <li className="stage reveal" key={s.n}>
                <span className="stage__n">{s.n}</span>
                <div className="stage__body">
                  <h3 className="stage__t">
                    <span className="dot" aria-hidden="true" />
                    {s.t}
                  </h3>
                  <p className="stage__d">{s.d}</p>
                </div>
              </li>
            ))}
          </ol>

          <p className="note reveal">
            Program platíš mincemi i kartou přímo v boxu. Přerušit a dokončit můžeš
            kdykoliv — počítá se jen skutečně odjetý čas.
          </p>
        </div>
      </section>

      {/* ————— SEKCE 2 — důvěra / pobočky ————— */}
      <section id="pobocky" className="band band--trust">
        <svg className="sheet sheet--foam" viewBox="0 0 1440 90" preserveAspectRatio="none" aria-hidden="true">
          <path d="M0,0 L1440,0 L1440,44 C1160,96 980,18 720,50 C500,77 240,30 0,58 Z" />
        </svg>
        <div className="wrap">
          <div className="sec-head reveal">
            <p className="eyebrow eyebrow--dark">
              <span className="tick" aria-hidden="true" />
              Tři myčky po Ostravě
            </p>
            <h2 className="sec-title sec-title--dark">Vždycky máš box po cestě.</h2>
            <p className="sec-sub sec-sub--dark">
              Ať bydlíš v Porubě, jezdíš přes Vítkovice nebo končíš směnu u Odry —
              nejbližší MYJE.TO je pár minut od tebe a otevřeno má pořád.
            </p>
          </div>

          <ul className="branches">
            {pobocky.map((p) => (
              <li className="branch reveal" key={p.m}>
                <span className="dot dot--dark" aria-hidden="true" />
                <div>
                  <h3 className="branch__m">Ostrava-{p.m}</h3>
                  <p className="branch__u">{p.u}</p>
                </div>
                <span className="branch__tag">{p.boxes} · non-stop</span>
              </li>
            ))}
          </ul>

          <div className="reviews">
            {reviews.map((r) => (
              <figure className="review reveal" key={r.a}>
                <blockquote className="review__q">{r.q}</blockquote>
                <figcaption className="review__a">— {r.a}</figcaption>
              </figure>
            ))}
          </div>

          <p className="contact reveal">
            Napiš nám, kterou pobočku myslíš — telefon <span>—</span>, e-mail{" "}
            <span>—</span>, adresa <span>—</span>.
          </p>
        </div>
      </section>
    </main>
  );
}
