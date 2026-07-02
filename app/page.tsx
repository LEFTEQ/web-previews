const sluzby = [
  {
    oblast: "Rodinné právo",
    par: "§ 655–975 OZ",
    text: "Rozvod manželství, svěření dětí do péče, výživné, vypořádání společného jmění. Diskrétně a s ohledem na to, že jde o víc než paragrafy.",
  },
  {
    oblast: "Právo k nemovitostem",
    par: "§ 976–1474 OZ",
    text: "Kupní a darovací smlouvy, advokátní úschova kupní ceny, věcná břemena, návrhy na vklad do katastru. Převod hlídáme od rezervace po zápis.",
  },
  {
    oblast: "Občanské právo",
    par: "zák. č. 89/2012 Sb.",
    text: "Smlouvy, náhrada škody, dědictví, ochrana osobnosti, vymáhání pohledávek. Zastoupíme vás před soudem i při mimosoudním jednání.",
  },
  {
    oblast: "Obchodní právo",
    par: "zák. č. 90/2012 Sb.",
    text: "Založení s.r.o., valné hromady, obchodní smlouvy, právní servis pro podnikatele — i v anglickém jazyce pro zahraniční partnery.",
  },
  {
    oblast: "Trestní právo",
    par: "zák. č. 40/2009 Sb.",
    text: "Obhajoba v trestním řízení, doprovod k výslechu na Policii ČR, zastoupení poškozených. Voláte-li od výslechu, jednáme okamžitě.",
  },
  {
    oblast: "Insolvence a oddlužení",
    par: "zák. č. 182/2006 Sb.",
    text: "Osobní bankrot, návrh na oddlužení, přihlášky pohledávek. Pomůžeme vám z dluhové spirály zákonnou cestou.",
  },
  {
    oblast: "Pracovní právo",
    par: "zák. č. 262/2006 Sb.",
    text: "Neplatná výpověď, pracovní smlouvy, odstupné, spory se zaměstnavatelem i právní podpora firem při propouštění.",
  },
  {
    oblast: "Správní právo",
    par: "zák. č. 500/2004 Sb.",
    text: "Zastoupení před úřady, přestupková řízení, stavební řízení, žaloby proti rozhodnutí správního orgánu — včetně náhrady újmy za nesprávný úřední postup.",
  },
];

const zasady = [
  {
    cislo: "I.",
    titul: "Nejdřív vás vyslechneme",
    text: "První konzultace slouží k tomu, abychom pochopili celou vaši situaci. Teprve pak řekneme, jaké máte možnosti a co která cesta stojí.",
  },
  {
    cislo: "II.",
    titul: "Odměnu znáte předem",
    text: "Před převzetím věci dostanete kalkulaci — hodinovou sazbu, nebo pevnou cenu za úkon. Žádné položky, o kterých jste nevěděli.",
  },
  {
    cislo: "III.",
    titul: "Mlčenlivost je zákon",
    text: "Vše, co nám svěříte, chrání zákonná povinnost mlčenlivosti advokáta. Platí bez výjimky a bez časového omezení.",
  },
];

const reference = [
  {
    text: "Těžkou životní situaci spojenou s rozvodem manželství a svěřením nezletilých dětí do péče bych bez pomoci paní doktorky nezvládla. Děkuji.",
    kdo: "Klientka, Brno-venkov",
    vec: "rodinné právo",
  },
  {
    text: "Se službami advokátní kanceláře v oblasti obchodního práva, kterých využíváme opakovaně, máme velmi dobré zkušenosti.",
    kdo: "Klient, Brno",
    vec: "obchodní právo",
  },
];

export default function Page() {
  return (
    <main className="ak">
      {/* ===== HERO ===== */}
      <header className="hero">
        <div className="hero-top">
          <div className="wordmark">
            <span className="wordmark-initials" aria-hidden="true">LŘ</span>
            <span className="wordmark-name">
              JUDr. Lenka Řehulová, Ph.D.
              <em>advokátní kancelář · Brno</em>
            </span>
          </div>
          <nav className="hero-nav" aria-label="Hlavní navigace">
            <a href="#sluzby">Služby</a>
            <a href="#kancelar">Kancelář</a>
            <a href="tel:+420530333999" className="nav-tel">Zavolat</a>
          </nav>
        </div>

        <div className="hero-grid">
          <div className="hero-text">
            <p className="hero-motto" lang="la">Vigilantibus iura scripta sunt.</p>
            <h1>
              Práva slouží těm,<br />
              kdo si je <span className="hero-em">střeží</span>.
            </h1>
            <p className="hero-lead">
              Advokátní kancelář v centru Brna s pobočkami v Blansku a Boskovicích.
              Rozvod, převod nemovitosti, obhajoba, oddlužení — zastoupíme vás před
              soudem, na úřadě i u jednacího stolu. Česky i anglicky.
            </p>
            <div className="hero-cta">
              <a className="btn btn-plna" href="tel:+420530333999">Zavolat do kanceláře</a>
              <a className="btn btn-linka" href="mailto:kancelar@akrehulova.cz">Napsat e-mail</a>
            </div>
            <p className="hero-fakta">
              Zapsána v seznamu České advokátní komory · právní služby od roku 2010
            </p>
          </div>
          <figure className="hero-obraz">
            <img
              src="/hero.webp"
              alt="Pracovní stůl advokátky s právními spisy a psacím perem v brněnské kanceláři"
            />
            <figcaption>Sídlo kanceláře: centrum Brna · pobočky Blansko a Boskovice</figcaption>
          </figure>
        </div>
      </header>

      {/* ===== SLUŽBY ===== */}
      <section className="sluzby" id="sluzby" aria-labelledby="sluzby-nadpis">
        <div className="sekce-hlava">
          <p className="eyebrow">Právní služby</p>
          <h2 id="sluzby-nadpis">S čím za námi klienti chodí</h2>
          <p className="sekce-uvod">
            Kancelář s generální praxí — u každé oblasti uvádíme zákon, podle kterého
            se váš případ posuzuje. Nevíte-li, kam vaše věc patří, zavolejte; zařadíme ji za vás.
          </p>
        </div>

        <div className="sluzby-mriz">
          {sluzby.map((s) => (
            <article className="sluzba" key={s.oblast}>
              <p className="sluzba-par">{s.par}</p>
              <h3>{s.oblast}</h3>
              <p>{s.text}</p>
            </article>
          ))}
        </div>

        <figure className="sluzby-obraz">
          <img
            src="/section-1.webp"
            alt="Právní spisy a komentované zákony připravené k jednání u soudu"
          />
          <figcaption>
            Každý spis vedeme tak, aby obstál před soudem — od první konzultace po pravomocné rozhodnutí.
          </figcaption>
        </figure>
      </section>

      {/* ===== KANCELÁŘ / DŮVĚRA ===== */}
      <section className="kancelar" id="kancelar" aria-labelledby="kancelar-nadpis">
        <div className="sekce-hlava">
          <p className="eyebrow">Kancelář</p>
          <h2 id="kancelar-nadpis">Tři zásady, na kterých kancelář stojí</h2>
        </div>

        <ol className="zasady">
          {zasady.map((z) => (
            <li className="zasada" key={z.cislo}>
              <span className="zasada-cislo" aria-hidden="true">{z.cislo}</span>
              <h3>{z.titul}</h3>
              <p>{z.text}</p>
            </li>
          ))}
        </ol>

        <div className="kancelar-grid">
          <figure className="kancelar-obraz">
            <img
              src="/section-2.webp"
              alt="JUDr. Lenka Řehulová při konzultaci s klientem v brněnské advokátní kanceláři"
            />
          </figure>
          <div className="kancelar-refs">
            <p className="eyebrow">Řekli o nás</p>
            {reference.map((r) => (
              <blockquote className="reference" key={r.kdo}>
                <p>„{r.text}“</p>
                <footer>
                  <cite>{r.kdo}</cite>
                  <span className="reference-vec">{r.vec}</span>
                </footer>
              </blockquote>
            ))}
            <p className="kancelar-pozn">
              Spolupracujeme s prověřenými notáři, soudními exekutory, znalci a tlumočníky —
              složitější věc tak vyřešíte na jednom místě.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
