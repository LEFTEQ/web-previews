import { AiImage } from "./_ui";

export const metadata = {
  title: "HK Auto Velvary — autolakovna | věrný odstín, stálá barva",
  description:
    "Autolakovna ve Velvarech. Lakování osobních vozů i dodávek ve stříkacím boxu, vodou ředitelné ekologické laky, přesné míchání odstínu. Škrábance a rýhy opravíme i bez objednání.",
  openGraph: {
    title: "HK Auto Velvary — autolakovna",
    description:
      "Věrný odstín a stálá barva. Kompletní lakování, opravy laku, autoservis a leštění ve Velvarech.",
    locale: "cs_CZ",
    type: "website",
  },
};

const deck = [
  { code: "234F96", name: "metalíza", hex: "#234f96", light: false },
  { code: "E0B45F", name: "krycí uni", hex: "#e0b45f", light: true },
  { code: "CF2B1C", name: "signální", hex: "#cf2b1c", light: false },
  { code: "EEF1F5", name: "clearcoat", hex: "#eef1f5", light: true },
  { code: "9AA0A8", name: "primer", hex: "#9aa0a8", light: true },
  { code: "16181D", name: "struktura", hex: "#16181d", light: false },
];

const services = [
  {
    t: "Kompletní lakování",
    d: "Celý vůz namícháme na váš přesný odstín a nastříkáme ve stříkacím boxu — osobní vozy i dodávky.",
    chip: deck[0],
  },
  {
    t: "Opravy škrábanců a rýh",
    d: "Drobná poškození laku spravíme rychle, často i bez objednání. Bez přelakování celého dílu.",
    chip: deck[2],
  },
  {
    t: "Lakování jednotlivých dílů",
    d: "Nárazník, dveře, blatník i plastové a kovové díly — dorovnáme odstín ke zbytku karoserie.",
    chip: deck[1],
  },
  {
    t: "Karosářské práce",
    d: "Tmelení, broušení a zarovnání povrchu. Připravíme podklad tak, aby lak držel a nepraskal.",
    chip: deck[5],
  },
  {
    t: "Leštění a renovace laku",
    d: "Vrátíme lesk zašlému laku, odstraníme jemné oděrky a chráníme clearcoat proti povětrnosti.",
    chip: deck[3],
  },
  {
    t: "Diagnostika a odtah",
    d: "Posoudíme rozsah poškození a domluvíme postup. Nepojízdný vůz k nám dopraví odtahová služba.",
    chip: deck[4],
  },
];

const steps = [
  { n: "01", t: "Příprava a maskování", d: "Umytí, odmaštění a pečlivé zamaskování oken a lišt páskou." },
  { n: "02", t: "Tmelení a broušení", d: "Zarovnání povrchu a broušení do hladka, aby lak seděl bez vlnek." },
  { n: "03", t: "Základ / primer", d: "Nástřik základu, který drží barvu a chrání plech proti korozi." },
  { n: "04", t: "Barva na míru", d: "Namíchání odstínu podle kódu vozu a nástřik ve stříkacím boxu." },
  { n: "05", t: "Clearcoat a leštění", d: "Lesklý bezbarvý lak, vytvrzení a finální doleštění do hloubky." },
];

const recent = [
  { car: "Škoda Octavia", code: "234F96", name: "metalíza", hex: "#234f96" },
  { car: "Ford Transit", code: "EEF1F5", name: "bílá krycí", hex: "#eef1f5" },
  { car: "VW Golf", code: "CF2B1C", name: "signální červená", hex: "#cf2b1c" },
];

function Chip({ code, name, hex, light }: { code: string; name: string; hex: string; light?: boolean }) {
  return (
    <span className="chip" data-light={light ? "true" : undefined}>
      <span className="chip__swatch" style={{ background: hex }} aria-hidden="true" />
      <span className="chip__code">{code}</span>
      <span className="chip__dot" aria-hidden="true">·</span>
      <span className="chip__name">{name}</span>
    </span>
  );
}

export default function Page() {
  return (
    <main className="page">
      <div className="topbar">
        <div className="wrap topbar__inner">
          <a className="mark" href="#top" aria-label="HK Auto Velvary">
            <span className="mark__hk">HK</span>
            <span className="mark__rest">AUTO&nbsp;VELVARY</span>
            <span className="mark__tag">autolakovna</span>
          </a>
          <a className="topbar__call" href="tel:+420777111222">
            <span className="topbar__callLabel">Volejte</span>
            <span className="topbar__callNum">+420&nbsp;777&nbsp;111&nbsp;222</span>
          </a>
        </div>
      </div>

      <section className="hero" id="top" aria-labelledby="hero-h">
        <div className="wrap hero__grid">
          <div className="hero__copy">
            <p className="eyebrow">Autolakovna · Velvary</p>
            <h1 className="hero__h" id="hero-h">
              VĚRNÝ ODSTÍN,
              <br />
              KTERÝ VYDRŽÍ
            </h1>
            <p className="hero__lead">
              Lakujeme osobní vozy i dodávky ve stříkacím boxu — ekologickými, vodou ředitelnými
              laky. Barvu namícháme na přesný odstín vaší karoserie, aby díl nešel poznat od okolí.
            </p>
            <div className="hero__cta">
              <a className="btn btn--primary" href="tel:+420777111222">Zavolat lakovně</a>
              <a className="btn btn--ghost" href="#sluzby">Co u nás vyřídíte</a>
            </div>
          </div>

          <div className="hero__panel" role="img" aria-label="Panel karoserie po nástřiku metalízy odstínu 234F96">
            <div className="panel">
              <div className="panel__clearcoat">
                <span className="panel__code">234F96</span>
                <span className="panel__codeSub">metalíza · věrný odstín</span>
              </div>
              <div className="panel__primer" aria-hidden="true" />
              <div className="panel__sheen" aria-hidden="true" />
              <span className="panel__stamp" aria-hidden="true">SPRAY&nbsp;PASS</span>
            </div>
          </div>
        </div>
      </section>

      <div className="deck" aria-label="Vzorník odstínů">
        <div className="wrap deck__scroll">
          {deck.map((c) => (
            <Chip key={c.code} {...c} />
          ))}
          <span className="deck__note">míchání na kód vozu</span>
        </div>
      </div>

      <section className="band" id="sluzby" aria-labelledby="sluzby-h">
        <div className="wrap">
          <header className="band__head">
            <p className="eyebrow">Nabídka</p>
            <h2 className="band__h" id="sluzby-h">Co u nás vyřídíte</h2>
            <p className="band__sub">
              Od jednoho škrábance po celý vůz. Ke každé práci připojíme odstín, na kterém
              pracujeme — abyste věděli, jak přesně bude díl vypadat.
            </p>
          </header>

          <ul className="cards">
            {services.map((s) => (
              <li className="card" key={s.t}>
                <Chip {...s.chip} />
                <h3 className="card__t">{s.t}</h3>
                <p className="card__d">{s.d}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="band band--alt" id="postup" aria-labelledby="postup-h">
        <div className="wrap postup__grid">
          <div className="postup__flow">
            <header className="band__head">
              <p className="eyebrow">Jak lakujeme</p>
              <h2 className="band__h" id="postup-h">Cesta k věrnému odstínu</h2>
              <p className="band__sub">
                Barva drží jen tak dobře, jak dobrá je příprava pod ní. Proto jdeme krok za krokem —
                v tomhle pořadí, pokaždé.
              </p>
            </header>
            <ol className="steps">
              {steps.map((s) => (
                <li className="step" key={s.n}>
                  <span className="step__n">{s.n}</span>
                  <div>
                    <h3 className="step__t">{s.t}</h3>
                    <p className="step__d">{s.d}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <aside className="trust">
            <h3 className="trust__h">Proč k nám</h3>
            <ul className="trust__list">
              <li>Stříkací box a certifikované, vodou ředitelné laky.</li>
              <li>Odstín mícháme podle kódu vozu — stálá barva, věrný tón.</li>
              <li>Záruku dáváme podle typu a rozsahu opravy.</li>
              <li>Malé opravy laku často vyřídíme i bez objednání.</li>
            </ul>

            <p className="trust__label">Nedávno namíchané odstíny</p>
            <ul className="refs">
              {recent.map((r) => (
                <li className="ref" key={r.car}>
                  <span className="ref__swatch" style={{ background: r.hex }} aria-hidden="true" />
                  <span className="ref__car">{r.car}</span>
                  <span className="ref__code">{r.code} · {r.name}</span>
                </li>
              ))}
            </ul>

            <address className="trust__addr">
              HK Auto Velvary s.r.o.
              <br />
              Ukázková 123, 273 24 Velvary
              <br />
              <a href="tel:+420777111222">+420 777 111 222</a>
              {" · "}
              <a href="mailto:info@example.cz">info@example.cz</a>
            </address>
          </aside>
        </div>
      </section>
    </main>
  );
}
