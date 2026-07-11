import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Servis & Consulting — opravy počítačů a notebooků v Brně",
  description:
    "Váš IT soused v Brně. Opravíme notebook, stolní PC i Mac — čištění, výměna disku za SSD, přeinstalace, záchrana dat. Diagnostika zdarma, oprava obvykle do 48 hodin.",
  openGraph: {
    title: "Servis & Consulting — opravy počítačů v Brně",
    description:
      "Notebook nestartuje, PC hlučí, disk odešel? V Brně opravíme počítač obvykle do 48 hodin. Diagnostika zdarma, jasná cena předem.",
    type: "website",
    locale: "cs_CZ",
    images: [{ url: "/hero.webp", width: 1200, height: 630, alt: "Servisní stůl s rozebraným notebookem" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Servis & Consulting — opravy počítačů v Brně",
    description: "Váš IT soused v Brně. Diagnostika zdarma, oprava obvykle do 48 hodin.",
  },
};

const diagnostika = [
  {
    kod: "E-01",
    zavada: "Notebook nenaběhne, černá obrazovka",
    priciny: "Vadný napájecí obvod, paměť nebo záložní baterie CMOS.",
    resime: "Změříme napájení, přeskládáme paměti, v případě potřeby přeletujeme napájecí sekci.",
  },
  {
    kod: "E-02",
    zavada: "Počítač je pomalý, dlouho startuje",
    priciny: "Zaplněný nebo dosluhující mechanický disk, málo paměti, nálož programů na pozadí.",
    resime: "Vyměníme disk za SSD, naklonujeme data, přidáme RAM a uklidíme systém.",
  },
  {
    kod: "E-03",
    zavada: "Ventilátor hučí, počítač se přehřívá a vypíná",
    priciny: "Ucpaný chladič prachem, vyschlá teplovodivá pasta.",
    resime: "Rozebereme, vyčistíme chladicí systém a naneseme novou pastu.",
  },
  {
    kod: "E-04",
    zavada: "Vylitá tekutina do klávesnice",
    priciny: "Zkrat na desce, koroze kontaktů, nefunkční klávesy.",
    resime: "Okamžitě odpojíme, vyčistíme desku v ultrazvuku, vyměníme poškozené díly.",
  },
  {
    kod: "E-05",
    zavada: "Ztracená data, disk klape nebo není vidět",
    priciny: "Poškozené sektory, logická chyba souborového systému, mechanická závada.",
    resime: "Vytvoříme bit-kopii, obnovíme data v čisté zóně, nikdy nepracujeme na originále.",
  },
  {
    kod: "E-06",
    zavada: "Prasklý displej notebooku",
    priciny: "Mechanické poškození panelu nebo kabelu.",
    resime: "Vyměníme LCD/LED panel za nový, sladíme rozlišení a jas s originálem.",
  },
];

export default function Page() {
  return (
    <main className="page">
      <header className="topbar">
        <a className="brand" href="#" aria-label="Servis & Consulting, domů">
          <span className="brand__mark" aria-hidden="true">
            <span className="brand__amp">&amp;</span>
          </span>
          <span className="brand__name">
            Servis<span className="brand__con">&nbsp;&amp;&nbsp;Consulting</span>
          </span>
        </a>
        <nav className="nav" aria-label="Hlavní">
          <a href="#zavady">Poruchy</a>
          <a href="#dilna">Dílna</a>
          <a className="nav__cta" href="tel:+420532190190">Zavolat</a>
        </nav>
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero__copy">
          <p className="eyebrow">Servisní dílna · Brno-střed</p>
          <h1 id="hero-title">
            Váš počítač <span className="hl">nestartuje?</span>
            <br />
            Rozebereme ho ještě dnes.
          </h1>
          <p className="hero__lead">
            Notebooky, stolní PC i Macy. Diagnostiku vždycky uděláme zdarma a řekneme
            rovnou, co je za problém a kolik oprava stojí — teprve pak něco děláme. Většinu
            oprav vracíme zákazníkům z Brna a okolí do 48 hodin.
          </p>
          <div className="hero__actions">
            <a className="btn btn--solid" href="tel:+420532190190">Zavolat do dílny</a>
            <a className="btn btn--ghost" href="#zavady">Popsat závadu</a>
          </div>
          <dl className="hero__facts">
            <div>
              <dt>Diagnostika</dt>
              <dd>zdarma</dd>
            </div>
            <div>
              <dt>Běžná oprava</dt>
              <dd>do 48 h</dd>
            </div>
            <div>
              <dt>Záchrana dat</dt>
              <dd>bez zálohy = neplatíte</dd>
            </div>
          </dl>
        </div>
        <figure className="hero__media">
          <img
            src="/hero.webp"
            alt="Rozebraný notebook na servisním stole, technik měří napájení na základní desce"
            width={880}
            height={1100}
            loading="eager"
          />
          <figcaption>Servisní stůl — sem přijde váš stroj na rozbor.</figcaption>
        </figure>
      </section>

      <section className="zavady" id="zavady" aria-labelledby="zavady-title">
        <div className="section-head">
          <p className="eyebrow">Katalog závad</p>
          <h2 id="zavady-title">S čím k nám lidé chodí nejčastěji</h2>
          <p className="section-head__lead">
            Nejsme e-shop se šablonami. Tohle je skutečný výtah z naší servisní knihy —
            poznáte svůj problém a víte, do čeho jdete.
          </p>
        </div>
        <ol className="cards">
          {diagnostika.map((z) => (
            <li className="card" key={z.kod}>
              <span className="card__code">{z.kod}</span>
              <h3 className="card__title">{z.zavada}</h3>
              <p className="card__row">
                <span className="card__label">Příčina</span>
                {z.priciny}
              </p>
              <p className="card__row">
                <span className="card__label">Řešíme</span>
                {z.resime}
              </p>
            </li>
          ))}
        </ol>
        <p className="zavady__note">
          Vaše závada tady není? Nevadí — zavolejte, popište, co stroj dělá, a my poradíme,
          jestli má oprava smysl.
        </p>
      </section>

      <section className="dilna" id="dilna" aria-labelledby="dilna-title">
        <div className="dilna__grid">
          <figure className="dilna__media">
            <img
              src="/section-1.webp"
              alt="Detail pracovního stolu s nářadím na opravu počítačů"
              width={760}
              height={560}
              loading="lazy"
            />
          </figure>
          <div className="dilna__copy">
            <p className="eyebrow">O dílně</p>
            <h2 id="dilna-title">Váš IT soused, ne anonymní call centrum</h2>
            <p>
              Servis &amp; Consulting je malá brněnská dílna. U jednoho stolu ten samý technik
              stroj přijme, rozebere, opraví a vysvětlí vám, co se dělo — bez ajťáckého
              žargonu. Když je levnější koupit nový počítač než opravovat, řekneme to na
              rovinu.
            </p>
            <ul className="promises">
              <li>Cenu odsouhlasíte předem, faktura přesně sedí.</li>
              <li>K vašim datům se nikdo cizí nedostane — pracujeme na kopii.</li>
              <li>Na provedenou opravu dáváme 6 měsíců záruky.</li>
            </ul>
          </div>
        </div>

        <div className="reference">
          <figure className="reference__quote">
            <blockquote>
              „Notebook mi přestal nabíjet den před odevzdáním diplomky. Přinesla jsem ho
              v pondělí ráno, ve středu jsem si ho vyzvedla opravený. Zachránili mi termín.“
            </blockquote>
            <figcaption>
              <strong>Kateřina H.</strong>
              <span>studentka, Brno-Královo Pole</span>
            </figcaption>
          </figure>
          <figure className="reference__media">
            <img
              src="/section-2.webp"
              alt="Opravený notebook připravený k předání zákazníkovi"
              width={620}
              height={480}
              loading="lazy"
            />
          </figure>
        </div>
      </section>
    </main>
  );
}
