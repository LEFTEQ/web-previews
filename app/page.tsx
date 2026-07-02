// AZ Aqua-garden — studnařství Pardubice
// Návrh: „řez zemí" — svislý vrt jako signature prvek, stratigrafie jako struktura obsahu.

const sluzby = [
  {
    hloubka: "0 m",
    titul: "Posouzení pozemku a nalezení pramene",
    text: "Než se cokoli začne vrtat, náš hydrogeolog posoudí vaši lokalitu a najde místo, kde má vrt smysl. Předběžné posouzení vám řekne, jestli a v jaké hloubce vodu čekat.",
  },
  {
    hloubka: "— povolení —",
    titul: "Legislativa a projekt za vás",
    text: "Hydrogeologický posudek, projektová dokumentace, jednání s úřady. Vyřídíme kompletní papírování — vy podepíšete, my obíháme. Studnu lze realizovat jako povolené vodní dílo i jako průzkumný vrt.",
  },
  {
    hloubka: "do 30 m",
    titul: "Vrtané studny pro dům i zahradu",
    text: "Vrtáme v průměrech 125–250 mm, včetně vystrojení, šachty, přípojky a osazení skruží. Prohloubíme i stávající studnu, která přestala stačit. Dodáme a namontujeme čerpadlo i domácí vodárnu.",
  },
  {
    hloubka: "nad 30 m",
    titul: "Hlubinné vrty pro tepelná čerpadla",
    text: "Máme oprávnění Báňského úřadu pro vrty hlubší než 30 metrů. Vrt vystrojíme kolektorem a kompletní montáž tepelného čerpadla zajistíme s prověřenou dodavatelskou firmou.",
  },
  {
    hloubka: "celý profil",
    titul: "Průzkumné vrty a zakládání staveb",
    text: "Průzkumné a monitorovací vrty pro inženýrskou geologii, vrty pro zakládání staveb včetně posudku, snižování hladiny podzemní vody. Vydatnost každého vrtu ověříme čerpací zkouškou.",
  },
];

const duvera = [
  {
    cislo: "2 000 l",
    popis: "garantovaná vydatnost za 24 hodin u vrtané studny",
  },
  {
    cislo: "125–250 mm",
    popis: "průměry vrtů — od zahradní studny po hlubinný kolektor",
  },
  {
    cislo: "30+ m",
    popis: "hlubinné vrty s oprávněním Báňského úřadu",
  },
];

export default function Page() {
  return (
    <main className="aq">
      {/* ===== HERO ===== */}
      <header className="aq-hero">
        <div className="aq-hero-inner">
          <p className="aq-wordmark">
            <span className="aq-wordmark-az">AZ</span>
            <span className="aq-wordmark-rest">Aqua-garden</span>
            <span className="aq-wordmark-loc">studnařství · Pardubice</span>
          </p>

          <h1 className="aq-h1">
            <span className="aq-h1-line aq-h1-line-1">Voda je pod vámi.</span>
            <span className="aq-h1-line aq-h1-line-2">My víme, jak hluboko.</span>
          </h1>

          <p className="aq-lead">
            Vrtané studny a hlubinné vrty pro tepelná čerpadla na Pardubicku.
            Od hydrogeologického posudku přes povolení až po první litr vody —
            s garancí vydatnosti 2&nbsp;000&nbsp;litrů za den.
          </p>

          <div className="aq-hero-cta">
            <a className="aq-btn" href="tel:+420466000000">
              Zavolat studnaři
            </a>
            <a className="aq-btn aq-btn-ghost" href="mailto:info@az-aquagarden.cz">
              Napsat e-mail
            </a>
          </div>
        </div>

        {/* Signature: svislý vrt řezem zeminou — vrstvy podloží + vodní sloupec */}
        <div className="aq-bore" aria-hidden="true">
          <div className="aq-bore-strata">
            <span className="aq-stratum aq-stratum-1"></span>
            <span className="aq-stratum aq-stratum-2"></span>
            <span className="aq-stratum aq-stratum-3"></span>
            <span className="aq-stratum aq-stratum-4"></span>
            <span className="aq-stratum aq-stratum-5"></span>
          </div>
          <div className="aq-bore-shaft">
            <span className="aq-bore-water"></span>
          </div>
          <span className="aq-bore-mark aq-bore-mark-0">0&nbsp;m</span>
          <span className="aq-bore-mark aq-bore-mark-10">10&nbsp;m</span>
          <span className="aq-bore-mark aq-bore-mark-20">20&nbsp;m</span>
          <span className="aq-bore-mark aq-bore-mark-30">30&nbsp;m</span>
          <span className="aq-bore-hladina">hladina podzemní vody</span>
        </div>
      </header>

      {/* ===== SLUŽBY — profil vrtu shora dolů ===== */}
      <section className="aq-sluzby" aria-labelledby="sluzby-h">
        <div className="aq-section-head">
          <p className="aq-eyebrow">Co pro vás uděláme</p>
          <h2 id="sluzby-h" className="aq-h2">
            Zakázka jako profil vrtu:
            <br />
            od povrchu ke zvodni
          </h2>
          <p className="aq-section-lead">
            Každou studnu vedeme stejně, jako vrták prochází podložím — vrstvu
            po vrstvě, bez přeskakování. Hloubkové značky vlevo nejsou dekorace:
            je to pořadí, ve kterém vaše zakázka skutečně probíhá.
          </p>
        </div>

        <ol className="aq-profil">
          {sluzby.map((s) => (
            <li key={s.titul} className="aq-profil-item">
              <span className="aq-profil-hloubka">{s.hloubka}</span>
              <div className="aq-profil-obsah">
                <h3 className="aq-h3">{s.titul}</h3>
                <p>{s.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      {/* ===== DŮVĚRA / O NÁS ===== */}
      <section className="aq-duvera" aria-labelledby="duvera-h">
        <div className="aq-section-head aq-section-head-invert">
          <p className="aq-eyebrow">Proč AZ Aqua-garden</p>
          <h2 id="duvera-h" className="aq-h2">
            Vrtáme tam, kam se jiní nedostanou
          </h2>
          <p className="aq-section-lead">
            Vlastníme několik typů vrtacích souprav — včetně techniky pro úzké
            průjezdy a obtížně přístupné zahrady. Komplikované podloží řešíme
            s vlastními hydrogeology a báňskými specialisty, ne odhadem.
          </p>
        </div>

        <dl className="aq-cisla">
          {duvera.map((d) => (
            <div key={d.cislo} className="aq-cislo">
              <dt className="aq-cislo-hodnota">{d.cislo}</dt>
              <dd className="aq-cislo-popis">{d.popis}</dd>
            </div>
          ))}
        </dl>

        <div className="aq-otazka">
          <div className="aq-otazka-box">
            <h3 className="aq-h3">Vrtaná, nebo kopaná studna?</h3>
            <p>
              Vrtaná studna sahá k hlubším, čistším zvodním a méně ji ovlivní
              suché léto. Kopaná studna bere mělkou vodu a její hladina kolísá.
              Pro trvalý zdroj pitné vody dnes v drtivé většině případů
              doporučíme vrt — a na místě vám řekneme proč, konkrétně pro váš
              pozemek.
            </p>
          </div>
          <div className="aq-otazka-box">
            <h3 className="aq-h3">Kdy se vám studna zaplatí?</h3>
            <p>
              Voda ze studny stojí jen elektřinu pro čerpadlo. Rodina zalévající
              zahradu a napouštějící bazén ušetří proti vodovodu tisíce korun
              ročně — návratnost vrtané studny se běžně počítá na jednotky let,
              ne desetiletí.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
