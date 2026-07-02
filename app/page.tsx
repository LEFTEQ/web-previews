const veze = [
  {
    krok: "Postavíme věž",
    popis:
      "Kamerovou věž přivezeme na stavbu a do dvou hodin hlídá. Nepotřebuje elektřinu — v létě ji pohání slunce, v zimě větrná turbína a baterie.",
    detail: "Instalace do 2 hodin",
  },
  {
    krok: "Kamery vidí všechno",
    popis:
      "Inteligentní analýza obrazu odhalí každý pohyb na perimetru, ve dne i v noci, bez slepých míst. Každé narušení se nahrává jako důkaz.",
    detail: "Detekce 100 % narušitelů",
  },
  {
    krok: "Operátor okamžitě reaguje",
    popis:
      "Poplach jde do našeho vlastního dohledového centra v Praze. Náš operátor narušitele osloví reproduktorem a volá zásah — nic neoutsourcujeme.",
    detail: "Dohled 24/7/365",
  },
  {
    krok: "Vy vidíte stavbu z mobilu",
    popis:
      "V klientské aplikaci se kdykoli podíváte na živý obraz z kamer. Ráno, o víkendu, na dovolené — stavba je vždy na dosah.",
    detail: "Živý přístup na kamery",
  },
];

const duvody = [
  {
    cislo: "99,6 %",
    text: "narušitelů uteče, jakmile zjistí, že jsou sledováni. Většinu incidentů vyřeší hlas operátora z reproduktoru věže.",
  },
  {
    cislo: "−50 %",
    text: "nákladů proti fyzické ostraze. Věž neusne, nedá si pauzu a oči má všude — a přesto stojí polovinu.",
  },
  {
    cislo: "0 Kč",
    text: "za elektřinu i přípojku. Věž PROGUARD Solar funguje celoročně i na stavbě, kde elektřina ještě není zavedená.",
  },
];

export default function Page() {
  return (
    <main className="zs">
      {/* ================= HERO ================= */}
      <header className="hero">
        <div className="hero-top">
          <div className="wordmark" aria-label="Zabezpečení stavby s.r.o.">
            <span className="wordmark-badge" aria-hidden="true">
              <svg viewBox="0 0 24 24" width="22" height="22" fill="none">
                <path
                  d="M12 2 4 5v6c0 5 3.4 9.4 8 11 4.6-1.6 8-6 8-11V5l-8-3Z"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinejoin="round"
                />
                <circle cx="12" cy="11" r="3" stroke="currentColor" strokeWidth="1.6" />
                <circle cx="12" cy="11" r="1" fill="currentColor" />
              </svg>
            </span>
            <span className="wordmark-text">
              ZABEZPEČENÍ<b>STAVBY</b>
            </span>
          </div>
          <a className="hero-tel" href="tel:+420774429966">
            <span className="hero-tel-dot" aria-hidden="true" />
            774 429 966
          </a>
        </div>

        <div className="hero-grid">
          <div className="hero-copy">
            <p className="hero-eyebrow">Kamerové věže PROGUARD · Praha a celá ČR</p>
            <h1 className="hero-h1">
              <span className="hero-line hero-line-1">Vaše stavba</span>
              <span className="hero-line hero-line-2">pod dohledem.</span>
              <span className="hero-line hero-line-3">
                <em>Nonstop.</em>
              </span>
            </h1>
            <p className="hero-sub">
              Solární kamerová věž s vlastním dohledovým centrem uhlídá staveniště
              za polovinu ceny fyzické ostrahy. Bez elektřiny, bez slepých míst,
              bez strážného, který usne.
            </p>
            <div className="hero-cta">
              <a className="btn btn-primary" href="tel:+420774429966">
                Zavolat 774 429 966
              </a>
              <a className="btn btn-ghost" href="mailto:info@zabezpeceni-stavby.cz">
                Napsat poptávku
              </a>
            </div>
            <p className="hero-note">
              Česká firma · vlastní operátoři · instalace věže do 2 hodin
            </p>
          </div>

          {/* Signature: typografická kamerová věž se skenovacím kuželem */}
          <div className="hero-tower" aria-hidden="true">
            <svg
              className="tower-svg"
              viewBox="0 0 360 520"
              role="presentation"
              focusable="false"
            >
              {/* skenovací kužel */}
              <g className="tower-beam">
                <polygon points="180,96 -40,420 180,420" fill="url(#beam)" />
              </g>
              <defs>
                <linearGradient id="beam" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#FFB300" stopOpacity="0.55" />
                  <stop offset="100%" stopColor="#FFB300" stopOpacity="0" />
                </linearGradient>
              </defs>
              {/* stožár */}
              <rect x="172" y="120" width="16" height="300" fill="#E8ECF2" rx="3" />
              {/* výztuhy stožáru — šrafování jako na stavbě */}
              <g stroke="#0C1B2A" strokeWidth="3" opacity="0.25">
                <line x1="172" y1="150" x2="188" y2="170" />
                <line x1="172" y1="190" x2="188" y2="210" />
                <line x1="172" y1="230" x2="188" y2="250" />
                <line x1="172" y1="270" x2="188" y2="290" />
                <line x1="172" y1="310" x2="188" y2="330" />
                <line x1="172" y1="350" x2="188" y2="370" />
              </g>
              {/* solární panel */}
              <g transform="rotate(-18 180 190)">
                <rect x="130" y="178" width="100" height="56" rx="4" fill="#12314F" stroke="#3D8BFF" strokeWidth="2" />
                <line x1="163" y1="178" x2="163" y2="234" stroke="#3D8BFF" strokeWidth="1.5" opacity="0.7" />
                <line x1="197" y1="178" x2="197" y2="234" stroke="#3D8BFF" strokeWidth="1.5" opacity="0.7" />
                <line x1="130" y1="206" x2="230" y2="206" stroke="#3D8BFF" strokeWidth="1.5" opacity="0.7" />
              </g>
              {/* hlava s kamerami */}
              <rect x="148" y="84" width="64" height="40" rx="8" fill="#E8ECF2" />
              <circle className="tower-eye" cx="180" cy="104" r="11" fill="#0C1B2A" />
              <circle className="tower-eye-glow" cx="180" cy="104" r="5" fill="#FFB300" />
              {/* maják */}
              <rect className="tower-lamp" x="172" y="64" width="16" height="14" rx="4" fill="#FFB300" />
              <line x1="180" y1="64" x2="180" y2="84" stroke="#E8ECF2" strokeWidth="4" />
              {/* patka / betonový blok */}
              <rect x="120" y="420" width="120" height="34" rx="5" fill="#E8ECF2" />
              <g stroke="#0C1B2A" strokeWidth="6" opacity="0.85">
                <line x1="128" y1="454" x2="152" y2="424" />
                <line x1="160" y1="454" x2="184" y2="424" />
                <line x1="192" y1="454" x2="216" y2="424" />
              </g>
              {/* zem — perimetr */}
              <line x1="20" y1="456" x2="340" y2="456" stroke="#E8ECF2" strokeWidth="2" strokeDasharray="10 8" opacity="0.5" />
            </svg>
            <p className="tower-caption">PROGUARD Solar — hlídá i tam, kde elektřina ještě není</p>
          </div>
        </div>

        {/* výstražný pruh — perimetr stavby */}
        <div className="hero-stripe" aria-hidden="true" />
      </header>

      {/* ================= SEKCE 1: JAK VĚŽ HLÍDÁ ================= */}
      <section className="sekce sekce-postup" aria-labelledby="postup-h">
        <div className="sekce-inner">
          <p className="eyebrow">Od příjezdu věže po zásah</p>
          <h2 id="postup-h" className="sekce-h2">
            Jak PROGUARD uhlídá vaši stavbu
          </h2>
          <ol className="postup">
            {veze.map((v, i) => (
              <li className="postup-krok" key={v.krok}>
                <span className="postup-cislo" aria-hidden="true">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="postup-telo">
                  <h3 className="postup-h3">{v.krok}</h3>
                  <p className="postup-p">{v.popis}</p>
                  <span className="postup-detail">{v.detail}</span>
                </div>
              </li>
            ))}
          </ol>
          <div className="postup-vysledek">
            <p>
              Výsledek pro vás: <strong>nulový vandalismus, nulové ztráty materiálu</strong>{" "}
              a záznam z kamer jako důkaz, kdyby přece jen k něčemu došlo.
            </p>
          </div>
        </div>
      </section>

      {/* ================= SEKCE 2: DŮVĚRA / ČÍSLA ================= */}
      <section className="sekce sekce-duvera" aria-labelledby="duvera-h">
        <div className="sekce-inner">
          <p className="eyebrow eyebrow-svetly">Proč věž místo strážného</p>
          <h2 id="duvera-h" className="sekce-h2 sekce-h2-svetly">
            Strážný usne. Kamera ne.
          </h2>
          <div className="duvody">
            {duvody.map((d) => (
              <article className="duvod" key={d.cislo}>
                <span className="duvod-cislo">{d.cislo}</span>
                <p className="duvod-p">{d.text}</p>
              </article>
            ))}
          </div>

          <div className="centrum">
            <div className="centrum-text">
              <h3 className="centrum-h3">Vlastní dohledové centrum v Praze</h3>
              <p>
                Na vaši stavbu dohlíží naši vlastní operátoři — žádný externí
                partner, na kterého bychom házeli odpovědnost. Jejich pohotovost
                pravidelně zkoušíme neohlášenými testy: naši figuranti simulují
                průnik na stavbu a měříme, jak rychle operátor zareaguje.
              </p>
              <p>
                Stavíte víc staveb najednou? Se slevovým programem pro souběžné
                stavby zabezpečíte každou další věž levněji.
              </p>
            </div>
            <ul className="centrum-fakta">
              <li>
                <strong>Česká firma</strong>
                <span>vývoj i výroba systému v ČR</span>
              </li>
              <li>
                <strong>Letité zkušenosti</strong>
                <span>vycházíme z praxe fyzické ostrahy objektů</span>
              </li>
              <li>
                <strong>Praha 4, Na Dolinách 1272/41</strong>
                <span>věže vozíme na stavby po celé ČR</span>
              </li>
              <li>
                <strong>Penetrační testy</strong>
                <span>operátory prověřují neohlášení figuranti</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
