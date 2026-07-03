import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "GEMINI oční optika Olomouc — brýle na míru a měření zraku",
  description:
    "Oční optika Gemini v Olomouci: profesionální měření zraku, dioptrické i sluneční brýle na míru a poradenství s kontaktními čočkami. Objednejte se online.",
};

const sluzby = [
  {
    krok: "D",
    nazev: "Změříme zrak",
    popis:
      "Sedmiminutové vyšetření na přístrojích, které používají oční kliniky. Zjistíme přesné dioptrie a poradíme, jestli vám budou lépe slušet brýle, nebo čočky.",
    detail: "Refrakce · anamnéza · konzultace",
  },
  {
    krok: "I",
    nazev: "Vybereme obrubu",
    popis:
      "Zkusíte si dámské, pánské i dětské obruby — od známých značek po originální kolekce, které jinde v Olomouci nenajdete. Poradíme podle tvaru obličeje.",
    detail: "Dámské · pánské · dětské",
  },
  {
    krok: "O",
    nazev: "Vybrousíme skla",
    popis:
      "Brýlová skla brousíme na míru vašim dioptriím i rámu. Antireflex, ztmavovací i tenká skla pro silnější hodnoty — vysvětlíme rozdíly bez zbytečných řečí.",
    detail: "Antireflex · samozabarvovací · tenká",
  },
  {
    krok: "P",
    nazev: "Naučíme s čočkami",
    popis:
      "Kontaktní čočky vybereme podle vašich očí a v klidu vás naučíme, jak je nasazovat a bezpečně nosit. Bez studu a bez spěchu.",
    detail: "Poradenství · nácvik · roztoky",
  },
];

const duvody = [
  {
    nazev: "Školení na klinikách Gemini",
    popis:
      "Náš personál je proškolený na očních klinikách Gemini. Nejsme jen prodejna brýlí — poznáme, kdy patří výsledek za lékařem.",
  },
  {
    nazev: "Skla od předních výrobců",
    popis:
      "Obruby i skla vybíráme pečlivě od zavedených výrobců. Nepodstrkujeme vám nejdražší variantu — doporučíme tu, která dává pro vaše oči smysl.",
  },
  {
    nazev: "Prevence, na kterou myslíme",
    popis:
      "Screening zraku vozíme i na veřejné akce a do firem. Zrak je nejdůležitější smysl a včasná prevence dokáže hodně.",
  },
];

export default function Page() {
  return (
    <main className="go-main">
      <header className="go-nav">
        <a className="go-logo" href="#" aria-label="GEMINI oční optika, domovská stránka">
          <span className="go-logo-mark" aria-hidden="true">
            <span className="go-eye go-eye--l" />
            <span className="go-eye go-eye--r" />
          </span>
          <span className="go-logo-word">GEMINI</span>
          <span className="go-logo-sub">oční optika · Olomouc</span>
        </a>
        <a className="go-nav-cta" href="#objednat">
          Objednat měření zraku
        </a>
      </header>

      <section className="go-hero" aria-labelledby="go-hero-title">
        <div className="go-hero-media">
          <img
            src="/hero.webp"
            alt="Detail brýlových obrub a čoček v olomoucké optice Gemini"
            className="go-hero-img"
          />
          <div className="go-hero-lens" aria-hidden="true" />
        </div>
        <div className="go-hero-body">
          <p className="go-eyebrow">Vidět ostře, sluší to každému</p>
          <h1 id="go-hero-title" className="go-hero-title">
            Dvě oči,
            <br />
            <span className="go-hero-accent">jeden pár na míru.</span>
          </h1>
          <p className="go-hero-lede">
            Gemini je oční optika v Olomouci, kde se o váš zrak stará personál
            školený na očních klinikách. Změříme, poradíme a vybrousíme brýle,
            se kterými uvidíte i vypadáte líp.
          </p>
          <div className="go-hero-actions">
            <a className="go-btn go-btn--solid" href="#objednat">
              Objednat se online
            </a>
            <a className="go-btn go-btn--ghost" href="#sluzby">
              Co u nás zvládneme
            </a>
          </div>
          <p className="go-hero-note">
            Měření zraku pro objednané je&nbsp;zdarma.
          </p>
        </div>
      </section>

      <section className="go-services" id="sluzby" aria-labelledby="go-services-title">
        <div className="go-section-head">
          <p className="go-eyebrow">Od vyšetření k hotovým brýlím</p>
          <h2 id="go-services-title" className="go-section-title">
            Jak to u nás chodí
          </h2>
          <p className="go-section-lede">
            Čtyři kroky, ze kterých vzniknou vaše brýle nebo čočky. Přijít můžete
            klidně jen se dotázat — nikam vás netlačíme.
          </p>
        </div>

        <ol className="go-steps">
          {sluzby.map((s) => (
            <li key={s.nazev} className="go-step">
              <span className="go-step-mark" aria-hidden="true">
                {s.krok}
              </span>
              <div className="go-step-body">
                <h3 className="go-step-title">{s.nazev}</h3>
                <p className="go-step-text">{s.popis}</p>
                <p className="go-step-detail">{s.detail}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="go-trust" id="o-nas" aria-labelledby="go-trust-title">
        <figure className="go-trust-media">
          <img
            src="/section-1.webp"
            alt="Optometrista při měření zraku zákazníka v optice Gemini"
            className="go-trust-img"
          />
        </figure>
        <div className="go-trust-body">
          <p className="go-eyebrow">Proč právě Gemini</p>
          <h2 id="go-trust-title" className="go-section-title">
            Moderní optika, ne jen regál&nbsp;s&nbsp;brýlemi
          </h2>
          <dl className="go-reasons">
            {duvody.map((d) => (
              <div key={d.nazev} className="go-reason">
                <dt className="go-reason-title">{d.nazev}</dt>
                <dd className="go-reason-text">{d.popis}</dd>
              </div>
            ))}
          </dl>
          <p className="go-trust-where">
            Najdete nás v Olomouci — a dalších deset poboček Gemini po celé
            České republice.
          </p>
        </div>
      </section>
    </main>
  );
}
