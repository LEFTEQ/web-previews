import type { CSSProperties } from "react";

export default function Page() {
  const sluzby = [
    {
      code: "MZ",
      title: "Mzdové účetnictví",
      desc: "Zpracujeme mzdy vašich zaměstnanců přesně a v termínu. Výplatní pásky, odvody na sociální a zdravotní, roční zúčtování daně — hlídáme za vás každou lhůtu.",
    },
    {
      code: "FÚ",
      title: "Finanční účetnictví",
      desc: "Kompletní vedení účetnictví pro s.r.o. i OSVČ. Faktury, banka, DPH, závěrky — vždy víte, jak na tom firma stojí, ne až v březnu.",
    },
    {
      code: "DP",
      title: "Daňová přiznání",
      desc: "Přiznání k dani z příjmů, DPH i silniční daně. Sestavíme, zkontrolujeme a podáme elektronicky, ať se vás finanční úřad neptá dvakrát.",
    },
    {
      code: "MÚ",
      title: "Mzdová účetní na míru",
      desc: "Nechcete vlastní účtárnu? Pronajmeme vám zkušenou mzdovou účetní přesně na kapacitu, kterou potřebujete — bez náboru a bez zástupu při dovolené.",
    },
    {
      code: "PP",
      title: "Pracovní právo",
      desc: "Smlouvy, dohody, ukončení pracovního poměru. Poradíme dřív, než z drobnosti vznikne spor s inspektorátem práce.",
    },
    {
      code: "AU",
      title: "Audit a kontrola",
      desc: "Nezávislé ověření účetnictví a mzdové agendy. Najdeme, kde se schovávají chyby, a řekneme rovnou, jak je napravit.",
    },
  ];

  const cisla = [
    { n: "30+", l: "let vedeme účetnictví" },
    { n: "927", l: "klientů se na nás spoléhá" },
    { n: "25.", l: "každého měsíce mají zaměstnanci pásky" },
  ];

  return (
    <main className="pg">
      {/* HERO */}
      <header className="top">
        <a className="mark" href="#" aria-label="Elanor — účetnictví">
          <span className="mark__e">e</span>lanor
          <span className="mark__dot">.</span>
        </a>
        <nav className="nav" aria-label="Hlavní">
          <a href="#sluzby">Služby</a>
          <a href="#duvera">O nás</a>
          <a className="nav__cta" href="#kontakt">České Budějovice</a>
        </nav>
      </header>

      <section className="hero" aria-labelledby="hero-h">
        <div className="hero__ledger" aria-hidden="true">
          <div className="led__row"><span>Počáteční stav</span><span className="num">1 240 900</span></div>
          <div className="led__row"><span>Mzdy · duben</span><span className="num neg">− 318 640</span></div>
          <div className="led__row"><span>Odvody OSSZ, ZP</span><span className="num neg">− 141 220</span></div>
          <div className="led__row"><span>Přijaté faktury</span><span className="num">＋ 402 500</span></div>
          <div className="led__row led__sum"><span>Zůstatek k 25. 4.</span><span className="num">1 183 540</span></div>
        </div>

        <div className="hero__body">
          <p className="eyebrow">Účetní kancelář · České Budějovice</p>
          <h1 id="hero-h">
            Účetnictví, které <em>sedí</em>
            <br />na haléř.
          </h1>
          <p className="lead">
            Vedeme mzdy a účetnictví jihočeským firmám a živnostníkům.
            Vy podnikáte, my hlídáme čísla, termíny i finanční úřad — a na konci
            měsíce vám řekneme, jak na tom skutečně jste.
          </p>
          <div className="hero__act">
            <a className="btn" href="#kontakt">Domluvit schůzku</a>
            <a className="btn btn--ghost" href="#sluzby">Co pro vás uděláme</a>
          </div>
        </div>

        <figure className="hero__img">
          <img src="/hero.webp" alt="Účetní kancelář Elanor v Českých Budějovicích — pracovní stůl s doklady a výkazy" />
        </figure>
      </section>

      {/* SLUŽBY */}
      <section className="sluzby" id="sluzby" aria-labelledby="sl-h">
        <div className="sec__head">
          <p className="eyebrow">Co účtujeme</p>
          <h2 id="sl-h">Šest agend, o které se nemusíte starat</h2>
        </div>
        <ul className="grid">
          {sluzby.map((s) => (
            <li className="card" key={s.code}>
              <span className="card__code" aria-hidden="true">{s.code}</span>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* DŮVĚRA */}
      <section className="duvera" id="duvera" aria-labelledby="du-h">
        <figure className="duvera__img">
          <img src="/section-2.webp" alt="Tým účetních Elanor při konzultaci nad podklady klienta" />
        </figure>
        <div className="duvera__body">
          <p className="eyebrow">Proč Elanor</p>
          <h2 id="du-h">Přes 30 let počítáme cizí peníze tak, jako by byly naše</h2>
          <p className="duvera__lead">
            Nejsme vzdálený portál ani software, kde na chybu přijdete sami.
            Máte svou účetní, které zavoláte a která zná vaši firmu jménem.
            V Českých Budějovicích jsme doma a naši klienti to poznají
            na rychlosti odpovědí i na klidu před uzávěrkou.
          </p>
          <dl className="stats">
            {cisla.map((c) => (
              <div className="stat" key={c.l}>
                <dt className="stat__n">{c.n}</dt>
                <dd className="stat__l">{c.l}</dd>
              </div>
            ))}
          </dl>

          <blockquote className="quote">
            <p>
              „Elanor je pro nás už řadu let spolehlivý partner při vedení
              mzdové a personální agendy. Přesnost a klidný přístup — přesně to
              od účetní čekáme.“
            </p>
            <footer><span className="quote__who">Pavel Buryánek</span> · personální ředitel</footer>
          </blockquote>
        </div>
      </section>
    </main>
  );
}
