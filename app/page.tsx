const heroFields: [string, string][] = [
  ["Lokalita", "Ústí nad Labem"],
  ["Obor", "servis domácích elektrospotřebičů"],
  ["Záruka", "záruční i pozáruční opravy"],
  ["Telefon", "—"],
  ["E‑mail", "—"],
  ["Adresa", "—"],
];

type Service = {
  code: string;
  name: string;
  rows: [string, string][];
};

const services: Service[] = [
  {
    code: "SVC · PRA",
    name: "Automatické pračky",
    rows: [
      ["Závada", "neodčerpává, netočí, teče pod ni"],
      ["Úkon", "ložiska, čerpadla, elektronika, řemen"],
      ["Kde", "u vás doma i v dílně"],
    ],
  },
  {
    code: "SVC · MYC",
    name: "Myčky nádobí",
    rows: [
      ["Závada", "nemyje, nehřeje, hlásí chybový kód"],
      ["Úkon", "topné těleso, čerpadlo, těsnění, čidla"],
      ["Kde", "u vás doma"],
    ],
  },
  {
    code: "SVC · SPO",
    name: "Sporáky a trouby",
    rows: [
      ["Závada", "nehřeje, nejde zapnout, jiskří"],
      ["Úkon", "termostaty, spirály, přepínače, ventily"],
      ["Kde", "u vás doma"],
    ],
  },
  {
    code: "SVC · VAR",
    name: "Varné desky",
    rows: [
      ["Závada", "nehřejí zóny, praskliny, chybí ovládání"],
      ["Úkon", "indukce, sklokeramika, dotykové panely"],
      ["Kde", "u vás doma"],
    ],
  },
];

type Brand = { name: string; note: string };

const brands: Brand[] = [
  { name: "Whirlpool", note: "pračky, myčky, trouby" },
  { name: "Gorenje", note: "pračky, varné desky" },
  { name: "Ardo", note: "pračky, myčky" },
  { name: "Indesit", note: "pračky, myčky, sporáky" },
  { name: "Ariston", note: "sporáky, varné desky" },
];

function Wiring({ live = false }: { live?: boolean }) {
  return (
    <div className={live ? "wiring is-live" : "wiring"} aria-hidden="true">
      <span className="band live" />
      <span className="band neutral" />
      <span className="band earth" />
    </div>
  );
}

export default function Page() {
  return (
    <main className="page">
      <header className="hero">
        <div className="wrap">
          <article className="plate hero-plate">
            <div className="holes" aria-hidden="true" />
            <div className="plate-top">
              <span className="plate-code rise r1">TYPE PLATE · No. UL‑47</span>
              <span className="plate-code muted rise r1">rev. 2024</span>
            </div>

            <h1 className="wordmark rise r2">
              <span className="mark-name">TOLMAN</span>
              <span className="mark-sub">elektroservis · Ústí n. L.</span>
            </h1>

            <p className="hero-lede rise r3">
              Pračka neodčerpává, myčka nehřeje, sporák nejde zapnout?
              Přijedu, najdu závadu a spravím ji — u vás doma nebo v dílně.
            </p>

            <dl className="ratings hero-ratings rise r4">
              {heroFields.map(([k, v]) => (
                <div className="rating" key={k}>
                  <dt>{k}</dt>
                  <dd>{v}</dd>
                </div>
              ))}
              <div className="rating status">
                <dt>Stav</dt>
                <dd>
                  <span className="lamp is-live" aria-hidden="true" /> v provozu
                </dd>
              </div>
            </dl>
          </article>
        </div>
      </header>

      <Wiring live />

      <section className="band-sec" aria-labelledby="svc">
        <div className="wrap">
          <div className="sec-head">
            <span className="sec-tag">Sekce 01 — výrobní štítek služeb</span>
            <h2 id="svc" className="sec-title">Co spravím</h2>
            <p className="sec-note">
              Každý spotřebič má vzadu štítek s technickými daty. Tady jsou
              stejně čitelně vypsané opravy, které dělám.
            </p>
          </div>

          <div className="plate-grid">
            {services.map((s) => (
              <article className="plate" key={s.code}>
                <div className="holes" aria-hidden="true" />
                <div className="plate-top">
                  <span className="plate-code">{s.code}</span>
                </div>
                <h3 className="plate-title">{s.name}</h3>
                <dl className="ratings">
                  {s.rows.map(([k, v]) => (
                    <div className="rating" key={k}>
                      <dt>{k}</dt>
                      <dd>{v}</dd>
                    </div>
                  ))}
                </dl>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Wiring />

      <section className="band-sec" aria-labelledby="trust">
        <div className="wrap">
          <div className="sec-head">
            <span className="sec-tag">Sekce 02 — servisované značky</span>
            <h2 id="trust" className="sec-title">Značky, které znám</h2>
            <p className="sec-note">
              Roky spravuji tyhle výrobce, mám přehled o jejich slabých místech
              i o dílech. Když zavoláte, většinou hned vím, o co jde.
            </p>
          </div>

          <div className="brand-grid">
            {brands.map((b, i) => (
              <article className="plate brand-plate" key={b.name}>
                <div className="holes" aria-hidden="true" />
                <span className="plate-code">
                  MFR · {String(i + 1).padStart(2, "0")}
                </span>
                <span className="brand-name">{b.name}</span>
                <span className="brand-note">{b.note}</span>
              </article>
            ))}
          </div>

          <div className="about-plate plate">
            <div className="holes" aria-hidden="true" />
            <span className="plate-code">O ŘEMESLE · UL</span>
            <p className="about-text">
              Jmenuji se <strong>Luboš Tolman</strong> a servisu bílé techniky
              v Ústí nad Labem se věnuji dlouhá léta. Poctivě řeknu, jestli se
              oprava vyplatí, nebo je lepší spotřebič vyměnit — a montuji jen
              originální náhradní díly. Žádné skryté položky, cenu domluvíme
              předem.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
