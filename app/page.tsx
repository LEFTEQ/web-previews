export default function Page() {
  const listings = [
    {
      place: "Kupařovice",
      price: "14 990 000 Kč",
      title: "Rodinný dům 4+kk s garáží, 176 m²",
      desc: "Samostatně stojící novostavba v klidné obci jižně od Brna. Cena včetně provize i právního servisu. K dispozici video-prohlídka a 3D virtuální prohlídka.",
      tags: ["Novostavba", "3D prohlídka", "Video"],
      status: "prodej",
    },
    {
      place: "Modřice",
      price: "12 990 000 Kč",
      title: "Dvougenerační řadový dům, 210 m²",
      desc: "Dům po rozsáhlé rekonstrukci na žádané adrese Náměstí Svobody. Ideální pro dvě generace pod jednou střechou, pár minut od Brna.",
      tags: ["Po rekonstrukci", "Video"],
      status: "prodej",
    },
    {
      place: "Ochoz u Brna",
      price: "13 990 000 Kč",
      title: "Moderní dům 5+kk, 151 m²",
      desc: "Novostavba na ulici Pod Skalkou, na dosah Moravskému krasu i městu. Cena včetně provize a právního servisu, s 3D prohlídkou.",
      tags: ["Novostavba", "3D prohlídka"],
      status: "prodej",
    },
    {
      place: "Brno-Řečkovice",
      price: "Rezervováno",
      title: "Dům se zahradou u Zamilovaného hájku, 137 m²",
      desc: "Rodinný dům na ulici Podhájí s pozemkem 766 m². Rezervace proběhla krátce po zveřejnění video-prohlídky.",
      tags: ["Video"],
      status: "rezervovano",
    },
  ];

  const steps = [
    {
      label: "Odhad",
      title: "Odhad ceny zdarma",
      text: "Přijedu, projdu nemovitost a řeknu vám reálnou tržní cenu podle srovnatelných prodejů v Brně a okolí. Bez závazku, bez poplatku.",
    },
    {
      label: "Příprava",
      title: "Home-staging a profi fotky",
      text: "Nemovitost připravím tak, aby na fotkách i naživo vypadala nejlépe. Profesionální fotograf, 2D i 3D půdorysy — kupující musí vidět, co kupuje.",
    },
    {
      label: "Prohlídka",
      title: "Video-prohlídka ke každé nabídce",
      text: "Natočím video-prohlídku a připravím 3D virtuální prohlídku. Vážní zájemci si dům projdou z gauče — na osobní prohlídku pak přijdou už rozhodnutí.",
    },
    {
      label: "Prodej",
      title: "Inzerce, jednání, právní servis",
      text: "Inzeruji na nejsledovanějších realitních serverech i sociálních sítích, vedu jednání s kupujícími a hlídám celý obchod až po předání klíčů. Právní servis je v ceně.",
    },
  ];

  const reviews = [
    {
      quote: "Dům v Modřicích se prodal za tři týdny, o 400 tisíc nad původní odhad jiné kanceláře. Video-prohlídka přivedla kupce, kteří přijeli už rozhodnutí.",
      name: "manželé Novotní",
      where: "prodej domu, Modřice",
    },
    {
      quote: "Pan Konečný byl vždycky na telefonu, i večer. Všechno vysvětlil srozumitelně a smlouvy hlídal právník. Poprvé jsme prodávali nemovitost a nebáli se.",
      name: "paní Horáková",
      where: "prodej bytu, Brno-Řečkovice",
    },
    {
      quote: "Home-staging udělal z naší třicet let staré chaty místo, do kterého se lidi zamilovali na fotkách. Prodáno za plnou cenu.",
      name: "pan Svoboda",
      where: "prodej chaty, Hradčany u Tišnova",
    },
  ];

  return (
    <main className="jk">
      {/* ---------- HERO ---------- */}
      <header className="hero">
        <div className="hero-inner">
          <div className="hero-top">
            <div className="wordmark" aria-label="Jan Konečný, reality Brno">
              <span className="wordmark-name">Jan&nbsp;Konečný</span>
              <span className="wordmark-sub">reality · Brno</span>
            </div>
            <a className="hero-phone" href="tel:+420601170370">
              +420 601 170 370
            </a>
          </div>

          <div className="hero-main">
            <p className="hero-eyebrow">Realitní makléř RE/MAX · přes 10 let v Brně a okolí</p>
            <h1 className="hero-title">
              <span className="line line-1">Váš dům si zaslouží</span>
              <span className="line line-2">víc než tři fotky</span>
              <span className="line line-3">z mobilu.</span>
            </h1>
            <p className="hero-lead">
              Každou nemovitost prodávám s video-prohlídkou, 3D půdorysem a home-stagingem.
              Kupující vidí všechno předem — a vy prodáte za nejvyšší cenu.
            </p>
            <div className="hero-cta">
              <a className="btn btn-primary" href="tel:+420601170370">
                Zavolat makléři
              </a>
              <a className="btn btn-ghost" href="mailto:jan.konecny@re-max.cz">
                Chci odhad ceny zdarma
              </a>
            </div>
          </div>

          {/* signature: půdorysová mřížka — makléřův pracovní nástroj */}
          <div className="hero-plan" aria-hidden="true">
            <svg viewBox="0 0 420 520" preserveAspectRatio="xMidYMid meet" className="plan-svg">
              {/* obvodové zdivo */}
              <path className="plan-wall draw d1" d="M20 20 H400 V500 H20 Z" />
              {/* vnitřní příčky */}
              <path className="plan-wall draw d2" d="M20 200 H230" />
              <path className="plan-wall draw d2" d="M230 20 V320" />
              <path className="plan-wall draw d3" d="M230 320 H400" />
              <path className="plan-wall draw d3" d="M140 320 V500" />
              <path className="plan-wall draw d3" d="M20 320 H90" />
              {/* dveře — oblouky */}
              <path className="plan-door draw d4" d="M130 200 a45 45 0 0 1 45 -45" />
              <path className="plan-door draw d4" d="M230 250 a45 45 0 0 1 -45 45" />
              <path className="plan-door draw d4" d="M140 400 a45 45 0 0 1 45 45" />
              {/* okna */}
              <path className="plan-window draw d5" d="M80 20 H170" />
              <path className="plan-window draw d5" d="M280 20 H360" />
              <path className="plan-window draw d5" d="M400 90 V170" />
              <path className="plan-window draw d5" d="M400 380 V460" />
              <path className="plan-window draw d5" d="M20 400 V470" />
              {/* kóty */}
              <path className="plan-dim draw d6" d="M20 540 H400 M20 532 V548 M400 532 V548" transform="translate(0,-20)" />
              {/* popisky místností */}
              <text className="plan-text t1" x="115" y="115">4+kk</text>
              <text className="plan-text t2" x="305" y="180">176 m²</text>
              <text className="plan-text t3" x="265" y="430">zahrada</text>
            </svg>
            <div className="plan-badge">
              <span className="plan-badge-num">4,9</span>
              <span className="plan-badge-label">z 52 recenzí · 11 video-referencí</span>
            </div>
          </div>
        </div>
      </header>

      {/* ---------- SEKCE 1: JAK PRODÁVÁM + NABÍDKA ---------- */}
      <section className="process" aria-labelledby="process-title">
        <div className="section-inner">
          <div className="section-head">
            <p className="eyebrow">Jak prodej probíhá</p>
            <h2 id="process-title">Od odhadu k předání klíčů — čtyři kroky, jedna cena v ceně</h2>
            <p className="section-lead">
              Provize i právní servis jsou vždy součástí kupní ceny. Vy platíte jen tehdy, když prodám.
            </p>
          </div>

          <ol className="steps">
            {steps.map((s, i) => (
              <li key={s.label} className="step">
                <span className="step-num" aria-hidden="true">{String(i + 1).padStart(2, "0")}</span>
                <div className="step-body">
                  <span className="step-label">{s.label}</span>
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                </div>
              </li>
            ))}
          </ol>

          <div className="listings-head">
            <h3 className="listings-title">Právě v nabídce</h3>
            <p className="listings-note">Všechny ceny jsou konečné — včetně provize RK a právního servisu.</p>
          </div>

          <div className="listings">
            {listings.map((l) => (
              <article key={l.title} className={`card ${l.status === "rezervovano" ? "card-reserved" : ""}`}>
                <div className="card-top">
                  <span className="card-place">{l.place}</span>
                  <span className={`card-price ${l.status === "rezervovano" ? "is-reserved" : ""}`}>{l.price}</span>
                </div>
                <h4 className="card-title">{l.title}</h4>
                <p className="card-desc">{l.desc}</p>
                <ul className="card-tags">
                  {l.tags.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- SEKCE 2: DŮVĚRA / O MNĚ ---------- */}
      <section className="trust" aria-labelledby="trust-title">
        <div className="section-inner">
          <div className="trust-grid">
            <div className="trust-about">
              <p className="eyebrow eyebrow-light">Kdo vám bude prodávat</p>
              <h2 id="trust-title">Reality dělám přes deset let. A pořád mě to baví.</h2>
              <p>
                Za každým prodejem nemovitosti je lidský příběh — stěhování za rodinou, dědictví,
                nový začátek. Proto k žádnému obchodu nepřistupuji jako k položce v tabulce.
                Jsem časově flexibilní, na telefonu i večer, a za svou práci klientům ručím.
              </p>
              <p>
                Působím pod značkou RE/MAX, jednou z nejsilnějších realitních sítí na světě.
                Znamená to pro mě hlavně dvě věci: neustálé vzdělávání a zázemí, které ochrání
                vaše peníze i nervy.
              </p>
              <dl className="trust-stats">
                <div>
                  <dt>Let na trhu</dt>
                  <dd>10+</dd>
                </div>
                <div>
                  <dt>Hodnocení klientů</dt>
                  <dd>4,9/5</dd>
                </div>
                <div>
                  <dt>Recenzí</dt>
                  <dd>52</dd>
                </div>
                <div>
                  <dt>Video-referencí</dt>
                  <dd>11</dd>
                </div>
              </dl>
            </div>

            <div className="trust-reviews">
              {reviews.map((r) => (
                <blockquote key={r.name} className="review">
                  <p>„{r.quote}“</p>
                  <footer>
                    <cite>{r.name}</cite>
                    <span>{r.where}</span>
                  </footer>
                </blockquote>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
