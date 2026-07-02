export default function Page() {
  const caje = [
    {
      kategorie: "Zelené",
      nazev: "Long Jing — Dračí studna",
      puvod: "Če-ťiang, Čína",
      teplota: "75 °C",
      poznamka: "Kaštanová sladkost, plochý lístek pražený v pánvi wok. Nejprodávanější zelený čaj u nás.",
    },
    {
      kategorie: "Oolongy",
      nazev: "Tie Guan Yin — Železná bohyně",
      puvod: "An-si, Fu-ťien",
      teplota: "90 °C",
      poznamka: "Orchidejová vůně, čtyři až šest nálevů. Připravujeme v malé konvičce gaiwan.",
    },
    {
      kategorie: "Tmavé",
      nazev: "Pu-erh Šu 2016",
      puvod: "Jün-nan, lisovaný koláč",
      teplota: "95 °C",
      poznamka: "Zemitý, hluboký, zraje u nás v obchodě. Odlamujeme přímo z koláče před vámi.",
    },
    {
      kategorie: "Japonské",
      nazev: "Sencha Jukata",
      puvod: "Kagošima, Japonsko",
      teplota: "70 °C",
      poznamka: "Svěží, travnatá, umami. K ní doporučujeme kousek hořké čokolády z našeho pultu.",
    },
    {
      kategorie: "Bylinné",
      nazev: "Pražská směs",
      puvod: "míchaná u nás",
      teplota: "100 °C",
      poznamka: "Máta, meduňka, šípek a kousek jablka. Bez kofeinu, děti ji milují s medem.",
    },
  ];

  const duvody = [
    {
      titulek: "Vážíme na gramy, ne na oko",
      text: "Každý čaj prodáváme sypaný od 25 gramů. Řekneme vám, kolik lžiček na konvici, jakou vodu a jak dlouho louhovat — a napíšeme to na sáček.",
    },
    {
      titulek: "Ochutnáte, než koupíte",
      text: "Nevíte, jestli je pu-erh pro vás? Uvaříme vám šálek na místě. U nás se čaj nejdřív pije, pak platí.",
    },
    {
      titulek: "Knihy a noviny k šálku",
      text: "Jsme trafika i čajovna. K oolongu si vezměte denní tisk nebo knihu z našeho regálu — čtení k čaji patří od nepaměti.",
    },
  ];

  return (
    <main className="dt">
      {/* ===== HERO ===== */}
      <header className="dt-hero">
        <div className="dt-hero-inner">
          <p className="dt-wordmark" aria-label="Dobrá Trafika">
            <span className="dt-wordmark-dobra">Dobrá</span>
            <span className="dt-wordmark-trafika">Trafika</span>
          </p>

          <div className="dt-hero-grid">
            <div className="dt-hero-text">
              <p className="dt-eyebrow">Čajovna &amp; malý krám · Praha, Újezd</p>
              <h1 className="dt-hero-title">
                <span className="dt-line dt-line-1">Sypaný čaj,</span>
                <span className="dt-line dt-line-2">horká voda</span>
                <span className="dt-line dt-line-3">a klid<em>.</em></span>
              </h1>
              <p className="dt-hero-lead">
                Přes 80 druhů čaje z Číny, Japonska a Tchaj-wanu. Uvaříme vám
                šálek na místě, nebo navážíme domů. Otevřeno každý den od 10 do 20.
              </p>
              <div className="dt-hero-actions">
                <a className="dt-btn dt-btn-plna" href="#listky">Prohlédnout čajový lístek</a>
                <a className="dt-btn dt-btn-linka" href="#o-nas">Kde nás najdete</a>
              </div>
            </div>

            {/* Signature: typografická "pára" stoupající z šálku — kaligrafické linky */}
            <div className="dt-para" aria-hidden="true">
              <svg viewBox="0 0 220 340" className="dt-para-svg" role="presentation" focusable="false">
                <path className="dt-para-line dt-para-a" d="M110 300 C 70 250, 150 220, 105 170 C 65 125, 145 95, 108 40" />
                <path className="dt-para-line dt-para-b" d="M140 300 C 110 260, 175 225, 138 175 C 105 130, 170 100, 140 55" />
                <path className="dt-para-line dt-para-c" d="M80 300 C 55 265, 110 235, 78 190 C 50 150, 100 120, 75 75" />
                <ellipse className="dt-para-salek" cx="110" cy="316" rx="78" ry="14" />
                <path className="dt-para-miska" d="M32 316 C 36 344, 184 344, 188 316" />
              </svg>
              <p className="dt-para-znak">茶</p>
            </div>
          </div>

          <div className="dt-hero-pruh" role="list" aria-label="Rychlá fakta">
            <span role="listitem">80+ sypaných čajů</span>
            <span className="dt-tecka" aria-hidden="true">·</span>
            <span role="listitem">Váženo od 25 g</span>
            <span className="dt-tecka" aria-hidden="true">·</span>
            <span role="listitem">Denní tisk &amp; knihy</span>
            <span className="dt-tecka" aria-hidden="true">·</span>
            <span role="listitem">2 minuty od tramvaje Újezd</span>
          </div>
        </div>
      </header>

      {/* ===== ČAJOVÝ LÍSTEK ===== */}
      <section className="dt-listky" id="listky" aria-labelledby="listky-nadpis">
        <div className="dt-sekce-hlava">
          <h2 id="listky-nadpis">Z čajového lístku</h2>
          <p>
            Pět čajů, které teď máme nejraději. Celý lístek má přes osmdesát
            položek — všechny vám rádi navážíme s sebou.
          </p>
        </div>

        <ul className="dt-listek">
          {caje.map((caj) => (
            <li className="dt-caj" key={caj.nazev}>
              <p className="dt-caj-kategorie">{caj.kategorie}</p>
              <div className="dt-caj-telo">
                <h3 className="dt-caj-nazev">{caj.nazev}</h3>
                <p className="dt-caj-puvod">{caj.puvod}</p>
                <p className="dt-caj-poznamka">{caj.poznamka}</p>
              </div>
              <p className="dt-caj-teplota">
                <span className="dt-caj-teplota-cislo">{caj.teplota}</span>
                <span className="dt-caj-teplota-popis">voda</span>
              </p>
            </li>
          ))}
        </ul>
      </section>

      {/* ===== O NÁS / DŮVĚRA ===== */}
      <section className="dt-onas" id="o-nas" aria-labelledby="onas-nadpis">
        <div className="dt-sekce-hlava dt-sekce-hlava-svetla">
          <h2 id="onas-nadpis">Malý krám s velkou konvicí</h2>
          <p>
            Dobrá Trafika stojí na pražském Újezdě přes dvacet let. Začínali jsme
            s novinami a tabákem, dnes u nás voní hlavně čaj — a noviny zůstaly.
          </p>
        </div>

        <div className="dt-duvody">
          {duvody.map((d) => (
            <article className="dt-duvod" key={d.titulek}>
              <h3>{d.titulek}</h3>
              <p>{d.text}</p>
            </article>
          ))}
        </div>

        <figure className="dt-citace">
          <blockquote>
            <p>
              „Chodím sem každou středu na sencha a Lidovky. Paní za pultem si
              pamatuje, jakou vodu mám rád. To vám žádný e-shop nedá.“
            </p>
          </blockquote>
          <figcaption>— pan Vorel, štamgast z Malé Strany</figcaption>
        </figure>

        <div className="dt-mapa-radek">
          <div className="dt-mapa-blok">
            <p className="dt-mapa-popis">Kde nás najdete</p>
            <p className="dt-mapa-adresa">Újezd, Praha 1 — Malá Strana</p>
            <p className="dt-mapa-detail">Tramvaj 9, 12, 15, 20 · zastávka Újezd, pak 2 minuty pěšky</p>
          </div>
          <div className="dt-mapa-blok">
            <p className="dt-mapa-popis">Otevírací doba</p>
            <p className="dt-mapa-adresa">Každý den 10–20</p>
            <p className="dt-mapa-detail">O svátcích vaříme taky — čaj svátky nezná</p>
          </div>
        </div>
      </section>
    </main>
  );
}
