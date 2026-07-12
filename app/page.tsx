import React from "react";

export default function Page() {
  return (
    <main className="iss">
      {/* HERO — postaveno na tom nejcharakterističtějším: střecha, panely, produkce */}
      <header className="iss-top">
        <div className="iss-wordmark" aria-label="ISTA Solar">
          <span className="iss-wm-ista">ISTA</span>
          <span className="iss-wm-sun" aria-hidden="true" />
          <span className="iss-wm-solar">SOLAR</span>
        </div>
        <nav className="iss-nav" aria-label="Hlavní navigace">
          <a href="#reseni">Řešení</a>
          <a href="#postup">Jak to probíhá</a>
          <a href="tel:+420720978868" className="iss-nav-phone">720 978 868</a>
        </nav>
      </header>

      <section className="iss-hero">
        <div className="iss-hero-copy">
          <p className="iss-eyebrow">Rodinná firma z Lovosic · od roku 2019</p>
          <h1 className="iss-h1">
            Střecha, která<br />
            <span className="iss-h1-accent">vydělává</span> místo aby<br />
            jen chránila.
          </h1>
          <p className="iss-lede">
            Navrhneme, dodáme a nainstalujeme fotovoltaiku na míru vašemu domu,
            firmě i bytovému domu. Vyřídíme dotaci, postavíme vlastním týmem —
            obvykle za 2 až 4 dny.
          </p>
          <div className="iss-hero-cta">
            <a href="#reseni" className="iss-btn iss-btn-primary">Chci nezávaznou kalkulaci</a>
            <a href="tel:+420720978868" className="iss-btn iss-btn-ghost">Zavolat</a>
          </div>

          {/* Signature: měřicí lišta jako na wattmetru — čte reálná data firmy */}
          <dl className="iss-meter" aria-label="Čísla firmy v kostce">
            <div className="iss-meter-cell">
              <dt>Realizací na domech</dt>
              <dd>400<span>+</span></dd>
            </div>
            <div className="iss-meter-cell">
              <dt>Firemních instalací</dt>
              <dd>20<span>+</span></dd>
            </div>
            <div className="iss-meter-cell">
              <dt>Účinnost panelů až</dt>
              <dd>23,6<span>%</span></dd>
            </div>
            <div className="iss-meter-cell">
              <dt>Montáž obvykle za</dt>
              <dd>2–4<span>dny</span></dd>
            </div>
          </dl>
        </div>

        <figure className="iss-hero-media">
          <img
            src="/hero.webp"
            alt="Fotovoltaické panely instalované na střeše rodinného domu od ISTA Solar"
            className="iss-hero-img"
          />
          <figcaption className="iss-hero-tag">
            <span className="iss-hero-tag-dot" aria-hidden="true" />
            Evropské systémy · celočerné panely
          </figcaption>
        </figure>
      </section>

      {/* SEKCE 1 — Řešení / nabídka podle typu objektu a technologie */}
      <section id="reseni" className="iss-section">
        <div className="iss-section-head">
          <p className="iss-eyebrow">Řešení na míru</p>
          <h2 className="iss-h2">Pro každou střechu jiný recept</h2>
          <p className="iss-section-sub">
            Nenabízíme jen jednu technologii. Díky tomu vám poradíme objektivně —
            a upřednostňujeme prověřené evropské systémy.
          </p>
        </div>

        <div className="iss-grid">
          <article className="iss-card">
            <span className="iss-card-kind">🏠 Rodinné domy</span>
            <h3>Celočerné panely, které střecha hrdě ponese</h3>
            <p>
              Elegantní panely s účinností až 23,6 %. Systém navrhneme tak, aby
              odpovídal vaší spotřebě i za pár let — včetně možnosti rozšíření.
            </p>
          </article>

          <article className="iss-card">
            <span className="iss-card-kind">🏢 Firmy a haly</span>
            <h3>Výkon tam, kde se energie počítá</h3>
            <p>
              Přes 20 firemních realizací. Řešení pro asymetrický provoz i větší
              odběry, kombinovaná se střídači Fronius či SolarEdge.
            </p>
          </article>

          <article className="iss-card">
            <span className="iss-card-kind">🏬 Bytové domy a SVJ</span>
            <h3>Sdílená elektrárna pro celý dům</h3>
            <p>
              Kompletní návrh i administrativa pro společenství vlastníků — od
              dokumentace přes dotaci až po připojení k distribuční síti.
            </p>
          </article>

          <article className="iss-card iss-card-wide">
            <img
              src="/section-1.webp"
              alt="Detail fotovoltaické instalace a technologie ISTA Solar"
              className="iss-card-img"
            />
            <div className="iss-card-wide-copy">
              <span className="iss-card-kind">🔧 Revize &amp; servis</span>
              <h3>Pečujeme o vás i po instalaci</h3>
              <p>
                Většinu komponentů máme na vlastních skladech, takže vás nebrzdí
                dodací lhůty. Děláme pravidelné revize a jsme tu, kdyby bylo potřeba
                zasáhnout.
              </p>
            </div>
          </article>
        </div>
      </section>

      {/* SEKCE 2 — Postup (opravdová sekvence, tedy číslujeme) + důvěra */}
      <section id="postup" className="iss-section iss-section-alt">
        <div className="iss-two">
          <div className="iss-two-copy">
            <p className="iss-eyebrow">Jak to u nás probíhá</p>
            <h2 className="iss-h2">Od prvního hovoru po zapojení do sítě</h2>
            <p className="iss-section-sub">
              Byli jsme tu před solárním boomem a zůstali i po něm. Celou cestu
              vede náš vlastní tým — od návrhu až po revizi.
            </p>

            <ol className="iss-steps">
              <li>
                <span className="iss-step-num">01</span>
                <div>
                  <h4>Poradíme</h4>
                  <p>Probereme vaši spotřebu a možnosti a najdeme řešení pro dům, firmu i SVJ.</p>
                </div>
              </li>
              <li>
                <span className="iss-step-num">02</span>
                <div>
                  <h4>Připravíme řešení</h4>
                  <p>Navrhneme systém na míru pro maximální úspory a odhadneme návratnost.</p>
                </div>
              </li>
              <li>
                <span className="iss-step-num">03</span>
                <div>
                  <h4>Vyřídíme formality</h4>
                  <p>Žádost o dotaci, povolení i připojení k distribuční síti bereme na sebe.</p>
                </div>
              </li>
              <li>
                <span className="iss-step-num">04</span>
                <div>
                  <h4>Dodáme a nainstalujeme</h4>
                  <p>Namontujeme, provedeme revize a zajistíme bezproblémový provoz.</p>
                </div>
              </li>
            </ol>
          </div>

          <figure className="iss-two-media">
            <img
              src="/section-2.webp"
              alt="Tým ISTA Solar při montáži fotovoltaické elektrárny"
              className="iss-two-img"
            />
            <figcaption className="iss-trust">
              <p className="iss-trust-quote">
                „U nás nečekejte univerzální řešení. Každou instalaci
                přizpůsobíme vašim potřebám i budoucím plánům.“
              </p>
              <p className="iss-trust-by">Rodinná firma z Lovosic · Osvoboditelů 1069/16</p>
            </figcaption>
          </figure>
        </div>
      </section>
    </main>
  );
}
