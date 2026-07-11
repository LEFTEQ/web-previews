const kategorie = [
  { idx: "01", g: "✎", t: "Psací potřeby", d: "Kuličková a gelová pera, mikrotužky, popisovače, zvýrazňovače, pastelky." },
  { idx: "02", g: "▤", t: "Papír", d: "Kopírovací, barevný i xerografický papír na tisk, psaní i běžnou agendu." },
  { idx: "03", g: "⊞", t: "Kancelářské potřeby", d: "Sešívačky, děrovačky, sponky, nůžky, lepidla, korekce i razítka." },
  { idx: "04", g: "🗄", t: "Archivace", d: "Pořadače, úložné boxy a vše pro přehledné ukládání dokumentů." },
  { idx: "05", g: "🖨", t: "Spotřební materiál", d: "Tonery, inkoustové cartridge, barvicí pásky i 3D filamenty." },
  { idx: "06", g: "✂", t: "Zpracování dokumentů", d: "Řezačky, laminátory, vazače, kroužkové vazby, flipcharty a tabule." },
  { idx: "07", g: "🎒", t: "Školní potřeby", d: "Batohy, penály, sešity, výtvarka a podložky pro školáky i školy." },
  { idx: "08", g: "☕", t: "Občerstvení do kanceláří", d: "Káva, čaje, minerálky, sušenky a drobnosti až na váš stůl." },
];

const pobocky = [
  { m: "Pardubice", tel: "+420 733 554 479", pop: "Domácí pobočka a sklad" },
  { m: "Hradec Králové", tel: "+420 736 753 681", pop: "Velkoobchod i papírnictví" },
  { m: "Žďár nad Sázavou", tel: "+420 736 753 682", pop: "Regionální pobočka" },
  { m: "Papírnictví HK", tel: "+420 602 261 726", pop: "Kamenná prodejna" },
];

export default function Page() {
  return (
    <main className="emado">
      <header className="topbar">
        <div className="wrap">
          <a className="wordmark" href="#" aria-label="Emado Pardubice, papírnictví a kancelářské potřeby">
            emado<span className="dot" aria-hidden="true" /><small>Pardubice</small>
          </a>
          <nav className="topnav" aria-label="Hlavní">
            <a href="#sortiment">Sortiment</a>
            <a href="#skoly">Pro školy</a>
            <a href="#pobocky">Pobočky</a>
            <a href="#onas">O nás</a>
          </nav>
        </div>
      </header>

      <section className="hero" aria-labelledby="hero-h">
        <div className="wrap">
          <div className="hero-grid">
            <div>
              <p className="eyebrow reveal d1">Papírnictví &amp; kancelářské potřeby · Pardubice</p>
              <h1 id="hero-h" className="reveal d2">
                Všechno pro <em>psací&nbsp;stůl</em>,<br />
                <span className="mk">až k vám do kanceláře.</span>
              </h1>
              <p className="lead reveal d3">
                Od jednoho pera po vybavení celé firmy. Objednáte, my zabalíme a dovezeme —
                perá, papír, tonery, archivaci i školní potřeby na jeden zátah.
              </p>
              <div className="hero-cta reveal d4">
                <a className="btn" href="https://www.p4o.cz">Nakoupit v e-shopu <span className="arr" aria-hidden="true">→</span></a>
                <a className="btn ghost" href="#sortiment">Prohlédnout sortiment</a>
              </div>
            </div>

            <figure className="hero-figure reveal d3">
              <img src="/hero.webp" alt="Regály plné kancelářských a školních potřeb v prodejně Emado v Pardubicích" loading="eager" />
              <figcaption className="hero-tag">Skladem &amp; k rozvozu</figcaption>
            </figure>
          </div>

          <div className="hero-strip">
            <div className="cell"><b>Pardubice</b><a href="tel:+420733554479">+420 733 554 479</a></div>
            <div className="cell"><b>Hradec Králové</b><a href="tel:+420736753681">+420 736 753 681</a></div>
            <div className="cell"><b>Žďár n. Sázavou</b><a href="tel:+420736753682">+420 736 753 682</a></div>
            <div className="cell"><b>Objednávky</b><a href="mailto:objednavky@emado.cz">objednavky@emado.cz</a></div>
          </div>
        </div>
      </section>

      <section className="section" id="sortiment" aria-labelledby="sort-h">
        <div className="wrap">
          <div className="sec-head">
            <div>
              <p className="num">Sortiment — vybíráme z tisíců položek</p>
              <h2 id="sort-h">Osm zásuvek, jeden dodavatel</h2>
            </div>
            <p>Specializovaný velkoobchod i prodejna. Co potřebuje kancelář, provozovna nebo škola, najdete pod jednou střechou — a doručíme až na stůl.</p>
          </div>

          <div className="cats">
            {kategorie.map((k) => (
              <div className="cat" key={k.idx}>
                <span className="glyph" aria-hidden="true">{k.g}</span>
                <span className="idx">{k.idx}</span>
                <h3>{k.t}</h3>
                <p>{k.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="onas" aria-labelledby="about-h">
        <div className="wrap">
          <div className="about">
            <figure className="about-media">
              <img src="/section-1.webp" alt="Připravená objednávka kancelářských potřeb Emado nachystaná k rozvozu" loading="lazy" />
            </figure>
            <div>
              <p className="num" id="skoly">O firmě — Emado Pardubice s.r.o.</p>
              <h2 id="about-h">Renomovaný dodavatel, <em>na kterého se spolehnete</em></h2>
              <p>
                Zásobujeme kanceláře, provozovny, úřady i školy po celém regionu. Máte přehledný účet,
                stálou nabídku a rozvoz vlastními vozy — bez čekání na balík a bez zbytečných dojezdů
                pro jednu chybějící věc.
              </p>

              <div className="stats">
                <div className="stat"><b>4</b><span>pobočky v kraji</span></div>
                <div className="stat"><b>2 000+</b><span>položek skladem</span></div>
                <div className="stat"><b>ZŠ &amp; MŠ</b><span>vybavíme na celý rok</span></div>
              </div>

              <ul className="branches" id="pobocky" aria-label="Naše pobočky">
                {pobocky.map((p) => (
                  <li key={p.m}>
                    <b>{p.m}</b>
                    <span>{p.pop}</span>
                    <a href={"tel:" + p.tel.replace(/\s/g, "")}>{p.tel}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
