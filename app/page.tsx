import { AiImage } from "./_ui";

const sortiment = [
  {
    group: "Suchá stavba",
    note: "desky · konstrukce · příčky",
    rows: [
      { name: "Sádrokartonová deska standard 12,5 mm", price: "89 Kč/m²" },
      { name: "Impregnovaná deska do koupelen 12,5 mm", price: "129 Kč/m²" },
      { name: "Protipožární deska 15 mm", price: "165 Kč/m²", tag: "AKCE" },
    ],
  },
  {
    group: "Profily a příslušenství",
    note: "pozinkovaná ocel · CW / UW / CD / UD",
    rows: [
      { name: "Profil CW 50 / UW 50, pozinkovaný", price: "od 42 Kč/bm" },
      { name: "Stropní profil CD 60 / UD 27", price: "od 38 Kč/bm" },
      { name: "Rychlošrouby, spojky, závěsy", price: "dle balení" },
    ],
  },
  {
    group: "Izolace",
    note: "tepelné · technické · průmyslové",
    rows: [
      { name: "Rockwool minerální izolace 50 mm", price: "145 Kč/m²", tag: "VÝPRODEJ" },
      { name: "Izolační pouzdro potrubí", price: "dle rozměru" },
      { name: "Tepelná izolace fasád", price: "na dotaz" },
    ],
  },
  {
    group: "Stavební chemie a nářadí",
    note: "tmely · penetrace · ruční nářadí",
    rows: [
      { name: "Sádrový tmel na spáry 25 kg", price: "349 Kč" },
      { name: "Penetrace hloubková 5 l", price: "289 Kč" },
      { name: "Míchadlo, hladítka, řezáky", price: "skladem" },
    ],
  },
];

const duvody = [
  { n: "01", t: "Vše pod jednou střechou", d: "Desky, profily, izolace i chemie na suchou stavbu — jeden vozík, jedna faktura." },
  { n: "02", t: "Naložíme hned", d: "Velké zásoby skladem. Nečekáte na objednávku, berete si materiál rovnou z regálu." },
  { n: "03", t: "Poradí vám řemeslníci", d: "Za pultem lidé, kteří sádrokarton sami stavěli. Poradí profil i skladbu stěny." },
  { n: "04", t: "Doprava na stavbu", d: "Materiál dovezeme po celé Praze až na místo — i patra a paletu navíc." },
  { n: "05", t: "Specialisté na izolace", d: "Technické a průmyslové izolace jsou náš obor, ne jen položka v ceníku." },
  { n: "06", t: "Slevy pro firmy", d: "Množstevní ceny pro řemeslníky i stavební firmy. Čím víc berete, tím líp." },
];

export default function Page() {
  return (
    <main className="page">
      <header className="topbar">
        <a className="brand" href="#top" aria-label="DARTE – suchá stavba Praha">
          <span className="brand__stud" aria-hidden="true">[</span>
          <span className="brand__name">DARTE</span>
          <span className="brand__meta">suchá stavba · Praha</span>
        </a>
        <span className="topbar__since">Od roku 1994 — 31 let na stavbách</span>
      </header>

      {/* BAND 1 — gypsum face */}
      <section className="band band--gypsum" id="top">
        <div className="band__inner hero">
          <div className="hero__text">
            <p className="eyebrow">Sádrokartonář · Praha 9 Vysočany</p>
            <h1 className="frame display display--xl">
              Suchá stavba<br />od prvního profilu<br />po poslední stěrku.
            </h1>
            <p className="lede">
              Sádrokarton, pozinkované profily, izolace Rockwool a stavební chemie —
              skladem a připraveno naložit. Prodejny Vysočany, Smíchov a Prostějov.
            </p>
            <a className="btn" href="#sortiment">Prohlédnout sortiment</a>
          </div>
          <div className="hero__media">
            <AiImage src="/hero.webp" alt="Sádrokartonová konstrukce s pozinkovanými profily na stavbě" className="media" />
          </div>
        </div>
      </section>

      {/* BAND 2 — kraft edge */}
      <section className="band band--kraft" id="sortiment">
        <div className="band__line" aria-hidden="true" />
        <div className="band__inner mount">
          <div className="section-head">
            <p className="eyebrow eyebrow--light">Vrstva 02 — kraftový obal</p>
            <h2 className="frame display">Sortiment a ceny</h2>
            <p className="lede lede--light">
              Spec-sheet, ne katalog. Orientační ceny bez DPH — aktuální ceník vždy visí na prodejně.
            </p>
          </div>

          <div className="sortiment">
            <div className="sortiment__media">
              <AiImage src="/section-1.webp" alt="Regály se sádrokartonovými deskami a profily v prodejně stavebnin" className="media" />
            </div>
            <div className="pricelist">
              {sortiment.map((g) => (
                <div className="pricegroup" key={g.group}>
                  <div className="pricegroup__head">
                    <h3 className="pricegroup__title">{g.group}</h3>
                    <span className="pricegroup__note">{g.note}</span>
                  </div>
                  <ul className="rows">
                    {g.rows.map((r) => (
                      <li className="row" key={r.name}>
                        <span className="row__name">
                          {r.name}
                          {r.tag ? <span className="tag" data-kind={r.tag}>{r.tag}</span> : null}
                        </span>
                        <span className="row__price">{r.price}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* BAND 3 — stone-wool core */}
      <section className="band band--stonewool" id="duvody">
        <div className="band__line" aria-hidden="true" />
        <div className="band__inner mount">
          <div className="section-head">
            <p className="eyebrow eyebrow--light">Vrstva 03 — izolační jádro</p>
            <h2 className="frame display">6 důvodů pro DARTE</h2>
            <p className="lede lede--light">
              Proč si řemeslníci vozí materiál od nás už 31 let.
            </p>
          </div>

          <div className="about">
            <div className="about__media">
              <AiImage src="/section-2.webp" alt="Skladník nakládá izolaci a sádrokartonové desky ve skladu DARTE" className="media" />
              <dl className="stats">
                <div className="stat"><dt>Na stavbách</dt><dd>31 let</dd></div>
                <div className="stat"><dt>Prodejny</dt><dd>3</dd></div>
                <div className="stat"><dt>Domů</dt><dd>Vysočany</dd></div>
              </dl>
            </div>

            <ol className="reasons">
              {duvody.map((r) => (
                <li className="reason" key={r.n}>
                  <span className="reason__n frame frame--tight">{r.n}</span>
                  <div className="reason__body">
                    <h3 className="reason__title">{r.t}</h3>
                    <p className="reason__text">{r.d}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>
    </main>
  );
}
