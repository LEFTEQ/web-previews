export default function Page() {
  return (
    <main className="ws-page">
      {/* ===== HERO ===== */}
      <header className="ws-hero">
        <div className="ws-hero-inner">
          <div className="ws-brand">
            <span className="ws-brand-mark" aria-hidden="true">
              {/* vistárie – převislý hrozen, kreslený liniemi */}
              <svg viewBox="0 0 40 56" width="28" height="40" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
                <path d="M20 2 C20 14 18 20 14 26" />
                <circle cx="13" cy="30" r="3.4" />
                <circle cx="20" cy="34" r="3.4" />
                <circle cx="27" cy="30" r="3.4" />
                <circle cx="16" cy="41" r="3" />
                <circle cx="24" cy="41" r="3" />
                <circle cx="20" cy="49" r="2.6" />
              </svg>
            </span>
            <span className="ws-brand-word">Wisteria</span>
            <span className="ws-brand-sub">zahradní architektura · České Budějovice</span>
          </div>

          <h1 className="ws-hero-title">
            <span className="ws-line ws-line-1">Zahrada se</span>
            <span className="ws-line ws-line-2">
              nekreslí.{" "}
              <em className="ws-italic">Pěstuje&nbsp;se</em>
            </span>
            <span className="ws-line ws-line-3">— od návrhu po výsadbu.</span>
          </h1>

          <p className="ws-hero-lead">
            Navrhujeme a zakládáme zahrady v&nbsp;Českých Budějovicích a&nbsp;okolí.
            Přijedeme, změříme pozemek, poznáme půdu i&nbsp;světlo — a&nbsp;nakreslíme
            zahradu, která bude za pět let krásnější než v&nbsp;den předání.
          </p>

          <div className="ws-hero-actions">
            <a className="ws-btn ws-btn-solid" href="#sluzby">Co pro vás uděláme</a>
            <a className="ws-btn ws-btn-ghost" href="#pribeh">Jak pracujeme</a>
          </div>
        </div>

        {/* signature: převislý květenství-sloupec podél pravé hrany */}
        <div className="ws-raceme" aria-hidden="true">
          <span className="ws-vine" />
          <span className="ws-bloom b1" />
          <span className="ws-bloom b2" />
          <span className="ws-bloom b3" />
          <span className="ws-bloom b4" />
          <span className="ws-bloom b5" />
          <span className="ws-bloom b6" />
          <span className="ws-bloom b7" />
          <span className="ws-bloom b8" />
          <span className="ws-bloom b9" />
        </div>

        <p className="ws-hero-strip" aria-hidden="true">
          vistárie · trvalkové záhony · pochozí trávník · jezírko · pergola · živý plot · vistárie · trvalkové záhony · pochozí trávník
        </p>
      </header>

      {/* ===== SLUŽBY ===== */}
      <section className="ws-section ws-services" id="sluzby" aria-labelledby="sluzby-h">
        <div className="ws-section-head">
          <p className="ws-eyebrow">Od skici k&nbsp;první sezóně</p>
          <h2 id="sluzby-h" className="ws-h2">Zahrada vzniká ve&nbsp;čtyřech krocích</h2>
          <p className="ws-section-lead">
            Každý krok má svůj výstup, který držíte v&nbsp;ruce — plán, rozpočet,
            hotový záhon. Víte, co se děje a&nbsp;kolik to stojí.
          </p>
        </div>

        <ol className="ws-steps">
          <li className="ws-step">
            <span className="ws-step-season">jaro plánování</span>
            <h3 className="ws-step-title">Návštěva pozemku a&nbsp;rozhovor</h3>
            <p className="ws-step-text">
              Projdeme s&nbsp;vámi zahradu, změříme ji a&nbsp;zjistíme, kde je stín,
              kudy fouká a&nbsp;jaká je půda. Hlavně ale posloucháme: chcete si číst,
              grilovat, nebo pěstovat rajčata?
            </p>
            <p className="ws-step-out">Výstup: zápis a&nbsp;zaměření pozemku</p>
          </li>
          <li className="ws-step">
            <span className="ws-step-season">studie</span>
            <h3 className="ws-step-title">Návrh zahrady v&nbsp;měřítku</h3>
            <p className="ws-step-text">
              Nakreslíme půdorys s&nbsp;osazovacím plánem: kde poroste vistárie na
              pergole, kde trvalkový záhon a&nbsp;kudy povede cesta. Dvě varianty,
              jedno kolo úprav v&nbsp;ceně.
            </p>
            <p className="ws-step-out">Výstup: plán 1:100 + seznam rostlin</p>
          </li>
          <li className="ws-step">
            <span className="ws-step-season">realizace</span>
            <h3 className="ws-step-title">Založení zahrady na&nbsp;klíč</h3>
            <p className="ws-step-text">
              Terénní úpravy, závlaha, výsadba stromů a&nbsp;keřů, založení trávníku.
              Rostliny bereme ze&nbsp;školek v&nbsp;jižních Čechách — jsou zvyklé na
              zdejší zimy.
            </p>
            <p className="ws-step-out">Výstup: hotová zahrada dle plánu</p>
          </li>
          <li className="ws-step">
            <span className="ws-step-season">celý rok</span>
            <h3 className="ws-step-title">Péče v&nbsp;prvních sezónách</h3>
            <p className="ws-step-text">
              První dva roky rozhodují. Přijedeme na jarní řez, kontrolu závlahy
              i&nbsp;podzimní přípravu na zimu — dokud se zahrada sama nepostaví
              na&nbsp;nohy.
            </p>
            <p className="ws-step-out">Výstup: kalendář péče na&nbsp;míru</p>
          </li>
        </ol>
      </section>

      {/* ===== O NÁS / DŮVĚRA ===== */}
      <section className="ws-section ws-story" id="pribeh" aria-labelledby="pribeh-h">
        <div className="ws-story-grid">
          <div className="ws-story-copy">
            <p className="ws-eyebrow ws-eyebrow-light">Proč Wisteria</p>
            <h2 id="pribeh-h" className="ws-h2 ws-h2-light">
              Jmenujeme se po rostlině, která umí čekat
            </h2>
            <p className="ws-story-text">
              Vistárie kvete až po několika letech — a&nbsp;pak každé jaro znovu,
              celé desítky let. Stejně přemýšlíme o&nbsp;zahradách: nenavrhujeme
              kulisu na&nbsp;první léto, ale místo, které poroste s&nbsp;vámi.
            </p>
            <p className="ws-story-text">
              Pracujeme v&nbsp;Českých Budějovicích a&nbsp;do&nbsp;40&nbsp;km okolo —
              Hluboká nad Vltavou, Trhové Sviny, Lišov, Borovany. Známe zdejší
              těžší půdy u&nbsp;Vltavy i&nbsp;mrazové kotliny Třeboňska, takže
              sázíme jen to, co tu opravdu přežije.
            </p>

            <ul className="ws-claims">
              <li className="ws-claim">
                <strong>Osazovací plán dostanete vždy</strong>
                <span>Víte přesně, co kde roste a&nbsp;jak se o&nbsp;to starat.</span>
              </li>
              <li className="ws-claim">
                <strong>Rostliny z&nbsp;jihočeských školek</strong>
                <span>Aklimatizované sazenice, ne dovoz z&nbsp;fóliovníku.</span>
              </li>
              <li className="ws-claim">
                <strong>Záruka ujmutí výsadby</strong>
                <span>Co se neujme do&nbsp;roka, vyměníme na&nbsp;naše náklady.</span>
              </li>
            </ul>
          </div>

          <aside className="ws-quotes">
            <figure className="ws-quote">
              <blockquote>
                „Ze zaplevelené parcely u&nbsp;novostavby udělali za jednu sezónu
                zahradu, kde si děti hrají a&nbsp;my večer sedíme pod pergolou.
                Plán rostlin máme na&nbsp;lednici dodnes.“
              </blockquote>
              <figcaption>— rodina Havlova, Hluboká nad Vltavou</figcaption>
            </figure>
            <figure className="ws-quote">
              <blockquote>
                „Nechtěli nám prodat co nejvíc rostlin. Naopak — poradili méně
                druhů, zato takových, které u&nbsp;nás na&nbsp;jílu opravdu rostou.“
              </blockquote>
              <figcaption>— paní Kubíčková, České Budějovice–Rožnov</figcaption>
            </figure>
            <figure className="ws-quote">
              <blockquote>
                „Třetí jaro a&nbsp;vistárie poprvé vykvetla přes celou pergolu.
                Přesně jak slibovali: trpělivost se vyplatila.“
              </blockquote>
              <figcaption>— manželé Šímovi, Lišov</figcaption>
            </figure>
          </aside>
        </div>
      </section>
    </main>
  );
}
