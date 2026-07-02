export default function Page() {
  const strata = [
    { hloubka: "0–3 m", vrstva: "Ornice a navážka", pozn: "Pažení proti povrchové vodě" },
    { hloubka: "3–12 m", vrstva: "Zvětralá žula", pozn: "Typické podloží Krušných hor" },
    { hloubka: "12–30 m", vrstva: "Puklinová žula", pozn: "Zde bývá voda — přítoky z puklin" },
    { hloubka: "30+ m", vrstva: "Pevný masiv", pozn: "Dovrtáme na stabilní vydatnost" },
  ];

  const sluzby = [
    {
      cislo: "Ø 152–254 mm",
      nazev: "Vrtané studny na klíč",
      text: "Najdeme zdroj vody na vašem pozemku, vyvrtáme a vystrojíme studnu, provedeme čerpací zkoušku. Dodáme kompletní podklady pro vodoprávní řízení — na úřad jdete s hotovou složkou.",
    },
    {
      cislo: "do 200 m",
      nazev: "Vrty pro tepelná čerpadla",
      text: "Hloubkové vrty pro systémy země–voda. Vrtáme i ve stísněných podmínkách zahrad a dvorů, kolektor osadíme a tlakově odzkoušíme.",
    },
    {
      cislo: "jádrové",
      nazev: "Průzkumné a ložiskové vrty",
      text: "Jádrové vrty pro inženýrskou geologii, hydrogeologii a ložiskový průzkum. Vzorky předáme neporušené, s přesnou metráží pro geologa.",
    },
    {
      cislo: "vystrojené",
      nazev: "Monitorovací a sanační vrty",
      text: "Hydrogeologické monitorovací vrty s výstrojí dle projektu — pro sledování hladin, kvality podzemní vody i sanační zásahy.",
    },
  ];

  const kroky = [
    { k: "1", t: "Zavoláte nebo napíšete", d: "Popíšete pozemek a k čemu vodu potřebujete. Přijedeme se podívat — v okolí Nejdku a Karlových Varů obvykle do týdne." },
    { k: "2", t: "Najdeme vodu a navrhneme vrt", d: "S hydrogeologem určíme místo, hloubku a průměr. Dostanete posudek, projekt a jasnou cenu předem." },
    { k: "3", t: "Vrtáme a strojíme", d: "Vlastní vrtnou soupravou, obvykle 1–3 dny. Studnu vystrojíme, obsypeme, utěsníme a provedeme čerpací zkoušku." },
    { k: "4", t: "Papíry na úřad dodáme my", d: "Závěrečná zpráva a podklady pro vodoprávní řízení jsou v ceně. Vy už jen čerpáte vlastní vodu." },
  ];

  return (
    <main className="vk">
      {/* ============ HERO ============ */}
      <header className="hero">
        <div className="hero-inner">
          <div className="brand">
            <span className="brand-mark" aria-hidden="true">
              {/* wordmark: vrták jako svislice mezi VRT a KV */}
              <svg viewBox="0 0 24 44" width="18" height="33" role="img" aria-label="">
                <path d="M12 0v28" stroke="currentColor" strokeWidth="3" />
                <path d="M4 28h16l-8 14z" fill="currentColor" />
              </svg>
            </span>
            <span className="brand-name">VRT<em>–</em>KV</span>
            <span className="brand-sub">vrtané studny · Nejdek</span>
          </div>

          <h1 className="hero-title">
            <span className="line l1">Voda pod vaším</span>
            <span className="line l2">pozemkem.</span>
            <span className="line l3">My ji vyvrtáme.</span>
          </h1>

          <p className="hero-lead">
            Vrtané studny na klíč v Krušných horách a na Karlovarsku — od vyhledání
            zdroje po razítko z úřadu. Vrtáme od roku 1994, jako firma od roku 2006.
          </p>

          <div className="hero-cta">
            <a className="btn btn-solid" href="tel:+420353925111">Zavolat a domluvit obhlídku</a>
            <a className="btn btn-ghost" href="#sluzby">Co vrtáme</a>
          </div>

          <dl className="hero-facts">
            <div><dt>Zkušenost</dt><dd>30 let u vrtné soupravy</dd></div>
            <div><dt>Oprávnění</dt><dd>Báňský úřad Sokolov</dd></div>
            <div><dt>Působíme</dt><dd>Karlovarský kraj a okolí</dd></div>
          </dl>
        </div>

        {/* Signature: řez vrtem — profil horninových vrstev s kolonou vrtu */}
        <figure className="borehole" aria-label="Schematický geologický profil vrtu: ornice, zvětralá žula, puklinová žula s vodou, pevný masiv">
          <div className="bh-column" aria-hidden="true">
            <span className="bh-pipe" />
            <span className="bh-water" />
            <span className="bh-bit">
              <svg viewBox="0 0 40 26" width="40" height="26"><path d="M2 2h36l-18 22z" fill="currentColor" /></svg>
            </span>
          </div>
          <ol className="bh-strata">
            {strata.map((s) => (
              <li key={s.hloubka}>
                <span className="bh-depth">{s.hloubka}</span>
                <span className="bh-name">{s.vrstva}</span>
                <span className="bh-note">{s.pozn}</span>
              </li>
            ))}
          </ol>
        </figure>
      </header>

      {/* ============ SLUŽBY ============ */}
      <section className="sluzby" id="sluzby" aria-labelledby="sluzby-h">
        <div className="sec-head">
          <p className="eyebrow">Čtyři druhy vrtů</p>
          <h2 id="sluzby-h">Od studny na zahradě po ložiskový průzkum</h2>
          <p className="sec-lead">
            Každý vrt děláme vlastní technikou a vlastními lidmi. Žádní subdodavatelé,
            kteří odjedou v půlce — od prvního metru po předání jednáte s námi.
          </p>
        </div>

        <div className="karty">
          {sluzby.map((s) => (
            <article className="karta" key={s.nazev}>
              <p className="karta-spec">{s.cislo}</p>
              <h3>{s.nazev}</h3>
              <p>{s.text}</p>
            </article>
          ))}
        </div>

        <p className="sluzby-pozn">
          Ceny se odvíjejí od hloubky a geologie. Po obhlídce dostanete konkrétní
          nabídku — v žule kolem Nejdku víme, do čeho vrtáme.
        </p>
      </section>

      {/* ============ JAK TO PROBÍHÁ + DŮVĚRA ============ */}
      <section className="proces" aria-labelledby="proces-h">
        <div className="sec-head sec-head-light">
          <p className="eyebrow">Jak studna vzniká</p>
          <h2 id="proces-h">Od telefonátu k vlastní vodě ve čtyřech krocích</h2>
        </div>

        <ol className="kroky">
          {kroky.map((k) => (
            <li key={k.k}>
              <span className="krok-metr" aria-hidden="true">{k.k}</span>
              <h3>{k.t}</h3>
              <p>{k.d}</p>
            </li>
          ))}
        </ol>

        <div className="duvera">
          <blockquote className="citace">
            <p>
              „Slíbili vodu do třiceti metrů a našli ji v šestadvaceti. Papíry pro
              úřad přivezli hotové. Studna běží třetí rok bez závady.“
            </p>
            <cite>— rodinný dům, Nová Role</cite>
          </blockquote>

          <ul className="opravneni">
            <li>
              <strong>Hornická činnost povolena</strong>
              <span>Oprávnění k činnosti prováděné hornickým způsobem, Obvodní báňský úřad Sokolov</span>
            </li>
            <li>
              <strong>Zapsaná společnost</strong>
              <span>VRT-KV s.r.o., OR Krajského soudu v Plzni, oddíl C, vložka 18599 · založena 2006</span>
            </li>
            <li>
              <strong>Najdete nás v Nejdku</strong>
              <span>Rolavská 1219, 362 21 Nejdek — vrtáme po celém Karlovarském kraji</span>
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}
