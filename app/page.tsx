export default function Page() {
  const sluzby = [
    {
      tag: "KAROSÁRNA",
      title: "Klempířské práce",
      desc: "Rovnání a výměna dílů karoserie po nehodě i po letech provozu. Blatníky, prahy, sloupky, podběhy — vracíme plechu původní tvar na rovnacím rámu, ne tmelem.",
    },
    {
      tag: "LAKOVNA",
      title: "Lakýrnické práce",
      desc: "Lakování dílů i celků s přesným namícháním odstínu podle kódu barvy vozu. Oprava po opravě nepoznáte — ani na světle, ani na přechodu dílů.",
    },
    {
      tag: "POJISTKA",
      title: "Pojistné události od A do Z",
      desc: "Nabouraný vůz k nám přivezete (nebo ho odtáhneme) a my vyřídíme prohlídku, komunikaci s pojišťovnou i fakturaci. Vy řešíte jen předání klíčů.",
    },
    {
      tag: "SERVIS",
      title: "Mechanika a diagnostika",
      desc: "Servisní prohlídky, brzdy, spojky, provozní kapaliny, geometrie, klimatizace. Diagnostikou najdeme závadu dřív, než vás nechá stát.",
    },
    {
      tag: "SKLO",
      title: "Autosklo",
      desc: "Výměna čelních, bočních i zadních skel všech značek. U pojištěného skla vyřídíme událost za vás — často bez spoluúčasti.",
    },
    {
      tag: "STK",
      title: "Příprava a zajištění STK",
      desc: "Vůz projdeme, opravíme, co by neprošlo, a na stanici ho zavezeme sami. Vrátíme vám ho s platnou známkou.",
    },
  ];

  const kroky = [
    {
      num: "1",
      title: "Zavoláte nebo přijedete",
      desc: "Vůz si prohlédneme na místě ve Starobylé ulici na Praze 4. Rovnou řekneme, co oprava obnáší a kolik bude stát.",
    },
    {
      num: "2",
      title: "Domluvíme rozsah a termín",
      desc: "Žádné navyšování v průběhu. Pokud při rozebrání najdeme něco navíc, nejdřív voláme vám.",
    },
    {
      num: "3",
      title: "Opravíme a předáme",
      desc: "Klempířina, lak, mechanika — vše pod jednou střechou, takže vůz nikam nepřevážíme a termíny držíme.",
    },
  ];

  return (
    <main className="pp">
      {/* ================= HERO ================= */}
      <header className="hero">
        <div className="hero-topbar">
          <div className="wordmark" aria-label="PP Autoservis">
            <span className="wordmark-pp">PP</span>
            <span className="wordmark-rest">AUTOSERVIS</span>
          </div>
          <p className="hero-loc">Starobylá 881/13 · Praha 4</p>
        </div>

        {/* signature: pás rovnaného plechu — vlna, která se narovnává */}
        <div className="hero-body">
          <p className="hero-eyebrow">Autoklempířství &amp; karosárna · Praha 4 — Háje</p>
          <h1 className="hero-title">
            <span className="hero-line hero-line-1">Pomačkaný plech</span>
            <span className="hero-line hero-line-2">
              narovnáme <em>do roviny.</em>
            </span>
          </h1>

          <svg
            className="hero-wave"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            aria-hidden="true"
            focusable="false"
          >
            {/* pomačkaný plech vlevo → rovný plech vpravo */}
            <path
              className="wave-path"
              d="M0,60 C40,10 70,110 110,55 C150,5 180,115 225,60 C270,15 300,100 350,58 C400,22 440,92 500,60 C560,32 620,78 700,60 C800,42 950,60 1200,60"
              fill="none"
            />
            <path
              className="wave-path wave-path-ghost"
              d="M0,60 L1200,60"
              fill="none"
            />
          </svg>

          <div className="hero-foot">
            <p className="hero-lede">
              Oprava karoserie po nehodě, lakování dílů i celků a kompletní
              vyřízení pojistné události. Rodinný servis pro všechny značky —
              odtah zajistíme nonstop.
            </p>
            <ul className="hero-facts" aria-label="Základní fakta o servisu">
              <li>
                <strong>Vše pod jednou střechou</strong>
                <span>klempírna · lakovna · mechanika</span>
              </li>
              <li>
                <strong>Pojistku vyřídíme za vás</strong>
                <span>prohlídka i papíry s pojišťovnou</span>
              </li>
              <li>
                <strong>Odtah nonstop</strong>
                <span>po Praze i okolí, kdykoli</span>
              </li>
            </ul>
          </div>
        </div>
      </header>

      {/* ================= SLUŽBY ================= */}
      <section className="sluzby" aria-labelledby="sluzby-h">
        <div className="section-head">
          <h2 id="sluzby-h">Co pro váš vůz uděláme</h2>
          <p>
            Nemusíte objíždět tři dílny. Karoserii srovnáme, nalakujeme a vůz
            seřídíme na jednom místě na Praze 4.
          </p>
        </div>

        <div className="sluzby-grid">
          {sluzby.map((s) => (
            <article className="karta" key={s.title}>
              <p className="karta-tag">{s.tag}</p>
              <h3>{s.title}</h3>
              <p className="karta-desc">{s.desc}</p>
            </article>
          ))}
        </div>

        <p className="sluzby-pas">
          Dále: renovace alu kol a plechů · autoelektrika · plnění klimatizace ·
          dovoz vozidel z EU · opravy vozů všech značek
        </p>
      </section>

      {/* ================= DŮVĚRA / JAK TO PROBÍHÁ ================= */}
      <section className="duvera" aria-labelledby="duvera-h">
        <div className="duvera-inner">
          <div className="duvera-text">
            <h2 id="duvera-h">
              Nabourané auto je stres.
              <br />
              Oprava už být nemusí.
            </h2>
            <p>
              Jsme malý servis, kde s vámi mluví přímo ten, kdo bude na voze
              pracovat. Řekneme rovnou, co má smysl opravit a co ne — a cena,
              kterou slyšíte na začátku, platí i na konci.
            </p>
            <p className="duvera-adresa">
              PP Autoservis s.r.o. · Starobylá 881/13, Praha 4 — Háje
            </p>
          </div>

          <ol className="kroky">
            {kroky.map((k) => (
              <li className="krok" key={k.num}>
                <span className="krok-num" aria-hidden="true">
                  {k.num}
                </span>
                <div>
                  <h3>{k.title}</h3>
                  <p>{k.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </main>
  );
}
