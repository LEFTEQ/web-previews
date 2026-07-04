import type { CSSProperties } from "react";

export default function Page() {
  const registrationMarks = [0, 1, 2, 3];

  const sluzby = [
    {
      cmyk: "C",
      nazev: "Řezaná grafika na míru",
      popis:
        "Polepy aut, výloh a dveří z prémiových fólií Orafol a 3M. Vyřežeme na plotru, přelakujeme a nainstalujeme přímo u vás v Pardubicích.",
    },
    {
      cmyk: "M",
      nazev: "Světelné reklamy a 3D loga",
      popis:
        "Prosvětlené boxy, plastická písmena z plexi a lakovaného hliníku, LED podsvícení. Fasáda, kterou uvidíte i za tmy z druhé strany ulice.",
    },
    {
      cmyk: "Y",
      nazev: "Velkoformátový tisk",
      popis:
        "Bannery, plachty, samolepky a rollupy do vnitřního i venkovního prostředí. Latexový tisk bez zápachu, odolný slunci i dešti.",
    },
    {
      cmyk: "K",
      nazev: "Montáž a servis",
      popis:
        "Vlastní montážní parta s plošinou. Starou reklamu sundáme, novou pověsíme, revidujeme a v případě poruchy přijedeme opravit.",
    },
  ];

  const kroky = [
    {
      cislo: "01",
      nazev: "Zaměření a návrh",
      popis:
        "Přijedeme na místo, změříme fasádu i podklad a připravíme vizualizaci, na které uvidíte reklamu dřív, než ji vyrobíme.",
    },
    {
      cislo: "02",
      nazev: "Výroba v dílně",
      popis:
        "Řežeme, tiskneme a frézujeme u nás v Pardubicích. Nic neposíláme přes půl republiky, takže víme, co odchází ven.",
    },
    {
      cislo: "03",
      nazev: "Montáž na místě",
      popis:
        "Vlastní montéři s plošinou. Domluvíme termín, uklidíme po sobě a předáme hotovou reklamu, která drží.",
    },
  ];

  return (
    <main className="page">
      <header className="topbar" aria-label="Hlavní navigace">
        <a className="wordmark" href="#" aria-label="TASK — výroba reklam Pardubice">
          <span className="wordmark__reg" aria-hidden="true">
            <span className="wordmark__crosshair" />
          </span>
          <span className="wordmark__text">TASK</span>
          <span className="wordmark__tag">výroba reklam · Pardubice</span>
        </a>
        <nav className="nav">
          <a href="#sluzby">Co vyrábíme</a>
          <a href="#postup">Jak to probíhá</a>
          <a className="nav__cta" href="tel:+420777887688">Zavolat</a>
        </nav>
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero__grid">
          <div className="hero__copy">
            <p className="eyebrow">
              <span className="eyebrow__dot" aria-hidden="true" />
              Reklamní dílna v Pardubicích od roku 1998
            </p>
            <h1 id="hero-title">
              Vaše značka<br />
              <span className="hero__accent">v plné velikosti.</span>
            </h1>
            <p className="hero__lead">
              Světelná loga, polepy aut a bannery, které si lidé přečtou i z
              druhé strany křižovatky. Navrhneme, vyrobíme a namontujeme —
              všechno z jedné dílny na Arnošta z&nbsp;Pardubic.
            </p>
            <div className="hero__actions">
              <a className="btn btn--solid" href="tel:+420777887688">
                Zavolat 777&nbsp;887&nbsp;688
              </a>
              <a className="btn btn--ghost" href="#sluzby">
                Prohlédnout výrobu
              </a>
            </div>
          </div>

          <figure className="hero__figure">
            <img
              src="/hero.webp"
              alt="Světelná reklama a polep vozu z dílny TASK v Pardubicích"
              className="hero__img"
              width={960}
              height={1120}
            />
            <figcaption className="hero__ticker" aria-hidden="true">
              <span>fólie 3M</span>
              <span>plexi</span>
              <span>LED</span>
              <span>plachtovina</span>
              <span>frézování</span>
            </figcaption>
          </figure>
        </div>

        <div className="hero__meta">
          <span>Frézka · plotr · latexový tisk pod jednou střechou</span>
          <span>info@task.cz</span>
        </div>
      </section>

      <section className="sluzby" id="sluzby" aria-labelledby="sluzby-title">
        <div className="section-head">
          <p className="eyebrow">
            <span className="eyebrow__dot" aria-hidden="true" />
            Co u nás objednáte
          </p>
          <h2 id="sluzby-title">
            Čtyři barvy tisku, jedna dílna.
          </h2>
          <p className="section-head__lead">
            Od malé samolepky na dveře až po prosvětlené logo přes celou
            fasádu. Vybírejte podle toho, co potřebujete vidět.
          </p>
        </div>

        <ul className="cards">
          {sluzby.map((s) => (
            <li
              className={`card card--${s.cmyk.toLowerCase()}`}
              key={s.nazev}
              style={{ "--chip": `var(--ink-${s.cmyk.toLowerCase()})` } as CSSProperties}
            >
              <span className="card__chip" aria-hidden="true">
                {s.cmyk}
              </span>
              <h3>{s.nazev}</h3>
              <p>{s.popis}</p>
            </li>
          ))}
        </ul>

        <figure className="sluzby__banner">
          <img
            src="/section-1.webp"
            alt="Detail velkoformátového tisku a řezané fólie připravené k montáži"
            width={1280}
            height={720}
          />
        </figure>
      </section>

      <section className="postup" id="postup" aria-labelledby="postup-title">
        <div className="postup__grid">
          <div className="postup__intro">
            <p className="eyebrow">
              <span className="eyebrow__dot" aria-hidden="true" />
              Jak zakázka projde dílnou
            </p>
            <h2 id="postup-title">
              Od nákresu po hotovou reklamu ve třech krocích.
            </h2>
            <p className="postup__lead">
              Přes pětadvacet let vyrábíme reklamu ve východních Čechách.
              Děláme pro autoservisy, prodejny, restaurace i výrobní firmy
              po celém Pardubickém kraji — a stojíme si za tím, co odejde
              z&nbsp;dílny.
            </p>
            <img
              src="/section-2.webp"
              alt="Montáž reklamy na fasádu budovy montéry firmy TASK"
              className="postup__img"
              width={900}
              height={640}
            />
          </div>

          <ol className="steps">
            {kroky.map((k) => (
              <li className="step" key={k.cislo}>
                <span className="step__num" aria-hidden="true">
                  {k.cislo}
                </span>
                <div className="step__body">
                  <h3>{k.nazev}</h3>
                  <p>{k.popis}</p>
                </div>
              </li>
            ))}
            <li className="step step--contact">
              <div className="step__body">
                <h3>Máte v hlavě konkrétní reklamu?</h3>
                <p>
                  Zavolejte na 777&nbsp;887&nbsp;688 nebo napište na
                  info@task.cz. Ozveme se ještě týž den a domluvíme zaměření
                  v&nbsp;Pardubicích a okolí.
                </p>
                <a className="btn btn--solid" href="mailto:info@task.cz">
                  Napsat poptávku
                </a>
              </div>
            </li>
          </ol>
        </div>
      </section>
    </main>
  );
}
