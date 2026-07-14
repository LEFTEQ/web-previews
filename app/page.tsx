export default function Page() {
  const courses = [
    {
      label: "Nejžádanější",
      title: "MS Office v praxi",
      text: "Excel, Word, PowerPoint a Outlook bez zbytečné teorie. Procvičíte si úkoly, které skutečně řešíte v práci.",
      meta: "Začátečníci i pokročilí",
    },
    {
      label: "Nová kvalifikace",
      title: "Počítačové rekvalifikace",
      text: "Ucelená příprava pro návrat do zaměstnání, změnu profese i jistější práci s počítačem.",
      meta: "Akreditované kurzy",
    },
    {
      label: "Výuka na míru",
      title: "Jazyky a čeština",
      text: "Jazykové kurzy, čeština pro cizince, individuální lekce i výuka sestavená pro váš firemní tým.",
      meta: "Jednotlivci i firmy",
    },
  ];

  return (
    <main className="jintes-page">
      <div className="hero-shell">
        <header className="site-header" aria-label="Hlavní navigace">
          <a className="wordmark" href="#uvod" aria-label="Jintes CB – úvod">
            <span className="wordmark-mark" aria-hidden="true">
              <i />
              <i />
              <i />
              <i />
            </span>
            <span>Jintes</span>
            <small>CB</small>
          </a>

          <nav className="header-nav" aria-label="Navigace stránky">
            <a href="#nabidka">Kurzy</a>
            <a href="#proc-jintes">Proč Jintes</a>
          </nav>

          <a className="header-cta" href="#nabidka">
            Vybrat kurz
            <span aria-hidden="true">↘</span>
          </a>
        </header>

        <section className="hero" id="uvod" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow">Kurzy pro práci i nový začátek · České Budějovice</p>
            <h1 id="hero-title">
              Ať vám tabulky
              <span>začnou dávat smysl.</span>
            </h1>
            <p className="hero-lead">
              Praktické kurzy MS Office, rekvalifikace a jazyková výuka s lektory,
              kteří vysvětlují srozumitelně a trpělivě.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#nabidka">
                Prohlédnout kurzy
                <span aria-hidden="true">→</span>
              </a>
              <a className="text-link" href="#proc-jintes">
                Jak výuka probíhá
              </a>
            </div>
          </div>

          <div className="sheet-window" aria-label="Praktická výuka tabulkového procesoru">
            <div className="sheet-toolbar" aria-hidden="true">
              <span className="sheet-name">kurz_excel.xlsx</span>
              <span className="sheet-status">praktické cvičení</span>
            </div>
            <div className="formula-bar" aria-hidden="true">
              <b>fx</b>
              <span>=JISTOTA(PRAXE; TRPĚLIVOST)</span>
            </div>
            <div className="sheet-canvas">
              <div className="column-labels" aria-hidden="true">
                <span>A</span><span>B</span><span>C</span><span>D</span><span>E</span>
              </div>
              <div className="row-labels" aria-hidden="true">
                <span>1</span><span>2</span><span>3</span><span>4</span><span>5</span><span>6</span>
              </div>
              <img
                src="/hero.webp"
                alt="Praktická výuka práce s počítačem v učebně Jintes CB"
              />
              <div className="selected-range" aria-hidden="true">
                <span>B2:E5</span>
                <i />
              </div>
            </div>
          </div>
        </section>
      </div>

      <section className="courses-section" id="nabidka" aria-labelledby="courses-title">
        <div className="section-heading">
          <p className="eyebrow">Nabídka / České Budějovice</p>
          <h2 id="courses-title">Od prvního vzorce po vlastní report.</h2>
          <p>
            Vyberte si téma a úroveň. Výuku stavíme na konkrétních úkolech,
            abyste nové dovednosti použili hned po návratu do práce.
          </p>
        </div>

        <div className="courses-layout">
          <figure className="course-visual">
            <img
              src="/section-1.webp"
              alt="Účastníci počítačového kurzu při společném cvičení"
            />
            <figcaption>
              <span>Učebna Jintes CB</span>
              <strong>Vysvětlení. Vyzkoušení. Jistota.</strong>
            </figcaption>
          </figure>

          <div className="course-list">
            {courses.map((course) => (
              <article className="course-card" key={course.title}>
                <div>
                  <p className="course-label">{course.label}</p>
                  <h3>{course.title}</h3>
                  <p>{course.text}</p>
                </div>
                <div className="course-card-foot">
                  <span>{course.meta}</span>
                  <a href="#proc-jintes" aria-label={`Zjistit více: ${course.title}`}>
                    Zjistit více <span aria-hidden="true">↗</span>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="trust-section" id="proc-jintes" aria-labelledby="trust-title">
        <div className="trust-copy">
          <p className="eyebrow">Proč Jintes CB</p>
          <h2 id="trust-title">Neučíte se pro certifikát. Učíte se pro sebe.</h2>
          <p className="trust-intro">
            V Jintes CB získáte prostor ptát se, zkoušet a vracet se k tomu,
            co potřebujete dovysvětlit. Bez předvádění. Bez anonymní videoknihovny.
          </p>

          <dl className="trust-points">
            <div>
              <dt>Odborná úroveň</dt>
              <dd>Kurzy vedou průběžně se vzdělávající lektoři s bohatou praxí.</dd>
            </div>
            <div>
              <dt>Ověřená kvalita</dt>
              <dd>Pro vybrané vzdělávací programy má Jintes CB potřebné akreditace.</dd>
            </div>
            <div>
              <dt>Osobní přístup</dt>
              <dd>Tempo i obsah přizpůsobíme jednotlivcům, skupinám a firemním týmům.</dd>
            </div>
          </dl>
        </div>

        <figure className="trust-visual">
          <img
            src="/section-2.webp"
            alt="Lektorka pomáhá účastnici kurzu s úkolem na počítači"
          />
          <figcaption>
            <span className="cell-coordinate">CB / UČEBNA</span>
            <p>Klidné prostředí pro otázky, které nechcete nechat bez odpovědi.</p>
          </figcaption>
        </figure>
      </section>
    </main>
  );
}
