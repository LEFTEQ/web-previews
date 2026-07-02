// MP-STAV s.r.o. — stavebniny, České Budějovice
// Koncept: „Vzorkovna" — web jako fyzická vzorkovna materiálů.
// Signature: pásková skladba (cihelné pásky / klinker) jako grafický systém celého webu.

const sortiment = [
  {
    id: "pasky",
    nazev: "Cihelné pásky a klinker",
    popis:
      "Lícové cihly a pásky pro fasády i interiér. Klasické červené, engoby i ručně tvarované povrchy. Poradíme se spárou i lepidlem.",
    stitek: "Fasáda / interiér",
  },
  {
    id: "kamen",
    nazev: "Umělý kámen",
    popis:
      "Obklad soklu, komína, krbu i celé stěny. Lehčí než přírodní kámen, drží desítky let. Ve vzorkovně vidíte skladbu naostro, ne na fotce.",
    stitek: "Obklady",
  },
  {
    id: "dlazba",
    nazev: "Zámková a cihelná dlažba",
    popis:
      "Dlažba na příjezd, chodník i terasu. Včetně obrubníků, štěrkového lože a spárovacích písků — celou skladbu vezmete na jedné adrese.",
    stitek: "Venkovní plochy",
  },
  {
    id: "ploty",
    nazev: "Betonové ploty a Beton Brož",
    popis:
      "Plotové systémy, palisády a betonové prvky. Ukážeme reálné sestavy, spočítáme počet dílců na váš pozemek.",
    stitek: "Ploty / zahrada",
  },
  {
    id: "chemie",
    nazev: "Malty, lepidla, fasády",
    popis:
      "Zdicí malty, flexibilní lepidla, penetrace a fasádní systémy. Doporučíme přesně to, co k vybranému materiálu patří.",
    stitek: "Stavební chemie",
  },
  {
    id: "montaz",
    nazev: "Montáž vlastní partou",
    popis:
      "Neprodáváme jen palety. Pásky nalepíme, dlažbu položíme, plot postavíme — se zárukou na materiál i práci dohromady.",
    stitek: "Realizace",
  },
];

const duvody = [
  {
    cislo: "38 m",
    jednotka: "vzorových stěn",
    text: "Největší vzorková prodejna v Jihočeském kraji. Materiál si osaháte ve skutečné skladbě, se spárou a ve dne — ne na monitoru.",
  },
  {
    cislo: "0 Kč",
    jednotka: "za výjezd",
    text: "Mobilní vzorkovna přijede k vám na stavbu kamkoli po ČR zdarma. Vzorky přiložíte přímo na svoji fasádu.",
  },
  {
    cislo: "1 cena",
    jednotka: "na které se domluvíme",
    text: "Ceny stavíme podle množství a termínu, ne podle ceníku na zdi. Přineste konkurenční nabídku — najdeme cestu.",
  },
];

export default function Page() {
  return (
    <main className="mp">
      {/* ===== HERO ===== */}
      <header className="hero">
        <div className="hero-top">
          <div className="wordmark" aria-label="MP-STAV">
            <span className="wordmark-mp">MP</span>
            <span className="wordmark-spara" aria-hidden="true"></span>
            <span className="wordmark-stav">STAV</span>
          </div>
          <p className="hero-lokalita">
            Dobrovodská 11 · České Budějovice
          </p>
        </div>

        <div className="hero-body">
          <h1 className="hero-titulek">
            <span className="radek radek-1">Stavebniny,</span>
            <span className="radek radek-2">které si nejdřív</span>
            <span className="radek radek-3 radek-akcent">osaháte.</span>
          </h1>

          <p className="hero-perex">
            Cihelné pásky, umělý kámen, zámková dlažba i betonové ploty — ve
            skutečné velikosti na vzorových stěnách. A když nemůžete vy k nám,
            přijede mobilní vzorkovna zdarma za vámi, kamkoli po Česku.
          </p>

          <div className="hero-akce">
            <a className="tlacitko tlacitko-plne" href="tel:+420702074188">
              Zavolat 702 074 188
            </a>
            <a className="tlacitko tlacitko-obrys" href="#sortiment">
              Projít sortiment
            </a>
          </div>
        </div>

        {/* Signature: pásková vazba — běhounová skladba cihelných pásků */}
        <div className="vazba" aria-hidden="true">
          <div className="vazba-rada r1">
            <i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i>
          </div>
          <div className="vazba-rada r2">
            <i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i>
          </div>
          <div className="vazba-rada r3">
            <i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i>
          </div>
        </div>
      </header>

      {/* ===== SORTIMENT ===== */}
      <section className="sekce sortiment" id="sortiment" aria-labelledby="sortiment-nadpis">
        <div className="sekce-hlava">
          <p className="eyebrow">Vzorkovna · sortiment</p>
          <h2 id="sortiment-nadpis">Co máme na stěnách i skladem</h2>
          <p className="sekce-perex">
            Všechno níže uvidíte ve vzorkovně naskládané tak, jak to bude vypadat
            u vás doma. Většinu vozíme skladem nebo do pár dní.
          </p>
        </div>

        <ul className="mrizka">
          {sortiment.map((p) => (
            <li className="karta" key={p.id}>
              <span className="karta-stitek">{p.stitek}</span>
              <h3 className="karta-nazev">{p.nazev}</h3>
              <p className="karta-popis">{p.popis}</p>
              <span className="karta-spara" aria-hidden="true"></span>
            </li>
          ))}
        </ul>
      </section>

      {/* ===== DŮVĚRA ===== */}
      <section className="sekce duvera" aria-labelledby="duvera-nadpis">
        <div className="sekce-hlava sekce-hlava-svetla">
          <p className="eyebrow eyebrow-svetly">Proč MP-STAV</p>
          <h2 id="duvera-nadpis">
            Vzorkovna, která přijede až na vaši stavbu
          </h2>
        </div>

        <div className="duvody">
          {duvody.map((d) => (
            <article className="duvod" key={d.jednotka}>
              <p className="duvod-cislo">
                {d.cislo}
                <span className="duvod-jednotka">{d.jednotka}</span>
              </p>
              <p className="duvod-text">{d.text}</p>
            </article>
          ))}
        </div>

        <blockquote className="reference">
          <p className="reference-text">
            „Přijeli s dodávkou plnou vzorků, pásky jsme přikládali rovnou na
            fasádu. Za dva týdny byla nalepená celá stodola — jejich partou,
            jejich materiálem, jedna záruka.“
          </p>
          <footer className="reference-autor">
            — rekonstrukce stodoly, Hluboká nad Vltavou
          </footer>
        </blockquote>
      </section>
    </main>
  );
}
