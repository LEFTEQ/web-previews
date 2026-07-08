export default function Page() {
  const ucetnictvi = [
    { b: 'Vedení účetnictví a daňové evidence', s: 'Podvojné účetnictví i evidence pro OSVČ, měsíční přehled bez papírování.' },
    { b: 'Daňová přiznání a optimalizace', s: 'DPH, daň z příjmů, silniční — sestavíme, zkontrolujeme, podáme včas.' },
    { b: 'Daňové poradenství', s: 'Konzultace před rozhodnutím, ne až po něm. Řekneme, co se vyplatí.' },
    { b: 'Mzdy a zastupování na úřadech', s: 'Výplaty, odvody a komunikace s finančním úřadem za vás.' },
  ];
  const it = [
    { b: 'Vlastní software pro účetnictví', s: 'Program pro podvojné účetnictví, který vyvíjíme a ladíme od roku 1992.' },
    { b: 'Sklad, expedice, fakturace', s: 'Přizpůsobitelné programy na míru vašim procesům, ne krabicové řešení.' },
    { b: 'Prodej a servis PC, počítačové sítě', s: 'Montáž, technický servis, výstavba sítí a podpora serverů.' },
    { b: 'Vzdálená správa a podpora uživatelů', s: 'Když se něco zasekne, přihlásíme se na dálku a vyřešíme to.' },
  ];
  return (
    <main>
      <header className="topbar">
        <div className="wrap">
          <div className="wordmark">TARZI<span className="dot">.</span><span className="est">v.o.s. · Č. BUDĚJOVICE</span></div>
          <nav className="nav" aria-label="Hlavní navigace">
            <a href="#ucetnictvi">Účetnictví &amp; daně</a>
            <a href="#it">Informační technologie</a>
            <a href="#o-nas">O firmě</a>
            <a href="#o-nas">Kontakt</a>
          </nav>
        </div>
      </header>

      <section className="hero">
        <div className="wrap">
          <div className="hero-grid">
            <div className="reveal">
              <p className="eyebrow">Daňový poradce · od roku 1992</p>
              <h1>Účetnictví, <em>daně</em> a vlastní software&nbsp;pod jednou střechou.</h1>
              <p className="lede">Přes třicet let vedeme účetnictví a daňové poradenství budějovickým firmám — a stejně dlouho k tomu píšeme vlastní programy na účetnictví, sklad a fakturaci. Řemeslo i technika z jedné kanceláře.</p>
              <div className="cta-row">
                <a className="btn btn-primary" href="tel:+420602443273">Zavolat 602&nbsp;443&nbsp;273</a>
                <a className="btn btn-ghost" href="#ucetnictvi">Co pro vás uděláme</a>
              </div>
            </div>
            <div className="hero-visual reveal d2">
              <img src="/hero.webp" alt="Pracoviště daňového poradce TARZI — účetní podklady a počítač" />
              <div className="stamp" aria-hidden="true">
                <span>ZALOŽENO<span className="yr">1992</span>Č. BUDĚJOVICE</span>
              </div>
            </div>
          </div>

          <div className="strip reveal d3">
            <div><div className="num">1992</div><div className="lbl">rok založení firmy</div></div>
            <div><div className="num">30+</div><div className="lbl">let bez přerušení</div></div>
            <div><div className="num">2 obory</div><div className="lbl">účetnictví + IT</div></div>
            <div><div className="num">vlastní SW</div><div className="lbl">účetní program in-house</div></div>
          </div>
        </div>
      </section>

      <section className="block" id="ucetnictvi">
        <div className="wrap">
          <div className="sec-head">
            <h2>Dvě řemesla, jedna kancelář</h2>
            <span className="tag">// naše nabídka</span>
          </div>
          <div className="services">
            <div className="svc-col">
              <div className="col-tag">Obor A — čísla &amp; daně</div>
              <h3>Účetnictví a daňové poradenství</h3>
              <ul className="svc-list">
                {ucetnictvi.map((x, i) => (
                  <li key={x.b}><span className="n">A{i + 1}</span><span className="t"><b>{x.b}</b><span>{x.s}</span></span></li>
                ))}
              </ul>
            </div>
            <div className="svc-col" id="it">
              <div className="col-tag">Obor B — hardware &amp; software</div>
              <h3>Informační technologie</h3>
              <ul className="svc-list">
                {it.map((x, i) => (
                  <li key={x.b}><span className="n">B{i + 1}</span><span className="t"><b>{x.b}</b><span>{x.s}</span></span></li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="block" id="o-nas">
        <div className="wrap">
          <div className="sec-head">
            <h2>Stálý tým, stálá adresa</h2>
            <span className="tag">// o firmě &amp; kontakt</span>
          </div>
          <div className="trust-grid">
            <img src="/section-1.webp" alt="Kancelář firmy TARZI v Českých Budějovicích" />
            <div className="trust-body">
              <p className="big">Od založení v roce 1992 nabízíme <b>stejnou strukturu služeb</b> — účetnictví a daně na jedné straně, informační technologie na druhé.</p>
              <p>Nejsme řetězec ani anonymní portál. Sedíme v Českých Budějovicích, číslo vám zvedne člověk, který vaše účetnictví zná. Software pro účetnictví, sklad i fakturaci vyvíjíme sami — když potřebujete něco upravit, uděláme to my, ne cizí dodavatel.</p>
              <ul className="factlist">
                <li><span>Firma</span><span>TARZI v.o.s.</span></li>
                <li><span>Adresa</span><span>J. Lomského 777/13, 370&nbsp;06 Č. Budějovice</span></li>
                <li><span>IČO / DIČ</span><span>47252383 · CZ47252383</span></li>
                <li><span>Zápis</span><span>A 2088, KS v Č. Budějovicích</span></li>
                <li><span>Telefon</span><span><a href="tel:+420602443273">602 443 273</a></span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
