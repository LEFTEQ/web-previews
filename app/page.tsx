const sluzby = [
  {
    nazev: "Rekonstrukce koupelen a bytových jader",
    popis:
      "Vybouráme umakartové jádro, vyzdíme nové, položíme obklady a dlažbu, zapojíme vodu i elektřinu. Koupelnu předáme hotovou — od návrhu po poslední spáru.",
    detail: "Nejčastěji 2–3 týdny od bourání po předání",
  },
  {
    nazev: "Rekonstrukce bytů a rodinných domů",
    popis:
      "Kompletní přestavby i dílčí úpravy. Jedna parta, jeden koordinátor, jedna smlouva — nemusíte shánět zedníka, elektrikáře a obkladače zvlášť.",
    detail: "Po dobu rekonstrukce nabízíme náhradní ubytování",
  },
  {
    nazev: "Půdní vestavby",
    popis:
      "Z nevyužité půdy uděláme pokoj, ložnici nebo celý byt. Připravíme projekt, zajistíme statiku, izolace, sádrokartony i finální štukové povrchy.",
    detail: "Projekt i realizace od jedné firmy",
  },
  {
    nazev: "Kompletní elektroinstalace",
    popis:
      "Silnoproud i slaboproud, nové rozvody i revize. Montujeme na klíč i subdodavatelsky pro jiné stavební firmy.",
    detail: "Včetně revizní zprávy",
  },
];

const reference = [
  {
    text: "Firma splnila všechna naše očekávání — kvalita provedení včetně složitých detailů, cena i termín. Nad rámec zvyklostí nám nabídla ubytování po dobu rekonstrukce a nepožadovala žádnou zálohu.",
    autor: "pan Dolanský",
    misto: "Pardubice",
    zakazka: "kompletní rekonstrukce",
  },
  {
    text: "Kromě vyzdění jádra firma připravila kuchyňskou linku a položila nové lino v celém bytě. Všechny práce na sebe navazovaly a termín byl v pohodě dodržen. Musím pochválit i výbornou komunikaci.",
    autor: "paní Borovcová",
    misto: "Pardubice",
    zakazka: "bytové jádro",
  },
  {
    text: "Na rekonstrukci jádra jsem vypsal výběrové řízení a vybral JAMICH. Po dokončení musím kvitovat perfektní přístup a okamžité řešení vzniklých problémů. Nesmírně seriózní a kvalitní firma.",
    autor: "pan Hýsek",
    misto: "Chrudim",
    zakazka: "bytové jádro",
  },
  {
    text: "Byly použity kvalitní materiály na doporučení pana Nováka. Veškeré dotazy byly ihned zodpovězeny. Časem plánuji rekonstrukci 1. patra a rozhodně budu chtít, aby ji dělal zase JAMICH.",
    autor: "pan Scháněl",
    misto: "Pardubice",
    zakazka: "rekonstrukce domu",
  },
];

export default function Page() {
  return (
    <main className="jm">
      {/* ================= HERO ================= */}
      <header className="hero">
        <div className="hero-inner">
          <div className="hero-top">
            <span className="wordmark" aria-label="JAMICH s.r.o.">
              JAMICH<span className="wordmark-dot">×</span>
            </span>
            <a className="hero-tel" href="tel:+420737511202">
              +420 737 511 202
            </a>
          </div>

          <div className="hero-main">
            <p className="hero-eyebrow">
              Štukatérství &amp; rekonstrukce — Pardubice a okolí
            </p>
            <h1 className="hero-title">
              <span className="hero-line hl-1">Hladká stěna</span>
              <span className="hero-line hl-2">
                se pozná <em>rukou,</em>
              </span>
              <span className="hero-line hl-3">ne okem.</span>
            </h1>
            <p className="hero-sub">
              Štuky, koupelny, bytová jádra a půdní vestavby. Přes{" "}
              <strong>3&nbsp;000 zakázek</strong> od jedné party, která si
              práci sama koordinuje — vy jen řeknete, jak má výsledek vypadat.
            </p>
            <div className="hero-cta-row">
              <a className="btn-primary" href="tel:+420737511202">
                Zavolat a domluvit prohlídku
              </a>
              <a className="btn-ghost" href="mailto:info@jamich.cz">
                Napsat poptávku
              </a>
            </div>
          </div>

          {/* signature: štukatérská hladítková stopa — pás "tahů" přes spodek hera */}
          <div className="trowel" aria-hidden="true">
            <span className="trowel-stroke ts-1" />
            <span className="trowel-stroke ts-2" />
            <span className="trowel-stroke ts-3" />
            <span className="trowel-stroke ts-4" />
          </div>

          <ul className="hero-facts">
            <li>
              <strong>3D vizualizace</strong> projektu zdarma
            </li>
            <li>
              <strong>Bez zálohy</strong> — platíte za hotovou práci
            </li>
            <li>
              <strong>Ubytování</strong> po dobu rekonstrukce
            </li>
          </ul>
        </div>
      </header>

      {/* ================= SLUŽBY ================= */}
      <section className="sluzby" aria-labelledby="sluzby-h">
        <div className="section-inner">
          <div className="section-head">
            <p className="eyebrow">Co pro vás uděláme</p>
            <h2 id="sluzby-h">
              Od bouracího kladiva po finální štuk
            </h2>
            <p className="section-lead">
              Nemusíte skládat řemeslníky dohromady sami. Zedničinu,
              obklady, elektriku i štukatérské povrchy děláme vlastními
              lidmi — a jeden člověk za celou zakázku ručí.
            </p>
          </div>

          <div className="sluzby-grid">
            <figure className="sluzby-img">
              <img
                src="/section-1.webp"
                alt="Štukatér natahuje hladítkem čerstvý štuk na stěnu rekonstruovaného bytu"
              />
              <figcaption>
                Finální štuk natahujeme ručně, hladítkem — žádný stroj
                nepozná nerovnost dřív než dlaň.
              </figcaption>
            </figure>

            <div className="sluzby-list">
              {sluzby.map((s) => (
                <article className="sluzba" key={s.nazev}>
                  <h3>{s.nazev}</h3>
                  <p>{s.popis}</p>
                  <p className="sluzba-detail">{s.detail}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= DŮVĚRA / REFERENCE ================= */}
      <section className="duvera" aria-labelledby="duvera-h">
        <div className="section-inner">
          <div className="duvera-grid">
            <div className="duvera-intro">
              <p className="eyebrow eyebrow-light">Proč nám lidé věří</p>
              <h2 id="duvera-h">
                Zakázku vám předáme.
                <br />
                Zálohu nechceme.
              </h2>
              <p className="duvera-text">
                Jsme česká firma z Pardubic s dlouholetou tradicí.
                Pracujeme v Pardubicích, Chrudimi a okolí — takže si nás
                můžete ověřit u sousedů, ne v katalogu. Platí se až za
                hotovou, převzatou práci.
              </p>
              <figure className="duvera-img">
                <img
                  src="/section-2.webp"
                  alt="Dokončená rekonstruovaná koupelna s novými obklady od firmy JAMICH"
                />
                <figcaption>
                  Hotová koupelna v pardubickém panelovém bytě — od vybourání
                  jádra po předání za tři týdny.
                </figcaption>
              </figure>
            </div>

            <div className="reference-list">
              {reference.map((r) => (
                <blockquote className="ref" key={r.autor}>
                  <p className="ref-text">„{r.text}“</p>
                  <footer className="ref-meta">
                    <span className="ref-autor">{r.autor}</span>
                    <span className="ref-misto">
                      {r.misto} · {r.zakazka}
                    </span>
                  </footer>
                </blockquote>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
