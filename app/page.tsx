import type { CSSProperties } from "react";

type FlameProps = {
  id: string;
  className?: string;
};

function Flame({ id, className }: FlameProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 100 150"
      role="img"
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <radialGradient id={`body-${id}`} cx="50%" cy="74%" r="62%">
          <stop offset="0%" stopColor="#eaf2ff" />
          <stop offset="30%" stopColor="#4d94ff" />
          <stop offset="62%" stopColor="#1f6feb" />
          <stop offset="100%" stopColor="#0b1f3a" />
        </radialGradient>
        <radialGradient id={`core-${id}`} cx="50%" cy="80%" r="55%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="55%" stopColor="#e9f1ff" />
          <stop offset="100%" stopColor="#7fb2ff" />
        </radialGradient>
      </defs>
      <path
        className="flame-body"
        fill={`url(#body-${id})`}
        d="M50 10 C 58 46, 79 58, 79 95 C 79 123, 63 141, 50 141 C 37 141, 21 123, 21 95 C 21 58, 42 46, 50 10 Z"
      />
      <path
        className="flame-core"
        fill={`url(#core-${id})`}
        d="M50 62 C 55 79, 65 87, 65 106 C 65 123, 58 133, 50 133 C 42 133, 35 123, 35 106 C 35 87, 45 79, 50 62 Z"
      />
    </svg>
  );
}

function Pipe({ hero = false }: { hero?: boolean }) {
  return (
    <div className={hero ? "pipe pipe--hero" : "pipe"} aria-hidden="true">
      <span className="pipe__line" />
      <span className="pipe__nut" />
    </div>
  );
}

const services = [
  {
    title: "Servis a opravy plynových spotřebičů",
    body: "Záruční i pozáruční servis kotlů, ohřívačů a průtokových ohřívačů. Najdeme závadu a spravíme ji tak, aby topení zase spolehlivě běželo.",
  },
  {
    title: "Montáže kotlů a krbových kamen",
    body: "Instalace plynových kotlů, kotlů na pevná paliva i krbových kamen — od demontáže starého zdroje po zprovoznění a zaškolení.",
  },
  {
    title: "Otopné soustavy a podlahové vytápění",
    body: "Návrh a montáž otopných soustav i podlahového vytápění na míru vašemu domu. Řešení, které topí rovnoměrně a úsporně.",
  },
  {
    title: "Instalatérské a topenářské práce",
    body: "Rozvody vody a topení, výměny radiátorů, drobné i rozsáhlejší rekonstrukce. Jeden řemeslník na celou práci.",
  },
  {
    title: "Revize spalinových cest a plynu",
    body: "Revize a čištění komínů, vložkování a kontroly plynového zařízení. Papíry, které potřebujete, a hlavně bezpečný provoz.",
  },
];

const stats = [
  { num: "9+", label: "let praxe v oboru" },
  { num: "300+", label: "montáží a instalací" },
  { num: "1000+", label: "spokojených zákazníků" },
];

export default function Page() {
  return (
    <main className="page">
      <header className="band band--hero">
        <div className="wrap hero__inner">
          <p className="wordmark">
            <span className="wordmark__main">PLYNOSERVIS</span>
            <span className="wordmark__sub">Pavel Pírek s.r.o.</span>
          </p>

          <div className="hero__ignite">
            <span className="hero__sweep" aria-hidden="true" />
            <Flame id="hero" className="hero__flame" />
            <h1 className="hero__title">
              <span>SERVIS</span>
              <span className="hero__dot" aria-hidden="true">
                •
              </span>
              <span>OPRAVY</span>
              <span className="hero__dot" aria-hidden="true">
                •
              </span>
              <span>MONTÁŽE</span>
            </h1>
          </div>

          <p className="hero__lead">
            Spotřebiče na zemní plyn — servis, opravy a montáže. Přijedeme,
            změříme a navrhneme řešení pro Olomouc a okolí.
          </p>

          <p className="hero__free">
            Konzultace na místě a cenová nabídka vždy zdarma.
          </p>

          <div className="hero__contact">
            <a className="btn btn--primary" href="tel:+420777111222">
              Zavolat 777 111 222
            </a>
            <a className="btn btn--ghost" href="mailto:info@example.cz">
              Napsat info@example.cz
            </a>
            <span className="hero__where">Ukázková 123, Olomouc · Po–Pá 8:00–16:00</span>
          </div>
        </div>
      </header>

      <Pipe hero />

      <section className="band band--services" aria-labelledby="services-title">
        <div className="wrap">
          <p className="eyebrow eyebrow--copper">Naše služby</p>
          <h2 id="services-title" className="section-title">
            Co pro vás uděláme
          </h2>
          <ul className="services">
            {services.map((s, i) => (
              <li className="service" key={i}>
                <Flame id={`svc-${i}`} className="service__flame" />
                <div className="service__text">
                  <h3 className="service__title">{s.title}</h3>
                  <p className="service__body">{s.body}</p>
                </div>
              </li>
            ))}
          </ul>
          <p className="services__note">
            Servis kotlů běžných značek — zeptejte se na tu vaši.
          </p>
        </div>
      </section>

      <Pipe />

      <section className="band band--trust" aria-labelledby="trust-title">
        <div className="wrap">
          <p className="eyebrow eyebrow--brass">Kdo jsme</p>
          <h2 id="trust-title" className="section-title section-title--light">
            Bezpečný a úsporný provoz. To je celá naše práce.
          </h2>
          <div className="trust__copy">
            <p>
              Jsme firma z Olomouce zaměřená na kompletní péči o plynové
              spotřebiče a topení. Pravidelný servis snižuje náklady na provoz
              i riziko poruchy — a hlavně drží váš kotel v bezpečném chodu.
            </p>
            <p>
              Pracujeme precizně, jednáme férově a poradíme i s výběrem nového
              kotle nebo rekonstrukcí otopné soustavy. Žádné řeči navíc — jen
              odvedená práce, za kterou ručíme.
            </p>
          </div>

          <ul className="stats">
            {stats.map((st, i) => (
              <li className="stat" key={i}>
                <Flame id={`stat-${i}`} className="stat__flame" />
                <span className="stat__num">{st.num}</span>
                <span className="stat__label">{st.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
