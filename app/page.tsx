export default function Page() {
  const sluzby = [
    {
      cislo: "01",
      nazev: "Nové pomníky a hrobky",
      popis:
        "Návrh, výroba a osazení jedno- i dvouhrobů, urnových hrobů a celých hrobek. Žula řezaná a leštěná v naší dílně, osazení přímo na hřbitově.",
    },
    {
      cislo: "02",
      nazev: "Opravy a rekonstrukce",
      popis:
        "Rovnání pokleslých pomníků, čištění zvětralého kamene, obnova zlacených nápisů a výměna prasklých dílů starých hrobů — i těch po dědečkovi.",
    },
    {
      cislo: "03",
      nazev: "Nápisy a přípisy",
      popis:
        "Pískování a zlacení jmen, dat i portrétů. Doplníme nový přípis k rodině na stávající desku tak, aby ladil s původním písmem.",
    },
    {
      cislo: "04",
      nazev: "Kámen do domu i na zahradu",
      popis:
        "Žulové a mramorové desky na kuchyňskou linku, stůl, schody, parapety i grilovací desky. A malé pomníčky pro zvířecí kamarády.",
    },
  ];

  const reference = [
    {
      img: "/section-2.webp",
      alt: "Leštěný žulový urnový pomník s bronzovou vázou na hřbitově",
      misto: "Praha",
      typ: "Urnový pomník, tmavá žula",
    },
    {
      img: "/section-1.webp",
      alt: "Detail zlaceného nápisu vysekaného do broušené žuly",
      misto: "okr. Hořovice",
      typ: "Zlacený nápis a rekonstrukce",
    },
  ];

  return (
    <main className="kh">
      <header className="kh-nav" aria-label="Hlavní navigace">
        <a className="kh-brand" href="#uvod" aria-label="Kamenictví Hořovice, úvod">
          <span className="kh-brand-line">Kamenictví</span>
          <span className="kh-brand-town">Hořovice</span>
        </a>
        <nav className="kh-links">
          <a href="#sluzby">Služby</a>
          <a href="#prace">Realizace</a>
          <a href="#onas">O nás</a>
        </nav>
        <a className="kh-tel" href="tel:+420774142894">
          <span className="kh-tel-label">Zavolat</span>
          <span className="kh-tel-num">774 142 894</span>
        </a>
      </header>

      <section className="kh-hero" id="uvod">
        <img
          className="kh-hero-img"
          src="/hero.webp"
          alt="Ručně opracovaný žulový pomník od Kamenictví Hořovice"
        />
        <div className="kh-hero-veil" aria-hidden="true" />
        <div className="kh-hero-inner">
          <p className="kh-eyebrow">Rodinné kamenictví Sládek · od roku 1998</p>
          <h1 className="kh-title">
            <span>Žula, která</span>
            <span className="kh-title-em">vydrží</span>
            <span>déle než vzpomínka.</span>
          </h1>
          <p className="kh-lede">
            Vyrábíme a opravujeme pomníky, hrobky a urnové hroby v Hořovicích a
            okolí. Kámen si sami řežeme, brousíme a osazujeme — a stojíme za ním,
            i když se za deset let vrátíte pro přípis.
          </p>
          <div className="kh-hero-cta">
            <a className="kh-btn" href="tel:+420774142894">
              Zavolat 774 142 894
            </a>
            <a className="kh-btn kh-btn-ghost" href="#sluzby">
              Co pro vás zvládneme
            </a>
          </div>
          <p className="kh-hero-loc">Komenského 50/4, 268 01 Hořovice</p>
        </div>
      </section>

      <section className="kh-services" id="sluzby">
        <div className="kh-sec-head">
          <p className="kh-sec-eyebrow">Co děláme</p>
          <h2 className="kh-sec-title">
            Od hřbitovní architektury po desku na vaši kuchyň.
          </h2>
          <p className="kh-sec-note">
            Nejčastěji řešíme čtyři věci. U každé začínáme tím, že se přijedeme
            podívat na místo — na hřbitov i k vám domů.
          </p>
        </div>
        <ul className="kh-grid">
          {sluzby.map((s) => (
            <li className="kh-card" key={s.cislo}>
              <span className="kh-card-num" aria-hidden="true">
                {s.cislo}
              </span>
              <h3 className="kh-card-title">{s.nazev}</h3>
              <p className="kh-card-text">{s.popis}</p>
            </li>
          ))}
        </ul>
        <p className="kh-quality">
          <span className="kh-quality-mark">✦</span> U nás dostanete žulu v té
          nejvyšší kvalitě — vybíráme ji kus po kuse.
        </p>
      </section>

      <section className="kh-trust" id="prace">
        <div className="kh-trust-head">
          <p className="kh-sec-eyebrow" id="onas">Rodina Sládkových</p>
          <h2 className="kh-sec-title kh-sec-title-light">
            Kámen se dělá pomalu. Proto ho děláme sami.
          </h2>
          <p className="kh-trust-lede">
            Jsme rodinné kamenictví z Hořovic. Nesnažíme se stihnout co nejvíc
            zakázek — snažíme se, aby ta vaše vypadala dobře i za dvacet let.
            Působíme po celé Praze, v Hořovicích a v okresech Beroun a Příbram.
          </p>
        </div>

        <div className="kh-refs">
          {reference.map((r) => (
            <figure className="kh-ref" key={r.typ}>
              <img className="kh-ref-img" src={r.img} alt={r.alt} />
              <figcaption className="kh-ref-cap">
                <span className="kh-ref-typ">{r.typ}</span>
                <span className="kh-ref-misto">{r.misto}</span>
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="kh-facts">
          <div className="kh-fact">
            <span className="kh-fact-k">Kde nás najdete</span>
            <span className="kh-fact-v">Komenského 50/4, Hořovice</span>
          </div>
          <div className="kh-fact">
            <span className="kh-fact-k">Kam dojedeme</span>
            <span className="kh-fact-v">Praha · Beroun · Příbram</span>
          </div>
          <div className="kh-fact">
            <span className="kh-fact-k">Kdy zavolat</span>
            <span className="kh-fact-v">
              <a href="tel:+420774142894">774 142 894</a>
            </span>
          </div>
        </div>
      </section>
    </main>
  );
}
