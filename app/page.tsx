export default function Page() {
  const vrstvy = [
    { c: "V1", nazev: "Podklad a penetrace", popis: "Očistíme fasádu tlakovou vodou, opravíme trhliny a napenetrujeme. Bez zdravého podkladu zateplení nedrží — proto tu začínáme." },
    { c: "V2", nazev: "Izolant — polystyren nebo vata", popis: "Lepíme a kotvíme desky EPS 70F nebo minerální vaty. Tloušťku spočítáme podle normy ČSN 73 0540, ne od oka." },
    { c: "V3", nazev: "Výztužná vrstva", popis: "Stěrka se sklotextilní síťovinou drží celý systém pohromadě. Tady se rozhoduje, jestli fasáda za deset let popraská." },
    { c: "V4", nazev: "Finální omítka", popis: "Silikonová nebo silikátová omítka v odstínu, který si vyberete ze vzorníku přímo na vašem domě, za denního světla." },
  ];

  const sluzby = [
    {
      nazev: "Zateplení fasád bytových domů",
      popis: "Kompletní zateplovací systém ETICS pro panelové i cihlové domy. Pomůžeme s podklady pro dotace i s komunikací s SVJ a družstvy.",
      detail: "Panelové a bytové domy",
    },
    {
      nazev: "Rekonstrukce fasád veřejných budov",
      popis: "Školy, školky, úřady a sportovní haly. Umíme pracovat za provozu, s harmonogramem podle školního roku a s dokumentací pro veřejné zakázky.",
      detail: "Školy, úřady, sportoviště",
    },
    {
      nazev: "Opravy a sanace omítek",
      popis: "Opadaná omítka, vlhké zdivo, praskliny. Najdeme příčinu, ne jen kosmetiku — sanační omítky, odvlhčení soklu, nové oplechování parapetů.",
      detail: "Starší zástavba, sokly, římsy",
    },
    {
      nazev: "Nátěry a čištění fasád",
      popis: "Když je fasáda zdravá a jen unavená: tlakové čištění, biocidní ošetření proti řasám a nový fasádní nátěr. Rychlá cesta k domu, který zase vypadá k světu.",
      detail: "Údržba bez lešení celé sezóny",
    },
  ];

  return (
    <main className="resta">
      {/* ================= HERO ================= */}
      <header className="hero">
        <div className="hero-inner">
          <div className="brand">
            <span className="brand-mark" aria-hidden="true">
              <i></i><i></i><i></i><i></i>
            </span>
            <span className="brand-name">RESTA<em>Liberec</em></span>
          </div>

          <h1 className="hero-title">
            <span className="ht-line ht-1">Fasáda má</span>
            <span className="ht-line ht-2">čtyři vrstvy.</span>
            <span className="ht-line ht-3">Známe každou<span className="tecka">.</span></span>
          </h1>

          <p className="hero-lead">
            Zateplujeme a opravujeme fasády bytových domů, škol a veřejných budov
            v Liberci a okolí. Od penetrace podkladu po finální omítku — jedna
            parta, jedna odpovědnost.
          </p>

          <ul className="hero-fakta" aria-label="Základní údaje o firmě">
            <li><strong>Liberec</strong><span>U Valchy 545, Liberec 3</span></li>
            <li><strong>ETICS</strong><span>certifikovaný zateplovací systém</span></li>
            <li><strong>Byty i veřejný sektor</strong><span>SVJ, družstva, města a obce</span></li>
          </ul>
        </div>

        {/* signature: řez zateplenou stěnou */}
        <div className="rez" aria-hidden="true">
          <div className="rez-vrstva rez-zdivo"><span>zdivo</span></div>
          <div className="rez-vrstva rez-lepidlo"><span>lepicí stěrka</span></div>
          <div className="rez-vrstva rez-izolant"><span>izolant 160&nbsp;mm</span></div>
          <div className="rez-vrstva rez-perlinka"><span>výztužná síťovina</span></div>
          <div className="rez-vrstva rez-omitka"><span>omítka</span></div>
        </div>
      </header>

      {/* ================= SEKCE 1: SKLADBA / SLUŽBY ================= */}
      <section className="sekce sekce-vrstvy" aria-labelledby="vrstvy-h">
        <div className="sekce-hlava">
          <p className="eyebrow">Skladba systému</p>
          <h2 id="vrstvy-h">Zateplení není lepení polystyrenu. Je to systém.</h2>
          <p className="sekce-uvod">
            Každá vrstva má svůj důvod a své pořadí. Když se jedna odbude,
            poznáte to za pár zim — na účtech za teplo i na prasklinách.
            Proto pracujeme takhle:
          </p>
        </div>

        <ol className="vrstvy">
          {vrstvy.map((v) => (
            <li key={v.c} className="vrstva">
              <span className="vrstva-cislo" aria-hidden="true">{v.c}</span>
              <div className="vrstva-text">
                <h3>{v.nazev}</h3>
                <p>{v.popis}</p>
              </div>
            </li>
          ))}
        </ol>

        <div className="sluzby-blok">
          <p className="eyebrow">Co pro vás uděláme</p>
          <div className="sluzby">
            {sluzby.map((s) => (
              <article key={s.nazev} className="sluzba">
                <h3>{s.nazev}</h3>
                <p>{s.popis}</p>
                <p className="sluzba-detail">{s.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ================= SEKCE 2: DŮVĚRA ================= */}
      <section className="sekce sekce-duvera" aria-labelledby="duvera-h">
        <div className="duvera-grid">
          <div className="duvera-text">
            <p className="eyebrow eyebrow-svetla">Proč Resta</p>
            <h2 id="duvera-h">Liberecká firma. Fasády tu děláme přes dvacet let.</h2>
            <p>
              Nejsme překupník práce ani firma z inzerátu. Sídlíme v Liberci
              na adrese U&nbsp;Valchy 545 a naše fasády potkáváte po celém městě
              i okolí — na bytových domech, školách i sportovních centrech.
              Když se za pět let objeví problém, víte, kde nás najdete.
            </p>
            <p>
              Zakázku vede jeden stavbyvedoucí od zaměření po předání.
              Rozpočet dostanete položkově — s tloušťkou izolantu, typem omítky
              a metry čtverečními, ne jednu částku „za fasádu“.
            </p>

            <blockquote className="reference">
              <p>
                „Zateplení celého panelového domu zvládli za jedno léto, včetně
                lodžií a nového soklu. Úspora na teple je proti minulé zimě
                skoro třetina a dům konečně vypadá k světu.“
              </p>
              <footer>— výbor SVJ, bytový dům se 48 byty, Liberec-Rochlice</footer>
            </blockquote>
          </div>

          <ul className="duvera-body" aria-label="Jak u nás zakázka probíhá">
            <li>
              <strong>Zaměření zdarma do 14 dnů</strong>
              <span>Přijedeme, změříme dům a probereme s vámi stav fasády i možnosti dotací.</span>
            </li>
            <li>
              <strong>Položkový rozpočet</strong>
              <span>Cena po vrstvách a metrech čtverečních. Žádné „vícepráce“, které vás překvapí na konci.</span>
            </li>
            <li>
              <strong>Práce podle normy</strong>
              <span>Kotvení, tloušťky i detaily kolem oken děláme podle ČSN a technologických listů výrobce systému.</span>
            </li>
            <li>
              <strong>Záruka a servis po záruce</strong>
              <span>Fasáda je na desítky let. Jsme z Liberce — ke svojí práci se vracíme a stojíme si za ní.</span>
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}
