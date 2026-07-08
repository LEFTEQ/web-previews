import type { CSSProperties } from "react";

export default function Page() {
  const hours: { day: string; time: string }[] = [
    { day: "Pondělí", time: "8:00 – 12:00 · 15:00 – 18:00" },
    { day: "Úterý", time: "8:00 – 12:00 · 15:00 – 18:00" },
    { day: "Středa", time: "8:00 – 12:00 · 15:00 – 18:00" },
    { day: "Čtvrtek", time: "8:00 – 12:00 · 15:00 – 18:00" },
    { day: "Pátek", time: "8:00 – 12:00 · 14:00 – 16:00" },
    { day: "Sobota", time: "jen po telefonické domluvě" },
    { day: "Neděle", time: "zavřeno" },
  ];

  const services: { title: string; desc: string; tag: string }[] = [
    {
      tag: "Preventivní péče",
      title: "Očkování a čipování",
      desc: "Kompletní vakcinační programy pro psy, kočky i drobné savce, čipování s registrací a vystavení pasu pro cesty do zahraničí.",
    },
    {
      tag: "Interní medicína",
      title: "Vyšetření a diagnostika",
      desc: "Klinické vyšetření, odběry krve, ultrazvuk a řešení akutních i chronických potíží. Vždy vám vysvětlíme, co zjišťujeme a proč.",
    },
    {
      tag: "Chirurgie",
      title: "Operace a kastrace",
      desc: "Kastrace, ošetření ran, odstranění výrůstků a další zákroky v šetrné anestezii s pečlivým pooperačním dohledem.",
    },
    {
      tag: "Zubní péče",
      title: "Stomatologie",
      desc: "Odstranění zubního kamene ultrazvukem, ošetření zánětů a extrakce. Zdravá tlama znamená spokojenější zvíře.",
    },
  ];

  const holidays: string[] = [
    "pátek 26. 6.",
    "16. – 17. 7.",
    "23. – 31. 7.",
    "10. – 14. 8.",
  ];

  return (
    <main className="vet">
      <header className="vet-topbar">
        <a className="vet-word" href="#uvod" aria-label="MVDr. Marek Chyba, veterinární ordinace">
          <span className="vet-word__cross" aria-hidden="true">
            <span></span>
            <span></span>
          </span>
          <span className="vet-word__text">
            <strong>Chyba</strong>
            <em>veterinární ordinace · Brno</em>
          </span>
        </a>
        <nav className="vet-nav" aria-label="Hlavní">
          <a href="#sluzby">Služby</a>
          <a href="#doba">Ordinační doba</a>
          <a href="#kontakt">Kontakt</a>
        </nav>
        <a className="vet-call vet-call--top" href="tel:+420541000000">
          Zavolat
        </a>
      </header>

      <section className="vet-hero" id="uvod">
        <div className="vet-hero__media">
          <img
            src="/hero.webp"
            alt="MVDr. Marek Chyba při vyšetření pacienta v ordinaci"
            className="vet-hero__img"
          />
          <span className="vet-hero__badge">Od roku 2001 · Slovanské náměstí, Brno</span>
        </div>
        <div className="vet-hero__body">
          <p className="vet-hero__eyebrow">Privátní veterinární ordinace</p>
          <h1 className="vet-hero__title">
            Ke každému pacientovi
            <span className="vet-hero__accent">jako by byl náš vlastní.</span>
          </h1>
          <p className="vet-hero__lede">
            Přes dvacet let pečujeme o brněnská zvířata na Slovanském náměstí.
            Nespěcháme, vysvětlíme vám každé rozhodnutí a léčbu vedeme tak, aby jí
            rozuměl i pán — ne jen doktor.
          </p>
          <div className="vet-hero__cta">
            <a className="vet-call" href="tel:+420541000000">
              Zavolat do ordinace
            </a>
            <a className="vet-hero__link" href="#doba">
              Kdy máme otevřeno →
            </a>
          </div>
          <dl className="vet-hero__facts">
            <div>
              <dt>Adresa</dt>
              <dd>Slovanské nám. 6, Brno</dd>
            </div>
            <div>
              <dt>Ordinujeme</dt>
              <dd>Psi · kočky · drobní savci</dd>
            </div>
            <div>
              <dt>Objednání</dt>
              <dd>Telefonicky, i akutní případy</dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="vet-services" id="sluzby" aria-labelledby="sluzby-nadpis">
        <div className="vet-services__head">
          <p className="vet-section__eyebrow">Co pro vaše zvíře uděláme</p>
          <h2 id="sluzby-nadpis" className="vet-section__title">
            Péče, kterou zvládneme na jednom místě
          </h2>
        </div>
        <div className="vet-services__grid">
          <div className="vet-services__list">
            {services.map((s, i) => (
              <article className="vet-card" key={s.title}>
                <span className="vet-card__num" aria-hidden="true">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="vet-card__text">
                  <p className="vet-card__tag">{s.tag}</p>
                  <h3 className="vet-card__title">{s.title}</h3>
                  <p className="vet-card__desc">{s.desc}</p>
                </div>
              </article>
            ))}
          </div>
          <figure className="vet-services__figure">
            <img
              src="/section-1.webp"
              alt="Ošetření zvířecího pacienta v ordinaci"
              className="vet-services__img"
            />
            <figcaption>
              Menší ordinace znamená, že vás i vaše zvíře poznáme jménem.
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="vet-trust" id="kontakt" aria-labelledby="trust-nadpis">
        <div className="vet-trust__grid">
          <figure className="vet-trust__figure">
            <img
              src="/section-2.webp"
              alt="Interiér veterinární ordinace MVDr. Marka Chyby"
              className="vet-trust__img"
            />
          </figure>
          <div className="vet-trust__body">
            <p className="vet-section__eyebrow">O ordinaci</p>
            <h2 id="trust-nadpis" className="vet-section__title">
              Tradice od roku 2001, přístup po jednom pacientovi
            </h2>
            <p className="vet-trust__text">
              Jsme privátní ordinace — žádná anonymní síť, žádné běžící pásy.
              Věříme, že dobrá veterina začíná tím, že vás vyslechneme a najdeme
              si čas. Proto k nám lidé z Brna vodí svá zvířata i po letech, často
              už druhou generaci mazlíčků.
            </p>

            <div className="vet-hours" id="doba">
              <h3 className="vet-hours__title">Ordinační doba</h3>
              <ul className="vet-hours__list">
                {hours.map((h) => (
                  <li key={h.day} className={h.time === "zavřeno" ? "is-closed" : undefined}>
                    <span>{h.day}</span>
                    <span>{h.time}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="vet-holiday" role="note">
              <p className="vet-holiday__label">Plánovaná dovolená</p>
              <ul className="vet-holiday__list">
                {holidays.map((d) => (
                  <li key={d}>{d}</li>
                ))}
              </ul>
              <p className="vet-holiday__note">
                V akutních případech se ozvěte telefonicky, poradíme s nejbližší
                pohotovostí.
              </p>
            </div>

            <a className="vet-call vet-call--wide" href="tel:+420541000000">
              Zavolat a objednat termín
            </a>
          </div>
        </div>
      </section>

      <a className="vet-fab" href="tel:+420541000000" aria-label="Zavolat do ordinace">
        <span className="vet-fab__icon" aria-hidden="true">☎</span>
        <span className="vet-fab__text">Zavolat</span>
      </a>
    </main>
  );
}
