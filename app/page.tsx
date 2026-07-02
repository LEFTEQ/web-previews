const sluzby = [
  {
    kod: "NEREZ",
    nazev: "Nerezové nádoby a konstrukce",
    popis:
      "Nádrže, zásobníky, zábradlí a konstrukce z nerezové oceli. Sváříme metodou TIG, švy brousíme a leštíme — nerez u nás vypadá i po letech jako první den.",
    material: "AISI 304 / 316",
  },
  {
    kod: "STROJ",
    nazev: "Zakázková strojní zařízení",
    popis:
      "Od výkresu po funkční celek. Stavíme jednoúčelové stroje, dopravníky a rámy strojů přesně podle vaší technologie a provozu.",
    material: "ocel S235 / S355",
  },
  {
    kod: "OBRÁB",
    nazev: "Kovoobrábění a lisování",
    popis:
      "Soustružení, frézování a lisování dílů v kusové i malosériové výrobě. Přesnost hlídáme na desetiny — díl vám sedne napoprvé.",
    material: "kusově i série",
  },
  {
    kod: "INTER",
    nazev: "Interiéry z mědi a mosazi",
    popis:
      "Zábradlí, madla, krby, svítidla a dekorace z nerezu, mědi a mosazi. Kovařina, která patří do obýváku stejně jako do haly.",
    material: "Cu / Ms / nerez",
  },
];

const milniky = [
  {
    rok: "1993",
    text: "Začínáme v Českých Budějovicích jako malá kovodílna zaměřená na ocel a nerez.",
  },
  {
    rok: "2001",
    text: "Rozšiřujeme výrobu o zakázková strojní zařízení a nerezové nádoby pro potravinářství.",
  },
  {
    rok: "2010",
    text: "Přibývá kovoobrábění a lisování — díly vyrábíme kompletně pod jednou střechou.",
  },
  {
    rok: "dnes",
    text: "Přes 30 let sváříme, obrábíme a lisujeme pro velké firmy i drobné zákazníky z jižních Čech.",
  },
];

const zasady = [
  {
    titul: "Kalkulace zdarma a nezávazně",
    text: "Pošlete nám výkres, náčrt nebo jen fotku s rozměry. Do pár dní víte, kolik to bude stát — a nic vás to nezavazuje.",
  },
  {
    titul: "Jedna dílna, celá zakázka",
    text: "Dělení materiálu, obrábění, svařování i povrchová úprava u nás. Nemusíte obíhat tři firmy kvůli jednomu dílu.",
  },
  {
    titul: "Stejně pro malé i velké",
    text: "Jeden kus zábradlí dostane stejnou péči jako série pro strojírnu. To je přístup, který nás živí od roku 1993.",
  },
];

export default function Page() {
  return (
    <main className="nk">
      {/* ===== HERO ===== */}
      <header className="hero">
        <div className="hero-top">
          <div className="wordmark" aria-label="NK Kovo">
            <span className="wordmark-nk">NK</span>
            <span className="wordmark-kovo">KOVO</span>
          </div>
          <p className="hero-lokalita">České Budějovice · od 1993</p>
          <a className="hero-tel" href="tel:+420387000000">
            Zavolat do dílny
          </a>
        </div>

        <div className="hero-body">
          <p className="hero-eyebrow">Kovářství · zámečnictví · kovovýroba</p>
          <h1 className="hero-titul">
            <span className="radek radek-1">Ocel.</span>
            <span className="radek radek-2">Nerez.</span>
            <span className="radek radek-3">
              Měď<span className="tecka">.</span>
            </span>
          </h1>
          <p className="hero-podtitul">
            Přes třicet let sváříme, obrábíme a lisujeme kov v Českých
            Budějovicích. Od nerezové nádrže po mosazné madlo — přesně podle
            vašeho výkresu, nebo podle nápadu na ubrousku.
          </p>
          <div className="hero-akce">
            <a className="btn btn-plna" href="tel:+420387000000">
              Zavolat: 387 000 000
            </a>
            <a className="btn btn-obrys" href="mailto:info@nkkovo.cz">
              Poslat výkres e-mailem
            </a>
          </div>
        </div>

        {/* signature: rozžhavený svarový šev napříč heroem */}
        <div className="svar" aria-hidden="true">
          <span className="svar-linka"></span>
          <span className="svar-jiskra"></span>
        </div>

        <div className="hero-pas" aria-hidden="true">
          <span>TIG</span>
          <span>·</span>
          <span>AISI 304</span>
          <span>·</span>
          <span>S355</span>
          <span>·</span>
          <span>Cu</span>
          <span>·</span>
          <span>Ms</span>
          <span>·</span>
          <span>±0,1 mm</span>
        </div>
      </header>

      {/* ===== SLUŽBY ===== */}
      <section className="sekce sluzby" aria-labelledby="sluzby-titul">
        <div className="sekce-hlava">
          <p className="eyebrow">Co u nás vyrobíme</p>
          <h2 id="sluzby-titul">
            Čtyři řemesla,
            <br />
            jedna dílna
          </h2>
        </div>

        <ul className="sluzby-mrizka">
          {sluzby.map((s) => (
            <li key={s.kod} className="karta">
              <div className="karta-hlava">
                <span className="karta-kod">{s.kod}</span>
                <span className="karta-material">{s.material}</span>
              </div>
              <h3>{s.nazev}</h3>
              <p>{s.popis}</p>
            </li>
          ))}
        </ul>

        <p className="sluzby-pozn">
          Nevíte, kam vaše zakázka patří? Pošlete ji tak, jak je —{" "}
          <a href="mailto:info@nkkovo.cz">poradíme zdarma</a> a připravíme
          nezávaznou kalkulaci.
        </p>
      </section>

      {/* ===== DŮVĚRA / O NÁS ===== */}
      <section className="sekce duvera" aria-labelledby="duvera-titul">
        <div className="sekce-hlava">
          <p className="eyebrow eyebrow-svetly">Proč nám firmy z jižních Čech věří</p>
          <h2 id="duvera-titul">Kov děláme od roku 1993</h2>
        </div>

        <div className="duvera-obsah">
          <ol className="casova-osa">
            {milniky.map((m) => (
              <li key={m.rok}>
                <span className="osa-rok">{m.rok}</span>
                <p>{m.text}</p>
              </li>
            ))}
          </ol>

          <div className="zasady">
            {zasady.map((z) => (
              <div key={z.titul} className="zasada">
                <h3>{z.titul}</h3>
                <p>{z.text}</p>
              </div>
            ))}
            <blockquote className="citace">
              <p>
                „Stejný přístup i kvalitu práce u nás ocení velké společnosti
                stejně jako drobní zákazníci.“
              </p>
              <cite>— zásada, která platí v dílně od prvního dne</cite>
            </blockquote>
          </div>
        </div>
      </section>
    </main>
  );
}
