import React from "react";

// --- Signature: field-guide contour rings drawn from CHKO Blanský les ---
function contourPath(cx: number, cy: number, r: number, wobble: number, seed: number): string {
  const pts = 30;
  let d = "";
  for (let i = 0; i <= pts; i++) {
    const a = (i / pts) * Math.PI * 2;
    const rr =
      r +
      Math.sin(a * 3 + seed) * wobble +
      Math.cos(a * 2 + seed * 1.7) * wobble * 0.55 +
      Math.sin(a * 5 + seed * 0.5) * wobble * 0.25;
    const x = cx + Math.cos(a) * rr;
    const y = cy + Math.sin(a) * rr * 0.82;
    d += (i === 0 ? "M" : "L") + x.toFixed(1) + " " + y.toFixed(1);
  }
  return d + "Z";
}

function Contour({ rings, seed, cx = 60, cy = 50, max = 40, base = 8, className }: { rings: number; seed: number; cx?: number; cy?: number; max?: number; base?: number; className?: string; }) {
  const paths: string[] = [];
  for (let i = 0; i < rings; i++) {
    const r = base + (i * (max - base)) / (rings - 1);
    paths.push(contourPath(cx, cy, r, 3.2 - i * 0.28, seed + i * 0.7));
  }
  return (
    <svg className={className} viewBox="0 0 120 100" aria-hidden="true" preserveAspectRatio="xMidYMid meet">
      {paths.map((d, i) => (
        <path key={i} d={d} pathLength={1} vectorEffect="non-scaling-stroke" style={{ ["--i" as string]: i } as React.CSSProperties} />
      ))}
    </svg>
  );
}

const SPECIMENS = [
  { n: "01", name: "Obytné vozy", code: "Sektor A–D", desc: "Rovná stání od 120 m² s přípojkou na 220 V. Zajedete, vyrovnáte, natáhnete markýzu — a koukáte na rybník.", specs: ["od 120 m²", "přípojka 220 V", "voda i odpad poblíž"], seed: 1.0 },
  { n: "02", name: "Karavany", code: "Sektor A–D", desc: "Prostorná parcela pro karavan s autem hned vedle. Vlastní kus louky, kolem dokola stromy a klid.", specs: ["od 120 m²", "přípojka 220 V", "parkování u karavanu"], seed: 2.3 },
  { n: "03", name: "Stany", code: "Sektor „S“", desc: "Měkká tráva ve stinném sektoru. Pár míst je schválně bez elektřiny — pro ty, co jedou úplně vypnout.", specs: ["od 120 m²", "stín a klid", "volitelně bez přípojky"], seed: 3.6 },
  { n: "04", name: "Chatka TinyHouse", code: "2 kusy · skandi styl", desc: "Útulná dřevěná chatka pro čtyřčlennou rodinu. Vlastní sprcha a WC, kuchyňský koutek s ledničkou, venku gril pod stíněním.", specs: ["4 lůžka", "sprcha + WC", "kuchyňka + gril"], seed: 4.9 },
  { n: "05", name: "Bungalow stan", code: "Plně vybavený", desc: "Luxusní stan s pěti postelemi, kde se dá vařit i grilovat. Auto zaparkujete přímo vedle stanu.", specs: ["5 lůžek", "vaření i gril", "parkování u stanu"], seed: 6.2 },
];

const AMENITIES = [
  { t: "Bazén se slanou vodou", d: "Vyhřívaný bazén 10 × 20 m bez chloru. Když je horko, skočíte i do rybníka přímo v kempu." },
  { t: "Denní program pro děti", d: "Krmení zvířátek v mini ZOO, táborák, pečení housek, noční strašidelný les i hra o přežití." },
  { t: "Garden Bistro", d: "Ráno čerstvé křupavé pečivo a káva, přes den snídaně, obědy i večeře. České pivo a zmrzlina samozřejmě." },
  { t: "Hřiště a stodola", d: "Tři dětská hřiště, plážový volejbal, dva ping-pongové stoly, odhlučněná klubovna a pec na pizzu." },
  { t: "Prádelna a zázemí", d: "Pračky, sušička, teplá voda, dřezy na nádobí i výlevka pro chemická WC. Čisté sociální zařízení." },
  { t: "Výlety z brány kempu", d: "Rafting a sjíždění řeky, rodinné cyklostezky jižních Čech a výhled na horu Kleť." },
];

export default function Page() {
  return (
    <main className="cc-page">
      {/* ---------------- HERO ---------------- */}
      <header className="cc-hero">
        <div className="cc-hero-field" aria-hidden="true">
          <Contour className="cc-hero-contour" rings={9} seed={2.1} cx={78} cy={46} max={54} base={6} />
        </div>

        <div className="cc-hero-inner">
          <p className="cc-eyebrow"><span className="cc-eyebrow-mark" /> Rodinný kemp · CHKO Blanský les</p>

          <h1 className="cc-wordmark">
            <span className="cc-wordmark-1">Camping</span>
            <span className="cc-wordmark-2">Chvalšiny</span>
          </h1>

          <p className="cc-lede">
            Útulný kemp na okraji Chvalšin, kousek od Českého Krumlova. Okolo 150 míst pro karavany,
            obytné vozy i stany — a bazén se slanou vodou, když udeří léto.
          </p>

          <ul className="cc-facts">
            <li><b>~150</b> míst v přírodě</li>
            <li><b>10×20 m</b> bazén, slaná voda</li>
            <li><b>Kleť</b> na dohled</li>
          </ul>

          <div className="cc-chip">
            <span className="cc-chip-ring" aria-hidden="true">
              <Contour rings={5} seed={5.5} cx={60} cy={50} max={38} base={9} />
            </span>
            <span className="cc-chip-text">
              <span className="cc-chip-kicker">ACSI · ocenění</span>
              <span className="cc-chip-title">Nejlepší kemp ČR 2025</span>
            </span>
          </div>
        </div>
      </header>

      {/* ---------------- SECTION 1 — UBYTOVÁNÍ (craft-catalog) ---------------- */}
      <section className="cc-section cc-catalog" aria-labelledby="cc-cat-title">
        <div className="cc-shell">
          <div className="cc-label">
            <span className="cc-label-text">Kde přespat</span>
            <Contour className="cc-label-rule" rings={3} seed={1.4} cx={60} cy={50} max={30} base={12} />
          </div>
          <h2 id="cc-cat-title" className="cc-h2">Pět druhů noclehu, každý jako vlastní specimen z terénního atlasu.</h2>
          <p className="cc-intro">
            Vyberte si parcelu pro vlastní karavan nebo se jen ubytujte v hotovém — chatce, karavanu
            i luxusním stanu. Zrušení rezervace je vždy zdarma.
          </p>

          <ol className="cc-grid">
            {SPECIMENS.map((s) => (
              <li key={s.n} className="cc-card">
                <div className="cc-card-top">
                  <span className="cc-stamp">{s.n}</span>
                  <Contour className="cc-thumb" rings={6} seed={s.seed} cx={60} cy={50} max={42} base={7} />
                </div>
                <p className="cc-card-code">{s.code}</p>
                <h3 className="cc-card-name">{s.name}</h3>
                <p className="cc-card-desc">{s.desc}</p>
                <ul className="cc-specs">
                  {s.specs.map((sp) => <li key={sp}>{sp}</li>)}
                </ul>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ---------------- SECTION 2 — V KEMPU (trust) ---------------- */}
      <section className="cc-section cc-trust" aria-labelledby="cc-trust-title">
        <div className="cc-shell">
          <div className="cc-label cc-label--light">
            <span className="cc-label-text">V kempu</span>
            <Contour className="cc-label-rule" rings={3} seed={4.2} cx={60} cy={50} max={30} base={12} />
          </div>

          <div className="cc-trust-head">
            <h2 id="cc-trust-title" className="cc-h2 cc-h2--light">
              Kemp, který ACSI označilo za nejlepší v Česku — a děti to poznají první.
            </h2>
            <blockquote className="cc-motto">
              „Baví-li se děti, baví se i rodiče.“
              <cite>— motto kempu Chvalšiny</cite>
            </blockquote>
          </div>

          <div className="cc-amen">
            {AMENITIES.map((a) => (
              <article key={a.t} className="cc-amen-item">
                <span className="cc-amen-mark" aria-hidden="true" />
                <h3 className="cc-amen-title">{a.t}</h3>
                <p className="cc-amen-desc">{a.d}</p>
              </article>
            ))}
          </div>

          <p className="cc-place">
            Chvalšiny u Českého Krumlova, který je od roku 1992 na seznamu světového dědictví UNESCO.
            Ležíme na okraji chráněné krajinné oblasti Blanský les — les, rybník a hora Kleť rovnou za plotem.
          </p>
        </div>
      </section>
    </main>
  );
}
