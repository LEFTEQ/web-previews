import type { CSSProperties } from "react";

const products = [
  {
    name: "Chladicí stůl GN1/1",
    code: "CK 7410",
    volume: "553 / 533 l",
    dims: "Š 2230 · H 700 · V 960",
    stock: "Ostrava: 1 ks",
    price: "45 020 Kč",
    use: "Do zázemí kuchyně",
  },
  {
    name: "Chladicí vitrína přístěnná",
    code: "Galaxy+ GP20FGD Black",
    volume: "2165 / 943 l",
    dims: "Š 1955 · H 750 · V 2005",
    stock: "Ostrava: 1 ks · Dánsko: 5 ks",
    price: "168 490 Kč",
    use: "Na prodejnu",
  },
  {
    name: "Distributor kopečkové zmrzliny",
    code: "ISETTA 7ST",
    volume: "7 vaniček",
    dims: "Š 1354 · H 800 · V 1176",
    stock: "Na objednávku",
    price: "77 050 Kč",
    use: "Prodej zmrzliny",
  },
  {
    name: "Pultová chladnička, plné víko",
    code: "EBC 53",
    volume: "414 / 411 l",
    dims: "Š 1516 · H 696 · V 857",
    stock: "Ostrava: 2 ks · Dánsko: 11–20 ks",
    price: "19 740 Kč",
    use: "Do zázemí",
  },
];

const reasons = [
  {
    k: "01",
    t: "Servis a opravy do 24 h",
    d: "Záruční i pozáruční opravy chladicí a mrazicí techniky. Přijedeme, diagnostikujeme, vyměníme díl — bez dlouhého čekání na provozu.",
  },
  {
    k: "02",
    t: "Náhradní díly skladem",
    d: "Kompresory, termostaty, těsnění dveří, výparníky, LED osvětlení i pojezdová kolečka. Přes 70 000 položek skladem k rychlému dodání.",
  },
  {
    k: "03",
    t: "Expedice týž den",
    d: "Zboží skladem posíláme v den dokončení objednávky nebo hned následující den. Sklad Ostrava a záložní centrální sklad v Dánsku.",
  },
];

const tempScale: { c: string; label: string; note: string }[] = [
  { c: "−22", label: "Mrazicí zařízení", note: "Boxy, pulty, skříně" },
  { c: "−14", label: "Prodej zmrzliny", note: "Distributory, vitríny" },
  { c: "+2", label: "Chlazení na prodejnu", note: "Vitríny, regály" },
  { c: "+5", label: "Chlazení do zázemí", note: "Stoly, skříně, gastro" },
];

export default function Page() {
  return (
    <main className="tc">
      <header className="tc-nav" aria-label="Hlavní">
        <a className="tc-brand" href="#top" aria-label="TEFCOLD Ostrava — úvod">
          <span className="tc-brand-mark" aria-hidden="true" />
          <span className="tc-brand-word">
            TEF<span className="tc-brand-cold">COLD</span>
          </span>
          <span className="tc-brand-loc">Ostrava</span>
        </a>
        <nav className="tc-links">
          <a href="#sortiment">Sortiment</a>
          <a href="#servis">Servis</a>
          <a href="#duvera">O nás</a>
        </nav>
      </header>

      <section className="tc-hero" id="top">
        <div className="tc-hero-media">
          <img
            src="/hero.webp"
            alt="Prosklené chladicí vitríny a mrazicí technika TEFCOLD připravené na provoz"
            className="tc-hero-img"
            width={1600}
            height={1200}
          />
          <div className="tc-hero-frost" aria-hidden="true" />
        </div>

        <div className="tc-hero-inner">
          <p className="tc-eyebrow">Specialisté na chlazení a mrazení · Ostrava</p>
          <h1 className="tc-hero-h1">
            Držíme provozy
            <span className="tc-hero-line">
              v teplotě, <em>na kterou spoléháte.</em>
            </span>
          </h1>
          <p className="tc-hero-sub">
            Chladicí a mrazicí technika pro prodejny, kuchyně, cukrárny a zmrzlinu.
            Přes 70 000 dílů skladem, servis do druhého dne a lidi, kteří vědí,
            proč vám vitrína přestala chladit.
          </p>
          <div className="tc-hero-cta">
            <a className="tc-btn tc-btn-primary" href="#sortiment">
              Získat nezávaznou nabídku
            </a>
            <a className="tc-btn tc-btn-ghost" href="#servis">
              Nahlásit poruchu
            </a>
          </div>

          <dl className="tc-scale" aria-label="Provozní teplotní pásma">
            {tempScale.map((s) => (
              <div className="tc-scale-item" key={s.label}>
                <dt className="tc-scale-temp">
                  {s.c}<span className="tc-scale-deg">°C</span>
                </dt>
                <dd className="tc-scale-body">
                  <span className="tc-scale-label">{s.label}</span>
                  <span className="tc-scale-note">{s.note}</span>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="tc-sec" id="sortiment" aria-labelledby="sortiment-h">
        <div className="tc-sec-head">
          <p className="tc-eyebrow tc-eyebrow-dark">Novinky v sortimentu · sklad Ostrava</p>
          <h2 className="tc-h2" id="sortiment-h">Skladem a připravené k expedici</h2>
          <p className="tc-lead">
            Vyberte podle toho, co u vás musí zůstat studené. U každého zařízení
            vidíte objem, rozměry i to, kolik kusů je právě teď na skladě.
          </p>
        </div>

        <ul className="tc-grid">
          {products.map((p) => {
            const soon = p.stock.startsWith("Na objednávku");
            return (
              <li className="tc-card" key={p.code}>
                <span className="tc-card-use">{p.use}</span>
                <h3 className="tc-card-name">{p.name}</h3>
                <p className="tc-card-code">{p.code}</p>
                <dl className="tc-card-specs">
                  <div><dt>Objem</dt><dd>{p.volume}</dd></div>
                  <div><dt>Rozměry</dt><dd>{p.dims}</dd></div>
                </dl>
                <p className={soon ? "tc-stock tc-stock-soon" : "tc-stock"}>
                  <span className="tc-dot" aria-hidden="true" />
                  {p.stock}
                </p>
                <p className="tc-card-price">
                  {p.price} <span>bez DPH</span>
                </p>
              </li>
            );
          })}
        </ul>

        <figure className="tc-strip">
          <img
            src="/section-1.webp"
            alt="Prosklená chladicí vitrína naskladněná zbožím na prodejně"
            width={1600}
            height={900}
          />
          <figcaption>
            Chlazení na prodejnu i do zázemí — od jednoho pultu po vybavení celé kuchyně.
          </figcaption>
        </figure>
      </section>

      <section className="tc-duo" id="servis" aria-labelledby="servis-h">
        <div className="tc-duo-text" id="duvera">
          <p className="tc-eyebrow">Proč TEFCOLD</p>
          <h2 className="tc-h2 tc-h2-light" id="servis-h">
            Když vitrína stávkuje, nezůstanete v tom sami
          </h2>
          <ol className="tc-reasons">
            {reasons.map((r) => (
              <li className="tc-reason" key={r.k}>
                <span className="tc-reason-k">{r.k}</span>
                <div>
                  <h3 className="tc-reason-t">{r.t}</h3>
                  <p className="tc-reason-d">{r.d}</p>
                </div>
              </li>
            ))}
          </ol>
          <a className="tc-btn tc-btn-primary" href="tel:+420593033028">
            Zavolat servisu · 593 033 028
          </a>
        </div>

        <figure className="tc-duo-media">
          <img
            src="/section-2.webp"
            alt="Servisní technik TEFCOLD při opravě chladicího zařízení"
            width={1000}
            height={1200}
          />
          <figcaption className="tc-duo-cap">
            <span className="tc-duo-num">70 000+</span>
            náhradních dílů skladem — kompresory, termostaty, těsnění, výparníky
          </figcaption>
        </figure>
      </section>
    </main>
  );
}
