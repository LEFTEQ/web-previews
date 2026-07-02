const sluzbyServis = [
  {
    nazev: "Preventivní prohlídky",
    popis:
      "Pravidelná kontrola chladiva, filtrů a elektroinstalace, než se z drobnosti stane odstávka. Vhodné pro kanceláře, ordinace i výrobu.",
  },
  {
    nazev: "Čištění a seřízení",
    popis:
      "Kompletní vyčištění výměníků a kondenzátu, dezinfekce jednotky a zaregulování výkonu. Klimatizace pak chladí tišeji a levněji.",
  },
  {
    nazev: "Opravy a odstranění poruch",
    popis:
      "Diagnostika a oprava poruch na zařízeních jakéhokoli typu a výrobce — od mobilní jednotky po strojovnu vzduchotechniky.",
  },
  {
    nazev: "Revize zařízení",
    popis:
      "Zákonné revize a kontroly těsnosti chladivových okruhů včetně protokolů, které potřebujete pro provoz i pojišťovnu.",
  },
];

const krokyDodavka = [
  {
    krok: "Studie a projekt",
    popis: "Vybereme typ zařízení přesně pro vaše prostředí — dílna, ordinace, obchod i byt.",
  },
  {
    krok: "Dodávka a montáž",
    popis: "Zařízení dovezeme, namontujeme a uvedeme do provozu. Vše vlastními vyškolenými techniky.",
  },
  {
    krok: "Zaregulování a zaučení",
    popis: "Systém zaregulujeme na projektované hodnoty a obsluhu naučíme, jak s ním pracovat.",
  },
  {
    krok: "Záruční i pozáruční servis",
    popis: "U dodaného zařízení zůstáváme. Servis držíme po celou dobu jeho životnosti.",
  },
];

const znacky = [
  "DAIKIN",
  "AIRWELL",
  "LG Electronics",
  "KARMA",
  "LVZ GEA",
  "REMAK",
  "ATREA",
  "VTS CLIMA",
];

export default function Page() {
  return (
    <main className="ks">
      {/* ================= HERO ================= */}
      <header className="hero">
        <div className="hero-top">
          <div className="wordmark" aria-label="Klimaservis Ostrava v.o.s.">
            <span className="wordmark-klima">KLIMA</span>
            <span className="wordmark-servis">SERVIS</span>
            <span className="wordmark-mesto">Ostrava&nbsp;v.o.s.</span>
          </div>
          <p className="hero-tag">Klimatizace &amp; vzduchotechnika od roku 1971</p>
        </div>

        <div className="hero-body">
          <h1 className="hero-title">
            <span className="line line-1">Studený vzduch</span>
            <span className="line line-2">
              je <em>řemeslo</em>.
            </span>
            <span className="line line-3">Děláme ho v Ostravě</span>
            <span className="line line-4">přes padesát let.</span>
          </h1>

          {/* Signature: lamely vzduchotechnické mřížky, ze kterých „proudí" vzduch */}
          <div className="grille" aria-hidden="true">
            <span className="lamela l1" />
            <span className="lamela l2" />
            <span className="lamela l3" />
            <span className="lamela l4" />
            <span className="lamela l5" />
            <span className="lamela l6" />
            <span className="lamela l7" />
          </div>

          <p className="hero-lead">
            Servisujeme, opravujeme a dodáváme klimatizační a vzduchotechnická
            zařízení — od malé jednotky v bytě po strojovny výrobních hal a
            nemocnic. Vyrostli jsme ze střediska klimatizace Nové huti a od
            roku 1991 pracujeme pod vlastním jménem.
          </p>

          <div className="hero-cta">
            <a className="btn btn-primary" href="tel:+420596000000">
              Zavolat servis
            </a>
            <a className="btn btn-ghost" href="#dodavky">
              Chci novou klimatizaci
            </a>
          </div>
        </div>

        <div className="hero-strip" role="list" aria-label="Klíčová fakta">
          <div className="strip-item" role="listitem">
            <span className="strip-num">24/7</span>
            <span className="strip-label">hotovostní služba pro smluvní zákazníky</span>
          </div>
          <div className="strip-item" role="listitem">
            <span className="strip-num">1971</span>
            <span className="strip-label">začátky ve středisku klimatizace Nové huti</span>
          </div>
          <div className="strip-item" role="listitem">
            <span className="strip-num">8</span>
            <span className="strip-label">značek se smluvním zastoupením pro ČR</span>
          </div>
        </div>
      </header>

      {/* ================= SERVIS ================= */}
      <section className="sekce sekce-servis" aria-labelledby="servis-h">
        <div className="sekce-hlava">
          <p className="eyebrow">Servis a údržba</p>
          <h2 id="servis-h">
            Když klimatizace stojí, stojí i provoz. Proto jsme na telefonu
            nonstop.
          </h2>
          <p className="sekce-perex">
            Zajistíme servis na zařízení jakéhokoli typu — i na to, které jsme
            nedodávali my. Pro vybrané zákazníky držíme hotovostní službu
            24 hodin denně včetně sobot, nedělí a svátků.
          </p>
        </div>

        <ul className="servis-mrizka">
          {sluzbyServis.map((s) => (
            <li key={s.nazev} className="servis-karta">
              <span className="karta-lamela" aria-hidden="true" />
              <h3>{s.nazev}</h3>
              <p>{s.popis}</p>
            </li>
          ))}
        </ul>

        <div className="pohotovost">
          <p className="pohotovost-text">
            <strong>Porucha o víkendu?</strong> Smluvním zákazníkům vyjíždíme
            nonstop — v Ostravě i v celém Moravskoslezském kraji.
          </p>
          <a className="btn btn-primary" href="tel:+420596000000">
            Zavolat pohotovost
          </a>
        </div>
      </section>

      {/* ================= DODÁVKY / DŮVĚRA ================= */}
      <section className="sekce sekce-dodavky" id="dodavky" aria-labelledby="dodavky-h">
        <div className="sekce-hlava">
          <p className="eyebrow eyebrow-svetla">Dodávky na klíč</p>
          <h2 id="dodavky-h">Od projektu po zaučení obsluhy. Jedna firma, jedna odpovědnost.</h2>
          <p className="sekce-perex">
            Nové klimatizace i generální opravy stávajících zařízení dodáváme
            kompletně na klíč. Nemusíte shánět projektanta, montážníky ani
            revizního technika — všechno zajistí naši lidé, vyškolení přímo u
            výrobců.
          </p>
        </div>

        <ol className="kroky">
          {krokyDodavka.map((k, i) => (
            <li key={k.krok} className="krok">
              <span className="krok-cislo" aria-hidden="true">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3>{k.krok}</h3>
                <p>{k.popis}</p>
              </div>
            </li>
          ))}
        </ol>

        <div className="znacky">
          <p className="znacky-titulek">
            Smluvní zastoupení výrobců pro servis, montáž i prodej v ČR:
          </p>
          <ul className="znacky-list">
            {znacky.map((z) => (
              <li key={z}>{z}</li>
            ))}
          </ul>
        </div>

        <blockquote className="kredo">
          <p>
            „Naši technici se učili řemeslo ve strojovnách Nové huti. Dnes se
            školí přímo ve výrobních závodech Daikinu nebo LG — ale přístup
            zůstal stejný: zařízení musí běžet.“
          </p>
          <cite>— technici Klimaservisu Ostrava, v oboru od roku 1971</cite>
        </blockquote>
      </section>
    </main>
  );
}
