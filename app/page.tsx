export default function Page() {
  const profily = [
    {
      kod: "01",
      nazev: "Eloxované hliníkové profily Nielsen",
      popis:
        "Stěžejní komodita. Nielsen táhne profily z prakticky čistého hliníku a zpevňuje je teplotním šokem v tekutém dusíku při −80 °C — proto drží tvar i po letech a odstín eloxu zůstává stále stejný.",
      detail: "Délka lišty 3,04 m · patentovaná technologie od roku 1971",
    },
    {
      kod: "02",
      nazev: "Rámování obrazů na míru",
      popis:
        "Přineste plátno, grafiku, fotografii nebo diplom. Zaměříme, doporučíme profil i pasparta a rám sestavíme přesně na vaše rozměry — od komorního formátu po velké plátno.",
      detail: "Sklo, antireflex i muzeální zasklení · osazení do 3 metrů",
    },
    {
      kod: "03",
      nazev: "Výtvarné materiály Royal Talens",
      popis:
        "Barvy, média a papíry od holandského výrobce, který dělá barvy, laky a tuše už přes sto let. Amsterdam, Rembrandt i skicáře — víc než 9 000 položek skladem.",
      detail: "Osobní odběr Praha zdarma · doprava do Čech i na Slovensko",
    },
  ];

  return (
    <main className="page">
      <header className="topbar">
        <a className="wordmark" href="#" aria-label="Nielsen CZ — rámování obrazů">
          <span className="wordmark__mark">N</span>
          <span className="wordmark__text">
            Nielsen<span className="wordmark__cz">CZ</span>
          </span>
        </a>
        <nav className="topnav" aria-label="Hlavní">
          <a href="#profily">Profily</a>
          <a href="#ramovani">Rámování</a>
          <a href="#materialy">Materiály</a>
        </nav>
        <a className="topbar__phone" href="tel:+420233310123">
          +420 233 310 123
        </a>
      </header>

      <section className="hero">
        <div className="hero__frame">
          <img
            className="hero__img"
            src="/hero.webp"
            alt="Detail eloxovaného hliníkového rámovacího profilu Nielsen"
          />
          <div className="hero__corner hero__corner--tl" aria-hidden="true" />
          <div className="hero__corner hero__corner--br" aria-hidden="true" />
        </div>
        <div className="hero__body">
          <p className="hero__eyebrow">Rámování obrazů · Praha · od roku 1971</p>
          <h1 className="hero__title">
            Rám, který drží obraz<span className="hero__title-accent"> i po letech.</span>
          </h1>
          <p className="hero__lede">
            Táhneme profily z čistého hliníku a kalíme je v tekutém dusíku —
            proto se rám nekroutí a elox nemění odstín. Přineste svoje plátno,
            zbytek je na nás.
          </p>
          <div className="hero__actions">
            <a className="btn btn--primary" href="#ramovani">
              Nechat zarámovat obraz
            </a>
            <a className="btn btn--ghost" href="#profily">
              Prohlédnout profily
            </a>
          </div>
          <dl className="hero__facts">
            <div>
              <dt>−80 °C</dt>
              <dd>kalení profilu v dusíku</dd>
            </div>
            <div>
              <dt>3,04 m</dt>
              <dd>délka rámovací lišty</dd>
            </div>
            <div>
              <dt>9 000+</dt>
              <dd>položek skladem</dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="services" id="profily" aria-labelledby="services-title">
        <div className="section-head">
          <p className="section-head__eyebrow">Co u nás pořídíte</p>
          <h2 className="section-head__title" id="services-title">
            Od surového profilu po hotový rám na zdi.
          </h2>
        </div>
        <ol className="cards">
          {profily.map((s) => (
            <li className="card" key={s.kod}>
              <span className="card__kod" aria-hidden="true">
                {s.kod}
              </span>
              <h3 className="card__title">{s.nazev}</h3>
              <p className="card__text">{s.popis}</p>
              <p className="card__detail">{s.detail}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="story" id="ramovani" aria-labelledby="story-title">
        <div className="story__media">
          <img
            src="/section-1.webp"
            alt="Rámovací dílna Nielsen — sestavování hliníkového rámu"
          />
        </div>
        <div className="story__body">
          <p className="section-head__eyebrow">Proč zrovna hliník Nielsen</p>
          <h2 className="section-head__title" id="story-title">
            Čistý kov, který dokáže udržet přesný odstín.
          </h2>
          <p className="story__text">
            Konkurence táhne profily z duralu, aby získala pevnost — jenže si tím
            zadělá na problémy s eloxem, a proto barevné odstíny často vůbec
            nenabízí. Nielsen jde jinou cestou: profil zpevní fyzikálně,
            teplotním šokem, a čistotu kovu si nechá pro dokonalý povrch.
          </p>
          <ul className="story__list">
            <li>Stálobarevný elox — odstín stejný i po dodání za rok</li>
            <li>Přesné osazení skla, pasparty i zadní stěny</li>
            <li>Poradíme s výběrem profilu přímo k vašemu obrazu</li>
          </ul>
          <a className="btn btn--dark" href="tel:+420233310123">
            Zavolat do dílny
          </a>
        </div>
      </section>

      <section className="talens" id="materialy" aria-labelledby="talens-title">
        <div className="talens__body">
          <p className="section-head__eyebrow">Výtvarné potřeby</p>
          <h2 className="section-head__title" id="talens-title">
            Royal Talens — barvy z Apeldoornu, sto let na stejné adrese.
          </h2>
          <p className="talens__text">
            Náš hlavní dodavatel výtvarných materiálů. Rodinná holandská firma,
            kterou v roce 1899 založil Martin Talens a která dodnes sídlí kousek
            od centra Apeldoornu. Kvalita a její dlouhá záruka jsou tu na prvním
            místě — a to je přesně to, co doporučujeme svým zákazníkům.
          </p>
          <div className="talens__tags">
            <span>akryl Amsterdam</span>
            <span>olej Rembrandt</span>
            <span>skicáře &amp; bloky</span>
            <span>tuše &amp; média</span>
          </div>
          <p className="talens__note">
            Osobní odběr v Praze zdarma · doprava do Čech i na Slovensko
          </p>
        </div>
        <div className="talens__media">
          <img
            src="/section-2.webp"
            alt="Výtvarné materiály Royal Talens — barvy a média"
          />
        </div>
      </section>
    </main>
  );
}
