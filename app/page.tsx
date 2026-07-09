export default function Page() {
  const phones = [
    { name: "Kateřina Michalská", role: "Asistentka — objednávky a pojistky", tel: "+420 777 936 910", href: "tel:+420777936910" },
    { name: "Mechanik + výjezdy", role: "Mobilní výměna na místě", tel: "+420 777 936 936", href: "tel:+420777936936" },
    { name: "Jiří Knížek", role: "Obchodní zástupce", tel: "+420 724 969 610", href: "tel:+420724969610" },
    { name: "Antonín Hradecký", role: "Obchodní ředitel", tel: "+420 774 322 578", href: "tel:+420774322578" },
  ];

  const sluzby = [
    {
      code: "ČS",
      title: "Výměna čelního skla",
      desc: "Prasklé nebo poškozené čelní sklo vyměníme během jediného dne. Osazujeme originální skla Splintex, Pilkington a Saint-Gobain Sekurit.",
    },
    {
      code: "BZ",
      title: "Boční a zadní skla",
      desc: "Rozbité boční nebo zadní autosklo osobního i nákladního vozu vyměníme rychle a odborně, aby vůz zůstal těsný a bezpečný.",
    },
    {
      code: "OP",
      title: "Oprava bodového poškození",
      desc: "Zacelení odštěpku po kameni na počkání. Ušetříte za celé sklo a prasklina se nešíří dál.",
    },
    {
      code: "KK",
      title: "Kalibrace kamer",
      desc: "Nově kalibrujeme asistenční kamery za čelním sklem přímo v servisu — bez objíždění po autorizovaných značkových dílnách.",
    },
    {
      code: "MV",
      title: "Mobilní výměna u vás",
      desc: "Po dohodě přijedeme a vyměníme čelní sklo tam, kde vůz stojí — včetně nákladních aut a autobusů.",
    },
    {
      code: "BF",
      title: "Bezpečnostní a tónovací fólie",
      desc: "Naneseme ochranné a tónovací fólie, které chrání sklo i posádku a snižují prohřívání interiéru.",
    },
  ];

  return (
    <main className="toro">
      <header className="nav" aria-label="Hlavní navigace">
        <a className="wordmark" href="#top" aria-label="Autosklo Toro, úvod">
          <span className="wordmark-a">AUTOSKLO</span>
          <span className="wordmark-b">TORO<span className="crack" aria-hidden="true">╱</span></span>
        </a>
        <nav className="nav-links">
          <a href="#sluzby">Služby</a>
          <a href="#servis">Provozovny</a>
          <a href="#kontakt">Kontakt</a>
        </nav>
        <a className="nav-cta" href="tel:+420777936910">777 936 910</a>
      </header>

      <section className="hero" id="top">
        <div className="hero-media">
          <img src="/hero.webp" alt="Technik osazuje nové čelní sklo do vozu v servisu Autosklo Toro" />
          <span className="hero-badge" aria-hidden="true">Praha 4 · Praha 10</span>
        </div>
        <div className="hero-copy">
          <p className="eyebrow">Autosklo Praha · od roku 2008</p>
          <h1>
            Prasklé čelní sklo?<br />
            <em>Vyměníme ho</em> ještě dnes.
          </h1>
          <p className="lede">
            Výměna čelního, bočního i zadního skla během jediného dne. Odštěpek po kameni
            zacelíme na počkání. Celou pojistnou událost vyřídíme za vás.
          </p>
          <div className="hero-actions">
            <a className="btn-primary" href="tel:+420777936910">Zavolat: 777 936 910</a>
            <a className="btn-ghost" href="#sluzby">Co vyměníme</a>
          </div>
          <ul className="hero-facts">
            <li><span>Výměna do</span><strong>24 hodin</strong></li>
            <li><span>Originální skla</span><strong>Pilkington · Sekurit</strong></li>
            <li><span>Kalibrace kamer</span><strong>u nás v servisu</strong></li>
          </ul>
        </div>
      </section>

      <section className="news" aria-label="Novinka">
        <span className="news-tag">Novinka</span>
        <p>Kalibrace asistenčních kamer za čelním sklem provádíme přímo u nás — bez objíždění značkových servisů.</p>
      </section>

      <section className="sluzby" id="sluzby">
        <div className="sec-head">
          <p className="eyebrow">Co pro vaše sklo uděláme</p>
          <h2>Od odštěpku po celé čelní sklo</h2>
          <p className="sec-lede">
            Osobní vozy, nákladní TIR i autobusy Isuzu a Beulas. Montujeme jen skla od
            originálních výrobců — protože jen odborně osazené sklo drží vůz pohromadě při nárazu.
          </p>
        </div>
        <div className="sluzby-grid">
          {sluzby.map((s) => (
            <article className="sluzba" key={s.code}>
              <span className="sluzba-code" aria-hidden="true">{s.code}</span>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </article>
          ))}
        </div>
        <div className="vozy">
          <img src="/section-1.webp" alt="Nákladní vůz a autobus připravené na výměnu autoskla ve velké hale servisu Toro" />
          <div className="vozy-copy">
            <h3>Vyměníme sklo v čemkoliv, co jezdí</h3>
            <ul>
              <li>Osobní vozidla</li>
              <li>TIR — nákladní vozidla</li>
              <li>BUS — Isuzu a Beulas (autorizovaný servis)</li>
              <li>Bodově poškozená skla na počkání</li>
            </ul>
            <p>Ve velké hale na Praze 10 zaparkuje i tahač s návěsem. Máte-li připojištěné čelní sklo, opravu i výměnu vyřídíme bez starostí.</p>
          </div>
        </div>
      </section>

      <section className="servis" id="servis">
        <div className="servis-media">
          <img src="/section-2.webp" alt="Detail práce technika Autosklo Toro s novým čelním sklem" />
        </div>
        <div className="servis-copy">
          <p className="eyebrow">Proč k nám</p>
          <h2>Pojistku vyřešíme za vás</h2>
          <p className="sec-lede">
            Jsme smluvní partner pojišťoven a přes portál CebiCom komunikujeme se pojišťovnou přímo.
            Vy jen přivezete vůz — papírování necháte na nás.
          </p>
          <div className="provozovny">
            <div className="provoz">
              <span className="provoz-mesto">Praha 10</span>
              <p>Velká hala pro všechna vozidla — od osobních aut po autobusy.</p>
            </div>
            <div className="provoz">
              <span className="provoz-mesto">Praha 4</span>
              <p>50 m od stanice metra Háje. Ideální pro rychlou opravu odštěpku.</p>
            </div>
            <div className="provoz">
              <span className="provoz-mesto">Zlín</span>
              <p>Naše další provozovna pro zákazníky na Moravě.</p>
            </div>
          </div>
          <p className="znacky">Pokuta za jízdu s prasklým čelním sklem může být až 1 000 Kč. Nečekejte, až vás zastaví hlídka.</p>
        </div>
      </section>

      <section className="kontakt" id="kontakt">
        <div className="kontakt-head">
          <p className="eyebrow">Kontakt</p>
          <h2>Zavolejte, objednáme vás na dnešek</h2>
        </div>
        <ul className="kontakt-list">
          {phones.map((p) => (
            <li key={p.tel}>
              <div>
                <strong>{p.name}</strong>
                <span>{p.role}</span>
              </div>
              <a href={p.href}>{p.tel}</a>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
