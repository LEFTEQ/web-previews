const sluzby = [
  {
    par: "§ 1",
    oblast: "Obchodní právo",
    popis:
      "Smlouvy, které obstojí, když jde do tuhého. Zakládání a změny společností, vymáhání pohledávek, spory s obchodními partnery. Zastupujeme podnikatele z Ústecka od živnostníků po s. r. o.",
    body: ["Sepis a revize smluv", "Vymáhání pohledávek", "Zastoupení ve sporech"],
  },
  {
    par: "§ 2",
    oblast: "Rodinné právo",
    popis:
      "Rozvod, děti, majetek — situace, kde potřebujete někoho, kdo mluví za vás, když vám dochází síly. Hledáme dohodu tam, kde je možná, a tvrdě hájíme vaše práva tam, kde není.",
    body: ["Rozvod a vypořádání majetku", "Péče o děti a výživné", "Předmanželské smlouvy"],
  },
  {
    par: "§ 3",
    oblast: "Trestní právo",
    popis:
      "Obhajoba od prvního výslechu po hlavní líčení. Čím dřív zavoláte, tím víc toho lze udělat — nevypovídejte bez obhájce. Zastupujeme i poškozené při vymáhání náhrady škody.",
    body: ["Obhajoba v trestním řízení", "Zastoupení poškozených", "Účast u výslechů"],
  },
  {
    par: "§ 4",
    oblast: "Mediace",
    popis:
      "Ne každý spor musí skončit u soudu. Jako akreditovaná mediátorka České advokátní komory vedu obě strany k dohodě, která drží — rychleji a levněji než léta soudních jednání.",
    body: ["Rodinné a sousedské spory", "Obchodní neshody", "Soudem nařízená setkání"],
  },
];

const duvera = [
  {
    cislo: "25",
    jednotka: "let praxe",
    text: "V advokacii působím od roku 1999. Za tu dobu jsem viděla, jak dopadají špatné smlouvy i odkládané spory — a naučila se jim předcházet.",
  },
  {
    cislo: "8567",
    jednotka: "ev. č. ČAK",
    text: "Jsem zapsaná v seznamu advokátů České advokátní komory a v seznamu jejích akreditovaných mediátorů. Obojí si můžete ověřit ve veřejném rejstříku.",
  },
  {
    cislo: "3",
    jednotka: "spolupracující odborníci",
    text: "Úzce spolupracuji s daňovým poradcem, auditorem a soudním odhadcem. Složitější případy tak řešíme pod jednou střechou, bez přehazování mezi kancelářemi.",
  },
];

export default function Page() {
  return (
    <main className="ak">
      {/* ============ HERO ============ */}
      <header className="hero">
        <div className="hero-top">
          <span className="wordmark">
            <span className="wordmark-par">§</span> Tajchnerová
          </span>
          <span className="hero-badge">Advokátka &amp; mediátorka · ev. č. ČAK 8567</span>
        </div>

        <div className="hero-body">
          <p className="hero-eyebrow">Advokátní kancelář · Ústí nad Labem</p>
          <h1 className="hero-title">
            <span className="hero-line">Právo je řemeslo</span>
            <span className="hero-line hero-line-accent">přesnosti.</span>
          </h1>
          <p className="hero-lede">
            Jsem JUDr. Ilona Tajchnerová. Přes 25 let hájím klienty z Ústecka
            v obchodních, rodinných a trestních věcech — a jako akreditovaná
            mediátorka pomáhám sporům skončit dohodou dřív, než skončí u soudu.
          </p>
          <div className="hero-cta">
            <a className="btn btn-solid" href="#sluzby">
              Čím vám pomohu
            </a>
            <a className="btn btn-ghost" href="#kancelar">
              O kanceláři
            </a>
          </div>
        </div>

        <div className="hero-margin" aria-hidden="true">
          <span className="hero-margin-par">§</span>
          <span className="hero-margin-rule" />
          <span className="hero-margin-note">první konzultace — do 48 hodin termín</span>
        </div>
      </header>

      {/* ============ SLUŽBY ============ */}
      <section className="sluzby" id="sluzby" aria-labelledby="sluzby-h">
        <div className="section-head">
          <p className="section-eyebrow">Právní služby</p>
          <h2 id="sluzby-h" className="section-title">
            Čtyři oblasti, ve kterých se pohybuji denně
          </h2>
          <p className="section-lede">
            Hlavním zaměřením kanceláře je právo obchodní, rodinné a trestní.
            Když váš případ přesáhne tyto oblasti, řeknu vám to rovnou —
            a doporučím kolegu, který ho zvládne lépe.
          </p>
        </div>

        <div className="sluzby-grid">
          {sluzby.map((s) => (
            <article className="sluzba" key={s.par}>
              <div className="sluzba-head">
                <span className="sluzba-par" aria-hidden="true">
                  {s.par}
                </span>
                <h3 className="sluzba-title">{s.oblast}</h3>
              </div>
              <p className="sluzba-popis">{s.popis}</p>
              <ul className="sluzba-body">
                {s.body.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <p className="sluzby-cenik">
          <strong>Cena předem, ne po účtu.</strong> Odměnu si domluvíme na první
          schůzce — hodinovou sazbou, pevnou částkou za úkon, nebo procentem
          z vymožené částky. Žádné položky, o kterých byste nevěděli.
        </p>
      </section>

      {/* ============ DŮVĚRA / O KANCELÁŘI ============ */}
      <section className="kancelar" id="kancelar" aria-labelledby="kancelar-h">
        <div className="section-head section-head-inverse">
          <p className="section-eyebrow">O kanceláři</p>
          <h2 id="kancelar-h" className="section-title">
            Advokát, kterého si můžete ověřit
          </h2>
          <p className="section-lede">
            V právu nekupujete sliby, ale odpovědnost. Kancelář je pro výkon
            advokacie řádně pojištěna a vše, co o mně tvrdím, najdete
            v rejstřících České advokátní komory.
          </p>
        </div>

        <div className="kancelar-grid">
          {duvera.map((d) => (
            <article className="fakt" key={d.jednotka}>
              <p className="fakt-cislo">
                {d.cislo}
                <span className="fakt-jednotka">{d.jednotka}</span>
              </p>
              <p className="fakt-text">{d.text}</p>
            </article>
          ))}
        </div>

        <blockquote className="kancelar-citat">
          <p>
            „Dobrý advokát vám neřekne, co chcete slyšet. Řekne vám, jak to je —
            a co s tím lze udělat.“
          </p>
          <cite>JUDr. Ilona Tajchnerová, Ústí nad Labem</cite>
        </blockquote>
      </section>
    </main>
  );
}
