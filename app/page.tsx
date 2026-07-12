import type { ReactNode } from "react";

const services = [
  {
    kind: "Skříně na míru",
    title: "Vestavěné skříně",
    desc: "Zaměříme šikmý strop, výklenek i celou předsíň. Skříň sedne na milimetr přesně tam, kde jiná nábytková stěna nechá spáru.",
    detail: "přes 500 dekorů lamina · posuvné dveře s tlumením · fototapety a potištěné sklo",
  },
  {
    kind: "Kuchyně",
    title: "Kuchyně na míru",
    desc: "Od dvířek přes pracovní desku po výsuvné drátěné koše. Dodáme i namontujeme spotřebiče, ať to všechno lícuje.",
    detail: "kuchyňská dvířka · pracovní desky · montáž spotřebičů",
  },
  {
    kind: "Nábytek",
    title: "Nábytek na zakázku",
    desc: "Kancelář, dětský pokoj i sklápěcí a patrové postele. Atypické kusy, které v obchodě nekoupíte.",
    detail: "kancelářský nábytek · postele a patrové postele · sklápěcí postele",
  },
  {
    kind: "Interiéry",
    title: "Rekonstrukce interiérů",
    desc: "Přestavba bytového jádra i celý byt v jedné etapě. Řemesla koordinuje jeden dodavatel — vy neháníte nikoho.",
    detail: "koupelny · dveře a zárubně · podlahy · komplet od jedné firmy",
  },
];

const reasons = [
  { n: "10", unit: "let", label: "na trhu v Ostravě, vlastní dílna a profesionální stroje" },
  { n: "500+", unit: "skříní", label: "dodaných vestavěných skříní na míru" },
  { n: "100+", unit: "kuchyní", label: "navržených a namontovaných na klíč" },
  { n: "10", unit: "let záruka", label: "na naši práci — a dodržené termíny" },
];

function Grain(): ReactNode {
  return <div className="grain" aria-hidden="true" />;
}

export default function Page() {
  return (
    <main className="page">
      <Grain />

      <header className="topbar">
        <a className="wordmark" href="#" aria-label="Stolařství Chejna, Ostrava">
          <span className="wordmark-mark">CH</span>
          <span className="wordmark-text">
            <span className="wordmark-name">Stolařství&nbsp;Chejna</span>
            <span className="wordmark-sub">Vestavěné skříně · Ostrava</span>
          </span>
        </a>
        <a className="topbar-call" href="tel:+420605123456">
          Zavolat do dílny
        </a>
      </header>

      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">Dílna v Ostravě · od roku 2013</p>
          <h1 className="hero-title">
            Skříň, která sedne
            <br />
            <span className="hero-title-accent">na milimetr</span>
            <br />
            přesně do vaší zdi.
          </h1>
          <p className="hero-lead">
            Zaměříme šikmý strop, křivou stěnu i výklenek u dveří — a vestavěnou
            skříň vyrobíme tak, že po ní nezůstane jediná spára. Bez katalogových
            kompromisů.
          </p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="tel:+420605123456">
              Zavolat technikovi
            </a>
            <a className="btn btn-ghost" href="mailto:dilna@stolarstvi-chejna.cz">
              Napsat na dílnu
            </a>
          </div>
          <p className="hero-note">
            Zaměření a 3D návrh interiéru <strong>zdarma</strong>.
          </p>
        </div>
        <figure className="hero-figure">
          <img
            src="/hero.webp"
            alt="Vestavěná skříň na míru s posuvnými dveřmi, dílo Stolařství Chejna"
            className="hero-img"
            width={960}
            height={1200}
          />
          <figcaption className="hero-caption">
            <span className="hero-caption-num">01</span>
            Vestavěná skříň s posuvnými dveřmi — zakázka, Ostrava-Poruba
          </figcaption>
        </figure>
      </section>

      <section className="services" aria-labelledby="services-title">
        <div className="section-head">
          <p className="eyebrow">Co u nás objednáte</p>
          <h2 id="services-title" className="section-title">
            Od jedné skříně po&nbsp;celý byt na&nbsp;klíč
          </h2>
          <p className="section-intro">
            Máme vlastní dílnu i stroje v Ostravě, takže pružně reagujeme na vaše
            přání. Ke každé zakázce jdeme individuálně a s pečlivostí — a vy jednáte
            jen s jedním člověkem.
          </p>
        </div>

        <ol className="cards">
          {services.map((s, i) => (
            <li className="card" key={s.title}>
              <span className="card-num">{String(i + 1).padStart(2, "0")}</span>
              <span className="card-kind">{s.kind}</span>
              <h3 className="card-title">{s.title}</h3>
              <p className="card-desc">{s.desc}</p>
              <p className="card-detail">{s.detail}</p>
            </li>
          ))}
        </ol>

        <figure className="services-figure">
          <img
            src="/section-1.webp"
            alt="Detail kuchyně na míru vyrobené ve Stolařství Chejna"
            className="wide-img"
            width={1400}
            height={800}
          />
          <figcaption>Kuchyně na míru — dvířka, pracovní deska i spotřebiče lícují na spáru.</figcaption>
        </figure>
      </section>

      <section className="trust" aria-labelledby="trust-title">
        <div className="trust-grid">
          <div className="trust-copy">
            <p className="eyebrow eyebrow-light">Proč zrovna my</p>
            <h2 id="trust-title" className="section-title trust-title">
              Ručíme za to, že&nbsp;budete spokojeni.
            </h2>
            <p className="trust-lead">
              Naši technici vás přijedou zaměřit osobně, takže nábytek vyrobíme přesně
              podle vašeho interiéru. Máme přes 500 dekorů lamina, originální fototapety,
              potištěné sklo, tlumení dveří i zásuvek a výsuvné koše. Dohodnuté termíny
              držíme.
            </p>
            <p className="trust-lead">
              Chcete rekonstruovat celý byt? Zvládneme i to — všechny řemeslné práce
              koordinuje jeden dodavatel, který zná vaši představu. Kompletní rekonstrukci
              umíme rozdělit i do dvou etap podle vašeho financování.
            </p>
            <div className="hero-actions">
              <a className="btn btn-primary" href="tel:+420605123456">
                Zavolat ještě dnes
              </a>
            </div>
          </div>

          <ul className="stats">
            {reasons.map((r) => (
              <li className="stat" key={r.label}>
                <span className="stat-num">
                  {r.n} <span className="stat-unit">{r.unit}</span>
                </span>
                <span className="stat-label">{r.label}</span>
              </li>
            ))}
          </ul>
        </div>

        <figure className="trust-figure">
          <img
            src="/section-2.webp"
            alt="Interiér po rekonstrukci od Stolařství Chejna v Ostravě"
            className="wide-img"
            width={1400}
            height={820}
          />
          <figcaption>
            Vlastní dílna v Ostravě — proto ručíme za perfektní zpracování každého kusu.
          </figcaption>
        </figure>
      </section>
    </main>
  );
}
