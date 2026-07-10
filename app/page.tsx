import type { CSSProperties } from "react";

export default function Page() {
  const sluzby = [
    {
      cislo: "01",
      nazev: "Online marketing",
      popis:
        "Zvýšíme návštěvnost vašich stránek a dostaneme vaši značku do povědomí správným lidem. Kampaně stavíme na datech, ne na dojmu.",
    },
    {
      cislo: "02",
      nazev: "Obchod",
      popis:
        "Proškolíme vaše lidi na prodejní dovednosti — nebo se na čas sami staneme vašimi obchodníky a pomůžeme s prodejem přímo v terénu.",
    },
    {
      cislo: "03",
      nazev: "Multimédia",
      popis:
        "Nafotíme provozovnu, produkty i tým a natočíme promo videa, která posadíte na web i do reklamních kampaní.",
    },
    {
      cislo: "04",
      nazev: "Tvorba zadání",
      popis:
        "Zpracujeme perfektní zadání webového projektu pro dodavatele. Víte přesně, co objednáváte, a nepřeplatíte.",
    },
    {
      cislo: "05",
      nazev: "Tvorba webu",
      popis:
        "Postavíme individuální, moderní a responzivní web na míru vám i vašim zákazníkům — s přehlednou administrací.",
    },
    {
      cislo: "06",
      nazev: "Školení",
      popis:
        "Naučíme váš tým marketing, prodej i práci se sociálními sítěmi tak, aby vám kampaně jednou běžely i bez nás.",
    },
  ];

  const jaknato = [
    {
      klic: "Jednou měsíčně",
      nazev: "Sedneme si u vás",
      popis:
        "K vám do firmy jezdíme minimálně jednou měsíčně na intenzivní jednání — klidně přes celou republiku. Tam, kde vzniká váš byznys, vzniká i marketing.",
    },
    {
      klic: "Bez čekání",
      nazev: "Zapracujeme hned",
      popis:
        "Úpravu webu, kampaň na sociálních sítích i cokoli dalšího řešíme operativně. Naše zákazníky nenecháváme zbytečně čekat.",
    },
    {
      klic: "Mimo kancelář",
      nazev: "Potkáme se i lidsky",
      popis:
        "Pro klienty pořádáme neformální akce — třeba oblíbené kurzy vaření. Spolupráce, na kterou se člověk těší, drží déle.",
    },
  ];

  return (
    <main className="df">
      <a className="df-skip" href="#sluzby">
        Přeskočit na služby
      </a>

      <header className="df-top">
        <div className="df-wrap df-top-inner">
          <a className="df-mark" href="#" aria-label="DF Marketing, Pardubice">
            <span className="df-mark-df">DF</span>
            <span className="df-mark-rest">marketing</span>
            <span className="df-mark-dot" aria-hidden="true" />
          </a>
          <span className="df-top-loc">Pardubice · tř. Míru 2670</span>
        </div>
      </header>

      <section className="df-hero" aria-labelledby="df-hero-nadpis">
        <div className="df-wrap df-hero-grid">
          <div className="df-hero-text">
            <p className="df-eyebrow">
              <span className="df-eyebrow-num">80&nbsp;%</span>
              odpracovaného času trávíme přímo u zákazníků
            </p>
            <h1 id="df-hero-nadpis" className="df-hero-h1">
              Marketing děláme
              <span className="df-hero-em"> u vás v kanceláři</span>, ne
              přes&nbsp;e‑maily.
            </h1>
            <p className="df-hero-lead">
              Jsme reklamní agentura z Pardubic. Nejlepší nápady nevznikají na
              dálku — proto za vámi jezdíme, sedneme si spolu ke stolu a
              posouváme projekt krok za krokem dál. Každé jednání s cílem, který
              poznáte na tržbách.
            </p>
            <div className="df-hero-cta">
              <a className="df-btn" href="#sluzby">
                Co pro vás uděláme
              </a>
              <a className="df-btn df-btn-ghost" href="tel:+420777261550">
                +420 777 261 550
              </a>
            </div>
          </div>

          <figure className="df-hero-fig">
            <img
              className="df-hero-img"
              src="/hero.webp"
              alt="Tým DF marketing při společném jednání se zákazníkem"
              width={900}
              height={1100}
              loading="eager"
            />
            <figcaption className="df-hero-cap">
              Pondělní dopoledne u klienta — hlavy dohromady, projekt o krok dál.
            </figcaption>
          </figure>
        </div>
      </section>

      <section id="sluzby" className="df-sluzby" aria-labelledby="df-sluzby-nadpis">
        <div className="df-wrap">
          <div className="df-sec-head">
            <p className="df-kicker">Řešení pro váš růst</p>
            <h2 id="df-sluzby-nadpis" className="df-sec-h2">
              Šest věcí, se kterými
              <br />
              vám umíme pomoct
            </h2>
          </div>

          <ol className="df-sluzby-list">
            {sluzby.map((s) => (
              <li className="df-sluzba" key={s.cislo}>
                <span className="df-sluzba-num" aria-hidden="true">
                  {s.cislo}
                </span>
                <h3 className="df-sluzba-nazev">{s.nazev}</h3>
                <p className="df-sluzba-popis">{s.popis}</p>
              </li>
            ))}
          </ol>

          <figure className="df-sluzby-fig">
            <img
              className="df-sluzby-img"
              src="/section-1.webp"
              alt="Tvorba kampaní a příprava vizuálů v ateliéru DF marketing"
              width={1400}
              height={760}
              loading="lazy"
            />
          </figure>
        </div>
      </section>

      <section className="df-pristup" aria-labelledby="df-pristup-nadpis">
        <div className="df-wrap df-pristup-grid">
          <div className="df-pristup-media">
            <img
              className="df-pristup-img"
              src="/section-2.webp"
              alt="Klientka Ivana Houfková, vedoucí marketingu, o spolupráci s DF marketing"
              width={900}
              height={1000}
              loading="lazy"
            />
            <blockquote className="df-quote">
              <p>
                „Vybrali jsme DF ze tří důvodů: zkušenost, profesionalita a
                přístup postavený na spolupráci. Každé pondělí jsme se zavřeli v
                kanceláři na celé dopoledne, dali hlavy dohromady a projekt
                posunuli dál.“
              </p>
              <footer>
                <span className="df-quote-jmeno">Ivana Houfková</span>
                <span className="df-quote-role">vedoucí marketingu</span>
              </footer>
            </blockquote>
          </div>

          <div className="df-pristup-text">
            <p className="df-kicker df-kicker-light">Jedinečný přístup DF týmu</p>
            <h2 id="df-pristup-nadpis" className="df-sec-h2 df-sec-h2-light">
              Proč nás klienti
              <br />
              berou jako svůj tým
            </h2>
            <dl className="df-pristup-list">
              {jaknato.map((p) => (
                <div className="df-pristup-item" key={p.nazev}>
                  <dt>
                    <span className="df-pristup-klic">{p.klic}</span>
                    <span className="df-pristup-nazev">{p.nazev}</span>
                  </dt>
                  <dd>{p.popis}</dd>
                </div>
              ))}
            </dl>
            <p className="df-pristup-adresa">
              Najdete nás na tř. Míru 2670 v Pardubicích —{" "}
              <a href="mailto:info@dfmarketing.cz">info@dfmarketing.cz</a>.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
