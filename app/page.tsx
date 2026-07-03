import type { CSSProperties } from "react";

export default function Page() {
  return (
    <main className="page">
      {/* HERO */}
      <header className="topbar">
        <a className="wordmark" href="#" aria-label="Dvorský — tepelná čerpadla a klimatizace">
          <span className="wordmark__name">DVORSKÝ</span>
          <span className="wordmark__sub">tepelná čerpadla · Olomouc</span>
        </a>
        <nav className="nav" aria-label="Hlavní">
          <a href="#reseni">Řešení</a>
          <a href="#duvera">O nás</a>
          <a className="nav__call" href="tel:+420777820510">777 820 510</a>
        </nav>
      </header>

      <section className="hero">
        <div className="hero__grid">
          <div className="hero__copy">
            <p className="eyebrow">Vytápíme Moravu vzduchem &amp; vodou</p>
            <h1 className="hero__title">
              Teplo, které<br />
              <span className="hero__accent">berete ze&nbsp;vzduchu.</span>
            </h1>
            <p className="hero__lead">
              Dodáváme a montujeme tepelná čerpadla a klimatizace Mitsubishi
              po&nbsp;celé Moravě i&nbsp;Slezsku. Od&nbsp;nezávazné kalkulace přes
              montáž až po&nbsp;revizní zprávu — jeden tým, jedno telefonní číslo.
            </p>
            <div className="hero__cta">
              <a className="btn btn--solid" href="tel:+420777820510">Zavolat Milanovi</a>
              <a className="btn btn--ghost" href="#reseni">Prohlédnout řešení</a>
            </div>

            {/* Signature: teplotní gradient — sání z venku do topení */}
            <div className="tempscale" aria-hidden="true">
              <span className="tempscale__tick"><em>−15&nbsp;°C</em><span>venkovní vzduch</span></span>
              <span className="tempscale__tick"><em>+7&nbsp;°C</em><span>i&nbsp;v&nbsp;mrazu topí</span></span>
              <span className="tempscale__tick"><em>+55&nbsp;°C</em><span>voda v&nbsp;topení</span></span>
            </div>
          </div>

          <figure className="hero__media">
            <img
              src="/hero.webp"
              alt="Venkovní jednotka tepelného čerpadla Mitsubishi u fasády rodinného domu"
              className="hero__img"
              width={900}
              height={1100}
            />
            <figcaption className="hero__badge">
              <strong>Zubadan Inverter</strong>
              <span>plný výkon i&nbsp;při&nbsp;−15&nbsp;°C</span>
            </figcaption>
          </figure>
        </div>
      </section>

      {/* SEKCE 1 — ŘEŠENÍ */}
      <section id="reseni" className="solutions">
        <div className="section__head">
          <p className="eyebrow eyebrow--dark">Co pro vás namontujeme</p>
          <h2 className="section__title">Tři cesty, jak dostat teplo tam, kam potřebujete</h2>
        </div>

        <div className="cards">
          <article className="card">
            <span className="card__code">01 · vzduch–voda</span>
            <h3 className="card__title">Vytápění celého domu</h3>
            <p className="card__text">
              Tepelná čerpadla Mitsubishi Power Inverter a&nbsp;Zubadan.
              Napojíme je na&nbsp;radiátory i&nbsp;podlahovku a&nbsp;postaráme se
              i&nbsp;o&nbsp;teplou vodu. Topí spolehlivě i&nbsp;v&nbsp;moravských mrazech.
            </p>
            <ul className="card__list">
              <li>Návrh výkonu na&nbsp;míru domu</li>
              <li>Kompletní instalace i&nbsp;revizní zpráva</li>
            </ul>
          </article>

          <article className="card">
            <span className="card__code">02 · vzduch–vzduch</span>
            <h3 className="card__title">Klimatizace, co i&nbsp;topí</h3>
            <p className="card__text">
              Nástěnné jednotky řady Diamond (MSZ-LN) a&nbsp;MSZ-AP
              s&nbsp;chladivem R32. Třída&nbsp;A+++ v&nbsp;chlazení, tichý provoz
              už od&nbsp;19&nbsp;dB. V&nbsp;létě chladí, na&nbsp;jaře přitopí.
            </p>
            <ul className="card__list">
              <li>Reálné předvedení v&nbsp;Olomouci</li>
              <li>Chladivo R32 — šetrnější k&nbsp;přírodě</li>
            </ul>
          </article>

          <article className="card">
            <span className="card__code">03 · rekuperace</span>
            <h3 className="card__title">Čerstvý vzduch bez&nbsp;úniku tepla</h3>
            <p className="card__text">
              Nástěnné větrací jednotky Mitsubishi s&nbsp;rekuperací.
              Vyvětrají, aniž byste vyhodili teplo oknem —
              ideál pro&nbsp;dobře zateplené domy a&nbsp;novostavby.
            </p>
            <ul className="card__list">
              <li>Zpětné získávání tepla z&nbsp;odpadního vzduchu</li>
              <li>Servis a&nbsp;pravidelná revize</li>
            </ul>
          </article>
        </div>

        <figure className="solutions__figure">
          <img
            src="/section-1.webp"
            alt="Vnitřní nástěnná klimatizační jednotka Mitsubishi v obytné místnosti"
            className="solutions__img"
            width={1200}
            height={700}
          />
        </figure>
      </section>

      {/* SEKCE 2 — DŮVĚRA / O NÁS */}
      <section id="duvera" className="trust">
        <div className="trust__grid">
          <figure className="trust__media">
            <img
              src="/section-2.webp"
              alt="Milan Dvorský při montáži venkovní jednotky tepelného čerpadla"
              className="trust__img"
              width={800}
              height={900}
            />
          </figure>

          <div className="trust__copy">
            <p className="eyebrow eyebrow--dark">Firma s&nbsp;jménem na&nbsp;zvonku</p>
            <h2 className="section__title">U&nbsp;nás víte, kdo vám čerpadlo montuje</h2>
            <p className="trust__lead">
              Jsme rodinná firma ze&nbsp;Skrbeně u&nbsp;Olomouce. Elektro,
              klimatizace a&nbsp;čerpadla vede Milan Dvorský, vodoinstalace
              a&nbsp;topení Pavel Dvorský. Přijedeme na&nbsp;nezávaznou
              a&nbsp;bezplatnou konzultaci, spočítáme kalkulaci
              a&nbsp;zařízení vám reálně předvedeme.
            </p>

            <dl className="facts">
              <div className="fact">
                <dt>Značka</dt>
                <dd>Výhradně Mitsubishi Electric</dd>
              </div>
              <div className="fact">
                <dt>Působnost</dt>
                <dd>Celá Morava i&nbsp;Slezsko</dd>
              </div>
              <div className="fact">
                <dt>Předvedení</dt>
                <dd>Provozovna Olomouc, po&nbsp;domluvě</dd>
              </div>
            </dl>

            <div className="contacts">
              <a className="contact" href="tel:+420777820510">
                <span className="contact__role">Milan Dvorský — čerpadla &amp; klima</span>
                <span className="contact__num">+420 777 820 510</span>
              </a>
              <a className="contact" href="tel:+420608771179">
                <span className="contact__role">Pavel Dvorský — voda &amp; topení</span>
                <span className="contact__num">+420 608 771 179</span>
              </a>
            </div>

            <div className="branches">
              <address className="branch">
                <strong>Provozovna Olomouc</strong>
                Nová Čtvrť&nbsp;2, 783&nbsp;35 Skrbeň
              </address>
              <address className="branch">
                <strong>Provozovna Šumperk</strong>
                Čajkovského&nbsp;14, 787&nbsp;01 Šumperk
              </address>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

// keeps the CSSProperties import meaningful without unused-var noise
export const dynamic = "force-static";
void ({} as CSSProperties);
