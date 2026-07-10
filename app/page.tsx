import type { CSSProperties } from "react";

export default function Page() {
  const ticks = Array.from({ length: 12 });
  return (
    <main>
      {/* ── kontaktní lišta ── */}
      <div className="topbar">
        <div className="wrap">
          <span><span className="dot">●</span> Betonáže &amp; monolity — Pardubice</span>
          <a className="grow" href="tel:+420466000000">Zavolat na stavbu&nbsp;→ 466&nbsp;00&nbsp;00&nbsp;00</a>
        </div>
      </div>

      {/* ── wordmark ── */}
      <div className="wrap">
        <div className="mark">
          <span className="logo">ING<b>BAU</b> CZ</span>
          <span className="est">Beton od r. 2000 · NBÚ „Důvěrné“</span>
        </div>
      </div>
      <div className="wrap"><div className="pourbar" /></div>

      {/* ── HERO ── */}
      <header className="hero">
        <div className="wrap">
          <div className="hero-grid">
            <div className="hero-copy">
              <p className="hero-eyebrow reveal">C 25/30 · XC4 · S3 — třídy, se kterými děláme</p>
              <h1 className="hero-title reveal d1">
                Lijeme beton,<br />
                na kterém <span className="pour">stojí</span><br />
                celá stavba.
              </h1>
              <p className="hero-lede reveal d2">
                Monolitické konstrukce, průmyslové podlahy a stříkané betony
                z úrovně <em>generálního zhotovitele</em>. Od bednění po zahlazení —
                v termínu a podle ČSN.
              </p>
              <div className="hero-cta reveal d3">
                <a className="btn btn-primary" href="tel:+420466000000">Zavolat na stavbu</a>
                <a className="btn btn-ghost" href="#divize">Co betonujeme</a>
              </div>
            </div>
            <div className="hero-media">
              <div className="gauge" aria-hidden="true">
                {ticks.map((_, i) => (
                  <span key={i} style={{ top: `${(i / 11) * 100}%` } as CSSProperties} />
                ))}
              </div>
              <img
                src="/hero.webp"
                alt="Čerstvě ukládaný beton do bednění na stavbě v Pardubicích"
              />
            </div>
          </div>
        </div>
      </header>

      {/* ── spec strip ── */}
      <div className="specs">
        <div className="wrap">
          <div className="spec"><div className="k">Na trhu</div><div className="v">od roku 2000</div></div>
          <div className="spec"><div className="k">Divize</div><div className="v">3 betonářské</div></div>
          <div className="spec"><div className="k">Působnost</div><div className="v">Pardubicko + ČR</div></div>
          <div className="spec"><div className="k">Systémy řízení</div><div className="v">ISO 9001 · 14001 · 45001</div></div>
        </div>
      </div>

      {/* ── SEKCE 1: DIVIZE ── */}
      <section id="divize">
        <div className="wrap">
          <div className="sec-head">
            <span className="sec-num">/ 01</span>
            <div>
              <p className="sec-kicker">Tři betonářské divize pod jednou střechou</p>
              <h2 className="sec-title">Co u nás<br />naléváme</h2>
            </div>
          </div>

          <div className="divs">
            <article className="divcard">
              <span className="no">D—01</span>
              <h3>Monolitické konstrukce</h3>
              <p>Stropy, sloupy, stěny i základové desky v pohledovém i běžném
                betonu. Kompletní bednění, armování a betonáž z jedné ruky.</p>
              <ul>
                <li>Základové a bílé vany</li>
                <li>Pohledový beton</li>
                <li>Prefa i monolit na míru</li>
              </ul>
            </article>
            <article className="divcard">
              <span className="no">D—02</span>
              <h3>Průmyslové podlahy &amp; stříkané betony</h3>
              <p>Vsypové a leštěné podlahy pro haly a sklady, torkretování
                a sanace. Rovinnost podle normy, dilatace tam, kde mají být.</p>
              <ul>
                <li>Drátkobeton &amp; vsyp</li>
                <li>Stříkaný beton (torkret)</li>
                <li>Broušení a vyspravení</li>
              </ul>
            </article>
            <article className="divcard">
              <span className="no">D—03</span>
              <h3>Hlavní stavební výroba</h3>
              <p>Generální dodávka stavby od výkopu po předání. Vlastní areály
                se zázemím v Pardubickém, Královéhradeckém a Středočeském kraji.</p>
              <ul>
                <li>Generální zhotovitel</li>
                <li>Koordinace profesí</li>
                <li>Investorská příprava</li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      {/* ── SEKCE 2: O NÁS / DŮVĚRA ── */}
      <section className="about">
        <div className="wrap">
          <div className="sec-head">
            <span className="sec-num">/ 02</span>
            <div>
              <p className="sec-kicker">Ryze česká firma, stejné vedení od začátku</p>
              <h2 className="sec-title">Lidé, kteří<br />už stavěli velké</h2>
            </div>
          </div>

          <div className="about-grid">
            <div className="about-media">
              <img
                src="/section-1.webp"
                alt="Realizace betonové konstrukce firmou INGBAU CZ"
              />
              <span className="tag">STAVBA · PARDUBICKO</span>
            </div>
            <div>
              <p>
                <span className="lead">INGBAU CZ je soukromá česká společnost,
                kterou od roku 2000 vedou titíž dva lidé.</span>
              </p>
              <p>
                Vlastníci i lidé na stavbě dřív prošli vedením velkých stavebních
                firem a přípravou významných staveb v ČR. Betonu tak rozumíme
                z obou stran — z projektu i z lešení.
              </p>
              <p>
                Od jara 2003 je firma prověřena Národním bezpečnostním úřadem na
                stupeň utajení <strong style={{ color: "#f2f0eb" }}>„Důvěrné“</strong>,
                takže zvládneme i citlivé zakázky.
              </p>

              <div className="certs">
                <div className="cert"><div className="n">ČSN EN ISO 9001:2015</div><div className="d">Systém řízení jakosti</div></div>
                <div className="cert"><div className="n">ČSN EN ISO 14001:2015</div><div className="d">Environmentální management</div></div>
                <div className="cert"><div className="n">ČSN EN ISO 45001:2018</div><div className="d">Bezpečnost a ochrana zdraví</div></div>
                <div className="cert"><div className="n">NBÚ · „Důvěrné“</div><div className="d">Prověření od roku 2003</div></div>
              </div>

              <p className="motto">„Jsme tu pro Vás.“</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
