// Bistrodent spol. s r.o. — zubní ordinace, Rooseveltova 20, Olomouc
// Rodinná ordinace tří generací Bistrých. Design: klinická čistota + rodinná vřelost.
// Signature: "okluzní linka" — vlnovka odvozená z profilu zubní korunky, vede celou stránkou.

const lekari = [
  {
    jmeno: "MUDr. Vlastimil Bistrý",
    role: "Zakladatel ordinace",
    popis: "Konzervační stomatologie a protetika. Pacienty vede přes třicet let — mnohé rodiny už ve třetí generaci.",
    email: "vlastimil.bistry@bistrodent.cz",
    monogram: "VB",
  },
  {
    jmeno: "MUDr. Hana Bistrá",
    role: "Zubní lékařka",
    popis: "Prevence a dentální hygiena dospělých. Klidný přístup, který ocení i pacienti s obavami z ošetření.",
    email: "hana.bistra@bistrodent.cz",
    monogram: "HB",
  },
  {
    jmeno: "MUDr. Tomáš Bistrý",
    role: "Zubní lékař",
    popis: "Estetické výplně a endodoncie pod zvětšením. Moderní postupy v ordinaci s rodinnou tradicí.",
    email: "tomas.bistry@bistrodent.cz",
    monogram: "TB",
  },
  {
    jmeno: "MDDr. Barbora Večeřová",
    role: "Zubní lékařka",
    popis: "Ošetření dětí a dospívajících. První návštěvu vede tak, aby se malý pacient chtěl vrátit.",
    email: "barbora.vecerova@bistrodent.cz",
    monogram: "BV",
  },
];

const sluzby = [
  {
    nazev: "Preventivní prohlídky",
    text: "Dvakrát ročně, hradí pojišťovna. Kontrola zubů, dásní a rentgen podle potřeby — problém zachytíme dřív, než začne bolet.",
  },
  {
    nazev: "Ošetření kazu a výplně",
    text: "Bílé fotokompozitní výplně, které na zubu nejsou vidět. Ošetřujeme šetrně a s anestezií, pokud si ji přejete.",
  },
  {
    nazev: "Endodoncie — léčba kanálků",
    text: "Záchrana zubu místo trhání. Kanálky ošetřujeme strojově a pod zvětšením, na jedno až dvě sezení.",
  },
  {
    nazev: "Korunky, můstky a protézy",
    text: "Protetika na míru ve spolupráci s laboratoří. Náhrada, která sedí, drží a vypadá jako vlastní zub.",
  },
  {
    nazev: "Dětská stomatologie",
    text: "Registrujeme děti od prvního zoubku. Prohlídky hravou formou, pečetění fisur a nácvik čištění.",
  },
  {
    nazev: "Akutní bolest",
    text: "Našim registrovaným pacientům s bolestí najdeme termín tentýž den. Zavolejte ráno na 585 221 155.",
  },
];

const ordinacniDoba = [
  { den: "Pondělí", cas: "7.30 – 17.00" },
  { den: "Úterý", cas: "7.30 – 15.00" },
  { den: "Středa", cas: "7.30 – 15.00" },
  { den: "Čtvrtek", cas: "7.30 – 15.00" },
  { den: "Pátek", cas: "7.30 – 12.00" },
];

export default function Page() {
  return (
    <main className="bd">
      {/* ============ HERO ============ */}
      <header className="bd-hero">
        <div className="bd-hero-inner">
          <div className="bd-topbar">
            <span className="bd-wordmark" aria-label="Bistrodent">
              BISTRO<em>DENT</em>
            </span>
            <a className="bd-topbar-tel" href="tel:+420585221155">
              585 221 155
            </a>
          </div>

          <div className="bd-hero-main">
            <p className="bd-eyebrow">Zubní ordinace · Rooseveltova 20, Olomouc</p>
            <h1 className="bd-hero-title">
              <span className="bd-line bd-line-1">Rodinní zubaři</span>
              <span className="bd-line bd-line-2">tří generací<span className="bd-tecka">.</span></span>
            </h1>
            <p className="bd-hero-sub">
              Bistrých je u nás v ordinaci víc — a to je dobře. Otec, syn a celý tým
              se o vaše zuby starají tak, jak se stará rodina: dlouhodobě, poctivě
              a bez zbytečného strašení vrtačkou.
            </p>
            <div className="bd-hero-akce">
              <a className="bd-btn bd-btn-plna" href="tel:+420585221155">
                Zavolat do ordinace
              </a>
              <a className="bd-btn bd-btn-obrys" href="mailto:ordinace@bistrodent.cz">
                Napsat e-mail
              </a>
            </div>
          </div>

          {/* Signature: okluzní linka — profil zubních korunek vykreslený jedním tahem */}
          <div className="bd-okluze" aria-hidden="true">
            <svg viewBox="0 0 1200 160" preserveAspectRatio="none" focusable="false">
              <path
                className="bd-okluze-path"
                d="M0,130 C60,130 70,40 130,40 C190,40 190,110 240,110 C290,110 300,30 360,30 C420,30 420,120 470,120 C520,120 530,45 590,45 C650,45 650,115 700,115 C750,115 760,25 820,25 C880,25 880,120 930,120 C980,120 990,40 1050,40 C1110,40 1120,130 1200,130"
                fill="none"
              />
            </svg>
          </div>

          <div className="bd-hero-fakta">
            <div className="bd-fakt">
              <span className="bd-fakt-cislo">4</span>
              <span className="bd-fakt-text">lékaři v jedné ordinaci</span>
            </div>
            <div className="bd-fakt">
              <span className="bd-fakt-cislo">Po–Pá</span>
              <span className="bd-fakt-text">ordinujeme každý všední den</span>
            </div>
            <div className="bd-fakt">
              <span className="bd-fakt-cislo">7.30</span>
              <span className="bd-fakt-text">začínáme — stihnete to před prací</span>
            </div>
          </div>
        </div>
      </header>

      {/* ============ SLUŽBY ============ */}
      <section className="bd-sekce bd-sluzby" aria-labelledby="sluzby-nadpis">
        <div className="bd-sekce-inner">
          <div className="bd-sekce-hlava">
            <h2 id="sluzby-nadpis" className="bd-sekce-titul">
              S čím vám pomůžeme
            </h2>
            <p className="bd-sekce-perex">
              Od preventivní prohlídky po záchranu zubu. Většinu péče poskytujeme
              na pojišťovnu, cenu nadstandardu vám řekneme vždy předem.
            </p>
          </div>

          <ul className="bd-sluzby-mrizka">
            {sluzby.map((s) => (
              <li key={s.nazev} className="bd-sluzba">
                <span className="bd-sluzba-zub" aria-hidden="true">
                  <svg viewBox="0 0 32 32" focusable="false">
                    <path
                      d="M8 4 C4.5 4 3 7.5 3 11 C3 15 5.5 17 6 20 C6.6 23.5 7 28 9.5 28 C12 28 11.5 22 13 19.5 C14 17.8 15 17 16 17 C17 17 18 17.8 19 19.5 C20.5 22 20 28 22.5 28 C25 28 25.4 23.5 26 20 C26.5 17 29 15 29 11 C29 7.5 27.5 4 24 4 C20.5 4 19 6 16 6 C13 6 11.5 4 8 4 Z"
                      fill="none"
                    />
                  </svg>
                </span>
                <h3 className="bd-sluzba-nazev">{s.nazev}</h3>
                <p className="bd-sluzba-text">{s.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ============ TÝM + DŮVĚRA ============ */}
      <section className="bd-sekce bd-tym" aria-labelledby="tym-nadpis">
        <div className="bd-sekce-inner">
          <div className="bd-sekce-hlava">
            <h2 id="tym-nadpis" className="bd-sekce-titul bd-titul-svetly">
              Kdo se o vás postará
            </h2>
            <p className="bd-sekce-perex bd-perex-svetly">
              Čtyři lékaři, jedna ordinace, žádné přehazování mezi pobočkami.
              Pamatujeme si vás — i to, že nemáte rádi jehly.
            </p>
          </div>

          <ul className="bd-tym-mrizka">
            {lekari.map((l) => (
              <li key={l.jmeno} className="bd-lekar">
                <span className="bd-lekar-monogram" aria-hidden="true">
                  {l.monogram}
                </span>
                <div className="bd-lekar-info">
                  <h3 className="bd-lekar-jmeno">{l.jmeno}</h3>
                  <p className="bd-lekar-role">{l.role}</p>
                  <p className="bd-lekar-popis">{l.popis}</p>
                  <a className="bd-lekar-mail" href={`mailto:${l.email}`}>
                    {l.email}
                  </a>
                </div>
              </li>
            ))}
          </ul>

          <div className="bd-prakticke">
            <div className="bd-prakticke-blok">
              <h3 className="bd-prakticke-titul">Ordinační doba</h3>
              <table className="bd-doba">
                <tbody>
                  {ordinacniDoba.map((r) => (
                    <tr key={r.den}>
                      <th scope="row">{r.den}</th>
                      <td>{r.cas}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className="bd-prakticke-pozn">
                Provozní doba je o půl hodiny až hodinu delší — telefon zvedáme
                i po skončení ordinace.
              </p>
            </div>

            <div className="bd-prakticke-blok">
              <h3 className="bd-prakticke-titul">Kudy k nám</h3>
              <p className="bd-prakticke-text">
                <strong>Rooseveltova 20, Olomouc</strong> — pět minut pěšky od
                Galerie Šantovka. Kvůli rekonstrukci Rooseveltovy ulice je
                parkování v okolí omezené: doporučujeme MHD nebo parkoviště
                Šantovky a časovou rezervu navíc.
              </p>
              <p className="bd-prakticke-text">
                Objednání a dotazy: <a href="tel:+420585221155">585 221 155</a>,
                {" "}SMS na <a href="tel:+420724058372">724 058 372</a> nebo
                {" "}<a href="mailto:ordinace@bistrodent.cz">ordinace@bistrodent.cz</a>.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
