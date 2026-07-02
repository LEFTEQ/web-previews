export default function Page() {
  return (
    <main className="nc">
      {/* ===== HERO ===== */}
      <header className="nc-hero">
        <div className="nc-hero-inner">
          <div className="nc-topline">
            <span className="nc-wordmark">
              NEEL<span className="nc-wordmark-thin">CLEANING</span>
            </span>
            <span className="nc-topline-loc">Olomouc a okolí</span>
          </div>

          <h1 className="nc-h1">
            <span className="nc-h1-line nc-h1-line-1">Sklo, přes které</span>
            <span className="nc-h1-line nc-h1-line-2">
              zase <em className="nc-clear">uvidíte</em>.
            </span>
          </h1>

          <p className="nc-hero-sub">
            Profesionální mytí oken, výloh a prosklených fasád pro domácnosti
            a firmy v Olomouci. Přijedeme, umyjeme, uklidíme po sobě —
            a okno necháme beze šmouh, včetně rámů a parapetů.
          </p>

          <ul className="nc-hero-facts" aria-label="Základní informace">
            <li>
              <strong>Demineralizovaná voda</strong>
              <span>schne bez map i bez leštění</span>
            </li>
            <li>
              <strong>Teleskopické tyče do 12&nbsp;m</strong>
              <span>4. patro bez lešení a plošiny</span>
            </li>
            <li>
              <strong>Termín do 5 dnů</strong>
              <span>běžně po celé Olomouci</span>
            </li>
          </ul>
        </div>

        {/* Signature: okenní tabule se stěračovou stopou */}
        <div className="nc-pane" aria-hidden="true">
          <div className="nc-pane-glass">
            <div className="nc-pane-haze" />
            <div className="nc-pane-clean" />
            <div className="nc-squeegee" />
            <div className="nc-drip nc-drip-1" />
            <div className="nc-drip nc-drip-2" />
            <div className="nc-drip nc-drip-3" />
          </div>
          <div className="nc-pane-bar nc-pane-bar-v" />
          <div className="nc-pane-bar nc-pane-bar-h" />
          <div className="nc-pane-sill" />
        </div>
      </header>

      {/* ===== SLUŽBY ===== */}
      <section className="nc-section nc-services" aria-labelledby="sluzby-h">
        <div className="nc-section-inner">
          <p className="nc-eyebrow">Co myjeme</p>
          <h2 id="sluzby-h" className="nc-h2">
            Od kuchyňského okna po prosklenou fasádu
          </h2>

          <div className="nc-service-grid">
            <article className="nc-card">
              <h3>Okna v bytech a domech</h3>
              <p>
                Umyjeme skla z obou stran, rámy, parapety i žaluzie. Pracujeme
                v návlecích, nábytek zakryjeme a po práci vše vrátíme na místo.
                Bytová jednotka 3+1 obvykle do dvou hodin.
              </p>
              <p className="nc-card-price">od 890 Kč / byt</p>
            </article>

            <article className="nc-card">
              <h3>Výlohy a provozovny</h3>
              <p>
                Pravidelné mytí výloh pro obchody, kavárny a ordinace v centru
                Olomouce — týdně nebo měsíčně, brzy ráno před otevírací dobou,
                aby vás zákazníci vždy viděli přes čisté sklo.
              </p>
              <p className="nc-card-price">od 350 Kč / výjezd</p>
            </article>

            <article className="nc-card">
              <h3>Fasády a těžko dostupná skla</h3>
              <p>
                Prosklené fasády, světlíky, zimní zahrady a okna ve výškách
                myjeme teleskopickými tyčemi s demineralizovanou vodou —
                do 12 metrů bez plošiny, bez lešení a bez uzavírky chodníku.
              </p>
              <p className="nc-card-price">cena po obhlídce zdarma</p>
            </article>

            <article className="nc-card">
              <h3>Po malířích a po stavbě</h3>
              <p>
                Odstraníme barvu, lepidlo, cementové šmouhy i fólie z nových
                oken. Používáme skleněné škrabky, které sklo nepoškrábou —
                předáme okna připravená k nastěhování.
              </p>
              <p className="nc-card-price">od 45 Kč / m² skla</p>
            </article>
          </div>
        </div>
      </section>

      {/* ===== DŮVĚRA ===== */}
      <section className="nc-section nc-trust" aria-labelledby="duvera-h">
        <div className="nc-section-inner">
          <p className="nc-eyebrow nc-eyebrow-light">Proč Neelcleaning</p>
          <h2 id="duvera-h" className="nc-h2 nc-h2-light">
            Malá olomoucká firma. Velký důraz na detail.
          </h2>

          <div className="nc-trust-grid">
            <div className="nc-trust-item">
              <span className="nc-trust-mark" aria-hidden="true" />
              <h3>Vždy stejní lidé</h3>
              <p>
                Ke stálým zákazníkům jezdí pořád stejná dvojice. Znají váš
                byt, vaše okna i to, že kaktus na parapetu se nepřenáší.
              </p>
            </div>
            <div className="nc-trust-item">
              <span className="nc-trust-mark" aria-hidden="true" />
              <h3>Pojištění do 5 mil. Kč</h3>
              <p>
                Pracujeme pojištěni proti škodám na majetku. Rozbité sklo
                nebo poškozený rám jde za námi, ne za vámi.
              </p>
            </div>
            <div className="nc-trust-item">
              <span className="nc-trust-mark" aria-hidden="true" />
              <h3>Cena předem, ne po práci</h3>
              <p>
                Před objednáním dostanete konkrétní cenu za konkrétní okna.
                Co si domluvíme, to platí — žádné příplatky na místě.
              </p>
            </div>
          </div>

          <figure className="nc-quote">
            <blockquote>
              „Bydlíme ve čtvrtém patře na Nové Ulici a roky jsme okna zvenku
              nemyli — nešlo to. Kluci z Neelcleaning to zvládli tyčí ze
              dvora za hodinu. Poprvé po letech vidíme na katedrálu.“
            </blockquote>
            <figcaption>— paní Dohnalová, Olomouc–Nová Ulice</figcaption>
          </figure>

          <p className="nc-trust-area">
            Jezdíme po celé Olomouci a do 20&nbsp;km: Šternberk, Litovel,
            Prostějov, Velká Bystřice, Lutín. Doprava po Olomouci zdarma.
          </p>
        </div>
      </section>
    </main>
  );
}
