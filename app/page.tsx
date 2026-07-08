export default function Page() {
  const services = [
    {
      id: "01",
      name: "EMS Poprvé",
      price: "990 Kč",
      lead: "Seznámení s technologií",
      body: "Nastavíme intenzitu impulzů přesně pro vaše tělo a projdeme první 20minutový trénink s osobním trenérem po boku. Nepotřebujete si nic nosit — oblek i vše ostatní dostanete u nás.",
      cta: "Rezervovat první lekci"
    },
    {
      id: "02",
      name: "EMS Znám",
      price: "990 Kč",
      lead: "Naostro, podle vašich cílů",
      body: "Máte za sebou první lekci a víte, do čeho jdete. Naplno využijeme celý svalový korzet — 85 impulzů za vteřinu, 20 minut, jeden trenér jen pro vás.",
      cta: "Domluvit termín"
    },
    {
      id: "03",
      name: "EMS Plus",
      price: "1 190 Kč",
      lead: "Se zrychlenou regenerací",
      body: "Trénink EMS Znám a hned po něm 10 minut fotobiomodulace — biohacking červeným světlem, aby se svaly zotavily rychleji a vy jste odcházeli svěží.",
      cta: "Vyzkoušet Plus"
    }
  ];

  const programs = [
    {
      name: "Nastartuj změnu",
      length: "10 týdnů",
      perWeek: "790 Kč / týden",
      total: "7 900 Kč",
      save: "Ušetříte 2 000 Kč",
      body: "Zpevníme svalový korzet, aby vás přestala bolet záda a tělo bylo odolnější. Víc aktivních svalů = tuky se pálí i po tréninku."
    },
    {
      name: "Skvělá kondice",
      length: "25 týdnů",
      perWeek: "690 Kč / týden",
      total: "17 250 Kč",
      save: "Ušetříte 7 500 Kč",
      body: "Půl roku práce, které je vidět. Budete fit, tělo nebude bolet a všechno zvládnete dál a rychleji — týdně jen 20 minut."
    }
  ];

  return (
    <main className="be">
      <header className="be-nav" aria-label="Hlavní navigace">
        <a className="be-logo" href="#" aria-label="Body Express Pardubice">
          <span className="be-logo-body">BODY</span>
          <span className="be-logo-express">EXPRESS</span>
          <span className="be-logo-loc">Pardubice</span>
        </a>
        <nav className="be-nav-links">
          <a href="#trenink">Co je EMS</a>
          <a href="#sluzby">Ceník</a>
          <a href="#duvera">Jak to chodí</a>
        </nav>
        <a className="be-nav-cta" href="tel:+420724645801">Rezervovat lekci</a>
      </header>

      <section className="be-hero">
        <img className="be-hero-img" src="/hero.webp" alt="Trénink EMS v obleku s elektrodami ve studiu Body Express Pardubice" />
        <div className="be-hero-veil" aria-hidden="true" />
        <div className="be-hero-inner">
          <p className="be-eyebrow">Osobní trenér · EMS studio · Pardubice</p>
          <h1 className="be-hero-title">
            <span className="be-hero-line">20 minut</span>
            <span className="be-hero-line be-accent">týdně stačí.</span>
          </h1>
          <p className="be-hero-sub">
            Celé tělo aktivované slabými elektrickými impulzy — stejnými, jaké si
            vytváří samo. 85 impulzů za vteřinu, jeden trenér jen pro vás a žádné
            hodiny v posilovně. Zkrátka nejrychlejší cesta do formy.
          </p>
          <div className="be-hero-actions">
            <a className="be-btn" href="tel:+420724645801">Rezervovat první lekci</a>
            <a className="be-btn be-btn-ghost" href="#trenink">Jak EMS funguje</a>
          </div>
          <dl className="be-hero-stats">
            <div><dt>85</dt><dd>impulzů za vteřinu</dd></div>
            <div><dt>1×</dt><dd>týdně stačí</dd></div>
            <div><dt>1:1</dt><dd>trenér jen pro vás</dd></div>
          </dl>
        </div>
      </section>

      <section className="be-section be-trenink" id="trenink">
        <div className="be-split">
          <div className="be-split-text">
            <p className="be-label">Co je EMS trénink</p>
            <h2 className="be-h2">Elektro‑myo‑stimulace, řízená do detailu</h2>
            <p className="be-p">
              EMS aktivuje celé tělo najednou pomocí slabých elektrických impulzů —
              stejných, jaké si sval vytváří sám, jen mnohem intenzivněji. Za jedno
              cvičení zapojíme víc vláken než při běžném tréninku, takže se tělo
              rovnoměrně zpevní a vytvaruje.
            </p>
            <ul className="be-facts">
              <li><span>Intenzivně</span> — 85 impulzů za vteřinu do každé svalové skupiny.</li>
              <li><span>Rychleji</span> — jedna lekce trvá 20 minut, jednou týdně.</li>
              <li><span>Efektivněji</span> — odstraníme svalové nerovnováhy a zvýšíme spotřebu kalorií i po tréninku.</li>
            </ul>
            <p className="be-note">
              Vším potřebným vás vybavíme na místě — žádné oblečení, tenisky ani
              pomůcky si nemusíte nosit.
            </p>
          </div>
          <figure className="be-split-media">
            <img src="/section-1.webp" alt="Osobní trenér nastavuje intenzitu EMS během lekce" />
            <figcaption>Studio Pardubice · Po–Pá 8:00–18:00</figcaption>
          </figure>
        </div>

        <div className="be-cards" aria-label="Jednotlivé lekce">
          {services.map((s) => (
            <article className="be-card" key={s.id}>
              <div className="be-card-head">
                <span className="be-card-num">{s.id}</span>
                <span className="be-card-price">{s.price}</span>
              </div>
              <h3 className="be-card-name">{s.name}</h3>
              <p className="be-card-lead">{s.lead}</p>
              <p className="be-card-body">{s.body}</p>
              <a className="be-card-cta" href="tel:+420724645801">{s.cta} →</a>
            </article>
          ))}
        </div>
      </section>

      <section className="be-section be-duvera" id="duvera">
        <div className="be-split be-split-reverse">
          <figure className="be-split-media">
            <img src="/section-2.webp" alt="Klient v EMS obleku během osobního tréninku" />
            <figcaption>Jeden trenér, jeden klient, dvacet minut</figcaption>
          </figure>
          <div className="be-split-text">
            <p className="be-label" id="sluzby">Jak to u nás chodí</p>
            <h2 className="be-h2">První lekce? Připravíme vás.</h2>
            <p className="be-p">
              Na tělo působí EMS jako opravdu intenzivní trénink. Aby vám lekce sedla,
              stačí pár drobností — a o zbytek se postaráme my.
            </p>
            <ol className="be-steps">
              <li><strong>Večer předtím bez alkoholu</strong> a s pořádným spánkem.</li>
              <li><strong>V den lekce hodně pijte</strong> — litr dopoledne, litr odpoledne.</li>
              <li><strong>Dobře se najezte</strong>, ať máte dost energie, ideálně rychlé sacharidy.</li>
              <li><strong>Přijďte tak, jak jste</strong> — oblek i vše ostatní dostanete u nás.</li>
            </ol>
          </div>
        </div>

        <div className="be-programs">
          <div className="be-programs-head">
            <h2 className="be-h2">Kurzy, které se vyplatí</h2>
            <p className="be-p be-p-muted">
              Stálý termín, váš osobní trenér a cena, která klesá s délkou kurzu.
            </p>
          </div>
          <div className="be-programs-grid">
            {programs.map((p) => (
              <article className="be-program" key={p.name}>
                <div className="be-program-top">
                  <h3>{p.name}</h3>
                  <span className="be-program-len">{p.length}</span>
                </div>
                <p className="be-program-week">{p.perWeek}</p>
                <p className="be-program-total">{p.total} <span className="be-program-save">{p.save}</span></p>
                <p className="be-p">{p.body}</p>
                <a className="be-btn be-btn-small" href="tel:+420724645801">Vybrat kurz</a>
              </article>
            ))}
          </div>
        </div>

        <aside className="be-contact">
          <p className="be-label">Rezervace a dotazy</p>
          <p className="be-contact-big">
            <a href="tel:+420724645801">+420 724 645 801</a>
          </p>
          <p className="be-contact-line">
            <a href="mailto:info@bodyexpress.cz">info@bodyexpress.cz</a> · Studio Pardubice · Po–Pá 8:00–18:00
          </p>
        </aside>
      </section>
    </main>
  );
}
