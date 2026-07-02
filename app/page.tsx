const nemovitosti = [
  {
    typ: "Prodej · Rodinný dům",
    nazev: "Chata po kompletní rekonstrukci, pozemek 346 m²",
    lokalita: "Ostrava – Krásné Pole",
    plocha: "31,5 m² užitná plocha",
    cena: "3 799 000 Kč",
    cislo: "#140286",
  },
  {
    typ: "Prodej · Komerční",
    nazev: "Činžovní dům na ul. Nerudova, 572 m²",
    lokalita: "Ostrava – Vítkovice",
    plocha: "572 m² užitná plocha",
    cena: "12 900 000 Kč",
    cislo: "#140282",
  },
  {
    typ: "Pronájem · Byt",
    nazev: "Byt 3+kk v novostavbě s parkovacím stáním, Opavská",
    lokalita: "Ostrava – Poruba",
    plocha: "70 m² · 3. podlaží",
    cena: "22 000 Kč / měsíc",
    cislo: "#140278",
  },
  {
    typ: "Prodej · Byt",
    nazev: "Byt 2+1 v osobním vlastnictví, Rabasova",
    lokalita: "Ostrava – Poruba",
    plocha: "54 m² · 7. podlaží",
    cena: "3 790 000 Kč",
    cislo: "#140280",
  },
  {
    typ: "Prodej · Pozemek",
    nazev: "Stavební pozemek Radvanice, 6 263 m²",
    lokalita: "Ostrava – Radvanice",
    plocha: "6 263 m² celková plocha",
    cena: "6 890 000 Kč",
    cislo: "#140283",
  },
  {
    typ: "Prodej · Rodinný dům",
    nazev: "Novostavba patrového domu 5+kk, Bohumín-Záblatí",
    lokalita: "Bohumín – Záblatí",
    plocha: "140 m² užitná plocha",
    cena: "8 290 000 Kč",
    cislo: "#140277",
  },
];

const kroky = [
  {
    nazev: "Přijdeme se podívat",
    text: "Nemovitost projdeme osobně, ne přes fotky. Řekneme vám na rovinu, kolik za ni v Ostravě reálně dostanete — a proč.",
  },
  {
    nazev: "Připravíme prodej",
    text: "Profesionální fotografie, půdorys, PENB, inzerce tam, kde ji kupující v kraji skutečně hledají. Vy nemusíte řešit nic.",
  },
  {
    nazev: "Prohlídky vedeme my",
    text: "Zájemce prověříme a filtrujeme. K vám domů přivedeme jen ty, kteří mají financování a vážný zájem.",
  },
  {
    nazev: "Pohlídáme peníze i katastr",
    text: "Advokátní úschova, kupní smlouva, vklad do katastru, předávací protokol. Peníze máte na účtu dřív, než předáte klíče.",
  },
];

export default function Page() {
  return (
    <main className="rh">
      {/* ================= HERO ================= */}
      <header className="hero">
        <div className="hero-media">
          <img
            src="/hero.webp"
            alt="Panorama Ostravy s rodinnými domy a bytovými domy"
            className="hero-img"
          />
          <div className="hero-shade" aria-hidden="true" />
        </div>

        <div className="hero-top">
          <div className="wordmark" aria-label="Reality holding plus">
            <span className="wordmark-rh">
              Rh<span className="wordmark-plus">+</span>
            </span>
            <span className="wordmark-sub">Reality holding plus · Ostrava</span>
          </div>
          <a className="hero-tel" href="tel:+420773777177">
            +420&nbsp;773&nbsp;777&nbsp;177
          </a>
        </div>

        <div className="hero-body">
          <p className="hero-eyebrow">Realitní kancelář pro Ostravu a okolí</p>
          <h1 className="hero-title">
            Prodáváme domy tam,
            <br />
            kde jsme sami doma<span className="title-plus">+</span>
          </h1>
          <p className="hero-lead">
            Od Poruby po Vítkovice, od Krásného Pole po Bohumín. Přes 600 prodaných
            nemovitostí za 15 let — a každou z nich jsme znali osobně.
          </p>
          <div className="hero-cta">
            <a className="btn btn-solid" href="tel:+420773777177">
              Chci prodat — zavolat
            </a>
            <a className="btn btn-ghost" href="#nabidka">
              Chci koupit — nabídka
            </a>
          </div>
        </div>

        <div className="hero-strip" role="list" aria-label="Čísla kanceláře">
          <div className="strip-item" role="listitem">
            <strong>43</strong>
            <span>nemovitostí v nabídce</span>
          </div>
          <div className="strip-item" role="listitem">
            <strong>600+</strong>
            <span>prodaných nemovitostí</span>
          </div>
          <div className="strip-item" role="listitem">
            <strong>15 let</strong>
            <span>na ostravském trhu</span>
          </div>
          <div className="strip-item" role="listitem">
            <strong>4 562+</strong>
            <span>spokojených klientů</span>
          </div>
        </div>
      </header>

      {/* ================= NABÍDKA ================= */}
      <section className="nabidka" id="nabidka" aria-labelledby="nabidka-h">
        <div className="section-head">
          <p className="eyebrow">Aktuální nabídka</p>
          <h2 id="nabidka-h">
            Nemovitosti, které teď v kraji prodáváme
          </h2>
          <p className="section-lead">
            Každý inzerát má své evidenční číslo — nadiktujte nám ho do telefonu a
            makléř vám k nemovitosti řekne víc, včetně termínu prohlídky.
          </p>
        </div>

        <div className="nabidka-grid">
          <figure className="nabidka-photo">
            <img
              src="/section-1.webp"
              alt="Rodinný dům z aktuální nabídky Reality holding plus v Ostravě"
            />
            <figcaption>
              Ostrava – Krásné Pole · chata po kompletní rekonstrukci
            </figcaption>
          </figure>

          <ul className="listing-list">
            {nemovitosti.map((n) => (
              <li className="listing" key={n.cislo}>
                <div className="listing-meta">
                  <span className="listing-typ">{n.typ}</span>
                  <span className="listing-cislo">{n.cislo}</span>
                </div>
                <h3 className="listing-nazev">{n.nazev}</h3>
                <p className="listing-detail">
                  {n.lokalita} · {n.plocha}
                </p>
                <p className="listing-cena">{n.cena}</p>
              </li>
            ))}
          </ul>
        </div>

        <p className="nabidka-note">
          Celkem 43 nemovitostí v nabídce — rodinné domy, byty, pozemky, komerční
          i rekreační objekty. Zavolejte a řekněte nám, co hledáte.
        </p>
      </section>

      {/* ================= JAK PRODÁVÁME / DŮVĚRA ================= */}
      <section className="proces" aria-labelledby="proces-h">
        <div className="section-head">
          <p className="eyebrow">Jak s vámi pracujeme</p>
          <h2 id="proces-h">Čtyři kroky od klíčů k penězům na účtu</h2>
          <p className="section-lead">
            Prodej nemovitosti je pro většinu lidí životní transakce. Proto ji
            vedeme krok za krokem a u každého z nich víte, co se právě děje.
          </p>
        </div>

        <ol className="kroky">
          {kroky.map((k, i) => (
            <li className="krok" key={k.nazev}>
              <span className="krok-num" aria-hidden="true">
                {i + 1}
              </span>
              <h3>{k.nazev}</h3>
              <p>{k.text}</p>
            </li>
          ))}
        </ol>

        <div className="onas">
          <figure className="onas-photo">
            <img
              src="/section-2.webp"
              alt="Makléřka Reality holding plus předává klientům klíče od nového bytu"
            />
          </figure>
          <div className="onas-text">
            <p className="eyebrow">Kdo jsme</p>
            <h3>
              Rh<span className="plus-accent">+</span> vznikla z vášně spojit
              poctivou práci s osobním přístupem
            </h3>
            <p>
              Víc než 15 let se věnujeme prodejům, pronájmům a vyhledávání
              nemovitostí na Ostravsku — od bytu 1+kk na Gen. Píky po činžovní
              dům ve Vítkovicích. Známe tady každou čtvrť, protože v nich sami
              žijeme.
            </p>
            <blockquote className="reference">
              <p>
                „Dům v Porubě prodali za tři týdny a o dvě stě tisíc nad odhad.
                Všechno vyřídili za nás — my jen podepsali u advokáta.“
              </p>
              <cite>— manželé Novákovi, Ostrava-Poruba</cite>
            </blockquote>
            <a className="btn btn-solid" href="tel:+420773777177">
              Zavolat makléři
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
