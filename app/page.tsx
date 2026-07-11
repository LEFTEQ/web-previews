import './globals.css';

const sluzby = [
  {
    kod: 'A',
    nazev: 'Papír a obálky',
    popis: 'Skladem držíme evropské grafické papíry, které jinde neseženete. Nařežeme na formát, ušijeme obálku na míru, půjčíme vzorník.',
    body: ['Prodej papíru', 'Řezání na formát', 'Obálky na zakázku', 'Vzorník', 'E-shop'],
  },
  {
    kod: 'B',
    nazev: 'Tisk a výroba',
    popis: 'Polygrafická dílna, kde má poslední slovo ruka i stroj. Tiskneme, vážeme, ražíme za tepla a kašírujeme.',
    body: ['Tisk', 'Tisk bílou', 'Vazby a knihařina', 'Vizitky', 'Horká ražba & slepotisk', 'Sendvičové lepení & kašírování', 'Ruční kompletace', 'Dokončování', 'Obaly', 'Upcyklace'],
  },
  {
    kod: 'C',
    nazev: 'Prototypování a vývoj',
    popis: 'Zdánlivě nerealizovatelné bereme jako zadání. Vysázíme knihu, vyvineme výrobek, nafotíme ho v ateliéru.',
    body: ['Sazba knih a publikací', 'Vývoj výrobku & prototypy', 'Realizace na míru', 'Ateliérová fotografie'],
  },
];

const prace = [
  'Vánoční limitka pražírny Kikafe',
  'Truhla pokladů',
  'Zápisník Caritas',
  'Katalog k výstavě Než se vzbudí kohouti',
  'Zápisník Olomoucký kraj',
  'Klub zvídavých dětí',
  "Vinyl Let's Burn Heaven Again",
  'Portfolio box OP Cable',
  'Zápisník k výstavě Ivana Pinkavy',
];

const zakaznici = ['Firma', 'Grafik', 'Nevěsta', 'Tiskárna & copycentrum', 'Škola', 'Architekt'];

export default function Page() {
  return (
    <main className="cgp">
      <header className="cgp-nav">
        <a className="cgp-logo" href="#" aria-label="Centrum grafických papírů, Olomouc">
          <span className="cgp-logo-mark" aria-hidden="true">≡</span>
          <span className="cgp-logo-text">
            <span className="cgp-logo-l1">Centrum</span>
            <span className="cgp-logo-l2">grafických papírů</span>
          </span>
        </a>
        <nav className="cgp-navlinks" aria-label="Hlavní navigace">
          <a href="#sluzby">Služby</a>
          <a href="#prace">Naše práce</a>
          <a href="#kontakt">Kontakt</a>
        </nav>
      </header>

      <section className="cgp-hero" id="hero">
        <div className="cgp-hero-media">
          <img src="/hero.webp" alt="Ruční tisk na grafický papír v dílně Centra grafických papírů" />
          <div className="cgp-hero-grain" aria-hidden="true" />
        </div>
        <div className="cgp-hero-copy">
          <p className="cgp-eyebrow">Tiskařská a knihařská dílna · Olomouc, Na Letné</p>
          <h1 className="cgp-hero-title">
            <span>Věříme</span>
            <span className="cgp-hero-em">papíru.</span>
          </h1>
          <p className="cgp-hero-lede">
            Speciální grafické papíry, precizní tisk a výroba od jednoho jediného kusu.
            Máme odhodlání pro zdánlivě nerealizovatelné — a sklad papírů, které jinde nenajdete.
          </p>
          <div className="cgp-hero-actions">
            <a className="cgp-btn" href="#sluzby">Prohlédnout, co umíme</a>
            <a className="cgp-btn cgp-btn-ghost" href="#kontakt">Napište nám</a>
          </div>
        </div>
      </section>

      <section className="cgp-band" aria-label="Pro koho pracujeme">
        <ul className="cgp-band-list">
          {zakaznici.map((z) => (
            <li key={z}>{z}</li>
          ))}
        </ul>
      </section>

      <section className="cgp-sluzby" id="sluzby">
        <div className="cgp-section-head">
          <p className="cgp-eyebrow">Tři dílny pod jednou střechou</p>
          <h2 className="cgp-h2">Od archu papíru<br />po hotovou knihu</h2>
        </div>
        <div className="cgp-sluzby-grid">
          {sluzby.map((s) => (
            <article className="cgp-card" key={s.kod}>
              <span className="cgp-card-kod" aria-hidden="true">{s.kod}</span>
              <h3 className="cgp-card-title">{s.nazev}</h3>
              <p className="cgp-card-popis">{s.popis}</p>
              <ul className="cgp-card-list">
                {s.body.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
        <figure className="cgp-figure">
          <img src="/section-1.webp" alt="Detail vzorníku grafických papírů a obálek na zakázku" />
          <figcaption>Vzorník máme na dosah — přijďte si papír osahat, než ho vytiskneme.</figcaption>
        </figure>
      </section>

      <section className="cgp-prace" id="prace">
        <div className="cgp-prace-inner">
          <div className="cgp-prace-head">
            <p className="cgp-eyebrow">Nejkrásnější práce</p>
            <h2 className="cgp-h2 cgp-h2-light">S papírem<br />umíme kouzlit</h2>
            <p className="cgp-prace-lede">
              Zápisníky, katalogy, limitky, obalové boxy i vinyl. Každá zakázka projde
              rukama Martiny a Ondřeje — od kalkulace po ruční kompletaci.
            </p>
            <div className="cgp-kontakt" id="kontakt">
              <p className="cgp-kontakt-line">
                <strong>obchod@graficke-papiry.cz</strong> — obecný e-mail
              </p>
              <p className="cgp-kontakt-line">739 223 207 — Martina Černá, produkce a kalkulace</p>
              <p className="cgp-kontakt-line">739 662 711 — Ondřej Hruška, majitel</p>
              <p className="cgp-kontakt-line cgp-kontakt-adresa">
                Na Letné 113/1, 779 00 Olomouc · po–pá 13.00–16.30 pro veřejnost
              </p>
            </div>
          </div>
          <ol className="cgp-prace-list">
            {prace.map((p, i) => (
              <li key={p}>
                <span className="cgp-prace-num" aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
                <span className="cgp-prace-name">{p}</span>
              </li>
            ))}
          </ol>
        </div>
        <figure className="cgp-figure cgp-figure-dark">
          <img src="/section-2.webp" alt="Hotové zápisníky a knihařská vazba z dílny" />
        </figure>
      </section>
    </main>
  );
}
