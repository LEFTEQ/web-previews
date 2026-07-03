// Dr.KUBBA — zdravá obuv, Olomouc
// Poznámka k obsahu firmy: přestože zadání uvádí „tiskárna“, veškerý reálný obsah
// současného webu je o prodejnách zdravé obuvi Dr.KUBBA v Olomouci — návrh proto
// staví na skutečném byznysu: ortopedicky konzultovaná obuv, tři prodejny.

const prodejny = [
  {
    id: "A",
    nazev: "Horní náměstí 5",
    misto: "centrum Olomouce",
    adresa: "Horní náměstí 5, 772 00 Olomouc",
    doba: ["Po–Pá 9–18", "So 9–12", "Ne zavřeno"],
    tel: "720 996 727",
    telHref: "+420720996727",
    pozn: "Naše nejstarší prodejna, dva kroky od orloje.",
  },
  {
    id: "B",
    nazev: "Galerie Šantovka",
    misto: "Polská 1, Olomouc",
    adresa: "Polská 1, 772 00 Olomouc",
    doba: ["Po–Ne 9–21"],
    tel: "720 994 710",
    telHref: "+420720994710",
    pozn: "Otevřeno každý den do devíti večer.",
  },
  {
    id: "C",
    nazev: "OC Olympia",
    misto: "Olomoucká 90, Velký Týnec",
    adresa: "Olomoucká 90, 777 00 Velký Týnec",
    doba: ["Po–Ne 9–21"],
    tel: "720 996 728",
    telHref: "+420720996728",
    pozn: "Parkování zdarma přímo u vchodu.",
  },
];

const znaky = [
  {
    krok: "Šířka",
    nadpis: "Bota se přizpůsobí noze, ne naopak",
    text:
      "Dostatečně široká špička nechá prstům prostor. Žádné otlaky, žádné mačkání — i pro nohy s vbočeným palcem nebo širším nártem.",
  },
  {
    krok: "Podpatek",
    nadpis: "Správná výška podpatku",
    text:
      "Nízký, stabilní podpatek drží patu ve zdravé poloze a nepřetěžuje klouby ani páteř. Vybíráme jen vzory, které tuto zásadu splňují.",
  },
  {
    krok: "Tlumení",
    nadpis: "Podrážka tlumí každý došlap",
    text:
      "Pružná podešev pohltí otřesy při chůzi po dlažbě i asfaltu. Kolena a kyčle to poznají už po prvním dni na nohou.",
  },
  {
    krok: "Materiál",
    nadpis: "Přírodní materiály, které dýchají",
    text:
      "Kůže a přírodní textilie odvádějí vlhkost a přizpůsobí se tvaru nohy. Noha zůstává v suchu a bota vydrží roky.",
  },
  {
    krok: "Stélka",
    nadpis: "Stélky na míru vaší klenbě",
    text:
      "Ke každé botě nabízíme několik typů zdravotních stélek pro podporu nožní klenby. Na prodejně vám pomůžeme vybrat tu správnou.",
  },
];

export default function Page() {
  return (
    <main className="dk">
      {/* ================= HERO ================= */}
      <header className="hero">
        <nav className="hero-nav" aria-label="Hlavní navigace">
          <a className="wordmark" href="#" aria-label="Dr.KUBBA — zdravá obuv, domů">
            <span className="wordmark-dr">Dr.</span>
            <span className="wordmark-kubba">KUBBA</span>
          </a>
          <div className="hero-nav-links">
            <a href="#zdrava-obuv">Zdravá obuv</a>
            <a href="#prodejny">Prodejny</a>
            <a className="nav-tel" href="tel:+420737948208">
              737 948 208
            </a>
          </div>
        </nav>

        <div className="hero-body">
          <p className="hero-eyebrow">Zdravá obuv · tři prodejny v Olomouci a okolí</p>
          <h1 className="hero-title">
            <span className="ht-line ht-1">Bolí vás</span>
            <span className="ht-line ht-2">nohy?</span>
            <span className="ht-line ht-3">
              Začněte <em>botami.</em>
            </span>
          </h1>
          <p className="hero-lead">
            Unavené a oteklé nohy nejsou normální. Většinou za ně může nevhodná obuv.
            Každý vzor, který u nás najdete, prošel konzultací s ortopedem — proto
            se jmenujeme Dr.KUBBA.
          </p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="#prodejny">
              Najít nejbližší prodejnu
            </a>
            <a className="btn btn-ghost" href="#zdrava-obuv">
              Co dělá botu zdravou
            </a>
          </div>
        </div>

        {/* Signature: otisky chodidel — stopa zákazníka procházející heroem */}
        <div className="footprints" aria-hidden="true">
          <svg className="fp fp-1" viewBox="0 0 40 90">
            <FootShape />
          </svg>
          <svg className="fp fp-2 fp-right" viewBox="0 0 40 90">
            <FootShape />
          </svg>
          <svg className="fp fp-3" viewBox="0 0 40 90">
            <FootShape />
          </svg>
          <svg className="fp fp-4 fp-right" viewBox="0 0 40 90">
            <FootShape />
          </svg>
          <svg className="fp fp-5" viewBox="0 0 40 90">
            <FootShape />
          </svg>
        </div>

        <div className="hero-strip" role="presentation">
          <span>konzultováno s ortopedem</span>
          <span aria-hidden="true">·</span>
          <span>přírodní materiály</span>
          <span aria-hidden="true">·</span>
          <span>zdravotní stélky</span>
          <span aria-hidden="true">·</span>
          <span>Olomouc od roku 2011</span>
        </div>
      </header>

      {/* ================= SEKCE 1: ZDRAVÁ OBUV ================= */}
      <section className="znaky" id="zdrava-obuv" aria-labelledby="znaky-title">
        <div className="section-head">
          <p className="eyebrow">Pět věcí, které si u boty hlídáme</p>
          <h2 id="znaky-title">
            Co dělá botu <em>zdravou</em>
          </h2>
          <p className="section-lead">
            Zdravá bota není móda ani kompromis. Je to pět konkrétních vlastností —
            a na prodejně vám u každého páru ukážeme, že je opravdu má.
          </p>
        </div>

        <ol className="znaky-list">
          {znaky.map((z) => (
            <li key={z.krok} className="znak">
              <span className="znak-tag">{z.krok}</span>
              <h3>{z.nadpis}</h3>
              <p>{z.text}</p>
            </li>
          ))}
        </ol>

        <aside className="ortoped">
          <svg className="ortoped-foot" viewBox="0 0 40 90" aria-hidden="true">
            <FootShape />
          </svg>
          <div>
            <h3>Každý vzor schvaluje ortoped</h3>
            <p>
              Než se bota dostane na naši prodejnu, projde konzultací s ortopedem.
              Co jeho zásadám nevyhoví, neprodáváme — i kdyby se sebelíp prodávalo.
            </p>
          </div>
        </aside>
      </section>

      {/* ================= SEKCE 2: PRODEJNY ================= */}
      <section className="prodejny" id="prodejny" aria-labelledby="prodejny-title">
        <div className="section-head">
          <p className="eyebrow">Tři prodejny · Olomouc a Velký Týnec</p>
          <h2 id="prodejny-title">
            Přijďte se <em>projít</em>
          </h2>
          <p className="section-lead">
            Botu na fotce nepoznáte. Přijďte si ji obout, projděte se v ní po prodejně
            a my vám mezitím pomůžeme s výběrem stélky. Bez objednání, bez spěchu.
          </p>
        </div>

        <div className="prodejny-grid">
          {prodejny.map((p) => (
            <article key={p.id} className="prodejna">
              <h3>{p.nazev}</h3>
              <p className="prodejna-misto">{p.misto}</p>
              <p className="prodejna-pozn">{p.pozn}</p>
              <dl className="prodejna-info">
                <div>
                  <dt>Otevřeno</dt>
                  <dd>
                    {p.doba.map((d) => (
                      <span key={d}>{d}</span>
                    ))}
                  </dd>
                </div>
                <div>
                  <dt>Adresa</dt>
                  <dd>{p.adresa}</dd>
                </div>
              </dl>
              <a className="btn btn-tel" href={`tel:${p.telHref}`}>
                Zavolat {p.tel}
              </a>
            </article>
          ))}
        </div>

        <p className="prodejny-note">
          Vede vás Jakub Vykydal —{" "}
          <a href="tel:+420737948208">737 948 208</a>,{" "}
          <a href="mailto:jakub.vykydal@email.cz">jakub.vykydal@email.cz</a>. Rádi
          poradíme i po telefonu, jestli máme vaši velikost skladem.
        </p>
      </section>
    </main>
  );
}

/* Obrys chodidla — jediný grafický motiv webu, kreslený na míru */
function FootShape() {
  return (
    <g fill="currentColor">
      {/* chodidlo */}
      <path d="M20 22 C10 22 6 34 7 48 C8 60 12 66 13 74 C14 82 17 87 21 87 C26 87 29 81 29 73 C29 64 34 56 34 42 C34 30 29 22 20 22 Z" />
      {/* palec */}
      <ellipse cx="11" cy="12" rx="6" ry="7" />
      {/* prsty */}
      <ellipse cx="21" cy="9" rx="3.4" ry="4.4" />
      <ellipse cx="28" cy="11" rx="3" ry="4" />
      <ellipse cx="33.5" cy="14.5" rx="2.6" ry="3.4" />
      <ellipse cx="37.5" cy="19" rx="2.2" ry="3" />
    </g>
  );
}
