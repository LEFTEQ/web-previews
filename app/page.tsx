import { AiImage } from "./_ui";
import { Tally } from "./motion";

const sluzby = [
  { name: "Daňové přiznání k dani z příjmů", od: true, amt: "2 500" },
  { name: "Kompletní vedení účetnictví (měsíčně)", od: true, amt: "3 900" },
  { name: "Zpracování a evidence mezd (za zaměstnance)", od: false, amt: "250" },
  { name: "Přiznání a kontrolní hlášení k DPH", od: true, amt: "900" },
  { name: "Zastupování před finančním úřadem (hodina)", od: false, amt: "1 200" },
  { name: "Roční účetní závěrka a inventarizace", od: true, amt: "6 500" },
];

const reference = [
  {
    text: "Přiznání máme každý rok hotové v půlce března a bez jediné výzvy k doplnění.",
    who: "Jana Kolářová",
    firm: "kavárna Na Rynku, České Budějovice",
  },
  {
    text: "Přešli jsme na měsíční účetnictví a poprvé přesně vidíme, kde nám peníze utíkají.",
    who: "Martin Doležal",
    firm: "Truhlářství Doležal, Rudolfov",
  },
  {
    text: "Zastoupili nás při kontrole DPH — na úřad jsme nemuseli ani jednou.",
    who: "Petra Švecová",
    firm: "e-shop Ušatý svět",
  },
];

export default function Page() {
  return (
    <main>
      {/* HERO — typografický „součet do černých čísel" */}
      <header className="hero">
        <div className="hero__grid" aria-hidden="true" />
        <div className="container hero__inner">
          <p className="eyebrow">Daňový poradce — České Budějovice</p>
          <h1 className="wordmark">
            BEST
            <span className="wordmark__sub">daňová a účetní · spol. s r. o.</span>
          </h1>
          <p className="hero__lede">
            Účetnictví a daně, které vždycky vyjdou na správný řádek. Vaše čísla
            sčítáme do černých — přesně, včas a bez penále.
          </p>

          <div className="tally">
            <span className="tally__spine" aria-hidden="true" />
            <dl className="tally__cols">
              <div className="tally__col">
                <dt className="tally__num">
                  <Tally value={27} />
                </dt>
                <dd className="tally__label">let v praxi</dd>
              </div>
              <div className="tally__col">
                <dt className="tally__num">
                  <Tally value={310} />
                </dt>
                <dd className="tally__label">klientů v kraji</dd>
              </div>
              <div className="tally__col">
                <dt className="tally__num tally__num--green">
                  <Tally value={0} /> Kč
                </dt>
                <dd className="tally__label">na penále a pokutách</dd>
              </div>
            </dl>
            <span className="tally__rule" aria-hidden="true" />
            <p className="tally__caption">bilance k dnešnímu dni · v černých číslech</p>
          </div>

          <a className="btn" href="tel:+420777111222">
            Zavolat +420 777 111 222
          </a>
        </div>
      </header>

      {/* SEKCE 1 — Služby a ceník jako účetní kniha */}
      <section className="section section--paper" aria-labelledby="sluzby-h">
        <div className="container">
          <p className="eyebrow eyebrow--ink">Nabídka a orientační ceník</p>
          <h2 id="sluzby-h" className="h2">Položky, které za vás zaúčtujeme</h2>

          <div className="svc">
            <div className="svc__media">
              <AiImage
                src="/section-1.webp"
                alt="Pracovní stůl daňové kanceláře BEST s účetní knihou a doklady"
                className="svc__img"
              />
            </div>

            <div className="ledger">
              <ul className="ledger__list">
                {sluzby.map((s, i) => (
                  <li className="ledger__row" key={s.name}>
                    <span className="ledger__no">{String(i + 1).padStart(2, "0")}</span>
                    <span className="ledger__name">{s.name}</span>
                    <span className="ledger__price">
                      {s.od && <span className="ledger__od">od</span>}
                      <span className="ledger__amt">{s.amt}</span>
                      <span className="ledger__cur">Kč</span>
                    </span>
                  </li>
                ))}
              </ul>
              <div className="ledger__total">
                <span className="ledger__no" aria-hidden="true">Σ</span>
                <span className="ledger__name ledger__name--strong">
                  Roční balíček pro OSVČ — účetnictví, mzdy i závěrka
                </span>
                <span className="ledger__price ledger__price--green">
                  <span className="ledger__od">od</span>
                  <span className="ledger__amt">14 900</span>
                  <span className="ledger__cur">Kč</span>
                </span>
              </div>
            </div>
          </div>

          <p className="note">
            Ceny jsou orientační a řídí se počtem dokladů. Přesnou nabídku
            dostanete po první nezávazné schůzce — v ceně je i to, že vám
            zavoláme dřív, než uplyne termín.
          </p>
        </div>
      </section>

      {/* SEKCE 2 — Důvěra a reference */}
      <section className="section section--ink" aria-labelledby="onas-h">
        <div className="container">
          <p className="eyebrow eyebrow--brass">Proč nám lidé svěří svá čísla</p>
          <h2 id="onas-h" className="h2 h2--light">
            Kancelář kousek od Samsonovy kašny, která termín nepřetáhne
          </h2>

          <div className="about">
            <div className="about__text">
              <p>
                Přes dvacet sedm let vedeme účetnictví a řešíme daně pro řemeslníky,
                obchody a rodinné firmy z Budějovic a okolí. Známe místní úřady,
                víme, na čem stojí kontrola DPH, a hlídáme lhůty za vás.
              </p>
              <p>
                Každou položku vidíte tak, jak ji zapíšeme do knihy — přehledně,
                řádek po řádku, sečteno na spodní čáru. Žádné překvapení na konci
                roku, žádné penále z nepozornosti.
              </p>
              <p className="about__addr">
                Ukázková 123, České Budějovice · info@example.cz · +420 777 111 222
              </p>
            </div>

            <div className="about__media">
              <AiImage
                src="/section-2.webp"
                alt="Kancelář daňové poradkyně BEST v Českých Budějovicích"
                className="about__img"
              />
            </div>
          </div>

          <ul className="refs">
            {reference.map((r) => (
              <li className="ref" key={r.who}>
                <blockquote className="ref__quote">„{r.text}"</blockquote>
                <p className="ref__who">
                  <span className="ref__name">{r.who}</span>
                  <span className="ref__firm">{r.firm}</span>
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
