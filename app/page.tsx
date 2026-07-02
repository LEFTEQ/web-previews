// Veterina Skřivánek — Ústí nad Labem
// Statický náhled: hero + služby + tým/důvěra. Bez patičky (doplní studio).

const preventivni = [
  "Očkování a čipování",
  "Ošetření drápků a análních žlázek",
  "Program proti vnějším i vnitřním parazitům",
  "Toaleta zvukovodů",
  "Veterinární diety na míru",
  "Mezinárodní průkaz a potvrzení na výstavy",
];

const operace = [
  "Chirurgie měkkých tkání",
  "Traumatologie",
  "Kastrace",
  "Císařský řez",
  "Stomatologie a zubní ultrazvuk",
];

const pristroje = [
  { nazev: "RTG", popis: "Rentgen přímo v ordinaci — snímek hned, bez cesty jinam." },
  { nazev: "SONO", popis: "Ultrasonograf pro šetrné vyšetření břicha i srdce." },
  { nazev: "LAB", popis: "Biochemický a hematologický analyzátor — výsledky krve na počkání." },
  { nazev: "DENT", popis: "Zubní ultrazvuk pro odstranění kamene a péči o dásně." },
];

const lekari = [
  {
    jmeno: "MVDr. Jana Chundeláková",
    role: "veterinární lékařka",
    popis: "Ve volném čase se věnuje dog‑dancingu a agility — psí řeči rozumí i mimo ordinaci.",
  },
  {
    jmeno: "MVDr. Karel Linzmayer",
    role: "veterinární lékař",
    popis: "Dlouholetá praxe, několik let působil v městském útulku v Ústí nad Labem. V ordinaci ho zastihnete odpoledne.",
  },
  {
    jmeno: "MVDr. Lucie Formanová",
    role: "veterinární lékařka",
    popis: "Zaměřuje se na medicínu malých zvířat. Volný čas tráví sportem a v sedle koně.",
  },
  {
    jmeno: "MVDr. Markéta Zemanová",
    role: "veterinární lékařka",
    popis: "Specialistka na hlodavce a chirurgii měkkých tkání. Aktuálně na mateřské dovolené.",
  },
];

const sestry = [
  {
    jmeno: "Sabina Fiedlerová",
    role: "vrchní sestra",
    popis: "Několikaletá praxe ve veterinářství, ve volnu pomáhá Spolku u pejska a kočičky na Čeřeništi.",
  },
  {
    jmeno: "Tereza Halinárová",
    role: "veterinární sestra",
    popis: "Usměvavá sestřička, doma má kocoura Kočičáka — adoptovaného od Spolku u pejska a kočičky.",
  },
];

const ordinacniHodiny = [
  { den: "Po–Čt", cas: "8:30–12:00 · 13:00–18:00" },
  { den: "Pátek", cas: "8:30–14:00" },
  { den: "So–Ne", cas: "zavřeno" },
];

export default function Page() {
  return (
    <main className="vs">
      {/* ===== HLAVIČKA ===== */}
      <header className="vs-top">
        <a className="vs-wordmark" href="#" aria-label="Veterina Skřivánek — úvod">
          <span className="vs-wordmark-vet">VETERINA</span>
          <span className="vs-wordmark-skr">Skřivánek</span>
        </a>
        <a className="vs-top-tel" href="tel:+420733735552">
          <svg viewBox="0 0 20 20" width="16" height="16" aria-hidden="true" focusable="false">
            <path
              d="M4 2h3l2 5-2.5 1.5a11 11 0 0 0 5 5L13 11l5 2v3a2 2 0 0 1-2 2A14 14 0 0 1 2 4a2 2 0 0 1 2-2Z"
              fill="currentColor"
            />
          </svg>
          733 735 552
        </a>
      </header>

      {/* ===== HERO ===== */}
      <section className="vs-hero" aria-labelledby="hero-title">
        {/* Signature: EKG linka, která přechází v siluetu skřivánka */}
        <div className="vs-ekg" aria-hidden="true">
          <svg viewBox="0 0 1200 220" preserveAspectRatio="none">
            <path
              className="vs-ekg-path"
              d="M0 130 H180 l16 -22 18 30 14 -70 20 108 16 -46 12 0 H420
                 c30 0 40 -34 66 -52 22 -15 46 -20 64 -12 14 6 18 22 8 34 -12 14 -34 10 -40 -4 -5 -12 4 -26 20 -30 34 -9 74 6 96 28 14 14 20 26 46 36 h60
                 l16 -22 18 30 14 -70 20 108 16 -46 12 0 H1200"
              fill="none"
            />
          </svg>
        </div>

        <p className="vs-hero-eyebrow">
          Veterinární ordinace · Ústí nad Labem, sídliště SNP
        </p>

        <h1 id="hero-title" className="vs-hero-title">
          Když vám doma{" "}
          <em>
            tluče srdce
            <svg
              className="vs-underline"
              viewBox="0 0 300 22"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <path d="M2 14 H90 l8 -8 10 14 8 -18 10 20 8 -10 H298" fill="none" />
            </svg>
          </em>{" "}
          na čtyřech nohách.
        </h1>

        <p className="vs-hero-lead">
          Psi, kočky, hlodavci i papoušci — vyšetříme, ošetříme a odoperujeme je
          přímo tady, na SNP&nbsp;2389/4. Rentgen, sono i krevní laboratoř máme
          v&nbsp;ordinaci, takže na výsledky nečekáte dny, ale minuty.
        </p>

        <div className="vs-hero-actions">
          <a className="vs-btn vs-btn-primary" href="tel:+420733735552">
            Zavolat ordinaci
          </a>
          <a className="vs-btn vs-btn-ghost" href="mailto:veterina.skrivanek@gmail.com">
            Napsat e‑mail
          </a>
        </div>

        <dl className="vs-hero-hours">
          {ordinacniHodiny.map((h) => (
            <div className="vs-hours-row" key={h.den}>
              <dt>{h.den}</dt>
              <dd>{h.cas}</dd>
            </div>
          ))}
        </dl>
      </section>

      {/* ===== SEKCE 1: PÉČE A VYBAVENÍ ===== */}
      <section className="vs-sluzby" aria-labelledby="sluzby-title">
        <div className="vs-section-head">
          <p className="vs-eyebrow">Co pro vaše zvíře uděláme</p>
          <h2 id="sluzby-title">Od očkování po císařský řez</h2>
          <p className="vs-section-lead">
            Většinu péče zvládneme na jednom místě a při jedné návštěvě —
            prevenci, diagnostiku i operace.
          </p>
        </div>

        <div className="vs-sluzby-grid">
          <article className="vs-karta vs-karta-prevence">
            <h3>
              <span className="vs-karta-znak" aria-hidden="true">+</span>
              Preventivní péče
            </h3>
            <p className="vs-karta-pozn">
              Pravidelná prevence je nejlevnější léčba. Přijďte, i když je
              zvíře zdravé.
            </p>
            <ul>
              {preventivni.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </article>

          <article className="vs-karta vs-karta-operace">
            <h3>
              <span className="vs-karta-znak" aria-hidden="true">✕</span>
              Operace
            </h3>
            <p className="vs-karta-pozn">
              Operujeme přímo v ordinaci, v klidném prostředí, které vaše
              zvíře zná z prohlídek.
            </p>
            <ul>
              {operace.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </article>
        </div>

        <div className="vs-pristroje" role="list" aria-label="Přístrojové vybavení ordinace">
          {pristroje.map((p) => (
            <div className="vs-pristroj" role="listitem" key={p.nazev}>
              <span className="vs-pristroj-tag">{p.nazev}</span>
              <p>{p.popis}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== SEKCE 2: TÝM A DŮVĚRA ===== */}
      <section className="vs-tym" aria-labelledby="tym-title">
        <div className="vs-section-head">
          <p className="vs-eyebrow vs-eyebrow-svetly">Kdo se o vás postará</p>
          <h2 id="tym-title">Čtyři lékaři, dvě sestry — a všichni mají zvířata doma</h2>
          <p className="vs-section-lead">
            Nejsme anonymní klinika. Vaše zvíře uvidí známé tváře, které si
            pamatují jeho jméno i jeho zlozvyky.
          </p>
        </div>

        <div className="vs-tym-grid">
          {lekari.map((l) => (
            <article className="vs-osoba" key={l.jmeno}>
              <p className="vs-osoba-role">{l.role}</p>
              <h3>{l.jmeno}</h3>
              <p className="vs-osoba-popis">{l.popis}</p>
            </article>
          ))}
          {sestry.map((s) => (
            <article className="vs-osoba vs-osoba-sestra" key={s.jmeno}>
              <p className="vs-osoba-role">{s.role}</p>
              <h3>{s.jmeno}</h3>
              <p className="vs-osoba-popis">{s.popis}</p>
            </article>
          ))}
        </div>

        <div className="vs-utulek">
          <svg className="vs-utulek-ekg" viewBox="0 0 120 24" aria-hidden="true" preserveAspectRatio="none">
            <path d="M0 14 H36 l6 -8 8 12 6 -14 8 16 6 -6 H120" fill="none" />
          </svg>
          <p>
            MVDr. Linzmayer několik let vedl péči v&nbsp;městském útulku
            v&nbsp;Ústí nad Labem a náš tým dodnes pomáhá Spolku u&nbsp;pejska
            a&nbsp;kočičky na Čeřeništi. Zvířatům pomáháme i&nbsp;mimo
            ordinační hodiny — protože je to naše práce i&nbsp;naše volba.
          </p>
        </div>
      </section>
    </main>
  );
}
