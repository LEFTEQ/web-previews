const services = [
  {
    cat: "Prevence",
    name: "Dentální hygiena",
    lead: true,
    desc: "Základ, na kterém stavíme. Naučíme a namotivujeme vás ke správné technice čištění klasickým i mezizubním kartáčkem. Bez kvalitní hygieny je jakékoliv další ošetření zbytečné.",
  },
  {
    cat: "Ošetření",
    name: "Bílé a černé plomby",
    lead: false,
    desc: "Kazy ošetřujeme fotokompozitními (bílými) i amalgamovými (černými) plombami. Ke každé situaci doporučíme tu variantu, která vám dá nejvíc.",
  },
  {
    cat: "Ošetření",
    name: "Parodontologie",
    lead: false,
    desc: "Řešíme záněty dásní a parodontózu — nejčastější příčinu ztráty zubů, které jde hygienou předejít.",
  },
  {
    cat: "Ošetření",
    name: "Endodoncie",
    lead: false,
    desc: "Ošetření kořenových kanálků, díky kterému v ústech udržíme i zub odumřelý po velkém kazu nebo úrazu.",
  },
  {
    cat: "Ošetření",
    name: "Implantologie",
    lead: false,
    desc: "Chybějící zub nahradíme implantátem zasazeným do čelistní kosti — jako plnohodnotnou náhradu.",
  },
];

const hygiene = [
  { d: "Pondělí", h: "07:30 – 12:00", h2: "12:30 – 16:00" },
  { d: "Úterý", h: "07:30 – 12:00", h2: "12:30 – 16:00" },
  { d: "Středa", h: "—", h2: "" },
  { d: "Čtvrtek", h: "—", h2: "" },
  { d: "Pátek", h: "—", h2: "" },
];

function Hook({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 40 24" fill="none" aria-hidden="true">
      <path d="M1 20 H16 C28 20 34 15 38 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function Tick({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 30 22" fill="none" aria-hidden="true">
      <path d="M2 3 V9 C2 15 5 18 12 18 H28" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function Rule() {
  return (
    <div className="rule" aria-hidden="true">
      <span className="rule__line" />
      <Hook className="rule__hook" />
    </div>
  );
}

export default function Page() {
  return (
    <main className="page">
      {/* HERO */}
      <header className="hero">
        <div className="hero__grid" aria-hidden="true" />
        <div className="hero__inner">
          <p className="eyebrow reveal" style={{ ["--i" as string]: 0 }}>
            Dentální hygiena&nbsp;&nbsp;—&nbsp;&nbsp;Olomouc, Wellnerova
          </p>

          <h1 className="wordmark">
            <span className="wordmark__small reveal" style={{ ["--i" as string]: 1 }}>
              Zubní ordinace
            </span>
            <span className="wordmark__big reveal" style={{ ["--i" as string]: 2 }}>
              Švec
              <svg className="draw" viewBox="0 0 480 40" fill="none" aria-hidden="true">
                <path
                  d="M4 28 H352 C416 28 450 24 470 6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  pathLength={1}
                />
              </svg>
            </span>
            <span className="wordmark__suffix reveal" style={{ ["--i" as string]: 2 }}>
              s.r.o.
            </span>
          </h1>

          <p className="hero__thesis reveal" style={{ ["--i" as string]: 3 }}>
            Péče o zuby u nás začíná prevencí — čištěním, motivací a nácvikem
            techniky. Zdravé dásně a čisté mezizubní prostory vydrží déle než
            sebelepší plomba.
          </p>

          <div className="hero__meta reveal" style={{ ["--i" as string]: 4 }}>
            <p className="hero__notice">
              <span className="dot" aria-hidden="true" />
              Momentálně nepřijímáme nové pacienty
            </p>
            <ul className="team">
              <li>MDDr. Pavel Švec</li>
              <li>MDDr. Lucie Smítalová</li>
              <li>Bc. Martina Bejdáková, DiS.</li>
            </ul>
          </div>
        </div>
      </header>

      {/* SLUŽBY */}
      <section className="section" aria-labelledby="sluzby-h">
        <Rule />
        <div className="section__head">
          <p className="section__label">01 — Co u nás vyřešíte</p>
          <h2 className="section__title" id="sluzby-h">
            Naše služby
          </h2>
        </div>

        <ol className="index">
          {services.map((s) => (
            <li
              key={s.name}
              className={s.lead ? "index__row index__row--lead" : "index__row"}
            >
              <span className="index__cat">{s.cat}</span>
              <div className="index__body">
                <h3 className="index__name">
                  <Tick className={s.lead ? "index__tick tick--mint" : "index__tick"} />
                  {s.name}
                </h3>
                <p className="index__desc">{s.desc}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      {/* ORDINAČNÍ DOBA + O NÁS */}
      <section className="section" aria-labelledby="doba-h">
        <Rule />
        <div className="section__head">
          <p className="section__label">02 — Kdy a kde nás najdete</p>
          <h2 className="section__title" id="doba-h">
            Ordinační doba
          </h2>
        </div>

        <div className="trust">
          <div className="hours">
            <div className="hours__head">
              <h3 className="hours__who">Bc. Martina Bejdáková, DiS.</h3>
              <p className="hours__role">dentální hygiena</p>
            </div>
            <dl className="schedule">
              {hygiene.map((r) => (
                <div
                  key={r.d}
                  className={r.h === "—" ? "schedule__row schedule__row--off" : "schedule__row"}
                >
                  <dt className="schedule__day">
                    <Hook className="schedule__pointer" />
                    {r.d}
                  </dt>
                  <dd className="schedule__time">
                    {r.h === "—" ? (
                      <span className="schedule__off">neordinuje</span>
                    ) : (
                      <>
                        <span>{r.h}</span>
                        <span className="schedule__sep" aria-hidden="true">|</span>
                        <span>{r.h2}</span>
                      </>
                    )}
                  </dd>
                </div>
              ))}
            </dl>
            <p className="hours__note">
              Zubní lékaři MDDr. Pavel Švec a MDDr. Lucie Smítalová ordinují
              v pracovní dny; konkrétní časy potvrdí recepce.
            </p>
          </div>

          <div className="about">
            <h3 className="about__title">Kudy k nám</h3>
            <p className="about__text">
              Sídlíme v centru Olomouce na Wellnerově ulici v „ušatém domě“.
              Vchod do ordinace je ze dvora z Erbenovy ulice.
            </p>
            <p className="about__text">
              K zaparkování využijte podzemní garáže pod sousedním domem Namiro
              (kde je Magistrát) nebo parkoviště u obchodního domu Billa vedle
              zimního stadionu.
            </p>

            <dl className="contact">
              <div className="contact__row">
                <dt>Adresa</dt>
                <dd>Wellnerova 3A, 779 00 Olomouc</dd>
              </div>
              <div className="contact__row">
                <dt>Recepce</dt>
                <dd>
                  <a href="tel:+420777111222">+420 777 111 222</a>
                </dd>
              </div>
              <div className="contact__row">
                <dt>E-mail</dt>
                <dd>
                  <a href="mailto:info@example.cz">info@example.cz</a>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </section>
    </main>
  );
}
