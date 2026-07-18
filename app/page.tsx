import type { ReactNode } from "react";

function Flame({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 40 64"
      role="img"
      aria-label="Zapálená svíce"
      focusable="false"
    >
      <path
        className="flame-outer"
        d="M20 2c1 8 8 12 8 22 0 9-4 16-8 16s-8-6-8-14c0-4 2-7 4-10 1 3 2 4 4 4 2 0 3-2 3-5 0-6-4-9-3-13z"
      />
      <path
        className="flame-inner"
        d="M20 20c1 5 4 7 4 12 0 5-2 8-4 8s-4-3-4-7c0-4 2-6 4-8 0 1 .5 1.5 1 1.5s.8-.8.5-1.7c-.6-1.6-1.6-2.9-1-5.8z"
      />
      <rect className="candle" x="14" y="44" width="12" height="18" rx="2" />
    </svg>
  );
}

function Piece({
  name,
  detail,
  children,
}: {
  name: string;
  detail: string;
  children: ReactNode;
}) {
  return (
    <figure className="craft-piece">
      <div className="craft-vessel" aria-hidden="true">
        {children}
      </div>
      <figcaption>
        <span className="craft-name">{name}</span>
        <span className="craft-detail">{detail}</span>
      </figcaption>
    </figure>
  );
}

export default function Page() {
  return (
    <main className="chapel">
      <section className="hero" aria-labelledby="hero-title">
        <div className="vigil-bloom" aria-hidden="true" />
        <div className="hero-inner">
          <header className="topbar">
            <a className="wordmark" href="#" aria-label="Brněnská pohřební služba — domů">
              <Flame className="wordmark-flame" />
              <span className="wordmark-text">
                <span className="wordmark-line">Brněnská</span>
                <span className="wordmark-sub">pohřební služba</span>
              </span>
            </a>
            <a className="nonstop-tag" href="tel:+420777111222">
              <span className="pulse" aria-hidden="true" />
              Odvoz zesnulých&nbsp;·&nbsp;nonstop 777 111 222
            </a>
          </header>

          <div className="hero-head">
            <p className="hero-eyebrow">Brno · pomáháme už přes dvacet let</p>
            <h1 id="hero-title" className="hero-title">
              <span>Důstojné</span>
              <span>rozloučení</span>
            </h1>
            <div className="hero-anchor">
              <Flame className="hero-flame" />
            </div>
            <p className="hero-sub">
              Přes dvacet let pomáháme brněnským rodinám tiše a s úctou
              vyprovodit jejich blízké. Jsme tu ve dne v noci — stačí zavolat a
              o&nbsp;vše ostatní se postaráme.
            </p>
          </div>
        </div>
      </section>

      <section className="band services" aria-labelledby="services-title">
        <div className="section-glow" aria-hidden="true" />
        <div className="wrap">
          <p className="eyebrow">Způsoby rozloučení</p>
          <h2 id="services-title" className="section-title">
            Rozloučení, jaké si přejete
          </h2>
          <div className="services-grid">
            <article className="service">
              <h3 className="service-name">Kremace s obřadem</h3>
              <p className="service-body">
                Důstojné rozloučení s nejbližšími — v obřadní síni, kostele,
                chrámu i modlitebně. Po obřadu zajistíme převoz zesnulého ke
                zpopelnění.
              </p>
              <span className="service-tag">Obřadní síně po celém Brně</span>
            </article>
            <article className="service">
              <h3 className="service-name">Pohřeb s uložením do země</h3>
              <p className="service-body">
                S pietou doprovodíme zesnulého k místu posledního odpočinku.
                Výkop hrobu mimo brněnské hřbitovy zajišťujeme vlastními
                proškolenými zaměstnanci.
              </p>
              <span className="service-tag">Vlastní tým i mimo Brno</span>
            </article>
            <article className="service">
              <h3 className="service-name">Kremace bez obřadu</h3>
              <p className="service-body">
                Zpopelnění bez smutečního obřadu. Na přání pozůstalých zajistíme
                vaši přítomnost u kremace nebo přesně stanovenou hodinu.
              </p>
              <span className="service-tag">Tiše a beze spěchu</span>
            </article>
          </div>

          <div className="nonstop-strip">
            <div>
              <p className="eyebrow eyebrow-amber">Nonstop, po celé ČR</p>
              <p className="nonstop-lead">
                Odvoz a převoz zesnulých kdykoli, dnem i nocí. O&nbsp;zesnulého
                se po celou dobu starají pouze naši vyškolení zaměstnanci ve
                společenském oděvu.
              </p>
            </div>
            <a className="nonstop-call" href="tel:+420777111222">
              Zavolat 777&nbsp;111&nbsp;222
            </a>
          </div>
        </div>
      </section>

      <section className="band about" aria-labelledby="about-title">
        <div className="section-glow" aria-hidden="true" />
        <div className="wrap">
          <p className="eyebrow">O nás</p>
          <h2 id="about-title" className="section-title">
            Vedle vás ve chvílích, kdy je nejhůř
          </h2>
          <p className="about-lead">
            Dovolte nám, abychom vám v&nbsp;těžkých chvílích pomohli vyřídit
            vše, co je spojené s&nbsp;rozloučením a&nbsp;odchodem vašeho blízkého
            na odpočinek. Výběr pohřební služby je jen na vašem uvážení —
            bez ohledu na to, kde k&nbsp;úmrtí došlo nebo kdo už zajistil převoz.
          </p>

          <div className="chapel-shelf">
            <div className="shelf-glow" aria-hidden="true" />
            <Piece
              name="Designové urny"
              detail="Ruční práce, kterou si vyberete podle povahy blízkého"
            >
              <svg viewBox="0 0 80 120" aria-hidden="true">
                <path d="M28 20h24l-2 10c8 6 12 16 12 30 0 22-10 40-24 40S14 82 14 60c0-14 4-24 12-30l-2-10z" />
                <path className="sheen-line" d="M40 22c-11 8-15 22-15 38 0 20 6 36 15 44" />
              </svg>
            </Piece>
            <Piece
              name="Smuteční sklo"
              detail="Památeční skleněné objekty jako vzpomínka na život"
            >
              <svg viewBox="0 0 80 120" aria-hidden="true">
                <path d="M40 12c14 20 22 34 22 52 0 25-10 44-22 44S18 89 18 64c0-18 8-32 22-52z" />
                <path className="sheen-line" d="M40 30c-9 14-13 26-13 40s5 26 13 34" />
              </svg>
            </Piece>
            <Piece
              name="Rakve"
              detail="Od prostých po zdobené, včetně ekologických převozových"
            >
              <svg viewBox="0 0 80 120" aria-hidden="true">
                <path d="M26 14h28l8 30-8 62H26l-8-62 8-30z" />
                <path className="sheen-line" d="M40 16v88" />
              </svg>
            </Piece>
          </div>

          <dl className="contact-card">
            <div>
              <dt>Kancelář</dt>
              <dd>Ukázková 123, Brno</dd>
            </div>
            <div>
              <dt>Telefon</dt>
              <dd>
                <a href="tel:+420777111222">777 111 222</a>
              </dd>
            </div>
            <div>
              <dt>E-mail</dt>
              <dd>
                <a href="mailto:info@example.cz">info@example.cz</a>
              </dd>
            </div>
            <div>
              <dt>Otevřeno</dt>
              <dd>Po–Pá 8–15 h, mimo tuto dobu po domluvě</dd>
            </div>
          </dl>
        </div>
      </section>
    </main>
  );
}
