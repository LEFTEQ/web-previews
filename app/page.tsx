export default function Page() {
  const languages = [
    { code: "EN", name: "angličtina", note: "přímý soudní překlad" },
    { code: "ES", name: "španělština", note: "přímý soudní překlad" },
    { code: "DE", name: "němčina", note: "ověřený externí překladatel" },
    { code: "FR", name: "francouzština", note: "ověřený externí překladatel" },
    { code: "RU", name: "ruština", note: "ověřený externí překladatel" },
    { code: "IT", name: "italština", note: "ověřený externí překladatel" },
  ];

  const services = [
    {
      n: "01",
      title: "Soudní překlad s razítkem",
      body:
        "Ověřený překlad svázaný trikolorou s originálem nebo notářskou kopií. Přímo z a do angličtiny a španělštiny, ostatní jazyky ve spolupráci s prověřenými soudními překladateli. Pro rodné listy, diplomy, výpisy z rejstříku, smlouvy i plné moci.",
    },
    {
      n: "02",
      title: "Elektronický soudní překlad",
      body:
        "Novinka od 1. 5. 2024. Výstupem je soubor PDF/A s kvalifikovaným elektronickým podpisem a časovým razítkem — plnohodnotná náhrada papírového razítka. Kdykoli jej necháte zkonvertovat do listinné podoby na Czech POINTu nebo u notáře.",
    },
    {
      n: "03",
      title: "Běžné a odborné překlady",
      body:
        "Firemní korespondence, weby, manuály, marketingové texty i právní a technická dokumentace. Bez razítka, s důrazem na terminologii vašeho oboru a jednotný slovník napříč zakázkami.",
    },
  ];

  return (
    <main className="pg">
      <header className="nav" aria-label="Hlavní">
        <a className="wm" href="#" aria-label="Apollo Service Agency, domů">
          <span className="wm-a">Apollo</span>
          <span className="wm-b">Service Agency</span>
        </a>
        <nav className="nav-links">
          <a href="#sluzby">Služby</a>
          <a href="#o-nas">O agentuře</a>
          <a className="nav-cta" href="tel:+420773954399">773 954 399</a>
        </nav>
      </header>

      <section className="hero" aria-labelledby="hero-nadpis">
        <div className="hero-copy">
          <p className="eyebrow">Soudní překlady · Brno · od roku 2009</p>
          <h1 id="hero-nadpis">
            <span className="stamp" aria-hidden="true">✓ ověřeno</span>
            Překlad, který <em>obstojí</em> u úřadu i&nbsp;u soudu.
          </h1>
          <p className="lede">
            Soudní překlady z&nbsp;a do angličtiny a&nbsp;španělštiny přímo od nás —
            se svázaným razítkem, nebo elektronicky v&nbsp;PDF/A s&nbsp;kvalifikovaným
            podpisem. Akreditovaná agentura se sídlem v&nbsp;Brně.
          </p>
          <div className="hero-actions">
            <a className="btn" href="tel:+420773954399">Zavolat 773 954 399</a>
            <a className="btn-ghost" href="mailto:preklady@apollo.cz">preklady@apollo.cz</a>
          </div>
          <dl className="hero-facts">
            <div><dt>EN · ES</dt><dd>přímo od nás</dd></div>
            <div><dt>PDF/A</dt><dd>elektronické razítko</dd></div>
            <div><dt>Kobližná 2</dt><dd>osobně po dohodě</dd></div>
          </dl>
        </div>
        <figure className="hero-fig">
          <img src="/hero.webp" alt="Soudní překlad svázaný trikolorou s otiskem kulatého razítka soudního překladatele" loading="eager" />
          <figcaption>Doložka a razítko soudního překladatele — každý překlad projde touto kontrolou.</figcaption>
        </figure>
      </section>

      <section className="sluzby" id="sluzby" aria-labelledby="sluzby-nadpis">
        <div className="sec-head">
          <p className="eyebrow eyebrow--dark">Co pro vás přeložíme</p>
          <h2 id="sluzby-nadpis">Tři cesty k&nbsp;jednomu razítku</h2>
        </div>
        <ol className="cards">
          {services.map((s) => (
            <li className="card" key={s.n}>
              <span className="card-n" aria-hidden="true">{s.n}</span>
              <h3>{s.title}</h3>
              <p>{s.body}</p>
            </li>
          ))}
        </ol>

        <div className="langs">
          <div className="langs-head">
            <h3>Jazyky</h3>
            <p>Angličtinu a&nbsp;španělštinu překládáme soudně přímo. Zbytek přes prověřené kolegy.</p>
          </div>
          <ul className="lang-grid">
            {languages.map((l) => (
              <li className="lang" key={l.code}>
                <span className="lang-code">{l.code}</span>
                <span className="lang-name">{l.name}</span>
                <span className="lang-note">{l.note}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="o-nas" id="o-nas" aria-labelledby="onas-nadpis">
        <figure className="onas-fig">
          <img src="/section-1.webp" alt="Pracovní stůl překladatele s dokumenty a kulatým razítkem v kanceláři COWO Brno" loading="lazy" />
        </figure>
        <div className="onas-copy">
          <p className="eyebrow eyebrow--dark">O agentuře</p>
          <h2 id="onas-nadpis">Malá brněnská agentura, na kterou se úřady spolehnou</h2>
          <p className="onas-lede">
            Apollo Service Agency vede překlady i&nbsp;letenky pod jednou střechou už&nbsp;od roku 2009.
            Sídlíme v&nbsp;Brně a&nbsp;osobní schůzky vyřídíme po předchozí domluvě ve sdílené
            kanceláři COWO na&nbsp;Kobližné&nbsp;2, ve&nbsp;3.&nbsp;patře.
          </p>

          <ul className="trust">
            <li>
              <span className="trust-k">Akreditovaná IATA agentura</span>
              <span className="trust-v">Zkušenost i&nbsp;s&nbsp;firemními zakázkami a&nbsp;letenkami.</span>
            </li>
            <li>
              <span className="trust-k">Přímý soudní překlad EN a&nbsp;ES</span>
              <span className="trust-v">Bez mezičlánků — rychleji a&nbsp;za jasnou cenu.</span>
            </li>
            <li>
              <span className="trust-k">Elektronické razítko od&nbsp;2024</span>
              <span className="trust-v">PDF/A s&nbsp;kvalifikovaným podpisem a&nbsp;časovým razítkem.</span>
            </li>
          </ul>

          <div className="onas-kontakt">
            <figure className="kontakt-fig">
              <img src="/section-2.webp" alt="Sdílená kancelář COWO Brno na adrese Kobližná 2" loading="lazy" />
            </figure>
            <address className="adresa">
              <p className="adresa-nazev">Apollo Service Agency, s.r.o.</p>
              <p>Maškova 4, 614 00 Brno</p>
              <p className="adresa-mala">Osobně po dohodě: COWO Brno, Kobližná 2, 3.&nbsp;patro</p>
              <p className="adresa-tel">
                <a href="tel:+420773954399">773 954 399</a> ·{" "}
                <a href="mailto:preklady@apollo.cz">preklady@apollo.cz</a>
              </p>
              <p className="adresa-ico">IČ 28304977 · DIČ CZ28304977 · zapsáno u&nbsp;KS v&nbsp;Brně, odd.&nbsp;C, vl.&nbsp;59993</p>
            </address>
          </div>
        </div>
      </section>
    </main>
  );
}
