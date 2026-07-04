import type { CSSProperties } from "react";

export default function Page() {
  const services = [
    {
      code: "E-001",
      title: "Diagnostika a oprava",
      lead: "Nabootuje, ale zlobí?",
      body: "Změříme, otestujeme, najdeme chybu. Bootloop, modré obrazovky, přehřívání, náhodné vypínání — dostanete konkrétní příčinu a cenu předem, ne mlhavý odhad.",
      tag: "stolní i notebooky",
    },
    {
      code: "E-002",
      title: "Záchrana dat",
      lead: "Disk neklape, ale mizí soubory?",
      body: "Klonování vadných disků, obnova z poškozených oddílů, zálohování před servisem. Data řešíme jako první — hardware je vyměnitelný, vaše faktury a fotky ne.",
      tag: "HDD · SSD · RAID",
    },
    {
      code: "E-003",
      title: "Upgrade a čištění",
      lead: "Startuje pět minut?",
      body: "Výměna za SSD, přidání RAM, přemazání teplovodivé pasty, vyfoukání prachu. Ze staršího stroje uděláme použitelný, aniž byste kupovali nový.",
      tag: "SSD · RAM · pasta",
    },
    {
      code: "E-004",
      title: "Firemní IT",
      lead: "Padla vám síť před poradou?",
      body: "Správa stanic a serverů, řešená síť, dohled a servisní smlouvy pro firmy v Ostravě a okolí. Voláte na jedno číslo, jezdíme na místo.",
      tag: "servisní smlouvy",
    },
  ];

  return (
    <main className="page">
      <header className="topbar">
        <a className="wordmark" href="#top" aria-label="Dileris — servis počítačů Ostrava">
          <span className="wordmark__blink" aria-hidden="true">▮</span>
          <span className="wordmark__name">dileris</span>
          <span className="wordmark__ext">/servis</span>
        </a>
        <nav className="nav" aria-label="Hlavní navigace">
          <a href="#servis">Co opravíme</a>
          <a href="#duvera">Kdo to dělá</a>
          <a className="nav__call" href="tel:+420724624000">724 624 000</a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero__grid">
          <div className="hero__text">
            <p className="prompt" aria-hidden="true">
              <span className="prompt__path">C:\\Ostrava\\dileris&gt;</span>{" "}
              <span className="prompt__cmd">diag /f</span>
            </p>
            <h1 className="hero__head">
              Váš počítač<br />
              <span className="hero__accent">se dá opravit.</span>
            </h1>
            <p className="hero__sub">
              Servis stolních počítačů a notebooků v Ostravě. Přineste,
              nebo přijedeme za vámi. Diagnostiku uděláme na počkání a
              cenu řekneme dřív, než něco rozšroubujeme.
            </p>
            <div className="hero__actions">
              <a className="btn btn--solid" href="tel:+420724624000">
                Zavolat na servis
              </a>
              <a className="btn btn--ghost" href="#servis">
                Co dokážeme opravit
              </a>
            </div>
            <dl className="statline">
              <div>
                <dt>Diagnostika</dt>
                <dd>na počkání</dd>
              </div>
              <div>
                <dt>Cena</dt>
                <dd>předem, ne po</dd>
              </div>
              <div>
                <dt>Novoveská 95</dt>
                <dd>Ostrava</dd>
              </div>
            </dl>
          </div>
          <figure className="hero__media">
            <img
              src="/hero.webp"
              alt="Otevřený počítač na servisním stole, technik při diagnostice"
              width={720}
              height={720}
              loading="eager"
            />
            <figcaption className="hero__cap">
              <span className="led" aria-hidden="true" /> servisní stůl · Novoveská 95
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="section services" id="servis" aria-labelledby="services-h">
        <div className="section__head">
          <p className="eyebrow">Chybové kódy, které řešíme denně</p>
          <h2 id="services-h">Popište příznak, my dodáme diagnózu</h2>
        </div>
        <ul className="cards">
          {services.map((s) => (
            <li className="card" key={s.code}>
              <span className="card__code">{s.code}</span>
              <p className="card__lead">{s.lead}</p>
              <h3 className="card__title">{s.title}</h3>
              <p className="card__body">{s.body}</p>
              <span className="card__tag">{s.tag}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="section trust" id="duvera" aria-labelledby="trust-h">
        <div className="trust__grid">
          <figure className="trust__media">
            <img
              src="/section-1.webp"
              alt="Detail základní desky s měřicí sondou během opravy"
              width={640}
              height={520}
              loading="lazy"
            />
          </figure>
          <div className="trust__text">
            <p className="eyebrow">Kdo za tím stojí</p>
            <h2 id="trust-h">Ostravská firma, ne anonymní e-shop</h2>
            <p>
              Jsme <strong>DILERIS a.s.</strong> a servisu IT se v Ostravě
              věnujeme od roku 2007. Nejsme přepážka, kam odevzdáte stroj a
              čekáte týden na SMS — opravujeme na místě, a když to jde,
              rovnou vám ukážeme, co bylo špatně.
            </p>
            <ul className="trust__list">
              <li>
                <span className="trust__k">Přijedeme</span>
                <span className="trust__v">k firmě i domů po Ostravě a okolí</span>
              </li>
              <li>
                <span className="trust__k">Řekneme cenu</span>
                <span className="trust__v">před opravou, ne fakturou po ní</span>
              </li>
              <li>
                <span className="trust__k">Zálohujeme</span>
                <span className="trust__v">data řešíme dřív než hardware</span>
              </li>
            </ul>
            <div className="trust__reg">
              <p>
                DILERIS a.s., Novoveská 95, 709 00 Ostrava · IČ 26828677 · DIČ
                CZ26828677
              </p>
              <p>
                Zapsáno u Krajského soudu v Ostravě, oddíl B, vložka 3309.
              </p>
            </div>
          </div>
        </div>
        <figure className="trust__wide">
          <img
            src="/section-2.webp"
            alt="Řada připravených počítačů a notebooků na servisním pracovišti"
            width={1200}
            height={480}
            loading="lazy"
          />
          <figcaption>Servisní pracoviště · vyzvednutí po dohodě na 724 624 000</figcaption>
        </figure>
      </section>
    </main>
  );
}
