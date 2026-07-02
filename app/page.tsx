const revize = [
  {
    kod: "E2/A",
    nazev: "Revize elektroinstalací",
    popis:
      "Byty, rodinné domy, kanceláře i výrobní haly. Výchozí revize po dokolaudaci i pravidelné revize podle ČSN 33 2000-6. Protokol dostanete do ruky, ne za měsíc poštou.",
    lhuta: "lhůta 5 let (obytné prostory)",
  },
  {
    kod: "E4/B",
    nazev: "Revize spotřebičů a nářadí",
    popis:
      "Vrtačky, prodlužovačky, kávovary, servery — všechno, co má vidlici do zásuvky. Měřím přímo u vás ve firmě, štítkuji a vedu evidenci, abyste u kontroly inspektorátu práce neměli co řešit.",
    lhuta: "lhůta 6–24 měsíců dle třídy",
  },
  {
    kod: "LPS",
    nazev: "Revize hromosvodů",
    popis:
      "Kontrola svodů, uzemnění a přechodových odporů podle ČSN EN 62305. Na střechu lezu sám, vy jen otevřete dveře. Vhodné spojit s revizí instalace — ušetříte jeden výjezd.",
    lhuta: "lhůta 2–4 roky dle třídy LPS",
  },
  {
    kod: "RD",
    nazev: "Revize pro kolaudaci a pojišťovnu",
    popis:
      "Stavíte nebo rekonstruujete? Bez výchozí revize nezkolaudujete a pojišťovna po požáru bez platného protokolu neplní. Zkontroluji rozvaděč, proudové chrániče i pospojování.",
    lhuta: "termín do 5 pracovních dnů",
  },
];

const postup = [
  {
    krok: "Zavoláte nebo napíšete",
    detail:
      "Řeknete mi, co potřebujete zrevidovat — stačí přibližně. Cenu vám řeknu rovnou do telefonu, ne „cena dohodou“.",
  },
  {
    krok: "Přijedu a změřím",
    detail:
      "Brno a okolí do 30 km bez příplatku za dopravu. Měřím kalibrovanými přístroji Metrel, izolační stav, impedanci smyčky, chrániče.",
  },
  {
    krok: "Protokol na místě",
    detail:
      "Revizní zprávu s razítkem dostanete zpravidla hned, u větších objektů do 3 dnů. Půl roku před koncem platnosti vám sám připomenu další termín.",
  },
];

export default function Page() {
  return (
    <main className="ch">
      {/* ===== HERO ===== */}
      <header className="hero">
        <div className="hero-top">
          <div className="wordmark">
            <span className="wordmark-sig">SCH</span>
            <span className="wordmark-text">
              Stanislav Chudo
              <em>revizní technik elektro · Brno</em>
            </span>
          </div>
          <a className="hero-tel" href="tel:+420234694430">
            +420 234 694 430
          </a>
        </div>

        <div className="hero-body">
          <p className="hero-eyebrow">
            Oprávnění § 8 zák. 250/2021 Sb. · objekty tř. A i B
          </p>
          <h1 className="hero-h1">
            Změřeno.
            <br />
            <span className="hero-h1-accent">Podepsáno.</span>
            <br />
            Platí.
          </h1>
          <p className="hero-lede">
            Revize elektroinstalací, spotřebičů a hromosvodů v&nbsp;Brně
            a&nbsp;okolí. Protokol většinou na&nbsp;místě — a&nbsp;termín další
            revize vám pohlídám já, ne&nbsp;vy.
          </p>
          <div className="hero-cta-row">
            <a className="btn btn-primary" href="tel:+420234694430">
              Zavolat a domluvit termín
            </a>
            <a className="btn btn-ghost" href="#revize">
              Co reviduji
            </a>
          </div>
        </div>

        {/* Signature: měřicí stupnice — jako displej revizního přístroje */}
        <div className="scale" aria-hidden="true">
          <div className="scale-track">
            {Array.from({ length: 41 }).map((_, i) => (
              <span
                key={i}
                className={
                  "tick" + (i % 10 === 0 ? " tick-major" : i % 5 === 0 ? " tick-mid" : "")
                }
              />
            ))}
            <span className="scale-needle" />
          </div>
          <div className="scale-labels">
            <span>0,00 MΩ</span>
            <span className="scale-ok">IZOLAČNÍ STAV: VYHOVUJE</span>
            <span>&gt;999 MΩ</span>
          </div>
        </div>
      </header>

      {/* ===== SEKCE 1: REVIZE ===== */}
      <section className="sluzby" id="revize" aria-labelledby="sluzby-h">
        <div className="sec-head">
          <h2 id="sluzby-h">Co u vás zreviduji</h2>
          <p>
            Každá položka má normou danou lhůtu. Když ji prošvihnete, riskujete
            pokutu a neplnění pojistky — proto lhůty hlídám za vás.
          </p>
        </div>

        <ul className="karta-grid">
          {revize.map((r) => (
            <li className="karta" key={r.kod}>
              <div className="karta-kod">{r.kod}</div>
              <h3>{r.nazev}</h3>
              <p>{r.popis}</p>
              <p className="karta-lhuta">
                <span className="lhuta-dot" aria-hidden="true" />
                {r.lhuta}
              </p>
            </li>
          ))}
        </ul>
      </section>

      {/* ===== SEKCE 2: JAK TO PROBÍHÁ + DŮVĚRA ===== */}
      <section className="prubeh" aria-labelledby="prubeh-h">
        <div className="sec-head sec-head-inv">
          <h2 id="prubeh-h">Jak revize probíhá</h2>
          <p>
            Tři kroky, žádné papírování navíc. Většinu revizí v&nbsp;Brně stihnu
            do&nbsp;týdne od&nbsp;zavolání.
          </p>
        </div>

        <ol className="kroky">
          {postup.map((p, i) => (
            <li className="krok" key={p.krok}>
              <span className="krok-cislo" aria-hidden="true">
                {i + 1}
              </span>
              <div>
                <h3>{p.krok}</h3>
                <p>{p.detail}</p>
              </div>
            </li>
          ))}
        </ol>

        <div className="duvera">
          <blockquote className="citace">
            <p>
              „Pan Chudo nám zrevidoval 340 spotřebičů ve dvou dnech a evidenci
              nechal v tabulce, kterou od nás převzala i BOZP auditorka bez
              jediné připomínky.“
            </p>
            <footer>— vedoucí provozu, strojírenská firma, Brno-Slatina</footer>
          </blockquote>

          <dl className="fakta">
            <div className="fakt">
              <dt>Praxe v oboru</dt>
              <dd>28 let</dd>
            </div>
            <div className="fakt">
              <dt>Dojezd bez příplatku</dt>
              <dd>Brno + 30 km</dd>
            </div>
            <div className="fakt">
              <dt>Protokol na místě</dt>
              <dd>u 9 z 10 revizí</dd>
            </div>
            <div className="fakt">
              <dt>Měřicí technika</dt>
              <dd>Metrel, kalibrace ČMI</dd>
            </div>
          </dl>
        </div>
      </section>
    </main>
  );
}
