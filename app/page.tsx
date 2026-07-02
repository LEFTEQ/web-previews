export default function Page() {
  const programy = [
    {
      tag: "Pro děti",
      title: "Netopýří noc v Domu přírody",
      date: "4. 9.",
      text: "Večerní výprava za netopýry Litovelského Pomoraví. Ultrazvukové detektory, baterky a spousta otázek — děti si sáhnou na noc v přírodě naostro.",
    },
    {
      tag: "Školní programy",
      title: "Denní i pobytové výukové programy",
      date: "celoročně",
      text: "Třída u nás stráví den nebo celý týden v lužním lese. Loví bezobratlé v tůni, měří stromy, vaří z bylinek. Učení, které si žáci pamatují roky.",
    },
    {
      tag: "Rodiny",
      title: "Hravé vycházky galerií v přírodě",
      date: "duben–září",
      text: "Sluneční hora, Rajská zahrada, Lesní chrám. Osm hektarů uměleckých zastavení v krajině, kam se dá lézt, schovávat i jen tak koukat.",
    },
    {
      tag: "Pro učitele",
      title: "Semináře a exkurze pro pedagogy",
      date: "od 27. 8.",
      text: "Jak vést žáky ke zvládání stresu, Ekohrátky ze zahrádky, třídenní exkurze do Moravského krasu. Inspirace, kterou přenesete rovnou do třídy.",
    },
  ];

  const cisla = [
    { n: "4 817", label: "žáků a studentů si odneslo zážitek z výukových programů" },
    { n: "347", label: "učitelů získalo inspiraci na seminářích a exkurzích" },
    { n: "6 247", label: "dospělých a rodin přišlo na besedy, koncerty a výlety" },
    { n: "40 000+", label: "lidí prošlo galerií v přírodě za lužním lesem" },
  ];

  return (
    <main className="sun">
      {/* ================= HERO ================= */}
      <header className="hero">
        <nav className="hero-nav" aria-label="Hlavní navigace">
          <a className="wordmark" href="#" aria-label="Sluňákov — úvod">
            <span className="wordmark-sun" aria-hidden="true">
              <svg viewBox="0 0 40 40" width="34" height="34" role="img" aria-hidden="true">
                <circle cx="20" cy="26" r="9" fill="var(--sunflower)" />
                <g stroke="var(--sunflower)" strokeWidth="3" strokeLinecap="round">
                  <line x1="20" y1="4" x2="20" y2="11" />
                  <line x1="7" y1="12" x2="12" y2="17" />
                  <line x1="33" y1="12" x2="28" y2="17" />
                </g>
              </svg>
            </span>
            Sluňákov
          </a>
          <ul className="hero-nav-links">
            <li><a href="#programy">Programy</a></li>
            <li><a href="#dum">Dům a galerie</a></li>
          </ul>
        </nav>

        <div className="hero-body">
          <p className="hero-eyebrow">Centrum ekologických aktivit města Olomouce · Horka nad Moravou</p>
          <h1 className="hero-title">
            <span className="hero-line ht-1">Den v lužním lese</span>
            <span className="hero-line ht-2">si dítě pamatuje dýl</span>
            <span className="hero-line ht-3">než den ve <em>třídě.</em></span>
          </h1>
          <p className="hero-lead">
            Kousek za Olomoucí, na kraji Litovelského Pomoraví, stojí zelený dům
            zabořený do kopce. Kolem něj osm hektarů galerie v přírodě. Vozíme sem
            školní třídy, rodiny i zvědavé dospělé — a všichni se vracejí špinaví a spokojení.
          </p>
          <div className="hero-actions">
            <a className="btn btn-solid" href="#programy">Vybrat program</a>
            <a className="btn btn-ghost" href="#dum">Jak to u nás vypadá</a>
          </div>
        </div>

        {/* Signature: horizont nízkoenergetického domu zabořeného do valu + vycházející slunce */}
        <div className="hero-horizon" aria-hidden="true">
          <div className="horizon-sun"></div>
          <svg className="horizon-svg" viewBox="0 0 1440 190" preserveAspectRatio="none" role="presentation">
            <path
              d="M0,190 L0,140 C120,132 220,120 340,116 C430,113 470,60 640,54 C810,48 900,96 1020,104 C1180,114 1320,128 1440,124 L1440,190 Z"
              fill="var(--meadow)"
            />
            <path
              d="M0,190 L0,168 C180,158 360,146 560,142 C760,138 980,150 1160,156 C1280,160 1380,164 1440,166 L1440,190 Z"
              fill="var(--moss)"
            />
          </svg>
        </div>
      </header>

      {/* ================= PROGRAMY ================= */}
      <section className="programy" id="programy" aria-labelledby="programy-h">
        <div className="section-head">
          <p className="eyebrow">Co u nás zažijete</p>
          <h2 id="programy-h">Programy pro děti, třídy i celé rodiny</h2>
          <p className="section-lead">
            Nejsme kroužek v tělocvičně. Učíme venku — v tůních, na louce a v lese,
            deset minut autobusem z Olomouce (MHD č. 18 a 20 z Tržnice).
          </p>
        </div>

        <div className="prog-grid">
          {programy.map((p) => (
            <article className="prog-card" key={p.title}>
              <div className="prog-meta">
                <span className="prog-tag">{p.tag}</span>
                <span className="prog-date">{p.date}</span>
              </div>
              <h3>{p.title}</h3>
              <p>{p.text}</p>
            </article>
          ))}
        </div>

        <p className="prog-note">
          Termíny a přihlášky domluvíte na <strong>+420 585 154 711</strong> (informační centrum)
          nebo na <strong>info@slunakov.cz</strong>.
        </p>
      </section>

      {/* ================= DŮM + DŮVĚRA ================= */}
      <section className="dum" id="dum" aria-labelledby="dum-h">
        <div className="dum-inner">
          <div className="dum-text">
            <p className="eyebrow eyebrow-light">Dům přírody Litovelského Pomoraví</p>
            <h2 id="dum-h">Dům zabořený do kopce, galerie rozsetá po krajině</h2>
            <p>
              Náš nízkoenergetický dům má střechu porostlou trávou a topí ho hlavně slunce —
              i budova sama je exponát. Za ním začíná galerie v přírodě: Sluneční hora,
              Rajská zahrada, Lesní chrám a další zastavení, do kterých se leze, vchází
              a sahá. Vstup do krajiny je volný, celý rok.
            </p>
            <ul className="dum-fakta">
              <li><strong>Otevřeno duben–září</strong> denně 9–17 h (letní víkendy do 18 h), říjen–březen v pracovní dny 10–15 h.</li>
              <li><strong>Skrbeňská 669/70, Horka nad Moravou</strong> — vlakem na znamení, busem č. 18 a 20, nebo po polní cestě.</li>
              <li><strong>Ubytování a pronájem prostor</strong> pro školy v přírodě a pobytové programy: +420 585 378 345.</li>
            </ul>
          </div>

          <div className="dum-cisla" role="list" aria-label="Sluňákov v číslech za poslední rok">
            {cisla.map((c) => (
              <div className="cislo" role="listitem" key={c.n}>
                <span className="cislo-n">{c.n}</span>
                <span className="cislo-label">{c.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
