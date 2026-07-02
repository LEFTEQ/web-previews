const nabidky = [
  {
    typ: "Pronájem",
    titulek: "Byt 3+kk po kompletní rekonstrukci, ul. Zborovská",
    lokalita: "Ostrava — Moravská Ostrava",
    cena: "23 000 Kč / měsíc",
    stitek: "Novinka",
  },
  {
    typ: "Prodej",
    titulek: "Byt 2+1 s balkonem v top lokalitě, ul. Heyrovského",
    lokalita: "Ostrava — Poruba",
    cena: "3 500 000 Kč",
    stitek: "Rezervace",
  },
  {
    typ: "Prodej",
    titulek: "Stavební parcela 1 562 m², Komárov",
    lokalita: "Opava",
    cena: "4 499 000 Kč",
    stitek: null,
  },
  {
    typ: "Prodej",
    titulek: "Rodinný dům 4+kk v nové rezidenční čtvrti, Hodoňovice",
    lokalita: "Baška",
    cena: "9 990 000 Kč",
    stitek: "Doporučujeme",
  },
  {
    typ: "Pronájem",
    titulek: "Manažerský byt 4+kk na Vítězné — nadstandardní bydlení",
    lokalita: "Ostrava — Moravská Ostrava",
    cena: "39 000 Kč / měsíc",
    stitek: "Video",
  },
  {
    typ: "Pronájem",
    titulek: "Byt 2+kk na ul. Průběžná, po rekonstrukci",
    lokalita: "Ostrava — Poruba",
    cena: "15 800 Kč / měsíc",
    stitek: null,
  },
];

const sluzby = [
  {
    nazev: "Prodej a pronájem",
    popis:
      "Nemovitost nafotíme, naskenujeme ve 3D a inzerujeme na všech velkých portálech. Prohlídky řešíme za vás.",
  },
  {
    nazev: "Výkup nemovitostí",
    popis:
      "Potřebujete peníze rychle? Nemovitost vykoupíme napřímo, s férovou cenou a penězi do pár dnů od podpisu.",
  },
  {
    nazev: "Odhad ceny zdarma",
    popis:
      "Řekneme vám, kolik váš byt nebo dům v Ostravě reálně stojí — podle skutečných prodejů v okolí, ne podle inzerátů.",
  },
  {
    nazev: "Financování a hypotéka",
    popis:
      "Porovnáme nabídky bank a vyřídíme hypotéku i pojištění. Vy podepíšete, my hlídáme termíny.",
  },
  {
    nazev: "Správa nemovitostí",
    popis:
      "Pronajímáte? Hlídáme platby, řešíme nájemníky i opravy. Vám chodí peníze, starosti zůstávají u nás.",
  },
  {
    nazev: "Rekonstrukce před prodejem",
    popis:
      "Vymalování, podlahy, koupelna — drobná investice před prodejem umí zvednout cenu o statisíce.",
  },
];

export default function Page() {
  return (
    <main className="neon">
      {/* ===== HERO ===== */}
      <header className="hero">
        <div className="hero-inner">
          <div className="hero-top">
            <span className="wordmark">
              NEON<em>reality</em>
            </span>
            <a className="hero-tel" href="tel:+420773666886">
              +420 773 666 886
            </a>
          </div>

          <h1 className="hero-title">
            <span className="line line-1">Bydlení,</span>
            <span className="line line-2">
              které <b className="neon-word">svítí</b>
            </span>
            <span className="line line-3">na mapě Ostravy.</span>
          </h1>

          <p className="hero-sub">
            Realitní kancelář z Poděbradovy ulice. Prodáváme, pronajímáme a
            vykupujeme byty, domy i pozemky v Ostravě a okolí — osobně, bez
            call centra.
          </p>

          <div className="hero-cta">
            <a className="btn btn-neon" href="#nabidka">
              Prohlédnout nabídku
            </a>
            <a className="btn btn-ghost" href="tel:+420773666886">
              Zavolat makléři
            </a>
          </div>

          <dl className="hero-facts" aria-label="Neon Reality v číslech">
            <div>
              <dt>Působíme v</dt>
              <dd>Ostravě, Opavě, Karviné</dd>
            </div>
            <div>
              <dt>Odhad ceny</dt>
              <dd>Zdarma do 48 hodin</dd>
            </div>
            <div>
              <dt>Prezentace</dt>
              <dd>3D scan každé nemovitosti</dd>
            </div>
          </dl>
        </div>

        {/* signature: neonová silueta ostravské haldy + věž Nové radnice */}
        <svg
          className="hero-skyline"
          viewBox="0 0 1200 220"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            className="skyline-path"
            d="M0 200 L120 200 L150 140 L165 140 L165 90 L180 90 L180 140 L210 140 L240 200 L340 200 L380 120 L420 200 L470 200 L470 150 L520 150 L520 200 L560 200 L590 60 L600 60 L600 30 L612 30 L612 60 L622 60 L650 200 L760 200 L800 160 L840 200 L920 200 L960 100 L1000 200 L1200 200"
            fill="none"
          />
        </svg>
      </header>

      {/* ===== SEKCE 1: NABÍDKA ===== */}
      <section className="sekce sekce-nabidka" id="nabidka" aria-labelledby="nabidka-h">
        <div className="sekce-inner">
          <div className="sekce-head">
            <p className="eyebrow">Aktuálně v nabídce</p>
            <h2 id="nabidka-h">
              Byty, domy a pozemky <span className="h-neon">v Ostravě a okolí</span>
            </h2>
            <p className="sekce-perex">
              Každou nemovitost si projdeme osobně, nafotíme a naskenujeme ve
              3D. To, co vidíte v inzerátu, uvidíte i na prohlídce.
            </p>
          </div>

          <figure className="sekce-foto">
            <img
              src="/section-1.webp"
              alt="Interiér zrekonstruovaného bytu z nabídky Neon Reality v Ostravě"
            />
            <figcaption>Byt 3+kk po rekonstrukci, ul. Zborovská — připraven k nastěhování</figcaption>
          </figure>

          <ul className="nabidka-grid">
            {nabidky.map((n) => (
              <li key={n.titulek} className="karta">
                <div className="karta-meta">
                  <span className="karta-typ">{n.typ}</span>
                  {n.stitek && <span className="karta-stitek">{n.stitek}</span>}
                </div>
                <h3 className="karta-titulek">{n.titulek}</h3>
                <p className="karta-lokalita">{n.lokalita}</p>
                <p className="karta-cena">{n.cena}</p>
              </li>
            ))}
          </ul>

          <p className="nabidka-pozn">
            Nenašli jste, co hledáte? Zavolejte — část nabídky prodáváme ještě
            před inzercí.
          </p>
        </div>
      </section>

      {/* ===== SEKCE 2: SLUŽBY + DŮVĚRA ===== */}
      <section className="sekce sekce-sluzby" aria-labelledby="sluzby-h">
        <div className="sekce-inner">
          <div className="sekce-head">
            <p className="eyebrow">Co pro vás uděláme</p>
            <h2 id="sluzby-h">
              Od odhadu ceny <span className="h-neon">po předání klíčů</span>
            </h2>
          </div>

          <ul className="sluzby-grid">
            {sluzby.map((s) => (
              <li key={s.nazev} className="sluzba">
                <h3>{s.nazev}</h3>
                <p>{s.popis}</p>
              </li>
            ))}
          </ul>

          <div className="o-nas">
            <figure className="o-nas-foto">
              <img
                src="/section-2.webp"
                alt="Lukáš Hampel, makléř Neon Reality Invest, při jednání s klienty v kanceláři na Poděbradově ulici v Ostravě"
              />
            </figure>
            <div className="o-nas-text">
              <p className="eyebrow">Kdo se o vás postará</p>
              <h3>Lukáš Hampel a malý tým, který znáte jménem</h3>
              <p>
                Nejsme franšíza s anonymní linkou. Jsme ostravská kancelář na
                Poděbradově 2738/16 — celý obchod s vámi řeší jeden makléř od
                první prohlídky až po předání klíčů a přepis energií.
              </p>
              <ul className="duvera-body">
                <li>Smlouvy připravuje advokát, peníze jdou přes úschovu</li>
                <li>3D scan a video u každé nemovitosti — méně zbytečných prohlídek</li>
                <li>Odměna za tip: doporučte nám nemovitost a vyplatíme vás</li>
              </ul>
              <a className="btn btn-neon" href="tel:+420773666886">
                Domluvit odhad zdarma
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
