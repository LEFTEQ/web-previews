const sluzby = [
  {
    nazev: "Mytí oken a výloh",
    popis:
      "Byty, kanceláře i prodejny. Umyjeme sklo, rámy i parapety — bez šmouh a bez zatékání na fasádu. U výloh domluvíme pravidelný interval, ať je vidět dovnitř každý den.",
    detail: "od 1 hodiny práce",
  },
  {
    nazev: "Okna ve výškách",
    popis:
      "Prosklené haly, schodišťová okna, světlíky. Pracujeme s teleskopickými tyčemi a demineralizovanou vodou až do výšky 4. patra — bez lešení a bez plošiny.",
    detail: "do 15 metrů",
  },
  {
    nazev: "Okna po stavbě a rekonstrukci",
    popis:
      "Sundáme ochranné fólie, odstraníme zbytky lepidla, malty a barvy žiletkou i chemií, která sklo nepoškrábe. Okna předáme čistá k nastěhování.",
    detail: "včetně rámů a kování",
  },
  {
    nazev: "Pravidelný servis pro firmy",
    popis:
      "Kanceláře, školy, logistické areály v Olomouci a okolí. Domluvíme frekvenci — měsíčně, čtvrtletně — a hlídáme ji za vás. Fakturujeme jednou, bez papírování.",
    detail: "smluvní ceny",
  },
];

const duvody = [
  {
    cislo: "1992",
    titulek: "Rok, kdy jsme začali",
    text: "Firma navazuje na úklidovou společnost Sloupenský, která myje okna v Olomouckém kraji přes třicet let. Vaše okna nebudou náš první pokus.",
  },
  {
    cislo: "10 mil. Kč",
    titulek: "Pojištění odpovědnosti",
    text: "Jsme pojištěni na škody způsobené třetí osobě u pojišťovny Kooperativa. Kdyby se cokoli stalo, jste krytí — písemně, ne slibem.",
  },
  {
    cislo: "12+ měst",
    titulek: "Jezdíme po celém kraji",
    text: "Olomouc, Přerov, Prostějov, Šternberk, Litovel, Uničov, Zábřeh, Šumperk a okolí. Dopravu v Olomouci neúčtujeme.",
  },
  {
    cislo: "BRC",
    titulek: "Certifikovaná kvalita",
    text: "Pomohli jsme klientovi získat certifikát BRC Global Standard — nejpřísnější normu čistoty v potravinářství. Stejné nároky držíme u každé zakázky.",
  },
];

export default function Page() {
  return (
    <main className="stranka">
      {/* ===== HERO ===== */}
      <header className="hero">
        <div className="hero-vnitrek">
          <div className="hero-hlava">
            <span className="wordmark">
              DAP<span className="wordmark-clean">CLEAN</span>
            </span>
            <span className="hero-lokalita">Olomouc · od 1992</span>
          </div>

          <h1 className="hero-titulek">
            <span className="radek radek-1">Sklo tak čisté,</span>
            <span className="radek radek-2 setrene">že zapomenete,</span>
            <span className="radek radek-3">že tam je.</span>
          </h1>

          <p className="hero-podtitulek">
            Profesionální mytí oken pro byty, kanceláře a výlohy v Olomouci
            a celém kraji. Bez šmouh, bez lešení, s pojištěním na 10 milionů.
          </p>

          <div className="hero-akce">
            <a className="tlacitko tlacitko-plne" href="tel:+420585000000">
              Zavolat a domluvit termín
            </a>
            <a className="tlacitko tlacitko-obrys" href="mailto:info@dapclean.cz">
              Napsat e-mail
            </a>
          </div>
        </div>

        {/* Signature: stěrka táhne čistý pruh přes "zamlžené" sklo */}
        <div className="sterka-pas" aria-hidden="true">
          <div className="sklo-mlha"></div>
          <div className="sklo-ciste"></div>
          <div className="sterka">
            <div className="sterka-guma"></div>
            <div className="sterka-telo"></div>
            <div className="sterka-rukojet"></div>
          </div>
          <div className="kapky">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </header>

      {/* ===== SLUŽBY ===== */}
      <section className="sluzby" aria-labelledby="sluzby-nadpis">
        <div className="sekce-vnitrek">
          <p className="eyebrow">Co pro vás umyjeme</p>
          <h2 id="sluzby-nadpis" className="sekce-titulek">
            Čtyři druhy práce.
            <br />
            Jeden výsledek: průhledné sklo.
          </h2>

          <div className="tabule-mriz">
            {sluzby.map((s) => (
              <article className="tabule" key={s.nazev}>
                <div className="tabule-odraz" aria-hidden="true"></div>
                <h3 className="tabule-nazev">{s.nazev}</h3>
                <p className="tabule-popis">{s.popis}</p>
                <p className="tabule-detail">{s.detail}</p>
              </article>
            ))}
          </div>

          <p className="sluzby-pozn">
            Kromě oken zajistíme i čištění koberců, čalounění a kompletní úklid
            kanceláří či hal — vše jedna parta, jedna faktura.
          </p>
        </div>
      </section>

      {/* ===== DŮVĚRA ===== */}
      <section className="duvera" aria-labelledby="duvera-nadpis">
        <div className="sekce-vnitrek">
          <p className="eyebrow eyebrow-svetly">Proč nám lidé svěřují svá okna</p>
          <h2 id="duvera-nadpis" className="sekce-titulek sekce-titulek-svetly">
            Třicet let na štaflích
            <br />v Olomouckém kraji.
          </h2>

          <div className="duvera-mriz">
            {duvody.map((d) => (
              <div className="duvera-polozka" key={d.titulek}>
                <p className="duvera-cislo">{d.cislo}</p>
                <h3 className="duvera-titulek">{d.titulek}</h3>
                <p className="duvera-text">{d.text}</p>
              </div>
            ))}
          </div>

          <blockquote className="citace">
            <p className="citace-text">
              „Myjí nám výlohy prodejny na Horním náměstí každý měsíc už pátým
              rokem. Přijedou, umyjí, nezdržují provoz. Přesně to od takové
              služby chcete.“
            </p>
            <footer className="citace-autor">
              — vedoucí prodejny, centrum Olomouce
            </footer>
          </blockquote>
        </div>
      </section>
    </main>
  );
}
