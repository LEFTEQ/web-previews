const sluzby = [
  {
    kod: "MD",
    nazev: "Vedení účetnictví",
    popis:
      "Kompletní podvojné účetnictví pro s.r.o. i a.s. Vaše přidělená účetní hlídá doklady, splatnosti faktur a všechny měsíční termíny — vy jen fotíte účtenky do aplikace.",
    detail: "účetní deník · hlavní kniha · závěrka",
  },
  {
    kod: "DPH",
    nazev: "Daně a kontrolní hlášení",
    popis:
      "DPH, kontrolní hlášení i daňové přiznání podáváme za vás a včas. Nad účetními stojí daňoví poradci, kteří řeší i složitější situace — třeba přechod na plátcovství.",
    detail: "přiznání DPH · silniční daň · DPPO",
  },
  {
    kod: "MZD",
    nazev: "Mzdy a personalistika",
    popis:
      "Mzdy spočítáme do 24 hodin od uzávěrky podkladů. Přihlášky na správu sociálního zabezpečení a zdravotní pojišťovny vyřídíme za vás, výplatní pásky najdou zaměstnanci v portálu.",
    detail: "HPP · DPP · DPČ · exekuce a srážky",
  },
  {
    kod: "ÚŘD",
    nazev: "Zastupování na úřadech",
    popis:
      "Datovou schránkou komunikujeme s finančním úřadem v Plzni i kdekoli jinde. Výzvy, kontroly a dotazy úředníků řešíme my — vy se o nich dozvíte, až když je hotovo.",
    detail: "plná moc · datová schránka · kontroly",
  },
];

const kroky = [
  {
    md: "MD 01",
    titulek: "Doklad vyfotíte nebo přepošlete",
    text: "Účtenku vyfotíte mobilem, fakturu přepošlete e-mailem. Aplikace vytěží částky a data sama — žádné krabice od bot plné papírů.",
  },
  {
    md: "MD 02",
    titulek: "Účetní zaúčtuje a zkontroluje",
    text: "Vaše přidělená účetní — vyškolený profesionál, ne samouk — doklad zaúčtuje, spáruje s bankou a ohlídá, že nic nechybí.",
  },
  {
    md: "MD 03",
    titulek: "Vy vidíte čísla 24/7",
    text: "V portálu máte přehled o zisku, závazcích i blížících se termínech. Kdykoli, z počítače i telefonu, ze Plzně i z dovolené.",
  },
];

const reference = [
  {
    citace:
      "Odpovědi od Trivi přicházejí rychleji než ranní káva z automatu. Portál je tak přehledný, že v něm najdeme, co potřebujeme, rychleji než ve vlastní kuchyni.",
    jmeno: "Matěj Mach",
    role: "jednatel, DALUMA s.r.o.",
  },
  {
    citace:
      "Bezpapírové předávání dokumentů a úspory z rozsahu — přesně to jsme hledali. I při více než 8 000 vydaných fakturách máme měsíční reporting nastavený skvěle.",
    jmeno: "Ing. Martin Lukáš",
    role: "zakladatel, Primulus",
  },
];

export default function Page() {
  return (
    <main className="tv">
      {/* ===== HERO ===== */}
      <header className="tv-hero">
        <div className="tv-hero-inner">
          <div className="tv-topbar">
            <span className="tv-wordmark" aria-label="Trivi">
              tri<span className="tv-wordmark-vi">vi</span>
              <span className="tv-wordmark-dot" aria-hidden="true"></span>
            </span>
            <a className="tv-phone" href="tel:800806040">
              <span className="tv-phone-label">zavolejte zdarma</span>
              <span className="tv-phone-num">800 80 60 40</span>
            </a>
          </div>

          <div className="tv-hero-grid">
            <div className="tv-hero-copy">
              <p className="tv-eyebrow">Online účetnictví · daně · mzdy — Plzeň a celé Česko</p>
              <h1 className="tv-h1">
                <span className="tv-h1-line tv-h1-line-1">Účetnictví,</span>
                <span className="tv-h1-line tv-h1-line-2">které <em>sedí</em></span>
                <span className="tv-h1-line tv-h1-line-3">na haléř.</span>
              </h1>
              <p className="tv-lead">
                Vaše účetní hlídá doklady, DPH i úřady. Vy vidíte čísla v aplikaci —
                kdykoli, odkudkoli. Žádné papíry, žádné zmeškané termíny.
              </p>
              <div className="tv-hero-actions">
                <a className="tv-btn" href="tel:800806040">Chci nabídku na míru</a>
                <a className="tv-btn tv-btn-ghost" href="mailto:obchod@trivi.com">
                  obchod@trivi.com
                </a>
              </div>
            </div>

            {/* Signature: účetní T-konto (Má dáti / Dal) */}
            <div className="tv-tkonto" aria-hidden="true">
              <div className="tv-tkonto-head">
                <span>Má dáti</span>
                <span>Dal</span>
              </div>
              <div className="tv-tkonto-body">
                <div className="tv-tkonto-col">
                  <div className="tv-tkonto-row"><span>Papírování</span><span>0,—</span></div>
                  <div className="tv-tkonto-row"><span>Zmeškané termíny</span><span>0,—</span></div>
                  <div className="tv-tkonto-row"><span>Fronty na úřadě</span><span>0,—</span></div>
                </div>
                <div className="tv-tkonto-col">
                  <div className="tv-tkonto-row"><span>Vlastní účetní</span><span>✓</span></div>
                  <div className="tv-tkonto-row"><span>Aplikace 24/7</span><span>✓</span></div>
                  <div className="tv-tkonto-row"><span>Daňoví poradci</span><span>✓</span></div>
                </div>
              </div>
              <div className="tv-tkonto-sum">
                <span>Zůstatek</span>
                <span className="tv-tkonto-sum-val">klid v podnikání</span>
              </div>
            </div>
          </div>

          <dl className="tv-hero-facts">
            <div className="tv-fact">
              <dt>Klientů po celém Česku</dt>
              <dd>1 000+</dd>
            </div>
            <div className="tv-fact">
              <dt>Aplikace a portál</dt>
              <dd>v ceně</dd>
            </div>
            <div className="tv-fact">
              <dt>Vaše agenda dostupná</dt>
              <dd>24/7</dd>
            </div>
            <div className="tv-fact">
              <dt>Úkony pojištěné</dt>
              <dd>100 %</dd>
            </div>
          </dl>
        </div>
      </header>

      {/* ===== SLUŽBY ===== */}
      <section className="tv-sluzby" aria-labelledby="sluzby-h">
        <div className="tv-section-inner">
          <div className="tv-section-head">
            <h2 id="sluzby-h" className="tv-h2">Co za vás vedeme</h2>
            <p className="tv-section-sub">
              Jsme vaše kompletní účetní oddělení. Pro živnostníky, malé firmy
              i společnosti se zaměstnanci — vždy s vlastní přidělenou účetní.
            </p>
          </div>

          <div className="tv-sluzby-grid">
            {sluzby.map((s) => (
              <article className="tv-karta" key={s.kod}>
                <span className="tv-karta-kod">{s.kod}</span>
                <h3 className="tv-h3">{s.nazev}</h3>
                <p className="tv-karta-popis">{s.popis}</p>
                <p className="tv-karta-detail">{s.detail}</p>
              </article>
            ))}
          </div>

          <div className="tv-kroky">
            <h3 className="tv-kroky-h">Jak to u nás účtuje</h3>
            <ol className="tv-kroky-list">
              {kroky.map((k) => (
                <li className="tv-krok" key={k.md}>
                  <span className="tv-krok-md">{k.md}</span>
                  <div>
                    <h4 className="tv-krok-titulek">{k.titulek}</h4>
                    <p className="tv-krok-text">{k.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* ===== DŮVĚRA / REFERENCE ===== */}
      <section className="tv-duvera" aria-labelledby="duvera-h">
        <div className="tv-section-inner">
          <div className="tv-duvera-grid">
            <div className="tv-duvera-copy">
              <h2 id="duvera-h" className="tv-h2">
                Samouky u nás nehledejte
              </h2>
              <p>
                V Trivi pracují vyškolené účetní a daňoví poradci. Přechod k nám
                vás bolet nebude — vaše dosavadní účetnictví převezmeme a přeneseme
                sami, včetně komunikace s vaší současnou účetní.
              </p>
              <p>
                Všechny doklady máte zálohované v zabezpečeném cloudu a každý náš
                úkon je pojištěný. Aplikace Trivi propojí banku, platební brány
                i fakturaci — s účetní komunikujete odkudkoli, z počítače,
                tabletu i telefonu.
              </p>
              <ul className="tv-duvera-body">
                <li>Přidělená účetní, která zná vaši firmu jménem</li>
                <li>Doklady v šifrovaném cloudu, přístup jen pro vás</li>
                <li>Pojištění odpovědnosti na každý účetní úkon</li>
                <li>Přechod od stávající účetní vyřídíme my</li>
              </ul>
            </div>

            <div className="tv-reference">
              {reference.map((r) => (
                <figure className="tv-ref" key={r.jmeno}>
                  <span className="tv-ref-stars" aria-label="5 z 5 hvězdiček">
                    ★★★★★
                  </span>
                  <blockquote className="tv-ref-citace">„{r.citace}“</blockquote>
                  <figcaption className="tv-ref-autor">
                    <strong>{r.jmeno}</strong>
                    <span>{r.role}</span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
