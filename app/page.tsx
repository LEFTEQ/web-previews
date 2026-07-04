export default function Page() {
  const interior = [
    {
      name: "TRIOLA DEN / NOC",
      note: "Dvojitý materiál v horizontálních pásech — plynulý přechod od plného světla k soukromí jediným tahem.",
    },
    {
      name: "PASSIONATA",
      note: "Roleta v kazetě přímo do rámu okna. Bez vrtání do zdi, bez viditelné mechaniky.",
    },
    {
      name: "SUITA",
      note: "Vlastní systém Vertexu s vyprofilovanými vodicími lištami — montáž přímo na křídlo okna.",
    },
    {
      name: "LARGO & PRESTO",
      note: "Volně visící látkové rolety na stěnu i strop. Osvědčený základ pro každou místnost.",
    },
  ];

  const exterior = [
    {
      name: "Venkovní žaluzie",
      note: "Naklápěcí lamely ovládáte úhel slunce i výhled. V zimě drží teplo uvnitř.",
    },
    {
      name: "Markýzy a pergoly",
      note: "Stín nad terasou, který zvládne ostravské léto i podzimní vítr.",
    },
    {
      name: "Rolety a screeny",
      note: "Ochrana proti přehřívání i zvědavým pohledům, se sníženými náklady na chlazení.",
    },
    {
      name: "Chytré ovládání InelNet",
      note: "Rolety, žaluzie i vrata z jednoho místa — doma i na dálku z telefonu.",
    },
  ];

  return (
    <main className="vx">
      <header className="vx-top">
        <a className="vx-mark" href="#" aria-label="Vertex CZ, domů">
          <span className="vx-mark-v">V</span>
          <span className="vx-mark-word">VERTEX</span>
          <span className="vx-mark-cz">CZ</span>
        </a>
        <nav className="vx-nav" aria-label="Hlavní">
          <a href="#interier">Interiér</a>
          <a href="#exterier">Exteriér</a>
          <a href="#duvera">O nás</a>
          <a className="vx-tel" href="tel:+420596617763">596 617 763</a>
        </nav>
      </header>

      <section className="vx-hero">
        <div className="vx-hero-media">
          <img
            src="/hero.webp"
            alt="Interiér prosvětlený látkovou roletou Vertex — přechod světla od plného denního po soukromí"
            className="vx-hero-img"
          />
          <div className="vx-slats" aria-hidden="true">
            <span></span><span></span><span></span><span></span>
            <span></span><span></span><span></span><span></span>
          </div>
        </div>
        <div className="vx-hero-copy">
          <p className="vx-eyebrow">Stínicí technika · Ostrava</p>
          <h1 className="vx-h1">
            Světlo,<br />
            <span className="vx-h1-em">které řídíte</span><br />
            přesně podle sebe.
          </h1>
          <p className="vx-lede">
            Látkové rolety, žaluzie a venkovní stínění na míru. Od jemného
            prosvětlení po dokonalé soukromí — jedním tahem, na jednom okně.
          </p>
          <div className="vx-cta-row">
            <a className="vx-btn" href="#interier">Vybrat stínění</a>
            <a className="vx-btn vx-btn-ghost" href="tel:+420596617763">
              Zavolat do studia
            </a>
          </div>
        </div>
        <div className="vx-scale" aria-hidden="true">
          <span>100 %</span>
          <span className="vx-scale-line"></span>
          <span>otevřeno</span>
        </div>
      </section>

      <section className="vx-section" id="interier">
        <div className="vx-sec-head">
          <p className="vx-index">01 — Interiér</p>
          <h2 className="vx-h2">Vnitřní stínicí technika</h2>
          <p className="vx-sec-lede">
            Látka, kterou vidíte z pohovky každý den. Systém přizpůsobíme rámu
            okna, materiál vašemu vkusu — a mechaniku schováme z dohledu.
          </p>
        </div>

        <div className="vx-split">
          <figure className="vx-fig">
            <img
              src="/section-1.webp"
              alt="Detail vnitřní látkové rolety Vertex u okna"
              className="vx-fig-img"
            />
          </figure>
          <ul className="vx-list">
            {interior.map((p, i) => (
              <li className="vx-item" key={p.name}>
                <span className="vx-item-no">{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <h3 className="vx-item-name">{p.name}</h3>
                  <p className="vx-item-note">{p.note}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="vx-section vx-section--dark" id="exterier">
        <div className="vx-sec-head">
          <p className="vx-index vx-index--light">02 — Exteriér</p>
          <h2 className="vx-h2">Venkovní stínění pro celý dům</h2>
          <p className="vx-sec-lede">
            Stín před fasádou, ne za sklem. V létě chladněji, v zimě úspora —
            a terasa, na které se dá bydlet i v srpnu.
          </p>
        </div>

        <div className="vx-split vx-split--rev">
          <ul className="vx-list">
            {exterior.map((p, i) => (
              <li className="vx-item" key={p.name}>
                <span className="vx-item-no">{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <h3 className="vx-item-name">{p.name}</h3>
                  <p className="vx-item-note">{p.note}</p>
                </div>
              </li>
            ))}
          </ul>
          <figure className="vx-fig">
            <img
              src="/section-2.webp"
              alt="Venkovní stínicí technika Vertex nad terasou rodinného domu"
              className="vx-fig-img"
            />
          </figure>
        </div>
      </section>

      <section className="vx-trust" id="duvera">
        <div className="vx-trust-head">
          <p className="vx-index">Proč Vertex</p>
          <h2 className="vx-h2">Vlastní systémy, měřeno u vás doma</h2>
        </div>
        <div className="vx-trust-grid">
          <div className="vx-card">
            <h3>Vyvíjíme, ne přeprodáváme</h3>
            <p>
              Systémy SUITA a TRIOLA jsou projekty Vertexu. Víme, jak fungují do
              posledního profilu, a garantujeme za ně.
            </p>
          </div>
          <div className="vx-card">
            <h3>Zaměření na místě</h3>
            <p>
              Přijedeme, změříme okna i terasu a poradíme přímo v prostoru.
              Nabídka odpovídá vašemu domu, ne katalogu.
            </p>
          </div>
          <div className="vx-card">
            <h3>Ostrava a okolí</h3>
            <p>
              Studio i sklad máme na Štramberské 1581/45A. Servis i náhradní
              díly máme po ruce, ne za hranicemi.
            </p>
          </div>
        </div>
        <div className="vx-contact-strip">
          <a href="tel:+420596617763">596 617 763</a>
          <a href="mailto:info@vertexcz.cz">info@vertexcz.cz</a>
          <span>Štramberská 1581/45A, Ostrava</span>
        </div>
      </section>
    </main>
  );
}
