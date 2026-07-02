// MUSKOX s.r.o. — stříkané izolace, České Budějovice
// Koncept: „Vrstva, která drží teplo." Signature prvek = expandující pěna
// vykreslená jako organický vrstevnicový obrazec (SVG), odvozený z reálného
// řemesla — PUR pěna expanduje a vyplní každou spáru. Paleta: hluboká
// arktická modř (tundra, mráz) proti teplé pěnové žluti (izolační PUR pěna).

const sluzby = [
  {
    tag: "Měkká PUR pěna",
    nazev: "Zateplení střech a podkroví",
    popis:
      "Měkkou stříkanou pěnu naneseme přímo mezi krovy. Expanduje na několikanásobek objemu a vyplní každou spáru i skulinu — vznikne jedna souvislá vrstva bez tepelných mostů. Funguje zároveň jako zvuková izolace.",
    hodnota: "λ 0,037",
    jednotka: "W/m·K — součinitel tepelné vodivosti",
  },
  {
    tag: "Tvrdá PUR pěna",
    nazev: "Izolace plochých střech a stropů",
    popis:
      "Tvrdá pěna s uzavřenou buněčnou strukturou drží tvar, unese pochozí zatížení a nenasákne vodu. Ideální pro ploché střechy, stropy garáží a průmyslové haly v okolí Budějovic.",
    hodnota: "≥ 90 %",
    jednotka: "uzavřených buněk — nenasákavá struktura",
  },
  {
    tag: "Polyurea / Desmopol",
    nazev: "Hydroizolace bez jediného spoje",
    popis:
      "Stříkaná polyurea vytvoří bezešvou membránu na střeše, terase i v jímce. Žádné pásy, žádné svary, žádná slabá místa. Vytvrdne během několika sekund, po pár hodinách je pochozí.",
    hodnota: "~ 6 s",
    jednotka: "do vytvrzení nástřiku polyurey",
  },
  {
    tag: "Betonové podlahy",
    nazev: "Lité podlahy na izolační vrstvu",
    popis:
      "Na tvrdou pěnu navážeme betonovou podlahou — jedna parta, jedna odpovědnost. Rovina hlídaná laserem, podlaha připravená na finální krytinu.",
    hodnota: "1 firma",
    jednotka: "izolace i podlaha od jedné party",
  },
];

const reference = [
  {
    text: "Tým pana Macury mohu jen a jen doporučit! Jeden z nejlepších týmů, který se v našem bytě vystřídal. Perfektně odvedená práce, dochvilnost, skvělá komunikace — nad svou prací přemýšlí.",
    jmeno: "Veronika Čapková",
    misto: "Lišov",
  },
  {
    text: "Kluci mi dělali na baráku jak stříkanou izolaci, tak i betonové podlahy. Šikovní, rychlí a ochotní.",
    jmeno: "Jan Komárek",
    misto: "České Budějovice",
  },
  {
    text: "Pánové po sobě vše precizně uklidili a na díle jsem nenašel jedinou chybu. Velice kvalitní práce a vše podle domluvy.",
    jmeno: "Milan Tomek",
    misto: "Borovany",
  },
  {
    text: "Při zaslání poptávky rychlá odezva formou nabídky, práce odvedená tak, jak jsme byli domluveni.",
    jmeno: "František Perník",
    misto: "Kamenný Újezd",
  },
];

function PenaVrstvy({ className }: { className?: string }) {
  // Signature: expandující pěna jako soustava organických vrstev —
  // každá další křivka „nabobtnává" směrem ven, jako PUR pěna při aplikaci.
  return (
    <svg
      className={className}
      viewBox="0 0 720 720"
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      <path
        className="mx-vrstva mx-v1"
        d="M360 560c-38 0-64-18-88-18s-46 22-84 10-52-46-78-58-62-4-74-44 22-64 22-96-32-58-14-94 60-30 82-56 18-66 56-80 66 16 100 16 64-30 100-14 34 56 58 80 66 22 80 60-20 62-18 94 36 60 18 96-64 26-88 42-34 62-72 62z"
        transform="translate(360 360) scale(0.34) translate(-360 -360)"
      />
      <path
        className="mx-vrstva mx-v2"
        d="M360 560c-38 0-64-18-88-18s-46 22-84 10-52-46-78-58-62-4-74-44 22-64 22-96-32-58-14-94 60-30 82-56 18-66 56-80 66 16 100 16 64-30 100-14 34 56 58 80 66 22 80 60-20 62-18 94 36 60 18 96-64 26-88 42-34 62-72 62z"
        transform="translate(360 360) scale(0.52) rotate(18) translate(-360 -360)"
      />
      <path
        className="mx-vrstva mx-v3"
        d="M360 560c-38 0-64-18-88-18s-46 22-84 10-52-46-78-58-62-4-74-44 22-64 22-96-32-58-14-94 60-30 82-56 18-66 56-80 66 16 100 16 64-30 100-14 34 56 58 80 66 22 80 60-20 62-18 94 36 60 18 96-64 26-88 42-34 62-72 62z"
        transform="translate(360 360) scale(0.70) rotate(-14) translate(-360 -360)"
      />
      <path
        className="mx-vrstva mx-v4"
        d="M360 560c-38 0-64-18-88-18s-46 22-84 10-52-46-78-58-62-4-74-44 22-64 22-96-32-58-14-94 60-30 82-56 18-66 56-80 66 16 100 16 64-30 100-14 34 56 58 80 66 22 80 60-20 62-18 94 36 60 18 96-64 26-88 42-34 62-72 62z"
        transform="translate(360 360) scale(0.88) rotate(9) translate(-360 -360)"
      />
      <path
        className="mx-vrstva mx-v5"
        d="M360 560c-38 0-64-18-88-18s-46 22-84 10-52-46-78-58-62-4-74-44 22-64 22-96-32-58-14-94 60-30 82-56 18-66 56-80 66 16 100 16 64-30 100-14 34 56 58 80 66 22 80 60-20 62-18 94 36 60 18 96-64 26-88 42-34 62-72 62z"
        transform="translate(360 360) scale(1.06) rotate(-6) translate(-360 -360)"
      />
    </svg>
  );
}

export default function Page() {
  return (
    <main className="mx">
      {/* ============ HERO ============ */}
      <section className="mx-hero" aria-label="Muskox — stříkané izolace">
        <header className="mx-topbar">
          <div className="mx-wordmark">
            <span className="mx-wordmark-main">MUSKOX</span>
            <span className="mx-wordmark-sub">stříkané izolace · České Budějovice</span>
          </div>
          <a className="mx-tel" href="tel:+420606245454">
            +420 606 245 454
          </a>
        </header>

        <div className="mx-hero-grid">
          <div className="mx-hero-text">
            <p className="mx-eyebrow mx-fade mx-d1">
              Pižmoň přežije v tundře. Váš dům přežije českou zimu.
            </p>
            <h1 className="mx-h1">
              <span className="mx-h1-line mx-fade mx-d2">Jedna souvislá</span>
              <span className="mx-h1-line mx-h1-accent mx-fade mx-d3">vrstva pěny.</span>
              <span className="mx-h1-line mx-fade mx-d4">Nula tepelných mostů.</span>
            </h1>
            <p className="mx-perex mx-fade mx-d5">
              Stříkaná PUR pěna expanduje na místě a vyplní každou spáru,
              kterou by běžná vata minula. Zateplujeme střechy, podkroví
              a stropy na jihu Čech — a ručíme za to, že v zimě neutíká
              teplo ven a v létě horko dovnitř.
            </p>
            <div className="mx-hero-akce mx-fade mx-d6">
              <a className="mx-btn" href="tel:+420606245454">
                Zavolat a domluvit kalkulaci
              </a>
              <a className="mx-btn-ghost" href="mailto:info@muskox.cz">
                Napsat na info@muskox.cz
              </a>
            </div>
            <dl className="mx-hero-fakta mx-fade mx-d7">
              <div>
                <dt>Expanze pěny</dt>
                <dd>až 100×</dd>
              </div>
              <div>
                <dt>Aplikace střechy</dt>
                <dd>1–2 dny</dd>
              </div>
              <div>
                <dt>Působíme</dt>
                <dd>jižní Čechy</dd>
              </div>
            </dl>
          </div>

          <div className="mx-hero-vizual" aria-hidden="true">
            <PenaVrstvy className="mx-pena" />
            <p className="mx-vizual-popisek">
              Pěna expanduje ve vrstvách,<br />dokud nezacelí každou spáru.
            </p>
          </div>
        </div>
      </section>

      {/* ============ SLUŽBY ============ */}
      <section className="mx-sluzby" aria-labelledby="sluzby-nadpis">
        <div className="mx-sekce-hlava">
          <p className="mx-eyebrow">Co pro vás nastříkáme</p>
          <h2 className="mx-h2" id="sluzby-nadpis">
            Čtyři materiály, jedno řemeslo
          </h2>
          <p className="mx-sekce-perex">
            Každá zakázka začíná obhlídkou a kalkulací zdarma. Podle
            konstrukce vám doporučíme materiál — a řekneme na rovinu,
            když se stříkaná izolace pro váš dům nehodí.
          </p>
        </div>

        <div className="mx-sluzby-mriz">
          {sluzby.map((s) => (
            <article className="mx-karta" key={s.nazev}>
              <p className="mx-karta-tag">{s.tag}</p>
              <h3 className="mx-karta-nazev">{s.nazev}</h3>
              <p className="mx-karta-popis">{s.popis}</p>
              <p className="mx-karta-cislo">
                <strong>{s.hodnota}</strong>
                <span>{s.jednotka}</span>
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* ============ DŮVĚRA / REFERENCE ============ */}
      <section className="mx-duvera" aria-labelledby="duvera-nadpis">
        <div className="mx-duvera-uvod">
          <p className="mx-eyebrow mx-eyebrow-svetly">Proč Muskox</p>
          <h2 className="mx-h2 mx-h2-svetly" id="duvera-nadpis">
            Pižmoň vzdoruje ledovým vichrům tundry.{" "}
            <span className="mx-zluta">Stejnou odolnost stříkáme na váš dům.</span>
          </h2>
          <p className="mx-duvera-perex">
            Jsme parta z Českých Budějovic vedená panem Macurou. Nestavíme
            na subdodávkách — stříkáme sami, uklidíme po sobě a přijedeme,
            i když jde jen o podkroví rodinného domu ve Volarech nebo
            v Borovanech.
          </p>
        </div>

        <ul className="mx-reference" aria-label="Reference zákazníků">
          {reference.map((r) => (
            <li className="mx-ref" key={r.jmeno}>
              <blockquote>
                <p className="mx-ref-text">„{r.text}“</p>
                <footer className="mx-ref-autor">
                  <span className="mx-ref-jmeno">{r.jmeno}</span>
                  <span className="mx-ref-misto">{r.misto}</span>
                </footer>
              </blockquote>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
