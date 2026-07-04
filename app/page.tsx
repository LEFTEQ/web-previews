import type { CSSProperties } from "react";

export default function Page() {
  const kroky = [
    {
      cislo: "01",
      hloubka: "−1,5 m",
      nazev: "Návrh a výkop",
      text: "Přijedeme na zahradu do Olomouce a okolí, zaměříme terén a navrhneme tvar jezírka i zóny pro lekníny a mělčinu. Výkop řešíme včetně odvozu zeminy.",
    },
    {
      cislo: "02",
      hloubka: "−0,8 m",
      nazev: "Fólie a filtrace",
      text: "Položíme jezírkovou fólii, osadíme skimmer, čerpadlo a tlakovou filtraci Oase. Voda krouží tiše a zůstává čirá celou sezónu.",
    },
    {
      cislo: "03",
      hloubka: "−0,3 m",
      nazev: "Osázení a KOI",
      text: "Vysadíme lekníny a mokřadní rostliny do jednotlivých pásem hloubky. Až se jezírko usadí, přivezeme zdravé KOI kapry z vlastního chovu.",
    },
  ];

  return (
    <main className="jb">
      <header className="jb-nav">
        <a className="jb-logo" href="#" aria-label="Jezírka Banat, domů">
          <span className="jb-logo-mark" aria-hidden="true">
            <span className="jb-ripple jb-ripple--1" />
            <span className="jb-ripple jb-ripple--2" />
            <span className="jb-ripple jb-ripple--3" />
          </span>
          <span className="jb-logo-word">
            Jezírka <em>Banat</em>
          </span>
        </a>
        <a className="jb-nav-tel" href="tel:+420583033022">
          583&nbsp;033&nbsp;022
        </a>
      </header>

      <section className="jb-hero" aria-labelledby="hero-nadpis">
        <img
          className="jb-hero-img"
          src="/hero.webp"
          alt="Zahradní jezírko s lekníny a KOI kapry, realizace v Olomouci"
        />
        <div className="jb-hero-veil" aria-hidden="true" />
        <div className="jb-hero-inner">
          <p className="jb-eyebrow">Zahradní jezírka · Hněvotín u Olomouce</p>
          <h1 id="hero-nadpis">
            Kus vody,<br />
            do kterého se<br />
            <span className="jb-hero-accent">dá dívat celý rok.</span>
          </h1>
          <p className="jb-hero-lead">
            Stavíme koupací i okrasná jezírka od výkopu po první leknín. Přes
            tisíc hotových realizací a vlastní chov KOI kaprů — vodu si u nás
            osaháte, než ji necháte protéct vaší zahradou.
          </p>
          <div className="jb-hero-cta">
            <a className="jb-btn" href="tel:+420733491020">
              Zavolat na 733&nbsp;491&nbsp;020
            </a>
            <a className="jb-btn jb-btn--ghost" href="#realizace">
              Jak stavíme jezírko
            </a>
          </div>
        </div>
        <div className="jb-depth" aria-hidden="true">
          <span>0 m</span>
          <span>−0,5</span>
          <span>−1,0</span>
          <span>−1,5 m</span>
        </div>
      </section>

      <section className="jb-section jb-build" id="realizace" aria-labelledby="build-nadpis">
        <div className="jb-section-head">
          <p className="jb-eyebrow jb-eyebrow--dark">Od louky k jezírku ve třech hloubkách</p>
          <h2 id="build-nadpis">
            Postavíme celé jezírko —<br className="jb-br" /> vy jen vyberete rybu.
          </h2>
        </div>

        <ol className="jb-steps">
          {kroky.map((k) => (
            <li className="jb-step" key={k.cislo} style={{ "--i": k.cislo } as CSSProperties}>
              <div className="jb-step-meta">
                <span className="jb-step-num">{k.cislo}</span>
                <span className="jb-step-depth">{k.hloubka}</span>
              </div>
              <h3>{k.nazev}</h3>
              <p>{k.text}</p>
            </li>
          ))}
        </ol>

        <figure className="jb-figure">
          <img
            src="/section-1.webp"
            alt="Detail hotového zahradního jezírka s čirou vodou a vodními rostlinami"
          />
          <figcaption>
            Koupací jezírko 50 m³ — filtrace Oase, kamenná mělčina a lekníny,
            postaveno od A do Z naším týmem.
          </figcaption>
        </figure>
      </section>

      <section className="jb-section jb-trust" aria-labelledby="trust-nadpis">
        <div className="jb-trust-grid">
          <div className="jb-trust-copy">
            <p className="jb-eyebrow jb-eyebrow--dark">Proč zrovna Banat</p>
            <h2 id="trust-nadpis">
              Jezírka umíme, protože je stavíme vlastníma rukama.
            </h2>
            <p className="jb-trust-lead">
              Nejsme jen e-shop s fólií a čerpadly. Máme showroom v Hněvotíně,
              vlastní realizační tým a chováme KOI kapry, které vám prodáme až
              zdravé a v kondici. Poradíme podle toho, co jsme sami vykopali.
            </p>
            <dl className="jb-facts">
              <div>
                <dt>1000+</dt>
                <dd>hotových jezírek napříč Moravou</dd>
              </div>
              <div>
                <dt>Oase</dt>
                <dd>Gold Partner pro filtraci a čerpadla</dd>
              </div>
              <div>
                <dt>1 den</dt>
                <dd>doručení zboží skladem</dd>
              </div>
            </dl>
            <div className="jb-trust-contact">
              <a className="jb-btn jb-btn--dark" href="tel:+420733491020">
                Poradit se s jezírkářem
              </a>
              <p className="jb-hours">
                Prodejna Hněvotín 540 · Po–Pá 8–18, So 8–12
              </p>
            </div>
          </div>

          <figure className="jb-trust-figure">
            <img
              src="/section-2.webp"
              alt="KOI kapři plavou v jezírku pod hladinou s odrazem oblohy"
            />
            <figcaption>Vlastní chov KOI — prodej zahajujeme ve středu.</figcaption>
          </figure>
        </div>
      </section>
    </main>
  );
}
