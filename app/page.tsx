const revize = [
  {
    kod: "ČSN 33 1500",
    nazev: "Revize elektroinstalací",
    popis:
      "Výchozí i pravidelné revize rozvodů v bytech, domech, provozovnách a průmyslových objektech. Změříte-li si termín dopředu, revizi zvládneme bez odstávky provozu.",
    lhuta: "lhůta 1–5 let dle prostředí",
  },
  {
    kod: "ČSN 33 1600",
    nazev: "Revize spotřebičů a nářadí",
    popis:
      "Kontroly a revize elektrických spotřebičů, prodlužovaček a ručního nářadí přímo u vás na pracovišti. Každý kus dostane štítek a záznam do evidence.",
    lhuta: "lhůta 3–24 měsíců dle třídy",
  },
  {
    kod: "ČSN EN 62305",
    nazev: "Revize hromosvodů",
    popis:
      "Kontrola jímací soustavy, svodů a uzemnění včetně měření zemního odporu. Protokol potřebujete pro pojišťovnu i pro kolaudaci.",
    lhuta: "lhůta 2–4 roky dle LPS",
  },
  {
    kod: "NV 190/2022",
    nazev: "Elektromontáže a opravy",
    popis:
      "Když revize odhalí závadu, nemusíte shánět dalšího elektrikáře. Opravíme rozvaděč, vyměníme jističe, dotáhneme spoje — a rovnou vystavíme čistý protokol.",
    lhuta: "oprava + nová revize v jednom",
  },
];

const kroky = [
  {
    n: "1",
    t: "Zavoláte nebo napíšete",
    d: "Řeknete, co potřebujete zrevidovat — byt, dílnu, halu, spotřebiče. Hned po telefonu víte orientační cenu a termín.",
  },
  {
    n: "2",
    t: "Přijedeme a měříme",
    d: "Izolační odpor, impedance smyčky, proudové chrániče, přechodové odpory. Měříme kalibrovanými přístroji, závady ukážeme na místě.",
  },
  {
    n: "3",
    t: "Dostanete protokol",
    d: "Revizní zprávu s razítkem a podpisem máte v ruce zpravidla do 3 pracovních dnů. Platí pro pojišťovnu, inspektorát práce i kolaudaci.",
  },
];

export default function Page() {
  return (
    <main className="st">
      {/* ===== HERO ===== */}
      <header className="hero">
        <div className="hero-inner">
          <div className="brand" aria-label="Alois Stehno — revize elektro">
            <span className="brand-bolt" aria-hidden="true">
              <svg viewBox="0 0 24 32" width="22" height="30" role="presentation" focusable="false">
                <path d="M14 0 2 18h7L8 32 22 12h-8L14 0Z" fill="currentColor" />
              </svg>
            </span>
            <span className="brand-name">
              STEHNO<span className="brand-sub">revize elektro · Brno</span>
            </span>
          </div>

          <h1 className="hero-title">
            <span className="hero-line hero-line-1">Bez revize</span>
            <span className="hero-line hero-line-2">
              nezapínat<span className="hero-dot">.</span>
            </span>
          </h1>

          <p className="hero-lead">
            Revizní technik Alois Stehno provádí v Brně a okolí revize
            elektroinstalací, spotřebičů a hromosvodů. Změříme, co je potřeba,
            závady řekneme na rovinu — a protokol máte do tří dnů.
          </p>

          <div className="hero-tag" role="group" aria-label="Základní údaje">
            <span className="tag">Osvědčení dle NV 194/2022 Sb.</span>
            <span className="tag">Vranovská 83, Brno-sever</span>
            <span className="tag">Živnost od r. 1992</span>
          </div>

          <div className="hero-cta">
            <a className="btn btn-solid" href="tel:+420545241577">
              Zavolat: 545 241 577
            </a>
            <a className="btn btn-line" href="#revize">
              Co revidujeme
            </a>
          </div>
        </div>

        {/* signature: měřicí stupnice / analogový voltmetr jako okraj hero */}
        <div className="hero-scale" aria-hidden="true">
          <div className="scale-band">
            <span className="scale-num">0</span>
            <span className="scale-num">50</span>
            <span className="scale-num">110</span>
            <span className="scale-num">230</span>
            <span className="scale-num">400</span>
            <span className="scale-unit">V~</span>
          </div>
          <div className="scale-ticks" />
          <div className="scale-needle" />
        </div>
      </header>

      {/* ===== SEKCE 1: REVIZE ===== */}
      <section className="sec sec-revize" id="revize" aria-labelledby="revize-h">
        <div className="sec-inner">
          <p className="sec-eyebrow">Čtyři protokoly, které od nás dostanete</p>
          <h2 className="sec-title" id="revize-h">
            Co měříme a revidujeme
          </h2>

          <div className="rev-grid">
            {revize.map((r) => (
              <article className="rev-card" key={r.kod}>
                <p className="rev-kod">{r.kod}</p>
                <h3 className="rev-nazev">{r.nazev}</h3>
                <p className="rev-popis">{r.popis}</p>
                <p className="rev-lhuta">
                  <span className="rev-lhuta-tick" aria-hidden="true" />
                  {r.lhuta}
                </p>
              </article>
            ))}
          </div>

          <p className="rev-note">
            Nevíte, kterou revizi po vás pojišťovna nebo úřad chce? Zavolejte —
            po dvou minutách po telefonu to víte přesně.
          </p>
        </div>
      </section>

      {/* ===== SEKCE 2: JAK TO PROBÍHÁ + DŮVĚRA ===== */}
      <section className="sec sec-postup" aria-labelledby="postup-h">
        <div className="sec-inner">
          <p className="sec-eyebrow sec-eyebrow-light">Od telefonátu k razítku</p>
          <h2 className="sec-title sec-title-light" id="postup-h">
            Jak revize probíhá
          </h2>

          <ol className="kroky">
            {kroky.map((k) => (
              <li className="krok" key={k.n}>
                <span className="krok-num" aria-hidden="true">
                  {k.n}
                </span>
                <div>
                  <h3 className="krok-title">{k.t}</h3>
                  <p className="krok-text">{k.d}</p>
                </div>
              </li>
            ))}
          </ol>

          <div className="stitek" role="note" aria-label="Proč Alois Stehno">
            <div className="stitek-head">
              <span className="stitek-bolt" aria-hidden="true">
                <svg viewBox="0 0 24 32" width="16" height="22" role="presentation" focusable="false">
                  <path d="M14 0 2 18h7L8 32 22 12h-8L14 0Z" fill="currentColor" />
                </svg>
              </span>
              PROVĚŘENO · BRNO
            </div>
            <dl className="stitek-body">
              <div className="stitek-row">
                <dt>Praxe v oboru</dt>
                <dd>přes 30 let, živnost od roku 1992</dd>
              </div>
              <div className="stitek-row">
                <dt>Působnost</dt>
                <dd>Brno a Jihomoravský kraj, do 40 km bez příplatku</dd>
              </div>
              <div className="stitek-row">
                <dt>Protokol</dt>
                <dd>do 3 pracovních dnů, elektronicky i v papíru</dd>
              </div>
              <div className="stitek-row">
                <dt>Pro koho</dt>
                <dd>SVJ, firmy, školy, dílny i majitelé domů</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>
    </main>
  );
}
