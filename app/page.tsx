// ADAT s.r.o. — stavby od základu, Pardubice
// Statický náhled: hero + služby + reference/důvěra

const sluzby = [
  {
    tag: "Hrubá stavba → klíč",
    nazev: "Novostavby",
    text: "Provedeme vás stavbou domu od projektu po kolaudaci. Nákup materiálu, řemeslníci i organizace celé výstavby — to všechno bereme na sebe.",
  },
  {
    tag: "Diagnostika → realizace",
    nazev: "Rekonstrukce",
    text: "Rekonstrukce bývá náročnější než novostavba. Navrhneme optimální hloubku zásahu pro vaši nemovitost a zaručíme hladký průběh prací.",
  },
  {
    tag: "Pozemek → projekt",
    nazev: "Development",
    text: "Máme za sebou úspěšné projekty od dostupných bytů po luxusní bydlení. Připravujeme další v atraktivních lokalitách Pardubicka.",
  },
  {
    tag: "Zateplení → dotace",
    nazev: "Úspory energií",
    text: "Zateplení a výměna oken jsou první krok. Jako odborný dodavatel programu Nová zelená úsporám vám pomůžeme získat dotaci i pro váš dům.",
  },
  {
    tag: "Vyhledání → koupě",
    nazev: "Investice do nemovitostí",
    text: "Hledáte nemovitost pro firmu či rodinu, nebo přemýšlíte o prodeji? Ozvěte se — pomůžeme vám najít nejlepší podmínky.",
  },
  {
    tag: "Předání → provoz",
    nazev: "Správa budov",
    text: "Stavbou to u nás nekončí. Postaráme se o správu bytových domů, které jsme postavili nebo zrekonstruovali.",
  },
];

const reference = [
  {
    kota: "±0,000",
    nazev: "Sakařova vila",
    misto: "Pardubice — Bílé Předměstí",
    text: "Unikátní stavba v srdci Pardubic. Od počátku koncipovaná jako luxusní bydlení s nejmodernějšími technologiemi a stavebními postupy.",
    typ: "Novostavba",
  },
  {
    kota: "+3,250",
    nazev: "Bytový dům NOVÁ 300",
    misto: "Pardubice",
    text: "Rekonstrukce domu o 40 bytových jednotkách s komerčními prostory v přízemí. Před domem jsme vybudovali parkoviště pro vlastníky bytů.",
    typ: "Rekonstrukce",
  },
  {
    kota: "+6,500",
    nazev: "Bytový dům Studánka",
    misto: "Pardubice — Studánka",
    text: "20 bytových jednotek v nadstandardním provedení v klidné lokalitě u studánecké školy. Vlastní developerský projekt od pozemku po předání.",
    typ: "Development",
  },
  {
    kota: "+9,750",
    nazev: "Rodinný dům Studánka",
    misto: "Pardubice — Studánka",
    text: "Ukázka komplexnosti našich služeb: pro investora jsme vybrali a koupili vhodnou nemovitost, kterou jsme následně kompletně zrekonstruovali.",
    typ: "Investice + rekonstrukce",
  },
];

export default function Page() {
  return (
    <main className="adat">
      {/* ── HERO ─────────────────────────────────── */}
      <header className="hero" aria-label="ADAT — stavby od základu">
        <div className="hero-topbar">
          <span className="wordmark" aria-label="ADAT, stavby od základu">
            <span className="wordmark-name">ADAT</span>
            <span className="wordmark-sub">stavby od základu</span>
          </span>
          <span className="hero-loc">Pardubice · IČ 60203846 · od r. 1994</span>
        </div>

        <div className="hero-body">
          <p className="hero-kota" aria-hidden="true">
            <span className="kota-mark">▼</span> ±0,000
          </p>
          <h1 className="hero-title">
            <span className="hero-line hero-line-1">Od základové</span>
            <span className="hero-line hero-line-2">desky</span>
            <span className="hero-line hero-line-3">po kolaudaci.</span>
          </h1>
          <p className="hero-lead">
            Stavební firma z Pardubic. Novostavby, rekonstrukce a vlastní
            developerské projekty — jedna smlouva, jeden stavbyvedoucí,
            jedno telefonní číslo po celou dobu stavby.
          </p>
          <div className="hero-actions">
            <a className="btn btn-solid" href="tel:+420602190000">
              Zavolat: 602 190 000
            </a>
            <a className="btn btn-line" href="#reference">
              Prohlédnout stavby
            </a>
          </div>
        </div>

        {/* signature: výškové kóty jako na stavebním řezu */}
        <div className="hero-rez" aria-hidden="true">
          <div className="rez-line rez-line-a">
            <span>+9,750 — atika</span>
          </div>
          <div className="rez-line rez-line-b">
            <span>+6,500 — 2. NP</span>
          </div>
          <div className="rez-line rez-line-c">
            <span>+3,250 — 1. NP</span>
          </div>
          <div className="rez-zaklad">
            <span>−1,200 — základová spára</span>
          </div>
        </div>
      </header>

      {/* ── SLUŽBY ───────────────────────────────── */}
      <section className="sluzby" aria-labelledby="sluzby-h">
        <div className="sec-head">
          <p className="sec-eyebrow">Co pro vás postavíme a zařídíme</p>
          <h2 id="sluzby-h" className="sec-title">
            Šest řemesel pod jednou smlouvou
          </h2>
          <p className="sec-lead">
            Nemusíte shánět projektanta, zedníky ani papíry na úřadech.
            U nás dostanete celou stavbu jako jednu službu — a víte, komu volat.
          </p>
        </div>

        <ul className="sluzby-grid">
          {sluzby.map((s) => (
            <li key={s.nazev} className="sluzba">
              <p className="sluzba-tag">{s.tag}</p>
              <h3 className="sluzba-nazev">{s.nazev}</h3>
              <p className="sluzba-text">{s.text}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* ── REFERENCE ────────────────────────────── */}
      <section className="refs" id="reference" aria-labelledby="refs-h">
        <div className="sec-head sec-head-dark">
          <p className="sec-eyebrow">Reference z Pardubic a okolí</p>
          <h2 id="refs-h" className="sec-title">
            Stavby, kolem kterých chodíte
          </h2>
          <p className="sec-lead">
            Nestavíme anonymně. Každý projekt v seznamu si můžete přijít
            prohlédnout — stojí pár minut od centra Pardubic.
          </p>
        </div>

        <ol className="refs-list">
          {reference.map((r) => (
            <li key={r.nazev} className="ref">
              <div className="ref-kota" aria-hidden="true">
                <span className="ref-kota-mark">▼</span>
                <span className="ref-kota-num">{r.kota}</span>
              </div>
              <div className="ref-body">
                <p className="ref-typ">{r.typ}</p>
                <h3 className="ref-nazev">{r.nazev}</h3>
                <p className="ref-misto">{r.misto}</p>
                <p className="ref-text">{r.text}</p>
              </div>
            </li>
          ))}
        </ol>

        <div className="refs-duvera">
          <div className="duvera-item">
            <p className="duvera-cislo">30&nbsp;let</p>
            <p className="duvera-pop">stavíme v Pardubicích a okolí — od r. 1994</p>
          </div>
          <div className="duvera-item">
            <p className="duvera-cislo">60+</p>
            <p className="duvera-pop">bytových jednotek postavených či zrekonstruovaných</p>
          </div>
          <div className="duvera-item">
            <p className="duvera-cislo">NZÚ</p>
            <p className="duvera-pop">odborný dodavatel programu Nová zelená úsporám</p>
          </div>
          <div className="duvera-item">
            <p className="duvera-cislo">2</p>
            <p className="duvera-pop">jednatelé osobně na každé stavbě — Kačmarik &amp; Bartheldy</p>
          </div>
        </div>
      </section>
    </main>
  );
}
