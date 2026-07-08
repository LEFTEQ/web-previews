import type { CSSProperties } from "react";

const services = [
  {
    reg: "01",
    name: "Ofsetový tisk",
    body: "Vysoké náklady letáků, brožur, katalogů i knih. Ostré soutisky, věrné barvy podle vzorníku a stálá kvalita od prvního po poslední arch.",
    detail: "od 500 kusů výše",
  },
  {
    reg: "02",
    name: "Digitální tisk",
    body: "Malé série a personalizace bez tiskové formy. Vizitky, pozvánky, plakáty i jednotlivé kusy — hotové klidně do druhého dne.",
    detail: "od 1 kusu",
  },
  {
    reg: "03",
    name: "Knihařské zpracování",
    body: "Skládání, ražba, laminace, V1 i V2 vazba, kroužková vazba. Výsledek, který vezmete do ruky a drží pohromadě.",
    detail: "lakování · ražba · vazba",
  },
  {
    reg: "04",
    name: "Předtisková příprava",
    body: "Zkontrolujeme data, spadávky i přetisky, doděláme sazbu a připravíme nátisk. Než se roztočí stroj, víte přesně, co dostanete.",
    detail: "nátisk · sazba · kontrola dat",
  },
];

const trust = [
  { k: "1995", v: "tiskneme v Olomouci od" },
  { k: "80 mil. Kč", v: "objem náhradního plnění ročně" },
  { k: "§ 435/2004", v: "poskytovatel náhradního plnění" },
];

export default function Page() {
  return (
    <main className="pt">
      <header className="pt-nav">
        <a className="pt-mark" href="#top" aria-label="Profi-tisk group, tiskárna Olomouc">
          <span className="pt-mark-cmyk" aria-hidden="true">
            <i style={{ "--c": "#00a7e1" } as CSSProperties} />
            <i style={{ "--c": "#e5007d" } as CSSProperties} />
            <i style={{ "--c": "#ffcb05" } as CSSProperties} />
            <i style={{ "--c": "#1a1a1a" } as CSSProperties} />
          </span>
          <span className="pt-mark-name">
            Profi&#8209;tisk <em>group</em>
          </span>
        </a>
        <nav className="pt-nav-links" aria-label="Hlavní navigace">
          <a href="#nabidka">Co tiskneme</a>
          <a href="#ofirme">O tiskárně</a>
          <a className="pt-nav-cta" href="tel:+420585436228">585&nbsp;436&nbsp;228</a>
        </nav>
      </header>

      <section className="pt-hero" id="top">
        <div className="pt-hero-grid">
          <div className="pt-hero-text">
            <p className="pt-eyebrow">Polygrafická výroba · Olomouc&#8209;Slavonín</p>
            <h1 className="pt-h1">
              Vytiskneme to<br />
              <span className="pt-h1-accent">na barvu přesně.</span>
            </h1>
            <p className="pt-lede">
              Ofset, digitál i knihárna pod jednou střechou v Slavonínské cihelně. Přinesete
              data, my se postaráme o všechno až po hotový náklad zabalený na paletě.
            </p>
            <div className="pt-hero-actions">
              <a className="pt-btn" href="tel:+420585436228">Zavolat do tiskárny</a>
              <a className="pt-btn pt-btn-ghost" href="mailto:info@profitisk.cz">
                Poslat poptávku
              </a>
            </div>
            <ul className="pt-registration" aria-label="Barevný model tisku">
              <li><span style={{ "--c": "#00a7e1" } as CSSProperties} />Cyan</li>
              <li><span style={{ "--c": "#e5007d" } as CSSProperties} />Magenta</li>
              <li><span style={{ "--c": "#ffcb05" } as CSSProperties} />Yellow</li>
              <li><span style={{ "--c": "#1a1a1a" } as CSSProperties} />Key</li>
            </ul>
          </div>
          <figure className="pt-hero-fig">
            <img
              src="/hero.webp"
              alt="Archy vyjíždějící z ofsetového tiskového stroje v tiskárně Profi-tisk"
              width={880}
              height={1040}
            />
            <figcaption>Slavonínská cihelna · Kyselovská 125</figcaption>
          </figure>
        </div>
      </section>

      <section className="pt-services" id="nabidka">
        <div className="pt-section-head">
          <h2 className="pt-h2">Celé spektrum polygrafie</h2>
          <p className="pt-section-sub">
            Od nátisku po vazbu. Čtyři kroky, které u nás zvládneme na jednom místě —
            proto se zakázka nikde neztratí ani nezdrží.
          </p>
        </div>
        <ol className="pt-service-list">
          {services.map((s) => (
            <li className="pt-service" key={s.reg}>
              <span className="pt-service-reg" aria-hidden="true">{s.reg}</span>
              <div className="pt-service-main">
                <h3>{s.name}</h3>
                <p>{s.body}</p>
              </div>
              <span className="pt-service-detail">{s.detail}</span>
            </li>
          ))}
        </ol>
      </section>

      <section className="pt-about" id="ofirme">
        <figure className="pt-about-fig">
          <img
            src="/section-1.webp"
            alt="Detail knihařského zpracování — svázané brožury připravené k expedici"
            width={760}
            height={560}
          />
        </figure>
        <div className="pt-about-text">
          <p className="pt-eyebrow">O tiskárně</p>
          <h2 className="pt-h2">
            Cesta k prosperitě vede jen přes spokojené zákazníky.
          </h2>
          <p>
            Profi&#8209;tisk group se od začátku specializuje na komplexní polygrafickou výrobu.
            Chceme, aby byl zákazník obsloužen v celém rozsahu služeb, které dnešní tiskový
            trh nabízí — a to klade nároky na techniku i na lidi, kteří u strojů stojí.
          </p>
          <p>
            Právě proto jsme roky budovali stabilní tým tiskařů a knihařů. Věříme, že i vám
            dokážeme, že se spolupráce s námi vyplatí.
          </p>
          <dl className="pt-trust">
            {trust.map((t) => (
              <div className="pt-trust-item" key={t.k}>
                <dt>{t.k}</dt>
                <dd>{t.v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="pt-contact-strip" aria-label="Kde nás najdete">
        <img
          src="/section-2.webp"
          alt="Provoz tiskárny Profi-tisk v areálu Slavonínské cihelny v Olomouci"
          width={1200}
          height={520}
        />
        <div className="pt-contact-card">
          <p className="pt-eyebrow">Přijďte se domluvit osobně</p>
          <address className="pt-address">
            Kyselovská 125 — Slavonínská cihelna<br />
            783 01 Olomouc
          </address>
          <p className="pt-contact-lines">
            <a href="tel:+420585436228">585&nbsp;436&nbsp;228</a>
            <a href="tel:+420775905717">775&nbsp;905&nbsp;717</a>
            <a href="mailto:info@profitisk.cz">info@profitisk.cz</a>
          </p>
        </div>
      </section>
    </main>
  );
}
