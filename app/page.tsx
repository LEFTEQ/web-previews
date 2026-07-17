import { AiImage } from "./_ui";

// Brass keyline arch — the arkáda of náměstí Přemysla Otakara II.
// reduced to a single engraved arch. Draws itself once on load.
function ArchFrame() {
  return (
    <svg
      className="arch-frame"
      viewBox="0 0 320 460"
      preserveAspectRatio="xMidYMax meet"
      aria-hidden="true"
      focusable="false"
    >
      <path
        className="arch-line"
        d="M18 456 L18 172 A142 142 0 0 1 302 172 L302 456"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        vectorEffect="non-scaling-stroke"
      />
      <path
        className="arch-line arch-line--inner"
        d="M40 456 L40 176 A120 120 0 0 1 280 176 L280 456"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        vectorEffect="non-scaling-stroke"
      />
      <circle className="arch-key" cx="160" cy="56" r="3.5" fill="currentColor" />
    </svg>
  );
}

// Small arch cap that heads each section — one bay of the colonnade.
function ArchCap() {
  return (
    <svg
      className="cap"
      viewBox="0 0 132 74"
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M5 74 L5 48 A61 61 0 0 1 127 48 L127 74"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
        vectorEffect="non-scaling-stroke"
      />
      <circle cx="66" cy="9" r="2.5" fill="currentColor" />
    </svg>
  );
}

export default function Page() {
  return (
    <main className="page">
      {/* ————————————————— HERO ————————————————— */}
      <header className="hero">
        <div className="hero__grid">
          <div className="hero__type reveal">
            <p className="eyebrow">
              <span className="eyebrow__dot" aria-hidden="true" />
              Pod arkádami náměstí Přemysla Otakara&nbsp;II. · České Budějovice
            </p>

            <h1 className="display">
              <span>Právo</span>
              <span>s lidskou</span>
              <span className="display__accent">tváří.</span>
            </h1>

            <p className="lede">
              Advokátní kancelář JUDr.&nbsp;Petry Koubové. Zastoupení ve
              sporech i klidné vedení nesporné agendy — srozumitelně,
              diskrétně a bez právnické mlhy.
            </p>

            <div className="hero__cta">
              <a className="btn" href="#sluzby">Sjednat schůzku</a>
              <a className="link-arrow" href="#kancelar">
                O kanceláři <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>

          {/* Brass arch framing the engraved nameplate — step under it. */}
          <div className="hero__arch">
            <ArchFrame />
            <div className="nameplate reveal reveal--2">
              <span className="nameplate__mono" aria-hidden="true">PK</span>
              <span className="nameplate__name">JUDr. Petra Koubová</span>
              <span className="nameplate__role">advokátka</span>
              <span className="nameplate__rule" aria-hidden="true" />
              <span className="nameplate__meta">ČAK 16456 · Č. Budějovice</span>
            </div>
          </div>
        </div>
      </header>

      {/* ————————————————— SLUŽBY ————————————————— */}
      <section className="sec sec--stone" id="sluzby" aria-labelledby="sluzby-h">
        <div className="sec__head">
          <ArchCap />
          <p className="eyebrow eyebrow--dark">Dvě strany jednoho podloubí</p>
          <h2 className="h2" id="sluzby-h">Za kým sem chodí</h2>
          <p className="sec__intro">
            Kancelář vede občanskou i podnikatelskou agendu. Každý případ
            posuzujeme individuálně a hledáme řešení, které klientovi
            skutečně prospěje — ne to nejsložitější.
          </p>
        </div>

        <div className="bays">
          <article className="bay">
            <h3 className="bay__title">Pro občany</h3>
            <p className="bay__note">
              Životní situace, kde jde o klid a jistotu ve vaší rodině
              i majetku.
            </p>
            <ul className="list">
              <li>Rozvody, výživné a péče o děti</li>
              <li>Dědictví, závěti a vypořádání pozůstalosti</li>
              <li>Převody nemovitostí a sousedské spory</li>
              <li>Uznání a vymáhání dluhů</li>
              <li>Výpovědi a pracovněprávní spory</li>
            </ul>
          </article>

          <span className="bays__fold" aria-hidden="true" />

          <article className="bay">
            <h3 className="bay__title">Pro podnikatele</h3>
            <p className="bay__note">
              Právní zázemí pro firmu, aby vás papíry nebrzdily v práci.
            </p>
            <ul className="list">
              <li>Obchodní smlouvy a jejich revize</li>
              <li>Vymáhání pohledávek a exekuce</li>
              <li>Zakládání a změny společností</li>
              <li>Pracovní právo a interní předpisy</li>
              <li>Zastupování v obchodních sporech</li>
            </ul>
          </article>
        </div>
      </section>

      {/* ————————————————— O KANCELÁŘI / DŮVĚRA ————————————————— */}
      <section className="sec sec--pine" id="kancelar" aria-labelledby="kancelar-h">
        <div className="sec__head sec__head--light">
          <ArchCap />
          <p className="eyebrow">Jak to u nás chodí</p>
          <h2 className="h2 h2--light" id="kancelar-h">
            Advokátka, ne úřad
          </h2>
        </div>

        <div className="about">
          <p className="about__para">
            Vaše problémy bereme jako své vlastní. S klienty mluvíme otevřeně,
            po dohodě i neformálně, a stavíme mezi sebou důvěru — na ní se
            dobré právní řešení teprve zakládá.
          </p>

          <ul className="tenets">
            <li><span aria-hidden="true">—</span> Individuální posouzení každého případu</li>
            <li><span aria-hidden="true">—</span> Průběžná informovanost bez ptaní</li>
            <li><span aria-hidden="true">—</span> Profesionalita a naprostá diskrétnost</li>
            <li><span aria-hidden="true">—</span> Rovné partnerství klienta a advokáta</li>
          </ul>
        </div>

        <figure className="quote">
          <blockquote>
            „Oceňuji profesionalitu, rychlé zorientování se v problému a
            zároveň lidský přístup. Práce paní doktorky Koubové nám pomohla
            ke změně kvality života.“
          </blockquote>
          <figcaption>
            <span className="quote__name">Veronika M.</span>
            <span className="quote__role">klientka kanceláře</span>
          </figcaption>
        </figure>
      </section>
    </main>
  );
}
