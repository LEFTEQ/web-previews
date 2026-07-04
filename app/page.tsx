import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Empori s.r.o. — komponenty pro monolit | Hradec Králové",
  description:
    "Systémové bednění, distanční podložky, těsnění spár, sanace betonu a přísady do betonu. Odborný servis pro projektanty a zhotovitele. Hradec Králové.",
  openGraph: {
    title: "Empori s.r.o. — komponenty pro monolit",
    description:
      "Vše, co drží beton na místě: bednění, distance, těsnění spár, sanace a přísady. Hradec Králové.",
    type: "website",
    locale: "cs_CZ",
  },
};

type Rada = {
  cislo: string;
  faze: string;
  nazev: string;
  popis: string;
  polozky: string[];
};

const rady: Rada[] = [
  {
    cislo: "01",
    faze: "Než přijede beton",
    nazev: "Příslušenství pro bednění",
    popis:
      "Vše, co drží tvar, než ztvrdne beton. Rozpěrky, spínací tyče, matice, odbedňovací oleje a rohové lišty.",
    polozky: [
      "Distanční rozpěrné trubky — betonové i plastové",
      "Spínací tyče a matice talířové, křídlové, kulově otočné",
      "Kónusy, ucpávky, dorazy a spojovací prvky",
      "Odbedňovací oleje, kruhové papírové sloupy, dreikant lišty",
    ],
  },
  {
    cislo: "02",
    faze: "Uložení výztuže",
    nazev: "Distanční podložky pro armaturu",
    popis:
      "Krytí, které vydrží. Ocelové, plastové i betonové distance pro spodní i boční krytí — přesně na požadovanou třídu.",
    polozky: [
      "Ocelové distanční prvky DISTA",
      "Plastové distance — spodní i boční krytí",
      "Betonové distance — spodní i boční krytí",
    ],
  },
  {
    cislo: "03",
    faze: "Vodotěsnost",
    nazev: "Těsnění spár",
    popis:
      "Aby spára nepustila vodu. Profily na řízené praskliny, bentonitové a PVC pásy, injektážní hadičky.",
    polozky: [
      "Profily „sluníčka“ na řízené praskliny",
      "Bentonitové těsnící pásy, bitumenové plechy",
      "PVC pásy pro pracovní a dilatační spáry",
      "Injektážní hadička a příslušenství",
    ],
  },
  {
    cislo: "04",
    faze: "Statika a fyzika",
    nazev: "Prvky Schöck a smykové výztuže",
    popis:
      "Detaily, na kterých stavba stojí i mlčí. Přerušení tepelných mostů, tlumení kročejového hluku, výztuž proti protlačení sloupů.",
    polozky: [
      "Smykové výztuže proti protlačení sloupů",
      "Isokorb, Novomur, Tronsole — Schöck",
      "Antivibrační rohože a materiály",
      "Vylamovací prvky Ferbox, výztužné přípojky",
    ],
  },
  {
    cislo: "05",
    faze: "Do směsi",
    nazev: "Přísady do betonu",
    popis:
      "Chemie, která rozhoduje o zpracovatelnosti i trvanlivosti. Plastifikátory, urychlovače, zimní alternativy, inhibitory koroze.",
    polozky: [
      "Plastifikační a superplastifikační přísady",
      "Provzdušňovací, zpomalující i urychlující přísady",
      "Zimní alternativy, přísady pro čerpaný beton",
      "Odformovací oleje, prostředky pro ošetření povrchu",
    ],
  },
  {
    cislo: "06",
    faze: "Když beton stárne",
    nazev: "Sanace a správkové hmoty",
    popis:
      "Druhý život konstrukce. Ochrana výztuže, reprofilace, rychlovazné potěry, hydroizolační stěrky a ochranné systémy.",
    polozky: [
      "Ochrana výztuže a spojovací můstky",
      "Sanace, reprofilace a jemné stěrky",
      "Rychlé montážní a těsnící malty, chemické kotvy",
      "Antigraffiti, hydrofobizace, stříkané izolace",
    ],
  },
];

export default function Page() {
  return (
    <main className="emp">
      <header className="emp-nav" aria-label="Hlavní navigace">
        <a className="emp-mark" href="#top" aria-label="Empori — úvod">
          <span className="emp-mark-e">E</span>MPORI
          <span className="emp-mark-tag">s.r.o.</span>
        </a>
        <nav className="emp-links">
          <a href="#rady">Sortiment</a>
          <a href="#servis">Servis</a>
          <a className="emp-nav-cta" href="#servis">Poptat materiál</a>
        </nav>
      </header>

      <section className="emp-hero" id="top">
        <div className="emp-hero-media">
          <img
            src="/hero.webp"
            alt="Systémové bednění a čerstvě uložený beton na stavbě"
            className="emp-hero-img"
          />
          <div className="emp-hero-grid" aria-hidden="true" />
        </div>
        <div className="emp-hero-body">
          <p className="emp-eyebrow">Hradec Králové · dodavatel pro monolit od roku 1994</p>
          <h1 className="emp-hero-title">
            Beton drží tvar,
            <br />
            <span className="emp-hero-em">protože ho něco drží.</span>
          </h1>
          <p className="emp-hero-lead">
            Rozpěrky, spínací tyče, distance, těsnící pásy, sanační hmoty a přísady do
            betonu. Dodáváme komponenty pro celý cyklus monolitické konstrukce — od prvního
            bednění po sanaci po letech.
          </p>
          <div className="emp-hero-actions">
            <a className="emp-btn" href="#rady">Projít sortiment</a>
            <a className="emp-btn emp-btn-ghost" href="#servis">Zeptat se technika</a>
          </div>
          <dl className="emp-facts">
            <div>
              <dt>Fáze stavby</dt>
              <dd>6 řad — od bednění po sanaci</dd>
            </div>
            <div>
              <dt>Značky</dt>
              <dd>Schöck, DISTA, Ferbox</dd>
            </div>
            <div>
              <dt>Pro koho</dt>
              <dd>Projektanti · zhotovitelé · investoři</dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="emp-section" id="rady" aria-labelledby="rady-h">
        <div className="emp-section-head">
          <p className="emp-eyebrow">Sortiment podle fáze konstrukce</p>
          <h2 id="rady-h">Šest řad, jeden odlitek</h2>
          <p className="emp-section-lead">
            Náš katalog není abecední seznam. Je seřazený tak, jak jde stavba za sebou —
            od chvíle, kdy stavíte bednění, až po den, kdy konstrukci opravujete.
          </p>
        </div>

        <ol className="emp-rady">
          {rady.map((r) => (
            <li className="emp-rada" key={r.cislo}>
              <div className="emp-rada-mark">
                <span className="emp-rada-cislo">{r.cislo}</span>
                <span className="emp-rada-faze">{r.faze}</span>
              </div>
              <div className="emp-rada-body">
                <h3>{r.nazev}</h3>
                <p className="emp-rada-popis">{r.popis}</p>
                <ul className="emp-rada-list">
                  {r.polozky.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>

        <figure className="emp-figure">
          <img
            src="/section-1.webp"
            alt="Detail distančních podložek a výztuže před betonáží"
            className="emp-figure-img"
          />
          <figcaption>
            Distance rozhodují o krytí výztuže — a tím o životnosti celé konstrukce.
          </figcaption>
        </figure>
      </section>

      <section className="emp-section emp-servis" id="servis" aria-labelledby="servis-h">
        <div className="emp-servis-grid">
          <div className="emp-servis-text">
            <p className="emp-eyebrow">Inženýrský servis</p>
            <h2 id="servis-h">Neprodáváme jen bednění. Radíme, jak ho použít.</h2>
            <p className="emp-section-lead">
              Ke každé zakázce dostanete konkrétní odpověď: který distanc na danou třídu
              krytí, jaký těsnící pás do pracovní spáry, kterou přísadu na betonáž v mrazu.
              Bez toho je materiál jen materiál.
            </p>

            <ul className="emp-servis-list">
              <li>
                <span className="emp-servis-num">A</span>
                <div>
                  <h3>Návrh detailu</h3>
                  <p>
                    Prostupy, dilatace, přerušení tepelných mostů — navrhneme skladbu i
                    počty kusů podle výkresu.
                  </p>
                </div>
              </li>
              <li>
                <span className="emp-servis-num">B</span>
                <div>
                  <h3>Dodání na stavbu</h3>
                  <p>
                    Kompletní dodávka komponentů pro betonáž v jednom termínu — do Hradce
                    Králové i po celém kraji.
                  </p>
                </div>
              </li>
              <li>
                <span className="emp-servis-num">C</span>
                <div>
                  <h3>Podpora u realizace</h3>
                  <p>
                    Poradíme s montáží, odbedněním i následnou sanací — od projektanta po
                    partu na place.
                  </p>
                </div>
              </li>
            </ul>

            <div className="emp-servis-contact">
              <p className="emp-servis-lokalita">
                <strong>Empori s.r.o.</strong> · Hradec Králové · dodávky pro Královéhradecký kraj
              </p>
              <a className="emp-btn" href="#servis">Poslat výkres k nacenění</a>
            </div>
          </div>

          <figure className="emp-servis-fig">
            <img
              src="/section-2.webp"
              alt="Technik Empori kontroluje sestavené systémové bednění na stavbě"
              className="emp-figure-img"
            />
            <figcaption>
              „Řekněte nám, co betonujete. Zbytek dořešíme my.“
            </figcaption>
          </figure>
        </div>
      </section>
    </main>
  );
}
