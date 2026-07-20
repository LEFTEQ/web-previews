import type { ReactNode } from "react";

type Category = { name: string; desc: string };
type Stat = { value: string; label: string; note: string };
type Step = { n: string; title: string; desc: string };

const categories: Category[] = [
  { name: "Pletiva", desc: "Klasická na plot, lesnická i chovatelská — poplastovaná v mechové zeleni i pozinkovaná." },
  { name: "Panely a plotové díly", desc: "3D svařované panely tam, kde jde o pevnost a větší míru bezpečí." },
  { name: "Gabiony", desc: "Koše plněné kamenem — odolné, zároveň odhluční a odstíní pozemek." },
  { name: "Betonové ploty", desc: "Bezúdržbové a reprezentativní. Postaví se jednou, vydrží roky." },
  { name: "Plotovky", desc: "Dřevoplastové a bezúdržbové lamely v barvě podle fasády." },
  { name: "Brány a branky", desc: "Jednokřídlé, dvoukřídlé, posuvné i s pohonem — z vlastní kovovýroby." },
  { name: "Hliníkové a lamelové ploty", desc: "Moderní čistý design na míru pozemku i vjezdu." },
  { name: "Sloupky, vzpěry, podhrabové desky", desc: "Všechno k uchycení a montáži — zemní vruty bez kopání a betonování." },
];

const stats: Stat[] = [
  { value: "2012", label: "Na trhu od", note: "14 let stavíme ploty po celé republice" },
  { value: "7", label: "Poboček v ČR", note: "Showroomy a osobní odběr blízko vás" },
  { value: "2 241", label: "Plotů v roce 2025", note: "Letos už 1 344 hotových realizací" },
  { value: "0 Kč", label: "Kalkulace", note: "Nezávazný propočet plotu vždy zdarma" },
];

const steps: Step[] = [
  { n: "01", title: "Nezávazná kalkulace", desc: "Řeknete nám délku a typ plotu, spočítáme cenu materiálu i montáže. Zdarma." },
  { n: "02", title: "Zaměření a výběr", desc: "Přijedeme na pozemek, doporučíme materiál podle terénu i rozpočtu." },
  { n: "03", title: "Montáž na klíč", desc: "Osadíme sloupky, napneme pletivo, usadíme bránu. Po vás nezůstane nepořádek." },
  { n: "04", title: "Předání plotu", desc: "Hotový plot překontrolujeme společně s vámi a předáme k užívání." },
];

function PostCap(): ReactNode {
  return <span className="cap" aria-hidden="true" />;
}

export default function Page() {
  return (
    <main className="page">
      <section className="hero">
        <div className="hero__inner">
          <div className="brand">
            <span className="brand__kicker">Ploty · Pletiva · Brány</span>
            <span className="brand__mark">
              Dobrý <span className="brand__amp">&amp;</span> Urbánek
            </span>
            <span className="brand__loc">Ledce u Plzně — a po celé ČR</span>
          </div>

          <div className="hero__stage">
            <p className="ribbon">
              <span className="ribbon__tag">Sleva 10 %</span>
              kód <b>PRAZDNINY26</b> na celý sortiment i montáž na klíč · do 31.&nbsp;7.&nbsp;2026
            </p>

            <h1 className="hero__title">
              <span className="hero__line">Všechno ke stavbě</span>
              <span className="hero__line hero__line--accent">plotu na jednom místě</span>
            </h1>

            <p className="hero__lead">
              Pletiva, panely, gabiony, betonové ploty i brány. Poradíme, spočítáme
              a plot postavíme přesně podle vašich představ a rozpočtu — ať už si ho
              chcete postavit sami, nebo to necháte na nás.
            </p>

            <div className="hero__cta">
              <a className="btn btn--primary" href="#nabidka">Spočítat plot zdarma</a>
              <a className="btn btn--ghost" href="#nabidka">Poptat montáž na klíč</a>
            </div>

            <div className="hero__mesh" aria-hidden="true">
              <span className="hero__coil" />
            </div>
          </div>
        </div>
        <div className="seam" aria-hidden="true" />
      </section>

      <section className="band band--offer" id="nabidka">
        <div className="band__inner">
          <header className="band__head">
            <p className="eyebrow">Sortiment</p>
            <h2 className="band__title">Co u nás najdete</h2>
            <p className="band__intro">
              Prodáváme i montujeme. Každý typ oplocení má svoje místo — od levného
              pletiva na zahradu po reprezentativní betonový plot k domu.
            </p>
          </header>

          <div className="spans">
            {categories.map((c) => (
              <article className="span" key={c.name}>
                <PostCap />
                <PostCap />
                <h3 className="span__name">{c.name}</h3>
                <p className="span__desc">{c.desc}</p>
              </article>
            ))}
          </div>

          <p className="band__note">
            Nechcete řešit montáž sami? Postavíme vám plot na klíč po celé ČR —
            od kalkulace až po předání.
          </p>
        </div>
      </section>

      <section className="band band--trust" id="proc">
        <div className="band__inner">
          <header className="band__head">
            <p className="eyebrow eyebrow--light">Proč Dobrý &amp; Urbánek</p>
            <h2 className="band__title band__title--light">
              Ploty stavíme od roku 2012
            </h2>
            <p className="band__intro band__intro--light">
              Sídlíme v Ledcích u Plzně a showroomy máme na sedmi pobočkách po celé
              republice. Máme vlastní kovovýrobu, takže brány, branky i atypické díly
              vyrobíme přesně na míru vašemu vjezdu.
            </p>
          </header>

          <ul className="stats">
            {stats.map((s) => (
              <li className="stat" key={s.label}>
                <span className="stat__value">{s.value}</span>
                <span className="stat__label">{s.label}</span>
                <span className="stat__note">{s.note}</span>
              </li>
            ))}
          </ul>

          <div className="process">
            <p className="eyebrow eyebrow--light">Jak montáž na klíč probíhá</p>
            <ol className="steps">
              {steps.map((s) => (
                <li className="step" key={s.n}>
                  <span className="step__n">{s.n}</span>
                  <div className="step__body">
                    <h3 className="step__title">{s.title}</h3>
                    <p className="step__desc">{s.desc}</p>
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
