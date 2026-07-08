export default function Page() {
  const listings = [
    {
      id: "01",
      title: "Podkrovní byt 8+1 s terasou",
      place: "Ostrava — centrum",
      type: "Byt · mezonet",
      price: "8 490 000 Kč",
      note: "369 130 € · včetně provize",
    },
    {
      id: "02",
      title: "Rodinný dům / vila",
      place: "Ostrava — Poruba",
      type: "Rodinný dům",
      price: "14 500 000 Kč",
      note: "630 435 € · včetně provize",
    },
    {
      id: "03",
      title: "Obchodní prostor",
      place: "Ostrava — Mariánské Hory",
      type: "Komerční objekt",
      price: "15 100 000 Kč",
      note: "656 522 € · k jednání",
    },
    {
      id: "04",
      title: "Pozemek k bydlení",
      place: "Rychvald",
      type: "Stavební pozemek",
      price: "1 450 Kč / m²",
      note: "63 € / m² · včetně provize",
    },
  ];

  const steps = [
    {
      n: "1",
      title: "Prohlídka a ocenění",
      body: "Přijedeme za vámi po Ostravě i okolí, nemovitost si projdeme a řekneme reálnou tržní cenu — ne tu, kterou chcete slyšet, ale tu, za kterou se skutečně prodá.",
    },
    {
      n: "2",
      title: "Příprava a inzerce",
      body: "Nafotíme, popíšeme, zveřejníme. Zájemce provázíme prohlídkami a filtrujeme je, aby k vám chodili jen lidé, kteří to myslí vážně.",
    },
    {
      n: "3",
      title: "Smlouva a úschova ceny",
      body: "Kupní smlouvu připraví spolupracující advokátní kancelář, peníze putují přes bankovní úschovu. Vy podepisujete, my hlídáme termíny a katastr.",
    },
  ];

  return (
    <main className="vc">
      <header className="vc-top">
        <a className="vc-mark" href="#" aria-label="Victoria Corporation — realitní kancelář, Ostrava">
          <span className="vc-mark__v">V</span>
          <span className="vc-mark__word">
            <span className="vc-mark__name">Victoria</span>
            <span className="vc-mark__sub">realitní kancelář · Ostrava</span>
          </span>
        </a>
        <nav className="vc-nav" aria-label="Hlavní">
          <a href="#nabidka">Nabídka</a>
          <a href="#postup">Jak prodáváme</a>
          <a href="#duvera">O nás</a>
        </nav>
        <a className="vc-phone" href="tel:+420777200502">+420 777 200 502</a>
      </header>

      <section className="vc-hero">
        <div className="vc-hero__media">
          <img
            src="/hero.webp"
            alt="Reprezentativní ostravská nemovitost z nabídky Victoria Corporation"
            className="vc-hero__img"
          />
          <span className="vc-hero__frame" aria-hidden="true" />
        </div>
        <div className="vc-hero__copy">
          <p className="vc-eyebrow">Ostrava · od roku 1994</p>
          <h1 className="vc-hero__title">
            Prodáme vaši nemovitost&nbsp;za&nbsp;cenu,
            <em> kterou uneseme papírově&nbsp;i&nbsp;u&nbsp;stolu.</em>
          </h1>
          <p className="vc-hero__lead">
            Realitní kancelář, která v Ostravě zavřela přes 6 700 obchodů.
            Bez sekání ceny přes noc, bez zmizelých makléřů — s advokátní
            úschovou a jasnými termíny na katastru.
          </p>
          <div className="vc-hero__cta">
            <a className="vc-btn" href="#ocenit">Chci ocenit nemovitost</a>
            <a className="vc-btn vc-btn--ghost" href="#nabidka">Prohlédnout nabídku</a>
          </div>
        </div>
      </section>

      <section className="vc-ledger" aria-label="Kdo jsme v číslech">
        <dl className="vc-ledger__grid">
          <div className="vc-ledger__item">
            <dt>Na trhu od roku</dt>
            <dd>1994</dd>
          </div>
          <div className="vc-ledger__item">
            <dt>Uzavřených zakázek</dt>
            <dd>6&nbsp;728</dd>
          </div>
          <div className="vc-ledger__item">
            <dt>Advokátních kanceláří po ruce</dt>
            <dd>10</dd>
          </div>
          <div className="vc-ledger__item">
            <dt>Bank a fondů na financování</dt>
            <dd>11</dd>
          </div>
        </dl>
      </section>

      <section id="nabidka" className="vc-listings">
        <div className="vc-listings__head">
          <p className="vc-eyebrow">Vybíráme z aktuální nabídky</p>
          <h2>Nemovitosti, které teď v Ostravě prodáváme</h2>
          <p className="vc-listings__note">
            Rodinné domy, byty, pozemky i komerce — od Poruby po Rychvald.
            Ceny jsou včetně provize, u některých položek k jednání.
          </p>
        </div>

        <ol className="vc-cards">
          {listings.map((l) => (
            <li key={l.id} className="vc-card">
              <span className="vc-card__num" aria-hidden="true">{l.id}</span>
              <span className="vc-card__type">{l.type}</span>
              <h3 className="vc-card__title">{l.title}</h3>
              <p className="vc-card__place">{l.place}</p>
              <p className="vc-card__price">{l.price}</p>
              <p className="vc-card__pricenote">{l.note}</p>
            </li>
          ))}
        </ol>

        <figure className="vc-feature">
          <img
            src="/section-1.webp"
            alt="Reprezentativní komerční objekt v ostravské nabídce Victoria Corporation"
            className="vc-feature__img"
          />
          <figcaption className="vc-feature__cap">
            <p className="vc-eyebrow">Doporučujeme</p>
            <h3>Komerční objekt v centru Ostravy</h3>
            <p>
              Reprezentativní adresa pro firmu, která chce být vidět.
              Kompletní právní servis, prohlídku domluvíme do dvou dnů.
            </p>
            <p className="vc-feature__price">100 000 000 Kč</p>
            <a className="vc-btn vc-btn--ghost" href="tel:+420777200502">Zavolat kvůli prohlídce</a>
          </figcaption>
        </figure>
      </section>

      <section id="postup" className="vc-process">
        <div className="vc-process__intro">
          <p className="vc-eyebrow">Jak u nás prodej probíhá</p>
          <h2>Tři kroky. Žádné nervy navíc.</h2>
        </div>
        <ol className="vc-steps">
          {steps.map((s) => (
            <li key={s.n} className="vc-step">
              <span className="vc-step__n" aria-hidden="true">{s.n}</span>
              <h3>{s.title}</h3>
              <p>{s.body}</p>
            </li>
          ))}
        </ol>
      </section>

      <section id="duvera" className="vc-trust">
        <figure className="vc-trust__media">
          <img
            src="/section-2.webp"
            alt="Tým realitní kanceláře Victoria Corporation při jednání v Ostravě"
            className="vc-trust__img"
          />
        </figure>
        <div className="vc-trust__copy">
          <p className="vc-eyebrow" id="ocenit">O nás</p>
          <h2>Třicet let na jednom trhu je slyšet i vidět</h2>
          <p>
            Victoria Corporation prodává nemovitosti v Ostravě a okolí
            nepřetržitě od roku 1994. Za tu dobu jsme přes 6 700 obchodů
            dotáhli až ke klíčům — a víme, kde se každý z nich může zadrhnout.
          </p>
          <ul className="vc-trust__list">
            <li><strong>Bankovní úschova kupní ceny</strong> u každého typu nemovitosti, aby peníze nešly z ruky do ruky.</li>
            <li><strong>Advokátní smlouvy na míru</strong> — spolupracujeme s deseti kancelářemi, ne se šablonou z internetu.</li>
            <li><strong>Financování po ruce</strong> díky jedenácti bankám a fondům, se kterými kupující řeší hypotéku.</li>
          </ul>
          <div className="vc-trust__contact">
            <a className="vc-btn" href="tel:+420777200502">Zavolat +420 777 200 502</a>
            <a className="vc-btn vc-btn--ghost" href="mailto:info@victoria-reality.cz">Napsat e-mail</a>
          </div>
        </div>
      </section>
    </main>
  );
}
