export default function Page() {
  const sluzby = [
    {
      okruh: "Zdroj tepla",
      nazev: "Tepelná čerpadla a kotle",
      popis:
        "Navrhneme zdroj podle skutečné tepelné ztráty vašeho domu — tepelné čerpadlo vzduch–voda, kondenzační plynový kotel nebo kombinaci. Spočítáme návratnost, ne jen cenu montáže.",
      detail: "Návrh výkonu · dotace NZÚ · uvedení do provozu",
    },
    {
      okruh: "Rozvod tepla",
      nazev: "Podlahové topení a radiátory",
      popis:
        "Pokládáme podlahové okruhy s hydraulickým vyvážením, vyměňujeme stará litinová tělesa za desková. Každý okruh seřídíme, aby dům topil rovnoměrně a kotel neběžel naprázdno.",
      detail: "Pokládka okruhů · vyvážení soustavy · termohlavice",
    },
    {
      okruh: "Voda a servis",
      nazev: "Rozvody vody a pravidelný servis",
      popis:
        "Kompletní vodoinstalace při rekonstrukci koupelny i novostavbě. Ke každé topné soustavě nabízíme roční servisní prohlídku před sezónou — kontrolu tlaku, odvzdušnění a seřízení.",
      detail: "Rozvody PPR a měď · ohřívače vody · roční prohlídky",
    },
  ];

  const kroky = [
    {
      c: "01",
      t: "Přijedeme a změříme",
      p: "Do 3 dnů od zavolání jsme u vás. Projdeme dům, změříme stávající soustavu a řekneme na rovinu, co má smysl měnit a co ne.",
    },
    {
      c: "02",
      t: "Nabídka s pevnou cenou",
      p: "Do týdne dostanete položkový rozpočet. Cena, kterou podepíšete, je cena, kterou zaplatíte — vícepráce řešíme předem, ne fakturou.",
    },
    {
      c: "03",
      t: "Montáž bez zimy v domě",
      p: "Výměnu zdroje zvládáme tak, abyste byli bez tepla nanejvýš jeden den. Po montáži soustavu zaregulujeme a předáme s protokolem.",
    },
  ];

  const reference = [
    {
      misto: "Rodinný dům, Rudolfov",
      text: "Výměna starého plynového kotle za tepelné čerpadlo. Pánové z LARXu vyřídili i dotaci, montáž trvala den a půl. Účet za topení klesl o třetinu.",
      jmeno: "rodina Havlova",
    },
    {
      misto: "Bytový dům, České Budějovice — Pražské předměstí",
      text: "Hydraulické vyvážení celého domu, 24 bytů. Konečně topí i byty v posledním patře a nikdo nemusí větrat přetopený obývák.",
      jmeno: "SVJ Pražská 14",
    },
    {
      misto: "Novostavba, Hluboká nad Vltavou",
      text: "Podlahovka v celém přízemí plus radiátory v patře. Vše seřízené na první zátop, žádné reklamace. Doporučili nám je sousedé — a my doporučujeme dál.",
      jmeno: "manželé Šímovi",
    },
  ];

  return (
    <main className="hx-main">
      {/* ===================== HERO ===================== */}
      <header className="hx-hero">
        <div className="hx-hero-inner">
          <div className="hx-topbar">
            <span className="hx-wordmark" aria-label="LARX topenářství">
              LAR<span className="hx-wordmark-x">X</span>
              <span className="hx-wordmark-sub">topenářství · České Budějovice</span>
            </span>
            <span className="hx-topbar-note">montáže i servis v okruhu 40 km od Budějovic</span>
          </div>

          <div className="hx-hero-grid">
            <div className="hx-hero-copy">
              <p className="hx-eyebrow">Topenáři a instalatéři pro jižní Čechy</p>
              <h1 className="hx-headline">
                <span className="hx-hl-line hx-hl-1">Teplo v domě</span>
                <span className="hx-hl-line hx-hl-2">je řemeslo,</span>
                <span className="hx-hl-line hx-hl-3">ne náhoda.</span>
              </h1>
              <p className="hx-lede">
                Tepelná čerpadla, kotle, podlahové topení a rozvody vody. Spočítáme, navrhneme,
                namontujeme a seřídíme — a příští zimu už řešíte jen to, na kolik stupňů si natopit.
              </p>
              <div className="hx-hero-facts" role="list">
                <span role="listitem"><strong>17 let</strong> montáží v jižních Čechách</span>
                <span role="listitem"><strong>Pevná cena</strong> v položkovém rozpočtu</span>
                <span role="listitem"><strong>Servis</strong> do 48 hodin v topné sezóně</span>
              </div>
            </div>

            {/* Signature: termometrická stupnice — svislý sloupec topné soustavy */}
            <div className="hx-gauge" aria-hidden="true">
              <div className="hx-gauge-pipe">
                <div className="hx-gauge-fill" />
              </div>
              <div className="hx-gauge-scale">
                <span className="hx-tick"><i>90 °C</i> výstup z kotle</span>
                <span className="hx-tick"><i>55 °C</i> radiátory</span>
                <span className="hx-tick"><i>35 °C</i> podlahovka</span>
                <span className="hx-tick hx-tick-hot"><i>21 °C</i> váš obývák</span>
              </div>
            </div>
          </div>
        </div>
        <div className="hx-hero-baseline" aria-hidden="true">
          <span>zpátečka</span>
          <span>expanzní nádoba</span>
          <span>oběhové čerpadlo</span>
          <span>trojcestný ventil</span>
          <span>odvzdušnění</span>
        </div>
      </header>

      {/* ===================== SLUŽBY ===================== */}
      <section className="hx-section hx-sluzby" aria-labelledby="sluzby-h">
        <div className="hx-section-inner">
          <div className="hx-section-head">
            <p className="hx-eyebrow">Co pro vás uděláme</p>
            <h2 id="sluzby-h" className="hx-h2">
              Od kotelny po poslední radiátor
            </h2>
          </div>

          <div className="hx-cards">
            {sluzby.map((s) => (
              <article className="hx-card" key={s.nazev}>
                <p className="hx-card-okruh">{s.okruh}</p>
                <h3 className="hx-card-title">{s.nazev}</h3>
                <p className="hx-card-text">{s.popis}</p>
                <p className="hx-card-detail">{s.detail}</p>
              </article>
            ))}
          </div>

          <div className="hx-kroky">
            <h3 className="hx-kroky-title">Jak zakázka probíhá</h3>
            <ol className="hx-kroky-list">
              {kroky.map((k) => (
                <li className="hx-krok" key={k.c}>
                  <span className="hx-krok-c" aria-hidden="true">{k.c}</span>
                  <div>
                    <h4 className="hx-krok-t">{k.t}</h4>
                    <p className="hx-krok-p">{k.p}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* ===================== DŮVĚRA / REFERENCE ===================== */}
      <section className="hx-section hx-duvera" aria-labelledby="duvera-h">
        <div className="hx-section-inner">
          <div className="hx-section-head">
            <p className="hx-eyebrow hx-eyebrow-light">Kdo nám topí důvěru</p>
            <h2 id="duvera-h" className="hx-h2 hx-h2-light">
              Zákazníci z Budějovic a okolí
            </h2>
            <p className="hx-duvera-lede">
              Většina našich zakázek přichází na doporučení. Tady je pár z těch,
              kde nás pustili i s adresou.
            </p>
          </div>

          <div className="hx-refs">
            {reference.map((r) => (
              <figure className="hx-ref" key={r.misto}>
                <figcaption className="hx-ref-misto">{r.misto}</figcaption>
                <blockquote className="hx-ref-text">„{r.text}“</blockquote>
                <p className="hx-ref-jmeno">— {r.jmeno}</p>
              </figure>
            ))}
          </div>

          <div className="hx-duvera-pruh">
            <p>
              <strong>Jsme z Českých Budějovic.</strong> Když se v lednu něco pokazí,
              nejedeme k vám přes půl republiky — jsme na místě do 48 hodin,
              u havárií zpravidla týž den.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
