// ALCOM spol. s r.o. — elektroservis, Karlovy Vary
// Statický náhled: hero + služby + důvěra. Bez footeru (doplní studio).

const sluzby = [
  {
    kod: "L1",
    nazev: "Opravy elektrospotřebičů",
    popis:
      "Pračky, myčky, sporáky, trouby i drobná bílá technika. Závadu najdeme, řekneme cenu předem a opravíme — často na první návštěvu, protože běžné díly vozíme s sebou.",
    stitek: "U vás doma i v dílně",
  },
  {
    kod: "L2",
    nazev: "Elektroinstalace a rozvody",
    popis:
      "Nové zásuvky, světelné okruhy, výměna jističů i kompletní rekonstrukce rozvodů v bytě nebo provozovně. Vše zapojíme, změříme a předáme s dokladem.",
    stitek: "Byty, domy, provozovny",
  },
  {
    kod: "L3",
    nazev: "Revize a měření",
    popis:
      "Pravidelné revize elektroinstalací a spotřebičů pro firmy, SVJ a pronajímatele. Dostanete revizní zprávu, kterou uznají pojišťovny i úřady.",
    stitek: "S revizní zprávou",
  },
  {
    kod: "N",
    nazev: "Havarijní zásah",
    popis:
      "Vyhozený jistič, jiskřící zásuvka, byt bez proudu. V Karlových Varech a okolí přijedeme zpravidla do dvou hodin a závadu bezpečně odstraníme.",
    stitek: "Karlovy Vary a okolí",
  },
];

const duvody = [
  {
    hodnota: "Od r. 1992",
    text: "Elektroservis děláme přes třicet let. Známe spotřebiče, které se dnes už nevyrábí, i ty nejnovější.",
  },
  {
    hodnota: "Cena předem",
    text: "Před opravou řekneme, kolik bude stát. Když se oprava nevyplatí, poradíme, čím spotřebič nahradit.",
  },
  {
    hodnota: "Západní 63",
    text: "Dílna a sklad dílů přímo v Karlových Varech. Menší spotřebiče můžete přinést osobně, po telefonu domluvíme termín.",
  },
];

const reference = [
  {
    citace:
      "Pračka přestala ždímat v pátek odpoledne. V pondělí ráno přijel technik, vyměnil uhlíky a do oběda bylo hotovo. Cena přesně podle telefonu.",
    jmeno: "paní Hrubá, Drahovice",
  },
  {
    citace:
      "Dělali nám kompletní rozvody v pensionu včetně revize. Termíny drželi, po sobě uklidili a revizní zprávu jsme měli do týdne.",
    jmeno: "pension u Zámecké věže, Karlovy Vary",
  },
];

export default function Page() {
  return (
    <main className="al-page">
      {/* ================= HERO ================= */}
      <header className="al-hero">
        <div className="al-hero-top">
          <div className="al-wordmark" aria-label="ALCOM elektroservis">
            <span className="al-wordmark-name">
              AL<span className="al-wordmark-spark" aria-hidden="true">⌁</span>COM
            </span>
            <span className="al-wordmark-sub">elektroservis · Karlovy Vary</span>
          </div>
          <a className="al-hero-tel" href="tel:+420353222411">
            <span className="al-hero-tel-label">Volejte dílnu</span>
            <span className="al-hero-tel-num">353 222 411</span>
          </a>
        </div>

        <div className="al-hero-main">
          <p className="al-hero-eyebrow">
            <span className="al-dot" aria-hidden="true" />
            Opravy · instalace · revize
          </p>
          <h1 className="al-hero-title">
            <span className="al-line al-line-1">Když doma</span>
            <span className="al-line al-line-2">
              vypadne <em>proud</em>,
            </span>
            <span className="al-line al-line-3">voláte nám.</span>
          </h1>
          <p className="al-hero-lead">
            Elektroservis ALCOM opravuje spotřebiče a elektroinstalace v Karlových
            Varech od roku 1992. Přijedeme, změříme, opravíme — a cenu víte předem.
          </p>
          <div className="al-hero-actions">
            <a className="al-btn al-btn-primary" href="tel:+420353222411">
              Zavolat servis
            </a>
            <a className="al-btn al-btn-ghost" href="mailto:servis@alcomkv.cz">
              Napsat e‑mail
            </a>
          </div>
        </div>

        {/* Signature: schéma jednopólového obvodu — od jističe k zásuvce */}
        <div className="al-circuit" aria-hidden="true">
          <svg
            className="al-circuit-svg"
            viewBox="0 0 1200 190"
            preserveAspectRatio="xMidYMid meet"
            role="presentation"
            focusable="false"
          >
            {/* vodič */}
            <path
              className="al-wire"
              d="M0,95 H210 M290,95 H520 M600,95 H830 M910,95 H1200"
            />
            {/* jistič (přerušený spínač) */}
            <g className="al-sym">
              <circle cx="210" cy="95" r="7" />
              <line x1="214" y1="91" x2="284" y2="52" />
              <circle cx="290" cy="95" r="7" />
              <text x="250" y="150" className="al-sym-label">jistič B16</text>
            </g>
            {/* pojistka */}
            <g className="al-sym">
              <rect x="520" y="75" width="80" height="40" rx="4" />
              <line x1="520" y1="95" x2="600" y2="95" />
              <text x="560" y="150" className="al-sym-label">pojistka</text>
            </g>
            {/* žárovka */}
            <g className="al-sym">
              <circle cx="870" cy="95" r="40" />
              <line x1="842" y1="67" x2="898" y2="123" />
              <line x1="898" y1="67" x2="842" y2="123" />
              <text x="870" y="165" className="al-sym-label">světlo svítí</text>
            </g>
            {/* puls proudu */}
            <circle className="al-pulse" cx="0" cy="95" r="6" />
          </svg>
        </div>
      </header>

      {/* ================= SLUŽBY ================= */}
      <section className="al-sluzby" aria-labelledby="sluzby-h">
        <div className="al-section-head">
          <p className="al-eyebrow">Co pro vás uděláme</p>
          <h2 id="sluzby-h" className="al-h2">
            Čtyři okruhy naší práce
          </h2>
          <p className="al-section-lead">
            Jako v rozvaděči: každý okruh má svůj jistič. L1 až L3 jsou běžná
            práce na objednání, N je nouzový výjezd.
          </p>
        </div>

        <div className="al-sluzby-grid">
          {sluzby.map((s) => (
            <article className="al-karta" key={s.kod}>
              <div className="al-karta-head">
                <span className={"al-jistic" + (s.kod === "N" ? " al-jistic-n" : "")}>
                  {s.kod}
                </span>
                <span className="al-karta-stitek">{s.stitek}</span>
              </div>
              <h3 className="al-karta-nazev">{s.nazev}</h3>
              <p className="al-karta-popis">{s.popis}</p>
            </article>
          ))}
        </div>
      </section>

      {/* ================= DŮVĚRA ================= */}
      <section className="al-duvera" aria-labelledby="duvera-h">
        <div className="al-section-head">
          <p className="al-eyebrow al-eyebrow-invert">Proč ALCOM</p>
          <h2 id="duvera-h" className="al-h2 al-h2-invert">
            Třicet let pod napětím,
            <br />
            pořád stejná adresa
          </h2>
        </div>

        <dl className="al-duvody">
          {duvody.map((d) => (
            <div className="al-duvod" key={d.hodnota}>
              <dt className="al-duvod-hodnota">{d.hodnota}</dt>
              <dd className="al-duvod-text">{d.text}</dd>
            </div>
          ))}
        </dl>

        <div className="al-reference">
          {reference.map((r) => (
            <figure className="al-citace" key={r.jmeno}>
              <blockquote>
                <p>„{r.citace}“</p>
              </blockquote>
              <figcaption>— {r.jmeno}</figcaption>
            </figure>
          ))}
        </div>

        <p className="al-adresa">
          Dílnu najdete na adrese{" "}
          <strong>Západní 1401/63, 360 05 Karlovy Vary</strong> — kousek od
          Dolního nádraží. Zavolejte předem na{" "}
          <a href="tel:+420353222411">353 222 411</a> nebo napište na{" "}
          <a href="mailto:servis@alcomkv.cz">servis@alcomkv.cz</a>.
        </p>
      </section>
    </main>
  );
}
