const realizace = [
  {
    nazev: "Zadem větrané fasády",
    material: "žula · pískovec",
    popis:
      "Kamenný plášť budovy na kotevním systému. Zaměříme fasádu, zpracujeme montážní dokumentaci a desky vyrobíme přesně na kotvy — od administrativních budov po rodinné domy.",
  },
  {
    nazev: "Fasády — masivní obklad",
    material: "pískovec · žula",
    popis:
      "Klasický lepený a kotvený obklad soklů, portálů a průčelí. Umíme i repliky historických profilů pro rekonstrukce v centru Hradce Králové a okolí.",
  },
  {
    nazev: "Obklady v interiéru",
    material: "mramor · onyx · travertin",
    popis:
      "Podlahy, schodiště, koupelny a obklady stěn. Desky vybíráte přímo na skladě ve Stěžerách — vidíte přesně tu kresbu kamene, která skončí u vás doma.",
  },
  {
    nazev: "Kuchyňské pracovní desky",
    material: "žula · křemenec",
    popis:
      "Zaměření laserem, výřezy pro dřez a varnou desku na CNC, montáž do dvou týdnů. Hrany a povrch podle vašeho výběru — leštěné, kartáčované i matné.",
  },
  {
    nazev: "Doplňující kamenické práce",
    material: "dle projektu",
    popis:
      "Parapety, krbové portály, prahy, kašny i atypické prvky podle výkresu architekta. Co jde nakreslit, jde v kameni vyrobit.",
  },
  {
    nazev: "Výroba a sklad Stěžery",
    material: "tl. 2 a 3 cm",
    popis:
      "Vlastní kamenický závod se skladem žulových, mramorových, travertinových a onyxových desek z celého světa. Přijeďte si kámen vybrat osobně.",
  },
];

const kroky = [
  {
    krok: "Zaměření",
    text: "Přijedeme na stavbu nebo do bytu a zaměříme vše na milimetr — u fasád včetně geodetického podkladu.",
  },
  {
    krok: "Dokumentace",
    text: "Zpracujeme výrobní a montážní dokumentaci. Architekt i stavební firma vědí přesně, co a kam přijde.",
  },
  {
    krok: "Výroba",
    text: "Řežeme a opracováváme ve vlastním závodě ve Stěžerách. Každou desku kontrolujeme před expedicí.",
  },
  {
    krok: "Montáž",
    text: "Montují naši kameníci, ne subdodavatel. Předáváme hotové dílo, za které ručíme.",
  },
];

export const metadata = {
  title: "KÁMEN ENGINEERING s.r.o. — kamenické práce na klíč, Hradec Králové",
  description:
    "Kamenictví KÁMEN ENGINEERING, Stěžery u Hradce Králové. Od roku 1992 fasády, obklady a kuchyňské desky z přírodního kamene — zaměření, dokumentace, výroba i montáž na klíč.",
  openGraph: {
    title: "KÁMEN ENGINEERING — kamenické práce na klíč",
    description:
      "Fasády, interiérové obklady a kuchyňské desky z žuly, mramoru, travertinu a onyxu. Vlastní výroba a sklad ve Stěžerách u Hradce Králové, na trhu od roku 1992.",
    locale: "cs_CZ",
    type: "website",
  },
};

export default function Page() {
  return (
    <main className="ke">
      {/* ================= HERO ================= */}
      <header className="ke-hero">
        <div className="ke-hero-top">
          <span className="ke-wordmark" aria-label="KÁMEN ENGINEERING">
            KÁMEN<i>/</i>ENG.
          </span>
          <span className="ke-hero-meta">Stěžery u Hradce Králové · od 1992</span>
        </div>

        <div className="ke-hero-body">
          <h1 className="ke-hero-title">
            <span className="ke-line ke-line-1">Kámen</span>
            <span className="ke-line ke-line-2">
              řežeme <em>na</em>
            </span>
            <span className="ke-line ke-line-3">milimetr.</span>
          </h1>

          {/* signature: řez kamenem — strata */}
          <div className="ke-strata" aria-hidden="true">
            <span className="ke-stratum s1"><b>žula</b></span>
            <span className="ke-stratum s2"><b>mramor</b></span>
            <span className="ke-stratum s3"><b>travertin</b></span>
            <span className="ke-stratum s4"><b>onyx</b></span>
            <span className="ke-stratum s5"><b>pískovec</b></span>
          </div>
        </div>

        <p className="ke-hero-lead">
          Kamenické práce na klíč — od zaměření přes výrobní dokumentaci po montáž.
          Vlastní závod a sklad kamenných desek ve Stěžerách u Hradce Králové.
        </p>

        <div className="ke-hero-facts" role="list">
          <span role="listitem">fasády</span>
          <span role="listitem">interiéry</span>
          <span role="listitem">kuchyňské desky</span>
          <span role="listitem">desky tl. 2 a 3 cm skladem</span>
        </div>
      </header>

      {/* ================= REALIZACE ================= */}
      <section className="ke-sluzby" aria-labelledby="sluzby-h">
        <div className="ke-section-head">
          <h2 id="sluzby-h">Co pro vás vyrobíme</h2>
          <p>
            Šest oborů, jedno řemeslo. U každé zakázky děláme celý řetězec sami —
            proto ručíme za výsledek.
          </p>
        </div>

        <ul className="ke-grid">
          {realizace.map((r) => (
            <li className="ke-card" key={r.nazev}>
              <span className="ke-card-mat">{r.material}</span>
              <h3>{r.nazev}</h3>
              <p>{r.popis}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* ================= DŮVĚRA / POSTUP ================= */}
      <section className="ke-duvera" aria-labelledby="duvera-h">
        <div className="ke-duvera-inner">
          <div className="ke-duvera-text">
            <h2 id="duvera-h">
              Na trhu <strong>od roku 1992</strong> — a pořád stejný postup
            </h2>
            <p>
              KÁMEN ENGINEERING s.r.o. je partnerem architektonických a designových
              studií, stavebních firem i soukromých investorů. Pracujeme s kamenem
              z celého světa i s českým pískovcem a žulou. Přijeďte do našeho závodu
              ve Stěžerách — kámen si vyberete na vlastní oči, ne z katalogu.
            </p>

            <blockquote className="ke-motto">
              „Kdo chce, hledá způsob, kdo nechce, hledá důvod…“
              <cite>— Jan Werich, motto naší dílny</cite>
            </blockquote>

            <p className="ke-kontakt-radek">
              Zavolejte nám: <a href="tel:+420495000000">495 000 000</a> nebo napište
              na <a href="mailto:info@kamen-engineering.cz">info@kamen-engineering.cz</a> —
              ozveme se do druhého pracovního dne.
            </p>
          </div>

          <ol className="ke-kroky">
            {kroky.map((k, i) => (
              <li key={k.krok}>
                <span className="ke-krok-cislo" aria-hidden="true">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3>{k.krok}</h3>
                  <p>{k.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </main>
  );
}
