export default function Page() {
  const assortment = [
    {
      name: "Střešovické taliány",
      detail: "Výrazné koření, pevný skus a receptura spojená se Střešovicemi.",
      mark: "T",
    },
    {
      name: "Uzeniny z vlastní výroby",
      detail: "Šunky, klobásy a salámy připravované přímo v rodinné výrobně.",
      mark: "U",
    },
    {
      name: "Čerstvé maso",
      detail: "Řezy na pečení, vaření i gril — poradíme s výběrem i přípravou.",
      mark: "M",
    },
    {
      name: "Huderovy hotovky",
      detail: "Poctivá teplá jídla pro rychlý oběd ve všední den.",
      mark: "H",
    },
  ];

  return (
    <main className="hudera-page">
      <section className="hero" aria-labelledby="hero-title">
        <header className="site-head">
          <a className="wordmark" href="#nahore" aria-label="Hudera a syn, začátek stránky">
            <span className="wordmark-main">HUDERA</span>
            <span className="wordmark-detail">A SYN · ŘEZNICTVÍ</span>
          </a>

          <nav className="site-nav" aria-label="Hlavní navigace">
            <a href="#sortiment">Co dáváme na pult</a>
            <a href="#tradice">Rodinné řemeslo</a>
          </nav>

          <a className="head-phone" href="tel:+420725363036">
            <span>Zavolat do prodejny</span>
            +420 725 36 30 36
          </a>
        </header>

        <div className="hero-layout" id="nahore">
          <div className="hero-copy">
            <p className="eyebrow">Praha 6 · Střešovice · rodinná výroba</p>
            <h1 id="hero-title">
              Uzeniny děláme
              <span>řeznickým způsobem.</span>
            </h1>
            <p className="hero-lead">
              Maso, taliány a hotovky z vlastní výroby. Přijďte si pro ně tam,
              kde rodina Huderových řeže, udí a prodává už po generace.
            </p>
            <div className="hero-actions">
              <a className="primary-action" href="tel:+420725363036">Zavolat a objednat</a>
              <a className="text-action" href="#sortiment">Prohlédnout sortiment</a>
            </div>
            <dl className="quick-info">
              <div>
                <dt>Prodejna a výrobna</dt>
                <dd>Nad Hradním vodojemem 17/25</dd>
              </div>
              <div>
                <dt>Otevřeno</dt>
                <dd>Út–Pá 7:30–17:00</dd>
              </div>
            </dl>
          </div>

          <figure className="hero-media">
            <img
              src="/hero.webp"
              alt="Uzeniny a masné výrobky z řeznictví Hudera a syn ve Střešovicích"
              width="1280"
              height="960"
              fetchPriority="high"
            />
            <span className="district-stamp" aria-hidden="true">STŘEŠOVICE</span>
            <span className="butchers-twine" aria-hidden="true" />
            <figcaption>Vlastní výroba · řeznictví · jídelna</figcaption>
          </figure>
        </div>
      </section>

      <section className="assortment" id="sortiment" aria-labelledby="sortiment-title">
        <div className="section-intro">
          <p className="eyebrow">Dnes pro váš stůl</p>
          <h2 id="sortiment-title">Od pultu rovnou domů.</h2>
          <p>
            Řekněte nám, co chcete vařit. Vybereme vhodný kus, ukrojíme množství
            podle vás a přidáme radu, která se v kuchyni neztratí.
          </p>
        </div>

        <div className="assortment-layout">
          <figure className="section-image assortment-image">
            <img
              src="/section-1.webp"
              alt="Čerstvé maso a uzeniny připravené na pultě řeznictví"
              width="1200"
              height="900"
              loading="lazy"
            />
            <figcaption>Každý kus krájíme až podle vaší objednávky.</figcaption>
          </figure>

          <div className="product-list">
            {assortment.map((item) => (
              <article className="product-item" key={item.name}>
                <span className="product-mark" aria-hidden="true">{item.mark}</span>
                <div>
                  <h3>{item.name}</h3>
                  <p>{item.detail}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="tradition" id="tradice" aria-labelledby="tradice-title">
        <div className="tradition-layout">
          <div className="tradition-copy">
            <p className="eyebrow">Rodina, dílna, Střešovice</p>
            <h2 id="tradice-title">Řemeslo obnovené v domě, kde začalo.</h2>
            <p className="tradition-lead">
              Vojtěch Hudera založil firmu v roce 1924. Rodina na tradici navázala
              v roce 1990 — ve stejném historickém sídle, kde dnes najdete výrobnu,
              prodejnu i jídelnu.
            </p>

            <div className="trust-notes">
              <article>
                <h3>Vyrábíme u nás</h3>
                <p>Za chutí našich uzenin stojí vlastní práce, receptury a kontrola každé várky.</p>
              </article>
              <article>
                <h3>Jsme za pultem</h3>
                <p>Obsloužíme rychle, ale ne anonymně. Na maso i jeho přípravu se můžete zeptat.</p>
              </article>
            </div>

            <address className="visit-card">
              <span className="visit-label">Najdete nás</span>
              <strong>Nad Hradním vodojemem 17/25, Praha 6</strong>
              <span>Prodejna: Út–Pá 7:30–17:00</span>
              <span>Jídelna: Po–Pá 8:00–14:00</span>
              <a href="mailto:huderaasyn@huderaasyn.cz">huderaasyn@huderaasyn.cz</a>
            </address>
          </div>

          <figure className="section-image history-image">
            <img
              src="/section-2.webp"
              alt="Řeznické řemeslo a výroba rodiny Huderových v Praze 6"
              width="1200"
              height="1400"
              loading="lazy"
            />
            <figcaption>
              <span>Rodinná tradice</span>
              Střešovice · od roku 1924
            </figcaption>
          </figure>
        </div>
      </section>
    </main>
  );
}
