import type { CSSProperties } from "react";

export default function Page() {
  const routePoints = [
    { city: "Liberec", note: "Minkovická 148 — základna od roku 1992" },
    { city: "Malmö", note: "přejezd Öresundem na sever" },
    { city: "Oslo", note: "vykládka a nová nakládka" },
    { city: "Trondheim", note: "úzké fjordy, zimní řetězy" },
    { city: "Narvik", note: "za polárním kruhem, i v mrazu" },
  ];

  const services = [
    {
      no: "01",
      title: "Přeprava ČR → Norsko",
      body:
        "Naložíme u vás v Čechách a vezeme přímo do Norska — od Osla po Narvik. Bez zbytečných překladišť, s řidiči, kteří tu trasu znají do posledního fjordu.",
    },
    {
      no: "02",
      title: "Přeprava Norsko → ČR",
      body:
        "Zpáteční cesta není prázdná jízda. Domluvíme náklad z Norska zpět do Čech a plánujeme vytížení oběma směry, aby cena dávala smysl.",
    },
    {
      no: "03",
      title: "Doplňkové služby v areálu",
      body:
        "Vlastní servis a pneuservis, skladové prostory k pronájmu a čerpací stanice s naftou přímo na základně v Liberci.",
    },
  ];

  const proof = [
    { big: "1992", label: "rok založení v Liberci" },
    { big: "30+", label: "let jezdíme do Skandinávie" },
    { big: "V8", label: "tahače Scania na dálkové trasy" },
  ];

  return (
    <main className="fajst">
      <header className="topbar" aria-label="Hlavička">
        <a className="wordmark" href="#top" aria-label="FAJST, autodoprava Liberec">
          <span className="wordmark__f">F</span>AJST
          <span className="wordmark__dot" aria-hidden="true" />
        </a>
        <nav className="topnav" aria-label="Hlavní navigace">
          <a href="#trasa">Trasa</a>
          <a href="#sluzby">Služby</a>
          <a href="#firma">O firmě</a>
          <a className="topnav__call" href="tel:+420602419954">
            Dispečink 602 419 954
          </a>
        </nav>
      </header>

      <section className="hero" id="top" aria-labelledby="hero-title">
        <div className="hero__grid" aria-hidden="true">
          <span className="hero__lat">N 59°</span>
          <span className="hero__lat hero__lat--2">N 63°</span>
          <span className="hero__lat hero__lat--3">N 68°</span>
        </div>

        <p className="hero__eyebrow">
          <span className="hero__flag" aria-hidden="true" />
          Autodoprava do Norska · Liberec
        </p>

        <h1 className="hero__title" id="hero-title">
          <span className="hero__line">Vezeme náklad</span>
          <span className="hero__line hero__line--wide">tam, kde končí</span>
          <span className="hero__line hero__accent">silnice a začíná</span>
          <span className="hero__line hero__line--wide">fjord.</span>
        </h1>

        <p className="hero__lede">
          Od roku 1992 jezdíme z Čech do celého Norska — přes hory, sníh i
          polární kruh. Ne proto, že to jde. Protože to umíme líp než přeprava,
          co tam byla dvakrát.
        </p>

        <div className="hero__actions">
          <a className="btn btn--solid" href="tel:+420602419954">
            Zavolat dispečinku
          </a>
          <a className="btn btn--ghost" href="#trasa">
            Podívat se na trasu
          </a>
        </div>

        <p className="hero__odo">
          Nájezd našich řidičů do Skandinávie čítáme na miliony kilometrů —
          každý z nich odjetý po skutečné severské silnici.
        </p>
      </section>

      <section className="route" id="trasa" aria-labelledby="route-title">
        <div className="section-head">
          <span className="section-head__no">Trasa</span>
          <h2 id="route-title">Liberec → Narvik, jednou linkou</h2>
          <p>
            Naše specializace není „doprava po Evropě". Je to jeden konkrétní
            koridor na sever, který známe zastávku po zastávce.
          </p>
        </div>

        <ol className="route__line">
          {routePoints.map((p, i) => (
            <li
              className="route__stop"
              key={p.city}
              style={{ "--i": i } as CSSProperties}
            >
              <span className="route__node" aria-hidden="true" />
              <span className="route__city">{p.city}</span>
              <span className="route__note">{p.note}</span>
            </li>
          ))}
        </ol>
      </section>

      <section className="services" id="sluzby" aria-labelledby="services-title">
        <div className="section-head">
          <span className="section-head__no">Co nabízíme</span>
          <h2 id="services-title">Tři věci, které umíme naplno</h2>
        </div>

        <div className="services__grid">
          {services.map((s) => (
            <article className="card" key={s.no}>
              <span className="card__no" aria-hidden="true">
                {s.no}
              </span>
              <h3>{s.title}</h3>
              <p>{s.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="about" id="firma" aria-labelledby="about-title">
        <div className="about__inner">
          <div className="about__text">
            <span className="section-head__no">O firmě</span>
            <h2 id="about-title">
              Firmu FAJST s.r.o. jsme založili v Liberci v roce 1992.
            </h2>
            <p>
              Od začátku jsme mířili do Skandinávie a časem se z toho stalo
              hlavně Norsko. Naučili jsme se jeho složitý terén i drsné počasí —
              ne z map, ale z kilometrů, které tam naši řidiči najezdili.
            </p>
            <p>
              Přes třicet let na jedné trase z nás udělalo specialisty. Ne přes
              noc — jezdíme s profesionálními řidiči, pokrýváme celé Norsko a
              spoléháme na tahače Scania V8.
            </p>

            <dl className="contact">
              <div>
                <dt>Kancelář</dt>
                <dd>
                  <a href="tel:+420485146735">485 146 735</a>
                </dd>
              </div>
              <div>
                <dt>Dispečink</dt>
                <dd>
                  <a href="tel:+420602419954">602 419 954</a>
                </dd>
              </div>
              <div>
                <dt>Servis</dt>
                <dd>
                  <a href="tel:+420723978358">723 978 358</a>
                </dd>
              </div>
              <div>
                <dt>Adresa</dt>
                <dd>Minkovická 148, 463 12 Liberec</dd>
              </div>
            </dl>
          </div>

          <ul className="about__proof" aria-label="Čísla o firmě">
            {proof.map((p) => (
              <li key={p.label}>
                <span className="about__big">{p.big}</span>
                <span className="about__label">{p.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
