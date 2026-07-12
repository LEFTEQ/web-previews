import React from "react";

export default function Page() {
  return (
    <main className="ex">
      {/* HERO — the miter joint: two lengths of moulding meeting at 45° */}
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-frame">
          <div className="hero-media">
            <img
              src="/hero.webp"
              alt="Detail hliníkového rámečku s přesně sříznutým rohem v úhlu 45 stupňů"
              className="hero-img"
              width={1600}
              height={1100}
            />
            <span className="miter-line" aria-hidden="true" />
          </div>

          <div className="hero-copy">
            <p className="eyebrow">Rámařství · Chodov u Karlových Var</p>
            <h1 id="hero-title" className="wordmark">
              <span className="wordmark-main">Exiram</span>
              <span className="wordmark-sub">rám kolem toho,<br />na čem vám záleží</span>
            </h1>
            <p className="lede">
              Hliníkové, dřevěné i plastové rámečky, plakáty a pasparty.
              Řežeme lištu na míru pod přesným úhlem 45° a skládáme roh,
              který drží léta &mdash; od formátu A4 po velký obraz.
            </p>
            <div className="hero-actions">
              <a className="btn btn-primary" href="#nabidka">Prohlédnout rámečky</a>
              <a className="btn btn-ghost" href="mailto:info@exiram.cz">Napsat na míru</a>
            </div>
            <dl className="hero-facts">
              <div>
                <dt>Profil lišty</dt>
                <dd>9,6&nbsp;mm zepředu</dd>
              </div>
              <div>
                <dt>Skladem</dt>
                <dd>&gt;&nbsp;10&nbsp;ks běžných rozměrů</dd>
              </div>
              <div>
                <dt>Roh</dt>
                <dd>řez 45°, spoj natvrdo</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      {/* SEKCE 1 — NABÍDKA po materiálech */}
      <section className="offer" id="nabidka" aria-labelledby="offer-title">
        <header className="section-head">
          <p className="eyebrow eyebrow-dark">Co u nás vyberete</p>
          <h2 id="offer-title">Tři materiály lišty, jeden poctivý roh</h2>
          <p className="section-sub">
            Rozměr v nabídce je vnitřní světlost rámu &mdash; skutečný obrys je o profil větší.
            Vybíráme podle toho, co do rámu přijde.
          </p>
        </header>

        <div className="offer-grid">
          <article className="card">
            <span className="card-code">Hliník</span>
            <h3>Hliníkové rámečky</h3>
            <p>
              Tenký matný i lesklý profil ve stříbrné, zlaté, černé a modré.
              Formát A4 i klasické rozměry AS, zasklení plexisklem.
            </p>
            <ul className="spec">
              <li>Matný stříbrný · <strong>od 248 Kč</strong></li>
              <li>Lesklý zlatý · <strong>od 209 Kč</strong></li>
              <li>A4 21×29,7 · <strong>211 Kč</strong></li>
            </ul>
          </article>

          <article className="card">
            <span className="card-code">Dřevo</span>
            <h3>Dřevěné rámečky</h3>
            <p>
              Teplý profil pro fotky a grafiky, kde má být rám vidět.
              Lišta HK 18&nbsp;mm a subtilnější H1F 12&nbsp;mm.
            </p>
            <ul className="spec">
              <li>Profil HK · <strong>18 mm</strong></li>
              <li>Profil H1F · <strong>12 mm</strong></li>
              <li>Doprodej řad · <strong>za méně</strong></li>
            </ul>
          </article>

          <article className="card">
            <span className="card-code">Plast</span>
            <h3>Plastové rámečky</h3>
            <p>
              Lehká a levná varianta na plakáty a rychlé zarámování.
              Ve výprodejových řadách za zvýhodněnou cenu.
            </p>
            <ul className="spec">
              <li>Plakátové formáty · <strong>ano</strong></li>
              <li>Výprodej · <strong>−14 %</strong></li>
              <li>Zasklení · <strong>plexisklo</strong></li>
            </ul>
          </article>
        </div>

        <div className="offer-extra">
          <img
            src="/section-1.webp"
            alt="Vyskládané rámové lišty a hotové rámečky připravené k odběru"
            className="offer-img"
            width={1400}
            height={900}
            loading="lazy"
          />
          <div className="offer-note">
            <h3>Plakáty a pasparty k tomu</h3>
            <p>
              K rámu doděláme pasparty na míru výřezu i tištěné plakáty &mdash;
              aby obraz v rámu seděl přesně a měl kolem sebe klid.
            </p>
            <a className="link-arrow" href="mailto:info@exiram.cz">Poradit s rozměrem →</a>
          </div>
        </div>
      </section>

      {/* SEKCE 2 — DŮVĚRA */}
      <section className="trust" aria-labelledby="trust-title">
        <div className="trust-inner">
          <div className="trust-media">
            <img
              src="/section-2.webp"
              alt="Rámařská dílna Exiram v Chodově u Karlových Var"
              className="trust-img"
              width={1200}
              height={1400}
              loading="lazy"
            />
          </div>
          <div className="trust-copy">
            <p className="eyebrow">Kdo za rámem stojí</p>
            <h2 id="trust-title">Rámujeme z Hrnčířské v Chodově</h2>
            <p className="trust-lede">
              Exiram je malá rámařská dílna a obchod. Běžné rozměry máme skladem
              a odešleme hned, atypické řežeme a skládáme na zakázku.
              Za cenu se nestydíme &mdash; u položek počítáme i variantu bez DPH.
            </p>
            <ul className="trust-list">
              <li>
                <span className="tl-k">Kde</span>
                <span className="tl-v">Hrnčířská 1080, 357 35 Chodov u Karlových Var</span>
              </li>
              <li>
                <span className="tl-k">E-mail</span>
                <span className="tl-v"><a href="mailto:info@exiram.cz">info@exiram.cz</a></span>
              </li>
              <li>
                <span className="tl-k">Platba</span>
                <span className="tl-v">Online i běžné způsoby, ceny s DPH i bez</span>
              </li>
              <li>
                <span className="tl-k">Sklad</span>
                <span className="tl-v">Oblíbené hliníkové rámečky &gt; 10 ks</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
