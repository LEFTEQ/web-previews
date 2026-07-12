import React from "react";

export default function Page() {
  return (
    <main className="ml">
      {/* ============ HERO ============ */}
      <header className="ml-topbar">
        <a className="ml-wordmark" href="#" aria-label="Maximal Limit — soukromé fitness">
          <span className="ml-wordmark-max">MAXIMAL</span>
          <span className="ml-wordmark-limit">LIMIT</span>
        </a>
        <nav className="ml-nav" aria-label="Hlavní navigace">
          <a href="#jak-to-funguje">Jak to funguje</a>
          <a href="#vybaveni">Vybavení</a>
          <a href="#cenik">Ceník</a>
        </nav>
        <div className="ml-topbar-status" aria-hidden="true">
          <span className="ml-dot" />
          Otevřeno teď
        </div>
      </header>

      <section className="ml-hero" aria-labelledby="hero-nadpis">
        <div className="ml-hero-media">
          <img
            src="/hero.webp"
            alt="Interiér samoobslužného fitness Maximal Limit v Českých Budějovicích"
            className="ml-hero-img"
            width={1600}
            height={1200}
          />
          <div className="ml-hero-shade" aria-hidden="true" />
        </div>

        <div className="ml-hero-inner">
          <p className="ml-eyebrow">Soukromé samoobslužné fitness · České Budějovice</p>
          <h1 id="hero-nadpis" className="ml-hero-title">
            Otevřeno<br />
            <span className="ml-clock">24</span>
            <span className="ml-slash">/</span>
            <span className="ml-clock">7</span>
          </h1>
          <p className="ml-hero-lead">
            Přijď v sedm ráno i v půl třetí v noci. Odemkneš čipem, jsi tam sám —
            nebo jen s tím, koho si vezmeš. Žádné fronty na činky, žádný trenér,
            který ti kouká přes rameno. Tvoje fitko, tvoje pravidla.
          </p>
          <div className="ml-hero-actions">
            <a className="ml-btn ml-btn-primary" href="#cenik">Rezervovat vstup</a>
            <a className="ml-btn ml-btn-ghost" href="#jak-to-funguje">Jak se dostanu dovnitř</a>
          </div>

          <dl className="ml-hero-facts">
            <div>
              <dt>Soukromí</dt>
              <dd>100&nbsp;%</dd>
            </div>
            <div>
              <dt>Pobočky</dt>
              <dd>Budějovice · Týn · Tábor</dd>
            </div>
            <div>
              <dt>Vstup</dt>
              <dd>od 220&nbsp;Kč</dd>
            </div>
          </dl>
        </div>
      </section>

      {/* ============ SEKCE 1 — JAK TO FUNGUJE ============ */}
      <section className="ml-how" id="jak-to-funguje" aria-labelledby="how-nadpis">
        <div className="ml-section-head">
          <p className="ml-section-kicker">Cesta dovnitř</p>
          <h2 id="how-nadpis">Tři kroky a trénuješ</h2>
        </div>

        <ol className="ml-steps">
          <li className="ml-step">
            <span className="ml-step-num">01</span>
            <h3>Zaregistruješ se</h3>
            <p>
              Vyplníš údaje online a dostaneš vlastní vstupní čip. K předplatnému
              i ročnímu tarifu je zdarma, jednorázově stojí 100&nbsp;Kč — a je jen tvůj.
            </p>
          </li>
          <li className="ml-step">
            <span className="ml-step-num">02</span>
            <h3>Rezervuješ čas</h3>
            <p>
              V aplikaci si vybereš pobočku a hodinu, kdy chceš přijít. Vidíš,
              jestli tam někdo je. Chceš být úplně sám? Klidně ve tři ráno.
            </p>
          </li>
          <li className="ml-step">
            <span className="ml-step-num">03</span>
            <h3>Odemkneš a jdeš na to</h3>
            <p>
              Přiložíš čip, dveře se otevřou, rozsvítíš si, pustíš svou hudbu
              a nastavíš klimatizaci. Ručník už na tebe čeká uvnitř.
            </p>
          </li>
        </ol>

        <div className="ml-how-media">
          <img
            src="/section-1.webp"
            alt="Vstupní čip a samoobslužný přístup do fitness Maximal Limit"
            className="ml-media-img"
            width={1200}
            height={800}
          />
          <p className="ml-how-note">
            <strong>Bez recepce, bez otevírací doby.</strong> Čip funguje na
            všech pobočkách — v Českých Budějovicích, Týně nad Vltavou i v Táboře.
          </p>
        </div>
      </section>

      {/* ============ SEKCE 2 — VYBAVENÍ + CENÍK ============ */}
      <section className="ml-gym" id="vybaveni" aria-labelledby="gym-nadpis">
        <div className="ml-gym-media">
          <img
            src="/section-2.webp"
            alt="Profesionální posilovací vybavení ve fitness Maximal Limit"
            className="ml-media-img"
            width={1200}
            height={800}
          />
        </div>
        <div className="ml-gym-copy">
          <p className="ml-section-kicker">Co uvnitř najdeš</p>
          <h2 id="gym-nadpis">Malé fitko, plná výbava</h2>
          <p className="ml-gym-lead">
            Žádná tělocvična velká jako hala, kde ztratíš půl hodiny hledáním
            volného stroje. Kompaktní prostor s profesionálním vybavením pro
            náročný trénink — a všechno máš jen pro sebe.
          </p>
          <ul className="ml-amenities">
            <li>WiFi zdarma, bez limitů</li>
            <li>Vlastní hudba přes reproduktory</li>
            <li>Klimatizace, kterou si nastavíš sám</li>
            <li>Ručník v ceně každého vstupu</li>
            <li>Samoobslužné občerstvení</li>
            <li>Profesionální činky a stroje</li>
          </ul>
        </div>
      </section>

      <section className="ml-pricing" id="cenik" aria-labelledby="cenik-nadpis">
        <div className="ml-section-head ml-section-head--center">
          <p className="ml-section-kicker">Ceník</p>
          <h2 id="cenik-nadpis">Vyber si, jak často chodíš</h2>
          <p className="ml-pricing-sub">
            Platí pro pobočky České Budějovice, Týn nad Vltavou i Tábor.
          </p>
        </div>

        <div className="ml-plans">
          <article className="ml-plan">
            <p className="ml-plan-label">Jednorázově</p>
            <p className="ml-plan-price">
              220<span>Kč</span>
            </p>
            <p className="ml-plan-unit">za jeden vstup</p>
            <ul>
              <li>Neomezená WiFi a vlastní hudba</li>
              <li>Ručník v ceně</li>
              <li>Nastavení klimatizace</li>
              <li>Samoobslužné občerstvení</li>
              <li>Vlastní čip za 100&nbsp;Kč</li>
            </ul>
            <a className="ml-btn ml-btn-plan" href="#">Rezervovat vstup</a>
          </article>

          <article className="ml-plan ml-plan--featured">
            <p className="ml-plan-flag">Nejoblíbenější</p>
            <p className="ml-plan-label">Předplatné měsíčně</p>
            <p className="ml-plan-price">
              2&nbsp;220<span>Kč</span>
            </p>
            <p className="ml-plan-unit">za měsíc, neomezené vstupy</p>
            <ul>
              <li>Chodíš, kolikrát chceš</li>
              <li>WiFi, vlastní hudba, klima</li>
              <li>Ručník v ceně</li>
              <li>Samoobslužné občerstvení</li>
              <li>Vlastní čip zdarma</li>
            </ul>
            <a className="ml-btn ml-btn-primary ml-btn-plan" href="#">Založit předplatné</a>
          </article>

          <article className="ml-plan">
            <p className="ml-plan-label">Balíček 9+1</p>
            <p className="ml-plan-price">
              1&nbsp;880<span>Kč</span>
            </p>
            <p className="ml-plan-unit">10 vstupů, jeden zdarma</p>
            <ul>
              <li>Zvýhodněná cena za vstup</li>
              <li>WiFi, vlastní hudba, klima</li>
              <li>Ručník v ceně</li>
              <li>Samoobslužné občerstvení</li>
              <li>Platí bez expirace</li>
            </ul>
            <a className="ml-btn ml-btn-plan" href="#">Koupit balíček</a>
          </article>
        </div>

        <p className="ml-pricing-foot">
          Chodíš každý den? Roční tarif vyjde na <strong>22&nbsp;200&nbsp;Kč</strong> —
          neomezené vstupy a čip zdarma. Vezmeš si doprovod? Připlatíš
          <strong>&nbsp;110&nbsp;Kč</strong>.
        </p>
      </section>
    </main>
  );
}
