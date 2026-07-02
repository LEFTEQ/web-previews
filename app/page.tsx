export const metadata = {
  title: "Jiří Pokorný — daňoví poradci | Liberec",
  description:
    "Daňová kancelář Jiří Pokorný v Liberci: daňové poradenství, účetnictví, mzdy, audit a školení. Léta praxe, přístup malé firmy. Zavolejte nebo napište — odpovídáme rychle.",
  openGraph: {
    title: "Jiří Pokorný — daňoví poradci s.r.o.",
    description:
      "Daňové, účetní a poradenské služby v Liberci. Zkušenosti velké praxe, pružnost malé kanceláře.",
    locale: "cs_CZ",
    type: "website",
  },
};

const sluzby = [
  {
    par: "§ 1",
    nazev: "Daňové poradenství",
    popis:
      "Přiznání k dani z příjmů, DPH i silniční dani. Hlídáme termíny za vás a s plnou mocí poradce posouváme podání daně z příjmů až na červenec.",
    pro: "Pro podnikatele, s.r.o. i fyzické osoby",
  },
  {
    par: "§ 2",
    nazev: "Vedení účetnictví",
    popis:
      "Kompletní účetnictví i daňová evidence. Doklady předáte elektronicky, výstupy dostáváte srozumitelně — víte, kolik vyděláváte a kolik zaplatíte na daních.",
    pro: "Měsíční paušál bez překvapení",
  },
  {
    par: "§ 3",
    nazev: "Mzdy a personalistika",
    popis:
      "Výplatní pásky, přihlášky na pojišťovny, roční zúčtování, exekuce i benefity. Zaměstnanci dostanou výplatu správně a včas, vy jedno starosti méně.",
    pro: "Od 1 do 250 zaměstnanců",
  },
  {
    par: "§ 4",
    nazev: "Ekonomické a právní poradenství",
    popis:
      "Založení firmy, přeměny společností, smlouvy s daňovým dopadem. Než podepíšete, spočítáme, co to bude znamenat na daních.",
    pro: "Ve spolupráci s advokáty",
  },
  {
    par: "§ 5",
    nazev: "Audit a ověření",
    popis:
      "Povinný i dobrovolný audit účetní závěrky, ověření dotací a projektů. Zpráva auditora, na kterou se banka i úřad může spolehnout.",
    pro: "Ve spolupráci s auditory KA ČR",
  },
  {
    par: "§ 6",
    nazev: "Zastupování před úřady",
    popis:
      "Kontrola z finančního úřadu? Jednáme za vás. Přebíráme komunikaci, připravíme podklady a hájíme váš postup až po odvolání.",
    pro: "Na plnou moc, po celém Liberecku",
  },
];

const terminy = [
  { den: "25.", co: "každý měsíc — přiznání a platba DPH, kontrolní hlášení" },
  { den: "20.", co: "každý měsíc — mzdy: odvody pojistného a záloh na daň" },
  { den: "1. 4.", co: "daň z příjmů — základní termín podání přiznání" },
  { den: "1. 7.", co: "daň z příjmů — termín s daňovým poradcem (o 3 měsíce víc času)" },
];

export default function Page() {
  return (
    <main className="dp">
      {/* ================= HERO ================= */}
      <header className="hero" id="uvod">
        <div className="hero-top">
          <div className="wordmark" aria-label="Jiří Pokorný — daňoví poradci s.r.o.">
            <span className="wordmark-par" aria-hidden="true">§</span>
            <span className="wordmark-text">
              Pokorný<em>&nbsp;/ daňoví poradci</em>
            </span>
          </div>
          <a className="hero-tel" href="tel:+420485100100">
            +420 485 100 100
          </a>
        </div>

        <div className="hero-body">
          <p className="hero-eyebrow">Daňová kancelář · Liberec · zapsáni v Komoře daňových poradců ČR</p>
          <h1 className="hero-title">
            <span className="line line-1">Daně mají</span>
            <span className="line line-2">paragrafy<span className="tecka">.</span></span>
            <span className="line line-3">Vy máte <strong>nás</strong><span className="tecka">.</span></span>
          </h1>
          <p className="hero-lead">
            Přiznání, účetnictví, mzdy i kontrola z finančního úřadu — vyřídíme za
            vás, srozumitelně a včas. Zkušenosti dlouholeté praxe, pozornost malé
            kanceláře: znáte jméno člověka, který vaše daně dělá.
          </p>
          <div className="hero-cta">
            <a className="btn btn-plna" href="tel:+420485100100">Zavolat do kanceláře</a>
            <a className="btn btn-obrys" href="mailto:kancelar@pokorny-dane.cz">Napsat e‑mail</a>
          </div>
        </div>

        {/* signature: obří paragraf složený z textu zákona */}
        <div className="hero-par" aria-hidden="true">
          <svg viewBox="0 0 320 560" className="par-svg" role="presentation" focusable="false">
            <defs>
              <clipPath id="parClip">
                <text x="160" y="470" textAnchor="middle" className="par-glyph">§</text>
              </clipPath>
            </defs>
            <g clipPath="url(#parClip)">
              <rect x="0" y="0" width="320" height="560" className="par-fill" />
              {Array.from({ length: 28 }).map((_, i) => (
                <line key={i} x1="0" y1={i * 20 + 8} x2="320" y2={i * 20 + 8} className="par-line" />
              ))}
            </g>
            <text x="160" y="470" textAnchor="middle" className="par-glyph par-stroke">§</text>
          </svg>
        </div>

        <div className="hero-pas" aria-hidden="true">
          <span>daň z příjmů</span><span>·</span><span>DPH</span><span>·</span><span>mzdy</span><span>·</span><span>audit</span><span>·</span><span>kontrolní hlášení</span><span>·</span><span>silniční daň</span><span>·</span><span>zastupování</span>
        </div>
      </header>

      {/* ================= SLUŽBY ================= */}
      <section className="sluzby" id="sluzby" aria-labelledby="sluzby-h">
        <div className="sekce-hlava">
          <h2 id="sluzby-h">Co za vás vyřídíme</h2>
          <p>
            Šest agend, jedna kancelář. Každou vede konkrétní člověk, kterému se
            dovoláte — žádná anonymní linka.
          </p>
        </div>

        <ul className="sluzby-mrizka">
          {sluzby.map((s) => (
            <li key={s.par} className="sluzba">
              <span className="sluzba-par" aria-hidden="true">{s.par}</span>
              <h3>{s.nazev}</h3>
              <p>{s.popis}</p>
              <p className="sluzba-pro">{s.pro}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* ================= DŮVĚRA + TERMÍNY ================= */}
      <section className="duvera" id="o-nas" aria-labelledby="duvera-h">
        <div className="duvera-sloupce">
          <div className="duvera-text">
            <h2 id="duvera-h">Kancelář, kde vás znají jménem</h2>
            <p>
              Daňová kancelář Jiří Pokorný pracuje v Liberci pro živnostníky,
              rodinné firmy i společnosti se stovkami zaměstnanců. Spojujeme
              zkušenosti získané léty daňové praxe s tím, co velké kanceláře
              nabídnout neumí: pružnou reakci a osobní přístup.
            </p>
            <p>
              Za vaše přiznání ručí daňový poradce zapsaný v Komoře daňových
              poradců ČR — s profesním pojištěním odpovědnosti. Když finanční
              úřad zavolá, zvedáme telefon my, ne vy.
            </p>
            <ul className="duvera-body-list">
              <li>
                <strong>Poradce se zápisem v KDP ČR</strong>
                <span>ručíme za svou práci, pojištění odpovědnosti v ceně</span>
              </li>
              <li>
                <strong>Odpověď do druhého pracovního dne</strong>
                <span>na e‑mail i telefon — vyzkoušejte nás</span>
              </li>
              <li>
                <strong>Liberec a okolí, klidně i online</strong>
                <span>doklady předáte elektronicky, na podpis se sejdeme osobně</span>
              </li>
            </ul>
          </div>

          <aside className="kalendar" aria-labelledby="kalendar-h">
            <h3 id="kalendar-h">
              <span className="kalendar-par" aria-hidden="true">§</span> Daňový kalendář — co hlídáme za vás
            </h3>
            <ol className="kalendar-list">
              {terminy.map((t) => (
                <li key={t.den + t.co}>
                  <span className="kalendar-den">{t.den}</span>
                  <span className="kalendar-co">{t.co}</span>
                </li>
              ))}
            </ol>
            <p className="kalendar-pozn">
              S naší plnou mocí získáte na daň z příjmů tři měsíce navíc —
              a jistotu, že žádný termín nepropadne.
            </p>
          </aside>
        </div>
      </section>
    </main>
  );
}
