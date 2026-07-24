import { AiImage } from "./_ui";
import { Tally } from "./motion";

const sluzby = [
  {
    name: "Vedení podvojného účetnictví",
    price: "od 2 900 Kč",
    unit: " / měsíc",
    note: "Zpracování dokladů, DPH, výkazy — kompletně za vás.",
  },
  {
    name: "Daňová evidence pro OSVČ",
    price: "od 1 200 Kč",
    unit: " / měsíc",
    note: "Pro živnostníky, kteří chtějí mít v papírech klid.",
  },
  {
    name: "Zpracování mezd a personalistika",
    price: "od 250 Kč",
    unit: " / zaměstnanec",
    note: "Výplaty, odvody, přihlášky na ČSSZ i zdravotní.",
  },
  {
    name: "Přiznání k DPH a kontrolní hlášení",
    price: "od 900 Kč",
    unit: " / měsíc",
    note: "Podáno datovou schránkou, vždy před termínem.",
  },
  {
    name: "Roční závěrka a daňové přiznání",
    price: "od 4 500 Kč",
    unit: "",
    note: "Uzavřeme rok tak, aby seděl na haléř.",
  },
  {
    name: "Kontrola a rekonstrukce účetnictví",
    price: "dle rozsahu",
    unit: "",
    note: "Srovnáme knihy po předchozím účetním.",
  },
];

export default function Page() {
  return (
    <div className="wrap">
      <header className="masthead">
        <div className="brand">
          <span className="brand-mark">KENTEP</span>
          <span className="brand-sub">Liberec · účetní kancelář</span>
        </div>
        <div className="doublerule brand-rule" aria-hidden="true" />
      </header>

      <main>
        <section className="section hero" aria-labelledby="hero-title">
          <p className="eyebrow">Uzávěrka za rok {new Date().getFullYear()} · aktualizováno</p>
          <h1 id="hero-title" className="hero-title">
            Knihy, které <span className="is-green">sedí</span> na&nbsp;haléř.
          </h1>
          <div className="doublerule hero-headrule" aria-hidden="true" />
          <p className="hero-lede">
            Vedeme účetnictví, mzdy a daně pro liberecké firmy a OSVČ. Každý
            měsíc uzávěrka, která opravdu balancuje — a přiznání podané dřív,
            než na něj vůbec pomyslíte.
          </p>

          <dl className="tally" aria-label="Klíčová čísla kanceláře">
            <div className="tally-item">
              <dt className="tally-num">
                <Tally value={21} delay={0.2} />
              </dt>
              <dd className="tally-label">let uzavíráme knihy v Liberci</dd>
            </div>
            <div className="tally-item">
              <dt className="tally-num">
                <Tally value={260} delay={0.45} />
              </dt>
              <dd className="tally-label">firem a OSVČ nám svěřilo účetnictví</dd>
            </div>
            <div className="tally-item">
              <dt className="tally-num">
                <Tally value={14} suffix=" %" delay={0.7} />
              </dt>
              <dd className="tally-label">průměrná úspora na dani po optimalizaci</dd>
            </div>
          </dl>

          <div className="doublerule doublerule--draw hero-balance" aria-hidden="true" />
          <p className="balance-caption">= knihy balancují</p>

          <figure className="hero-figure">
            <AiImage
              src="/hero.webp"
              alt="Pracovní stůl účetní kanceláře KENTEP v Liberci s doklady a výkazy"
              className="hero-img"
            />
          </figure>
        </section>

        <section className="section" aria-labelledby="sluzby-title">
          <p className="eyebrow">Nabídka</p>
          <h2 id="sluzby-title" className="section-title">
            Co pro vás účtujeme
          </h2>
          <p className="section-lede">
            Ceny jsou orientační podle počtu dokladů — na první schůzce je
            spočítáme přesně, bez skrytých položek.
          </p>

          <ol className="ledger">
            {sluzby.map((s, i) => (
              <li className="ledger-row" key={s.name}>
                <span className="ledger-idx">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="ledger-body">
                  <span className="ledger-line">
                    <span className="ledger-name">{s.name}</span>
                    <span className="ledger-leader" aria-hidden="true" />
                    <span className="ledger-figure">
                      {s.price}
                      <span className="ledger-unit">{s.unit}</span>
                    </span>
                  </span>
                  <span className="ledger-note">{s.note}</span>
                </span>
              </li>
            ))}
          </ol>

          <div className="total">
            <div className="doublerule" aria-hidden="true" />
            <div className="total-line">
              <span className="total-eq" aria-hidden="true">=</span>
              <span className="total-label">Uzávěrka bez pokut od finančního úřadu</span>
              <span className="total-figure">v ceně</span>
            </div>
          </div>
        </section>

        <section className="section trust" aria-labelledby="trust-title">
          <p className="eyebrow">Důvěra</p>
          <h2 id="trust-title" className="section-title">
            Proč Liberečáci účtují u nás
          </h2>

          <div className="trust-grid">
            <figure className="trust-figure">
              <AiImage
                src="/section-2.webp"
                alt="Účetní kancelář KENTEP v Liberci pod Ještědem"
                className="trust-img"
              />
            </figure>

            <ul className="trust-points">
              <li>
                <span className="tp-k">Ručíme za práci.</span> Kancelář je
                pojištěna na 5 000 000 Kč — když uděláme chybu, řešíme ji my.
              </li>
              <li>
                <span className="tp-k">Vždy před termínem.</span> Přiznání i
                hlášení podáváme elektronicky datovou schránkou, ne na poslední
                chvíli.
              </li>
              <li>
                <span className="tp-k">Napojíme se na vás.</span> Účtujeme v
                POHODĚ i Money S3 a převezmeme data z vašeho systému.
              </li>
              <li>
                <span className="tp-k">Osobně i online.</span> Zastavte se v
                kanceláři na adrese Ukázková 123, Liberec — nebo vše vyřešíme
                na dálku.
              </li>
            </ul>
          </div>

          <div className="refs">
            <blockquote className="ref">
              <p>
                „Za šest let jsme od finančního úřadu nedostali jedinou pokutu.
                Poprvé mám v účetnictví opravdu klid.“
              </p>
              <cite>— Truhlářství Vávra, Liberec</cite>
            </blockquote>
            <blockquote className="ref">
              <p>
                „Přešli jsme z tabulek v Excelu na pořádek. Konečně vím do
                haléře, jak na tom firma je.“
              </p>
              <cite>— Kavárna Kořeny, Liberec</cite>
            </blockquote>
          </div>

          <div className="total">
            <div className="doublerule" aria-hidden="true" />
            <div className="total-line">
              <span className="total-eq" aria-hidden="true">=</span>
              <span className="total-label">Účetní, na kterého se dá spolehnout</span>
              <span className="total-figure">Liberec</span>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
