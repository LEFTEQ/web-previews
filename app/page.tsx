export const metadata = {
  title: "Veterinární univerzita Brno — Léčíme zvířata, učíme veterináře",
  description:
    "Veterinární univerzita Brno: univerzitní veterinární kliniky otevřené veřejnosti, pohotovost 24/7 a studium veterinárního lékařství v areálu na Palackého třídě.",
  openGraph: {
    title: "Veterinární univerzita Brno",
    description:
      "Univerzitní veterinární kliniky pro psy, kočky, koně i exotická zvířata. Pohotovost 24/7 v Brně na Palackého třídě.",
    locale: "cs_CZ",
    type: "website",
  },
};

const kliniky = [
  {
    kod: "K01",
    nazev: "Klinika malých zvířat",
    pro: "psi · kočky · drobní savci",
    popis:
      "Interní medicína, chirurgie, ortopedie i onkologie pod jednou střechou. Váš pes či kočka projde vyšetřením na pracovišti, kde se zároveň učí budoucí veterináři — proto se u nás nikdy nespěchá na diagnózu.",
    detail: "CT, MRI a laboratoř přímo v areálu",
  },
  {
    kod: "K02",
    nazev: "Klinika koní",
    pro: "koně · poníci · osli",
    popis:
      "Ortopedie, kolikové operace a reprodukce. Jediné pracoviště na Moravě s vlastní operační halou pro koně a možností hospitalizace v boxech s nepřetržitým dohledem.",
    detail: "výjezdy k chovatelům po celé Moravě",
  },
  {
    kod: "K03",
    nazev: "Ptáci, plazi a exoti",
    pro: "papoušci · želvy · hadi · fretky",
    popis:
      "Exotická zvířata potřebují lékaře, který jich viděl stovky, ne jednoho ročně. Naše ambulance patří k nejvytíženějším ve střední Evropě — přijímáme pacienty, které jinde odmítli.",
    detail: "endoskopie a zobrazování pro nejmenší pacienty",
  },
  {
    kod: "K04",
    nazev: "Pohotovost 24/7",
    pro: "akutní stavy · otravy · úrazy",
    popis:
      "Nepřetržitá služba pro malá zvířata, 365 dní v roce. V noci a o svátcích volejte předem — připravíme sál i tým, než dorazíte.",
    detail: "vjezd do areálu z Palackého třídy",
  },
];

const duvody = [
  {
    cislo: "1918",
    text: "Rok založení. Jsme nejstarší veterinární škola v českých zemích — přes sto let léčíme zvířata a vychováváme ty, kdo je budou léčit po nás.",
  },
  {
    cislo: "3 000+",
    text: "Studentů veterinárního lékařství, hygieny a farmacie. Každý pacient u nás pomáhá učit další generaci veterinářů.",
  },
  {
    cislo: "20 000",
    text: "Pacientů ročně projde univerzitními klinikami — od štěňat po dostihové koně, od andulek po krajty.",
  },
  {
    cislo: "24/7",
    text: "Pohotovost pro malá zvířata bez přestávky. Když se něco stane ve tři ráno, víte, kam jet.",
  },
];

export default function Page() {
  return (
    <main className="vet">
      {/* ===== HERO ===== */}
      <header className="hero">
        <div className="hero-top">
          <span className="wordmark" aria-label="Veterinární univerzita Brno">
            VET<span className="wordmark-uni">UNI</span>
            <span className="wordmark-city">Brno</span>
          </span>
          <a className="hero-tel" href="tel:+420541561111">
            Pohotovost 24/7 · 541 561 111
          </a>
        </div>

        <div className="hero-body">
          {/* signature: EKG linka procházející titulkem */}
          <h1 className="hero-title">
            <span className="hero-line hero-line-1">Léčíme</span>
            <span className="hero-line hero-line-2">
              zvířata<span className="hero-dot" aria-hidden="true">.</span>
            </span>
            <span className="hero-ekg" aria-hidden="true">
              <svg viewBox="0 0 1200 120" preserveAspectRatio="none" focusable="false">
                <path
                  className="ekg-path"
                  d="M0,60 L180,60 L210,60 L228,20 L246,100 L264,42 L282,60 L520,60 L550,60 L568,14 L588,106 L606,38 L624,60 L900,60 L930,60 L948,24 L966,98 L984,46 L1002,60 L1200,60"
                  fill="none"
                />
              </svg>
            </span>
            <span className="hero-line hero-line-3">Učíme ty,</span>
            <span className="hero-line hero-line-4">kdo je budou léčit dál.</span>
          </h1>

          <p className="hero-lead">
            Univerzitní veterinární kliniky v Brně jsou otevřené veřejnosti. Přiveďte psa,
            kočku, koně i papouška — vyšetří je specialisté, kteří zároveň učí budoucí
            veterináře. Palackého třída 1946/1, Brno-Královo Pole.
          </p>

          <div className="hero-cta">
            <a className="btn btn-primary" href="tel:+420541561111">
              Zavolat pohotovost
            </a>
            <a className="btn btn-ghost" href="#kliniky">
              Vybrat kliniku
            </a>
          </div>
        </div>

        <ul className="hero-strip" aria-label="Klíčová fakta">
          <li>od r. 1918</li>
          <li>4 univerzitní kliniky</li>
          <li>pohotovost nonstop</li>
          <li>Brno-Královo Pole</li>
        </ul>
      </header>

      {/* ===== SEKCE 1: KLINIKY ===== */}
      <section className="kliniky" id="kliniky" aria-labelledby="kliniky-h">
        <div className="sekce-hlava">
          <p className="eyebrow">Kam s vaším zvířetem</p>
          <h2 id="kliniky-h">Čtyři kliniky, jeden areál</h2>
          <p className="sekce-uvod">
            Označení K01–K04 najdete i na budovách v kampusu — podle nich trefíte na
            správnou ambulanci. Objednaní pacienti mají přednost, akutní stavy bereme hned.
          </p>
        </div>

        <div className="kliniky-mrizka">
          {kliniky.map((k) => (
            <article className="karta" key={k.kod}>
              <div className="karta-hlava">
                <span className="karta-kod">{k.kod}</span>
                <span className="karta-pro">{k.pro}</span>
              </div>
              <h3>{k.nazev}</h3>
              <p>{k.popis}</p>
              <p className="karta-detail">
                <span className="detail-tecka" aria-hidden="true" />
                {k.detail}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* ===== SEKCE 2: DŮVĚRA ===== */}
      <section className="duvera" aria-labelledby="duvera-h">
        <div className="sekce-hlava sekce-hlava-svetla">
          <p className="eyebrow eyebrow-svetly">Proč univerzitní klinika</p>
          <h2 id="duvera-h">
            Lékař, který učí, si nemůže dovolit odhadovat
          </h2>
          <p className="sekce-uvod sekce-uvod-svetly">
            Každou diagnózu u nás vidí nejen majitel, ale i posluchárna budoucích
            veterinářů. To nutí k důslednosti: kompletní vyšetření, vysvětlení nálezu
            srozumitelně a písemná zpráva, se kterou můžete jít i k vašemu místnímu lékaři.
          </p>
        </div>

        <dl className="duvera-mrizka">
          {duvody.map((d) => (
            <div className="duvera-pole" key={d.cislo}>
              <dt>{d.cislo}</dt>
              <dd>{d.text}</dd>
            </div>
          ))}
        </dl>

        <figure className="citace">
          <blockquote>
            „S fenkou po otravě jsme přijeli ve dvě v noci. Sál byl připravený, ráno mi
            volali, že je stabilní, a odpoledne jsem dostala zprávu, které rozuměl i náš
            veterinář v Kuřimi. Tohle jinde nezažijete.“
          </blockquote>
          <figcaption>— majitelka border kolie, Brno-Řečkovice</figcaption>
        </figure>
      </section>
    </main>
  );
}
