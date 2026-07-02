// Fábera Systems s. r. o. — návrh nového webu
// Koncept: „Profil klíče" — signature prvek je zubatá linie klíčového profilu,
// která prochází hero sekcí. Rodinné zámečnictví od roku 1990, Praha.

const sluzby = [
  {
    id: "SGHK",
    nazev: "Systémy generálního klíče",
    popis:
      "Jeden klíč pro správce, vlastní klíč pro každý byt. Navrhneme a vyrobíme systém přesně pro váš dům — od 6 dveří po celý areál.",
  },
  {
    id: "VLOŽKY",
    nazev: "Sjednocení a výměna vložek",
    popis:
      "Sjednotíme všechny zámky v domě na jeden klíč. Vložky v bezpečnostní třídě RC3 a RC4, s ochranou proti odvrtání i bumpingu.",
  },
  {
    id: "KLÍČE",
    nazev: "Výroba klíčů",
    popis:
      "Běžné, tvarové, trezorové i autoklíče s čipem. Na počkání v provozovnách Radotín a Libuš, u chráněných profilů na bezpečnostní kartu.",
  },
  {
    id: "PŘÍSTUP",
    nazev: "Přístupové systémy",
    popis:
      "Čipy, kódové klávesnice a otevírání mobilem místo svazku klíčů. Ztracený čip zablokujeme na dálku — zámek se měnit nemusí.",
  },
  {
    id: "DVEŘE",
    nazev: "Dveře a dveřní příslušenství",
    popis:
      "Bezpečnostní dveře, samozavírače, panty, kování a repase vchodových dveří. Přivezeme, namontujeme a zprovozníme.",
  },
  {
    id: "24/7",
    nazev: "Nouzové otevírání",
    popis:
      "Zabouchnuté nebo zamčené dveře otevřeme šetrně, bez zbytečného poškození. Asistujeme i při exekucích a soudních úkonech.",
  },
];

const milniky = [
  { rok: "1990", text: "Josef Fábera zakládá zámečnictví. Do oboru té doby vnáší už 15 let praxe." },
  { rok: "1996", text: "První provozovna v Praze‑Krči: výroba klíčů a první systémy generálního klíče." },
  { rok: "2002", text: "Do firmy nastupuje syn zakladatele. Řemeslo se předává v rodině dál." },
  { rok: "2003", text: "Otevíráme provozovnu Praha 5 – Radotín, dnešní hlavní zázemí firmy." },
  { rok: "2011", text: "V Radotíně vzniká showroom zabezpečení a výukový polygon pro učně oboru." },
  { rok: "dnes", text: "Servisujeme desítky bytových družstev a správních firem po celé Praze i ČR." },
];

export default function Page() {
  return (
    <main className="fs">
      {/* ===== HERO ===== */}
      <header className="hero">
        <div className="hero-top">
          <span className="wordmark" aria-label="Fábera Systems">
            FÁBERA<span className="wordmark-cut">SYSTEMS</span>
          </span>
          <a className="hero-phone" href="tel:800102100">
            <span className="hero-phone-label">Zavolejte zdarma</span>
            <span className="hero-phone-num">800 102 100</span>
          </a>
        </div>

        <div className="hero-body">
          <p className="hero-eyebrow">
            Zámečnictví a montáž zabezpečení · Praha · rodinná firma od roku 1990
          </p>
          <h1 className="hero-title">
            <span className="hero-line hero-line-1">Váš dům.</span>
            <span className="hero-line hero-line-2">Jeden klíč.</span>
            <span className="hero-line hero-line-3">
              Žádné <em>starosti.</em>
            </span>
          </h1>
          <p className="hero-sub">
            Vložky, zámky, systémy generálního klíče a přístupové systémy — navrhneme,
            namontujeme a zprovozníme. Zakázky děláme na klíč, doslova.
          </p>
        </div>

        {/* Signature: profil klíče — zubatá linie vyříznutá napříč hero sekcí */}
        <div className="keyline" aria-hidden="true">
          <svg
            viewBox="0 0 1200 96"
            preserveAspectRatio="none"
            focusable="false"
            role="presentation"
          >
            <path
              className="keyline-path"
              d="M0,60 L80,60 L104,20 L128,60 L200,60 L224,34 L256,34 L280,60 L360,60 L384,12 L408,52 L432,12 L456,60 L560,60 L584,40 L648,40 L672,60 L760,60 L784,18 L816,18 L840,60 L920,60 L944,44 L968,44 L992,60 L1064,60 L1088,26 L1112,60 L1200,60"
            />
          </svg>
          <div className="keyline-bow">
            <span className="keyline-bow-hole" />
          </div>
        </div>

        <div className="hero-facts" role="list">
          <p role="listitem">
            <strong>34 let</strong> v oboru, řemeslo předávané z otce na syna
          </p>
          <p role="listitem">
            <strong>2 provozovny</strong> — Radotín a Libuš, klíče na počkání
          </p>
          <p role="listitem">
            <strong>Servis</strong> pro bytová družstva a správní firmy
          </p>
        </div>
      </header>

      {/* ===== SLUŽBY ===== */}
      <section className="sluzby" aria-labelledby="sluzby-h">
        <div className="sekce-hlava">
          <h2 id="sluzby-h">Co pro vás uděláme</h2>
          <p>
            Od jedné vyrobené vložky po zabezpečení celého bytového domu. Všechno vlastními
            techniky — přivezeme, namontujeme, zprovozníme.
          </p>
        </div>
        <ul className="sluzby-mrizka">
          {sluzby.map((s) => (
            <li key={s.id} className="sluzba">
              <span className="sluzba-stitek">{s.id}</span>
              <h3>{s.nazev}</h3>
              <p>{s.popis}</p>
            </li>
          ))}
        </ul>
        <p className="sluzby-druzstva">
          <strong>Spravujete dům?</strong> Pro bytová družstva a správní firmy držíme stálý
          servis: jedna smlouva, jedno číslo, opravy zámků i dveří bez shánění řemeslníka.
        </p>
      </section>

      {/* ===== DŮVĚRA / HISTORIE ===== */}
      <section className="duvera" aria-labelledby="duvera-h">
        <div className="sekce-hlava sekce-hlava-svetla">
          <h2 id="duvera-h">Rodinná dílna, ne call centrum</h2>
          <p>
            Firmu založil v roce 1990 Josef Fábera a dodnes v ní pracuje. Zkušenosti předává
            synovi i každému, kdo u nás drží frézu na klíče. Když nám zavoláte, mluvíte
            s někým, kdo zámek sám rozebere.
          </p>
        </div>

        <ol className="casova-osa">
          {milniky.map((m) => (
            <li key={m.rok}>
              <span className="osa-rok">{m.rok}</span>
              <p>{m.text}</p>
            </li>
          ))}
        </ol>

        <div className="pobocky">
          <article className="pobocka">
            <h3>Praha 5 – Radotín</h3>
            <p className="pobocka-adresa">Vrážská 1507, 153 00 Praha 5</p>
            <p className="pobocka-cas">Po–Pá 8:00–18:00 · So 9:00–12:00</p>
            <a href="mailto:radotin@faberasystems.com">radotin@faberasystems.com</a>
          </article>
          <article className="pobocka">
            <h3>Praha 4 – Libuš</h3>
            <p className="pobocka-adresa">V Lužích 818/23, 142 00 Praha 4, Hala B</p>
            <p className="pobocka-cas">Po–Pá 8:00–16:00</p>
            <a href="mailto:libus@faberasystems.com">libus@faberasystems.com</a>
          </article>
        </div>
      </section>
    </main>
  );
}
