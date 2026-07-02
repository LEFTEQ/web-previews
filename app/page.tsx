const poradci = [
  {
    jmeno: "Miroslav Velát",
    role: "Daňový poradce, jednatel",
    tel: "+420 724 375 666",
    telHref: "+420724375666",
    popis: "Daně z příjmů firem a OSVČ, kontroly finančního úřadu, odklady přiznání.",
  },
  {
    jmeno: "Anna Janderová",
    role: "Daňová poradkyně",
    tel: "+420 724 375 655",
    telHref: "+420724375655",
    popis: "DPH, mezinárodní plnění, kontrolní hlášení a komunikace se správcem daně.",
  },
  {
    jmeno: "Lenka Putzerová",
    role: "Daňová poradkyně",
    tel: "+420 724 375 656",
    telHref: "+420724375656",
    popis: "Účetnictví, mzdová agenda a ekonomické poradenství pro menší firmy.",
  },
];

const sluzby = [
  {
    par: "§ 136",
    zakon: "daňový řád",
    nazev: "Daňové poradenství",
    popis:
      "Přiznání k dani z příjmů fyzických i právnických osob. S plnou mocí daňového poradce získáte automaticky odklad podání do 1. července — a čas navíc na optimalizaci.",
    detail: "Zastoupíme vás i při kontrole finančního úřadu.",
  },
  {
    par: "§ 101",
    zakon: "zákon o DPH",
    nazev: "DPH a kontrolní hlášení",
    popis:
      "Měsíční i čtvrtletní přiznání k DPH, kontrolní a souhrnná hlášení. Pohlídáme termíny, sazby i režim přenesené daňové povinnosti, abyste neplatili pokuty za formality.",
    detail: "Podáváme elektronicky, vy jen schválíte podklady.",
  },
  {
    par: "§ 4",
    zakon: "zákon o účetnictví",
    nazev: "Vedení účetnictví",
    popis:
      "Kompletní podvojné účetnictví i daňová evidence. Doklady předáte, jak vám vyhovuje — papírově v kanceláři na Jírovcově, nebo elektronicky. Uzávěrku připravíme včetně výkazů.",
    detail: "Průběžně vidíte, jak na tom firma hospodářsky je.",
  },
  {
    par: "§ 38h",
    zakon: "daň z příjmů",
    nazev: "Mzdy a personalistika",
    popis:
      "Zpracování mezd, přihlášky a odhlášky zaměstnanců, roční zúčtování daně, komunikace se zdravotními pojišťovnami a ČSSZ. Výplatní pásky včas, každý měsíc.",
    detail: "Diskrétně — mzdy vidí jen ten, kdo má.",
  },
];

export default function Page() {
  return (
    <main className="jf">
      {/* ================= HERO ================= */}
      <header className="jf-hero">
        <div className="jf-hero-inner">
          <div className="jf-topbar">
            <span className="jf-wordmark" aria-label="Jifos">
              JIFOS<span className="jf-wordmark-par">§</span>
            </span>
            <span className="jf-topbar-loc">České Budějovice · Jírovcova 32</span>
          </div>

          <div className="jf-hero-grid">
            <div className="jf-hero-copy">
              <p className="jf-eyebrow jf-rise jf-d1">
                Daňová kancelář · zapsaní daňoví poradci KDP ČR
              </p>
              <h1 className="jf-h1">
                <span className="jf-rise jf-d2">Vaše daně</span>
                <span className="jf-rise jf-d3">
                  podle <em>paragrafů</em>,
                </span>
                <span className="jf-rise jf-d4">ne podle odhadu.</span>
              </h1>
              <p className="jf-hero-sub jf-rise jf-d5">
                Tři daňoví poradci, jedna kancelář v Českých Budějovicích. Daně,
                účetnictví a mzdy vedeme od roku 1994 — a za každé přiznání ručíme
                svým podpisem.
              </p>
              <div className="jf-hero-cta jf-rise jf-d6">
                <a className="jf-btn" href="tel:+420724375666">
                  Zavolat: 724 375 666
                </a>
                <a className="jf-btn jf-btn-ghost" href="mailto:jifos@jifos.cz">
                  Napsat e-mail
                </a>
              </div>
            </div>

            {/* Signature: velký paragraf poskládaný z řádků daňového formuláře */}
            <div className="jf-hero-mark jf-rise jf-d4" aria-hidden="true">
              <div className="jf-ledger">
                <div className="jf-ledger-row"><span>ř. 101</span><span>Základ daně</span></div>
                <div className="jf-ledger-row"><span>ř. 112</span><span>Odčitatelné položky</span></div>
                <div className="jf-ledger-row jf-ledger-strong"><span>ř. 220</span><span>Daň po slevách</span></div>
                <div className="jf-ledger-row"><span>ř. 305</span><span>Zaplacené zálohy</span></div>
                <div className="jf-ledger-row jf-ledger-sum"><span>ř. 330</span><span>Přeplatek</span></div>
              </div>
              <span className="jf-par-glyph">§</span>
            </div>
          </div>

          <div className="jf-hero-terms" role="note">
            <span className="jf-term"><strong>1. 7.</strong> odklad přiznání s poradcem</span>
            <span className="jf-term"><strong>25.</strong> den v měsíci — DPH a hlášení</span>
            <span className="jf-term"><strong>30 let</strong> praxe v jižních Čechách</span>
          </div>
        </div>
      </header>

      {/* ================= SLUŽBY ================= */}
      <section className="jf-sluzby" aria-labelledby="sluzby-h">
        <div className="jf-section-head">
          <p className="jf-eyebrow">Co pro vás vedeme</p>
          <h2 id="sluzby-h" className="jf-h2">
            Kompletní ekonomický servis pod jednou střechou
          </h2>
          <p className="jf-section-sub">
            Nemusíte obíhat účetní, mzdovou účtárnu a daňového poradce zvlášť.
            Na Jírovcově to vyřídíte na jednom místě.
          </p>
        </div>

        <div className="jf-sluzby-grid">
          {sluzby.map((s) => (
            <article className="jf-karta" key={s.nazev}>
              <div className="jf-karta-par">
                <span className="jf-karta-znak">{s.par}</span>
                <span className="jf-karta-zakon">{s.zakon}</span>
              </div>
              <h3 className="jf-h3">{s.nazev}</h3>
              <p className="jf-karta-popis">{s.popis}</p>
              <p className="jf-karta-detail">{s.detail}</p>
            </article>
          ))}
        </div>
      </section>

      {/* ================= PORADCI / DŮVĚRA ================= */}
      <section className="jf-lide" aria-labelledby="lide-h">
        <div className="jf-lide-inner">
          <div className="jf-section-head jf-section-head-light">
            <p className="jf-eyebrow">Kdo se vám bude věnovat</p>
            <h2 id="lide-h" className="jf-h2">
              Tři poradci, tři přímá čísla. Žádná ústředna.
            </h2>
            <p className="jf-section-sub">
              U nás se nedovoláte call centru. Zvedne vám to člověk, který zná
              vaše účetnictví jménem i číslem řádku.
            </p>
          </div>

          <div className="jf-lide-grid">
            {poradci.map((p) => (
              <article className="jf-poradce" key={p.jmeno}>
                <h3 className="jf-h3">{p.jmeno}</h3>
                <p className="jf-poradce-role">{p.role}</p>
                <p className="jf-poradce-popis">{p.popis}</p>
                <a className="jf-poradce-tel" href={`tel:${p.telHref}`}>
                  {p.tel}
                </a>
              </article>
            ))}
          </div>

          <div className="jf-fakta">
            <div className="jf-fakt">
              <span className="jf-fakt-label">Kancelář</span>
              <span className="jf-fakt-hodnota">Jírovcova 1343/32, České Budějovice</span>
            </div>
            <div className="jf-fakt">
              <span className="jf-fakt-label">E-mail</span>
              <a className="jf-fakt-hodnota jf-fakt-link" href="mailto:jifos@jifos.cz">
                jifos@jifos.cz
              </a>
            </div>
            <div className="jf-fakt">
              <span className="jf-fakt-label">IČO / DIČ</span>
              <span className="jf-fakt-hodnota">60838311 · CZ60838311</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
