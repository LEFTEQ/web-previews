const sluzby = [
  {
    kod: "SYN",
    nazev: "Syntetické podlahy",
    popis:
      "Epoxidové a polyuretanové stěrky i chemicky odolný Ucrete pro potravinářské a chemické provozy. Bezespará podlaha, která snese vysokozdvižný vozík, kyseliny i horkou vodu.",
    detaily: ["Epoxidové stěrky", "Polyuretanové systémy", "Ucrete", "Dopravní značení hal"],
  },
  {
    kod: "BET",
    nazev: "Betonové podlahy",
    popis:
      "Strojně hlazené betony s tvrdovsypovým leštěným povrchem a lité potěry. Rovinatost, kterou změříte latí — a povrch, který vydrží dekády provozu.",
    detaily: ["Tvrdovsypový leštěný povrch", "Strojně zpracované betony", "Lité potěry"],
  },
  {
    kod: "MON",
    nazev: "Monolitické konstrukce",
    popis:
      "Základové desky a stěny na klíč — od statického výpočtu po odbednění. Realizace v Liberci, Chrastavě, Dobranově i Rochlici.",
    detaily: ["Základové konstrukce", "Monolitické stěny", "Statické výpočty"],
  },
  {
    kod: "SAN",
    nazev: "Sanace a opravy",
    popis:
      "Bezprašná příprava podkladu, sanace spár a trhlin, opravy poškozených povrchů. Vrátíme starou podlahu do provozu bez kompletní výměny.",
    detaily: ["Sanace spár a trhlin", "Bezprašné broušení", "Opravy povrchů"],
  },
];

const cisla = [
  { hodnota: "85 000", jednotka: "m²", label: "položeného betonu" },
  { hodnota: "120 000", jednotka: "m²", label: "syntetických povrchů" },
  { hodnota: "14 000", jednotka: "bm", label: "dopravního značení" },
];

export default function Page() {
  return (
    <main className="kp">
      {/* ===== HERO ===== */}
      <header className="kp-hero">
        <div className="kp-hero__topbar">
          <span className="kp-wordmark" aria-label="Korepo">
            KORE<span className="kp-wordmark__po">PO</span>
          </span>
          <span className="kp-hero__loc">Liberec · Dolní Hanychov · od 2011</span>
        </div>

        <div className="kp-hero__grid">
          <div className="kp-hero__text">
            <p className="kp-eyebrow">Průmyslové podlahy a monolity</p>
            <h1 className="kp-hero__title">
              Podlaha, po které
              <br />
              <em>jezdí celý provoz.</em>
            </h1>
            <p className="kp-hero__lead">
              Betonujeme, hladíme a stěrkujeme podlahy průmyslových hal v Libereckém kraji.
              Od základové desky po epoxidový finiš — jedna parta, jedna odpovědnost.
            </p>
            <div className="kp-hero__actions">
              <a className="kp-btn kp-btn--solid" href="tel:+420485100100">
                Zavolat do Korepa
              </a>
              <a className="kp-btn kp-btn--line" href="mailto:info@korepo.cz">
                Poslat poptávku e‑mailem
              </a>
            </div>
          </div>

          <figure className="kp-hero__media">
            <img
              src="/hero.webp"
              alt="Strojní hlazení čerstvé betonové podlahy v průmyslové hale"
              className="kp-img"
            />
            <figcaption className="kp-hero__caption">
              Strojní hlazení tvrdovsypového povrchu — poslední hodiny, kdy je beton měkký.
            </figcaption>
          </figure>
        </div>

        {/* Signature: měřicí lať s realizovanými metry */}
        <div className="kp-lat" role="list" aria-label="Realizace 2011–2022 v číslech">
          {cisla.map((c) => (
            <div className="kp-lat__cell" role="listitem" key={c.label}>
              <span className="kp-lat__num">
                {c.hodnota}\u00A0<small>{c.jednotka}</small>
              </span>
              <span className="kp-lat__label">{c.label}</span>
            </div>
          ))}
          <div className="kp-lat__cell kp-lat__cell--note" role="listitem">
            <span className="kp-lat__num">2011–2022</span>
            <span className="kp-lat__label">a stavíme dál</span>
          </div>
        </div>
      </header>

      {/* ===== SLUŽBY ===== */}
      <section className="kp-section kp-sluzby" aria-labelledby="sluzby-h">
        <div className="kp-section__head">
          <p className="kp-eyebrow">Co pro vás uděláme</p>
          <h2 id="sluzby-h" className="kp-h2">
            Čtyři vrstvy jednoho řemesla
          </h2>
          <p className="kp-section__lead">
            Podlaha průmyslové haly není jedna věc — je to souvrství. Umíme každou vrstvu,
            proto za výsledek ručíme celý.
          </p>
        </div>

        <div className="kp-sluzby__grid">
          {sluzby.map((s) => (
            <article className="kp-karta" key={s.kod}>
              <div className="kp-karta__head">
                <span className="kp-karta__kod" aria-hidden="true">
                  {s.kod}
                </span>
                <h3 className="kp-karta__title">{s.nazev}</h3>
              </div>
              <p className="kp-karta__popis">{s.popis}</p>
              <ul className="kp-karta__list">
                {s.detaily.map((d) => (
                  <li key={d}>{d}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <figure className="kp-sluzby__media">
          <img
            src="/section-1.webp"
            alt="Aplikace epoxidové stěrky na připravený betonový podklad"
            className="kp-img"
          />
          <figcaption className="kp-hero__caption">
            Syntetická stěrka drží jen na dokonale připraveném podkladu — proto brousíme bezprašně a měříme vlhkost.
          </figcaption>
        </figure>
      </section>

      {/* ===== DŮVĚRA ===== */}
      <section className="kp-section kp-duvera" aria-labelledby="duvera-h">
        <div className="kp-duvera__grid">
          <figure className="kp-duvera__media">
            <img
              src="/section-2.webp"
              alt="Hotová leštěná betonová podlaha ve výrobní hale v Liberci"
              className="kp-img"
            />
          </figure>

          <div className="kp-duvera__text">
            <p className="kp-eyebrow">Proč Korepo</p>
            <h2 id="duvera-h" className="kp-h2">
              Certifikovaný zhotovitel,
              <br />
              kterého potkáte na stavbě
            </h2>
            <p>
              Jsme certifikovaní zhotovitelé betonových i syntetických průmyslových podlah.
              Na trhu držíme od roku 2011 — hlavně díky partnerům a investorům, kteří se
              k nám vracejí se další halou.
            </p>

            <dl className="kp-fakta">
              <div className="kp-fakta__row">
                <dt>Kde nás najdete</dt>
                <dd>
                  Ještědská 84/130, Liberec VIII‑Dolní Hanychov — kancelář i sklad na jedné
                  ulici pod Ještědem.
                </dd>
              </div>
              <div className="kp-fakta__row">
                <dt>Jak pracujeme</dt>
                <dd>
                  Přijedeme, změříme, navrhneme skladbu a spočítáme statiku. Cenu znáte před
                  první míchačkou, ne po ní.
                </dd>
              </div>
              <div className="kp-fakta__row">
                <dt>Za čím si stojíme</dt>
                <dd>
                  Precizní detail u každé spáry a soklu. Referenční realizace vám ukážeme
                  osobně — základy v Chrastavě, Dobranově i po celém Liberci.
                </dd>
              </div>
            </dl>

            <blockquote className="kp-citace">
              „Nejvyšší prioritou je spokojený zákazník a řešení, které vydrží. Podlaha se
              dělá jednou — a pak na ní stojí všechno ostatní.“
              <footer>— zásada, kterou v Korepu držíme od první zakázky</footer>
            </blockquote>
          </div>
        </div>
      </section>
    </main>
  );
}
