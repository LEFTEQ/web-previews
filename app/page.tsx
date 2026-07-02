const technologie = [
  {
    kod: "CMYK",
    nazev: "Velkoformátový tisk",
    popis:
      "Bannery, plachty, plakáty i tisk na desky. Tiskneme ve velkém rozlišení, laminujeme proti slunci a dešti — venkovní reklama vydrží roky, ne měsíce.",
    detail: "solventní i UV tisk · laminace · řez na míru",
  },
  {
    kod: "Ø 6 mm",
    nazev: "3D fréza a gravírování",
    popis:
      "Frézujeme písmena a loga z plexiskla, dibondu, PVC i dřeva. Gravírujeme do kovu i plastu — štítky, raznice, cedule, které přežijí každé počasí.",
    detail: "plexi · dibond · PVC · kov · výroba raznic",
  },
  {
    kod: "KISS-CUT",
    nazev: "Řezaná grafika a polepy",
    popis:
      "Polepy dodávek, výloh a firemních vozů. Fólii vyřežeme, aplikujeme na místě a odvezete si auto, které za vás dělá reklamu na každé křižovatce v Brně.",
    detail: "polepy vozidel · výlohy · orientační systémy",
  },
  {
    kod: "RGB→CMYK",
    nazev: "Grafické návrhy a DTP",
    popis:
      "Návrh připravíme tak, aby ve výrobě fungoval — se spadávkou, správným profilem barev a v křivkách. Od vizitky po celou fasádu prodejny.",
    detail: "logotypy · tiskoviny · příprava dat do tisku",
  },
  {
    kod: "LED 6500K",
    nazev: "Světelná a 3D reklama",
    popis:
      "Prosvětlená písmena, světelné panely a poutače. Vyrobíme, přivezeme, namontujeme a zapojíme — vaše firma bude vidět i po setmění.",
    detail: "LED moduly · montáž · revize elektro",
  },
  {
    kod: "1:1",
    nazev: "Panely a poutače",
    popis:
      "Reklamní plochy, áčka před obchod, navigační cedule v areálu. Zaměříme na místě, vyrobíme v dílně a nainstalujeme tak, aby to drželo.",
    detail: "zaměření · výroba · montáž po Brně a okolí",
  },
];

const duvody = [
  {
    rok: "1996",
    titulek: "Na brněnském trhu od roku 1996",
    text: "Osmadvacet let vyrábíme reklamu pro brněnské firmy. Většina zákazníků se vrací — protože ví, co od nás dostane a kdy.",
  },
  {
    rok: "1 dílna",
    titulek: "Návrh i výroba pod jednou střechou",
    text: "Grafik sedí deset metrů od frézy. Když je potřeba něco upravit, řeší se to hned u stroje — ne e-mailem přes tři dodavatele.",
  },
  {
    rok: "Brno",
    titulek: "Přijedeme, zaměříme, namontujeme",
    text: "Polep dodávky, výloha na Masarykově, poutač u vjezdu do areálu — v Brně a okolí jsme u vás do pár dnů, včetně montáže.",
  },
];

export default function Page() {
  return (
    <main className="jd">
      {/* ===== HERO ===== */}
      <header className="hero">
        <div className="hero-topbar">
          <span className="wordmark">
            J.D.<span className="wordmark-agency">Agency</span>
          </span>
          <span className="hero-meta">Výroba reklam · Brno · od 1996</span>
        </div>

        <div className="hero-body">
          <p className="hero-eyebrow" aria-hidden="true">
            <span className="reg reg-c">C</span>
            <span className="reg reg-m">M</span>
            <span className="reg reg-y">Y</span>
            <span className="reg reg-k">K</span>
            <span className="reg-label">soutisk v pořádku — jedeme</span>
          </p>

          <h1 className="hero-title">
            <span className="hero-line hero-line-1">Vyrobíme reklamu,</span>
            <span className="hero-line hero-line-2">
              kterou v&nbsp;Brně{" "}
              <span className="hero-cut">
                nepřehlédnete
                <svg
                  className="cut-path"
                  viewBox="0 0 100 12"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                >
                  <path
                    d="M0 6 L100 6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeDasharray="7 5"
                    fill="none"
                  />
                </svg>
              </span>
            </span>
          </h1>

          <p className="hero-sub">
            Od grafického návrhu po montáž na fasádu. Velkoformátový tisk, 3D
            fréza, polepy vozidel i světelná reklama — všechno v&nbsp;jedné
            dílně, bez přeprodávání.
          </p>

          <div className="hero-actions">
            <a className="btn btn-primary" href="tel:+420541218637">
              Zavolat 541 218 637
            </a>
            <a className="btn btn-ghost" href="mailto:reklama@jd-agency.cz">
              Poslat poptávku e-mailem
            </a>
          </div>
        </div>

        {/* Signature: ořezové značky + soutiskové terče jako z tiskového archu */}
        <div className="cropmark cm-tl" aria-hidden="true" />
        <div className="cropmark cm-tr" aria-hidden="true" />
        <div className="cropmark cm-bl" aria-hidden="true" />
        <div className="cropmark cm-br" aria-hidden="true" />

        <div className="hero-strip" aria-hidden="true">
          <span className="strip-c" />
          <span className="strip-m" />
          <span className="strip-y" />
          <span className="strip-k" />
        </div>
      </header>

      {/* ===== SEKCE: TECHNOLOGIE / SLUŽBY ===== */}
      <section className="sluzby" aria-labelledby="sluzby-h">
        <div className="section-head">
          <p className="section-eyebrow">Co umí naše dílna</p>
          <h2 id="sluzby-h" className="section-title">
            Šest technologií, jedna adresa
          </h2>
          <p className="section-lead">
            Nemusíte obcházet tiskárnu, frézaře a montážníky zvlášť. Zakázku u
            nás projde návrhem, výrobou i montáží — a vy řešíte jen jednu
            fakturu.
          </p>
        </div>

        <div className="sluzby-grid">
          {technologie.map((t) => (
            <article className="karta" key={t.nazev}>
              <div className="karta-kod">{t.kod}</div>
              <h3 className="karta-nazev">{t.nazev}</h3>
              <p className="karta-popis">{t.popis}</p>
              <p className="karta-detail">{t.detail}</p>
            </article>
          ))}
        </div>
      </section>

      {/* ===== SEKCE: DŮVĚRA ===== */}
      <section className="duvera" aria-labelledby="duvera-h">
        <div className="duvera-inner">
          <div className="section-head section-head-inverse">
            <p className="section-eyebrow">Proč J.D. Agency</p>
            <h2 id="duvera-h" className="section-title">
              Řemeslo, které v&nbsp;Brně stojí od roku 1996
            </h2>
          </div>

          <div className="duvera-grid">
            {duvody.map((d) => (
              <article className="duvod" key={d.titulek}>
                <p className="duvod-rok">{d.rok}</p>
                <h3 className="duvod-titulek">{d.titulek}</h3>
                <p className="duvod-text">{d.text}</p>
              </article>
            ))}
          </div>

          <blockquote className="duvera-cit">
            <p>
              „Polep tří dodávek jsme potřebovali do týdne kvůli veletrhu.
              Zaměřili je v&nbsp;pondělí, ve čtvrtek jsme jezdili polepení.
              Přesně tohle od dodavatele čekáte — a málokdy dostanete.“
            </p>
            <footer className="cit-autor">
              — vedoucí provozu, stavební firma z&nbsp;Brna-Slatiny
            </footer>
          </blockquote>
        </div>
      </section>
    </main>
  );
}
