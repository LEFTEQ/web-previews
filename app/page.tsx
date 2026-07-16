import { HeroSwap } from "./motion";

const PIGMENTS = [
  {
    no: "01",
    swatch: "#29348a",
    pigment: "Ultramarín",
    title: "Bar",
    body:
      "Koktejly na míru i klasika, kterou znáte. Široký výběr destilátů a barman, který zná svoje řemeslo. Řekněte náladu, zbytek necháte na nás.",
  },
  {
    no: "02",
    swatch: "#c47b2c",
    pigment: "Skin-contact amber",
    title: "Bistro",
    body:
      "Sezónní menu z jednoduchých, poctivých surovin. Měníme ho podle toho, co je zrovna nejlepší — stavte se na jeden chod nebo na celý večer.",
  },
  {
    no: "03",
    swatch: "#1f5a4c",
    pigment: "Viridián",
    title: "Aperitiv",
    body:
      "Něco hořkého a chladného na začátek. Bylinné tinktury, vermuty a spritz, co otevřou chuť před večeří.",
  },
  {
    no: "04",
    swatch: "#ddd0a0",
    pigment: "Champagne",
    title: "Bublinky & víno",
    body:
      "Vínem domu je champagne. K tomu sklenka bílého, červeného nebo oranžového — bar vás nesoudí, bar vás baví.",
  },
];

function Seam({ fill, variant }: { fill: string; variant: 1 | 2 }) {
  const d1 =
    "M0 0 H1200 V33 C1118 51 1050 19 968 36 C880 55 820 21 730 39 C648 55 578 23 498 38 C418 52 348 21 268 40 C188 55 108 27 0 43 Z";
  const d2 =
    "M0 0 H1200 V44 C1130 26 1058 52 978 37 C892 21 828 50 742 35 C660 21 588 49 506 36 C426 23 352 52 270 38 C190 25 112 50 0 34 Z";
  return (
    <svg
      className="seam"
      viewBox="0 0 1200 56"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path d={variant === 1 ? d1 : d2} fill={fill} />
    </svg>
  );
}

export default function Page() {
  return (
    <main className="page">
      <section className="band band--hero" aria-labelledby="hero-title">
        <div className="wrap hero__grid">
          <p className="eyebrow">
            <span className="mono" aria-hidden="true">A</span>
            Cocktail bar &amp; bistro · Kobližná 2, Brno-střed
          </p>

          <h1 id="hero-title" className="hero__headline">
            <span className="hero__static">My jsme </span>
            <HeroSwap />
            <span className="hero__static">.</span>
          </h1>

          <p className="hero__lede">
            Bistro je neformální a nekomplikované. Bar má styl a umí vás bavit.
            My jsme z obou vzali to nejlepší a rozmíchali to jako barvu na
            plátně — v centru Brna, každý večer nanovo.
          </p>

          <div className="hero__meta">
            <span>Večeře Út–So od 17:00</span>
            <span>Oběd Pá &amp; So 11:30–14:00</span>
            <a className="hero__cta" href="mailto:rezervace@atelierbar.cz">
              Rezervovat večeři
            </a>
          </div>
        </div>
      </section>

      <section className="band band--ink band--seam" aria-labelledby="menu-title">
        <Seam fill="#f1ece1" variant={1} />
        <div className="wrap">
          <header className="section-head">
            <p className="kicker kicker--light">Nabídka · paleta domu</p>
            <h2 id="menu-title" className="section-title">
              Čtyři pigmenty, jeden večer
            </h2>
            <p className="section-intro">
              Menu čteme jako paletu — každá část večera má svoji barvu.
              Kuchyň vaří 17:00–22:00, bar drží déle.
            </p>
          </header>

          <ul className="chips">
            {PIGMENTS.map((p) => (
              <li key={p.no} className="chip">
                <span
                  className="chip__swatch"
                  style={{ background: p.swatch }}
                  aria-hidden="true"
                />
                <div className="chip__text">
                  <p className="chip__label">
                    <span className="chip__no">{p.no}</span>
                    <span className="chip__pigment">{p.pigment}</span>
                  </p>
                  <h3 className="chip__title">{p.title}</h3>
                  <p className="chip__body">{p.body}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section
        className="band band--warm band--seam"
        aria-labelledby="about-title"
      >
        <Seam fill="#191d2a" variant={2} />
        <div className="wrap about__grid">
          <div className="about__manifesto">
            <p className="kicker">O nás</p>
            <h2 id="about-title" className="section-title">
              Spojili jsme to nejlepší z obou.
            </h2>
            <p className="about__text">
              Bistro se hodně mění, ale to důležité zůstává — pohostinnost a
              radost. Bar je živý, někdy trochu hlučný, jindy vás nechá
              rozjímat. Atelier je místo, kde se obojí potkává u jednoho stolu.
            </p>
            <p className="about__signature">
              <span className="mono mono--lg" aria-hidden="true">A</span>
              Atelier — Bar &amp; Bistro, Kobližná 2, úplné centrum Brna.
            </p>
          </div>

          <aside className="card" aria-label="Rezervace a otevírací doba">
            <h3 className="card__title">Rezervace &amp; hodiny</h3>

            <dl className="hours">
              <div className="hours__row">
                <dt>Út–Čt</dt>
                <dd>17:00–23:00</dd>
              </div>
              <div className="hours__row">
                <dt>Pá–So</dt>
                <dd>17:00–24:00</dd>
              </div>
              <div className="hours__row">
                <dt>Oběd Pá &amp; So</dt>
                <dd>11:30–14:00</dd>
              </div>
              <div className="hours__row hours__row--muted">
                <dt>Ne &amp; Po</dt>
                <dd>zavřeno</dd>
              </div>
            </dl>

            <p className="card__note">
              Rezervace přijímáme na večeři. Pro skupiny nad 6 osob nám napište
              na{" "}
              <a href="mailto:rezervace@atelierbar.cz">rezervace@atelierbar.cz</a>.
              Dárkový voucher vyzvednete v otevírací době nebo po domluvě
              mailem.
            </p>

            <div className="card__contact">
              <a className="card__cta" href="tel:+420731199434">
                Zavolat +420 731 199 434
              </a>
              <a href="mailto:info@atelierbar.cz">info@atelierbar.cz</a>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
