export default function Page() {
  const diagnostika = [
    {
      code: "P0",
      title: "Přečtení chybových kódů",
      desc: "Napojíme diagnostiku na řídicí jednotku a vytáhneme všechny uložené i aktuální závady. Vysvětlíme, co konkrétní kód znamená a jak vážné to je.",
    },
    {
      code: "04",
      title: "Kontrola živých dat",
      desc: "Motor, lambda sondy, teploty, tlaky, hodnoty vstřikování — vše čteme v reálném čase za jízdy i na volnoběh. Odhalíme i závady, které kontrolka ještě nerozsvítila.",
    },
    {
      code: "KN",
      title: "Adaptace a kódování",
      desc: "Naučíme řídicí jednotku novou baterii, klíč, filtr pevných částic nebo součástku. Nastavení provedeme originálním diagnostickým protokolem Škoda, VW, SEAT i Cupra.",
    },
    {
      code: "OK",
      title: "Kontrola před koupí ojetiny",
      desc: "Než podepíšete kupní smlouvu, projedeme vůz diagnostikou a zjistíme skutečný stav — počet přepisů kilometrů, historii závad i skryté opravy.",
    },
  ]

  return (
    <main className="page">
      <header className="topbar">
        <a className="wordmark" href="#" aria-label="AZ SERVIS — diagnostika vozidel Brno">
          <span className="wordmark__az">AZ</span>
          <span className="wordmark__servis">SERVIS</span>
          <span className="wordmark__dot" aria-hidden="true"></span>
        </a>
        <div className="topbar__meta">
          <span className="topbar__loc">Brno · AZ Tower</span>
          <a className="topbar__tel" href="tel:+420513077777">513&nbsp;077&nbsp;777</a>
        </div>
      </header>

      <section className="hero">
        <div className="hero__grid">
          <div className="hero__text">
            <p className="eyebrow">Diagnostika vozidel · Škoda · VW · SEAT · Cupra</p>
            <h1 className="hero__title">
              Kontrolka svítí.<br />
              <span className="hero__title--accent">My víme proč.</span>
            </h1>
            <p className="hero__lede">
              Připojíme vůz na diagnostiku a přečteme přesně to, co vám palubka
              neřekne. Žádné hádání, žádné „vyměníme to a uvidíme“. Konkrétní
              závada, konkrétní cena — než začneme šroubovat.
            </p>
            <div className="hero__actions">
              <a className="btn btn--primary" href="tel:+420513077777">Objednat diagnostiku</a>
              <a className="btn btn--ghost" href="#sluzby">Co dokážeme přečíst</a>
            </div>
          </div>

          <div className="hero__panel" aria-hidden="true">
            <div className="scan">
              <span className="scan__label">DTC — čtení paměti závad</span>
              <div className="scan__rows">
                <div className="scan__row"><span>Motor 2.0 TSI</span><b className="ok">bez závad</b></div>
                <div className="scan__row"><span>ABS / ESP</span><b className="ok">bez závad</b></div>
                <div className="scan__row"><span>Airbag</span><b className="ok">bez závad</b></div>
                <div className="scan__row scan__row--flag"><span>Lambda sonda 1</span><b className="warn">P0134</b></div>
                <div className="scan__row"><span>Klimatizace</span><b className="ok">bez závad</b></div>
              </div>
              <span className="scan__foot">Diagnostika dokončena · 5 řídicích jednotek</span>
            </div>
          </div>
        </div>

        <figure className="hero__photo">
          <img src="/hero.webp" alt="Technik AZ Servis připojuje diagnostický přístroj k vozu" />
        </figure>
      </section>

      <section className="sluzby" id="sluzby">
        <div className="section-head">
          <p className="eyebrow">Naše práce</p>
          <h2 className="section-title">Čteme auta, ne kávovou sedlinu</h2>
          <p className="section-sub">
            Originální diagnostický protokol pro celý koncern Volkswagen. Čtyři
            věci, které u nás dostanete pokaždé — nezávisle na tom, s čím přijedete.
          </p>
        </div>

        <ol className="cards">
          {diagnostika.map((s) => (
            <li className="card" key={s.title}>
              <span className="card__code" aria-hidden="true">{s.code}</span>
              <h3 className="card__title">{s.title}</h3>
              <p className="card__desc">{s.desc}</p>
            </li>
          ))}
        </ol>

        <figure className="sluzby__photo">
          <img src="/section-1.webp" alt="Diagnostický přístroj napojený na řídicí jednotku vozu v servisu AZ Servis Brno" />
          <figcaption>Diagnostika na míru značce — Škoda, Volkswagen, SEAT, Cupra i užitkové vozy.</figcaption>
        </figure>
      </section>

      <section className="onas" id="onas">
        <div className="onas__grid">
          <figure className="onas__photo">
            <img src="/section-2.webp" alt="Servisní hala AZ Servis v budově AZ Tower Brno" />
          </figure>

          <div className="onas__text">
            <p className="eyebrow">Od roku 1993 v Brně</p>
            <h2 className="section-title">Prvním autem jsme se prokousali ještě za Československa</h2>
            <p className="onas__lede">
              Přes třicet let pod kapotou. Tolik různých závad projelo naším
              servisem, že diagnostika u nás neznamená jen připojit přístroj —
              znamená vědět, kde se u které generace motoru chyba obvykle skrývá.
            </p>

            <dl className="facts">
              <div className="fact">
                <dt>Od roku</dt>
                <dd>1993</dd>
                <span>první vůz naším servisem</span>
              </div>
              <div className="fact">
                <dt>4 značky</dt>
                <dd>koncern VW</dd>
                <span>Škoda · VW · SEAT · Cupra</span>
              </div>
              <div className="fact">
                <dt>Odvoz</dt>
                <dd>zdarma</dd>
                <span>kamkoliv po Brně</span>
              </div>
            </dl>

            <p className="onas__note">
              Auto necháte u nás, my vás odvezeme, kam potřebujete — a při vyzvednutí
              čeká vůz po poctivém ručním mytí, ne po kartáči.
            </p>

            <div className="onas__contact">
              <a className="btn btn--primary" href="tel:+420513077777">Zavolat do servisu</a>
              <p className="onas__addr">
                AZ Tower · Pražákova 1008/69 · 639&nbsp;00 Brno<br />
                Servis Po–Pá 07:00–17:00
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
