import React from "react";

export default function Page() {
  return (
    <main className="mw">
      {/* HERO — sklad jako sál. Charakteristické: police plné jednotek, chladicí okruh */}
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero__grid">
          <div className="hero__text">
            <p className="eyebrow"><span className="eyebrow__dot" aria-hidden="true" /> Velkoobchod pro montážní firmy · Ostrava</p>
            <h1 id="hero-title" className="hero__title">
              Sklad, ze kterého<br />
              <span className="hero__title--accent">klimatizace</span> odjíždí<br />
              ještě týž den.
            </h1>
            <p className="hero__lead">
              Microwell CZ zásobuje montážní firmy v Moravskoslezském kraji.
              Split jednotky, tepelná čerpadla, chladivo R32, měď a vakuovky —
              naskladněné, za velkoobchodní ceny, připravené k vyzvednutí.
            </p>
            <div className="hero__cta">
              <a className="btn btn--primary" href="#partner">Stát se B2B partnerem</a>
              <a className="btn btn--ghost" href="#sklad">Co je na skladě</a>
            </div>
            <dl className="hero__stats">
              <div><dt>týž den</dt><dd>expedice do 14:00</dd></div>
              <div><dt>R32 · R410A</dt><dd>chladivo skladem</dd></div>
              <div><dt>608 466 885</dt><dd>technik na telefonu</dd></div>
            </dl>
          </div>
          <div className="hero__media">
            <img className="hero__img" src="/hero.webp" alt="Regály skladu Microwell CZ v Ostravě plné klimatizačních jednotek připravených k expedici" loading="eager" />
            <div className="hero__tag" aria-hidden="true">
              <span className="hero__tag-k">sklad</span>
              <span className="hero__tag-v">Ostrava</span>
            </div>
          </div>
        </div>
      </section>

      {/* SEKCE 1 — regály / sortiment. Struktura = police A–F, protože sklad tak opravdu funguje */}
      <section className="shelf" id="sklad" aria-labelledby="shelf-title">
        <div className="section-head">
          <p className="eyebrow eyebrow--dark"><span className="eyebrow__dot" aria-hidden="true" /> Sortiment po regálech</p>
          <h2 id="shelf-title" className="section-title">Co u nás najdete naskladněné</h2>
          <p className="section-sub">Ceny se zobrazí po přihlášení do B2B účtu. Skladové zásoby držíme na hlavních značkách, abyste na zakázku nemuseli čekat.</p>
        </div>
        <ol className="shelf__list">
          <li className="shelf__row">
            <span className="shelf__code">Regál A</span>
            <div className="shelf__body">
              <h3>Split klimatizace</h3>
              <p>LG Dualcool, Midea Solunar &amp; Solstice — od 2,6 do 7,0 kW, WiFi ovládání, nástěnné jednotky pro byty i kanceláře.</p>
            </div>
            <span className="shelf__qty">EZ09–EZ24 · LUN · SOL</span>
          </li>
          <li className="shelf__row">
            <span className="shelf__code">Regál B</span>
            <div className="shelf__body">
              <h3>Multisplit sestavy</h3>
              <p>Venkovní jednotky LG a Midea do 10,55 kW pro zapojení více vnitřních jednotek na jeden okruh.</p>
            </div>
            <span className="shelf__qty">MU5R36 · M2OF-18</span>
          </li>
          <li className="shelf__row">
            <span className="shelf__code">Regál C</span>
            <div className="shelf__body">
              <h3>Tepelná čerpadla</h3>
              <p>Midea M Thermal HYGGE Split 12–16 kW (3fázové), LG pro ohřev TUV 150–200 l, kaskádové řadiče.</p>
            </div>
            <span className="shelf__qty">MHA-V12 až V16</span>
          </li>
          <li className="shelf__row">
            <span className="shelf__code">Regál D</span>
            <div className="shelf__body">
              <h3>Chladivo &amp; servisní technika</h3>
              <p>Odsávačky Refco ENVIRO DUO, rozvaděče pro R410A a R32, detektory úniku, senzory hořlavých plynů.</p>
            </div>
            <span className="shelf__qty">R32 · R410A</span>
          </li>
          <li className="shelf__row">
            <span className="shelf__code">Regál E</span>
            <div className="shelf__body">
              <h3>Montážní materiál</h3>
              <p>Flexo šňůry 3–5 m, Y kusy na kondenzát 16 mm, rohová čerpadla VAMP CDK, čisticí prostředek VerteX 5 l.</p>
            </div>
            <span className="shelf__qty">drobný materiál</span>
          </li>
          <li className="shelf__row">
            <span className="shelf__code">Regál F</span>
            <div className="shelf__body">
              <h3>Měřicí přístroje Testo</h3>
              <p>Klešťové multimetry 770-2, zkoušečky napětí 755-1, termokamera 860i pro chytré telefony.</p>
            </div>
            <span className="shelf__qty">Testo · kalibrace</span>
          </li>
        </ol>
      </section>

      {/* SEKCE 2 — proč jezdit k nám. Důvěra + obraz skladu */}
      <section className="trust" id="partner" aria-labelledby="trust-title">
        <div className="trust__grid">
          <div className="trust__media">
            <img className="trust__img" src="/section-1.webp" alt="Klimatizační jednotky připravené na paletách k rychlé expedici" loading="lazy" />
          </div>
          <div className="trust__text">
            <p className="eyebrow eyebrow--dark"><span className="eyebrow__dot" aria-hidden="true" /> Proč montážní firmy jezdí do Microwellu</p>
            <h2 id="trust-title" className="section-title">Velkoobchod, který drží slovo o skladu</h2>
            <ul className="trust__points">
              <li>
                <strong>Velkoobchodní ceny po registraci.</strong>
                Ceník vidíte až v B2B účtu — nastavený na objemy, které montážní firma reálně odebírá.
              </li>
              <li>
                <strong>Stabilní skladové zásoby.</strong>
                Hlavní kW třídy LG a Midea držíme naskladněné, takže sezonu neřešíte doobjednávkami.
              </li>
              <li>
                <strong>Expedice ještě týž den.</strong>
                Objednávka do 14:00 odchází tentýž pracovní den — na paletě, s dokladem a záruční kartou.
              </li>
              <li>
                <strong>Technik, který zvedne telefon.</strong>
                Nejste si jistí dimenzováním okruhu nebo chladivem? Zavolejte na <a href="tel:+420608466885">608 466 885</a>.
              </li>
            </ul>
            <a className="btn btn--primary" href="tel:+420608466885">Zavolat na 608 466 885</a>
          </div>
        </div>
        <div className="trust__strip">
          <img className="trust__strip-img" src="/section-2.webp" alt="Detail chladicího okruhu a instalace klimatizace" loading="lazy" />
          <div className="trust__strip-note">
            <p className="trust__quote">„Přijedu ráno, naložím a jedu na montáž. To je celý důvod, proč beru z Ostravy.“</p>
            <p className="trust__by">— montér chlazení, stálý B2B odběratel</p>
          </div>
        </div>
      </section>
    </main>
  );
}
