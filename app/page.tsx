import type { CSSProperties } from "react";

const HERO_ROWS = 5;
const HERO_COLS = 6;

function heroTiles() {
  const tiles: { key: string; cls: string; style: CSSProperties; mark: boolean }[] = [];
  for (let r = 0; r < HERO_ROWS; r++) {
    for (let c = 0; c < HERO_COLS; c++) {
      const fromBottom = HERO_ROWS - 1 - r;
      const delay = fromBottom * 120 + c * 40;
      const kind = (r * 7 + c * 3) % 9;
      let cls = "htile t-green";
      if ((r + c) % 2 === 0) cls = "htile t-cobalt";
      if (kind === 4) cls = "htile t-iron";
      let mark = false;
      if (kind === 0) {
        cls = "htile t-ember";
        mark = true;
      }
      tiles.push({
        key: `${r}-${c}`,
        cls,
        style: { ["--d" as string]: `${delay}ms` } as CSSProperties,
        mark,
      });
    }
  }
  return tiles;
}

const services = [
  { no: "01", name: "Kachlová kamna", desc: "Akumulační teplo, které sálá dlouho do noci. Ručně skládaná z kachlů, jádro z šamotu." },
  { no: "02", name: "Kachlové sporáky", desc: "Vaření i topení v jednom. Litinové plotny a poctivé sporákové kování Řehulka." },
  { no: "03", name: "Krby klasické", desc: "Otevřený nebo prosklený oheň jako živé srdce obývacího pokoje." },
  { no: "04", name: "Krby teplovzdušné", desc: "Rychlé teplo rozvedené kanály do více místností v domě." },
  { no: "05", name: "Krby teplovodní", desc: "Přitápění do topné soustavy a ohřev užitkové vody z jednoho ohniště." },
  { no: "06", name: "Krby akumulační", desc: "Masivní šamotové jádro drží teplo hodiny po vyhasnutí." },
  { no: "07", name: "Zahradní krby a udírny", desc: "Gril, udírna a venkovní posezení pod širým nebem." },
  { no: "08", name: "Pece na chleba", desc: "Klenutá pec na domácí chleba, pizzu i pečené maso." },
  { no: "09", name: "Opravy a servis", desc: "Přespárování, výměna prasklých kachlů, záruční i pozáruční servis." },
  { no: "10", name: "Restaurování", desc: "Historickým kamnům vracíme původní krásu i funkci." },
];

const plaques = [
  { label: "Rok založení", value: "2003 — přes dvacet let u kamen" },
  { label: "Cech kamnářů ČR", value: "Řádný člen profesního sdružení" },
  { label: "Návrh na míru", value: "Individuální projekty a řešení na klíč" },
  { label: "Stavba na místě", value: "Každý kachel usazený vlastní rukou" },
  { label: "Materiály", value: "Šamot, glazované kachle, litinové kování" },
  { label: "Konzultace", value: "Poradenství i návrh zdarma, po celé ČR" },
];

export default function Page() {
  return (
    <main className="page">
      <section className="hero">
        <div className="wrap hero__grid">
          <div className="hero__lede">
            <div className="brand">
              <span className="brand__mark" aria-hidden="true">ZK</span>
              <span className="brand__name">
                Západočeské
                <br />
                <b>kamnářství</b>
              </span>
            </div>

            <p className="eyebrow">Cech kamnářů ČR · Mariánské Lázně · od roku 2003</p>

            <h1 className="hero__title">
              Každá kamna skládáme <span>kachel po kachli.</span>
            </h1>

            <p className="hero__sub">
              Kachlová kamna, sporáky, krby a pece na chleba stavíme na míru přímo u vás doma.
              Poctivé řemeslo na tuhá paliva ze západních Čech — stavíme po celé republice.
            </p>

            <dl className="hero__facts">
              <div>
                <dt>Postaveno</dt>
                <dd>stovky staveb</dd>
              </div>
              <div>
                <dt>Působíme</dt>
                <dd>po celé ČR</dd>
              </div>
              <div>
                <dt>První krok</dt>
                <dd>konzultace zdarma</dd>
              </div>
            </dl>
          </div>

          <div className="tilewall" aria-hidden="true">
            <div className="tilewall__grid">
              {heroTiles().map((t) => (
                <span key={t.key} className={t.cls} style={t.style}>
                  {t.mark ? <i className="htile__relief" /> : null}
                </span>
              ))}
            </div>
            <span className="tilewall__cap">Glazovaná stěna, kladená odspodu</span>
          </div>
        </div>
      </section>

      <section className="section services" aria-labelledby="svc-title">
        <div className="wrap">
          <header className="sec-head">
            <p className="eyebrow eyebrow--dark">Katalog řemesla</p>
            <h2 id="svc-title" className="sec-title">Co pro vás postavíme</h2>
            <p className="sec-intro">
              Každá položka je samostatná stavba na tuhá paliva — od návrhu přes výběr kachlů
              a šamotu až po usazení na místě. Vyberte, čím chcete v domě topit.
            </p>
          </header>

          <ul className="svc-grid">
            {services.map((s, i) => (
              <li key={s.no} className={`svc ${i % 2 ? "svc--cobalt" : "svc--green"}`}>
                <div className="svc__no">{s.no}</div>
                <div className="svc__plaque">
                  <h3 className="svc__name">{s.name}</h3>
                  <p className="svc__desc">{s.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section trust" aria-labelledby="trust-title">
        <div className="wrap trust__grid">
          <div className="trust__lede">
            <p className="eyebrow">O dílně</p>
            <h2 id="trust-title" className="sec-title sec-title--light">
              Řemeslo, na které se dá spolehnout
            </h2>
            <p className="trust__text">
              Kamnařině se věnujeme od roku 2003 a za tu dobu jsme postavili stovky krbů, kamen
              a sporáků. Jsme řádným členem Cechu kamnářů ČR — navrhujeme individuálně, stavíme
              poctivě a se smyslem pro detail. Topidlo skládáme kachel po kachli přímo u vás,
              z kvalitního šamotu a osvědčených komponent.
            </p>
            <p className="trust__addr">
              Dílna: Tyršova 303, Velká Hleďsebe · 353&nbsp;01 Mariánské Lázně 1
            </p>
          </div>

          <ul className="trust__plaques">
            {plaques.map((p) => (
              <li key={p.label} className="plaque">
                <span className="plaque__label">{p.label}</span>
                <span className="plaque__value">{p.value}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
