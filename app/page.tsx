import type { CSSProperties } from "react";

const branches = [
  "Jindřichův Hradec",
  "Pardubice – Staré Hradiště",
  "Písek",
  "Strakonice",
  "Tábor",
  "Třebíč – Nové Město",
  "Velké Meziříčí",
  "Havlíčkův Brod",
  "České Budějovice",
  "Český Krumlov",
  "Jihlava",
  "Benešov",
];

const services = [
  {
    t: "Osobní vozy",
    d: "Vytmelení kamínku i celá výměna čelního skla — u drobných poškození na počkání.",
  },
  {
    t: "Nákladní vozidla",
    d: "Velkoplošná skla pro kamiony a dodávky, včetně lepení podle výrobní tolerance.",
  },
  {
    t: "Užitková vozidla",
    d: "Boční, zadní i vyhřívaná skla pro řemeslníky, kteří nemůžou stát dlouho v servisu.",
  },
  {
    t: "Autobusy",
    d: "Rozměrná čelní a boční skla dálkových i městských autobusů, montáž po domluvě.",
  },
  {
    t: "Stavební stroje",
    d: "Atypická a bezpečnostní skla bagrů, nakladačů a manipulační techniky.",
  },
];

const insurance = [
  "Kopie velkého technického průkazu",
  "Kopie řidičského průkazu",
  "Kopie smlouvy o pojištění skel",
  "Razítko firmy u firemních vozů",
];

const reviews = [
  {
    q: "Rychlé a kvalitní jednání. Prasklé čelní sklo opravili ještě týž den.",
    a: "Petr Novák",
  },
  {
    q: "Profesionální přístup, nabídli možné varianty i brzký termín a odvedli perfektní práci. Rád se vrátím — snad ale hned tak nebudu muset.",
    a: "Jan",
  },
  {
    q: "Naprostá spokojenost. Sami vyřídili pojistku, zadní sklo vyměnili rychle a přesně. Auto jsem převzal dřív, uvnitř vyluxováno a čisto. Děkuji.",
    a: "Jirka",
  },
];

const cracks = [
  "M382 176 L250 92 L172 58",
  "M382 176 L470 44",
  "M382 176 L604 96 L724 70",
  "M382 176 L706 214 L838 206",
  "M382 176 L612 300 L712 356",
  "M382 176 L322 322 L286 392",
  "M382 176 L150 244 L44 250",
  "M382 176 L214 150 L120 128",
];

function ChipStar({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <g fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round">
        <path d="M12 12 L12 3" />
        <path d="M12 12 L20 8" />
        <path d="M12 12 L21 15" />
        <path d="M12 12 L14 21" />
        <path d="M12 12 L5 20" />
        <path d="M12 12 L3 14" />
        <path d="M12 12 L4 6" />
      </g>
      <circle cx="12" cy="12" r="2.4" fill="currentColor" />
    </svg>
  );
}

function Divider({ tone }: { tone: "onInk" | "onWhite" }) {
  return (
    <svg
      className={`divider divider--${tone}`}
      viewBox="0 0 1200 40"
      preserveAspectRatio="none"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M0 21 L150 21 L206 9 L268 27 L360 14 L430 30 L470 22 M470 22 L520 6 L610 24 L700 12 L770 28 L860 16 L930 26 L1010 12 L1090 24 L1150 18 L1200 21" />
      <path className="divider__branch" d="M470 22 L500 46" />
      <path className="divider__branch" d="M700 12 L680 -8" />
    </svg>
  );
}

export default function Page() {
  return (
    <main className="page">
      {/* HERO */}
      <section className="band band--hero" aria-labelledby="hero-title">
        <div className="band__inner hero">
          <p className="wordmark" aria-label="Autosklo K plus M">
            AUTOSKLO <span className="wordmark__km">K+M</span>
          </p>

          <p className="eyebrow">Opravy autoskel · Jindřichův Hradec · od roku 1992</p>

          <div className="hero__headzone">
            <h1 id="hero-title" className="hero__title">
              Kamínek v&nbsp;čelním skle
              <br />
              vyřešíme <span className="hero__accent">na počkání.</span>
            </h1>

            <svg
              className="crack"
              viewBox="0 0 900 400"
              preserveAspectRatio="xMidYMid meet"
              aria-hidden="true"
              focusable="false"
            >
              {cracks.map((d, i) => (
                <path key={i} className="crack__ln" d={d} pathLength={1} />
              ))}
              <circle className="crack__hit" cx={382} cy={176} r={6} />
              <circle className="crack__ring" cx={382} cy={176} r={13} pathLength={1} />
            </svg>

            <span className="hero__resin" aria-hidden="true" />
          </div>

          <p className="hero__lede">
            Opravy i výměny autoskel pro osobní, nákladní i užitkové vozy. Pojistnou
            událost vyřídíme za vás — vy jen přistavíte auto a my se postaráme o zbytek.
          </p>

          <div className="hero__actions">
            <a className="btn btn--amber" href="tel:+420777111222">
              Zavolat 777 111 222
            </a>
            <a className="btn btn--ghost" href="mailto:info@example.cz">
              Napsat e-mail
            </a>
          </div>

          <dl className="hero__facts">
            <div className="fact">
              <dt>Zkušenost</dt>
              <dd>od roku 1992</dd>
            </div>
            <div className="fact">
              <dt>Pobočky</dt>
              <dd>12 v ČR</dd>
            </div>
            <div className="fact">
              <dt>Drobná poškození</dt>
              <dd>na počkání</dd>
            </div>
          </dl>
        </div>
      </section>

      {/* SLUŽBY + POBOČKY */}
      <section className="band band--services" aria-labelledby="services-title">
        <Divider tone="onInk" />
        <div className="band__inner">
          <header className="head">
            <p className="eyebrow eyebrow--dark">Co spravíme</p>
            <h2 id="services-title" className="head__title">
              Pět druhů vozidel, jedno řemeslo — přesné lepení skla.
            </h2>
          </header>

          <ul className="services">
            {services.map((s) => (
              <li key={s.t} className="service">
                <ChipStar className="service__star" />
                <div>
                  <h3 className="service__title">{s.t}</h3>
                  <p className="service__desc">{s.d}</p>
                </div>
              </li>
            ))}
          </ul>

          <div className="branches">
            <div className="branches__head">
              <h3 className="branches__title">Vyberte nejbližší pobočku</h3>
              <p className="branches__note">
                Vaše nejbližší je označená bodem nárazu. Zavolejte a domluvíme termín.
              </p>
            </div>
            <ul className="branchlist" role="list">
              {branches.map((b, i) => (
                <li key={b}>
                  <a
                    className={`branch${i === 0 ? " branch--active" : ""}`}
                    href="tel:+420777111222"
                  >
                    <span className="branch__dot" aria-hidden="true" />
                    <span className="branch__name">{b}</span>
                    {i === 0 && <span className="branch__tag">nejblíž vám</span>}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* DŮVĚRA */}
      <section className="band band--trust" aria-labelledby="trust-title">
        <Divider tone="onWhite" />
        <div className="band__inner">
          <header className="head">
            <p className="eyebrow eyebrow--light">Pojistná událost</p>
            <h2 id="trust-title" className="head__title head__title--light">
              Pojistku vyřídíme za vás. Vy nám jen přistavíte auto.
            </h2>
          </header>

          <div className="trust">
            <div className="trust__panel">
              <p className="trust__lead">
                Máte sklo pojištěné z připojištění nebo havarijního pojištění?
                Veškerý kontakt s pojišťovnou obstarají naši technici. Připravte si:
              </p>
              <ul className="docs" role="list">
                {insurance.map((d) => (
                  <li key={d} className="docs__item">
                    <ChipStar className="docs__star" />
                    <span>{d}</span>
                  </li>
                ))}
              </ul>
              <p className="trust__brands">
                Skla montujeme od uznávaných výrobců — <strong>Saint-Gobain</strong>,{" "}
                <strong>Fuyao</strong> i <strong>Glavista</strong>.
              </p>
            </div>

            <div className="reviews">
              <p className="reviews__badge">100 % spokojených zákazníků</p>
              <ul className="reviews__list" role="list">
                {reviews.map((r) => (
                  <li key={r.a} className="review">
                    <p className="review__q">{r.q}</p>
                    <p className="review__a">{r.a}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
