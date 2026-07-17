import type { CSSProperties } from "react";

function Aperture({ className }: { className?: string }) {
  const ticks = Array.from({ length: 72 }, (_, i) => i);
  return (
    <svg
      className={className}
      viewBox="0 0 200 200"
      role="img"
      aria-label="Optická clona s dioptrickou stupnicí"
      focusable="false"
    >
      <defs>
        <linearGradient id="arCoat" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#2c8f83" />
          <stop offset="55%" stopColor="#3f7f9a" />
          <stop offset="100%" stopColor="#6b5ba6" />
        </linearGradient>
      </defs>

      {/* diopter tick scale — like a phoropter dial */}
      <g>
        {ticks.map((i) => {
          const a = (i * 5 * Math.PI) / 180;
          const major = i % 9 === 0;
          const r1 = 92;
          const r2 = major ? 80 : 86;
          const x1 = 100 + r1 * Math.cos(a);
          const y1 = 100 + r1 * Math.sin(a);
          const x2 = 100 + r2 * Math.cos(a);
          const y2 = 100 + r2 * Math.sin(a);
          return (
            <line
              key={i}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke={major ? "#b0894a" : "#8b959d"}
              strokeWidth={major ? 1.6 : 0.8}
              opacity={major ? 0.95 : 0.5}
            />
          );
        })}
      </g>

      {/* concentric lens rings — the refraction focal mark */}
      <circle cx="100" cy="100" r="70" fill="none" stroke="url(#arCoat)" strokeWidth="2.4" />
      <circle cx="100" cy="100" r="52" fill="none" stroke="url(#arCoat)" strokeWidth="1.6" opacity="0.85" />
      <circle cx="100" cy="100" r="34" fill="none" stroke="url(#arCoat)" strokeWidth="1.2" opacity="0.7" />

      {/* crosshair — the alignment reticle */}
      <line x1="100" y1="22" x2="100" y2="46" stroke="#8b959d" strokeWidth="0.8" opacity="0.6" />
      <line x1="100" y1="154" x2="100" y2="178" stroke="#8b959d" strokeWidth="0.8" opacity="0.6" />
      <line x1="22" y1="100" x2="46" y2="100" stroke="#8b959d" strokeWidth="0.8" opacity="0.6" />
      <line x1="154" y1="100" x2="178" y2="100" stroke="#8b959d" strokeWidth="0.8" opacity="0.6" />

      {/* focus dot */}
      <circle cx="100" cy="100" r="6.5" fill="url(#arCoat)" />
    </svg>
  );
}

export default function Page() {
  const process = [
    {
      n: "01",
      title: "Změříme",
      body:
        "Zrak vám změří registrovaný optometrista na moderních přístrojích, včetně 3D refrakce PASKAL. Když to jde, měříme i bez objednání — na jistotu se ale radši objednejte.",
    },
    {
      n: "02",
      title: "Vyzkoušíte",
      body:
        "Multifokály nekupujete naslepo. Ještě před nákupem vám předvedeme pohled přes jednotlivé varianty čoček a vy si sami porovnáte, ve které vidíte nejlíp.",
    },
    {
      n: "03",
      title: "Vybrousíme",
      body:
        "Do vybrané obruby zabrousíme čočky přesně na míru vašim očím. A prodejem to nekončí — brýle vám i opravíme a seřídíme.",
    },
  ];

  const offer = [
    ["Multifokální brýle", "Jedny brýle na dálku i na blízko — a vyzkoušíte si je dřív, než je koupíte."],
    ["Biometrické čočky Rodenstock", "B.I.G. NORM® broušené podle biometrického modelu vašeho oka pomocí umělé inteligence."],
    ["Dětské brýle a kontrola myopie", "Odolné, pružné a bezpečné obruby. Jsme certifikovaný dodavatel defokusačních čoček proti krátkozrakosti."],
    ["Sportovní a sluneční brýle", "Polarizační i samozabarvovací skla, včetně Drivewear pro řidiče."],
    ["Potápěčské a plavecké brýle", "Korekční varianty i pod vodu — ať vidíte ostře i tam."],
    ["Opravy a servis", "Uvolněný pantík nebo prasklá obruba? Přineste je, spravíme."],
  ];

  return (
    <main className="page">
      <header className="masthead wrap">
        <a className="brand" href="#" aria-label="Optika Joštová — domů">
          <Aperture className="brand__mark" />
          <span className="brand__text">
            <span className="brand__kicker">Optika</span>
            <span className="brand__name">Joštová</span>
          </span>
        </a>
        <p className="masthead__meta">Optometrie &middot; Hradec Králové &middot; od 2014</p>
      </header>

      <section className="hero section" aria-labelledby="hero-title">
        <div className="wrap hero__grid">
          <div className="hero__copy">
            <p className="eyebrow fx fx-1">
              <span className="dot" aria-hidden="true" />
              Měření zraku &middot; Brýle na míru
            </p>
            <h1 id="hero-title" className="hero__title fx fx-2">
              Ten okamžik, kdy&nbsp;svět docvakne do&nbsp;ostra.
            </h1>
            <p className="hero__lead fx fx-3">
              Rodinná optika v&nbsp;Hradci Králové. Změříme vám zrak na přístrojích
              PASKAL 3D, čočky zabrousíme na míru a multifokály si vyzkoušíte
              ještě před nákupem.
            </p>
            <div className="hero__actions fx fx-4">
              <a className="btn" href="tel:+420777111222">Objednat se na měření</a>
              <span className="hero__hours">Po&ndash;Pá&nbsp;9&ndash;18 &middot; víkendy zavřeno</span>
            </div>
          </div>
          <div className="hero__figure fx fx-2" aria-hidden="false">
            <Aperture className="hero__aperture" />
          </div>
        </div>
      </section>

      <section className="section section--offer" aria-labelledby="offer-title">
        <div className="wrap">
          <div className="sec-head reveal">
            <p className="eyebrow">
              <span className="dot" aria-hidden="true" />
              Od měření po hotové brýle
            </p>
            <h2 id="offer-title" className="sec-title">Tři kroky k&nbsp;ostrému vidění</h2>
          </div>

          <ol className="steps">
            {process.map((s) => (
              <li className="step" key={s.n}>
                <span className="step__n">{s.n}</span>
                <h3 className="step__title">{s.title}</h3>
                <p className="step__body">{s.body}</p>
              </li>
            ))}
          </ol>

          <div className="offer">
            <h3 className="offer__head">Co u&nbsp;nás vyberete</h3>
            <ul className="offer__list">
              {offer.map(([t, d]) => (
                <li className="offer__item" key={t}>
                  <span className="dot dot--sm" aria-hidden="true" />
                  <div>
                    <span className="offer__name">{t}</span>
                    <span className="offer__desc">{d}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section section--about" aria-labelledby="about-title">
        <div className="wrap about__grid">
          <div className="sec-head reveal about__intro">
            <p className="eyebrow">
              <span className="dot" aria-hidden="true" />
              Rodinná optika od roku 2014
            </p>
            <h2 id="about-title" className="sec-title">
              Registrovaní optometristé, kteří práci berou osobně
            </h2>
            <p className="about__text">
              Máme za sebou roky v&nbsp;oboru optiky i&nbsp;optometrie a pořád se
              učíme dál. Ke každému přistupujeme individuálně — každé oko je jiné.
              Pomůžeme vám vybrat obrubu, do které pak zabrousíme přesně ty
              nejvhodnější čočky, abyste v&nbsp;nových brýlích viděli dlouho a rádi.
            </p>
          </div>

          <div className="about__side">
            <div className="card">
              <h3 className="card__label">Náš tým</h3>
              <ul className="team">
                <li>Martin Jošt, DiS.</li>
                <li>Helena Joštová, DiS.</li>
                <li>Bc. Jan Klásek</li>
              </ul>
            </div>

            <div className="card">
              <h3 className="card__label">Otevírací doba</h3>
              <dl className="hours">
                <div className="hours__row">
                  <dt>Pondělí&ndash;Pátek</dt>
                  <dd>9.00&ndash;18.00</dd>
                </div>
                <div className="hours__row">
                  <dt>So, Ne, svátky</dt>
                  <dd>Zavřeno</dd>
                </div>
              </dl>
            </div>

            <div className="card card--book">
              <h3 className="card__label">Na měření zraku se objednejte</h3>
              <a className="card__tel" href="tel:+420777111222">+420&nbsp;777&nbsp;111&nbsp;222</a>
              <a className="card__mail" href="mailto:info@example.cz">info@example.cz</a>
              <p className="card__addr">Gočárova třída, Hradec Králové</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
