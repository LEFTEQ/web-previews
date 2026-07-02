const sluzby = [
  {
    kod: "OBK",
    nazev: "Obklady a dlažba",
    popis:
      "Keramika, přírodní kámen, mozaika i velkoformáty 120×275 cm. Kamenické rohy, zaleštěné pohledové hrany, vrtání diamantovou technikou — spáry lícují na milimetr.",
  },
  {
    kod: "VOD",
    nazev: "Voda a odpady",
    popis:
      "Nové rozvody vody a kanalizace, odtokové žlaby ve sprše v přesném spádu, montáž bojleru. Vše zazděné, otlakované a připravené na obklad.",
  },
  {
    kod: "ELE",
    nazev: "Elektroinstalace",
    popis:
      "Zásuvky u zrcadla tam, kde je opravdu potřebujete. Osvětlení, vyhřívaný žebřík, revize — silnoproud i slaboproud včetně dokumentace.",
  },
  {
    kod: "SDK",
    nazev: "Předstěny a podhledy",
    popis:
      "Impregnovaný sádrokarton do vlhka, předstěny pro závěsné WC, podhledy s bodovkami. Geberit schová instalace, vy vidíte jen čistou stěnu.",
  },
  {
    kod: "POD",
    nazev: "Podlahy a potěry",
    popis:
      "Lité podlahy cementové i anhydritové pomocí sila a pumpy. Rovina pod dlažbu i vinyl, podlahové topení není problém.",
  },
  {
    kod: "DES",
    nazev: "Návrh interiéru",
    popis:
      "Dispozice ve 2D, vizualizace ve 3D s vámi vybranými obklady a zařizovacími předměty. Vidíte hotovou koupelnu dřív, než sáhneme na první cihlu.",
  },
];

const kroky = [
  {
    cislo: "1",
    nazev: "Zavoláte, přijedeme zaměřit",
    popis: "Osobní schůzka u vás doma. Probereme, co vám na koupelně vadí a co od nové čekáte. Zaměříme na milimetry.",
  },
  {
    cislo: "2",
    nazev: "Návrh a výběr materiálů",
    popis: "Dispozice ve 2D, pak asistovaný výběr obkladů na vzorkovnách v Plzni. Nakonec 3D vizualizace s vašimi konkrétními materiály.",
  },
  {
    cislo: "3",
    nazev: "Cena a termín",
    popis: "Položková nabídka bez hvězdiček. Když souhlasíte, zablokujeme si pro vás termín a ten platí.",
  },
  {
    cislo: "4",
    nazev: "Realizace pod jednou střechou",
    popis: "Bourání, voda, elektřina, sádrokarton, obklady, podlaha — všechna řemesla děláme sami. Nekoordinujete nikoho, jen si přebíráte hotovou koupelnu.",
  },
];

const duvody = [
  {
    titulek: "11 let, jedna firma, všechna řemesla",
    text: "Stavíme od roku 2012. Instalatér, elektrikář, obkladač i sádrokartonář jsou u nás jeden tým — nikdo na nikoho nečeká a odpovědnost nese jedna firma.",
  },
  {
    titulek: "Plzeň a okolí, ale nejen",
    text: "Nejčastěji rekonstruujeme v Plzeňském kraji, jezdíme i do Středočeského a Karlovarského. Máme za sebou realizace v Praze, ve Znojmě i v Německu.",
  },
  {
    titulek: "Certifikace a standardy",
    text: "Pravidelně se školíme, držíme certifikát Rigips. Hydroizolace pod obkladem, spády žlabů, revize elektro — děláme to podle norem, ne podle citu.",
  },
  {
    titulek: "Zákazníci se vracejí",
    text: "Po koupelně nás lidé volají na kuchyň, podlahy nebo celé bytové jádro. To je pro nás lepší reference než jakákoli hvězdička.",
  },
];

export default function Page() {
  return (
    <main className="ds">
      {/* ===== HERO ===== */}
      <header className="hero">
        <div className="hero-grout" aria-hidden="true" />
        <div className="hero-inner">
          <div className="hero-top">
            <span className="wordmark">
              Design<em>Store</em>
              <span className="wordmark-sub">rekonstrukce koupelen · Plzeň</span>
            </span>
            <a className="hero-tel" href="tel:+420603268449">
              +420 603 268 449
            </a>
          </div>

          <h1 className="hero-title">
            <span className="line line-1">Koupelna,</span>
            <span className="line line-2">kde spáry lícují</span>
            <span className="line line-3">
              na <strong>milimetr.</strong>
            </span>
          </h1>

          <p className="hero-lead">
            Kompletní rekonstrukce koupelen a bytových jader v Plzni a okolí. Od 3D
            návrhu s vašimi obklady po poslední vyspárovanou dlaždici — všechna
            řemesla jedna parta, od roku 2012.
          </p>

          <div className="hero-akce">
            <a className="btn btn-plna" href="tel:+420603268449">
              Zavolat a domluvit zaměření
            </a>
            <a className="btn btn-linka" href="#sluzby">
              Co všechno uděláme
            </a>
          </div>

          <dl className="hero-fakta">
            <div>
              <dt>Návrh</dt>
              <dd>2D dispozice + 3D vizualizace</dd>
            </div>
            <div>
              <dt>Realizace</dt>
              <dd>všechna řemesla vlastní partou</dd>
            </div>
            <div>
              <dt>Formáty obkladů</dt>
              <dd>od mozaiky po 120 × 275 cm</dd>
            </div>
          </dl>
        </div>

        {/* signature: velkoformátová „stěna obkladů" */}
        <div className="hero-stena" aria-hidden="true">
          <div className="kachle">
            <span className="k k-a" />
            <span className="k k-b" />
            <span className="k k-c" />
            <span className="k k-d" />
            <span className="k k-e" />
            <span className="k k-f" />
          </div>
          <span className="stena-kota">120 × 275 cm — největší formát, který pokládáme</span>
        </div>
      </header>

      {/* ===== SLUŽBY ===== */}
      <section className="sekce sluzby" id="sluzby" aria-labelledby="sluzby-h">
        <div className="sekce-inner">
          <p className="eyebrow">Jedna parta, šest řemesel</p>
          <h2 id="sluzby-h">
            Nemusíte shánět instalatéra, elektrikáře ani obkladače. Máme je všechny.
          </h2>
          <p className="sekce-lead">
            Každé řemeslo v koupelně na sebe navazuje — když je dělá jedna firma,
            nikdo nečeká na nikoho a chyby se nepřehazují mezi dodavateli.
          </p>

          <ul className="sluzby-mrizka">
            {sluzby.map((s) => (
              <li key={s.kod} className="sluzba">
                <span className="sluzba-kod" aria-hidden="true">
                  {s.kod}
                </span>
                <h3>{s.nazev}</h3>
                <p>{s.popis}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ===== DŮVĚRA / PRŮBĚH ===== */}
      <section className="sekce prubeh" aria-labelledby="prubeh-h">
        <div className="sekce-inner">
          <div className="prubeh-sloupce">
            <div className="prubeh-kroky">
              <p className="eyebrow eyebrow-svetly">Jak to u nás probíhá</p>
              <h2 id="prubeh-h">Od prvního telefonátu po předání klíčů od nové koupelny</h2>
              <ol className="kroky">
                {kroky.map((k) => (
                  <li key={k.cislo} className="krok">
                    <span className="krok-cislo" aria-hidden="true">
                      {k.cislo}
                    </span>
                    <div>
                      <h3>{k.nazev}</h3>
                      <p>{k.popis}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            <aside className="prubeh-duvera">
              <h3 className="duvera-titulek">Proč nám lidé v Plzni svěřují koupelny</h3>
              <ul className="duvody">
                {duvody.map((d) => (
                  <li key={d.titulek}>
                    <h4>{d.titulek}</h4>
                    <p>{d.text}</p>
                  </li>
                ))}
              </ul>
              <p className="duvera-citace">
                „Vizualizaci jsme viděli v březnu, v květnu jsme se sprchovali v nové
                koupelně. Přesně podle návrhu, včetně spár.“
                <span className="citace-autor">— rekonstrukce bytového jádra, Plzeň-Bory</span>
              </p>
            </aside>
          </div>
        </div>
      </section>
    </main>
  );
}
