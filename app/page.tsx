import type { CSSProperties } from "react";

export default function Page() {
  return (
    <main className="page">
      {/* ============ HERO ============ */}
      <header className="hero">
        <nav className="nav" aria-label="Hlavní navigace">
          <a className="wordmark" href="#top" aria-label="Chelys — solární instalace Liberec">
            <span className="wordmark__sun" aria-hidden="true" />
            <span className="wordmark__name">Chelys</span>
            <span className="wordmark__ext">solár</span>
          </a>
          <ul className="nav__links">
            <li><a href="#reseni">Řešení</a></li>
            <li><a href="#duvera">Reference</a></li>
            <li><a href="#poptavka" className="nav__cta">Nezávazná kalkulace</a></li>
          </ul>
        </nav>

        <div className="hero__grid" id="top">
          <div className="hero__copy">
            <p className="eyebrow">Fotovoltaika &amp; tepelná čerpadla · Liberec a Jablonecko</p>
            <h1 className="hero__title">
              Střecha, která<br />
              <span className="hero__title-em">vydělává za vás.</span>
            </h1>
            <p className="hero__lead">
              Navrhneme a nainstalujeme solární elektrárnu na míru vaší střeše — od
              první prohlídky po připojení k síti. Postaráme se i o dotaci Nová
              zelená úsporám a vyřízení s ČEZ Distribucí.
            </p>
            <div className="hero__actions">
              <a href="#poptavka" className="btn btn--solid">Chci kalkulaci zdarma</a>
              <a href="#reseni" className="btn btn--ghost">Jak to probíhá</a>
            </div>

            {/* Signature: měřák výkonu jako by tekl proud ze střechy */}
            <dl className="meter" aria-label="Co typická instalace přinese">
              <div className="meter__cell">
                <dt>Špičkový výkon</dt>
                <dd>7,2 <span>kWp</span></dd>
              </div>
              <div className="meter__cell">
                <dt>Baterie</dt>
                <dd>11,6 <span>kWh</span></dd>
              </div>
              <div className="meter__cell">
                <dt>Úspora ročně</dt>
                <dd>~32 <span>tis. Kč</span></dd>
              </div>
            </dl>
          </div>

          <figure className="hero__media">
            <img
              src="/hero.webp"
              alt="Fotovoltaické panely na střeše rodinného domu pod horským obzorem Liberecka"
              className="hero__img"
              width={1200}
              height={1500}
            />
            <figcaption className="hero__badge">
              <span className="hero__badge-dot" aria-hidden="true" />
              Panely právě dodávají do baterie
            </figcaption>
          </figure>
        </div>
      </header>

      {/* ============ SEKCE 1 — ŘEŠENÍ ============ */}
      <section className="solutions" id="reseni" aria-labelledby="reseni-nadpis">
        <div className="section-head">
          <p className="eyebrow eyebrow--dark">Od nabídky po první vyrobenou kilowatthodinu</p>
          <h2 id="reseni-nadpis" className="section-title">
            Čtyři kroky ke světlu z vlastní střechy
          </h2>
        </div>

        <ol className="steps">
          <li className="step">
            <span className="step__num">01</span>
            <h3>Prohlídka a výpočet</h3>
            <p>
              Přijedeme, změříme sklon a orientaci střechy, zkontrolujeme rozvaděč
              a spotřebu. Do tří dnů máte návrh počtu panelů i odhad výroby po měsících.
            </p>
          </li>
          <li className="step">
            <span className="step__num">02</span>
            <h3>Projekt a dotace</h3>
            <p>
              Vyřídíme žádost o Novou zelenou úsporám a připojení k ČEZ Distribuci.
              Papírování bereme na sebe — vy jen podepíšete.
            </p>
          </li>
          <li className="step">
            <span className="step__num">03</span>
            <h3>Montáž za pár dní</h3>
            <p>
              Vlastní parta montérů z Liberce. Panely, střídač i baterii
              nainstalujeme obvykle za dva až tři dny, bez subdodavatelů.
            </p>
          </li>
          <li className="step">
            <span className="step__num">04</span>
            <h3>Spuštění a servis</h3>
            <p>
              Nastavíme optimalizaci spotřeby a ukážeme aplikaci k sledování výroby.
              Servis a revize máte na dosah — jsme z kraje, ne z druhého konce republiky.
            </p>
          </li>
        </ol>

        <div className="solutions__media">
          <img
            src="/section-1.webp"
            alt="Montér Chelys upevňuje solární panel na hliníkovou konstrukci střechy"
            className="framed-img"
            width={1200}
            height={800}
          />
          <aside className="solutions__note">
            <h3>K panelům přidáme i tepelné čerpadlo</h3>
            <p>
              Solár nejlépe funguje, když je čím topit. Navrhneme kombinaci
              fotovoltaiky a tepelného čerpadla tak, aby vyrobená energie ohřívala
              i vodu a dům — stejně jako jsme to udělali v areálu v Hrnčířské ulici.
            </p>
          </aside>
        </div>
      </section>

      {/* ============ SEKCE 2 — DŮVĚRA ============ */}
      <section className="trust" id="duvera" aria-labelledby="duvera-nadpis">
        <div className="trust__grid">
          <figure className="trust__media">
            <img
              src="/section-2.webp"
              alt="Dokončená fotovoltaická instalace Chelys na střeše objektu na Liberecku"
              className="framed-img"
              width={1200}
              height={900}
            />
          </figure>

          <div className="trust__copy">
            <p className="eyebrow eyebrow--dark">Proč lidé z kraje volají právě nám</p>
            <h2 id="duvera-nadpis" className="section-title">
              Solární firma z Liberce, ne callcentrum odjinud
            </h2>
            <p className="trust__lead">
              Chelys s.r.o. staví elektrárny na Liberecku a Jablonecku. Známe zdejší
              střechy, zimy i to, co dělá vysoký sníh se sklonem panelů. Za instalaci
              ručíme sami — od šroubu po revizní zprávu.
            </p>

            <ul className="facts">
              <li>
                <strong>Vlastní montážní tým</strong>
                Žádní přeprodejci ani anonymní subdodávka.
              </li>
              <li>
                <strong>Dotaci vyřídíme za vás</strong>
                Nová zelená úsporám i připojení k distribuci.
              </li>
              <li>
                <strong>Zkušenost s energetikou budov</strong>
                Realizujeme i úsporná opatření s využitím OZE pro firmy.
              </li>
            </ul>

            <blockquote className="quote">
              <p>
                „Panely i tepelné čerpadlo běží od zimy bez jediného problému.
                Účet za elektřinu spadl na třetinu.“
              </p>
              <cite>— majitel rodinného domu, Liberec-Vratislavice</cite>
            </blockquote>
          </div>
        </div>
      </section>
    </main>
  );
}
