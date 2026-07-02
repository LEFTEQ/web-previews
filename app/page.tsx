const vzorky = [
  { name: "Dub přírodní", hex: "#b08d5e", note: "dýha" },
  { name: "Grafit mat", hex: "#3b3d40", note: "lak" },
  { name: "Bílá supermat", hex: "#eceae4", note: "lak" },
  { name: "Ořech americký", hex: "#6f4a30", note: "dýha" },
  { name: "Šalvěj", hex: "#8a9a84", note: "lak" },
  { name: "Terrazzo", hex: "#c9c2b6", note: "deska" },
];

const provedeni = [
  {
    tag: "Moderní",
    title: "Rovné linie, bezúchytková dvířka",
    desc: "Kuchyň, která nepřekáží. Vysoký lesk nebo supermat, skryté kování Blum, spotřebiče v jedné rovině s frontami. Nejčastější volba do pražských bytů a novostaveb.",
    detail: "od 180 000 Kč vč. montáže",
  },
  {
    tag: "Designová",
    title: "Lakovaná dvířka z naší lakovny",
    desc: "Dvířka lakujeme sami — proto umíme jakýkoli odstín a povrch, který jinde neseženete. Kombinace dýhy, laku a kamene přesně podle návrhu architekta nebo našeho návrháře.",
    detail: "od 260 000 Kč vč. montáže",
  },
  {
    tag: "Rustikální",
    title: "Profilovaná dvířka, poctivé dřevo",
    desc: "Frézované rámečky, patina, keramické úchytky. Rustikální kuchyň, která ale uvnitř skrývá moderní výsuvy a spotřebiče. Do chalupy i do městského bytu s duší.",
    detail: "od 220 000 Kč vč. montáže",
  },
];

const kroky = [
  {
    label: "Zaměření",
    text: "Přijedeme k vám, změříme prostor na milimetry a probereme, jak vaříte a co vám v současné kuchyni chybí.",
  },
  {
    label: "Návrh",
    text: "Do týdne dostanete 3D vizualizaci s přesnou cenou. Upravujeme, dokud nesedí — bez příplatků za změny.",
  },
  {
    label: "Lakovna",
    text: "Dvířka lakujeme ve vlastní lakovně. Každý kus kontrolujeme proti světlu, než ho pustíme dál.",
  },
  {
    label: "Výroba",
    text: "Korpusy, kování Blum, dorazy a tlumení — všechno sestavujeme v dílně, ne až u vás v obýváku.",
  },
  {
    label: "Montáž",
    text: "Naši montážníci, ne najatá parta. Kuchyň přivezeme, usadíme, zapojíme spotřebiče a uklidíme po sobě.",
  },
];

export default function Page() {
  return (
    <main className="gk">
      {/* ===== HERO ===== */}
      <header className="hero">
        <nav className="hero-nav" aria-label="Hlavní navigace">
          <span className="wordmark">
            Glanc<em>Kuchyně</em>
          </span>
          <a className="nav-tel" href="tel:+420775119118">
            775 119 118
          </a>
        </nav>

        <div className="hero-grid">
          <div className="hero-copy">
            <p className="hero-eyebrow">Český výrobce · vlastní lakovna · Praha 13</p>
            <h1 className="hero-title">
              <span className="line line-1">Kuchyň</span>
              <span className="line line-2">na milimetr</span>
              <span className="line line-3">
                <span className="stroke">přesně</span> pro váš byt
              </span>
            </h1>
            <p className="hero-sub">
              Navrhujeme, lakujeme a montujeme kuchyně na míru. Od zaměření po
              poslední dotažený pant — všechno vlastníma rukama, žádní subdodavatelé.
            </p>
            <div className="hero-actions">
              <a className="btn btn-solid" href="tel:+420775119118">
                Zavolat a domluvit zaměření
              </a>
              <a className="btn btn-ghost" href="#provedeni">
                Prohlédnout provedení
              </a>
            </div>
          </div>

          {/* Signature: vzorník dvířek z lakovny */}
          <aside className="vzornik" aria-label="Vzorník povrchů z naší lakovny">
            <p className="vzornik-head">Vzorník z lakovny</p>
            <ul className="vzornik-list">
              {vzorky.map((v, i) => (
                <li className="vzorek" key={v.name} style={{ ['--swatch' as string]: v.hex, ['--i' as string]: i }}>
                  <span className="vzorek-barva" aria-hidden="true" />
                  <span className="vzorek-name">{v.name}</span>
                  <span className="vzorek-note">{v.note}</span>
                </li>
              ))}
            </ul>
            <p className="vzornik-foot">…a dalších 200+ odstínů. Namícháme i podle vašeho vzorku.</p>
          </aside>
        </div>

        <div className="hero-rule" aria-hidden="true">
          <span>zaměření</span>
          <span>návrh</span>
          <span>lakovna</span>
          <span>výroba</span>
          <span>montáž</span>
        </div>
      </header>

      {/* ===== PROVEDENÍ ===== */}
      <section className="provedeni" id="provedeni" aria-labelledby="provedeni-h">
        <div className="section-head">
          <h2 id="provedeni-h">Tři provedení, jedna dílna</h2>
          <p>
            Každou kuchyň stavíme od nuly podle vašeho prostoru. Lišit se bude
            povrch, materiál a cena — kvalita kování a montáže je vždycky stejná.
          </p>
        </div>

        <div className="karty">
          {provedeni.map((p) => (
            <article className="karta" key={p.tag}>
              <p className="karta-tag">{p.tag}</p>
              <h3>{p.title}</h3>
              <p className="karta-desc">{p.desc}</p>
              <p className="karta-detail">{p.detail}</p>
            </article>
          ))}
        </div>

        <p className="provedeni-pozn">
          K&nbsp;tomu vestavěné skříně, šatny a obývací stěny ve stejném dekoru —
          aby kuchyň nekončila u dveří do obýváku.
        </p>
      </section>

      {/* ===== JAK PRACUJEME + DŮVĚRA ===== */}
      <section className="proces" aria-labelledby="proces-h">
        <div className="section-head section-head--dark">
          <h2 id="proces-h">Od zaměření po montáž — pět kroků</h2>
          <p>
            Rodinná firma Václava Duška vyrábí kuchyně přes dvacet let. Celou cestu
            máme ve vlastních rukou, proto ručíme za výsledek i termín.
          </p>
        </div>

        <ol className="kroky">
          {kroky.map((k, i) => (
            <li className="krok" key={k.label}>
              <span className="krok-cislo" aria-hidden="true">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3>{k.label}</h3>
              <p>{k.text}</p>
            </li>
          ))}
        </ol>

        <figure className="reference">
          <blockquote>
            „Na všem, na čem jsme se domluvili, bylo splněno do puntíku. Ryze česká
            firma — od studia přes lakovnu až po montážníky, kteří kuchyň přijeli
            fyzicky postavit. Na jedničku s hvězdičkou.“
          </blockquote>
          <figcaption>
            zákazník z Prahy, druhá kuchyň od Glanc Kuchyně
          </figcaption>
        </figure>
      </section>
    </main>
  );
}
